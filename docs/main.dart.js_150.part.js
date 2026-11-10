((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Aj,A7,Ak,Al,V,A8,Am,An,C={
u8(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
h6m(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
K6(d){var w
if(d===0)return $.Dl()
if(d===1)return $.a3b()
if(d===2)return $.hCj()
if(Math.abs(d)<4294967296)return C.bbn(A.o.N(d))
w=C.hXb(d)
return w},
bbn(d){var w,v,u,t,s=d<0
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
return new C.o8(v===0?!1:s,w,v)}v=A.o.ao(A.o.gal0(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.ao(d,65536)}v=C.u8(v,w)
return new C.o8(v===0?!1:s,w,v)},
hXb(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.W(B.dL("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.Dl()
w=$.hCi()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.ll(A.aG.gaS(w))
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
if(s<0)p=q.mz(0,-s)
else p=s>0?q.dV(0,s):q
return p},
h6n(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hoJ(d,e,f,g){var w,v,u,t,s,r=A.o.ao(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dV(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fN(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dV(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hoE(d,e,f,g){var w,v,u,t,s=A.o.ao(f,16)
if(A.o.F(f,16)===0)return C.h6n(d,e,s,g)
w=e+s+1
C.hoJ(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hXe(d,e,f,g){var w,v,u,t,s=A.o.ao(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dV(1,r)-1,o=A.o.fN(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dV(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fN(u,r)}w&2&&B.aj(g)
g[n]=o},
cLk(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hXc(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
bbo(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aD(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aD(v,16)&1)}},
hoK(d,e,f,g,h,i){var w,v,u,t,s,r
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
hXd(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ec((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
o8:function o8(d,e,f){this.a=d
this.b=e
this.c=f},
cLl:function cLl(){},
cLm:function cLm(){},
cLn:function cLn(d,e){this.a=d
this.b=e},
cLo:function cLo(d){this.a=d},
aSG:function aSG(d,e){this.a=d
this.b=e},
hev(d,e,f){var w=new C.Si(d,A.o.ao(Date.now(),1000),e)
w.Q=f
return w},
Si:function Si(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a4k:function a4k(d,e){this.a=d
this.b=e},
bJz:function bJz(d){this.a=d
this.c=this.b=0},
hFy(){return new C.bHU()},
bHU:function bHU(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cDu:function cDu(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hWU(d,e,f){var w,v,u,t,s
if(d.gan(d))return new Uint8Array(0)
w=new Uint8Array(B.cn(d.gd_Q(d)))
v=f*2+2
u=C.hmn(C.hmp(),64)
t=new C.cmF(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cmG(e,1000,v)
s=new Uint8Array(v)
return A.aG.dt(s,0,t.cNV(w,0,s,0))},
cDs:function cDs(d,e){this.c=d
this.d=e},
ayb:function ayb(d,e){this.a=d
this.b=e},
cDv:function cDv(d,e,f,g){var _=this
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
ba5:function ba5(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cDt:function cDt(){this.a=$},
ho9(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hFh(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bGu:function bGu(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
hc9(d,e){e&=31
return(d&$.qp[e])<<e>>>0},
nD(d,e){e&=31
return(d>>>e|C.hc9(d,32-e))>>>0},
hmo(d){var w,v=new C.atK()
if(B.iQ(d))v.aLC(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hmp(){var w=C.hmo(0),v=new Uint8Array(4),u=x.S
u=new C.cmH(w,v,A.EZ,5,B.bZ(5,0,!1,u),B.bZ(80,0,!1,u))
u.kK(0)
return u},
hmn(d,e){var w=new C.cmD(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cmC:function cmC(){},
cmG:function cmG(d,e,f){this.a=d
this.b=e
this.c=f},
cmA:function cmA(){},
atJ:function atJ(d){this.a=d},
cmF:function cmF(d){this.a=$
this.b=d
this.c=$},
cmB:function cmB(){},
cmz:function cmz(){},
atK:function atK(){this.b=this.a=$},
cmE:function cmE(){},
cmH:function cmH(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cmD:function cmD(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cmy:function cmy(){},
cmx:function cmx(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bRA:function bRA(){},
bRB:function bRB(d){this.a=d},
i_b(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
bbD:function bbD(){},
cx1:function cx1(){},
bSD:function bSD(d,e){this.a=d
this.b=!1
this.c=e},
bSE:function bSE(){},
i8k(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
awN(d){var w=0,v=B.j(x.H),u
var $async$awN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.fg8?2:4
break
case 2:w=5
return B.b(A.ku.h4("SystemChrome.setEnabledSystemUIMode",d.a6(),u),$async$awN)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.ku.h4("SystemChrome.setEnabledSystemUIOverlays",C.i8k(null),u),$async$awN)
case 6:case 3:return B.h(null,v)}})
return B.i($async$awN,v)},
awQ:function awQ(d,e){this.a=d
this.b=e},
a8W:function a8W(d){this.a=d},
ib5(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fCe(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
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
fCe:function fCe(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aoi(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$aoi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.ahs("ngmy_menu_lib_v1_zzslides_index",A.bK),$async$aoi)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.r(t,"items")
if(x.j.b(s)){t=J.de(s,x.f)
t=B.cH(t,new C.c2y(),t.$ti.k("M.E"),x.P)
r=B.C(t,B.a7(t).k("M.E"))}else r=B.a([],x.d)
A.d.aZ(r,new C.c2z())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoi,v)},
aok(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aok=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aoi(),$async$aok)
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
l=new B.V(Date.now(),0,!1).a9().ae()
p=m.a
k=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nC("ngmy_menu_lib_v1_zzslide_"+B.aL(p,k,""),B.H(["deck",m.ah(),"savedAt",l],t,q),null),$async$aok)
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
return B.b(B.nC("ngmy_menu_lib_v1_zzslides_index",B.H(["items",s,"savedAt",new B.V(Date.now(),0,!1).a9().ae()],t,q),null),$async$aok)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aok,v)},
c2A(d){return C.hL8(d)},
hL8(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c2A=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.ahs("ngmy_menu_lib_v1_zzslide_"+B.aL(d,o,""),A.i3),$async$c2A)
case 7:r=f
o=r.b
q=o==null?null:J.r(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.Wo(B.a2(q,x.N,x.z))
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
return B.i($async$c2A,v)},
aoj(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aoj=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aoi(),$async$aoj)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nG(r,new C.c2B(d))
w=4
return B.b(B.nC("ngmy_menu_lib_v1_zzslides_index",B.H(["items",r,"savedAt",new B.V(Date.now(),0,!1).a9().ae()],x.N,x.z),null),$async$aoj)
case 4:t=f
w=t?5:6
break
case 5:s=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.aQG("ngmy_menu_lib_v1_zzslide_"+B.aL(d,s,"")),$async$aoj)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoj,v)},
c2y:function c2y(){},
c2z:function c2z(){},
c2B:function c2B(d){this.a=d},
ila(d,e,f){return B.bV(A.L,null,new C.fSP(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fSP:function fSP(d,e,f){this.a=d
this.b=e
this.c=f},
a1r:function a1r(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aKj:function aKj(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
fej:function fej(d,e){this.a=d
this.b=e},
fen:function fen(d){this.a=d},
feo:function feo(d){this.a=d},
fep:function fep(d,e,f){this.a=d
this.b=e
this.c=f},
fek:function fek(d){this.a=d},
fel:function fel(d){this.a=d},
fem:function fem(d,e){this.a=d
this.b=e},
fee:function fee(d){this.a=d},
fec:function fec(d){this.a=d},
fed:function fed(d){this.a=d},
fef:function fef(d){this.a=d},
feg:function feg(d){this.a=d},
fet:function fet(d,e){this.a=d
this.b=e},
fes:function fes(d,e){this.a=d
this.b=e},
fei:function fei(d,e,f){this.a=d
this.b=e
this.c=f},
feh:function feh(d,e,f){this.a=d
this.b=e
this.c=f},
feq:function feq(d,e){this.a=d
this.b=e},
fer:function fer(d,e){this.a=d
this.b=e},
few:function few(d){this.a=d},
fex:function fex(d,e){this.a=d
this.b=e},
fev:function fev(d,e){this.a=d
this.b=e},
feu:function feu(){},
hr9(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.X.aM(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.de(w,x.f)
v=B.cH(v,new C.flV(),v.$ti.k("M.E"),x.ea)
u=B.a7(v).k("Z<M.E>")
v=B.C(new B.Z(v,new C.flW(),u),u.k("M.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a2p(d){return C.icl(d)},
icl(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a2p=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.U(x.N,x.ea)
m=new C.fFb(n)
t=4
j=m
i=C
w=7
return B.b(B.a2Z("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a2p)
case 7:j.$1(i.hr9(f))
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
return B.b(B.az(),$async$a2p)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hr9(B.aT(J.r(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.fm3(d),$async$a2p)
case 13:p=j.C(new i.Z(h,new g.fF9(f),o),o.k("M.E"))
A.d.aZ(p,new C.fFa())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a2p,v)},
ai2(d,e){return C.ikQ(d,e)},
ikQ(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ai2=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fSj(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.X.aq(n,null)
q=!1
t=4
w=7
return B.b(B.ahV("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ai2)
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
return B.b(B.az(),$async$ai2)
case 12:p=g
w=13
return B.b(p.au("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ai2)
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
return B.i($async$ai2,v)},
fm3(d){return C.i0z(d)},
i0z(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fm3=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$fm3)
case 7:r=f
q=r.tC("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
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
return B.i($async$fm3,v)},
agU(d,e){return C.iaZ(d,e)},
iaZ(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$agU=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$agU)
case 6:s=g
r=B.aX(x.N)
q=s.tC("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h9(r,q)
J.cc(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a7(q).k("cs.E"))
w=7
return B.b(s.au("StringList","ngmy_books_deleted_v1_"+r,q),$async$agU)
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
return B.b(C.a2p(d),$async$agU)
case 8:n=g
J.nG(n,new C.fBT(e))
w=9
return B.b(C.ai2(d,n),$async$agU)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$agU,v)},
ilf(d,e){return B.a5(d,!1).cc(B.eh(new C.fTa(e),!0,null,x.H))},
hXg(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d0(w.d,new C.cMI())},
oA:function oA(d,e,f){this.a=d
this.b=e
this.c=f},
flV:function flV(){},
flW:function flW(){},
fFb:function fFb(d){this.a=d},
fF9:function fF9(d){this.a=d},
fFa:function fFa(){},
fSj:function fSj(){},
fBT:function fBT(d){this.a=d},
fTa:function fTa(d){this.a=d},
Z7:function Z7(d,e){this.c=d
this.a=e},
ayK:function ayK(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cMI:function cMI(){},
cMK:function cMK(d,e){this.a=d
this.b=e},
cMN:function cMN(d){this.a=d},
cMO:function cMO(d){this.a=d},
cMM:function cMM(){},
cMP:function cMP(d,e){this.a=d
this.b=e},
cML:function cML(d){this.a=d},
cMQ:function cMQ(){},
cMJ:function cMJ(d,e){this.a=d
this.b=e},
cMR:function cMR(){},
cME:function cME(d){this.a=d},
cMC:function cMC(d){this.a=d},
cMD:function cMD(d){this.a=d},
cMF:function cMF(d,e){this.a=d
this.b=e},
cMB:function cMB(d){this.a=d},
cMA:function cMA(d){this.a=d},
cMy:function cMy(d,e){this.a=d
this.b=e},
cMz:function cMz(d){this.a=d},
cMH:function cMH(){},
cMG:function cMG(d){this.a=d},
cMx:function cMx(d,e){this.a=d
this.b=e},
cMw:function cMw(d,e){this.a=d
this.b=e},
cMv:function cMv(d,e){this.a=d
this.b=e},
cMS:function cMS(d){this.a=d},
Z5:function Z5(d,e,f){this.c=d
this.d=e
this.a=f},
aG6:function aG6(d,e,f){this.a=d
this.b=e
this.c=f},
ayG:function ayG(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cLZ:function cLZ(d){this.a=d},
cLY:function cLY(d){this.a=d},
cM0:function cM0(d,e,f){this.a=d
this.b=e
this.c=f},
cM8:function cM8(){},
cM9:function cM9(d){this.a=d},
cM1:function cM1(d,e,f){this.a=d
this.b=e
this.c=f},
cM_:function cM_(d,e){this.a=d
this.b=e},
cM3:function cM3(d,e){this.a=d
this.b=e},
cM4:function cM4(d,e){this.a=d
this.b=e},
cM5:function cM5(d,e){this.a=d
this.b=e},
cM2:function cM2(d){this.a=d},
cM7:function cM7(d){this.a=d},
cM6:function cM6(d,e){this.a=d
this.b=e},
cMe:function cMe(d){this.a=d},
cMa:function cMa(d,e){this.a=d
this.b=e},
cMb:function cMb(d,e){this.a=d
this.b=e},
cMc:function cMc(d,e){this.a=d
this.b=e},
cMd:function cMd(d,e){this.a=d
this.b=e},
ayI:function ayI(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ieI(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ed(v,x.cK).bK(new C.fJJ(),x.H).eR(new C.fJK())}}else if(s)C.hsI()}catch(t){}},
hsI(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ed(v,x.cK).eR(new C.fqb())}catch(u){}},
ieL(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fJJ:function fJJ(){},
fJK:function fJK(){},
fqb:function fqb(){},
hxq(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.em(v,w,"").split(":"))},
hxn(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.ll)return null
return A.a.b5(w,14)},
haR(d){var w
if(d.b!==D.ll)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b5(w,21)},
ifa(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hxr(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
if5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ag("\\s+",!0,!1,!1,!1),f=A.a.i(B.aL(d,g," "))
g=B.ag("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aL(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.U(g,g)}v=B.ag("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.lc(0,f)
t=x.N
u=B.cH(u,new C.fKI(),B.a7(u).k("M.E"),t)
s=B.C(u,B.a7(u).k("M.E"))
if(s.length===0)return B.U(t,t)
for(u=v.lc(0,f),u=new B.K5(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.S_(A.a.ar(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.S_(A.a.b5(f,q)):p)+"\\.?$"
l=B.ag(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cD(w)
if(l==null)return B.U(t,t)
k=B.U(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
if3(d,e){var w,v,u,t,s,r=B.a7(e).k("cx<1>"),q=B.C(new B.cx(e,r),r.k("M.E"))
A.d.aZ(q,new C.fKH())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.L)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.c9(s,"]"))continue
w=B.aRF(w,u,s,0)}return w},
if7(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a5Y:$.hEl(),s=x.N,r=B.U(s,s)
for(s=t.gdW(t),s=s.gaf(s);s.C();){w=s.gS(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.c9(u,"]"))continue
r.n(0,w.b,u)}return r},
hxo(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fmX(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
if(C.hxq(q)===e)return q}return null},
if8(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b5(v,u)
return A.d.gI(D.HM).a},
if9(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.aeE(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.aeE(0,0,0)
v=C.fmX(b6,b0)
u=C.fmX(b5,b0)
t=0
if(v!=null&&u!=null){s=C.if7(b2,C.if5(C.hxo(b2),v.r))
if(s.a!==0){u.r=C.if3(C.hxo(b4),s)
t=s.a}}r=B.aX(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){l=C.hxq(o[m])
if(l==null||l==="utangulizi")continue
r.M(0,l)}for(q=B.en(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fmX(b6,n)
i=C.fmX(b5,n)
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
a0=C.haR(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.L)(a1),++a7){a8=a1[a7]
if(C.hxn(a8)===a0||C.haR(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.Rx(a1,new C.fKO(a0),!0)
a1=f.z
a6=Date.now()
a9=$.j9
$.j9=a9+1
A.d.M(a1,new C.eP(""+1000*a6+"_"+a9,D.ll,a2,a3,a4,a5,"",24,A.a7,A.bp,A.aF,4279310375,A.bj,d.at,D.bi,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.co,0,"","","","","",!1,0));++e}b5.f=new B.V(Date.now(),0,!1)
return new B.aeE(k,t,e)},
if4(d){var w=C.if8(d)
if(d.w==="hati_kuhowa")return C.hwL("",w)
return C.hwK("",w)},
fKI:function fKI(){},
fKH:function fKH(){},
fKO:function fKO(d){this.a=d},
hsp(){var w=new B.V(Date.now(),0,!1),v=new C.fpe()
return B.w(v.$1(B.bW(w)))+"/"+B.w(v.$1(B.bL(w)))+"/"+B.bC(w)},
hb_(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fLG(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.ll&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hxF(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fLG(d)
w=B.bk(u)
if(w==null)return!C.fLG(d)
return new B.V(Date.now(),0,!1).a9().d2(w.a9().bS(18e9))},
ifQ(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.V(Date.now(),0,!1).a9().ae()},
hPb(d){return A.a.i(d).toLowerCase()},
aqF(d){return C.hPd(d)},
hPd(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$aqF=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$aqF)
case 7:r=f
p=r.tC("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.Y:p
o=q
o=new B.N(o,C.ijr(),B.T(o).k("N<1,n>")).c_(0,new C.cdR())
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
return B.i($async$aqF,v)},
aqE(d,e){return C.hPc(d,e)},
hPc(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aqE=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aqF(d),$async$aqE)
case 3:r=g
if(!J.cc(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$aqE)
case 8:q=g
w=9
return B.b(q.au("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pP(r)),$async$aqE)
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
return B.i($async$aqE,v)},
aqG(d,e){return C.hPe(d,e)},
hPe(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aqG=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aqF(d),$async$aqG)
case 3:r=g
if(!J.hu(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$aqG)
case 8:q=g
w=9
return B.b(q.au("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pP(r)),$async$aqG)
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
return B.i($async$aqG,v)},
VM(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$VM=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.h3J&&!a5){w=1
break}t=4
w=7
return B.b(B.az(),$async$VM)
case 7:r=a7
q=B.aT(J.r(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.X.aM(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.U(e,x.I)
for(d=J.k0(p),d=d.gaf(d),a0=x.z;d.C();){n=d.gS(d)
if(f.b(n.b))J.aJ(o,J.k(n.a),C.Wo(B.a2(f.a(n.b),e,a0)))}$.a7K=o}}t=2
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
return B.b(B.c8(),$async$VM)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.up("civic_hati_kiapo_uongozi",null,A.eq),$async$VM)
case 17:l=a7
w=l!=null&&x.f.b(J.r(l,"byState"))?18:19
break
case 18:o=x.N
k=B.U(o,x.I)
for(f=x.f,e=J.k0(f.a(J.r(l,"byState"))),e=e.gaf(e),d=x.z;e.C();){j=e.gS(e)
if(!f.b(j.b))continue
J.aJ(k,J.k(j.a),C.Wo(B.a2(f.a(j.b),o,d)))}for(o=k,o=new B.cD(o,B.a7(o).k("cD<1,2>")).gaf(0);o.C();){f=o.d
f.toString
i=f
h=$.a7K.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbr())f=d===e.gbr()&&f.b<e.gcE()
else f=!0
f=!f}else f=!0
if(f)$.a7K.n(0,i.a,i.b)}w=20
return B.b(C.aqH(),$async$VM)
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
case 16:case 9:$.h3J=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$VM,v)},
aqH(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$aqH=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aqH)
case 6:s=e
r=B.U(x.N,x.P)
for(o=$.a7K,o=new B.cD(o,B.a7(o).k("cD<1,2>")).gaf(0);o.C();){n=o.d
n.toString
q=n
J.aJ(r,q.a,q.b.ah())}w=7
return B.b(s.au("String","ngmy_civic_hati_kiapo_uongozi_v1",A.X.aq(r,null)),$async$aqH)
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
return B.i($async$aqH,v)},
b0I(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$b0I=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.VM(!1),$async$b0I)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a7K.h(0,t)
r=s==null?null:s.hN()
if(r==null){u=null
w=1
break}u=C.bE0(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b0I,v)},
a7L(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a7L=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.V(Date.now(),0,!1)
o=a1.hN()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.L)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a7K.n(0,d,o)
$.h3J=!0
w=3
return B.b(C.aqH(),$async$a7L)
case 3:w=4
return B.b(B.c8(),$async$a7L)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.U(e,x.P)
for(n=$.a7K,n=new B.cD(n,B.a7(n).k("cD<1,2>")).gaf(0);n.C();){l=n.d
l.toString
q=l
J.aJ(r,q.a,q.b.ah())}w=9
return B.b(B.nC("civic_hati_kiapo_uongozi",B.H(["byState",r,"updatedAt",new B.V(Date.now(),0,!1).a9().ae()],e,x.z),null),$async$a7L)
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
return B.i($async$a7L,v)},
aqI(d){var w=0,v=B.j(x.T),u,t,s
var $async$aqI=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hX().a6r(A.eL),$async$aqI)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fl(),$async$aqI)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b0H(t,d),$async$aqI)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aqI,v)},
b0H(d,e){return C.hPf(d,e)},
hPf(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b0H=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c8(),$async$b0H)
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
p=n.iw("media")
w=8
return B.b(p.xi(q,new Uint8Array(B.cn(d)),D.bHW),$async$b0H)
case 8:n=p.CS(q)
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
return B.i($async$b0H,v)},
KV(d,e,f,g,h,i,j,k,l,m,n){var w=C.cF()
return C.ew(e,!1,f,A.aF,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bi,4280172719,2,d,0,0,"",D.co,D.cV,l,m,n)},
foG(d,e,f,g,h,i,j,k,l){var w=C.cF()
return C.ew(A.bj,!1,4279310375,A.aF,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.co,D.fb,j,k,l)},
h7X(d,e,f,g,h,i,j,k){var w=C.cF(),v=A.k.E(i*0.0017,0.02,0.06)
return C.ew(h,!1,j,A.aF,"marriage_field_"+d+":"+A.k.ac(g,3),4280640491,i,A.cD,A.U,"",v,w,null,"","",0,!1,"",0,D.bi,4280172719,2,k,0,0,"",D.co,D.cV,g,e,f)},
fod(d,e,f,g){return C.foG(0,0.002,D.fD,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
h7Y(d,e,f,g,h,i,j,k){var w=C.cF()
return C.ew(A.qX,!1,j,A.aF,"marriage_field_"+d+":"+A.k.ac(g,3),4280640491,i,A.bp,A.a7,"",h,w,null,"","",0,!1,"",0,D.bi,4280172719,2,k,0,0,"",D.co,D.cV,g,e,f)},
hso(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.em(v,w,"").split(":"))},
bE0(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
l=C.hso(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.ll&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hN()}h=C.hav(u)
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
l=C.hso(m)
if(l!=null&&r.aj(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.ll&&A.a.c9(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bs(a1.z,new C.fJH(a2))}else A.d.bs(a1.z,new C.fJI())
A.d.M(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fLG(a0))a0.ax=a6.f.a9().ae()
return a0},
hav(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fMt(D.a7_),l=C.cF(),k=x.u,j=B.a([C.ew(A.bj,!1,s,A.aF,"marriage_locked_bg",r,24,A.bp,A.a7,"",1,C.cF(),m,"","",0,!1,"",0,D.bi,q,2,"",0,0,"",D.co,D.lN,1,0,0)],k),i=B.a([],k)
i.push(C.KV("NGMY",A.K,236069181,52,A.bp,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.KV("TAREHE:",A.bj,o,16,A.bp,A.H,A.k.E(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.h7X("tarehe",0.8059999999999999,0.026,0.18,A.bj,16,p,C.hsp()))
i.push(C.fod(0.8099999999999999,0.026+A.k.E(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.KV("HATI YA KIAPO CHA UONGOZI",A.K,p,26,A.bp,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.KV("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.K,o,11,A.cD,A.a7,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.foG(0,0.002,D.fD,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.h7Y("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.h7Y("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.h7Y("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.foG(268435456,0.175,D.bi,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.KV("VIDEO YA KIAPO",A.bj,o,10,A.bp,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.ew(A.bj,!1,s,A.aF,"__kiapo_video__",r,24,A.bp,A.a7,"",0.131,C.cF(),t,"","",0,!1,"",0,D.bi,q,2,"",0,0,"",D.co,D.lN,0.77,0.115,0.492))
i.push(C.KV("Rais Anayeapa:",A.bj,p,15,A.bp,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.KV("Jina:",A.bj,p,13,A.bp,A.U,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.h7X("rais_jina",0.195,0.6930000000000001,0.62,A.bj,13,p,""))
i.push(C.fod(0.195,0.7130000000000001,0.62,n))
i.push(C.KV("Sahihi:",A.bj,p,13,A.bp,A.U,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.ew(A.bj,!1,s,A.aF,"marriage_sign_rais",0,24,A.bp,A.a7,"",0.07,C.cF(),t,"","",0,!1,"",0,D.bi,0,2,"",0,0,"",D.co,D.fb,0.38,0.21500000000000002,0.73))
i.push(C.fod(0.21500000000000002,0.795,0.38,n))
i.push(C.KV("Tarehe:",A.bj,p,13,A.bp,A.U,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.h7X("rais_tarehe",0.745,0.74,0.2,A.bj,12,p,C.hsp()))
i.push(C.fod(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.foG(0,0.032,D.bi,o,1,"state_box",0.72,0.14,0.875),C.KV("EMO 'YA M'MBONDO "+w,A.K,p,14,A.bp,A.U,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rM(4294967035,t,0,0,j,l,D.qL,"","",u,D.dh)
return C.C0(t,t,t,t,D.oF,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cF(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
ah3(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ah3=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.K(x.q).f.U(D.faT)
w=1
break}w=3
return B.b(C.VM(!0),$async$ah3)
case 3:w=4
return B.b(C.b0I(p),$async$ah3)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hxF(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bV(D.bk0,null,new C.fEx(p),f,!0,!0,!1,A.lO,!1,!1,x.N),$async$ah3)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.ck(null,null,!0,null,new C.fEy(),f,null,!0,!0,x.y),$async$ah3)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.hav(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.K(x.q).f
q.U(B.b3(null,null,null,null,null,A.t,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.hav(p))
case 1:return B.h(u,v)}})
return B.i($async$ah3,v)},
fpe:function fpe(){},
cdR:function cdR(){},
fJH:function fJH(d){this.a=d},
fJI:function fJI(){},
fEx:function fEx(d){this.a=d},
fEv:function fEv(d){this.a=d},
fEw:function fEw(d){this.a=d},
fEy:function fEy(){},
fEt:function fEt(d){this.a=d},
fEu:function fEu(d){this.a=d},
arc:function arc(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEV:function aEV(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
ei6:function ei6(d){this.a=d},
ei4:function ei4(d){this.a=d},
ei5:function ei5(d){this.a=d},
ei7:function ei7(d){this.a=d},
ei8:function ei8(d){this.a=d},
wQ(d,e,f,g,h,i,j,k,l,m,n){var w=C.cF()
return C.ew(e,!1,f,A.aF,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bp,h,"",i,w,null,"","",0,!1,"",j,D.bi,4280172719,2,d,0,0,"",D.co,D.cV,l,m,n)},
hs0(d,e,f){var w=4291404327
return B.a([C.qo(0,f,D.eT,w,2,"ring_l",f,d-f*0.42,e),C.qo(0,f,D.eT,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fnE(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qo(4294967288,f,D.eT,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qo(h,s,D.eT,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qo(h,f*0.46,D.eT,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qo(d,e,f,g,h,i,j,k,l){var w=C.cF()
return C.ew(A.bj,!1,4279310375,A.aF,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.co,D.fb,j,k,l)},
fnD(d,e,f,g,h,i,j,k,l){var w=C.cF(),v=A.k.E(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.ew(h,!1,k,A.aF,i?u+A.k.ac(g,3)+":"+A.o.ac(j,1):u+A.k.ac(g,3),4280640491,j,A.cD,A.U,"",v,w,null,"","",0,!1,"",0,D.bi,4280172719,2,l,0,0,"",D.co,D.cV,g,e,f)},
bBp(d,e,f,g){return C.qo(0,0.002,D.fD,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hs_(d,e,f,g,h){var w=A.k.E(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qo(0,0.036,D.bi,h,1.4,"banner_box_"+d,w,v,e),C.wQ(d,A.K,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hxp(){var w=new B.V(Date.now(),0,!1),v=new C.fKN()
return B.w(v.$1(B.bW(w)))+"/"+B.w(v.$1(B.bL(w)))+"/"+B.bC(w)},
hs1(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wQ(r+".",A.bj,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fnD("witness_"+d+"_"+r+"_name",q,g,p,A.bj,!0,16,j,"[Jina la Shahidi]"),C.bBp(q,g+A.k.E(0.0272,0.02,0.06),p,w),C.wQ("Sahihi:",A.bj,j,15,A.a7,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.ew(A.bj,!1,4279310375,A.aF,"marriage_sign_"+d+"_witness_"+r,0,24,A.bp,A.a7,"",0.05,C.cF(),null,"","",0,!1,"",0,D.bi,0,2,"",0,0,"",D.co,D.fb,s,t,g-0.004),C.bBp(t,g+0.044,s,w)],x.u)},
ahu(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.doT,D.cru,D.dgO,D.diK],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.L)(s),++w)for(v=A.d.gaf(s[w]);v.C();){u=v.gS(0)
if(u.a===d)return u}return null},
h7b(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fMt(d.d),v=B.a([C.ew(A.bj,!1,4279310375,A.aF,"marriage_locked_bg",4280640491,24,A.bp,A.a7,"",1,C.cF(),w,"","",0,!1,"",0,D.bi,4280172719,2,"",0,0,"",D.co,D.lN,1,0,0)],x.u)
A.d.v(v,C.i36(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
i36(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wQ("NGMY",A.K,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hs0(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hs0(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fnE(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fnE(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wQ("\ud83c\udf33",A.K,4279898632,22,A.a7,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.qo(0,0.062,D.eT,b1,1.6,"crest_o",0.11,0.445,0.012),C.qo(0,0.046,D.eT,b1,1,"crest_i",0.084,0.458,0.02),C.wQ("MUHURI",A.K,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.qo(0,0.002,D.fD,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qo(b9,0.016,D.lm,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qo(0,0.002,D.fD,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wQ("TAREHE:",A.bj,c0,20,A.H,A.k.E(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fnD("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bj,!1,21,b9,C.hxp()),C.bBp(0.814,0.026+A.k.E(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wQ(d2,A.K,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qo(c0,0.0026,D.bi,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qo(c3.e,0.138,D.bi,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cF()
c2.push(C.ew(A.bj,!1,b9,A.aF,"marriage_field_utangulizi:"+A.k.ac(0.82,3),b2,19,A.bp,A.cA,"",0.128,s,a9,"","",0,!1,"",0,D.bi,b3,2,c5,0,0,"",D.co,D.cV,0.82,0.09,t))
t+=c4
if(c8){r=A.k.E(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qo(0,0.036,D.bi,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cF()
A.d.v(c2,B.a([s,C.ew(A.K,!1,c0,A.aF,"marriage_field_nimetowe_label:"+A.k.ac(r,3),b2,30,A.bp,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bi,b3,2,c7,0,0,"",D.co,D.cV,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hs_(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wQ(c9,A.bj,b9,d0,A.U,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.E(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.E(0.037399999999999996,0.02,0.06):A.k.E(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fnD("mahari_"+p,0.132,k,m,A.bj,!1,16,b9,s)
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
d=B.a([new C.eP(""+1000*i+"_"+h,D.cV,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bp,A.aF,c0,A.bj,a9,D.bi,b2,b3,2,0,!1,s,0,D.co,0,"","","","","",!1,0),j,new C.eP(""+1000*f+"_"+e,D.fb,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a7,A.bp,A.aF,b6,A.bj,a9,D.fD,0,b5,0.8,0,!1,g,0,D.co,0,"","","","","",!1,0)],c1)
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
A.d.v(d,B.a([new C.eP(""+1000*s+"_"+p,D.cV,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bp,A.aF,b7,A.dV,a9,D.bi,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.co,0,"","","","","",!1,0),new C.eP(""+1000*i+"_"+h,D.fb,a1,a2,0.046,0.025875,"",24,A.a7,A.bp,A.aF,b6,A.bj,a9,D.bi,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.co,0,"","","","","",!1,0),new C.eP(""+1000*g+"_"+f,D.cV,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bp,A.aF,b7,A.K,a9,D.bi,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.co,0,"","","","","",!1,0),new C.eP(""+1000*e+"_"+a3,D.fb,a0,k,a1+0.046-a0,l,"",24,A.a7,A.bp,A.aF,b6,A.bj,a9,D.bi,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.co,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hs_("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a6P||w===D.a6R||w===D.a6O||w===D.a6Q){w=t-0.008
A.d.v(c2,C.fnE(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fnE(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.qo(0,a4,D.bi,c0,1.3,"wit_table_border",0.82,0.09,t),C.qo(c0,a4,D.bi,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qo(0,0.0022,D.fD,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wQ("UPANDE WA MKE",A.K,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wQ("UPANDE WA MUME",A.K,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hs1("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hs1("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.qo(0,0.11,D.bi,c0,1.2,"mw_box",0.82,0.09,t),C.wQ("MWANDISHI",A.bj,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wQ("Jina:",A.bj,b9,15,A.a7,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fnD("mwandishi_jina",0.215,w,0.3116,A.bj,!0,15,b9,""),C.bBp(0.215,p,0.3116,b5),C.wQ("Sahihi:",A.bj,b9,15,A.a7,0.028,0,"mw_sl",0.09,0.5,w),C.ew(A.bj,!1,b6,A.aF,"marriage_sign_mwandishi",0,24,A.bp,A.a7,"",0.044,C.cF(),a9,"","",0,!1,"",0,D.bi,0,2,"",0,0,"",D.co,D.fb,0.3161999999999999,0.5738,s-0.044),C.bBp(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.qo(0,0.032,D.bi,c0,1,"state_box",0.7,0.15,a8),C.wQ("EMO 'YA M'MBONDO "+a7,A.K,b9,26,A.U,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
if6(d){var w,v,u,t=null,s=B.b1(d.f),r=B.b1(d.r),q=C.hb9(d.d),p=new C.fKJ(s),o=new C.fKK(s),n=d.z,m=n===D.a6P||n===D.a6R||n===D.a6O||n===D.a6Q,l=n===D.aIL||n===D.a6S||n===D.aIM,k=B.bS(0,B.fT(q,A.A,t,t,A.ci,A.bX,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a6S?26:16
i.push(new C.fKM().$1$size(w))}if(n===D.aIN)i.push(D.fSH)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.iK,A.i,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
i.push(A.am)
n=B.J(r,A.r,1.1)
w=B.m(4)
i.push(B.p(t,B.x(B.a([p.$0(),D.aSa,p.$1$w(0.9),D.aSa,p.$1$w(0.75)],j),A.m,t,A.e,A.i,0,A.p),A.f,t,t,new B.o(D.bey,t,n,w,t,t,A.n),t,t,t,t,A.alS,t,t,t))
i.push(A.am)
i.push(new C.fKL(r).$1("NIMETOWE"))
i.push(A.fG)
v=J.e_(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.Nk,new B.ca(A.aM,A.e,A.i,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.db,new B.by(1,A.ba,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b2)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
return new B.an(A.a_,t,A.b3,A.t,B.a([k,new B.D(A.akt,B.x(i,A.ak,t,A.e,A.i,0,A.p),t)],j),t)},
hwK(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.ahu(e,t)
if(r==null)r=A.d.gI(D.HM)
w=C.cF()
v=C.rM(r.e,t,0,0,C.h7b(r,0.165,y.O,D.djl,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.qL,"","",s,D.dh)
w=C.cF()
u=A.a.i(d)
if(u.length===0)u=t
return C.C0(t,t,t,t,D.oF,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hwL(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.ahu(e,t)
if(r==null)r=A.d.gI(D.HM)
w=C.cF()
v=C.rM(r.e,t,0,0,C.h7b(r,0.165,y.f,D.deN,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.qL,"","",s,D.dh)
w=C.cF()
u=A.a.i(d)
if(u.length===0)u=t
return C.C0(t,t,t,t,D.oF,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bFm(d,e,f){var w=0,v=B.j(x.T),u
var $async$bFm=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bV(A.L,null,new C.fWD(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFm,v)},
ah4(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ah4=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("Z<1>")
p=B.C(new B.Z(i,new C.fEB(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(D.Mw,null,new C.fEC(p),d,!0,!0,!1,A.lO,!1,!1,x.N),$async$ah4)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hN())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bFm(d,"Hati ya Kuhowa",D.HM),$async$ah4)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.LA(d,"Tafuta jimbo\u2026","",A.ko,"Chagua jimbo"),$async$ah4)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hwK(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ah4,v)},
ah5(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ah5=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("Z<1>")
p=B.C(new B.Z(i,new C.fEF(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(D.Mw,null,new C.fEG(p),d,!0,!0,!1,A.lO,!1,!1,x.N),$async$ah5)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hN())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bFm(d,"Hati ya Kuhoweya",D.HM),$async$ah5)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.LA(d,"Tafuta jimbo\u2026","",A.ko,"Chagua jimbo"),$async$ah5)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hwL(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ah5,v)},
ah6(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$ah6=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.T(i).k("Z<1>")
m=B.C(new B.Z(i,new C.fEJ(),n),n.k("M.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(D.Mw,null,new C.fEK(m),d,!0,!0,!1,A.lO,!1,!1,x.N),$async$ah6)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(m).hN())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bFm(d,"Malipo ya Awamu ya Mahari",D.RL),$async$ah6)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.LA(d,"Tafuta jimbo\u2026","",A.ko,"Chagua jimbo"),$async$ah6)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.ahu(s,D.RL)
if(q==null)q=A.d.gI(D.RL)
n=C.cF()
p=C.rM(q.e,null,0,0,C.h7b(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.d9n,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.qL,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dh)
n=C.cF()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.C0(null,null,null,null,D.oF,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ah6,v)},
xS:function xS(d,e){this.a=d
this.b=e},
jA:function jA(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fKN:function fKN(){},
fKJ:function fKJ(d){this.a=d},
fKL:function fKL(d){this.a=d},
fKM:function fKM(){},
fKK:function fKK(d){this.a=d},
fWD:function fWD(d,e){this.a=d
this.b=e},
adN:function adN(d,e,f){this.c=d
this.d=e
this.a=f},
e4E:function e4E(d,e,f){this.a=d
this.b=e
this.c=f},
e4D:function e4D(d,e){this.a=d
this.b=e},
e4C:function e4C(d,e){this.a=d
this.b=e},
adb:function adb(d,e,f){this.c=d
this.d=e
this.a=f},
fEB:function fEB(){},
fEC:function fEC(d){this.a=d},
fEz:function fEz(d){this.a=d},
fEA:function fEA(d){this.a=d},
fEF:function fEF(){},
fEG:function fEG(d){this.a=d},
fED:function fED(d){this.a=d},
fEE:function fEE(d){this.a=d},
fEJ:function fEJ(){},
fEK:function fEK(d){this.a=d},
fEH:function fEH(d){this.a=d},
fEI:function fEI(d){this.a=d},
KY(d,e,f,g,h,i,j,k,l,m){var w=C.cF()
return C.ew(e,!1,f,A.aF,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bp,h,"",i,w,null,"","",0,!1,"",0,D.bi,4280172719,2,d,0,0,"",D.co,D.cV,k,l,m)},
D2(d,e,f,g,h,i,j,k,l){var w=C.cF()
return C.ew(A.bj,!1,4279310375,A.aF,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.co,D.fb,j,k,l)},
hsL(d,e,f){return C.D2(0,0.002,D.fD,4293056712,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.022)},
bBz(d,e,f,g,h){return B.a([C.D2(4294967288,0.032,D.bi,4291404327,1.15,"pill_"+d,g,f,e),C.KY(d,A.K,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
h81(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.w(e)
return B.a([C.D2(0,0.002,D.fD,g,1,"orn_l_"+t,u,d,v),C.D2(h,0.016,D.lm,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.D2(0,0.002,D.fD,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a1O(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.KY(d,A.bj,j,i,A.U,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cF()
return B.a([v,C.ew(A.K,!1,j,A.aF,"marriage_field_"+e+":"+A.k.ac(t,3),4280640491,i,A.cD,A.U,"",0.02,s,null,"","",0,!1,"",0,D.bi,4280172719,2,k,0,0,"",D.co,D.cV,t,u,g-0.002),C.hsL(u,g+0.018,t)],x.u)},
hsM(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.D2(h,0.028,D.bi,h,0,"chv_"+d,g,e,f),C.D2(w,0.024,D.lm,w,0,"chv_l_"+d,0.024,e-0.008,v),C.D2(w,0.024,D.lm,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.KY(d,A.K,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bBy(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.KY("Sahihi:",A.bj,h,10,A.U,0.02,"is_"+d,0.12,e,f),C.ew(A.bj,!1,4279310375,A.aF,"marriage_sign_"+d,0,24,A.bp,A.a7,"",0.032,C.cF(),null,"","",0,!1,"",0,D.bi,0,2,"",0,0,"",D.co,D.fb,v,w,f-0.006),C.hsL(w,f+0.016,v)],x.u)},
hba(d){var w,v
for(w=0;w<19;++w){v=D.S_[w]
if(v.a===d)return v}return null},
ihp(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.ahu(A.a.b5(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.ahu(A.a.b5(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b5(k,18)
w=C.ahu(u,D.RL)
v=w==null?l:w.d
if(v==null){w=C.ahu(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.hba(A.a.b5(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.htA.aa(0)
$.htN.aa(0)
t=C.fMt(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.L)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
hch(d){var w=0,v=B.j(x.T),u
var $async$hch=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bV(A.L,null,new C.fY5(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hch,v)},
xV:function xV(d,e){this.a=d
this.b=e},
nV:function nV(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bkT:function bkT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fY5:function fY5(){},
adQ:function adQ(d){this.a=d},
emT:function emT(d,e){this.a=d
this.b=e},
emS:function emS(d){this.a=d},
emR:function emR(d,e){this.a=d
this.b=e},
afw:function afw(d,e,f){this.c=d
this.d=e
this.a=f},
hb9(d){return $.htN.c3(0,d,new C.fMv(d))},
fMt(d){return $.htA.c3(0,d,new C.fMu(d))},
fG(d){return B.h1i(d>>>16&255,d>>>8&255,d&255,255)},
i6h(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.huW(4294570461,4293910718,4284234270,u)
case 1:return C.huW(4294635750,4293975240,t,4292912216)
case 2:w=C.fmb(s,4294505966,r)
C.bBj(w,14,16,p)
C.kF(w,8,9,464,836,u,1.2)
C.CZ(w,2,2,1,1,u,10)
C.CZ(w,478,2,-1,1,u,10)
C.CZ(w,2,852,1,-1,u,10)
C.CZ(w,478,852,-1,-1,u,10)
return w
case 3:return C.fmb(4294966515,4294373082,4289102906)
case 4:return C.i0Q(C.fmb(4294376440,4293653998,4290287194))
case 5:w=C.fmb(4294965238,4294437098,4288444980)
C.bBj(w,14,16,4283043359)
C.kF(w,6,7,468,840,u,1)
C.kF(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hr(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.yM(v,n,4294175448)
C.t6(v,n)
C.kF(v,24,24,432,806,4286209070,1)
C.a1B(v,12,12,468,12,o,3,20)
C.a1B(v,12,842,468,842,o,3,20)
C.a1B(v,12,12,12,842,o,3,20)
C.a1B(v,468,12,468,842,o,3,20)
return v
case 7:return C.hZQ(4294440434,4293518297,4280228630,r)
case 8:v=B.hr(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.yM(v,m,4293911504)
C.t6(v,m)
C.kF(v,28,28,424,798,l,1)
C.fvM(v,28,28,l,k)
C.fvM(v,452,28,l,k)
C.fvM(v,28,826,l,k)
C.fvM(v,452,826,l,k)
return v
case 9:v=B.hr(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.yM(v,j,4294111986)
C.t6(v,j)
C.kF(v,18,18,444,818,4292401368,0.7)
B.iS(v,!0,C.fG(p),0,13,0,853)
return v
case 10:return C.i2T(i,4294173372)
case 11:return C.i40(4294439140,4293449662)
case 12:return C.hZI(h,4294239432)
case 13:return C.i3s(4294244340,4293193448)
case 14:return C.i7S(4294505710,4293780694)
case 15:return C.fl7(4294966259,4294439138,o,p,q)
case 16:return C.fl7(4294966776,4294178544,o,g,g)
case 17:return C.fl7(4294965493,4294504170,o,4286200650,q)
case 18:return C.fl7(4294966519,4294373862,o,p,p)
case 19:return C.i1Z()
case 20:return C.i2_()
case 21:v=B.hr(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.yM(v,h,4293976768)
C.t6(v,h)
C.bBj(v,14,16,p)
B.iS(v,!0,C.fG(u),4,475,4,9)
B.iS(v,!0,C.fG(u),4,475,844,849)
B.iS(v,!0,C.fG(u),4,9,4,849)
B.iS(v,!0,C.fG(u),470,475,4,849)
C.a1B(v,10,12,470,12,u,2,16)
C.a1B(v,10,842,470,842,u,2,16)
C.a1B(v,10,12,10,842,u,2,18)
C.a1B(v,470,12,470,842,u,2,18)
C.CZ(v,2,2,1,1,t,10)
C.CZ(v,478,2,-1,1,t,10)
C.CZ(v,2,852,1,-1,t,10)
C.CZ(v,478,852,-1,-1,t,10)
C.kF(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hr(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.yM(v,s,4294438872)
C.t6(v,s)
C.kF(v,14,16,452,822,o,2.2)
C.kF(v,22,24,436,806,o,1)
C.h9n(v,!1,!1,o,p,p,36,14,16)
C.kU(v,240,20,7,o,!0)
C.kU(v,240,834,7,o,!0)
C.kU(v,18,427,7,o,!0)
C.kU(v,462,427,7,o,!0)
return v
case 23:v=B.hr(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.yM(v,i,4293910712)
C.t6(v,i)
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
C.t6(v,e)
C.bBj(v,14,16,p)
B.iS(v,!0,C.fG(u),3,476,3,8)
B.iS(v,!0,C.fG(u),3,476,845,850)
B.iS(v,!0,C.fG(u),3,8,3,850)
B.iS(v,!0,C.fG(u),471,476,3,850)
C.kF(v,9,10,462,834,t,1)
C.kF(v,14,16,452,822,u,1.8)
C.kU(v,240,8,4,u,!0)
C.kU(v,240,846,4,u,!0)
C.kU(v,8,427,4,u,!0)
C.kU(v,472,427,4,u,!0)
C.kU(v,8,8,3,t,!0)
C.kU(v,472,8,3,t,!0)
C.kU(v,8,846,3,t,!0)
C.kU(v,472,846,3,t,!0)
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
B.kW(d,!1,A.dg,new B.SE(s),r,A.d_,1,0,w-1,k,k);++k}},
t6(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.e4()
n.cY(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.ap(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.ap(v==null?0:v)
v=d.a
s=v==null?o:v.dS(u,t,o)
if(s==null)s=new B.it()
v=A.o.E(A.k.N(s.gb6(s))-3,0,255)
r=A.o.E(A.k.N(s.gbc())-3,0,255)
q=A.o.E(A.k.N(s.gb9(s))-2,0,255)
p=d.a
if(p!=null)p.jZ(u,t,v,r,q,255)}},
kF(d,e,f,g,h,i,j){var w,v=null,u=C.fG(i),t=e+g
B.kW(d,!0,A.dg,u,v,A.d_,j,e,t,f,f)
w=f+h
B.kW(d,!0,A.dg,u,v,A.d_,j,e,t,w,w)
B.kW(d,!0,A.dg,u,v,A.d_,j,e,e,f,w)
B.kW(d,!0,A.dg,u,v,A.d_,j,t,t,f,w)},
CZ(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.E(A.k.V(j*0.72),8,j-2)
B.kW(d,!0,A.dg,C.fG(i),u,A.d_,2,e,e+g*j,f,f)
B.kW(d,!0,A.dg,C.fG(i),u,A.d_,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kW(d,!0,A.dg,C.fG(i),u,A.d_,1,w,e+g*t,v,v)
B.kW(d,!0,A.dg,C.fG(i),u,A.d_,1,w,w,v,f+h*t)},
huW(d,e,f,g){var w=null,v=B.hr(w,w,A.c9,0,A.e0,854,w,0,3,w,A.c9,480,!1)
C.yM(v,d,e)
C.t6(v,d)
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
fmb(d,e,f){var w=null,v=B.hr(w,w,A.c9,0,A.e0,854,w,0,3,w,A.c9,480,!1)
C.yM(v,d,e)
C.t6(v,d)
C.kF(v,14,16,452,822,f,1.6)
C.kF(v,20,22,440,810,f,0.8)
return v},
bBj(d,e,f,g){var w,v=C.fG(g)
B.iS(d,!0,v,0,479,0,f-1)
w=854-f
B.iS(d,!0,v,0,479,w,853);--w
B.iS(d,!0,v,0,e-1,f,w)
B.iS(d,!0,v,480-e,479,f,w)},
i0Q(d){var w,v,u=4291404327
C.bBj(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kU(d,w,8,3,u,!0)
C.kU(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kU(d,7,v,3,u,!0)
C.kU(d,473,v,3,u,!0)}return d},
fyW(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jp(e,f),new B.jp(e+g*n,f),new B.jp(e,f+h*n)],t)
B.a2m(d,C.fG(m),s)
w=A.o.E(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jp(s,u),new B.jp(e+g*v,u),new B.jp(s,f+h*v)],t)
B.a2m(d,C.fG(k),t)
t=A.k.V(n*0.39)
C.kU(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kU(d,e+g*t,f+h*3,4,k,!0)
C.kU(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kU(d,e+g*t,f,5,k,!0)
C.kU(d,e,f+h*t,5,k,!0)}},
h9n(d,e,f,g,h,i,j,k,l){var w,v
C.fyW(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fyW(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fyW(d,k,v,1,-1,e,f,g,h,i,j)
C.fyW(d,w,v,-1,-1,e,f,g,h,i,j)},
a1B(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.lh(d,!0,A.dg,new B.rh(p),null,A.d_,j,r,q)}},
fxU(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kW(d,!0,A.dg,new B.rh(o),null,A.d_,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kW(d,!0,A.dg,new B.rh(o),null,A.d_,1.4,q,q,p,p+h*r)}},
hZQ(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hr(o,o,A.c9,0,A.e0,854,o,0,3,o,A.c9,480,!1)
C.yM(n,d,e)
C.t6(n,d)
C.kF(n,20,20,440,814,f,1.2)
C.fxU(n,0,0,1,1,g)
C.fxU(n,480,0,-1,1,g)
C.fxU(n,0,854,1,-1,g)
C.fxU(n,480,854,-1,-1,g)
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
B.kW(n,!0,A.dg,new B.rh(p),o,A.d_,1.2,240,r,60,q)}return n},
fvM(d,e,f,g,h){var w
C.fCf(d,!0,C.fG(g),13,e,f)
C.fCf(d,!0,C.fG(g),9,e,f)
w=B.a([new B.jp(e,f-4),new B.jp(e+4,f),new B.jp(e,f+4),new B.jp(e-4,f)],x.J)
B.a2m(d,C.fG(h),w)},
kU(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jp(e,v),new B.jp(u,f),new B.jp(e,t),new B.jp(s,f)],x.J)
if(i){B.a2m(d,C.fG(h),r)
return}B.kW(d,!0,A.dg,C.fG(h),w,A.d_,1,e,u,v,f)
B.kW(d,!0,A.dg,C.fG(h),w,A.d_,1,u,e,f,t)
B.kW(d,!0,A.dg,C.fG(h),w,A.d_,1,e,s,t,f)
B.kW(d,!0,A.dg,C.fG(h),w,A.d_,1,s,e,f,v)},
fl6(d,e,f,g,h,i,j){var w,v=B.a([new B.jp(e,f),new B.jp(e+g*28,f),new B.jp(e,f+h*28)],x.J)
B.a2m(d,C.fG(i),v)
v=e+g*14
w=f+h*14
C.kU(d,v,w,6,j,!0)
C.kU(d,v,w,3,i,!0)},
fl7(d,e,f,g,h){var w=null,v=B.hr(w,w,A.c9,0,A.e0,854,w,0,3,w,A.c9,480,!1)
C.yM(v,d,e)
C.t6(v,d)
C.kF(v,18,18,444,818,f,2)
C.kF(v,26,26,428,802,f,0.9)
if(h!=null)B.iS(v,!0,C.fG(h),28,451,28,34)
C.fl6(v,18,18,1,1,g,f)
C.fl6(v,462,18,-1,1,g,f)
C.fl6(v,18,836,1,-1,g,f)
C.fl6(v,462,836,-1,-1,g,f)
return v},
i1Z(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hr(v,v,A.c9,0,A.e0,854,v,0,3,v,A.c9,480,!1)
C.yM(r,u,4294240980)
C.t6(r,u)
C.kF(r,10,12,460,830,t,3.2)
C.kF(r,18,20,444,814,s,1.2)
C.kF(r,24,26,432,802,t,1.8)
C.h9n(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kU(r,w,16,3,t,!0)
C.kU(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kU(r,16,w,3,t,!0)
C.kU(r,464,w,3,t,!0)}return r},
i2_(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hr(t,t,A.c9,0,A.e0,854,t,0,3,t,A.c9,480,!1)
C.yM(p,s,4294373080)
C.t6(p,s)
C.kF(p,16,18,448,818,r,2.4)
C.kF(p,24,26,432,802,4286209044,1)
w=new C.fnv(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.h9n(p,!1,!0,r,q,q,34,16,18)
return p},
bC_(d,e,f,g,h,i){B.iS(d,!0,C.fG(i),e,e+g,f,f+h)},
bCR(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kW(d,!1,A.dg,new B.SE(i),null,A.d_,1,e,w,l,l)}},
i2S(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.kW(d,!1,A.dg,new B.rh(r),null,A.d_,1,e,s,t,t);++v}return}w=f+g-1
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
B.kW(d,!1,A.dg,new B.rh(r),null,A.d_,1,t,t,f,s);++q}},
i2T(d,e){var w,v,u=null,t=B.hr(u,u,A.c9,0,A.e0,854,u,0,3,u,A.c9,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.i2S(t,v,w,30,D.d1D,(A.o.ao(v,30)+A.o.ao(w,30)&1)===0)
C.bC_(t,44,44,392,766,d)
C.bCR(t,44,44,392,766,d,e)
C.t6(t,d)
C.kF(t,44,44,392,766,4292128567,2.2)
C.kF(t,50,50,380,754,4279898632,0.8)
return t},
i4_(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.kU(d,e,f,7,h,!0)
C.kU(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kW(d,!0,A.dg,C.fG(h),o,A.d_,1.6,w,u,v,t)
B.kW(d,!0,A.dg,C.fG(h),o,A.d_,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kW(d,!0,A.dg,new B.rh(p),o,A.d_,1.2,w,v,q,q)}break
default:B.kW(d,!0,A.dg,C.fG(h),o,A.d_,1.5,e-8,e+8,f,f)
B.kW(d,!0,A.dg,C.fG(h),o,A.d_,1.5,e,e,f-8,f+8)
B.lh(d,!0,A.dg,C.fG(h),o,A.d_,2,e,f)}},
i40(d,e){var w,v,u,t,s=null,r=B.hr(s,s,A.c9,0,A.e0,854,s,0,3,s,A.c9,480,!1)
B.iS(r,!0,C.fG(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.i4_(r,u,v,w,4292391514)}C.bC_(r,46,46,388,762,d)
C.bCR(r,46,46,388,762,d,e)
C.t6(r,d)
C.kF(r,46,46,388,762,4291404327,1.8)
return r},
hqa(d,e,f,g){C.fCf(d,!0,C.fG(g),16,e,f)
C.fCf(d,!0,C.fG(g),11,e,f)
C.kU(d,e,f,6,g,!0)
B.kW(d,!0,A.dg,C.fG(g),null,A.d_,1.3,e-14,e+14,f,f)
B.kW(d,!0,A.dg,C.fG(g),null,A.d_,1.3,e,e,f-14,f+14)},
hZI(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hr(v,v,A.c9,0,A.e0,854,v,0,3,v,A.c9,480,!1)
B.iS(s,!0,C.fG(4280948752),0,479,0,853)
B.iS(s,!0,C.fG(u),0,479,0,78)
B.iS(s,!0,C.fG(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hqa(s,w,39,t)
C.hqa(s,w,815,t)}C.bC_(s,38,92,404,670,d)
C.bCR(s,38,92,404,670,d,e)
C.t6(s,d)
C.kF(s,38,92,404,670,t,1.8)
C.kF(s,45,99,390,656,4287322667,0.8)
return s},
i3r(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jp(e,f),new B.jp(q-5,w),new B.jp(q,f-(18-Math.abs(r)*3)),new B.jp(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a2m(d,new B.rh(o),p)}B.lh(d,!0,A.dg,C.fG(4292128567),null,A.d_,3,e,f)},
i3s(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hr(s,s,A.c9,0,A.e0,854,s,0,3,s,A.c9,480,!1)
C.yM(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kW(q,!0,A.dg,new B.rh(v),s,A.d_,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kW(q,!0,A.dg,new B.rh(u),s,A.d_,1.1,v,v,0,853)}B.iS(q,!0,C.fG(r),0,479,0,70)
B.iS(q,!0,C.fG(r),0,479,798,853)
for(t=0;t<5;++t)C.i3r(q,70+t*85,48,4292128567)
C.bC_(q,48,78,384,712,d)
C.bCR(q,48,78,384,712,d,e)
C.t6(q,d)
C.kF(q,48,78,384,712,4291404327,1.6)
return q},
i7S(d,e){var w,v,u,t=null,s=4279970378,r=B.hr(t,t,A.c9,0,A.e0,854,t,0,3,t,A.c9,480,!1)
B.iS(r,!0,C.fG(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kU(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.lh(r,!0,A.dg,new B.rh(u),t,A.d_,1,v,w)}C.bC_(r,40,40,400,774,d)
C.bCR(r,40,40,400,774,d,e)
C.t6(r,d)
C.kF(r,40,40,400,774,4291058750,2)
C.kF(r,48,48,384,758,s,0.8)
return r},
l5:function l5(d,e){this.a=d
this.b=e},
fMv:function fMv(d){this.a=d},
fMu:function fMu(d){this.a=d},
fnv:function fnv(d){this.a=d},
fN8(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
i3U(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
h7V(d){var w,v,u,t=null,s=A.a.cp(d,"{"),r=A.a.oR(d,"}")
if(s<0||r<=s)return t
try{w=A.X.aM(0,Ak.ahq(A.a.ar(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
afV(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$afV=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vE(null,""),$async$afV)
case 3:n=g
if(A.a.i(n).length===0)throw B.W("AI is not available right now. Please try again later.")
t=B.nh(n)
if(e==null)s=A.hS
else{r=C.i3U(e)
s=B.a([new B.a0z(A.cJ.gcu().aO(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.r8(t,d,s,"news",E.Gf),$async$afV)
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
return B.i($async$afV,v)},
bEu(d){return C.ih5(d)},
ih5(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bEu=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.X.aq(d.ah(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.afV(r,null),$async$bEu)
case 7:q=f
p=C.h7V(q)
if(p==null){u=d
w=1
break}o=d.aDQ(p)
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
return B.i($async$bEu,v)},
hua(d){var w,v=F.har(d)
v=B.aL(v,"book","newspaper")
if(F.a2F(d)!=="sw"){w=B.ag("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fR7(d,e,f,g){return C.iiZ(d,e,f,g)},
iiZ(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fR7=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fN8(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hxO()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.afV('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hua(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fR7)
case 3:r=m.h7V(i)
if(r==null)throw B.W(y.S)
q=new C.zR(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.Y,"","","").aDQ(r)
t=q.r
if(t.length===0)throw B.W("The AI did not write a story. Try again.")
s=n+" "+A.d.aG(t," ")
if(F.a2F(s)!=="sw"){p=B.ag("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a2F(A.d.aG(t," "))==="sw"?C.bEu(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fR7,v)},
bDZ(d,e,f,g,h){return C.ieG(d,e,f,g,h)},
ieG(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bDZ=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fL(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.L)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aG(l,"\n")
l=C.hxO()
k=A.X.aq(d.ah(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.afV('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hua(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bDZ)
case 3:p=j.h7V(a0)
if(p==null)throw B.W(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cL(o)){n=d.aDQ(B.a2(o,x.N,x.z))
m=A.X.aq(n.ah(),null)!==A.X.aq(d.ah(),null)}else{n=d
m=!1}w=m&&F.a2F(A.d.aG(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bEu(n),$async$bDZ)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a8o(A.a.i(B.w(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bDZ,v)},
a8o:function a8o(d,e,f){this.a=d
this.b=e
this.c=f},
ilO(d,e){return B.a5(d,!1).cc(B.eh(new C.fYg(e),!0,null,x.H))},
fYg:function fYg(d){this.a=d},
We:function We(d,e){this.c=d
this.a=e},
aFb:function aFb(d,e,f,g,h,i,j,k){var _=this
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
epQ:function epQ(d){this.a=d},
epP:function epP(){},
epR:function epR(d){this.a=d},
epO:function epO(d,e){this.a=d
this.b=e},
epS:function epS(){},
eps:function eps(d,e){this.a=d
this.b=e},
epo:function epo(d,e){this.a=d
this.b=e},
epz:function epz(d){this.a=d},
epA:function epA(d,e){this.a=d
this.b=e},
epB:function epB(d){this.a=d},
epu:function epu(d,e){this.a=d
this.b=e},
epv:function epv(d,e){this.a=d
this.b=e},
epw:function epw(d,e){this.a=d
this.b=e},
epx:function epx(d){this.a=d},
epy:function epy(d){this.a=d},
ept:function ept(d,e){this.a=d
this.b=e},
epq:function epq(d){this.a=d},
epr:function epr(d){this.a=d},
epH:function epH(d){this.a=d},
epI:function epI(d){this.a=d},
epG:function epG(d){this.a=d},
epJ:function epJ(d,e){this.a=d
this.b=e},
epF:function epF(d,e){this.a=d
this.b=e},
epK:function epK(d){this.a=d},
epE:function epE(d){this.a=d},
epL:function epL(d){this.a=d},
epD:function epD(d){this.a=d},
epM:function epM(d,e){this.a=d
this.b=e},
epC:function epC(d,e){this.a=d
this.b=e},
epN:function epN(d){this.a=d},
epp:function epp(d,e){this.a=d
this.b=e},
fM4(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fM4=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hrJ){w=1
break}r=new C.fM5()
t=4
q=x.s
w=7
return B.b(B.iV(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fM4)
case 7:$.hrJ=!0
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
return B.i($async$fM4,v)},
bEl(d){return A.D1[B.mm(d)-1]+", "+A.oz[B.bL(d)-1]+" "+B.bW(d)+", "+B.bC(d)},
i6W(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dtr[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
haQ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fq(d[w],B.ag("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.Z(v,new C.fKn(),B.T(v).k("Z<1>")))
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
continue}o=new C.fKp(j,h)
n=new C.fKo(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.ao(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.j5(o.$1(l)))
j.a+=l}return u},
h7E(d,e){var w=new C.fn4()
return A.d.cI(e,0,new C.fn2(w))>=A.d.cI(d,0,new C.fn3(w))},
hoQ(d){var w,v,u=new B.aF($.S().r,A.ag,null,null,B.a([],x.v))
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
chw:function chw(d){this.a=d},
chu:function chu(){},
chv:function chv(){},
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
fM5:function fM5(){},
fKn:function fKn(){},
fKp:function fKp(d,e){this.a=d
this.b=e},
fKo:function fKo(d,e,f){this.a=d
this.b=e
this.c=f},
fn4:function fn4(){},
fn5:function fn5(){},
fn2:function fn2(d){this.a=d},
fn3:function fn3(d){this.a=d},
b2c:function b2c(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
chx:function chx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
chy:function chy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
chz:function chz(d){this.a=d},
bdT:function bdT(d){this.a=d},
bdS:function bdS(d,e){this.b=d
this.a=e},
bvM:function bvM(d){this.a=d},
ban:function ban(d,e){this.b=d
this.a=e},
btg:function btg(d,e){this.b=d
this.a=e},
hzS(d,e){return B.a5(d,!1).cc(B.eh(new C.fYj(e,null),!0,null,x.E))},
fYj:function fYj(d,e){this.a=d
this.b=e},
Wf:function Wf(d,e,f){this.c=d
this.d=e
this.a=f},
aFe:function aFe(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
eqC:function eqC(){},
eqD:function eqD(d){this.a=d},
eqB:function eqB(d,e){this.a=d
this.b=e},
eqp:function eqp(d){this.a=d},
eqq:function eqq(d){this.a=d},
eqw:function eqw(d){this.a=d},
eqx:function eqx(d,e){this.a=d
this.b=e},
equ:function equ(d){this.a=d},
eqv:function eqv(d,e,f){this.a=d
this.b=e
this.c=f},
eqr:function eqr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqy:function eqy(d,e){this.a=d
this.b=e},
eqt:function eqt(d,e){this.a=d
this.b=e},
eqz:function eqz(d){this.a=d},
eqs:function eqs(d,e){this.a=d
this.b=e},
eqA:function eqA(d,e){this.a=d
this.b=e},
bdp:function bdp(d,e,f){this.b=d
this.c=e
this.a=f},
ilU(d){return B.a5(d,!1).cc(B.eh(new C.fYz(),!0,null,x.I))},
bBL(d,e){var w,v,u,t,s,r,q=B.bZ(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
h94(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fYz:function fYz(){},
a0q:function a0q(d){this.a=d},
oL:function oL(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aGD:function aGD(d,e,f,g,h,i,j,k,l){var _=this
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
f_s:function f_s(d){this.a=d},
eZk:function eZk(d,e){this.a=d
this.b=e},
eZI:function eZI(d,e){this.a=d
this.b=e},
eZS:function eZS(d){this.a=d},
eZ3:function eZ3(d){this.a=d},
eZ4:function eZ4(d){this.a=d},
eZ1:function eZ1(d){this.a=d},
eZ2:function eZ2(d){this.a=d},
eZB:function eZB(d,e){this.a=d
this.b=e},
eZC:function eZC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZO:function eZO(d,e,f){this.a=d
this.b=e
this.c=f},
eZN:function eZN(d,e){this.a=d
this.b=e},
eZP:function eZP(d,e){this.a=d
this.b=e},
eZM:function eZM(d,e){this.a=d
this.b=e},
eZR:function eZR(d,e,f){this.a=d
this.b=e
this.c=f},
eZQ:function eZQ(d,e){this.a=d
this.b=e},
eYU:function eYU(d){this.a=d},
eYV:function eYV(d){this.a=d},
eYW:function eYW(d){this.a=d},
eYT:function eYT(){},
eYX:function eYX(d,e){this.a=d
this.b=e},
eYS:function eYS(d,e){this.a=d
this.b=e},
eYZ:function eYZ(){},
eYY:function eYY(d,e){this.a=d
this.b=e},
eYR:function eYR(d,e){this.a=d
this.b=e},
eYO:function eYO(d,e){this.a=d
this.b=e},
eZ_:function eZ_(d){this.a=d},
eYQ:function eYQ(d,e){this.a=d
this.b=e},
eZ0:function eZ0(d){this.a=d},
eYP:function eYP(d,e){this.a=d
this.b=e},
f_h:function f_h(d,e){this.a=d
this.b=e},
f_o:function f_o(d){this.a=d},
f_p:function f_p(d,e){this.a=d
this.b=e},
f_q:function f_q(){},
f_i:function f_i(d,e){this.a=d
this.b=e},
f_g:function f_g(d,e){this.a=d
this.b=e},
f_j:function f_j(d,e){this.a=d
this.b=e},
f_f:function f_f(d,e){this.a=d
this.b=e},
f_k:function f_k(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f_e:function f_e(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f_l:function f_l(d){this.a=d},
f_m:function f_m(d,e){this.a=d
this.b=e},
f_n:function f_n(d){this.a=d},
f_d:function f_d(d){this.a=d},
f_0:function f_0(d){this.a=d},
f_1:function f_1(d){this.a=d},
f__:function f__(d,e){this.a=d
this.b=e},
eZV:function eZV(d,e){this.a=d
this.b=e},
f_2:function f_2(d){this.a=d},
f_5:function f_5(d){this.a=d},
eZZ:function eZZ(d){this.a=d},
f_6:function f_6(d){this.a=d},
f_7:function f_7(d){this.a=d},
f_8:function f_8(d){this.a=d},
f_9:function f_9(d){this.a=d},
eZY:function eZY(d){this.a=d},
f_a:function f_a(d){this.a=d},
eZX:function eZX(d){this.a=d},
f_b:function f_b(d,e){this.a=d
this.b=e},
eZW:function eZW(d,e){this.a=d
this.b=e},
f_c:function f_c(d){this.a=d},
f_3:function f_3(d){this.a=d},
f_4:function f_4(d){this.a=d},
eZF:function eZF(d){this.a=d},
eZE:function eZE(d){this.a=d},
eZG:function eZG(d,e){this.a=d
this.b=e},
eZD:function eZD(d,e){this.a=d
this.b=e},
eZH:function eZH(d){this.a=d},
eZx:function eZx(d){this.a=d},
eZw:function eZw(d){this.a=d},
eZy:function eZy(d){this.a=d},
eZv:function eZv(d){this.a=d},
eZz:function eZz(d,e){this.a=d
this.b=e},
eZu:function eZu(d,e){this.a=d
this.b=e},
eZt:function eZt(d,e){this.a=d
this.b=e},
eZb:function eZb(d){this.a=d},
eZc:function eZc(d){this.a=d},
eZd:function eZd(d){this.a=d},
eZe:function eZe(d){this.a=d},
eZf:function eZf(d){this.a=d},
eZg:function eZg(d){this.a=d},
eZh:function eZh(d){this.a=d},
eZi:function eZi(d){this.a=d},
eZj:function eZj(d){this.a=d},
eYx:function eYx(d){this.a=d},
eYy:function eYy(d){this.a=d},
eYz:function eYz(d){this.a=d},
eYA:function eYA(d){this.a=d},
eYB:function eYB(d){this.a=d},
eYw:function eYw(d){this.a=d},
eYC:function eYC(d){this.a=d},
eYD:function eYD(d){this.a=d},
eZ5:function eZ5(d){this.a=d},
eZ6:function eZ6(d){this.a=d},
eZ7:function eZ7(d){this.a=d},
eZ8:function eZ8(d){this.a=d},
eZ9:function eZ9(d){this.a=d},
eYH:function eYH(d){this.a=d},
eYI:function eYI(d){this.a=d},
eYJ:function eYJ(d){this.a=d},
eYK:function eYK(d){this.a=d},
eYL:function eYL(d){this.a=d},
eYG:function eYG(d){this.a=d},
eYM:function eYM(d){this.a=d},
eYF:function eYF(d){this.a=d},
eYN:function eYN(d){this.a=d},
eYE:function eYE(d){this.a=d},
eZA:function eZA(d){this.a=d},
eZs:function eZs(d){this.a=d},
eZo:function eZo(d){this.a=d},
eZn:function eZn(d){this.a=d},
eZp:function eZp(d,e){this.a=d
this.b=e},
eZm:function eZm(d,e){this.a=d
this.b=e},
eZq:function eZq(d,e){this.a=d
this.b=e},
eZl:function eZl(d,e){this.a=d
this.b=e},
eZr:function eZr(d){this.a=d},
eZL:function eZL(d){this.a=d},
eZK:function eZK(d,e,f){this.a=d
this.b=e
this.c=f},
eZJ:function eZJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eZU:function eZU(d,e){this.a=d
this.b=e},
eZT:function eZT(d,e){this.a=d
this.b=e},
eZa:function eZa(d){this.a=d},
f_r:function f_r(d){this.a=d},
bh2:function bh2(d,e){this.b=d
this.a=e},
ihg(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
ihh(d,e){var w,v,u,t,s,r,q,p,o,n=B.ag("\\S+",!0,!1,!1,!1).lc(0,d),m=B.C(n,B.a7(n).k("M.E"))
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
bCl(){var w=$.bBt,v=$.QU
$.QU=v+1
return w+"_"+v},
ii(d,e,f,g,h,i,j){return C.ew(A.bj,!1,4279310375,A.aF,"",i,24,A.bp,A.a7,"",h,C.bCl(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.co,D.fb,g,e,f)},
ob(d,e,f,g){var w=f*9
return C.ii(D.eT,d-f/2,e-w/32,f,w/16,g,0)},
i0o(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bBt
p=$.QU
$.QU=p+1
w.push(new C.eP(q+"_"+p,D.fb,0,r,1,0.0016,"",24,A.a7,A.bp,A.aF,k,A.bj,null,D.bi,t,t,0,0,!1,"",0,D.co,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bBt
p=$.QU
$.QU=p+1
w.push(new C.eP(q+"_"+p,D.fb,o,0,0.004,1,"",24,A.a7,A.bp,A.aF,k,A.bj,null,D.bi,t,t,0,0,!1,"",0,D.co,0,"","","","","",!1,0))}w.push(C.ob(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.ob(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ii(D.bi,0.08,0.08,0.5,0.003,v,0),C.ii(D.bi,0.58,0.08,0.004,0.06,v,0),C.ii(D.bi,0.58,0.14,0.34,0.003,v,0),C.ii(D.bi,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ii(D.bi,0.08,0.8,0.004,0.14,t,0),C.ii(D.bi,0.08,0.94,0.6,0.003,t,0),C.ob(0.58,0.08,0.05,e),C.ob(0.92,0.22,0.05,e),C.ob(0.08,0.8,0.05,f),C.ob(0.68,0.94,0.05,f),C.ob(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ii(D.lm,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ii(D.lm,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ii(D.lm,0.7,0.8,0.22,0.12,w|1140850688,0),C.ii(D.lm,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
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
return B.a([C.ii(D.k2,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ii(D.k2,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ii(D.k2,0.15,0.86,0.6,0.14,1712265002,0),C.ob(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.d3c[n]
u=A.o.F(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bBt
l=$.QU
$.QU=l+1
w.push(new C.eP(m+"_"+l,D.fb,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a7,A.bp,A.aF,k,A.bj,null,D.eT,q,q,0,0,!1,"",0,D.co,0,"","","","","",!1,0))}w.push(C.ob(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ii(D.k2,0.35,-0.1,0.3,0.62,w|855638016,0),C.ii(D.k2,0.05,-0.1,0.3,0.55,v,-0.5),C.ii(D.k2,0.65,-0.1,0.3,0.55,v,0.5),C.ob(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ii(D.bi,0.06,0.04,0.88,0.002,e,0),C.ii(D.bi,0.06,0.96,0.88,0.002,e,0),C.ii(D.bi,0.06,0.04,0.004,0.92,e,0),C.ii(D.bi,0.936,0.04,0.004,0.92,e,0),C.ii(D.bi,0.09,0.07,0.82,0.001,w,0),C.ii(D.bi,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ii(D.k3,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ii(D.k3,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ii(D.k3,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ii(D.bi,0,0,0.3,0.09,w|1140850688,0),C.ii(D.bi,0.7,0.9,0.3,0.1,v|1426063360,0),C.ii(D.bi,0.82,0.04,0.12,0.07,w|771751936,0),C.ii(D.bi,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ii(D.eT,0.62,0.02,0.5,0.16,v,0.6),C.ii(D.eT,0.78,0.12,0.4,0.12,u,0.9),C.ii(D.eT,-0.12,0.8,0.5,0.16,u,-0.6),C.ii(D.eT,-0.05,0.9,0.4,0.12,v,-0.9),C.ob(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ii(D.bi,0.09,0.12,0.16,0.006,e,0),C.ii(D.bi,0.05,0.03,0.9,0.001,w,0),C.ii(D.bi,0.05,0.97,0.9,0.001,w,0)],x.u)}},
idJ(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bBt=j
$.QU=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fHM()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.ew(A.bj,!1,n,A.aF,"ngmy_quote_background",m,24,A.bp,A.a7,"",1,C.bCl(),g,"","",0,!1,"",0,D.bi,l,2,"",0,0,"",D.co,D.lN,1,0,0))
if(a9)A.d.v(q,C.i0o(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.E(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ag("[*~^]",!0,!1,!1,!1)
p=C.ihg(B.aL(w,p,""))
o=A.a.t(w,B.ag("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fHL(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.E(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cD,A.a7))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a7))
if(a0!=null&&a0.length!==0)q.push(C.ew(A.bj,!1,n,A.aF,"ngmy_quote_logo",m,24,A.bp,A.a7,a1,a3*9/16,C.bCl(),a0,"","",0,!1,a2,0,D.bi,l,2,"",0,0,"",D.co,D.lN,a3,a4,a5))
return C.rM(s,r,0,0,q,j+"_slide",D.qL,"","","",D.dh)},
rL:function rL(d,e){this.a=d
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
fHM:function fHM(){},
fHL:function fHL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hRo(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a6(d)
v=B.bk(B.w(w.h(d,"at")))
u=w.h(d,"outline")
t=B.w(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.cj1(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bU()
w=w.h(d,"request")
return new C.zS(u,t,s,B.w(w==null?"":w))},
fPu(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fPu=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hs5){w=1
break}$.hs5=!0
t=4
w=7
return B.b(B.az(),$async$fPu)
case 7:r=e
q=B.aT(J.r(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.X.aM(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.k0(p),k=k.gaf(k),j=x.j,i=x.o;k.C();){o=k.gS(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aW(j.a(o.b));h.C();){m=h.gS(h)
l=C.hRo(m)
if(l!=null)J.cc(n,l)}$.D_.c3(0,B.w(o.a),new C.fPv(n))}C.h8K()
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
return B.i($async$fPu,v)},
h8K(){var w,v=new B.V(Date.now(),0,!1).bS(-12e8)
for(w=new B.du($.D_,$.D_.r,$.D_.e);w.C();)J.nG(w.d,new C.fuZ(v))
$.D_.bs($.D_,new C.fv_())},
aPk(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aPk=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aPk)
case 6:s=a0
m=x.N
l=x.z
r=B.U(m,l)
for(k=new B.cD($.D_,B.a7($.D_).k("cD<1,2>")).gaf(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aW(q.b);h.C();){o=h.gS(h)
g=o
J.cc(p,B.H(["at",g.a.a9().ae(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aJ(r,i,p)}n=r
w=7
return B.b(s.au("String","ngmy_slides_ai_history_v1",A.X.aq(n,null)),$async$aPk)
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
return B.i($async$aPk,v)},
ihU(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.h8K()
w=$.D_.c3(0,d,new C.fPx())
v=Date.now()
u=B.C(e,B.a7(e).k("cs.E"))
J.pO(w,0,new C.zS(new B.V(v,0,!1),f,u,g))
C.aPk()},
ihR(d){var w,v=$.D_.h(0,d)
if(v==null||J.ct(v))return
w=J.cE(v)
w.cz(v,0)
if(w.gan(v))$.D_.W(0,d)
C.aPk()},
zS:function zS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cj1:function cj1(){},
fPv:function fPv(d){this.a=d},
fuZ:function fuZ(d){this.a=d},
fv_:function fv_(){},
fPx:function fPx(){},
ihW(d){return A.d.dN(D.wI,new C.fPA(d),new C.fPB())},
hRm(d){var w
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
hRl(d){var w
switch(d.a){case 0:w=D.aoo
break
case 1:w=A.z2
break
case 2:w=A.apt
break
case 3:w=I.ao1
break
case 4:w=A.aoW
break
case 5:w=A.mb
break
default:w=null}return w},
i3x(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.R9[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.R9[w]
if(!B.cU(v.toLowerCase(),t,0))u=B.cU(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hRn(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
ihS(d,e,f,g,h){var w=new B.N(D.wI,new C.fPt(),x.eC).aG(0,", "),v=""+d,u=C.hxG(h),t=F.fJa(h),s=C.htL(g),r=e.t(0,D.J2)?'- New slides get an "emoji".\n':"",q=e.t(0,D.J3)?'- New slides get an "icon3d" from: '+A.d.aG(D.R9,", ")+".\n":"",p=e.t(0,D.DD)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ihT(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.N(D.wI,new C.fPw(),x.eC).aG(0,", "),p=new B.fh("")
if(e.t(0,D.J2)){p.a=s
w=s}else w=""
if(e.t(0,D.J3))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aG(D.R9,", ")+".\n")
if(e.t(0,D.DD))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hxG(d)
v=F.fJa(d)
u=C.htL(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ahG(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.Dp(a3,"{"),a5=J.h0R(a3,"}")
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
if(p.b(J.r(t,a2))){l=J.b6(p.a(J.r(t,a2)),new C.fNr(),m).c_(0,new C.fNs())
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
f=C.i3x(B.w(f==null?"":f))
if(f==null)f=""
e=J.r(t,"image_query")
if(e==null)e=J.r(t,"imageQuery")
e=A.a.i(B.w(e==null?"":e))
d=J.r(t,"picture")
d=B.ce(B.w(d==null?0:d),a1)
if(d==null)d=0
J.cc(u,new C.a8w(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.r(w,"style")
r=A.a.i(B.w(q==null?a7:q)).toLowerCase()
q=J.r(w,"title")
q=A.a.i(B.w(q==null?J.ft(u).b:q))
p=A.d.b3(D.wI,new C.fNt(r))?r:a7
o=C.fud(J.r(w,"logo_frame"),D.CY)
n=C.fud(J.r(w,"logo_ring"),D.CR)
m=C.fud(J.r(w,"photo_frame"),D.CY)
l=C.fud(J.r(w,"photo_ring"),D.CR)
return new C.as6(q,p,u,o,n,m,l)}catch(a0){return a1}},
a2c(d,e){return(A.o.E(e,0,255)<<24|d&16777215)>>>0},
hwN(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.DE),f7=f6?C.hY3():e4,f8=f7==null
if(f8)w=e4
else{v=new B.e4()
v.cY(f7.w+1)
u=f7.a
t=B.bp(u.b,!0,x.dL)
A.d.e_(t,v)
s=u.c
s=new C.nZ("luxe",u.a,A.mb,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dh)
w=s}if(w==null)w=C.ihW(f9.b)
r=g2.t(0,D.a78)||f6
q=g2.t(0,D.J2)
p=g2.t(0,D.T9)
o=new C.fHQ()
n=B.a([],x.g)
m=new C.fHT(o,w,r)
l=new C.fHS(o,r)
k=new C.fHR(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a6(g0),a7=!A.d.b3(u,new C.fHP(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.d4S[b8]
c0=D.d3I[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.f5q.t(0,b2.a)){c7=b0+1
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
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mW,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.K,D.qM,500,f2,f0))
c1.push(l.$8$fx$key(D.bi,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.K,a2,300,f5))
d3=D.T6
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eT,0.64,0.46,0.42,0.75,(A.o.E(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.lm,0.78,0.1,0.18,0.32,(A.o.E(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bi,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.DB
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eT,-0.12,-0.2,0.36,0.64,(A.o.E(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eT,0.82,0.66,0.26,0.46,(A.o.E(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mW,(A.o.E(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.K,b9,e5,A.cD,A.U))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.K,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.K,D.qM,500,f2,f0))
d3=D.mV
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eT,0.58,0.04,0.44,0.8,(A.o.E(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bi,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.v0:D.co
c1.push(new C.eP(b4,D.a76,0.64,0.05,0.27,0.9,g1,24,A.a7,A.bp,A.aF,4279310375,A.bj,e4,D.bi,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mV
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eT,-0.15,-0.3,0.5,0.9,(A.o.E(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eT,0.78,0.62,0.3,0.54,(A.o.E(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mW,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.K,D.qM,450,f2,f0))
c1.push(l.$8$fx$key(D.bi,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.K,a2,300,f5))
d3=D.T6
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
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.J0,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mV}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dh,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hZH(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dvT[A.o.F(b1,6)]:s
n.push(new C.lW(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.C0(e4,e4,e4,e4,D.DA,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ar(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fKd(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fKd=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.DD)
n=e.t(0,D.J3)
if(!o&&!n){u=D.a64
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fKg(o,s[r],n,$.i2f,r).$0())
s=B.U(x.S,x.aH)
m=J
w=3
return B.b(B.iV(t,x.e),$async$fKd)
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
return B.i($async$fKd,v)},
fJd(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fJd=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.ihT(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aOE(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fJd)
case 3:u=s.aP_(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fJd,v)},
bE_(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bE_=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aX(x.N)
for(s=B.en(f,f.r,B.a7(f).c),r=s.$ti.c;s.C();){q=s.d
t.M(0,(q==null?r.a(q):q).b)}C.ihU(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.ahG(i,"colorful")
t=C.ihS(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aOE(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hS),$async$bE_)
case 3:u=o.aP_(m,f,h,g,D.e9n,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bE_,v)},
aOE(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aOE=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vE(null,""),$async$aOE)
case 3:n=i
if(A.a.i(n).length===0)throw B.W("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.nh(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.r8(t,d,g,"slides",null),$async$aOE)
case 7:q=i
p=q.b
if(p!=null){o=C.ahG(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.W(s!=null&&B.Lp(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aOE,v)},
aP_(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aP_=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.DD)||e.t(0,D.J3)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.df(e,x.Q)
t.W(0,D.DD)}w=6
return B.b(C.fKd(d,t),$async$aP_)
case 6:s=k
w=4
break
case 5:s=D.a64
case 4:t=d.c
w=A.d.b3(t,new C.fmZ())?7:9
break
case 7:r=$.hyy
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dV(r,x.aP),$async$aP_)
case 10:q=k
p=q!=null?A.X.aq(q.ah(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hwN(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hRn(new C.as6(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.T(m).k("N<1,n>")
t=B.C(new B.N(m,new C.fn_(),n),n.k("ak.E"))
l.cx=t
t=B.a7(e).k("k3<cs.E,n>")
t=B.C(new B.k3(e,new C.fn0(),t),t.k("M.E"))
l.cy=t
l.ay=e.t(0,D.T9)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aP_,v)},
hbz(d){var w,v,u,t=d.cy
if(t==null)t=A.Y
w=B.aX(x.Q)
for(v=0;v<6;++v){u=D.a4R[v]
if(A.d.t(t,u.b))w.M(0,u)}return w},
ilZ(d){return B.bV(A.L,null,new C.fYL(),d,!0,!0,!0,null,!1,!1,x.I)},
hYG(d,e){var w,v=e.toLowerCase()
if(A.a.c9(v,".png"))w="image/png"
else w=A.a.c9(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cJ.gcu().aO(d)},
ilY(d,e,f){return B.bV(A.L,null,new C.fYK(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hbA(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
hbB(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
fud(d,e){var w=A.a.i(B.w(d==null?"":d)).toLowerCase()
return A.d.b3(e,new C.fue(w))?w:""},
htL(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hyw(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.ahG(a1==null?"":a1,a0),a3=C.ahG(a5,a0)
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
for(v=t.length,r=a4.r,q=B.T(r).k("Z<1>"),p=0;p<t.length;t.length===v||(0,B.L)(t),++p){o=B.p7(new B.Z(r,new C.fPC(t[p]),q))
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
g=B.C(new B.Z(k,new C.fPD(),v),r)
A.d.aZ(g,new C.fPE())
if(g.length===0)continue
f=new C.fPF(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.L)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
iic(d){var w=d.toLowerCase(),v=B.ag("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aJS
v=B.ag("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.ebg
v=B.ag("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.ebh
return null},
htm(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bf(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dd(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
ihX(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.E(a1,0,d-1)]],x.g)
w=a0.d===D.oF
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
if(C.htm(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.htm(n,i,v,u))if(n.w>10){f=h+1
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
ihV(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.ahG(o,"colorful")
if(n==null)throw B.W("That earlier version could not be read.")
w=B.aX(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a4R[r]
if(q.b===s)w.M(0,q)}}v=C.hbA(e)
u=C.hbB(e)
p=C.hwN(n,D.a64,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.T(o).k("N<1,n>")
o=B.C(new B.N(o,new C.fPy(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("k3<cs.E,n>")
o=B.C(new B.k3(w,new C.fPz(),o),o.k("M.E"))
p.cy=o
p.ay=w.t(0,D.T9)
return p},
ilL(d,e,f){return B.bV(A.L,null,new C.fXY(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hY3(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.e4()
s.cY(t)
w=D.cJ0[s.ap(10)]
v=new C.emg(s)
u=x.N
return new C.emf(w,s.ap(4),J.ft(v.$1$2(D.d9C,1,x.ff)),w.r[s.ap(3)],v.$1$2(D.dr4,2+s.ap(2),u),v.$1$2(D.djw,2,u),v.$1$2(D.duk,4,x.fP),t)},
hZH(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.e4()
a1.cY(a5.w+a3*13)
w=new C.fjp(a4)
v=new C.fjr(a4,d)
u=new C.fjq(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.L)(a2),++q){p=a2[q]
if(p.b===D.cV){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aX(A.o.fv(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aX(A.o.fv(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.c6(a2,0,w.$8(D.eT,0.1+a1.ag()*0.45,0.05+a1.ag()*0.3,0.45,0.75,C.a2c(a0,52),"lux_spot",a5.wO(0,"spotlight")))
else A.d.c6(a2,0,w.$8(D.bi,0,0,1,1,0,"lux_back",a5.wO(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c6(a2,1,w.$8(D.bi,0,0,1,1,0,"lux_back2",a5.aGo(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bi,0.022,0.038,0.956,0.924,0,g,a5.wO(0,f),D.dh,150,C.a2c(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bi,0.018,0.032,0.964,0.936,0,g,a5.wO(0,f),D.dh,120,C.a2c(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bi,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dh,260,C.a2c(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bi,0,0,1,1,0,"lux_filigree",a5.wO(0,"filigree"),D.dh,200))
break
default:a2.push(w.$10$anim$delay(D.bi,0.08,0.06,0.84,0.004,C.a2c(a0,208),"lux_rule",a5.aGo(0,"shimmer",r),D.v_,150))
a2.push(w.$10$anim$delay(D.bi,0.08,0.936,0.84,0.004,C.a2c(a0,144),"lux_rule2","",D.J0,220))}l=!A.d.b3(a2,new C.fjo())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.wO(0,"crest"),350))
else{o=a1.h5()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.wO(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a2c(r,242)
j=a5.wO(0,"orbit")
i=s===D.bi?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.qM,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eT,t-0.007,0.9495,0.014,0.025,C.a2c(r,242),"lux_g2",a5.wO(0,"orbit"),D.qM,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){h=t[q]
a2.push(w.$8(D.bi,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aX(A.o.fv(a0,16),8,"0").toUpperCase()))}if((A.d.gI(d.b).a&16777215)<8421504)a2.push(w.$8(D.bi,0,0,1,1,0,"lux_velvet",a5.wO(0,"velvet")))},
nZ:function nZ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fPA:function fPA(d){this.a=d},
fPB:function fPB(){},
wg:function wg(d,e){this.a=d
this.b=e},
a8w:function a8w(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
as6:function as6(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fPt:function fPt(){},
fPw:function fPw(){},
fNr:function fNr(){},
fNs:function fNs(){},
fNt:function fNt(d){this.a=d},
fHQ:function fHQ(){},
fHT:function fHT(d,e,f){this.a=d
this.b=e
this.c=f},
fHS:function fHS(d,e){this.a=d
this.b=e},
fHR:function fHR(d,e){this.a=d
this.b=e},
fHP:function fHP(d){this.a=d},
fKg:function fKg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fKe:function fKe(d){this.a=d},
fKf:function fKf(d){this.a=d},
fmZ:function fmZ(){},
fn_:function fn_(){},
fn0:function fn0(){},
fYL:function fYL(){},
a0X:function a0X(d){this.a=d},
aIA:function aIA(d,e,f,g,h){var _=this
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
f5T:function f5T(d,e,f){this.a=d
this.b=e
this.c=f},
f5U:function f5U(d,e){this.a=d
this.b=e},
f5R:function f5R(d,e){this.a=d
this.b=e},
f5S:function f5S(d,e){this.a=d
this.b=e},
f5Q:function f5Q(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
f5L:function f5L(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f5P:function f5P(d,e){this.a=d
this.b=e},
f5K:function f5K(d,e){this.a=d
this.b=e},
f5O:function f5O(d,e){this.a=d
this.b=e},
f5J:function f5J(d,e){this.a=d
this.b=e},
f5M:function f5M(d){this.a=d},
f5N:function f5N(d,e){this.a=d
this.b=e},
f5z:function f5z(d,e){this.a=d
this.b=e},
f5A:function f5A(d,e){this.a=d
this.b=e},
f5C:function f5C(d){this.a=d},
f5D:function f5D(d){this.a=d},
f5E:function f5E(d){this.a=d},
f5F:function f5F(d){this.a=d},
f5B:function f5B(d,e){this.a=d
this.b=e},
f5G:function f5G(d,e){this.a=d
this.b=e},
f66:function f66(d){this.a=d},
f67:function f67(d){this.a=d},
f65:function f65(d){this.a=d},
f68:function f68(d){this.a=d},
f64:function f64(d){this.a=d},
f6a:function f6a(d){this.a=d},
f63:function f63(d,e){this.a=d
this.b=e},
f6b:function f6b(d){this.a=d},
f62:function f62(d,e){this.a=d
this.b=e},
f6c:function f6c(d){this.a=d},
f61:function f61(d){this.a=d},
f6d:function f6d(d){this.a=d},
f60:function f60(d,e){this.a=d
this.b=e},
f6e:function f6e(d){this.a=d},
f6_:function f6_(d,e){this.a=d
this.b=e},
f6f:function f6f(d){this.a=d},
f5Z:function f5Z(d){this.a=d},
f6g:function f6g(d,e){this.a=d
this.b=e},
f5Y:function f5Y(d,e){this.a=d
this.b=e},
f6h:function f6h(d){this.a=d},
f69:function f69(d){this.a=d},
f5X:function f5X(d,e){this.a=d
this.b=e},
f5H:function f5H(d,e,f){this.a=d
this.b=e
this.c=f},
f5I:function f5I(d,e,f){this.a=d
this.b=e
this.c=f},
f5W:function f5W(d,e){this.a=d
this.b=e},
f5V:function f5V(d,e){this.a=d
this.b=e},
fYK:function fYK(d,e){this.a=d
this.b=e},
a0W:function a0W(d,e,f){this.c=d
this.d=e
this.a=f},
aIz:function aIz(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
f5s:function f5s(d){this.a=d},
f5t:function f5t(d){this.a=d},
f5u:function f5u(d,e){this.a=d
this.b=e},
f5v:function f5v(d){this.a=d},
f5w:function f5w(d){this.a=d},
f5r:function f5r(d,e){this.a=d
this.b=e},
f5x:function f5x(d,e){this.a=d
this.b=e},
f5y:function f5y(d,e){this.a=d
this.b=e},
fue:function fue(d){this.a=d},
b2B:function b2B(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aF5:function aF5(d,e,f){this.c=d
this.d=e
this.a=f},
blO:function blO(d,e){var _=this
_.d=$
_.bw$=d
_.a8$=e
_.c=_.a=null},
emi:function emi(d){this.a=d},
emh:function emh(){},
bjk:function bjk(d,e){this.b=d
this.a=e},
fPC:function fPC(d){this.a=d},
fPD:function fPD(){},
fPE:function fPE(){},
fPF:function fPF(d){this.a=d},
asE:function asE(d,e){this.a=d
this.b=e},
fPy:function fPy(){},
fPz:function fPz(){},
fXY:function fXY(d,e){this.a=d
this.b=e},
a_i:function a_i(d,e,f){this.c=d
this.d=e
this.a=f},
aCB:function aCB(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dpA:function dpA(d){this.a=d},
dpB:function dpB(d){this.a=d},
dpC:function dpC(d,e){this.a=d
this.b=e},
dpF:function dpF(d){this.a=d},
dpG:function dpG(d,e){this.a=d
this.b=e},
dpE:function dpE(d,e){this.a=d
this.b=e},
dpH:function dpH(d){this.a=d},
dpD:function dpD(d,e){this.a=d
this.b=e},
bun:function bun(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
emf:function emf(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
emg:function emg(d){this.a=d},
fjp:function fjp(d){this.a=d},
fjr:function fjr(d,e){this.a=d
this.b=e},
fjq:function fjq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fjo:function fjo(){},
aNd:function aNd(){},
hao(d){var w,v,u
try{w=A.X.aM(0,d,null)
if(x.f.b(w)){v=B.w9(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b2x:function b2x(d,e,f){this.c=d
this.d=e
this.a=f},
bno:function bno(d,e){this.c=d
this.a=e},
iec(d){return A.d.dN(D.I3,new C.fIX(d),new C.fIY())},
ied(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b5(t,6)
if(w.length===0)return null
v=new B.Z(D.I3,new C.fIZ(w),x.b4)
if(!v.gaf(0).C())return null
u=v.gI(0)
return new C.jU("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
lq:function lq(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fIX:function fIX(d){this.a=d},
fIY:function fIY(){},
fIZ:function fIZ(d){this.a=d},
n7(d,e,f,g,h){return new C.F1(f,g,d)},
i_T(d){var w=d.z,v=B.T(w).k("Z<1>")
w=B.C(new B.Z(w,new C.flq(),v),v.k("M.E"))
d.z=w
d.x=""},
dA(d,e){var w=$.KN
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c6(d.z,0,e)},
dB(d,e,f,g,h,i,j,k,l){return C.ew(A.bj,!1,4279310375,A.aF,"",d,24,A.bp,A.a7,"",e,"design_"+C.cF(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.co,D.fb,j,k,l)},
hwA(d,e){var w
C.i_T(d)
w=A.d.dN($.bG0(),new C.fGN(e),new C.fGO())
$.KN=w.a
d.x=w.a;++d.y
try{w.bx(d)}finally{$.KN=""}d.z=B.bp(d.z,!0,x.F)},
F1:function F1(d,e,f){this.a=d
this.b=e
this.e=f},
flq:function flq(){},
fP4:function fP4(){},
fP5:function fP5(){},
fP6:function fP6(){},
fPh:function fPh(){},
fPm:function fPm(){},
fPn:function fPn(){},
fPo:function fPo(){},
fPp:function fPp(){},
fPq:function fPq(){},
fPr:function fPr(){},
fPs:function fPs(){},
fP7:function fP7(){},
fP8:function fP8(){},
fP9:function fP9(){},
fPa:function fPa(){},
fPb:function fPb(){},
fPc:function fPc(){},
fPd:function fPd(){},
fPe:function fPe(){},
fPf:function fPf(){},
fPg:function fPg(){},
fPi:function fPi(){},
fPj:function fPj(){},
fPk:function fPk(){},
fPl:function fPl(){},
fGN:function fGN(d){this.a=d},
fGO:function fGO(){},
j3(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.ew(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bi,4280172719,2,m,n,0,"",o,D.cV,p,q,r)},
Df(d,e,f,g,h,i,j,k,l){return C.ew(A.bj,!1,4279310375,A.aF,"",d,24,A.bp,A.a7,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.co,D.fb,j,k,l)},
bEJ(){var w=new B.V(Date.now(),0,!1)
return A.iI[B.bL(w)-1]+" "+B.bW(w)+", "+B.bC(w)},
eA:function eA(d,e,f){this.a=d
this.b=e
this.c=f},
bC5(d){return new B.iY((A.o.aD(d,24)&255)/255,(A.o.aD(d,16)&255)/255,(A.o.aD(d,8)&255)/255,(d&255)/255)},
i5d(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.anD(A.cF.aO(A.d.gak(d.split(","))))
return w}catch(v){return null}},
i5h(d){var w=d.r
if(!d.cy)return w
return new B.N(B.a(w.split("\n"),x.s),new C.ftx(),x.dv).aG(0,"\n")},
i5g(d){switch(d.a){case 2:return A.nI
case 1:case 5:return A.fgD
default:return A.UC}},
i5a(d){switch(d.a){case 2:return A.vB
case 1:case 5:return A.WC
default:return A.acl}},
i5e(d,e){var w,v=null,u=d.ay,t=A.o.aD(u,24),s=A.o.aD(d.ch,24),r=(t&255)===0?v:C.bC5(u),q=(s&255)===0?v:C.bC5(d.ch),p=A.k.E(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nI(q,p,A.l_)
w=new B.pQ(t,t,t,t)}switch(d.ax.a){case 1:return B.lL(v,v,v,new B.kM(r,w,v,A.adE,v),v,v,v,v)
case 4:return u?new B.fX(v,v,v):B.xk(B.lL(v,v,q,v,p+0.4,v,v,v))
default:return B.lL(v,v,v,new B.kM(r,w,B.vN(4),A.hV,v),v,v,v,v)}},
i5c(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.fb?0.4:12,g=A.k.E(d.e*e,h,e),f=A.k.E(d.f*a0,h,a0)
switch(i.a){case 0:w=C.i5a(d.as)
v=A.k.E(d.w*(e/960),3,96)
u=C.i5h(d)
t=C.bC5(d.Q)
s=d.x.a>=700?A.ew:A.wc
r=d.y===A.cD?A.yI:A.amL
q=d.z
p=new B.Ds(w,l,l,B.fd(u,l,l,l,B.hd(l,t,1===q.a?A.aT7:A.aT6,l,l,l,l,l,l,A.dx,l,l,v,r,s,l,!0,l,l,l,l),C.i5g(d.as)))
break
case 1:case 4:o=C.i5d(d.at)
n=i===D.lN&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.xk(B.fd(w,l,l,l,B.hd(l,A.t6,l,l,l,l,l,l,l,A.dx,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.Ig(o,n?A.adA:A.X_,l,l)
break
case 3:w=new B.nI(A.Jn,1,A.l_)
u=B.vN(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lL(A.vB,B.fd(t,l,l,l,B.hd(l,D.epp,l,l,l,l,l,l,l,A.dx,l,l,11,l,A.ew,l,!0,l,l,l,l),A.nI),l,new B.kM(E.aLh,new B.pQ(w,w,w,w),u,A.hV,l),l,l,l,l)
break
case 2:p=C.i5e(d,e)
break
case 5:p=C.i5b(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.ho3(-w,p)
w=i===D.cV
if(w){m=A.o.aD(d.Q,24)&255
if(m<255)p=new B.atr(m/255,p)}if(w)return new F.wm(k,l,j,l,new B.SL(new B.kL(g,g,f,1/0),p))
if(i===D.ll){i=new B.nI(A.Jn,1,A.l_)
i=B.lL(A.vB,p,l,new B.kM(A.pv,new B.pQ(i,i,i,i),B.vN(4),A.hV,l),l,l,D.bDX,l)}else i=p
return new F.wm(k,l,j,l,new B.fX(g,f,i))},
i5f(d,e,f,g){var w,v=null,u=C.bC5(d.e),t=d.f
t=B.a([F.hmG(t!=null?B.lL(v,v,v,new B.kM(v,v,v,A.hV,new B.aY2(E.WE,A.acf,B.a([u,C.bC5(t)],x.cR),v)),v,v,v,v):B.lL(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.N(w,new C.ftw(f,g),B.T(w).k("N<1,fi>")))
return F.cxu(t)},
hbD(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$hbD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a4N(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){p=t[q]
o=new B.X_(A.wR,A.Jk,D.bF9,null,null,null,!1,null)
o=new B.C5(o,new C.fPL(607,787,p,d))
o.N6(n,null)
r.push(o)}u=n.jB(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hbD,v)},
i5b(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.hao(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gakD()
if(h==null)h=A.aAy
j=B.tN(4279308564)
w=B.vN(18)
v=new B.nI(B.tN(4287531653),3,A.l_)
u=i.length===0?"My links":i
u=B.a([B.xk(B.fd(u,m,m,m,B.hd(m,A.pv,m,m,m,m,m,m,m,A.dx,m,m,12,m,A.ew,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.xk(B.fd(A.a.i(l.c),m,m,m,D.foh,m)))
u.push(new B.fX(m,8,m))
for(t=B.d5(h,0,B.dC(8,"count",x.S),B.T(h).c),s=t.$ti,t=new B.bT(t,t.gL(0),s.k("bT<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tN(4280690220)
o=new B.a9R(8,8)
n=A.a.i(r.b)
u.push(new B.o_(D.by1,new C.axL(new C.aiN(q),B.lL(m,B.fd(n.length===0?A.a.i(r.c):n,m,m,m,D.fqH,A.nI),m,new B.kM(p,m,new B.ajd(o,o,o,o),A.hV,m),m,m,D.bEp,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.xk(B.fd(k,m,m,m,D.fpV,m))
u.push(new C.axL(C.hFn(k),t))}return B.lL(m,B.z9(u,A.N1,A.lM),m,new B.kM(j,new B.pQ(v,v,v,v),w,A.hV,m),m,m,D.byT,m)},
ftx:function ftx(){},
ftw:function ftw(d,e){this.a=d
this.b=e},
fPL:function fPL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aht(d){var w,v
for(w=0;w<32;++w){v=D.HV[w]
if(v.a===d)return v}return null},
hqH(d){var w,v,u=A.a.cp(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cF.aO(A.a.b5(d,u+1))
return w}catch(v){return null}},
d_(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hzO(d,e){return B.a5(d,!1).cc(B.eh(new C.fWn(e),!0,null,x.fB))},
hzN(d,e){return B.bV(A.L,null,new C.fWm(e),d,!0,!0,!0,null,!1,!1,x.fB)},
j8:function j8(d,e,f,g,h){var _=this
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
bla:function bla(d,e,f){var _=this
_.d=d
_.e=$
_.bw$=e
_.a8$=f
_.c=_.a=null},
e_T:function e_T(d){this.a=d},
e_S:function e_S(d,e,f){this.a=d
this.b=e
this.c=f},
e_R:function e_R(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bsW:function bsW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f4G:function f4G(d,e){this.a=d
this.b=e},
bg6:function bg6(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b0r:function b0r(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cds:function cds(){},
cdt:function cdt(d){this.a=d},
cdu:function cdu(d,e,f){this.a=d
this.b=e
this.c=f},
cdv:function cdv(d,e,f){this.a=d
this.b=e
this.c=f},
fWn:function fWn(d){this.a=d},
ZQ:function ZQ(d,e){this.c=d
this.a=e},
aAZ:function aAZ(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
deO:function deO(d,e,f){this.a=d
this.b=e
this.c=f},
deT:function deT(d){this.a=d},
deU:function deU(d){this.a=d},
deS:function deS(d){this.a=d},
deV:function deV(d){this.a=d},
deR:function deR(d,e){this.a=d
this.b=e},
deW:function deW(d){this.a=d},
deQ:function deQ(d){this.a=d},
deX:function deX(d){this.a=d},
deP:function deP(d,e){this.a=d
this.b=e},
deY:function deY(d,e){this.a=d
this.b=e},
fWm:function fWm(d){this.a=d},
fWl:function fWl(d){this.a=d},
fWk:function fWk(d,e,f){this.a=d
this.b=e
this.c=f},
fWj:function fWj(d,e){this.a=d
this.b=e},
aMI:function aMI(){},
ilX(d){return B.bV(A.L,null,new C.fYJ(),d,!0,!0,!0,null,!1,!1,x.N)},
fYJ:function fYJ(){},
a_a:function a_a(d){this.a=d},
bhE:function bhE(d){this.d=d
this.c=this.a=null},
dlC:function dlC(d){this.a=d},
dlD:function dlD(d,e){this.a=d
this.b=e},
dlE:function dlE(d){this.a=d},
i1u(d){var w,v=d.split("@")
if(v.length>1){w=B.ce(v[1],16)
if(w!=null)return B.b1(w)}return D.y7},
ig7(d){var w,v=A.d.gI(d.split("@"))
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
ig6(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gI(d.split("@")),p=C.i1u(d)
switch(q){case"shimmer":return B.o3(A.Lp,g,new C.fMo(p,A.k.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.a_,r,A.b3,A.t,B.a([g,B.dZ(B.b4(r,r,r,new C.bgZ(e,f,p,r),A.aw),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dQ(B.ee(A.A,B.db(F.bW4(g,B.TK(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.t(w*60,v*26))
case"goldframe":return new B.an(A.a_,r,A.b3,A.t,B.a([g,B.dZ(B.b4(r,r,r,new C.bgG(e,p,r),A.aw),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.E(0.55+s*0.45,0,1)
return B.db(B.eM(A.A,e*0.5,B.ee(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.ds()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fI(e)
u.mU(Math.sin(e)*0.3)
return B.dQ(B.fy(A.A,g,r,u,!0),new B.t(w*22,v*12))
case"rays":return new B.an(A.a_,r,A.b3,A.t,B.a([B.dZ(B.b4(r,r,r,new C.bpJ(e,f,p,r),A.aw),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.a_,r,A.b3,A.t,B.a([B.dZ(B.b4(r,r,r,new C.bbv(e,f,p,r),A.aw),!0,r),g],x.p),r)
case"aurora":return new B.an(A.a_,r,A.b3,A.t,B.a([B.dZ(B.b4(r,r,r,new C.bb9(e,f,p,r),A.aw),!0,r),g],x.p),r)
case"velvet":return new B.an(A.a_,r,A.b3,A.t,B.a([g,B.dZ(B.b4(r,r,r,new C.bwK(e,p,r),A.aw),!0,r)],x.p),r)
case"sparkle":return new B.an(A.a_,r,A.b3,A.t,B.a([g,B.dZ(B.b4(r,r,r,new C.btJ(e,f,p,r),A.aw),!0,r)],x.p),r)
case"sheen":return new B.an(A.a_,r,A.b3,A.t,B.a([g,B.dZ(B.b4(r,r,r,new C.bsS(e,p,r),A.aw),!0,r)],x.p),r)
case"filigree":return new B.an(A.a_,r,A.b3,A.t,B.a([g,B.dZ(B.b4(r,r,r,new C.bg_(e,p,r),A.aw),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.ab,A.f,B.a([B.bS(0,B.dZ(B.ee(A.A,B.c4(r,new B.o(r,r,r,r,r,new B.c_(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bh),1.6+s*0.15,r,r),!0,r),0,0,0),B.eM(A.A,s*0.06,B.ee(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fMo:function fMo(d,e){this.a=d
this.b=e},
bgZ:function bgZ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bgG:function bgG(d,e,f){this.b=d
this.c=e
this.a=f},
bpJ:function bpJ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbv:function bbv(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bb9:function bb9(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bwK:function bwK(d,e,f){this.b=d
this.c=e
this.a=f},
btJ:function btJ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bsS:function bsS(d,e,f){this.b=d
this.c=e
this.a=f},
bg_:function bg_(d,e,f){this.b=d
this.d=e
this.a=f},
dev:function dev(d,e,f,g,h){var _=this
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
fMr(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.ll},
igc(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aZ(j,new C.fMs())
s=A.d.gI(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.L)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gI(B.aRF(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
igb(d,e){var w,v,u,t,s,r=d.db
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
ah7(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ah7=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.T(a4).k("Z<1>")
e=B.C(new B.Z(a4,new C.fEN(),f),f.k("M.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(A.dP,null,new C.fEO(e),d,!0,!0,!1,A.lO,!1,!1,x.N),$async$ah7)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gI(e).hN())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.hch(d),$async$ah7)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.LA(d,"Search states\u2026","",A.ko,"Choose state"),$async$ah7)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.hba(s)
if(p==null)p=A.d.gI(D.S_)
f=C.cF()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cF()
m=p.e
l=C.fMt(p.d)
k=x.u
j=B.a([C.ew(A.bj,!1,4279310375,A.aF,"marriage_locked_bg",4280640491,24,A.bp,A.a7,"",1,C.cF(),l,"","",0,!1,"",0,D.bi,4280172719,2,"",0,0,"",D.co,D.lN,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.D2(i,0.016,D.lm,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.D2(0,0.058,D.eT,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.D2(0,0.058,D.eT,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.KY("HATI YA NDOA",A.K,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.KY("Hati ya Makubaliano ya Ndoa",A.K,i,12,A.a7,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.h81(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bBz("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a1O("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a1O("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a1O("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a1O("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bBz("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.D2(m,0.082,D.bi,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cF()
k.push(C.ew(A.bj,!1,i,A.aF,"marriage_field_utangulizi:"+A.k.ac(0.78,3),4280640491,9.5,A.bp,A.cA,"",0.074,g,null,"","",0,!1,"",0,D.bi,4280172719,2,y.O,0,0,"",D.co,D.cV,0.78,0.11,0.388))
A.d.v(k,C.h81(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bBz("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hsM("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hsM("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a1O("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a1O("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bBy("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bBy("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bBz("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.KY("Mume",A.K,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.KY("Mke",A.K,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bBy("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bBy("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bBz("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a1O("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bBy("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a1O("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.h81(0.22,0.83,0.56,4291404327,i),h)
h.push(C.KY("NGMY",A.K,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.KY("Nakala ya Hati",A.K,4291404327,9,A.a7,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.C0(null,null,null,null,D.oF,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rM(m,null,0,0,j,n,D.qL,"","","Hati ya Ndoa",D.dh)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ah7,v)},
fMs:function fMs(){},
fEN:function fEN(){},
fEO:function fEO(d){this.a=d},
fEL:function fEL(d){this.a=d},
fEM:function fEM(d){this.a=d},
i4D(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
i4C(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.n0
case"lineThrough":return A.x_
default:return A.aF}},
ew(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eP(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
huU(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.RK[w]
if(v.b===u)return v}return D.dh},
i0R(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.d0h[w]
if(v.b===u)return v}return D.cV},
i7v(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.drO[w]
if(v.b===u)return v}return D.bi},
rM(d,e,f,g,h,i,j,k,l,m,n){return new C.lW(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hlr(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.i2X(d.h(0,"layout"))
t=B.aK(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aK(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.huU(d.h(0,"transition"))
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
n=B.cH(n,new C.ciZ(),n.$ti.k("M.E"),x.F)
n=B.C(n,B.a7(n).k("M.E"))}return C.rM(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
i2X(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.asa[w]
if(v.b===u)return v}return D.mV},
C0(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.V(Date.now(),0,!1):a4
return new C.i6(p,t,a1,h,i,w,a0==null?B.a([C.rM(4294967295,null,0,0,null,C.cF(),D.qL,"","","",D.dh)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
Wo(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hZX(a6.h(0,"aspectRatio"))
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
else{f=J.b6(f,new C.ciM(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.ciN(),x.N)
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
g=B.cH(g,new C.ciO(),g.$ti.k("M.E"),x.bt)
g=B.C(g,B.a7(g).k("M.E"))}return C.C0(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rM(4294967295,a3,0,0,a3,C.cF(),D.qL,"","","",D.dh)],x.g):g,v,p,o,s)},
kH(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hZX(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dsH[w]
if(v.b===u)return v}return D.DA},
cF(){var w=Date.now(),v=$.j9
$.j9=v+1
return""+1000*w+"_"+v},
cjf(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.aa(d.z)
if(e!==D.DB){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cF()
v=C.ew(A.K,!1,f.d.l(),A.aF,"",n,40,A.bp,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bi,m,2,o,0,0,"",D.co,D.cV,0.84,0.08,0.3)
u=C.cF()
A.d.v(w,B.a([v,C.ew(A.K,!1,f.e.l(),A.aF,"",n,20,A.bp,A.cA,"",0.12,u,p,"","",0,!1,"",0,D.bi,m,2,"Click to add subtitle",0,0,"",D.co,D.cV,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cF()
v=C.ew(A.bj,!1,f.d.l(),A.aF,"",n,32,A.bp,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bi,m,2,o,0,0,"",D.co,D.cV,0.88,0.06,0.06)
u=C.cF()
A.d.v(w,B.a([v,C.ew(A.bj,!0,f.e.l(),A.aF,"",n,20,A.bp,A.cA,"",0.68,u,p,"","",0,!1,"",0,D.bi,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.co,D.cV,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cF()
v=C.ew(A.bj,!1,f.d.l(),A.aF,"",n,30,A.bp,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bi,m,2,"Two Column Slide",0,0,"",D.co,D.cV,0.88,0.06,0.06)
u=C.cF()
t=f.e
u=C.ew(A.bj,!0,t.l(),A.aF,"",n,18,A.bp,A.a7,"",0.7,u,p,"","",0,!1,"",0,D.bi,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.co,D.cV,0.42,0.06,0.22)
s=C.cF()
A.d.v(w,B.a([v,u,C.ew(A.bj,!0,t.l(),A.aF,"",n,18,A.bp,A.a7,"",0.7,s,p,"","",0,!1,"",0,D.bi,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.co,D.cV,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.M(d.z,C.ew(A.K,!1,4294967295,A.aF,"",n,42,A.bp,A.u,"",0.2,C.cF(),p,"","",0,!1,"",0,D.bi,m,2,"Section Header",0,0,"",D.co,D.cV,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cF()
v=C.ew(A.bj,!1,f.d.l(),A.aF,"",n,30,A.bp,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bi,m,2,"Compare",0,0,"",D.co,D.cV,0.88,0.06,0.06)
u=C.cF()
t=f.c
u=C.ew(A.bj,!1,l,A.aF,"",t.j(0.12).l(),24,A.bp,A.a7,"",0.68,u,p,"","",0,!1,"",0,D.bi,t.l(),2,"",0,0,"",D.co,D.fb,0.42,0.06,0.22)
s=C.cF()
r=f.e
s=C.ew(A.bj,!1,r.l(),A.aF,"",n,20,A.bp,A.U,"",0.6,s,p,"","",0,!1,"",0,D.bi,m,2,"Option A",0,0,"",D.co,D.cV,0.38,0.08,0.26)
q=C.cF()
t=C.ew(A.bj,!1,l,A.aF,"",t.j(0.06).l(),24,A.bp,A.a7,"",0.68,q,p,"","",0,!1,"",0,D.bi,t.j(0.5).l(),2,"",0,0,"",D.co,D.fb,0.42,0.52,0.22)
q=C.cF()
A.d.v(w,B.a([v,u,s,t,C.ew(A.bj,!1,r.l(),A.aF,"",n,20,A.bp,A.U,"",0.6,q,p,"","",0,!1,"",0,D.bi,m,2,"Option B",0,0,"",D.co,D.cV,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cF()
v=C.ew(A.K,!1,f.d.l(),A.aF,"",n,36,A.bp,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bi,m,2,"TERM / QUESTION",0,0,"",D.co,D.cV,0.8,0.1,0.12)
u=C.cF()
A.d.v(w,B.a([v,C.ew(A.K,!1,f.e.l(),A.aF,"",n,22,A.bp,A.cA,"",0.35,u,p,"","",0,!1,"",0,D.bi,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.co,D.cV,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cF()
v=C.ew(A.bj,!1,f.d.l(),A.aF,"",n,28,A.bp,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bi,m,2,"Quiz Question",0,0,"",D.co,D.cV,0.88,0.06,0.06)
u=C.cF()
A.d.v(w,B.a([v,C.ew(A.bj,!1,f.e.l(),A.aF,"",n,20,A.bp,A.a7,"",0.62,u,p,"","",0,!1,"",0,D.bi,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.co,D.cV,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cF()
v=C.ew(A.bj,!1,f.d.l(),A.aF,"",n,26,A.bp,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bi,m,2,"Worksheet / Assignment",0,0,"",D.co,D.cV,0.88,0.06,0.04)
u=C.cF()
A.d.v(w,B.a([v,C.ew(A.bj,!1,f.e.l(),A.aF,"",n,18,A.bp,A.a7,"",0.78,u,p,"","",0,!1,"",0,D.bi,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.co,D.cV,0.88,0.06,0.16)],x.u))
break}},
hRx(d){return A.d.dN(D.a4u,new C.cjg(d),new C.cjh())},
hRu(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.X.aM(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aW(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gS(t)
if(!q.b(u))continue
try{J.cc(v,C.Wo(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
h4k(d,e){var w,v,u,t=B.U(x.N,x.I),s=new C.cjb(t)
for(w=J.aW(d);w.C();)s.$1(w.gS(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.L)(e),++v)s.$1(e[v])
w=t.$ti.k("bd<2>")
u=B.C(new B.bd(t,w),w.k("M.E"))
A.d.aZ(u,new C.cja())
return u},
hlu(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cj6()
if(u!==w)return u>=w?d:e
return v.$1(d).ce(v.$1(e))?d:e},
as7(d){return C.hRs(d)},
hRs(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$as7=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.cj9()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a2Z(m),$async$as7)
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
return B.b(B.az(),$async$as7)
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
case 11:o=l.$1($.hlt.h(0,m))
n=C.h4k(C.h4k(j,r),o)
if(n.length===0){u=C.hlu(C.hlu(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$as7,v)},
cj5(d){return C.hRr(d)},
hRr(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$cj5=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$cj5)
case 7:r=f
q=r.tC("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
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
return B.i($async$cj5,v)},
b2D(d,e){return C.hRt(d,e)},
hRt(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b2D=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b2D)
case 6:s=g
q=s.tC("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.M(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.LH(r,J.ad(r)-500):r
w=7
return B.b(s.au("StringList","ngmy_slides_deleted_"+p,o),$async$b2D)
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
return B.i($async$b2D,v)},
Wp(d,e){return C.hRv(d,e)},
hRv(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Wp=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hls.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.as7(a3),$async$Wp)
case 5:p=a6
case 4:w=6
return B.b(C.cj5(a3),$async$Wp)
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
e=B.C(new B.Z(new B.bd(n,m),new C.cjc(o),l),l.k("M.E"))
A.d.aZ(e,new C.cjd())
$.hls.n(0,a0,e)
n=B.T(e).k("N<1,a8<n,@>>")
n=B.C(new B.N(e,new C.cje(),n),n.k("ak.E"))
r=A.X.aq(n,null)
$.hlt.n(0,a0,r)
t=8
w=11
return B.b(B.ahV(a0,r),$async$Wp)
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
return B.b(B.az(),$async$Wp)
case 16:q=a6
w=17
return B.b(q.au("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$Wp)
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
return B.i($async$Wp,v)},
J9:function J9(d,e){this.a=d
this.b=e},
as5:function as5(d,e){this.a=d
this.b=e},
v2:function v2(d,e){this.a=d
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
lW:function lW(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cj_:function cj_(){},
cj0:function cj0(){},
ciZ:function ciZ(){},
i6:function i6(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
ciP:function ciP(){},
ciQ:function ciQ(){},
ciM:function ciM(){},
ciN:function ciN(){},
ciO:function ciO(){},
jU:function jU(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cjg:function cjg(d){this.a=d},
cjh:function cjh(){},
cjb:function cjb(d){this.a=d},
cja:function cja(){},
cj6:function cj6(){},
cj7:function cj7(){},
cj8:function cj8(){},
cj9:function cj9(){},
cjc:function cjc(d){this.a=d},
cjd:function cjd(){},
cje:function cje(){},
ign(d,e){var w=x.N,v=B.U(w,x.F)
w=new C.fN0(e,v,d,B.aX(w))
w.$1(new C.fMX())
w.$1(new C.fMY())
w.$1(new C.fMZ())
w.$1(new C.fN_())
return v},
fN0:function fN0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fMX:function fMX(){},
fMY:function fMY(){},
fMZ:function fMZ(){},
fN_:function fN_(){},
b2A:function b2A(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ciV:function ciV(d){this.a=d},
ciU:function ciU(){},
ciW:function ciW(){},
ciX:function ciX(d,e){this.a=d
this.b=e},
ciY:function ciY(d){this.a=d},
ap9:function ap9(d,e){this.c=d
this.a=e},
bkV:function bkV(d,e){var _=this
_.d=$
_.bw$=d
_.a8$=e
_.c=_.a=null},
dN3:function dN3(){},
aMt:function aMt(){},
cj2(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cj2=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.K(x.q).f.U(D.fdP)
u=!1
w=1
break}u=B.l7(!1,d,t,!1,null,A.a7a,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cj2,v)},
hRp(d){var w=A.d.bh(D.I3,new C.cj3(d))
if(w<0)return!0
return w>=4},
hRq(d){var w=A.d.bh($.bG0(),new C.cj4(d))
if(w<0)return!0
return w>=5},
cj3:function cj3(d){this.a=d},
cj4:function cj4(d){this.a=d},
ii6(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.x8()
$.pL().oY(t,new C.fPS(s),!0)
u=B.a([B.Bz(v,A.pw,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ap(v,B.p(v,B.d(e,v,v,v,v,v,v,D.foL,v,v,v),A.f,v,v,new B.o(A.aS,v,v,w,v,v,A.n),v,v,v,v,A.mL,v,v,v),v,v,4,v,4,v))}return new B.an(A.a_,v,A.b3,A.t,u,v)},
fPS:function fPS(d){this.a=d},
ihI(){return C.hbw()},
ieB(){return C.bDX()},
igG(){return C.hbn()},
aQJ(d,e,f){var w=0,v=B.j(x.H),u
var $async$aQJ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fOY(d,f),$async$aQJ)
case 5:w=1
break
case 4:if(d.e!=null)d.K(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aQJ,v)},
fOY(d,e){var w=0,v=B.j(x.H),u
var $async$fOY=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bC6
if(u==null)u=e+".pdf"
w=2
return B.b(B.bV(A.L,null,new C.fOZ(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fOY)
case 2:return B.h(null,v)}})
return B.i($async$fOY,v)},
fOZ:function fOZ(d,e){this.a=d
this.b=e},
adT:function adT(d,e,f){this.c=d
this.d=e
this.a=f},
eyC:function eyC(d,e){this.a=d
this.b=e},
eyD:function eyD(d,e){this.a=d
this.b=e},
eyE:function eyE(d,e){this.a=d
this.b=e},
eyF:function eyF(d){this.a=d},
ae9:function ae9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b2z(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b2y(g,m,f,d,e,h,l,k,j,o,i,null)},
hxV(d){return B.cu(new C.fMW(d))},
hby(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
ihQ(d){if(d===D.co)return"None"
return C.hby(d)},
bCC(d,e,f,g){return C.i7C(d,e,f,g)},
i7C(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bCC=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a5(d,!0)
if($.h8k&&t.pP())t.eM()
$.h8k=!0
s.a=null
w=3
return B.b(B.i2(A.bk,!0,"Animation preview",d,new C.fwk(s,e,g,f),null,A.eH,!0,x.H),$async$bCC)
case 3:s=s.a
if(s!=null)s.a4(0)
$.h8k=!1
case 1:return B.h(u,v)}})
return B.i($async$bCC,v)},
fZx(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fZx=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.E(B.aG(d,A.bZ,x.w).w.a.a*0.88,280,440)
s=f===D.co
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.hby(f)+" Slide transition preview"
s=s?Ah.Gj:A.u7
w=3
return B.b(C.bCC(d,s,new B.a4(t,t*0.56,B.bx(B.m(14),new C.aJZ(f,null),A.ap),null),r),$async$fZx)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fZx,v)},
hxc(d,e,f){var w,v,u=null,t=A.cu.aw(0,A.k.E(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.db(f,t)
case 2:case 17:return B.dQ(B.db(f,t),new B.t((1-t)*48,0))
case 3:return B.dQ(B.db(f,t),new B.t(-(1-t)*48,0))
case 4:case 21:return B.dQ(B.db(f,t),new B.t(0,(1-t)*36))
case 5:return B.dQ(B.db(f,t),new B.t(0,-(1-t)*36))
case 6:case 16:return B.ee(A.A,B.db(f,t),0.5+t*0.5,u,u)
case 7:return B.ee(A.A,B.db(f,t),1.4-t*0.4,u,u)
case 8:w=B.ds()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fI((1-t)*1.2)
return B.fy(A.A,B.db(f,t),u,w,!0)
case 9:w=B.ds()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.kh((1-t)*1.2)
return B.fy(A.A,B.db(f,t),u,w,!0)
case 10:case 19:w=B.ds()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.mU((1-t)*0.8)
v=0.6+t*0.4
w.jX(v,v,v,1)
return B.fy(A.A,B.db(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dQ(B.db(f,t),new B.t((1-t)*24,0))}},
bFv(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bFv=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.E(B.aG(d,A.bZ,x.w).w.a.a*0.88,300,440)
s=f===D.co
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.hby(f)+" Element animation preview"
s=s?Ah.Gj:A.u7
w=3
return B.b(C.bCC(d,s,new B.a4(t,t*0.62,B.bx(B.m(14),new C.aAE(f,null),A.ap),null),r),$async$bFv)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bFv,v)},
ihP(d){var w,v,u,t,s=$.agA.W(0,d)
if(s!=null){$.agA.n(0,d,s)
return s}w=A.cF.aO(A.a.b5(d,A.a.cp(d,",")+1))
$.agA.n(0,d,w)
v=$.h99=$.h99+w.length
u=B.a7($.agA).k("cx<1>")
for(;;){if(!(v>41943040&&$.agA.a>1))break
t=new B.cx($.agA,u).gaf(0)
if(!t.C())B.b9(B.fr())
v-=$.agA.W(0,t.gS(0)).length
$.h99=v}return w},
ihu(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ag("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).lc(0,d),j=B.C(k,B.a7(k).k("M.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.L)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ar(d,r,o)
m=f.$1(e)
v.push(new B.eu(n,l,l,A.cN,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.Tf(s,A.u))
v.push(new B.eu(n,l,l,A.cN,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.Tf(t,A.u))
v.push(new B.eu(n,l,l,A.cN,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.Tf(u,A.cA))
v.push(new B.eu(n,l,l,A.cN,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b5(d,r)
v.push(B.cS(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a2Y(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
m.D(new B.jL(e))
return m
case"rounded":m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
w=e.gdD()*0.18
m.D(new B.iT(B.bs(e,new B.aP(w,w))))
return m
case"triangle":m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
m.D(new B.aY(e.gbL().a,e.b))
w=e.d
m.D(new B.aq(e.c,w))
m.D(new B.aq(e.a,w))
m.D(new B.bt())
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
if(o!=null)p.bx(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.aq(p,o)
m.push(p)
o=v.f
if(o!=null)p.bx(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}}v.D(new B.bt())
return v
case"diamond":m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
m.D(new B.aY(e.gbL().a,e.b))
m.D(new B.aq(e.c,e.gbL().b))
m.D(new B.aq(e.gbL().a,e.d))
m.D(new B.aq(e.a,e.gbL().b))
m.D(new B.bt())
return m
case"arch":m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
w=e.a
u=e.d
m.D(new B.aY(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.D(new B.aq(w,p))
m.bc2(new B.t(t,p),new B.aP(s,s))
m.D(new B.aq(t,u))
m.D(new B.bt())
return m
default:m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
m.D(new B.ok(e))
return m}},
fKv(d,e,f){return B.cu(new C.fKw(D.f62.t(0,d),d,f,e))},
b2y:function b2y(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ciT:function ciT(d){this.a=d},
ciS:function ciS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ciR:function ciR(){},
b2v:function b2v(d,e){this.b=d
this.a=e},
fMW:function fMW(d){this.a=d},
fMV:function fMV(d,e){this.a=d
this.b=e},
fwk:function fwk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fwi:function fwi(d){this.a=d},
fwj:function fwj(d,e){this.a=d
this.b=e},
aJZ:function aJZ(d,e){this.c=d
this.a=e},
bwe:function bwe(d,e){var _=this
_.d=$
_.bw$=d
_.a8$=e
_.c=_.a=null},
fdd:function fdd(d,e,f){this.a=d
this.b=e
this.c=f},
aKH:function aKH(d,e){this.b=d
this.a=e},
Vw:function Vw(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bl6:function bl6(d,e){var _=this
_.d=$
_.bw$=d
_.a8$=e
_.c=_.a=null},
dYC:function dYC(d){this.a=d},
dYB:function dYB(d){this.a=d},
dYA:function dYA(d){this.a=d},
J8:function J8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ciL:function ciL(d){this.a=d},
ciK:function ciK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAE:function aAE(d,e){this.c=d
this.a=e},
bfq:function bfq(){this.d=0
this.c=this.a=null},
dbJ:function dbJ(d){this.a=d},
dbI:function dbI(d){this.a=d},
a8e:function a8e(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blM:function blM(d,e){var _=this
_.d=null
_.bw$=d
_.a8$=e
_.c=_.a=null},
elZ:function elZ(d,e,f){this.a=d
this.b=e
this.c=f},
b0u:function b0u(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bgE:function bgE(d,e,f){this.b=d
this.c=e
this.a=f},
brM:function brM(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f25:function f25(){},
fKw:function fKw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bsP:function bsP(d,e,f){this.b=d
this.c=e
this.a=f},
aMH:function aMH(){},
aNb:function aNb(){},
aOv:function aOv(){},
fNX(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fNX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xv.ca().Mt(D.dpH,A.ul,!0),$async$fNX)
case 3:r=e
if(r==null||J.ct(r.a)){u=null
w=1
break}t=J.ft(r.a)
s=t.c
if(s==null)throw B.W("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.W("That file is too big. Use a file under 8 MB.")
u=C.iho(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fNX,v)},
iho(d,e){var w,v=d.toLowerCase()
if(A.a.c9(v,".pdf"))return new C.a8x(d,new B.a0z(A.cJ.gcu().aO(e),"application/pdf"),"")
if(A.a.c9(v,".docx")){w=C.i9j(e)
if(A.a.i(w).length===0)throw B.W("No readable words were found in that Word file.")
return new C.a8x(d,null,w.length>6e4?A.a.ar(w,0,6e4):w)}w=A.ch.Lc(0,e,!0)
if(A.a.i(w).length===0)throw B.W("That file is empty.")
return new C.a8x(d,null,w.length>6e4?A.a.ar(w,0,6e4):w)},
i9j(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cDt().cNG(B.rw(d,A.ij,o,o),o,o,!1).cPw(0,"word/document.xml")
if(n==null)return""
w=n.cXE()
v=A.ch.Lc(0,w==null?$.hAj():w,!0).split("</w:p>")
u=new B.fh("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ag("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).lc(0,r)
p=A.a.i(B.cH(q,new C.fzk(),B.a7(q).k("M.E"),t).hm(0))
if(p.length!==0){q=B.aL(p,"&lt;","<")
q=B.aL(q,"&gt;",">")
q=B.aL(q,"&quot;",'"')
q=B.aL(q,"&apos;","'")
q=B.aL(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a8x:function a8x(d,e,f){this.a=d
this.b=e
this.c=f},
fzk:function fzk(){},
hRw(d,e,f,g,h,i,j,k,l){return new C.Ol(l,e,d,g,f,i,h,j,k,null)},
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
aFv:function aFv(d,e,f,g,h,i,j,k,l){var _=this
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
_.a8$=l
_.c=_.a=null},
eEQ:function eEQ(d){this.a=d},
eEO:function eEO(){},
eEP:function eEP(d){this.a=d},
eBd:function eBd(){},
eBe:function eBe(){},
eBf:function eBf(d,e){this.a=d
this.b=e},
eCO:function eCO(d){this.a=d},
eCC:function eCC(){},
eCD:function eCD(){},
eAB:function eAB(){},
eDW:function eDW(d){this.a=d},
eEM:function eEM(d,e){this.a=d
this.b=e},
eCM:function eCM(d,e){this.a=d
this.b=e},
eEz:function eEz(d){this.a=d},
eEA:function eEA(){},
eEB:function eEB(){},
eEC:function eEC(d){this.a=d},
eED:function eED(){},
eA_:function eA_(d){this.a=d},
eEN:function eEN(){},
eBV:function eBV(d,e){this.a=d
this.b=e},
ezY:function ezY(d){this.a=d},
ezZ:function ezZ(d){this.a=d},
eCh:function eCh(d){this.a=d},
eCi:function eCi(d,e,f){this.a=d
this.b=e
this.c=f},
eCj:function eCj(d){this.a=d},
eBU:function eBU(){},
eBT:function eBT(d){this.a=d},
eBR:function eBR(){},
eBQ:function eBQ(d){this.a=d},
eBS:function eBS(){},
eB9:function eB9(d){this.a=d},
eBa:function eBa(d){this.a=d},
eC0:function eC0(d){this.a=d},
eBW:function eBW(d){this.a=d},
eBX:function eBX(d){this.a=d},
eBY:function eBY(d){this.a=d},
eBZ:function eBZ(d){this.a=d},
eC_:function eC_(d){this.a=d},
eC1:function eC1(d,e){this.a=d
this.b=e},
eA1:function eA1(){},
eA2:function eA2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCc:function eCc(){},
eCd:function eCd(d,e){this.a=d
this.b=e},
eCa:function eCa(d,e,f){this.a=d
this.b=e
this.c=f},
eCb:function eCb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eC4:function eC4(d,e,f){this.a=d
this.b=e
this.c=f},
eC5:function eC5(d,e,f){this.a=d
this.b=e
this.c=f},
eC6:function eC6(d){this.a=d},
eC7:function eC7(d,e){this.a=d
this.b=e},
eC8:function eC8(d,e){this.a=d
this.b=e},
eC9:function eC9(d,e){this.a=d
this.b=e},
eC3:function eC3(d,e){this.a=d
this.b=e},
eCf:function eCf(d){this.a=d},
eCg:function eCg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eCe:function eCe(d){this.a=d},
eCx:function eCx(){},
eCy:function eCy(){},
eCz:function eCz(){},
eCA:function eCA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCu:function eCu(d){this.a=d},
eCw:function eCw(){},
eCv:function eCv(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eCs:function eCs(d,e,f){this.a=d
this.b=e
this.c=f},
eCt:function eCt(d,e){this.a=d
this.b=e},
eCB:function eCB(){},
eC2:function eC2(d,e){this.a=d
this.b=e},
eAi:function eAi(){},
eAj:function eAj(d,e,f){this.a=d
this.b=e
this.c=f},
eAk:function eAk(d){this.a=d},
eAl:function eAl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eAh:function eAh(d){this.a=d},
eCH:function eCH(d){this.a=d},
eCG:function eCG(d,e){this.a=d
this.b=e},
eCF:function eCF(d,e){this.a=d
this.b=e},
eCE:function eCE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCI:function eCI(d,e){this.a=d
this.b=e},
eyX:function eyX(d,e){this.a=d
this.b=e},
eAg:function eAg(d,e){this.a=d
this.b=e},
eAe:function eAe(d){this.a=d},
eCQ:function eCQ(d,e,f){this.a=d
this.b=e
this.c=f},
eAa:function eAa(d,e){this.a=d
this.b=e},
eA9:function eA9(d){this.a=d},
eCP:function eCP(d,e,f){this.a=d
this.b=e
this.c=f},
eA0:function eA0(d){this.a=d},
eAC:function eAC(){},
eEx:function eEx(d,e){this.a=d
this.b=e},
eEy:function eEy(d,e,f){this.a=d
this.b=e
this.c=f},
eDX:function eDX(d,e,f){this.a=d
this.b=e
this.c=f},
eyY:function eyY(d){this.a=d},
eyV:function eyV(d,e){this.a=d
this.b=e},
eyL:function eyL(d,e){this.a=d
this.b=e},
eyI:function eyI(d){this.a=d},
eyH:function eyH(d,e){this.a=d
this.b=e},
eyJ:function eyJ(d,e){this.a=d
this.b=e},
eAc:function eAc(d){this.a=d},
eAd:function eAd(d,e){this.a=d
this.b=e},
eAb:function eAb(d){this.a=d},
ezp:function ezp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ezq:function ezq(d,e){this.a=d
this.b=e},
ezu:function ezu(d,e){this.a=d
this.b=e},
ezv:function ezv(d){this.a=d},
ezs:function ezs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ezt:function ezt(d){this.a=d},
ezr:function ezr(){},
ezo:function ezo(d,e,f){this.a=d
this.b=e
this.c=f},
eCr:function eCr(d,e){this.a=d
this.b=e},
eEG:function eEG(d){this.a=d},
eEH:function eEH(d,e){this.a=d
this.b=e},
eEI:function eEI(d){this.a=d},
eEJ:function eEJ(d,e,f){this.a=d
this.b=e
this.c=f},
eEF:function eEF(d){this.a=d},
eEc:function eEc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEb:function eEb(d,e,f){this.a=d
this.b=e
this.c=f},
eEa:function eEa(){},
eE9:function eE9(d,e,f){this.a=d
this.b=e
this.c=f},
eE8:function eE8(d,e){this.a=d
this.b=e},
eE5:function eE5(d,e,f){this.a=d
this.b=e
this.c=f},
eE3:function eE3(d){this.a=d},
eE4:function eE4(d){this.a=d},
eE7:function eE7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eE6:function eE6(d){this.a=d},
eB5:function eB5(d,e){this.a=d
this.b=e},
eB4:function eB4(d,e){this.a=d
this.b=e},
eDY:function eDY(){},
eEw:function eEw(d,e){this.a=d
this.b=e},
eEu:function eEu(d){this.a=d},
eEv:function eEv(d){this.a=d},
eyQ:function eyQ(d,e){this.a=d
this.b=e},
eyO:function eyO(d){this.a=d},
eyP:function eyP(d){this.a=d},
eyR:function eyR(d,e){this.a=d
this.b=e},
eyS:function eyS(d,e,f){this.a=d
this.b=e
this.c=f},
eyW:function eyW(d,e){this.a=d
this.b=e},
eyN:function eyN(d,e,f){this.a=d
this.b=e
this.c=f},
eyM:function eyM(d){this.a=d},
eCN:function eCN(d,e,f){this.a=d
this.b=e
this.c=f},
eEE:function eEE(d,e,f){this.a=d
this.b=e
this.c=f},
eB8:function eB8(d,e,f){this.a=d
this.b=e
this.c=f},
eB7:function eB7(){},
ezy:function ezy(d,e,f){this.a=d
this.b=e
this.c=f},
ezz:function ezz(d){this.a=d},
eyK:function eyK(d,e){this.a=d
this.b=e},
eAA:function eAA(d,e){this.a=d
this.b=e},
eyT:function eyT(d,e){this.a=d
this.b=e},
ez1:function ez1(d){this.a=d},
ez2:function ez2(d,e){this.a=d
this.b=e},
ez3:function ez3(d,e){this.a=d
this.b=e},
ez0:function ez0(d){this.a=d},
eze:function eze(d,e){this.a=d
this.b=e},
ez_:function ez_(d){this.a=d},
ezh:function ezh(d){this.a=d},
ezi:function ezi(d){this.a=d},
ezj:function ezj(d){this.a=d},
ezk:function ezk(d){this.a=d},
ezl:function ezl(d){this.a=d},
ezm:function ezm(){},
ezn:function ezn(){},
ez4:function ez4(d){this.a=d},
ez5:function ez5(d){this.a=d},
ez6:function ez6(d){this.a=d},
ez7:function ez7(d){this.a=d},
ez8:function ez8(d){this.a=d},
ez9:function ez9(d){this.a=d},
eza:function eza(d){this.a=d},
ezb:function ezb(d){this.a=d},
ezc:function ezc(d){this.a=d},
ezd:function ezd(d){this.a=d},
ezf:function ezf(d){this.a=d},
ezg:function ezg(d,e){this.a=d
this.b=e},
eAz:function eAz(d,e,f){this.a=d
this.b=e
this.c=f},
eAy:function eAy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eAx:function eAx(d,e,f){this.a=d
this.b=e
this.c=f},
eAw:function eAw(d,e){this.a=d
this.b=e},
eyU:function eyU(d,e){this.a=d
this.b=e},
ezC:function ezC(d){this.a=d},
ezB:function ezB(d){this.a=d},
ezA:function ezA(d,e){this.a=d
this.b=e},
ezD:function ezD(d){this.a=d},
ezE:function ezE(d){this.a=d},
ezF:function ezF(d,e){this.a=d
this.b=e},
eAf:function eAf(d){this.a=d},
eCq:function eCq(d,e){this.a=d
this.b=e},
eCp:function eCp(d,e){this.a=d
this.b=e},
eCo:function eCo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCm:function eCm(d){this.a=d},
eCn:function eCn(d,e){this.a=d
this.b=e},
eCk:function eCk(){},
eCl:function eCl(){},
eDZ:function eDZ(){},
eE_:function eE_(d,e){this.a=d
this.b=e},
eE0:function eE0(){},
eE1:function eE1(d){this.a=d},
eE2:function eE2(d,e){this.a=d
this.b=e},
eyZ:function eyZ(d,e){this.a=d
this.b=e},
eA3:function eA3(){},
eA4:function eA4(){},
eA5:function eA5(){},
eA8:function eA8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eA7:function eA7(d,e){this.a=d
this.b=e},
eA6:function eA6(d,e,f){this.a=d
this.b=e
this.c=f},
eBz:function eBz(d){this.a=d},
eBy:function eBy(){},
eBA:function eBA(d,e){this.a=d
this.b=e},
eBB:function eBB(d,e){this.a=d
this.b=e},
eBx:function eBx(d){this.a=d},
eBC:function eBC(d,e){this.a=d
this.b=e},
eBw:function eBw(d){this.a=d},
eBD:function eBD(d,e){this.a=d
this.b=e},
eBv:function eBv(d){this.a=d},
eBE:function eBE(d,e){this.a=d
this.b=e},
eBu:function eBu(d){this.a=d},
eBF:function eBF(d,e){this.a=d
this.b=e},
eBt:function eBt(d,e){this.a=d
this.b=e},
eBG:function eBG(d,e){this.a=d
this.b=e},
eBs:function eBs(d){this.a=d},
eBH:function eBH(d,e){this.a=d
this.b=e},
eBr:function eBr(d){this.a=d},
eBk:function eBk(d,e){this.a=d
this.b=e},
eBl:function eBl(d){this.a=d},
eBm:function eBm(d){this.a=d},
eBj:function eBj(d){this.a=d},
eBn:function eBn(d,e){this.a=d
this.b=e},
eBi:function eBi(d){this.a=d},
eBo:function eBo(d,e){this.a=d
this.b=e},
eBh:function eBh(d){this.a=d},
eBp:function eBp(d,e){this.a=d
this.b=e},
eBg:function eBg(d){this.a=d},
eBq:function eBq(d){this.a=d},
eAs:function eAs(d){this.a=d},
eAt:function eAt(d){this.a=d},
eAv:function eAv(d){this.a=d},
eAn:function eAn(d){this.a=d},
eAm:function eAm(d,e){this.a=d
this.b=e},
eAo:function eAo(d,e){this.a=d
this.b=e},
eAp:function eAp(d){this.a=d},
eAq:function eAq(d){this.a=d},
eAr:function eAr(d,e){this.a=d
this.b=e},
eAu:function eAu(d){this.a=d},
eEK:function eEK(d){this.a=d},
eEL:function eEL(d){this.a=d},
eBK:function eBK(d,e){this.a=d
this.b=e},
eBJ:function eBJ(d,e){this.a=d
this.b=e},
eBI:function eBI(d,e){this.a=d
this.b=e},
eBL:function eBL(d){this.a=d},
eBM:function eBM(d){this.a=d},
eD8:function eD8(d,e){this.a=d
this.b=e},
eD9:function eD9(d){this.a=d},
eDa:function eDa(d){this.a=d},
eDl:function eDl(d){this.a=d},
eDw:function eDw(d){this.a=d},
eDH:function eDH(d){this.a=d},
eDO:function eDO(d){this.a=d},
eDP:function eDP(d){this.a=d},
eDQ:function eDQ(d){this.a=d},
eDR:function eDR(d){this.a=d},
eDS:function eDS(d,e){this.a=d
this.b=e},
eDb:function eDb(d){this.a=d},
eDc:function eDc(d){this.a=d},
eDd:function eDd(d){this.a=d},
eDe:function eDe(d){this.a=d},
eDf:function eDf(d){this.a=d},
eDg:function eDg(d){this.a=d},
eDh:function eDh(d){this.a=d},
eDi:function eDi(d){this.a=d},
eDj:function eDj(d){this.a=d},
eDk:function eDk(d){this.a=d},
eDm:function eDm(d){this.a=d},
eDn:function eDn(d){this.a=d},
eDo:function eDo(d){this.a=d},
eDp:function eDp(d){this.a=d},
eDq:function eDq(d){this.a=d},
eDr:function eDr(d){this.a=d},
eDs:function eDs(d){this.a=d},
eDt:function eDt(d){this.a=d},
eDu:function eDu(d){this.a=d},
eCZ:function eCZ(d){this.a=d},
eDv:function eDv(d){this.a=d},
eD6:function eD6(d){this.a=d},
eDx:function eDx(d){this.a=d},
eD5:function eD5(d,e){this.a=d
this.b=e},
eDy:function eDy(d,e){this.a=d
this.b=e},
eDz:function eDz(d,e){this.a=d
this.b=e},
eD4:function eD4(d,e,f){this.a=d
this.b=e
this.c=f},
eCV:function eCV(d,e){this.a=d
this.b=e},
eD7:function eD7(d){this.a=d},
eDT:function eDT(d,e){this.a=d
this.b=e},
eDV:function eDV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eDU:function eDU(d,e){this.a=d
this.b=e},
eDA:function eDA(d,e,f){this.a=d
this.b=e
this.c=f},
eD3:function eD3(d,e,f){this.a=d
this.b=e
this.c=f},
eCU:function eCU(d,e,f){this.a=d
this.b=e
this.c=f},
eCS:function eCS(d,e){this.a=d
this.b=e},
eDB:function eDB(d,e){this.a=d
this.b=e},
eD2:function eD2(d,e){this.a=d
this.b=e},
eCT:function eCT(d,e){this.a=d
this.b=e},
eCR:function eCR(d,e){this.a=d
this.b=e},
eDC:function eDC(d){this.a=d},
eD1:function eD1(d){this.a=d},
eDD:function eDD(d){this.a=d},
eDE:function eDE(d){this.a=d},
eDF:function eDF(d){this.a=d},
eDG:function eDG(d){this.a=d},
eD0:function eD0(d){this.a=d},
eDI:function eDI(d){this.a=d},
eDJ:function eDJ(d){this.a=d},
eDK:function eDK(d,e){this.a=d
this.b=e},
eD_:function eD_(d){this.a=d},
eDL:function eDL(d,e){this.a=d
this.b=e},
eCY:function eCY(d){this.a=d},
eDM:function eDM(d,e){this.a=d
this.b=e},
eCX:function eCX(d){this.a=d},
eDN:function eDN(d,e){this.a=d
this.b=e},
eCW:function eCW(d){this.a=d},
ezx:function ezx(d,e,f){this.a=d
this.b=e
this.c=f},
ezw:function ezw(d,e){this.a=d
this.b=e},
eEf:function eEf(d,e){this.a=d
this.b=e},
eEe:function eEe(d,e){this.a=d
this.b=e},
eEg:function eEg(d,e){this.a=d
this.b=e},
eEd:function eEd(d,e){this.a=d
this.b=e},
eAF:function eAF(d,e){this.a=d
this.b=e},
eAE:function eAE(d){this.a=d},
eAG:function eAG(d,e){this.a=d
this.b=e},
eAD:function eAD(d){this.a=d},
eBc:function eBc(){},
eBb:function eBb(){},
eEs:function eEs(d){this.a=d},
eEr:function eEr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEq:function eEq(d,e){this.a=d
this.b=e},
eEl:function eEl(d,e){this.a=d
this.b=e},
eEp:function eEp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEm:function eEm(d,e){this.a=d
this.b=e},
eEh:function eEh(d){this.a=d},
eEi:function eEi(d){this.a=d},
eEj:function eEj(d){this.a=d},
eEk:function eEk(d){this.a=d},
eEn:function eEn(d,e){this.a=d
this.b=e},
eEo:function eEo(d,e){this.a=d
this.b=e},
eEt:function eEt(d){this.a=d},
ezX:function ezX(d){this.a=d},
ezW:function ezW(d,e,f){this.a=d
this.b=e
this.c=f},
ezV:function ezV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ezK:function ezK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ezL:function ezL(d,e){this.a=d
this.b=e},
ezM:function ezM(d,e){this.a=d
this.b=e},
ezN:function ezN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ezJ:function ezJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ezO:function ezO(d,e){this.a=d
this.b=e},
ezQ:function ezQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ezP:function ezP(d,e){this.a=d
this.b=e},
ezR:function ezR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ezI:function ezI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ezS:function ezS(d,e){this.a=d
this.b=e},
ezH:function ezH(d,e){this.a=d
this.b=e},
ezT:function ezT(d,e){this.a=d
this.b=e},
ezG:function ezG(d){this.a=d},
ezU:function ezU(d,e){this.a=d
this.b=e},
eBO:function eBO(d){this.a=d},
eBN:function eBN(d){this.a=d},
eBP:function eBP(d,e){this.a=d
this.b=e},
eAT:function eAT(d,e){this.a=d
this.b=e},
eAU:function eAU(d,e){this.a=d
this.b=e},
eAS:function eAS(d,e){this.a=d
this.b=e},
eAV:function eAV(d,e){this.a=d
this.b=e},
eAR:function eAR(d,e){this.a=d
this.b=e},
eAW:function eAW(d,e){this.a=d
this.b=e},
eAQ:function eAQ(d,e){this.a=d
this.b=e},
eAX:function eAX(d,e){this.a=d
this.b=e},
eAP:function eAP(d,e){this.a=d
this.b=e},
eAY:function eAY(d,e){this.a=d
this.b=e},
eAO:function eAO(d,e){this.a=d
this.b=e},
eAZ:function eAZ(d,e,f){this.a=d
this.b=e
this.c=f},
eAN:function eAN(d,e){this.a=d
this.b=e},
eB_:function eB_(d,e,f){this.a=d
this.b=e
this.c=f},
eAM:function eAM(d,e){this.a=d
this.b=e},
eB0:function eB0(d,e){this.a=d
this.b=e},
eAL:function eAL(d,e,f){this.a=d
this.b=e
this.c=f},
eAI:function eAI(d,e){this.a=d
this.b=e},
eB1:function eB1(d,e){this.a=d
this.b=e},
eAK:function eAK(d,e){this.a=d
this.b=e},
eB2:function eB2(d,e){this.a=d
this.b=e},
eAJ:function eAJ(d,e,f){this.a=d
this.b=e
this.c=f},
eAH:function eAH(d,e){this.a=d
this.b=e},
eB3:function eB3(d,e){this.a=d
this.b=e},
eB6:function eB6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eyG:function eyG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eCL:function eCL(d,e){this.a=d
this.b=e},
eCJ:function eCJ(d){this.a=d},
eCK:function eCK(d,e){this.a=d
this.b=e},
afG:function afG(d,e,f){this.a=d
this.b=e
this.c=f},
aA_:function aA_(d,e){this.c=d
this.a=e},
bec:function bec(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b7$=e
_.c=_.a=null},
d7c:function d7c(d){this.a=d},
d7b:function d7b(d){this.a=d},
ber:function ber(d,e){this.c=d
this.a=e},
d7A:function d7A(d){this.a=d},
d7B:function d7B(d){this.a=d},
Ka:function Ka(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
beb:function beb(){this.d=!1
this.c=this.a=null},
d79:function d79(d){this.a=d},
d75:function d75(d){this.a=d},
d7a:function d7a(d){this.a=d},
d74:function d74(d){this.a=d},
d78:function d78(d){this.a=d},
d76:function d76(d){this.a=d},
d77:function d77(d,e){this.a=d
this.b=e},
Q1:function Q1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a02:function a02(d,e,f){this.c=d
this.d=e
this.a=f},
aFy:function aFy(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bw$=e
_.a8$=f
_.c=_.a=null},
eFq:function eFq(){},
eFg:function eFg(d){this.a=d},
eFp:function eFp(d){this.a=d},
eFh:function eFh(d){this.a=d},
eFi:function eFi(d){this.a=d},
eFc:function eFc(d){this.a=d},
eFd:function eFd(d,e){this.a=d
this.b=e},
eFe:function eFe(d){this.a=d},
eFf:function eFf(d,e,f){this.a=d
this.b=e
this.c=f},
eFn:function eFn(){},
eFo:function eFo(d){this.a=d},
eFj:function eFj(d){this.a=d},
eFk:function eFk(d){this.a=d},
eFl:function eFl(d){this.a=d},
eFm:function eFm(d){this.a=d},
eFr:function eFr(d,e,f){this.a=d
this.b=e
this.c=f},
eFt:function eFt(d,e){this.a=d
this.b=e},
eFs:function eFs(d){this.a=d},
Kg:function Kg(d,e){this.c=d
this.a=e},
btj:function btj(d,e){this.b=d
this.a=e},
bjd:function bjd(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bjc:function bjc(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aLo:function aLo(){},
aNo:function aNo(){},
bz9:function bz9(){},
aNp:function aNp(){},
fPT(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fPT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xv.ca().Mt(B.a(["pdf"],x.s),A.ul,!0),$async$fPT)
case 3:q=e
if(q==null||J.ct(q.a)){u=null
w=1
break}t=J.ft(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bqu(s,"data:application/pdf;base64,"+A.cJ.gcu().aO(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fPT,v)},
ii0(d){var w,v,u,t,s,r
try{w=B.jF(d,0,null)
v=B.ag("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cD(w)
if(v!=null){s=v.b[1]
s.toString
u=B.ce(s,null)
if(u!=null&&u>0){s=A.o.E(u,1,200)
return s}}t=B.ag("/Type\\s*/Page\\b",!0,!1,!1,!1).lc(0,w).gL(0)
if(t>0){s=J.aS7(t,1,200)
return s}}catch(r){}return 1},
fPK(d){return C.ii_(d)},
ii_(d){var w=0,v=B.j(x.T),u
var $async$fPK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fPK,v)},
bEI(d,e,f,g){return C.ii9(d,e,f,g)},
ii9(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bEI=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.ef(b6,x.co).gaf(0).C()){u=null
w=1
break}t=4
r=A.k.E(b7.a,80,2400)
q=A.k.E(b7.b,80,2400)
p=B.hyv(b9,new B.av(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
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
l=Math.max(B.je(b0),a9)}o=A.k.E(o-0.04,0,1)
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
a7.r=A.rj.gp(0)
f.aP(new B.a3(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.I()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.by
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
b2.delete()}a0=a2}a3=g.nj()
w=7
return B.b(a3.xd(800,h),$async$bEI)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.hx(A.ha),$async$bEI)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.eS(A.dK.gaS(a5))
a7=A.cJ.gcu().aO(a7)
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
return B.i($async$bEI,v)},
aRh(d,e,f){return C.ihY(d,e,f)},
ihY(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aRh=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.av:e
r.c=f==null?5.2:f
w=3
return B.b(B.ai8(d,e,f,new C.fPI(r,q),q,"Sign document"),$async$aRh)
case 3:if(!new B.ef(q,x.co).gaf(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bEI(q,t,r.b,r.c),$async$aRh)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b2C(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aRh,v)},
ii7(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hru(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hru(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b5(A.a.aX(A.o.fv(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.ac(q.c*100,2)+"%;top:"+A.k.ac(q.d*100,2)+"%;width:"+A.k.ac(q.e*100,2)+"%;height:"+A.k.ac(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b5(A.a.aX(A.o.fv(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d+='<div class="txt" style="font-size:'+B.w(p)+"px;color:#"+o+'">'+B.aL(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lN&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aL(p,"&",h)
p=B.aL(p,"<",g)
p=B.aL(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aL(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hr5(q.ay)+";border:2px solid "+C.hr5(q.ch)+'"></div>'
break
case 5:l=C.hao(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aL(n,'"',e)+"</div>")
p=p?null:l.gakD()
if(p==null)p=A.aAy
n=B.T(p)
k=n.k("jd<1>")
j=new B.jd(p,0,8,k)
j.od(p,0,8,n.c)
j=new B.bT(j,j.gL(0),k.k("bT<ak.E>"))
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
hr5(d){var w=A.o.aD(d,24)
return"rgba("+(A.o.aD(d,16)&255)+","+(A.o.aD(d,8)&255)+","+(d&255)+","+A.k.ac((w&255)/255,3)+")"},
hru(d){var w=B.aL(d,"&","&amp;")
w=B.aL(w,"<","&lt;")
w=B.aL(w,">","&gt;")
return B.aL(w,'"',"&quot;")},
bEG(d,e){var w=0,v=B.j(x.H)
var $async$bEG=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.ck(null,null,!0,null,new C.fPR(e,C.ii7(e),d),d,null,!0,!0,x.H),$async$bEG)
case 2:return B.h(null,v)}})
return B.i($async$bEG,v)},
bEH(){var w=0,v=B.j(x.T),u,t,s
var $async$bEH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A6.H2(92,2400),$async$bEH)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fPK(s),$async$bEH)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEH,v)},
aRi(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aRi=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.hbD(d),$async$aRi)
case 3:t=f
s=A.a.i(d.b)
r=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aL(s,r,"_"))
u=A0.fSr(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aRi,v)},
hlq(d,e){var w
if(e<0||e>=d.r.length)return A.o.E(d.e,1,120)
w=d.r[e].w
return A.o.E(w>0?w:d.e,1,120)},
b2C:function b2C(d,e,f){this.a=d
this.b=e
this.c=f},
fPI:function fPI(d,e){this.a=d
this.b=e},
fPR:function fPR(d,e,f){this.a=d
this.b=e
this.c=f},
fPO:function fPO(d){this.a=d},
fPP:function fPP(d,e,f){this.a=d
this.b=e
this.c=f},
fPQ:function fPQ(d,e,f){this.a=d
this.b=e
this.c=f},
ihZ(d){return C.kH(d.w)},
ii5(d){var w,v,u,t
if(d.length===0||!A.d.d0(d,C.ijQ()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yV(d){var w=A.a.i(d),v=B.ag("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=$.hEn()
if(w.b.test(u))return u
return null},
hyx(d,e,f){var w,v,u=C.hN9(d),t=$.oh()
for(w=0;w<80;++w){v=u+A.a.aX(A.o.u(t.ap(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aX(A.o.u(Date.now()%1000),3,"0")},
iib(d){var w,v,u,t,s=B.aX(x.N)
for(w=J.aW(d.a),v=new B.f2(w,d.b);v.C();){u=w.gS(w).y
t=C.yV(u==null?"":u)
if(t!=null)s.M(0,t)}return s},
fPG(d,e){var w,v=d.y,u=C.yV(v==null?"":v)
if(u!=null)return d.y=u
w=C.iib(new B.Z(e,new C.fPH(d),B.T(e).k("Z<1>")))
v=d.x
return d.y=C.hyx(v==null?"":v,null,w)},
iia(d){var w,v
if(d.length!==1)return null
w=A.d.gI(d)
if(!C.kH(w.w))return null
v=w.y
return C.yV(v==null?"":v)},
hRy(){var w,v=$.oh(),u=J.e_(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ap(32)]
return"SL"+A.d.hm(u)},
Ws(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Ws=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$Ws)
case 3:if(!e){u=B.U(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f6("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bK),$async$Ws)
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
return B.i($async$Ws,v)},
Wt(d){return C.hRz(d)},
hRz(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$Wt=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$Wt)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hN("ngmy_slides_transfer_qr_stashes_v1",B.H(["stashes",d,"savedAt",new B.V(Date.now(),0,!1).a9().ae()],x.N,x.z),!1,!1,A.cG,null),$async$Wt)
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
return B.i($async$Wt,v)},
a8z(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a8z=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$a8z)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.Ws(),$async$a8z)
case 4:s=a6
r=C.yV(a2==null?"":a2)
if(r==null)r=a3!=null?C.hyx(a3,null,A.vi):null
q=x.N
p=B.aX(q)
for(o=J.dn(s),n=J.aW(o.gi3(s)),m=x.f;n.C();){l=n.gS(n)
if(!m.b(l))continue
k=J.r(l,"claimCode")
j=C.yV(J.k(k==null?"":k))
if(j!=null)p.M(0,j)}n=o.gdW(s),n=n.gaf(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gS(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a2(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dO.aO(t)
g.n(0,"payload",A.cJ.gcu().aO(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.V(Date.now(),0,!1).a9().ae())
if(D.Ud.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yV(J.k(q==null?"":q))
if(f==null)f=C.hlv(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.Wt(s),$async$a8z)
case 7:u=new B.aH0(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hRy()
n=r==null
d=n?C.hlv(p):r
q=B.U(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dO.aO(t)
q.n(0,"payload",A.cJ.gcu().aO(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.V(Date.now(),0,!1).a9().ae())
if(D.Ud.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.Wt(s),$async$a8z)
case 8:u=new B.aH0(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8z,v)},
hlv(d){var w,v,u=$.oh()
for(w=0;w<200;++w){v="SL"+A.a.aX(A.o.u(u.ap(1000)),3,"0")
if(d.M(0,v))return v}return"SL"+A.a.aX(A.o.u(Date.now()%1000),3,"0")},
as9(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$as9=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$as9)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.Ws(),$async$as9)
case 6:t=f
s=J.a6(t)
r=s.gL(t)
s.bs(t,new C.cji(q))
w=s.gL(t)!==r?7:8
break
case 7:w=9
return B.b(C.Wt(t),$async$as9)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$as9,v)},
as8(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$as8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yV(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$as8)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.Ws(),$async$as8)
case 6:t=o.k0(f),t=t.gaf(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gS(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.r(q,"claimCode")
if(C.yV(J.k(q==null?"":q))===p){u=C.a8y(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$as8,v)},
a8y(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a8y=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$a8y)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.Ws(),$async$a8y)
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
if(D.Ud.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.A(l.h(n,"sharedByAdmin"),!0))try{r=A.X.aM(0,s,null)
if(m.b(r)){q=B.a2(r,x.N,x.z)
J.aJ(q,"sharedByAdmin",!0)
s=A.X.aq(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dN(B.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.V(Date.now(),0,!1).a9().ae())
o.n(p,g,l)}w=7
return B.b(C.Wt(p),$async$a8y)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8y,v)},
ii4(d,e,f){var w,v=B.U(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.V(Date.now(),0,!1).a9().ae())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.T(d).k("N<1,a8<n,@>>")
w=B.C(new B.N(d,new C.fPN(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fPV(d,e,f,g){var w
if(e!=null){w=B.U(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.V(Date.now(),0,!1).a9().ae())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ah())
return A.X.aq(w,null)}return A.X.aq(C.ii4(d==null?B.a([],x.D):d,f,g),null)},
fPU(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fPU=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a8z(h,d,e,f,g),$async$fPU)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yV(e==null?"":e)
u=new B.aGN(s,t)
w=1
break}t=A.dO.aO(h)
t=A.kB.gcu().aO(t)
u=new B.aGN(C.yV(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fPU,v)},
hbF(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d2(q,"NGMYSLIDESYNC2|"))return!0
if(J.d2(q,"NGMYSLIDECODE|"))return!0
if(J.d2(q,"NGMY_SL:"))return!0
if(J.f1(q,s)||J.f1(q,r))return!0
if(J.d2(q,"{"))try{w=A.X.aM(0,q,null)
if(x.f.b(w)){u=J.r(w,"type")
v=J.k(u==null?"":u)
u=J.A(v,s)||J.A(v,r)
return u}}catch(t){}return!1},
ii8(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.hbF(v))return v
u=A.a.cp(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b5(v,u))
if(C.hbF(t))return t}s=A.a.cp(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b5(v,s))
if(C.hbF(t))return t}}return null},
fPJ(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d2(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d2(t,"NGMY_SL:"))w=v.a(A.X.aM(0,A.ch.cB(0,A.cF.aO(J.nk(t,8))),null))
else w=v.a(A.X.aM(0,t,null))
v=C.i0k(w)
return v}catch(u){v=B.a([],x.D)
return v}},
ahU(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$ahU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.as8(t[1]),$async$ahU)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fPJ(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yV(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.as8(r),$async$ahU)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fPJ(s)
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
return B.b(C.a8y(t[1]),$async$ahU)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fPJ(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fPJ(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ahU,v)},
i0k(d){var w,v,u,t=J.a6(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.A(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Ud.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.hbC(C.Wo(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.de(u,x.f)
t=B.cH(t,new C.flU(w),t.$ti.k("M.E"),x.I)
t=B.C(t,B.a7(t).k("M.E"))
return t}return B.a([],x.D)},
hbC(d,e){var w,v,u,t,s,r,q,p,o=d.ah()
o.n(0,"id",C.cF())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aW(v),t=x.f;u.C();){s=u.gS(u)
if(t.b(s)){r=Date.now()
q=$.j9
$.j9=q+1
J.aJ(s,"id",""+1000*r+"_"+q)}}p=C.Wo(B.a2(o,x.N,x.z))
if(e&&C.kH(p.w))p.Q=new B.V(Date.now(),0,!1).a9().bS(144e8).ae()
return p},
bEr(){var w=0,v=B.j(x.aT),u,t,s
var $async$bEr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.H1(),$async$bEr)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.ahU(s),$async$bEr)
case 4:t=e
u=J.ct(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEr,v)},
fYM(d){var w=0,v=B.j(x.T),u,t
var $async$fYM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.i2(D.Ya,!0,"Dismiss",d,new C.fYN(),new C.fYO(),A.Gh,!0,x.N),$async$fYM)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.K(x.q).f.U(D.fbY)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fYM,v)},
im_(d,e,f,g,h){return B.a5(d,!1).cc(B.eh(new C.fYP(h,e,g,f),!0,null,x.H))},
fPH:function fPH(d){this.a=d},
cji:function cji(d){this.a=d},
fPN:function fPN(){},
flU:function flU(d){this.a=d},
fYN:function fYN(){},
fYO:function fYO(){},
fYP:function fYP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wq:function Wq(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFw:function aFw(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eEX:function eEX(){},
eET:function eET(d,e){this.a=d
this.b=e},
eEW:function eEW(d,e){this.a=d
this.b=e},
eEU:function eEU(d){this.a=d},
eEV:function eEV(d){this.a=d},
eEY:function eEY(d){this.a=d},
eEZ:function eEZ(d){this.a=d},
eF1:function eF1(d){this.a=d},
eF2:function eF2(d){this.a=d},
eF0:function eF0(d){this.a=d},
eF3:function eF3(d){this.a=d},
eF_:function eF_(d){this.a=d},
eF4:function eF4(d,e){this.a=d
this.b=e},
eES:function eES(d,e){this.a=d
this.b=e},
eER:function eER(d,e){this.a=d
this.b=e},
Wr:function Wr(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bm7:function bm7(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eF5:function eF5(d,e){this.a=d
this.b=e},
eF6:function eF6(d){this.a=d},
eF7:function eF7(){},
eF8:function eF8(d){this.a=d},
eF9:function eF9(d,e){this.a=d
this.b=e},
aFt:function aFt(d){this.a=d},
aFu:function aFu(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eyA:function eyA(d){this.a=d},
eyz:function eyz(){},
eyB:function eyB(d){this.a=d},
eyw:function eyw(d){this.a=d},
eyv:function eyv(){},
eyx:function eyx(d){this.a=d},
eyy:function eyy(d){this.a=d},
bwA:function bwA(){},
asa:function asa(d){this.a=d},
aFx:function aFx(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eFb:function eFb(d){this.a=d},
eFa:function eFa(d){this.a=d},
i5K(){var w,v,u,t
for(v=0;v<4;++v){w=D.ddE[v]
try{if(Ae.c03(w)){u=w
return u}}catch(t){}}return null},
RE(d,e){return C.ieM(d,e)},
ieM(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$RE=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.i5K()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.oF?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qN(c6,!0)
b6.toString
p=B.a5(c6,!0)
b7=new B.cw(null,x.A)
b8=A.d.gI(c3)
b9=$.ax()
o=new B.eC(b8,b9)
n=new B.eC("Getting ready\u2026",b9)
m=new B.eC(0,b9)
l=B.oB(new C.fJZ(c2,b7,o),!1,!1)
b6.m_(0,l)
b9=x.H
B.ck(null,A.dd,!1,null,new C.fK_(n,m),c6,null,!0,!0,b9)
k=new C.fK3(b7)
j=new C.fK4()
i=null
t=4
b3=c2.a
h=Al.aTC(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.h0I(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ae.aYB(f,B.H(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.IH.yH(i,"dataavailable",new C.fK0(e))
d=new B.c0(new B.bj($.bB,x.dT),x.b2)
A.IH.yH(i,"stop",new C.fK1(d))
J.aiv(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$RE)
case 8:w=7
return B.b(c5.$1(d0),$async$RE)
case 7:a0=d0
J.h0K(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.aiv(n,"Drawing slide "+B.w(a1+1)+" of "+b8+"\u2026")
J.aiv(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$RE)
case 15:w=14
return B.b(c5.$1(d0),$async$RE)
case 14:a0=d0
case 13:J.h0K(g,a0,0,0,c2.a,c2.b)
a3=A.o.E(a2.w>0?a2.w:c7.e,1,120)
J.aiv(n,"Recording slide "+B.w(a1+1)+" of "+c3.length+" \xb7 "+B.w(a3)+" s")
a4=new B.V(Date.now(),0,!1).bS(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbr())b3=b3===b8.gbr()&&0<b8.gcE()
else b3=!0
if(!b3){w=17
break}J.h0K(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bP(A.ft,null,b9),$async$RE)
case 18:w=16
break
case 17:J.aiv(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.aiv(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.da(0,A.oe),$async$RE)
case 19:a5=A.d.gI(q.split(";"))
a6=B.hO(e,a5)
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
B.bP(A.qc,new C.fK2(a7),b9)
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
c3.si7(b3)
J.aSb(c3,0)
c3=n
c3.si7(b3)
J.aSb(c3,0)
c3=m
c3.si7(b3)
J.aSb(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$RE,v)},
fJZ:function fJZ(d,e,f){this.a=d
this.b=e
this.c=f},
fJY:function fJY(){},
fK_:function fK_(d,e){this.a=d
this.b=e},
fK3:function fK3(d){this.a=d},
fK4:function fK4(){},
fK0:function fK0(d){this.a=d},
fK1:function fK1(d){this.a=d},
fK2:function fK2(d){this.a=d},
bwO:function bwO(d,e,f){this.c=d
this.d=e
this.a=f},
ffR:function ffR(){},
ffS:function ffS(){},
cjE(d){var w=0,v=B.j(x.at),u,t,s
var $async$cjE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.asi(d,A.A_),$async$cjE)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bF(new B.V(Date.now(),0,!1))
if(t.a<0){u=A.bC
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cjE,v)},
cjD(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a8f:function a8f(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blR:function blR(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
emQ:function emQ(d){this.a=d},
emO:function emO(d){this.a=d},
emP:function emP(d,e){this.a=d
this.b=e},
a98:function a98(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
a99:function a99(d,e){this.a=d
this.b=e},
b4g:function b4g(){},
cmI:function cmI(){},
cmJ:function cmJ(){},
cmK:function cmK(d,e,f,g,h,i,j,k,l){var _=this
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
hFn(d){return new C.aiN(d)},
a3o:function a3o(){},
aiN:function aiN(d){this.a=d},
aSw:function aSw(){},
axL:function axL(d,e){this.d=d
this.b=e
this.a=null},
aU2:function aU2(d){this.b=d
this.a=null},
fF6(d,e){var w=0,v=B.j(x.H)
var $async$fF6=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.S().gxS().Ma(d,e),$async$fF6)
case 2:B.fSx()
return B.h(null,v)}})
return B.i($async$fF6,v)},
hvN(d,e){return(A.rT[(d^e)&255]^A.o.aD(d,8))>>>0},
fCf(d,e,f,g,h,i){var w=C.ib5(d,A.dg,f,null,A.d_,g,h,i)
return w},
hxG(d){var w=F.hyo(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hN9(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.ps.h(0,w)
if(v!=null)return v
for(u=A.ps.gdW(A.ps),u=u.gaf(u);u.C();){t=u.gS(u).b
if(t.toLowerCase()===w)return t}u=B.ag("[^A-Z]",!0,!1,!1,!1)
s=B.aL(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ar(s,0,2)
return A.a.ar(s+"XX",0,2)},
hxO(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<49;++w)v+="- "+D.d39[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bCz(d,e){return C.i7x(d,e)},
i7x(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bCz=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hO([d],"application/pdf")
n=x.z
q=B.aVK(B.a([r],x.e3),e,B.H(["type","application/pdf"],n,n))
p=B.cC(B.H(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ed(B.jZ(o,"share",[p]),x.H),$async$bCz)
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
return B.i($async$bCz,v)},
hbw(){var w=0,v=B.j(x.y),u,t,s
var $async$hbw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fty
s=$.bC6
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bCz(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hbw,v)},
bDX(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bDX=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fty
l=$.bC6
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=A0.hsc()?3:4
break
case 3:w=5
return B.b(C.bCz(m,k),$async$bDX)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bC7
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
return B.b(B.bP(A.a2,null,x.H),$async$bDX)
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
return B.i($async$bDX,v)},
hbn(){var w=0,v=B.j(x.y),u,t,s,r
var $async$hbn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bC7
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lS.r0(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$hbn,v)},
hbE(d,e){var w=0,v=B.j(x.H),u,t
var $async$hbE=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hO([d],"text/html"))
t.toString
u=window
u.toString
A.lS.r0(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$hbE,v)},
b3d(d,e){var w=0,v=B.j(x.y),u
var $async$b3d=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b3f(d,e),$async$b3d)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b3e(d),$async$b3d)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3d,v)}},D,O,Ao,A9,A_,Aa,W,Ap,G,F,E,H,X,R,A0,A1,Aq,M,Ar,A2,As,At,Ab,K,Au,Av,A3,N,Y,P,Z,Ac,Aw,Q,Ad,Ax,Ae,Af,Ay,Ag,Az,Ah,Ai,AA,AB,S,AC,I,AD,T,U,L,A4,A5,A6
J=c[1]
B=c[0]
A=c[2]
Aj=c[204]
A7=c[74]
Ak=c[54]
Al=c[65]
V=c[221]
A8=c[58]
Am=c[148]
An=c[232]
C=a.updateHolder(c[5],C)
D=c[219]
O=c[140]
Ao=c[41]
A9=c[223]
A_=c[220]
Aa=c[233]
W=c[209]
Ap=c[133]
G=c[188]
F=c[35]
E=c[222]
H=c[96]
X=c[122]
R=c[150]
A0=c[32]
A1=c[178]
Aq=c[235]
M=c[158]
Ar=c[185]
A2=c[106]
As=c[135]
At=c[228]
Ab=c[117]
K=c[224]
Au=c[236]
Av=c[132]
A3=c[68]
N=c[198]
Y=c[83]
P=c[160]
Z=c[115]
Ac=c[119]
Aw=c[226]
Q=c[124]
Ad=c[142]
Ax=c[94]
Ae=c[59]
Af=c[194]
Ay=c[40]
Ag=c[81]
Az=c[157]
Ah=c[149]
Ai=c[231]
AA=c[234]
AB=c[230]
S=c[75]
AC=c[227]
I=c[175]
AD=c[237]
T=c[52]
U=c[225]
L=c[206]
A4=c[229]
A5=c[112]
A6=c[64]
C.o8.prototype={
vn(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.u8(t,v)
return new C.o8(t===0?!1:w,v,t)},
bNZ(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.Dl()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.u8(w,u)
return new C.o8(r===0?!1:s,u,r)},
bOv(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.Dl()
w=o-d
if(w<=0)return p.a?$.hd4():$.Dl()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.u8(w,u)
q=new C.o8(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aE(0,$.a3b())
return q},
dV(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.W(B.dL("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.ao(e,16)
if(A.o.F(e,16)===0)return r.bNZ(v)
u=w+v+1
t=new Uint16Array(u)
C.hoJ(r.b,w,e,t)
w=r.a
s=C.u8(u,t)
return new C.o8(s===0?!1:w,t,s)},
mz(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.W(B.dL("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.ao(e,16)
u=A.o.F(e,16)
if(u===0)return n.bOv(v)
t=w-v
if(t<=0)return n.a?$.hd4():$.Dl()
s=n.b
r=new Uint16Array(t)
C.hXe(s,w,e,r)
w=n.a
q=C.u8(t,r)
p=new C.o8(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dV(1,u)-1)!==0)return p.aE(0,$.a3b())
for(o=0;o<v;++o)if(s[o]!==0)return p.aE(0,$.a3b())}return p},
aL(d,e){var w,v=this.a
if(v===e.a){w=C.cLk(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a8U(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a8U(t,e)
if(s===0)return $.Dl()
if(r===0)return t.a===e?t:t.vn(0)
w=s+1
v=new Uint16Array(w)
C.hXc(t.b,s,d.b,r,v)
u=C.u8(w,v)
return new C.o8(u===0?!1:e,v,u)},
Hz(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.Dl()
w=d.c
if(w===0)return t.a===e?t:t.vn(0)
v=new Uint16Array(s)
C.bbo(t.b,s,d.b,w,v)
u=C.u8(s,v)
return new C.o8(u===0?!1:e,v,u)},
bAW(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.u8(r,u)
return new C.o8(!1,u,s)},
bAV(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.u8(u,r)
return new C.o8(!1,r,v)},
bAX(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
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
if(w===e.a){if(w){w=$.a3b()
return t.Hz(w,!0).bAX(e.Hz(w,!0),!0).a8U(w,!0)}return t.bAW(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bAV(v.Hz($.a3b(),!1),!1)},
a7(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a8U(e,v)
if(C.cLk(u.b,t,e.b,w)>=0)return u.Hz(e,v)
return e.Hz(u,!v)},
aE(d,e){var w,v,u=this,t=u.c
if(t===0)return e.vn(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a8U(e,v)
if(C.cLk(u.b,t,e.b,w)>=0)return u.Hz(e,v)
return e.Hz(u,!v)},
aI(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.Dl()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hoK(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.u8(w,t)
return new C.o8(q===0?!1:r,t,q)},
bNY(d){var w,v,u,t
if(this.c<d.c)return $.Dl()
this.aSN(d)
w=$.h6k.ca()-$.ayy.ca()
v=C.h6m($.h6j.ca(),$.ayy.ca(),$.h6k.ca(),w)
u=C.u8(w,v)
t=new C.o8(!1,v,u)
return this.a!==d.a&&u>0?t.vn(0):t},
cqO(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aSN(d)
w=C.h6m($.h6j.ca(),0,$.ayy.ca(),$.ayy.ca())
v=C.u8($.ayy.ca(),w)
u=new C.o8(!1,w,v)
if($.h6l.ca()>0)u=u.mz(0,$.h6l.ca())
return t.a&&u.c>0?u.vn(0):u},
aSN(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hoG&&d.c===$.hoI&&g.b===$.hoF&&d.b===$.hoH)return
w=d.b
v=d.c
u=16-A.o.gal0(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hoE(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hoE(g.b,f,u,r)}else{r=C.h6m(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.h6n(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cLk(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.bbo(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.bbo(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hXd(p,r,i);--o
C.hoK(h,j,0,r,o,s)
if(r[i]<h){m=C.h6n(j,s,o,n)
C.bbo(r,l,n,m,r)
while(--h,r[i]<h)C.bbo(r,l,n,m,r)}--i}$.hoF=g.b
$.hoG=f
$.hoH=w
$.hoI=v
$.h6j.b=r
$.h6k.b=l
$.ayy.b=s
$.h6l.b=u},
gX(d){var w,v,u,t=new C.cLl(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cLm().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.o8&&this.aL(0,e)===0},
tD(d,e){return this.aL(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
vi(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gal0(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aD(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cLn(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cLo(w)
if(J.A(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.ll(A.aG.gaS(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.vn(0):r
while(v.c>1){u=$.hCh()
if(u.c===0)B.b9(D.b8v)
t=v.cqO(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bNY(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dx(w,x.bJ).hm(0)},
$iaTf:1,
$ihQ:1}
C.aSG.prototype={
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
cPw(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gI(d){return A.d.gI(this.a)},
gak(d){return A.d.gak(this.a)},
gan(d){return this.a.length===0},
gcm(d){return this.a.length!==0},
gaf(d){var w=this.a
return new J.ke(w,w.length,B.T(w).k("ke<1>"))}}
C.Si.prototype={
cXE(){var w,v
if(this.as==null)this.ben()
w=this.as
v=w==null?null:w.apZ()
return v==null?null:v.eU()},
ben(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.apZ().eU()
this.as=new C.bRB(v)}},
gY(d){return this.at}}
C.a4k.prototype={
a6(){return"CompressionType."+this.b}}
C.bJz.prototype={
eE(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cs()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dV(v,u)+(s.b&A.zz[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cs()}w=A.o.dV(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fN(u,t)&A.zz[d])
s.c=t}return v}}
C.bHU.prototype={
cNF(d,e){var w,v,u,t,s,r=this,q=new C.bJz(d)
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
t=r.cp5(q)
if(t<0)return!1
if(t===0){q.eE(8)
q.eE(8)
q.eE(8)
q.eE(8)
s=r.cp8(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eE(8)
q.eE(8)
q.eE(8)
q.eE(8)
return!0}}return!0},
cp5(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eE(8)
if(t!==D.dvk[u])v=!1
if(t!==D.d6H[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cp8(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eE(1),d2=((d3.eE(8)<<8|d3.eE(8))<<8|d3.eE(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eE(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eE(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c40()
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
u[w]=l}c9.fr=B.bZ(6,$.hAn(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eE(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eE(1)===0)break
i=d3.eE(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hAm()
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
if(f<h)h=f}c9.c_k(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.auW(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.auW(d3)}while(a3===0||a3===1);++a5
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
a3=c9.auW(d3)
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
c1=(c1<<8^D.I9[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.Id[b9];++b9
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
if(b8===0){b8=D.Id[b9];++b9
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
if(b8===0){b8=D.Id[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.Id[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.Id[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bt(c3)
c1=c1<<8^D.I9[c1>>>24&255^v];--c2}d4.bt(c3)
c1=(c1<<8^D.I9[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bt(c7)
c1=(c1<<8^D.I9[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bt(c7)
c1=(c1<<8^D.I9[c1>>>24&255^c7&255])>>>0
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
auW(d){var w,v,u,t,s=this,r=s.ay
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
c_k(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c40(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cDu.prototype={
aJ7(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bRw(e)
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
if(w>0)e.aJa(w,!1)
r.cpt(e)
q=r.r
v=r.f
u=e.aMb(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aQ()!==33639248)break
s=new C.ba5()
s.cXD(0,u,e,f)
q.push(s)}},
cpt(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a8x(20,r)
if(w.aQ()!==117853008){d.c=s
return}w.aQ()
v=w.tp()
w.aQ()
d.c=v
if(d.aQ()!==101075792){d.c=s
return}d.tp()
d.b_()
d.b_()
d.aQ()
d.aQ()
d.tp()
d.tp()
u=d.tp()
t=d.tp()
this.f=u
this.r=t
d.c=s},
bRw(d){var w,v,u,t,s,r,q,p,o,n
if(d.gL(0)<=4)return-1
w=d.c
v=d.gL(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a8x(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.amB(A.ij)
o.aNs(r.eU(),A.ij,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aQ()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cDs.prototype={}
C.ayb.prototype={
a6(){return"ZipEncryptionMode."+this.b}}
C.cDv.prototype={
aJ7(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aQ()!==67324752)return
e.b_()
o.b=e.b_()
w=D.aHe.h(0,e.b_())
o.c=w==null?D.MW:w
o.d=e.b_()
o.e=e.b_()
o.f=e.aQ()
o.r=e.aQ()
o.w=e.aQ()
v=e.b_()
u=e.b_()
o.x=e.aoG(v)
o.y=e.ho(u).eU()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aYC:D.Ey
o.ay=f
o.Q=e.ho(t)
if(o.at!==D.Ey&&u>2){w=o.y
w.toString
s=B.rw(w,A.ij,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.b_()===39169){s.b_()
s.b_()
s.aoG(2)
w=s.b
w.toString
r=w[s.c++]
q=s.b_()
o.at=D.aYD
o.ax=new C.cDs(r,q)
w=D.aHe.h(0,q)
o.c=w==null?D.MW:w}}}if((o.b&8)!==0){p=e.aQ()
if(p===134695760)o.f=e.aQ()
else o.f=p
o.r=e.aQ()
o.w=e.aQ()}},
gL(d){return this.bo0().length},
apZ(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rw(new Uint8Array(0),A.ij,q,q)
w=r.at
if(w!==D.Ey)if(p.gL(0)<=0)r.at=D.Ey
else{if(w===D.aYC){p=r.bMg(p)
r.Q=p}else if(w===D.aYD){p=r.bLU(p)
r.Q=p}r.at=D.Ey}w=r.c
if(w===D.ajl){v=p.c
u=B.dm()
p=r.Q
if(p.gL(0)<=524288e3)u.b=A.pQ.BG(p.eU(),!0,!1)
else{t=B.a8Y(A.ij,r.w)
p=r.Q
p.toString
A.pQ.a4H(p,t,!0,!1)
u.b=t.H6()}r.Q.c=v
return B.rw(u.bk(),A.ij,q,q)}else if(w===D.ajm){s=B.a8Y(A.ij,32768)
p=r.Q
v=p.c
C.hFy().cNF(p,s)
u=s.H6()
r.Q.c=v
return B.rw(u,A.ij,q,q)}else return B.rw(p.eU(),A.ij,q,q)},
bo0(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eU()},
u(d){return this.x},
bai(d){var w=this.ch,v=C.K6(C.hvN(w[0].N(0),d))
w[0]=v
v=w[1].a7(0,v.Vi(0,C.K6(255)))
w[1]=v
w[1]=v.aI(0,C.K6(134775813)).a7(0,C.K6(1)).Vi(0,C.K6(4294967295))
w[2]=C.K6(C.hvN(w[2].N(0),w[1].mz(0,24).N(0)))},
aSb(){var w=(this.ch[2].Vi(0,C.K6(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bMg(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rw(new Uint8Array(0),A.ij,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.bai(u[v.c++]^r.aSb())}t=r.Q.eU()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aSb()
r.bai(s)
u&2&&B.aj(t)
t[w]=s}return B.rw(t,A.ij,q,q)},
bLU(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.ho(8).eU()
v=16}else if(k===2){w=d.ho(12).eU()
v=24}else{w=d.ho(16).eU()
v=32}u=d.ho(2).eU()
t=d.ho(d.gL(0)-10)
s=d.ho(10)
r=t.eU()
k=this.ay
k.toString
q=C.hWU(k,w,v)
p=new Uint8Array(B.cn(A.aG.dt(q,0,v)))
k=v*2
o=new Uint8Array(B.cn(A.aG.dt(q,v,k)))
if(!C.ho9(A.aG.dt(q,k,k+2),u))throw B.W(B.fo("password error"))
k=new Uint8Array(16)
n=new C.bGu(k,new Uint8Array(16),p)
k=x.S
m=J.a5L(0,k)
m=n.r=new C.cmx(m)
m.c=!0
m.b=m.bni(!0,new C.atJ(p))
if(m.c)m.d=B.bp(D.oB,!0,k)
else m.d=B.bp(D.zn,!0,k)
l=C.hmn(C.hmp(),64)
l.bgJ(new C.atJ(o))
n.w=l
n.cXd(r,0,r.length)
k=s.eU()
m=n.x
m===$&&B.c()
if(!C.ho9(k,m))throw B.W(B.fo("macs don't match"))
return B.rw(r,A.ij,null,null)}}
C.ba5.prototype={
cXD(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.aoG(w)
if(v>0){t=e.ho(v).eU()
n.ax=t
if(v>=4){s=B.rw(t,A.ij,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.b_()
p=s.b_()
o=s.a8x(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.tp()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.tp()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.tp()
p-=8}if(p>=4&&n.y===65535)n.y=o.aQ()}}}}if(u>0)e.aoG(u)
f.c=n.as
t=new C.cDv(D.MW,n,D.Ey,B.a([C.K6(0),C.K6(0),C.K6(0)],x.f3))
n.ch=t
t.aJ7(0,f,g)},
u(d){return this.at}}
C.cDt.prototype={
cNG(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cDu(B.a([],x.fT))
this.a=g
g.aJ7(0,d,f)
g=B.a([],x.bm)
w=B.U(x.N,x.S)
v=new C.aSG(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.L)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c9(o,"/")||A.a.c9(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.Si(o,A.o.ao(Date.now(),1000),0):C.hev(o,q.w,q)
v.M(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.hev(o,q.w,q)
if(k.as==null)k.ben()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.amB(A.ij)
j.aNs(o,A.ij,h,h)}i=j==null?h:j.eU()
if(i!=null)new B.Gq(!1).DK(i,0,h,!0)}}return v}}
C.bGu.prototype={
cXd(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.CE(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hFh(u,m.a)
q=m.r
if(16>u.byteLength)B.b9(B.dL("Input buffer too short",null))
if(16>w.byteLength)B.b9(B.dL("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bPL(u,0,w,0,o)}else{o===$&&B.c()
q.bMk(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.Lt(w,0)
m.x=A.aG.dt(m.x,0,10)
w=m.w
l=w.a
l.kK(0)
w=w.d
w===$&&B.c()
l.CE(0,w,0,w.length)
return f}}
C.cmC.prototype={}
C.cmG.prototype={}
C.cmA.prototype={}
C.atJ.prototype={}
C.cmF.prototype={
cNV(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ec(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bgJ(new C.atJ(A.aG.fL(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bQR(n.a,n.b,t,s,r)
r+=v}A.aG.he(f,g,g+w,s)
return o.a.c},
bQR(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.W(B.dL("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.CE(0,d,0,d.length)
v.CE(0,f,0,4)
u=m.c
u===$&&B.c()
w.Lt(u,0)
u=m.c
A.aG.he(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.CE(0,s,0,s.length)
w.Lt(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cmB.prototype={}
C.cmz.prototype={}
C.atK.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.atK){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
tD(d,e){var w=this.a
w===$&&B.c()
w=A.o.tD(w,e.gc_B())
if(!w)e.gc_B()
return w},
aLC(d,e){this.a=0
this.b=d},
tG(d){return this.aLC(d,null)},
aMe(d){var w,v=this,u=v.b
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
w.b2_(v,u)
u=w.b
u===$&&B.c()
w.b2_(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b2_(d,e){var w,v=A.o.fv(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bw(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cmE.prototype={
kK(d){var w,v=this
v.a.tG(0)
v.c=0
A.aG.hu(v.b,0,4,0)
v.w=0
w=v.r
A.d.hu(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
aps(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b3r(u,0)
v.c=0}v.a.aMe(1)},
CE(d,e,f,g){var w=this.cnQ(e,f,g)
f+=w
g-=w
w=this.cnR(e,f,g)
this.cnH(e,f+w,g-w)},
Lt(d,e){var w,v=this,u=C.hmo(v.a),t=u.a
t===$&&B.c()
t=C.hc9(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.hc9(w,3)
v.cnL()
v.cnI(u)
v.atL()
v.chS(d,e)
v.kK(0)
return 20},
b3r(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.oj(A.aG.gaS(d),d.byteOffset,d.length).getUint32(e,A.iv===w.d)
if(w.w===16)w.atL()},
atL(){this.cXc()
this.w=0
A.d.hu(this.r,0,16,0)},
cnH(d,e,f){while(f>0){this.aps(d[e]);++e;--f}},
cnR(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b3r(d,e)
e+=4
f-=4
w.aMe(4)
v+=4}return v},
cnQ(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.aps(d[e]);++e;--f;++v}return v},
cnL(){this.aps(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.aps(0)}},
cnI(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.atL()
u=v.d
switch(u){case A.iv:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.EZ:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.W(B.be("Invalid endianness: "+u.u(0)))}},
chS(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.iv===this.d,s=0;s<w;++s){r=v[s]
q=J.oj(A.aG.gaS(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdc(d){return this.f}}
C.cmH.prototype={
cXc(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.qp[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.qp[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.qp[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qp[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.qp[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qp[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.qp[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qp[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.qp[30]
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
C.cmD.prototype={
bgJ(d){var w,v,u,t,s=this,r=s.a
r.kK(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.CE(0,w,0,v)
w=s.d
w===$&&B.c()
r.Lt(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aG.he(t,0,v,w)}w=s.d
w===$&&B.c()
A.aG.hu(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aG.he(w,0,u,s.d)
s.bbw(s.d,u,54)
s.bbw(s.e,u,92)
u=s.d
r.CE(0,u,0,u.length)},
Lt(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.Lt(s,w)
s=u.e
t.CE(0,s,0,s.length)
v=t.Lt(d,e)
s=u.e
A.aG.hu(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.CE(0,s,0,s.length)
return v},
bbw(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cmy.prototype={}
C.cmx.prototype={
a2X(d){return(D.oB[d&255]&255|(D.oB[d>>>8&255]&255)<<8|(D.oB[d>>>16&255]&255)<<16|D.oB[d>>>24&255]<<24)>>>0},
bni(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.W(B.dL("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e_(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.bZ(4,0,!1,u)
switch(v){case 4:q=J.oj(A.aG.gaS(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a2X((m>>>8|(m&$.qp[24])<<24)>>>0)^D.cIT[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.oj(A.aG.gaS(e),e.byteOffset,w)
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
p=(p^f.a2X((k>>>8|(k&$.qp[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a2X((k>>>8|(k&$.qp[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.oj(A.aG.gaS(e),e.byteOffset,w)
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
p=(p^f.a2X((g>>>8|(g&$.qp[24])<<24)>>>0)^j)>>>0
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
bPL(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.oj(A.aG.gaS(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.ef[a8&255]
u=D.ef[a9>>>8&255]
t=$.qp[8]
s=D.ef[b0>>>16&255]
r=$.qp[16]
q=D.ef[b1>>>24&255]
p=$.qp[24]
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
a7=D.oB[n&255]
b0=D.oB[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.oB[l>>>8&255]
a9=D.oB[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.oB[b1>>>8&255]
h=D.oB[n>>>16&255]
g=D.oB[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.oB[l>>>24&255]
s=s[3]
a1=J.oj(A.aG.gaS(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.oj(A.aG.gaS(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.oj(A.aG.gaS(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.oj(A.aG.gaS(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bMk(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.oj(A.aG.gaS(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.oj(A.aG.gaS(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.oj(A.aG.gaS(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.oj(A.aG.gaS(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.ee[a6&255]
v=D.ee[b0>>>8&255]
u=$.qp[8]
t=D.ee[a5>>>16&255]
s=$.qp[16]
r=D.ee[a4>>>24&255]
q=$.qp[24]
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
a4=D.zn[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.zn[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.zn[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.zn[o>>>8&255]
i=D.zn[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.zn[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.oj(A.aG.gaS(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bRA.prototype={}
C.bRB.prototype={
gL(d){var w=this.a.length
return w},
apZ(){return B.rw(this.a,A.ij,null,null)}}
C.bbD.prototype={
vj(d){return C.i_b(d)}}
C.cx1.prototype={
Na(d){var w=d.w,v=Math.max(1,A.k.dd(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.aaB(v,t+20,u+16,t,u,B.ui(d.x))},
ny(d){return!1}}
C.bSD.prototype={
cHM(d){if(this.b)throw B.W(B.be("FontLoader is already loaded"))
this.c.push(d.bK(new C.bSE(),x.E))},
mQ(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.W(B.be("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mQ)
case 6:w=5
return B.b(p.fF6(f,r),$async$mQ)
case 5:case 3:t.length===s||(0,B.L)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mQ,v)}}
C.awQ.prototype={
a6(){return"SystemUiMode."+this.b}}
C.a8W.prototype={
A(d,e){if(e==null)return!1
if(J.bQ(e)!==B.b0(this))return!1
return e instanceof C.a8W&&e.a===this.a},
gX(d){return B.bw(B.b0(this),B.x5(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b0(this)===D.fYA)return"["+(w+B.e9(this.a))+"]"
return"[ObjectKey "+(w+B.e9(this.a))+"]"}}
C.a1r.prototype={
R(){return new C.aKj(B.aX(x.N))},
cVk(d){return this.d.$1(d)},
cT1(){return this.e.$0()}}
C.aKj.prototype={
Z(){this.a2()
this.Px()},
Px(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Px=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cT1(),$async$Px)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fej(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Px,v)},
ZC(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.T(r).k("Z<1>")
p=B.C(new B.Z(r,new C.fen(t),q),q.k("M.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.feo(t))
w=3
return B.b(C.aok(p),$async$ZC)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fep(t,s,p))
w=4
return B.b(t.Px(),$async$ZC)
case 4:case 1:return B.h(u,v)}})
return B.i($async$ZC,v)},
a1R(d){return this.cs_(d)},
cs_(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a1R=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.fek(t))
s=J.r(d,"id")
w=3
return B.b(C.c2A(J.k(s==null?"":s)),$async$a1R)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.fel(t))
w=1
break}q=C.hbC(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cVk(B.a([q],x.D)),$async$a1R)
case 4:if(t.c==null){w=1
break}t.m(new C.fem(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a1R,v)},
Pw(d,e){return this.bMM(0,e)},
bMM(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Pw=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a6(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.ck(null,null,!0,null,new C.fee(q),r,null,!0,!0,x.y),$async$Pw)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.fef(t))
s=s.h(e,"id")
w=4
return B.b(C.aoj(J.k(s==null?"":s)),$async$Pw)
case 4:if(t.c==null){w=1
break}t.m(new C.feg(t))
w=5
return B.b(t.Px(),$async$Pw)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Pw,v)},
cGL(d){var w=B.bk(d),v=w==null?null:w.bU()
if(v==null)return""
return A.iI[B.bL(v)-1]+" "+B.bW(v)},
aS2(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.Ps,A.n),w,e,w,w,w,w,w,e)},
aS1(d){return this.aS2(d,44)},
b8C(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Ps:u,r=B.m(14),q=B.X(e,t?A.c:A.aC,u,u,u,17),p=x.p
q=B.a([q,Z.Ec,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aC,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([Z.Ec,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aR,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bFb,u,u,u)],p))}return B.E(B.aA(A.c6,B.cY(u,B.B(q,A.m,u,A.b9,A.i,0,u,u),u,u,A.b5,new B.o(u,u,u,r,u,s,A.n),A.h4,u,u,u,u,A.rC,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.fet(this,d),u,u,u,u,u,u,!1,A.a3),1)},
clO(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d3.j(0.14):D.Z9,n=B.m(18),m=p?A.d3:A.dr
m=B.J(m,A.r,p?1.8:1)
w=this.aS1(A.qz)
v=B.d(d.b,q,1,A.a1,q,q,q,D.aUQ,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cS,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aUS,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
v=p?D.Ps:q
u=p?q:B.J(A.aX,A.r,1.6)
r=p?D.bWc:q
return B.aA(q,B.cY(q,B.B(B.a([w,A.bc,t,B.cY(q,r,q,q,A.b5,new B.o(q,q,u,q,q,v,A.a6),A.fO,q,26,q,q,q,q,q,26)],s),A.m,q,A.e,A.i,0,q,q),q,q,A.b5,new B.o(o,q,m,n,q,q,A.n),A.fO,q,q,q,A.d1,A.bg,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.fei(this,p,d),q,q,q,q,q,q,!1,A.a3)},
ctD(d){var w,v,u,t,s,r=this,q=null,p=J.a6(d),o=p.h(d,"savedAt"),n=r.cGL(J.k(o==null?"":o))
o=B.m(18)
w=B.J(A.dr,A.r,1)
v=r.aS1(A.OC)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a1,q,q,q,D.aUQ,q,q,q)
p=p.h(d,"slides")
p=B.w(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cS,B.d(p+" slides"+t,q,q,q,q,q,q,D.aUS,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
p=r.b57(A.hR,A.bv,"Bring it back",r.r?q:new C.feq(r,d))
return B.p(q,B.B(B.a([v,A.bc,t,p,A.bm,r.b57(A.eb,A.c0,"Delete",r.r?q:new C.fer(r,d))],s),A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(D.Z9,q,w,o,q,q,A.n),q,q,q,A.d1,D.bzs,q,q,q)},
b57(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.he(B.aA(w,B.p(w,B.X(d,v?A.aX:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a3),w,f,w,w)},
au0(d,e,f){var w=null
return new B.D(D.bys,B.x(B.a([B.X(d,A.aX,w,w,w,46),A.ae,B.d(e,w,w,w,w,w,w,D.fu3,w,w,w),A.au,B.d(f,w,w,w,w,w,w,D.fm5,A.K,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.ca
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aG(d,A.bZ,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.aX,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aS2(A.za,46),A.bc,D.bG3],t)
if(j.r)s.push(D.enS)
s.push(B.aH(i,i,i,i,A.rP,i,i,i,new C.few(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.i,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.J(A.dr,A.r,1)
o=J.a6(h)
q=B.a([A.W,u,new B.D(D.bC9,s,i),B.p(i,B.B(B.a([j.b8C(0,A.yU,"Save",j.a.c.length),j.b8C(1,A.OT,"Saved",o.gL(h))],t),A.m,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bBa,A.ev,i,i,i)],t)
if(j.x!=null){u=(j.y?A.c0:A.bv).j(0.12)
s=B.m(14)
r=B.J((j.y?A.c0:A.bv).j(0.4),A.r,1)
p=j.y
n=p?A.OF:A.e6
n=B.X(n,p?A.c0:A.bv,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.ad,B.E(B.d(m,i,i,i,i,i,i,A.UT,i,i,i),1)],t),A.m,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bB6,A.iq,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.fpR,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aA(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.ft2,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.fex(j,v),i,i,i,i,i,i,!1,A.a3))
s=B.a([B.B(s,A.m,i,A.e,A.i,0,i,i),A.W],t)
if(j.a.c.length===0)s.push(j.au0(A.qz,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.L)(r),++l)s.push(j.clO(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.eno)
else if(j.e==null)s.push(j.au0(A.a1E,"Could not reach the database","Check the connection, then open this again."))
else if(o.gan(h))s.push(j.au0(A.pe,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gaf(h);r.C();)s.push(j.ctD(r.gS(r)))
A.d.v(u,s)}q.push(new B.dr(1,A.cn,B.cl(u,i,i,A_.al9,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc6A()
p=s?i:D.Ps
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b7.j(0.4),A.cy,18)],x.V)
u=u.a
m=u===0
k=B.X(A.yU,m?A.jP:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bBM,B.aA(i,B.cY(i,B.B(B.a([k,A.a9j,new B.dr(1,A.cn,B.eO(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.jP:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.e3),i)],t),A.m,i,A.b9,A.i,0,i,i),i,i,A.b5,new B.o(s,i,i,o,n,p,A.n),A.h4,i,54,i,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a3),i))}else q.push(A.W)
return B.p(i,B.bn(!0,B.x(q,A.m,i,A.e,A.P,0,A.p),!0,!1,A.af,!0,!1),A.f,i,new B.aZ(0,1/0,0,w.a.b*0.9),D.b5n,i,i,i,i,i,i,i,i)}}
C.oA.prototype={
ah(){return B.H(["id",this.a,"doc",this.b.ah(),"updatedAt",this.c.a9().ae()],x.N,x.z)}}
C.Z7.prototype={
R(){return new C.ayK(B.a([],x.k),B.f8(null,x.H))},
ge2(){return this.c}}
C.ayK.prototype={
Z(){this.a2()
this.PH()},
PH(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a2p(t.a.c),$async$PH)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cMK(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PH,v)},
czY(d){var w,v,u,t=this
d.c=new B.V(Date.now(),0,!1)
w=J.qy(t.d,new C.cMN(d))
v=w<0
if(v&&C.hXg(d))return t.f
u=t.d
if(v)J.pO(u,0,d)
else J.aJ(u,w,d)
v=x.a
B.h22(new C.cMO(t),v)
return t.f=t.f.bK(new C.cMP(t,d),v).eR(new C.cMQ())},
IY(d,e,f){return this.cfn(0,e,f)},
aZV(d,e){return this.IY(0,e,!1)},
cfn(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$IY=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a5(s,!1).cc(B.eh(new C.cMJ(t,e),!1,null,x.H)),$async$IY)
case 3:w=4
return B.b(t.f,$async$IY)
case 4:w=5
return B.b(t.PH(),$async$IY)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IY,v)},
aZa(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dIb:d
this.IY(0,new C.oA(w,v,new B.V(Date.now(),0,!1)),!0)},
c62(){return this.aZa(null)},
aed(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aed=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bV(A.L,null,new C.cMR(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aed)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aZa(s)
case 1:return B.h(u,v)}})
return B.i($async$aed,v)},
IX(d,e){return this.bMD(0,e)},
bMD(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$IX=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.ck(null,null,!0,null,new C.cME(e),s,null,!0,!0,x.y),$async$IX)
case 3:if(g!==!0){w=1
break}t.m(new C.cMF(t,e))
w=4
return B.b(t.f,$async$IX)
case 4:w=5
return B.b(C.agU(t.a.c,e.a),$async$IX)
case 5:w=6
return B.b(t.PH(),$async$IX)
case 6:case 1:return B.h(u,v)}})
return B.i($async$IX,v)},
Ds(d){return this.bEL(d)},
bEL(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Ds=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bV(A.L,null,new C.cMA(d),r,!0,!0,!1,null,!1,!1,x.N),$async$Ds)
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
return B.b(t.aZV(0,d),$async$Ds)
case 9:w=5
break
case 7:w=10
return B.b(F.hcb(r,d.b,null),$async$Ds)
case 10:w=5
break
case 8:w=11
return B.b(t.IX(0,d),$async$Ds)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ds,v)},
c_x(){var w,v,u=null,t=[D.dIe,D.dIc,D.dId],s=new C.cMH(),r=B.m(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d0.j(0.4),A.eU,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aP(999,999)
n.push(B.p(u,new B.y(D.drL[w],u,A.oQ,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bh(v,v,v,v),u,u,A.n),u,u,u,u,A.oh,u,u,u))}return B.p(u,B.B(B.a([B.E(B.x(B.a([D.fTS,A.Q,B.bY(A.bG,n,A.br,u,6,6),A.aQ,B.aA(u,B.p(u,D.f3U,A.f,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cH,10)],q),u,A.n),u,u,u,u,V.aly,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cMG(this),u,u,u,u,u,u,!1,A.a3)],o),A.E,u,A.e,A.i,0,A.p),1),new B.a4(130,110,new B.an(A.A,u,A.ab,A.t,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.i,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.c3F,A.n),u,u,u,u,D.bCj,u,u,u)},
bEJ(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cy,14)],x.V),r=x.p
s=B.p(v,B.bx(B.m(6),new B.an(A.a_,v,A.b3,A.t,B.a([B.eO(A.A,F.aoW(d.b),A.f,A.bX),D.etT,B.ap(v,B.aA(v,B.p(v,D.bX1,A.f,v,v,D.b6k,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cMv(this,d),v,v,v,v,v,v,!1,A.a3),v,v,v,4,4,v)],r),v),A.ap),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a1,v,v,v,D.fjd,v,v,v)
w=u===1?"":"s"
return B.aA(v,B.x(B.a([new B.fH(0.6470588235294118,s,v),A.Q,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fq2,v,v,v)],r),A.E,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cMw(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cMx(this,d),v,v,v,v,v,v,!1,A.a3)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eI(B.a([new B.D(O.ak4,B.he(B.aA(s,B.p(s,A.aqU,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b7.j(0.5),A.I,12)],x.V),E.wC,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc7p(),s,s,s,s,s,s,!1,A.a3),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.L,s,1,!0,s,0,!1,s,!1,E.nj,s,s,s,!0,s,s,s,s,s,D.fTW,s,s,s,1,s,!0)
if(t.e)r=D.b9P
else{w=t.c_x()
v=B.a([D.fF6,A.ad],r)
if(J.cL(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.fiE,s,s,s),A.f,s,s,new B.o(D.bf0,s,s,u,s,s,A.n),s,s,s,s,A.yA,s,s,s))}r=B.a([new B.o4(A7.a_w,new B.mp(w,s),s),new B.o4(D.bBG,new B.mp(B.B(v,A.m,s,A.e,A.i,0,s,s),s),s)],r)
if(J.ct(t.d))r.push(D.faB)
else r.push(new B.o4(D.bB8,B.Pl(new B.oF(new C.cMS(t),J.ad(t.d),!0,!0,!0,0,B.tc(),s),D.b93),s))
r=B.vS(0,s,A.t,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c6(q,D.bdC,r,s,!1,!1,s,s)}}
C.Z5.prototype={
R(){return new C.ayG(B.a([],x.bx))},
Uw(d){return this.d.$1(d)}}
C.aG6.prototype={}
C.ayG.prototype={
b21(d,e,f){var w=$.ax(),v=new B.au(new B.ba(d,A.b4,A.aO),w),u=this.gaZU()
v.aT(0,u)
w=new B.au(new B.ba(e,A.b4,A.aO),w)
w.aT(0,u)
return new C.aG6(v,w,f)},
Ej(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a4(0)
v.x=B.cG(A.qh,new C.cLZ(v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a2()
w=m.a.c.b
v=$.ax()
u=new B.au(new B.ba(w.a,A.b4,A.aO),v)
t=m.gaZU()
u.aT(0,t)
m.d!==$&&B.aQ()
m.d=u
u=new B.au(new B.ba(w.b,A.b4,A.aO),v)
u.aT(0,t)
m.e!==$&&B.aQ()
m.e=u
u=new B.au(new B.ba(w.c,A.b4,A.aO),v)
u.aT(0,t)
m.f!==$&&B.aQ()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.L)(u),++q){p=u[q]
o=new B.au(new B.ba(p.a,A.b4,A.aO),v)
o.aT(0,t)
n=new B.au(new B.ba(p.b,A.b4,A.aO),v)
n.aT(0,t)
r.push(new C.aG6(o,n,p.c))}if(r.length===0)r.push(m.b21("Page 1","",""))},
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
t.push(new F.mK(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rB(n,w,v,t,u)},
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
c7n(){this.m(new C.cLY(this))
this.Ej()},
aYS(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cM0(w,d,v))
w.Ej()},
c7o(d,e){var w=A.d.cz(this.w,e)
this.m(new C.cM8())
this.Ej()
$.aV.x1$.push(new C.cM9(w))},
QY(d){return this.clE(d)},
clE(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QY=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hX().l2(80,1400,A.eL),$async$QY)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fl(),$async$QY)
case 8:p=f
o=q.b.toLowerCase()
n=J.aiq(o,".png")?"image/png":"image/jpeg"
r.m(new C.cM1(d,n,p))
r.Ej()
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
return B.i($async$QY,v)},
y_(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$y_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hzB(r,t.gpp()),$async$y_)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cM_(t,s))
t.Ej()
case 1:return B.h(u,v)}})
return B.i($async$y_,v)},
clW(d){var w,v=this,u=null,t=F.fJf(d.c)
if(t==null)return new B.bM(A.a5,u,u,B.hs(D.bQa,D.fHE,new C.cM3(v,d),u),u)
w=x.p
return new B.D(A.ct,new B.an(A.a_,u,A.ab,A.t,B.a([B.bx(B.m(12),B.fT(t,A.A,u,u,A.ci,A.bX,!0,140,!1,u,1/0),A.ap),B.ap(u,B.B(B.a([v.b58(A.jE,new C.cM4(v,d)),A.bm,v.b58(A.cx,new C.cM5(v,d))],w),A.m,u,A.e,A.i,0,u,u),u,u,u,6,6,u)],w),u),u)},
b58(d,e){var w=null
return B.aI(!1,A.a2,!0,w,B.aO(!1,w,!0,new B.D(A.hP,B.X(d,A.c,w,w,w,18),w),A.cO,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aS,0,w,w,A.cO,w,w,A.ai)},
IZ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$IZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.AW(),$async$IZ)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.hcb(s,t.gpp(),new C.cM7(t)),$async$IZ)
case 4:case 1:return B.h(u,v)}})
return B.i($async$IZ,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eI(B.a([new B.D(A.qi,B.hs(D.bUW,D.fNO,n.gaxK(),B.fw(m,m,m,m,m,m,m,m,m,m,m,A.bL,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aH(m,m,m,m,A.aqT,m,m,m,new C.cMa(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.Yg,m,1,m,m,m,!1,m,!1,E.nj,m,m,m,!0,m,m,m,m,m,D.fIv,m,m,m,1,m,!0),j=Ay.aVW(N.lB,A.c,Ag.X7,A.ov,D.fJf,n.gc7m()),i=B.m(18),h=n.gaxJ(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.j2,12)],x.V)
g=B.aA(m,B.p(m,new B.a4(92,142.1818181818182,B.eO(A.A,F.aoW(n.gpp()),A.f,A.dz),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a3)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.es,B.E(B.x(B.a([D.fVw,A.au,B.d(F.haF(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.fvT,m,m,m),A.W,B.di(E.aqb,E.aVD,h,B.bo(A.d0,m,m,m,m,m,m,m,m,m,m,m))],l),A.E,m,A.e,A.i,0,A.p),1)],l),A.m,m,A.e,A.i,0,m,m),A.f,m,m,new B.o(E.Yg,m,m,i,m,m,A.n),m,m,m,m,A.bg,m,m,m)
h=n.d
h===$&&B.c()
h=B.aM(m,A.Y,!1,m,!0,A.t,m,B.aN(),h,m,m,m,m,m,2,B.br(m,new B.b5(4,B.m(12),A.dk),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.aa,m,m,m,m,m,m,m,m,m,m,m,A.oO,!0,A.a4,m,A.an,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aM(m,A.Y,!1,m,!0,A.t,m,B.aN(),w,m,m,m,m,m,2,B.br(m,new B.b5(4,B.m(12),A.dk),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.aa,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aB,h,A.Q,w,A.Q,B.aM(m,A.Y,!1,m,!0,A.t,m,B.aN(),g,m,m,m,m,m,2,B.br(m,new B.b5(4,B.m(12),A.dk),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.aa,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m),A.aQ],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aP(16,16)
u=new B.ay(N.lB.j(0.18),1,A.r,-1)
t=v+1
s=B.aH(m,m,m,m,D.bTz,m,m,m,v===0?m:new C.cMb(n,v),m,m,m,m,"Move up",A.cc)
r=i.length
q=B.aH(m,m,m,m,D.c_2,m,m,m,v===r-1?m:new C.cMc(n,v),m,m,m,m,"Move down",A.cc)
r=r===1?m:new C.cMd(n,v)
p=new B.aP(12,12)
o=new B.aP(12,12)
g.push(B.p(m,B.x(B.a([new B.ca(A.aM,A.e,A.i,A.m,m,A.p,m,0,B.a([new B.y("Page "+t,m,D.fwq,m,m,m,m,m,m,m,m,m),A.b2,s,q,B.aH(m,m,m,m,B.X(A.eb,A.p6,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.cc)],l),m),B.aM(m,A.Y,!1,m,!0,A.t,m,B.aN(),i[v].a,m,m,m,m,m,2,new B.e7(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b5(4,new B.bh(p,p,p,p),A.dk),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.aa,m,m,m,m,m,m,m,m,m,m,m,A.ce,!0,A.a4,m,A.an,m,m,m,m),A.am,n.clW(i[v]),B.aM(m,A.Y,!1,m,!0,A.t,m,B.aN(),i[v].b,m,m,m,m,m,2,new B.e7(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b5(4,new B.bh(o,o,o,o),A.dk),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.aa,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)],l),A.m,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(E.nj,m,new B.bH(u,u,u,u),new B.bh(w,w,w,w),m,m,A.n),m,m,new C.a8W(h),A.ed,D.bzI,m,m,m))}return B.oC(!0,B.c6(k,E.ai2,B.cl(g,m,m,D.bAb,m,m,A.ah,!1),m,!1,!1,j,m),new C.cMe(n),x.C)}}
C.ayI.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.c0:E.nj,q=B.m(16),p=B.m(16),o=s?A.ax.j(0.08):A.c.j(0.04)
s=s?A.ax.j(0.16):A.d0.j(0.22)
w=B.m(12)
v=x.p
return new B.D(A.eI,B.aI(!1,A.a2,!0,t,B.aO(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bc,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bF,B.d(u.e,t,t,t,t,t,t,D.aUc,t,t,t)],v),A.E,t,A.e,A.i,0,A.p),1),B.X(A.eE,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.i,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bg,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.L,0,t,t,t,t,t,A.ai),t)}}
C.arc.prototype={
R(){return new C.aEV()}}
C.aEV.prototype={
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
if(u.c!=null)u.m(new C.ei6(u))
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
if(J.d2(n,"http://")||J.d2(n,"https://")||J.d2(n,"data:")){o=B.YJ(B.cI(n,0,null),new B.PI(!0))
r.d=o}else{o=B.fo("unsupported video ref")
throw B.W(o)}w=7
return B.b(o.ix(0).da(0,A.qe),$async$a_g)
case 7:if(r.c==null){w=1
break}r.d.tI(!1)
r.m(new C.ei4(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ab(m)
$.am.$1("[kiapo video] "+B.w(q))
if(r.c!=null)r.m(new C.ei5(r))
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
ca4(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.hd(0)
w.m(new C.ei7(w))}else{v.qc(0)
w.m(new C.ei8(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bJ
n=B.m(8*n.d)
m=B.a([D.jt.j(0.92),D.LY.j(0.95)],x.O)
w=B.J(A.c3.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.X(A.qC,A.c3,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c4(B.as(B.x(B.a([t,new B.a4(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.U,o,o,!0,o,o,o,o,o,o,o,o),A.K,o,o)],x.p),A.m,o,A.e,A.P,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a9(A.ay,A.aE,A.x,m,o,o),A.n),A.bh)}if(p.f)return B.as(B.X(A.apr,A.aC,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.baI
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.eO(A.A,new B.a4(r,q,new B.Ap(s,o),o),A.t,A.bX)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.as(B.p(o,B.X(A.hn,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.P(w,w,w,w),o,o,o),o,o,o))}return B.aA(o,B.bx(n,new B.an(A.a_,o,A.b3,A.t,m,o),A.ap),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gca3(),o,o,o,o,o,o,!1,A.a3)}}
C.xS.prototype={
a6(){return"NgmyHatiLayoutKind."+this.b}}
C.jA.prototype={}
C.adN.prototype={
B(d){return B.p5(new C.e4E(this,B.Q(d).ax.a===A.J,d),!0,0.72,0.9,0.5,!1,null)}}
C.adb.prototype={
B(d){var w,v,u=null,t=B.Q(d).ax.a===A.J,s=B.m(18),r=B.m(18),q=B.J(D.jt.j(t?0.35:0.4),A.r,1),p=t?D.Mw:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cy,14)],o),m=B.m(10),l=B.J(A.c3.j(0.5),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dC,6)],o)
w=this.c
o=B.E(B.p(u,new B.fH(0.5625,C.if6(w),u),A.ap,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.am2,u,u,u,u),1)
m=D.jt.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.jt,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aI(!1,A.a2,!0,u,B.aO(!1,s,!0,B.p(u,B.x(B.a([o,B.p(u,B.x(B.a([l,A.cS,B.d(w.c,u,2,A.a1,u,u,u,B.l(u,u,t?A.aC:D.bmf,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),A.f,u,u,new B.o(u,u,new B.bH(new B.ay(m,1,A.r,-1),A.a0,A.a0,A.a0),u,u,u,A.n),u,u,u,u,D.akl,u,u,u)],v),A.ak,u,A.e,A.i,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.ai)}}
C.xV.prototype={
a6(){return"NgmyMarriageLayoutKind."+this.b}}
C.nV.prototype={}
C.bkT.prototype={
a_p(d){var w=null
return new B.bM(A.a5,w,w,B.Bx(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
cay(){return this.a_p(1)},
ayn(d){var w=null,v=B.m(8),u=B.J(A.il,A.r,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.afI,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.B(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.J(A.il,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dQ(B.p(v,v,A.f,v,v,new B.o(v,v,B.J(A.il,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.t(-8.36,0))],u),A.m,v,A.b9,A.i,0,v,v),A.au,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),A.am,w.ayn("TAARIFA ZA WANANDOA"),A.am,w.cay(),A.cS,w.a_p(0.9),A.cS,w.a_p(0.7),A.Q,w.ayn("TAMKO LA MAKUBALIANO"),A.fG,w.a_p(1),A.cS,w.a_p(0.95),A.Q,w.ayn("MASHAHIDI"),A.b2,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.i,0,A.p)}}
C.adQ.prototype={
B(d){return B.p5(new C.emT(B.Q(d).ax.a===A.J,d),!0,0.92,0.96,0.5,!1,null)}}
C.afw.prototype={
B(d){var w,v,u,t,s,r=null,q=B.Q(d).ax.a===A.J,p=B.m(18),o=B.m(18),n=B.J(A.az.j(q?0.35:0.4),A.r,1),m=q?D.blM:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cy,14)],l),j=B.m(10),i=B.J(A.az.j(0.5),A.r,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dC,6)],l)
w=this.c
v=C.hba(w.a)
if(v==null)v=A.d.gI(D.S_)
u=B.b1(v.f)
t=B.b1(v.r)
s=x.p
l=B.E(B.p(r,new B.fH(0.5625,new B.an(A.a_,r,A.b3,A.t,B.a([B.bS(0,B.fT(C.hb9(v.d),A.A,r,r,A.ci,A.bX,!0,r,!1,r,r),0,0,0),new B.D(A.al_,new C.bkT(v,u,t,r),r)],s),r),r),A.ap,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.am2,r,r,r,r),1)
j=A.az.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:A1.Mx,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aI(!1,A.a2,!0,r,B.aO(!1,p,!0,B.p(r,B.x(B.a([l,B.p(r,B.x(B.a([i,A.cS,B.d(w.c,r,2,A.a1,r,r,r,B.l(r,r,q?A.aC:D.bef,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.E,r,A.e,A.i,0,A.p),A.f,r,r,new B.o(r,r,new B.bH(new B.ay(j,1,A.r,-1),A.a0,A.a0,A.a0),r,r,r,A.n),r,r,r,r,D.akl,r,r,r)],s),A.ak,r,A.e,A.i,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.ai)}}
C.l5.prototype={
a6(){return"NgmyMarriagePaperStyle."+this.b}}
C.a8o.prototype={}
C.We.prototype={
R(){var w=$.ax()
return new C.aFb(new B.cw(null,x.A),new B.au(A.at,w),new B.au(A.at,w),B.mS(0,null,null),A.d.gI(D.a4K),D.dSr,B.a([],x.L),B.a([],x.gE))}}
C.aFb.prototype={
Z(){var w,v=this
v.a2()
v.w=v.a.c
v.z=new C.zR(C.fN8(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.Y,"","","")
w=x.a
C.fM4().bK(new C.epQ(v),w)
$.ra().ji(0,"assets/images/ngmy_logo.png").bK(new C.epR(v),w).eR(new C.epS())},
q(){var w=this,v=w.e,u=$.ax()
v.T$=u
v.P$=0
v=w.f
v.T$=u
v.P$=0
w.r.q()
w.a1()},
af1(d){var w=null,v=this.c
if(v!=null)v.K(x.q).f.U(B.b3(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Z,w,w,w,w,w,w,w,w,w,w))},
Jg(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Jg=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hX().l2(88,1600,A.eL),$async$Jg)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fl(),$async$Jg)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hzS(m,p),$async$Jg)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bF6(new B.q1(o,1),m),$async$Jg)
case 10:if(r.c!=null)r.m(new C.eps(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ab(k)
r.af1("Could not open that picture. "+B.w(n))
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
return B.b(C.hzS(s,q),$async$Xq)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bF6(new B.q1(r,1),s),$async$Xq)
case 4:if(t.c!=null)t.m(new C.epo(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Xq,v)},
af2(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$af2=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.epz(q))
t=4
q.a.toString
p=C.ijC()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$af2)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.epA(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ab(i)
q.af1(B.w(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.epB(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$af2,v)},
a_u(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$a_u=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.epu(q,i))
t=4
q.a.toString
p=C.ijB()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$a_u)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.epv(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ab(g)
if(q.c!=null)q.m(new C.epw(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.epx(q))
$.aV.x1$.push(new C.epy(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_u,v)},
caO(d){this.m(new C.ept(this,d))},
EA(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$EA=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.epq(q))
t=4
w=7
return B.b($.aV.gmL(),$async$EA)
case 7:w=8
return B.b(B.bP(A.mG,null,x.H),$async$EA)
case 8:k=$.aV.al$.x.h(0,q.d)
p=k==null?null:k.gbd()
if(!(p instanceof B.qb))throw B.W("The page is not ready yet.")
w=9
return B.b(p.m6(1800/p.gY(0).a),$async$EA)
case 9:o=e
w=10
return B.b(o.hx(A.ha),$async$EA)
case 10:n=e
if(n==null)throw B.W("Could not make the picture.")
w=11
return B.b(A8.agX(J.eS(A.dK.gaS(n)),"ngmy_news.png","image/png"),$async$EA)
case 11:m=e
q.af1(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
q.af1(B.w(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.epr(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$EA,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.lg,a2,a2,a2,new C.epH(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bVr,a2,a2,a2,new C.epI(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.ou,a2,a2,a2,a4?a1.gb09():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eI(v,a2,a2,!0,!0,A.BD,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.f43,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eU,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fH(0.7142857142857143,B.eO(A.A,new B.er(new C.b2c(t,s,r,a1.x,a2),a1.d),A.f,A.dz),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,X.tm,a2,a2,a2)
t=a1.as?a2:a1.gcaN()
t=B.a([B.E(B.di(D.bWd,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ce,a2,a2,a2),t,B.bo(D.tT,a2,a2,a2,A.c,A.h0,a2,a2,new B.b8(B.m(14),Q.vD),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bx(B.m(10),B.fT(r,A.A,a2,a2,A.ci,A.bX,!1,48,!1,a2,48),A.ap)
A.d.v(t,B.a([A.as,r,B.aH(a2,a2,a2,a2,D.bSR,a2,a2,a2,a1.as?a2:a1.gbLe(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.i,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,X.tm,a2,a2,a2)
q=B.aM(a2,A.Y,!1,a2,!0,A.t,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aTT("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.aj,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.aa,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.df,!0,A.a4,a2,A.an,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.dlG[o]
p.push(B.mY(a2,D.tT,new B.y(n.a,a2,A.pD,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hc,new C.epJ(a1,n),a2,a2,Q.vD,a2))}p=B.bY(A.bG,p,A.br,a2,6,8)
m=a1.Q
m=B.bY(A.bG,B.a([D.fU4,A.bc,B.ju(a2,a2,a2,D.fDN,a2,new C.epK(a1),m==="en",a2,a2,a2,a2),A.ad,B.ju(a2,a2,a2,D.fDI,a2,new C.epL(a1),m==="sw",a2,a2,a2,a2)],w),A.vw,a2,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,X.tm,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.d5(D.a4K,0,B.dC(10,"count",x.S),j),h=i.$ti,i=new B.bT(i,i.gL(0),h.k("bT<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aSm(g==null?h.a(g):g))}k=B.cl(k,a2,a2,a2,a2,a2,A.aM,!1)
i=B.a([],w)
for(j=B.d5(D.a4K,10,a2,j),h=j.$ti,j=new B.bT(j,j.gL(0),h.k("bT<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aSm(g==null?h.a(g):g))}j=B.cl(i,a2,a2,a2,a2,a2,A.aM,!1)
i=a1.as?a2:a1.gcaQ()
h=B.m(18)
v=B.a([new B.ac(0,A.G,A.bE.j(0.4),A.I,18)],v)
v=B.a([u,A.aB,new B.D(A.ct,s,a2),t,A.aB,new B.D(A.ct,r,a2),q,A.Q,p,A.W,m,A.aB,new B.D(A.ct,l,a2),new B.a4(a2,78,k,a2),A.Q,new B.a4(a2,78,j,a2),A.aQ,B.aA(a2,B.p(A.A,B.B(B.a([D.bW7,A.ad,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fx,a2,a2,a2)],w),A.m,a2,A.e,A.P,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.uL,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a3)],w)
if(a4){u=B.a([A.dT,B.B(B.a([D.dCT,A.as,D.bGp],w),A.m,a2,A.e,A.i,0,a2,a2),A.Q],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.L)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a8:A.a5
q=e?A.b7.j(0.35):D.tT
p=new B.aP(16,16)
d=new B.ay(A.bz,1,A.r,-1)
u.push(new B.bM(r,a2,a2,B.p(a2,new B.y(f.b,a2,D.ftO,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A9.WW,new B.o(q,a2,new B.bH(d,d,d,d),new B.bh(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.ct,A.iq,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.d7a[o]
t.push(B.mY(a2,D.tT,new B.y(a0,a2,A.Kd,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hc,new C.epM(a1,a0),a2,a2,Q.vD,a2))}u.push(B.bY(A.bG,t,A.br,a2,6,8))
u.push(A.W)
t=B.E(B.aM(a2,A.Y,!1,a2,!0,A.t,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aTT("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.aj,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.epN(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.aa,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.df,!0,A.a4,a2,A.an,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gcaP()
u.push(B.B(B.a([t,A.ad,B.I9(A.ze,s,B.nP(a2,A.b7,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.i,0,a2,a2))
u.push(A.aB)
t=a1.as?a2:a1.gb09()
u.push(B.di(A.ou,D.fPu,t,B.bo(A.cT,a2,a2,a2,a2,A.JZ,a2,a2,new B.b8(B.m(16),A.a0),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cl(v,a1.r,a2,A.akL,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.J(E.ke.j(0.5),A.r,1)
v.push(B.bS(0,B.ec(B.as(B.p(a2,B.B(B.a([E.a9k,A.es,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.jo,a2,a2,a2)],w),A.m,a2,A.e,A.P,0,a2,a2),A.f,a2,a2,new B.o(E.Br,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bCB,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c6(a3,A.BD,new B.an(A.a_,a2,A.ab,A.t,v,a2),a2,!1,!1,a2,a2)},
aTT(d){var w=null
return B.br(w,new B.b5(4,B.m(14),A.a0),w,A.eS,w,w,w,w,!0,w,w,w,w,w,w,D.tT,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,Y.Eg,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aSm(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b1(d.f),p=s?A.bE:A.bz
p=B.J(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b1(d.x),t,t,t,5,t,A.kk,t,t,t,t),A.fG],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b1(v).j(0.5),t,t,t,2,t,D.byH,t,t,t,t))
w.push(A.cS)
w.push(new B.D(A.jz,B.d(d.b,t,1,A.a1,t,t,t,B.l(t,t,B.b1(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aA(t,B.p(t,B.x(w,A.m,t,A.b9,A.i,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.iE,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.epp(this,d),t,t,t,t,t,t,!1,A.a3)}}
C.zR.prototype={
bdC(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.zR(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cLq(d){var w=null
return this.bdC(w,w,w,w,w,d,w,w,w,w)},
ah(){var w=this
return B.H(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aDQ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.chw(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aW(g);v.C();){u=v.gS(v)
if(A.a.i(B.w(u)).length!==0)w.push(A.a.i(B.w(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fq(g,B.ag("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(w,new C.chu(),B.T(w).k("N<1,n>")).c_(0,new C.chv())
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
return this.bdC(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gFN(d){return this.f}}
C.tA.prototype={
a6(){return"NewsLayout."+this.b}}
C.BN.prototype={
a6(){return"NewsFrame."+this.b}}
C.lt.prototype={}
C.b2c.prototype={
rG(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b1(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b0b(d,e,f,g){return this.rG(d,e,null,1.25,f,A.bp,g)},
Qh(d,e,f,g,h){return this.rG(d,e,f,1.25,g,A.bp,h)},
ayt(d,e,f,g,h){return this.rG(d,e,null,f,g,A.bp,h)},
ays(d,e,f,g,h){return this.rG(d,e,f,g,0,A.bp,h)},
b0d(d,e,f,g,h){return this.rG(d,e,null,f,0,g,h)},
caU(d,e,f,g,h,i){return this.rG(d,e,f,g,0,h,i)},
ayr(d,e,f,g){return this.rG(d,e,null,f,0,A.bp,g)},
af5(d,e,f){return this.rG(d,e,null,f,0,A.bp,A.cR)},
b0c(d,e,f,g,h){return this.rG(d,e,f,g,0,h,A.cR)},
caT(d,e,f,g){return this.rG(d,e,null,f,0,g,A.cR)},
caS(d,e,f,g){return this.rG(d,e,f,g,0,A.bp,A.cR)},
af6(d,e,f,g,h,i){return this.rG(d,e,f,g,h,A.bp,i)},
b0a(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.iN(new B.eu(d,u,u,A.cN,u,u,u,u,u,u,new B.F(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a4,A.bY,new B.jr(1),u,u,h,u,A.bW,u)
v.o0(g)
if(!v.b.a.c.gaFC())return w
w-=2}return j},
af3(d,e,f,g,h,i,j,k){return this.b0a(d,e,f,g,h,i,j,k,A.bp)},
aAD(d,e,f){var w=null,v=d==null?B.b1(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a4(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.m,w,A.e,A.i,0,A.p)},
aAC(d){return this.aAD(null,!1,d)},
ai0(d,e){return this.aAD(null,d,e)},
csK(d,e){return this.aAD(d,!1,e)},
gb2o(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaWy(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
P1(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.af3(w.gaWy(),u,A.U,d,g,h,i,1.02)
return B.d(w.gaWy(),v,g,A.a1,v,v,v,w.ays(u,t,f,1.02,A.U),e,v,v)},
aWD(d){return this.P1(d,A.K,null,2,78,30)},
aco(d,e,f,g,h){return this.P1(d,e,null,f,g,h)},
c_q(d,e,f,g,h){return this.P1(d,A.K,e,f,g,h)},
c_p(d,e,f){return this.P1(d,A.K,null,e,f,30)},
Se(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bJ
w=v.d.as
return new B.D(A.jy,B.d(s,u,g,A.a1,u,u,u,v.b0c(w,v.b0a(t,w,A.cR,d,g,h,15,1.2,A.cD),f,1.2,A.cD),e,u,u),u)},
b8g(d){return this.Se(d,A.K,null,3,24)},
aC7(d,e,f,g){return this.Se(d,e,null,f,g)},
cAr(d,e,f){return this.Se(d,A.K,e,3,f)},
b8h(d,e){return this.Se(d,e,null,3,24)},
cAp(d,e){return this.Se(d,A.K,null,3,e)},
cAq(d,e,f){return this.Se(d,e,null,3,f)},
as2(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.eY,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Qh("Roboto",12,d==null?B.b1(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.E(B.p(v,v,A.f,B.b1(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b1(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.i,0,v,v)},
NY(){return this.as2(null,!0)},
as1(d){return this.as2(null,d)},
bHa(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bJ
return new B.D(A.i4,new B.a4(d,w,B.d(v,w,2,A.a1,w,w,w,this.caT(this.d.as,13.5,1.2,A.cD),e,w,w),w),w)},
vO(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.V(Date.now(),0,!1),i=m.gb2o(),h=A.o.ao(j.bF(B.c3(B.bC(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.i6W(Math.max(1,B.bC(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.b0b(k,12,1.2,A.U),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.af3(i,v,A.U,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.af3(i.toUpperCase(),v,A.U,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b1(h.x)
h=h.ch?B.b1(h.f):A.c
s=x.p
return B.x(B.a([B.p(l,B.B(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eM,l,l,l,m.af6(v,u*0.84,h,1,1,A.U),l,l,l),1)],s),A.m,l,A.e,A.i,0,l,l),A.f,t,l,l,l,l,l,l,new B.P(18,w,18,w),l,l,l),A.Q,B.B(B.a([B.d(C.bEl(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.iK,A.i,0,l,l),A.am,m.ai0(!0,3)],s),A.m,l,A.e,A.i,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.B(B.a([B.p(l,l,A.f,B.b1(h),l,l,l,u*0.8,l,l,l,l,l,14),A.es,B.E(B.d(i,l,1,A.eM,l,l,l,m.ayr(v,u*0.9,1,A.U),l,l,l),1)],w),A.m,l,A.e,A.i,0,l,l),A.W,B.B(B.a([B.d(C.bEl(j),l,l,l,l,l,l,m.Qh(k,13,B.b1(h),0.6,A.U),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.iK,A.i,0,l,l),A.Q,m.csK(B.b1(h),3)],w),A.m,l,A.e,A.i,0,A.p)
case"logo":r=a0?52:64
w=m.gb2o()
v=B.d("NGMY",l,l,l,l,l,l,m.ayt(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b1(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.B(B.a([v,A.ad,B.eM(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.rG(k,r*0.72,o,1.05,-0.5,A.cD,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.P(t,s,t,s),l,l,l),l),A.b2,new B.dr(1,A.cn,B.d(w.toUpperCase(),l,2,A.a1,l,l,l,m.af6(k,12.5,B.b1(h).j(0.85),1.3,1.2,A.U),A.dV,l,l),l)],n),A.m,l,A.e,A.i,0,l,l),A.Q,B.p(l,l,A.f,B.b1(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.i,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iK,A.i,0,l,l)
t=m.ai0(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.ayr(v,u,1,A.U),A.K,l,l)
q=a0?4:8
return B.x(B.a([w,A.au,t,new B.a4(l,s,l,l),v,new B.a4(l,q,l,l),m.ai0(!0,1.4),A.au,B.d(C.bEl(j).toUpperCase(),l,l,l,l,l,l,f,A.K,l,l),A.au,m.aAC(3)],h),A.m,l,A.e,A.i,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.ayt(v,u,1,3,A.U),A.K,l,l),A.Q,m.ai0(!0,1.2),A.au,B.B(B.a([B.d(C.bEl(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iK,A.i,0,l,l),A.au,m.aAC(3)],h),A.m,l,A.e,A.i,0,A.p)}},
adz(d){return this.vO(d,!1)},
af4(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b1(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.af6("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.P(v,u,v,u),w,w,w)},
caR(d,e){return this.af4(d,null,e,null)},
aYK(d){var w=null,v=new B.V(Date.now(),0,!1),u=A.o.F(B.dg(v),12)===0?12:A.o.F(B.dg(v),12),t=B.b1(this.d.w).j(0.75),s=this.ays("Roboto",15,t,1,A.cA),r=B.X(E.any,t,w,w,w,18),q=A.a.ar(A.oz[B.bL(v)-1],0,3),p=A.a.aX(A.o.u(B.fR(v)),2,"0"),o=B.dg(v)>=12?"PM":"AM"
return B.B(B.a([r,A.ad,B.d(q+" "+B.bW(v)+", "+B.bC(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fZ,w,w,w,1),B.X(d,t,w,w,w,19),A.ad,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.i,0,w,w)},
axa(){return this.aYK(A.mP)},
b5m(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a1,w,w,w,this.af6("Roboto",this.af3(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
aAG(d,e,f){return this.b5m(d,e,f,30)},
aCa(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bJ
return new B.D(A.w_,B.d(v,w,e,A.a1,w,w,w,this.caS("Roboto",f,B.b1(this.d.w).j(0.88),1.35),w,w,w),w)},
b8l(d){return this.aCa(d,3,22)},
cAC(d,e){return this.aCa(d,e,22)},
tY(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fT(r,A.A,s,s,A.ci,A.bX,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.Bk(D.bFs,w,s)
if(v==="sepia")w=new B.Bk(D.bFr,w,s)}else{r=this.d
v=r.w
u=B.b1(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.as(B.X(A.yP,B.b1(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c4(s,new B.o(s,s,s,s,s,new B.c_(A.A,0.95,A.x,s,0,B.a([A.L,A.Yc.j(0.38)],x.O),s,s),A.n),A.bh))
return new B.a4(d,e,new B.an(A.a_,s,A.b3,A.t,v,s),s)},
qI(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.J(B.b1(j),A.r,3)
j=B.J(B.b1(j),A.r,1)
return B.p(k,B.p(k,l.tY(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.ev,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.m8,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.ej9,14)],x.V)
v=l.tY(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eM(A.A,-0.035,B.p(k,B.x(B.a([v,B.E(B.as(B.d(u,k,2,A.a1,k,k,k,l.b0c(j.as,13.5,D.bg_,1.1,A.cD),A.K,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.i,0,A.p),A.f,k,k,new B.o(D.bjQ,k,k,k,w,k,A.n),k,e,k,k,D.bA6,k,k,d),k)
case 3:w=B.m(30)
j=B.J(B.b1(j.x),A.r,5)
return B.p(k,B.bx(B.m(25),l.tY(d-10,e-10),A.ap),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.J(B.b1(j.x),A.r,6)
j=B.b1(j.f)
v=t-10
return new B.a4(d,e,B.as(B.p(k,B.hV(l.tY(v,v),A.ap),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.m8,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.eiQ,10)],x.V)
return B.eM(A.A,0.025,new B.a4(d,e,new B.an(A.a_,k,A.ab,A.f,B.a([B.bS(0,B.p(k,l.tY(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.rG,k,k,k),0,0,0),B.ap(k,B.eM(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ap(-10,B.eM(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b1(j.x)
return new B.a4(d,e,B.b4(B.nJ(l.tY(d,e),A.ap,D.hl5),new C.bdS(j,k),k,k,A.aw),k)
case 7:j=x.p
w=B.a([l.tY(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bf(u));++n){m=new B.aP(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bO,k,k,new B.bh(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cN(0,q,0,p,k,k,new B.ca(A.aM,A.qG,A.i,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.a_,k,A.b3,A.t,w,k),A.f,A.ei,k,k,k,e,k,k,D.bEG,k,k,d)
case 8:w=d/2
v=B.xe(A.fE,new B.aP(w,w))
j=B.J(B.b1(j.x),A.r,5)
w-=5
return B.p(k,B.bx(B.xe(A.hG,new B.aP(w,w)),l.tY(d-10,e-10),A.ap),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.h_,22)],x.V)
return B.p(k,l.tY(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bT,k,k,d)
case 10:return new B.a4(d,e,B.nJ(l.tY(d,e),A.ap,D.hsP),k)
case 0:j=B.J(B.b1(j.w),A.r,2.4)
return B.p(k,l.tY(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.ev,k,k,d)}},
aPW(d,e){return this.d.e===D.SD?A.bJ:this.bHa(d,e)},
WX(d){return this.aPW(d,A.K)},
gaBr(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
aBq(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
if(l.length===0)l=A.a.i(m.w).length!==0?"":"NGMY NOTES"
w=A.a.i(m.y)
v=o.d
u=B.J(B.b1(v.w),A.r,1.6)
t=v.x
s=B.b1(t)
s=s.j(v.ch?0.14:0.07)
r=x.p
q=B.a([],r)
m=A.a.i(m.w)
if(m.length!==0&&w.length===0)q.push(B.E(B.as(B.d("\u201c"+m+"\u201d",n,7,A.a1,n,n,n,o.b0d(v.Q,19,1.15,A.cD,A.U),A.K,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a1,n,n,n,o.Qh("Roboto",12.5,B.b1(t),1.2,A.u),n,n,n))
if(p)r.push(A.au)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a1,n,n,n,o.af5(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jj(B.x(q,A.E,n,A.e,A.i,0,A.p),A.t,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bg,n,n,d)},
gcj9(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
aa4(d,e,f,g){return B.cu(new C.chx(this,e,d,f,g))},
aa3(d){return this.aa4(d,22,!0,18)},
X9(d,e){return this.aa4(d,22,!0,e)},
aQY(d,e,f){return this.aa4(d,22,e,f)},
bJa(d,e,f){return this.aa4(d,e,!0,f)},
bbj(d,e,f,g){return B.cu(new C.chy(this,e,d,g,!0,f))},
chX(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.adz(824),A.aB,k.aWD(824),k.b8g(824),A.Q,k.NY(),A.ae,B.as(k.qI(824,360),j,j,j),k.WX(824),A.ae,B.E(k.aa3(3),1)],x.p),A.ak,j,A.e,A.i,0,A.p)
case 1:w=x.p
return B.x(B.a([k.adz(824),A.aQ,new B.a4(j,350,B.B(B.a([new B.a4(440,j,B.x(B.a([k.aco(440,A.bj,3,62,26),k.aC7(440,A.bj,2,20),A.b2,k.as2(B.b1(h.x),!1)],w),A.E,j,A.e,A.i,0,A.p),j),A.K_,B.x(B.a([k.qI(362,310),k.WX(362)],w),A.m,j,A.e,A.i,0,A.p)],w),A.E,j,A.e,A.i,0,j,j),j),A.W,k.aAC(2),A.ae,B.E(k.aa3(3),1)],w),A.ak,j,A.e,A.i,0,A.p)
case 2:w=k.vO(824,!0)
v=B.b1(h.x)
u=h.ch
t=x.p
s=B.a([k.c_q(788,u?B.b1(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cAr(788,u?B.b1(h.f):A.c,22))
v=B.p(j,B.x(s,A.m,j,A.e,A.i,0,A.p),A.f,v,j,j,j,j,j,j,A.BY,j,j,j)
u=B.a([B.as(k.qI(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.SD){h=A.w.j(0.65)
u.push(B.ap(0,B.p(j,B.d(s,j,2,A.a1,j,j,j,k.ays(i,14,A.c,1.15,A.U),j,j,j),A.f,h,j,j,j,j,j,j,A.lF,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.ae,v,A.ae,new B.an(A.a_,j,A.ab,A.t,u,j),A.Q,k.NY(),A.W,B.E(k.X9(2,21),1)],t),A.ak,j,A.e,A.i,0,A.p)
case 3:h=k.vO(824,!0)
w=k.qI(824,560)
v=B.a([A.L,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.ae,new B.an(A.b6,j,A.ab,A.t,B.a([w,B.ap(0,B.p(j,k.P1(780,A.bj,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a9(A.b0,A.b6,A.x,v,j,j),A.n),j,j,j,j,D.bCU,j,j,j),j,j,0,0,j,j)],u),j),k.b8h(824,A.bj),A.Q,k.NY(),A.W,B.E(k.aa3(3),1)],u),A.ak,j,A.e,A.i,0,A.p)
case 4:h=x.p
return B.x(B.a([k.adz(824),A.aB,k.aWD(824),k.b8g(824),A.Q,k.NY(),A.ae,B.E(k.bbj(3,300,B.x(B.a([k.qI(300,300),k.WX(300)],h),A.m,j,A.e,A.i,0,A.p),360),1)],h),A.ak,j,A.e,A.i,0,A.p)
case 5:w=k.vO(824,!0)
v=x.p
u=B.x(B.a([k.aco(440,A.bj,3,62,26),k.aC7(440,A.bj,2,20),A.b2,k.as1(!1)],v),A.E,j,A.e,A.i,0,A.p)
return B.x(B.a([w,A.bx,new B.a4(j,400,B.B(B.a([new B.a4(440,j,u,j),A.aS7,new B.D(A.i4,k.qI(364,h.e===D.SD?400:330),j)],v),A.E,j,A.e,A.i,0,j,j),j),A.aB,B.E(k.X9(2,21),1)],v),A.ak,j,A.e,A.i,0,A.p)
case 6:return B.x(B.a([k.adz(824),A.ae,k.c_p(824,2,70),k.cAp(824,21),A.Q,k.NY(),A.ae,B.E(k.bbj(3,340,B.as(k.qI(340,340),j,j,j),350),1)],x.p),A.ak,j,A.e,A.i,0,A.p)
case 7:w=k.vO(824,!0)
v=B.b1(h.x)
u=Date.now()
u=C.bEl(new B.V(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Qh(i,13,h.ch?B.b1(h.f):A.c,1.2,A.u),A.K,j,j),A.f,v,j,j,j,j,j,j,A.bg,j,j,j),A.aB],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.b0d(h.Q,24,1.15,A.cD,A.U),j,j,j))
v.push(A.b2)
if(k.gaBr())v.push(k.aBq(230,250))
return B.x(B.a([w,A.aB,B.E(B.B(B.a([new B.a4(230,j,B.x(v,A.ak,j,A.e,A.i,0,A.p),j),B.p(j,j,A.f,B.b1(h.w),j,j,j,j,j,A.akj,j,j,j,1.2),new B.a4(570,j,B.x(B.a([k.aco(570,A.bj,3,62,28),k.cAq(570,A.bj,20),A.Q,k.as1(!1),A.Q,B.as(k.qI(570,330),j,j,j),k.WX(570),A.W,B.E(k.aQY(2,!1,17),1)],t),A.ak,j,A.e,A.i,0,A.p),j)],t),A.E,j,A.e,A.i,0,j,j),1)],t),A.ak,j,A.e,A.i,0,A.p)
case 8:w=k.vO(824,!0)
v=h.ch
u=v?B.b1(h.x):B.b1(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Qh(i,13,v?A.w:B.b1(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.ae,B.p(j,B.x(B.a([t,A.am,k.P1(788,A.bj,v?A.w:B.b1(h.f),2,72,30)],s),A.E,j,A.e,A.i,0,A.p),A.f,u,j,j,j,j,j,j,D.bBb,j,j,j),k.b8h(824,A.bj),A.W,B.as(k.qI(824,310),j,j,j),k.WX(824),A.Q,k.NY(),A.W,B.E(k.aa3(3),1)],s),A.ak,j,A.e,A.i,0,A.p)
case 10:w=x.p
return B.x(B.a([k.vO(824,!0),A.aQ,new B.an(A.a_,j,A.ab,A.t,B.a([k.qI(824,430),B.ap(18,k.caR(k.c.b,17),j,j,18,j,j,j)],w),j),A.bx,k.aAG(824,3,66),k.b8l(824),A.ae,B.p(j,j,A.f,B.b1(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ae,k.axa(),A.aB,B.E(k.X9(2,18),1)],w),A.ak,j,A.e,A.i,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.vO(824,!0),A.bx,new B.a4(j,500,B.B(B.a([new B.a4(410,j,B.x(B.a([k.af4(k.c.b,B.b1(h).j(0.14),15,B.b1(h)),A.aQ,k.b5m(410,4,58,28),k.aCa(410,6,20),A.b2],w),A.E,j,A.e,A.i,0,A.p),j),V.aS8,k.qI(390,500)],w),A.E,j,A.e,A.i,0,j,j),j),A.aB,k.axa(),A.aQ,B.E(k.X9(2,18),1)],w),A.ak,j,A.e,A.i,0,A.p)
case 12:w=k.vO(824,!0)
v=k.qI(824,420)
u=B.hKi(-0.25)
t=B.b1(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.I,10)],x.V)
r=x.p
return B.x(B.a([w,A.aQ,new B.an(A.a_,j,A.ab,A.t,B.a([v,B.ap(22,B.fy(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.caU(i,30,A.c,1,A.cD,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bD9,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bx,k.aAG(824,3,62),k.b8l(824),A.ae,B.p(j,j,A.f,B.b1(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ae,k.aYK(A.lK),A.aB,B.E(k.X9(2,18),1)],r),A.ak,j,A.e,A.i,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vO(824,!0)
u=h.w
t=x.p
w=B.a([k.qI(824,380),B.ap(j,k.af4(w.b,B.b1(u).j(0.85),15,B.b1(h.f)),j,j,16,j,16,j)],t)
s=k.aAG(824,2,60)
r=k.cAC(824,2)
p=k.axa()
o=B.E(k.aQY(2,!1,18),1)
n=B.J(B.b1(u).j(0.18),A.r,1)
m=B.m(18)
h=h.x
l=B.b1(h).j(0.05)
return B.x(B.a([v,A.aQ,new B.an(A.a_,j,A.ab,A.t,w,j),A.aQ,s,r,A.W,p,A.aB,o,A.ae,B.p(j,B.B(B.a([B.bx(B.m(14),k.tY(150,104),A.ap),A.oL,B.E(B.x(B.a([k.af4("RELATED",B.b1(h).j(0.14),12,B.b1(h)),A.Q,B.d(q,j,2,A.a1,j,j,j,k.ayr(i,19,1.15,A.H),j,j,j)],t),A.E,j,A.e,A.P,0,A.p),1),B.X(A.eE,B.b1(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.i,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bg,j,j,j)],t),A.ak,j,A.e,A.i,0,A.p)
case 9:return B.x(B.a([k.vO(824,!0),A.bx,k.aco(824,A.bj,3,62,30),k.aC7(824,A.bj,2,22),A.W,k.as1(!1),A.W,B.as(k.qI(824,330),j,j,j),k.aPW(824,A.bj),A.aQ,B.E(k.bJa(2,40,21),1)],x.p),A.ak,j,A.e,A.i,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bS(0,B.c4(s,new B.o(s,s,s,s,s,new B.a9(A.ay,A.aE,A.x,B.a([B.b1(p),B.b1(q.r)],x.O),s,s),A.n),A.bh),0,0,0)],o)
if(q.ax)n.push(B.bS(0,B.b4(s,s,s,new C.ban(B.b1(q.w),s),A.aw),0,0,0))
w=q.w
n.push(new B.D(D.bDG,B.x(B.a([B.E(t.chX(),1),A.Q,B.p(s,s,A.f,B.b1(w),s,s,s,1.4,s,s,s,s,s,s),A.fG,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b0b(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Qh(r,11,B.b1(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.iK,A.i,0,s,s)],o),A.ak,s,A.e,A.i,0,A.p),s))
v=B.b1(w)
n.push(B.bS(0,B.dZ(B.b4(s,s,s,new C.btg(v.j(q.ch?0.07:0.06),s),A.aw),!0,s),0,0,0))
p=B.b1(p).j(0.75)
v=B.J(B.b1(w).j(0.5),A.r,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hV(B.fT(q,A.A,s,s,A.ci,A.bX,!1,30,!1,s,30),A.ap))
else o.push(B.X(A.mP,B.b1(w),s,s,s,28))
o.push(A.ad)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.ayt(r,15,1,1.6,A.u),s,s,s))
n.push(B.ap(52,B.dZ(B.db(B.p(s,B.B(o,A.m,s,A.e,A.P,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bEP,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a4(900,1260,B.jj(new B.an(A.a_,s,A.ab,A.t,n,s),A.t,s),s)}}
C.bdT.prototype={
jo(d){return C.hoQ(d)},
k0(d){return!1}}
C.bdS.prototype={
a3(d,e){var w,v=C.hoQ(e)
$.S()
w=B.I()
w.r=this.b.gp(0)
w.b=A.a9
w.c=6
return d.aH(v,w)},
av(d){return!d.b.A(0,this.b)}}
C.bvM.prototype={
jo(d){var w,v,u,t,s,r,q,p,o=new B.e4()
o.cY(3)
w=$.S()
v=B.a([],x.v)
u=new B.aF(w.r,A.ag,null,null,v)
u.D(new B.aY(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.aq(s,o.ag()*14)
v.push(w)
r=u.f
if(r!=null)w.bx(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.D(new B.aq(t,8))
w=d.b
r=w-8
u.D(new B.aq(t,r))
for(;t>0;t-=14){q=new B.aq(t,w-o.ag()*14)
v.push(q)
p=u.f
if(p!=null)q.bx(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.D(new B.aq(0,r))
u.D(new B.bt())
return u},
k0(d){return!1}}
C.ban.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.e4()
k.cY(7)
$.S()
w=B.I()
for(v=this.b,u=e.a,t=e.b,s=d.a,r=0;r<700;++r){w.r=v.j(0.03+k.ag()*0.07).gp(0)
q=k.ag()
p=k.ag()
o=k.ag()
n=w.G()
s.drawCircle(q*u,p*t,0.4+o*1.4,n)
n.delete()}for(v=x.O,r=0;r<5;++r){q=k.ag()*u
p=k.ag()*t
m=50+k.ag()*90
w.sam(new B.c_(A.A,0.5,A.x,l,0,B.a([A.XH.j(0.13),A.L],v),l,l).aA(0,B.bX(new B.t(q,p),m)))
n=w.G()
s.drawCircle(q,p,m,n)
n.delete()}w.sam(l)},
av(d){return!1}}
C.btg.prototype={
a3(d,e){var w,v,u=null,t=e.a,s=B.fx(u,u,u,u,B.cS(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a4,A.bY,u,A.dA,A.bW)
s.el()
w=d.a
J.bl(w.save())
w.translate(t/2,e.b*0.52)
d.il(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a3(d,new B.t(-v/2,-t.gbb(t)/2))
w.restore()},
av(d){return!d.b.A(0,this.b)}}
C.Wf.prototype={
R(){return new C.aFe()}}
C.aFe.prototype={
Z(){var w=this
w.a2()
B.fDw(w.a.c,null).bK(new C.eqC(),x.g7).bK(new C.eqD(w),x.a)
w.a.toString},
gaOK(){var w=D.ayc[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gayu(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaOK()
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
break}r.m(new C.eqp(r))
t=4
q=r.gayu()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.S()
n=new B.p2()
m=B.z8(n,null)
i=B.I()
i.Q=A.h8
m.oD(g,q,new B.a3(0,0,0+p,0+o),i)
w=7
return B.b(n.nj().xd(J.hee(p),J.hee(o)),$async$a_w)
case 7:l=e
w=8
return B.b(l.hx(A.ha),$async$a_w)
case 8:k=e
j=r.c
if(j!=null){j=B.a5(j,!1)
i=k
i.toString
j.O(J.eS(J.vJ(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.eqq(r))
r.c.K(x.q).f.U(D.fdf)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_w,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.lg,s,s,s,new C.eqw(d),s,s,s,s,s,s),p=x.p
q=B.eI(B.a([B.bN(!1,D.fS7,s,s,!0,s,s,s,t.y||r==null?s:t.gcaV(),s,s)],p),s,s,!0,!0,A.BD,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fW9,s,s,s,1,s,!0)
if(r==null)p=A.lY
else{w=B.E(new B.D(A.bQ,B.as(new B.fH(t.gaOK(),B.cu(new C.eqx(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iE,B.ju(s,s,s,new B.y(D.ayc[u].a,s,A.a9Y,s,s,s,s,s,s,s,s,s),s,new C.eqy(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.p(s,B.bn(!0,B.x(B.a([new B.a4(s,40,B.cl(v,s,s,s,s,s,A.aM,!1),s),B.B(B.a([D.bWT,B.E(B.kR(s,s,s,6,1,new C.eqz(t),t.f),1),D.bWu],p),A.m,s,A.e,A.i,0,s,s),D.fPn,A.am,B.bN(!1,D.fP5,s,s,!0,s,s,s,new C.eqA(t,d),s,s)],p),A.m,s,A.e,A.P,0,A.p),!0,!1,A.af,!0,!1),A.f,D.Yr,s,s,s,s,s,s,D.bAx,s,s,s)],p),A.m,s,A.e,A.i,0,A.p)}return B.c6(q,A.BD,p,s,!1,!1,s,s)}}
C.bdp.prototype={
a3(d,e){var w
$.S()
w=B.I()
w.Q=A.ci
return d.oD(this.b,this.c,new B.a3(0,0,0+e.a,0+e.b),w)},
av(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a0q.prototype={
R(){var w=$.ax(),v=x.A
return new C.aGD(new B.au(A.at,w),new B.au(new B.ba("NGMY",A.b4,A.aO),w),new B.cw(null,v),new B.cw(null,v),A.d.gI(D.a5k),"quote"+1000*Date.now(),B.a([],x.t),B.aX(x.S),A.K)}}
C.oL.prototype={}
C.aGD.prototype={
gaWL(){var w,v,u=this
if(u.p1)w=new B.vY(1,u.p2,0.9,u.p3).jU().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.E(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
Z(){var w=this
w.a2()
w.a.toString
w.p4=null
$.aV.x1$.push(new C.f_s(w))},
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
p=J.eS(J.vJ(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bF6(new B.q1(p,1),o),$async$Z8)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eZk(r,p))
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
Qk(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qk=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hX().l2(92,1800,A.eL),$async$Qk)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fl(),$async$Qk)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bF6(new B.q1(p,1),n),$async$Qk)
case 9:if(r.c==null){w=1
break}r.m(new C.eZI(r,p))
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
return B.i($async$Qk,v)},
b4I(){var w=this
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
aYu(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bBL(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.doO)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bBL(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bBL(C.h94(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bBL(C.h94(1-a0*0.5,n,n,n),w)}return a1?C.bBL(C.h94(-1,255,255,255),w):w},
aCg(){var w,v,u=B.ag("\\S+",!0,!1,!1,!1).lc(0,this.d.a.a),t=B.C(u,B.a7(u).k("M.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.xc(u,v,w)
this.dx.pq(new C.eZS(t),!0)
return t},
b7f(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aCg()
w=C.ihh(e.d.a.a,e.db)
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
return C.idJ(d,k,v,a0,j,e.gaWL(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cyf(){return this.b7f(null)},
Dr(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$Dr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aV.gmL(),$async$Dr)
case 3:w=4
return B.b(B.bP(A.eR,null,x.H),$async$Dr)
case 4:w=5
return B.b($.aV.gmL(),$async$Dr)
case 5:s=$.aV.al$.x.h(0,t.r)
r=s==null?null:s.gbd()
if(!(r instanceof B.qb)){u=null
w=1
break}w=7
return B.b(r.m6(1080/r.gY(0).a),$async$Dr)
case 7:w=6
return B.b(e.hx(A.ha),$async$Dr)
case 6:q=e
u=q==null?null:J.eS(A.dK.gaS(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Dr,v)},
aaX(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aaX=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eZ3(q))
t=4
w=7
return B.b(q.Dr(),$async$aaX)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cJ.gcu().aO(p)
n=C.C0(null,null,null,null,D.oF,6,!1,null,null,null,null,null,C.cF(),null,!1,null,"NGMY Quote",null,null,B.a([q.b7f(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a5(l,!1).O(n)
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
if(q.c!=null)q.m(new C.eZ4(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aaX,v)},
AF(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$AF=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eZ1(q))
t=4
w=7
return B.b($.aV.gmL(),$async$AF)
case 7:w=8
return B.b(B.bP(A.nq,null,x.H),$async$AF)
case 8:w=9
return B.b($.aV.gmL(),$async$AF)
case 9:k=$.aV.al$.x.h(0,q.f)
p=k==null?null:k.gbd()
if(!(p instanceof B.qb))throw B.W("The picture is not ready yet.")
w=10
return B.b(p.m6(1080/p.gY(0).a),$async$AF)
case 10:o=e
w=11
return B.b(o.hx(A.ha),$async$AF)
case 11:n=e
if(n==null)throw B.W("Could not make the picture.")
w=12
return B.b(A8.agX(J.eS(A.dK.gaS(n)),"ngmy_quote.png","image/png"),$async$AF)
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
if(q.c!=null)q.m(new C.eZ2(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AF,v)},
cl4(){var w=this.p4
w.toString
return B.cu(new C.eZB(this,w))},
b0k(d,e){var w=null
return B.br(w,w,w,w,w,D.fo3,w,w,!0,new B.b5(4,B.m(16),Q.vD),w,w,w,w,w,D.tT,!0,w,w,w,w,new B.b5(4,B.m(16),D.b32),w,w,w,w,w,w,w,w,Ad.Eo,e,w,w,w,w,w,w,w,D.ftE,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
ya(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b7,w,w,w,15),A.bm],v))
u.push(B.d(d,w,w,w,w,w,w,D.aUO,w,w,w))
return new B.D(H.ak9,B.B(u,A.m,w,A.e,A.i,0,w,w),w)},
b0j(d,e){var w=null,v=B.m(18),u=B.J(A.bz,A.r,1)
return B.p(w,B.aI(!1,A.a2,!0,w,d,A.f,w,0,w,w,w,w,w,A.jZ),A.f,w,w,new B.o(D.tT,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vU(d){return this.b0j(d,A.bD)},
oo(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.uL:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.J(f?A.L:A.bz,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jP,r,r,r,16),A.bm],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.jP,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aA(r,B.cY(r,B.B(s,A.m,r,A.e,A.P,0,r,r),r,r,A.b5,new B.o(w,r,u,v,r,p,A.n),A.h4,r,r,r,r,A.Gp,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a3)},
ah_(d,e,f){return this.oo(d,null,e,f)},
ayy(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b7.j(0.28):A.c.j(0.05),t=g?A.eG:A.bz,s=x.p
v=B.a([B.cY(w,d,w,w,A.b5,new B.o(u,w,B.J(t,A.r,g?2:1),v,w,w,A.n),A.h4,w,e,w,w,new B.P(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aC
A.d.v(v,B.a([A.au,B.d(f,w,1,A.a1,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aA(w,new B.a4(j,w,B.x(v,A.m,w,A.e,A.P,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a3)},
b0n(d,e,f,g,h,i){return this.ayy(d,e,f,g,h,5,i)},
kt(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,E.aTB,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aA(u,D.ens,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eZO(this,h,i),u,u,u,u,u,u,!1,A.a3))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aTQ,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.a_Y,u,u,u))
s=B.B(s,A.m,u,A.e,A.i,0,u,u)
w=this.c
w.toString
w=B.awg(w).cMN(A.b7,A.bz,A.b7.j(0.2),A.c,D.f3k,4)
return new B.D(A.yj,B.x(B.a([s,B.aax(B.kR(u,u,u,g,f,new C.eZP(this,h),A.k.E(e,f,g)),w)],t),A.m,u,A.e,A.i,0,A.p),u)},
aj_(d,e,f,g,h,i){return this.kt(d,e,f,g,h,null,i)},
ajp(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.L)(f),++v){u=f[v]
t=u==null
s=t?A.dr:B.b1(u)
r=d==u
q=r?A.c:A.aX
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bPM:o
n.push(B.aA(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bH(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eZR(this,e,u),o,o,o,o,o,o,!1,A.a3))}return B.bY(A.bG,n,A.br,o,10,10)},
bNi(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a5k
else{v=x.a8
w=B.C(new B.Z(D.a5k,new C.eYU(o),v),v.k("M.E"))}v=B.aM(n,A.Y,!1,n,!0,A.t,n,B.aN(),o.d,n,n,n,n,n,2,o.b0k("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eYV(o),n,n,n,!1,n,n,!1,n,!0,n,A.aa,n,n,n,n,n,n,n,n,n,n,n,A.aag,!0,A.a4,n,A.an,n,n,n,n)
u=B.aM(n,A.Y,!1,n,!0,A.t,n,B.aN(),o.e,n,n,n,n,n,2,o.b0k("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eYW(o),n,n,n,!1,n,n,!1,n,!0,n,A.aa,n,n,n,n,n,n,n,n,n,n,n,A.df,!0,A.a4,n,A.an,n,n,n,n)
t=o.ya("DESIGNS",A.ut)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cZ6[q]
r.push(new B.D(A.iE,o.ah_(p,o.x===p,new C.eYX(o,p)),n))}return B.x(B.a([v,A.W,u,t,B.ch(B.B(r,A.m,n,A.e,A.i,0,n,n),A.t,n,A.y,n,n,n,n,A.aM),A.ae,new B.a4(n,118,B.hR(n,new C.eYY(o,w),w.length,n,n,A.aM,new C.eYZ(),!1),n),A.Q,o.b0j(B.x(B.a([B.iM(A.b7,n,n,A.af,!0,new C.eZ_(o),n,D.fGe,n,D.fCq,o.k3),B.iM(A.b7,n,n,A.af,!0,new C.eZ0(o),n,n,n,D.fzB,o.k2)],s),A.m,n,A.e,A.i,0,A.p),A.akK)],s),A.E,n,A.e,A.i,0,A.p)},
cH2(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aCg()
if(a7.length===0)return a5.vU(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.Kn,a6,a6,a6))
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
l=m.length!==0&&A.d.d0(m,new C.f_h(a5,m))?a5.db[A.d.gI(m)]:a6
k=new C.f_o(a5)
j=new C.f_q()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.Kn,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aP(11,11)
f=u.t(0,h)?A.b7.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.eG:A.bz
d=new B.ay(e,u.t(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.ar(w,a0,a0+e[0].length)
a0=B.ag("[*~^]",!0,!1,!1,!1)
e=B.aL(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a7
o.push(B.aA(a6,B.p(a6,new B.y(e,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bH(d,d,d,d),new B.bh(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.NQ,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.f_i(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a3))}o=a5.vU(B.bY(A.bG,o,A.vw,a6,6,6))
i=B.a([a5.oo("All words",K.apa,!1,new C.f_j(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.ah_("Sentence "+a3,!1,new C.f_k(a5,a7,v,a2)))
a2=a3}}i.push(a5.ah_("Clear picks",!1,new C.f_l(a5)))
i=B.bY(A.bG,i,A.br,a6,8,8)
g=a5.ya("SIZE OF THE PICKED WORDS",D.aoA)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.duU[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.f_m(e,k)
f.push(a5.ah_(a0.b,l===a4,e))}return B.x(B.a([q,A.W,o,A.W,i,g,B.bY(A.bG,f,A.br,a6,8,8),A.W,a5.oo("Make every word normal",A.kN,!1,new C.f_n(a5))],p),A.E,a6,A.e,A.i,0,A.p)},
cC7(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.bG0,B.d(A.d.fY(D.aA0,new C.f_0(q)).b,p,p,p,p,p,p,D.fmr,p,p,p)],o),A.m,p,A.e,A.i,0,p,p),m=B.cu(new C.f_1(q)),l=q.ya("HIGHLIGHT BEHIND THE WORDS",A.a1U),k=q.p1?-1:q.k4
k=q.ajp(k,new C.f_2(q),D.d9j)
w=q.p1
v=w?A.c:A.aX
n=B.a([n,A.W,m,l,B.bY(A.bG,B.a([k,B.aA(p,B.p(p,D.bSL,A.f,p,p,new B.o(p,p,B.J(v,A.r,w?3:1),p,p,D.ffS,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f_5(q),p,p,p,p,p,p,!1,A.a3)],o),A.vw,p,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.Kn,p,p,p)],o)
if(q.gaWL()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.aj_("Colour",l,0,360,new C.f_6(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.aj_("Shade",k,0.15,0.9,new C.f_7(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.kt("Strength",l,0.15,1,new C.f_8(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.W,q.vU(B.x(m,A.m,p,A.e,A.i,0,A.p))],o))}n.push(q.ya("LOOK",A.wx))
m=B.a([q.oo("Bold",I.aoy,q.fy,new C.f_9(q)),q.oo("Italic",I.aoz,q.go,new C.f_a(q))],o)
for(u=0;u<3;++u){l={}
k=D.d_j[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.uL:p
w=w?p:A.c.j(0.07)
s=new B.aP(14,14)
r=new B.ay(q.id===l.a?A.L:A.bz,1,A.r,-1)
m.push(B.aA(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bH(r,r,r,r),new B.bh(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f_b(l,q),p,p,p,p,p,p,!1,A.a3))}n.push(B.bY(A.bG,m,A.vw,p,8,8))
n.push(q.ya("COLOUR",A.ma))
n.push(q.ajp(q.fx,new C.f_c(q),D.dl6))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.Kn,p,p,p))
n.push(q.ya("SIZE AND PLACE",A.Ho))
m=q.fr
m=q.kt("Text size",m,0.5,1.6,new C.f_3(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vU(B.x(B.a([m,q.kt("Up / down",l,0.12,0.5,new C.f_4(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.i,0,A.p)))
return B.x(n,A.E,p,A.e,A.i,0,A.p)},
cl5(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.J(A.b7.j(0.6),A.r,1.6)
u=B.a([A.b7.j(0.18),A.bE.j(0.12)],x.O)
return B.aA(p,B.p(p,B.x(B.a([B.p(p,D.bYm,A.f,p,p,D.b6_,p,62,p,p,p,p,p,62),A.aB,D.fDG,A.am,D.fIt],x.p),A.m,p,A.e,A.i,0,A.p),A.f,p,p,new B.o(D.tT,p,v,w,p,new B.a9(A.a5,A.a8,A.x,u,p,p),A.n),p,p,p,p,D.bBL,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gb0m(),p,p,p,p,p,p,!1,A.a3)}w=x.p
v=B.B(B.a([B.bx(B.m(12),new B.a4(46,62,B.fT(o,A.A,120,p,A.ci,A.bX,!1,p,!1,p,p),p),A.ap),A.bc,B.E(B.x(B.a([D.fDc,A.Q,B.bY(A.bG,B.a([q.oo("Change",A.jE,!1,q.gb0m()),q.oo("Remove",A.eb,!1,new C.eZF(q))],w),A.br,p,6,6)],w),A.E,p,A.e,A.i,0,A.p),1)],w),A.m,p,A.e,A.i,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.dhk[t]
u.push(q.oo(s.b,s.a,q.at===t,new C.eZG(q,t)))}u=B.bY(A.bG,u,A.br,p,8,8)
r=q.at
A:{if(0===r){s=q.c3u(o)
break A}if(1===r){s=q.c2p()
break A}if(2===r){s=q.bJ9()
break A}if(3===r){s=q.bPy()
break A}s=q.bLf()
break A}return B.x(B.a([v,A.ae,u,A.aB,s,A.W,new B.bM(A.a5,p,p,q.oo("Reset the whole picture",A.kN,!1,new C.eZH(q)),p)],w),A.E,p,A.e,A.i,0,A.p)},
c3u(d){var w=this,v=x.p
return B.x(B.a([B.bY(A.bG,B.a([w.oo("Auto enhance",E.a1x,!1,new C.eZx(w)),w.oo("Make words easy to read",A.pj,!1,new C.eZy(w))],v),A.br,null,8,8),A.aB,B.cu(new C.eZz(w,d))],v),A.E,null,A.e,A.i,0,A.p)},
c2p(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kt("Exposure",n,-1.5,1.5,new C.eZb(o),0,A.k.ac(n,1))
w=o.RG
w=o.kt("Brightness",w,-0.5,0.5,new C.eZc(o),0,""+A.k.V(w*100))
v=o.rx
v=o.kt("Contrast",v,0.4,2,new C.eZd(o),1,""+A.k.V(v*100))
u=o.xr
u=o.kt("Fade",u,0,1,new C.eZe(o),0,""+A.k.V(u*100))
t=o.aF
t=o.kt("Spotlight",t,0,1,new C.eZf(o),0,""+A.k.V(t*100))
s=o.a_
s=o.kt("Darken",s,0,0.85,new C.eZg(o),0,""+A.k.V(s*100))
r=o.b8
r=o.kt("Vignette",r,0,0.9,new C.eZh(o),0,""+A.k.V(r*100))
q=o.aC
q=o.kt("Shade behind words",q,0,0.85,new C.eZi(o),0,""+A.k.V(q*100))
p=o.aN
return o.vU(B.x(B.a([n,w,v,u,t,s,r,q,o.kt("Shade top & bottom",p,0,0.85,new C.eZj(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.i,0,A.p))},
bJ9(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kt("Colour strength",q,0,2.2,new C.eYx(s),1,""+A.k.V(q*100))
w=s.to
w=s.kt("Warmth",w,-1,1,new C.eYy(s),0,""+A.k.V(w*100))
v=s.x1
v=s.kt("Tint",v,-1,1,new C.eYz(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vU(B.x(B.a([q,w,v,s.kt("Shift colours",u,-180,180,new C.eYA(s),0,""+A.k.V(u)+"\xb0"),new B.bM(A.a5,r,r,s.oo("Negative",D.bNK,s.y1,new C.eYB(s)),r)],t),A.m,r,A.e,A.i,0,A.p))
v=s.ya("COLOUR WASH",A.OM)
w=s.b4
q=B.a([null],x.Z)
A.d.v(q,D.ayB)
t=B.a([u,v,s.ajp(w,new C.eYC(s),q),A.Q],t)
if(s.b4!=null){q=s.b2
t.push(s.vU(s.aj_("Wash strength",q,0,0.9,new C.eYD(s),""+A.k.V(q*100))))}return B.x(t,A.E,r,A.e,A.i,0,A.p)},
bPy(){var w,v,u,t,s,r=this,q=r.y2
q=r.kt("Blur",q,0,24,new C.eZ5(r),0,A.o.u(A.k.V(q)))
w=r.bj
w=r.kt("Soft focus",w,0,1,new C.eZ6(r),0,""+A.k.V(w*100))
v=r.aB
u=x.p
v=r.vU(B.x(B.a([q,w,r.kt("Film grain",v,0,1,new C.eZ7(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.i,0,A.p))
w=r.ya("LIGHT LEAK",D.bNs)
q=r.be
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.d5(D.ayB,0,B.dC(8,"count",s),s))
u=B.a([v,w,r.ajp(q,new C.eZ8(r),t),A.Q],u)
if(r.be!=null){q=r.bM
u.push(r.vU(r.aj_("Leak strength",q,0,1,new C.eZ9(r),""+A.k.V(q*100))))}return B.x(u,A.E,null,A.e,A.i,0,A.p)},
bLf(){var w,v,u,t,s=this,r=s.aK
r=s.kt("Zoom",r,1,3,new C.eYH(s),1,""+A.k.V(r*100)+"%")
w=s.bi
w=s.kt("Left / right",w,-1,1,new C.eYI(s),0,""+A.k.V(w*100))
v=s.bG
v=s.kt("Up / down",v,-1,1,new C.eYJ(s),0,""+A.k.V(v*100))
u=s.c8
t=x.p
return B.x(B.a([s.vU(B.x(B.a([r,w,v,s.kt("Turn",u,-180,180,new C.eYK(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.i,0,A.p)),A.W,B.bY(A.bG,B.a([s.oo("Turn 90\xb0",H.apE,!1,new C.eYL(s)),s.oo("Flip sideways",A.Cp,s.c5,new C.eYM(s)),s.oo("Flip upside down",A.Cp,s.cL,new C.eYN(s))],t),A.br,null,8,8)],t),A.E,null,A.e,A.i,0,A.p)},
c6b(){var w=null,v=B.m(22),u=B.J(A.bz,A.r,1)
return B.p(w,B.x(B.a([D.f3w,A.W,D.fFf,A.aB,B.aA(w,B.p(A.A,D.f3K,A.f,w,w,new B.o(w,w,w,B.m(16),w,G.uL,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eZA(this),w,w,w,w,w,w,!1,A.a3)],x.p),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(D.tT,w,u,v,w,w,A.n),w,w,w,w,A.bQ,w,w,w)},
c3h(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eZs(p),m=x.p,l=B.B(B.a([D.bG6,p.oo("Reset",A.kN,!1,new C.eZo(p))],m),A.m,o,A.e,A.i,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.Kn,o,o,o),j=p.ya("SHAPE",A.apB),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.CY[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.b0n(n.$2(t,p.cy),62,u.b,s===t,new C.eZp(v,p),62))}}i=B.bY(A.bG,i,A.br,o,8,8)
v=p.ya("RING",A.qp)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.CR[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.b0n(n.$2(p.cx,t),62,r.b,q===t,new C.eZq(s,p),62))}u=B.bY(A.bG,u,A.br,o,8,8)
s=p.CW
return B.x(B.a([l,A.au,k,j,i,v,u,A.ae,p.vU(p.kt("Size",s,0.12,0.4,new C.eZr(p),0.22,""+A.k.V(s*100)))],m),A.E,o,A.e,A.i,0,A.p)},
b3k(d){return new B.a4(null,d,new B.fH(0.5625,B.cu(new C.eZL(this)),null),null)},
cBm(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.J(A.bz,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.uL:q
t=new B.aP(14,14)
s=D.djv[w]
r=v?A.c:A.aC
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aC
l.push(new B.by(1,A.ba,B.aA(A.c6,B.cY(q,B.x(B.a([r,A.cS,new B.qD(A.e3,A.A,A.f,new B.y(s.b,q,new B.F(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.P,0,A.p),q,q,A.b5,new B.o(q,q,q,new B.bh(t,t,t,t),q,u,A.n),D.bxg,q,q,q,q,A.hz,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eZU(this,w),q,q,q,q,q,q,!1,A.a3),q))}return B.p(q,B.B(l,A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bzp,A.m8,q,q,q)},
aRu(){var w,v,u=this,t=null,s=u.cBm(),r=u.as
A:{if(0===r){w=u.bNi()
break A}if(1===r){w=u.cH2()
break A}if(2===r){w=u.cC7()
break A}if(3===r){w=u.cl5()
break A}if(4===r){w=u.c3h()
break A}w=u.c6b()
break A}v=x.p
return B.bx(A.tz,B.ec(B.x(B.a([s,B.E(B.cl(B.a([w],v),t,t,D.bAy,t,t,A.ah,!1),1)],v),A.m,t,A.e,A.i,0,A.p),D.Yr,!0),A.ap)},
aNF(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gcbl(),p=B.m(16)
q=B.E(B.aA(r,B.p(r,D.f3V,A.f,r,r,new B.o(A.c.j(0.08),r,B.J(A.aX,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a3),1)
p=s.Q?r:s.gbP6()
w=B.m(16)
v=B.a([new B.ac(0,A.G,A.bE.j(0.35),A.cy,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.f9s)
else t.push(D.bRR)
t.push(A.ad)
t.push(D.bIf)
return B.p(r,B.B(B.a([q,A.as,B.E(B.aA(r,B.p(r,B.B(t,A.m,r,A.b9,A.i,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.uL,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a3),1)],u),A.m,r,A.e,A.i,0,r,r),A.f,r,r,D.b56,r,r,r,r,G.akA,r,r,r)},
b0l(){var w=null
return new B.D(U.a_T,B.B(B.a([B.aH(w,w,w,w,A.mR,w,w,w,new C.eZa(this),w,w,w,w,w,w),D.fV2,A.b2,D.c_G],x.p),A.m,w,A.e,A.i,0,w,w),w)},
B(d){var w=null
return B.c6(w,A.BD,B.bn(!0,B.cu(new C.f_r(this)),!0,!1,A.af,!0,!0),w,!1,!1,w,w)}}
C.bh2.prototype={
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
for(s=d.a,q=0;q<u;++q){p=m.ag()*w
o=m.ag()*v
n=((q&1)===0?t:r).G()
s.drawRect(B.bG(new B.a3(p,o,p+1.1,o+1.1)),n)
n.delete()}},
av(d){return d.b!==this.b}}
C.rL.prototype={
a6(){return"NgmyQuoteDeco."+this.b}}
C.mk.prototype={}
C.zS.prototype={
ah(){var w=this
return B.H(["at",w.a.a9().ae(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nZ.prototype={}
C.wg.prototype={
a6(){return"NgmySlidesAiExtra."+this.b}}
C.a8w.prototype={}
C.as6.prototype={}
C.a0X.prototype={
R(){return new C.aIA(new B.au(A.at,$.ax()),B.k4(!0,null,!0,!0,null,null,!1),D.dLc,B.a([],x.s),B.eD([D.J2],x.Q))}}
C.aIA.prototype={
q(){var w=this.d
w.T$=$.ax()
w.P$=0
this.f.q()
this.a1()},
a0T(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a0T=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hX().Cj(90,700,700,A.eL),$async$a0T)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fl(),$async$a0T)
case 8:p=e
if(r.c!=null)r.m(new C.f5T(r,p,q))
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
return B.b(new B.hX().aIP(78,n,1100,1100),$async$a0W)
case 7:q=e
if(J.ct(q)){w=1
break}p=B.bp(r.y,!0,x.N)
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
J.cc(p,"data:"+k+";base64,"+A.cJ.gcu().aO(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.f5U(r,p))
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
b5l(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fT(A.cF.aO(A.d.gak(d.split(","))),A.A,u,u,A.ci,A.bX,!0,u,!1,u,u)
return w}catch(v){}return D.bvq},
c3o(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cwQ(C.fKv(w,this.b5l(d),f),g)},
adj(d,e,f,g,h){var w=null,v=new C.f5R(f,e),u=new C.f5S(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.J(p?A.bz:A.b7.j(0.6),A.r,1)
if(p)p=new B.a4(34,30,new B.an(A.a_,w,A.ab,A.f,B.a([B.as(B.X(f?A.Cw:A.OB,A.bU,w,w,w,26),w,w,w),D.etH],x.p),w),w)
else p=this.c3o(g,v.$1(h),u.$1(h),34)
return B.aI(!1,A.a2,!0,s,B.aO(!1,r,!0,B.p(w,B.B(B.a([B.E(B.as(p,w,w,w),1),D.bRy],x.p),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mK,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f5Q(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ai)},
aYA(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bx(B.m(8),B.fT(A.cF.aO(A.d.gak(h.split(","))),A.A,p,p,A.ci,A.bX,!1,30,!1,p,30),A.ap)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.J(n?A.bz:A.bf.j(0.6),A.r,1)
q=o
n=q==null?B.X(d,A.ep,p,p,p,20):q
n=B.a([n,A.ad,B.E(B.d(e,p,1,A.a1,p,p,p,A.Kt,p,p,p),1)],x.p)
if(f!=null)n.push(B.aA(p,H.Pj,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a3))
return B.aI(!1,A.a2,!0,u,B.aO(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.i,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.kk,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ai)},
a9o(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a9o=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fNX(),$async$a9o)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.f5z(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ab(n)
if(r.c!=null)r.m(new C.f5A(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9o,v)},
afe(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$afe=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.f5C(r))
w=1
break}if(r.x==null){m=B.ag("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.f5D(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.f5E(r))
t=4
m=r.ch
k=r.CW
j=r.x
i=r.y
p=B.a([],x.aD)
h=r.e
if((h==null?null:h.b)!=null){h=h.b
h.toString
J.cc(p,h)}w=7
return B.b(C.fJd(q,r.cx,j,new C.b2B(r.z,r.Q,r.as,r.at),new C.f5F(r),i,m,p,k),$async$afe)
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
if(p!=null)B.a5(p,!1).O(o)
t=2
w=6
break
case 4:t=3
e=s.pop()
n=B.ab(e)
if(r.c!=null)r.m(new C.f5G(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afe,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aG(d,A.eN,g).w
g=B.aG(d,A.bZ,g).w
w=B.as(B.p(h,h,A.f,h,h,new B.o(A.aX,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.as(B.aA(h,B.p(h,D.bUR,A.f,h,h,new B.o(h,h,B.J(A.c.j(0.35),A.r,2),h,B.a([new B.ac(2,A.G,A.bf.j(0.5),A.I,24)],v),D.c3P,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f66(i),h,h,h,h,h,h,!1,A.a3),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,H.Pj,h,h,h,i.ax?h:new C.f67(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbE5()
v=B.a([new B.ac(0,A.G,A.b7.j(0.45),A.I,10)],v)
s.push(B.he(B.aI(!1,A.a2,!0,h,B.aO(!1,h,!0,B.p(h,B.X(i.e==null?A.wl:A.hA,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.wC,A.a6),h,40,h,h,h,h,h,40),A.cO,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.L,0,h,h,A.cO,h,h,A.ai),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.P,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.Y,!1,h,!0,A.t,h,B.aN(),i.d,h,h,h,h,h,2,B.br(h,h,h,h,h,h,h,h,!0,new B.b5(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b5(4,B.m(16),D.b2A),h,h,h,h,h,h,h,h,Y.Eg,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iE,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.aj,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.aa,h,h,h,h,h,h,h,h,h,h,h,D.aUe,!0,A.a4,h,A.an,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.f68(i)
s=i.aYA(A.le,q,r,i.gclx(),s)
r=i.z
r=B.E(i.adj(new C.f6a(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.am,B.B(B.a([r,A.bm,B.E(i.adj(new C.f6b(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.i,0,h,h)],t),A.m,h,A.e,A.i,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gI(s)
p=i.y.length===0?h:new C.f6c(i)
s=i.aYA(A.uo,r,p,i.gclF(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gI(o)
p=B.E(i.adj(new C.f6d(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gI(n)
o=B.a([w,A.aB,D.fJN,A.au,D.fMG,A.bx,u,A.Q,D.fL3,A.aB,v,A.bx,B.B(B.a([q,A.as,B.E(B.x(B.a([s,A.am,B.B(B.a([p,A.bm,B.E(i.adj(new C.f6e(i),r,!0,n,o),1)],t),A.m,h,A.e,A.i,0,h,h)],t),A.m,h,A.e,A.i,0,A.p),1)],t),A.E,h,A.e,A.i,0,h,h),A.am,D.fOx],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.J(D.bn6,A.r,1)
w=C.aht(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.W,new B.bM(A.a5,h,h,B.p(h,B.B(B.a([D.bVY,A.bm,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fsg,h,h,h),B.aO(!1,h,!0,D.enI,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.f6f(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.P,0,h,h),A.f,h,h,new B.o(D.bf8,h,u,v,h,h,A.n),h,h,h,h,D.bz4,h,h,h),h)],t))}o.push(A.bx)
o.push(D.fAk)
o.push(A.Q)
w=B.a([],t)
for(m=0;m<6;++m){l=D.dbv[m]
v=i.ch===l?A.b7:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aC:A.bz,1,A.r,-1)
u=u?A.u:A.U
w.push(new B.by(1,A.ba,new B.D(A.jz,B.aA(h,B.cY(A.A,new B.y(""+l,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.b5,new B.o(v,h,new B.bH(k,k,k,k),h,h,h,A.a6),A.eH,h,42,h,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f6g(i,l),h,h,h,h,h,h,!1,A.a3),h),h))}o.push(B.B(w,A.m,h,A.e,A.i,0,h,h))
o.push(A.bx)
o.push(D.fTg)
o.push(A.Q)
o.push(B.cu(new C.f6h(i)))
o.push(A.bx)
o.push(D.fHQ)
o.push(A.Q)
w=B.a([i.b8e("auto","Let AI choose",A.e5,A.Ro)],t)
for(v=x.O,m=0;m<11;++m){j=D.wI[m]
u=j.d
w.push(i.b8e(j.a,j.b,j.c,B.a([B.b1(A.d.gI(u).a),B.b1(A.d.gI(u).b)],v)))}o.push(B.bY(A.bG,w,A.br,h,8,8))
o.push(A.aQ)
w=A.c.j(0.04)
v=B.m(16)
u=B.J(i.r?A.bf.j(0.5):A.bz,A.r,1)
o.push(B.p(h,B.iM(h,A.bf,h,h,h,new C.f69(i),D.bR0,D.fSv,h,D.fCG,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aTo,h,h,h)],t))
o.push(A.bx)
w=i.ax?h:i.gcbp()
v=B.fq(h,h,A.b7,A.b7.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b8(B.m(18),A.a0),h,h,h,h,h)
u=i.ax
t=u?D.f9i:A.HB
o.push(new B.a4(h,54,B.lM(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.nM,h,h,h),w,v),h))
return new B.D(new B.P(0,0,0,f.f.d),B.p(h,B.bn(!0,B.ch(B.x(o,A.ak,h,A.e,A.i,0,A.p),A.t,h,A.y,h,A.w9,h,h,A.ah),!0,!1,A.af,!0,!1),A.f,h,new B.aZ(0,680,0,g.a.b*0.92),D.adt,h,h,h,h,h,h,h,h),h)},
bQO(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.f5H(this,p,d)
if(d===D.DE)return new C.aF5(p,o,q)
w=B.m(16)
v=p?E.wC:q
u=p?q:A.c.j(0.05)
t=B.J(p?A.aC:A.bz,A.r,1)
s=B.X(p?A.e6:C.hRl(d),A.c,q,q,q,20)
r=C.hRm(d)
return B.aA(q,B.cY(q,B.x(B.a([s,A.au,B.eO(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.e3)],x.p),A.m,q,A.b9,A.i,0,A.p),q,q,A.b5,new B.o(u,q,t,w,q,v,A.n),A.h4,q,64,q,q,A.hP,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a3)},
b8e(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ac:A.bz
r=B.J(r,A.r,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a9(A.a5,A.a8,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aA(v,B.cY(v,B.B(B.a([w,Z.Ec,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a7,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.P,0,v,v),v,v,A.b5,new B.o(s,v,r,t,v,v,A.n),A.eH,v,v,v,v,P.alT,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f5W(this,d),v,v,v,v,v,v,!1,A.a3)}}
C.a0W.prototype={
R(){return new C.aIz(new B.au(A.at,$.ax()))}}
C.aIz.prototype={
q(){var w=this.d
w.T$=$.ax()
w.P$=0
this.a1()},
aff(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$aff=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.f5s(r))
w=1
break}B.eY()
r.m(new C.f5t(r))
t=4
q=C.iic(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ag("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.ihX(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.f5u(r,q))
w=1
break}k=r.c
if(k!=null)B.a5(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ag("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.h8K()
f=$.D_.h(0,k.a)
o=f==null||J.ct(f)?null:J.ft(f)
if(o==null){r.m(new C.f5v(r))
w=1
break}n=C.ihV(o,r.a.c)
C.ihR(r.a.c.a)
$.h8_=!0
k=r.c
if(k!=null)B.a5(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.hbz(j)
h=C.hbA(r.a.c)
e=C.hbB(r.a.c)
w=7
return B.b(C.bE_(k,r.a.c.a,j,h,new C.f5w(r),i,e,a0),$async$aff)
case 7:m=a3
k=r.c
if(k!=null)B.a5(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ab(a1)
if(r.c!=null)r.m(new C.f5x(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aff,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aG(d,A.eN,i).w
i=B.aG(d,A.bZ,i).w
w=B.as(B.p(j,j,A.f,j,j,new B.o(A.aX,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.apT,A.f,j,j,D.b4M,j,34,j,j,j,j,j,34),A.as,D.bGJ],v),A.m,j,A.e,A.i,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Y.a9V,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.Y,!0,j,!0,A.t,j,B.aN(),k.d,j,j,j,j,j,2,B.br(j,j,j,j,j,j,j,j,!0,new B.b5(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b5(4,B.m(16),Aw.acU),j,j,j,j,j,j,j,j,Y.Eg,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.aj,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.aa,j,j,j,j,j,j,j,j,j,j,j,D.aUe,!0,A.a4,j,A.an,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.d7D[q]
o=A.c.j(0.06)
n=k.e?j:new C.f5y(k,p)
r.push(B.mY(j,o,new B.y(p,j,AC.US,j,j,j,j,j,j,j,j,j),j,n,j,j,Q.vD,j))}w=B.a([w,A.aB,u,A.am,t,A.aB,s,A.W,B.bY(A.bG,r,A.br,j,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ae,B.d(u,j,j,j,j,j,j,D.aTo,j,j,j)],v))
w.push(A.aQ)
u=k.e
t=u?j:k.gcbq()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bf.j(0.5),A.ej.j(0.5)],x.O):D.cFx
o=B.a([new B.ac(0,A.G,A.bf.j(0.35),A.cy,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.enE:D.bVx
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aI(!1,A.a2,!0,j,B.aO(!1,s,!0,B.eK(B.B(B.a([n,A.as,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.ht,j,j,j)],v),A.m,j,A.b9,A.i,0,j,j),j,new B.o(j,j,j,r,o,new B.a9(A.a5,A.a8,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.ai))
return new B.D(new B.P(0,0,0,h.f.d),B.p(j,B.bn(!0,B.ch(B.x(w,A.ak,j,A.e,A.i,0,A.p),A.t,j,A.y,j,A.w9,j,j,A.ah),!0,!1,A.af,!0,!1),A.f,j,new B.aZ(0,680,0,i.a.b*0.85),D.adt,j,j,j,j,j,j,j,j),j)}}
C.b2B.prototype={}
C.aF5.prototype={
R(){return new C.blO(null,null)}}
C.blO.prototype={
gayz(){var w,v=this,u=v.d
if(u===$){w=B.bm(null,A.qf,null,1,null,v)
w.cM(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
q(){this.gayz().q()
this.bxY()},
B(d){var w=null,v=this.a.d
return B.aA(w,B.cb(this.gayz(),new C.emi(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a3)}}
C.bjk.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.ddV[s]
p=q.a*v
q=q.b*u
$.S()
o=new B.ao(A.O,A.M,A.S,A.T,A.R)
o.r=D.y7.j(0.25+r*0.6).gp(0)
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
C.asE.prototype={
a6(){return"NgmyTextCommand."+this.b}}
C.a_i.prototype={
R(){return new C.aCB()}}
C.aCB.prototype={
gajm(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.ahG(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAo(){var w=this.e
return w===$?this.e=C.hbz(this.a.c).t(0,D.DE):w},
a9b(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9b=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dpA(s))
u=3
r=A.d.fY(D.wI,new C.dpB(s))
q=B.df(C.hbz(s.a.c),x.Q)
l=q
J.hu(l,D.DE)
p=l
if(s.gAo())J.cc(p,D.DE)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAo()?" with Luxury FX":""
i=s.a
h=i.d
i=C.hbA(i.c)
g=C.hbB(s.a.c)
w=6
return B.b(C.bE_(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a9b)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.ahG(q,s.gajm())
f=q==null?null:q.b
n=f==null?s.gajm():f
if(!J.A(n,r.a)&&!s.gAo())throw B.W("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a5(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ab(d)
if(s.c!=null)s.m(new C.dpC(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a9b,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.Q(d).ax.a===A.J,l=m?A.c:A.N,k=m?A.aR:A.al,j=m?A.N:A.c,i=B.m(28),h=B.J(m?A.bz:A.aN,A.r,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bF,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1),e=o.f?n:new C.dpF(d)
e=B.B(B.a([f,B.aH(n,n,n,n,B.X(A.cx,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.i,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.wI[w]
u=o.gajm()
t=o.f?n:new C.dpG(o,v)
f.push(new C.bun(v,u===v.a,t,n))}f=B.kQ(1.25,f,3,10,10,n,A.dS,!0)
u=B.m(18)
t=o.gAo()?D.c6C:n
if(o.gAo())s=n
else s=m?A.bo:A.bN
r=B.X(A.e5,o.gAo()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gAo()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gAo()?A.ac:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1)
p=o.gAo()
f=B.a([f,A.aB,B.p(n,B.B(B.a([r,A.as,q,B.b8i(n,A.c,n,A.bL,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dpH(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,O.akC,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.W,B.d(u,n,n,n,n,n,n,D.fsA,n,n,n)],g))
f=B.ch(B.x(f,A.E,n,A.e,A.i,0,A.p),A.t,n,A.y,n,A.Gw,n,n,A.ah)
u=o.f?n:o.gbD4()
t=B.bo(A.L,n,n,n,n,n,A.af,n,new B.b8(B.m(16),A.a0),n,n,n)
s=B.m(16)
return B.bn(!0,B.p(n,B.x(B.a([new B.D(D.bCe,e,n),new B.dr(1,A.cn,f,n),new B.D(A.Gv,new B.a4(1/0,50,B.bI(B.eK(B.as(o.f?A.th:D.fKg,n,n,n),n,new B.o(n,n,n,s,n,D.c5a,A.n),n,n,n),n,u,t),n),n)],g),A.m,n,A.e,A.P,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.ud,n,n,n,n),!0,!1,A.af,!0,!0)}}
C.bun.prototype={
B(d){var w=null,v=this.c,u=A.d.gI(v.d),t=B.m(16),s=u.a,r=B.a([B.b1(s),B.b1(u.b)],x.O),q=this.d,p=B.J(q?A.c:A.L,A.r,2.5)
s=q?B.a([new B.ac(0,A.G,B.b1(s).j(0.5),A.I,12)],x.V):w
v=B.a([new B.bM(A.lt,w,w,B.X(v.c,A.ac,w,w,w,18),w),new B.bM(A.lu,w,w,B.d(v.b,w,w,w,w,w,w,D.fsx,w,w,w),w)],x.p)
if(q)v.push(D.b0_)
return B.aA(w,B.cY(w,new B.an(A.a_,w,A.ab,A.t,v,w),w,w,A.b5,new B.o(w,w,p,t,s,new B.a9(A.ay,A.aE,A.x,r,w,w),A.n),A.eH,w,w,w,w,A.ck,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a3)}}
C.emf.prototype={
aGo(d,e,f){return e+"@"+A.a.aX(A.o.fv(f==null?this.a.c:f,16),8,"0").toUpperCase()},
wO(d,e){return this.aGo(0,e,null)}}
C.aNd.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.b2x.prototype={
B(d){var w,v,u=null,t=C.hao(this.c)
if(t==null)w=D.btV
else{w=B.aG(d,u,x.w).w.cMf(D.byA,D.f8s)
v=this.d
w=B.q0(B.dZ(B.aoP(!1,t,!1,v,!1,390),!v,u),w)}return B.eO(A.A,new B.a4(416,870,new C.bno(w,u),u),A.f,A.dz)}}
C.bno.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dqz[w]
u=new B.aP(3,3)
s.push(new B.cN(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bh(u,u,u,u),t,D.arQ,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.drV[w]
u=new B.aP(3,3)
s.push(new B.cN(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bh(u,u,u,u),t,D.arQ,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bS(0,B.c4(t,new B.o(t,t,t,B.m(64),D.cXD,D.c3w,A.n),A.bh),0,0,0))
s.push(B.bS(3,B.c4(t,new B.o(A.w,t,t,B.m(61),t,t,A.n),A.bh),3,3,3))
s.push(B.bS(13,B.bx(B.m(51),B.ec(this.c,A.w,!0),A.ap),13,13,13))
u=B.m(20)
s.push(B.ap(t,B.as(B.p(D.b0a,B.p(t,t,A.f,t,t,D.b54,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bS(13,B.dZ(B.bx(B.m(51),D.bvw,A.ap),!0,t),13,13,13))
s.push(B.ap(22,B.dZ(B.as(B.p(t,t,A.f,t,t,new B.o(A.ac,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.a_,t,A.ab,A.f,s,t)}}
C.lq.prototype={
pO(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cF(),f=C.cF(),e=m.r
f=C.ew(A.K,!1,e.l(),A.aF,"",k,42,A.bp,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bi,j,2,"Your Presentation Title",0,0,"",D.mW,D.cV,0.84,0.08,0.26)
w=C.cF()
v=m.w
w=C.ew(A.K,!1,v.l(),A.aF,"",k,20,A.bp,A.a7,"",0.12,w,l,"","",0,!1,"",0,D.bi,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dh,D.cV,0.76,0.12,0.56)
u=C.cF()
t=m.d
s=x.u
t=C.rM(i,l,0,0,B.a([f,w,C.ew(A.bj,!1,4279310375,A.aF,"",t.j(0.8).l(),24,A.bp,A.a7,"",0.006,u,l,"","",0,!1,"",0,D.fD,t.l(),3,"",0,0,"",D.co,D.fb,0.3,0.35,0.72)],s),C.cF(),D.mV,"","","Welcome",D.dh)
u=C.cF()
u=C.ew(A.bj,!1,e.l(),A.aF,"",k,34,A.bp,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bi,j,2,"Agenda",0,0,"",D.co,D.cV,0.84,0.08,0.08)
w=C.cF()
w=C.rM(i,l,0,0,B.a([u,C.ew(A.bj,!0,v.l(),A.aF,"",k,22,A.bp,A.a7,"",0.6,w,l,"","",0,!1,"",0,D.bi,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.v0,D.cV,0.8,0.1,0.26)],s),C.cF(),D.mV,"","","Agenda",D.dh)
u=C.cF()
u=C.ew(A.bj,!1,e.l(),A.aF,"",k,32,A.bp,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bi,j,2,"Main Idea",0,0,"",D.co,D.cV,0.84,0.08,0.08)
f=C.cF()
f=C.rM(i,l,0,0,B.a([u,C.ew(A.bj,!0,v.l(),A.aF,"",k,21,A.bp,A.a7,"",0.62,f,l,"","",0,!1,"",0,D.bi,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.co,D.cV,0.8,0.1,0.26)],s),C.cF(),D.mV,"","","Key Point 1",D.dh)
u=C.cF()
u=C.ew(A.bj,!1,e.l(),A.aF,"",k,30,A.bp,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bi,j,2,"Compare & Contrast",0,0,"",D.co,D.cV,0.84,0.08,0.08)
r=C.cF()
r=C.ew(A.bj,!0,v.l(),A.aF,"",k,18,A.bp,A.a7,"",0.62,r,l,"","",0,!1,"",0,D.bi,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.co,D.cV,0.4,0.08,0.24)
q=C.cF()
q=C.rM(i,l,0,0,B.a([u,r,C.ew(A.bj,!0,v.l(),A.aF,"",k,18,A.bp,A.a7,"",0.62,q,l,"","",0,!1,"",0,D.bi,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.co,D.cV,0.4,0.52,0.24)],s),C.cF(),D.mV,"","","Key Point 2",D.dh)
r=C.cF()
r=C.ew(A.K,!1,e.l(),A.aF,"",k,48,A.bp,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bi,j,2,h,0,0,"",D.dh,D.cV,0.8,0.1,0.32)
e=C.cF()
p=C.C0(l,l,l,l,D.DA,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rM(i,l,0,0,B.a([r,C.ew(A.K,!1,v.l(),A.aF,"",k,22,A.bp,A.a7,"",0.1,e,l,"","",0,!1,"",0,D.bi,j,2,"Questions?",0,0,"",D.co,D.cV,0.7,0.15,0.58)],s),C.cF(),D.mV,"","",h,D.dh)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.L)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.F1.prototype={
bx(d){return this.e.$1(d)}}
C.eA.prototype={}
C.j8.prototype={}
C.ET.prototype={
gaMd(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.aht(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a4l(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.ET(v,u,t,d==null?w.d:d)},
FV(d){return this.a4l(null,d,null,null)},
aF4(d){return this.a4l(null,null,null,d)},
cMd(d,e){return this.a4l(d,e,null,null)},
bdu(d){return this.a4l(d,null,null,null)},
bdA(d){return this.a4l(null,null,d,null)}}
C.NS.prototype={
R(){return new C.bla(new B.eC(0,$.ax()),null,null)}}
C.bla.prototype={
Z(){var w,v=this
v.a2()
w=v.pS(new C.e_T(v))
v.e!==$&&B.aQ()
v.e=w
if(v.a.e)w.h7(0)
else v.d.sp(0,3.2)},
q(){var w=this.e
w===$&&B.c()
w.q()
w=this.d
w.T$=$.ax()
w.P$=0
this.bxr()},
B(d){var w=C.aht(this.a.c.a)
if(w==null)w=A.d.gI(D.HV)
return B.cu(new C.e_S(this,w,C.hqH(this.a.c.d)))}}
C.bsW.prototype={
B(d){return B.o3(A.WM,this.e,new C.f4G(this,A.k.F(this.d*0.35,1.6)-0.3))}}
C.bg6.prototype={
a3(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aU7(d,e,v)
break
case"confetti":w.bJD(d,e,v)
break
case"crown":w.bLg(d,e,v)
break
case"aurora":w.bE9(d,e,v)
break
case"champagne":w.bHv(d,e,v)
break
case"diamonds":w.bNr(d,e,v)
break
case"starburst":w.cyZ(d,e,v)
break
case"balloons":w.bEn(d,e,v)
break
case"galaxy":w.bSF(d,e,v)
break
case"redcarpet":w.cpR(d,e,v)
break
case"coins":w.bJ1(d,e,v)
break
case"lanterns":w.c1U(d,e,v)
break
case"hearts":w.c_t(d,e,v)
break
case"petals":w.ckX(d,e,v)
break
case"butterflies":w.bGu(d,e,v)
break
case"neon":w.c5W(d,e,v)
break
case"disco":w.bNC(d,e,v)
break
case"sunrise":w.cAE(d,e,v)
break
case"pearls":w.ck0(d,e,v)
break
case"snow":w.cyG(d,e,v)
break
case"laurel":w.c2_(d,e,v)
break
case"ribbons":w.csl(d,e,v)
break
case"kente":w.c1I(d,e,v)
break
case"trophy":w.cEi(d,e,v)
break
case"shooting":w.cwq(d,e,v)
break
case"bokeh":w.bEI(d,e,v)
break
case"orbits":w.chD(d,e,v)
break
case"flowers":w.bRU(d,e,v)
break
case"music":w.c5E(d,e,v)
break
case"mandala":w.c44(d,e,v)
break
case"sparklers":w.cyN(d,e,v)
break
case"city":w.bIi(d,e,v)
break}},
rV(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.S()
v=B.I()
v.r=g.j(A.k.E(h,0,1)).gp(0)
v.a=A.oW
u=new B.aF(w.r,A.ag,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.D(new B.aY(w,s))
u.D(new B.c5(w,t,w+f,t))
u.D(new B.c5(w,t,w,t+f))
u.D(new B.c5(w,t,w-f,t))
u.D(new B.c5(w,t,w,s))
u.D(new B.bt())
d.aH(u,v)
d.ad(e,f*0.18,v)},
lT(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.d_(q,v)*2.5)+C.d_(q,u)*6.28)+1)/2
this.rV(d,new B.t(C.d_(q,t)*o,C.d_(q,s)*n),m*(0.006+0.014*C.d_(q,r))*(0.5+p),h,p*p)}},
aU7(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lT(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bL,A.aA],w),B.a([A.ik,A.bE],w),B.a([A.eA,A.aJ],w),B.a([A.c,A.az],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bf(k/2.8)
i=A.k.F(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.d_(h,1))
f=g+c0*(C.d_(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.d_(h,3))
d=v[Math.abs(A.o.F(h,4))]
if(i<0.22){a0=B.kA(new B.t(g,c1),new B.t(f,e),A.cu.aw(0,i/0.22))
a0.toString
$.S()
a1=new B.ao(A.O,A.M,A.S,A.T,A.R)
a1.sam(new B.a9(A.a5,A.a8,A.x,B.a([d[0].j(0),d[0]],w),null,null).aA(0,B.rO(new B.t(g,c1),a0)))
a1.c=n
a1.d=A.by
a2=B.kA(new B.t(g,c1),a0,0.75)
a2.toString
a3=a1.G()
a4=a0.a
a0=a0.b
t.drawLine.apply(t,[a2.a,a2.b,a4,a0,a3])
a3.delete()
a2=new B.ao(A.O,A.M,A.S,A.T,A.R)
a2.r=A.c.gp(0)
a3=a2.G()
t.drawCircle(a4,a0,m,a3)
a3.delete()}else{a5=(i-0.22)/0.78
a6=A.cu.aw(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.V(q))
a2=C.d_(h,4)
if(a5<0.15){a4=1-a5/0.15
$.S()
a8=new B.ao(A.O,A.M,A.S,A.T,A.R)
a8.r=d[0].j(0.5*a4).gp(0)
a8.z=new B.hi(A.G,o)
a3=a8.G()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.d_(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.d_(h,b1+60))
b4=f+Math.cos(b2)*b3
b5=e+Math.sin(b2)*b3+a9
b6=Math.cos(b2)
b7=Math.sin(b2)
b8=(b1&1)===0?d[0]:d[1]
$.S()
b9=new B.ao(A.O,A.M,A.S,A.T,A.R)
b9.r=b8.j(a8).gp(0)
b9.c=u
b9.d=A.by
b9.a=A.oW
a3=b9.G()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.d_(h,b1+120)>0.5)this.rV(c3,new B.t(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bJD(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.F(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.S(),a0=B.I()
a0.sam(new B.a9(A.ay,A.aE,A.x,D.dkM,B.a([A.k.E(g-0.15,0,1),A.k.E(g,0,1),A.k.E(g+0.15,0,1)],x.x),null).aA(0,new B.a3(0,0,f,e)))
a1.aP(new B.a3(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.F(a3*(h*(0.08+0.12*C.d_(u,1)))+C.d_(u,2)*w,w)
s=C.d_(u,3)
r=Math.sin(a3*(0.8+C.d_(u,4))+u)
q=h*(0.012+0.012*C.d_(u,5))
p=Math.cos(a3*(2+3*C.d_(u,6))+u)
o=D.QQ[A.o.E(A.k.bf(C.d_(u,7)*5),0,4)]
J.bl(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.d_(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.ao(A.O,A.M,A.S,A.T,A.R)
t=Math.abs(p)
n.r=B.ar(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.F(u,5)===0){t=B.a([],v)
m=new B.aF(d.r,A.ag,null,null,t)
d=-q*2
t.push(new B.aY(d,0))
for(l=1;l<=8;++l){s=new B.aq(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.bx(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.S()
t=new B.ao(A.O,A.M,A.S,A.T,A.R)
t.r=B.b1(n.r).gp(0)
t.b=A.a9
t.c=q*0.35
k=t.G()
t=m.e
f.drawPath((t==null?m.e=new B.cd(m.gbu().a.snapshot()):t).a,k)
k.delete()}else{t=B.bK(A.I,q*1.8*A.k.E(t,0.15,1),q)
k=n.G()
f.drawRect(B.bG(t),k)
k.delete()}f.restore()}this.lT(a1,a2,a3,25,A.bL,30)},
bLg(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
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
n.push(new B.bt())
o=new B.ao(A.O,A.M,A.S,A.T,A.R)
o.sam(new B.c_(A.A,0.5,A.x,a4,0,B.a([A.bL.j(0.22),D.bhd],v),a4,a4).aA(0,B.bX(w,u)))
l=o.G()
o=m.gbu().a.snapshot()
t.drawPath((m.e=new B.cd(o)).a,l)
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
i.D(new B.bt())
h=A.k.E(b0/1.8,0,1)
s=h>=1
if(s){n=B.I()
n.sam(new B.a9(A.b0,A.b6,A.x,D.djp,a4,a4).aA(0,new B.a3(a5,a6,o,v)))
a8.aH(i,n)
for(v=[D.eDY,D.ex7,D.eNC],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
a0=d.b
d=a5+k*d.a
a1=new B.ao(A.O,A.M,A.S,A.T,A.R)
a1.r=a0.gp(a0)
l=a1.G()
t.drawCircle(d,o,n,l)
l.delete()
a1=new B.ao(A.O,A.M,A.S,A.T,A.R)
a1.r=A.ac.gp(0)
l=a1.G()
t.drawCircle(d-g,f,g,l)
l.delete()}for(v=[0,0.5,1],o=a7*0.014,e=0;e<3;++e){a2=v[e]
n=a2===0.5?0:u
g=new B.ao(A.O,A.M,A.S,A.T,A.R)
g.r=A.i_.gp(0)
l=g.G()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.xt(i),u=B.a([],x.X),o=new B.rm(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b9(B.jD(y.M));--f
o.ie()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aF(n,v.b,a4,new B.cy([new B.Bs(o,f),0,d*h,!0]),B.a([],r))
f=new B.ao(A.O,A.M,A.S,A.T,A.R)
f.b=A.a9
f.c=g
f.e=A.dQ
f.r=A.bL.gp(0)
l=f.G()
f=d.gbu().a.snapshot()
t.drawPath((d.e=new B.cd(f)).a,l)
l.delete()}if(s){a3=A.k.F(b0*0.5,1)
this.rV(a8,new B.t(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lT(a8,a9,b0,45,A.bL,40)},
bE9(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lT(a8,a9,b0,60,A.c,50)
w=[D.eZN,D.eZv,D.eZp,D.f_L]
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
if(a1!=null)d.bx(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.aq(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bx(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.S()
n=new B.ao(A.O,A.M,A.S,A.T,A.R)
n.b=A.a9
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.oW
n.z=new B.hi(A.G,s)
a2=n.G()
n=h.e
u.drawPath((n==null?h.e=new B.cd(h.gbu().a.snapshot()):n).a,a2)
a2.delete()
n=new B.ao(A.O,A.M,A.S,A.T,A.R)
n.b=A.a9
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.oW
n.z=new B.hi(A.G,v)
a2=n.G()
n=h.e
u.drawPath((n==null?h.e=new B.cd(h.gbu().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.F(t*(0.05+0.06*C.d_(a4,1))+C.d_(a4,2)*a3,a3)
r=C.d_(a4,3)
q=Math.sin(b0+a4)
p=C.d_(a4,4)
$.S()
n=new B.ao(A.O,A.M,A.S,A.T,A.R)
n.r=A.vX.j(0.4+0.5*C.d_(a4,5)).gp(0)
n.a=A.oW
a2=n.G()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bHv(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.S(),a0=B.I()
a0.sam(new B.c_(A.A,0.5,A.x,l,0,B.a([A.hX.j(0.25+0.1*h),D.YB],x.O),l,l).aA(0,B.bX(new B.t(g,f),e)))
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
if(q!=null)d.bx(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.S()
a0=new B.ao(A.O,A.M,A.S,A.T,A.R)
a0.b=A.a9
a0.c=h
a0.r=D.QQ[A.o.F(w,4)].j(0.7).gp(0)
p=a0.G()
a0=u.e
g.drawPath((a0==null?u.e=new B.cd(u.gbu().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.F(a3*(i*(0.07+0.12*C.d_(w,1)))+C.d_(w,2)*o,o)
r=k*(0.1+0.8*C.d_(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.d_(w,4))
if(n<f){this.rV(a1,new B.t(r,n),m*2.4,A.bL,A.k.E(n/f,0,1))
continue}$.S()
d=new B.ao(A.O,A.M,A.S,A.T,A.R)
d.b=A.a9
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.xY.j(0.75).gp(0)
p=d.G()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.ao(A.O,A.M,A.S,A.T,A.R)
t.r=A.c.j(0.8).gp(0)
p=t.G()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bNr(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lT(a9,b0,b1,30,A.l4,60)
for(w=Math.max(4,A.k.V(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.d_(p,1))
n=a7+o*4
m=A.k.F(t*(0.04+0.06*C.d_(p,2))+C.d_(p,3)*n,n)-o*2
l=C.d_(p,4)*a6+Math.sin(s+p)*a8*0.02
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
g.push(new B.bt())
g=new B.ao(A.O,A.M,A.S,A.T,A.R)
g.sam(new B.a9(A.ay,A.aE,A.x,D.df_,a5,a5).aA(0,B.bK(A.I,k*1.2,o)))
a2=g.G()
g=f.gbu().a.snapshot()
v.drawPath((f.e=new B.cd(g)).a,a2)
a2.delete()
a3=new B.ao(A.O,A.M,A.S,A.T,A.R)
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
if(a4>0.85)this.rV(a9,new B.t(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
cyZ(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
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
o.push(new B.bt())
p=new B.ao(A.O,A.M,A.S,A.T,A.R)
p.r=A.bL.j(r?0.12:0.07).gp(0)
m=p.G()
r=n.gbu().a.snapshot()
w.drawPath((n.e=new B.cd(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.F(a0+l*0.6,1.8)/1.8
$.S()
u=new B.ao(A.O,A.M,A.S,A.T,A.R)
u.b=A.a9
r=1-k
u.c=v*r
u.r=A.bL.j(r*0.6).gp(0)
m=u.G()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bf(a0/2.4)
k=A.k.F(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.d_(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.buU.aw(0,k)*(0.5+0.5*C.d_(t,v)))
this.rV(d,new B.t(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.d_(t,3)),D.QQ[A.o.E(A.k.bf(C.d_(t,4)*5),0,4)],u)}},
bEn(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.d_(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.F(q*(0.05+0.05*C.d_(o,2))+C.d_(o,3)*m,m)
j=C.d_(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.az2[A.o.F(o,6)]
h=$.S()
g=B.a([],s)
f=new B.aF(h.r,A.ag,a3,a3,g)
h=k+n*1.15
g.push(new B.aY(j,h))
for(e=1;e<=6;++e){d=new B.aq(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bx(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.S()
d=new B.ao(A.O,A.M,A.S,A.T,A.R)
d.b=A.a9
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.G()
d=f.e
u.drawPath((d==null?f.e=new B.cd(f.gbu().a.snapshot()):d).a,a1)
a1.delete()
a2=B.bK(new B.t(j,k),n*2.3,l)
l=new B.ao(A.O,A.M,A.S,A.T,A.R)
d=B.ar(i,A.w,0.35)
d.toString
l.sam(new B.c_(D.b0d,0.9,A.x,a3,0,B.a([A.c,i,d],t),W.ayT,a3).aA(0,a2))
a1=l.G()
u.drawOval(B.bG(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aF(g.r,A.ag,a3,a3,l)
d=n*0.12
l.push(new B.aY(j-d,h))
l.push(new B.aq(j+d,h))
l.push(new B.aq(j,k+n))
l.push(new B.bt())
l=new B.ao(A.O,A.M,A.S,A.T,A.R)
l.r=B.ar(i,A.w,0.3).gp(0)
a1=l.G()
l=g.gbu().a.snapshot()
u.drawPath((g.e=new B.cd(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.F(q*(0.1+0.1*C.d_(o,11))+C.d_(o,12)*m,m)
r=C.d_(o,13)
J.bl(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.bK(A.I,t,v)
$.S()
r=new B.ao(A.O,A.M,A.S,A.T,A.R)
r.r=D.az2[A.o.F(o,6)].j(0.85).gp(0)
a1=r.G()
u.drawRect(B.bG(s),a1)
a1.delete()
u.restore()}},
bSF(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.t(a8,a9)
this.lT(b1,b2,b3,50,A.c,70)
for(w=[D.eZV,D.eZB,D.eZH],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.S()
k=new B.ao(A.O,A.M,A.S,A.T,A.R)
k.sam(new B.c_(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).aA(0,B.bX(new B.t(r,m),l)))
j=k.G()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.V(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.F(i,3)
g=C.d_(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.d_(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.ar(A.bL,A.eG,g)
k.toString
d=C.d_(i,3)
$.S()
a0=new B.ao(A.O,A.M,A.S,A.T,A.R)
a0.r=k.j(0.5+0.5*C.d_(i,4)).gp(0)
a0.a=A.oW
j=a0.G()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.S()
a9=B.I()
a9.sam(new B.c_(A.A,0.5,A.x,a4,0,B.a([A.xY.j(0.55),D.ai4],u),a4,a4).aA(0,B.bX(b0,a8)))
b1.ad(b0,a8,a9)
a1=A.k.F(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bf(b3/3.5)
a3=new B.t(a5*(0.1+0.5*C.d_(a2,9)),a6*0.1*C.d_(a2,8))
a5=B.kA(a3,a3.a7(0,new B.t(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.kA(a3,a5,0.6)
a6.toString
a8=B.I()
a8.sam(new B.a9(A.a5,A.a8,A.x,B.a([A.c.j(0),A.c],u),a4,a4).aA(0,B.rO(a3,a5)))
a8.c=a7*0.005
a8.d=A.by
b1.bo(a6,a5,a8)}},
cpR(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
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
n.push(new B.bt())
o=new B.ao(A.O,A.M,A.S,A.T,A.R)
o.sam(new B.c_(A.A,0.5,A.x,b5,0,B.a([A.xY.j(0.28),D.ai4],w),b5,b5).aA(0,B.bX(new B.t(q,u),t)))
o.a=A.oW
l=o.G()
q=m.gbu().a.snapshot()
v.drawPath((m.e=new B.cd(q)).a,l)
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
b0.push(new B.c5(a9,k,a5?g:a1,b7))
b0.push(new B.aq(a5?0:b6,b7))
b0.push(new B.bt())
a9=new B.ao(A.O,A.M,A.S,A.T,A.R)
a9.sam(new B.a9(A.a5,A.a8,A.x,a7,b5,b5).aA(0,new B.a3(a6,0,a6+i,j)))
l=a9.G()
a9=m.gbu().a.snapshot()
v.drawPath((m.e=new B.cd(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.ao(A.O,A.M,A.S,A.T,A.R)
b1.r=A.hX.gp(0)
b1.c=o
b1.d=A.by
l=b1.G()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aF($.S().r,A.ag,b5,b5,B.a([],s))
w=b7*0.78
b2.D(new B.aY(b6*0.42,w))
b2.D(new B.aq(b6*0.58,w))
b2.D(new B.aq(b6*0.8,b7))
b2.D(new B.aq(b6*0.2,b7))
b2.D(new B.bt())
v=B.I()
v.sam(D.c53.aA(0,new B.a3(0,w,0+b6,w+b7*0.22)))
b9.aH(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.F(b7*(0.05+0.07*C.d_(r,1))+C.d_(r,2)*b3,b3)
u=C.d_(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rV(b9,new B.t(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.d_(r,4)),A.bL,0.3+0.7*((q+1)/2))}},
bJ1(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.d_(t,1))
r=h+s*4
q=s*2
p=A.k.F(u*(0.12+0.12*C.d_(t,2))+C.d_(t,3)*r,r)-q
o=C.d_(t,4)*i
n=Math.cos(f*(2+3*C.d_(t,5))+t)
m=Math.abs(n)
l=B.bK(new B.t(o,p),q,q*A.k.E(m,0.12,1))
$.S()
q=new B.ao(A.O,A.M,A.S,A.T,A.R)
q.sam(new B.a9(A.ay,A.aE,A.x,n>0?D.dvq:D.cLn,null,null).aA(0,l))
k=q.G()
v.drawOval(B.bG(l),k)
k.delete()
q=-(s*0.22)
j=new B.ao(A.O,A.M,A.S,A.T,A.R)
j.b=A.a9
j.c=Math.max(0.6,s*0.08)
j.r=D.brC.gp(0)
k=j.G()
v.drawOval(B.bG(new B.a3(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rV(d,new B.t(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lT(d,e,f,30,A.bL,110)},
c1U(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lT(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.d_(p,1))
n=a1+o*4
m=a1+o*2-A.k.F(t*(0.03+0.04*C.d_(p,2))+C.d_(p,3)*n,n)
l=C.d_(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.S()
h=new B.ao(A.O,A.M,A.S,A.T,A.R)
h.sam(new B.c_(A.A,0.5,A.x,d,0,B.a([As.FU.j(0.45*k),D.agH],u),d,d).aA(0,B.bX(new B.t(l,m),j)))
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
j.push(new B.bt())
j=new B.ao(A.O,A.M,A.S,A.T,A.R)
i=B.ar(D.bhs,A.c,0.2*k)
i.toString
j.sam(new B.a9(A.b0,A.b6,A.x,B.a([D.bmH,i],u),d,d).aA(0,B.bK(new B.t(l,m),o*1.4,o)))
g=j.G()
j=f.gbu().a.snapshot()
v.drawPath((f.e=new B.cd(j)).a,g)
g.delete()
j=new B.ao(A.O,A.M,A.S,A.T,A.R)
j.r=A.c.j(k).gp(0)
g=j.G()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
c_t(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.d_(p,1))
n=a1+o*4
m=A.k.F(s*(0.05+0.06*C.d_(p,2))+C.d_(p,3)*n,n)
l=C.d_(p,4)
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
l.push(new B.kN(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.kN(m,g,o*1.8,h,0,m))
l.push(new B.bt())
f=D.d5n[A.o.F(p,5)]
m=new B.ao(A.O,A.M,A.S,A.T,A.R)
l=B.ar(f,A.w,0.25)
l.toString
m.sam(new B.c_(A.tw,0.5,A.x,d,0,B.a([A.c,f,l],u),M.a4b,d).aA(0,B.bX(A.I,o*1.4)))
e=m.G()
m=i.gbu().a.snapshot()
v.drawPath((i.e=new B.cd(m)).a,e)
e.delete()
v.restore()}this.lT(a3,a4,a5,30,A.ik,130)},
ckX(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.d_(q,1))
o=g+p*4
n=A.k.F(t*(0.05+0.06*C.d_(q,2))+C.d_(q,3)*o,o)
m=C.d_(q,4)
l=Math.sin(s+q*0.7)
J.bl(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.d_(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.S()
m=B.a([],u)
k=new B.aF(n.r,A.ag,i,i,m)
n=-p
m.push(new B.aY(0,n))
l=n*0.2
m.push(new B.c5(p,l,0,p))
m.push(new B.c5(n,l,0,n))
m.push(new B.bt())
n=new B.ao(A.O,A.M,A.S,A.T,A.R)
m=(q&1)===0?D.cFw:D.dgm
n.sam(new B.a9(A.a5,A.a8,A.x,m,i,i).aA(0,B.bX(A.I,p)))
j=n.G()
n=k.gbu().a.snapshot()
v.drawPath((k.e=new B.cd(n)).a,j)
j.delete()
v.restore()}this.lT(d,e,a0,25,A.bL,140)},
bGu(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lT(b0,b1,b2,40,A.bL,150)
for(w=Math.max(4,A.k.V(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.d_(r,1))
p=Math.sin(b2*(0.15+0.1*C.d_(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.d_(r,3))+r*1.3)
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
a3.push(new B.kN(f,e,l,d,h,0))
a3.push(new B.kN(q,h,g,q,0,h))
a3.push(new B.bt())
a2=new B.ao(A.O,A.M,A.S,A.T,A.R)
a2.sam(new B.a9(A.a5,A.a8,A.x,i?D.dg5:D.diT,a6,a6).aA(0,new B.a3(0,m,k,j)))
a5=a2.G()
a2=a4.gbu().a.snapshot()
v.drawPath((a4.e=new B.cd(a2)).a,a5)
a5.delete()
a2=new B.ao(A.O,A.M,A.S,A.T,A.R)
a2.b=A.a9
a2.c=Math.max(0.6,o)
a2.r=D.Bu.gp(0)
a5=a2.G()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cd(a4.gbu().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.S()
p=new B.ao(A.O,A.M,A.S,A.T,A.R)
p.r=D.bqS.gp(0)
p.c=q*0.1
p.d=A.by
a5=p.G()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c5W(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.t(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.F(w+t/4,1)
r=f*(0.2+0.7*s)
$.S()
q=new B.ao(A.O,A.M,A.S,A.T,A.R)
q.b=A.a9
q.c=v
q.r=D.aAc[t].j((1-s)*0.9).gp(0)
q.z=new B.hi(A.G,v)
p=r*0.3
p=B.bs(B.bK(e,r,r*1.6),new B.aP(p,p))
o=q.G()
u.drawRRect(B.e6(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.d_(m,1)*4)+m)))
k=D.aAc[A.o.F(m,4)]
j=m*n+h
i=g-l
i=B.bs(new B.a3(j,i,j+w,i+l),new B.aP(v,v))
$.S()
j=new B.ao(A.O,A.M,A.S,A.T,A.R)
j.r=k.j(0.85).gp(0)
j.z=new B.hi(A.acI,p)
o=j.G()
u.drawRRect(B.e6(i),o)
o.delete()}},
bNC(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.t(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.d_(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.d_(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bL,A.nW,A.du][A.o.F(p,4)]
j=C.d_(p,3)
$.S()
i=new B.ao(A.O,A.M,A.S,A.T,A.R)
i.r=k.j(0.75).gp(0)
i.a=A.oW
i.z=new B.hi(A.G,r)
h=i.G()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.S()
t=B.I()
t.r=A.aC.gp(0)
t.c=1.2
a3.bo(new B.t(a0,0),new B.t(a0,w-u),t)
t=B.I()
t.r=A.dn.gp(0)
a3.ad(v,u,t)
J.bl(q.save())
a1=new B.aF(a1.r,A.ag,null,null,B.a([],x.v))
a1.D(new B.jL(B.bX(v,u)))
a3.mK(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.F(a1,g)
i=Math.sin(e*1.7+l+s)
$.S()
d=new B.ao(A.O,A.M,A.S,A.T,A.R)
d.r=B.ar(A.bn,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.G()
q.drawRect(B.bG(new B.a3(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.rV(a3,v.a7(0,new B.t(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cAE(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.cu.aw(0,A.k.E(a4/3,0,1))),a1=new B.t(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.S()
q=B.a([],u)
p=new B.aF(r.r,A.ag,h,h,q)
q.push(new B.aY(d,a0))
r=s-0.04
q.push(new B.aq(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.aq(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bt())
r=new B.ao(A.O,A.M,A.S,A.T,A.R)
r.r=A.bL.j(0.1).gp(0)
o=r.G()
r=p.gbu().a.snapshot()
w.drawPath((p.e=new B.cd(r)).a,o)
o.delete()}d=e*0.5
$.S()
a0=B.I()
a0.sam(new B.c_(A.A,0.5,A.x,h,0,B.a([D.bcO.j(0.6),D.agH],x.O),h,h).aA(0,B.bX(a1,d)))
a2.ad(a1,d,a0)
a0=e*0.2
d=B.I()
d.sam(D.eux.aA(0,B.bX(a1,a0)))
a2.ad(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.F(d*(1+t*0.3)+C.d_(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.ao(A.O,A.M,A.S,A.T,A.R)
j.r=A.c.j(0.18).gp(0)
i=B.bK(new B.t(l,k),r,u)
o=j.G()
w.drawOval(B.bG(i),o)
o.delete()
i=B.bK(new B.t(l+q,k-n),r,m)
o=j.G()
w.drawOval(B.bG(i),o)
o.delete()}this.lT(a2,a3,a4,20,A.i_,180)},
ck0(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.S()
q=B.a([],t)
p=new B.aF(r.r,A.ag,f,f,q)
q.push(new B.aY(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.aq(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.bx(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.aq(e,d)
q.push(r)
o=p.f
if(o!=null)r.bx(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.bt()
q.push(r)
q=p.f
if(q!=null)r.bx(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.S()
r=new B.ao(A.O,A.M,A.S,A.T,A.R)
r.r=B.ar(A.cw,A.j8,s/3).j(0.55).gp(0)
k=r.G()
r=p.e
w.drawPath((r==null?p.e=new B.cd(p.gbu().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.d_(i,1))
g=d-A.k.F(u*(0.04+0.05*C.d_(i,2))+C.d_(i,3)*j,j)
n=C.d_(i,4)*e+Math.sin(a3+i)*a0*0.02
$.S()
t=new B.ao(A.O,A.M,A.S,A.T,A.R)
t.sam(new B.c_(Ap.xu,0.5,A.x,f,0,D.dmv,f,f).aA(0,B.bX(new B.t(n,g),h)))
k=t.G()
w.drawCircle(n,g,h,k)
k.delete()}this.lT(a1,a2,a3,25,A.c,190)},
cyG(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.d_(r,1))
p=f+q*4
o=A.k.F(u*(0.03+0.05*C.d_(r,2))+C.d_(r,3)*p,p)
n=C.d_(r,4)
m=Math.sin(t+r)
$.S()
l=new B.ao(A.O,A.M,A.S,A.T,A.R)
l.r=A.c.j(0.6+0.4*C.d_(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.by
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
c2_(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
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
f=new B.ao(A.O,A.M,A.S,A.T,A.R)
f.sam(D.c4R.aA(0,new B.a3(0,o,n,m)))
e=f.G()
s.drawOval(B.bG(g),e)
e.delete()
s.restore()}}$.S()
a0=B.I()
a0.b=A.a9
a0.c=a2*0.003
a0.r=D.bhM.gp(0)
a3.ad(w,v*1.08,a0)
d=a5*0.8
this.rV(a3,w.a7(0,new B.t(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lT(a3,a4,a5,40,A.bL,210)},
csl(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hX,A.i_],a6),B.a([A.p3,A.ik],a6),B.a([A.aD,A.eG],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bT<ak.E>"),q=s.k("ak.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.S()
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
if(a1!=null)f.bx(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.aq(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bx(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.t(e,d+a0))}for(l=new B.dx(i,s),l=new B.bT(l,l.gL(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.aq(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.bx(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bt()
k.push(l)
k=j.f
if(k!=null)l.bx(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.S()
l=new B.ao(A.O,A.M,A.S,A.T,A.R)
k=a7[m]
h=k[0]
l.sam(new B.a9(A.a5,A.a8,A.x,B.a([h,k[1],h],a6),At.zt,new B.mE(w)).aA(0,new B.a3(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.G()
l=j.e
t.drawPath((l==null?j.e=new B.cd(j.gbu().a.snapshot()):l).a,a2)
a2.delete()}this.lT(a8,a9,b0,40,A.c,220)},
c1I(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
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
a2=new B.ao(A.O,A.M,A.S,A.T,A.R)
a3=Math.abs(a0)
a2.r=D.a4f[a3].gp(0)
a4=a2.G()
s.drawRect(B.bG(new B.a3(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.ao(A.O,A.M,A.S,A.T,A.R)
a5.r=D.a4f[A.o.F(a3+2,5)].gp(0)
a4=a5.G()
s.drawRect(B.bG(new B.a3(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.F(n*(0.04+0.05*C.d_(a0,1))+C.d_(a0,2)*a6,a6)
v=C.d_(a0,3)
t=C.d_(a0,4)
this.rV(b1,new B.t(v*a7,l-a8),a9*(0.01+0.012*t),D.a4f[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cEi(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new B.ao(A.O,A.M,A.S,A.T,A.R)
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
l.D(new B.c5(w,r,p,k))
w=a2+m*0.95
l.D(new B.aq(p,w))
p=n*0.3
j=a2+m
l.D(new B.aq(a1+p,j))
l.D(new B.aq(a1-p,j))
q=a1-q
l.D(new B.aq(q,w))
l.D(new B.aq(q,k))
l.D(new B.c5(v,r,v,a2))
l.D(new B.bt())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.bK(new B.t(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ao(A.O,A.M,A.S,A.T,A.R)
d.b=A.a9
d.c=q
d.r=A.az.gp(0)
o=d.G()
u.drawArc.apply(u,[B.bG(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.I()
a1.sam(new B.a9(A.a5,A.a8,A.x,D.dpf,A.aza,null).aA(0,new B.a3(v,a2,r,j)))
a4.aH(l,a1)
a0=A.k.F(a6*0.6,1.4)
if(a0<1)this.rV(a4,new B.t(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bJE(a4,a5,a6,60)},
bJE(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.F(k*(0.1+0.1*C.d_(p,31))+C.d_(p,32)*v,v)
n=C.d_(p,33)
J.bl(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.bK(A.I,r*A.k.E(Math.abs(Math.cos(q+p)),0.2,1),s)
$.S()
n=new B.ao(A.O,A.M,A.S,A.T,A.R)
n.r=D.QQ[A.o.F(p,5)].gp(0)
m=n.G()
u.drawRect(B.bG(o),m)
m.delete()
u.restore()}},
cwq(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lT(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.d_(o,1)*1.6
m=A.k.F(a2+C.d_(o,2)*n,n)/n
l=e*(C.d_(o*7+A.k.bf((a2+C.d_(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.t(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.S()
g=new B.ao(A.O,A.M,A.S,A.T,A.R)
g.sam(new B.a9(A.a5,A.a8,A.x,B.a([A.c.j(0),A.bL],s),null,null).aA(0,B.rO(new B.t(l,h),i)))
g.c=r
g.d=A.by
f=g.G()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rV(a0,i,p,A.c,1-m)}},
bEI(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.d_(r,1))
p=A.k.F(C.d_(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.F(C.d_(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.S()
m=new B.ao(A.O,A.M,A.S,A.T,A.R)
l=A.o.F(r,5)
m.r=D.aBW[l].j(n).gp(0)
m.a=A.oW
m.z=new B.hi(A.G,q*0.12)
k=m.G()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.ao(A.O,A.M,A.S,A.T,A.R)
m.b=A.a9
m.c=Math.max(0.6,q*0.05)
m.r=D.aBW[l].j(n*1.4).gp(0)
k=m.G()
s.drawCircle(p,o,q,k)
k.delete()}},
chD(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bl(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.bK(A.I,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.S()
o=new B.ao(A.O,A.M,A.S,A.T,A.R)
o.b=A.a9
o.c=u
o.r=A.bL.j(0.45).gp(0)
n=o.G()
w.drawOval(B.bG(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.ao(A.O,A.M,A.S,A.T,A.R)
k.r=A.i_.gp(0)
n=k.G()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.ao(A.O,A.M,A.S,A.T,A.R)
k.r=A.hX.j(0.4).gp(0)
k.z=new B.hi(A.G,r)
n=k.G()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lT(d,e,f,45,A.bL,270)},
bRU(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.d_(o,1)
A:{if(0===n){l=new B.t(m*a2,p)
break A}if(1===n){l=new B.t(m*a2,q)
break A}if(2===n){l=new B.t(r,m*a3)
break A}l=new B.t(s,m*a3)
break A}k=A.k.F(a7+C.d_(o,2)*4,4)/4
j=A.et.aw(0,A.k.E(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.d_(o,3))*(j*i)
if(h<=0.5)continue
g=D.dd1[A.o.F(o,5)]
J.bl(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.bK(new B.t(0,l),i,j)
$.S()
a0=new B.ao(A.O,A.M,A.S,A.T,A.R)
a0.sam(new B.a9(A.b0,A.b6,A.x,B.a([A.c,g],u),null,null).aA(0,B.bK(new B.t(0,l),f,h)))
a1=a0.G()
v.drawOval(B.bG(d),a1)
a1.delete()}$.S()
l=new B.ao(A.O,A.M,A.S,A.T,A.R)
l.r=A.hX.gp(0)
a1=l.G()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lT(a5,a6,a7,30,A.i_,280)},
c5E(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.F(t+n/4,1)
l=B.bX(new B.t(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.S()
j=new B.ao(A.O,A.M,A.S,A.T,A.R)
j.b=A.a9
j.c=v
j.r=D.ayd[n].j((1-m)*0.8).gp(0)
i=j.G()
u.drawArc.apply(u,[B.bG(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.F(v*(0.06+0.06*C.d_(g,1))+C.d_(g,2)*h,h)
e=C.d_(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.d_(g,4))
a0=D.ayd[A.o.F(g,4)]
$.S()
a1=new B.ao(A.O,A.M,A.S,A.T,A.R)
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
o=new B.ao(A.O,A.M,A.S,A.T,A.R)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.18)
i=o.G()
u.drawLine.apply(u,[s,f,s,p,i])
i.delete()
if((g&1)===0){o=new B.ao(A.O,A.M,A.S,A.T,A.R)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.3)
i=o.G()
u.drawLine.apply(u,[s,p,e+d*1.6,f-d*2,i])
i.delete()}}},
c44(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
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
a0.push(new B.c5(h,m,0,g))
a0.push(new B.c5(j,m,0,i))
d=new B.ao(A.O,A.M,A.S,A.T,A.R)
d.b=A.a9
d.c=t
d.r=B.ar(A.bL,A.nW,k).j(0.7).gp(0)
a2=d.G()
d=a1.gbu().a.snapshot()
v.drawPath((a1.e=new B.cd(d)).a,a2)
a2.delete()
d=new B.ao(A.O,A.M,A.S,A.T,A.R)
d.r=A.i_.j(0.8).gp(0)
a2=d.G()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.S()
a5=B.I()
a5.sam(new B.c_(A.A,0.5,A.x,a3,0,B.a([A.hX.j(0.25),D.YB],x.O),a3,a3).aA(0,B.bX(w,a4)))
a7.ad(w,a4,a5)
this.lT(a7,a8,a9,30,A.bL,300)},
cyN(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.S()
h=new B.ao(A.O,A.M,A.S,A.T,A.R)
h.r=A.bn.gp(0)
h.c=q
h.d=A.by
g=h.G()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.ao(A.O,A.M,A.S,A.T,A.R)
l.sam(new B.c_(A.A,0.5,A.x,null,0,B.a([A.i_,A.hX.j(0.6),D.YB],o),null,null).aA(0,B.bX(new B.t(j,i),p)))
g=l.G()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.d_(f,1)
d=A.k.F(b2+C.d_(f,2)*e,e)/e
a0=A.k.bf((b2+C.d_(f,2)*e)/e)
a1=C.d_(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.d_(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.ao(A.O,A.M,A.S,A.T,A.R)
a6.r=B.ar(A.i_,A.aA,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.by
a6.a=A.oW
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
bIi(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aU7(a9,new B.av(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.d_(n,1))
l=a8*(0.14+0.24*C.d_(n,2))
k=a8-l
j=new B.a3(o,k,o+m,k+l)
$.S()
i=new B.ao(A.O,A.M,A.S,A.T,A.R)
i.sam(D.c5O.aA(0,j))
h=i.G()
r.drawRect(B.bG(j),h)
h.delete()
g=A.k.bf(m/q)
f=A.k.bf(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.d_(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.S()
a6=new B.ao(A.O,A.M,A.S,A.T,A.R)
a6.r=A.bL.j(0.85).gp(0)
h=a6.G()
r.drawRect(B.bG(new B.a3(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
av(d){return d.b!==this.b||d.d!==this.d}}
C.b0r.prototype={
B(d){var w,v=null,u=new C.cds(),t=new C.cdu(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.aqZ,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.cdt(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.HV[w]))
return B.bY(A.bG,s,A.br,v,12,10)}}
C.ZQ.prototype={
R(){return new C.aAZ()}}
C.aAZ.prototype={
gvV(){var w=this.d
return w===$?this.d=this.a.c:w},
gb0q(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.au(new B.ba(w.b,A.b4,A.aO),$.ax())}return v},
gayA(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaMd()
v=$.ax()
u.f!==$&&B.bF()
t=u.f=new B.au(new B.ba(w,A.b4,A.aO),v)}return t},
q(){var w=this.gb0q(0),v=$.ax()
w.T$=v
w.P$=0
w=this.gayA()
w.T$=v
w.P$=0
this.a1()},
a_H(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a_H=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hX().Cj(90,700,700,A.eL),$async$a_H)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fl(),$async$a_H)
case 8:p=e
o=q.b.toLowerCase()
n=J.aiq(o,".png")?"image/png":"image/jpeg"
r.m(new C.deO(r,n,p))
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
b0p(d){var w=null,v=A.c.j(0.07)
return B.br(w,new B.b5(4,B.m(12),A.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.V2,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.aht(p.gvV().a)
if(n==null)n=A.d.gI(D.HV)
w=p.gvV()
v=p.r
u=x.p
v=B.E(new B.an(A.a_,o,A.ab,A.t,B.a([B.bS(0,new C.NS(p.gvV(),!1,!0,new B.bR(w.a+v,x.W)),0,0,0),B.ap(o,B.I9(A.mR,new C.deT(d),B.nP(o,A.aS,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ap(o,B.I9(A.apR,new C.deU(p),B.nP(o,A.aS,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aUd,o,o,o)
t=B.E(B.aM(o,A.Y,!1,o,!0,A.t,o,B.aN(),p.gb0q(0),o,o,o,o,o,2,p.b0p("Big words"),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.deV(p),o,o,o,!1,o,o,!1,o,!0,o,A.aa,o,o,o,o,o,o,o,o,o,o,o,A.fS,!0,A.a4,o,A.an,o,o,o,o),1)
s=A.c.j(0.07)
r=B.J(A.hX.j(0.6),A.r,1)
if(p.gvV().d.length===0)q=D.bTe
else{q=C.hqH(p.gvV().d)
if(q==null)q=new Uint8Array(0)
q=B.hV(B.fT(q,A.A,o,o,A.ci,A.bX,!1,o,!1,o,o),A.ap)}r=B.a([t,A.ad,B.aA(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcbr(),o,o,o,o,o,o,!1,A.a3)],u)
if(p.gvV().d.length!==0)r.push(B.aH(o,o,o,o,H.Pj,o,o,o,new C.deW(p),o,o,o,o,"Remove logo",o))
return B.c6(o,A.w,B.bn(!0,B.x(B.a([v,B.p(o,B.x(B.a([w,A.W,B.B(r,A.m,o,A.e,A.i,0,o,o),A.Q,B.aM(o,A.Y,!1,o,!0,A.t,o,B.aN(),p.gayA(),o,o,o,o,o,2,p.b0p("Line under it"),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.deX(p),o,o,o,!1,o,o,!1,o,!0,o,A.aa,o,o,o,o,o,o,o,o,o,o,o,A.df,!0,A.a4,o,A.an,o,o,o,o),A.ae,B.di(D.bS8,D.fUb,new C.deY(p,d),B.bo(A.az,o,o,o,A.w,o,A.cm,o,new B.b8(B.m(14),A.a0),o,o,o))],u),A.ak,o,A.e,A.P,0,A.p),A.f,o,o,D.b5g,o,o,o,o,A.Gs,o,o,o)],u),A.m,o,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.aMI.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.a_a.prototype={
R(){return new C.bhE(new B.au(A.at,$.ax()))}}
C.bhE.prototype={
q(){var w=this.d
w.T$=$.ax()
w.P$=0
this.a1()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.Q(d).ax.a===A.J,m=n?A.c:A.N,l=n?A.aR:A.al,k=B.aG(d,A.bZ,x.w).w,j=n?A.N:A.c,i=B.m(28),h=B.J(n?A.bz:A.aN,A.r,1),g=x.p,f=B.B(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.X(A.cx,l,o,o,o,o),o,o,o,new C.dlC(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.i,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cX4[w]
u=B.a([],g)
for(t=J.aW(v.b);t.C();){s=t.gS(t)
r=new B.aP(12,12)
q=new B.aP(12,12)
p=n?A.c.j(0.06):A.bN
u.push(B.aO(!1,new B.bh(r,r,r,r),!0,B.p(A.A,new B.y(s,o,A.pG,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bh(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dlD(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hz,new B.y(v.a.toUpperCase(),o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.CB(A.bG,6,6,A.br,u,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.Q)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bo:A.aP
e.push(B.B(B.a([B.E(B.aM(o,A.Y,!1,o,!0,A.t,o,B.aN(),this.d,o,o,o,o,o,2,B.br(o,new B.b5(4,B.m(14),A.a0),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.aa,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a4,o,A.an,o,o,o,o),1),A.ad,B.bI(A.aVb,o,new C.dlE(this),o)],g),A.m,o,A.e,A.i,0,o,o))
e.push(A.Q)
return B.bn(!0,B.p(o,B.x(B.a([f,new B.dr(1,A.cn,B.cl(e,o,o,o,o,o,A.ah,!0),o)],g),A.E,o,A.e,A.P,0,A.p),A.f,o,new B.aZ(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.ud,A.a_z,o,o,o),!0,!1,A.af,!0,!0)}}
C.bgZ.prototype={
a3(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.e4()
a2.cY(this.c)
w=this.b
v=w/6.283185307179586
$.S()
u=B.I()
u.z=A.IF
t=B.I()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.ag()
l=a2.ag()
k=a2.ag()
j=0.8+a2.ag()*2.2
i=Math.sin(w*(3+a2.ap(4))+n)
h=A.k.F(l-v*(0.4+k*0.9),1)
k=(m+Math.sin(q+n)*0.012)*p
g=h*o
if(a2.ag()<0.25){f=B.ar(r,A.c,0.85)
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
a1=new B.ao(A.O,A.M,A.S,A.T,A.R)
a1.r=e.gp(0)
a1.c=1
d=a1.G()
s.drawLine.apply(s,[k-a0,g,k+a0,g+0,d])
d.delete()
d=a1.G()
s.drawLine.apply(s,[k,g-a0,k+0,g+a0,d])
d.delete()}}},
av(d){return d.b!==this.b}}
C.bgG.prototype={
a3(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bs(new B.a3(0,0,0+a7.a,0+a7.b),A.k4),a2=this.b,a3=Math.sin(a2*2),a4=$.S(),a5=B.I()
a5.b=A.a9
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.mU
a6.az(a1,a5)
a5=x.v
a4=new B.aF(a4.r,A.ag,a0,a0,B.a([],a5))
a4.D(new B.iT(a1))
v=new B.T5(new B.rm(B.xt(a4),!1,B.a([],x.X))).gI(0)
a4=v.a
a3=v.b
a4.ie()
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
j=new B.ao(A.O,A.M,A.S,A.T,A.R)
j.b=A.a9
j.d=A.by
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.F(n-p*(1-m/10),t)
h=A.k.F(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aF(r,k,a0,new B.cy([v,i,h,!0]),B.a([],a5))
g=j.G()
f=k.gbu().a.snapshot()
q.drawPath((k.e=new B.cd(f)).a,g)
g.delete()}else{k=new B.aF(r,k,a0,new B.cy([v,i,t,!0]),B.a([],a5))
g=j.G()
f=k.gbu().a.snapshot()
q.drawPath((k.e=new B.cd(f)).a,g)
g.delete()
k=new B.aF(r,a2.b,a0,new B.cy([v,0,h,!0]),B.a([],a5))
g=j.G()
f=k.gbu().a.snapshot()
q.drawPath((k.e=new B.cd(f)).a,g)
g.delete()}}a4.ie()
e=u[a3].Hc(n).a
$.S()
k=new B.ao(A.O,A.M,A.S,A.T,A.R)
k.r=w.gp(0)
k.z=Ad.oD
g=k.G()
k=e.a
f=e.b
q.drawCircle(k,f,5,g)
g.delete()
d=new B.ao(A.O,A.M,A.S,A.T,A.R)
d.r=A.c.gp(0)
g=d.G()
q.drawCircle(k,f,2,g)
g.delete()}},
av(d){return d.b!==this.b}}
C.bpJ.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.e4()
e.cY(this.c)
w=a0.a*(0.2+e.ag()*0.6)
v=e.h5()?-0.1:1.1
v=a0.b*v
u=new B.t(w,v)
t=a0.ganw()*1.4
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
i.push(new B.bt())
j=new B.ao(A.O,A.M,A.S,A.T,A.R)
j.sam(B.tt(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.kQ
g=j.G()
j=h.gbu().a.snapshot()
q.drawPath((h.e=new B.cd(j)).a,g)
g.delete()}},
av(d){return d.b!==this.b}}
C.bbv.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.e4()
a0.cY(this.c*7+3)
for(w=a1.a,v=this.d,u=a2.a,t=Math.abs(u),s=a2.b,r=Math.abs(s),q=this.b,p=q*0.8,o=q*2,n=0;n<16;++n){m=a0.ag()
l=a0.ag()
k=Math.min(t,r)*(0.03+a0.ag()*0.09)
j=a0.ag()*3.141592653589793*2
i=(m+Math.sin(q+j)*0.04)*u
h=(l+Math.cos(p+j)*0.05)*s
g=0.08+0.1*(0.5+0.5*Math.sin(o+j))
if((n&1)===0)f=v
else{e=B.ar(v,A.c,0.6)
e.toString
f=e}$.S()
e=new B.ao(A.O,A.M,A.S,A.T,A.R)
e.r=f.j(g).gp(0)
e.z=new B.hi(A.G,k*0.35)
d=e.G()
w.drawCircle(i,h,k,d)
d.delete()
e=new B.ao(A.O,A.M,A.S,A.T,A.R)
e.b=A.a9
e.c=1
e.r=B.ar(f,A.c,0.5).j(g*0.9).gp(0)
d=e.G()
w.drawCircle(i,h,k,d)
d.delete()}},
av(d){return d.b!==this.b}}
C.bb9.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.e4()
a0.cY(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.ag()-0.5)*0.1)
k=v*(0.06+a0.ag()*0.05)
j=a0.ag()*3.141592653589793*2
i=$.S()
h=B.a([],n)
g=new B.aF(i.r,A.ag,null,null,h)
h.push(new B.aY(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.aq(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.bx(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.S()
i=new B.ao(A.O,A.M,A.S,A.T,A.R)
i.b=A.a9
i.c=r
i.d=A.by
if(m===1){h=B.ar(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gp(0)
i.z=new B.hi(A.G,u)
d=i.G()
i=g.e
t.drawPath((i==null?g.e=new B.cd(g.gbu().a.snapshot()):i).a,d)
d.delete()}},
av(d){return d.b!==this.b}}
C.bwK.prototype={
a3(d,e){var w,v,u=new B.a3(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.S()
w=B.I()
t=(0.5+0.5*t)*0.12
w.sam(new B.c_(A.A,0.95,A.x,null,0,B.a([A.L,A.w.j(0.28+t)],x.O),D.d45,null).aA(0,u))
d.aP(u,w)
w=u.cr(-3)
v=B.I()
v.b=A.a9
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.kQ
d.aP(w,v)},
av(d){return d.b!==this.b}}
C.btJ.prototype={
a3(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bf(d)*7,p=0;p<7;++p){o=new B.e4()
o.cY(q+p)
n=o.ag()*w
m=o.ag()*u
l=Math.sin(A.k.F(A.k.F(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.ag()*0.025)*l
j=B.ar(s,A.c,0.7).j(l)
$.S()
i=new B.ao(A.O,A.M,A.S,A.T,A.R)
i.r=j.gp(0)
i.c=1.4
i.d=A.by
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
g=new B.ao(A.O,A.M,A.S,A.T,A.R)
g.r=A.c.j(l*0.9).gp(0)
g.z=new B.hi(A.G,k*0.3)
h=g.G()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
av(d){return d.b!==this.b}}
C.bsS.prototype={
a3(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a3(0,0,0+e.a,0+e.b)
$.S()
v=B.I()
v.a=A.oW
v.sam(new B.a9(A.ay,A.aE,A.x,B.a([A.L,B.ar(this.c,A.c,0.6).j(0.16),A.L],x.O),B.a([A.k.E(u-0.15,0,1),A.k.E(u,0,1),A.k.E(u+0.15,0,1)],x.x),null).aA(0,w))
d.aP(w,v)},
av(d){return d.b!==this.b}}
C.bg_.prototype={
a3(d,e){var w,v,u,t,s,r=e.gdD(),q=0.55+0.45*Math.sin(this.b)
$.S()
w=B.I()
w.b=A.a9
w.c=1.4
w.d=A.by
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.I()
u.b=A.a9
u.c=4
u.r=v.j(0.12*q).gp(0)
u.z=A.uU
r=new C.dev(this,r*0.16,d,u,w)
t=e.gdD()*0.045
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
C.as5.prototype={
a6(){return"NgmySlideAspectRatio."+this.b}}
C.v2.prototype={
a6(){return"NgmySlideShapeKind."+this.b}}
C.mO.prototype={
a6(){return"NgmySlideLayout."+this.b}}
C.hI.prototype={
a6(){return"NgmySlideTransition."+this.b}}
C.eP.prototype={
hN(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
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
u.n(0,"fontWeight",v.x.gdP(0))
u.n(0,"fontStyle",v.y.a)
u.n(0,"decoration",C.i4D(v.z))
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
C.lW.prototype={
hN(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("N<1,eP>")
n=B.C(new B.N(n,new C.cj_(),m),m.k("ak.E"))
return C.rM(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ah(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("N<1,a8<n,@>>")
n=B.C(new B.N(n,new C.cj0(),m),m.k("ak.E"))
return B.H(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i6.prototype={
gbbP(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bk(v)},
gSP(){if(!C.kH(this.w))return!1
var w=this.gbbP()
if(w==null)return!1
return new B.V(Date.now(),0,!1).d2(w.bU())},
hN(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
q=B.T(r).k("N<1,lW>")
r=B.C(new B.N(r,new C.ciP(),q),q.k("ak.E"))
return C.C0(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ah(){var w,v,u=this,t=B.U(x.N,x.z)
t.n(0,"id",u.a)
t.n(0,"name",u.b)
t.n(0,"themeId",u.c)
t.n(0,"aspectRatio",u.d.b)
t.n(0,"autoAdvanceSeconds",u.e)
t.n(0,"updatedAt",u.f.a9().ae())
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
v=B.T(w).k("N<1,a8<n,@>>")
w=B.C(new B.N(w,new C.ciQ(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jU.prototype={}
C.b2A.prototype={
B(d){return B.cu(new C.ciV(this))}}
C.ap9.prototype={
R(){return new C.bkV(null,null)}}
C.bkV.prototype={
gb0r(){var w,v=this,u=v.d
if(u===$){w=B.bm(null,A.fB,null,1,null,v)
w.cM(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
q(){this.gb0r().q()
this.bxb()},
B(d){return B.cb(this.gb0r(),new C.dN3(),this.a.c)}}
C.aMt.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.adT.prototype={
Qn(d,e,f,g){return this.bRy(d,e,f,g)},
bRy(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$Qn=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$Qn)
case 3:s=i
if(d.e==null){w=1
break}B.a5(d,!1).O(null)
t=d.K(x.q).f
t.U(B.b3(null,null,null,null,null,A.t,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.eq,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Qn,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.J(A.c.j(0.08),A.r,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.ds,24)],x.V),r=B.as(B.p(v,v,A.f,v,v,new B.o(A.aX,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.de,A.K,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aQ,p,A.am,B.d(o,v,n,A.a1,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m)
if(!q)A.d.v(n,B.a([A.au,B.d(w.c,v,2,A.a1,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m))
n.push(A.d4)
n.push(B.B(B.a([B.E(new C.ae9(A.hR,"Download",A.c3,new C.eyC(w,d),!0,v),1),A.as,B.E(new C.ae9(A.uz,"Share",A.bl,new C.eyD(w,d),!1,v),1),A.as,B.E(new C.ae9(A.hC,"Safari",A.b1,new C.eyE(w,d),!1,v),1)],m),A.m,v,A.e,A.i,0,v,v))
n.push(A.aB)
n.push(B.bN(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,v,new C.eyF(d),v,v))
return B.bn(!0,new B.D(A.qk,B.x(B.a([B.p(v,B.x(n,A.ak,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(A.jc,v,t,u,s,v,A.n),v,v,v,v,A.Gz,v,v,1/0)],m),A.m,v,A.e,A.P,0,A.p),v),!0,!1,A.af,!0,!0)}}
C.ae9.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.J(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aI(!1,A.a2,!0,v,B.aO(!1,u,!0,B.eK(B.x(B.a([p,A.Q,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.P,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bEF,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.ai)}}
C.b2y.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.arc(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.P(v,w,v,w)}else{v=6*w
u=new B.P(v,10*w,v,12*w)}t=i.cbs().alA(1.35)
s=B.awH(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bCF(v)
if(i.e&&i.w!=null)q=B.aM(h,A.Y,!1,h,!0,A.t,h,B.aN(),i.w,A.bl,h,h,h,h,2,D.c0v,A.y,!0,h,!0,h,!1,i.x,A.aj,h,h,h,new B.bR("slide_tf_"+g.a,x.W),h,A.x0,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.aa,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.Ai,A.an,h,A.UF,h,h)
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
w=n?t.cM0(B.b1(g.Q).j(0.45),A.cD):t
p=g.as
l=m?1:h
k=m?A.eM:A.Ee
p=B.d(f,new B.bR("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Uw:s
$.S()
j=B.I()
j.b=A.a9
j.c=3*w
j.e=A.dQ
j.r=A.av.gp(0)
j=i.cso(p,t,k,j)
k=g.r
w=new B.an(A.a_,h,A.ab,A.t,B.a([j,i.csm(k,t,l?A.Uw:s)],x.p),h)}else w=i.csn(p,t,g.k2?A.Uw:s,m)
v=new B.mG(w,new B.bR("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aA(A.c6,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a3)}return new B.D(u,new B.bM(r,h,h,q,h),h)
case 1:case 4:return i.c0a()
case 3:return i.ck_()
case 2:return B.b4(h,h,h,new C.b2v(g,h),A.fF)
case 5:g=g.r
return new C.b2x(g,!i.e&&i.z==null,h)}},
cbs(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b1(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
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
e=B.a([new B.cW(D.agF,new B.t(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cW(l,A.I,6*v),new B.cW(l,A.I,16*v),new B.cW(l.j(0.8),A.I,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bt
w=A.av
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.n0
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cW(A.bE,new B.t(v,v),0)],x.r)
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
w=A2.xM
break
case"ice":v=o.d
e=B.a([new B.cW(A.aJ,A.I,10*v),new B.cW(A.cw,A.I,22*v)],x.r)
k=A.U
w=A.eA
break
case"chalk":h=o.d
e=B.a([new B.cW(l.j(0.45),A.I,3*h)],x.r)
w=l
k=A.jV
break
case"comic":v=B.ar(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.d6b[q]
u.push(new B.cW(v,new B.t(p.a*t,p.b*t),0))}u.push(new B.cW(v,new B.t(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.S()
f=B.I()
v=o.d
f.sam(D.c3d.aA(0,new B.a3(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cW(A.LN,new B.t(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.S()
f=B.I()
v=o.d
f.sam(D.c3y.aA(0,new B.a3(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cW(l,A.I,14*o.d)],x.r)
w=l
k=A.a7
break
case"lowercase":h=2*o.d
w=l
k=A.cA
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cW(l.j(0.45),new B.t(u,u),0),new B.cW(l.j(0.2),new B.t(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.jV
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b1(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
aAz(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.f5t.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.ciT(h)
v=r.k2?C.ihu(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eM:A.Ee
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Yh(B.cS(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cso(d,e,f,g){return this.aAz(d,e,f,!1,g)},
csm(d,e,f){return this.aAz(d,e,f,!1,null)},
csn(d,e,f,g){return this.aAz(d,e,f,g,null)},
bCF(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a8
default:return A.a5}},
c0a(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bJ
return B.as(B.X(s.b===D.ll?A.Hw:A.Cd,A.aC,t,t,t,32),t,t,t)}w=u.bFI(r)
if(s.b===D.ll){s=B.m(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.J(A.cq,A.r,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dC,6)],x.V),t,A.n),t,1/0,t,t,new B.P(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aPo(r,!0)
return C.fKv(s.go,v,s.id)}return w},
aPo(d,e){var w,v,u,t
try{w=C.ihP(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c9(u,"_bg")
u=B.cu(new C.ciS(this,w,v,e))
return u}catch(t){return D.ae8}},
bFI(d){return this.aPo(d,!1)},
ck_(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.baJ
return C.ii6(v,w.db,w.dx)}}
C.b2v.prototype={
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
case 1:d.dQ(s,g)
d.dQ(s,w)
break
case 2:r=new B.aF(h.r,A.ag,i,i,B.a([],x.v))
r.D(new B.aY(u/2,0))
r.D(new B.aq(u,t))
r.D(new B.aq(0,t))
r.D(new B.bt())
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
r.D(new B.bt())
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
r.D(new B.bt())
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
if(v!=null)h.bx(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.aq(k,j)
f.push(h)
v=r.f
if(v!=null)h.bx(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.D(new B.bt())
d.aH(r,g)
d.aH(r,w)
break}},
av(d){return d.b!==this.b}}
C.aJZ.prototype={
R(){return new C.bwe(null,null)}}
C.bwe.prototype={
Z(){var w,v=this
v.a2()
w=B.bm(null,A.hy,null,1,null,v)
w.cM(0)
v.d!==$&&B.aQ()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bzq()},
aPz(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.c4(B.as(B.d(d,w,w,w,w,w,w,A.de,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a9(A.a5,A.a8,A.x,v,w,w),A.n),A.bh)},
bCT(){var w,v=this,u=null,t=v.aPz("Slide A",A.bl),s=v.aPz("Slide B",A.b1)
if(v.a.c===D.co)return new B.an(A.a_,u,A.b3,A.t,B.a([t,B.as(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.cb(w,new C.fdd(v,s,t),u)},
B(d){return this.bCT()}}
C.aKH.prototype={
jo(d){return new B.a3(0,0,0+d.a*A.k.E(this.b,0,1),0+d.b)},
k0(d){return d.b!==this.b}}
C.Vw.prototype={
R(){return new C.bl6(null,null)}}
C.bl6.prototype={
Z(){var w,v,u=this
u.a2()
w=B.bm(null,A.BL,null,1,null,u)
u.d!==$&&B.aQ()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.co){w.sp(0,1)
return}B.bP(B.dy(0,0,0,v.c.fr+v.f*120,0,0),new C.dYC(u),x.a)},
bz(d){var w,v,u,t=this
t.bH(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.co)w.sp(0,1)
else B.bP(B.dy(0,0,0,v.c.fr+v.f*120,0,0),new C.dYB(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bxq()},
B(d){var w,v=this.a
if(v.c.dy===D.co||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.cb(w,new C.dYA(this),v.d)}}
C.J8.prototype={
B(d){return B.cu(new C.ciL(this))}}
C.aAE.prototype={
R(){return new C.bfq()}}
C.bfq.prototype={
Z(){this.a2()
if(this.a.c!==D.co)B.bP(A.Nc,new C.dbJ(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.co)n=B.as(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.U,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ap(p,new C.Vw(C.ew(A.bj,!1,4279310375,A.aF,"",4294538006,24,A.bp,A.a7,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bi,o,2,"",0,0,"",u,D.fb,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cd,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.bR("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.ew(A.bj,!1,4294967295,A.aF,"",4280640491,22,A.bp,A.a7,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bi,o,2,"Element flies in",0,0,"",q.a.c,D.cV,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.a_,p,A.ab,A.t,B.a([w,B.ap(32,new C.Vw(t,B.p(p,D.fFr,A.f,p,p,new B.o(s,p,B.J(A.aX,A.r,1),r,p,p,A.n),p,p,p,p,A.jh,p,p,1/0),!0,1,new B.bR("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c4(n,D.b5Q,A.bh)}}
C.a8e.prototype={
R(){return new C.blM(null,null)}}
C.blM.prototype={
gb12(){var w=this.a
if(w.e)w=D.f5C.t(0,w.c)||D.aRk.t(0,A.d.gI(this.a.c.split("@")))
else w=!1
return w},
Z(){var w,v=this
v.a2()
if(v.gb12()){w=C.ig7(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bm(null,B.dy(0,0,0,w,0,0),null,1,null,v)
w.cM(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.bxW()},
B(d){var w,v=this,u=v.d
if(!v.gb12()||u==null)return v.a.d
w=v.a
return B.cb(u,new C.elZ(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b0u.prototype={
B(d){var w=null
return B.as(C.b2z(!0,w,!1,C.ew(A.K,!1,this.e.l(),A.aF,"",4280640491,this.f,A.bp,A.a7,"",0.2,"fx",w,"","",0,!1,"",0,D.bi,4280172719,2,"Aa",0,0,this.c,D.co,D.cV,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gY(d){return this.f}}
C.bgE.prototype={
jo(d){return C.a2Y(this.b,new B.a3(0,0,0+d.a,0+d.b).cr(-this.c))},
k0(d){return d.b!==this.b||d.c!==this.c}}
C.brM.prototype={
a3(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a3(0,0,0+a1.a,0+a1.b).cr(-this.d),g=this.b,f=C.a2Y(g,h),e=a1.gdD(),d=new C.f25()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sam(D.aSQ.aA(0,h))
a0.aH(f,w)
g=C.a2Y(g,h.cr(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.brm.gp(0)
a0.aH(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sam(D.ffP.aA(0,h))
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
g.sam(D.ffN.aA(0,h))
a0.aH(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aH(f,w)
g=C.a2Y(g,h.cr(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aH(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b8.j(0.7).gp(0)
g.z=new B.hi(A.G,e*0.035)
a0.aH(f,g)
g=d.$1(e*0.016)
g.r=A.p4.gp(0)
a0.aH(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sam(D.ffI.aA(0,h))
a0.aH(f,w)
w=C.a2Y(g,h.cr(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.bew.gp(0)
a0.aH(w,v)
g=C.a2Y(g,h.cr(e*0.03))
v=d.$1(e*0.004)
v.r=D.bhv.gp(0)
a0.aH(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sam(D.aSQ.aA(0,h))
a0.aH(f,g)
for(g=B.xt(f),w=B.a([],x.X),g=new B.rm(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b9(B.jD(y.M));--q
g.ie()
p=w[q].b
p===$&&B.c()
o=A.o.E(A.k.bf(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.ie()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.ie()
m=w[q].Hc(p*n/o).a
l=D.d3l[A.o.F(n,4)]
$.S()
p=new B.ao(A.O,A.M,A.S,A.T,A.R)
p.r=l.gp(0)
k=p.G()
p=m.a
j=m.b
u.drawCircle(p,j,v,k)
k.delete()
i=new B.ao(A.O,A.M,A.S,A.T,A.R)
i.r=A.c.j(0.9).gp(0)
k=i.G()
u.drawCircle(p+t,j+t,s,k)
k.delete()}}break
case"aurora":g=d.$1(e*0.08)
g.sam(D.ffR.aA(0,h))
g.z=new B.hi(A.G,e*0.03)
a0.aH(f,g)
g=d.$1(e*0.018)
g.sam(D.ffO.aA(0,h))
a0.aH(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aH(f,w)
g=C.a2Y(g,h.cr(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.o0.gp(0)
a0.aH(g,w)
break}},
av(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bsP.prototype={
a3(d,e){d.Ga(C.a2Y(this.b,new B.a3(0,0,0+e.a,0+e.b).cr(-this.c)),A.w,e.gdD()*0.05,!1)},
av(d){return d.b!==this.b||d.c!==this.c}}
C.aMH.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.aNb.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.aOv.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.a8x.prototype={}
C.Ol.prototype={
R(){var w=x.gz,v=x.N,u=x.bO
return new C.aFv(B.a([],x.D),B.a([],w),B.a([],w),B.U(v,u),B.U(v,x.bo),B.U(v,u),B.aX(v),null,null)},
ge2(){return this.c},
gU9(){return this.r},
gUa(){return this.w},
gM0(){return this.x}}
C.aFv.prototype={
Z(){var w,v=this
v.a2()
$.aV.bZ$.push(v)
C.fPu()
$.hyy=new C.eEQ(v)
w=B.bm(null,A.BI,null,1,null,v)
w.fn(0,!0)
v.fy!==$&&B.aQ()
v.fy=w
v.II()},
bz(d){var w,v,u=this
u.bH(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.OT(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.II()}},
jg(d){if(d===A.AM||d===A.ty||d===A.tx||d===A.pN)this.tV()},
q(){var w,v,u,t=this
$.aV.hS(t)
w=t.at
if(w!=null)w.a4(0)
t.tV()
w=t.fy
w===$&&B.c()
w.q()
for(w=t.ch,w=new B.du(w,w.r,w.e);w.C();){v=w.d
v.T$=$.ax()
v.P$=0}for(w=t.CW,w=new B.du(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bO(0)
v.hf()}for(w=t.cx,w=new B.du(w,w.r,w.e);w.C();){v=w.d
v.T$=$.ax()
v.P$=0}t.by8()},
gaci(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gPc(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
acO(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gSP())return!1
return!0},
kq(){return this.acO(null)},
ajE(){var w=this.c
if(w==null)return
w.K(x.q).f.U(D.fe5)},
qB(){if(!this.kq())return!1
this.ajE()
return!0},
as7(d){var w,v,u,t,s,r=this
if(r.acO(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hxF(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
A2(){return this.as7(null)},
II(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$II=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.as7(k),$async$II)
case 3:j=e
w=4
return B.b(C.aqF(k),$async$II)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.h4k(j,t.c37())
w=t.gaci()?5:7
break
case 5:r=t.gPc()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.b0I(r),$async$II)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bs(s,new C.eBd())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.c6(s,0,q)}case 9:w=6
break
case 7:A.d.bs(s,new C.eBe())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.L)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yV(m==null?"":m)!=null)continue
C.fPG(n,s)
p=!0}t.m(new C.eBf(t,s))
if(p||s.length>J.ad(j))t.tV()
case 1:return B.h(u,v)}})
return B.i($async$II,v)},
c37(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kH(w)&&w!==q}if(w)p.push(r)
return p},
cqQ(d){var w,v=this,u=d.w
if(!C.kH(u)||u==="hati_kiapo_uongozi")return
v.ab6(d)
w=A.d.bh(v.d,new C.eCO(d))
u=v.d
if(w>=0){u[w]=d.hN()
v.d[w].f=new B.V(Date.now(),0,!1)}else A.d.c6(u,0,d.hN())
v.db=!1},
ckW(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kH(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cqQ(t)
s=u.d
w=B.T(s)
v=w.k("cO<1,i6>")
s=B.C(new B.cO(new B.Z(s,new C.eCC(),w.k("Z<1>")),new C.eCD(),v),v.k("M.E"))
return s},
OT(d){return this.bRY(d)},
tV(){return this.OT(null)},
bRY(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$OT=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.ckW()
w=3
return B.b(C.Wp(d==null?t.a.c:d,s),$async$OT)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.as7(r)?4:5
break
case 4:w=6
return B.b(C.a7L(r),$async$OT)
case 6:q=r.x
p=A.a.i(q==null?t.gPc():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bh(t.d,new C.eAB())
q=t.d
if(o>=0)q[o]=r.hN()
else A.d.c6(q,0,r.hN())
case 5:case 1:return B.h(u,v)}})
return B.i($async$OT,v)},
pB(){var w,v=this,u=v.at
if(u!=null)u.a4(0)
u=v.e
w=(u==null?null:C.kH(u.w))===!0?A.h4:A.lD
v.at=B.cG(w,new C.eDW(v))},
b0s(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.afG(u.hN(),v.f,v.r))
if(w.length>40)A.d.cz(w,0)
A.d.aa(v.ay)},
cEA(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.afG(w.e.hN(),w.f,w.r))
w.m(new C.eEM(w,v.pop()))
w.pB()},
cpW(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.afG(w.e.hN(),w.f,w.r))
w.m(new C.eCM(w,v.pop()))
w.pB()},
ot(){var w,v,u=this
if(u.e==null)return
w=A.d.bh(u.d,new C.eEz(u))
if(w>=0){u.d[w]=u.e.hN()
u.d[w].f=new B.V(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.V(Date.now(),0,!1)},
Yd(d){var w,v,u,t,s=this.gdz()
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
u.hf()}w.aa(0)},
Ks(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdz()
if(l==null)return
w=l.z
v=B.T(w)
u=v.k("cO<1,n>")
t=B.df(new B.cO(new B.Z(w,new C.eEA(),v.k("Z<1>")),new C.eEB(),u),u.k("M.E"))
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
p.hf()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.L)(v),++r){n=v[r]
if(n.b!==D.cV)continue
p=n.a
m=w.c3(0,p,new C.eEC(n))
s.c3(0,p,new C.eED())
p=m.a.a
o=n.r
if(p!==o)m.saY(0,o)}},
I1(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b3(u.d,new C.eA_(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gPc()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.c6(u.d,0,u.e.hN())}u.ot()
u.pB()},
ak_(d,e){var w,v,u,t,s=this
if(s.kq())return
w=s.Yd(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kH(v.w))===!0
if(u){C.igb(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdz()
if(t!=null)C.igc(t,w.d+w.f*0.5)}}s.I1()
s.ot()
s.pB()
if(u&&s.c!=null)s.m(new C.eEN())},
cFE(d,e){var w=this,v=w.gdz()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.I1()
w.ot()
w.pB()},
gdz(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.E(this.f,0,w.length-1)]},
gqF(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.ied(o)
if(w!=null)return w
v=q.gdz()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gI(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b1(p==null?v.e:p)
u=q.c0p(v)
t=q.c0o(v)
s=B.b1(v.e)
r=v.f
return new C.jU(o,"Class template",p,u,t,s,r==null?null:B.b1(r))}return C.hRx(o)},
c0p(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(t.b===D.cV)s=t.w>=28||A.o.E(A.o.ao(t.x.a,100)-1,0,8)>=A.o.E(7,0,8)
else s=!1
if(s)return B.b1(t.Q)}return A.N},
c0o(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cV&&t.w<28)return B.b1(t.Q)}return A.aK},
afZ(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gaci()){w.c.K(x.q).f.U(D.fcH)
return}w.ab6(d)
w.b1K(C.bE0(d))
return}if(C.cjD(v)){w.ab6(d)
w.b1K(d)
return}w.m(new C.eBV(w,d))},
asG(){var w,v,u,t,s,r,q=this
q.a2S(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kH(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.ezY(q))
if(r&&q.c!=null){u.toString
q.K1(u,s)}return}q.tV()
q.m(new C.ezZ(q))},
b1J(d){this.ab6(d)
this.a0j(d,!0)},
ab6(d){if(!C.kH(d.w))return
C.fPG(d,this.d)},
a0j(d,e){return this.cgP(d,e)},
b1K(d){return this.a0j(d,!1)},
cgP(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a0j=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bE0(d)
if(e){r=s.x
q=A.a.i(r==null?t.gPc():r)
t.dy.W(0,q.toLowerCase())
C.aqG(t.a.c,q)}r=s}else r=d
w=C.cjD(r.w)?3:4
break
case 3:w=5
return B.b(t.ab7(r),$async$a0j)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b3(t.d,new C.eCh(l))
o=l.a.hN()
n=C.kH(o.w)&&C.ihp(o)
t.m(new C.eCi(t,o,p))
if(n){m=A.d.bh(t.d,new C.eCj(o))
if(m>=0){t.d[m]=o.hN()
t.tV()}}if(!t.acO(l.a))t.Zo()
r=!1
if(t.c!=null)if(!t.acO(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.as7(r)&&C.fLG(l.a)}else l=r
else l=r
if(l)t.c.K(x.q).f.U(D.fdh)
case 1:return B.h(u,v)}})
return B.i($async$a0j,v)},
ab7(d){return this.bQ1(d)},
bQ1(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$ab7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lu(r.c,A.A_),$async$ab7)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.l7(!1,r,s.c,s.d,null,A.A_,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ab7,v)},
oh(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$oh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cjD(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cj2(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$oh,v)},
afG(){var w=0,v=B.j(x.H),u,t=this,s
var $async$afG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ck(null,null,!1,null,new C.eBU(),s,null,!0,!0,x.H),$async$afG)
case 3:if(t.c==null){w=1
break}t.asG()
case 1:return B.h(u,v)}})
return B.i($async$afG,v)},
afF(){var w=0,v=B.j(x.H),u,t=this,s
var $async$afF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ck(null,null,!1,null,new C.eBR(),s,null,!0,!0,x.H),$async$afF)
case 3:if(t.c==null){w=1
break}t.m(new C.eBS())
t.asG()
case 1:return B.h(u,v)}})
return B.i($async$afF,v)},
Zo(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Zo=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$Zo)
case 3:r=e
if(B.jY(J.r(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.au("Bool","ngmy_marriage_hint_seen",!0),$async$Zo)
case 4:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.fbh)
case 1:return B.h(u,v)}})
return B.i($async$Zo,v)},
K1(d,e){return this.cre(d,e)},
cre(d,e){var w=0,v=B.j(x.H),u,t=this,s
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
return B.b(C.ah4(s,t.gEH(),t.gEG(),!0,e,t.d),$async$K1)
case 9:w=4
break
case 6:w=10
return B.b(C.ah5(s,t.gEH(),t.gEG(),!0,e,t.d),$async$K1)
case 10:w=4
break
case 7:w=11
return B.b(C.ah6(s,t.gEH(),t.gEG(),!0,e,t.d),$async$K1)
case 11:w=4
break
case 8:w=12
return B.b(C.ah7(s,t.gEH(),t.gEG(),!0,e,t.d),$async$K1)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$K1,v)},
c1Y(){var w,v,u,t,s=this
if(!s.gaci()){s.c.K(x.q).f.U(D.fbu)
return}w=s.gPc()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.ah3(u,t,v,new C.eB9(s),new C.eBa(s),w)},
ag_(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ag_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bV(A.dP,null,new C.eC0(u),s,!0,!0,!1,A.lO,!1,!1,x.N),$async$ag_)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.ah7(s,u.gEH(),u.gEG(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ah4(s,u.gEH(),u.gEG(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ah5(s,u.gEH(),u.gEG(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.ah6(s,u.gEH(),u.gEG(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.c1Y()
return B.h(null,v)}})
return B.i($async$ag_,v)},
cfV(d,e){var w,v,u=this,t=null
if(u.e!=null)u.b0s()
w=C.cF()
v=C.C0(t,t,t,t,D.DA,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eC1(u,v))},
aaw(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aaw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qB()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ilZ(s),$async$aaw)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d0(q.r,new C.eA1())
t.d7(new C.eA2(t,p,q,r))
s=t.c.K(x.q).f
o=r.r.length
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aaw,v)},
ahY(d,e,f,g){var w=null,v=g?A.dr:A.bN,u=B.J(g?A.aX:A.cq,A.r,1)
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
p=B.C(new B.Z(r,new C.eCc(),q),q.k("M.E"))}o=s!=null&&s.b===D.lN?B.a([s],x.u):p
if(o.length===0){t.c.K(x.q).f.U(D.fds)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bV(A.L,null,new C.eCd(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a0i)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a0i,v)},
agg(){return this.cgO()},
cgO(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$agg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qB()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ilL(s,t.f+1,o),$async$agg)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.Y
q=B.k5(s,B.T(s).c)
p.a=A.d.bh(o.r,new C.eCf(q))
t.d7(new C.eCg(p,t,o,q,r))
t.c.K(x.q).f.U(D.fdR)
case 1:return B.h(u,v)}})
return B.i($async$agg,v)},
agn(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$agn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qB()||!t.A2()){w=1
break}s=t.gdz()
if(s==null){w=1
break}r=s.z
q=B.T(r).k("Z<1>")
p=B.C(new B.Z(r,new C.eCx(),q),q.k("M.E"))
if(p.length===0){t.c.K(x.q).f.U(D.fb2)
w=1
break}o=new B.N(p,new C.eCy(),B.T(p).k("N<1,K>")).f4(0,new C.eCz())
r=B.U(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.L)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.au(new B.ba(l,A.b4,A.aO),$.ax()))}q=t.c
q.toString
w=3
return B.b(B.bV(A.L,null,new C.eCA(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$agn)
case 3:for(r=new B.du(r,r.r,r.e);r.C();){q=r.d
q.T$=$.ax()
q.P$=0}if(t.c!=null)t.m(new C.eCB())
case 1:return B.h(u,v)}})
return B.i($async$agn,v)},
ag2(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$ag2=B.e(function(d,e){if(d===1)return B.f(e,v)
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
return B.b(C.hzN(s,new C.ET(r,q,p,o==null?"":o)),$async$ag2)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d7(new C.eC2(m,n))
s=t.c.K(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.aht(r)
r=B.w(r==null?null:r.b)+" will play after your last slide."}s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$ag2,v)},
ab0(){return this.bPj()},
bPj(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$ab0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qB()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ilY(s,t.f+1,l),$async$ab0)
case 3:r=e
q=$.h8_
$.h8_=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d7(new C.eAi())
t.c.K(x.q).f.U(D.faU)
w=1
break}if(!q){s=r.CW
s=C.hyw(l,s==null?"":s,!1)}else s=!1
if(s){t.d7(new C.eAj(t,l,r))
t.c.K(x.q).f.U(D.fek)
w=1
break}s=l.cx
if(s==null)s=A.Y
p=B.k5(s,B.T(s).c)
s=l.r
m.a=A.d.bh(s,new C.eAk(p))
o=s.length
t.d7(new C.eAl(m,t,l,p,r))
n=s.length-o
s=t.c.K(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$ab0,v)},
aRH(d,e){if(e){this.agQ()
return}this.cfV(d,!1)},
bKR(){return this.aRH(null,!1)},
agQ(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bV(A.c2,null,new C.eCH(t),r,!0,!0,!0,A.pz,!1,!1,x.N),$async$agQ)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eCI(t,C.iec(s).pO()))
case 1:return B.h(u,v)}})
return B.i($async$agQ,v)},
d7(d){var w=this
if(w.qB())return
w.I1()
w.b0s()
w.m(d)
w.Ks()
w.ot()
w.pB()},
a90(){this.d7(new C.eyX(this,D.mV))},
aTa(){var w=this.gdz()
if(w==null)return
this.d7(new C.eAg(this,w))},
aSi(){var w=this.e
if(w==null||w.r.length<=1)return
this.d7(new C.eAe(this))},
b4D(d,e){if(this.e==null||d===e)return
this.d7(new C.eCQ(this,d,e))},
Op(d){return this.bMS(d)},
bMS(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Op=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gPc():s)
w=5
return B.b(C.aqE(t.a.c,r),$async$Op)
case 5:t.dy.M(0,r.toLowerCase())
case 4:s=d.a
C.as9(s)
w=6
return B.b(C.b2D(t.a.c,s),$async$Op)
case 6:if(t.c==null){w=1
break}t.m(new C.eAa(t,d))
w=7
return B.b(t.tV(),$async$Op)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Op,v)},
crb(d,e){var w=this
if(d.z){w.ajE()
return}w.m(new C.eCP(w,d,e))
w.pB()},
k7(){var w,v,u,t,s,r=this.gdz()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Xe(d){return this.ch.c3(0,d.a,new C.eA0(d))},
auy(d){return this.CW.c3(0,d.a,new C.eAC())},
a2S(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Yd(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aV.al$.d.c
if(u!=null)u.jm()},
b88(){return this.a2S(!0)},
a2O(d){var w,v,u=this
if(u.qB())return
if(!u.A2())return
w=u.Yd(d)
if(w==null||w.b!==D.cV)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Xe(w).saY(0,"")}u.m(new C.eEx(u,d))
$.aV.x1$.push(new C.eEy(u,d,w))},
b8H(d){var w=this
if(d.b===D.cV&&!w.kq()&&w.A2()){w.a2O(d.a)
return}w.aB_(d.a)},
aB_(d){var w,v,u,t,s,r=this
if(r.kq())return
w=r.r
if(w!=null&&w!==d){v=r.Yd(w)
if(v!=null&&v.b===D.cV){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eDX(r,s,d))
if(s||d==null){t=$.aV.al$.d.c
if(t!=null)t.jm()}},
aNV(){this.d7(new C.eyY(this))},
pi(d){return this.bBW(d)},
bBW(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$pi=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oh(),$async$pi)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d7(new C.eyV(t,d))
case 1:return B.h(u,v)}})
return B.i($async$pi,v)},
Wk(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Wk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A6.H2(78,1920),$async$Wk)
case 3:s=e
if(s==null||t.gdz()==null){w=1
break}t.d7(new C.eyL(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Wk,v)},
We(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$We=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdz()==null){w=1
break}w=3
return B.b(T.Da(t.a.c),$async$We)
case 3:s=e
if(t.c==null){w=1
break}r=J.a6(s)
if(r.gan(s)){t.c.K(x.q).f.U(D.feU)
w=1
break}w=r.gL(s)===1?4:6
break
case 4:q=r.gI(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bV(null,null,new C.eyI(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$We)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdz()==null){w=1
break}t.d7(new C.eyJ(t,q))
case 1:return B.h(u,v)}})
return B.i($async$We,v)},
atw(){var w=this,v=w.r
if(v==null||w.gdz()==null)return
if(A.d.b3(w.gdz().z,new C.eAc(v))){w.c.K(x.q).f.U(D.fdV)
return}if(w.w===v)w.a2S(!0)
w.d7(new C.eAd(w,v))},
bJ7(){var w=this.k7(),v=w==null
if((v?null:w.b)===D.fb)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cV)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aOD(d,e){var w=this,v=w.k7(),u=w.gdz(),t=w.e
if(t==null)return
w.d7(new C.ezp(w,v,d,e,t,u))},
bDw(d){return this.aOD(d,null)},
a9i(d){return this.bDE(d)},
bDE(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9i=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a8U.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.oh(),$async$a9i)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.k7()
if(s!=null){r=s.b
if(r===D.cV)t.bDw(s.w>=28||s.x.gdP(0)>=A.H.gdP(0)?d.d:d.e)
else if(r===D.fb){r=d.c
t.aOD(r.j(0.88),r)}w=1
break}t.d7(new C.ezu(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a9i,v)},
a9h(d){return this.bDC(d)},
bDC(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a9h=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.k7()
r=t.gdz()
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
return B.b(t.oh(),$async$a9h)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d7(new C.ezs(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a9h,v)},
bDm(d){var w=this.gdz()
if(w==null)return
this.d7(new C.ezo(this,w,d))},
a0o(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a0o=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.ilU(r),$async$a0o)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.ot()
t.m(new C.eCr(t,s))
w=4
return B.b(t.tV(),$async$a0o)
case 4:if(t.c!=null)t.afZ(s)
case 1:return B.h(u,v)}})
return B.i($async$a0o,v)},
aaS(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aaS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a2S(!0)
t.ot()
s=t.c
s.toString
w=3
return B.b(C.RE(s,q),$async$aaS)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.K(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aaS,v)},
DQ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$DQ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.ot()
t=4
w=7
return B.b(C.aRi(m),$async$DQ)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aQJ(o,q,m.b),$async$DQ)
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
return B.i($async$DQ,v)},
Fv(d,e){return this.cDY(d,e)},
cDY(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Fv=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qB()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a2S(!0)
t.ot()
s=h.a=t.e.hN()}else{r=A.d.bh(t.d,new C.eEG(d))
s=h.a=r>=0?t.d[r].hN():d.hN()}s=s.w
q=s==null
p=C.ifa(q?"":s)
o=C.hxr(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.T(s).k("Z<1>")
n=B.C(new B.Z(s,new C.eEH(h,p),q),q.k("M.E"))
s=h.a.b
w=3
return B.b(t.cx7(n.length,o,s),$async$Fv)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.if4(h.a)
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
return B.b(t.cx6(n,o),$async$Fv)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.fY(t.d,new C.eEI(s))
s=h.a.b
w=11
return B.b(t.cx4(k.b,s),$async$Fv)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hN()
case 5:j=C.if9(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.K(x.q).f.U(D.ff5)
w=1
break}w=12
return B.b(t.cx5(j.a,s,o,j.c),$async$Fv)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.eEJ(h,t,i))
t.pB()
case 1:return B.h(u,v)}})
return B.i($async$Fv,v)},
cx7(d,e,f){var w=this.c
w.toString
return B.bV(A.L,null,new C.eEc(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cx6(d,e){var w=this.c
w.toString
return B.bV(A.L,null,new C.eEb(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cx4(d,e){var w=this.c
w.toString
return B.bV(A.L,null,new C.eE5(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cx5(d,e,f,g){var w=this.c
w.toString
return B.bV(A.L,null,new C.eE7(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
acm(){var w=null
return B.as(B.p(w,w,A.f,w,w,new B.o(A.aX,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
acn(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.ar(d,A.c2,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.ds,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a9(A.ay,A.aE,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.es,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.fq3,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a7,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),1)],v),A.E,u,A.e,A.i,0,u,u)},
aWu(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.J(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.a1,w,w,w,A.Vg,A.K,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bT,w,w,w)},
aWx(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a9(A.ay,A.aE,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.J(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aI(!1,A.a2,!0,w,B.aO(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bc,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.n3,w,w,w),A.cS,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a7,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.E,w,A.e,A.i,0,A.p),1),B.X(A.yT,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bD,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eB5(e,j),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)},
c_j(d,e,f,g,h,i){return this.aWx(d,e,f,!1,g,h,i)},
avT(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.J(A.c.j(0.08),A.r,1)
return B.p(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.de,w,w,w),A.bF,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.a_W,w,w,w)},
aWw(d,e,f){var w=null,v=B.bo(A.c.j(0.08),w,w,w,A.c,w,A.cm,w,new B.b8(B.m(14),A.a0),w,w,w)
return B.bI(B.d(e,w,w,w,w,w,w,A.nL,w,w,w),w,new C.eB4(d,f),v)},
aWv(d,e){return this.aWw(d,e,null)},
Kj(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Kj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.pn(l,s.c,s.d),$async$Kj)
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
for(l=A.d.gaf(o.z),n=new B.f2(l,new C.eDY());n.C();){m=l.gS(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aL(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.aaq(l.charCodeAt(0)==0?l:l,r.b),$async$Kj)
case 4:l=t.a
w=5
return B.b(B.pm(l.c,l.d),$async$Kj)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Kj,v)},
In(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$In=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.pn(q,s.c,s.d),$async$In)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.aaq(A.X.aq(r.ah(),null),r.b+".json"),$async$In)
case 4:q=t.a
w=5
return B.b(B.pm(q.c,q.d),$async$In)
case 5:case 1:return B.h(u,v)}})
return B.i($async$In,v)},
b7S(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.ot()
u.tV()
w=u.c
w.toString
v=B.eh(new C.eEw(u,t),!1,null,x.z)
B.a5(w,!1).cc(v)},
HB(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$HB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oh(),$async$HB)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fPT(),$async$HB)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.ii0(s.a)
q=t.c
q.toString
w=5
return B.b(B.bV(A.av,null,new C.eyQ(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$HB)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d7(new C.eyR(t,s))
w=1
break}if(p==="split")t.d7(new C.eyS(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$HB,v)},
NM(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$NM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qB()){w=1
break}w=3
return B.b(t.oh(),$async$NM)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aRh(s,null,null),$async$NM)
case 4:r=e
if(r==null||t.gdz()==null){w=1
break}t.d7(new C.eyW(t,r))
case 1:return B.h(u,v)}})
return B.i($async$NM,v)},
b4q(d){var w=this.e
if(w==null||!C.kH(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aPX(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aRh(s,t==null?null:B.b1(t),u)},
a8Z(d){return this.bBN(d)},
bBN(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a8Z=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qB()){w=1
break}if(!t.A2()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.ffk)
w=1
break}w=3
return B.b(t.aPX(),$async$a8Z)
case 3:r=f
if(r==null||t.gdz()==null){w=1
break}t.d7(new C.eyN(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a8Z,v)},
ahz(d){return this.cpZ(d)},
cpZ(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahz=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qB()){w=1
break}if(!t.A2()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.fes)
w=1
break}w=3
return B.b(t.aPX(),$async$ahz)
case 3:r=f
if(r==null||t.gdz()==null){w=1
break}t.d7(new C.eCN(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$ahz,v)},
ccC(){var w,v,u=this
if(u.kq())return
w=new B.V(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bF(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cD1()}},
cD1(){var w,v,u,t,s,r=this.gdz()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d7(new C.eEE(this,r,(A.o.aD(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
c_E(){var w,v,u,t,s,r=this.gdz()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d7(new C.eB8(this,r,u.d))},
c4q(d){var w
if(this.kq())return!1
w=this.e
if((w==null?null:C.kH(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fMr(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.ll&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c4r(d){var w
if(this.kq())return!1
w=this.e
if((w==null?null:C.kH(w.w))!==!0)return!0
if(!this.A2())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fMr(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.ll&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
NU(d){return this.bE3(d)},
bE3(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$NU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qB()){w=1
break}if(!t.A2()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.fdi)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.aqI(p),$async$NU)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.K(x.q).f.U(D.fdX)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gI(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a7L(r)
w=1
break}t.m(new C.ezy(t,d,o))
t.ot()
$.aV.x1$.push(new C.ezz(t))
case 1:return B.h(u,v)}})
return B.i($async$NU,v)},
Wi(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Wi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oh(),$async$Wi)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bEH(),$async$Wi)
case 4:s=e
if(s==null||t.gdz()==null){w=1
break}t.d7(new C.eyK(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Wi,v)},
OE(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oh(),$async$OE)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.k7()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fPK(r),$async$OE)
case 4:q=e
if(q==null){w=1
break}t.d7(new C.eAA(s,q))
case 1:return B.h(u,v)}})
return B.i($async$OE,v)},
je(d){this.d7(new C.eyT(this,d))},
qr(d){return this.bDf(d)},
bDf(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qr=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qB()){w=1
break}m=!D.aRn.t(0,A.a.i(d))
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
case"sign_paper":t.NM()
w=1
break A
case"hd_photo":t.Wi()
w=1
break A
case"sharpen":t.OE()
w=1
break A
case"print":t.DQ()
w=1
break A
case"rotate":s=t.k7()
if(s!=null)t.d7(new C.ez1(s))
w=1
break A
case"text_box":t.aNV()
w=1
break A
case"picture":t.Wk()
w=1
break A
case"present":t.b7S()
w=1
break A
case"new_slide":t.a90()
w=1
break A
case"export_json":t.In()
w=1
break A
case"outline_share":t.Kj()
w=1
break A
case"flashcard_tool":t.vw(D.IY)
w=1
break A
case"quiz_tool":t.vw(D.IZ)
w=1
break A
case"worksheet_tool":t.vw(D.J_)
w=1
break A
case"duplicate_el":s=t.k7()
if(s==null){w=1
break A}t.d7(new C.ez2(t,s))
w=1
break A
case"delete_el":t.atw()
w=1
break A
case"bring_fwd":s=t.k7()
if(s==null||t.gdz()==null){w=1
break A}t.d7(new C.ez3(t,s))
w=1
break A
case"send_back":s=t.k7()
if(s==null||t.gdz()==null){w=1
break A}t.d7(new C.eze(t,s))
w=1
break A
case"align_left":s=t.k7()
if(s!=null)t.d7(new C.ezh(s))
w=1
break A
case"align_center":s=t.k7()
if(s!=null)t.d7(new C.ezi(s))
w=1
break A
case"align_right":s=t.k7()
if(s!=null)t.d7(new C.ezj(s))
w=1
break A
case"grayscale":case"brighten":t.OE()
w=1
break A
case"flip_h":s=t.k7()
if(s!=null)t.d7(new C.ezk(s))
w=1
break A
case"flip_v":s=t.k7()
if(s!=null)t.d7(new C.ezl(s))
w=1
break A
case"rectangle":t.pi(D.bi)
w=1
break A
case"circle":t.pi(D.eT)
w=1
break A
case"triangle":t.pi(D.k2)
w=1
break A
case"arrow":t.pi(D.DC)
w=1
break A
case"line":case"divider":t.pi(D.fD)
w=1
break A
case"word_count":r=t.gdz()
if(r==null){w=1
break A}for(q=A.d.gaf(r.z),p=new B.f2(q,new C.ezm()),o=0;p.C();){n=A.a.fq(A.a.i(q.gS(0).r),B.ag("\\s+",!0,!1,!1,!1))
o+=new B.Z(n,new C.ezn(),B.T(n).k("Z<1>")).gL(0)}t.c.K(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cF()
t.je(C.j3(A.K,!1,t.gqF().d.l(),A.aF,40,A.bp,A.u,0.18,q,"Presentation Title",0,D.mW,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cF()
t.je(C.j3(A.K,!1,t.gqF().e.l(),A.aF,22,A.bp,A.a7,0.12,q,"Subtitle goes here",0,D.dh,0.8,0.1,0.48))
w=1
break A
case"bullets":t.je(C.j3(A.bj,!0,4279310375,A.aF,20,A.bp,A.a7,0.5,C.cF(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.v0,0.8,0.1,0.22))
w=1
break A
case"numbered":t.je(C.j3(A.bj,!1,4279310375,A.aF,20,A.bp,A.a7,0.5,C.cF(),"1. First item\n2. Second item\n3. Third item",0,D.v_,0.8,0.1,0.22))
w=1
break A
case"quote":t.je(C.j3(A.K,!1,4279310375,A.aF,24,A.cD,A.a7,0.25,C.cF(),'"Insert meaningful quote here."',0,D.dh,0.8,0.1,0.3))
w=1
break A
case"citation":t.je(C.j3(A.bj,!1,4284773515,A.aF,14,A.bp,A.a7,0.1,C.cF(),"Author, Title (Year). Publisher.",0,D.v0,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.je(C.j3(A.dV,!1,4279310375,A.aF,14,A.bp,A.a7,0.08,C.cF(),C.bEJ(),0,D.dh,0.24,0.72,0.04))
w=1
break A
case"page_number":t.je(C.j3(A.dV,!1,4279310375,A.aF,13,A.bp,A.a7,0.06,C.cF(),"Page "+(t.f+1),0,D.dh,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d7(new C.ez4(t))
w=1
break A
case"footer_bar":t.d7(new C.ez5(t))
w=1
break A
case"highlight":t.d7(new C.ez6(t))
w=1
break A
case"redact":t.d7(new C.ez7(t))
w=1
break A
case"callout":t.d7(new C.ez8(t))
w=1
break A
case"checkboxes":t.je(C.j3(A.bj,!1,4279310375,A.aF,20,A.bp,A.a7,0.45,C.cF(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dh,0.8,0.1,0.2))
w=1
break A
case"table":t.je(C.j3(A.bj,!1,4279310375,A.aF,16,A.bp,A.a7,0.55,C.cF(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dh,0.8,0.1,0.18))
w=1
break A
case"memo":t.d7(new C.ez9(t))
w=1
break A
case"letter":t.je(C.j3(A.bj,!1,4279179050,A.aF,17,A.bp,A.a7,0.82,C.cF(),C.bEJ()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dh,0.8,0.1,0.08))
w=1
break A
case"agenda":t.je(C.j3(A.bj,!1,4279310375,A.aF,22,A.bp,A.U,0.76,C.cF(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.v0,0.8,0.1,0.12))
w=1
break A
case"toc":t.je(C.j3(A.bj,!1,4279310375,A.aF,18,A.bp,A.a7,0.76,C.cF(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dh,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.je(C.j3(A.bj,!1,4279310375,A.aF,16,A.bp,A.a7,0.08,C.cF(),"Signature: _________________________",0,D.dh,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.je(C.j3(A.bj,!1,4279310375,A.aF,16,A.bp,A.a7,0.08,C.cF(),"Initials: ______",0,D.dh,0.3,0.65,0.78))
w=1
break A
case"approved":t.je(C.j3(A.K,!1,4278556265,A.aF,28,A.bp,A.u,0.12,C.cF(),"APPROVED",0,D.mW,0.32,0.62,0.08))
w=1
break A
case"draft":t.je(C.j3(A.K,!1,4292617766,A.aF,28,A.bp,A.u,0.12,C.cF(),"DRAFT",0,D.dh,0.32,0.62,0.08))
w=1
break A
case"confidential":t.je(C.j3(A.K,!1,871318596,A.aF,36,A.bp,A.u,0.12,C.cF(),"CONFIDENTIAL",0,D.dh,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d7(new C.eza(t))
w=1
break A
case"progress":t.d7(new C.ezb(t))
w=1
break A
case"stars":t.je(C.j3(A.K,!1,4279310375,A.aF,36,A.bp,A.a7,0.12,C.cF(),"\u2605\u2605\u2605\u2605\u2606",0,D.qM,0.8,0.1,0.4))
w=1
break A
case"equation":t.je(C.j3(A.K,!1,4279310375,A.aF,32,A.bp,A.U,0.14,C.cF(),"y = mx + b",0,D.dh,0.8,0.1,0.38))
w=1
break A
case"timeline":t.je(C.j3(A.K,!1,4279310375,A.aF,18,A.bp,A.a7,0.2,C.cF(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.v_,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d7(new C.ezc(t))
w=1
break A
case"compare":t.d7(new C.ezd(t))
w=1
break A
case"link_text":t.je(C.j3(A.bj,!1,4280640491,A.n0,16,A.bp,A.a7,0.1,C.cF(),"https://example.com",0,D.dh,0.8,0.1,0.5))
w=1
break A
case"phone":t.je(C.j3(A.bj,!1,4279310375,A.aF,18,A.bp,A.a7,0.1,C.cF(),"(555) 123-4567",0,D.dh,0.8,0.1,0.5))
w=1
break A
case"email":t.je(C.j3(A.bj,!1,4280640491,A.aF,18,A.bp,A.a7,0.1,C.cF(),"name@email.com",0,D.dh,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d7(new C.ezf(t))
w=1
break A
case"cover_page":r=t.gdz()
if(r==null){w=1
break A}t.d7(new C.ezg(t,r))
w=1
break A
case"invoice":t.je(C.j3(A.bj,!1,4279179050,A.aF,16,A.bp,A.a7,0.84,C.cF(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dh,0.8,0.1,0.08))
w=1
break A
case"resume":t.je(C.j3(A.bj,!1,4279179050,A.aF,17,A.bp,A.a7,0.84,C.cF(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dh,0.8,0.1,0.08))
w=1
break A
case"minutes":t.je(C.j3(A.bj,!1,4279310375,A.aF,16,A.bp,A.a7,0.88,C.cF(),"MEETING MINUTES\nDate: "+C.bEJ()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dh,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.je(C.j3(A.bj,!1,4279310375,A.aF,17,A.bp,A.a7,0.88,C.cF(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dh,0.8,0.1,0.06))
w=1
break A
case"rubric":t.je(C.j3(A.bj,!1,4279310375,A.aF,15,A.bp,A.a7,0.8,C.cF(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dh,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qr,v)},
cwz(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.f5y.t(0,this.z)},
cwy(d){if(this.k7()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b9z(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.co,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bz
u=B.J(u,A.r,o&&e?2:1)
t=C.ihQ(d)
s=o?12:18
r=o?A.H:A.cR
if(o)if(e)q=f
else q=g?A.ac:A.al
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.P(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ap(p,B.p(p,D.Pa,A.f,p,p,D.EX,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fu,B.aA(p,new B.an(A.a_,p,A.ab,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a3),p)},
bPA(d){var w,v=null,u=this.k7()
if(u==null)return A.bJ
w=B.a([A.ad,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aC:A.al,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bm],x.p)
A.d.v(w,new B.N(D.RK,new C.eAz(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.i,0,v,v)},
vw(d){return this.bBV(d)},
bBV(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vw=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aRh.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.oh(),$async$vw)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d7(new C.eyU(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vw,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.f4f
w=h.e
if(w==null)return h.bFO()
v=h.gdz()
v.toString
u=h.c
u.toString
t=B.Q(u).ax.a===A.J
u=h.c
u.toString
s=x.w
r=B.aG(u,A.bZ,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aG(u,A.eN,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.c2:D.bgT
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gSP()}else j=!1
if(j)k.push(new C.a8f(h.a.c,!1,h.e.gbbP(),h.gccz(),g))
else if(s&&h.e!=null&&!h.kq()&&C.cjD(h.e.w)){j=h.a
k.push(new C.a8f(j.c,j.d,g,h.gcdI(),g))}if(s)k.push(h.bPv(w,t,r))
if(s&&h.kq()){w=t?A.fN:A.kH
j=B.m(14)
i=B.J(A.bl.j(0.35),A.r,1)
k.push(B.p(g,B.B(B.a([D.bV6,A.ad,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fN,g,g,g,g,g,g,g,g,12,g,g,A.U,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.i,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.yl,A.iq,g,g,g))}w=!n
if(w&&!h.kq())k.push(h.c5n(t,r))
if(w&&h.kq())k.push(h.cDZ(t))
if(r&&h.k7()!=null&&w&&!h.kq())k.push(h.c5i(t))
j=B.a([],l)
if(q&&w)j.push(new B.a4(132,g,h.b7h(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a4(g,72,h.b7h(t,!1),g))
i.push(B.E(new B.bM(A.b0,g,g,h.bH7(v,t,!s||p),g),1))
if(h.cwz(r)&&u&&s&&!h.kq())i.push(h.ccl(v,t,r))
j.push(B.E(B.x(i,A.m,g,A.e,A.i,0,A.p),1))
if(q&&!h.kq()&&h.cwy(!1))j.push(new B.a4(240,g,h.bSl(t),g))
k.push(B.E(B.B(j,A.ak,g,A.e,A.i,0,g,g),1))
if(u&&s)k.push(new B.a4(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.m,g,A.e,A.i,0,A.p)],l)
if(o&&r)w.push(h.c5j(t))
return B.c6(g,m,B.bn(!1,new B.an(A.a_,g,A.ab,A.t,w,g),!0,!1,A.af,!0,!0),g,!1,!1,g,!1)},
bFO(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.Q(p).ax.a===A.J
p=w?A.c2:A.bN
v=r.a.e
u=r.cbt(A.bl,A.qs,new C.ezC(r),r.gcfS(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.E(r.aND(A.bl,A.hQ,"Blank Presentation",new C.ezD(r)),1),A.as,B.E(r.aND(A.b1,A.uE,"Class Template",new C.ezE(r)),1)],t),A.m,q,A.e,A.i,0,q,q)
u=B.a([u,A.bx,s,A.n_,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aC:A.al,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ae],t)
t=r.d
if(t.length===0)u.push(r.bCI(w))
else{t=new B.i4(t,B.T(t).k("i4<1>"))
A.d.v(u,t.gdW(t).dH(0,new C.ezF(r,w),x.l))}return B.c6(q,p,B.bn(!1,B.cl(u,q,q,new B.P(18,12,18,v),q,q,A.ah,!1),!0,!1,A.af,!0,!0),q,!1,!1,q,q)},
bNF(){this.m(new C.eAf(this))
var w=this.c
w.toString
if(B.aG(w,A.bZ,x.w).w.a.a<900){w=$.aV.al$.d.c
if(w!=null)w.jm()}},
agh(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.k7()==null){w=1
break}s=t.c
s.toString
s=B.Q(s)
r=t.c
r.toString
w=3
return B.b(B.bV(A.L,null,new C.eCq(t,s.ax.a===A.J),r,!0,!0,!0,null,!1,!1,x.H),$async$agh)
case 3:case 1:return B.h(u,v)}})
return B.i($async$agh,v)},
B0(d,e){return this.cwV(d,e)},
cwV(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$B0=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.i2(D.Ya,!0,"Dismiss",j,new C.eDZ(),new C.eE_(d,e),A.iC,!0,x.N),$async$B0)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ajE()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gSP()){r.ajE()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aRi(d),$async$B0)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aQJ(j,q,d.b),$async$B0)
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
return B.b(r.Fv(d,!1),$async$B0)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.i2(D.Ya,!0,"Dismiss",j,new C.eE0(),new C.eE1(d),A.a2,!0,x.y),$async$B0)
case 20:if(g===!0)r.Op(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.ahj("Rename presentation",d.b),$async$B0)
case 24:l=g
if(l!=null)r.crb(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ah()
k.n(0,"id",C.cF())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eE2(r,k))
r.pB()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$B0,v)},
b2n(d,e){var w=null
return B.bN(!1,D.fPO,w,w,!0,w,w,w,e,w,B.fw(w,w,w,w,w,w,w,w,w,w,w,A.bl,w,w,w,A.aw,w,A.lF,w,w,w,w,w,A.kr,w,w))},
bCI(d){var w=this.fy
w===$&&B.c()
return B.cb(w,new C.eyZ(this,d),null)},
bLL(d,e,f){var w=new B.N(B.a(d.split(" \u2022 "),x.s),new C.eA3(),x.dv).c_(0,new C.eA4()),v=B.C(w,w.$ti.k("M.E"))
return new B.D(G.ake,this.aOd(v,e,new C.eA5(),f),null)},
aOd(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.eg)
t=e.j(g?0.14:0.1)
s=new B.aP(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ac:A.bs,n,n,n,10),A.qU],m))}p=d[v]
o=g?A.c.j(0.85):A.aK
q.push(new B.y(p,n,new B.F(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.ca(A.aM,A.e,A.P,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bH(r,r,r,r),new B.bh(s,s,s,s),n,n,A.n),n,n,n,n,A.mL,n,n,n))
A.d.v(l,u)}return B.eO(A.a5,B.B(l,A.m,n,A.e,A.P,0,n,n),A.f,A.e3)},
bCG(d,e,f){return this.aOd(d,e,null,f)},
bLN(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dpx
else if(v==="hati_kuhoweya")w=D.daa
else{if(v==="hati_kiapo_uongozi")v=D.cWZ
else v=C.kH(v)?D.d3H:A.Rk
w=v}v=this.fy
v===$&&B.c()
return B.cb(v,new C.eA8(this,f,d,e,w),null)},
c5j(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.k7()
if(i==null||i.b!==D.cV)return A.bJ
w=k.Xe(i)
v=k.auy(i)
u=A.w.j(0.55)
t=x.p
s=B.bn(!1,new B.D(A.BS,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b2,B.bN(!1,D.fLf,j,j,!0,j,j,j,new C.eBz(k),j,j)],t),A.m,j,A.e,A.i,0,j,j),j),!0,!1,A.af,!0,!0)
r=d?A.av:A.c
q=B.m(18)
p=B.J(A.bl.j(0.45),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.h7,B.c4(new B.D(A.eS,B.aM(j,A.Y,!0,j,!0,A.t,j,B.aN(),w,A.bl,j,j,j,j,2,D.c0d,A.y,!0,j,!0,j,!0,v,A.aj,j,j,j,j,j,A.x0,j,j,j,j,j,j,!1,"\u2022",j,new C.eBA(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.aa,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.N,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a4,A.Ai,A.an,j,A.UF,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bh),j),1)
q=B.m(16)
p=d?A.bo:A.c
o=B.J(d?A.aK:A.aN,A.r,1)
n=B.E(B.ch(B.B(B.a([k.ul(G.Oe,j,new C.eBB(k,i),d),k.ul(G.a15,j,new C.eBC(k,i),d),k.ul(I.aoB,j,new C.eBD(k,i),d),k.ul(I.a1Q,j,new C.eBE(k,i),d),k.ul(k.bCE(i.as),j,new C.eBF(k,i),d),k.ul(D.apJ,j,new C.eBG(k,i),d),k.ul(D.apI,j,new C.eBH(k,i),d)],t),A.m,j,A.e,A.i,0,j,j),A.t,j,A.y,j,j,j,j,A.aM),1)
m=A.k.N(i.w)
return B.bS(0,B.aI(!1,A.a2,!0,j,B.x(B.a([s,r,new B.D(H.akn,B.p(j,B.B(B.a([n,A.ad,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aC:A.al,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.db],t),A.m,j,A.e,A.i,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lG,j,j,j),j)],t),A.m,j,A.e,A.i,0,A.p),A.f,u,0,j,j,j,j,j,A.ai),0,0,0)},
c5i(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.k7()
if(m==null)return A.bJ
w=m.b
v=w===D.cV
u=B.m(18)
t=x.O
t=d?B.a([A.bo,A.N],t):B.a([A.c,A.aP],t)
s=B.J(d?A.aK:A.aN,A.r,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cy,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b5W(A.iY,"Edit",new C.eBk(o,m),d,!0))
if(w===D.lN)p.push(o.b5W(A.Hr,"Shape & ring",new C.eBl(o),d,!0))
p.push(o.ul(A.CE,"Format",new C.eBm(o),d))
if(v)A.d.v(p,B.a([o.ul(G.Oe,n,new C.eBn(o,m),d),o.ul(D.apJ,n,new C.eBo(o,m),d),o.ul(D.apI,n,new C.eBp(o,m),d)],q))
p.push(A.b2)
p.push(o.cuL(A.eb,n,o.gaSg(),d,!0))
p.push(o.ul(A.hA,"Done",new C.eBq(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a9(A.a5,A.a8,A.x,t,n,n),A.n),n,n,n,A.BR,A.lG,n,n,n)},
bCE(d){switch(d.a){case 2:return D.a1N
case 1:case 5:return D.a1P
default:return D.a1O}},
c6d(d){switch(d.a){case 0:case 4:return A.K
case 2:return A.dV
default:return A.bj}},
aAY(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.ax
else if(h)w=A.c
else{v=g?A.ac:A.aK
w=v}v=B.m(12)
u=B.m(12)
t=h?K.HK:n
if(h)s=n
else s=g?A.c.j(0.06):A.bN
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.eg,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.qi,B.aI(!1,A.a2,!0,n,B.aO(!1,v,!1,B.eK(new B.D(new B.P(q,8,q,8),B.B(o,A.m,n,A.e,A.P,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai),n)},
ul(d,e,f,g){return this.aAY(d,e,f,g,!1,!1)},
b5W(d,e,f,g,h){return this.aAY(d,e,f,g,h,!1)},
cuL(d,e,f,g,h){return this.aAY(d,e,f,g,!1,h)},
bPv(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bo,A.N],m):B.a([A.c,A.nb],m)
w=B.J(e?A.aK:A.nZ,A.r,1.2)
v=B.a([new B.ac(0,A.G,A.bl.j(e?0.18:0.1),A.cy,18)],x.V)
u=p.a3i(A.eK,"Back",p.gbIS(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a1,o,o,o,B.l(o,o,e?A.c:A.N,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.db,B.E(B.B(B.a([new B.dr(1,A.cn,t,o),A.ad,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.bU:A.al,o,o,o,o,o,o,o,o,11,o,o,A.U,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.u2,o,A.e,A.i,0,A.cZ,o),1)],q)
if(!p.kq()){u=p.a3i(A.pi,"Undo",p.ax.length===0?o:p.gcEz(),e)
A.d.v(r,B.a([u,p.a3i(D.bOw,"Redo",p.ay.length===0?o:p.gcpV(),e)],q))}r.push(p.a3i(A.yR,"PDF",new C.eAs(p),e))
r.push(p.a3i(A.hR,"Download as video",new C.eAt(p),e))
if(!p.kq())r.push(B.Cd(o,o,B.X(A.on,e?A.ac:A.bs,o,o,o,o),new C.eAu(p),A.I,new C.eAv(p),A.af,"More",x.N))
r.push(A.db)
r.push(B.aI(!1,A.a2,!0,o,B.aO(!1,B.m(14),!0,B.eK(D.enL,o,new B.o(o,o,o,B.m(14),o,K.HK,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaBN(),o,o,o,o,o,o,o),A.f,A.L,0,o,o,o,o,o,A.ai))
return B.p(o,B.B(r,A.m,o,A.e,A.i,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a9(A.ay,A.aE,A.x,m,o,o),A.n),o,o,o,D.bz7,D.bEu,o,o,o)},
cDZ(d){var w=this,v=null,u=B.m(18),t=d?A.av.j(0.92):A.c.j(0.96),s=B.J(d?A.cr:A.aN,A.r,1)
return B.p(v,B.ch(B.B(B.a([w.j_(A.uC,"Print",new C.eEK(w),d),w.j_(A.yR,"Download PDF",new C.eEL(w),d),w.j_(A.qz,"Present",w.gaBN(),d)],x.p),A.m,v,A.e,A.i,0,v,v),A.t,v,A.y,v,v,v,v,A.aM),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.yl,G.am_,v,v,v)},
a3i(d,e,f,g){var w,v=null
if(f==null)w=g?A.aX:A.dm
else w=g?A.ac:A.aK
return B.aH(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cc)},
c5n(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.av.j(0.92):A.c.j(0.96)
u=B.J(d?A.cr:A.aN,A.r,1)
t=x.f0
t=B.C(new B.N(p,new C.eBK(r,d),t),t.k("ak.E"))
t.push(new B.D(A_.alF,new B.ff(new C.eBL(r),q),q))
A.d.v(t,w?B.a([new B.D(S.wa,r.ahY(A.kn,"Ending celebration",r.gcg4(),d),q),new B.D(S.wa,r.ahY(A.Hr,"Logo ring & frame",r.gcgM(),d),q)],x.p):A.f0)
A.d.v(t,w?B.a([new B.D(S.wa,r.ahY(A.ma,"Look and feel",r.gcgN(),d),q),new B.D(S.wa,r.ahY(A.pl,"Edit this slide's text",r.gchj(),d),q)],x.p):A.f0)
t.push(new B.D(S.wa,B.he(B.aA(q,B.p(q,D.f3F,A.f,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ac(0,A.G,N.lB.j(0.4),A.I,10)],x.V),D.arK,A.n),q,34,q,q,A.eY,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eBM(r),q,q,q,q,q,q,!1,A.a3),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.ch(B.B(t,A.m,q,A.e,A.i,0,q,q),A.t,q,A.y,q,D.bEY,q,q,A.aM)
s=e?8:10
return B.p(q,B.x(B.a([t,B.ch(r.csk(d),A.t,q,A.y,q,new B.P(8,2,8,s),q,q,A.aM)],x.p),A.ak,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.yl,q,q,q,q)},
csk(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.diG[v]
u.a=null
s=u.a=t.b
w.push(e.lQ(e.cu8(s),t.a,new C.eD8(u,e),a3,D.aRh.t(0,s)))}w.push(e.j_(A.lc,"Notes Slide",new C.eD9(e),a3))
w.push(e.lQ(A.Hq,"Quiz",new C.eDa(e),a3,!0))
w.push(e.lQ(P.H_,"Worksheet",new C.eDl(e),a3,!0))
w.push(e.lQ(W.Hu,"Flashcard",new C.eDw(e),a3,!0))
w.push(e.lQ(A.P1,"Lab Report",new C.eDH(e),a3,!0))
w.push(e.lQ(A.qv,"Rubric",new C.eDO(e),a3,!0))
w.push(e.lQ(A.pf,"Minutes",new C.eDP(e),a3,!0))
w.push(e.lQ(A.om,"Syllabus",new C.eDQ(e),a3,!0))
w.push(e.lQ(A.a2n,"Timeline",new C.eDR(e),a3,!0))
return B.B(w,A.m,d,A.e,A.i,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.dk1[v]
w.push(e.lQ(r.b,r.c,new C.eDS(e,r),a3,!D.aRn.t(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.i,0,d,d)
case"Insert":return B.B(B.a([e.j_(A.wx,a0,e.gaNU(),a3),e.j_(A.uy,"Picture",new C.eDb(e),a3),e.j_(A.z1,"Bio link",new C.eDc(e),a3),e.j_(A.a2m,"Table",new C.eDd(e),a3),e.j_(A.P5,"Sticky",new C.eDe(e),a3),e.j_(A.ux,"Divider",new C.eDf(e),a3),e.j_(A.CF,"Header",new C.eDg(e),a3),e.lQ(A5.us,"Rectangle",new C.eDh(e),a3,!0),e.lQ(A.qp,"Circle",new C.eDi(e),a3,!0),e.lQ(A.a1D,"Triangle",new C.eDj(e),a3,!0),e.lQ(A.jA,"Arrow",new C.eDk(e),a3,!0),e.lQ(D.bMZ,"Parallelogram",new C.eDm(e),a3,!0),e.lQ(D.bPs,"Hexagon",new C.eDn(e),a3,!0),e.lQ(A.ux,"Line",new C.eDo(e),a3,!0),e.lQ(A.yR,"PDF",new C.eDp(e),a3,!0),e.lQ(N.a2x,"Signature",new C.eDq(e),a3,!0),e.j_(A4.Cq,"Quote",new C.eDr(e),a3),e.j_(D.a1d,a1,new C.eDs(e),a3)],x.p),A.m,d,A.e,A.i,0,d,d)
case"Design":w=e.c
w.toString
w=B.aG(w,A.bZ,x.w).w
u=x.p
t=B.B(B.a([e.aOL("Wide 16:9",D.DA,a3),e.aOL("Short 9:16",D.oF,a3),new B.D(A.fu,B.mY(D.bRE,d,D.fHv,d,new C.eDt(e),d,d,d,d),d)],u),A.m,d,A.e,A.i,0,d,d)
q=B.B(B.a([e.bJ6("This slide",!e.Q,a3,new C.eDu(e)),A.bm,e.aQX("All slides",e.Q,a3,new C.eDv(e),!0)],u),A.m,d,A.e,A.i,0,d,d)
p=e.bJ7()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.bU:A.bM,d,d,d,d,d,d,d,d,10,d,d,A.a7,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aC:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.N(D.a4u,new C.eDx(e),n),n.k("ak.E"))
n=B.ch(B.B(n,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aM)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aC:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.dl2[v]
j=B.b1(k)
i=new B.ay(k===4294967295?A.dm:A.aX,1.5,A.r,-1)
l.push(new B.D(A.fu,B.aA(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bH(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eDy(e,k),d,d,d,d,d,d,!1,A.a3),d))}l=B.ch(B.B(l,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aM)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aC:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bG0()
g=B.T(h).k("N<1,D>")
h=B.C(new B.N(h,new C.eDz(e,a3),g),g.k("ak.E"))
return new B.a4(w.a.a-20,d,B.x(B.a([t,A.Q,q,A.am,p,A.Q,o,A.au,n,A.Q,m,A.au,l,A.Q,j,A.au,B.ch(B.B(h,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aM),A.am,e.c24(a3)],u),A.E,d,A.e,A.P,0,A.p),d)
case"Transitions":f=e.k7()
w=e.c
w.toString
w=B.aG(w,A.bZ,x.w).w
u=new C.eD7(e)
t=new C.eDT(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aC:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.RK,f.dy,new C.eDA(e,u,f),A.b1)
A.d.v(p,B.a([o,A.au,n,A.Q,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aC:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.au],q))}q=e.gdz()
q=q==null?d:q.r
p.push(t.$4(D.RK,q,new C.eDB(e,u),A.bl))
return new B.a4(w.a.a-20,d,B.x(p,A.E,d,A.e,A.P,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.j_(A.lc,w,new C.eDC(e),a3),e.j_(A.uC,"Print deck",new C.eDD(e),a3),e.lQ(D.anF,"Export JSON",new C.eDE(e),a3,!0),e.j_(A.fQ,"Duplicate Slide",e.gaT9(),a3),e.j_(A.eb,a2,e.gaSh(),a3),e.cyg(a3)],x.p),A.m,d,A.e,A.i,0,d,d)
case"Home":default:f=e.k7()
w=x.p
u=B.a([e.j_(D.a1d,a1,new C.eDF(e),a3),e.j_(A.fQ,"Duplicate",e.gaT9(),a3),e.j_(A.eb,a2,e.gaSh(),a3),e.j_(A.qz,"Present",e.gaBN(),a3),e.j_(A.CC,a0,e.gaNU(),a3),e.j_(A.Cu,"Fit Text",new C.eDG(e),a3),e.j_(A.yR,"Download PDF",new C.eDI(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.j_(A.jE,"Transfer",new C.eDJ(e),a3))
if(f!=null){w=B.a([A.ad,e.j_(G.Oe,"Bold",new C.eDK(e,f),a3),e.j_(G.a15,"Italic",new C.eDL(e,f),a3),e.j_(G.ang,"Underline",new C.eDM(e,f),a3),e.j_(Ag.Of,"Bullets",new C.eDN(e,f),a3),e.bS4(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bPA(a3))
w.push(e.j_(D.bLH,"Delete",e.gaSg(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.i,0,d,d)}},
aOL(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.oF
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.aap,t,t,t)],v)
if(w)A.d.v(u,B.a([A.db,D.bQQ],v))
return new B.D(A.fu,B.ju(t,t,t,B.B(u,A.m,t,A.e,A.P,0,t,t),t,new C.ezx(this,w,e),s===e,A.bl.j(0.25),t,t,t),t)},
cyg(d){var w,v,u,t,s,r=this,q=null,p=r.gdz()
if(p==null)return A.bJ
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.J(d?A.aX:A.cq,A.r,1)
u=B.m(8)
t=B.X(A.GY,d?A.aC:A.al,q,q,q,14)
s=B.aH(q,q,q,q,D.aqJ,q,q,q,new C.eEf(r,p),q,q,q,q,q,A.cc)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bk,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.aqA,q,q,q,new C.eEg(r,p),q,q,q,q,q,A.cc)],x.p),A.m,q,A.e,A.P,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.GE,A.mK,q,q,q)},
cu8(d){switch(d.a){case 6:return W.Hu
case 7:return A.Hq
case 8:return P.H_
case 4:return A.CF
default:return A.lc}},
bS4(d,e){var w=null,v=B.J(e?A.aX:A.cq,A.r,1),u=B.m(8),t=B.aH(w,w,w,w,D.aqJ,w,w,w,new C.eAF(this,d),w,w,w,w,w,A.cc),s=A.k.N(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bk,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.aqA,w,w,w,new C.eAG(this,d),w,w,w,w,w,A.cc)],x.p),A.m,w,A.e,A.P,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.uj,A.mK,w,w,w)},
c24(d){var w=null
return B.Cd(B.DI(B.X(A7.a1g,d?A.ac:A.bs,w,w,w,16),w,w,D.fNa,w,w,w),w,w,new C.eBc(),A.I,this.gbDl(),A.ck,"Slide layout",x.fO)},
lQ(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bN,s=B.J(g?A.dr:A.aN,A.r,1),r=x.p,q=B.a([B.X(d,g?A.du:A.bl,w,w,w,18)],r)
if(h)q.push(B.ap(w,B.p(w,D.Pa,A.f,w,w,D.EX,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fu,B.aI(!1,A.a2,!0,w,B.aO(!1,v,!0,B.eK(new B.D(A.h7,B.x(B.a([new B.an(A.a_,w,A.ab,A.f,q,w),A.cS,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aR:A.bs,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.P,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai),w)},
j_(d,e,f,g){return this.lQ(d,e,f,g,!1)},
b7h(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aM
v=B.hR(t,new C.eEr(u,s,e,d),s.r.length,A.ck,t,w,new C.eEs(e),!1)
s=d?A.av:A.bN
w=B.a([],x.p)
if(e&&!u.kq())w.push(new B.D(A.ck,B.I9(E.aqX,new C.eEt(u),B.nP(t,A.bl,t,t,t,t,t,t,t,t,t,t,E.aS0,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.x(w,A.m,t,A.e,A.i,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bH7(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.oF?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.P(u,u,u,u),new B.bM(A.b0,v,v,new B.fH(w,B.aA(v,B.cu(new C.ezW(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.ezX(this),v,v,v,v,v,v,!1,A.a3),v),v),v)},
bH9(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kH(a9.w))===!0,b1=b0&&C.fMr(b3),b2=b0&&b3.b===D.ll&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.kq())v=!b0||a7.c4r(b3)
else v=!1
if(!a7.kq())u=!b0||a7.c4q(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.cd:A.bl
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.hb_(b3))o=a8
else if(p&&!a7.kq())o=a7.gccB()
else o=a7.kq()?a8:new C.ezK(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c6:A.iF
i=w&&C.hb_(b3)&&a7.A2()?new C.ezL(a7,b3):a8
h=v&&b3.b===D.cV?new C.ezM(a7,b3):a8
g=u?new C.ezN(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bf
else e=q?A.c3:r
else e=A.L
e=B.J(e,A.r,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.c3.j(0.08)
else a0=b3.b===D.ll?A.L:a8
if(b1){a1=a7.kq()?"":"Tap to sign"
a1=B.as(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.c3.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.U,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aG(a1,A.bZ,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.A2()
a3=b3.b===D.cV
a4=a3?a7.Xe(b3):a8
a5=a3?a7.auy(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aG(a6,A.bZ,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.ezO(a7,b3):a8
a3=v&&a3?new C.ezP(a7,b3):a8
a6=C.b2z(q,a4,a1,b3,a5,a2,a3,new C.ezQ(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ap(-4,B.aA(a8,B.p(a8,D.bTF,A.f,a8,a8,new B.o(r,a8,B.J(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ezR(a7,b3,b4,b5),a8,a8,new C.ezS(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a3),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kq()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ap(a8,B.aA(a8,B.p(a8,D.bUm,A.f,a8,a8,new B.o(A.dn,a8,B.J(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gc_D(),a8,a8,a8,a8,a8,a8,!1,A.a3),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kq()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ap(a8,B.aA(a8,B.p(a8,D.bW_,A.f,a8,a8,new B.o(A.c3,a8,B.J(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ezT(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a3),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cV)if(a7.w!==a9){e=a7.c
e.toString
e=B.aG(e,A.bZ,x.w).w.a.a<900}if(e)d.push(B.ap(-28,B.as(B.aA(a8,B.p(a8,D.fWg,A.f,a8,a8,new B.o(A.bl,a8,a8,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.I,8)],x.V),a8,A.n),a8,a8,a8,a8,A.l8,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ezU(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a3),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ap(a8,B.aA(j,B.eM(A.A,f,new B.an(A.a_,a8,A.ab,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a3),k*b5,new B.bR("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aQX(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bl.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.J(e?A.bl:A.bz,A.r,1)
if(e)t=A.bl
else t=f?A.aC:A.al
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.db,B.p(r,D.Pa,A.f,r,r,D.EX,r,12,r,r,r,r,r,12)],s))
return B.aA(r,B.p(r,B.B(t,A.m,r,A.e,A.P,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h5,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a3)},
bJ6(d,e,f,g){return this.aQX(d,e,f,g,!1)},
ccl(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
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
t=f?A.xx:l
if(f)s=new B.bH(new B.ay(e?A.bz:A.aN,1,A.r,-1),A.a0,A.a0,A.a0)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.t5,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ac:A.bs,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b2,m.b2n(e,new C.eBO(m))],q),A.m,l,A.e,A.i,0,l,l)
o=B.l(l,l,e?A.c:A.aK,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.bU:A.bM,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.x(B.a([p,A.am,B.E(B.aM(l,A.Y,!1,l,!0,A.t,l,B.aN(),k,l,l,l,l,l,2,B.br(l,new B.b5(4,B.m(10),A.dk),l,A.bT,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eBP(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.aa,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a4,l,A.an,l,l,l,l),1)],q),A.ak,l,A.e,A.i,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.P(12,w,12,v),l,l,l)},
aUr(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.k7()
if(a2==null)return A.bJ
w=new C.eAT(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.E(1-a2.c,0.06,1)
t=A.k.E(1-a2.d,0.06,1)
s=A.k.E(1-a2.e,0.01,1)
r=A.k.E(1-a2.f,0.01,1)
q=a5?A.dS:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.N,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b2,a0.b2n(a3,a0.gbNE())],p),A.m,a1,A.e,A.i,0,a1,a1))
if(n)o.push(A.W)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aC:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.fI0,B.E(B.kR(a1,a1,a1,u,0.05,new C.eAU(w,a2),A.k.E(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
o.push(B.B(B.a([D.fUD,B.E(B.kR(a1,a1,a1,t,0.05,new C.eAV(w,a2),A.k.E(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
n=a2.b
m=n===D.cV
if(m)o.push(B.B(B.a([D.fBz,B.E(B.kR(a1,a1,a1,96,10,new C.eAW(w,a2),A.k.E(a2.w,10,96)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
l=n===D.lN
if(l||n===D.ll||n===D.T5)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aC:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.fNX,B.E(B.kR(a1,a1,a1,s,0,new C.eAX(w,a2),A.k.E(a2.c,0,s)),1)],p),A.m,a1,A.e,A.i,0,a1,a1),B.B(B.a([D.fVY,B.E(B.kR(a1,a1,a1,r,0,new C.eAY(w,a2),A.k.E(a2.d,0,r)),1)],p),A.m,a1,A.e,A.i,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aC:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.CY[j]
i.a=null
g=h.a
i.a=g
k.push(B.ju(a1,a1,a1,new B.y(h.b,a1,A.pF,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.eAZ(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bY(A.bG,k,A.br,a1,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aC:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.CR[j]
f.a=null
g=e.a
f.a=g
h.push(B.ju(a1,a1,a1,new B.y(e.b,a1,A.pF,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.eB_(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.Q,l,A.am,k,A.Q,i,A.am,B.bY(A.bG,h,A.br,a1,6,6)],p))}o.push(A.Q)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aC:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.N(v,new C.eB0(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.am,B.bY(A.bG,l,A.br,a1,6,6),A.ae,B.hnf(new C.eB1(w,a2),D.cxM,B.eD([a2.as],k),!0,a1,k)],p))}if(n===D.fb){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aC:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.N(v,new C.eB2(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bY(A.bG,m,A.br,a1,0,6)],p))}o.push(A.ae)
o.push(B.di(D.bVM,D.fQ_,new C.eB3(a0,a5),B.bo(A.bB,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cl(o,a1,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cr:A.c
p=a4?A.xx:a1
if(a4)o=new B.bH(new B.ay(a3?A.bz:A.aN,1,A.r,-1),A.a0,A.a0,A.a0)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.t5,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.Gn,a1,a1,a1)},
bSl(d){return this.aUr(d,!1,!1,null)},
cbt(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.cb(p,new C.eB6(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.fqY,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bc,B.E(B.x(B.a([w,A.bF,A.cS,r.bCG(D.d0W,d,B.Q(v).ax.a===A.J)],u),A.E,q,A.e,A.i,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ad,B.dQ(B.he(B.aI(!1,A.a2,!0,q,B.aO(!1,q,!0,B.eK(D.f9E,q,new B.o(q,q,B.J(A.c.j(0.55),A.r,1.3),q,B.a([new B.ac(0,A.G,A.c3.j(0.4),A.en,8)],p),D.arP,A.a6),q,q,q),A.cO,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.ai),q,"Documents (Hati)",q,q),A.I)],u))
t=B.B(v,A.m,q,A.e,A.i,0,q,q)
w=r.c
w.toString
s=B.Q(w).ax.a===A.J
w=B.m(20)
v=x.O
v=s?B.a([D.bd_,D.bds],v):B.a([A.c,A.kH],v)
u=B.J(d.j(s?0.45:0.25),A.r,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cy,14)],p),new B.a9(A.ay,A.aE,A.x,v,q,q),A.n),q,q,q,q,A.bT,q,q,q)},
aND(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.cb(w,new C.eyG(this,g,d,e,f),null)},
ahj(d,e){return this.co9(d,e)},
co9(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$ahj=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.ax()
q=new B.au(new B.ba(e,A.b4,A.aO),r)
p=t.c
p.toString
w=3
return B.b(B.ck(null,null,!0,null,new C.eCL(d,q),p,null,!0,!0,x.N),$async$ahj)
case 3:s=g
q.T$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ahj,v)},
Qo(d){var w=d.bU()
return""+B.bL(w)+"/"+B.bW(w)+"/"+B.bC(w)}}
C.afG.prototype={}
C.aA_.prototype={
R(){return new C.bec(null,null)}}
C.bec.prototype={
gcAB(){var w,v=this.a.c,u=v.f.bU(),t=""+B.bL(u)+"/"+B.bW(u)+"/"+B.bC(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Z(){var w,v=this,u=null
v.a2()
w=B.bm(u,A.qf,u,1,u,v)
w.fn(0,!0)
v.d!==$&&B.aQ()
v.d=w
w=B.bm(u,D.bxB,u,1,u,v)
w.cq(0)
v.e!==$&&B.aQ()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.bw3()},
Jj(d){var w=0.12+d*0.09,v=A.k.E(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cu.aw(0,new B.hY(w,v,A.cu).aw(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.as(new B.D(D.bDh,B.cb(new B.h8(B.a([u,w],x.dS)),new C.d7c(this),v),v),v,v,v)}}
C.ber.prototype={
B(d){var w=null,v=B.m(22),u=B.J(A.aK,A.r,1),t=x.p
return B.as(new B.D(D.bDy,B.aI(!1,A.a2,!0,w,B.p(w,B.bx(B.m(22),B.x(B.a([new B.D(D.bCJ,B.x(B.a([B.p(w,D.bUs,A.f,w,w,new B.o(A.ax.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aQ,D.fSb,A.W,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fsc,A.K,w,w)],t),A.m,w,A.e,A.i,0,A.p),w),A.dT,D.bwE,B.B(B.a([B.E(B.bN(!1,D.fGc,w,w,!0,w,w,w,new C.d7A(d),w,B.fw(w,w,w,w,w,w,w,w,w,w,w,A.bM,w,w,w,w,w,A.ns,w,A.oJ,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bo,w,w,w,48,w,w,w,w,w,1),B.E(B.bN(!1,D.fLA,w,w,!0,w,w,w,new C.d7B(d),w,B.fw(w,w,w,w,w,w,w,w,w,w,w,A.ax,w,w,w,w,w,A.ns,w,A.oJ,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.i,0,w,w)],t),A.m,w,A.e,A.P,0,A.p),A.ap),A.f,w,A9.WW,new B.o(A.av,w,u,v,D.d1k,w,A.n),w,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai),w),w,w,w)}}
C.Ka.prototype={
R(){return new C.beb()}}
C.beb.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.m(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.J(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dC,8)],t)
s=m.j(l?0.16:0.14)
r=B.m(9)
q=p.a
r=B.p(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dQ(B.db(B.aA(o,B.vL(B.cY(o,B.B(B.a([r,A.as,new B.dr(1,A.cn,B.d(q,o,2,A.a1,o,o,o,B.l(o,o,l?A.eO:A.c,o,o,o,o,o,o,o,o,13,o,o,A.U,o,1.2,!0,o,o,o,o,o,o,o,o),A.K,o,o),o)],x.p),A.m,o,A.b9,A.P,0,o,o),o,o,A.b5,new B.o(n,o,u,v,t,o,A.n),A.eH,o,o,o,o,A.nt,o,o,1/0),A.cu,A.jg,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d77(p,d),new C.d78(p),new C.d79(p),new C.d7a(p),o,o,o,!1,A.a3),k),new B.t(0,(1-k)*16))}}
C.Q1.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.J(A.c.j(0.5),A.r,1.2),p=x.p
return B.aI(!1,A.a2,!0,t,B.aO(!1,s,!0,new B.D(A.eS,B.B(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a9(A.ay,A.aE,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.es,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.n3,v,v,v),A.bF,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.E,v,A.e,A.i,0,A.p),1),B.X(A.eE,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ai)}}
C.a02.prototype={
R(){return new C.aFy(D.dh,null,null)}}
C.aFy.prototype={
gZv(){var w,v=this,u=v.w
if(u===$){w=B.bm(null,D.bxa,null,1,null,v)
v.w!==$&&B.bF()
v.w=w
u=w}return u},
b7L(d){if(!this.a.c.ay)return
this.x=d
this.gZv().iv(0,0)},
Z(){var w,v=this
v.a2()
w=v.a
v.d=A.o.E(w.d,0,w.c.r.length-1)
C.awN(D.fg6)
C.ieI()
v.RP()},
q(){var w=this,v=w.f
if(v!=null)v.a4(0)
w.gZv().q()
v=w.z
if(v!=null)v.a4(0)
C.awN(D.fg7)
C.ieL()
w.by9()},
cDo(){B.jQ()
this.m(new C.eFq())
var w=this.c.K(x.q).f
w.a5w()
if($.bm8)w.U(D.fcY)},
RP(){var w,v=this,u=v.f
if(u!=null)u.a4(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cG(B.dy(0,0,0,0,0,A.o.E(C.hlq(u,w),1,120)),new C.eFg(v))},
cD3(){var w,v=this
v.m(new C.eFp(v))
if(v.r)v.RP()
else{w=v.f
if(w!=null)w.a4(0)}},
gaWn(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cx0(){var w=this,v=w.f
if(v!=null)v.a4(0)
w.m(new C.eFh(w))
v=w.z
if(v!=null)v.a4(0)
if(w.a.c.ch&&w.r)w.z=B.cG(A.lE,new C.eFi(w))},
ayB(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a4(0)
if(u.a.c.ch){u.m(new C.eFc(u))
u.RP()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaWn()){u.cx0()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.eFd(u,A.o.F(w+1,s)))
u.b7L(w)
u.RP()}},
cmO(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a4(0)
v.m(new C.eFe(v))
v.RP()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eFf(v,w,t))
v.b7L(w)
v.RP()}},
cyw(d){var w,v=this,u=v.e
if(u===D.co){u=v.d
u===$&&B.c()
return new B.mG(d,new B.bR(u,x.ac))}w=v.cyx(u)
u=v.d
u===$&&B.c()
return B.p_(new B.mG(d,new B.bR(u,x.ac)),w,new C.eFn(),A.b5,A.b5,new C.eFo(v))},
cyx(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bxx
case 16:return A.iW
case 18:return A.mG
default:return A.m5}},
cyv(d,e,f){var w,v,u,t=null,s=B.cK(A.cu,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d1(s,!1,e,t)
case 2:case 17:w=x.K
return B.jE(e,new B.bg(s,new B.bq(A.v9,A.I,w),w.k("bg<bO.T>")),t,!0)
case 3:w=x.K
return B.jE(e,new B.bg(s,new B.bq(A.Tj,A.I,w),w.k("bg<bO.T>")),t,!0)
case 4:case 21:w=x.K
return B.jE(e,new B.bg(s,new B.bq(A.ic,A.I,w),w.k("bg<bO.T>")),t,!0)
case 5:w=x.K
return B.jE(e,new B.bg(s,new B.bq(A.t4,A.I,w),w.k("bg<bO.T>")),t,!0)
case 6:case 16:w=x.b
return B.iu(A.A,new B.d1(s,!1,e,t),t,new B.bg(s,new B.bq(0.82,1,w),w.k("bg<bO.T>")))
case 7:w=x.b
return B.iu(A.A,new B.d1(s,!1,e,t),t,new B.bg(s,new B.bq(1.18,1,w),w.k("bg<bO.T>")))
case 8:return B.cb(s,new C.eFj(s),e)
case 9:return B.cb(s,new C.eFk(s),e)
case 10:return B.cb(s,new C.eFl(s),e)
case 11:return B.cb(s,new C.eFm(s),e)
case 12:w=x.b
return new B.d1(s,!1,B.iu(A.A,e,t,new B.bg(s,new B.bq(1.03,1,w),w.k("bg<bO.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jj(B.jE(e,new B.bg(s,new B.bq(A.v9,A.I,v),v.k("bg<bO.T>")),t,!0),A.t,new C.btj(w,t))
case 15:w=x.K
return B.jE(e,new B.bg(s,new B.bq(A.Tj,A.I,w),w.k("bg<bO.T>")),t,!0)
case 19:w=B.ds()
w.mU((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jX(v,u,v,1)
return B.fy(A.A,B.db(e,s.gp(0)),t,w,!0)
case 20:return B.eM(A.A,(1-s.gp(0))*0.2,new B.d1(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jj(new C.ap9(B.cb(n.gZv(),new C.eFr(n,v,w),m),m),A.t,m)}else{t=B.rS(new C.J8(w,!0,!1,m))
l=B.b1(w.e)
u=n.cyw(B.ec(B.jj(t,A.t,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.hlq(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oQ,m,m,m),A.bm,D.bWR],k),A.m,m,A.e,A.P,0,m,m),A.f,m,m,new B.o(A.aS,m,m,l,m,m,A.n),m,m,m,m,A.h6,m,m,m)
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
l.push(B.bS(0,new C.NS(new C.ET(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.oF?0.5625:1.7777777777777777
l.push(B.as(new B.fH(r,B.jj(B.uO(A.af,u,!0,4,1,!0,!0,m),A.t,m),m),m,m,m))}if(!$.bm8){r=B.I9(A.lg,new C.eFs(d),B.nP(m,A.aS,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ap(m,B.bn(!0,B.B(B.a([r,A.ad,B.I9(B.X(n.r?Am.uB:A.hn,m,m,m,m,m),n.gcD2(),B.nP(m,A.aS,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.i,0,m,m),!0,!1,A.af,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ap(16,B.bn(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.fS,m,m,m),A.f,m,m,new B.o(A.aS,m,m,r,m,m,A.n),m,m,m,m,A.h6,m,m,m),!0,!1,A.af,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ap(m,B.bn(!0,B.aA(A.c6,B.p(A.lt,$.bm8?A.bJ:s,A.f,m,m,m,m,64,m,m,D.byh,m,m,150),A.y,!1,m,n.gcDn(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a3),!0,!1,A.af,!0,!0),m,m,m,0,0,m))
return B.c6(m,A.w,B.aA(m,new B.an(A.a_,m,A.b3,A.t,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eFt(n,d),m,m,m,!1,A.a3),m,!1,!1,m,m)}}
C.Kg.prototype={
B(d){var w=null
return B.p(w,B.bn(!0,new B.D(E.alr,this.c,w),!0,!1,A.af,!0,!1),A.f,w,w,D.b5y,w,w,w,w,w,w,w,w)}}
C.btj.prototype={
jo(d){return new B.a3(0,0,0+d.a*A.k.E(this.b,0,1),0+d.b)},
k0(d){return d.b!==this.b}}
C.bjd.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.b2k
break A}w=B.m(6)
break A}v=s.e
u=B.J(v?A.aD:A.L,A.r,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.cY(r,B.as(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.wC,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b5,new B.o(s.f,r,u,w,r,r,A.n),A.h4,r,64,r,r,r,r,r,64)
return B.aA(r,new B.a4(78,r,B.x(B.a([w,A.am,B.d(s.d,r,1,A.a1,r,r,r,B.l(r,r,v?A.aD:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.i,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a3)}}
C.bjc.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dyx.h(0,p)
if(o==null)o=D.dkb
p=p==="none"
w=p?q:new B.a9(A.a5,A.a8,A.x,o,q,q)
p=p?A.cY.j(0.25):q
v=r.e
u=v?B.J(A.aD,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.apV:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.ev,q,q,52)
return B.aA(q,new B.a4(66,q,B.x(B.a([w,A.am,B.d(r.d,q,1,A.a1,q,q,q,B.l(q,q,v?A.aD:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.K,q,q)],x.p),A.m,q,A.e,A.i,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a3)}}
C.aLo.prototype={
aV(){this.b1()
this.b0()
this.dK()},
q(){var w=this,v=w.b7$
if(v!=null)v.a5(0,w.gdE())
w.b7$=null
w.a1()}}
C.aNo.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.bz9.prototype={}
C.aNp.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b1()
this.b0()
this.bC()}}
C.b2C.prototype={}
C.Wq.prototype={
R(){return new C.aFw()},
bio(d){return this.e.$1(d)}}
C.aFw.prototype={
gb61(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gabg(){var w,v
if(this.d==="all")return B.bp(this.a.d,!0,x.I)
w=this.gb61()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaPB(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb61()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb7g(){return A.d.cI(this.gabg(),0,new C.eEX())},
Z(){var w,v=this
v.a2()
w=v.a.d
if(w.length!==0)v.e=A.d.gI(w).a
v.Rr()},
Rr(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Rr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b3d(s.c,s.f),$async$Rr)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eET(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$Rr,v)},
Jl(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Jl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gabg()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.L)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fPG(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.pn(o,q.c,q.f),$async$Jl)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.eh(new C.eEW(t,p),!1,null,x.H)
w=4
return B.b(B.a5(o,!1).cc(q),$async$Jl)
case 4:q=t.a
w=5
return B.b(B.pm(q.c,q.f),$async$Jl)
case 5:w=6
return B.b(t.Rr(),$async$Jl)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Jl,v)},
RN(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$RN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hH(o,D.eb5,!0,"NgmySlidesTransferScan",x.N),$async$RN)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eEU(t))
w=4
return B.b(C.ahU(s),$async$RN)
case 4:r=e
t.m(new C.eEV(t))
o=J.a6(r)
if(o.gan(r)){o=t.c
if(o==null){w=1
break}o.K(x.q).f.U(D.fbN)
w=1
break}w=5
return B.b(t.a.bio(r),$async$RN)
case 5:q=t.c
if(q==null){w=1
break}B.a5(q,!1).O(null)
q=t.c.K(x.q).f
p=o.gL(r)
o=o.gL(r)===1?"":"s"
q.U(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$RN,v)},
Jk(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Jk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gabg()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.pn(s,r.c,r.f),$async$Jk)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fPV(null,A.d.gI(n),s,t.a.f)}else q=C.fPV(n,null,r.c,r.f)
if(n.length===1){s=A.d.gI(n).b
r=B.ag("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aL(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.GQ(q,"ngmy_slides_"+p,!1),$async$Jk)
case 4:o=e
s=t.a
w=5
return B.b(B.pm(s.c,s.f),$async$Jk)
case 5:w=6
return B.b(t.Rr(),$async$Jk)
case 6:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Jk,v)},
a3t(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a3t=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eEY(t))
w=3
return B.b(C.bEr(),$async$a3t)
case 3:s=e
t.m(new C.eEZ(t))
if(s==null||J.ct(s)){w=1
break}w=4
return B.b(t.a.bio(s),$async$a3t)
case 4:r=t.c
if(r==null){w=1
break}B.a5(r,!1).O(null)
r=t.c.K(x.q).f
q=J.a6(s)
p=q.gL(s)
q=q.gL(s)===1?"":"s"
r.U(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a3t,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.Q(d).ax.a===A.J,l=m?A.dd:A.bN,k=o.gabg().length!==0,j=B.ap(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.c_(A.A,0.5,A.x,n,0,B.a([A.bl.j(0.22),A.L],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.X(A.cx,m?A.ac:A.al,n,n,n,n),n,n,n,new C.eF1(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.N,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),1),A.Ag],h),A.m,n,A.e,A.i,0,n,n)
w=B.m(24)
v=B.a([new B.ac(0,A.G,A.bl.j(0.35),A.eU,24)],x.V)
u=B.ap(n,B.X(A.qs,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.B(B.a([B.p(n,D.bXo,A.f,n,n,new B.o(t,n,B.J(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.es,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.au,D.bI_],h),A.E,n,A.e,A.i,0,A.p),1)],h),A.m,n,A.e,A.i,0,n,n)],h)
if(o.a.f)s.push(B.ap(n,B.he(B.aA(A.c6,D.f9G,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gchv(),n,n,n,n,n,n,!1,A.a3),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.a_,n,A.ab,A.f,s,n),A.ap,n,n,new B.o(n,n,n,w,v,D.a32,A.n),n,n,n,n,E.a_K,n,n,1/0),A.dT,o.ayC(m,"What to transfer"),A.ae,B.B(B.a([B.E(o.aYL(A.qz,m,new C.eF2(o),o.d==="one","Pick a single deck","One presentation"),1),A.as,B.E(o.aYL(D.bMS,m,new C.eF3(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.i,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d4,o.ayC(m,"Choose presentation"),A.W],h)
u=o.a.d
if(u.length===0){u=m?A.av:A.c
t=B.m(16)
s=B.J(m?A.bz:A.aN,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aC:A.al,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bQ,n,n,n))}else A.d.v(v,new B.N(u,new C.eF4(o,m),B.T(u).k("N<1,v>")))
A.d.v(w,v)}w.push(A.n_)
w.push(o.ayC(m,"Transfer options"))
w.push(A.ae)
w.push(B.B(B.a([B.E(o.arf(A.aJ,k,!0,A.jD,m,o.r,o.gcbx(),"Scan on another device","Show QR"),1),A.as,B.E(o.aNE(A.kf,!0,A.ji,m,o.gctI(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.i,0,n,n))
w.push(A.W)
w.push(B.B(B.a([B.E(o.bBa(A.aW,k,A.hR,m,o.r,o.gcbu(),"Download .json","Backup file"),1),A.as,B.E(o.aNE(A.aA,!0,AB.z7,m,o.gcFP(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.i,0,n,n))
if(k){v=A.bl.j(m?0.12:0.08)
u=B.m(16)
t=B.J(A.bl.j(0.28),A.r,1)
s=B.X(A.lJ,A.bl.j(0.9),n,n,n,18)
r=o.gaPB()
q=o.gb7g()
p=o.gb7g()===1?"":"s"
A.d.v(w,B.a([A.bx,B.p(n,B.B(B.a([s,A.as,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ac:A.bs,n,n,n,n,n,n,n,n,12,n,n,A.a7,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bD,n,n,n)],h))}j=B.a([j,B.bn(!0,B.x(B.a([new B.D(Ai.NP,i,n),B.E(B.cl(w,n,n,D.bBR,n,n,A.ah,!1),1)],h),A.m,n,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0)],h)
if(o.f)j.push(B.p(n,U.Xd,A.f,A.dL,n,n,n,n,n,n,n,n,n,n))
return B.c6(n,l,new B.an(A.a_,n,A.ab,A.t,j,n),n,!1,!1,n,n)},
agu(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.ila(s,t.d,t.e),$async$agu)
case 2:return B.h(null,v)}})
return B.i($async$agu,v)},
ayC(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bl,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.ad,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aC:A.al,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,w,w)},
aYL(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.av:A.c
if(g)w=A.bl
else w=e?A.bz:A.aN
w=B.J(w,A.r,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bl.j(0.2),A.cy,14)],x.V):s
u=A.bl.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.X(d,A.bl,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.ck,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.N,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aI(!1,A.a2,!0,s,B.aO(!1,r,!0,B.eK(new B.D(A.bD,B.x(B.a([t,A.W,u,A.bF,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aC:A.al,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.E,s,A.e,A.i,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.ai)},
bLM(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.av:A.c,m=B.m(16)
if(p)w=A.bl
else w=e?A.bz:A.aN
w=B.J(w,A.r,p?2:1)
v=B.p(q,D.bXA,A.f,q,q,new B.o(q,q,q,B.m(12),q,new B.a9(A.a5,A.a8,A.x,B.a([A.bl,A.bl.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a1,q,q,q,B.l(q,q,e?A.c:A.N,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aC:A.al,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
u=p?A.e6:A.qp
if(p)r=A.bl
else r=e?A.aX:A.dm
return new B.D(A.ct,B.aI(!1,A.a2,!0,q,B.aO(!1,o,!0,B.p(q,B.B(B.a([v,A.bc,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bD,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eES(this,d),q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.ai),q)},
arf(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.av:A.c
if(f)w=d.j(0.45)
else w=h?A.bz:A.aN
w=B.J(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.rG,s,s,s)],t)
if(i)u.push(B.ap(s,B.p(s,D.aqu,A.f,s,s,D.b5k,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.N,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.db(B.aI(!1,A.a2,!0,s,B.aO(!1,p,!0,B.eK(new B.D(E.a_n,B.x(B.a([new B.an(A.a_,s,A.ab,A.f,u,s),A.ae,v,A.bF,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aC:A.al,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.E,s,A.e,A.i,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.ai),r)},
aNE(d,e,f,g,h,i,j){return this.arf(d,e,!1,f,g,!1,h,i,j)},
bBa(d,e,f,g,h,i,j,k){return this.arf(d,e,!1,f,g,h,i,j,k)}}
C.Wr.prototype={
R(){return new C.bm7()}}
C.bm7.prototype={
Z(){this.a2()
this.afg()},
afg(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$afg=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fPV(null,A.d.gI(m),k,r.a.f):C.fPV(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gI(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kH(A.d.gI(n).w))C.fPG(A.d.gI(r.a.d),D.dhZ)
n=r.a
m=n.c
n=C.ii5(n.d)
w=7
return B.b(C.fPU(p,C.iia(r.a.d),n,m,q),$async$afg)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.eF5(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.eF6(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afg,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.Q(d).ax.a===A.J,h=i?A.dd:A.bN,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.eF7())
v=B.aH(j,j,j,j,B.X(A.eK,i?A.ac:A.al,j,j,j,18),j,j,j,new C.eF8(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.N,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),1),A.Ag],u),A.m,j,A.e,A.i,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.de,A.K,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.x(B.a([r,A.Q,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.U,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a32,A.n),j,j,j,j,E.a_K,j,j,1/0)
q=B.m(24)
s=B.J(A.aJ.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.UN,A.K,j,j))
else if(k.d==null)r.push(D.enk)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ac(0,A.G,A.aD.j(0.35),A.cy,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fGF,A.am,B.aA(j,B.p(j,B.B(B.a([D.bZ7,A.as,B.d(m,j,j,j,j,j,j,D.fsC,j,j,j)],u),A.m,j,A.e,A.P,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.c32,A.n),j,j,j,j,A3.alc,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eF9(k,d),j,j,j,j,j,j,!1,A.a3),A.Q,D.fL6,A.aB],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.J(A.bz,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.q3(j,j,!1,l,j,!0,!0,j,!1,D.bsO),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.ck,j,j,j))
A.d.v(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hs,A.K,j,j))
return B.c6(j,h,B.bn(!0,B.x(B.a([new B.D(Ai.NP,v,j),B.E(B.ch(B.x(B.a([t,A.aQ,B.p(j,B.x(r,A.m,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.c5_,A.n),j,j,j,j,A.ui,j,j,1/0)],u),A.m,j,A.e,A.i,0,A.p),A.t,j,A.y,j,E.alw,j,j,A.ah),1)],u),A.m,j,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0),j,!1,!1,j,j)}}
C.aFt.prototype={
R(){return new C.aFu(new B.au(A.at,$.ax()),B.k4(!0,null,!0,!0,null,null,!1))}}
C.aFu.prototype={
Z(){var w=this
w.a2()
w.e.aT(0,new C.eyA(w))
$.aV.x1$.push(new C.eyB(w))},
q(){var w=this.d
w.T$=$.ax()
w.P$=0
this.e.q()
this.a1()},
b0u(){var w,v=this.c
v.toString
w=C.yV(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a5(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aG(a2,A.eN,x.w).w,i=B.m(28),h=B.J(A.bl.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bl.j(0.28),A.v6,36),D.adD],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.x(B.a([B.p(k,D.bUw,A.f,k,k,new B.o(d,k,B.J(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ae,D.fDH,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a7,k,1.35,!0,k,k,k,k,k,k,k,k),A.K,k,k)],a1),A.m,k,A.e,A.i,0,A.p),A.f,k,k,D.b5L,k,k,k,k,A.yw,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.as)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.gef()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.av:A.N
o=new B.aP(14,14)
if(q)n=A.bl
else n=r?A.bl.j(0.55):A.aK
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ac(0,A.G,A.bl.j(0.28),A.I,12)],g):k
t.push(new B.by(1,A.ba,B.cY(A.A,new B.y(p,k,D.flW,k,k,k,k,k,k,k,k,k),k,k,A.b5,new B.o(s,k,new B.bH(m,m,m,m),new B.bh(o,o,o,o),n,k,A.n),A.h4,k,56,k,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(Z.Ec)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.i,0,k,k),B.bS(0,B.db(B.aM(k,A.Y,!0,k,!0,A.t,k,B.aN(),w,k,k,k,k,k,2,D.c0W,A.y,!0,k,!0,k,!1,v,A.aj,k,k,B.a([new B.uH(B.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.BK(5,k),new C.bwA()],x.aS),k,k,A.aTd,k,5,k,1,k,k,!1,"\u2022",k,new C.eyw(l),k,new C.eyx(l),k,!1,k,k,!1,k,!0,k,A.aa,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a4,k,A.mn,k,k,k,k),0),0,0,0)],a1)
d=C.yV(w.a.a.toUpperCase())==null?k:l.gcby()
return B.as(new B.D(new B.P(24,24,24,24+j.f.d),B.aI(!1,A.a2,!0,k,new B.cT(Af.Lu,B.p(k,B.bx(e,B.x(B.a([a0,new B.D(D.bCm,B.x(B.a([new B.an(A.a_,k,A.ab,A.t,g,k),A.W,D.fC0,A.bx,new B.a4(1/0,50,B.bI(D.fT5,k,d,B.bo(A.bl,A.bo,A.al,k,A.c,k,k,k,new B.b8(B.m(16),A.a0),k,k,k)),k),A.am,B.bN(!1,A.nO,k,k,!0,k,k,k,new C.eyy(a2),k,B.fw(k,k,k,k,k,k,k,k,k,k,k,A.bM,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.i,0,A.p),k)],a1),A.m,k,A.e,A.P,0,A.p),A.ap),A.f,k,k,new B.o(A.dd,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.L,0,k,k,k,k,k,A.ai),k),k,k,k)}}
C.bwA.prototype={
oN(d,e){var w=e.a.toUpperCase()
return e.cMi(B.hl(A.bA,w.length),w)}}
C.asa.prototype={
R(){return new C.aFx(B.zz(A.N6,A.nU,A.uO))}}
C.aFx.prototype={
q(){this.d.q()
this.a1()},
b0t(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iX(w,d)},
abb(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$abb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fYM(s),$async$abb)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.b0t("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$abb,v)},
cbw(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=C.ii8(w[u])
if(t!=null){this.b0t(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.wz,s,s,s,t.gbQ8(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eI(B.a([r,B.aH(s,s,s,s,B.X(q?A.uu:An.OJ,s,s,s,s,s),s,s,s,new C.eFb(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.dd,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fUj,s,s,s,1,s,!0)
r=B.zy(t.d,A.bX,t.gcbv())
w=B.m(28)
w=B.as(B.p(s,s,A.f,s,s,new B.o(s,s,B.J(A.bl,A.r,3),w,B.a([new B.ac(2,A.G,A.bl.j(0.35),A.I,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.c6(p,A.w,new B.an(A.a_,s,A.b3,A.t,B.a([r,w,B.ap(32,B.p(s,D.fHM,A.f,s,s,new B.o(v,s,B.J(A.bl.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.jh,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bwO.prototype={
B(d){var w=null,v=B.m(24),u=B.J(A.aK,A.r,1)
return B.aI(!1,A.a2,!0,w,B.p(w,B.x(B.a([B.p(w,H.aq9,A.f,w,w,D.b5u,w,56,w,w,w,w,w,56),A.aQ,D.fU_,A.am,new B.jX(this.c,new C.ffR(),w,w,x.cI),A.aQ,new B.jX(this.d,new C.ffS(),w,w,x.cl),A.ae,D.fTY],x.p),A.m,w,A.e,A.P,0,A.p),A.f,w,Af.Lu,new B.o(A.av,w,u,v,w,w,A.n),w,w,w,K.a_Q,D.bD_,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)}}
C.a8f.prototype={
R(){return new C.blR(A.bC)},
gd_(){return this.c}}
C.blR.prototype={
Z(){var w=this
w.a2()
if(w.a.d)return
w.a_I()
w.d=B.dh(A.fB,new C.emQ(w))},
q(){var w=this.d
if(w!=null)w.a4(0)
this.a1()},
a_I(){return this.cq1()},
cq1(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a_I=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.emO(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bF(new B.V(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cjE(p.c),$async$a_I)
case 6:r=e
q.a=r==null?A.bC:r
case 4:if(t.c==null){w=1
break}t.m(new C.emP(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a_I,v)},
bSc(d){var w,v,u=d.a,t=A.o.ao(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.ao(u,6e7)%60
v=A.o.ao(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aX(A.o.u(w),2,"0")+"m "+A.a.aX(A.o.u(v),2,"0")+"s left"
return A.a.aX(A.o.u(w),2,"0")+":"+A.a.aX(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bJ
w=s.e.a
v=A.o.ao(w,6e7)<30&&A.o.ao(w,36e8)<999?A.ax:A.c3
w=v.j(0.14)
u=B.m(14)
t=B.J(v.j(0.55),A.r,1)
return B.p(r,B.B(B.a([B.X(A.GY,v,r,r,r,20),A.as,B.E(B.d("Marriage document session \xb7 "+s.bSc(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.i,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,Aa.aki,A.iq,r,r,1/0)}}
C.a98.prototype={
nq(){var w,v,u,t=this
t.xx()
w=t.cx
v=t.c
w.bsB(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.q9(B.H(["/S",D.er3,"/URI",new B.rN(B.X0(w.as),A.va,!0)],x.N,u),u))}}
C.a99.prototype={
a6(){return"PdfAnnotFlags."+this.b}}
C.b4g.prototype={
bAc(d,e,f,g,h,i,j,k,l,m){var w=B.eD([D.epm],x.di)
this.w!==$&&B.aQ()
this.w=w},
gcPH(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.k3(w,new C.cmI(),B.a7(w).k("k3<cs.E,G>")).f4(0,new C.cmJ())},
aE9(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.hj(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tM(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jo(d.a,d.b))
s.n(0,"/Border",B.tM(H.asc))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h6(t.gcPH()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.q9(w,x.Y))}}
C.cmK.prototype={}
C.a3o.prototype={}
C.aiN.prototype={}
C.aSw.prototype={
h6(d){var w,v,u,t,s,r,q=this,p=null
q.lt(d)
q.Mo(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bhK(w)
u=x.N
t=x.Y
s=new C.cmK(q.d.a,"/Link",w,p,p,p,p,p,B.U(u,t))
s.bAc(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.q9(B.H(["/Type",D.er1],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a98(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.M(0,r)
v.dx.push(r)}}
C.axL.prototype={}
C.aU2.prototype={
h6(d){var w,v,u,t,s=this
s.lt(d)
w=s.b
if(w!=null){v=B.ds()
u=s.a
v.eg(u.a,u.b,0,1)
u=d.b
u.im()
t=s.a
t.toString
u.Lu(t)
u.T3(0)
u.pc(0,v)
w.h6(d)
u.nt(0)}}}
var z=a.updateTypes(["aB<~>()","~(lW)","R(i6)","~()","R(eP)","R(oA)","R(lW)","~(i6)","R(eP,eP)","Kg(Y)","R(nZ)","R(lq)","aB<R>()","G(G,i6)","a8<n,@>(i6)","ai<zS>()","n(nZ)","R(a8w)","n(lW)","n(wg)","R(F1)","G(i6,i6)","n(eP)","v(eP)","cN(eP)","v(hI)","~(hI)","eP(v2,K,K,K,K,G{fx:n,key:n,rotation:K})","eP(n,K,G)","G(oA,oA)","R(zS)","R(n,ai<zS>)","a8<n,@>(oA)","nZ()","Z7(Y)","eP(n,K,K,K,K,K{align:qf,anim:hI,bullets:R,color:G?,delay:G,fx:n,key:n,style:I4,weight:nM})","a1r(Y)","eP(n,K,K,K,K{anim:hI,delay:G,fx:n,key:n})","aB<~>(oA)","R(mK)","Z5(Y)","a0X(Y)","a0W(Y)","PS(Y)","a_i(Y)","eP(v2,K,K,K,K,G,n,n{anim:hI,delay:G,rotation:K,stroke:G,strokeWidth:K})","eP(n,K,K,K,K,K,n,n,G)","eP(K,K,n,G{size:K})","v(rB,K,K)","lq()","oA(a8<@,@>)","~(uT)","F1()","fi(eP)","v(j8)","ZQ(Y)","~(ET)","a_a(Y)","G(eP,eP)","eP(eP)","a8<n,@>(eP)","eP(a8<@,@>)","lW(lW)","a8<n,@>(lW)","lW(a8<@,@>)","R(jU)","jU()","n(i6)","~(ai<oA>)","V(ai<i6>)","V(i6)","ai<i6>(n?)","adb(Y,G)","~(R(eP,eP))","adQ(Y)","afw(Y,G)","u(lW,R)","We(Y)","adT(Y)","Wf(Y)","~(mO)","i6(i6)","K(eP)","a0q(Y)","a02(Y)","i6()","ai<Fo>()","aB<~>(ai<i6>)","v(bA<G,i6>)","D(jU)","D(F1)","aB<~>(hI,~())","v(ai<hI>,hI?,~(hI),u)","R(mk)","ai<jC<mO>>(Y)","jC<mO>(mO)","i6(a8<@,@>)","Wq(Y)","eP(n,K,K,K,K,K,G{align:qf,style:I4,weight:nM})","Wr(Y)","v(i6)","~(md)","J8(Y,lW,v?)","G(a99)","aB<ai<a8<n,@>>?>()","n(n)","aB<zR>({paper:n?,photo:dK?,request:n,template!lt})","aB<a8o>({doc!zR,history:ai<+(n,n)>,instruction!n,photo:dK?,template!lt})","adN(Y)"])
C.cLl.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:67}
C.cLm.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:78}
C.cLn.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gal0(s):16;--w.c}w.b=A.o.dV(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mz(v,t)
w.b=v-A.o.dV(q,t)
w.a=t
return q},
$S:78}
C.cLo.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bSE.prototype={
$1(d){return J.eH(A.dK.gaS(d),d.byteOffset,d.byteLength)},
$S:1681}
C.fCe.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iR(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iR(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iR(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iR(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1682}
C.c2y.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:32}
C.c2z.prototype={
$2(d,e){var w,v=J.r(e,"savedAt")
v=J.k(v==null?"":v)
w=J.r(d,"savedAt")
return A.a.aL(v,J.k(w==null?"":w))},
$S:42}
C.c2B.prototype={
$1(d){var w=J.r(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fSP.prototype={
$1(d){return new C.a1r(this.a,this.b,C.ij0(),null)},
$S:z+36}
C.fej.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.fen.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.feo.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fep.prototype={
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
C.fek.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fel.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.fem.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.fee.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hc,w,w,w)
return B.ep(B.a([B.bN(!1,E.aVi,w,w,!0,w,w,w,new C.fec(d),w,w),B.bN(!1,D.fFc,w,w,!0,w,w,w,new C.fed(d),w,w)],x.p),w,w,D.Z9,v,w,w,w,w,D.fUC,w)},
$S:19}
C.fec.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.fed.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.fef.prototype={
$0(){return this.a.r=!0},
$S:0}
C.feg.prototype={
$0(){return this.a.r=!1},
$S:0}
C.fet.prototype={
$0(){var w=this.a
return w.m(new C.fes(w,this.b))},
$S:0}
C.fes.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.fei.prototype={
$0(){var w=this.a
return w.m(new C.feh(w,this.b,this.c))},
$S:0}
C.feh.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.M(0,v)},
$S:0}
C.feq.prototype={
$0(){return this.a.a1R(this.b)},
$S:0}
C.fer.prototype={
$0(){return this.a.Pw(0,this.b)},
$S:0}
C.few.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.fex.prototype={
$0(){var w=this.a
return w.m(new C.fev(w,this.b))},
$S:0}
C.fev.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.aa(0)
else{w=w.a.c
v.v(0,new B.N(w,new C.feu(),B.T(w).k("N<1,n>")))}},
$S:0}
C.feu.prototype={
$1(d){return d.a},
$S:z+67}
C.flV.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.hiC(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cB)
t=t.h(0,"updatedAt")
u=B.bk(J.k(t==null?"":t))
return new C.oA(s,v,u==null?new B.V(Date.now(),0,!1):u)},
$S:z+50}
C.flW.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fFb.prototype={
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
C.fF9.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fFa.prototype={
$2(d,e){return e.c.aL(0,d.c)},
$S:z+29}
C.fSj.prototype={
$1(d){return d.ah()},
$S:z+32}
C.fBT.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fTa.prototype={
$1(d){return new C.Z7(this.a,null)},
$S:z+34}
C.cMI.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cMK.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cMN.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cMO.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cMM())},
$S:12}
C.cMM.prototype={
$0(){},
$S:0}
C.cMP.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a2p(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cE(s)
p=q.bh(s,new C.cML(r))
if(p<0)q.c6(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.ai2(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:289}
C.cML.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cMQ.prototype={
$1(d){},
$S:28}
C.cMJ.prototype={
$1(d){return new C.Z5(this.b,this.a.gczX(),null)},
$S:z+40}
C.cMR.prototype={
$1(d){return D.hk_},
$S:z+43}
C.cME.prototype={
$1(d){var w=null,v=B.m(24),u=B.J(D.YL,A.r,1),t=x.p
return B.as(B.aI(!1,A.a2,!0,w,B.p(w,B.x(B.a([new B.D(D.bCM,B.x(B.a([B.p(w,D.bRF,A.f,w,w,new B.o(A.ax.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aQ,D.fE7,A.W,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.frx,A.K,w,w)],t),A.m,w,A.e,A.i,0,A.p),w),A.dT,new B.D(A.qk,B.B(B.a([B.E(B.dT(D.fL8,new C.cMC(d),B.dj(w,w,w,w,w,w,w,w,w,E.nj,w,w,A.cm,w,new B.b8(B.m(14),A.a0),D.b2M,w,w,w,w)),1),A.as,B.E(B.bI(D.fRk,w,new C.cMD(d),B.bo(A.bB,w,w,w,w,w,A.cm,w,new B.b8(B.m(14),A.a0),w,w,w)),1)],t),A.m,w,A.e,A.i,0,w,w),w)],t),A.m,w,A.e,A.P,0,A.p),A.f,w,A.xA,new B.o(D.afs,w,u,v,D.d68,w,A.n),w,w,w,K.a_Q,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai),w,w,w)},
$S:1683}
C.cMC.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.cMD.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.cMF.prototype={
$0(){return J.nG(this.a.d,new C.cMB(this.b))},
$S:0}
C.cMB.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cMA.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.J(D.YL,A.r,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bWJ,A.f,t,t,new B.o(t,t,t,B.m(14),t,D.arK,A.n),t,44,t,t,t,t,t,44),A.bc,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a1,t,t,t,D.aUY,t,t,t),A.bF,D.fRf],q),A.E,t,A.e,A.i,0,A.p),1)],q),A.m,t,A.e,A.i,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.dtC[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.ayI(u[1],u[2],u[3],new C.cMy(v,d),!1,t))}q.push(A.am)
q.push(D.bwH)
q.push(A.am)
q.push(new C.ayI(A.eb,"Delete book","Remove it from this device",new C.cMz(d),!0,t))
return B.bn(!0,B.p(t,B.x(q,A.E,t,A.e,A.P,0,A.p),A.f,t,t,new B.o(D.afs,t,r,s,t,t,A.n),t,t,t,A.ud,E.a_t,t,t,t),!0,!1,A.af,!0,!0)},
$S:27}
C.cMy.prototype={
$0(){var w=this.a.a
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.cMz.prototype={
$0(){B.a5(this.a,!1).O("delete")
return null},
$S:0}
C.cMH.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aKw,12)],x.V)
return B.dQ(B.eM(A.A,e,B.p(w,B.bx(B.m(4),new B.a4(62,95.81818181818181,B.eO(A.A,F.aoW(d),A.f,A.dz),w),A.ap),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.t(f,0))},
$S:z+48}
C.cMG.prototype={
$0(){return this.a.c62()},
$S:0}
C.cMx.prototype={
$0(){return this.a.aZV(0,this.b)},
$S:0}
C.cMw.prototype={
$0(){return this.a.Ds(this.b)},
$S:0}
C.cMv.prototype={
$0(){return this.a.Ds(this.b)},
$S:0}
C.cMS.prototype={
$2(d,e){var w=this.a
return w.bEJ(J.r(w.d,e))},
$S:43}
C.cLZ.prototype={
$0(){var w=this.a
if(w.c!=null)w.AW()},
$S:0}
C.cLY.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b21("Page "+(v.length+1),"",""))},
$S:0}
C.cM0.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cM8.prototype={
$0(){},
$S:0}
C.cM9.prototype={
$1(d){var w=this.a,v=w.a,u=$.ax()
v.T$=u
v.P$=0
w=w.b
w.T$=u
w.P$=0
return null},
$S:8}
C.cM1.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cJ.gcu().aO(this.c)},
$S:0}
C.cM_.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cM3.prototype={
$0(){return this.a.QY(this.b)},
$S:0}
C.cM4.prototype={
$0(){return this.a.QY(this.b)},
$S:0}
C.cM5.prototype={
$0(){var w=this.a
w.m(new C.cM2(this.b))
w.Ej()},
$S:0}
C.cM2.prototype={
$0(){return this.a.c=""},
$S:0}
C.cM7.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cM6(w,d))
w.Ej()},
$S:z+51}
C.cM6.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cMe.prototype={
$2(d,e){if(d)this.a.AW()},
$S:122}
C.cMa.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.AW(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.K(x.q).f.U(D.fem)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cMb.prototype={
$0(){return this.a.aYS(this.b,-1)},
$S:0}
C.cMc.prototype={
$0(){return this.a.aYS(this.b,1)},
$S:0}
C.cMd.prototype={
$0(){return this.a.c7o(0,this.b)},
$S:0}
C.fJJ.prototype={
$1(d){return C.hsI()},
$S:44}
C.fJK.prototype={
$1(d){return null},
$S:28}
C.fqb.prototype={
$1(d){return null},
$S:28}
C.fKI.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:323}
C.fKH.prototype={
$2(d,e){return A.o.aL(e.length,d.length)},
$S:210}
C.fKO.prototype={
$1(d){var w=this.a
return C.haR(d)===w||C.hxn(d)===w},
$S:z+4}
C.fpe.prototype={
$1(d){return A.a.aX(A.o.u(d),2,"0")},
$S:72}
C.cdR.prototype={
$1(d){return d.length!==0},
$S:3}
C.fJH.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fJI.prototype={
$1(d){return C.fMr(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fEx.prototype={
$1(d){var w=null
return B.bn(!0,new B.D(E.yv,B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aX,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fLL,A.Q,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.di(D.HC,D.fFQ,new C.fEv(d),B.bo(A.c3,w,w,w,A.w,w,A.cm,w,w,w,w,w)),A.W,B.ex(A.uJ,D.fN4,new C.fEw(d),B.dj(w,w,w,w,w,w,w,w,w,A.ac,w,w,A.cm,w,w,R.xy,w,w,w,w))],x.p),A.ak,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:27}
C.fEv.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fEw.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fEy.prototype={
$1(d){var w=null
return B.ep(B.a([B.bN(!1,D.fBR,w,w,!0,w,w,w,new C.fEt(d),w,w),B.bI(D.fTD,w,new C.fEu(d),w)],x.p),w,w,w,D.fVA,w,w,w,w,D.fBK,w)},
$S:19}
C.fEt.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.fEu.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.ei6.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.ei4.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ei5.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ei7.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ei8.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fKN.prototype={
$1(d){return A.a.aX(A.o.u(d),2,"0")},
$S:72}
C.fKJ.prototype={
$2$h$w(d,e){var w=null
return new B.bM(A.a5,w,w,B.Bx(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1684}
C.fKL.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.fsR,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:136}
C.fKM.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.J(A.il,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dQ(B.p(w,w,A.f,w,w,new B.o(w,w,B.J(A.il,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.t(-d*0.38,0))],x.p),A.m,w,A.b9,A.i,0,w,w)},
$0(){return this.$1$size(18)},
$S:1685}
C.fKK.prototype={
$2$female$size(d,e){var w=null,v=d?D.ahA:this.a,u=B.J(A.il,A.r,1),t=e*0.32,s=B.ap(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.ab,A.t,B.a([s,B.ap(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.afI,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1686}
C.fWD.prototype={
$1(d){return new C.adN(this.a,this.b,null)},
$S:z+108}
C.e4E.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.btl:A.MB,q=B.J(D.jt.j(0.25),A.r,1),p=B.as(B.p(t,t,A.f,t,t,new B.o(A.c3.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.aqt,A.f,t,t,new B.o(t,t,B.J(A.c.j(0.5),A.r,1.2),o,B.a([new B.ac(0,A.G,D.jt.j(0.35),A.en,10)],x.V),D.c5D,A.n),t,t,t,t,A.ym,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.x(B.a([new B.D(O.a_G,B.x(B.a([p,A.aB,B.B(B.a([o,A.bc,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.jt,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bF,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fs2,t,t,t)],u),A.E,t,A.e,A.i,0,A.p),1)],u),A.m,t,A.e,A.i,0,t,t)],u),A.m,t,A.e,A.i,0,A.p),t),B.E(B.io(!0,t,e,A.y,D.aSh,new C.e4D(w,this.c),v,D.al6,t,A.ah,!1),1)],u),A.m,t,A.e,A.i,0,A.p),A.f,t,t,new B.o(r,t,q,A.mt,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:121}
C.e4D.prototype={
$2(d,e){var w=this.a.d[e]
return new C.adb(w,new C.e4C(this.b,w),null)},
$S:z+72}
C.e4C.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fEB.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fEC.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.D(E.yv,B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aX,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fPj,A.Q,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.di(D.HC,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fEz(d),B.bo(D.jt,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.W,B.ex(A.ov,D.Vm,new C.fEA(d),B.dj(w,w,w,w,w,w,w,w,w,A.ac,w,w,A.cm,w,w,R.xy,w,w,w,w))],x.p),A.ak,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:27}
C.fEz.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fEA.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fEF.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fEG.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.D(E.yv,B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aX,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fCU,A.Q,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.di(D.HC,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fED(d),B.bo(D.jt,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.W,B.ex(A.ov,D.Vm,new C.fEE(d),B.dj(w,w,w,w,w,w,w,w,w,A.ac,w,w,A.cm,w,w,R.xy,w,w,w,w))],x.p),A.ak,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:27}
C.fED.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fEE.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fEJ.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fEK.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.D(E.yv,B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aX,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fJx,A.Q,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.di(D.HC,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fEH(d),B.bo(D.jt,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.W,B.ex(A.ov,D.Vm,new C.fEI(d),B.dj(w,w,w,w,w,w,w,w,w,A.ac,w,w,A.cm,w,w,R.xy,w,w,w,w))],x.p),A.ak,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:27}
C.fEH.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fEI.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fY5.prototype={
$1(d){return D.hp9},
$S:z+74}
C.emT.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bk7:A.MB,s=B.J(A.az.j(0.25),A.r,1),r=B.as(B.p(v,v,A.f,v,v,new B.o(A.az.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bZ4,A.f,v,v,new B.o(v,v,B.J(A.c.j(0.5),A.r,1.2),q,B.a([new B.ac(0,A.G,A.c3.j(0.35),A.en,10)],x.V),D.arP,A.n),v,v,v,v,A.ym,v,v,v)
w=x.p
return B.p(v,B.x(B.a([new B.D(O.a_G,B.x(B.a([r,A.aB,B.B(B.a([q,A.bc,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:A1.Mx,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bF,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.fpt,v,v,v)],w),A.E,v,A.e,A.i,0,A.p),1)],w),A.m,v,A.e,A.i,0,v,v)],w),A.m,v,A.e,A.i,0,A.p),v),B.E(B.io(!0,v,e,A.y,D.aSh,new C.emS(this.b),19,D.al6,v,A.ah,!1),1)],w),A.m,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(t,v,s,A.mt,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:121}
C.emS.prototype={
$2(d,e){var w=D.S_[e]
return new C.afw(w,new C.emR(this.a,w),null)},
$S:z+75}
C.emR.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fMv.prototype={
$0(){return B.h9O(C.i6h(this.a))},
$S:321}
C.fMu.prototype={
$0(){var w=C.hb9(this.a)
return"data:image/png;base64,"+A.cJ.gcu().aO(w)},
$S:23}
C.fnv.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jp(d,e),new B.jp(w,e+v),new B.jp(d+f*14,e),new B.jp(w,e-v)],x.J)
B.a2m(this.a,C.fG(4291404327),v)},
$S:687}
C.fYg.prototype={
$1(d){return new C.We(this.a,null)},
$S:z+77}
C.epQ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.epP())},
$S:31}
C.epP.prototype={
$0(){},
$S:0}
C.epR.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.epO(w,d))},
$S:1688}
C.epO.prototype={
$0(){return this.a.x=J.eS(A.dK.gaS(this.b))},
$S:0}
C.epS.prototype={
$1(d){},
$S:28}
C.eps.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.epo.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.epz.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.epA.prototype={
$0(){var w=this.a
A.d.aa(w.ay)
w.z=this.b
w=w.ax
A.d.aa(w)
w.push(D.eBL)},
$S:0}
C.epB.prototype={
$0(){return this.a.as=!1},
$S:0}
C.epu.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bP(0,A.cb)},
$S:0}
C.epv.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.epw.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.w(this.b)))},
$S:0}
C.epx.prototype={
$0(){return this.a.as=!1},
$S:0}
C.epy.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd3(v).Q
v.toString
w.mi(v,A.dU,A.iD)}},
$S:8}
C.ept.prototype={
$0(){var w=this.a,v=w.z,u=C.fN8(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cLq(C.fN8(t))},
$S:0}
C.epq.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.epr.prototype={
$0(){return this.a.as=!1},
$S:0}
C.epH.prototype={
$0(){return B.a5(this.a,!1).ik()},
$S:0}
C.epI.prototype={
$0(){var w=this.a
return w.m(new C.epG(w))},
$S:0}
C.epG.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.epJ.prototype={
$0(){var w=this.a
return w.m(new C.epF(w,this.b))},
$S:0}
C.epF.prototype={
$0(){var w=this.b.b
this.a.e.saY(0,w)
return w},
$S:0}
C.epK.prototype={
$1(d){var w=this.a
return w.m(new C.epE(w))},
$S:9}
C.epE.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.epL.prototype={
$1(d){var w=this.a
return w.m(new C.epD(w))},
$S:9}
C.epD.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.epM.prototype={
$0(){var w=this.a
return w.m(new C.epC(w,this.b))},
$S:0}
C.epC.prototype={
$0(){var w=this.b
this.a.f.saY(0,w)
return w},
$S:0}
C.epN.prototype={
$1(d){return this.a.a_u()},
$S:2}
C.epp.prototype={
$0(){return this.a.caO(this.b)},
$S:0}
C.chw.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cQ(w.h(0,d))):null},
$S:338}
C.chu.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.chv.prototype={
$1(d){return d.length!==0},
$S:3}
C.fM5.prototype={
bmW(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bSD(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.L)(e),++t){s=e[t]
r.cHM($.ra().ji(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mQ(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bmW(d,e)},
$S:1689}
C.fKn.prototype={
$1(d){return d.length!==0},
$S:3}
C.fKp.prototype={
$1(d){var w=this.a.a
w=A.d.aG(A.d.dt(this.b,w,w+d)," ")
w=B.aL(w," \n\n ","\n\n")
w=B.aL(w," \n\n","\n\n")
return B.aL(w,"\n\n ","\n\n")},
$S:72}
C.fKo.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.fx(t,t,t,t,B.cS(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qX,A.bY,t,A.dA,A.bW)
v=this.a
w.o0(v.b)
u=w.b.a.c
return u.gbb(u)<=v.a},
$S:34}
C.fn4.prototype={
$1(d){var w=A.a.fq(d,B.ag("\\s+",!0,!1,!1,!1))
return new B.Z(w,new C.fn5(),B.T(w).k("Z<1>")).gL(0)},
$S:251}
C.fn5.prototype={
$1(d){return d.length!==0},
$S:3}
C.fn2.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:233}
C.fn3.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:233}
C.chx.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaBr()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b1(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,w-(f===t?r:0)))
o=C.haQ(i,new B.F(!0,h,a6,k,a6,a6,q,A.cR,A.bp,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.h7E(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aG(n.gcj9(),"\n\n")
d=B.fx(a6,a6,a6,a6,B.cS(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.af5(k,q,1.28),j),A.qX,A.bY,a6,A.dA,A.bW)
d.o0(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbb(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b1(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.haQ(i,new B.F(!0,h,a6,k,a6,a6,q,A.cR,A.bp,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.h7E(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.af5(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.P(v,0,v,0),B.p(a6,a6,A.f,B.b1(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.by(1,A.ba,new B.y(o.length>a4?o[a4]:"",a6,a3,a6,A.qX,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aBq(s,j))
i.push(new B.a4(s,a6,B.x(h,A.E,a6,A.e,A.i,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.E,a6,A.e,A.i,0,a6,a6)},
$S:433}
C.chy.prototype={
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
n=o.gaBr()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b1(j.w)
d=B.a([new B.z(u,q),new B.z(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.z(r,p-(a0===s?m:0)))
l=C.haQ(f,new B.F(!0,e,a5,i,a5,a5,h,A.cR,A.bp,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.h7E(g.length===0?B.a([a6],n):g,l))break}a1=o.af5(i,h,1.28)
a2=new C.chz(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.K_,new B.a4(v,a5,a4.f,a5),A.K_,a2.$2(l[1],u)],n),A.E,a5,A.e,A.i,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bFa,B.p(a5,a5,A.f,B.b1(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.by(1,A.ba,new B.y(l[2+a3],a5,a1,a5,A.qX,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aBq(r,g))
f.push(new B.a4(r,a5,B.x(e,A.E,a5,A.e,A.i,0,A.p),a5))
A.d.v(k,f)}return B.x(B.a([new B.a4(a5,q,v,a5),A.ae,B.E(B.B(k,A.E,a5,A.e,A.i,0,a5,a5),1)],n),A.m,a5,A.e,A.i,0,A.p)},
$S:148}
C.chz.prototype={
$2(d,e){var w=null
return new B.a4(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qX,w,w),w)},
$S:1690}
C.fYj.prototype={
$1(d){return new C.Wf(this.a,this.b,null)},
$S:z+79}
C.eqC.prototype={
$1(d){return d.lM()},
$S:1691}
C.eqD.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eqB(w,d))},
$S:1692}
C.eqB.prototype={
$0(){var w=this.b
return this.a.d=w.gfD(w)},
$S:0}
C.eqp.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eqq.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eqw.prototype={
$0(){return B.a5(this.a,!1).eM()},
$S:0}
C.eqx.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.J(A.bE,A.r,2.5)
return B.aA(w,B.p(w,B.b4(w,w,w,new C.bdp(u,v.gayu(),w),A.fF),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.equ(v),new C.eqv(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a3)},
$S:36}
C.equ.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:255}
C.eqv.prototype={
$1(d){var w=this.a
w.m(new C.eqr(w,d,this.b,this.c))},
$S:218}
C.eqr.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.E(s.x*r.d,1,6)
w=s.gayu()
r=r.a
v=t.c
u=t.d
s.r=A.k.E(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.E(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.eqy.prototype={
$1(d){var w=this.a
return w.m(new C.eqt(w,this.b))},
$S:9}
C.eqt.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eqz.prototype={
$1(d){var w=this.a
return w.m(new C.eqs(w,d))},
$S:6}
C.eqs.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eqA.prototype={
$0(){return B.a5(this.b,!1).O(this.a.a.c)},
$S:0}
C.fYz.prototype={
$1(d){return D.hrX},
$S:z+83}
C.f_s.prototype={
$1(d){return this.a.Z8()},
$S:8}
C.eZk.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cJ.gcu().aO(v)},
$S:0}
C.eZI.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eZS.prototype={
$1(d){return d>=this.a.length},
$S:34}
C.eZ3.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eZ4.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eZ1.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eZ2.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eZB.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eZC(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jj(B.rS(p>0.2?F.bW4(q,B.TK(p,p,A.x)):q),A.t,u)],x.p)
w=s.bj
if(w>0.02){v=B.TK(12,12,A.x)
p.push(B.jj(B.db(B.rS(F.bW4(r.$1(!0),v)),w*0.75),A.t,u))}r=s.b4
if(r!=null&&s.b2>0)p.push(B.ec(u,B.b1(r).j(s.b2),!0))
r=s.be
if(r!=null&&s.bM>0){r=B.b1(r).j(s.bM)
w=s.be
w.toString
p.push(B.c4(u,new B.o(u,u,u,u,u,new B.c_(D.b0n,1.15,A.x,u,0,B.a([r,B.b1(w).j(0)],x.O),u,u),A.n),A.bh))}r=s.aF
if(r>0)p.push(B.c4(u,new B.o(u,u,u,u,u,new B.c_(D.b08,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bh))
r=s.aN
if(r>0)p.push(B.c4(u,new B.o(u,u,u,u,u,new B.a9(A.b0,A.b6,A.x,B.a([A.w.j(r),A.L,A.L,A.w.j(s.aN)],x.O),D.d4I,u),A.n),A.bh))
if(s.aC>0){r=s.k1
p.push(B.ap(u,B.c4(u,new B.o(u,u,u,u,u,new B.a9(A.b0,A.b6,A.x,B.a([A.w.j(0),A.w.j(s.aC),A.w.j(s.aC),A.w.j(0)],x.O),D.dgk,u),A.n),A.bh),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.a_
if(r>0)p.push(B.ec(u,A.w.j(r),!0))
r=s.b8
if(r>0)p.push(B.c4(u,new B.o(u,u,u,u,u,new B.c_(A.A,0.95,A.x,u,0,B.a([A.L,A.w.j(r)],x.O),D.ddd,u),A.n),A.bh))
s=s.aB
if(s>0)p.push(B.b4(u,u,u,new C.bh2(s,u),A.aw))
return new B.an(A.a_,u,A.b3,A.t,p,u)},
$S:66}
C.eZC.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fT(r.b,A.A,q,q,A.ci,A.bX,!0,q,!1,q,q),o=r.a,n=o.aYu(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c8,l=m*3.141592653589793/180
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
return B.dQ(B.ee(A.A,B.eM(A.A,l,B.fy(A.A,new B.Bk(new B.xs(q,q,n,A.B6),p,q),q,B.w3(s,o.cL?-1:1,1),!0),q),v*w,q,q),new B.t(-m*r.d*u/2,-t*r.c*u/2))},
$S:556}
C.eZO.prototype={
$0(){return this.a.m(new C.eZN(this.b,this.c))},
$S:0}
C.eZN.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eZP.prototype={
$1(d){return this.a.m(new C.eZM(this.b,d))},
$S:6}
C.eZM.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eZR.prototype={
$0(){return this.a.m(new C.eZQ(this.b,this.c))},
$S:0}
C.eZQ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eYU.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eYV.prototype={
$1(d){var w=this.a
return w.m(w.gcBk())},
$S:2}
C.eYW.prototype={
$1(d){return this.a.m(new C.eYT())},
$S:2}
C.eYT.prototype={
$0(){},
$S:0}
C.eYX.prototype={
$0(){var w=this.a
return w.m(new C.eYS(w,this.b))},
$S:0}
C.eYS.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eYZ.prototype={
$2(d,e){return A.as},
$S:37}
C.eYY.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b1(v.e),B.b1(v.f)],x.O),q=t?A.c:A.bz
q=B.J(q,A.r,t?2.5:1)
r=B.cY(w,B.as(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b1(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b5,new B.o(w,w,q,s,w,new B.a9(A.b0,A.b6,A.x,r,w,w),A.n),A.h4,w,94,w,w,w,w,w,70)
return B.aA(w,new B.a4(70,w,B.x(B.a([r,A.fG,B.d(v.b,w,1,A.a1,w,w,w,B.l(w,w,t?A.c:A.aC,w,w,w,w,w,w,w,w,10.5,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eYR(u,v),w,w,w,w,w,w,!1,A.a3)},
$S:84}
C.eYR.prototype={
$0(){var w=this.a
return w.m(new C.eYO(w,this.b))},
$S:0}
C.eYO.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eZ_.prototype={
$1(d){var w=this.a
return w.m(new C.eYQ(w,d))},
$S:9}
C.eYQ.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eZ0.prototype={
$1(d){var w=this.a
return w.m(new C.eYP(w,d))},
$S:9}
C.eYP.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.f_h.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gI(this.b)]},
$S:34}
C.f_o.prototype={
$1(d){var w=this.a
return w.m(new C.f_p(w,d))},
$S:30}
C.f_p.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.en(v,v.r,B.a7(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.f_q.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:236}
C.f_i.prototype={
$0(){var w=this.a
return w.m(new C.f_g(w,this.b))},
$S:0}
C.f_g.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.M(0,v)},
$S:0}
C.f_j.prototype={
$0(){var w=this.a
return w.m(new C.f_f(w,this.b))},
$S:0}
C.f_f.prototype={
$0(){var w,v=this.b.length,u=J.e_(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.f_k.prototype={
$0(){var w=this,v=w.a
return v.m(new C.f_e(v,w.b,w.c,w.d))},
$S:0}
C.f_e.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.aa(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.f_l.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gt_(v))},
$S:0}
C.f_m.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.f_n.prototype={
$0(){var w=this.a
return w.m(new C.f_d(w))},
$S:0}
C.f_d.prototype={
$0(){var w=this.a.db
return A.d.hu(w,0,w.length,0)},
$S:0}
C.f_0.prototype={
$1(d){return d.a===this.a.dy},
$S:220}
C.f_1.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.aA0[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aP(9,9)
m=B.a([B.b1(v.w.e),B.b1(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.ayy(new B.nm(new B.bh(n,n,n,n),A.ap,new B.l1(new B.o(j,j,j,j,j,new B.a9(A.a5,A.a8,A.x,m,j,j),A.n),A.bh,new C.b0u(l,B.b1(k==null?v.w.x:k),A.k.E(w,12,26),j),j),j),u,q.b,o===p,new C.f__(r,v),2,i))}return B.bY(A.bG,h,A.br,j,7,7)},
$S:169}
C.f__.prototype={
$0(){var w=this.b
return w.m(new C.eZV(this.a,w))},
$S:0}
C.eZV.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.f_2.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:159}
C.f_5.prototype={
$0(){var w=this.a
return w.m(new C.eZZ(w))},
$S:0}
C.eZZ.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.f_6.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.f_7.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.f_8.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.f_9.prototype={
$0(){var w=this.a
return w.m(new C.eZY(w))},
$S:0}
C.eZY.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.f_a.prototype={
$0(){var w=this.a
return w.m(new C.eZX(w))},
$S:0}
C.eZX.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.f_b.prototype={
$0(){var w=this.b
return w.m(new C.eZW(this.a,w))},
$S:0}
C.eZW.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.f_c.prototype={
$1(d){return this.a.fx=d},
$S:159}
C.f_3.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.f_4.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eZF.prototype={
$0(){var w=this.a
return w.m(new C.eZE(w))},
$S:0}
C.eZE.prototype={
$0(){var w=this.a
w.p4=null
w.b4I()},
$S:0}
C.eZG.prototype={
$0(){var w=this.a
return w.m(new C.eZD(w,this.b))},
$S:0}
C.eZD.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eZH.prototype={
$0(){var w=this.a
return w.m(w.gcrD())},
$S:0}
C.eZx.prototype={
$0(){var w=this.a
return w.m(new C.eZw(w))},
$S:0}
C.eZw.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eZy.prototype={
$0(){var w=this.a
return w.m(new C.eZv(w))},
$S:0}
C.eZv.prototype={
$0(){var w=this.a
w.aC=0.55
w.a_=Math.max(w.a_,0.12)},
$S:0}
C.eZz.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.ddF[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aP(9,9)
m.push(v.ayy(new B.nm(new B.bh(p,p,p,p),A.ap,new B.a4(1/0,1/0,new B.Bk(new B.xs(o,o,v.aYu(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.B6),B.fT(u,A.A,140,o,A.ci,A.bX,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eZu(v,s),3,n))}return B.bY(A.bG,m,A.br,o,10,8)},
$S:169}
C.eZu.prototype={
$0(){var w=this.a
return w.m(new C.eZt(w,this.b))},
$S:0}
C.eZt.prototype={
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
C.eZb.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eZc.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eZd.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eZe.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eZf.prototype={
$1(d){return this.a.aF=d},
$S:6}
C.eZg.prototype={
$1(d){return this.a.a_=d},
$S:6}
C.eZh.prototype={
$1(d){return this.a.b8=d},
$S:6}
C.eZi.prototype={
$1(d){return this.a.aC=d},
$S:6}
C.eZj.prototype={
$1(d){return this.a.aN=d},
$S:6}
C.eYx.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eYy.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eYz.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eYA.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eYB.prototype={
$0(){var w=this.a
return w.m(new C.eYw(w))},
$S:0}
C.eYw.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eYC.prototype={
$1(d){return this.a.b4=d},
$S:159}
C.eYD.prototype={
$1(d){return this.a.b2=d},
$S:6}
C.eZ5.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eZ6.prototype={
$1(d){return this.a.bj=d},
$S:6}
C.eZ7.prototype={
$1(d){return this.a.aB=d},
$S:6}
C.eZ8.prototype={
$1(d){return this.a.be=d},
$S:159}
C.eZ9.prototype={
$1(d){return this.a.bM=d},
$S:6}
C.eYH.prototype={
$1(d){return this.a.aK=d},
$S:6}
C.eYI.prototype={
$1(d){return this.a.bi=d},
$S:6}
C.eYJ.prototype={
$1(d){return this.a.bG=d},
$S:6}
C.eYK.prototype={
$1(d){return this.a.c8=d},
$S:6}
C.eYL.prototype={
$0(){var w=this.a
return w.m(new C.eYG(w))},
$S:0}
C.eYG.prototype={
$0(){var w=this.a
return w.c8=A.k.F(w.c8+90+180,360)-180},
$S:0}
C.eYM.prototype={
$0(){var w=this.a
return w.m(new C.eYF(w))},
$S:0}
C.eYF.prototype={
$0(){var w=this.a
return w.c5=!w.c5},
$S:0}
C.eYN.prototype={
$0(){var w=this.a
return w.m(new C.eYE(w))},
$S:0}
C.eYE.prototype={
$0(){var w=this.a
return w.cL=!w.cL},
$S:0}
C.eZA.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.ilO(v,w.p4)},
$S:0}
C.eZs.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.btG:B.fT(v,A.A,w,w,A.ci,A.bX,!1,w,!1,w,w)
return C.fKv(d.length===0?"rounded":d,u,e)},
$S:127}
C.eZo.prototype={
$0(){var w=this.a
return w.m(new C.eZn(w))},
$S:0}
C.eZn.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eZp.prototype={
$0(){var w=this.b
return w.m(new C.eZm(this.a,w))},
$S:0}
C.eZm.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eZq.prototype={
$0(){var w=this.b
return w.m(new C.eZl(this.a,w))},
$S:0}
C.eZl.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eZr.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.E(w.ay,0,1-d)
w.ch=A.k.E(w.ch,0,0.95)},
$S:6}
C.eZL.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ac(-4,A.G,A.b7.j(0.35),A.I,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.er(n.cl4(),n.r))
l.push(new C.J8(n.cyf(),!1,!1,t))
o=B.bS(0,B.bx(o,new B.er(new B.an(A.a_,t,A.b3,A.t,l,t),n.f),A.ap),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.an(A.a_,t,A.ab,A.t,B.a([o,B.ap(t,B.aA(A.c6,B.c4(t,new B.o(t,t,B.J(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bh),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eZK(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a3),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:229}
C.eZK.prototype={
$1(d){var w=this.a
return w.m(new C.eZJ(w,d,this.b,this.c))},
$S:18}
C.eZJ.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.E(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.E(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eZU.prototype={
$0(){var w=this.a
return w.m(new C.eZT(w,this.b))},
$S:0}
C.eZT.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eZa.prototype={
$0(){var w=this.a.c
w.toString
return B.a5(w,!1).ik()},
$S:0}
C.f_r.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a4(Math.min(s*0.4,460),t,B.x(B.a([w.b0l(),B.E(B.as(w.b3k(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.i,0,A.p),t),B.E(B.x(B.a([B.E(w.aRu(),1),w.aNF()],v),A.m,t,A.e,A.i,0,A.p),1)],v),A.m,t,A.e,A.i,0,t,t)}u=A.k.E(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.b0l(),new B.D(A.hz,B.as(s.b3k(u),t,t,t),t),B.E(s.aRu(),1),s.aNF()],x.p),A.m,t,A.e,A.i,0,A.p)},
$S:601}
C.fHM.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.ew(k,!1,j,A.aF,"",4280640491,i,l,m,"",h,C.bCl(),null,"","",0,!1,"",0,D.bi,4280172719,2,d,0,0,"",D.co,D.cV,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bp,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bp,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bp,A.U)},
$S:z+98}
C.fHL.prototype={
$3(d,e,f){var w=this,v=C.bCl(),u=w.b?A.H:A.cA,t=w.c?A.cD:A.bp
return C.ew(w.d,!1,f,A.aF,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bi,4280172719,2,d,0,w.f,w.e,D.co,D.cV,0.82,0.09,w.a)},
$S:z+28}
C.cj1.prototype={
$1(d){return B.w(d)},
$S:17}
C.fPv.prototype={
$0(){return this.a},
$S:z+15}
C.fuZ.prototype={
$1(d){return d.a.d2(this.a)},
$S:z+30}
C.fv_.prototype={
$2(d,e){return J.ct(e)},
$S:z+31}
C.fPx.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fPA.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fPB.prototype={
$0(){return A.d.gI(D.wI)},
$S:z+33}
C.fPt.prototype={
$1(d){return d.a},
$S:z+16}
C.fPw.prototype={
$1(d){return d.a},
$S:z+16}
C.fNr.prototype={
$1(d){return A.a.i(B.w(d))},
$S:17}
C.fNs.prototype={
$1(d){return d.length!==0},
$S:3}
C.fNt.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fHQ.prototype={
$0(){return C.cF()},
$S:23}
C.fHT.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.co,s=u?n:0
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
C.fHS.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.ew(A.bj,!1,4279310375,A.aF,"",i,24,A.bp,A.a7,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.co,D.fb,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fHR.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.co,t=v?j:0
return C.ew(A.bj,!1,4279310375,A.aF,"",4280640491,24,A.bp,A.a7,"",h,w,d,v?k:"",l,0,!1,"",0,D.bi,4280172719,2,"",t,0,"",u,D.lN,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.qM,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fHP.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fKg.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.htK.c3(0,A.a.i(s.w).toLowerCase(),new C.fKe(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c3(0,s.r,new C.fKf(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bA(t.e,new B.bq9(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1695}
C.fKe.prototype={
$0(){return F.aOX(this.a.w)},
$S:184}
C.fKf.prototype={
$0(){var w=this.a.r,v=B.aL(w.toLowerCase()," ","_")
return F.bBf("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.ig(2,w,A.ch,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:184}
C.fmZ.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fn_.prototype={
$1(d){return d.a},
$S:z+18}
C.fn0.prototype={
$1(d){return d.b},
$S:z+19}
C.fYL.prototype={
$1(d){return D.hsc},
$S:z+41}
C.f5T.prototype={
$0(){return this.a.x=C.hYG(this.b,this.c.b)},
$S:0}
C.f5U.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.f5R.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:395}
C.f5S.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:395}
C.f5Q.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bV(A.av,null,new C.f5L(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.k5,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b5(s,7)
if(r.length===0){n.m(new C.f5M(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hzO(o,m.cMd(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.f5N(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.f5L.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.f5P(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.bak,A.f,p,p,D.b5d,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.CR:D.CY,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a4(64,64,C.fKv(v,i.b5l(h),u),p)))}t=B.kQ(1,m,4,10,10,p,A.dS,!0)
if(!l)return B.bn(!0,new B.D(Ab.yt,t,p),!0,!1,A.af,!0,!0)
s=new C.f5O(i,d)
m=B.aG(d,A.bZ,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.HV[e]
l.push(s.$2(r.a,r.b))}return B.bn(!0,new B.cT(new B.aZ(0,1/0,0,m.a.b*0.85),B.ch(B.x(B.a([D.fHV,A.W,t,A.dT,D.f3N,A.au,D.fSZ,A.W,B.kQ(1.15,l,3,10,10,p,A.dS,!0)],n),A.E,p,A.e,A.i,0,A.p),A.t,p,A.y,p,Ab.yt,p,p,A.ah),p),!0,!1,A.af,!0,!0)},
$S:27}
C.f5P.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b7.j(0.22):A.c.j(0.04),s=v?A.bq:A.dr
return B.aA(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.J(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hP,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f5K(this.b,d),w,w,w,w,w,w,!1,A.a3)},
$S:1696}
C.f5K.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.f5O.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bL:A.bz
r=B.J(r,A.r,t?2.5:1)
w=B.m(10)
u=B.E(B.p(v,B.bx(w,d.length===0?B.p(v,D.aqZ,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.dZ(new C.NS(u.FV(d),!0,!1,v),!0,v),A.ap),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aA(v,B.x(B.a([u,A.au,B.d(e,v,1,A.a1,v,v,v,B.l(v,v,t?A.bL:A.ac,v,v,v,v,v,v,v,v,10.5,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f5J(this.b,d),v,v,v,v,v,v,!1,A.a3)},
$S:127}
C.f5J.prototype={
$0(){B.a5(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.f5M.prototype={
$0(){var w=this.a
return w.w=w.w.FV("")},
$S:0}
C.f5N.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f5z.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.f5A.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.f5C.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.f5D.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.f5E.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.f5F.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f5B(w,d))},
$S:2}
C.f5B.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.f5G.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.w(this.b)},
$S:0}
C.f66.prototype={
$0(){return this.a.f.fT()},
$S:0}
C.f67.prototype={
$0(){var w=this.a
return w.m(new C.f65(w))},
$S:0}
C.f65.prototype={
$0(){return this.a.e=null},
$S:0}
C.f68.prototype={
$0(){var w=this.a
return w.m(new C.f64(w))},
$S:0}
C.f64.prototype={
$0(){return this.a.x=null},
$S:0}
C.f6a.prototype={
$1(d){var w=this.a
return w.m(new C.f63(w,d))},
$S:35}
C.f63.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.f6b.prototype={
$1(d){var w=this.a
return w.m(new C.f62(w,d))},
$S:35}
C.f62.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f6c.prototype={
$0(){var w=this.a
return w.m(new C.f61(w))},
$S:0}
C.f61.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.f6d.prototype={
$1(d){var w=this.a
return w.m(new C.f60(w,d))},
$S:35}
C.f60.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f6e.prototype={
$1(d){var w=this.a
return w.m(new C.f6_(w,d))},
$S:35}
C.f6_.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f6f.prototype={
$0(){var w=this.a
return w.m(new C.f5Z(w))},
$S:0}
C.f5Z.prototype={
$0(){var w=this.a
return w.w=w.w.FV("")},
$S:0}
C.f6g.prototype={
$0(){var w=this.a
return w.m(new C.f5Y(w,this.b))},
$S:0}
C.f5Y.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.f6h.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a4(u,null,w.bQO(D.a4R[v]),null))
return B.bY(A.bG,t,A.br,null,8,8)},
$S:169}
C.f69.prototype={
$1(d){var w=this.a
return w.m(new C.f5X(w,d))},
$S:9}
C.f5X.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.f5H.prototype={
$0(){var w=this.a
return w.m(new C.f5I(w,this.b,this.c))},
$S:0}
C.f5I.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.M(0,w)},
$S:0}
C.f5W.prototype={
$0(){var w=this.a
return w.m(new C.f5V(w,this.b))},
$S:0}
C.f5V.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fYK.prototype={
$1(d){return new C.a0W(this.a,this.b,null)},
$S:z+42}
C.f5s.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.f5t.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.f5u.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aJS?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.f5v.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.f5w.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f5r(w,d))},
$S:2}
C.f5r.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f5x.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.w(this.b)},
$S:0}
C.f5y.prototype={
$0(){var w=this.b
if(A.a.c9(w,"\u2026"))w=A.a.ar(w,0,w.length-1)
this.a.d.bP(0,new B.ba(w,B.hl(A.bA,w.length),A.aO))},
$S:0}
C.fue.prototype={
$1(d){return d.a===this.a},
$S:220}
C.emi.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gayz(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cZh:D.dg3
t=D.y7.j(v?1:0.55)
v=p.a.c
t=B.J(t,A.r,v?1.8:1.2)
s=D.y7.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.I,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bS(0,B.b4(q,q,q,new C.bjk(n*6.283,q),A.aw),0,0,0)
o=o.x
o=B.bS(0,B.bSU(B.eM(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a9(A.a5,A.a8,A.x,B.a([A.L,D.bia.j(0.28),A.L],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.t(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bx(s,new B.an(A.a_,q,A.ab,A.t,B.a([n,o,B.as(B.x(B.a([B.X(p.a.c?A.e6:A.mb,D.y7,q,q,q,20),A.au,B.eO(A.A,B.o3(A.jJ,D.fBe,new C.emh()),A.f,A.e3)],r),A.m,q,A.e,A.P,0,A.p),q,q,q),B.ap(q,B.p(q,D.fxH,A.f,q,q,new B.o(D.y7,q,q,B.m(6),q,q,A.n),q,q,q,q,P.alO,q,q,q),q,q,q,4,4,q)],r),q),A.ap),A.f,q,q,new B.o(q,q,t,w,v,new B.a9(A.ay,A.aE,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:97}
C.emh.prototype={
$1(d){return D.c3O.aA(0,d)},
$S:71}
C.fPC.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fPD.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:220}
C.fPE.prototype={
$2(d,e){return A.o.aL(e.a.length,d.a.length)},
$S:1697}
C.fPF.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aL(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aL(u,p,q.toUpperCase())}return u},
$S:14}
C.fPy.prototype={
$1(d){return d.a},
$S:z+18}
C.fPz.prototype={
$1(d){return d.b},
$S:z+19}
C.fXY.prototype={
$1(d){return new C.a_i(this.a,this.b,null)},
$S:z+44}
C.dpA.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dpB.prototype={
$1(d){return d.a===this.a.gajm()},
$S:z+10}
C.dpC.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dpF.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.dpG.prototype={
$0(){var w=this.a
return w.m(new C.dpE(w,this.b))},
$S:0}
C.dpE.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dpH.prototype={
$1(d){var w=this.a
return w.m(new C.dpD(w,d))},
$S:9}
C.dpD.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.emg.prototype={
$1$2(d,e,f){var w=B.bp(d,!0,f)
A.d.e_(w,this.a)
return B.d5(w,0,B.dC(e,"count",x.S),B.T(w).c).dm(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1698}
C.fjp.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.ew(A.bj,!1,4279310375,A.aF,"",i,24,A.bp,A.a7,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.fb,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.co,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.fjr.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.ew(A.K,!1,this.b.d,A.aF,"",4280640491,i,A.bp,A.cR,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bi,4280172719,2,d,l,0,"",D.mW,D.cV,g,e,f)},
$S:z+46}
C.fjq.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.wO(0,"twinkle")
w=t===D.bi?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mW,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.fjo.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fIX.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fIY.prototype={
$0(){return A.d.gI(D.I3)},
$S:z+49}
C.fIZ.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.flq.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fP4.prototype={
$1(d){var w=2450411,v=4281908728
C.dA(d,C.dB(4280171146,1,0,D.bi,w,0,0.52,0,0))
C.dA(d,C.dB(v,1,0,D.bi,w,0,0.04,0.48,0))
C.dA(d,C.dB(4294047225,0.38,0,D.bi,w,0,0.48,0.52,0.62))
C.dA(d,C.dB(v,0.006,0,D.fD,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fP5.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dA(d,C.dB(4280172719,0.8,0,D.bi,w,0,0.36,0.58,0.1))
C.dA(d,C.dB(v,0.64,0,D.bi,w,0,0.28,0.64,0.18))
C.dA(d,C.dB(4282090230,0.44,0,D.bi,w,0,0.2,0.7,0.28))
C.dA(d,C.dB(v,0.006,0,D.fD,v,3,0.22,0.08,0.12))
C.dA(d,C.dB(u,0.004,0,D.fD,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fP6.prototype={
$1(d){var w=2450411,v=4279548070
C.dA(d,C.dB(4279080072,0.11,0,D.bi,w,0,1,0,0))
C.dA(d,C.dB(4279310375,0.11,0,D.bi,w,0,1,0,0.89))
C.dA(d,C.dB(856528008,0.72,0,D.k3,w,0,0.28,0.72,0.14))
C.dA(d,C.dB(1426953352,0.2,0,D.k3,w,0,0.2,0.78,0.22))
C.dA(d,C.dB(v,0.004,0,D.fD,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fPh.prototype={
$1(d){var w=2450411
C.dA(d,C.dB(4279203438,0.55,0,D.k3,w,0,0.5,0.55,-0.05))
C.dA(d,C.dB(4280171146,0.5,0,D.k3,w,0,0.45,0.62,0.35))
C.dA(d,C.dB(4280640491,0.4,0.3,D.k2,w,0,0.35,0.68,0.55))
C.dA(d,C.dB(571438702,0.12,0,D.bi,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fPm.prototype={
$1(d){var w=4280472558
C.dA(d,C.dB(4279310375,0.75,-0.4,D.k2,2450411,0,0.75,-0.15,0.35))
C.dA(d,C.dB(w,0.55,0,D.bi,2450411,0,0.06,0.42,0.38))
C.dA(d,C.dB(w,0.006,0,D.fD,w,3,0.35,0.08,0.08))
C.dA(d,C.dB(2282478,0.12,0,D.bi,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fPn.prototype={
$1(d){var w=2450411,v=4280640491
C.dA(d,C.dB(3423541034,0.48,0,D.bi,w,0,1,0,0))
C.dA(d,C.dB(v,0.12,-0.08,D.k3,w,0,1.1,-0.05,0.38))
C.dA(d,C.dB(858088427,0.35,0,D.bi,w,0,0.42,0.55,0.05))
C.dA(d,C.dB(v,0.006,0,D.fD,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fPo.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cYa[w]
u=Date.now()
t=$.j9
$.j9=t+1
v=new C.eP("design_"+(""+1000*u+"_"+t),D.fb,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a7,A.bp,A.aF,4279310375,A.bj,null,D.bi,v,4294967295,2,0,!1,"",0,D.co,0,"","","","","",!1,0)
u=$.KN
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c6(d.z,0,v)}C.dA(d,C.dB(s,0.006,0,D.fD,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fPp.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ar(A.mD,A.du,w/3).l()
u=Date.now()
t=$.j9
$.j9=t+1
v=new C.eP("design_"+(""+1000*u+"_"+t),D.fb,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a7,A.bp,A.aF,4279310375,A.bj,null,D.DC,v,2450411,0,0,!1,"",0,D.co,0,"","","","","",!1,0)
u=$.KN
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c6(d.z,0,v)}C.dA(d,C.dB(s,0.006,0,D.fD,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fPq.prototype={
$1(d){var w=4294967295
C.dA(d,C.dB(4280640491,1,0,D.bi,2450411,0,0.42,0,0))
C.dA(d,C.dB(4280110808,1.1,1.57,D.k2,2450411,0,0.18,0.35,-0.05))
C.dA(d,C.dB(w,0.006,0,D.fD,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fPr.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dA(d,C.dB(w,0.1,0,D.bi,v,0,1,0,0))
C.dA(d,C.dB(u,0.012,0,D.bi,v,0,1,0,0.1))
C.dA(d,C.dB(u,0.006,0,D.fD,u,3,0.42,0.06,0.14))
C.dA(d,C.dB(403446057,0.68,0,D.k3,v,0,0.22,0.72,0.18))
C.dA(d,C.dB(w,0.1,0,D.bi,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fPs.prototype={
$1(d){var w=4278630100
C.dA(d,C.dB(4279310375,1.2,0.15,D.k3,2450411,0,0.55,-0.2,-0.1))
C.dA(d,C.dB(w,1.1,0.15,D.bi,2450411,0,0.08,0.15,-0.05))
C.dA(d,C.dB(1120295,0.18,0,D.bi,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fP7.prototype={
$1(d){var w=4292617766
C.dA(d,C.dB(4282714634,0.65,-0.2,D.k2,2450411,0,0.65,-0.1,0.45))
C.dA(d,C.dB(w,0.5,-0.15,D.k2,2450411,0,0.5,0.05,0.55))
C.dA(d,C.dB(w,0.006,0,D.fD,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fP8.prototype={
$1(d){var w=2450411
C.dA(d,C.dB(4278413729,0.35,3.14,D.k2,w,0,0.45,-0.05,0.7))
C.dA(d,C.dB(4278355143,0.3,3.14,D.k2,w,0,0.4,0.25,0.75))
C.dA(d,C.dB(4279150057,0.32,3.14,D.k2,w,0,0.5,0.55,0.72))
C.dA(d,C.dB(863884284,0.22,0,D.eT,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fP9.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dA(d,C.dB(w,0.14,0,D.bi,v,0,0.14,0.02,0.02))
C.dA(d,C.dB(2282478,0.14,0,D.bi,u,3,0.14,0.84,0.02))
C.dA(d,C.dB(w,0.28,0,D.k3,v,0,0.35,-0.08,0.78))
C.dA(d,C.dB(u,0.22,0.5,D.k2,v,0,0.3,0.72,0.78))
C.dA(d,C.dB(w,0.006,0,D.fD,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fPa.prototype={
$1(d){var w=4293571336,v=1156231944
C.dA(d,C.dB(1841431,0.92,0,D.bi,w,3,0.92,0.04,0.04))
C.dA(d,C.dB(v,0.15,0,D.k2,2450411,0,0.15,0.02,0.02))
C.dA(d,C.dB(v,0.15,3.14,D.k2,2450411,0,0.15,0.83,0.83))
C.dA(d,C.dB(w,0.004,0,D.fD,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fPb.prototype={
$1(d){var w=4279080072,v=2450411
C.dA(d,C.dB(w,0.14,0,D.lm,v,0,0.14,0.68,0.18))
C.dA(d,C.dB(4279548070,0.14,0,D.lm,v,0,0.14,0.78,0.28))
C.dA(d,C.dB(4281193663,0.14,0,D.lm,v,0,0.14,0.68,0.38))
C.dA(d,C.dB(4284410580,0.14,0,D.lm,v,0,0.14,0.78,0.48))
C.dA(d,C.dB(4279203438,0.14,0,D.lm,v,0,0.14,0.68,0.58))
C.dA(d,C.dB(w,0.006,0,D.fD,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fPc.prototype={
$1(d){var w=2450411,v=4280640491
C.dA(d,C.dB(3708753706,0.42,0,D.bi,w,0,1,0,0))
C.dA(d,C.dB(v,0.06,-0.05,D.k3,w,0,1,0,0.38))
C.dA(d,C.dB(859356664,0.25,0,D.eT,w,0,0.25,0.7,0.08))
C.dA(d,C.dB(v,0.006,0,D.fD,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fPd.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ar(A.mD,A.du,w/3).l()
u=Date.now()
t=$.j9
$.j9=t+1
v=new C.eP("design_"+(""+1000*u+"_"+t),D.fb,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a7,A.bp,A.aF,4279310375,A.bj,null,D.DC,v,2450411,0,0,!1,"",0,D.co,0,"","","","","",!1,0)
u=$.KN
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c6(d.z,0,v)}C.dA(d,C.dB(4280172719,0.08,0,D.bi,2450411,0,1,0,0))
C.dA(d,C.dB(s,0.006,0,D.fD,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fPe.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.j9
$.j9=u+1
u=new C.eP("design_"+(""+1000*v+"_"+u),D.fb,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a7,A.bp,A.aF,s,A.bj,null,D.fD,t,t,0,0,!1,"",0,D.co,0,"","","","","",!1,0)
v=$.KN
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c6(d.z,0,u)}C.dA(d,C.dB(s,0.75,0,D.bi,2450411,0,0.22,0.72,0.1))
C.dA(d,C.dB(872415231,0.16,0,D.bi,2450411,0,0.16,0.75,0.15))
C.dA(d,C.dB(s,0.006,0,D.fD,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fPf.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dA(d,C.dB(4674921,0.9,0,D.bi,4287931320,2,0.9,0.05,0.05))
C.dA(d,C.dB(w,0.08,0,D.bi,v,0,0.08,0.03,0.03))
C.dA(d,C.dB(u,0.08,0,D.bi,v,0,0.08,0.89,0.03))
C.dA(d,C.dB(u,0.08,0,D.bi,v,0,0.08,0.03,0.89))
C.dA(d,C.dB(w,0.08,0,D.bi,v,0,0.08,0.89,0.89))
C.dA(d,C.dB(w,0.004,0,D.fD,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fPg.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.j9
$.j9=t+1
t=new C.eP("design_"+(""+1000*u+"_"+t),D.fb,0.55,0.14+v,0.38,0.18,"",24,A.a7,A.bp,A.aF,r,A.bj,null,D.bi,4294967295,4280640491,2,0,!1,"",0,D.co,0,"","","","","",!1,0)
u=$.KN
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c6(d.z,0,t)
u=B.ar(A.d7,A.cp,w/2).l()
t=Date.now()
s=$.j9
$.j9=s+1
u=new C.eP("design_"+(""+1000*t+"_"+s),D.fb,0.57,0.16+v,0.06,0.14,"",24,A.a7,A.bp,A.aF,r,A.bj,null,D.bi,u,q,0,0,!1,"",0,D.co,0,"","","","","",!1,0)
v=$.KN
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c6(d.z,0,u)}C.dA(d,C.dB(4280171146,1,0,D.bi,q,0,0.48,0,0))
C.dA(d,C.dB(4280172719,1.1,1.57,D.k2,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fPi.prototype={
$1(d){var w=2450411
C.dA(d,C.dB(870995980,0.55,0.45,D.k3,w,0,0.55,-0.12,-0.08))
C.dA(d,C.dB(856996006,0.45,0.45,D.k3,w,0,0.45,0.62,-0.05))
C.dA(d,C.dB(16777215,0.38,0.45,D.k3,4293548044,5,0.38,0.52,0.12))
C.dA(d,C.dB(585783308,0.3,0.45,D.k3,w,0,0.3,0.56,0.16))
C.dA(d,C.dB(4279548070,0.06,0,D.bi,w,0,0.16,0.38,0.04))
C.dA(d,C.dB(1156208652,0.28,0,D.eT,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fPj.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dA(d,C.dB(w,1,0,D.bi,v,0,0.07,0,0))
C.dA(d,C.dB(u,0.1,0,D.bi,t,1,0.46,0.48,0.14))
C.dA(d,C.dB(u,0.1,0,D.bi,t,1,0.46,0.48,0.28))
C.dA(d,C.dB(u,0.1,0,D.bi,t,1,0.46,0.48,0.42))
C.dA(d,C.dB(s,0.08,0,D.eT,v,0,0.08,0.5,0.16))
C.dA(d,C.dB(w,0.08,0,D.eT,v,0,0.08,0.5,0.3))
C.dA(d,C.dB(4279548070,0.08,0,D.eT,v,0,0.08,0.5,0.44))
C.dA(d,C.dB(16777215,0.32,0.45,D.k3,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fPk.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dA(d,C.dB(4294047225,0.08,0,D.bi,t,2,0.1,0.02,0.06))
C.dA(d,C.dB(s,0.42,0,D.bi,2450411,0,0.36,0.58,0.18))
C.dA(d,C.dB(872415231,0.12,0,D.bi,2450411,0,0.28,0.62,0.24))
C.dA(d,C.dB(16777215,0.28,0,D.eT,s,4,0.32,0,0.72))
C.dA(d,C.dB(r,0.006,0,D.fD,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.j9
$.j9=u+1
u=new C.eP("design_"+(""+1000*v+"_"+u),D.fb,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a7,A.bp,A.aF,4279310375,A.bj,null,D.eT,16777215,t,2,0,!1,"",0,D.co,0,"","","","","",!1,0)
v=$.KN
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c6(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fPl.prototype={
$1(d){var w=2450411,v=4279548070
C.dA(d,C.dB(3423541034,0.55,0,D.bi,w,0,1,0,0))
C.dA(d,C.dB(4009754623,0.56,0.45,D.k3,w,0,0.56,0.22,0.18))
C.dA(d,C.dB(3439329279,0.44,0.45,D.k3,w,0,0.44,0.28,0.24))
C.dA(d,C.dB(v,0.07,0,D.bi,w,0,0.22,0.34,0.62))
C.dA(d,C.dB(v,1,0,D.bi,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fGN.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fGO.prototype={
$0(){return A.d.gI($.bG0())},
$S:z+52}
C.ftx.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.ftw.prototype={
$1(d){return C.i5c(d,this.a,this.b)},
$S:z+53}
C.fPL.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.w3(1.0375,1.01875,1)
return new B.fX(v,u,new C.aU2(B.hVG(A.vB,C.i5f(w.c,w.d,v,u),t)))},
$S:392}
C.e_T.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:8}
C.e_S.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c4(w,new B.o(w,w,w,w,w,new B.c_(A.L8,1.2,A.x,w,0,u.d,w,w),A.n),A.bh),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jj(new B.an(A.a_,w,A.b3,A.t,B.a([t,new B.er(B.b4(w,w,w,new C.bg6(u.a,r,q,r),A.aw),w),B.as(new B.jX(r,new C.e_R(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.t,w)},
$S:282}
C.e_R.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.et.aw(0,A.k.E(e/1.4,0,1)),p=A.k.E(e/0.9,0,1),o=A.k.E((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gI(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.I,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hV(B.fT(i,A.A,r,r,A.ci,A.bX,!0,r,!1,r,r),A.ap),A.f,r,r,new B.o(r,r,r,r,u,new B.h0(A.A,0,6.283185307179586,A.x,t,r,new B.mE(e*0.8)),A.a6),r,w,r,r,new B.P(v,v,v,v),r,r,w),new B.a4(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bsW(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cW(i[1].j(0.6),A.I,t)],x.r),r,r),A.K,r,r),r))
j.push(new B.a4(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.db(B.dQ(B.x(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a9(A.a5,A.a8,A.x,B.a([A.L,i[1],A.L],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a4(r,m*0.022,r,r),B.d(w.a.c.gaMd(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a7,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.K,r,r)],k),A.m,r,A.e,A.P,0,A.p),new B.t(0,(1-o)*m*0.03)),o))
return B.db(B.ee(A.A,new B.D(new B.P(l,0,l,0),B.x(j,A.m,r,A.e,A.P,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:100}
C.f4G.prototype={
$1(d){var w=this.b
return new B.a9(A.ay,A.aE,A.x,this.a.c,B.a([0,A.k.E(w-0.1,0,1),A.k.E(w,0,1),A.k.E(w+0.1,0,1),1],x.x),null).aA(0,d)},
$S:71}
C.cds.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bL:A.bz
t=B.J(t,A.r,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hX.j(0.4),A.I,14)],x.V):v
w=B.cY(v,B.bx(B.m(12),d,A.ap),v,v,A.b5,new B.o(v,v,t,u,w,v,A.n),A.eH,v,72,v,v,v,v,v,v)
return B.aA(v,new B.a4(112,v,B.x(B.a([w,A.fG,B.d(e,v,1,A.a1,v,v,v,B.l(v,v,g?A.bL:A.ac,v,v,v,v,v,v,v,v,11,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.i,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a3)},
$S:1699}
C.cdt.prototype={
$0(){var w=this.a
return w.d.$1(w.c.FV(""))},
$S:0}
C.cdu.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.dZ(new C.NS(v.FV(u),!0,!1,null),!0,null),d.b,new C.cdv(w,this.c,d),v.a===u)},
$S:z+54}
C.cdv.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hzO(u.b,t.c.FV(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fWn.prototype={
$1(d){return new C.ZQ(this.a,null)},
$S:z+55}
C.deO.prototype={
$0(){var w=this.a
w.d=w.gvV().bdu("data:"+this.b+";base64,"+A.cJ.gcu().aO(this.c));++w.r},
$S:0}
C.deT.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.deU.prototype={
$0(){var w=this.a
return w.m(new C.deS(w))},
$S:0}
C.deS.prototype={
$0(){return this.a.r++},
$S:0}
C.deV.prototype={
$1(d){var w=this.a
return w.m(new C.deR(w,d))},
$S:2}
C.deR.prototype={
$0(){var w=this.a
return w.d=w.gvV().aF4(this.b)},
$S:0}
C.deW.prototype={
$0(){var w=this.a
return w.m(new C.deQ(w))},
$S:0}
C.deQ.prototype={
$0(){var w=this.a
return w.d=w.gvV().bdu("")},
$S:0}
C.deX.prototype={
$1(d){var w=this.a
return w.m(new C.deP(w,d))},
$S:2}
C.deP.prototype={
$0(){var w=this.a
return w.d=w.gvV().bdA(this.b)},
$S:0}
C.deY.prototype={
$0(){var w=this.a
w=w.gvV().bdA(w.gayA().a.a)
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.fWm.prototype={
$1(d){var w={}
w.a=this.a
return new B.e1(new C.fWl(w),null)},
$S:21}
C.fWl.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bn(!0,new B.cT(new B.aZ(0,1/0,0,B.aG(d,A.bZ,x.w).w.a.b*0.85),B.ch(B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aX,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.fPZ,A.au,D.fQe,A.aB,new C.b0r(v.a,new C.fWk(v,e,d),!0,w)],x.p),A.E,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.af,!0,!1),A.f,w,w,D.b5M,w,w,w,w,A.Nz,w,w,w)},
$S:164}
C.fWk.prototype={
$1(d){this.b.$1(new C.fWj(this.a,d))
B.a5(this.c,!1).O(d)},
$S:z+56}
C.fWj.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fYJ.prototype={
$1(d){return D.hmf},
$S:z+57}
C.dlC.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.dlD.prototype={
$0(){var w=this.a.c
w.toString
B.a5(w,!1).O(this.b)
return null},
$S:0}
C.dlE.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a5(w,!1).O(v)}},
$S:0}
C.fMo.prototype={
$1(d){var w=this.b
return new B.a9(A.ay,A.aE,A.x,B.a([A.L,B.ar(this.a,A.c,0.75).j(0.9),A.L],x.O),B.a([A.k.E(w-0.12,0,1),A.k.E(w,0,1),A.k.E(w+0.12,0,1)],x.x),null).aA(0,d)},
$S:71}
C.dev.prototype={
$3(d,e,f){var w,v=this,u=new B.aF($.S().r,A.ag,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.D(new B.aY(t+r*1.2,o))
u.D(new B.c5(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.D(new B.c5(w,q+p,w,q+p*1.2))
u.D(new B.Dr(B.bX(new B.t(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aH(u,v.d)
s.aH(u,v.e)
p=B.I()
p.r=B.ar(v.a.d,A.c,0.6).gp(0)
s.ad(new B.t(w,o),2.2,p)},
$S:465}
C.fMs.prototype={
$2(d,e){return A.k.aL(d.c,e.c)},
$S:z+58}
C.fEN.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fEO.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.D(E.yv,B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aX,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fxZ,A.Q,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.di(D.HC,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fEL(d),B.bo(A.c3,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.W,B.ex(A.ov,D.Vm,new C.fEM(d),B.dj(w,w,w,w,w,w,w,w,w,A.ac,w,w,A.cm,w,w,R.xy,w,w,w,w))],x.p),A.ak,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:27}
C.fEL.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fEM.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.cj_.prototype={
$1(d){return d.hN()},
$S:z+59}
C.cj0.prototype={
$1(d){return d.ah()},
$S:z+60}
C.ciZ.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a2(b5,x.N,x.z),b3=B.aK(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.N(b3)
if(b4==null)b4=A.a7.gdP(0)
b3=B.aK(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.N(b3)
if(w==null)w=0
b3=B.aK(b2.h(0,"align"))
v=b3==null?b1:A.k.N(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.i0R(b2.h(0,"type"))
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
n=A.aC2[A.o.E(b4,0,8)]
m=D.d0i[A.o.E(w,0,1)]
l=C.i4C(b2.h(0,"decoration"))
k=B.aK(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.ayq[A.o.E(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.i7v(b2.h(0,"shape"))
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
a3=C.huU(b2.h(0,"textTransition"))
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
C.ciP.prototype={
$1(d){return d.hN()},
$S:z+62}
C.ciQ.prototype={
$1(d){return d.ah()},
$S:z+63}
C.ciM.prototype={
$1(d){return B.w(d)},
$S:17}
C.ciN.prototype={
$1(d){return B.w(d)},
$S:17}
C.ciO.prototype={
$1(d){return C.hlr(B.a2(d,x.N,x.z))},
$S:z+64}
C.cjg.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.cjh.prototype={
$0(){return A.d.gI(D.a4u)},
$S:z+66}
C.cjb.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.ce(d.f))w.n(0,u,d.hN())},
$S:z+7}
C.cja.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cj6.prototype={
$1(d){return new B.N(d,new C.cj7(),B.T(d).k("N<1,V>")).f4(0,new C.cj8())},
$S:z+69}
C.cj7.prototype={
$1(d){return d.f},
$S:z+70}
C.cj8.prototype={
$2(d,e){return d.ce(e)?d:e},
$S:689}
C.cj9.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hRu(d)},
$S:z+71}
C.cjc.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.cjd.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cje.prototype={
$1(d){return d.ah()},
$S:z+14}
C.fN0.prototype={
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
C.fMX.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fMY.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fMZ.prototype={
$2(d,e){var w
if(d.b===D.cV){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fN_.prototype={
$2(d,e){return d.b===D.fb&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.ciV.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.ign(b2,b3),b5=B.a7(b4).k("bd<2>")
b5=B.cH(new B.bd(b4,b5),new C.ciU(),b5.k("M.E"),x.N)
w=B.df(b5,B.a7(b5).k("M.E"))
b1=b1.e
v=A.qb.aw(0,A.k.E(b1,0,1))
u=new C.ciW()
b5=B.ar(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ar(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.ciX(a9,b7.d)
r=new C.ciY(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.L)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jQ.aw(0,A.k.E(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kB(A.k.E(1-k,0,1),B.dQ(B.ee(A.A,r.$1(l),1-k*0.06,a8,a8),new B.t(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.L)(b2),++m){i=b2[m]
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
if(a2===D.fb){a4=i.hN()
a4.ay=B.ar(B.b1(l.ay),B.b1(i.ay),v).l()
a4.ch=B.ar(B.b1(l.ch),B.b1(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lN&&l.at==i.at?r.$1(i):new B.an(A.a_,a8,A.b3,A.t,B.a([new B.kB(A.k.E(o,0,1),r.$1(l),a8),new B.kB(A.k.E(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iO(B.wy(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.E((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.co)a7=D.mW
p.push(s.$5(i.c,i.d,i.e,i.f,C.hxc(a7,a6,r.$1(i))))}}return B.c4(new B.an(A.a_,a8,A.ab,A.t,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a9(A.a5,A.a8,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bh)},
$S:457}
C.ciU.prototype={
$1(d){return d.a},
$S:z+22}
C.ciW.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b1(w)},
$S:z+76}
C.ciX.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ap(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1703}
C.ciY.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a8e(v,C.b2z(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dN3.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ee(new B.da(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:46}
C.cj3.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.cj4.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fPS.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:315}
C.fOZ.prototype={
$1(d){return new C.adT(this.a,this.b,null)},
$S:z+78}
C.eyC.prototype={
$0(){return this.a.Qn(this.b,C.ijN(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eyD.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.Qn(this.b,C.ijP(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eyE.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.Qn(this.b,C.ijO(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eyF.prototype={
$0(){A0.hwX()
B.a5(this.a,!1).O(null)},
$S:0}
C.ciT.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1704}
C.ciS.prototype={
$2(d,e){var w,v=this,u=null,t=B.dO(d,A.nQ),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.E(p*Math.max(B.je(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bX:A.dz
return B.fT(t,A.A,o,new C.ciR(),A.ci,w,!0,u,!1,new B.bR("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1705}
C.ciR.prototype={
$3(d,e,f){return D.ae8},
$S:214}
C.fMW.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.b1(r.e)
v=r.f
v.toString
v=new B.a9(A.ay,A.aE,A.x,B.a([w,B.b1(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b1(r.e):t
r=r.z
r=B.d5(r,0,B.dC(6,"count",x.S),B.T(r).c)
u=r.$ti.k("N<ak.E,cN>")
r=B.C(new B.N(r,new C.fMV(e.b,e.d),u),u.k("ak.E"))
return B.bx(s,B.c4(new B.an(A.a_,t,A.ab,A.t,r,t),new B.o(v,t,t,t,t,w,A.n),A.bh),A.ap)},
$S:1706}
C.fMV.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ap(w,C.b2z(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fwk.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cG(r.b,new C.fwi(d))
w=B.aG(d,A.bZ,x.w).w
v=B.m(22)
u=B.J(A.bz,A.r,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.h_,28)],x.V)
s=x.p
return new B.d1(e,!1,B.as(B.aI(!1,A.a2,!0,q,B.p(q,B.x(B.a([B.B(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.k8,q,q,q),A.au,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1),B.bN(!1,A.At,q,q,!0,q,q,q,new C.fwj(p,d),q,B.fw(q,q,A.bl,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.BU,q,new B.b8(B.m(12),A.a0),q,q,q,q,q,q))],s),A.m,q,A.e,A.i,0,q,q),A.aB,r.d],s),A.m,q,A.e,A.P,0,A.p),A.f,q,new B.aZ(0,w.a.a*0.94,0,1/0),new B.o(A.av,q,u,v,t,q,A.n),q,q,q,A.fZ,A.Gy,q,q,q),A.f,A.L,0,q,q,q,q,q,A.ai),q,q,q),q)},
$C:"$3",
$R:3,
$S:259}
C.fwi.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a5(w,!0).pP())B.a5(w,!0).eM()},
$S:0}
C.fwj.prototype={
$0(){var w=this.a.a
if(w!=null)w.a4(0)
B.a5(this.b,!0).eM()},
$S:0}
C.fdd.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.db(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.dQ(u.b,new B.t((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.dQ(u.b,new B.t(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.dQ(u.b,new B.t(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.dQ(u.b,new B.t(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.ee(A.A,B.db(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.ee(A.A,B.db(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.ds()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fI(r*3.14159)
return B.fy(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.ds()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.kh(r*3.14159)
return B.fy(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.ds()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fI(r*1.2)
s.kh(r*0.5)
return B.fy(A.A,B.db(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.ds()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fI(-r*1.4)
return B.fy(A.a8,B.db(u.b,r),t,s,!0)
case 12:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.db(B.ee(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.jj(u.b,A.t,new C.aKH(r,t))],x.p),t)
case 15:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.jj(u.b,A.t,new C.aKH(1-r,t))],x.p),t)
case 16:v=D.b9f.aw(0,r)
return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.ee(A.A,B.db(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.db(B.ec(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.ds()
s.mU(r*6.28)
s.jX(r,r,r,1)
return B.fy(A.A,u.b,t,s,!0)
case 20:return B.eM(A.A,(r-0.5)*0.35,new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.db(u.b,r)],x.p),t),t)}},
$S:62}
C.dYC.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cq(0)}},
$S:12}
C.dYB.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cq(0)}},
$S:12}
C.dYA.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hxc(v,w,e)},
$S:62}
C.ciL.prototype={
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
q=B.C(new B.N(v,new C.ciK(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c4(new B.an(A.a_,r,A.ab,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bh)},
$S:457}
C.ciK.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.co?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ap(u,new C.a8e(m,new C.Vw(d,C.b2z(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.dbJ.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.dbI(w))},
$S:12}
C.dbI.prototype={
$0(){return this.a.d++},
$S:0}
C.elZ.prototype={
$2(d,e){var w,v=null,u=A.o.ao(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aRk.t(0,A.d.gI(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.ig6(w,t,s,e)}switch(s.a.c){case"float3d":s=B.ds()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.eg(0,w*7,0,1)
s.fI(Math.sin(t)*0.32)
s.kh(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jX(w,w,w,1)
return B.fy(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dQ(B.ee(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.t(s*14,w*10))
default:s=Math.sin(t)
return B.db(B.ee(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:62}
C.f25.prototype={
$1(d){var w
$.S()
w=B.I()
w.b=A.a9
w.c=d
w.e=A.dQ
return w},
$S:1707}
C.fKw.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.av(o,o):new B.av(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gdD()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b4(r,r,r,new C.bsP(u,t,r),A.aw))
w.push(B.nJ(s.d,A.ap,new C.bgE(u,t,r)))
if(!p)w.push(B.b4(r,r,r,new C.brM(u,q,t,r),A.aw))
return B.as(new B.a4(v.a,v.b,new B.an(A.a_,r,A.b3,A.t,w,r),r),r,r,r)},
$S:232}
C.fzk.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:323}
C.eEQ.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.Da(t.a.a.c),$async$$0)
case 3:s=e
r=J.a6(s)
if(r.gan(s)){u=null
w=1
break}u=r.dN(s,new C.eEO(),new C.eEP(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1708}
C.eEO.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:198}
C.eEP.prototype={
$0(){return J.ft(this.a)},
$S:1710}
C.eBd.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eBe.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eBf.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eCO.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eCC.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eCD.prototype={
$1(d){return d.hN()},
$S:z+81}
C.eAB.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eDW.prototype={
$0(){this.a.tV()},
$S:0}
C.eEM.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.E(v.b,0,u.r.length-1)
w.r=v.c
w.ot()
w.Ks()},
$S:0}
C.eCM.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.E(v.b,0,u.r.length-1)
w.r=v.c
w.ot()
w.Ks()},
$S:0}
C.eEz.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eEA.prototype={
$1(d){return d.b===D.cV},
$S:z+4}
C.eEB.prototype={
$1(d){return d.a},
$S:z+22}
C.eEC.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b4,A.aO),$.ax())},
$S:267}
C.eED.prototype={
$0(){return B.k4(!0,null,!0,!0,null,null,!1)},
$S:691}
C.eA_.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eEN.prototype={
$0(){},
$S:0}
C.eBV.prototype={
$0(){var w=this.a
w.e=this.b.hN()
w.f=0
w.r=null
w.db=!1
A.d.aa(w.ax)
A.d.aa(w.ay)
w.xM()
w.Ks()},
$S:0}
C.ezY.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.xM()},
$S:0}
C.ezZ.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.xM()},
$S:0}
C.eCh.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eCi.prototype={
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
C.eCj.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eBU.prototype={
$1(d){var w=null
return B.ep(B.a([B.bN(!1,A.Vl,w,w,!0,w,w,w,new C.eBT(d),w,w)],x.p),w,w,w,D.fRR,w,w,w,w,D.fys,w)},
$S:19}
C.eBT.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.eBR.prototype={
$1(d){var w=null
return B.ep(B.a([B.bN(!1,A.Vl,w,w,!0,w,w,w,new C.eBQ(d),w,w)],x.p),w,w,w,D.fCB,w,w,w,w,D.fAi,w)},
$S:19}
C.eBQ.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.eBS.prototype={
$0(){},
$S:0}
C.eB9.prototype={
$1(d){return this.a.b1J(C.bE0(d))},
$S:z+7}
C.eBa.prototype={
$1(d){return this.a.afZ(C.bE0(d))},
$S:z+7}
C.eC0.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aX,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fRV,A.au,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bx,new C.Q1(A.wl,D.azQ,"HATI YA KUHOWA","Hati ya mahari",new C.eBW(d),w),A.W,new C.Q1(A.ho,D.ddH,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eBX(d),w),A.W,new C.Q1(A.hB,D.cZn,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eBY(d),w),A.W,new C.Q1(A.i6,D.cXq,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eBZ(d),w)],v)
if(this.a.gaci())A.d.v(u,B.a([A.W,new C.Q1(A.jj,D.cIl,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eC_(d),w)],v))
return B.bn(!0,B.ch(B.x(u,A.ak,w,A.e,A.P,0,A.p),A.t,w,A.y,w,E.yv,w,w,A.ah),!0,!1,A.af,!0,!0)},
$S:27}
C.eBW.prototype={
$0(){B.a5(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.eBX.prototype={
$0(){B.a5(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.eBY.prototype={
$0(){B.a5(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.eBZ.prototype={
$0(){B.a5(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.eC_.prototype={
$0(){B.a5(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.eC1.prototype={
$0(){var w=this.a
w.e=this.b.hN()
w.f=0
w.r=null
w.db=!0
A.d.aa(w.ax)
A.d.aa(w.ay)
w.xM()},
$S:0}
C.eA1.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eA2.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.aa(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.np(r,v.f+1,q);++v.f
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
C.eCc.prototype={
$1(d){return d.b===D.lN},
$S:z+4}
C.eCd.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gI(v).go
w.b=A.d.gI(v).id
return new B.e1(new C.eCa(w,this.a,v),null)},
$S:21}
C.eCa.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eCb(p,o,a3,n),l=B.Q(a2).ax.a===A.J,k=l?A.c:A.N,j=l?A.aR:A.al,i=l?A.bo:A.bN,h=l?A.N:A.c,g=B.m(28),f=B.J(l?A.bz:A.aN,A.r,1),e=x.p,d=B.B(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bF,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.E,q,A.e,A.i,0,A.p),1),B.aH(q,q,q,q,B.X(A.cx,j,q,q,q,q),q,q,q,new C.eC6(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.i,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.CY[w]
v.a=null
t=v.a=u.a
a1.push(new C.bjd(t,u.b,p.a===t,i,k,new C.eC7(v,m),q))}a1=B.bY(A.bG,a1,A.br,q,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.CR[w]
s.a=null
t=s.a=r.a
u.push(new C.bjc(t,r.b,p.b===t,k,j,new C.eC8(s,m),q))}return B.bn(!0,B.p(q,B.ch(B.x(B.a([d,A.aQ,a0,A.W,a1,A.bx,v,A.W,B.bY(A.bG,u,A.br,q,12,12),A.bx,new B.a4(1/0,48,B.ex(D.c_N,D.fUl,new C.eC9(o,n),B.dj(q,q,q,q,q,q,q,q,q,A.aD,q,q,q,q,new B.b8(B.m(16),A.a0),D.b3i,q,q,q,q)),q)],e),A.E,q,A.e,A.P,0,A.p),A.t,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.ud,D.bBv,q,q,q),!0,!1,A.af,!0,!0)},
$S:86}
C.eCb.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eC4(w.a,d,e))
w.b.d7(new C.eC5(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1713}
C.eC4.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eC5.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eC6.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.eC7.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eC8.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eC9.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A6.H2(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d7(new C.eC3(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eC3.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eCf.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eCg.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bs(v,new C.eCe(t.d))
u=A.o.E(s.a,0,v.length)
s.a=u
s=t.e
A.d.np(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.E(s.f,0,v.length-1)
s.r=null
s.xM()},
$S:0}
C.eCe.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eCx.prototype={
$1(d){return d.b===D.cV},
$S:z+4}
C.eCy.prototype={
$1(d){return d.w},
$S:z+82}
C.eCz.prototype={
$2(d,e){return d>e?d:e},
$S:80}
C.eCA.prototype={
$1(d){var w=this,v=null,u=B.Q(d).ax.a===A.J,t=u?A.c:A.N,s=u?A.aR:A.al,r=u?A.bo:A.aP,q=u?A.N:A.c,p=B.m(28),o=B.J(u?A.bz:A.aN,A.r,1),n=B.aG(d,A.bZ,x.w).w,m=w.a,l=x.p,k=w.b
return B.bn(!0,B.p(v,B.x(B.a([B.B(B.a([B.p(v,D.bUi,A.f,v,v,D.b4E,v,38,v,v,v,v,v,38),A.bc,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.E,v,A.e,A.i,0,A.p),1),B.aH(v,v,v,v,B.X(A.cx,s,v,v,v,v),v,v,v,new C.eCu(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.i,0,v,v),A.aB,new B.dr(1,A.cn,B.hR(v,new C.eCv(m,k,w.c,s,w.d,t,r),k.length,A.fu,v,A.ah,new C.eCw(),!0),v)],l),A.E,v,A.e,A.P,0,A.p),A.f,v,new B.aZ(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.ud,A.a_z,v,v,v),!0,!1,A.af,!0,!0)},
$S:27}
C.eCu.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.eCw.prototype={
$2(d,e){return A.ae},
$S:37}
C.eCv.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aD:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cA
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.bXz,q,q,q,new C.eCs(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bDL,n,q),B.aM(q,A.Y,!1,q,!0,A.t,q,B.aN(),v,q,q,q,q,q,2,B.br(q,new B.b5(4,B.m(16),A.a0),q,A.eS,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b5(4,B.m(16),D.b2Y),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.aj,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eCt(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.aa,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a4,q,A.an,q,q,q,q)],x.p),A.E,q,A.e,A.i,0,A.p)},
$S:692}
C.eCs.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.ilX(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geL()?p.a:q.a.length
n=p.geL()?p.b:q.a.length
m=A.a.oZ(q.a,o,n,s)
r.bP(0,new B.ba(m,B.hl(A.bA,o+s.length),A.aO))
l.ak_(k,m)
l.pB()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eCt.prototype={
$1(d){var w=this.a
w.ak_(this.b.a,d)
w.pB()},
$S:2}
C.eCB.prototype={
$0(){},
$S:0}
C.eC2.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eAi.prototype={
$0(){},
$S:0}
C.eAj.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hyw(this.b,w,!0)
w=this.a
w.r=null
w.xM()},
$S:0}
C.eAk.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eAl.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bs(v,new C.eAh(t.d))
u=A.o.E(s.a,0,v.length)
s.a=u
s=t.e
A.d.np(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.E(s.f,0,v.length-1)
s.r=null
s.xM()},
$S:0}
C.eAh.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eCH.prototype={
$1(d){return B.p5(new C.eCG(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:135}
C.eCG.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.alu,B.x(B.a([D.fPl,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.E,w,A.e,A.i,0,A.p),w),B.E(B.io(!0,w,e,A.y,D.faf,new C.eCF(this.a,this.b),20,A.ug,w,A.ah,!1),1)],v),A.ak,w,A.e,A.i,0,A.p)},
$S:453}
C.eCF.prototype={
$2(d,e){var w=null,v=D.I3[e],u=C.hRp(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.J(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fP,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bm,B.p(w,D.f3J,A.f,w,w,new B.o(A.dF.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.mL,w,w,w)],m))
return B.aI(!1,A.a2,!0,w,B.aO(!1,t,!0,B.p(w,B.x(B.a([B.B(n,A.m,w,A.e,A.i,0,w,w),A.b2,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a9(A.a5,A.a8,A.x,r,w,w),A.n),w,w,w,w,A.bg,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eCE(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)},
$S:79}
C.eCE.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cj2(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a5(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eCI.prototype={
$0(){var w=this.a
w.e=this.b.hN()
w.f=0
w.r=null
w.db=!0
A.d.aa(w.ax)
A.d.aa(w.ay)
w.xM()},
$S:0}
C.eyX.prototype={
$0(){var w,v=this.a,u=v.gqF(),t=C.rM(4294967295,null,0,0,null,C.cF(),D.mV,"","","",D.dh),s=this.b
C.cjf(t,s,u)
w=v.gdz()
if(w!=null&&s!==D.DB){t.e=w.e
t.f=w.f}A.d.c6(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eAg.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ah()
q.n(0,"id",C.cF())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aW(w),u=x.f;v.C();){t=v.gS(v)
if(u.b(t)){s=Date.now()
r=$.j9
$.j9=r+1
J.aJ(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c6(v.e.r,v.f+1,C.hlr(q));++v.f},
$S:0}
C.eAe.prototype={
$0(){var w=this.a
A.d.cz(w.e.r,w.f)
w.f=A.o.E(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eCQ.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cz(v.e.r,u),s=this.c
A.d.c6(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eAa.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bs(v.d,new C.eA9(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eA9.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eCP.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.V(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eA0.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b4,A.aO),$.ax())},
$S:267}
C.eAC.prototype={
$0(){return B.k4(!0,null,!0,!0,null,null,!1)},
$S:691}
C.eEx.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.eEy.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.auy(w).fT()
v=u.Xe(w)
v.stF(B.hl(A.bA,v.a.a.length))},
$S:8}
C.eDX.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Yd(v)
if(u!=null&&u.b===D.cV)w.Xe(u).saY(0,u.r)}else w.w=null},
$S:0}
C.eyY.prototype={
$0(){var w=C.cF(),v=this.a,u=C.ew(A.bj,!1,v.gqF().e.l(),A.aF,"",4280640491,24,A.bp,A.a7,"",0.22,w,null,"","",0,!1,"",0,D.bi,4280172719,2,"Tap to edit text",0,0,"",D.co,D.cV,0.7,0.15,0.2)
A.d.M(v.gdz().z,u)
v.r=u.a},
$S:0}
C.eyV.prototype={
$0(){var w=C.cF(),v=this.a,u=C.ew(A.bj,!1,4279310375,A.aF,"",v.gqF().c.j(0.25).l(),24,A.bp,A.a7,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqF().c.l(),2,"",0,0,"",D.co,D.fb,0.25,0.3,0.3)
A.d.M(v.gdz().z,u)
v.r=u.a},
$S:0}
C.eyL.prototype={
$0(){var w=C.ew(A.bj,!1,4279310375,A.aF,"",4280640491,24,A.bp,A.a7,"",0.55,C.cF(),this.b,"","",0,!1,"",0,D.bi,4280172719,2,"",0,0,"",D.co,D.lN,0.6,0.2,0.18),v=this.a
A.d.M(v.gdz().z,w)
v.r=w.a},
$S:0}
C.eyI.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.c6N],x.p)
for(w=J.aW(this.a);w.C();){v=w.gS(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gakD().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dG(!1,r,r,r,!0,r,r,r,!0,r,r,D.bRY,r,r,r,r,new C.eyH(d,v),!1,r,r,r,r,r,new B.y(""+t+" links"+s,r,r,r,r,r,r,A.a1,r,1,r,r),r,new B.y(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bn(!0,B.cl(q,r,r,r,r,r,A.ah,!0),!0,!1,A.af,!0,!0)},
$S:27}
C.eyH.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.eyJ.prototype={
$0(){var w=A.k.E(0.23131034482758622,0.12,0.5),v=C.cF(),u=this.b,t=A.X.aq(u.ah(),null),s=C.ew(A.bj,!1,4279310375,A.aF,u.b,4280640491,24,A.bp,A.a7,"",0.86,v,null,"","",0,!1,"",0,D.bi,4280172719,2,t,0,0,"",D.co,D.a76,w,0.5-w/2,0.07)
t=this.a
A.d.M(t.gdz().z,s)
t.r=s.a},
$S:0}
C.eAc.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eAd.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bs(v.gdz().z,new C.eAb(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.T$=$.ax()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.eAb.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.ezp.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cV)s.Q=t.c.l()
else if(w===D.fb){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.ezq(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.L)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.ezq.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.ezu.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.ezv(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.L)(s),++u)v.$1(s[u])}else{t=s.gdz()
if(t!=null)v.$1(t)}},
$S:0}
C.ezv.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.ezs.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cV){s.Q=t.c
return}w=new C.ezt(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.L)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.ezt.prototype={
$1(d){var w,v,u
for(w=A.d.gaf(d.z),v=new B.f2(w,new C.ezr()),u=this.a;v.C();)w.gS(0).Q=u},
$S:z+1}
C.ezr.prototype={
$1(d){return d.b===D.cV},
$S:z+4}
C.ezo.prototype={
$0(){return C.cjf(this.b,this.c,this.a.gqF())},
$S:0}
C.eCr.prototype={
$0(){return A.d.c6(this.a.d,0,this.b)},
$S:0}
C.eEG.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eEH.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eEI.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eEJ.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c6(s,0,v.b)
else{w=A.d.bh(s,new C.eEF(v))
if(w>=0)t.d[w]=v.b}if(v.a.gSP()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hN()
t.f=0
t.r=null
t.db=!1
A.d.aa(t.ax)
A.d.aa(t.ay)
t.xM()
t.Ks()}},
$S:0}
C.eEF.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eEc.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acm(),s=w.b,r=u.acn(A.fh,A.jE,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.J(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.Q,r,A.bx,B.p(v,B.B(B.a([B.E(u.aWu(w.c,A.al),1),new B.D(A.fC,B.p(v,D.bS3,A.f,v,v,new B.o(A.fh.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.E(u.aWu(s,A.fh),1)],n),A.m,v,A.e,A.i,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a9(A.ay,A.aE,A.x,p,v,v),A.n),v,v,v,v,A.bD,v,v,v),A.bx,u.aWx(A.fh,d,D.bO8,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.W,u.c_j(A.aJ,d,A.uv,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aWv(d,"Not now"))
return new C.Kg(B.x(p,A.ak,v,A.e,A.P,0,A.p),v)},
$S:z+9}
C.eEb.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.Kg(B.x(B.a([v.acm(),A.Q,v.acn(A.aJ,D.bNO,"Pick which saved document should receive the details.","Choose "+this.b),A.aQ,new B.cT(new B.aZ(0,1/0,0,B.aG(d,A.bZ,x.w).w.a.b*0.42),B.hR(w,new C.eE9(v,u,d),u.length,w,w,A.ah,new C.eEa(),!0),w),A.aB,v.aWv(d,"Cancel")],x.p),A.ak,w,A.e,A.P,0,A.p),w)},
$S:z+9}
C.eEa.prototype={
$2(d,e){return A.W},
$S:37}
C.eE9.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.J(A.c.j(0.08),A.r,1),q=x.p
return B.aI(!1,A.a2,!0,w,B.aO(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.aqt,A.f,w,w,new B.o(w,w,w,B.m(12),w,D.c3J,A.n),w,42,w,w,w,w,w,42),A.bc,B.E(B.x(B.a([B.d(v.b,w,1,A.a1,w,w,w,A.n3,w,w,w),A.cS,B.d("Updated "+this.a.Qo(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.E,w,A.e,A.i,0,A.p),1),B.X(A.eE,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bD,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eE8(this.c,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)},
$S:79}
C.eE8.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.eE5.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.acm()
t=t.acn(A.aA,A.uG,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.Kg(B.x(B.a([s,A.Q,t,A.bx,B.B(B.a([B.E(B.dT(A.aax,new C.eE3(d),B.dj(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cm,u,new B.b8(B.m(14),A.a0),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.as,B.E(B.bI(D.fAT,u,new C.eE4(d),B.bo(A.fh,u,u,u,A.c,u,A.cm,u,new B.b8(B.m(14),A.a0),u,u,u)),1)],v),A.m,u,A.e,A.i,0,u,u)],v),A.ak,u,A.e,A.P,0,A.p),u)},
$S:z+9}
C.eE3.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.eE4.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.eE7.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acm(),s=w.b,r=u.acn(A.aW,A.e6,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.E(u.avT("Names",""+w.c),1),A.ad,B.E(u.avT("Fields",""+w.d),1),A.ad,B.E(u.avT("Signatures",""+w.e),1)],q),A.m,v,A.e,A.i,0,v,v),o=B.bo(A.bl,v,v,v,A.c,v,A.yk,v,new B.b8(B.m(14),A.a0),v,v,v)
return new C.Kg(B.x(B.a([t,A.Q,r,A.aQ,p,A.bx,B.bI(B.d("Open "+s,v,v,v,v,v,v,A.nL,v,v,v),v,new C.eE6(d),o),A.W,u.aWw(d,"Stay here",!1)],q),A.ak,v,A.e,A.P,0,A.p),v)},
$S:z+9}
C.eE6.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.eB5.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.eB4.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.eDY.prototype={
$1(d){return d.b===D.cV},
$S:z+4}
C.eEw.prototype={
$1(d){var w=this.a,v=this.b
return new C.a02(A.d.dN(w.d,new C.eEu(v),new C.eEv(v)).hN(),w.f,null)},
$S:z+84}
C.eEu.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eEv.prototype={
$0(){return this.a},
$S:z+85}
C.eyQ.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bD,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.fS,w,w,w),w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bTR,w,w,w,w,new C.eyO(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fyR,w,w,w)],x.p)
if(v>1)t.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bV5,w,w,w,w,new C.eyP(d),!1,w,w,w,w,w,D.fVB,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.df,w,w,w),w,w,w))
return B.bn(!0,B.x(t,A.m,w,A.e,A.P,0,A.p),!0,!1,A.af,!0,!0)},
$S:27}
C.eyO.prototype={
$0(){B.a5(this.a,!1).O("scroll")
return null},
$S:0}
C.eyP.prototype={
$0(){B.a5(this.a,!1).O("split")
return null},
$S:0}
C.eyR.prototype={
$0(){var w=this.b,v=w.c,u=C.ew(A.bj,!1,4279310375,A.aF,v,4280640491,24,A.bp,A.a7,"",0.84,C.cF(),w.b,"","",0,!1,"",0,D.bi,4280172719,2,v,0,0,"",D.co,D.T5,0.88,0.06,0.08)
v=this.a
A.d.M(v.gdz().z,u)
v.r=u.a},
$S:0}
C.eyS.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.j9
$.j9=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.j9
$.j9=k+1
m.push(new C.eP(""+1000*l+"_"+k,D.T5,0.04,0.06,0.92,0.88,v,24,A.a7,A.bp,A.aF,4279310375,A.bj,u,D.bi,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.co,0,"","","","","",!1,0))
A.d.c6(j.e.r,i+q-1,new C.lW(""+1000*p+"_"+o,r+n,"",D.qL,4294967295,null,D.dh,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eyW.prototype={
$0(){var w,v=C.cF(),u=this.a,t=u.e
t=(t==null?null:C.kH(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.ew(A.bj,!1,4279310375,A.aF,t,4280640491,24,A.bp,A.a7,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bi,4280172719,2,"",0,0,"",D.co,D.ll,0.35,0.55,0.62)
A.d.M(u.gdz().z,w)
u.r=w.a},
$S:0}
C.eyN.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b4q(o)
w=C.cF()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.ew(A.bj,!1,4279310375,A.aF,"marriage_sign_placed_"+A.a.em(v.db,"marriage_sign_",""),4280640491,24,A.bp,A.a7,"",r,w,o.a,"","",0,!1,"",0,D.bi,4280172719,2,"",0,0,"",D.co,D.ll,s,u,t)
A.d.M(p.gdz().z,q)
A.d.bs(p.gdz().z,new C.eyM(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.ifQ(p)}},
$S:0}
C.eyM.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eCN.prototype={
$0(){var w=this.a,v=this.b
w.b4q(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eEE.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.eB8.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bs(r.z,new C.eB7())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eB7.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.ezy.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.ezz.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.tV()},
$S:8}
C.eyK.prototype={
$0(){var w=C.ew(A.bj,!1,4279310375,A.aF,"HD Photo",4280640491,24,A.bp,A.a7,"",0.8,C.cF(),this.b,"","",0,!1,"",0,D.bi,4280172719,2,"",0,0,"",D.co,D.lN,0.8,0.1,0.1),v=this.a
A.d.M(v.gdz().z,w)
v.r=w.a},
$S:0}
C.eAA.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eyT.prototype={
$0(){var w=this.a,v=this.b
A.d.M(w.gdz().z,v)
w.r=v.a},
$S:0}
C.ez1.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.ez2.prototype={
$0(){var w=this.b.hN(),v=C.cF(),u=A.k.E(w.c+0.04,0,0.92),t=A.k.E(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.ew(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.M(t.gdz().z,f)
t.r=f.a},
$S:0}
C.ez3.prototype={
$0(){var w=this.a.gdz().z,v=this.b,u=A.d.bh(w,new C.ez0(v))
if(u>=0&&u<w.length-1){A.d.cz(w,u)
A.d.c6(w,u+1,v)}},
$S:0}
C.ez0.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eze.prototype={
$0(){var w=this.a.gdz().z,v=this.b,u=A.d.bh(w,new C.ez_(v))
if(u>0){A.d.cz(w,u)
A.d.c6(w,u-1,v)}},
$S:0}
C.ez_.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ezh.prototype={
$0(){return this.a.as=A.bj},
$S:0}
C.ezi.prototype={
$0(){return this.a.as=A.K},
$S:0}
C.ezj.prototype={
$0(){return this.a.as=A.dV},
$S:0}
C.ezk.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.ezl.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.ezm.prototype={
$1(d){return d.b===D.cV},
$S:z+4}
C.ezn.prototype={
$1(d){return d.length!==0},
$S:3}
C.ez4.prototype={
$0(){var w=this.a,v=w.gdz().z,u=C.cF()
A.d.M(v,C.Df(w.gqF().c.j(0.18).l(),0.1,u,D.bi,0,2,1,0,0))
u=w.gdz().z
v=C.cF()
A.d.M(u,C.j3(A.bj,!1,w.gqF().d.l(),A.aF,18,A.bp,A.H,0.07,v,"Document Header",0,D.dh,0.9,0.05,0.02))},
$S:0}
C.ez5.prototype={
$0(){var w,v=this.a,u=v.gdz().z,t=C.cF()
A.d.M(u,C.Df(v.gqF().c.j(0.12).l(),0.1,t,D.bi,0,2,1,0,0.9))
t=v.gdz().z
u=C.cF()
w=C.bEJ()
A.d.M(t,C.j3(A.K,!1,v.gqF().e.l(),A.aF,12,A.bp,A.a7,0.06,u,"Footer \xb7 "+w,0,D.dh,0.9,0.05,0.92))},
$S:0}
C.ez6.prototype={
$0(){A.d.M(this.a.gdz().z,C.Df(1727914055,0.12,C.cF(),D.bi,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.ez7.prototype={
$0(){var w=4279310375
A.d.M(this.a.gdz().z,C.Df(w,0.08,C.cF(),D.bi,w,2,0.5,0.2,0.4))},
$S:0}
C.ez8.prototype={
$0(){var w=this.a,v=w.gdz().z,u=C.cF()
A.d.M(v,C.Df(w.gqF().c.j(0.35).l(),0.12,u,D.DC,4280640491,2,0.2,0.15,0.55))
A.d.M(w.gdz().z,C.j3(A.bj,!1,4279310375,A.aF,18,A.bp,A.a7,0.15,C.cF(),"Important note",0,D.qM,0.5,0.38,0.52))},
$S:0}
C.ez9.prototype={
$0(){var w=this.a
A.d.M(w.gdz().z,C.Df(4294507260,0.78,C.cF(),D.bi,4291548641,1.5,0.84,0.08,0.1))
A.d.M(w.gdz().z,C.j3(A.bj,!1,4279179050,A.aF,16,A.bp,A.a7,0.7,C.cF(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bEJ()+"\n\nSubject:\n\nBody text\u2026",0,D.dh,0.76,0.12,0.14))},
$S:0}
C.eza.prototype={
$0(){var w=this.a
A.d.M(w.gdz().z,C.Df(4294897802,0.28,C.cF(),D.bi,4294626325,2,0.3,0.62,0.12))
A.d.M(w.gdz().z,C.j3(A.bj,!1,4285611794,A.aF,15,A.bp,A.a7,0.24,C.cF(),"Sticky note",0,D.aJG,0.26,0.64,0.14))},
$S:0}
C.ezb.prototype={
$0(){var w=4280640491,v=this.a
A.d.M(v.gdz().z,C.Df(4293060848,0.04,C.cF(),D.bi,4291548641,2,0.8,0.1,0.48))
A.d.M(v.gdz().z,C.Df(w,0.04,C.cF(),D.bi,w,2,0.55,0.1,0.48))},
$S:0}
C.ezc.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdz().z,C.j3(A.bj,!1,w,A.aF,18,A.bp,A.a7,0.62,C.cF(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.J0,0.42,0.06,0.18))
A.d.M(v.gdz().z,C.j3(A.bj,!1,w,A.aF,18,A.bp,A.a7,0.62,C.cF(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.v_,0.42,0.52,0.18))},
$S:0}
C.ezd.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdz().z,C.Df(858088427,0.62,C.cF(),D.bi,4280640491,2,0.42,0.05,0.18))
A.d.M(v.gdz().z,C.Df(856004201,0.62,C.cF(),D.bi,4278556265,2,0.42,0.53,0.18))
A.d.M(v.gdz().z,C.j3(A.bj,!1,w,A.aF,20,A.bp,A.H,0.1,C.cF(),"Option A",0,D.dh,0.36,0.08,0.2))
A.d.M(v.gdz().z,C.j3(A.bj,!1,w,A.aF,20,A.bp,A.H,0.1,C.cF(),"Option B",0,D.dh,0.36,0.56,0.2))},
$S:0}
C.ezf.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdz().z,C.Df(4294967295,0.36,C.cF(),D.bi,w,2,0.24,0.38,0.28))
A.d.M(v.gdz().z,C.j3(A.K,!1,w,A.aF,14,A.bp,A.a7,0.12,C.cF(),"[ QR CODE ]",0,D.dh,0.24,0.38,0.4))},
$S:0}
C.ezg.prototype={
$0(){return C.cjf(this.b,D.T6,this.a.gqF())},
$S:0}
C.eAz.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a8T.t(0,d),t=this.a
return t.b9z(d,v===d,A.b1,this.c,new C.eAy(t,u,d,w),u)},
$S:z+25}
C.eAy.prototype={
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
C.bFv(r,new C.eAx(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eAx.prototype={
$0(){return this.a.d7(new C.eAw(this.b,this.c))},
$S:0}
C.eAw.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eyU.prototype={
$0(){var w,v=this.a,u=v.gqF(),t=C.rM(4294967295,null,0,0,null,C.cF(),D.mV,"","","",D.dh),s=this.b
C.cjf(t,s,u)
w=v.gdz()
if(w!=null&&s!==D.DB){t.e=w.e
t.f=w.f}A.d.c6(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.ezC.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.im_(p,q.d,s,new C.ezB(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.tV(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ezB.prototype={
$1(d){return this.bmm(d)},
bmm(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.ezA(t,d))
w=2
return B.b(t.tV(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.ezA.prototype={
$0(){var w,v,u
for(w=J.aW(this.b),v=this.a;w.C();){u=w.gS(w)
A.d.c6(v.d,0,u)}},
$S:0}
C.ezD.prototype={
$0(){return this.a.bKR()},
$S:0}
C.ezE.prototype={
$0(){return this.a.aRH("Class Presentation",!0)},
$S:0}
C.ezF.prototype={
$1(d){return this.a.bLN(d.b,this.b,d.a)},
$S:z+88}
C.eAf.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aG(w,A.bZ,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eCq.prototype={
$1(d){return new B.D(new B.P(0,0,0,B.aG(d,A.eN,x.w).w.f.d),new B.e1(new C.eCp(this.a,this.b),null),null)},
$S:61}
C.eCp.prototype={
$2(d,e){return B.p5(new C.eCo(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:623}
C.eCo.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.av:A.c,s=B.J(u?A.bz:A.aN,A.r,1),r=B.p(v,v,A.f,v,v,new B.o(A.aX,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.x(B.a([A.W,r,new B.D(A.akU,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.N,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b2,B.bN(!1,A.At,v,v,!0,v,v,v,new C.eCm(w.c),v,v)],q),A.m,v,A.e,A.i,0,v,v),v),B.E(B.cl(B.a([p.aUr(u,!0,!0,new C.eCn(p,w.d))],q),e,v,D.bzc,v,v,A.ah,!1),1)],q),A.m,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(t,v,s,A.kZ,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:121}
C.eCm.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.eCn.prototype={
$0(){this.b.$1(new C.eCk())
var w=this.a
if(w.c!=null)w.m(new C.eCl())},
$S:0}
C.eCk.prototype={
$0(){},
$S:0}
C.eCl.prototype={
$0(){},
$S:0}
C.eDZ.prototype={
$3(d,e,f){return A.bJ},
$C:"$3",
$R:3,
$S:91}
C.eE_.prototype={
$4(d,e,f,g){var w=A.cu.aw(0,e.gp(0))
return B.db(B.ee(A.A,new C.aA_(this.a,null),0.94+w*0.06,null,null),w)},
$S:451}
C.eE0.prototype={
$3(d,e,f){return A.bJ},
$C:"$3",
$R:3,
$S:91}
C.eE1.prototype={
$4(d,e,f,g){var w=A.cu.aw(0,e.gp(0))
return B.db(B.ee(A.A,new C.ber(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:451}
C.eE2.prototype={
$0(){return A.d.c6(this.a.d,0,C.Wo(this.b))},
$S:0}
C.eyZ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dw.aw(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.av.j(0.72)],t):B.a([A.c.j(0.88),A.pX.j(0.75)],t)
r=B.J(A.b_.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.b_.j(0.35+q),A.cf.j(0.18),A.L],t)
q=B.J(A.b_.j(0.45+q),A.r,1)
t=B.p(p,B.X(A3.a1p,u?A.ac:A.N,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.c_(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.N,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bx(o,B.uo(A.fL,B.p(p,B.x(B.a([t,A.aB,q,A.am,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aC:A.al,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],x.p),A.m,p,A.e,A.i,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a9(A.ay,A.aE,A.x,s,p,p),A.n),p,p,p,p,A.eu,p,p,1/0),14,!1),A.ap)},
$S:299}
C.eA3.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.eA4.prototype={
$1(d){return d.length!==0},
$S:3}
C.eA5.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.jY
else{w=B.ag("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a1Y:A.Cb}return w},
$S:695}
C.eA8.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dw.aw(0,A.k.F(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.av.j(0.78)],s):B.a([A.c.j(0.92),A.nb.j(0.82)],s)
r=m.e
q=A.d.gI(r)
p=t?0.34:0.26
p=B.J(q.j(p+w*0.22),A.r,1.25)
q=B.m(10)
q=B.p(l,B.X(C.kH(v.w)?A.wl:A.qz,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a9(A.a5,A.a8,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.N,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.Qo(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.Qo(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.Qo(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.w(n)+" \u2022 Updated "+k.Qo(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.Qo(v.f)
r=k.bLL(n,A.d.gI(r),t)
return B.p(l,B.bx(j,new B.a8p(B.aI(!1,A.a2,!0,l,B.aO(!1,l,!0,B.p(l,B.dG(!1,A.Nw,l,l,!0,l,l,l,!0,l,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.X(A.on,t?A.aC:A.bM,l,l,l,l),l,l,l,new C.eA6(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a9(A.ay,A.aE,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eA7(k,v),l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.ai),l),A.ap),A.f,l,l,l,l,l,l,A.d1,l,l,l,l)},
$S:97}
C.eA7.prototype={
$0(){return this.a.afZ(this.b)},
$S:0}
C.eA6.prototype={
$0(){return this.a.B0(this.b,this.c)},
$S:0}
C.eBz.prototype={
$0(){var w=this.a
w.b88()
w.m(new C.eBy())},
$S:0}
C.eBy.prototype={
$0(){},
$S:0}
C.eBA.prototype={
$1(d){return this.a.ak_(this.b.a,d)},
$S:2}
C.eBB.prototype={
$0(){this.a.d7(new C.eBx(this.b))},
$S:0}
C.eBx.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.U)?A.cA:A.U},
$S:0}
C.eBC.prototype={
$0(){this.a.d7(new C.eBw(this.b))},
$S:0}
C.eBw.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bp:A.cD},
$S:0}
C.eBD.prototype={
$0(){this.a.d7(new C.eBv(this.b))},
$S:0}
C.eBv.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aF:A.n0},
$S:0}
C.eBE.prototype={
$0(){this.a.d7(new C.eBu(this.b))},
$S:0}
C.eBu.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eBF.prototype={
$0(){var w=this.a
w.d7(new C.eBt(w,this.b))},
$S:0}
C.eBt.prototype={
$0(){var w=this.b
return w.as=this.a.c6d(w.as)},
$S:0}
C.eBG.prototype={
$0(){return this.a.d7(new C.eBs(this.b))},
$S:0}
C.eBs.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.eBH.prototype={
$0(){return this.a.d7(new C.eBr(this.b))},
$S:0}
C.eBr.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.eBk.prototype={
$0(){return this.a.a2O(this.b.a)},
$S:0}
C.eBl.prototype={
$0(){this.a.a0i()
return null},
$S:0}
C.eBm.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aG(v,A.bZ,x.w).w.a.a<900)w.agh()
else w.m(new C.eBj(w))},
$S:0}
C.eBj.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eBn.prototype={
$0(){this.a.d7(new C.eBi(this.b))},
$S:0}
C.eBi.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.U)?A.cA:A.U},
$S:0}
C.eBo.prototype={
$0(){return this.a.d7(new C.eBh(this.b))},
$S:0}
C.eBh.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.eBp.prototype={
$0(){return this.a.d7(new C.eBg(this.b))},
$S:0}
C.eBg.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.eBq.prototype={
$0(){return this.a.aB_(null)},
$S:0}
C.eAs.prototype={
$0(){this.a.DQ()
return null},
$S:0}
C.eAt.prototype={
$0(){this.a.aaS()
return null},
$S:0}
C.eAv.prototype={
$1(d){return this.bmn(d)},
bmn(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(B.bV(A.av,null,new C.eAn(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d7(new C.eAo(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d7(new C.eAp(r))
s=s.c.K(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d7(new C.eAq(r))
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
return B.b(C.hzN(q,new C.ET(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d7(new C.eAr(r,p))
s=s.c.K(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.aht(q)
q=B.w(q==null?null:q.b)+" will play after your last slide."}s.U(B.b3(null,null,null,null,null,A.t,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:94}
C.eAn.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.eo1],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bU_:r
q.push(B.dG(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,r,new C.eAm(d,t),!1,r,r,r,r,r,r,r,new B.y(""+t+" seconds",r,A.df,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bn(!0,B.x(q,A.m,r,A.e,A.P,0,A.p),!0,!1,A.af,!0,!0)},
$S:27}
C.eAm.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.eAo.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eAp.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eAq.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eAr.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eAu.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.A2(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.A2(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.A2(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.aht(r?t:s.db)
s=s==null?t:s.b
return B.a([D.ety,q,v,u,B.A2(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:140}
C.eEK.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bEG(w,v)}},
$S:0}
C.eEL.prototype={
$0(){this.a.DQ()
return null},
$S:0}
C.eBK.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.c3D:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bN
if(s)v=A.c
else v=this.b?A.aR:A.bs
return new B.D(A.fu,B.aA(u,B.cY(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b5,new B.o(w,u,u,r,u,q,A.n),A.eH,u,u,u,u,A.lF,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eBJ(t,d),u,u,u,u,u,u,!1,A.a3),u)},
$S:137}
C.eBJ.prototype={
$0(){var w=this.a
return w.m(new C.eBI(w,this.b))},
$S:0}
C.eBI.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eBL.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a51:E.azX
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbPi():t.gbLb()
return B.he(B.aA(u,B.p(u,D.apT,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gI(v).j(0.45),A.I,10)],x.V),new B.a9(A.a5,A.a8,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a3),u,s,u,u)},
$S:1718}
C.eBM.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.ilf(v,w.a.c)},
$S:0}
C.eD8.prototype={
$0(){return this.b.vw(this.a.a)},
$S:0}
C.eD9.prototype={
$0(){return this.a.vw(D.mV)},
$S:0}
C.eDa.prototype={
$0(){return this.a.vw(D.IZ)},
$S:0}
C.eDl.prototype={
$0(){return this.a.vw(D.J_)},
$S:0}
C.eDw.prototype={
$0(){return this.a.vw(D.IY)},
$S:0}
C.eDH.prototype={
$0(){return this.a.qr("lab_report")},
$S:0}
C.eDO.prototype={
$0(){return this.a.qr("rubric")},
$S:0}
C.eDP.prototype={
$0(){return this.a.qr("minutes")},
$S:0}
C.eDQ.prototype={
$0(){return this.a.qr("agenda")},
$S:0}
C.eDR.prototype={
$0(){return this.a.qr("timeline")},
$S:0}
C.eDS.prototype={
$0(){return this.a.qr(this.b.a)},
$S:0}
C.eDb.prototype={
$0(){this.a.Wk()
return null},
$S:0}
C.eDc.prototype={
$0(){this.a.We()
return null},
$S:0}
C.eDd.prototype={
$0(){return this.a.qr("table")},
$S:0}
C.eDe.prototype={
$0(){return this.a.qr("sticky")},
$S:0}
C.eDf.prototype={
$0(){return this.a.qr("divider")},
$S:0}
C.eDg.prototype={
$0(){return this.a.qr("header_bar")},
$S:0}
C.eDh.prototype={
$0(){return this.a.pi(D.bi)},
$S:0}
C.eDi.prototype={
$0(){return this.a.pi(D.eT)},
$S:0}
C.eDj.prototype={
$0(){return this.a.pi(D.k2)},
$S:0}
C.eDk.prototype={
$0(){return this.a.pi(D.DC)},
$S:0}
C.eDm.prototype={
$0(){return this.a.pi(D.k3)},
$S:0}
C.eDn.prototype={
$0(){return this.a.pi(D.lm)},
$S:0}
C.eDo.prototype={
$0(){return this.a.pi(D.fD)},
$S:0}
C.eDp.prototype={
$0(){this.a.HB()
return null},
$S:0}
C.eDq.prototype={
$0(){this.a.NM()
return null},
$S:0}
C.eDr.prototype={
$0(){return this.a.qr("quote")},
$S:0}
C.eDs.prototype={
$0(){return this.a.a90()},
$S:0}
C.eDt.prototype={
$0(){this.a.a0o()
return null},
$S:0}
C.eDu.prototype={
$0(){var w=this.a
return w.m(new C.eCZ(w))},
$S:0}
C.eCZ.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eDv.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.oh(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.eD6(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eD6.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eDx.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.k7()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a8U.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aX
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.J(t,A.r,v?2.5:1),s,s,new B.a9(A.a5,A.a8,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a8U.t(0,q))u.push(B.ap(s,B.p(s,D.Pa,A.f,s,s,D.EX,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fu,B.aA(s,B.he(new B.an(A.a_,s,A.ab,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eD5(r,d),s,s,s,s,s,s,!1,A.a3),s)},
$S:z+89}
C.eD5.prototype={
$0(){this.a.a9i(this.b)
return null},
$S:0}
C.eDy.prototype={
$0(){this.a.a9h(this.b)
return null},
$S:0}
C.eDz.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hRq(d),p=this.a,o=B.m(8),n=p.gdz()
n=n==null?r:n.x
w=d.a
n=n===w?A.bl:A.aX
v=p.gdz()
n=B.J(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.rM(4294967295,r,0,0,r,"preview_"+w,D.qL,"","","",D.dh)
C.hwA(s,w)
w=x.p
u=B.a([B.bx(o,B.p(r,B.bx(t,C.hxV(s),A.ap),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.ap)],w)
if(q)u.push(B.ap(r,B.p(r,D.aqu,A.f,r,r,D.EX,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iE,B.aA(r,B.x(B.a([new B.an(A.a_,r,A.ab,A.t,u,r),A.cS,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aC:A.al,r,r,r,r,r,r,r,r,9,r,r,A.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.i,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eD4(p,q,d),r,r,r,r,r,r,!1,A.a3),r)},
$S:z+90}
C.eD4.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gdz()
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
break}s.d7(new C.eCV(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eCV.prototype={
$0(){return C.hwA(this.a,this.b.a)},
$S:0}
C.eD7.prototype={
bmo(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a8T.t(0,d)
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
$2(d,e){return this.bmo(d,e)},
$S:z+91}
C.eDT.prototype={
$4(d,e,f,g){var w=null,v=B.T(d).k("N<1,v>")
v=B.C(new B.N(d,new C.eDV(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.ch(B.B(v,A.m,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aM)},
$S:z+92}
C.eDV.prototype={
$1(d){var w=this
return w.a.b9z(d,w.b===d,w.c,w.d,new C.eDU(w.e,d),!D.a8T.t(0,d))},
$S:z+25}
C.eDU.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eDA.prototype={
$1(d){this.b.$2(d,new C.eD3(this.a,d,this.c))
return null},
$S:z+26}
C.eD3.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bFv(u,new C.eCU(v,this.c,w),w)},
$S:0}
C.eCU.prototype={
$0(){return this.a.d7(new C.eCS(this.b,this.c))},
$S:0}
C.eCS.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eDB.prototype={
$1(d){this.b.$2(d,new C.eD2(this.a,d))
return null},
$S:z+26}
C.eD2.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fZx(u,new C.eCT(v,w),w)},
$S:0}
C.eCT.prototype={
$0(){var w=this.a
return w.d7(new C.eCR(w,this.b))},
$S:0}
C.eCR.prototype={
$0(){return this.a.gdz().r=this.b},
$S:0}
C.eDC.prototype={
$0(){var w=this.a
return w.m(new C.eD1(w))},
$S:0}
C.eD1.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eDD.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bEG(w,v)}},
$S:0}
C.eDE.prototype={
$0(){this.a.In()
return null},
$S:0}
C.eDF.prototype={
$0(){return this.a.a90()},
$S:0}
C.eDG.prototype={
$0(){var w=this.a,v=w.k7()
if(v!=null&&v.b===D.cV)w.d7(new C.eD0(v))},
$S:0}
C.eD0.prototype={
$0(){var w=this.a
w.f=A.k.E(w.f*1.25,0.08,1.8)
w.e=A.k.E(w.e*1.1,0.08,1.8)},
$S:0}
C.eDI.prototype={
$0(){this.a.DQ()
return null},
$S:0}
C.eDJ.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.Fv(v,!0)
return null},
$S:0}
C.eDK.prototype={
$0(){this.a.d7(new C.eD_(this.b))},
$S:0}
C.eD_.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.U)?A.cA:A.U},
$S:0}
C.eDL.prototype={
$0(){this.a.d7(new C.eCY(this.b))},
$S:0}
C.eCY.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bp:A.cD},
$S:0}
C.eDM.prototype={
$0(){this.a.d7(new C.eCX(this.b))},
$S:0}
C.eCX.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aF:A.n0},
$S:0}
C.eDN.prototype={
$0(){this.a.d7(new C.eCW(this.b))},
$S:0}
C.eCW.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.ezx.prototype={
$1(d){return this.bml(d)},
bml(d){var w=0,v=B.j(x.H),u,t=this,s,r
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
break}s.d7(new C.ezw(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:186}
C.ezw.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eEf.prototype={
$0(){var w=this.a
return w.d7(new C.eEe(w,this.b))},
$S:0}
C.eEe.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.E(u-1,1,120)},
$S:0}
C.eEg.prototype={
$0(){var w=this.a
return w.d7(new C.eEd(w,this.b))},
$S:0}
C.eEd.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.E(u+1,1,120)},
$S:0}
C.eAF.prototype={
$0(){return this.a.d7(new C.eAE(this.b))},
$S:0}
C.eAE.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.eAG.prototype={
$0(){return this.a.d7(new C.eAD(this.b))},
$S:0}
C.eAD.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.eBc.prototype={
$1(d){var w=x.gh
w=B.C(new B.N(D.asa,new C.eBb(),w),w.k("ak.E"))
return w},
$S:z+94}
C.eBb.prototype={
$1(d){var w=null
return B.A2(B.d(d.b,w,w,w,w,w,w,A.lQ,w,w,w),48,d,x.fO)},
$S:z+95}
C.eEs.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a4(v,w?8:0,null,null)},
$S:37}
C.eEr.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kq()?q:new C.eEp(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bl
else v=r.d?A.aX:A.cq
v=B.J(v,A.r,o?2:1)
u=r.d?A.cr:A.c
t=B.bS(0,C.hxV(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aA(q,B.p(q,new B.an(A.a_,q,A.ab,A.t,B.a([t,B.ap(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nJ,q,q,q),A.f,q,q,new B.o(A.aS,q,q,s,q,q,A.n),q,q,q,q,A.alP,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eEq(p,e),q,q,q,q,q,q,!1,A.a3)},
$S:84}
C.eEq.prototype={
$0(){var w=this.a
return w.m(new C.eEl(w,this.b))},
$S:0}
C.eEl.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.Ks()},
$S:0}
C.eEp.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bV(null,null,new C.eEm(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eEn(q,s))
q.aTa()}else if(r==="del"){q=t.a
q.m(new C.eEo(q,s))
q.aSi()}else if(r==="up")t.a.b4D(s,s-1)
else if(r==="down")t.a.b4D(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eEm.prototype={
$1(d){var w=null,v=B.a([B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bVJ,w,w,w,w,new C.eEh(d),!1,w,w,w,w,w,w,w,D.fzQ,w,w,w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bVC,w,w,w,w,new C.eEi(d),!1,w,w,w,w,w,w,w,A.x9,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bUS,w,w,w,w,new C.eEj(d),!1,w,w,w,w,w,w,w,D.fIa,w,w,w))
if(u<this.b.r.length-1)v.push(B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,D.bWY,w,w,w,w,new C.eEk(d),!1,w,w,w,w,w,w,w,D.fzE,w,w,w))
return B.bn(!0,B.x(v,A.m,w,A.e,A.P,0,A.p),!0,!1,A.af,!0,!0)},
$S:27}
C.eEh.prototype={
$0(){B.a5(this.a,!1).O("dup")
return null},
$S:0}
C.eEi.prototype={
$0(){B.a5(this.a,!1).O("del")
return null},
$S:0}
C.eEj.prototype={
$0(){B.a5(this.a,!1).O("up")
return null},
$S:0}
C.eEk.prototype={
$0(){B.a5(this.a,!1).O("down")
return null},
$S:0}
C.eEn.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eEo.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eEt.prototype={
$0(){return this.a.a90()},
$S:0}
C.ezX.prototype={
$0(){var w=this.a
w.b88()
w.aB_(null)},
$S:0}
C.ezW.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.ds,24)],x.V),m=this.b
if(m.f!=null){w=B.b1(m.e)
v=m.f
v.toString
v=new B.a9(A.ay,A.aE,A.x,B.a([w,B.b1(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b1(m.e):p
u=m.x
t=m.y
s=B.m(4)
if(m.f!=null){r=B.b1(m.e)
q=m.f
q.toString
q=new B.a9(A.ay,A.aE,A.x,B.a([r,B.b1(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bx(s,B.c4(A.kv,new B.o(m.f==null?B.b1(m.e):p,p,p,p,p,r,A.n),A.bh),A.ap)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.N(r,new C.ezV(this.a,e.b,e.d,q),B.T(r).k("N<1,v>")))
if(m.z.length===0)s.push(B.as(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aC:A.bM,p,p,p,p,p,p,p,p,p,p,p,A.a7,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c4(new B.an(A.a_,p,A.ab,A.f,s,new B.bR("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bh)},
$S:457}
C.ezV.prototype={
$1(d){var w=this
return w.a.bH9(d,w.b,w.c,w.d)},
$S:z+23}
C.ezK.prototype={
$0(){var w=this
if(w.b){w.a.NU(w.c)
return}if(w.d){w.a.a8Z(w.c)
return}if(w.e){w.a.ahz(w.c)
return}if(w.f)w.a.b8H(w.c)},
$S:0}
C.ezL.prototype={
$0(){this.a.NU(this.b)
return null},
$S:0}
C.ezM.prototype={
$0(){return this.a.a2O(this.b.a)},
$S:0}
C.ezN.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.ezJ(u,d,w.c,w.d))
v.I1()
v.ot()
v.pB()},
$S:18}
C.ezJ.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.E(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.E(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.ezO.prototype={
$1(d){return this.a.ak_(this.b.a,d)},
$S:2}
C.ezQ.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.hb_(w))u.a.NU(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b8H(v)},
$S:0}
C.ezP.prototype={
$0(){return this.a.a2O(this.b.a)},
$S:0}
C.ezR.prototype={
$1(d){var w=this,v=w.a
v.m(new C.ezI(w.b,d,w.c,w.d))
v.I1()
v.ot()
v.pB()},
$S:18}
C.ezI.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.E(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.E(v.f+u/w.d,0.04,1.8)
if(v.b===D.cV)v.w=A.k.E(v.w+u*0.15,10,120)},
$S:0}
C.ezS.prototype={
$1(d){var w=this.a
w.m(new C.ezH(this.b,d))
w.I1()
w.ot()
w.pB()},
$S:218}
C.ezH.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.E(w.e*v,0.04,1.8)
w.f=A.k.E(w.f*v,0.04,1.8)
if(w.b===D.cV)w.w=A.k.E(w.w*v,10,120)},
$S:0}
C.ezT.prototype={
$0(){var w=this.a
w.m(new C.ezG(this.b))
w.I1()
w.ot()
w.pB()},
$S:0}
C.ezG.prototype={
$0(){this.a.r=C.hxp()},
$S:0}
C.ezU.prototype={
$0(){return this.a.a2O(this.b.a)},
$S:0}
C.eBO.prototype={
$0(){var w=this.a
return w.m(new C.eBN(w))},
$S:0}
C.eBN.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eBP.prototype={
$1(d){return this.a.cFE(this.b.a,d)},
$S:2}
C.eAT.prototype={
$1(d){var w
this.a.d7(d)
w=this.b
if(w!=null)w.$0()},
$S:176}
C.eAU.prototype={
$1(d){return this.a.$1(new C.eAS(this.b,d))},
$S:6}
C.eAS.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eAV.prototype={
$1(d){return this.a.$1(new C.eAR(this.b,d))},
$S:6}
C.eAR.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eAW.prototype={
$1(d){return this.a.$1(new C.eAQ(this.b,d))},
$S:6}
C.eAQ.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eAX.prototype={
$1(d){return this.a.$1(new C.eAP(this.b,d))},
$S:6}
C.eAP.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eAY.prototype={
$1(d){return this.a.$1(new C.eAO(this.b,d))},
$S:6}
C.eAO.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eAZ.prototype={
$1(d){return this.b.$1(new C.eAN(this.a,this.c))},
$S:9}
C.eAN.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eB_.prototype={
$1(d){return this.b.$1(new C.eAM(this.a,this.c))},
$S:9}
C.eAM.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eB0.prototype={
$1(d){var w=null,v=this.b,u=B.b1(d),t=v.Q===d,s=t?A.bl:A.cY
return B.aA(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.J(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eAL(this.a,v,d),w,w,w,w,w,w,!1,A.a3)},
$S:468}
C.eAL.prototype={
$0(){return this.a.$1(new C.eAI(this.b,this.c))},
$S:0}
C.eAI.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eB1.prototype={
$1(d){return this.a.$1(new C.eAK(this.b,d))},
$S:1719}
C.eAK.prototype={
$0(){var w=this.b
return this.a.as=w.gI(w)},
$S:0}
C.eB2.prototype={
$1(d){var w=null
return B.aA(w,B.p(w,w,A.f,w,w,new B.o(B.b1(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eAJ(this.a,this.b,d),w,w,w,w,w,w,!1,A.a3)},
$S:468}
C.eAJ.prototype={
$0(){return this.a.$1(new C.eAH(this.b,this.c))},
$S:0}
C.eAH.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eB3.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a5(w,!1).pP()}else w=!1
if(w){w=v.a.c
w.toString
B.a5(w,!1).eM()}v.a.atw()},
$S:0}
C.eB6.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dw.aw(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.ar(u,A.b_,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.J(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.X(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.J(u,A.r,1.2)
r.push(B.ap(2,B.p(n,B.X(A.uG,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.nv,n,n,n),n,n,n,2,n,n))
return B.aI(!1,A.a2,!0,n,B.aO(!1,m,!0,B.eK(new B.a4(48,48,new B.an(A.A,n,A.ab,A.t,r,n),n),n,new B.o(n,n,s,v,n,new B.a9(A.ay,A.aE,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.L,0,n,A.L,n,n,n,A.ai)},
$S:139}
C.eyG.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dw.aw(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.ar(u,A.b_,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.J(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.J(A.c.j(0.4+w*0.15),A.r,1)
return B.aI(!1,A.a2,!0,p,B.aO(!1,o,!0,B.eK(B.x(B.a([B.ee(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ae,B.d(q.e,p,p,p,p,p,p,A.j4,A.K,p,p)],x.p),A.m,p,A.b9,A.i,0,A.p),p,new B.o(p,p,t,v,p,new B.a9(A.ay,A.aE,A.x,u,p,p),A.n),p,A.Gt,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.L,0,p,A.L,p,p,p,A.ai)},
$S:139}
C.eCL.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.Y,!0,w,!0,A.t,w,B.aN(),u,w,w,w,w,w,2,A.ark,A.y,!0,w,!0,w,!1,w,A.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.aa,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a4,w,A.an,w,w,w,w)
return B.ep(B.a([B.bN(!1,A.di,w,w,!0,w,w,w,new C.eCJ(d),w,w),B.bI(A.qZ,w,new C.eCK(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:19}
C.eCJ.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.eCK.prototype={
$0(){var w=this.b.a.a
B.a5(this.a,!1).O(w)
return null},
$S:0}
C.d7c.prototype={
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
v=B.m(22)
t=B.ar(A.aK,A.d.gI(C.kH(j.a.c.w)?D.uR:L.nA),w*0.35)
t.toString
t=B.J(t,A.r,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gI(C.kH(j.a.c.w)?D.uR:L.nA).j(0.18+w*0.12),A.I,32+w*10),D.adD],s)
q=B.m(22)
p=x.O
o=B.ap(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c_(A.b0,0.9,A.x,k,0,B.a([A.d.gI(C.kH(j.a.c.w)?D.uR:L.nA).j(0.22+w*0.1),A.L],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gI(C.kH(j.a.c.w)?D.uR:L.nA).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c_(A.A,0.5,A.x,k,0,B.a([m,A.d.gak(C.kH(j.a.c.w)?D.uR:L.nA).j(0.08),A.L],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kH(m)?D.uR:L.nA
s=B.a([new B.ac(0,A.G,A.d.gI(C.kH(m)?D.uR:L.nA).j(0.45+w*0.2),A.cy,18)],s)
m=x.p
l=B.a([p,B.ee(A.A,B.p(k,B.X(C.kH(j.a.c.w)?A.wl:A.qz,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a9(A.ay,A.aE,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.ab,A.t,l,k),A.W,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kH(j.a.c.w)?D.uR:L.nA).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.K,k,k),A.fG,B.d(j.a.c.b,k,2,A.a1,k,k,k,D.frv,A.K,k,k),A.au,B.d(j.gcAB(),k,k,k,k,k,k,D.fwn,A.K,k,k),A.aB],m)
p=j.a.c
if(p.z){p=p.gSP()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kH(j.a.c.w)?D.uR:L.nA).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.U,k,k,!0,k,k,k,k,k,k,k,k),A.K,k,k),A.ae],m))}s.push(new C.Ka(A.yR,"Download PDF","pdf",A.d3,j.Jj(0),!1,k))
p=j.a.c
if(!p.z||p.gSP()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.am,new C.Ka(A.jE,"Transfer to "+C.hxr(p==null?"":p),"transfer_hati",A.aW,j.Jj(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Jj(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.am,new C.Ka(D.bNb,"Rename presentation","rename",A.cf,n,!1,k),A.am,new C.Ka(A.anB,"Duplicate","duplicate",A.b7,j.Jj(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.Q)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.Ka(A.eb,"Delete presentation","delete",A.ax,j.Jj(p),!0,k))
s.push(A.au)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Jj(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Jj(n)
s.push(B.dQ(B.db(B.bN(!1,E.aV8,k,k,!0,k,k,k,new C.d7b(d),k,B.fw(k,k,k,k,k,k,k,k,k,k,k,A.bM,k,k,k,A.aw,k,D.bCr,k,k,k,k,k,A.kr,k,k)),n),new B.t(0,(1-p)*8)))
return B.ee(A.A,B.db(B.aI(!1,A.a2,!0,k,B.p(k,B.bx(q,new B.an(A.a_,k,A.ab,A.t,B.a([o,new B.D(D.bBA,B.x(s,A.m,k,A.e,A.P,0,A.p),k)],m),k),A.ap),A.f,k,A.WV,new B.o(A.av,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.L,0,k,k,k,k,k,A.ai),i),0.88+u*0.12,k,k)},
$S:46}
C.d7b.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.d7A.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.d7B.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d79.prototype={
$1(d){var w=this.a
return w.m(new C.d75(w))},
$S:22}
C.d75.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d7a.prototype={
$1(d){var w=this.a
return w.m(new C.d74(w))},
$S:70}
C.d74.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d78.prototype={
$0(){var w=this.a
return w.m(new C.d76(w))},
$S:0}
C.d76.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d77.prototype={
$0(){var w=this.a.a.e
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.eFq.prototype={
$0(){return $.bm8=!$.bm8},
$S:0}
C.eFg.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaWn())u.ayB()},
$S:0}
C.eFp.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eFh.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eFi.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.ayB()},
$S:0}
C.eFc.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gI(w.a.c.r).r
w.d=0},
$S:0}
C.eFd.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eFe.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eFf.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.eFn.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b3,A.t,w,null)},
$S:1720}
C.eFo.prototype={
$2(d,e){var w
if(e.gc4(e)===A.ii)return new B.d1(e,!1,d,null)
w=this.a
return w.cyv(w.e,d,e)},
$S:479}
C.eFj.prototype={
$2(d,e){var w=B.ds(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fI((1-v.gp(0))*1.5708)
return B.fy(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:46}
C.eFk.prototype={
$2(d,e){var w=B.ds(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.kh((1-v.gp(0))*1.5708)
return B.fy(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:46}
C.eFl.prototype={
$2(d,e){var w=B.ds(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fI(v.gp(0)*0.8)
w.kh(v.gp(0)*0.35)
return B.fy(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:46}
C.eFm.prototype={
$2(d,e){var w=B.ds(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fI(-v.gp(0)*1.2)
return B.fy(A.a8,B.db(e,v.gp(0)),null,w,!0)},
$S:46}
C.eFr.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gZv().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gZv().x
t===$&&B.c()
return new C.b2A(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.J8(v.c,t,!0,new B.bR("cine"+u,x.W))},
$S:680}
C.eFt.prototype={
$1(d){var w=this.a
if(d.b.a>B.aG(this.b,A.bZ,x.w).w.a.a*0.55)w.ayB()
else w.cmO()},
$S:70}
C.eFs.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.fPI.prototype={
$4(d,e,f,g){var w=this.b
A.d.aa(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:435}
C.fPR.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ep(B.a([B.bN(!1,A.di,w,w,!0,w,w,w,new C.fPO(d),w,w),B.bN(!1,D.fPH,w,w,!0,w,w,w,new C.fPP(d,this.b,v),w,w),B.bI(A.aVq,w,new C.fPQ(d,v,this.c),w)],x.p),w,w,P.tX,new B.a4(320,w,t,w),w,w,w,w,D.fRe,w)},
$S:19}
C.fPO.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.fPP.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).O(null)
C.hbE(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fPQ.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aRi(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aQJ(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fPH.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cji.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.r(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:591}
C.fPN.prototype={
$1(d){return d.ah()},
$S:z+14}
C.flU.prototype={
$1(d){return C.hbC(C.Wo(B.a2(d,x.N,x.z)),this.a)},
$S:z+96}
C.fYN.prototype={
$3(d,e,f){return A.bJ},
$C:"$3",
$R:3,
$S:91}
C.fYO.prototype={
$4(d,e,f,g){var w=A.cu.aw(0,e.gp(0))
return B.db(B.ee(A.A,D.hpb,0.94+w*0.06,null,null),w)},
$S:451}
C.fYP.prototype={
$1(d){var w=this
return new C.Wq(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.eEX.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eET.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eEW.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.Wr(u,this.b,w.gaPB(),v,null)},
$S:z+99}
C.eEU.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eEV.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eEY.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eEZ.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eF1.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.eF2.prototype={
$0(){var w=this.a
return w.m(new C.eF0(w))},
$S:0}
C.eF0.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eF3.prototype={
$0(){var w=this.a
return w.m(new C.eF_(w))},
$S:0}
C.eF_.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eF4.prototype={
$1(d){return this.a.bLM(d,this.b)},
$S:z+100}
C.eES.prototype={
$0(){var w=this.a
return w.m(new C.eER(w,this.b))},
$S:0}
C.eER.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eF5.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eF6.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eF7.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eF8.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.eF9.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fI(new B.fC(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.K(x.q).f.U(D.fdj)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eyA.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eyz())},
$S:0}
C.eyz.prototype={
$0(){},
$S:0}
C.eyB.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fT()},
$S:8}
C.eyw.prototype={
$1(d){return this.a.m(new C.eyv())},
$S:2}
C.eyv.prototype={
$0(){},
$S:0}
C.eyx.prototype={
$1(d){return this.a.b0u()},
$S:2}
C.eyy.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.eFb.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.qf(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eFa(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eFa.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fJZ.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ap(w,new B.er(new B.jX(this.c,new C.fJY(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:231}
C.fJY.prototype={
$3(d,e,f){return new C.J8(e,!1,!1,new B.bR(e.a,x.W))},
$S:z+102}
C.fK_.prototype={
$1(d){var w=null
return B.oC(!1,B.as(new C.bwO(this.a,this.b,w),w,w,w),w,x.z)},
$S:327}
C.fK3.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aV.gmL(),$async$$0)
case 3:w=4
return B.b(B.bP(A.m5,null,x.H),$async$$0)
case 4:w=5
return B.b($.aV.gmL(),$async$$0)
case 5:s=$.aV.al$.x.h(0,t.a)
r=s==null?null:s.gbd()
if(!(r instanceof B.qb))throw B.W("Could not draw the slide.")
u=r.m6(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1723}
C.fK4.prototype={
bmT(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hx(A.ha),$async$$1)
case 3:r=f
if(r==null)throw B.W("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hO([J.eS(A.dK.gaS(r))],"image/png"))
t.toString
s=Ao.h2c(t)
w=4
return B.b(new B.qi(s,"load",!1,x.ev).gI(0).da(0,A.jR),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bmT(d)},
$S:1724}
C.fK0.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:150}
C.fK1.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fW(0)},
$S:150}
C.fK2.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.ffR.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.fnT,A.K,w,w)},
$S:1725}
C.ffS.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bx(v,B.kj(A.bo,w,A.dH,8,w,e===0?w:e,w),A.ap)},
$S:609}
C.emQ.prototype={
$1(d){this.a.a_I()
return null},
$S:11}
C.emO.prototype={
$0(){return this.a.e=D.bxq},
$S:0}
C.emP.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bC
return this.b.e=w},
$S:0}
C.cmI.prototype={
$1(d){return A.o.du(1,d.a)},
$S:z+103}
C.cmJ.prototype={
$2(d,e){return(d|e)>>>0},
$S:67};(function aliases(){var w=C.aNd.prototype
w.bxY=w.q
w=C.aMI.prototype
w.bxr=w.q
w=C.aMt.prototype
w.bxb=w.q
w=C.aMH.prototype
w.bxq=w.q
w=C.aNb.prototype
w.bxW=w.q
w=C.aOv.prototype
w.bzq=w.q
w=C.aLo.prototype
w.bw3=w.q
w=C.aNo.prototype
w.by8=w.q
w=C.aNp.prototype
w.by9=w.q
w=C.b4g.prototype
w.bsB=w.aE9})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"ij0","aoi",104)
v(C.aKj.prototype,"gc6A","ZC",0)
var r
u(r=C.ayK.prototype,"gczX","czY",38)
v(r,"gc7p","aed",0)
v(r=C.ayG.prototype,"gaZU","Ej",3)
v(r,"gc7m","c7n",3)
v(r,"gaxJ","y_",0)
v(r,"gaxK","IZ",0)
t(C,"ijr","hPb",105)
v(C.aEV.prototype,"gca3","ca4",3)
s(C,"ijC",0,null,["$4$paper$photo$request$template"],["fR7"],106,0)
s(C,"ijB",0,null,["$5$doc$history$instruction$photo$template"],["bDZ"],107,0)
v(r=C.aFb.prototype,"gcaN","Jg",0)
v(r,"gbLe","Xq",0)
v(r,"gcaQ","af2",0)
v(r,"gcaP","a_u",0)
v(r,"gb09","EA",0)
v(C.aFe.prototype,"gcaV","a_w",0)
v(r=C.aGD.prototype,"gb0m","Qk",0)
v(r,"gcrD","b4I",3)
v(r,"gcBk","aCg",86)
v(r,"gbP6","aaX",0)
v(r,"gcbl","AF",0)
v(r=C.aIA.prototype,"gclx","a0T",0)
v(r,"gclF","a0W",0)
v(r,"gbE5","a9o",0)
v(r,"gcbp","afe",0)
v(C.aIz.prototype,"gcbq","aff",0)
v(C.aCB.prototype,"gbD4","a9b",0)
v(C.aAZ.prototype,"gcbr","a_H",0)
w(C,"ijP","ihI",12)
w(C,"ijN","ieB",12)
w(C,"ijO","igG",12)
v(r=C.aFv.prototype,"gcEz","cEA",3)
v(r,"gcpV","cpW",3)
u(r,"gEG","afZ",7)
v(r,"gbIS","asG",3)
u(r,"gEH","b1J",7)
v(r,"gcdI","afG",0)
v(r,"gccz","afF",0)
v(r,"gcfS","ag_",0)
v(r,"gbLb","aaw",0)
v(r,"gcgM","a0i",0)
v(r,"gcgN","agg",0)
v(r,"gchj","agn",0)
v(r,"gcg4","ag2",0)
v(r,"gbPi","ab0",0)
v(r,"gaT9","aTa",3)
v(r,"gaSh","aSi",3)
v(r,"gaNU","aNV",3)
v(r,"gaSg","atw",3)
u(r,"gbDl","bDm",80)
v(r,"gaBN","b7S",3)
v(r,"gccB","ccC",3)
v(r,"gc_D","c_E",3)
v(r,"gbNE","bNF",3)
v(r=C.aFy.prototype,"gcDn","cDo",3)
v(r,"gcD2","cD3",3)
t(C,"ijQ","ihZ",2)
v(r=C.aFw.prototype,"gcbx","Jl",0)
v(r,"gctI","RN",0)
v(r,"gcbu","Jk",0)
v(r,"gcFP","a3t",0)
v(r,"gchv","agu",0)
v(C.aFu.prototype,"gcby","b0u",3)
v(r=C.aFx.prototype,"gbQ8","abb",0)
u(r,"gcbv","cbw",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aD,[C.o8,C.Si,C.bJz,C.bHU,C.cDu,C.cDs,C.bRA,C.ba5,C.cDt,C.bGu,C.cmC,C.cmA,C.cmB,C.cmz,C.atK,C.cmy,C.bSD,C.oA,C.aG6,C.jA,C.nV,C.a8o,C.zR,C.lt,C.oL,C.mk,C.zS,C.nZ,C.a8w,C.as6,C.b2B,C.emf,C.lq,C.F1,C.eA,C.j8,C.ET,C.xU,C.eP,C.lW,C.i6,C.jU,C.a8x,C.afG,C.b2C,C.b4g,C.a3o])
u(B.jv,[C.cLl,C.c2z,C.fFa,C.cMS,C.cMe,C.fKH,C.e4E,C.e4D,C.emT,C.emS,C.fM5,C.fn2,C.fn3,C.chx,C.chy,C.chz,C.eqx,C.eZB,C.eYZ,C.eYY,C.f_1,C.eZz,C.eZs,C.eZL,C.f_r,C.fv_,C.f5P,C.f5O,C.f6h,C.emi,C.fPE,C.e_S,C.fWl,C.fMs,C.cja,C.cj8,C.cjd,C.fMX,C.fMY,C.fMZ,C.fN_,C.ciV,C.ciW,C.dN3,C.ciS,C.fMW,C.fdd,C.dYA,C.ciL,C.elZ,C.fKw,C.eCa,C.eCz,C.eCw,C.eCv,C.eCG,C.eCF,C.eEa,C.eE9,C.eCp,C.eCo,C.eyZ,C.eA8,C.eD7,C.eEs,C.eEr,C.ezW,C.eB6,C.eyG,C.d7c,C.eFn,C.eFo,C.eFj,C.eFk,C.eFl,C.eFm,C.eFr,C.cji,C.eEX,C.eF7,C.cmJ])
u(B.hy,[C.cLm,C.cLn,C.bSE,C.fCe,C.c2y,C.c2B,C.fSP,C.fen,C.fee,C.feu,C.flV,C.flW,C.fFb,C.fF9,C.fSj,C.fBT,C.fTa,C.cMI,C.cMN,C.cMP,C.cML,C.cMQ,C.cMJ,C.cMR,C.cME,C.cMB,C.cMA,C.cMH,C.cM9,C.cM7,C.fJJ,C.fJK,C.fqb,C.fKI,C.fKO,C.fpe,C.cdR,C.fJH,C.fJI,C.fEx,C.fEy,C.fKN,C.fKJ,C.fKL,C.fKM,C.fKK,C.fWD,C.fEB,C.fEC,C.fEF,C.fEG,C.fEJ,C.fEK,C.fY5,C.fnv,C.fYg,C.epQ,C.epR,C.epS,C.epy,C.epK,C.epL,C.epN,C.chw,C.chu,C.chv,C.fKn,C.fKp,C.fKo,C.fn4,C.fn5,C.fYj,C.eqC,C.eqD,C.equ,C.eqv,C.eqy,C.eqz,C.fYz,C.f_s,C.eZS,C.eZC,C.eZP,C.eYU,C.eYV,C.eYW,C.eZ_,C.eZ0,C.f_h,C.f_o,C.f_q,C.f_0,C.f_2,C.f_6,C.f_7,C.f_8,C.f_c,C.f_3,C.f_4,C.eZb,C.eZc,C.eZd,C.eZe,C.eZf,C.eZg,C.eZh,C.eZi,C.eZj,C.eYx,C.eYy,C.eYz,C.eYA,C.eYC,C.eYD,C.eZ5,C.eZ6,C.eZ7,C.eZ8,C.eZ9,C.eYH,C.eYI,C.eYJ,C.eYK,C.eZr,C.eZK,C.fHM,C.fHL,C.cj1,C.fuZ,C.fPA,C.fPt,C.fPw,C.fNr,C.fNs,C.fNt,C.fHT,C.fHS,C.fHR,C.fHP,C.fmZ,C.fn_,C.fn0,C.fYL,C.f5R,C.f5S,C.f5L,C.f5F,C.f6a,C.f6b,C.f6d,C.f6e,C.f69,C.fYK,C.f5w,C.fue,C.emh,C.fPC,C.fPD,C.fPF,C.fPy,C.fPz,C.fXY,C.dpB,C.dpH,C.emg,C.fjp,C.fjr,C.fjq,C.fjo,C.fIX,C.fIZ,C.flq,C.fP4,C.fP5,C.fP6,C.fPh,C.fPm,C.fPn,C.fPo,C.fPp,C.fPq,C.fPr,C.fPs,C.fP7,C.fP8,C.fP9,C.fPa,C.fPb,C.fPc,C.fPd,C.fPe,C.fPf,C.fPg,C.fPi,C.fPj,C.fPk,C.fPl,C.fGN,C.ftx,C.ftw,C.fPL,C.e_T,C.e_R,C.f4G,C.cds,C.cdu,C.fWn,C.deV,C.deX,C.fWm,C.fWk,C.fYJ,C.fMo,C.dev,C.fEN,C.fEO,C.cj_,C.cj0,C.ciZ,C.ciP,C.ciQ,C.ciM,C.ciN,C.ciO,C.cjg,C.cjb,C.cj6,C.cj7,C.cj9,C.cjc,C.cje,C.fN0,C.ciU,C.ciX,C.ciY,C.cj3,C.cj4,C.fPS,C.fOZ,C.ciT,C.ciR,C.fMV,C.fwk,C.ciK,C.f25,C.fzk,C.eEO,C.eBd,C.eBe,C.eCO,C.eCC,C.eCD,C.eAB,C.eEz,C.eEA,C.eEB,C.eA_,C.eCh,C.eCj,C.eBU,C.eBR,C.eB9,C.eBa,C.eC0,C.eA1,C.eCc,C.eCd,C.eCb,C.eCf,C.eCe,C.eCx,C.eCy,C.eCA,C.eCt,C.eAk,C.eAh,C.eCH,C.eA9,C.eEy,C.eyI,C.eAc,C.eAb,C.ezq,C.ezv,C.ezt,C.ezr,C.eEG,C.eEH,C.eEI,C.eEF,C.eEc,C.eEb,C.eE5,C.eE7,C.eDY,C.eEw,C.eEu,C.eyQ,C.eyM,C.eB7,C.ezz,C.ez0,C.ez_,C.ezm,C.ezn,C.eAz,C.ezB,C.ezF,C.eCq,C.eDZ,C.eE_,C.eE0,C.eE1,C.eA3,C.eA4,C.eA5,C.eBA,C.eAv,C.eAn,C.eAu,C.eBK,C.eBL,C.eDx,C.eDz,C.eDT,C.eDV,C.eDA,C.eDB,C.ezx,C.eBc,C.eBb,C.eEm,C.ezV,C.ezN,C.ezO,C.ezR,C.ezS,C.eBP,C.eAT,C.eAU,C.eAV,C.eAW,C.eAX,C.eAY,C.eAZ,C.eB_,C.eB0,C.eB1,C.eB2,C.eCL,C.d79,C.d7a,C.eFt,C.fPI,C.fPR,C.fPH,C.fPN,C.flU,C.fYN,C.fYO,C.fYP,C.eEW,C.eF4,C.eyB,C.eyw,C.eyx,C.fJZ,C.fJY,C.fK_,C.fK4,C.fK0,C.fK1,C.ffR,C.ffS,C.emQ,C.cmI])
u(B.iG,[C.cLo,C.fej,C.feo,C.fep,C.fek,C.fel,C.fem,C.fec,C.fed,C.fef,C.feg,C.fet,C.fes,C.fei,C.feh,C.feq,C.fer,C.few,C.fex,C.fev,C.cMK,C.cMO,C.cMM,C.cMC,C.cMD,C.cMF,C.cMy,C.cMz,C.cMG,C.cMx,C.cMw,C.cMv,C.cLZ,C.cLY,C.cM0,C.cM8,C.cM1,C.cM_,C.cM3,C.cM4,C.cM5,C.cM2,C.cM6,C.cMa,C.cMb,C.cMc,C.cMd,C.fEv,C.fEw,C.fEt,C.fEu,C.ei6,C.ei4,C.ei5,C.ei7,C.ei8,C.e4C,C.fEz,C.fEA,C.fED,C.fEE,C.fEH,C.fEI,C.emR,C.fMv,C.fMu,C.epP,C.epO,C.eps,C.epo,C.epz,C.epA,C.epB,C.epu,C.epv,C.epw,C.epx,C.ept,C.epq,C.epr,C.epH,C.epI,C.epG,C.epJ,C.epF,C.epE,C.epD,C.epM,C.epC,C.epp,C.eqB,C.eqp,C.eqq,C.eqw,C.eqr,C.eqt,C.eqs,C.eqA,C.eZk,C.eZI,C.eZ3,C.eZ4,C.eZ1,C.eZ2,C.eZO,C.eZN,C.eZM,C.eZR,C.eZQ,C.eYT,C.eYX,C.eYS,C.eYR,C.eYO,C.eYQ,C.eYP,C.f_p,C.f_i,C.f_g,C.f_j,C.f_f,C.f_k,C.f_e,C.f_l,C.f_m,C.f_n,C.f_d,C.f__,C.eZV,C.f_5,C.eZZ,C.f_9,C.eZY,C.f_a,C.eZX,C.f_b,C.eZW,C.eZF,C.eZE,C.eZG,C.eZD,C.eZH,C.eZx,C.eZw,C.eZy,C.eZv,C.eZu,C.eZt,C.eYB,C.eYw,C.eYL,C.eYG,C.eYM,C.eYF,C.eYN,C.eYE,C.eZA,C.eZo,C.eZn,C.eZp,C.eZm,C.eZq,C.eZl,C.eZJ,C.eZU,C.eZT,C.eZa,C.fPv,C.fPx,C.fPB,C.fHQ,C.fKg,C.fKe,C.fKf,C.f5T,C.f5U,C.f5Q,C.f5K,C.f5J,C.f5M,C.f5N,C.f5z,C.f5A,C.f5C,C.f5D,C.f5E,C.f5B,C.f5G,C.f66,C.f67,C.f65,C.f68,C.f64,C.f63,C.f62,C.f6c,C.f61,C.f60,C.f6_,C.f6f,C.f5Z,C.f6g,C.f5Y,C.f5X,C.f5H,C.f5I,C.f5W,C.f5V,C.f5s,C.f5t,C.f5u,C.f5v,C.f5r,C.f5x,C.f5y,C.dpA,C.dpC,C.dpF,C.dpG,C.dpE,C.dpD,C.fIY,C.fGO,C.cdt,C.cdv,C.deO,C.deT,C.deU,C.deS,C.deR,C.deW,C.deQ,C.deP,C.deY,C.fWj,C.dlC,C.dlD,C.dlE,C.fEL,C.fEM,C.cjh,C.eyC,C.eyD,C.eyE,C.eyF,C.fwi,C.fwj,C.dYC,C.dYB,C.dbJ,C.dbI,C.eEQ,C.eEP,C.eBf,C.eDW,C.eEM,C.eCM,C.eEC,C.eED,C.eEN,C.eBV,C.ezY,C.ezZ,C.eCi,C.eBT,C.eBQ,C.eBS,C.eBW,C.eBX,C.eBY,C.eBZ,C.eC_,C.eC1,C.eA2,C.eC4,C.eC5,C.eC6,C.eC7,C.eC8,C.eC9,C.eC3,C.eCg,C.eCu,C.eCs,C.eCB,C.eC2,C.eAi,C.eAj,C.eAl,C.eCE,C.eCI,C.eyX,C.eAg,C.eAe,C.eCQ,C.eAa,C.eCP,C.eA0,C.eAC,C.eEx,C.eDX,C.eyY,C.eyV,C.eyL,C.eyH,C.eyJ,C.eAd,C.ezp,C.ezu,C.ezs,C.ezo,C.eCr,C.eEJ,C.eE8,C.eE3,C.eE4,C.eE6,C.eB5,C.eB4,C.eEv,C.eyO,C.eyP,C.eyR,C.eyS,C.eyW,C.eyN,C.eCN,C.eEE,C.eB8,C.ezy,C.eyK,C.eAA,C.eyT,C.ez1,C.ez2,C.ez3,C.eze,C.ezh,C.ezi,C.ezj,C.ezk,C.ezl,C.ez4,C.ez5,C.ez6,C.ez7,C.ez8,C.ez9,C.eza,C.ezb,C.ezc,C.ezd,C.ezf,C.ezg,C.eAy,C.eAx,C.eAw,C.eyU,C.ezC,C.ezA,C.ezD,C.ezE,C.eAf,C.eCm,C.eCn,C.eCk,C.eCl,C.eE2,C.eA7,C.eA6,C.eBz,C.eBy,C.eBB,C.eBx,C.eBC,C.eBw,C.eBD,C.eBv,C.eBE,C.eBu,C.eBF,C.eBt,C.eBG,C.eBs,C.eBH,C.eBr,C.eBk,C.eBl,C.eBm,C.eBj,C.eBn,C.eBi,C.eBo,C.eBh,C.eBp,C.eBg,C.eBq,C.eAs,C.eAt,C.eAm,C.eAo,C.eAp,C.eAq,C.eAr,C.eEK,C.eEL,C.eBJ,C.eBI,C.eBM,C.eD8,C.eD9,C.eDa,C.eDl,C.eDw,C.eDH,C.eDO,C.eDP,C.eDQ,C.eDR,C.eDS,C.eDb,C.eDc,C.eDd,C.eDe,C.eDf,C.eDg,C.eDh,C.eDi,C.eDj,C.eDk,C.eDm,C.eDn,C.eDo,C.eDp,C.eDq,C.eDr,C.eDs,C.eDt,C.eDu,C.eCZ,C.eDv,C.eD6,C.eD5,C.eDy,C.eD4,C.eCV,C.eDU,C.eD3,C.eCU,C.eCS,C.eD2,C.eCT,C.eCR,C.eDC,C.eD1,C.eDD,C.eDE,C.eDF,C.eDG,C.eD0,C.eDI,C.eDJ,C.eDK,C.eD_,C.eDL,C.eCY,C.eDM,C.eCX,C.eDN,C.eCW,C.ezw,C.eEf,C.eEe,C.eEg,C.eEd,C.eAF,C.eAE,C.eAG,C.eAD,C.eEq,C.eEl,C.eEp,C.eEh,C.eEi,C.eEj,C.eEk,C.eEn,C.eEo,C.eEt,C.ezX,C.ezK,C.ezL,C.ezM,C.ezJ,C.ezQ,C.ezP,C.ezI,C.ezH,C.ezT,C.ezG,C.ezU,C.eBO,C.eBN,C.eAS,C.eAR,C.eAQ,C.eAP,C.eAO,C.eAN,C.eAM,C.eAL,C.eAI,C.eAK,C.eAJ,C.eAH,C.eB3,C.eCJ,C.eCK,C.d7b,C.d7A,C.d7B,C.d75,C.d74,C.d78,C.d76,C.d77,C.eFq,C.eFg,C.eFp,C.eFh,C.eFi,C.eFc,C.eFd,C.eFe,C.eFf,C.eFs,C.fPO,C.fPP,C.fPQ,C.eET,C.eEU,C.eEV,C.eEY,C.eEZ,C.eF1,C.eF2,C.eF0,C.eF3,C.eF_,C.eES,C.eER,C.eF5,C.eF6,C.eF8,C.eF9,C.eyA,C.eyz,C.eyv,C.eyy,C.eFb,C.eFa,C.fK3,C.fK2,C.emO,C.emP])
t(C.aSG,B.M)
u(B.lA,[C.a4k,C.ayb,C.awQ,C.xS,C.xV,C.l5,C.tA,C.BN,C.rL,C.wg,C.asE,C.J9,C.as5,C.v2,C.mO,C.hI,C.a99])
u(C.bRA,[C.cDv,C.bRB])
u(C.cmC,[C.cmG,C.atJ])
t(C.cmF,C.cmA)
t(C.cmE,C.cmz)
t(C.cmH,C.cmE)
t(C.cmD,C.cmB)
t(C.cmx,C.cmy)
t(C.bbD,B.p3)
t(C.cx1,B.awi)
t(C.a8W,B.xF)
u(B.af,[C.a1r,C.Z7,C.Z5,C.arc,C.We,C.Wf,C.a0q,C.a0X,C.a0W,C.aF5,C.a_i,C.NS,C.ZQ,C.a_a,C.ap9,C.aJZ,C.Vw,C.aAE,C.a8e,C.Ol,C.aA_,C.Ka,C.a02,C.Wq,C.Wr,C.aFt,C.asa,C.a8f])
u(B.ah,[C.aKj,C.ayK,C.ayG,C.aEV,C.aFb,C.aFe,C.aGD,C.aIA,C.aIz,C.aNd,C.aCB,C.aMI,C.aAZ,C.bhE,C.aMt,C.aOv,C.aMH,C.bfq,C.aNb,C.aNo,C.aLo,C.beb,C.aNp,C.aFw,C.bm7,C.aFu,C.aFx,C.blR])
u(B.aw,[C.ayI,C.adN,C.adb,C.bkT,C.adQ,C.afw,C.b2c,C.bun,C.b2x,C.bno,C.bsW,C.b0r,C.b2A,C.adT,C.ae9,C.b2y,C.J8,C.b0u,C.ber,C.Q1,C.Kg,C.bjd,C.bjc,C.bwO])
u(B.HE,[C.bdT,C.bvM,C.aKH,C.bgE,C.btj])
u(B.mf,[C.bdS,C.ban,C.btg,C.bdp,C.bh2,C.bjk,C.bg6,C.bgZ,C.bgG,C.bpJ,C.bbv,C.bb9,C.bwK,C.btJ,C.bsS,C.bg_,C.b2v,C.brM,C.bsP])
t(C.blO,C.aNd)
t(C.bla,C.aMI)
t(C.bkV,C.aMt)
t(C.bwe,C.aOv)
t(C.bl6,C.aMH)
t(C.blM,C.aNb)
t(C.bz9,C.aNo)
t(C.aFv,C.bz9)
t(C.bec,C.aLo)
t(C.aFy,C.aNp)
t(C.bwA,B.j_)
t(C.a98,B.kC)
t(C.cmK,C.b4g)
t(C.aiN,C.a3o)
u(B.Y4,[C.aSw,C.aU2])
t(C.axL,C.aSw)
w(C.aNd,B.cg)
w(C.aMI,B.cg)
w(C.aMt,B.cg)
w(C.aMH,B.cg)
w(C.aNb,B.cg)
w(C.aOv,B.cg)
w(C.aLo,B.eQ)
w(C.aNo,B.cg)
v(C.bz9,B.eE)
w(C.aNp,B.cg)})()
B.j0(b.typeUniverse,JSON.parse('{"aTf":{"hQ":["aTf"]},"o8":{"aTf":[],"hQ":["aTf"]},"aSG":{"M":["Si"],"M.E":"Si"},"bbD":{"p3":[]},"a8W":{"xF":[],"ou":[]},"a1r":{"af":[],"v":[]},"aKj":{"ah":["a1r"]},"Z7":{"af":[],"v":[]},"Z5":{"af":[],"v":[]},"ayK":{"ah":["Z7"]},"ayG":{"ah":["Z5"]},"ayI":{"aw":[],"v":[]},"arc":{"af":[],"v":[]},"aEV":{"ah":["arc"]},"adN":{"aw":[],"v":[]},"adb":{"aw":[],"v":[]},"adQ":{"aw":[],"v":[]},"afw":{"aw":[],"v":[]},"bkT":{"aw":[],"v":[]},"We":{"af":[],"v":[]},"aFb":{"ah":["We"]},"b2c":{"aw":[],"v":[]},"bdT":{"aC":[]},"bdS":{"aC":[]},"bvM":{"aC":[]},"ban":{"aC":[]},"btg":{"aC":[]},"Wf":{"af":[],"v":[]},"aFe":{"ah":["Wf"]},"bdp":{"aC":[]},"a0q":{"af":[],"v":[]},"aGD":{"ah":["a0q"]},"bh2":{"aC":[]},"a0X":{"af":[],"v":[]},"a0W":{"af":[],"v":[]},"aF5":{"af":[],"v":[]},"a_i":{"af":[],"v":[]},"aIA":{"ah":["a0X"]},"aIz":{"ah":["a0W"]},"blO":{"ah":["aF5"]},"bjk":{"aC":[]},"aCB":{"ah":["a_i"]},"bun":{"aw":[],"v":[]},"b2x":{"aw":[],"v":[]},"bno":{"aw":[],"v":[]},"NS":{"af":[],"v":[]},"ZQ":{"af":[],"v":[]},"bla":{"ah":["NS"]},"bsW":{"aw":[],"v":[]},"bg6":{"aC":[]},"b0r":{"aw":[],"v":[]},"aAZ":{"ah":["ZQ"]},"a_a":{"af":[],"v":[]},"bhE":{"ah":["a_a"]},"bgZ":{"aC":[]},"bgG":{"aC":[]},"bpJ":{"aC":[]},"bbv":{"aC":[]},"bb9":{"aC":[]},"bwK":{"aC":[]},"btJ":{"aC":[]},"bsS":{"aC":[]},"bg_":{"aC":[]},"ap9":{"af":[],"v":[]},"b2A":{"aw":[],"v":[]},"bkV":{"ah":["ap9"]},"adT":{"aw":[],"v":[]},"ae9":{"aw":[],"v":[]},"aJZ":{"af":[],"v":[]},"Vw":{"af":[],"v":[]},"J8":{"aw":[],"v":[]},"aAE":{"af":[],"v":[]},"a8e":{"af":[],"v":[]},"b2y":{"aw":[],"v":[]},"b2v":{"aC":[]},"bwe":{"ah":["aJZ"]},"aKH":{"aC":[]},"bl6":{"ah":["Vw"]},"bfq":{"ah":["aAE"]},"blM":{"ah":["a8e"]},"b0u":{"aw":[],"v":[]},"bgE":{"aC":[]},"brM":{"aC":[]},"bsP":{"aC":[]},"aA_":{"af":[],"v":[]},"Ka":{"af":[],"v":[]},"a02":{"af":[],"v":[]},"Kg":{"aw":[],"v":[]},"Ol":{"af":[],"v":[]},"aFv":{"ah":["Ol"],"eE":[]},"bec":{"ah":["aA_"]},"ber":{"aw":[],"v":[]},"beb":{"ah":["Ka"]},"Q1":{"aw":[],"v":[]},"aFy":{"ah":["a02"]},"btj":{"aC":[]},"bjd":{"aw":[],"v":[]},"bjc":{"aw":[],"v":[]},"Wq":{"af":[],"v":[]},"Wr":{"af":[],"v":[]},"aFt":{"af":[],"v":[]},"asa":{"af":[],"v":[]},"aFw":{"ah":["Wq"]},"bm7":{"ah":["Wr"]},"aFu":{"ah":["aFt"]},"bwA":{"j_":[]},"aFx":{"ah":["asa"]},"bwO":{"aw":[],"v":[]},"a8f":{"af":[],"v":[]},"blR":{"ah":["a8f"]},"a98":{"kC":["fv<eW>"],"kp":["fv<eW>"]},"aiN":{"a3o":[]},"aSw":{"jc":[],"fi":[]},"axL":{"jc":[],"fi":[]},"aU2":{"jc":[],"fi":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.at
return{bu:w("M1"),U:w("vO<qf>"),bz:w("u"),M:w("dw<n>"),bo:w("jN"),g7:w("MB"),gc:w("aB<iE?>"),bq:w("aB<~>"),cc:w("MN"),fS:w("Eh"),an:w("Ik"),bm:w("O<Si>"),X:w("O<Sl>"),f3:w("O<aTf>"),aK:w("O<nl>"),V:w("O<ac>"),O:w("O<u>"),fA:w("O<lO>"),d5:w("O<aB<bA<G,+icon3d,picture(n?,n?)>>>"),bH:w("O<aB<dK>>"),fG:w("O<aB<~>>"),aF:w("O<ns>"),cd:w("O<ai<jA>>"),ez:w("O<a8<n,aD>>"),d:w("O<a8<n,@>>"),B:w("O<mK>"),h:w("O<jA>"),gE:w("O<zR>"),k:w("O<oA>"),g:w("O<lW>"),D:w("O<i6>"),u:w("O<eP>"),m:w("O<v2>"),i:w("O<hI>"),aC:w("O<a8w>"),o:w("O<zS>"),e3:w("O<aD>"),dN:w("O<t>"),v:w("O<fV>"),cR:w("O<iY>"),J:w("O<jp>"),gx:w("O<pq<n>>"),f2:w("O<+(a0,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(K,K)>"),ek:w("O<+(G,n)>"),n:w("O<+(G,G)>"),r:w("O<cW>"),s:w("O<n>"),aS:w("O<j_>"),p:w("O<v>"),eR:w("O<fi>"),fT:w("O<ba5>"),bx:w("O<aG6>"),gz:w("O<afG>"),x:w("O<K>"),t:w("O<G>"),dS:w("O<aC?>"),bA:w("O<t?>"),Z:w("O<G?>"),cA:w("O<ci>"),A:w("cw<ah<af>>"),gL:w("ai<oA>"),R:w("ai<i6>"),j:w("ai<@>"),bW:w("ai<G>"),e:w("bA<G,+icon3d,picture(n?,n?)>"),P:w("a8<n,@>"),f:w("a8<@,@>"),gI:w("a8<G,+icon3d,picture(n?,n?)>"),bR:w("N<hI,v>"),eC:w("N<nZ,n>"),cT:w("N<jU,D>"),dv:w("N<n,n>"),f0:w("N<n,v>"),gN:w("N<G,pV>"),gh:w("N<mO,jC<mO>>"),w:w("iB"),ei:w("iE"),g2:w("rB"),fB:w("ET"),b6:w("zR"),gX:w("a8o"),dt:w("lt"),ea:w("oA"),bt:w("lW"),I:w("i6"),F:w("eP"),fO:w("mO"),ff:w("v2"),fP:w("hI"),Q:w("wg"),dO:w("as6"),a:w("cv"),C:w("aD"),dw:w("atK"),di:w("a99"),Y:w("eW"),fz:w("+(n,n)"),dL:w("+(G,G)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("Fo"),dB:w("dx<t>"),bJ:w("dx<n>"),_:w("e0<n>"),N:w("n"),fw:w("qf"),bO:w("au"),K:w("bq<t>"),b:w("bq<K>"),E:w("dK"),W:w("bR<n>"),ac:w("bR<G>"),ex:w("jX<lW>"),cI:w("jX<n>"),cl:w("jX<K>"),b4:w("Z<lq>"),a8:w("Z<mk>"),fR:w("Z<+(n,n)>"),co:w("ef<t>"),l:w("v"),b2:w("c0<~>"),ev:w("qi<dY>"),dT:w("bj<~>"),q:w("mt"),y:w("R"),gR:w("K"),z:w("@"),S:w("G"),at:w("bb?"),gw:w("ai<a8<n,@>>?"),aT:w("ai<i6>?"),c:w("ai<@>?"),aP:w("iE?"),af:w("i6?"),go:w("b2C?"),a6:w("a8x?"),cK:w("aD?"),bZ:w("+bytes,dataUrl,fileName(dK,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dK?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b0_=new B.bM(A.ay,null,null,H.ar5,null)
D.b08=new B.da(0,-0.15)
D.b0a=new B.da(0.62,0)
D.b0d=new B.da(-0.35,-0.45)
D.b0n=new B.da(0.9,-0.85)
D.b2k=new B.bh(H.TL,H.TL,A.fE,A.fE)
D.b2A=new B.ay(A.b7,1,A.r,-1)
D.bo5=new B.u(1,0.4196078431372549,0.2901960784313726,0.2,A.q)
D.b2M=new B.ay(D.bo5,1,A.r,-1)
D.b2Y=new B.ay(A.aD,1.5,A.r,-1)
D.b32=new B.ay(A.b7,1.6,A.r,-1)
D.b3i=new B.ay(A.aD,1.4,A.r,-1)
D.b4E=new B.o(null,null,null,null,null,K.HK,A.a6)
D.c4P=new B.a9(A.a5,A.a8,A.x,G.a51,null,null)
D.b4M=new B.o(null,null,null,null,null,D.c4P,A.a6)
D.adt=new B.o(A.av,null,null,A.tz,null,null,A.n)
D.bh4=new B.u(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.q)
D.bo2=new B.u(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.q)
D.d3g=w([D.bh4,D.bo2],x.O)
D.euX=new B.c_(A.A,0.5,A.x,null,0,D.d3g,null,null)
D.b54=new B.o(null,null,null,null,null,D.euX,A.a6)
D.Yr=new B.u(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.q)
D.b3y=new B.bH(Q.vD,A.a0,A.a0,A.a0)
D.b56=new B.o(D.Yr,null,D.b3y,null,null,null,A.n)
D.c6A=new B.a9(A.a5,A.a8,A.x,A.Ro,null,null)
D.b5d=new B.o(null,null,null,null,null,D.c6A,A.a6)
D.af7=new B.u(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.q)
D.b5g=new B.o(D.af7,null,null,A.ra,null,null,A.n)
D.b5k=new B.o(A.jw,null,null,null,null,null,A.a6)
D.b5n=new B.o(A1.agm,null,H.ad4,A.mt,null,null,A.n)
D.EX=new B.o(A.dF,null,null,null,null,null,A.a6)
D.b5u=new B.o(null,null,null,null,null,E.wC,A.a6)
D.d8x=w([E.ahm,A.c2],x.O)
D.c6b=new B.a9(A.b0,A.b6,A.x,D.d8x,null,null)
D.b5y=new B.o(null,null,null,A.mt,null,D.c6b,A.n)
D.djS=w([A.bl,A.dF,A.kf],x.O)
D.a32=new B.a9(A.ay,A.aE,A.x,D.djS,null,null)
D.b5L=new B.o(null,null,null,null,null,D.a32,A.n)
D.b5M=new B.o(D.af7,null,null,A.kZ,null,null,A.n)
D.cy0=w([A.d7,A.bl],x.O)
D.c62=new B.a9(A.ay,A.aE,A.x,D.cy0,null,null)
D.b5Q=new B.o(null,null,null,null,null,D.c62,A.n)
D.b6_=new B.o(null,null,null,null,null,G.uL,A.a6)
D.b6k=new B.o(A.aho,null,null,null,null,null,A.a6)
D.bi4=new B.u(0.5647058823529412,0,0,0,A.q)
D.adD=new B.ac(0,A.G,D.bi4,A.Jd,28)
D.b8v=new B.aXr()
D.b93=new C.cx1()
D.b9f=new C.bbD()
D.ae8=new B.cf(A.A,null,null,A.a2S,null)
D.bbX=new B.fl(null,null,null,null,null,E.nj,null,null,null,null)
D.b9P=new B.cf(A.A,null,null,D.bbX,null)
D.bQ9=new B.ae(A.e5,28,A.c,null,null,null)
D.bak=new B.cf(A.A,null,null,D.bQ9,null)
D.bbU=new B.fl(2,null,null,null,null,A.c3,null,null,null,null)
D.baI=new B.cf(A.A,null,null,D.bbU,null)
D.bQt=new B.ae(K.OY,40,A.bB,null,null,null)
D.baJ=new B.cf(A.A,null,null,D.bQt,null)
D.bcO=new B.u(1,1,0.9019607843137255,0.6549019607843137,A.q)
D.bd_=new B.u(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.q)
D.bds=new B.u(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.q)
D.bdC=new B.u(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.q)
D.bef=new B.u(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.q)
D.bew=new B.u(0.8,1,0.9450980392156862,0.9490196078431372,A.q)
D.bey=new B.u(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.q)
D.LY=new B.u(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.q)
D.bf0=new B.u(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.q)
D.bf8=new B.u(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.afs=new B.u(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.q)
D.bg_=new B.u(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.q)
D.bgT=new B.u(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.q)
D.afI=new B.u(1,1,1,0.9725490196078431,A.q)
D.bhd=new B.u(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bhs=new B.u(1,1,0.5490196078431373,0.10196078431372549,A.q)
D.bhv=new B.u(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.q)
D.bhM=new B.u(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bia=new B.u(1,1,0.9568627450980393,0.8392156862745098,A.q)
D.bjQ=new B.u(1,1,0.996078431372549,0.9725490196078431,A.q)
D.Ya=new B.u(0.8509803921568627,0,0,0,A.q)
D.bk0=new B.u(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.q)
D.bk7=new B.u(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.q)
D.agF=new B.u(0.6,0,0,0,A.q)
D.agH=new B.u(0,1,0.7019607843137254,0.2784313725490196,A.q)
D.blM=new B.u(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.q)
D.tT=new B.u(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.q)
D.bmf=new B.u(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.q)
D.bmH=new B.u(1,1,0.8784313725490196,0.6392156862745098,A.q)
D.bn6=new B.u(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.ahA=new B.u(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.q)
D.YB=new B.u(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.Bu=new B.u(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.q)
D.Mw=new B.u(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.q)
D.jt=new B.u(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.q)
D.ai4=new B.u(0,1,0.9686274509803922,0.8392156862745098,A.q)
D.YL=new B.u(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.q)
D.bqS=new B.u(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.q)
D.brm=new B.u(0.6,1,0.9686274509803922,0.9019607843137255,A.q)
D.brC=new B.u(0.6,1,0.984313725490196,0.9215686274509803,A.q)
D.Z9=new B.u(1,0.07450980392156863,0.10980392156862745,0.2,A.q)
D.bsO=new B.u(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.q)
D.y7=new B.u(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.q)
D.btl=new B.u(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.q)
D.btG=new B.hP(A.aX,!0,null,null)
D.fuz=new B.F(!0,A.aC,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVt=new B.y("Bio link",null,D.fuz,null,null,null,null,null,null,null,null,null)
D.baC=new B.cf(A.A,null,null,D.fVt,null)
D.btV=new B.hP(A.B7,!0,D.baC,null)
D.MW=new C.a4k(0,"none")
D.ajl=new C.a4k(1,"deflate")
D.ajm=new C.a4k(2,"bzip2")
D.buU=new B.kv(0.165,0.84,0.44,1)
D.d8R=w([A.cd,A.dH,A.aD],x.O)
D.c5j=new B.a9(A.ay,A.aE,A.x,D.d8R,null,null)
D.b4J=new B.o(null,null,null,null,null,D.c5j,A.n)
D.bZy=new B.ae(A.f_,null,A.ac,null,null,null)
D.bbh=new B.cf(A.A,null,null,D.bZy,null)
D.bvq=new B.l1(D.b4J,A.bh,D.bbh,null)
D.br6=new B.u(0.058823529411764705,1,1,1,A.q)
D.dcg=w([A.bz,A.rj,A.rj,D.br6],x.O)
D.cPr=w([0,0.32,0.7,1],x.x)
D.c5T=new B.a9(A.ay,A.aE,A.x,D.dcg,D.cPr,null)
D.b4y=new B.o(null,null,null,null,null,D.c5T,A.n)
D.bvw=new B.l1(D.b4y,A.bh,null,null)
D.bwE=new B.mB(1,1,null,null,null,A.bo,null)
D.bwH=new B.mB(1,null,null,null,null,D.YL,null)
D.bxa=new B.bb(125e4)
D.bxg=new B.bb(17e4)
D.bxq=new B.bb(35964e8)
D.bxx=new B.bb(55e4)
D.bxB=new B.bb(68e4)
D.by1=new B.ik(0,0,0,5)
D.byh=new B.P(0,16,16,0)
D.bys=new B.P(0,36,0,36)
D.byA=new B.P(0,54,0,0)
D.byH=new B.P(10,0,10,3)
D.byT=new B.ik(10,16,10,10)
D.bz4=new B.P(10,6,4,6)
D.bz7=new B.P(10,8,10,6)
D.akl=new B.P(11,8,11,11)
D.bzc=new B.P(12,0,12,24)
D.bzp=new B.P(12,12,12,4)
D.bzs=new B.P(12,12,8,12)
D.bzI=new B.P(12,8,8,12)
D.bA6=new B.P(14,14,14,0)
D.bAb=new B.P(14,14,14,90)
D.bAx=new B.P(16,10,16,16)
D.bAy=new B.P(16,10,16,20)
D.al6=new B.P(16,6,16,28)
D.bB6=new B.P(18,0,18,10)
D.bB8=new B.P(18,0,18,30)
D.bBa=new B.P(18,10,18,12)
D.bBb=new B.P(18,10,18,14)
D.bBv=new B.P(18,16,14,18)
D.bBA=new B.P(18,18,18,12)
D.bBG=new B.P(18,26,18,12)
D.bBL=new B.P(18,34,18,34)
D.bBM=new B.P(18,4,18,14)
D.bBR=new B.P(18,8,18,24)
D.bC9=new B.P(20,16,14,4)
D.bCe=new B.P(20,18,12,4)
D.bCj=new B.P(20,20,12,20)
D.bCm=new B.P(20,22,20,20)
D.bCr=new B.P(20,6,20,6)
D.bCB=new B.P(22,18,22,18)
D.bCJ=new B.P(22,24,22,0)
D.bCM=new B.P(22,24,22,4)
D.bCU=new B.P(22,60,22,22)
D.bD_=new B.P(24,24,24,22)
D.bD9=new B.P(26,10,60,10)
D.bDh=new B.P(28,44,28,44)
D.bDy=new B.P(32,44,32,44)
D.bDG=new B.P(38,30,38,20)
D.bDL=new B.P(4,0,0,6)
D.bDX=new B.ik(4,4,4,4)
D.bEp=new B.ik(6,5,6,5)
D.bEu=new B.P(6,6,8,6)
D.bEF=new B.P(8,14,8,14)
D.bEG=new B.P(8,22,8,22)
D.bEP=new B.P(8,6,12,6)
D.bEY=new B.P(8,8,8,4)
D.am2=new B.P(9,9,9,6)
D.bF9=new B.ik(2.5,2.5,2.5,2.5)
D.bFa=new B.P(10.5,0,10.5,0)
D.bFb=new B.P(7,1.5,7,1.5)
D.d05=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bFr=new B.xs(null,null,D.d05,A.B6)
D.cXV=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bFs=new B.xs(null,null,D.cXV,A.B6)
D.aUO=new B.F(!0,A.aC,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUL=new B.y("WORD DESIGN",null,D.aUO,null,null,null,null,null,null,null,null,null)
D.bG0=new B.by(1,A.ba,D.fUL,null)
D.fUp=new B.y("Slides database",null,Ac.tj,null,null,null,null,null,null,null,null,null)
D.fRC=new B.y("Admin only \xb7 keep as many as you like",null,V.aUh,null,null,null,null,null,null,null,null,null)
D.dsG=w([D.fUp,A.bF,D.fRC],x.p)
D.bul=new B.fj(A.ah,A.e,A.i,A.E,null,A.p,null,0,D.dsG,null)
D.bG3=new B.by(1,A.ba,D.bul,null)
D.fLQ=new B.y("NGMY logo",null,A.fx,null,null,null,null,null,null,null,null,null)
D.bG6=new B.by(1,A.ba,D.fLQ,null)
D.fsf=new B.F(!0,A.ac,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWP=new B.y("TALK TO THE EDITOR",null,D.fsf,null,null,null,null,null,null,null,null,null)
D.bGp=new B.by(1,A.ba,D.fWP,null)
D.fFx=new B.y("Tell the AI what to change",null,Ac.tj,null,null,null,null,null,null,null,null,null)
D.bGJ=new B.by(1,A.ba,D.fFx,null)
D.bHW=new B.E7(!0,"video/mp4")
D.fqr=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDs=new B.y("Move presentations between devices",null,D.fqr,null,null,null,!1,null,null,1,null,null)
D.bI_=new B.qD(A.e3,A.a5,A.f,D.fDs,null)
D.fEH=new B.y("Edit in Slides",null,A.j4,null,null,null,null,null,null,null,null,null)
D.bI0=new B.qD(A.e3,A.A,A.f,D.fEH,null)
D.bIf=new B.dr(1,A.cn,D.bI0,null)
D.a1d=new B.a0(60988,"MaterialIcons",!1)
D.bLH=new B.a0(61352,"MaterialIcons",!1)
D.anF=new B.a0(61531,"MaterialIcons",!1)
D.bMS=new B.a0(63062,"MaterialIcons",!1)
D.bMZ=new B.a0(63109,"MaterialIcons",!1)
D.bNb=new B.a0(63206,"MaterialIcons",!1)
D.aoo=new B.a0(63238,"MaterialIcons",!1)
D.bNs=new B.a0(63338,"MaterialIcons",!1)
D.a1N=new B.a0(63365,"MaterialIcons",!1)
D.a1O=new B.a0(63367,"MaterialIcons",!1)
D.a1P=new B.a0(63368,"MaterialIcons",!1)
D.aoA=new B.a0(63384,"MaterialIcons",!1)
D.bNK=new B.a0(63525,"MaterialIcons",!1)
D.bNO=new B.a0(63568,"MaterialIcons",!1)
D.bO8=new B.a0(983072,"MaterialIcons",!1)
D.bOw=new B.a0(983271,"MaterialIcons",!0)
D.apI=new B.a0(983965,"MaterialIcons",!1)
D.apJ=new B.a0(983966,"MaterialIcons",!1)
D.bPs=new B.a0(984592,"MaterialIcons",!1)
D.bPM=new B.ae(A.uq,16,A.aC,null,null,null)
D.apT=new B.ae(A.ph,18,A.c,null,null,null)
D.bQa=new B.ae(A.Ca,18,N.lB,null,null,null)
D.bQQ=new B.ae(A.jB,11,null,null,null,null)
D.bR0=new B.ae(A.a1u,null,A.ep,null,null,null)
D.bRy=new B.ae(A.rJ,18,A.aC,null,null,null)
D.bRE=new B.ae(A4.Cq,14,null,null,null,null)
D.bRF=new B.ae(A.eb,28,A.c0,null,null,null)
D.bRR=new B.ae(A.qz,20,A.c,null,null,null)
D.bRY=new B.ae(A.z1,null,null,null,null,null)
D.bS3=new B.ae(A.jA,18,A.hh,null,null,null)
D.bS8=new B.ae(A.kn,null,null,null,null,null)
D.bMU=new B.a0(63065,"MaterialIcons",!1)
D.bSL=new B.ae(D.bMU,15,A.c,null,null,null)
D.bN_=new B.a0(63113,"MaterialIcons",!1)
D.bSR=new B.ae(D.bN_,null,A.ac,null,null,null)
D.bTe=new B.ae(A.uo,22,A.bL,null,null,null)
D.bTz=new B.ae(A.rH,18,null,null,null,null)
D.bTF=new B.ae(A.Cu,12,A.c,null,null,null)
D.bP4=new B.a0(983687,"MaterialIcons",!1)
D.bTR=new B.ae(D.bP4,null,A.bl,null,null,null)
D.bU_=new B.ae(A.hA,null,A.bl,null,null,null)
D.bUi=new B.ae(A.pl,22,A.c,null,null,null)
D.bUm=new B.ae(A.cx,13,A.c,null,null,null)
D.bUs=new B.ae(A.eb,26,A.ax,null,null,null)
D.bUw=new B.ae(A.rL,26,A.c,null,null,null)
D.Pa=new B.ae(A.jB,8,A.c,null,null,null)
D.bUR=new B.ae(A.ph,40,A.c,null,null,null)
D.bUS=new B.ae(A.bKE,null,null,null,null,null)
D.bUW=new B.ae(A.uC,20,null,null,null,null)
D.bP3=new B.a0(983683,"MaterialIcons",!1)
D.bV5=new B.ae(D.bP3,null,A.b1,null,null,null)
D.bV6=new B.ae(A.jB,16,A.bl,null,null,null)
D.bVr=new B.ae(A.pi,null,null,null,null,null)
D.aqt=new B.ae(A.wl,22,A.c,null,null,null)
D.bVx=new B.ae(A.e5,17,A.c,null,null,null)
D.aqu=new B.ae(A.jB,9,A.c,null,null,null)
D.bVC=new B.ae(A.wg,null,null,null,null,null)
D.bKV=new B.a0(57744,"MaterialIcons",!1)
D.bVJ=new B.ae(D.bKV,null,null,null,null,null)
D.bVM=new B.ae(A.wg,16,null,null,null,null)
D.bPD=new B.a0(985181,"MaterialIcons",!1)
D.HC=new B.ae(D.bPD,null,null,null,null,null)
D.bVY=new B.ae(A.kn,16,A.bL,null,null,null)
D.bOX=new B.a0(983615,"MaterialIcons",!1)
D.bW_=new B.ae(D.bOX,12,A.c,null,null,null)
D.aqA=new B.ae(A.yO,16,null,null,null,null)
D.bW7=new B.ae(A.e5,21,A.c,null,null,null)
D.bWc=new B.ae(A.hA,17,A.c,null,null,null)
D.bWd=new B.ae(A.uo,null,null,null,null,null)
D.bWu=new B.ae(A.a2u,20,A.aC,null,null,null)
D.bWJ=new B.ae(A.om,22,E.nj,null,null,null)
D.bWR=new B.ae(A.qy,13,A.ac,null,null,null)
D.bWT=new B.ae(A.apv,20,A.aC,null,null,null)
D.bKC=new B.a0(57495,"MaterialIcons",!1)
D.bWY=new B.ae(D.bKC,null,null,null,null,null)
D.bX1=new B.ae(A.on,18,A.c,null,null,null)
D.bXo=new B.ae(A.uG,28,A.c,null,null,null)
D.bXz=new B.ae(D.aoo,null,A.aD,null,null,null)
D.bXA=new B.ae(A.qz,22,A.c,null,null,null)
D.aqJ=new B.ae(A.a19,16,null,null,null,null)
D.bYm=new B.ae(A.uo,32,A.c,null,null,null)
D.bZ4=new B.ae(A.jj,22,A.c,null,null,null)
D.bZ7=new B.ae(A.rL,22,A.ac,null,null,null)
D.aqZ=new B.ae(A.uq,null,A.bU,null,null,null)
D.c_2=new B.ae(A.qr,18,null,null,null,null)
D.c_G=new B.ae(A.e5,18,A.bt,null,null,null)
D.c_N=new B.ae(A.app,null,null,null,null,null)
D.c0d=new B.e7(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aUC,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eF,!0,null,null,null,null)
D.fi8=new B.F(!0,A.bM,null,null,null,null,null,A.cA,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c0v=new B.e7(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.fi8,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.af,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eF,!0,null,null,null,null)
D.c0W=new B.e7(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eF,!0,null,null,null,null)
D.d4j=w([A.dF,A.aD],x.O)
D.c32=new B.a9(A.a5,A.a8,A.x,D.d4j,null,null)
D.c3d=new B.a9(A.b0,A.b6,A.Vt,A.ay3,null,null)
D.bdh=new B.u(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.q)
D.bid=new B.u(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.q)
D.blN=new B.u(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.q)
D.bfS=new B.u(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.q)
D.cPt=w([D.bdh,D.bid,D.blN,D.bfS],x.O)
D.c3w=new B.a9(A.ay,A.aE,A.x,D.cPt,A.I7,null)
D.dsP=w([A.cL,A.bE,A.b7],x.O)
D.c3y=new B.a9(A.b0,A.b6,A.Vt,D.dsP,null,null)
D.dul=w([A.bl,A.cf],x.O)
D.c3D=new B.a9(A.a5,A.a8,A.x,D.dul,null,null)
D.dp1=w([A.hN,A.d0,A.aA],x.O)
D.c3F=new B.a9(A.ay,A.aE,A.x,D.dp1,null,null)
D.daB=w([A.cQ,A.fh],x.O)
D.c3J=new B.a9(A.a5,A.a8,A.x,D.daB,null,null)
D.dsI=w([N.lB,A.d0],x.O)
D.arK=new B.a9(A.a5,A.a8,A.x,D.dsI,null,null)
D.biW=new B.u(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.q)
D.dsF=w([D.biW,D.y7,A.c3],x.O)
D.c3O=new B.a9(A.a5,A.a8,A.x,D.dsF,null,null)
D.d63=w([A.be,A.cT,A.ej],x.O)
D.c3P=new B.a9(A.ay,A.aE,A.x,D.d63,null,null)
D.Ps=new B.a9(A.a5,A.a8,A.x,A.Il,null,null)
D.bs_=new B.u(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.q)
D.cIq=w([D.bs_,A.c3,A.jv],x.O)
D.arP=new B.a9(A.ay,A.aE,A.x,D.cIq,null,null)
D.dge=w([A.tO,A.az,D.Bu],x.O)
D.c4R=new B.a9(A.a5,A.a8,A.x,D.dge,null,null)
D.btm=new B.u(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.q)
D.bgS=new B.u(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.q)
D.bmV=new B.u(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.q)
D.d59=w([D.btm,D.bgS,D.bmV],x.O)
D.arQ=new B.a9(A.a5,A.a8,A.x,D.d59,null,null)
D.biY=new B.u(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.q)
D.c6Q=w([AA.aj_,D.biY],x.O)
D.c5_=new B.a9(A.b0,A.b6,A.x,D.c6Q,null,null)
D.d33=w([A.nh,A.bB],x.O)
D.c53=new B.a9(A.b0,A.b6,A.x,D.d33,null,null)
D.dlz=w([A.aD,A.dH],x.O)
D.c5a=new B.a9(A.a5,A.a8,A.x,D.dlz,null,null)
D.ahM=new B.u(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.q)
D.azQ=w([D.ahM,D.jt,D.LY],x.O)
D.c5D=new B.a9(A.ay,A.aE,A.x,D.azQ,null,null)
D.cIi=w([A.dv,A.dG],x.O)
D.c5O=new B.a9(A.b0,A.b6,A.x,D.cIi,null,null)
D.dis=w([A.xO,A.Bm],x.O)
D.c6C=new B.a9(A.a5,A.a8,A.x,D.dis,null,null)
D.fNq=new B.y("Which Bio link?",null,A.cz,null,null,null,null,null,null,null,null,null)
D.c6N=new B.q_(null,D.fNq,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.zn=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a7_=new C.l5(2,"elegantNavy")
D.hwk=w([A.Yz,D.jt,A.c3],x.O)
D.k1=new C.xS(0,"classic")
D.a6N=new C.jA("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a7_,4294967035,4279378237,4290283019,D.k1)
D.aJm=new C.l5(3,"elegantGold")
D.bcN=new B.u(1,1,0.9882352941176471,0.9529411764705882,A.q)
D.bdV=new B.u(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.q)
D.agb=new B.u(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.q)
D.hvN=w([D.bcN,D.bdV,D.agb],x.O)
D.a6L=new C.jA("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aJm,4294966515,4281016592,4289102906,D.k1)
D.dPD=new C.l5(22,"goldRibbon")
D.hvJ=w([A.Yz,D.jt,A.il],x.O)
D.a6E=new C.jA("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dPD,4294967035,4279378237,4291404327,D.k1)
D.dPE=new C.l5(23,"goldBaroque")
D.agT=new B.u(1,1,0.9647058823529412,0.8941176470588236,A.q)
D.hvP=w([D.agT,A.az,A.jv],x.O)
D.a6F=new C.jA("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dPE,4294964964,4283053072,4292128567,D.k1)
D.dPG=new C.l5(4,"elegantEmerald")
D.bff=new B.u(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.q)
D.bgg=new B.u(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.q)
D.hvV=w([D.bff,D.bgg,A.il],x.O)
D.a6G=new C.jA("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dPG,4294376440,4279122734,4291404327,D.k1)
D.dPH=new C.l5(5,"elegantBurgundy")
D.bky=new B.u(1,1,0.9686274509803922,0.9647058823529412,A.q)
D.hw1=w([D.bky,A.afk,A.il],x.O)
D.a6J=new C.jA("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dPH,4294965238,4283043359,4291404327,D.k1)
D.dPA=new C.l5(19,"goldFiligree")
D.MD=new B.u(1,1,0.984313725490196,0.9529411764705882,A.q)
D.hvQ=w([D.MD,A.az,A.jv],x.O)
D.a6H=new C.jA("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dPA,4294966259,4279378237,4292128567,D.k1)
D.dPB=new C.l5(20,"goldLaurel")
D.brQ=new B.u(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.q)
D.hw2=w([A.LR,A.il,D.brQ],x.O)
D.a6I=new C.jA("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dPB,4294966776,4282000405,4291404327,D.k1)
D.dPC=new C.l5(21,"goldCrest")
D.afb=new B.u(1,1,0.9725490196078431,0.9254901960784314,A.q)
D.brX=new B.u(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.q)
D.hvS=w([D.afb,A.az,D.brX],x.O)
D.a6M=new C.jA("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dPC,4294965484,4283053072,4292128567,D.k1)
D.dPF=new C.l5(24,"goldStar")
D.btd=new B.u(1,1,0.9882352941176471,0.9647058823529412,A.q)
D.hvW=w([D.btd,A.az,D.jt],x.O)
D.a6K=new C.jA("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dPF,4294966518,4279378237,4292128567,D.k1)
D.HM=w([D.a6N,D.a6L,D.a6E,D.a6F,D.a6G,D.a6J,D.a6H,D.a6I,D.a6M,D.a6K],x.h)
D.qL=new C.mO(0,"blank")
D.T6=new C.mO(1,"title")
D.mV=new C.mO(2,"titleContent")
D.e9f=new C.mO(3,"twoColumn")
D.DB=new C.mO(4,"section")
D.e9g=new C.mO(5,"comparison")
D.IY=new C.mO(6,"flashcard")
D.IZ=new C.mO(7,"quiz")
D.J_=new C.mO(8,"worksheet")
D.asa=w([D.qL,D.T6,D.mV,D.e9f,D.DB,D.e9g,D.IY,D.IZ,D.J_],B.at("O<mO>"))
D.aAX=w([Aq.XX,A.dG],x.O)
D.kP=w([A.c3,A.bL,A.i_,A.hX,D.Bu],x.O)
D.dLx=new C.j8("fireworks","Royal Fireworks","Thank you for celebrating with us",D.aAX,D.kP)
D.bsa=new B.u(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.q)
D.bkw=new B.u(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.q)
D.d3h=w([D.bsa,D.bkw],x.O)
D.dLo=new C.j8("confetti","Golden Confetti","Together we rise",D.d3h,D.kP)
D.d0b=w([A.nV,A.Xz],x.O)
D.dLp=new C.j8("crown","Crown of Glory","Built for our community",D.d0b,D.kP)
D.bgF=new B.u(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.q)
D.bk9=new B.u(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.q)
D.d7u=w([D.bgF,D.bk9],x.O)
D.uN=w([A.bM,A.aP,A.c,A.aN,A.al],x.O)
D.dLj=new C.j8("aurora","Aurora Gala","A brighter future, together",D.d7u,D.uN)
D.blP=new B.u(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.q)
D.diA=w([G.aeL,D.blP],x.O)
D.dLA=new C.j8("champagne","Champagne Toast","Cheers to every member",D.diA,D.kP)
D.dLB=new C.j8("diamonds","Diamond Rain","Every member is a jewel",A_.aBF,D.uN)
D.bdK=new B.u(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.q)
D.bjA=new B.u(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.q)
D.dof=w([D.bdK,D.bjA],x.O)
D.dLe=new C.j8("starburst","Golden Starburst","Thank you!",D.dof,D.kP)
D.c6X=w([A.fd,A.y1],x.O)
D.aeV=new B.u(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.q)
D.R0=w([A.p3,A.ik,A.vY,A.nW,D.aeV],x.O)
D.dLI=new C.j8("balloons","Luxury Balloons","Let's celebrate",D.c6X,D.R0)
D.d_p=w([A.XM,A.w],x.O)
D.dLw=new C.j8("galaxy","Galaxy Spiral","The sky is not the limit",D.d_p,D.uN)
D.bq3=new B.u(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.q)
D.deX=w([A.jO,D.bq3],x.O)
D.dLr=new C.j8("redcarpet","Red Carpet","Tonight we shine",D.deX,D.kP)
D.bnB=new B.u(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.q)
D.blA=new B.u(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.q)
D.djx=w([D.bnB,D.blA],x.O)
D.dLg=new C.j8("coins","Gold Coin Rain","Every contribution counts",D.djx,D.kP)
D.dr2=w([A.dv,A.hW],x.O)
D.dLm=new C.j8("lanterns","Sky Lanterns","Lighting the way together",D.dr2,D.kP)
D.bhR=new B.u(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.q)
D.cYg=w([A.y3,D.bhR],x.O)
D.dLi=new C.j8("hearts","Floating Hearts","Made with love",D.cYg,D.R0)
D.beo=new B.u(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.q)
D.bfm=new B.u(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.q)
D.dsD=w([D.beo,D.bfm],x.O)
D.dLH=new C.j8("petals","Rose Petals","Thank you, from our hearts",D.dsD,D.R0)
D.br4=new B.u(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.q)
D.doB=w([A.l6,D.br4],x.O)
D.dLd=new C.j8("butterflies","Golden Butterflies","New beginnings",D.doB,D.kP)
D.bmR=new B.u(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.q)
D.cZk=w([D.bmR,A.w],x.O)
D.dLz=new C.j8("neon","Neon Night","Let's go!",D.cZk,D.uN)
D.bjd=new B.u(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.q)
D.dlL=w([A.Mg,D.bjd],x.O)
D.dLC=new C.j8("disco","Disco Ball","Party time",D.dlL,D.uN)
D.bnr=new B.u(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.q)
D.dlf=w([A.hN,D.bnr],x.O)
D.dLh=new C.j8("sunrise","Golden Sunrise","A new day for our community",D.dlf,D.kP)
D.dkR=w([A.pZ,A.dG],x.O)
D.dLD=new C.j8("pearls","Ocean Pearls","Deep roots, bright future",D.dkR,D.uN)
D.bgM=new B.u(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.q)
D.dl4=w([D.bgM,A.dG],x.O)
D.dLG=new C.j8("snow","Winter Gala","Warm wishes to all",D.dl4,D.uN)
D.bcW=new B.u(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.q)
D.be8=new B.u(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.q)
D.dru=w([D.bcW,D.be8],x.O)
D.dLv=new C.j8("laurel","Laurel Victory","We did it together",D.dru,D.kP)
D.bcM=new B.u(1,0.12156862745098039,0.06274509803921569,0.2,A.q)
D.bk5=new B.u(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.q)
D.cXf=w([D.bcM,D.bk5],x.O)
D.dLF=new C.j8("ribbons","Silk Ribbons","Elegance in every step",D.cXf,D.kP)
D.blg=new B.u(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.q)
D.cIf=w([G.Bt,D.blg],x.O)
D.dLs=new C.j8("kente","Kente Pride","Proud of our roots",D.cIf,D.kP)
D.bof=new B.u(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.q)
D.brr=new B.u(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.q)
D.d9e=w([D.bof,D.brr],x.O)
D.dLn=new C.j8("trophy","Trophy Shine","Winners together",D.d9e,D.kP)
D.dlb=w([Ar.M4,A.w],x.O)
D.dLf=new C.j8("shooting","Shooting Stars","Make a wish",D.dlb,D.uN)
D.bd3=new B.u(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.q)
D.aiK=new B.u(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.q)
D.drN=w([D.bd3,D.aiK],x.O)
D.dLt=new C.j8("bokeh","Golden Bokeh","Shine bright",D.drN,D.kP)
D.bdu=new B.u(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.q)
D.dfO=w([D.bdu,A.w],x.O)
D.dLl=new C.j8("orbits","Golden Orbits","Always moving forward",D.dfO,D.kP)
D.br5=new B.u(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.q)
D.dc8=w([A.ag6,D.br5],x.O)
D.dLq=new C.j8("flowers","Blooming Garden","Growing together",D.dc8,D.R0)
D.bdf=new B.u(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.q)
D.be_=new B.u(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.q)
D.dqu=w([D.bdf,D.be_],x.O)
D.dLk=new C.j8("music","Music Party","Celebrate with us",D.dqu,D.uN)
D.bf1=new B.u(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.q)
D.brT=new B.u(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.q)
D.cYu=w([D.bf1,D.brT],x.O)
D.dLE=new C.j8("mandala","Royal Mandala","Harmony and unity",D.cYu,D.kP)
D.dce=w([G.Bt,D.aiK],x.O)
D.dLy=new C.j8("sparklers","Golden Sparklers","Light up the night",D.dce,D.kP)
D.dLu=new C.j8("city","City Lights","The whole city celebrates",D.aAX,D.kP)
D.HV=w([D.dLx,D.dLo,D.dLp,D.dLj,D.dLA,D.dLB,D.dLe,D.dLI,D.dLw,D.dLr,D.dLg,D.dLm,D.dLi,D.dLH,D.dLd,D.dLz,D.dLC,D.dLh,D.dLD,D.dLG,D.dLv,D.dLF,D.dLs,D.dLn,D.dLf,D.dLt,D.dLl,D.dLq,D.dLk,D.dLE,D.dLy,D.dLu],B.at("O<j8>"))
D.eAU=new B.z("","No ring")
D.eRj=new B.z("platinum","Platinum")
D.eNn=new B.z("glow","Glow")
D.eED=new B.z("double","Double line")
D.eDw=new B.z("framed","Gallery frame")
D.eAq=new B.z("rosegold","Rose gold")
D.eOc=new B.z("jewels","Jeweled")
D.eKO=new B.z("aurora","Aurora")
D.CR=w([D.eAU,A.TR,D.eRj,D.eNn,M.aQ6,D.eED,A.aQ4,D.eDw,D.eAq,D.eOc,D.eKO],x.L)
D.cru=w([D.a6H,D.a6I,D.a6M,D.a6E,D.a6F,D.a6K],x.h)
D.bWl=new B.ae(G.anf,16,null,null,null,null)
D.b7Q=new B.vO(A.bj,D.bWl,null,x.U)
D.bL3=new B.a0(58027,"MaterialIcons",!1)
D.bPS=new B.ae(D.bL3,16,null,null,null,null)
D.b7O=new B.vO(A.K,D.bPS,null,x.U)
D.bL4=new B.a0(58030,"MaterialIcons",!1)
D.bTY=new B.ae(D.bL4,16,null,null,null,null)
D.b7R=new B.vO(A.dV,D.bTY,null,x.U)
D.cxM=w([D.b7Q,D.b7O,D.b7R],B.at("O<vO<qf>>"))
D.cFw=w([A.Bz,A.hw],x.O)
D.cFx=w([A.be,A.bf,A.ej],x.O)
D.QQ=w([A.bL,A.hX,A.i_,A.az,A.nW],x.O)
D.cIl=w([A.c3,D.jt,D.LY],x.O)
D.cIT=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.eyd=new B.z(4278913286,4280030216)
D.eyv=new B.z(4279373061,4278518787)
D.eyC=new B.z(4279898630,4278847235)
D.d8B=w([D.eyd,D.eyv,D.eyC],x.n)
D.d42=w(["\u265b","\u269c","\u2726"],x.s)
D.dPy=new C.xU("Royal Onyx & Gold",D.d8B,4292128567,4294370209,4294965479,3874020544,D.d42)
D.ey0=new B.z(4278326799,4278598442)
D.ey2=new B.z(4278395929,4278258953)
D.ey9=new B.z(4278599728,4278327826)
D.dqU=w([D.ey0,D.ey2,D.ey9],x.n)
D.cZc=w(["\u269c","\u2756","\u2727"],x.s)
D.dPv=new C.xU("Imperial Emerald",D.dqU,4293050997,4294699968,4294180856,3872254170,D.cZc)
D.ey3=new B.z(4278455076,4278918747)
D.ey8=new B.z(4278587439,4278322714)
D.eym=new B.z(4279051376,4278455076)
D.doY=w([D.ey3,D.ey8,D.eym],x.n)
D.dgx=w(["\u2654","\u2726","\u2748"],x.s)
D.dPp=new C.xU("Sapphire Crown",D.doY,4291417834,4294967295,4294310143,3871986666,D.dgx)
D.eyA=new B.z(4279894534,4283041554)
D.eyM=new B.z(4281008906,4279042307)
D.eyU=new B.z(4284221976,4279894534)
D.dv0=w([D.eyA,D.eyM,D.eyU],x.n)
D.d_y=w(["\u265b","\u2766","\u2726"],x.s)
D.dPr=new C.xU("Ruby Throne",D.dv0,4293378685,4294963145,4294964466,3874213833,D.d_y)
D.eyu=new B.z(4279371039,4281995100)
D.eyE=new B.z(4280092723,4278714896)
D.eyR=new B.z(4283045242,4279371039)
D.drg=w([D.eyu,D.eyE,D.eyR],x.n)
D.dpk=w(["\u2655","\u2756","\u2727"],x.s)
D.dPw=new C.xU("Amethyst Palace",D.drg,4293314984,4294963421,4294702591,3873229802,D.dpk)
D.ey5=new B.z(4278519045,4280032287)
D.eyn=new B.z(4279111184,4278321666)
D.eyJ=new B.z(4280492839,4278716426)
D.dnH=w([D.ey5,D.eyn,D.eyJ],x.n)
D.deJ=w(["\u2726","\u25c6","\u2742"],x.s)
D.dPt=new C.xU("Obsidian & Platinum",D.dnH,4293256418,4294967295,4294638330,3872378836,D.deJ)
D.eyB=new B.z(4279896588,4282194463)
D.eyK=new B.z(4280553487,4279043334)
D.eyS=new B.z(4283048488,4279896588)
D.deb=w([D.eyB,D.eyK,D.eyS],x.n)
D.dt6=w(["\u2766","\u273f","\u2727"],x.s)
D.dPq=new C.xU("Rose Gold Velvet",D.deb,4293440672,4294960345,4294964979,3874214602,D.dt6)
D.ey6=new B.z(4278520340,4279180595)
D.eyb=new B.z(4278718495,4278322443)
D.eyy=new B.z(4279510591,4278520340)
D.cPa=w([D.ey6,D.eyb,D.eyy],x.n)
D.dfr=w(["\u269c","\u2736","\u2756"],x.s)
D.dPu=new C.xU("Midnight Brass",D.cPa,4291405148,4293975208,4294439914,3872837564,D.dfr)
D.ez6=new B.z(4294703086,4293780428)
D.ez2=new B.z(4294307549,4293187253)
D.ez7=new B.z(4294966517,4293977807)
D.d1S=w([D.ez6,D.ez2,D.ez7],x.n)
D.dfS=w(["\u269c","\u265b","\u2726"],x.s)
D.dPx=new C.xU("Ivory Marble & Gold",D.d1S,4289760572,4286209048,4280951062,3863625518,D.dfS)
D.eyh=new B.z(4278978566,4280555024)
D.eyx=new B.z(4279504137,4278518530)
D.eyO=new B.z(4281211923,4278978566)
D.d_o=w([D.eyh,D.eyx,D.eyO],x.n)
D.dq4=w(["\u2742","\u2726","\u265c"],x.s)
D.dPs=new C.xU("Onyx & Copper",D.d_o,4291856987,4294365880,4294964718,3873885630,D.dq4)
D.cJ0=w([D.dPy,D.dPv,D.dPp,D.dPr,D.dPw,D.dPt,D.dPq,D.dPu,D.dPx,D.dPs],B.at("O<xU>"))
D.cLn=w([A.az,D.Bu,A.hX],x.O)
D.eGT=new B.z("Original",null)
D.eH2=new B.z("Wide 16:9",1.7777777777777777)
D.eJq=new B.z("Landscape 3:2",1.5)
D.eGj=new B.z("Photo 4:3",1.3333333333333333)
D.eVc=new B.z("Portrait 3:4",0.75)
D.ayc=w([D.eGT,D.eH2,D.eJq,D.eGj,M.aPV,D.eVc],B.at("O<+(n,K?)>"))
D.ayd=w([A.hX,A.c_,A.b8,A.bq],x.O)
D.eJC=new B.z("","Original")
D.eLx=new B.z("circle","Circle")
D.eS7=new B.z("rounded","Rounded")
D.eT7=new B.z("triangle","Triangle")
D.eNE=new B.z("hexagon","Hexagon")
D.eLY=new B.z("diamond","Diamond")
D.eKN=new B.z("arch","Arch")
D.CY=w([D.eJC,D.eLx,D.eS7,D.eT7,D.eNE,D.eLY,D.eKN],x.L)
D.dKE=new C.lq("classic_blue","Classic Blue","Normal",A.bl,A.c,A.kH,A.d7,A.aK)
D.dKU=new C.lq("campus_green","Campus Green","Normal",A.b1,A.nf,A.tR,A.h3,A.e9)
D.dKL=new C.lq("warm_sand","Warm Sand","Normal",A.dZ,A.i_,A.bL,A.im,A.o2)
D.dKS=new C.lq("slate_minimal","Slate Minimal","Normal",A.bs,A.aP,A.aN,A.N,A.aK)
D.dKD=new C.lq("coral_fresh","Coral Fresh","Normal",A.cd,A.hY,A.pT,A.kh,A.tJ)
D.dKT=new C.lq("lavender_calm","Lavender Calm","Normal",A.b7,A.pW,A.xX,A.o9,A.js)
D.dKF=new C.lq("ocean_breeze","Ocean Breeze","Normal",A.fh,A.rt,A.tG,A.tL,A.o3)
D.ahV=new B.u(1,0.9803921568627451,0.9607843137254902,1,A.q)
D.dKQ=new C.lq("berry_pop","Berry Pop","Normal",A.f6,D.ahV,A.kD,G.Z6,A.BA)
D.dKG=new C.lq("midnight_pro","Midnight Pro","Professional",A.aD,A.N,A.dv,A.kD,A.cq)
D.dKP=new C.lq("executive_navy","Executive Navy","Professional",A.d3,A.ah8,A.d7,A.l4,A.bM)
D.dKN=new C.lq("boardroom_charcoal","Boardroom Charcoal","Professional",A.al,A.bo,A.N,A.aP,A.cq)
D.dKH=new C.lq("corporate_steel","Corporate Steel","Professional",A.o5,A.N,A.mD,A.fk,A.bM)
D.dKK=new C.lq("gold_luxe","Gold Luxe","Luxury",A.lZ,A.dP,A.p2,A.m_,A.bL)
D.bnw=new B.u(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.q)
D.dKO=new C.lq("rose_gold_elite","Rose Gold Elite","Luxury",A.hw,D.bnw,A.YS,A.ik,A.nW)
D.dKR=new C.lq("platinum_night","Platinum Night","Luxury",A.cq,A.dG,A.bo,A.aP,A.aN)
D.dKV=new C.lq("emerald_prestige","Emerald Prestige","Luxury",A.aW,A.q1,A.f7,A.q9,A.jL)
D.dKC=new C.lq("royal_purple","Royal Purple","Luxury",A.ne,A.Y1,A.js,A.kD,A.LQ)
D.dKM=new C.lq("neon_pitch","Neon Pitch","Bold",A.b8,A.dG,A.N,A.b_,A.aN)
D.dKJ=new C.lq("crimson_impact","Crimson Impact","Bold",A.bB,A.jO,A.ek,A.ru,A.eO)
D.dKI=new C.lq("sunset_gallery","Sunset Gallery","Bold",A.fr,A.tJ,A.kh,A.pT,A.mB)
D.I3=w([D.dKE,D.dKU,D.dKL,D.dKS,D.dKD,D.dKT,D.dKF,D.dKQ,D.dKG,D.dKP,D.dKN,D.dKH,D.dKK,D.dKO,D.dKR,D.dKV,D.dKC,D.dKM,D.dKJ,D.dKI],B.at("O<lq>"))
D.cWZ=w([A.c3,D.jt],x.O)
D.det=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eKy=new B.z("Faces & people",D.det)
D.cLr=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.ewQ=new B.z("Ideas & work",D.cLr)
D.d4y=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eNJ=new B.z("Nature",D.d4y)
D.deC=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.eGR=new B.z("Places & things",D.deC)
D.d88=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eKS=new B.z("Symbols",D.d88)
D.cX4=w([D.eKy,D.ewQ,D.eNJ,D.eGR,D.eKS],B.at("O<+(n,ai<n>)>"))
D.bdk=new B.u(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.q)
D.cXq=w([A.c3,D.agb,D.bdk],x.O)
D.b7a=new B.ac(0,A.G,A.LN,A.aKc,40)
D.b6R=new B.ac(0,A.G,A.o0,A.en,8)
D.cXD=w([D.b7a,D.b6R],x.V)
D.cYa=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.ayB=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a4f=w([A.hX,A.ej,A.bB,A.av,A.cd],x.O)
D.cZ6=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.agr=new B.u(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.q)
D.cZh=w([A.YI,D.agr,A.YI],x.O)
D.cZn=w([A.il,D.jt,D.LY],x.O)
D.eGD=new B.z(A.bj,D.a1O)
D.eI5=new B.z(A.K,D.a1N)
D.eBG=new B.z(A.dV,D.a1P)
D.d_j=w([D.eGD,D.eI5,D.eBG],B.at("O<+(qf,a0)>"))
D.cV=new C.J9(0,"text")
D.lN=new C.J9(1,"image")
D.fb=new C.J9(2,"shape")
D.T5=new C.J9(3,"pdf")
D.ll=new C.J9(4,"signature")
D.a76=new C.J9(5,"bio")
D.d0h=w([D.cV,D.lN,D.fb,D.T5,D.ll,D.a76],B.at("O<J9>"))
D.d0i=w([A.bp,A.cD],B.at("O<I4>"))
D.d0W=w(["School","Documents","Sign & present"],x.s)
D.b7f=new B.ac(0,A.G,A.aix,A.v6,28)
D.d1k=w([D.b7f],x.V)
D.d1D=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.R9=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.az2=w([A.hX,A.G1,A.aN,A.c,A.p3,A.az],x.O)
D.d39=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer and Cipher Lab were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","MACHINES AND WIDER ROOM VIEW: after the laundry or kitchen job the room items now include a washing machine, a dryer and a kitchen range to plug in; each only fits its own outlet (washer 5-20, dryer 14-30 or 10-30, range 14-50 or 10-50), and when it runs the washer and dryer show clothes tumbling and the range burners glow. In the house the Plug in list has them too. In any room, when the camera cannot go back any further because of the wall, zooming out widens the view so you see more of the room and still stand inside it.","LESSON HELPERS AND WATER: in the electrical lessons, picking a wire turns the device to the screws that wire belongs on: the white neutral wire shows the silver screws, a hot wire shows the brass screws, and the ground wire shows the green screw in front. Tap the name of a wire, a hose or a drain piece twice and the place it goes glows for a few seconds. In the faucet lesson tap the red or blue valve handle to turn it by hand; an open valve with no hose sprays, and a good line pours a clear stream into the basin with ripples. In the drain lesson tap the sink once the drain is built to run or stop the water. The Diagram lessons page is a picture: pick a wire on the left, tap its place on the diagram and a coloured wire is drawn between them.","SINKS IN THE PLUMBING LESSONS: the drain lesson and the faucet lesson now show a real sink: a counter with a hole, a white or steel basin sunk into it with a drain, a faucet with two handles on a flat plate behind it, and an open cabinet under it. The counter pieces leave out the faces that touch so no dark gaps flash at any angle.","CONSTRUCTION LAB ZOOM AND LESSON SEARCH: in any room of a job or lesson you can pinch or scroll back as far as the room allows while the camera always stays inside the house (it never goes out through a wall or the ceiling), and you can still turn all the way round. In the Construction Lab the LESSONS line has a small search icon on its right; tap it, type a word such as dryer or sink, and only the matching lessons stay. Tap the icon again to close the box. Only the lessons are searched, not the jobs.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in. Latest billboard update: no boards are joined any more. Billboard layouts are Two far apart, Three in a row, Three scattered far, Skyline, Two lines of three and Billboard park, with boards of different heights and sizes, the taller ones standing behind and some far from the others. The chooser shows two billboards in every row. Every kind of billboard has its own camera move, and each layout has its own tour where the drone flies from board to board. The rooftop board stands on a tall house with one big TV on each side of the door, and its board, TVs, logo and frame no longer vanish when the angle changes. Cipher Lab was removed from Core Protocol. In the city wiring job the person chooses what goes into an empty box from the tray (nothing is picked for them), and any outlet counts for an outlet and any switch for a switch as long as it is wired right, so the red frames in the house turn green when the job is really done. The zoom buttons answer at once with a big step and keep zooming while held, and pinching measures from the last step so the zoom is never thrown back. FAMILY GAMES: in the Family Tree there is a games button (a game controller icon) next to the Family Book button, and the redesigned Tree display settings sheet has a Family Games card. The system makes games by itself from the people in the tree: Family Kahoot (10 timed questions with coloured answer tiles, points for speed, a streak bonus and a podium against family members), Fireside Stories (a painted African village at night, with huts, a baobab, the moon and a living village: someone pounds grain, a girl carries water on her head, children roll a hoop, a goat grazes, a drummer plays. The oldest person in the tree sits by the fire and talks, with the words coming out while the mouth moves; the other elder and the children look at whoever speaks, blink, nod, ask things, gasp, laugh and clap, and the fire grows with every right answer), Safari Journey (a painted bus drives to a stop for each question, a villager asks, a wrong answer is a flat tyre), Line Up (tap two people to swap them until the family stands in the right order, then everybody cheers) and Village School (the teacher writes each question on a chalkboard, then a report card with the mistakes explained). Small trees get culture questions with Swahili family words and African proverbs. The person who created the tree can write up to two games of their own, in the Kahoot style, with up to 12 questions each, and everyone who opens the tree can play them. Players win Family Stars on this phone, with badges: Little Seed, Young Listener, Storyteller, Village Pride, Keeper of Roots and Elder of the Fire. The Family Games hub now shows eight games, two in every row: Family Kahoot, Fireside Stories, Calabash Catch (slide a basket under the gourd with the right answer as gourds fall), Plant the Tree (drag the children of a family onto the branches and watch the tree grow), Who Am I (a shadow turns into a face as clues come), Safari Journey, Line Up and Village School. Memory Drums, the old Family Test and the old Elder Order were removed. CITY PEOPLE: everybody in the city is one of the 3D characters you made (the X Bot and the Soldier for the residents, and whichever of the X Bot, the Dancer or the Soldier you choose for yourself on the tour sheet), read from their .glb files. They are dressed in their own colours (skin on the head and arms, a shirt, trousers), the X Bot residents get a face with eyes, brows, nose and mouth, and the head and hands keep more detail than the rest. The three character files are kept on the phone after the first visit so the same people appear with no internet; while a file is still being read nobody else is drawn in their place. The 3D view skips whole blocks of the town that are behind you, too far or off the side of the screen, and keeps billboard pictures on top of their boards. ROOM JOB SCREEN (the working screen of a room wiring job): you start inside the room, close to the wall that has the boxes, and can zoom out to see all of it. In the devices phase every box of the job has a little light on top of it (no frames): it blinks RED while that box is not fixed, and blinks GREEN only when its device is in, wired right and covered. Tap a box and the tray at the top shows only what can go in that box: an outlet box shows the outlets (outlet, GFCI, split, 240 volt, dryer, range, washer...), a switch box only the switches, and a ceiling box only the light and the fan, so nothing has to be scrolled through. The box you tapped has a bigger light, a cross at the start of the tray lets it go and shows everything again, and tapping an item puts it straight into the picked box. When the phone is turned on its side (or the job is shown sideways in full screen) the three phase tabs and the hint box are gone to leave room: only the tray is left, and its first button shows the phase (for example 3 Devices) and goes to the next phase when tapped. Standing up straight it is all there as before. When you work on a device with the phone on its side, the buttons are small, with their words in them (back to the room, fasten every wire or push into the box, pull it out, cover on, take it out and put in another), and they sit in ONE row of the same height together with the wire chips (for example black from the breaker, black to the light, bare copper ground). Once you pick a wire, the screws it can go on come in their own small low row UNDER the buttons, not along the side. The messages are small too: the note that says what just happened is a small box in the top corner (three lines at most, gone after six seconds) and the card about the thing you tapped is a small box in the bottom corner, so the work stays in view. The lights on the boxes are small, and round every empty box there is an invisible pad bigger than the box, so a box answers the first tap. Taps on every 3D view (the room, the bench, the city) are read the moment the finger lifts, they no longer wait for a possible double tap, so nothing needs two or three taps. Standing up straight they are the big buttons with words and the wide messages as before. REAL WORK IN THE CONSTRUCTION LAB AND THE CITY: the eight JOBS of the Construction Lab (Wire a room, Plumb a room, Fix a house, Build a room, Wiring bench, Safety inspection, Service calls, Neighbourhood jobs), My House and the whole city are real work, not a learning stage: wrong moves have real consequences (shocks that cost a life, burnt outlets, floods), there are no hints (the screen says Real work: no hints), and the practice and test switches are gone from the job screens. Only the LESSONS teach, with explanations and hints. The old Garden is now called NGMY City. Safety is enforced like on a real site: a device can not be put into a box while the breaker is on (a STOP message says to turn the breaker OFF first and test that the wires are dead), and touching live wires, pushing in, pulling out or covering with the power on is refused or shocks. Every finished job of the lab pays stars into the same stars the city shows: 12 plus 4 for each thing to fix, minus 2 for each mistake and 5 for each shock, never under 6 (the jobs started from the house in the city pay by their own rules, so nothing is paid twice; stars earned outside the city are kept and added when the city is next opened). The sinks of the bathroom and the kitchen are real sinks: a counter with a basin sunk into it (walls, floor, drain) over a hollow cabinet, and a faucet with two handles once the sink is plumbed. CONSTRUCTION CITY APPLIANCE JOBS (American NEMA style): the Construction Lab and the city jobs now have the outlets of the big appliances. Dryer outlet 4-wire (NEMA 14-30, 30 amp: an L-shaped neutral W, two hots X and Y, a round ground G), dryer outlet 3-wire (NEMA 10-30, the old kind: two hots and a neutral that also grounds, no ground hole), range outlet 4-wire (NEMA 14-50, 50 amp) and 3-wire (NEMA 10-50), and the washing machine outlet (NEMA 5-20, its own 20 amp circuit with a T-shaped slot, GFCI protected in a laundry area). Each has the real face of its type in 3D and is wired by putting the black, red, white and bare copper wires on the right screws: the two hots on the brass X and Y screws, the neutral on the silver W screw, the ground on the green screw. There are also two cord hookups at the back of the appliance: the 3-wire cord, where the metal ground strap stays on the middle terminal, and the 4-wire cord, where you take the strap off first (tap it), then put the green ground wire on the frame screw, white in the middle, black on the left and red on the right; the neutral and the ground are refused while the strap is on. In the house the kitchen wiring job is the range outlet (plus a GFCI outlet), and the hall is a laundry corner with a washer outlet and a dryer outlet (3-wire or 4-wire). The lab random room jobs can be a Laundry room or a Kitchen with a range. A house call in the city is now most often about the dryer, the stove or the washer, with its own message, and it sends you to the right room. The Add to room menu offers all of these outlets and both cords. When the city is in full screen (on its side) and a call is accepted and a fix starts, the job page stays on its side too, and a small button on its right edge turns it upright and back; without full screen it stays upright. PHONE (Phone Unlock page, under Open on your phone, the Phone button): a whole virtual phone of its own inside NGMY, separate from the device in use, with a lock screen (swipe up or tap), a home screen with a dock and a clock card, a home bar to go home, a status bar, and only a few apps of its own: Videos (paste the link of any video, YouTube, Vimeo or a video file such as mp4 or webm, and it plays on the virtual phone; save videos and see recent ones), Web (type an address; some sites refuse to be shown inside another page), the App Store and Settings (phone name, six wallpapers, brightness, the phone number, device ID and place, reset). There is no notes, calculator, clock or files app. The App Store holds NGMY apps that open inside the phone: Title Animator, Universe Explorer, Beat Maker, Piano Studio, Drum Pads, Palette Lab, Mandala Studio, Fireworks, Gravity Lab and Spark Painter; tap Get to install one (its icon appears on the home screen), Open to run it, Remove to take it away, and what is installed is remembered. To make the phone bigger, double-tap the top of the phone (the black bar with the camera): each double-tap makes it bigger, step by step, up to the full screen, and one more goes back to the first size. The phone has its own phone number and device ID (made when it is first opened, new again after a reset), its own place in the world that you choose in Settings (it never reads the place of the device running it), and its own memory that no other part of NGMY reads. Limits: the phone uses the internet connection of the device it runs on, so its internet address is the same as that device (a web page cannot change it), and apps from Google Play or the Apple App Store cannot run inside a web page. Everything on the virtual phone is kept on its own and a reset clears only it. PHONE WALL (inside the Phone, there is no separate button): the Phone shows one phone. When a YouTube, Vimeo or video file link is played in the Videos app, the four front phones of a wall of 100 open, two in a row, filling the room, each playing the video with the picture filling its screen, with the waiting phones stacked behind. Each of the 100 phones has its own phone number, device ID and place and a memory of the videos it watched (kept between visits). The four start one after the other so the first is never kept waiting. They play without sound, because a browser only starts several videos on its own when they are muted. When the video is over, the next four phones slide in and play it from the start, set after set (25 sets), and after the 100th phone it starts again from the first four (round 2, 3...). Buttons: next four, start again from phone 1, and One phone, which goes back to the single phone with the same video playing there. The single phone plays a video straight away with no extra settings. A web page link (not a video) stays on the single phone. EARTH GLOBE OFFLINE: the Universe Explorer Earth Globe map data is kept on the phone after the first visit and preloaded, so the globe opens with no internet; if it cannot load it says so and has a Try again button. TITLE ANIMATOR: more than 24 title movements, 8 letter looks and 20 different painted background scenes (not just colours); Download the animation saves the whole animation as a looping GIF, not a single picture. BUSINESS CARDS: the cards on the Home screen are saved safely: a background refresh can no longer write an old list over a card that was just added, there is a second copy of the cards kept beside the first that restores them if the first is damaged, and a business card put on Home is also kept on the account when one of the 5 cloud places is free, so it is still there after the app is reset. The studio card list uses a key made from the email so saved cards are not lost when the app is built again. Every business card has a Share my card button (the NFC icon on the card on Home and next to Download in the studio): it makes a contact file (vCard) with the name, job, company, phone, email, website, address and logo, shows a QR code any phone camera can read, opens the phone share sheet so the card can be sent by AirDrop to a phone held close, copies the contact text, and writes the card to an NFC tag on phones that allow it (Chrome on Android; iPhone Safari does not allow web pages to use NFC, and Apple Wallet passes need an Apple developer certificate, so they are not available yet).","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.eUB=new B.z(0.1,0.08)
D.eNH=new B.z(0.3,0.05)
D.eB8=new B.z(0.55,0.1)
D.eFz=new B.z(0.8,0.06)
D.eIR=new B.z(0.92,0.16)
D.eIk=new B.z(0.2,0.2)
D.eG3=new B.z(0.7,0.22)
D.eMk=new B.z(0.05,0.4)
D.eJi=new B.z(0.95,0.45)
D.eBW=new B.z(0.12,0.7)
D.eEh=new B.z(0.88,0.75)
D.eEp=new B.z(0.4,0.9)
D.ezo=new B.z(0.65,0.93)
D.eFc=new B.z(0.25,0.97)
D.eGA=new B.z(0.85,0.9)
D.eCQ=new B.z(0.5,0.04)
D.d3c=w([D.eUB,D.eNH,D.eB8,D.eFz,D.eIR,D.eIk,D.eG3,D.eMk,D.eJi,D.eBW,D.eEh,D.eEp,D.ezo,D.eFc,D.eGA,D.eCQ],x.G)
D.d3l=w([A.c,A.hw,A.aJ,A.aW],x.O)
D.eaS=new C.jU("office_blue","Office Blue",A.bl,A.d7,A.aK,A.c,A.kH)
D.eb2=new C.jU("campus_green","Campus Green",A.b1,A.h3,A.e9,A.nf,A.tR)
D.eaT=new C.jU("sunset","Sunset",A.fr,A.kh,A.o2,A.hY,A.pT)
D.eaU=new C.jU("midnight","Midnight",A.aD,A.kD,A.cq,A.N,A.dv)
D.eb4=new C.jU("classic","Classic",A.d0,A.dP,A.m0,A.i_,A.fU)
D.eb1=new C.jU("rose_gold","Rose Gold",A.hw,A.y4,A.y3,A.vY,A.Bz)
D.eaN=new C.jU("ocean_teal","Ocean Teal",A.fh,A.tL,A.o3,A.rt,A.tG)
D.eaM=new C.jU("slate_pro","Slate Pro",A.bs,A.N,A.aK,A.aP,A.aN)
D.eaL=new C.jU("neon_night","Neon Night",A.b8,A.b_,A.aN,A.dG,A.N)
D.eaX=new C.jU("lavender","Lavender",A.b7,A.o9,A.js,A.pW,A.xX)
D.eaZ=new C.jU("coral","Coral",A.cd,A.kh,A.tJ,A.hY,A.mB)
D.eaO=new C.jU("forest","Forest",A.hg,A.dY,A.cr,A.m1,A.ep)
D.eaP=new C.jU("berry","Berry",A.f6,G.Z6,A.BA,D.ahV,A.kD)
D.eaW=new C.jU("sand","Sand",A.dZ,A.im,A.o2,A.i_,A.bL)
D.eb0=new C.jU("ice","Ice",A.o5,A.Fy,A.aK,A.nb,A.fk)
D.eaR=new C.jU("charcoal","Charcoal",A.al,A.aP,A.cq,A.bo,A.N)
D.eaK=new C.jU("mint","Mint",A.aW,A.fM,A.h3,A.m1,A.q9)
D.eb_=new C.jU("crimson","Crimson",A.bB,A.nh,A.jO,A.G_,A.ru)
D.bgf=new B.u(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.q)
D.eaV=new C.jU("gold","Gold",A.lZ,A.xO,A.p2,D.bgf,A.m_)
D.eaY=new C.jU("aqua","Aqua",A.bS,A.FL,A.p_,A.pX,A.p4)
D.eaQ=new C.jU("plum","Plum",A.ne,A.y1,A.BA,A.Fz,A.rp)
D.eb3=new C.jU("steel","Steel",A.d3,A.d7,A.bo,A.kH,A.l4)
D.a4u=w([D.eaS,D.eb2,D.eaT,D.eaU,D.eb4,D.eb1,D.eaN,D.eaM,D.eaL,D.eaX,D.eaZ,D.eaO,D.eaP,D.eaW,D.eb0,D.eaR,D.eaK,D.eb_,D.eaV,D.eaY,D.eaQ,D.eb3],B.at("O<jU>"))
D.d3H=w([A.c3,A.jv],x.O)
D.T7=new C.hI(10,"rotate3d")
D.J1=new C.hI(8,"flip")
D.aJF=new C.hI(19,"spiral")
D.qM=new C.hI(16,"bounce")
D.aJI=new C.hI(9,"flipVertical")
D.d3I=w([D.T7,D.J1,D.aJF,D.qM,D.aJI],x.i)
D.ee=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.d45=w([0.62,1],x.x)
D.d4I=w([0,0.32,0.68,1],x.x)
D.mW=new C.hI(6,"zoom")
D.v0=new C.hI(4,"slideUp")
D.v_=new C.hI(2,"slideLeft")
D.d4S=w([D.mW,D.J1,D.v0,D.T7,D.v_],x.i)
D.d5n=w([A.c_,A.hw,A.ik,A.hX,A.c],x.O)
D.b75=new B.ac(0,A.G,D.agF,A.v6,30)
D.d68=w([D.b75],x.V)
D.em7=new B.t(0,-2.5)
D.elY=new B.t(-2.5,0)
D.ekb=new B.t(2.5,0)
D.d6b=w([A.Tl,A.a7x,A.aKP,A.a7w,D.em7,O.aKL,D.elY,D.ekb],x.dN)
D.I9=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.d6H=w([23,114,69,56,80,144],x.t)
D.d7a=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.d7D=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.d9j=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.d9n=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bi=new C.v2(0,"rectangle")
D.eT=new C.v2(1,"circle")
D.lm=new C.v2(6,"hexagon")
D.d9C=w([D.bi,D.eT,D.lm],x.m)
D.oB=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.ai3=new B.u(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.q)
D.daa=w([D.ai3,A.dY],x.O)
D.eBp=new B.z("","Classic")
D.ezD=new B.z("caps","Bold caps")
D.eMn=new B.z("elegant","Elegant")
D.eSr=new B.z("shadow","Shadow")
D.eFX=new B.z("neon","Neon glow")
D.eQ7=new B.z("marker","Highlighter")
D.eSF=new B.z("stamp","Stamp")
D.eEP=new B.z("threed","3D")
D.eMU=new B.z("fire","Fire")
D.eNT=new B.z("ice","Ice")
D.eLw=new B.z("chalk","Chalk")
D.eLB=new B.z("comic","Comic")
D.eTX=new B.z("softglow","Soft glow")
D.eOW=new B.z("lowercase","Lowercase")
D.eM5=new B.z("double","Echo")
D.eU5=new B.z("whisper","Whisper")
D.aA0=w([D.eBp,D.ezD,D.eMn,D.eSr,D.eFX,M.aQ5,D.eQ7,D.eSF,M.aQ7,D.eEP,M.aQ_,D.eMU,D.eNT,D.eLw,D.eLB,A.TR,Au.aQ8,D.eTX,D.eOW,D.eM5,D.eU5],x.L)
D.dbv=w([3,5,7,10,12,15],x.t)
D.dd1=w([A.c_,A.bL,A.c,A.eG,A.cL],x.O)
D.dC9=new C.tA(10,"cardWorld")
D.Dt=new C.BN(3,"rounded")
D.dSy=new C.lt("world","NGMY World",D.dC9,D.Dt,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dCa=new C.tA(11,"cardSplit")
D.dSu=new C.lt("business","Business Wire",D.dCa,D.Dt,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dCb=new C.tA(12,"cardBreaking")
D.dSH=new C.lt("breaking","Breaking Red",D.dCb,D.Dt,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dCc=new C.tA(13,"cardFeature")
D.dSA=new C.lt("feature","Tech Feature",D.dCc,D.Dt,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aIb=new C.tA(6,"circle")
D.aI5=new C.BN(4,"circle")
D.dSE=new C.lt("parchment","Royal Circle",D.aIb,D.aI5,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dSt=new C.lt("ocean","Blue Ocean",D.aIb,D.aI5,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dCf=new C.tA(7,"rail")
D.aI4=new C.BN(1,"double")
D.dSv=new C.lt("forest","Green Leaf",D.dCf,D.aI4,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aI8=new C.tA(1,"sideBySide")
D.dSJ=new C.lt("herald","NGMY Herald",D.aI8,D.Dt,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aI7=new C.tA(0,"classic")
D.a6j=new C.BN(9,"shadow")
D.dSI=new C.lt("daily","The Daily",D.aI7,D.a6j,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dCd=new C.tA(2,"splash")
D.aI6=new C.BN(6,"cutCorner")
D.dSs=new C.lt("tabloid","Big Tabloid",D.dCd,D.aI6,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aIc=new C.tA(9,"minimal")
D.dSD=new C.lt("modern","Modern Digest",D.aIc,D.Dt,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aI9=new C.tA(3,"magazine")
D.aI3=new C.BN(0,"plain")
D.dSz=new C.lt("midnight","Midnight Edition",D.aI9,D.aI3,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dCg=new C.tA(8,"banner")
D.dSB=new C.lt("metro","Metro Wire",D.dCg,D.aI6,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dC8=new C.BN(8,"arch")
D.dSC=new C.lt("sunrise","Sunrise Post",D.aI9,D.dC8,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aIa=new C.tA(5,"scrapbook")
D.dC7=new C.BN(5,"tape")
D.dSx=new C.lt("neon","Neon Beat",D.aIa,D.dC7,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dCe=new C.tA(4,"wrap")
D.dSK=new C.lt("gold","Golden Press",D.dCe,D.a6j,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dSL=new C.lt("minimal","Paper White",D.aIc,D.a6j,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dSw=new C.lt("gazette","Fresh Gazette",D.aI7,D.aI4,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dSG=new C.lt("times","Classic Times",D.aI8,D.aI3,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.SD=new C.BN(2,"polaroid")
D.dSF=new C.lt("scrapbook","Memory Scrapbook",D.aIa,D.SD,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a4K=w([D.dSy,D.dSu,D.dSH,D.dSA,D.dSE,D.dSt,D.dSv,D.dSJ,D.dSI,D.dSs,D.dSD,D.dSz,D.dSB,D.dSC,D.dSx,D.dSK,D.dSL,D.dSw,D.dSG,D.dSF],B.at("O<lt>"))
D.ddd=w([0.45,1],x.x)
D.Id=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.ddE=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.hqU=new C.oL("Original",0,1,1,0,0,0)
D.hqY=new C.oL("Black & white",0,1.1,0,0,0,0)
D.hqL=new C.oL("Noir",-0.05,1.55,0,0,0,0)
D.hqP=new C.oL("Sepia",0,1,0.25,0.9,0,0)
D.hqO=new C.oL("Vivid",0,1.15,1.6,0,0,0)
D.hqH=new C.oL("Pop",0,1.3,1.9,0,0,0)
D.hqJ=new C.oL("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.hqV=new C.oL("Matte",0,0.9,0.85,0,0,0.55)
D.hqQ=new C.oL("Cool",0,1.05,1,-0.8,0,0)
D.hqX=new C.oL("Warm",0.03,1.05,1.1,0.8,0,0)
D.hqI=new C.oL("Golden hour",0.04,1,1.25,1,0,0)
D.hqN=new C.oL("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.hqW=new C.oL("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.hqM=new C.oL("Dramatic",-0.05,1.5,1.2,0,0,0)
D.hqS=new C.oL("Retro",0,0.9,0.7,0.4,0,0.35)
D.hqR=new C.oL("Forest",0,1,1.2,-0.1,-0.45,0)
D.hqT=new C.oL("Rose",0,1,1.1,0.3,0.4,0)
D.hqK=new C.oL("Ocean",0,1,1.2,-0.5,-0.2,0)
D.ddF=w([D.hqU,D.hqY,D.hqL,D.hqP,D.hqO,D.hqH,D.hqJ,D.hqV,D.hqQ,D.hqX,D.hqI,D.hqN,D.hqW,D.hqM,D.hqS,D.hqR,D.hqT,D.hqK],B.at("O<oL>"))
D.bcH=new B.u(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.q)
D.ddH=w([D.ai3,A.dY,D.bcH],x.O)
D.ewJ=new B.z(0.12,0.3)
D.eO3=new B.z(0.26,0.75)
D.eMj=new B.z(0.8,0.22)
D.eSR=new B.z(0.9,0.7)
D.eOV=new B.z(0.5,0.15)
D.eR1=new B.z(0.65,0.85)
D.eDm=new B.z(0.08,0.85)
D.ddV=w([D.ewJ,D.eO3,D.eMj,D.eSR,D.eOV,D.eR1,D.eDm],x.G)
D.aAc=w([A.b8,A.c_,A.bq,A.be],x.O)
D.deN=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.df_=w([A.c,A.fk,A.du,A.vO],x.O)
D.bgv=new B.u(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.q)
D.dg3=w([D.bgv,D.agr],x.O)
D.dg5=w([A.tO,A.az],x.O)
D.dgk=w([0,0.25,0.75,1],x.x)
D.dgm=w([A.xT,A.p3],x.O)
D.aJf=new C.l5(10,"kenteSunset")
D.hvL=w([D.agT,A.kc,A.az],x.O)
D.dNS=new C.jA("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aJf,4294964964,4282000405,4279983648,D.k1)
D.aJg=new C.l5(11,"indigoMudcloth")
D.bdP=new B.u(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.q)
D.hvZ=w([D.bdP,A.agn,A.il],x.O)
D.dO_=new C.jA("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aJg,4294439140,4279903102,4279903102,D.k1)
D.aJh=new C.l5(12,"adinkraRoyal")
D.bsC=new B.u(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.q)
D.hw_=w([D.afb,D.bsC,A.az],x.O)
D.dO1=new C.jA("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aJh,4294965484,4285218591,4287322667,D.k1)
D.aJi=new C.l5(13,"nileLotus")
D.boB=new B.u(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.q)
D.bkS=new B.u(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.q)
D.hw4=w([D.boB,D.bkS,A.il],x.O)
D.dO0=new C.jA("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aJi,4294244340,4279196764,4279196764,D.k1)
D.aJj=new C.l5(14,"shweshweIvory")
D.biK=new B.u(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.q)
D.bhk=new B.u(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.q)
D.ben=new B.u(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.q)
D.hvM=w([D.biK,D.bhk,D.ben],x.O)
D.dNX=new C.jA("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aJj,4294505710,4279970378,4291058750,D.k1)
D.t0=new C.l5(15,"certIvoryNavy")
D.hvK=w([D.MD,D.jt,A.il],x.O)
D.aIL=new C.xS(1,"ringsNdoa")
D.dNU=new C.jA("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.t0,4294966259,4279378237,4291404327,D.aIL)
D.a6P=new C.xS(2,"coupleCards")
D.dNP=new C.jA("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.t0,4294966259,4279378237,4291404327,D.a6P)
D.Dw=new C.l5(18,"certIvoryNavyBar")
D.afa=new B.u(1,1,0.9882352941176471,0.9686274509803922,A.q)
D.hvY=w([D.afa,D.jt,A.il],x.O)
D.aIM=new C.xS(3,"kuhoweshaForm")
D.dNN=new C.jA("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.Dw,4294966519,4279378237,4291404327,D.aIM)
D.agD=new B.u(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.q)
D.hwh=w([D.MD,D.agD,A.il],x.O)
D.a6Q=new C.xS(4,"mahariPande")
D.dNQ=new C.jA("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.t0,4294966259,4279904068,4291404327,D.a6Q)
D.aJk=new C.l5(16,"certIvoryGreen")
D.bi1=new B.u(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.q)
D.hvO=w([A.LR,D.bi1,A.il],x.O)
D.aIN=new C.xS(5,"familiaMti")
D.dNW=new C.jA("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aJk,4294966776,4280241466,4291404327,D.aIN)
D.a6R=new C.xS(6,"ndoaSafi")
D.dNO=new C.jA("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.Dw,4294966519,4279378237,4291404327,D.a6R)
D.bmQ=new B.u(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.q)
D.hvR=w([D.MD,A.il,D.bmQ],x.O)
D.a6S=new C.xS(7,"peteWide")
D.dNT=new C.jA("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.t0,4294966259,4282001936,4291404327,D.a6S)
D.dO2=new C.xS(8,"muhuriCrest")
D.dNM=new C.jA("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.t0,4294966259,4279378237,4291404327,D.dO2)
D.hw0=w([D.afa,D.agD,A.il],x.O)
D.dO3=new C.xS(9,"fomuWazi")
D.dNZ=new C.jA("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.Dw,4294966519,4279904068,4291404327,D.dO3)
D.aJl=new C.l5(17,"certIvoryRose")
D.biP=new B.u(1,1,0.9725490196078431,0.9607843137254902,A.q)
D.hw3=w([D.biP,D.ahA,A.il],x.O)
D.a6O=new C.xS(10,"upendoOrnate")
D.dNV=new C.jA("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aJl,4294965493,4286200650,4291404327,D.a6O)
D.dgO=w([D.dNS,D.dO_,D.dO1,D.dO0,D.dNX,D.dNU,D.dNP,D.dNN,D.dNQ,D.dNW,D.dNO,D.dNT,D.dNM,D.dNZ,D.dNV],x.h)
D.ef=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.J2=new C.wg(0,"emojis")
D.DD=new C.wg(1,"pictures")
D.J3=new C.wg(2,"icons3d")
D.a78=new C.wg(3,"animations")
D.T9=new C.wg(4,"videoMotion")
D.DE=new C.wg(5,"luxe")
D.a4R=w([D.J2,D.DD,D.J3,D.a78,D.T9,D.DE],B.at("O<wg>"))
D.eRF=new B.z(A.e5,"Looks")
D.eFs=new B.z(A.CH,"Light")
D.eFp=new B.z(A.ma,"Colour")
D.eDn=new B.z(A.wj,"Effects")
D.aoj=new B.a0(63112,"MaterialIcons",!1)
D.ezT=new B.z(D.aoj,"Crop")
D.dhk=w([D.eRF,D.eFs,D.eFp,D.eDn,D.ezT],x.f2)
D.dhZ=w([],x.D)
D.hwe=w([],x.L)
D.eDB=new B.z("Flashcard",D.IY)
D.eHv=new B.z("Quiz",D.IZ)
D.eJx=new B.z("Worksheet",D.J_)
D.eGv=new B.z("Notes",D.mV)
D.eI3=new B.z("Section",D.DB)
D.diG=w([D.eDB,D.eHv,D.eJx,D.eGv,D.eI3],B.at("O<+(n,mO)>"))
D.dPI=new C.l5(6,"beadedPearl")
D.blD=new B.u(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.q)
D.hwi=w([H.YR,D.blD,A.il],x.O)
D.aIJ=new C.jA("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dPI,4294966774,4286209070,4291404327,D.k1)
D.dPJ=new C.l5(7,"artDeco")
D.bpY=new B.u(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.q)
D.bsW=new B.u(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.q)
D.hwg=w([D.bpY,D.bsW,A.c3],x.O)
D.aIK=new C.jA("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dPJ,4294440434,4280228630,4290283019,D.k1)
D.dPK=new C.l5(8,"rosetteCorners")
D.bs3=new B.u(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.q)
D.bgA=new B.u(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.q)
D.bly=new B.u(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.q)
D.hvU=w([D.bs3,D.bgA,D.bly],x.O)
D.aII=new C.jA("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dPK,4294702831,4285218602,4291394365,D.k1)
D.dPL=new C.l5(9,"modernLedger")
D.hvT=w([A.c,D.jt,D.jt],x.O)
D.aIH=new C.jA("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dPL,4294967295,4279378237,4279378237,D.k1)
D.diK=w([D.aIJ,D.aIK,D.aII,D.aIH],x.h)
D.diT=w([A.ik,A.p3],x.O)
D.co=new C.hI(0,"none")
D.dh=new C.hI(1,"fade")
D.J0=new C.hI(3,"slideRight")
D.aJH=new C.hI(5,"slideDown")
D.e9m=new C.hI(7,"zoomOut")
D.a77=new C.hI(11,"cube")
D.e9h=new C.hI(12,"blur")
D.aJE=new C.hI(13,"dissolve")
D.e9i=new C.hI(14,"wipeLeft")
D.e9j=new C.hI(15,"wipeRight")
D.T8=new C.hI(17,"push")
D.e9k=new C.hI(18,"flash")
D.aJG=new C.hI(20,"swing")
D.e9l=new C.hI(21,"curtain")
D.RK=w([D.co,D.dh,D.v_,D.J0,D.v0,D.aJH,D.mW,D.e9m,D.J1,D.aJI,D.T7,D.a77,D.e9h,D.aJE,D.e9i,D.e9j,D.qM,D.T8,D.e9k,D.aJF,D.aJG,D.e9l],x.i)
D.RL=w([D.a6N,D.a6L,D.a6E,D.a6F,D.a6G,D.a6J,D.a6H,D.a6I,D.a6M,D.a6K,D.aIJ,D.aIK,D.aII,D.aIH],x.h)
D.djl=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.djp=w([A.xY,A.hX,A.c3],x.O)
D.eEJ=new B.z(A.ut,"Design")
D.eTg=new B.z(D.aoA,"Word sizes")
D.eOE=new B.z(A.CC,"Text")
D.bOn=new B.a0(983182,"MaterialIcons",!1)
D.eOJ=new B.z(D.bOn,"Photo")
D.ezr=new B.z(A.le,"Logo")
D.eUz=new B.z(A.Hz,"News")
D.djv=w([D.eEJ,D.eTg,D.eOE,D.eOJ,D.ezr,D.eUz],x.f2)
D.djw=w(["golddust","sparkle","sheen"],x.s)
D.eaJ=new C.eA("upload_pdf",K.OY,"Upload PDF")
D.e9T=new C.eA("sign_paper",A.Hw,"Sign Paper")
D.bND=new B.a0(63438,"MaterialIcons",!1)
D.eaF=new C.eA("hd_photo",D.bND,"HD Photo")
D.e9L=new C.eA("sharpen",E.a1x,"Sharpen")
D.e9V=new C.eA("print",K.OY,"Download PDF")
D.eam=new C.eA("rotate",D.aoj,"Rotate")
D.ea3=new C.eA("text_box",A.CC,"Text Box")
D.ea5=new C.eA("picture",A.uy,"Picture")
D.ea1=new C.eA("title",A.wx,"Title")
D.e9Y=new C.eA("subtitle",U.apb,"Subtitle")
D.eav=new C.eA("bullets",I.a1Q,"Bullet List")
D.e9Z=new C.eA("numbered",A.ON,"Numbered")
D.eay=new C.eA("quote",A4.Cq,"Quote")
D.eaa=new C.eA("citation",A.om,"Citation")
D.eaB=new C.eA("date_stamp",Aj.a1B,"Date Stamp")
D.eao=new C.eA("page_number",A.z6,"Page #")
D.eas=new C.eA("header_bar",A.CF,"Header")
D.ea4=new C.eA("footer_bar",Av.a2p,"Footer")
D.e9U=new C.eA("divider",A.ux,"Divider")
D.e9Q=new C.eA("highlight",A.a1U,"Highlight")
D.eau=new C.eA("redact",A.uI,"Redact")
D.eah=new C.eA("callout",A.Cj,"Callout")
D.eaD=new C.eA("checkboxes",I.anz,"Checklist")
D.eae=new C.eA("table",A.a2m,"Table")
D.ea8=new C.eA("memo",I.a26,"Memo")
D.eai=new C.eA("letter",A.Hl,"Letter")
D.bNg=new B.a0(63259,"MaterialIcons",!0)
D.e9K=new C.eA("agenda",D.bNg,"Agenda")
D.e9W=new C.eA("toc",AD.aoO,"Contents")
D.bNz=new B.a0(63406,"MaterialIcons",!1)
D.eaf=new C.eA("sig_line",D.bNz,"Sign Line")
D.e9D=new C.eA("initial_line",A.iY,"Initials")
D.e9G=new C.eA("approved",A.le,"APPROVED")
D.eak=new C.eA("draft",A.pl,"DRAFT")
D.eaq=new C.eA("confidential",A.jB,"Confidential")
D.eat=new C.eA("sticky",A.P5,"Sticky Note")
D.eaC=new C.eA("progress",A.aoN,"Progress")
D.bON=new B.a0(983507,"MaterialIcons",!1)
D.e9R=new C.eA("stars",D.bON,"Star Rating")
D.e9B=new C.eA("equation",A.aoC,"Equation")
D.e9M=new C.eA("timeline",A.a2n,"Timeline")
D.ea9=new C.eA("two_col",A.a2q,"Two Columns")
D.e9O=new C.eA("compare",Az.a1F,"Compare")
D.e9z=new C.eA("duplicate_el",A.fQ,"Duplicate")
D.eaH=new C.eA("delete_el",A.eb,"Delete")
D.eax=new C.eA("bring_fwd",H.aow,"Bring Front")
D.e9E=new C.eA("send_back",H.aov,"Send Back")
D.eaj=new C.eA("align_left",D.a1O,"Align L")
D.eap=new C.eA("align_center",D.a1N,"Align C")
D.eaG=new C.eA("align_right",D.a1P,"Align R")
D.ea2=new C.eA("word_count",A3.a1e,"Word Count")
D.ea_=new C.eA("link_text",A.hD,"Link")
D.ean=new C.eA("phone",A.iZ,"Phone")
D.e9P=new C.eA("email",A.Cm,"Email")
D.eaI=new C.eA("qr_placeholder",A.jD,"QR Placeholder")
D.e9J=new C.eA("rectangle",A5.us,"Rectangle")
D.ead=new C.eA("circle",A.qp,"Circle")
D.e9F=new C.eA("arrow",A.jA,"Arrow")
D.eaw=new C.eA("line",A.ux,"Line")
D.e9S=new C.eA("triangle",A.a1D,"Triangle")
D.bNn=new B.a0(63318,"MaterialIcons",!1)
D.e9X=new C.eA("grayscale",D.bNn,"Grayscale")
D.ea6=new C.eA("brighten",I.anU,"Brighten")
D.eab=new C.eA("flip_h",A.Cp,"Flip H")
D.bNu=new B.a0(63348,"MaterialIcons",!1)
D.eaE=new C.eA("flip_v",D.bNu,"Flip V")
D.ear=new C.eA("cover_page",A.qs,"Cover Page")
D.e9C=new C.eA("invoice",A.ho,"Invoice")
D.e9N=new C.eA("resume",A.mM,"Resume")
D.ea0=new C.eA("minutes",A.pf,"Minutes")
D.e9H=new C.eA("lab_report",A.P1,"Lab Report")
D.e9I=new C.eA("rubric",A.qv,"Rubric")
D.eac=new C.eA("flashcard_tool",W.Hu,"Flashcard")
D.eaz=new C.eA("quiz_tool",A.Hq,"Quiz Block")
D.eag=new C.eA("worksheet_tool",P.H_,"Worksheet")
D.eal=new C.eA("outline_share",A.P3,"Share Outline")
D.eaA=new C.eA("export_json",D.anF,"Export JSON")
D.e9A=new C.eA("new_slide",D.a1d,"New Slide")
D.ea7=new C.eA("present",A.qz,"Present")
D.dk1=w([D.eaJ,D.e9T,D.eaF,D.e9L,D.e9V,D.eam,D.ea3,D.ea5,D.ea1,D.e9Y,D.eav,D.e9Z,D.eay,D.eaa,D.eaB,D.eao,D.eas,D.ea4,D.e9U,D.e9Q,D.eau,D.eah,D.eaD,D.eae,D.ea8,D.eai,D.e9K,D.e9W,D.eaf,D.e9D,D.e9G,D.eak,D.eaq,D.eat,D.eaC,D.e9R,D.e9B,D.e9M,D.ea9,D.e9O,D.e9z,D.eaH,D.eax,D.e9E,D.eaj,D.eap,D.eaG,D.ea2,D.ea_,D.ean,D.e9P,D.eaI,D.e9J,D.ead,D.e9F,D.eaw,D.e9S,D.e9X,D.ea6,D.eab,D.eaE,D.ear,D.e9C,D.e9N,D.ea0,D.e9H,D.e9I,D.eac,D.eaz,D.eag,D.eal,D.eaA,D.e9A,D.ea7],B.at("O<eA>"))
D.dkb=w([A.cq,A.al],x.O)
D.eyY=new B.z(4286331629,4292552567)
D.eyL=new B.z(4280640491,4278630100)
D.ez5=new B.z(4294538006,4292943176)
D.ey7=new B.z(4278556265,4280640491)
D.de6=w([D.eyY,D.eyL,D.ez5,D.ey7],x.n)
D.cBy=w([4294626325,4280472558,4294210230],x.t)
D.e9u=new C.nZ("colorful","Colorful",A.ma,D.de6,4294967295,3875536895,D.cBy,D.mW)
D.eyz=new B.z(4279522093,4279657780)
D.eyP=new B.z(4281750292,4283268111)
D.eya=new B.z(4278603323,4279203438)
D.eyQ=new B.z(4282343954,4279599165)
D.cMF=w([D.eyz,D.eyP,D.eya,D.eyQ],x.n)
D.cBg=w([4288931381,4294829706,4287033260],x.t)
D.e9q=new C.nZ("nature","Nature",A.Hx,D.cMF,4294442727,3874290891,D.cBg,D.dh)
D.eyt=new B.z(4279369771,4283178389)
D.eyq=new B.z(4279179050,4286456526)
D.eyH=new B.z(4280163147,4290648157)
D.ey_=new B.z(4278322711,4285343961)
D.d3X=w([D.eyt,D.eyq,D.eyH,D.ey_],x.n)
D.cBu=w([4294210230,4280472558,4289170426],x.t)
D.e9o=new C.nZ("vibe","Vibe",A.OQ,D.d3X,4294967295,3874869502,D.cBu,D.v_)
D.ez1=new B.z(4290007817,4292552567)
D.eyW=new B.z(4286328082,4294286859)
D.ez0=new B.z(4288485197,4294538006)
D.eyV=new B.z(4285343961,4293675161)
D.c7o=w([D.ez1,D.eyW,D.ez0,D.eyV],x.n)
D.cBz=w([4294829706,4294967295,4284999929],x.t)
D.e9p=new C.nZ("celebration","Celebration",A.kn,D.c7o,4294967295,4009752557,D.cBz,D.qM)
D.eyo=new B.z(4279179050,4280171146)
D.eys=new B.z(4279310375,4280232247)
D.eyg=new B.z(4278916151,4280172719)
D.eyp=new B.z(4279179050,4281549141)
D.cXj=w([D.eyo,D.eys,D.eyg,D.eyp],x.n)
D.cBb=w([4281908728,4294626325,4287931320],x.t)
D.e9t=new C.nZ("professional","Professional",A.Ch,D.cXj,4294967295,3872118241,D.cBb,D.T8)
D.eyk=new B.z(4278995566,4278413729)
D.eyc=new B.z(4278727492,4279137424)
D.eyI=new B.z(4280171146,4278751666)
D.eyl=new B.z(4278995566,4279590517)
D.cFo=w([D.eyk,D.eyc,D.eyI,D.eyl],x.n)
D.cBe=w([4286436348,4284410580,4294829706],x.t)
D.e9v=new C.nZ("ocean","Ocean",I.a2s,D.cFo,4294967295,3873501950,D.cBe,D.v0)
D.eyX=new B.z(4286328082,4294538006)
D.eyZ=new B.z(4286781507,4294677052)
D.eyT=new B.z(4283178389,4294197086)
D.ez_=new B.z(4288295954,4294688548)
D.cTw=w([D.eyX,D.eyZ,D.eyT,D.ez_],x.n)
D.cBA=w([4294829706,4294967295,4294747557],x.t)
D.e9w=new C.nZ("sunset","Sunset",A.P7,D.cTw,4294967295,4009749973,D.cBA,D.dh)
D.ez9=new B.z(4294967295,4294047225)
D.ez4=new B.z(4294507260,4294967295)
D.ez8=new B.z(4294967295,4293060848)
D.ez3=new B.z(4294507260,4294047225)
D.d7g=w([D.ez9,D.ez4,D.ez8,D.ez3],x.n)
D.cB9=w([4280640491,4279179050,4287931320],x.t)
D.e9s=new C.nZ("minimal","Minimal",A5.us,D.d7g,4279179050,4282865001,D.cB9,D.dh)
D.eyj=new B.z(4278979081,4280886564)
D.eyD=new B.z(4280031511,4278979081)
D.eyr=new B.z(4279308561,4281148438)
D.eyi=new B.z(4278979081,4280031511)
D.dmf=w([D.eyj,D.eyD,D.eyr,D.eyi],x.n)
D.cBn=w([4292128567,4294829706,4289241758],x.t)
D.e9x=new C.nZ("elegant","Elegant",A.mb,D.dmf,4294898631,3873957348,D.cBn,D.aJE)
D.eyF=new B.z(4280159034,4282058596)
D.eyf=new B.z(4278916151,4280163147)
D.eyN=new B.z(4281208933,4278916151)
D.eyw=new B.z(4279502891,4283178389)
D.dtM=w([D.eyF,D.eyf,D.eyN,D.eyw],x.n)
D.cBw=w([4294296657,4292128567,4291081725],x.t)
D.e9r=new C.nZ("royal","Royal Gold",A.jj,D.dtM,4294965222,3874084351,D.cBw,D.mW)
D.ey4=new B.z(4278464302,4280163147)
D.eye=new B.z(4278916151,4279455306)
D.eyG=new B.z(4280163147,4283040846)
D.ey1=new B.z(4278332450,4281413249)
D.ddK=w([D.ey4,D.eye,D.eyG,D.ey1],x.n)
D.cBa=w([4281193663,4289170426,4294210230],x.t)
D.e9y=new C.nZ("aurora","Aurora Glow",A.e5,D.ddK,4293983738,3869766608,D.cBa,D.dh)
D.wI=w([D.e9u,D.e9q,D.e9o,D.e9p,D.e9t,D.e9v,D.e9w,D.e9s,D.e9x,D.e9r,D.e9y],B.at("O<nZ>"))
D.bmd=new B.u(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.dkM=w([A.rj,D.bmd,A.rj],x.O)
D.dl2=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.dl6=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eOw=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.eEj=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.eJ5=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.evv=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eHH=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eFP=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eKn=new B.z("Surprise me","")
D.dlG=w([D.eOw,D.eEj,D.eJ5,D.evv,D.eHH,D.eFP,D.eKn],x.L)
D.bep=new B.u(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.q)
D.bqv=new B.u(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.q)
D.dmv=w([A.c,D.bep,D.bqv],x.O)
D.doO=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aJd=new C.l5(0,"heritageGold")
D.bkC=new B.u(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.q)
D.hwj=w([D.bkC,Aa.agP,A.az],x.O)
D.dNY=new C.jA("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aJd,4294570461,4284234270,4292128567,D.k1)
D.aJe=new C.l5(1,"heritageCrimson")
D.bcD=new B.u(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.q)
D.biM=new B.u(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.q)
D.bqi=new B.u(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.q)
D.hvX=w([D.bcD,D.biM,D.bqi],x.O)
D.dNR=new C.jA("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aJe,4294635750,4285213214,4292912216,D.k1)
D.doT=w([D.a6N,D.a6L,D.dNY,D.dNR,D.a6G,D.a6J],x.h)
D.dTO=new C.rL(1,"circuit")
D.dUg=new C.mk("neural","Neural Link","Robotic",D.dTO,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dTN=new C.rL(0,"grid")
D.dUd=new C.mk("signal","Signal Grid","Robotic",D.dTN,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dTT=new C.rL(2,"hexes")
D.dTZ=new C.mk("core","Core Protocol","Robotic",D.dTT,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aJB=new C.rL(11,"diagonal")
D.dU9=new C.mk("steel","Steel Tech","Robotic",D.aJB,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aJC=new C.rL(3,"rings")
D.dTY=new C.mk("vault","Vault Gold","Robotic",D.aJC,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dTR=new C.rL(13,"leaves")
D.dU0=new C.mk("forest","Forest Morning","Nature",D.dTR,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aJD=new C.rL(5,"waves")
D.dU7=new C.mk("ocean","Ocean Calm","Nature",D.aJD,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dTU=new C.rL(6,"sunset")
D.dUc=new C.mk("sunset","Sunset Glow","Nature",D.dTU,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dTV=new C.rL(7,"mountains")
D.dU_=new C.mk("mountain","Mountain Air","Nature",D.dTV,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dTW=new C.rL(8,"stars")
D.dU6=new C.mk("night","Night Sky","Nature",D.dTW,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a75=new C.rL(4,"orbs")
D.dU4=new C.mk("aurora","Aurora","Nature",D.a75,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dUe=new C.mk("sand","Sand Dune","Nature",D.aJD,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dTX=new C.rL(9,"rays")
D.dU3=new C.mk("golden","Golden Hour","Warm",D.dTX,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dU1=new C.mk("royal","Royal Purple","Warm",D.aJB,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dU2=new C.mk("rose","Rose Petal","Warm",D.a75,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dTQ=new C.rL(12,"blocks")
D.dU5=new C.mk("electric","Electric Blue","Bold",D.dTQ,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dUf=new C.mk("mint","Fresh Mint","Bold",D.a75,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dTS=new C.rL(14,"minimal")
D.dUb=new C.mk("white","Clean White","Clean",D.dTS,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dTP=new C.rL(10,"frame")
D.dU8=new C.mk("midnight","Midnight Gold","Clean",D.dTP,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dUa=new C.mk("community","Community Green","Clean",D.aJC,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a5k=w([D.dUg,D.dUd,D.dTZ,D.dU9,D.dTY,D.dU0,D.dU7,D.dUc,D.dU_,D.dU6,D.dU4,D.dUe,D.dU3,D.dU1,D.dU2,D.dU5,D.dUf,D.dUb,D.dU8,D.dUa],B.at("O<mk>"))
D.dpf=w([D.Bu,A.tO,A.hX,A.c3],x.O)
D.dpx=w([D.ahM,D.jt],x.O)
D.dpH=w(["pdf","docx","txt","md"],x.s)
D.eYq=new B.b7(-3,150,34)
D.eYr=new B.b7(-3,214,62)
D.eYs=new B.b7(-3,288,62)
D.dqz=w([D.eYq,D.eYr,D.eYs],B.at("O<+(K,K,K)>"))
D.dr4=w(["rays","bokeh","aurora","spotlight"],x.s)
D.drL=w(["Write","Design","Print & fold"],x.s)
D.k2=new C.v2(2,"triangle")
D.DC=new C.v2(3,"arrow")
D.fD=new C.v2(4,"line")
D.k3=new C.v2(5,"parallelogram")
D.drO=w([D.bi,D.eT,D.k2,D.DC,D.fD,D.k3,D.lm],x.m)
D.ewZ=new B.z(240,96)
D.ezL=new B.z(560,46)
D.drV=w([D.ewZ,D.ezL],x.G)
D.hwu=new C.xV(0,"classic")
D.dPO=new C.nV("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aJd,4294570461,4282000405,4284234270)
D.dQ_=new C.nV("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aJe,4294635750,4281999378,4285213214)
D.dPP=new C.nV("elegant_navy","Umoja Mzuri",y.s,D.a7_,4294967035,4279378237,4290283019)
D.dQ1=new C.nV("elegant_gold","Umoja wa Dhahabu",y.Q,D.aJm,4294966515,4281016592,4289102906)
D.dQ3=new C.nV("kente_sunset","Kente ya Jua",y.H,D.aJf,4294964964,4282000405,4279983648)
D.dPM=new C.nV("indigo_mudcloth","Nguo ya Indigo",y.n,D.aJg,4294439140,4279903102,4279903102)
D.dPR=new C.nV("adinkra_royal","Muhuri wa Adinkra",y.z,D.aJh,4294965484,4285218591,4287322667)
D.dPW=new C.nV("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aJi,4294244340,4279196764,4279196764)
D.dPY=new C.nV("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aJj,4294505710,4279970378,4291058750)
D.hwv=new C.xV(1,"ringsNdoa")
D.dPQ=new C.nV("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.t0,4294966259,4279378237,4291404327)
D.hwx=new C.xV(2,"coupleCards")
D.dQ0=new C.nV("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.t0,4294966259,4279378237,4291404327)
D.hwy=new C.xV(3,"kuhoweshaForm")
D.dPX=new C.nV("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.Dw,4294966519,4279378237,4291404327)
D.hwz=new C.xV(4,"mahariPande")
D.dPN=new C.nV("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.t0,4294966259,4279904068,4291404327)
D.hwA=new C.xV(5,"familiaMti")
D.dQ2=new C.nV("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aJk,4294966776,4280241466,4291404327)
D.hwB=new C.xV(6,"ndoaSafi")
D.dPU=new C.nV("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.Dw,4294966519,4279378237,4291404327)
D.hwC=new C.xV(7,"peteWide")
D.dPT=new C.nV("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.t0,4294966259,4282001936,4291404327)
D.hwD=new C.xV(8,"muhuriCrest")
D.dPS=new C.nV("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.t0,4294966259,4279378237,4291404327)
D.hwE=new C.xV(9,"fomuWazi")
D.dPV=new C.nV("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.Dw,4294966519,4279904068,4291404327)
D.hww=new C.xV(10,"upendoOrnate")
D.dPZ=new C.nV("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aJl,4294965493,4286200650,4291404327)
D.S_=w([D.dPO,D.dQ_,D.dPP,D.dQ1,D.dQ3,D.dPM,D.dPR,D.dPW,D.dPY,D.dPQ,D.dQ0,D.dPX,D.dPN,D.dQ2,D.dPU,D.dPT,D.dPS,D.dPV,D.dPZ],B.at("O<nV>"))
D.DA=new C.as5(0,"landscape169")
D.oF=new C.as5(1,"portrait916")
D.dsH=w([D.DA,D.oF],B.at("O<as5>"))
D.aBW=w([A.hX,A.bL,A.cL,A.ik,A.c],x.O)
D.uR=w([A.c3,A.im],x.O)
D.ew_=new B.z(1000,"M")
D.eBe=new B.z(900,"CM")
D.ezF=new B.z(500,"D")
D.exV=new B.z(400,"CD")
D.ew0=new B.z(100,"C")
D.eBf=new B.z(90,"XC")
D.ezG=new B.z(50,"L")
D.exW=new B.z(40,"XL")
D.ew6=new B.z(10,"X")
D.eBr=new B.z(9,"IX")
D.ezX=new B.z(5,"V")
D.ezq=new B.z(4,"IV")
D.ewC=new B.z(1,"I")
D.dtr=w([D.ew_,D.eBe,D.ezF,D.exV,D.ew0,D.eBf,D.ezG,D.exW,D.ew6,D.eBr,D.ezX,D.ezq,D.ewC],x.ek)
D.eZz=new B.cy(["open",A.iY,"Open & write","Keep writing this book"])
D.f__=new B.cy(["print",A.uC,"Print as a book","Fold and staple it"])
D.dtC=w([D.eZz,D.f__],B.at("O<+(n,a0,n,n)>"))
D.duk=w([D.a77,D.mW,D.J1,D.T8,D.dh,D.T7],x.i)
D.ePf=new B.z(-1,"Small")
D.evL=new B.z(0,"Normal")
D.ewA=new B.z(1,"Big")
D.exf=new B.z(2,"Huge")
D.duU=w([D.ePf,D.evL,D.ewA,D.exf],x.ek)
D.dvk=w([49,65,89,38,83,89],x.t)
D.dvq=w([A.tO,A.hX,A.c3],x.O)
D.dvT=w([D.dh,D.mW,D.v_,D.a77,D.J1,D.T8],x.i)
D.aHe=new B.dp([0,D.MW,8,D.ajl,12,D.ajm],B.at("dp<G,a4k>"))
D.efm={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bq8=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.q)
D.cXu=w([A.bL,D.bq8],x.O)
D.diq=w([A.b_,A.bl],x.O)
D.dcO=w([A.c_,A.aJ,A.bt],x.O)
D.dtD=w([A.cq,A.bs],x.O)
D.d4W=w([A.b8,A.f6],x.O)
D.dfE=w([A.b7,A.fd],x.O)
D.bip=new B.u(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.q)
D.deV=w([D.bip,A.p3],x.O)
D.d92=w([A.hd,A.xZ],x.O)
D.d4J=w([A.bv,A.cf],x.O)
D.dyx=new B.bu(D.efm,[D.cXu,O.as7,D.diq,D.dcO,D.dtD,D.d4W,D.dfE,D.deV,D.d92,D.d4J],B.at("bu<n,ai<u>>"))
D.eeC={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a5Y=new B.bu(D.eeC,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.at("bu<n,n>"))
D.a64=new B.bu(A.hT,[],B.at("bu<G,+icon3d,picture(n?,n?)>"))
D.dCT=new F.Nl(30,null)
D.dI7=new F.mK("Chapter 1","","","")
D.dst=w([D.dI7],x.B)
D.dIb=new F.rB("My Book","","",D.dst,E.aIx)
D.dI9=new F.uT("starry",null,null,null,null,"","","")
D.dIc=new F.rB("Dream Big","","",E.a4Z,D.dI9)
D.dIa=new F.uT("story",null,null,null,null,"","","")
D.dId=new F.rB("Little Lion","","",E.a4Z,D.dIa)
D.dI8=new F.uT("vintage",null,null,null,null,"","","")
D.dIe=new F.rB("Our Story","","",E.a4Z,D.dI8)
D.dLc=new C.ET("","NGMY","","")
D.dSr=new C.zR("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.Y,"","","")
D.e9n=new C.b2B(null,null,null,null)
D.eb5=new C.asa(null)
D.ebg=new C.asE(0,"smaller")
D.ebh=new C.asE(1,"bigger")
D.aJS=new C.asE(2,"fit")
D.eiQ=new B.t(3,6)
D.ej9=new B.t(4,8)
D.enk=new B.D(E.akd,U.aeq,null)
D.eno=new B.D(A.a_8,A.lY,null)
D.bQ8=new B.ae(A.kN,16,A.bU,null,null,null)
D.ens=new B.D(A.iE,D.bQ8,null)
D.bc1=new B.fl(2.2,null,null,null,null,A.c,null,null,null,null)
D.enE=new B.D(A.GD,D.bc1,null)
D.c_E=new B.ae(A.cx,16,A.aC,null,null,null)
D.enI=new B.D(A.ev,D.c_E,null)
D.fGW=new B.y("Play",null,A.nN,null,null,null,null,null,null,null,null,null)
D.diH=w([V.aqB,A.tf,D.fGW],x.p)
D.f3C=new B.ca(A.aM,A.e,A.P,A.m,null,A.p,null,0,D.diH,null)
D.enL=new B.D(A.nt,D.f3C,null)
D.bca=new B.fl(2.4,null,null,null,null,null,null,null,null,null)
D.f9z=new B.a4(20,20,D.bca,null)
D.enS=new B.D(A.iE,D.f9z,null)
D.fQi=new B.y("Seconds per slide",null,A.fS,null,null,null,null,null,null,null,null,null)
D.eo1=new B.D(A.bg,D.fQi,null)
D.epm=new C.a99(2,"print")
D.epp=new B.iY(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.er1=new B.hj("/Annot")
D.er3=new B.hj("/URI")
D.fB0=new B.y("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.ety=new B.jC("share",48,D.fB0,null,B.at("jC<n>"))
D.c_x=new B.ae(A.e5,14,A.eG,null,null,null)
D.etH=new B.cN(null,-2,-2,null,null,null,D.c_x,null)
D.cZK=w([H.ahn,A.L],x.O)
D.c6a=new B.a9(A.a5,A.a8,A.x,D.cZK,null,null)
D.b4B=new B.o(null,null,null,null,null,D.c6a,A.n)
D.bvn=new B.l1(D.b4B,A.bh,null,null)
D.etT=new B.cN(0,0,null,0,8,null,D.bvn,null)
D.dnI=w([A.i_,A.mB,A.cd],x.O)
D.eux=new B.c_(A.A,0.5,A.x,null,0,D.dnI,null,null)
D.ex7=new B.z(0.22,A.bl)
D.eBL=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.eDY=new B.z(0.5,A.hw)
D.eNC=new B.z(0.78,A.aW)
D.eZp=new B.cy([A.bq,0.22,0.7,2.6])
D.eZv=new B.cy([A.b8,0.36,1.2,1.3])
D.eZB=new B.cy([A.dH,0.28,0.2,0.4])
D.eZH=new B.cy([A.cw,0.05,0.3,0.35])
D.eZN=new B.cy([A.bv,0.28,0.9,0])
D.eZV=new B.cy([A.aD,-0.25,-0.15,0.45])
D.f_L=new B.cy([A.c_,0.42,1,4.1])
D.f3k=new B.aa7(9)
D.bRf=new B.ae(A.Hz,28,A.bt,null,null,null)
D.fQR=new B.y("NGMY News",null,A.de,null,null,null,null,null,null,null,null,null)
D.bFz=new B.by(1,A.ba,D.fQR,null)
D.dr7=w([D.bRf,A.as,D.bFz],x.p)
D.f3w=new B.ca(A.aM,A.e,A.i,A.m,null,A.p,null,0,D.dr7,null)
D.bRq=new B.ae(A.om,16,A.c,null,null,null)
D.fSr=new B.y("Book",null,A.oN,null,null,null,null,null,null,null,null,null)
D.dvp=w([D.bRq,A.eg,D.fSr],x.p)
D.f3F=new B.ca(A.aM,A.e,A.P,A.m,null,A.p,null,0,D.dvp,null)
D.bY7=new B.ae(A.jB,10,A.c,null,null,null)
D.fEX=new B.y("Pro",null,A.nJ,null,null,null,null,null,null,null,null,null)
D.diM=w([D.bY7,A.qU,D.fEX],x.p)
D.f3J=new B.ca(A.aM,A.e,A.P,A.m,null,A.p,null,0,D.diM,null)
D.fQg=new B.y("Make a newspaper",null,A.Vb,null,null,null,null,null,null,null,null,null)
D.c7m=w([E.a2P,A.ad,D.fQg],x.p)
D.f3K=new B.ca(A.aM,A.e,A.P,A.m,null,A.p,null,0,D.c7m,null)
D.bWB=new B.ae(A.kn,18,A.bL,null,null,null)
D.fH9=new B.y("Ending celebration",null,A.ht,null,null,null,null,null,null,null,null,null)
D.dq7=w([D.bWB,A.bm,D.fH9],x.p)
D.f3N=new B.ca(A.aM,A.e,A.i,A.m,null,A.p,null,0,D.dq7,null)
D.bXU=new B.ae(A.iY,18,A.kh,null,null,null)
D.fkz=new B.F(!0,A.kh,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSK=new B.y("Write",null,D.fkz,null,null,null,null,null,null,null,null,null)
D.d74=w([D.bXU,A.ad,D.fSK],x.p)
D.f3U=new B.ca(A.aM,A.e,A.P,A.m,null,A.p,null,0,D.d74,null)
D.fEV=new B.y("Download picture",null,A.nK,null,null,null,null,null,null,null,null,null)
D.bI2=new B.qD(A.e3,A.A,A.f,D.fEV,null)
D.bId=new B.dr(1,A.cn,D.bI2,null)
D.dja=w([K.aqs,A.ad,D.bId],x.p)
D.f3V=new B.ca(A.aM,A.b9,A.i,A.m,null,A.p,null,0,D.dja,null)
D.bTc=new B.ae(A.Hz,22,A.bt,null,null,null)
D.fOP=new B.y("NGMY NEWS",null,M.a9M,null,null,null,null,null,null,null,null,null)
D.cZ9=w([D.bTc,A.ad,D.fOP],x.p)
D.f43=new B.ca(A.aM,A.e,A.P,A.m,null,A.p,null,0,D.cZ9,null)
D.f4f=new B.pr(!1,!1,null,U.Xd,null,A.c2,null,null,null)
D.a8T=new B.jw([D.co,D.dh,D.v_,D.J0,D.v0,D.aJH],B.at("jw<hI>"))
D.eh7={title:0,quote:1,closing:2,bio:3}
D.f5q=new B.dw(D.eh7,4,x.M)
D.eeW={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.f5t=new B.dw(D.eeW,5,x.M)
D.ego={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a8U=new B.dw(D.ego,8,x.M)
D.efy={Design:0,Transitions:1,Insert:2}
D.f5y=new B.dw(D.efy,3,x.M)
D.hwN=new B.jw([D.a78],B.at("jw<wg>"))
D.efH={float3d:0,drift:1,pulse:2}
D.f5C=new B.dw(D.efH,3,x.M)
D.aRh=new B.jw([D.IY,D.IZ,D.J_],B.at("jw<mO>"))
D.eeU={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aRk=new B.dw(D.eeU,14,x.M)
D.hwO=new B.dw(A.hT,0,B.at("dw<wg>"))
D.efE={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Ud=new B.dw(D.efE,4,x.M)
D.eeN={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aRn=new B.dw(D.eeN,30,x.M)
D.efN={circle:0,triangle:1,hexagon:2,diamond:3}
D.f62=new B.dw(D.efN,4,x.M)
D.f8s=new B.av(390,844)
D.f9i=new B.a4(20,20,A.LK,null)
D.aSa=new B.a4(null,2.5,null,null)
D.f9s=new B.a4(18,18,A.LK,null)
D.bXY=new B.ae(A.jj,19,A.c,null,null,null)
D.f9E=new B.a4(38,38,D.bXY,null)
D.bW9=new B.ae(A.za,22,A.c,null,null,null)
D.f9G=new B.a4(40,40,D.bW9,null)
D.faf=new B.hK(2,10,10,1.15,null)
D.aSh=new B.hK(2,16,14,0.62,null)
D.bDx=new B.P(32,30,32,40)
D.bdF=new B.u(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.bRc=new B.ae(A.qs,56,D.bdF,null,null,null)
D.ain=new B.u(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fmH=new B.F(!0,D.ain,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLJ=new B.y("Your books will live here.",null,D.fmH,null,A.K,null,null,null,null,null,null,null)
D.da0=w([D.bRc,A.W,D.fLJ],x.p)
D.buk=new B.fj(A.ah,A.e,A.i,A.m,null,A.p,null,0,D.da0,null)
D.eo_=new B.D(D.bDx,D.buk,null)
D.faB=new B.mp(D.eo_,null)
D.fLG=new B.y("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.faT=new B.b2(D.fLG,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fJM=new B.y("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.faU=new B.b2(D.fJM,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fOT=new B.y("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.fb2=new B.b2(D.fOT,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fPr=new B.y("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.fbh=new B.b2(D.fPr,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fIn=new B.y("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.fbu=new B.b2(D.fIn,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fWM=new B.y("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.fbN=new B.b2(D.fWM,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fTM=new B.y("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.fbY=new B.b2(D.fTM,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fPA=new B.y("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fcH=new B.b2(D.fPA,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fD5=new B.y("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.fcY=new B.b2(D.fD5,null,null,null,null,null,null,null,A.iN,null,null,null,null,A.qd,!1,null,null,null,A.t,null)
D.fF4=new B.y("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.fdf=new B.b2(D.fF4,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fLl=new B.y("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.fdh=new B.b2(D.fLl,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fL1=new B.y("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.fdi=new B.b2(D.fL1,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fRI=new B.y("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.fdj=new B.b2(D.fRI,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fza=new B.y("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.fds=new B.b2(D.fza,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fGf=new B.y("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.fdP=new B.b2(D.fGf,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fVq=new B.y("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.fdR=new B.b2(D.fVq,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fUX=new B.y("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.fdV=new B.b2(D.fUX,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fy4=new B.y("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fdX=new B.b2(D.fy4,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fQM=new B.y("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fe5=new B.b2(D.fQM,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fUw=new B.y("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.fek=new B.b2(D.fUw,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fUn=new B.y("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.fem=new B.b2(D.fUn,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fxW=new B.y("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.fes=new B.b2(D.fxW,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fC3=new B.y("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.feU=new B.b2(D.fC3,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fTz=new B.y("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.ff5=new B.b2(D.fTz,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fBQ=new B.y("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.ffk=new B.b2(D.fBQ,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.blS=new B.u(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.q)
D.cXK=w([A.ik,A.p3,D.blS,D.aeV,A.ik],x.O)
D.ffI=new B.h0(A.A,0,6.283185307179586,A.x,D.cXK,null,null)
D.d6c=w([A.bL,A.c3,A.hX,D.Bu,A.bL],x.O)
D.aSQ=new B.h0(A.A,0,6.283185307179586,A.x,D.d6c,null,null)
D.dl0=w([A.c_,A.bq,A.b8,A.be,A.bt,A.c_],x.O)
D.ffN=new B.h0(A.A,0,6.283185307179586,A.x,D.dl0,null,null)
D.cZZ=w([A.q9,A.p4,A.xX,A.ik,A.q9],x.O)
D.ffO=new B.h0(A.A,0,6.283185307179586,A.x,D.cZZ,null,null)
D.dkV=w([A.aP,A.bM,A.aN,A.al,A.aP],x.O)
D.ffP=new B.h0(A.A,0,6.283185307179586,A.x,D.dkV,null,null)
D.dte=w([A.bv,A.b8,A.bq,A.c_,A.bv],x.O)
D.ffR=new B.h0(A.A,0,6.283185307179586,A.x,D.dte,null,null)
D.bhj=new B.u(1,0,1,0,A.q)
D.bmc=new B.u(1,0,1,1,A.q)
D.bj8=new B.u(1,0,0,1,A.q)
D.bf3=new B.u(1,1,0,1,A.q)
D.dp7=w([A.M0,A.ah2,D.bhj,D.bmc,D.bj8,D.bf3,A.M0],x.O)
D.ffS=new B.h0(A.A,0,6.283185307179586,A.x,D.dp7,null,null)
D.fg6=new C.awQ(2,"immersiveSticky")
D.fg7=new C.awQ(3,"edgeToEdge")
D.fg8=new C.awQ(4,"manual")
D.fiE=new B.F(!0,A.o_,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTo=new B.F(!0,A.eO,null,null,null,null,12.5,A.U,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjd=new B.F(!0,E.nj,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flW=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm5=new B.F(!0,A.bU,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmr=new B.F(!0,A.eG,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnT=new B.F(!0,A.bM,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo3=new B.F(!0,A.jP,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foh=new B.rW(!0,A.Jn,null,null,null,null,A.dx,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.foL=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpt=new B.F(!0,A.jv,null,null,null,null,11.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpR=new B.F(!0,A.aC,null,null,null,null,12.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eps=new B.iY(1,1,0.7568627450980392,0.027450980392156862)
D.fpV=new B.rW(!0,D.eps,null,null,null,null,A.dx,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.aha=new B.u(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.q)
D.aUc=new B.F(!0,D.aha,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq2=new B.F(!0,D.ain,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fq3=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUe=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqH=new B.rW(!0,A.pv,null,null,null,null,A.dx,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqY=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frv=new B.F(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frx=new B.F(!0,D.aha,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Kn=new B.F(!0,A.aC,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs2=new B.F(!0,A.c3,null,null,null,null,11.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsc=new B.F(!0,A.bM,null,null,null,null,14,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsg=new B.F(!0,A.bL,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsx=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.a4w,null,null,null)
D.fsA=new B.F(!0,A.c0,null,null,null,null,null,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsC=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsR=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft2=new B.F(!0,A.du,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftE=new B.F(!0,A.aR,null,null,null,null,null,A.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftO=new B.F(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu3=new B.F(!0,A.ac,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUQ=new B.F(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUS=new B.F(!0,A.bU,null,null,null,null,11.5,A.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.brS=new B.u(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fvT=new B.F(!0,D.brS,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUY=new B.F(!0,E.nj,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwn=new B.F(!0,A.bM,null,null,null,null,11,A.a7,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwq=new B.F(!0,N.lB,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp_=new B.F(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxH=new B.y("NEW",null,D.fp_,null,null,null,null,null,null,null,null,null)
D.fxZ=new B.y("Hati ya Kuhowesha",null,A.fw,null,null,null,null,null,null,null,null,null)
D.fys=new B.y("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fyR=new B.y("Scrollable PDF on this slide",null,A.df,null,null,null,null,null,null,null,null,null)
D.fzB=new B.y("Big quote mark",null,A.jo,null,null,null,null,null,null,null,null,null)
D.fzE=new B.y("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fzQ=new B.y("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fAi=new B.y("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fAk=new B.y("How many slides?",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fAT=new B.y("Transfer",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fkC=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBe=new B.y("Luxury FX",null,D.fkC,null,null,null,null,null,null,null,null,null)
D.fBz=new B.y("Font",null,A.tl,null,null,null,null,null,null,null,null,null)
D.fBK=new B.y("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fBR=new B.y("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fvp=new B.F(!0,A.bM,null,null,null,null,12,A.U,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC0=new B.y("Example  GA847",null,D.fvp,null,null,null,null,null,null,null,null,null)
D.fCq=new B.y("Design shapes",null,A.jo,null,null,null,null,null,null,null,null,null)
D.fCB=new B.y("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fCG=new B.y("Non-stop (loop)",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fCU=new B.y("Hati ya Kuhoweya",null,A.fw,null,null,null,null,null,null,null,null,null)
D.fDc=new B.y("Photo studio",null,A.fx,null,null,null,null,null,null,null,null,null)
D.fDG=new B.y("Add your picture",null,A.k8,null,null,null,null,null,null,null,null,null)
D.foi=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDH=new B.y("Enter document code",null,D.foi,null,A.K,null,null,null,null,null,null,null)
D.fDI=new B.y("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fDN=new B.y("English",null,null,null,null,null,null,null,null,null,null,null)
D.flK=new B.F(!0,E.nj,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fE7=new B.y("Delete this book?",null,D.flK,null,A.K,null,null,null,null,null,null,null)
D.fqw=new B.F(!0,E.nj,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF6=new B.y("Your library",null,D.fqw,null,null,null,null,null,null,null,null,null)
D.fFc=new B.y("Delete",null,A.aU5,null,null,null,null,null,null,null,null,null)
D.fFf=new B.y("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Ax.Kj,null,null,null,null,null,null,null,null,null)
D.fFr=new B.y("Element flies in",null,A.aUi,null,null,null,null,null,null,null,null,null)
D.Vm=new B.y("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fFQ=new B.y("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fGc=new B.y("Cancel",null,E.aUs,null,null,null,null,null,null,null,null,null)
D.fGe=new B.y("The lines and circles that come with the design",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fuc=new B.F(!0,A.hj,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGF=new B.y("DOCUMENT CODE",null,D.fuc,null,null,null,null,null,null,null,null,null)
D.fHv=new B.y("Quotes",null,G.aap,null,null,null,null,null,null,null,null,null)
D.fnF=new B.F(!0,N.lB,null,null,null,null,null,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHE=new B.y("Add a picture",null,D.fnF,null,null,null,null,null,null,null,null,null)
D.fHM=new B.y("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.V_,null,A.K,null,null,null,null,null,null,null)
D.fHQ=new B.y("Look & feel",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fHV=new B.y("Rings",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fI0=new B.y("W",null,A.tl,null,null,null,null,null,null,null,null,null)
D.fIa=new B.y("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fIt=new B.y("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.V8,null,A.K,null,null,null,null,null,null,null)
D.fIv=new B.y("Write your book",null,A.cz,null,null,null,null,null,null,null,null,null)
D.fJf=new B.y("Add page",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fJx=new B.y("Malipo ya Awamu ya Mahari",null,A.fw,null,null,null,null,null,null,null,null,null)
D.fo7=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJN=new B.y("Create with AI",null,D.fo7,null,A.K,null,null,null,null,null,null,null)
D.fKg=new B.y("Apply look",null,A.ht,null,null,null,null,null,null,null,null,null)
D.foQ=new B.F(!0,A.ep,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL3=new B.y("Type your presentation below",null,D.foQ,null,A.K,null,null,null,null,null,null,null)
D.fL6=new B.y("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,M.aV1,null,A.K,null,null,null,null,null,null,null)
D.fL8=new B.y("Keep it",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fjw=new B.F(!0,A.cp,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLf=new B.y("Done",null,D.fjw,null,null,null,null,null,null,null,null,null)
D.fLA=new B.y("Delete",null,A.nL,null,null,null,null,null,null,null,null,null)
D.fLL=new B.y("Hati ya Kiapo cha Uongozi",null,A.fw,null,null,null,null,null,null,null,null,null)
D.fmZ=new B.F(!0,A.aR,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMG=new B.y("Write your idea in any language \u2014 the AI makes the slides.",null,D.fmZ,null,A.K,null,null,null,null,null,null,null)
D.fN4=new B.y("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fNa=new B.y("Layout",null,A.Vd,null,null,null,null,null,null,null,null,null)
D.fNO=new B.y("Print",null,A.cz,null,null,null,null,null,null,null,null,null)
D.fNX=new B.y("X",null,A.tl,null,null,null,null,null,null,null,null,null)
D.fOx=new B.y("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,A2.El,null,null,null,null,null,null,null,null,null)
D.fP5=new B.y("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fPj=new B.y("Hati ya Kuhowa",null,A.fw,null,null,null,null,null,null,null,null,null)
D.fPl=new B.y("Choose a class template",null,A.fw,null,null,null,null,null,null,null,null,null)
D.fPn=new B.y("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fPu=new B.y("Download the newspaper picture",null,A.cz,null,null,null,null,null,null,null,null,null)
D.fPH=new B.y("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fPO=new B.y("Done",null,A.aUP,null,null,null,null,null,null,null,null,null)
D.fPZ=new B.y("Ending celebration",null,A.de,null,null,null,null,null,null,null,null,null)
D.fQ_=new B.y("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fQe=new B.y("Plays after your last slide. Tap one to watch it and change its words or logo.",null,A2.tk,null,null,null,null,null,null,null,null,null)
D.fRe=new B.y("Export presentation",null,A.df,null,null,null,null,null,null,null,null,null)
D.fRf=new B.y("What would you like to do?",null,D.aUc,null,null,null,null,null,null,null,null,null)
D.fRk=new B.y("Delete",null,A.cz,null,null,null,null,null,null,null,null,null)
D.fRR=new B.y("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fRV=new B.y("Hati (Documents)",null,A.fw,null,null,null,null,null,null,null,null,null)
D.fS7=new B.y("Done",null,A.lr,null,null,null,null,null,null,null,null,null)
D.fve=new B.F(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSb=new B.y("Delete presentation?",null,D.fve,null,A.K,null,null,null,null,null,null,null)
D.fSv=new B.y("After the last slide it starts again from the first",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fSH=new B.y("\ud83c\udf33",null,A.Ek,null,A.K,null,null,null,null,null,null,null)
D.fSZ=new B.y("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fT5=new B.y("Transfer document",null,A.nM,null,null,null,null,null,null,null,null,null)
D.fTg=new B.y("Add to the slides",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fTD=new B.y("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fTS=new B.y("Make a book",null,I.aTH,null,null,null,null,null,null,null,null,null)
D.fTW=new B.y("Books",null,A.cz,null,null,null,null,null,null,null,null,null)
D.fny=new B.F(!0,A.al,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTY=new B.y("Keep this page open until it finishes.",null,D.fny,null,null,null,null,null,null,null,null,null)
D.fU_=new B.y("Making your video",null,A.de,null,null,null,null,null,null,null,null,null)
D.fU4=new B.y("LANGUAGE",null,X.tm,null,null,null,null,null,null,null,null,null)
D.fUb=new B.y("Use this ending",null,A.cz,null,null,null,null,null,null,null,null,null)
D.fUj=new B.y("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fUl=new B.y("Upload a different logo",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fUC=new B.y("Delete from the database?",null,A.k8,null,null,null,null,null,null,null,null,null)
D.fUD=new B.y("H",null,A.tl,null,null,null,null,null,null,null,null,null)
D.fV2=new B.y("NGMY Quotes",null,A.de,null,null,null,null,null,null,null,null,null)
D.fVw=new B.y("Cover",null,D.aUY,null,null,null,null,null,null,null,null,null)
D.fVA=new B.y("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fVB=new B.y("Each page becomes its own slide you can present",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fVY=new B.y("Y",null,A.tl,null,null,null,null,null,null,null,null,null)
D.fW9=new B.y("Crop the picture",null,A.lr,null,null,null,null,null,null,null,null,null)
D.fWg=new B.y("Edit text",null,A.Kh,null,null,null,null,null,null,null,null,null)
D.fYA=B.dW("a8W")
D.Ey=new C.ayb(0,"none")
D.aYC=new C.ayb(1,"zipCrypto")
D.aYD=new C.ayb(2,"aes")
D.hk_=new F.PS("","",null)
D.hl5=new C.bdT(null)
D.hmf=new C.a_a(null)
D.hp9=new C.adQ(null)
D.hpb=new C.aFt(null)
D.hrX=new C.a0q(null)
D.hsc=new C.a0X(null)
D.hsP=new C.bvM(null)})();(function staticFields(){$.hoF=null
$.hoG=null
$.hoH=null
$.hoI=null
$.h6j=B.vq("_lastQuoRemDigits")
$.h6k=B.vq("_lastQuoRemUsed")
$.ayy=B.vq("_lastRemUsed")
$.h6l=B.vq("_lastRem_nsh")
$.qp=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a7K=B.U(x.N,x.I)
$.h3J=!1
$.htA=B.U(B.at("l5"),x.N)
$.htN=B.U(B.at("l5"),x.E)
$.hrJ=!1
$.bBt="q"
$.QU=0
$.D_=B.U(x.N,B.at("ai<zS>"))
$.hs5=!1
$.h8_=!1
$.hyy=null
$.i2f=B.U(x.N,B.at("aB<n?>"))
$.KN=""
$.j9=0
$.hlt=function(){var w=x.N
return B.U(w,w)}()
$.hls=B.U(x.N,x.R)
$.h8k=!1
$.agA=B.U(x.N,x.E)
$.h99=0
$.bm8=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"irX","Dl",()=>C.bbn(0))
w($,"irV","a3b",()=>C.bbn(1))
w($,"irW","hCj",()=>C.bbn(2))
w($,"irU","hd4",()=>$.a3b().vn(0))
w($,"irS","hCh",()=>C.bbn(1e4))
w($,"irT","hCi",()=>B.Ez(8))
w($,"inI","hAj",()=>B.Ez(0))
w($,"inQ","hAn",()=>B.Ez(0))
w($,"inP","hAm",()=>B.c1s(0))
w($,"ivI","hEl",()=>{var v,u,t=x.N
t=B.U(t,t)
for(v=D.a5Y.gdW(D.a5Y),v=v.gaf(v);v.C();){u=v.gS(v)
t.n(0,u.b,u.a)}return t})
w($,"iw8","bG0",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.n7(new C.fP4(),v,"biz_plan_blue","Business Plan",B.a([B.b1(u),B.b1(t)],h)),C.n7(new C.fP5(),v,"exec_summary","Executive",B.a([B.b1(s),B.b1(t)],h)),C.n7(new C.fP6(),v,"teal_corporate","Teal Corp",B.a([B.b1(r),B.b1(4279310375)],h)),C.n7(new C.fPh(),q,"geometric_overlap","Geometric",B.a([B.b1(4279203438),B.b1(u)],h)),C.n7(new C.fPm(),p,"midnight_cyan","Midnight Cyan",B.a([B.b1(o),B.b1(n)],h)),C.n7(new C.fPn(),q,"diagonal_hero","Diagonal Hero",B.a([B.b1(m),B.b1(l)],h)),C.n7(new C.fPo(),v,"swot_grid","SWOT Grid",B.a([B.b1(u),B.b1(4278556265)],h)),C.n7(new C.fPp(),v,"layered_chevrons","Chevrons",B.a([B.b1(4280172719),B.b1(k)],h)),C.n7(new C.fPq(),q,"split_triangle","Split Panel",B.a([B.b1(s),B.b1(t)],h)),C.n7(new C.fPr(),v,"corporate_navy","Navy Pro",B.a([B.b1(4278982953),B.b1(4282090230)],h)),C.n7(new C.fPs(),p,"cyan_slash","Cyan Slash",B.a([B.b1(o),B.b1(4278630100)],h)),C.n7(new C.fP7(),p,"crimson_impact","Crimson",B.a([B.b1(4282714634),B.b1(4292617766)],h)),C.n7(new C.fP8(),q,"ocean_waves","Ocean Waves",B.a([B.b1(4278413729),B.b1(4286436348)],h)),C.n7(new C.fP9(),p,"mono_geometric","Mono Geo",B.a([B.b1(o),B.b1(n)],h)),C.n7(new C.fPa(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b1(4280031511),B.b1(4293571336)],h)),C.n7(new C.fPb(),q,"hex_infographic","Hex Stack",B.a([B.b1(r),B.b1(4284410580)],h)),C.n7(new C.fPc(),q,"photo_banner","Photo Banner",B.a([B.b1(m),B.b1(4281908728)],h)),C.n7(new C.fPd(),v,"process_steps","Process",B.a([B.b1(s),B.b1(k)],h)),C.n7(new C.fPe(),"Minimal","grid_modern","Grid Modern",B.a([B.b1(l),B.b1(t)],h)),C.n7(new C.fPf(),"Luxury","platinum_frame","Platinum",B.a([B.b1(4282865001),B.b1(4293060848)],h)),C.n7(new C.fPg(),v,"agenda_cards","Agenda Cards",B.a([B.b1(u),B.b1(4292602622)],h)),C.n7(new C.fPi(),q,"headline_orange","Headline Orange",B.a([B.b1(j),B.b1(i)],h)),C.n7(new C.fPj(),q,"infographic_teal","Infographic",B.a([B.b1(r),B.b1(j)],h)),C.n7(new C.fPk(),q,"content_year","Year Feature",B.a([B.b1(j),B.b1(t)],h)),C.n7(new C.fPl(),q,"photo_cta","Photo CTA",B.a([B.b1(m),B.b1(i)],h))],B.at("O<F1>"))})
w($,"ivL","hEn",()=>B.ag("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["vmG8mytfeIXlC9hL6bP1aPSoOmA="]=a.current})($__dart_deferred_initializers__);