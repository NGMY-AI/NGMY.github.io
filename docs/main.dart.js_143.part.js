((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ai,A6,Aj,Ak,U,A7,Al,Am,C={
u2(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
h49(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
Kb(d){var w
if(d===0)return $.Dp()
if(d===1)return $.a3f()
if(d===2)return $.hzW()
if(Math.abs(d)<4294967296)return C.bbj(A.o.N(d))
w=C.hUL(d)
return w},
bbj(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.u2(4,w)
return new C.o4(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.u2(1,w)
return new C.o4(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aD(d,16)
v=C.u2(2,w)
return new C.o4(v===0?!1:s,w,v)}v=A.o.ao(A.o.gakQ(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.ao(d,65536)}v=C.u2(v,w)
return new C.o4(v===0?!1:s,w,v)},
hUL(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.W(B.dL("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.Dp()
w=$.hzV()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.lg(A.aG.gaR(w))
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
q=new C.o4(!1,r,4)
if(s<0)p=q.mu(0,-s)
else p=s>0?q.dV(0,s):q
return p},
h4a(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hms(d,e,f,g){var w,v,u,t,s,r=A.o.ao(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dV(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fL(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dV(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hmn(d,e,f,g){var w,v,u,t,s=A.o.ao(f,16)
if(A.o.F(f,16)===0)return C.h4a(d,e,s,g)
w=e+s+1
C.hms(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hUO(d,e,f,g){var w,v,u,t,s=A.o.ao(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dV(1,r)-1,o=A.o.fL(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dV(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fL(u,r)}w&2&&B.aj(g)
g[n]=o},
cLa(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hUM(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
bbk(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aD(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aD(v,16)&1)}},
hmt(d,e,f,g,h,i){var w,v,u,t,s,r
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
hUN(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.eb((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
o4:function o4(d,e,f){this.a=d
this.b=e
this.c=f},
cLb:function cLb(){},
cLc:function cLc(){},
cLd:function cLd(d,e){this.a=d
this.b=e},
cLe:function cLe(d){this.a=d},
aSA:function aSA(d,e){this.a=d
this.b=e},
hcf(d,e,f){var w=new C.So(d,A.o.ao(Date.now(),1000),e)
w.Q=f
return w},
So:function So(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a4o:function a4o(d,e){this.a=d
this.b=e},
bJe:function bJe(d){this.a=d
this.c=this.b=0},
hD9(){return new C.bHz()},
bHz:function bHz(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cDk:function cDk(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hUt(d,e,f){var w,v,u,t,s
if(d.gan(d))return new Uint8Array(0)
w=new Uint8Array(B.cl(d.gd_c(d)))
v=f*2+2
u=C.hk6(C.hk8(),64)
t=new C.cmk(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cml(e,1000,v)
s=new Uint8Array(v)
return A.aG.ds(s,0,t.cNh(w,0,s,0))},
cDi:function cDi(d,e){this.c=d
this.d=e},
ay9:function ay9(d,e){this.a=d
this.b=e},
cDl:function cDl(d,e,f,g){var _=this
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
ba0:function ba0(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cDj:function cDj(){this.a=$},
hlT(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hCT(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bG9:function bG9(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
h9U(d,e){e&=31
return(d&$.ql[e])<<e>>>0},
nx(d,e){e&=31
return(d>>>e|C.h9U(d,32-e))>>>0},
hk7(d){var w,v=new C.atB()
if(B.iK(d))v.aLe(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hk8(){var w=C.hk7(0),v=new Uint8Array(4),u=x.S
u=new C.cmm(w,v,A.EL,5,B.c1(5,0,!1,u),B.c1(80,0,!1,u))
u.kf(0)
return u},
hk6(d,e){var w=new C.cmi(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cmh:function cmh(){},
cml:function cml(d,e,f){this.a=d
this.b=e
this.c=f},
cmf:function cmf(){},
atA:function atA(d){this.a=d},
cmk:function cmk(d){this.a=$
this.b=d
this.c=$},
cmg:function cmg(){},
cme:function cme(){},
atB:function atB(){this.b=this.a=$},
cmj:function cmj(){},
cmm:function cmm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cmi:function cmi(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cmd:function cmd(){},
cmc:function cmc(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bRe:function bRe(){},
bRf:function bRf(d){this.a=d},
hXK(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
bbz:function bbz(){},
cwN:function cwN(){},
bSh:function bSh(d,e){this.a=d
this.b=!1
this.c=e},
bSi:function bSi(){},
i5Q(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
awM(d){var w=0,v=B.j(x.H),u
var $async$awM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.fdy?2:4
break
case 2:w=5
return B.b(A.kq.h0("SystemChrome.setEnabledSystemUIMode",d.a5(),u),$async$awM)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kq.h0("SystemChrome.setEnabledSystemUIOverlays",C.i5Q(null),u),$async$awM)
case 6:case 3:return B.h(null,v)}})
return B.i($async$awM,v)},
awP:function awP(d,e){this.a=d
this.b=e},
a9_:function a9_(d){this.a=d},
i8z(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fA5(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
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
fA5:function fA5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aoh(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$aoh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.ahs("ngmy_menu_lib_v1_zzslides_index",A.bK),$async$aoh)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.r(t,"items")
if(x.j.b(s)){t=J.dc(s,x.f)
t=B.cG(t,new C.c2c(),t.$ti.k("L.E"),x.P)
r=B.C(t,B.a7(t).k("L.E"))}else r=B.a([],x.d)
A.d.aW(r,new C.c2d())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoh,v)},
aoj(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aoj=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aoh(),$async$aoj)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.U(t,x.P)
for(r=J.aW(j);r.C();){q=r.gT(r)
p=J.r(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.V(Date.now(),0,!1).a8().ae()
p=m.a
k=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nw("ngmy_menu_lib_v1_zzslide_"+B.aN(p,k,""),B.G(["deck",m.ag(),"savedAt",l],t,q),null),$async$aoj)
case 7:if(!f){w=5
break}s.n(0,p,B.G(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.M)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bc<2>")
s=B.C(new B.bc(s,r),r.k("L.E"))
w=10
return B.b(B.nw("ngmy_menu_lib_v1_zzslides_index",B.G(["items",s,"savedAt",new B.V(Date.now(),0,!1).a8().ae()],t,q),null),$async$aoj)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoj,v)},
c2e(d){return C.hIJ(d)},
hIJ(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c2e=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.ahs("ngmy_menu_lib_v1_zzslide_"+B.aN(d,o,""),A.hY),$async$c2e)
case 7:r=f
o=r.b
q=o==null?null:J.r(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.Wv(B.a2(q,x.N,x.z))
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
return B.i($async$c2e,v)},
aoi(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aoi=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aoh(),$async$aoi)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nA(r,new C.c2f(d))
w=4
return B.b(B.nw("ngmy_menu_lib_v1_zzslides_index",B.G(["items",r,"savedAt",new B.V(Date.now(),0,!1).a8().ae()],x.N,x.z),null),$async$aoi)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aQA("ngmy_menu_lib_v1_zzslide_"+B.aN(d,s,"")),$async$aoi)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoi,v)},
c2c:function c2c(){},
c2d:function c2d(){},
c2f:function c2f(d){this.a=d},
iiF(d,e,f){return B.bV(A.L,null,new C.fQC(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fQC:function fQC(d,e,f){this.a=d
this.b=e
this.c=f},
a1w:function a1w(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aKl:function aKl(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
fck:function fck(d,e){this.a=d
this.b=e},
fco:function fco(d){this.a=d},
fcp:function fcp(d){this.a=d},
fcq:function fcq(d,e,f){this.a=d
this.b=e
this.c=f},
fcl:function fcl(d){this.a=d},
fcm:function fcm(d){this.a=d},
fcn:function fcn(d,e){this.a=d
this.b=e},
fcf:function fcf(d){this.a=d},
fcd:function fcd(d){this.a=d},
fce:function fce(d){this.a=d},
fcg:function fcg(d){this.a=d},
fch:function fch(d){this.a=d},
fcu:function fcu(d,e){this.a=d
this.b=e},
fct:function fct(d,e){this.a=d
this.b=e},
fcj:function fcj(d,e,f){this.a=d
this.b=e
this.c=f},
fci:function fci(d,e,f){this.a=d
this.b=e
this.c=f},
fcr:function fcr(d,e){this.a=d
this.b=e},
fcs:function fcs(d,e){this.a=d
this.b=e},
fcx:function fcx(d){this.a=d},
fcy:function fcy(d,e){this.a=d
this.b=e},
fcw:function fcw(d,e){this.a=d
this.b=e},
fcv:function fcv(){},
hoT(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.X.aM(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.dc(w,x.f)
v=B.cG(v,new C.fjU(),v.$ti.k("L.E"),x.ea)
u=B.a7(v).k("Z<L.E>")
v=B.C(new B.Z(v,new C.fjV(),u),u.k("L.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a2t(d){return C.i9P(d)},
i9P(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a2t=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.U(x.N,x.ea)
m=new C.fCX(n)
t=4
j=m
i=C
w=7
return B.b(B.a32("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a2t)
case 7:j.$1(i.hoT(f))
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
return B.b(B.az(),$async$a2t)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hoT(B.aS(J.r(r.a,"ngmy_books_v1_"+p))))
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
o=p.k("Z<L.E>")
j=B
i=B
h=new B.bc(n,p)
g=C
w=13
return B.b(C.fk2(d),$async$a2t)
case 13:p=j.C(new i.Z(h,new g.fCV(f),o),o.k("L.E"))
A.d.aW(p,new C.fCW())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a2t,v)},
ai2(d,e){return C.iik(d,e)},
iik(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ai2=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fQ6(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.X.ap(n,null)
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
fk2(d){return C.hZ7(d)},
hZ7(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fk2=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$fk2)
case 7:r=f
q=r.ty("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Y
q=B.k3(q,B.T(q).c)
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
return B.i($async$fk2,v)},
agS(d,e){return C.i8s(d,e)},
i8s(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$agS=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$agS)
case 6:s=g
r=B.aX(x.N)
q=s.ty("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h6(r,q)
J.cc(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a7(q).k("cs.E"))
w=7
return B.b(s.au("StringList","ngmy_books_deleted_v1_"+r,q),$async$agS)
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
return B.b(C.a2t(d),$async$agS)
case 8:n=g
J.nA(n,new C.fzK(e))
w=9
return B.b(C.ai2(d,n),$async$agS)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$agS,v)},
iiK(d,e){return B.a4(d,!1).cd(B.dZ(new C.fQY(e),!0,null,x.H))},
hUQ(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d_(w.d,new C.cMy())},
ow:function ow(d,e,f){this.a=d
this.b=e
this.c=f},
fjU:function fjU(){},
fjV:function fjV(){},
fCX:function fCX(d){this.a=d},
fCV:function fCV(d){this.a=d},
fCW:function fCW(){},
fQ6:function fQ6(){},
fzK:function fzK(d){this.a=d},
fQY:function fQY(d){this.a=d},
Zc:function Zc(d,e){this.c=d
this.a=e},
ayI:function ayI(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cMy:function cMy(){},
cMA:function cMA(d,e){this.a=d
this.b=e},
cMD:function cMD(d){this.a=d},
cME:function cME(d){this.a=d},
cMC:function cMC(){},
cMF:function cMF(d,e){this.a=d
this.b=e},
cMB:function cMB(d){this.a=d},
cMG:function cMG(){},
cMz:function cMz(d,e){this.a=d
this.b=e},
cMH:function cMH(){},
cMu:function cMu(d){this.a=d},
cMs:function cMs(d){this.a=d},
cMt:function cMt(d){this.a=d},
cMv:function cMv(d,e){this.a=d
this.b=e},
cMr:function cMr(d){this.a=d},
cMq:function cMq(d){this.a=d},
cMo:function cMo(d,e){this.a=d
this.b=e},
cMp:function cMp(d){this.a=d},
cMx:function cMx(){},
cMw:function cMw(d){this.a=d},
cMn:function cMn(d,e){this.a=d
this.b=e},
cMm:function cMm(d,e){this.a=d
this.b=e},
cMl:function cMl(d,e){this.a=d
this.b=e},
cMI:function cMI(d){this.a=d},
Za:function Za(d,e,f){this.c=d
this.d=e
this.a=f},
aG6:function aG6(d,e,f){this.a=d
this.b=e
this.c=f},
ayE:function ayE(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cLP:function cLP(d){this.a=d},
cLO:function cLO(d){this.a=d},
cLR:function cLR(d,e,f){this.a=d
this.b=e
this.c=f},
cLZ:function cLZ(){},
cM_:function cM_(d){this.a=d},
cLS:function cLS(d,e,f){this.a=d
this.b=e
this.c=f},
cLQ:function cLQ(d,e){this.a=d
this.b=e},
cLU:function cLU(d,e){this.a=d
this.b=e},
cLV:function cLV(d,e){this.a=d
this.b=e},
cLW:function cLW(d,e){this.a=d
this.b=e},
cLT:function cLT(d){this.a=d},
cLY:function cLY(d){this.a=d},
cLX:function cLX(d,e){this.a=d
this.b=e},
cM4:function cM4(d){this.a=d},
cM0:function cM0(d,e){this.a=d
this.b=e},
cM1:function cM1(d,e){this.a=d
this.b=e},
cM2:function cM2(d,e){this.a=d
this.b=e},
cM3:function cM3(d,e){this.a=d
this.b=e},
ayG:function ayG(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
icc(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ec(v,x.cK).bN(new C.fHu(),x.H).eQ(new C.fHv())}}else if(s)C.hqo()}catch(t){}},
hqo(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ec(v,x.cK).eQ(new C.fo9())}catch(u){}},
icf(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fHu:function fHu(){},
fHv:function fHv(){},
fo9:function fo9(){},
hv3(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.ea(v,w,"").split(":"))},
hv0(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.lj)return null
return A.a.b7(w,14)},
h8C(d){var w
if(d.b!==D.lj)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b7(w,21)},
icF(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hv4(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
icA(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aN(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aN(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.U(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.lb(0,f)
t=x.N
u=B.cG(u,new C.fIt(),B.a7(u).k("L.E"),t)
s=B.C(u,B.a7(u).k("L.E"))
if(s.length===0)return B.U(t,t)
for(u=v.lb(0,f),u=new B.Ka(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.S5(A.a.ar(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.S5(A.a.b7(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cC(w)
if(l==null)return B.U(t,t)
k=B.U(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
icy(d,e){var w,v,u,t,s,r=B.a7(e).k("cv<1>"),q=B.C(new B.cv(e,r),r.k("L.E"))
A.d.aW(q,new C.fIs())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.M)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.c8(s,"]"))continue
w=B.aRz(w,u,s,0)}return w},
icC(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a5P:$.hBX(),s=x.N,r=B.U(s,s)
for(s=t.gdS(t),s=s.gaf(s);s.C();){w=s.gT(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.c8(u,"]"))continue
r.n(0,w.b,u)}return r},
hv1(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fkW(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.M)(t),++r){q=t[r]
if(C.hv3(q)===e)return q}return null},
icD(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b7(v,u)
return A.d.gI(D.Hy).a},
icE(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.aeE(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.aeE(0,0,0)
v=C.fkW(b6,b0)
u=C.fkW(b5,b0)
t=0
if(v!=null&&u!=null){s=C.icC(b2,C.icA(C.hv1(b2),v.r))
if(s.a!==0){u.r=C.icy(C.hv1(b4),s)
t=s.a}}r=B.aX(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.M)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.M)(o),++m){l=C.hv3(o[m])
if(l==null||l==="utangulizi")continue
r.M(0,l)}for(q=B.eo(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fkW(b6,n)
i=C.fkW(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a0(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gI(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.M)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.M)(o),++m){d=o[m]
a0=C.h8C(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.M)(a1),++a7){a8=a1[a7]
if(C.hv0(a8)===a0||C.h8C(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.Rt(a1,new C.fIz(a0),!0)
a1=f.z
a6=Date.now()
a9=$.j3
$.j3=a9+1
A.d.M(a1,new C.eO(""+1000*a6+"_"+a9,D.lj,a2,a3,a4,a5,"",24,A.a7,A.bp,A.aF,4279310375,A.bi,d.at,D.bh,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cm,0,"","","","","",!1,0));++e}b5.f=new B.V(Date.now(),0,!1)
return new B.aeE(k,t,e)},
icz(d){var w=C.icD(d)
if(d.w==="hati_kuhowa")return C.huo("",w)
return C.hun("",w)},
fIt:function fIt(){},
fIs:function fIs(){},
fIz:function fIz(d){this.a=d},
hq6(){var w=new B.V(Date.now(),0,!1),v=new C.fnc()
return B.w(v.$1(B.bW(w)))+"/"+B.w(v.$1(B.bM(w)))+"/"+B.bC(w)},
h8L(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fJr(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.lj&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hvi(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fJr(d)
w=B.bj(u)
if(w==null)return!C.fJr(d)
return new B.V(Date.now(),0,!1).a8().d1(w.a8().bS(18e9))},
idk(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.V(Date.now(),0,!1).a8().ae()},
hMM(d){return A.a.i(d).toLowerCase()},
aqz(d){return C.hMO(d)},
hMO(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$aqz=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$aqz)
case 7:r=f
p=r.ty("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.Y:p
o=q
o=new B.N(o,C.igW(),B.T(o).k("N<1,n>")).c0(0,new C.cdv())
o=B.dg(o,o.$ti.k("L.E"))
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
return B.i($async$aqz,v)},
aqy(d,e){return C.hMN(d,e)},
hMN(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aqy=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aqz(d),$async$aqy)
case 3:r=g
if(!J.cc(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$aqy)
case 8:q=g
w=9
return B.b(q.au("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qu(r)),$async$aqy)
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
return B.i($async$aqy,v)},
aqA(d,e){return C.hMP(d,e)},
hMP(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aqA=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aqz(d),$async$aqA)
case 3:r=g
if(!J.hz(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$aqA)
case 8:q=g
w=9
return B.b(q.au("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qu(r)),$async$aqA)
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
return B.i($async$aqA,v)},
VT(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$VT=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.h1w&&!a5){w=1
break}t=4
w=7
return B.b(B.az(),$async$VT)
case 7:r=a7
q=B.aS(J.r(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.X.aM(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.U(e,x.I)
for(d=J.jZ(p),d=d.gaf(d),a0=x.z;d.C();){n=d.gT(d)
if(f.b(n.b))J.aI(o,J.k(n.a),C.Wv(B.a2(f.a(n.b),e,a0)))}$.a7N=o}}t=2
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
return B.b(B.c8(),$async$VT)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.uj("civic_hati_kiapo_uongozi",null,A.ep),$async$VT)
case 17:l=a7
w=l!=null&&x.f.b(J.r(l,"byState"))?18:19
break
case 18:o=x.N
k=B.U(o,x.I)
for(f=x.f,e=J.jZ(f.a(J.r(l,"byState"))),e=e.gaf(e),d=x.z;e.C();){j=e.gT(e)
if(!f.b(j.b))continue
J.aI(k,J.k(j.a),C.Wv(B.a2(f.a(j.b),o,d)))}for(o=k,o=new B.cH(o,B.a7(o).k("cH<1,2>")).gaf(0);o.C();){f=o.d
f.toString
i=f
h=$.a7N.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbp())f=d===e.gbp()&&f.b<e.gcD()
else f=!0
f=!f}else f=!0
if(f)$.a7N.n(0,i.a,i.b)}w=20
return B.b(C.aqB(),$async$VT)
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
case 16:case 9:$.h1w=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$VT,v)},
aqB(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$aqB=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aqB)
case 6:s=e
r=B.U(x.N,x.P)
for(o=$.a7N,o=new B.cH(o,B.a7(o).k("cH<1,2>")).gaf(0);o.C();){n=o.d
n.toString
q=n
J.aI(r,q.a,q.b.ag())}w=7
return B.b(s.au("String","ngmy_civic_hati_kiapo_uongozi_v1",A.X.ap(r,null)),$async$aqB)
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
return B.i($async$aqB,v)},
b0C(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$b0C=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.VT(!1),$async$b0C)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a7N.h(0,t)
r=s==null?null:s.hK()
if(r==null){u=null
w=1
break}u=C.bDF(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b0C,v)},
a7O(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a7O=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.V(Date.now(),0,!1)
o=a1.hK()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.M)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a7N.n(0,d,o)
$.h1w=!0
w=3
return B.b(C.aqB(),$async$a7O)
case 3:w=4
return B.b(B.c8(),$async$a7O)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.U(e,x.P)
for(n=$.a7N,n=new B.cH(n,B.a7(n).k("cH<1,2>")).gaf(0);n.C();){l=n.d
l.toString
q=l
J.aI(r,q.a,q.b.ag())}w=9
return B.b(B.nw("civic_hati_kiapo_uongozi",B.G(["byState",r,"updatedAt",new B.V(Date.now(),0,!1).a8().ae()],e,x.z),null),$async$a7O)
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
return B.i($async$a7O,v)},
aqC(d){var w=0,v=B.j(x.T),u,t,s
var $async$aqC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hV().a6j(A.eL),$async$aqC)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fk(),$async$aqC)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b0B(t,d),$async$aqC)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aqC,v)},
b0B(d,e){return C.hMQ(d,e)},
hMQ(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b0B=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c8(),$async$b0B)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.af("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aN(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.w(r)+"/"+1000*Date.now()+".mp4"
n=$.f_().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.ip("media")
w=8
return B.b(p.xe(q,new Uint8Array(B.cl(d)),D.bGQ),$async$b0B)
case 8:n=p.CQ(q)
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
return B.i($async$b0B,v)},
L_(d,e,f,g,h,i,j,k,l,m,n){var w=C.cF()
return C.es(e,!1,f,A.aF,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bh,4280172719,2,d,0,0,"",D.cm,D.cU,l,m,n)},
fmE(d,e,f,g,h,i,j,k,l){var w=C.cF()
return C.es(A.bi,!1,4279310375,A.aF,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.fa,j,k,l)},
h5I(d,e,f,g,h,i,j,k){var w=C.cF(),v=A.k.E(i*0.0017,0.02,0.06)
return C.es(h,!1,j,A.aF,"marriage_field_"+d+":"+A.k.ac(g,3),4280640491,i,A.cE,A.Q,"",v,w,null,"","",0,!1,"",0,D.bh,4280172719,2,k,0,0,"",D.cm,D.cU,g,e,f)},
fmc(d,e,f,g){return C.fmE(0,0.002,D.fD,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
h5J(d,e,f,g,h,i,j,k){var w=C.cF()
return C.es(A.qM,!1,j,A.aF,"marriage_field_"+d+":"+A.k.ac(g,3),4280640491,i,A.bp,A.a7,"",h,w,null,"","",0,!1,"",0,D.bh,4280172719,2,k,0,0,"",D.cm,D.cU,g,e,f)},
hq5(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.ea(v,w,"").split(":"))},
bDF(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.M)(t),++n){m=t[n]
l=C.hq5(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.lj&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hK()}h=C.h8g(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.C3(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gI(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.M)(w),++n){m=w[n]
l=C.hq5(m)
if(l!=null&&r.aj(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.lj&&A.a.c8(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bs(a1.z,new C.fHs(a2))}else A.d.bs(a1.z,new C.fHt())
A.d.M(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fJr(a0))a0.ax=a6.f.a8().ae()
return a0},
h8g(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fKe(D.a6P),l=C.cF(),k=x.u,j=B.a([C.es(A.bi,!1,s,A.aF,"marriage_locked_bg",r,24,A.bp,A.a7,"",1,C.cF(),m,"","",0,!1,"",0,D.bh,q,2,"",0,0,"",D.cm,D.lM,1,0,0)],k),i=B.a([],k)
i.push(C.L_("NGMY",A.K,236069181,52,A.bp,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.L_("TAREHE:",A.bi,o,16,A.bp,A.H,A.k.E(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.h5I("tarehe",0.8059999999999999,0.026,0.18,A.bi,16,p,C.hq6()))
i.push(C.fmc(0.8099999999999999,0.026+A.k.E(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.L_("HATI YA KIAPO CHA UONGOZI",A.K,p,26,A.bp,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.L_("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.K,o,11,A.cE,A.a7,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fmE(0,0.002,D.fD,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.h5J("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.h5J("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.h5J("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fmE(268435456,0.175,D.bh,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.L_("VIDEO YA KIAPO",A.bi,o,10,A.bp,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.es(A.bi,!1,s,A.aF,"__kiapo_video__",r,24,A.bp,A.a7,"",0.131,C.cF(),t,"","",0,!1,"",0,D.bh,q,2,"",0,0,"",D.cm,D.lM,0.77,0.115,0.492))
i.push(C.L_("Rais Anayeapa:",A.bi,p,15,A.bp,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.L_("Jina:",A.bi,p,13,A.bp,A.Q,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.h5I("rais_jina",0.195,0.6930000000000001,0.62,A.bi,13,p,""))
i.push(C.fmc(0.195,0.7130000000000001,0.62,n))
i.push(C.L_("Sahihi:",A.bi,p,13,A.bp,A.Q,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.es(A.bi,!1,s,A.aF,"marriage_sign_rais",0,24,A.bp,A.a7,"",0.07,C.cF(),t,"","",0,!1,"",0,D.bh,0,2,"",0,0,"",D.cm,D.fa,0.38,0.21500000000000002,0.73))
i.push(C.fmc(0.21500000000000002,0.795,0.38,n))
i.push(C.L_("Tarehe:",A.bi,p,13,A.bp,A.Q,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.h5I("rais_tarehe",0.745,0.74,0.2,A.bi,12,p,C.hq6()))
i.push(C.fmc(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fmE(0,0.032,D.bh,o,1,"state_box",0.72,0.14,0.875),C.L_("EMO 'YA M'MBONDO "+w,A.K,p,14,A.bp,A.Q,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rH(4294967035,t,0,0,j,l,D.qC,"","",u,D.dh)
return C.C3(t,t,t,t,D.ox,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cF(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
ah3(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ah3=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.K(x.q).f.U(D.f8a)
w=1
break}w=3
return B.b(C.VT(!0),$async$ah3)
case 3:w=4
return B.b(C.b0C(p),$async$ah3)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hvi(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bV(D.biY,null,new C.fCi(p),f,!0,!0,!1,A.lN,!1,!1,x.N),$async$ah3)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cj(null,null,!0,null,new C.fCj(),f,null,!0,!0,x.y),$async$ah3)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.h8g(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.K(x.q).f
q.U(B.b3(null,null,null,null,null,A.t,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.h8g(p))
case 1:return B.h(u,v)}})
return B.i($async$ah3,v)},
fnc:function fnc(){},
cdv:function cdv(){},
fHs:function fHs(d){this.a=d},
fHt:function fHt(){},
fCi:function fCi(d){this.a=d},
fCg:function fCg(d){this.a=d},
fCh:function fCh(d){this.a=d},
fCj:function fCj(){},
fCe:function fCe(d){this.a=d},
fCf:function fCf(d){this.a=d},
ar6:function ar6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEV:function aEV(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
egG:function egG(d){this.a=d},
egE:function egE(d){this.a=d},
egF:function egF(d){this.a=d},
egH:function egH(d){this.a=d},
egI:function egI(d){this.a=d},
wP(d,e,f,g,h,i,j,k,l,m,n){var w=C.cF()
return C.es(e,!1,f,A.aF,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bp,h,"",i,w,null,"","",0,!1,"",j,D.bh,4280172719,2,d,0,0,"",D.cm,D.cU,l,m,n)},
hpJ(d,e,f){var w=4291404327
return B.a([C.qk(0,f,D.eU,w,2,"ring_l",f,d-f*0.42,e),C.qk(0,f,D.eU,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
flD(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qk(4294967288,f,D.eU,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qk(h,s,D.eU,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qk(h,f*0.46,D.eU,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qk(d,e,f,g,h,i,j,k,l){var w=C.cF()
return C.es(A.bi,!1,4279310375,A.aF,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.fa,j,k,l)},
flC(d,e,f,g,h,i,j,k,l){var w=C.cF(),v=A.k.E(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.es(h,!1,k,A.aF,i?u+A.k.ac(g,3)+":"+A.o.ac(j,1):u+A.k.ac(g,3),4280640491,j,A.cE,A.Q,"",v,w,null,"","",0,!1,"",0,D.bh,4280172719,2,l,0,0,"",D.cm,D.cU,g,e,f)},
bB4(d,e,f,g){return C.qk(0,0.002,D.fD,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hpI(d,e,f,g,h){var w=A.k.E(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qk(0,0.036,D.bh,h,1.4,"banner_box_"+d,w,v,e),C.wP(d,A.K,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hv2(){var w=new B.V(Date.now(),0,!1),v=new C.fIy()
return B.w(v.$1(B.bW(w)))+"/"+B.w(v.$1(B.bM(w)))+"/"+B.bC(w)},
hpK(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wP(r+".",A.bi,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.flC("witness_"+d+"_"+r+"_name",q,g,p,A.bi,!0,16,j,"[Jina la Shahidi]"),C.bB4(q,g+A.k.E(0.0272,0.02,0.06),p,w),C.wP("Sahihi:",A.bi,j,15,A.a7,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.es(A.bi,!1,4279310375,A.aF,"marriage_sign_"+d+"_witness_"+r,0,24,A.bp,A.a7,"",0.05,C.cF(),null,"","",0,!1,"",0,D.bh,0,2,"",0,0,"",D.cm,D.fa,s,t,g-0.004),C.bB4(t,g+0.044,s,w)],x.u)},
ahu(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.dnl,D.cql,D.dfp,D.dhk],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.M)(s),++w)for(v=A.d.gaf(s[w]);v.C();){u=v.gT(0)
if(u.a===d)return u}return null},
h4Y(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fKe(d.d),v=B.a([C.es(A.bi,!1,4279310375,A.aF,"marriage_locked_bg",4280640491,24,A.bp,A.a7,"",1,C.cF(),w,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cm,D.lM,1,0,0)],x.u)
A.d.v(v,C.i0F(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
i0F(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wP("NGMY",A.K,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hpJ(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hpJ(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.flD(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.flD(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wP("\ud83c\udf33",A.K,4279898632,22,A.a7,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.qk(0,0.062,D.eU,b1,1.6,"crest_o",0.11,0.445,0.012),C.qk(0,0.046,D.eU,b1,1,"crest_i",0.084,0.458,0.02),C.wP("MUHURI",A.K,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.qk(0,0.002,D.fD,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qk(b9,0.016,D.lk,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qk(0,0.002,D.fD,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wP("TAREHE:",A.bi,c0,20,A.H,A.k.E(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.flC("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bi,!1,21,b9,C.hv2()),C.bB4(0.814,0.026+A.k.E(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wP(d2,A.K,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qk(c0,0.0026,D.bh,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qk(c3.e,0.138,D.bh,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cF()
c2.push(C.es(A.bi,!1,b9,A.aF,"marriage_field_utangulizi:"+A.k.ac(0.82,3),b2,19,A.bp,A.cy,"",0.128,s,a9,"","",0,!1,"",0,D.bh,b3,2,c5,0,0,"",D.cm,D.cU,0.82,0.09,t))
t+=c4
if(c8){r=A.k.E(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qk(0,0.036,D.bh,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cF()
A.d.v(c2,B.a([s,C.es(A.K,!1,c0,A.aF,"marriage_field_nimetowe_label:"+A.k.ac(r,3),b2,30,A.bp,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bh,b3,2,c7,0,0,"",D.cm,D.cU,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hpI(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wP(c9,A.bi,b9,d0,A.Q,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.E(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.E(0.037399999999999996,0.02,0.06):A.k.E(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.flC("mahari_"+p,0.132,k,m,A.bi,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.j3
$.j3=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.j3
$.j3=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eO(""+1000*i+"_"+h,D.cU,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bp,A.aF,c0,A.bi,a9,D.bh,b2,b3,2,0,!1,s,0,D.cm,0,"","","","","",!1,0),j,new C.eO(""+1000*f+"_"+e,D.fa,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a7,A.bp,A.aF,b6,A.bi,a9,D.fD,0,b5,0.8,0,!1,g,0,D.cm,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.j3
$.j3=p+1
i=Date.now()
h=$.j3
$.j3=h+1
g=Date.now()
f=$.j3
$.j3=f+1
e=Date.now()
a3=$.j3
$.j3=a3+1
A.d.v(d,B.a([new C.eO(""+1000*s+"_"+p,D.cU,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bp,A.aF,b7,A.dW,a9,D.bh,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cm,0,"","","","","",!1,0),new C.eO(""+1000*i+"_"+h,D.fa,a1,a2,0.046,0.025875,"",24,A.a7,A.bp,A.aF,b6,A.bi,a9,D.bh,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cm,0,"","","","","",!1,0),new C.eO(""+1000*g+"_"+f,D.cU,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bp,A.aF,b7,A.K,a9,D.bh,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cm,0,"","","","","",!1,0),new C.eO(""+1000*e+"_"+a3,D.fa,a0,k,a1+0.046-a0,l,"",24,A.a7,A.bp,A.aF,b6,A.bi,a9,D.bh,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cm,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hpI("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a6E||w===D.a6G||w===D.a6D||w===D.a6F){w=t-0.008
A.d.v(c2,C.flD(0.21,w,0.044,!0,b0))
A.d.v(c2,C.flD(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.qk(0,a4,D.bh,c0,1.3,"wit_table_border",0.82,0.09,t),C.qk(c0,a4,D.bh,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qk(0,0.0022,D.fD,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wP("UPANDE WA MKE",A.K,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wP("UPANDE WA MUME",A.K,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hpK("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hpK("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.qk(0,0.11,D.bh,c0,1.2,"mw_box",0.82,0.09,t),C.wP("MWANDISHI",A.bi,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wP("Jina:",A.bi,b9,15,A.a7,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.flC("mwandishi_jina",0.215,w,0.3116,A.bi,!0,15,b9,""),C.bB4(0.215,p,0.3116,b5),C.wP("Sahihi:",A.bi,b9,15,A.a7,0.028,0,"mw_sl",0.09,0.5,w),C.es(A.bi,!1,b6,A.aF,"marriage_sign_mwandishi",0,24,A.bp,A.a7,"",0.044,C.cF(),a9,"","",0,!1,"",0,D.bh,0,2,"",0,0,"",D.cm,D.fa,0.3161999999999999,0.5738,s-0.044),C.bB4(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.qk(0,0.032,D.bh,c0,1,"state_box",0.7,0.15,a8),C.wP("EMO 'YA M'MBONDO "+a7,A.K,b9,26,A.Q,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
icB(d){var w,v,u,t=null,s=B.b1(d.f),r=B.b1(d.r),q=C.h8V(d.d),p=new C.fIu(s),o=new C.fIv(s),n=d.z,m=n===D.a6E||n===D.a6G||n===D.a6D||n===D.a6F,l=n===D.aHZ||n===D.a6H||n===D.aI_,k=B.bT(0,B.fG(q,A.A,t,t,A.cc,A.bU,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a6H?26:16
i.push(new C.fIx().$1$size(w))}if(n===D.aI0)i.push(D.fQd)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.iG,A.i,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
i.push(A.am)
n=B.J(r,A.r,1.1)
w=B.m(4)
i.push(B.p(t,B.x(B.a([p.$0(),D.aRj,p.$1$w(0.9),D.aRj,p.$1$w(0.75)],j),A.m,t,A.e,A.i,0,A.p),A.f,t,t,new B.o(D.bdx,t,n,w,t,t,A.n),t,t,t,t,A.alo,t,t,t))
i.push(A.am)
i.push(new C.fIw(r).$1("NIMETOWE"))
i.push(A.fG)
v=J.dY(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.N9,new B.ce(A.aM,A.e,A.i,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.dc,new B.bz(1,A.bb,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b1)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
return new B.an(A.a_,t,A.b0,A.t,B.a([k,new B.D(A.ajZ,B.x(i,A.ak,t,A.e,A.i,0,A.p),t)],j),t)},
hun(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.ahu(e,t)
if(r==null)r=A.d.gI(D.Hy)
w=C.cF()
v=C.rH(r.e,t,0,0,C.h4Y(r,0.165,y.O,D.dhW,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.qC,"","",s,D.dh)
w=C.cF()
u=A.a.i(d)
if(u.length===0)u=t
return C.C3(t,t,t,t,D.ox,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
huo(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.ahu(e,t)
if(r==null)r=A.d.gI(D.Hy)
w=C.cF()
v=C.rH(r.e,t,0,0,C.h4Y(r,0.165,y.f,D.dds,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.qC,"","",s,D.dh)
w=C.cF()
u=A.a.i(d)
if(u.length===0)u=t
return C.C3(t,t,t,t,D.ox,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bF0(d,e,f){var w=0,v=B.j(x.T),u
var $async$bF0=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bV(A.L,null,new C.fUq(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bF0,v)},
ah4(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ah4=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("Z<1>")
p=B.C(new B.Z(i,new C.fCm(),q),q.k("L.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(D.Mk,null,new C.fCn(p),d,!0,!0,!1,A.lN,!1,!1,x.N),$async$ah4)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hK())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bF0(d,"Hati ya Kuhowa",D.Hy),$async$ah4)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.LF(d,"Tafuta jimbo\u2026","",A.kk,"Chagua jimbo"),$async$ah4)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hun(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ah4,v)},
ah5(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ah5=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("Z<1>")
p=B.C(new B.Z(i,new C.fCq(),q),q.k("L.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(D.Mk,null,new C.fCr(p),d,!0,!0,!1,A.lN,!1,!1,x.N),$async$ah5)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hK())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bF0(d,"Hati ya Kuhoweya",D.Hy),$async$ah5)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.LF(d,"Tafuta jimbo\u2026","",A.kk,"Chagua jimbo"),$async$ah5)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.huo(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ah5,v)},
ah6(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$ah6=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.T(i).k("Z<1>")
m=B.C(new B.Z(i,new C.fCu(),n),n.k("L.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(D.Mk,null,new C.fCv(m),d,!0,!0,!1,A.lN,!1,!1,x.N),$async$ah6)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(m).hK())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bF0(d,"Malipo ya Awamu ya Mahari",D.Ru),$async$ah6)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.LF(d,"Tafuta jimbo\u2026","",A.kk,"Chagua jimbo"),$async$ah6)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.ahu(s,D.Ru)
if(q==null)q=A.d.gI(D.Ru)
n=C.cF()
p=C.rH(q.e,null,0,0,C.h4Y(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.d84,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.qC,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dh)
n=C.cF()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.C3(null,null,null,null,D.ox,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ah6,v)},
xR:function xR(d,e){this.a=d
this.b=e},
jt:function jt(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fIy:function fIy(){},
fIu:function fIu(d){this.a=d},
fIw:function fIw(d){this.a=d},
fIx:function fIx(){},
fIv:function fIv(d){this.a=d},
fUq:function fUq(d,e){this.a=d
this.b=e},
adN:function adN(d,e,f){this.c=d
this.d=e
this.a=f},
e3f:function e3f(d,e,f){this.a=d
this.b=e
this.c=f},
e3e:function e3e(d,e){this.a=d
this.b=e},
e3d:function e3d(d,e){this.a=d
this.b=e},
adb:function adb(d,e,f){this.c=d
this.d=e
this.a=f},
fCm:function fCm(){},
fCn:function fCn(d){this.a=d},
fCk:function fCk(d){this.a=d},
fCl:function fCl(d){this.a=d},
fCq:function fCq(){},
fCr:function fCr(d){this.a=d},
fCo:function fCo(d){this.a=d},
fCp:function fCp(d){this.a=d},
fCu:function fCu(){},
fCv:function fCv(d){this.a=d},
fCs:function fCs(d){this.a=d},
fCt:function fCt(d){this.a=d},
L2(d,e,f,g,h,i,j,k,l,m){var w=C.cF()
return C.es(e,!1,f,A.aF,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bp,h,"",i,w,null,"","",0,!1,"",0,D.bh,4280172719,2,d,0,0,"",D.cm,D.cU,k,l,m)},
D6(d,e,f,g,h,i,j,k,l){var w=C.cF()
return C.es(A.bi,!1,4279310375,A.aF,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.fa,j,k,l)},
hqr(d,e,f){return C.D6(0,0.002,D.fD,4293056712,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.022)},
bBe(d,e,f,g,h){return B.a([C.D6(4294967288,0.032,D.bh,4291404327,1.15,"pill_"+d,g,f,e),C.L2(d,A.K,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
h5N(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.w(e)
return B.a([C.D6(0,0.002,D.fD,g,1,"orn_l_"+t,u,d,v),C.D6(h,0.016,D.lk,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.D6(0,0.002,D.fD,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a1T(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.L2(d,A.bi,j,i,A.Q,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cF()
return B.a([v,C.es(A.K,!1,j,A.aF,"marriage_field_"+e+":"+A.k.ac(t,3),4280640491,i,A.cE,A.Q,"",0.02,s,null,"","",0,!1,"",0,D.bh,4280172719,2,k,0,0,"",D.cm,D.cU,t,u,g-0.002),C.hqr(u,g+0.018,t)],x.u)},
hqs(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.D6(h,0.028,D.bh,h,0,"chv_"+d,g,e,f),C.D6(w,0.024,D.lk,w,0,"chv_l_"+d,0.024,e-0.008,v),C.D6(w,0.024,D.lk,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.L2(d,A.K,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bBd(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.L2("Sahihi:",A.bi,h,10,A.Q,0.02,"is_"+d,0.12,e,f),C.es(A.bi,!1,4279310375,A.aF,"marriage_sign_"+d,0,24,A.bp,A.a7,"",0.032,C.cF(),null,"","",0,!1,"",0,D.bh,0,2,"",0,0,"",D.cm,D.fa,v,w,f-0.006),C.hqr(w,f+0.016,v)],x.u)},
h8W(d){var w,v
for(w=0;w<19;++w){v=D.RJ[w]
if(v.a===d)return v}return null},
ieU(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.ahu(A.a.b7(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.ahu(A.a.b7(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b7(k,18)
w=C.ahu(u,D.Ru)
v=w==null?l:w.d
if(v==null){w=C.ahu(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.h8W(A.a.b7(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hrg.a7(0)
$.hrt.a7(0)
t=C.fKe(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.M)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
ha1(d){var w=0,v=B.j(x.T),u
var $async$ha1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bV(A.L,null,new C.fVT(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ha1,v)},
xU:function xU(d,e){this.a=d
this.b=e},
nP:function nP(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bkI:function bkI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fVT:function fVT(){},
adQ:function adQ(d){this.a=d},
el2:function el2(d,e){this.a=d
this.b=e},
el1:function el1(d){this.a=d},
el0:function el0(d,e){this.a=d
this.b=e},
afv:function afv(d,e,f){this.c=d
this.d=e
this.a=f},
h8V(d){return $.hrt.c4(0,d,new C.fKg(d))},
fKe(d){return $.hrg.c4(0,d,new C.fKf(d))},
fD(d){return B.h_5(d>>>16&255,d>>>8&255,d&255,255)},
i3N(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hsB(4294570461,4293910718,4284234270,u)
case 1:return C.hsB(4294635750,4293975240,t,4292912216)
case 2:w=C.fka(s,4294505966,r)
C.bAZ(w,14,16,p)
C.kF(w,8,9,464,836,u,1.2)
C.D2(w,2,2,1,1,u,10)
C.D2(w,478,2,-1,1,u,10)
C.D2(w,2,852,1,-1,u,10)
C.D2(w,478,852,-1,-1,u,10)
return w
case 3:return C.fka(4294966515,4294373082,4289102906)
case 4:return C.hZo(C.fka(4294376440,4293653998,4290287194))
case 5:w=C.fka(4294965238,4294437098,4288444980)
C.bAZ(w,14,16,4283043359)
C.kF(w,6,7,468,840,u,1)
C.kF(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hq(q,q,A.c8,0,A.e0,854,q,0,3,q,A.c8,480,!1)
C.yM(v,n,4294175448)
C.t1(v,n)
C.kF(v,24,24,432,806,4286209070,1)
C.a1G(v,12,12,468,12,o,3,20)
C.a1G(v,12,842,468,842,o,3,20)
C.a1G(v,12,12,12,842,o,3,20)
C.a1G(v,468,12,468,842,o,3,20)
return v
case 7:return C.hXo(4294440434,4293518297,4280228630,r)
case 8:v=B.hq(q,q,A.c8,0,A.e0,854,q,0,3,q,A.c8,480,!1)
C.yM(v,m,4293911504)
C.t1(v,m)
C.kF(v,28,28,424,798,l,1)
C.ftF(v,28,28,l,k)
C.ftF(v,452,28,l,k)
C.ftF(v,28,826,l,k)
C.ftF(v,452,826,l,k)
return v
case 9:v=B.hq(q,q,A.c8,0,A.e0,854,q,0,3,q,A.c8,480,!1)
C.yM(v,j,4294111986)
C.t1(v,j)
C.kF(v,18,18,444,818,4292401368,0.7)
B.iM(v,!0,C.fD(p),0,13,0,853)
return v
case 10:return C.i0r(i,4294173372)
case 11:return C.i1y(4294439140,4293449662)
case 12:return C.hXg(h,4294239432)
case 13:return C.i1_(4294244340,4293193448)
case 14:return C.i5n(4294505710,4293780694)
case 15:return C.fj6(4294966259,4294439138,o,p,q)
case 16:return C.fj6(4294966776,4294178544,o,g,g)
case 17:return C.fj6(4294965493,4294504170,o,4286200650,q)
case 18:return C.fj6(4294966519,4294373862,o,p,p)
case 19:return C.i_x()
case 20:return C.i_y()
case 21:v=B.hq(q,q,A.c8,0,A.e0,854,q,0,3,q,A.c8,480,!1)
C.yM(v,h,4293976768)
C.t1(v,h)
C.bAZ(v,14,16,p)
B.iM(v,!0,C.fD(u),4,475,4,9)
B.iM(v,!0,C.fD(u),4,475,844,849)
B.iM(v,!0,C.fD(u),4,9,4,849)
B.iM(v,!0,C.fD(u),470,475,4,849)
C.a1G(v,10,12,470,12,u,2,16)
C.a1G(v,10,842,470,842,u,2,16)
C.a1G(v,10,12,10,842,u,2,18)
C.a1G(v,470,12,470,842,u,2,18)
C.D2(v,2,2,1,1,t,10)
C.D2(v,478,2,-1,1,t,10)
C.D2(v,2,852,1,-1,t,10)
C.D2(v,478,852,-1,-1,t,10)
C.kF(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hq(q,q,A.c8,0,A.e0,854,q,0,3,q,A.c8,480,!1)
C.yM(v,s,4294438872)
C.t1(v,s)
C.kF(v,14,16,452,822,o,2.2)
C.kF(v,22,24,436,806,o,1)
C.h77(v,!1,!1,o,p,p,36,14,16)
C.kS(v,240,20,7,o,!0)
C.kS(v,240,834,7,o,!0)
C.kS(v,18,427,7,o,!0)
C.kS(v,462,427,7,o,!0)
return v
case 23:v=B.hq(q,q,A.c8,0,A.e0,854,q,0,3,q,A.c8,480,!1)
C.yM(v,i,4293910712)
C.t1(v,i)
B.iM(v,!0,C.fD(u),0,479,0,20)
B.iM(v,!0,C.fD(u),0,479,834,853)
B.iM(v,!0,C.fD(u),0,20,0,853)
B.iM(v,!0,C.fD(u),460,479,0,853)
B.iM(v,!0,C.fD(f),5,474,5,9)
B.iM(v,!0,C.fD(f),5,474,844,848)
B.iM(v,!0,C.fD(f),5,9,5,848)
B.iM(v,!0,C.fD(f),470,474,5,848)
C.kF(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hq(q,q,A.c8,0,A.e0,854,q,0,3,q,A.c8,480,!1)
C.yM(v,e,4294174404)
C.t1(v,e)
C.bAZ(v,14,16,p)
B.iM(v,!0,C.fD(u),3,476,3,8)
B.iM(v,!0,C.fD(u),3,476,845,850)
B.iM(v,!0,C.fD(u),3,8,3,850)
B.iM(v,!0,C.fD(u),471,476,3,850)
C.kF(v,9,10,462,834,t,1)
C.kF(v,14,16,452,822,u,1.8)
C.kS(v,240,8,4,u,!0)
C.kS(v,240,846,4,u,!0)
C.kS(v,8,427,4,u,!0)
C.kS(v,472,427,4,u,!0)
C.kS(v,8,8,3,t,!0)
C.kS(v,472,8,3,t,!0)
C.kS(v,8,846,3,t,!0)
C.kS(v,472,846,3,t,!0)
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
B.kU(d,!1,A.dg,new B.SJ(s),r,A.d_,1,0,w-1,k,k);++k}},
t1(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.e9()
n.d4(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aq(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aq(v==null?0:v)
v=d.a
s=v==null?o:v.dQ(u,t,o)
if(s==null)s=new B.iq()
v=A.o.E(A.k.N(s.gb3(s))-3,0,255)
r=A.o.E(A.k.N(s.gbc())-3,0,255)
q=A.o.E(A.k.N(s.gb9(s))-2,0,255)
p=d.a
if(p!=null)p.jX(u,t,v,r,q,255)}},
kF(d,e,f,g,h,i,j){var w,v=null,u=C.fD(i),t=e+g
B.kU(d,!0,A.dg,u,v,A.d_,j,e,t,f,f)
w=f+h
B.kU(d,!0,A.dg,u,v,A.d_,j,e,t,w,w)
B.kU(d,!0,A.dg,u,v,A.d_,j,e,e,f,w)
B.kU(d,!0,A.dg,u,v,A.d_,j,t,t,f,w)},
D2(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.E(A.k.V(j*0.72),8,j-2)
B.kU(d,!0,A.dg,C.fD(i),u,A.d_,2,e,e+g*j,f,f)
B.kU(d,!0,A.dg,C.fD(i),u,A.d_,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kU(d,!0,A.dg,C.fD(i),u,A.d_,1,w,e+g*t,v,v)
B.kU(d,!0,A.dg,C.fD(i),u,A.d_,1,w,w,v,f+h*t)},
hsB(d,e,f,g){var w=null,v=B.hq(w,w,A.c8,0,A.e0,854,w,0,3,w,A.c8,480,!1)
C.yM(v,d,e)
C.t1(v,d)
B.iM(v,!0,C.fD(f),0,479,0,28)
B.iM(v,!0,C.fD(f),0,479,826,853)
B.iM(v,!0,C.fD(f),0,28,0,853)
B.iM(v,!0,C.fD(f),452,479,0,853)
C.kF(v,5,5,470,844,g,1.1)
C.kF(v,28,28,424,798,g,1.6)
C.D2(v,2,2,1,1,g,11)
C.D2(v,478,2,-1,1,g,11)
C.D2(v,2,852,1,-1,g,11)
C.D2(v,478,852,-1,-1,g,11)
return v},
fka(d,e,f){var w=null,v=B.hq(w,w,A.c8,0,A.e0,854,w,0,3,w,A.c8,480,!1)
C.yM(v,d,e)
C.t1(v,d)
C.kF(v,14,16,452,822,f,1.6)
C.kF(v,20,22,440,810,f,0.8)
return v},
bAZ(d,e,f,g){var w,v=C.fD(g)
B.iM(d,!0,v,0,479,0,f-1)
w=854-f
B.iM(d,!0,v,0,479,w,853);--w
B.iM(d,!0,v,0,e-1,f,w)
B.iM(d,!0,v,480-e,479,f,w)},
hZo(d){var w,v,u=4291404327
C.bAZ(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kS(d,w,8,3,u,!0)
C.kS(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kS(d,7,v,3,u,!0)
C.kS(d,473,v,3,u,!0)}return d},
fwO(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.ji(e,f),new B.ji(e+g*n,f),new B.ji(e,f+h*n)],t)
B.a2q(d,C.fD(m),s)
w=A.o.E(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.ji(s,u),new B.ji(e+g*v,u),new B.ji(s,f+h*v)],t)
B.a2q(d,C.fD(k),t)
t=A.k.V(n*0.39)
C.kS(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kS(d,e+g*t,f+h*3,4,k,!0)
C.kS(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kS(d,e+g*t,f,5,k,!0)
C.kS(d,e,f+h*t,5,k,!0)}},
h77(d,e,f,g,h,i,j,k,l){var w,v
C.fwO(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fwO(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fwO(d,k,v,1,-1,e,f,g,h,i,j)
C.fwO(d,w,v,-1,-1,e,f,g,h,i,j)},
a1G(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.lb(d,!0,A.dg,new B.rd(p),null,A.d_,j,r,q)}},
fvN(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kU(d,!0,A.dg,new B.rd(o),null,A.d_,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kU(d,!0,A.dg,new B.rd(o),null,A.d_,1.4,q,q,p,p+h*r)}},
hXo(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hq(o,o,A.c8,0,A.e0,854,o,0,3,o,A.c8,480,!1)
C.yM(n,d,e)
C.t1(n,d)
C.kF(n,20,20,440,814,f,1.2)
C.fvN(n,0,0,1,1,g)
C.fvN(n,480,0,-1,1,g)
C.fvN(n,0,854,1,-1,g)
C.fvN(n,480,854,-1,-1,g)
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
B.kU(n,!0,A.dg,new B.rd(p),o,A.d_,1.2,240,r,60,q)}return n},
ftF(d,e,f,g,h){var w
C.fA6(d,!0,C.fD(g),13,e,f)
C.fA6(d,!0,C.fD(g),9,e,f)
w=B.a([new B.ji(e,f-4),new B.ji(e+4,f),new B.ji(e,f+4),new B.ji(e-4,f)],x.J)
B.a2q(d,C.fD(h),w)},
kS(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.ji(e,v),new B.ji(u,f),new B.ji(e,t),new B.ji(s,f)],x.J)
if(i){B.a2q(d,C.fD(h),r)
return}B.kU(d,!0,A.dg,C.fD(h),w,A.d_,1,e,u,v,f)
B.kU(d,!0,A.dg,C.fD(h),w,A.d_,1,u,e,f,t)
B.kU(d,!0,A.dg,C.fD(h),w,A.d_,1,e,s,t,f)
B.kU(d,!0,A.dg,C.fD(h),w,A.d_,1,s,e,f,v)},
fj5(d,e,f,g,h,i,j){var w,v=B.a([new B.ji(e,f),new B.ji(e+g*28,f),new B.ji(e,f+h*28)],x.J)
B.a2q(d,C.fD(i),v)
v=e+g*14
w=f+h*14
C.kS(d,v,w,6,j,!0)
C.kS(d,v,w,3,i,!0)},
fj6(d,e,f,g,h){var w=null,v=B.hq(w,w,A.c8,0,A.e0,854,w,0,3,w,A.c8,480,!1)
C.yM(v,d,e)
C.t1(v,d)
C.kF(v,18,18,444,818,f,2)
C.kF(v,26,26,428,802,f,0.9)
if(h!=null)B.iM(v,!0,C.fD(h),28,451,28,34)
C.fj5(v,18,18,1,1,g,f)
C.fj5(v,462,18,-1,1,g,f)
C.fj5(v,18,836,1,-1,g,f)
C.fj5(v,462,836,-1,-1,g,f)
return v},
i_x(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hq(v,v,A.c8,0,A.e0,854,v,0,3,v,A.c8,480,!1)
C.yM(r,u,4294240980)
C.t1(r,u)
C.kF(r,10,12,460,830,t,3.2)
C.kF(r,18,20,444,814,s,1.2)
C.kF(r,24,26,432,802,t,1.8)
C.h77(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kS(r,w,16,3,t,!0)
C.kS(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kS(r,16,w,3,t,!0)
C.kS(r,464,w,3,t,!0)}return r},
i_y(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hq(t,t,A.c8,0,A.e0,854,t,0,3,t,A.c8,480,!1)
C.yM(p,s,4294373080)
C.t1(p,s)
C.kF(p,16,18,448,818,r,2.4)
C.kF(p,24,26,432,802,4286209044,1)
w=new C.flu(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.h77(p,!1,!0,r,q,q,34,16,18)
return p},
bBF(d,e,f,g,h,i){B.iM(d,!0,C.fD(i),e,e+g,f,f+h)},
bCw(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kU(d,!1,A.dg,new B.SJ(i),null,A.d_,1,e,w,l,l)}},
i0q(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.kU(d,!1,A.dg,new B.rd(r),null,A.d_,1,e,s,t,t);++v}return}w=f+g-1
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
B.kU(d,!1,A.dg,new B.rd(r),null,A.d_,1,t,t,f,s);++q}},
i0r(d,e){var w,v,u=null,t=B.hq(u,u,A.c8,0,A.e0,854,u,0,3,u,A.c8,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.i0q(t,v,w,30,D.d0o,(A.o.ao(v,30)+A.o.ao(w,30)&1)===0)
C.bBF(t,44,44,392,766,d)
C.bCw(t,44,44,392,766,d,e)
C.t1(t,d)
C.kF(t,44,44,392,766,4292128567,2.2)
C.kF(t,50,50,380,754,4279898632,0.8)
return t},
i1x(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.kS(d,e,f,7,h,!0)
C.kS(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kU(d,!0,A.dg,C.fD(h),o,A.d_,1.6,w,u,v,t)
B.kU(d,!0,A.dg,C.fD(h),o,A.d_,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kU(d,!0,A.dg,new B.rd(p),o,A.d_,1.2,w,v,q,q)}break
default:B.kU(d,!0,A.dg,C.fD(h),o,A.d_,1.5,e-8,e+8,f,f)
B.kU(d,!0,A.dg,C.fD(h),o,A.d_,1.5,e,e,f-8,f+8)
B.lb(d,!0,A.dg,C.fD(h),o,A.d_,2,e,f)}},
i1y(d,e){var w,v,u,t,s=null,r=B.hq(s,s,A.c8,0,A.e0,854,s,0,3,s,A.c8,480,!1)
B.iM(r,!0,C.fD(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.i1x(r,u,v,w,4292391514)}C.bBF(r,46,46,388,762,d)
C.bCw(r,46,46,388,762,d,e)
C.t1(r,d)
C.kF(r,46,46,388,762,4291404327,1.8)
return r},
hnU(d,e,f,g){C.fA6(d,!0,C.fD(g),16,e,f)
C.fA6(d,!0,C.fD(g),11,e,f)
C.kS(d,e,f,6,g,!0)
B.kU(d,!0,A.dg,C.fD(g),null,A.d_,1.3,e-14,e+14,f,f)
B.kU(d,!0,A.dg,C.fD(g),null,A.d_,1.3,e,e,f-14,f+14)},
hXg(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hq(v,v,A.c8,0,A.e0,854,v,0,3,v,A.c8,480,!1)
B.iM(s,!0,C.fD(4280948752),0,479,0,853)
B.iM(s,!0,C.fD(u),0,479,0,78)
B.iM(s,!0,C.fD(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hnU(s,w,39,t)
C.hnU(s,w,815,t)}C.bBF(s,38,92,404,670,d)
C.bCw(s,38,92,404,670,d,e)
C.t1(s,d)
C.kF(s,38,92,404,670,t,1.8)
C.kF(s,45,99,390,656,4287322667,0.8)
return s},
i0Z(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.ji(e,f),new B.ji(q-5,w),new B.ji(q,f-(18-Math.abs(r)*3)),new B.ji(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a2q(d,new B.rd(o),p)}B.lb(d,!0,A.dg,C.fD(4292128567),null,A.d_,3,e,f)},
i1_(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hq(s,s,A.c8,0,A.e0,854,s,0,3,s,A.c8,480,!1)
C.yM(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kU(q,!0,A.dg,new B.rd(v),s,A.d_,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kU(q,!0,A.dg,new B.rd(u),s,A.d_,1.1,v,v,0,853)}B.iM(q,!0,C.fD(r),0,479,0,70)
B.iM(q,!0,C.fD(r),0,479,798,853)
for(t=0;t<5;++t)C.i0Z(q,70+t*85,48,4292128567)
C.bBF(q,48,78,384,712,d)
C.bCw(q,48,78,384,712,d,e)
C.t1(q,d)
C.kF(q,48,78,384,712,4291404327,1.6)
return q},
i5n(d,e){var w,v,u,t=null,s=4279970378,r=B.hq(t,t,A.c8,0,A.e0,854,t,0,3,t,A.c8,480,!1)
B.iM(r,!0,C.fD(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kS(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.lb(r,!0,A.dg,new B.rd(u),t,A.d_,1,v,w)}C.bBF(r,40,40,400,774,d)
C.bCw(r,40,40,400,774,d,e)
C.t1(r,d)
C.kF(r,40,40,400,774,4291058750,2)
C.kF(r,48,48,384,758,s,0.8)
return r},
l2:function l2(d,e){this.a=d
this.b=e},
fKg:function fKg(d){this.a=d},
fKf:function fKf(d){this.a=d},
flu:function flu(d){this.a=d},
fKU(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
i1r(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
h5G(d){var w,v,u,t=null,s=A.a.cv(d,"{"),r=A.a.oO(d,"}")
if(s<0||r<=s)return t
try{w=A.X.aM(0,Aj.ahq(A.a.ar(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
afU(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$afU=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vx(null,""),$async$afU)
case 3:n=g
if(A.a.i(n).length===0)throw B.W("AI is not available right now. Please try again later.")
t=B.nd(n)
if(e==null)s=A.hO
else{r=C.i1r(e)
s=B.a([new B.a0E(A.cI.gcp().aL(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.r4(t,d,s,"news",E.FZ),$async$afU)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.W(q!=null&&B.Lu(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$afU,v)},
bE8(d){return C.ieA(d)},
ieA(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bE8=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.X.ap(d.ag(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.afU(r,null),$async$bE8)
case 7:q=f
p=C.h5G(q)
if(p==null){u=d
w=1
break}o=d.aDu(p)
if(o.r.length===0||A.d.aH(o.r," ").length<A.d.aH(d.r," ").length*0.5){u=d
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
return B.i($async$bE8,v)},
hrR(d){var w,v=F.h8c(d)
v=B.aN(v,"book","newspaper")
if(F.a2J(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fOT(d,e,f,g){return C.igt(d,e,f,g)},
igt(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fOT=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fKU(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hvr()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.afU('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hrR(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fOT)
case 3:r=m.h5G(i)
if(r==null)throw B.W(y.S)
q=new C.zR(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.Y,"","","").aDu(r)
t=q.r
if(t.length===0)throw B.W("The AI did not write a story. Try again.")
s=n+" "+A.d.aH(t," ")
if(F.a2J(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a2J(A.d.aH(t," "))==="sw"?C.bE8(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fOT,v)},
bDD(d,e,f,g,h){return C.ica(d,e,f,g,h)},
ica(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bDD=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fK(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.M)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aH(l,"\n")
l=C.hvr()
k=A.X.ap(d.ag(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.afU('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hrR(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bDD)
case 3:p=j.h5G(a0)
if(p==null)throw B.W(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cL(o)){n=d.aDu(B.a2(o,x.N,x.z))
m=A.X.ap(n.ag(),null)!==A.X.ap(d.ag(),null)}else{n=d
m=!1}w=m&&F.a2J(A.d.aH(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bE8(n),$async$bDD)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a8r(A.a.i(B.w(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bDD,v)},
a8r:function a8r(d,e,f){this.a=d
this.b=e
this.c=f},
iji(d,e){return B.a4(d,!1).cd(B.dZ(new C.fW3(e),!0,null,x.H))},
fW3:function fW3(d){this.a=d},
Wl:function Wl(d,e){this.c=d
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
eo_:function eo_(d){this.a=d},
enZ:function enZ(){},
eo0:function eo0(d){this.a=d},
enY:function enY(d,e){this.a=d
this.b=e},
eo1:function eo1(){},
enC:function enC(d,e){this.a=d
this.b=e},
eny:function eny(d,e){this.a=d
this.b=e},
enJ:function enJ(d){this.a=d},
enK:function enK(d,e){this.a=d
this.b=e},
enL:function enL(d){this.a=d},
enE:function enE(d,e){this.a=d
this.b=e},
enF:function enF(d,e){this.a=d
this.b=e},
enG:function enG(d,e){this.a=d
this.b=e},
enH:function enH(d){this.a=d},
enI:function enI(d){this.a=d},
enD:function enD(d,e){this.a=d
this.b=e},
enA:function enA(d){this.a=d},
enB:function enB(d){this.a=d},
enR:function enR(d){this.a=d},
enS:function enS(d){this.a=d},
enQ:function enQ(d){this.a=d},
enT:function enT(d,e){this.a=d
this.b=e},
enP:function enP(d,e){this.a=d
this.b=e},
enU:function enU(d){this.a=d},
enO:function enO(d){this.a=d},
enV:function enV(d){this.a=d},
enN:function enN(d){this.a=d},
enW:function enW(d,e){this.a=d
this.b=e},
enM:function enM(d,e){this.a=d
this.b=e},
enX:function enX(d){this.a=d},
enz:function enz(d,e){this.a=d
this.b=e},
fJQ(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fJQ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hpr){w=1
break}r=new C.fJR()
t=4
q=x.s
w=7
return B.b(B.iQ(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fJQ)
case 7:$.hpr=!0
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
return B.i($async$fJQ,v)},
bE_(d){return A.CT[B.mg(d)-1]+", "+A.os[B.bM(d)-1]+" "+B.bW(d)+", "+B.bC(d)},
i4r(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.drS[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
h8B(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fD(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.Z(v,new C.fI8(),B.T(v).k("Z<1>")))
if(w<d.length-1)h.push("\n\n")}u=B.a([],i)
j.a=0
for(i=f.length,t=0;t<f.length;f.length===i||(0,B.M)(f),++t){s={}
v=f[t]
s.a=s.b=null
r=v.a
s.b=r
q=v.b
s.a=q
v=j.a
p=h.length
if(v>=p||r<20||q<20){u.push("")
continue}o=new C.fIa(j,h)
n=new C.fI9(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.ao(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.j_(o.$1(l)))
j.a+=l}return u},
h5p(d,e){var w=new C.fl3()
return A.d.cH(e,0,new C.fl1(w))>=A.d.cH(d,0,new C.fl2(w))},
hmz(d){var w,v,u=new B.aG($.S().r,A.ah,null,null,B.a([],x.v))
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
cha:function cha(d){this.a=d},
ch8:function ch8(){},
ch9:function ch9(){},
tx:function tx(d,e){this.a=d
this.b=e},
BQ:function BQ(d,e){this.a=d
this.b=e},
lp:function lp(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fJR:function fJR(){},
fI8:function fI8(){},
fIa:function fIa(d,e){this.a=d
this.b=e},
fI9:function fI9(d,e,f){this.a=d
this.b=e
this.c=f},
fl3:function fl3(){},
fl4:function fl4(){},
fl1:function fl1(d){this.a=d},
fl2:function fl2(d){this.a=d},
b26:function b26(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
chb:function chb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
chc:function chc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
chd:function chd(d){this.a=d},
bdR:function bdR(d){this.a=d},
bdQ:function bdQ(d,e){this.b=d
this.a=e},
bvB:function bvB(d){this.a=d},
bai:function bai(d,e){this.b=d
this.a=e},
bt5:function bt5(d,e){this.b=d
this.a=e},
hxu(d,e){return B.a4(d,!1).cd(B.dZ(new C.fW6(e,null),!0,null,x.E))},
fW6:function fW6(d,e){this.a=d
this.b=e},
Wm:function Wm(d,e,f){this.c=d
this.d=e
this.a=f},
aFd:function aFd(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
eox:function eox(){},
eoy:function eoy(d){this.a=d},
eow:function eow(d,e){this.a=d
this.b=e},
eok:function eok(d){this.a=d},
eol:function eol(d){this.a=d},
eor:function eor(d){this.a=d},
eos:function eos(d,e){this.a=d
this.b=e},
eop:function eop(d){this.a=d},
eoq:function eoq(d,e,f){this.a=d
this.b=e
this.c=f},
eom:function eom(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eot:function eot(d,e){this.a=d
this.b=e},
eoo:function eoo(d,e){this.a=d
this.b=e},
eou:function eou(d){this.a=d},
eon:function eon(d,e){this.a=d
this.b=e},
eov:function eov(d,e){this.a=d
this.b=e},
bdn:function bdn(d,e,f){this.b=d
this.c=e
this.a=f},
ijo(d){return B.a4(d,!1).cd(B.dZ(new C.fWm(),!0,null,x.I))},
bBq(d,e){var w,v,u,t,s,r,q=B.c1(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
h6P(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fWm:function fWm(){},
a0v:function a0v(d){this.a=d},
oJ:function oJ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aGG:function aGG(d,e,f,g,h,i,j,k,l){var _=this
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
_.aC=_.aN=_.aE=_.aA=_.a_=_.b8=_.bj=_.y2=0
_.b1=null
_.b0=0.25
_.be=null
_.bM=0.5
_.aJ=1
_.c9=_.bG=_.bi=0
_.cL=_.c6=!1
_.c=_.a=null},
eYy:function eYy(d){this.a=d},
eXq:function eXq(d,e){this.a=d
this.b=e},
eXO:function eXO(d,e){this.a=d
this.b=e},
eXY:function eXY(d){this.a=d},
eX9:function eX9(d){this.a=d},
eXa:function eXa(d){this.a=d},
eX7:function eX7(d){this.a=d},
eX8:function eX8(d){this.a=d},
eXH:function eXH(d,e){this.a=d
this.b=e},
eXI:function eXI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eXU:function eXU(d,e,f){this.a=d
this.b=e
this.c=f},
eXT:function eXT(d,e){this.a=d
this.b=e},
eXV:function eXV(d,e){this.a=d
this.b=e},
eXS:function eXS(d,e){this.a=d
this.b=e},
eXX:function eXX(d,e,f){this.a=d
this.b=e
this.c=f},
eXW:function eXW(d,e){this.a=d
this.b=e},
eX_:function eX_(d){this.a=d},
eX0:function eX0(d){this.a=d},
eX1:function eX1(d){this.a=d},
eWZ:function eWZ(){},
eX2:function eX2(d,e){this.a=d
this.b=e},
eWY:function eWY(d,e){this.a=d
this.b=e},
eX4:function eX4(){},
eX3:function eX3(d,e){this.a=d
this.b=e},
eWX:function eWX(d,e){this.a=d
this.b=e},
eWU:function eWU(d,e){this.a=d
this.b=e},
eX5:function eX5(d){this.a=d},
eWW:function eWW(d,e){this.a=d
this.b=e},
eX6:function eX6(d){this.a=d},
eWV:function eWV(d,e){this.a=d
this.b=e},
eYn:function eYn(d,e){this.a=d
this.b=e},
eYu:function eYu(d){this.a=d},
eYv:function eYv(d,e){this.a=d
this.b=e},
eYw:function eYw(){},
eYo:function eYo(d,e){this.a=d
this.b=e},
eYm:function eYm(d,e){this.a=d
this.b=e},
eYp:function eYp(d,e){this.a=d
this.b=e},
eYl:function eYl(d,e){this.a=d
this.b=e},
eYq:function eYq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eYk:function eYk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eYr:function eYr(d){this.a=d},
eYs:function eYs(d,e){this.a=d
this.b=e},
eYt:function eYt(d){this.a=d},
eYj:function eYj(d){this.a=d},
eY6:function eY6(d){this.a=d},
eY7:function eY7(d){this.a=d},
eY5:function eY5(d,e){this.a=d
this.b=e},
eY0:function eY0(d,e){this.a=d
this.b=e},
eY8:function eY8(d){this.a=d},
eYb:function eYb(d){this.a=d},
eY4:function eY4(d){this.a=d},
eYc:function eYc(d){this.a=d},
eYd:function eYd(d){this.a=d},
eYe:function eYe(d){this.a=d},
eYf:function eYf(d){this.a=d},
eY3:function eY3(d){this.a=d},
eYg:function eYg(d){this.a=d},
eY2:function eY2(d){this.a=d},
eYh:function eYh(d,e){this.a=d
this.b=e},
eY1:function eY1(d,e){this.a=d
this.b=e},
eYi:function eYi(d){this.a=d},
eY9:function eY9(d){this.a=d},
eYa:function eYa(d){this.a=d},
eXL:function eXL(d){this.a=d},
eXK:function eXK(d){this.a=d},
eXM:function eXM(d,e){this.a=d
this.b=e},
eXJ:function eXJ(d,e){this.a=d
this.b=e},
eXN:function eXN(d){this.a=d},
eXD:function eXD(d){this.a=d},
eXC:function eXC(d){this.a=d},
eXE:function eXE(d){this.a=d},
eXB:function eXB(d){this.a=d},
eXF:function eXF(d,e){this.a=d
this.b=e},
eXA:function eXA(d,e){this.a=d
this.b=e},
eXz:function eXz(d,e){this.a=d
this.b=e},
eXh:function eXh(d){this.a=d},
eXi:function eXi(d){this.a=d},
eXj:function eXj(d){this.a=d},
eXk:function eXk(d){this.a=d},
eXl:function eXl(d){this.a=d},
eXm:function eXm(d){this.a=d},
eXn:function eXn(d){this.a=d},
eXo:function eXo(d){this.a=d},
eXp:function eXp(d){this.a=d},
eWD:function eWD(d){this.a=d},
eWE:function eWE(d){this.a=d},
eWF:function eWF(d){this.a=d},
eWG:function eWG(d){this.a=d},
eWH:function eWH(d){this.a=d},
eWC:function eWC(d){this.a=d},
eWI:function eWI(d){this.a=d},
eWJ:function eWJ(d){this.a=d},
eXb:function eXb(d){this.a=d},
eXc:function eXc(d){this.a=d},
eXd:function eXd(d){this.a=d},
eXe:function eXe(d){this.a=d},
eXf:function eXf(d){this.a=d},
eWN:function eWN(d){this.a=d},
eWO:function eWO(d){this.a=d},
eWP:function eWP(d){this.a=d},
eWQ:function eWQ(d){this.a=d},
eWR:function eWR(d){this.a=d},
eWM:function eWM(d){this.a=d},
eWS:function eWS(d){this.a=d},
eWL:function eWL(d){this.a=d},
eWT:function eWT(d){this.a=d},
eWK:function eWK(d){this.a=d},
eXG:function eXG(d){this.a=d},
eXy:function eXy(d){this.a=d},
eXu:function eXu(d){this.a=d},
eXt:function eXt(d){this.a=d},
eXv:function eXv(d,e){this.a=d
this.b=e},
eXs:function eXs(d,e){this.a=d
this.b=e},
eXw:function eXw(d,e){this.a=d
this.b=e},
eXr:function eXr(d,e){this.a=d
this.b=e},
eXx:function eXx(d){this.a=d},
eXR:function eXR(d){this.a=d},
eXQ:function eXQ(d,e,f){this.a=d
this.b=e
this.c=f},
eXP:function eXP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eY_:function eY_(d,e){this.a=d
this.b=e},
eXZ:function eXZ(d,e){this.a=d
this.b=e},
eXg:function eXg(d){this.a=d},
eYx:function eYx(d){this.a=d},
bgZ:function bgZ(d,e){this.b=d
this.a=e},
ieL(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
ieM(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).lb(0,d),m=B.C(n,B.a7(n).k("L.E"))
if(m.length===0)return d
w=new B.fg("")
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
n=B.af("[*~^]",!0,!1,!1,!1)
o=B.aN(p,n,"")
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
v=t.index+t[0].length}n=w.a=n+A.a.b7(d,v)
return n.charCodeAt(0)==0?n:n},
bC0(){var w=$.bB8,v=$.R0
$.R0=v+1
return w+"_"+v},
ig(d,e,f,g,h,i,j){return C.es(A.bi,!1,4279310375,A.aF,"",i,24,A.bp,A.a7,"",h,C.bC0(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cm,D.fa,g,e,f)},
o7(d,e,f,g){var w=f*9
return C.ig(D.eU,d-f/2,e-w/32,f,w/16,g,0)},
hYX(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bB8
p=$.R0
$.R0=p+1
w.push(new C.eO(q+"_"+p,D.fa,0,r,1,0.0016,"",24,A.a7,A.bp,A.aF,k,A.bi,null,D.bh,t,t,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bB8
p=$.R0
$.R0=p+1
w.push(new C.eO(q+"_"+p,D.fa,o,0,0.004,1,"",24,A.a7,A.bp,A.aF,k,A.bi,null,D.bh,t,t,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}w.push(C.o7(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.o7(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ig(D.bh,0.08,0.08,0.5,0.003,v,0),C.ig(D.bh,0.58,0.08,0.004,0.06,v,0),C.ig(D.bh,0.58,0.14,0.34,0.003,v,0),C.ig(D.bh,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ig(D.bh,0.08,0.8,0.004,0.14,t,0),C.ig(D.bh,0.08,0.94,0.6,0.003,t,0),C.o7(0.58,0.08,0.05,e),C.o7(0.92,0.22,0.05,e),C.o7(0.08,0.8,0.05,f),C.o7(0.68,0.94,0.05,f),C.o7(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ig(D.lk,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ig(D.lk,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ig(D.lk,0.7,0.8,0.22,0.12,w|1140850688,0),C.ig(D.lk,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.o7(0.5,0.5,1.5,w|335544320),C.o7(0.5,0.5,1.15,w|402653184),C.o7(0.5,0.5,0.8,v|436207616),C.o7(0.95,0.05,0.4,v|855638016),C.o7(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.o7(0.85,0.08,0.7,w|1140850688),C.o7(0.1,0.35,0.5,v|855638016),C.o7(0.9,0.62,0.55,v|771751936),C.o7(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.ig(D.bh,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.ig(D.bh,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.ig(D.bh,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.ig(D.bh,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.o7(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.o7(0.5,0.2,0.65,(w|3422552064)>>>0),C.o7(0.5,0.2,0.95,w|855638016),C.ig(D.bh,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.ig(D.bh,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.ig(D.k0,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ig(D.k0,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ig(D.k0,0.15,0.86,0.6,0.14,1712265002,0),C.o7(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.d1V[n]
u=A.o.F(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bB8
l=$.R0
$.R0=l+1
w.push(new C.eO(m+"_"+l,D.fa,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a7,A.bp,A.aF,k,A.bi,null,D.eU,q,q,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}w.push(C.o7(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ig(D.k0,0.35,-0.1,0.3,0.62,w|855638016,0),C.ig(D.k0,0.05,-0.1,0.3,0.55,v,-0.5),C.ig(D.k0,0.65,-0.1,0.3,0.55,v,0.5),C.o7(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ig(D.bh,0.06,0.04,0.88,0.002,e,0),C.ig(D.bh,0.06,0.96,0.88,0.002,e,0),C.ig(D.bh,0.06,0.04,0.004,0.92,e,0),C.ig(D.bh,0.936,0.04,0.004,0.92,e,0),C.ig(D.bh,0.09,0.07,0.82,0.001,w,0),C.ig(D.bh,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ig(D.k1,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ig(D.k1,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ig(D.k1,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ig(D.bh,0,0,0.3,0.09,w|1140850688,0),C.ig(D.bh,0.7,0.9,0.3,0.1,v|1426063360,0),C.ig(D.bh,0.82,0.04,0.12,0.07,w|771751936,0),C.ig(D.bh,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ig(D.eU,0.62,0.02,0.5,0.16,v,0.6),C.ig(D.eU,0.78,0.12,0.4,0.12,u,0.9),C.ig(D.eU,-0.12,0.8,0.5,0.16,u,-0.6),C.ig(D.eU,-0.05,0.9,0.4,0.12,v,-0.9),C.o7(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ig(D.bh,0.09,0.12,0.16,0.006,e,0),C.ig(D.bh,0.05,0.03,0.9,0.001,w,0),C.ig(D.bh,0.05,0.97,0.9,0.001,w,0)],x.u)}},
ibd(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bB8=j
$.R0=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fFx()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.es(A.bi,!1,n,A.aF,"ngmy_quote_background",m,24,A.bp,A.a7,"",1,C.bC0(),g,"","",0,!1,"",0,D.bh,l,2,"",0,0,"",D.cm,D.lM,1,0,0))
if(a9)A.d.v(q,C.hYX(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.E(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.ieL(B.aN(w,p,""))
o=A.a.t(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fFw(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.E(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cE,A.a7))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a7))
if(a0!=null&&a0.length!==0)q.push(C.es(A.bi,!1,n,A.aF,"ngmy_quote_logo",m,24,A.bp,A.a7,a1,a3*9/16,C.bC0(),a0,"","",0,!1,a2,0,D.bh,l,2,"",0,0,"",D.cm,D.lM,a3,a4,a5))
return C.rH(s,r,0,0,q,j+"_slide",D.qC,"","","",D.dh)},
rG:function rG(d,e){this.a=d
this.b=e},
mf:function mf(d,e,f,g,h,i,j,k,l,m){var _=this
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
fFx:function fFx(){},
fFw:function fFw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hOZ(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a5(d)
v=B.bj(B.w(w.h(d,"at")))
u=w.h(d,"outline")
t=B.w(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.ciH(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bU()
w=w.h(d,"request")
return new C.zS(u,t,s,B.w(w==null?"":w))},
fNf(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fNf=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hpO){w=1
break}$.hpO=!0
t=4
w=7
return B.b(B.az(),$async$fNf)
case 7:r=e
q=B.aS(J.r(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.X.aM(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jZ(p),k=k.gaf(k),j=x.j,i=x.o;k.C();){o=k.gT(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aW(j.a(o.b));h.C();){m=h.gT(h)
l=C.hOZ(m)
if(l!=null)J.cc(n,l)}$.D3.c4(0,B.w(o.a),new C.fNg(n))}C.h6u()
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
return B.i($async$fNf,v)},
h6u(){var w,v=new B.V(Date.now(),0,!1).bS(-12e8)
for(w=new B.dq($.D3,$.D3.r,$.D3.e);w.C();)J.nA(w.d,new C.fsS(v))
$.D3.bs($.D3,new C.fsT())},
aPf(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aPf=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aPf)
case 6:s=a0
m=x.N
l=x.z
r=B.U(m,l)
for(k=new B.cH($.D3,B.a7($.D3).k("cH<1,2>")).gaf(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aW(q.b);h.C();){o=h.gT(h)
g=o
J.cc(p,B.G(["at",g.a.a8().ae(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aI(r,i,p)}n=r
w=7
return B.b(s.au("String","ngmy_slides_ai_history_v1",A.X.ap(n,null)),$async$aPf)
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
return B.i($async$aPf,v)},
ifo(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.h6u()
w=$.D3.c4(0,d,new C.fNi())
v=Date.now()
u=B.C(e,B.a7(e).k("cs.E"))
J.pK(w,0,new C.zS(new B.V(v,0,!1),f,u,g))
C.aPf()},
ifl(d){var w,v=$.D3.h(0,d)
if(v==null||J.ct(v))return
w=J.cE(v)
w.cA(v,0)
if(w.gan(v))$.D3.W(0,d)
C.aPf()},
zS:function zS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ciH:function ciH(){},
fNg:function fNg(d){this.a=d},
fsS:function fsS(d){this.a=d},
fsT:function fsT(){},
fNi:function fNi(){},
ifq(d){return A.d.dK(D.wB,new C.fNl(d),new C.fNm())},
hOX(d){var w
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
hOW(d){var w
switch(d.a){case 0:w=D.anM
break
case 1:w=A.wl
break
case 2:w=A.aoN
break
case 3:w=K.anp
break
case 4:w=A.aog
break
case 5:w=A.mb
break
default:w=null}return w},
i14(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.QU[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.QU[w]
if(!B.cT(v.toLowerCase(),t,0))u=B.cT(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hOY(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.M)(w),++s){r=w[s]
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
o.push(q)}return A.X.ap(B.G(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
ifm(d,e,f,g,h){var w=new B.N(D.wB,new C.fNe(),x.eC).aH(0,", "),v=""+d,u=C.hvj(h),t=F.fGW(h),s=C.hrr(g),r=e.t(0,D.IP)?'- New slides get an "emoji".\n':"",q=e.t(0,D.IQ)?'- New slides get an "icon3d" from: '+A.d.aH(D.QU,", ")+".\n":"",p=e.t(0,D.Ds)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ifn(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.N(D.wB,new C.fNh(),x.eC).aH(0,", "),p=new B.fg("")
if(e.t(0,D.IP)){p.a=s
w=s}else w=""
if(e.t(0,D.IQ))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aH(D.QU,", ")+".\n")
if(e.t(0,D.Ds))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hvj(d)
v=F.fGW(d)
u=C.hrr(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ahG(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.Ds(a3,"{"),a5=J.fZE(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.LN(a3,a4,a5+1)
try{w=A.X.aM(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.r(w,"slides")
p=x.j
if(!p.b(v)||J.ct(v))return a1
u=B.a([],x.aC)
for(o=J.aW(v),n=x.s,m=x.N;o.C();){t=o.gT(o)
if(!q.b(t))continue
if(p.b(J.r(t,a2))){l=J.b6(p.a(J.r(t,a2)),new C.fLc(),m).c0(0,new C.fLd())
k=B.C(l,l.$ti.k("L.E"))}else k=B.a([],n)
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
f=C.i14(B.w(f==null?"":f))
if(f==null)f=""
e=J.r(t,"image_query")
if(e==null)e=J.r(t,"imageQuery")
e=A.a.i(B.w(e==null?"":e))
d=J.r(t,"picture")
d=B.cb(B.w(d==null?0:d),a1)
if(d==null)d=0
J.cc(u,new C.a8z(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.r(w,"style")
r=A.a.i(B.w(q==null?a7:q)).toLowerCase()
q=J.r(w,"title")
q=A.a.i(B.w(q==null?J.fq(u).b:q))
p=A.d.b2(D.wB,new C.fLe(r))?r:a7
o=C.fs6(J.r(w,"logo_frame"),D.CP)
n=C.fs6(J.r(w,"logo_ring"),D.CJ)
m=C.fs6(J.r(w,"photo_frame"),D.CP)
l=C.fs6(J.r(w,"photo_ring"),D.CJ)
return new C.arY(q,p,u,o,n,m,l)}catch(a0){return a1}},
a2h(d,e){return(A.o.E(e,0,255)<<24|d&16777215)>>>0},
huq(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.Dt),f7=f6?C.hVC():e4,f8=f7==null
if(f8)w=e4
else{v=new B.e9()
v.d4(f7.w+1)
u=f7.a
t=B.bq(u.b,!0,x.dL)
A.d.dZ(t,v)
s=u.c
s=new C.nT("luxe",u.a,A.mb,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dh)
w=s}if(w==null)w=C.ifq(f9.b)
r=g2.t(0,D.a6Y)||f6
q=g2.t(0,D.IP)
p=g2.t(0,D.SU)
o=new C.fFB()
n=B.a([],x.g)
m=new C.fFE(o,w,r)
l=new C.fFD(o,r)
k=new C.fFC(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a5(g0),a7=!A.d.b2(u,new C.fFA(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.d3z[b8]
c0=D.d2q[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.f2P.t(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eU,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.E(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eU,0.7,-0.25,0.46,0.82,(A.o.E(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eU,-0.08,0.68,0.24,0.43,(A.o.E(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mU,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.K,D.qD,500,f2,f0))
c1.push(l.$8$fx$key(D.bh,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.K,a2,300,f5))
d3=D.SR
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eU,0.64,0.46,0.42,0.75,(A.o.E(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.lk,0.78,0.1,0.18,0.32,(A.o.E(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bh,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.Dq
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eU,-0.12,-0.2,0.36,0.64,(A.o.E(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eU,0.82,0.66,0.26,0.46,(A.o.E(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mU,(A.o.E(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.K,b9,e5,A.cE,A.Q))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.K,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.K,D.qD,500,f2,f0))
d3=D.mT
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eU,0.58,0.04,0.44,0.8,(A.o.E(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bh,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.uS:D.cm
c1.push(new C.eO(b4,D.a6W,0.64,0.05,0.27,0.9,g1,24,A.a7,A.bp,A.aF,4279310375,A.bi,e4,D.bh,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mT
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eU,-0.15,-0.3,0.5,0.9,(A.o.E(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eU,0.78,0.62,0.3,0.54,(A.o.E(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mU,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.K,D.qD,450,f2,f0))
c1.push(l.$8$fx$key(D.bh,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.K,a2,300,f5))
d3=D.SR
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eU,b4,0.52,0.3,0.54,(A.o.E(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eU,b4,-0.18,0.26,0.46,(A.o.E(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bh,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bh,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aH(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.IN,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mT}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dh,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hXf(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.duk[A.o.F(b1,6)]:s
n.push(new C.lR(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.C3(e4,e4,e4,e4,D.Dp,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ar(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fHZ(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fHZ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.Ds)
n=e.t(0,D.IQ)
if(!o&&!n){u=D.a5V
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fI1(o,s[r],n,$.i_O,r).$0())
s=B.U(x.S,x.aH)
m=J
w=3
return B.b(B.iQ(t,x.e),$async$fHZ)
case 3:q=m.aW(g)
case 4:if(!q.C()){w=5
break}p=q.gT(q)
s.n(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fHZ,v)},
fGZ(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fGZ=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.ifn(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aOz(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fGZ)
case 3:u=s.aOV(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fGZ,v)},
bDE(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bDE=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aX(x.N)
for(s=B.eo(f,f.r,B.a7(f).c),r=s.$ti.c;s.C();){q=s.d
t.M(0,(q==null?r.a(q):q).b)}C.ifo(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.ahG(i,"colorful")
t=C.ifm(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aOz(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hO),$async$bDE)
case 3:u=o.aOV(m,f,h,g,D.e7w,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bDE,v)},
aOz(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aOz=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vx(null,""),$async$aOz)
case 3:n=i
if(A.a.i(n).length===0)throw B.W("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.nd(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.r4(t,d,g,"slides",null),$async$aOz)
case 7:q=i
p=q.b
if(p!=null){o=C.ahG(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.W(s!=null&&B.Lu(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aOz,v)},
aOV(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aOV=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.Ds)||e.t(0,D.IQ)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.dg(e,x.Q)
t.W(0,D.Ds)}w=6
return B.b(C.fHZ(d,t),$async$aOV)
case 6:s=k
w=4
break
case 5:s=D.a5V
case 4:t=d.c
w=A.d.b2(t,new C.fkY())?7:9
break
case 7:r=$.hwb
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dU(r,x.aP),$async$aOV)
case 10:q=k
p=q!=null?A.X.ap(q.ag(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.huq(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hOY(new C.arY(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.T(m).k("N<1,n>")
t=B.C(new B.N(m,new C.fkZ(),n),n.k("ak.E"))
l.cx=t
t=B.a7(e).k("k1<cs.E,n>")
t=B.C(new B.k1(e,new C.fl_(),t),t.k("L.E"))
l.cy=t
l.ay=e.t(0,D.SU)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aOV,v)},
h9k(d){var w,v,u,t=d.cy
if(t==null)t=A.Y
w=B.aX(x.Q)
for(v=0;v<6;++v){u=D.a4H[v]
if(A.d.t(t,u.b))w.M(0,u)}return w},
ijt(d){return B.bV(A.L,null,new C.fWy(),d,!0,!0,!0,null,!1,!1,x.I)},
hWe(d,e){var w,v=e.toLowerCase()
if(A.a.c8(v,".png"))w="image/png"
else w=A.a.c8(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cI.gcp().aL(d)},
ijs(d,e,f){return B.bV(A.L,null,new C.fWx(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
h9l(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
h9m(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.M)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
fs6(d,e){var w=A.a.i(B.w(d==null?"":d)).toLowerCase()
return A.d.b2(e,new C.fs7(w))?w:""},
hrr(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hw9(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.ahG(a1==null?"":a1,a0),a3=C.ahG(a5,a0)
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
for(v=t.length,r=a4.r,q=B.T(r).k("Z<1>"),p=0;p<t.length;t.length===v||(0,B.M)(t),++p){o=B.pT(new B.Z(r,new C.fNn(t[p]),q))
if(o==null)return!1
s.push(o)}for(v=w.length,n=0;n<v;++n){m=w[n]
l=u[n]
if(m.a!==l.a||m.f!==l.f||m.r!==l.r||m.w!==l.w||m.x!==l.x)return!1
if(m.d.length!==l.d.length)return!1}if(!a6)return!0
for(v=x.fR,r=v.k("L.E"),q=x.L,n=0;n<w.length;++n){m=w[n]
l=u[n]
k=B.a([new B.z(m.b,l.b),new B.z(m.c,l.c)],q)
for(j=m.d,i=l.d,h=0;h<j.length;++h)k.push(new B.z(j[h],i[h]))
k.push(new B.z(m.e,l.e))
g=B.C(new B.Z(k,new C.fNo(),v),r)
A.d.aW(g,new C.fNp())
if(g.length===0)continue
f=new C.fNq(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.M)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
ifH(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aJ4
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.e9q
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.e9r
return null},
hr2(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bh(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dd(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
ifr(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.E(a1,0,d-1)]],x.g)
w=a0.d===D.ox
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.M)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.M)(q),++o){n=q[o]
if(n.b!==D.cU)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.E(m*0.85,10,120)
break
case 1:j=A.k.E(m*1.15,10,120)
if(C.hr2(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hr2(n,i,v,u))if(n.w>10){f=h+1
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
ifp(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.ahG(o,"colorful")
if(n==null)throw B.W("That earlier version could not be read.")
w=B.aX(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.M)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a4H[r]
if(q.b===s)w.M(0,q)}}v=C.h9l(e)
u=C.h9m(e)
p=C.huq(n,D.a5V,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.T(o).k("N<1,n>")
o=B.C(new B.N(o,new C.fNj(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("k1<cs.E,n>")
o=B.C(new B.k1(w,new C.fNk(),o),o.k("L.E"))
p.cy=o
p.ay=w.t(0,D.SU)
return p},
ijf(d,e,f){return B.bV(A.L,null,new C.fVL(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hVC(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.e9()
s.d4(t)
w=D.cHR[s.aq(10)]
v=new C.ekQ(s)
u=x.N
return new C.ekP(w,s.aq(4),J.fq(v.$1$2(D.d8j,1,x.ff)),w.r[s.aq(3)],v.$1$2(D.dpx,2+s.aq(2),u),v.$1$2(D.di6,2,u),v.$1$2(D.dsK,4,x.fP),t)},
hXf(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.e9()
a1.d4(a5.w+a3*13)
w=new C.fhp(a4)
v=new C.fhr(a4,d)
u=new C.fhq(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.M)(a2),++q){p=a2[q]
if(p.b===D.cU){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aS(A.o.fH(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aS(A.o.fH(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.c3(a2,0,w.$8(D.eU,0.1+a1.ah()*0.45,0.05+a1.ah()*0.3,0.45,0.75,C.a2h(a0,52),"lux_spot",a5.wL(0,"spotlight")))
else A.d.c3(a2,0,w.$8(D.bh,0,0,1,1,0,"lux_back",a5.wL(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c3(a2,1,w.$8(D.bh,0,0,1,1,0,"lux_back2",a5.aFZ(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bh,0.022,0.038,0.956,0.924,0,g,a5.wL(0,f),D.dh,150,C.a2h(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bh,0.018,0.032,0.964,0.936,0,g,a5.wL(0,f),D.dh,120,C.a2h(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bh,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dh,260,C.a2h(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bh,0,0,1,1,0,"lux_filigree",a5.wL(0,"filigree"),D.dh,200))
break
default:a2.push(w.$10$anim$delay(D.bh,0.08,0.06,0.84,0.004,C.a2h(a0,208),"lux_rule",a5.aFZ(0,"shimmer",r),D.uR,150))
a2.push(w.$10$anim$delay(D.bh,0.08,0.936,0.84,0.004,C.a2h(a0,144),"lux_rule2","",D.IN,220))}l=!A.d.b2(a2,new C.fho())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.wL(0,"crest"),350))
else{o=a1.hj()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.wL(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a2h(r,242)
j=a5.wL(0,"orbit")
i=s===D.bh?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.qD,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eU,t-0.007,0.9495,0.014,0.025,C.a2h(r,242),"lux_g2",a5.wL(0,"orbit"),D.qD,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.M)(t),++q){h=t[q]
a2.push(w.$8(D.bh,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aS(A.o.fH(a0,16),8,"0").toUpperCase()))}if((A.d.gI(d.b).a&16777215)<8421504)a2.push(w.$8(D.bh,0,0,1,1,0,"lux_velvet",a5.wL(0,"velvet")))},
nT:function nT(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fNl:function fNl(d){this.a=d},
fNm:function fNm(){},
wc:function wc(d,e){this.a=d
this.b=e},
a8z:function a8z(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
arY:function arY(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fNe:function fNe(){},
fNh:function fNh(){},
fLc:function fLc(){},
fLd:function fLd(){},
fLe:function fLe(d){this.a=d},
fFB:function fFB(){},
fFE:function fFE(d,e,f){this.a=d
this.b=e
this.c=f},
fFD:function fFD(d,e){this.a=d
this.b=e},
fFC:function fFC(d,e){this.a=d
this.b=e},
fFA:function fFA(d){this.a=d},
fI1:function fI1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fI_:function fI_(d){this.a=d},
fI0:function fI0(d){this.a=d},
fkY:function fkY(){},
fkZ:function fkZ(){},
fl_:function fl_(){},
fWy:function fWy(){},
a11:function a11(d){this.a=d},
aID:function aID(d,e,f,g,h){var _=this
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
f3W:function f3W(d,e,f){this.a=d
this.b=e
this.c=f},
f3X:function f3X(d,e){this.a=d
this.b=e},
f3U:function f3U(d,e){this.a=d
this.b=e},
f3V:function f3V(d,e){this.a=d
this.b=e},
f3T:function f3T(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
f3O:function f3O(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f3S:function f3S(d,e){this.a=d
this.b=e},
f3N:function f3N(d,e){this.a=d
this.b=e},
f3R:function f3R(d,e){this.a=d
this.b=e},
f3M:function f3M(d,e){this.a=d
this.b=e},
f3P:function f3P(d){this.a=d},
f3Q:function f3Q(d,e){this.a=d
this.b=e},
f3C:function f3C(d,e){this.a=d
this.b=e},
f3D:function f3D(d,e){this.a=d
this.b=e},
f3F:function f3F(d){this.a=d},
f3G:function f3G(d){this.a=d},
f3H:function f3H(d){this.a=d},
f3I:function f3I(d){this.a=d},
f3E:function f3E(d,e){this.a=d
this.b=e},
f3J:function f3J(d,e){this.a=d
this.b=e},
f49:function f49(d){this.a=d},
f4a:function f4a(d){this.a=d},
f48:function f48(d){this.a=d},
f4b:function f4b(d){this.a=d},
f47:function f47(d){this.a=d},
f4d:function f4d(d){this.a=d},
f46:function f46(d,e){this.a=d
this.b=e},
f4e:function f4e(d){this.a=d},
f45:function f45(d,e){this.a=d
this.b=e},
f4f:function f4f(d){this.a=d},
f44:function f44(d){this.a=d},
f4g:function f4g(d){this.a=d},
f43:function f43(d,e){this.a=d
this.b=e},
f4h:function f4h(d){this.a=d},
f42:function f42(d,e){this.a=d
this.b=e},
f4i:function f4i(d){this.a=d},
f41:function f41(d){this.a=d},
f4j:function f4j(d,e){this.a=d
this.b=e},
f40:function f40(d,e){this.a=d
this.b=e},
f4k:function f4k(d){this.a=d},
f4c:function f4c(d){this.a=d},
f4_:function f4_(d,e){this.a=d
this.b=e},
f3K:function f3K(d,e,f){this.a=d
this.b=e
this.c=f},
f3L:function f3L(d,e,f){this.a=d
this.b=e
this.c=f},
f3Z:function f3Z(d,e){this.a=d
this.b=e},
f3Y:function f3Y(d,e){this.a=d
this.b=e},
fWx:function fWx(d,e){this.a=d
this.b=e},
a10:function a10(d,e,f){this.c=d
this.d=e
this.a=f},
aIC:function aIC(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
f3v:function f3v(d){this.a=d},
f3w:function f3w(d){this.a=d},
f3x:function f3x(d,e){this.a=d
this.b=e},
f3y:function f3y(d){this.a=d},
f3z:function f3z(d){this.a=d},
f3u:function f3u(d,e){this.a=d
this.b=e},
f3A:function f3A(d,e){this.a=d
this.b=e},
f3B:function f3B(d,e){this.a=d
this.b=e},
fs7:function fs7(d){this.a=d},
b2v:function b2v(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aF5:function aF5(d,e,f){this.c=d
this.d=e
this.a=f},
blA:function blA(d,e){var _=this
_.d=$
_.bz$=d
_.aa$=e
_.c=_.a=null},
ekS:function ekS(d){this.a=d},
ekR:function ekR(){},
bjd:function bjd(d,e){this.b=d
this.a=e},
fNn:function fNn(d){this.a=d},
fNo:function fNo(){},
fNp:function fNp(){},
fNq:function fNq(d){this.a=d},
asv:function asv(d,e){this.a=d
this.b=e},
fNj:function fNj(){},
fNk:function fNk(){},
fVL:function fVL(d,e){this.a=d
this.b=e},
a_n:function a_n(d,e,f){this.c=d
this.d=e
this.a=f},
aCB:function aCB(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dpt:function dpt(d){this.a=d},
dpu:function dpu(d){this.a=d},
dpv:function dpv(d,e){this.a=d
this.b=e},
dpy:function dpy(d){this.a=d},
dpz:function dpz(d,e){this.a=d
this.b=e},
dpx:function dpx(d,e){this.a=d
this.b=e},
dpA:function dpA(d){this.a=d},
dpw:function dpw(d,e){this.a=d
this.b=e},
buc:function buc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ekP:function ekP(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ekQ:function ekQ(d){this.a=d},
fhp:function fhp(d){this.a=d},
fhr:function fhr(d,e){this.a=d
this.b=e},
fhq:function fhq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fho:function fho(){},
aNa:function aNa(){},
h89(d){var w,v,u
try{w=A.X.aM(0,d,null)
if(x.f.b(w)){v=B.w5(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b2r:function b2r(d,e,f){this.c=d
this.d=e
this.a=f},
bn9:function bn9(d,e){this.c=d
this.a=e},
ibH(d){return A.d.dK(D.HQ,new C.fGI(d),new C.fGJ())},
ibI(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b7(t,6)
if(w.length===0)return null
v=new B.Z(D.HQ,new C.fGK(w),x.b4)
if(!v.gaf(0).C())return null
u=v.gI(0)
return new C.jO("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
lm:function lm(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fGI:function fGI(d){this.a=d},
fGJ:function fGJ(){},
fGK:function fGK(d){this.a=d},
n2(d,e,f,g,h){return new C.F4(f,g,d)},
hYr(d){var w=d.z,v=B.T(w).k("Z<1>")
w=B.C(new B.Z(w,new C.fjp(),v),v.k("L.E"))
d.z=w
d.x=""},
dz(d,e){var w=$.KS
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c3(d.z,0,e)},
dA(d,e,f,g,h,i,j,k,l){return C.es(A.bi,!1,4279310375,A.aF,"",d,24,A.bp,A.a7,"",e,"design_"+C.cF(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cm,D.fa,j,k,l)},
hud(d,e){var w
C.hYr(d)
w=A.d.dK($.bFG(),new C.fEy(e),new C.fEz())
$.KS=w.a
d.x=w.a;++d.y
try{w.by(d)}finally{$.KS=""}d.z=B.bq(d.z,!0,x.F)},
F4:function F4(d,e,f){this.a=d
this.b=e
this.e=f},
fjp:function fjp(){},
fMQ:function fMQ(){},
fMR:function fMR(){},
fMS:function fMS(){},
fN2:function fN2(){},
fN7:function fN7(){},
fN8:function fN8(){},
fN9:function fN9(){},
fNa:function fNa(){},
fNb:function fNb(){},
fNc:function fNc(){},
fNd:function fNd(){},
fMT:function fMT(){},
fMU:function fMU(){},
fMV:function fMV(){},
fMW:function fMW(){},
fMX:function fMX(){},
fMY:function fMY(){},
fMZ:function fMZ(){},
fN_:function fN_(){},
fN0:function fN0(){},
fN1:function fN1(){},
fN3:function fN3(){},
fN4:function fN4(){},
fN5:function fN5(){},
fN6:function fN6(){},
fEy:function fEy(d){this.a=d},
fEz:function fEz(){},
iZ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.es(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bh,4280172719,2,m,n,0,"",o,D.cU,p,q,r)},
Dj(d,e,f,g,h,i,j,k,l){return C.es(A.bi,!1,4279310375,A.aF,"",d,24,A.bp,A.a7,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cm,D.fa,j,k,l)},
bEn(){var w=new B.V(Date.now(),0,!1)
return A.iE[B.bM(w)-1]+" "+B.bW(w)+", "+B.bC(w)},
ex:function ex(d,e,f){this.a=d
this.b=e
this.c=f},
bBL(d){return new B.iT((A.o.aD(d,24)&255)/255,(A.o.aD(d,16)&255)/255,(A.o.aD(d,8)&255)/255,(d&255)/255)},
i2J(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.anC(A.cD.aL(A.d.gak(d.split(","))))
return w}catch(v){return null}},
i2N(d){var w=d.r
if(!d.cy)return w
return new B.N(B.a(w.split("\n"),x.s),new C.frq(),x.dv).aH(0,"\n")},
i2M(d){switch(d.a){case 2:return A.nG
case 1:case 5:return A.fe2
default:return A.Uo}},
i2G(d){switch(d.a){case 2:return A.vw
case 1:case 5:return A.Wt
default:return A.ac6}},
i2K(d,e){var w,v=null,u=d.ay,t=A.o.aD(u,24),s=A.o.aD(d.ch,24),r=(t&255)===0?v:C.bBL(u),q=(s&255)===0?v:C.bBL(d.ch),p=A.k.E(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nC(q,p,A.kY)
w=new B.pL(t,t,t,t)}switch(d.ax.a){case 1:return B.lG(v,v,v,new B.kM(r,w,v,A.ado,v),v,v,v,v)
case 4:return u?new B.fU(v,v,v):B.xj(B.lG(v,v,q,v,p+0.4,v,v,v))
default:return B.lG(v,v,v,new B.kM(r,w,B.vH(4),A.hR,v),v,v,v,v)}},
i2I(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.fa?0.4:12,g=A.k.E(d.e*e,h,e),f=A.k.E(d.f*a0,h,a0)
switch(i.a){case 0:w=C.i2G(d.as)
v=A.k.E(d.w*(e/960),3,96)
u=C.i2N(d)
t=C.bBL(d.Q)
s=d.x.a>=700?A.ew:A.w4
r=d.y===A.cE?A.yx:A.amg
q=d.z
p=new B.Dv(w,l,l,B.fc(u,l,l,l,B.hb(l,t,1===q.a?A.aSg:A.aSf,l,l,l,l,l,l,A.dy,l,l,v,r,s,l,!0,l,l,l,l),C.i2M(d.as)))
break
case 1:case 4:o=C.i2J(d.at)
n=i===D.lM&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.xj(B.fc(w,l,l,l,B.hb(l,A.rW,l,l,l,l,l,l,l,A.dy,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.Ij(o,n?A.adk:A.WR,l,l)
break
case 3:w=new B.nC(A.J9,1,A.kY)
u=B.vH(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lG(A.vw,B.fc(t,l,l,l,B.hb(l,D.enx,l,l,l,l,l,l,l,A.dy,l,l,11,l,A.ew,l,!0,l,l,l,l),A.nG),l,new B.kM(E.aKs,new B.pL(w,w,w,w),u,A.hR,l),l,l,l,l)
break
case 2:p=C.i2K(d,e)
break
case 5:p=C.i2H(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hlN(-w,p)
w=i===D.cU
if(w){m=A.o.aD(d.Q,24)&255
if(m<255)p=new B.ati(m/255,p)}if(w)return new F.wj(k,l,j,l,new B.SQ(new B.kL(g,g,f,1/0),p))
if(i===D.lj){i=new B.nC(A.J9,1,A.kY)
i=B.lG(A.vw,p,l,new B.kM(A.pp,new B.pL(i,i,i,i),B.vH(4),A.hR,l),l,l,D.bCR,l)}else i=p
return new F.wj(k,l,j,l,new B.fU(g,f,i))},
i2L(d,e,f,g){var w,v=null,u=C.bBL(d.e),t=d.f
t=B.a([F.hkp(t!=null?B.lG(v,v,v,new B.kM(v,v,v,A.hR,new B.aXX(E.Wv,A.ac0,B.a([u,C.bBL(t)],x.cR),v)),v,v,v,v):B.lG(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.N(w,new C.frp(f,g),B.T(w).k("N<1,fh>")))
return F.cxf(t)},
h9o(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$h9o=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a4R(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.M)(t),++q){p=t[q]
o=new B.X5(A.wK,A.J6,D.bE2,null,null,null,!1,null)
o=new B.C8(o,new C.fNw(607,787,p,d))
o.N3(n,null)
r.push(o)}u=n.jy(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h9o,v)},
i2H(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.h89(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gaks()
if(h==null)h=A.azP
j=B.tJ(4279308564)
w=B.vH(18)
v=new B.nC(B.tJ(4287531653),3,A.kY)
u=i.length===0?"My links":i
u=B.a([B.xj(B.fc(u,m,m,m,B.hb(m,A.pp,m,m,m,m,m,m,m,A.dy,m,m,12,m,A.ew,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.xj(B.fc(A.a.i(l.c),m,m,m,D.flF,m)))
u.push(new B.fU(m,8,m))
for(t=B.d1(h,0,B.dB(8,"count",x.S),B.T(h).c),s=t.$ti,t=new B.bS(t,t.gL(0),s.k("bS<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tJ(4280690220)
o=new B.a9U(8,8)
n=A.a.i(r.b)
u.push(new B.nU(D.bx_,new C.axK(new C.aiM(q),B.lG(m,B.fc(n.length===0?A.a.i(r.c):n,m,m,m,D.fo2,A.nG),m,new B.kM(p,m,new B.ajc(o,o,o,o),A.hR,m),m,m,D.bDi,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.xj(B.fc(k,m,m,m,D.fnh,m))
u.push(new C.axK(C.hCZ(k),t))}return B.lG(m,B.za(u,A.MR,A.lK),m,new B.kM(j,new B.pL(v,v,v,v),w,A.hR,m),m,m,D.bxP,m)},
frq:function frq(){},
frp:function frp(d,e){this.a=d
this.b=e},
fNw:function fNw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aht(d){var w,v
for(w=0;w<32;++w){v=D.HH[w]
if(v.a===d)return v}return null},
hoq(d){var w,v,u=A.a.cv(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cD.aL(A.a.b7(d,u+1))
return w}catch(v){return null}},
d_(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hxq(d,e){return B.a4(d,!1).cd(B.dZ(new C.fUa(e),!0,null,x.fB))},
hxp(d,e){return B.bV(A.L,null,new C.fU9(e),d,!0,!0,!0,null,!1,!1,x.fB)},
j2:function j2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
EW:function EW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
NV:function NV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bkZ:function bkZ(d,e,f){var _=this
_.d=d
_.e=$
_.bz$=e
_.aa$=f
_.c=_.a=null},
e_8:function e_8(d){this.a=d},
e_7:function e_7(d,e,f){this.a=d
this.b=e
this.c=f},
e_6:function e_6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bsL:function bsL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f2J:function f2J(d,e){this.a=d
this.b=e},
bg4:function bg4(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b0l:function b0l(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cd6:function cd6(){},
cd7:function cd7(d){this.a=d},
cd8:function cd8(d,e,f){this.a=d
this.b=e
this.c=f},
cd9:function cd9(d,e,f){this.a=d
this.b=e
this.c=f},
fUa:function fUa(d){this.a=d},
ZV:function ZV(d,e){this.c=d
this.a=e},
aAZ:function aAZ(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
deK:function deK(d,e,f){this.a=d
this.b=e
this.c=f},
deP:function deP(d){this.a=d},
deQ:function deQ(d){this.a=d},
deO:function deO(d){this.a=d},
deR:function deR(d){this.a=d},
deN:function deN(d,e){this.a=d
this.b=e},
deS:function deS(d){this.a=d},
deM:function deM(d){this.a=d},
deT:function deT(d){this.a=d},
deL:function deL(d,e){this.a=d
this.b=e},
deU:function deU(d,e){this.a=d
this.b=e},
fU9:function fU9(d){this.a=d},
fU8:function fU8(d){this.a=d},
fU7:function fU7(d,e,f){this.a=d
this.b=e
this.c=f},
fU6:function fU6(d,e){this.a=d
this.b=e},
aMH:function aMH(){},
ijr(d){return B.bV(A.L,null,new C.fWw(),d,!0,!0,!0,null,!1,!1,x.N)},
fWw:function fWw(){},
a_f:function a_f(d){this.a=d},
bhz:function bhz(d){this.d=d
this.c=this.a=null},
dlv:function dlv(d){this.a=d},
dlw:function dlw(d,e){this.a=d
this.b=e},
dlx:function dlx(d){this.a=d},
i_2(d){var w,v=d.split("@")
if(v.length>1){w=B.cb(v[1],16)
if(w!=null)return B.b1(w)}return D.xY},
idC(d){var w,v=A.d.gI(d.split("@"))
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
idB(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gI(d.split("@")),p=C.i_2(d)
switch(q){case"shimmer":return B.nZ(A.Lb,g,new C.fK9(p,A.k.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.a_,r,A.b0,A.t,B.a([g,B.dX(B.b4(r,r,r,new C.bgV(e,f,p,r),A.ax),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dP(B.ed(A.A,B.d9(F.bVJ(g,B.TR(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.t(w*60,v*26))
case"goldframe":return new B.an(A.a_,r,A.b0,A.t,B.a([g,B.dX(B.b4(r,r,r,new C.bgD(e,p,r),A.ax),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.E(0.55+s*0.45,0,1)
return B.d9(B.eL(A.A,e*0.5,B.ed(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dr()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fG(e)
u.mP(Math.sin(e)*0.3)
return B.dP(B.fw(A.A,g,r,u,!0),new B.t(w*22,v*12))
case"rays":return new B.an(A.a_,r,A.b0,A.t,B.a([B.dX(B.b4(r,r,r,new C.bpz(e,f,p,r),A.ax),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.a_,r,A.b0,A.t,B.a([B.dX(B.b4(r,r,r,new C.bbr(e,f,p,r),A.ax),!0,r),g],x.p),r)
case"aurora":return new B.an(A.a_,r,A.b0,A.t,B.a([B.dX(B.b4(r,r,r,new C.bb5(e,f,p,r),A.ax),!0,r),g],x.p),r)
case"velvet":return new B.an(A.a_,r,A.b0,A.t,B.a([g,B.dX(B.b4(r,r,r,new C.bwy(e,p,r),A.ax),!0,r)],x.p),r)
case"sparkle":return new B.an(A.a_,r,A.b0,A.t,B.a([g,B.dX(B.b4(r,r,r,new C.bty(e,f,p,r),A.ax),!0,r)],x.p),r)
case"sheen":return new B.an(A.a_,r,A.b0,A.t,B.a([g,B.dX(B.b4(r,r,r,new C.bsH(e,p,r),A.ax),!0,r)],x.p),r)
case"filigree":return new B.an(A.a_,r,A.b0,A.t,B.a([g,B.dX(B.b4(r,r,r,new C.bfY(e,p,r),A.ax),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.aa,A.f,B.a([B.bT(0,B.dX(B.ed(A.A,B.c4(r,new B.o(r,r,r,r,r,new B.c2(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bg),1.6+s*0.15,r,r),!0,r),0,0,0),B.eL(A.A,s*0.06,B.ed(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fK9:function fK9(d,e){this.a=d
this.b=e},
bgV:function bgV(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bgD:function bgD(d,e,f){this.b=d
this.c=e
this.a=f},
bpz:function bpz(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbr:function bbr(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bb5:function bb5(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bwy:function bwy(d,e,f){this.b=d
this.c=e
this.a=f},
bty:function bty(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bsH:function bsH(d,e,f){this.b=d
this.c=e
this.a=f},
bfY:function bfY(d,e,f){this.b=d
this.d=e
this.a=f},
der:function der(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
xT:function xT(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fKc(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.lj},
idH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aW(j,new C.fKd())
s=A.d.gI(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.M)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gI(B.aRz(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
idG(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a0(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.cY(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.cY(w[2]):null
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
e=B.C(new B.Z(a4,new C.fCy(),f),f.k("L.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(A.dO,null,new C.fCz(e),d,!0,!0,!1,A.lN,!1,!1,x.N),$async$ah7)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gI(e).hK())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.ha1(d),$async$ah7)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.LF(d,"Search states\u2026","",A.kk,"Choose state"),$async$ah7)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.h8W(s)
if(p==null)p=A.d.gI(D.RJ)
f=C.cF()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cF()
m=p.e
l=C.fKe(p.d)
k=x.u
j=B.a([C.es(A.bi,!1,4279310375,A.aF,"marriage_locked_bg",4280640491,24,A.bp,A.a7,"",1,C.cF(),l,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cm,D.lM,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.D6(i,0.016,D.lk,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.D6(0,0.058,D.eU,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.D6(0,0.058,D.eU,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.L2("HATI YA NDOA",A.K,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.L2("Hati ya Makubaliano ya Ndoa",A.K,i,12,A.a7,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.h5N(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bBe("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a1T("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a1T("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a1T("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a1T("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bBe("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.D6(m,0.082,D.bh,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cF()
k.push(C.es(A.bi,!1,i,A.aF,"marriage_field_utangulizi:"+A.k.ac(0.78,3),4280640491,9.5,A.bp,A.cy,"",0.074,g,null,"","",0,!1,"",0,D.bh,4280172719,2,y.O,0,0,"",D.cm,D.cU,0.78,0.11,0.388))
A.d.v(k,C.h5N(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bBe("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hqs("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hqs("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a1T("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a1T("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bBd("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bBd("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bBe("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.L2("Mume",A.K,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.L2("Mke",A.K,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bBd("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bBd("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bBe("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a1T("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bBd("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a1T("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.h5N(0.22,0.83,0.56,4291404327,i),h)
h.push(C.L2("NGMY",A.K,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.L2("Nakala ya Hati",A.K,4291404327,9,A.a7,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.C3(null,null,null,null,D.ox,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rH(m,null,0,0,j,n,D.qC,"","","Hati ya Ndoa",D.dh)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ah7,v)},
fKd:function fKd(){},
fCy:function fCy(){},
fCz:function fCz(d){this.a=d},
fCw:function fCw(d){this.a=d},
fCx:function fCx(d){this.a=d},
i29(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
i28(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mZ
case"lineThrough":return A.wT
default:return A.aF}},
es(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eO(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hsz(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.Rt[w]
if(v.b===u)return v}return D.dh},
hZp(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.d_3[w]
if(v.b===u)return v}return D.cU},
i50(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dqf[w]
if(v.b===u)return v}return D.bh},
rH(d,e,f,g,h,i,j,k,l,m,n){return new C.lR(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hja(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.i0v(d.h(0,"layout"))
t=B.aK(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aK(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.hsz(d.h(0,"transition"))
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
else{n=J.dc(n,x.f)
n=B.cG(n,new C.ciE(),n.$ti.k("L.E"),x.F)
n=B.C(n,B.a7(n).k("L.E"))}return C.rH(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
i0v(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.arw[w]
if(v.b===u)return v}return D.mT},
C3(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.V(Date.now(),0,!1):a4
return new C.i4(p,t,a1,h,i,w,a0==null?B.a([C.rH(4294967295,null,0,0,null,C.cF(),D.qC,"","","",D.dh)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
Wv(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hXv(a6.h(0,"aspectRatio"))
t=B.aK(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.E(A.k.N(t),1,120)
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
else{f=J.b6(f,new C.cir(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.cis(),x.N)
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
else{g=J.dc(g,x.f)
g=B.cG(g,new C.cit(),g.$ti.k("L.E"),x.bt)
g=B.C(g,B.a7(g).k("L.E"))}return C.C3(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rH(4294967295,a3,0,0,a3,C.cF(),D.qC,"","","",D.dh)],x.g):g,v,p,o,s)},
kH(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hXv(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dr9[w]
if(v.b===u)return v}return D.Dp},
cF(){var w=Date.now(),v=$.j3
$.j3=v+1
return""+1000*w+"_"+v},
ciV(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a7(d.z)
if(e!==D.Dq){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cF()
v=C.es(A.K,!1,f.d.l(),A.aF,"",n,40,A.bp,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bh,m,2,o,0,0,"",D.cm,D.cU,0.84,0.08,0.3)
u=C.cF()
A.d.v(w,B.a([v,C.es(A.K,!1,f.e.l(),A.aF,"",n,20,A.bp,A.cy,"",0.12,u,p,"","",0,!1,"",0,D.bh,m,2,"Click to add subtitle",0,0,"",D.cm,D.cU,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cF()
v=C.es(A.bi,!1,f.d.l(),A.aF,"",n,32,A.bp,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bh,m,2,o,0,0,"",D.cm,D.cU,0.88,0.06,0.06)
u=C.cF()
A.d.v(w,B.a([v,C.es(A.bi,!0,f.e.l(),A.aF,"",n,20,A.bp,A.cy,"",0.68,u,p,"","",0,!1,"",0,D.bh,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cm,D.cU,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cF()
v=C.es(A.bi,!1,f.d.l(),A.aF,"",n,30,A.bp,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bh,m,2,"Two Column Slide",0,0,"",D.cm,D.cU,0.88,0.06,0.06)
u=C.cF()
t=f.e
u=C.es(A.bi,!0,t.l(),A.aF,"",n,18,A.bp,A.a7,"",0.7,u,p,"","",0,!1,"",0,D.bh,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cm,D.cU,0.42,0.06,0.22)
s=C.cF()
A.d.v(w,B.a([v,u,C.es(A.bi,!0,t.l(),A.aF,"",n,18,A.bp,A.a7,"",0.7,s,p,"","",0,!1,"",0,D.bh,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cm,D.cU,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.M(d.z,C.es(A.K,!1,4294967295,A.aF,"",n,42,A.bp,A.u,"",0.2,C.cF(),p,"","",0,!1,"",0,D.bh,m,2,"Section Header",0,0,"",D.cm,D.cU,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cF()
v=C.es(A.bi,!1,f.d.l(),A.aF,"",n,30,A.bp,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bh,m,2,"Compare",0,0,"",D.cm,D.cU,0.88,0.06,0.06)
u=C.cF()
t=f.c
u=C.es(A.bi,!1,l,A.aF,"",t.j(0.12).l(),24,A.bp,A.a7,"",0.68,u,p,"","",0,!1,"",0,D.bh,t.l(),2,"",0,0,"",D.cm,D.fa,0.42,0.06,0.22)
s=C.cF()
r=f.e
s=C.es(A.bi,!1,r.l(),A.aF,"",n,20,A.bp,A.Q,"",0.6,s,p,"","",0,!1,"",0,D.bh,m,2,"Option A",0,0,"",D.cm,D.cU,0.38,0.08,0.26)
q=C.cF()
t=C.es(A.bi,!1,l,A.aF,"",t.j(0.06).l(),24,A.bp,A.a7,"",0.68,q,p,"","",0,!1,"",0,D.bh,t.j(0.5).l(),2,"",0,0,"",D.cm,D.fa,0.42,0.52,0.22)
q=C.cF()
A.d.v(w,B.a([v,u,s,t,C.es(A.bi,!1,r.l(),A.aF,"",n,20,A.bp,A.Q,"",0.6,q,p,"","",0,!1,"",0,D.bh,m,2,"Option B",0,0,"",D.cm,D.cU,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cF()
v=C.es(A.K,!1,f.d.l(),A.aF,"",n,36,A.bp,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bh,m,2,"TERM / QUESTION",0,0,"",D.cm,D.cU,0.8,0.1,0.12)
u=C.cF()
A.d.v(w,B.a([v,C.es(A.K,!1,f.e.l(),A.aF,"",n,22,A.bp,A.cy,"",0.35,u,p,"","",0,!1,"",0,D.bh,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cm,D.cU,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cF()
v=C.es(A.bi,!1,f.d.l(),A.aF,"",n,28,A.bp,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bh,m,2,"Quiz Question",0,0,"",D.cm,D.cU,0.88,0.06,0.06)
u=C.cF()
A.d.v(w,B.a([v,C.es(A.bi,!1,f.e.l(),A.aF,"",n,20,A.bp,A.a7,"",0.62,u,p,"","",0,!1,"",0,D.bh,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cm,D.cU,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cF()
v=C.es(A.bi,!1,f.d.l(),A.aF,"",n,26,A.bp,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bh,m,2,"Worksheet / Assignment",0,0,"",D.cm,D.cU,0.88,0.06,0.04)
u=C.cF()
A.d.v(w,B.a([v,C.es(A.bi,!1,f.e.l(),A.aF,"",n,18,A.bp,A.a7,"",0.78,u,p,"","",0,!1,"",0,D.bh,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cm,D.cU,0.88,0.06,0.16)],x.u))
break}},
hP7(d){return A.d.dK(D.a4k,new C.ciW(d),new C.ciX())},
hP4(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.X.aM(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aW(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gT(t)
if(!q.b(u))continue
try{J.cc(v,C.Wv(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
h27(d,e){var w,v,u,t=B.U(x.N,x.I),s=new C.ciR(t)
for(w=J.aW(d);w.C();)s.$1(w.gT(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.M)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.C(new B.bc(t,w),w.k("L.E"))
A.d.aW(u,new C.ciQ())
return u},
hjd(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.ciM()
if(u!==w)return u>=w?d:e
return v.$1(d).cg(v.$1(e))?d:e},
arZ(d){return C.hP2(d)},
hP2(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$arZ=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.ciP()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a32(m),$async$arZ)
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
return B.b(B.az(),$async$arZ)
case 12:q=f
k=A.a.i(d.toLowerCase())
r=l.$1(B.aS(J.r(q.a,"ngmy_slides_decks_"+k)))
t=2
w=11
break
case 9:t=8
h=s.pop()
w=11
break
case 8:w=2
break
case 11:o=l.$1($.hjc.h(0,m))
n=C.h27(C.h27(j,r),o)
if(n.length===0){u=C.hjd(C.hjd(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$arZ,v)},
ciL(d){return C.hP1(d)},
hP1(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$ciL=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$ciL)
case 7:r=f
q=r.ty("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Y
q=B.k3(q,B.T(q).c)
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
return B.i($async$ciL,v)},
b2x(d,e){return C.hP3(d,e)},
hP3(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b2x=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b2x)
case 6:s=g
q=s.ty("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.M(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.LM(r,J.ad(r)-500):r
w=7
return B.b(s.au("StringList","ngmy_slides_deleted_"+p,o),$async$b2x)
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
return B.i($async$b2x,v)},
Ww(d,e){return C.hP5(d,e)},
hP5(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Ww=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hjb.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.arZ(a3),$async$Ww)
case 5:p=a6
case 4:w=6
return B.b(C.ciL(a3),$async$Ww)
case 6:o=a6
n=B.U(x.N,x.I)
for(m=J.aW(p);m.C();){l=m.gT(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.M)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbp())k=f===g.gbp()&&k.b>g.gcD()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("bc<2>")
l=m.k("Z<L.E>")
e=B.C(new B.Z(new B.bc(n,m),new C.ciS(o),l),l.k("L.E"))
A.d.aW(e,new C.ciT())
$.hjb.n(0,a0,e)
n=B.T(e).k("N<1,a8<n,@>>")
n=B.C(new B.N(e,new C.ciU(),n),n.k("ak.E"))
r=A.X.ap(n,null)
$.hjc.n(0,a0,r)
t=8
w=11
return B.b(B.ahV(a0,r),$async$Ww)
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
return B.b(B.az(),$async$Ww)
case 16:q=a6
w=17
return B.b(q.au("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$Ww)
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
return B.i($async$Ww,v)},
Jc:function Jc(d,e){this.a=d
this.b=e},
arX:function arX(d,e){this.a=d
this.b=e},
uX:function uX(d,e){this.a=d
this.b=e},
mH:function mH(d,e){this.a=d
this.b=e},
hG:function hG(d,e){this.a=d
this.b=e},
eO:function eO(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
lR:function lR(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ciF:function ciF(){},
ciG:function ciG(){},
ciE:function ciE(){},
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
ciu:function ciu(){},
civ:function civ(){},
cir:function cir(){},
cis:function cis(){},
cit:function cit(){},
jO:function jO(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ciW:function ciW(d){this.a=d},
ciX:function ciX(){},
ciR:function ciR(d){this.a=d},
ciQ:function ciQ(){},
ciM:function ciM(){},
ciN:function ciN(){},
ciO:function ciO(){},
ciP:function ciP(){},
ciS:function ciS(d){this.a=d},
ciT:function ciT(){},
ciU:function ciU(){},
idS(d,e){var w=x.N,v=B.U(w,x.F)
w=new C.fKM(e,v,d,B.aX(w))
w.$1(new C.fKI())
w.$1(new C.fKJ())
w.$1(new C.fKK())
w.$1(new C.fKL())
return v},
fKM:function fKM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fKI:function fKI(){},
fKJ:function fKJ(){},
fKK:function fKK(){},
fKL:function fKL(){},
b2u:function b2u(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ciA:function ciA(d){this.a=d},
ciz:function ciz(){},
ciB:function ciB(){},
ciC:function ciC(d,e){this.a=d
this.b=e},
ciD:function ciD(d){this.a=d},
ap6:function ap6(d,e){this.c=d
this.a=e},
bkK:function bkK(d,e){var _=this
_.d=$
_.bz$=d
_.aa$=e
_.c=_.a=null},
dME:function dME(){},
aMt:function aMt(){},
ciI(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$ciI=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.K(x.q).f.U(D.fb6)
u=!1
w=1
break}u=B.l4(!1,d,t,!1,null,A.a7_,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ciI,v)},
hP_(d){var w=A.d.bg(D.HQ,new C.ciJ(d))
if(w<0)return!0
return w>=4},
hP0(d){var w=A.d.bg($.bFG(),new C.ciK(d))
if(w<0)return!0
return w>=5},
ciJ:function ciJ(d){this.a=d},
ciK:function ciK(d){this.a=d},
ifB(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.x7()
$.pH().oV(t,new C.fND(s),!0)
u=B.a([B.BC(v,A.pq,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.fm7,v,v,v),A.f,v,v,new B.o(A.aS,v,v,w,v,v,A.n),v,v,v,v,A.mK,v,v,v),v,v,4,v,4,v))}return new B.an(A.a_,v,A.b0,A.t,u,v)},
fND:function fND(d){this.a=d},
ifc(){return C.h9h()},
ic5(){return C.bDB()},
iea(){return C.h98()},
aQD(d,e,f){var w=0,v=B.j(x.H),u
var $async$aQD=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fMJ(d,f),$async$aQD)
case 5:w=1
break
case 4:if(d.e!=null)d.K(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aQD,v)},
fMJ(d,e){var w=0,v=B.j(x.H),u
var $async$fMJ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bBM
if(u==null)u=e+".pdf"
w=2
return B.b(B.bV(A.L,null,new C.fMK(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fMJ)
case 2:return B.h(null,v)}})
return B.i($async$fMJ,v)},
fMK:function fMK(d,e){this.a=d
this.b=e},
adT:function adT(d,e,f){this.c=d
this.d=e
this.a=f},
evV:function evV(d,e){this.a=d
this.b=e},
evW:function evW(d,e){this.a=d
this.b=e},
evX:function evX(d,e){this.a=d
this.b=e},
evY:function evY(d){this.a=d},
ae9:function ae9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b2t(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b2s(g,m,f,d,e,h,l,k,j,o,i,null)},
hvy(d){return B.cy(new C.fKH(d))},
h9j(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
ifk(d){if(d===D.cm)return"None"
return C.h9j(d)},
bCh(d,e,f,g){return C.i57(d,e,f,g)},
i57(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bCh=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a4(d,!0)
if($.h65&&t.pM())t.eN()
$.h65=!0
s.a=null
w=3
return B.b(B.i0(A.bl,!0,"Animation preview",d,new C.fud(s,e,g,f),null,A.eO,!0,x.H),$async$bCh)
case 3:s=s.a
if(s!=null)s.a4(0)
$.h65=!1
case 1:return B.h(u,v)}})
return B.i($async$bCh,v)},
fXk(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fXk=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.E(B.aJ(d,A.bX,x.w).w.a.a*0.88,280,440)
s=f===D.cm
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.h9j(f)+" Slide transition preview"
s=s?Ag.G2:A.tW
w=3
return B.b(C.bCh(d,s,new B.a6(t,t*0.56,B.bx(B.m(14),new C.aK1(f,null),A.ap),null),r),$async$fXk)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fXk,v)},
huQ(d,e,f){var w,v,u=null,t=A.cu.av(0,A.k.E(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.d9(f,t)
case 2:case 17:return B.dP(B.d9(f,t),new B.t((1-t)*48,0))
case 3:return B.dP(B.d9(f,t),new B.t(-(1-t)*48,0))
case 4:case 21:return B.dP(B.d9(f,t),new B.t(0,(1-t)*36))
case 5:return B.dP(B.d9(f,t),new B.t(0,-(1-t)*36))
case 6:case 16:return B.ed(A.A,B.d9(f,t),0.5+t*0.5,u,u)
case 7:return B.ed(A.A,B.d9(f,t),1.4-t*0.4,u,u)
case 8:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fG((1-t)*1.2)
return B.fw(A.A,B.d9(f,t),u,w,!0)
case 9:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.kh((1-t)*1.2)
return B.fw(A.A,B.d9(f,t),u,w,!0)
case 10:case 19:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.mP((1-t)*0.8)
v=0.6+t*0.4
w.jV(v,v,v,1)
return B.fw(A.A,B.d9(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dP(B.d9(f,t),new B.t((1-t)*24,0))}},
bF9(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bF9=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.E(B.aJ(d,A.bX,x.w).w.a.a*0.88,300,440)
s=f===D.cm
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.h9j(f)+" Element animation preview"
s=s?Ag.G2:A.tW
w=3
return B.b(C.bCh(d,s,new B.a6(t,t*0.62,B.bx(B.m(14),new C.aAE(f,null),A.ap),null),r),$async$bF9)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bF9,v)},
ifj(d){var w,v,u,t,s=$.agz.W(0,d)
if(s!=null){$.agz.n(0,d,s)
return s}w=A.cD.aL(A.a.b7(d,A.a.cv(d,",")+1))
$.agz.n(0,d,w)
v=$.h6U=$.h6U+w.length
u=B.a7($.agz).k("cv<1>")
for(;;){if(!(v>41943040&&$.agz.a>1))break
t=new B.cv($.agz,u).gaf(0)
if(!t.C())B.b8(B.fs())
v-=$.agz.W(0,t.gT(0)).length
$.h6U=v}return w},
ieZ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).lb(0,d),j=B.C(k,B.a7(k).k("L.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.M)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ar(d,r,o)
m=f.$1(e)
v.push(new B.eu(n,l,l,A.cQ,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.Ta(s,A.u))
v.push(new B.eu(n,l,l,A.cQ,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.Ta(t,A.u))
v.push(new B.eu(n,l,l,A.cQ,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.Ta(u,A.cy))
v.push(new B.eu(n,l,l,A.cQ,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b7(d,r)
v.push(B.cS(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a31(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aG($.S().r,A.ah,n,n,B.a([],m))
m.D(new B.jF(e))
return m
case"rounded":m=new B.aG($.S().r,A.ah,n,n,B.a([],m))
w=e.gdC()*0.18
m.D(new B.iN(B.bu(e,new B.aP(w,w))))
return m
case"triangle":m=new B.aG($.S().r,A.ah,n,n,B.a([],m))
m.D(new B.aY(e.gbL().a,e.b))
w=e.d
m.D(new B.aq(e.c,w))
m.D(new B.aq(e.a,w))
m.D(new B.bt())
return m
case"hexagon":w=$.S()
m=B.a([],m)
v=new B.aG(w.r,A.ah,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.aY(p,o)
m.push(p)
o=v.f
if(o!=null)p.by(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.aq(p,o)
m.push(p)
o=v.f
if(o!=null)p.by(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}}v.D(new B.bt())
return v
case"diamond":m=new B.aG($.S().r,A.ah,n,n,B.a([],m))
m.D(new B.aY(e.gbL().a,e.b))
m.D(new B.aq(e.c,e.gbL().b))
m.D(new B.aq(e.gbL().a,e.d))
m.D(new B.aq(e.a,e.gbL().b))
m.D(new B.bt())
return m
case"arch":m=new B.aG($.S().r,A.ah,n,n,B.a([],m))
w=e.a
u=e.d
m.D(new B.aY(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.D(new B.aq(w,p))
m.bby(new B.t(t,p),new B.aP(s,s))
m.D(new B.aq(t,u))
m.D(new B.bt())
return m
default:m=new B.aG($.S().r,A.ah,n,n,B.a([],m))
m.D(new B.og(e))
return m}},
fIg(d,e,f){return B.cy(new C.fIh(D.f3n.t(0,d),d,f,e))},
b2s:function b2s(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ciy:function ciy(d){this.a=d},
cix:function cix(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ciw:function ciw(){},
b2p:function b2p(d,e){this.b=d
this.a=e},
fKH:function fKH(d){this.a=d},
fKG:function fKG(d,e){this.a=d
this.b=e},
fud:function fud(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fub:function fub(d){this.a=d},
fuc:function fuc(d,e){this.a=d
this.b=e},
aK1:function aK1(d,e){this.c=d
this.a=e},
bw3:function bw3(d,e){var _=this
_.d=$
_.bz$=d
_.aa$=e
_.c=_.a=null},
fbg:function fbg(d,e,f){this.a=d
this.b=e
this.c=f},
aKJ:function aKJ(d,e){this.b=d
this.a=e},
VD:function VD(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bkV:function bkV(d,e){var _=this
_.d=$
_.bz$=d
_.aa$=e
_.c=_.a=null},
dXS:function dXS(d){this.a=d},
dXR:function dXR(d){this.a=d},
dXQ:function dXQ(d){this.a=d},
Jb:function Jb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ciq:function ciq(d){this.a=d},
cip:function cip(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAE:function aAE(d,e){this.c=d
this.a=e},
bfo:function bfo(){this.d=0
this.c=this.a=null},
dbG:function dbG(d){this.a=d},
dbF:function dbF(d){this.a=d},
a8h:function a8h(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bly:function bly(d,e){var _=this
_.d=null
_.bz$=d
_.aa$=e
_.c=_.a=null},
eky:function eky(d,e,f){this.a=d
this.b=e
this.c=f},
b0o:function b0o(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bgB:function bgB(d,e,f){this.b=d
this.c=e
this.a=f},
brC:function brC(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f0b:function f0b(){},
fIh:function fIh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bsE:function bsE(d,e,f){this.b=d
this.c=e
this.a=f},
aMG:function aMG(){},
aN8:function aN8(){},
aOq:function aOq(){},
fLI(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fLI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xu.ca().Mq(D.do9,A.uc,!0),$async$fLI)
case 3:r=e
if(r==null||J.ct(r.a)){u=null
w=1
break}t=J.fq(r.a)
s=t.c
if(s==null)throw B.W("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.W("That file is too big. Use a file under 8 MB.")
u=C.ieT(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fLI,v)},
ieT(d,e){var w,v=d.toLowerCase()
if(A.a.c8(v,".pdf"))return new C.a8A(d,new B.a0E(A.cI.gcp().aL(e),"application/pdf"),"")
if(A.a.c8(v,".docx")){w=C.i6O(e)
if(A.a.i(w).length===0)throw B.W("No readable words were found in that Word file.")
return new C.a8A(d,null,w.length>6e4?A.a.ar(w,0,6e4):w)}w=A.cd.La(0,e,!0)
if(A.a.i(w).length===0)throw B.W("That file is empty.")
return new C.a8A(d,null,w.length>6e4?A.a.ar(w,0,6e4):w)},
i6O(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cDj().cN2(B.rr(d,A.id,o,o),o,o,!1).cOT(0,"word/document.xml")
if(n==null)return""
w=n.cX1()
v=A.cd.La(0,w==null?$.hxW():w,!0).split("</w:p>")
u=new B.fg("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).lb(0,r)
p=A.a.i(B.cG(q,new C.fxc(),B.a7(q).k("L.E"),t).hi(0))
if(p.length!==0){q=B.aN(p,"&lt;","<")
q=B.aN(q,"&gt;",">")
q=B.aN(q,"&quot;",'"')
q=B.aN(q,"&apos;","'")
q=B.aN(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a8A:function a8A(d,e,f){this.a=d
this.b=e
this.c=f},
fxc:function fxc(){},
hP6(d,e,f,g,h,i,j,k,l){return new C.Oo(l,e,d,g,f,i,h,j,k,null)},
Oo:function Oo(d,e,f,g,h,i,j,k,l,m){var _=this
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
aFt:function aFt(d,e,f,g,h,i,j,k,l){var _=this
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
_.bz$=k
_.aa$=l
_.c=_.a=null},
eC8:function eC8(d){this.a=d},
eC6:function eC6(){},
eC7:function eC7(d){this.a=d},
eyw:function eyw(){},
eyx:function eyx(){},
eyy:function eyy(d,e){this.a=d
this.b=e},
eA6:function eA6(d){this.a=d},
ezV:function ezV(){},
ezW:function ezW(){},
exU:function exU(){},
eBe:function eBe(d){this.a=d},
eC4:function eC4(d,e){this.a=d
this.b=e},
eA4:function eA4(d,e){this.a=d
this.b=e},
eBS:function eBS(d){this.a=d},
eBT:function eBT(){},
eBU:function eBU(){},
eBV:function eBV(d){this.a=d},
eBW:function eBW(){},
exi:function exi(d){this.a=d},
eC5:function eC5(){},
ezd:function ezd(d,e){this.a=d
this.b=e},
exg:function exg(d){this.a=d},
exh:function exh(d){this.a=d},
ezA:function ezA(d){this.a=d},
ezB:function ezB(d,e,f){this.a=d
this.b=e
this.c=f},
ezC:function ezC(d){this.a=d},
ezc:function ezc(){},
ezb:function ezb(d){this.a=d},
ez9:function ez9(){},
ez8:function ez8(d){this.a=d},
eza:function eza(){},
eys:function eys(d){this.a=d},
eyt:function eyt(d){this.a=d},
ezj:function ezj(d){this.a=d},
eze:function eze(d){this.a=d},
ezf:function ezf(d){this.a=d},
ezg:function ezg(d){this.a=d},
ezh:function ezh(d){this.a=d},
ezi:function ezi(d){this.a=d},
ezk:function ezk(d,e){this.a=d
this.b=e},
exk:function exk(){},
exl:function exl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ezv:function ezv(){},
ezw:function ezw(d,e){this.a=d
this.b=e},
ezt:function ezt(d,e,f){this.a=d
this.b=e
this.c=f},
ezu:function ezu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ezn:function ezn(d,e,f){this.a=d
this.b=e
this.c=f},
ezo:function ezo(d,e,f){this.a=d
this.b=e
this.c=f},
ezp:function ezp(d){this.a=d},
ezq:function ezq(d,e){this.a=d
this.b=e},
ezr:function ezr(d,e){this.a=d
this.b=e},
ezs:function ezs(d,e){this.a=d
this.b=e},
ezm:function ezm(d,e){this.a=d
this.b=e},
ezy:function ezy(d){this.a=d},
ezz:function ezz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ezx:function ezx(d){this.a=d},
ezQ:function ezQ(){},
ezR:function ezR(){},
ezS:function ezS(){},
ezT:function ezT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ezN:function ezN(d){this.a=d},
ezP:function ezP(){},
ezO:function ezO(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ezL:function ezL(d,e,f){this.a=d
this.b=e
this.c=f},
ezM:function ezM(d,e){this.a=d
this.b=e},
ezU:function ezU(){},
ezl:function ezl(d,e){this.a=d
this.b=e},
exB:function exB(){},
exC:function exC(d,e,f){this.a=d
this.b=e
this.c=f},
exD:function exD(d){this.a=d},
exE:function exE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
exA:function exA(d){this.a=d},
eA_:function eA_(d){this.a=d},
ezZ:function ezZ(d,e){this.a=d
this.b=e},
ezY:function ezY(d,e){this.a=d
this.b=e},
ezX:function ezX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eA0:function eA0(d,e){this.a=d
this.b=e},
ewf:function ewf(d,e){this.a=d
this.b=e},
exz:function exz(d,e){this.a=d
this.b=e},
exx:function exx(d){this.a=d},
eA8:function eA8(d,e,f){this.a=d
this.b=e
this.c=f},
ext:function ext(d,e){this.a=d
this.b=e},
exs:function exs(d){this.a=d},
eA7:function eA7(d,e,f){this.a=d
this.b=e
this.c=f},
exj:function exj(d){this.a=d},
exV:function exV(){},
eBQ:function eBQ(d,e){this.a=d
this.b=e},
eBR:function eBR(d,e,f){this.a=d
this.b=e
this.c=f},
eBf:function eBf(d,e,f){this.a=d
this.b=e
this.c=f},
ewg:function ewg(d){this.a=d},
ewd:function ewd(d,e){this.a=d
this.b=e},
ew3:function ew3(d,e){this.a=d
this.b=e},
ew0:function ew0(d){this.a=d},
ew_:function ew_(d,e){this.a=d
this.b=e},
ew1:function ew1(d,e){this.a=d
this.b=e},
exv:function exv(d){this.a=d},
exw:function exw(d,e){this.a=d
this.b=e},
exu:function exu(d){this.a=d},
ewI:function ewI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ewJ:function ewJ(d,e){this.a=d
this.b=e},
ewN:function ewN(d,e){this.a=d
this.b=e},
ewO:function ewO(d){this.a=d},
ewL:function ewL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ewM:function ewM(d){this.a=d},
ewK:function ewK(){},
ewH:function ewH(d,e,f){this.a=d
this.b=e
this.c=f},
ezK:function ezK(d,e){this.a=d
this.b=e},
eBZ:function eBZ(d){this.a=d},
eC_:function eC_(d,e){this.a=d
this.b=e},
eC0:function eC0(d){this.a=d},
eC1:function eC1(d,e,f){this.a=d
this.b=e
this.c=f},
eBY:function eBY(d){this.a=d},
eBv:function eBv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBu:function eBu(d,e,f){this.a=d
this.b=e
this.c=f},
eBt:function eBt(){},
eBs:function eBs(d,e,f){this.a=d
this.b=e
this.c=f},
eBr:function eBr(d,e){this.a=d
this.b=e},
eBo:function eBo(d,e,f){this.a=d
this.b=e
this.c=f},
eBm:function eBm(d){this.a=d},
eBn:function eBn(d){this.a=d},
eBq:function eBq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eBp:function eBp(d){this.a=d},
eyo:function eyo(d,e){this.a=d
this.b=e},
eyn:function eyn(d,e){this.a=d
this.b=e},
eBg:function eBg(){},
eBP:function eBP(d,e){this.a=d
this.b=e},
eBN:function eBN(d){this.a=d},
eBO:function eBO(d){this.a=d},
ew8:function ew8(d,e){this.a=d
this.b=e},
ew6:function ew6(d){this.a=d},
ew7:function ew7(d){this.a=d},
ew9:function ew9(d,e){this.a=d
this.b=e},
ewa:function ewa(d,e,f){this.a=d
this.b=e
this.c=f},
ewe:function ewe(d,e){this.a=d
this.b=e},
ew5:function ew5(d,e,f){this.a=d
this.b=e
this.c=f},
ew4:function ew4(d){this.a=d},
eA5:function eA5(d,e,f){this.a=d
this.b=e
this.c=f},
eBX:function eBX(d,e,f){this.a=d
this.b=e
this.c=f},
eyr:function eyr(d,e,f){this.a=d
this.b=e
this.c=f},
eyq:function eyq(){},
ewR:function ewR(d,e,f){this.a=d
this.b=e
this.c=f},
ewS:function ewS(d){this.a=d},
ew2:function ew2(d,e){this.a=d
this.b=e},
exT:function exT(d,e){this.a=d
this.b=e},
ewb:function ewb(d,e){this.a=d
this.b=e},
ewk:function ewk(d){this.a=d},
ewl:function ewl(d,e){this.a=d
this.b=e},
ewm:function ewm(d,e){this.a=d
this.b=e},
ewj:function ewj(d){this.a=d},
ewx:function ewx(d,e){this.a=d
this.b=e},
ewi:function ewi(d){this.a=d},
ewA:function ewA(d){this.a=d},
ewB:function ewB(d){this.a=d},
ewC:function ewC(d){this.a=d},
ewD:function ewD(d){this.a=d},
ewE:function ewE(d){this.a=d},
ewF:function ewF(){},
ewG:function ewG(){},
ewn:function ewn(d){this.a=d},
ewo:function ewo(d){this.a=d},
ewp:function ewp(d){this.a=d},
ewq:function ewq(d){this.a=d},
ewr:function ewr(d){this.a=d},
ews:function ews(d){this.a=d},
ewt:function ewt(d){this.a=d},
ewu:function ewu(d){this.a=d},
ewv:function ewv(d){this.a=d},
eww:function eww(d){this.a=d},
ewy:function ewy(d){this.a=d},
ewz:function ewz(d,e){this.a=d
this.b=e},
exS:function exS(d,e,f){this.a=d
this.b=e
this.c=f},
exR:function exR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
exQ:function exQ(d,e,f){this.a=d
this.b=e
this.c=f},
exP:function exP(d,e){this.a=d
this.b=e},
ewc:function ewc(d,e){this.a=d
this.b=e},
ewV:function ewV(d){this.a=d},
ewU:function ewU(d){this.a=d},
ewT:function ewT(d,e){this.a=d
this.b=e},
ewW:function ewW(d){this.a=d},
ewX:function ewX(d){this.a=d},
ewY:function ewY(d,e){this.a=d
this.b=e},
exy:function exy(d){this.a=d},
ezJ:function ezJ(d,e){this.a=d
this.b=e},
ezI:function ezI(d,e){this.a=d
this.b=e},
ezH:function ezH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ezF:function ezF(d){this.a=d},
ezG:function ezG(d,e){this.a=d
this.b=e},
ezD:function ezD(){},
ezE:function ezE(){},
eBh:function eBh(){},
eBi:function eBi(d,e){this.a=d
this.b=e},
eBj:function eBj(){},
eBk:function eBk(d){this.a=d},
eBl:function eBl(d,e){this.a=d
this.b=e},
ewh:function ewh(d,e){this.a=d
this.b=e},
exm:function exm(){},
exn:function exn(){},
exo:function exo(){},
exr:function exr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
exq:function exq(d,e){this.a=d
this.b=e},
exp:function exp(d,e,f){this.a=d
this.b=e
this.c=f},
eyS:function eyS(d){this.a=d},
eyR:function eyR(){},
eyT:function eyT(d,e){this.a=d
this.b=e},
eyU:function eyU(d,e){this.a=d
this.b=e},
eyQ:function eyQ(d){this.a=d},
eyV:function eyV(d,e){this.a=d
this.b=e},
eyP:function eyP(d){this.a=d},
eyW:function eyW(d,e){this.a=d
this.b=e},
eyO:function eyO(d){this.a=d},
eyX:function eyX(d,e){this.a=d
this.b=e},
eyN:function eyN(d){this.a=d},
eyY:function eyY(d,e){this.a=d
this.b=e},
eyM:function eyM(d,e){this.a=d
this.b=e},
eyZ:function eyZ(d,e){this.a=d
this.b=e},
eyL:function eyL(d){this.a=d},
ez_:function ez_(d,e){this.a=d
this.b=e},
eyK:function eyK(d){this.a=d},
eyD:function eyD(d,e){this.a=d
this.b=e},
eyE:function eyE(d){this.a=d},
eyF:function eyF(d){this.a=d},
eyC:function eyC(d){this.a=d},
eyG:function eyG(d,e){this.a=d
this.b=e},
eyB:function eyB(d){this.a=d},
eyH:function eyH(d,e){this.a=d
this.b=e},
eyA:function eyA(d){this.a=d},
eyI:function eyI(d,e){this.a=d
this.b=e},
eyz:function eyz(d){this.a=d},
eyJ:function eyJ(d){this.a=d},
exL:function exL(d){this.a=d},
exM:function exM(d){this.a=d},
exO:function exO(d){this.a=d},
exG:function exG(d){this.a=d},
exF:function exF(d,e){this.a=d
this.b=e},
exH:function exH(d,e){this.a=d
this.b=e},
exI:function exI(d){this.a=d},
exJ:function exJ(d){this.a=d},
exK:function exK(d,e){this.a=d
this.b=e},
exN:function exN(d){this.a=d},
eC2:function eC2(d){this.a=d},
eC3:function eC3(d){this.a=d},
ez2:function ez2(d,e){this.a=d
this.b=e},
ez1:function ez1(d,e){this.a=d
this.b=e},
ez0:function ez0(d,e){this.a=d
this.b=e},
ez3:function ez3(d){this.a=d},
ez4:function ez4(d){this.a=d},
eAr:function eAr(d,e){this.a=d
this.b=e},
eAs:function eAs(d){this.a=d},
eAt:function eAt(d){this.a=d},
eAE:function eAE(d){this.a=d},
eAP:function eAP(d){this.a=d},
eB_:function eB_(d){this.a=d},
eB6:function eB6(d){this.a=d},
eB7:function eB7(d){this.a=d},
eB8:function eB8(d){this.a=d},
eB9:function eB9(d){this.a=d},
eBa:function eBa(d,e){this.a=d
this.b=e},
eAu:function eAu(d){this.a=d},
eAv:function eAv(d){this.a=d},
eAw:function eAw(d){this.a=d},
eAx:function eAx(d){this.a=d},
eAy:function eAy(d){this.a=d},
eAz:function eAz(d){this.a=d},
eAA:function eAA(d){this.a=d},
eAB:function eAB(d){this.a=d},
eAC:function eAC(d){this.a=d},
eAD:function eAD(d){this.a=d},
eAF:function eAF(d){this.a=d},
eAG:function eAG(d){this.a=d},
eAH:function eAH(d){this.a=d},
eAI:function eAI(d){this.a=d},
eAJ:function eAJ(d){this.a=d},
eAK:function eAK(d){this.a=d},
eAL:function eAL(d){this.a=d},
eAM:function eAM(d){this.a=d},
eAN:function eAN(d){this.a=d},
eAh:function eAh(d){this.a=d},
eAO:function eAO(d){this.a=d},
eAp:function eAp(d){this.a=d},
eAQ:function eAQ(d){this.a=d},
eAo:function eAo(d,e){this.a=d
this.b=e},
eAR:function eAR(d,e){this.a=d
this.b=e},
eAS:function eAS(d,e){this.a=d
this.b=e},
eAn:function eAn(d,e,f){this.a=d
this.b=e
this.c=f},
eAd:function eAd(d,e){this.a=d
this.b=e},
eAq:function eAq(d){this.a=d},
eBb:function eBb(d,e){this.a=d
this.b=e},
eBd:function eBd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eBc:function eBc(d,e){this.a=d
this.b=e},
eAT:function eAT(d,e,f){this.a=d
this.b=e
this.c=f},
eAm:function eAm(d,e,f){this.a=d
this.b=e
this.c=f},
eAc:function eAc(d,e,f){this.a=d
this.b=e
this.c=f},
eAa:function eAa(d,e){this.a=d
this.b=e},
eAU:function eAU(d,e){this.a=d
this.b=e},
eAl:function eAl(d,e){this.a=d
this.b=e},
eAb:function eAb(d,e){this.a=d
this.b=e},
eA9:function eA9(d,e){this.a=d
this.b=e},
eAV:function eAV(d){this.a=d},
eAk:function eAk(d){this.a=d},
eAW:function eAW(d){this.a=d},
eAX:function eAX(d){this.a=d},
eAY:function eAY(d){this.a=d},
eAZ:function eAZ(d){this.a=d},
eAj:function eAj(d){this.a=d},
eB0:function eB0(d){this.a=d},
eB1:function eB1(d){this.a=d},
eB2:function eB2(d,e){this.a=d
this.b=e},
eAi:function eAi(d){this.a=d},
eB3:function eB3(d,e){this.a=d
this.b=e},
eAg:function eAg(d){this.a=d},
eB4:function eB4(d,e){this.a=d
this.b=e},
eAf:function eAf(d){this.a=d},
eB5:function eB5(d,e){this.a=d
this.b=e},
eAe:function eAe(d){this.a=d},
ewQ:function ewQ(d,e,f){this.a=d
this.b=e
this.c=f},
ewP:function ewP(d,e){this.a=d
this.b=e},
eBy:function eBy(d,e){this.a=d
this.b=e},
eBx:function eBx(d,e){this.a=d
this.b=e},
eBz:function eBz(d,e){this.a=d
this.b=e},
eBw:function eBw(d,e){this.a=d
this.b=e},
exY:function exY(d,e){this.a=d
this.b=e},
exX:function exX(d){this.a=d},
exZ:function exZ(d,e){this.a=d
this.b=e},
exW:function exW(d){this.a=d},
eyv:function eyv(){},
eyu:function eyu(){},
eBL:function eBL(d){this.a=d},
eBK:function eBK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBJ:function eBJ(d,e){this.a=d
this.b=e},
eBE:function eBE(d,e){this.a=d
this.b=e},
eBI:function eBI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBF:function eBF(d,e){this.a=d
this.b=e},
eBA:function eBA(d){this.a=d},
eBB:function eBB(d){this.a=d},
eBC:function eBC(d){this.a=d},
eBD:function eBD(d){this.a=d},
eBG:function eBG(d,e){this.a=d
this.b=e},
eBH:function eBH(d,e){this.a=d
this.b=e},
eBM:function eBM(d){this.a=d},
exf:function exf(d){this.a=d},
exe:function exe(d,e,f){this.a=d
this.b=e
this.c=f},
exd:function exd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ex2:function ex2(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ex3:function ex3(d,e){this.a=d
this.b=e},
ex4:function ex4(d,e){this.a=d
this.b=e},
ex5:function ex5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ex1:function ex1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ex6:function ex6(d,e){this.a=d
this.b=e},
ex8:function ex8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ex7:function ex7(d,e){this.a=d
this.b=e},
ex9:function ex9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ex0:function ex0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
exa:function exa(d,e){this.a=d
this.b=e},
ex_:function ex_(d,e){this.a=d
this.b=e},
exb:function exb(d,e){this.a=d
this.b=e},
ewZ:function ewZ(d){this.a=d},
exc:function exc(d,e){this.a=d
this.b=e},
ez6:function ez6(d){this.a=d},
ez5:function ez5(d){this.a=d},
ez7:function ez7(d,e){this.a=d
this.b=e},
eyb:function eyb(d,e){this.a=d
this.b=e},
eyc:function eyc(d,e){this.a=d
this.b=e},
eya:function eya(d,e){this.a=d
this.b=e},
eyd:function eyd(d,e){this.a=d
this.b=e},
ey9:function ey9(d,e){this.a=d
this.b=e},
eye:function eye(d,e){this.a=d
this.b=e},
ey8:function ey8(d,e){this.a=d
this.b=e},
eyf:function eyf(d,e){this.a=d
this.b=e},
ey7:function ey7(d,e){this.a=d
this.b=e},
eyg:function eyg(d,e){this.a=d
this.b=e},
ey6:function ey6(d,e){this.a=d
this.b=e},
eyh:function eyh(d,e,f){this.a=d
this.b=e
this.c=f},
ey5:function ey5(d,e){this.a=d
this.b=e},
eyi:function eyi(d,e,f){this.a=d
this.b=e
this.c=f},
ey4:function ey4(d,e){this.a=d
this.b=e},
eyj:function eyj(d,e){this.a=d
this.b=e},
ey3:function ey3(d,e,f){this.a=d
this.b=e
this.c=f},
ey0:function ey0(d,e){this.a=d
this.b=e},
eyk:function eyk(d,e){this.a=d
this.b=e},
ey2:function ey2(d,e){this.a=d
this.b=e},
eyl:function eyl(d,e){this.a=d
this.b=e},
ey1:function ey1(d,e,f){this.a=d
this.b=e
this.c=f},
ey_:function ey_(d,e){this.a=d
this.b=e},
eym:function eym(d,e){this.a=d
this.b=e},
eyp:function eyp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
evZ:function evZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eA3:function eA3(d,e){this.a=d
this.b=e},
eA1:function eA1(d){this.a=d},
eA2:function eA2(d,e){this.a=d
this.b=e},
afF:function afF(d,e,f){this.a=d
this.b=e
this.c=f},
aA_:function aA_(d,e){this.c=d
this.a=e},
bea:function bea(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b5$=e
_.c=_.a=null},
d7i:function d7i(d){this.a=d},
d7h:function d7h(d){this.a=d},
bep:function bep(d,e){this.c=d
this.a=e},
d7G:function d7G(d){this.a=d},
d7H:function d7H(d){this.a=d},
Kf:function Kf(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
be9:function be9(){this.d=!1
this.c=this.a=null},
d7f:function d7f(d){this.a=d},
d7b:function d7b(d){this.a=d},
d7g:function d7g(d){this.a=d},
d7a:function d7a(d){this.a=d},
d7e:function d7e(d){this.a=d},
d7c:function d7c(d){this.a=d},
d7d:function d7d(d,e){this.a=d
this.b=e},
Q7:function Q7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a07:function a07(d,e,f){this.c=d
this.d=e
this.a=f},
aFw:function aFw(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bz$=e
_.aa$=f
_.c=_.a=null},
eCJ:function eCJ(){},
eCz:function eCz(d){this.a=d},
eCI:function eCI(d){this.a=d},
eCA:function eCA(d){this.a=d},
eCB:function eCB(d){this.a=d},
eCv:function eCv(d){this.a=d},
eCw:function eCw(d,e){this.a=d
this.b=e},
eCx:function eCx(d){this.a=d},
eCy:function eCy(d,e,f){this.a=d
this.b=e
this.c=f},
eCG:function eCG(){},
eCH:function eCH(d){this.a=d},
eCC:function eCC(d){this.a=d},
eCD:function eCD(d){this.a=d},
eCE:function eCE(d){this.a=d},
eCF:function eCF(d){this.a=d},
eCK:function eCK(d,e,f){this.a=d
this.b=e
this.c=f},
eCM:function eCM(d,e){this.a=d
this.b=e},
eCL:function eCL(d){this.a=d},
Kl:function Kl(d,e){this.c=d
this.a=e},
bt8:function bt8(d,e){this.b=d
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
aLq:function aLq(){},
aNj:function aNj(){},
byQ:function byQ(){},
aNk:function aNk(){},
fNE(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fNE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xu.ca().Mq(B.a(["pdf"],x.s),A.uc,!0),$async$fNE)
case 3:q=e
if(q==null||J.ct(q.a)){u=null
w=1
break}t=J.fq(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bqk(s,"data:application/pdf;base64,"+A.cI.gcp().aL(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fNE,v)},
ifv(d){var w,v,u,t,s,r
try{w=B.jx(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cC(w)
if(v!=null){s=v.b[1]
s.toString
u=B.cb(s,null)
if(u!=null&&u>0){s=A.o.E(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).lb(0,w).gL(0)
if(t>0){s=J.aS1(t,1,200)
return s}}catch(r){}return 1},
fNv(d){return C.ifu(d)},
ifu(d){var w=0,v=B.j(x.T),u
var $async$fNv=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fNv,v)},
bEm(d,e,f,g){return C.ifE(d,e,f,g)},
ifE(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bEm=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.ee(b6,x.co).gaf(0).C()){u=null
w=1
break}t=4
r=A.k.E(b7.a,80,2400)
q=A.k.E(b7.b,80,2400)
p=B.hw8(b9,new B.av(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.jV(a9),b0)
b0=n
a9=k.b
n=Math.min(B.jV(b0),a9)
a9=m
b0=k.a
m=Math.max(B.jV(a9),b0)
b0=l
a9=k.b
l=Math.max(B.jV(b0),a9)}o=A.k.E(o-0.04,0,1)
n=A.k.E(n-0.04,0,1)
m=A.k.E(m+0.04,0,1)
l=A.k.E(l+0.04,0,1)
j=A.k.E(m-o,0.12,1)
i=A.k.E(l-n,0.12,1)
h=A.o.E(A.k.V(800*(i/j)),180,420)
$.S()
g=new B.p0()
f=B.z9(g,null)
a7=B.I()
a7.r=A.r8.gp(0)
f.aP(new B.a3(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.I()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bE
b1.e=A.dT
b1.b=A.ab
b1.f=!0
d=b1
a0=null
for(a7=b6.length,a8=0;a8<b6.length;b6.length===a7||(0,B.M)(b6),++a8){a1=b6[a8]
if(a1==null){a0=null
continue}a2=new B.t((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null){a9=a0
b0=a2
b2=d.G()
b3=f.a
b3.drawLine.apply(b3,[a9.a,a9.b,b0.a,b0.b,b2])
b2.delete()}a0=a2}a3=g.nf()
w=7
return B.b(a3.x9(800,h),$async$bEm)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.ht(A.h9),$async$bEm)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.eR(A.dJ.gaR(a5))
a7=A.cI.gcp().aL(a7)
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
return B.i($async$bEm,v)},
aRb(d,e,f){return C.ifs(d,e,f)},
ifs(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aRb=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.av:e
r.c=f==null?5.2:f
w=3
return B.b(B.ai8(d,e,f,new C.fNt(r,q),q,"Sign document"),$async$aRb)
case 3:if(!new B.ee(q,x.co).gaf(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bEm(q,t,r.b,r.c),$async$aRb)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b2w(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aRb,v)},
ifC(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hpd(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hpd(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b7(A.a.aS(A.o.fH(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.M)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.ac(q.c*100,2)+"%;top:"+A.k.ac(q.d*100,2)+"%;width:"+A.k.ac(q.e*100,2)+"%;height:"+A.k.ac(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b7(A.a.aS(A.o.fH(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aN(n,"&",h)
n=B.aN(n,"<",g)
n=B.aN(n,">",f)
d+='<div class="txt" style="font-size:'+B.w(p)+"px;color:#"+o+'">'+B.aN(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lM&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aN(p,"&",h)
p=B.aN(p,"<",g)
p=B.aN(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aN(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hoP(q.ay)+";border:2px solid "+C.hoP(q.ch)+'"></div>'
break
case 5:l=C.h89(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aN(n,"&",h)
n=B.aN(n,"<",g)
n=B.aN(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aN(n,'"',e)+"</div>")
p=p?null:l.gaks()
if(p==null)p=A.azP
n=B.T(p)
k=n.k("jy<1>")
j=new B.jy(p,0,8,k)
j.pg(p,0,8,n.c)
j=new B.bS(j,j.gL(0),k.k("bS<ak.E>"))
k=k.k("ak.E")
while(j.C()){p=j.d
if(p==null)p=k.a(p)
i=A.a.i(p.b)
if(i.length===0)i=A.a.i(p.c)
p=A.a.i(p.c)
p=B.aN(p,"&",h)
p=B.aN(p,"<",g)
p=B.aN(p,">",f)
p=B.aN(p,'"',e)
n=B.aN(i,"&",h)
n=B.aN(n,"<",g)
n=B.aN(n,">",f)
d+='<a href="'+p+'" target="_blank" rel="noopener" style="display:block;margin-top:6px;padding:6px;border-radius:8px;background:#26262C;color:#fff;text-decoration:none;font-size:11px">'+B.aN(n,'"',e)+"</a>"}d+="</div>"
break}d+="</div>\n"}d+="</div>\n</div>\n"}d+="</body></html>\n"
return d.charCodeAt(0)==0?d:d},
hoP(d){var w=A.o.aD(d,24)
return"rgba("+(A.o.aD(d,16)&255)+","+(A.o.aD(d,8)&255)+","+(d&255)+","+A.k.ac((w&255)/255,3)+")"},
hpd(d){var w=B.aN(d,"&","&amp;")
w=B.aN(w,"<","&lt;")
w=B.aN(w,">","&gt;")
return B.aN(w,'"',"&quot;")},
bEk(d,e){var w=0,v=B.j(x.H)
var $async$bEk=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cj(null,null,!0,null,new C.fNC(e,C.ifC(e),d),d,null,!0,!0,x.H),$async$bEk)
case 2:return B.h(null,v)}})
return B.i($async$bEk,v)},
bEl(){var w=0,v=B.j(x.T),u,t,s
var $async$bEl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A5.H4(92,2400),$async$bEl)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fNv(s),$async$bEl)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEl,v)},
aRc(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aRc=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.h9o(d),$async$aRc)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aN(s,r,"_"))
u=Z.fQe(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aRc,v)},
hj9(d,e){var w
if(e<0||e>=d.r.length)return A.o.E(d.e,1,120)
w=d.r[e].w
return A.o.E(w>0?w:d.e,1,120)},
b2w:function b2w(d,e,f){this.a=d
this.b=e
this.c=f},
fNt:function fNt(d,e){this.a=d
this.b=e},
fNC:function fNC(d,e,f){this.a=d
this.b=e
this.c=f},
fNz:function fNz(d){this.a=d},
fNA:function fNA(d,e,f){this.a=d
this.b=e
this.c=f},
fNB:function fNB(d,e,f){this.a=d
this.b=e
this.c=f},
ift(d){return C.kH(d.w)},
ifA(d){var w,v,u,t
if(d.length===0||!A.d.d_(d,C.ihk()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yW(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aN(w.toUpperCase(),v,"")
w=$.hBZ()
if(w.b.test(u))return u
return null},
hwa(d,e,f){var w,v,u=C.hKK(d),t=$.od()
for(w=0;w<80;++w){v=u+A.a.aS(A.o.u(t.aq(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aS(A.o.u(Date.now()%1000),3,"0")},
ifG(d){var w,v,u,t,s=B.aX(x.N)
for(w=J.aW(d.a),v=new B.f5(w,d.b);v.C();){u=w.gT(w).y
t=C.yW(u==null?"":u)
if(t!=null)s.M(0,t)}return s},
fNr(d,e){var w,v=d.y,u=C.yW(v==null?"":v)
if(u!=null)return d.y=u
w=C.ifG(new B.Z(e,new C.fNs(d),B.T(e).k("Z<1>")))
v=d.x
return d.y=C.hwa(v==null?"":v,null,w)},
ifF(d){var w,v
if(d.length!==1)return null
w=A.d.gI(d)
if(!C.kH(w.w))return null
v=w.y
return C.yW(v==null?"":v)},
hP8(){var w,v=$.od(),u=J.dY(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aq(32)]
return"SL"+A.d.hi(u)},
Wz(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Wz=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$Wz)
case 3:if(!e){u=B.U(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f6("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bK),$async$Wz)
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
return B.i($async$Wz,v)},
WA(d){return C.hP9(d)},
hP9(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$WA=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$WA)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hJ("ngmy_slides_transfer_qr_stashes_v1",B.G(["stashes",d,"savedAt",new B.V(Date.now(),0,!1).a8().ae()],x.N,x.z),!1,!1,A.cG,null),$async$WA)
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
return B.i($async$WA,v)},
a8C(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a8C=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$a8C)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.Wz(),$async$a8C)
case 4:s=a6
r=C.yW(a2==null?"":a2)
if(r==null)r=a3!=null?C.hwa(a3,null,A.vb):null
q=x.N
p=B.aX(q)
for(o=J.dn(s),n=J.aW(o.gi0(s)),m=x.f;n.C();){l=n.gT(n)
if(!m.b(l))continue
k=J.r(l,"claimCode")
j=C.yW(J.k(k==null?"":k))
if(j!=null)p.M(0,j)}n=o.gdS(s),n=n.gaf(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gT(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a2(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dN.aL(t)
g.n(0,"payload",A.cI.gcp().aL(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.V(Date.now(),0,!1).a8().ae())
if(D.U_.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yW(J.k(q==null?"":q))
if(f==null)f=C.hje(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.WA(s),$async$a8C)
case 7:u=new B.aH3(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hP8()
n=r==null
d=n?C.hje(p):r
q=B.U(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dN.aL(t)
q.n(0,"payload",A.cI.gcp().aL(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.V(Date.now(),0,!1).a8().ae())
if(D.U_.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.WA(s),$async$a8C)
case 8:u=new B.aH3(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8C,v)},
hje(d){var w,v,u=$.od()
for(w=0;w<200;++w){v="SL"+A.a.aS(A.o.u(u.aq(1000)),3,"0")
if(d.M(0,v))return v}return"SL"+A.a.aS(A.o.u(Date.now()%1000),3,"0")},
as0(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$as0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$as0)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.Wz(),$async$as0)
case 6:t=f
s=J.a5(t)
r=s.gL(t)
s.bs(t,new C.ciY(q))
w=s.gL(t)!==r?7:8
break
case 7:w=9
return B.b(C.WA(t),$async$as0)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$as0,v)},
as_(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$as_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yW(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$as_)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.Wz(),$async$as_)
case 6:t=o.jZ(f),t=t.gaf(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gT(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.r(q,"claimCode")
if(C.yW(J.k(q==null?"":q))===p){u=C.a8B(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$as_,v)},
a8B(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a8B=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$a8B)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.Wz(),$async$a8B)
case 6:p=a1
o=J.a5(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a5(n)
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
try{s=A.cd.cB(0,A.cD.aL(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.U_.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.A(l.h(n,"sharedByAdmin"),!0))try{r=A.X.aM(0,s,null)
if(m.b(r)){q=B.a2(r,x.N,x.z)
J.aI(q,"sharedByAdmin",!0)
s=A.X.ap(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dR(B.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.V(Date.now(),0,!1).a8().ae())
o.n(p,g,l)}w=7
return B.b(C.WA(p),$async$a8B)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8B,v)},
ifz(d,e,f){var w,v=B.U(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.V(Date.now(),0,!1).a8().ae())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.T(d).k("N<1,a8<n,@>>")
w=B.C(new B.N(d,new C.fNy(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fNG(d,e,f,g){var w
if(e!=null){w=B.U(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.V(Date.now(),0,!1).a8().ae())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ag())
return A.X.ap(w,null)}return A.X.ap(C.ifz(d==null?B.a([],x.D):d,f,g),null)},
fNF(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fNF=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a8C(h,d,e,f,g),$async$fNF)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yW(e==null?"":e)
u=new B.aGQ(s,t)
w=1
break}t=A.dN.aL(h)
t=A.kv.gcp().aL(t)
u=new B.aGQ(C.yW(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fNF,v)},
h9q(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d3(q,"NGMYSLIDESYNC2|"))return!0
if(J.d3(q,"NGMYSLIDECODE|"))return!0
if(J.d3(q,"NGMY_SL:"))return!0
if(J.f0(q,s)||J.f0(q,r))return!0
if(J.d3(q,"{"))try{w=A.X.aM(0,q,null)
if(x.f.b(w)){u=J.r(w,"type")
v=J.k(u==null?"":u)
u=J.A(v,s)||J.A(v,r)
return u}}catch(t){}return!1},
ifD(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.h9q(v))return v
u=A.a.cv(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b7(v,u))
if(C.h9q(t))return t}s=A.a.cv(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b7(v,s))
if(C.h9q(t))return t}}return null},
fNu(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d3(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d3(t,"NGMY_SL:"))w=v.a(A.X.aM(0,A.cd.cB(0,A.cD.aL(J.ng(t,8))),null))
else w=v.a(A.X.aM(0,t,null))
v=C.hYT(w)
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
return B.b(C.as_(t[1]),$async$ahU)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fNu(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yW(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.as_(r),$async$ahU)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fNu(s)
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
return B.b(C.a8B(t[1]),$async$ahU)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fNu(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fNu(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ahU,v)},
hYT(d){var w,v,u,t=J.a5(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.A(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.U_.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.h9n(C.Wv(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.dc(u,x.f)
t=B.cG(t,new C.fjT(w),t.$ti.k("L.E"),x.I)
t=B.C(t,B.a7(t).k("L.E"))
return t}return B.a([],x.D)},
h9n(d,e){var w,v,u,t,s,r,q,p,o=d.ag()
o.n(0,"id",C.cF())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aW(v),t=x.f;u.C();){s=u.gT(u)
if(t.b(s)){r=Date.now()
q=$.j3
$.j3=q+1
J.aI(s,"id",""+1000*r+"_"+q)}}p=C.Wv(B.a2(o,x.N,x.z))
if(e&&C.kH(p.w))p.Q=new B.V(Date.now(),0,!1).a8().bS(144e8).ae()
return p},
bE5(){var w=0,v=B.j(x.aT),u,t,s
var $async$bE5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.H3(),$async$bE5)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.ahU(s),$async$bE5)
case 4:t=e
u=J.ct(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bE5,v)},
fWz(d){var w=0,v=B.j(x.T),u,t
var $async$fWz=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.i0(D.Y3,!0,"Dismiss",d,new C.fWA(),new C.fWB(),A.G0,!0,x.N),$async$fWz)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.K(x.q).f.U(D.f9f)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fWz,v)},
iju(d,e,f,g,h){return B.a4(d,!1).cd(B.dZ(new C.fWC(h,e,g,f),!0,null,x.H))},
fNs:function fNs(d){this.a=d},
ciY:function ciY(d){this.a=d},
fNy:function fNy(){},
fjT:function fjT(d){this.a=d},
fWA:function fWA(){},
fWB:function fWB(){},
fWC:function fWC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wx:function Wx(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFu:function aFu(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eCf:function eCf(){},
eCb:function eCb(d,e){this.a=d
this.b=e},
eCe:function eCe(d,e){this.a=d
this.b=e},
eCc:function eCc(d){this.a=d},
eCd:function eCd(d){this.a=d},
eCg:function eCg(d){this.a=d},
eCh:function eCh(d){this.a=d},
eCk:function eCk(d){this.a=d},
eCl:function eCl(d){this.a=d},
eCj:function eCj(d){this.a=d},
eCm:function eCm(d){this.a=d},
eCi:function eCi(d){this.a=d},
eCn:function eCn(d,e){this.a=d
this.b=e},
eCa:function eCa(d,e){this.a=d
this.b=e},
eC9:function eC9(d,e){this.a=d
this.b=e},
Wy:function Wy(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blT:function blT(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eCo:function eCo(d,e){this.a=d
this.b=e},
eCp:function eCp(d){this.a=d},
eCq:function eCq(){},
eCr:function eCr(d){this.a=d},
eCs:function eCs(d,e){this.a=d
this.b=e},
aFr:function aFr(d){this.a=d},
aFs:function aFs(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
evT:function evT(d){this.a=d},
evS:function evS(){},
evU:function evU(d){this.a=d},
evP:function evP(d){this.a=d},
evO:function evO(){},
evQ:function evQ(d){this.a=d},
evR:function evR(d){this.a=d},
bwo:function bwo(){},
as1:function as1(d){this.a=d},
aFv:function aFv(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eCu:function eCu(d){this.a=d},
eCt:function eCt(d){this.a=d},
i3f(){var w,v,u,t
for(v=0;v<4;++v){w=D.dcj[v]
try{if(Ad.c_I(w)){u=w
return u}}catch(t){}}return null},
RK(d,e){return C.icg(d,e)},
icg(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$RK=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.i3f()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.ox?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qI(c6,!0)
b6.toString
p=B.a4(c6,!0)
b7=new B.cB(null,x.A)
b8=A.d.gI(c3)
b9=$.au()
o=new B.eA(b8,b9)
n=new B.eA("Getting ready\u2026",b9)
m=new B.eA(0,b9)
l=B.oy(new C.fHK(c2,b7,o),!1,!1)
b6.lY(0,l)
b9=x.H
B.cj(null,A.df,!1,null,new C.fHL(n,m),c6,null,!0,!0,b9)
k=new C.fHP(b7)
j=new C.fHQ()
i=null
t=4
b3=c2.a
h=Ak.aTw(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fZv(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ad.aYv(f,B.G(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.It.yD(i,"dataavailable",new C.fHM(e))
d=new B.bZ(new B.bi($.bB,x.dT),x.b2)
A.It.yD(i,"stop",new C.fHN(d))
J.aiu(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$RK)
case 8:w=7
return B.b(c5.$1(d0),$async$RK)
case 7:a0=d0
J.fZx(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.aiu(n,"Drawing slide "+B.w(a1+1)+" of "+b8+"\u2026")
J.aiu(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$RK)
case 15:w=14
return B.b(c5.$1(d0),$async$RK)
case 14:a0=d0
case 13:J.fZx(g,a0,0,0,c2.a,c2.b)
a3=A.o.E(a2.w>0?a2.w:c7.e,1,120)
J.aiu(n,"Recording slide "+B.w(a1+1)+" of "+c3.length+" \xb7 "+B.w(a3)+" s")
a4=new B.V(Date.now(),0,!1).bS(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbp())b3=b3===b8.gbp()&&0<b8.gcD()
else b3=!0
if(!b3){w=17
break}J.fZx(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bQ(A.fj,null,b9),$async$RK)
case 18:w=16
break
case 17:J.aiu(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.aiu(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.d7(0,A.od),$async$RK)
case 19:a5=A.d.gI(q.split(";"))
a6=B.hL(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.A(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aN(c3,b3,"_"))
c0=B.mS(a7)
c0.download=B.w(J.ad(a9)===0?"presentation":a9)+"."+B.w(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.Hj(b0)
J.lB(b0)
B.bQ(A.q6,new C.fHO(a7),b9)
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
J.lB(l)
if(p.pM())p.eN()
c3=o
b3=$.au()
c3.si4(b3)
J.aS5(c3,0)
c3=n
c3.si4(b3)
J.aS5(c3,0)
c3=m
c3.si4(b3)
J.aS5(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$RK,v)},
fHK:function fHK(d,e,f){this.a=d
this.b=e
this.c=f},
fHJ:function fHJ(){},
fHL:function fHL(d,e){this.a=d
this.b=e},
fHP:function fHP(d){this.a=d},
fHQ:function fHQ(){},
fHM:function fHM(d){this.a=d},
fHN:function fHN(d){this.a=d},
fHO:function fHO(d){this.a=d},
bwC:function bwC(d,e,f){this.c=d
this.d=e
this.a=f},
fdS:function fdS(){},
fdT:function fdT(){},
cjj(d){var w=0,v=B.j(x.at),u,t,s
var $async$cjj=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.as9(d,A.zR),$async$cjj)
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
return B.i($async$cjj,v)},
cji(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a8i:function a8i(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blC:function blC(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
el_:function el_(d){this.a=d},
ekY:function ekY(d){this.a=d},
ekZ:function ekZ(d,e){this.a=d
this.b=e},
a9c:function a9c(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.oE$=k
_.oF$=l
_.oG$=m
_.nX$=n},
a9d:function a9d(d,e){this.a=d
this.b=e},
b4a:function b4a(){},
cmn:function cmn(){},
cmo:function cmo(){},
cmp:function cmp(d,e,f,g,h,i,j,k,l){var _=this
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
hCZ(d){return new C.aiM(d)},
a3s:function a3s(){},
aiM:function aiM(d){this.a=d},
aSq:function aSq(){},
axK:function axK(d,e){this.d=d
this.b=e
this.a=null},
aTX:function aTX(d){this.b=d
this.a=null},
fCS(d,e){var w=0,v=B.j(x.H)
var $async$fCS=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.S().gxO().M7(d,e),$async$fCS)
case 2:B.fQk()
return B.h(null,v)}})
return B.i($async$fCS,v)},
hts(d,e){return(A.rI[(d^e)&255]^A.o.aD(d,8))>>>0},
fA6(d,e,f,g,h,i){var w=C.i8z(d,A.dg,f,null,A.d_,g,h,i)
return w},
hvj(d){var w=F.hw1(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hKK(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.pl.h(0,w)
if(v!=null)return v
for(u=A.pl.gdS(A.pl),u=u.gaf(u);u.C();){t=u.gT(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aN(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ar(s,0,2)
return A.a.ar(s+"XX",0,2)},
hvr(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<45;++w)v+="- "+D.ddj[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bCe(d,e){return C.i52(d,e)},
i52(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bCe=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hL([d],"application/pdf")
n=x.z
q=B.aVD(B.a([r],x.e3),e,B.G(["type","application/pdf"],n,n))
p=B.cA(B.G(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ec(B.jU(o,"share",[p]),x.H),$async$bCe)
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
return B.i($async$bCe,v)},
h9h(){var w=0,v=B.j(x.y),u,t,s
var $async$h9h=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.frr
s=$.bBM
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bCe(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h9h,v)},
bDB(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bDB=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.frr
l=$.bBM
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Z.hpU()?3:4
break
case 3:w=5
return B.b(C.bCe(m,k),$async$bDB)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bBN
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.mS(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.Hj(q)
w=10
return B.b(B.bQ(A.a2,null,x.H),$async$bDB)
case 10:J.lB(q)
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
return B.i($async$bDB,v)},
h98(){var w=0,v=B.j(x.y),u,t,s,r
var $async$h98=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bBN
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
return B.i($async$h98,v)},
h9p(d,e){var w=0,v=B.j(x.H),u,t
var $async$h9p=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hL([d],"text/html"))
t.toString
u=window
u.toString
A.lS.r0(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$h9p,v)},
b37(d,e){var w=0,v=B.j(x.y),u
var $async$b37=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b39(d,e),$async$b37)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b38(d),$async$b37)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b37,v)}},D,A8,H,An,A9,Y,V,Ao,G,F,E,I,W,Q,Z,A_,Aa,Ap,X,Ab,L,Aq,A0,O,A1,M,Ac,Ar,As,P,A2,At,Ad,Ae,Au,Af,Ag,Ah,Av,Aw,R,Ax,K,Ay,S,T,Az,N,A3,A4,A5
J=c[1]
B=c[0]
A=c[2]
Ai=c[198]
A6=c[71]
Aj=c[52]
Ak=c[62]
U=c[214]
A7=c[55]
Al=c[139]
Am=c[224]
C=a.updateHolder(c[5],C)
D=c[212]
A8=c[225]
H=c[131]
An=c[38]
A9=c[216]
Y=c[213]
V=c[202]
Ao=c[127]
G=c[182]
F=c[33]
E=c[215]
I=c[94]
W=c[116]
Q=c[141]
Z=c[30]
A_=c[171]
Aa=c[151]
Ap=c[178]
X=c[104]
Ab=c[113]
L=c[217]
Aq=c[126]
A0=c[65]
O=c[192]
A1=c[80]
M=c[153]
Ac=c[114]
Ar=c[92]
As=c[219]
P=c[118]
A2=c[133]
At=c[91]
Ad=c[56]
Ae=c[188]
Au=c[37]
Af=c[78]
Ag=c[140]
Ah=c[223]
Av=c[226]
Aw=c[222]
R=c[72]
Ax=c[220]
K=c[168]
Ay=c[179]
S=c[50]
T=c[218]
Az=c[227]
N=c[199]
A3=c[221]
A4=c[109]
A5=c[61]
C.o4.prototype={
vi(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.u2(t,v)
return new C.o4(t===0?!1:w,v,t)},
bNu(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.Dp()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.u2(w,u)
return new C.o4(r===0?!1:s,u,r)},
bO0(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.Dp()
w=o-d
if(w<=0)return p.a?$.haP():$.Dp()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.u2(w,u)
q=new C.o4(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aF(0,$.a3f())
return q},
dV(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.W(B.dL("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.ao(e,16)
if(A.o.F(e,16)===0)return r.bNu(v)
u=w+v+1
t=new Uint16Array(u)
C.hms(r.b,w,e,t)
w=r.a
s=C.u2(u,t)
return new C.o4(s===0?!1:w,t,s)},
mu(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.W(B.dL("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.ao(e,16)
u=A.o.F(e,16)
if(u===0)return n.bO0(v)
t=w-v
if(t<=0)return n.a?$.haP():$.Dp()
s=n.b
r=new Uint16Array(t)
C.hUO(s,w,e,r)
w=n.a
q=C.u2(t,r)
p=new C.o4(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dV(1,u)-1)!==0)return p.aF(0,$.a3f())
for(o=0;o<v;++o)if(s[o]!==0)return p.aF(0,$.a3f())}return p},
aK(d,e){var w,v=this.a
if(v===e.a){w=C.cLa(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a8M(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a8M(t,e)
if(s===0)return $.Dp()
if(r===0)return t.a===e?t:t.vi(0)
w=s+1
v=new Uint16Array(w)
C.hUM(t.b,s,d.b,r,v)
u=C.u2(w,v)
return new C.o4(u===0?!1:e,v,u)},
Hy(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.Dp()
w=d.c
if(w===0)return t.a===e?t:t.vi(0)
v=new Uint16Array(s)
C.bbk(t.b,s,d.b,w,v)
u=C.u2(s,v)
return new C.o4(u===0?!1:e,v,u)},
bAs(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.u2(r,u)
return new C.o4(!1,u,s)},
bAr(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.u2(u,r)
return new C.o4(!1,r,v)},
bAt(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.u2(p,m)
return new C.o4(s!==0,m,s)},
Vd(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.Dp()
w=t.a
if(w===e.a){if(w){w=$.a3f()
return t.Hy(w,!0).bAt(e.Hy(w,!0),!0).a8M(w,!0)}return t.bAs(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bAr(v.Hy($.a3f(),!1),!1)},
a9(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a8M(e,v)
if(C.cLa(u.b,t,e.b,w)>=0)return u.Hy(e,v)
return e.Hy(u,!v)},
aF(d,e){var w,v,u=this,t=u.c
if(t===0)return e.vi(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a8M(e,v)
if(C.cLa(u.b,t,e.b,w)>=0)return u.Hy(e,v)
return e.Hy(u,!v)},
aI(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.Dp()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hmt(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.u2(w,t)
return new C.o4(q===0?!1:r,t,q)},
bNt(d){var w,v,u,t
if(this.c<d.c)return $.Dp()
this.aSp(d)
w=$.h47.ca()-$.ayw.ca()
v=C.h49($.h46.ca(),$.ayw.ca(),$.h47.ca(),w)
u=C.u2(w,v)
t=new C.o4(!1,v,u)
return this.a!==d.a&&u>0?t.vi(0):t},
cqi(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aSp(d)
w=C.h49($.h46.ca(),0,$.ayw.ca(),$.ayw.ca())
v=C.u2($.ayw.ca(),w)
u=new C.o4(!1,w,v)
if($.h48.ca()>0)u=u.mu(0,$.h48.ca())
return t.a&&u.c>0?u.vi(0):u},
aSp(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hmp&&d.c===$.hmr&&g.b===$.hmo&&d.b===$.hmq)return
w=d.b
v=d.c
u=16-A.o.gakQ(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hmn(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hmn(g.b,f,u,r)}else{r=C.h49(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.h4a(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cLa(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.bbk(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.bbk(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hUN(p,r,i);--o
C.hmt(h,j,0,r,o,s)
if(r[i]<h){m=C.h4a(j,s,o,n)
C.bbk(r,l,n,m,r)
while(--h,r[i]<h)C.bbk(r,l,n,m,r)}--i}$.hmo=g.b
$.hmp=f
$.hmq=w
$.hmr=v
$.h46.b=r
$.h47.b=l
$.ayw.b=s
$.h48.b=u},
gX(d){var w,v,u,t=new C.cLb(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cLc().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.o4&&this.aK(0,e)===0},
tz(d,e){return this.aK(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
vd(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gakQ(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aD(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cLd(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cLe(w)
if(J.A(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.lg(A.aG.gaR(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.vi(0):r
while(v.c>1){u=$.hzU()
if(u.c===0)B.b8(D.b7t)
t=v.cqi(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bNt(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dw(w,x.bJ).hi(0)},
$iaT9:1,
$ihN:1}
C.aSA.prototype={
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
cOT(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gI(d){return A.d.gI(this.a)},
gak(d){return A.d.gak(this.a)},
gan(d){return this.a.length===0},
gcm(d){return this.a.length!==0},
gaf(d){var w=this.a
return new J.kc(w,w.length,B.T(w).k("kc<1>"))}}
C.So.prototype={
cX1(){var w,v
if(this.as==null)this.bdW()
w=this.as
v=w==null?null:w.apJ()
return v==null?null:v.eT()},
bdW(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.apJ().eT()
this.as=new C.bRf(v)}},
gY(d){return this.at}}
C.a4o.prototype={
a5(){return"CompressionType."+this.b}}
C.bJe.prototype={
eF(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cs()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dV(v,u)+(s.b&A.zq[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cs()}w=A.o.dV(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fL(u,t)&A.zq[d])
s.c=t}return v}}
C.bHz.prototype={
cN1(d,e){var w,v,u,t,s,r=this,q=new C.bJe(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.eF(8)!==66||q.eF(8)!==90||q.eF(8)!==104)return!1
w=r.a=q.eF(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.coA(q)
if(t<0)return!1
if(t===0){q.eF(8)
q.eF(8)
q.eF(8)
q.eF(8)
s=r.coD(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eF(8)
q.eF(8)
q.eF(8)
q.eF(8)
return!0}}return!0},
coA(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eF(8)
if(t!==D.dtL[u])v=!1
if(t!==D.d5n[u])w=!1
if(!w&&!v)return-1}return v?0:2},
coD(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eF(1),d2=((d3.eF(8)<<8|d3.eF(8))<<8|d3.eF(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eF(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eF(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c3s()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.eF(3)
if(q<2||q>6)return-1
v=d3.eF(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.eF(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.c1(6,$.hy_(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eF(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eF(1)===0)break
i=d3.eF(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hxZ()
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
if(f<h)h=f}c9.bZO(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.auG(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.auG(d3)}while(a3===0||a3===1);++a5
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
a3=c9.auG(d3)
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
c1=(c1<<8^D.HW[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.HZ[b9];++b9
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
if(b8===0){b8=D.HZ[b9];++b9
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
if(b8===0){b8=D.HZ[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.HZ[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.HZ[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bt(c3)
c1=c1<<8^D.HW[c1>>>24&255^v];--c2}d4.bt(c3)
c1=(c1<<8^D.HW[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bt(c7)
c1=(c1<<8^D.HW[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bt(c7)
c1=(c1<<8^D.HW[c1>>>24&255^c7&255])>>>0
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
auG(d){var w,v,u,t,s=this,r=s.ay
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
t=d.eF(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.eF(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
bZO(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c3s(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cDk.prototype={
aIG(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bR0(e)
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
if(w>0)e.aIJ(w,!1)
r.coY(e)
q=r.r
v=r.f
u=e.aLP(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aQ()!==33639248)break
s=new C.ba0()
s.cX0(0,u,e,f)
q.push(s)}},
coY(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a8p(20,r)
if(w.aQ()!==117853008){d.c=s
return}w.aQ()
v=w.tk()
w.aQ()
d.c=v
if(d.aQ()!==101075792){d.c=s
return}d.tk()
d.b_()
d.b_()
d.aQ()
d.aQ()
d.tk()
d.tk()
u=d.tk()
t=d.tk()
this.f=u
this.r=t
d.c=s},
bR0(d){var w,v,u,t,s,r,q,p,o,n
if(d.gL(0)<=4)return-1
w=d.c
v=d.gL(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a8p(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.amA(A.id)
o.aN5(r.eT(),A.id,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aQ()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cDi.prototype={}
C.ay9.prototype={
a5(){return"ZipEncryptionMode."+this.b}}
C.cDl.prototype={
aIG(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aQ()!==67324752)return
e.b_()
o.b=e.b_()
w=D.aGr.h(0,e.b_())
o.c=w==null?D.ML:w
o.d=e.b_()
o.e=e.b_()
o.f=e.aQ()
o.r=e.aQ()
o.w=e.aQ()
v=e.b_()
u=e.b_()
o.x=e.aor(v)
o.y=e.hl(u).eT()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aXE:D.Ek
o.ay=f
o.Q=e.hl(t)
if(o.at!==D.Ek&&u>2){w=o.y
w.toString
s=B.rr(w,A.id,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.b_()===39169){s.b_()
s.b_()
s.aor(2)
w=s.b
w.toString
r=w[s.c++]
q=s.b_()
o.at=D.aXF
o.ax=new C.cDi(r,q)
w=D.aGr.h(0,q)
o.c=w==null?D.ML:w}}}if((o.b&8)!==0){p=e.aQ()
if(p===134695760)o.f=e.aQ()
else o.f=p
o.r=e.aQ()
o.w=e.aQ()}},
gL(d){return this.bnF().length},
apJ(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rr(new Uint8Array(0),A.id,q,q)
w=r.at
if(w!==D.Ek)if(p.gL(0)<=0)r.at=D.Ek
else{if(w===D.aXE){p=r.bLM(p)
r.Q=p}else if(w===D.aXF){p=r.bLp(p)
r.Q=p}r.at=D.Ek}w=r.c
if(w===D.aiQ){v=p.c
u=B.dm()
p=r.Q
if(p.gL(0)<=524288e3)u.b=A.pK.BF(p.eT(),!0,!1)
else{t=B.a91(A.id,r.w)
p=r.Q
p.toString
A.pK.a4z(p,t,!0,!1)
u.b=t.H5()}r.Q.c=v
return B.rr(u.bk(),A.id,q,q)}else if(w===D.aiR){s=B.a91(A.id,32768)
p=r.Q
v=p.c
C.hD9().cN1(p,s)
u=s.H5()
r.Q.c=v
return B.rr(u,A.id,q,q)}else return B.rr(p.eT(),A.id,q,q)},
bnF(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eT()},
u(d){return this.x},
b9P(d){var w=this.ch,v=C.Kb(C.hts(w[0].N(0),d))
w[0]=v
v=w[1].a9(0,v.Vd(0,C.Kb(255)))
w[1]=v
w[1]=v.aI(0,C.Kb(134775813)).a9(0,C.Kb(1)).Vd(0,C.Kb(4294967295))
w[2]=C.Kb(C.hts(w[2].N(0),w[1].mu(0,24).N(0)))},
aRO(){var w=(this.ch[2].Vd(0,C.Kb(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bLM(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rr(new Uint8Array(0),A.id,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b9P(u[v.c++]^r.aRO())}t=r.Q.eT()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aRO()
r.b9P(s)
u&2&&B.aj(t)
t[w]=s}return B.rr(t,A.id,q,q)},
bLp(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hl(8).eT()
v=16}else if(k===2){w=d.hl(12).eT()
v=24}else{w=d.hl(16).eT()
v=32}u=d.hl(2).eT()
t=d.hl(d.gL(0)-10)
s=d.hl(10)
r=t.eT()
k=this.ay
k.toString
q=C.hUt(k,w,v)
p=new Uint8Array(B.cl(A.aG.ds(q,0,v)))
k=v*2
o=new Uint8Array(B.cl(A.aG.ds(q,v,k)))
if(!C.hlT(A.aG.ds(q,k,k+2),u))throw B.W(B.fm("password error"))
k=new Uint8Array(16)
n=new C.bG9(k,new Uint8Array(16),p)
k=x.S
m=J.a5N(0,k)
m=n.r=new C.cmc(m)
m.c=!0
m.b=m.bmX(!0,new C.atA(p))
if(m.c)m.d=B.bq(D.ou,!0,k)
else m.d=B.bq(D.ze,!0,k)
l=C.hk6(C.hk8(),64)
l.bgi(new C.atA(o))
n.w=l
n.cWB(r,0,r.length)
k=s.eT()
m=n.x
m===$&&B.c()
if(!C.hlT(k,m))throw B.W(B.fm("macs don't match"))
return B.rr(r,A.id,null,null)}}
C.ba0.prototype={
cX0(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.aor(w)
if(v>0){t=e.hl(v).eT()
n.ax=t
if(v>=4){s=B.rr(t,A.id,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.b_()
p=s.b_()
o=s.a8p(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.tk()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.tk()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.tk()
p-=8}if(p>=4&&n.y===65535)n.y=o.aQ()}}}}if(u>0)e.aor(u)
f.c=n.as
t=new C.cDl(D.ML,n,D.Ek,B.a([C.Kb(0),C.Kb(0),C.Kb(0)],x.f3))
n.ch=t
t.aIG(0,f,g)},
u(d){return this.at}}
C.cDj.prototype={
cN2(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cDk(B.a([],x.fT))
this.a=g
g.aIG(0,d,f)
g=B.a([],x.bm)
w=B.U(x.N,x.S)
v=new C.aSA(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.M)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c8(o,"/")||A.a.c8(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.So(o,A.o.ao(Date.now(),1000),0):C.hcf(o,q.w,q)
v.M(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.hcf(o,q.w,q)
if(k.as==null)k.bdW()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.amA(A.id)
j.aN5(o,A.id,h,h)}i=j==null?h:j.eT()
if(i!=null)new B.Gs(!1).DI(i,0,h,!0)}}return v}}
C.bG9.prototype={
cWB(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.CB(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hCT(u,m.a)
q=m.r
if(16>u.byteLength)B.b8(B.dL("Input buffer too short",null))
if(16>w.byteLength)B.b8(B.dL("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bPg(u,0,w,0,o)}else{o===$&&B.c()
q.bLQ(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.Lr(w,0)
m.x=A.aG.ds(m.x,0,10)
w=m.w
l=w.a
l.kf(0)
w=w.d
w===$&&B.c()
l.CB(0,w,0,w.length)
return f}}
C.cmh.prototype={}
C.cml.prototype={}
C.cmf.prototype={}
C.atA.prototype={}
C.cmk.prototype={
cNh(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.eb(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bgi(new C.atA(A.aG.fK(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bQl(n.a,n.b,t,s,r)
r+=v}A.aG.ha(f,g,g+w,s)
return o.a.c},
bQl(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.W(B.dL("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.CB(0,d,0,d.length)
v.CB(0,f,0,4)
u=m.c
u===$&&B.c()
w.Lr(u,0)
u=m.c
A.aG.ha(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.CB(0,s,0,s.length)
w.Lr(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cmg.prototype={}
C.cme.prototype={}
C.atB.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.atB){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
tz(d,e){var w=this.a
w===$&&B.c()
w=A.o.tz(w,e.gc_4())
if(!w)e.gc_4()
return w},
aLe(d,e){this.a=0
this.b=d},
tC(d){return this.aLe(d,null)},
aLS(d){var w,v=this,u=v.b
u===$&&B.c()
w=u+d
u=w>>>0
v.b=u
if(w!==u){u=v.a
u===$&&B.c();++u
v.a=u
v.a=u>>>0}},
u(d){var w=this,v=new B.fg(""),u=w.a
u===$&&B.c()
w.b1v(v,u)
u=w.b
u===$&&B.c()
w.b1v(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b1v(d,e){var w,v=A.o.fH(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bv(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cmj.prototype={
kf(d){var w,v=this
v.a.tC(0)
v.c=0
A.aG.hx(v.b,0,4,0)
v.w=0
w=v.r
A.d.hx(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
apb(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b2Y(u,0)
v.c=0}v.a.aLS(1)},
CB(d,e,f,g){var w=this.cnk(e,f,g)
f+=w
g-=w
w=this.cnl(e,f,g)
this.cnb(e,f+w,g-w)},
Lr(d,e){var w,v=this,u=C.hk7(v.a),t=u.a
t===$&&B.c()
t=C.h9U(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.h9U(w,3)
v.cnf()
v.cnc(u)
v.atv()
v.chm(d,e)
v.kf(0)
return 20},
b2Y(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.of(A.aG.gaR(d),d.byteOffset,d.length).getUint32(e,A.ir===w.d)
if(w.w===16)w.atv()},
atv(){this.cWA()
this.w=0
A.d.hx(this.r,0,16,0)},
cnb(d,e,f){while(f>0){this.apb(d[e]);++e;--f}},
cnl(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b2Y(d,e)
e+=4
f-=4
w.aLS(4)
v+=4}return v},
cnk(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.apb(d[e]);++e;--f;++v}return v},
cnf(){this.apb(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.apb(0)}},
cnc(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.atv()
u=v.d
switch(u){case A.ir:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.EL:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.W(B.bd("Invalid endianness: "+u.u(0)))}},
chm(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.ir===this.d,s=0;s<w;++s){r=v[s]
q=J.of(A.aG.gaR(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdc(d){return this.f}}
C.cmm.prototype={
cWA(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.ql[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.ql[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.ql[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.ql[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.ql[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.ql[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.ql[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.ql[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.ql[30]
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
C.cmi.prototype={
bgi(d){var w,v,u,t,s=this,r=s.a
r.kf(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.CB(0,w,0,v)
w=s.d
w===$&&B.c()
r.Lr(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aG.ha(t,0,v,w)}w=s.d
w===$&&B.c()
A.aG.hx(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aG.ha(w,0,u,s.d)
s.bb1(s.d,u,54)
s.bb1(s.e,u,92)
u=s.d
r.CB(0,u,0,u.length)},
Lr(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.Lr(s,w)
s=u.e
t.CB(0,s,0,s.length)
v=t.Lr(d,e)
s=u.e
A.aG.hx(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.CB(0,s,0,s.length)
return v},
bb1(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cmd.prototype={}
C.cmc.prototype={
a2R(d){return(D.ou[d&255]&255|(D.ou[d>>>8&255]&255)<<8|(D.ou[d>>>16&255]&255)<<16|D.ou[d>>>24&255]<<24)>>>0},
bmX(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.W(B.dL("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.dY(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c1(4,0,!1,u)
switch(v){case 4:q=J.of(A.aG.gaR(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a2R((m>>>8|(m&$.ql[24])<<24)>>>0)^D.cHJ[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.of(A.aG.gaR(e),e.byteOffset,w)
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
p=(p^f.a2R((k>>>8|(k&$.ql[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a2R((k>>>8|(k&$.ql[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.of(A.aG.gaR(e),e.byteOffset,w)
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
p=(p^f.a2R((g>>>8|(g&$.ql[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a2R(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.W(B.bd("Should never get here"))}return s},
bPg(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.of(A.aG.gaR(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.eh[a8&255]
u=D.eh[a9>>>8&255]
t=$.ql[8]
s=D.eh[b0>>>16&255]
r=$.ql[16]
q=D.eh[b1>>>24&255]
p=$.ql[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.eh[a9&255]
s=D.eh[b0>>>8&255]
u=D.eh[b1>>>16&255]
v=D.eh[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.eh[b0&255]
u=D.eh[b1>>>8&255]
s=D.eh[a8>>>16&255]
q=D.eh[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.eh[b1&255]
a8=D.eh[a8>>>8&255]
a9=D.eh[a9>>>16&255]
b0=D.eh[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.eh[n&255]
b0=D.eh[m>>>8&255]
a9=D.eh[l>>>16&255]
a8=D.eh[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.eh[m&255]
b0=D.eh[l>>>8&255]
o=D.eh[b1>>>16&255]
s=D.eh[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.eh[l&255]
o=D.eh[b1>>>8&255]
b0=D.eh[n>>>16&255]
u=D.eh[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.eh[b1&255]
o=D.eh[n>>>8&255]
s=D.eh[m>>>16&255]
v=D.eh[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.eh[a8&255]^C.nx(D.eh[a9>>>8&255],24)^C.nx(D.eh[b0>>>16&255],16)^C.nx(D.eh[b1>>>24&255],8)^b6[w][0]
m=D.eh[a9&255]^C.nx(D.eh[b0>>>8&255],24)^C.nx(D.eh[b1>>>16&255],16)^C.nx(D.eh[a8>>>24&255],8)^b6[w][1]
l=D.eh[b0&255]^C.nx(D.eh[b1>>>8&255],24)^C.nx(D.eh[a8>>>16&255],16)^C.nx(D.eh[a9>>>24&255],8)^b6[w][2]
b1=D.eh[b1&255]^C.nx(D.eh[a8>>>8&255],24)^C.nx(D.eh[a9>>>16&255],16)^C.nx(D.eh[b0>>>24&255],8)^b6[w][3]
a7=D.ou[n&255]
b0=D.ou[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.ou[l>>>8&255]
a9=D.ou[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.ou[b1>>>8&255]
h=D.ou[n>>>16&255]
g=D.ou[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.ou[l>>>24&255]
s=s[3]
a1=J.of(A.aG.gaR(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.of(A.aG.gaR(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.of(A.aG.gaR(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.of(A.aG.gaR(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bLQ(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.of(A.aG.gaR(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.of(A.aG.gaR(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.of(A.aG.gaR(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.of(A.aG.gaR(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.eg[a6&255]
v=D.eg[b0>>>8&255]
u=$.ql[8]
t=D.eg[a5>>>16&255]
s=$.ql[16]
r=D.eg[a4>>>24&255]
q=$.ql[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.eg[a4&255]
t=D.eg[a6>>>8&255]
v=D.eg[b0>>>16&255]
w=D.eg[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.eg[a5&255]
v=D.eg[a4>>>8&255]
t=D.eg[a6>>>16&255]
r=D.eg[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.eg[b0&255]
a5=D.eg[a5>>>8&255]
a4=D.eg[a4>>>16&255]
a6=D.eg[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.eg[p&255]
a6=D.eg[b0>>>8&255]
a4=D.eg[n>>>16&255]
a5=D.eg[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.eg[o&255]
a4=D.eg[p>>>8&255]
a7=D.eg[b0>>>16&255]
t=D.eg[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.eg[n&255]
a7=D.eg[o>>>8&255]
a5=D.eg[p>>>16&255]
v=D.eg[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.eg[b0&255]
a7=D.eg[n>>>8&255]
t=D.eg[o>>>16&255]
w=D.eg[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.eg[a6&255]^C.nx(D.eg[b0>>>8&255],24)^C.nx(D.eg[a5>>>16&255],16)^C.nx(D.eg[a4>>>24&255],8)^b5[a9][0]
o=D.eg[a4&255]^C.nx(D.eg[a6>>>8&255],24)^C.nx(D.eg[b0>>>16&255],16)^C.nx(D.eg[a5>>>24&255],8)^b5[a9][1]
n=D.eg[a5&255]^C.nx(D.eg[a4>>>8&255],24)^C.nx(D.eg[a6>>>16&255],16)^C.nx(D.eg[b0>>>24&255],8)^b5[a9][2]
b0=D.eg[b0&255]^C.nx(D.eg[a5>>>8&255],24)^C.nx(D.eg[a4>>>16&255],16)^C.nx(D.eg[a6>>>24&255],8)^b5[a9][3]
a4=D.ze[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.ze[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.ze[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.ze[o>>>8&255]
i=D.ze[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.ze[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.of(A.aG.gaR(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bRe.prototype={}
C.bRf.prototype={
gL(d){var w=this.a.length
return w},
apJ(){return B.rr(this.a,A.id,null,null)}}
C.bbz.prototype={
ve(d){return C.hXK(d)}}
C.cwN.prototype={
N7(d){var w=d.w,v=Math.max(1,A.k.dd(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.aaD(v,t+20,u+16,t,u,B.uc(d.x))},
nv(d){return!1}}
C.bSh.prototype={
cH8(d){if(this.b)throw B.W(B.bd("FontLoader is already loaded"))
this.c.push(d.bN(new C.bSi(),x.E))},
mL(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.W(B.bd("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mL)
case 6:w=5
return B.b(p.fCS(f,r),$async$mL)
case 5:case 3:t.length===s||(0,B.M)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mL,v)}}
C.awP.prototype={
a5(){return"SystemUiMode."+this.b}}
C.a9_.prototype={
A(d,e){if(e==null)return!1
if(J.bR(e)!==B.b0(this))return!1
return e instanceof C.a9_&&e.a===this.a},
gX(d){return B.bv(B.b0(this),B.x4(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b0(this)===D.fW9)return"["+(w+B.e6(this.a))+"]"
return"[ObjectKey "+(w+B.e6(this.a))+"]"}}
C.a1w.prototype={
R(){return new C.aKl(B.aX(x.N))},
cUH(d){return this.d.$1(d)},
cSo(){return this.e.$0()}}
C.aKl.prototype={
Z(){this.a2()
this.Pv()},
Pv(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Pv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cSo(),$async$Pv)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fck(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Pv,v)},
Zv(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Zv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.T(r).k("Z<1>")
p=B.C(new B.Z(r,new C.fco(t),q),q.k("L.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.fcp(t))
w=3
return B.b(C.aoj(p),$async$Zv)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fcq(t,s,p))
w=4
return B.b(t.Pv(),$async$Zv)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Zv,v)},
a1L(d){return this.cru(d)},
cru(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a1L=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.fcl(t))
s=J.r(d,"id")
w=3
return B.b(C.c2e(J.k(s==null?"":s)),$async$a1L)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.fcm(t))
w=1
break}q=C.h9n(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cUH(B.a([q],x.D)),$async$a1L)
case 4:if(t.c==null){w=1
break}t.m(new C.fcn(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a1L,v)},
Pu(d,e){return this.bMh(0,e)},
bMh(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Pu=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a5(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cj(null,null,!0,null,new C.fcf(q),r,null,!0,!0,x.y),$async$Pu)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.fcg(t))
s=s.h(e,"id")
w=4
return B.b(C.aoi(J.k(s==null?"":s)),$async$Pu)
case 4:if(t.c==null){w=1
break}t.m(new C.fch(t))
w=5
return B.b(t.Pv(),$async$Pu)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Pu,v)},
cG8(d){var w=B.bj(d),v=w==null?null:w.bU()
if(v==null)return""
return A.iE[B.bM(v)-1]+" "+B.bW(v)},
aRF(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.Pd,A.n),w,e,w,w,w,w,w,e)},
aRE(d){return this.aRF(d,44)},
b87(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Pd:u,r=B.m(14),q=B.X(e,t?A.c:A.aB,u,u,u,17),p=x.p
q=B.a([q,M.JN,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aB,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([M.JN,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aR,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bE4,u,u,u)],p))}return B.E(B.aB(A.c9,B.dd(u,B.B(q,A.m,u,A.b8,A.i,0,u,u),u,u,A.b5,new B.o(u,u,u,r,u,s,A.n),A.hr,u,u,u,A.u0,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.fcu(this,d),u,u,u,u,u,u,!1,A.a4),1)},
cli(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d3.j(0.14):D.Z4,n=B.m(18),m=p?A.d3:A.dq
m=B.J(m,A.r,p?1.8:1)
w=this.aRE(A.qp)
v=B.d(d.b,q,1,A.a1,q,q,q,D.aTZ,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cL,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aU1,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
v=p?D.Pd:q
u=p?q:B.J(A.aZ,A.r,1.6)
r=p?D.bV5:q
return B.aB(q,B.dd(q,B.B(B.a([w,A.bd,t,B.dd(q,r,q,q,A.b5,new B.o(q,q,u,q,q,v,A.a6),A.fP,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.i,0,q,q),q,q,A.b5,new B.o(o,q,m,n,q,q,A.n),A.fP,q,q,A.d2,A.bf,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.fcj(this,p,d),q,q,q,q,q,q,!1,A.a4)},
ct6(d){var w,v,u,t,s,r=this,q=null,p=J.a5(d),o=p.h(d,"savedAt"),n=r.cG8(J.k(o==null?"":o))
o=B.m(18)
w=B.J(A.dq,A.r,1)
v=r.aRE(A.Os)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a1,q,q,q,D.aTZ,q,q,q)
p=p.h(d,"slides")
p=B.w(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cL,B.d(p+" slides"+t,q,q,q,q,q,q,D.aU1,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
p=r.b4E(A.hN,A.bt,"Bring it back",r.r?q:new C.fcr(r,d))
return B.p(q,B.B(B.a([v,A.bd,t,p,A.bm,r.b4E(A.ea,A.ct,"Delete",r.r?q:new C.fcs(r,d))],s),A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(D.Z4,q,w,o,q,q,A.n),q,q,q,A.d2,D.byo,q,q,q)},
b4E(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hc(B.aB(w,B.p(w,B.X(d,v?A.aZ:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),w,f,w,w)},
atL(d,e,f){var w=null
return new B.D(D.bxp,B.x(B.a([B.X(d,A.aZ,w,w,w,46),A.ad,B.d(e,w,w,w,w,w,w,D.frq,w,w,w),A.au,B.d(f,w,w,w,w,w,w,D.fjt,A.K,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.ca
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aJ(d,A.bX,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.aZ,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aRF(A.z2,46),A.bd,D.bEY],t)
if(j.r)s.push(D.elZ)
s.push(B.aF(i,i,i,i,A.qu,i,i,i,new C.fcx(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.i,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.J(A.dq,A.r,1)
o=J.a5(h)
q=B.a([A.W,u,new B.D(D.bB3,s,i),B.p(i,B.B(B.a([j.b87(0,A.yK,"Save",j.a.c.length),j.b87(1,A.OG,"Saved",o.gL(h))],t),A.m,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bA4,A.ev,i,i,i)],t)
if(j.x!=null){u=(j.y?A.ct:A.bt).j(0.12)
s=B.m(14)
r=B.J((j.y?A.ct:A.bt).j(0.4),A.r,1)
p=j.y
n=p?A.Ov:A.ef
n=B.X(n,p?A.ct:A.bt,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.ac,B.E(B.d(m,i,i,i,i,i,i,A.UH,i,i,i),1)],t),A.m,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bA0,A.iB,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.fnd,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aB(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fqq,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.fcy(j,v),i,i,i,i,i,i,!1,A.a4))
s=B.a([B.B(s,A.m,i,A.e,A.i,0,i,i),A.W],t)
if(j.a.c.length===0)s.push(j.atL(A.qp,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.M)(r),++l)s.push(j.cli(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.elt)
else if(j.e==null)s.push(j.atL(A.a1w,"Could not reach the database","Check the connection, then open this again."))
else if(o.gan(h))s.push(j.atL(A.p8,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gaf(h);r.C();)s.push(j.ct6(r.gT(r)))
A.d.v(u,s)}q.push(new B.ds(1,A.cn,B.cf(u,i,Y.akG,i,i,A.ag,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc62()
p=s?i:D.Pd
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b6.j(0.4),A.cx,18)],x.V)
u=u.a
m=u===0
k=B.X(A.yK,m?A.jN:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bAG,B.aB(i,B.dd(i,B.B(B.a([k,A.a98,new B.ds(1,A.cn,B.eN(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.jN:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.e2),i)],t),A.m,i,A.b8,A.i,0,i,i),i,i,A.b5,new B.o(s,i,i,o,n,p,A.n),A.hr,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a4),i))}else q.push(A.W)
return B.p(i,B.bl(!0,B.x(q,A.m,i,A.e,A.P,0,A.p),!0,!1,A.af,!0,!1),A.f,i,new B.aZ(0,1/0,0,w.a.b*0.9),D.b4l,i,i,i,i,i,i,i,i)}}
C.ow.prototype={
ag(){return B.G(["id",this.a,"doc",this.b.ag(),"updatedAt",this.c.a8().ae()],x.N,x.z)}}
C.Zc.prototype={
R(){return new C.ayI(B.a([],x.k),B.f8(null,x.H))},
ge1(){return this.c}}
C.ayI.prototype={
Z(){this.a2()
this.PF()},
PF(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a2t(t.a.c),$async$PF)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cMA(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PF,v)},
czp(d){var w,v,u,t=this
d.c=new B.V(Date.now(),0,!1)
w=J.qt(t.d,new C.cMD(d))
v=w<0
if(v&&C.hUQ(d))return t.f
u=t.d
if(v)J.pK(u,0,d)
else J.aI(u,w,d)
v=x.a
B.h_Q(new C.cME(t),v)
return t.f=t.f.bN(new C.cMF(t,d),v).eQ(new C.cMG())},
IW(d,e,f){return this.ceS(0,e,f)},
aZv(d,e){return this.IW(0,e,!1)},
ceS(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$IW=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a4(s,!1).cd(B.dZ(new C.cMz(t,e),!1,null,x.H)),$async$IW)
case 3:w=4
return B.b(t.f,$async$IW)
case 4:w=5
return B.b(t.PF(),$async$IW)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IW,v)},
aYM(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dGq:d
this.IW(0,new C.ow(w,v,new B.V(Date.now(),0,!1)),!0)},
c5v(){return this.aYM(null)},
ae2(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ae2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bV(A.L,null,new C.cMH(),r,!1,!1,!0,null,!1,!1,x.g2),$async$ae2)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aYM(s)
case 1:return B.h(u,v)}})
return B.i($async$ae2,v)},
IV(d,e){return this.bM8(0,e)},
bM8(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$IV=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cj(null,null,!0,null,new C.cMu(e),s,null,!0,!0,x.y),$async$IV)
case 3:if(g!==!0){w=1
break}t.m(new C.cMv(t,e))
w=4
return B.b(t.f,$async$IV)
case 4:w=5
return B.b(C.agS(t.a.c,e.a),$async$IV)
case 5:w=6
return B.b(t.PF(),$async$IV)
case 6:case 1:return B.h(u,v)}})
return B.i($async$IV,v)},
Dq(d){return this.bEh(d)},
bEh(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Dq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bV(A.L,null,new C.cMq(d),r,!0,!0,!1,null,!1,!1,x.N),$async$Dq)
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
return B.b(t.aZv(0,d),$async$Dq)
case 9:w=5
break
case 7:w=10
return B.b(F.h9W(r,d.b,null),$async$Dq)
case 10:w=5
break
case 8:w=11
return B.b(t.IV(0,d),$async$Dq)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$Dq,v)},
c_1(){var w,v,u=null,t=[D.dGt,D.dGr,D.dGs],s=new C.cMx(),r=B.m(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d1.j(0.4),A.f2,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aP(999,999)
n.push(B.p(u,new B.y(D.dqc[w],u,A.oK,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bg(v,v,v,v),u,u,A.n),u,u,u,u,A.of,u,u,u))}return B.p(u,B.B(B.a([B.E(B.x(B.a([D.fRo,A.O,B.bX(A.bC,n,A.bq,u,6,6),A.aN,B.aB(u,B.p(u,D.f1i,A.f,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cH,10)],q),u,A.n),u,u,u,u,U.al4,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cMw(this),u,u,u,u,u,u,!1,A.a4)],o),A.E,u,A.e,A.i,0,A.p),1),new B.a6(130,110,new B.an(A.A,u,A.aa,A.t,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.i,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.c2x,A.n),u,u,u,u,D.bBd,u,u,u)},
bEf(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cx,14)],x.V),r=x.p
s=B.p(v,B.bx(B.m(6),new B.an(A.a_,v,A.b0,A.t,B.a([B.eN(A.A,F.aoT(d.b),A.f,A.bU),D.es4,B.ao(v,B.aB(v,B.p(v,D.bVW,A.f,v,v,D.b5i,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cMl(this,d),v,v,v,v,v,v,!1,A.a4),v,v,v,4,4,v)],r),v),A.ap),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a1,v,v,v,D.fgA,v,v,v)
w=u===1?"":"s"
return B.aB(v,B.x(B.a([new B.fE(0.6470588235294118,s,v),A.O,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fnp,v,v,v)],r),A.E,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cMm(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cMn(this,d),v,v,v,v,v,v,!1,A.a4)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eI(B.a([new B.D(H.ajz,B.hc(B.aB(s,B.p(s,A.aqe,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b6.j(0.5),A.I,12)],x.V),E.wv,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc6S(),s,s,s,s,s,s,!1,A.a4),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.L,s,1,!0,s,0,!1,s,!1,E.ng,s,s,s,!0,s,s,s,s,s,D.fRs,s,s,s,1,s,!0)
if(t.e)r=D.b8N
else{w=t.c_1()
v=B.a([D.fCA,A.ac],r)
if(J.cL(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.fg0,s,s,s),A.f,s,s,new B.o(D.be_,s,s,u,s,s,A.n),s,s,s,s,A.yp,s,s,s))}r=B.a([new B.o_(A6.a_o,new B.mj(w,s),s),new B.o_(D.bAA,new B.mj(B.B(v,A.m,s,A.e,A.i,0,s,s),s),s)],r)
if(J.ct(t.d))r.push(D.f7T)
else r.push(new B.o_(D.bA2,B.Pq(new B.oC(new C.cMI(t),J.ad(t.d),!0,!0,!0,0,B.t7(),s),D.b81),s))
r=B.vM(0,s,A.t,s,A.y,s,s,s,s,s,!1,s,A.ag,!1,r)}return B.c7(q,D.bcE,r,s,!1,!1,s,s)}}
C.Za.prototype={
R(){return new C.ayE(B.a([],x.bx))},
Ur(d){return this.d.$1(d)}}
C.aG6.prototype={}
C.ayE.prototype={
b1x(d,e,f){var w=$.au(),v=new B.as(new B.b9(d,A.b2,A.aO),w),u=this.gaZu()
v.aT(0,u)
w=new B.as(new B.b9(e,A.b2,A.aO),w)
w.aT(0,u)
return new C.aG6(v,w,f)},
Eh(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a4(0)
v.x=B.cI(A.qb,new C.cLP(v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a2()
w=m.a.c.b
v=$.au()
u=new B.as(new B.b9(w.a,A.b2,A.aO),v)
t=m.gaZu()
u.aT(0,t)
m.d!==$&&B.aQ()
m.d=u
u=new B.as(new B.b9(w.b,A.b2,A.aO),v)
u.aT(0,t)
m.e!==$&&B.aQ()
m.e=u
u=new B.as(new B.b9(w.c,A.b2,A.aO),v)
u.aT(0,t)
m.f!==$&&B.aQ()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.M)(u),++q){p=u[q]
o=new B.as(new B.b9(p.a,A.b2,A.aO),v)
o.aT(0,t)
n=new B.as(new B.b9(p.b,A.b2,A.aO),v)
n.aT(0,t)
r.push(new C.aG6(o,n,p.c))}if(r.length===0)r.push(m.b1x("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a4(0)
if(r.y){r.a.c.b=r.gpo()
q=r.a
q.Ur(q.c)}q=r.d
q===$&&B.c()
w=q.S$=$.au()
q.P$=0
q=r.e
q===$&&B.c()
q.S$=w
q.P$=0
q=r.f
q===$&&B.c()
q.S$=w
q.P$=0
for(q=r.w,v=q.length,u=0;u<v;++u){t=q[u]
s=t.a
s.S$=w
s.P$=0
s=t.b
s.S$=w
s.P$=0}r.a1()},
gpo(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
for(s=o.w,r=s.length,q=0;q<s.length;s.length===r||(0,B.M)(s),++q){p=s[q]
t.push(new F.mD(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rw(n,w,v,t,u)},
AV(){var w=0,v=B.j(x.H),u=this,t
var $async$AV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a4(0)
u.y=!1
u.a.c.b=u.gpo()
t=u.a
w=2
return B.b(t.Ur(t.c),$async$AV)
case 2:return B.h(null,v)}})
return B.i($async$AV,v)},
c6Q(){this.m(new C.cLO(this))
this.Eh()},
aYt(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cLR(w,d,v))
w.Eh()},
c6R(d,e){var w=A.d.cA(this.w,e)
this.m(new C.cLZ())
this.Eh()
$.aV.x1$.push(new C.cM_(w))},
QU(d){return this.cl8(d)},
cl8(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QU=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().l1(80,1400,A.eL),$async$QU)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fk(),$async$QU)
case 8:p=f
o=q.b.toLowerCase()
n=J.aip(o,".png")?"image/png":"image/jpeg"
r.m(new C.cLS(d,n,p))
r.Eh()
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
return B.i($async$QU,v)},
xW(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hxd(r,t.gpo()),$async$xW)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cLQ(t,s))
t.Eh()
case 1:return B.h(u,v)}})
return B.i($async$xW,v)},
clq(d){var w,v=this,u=null,t=F.fH0(d.c)
if(t==null)return new B.bO(A.a5,u,u,B.hr(D.bP0,D.fF8,new C.cLU(v,d),u),u)
w=x.p
return new B.D(A.cv,new B.an(A.a_,u,A.aa,A.t,B.a([B.bx(B.m(12),B.fG(t,A.A,u,u,A.cc,A.bU,!0,140,!1,u,1/0),A.ap),B.ao(u,B.B(B.a([v.b4F(A.kj,new C.cLV(v,d)),A.bm,v.b4F(A.cz,new C.cLW(v,d))],w),A.m,u,A.e,A.i,0,u,u),u,u,u,6,6,u)],w),u),u)},
b4F(d,e){var w=null
return B.aH(!1,A.a2,!0,w,B.aO(!1,w,!0,new B.D(A.hu,B.X(d,A.c,w,w,w,18),w),A.cM,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aS,0,w,w,A.cM,w,w,A.aj)},
IX(){var w=0,v=B.j(x.H),u,t=this,s
var $async$IX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.AV(),$async$IX)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.h9W(s,t.gpo(),new C.cLY(t)),$async$IX)
case 4:case 1:return B.h(u,v)}})
return B.i($async$IX,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eI(B.a([new B.D(A.qc,B.hr(D.bTO,D.fLi,n.gaxt(),B.fu(m,m,m,m,m,m,m,m,m,m,m,A.bL,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aF(m,m,m,m,A.aqd,m,m,m,new C.cM0(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.Y9,m,1,m,m,m,!1,m,!1,E.ng,m,m,m,!0,m,m,m,m,m,D.fG0,m,m,m,1,m,!0),j=Au.aVP(O.lz,A.c,Af.WZ,A.op,D.fGN,n.gc6P()),i=B.m(18),h=n.gaxs(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.j0,12)],x.V)
g=B.aB(m,B.p(m,new B.a6(92,142.1818181818182,B.eN(A.A,F.aoT(n.gpo()),A.f,A.dw),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a4)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.es,B.E(B.x(B.a([D.fT3,A.au,B.d(F.h8q(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.ftd,m,m,m),A.W,B.dl(E.apw,E.aUM,h,B.bo(A.d1,m,m,m,m,m,m,m,m,m,m,m))],l),A.E,m,A.e,A.i,0,A.p),1)],l),A.m,m,A.e,A.i,0,m,m),A.f,m,m,new B.o(E.Y9,m,m,i,m,m,A.n),m,m,m,m,A.bf,m,m,m)
h=n.d
h===$&&B.c()
h=B.aL(m,A.Y,!1,m,!0,A.t,m,B.aM(),h,m,m,m,m,m,2,B.br(m,new B.b5(4,B.m(12),A.dk),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.oG,!0,A.a3,m,A.an,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aL(m,A.Y,!1,m,!0,A.t,m,B.aM(),w,m,m,m,m,m,2,B.br(m,new B.b5(4,B.m(12),A.dk),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a3,m,A.an,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aA,h,A.O,w,A.O,B.aL(m,A.Y,!1,m,!0,A.t,m,B.aM(),g,m,m,m,m,m,2,B.br(m,new B.b5(4,B.m(12),A.dk),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a3,m,A.an,m,m,m,m),A.aN],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aP(16,16)
u=new B.ay(O.lz.j(0.18),1,A.r,-1)
t=v+1
s=B.aF(m,m,m,m,D.bSs,m,m,m,v===0?m:new C.cM1(n,v),m,m,m,m,"Move up",A.cb)
r=i.length
q=B.aF(m,m,m,m,D.bYY,m,m,m,v===r-1?m:new C.cM2(n,v),m,m,m,m,"Move down",A.cb)
r=r===1?m:new C.cM3(n,v)
p=new B.aP(12,12)
o=new B.aP(12,12)
g.push(B.p(m,B.x(B.a([new B.ce(A.aM,A.e,A.i,A.m,m,A.p,m,0,B.a([new B.y("Page "+t,m,D.ftM,m,m,m,m,m,m,m,m,m),A.b1,s,q,B.aF(m,m,m,m,B.X(A.ea,A.p0,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.cb)],l),m),B.aL(m,A.Y,!1,m,!0,A.t,m,B.aM(),i[v].a,m,m,m,m,m,2,new B.e5(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b5(4,new B.bg(p,p,p,p),A.dk),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.cf,!0,A.a3,m,A.an,m,m,m,m),A.am,n.clq(i[v]),B.aL(m,A.Y,!1,m,!0,A.t,m,B.aM(),i[v].b,m,m,m,m,m,2,new B.e5(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b5(4,new B.bg(o,o,o,o),A.dk),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a3,m,A.an,m,m,m,m)],l),A.m,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(E.ng,m,new B.bK(u,u,u,u),new B.bg(w,w,w,w),m,m,A.n),m,m,new C.a9_(h),A.ee,D.byD,m,m,m))}return B.oz(!0,B.c7(k,E.ahB,B.cf(g,m,D.bz7,m,m,A.ag,!1),m,!1,!1,j,m),new C.cM4(n),x.C)}}
C.ayG.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.ct:E.ng,q=B.m(16),p=B.m(16),o=s?A.aw.j(0.08):A.c.j(0.04)
s=s?A.aw.j(0.16):A.d1.j(0.22)
w=B.m(12)
v=x.p
return new B.D(A.eI,B.aH(!1,A.a2,!0,t,B.aO(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bd,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bD,B.d(u.e,t,t,t,t,t,t,D.aTl,t,t,t)],v),A.E,t,A.e,A.i,0,A.p),1),B.X(A.eE,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.i,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bf,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.L,0,t,t,t,t,t,A.aj),t)}}
C.ar6.prototype={
R(){return new C.aEV()}}
C.aEV.prototype={
Z(){this.a2()
this.a_a()},
bx(d){this.bH(d)
if(d.c!=this.a.c)this.a1A()},
a1A(){var w=0,v=B.j(x.H),u=this,t
var $async$a1A=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dU(t,x.H),$async$a1A)
case 2:u.d=null
if(u.c!=null)u.m(new C.egG(u))
w=3
return B.b(u.a_a(),$async$a1A)
case 3:return B.h(null,v)}})
return B.i($async$a1A,v)},
a_a(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$a_a=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d3(n,"http://")||J.d3(n,"https://")||J.d3(n,"data:")){o=B.YO(B.cD(n,0,null),new B.PO(!0))
r.d=o}else{o=B.fm("unsupported video ref")
throw B.W(o)}w=7
return B.b(o.iq(0).d7(0,A.p3),$async$a_a)
case 7:if(r.c==null){w=1
break}r.d.tE(!1)
r.m(new C.egE(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ab(m)
$.am.$1("[kiapo video] "+B.w(q))
if(r.c!=null)r.m(new C.egF(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_a,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a1()},
c9x(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.h8(0)
w.m(new C.egH(w))}else{v.q9(0)
w.m(new C.egI(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bJ
n=B.m(8*n.d)
m=B.a([D.jv.j(0.92),D.LL.j(0.95)],x.O)
w=B.J(A.c1.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.X(A.qs,A.c1,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c4(B.at(B.x(B.a([t,new B.a6(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.Q,o,o,!0,o,o,o,o,o,o,o,o),A.K,o,o)],x.p),A.m,o,A.e,A.P,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a9(A.ay,A.aE,A.x,m,o,o),A.n),A.bg)}if(p.f)return B.at(B.X(A.aoL,A.aB,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b9H
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.eN(A.A,new B.a6(r,q,new B.Ar(s,o),o),A.t,A.bU)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.at(B.p(o,B.X(A.i2,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aB(o,B.bx(n,new B.an(A.a_,o,A.b0,A.t,m,o),A.ap),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc9w(),o,o,o,o,o,o,!1,A.a4)}}
C.xR.prototype={
a5(){return"NgmyHatiLayoutKind."+this.b}}
C.jt.prototype={}
C.adN.prototype={
B(d){return B.p3(new C.e3f(this,B.P(d).ax.a===A.J,d),!0,0.72,0.9,0.5,!1,null)}}
C.adb.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.J,s=B.m(18),r=B.m(18),q=B.J(D.jv.j(t?0.35:0.4),A.r,1),p=t?D.Mk:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cx,14)],o),m=B.m(10),l=B.J(A.c1.j(0.5),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dB,6)],o)
w=this.c
o=B.E(B.p(u,new B.fE(0.5625,C.icB(w),u),A.ap,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.aly,u,u,u,u),1)
m=D.jv.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.jv,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aH(!1,A.a2,!0,u,B.aO(!1,s,!0,B.p(u,B.x(B.a([o,B.p(u,B.x(B.a([l,A.cL,B.d(w.c,u,2,A.a1,u,u,u,B.l(u,u,t?A.aB:D.bla,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),A.f,u,u,new B.o(u,u,new B.bK(new B.ay(m,1,A.r,-1),A.a0,A.a0,A.a0),u,u,u,A.n),u,u,u,u,D.ajQ,u,u,u)],v),A.ak,u,A.e,A.i,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.aj)}}
C.xU.prototype={
a5(){return"NgmyMarriageLayoutKind."+this.b}}
C.nP.prototype={}
C.bkI.prototype={
a_j(d){var w=null
return new B.bO(A.a5,w,w,B.BA(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
ca0(){return this.a_j(1)},
ay4(d){var w=null,v=B.m(8),u=B.J(A.ii,A.r,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.afn,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.B(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.J(A.ii,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dP(B.p(v,v,A.f,v,v,new B.o(v,v,B.J(A.ii,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.t(-8.36,0))],u),A.m,v,A.b8,A.i,0,v,v),A.au,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),A.am,w.ay4("TAARIFA ZA WANANDOA"),A.am,w.ca0(),A.cL,w.a_j(0.9),A.cL,w.a_j(0.7),A.O,w.ay4("TAMKO LA MAKUBALIANO"),A.fG,w.a_j(1),A.cL,w.a_j(0.95),A.O,w.ay4("MASHAHIDI"),A.b1,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.Q,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.i,0,A.p)}}
C.adQ.prototype={
B(d){return B.p3(new C.el2(B.P(d).ax.a===A.J,d),!0,0.92,0.96,0.5,!1,null)}}
C.afv.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.J,p=B.m(18),o=B.m(18),n=B.J(A.az.j(q?0.35:0.4),A.r,1),m=q?D.bkI:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cx,14)],l),j=B.m(10),i=B.J(A.az.j(0.5),A.r,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dB,6)],l)
w=this.c
v=C.h8W(w.a)
if(v==null)v=A.d.gI(D.RJ)
u=B.b1(v.f)
t=B.b1(v.r)
s=x.p
l=B.E(B.p(r,new B.fE(0.5625,new B.an(A.a_,r,A.b0,A.t,B.a([B.bT(0,B.fG(C.h8V(v.d),A.A,r,r,A.cc,A.bU,!0,r,!1,r,r),0,0,0),new B.D(A.akw,new C.bkI(v,u,t,r),r)],s),r),r),A.ap,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.aly,r,r,r,r),1)
j=A.az.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:A_.Ml,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aH(!1,A.a2,!0,r,B.aO(!1,p,!0,B.p(r,B.x(B.a([l,B.p(r,B.x(B.a([i,A.cL,B.d(w.c,r,2,A.a1,r,r,r,B.l(r,r,q?A.aB:D.bde,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.E,r,A.e,A.i,0,A.p),A.f,r,r,new B.o(r,r,new B.bK(new B.ay(j,1,A.r,-1),A.a0,A.a0,A.a0),r,r,r,A.n),r,r,r,r,D.ajQ,r,r,r)],s),A.ak,r,A.e,A.i,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj)}}
C.l2.prototype={
a5(){return"NgmyMarriagePaperStyle."+this.b}}
C.a8r.prototype={}
C.Wl.prototype={
R(){var w=$.au()
return new C.aFb(new B.cB(null,x.A),new B.as(A.as,w),new B.as(A.as,w),B.mL(0,null,null),A.d.gI(D.a4z),D.dQC,B.a([],x.L),B.a([],x.gE))}}
C.aFb.prototype={
Z(){var w,v=this
v.a2()
v.w=v.a.c
v.z=new C.zR(C.fKU(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.Y,"","","")
w=x.a
C.fJQ().bN(new C.eo_(v),w)
$.r6().jf(0,"assets/images/ngmy_logo.png").bN(new C.eo0(v),w).eQ(new C.eo1())},
q(){var w=this,v=w.e,u=$.au()
v.S$=u
v.P$=0
v=w.f
v.S$=u
v.P$=0
w.r.q()
w.a1()},
aeR(d){var w=null,v=this.c
if(v!=null)v.K(x.q).f.U(B.b3(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Z,w,w,w,w,w,w,w,w,w,w))},
Je(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Je=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().l1(88,1600,A.eL),$async$Je)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fk(),$async$Je)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hxu(m,p),$async$Je)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bEL(new B.pY(o,1),m),$async$Je)
case 10:if(r.c!=null)r.m(new C.enC(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ab(k)
r.aeR("Could not open that picture. "+B.w(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Je,v)},
Xj(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Xj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hxu(s,q),$async$Xj)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bEL(new B.pY(r,1),s),$async$Xj)
case 4:if(t.c!=null)t.m(new C.eny(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Xj,v)},
aeS(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$aeS=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.enJ(q))
t=4
q.a.toString
p=C.ih6()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$aeS)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.enK(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ab(i)
q.aeR(B.w(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.enL(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aeS,v)},
a_o(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$a_o=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.enE(q,i))
t=4
q.a.toString
p=C.ih5()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$a_o)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.enF(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ab(g)
if(q.c!=null)q.m(new C.enG(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.enH(q))
$.aV.x1$.push(new C.enI(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_o,v)},
cag(d){this.m(new C.enD(this,d))},
Ey(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Ey=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.enA(q))
t=4
w=7
return B.b($.aV.gmG(),$async$Ey)
case 7:w=8
return B.b(B.bQ(A.mD,null,x.H),$async$Ey)
case 8:k=$.aV.al$.x.h(0,q.d)
p=k==null?null:k.gbd()
if(!(p instanceof B.q8))throw B.W("The page is not ready yet.")
w=9
return B.b(p.m5(1800/p.gY(0).a),$async$Ey)
case 9:o=e
w=10
return B.b(o.ht(A.h9),$async$Ey)
case 10:n=e
if(n==null)throw B.W("Could not make the picture.")
w=11
return B.b(A7.agW(J.eR(A.dJ.gaR(n)),"ngmy_news.png","image/png"),$async$Ey)
case 11:m=e
q.aeR(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
q.aeR(B.w(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.enB(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ey,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aF(a2,a2,a2,a2,A.kK,a2,a2,a2,new C.enR(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aF(a2,a2,a2,a2,D.bUj,a2,a2,a2,new C.enS(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aF(a2,a2,a2,a2,A.nx,a2,a2,a2,a4?a1.gb_E():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eI(v,a2,a2,!0,!0,A.Bv,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.f1s,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.f2,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fE(0.7142857142857143,B.eN(A.A,new B.ey(new C.b26(t,s,r,a1.x,a2),a1.d),A.f,A.dw),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,W.t9,a2,a2,a2)
t=a1.as?a2:a1.gcaf()
t=B.a([B.E(B.dl(D.bV6,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cf,a2,a2,a2),t,B.bo(D.tI,a2,a2,a2,A.c,A.h0,a2,a2,new B.b7(B.m(14),P.vy),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bx(B.m(10),B.fG(r,A.A,a2,a2,A.cc,A.bU,!1,48,!1,a2,48),A.ap)
A.d.v(t,B.a([A.at,r,B.aF(a2,a2,a2,a2,D.bRJ,a2,a2,a2,a1.as?a2:a1.gbKK(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.i,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,W.t9,a2,a2,a2)
q=B.aL(a2,A.Y,!1,a2,!0,A.t,a2,B.aM(),a1.e,a2,a2,a2,a2,a2,2,a1.aTv("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.d9,!0,A.a3,a2,A.an,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.dkg[o]
p.push(B.mR(a2,D.tI,new B.y(n.a,a2,A.py,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hm,new C.enT(a1,n),a2,a2,P.vy,a2))}p=B.bX(A.bC,p,A.bq,a2,6,8)
m=a1.Q
m=B.bX(A.bC,B.a([D.fRB,A.bd,B.iO(a2,a2,a2,D.fBf,a2,new C.enU(a1),m==="en",a2,a2,a2,a2),A.ac,B.iO(a2,a2,a2,D.fBa,a2,new C.enV(a1),m==="sw",a2,a2,a2,a2)],w),A.vr,a2,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,W.t9,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.d1(D.a4z,0,B.dB(10,"count",x.S),j),h=i.$ti,i=new B.bS(i,i.gL(0),h.k("bS<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aRZ(g==null?h.a(g):g))}k=B.cf(k,a2,a2,a2,a2,A.aM,!1)
i=B.a([],w)
for(j=B.d1(D.a4z,10,a2,j),h=j.$ti,j=new B.bS(j,j.gL(0),h.k("bS<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aRZ(g==null?h.a(g):g))}j=B.cf(i,a2,a2,a2,a2,A.aM,!1)
i=a1.as?a2:a1.gcai()
h=B.m(18)
v=B.a([new B.ac(0,A.G,A.bB.j(0.4),A.I,18)],v)
v=B.a([u,A.aA,new B.D(A.cv,s,a2),t,A.aA,new B.D(A.cv,r,a2),q,A.O,p,A.W,m,A.aA,new B.D(A.cv,l,a2),new B.a6(a2,78,k,a2),A.O,new B.a6(a2,78,j,a2),A.aN,B.aB(a2,B.p(A.A,B.B(B.a([D.bV0,A.ac,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fp,a2,a2,a2)],w),A.m,a2,A.e,A.P,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.uC,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a4)],w)
if(a4){u=B.a([A.dS,B.B(B.a([D.dBi,A.at,D.bFj],w),A.m,a2,A.e,A.i,0,a2,a2),A.O],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.M)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a8:A.a5
q=e?A.b6.j(0.35):D.tI
p=new B.aP(16,16)
d=new B.ay(A.bz,1,A.r,-1)
u.push(new B.bO(r,a2,a2,B.p(a2,new B.y(f.b,a2,D.fra,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A9.WN,new B.o(q,a2,new B.bK(d,d,d,d),new B.bg(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cv,A.iB,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.d5R[o]
t.push(B.mR(a2,D.tI,new B.y(a0,a2,A.E5,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hm,new C.enW(a1,a0),a2,a2,P.vy,a2))}u.push(B.bX(A.bC,t,A.bq,a2,6,8))
u.push(A.W)
t=B.E(B.aL(a2,A.Y,!1,a2,!0,A.t,a2,B.aM(),a1.f,a2,a2,a2,a2,a2,2,a1.aTv("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.enX(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.d9,!0,A.a3,a2,A.an,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gcah()
u.push(B.B(B.a([t,A.ac,B.Ic(A.z5,s,B.nI(a2,A.b6,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.i,0,a2,a2))
u.push(A.aA)
t=a1.as?a2:a1.gb_E()
u.push(B.dl(A.nx,D.fN_,t,B.bo(A.cV,a2,a2,a2,a2,A.JL,a2,a2,new B.b7(B.m(16),A.a0),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cf(v,a1.r,A.akh,a2,a2,A.ag,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.J(E.kb.j(0.5),A.r,1)
v.push(B.bT(0,B.eb(B.at(B.p(a2,B.B(B.a([E.a99,A.es,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.j2,a2,a2,a2)],w),A.m,a2,A.e,A.P,0,a2,a2),A.f,a2,a2,new B.o(E.Bl,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bBv,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c7(a3,A.Bv,new B.an(A.a_,a2,A.aa,A.t,v,a2),a2,!1,!1,a2,a2)},
aTv(d){var w=null
return B.br(w,new B.b5(4,B.m(14),A.a0),w,A.eT,w,w,w,w,!0,w,w,w,w,w,w,D.tI,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A1.JW,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aRZ(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b1(d.f),p=s?A.bB:A.bz
p=B.J(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b1(d.x),t,t,t,5,t,A.kG,t,t,t,t),A.fG],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b1(v).j(0.5),t,t,t,2,t,D.bxE,t,t,t,t))
w.push(A.cL)
w.push(new B.D(A.jA,B.d(d.b,t,1,A.a1,t,t,t,B.l(t,t,B.b1(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aB(t,B.p(t,B.x(w,A.m,t,A.b8,A.i,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.iA,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.enz(this,d),t,t,t,t,t,t,!1,A.a4)}}
C.zR.prototype={
bd7(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.zR(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cKN(d){var w=null
return this.bd7(w,w,w,w,w,d,w,w,w,w)},
ag(){var w=this
return B.G(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aDu(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cha(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aW(g);v.C();){u=v.gT(v)
if(A.a.i(B.w(u)).length!==0)w.push(A.a.i(B.w(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fD(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(w,new C.ch8(),B.T(w).k("N<1,n>")).c0(0,new C.ch9())
t=B.C(w,w.$ti.k("L.E"))}else t=k
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
return this.bd7(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gFM(d){return this.f}}
C.tx.prototype={
a5(){return"NewsLayout."+this.b}}
C.BQ.prototype={
a5(){return"NewsFrame."+this.b}}
C.lp.prototype={}
C.b26.prototype={
rF(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b1(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b_G(d,e,f,g){return this.rF(d,e,null,1.25,f,A.bp,g)},
Qd(d,e,f,g,h){return this.rF(d,e,f,1.25,g,A.bp,h)},
aya(d,e,f,g,h){return this.rF(d,e,null,f,g,A.bp,h)},
ay9(d,e,f,g,h){return this.rF(d,e,f,g,0,A.bp,h)},
b_I(d,e,f,g,h){return this.rF(d,e,null,f,0,g,h)},
cam(d,e,f,g,h,i){return this.rF(d,e,f,g,0,h,i)},
ay8(d,e,f,g){return this.rF(d,e,null,f,0,A.bp,g)},
aeV(d,e,f){return this.rF(d,e,null,f,0,A.bp,A.cP)},
b_H(d,e,f,g,h){return this.rF(d,e,f,g,0,h,A.cP)},
cal(d,e,f,g){return this.rF(d,e,null,f,0,g,A.cP)},
cak(d,e,f,g){return this.rF(d,e,f,g,0,A.bp,A.cP)},
aeW(d,e,f,g,h,i){return this.rF(d,e,f,g,h,A.bp,i)},
b_F(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.jR(new B.eu(d,u,u,A.cQ,u,u,u,u,u,u,new B.F(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a3,A.bZ,new B.jB(1),u,u,h,u,A.bW,u)
v.nZ(g)
if(!v.b.a.c.gaFc())return w
w-=2}return j},
aeT(d,e,f,g,h,i,j,k){return this.b_F(d,e,f,g,h,i,j,k,A.bp)},
aAi(d,e,f){var w=null,v=d==null?B.b1(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a6(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.m,w,A.e,A.i,0,A.p)},
aAh(d){return this.aAi(null,!1,d)},
ahP(d,e){return this.aAi(null,d,e)},
csd(d,e){return this.aAi(d,!1,e)},
gb1U(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaWa(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
P_(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.aeT(w.gaWa(),u,A.Q,d,g,h,i,1.02)
return B.d(w.gaWa(),v,g,A.a1,v,v,v,w.ay9(u,t,f,1.02,A.Q),e,v,v)},
aWf(d){return this.P_(d,A.K,null,2,78,30)},
acf(d,e,f,g,h){return this.P_(d,e,null,f,g,h)},
bZU(d,e,f,g,h){return this.P_(d,A.K,e,f,g,h)},
bZT(d,e,f){return this.P_(d,A.K,null,e,f,30)},
Sa(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bJ
w=v.d.as
return new B.D(A.jg,B.d(s,u,g,A.a1,u,u,u,v.b_H(w,v.b_F(t,w,A.cP,d,g,h,15,1.2,A.cE),f,1.2,A.cE),e,u,u),u)},
b7M(d){return this.Sa(d,A.K,null,3,24)},
aBM(d,e,f,g){return this.Sa(d,e,null,f,g)},
czT(d,e,f){return this.Sa(d,A.K,e,3,f)},
b7N(d,e){return this.Sa(d,e,null,3,24)},
czR(d,e){return this.Sa(d,A.K,null,3,e)},
czS(d,e,f){return this.Sa(d,e,null,3,f)},
arN(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.eZ,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Qd("Roboto",12,d==null?B.b1(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.E(B.p(v,v,A.f,B.b1(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b1(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.i,0,v,v)},
NW(){return this.arN(null,!0)},
arM(d){return this.arN(null,d)},
bGH(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bJ
return new B.D(A.hZ,new B.a6(d,w,B.d(v,w,2,A.a1,w,w,w,this.cal(this.d.as,13.5,1.2,A.cE),e,w,w),w),w)},
vJ(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.V(Date.now(),0,!1),i=m.gb1U(),h=A.o.ao(j.bD(B.c3(B.bC(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.i4r(Math.max(1,B.bC(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.b_G(k,12,1.2,A.Q),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.aeT(i,v,A.Q,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.aeT(i.toUpperCase(),v,A.Q,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b1(h.x)
h=h.ch?B.b1(h.f):A.c
s=x.p
return B.x(B.a([B.p(l,B.B(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eM,l,l,l,m.aeW(v,u*0.84,h,1,1,A.Q),l,l,l),1)],s),A.m,l,A.e,A.i,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.O,B.B(B.a([B.d(C.bE_(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.iG,A.i,0,l,l),A.am,m.ahP(!0,3)],s),A.m,l,A.e,A.i,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.B(B.a([B.p(l,l,A.f,B.b1(h),l,l,l,u*0.8,l,l,l,l,l,14),A.es,B.E(B.d(i,l,1,A.eM,l,l,l,m.ay8(v,u*0.9,1,A.Q),l,l,l),1)],w),A.m,l,A.e,A.i,0,l,l),A.W,B.B(B.a([B.d(C.bE_(j),l,l,l,l,l,l,m.Qd(k,13,B.b1(h),0.6,A.Q),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.iG,A.i,0,l,l),A.O,m.csd(B.b1(h),3)],w),A.m,l,A.e,A.i,0,A.p)
case"logo":r=a0?52:64
w=m.gb1U()
v=B.d("NGMY",l,l,l,l,l,l,m.aya(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b1(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.B(B.a([v,A.ac,B.eL(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.rF(k,r*0.72,o,1.05,-0.5,A.cE,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b1,new B.ds(1,A.cn,B.d(w.toUpperCase(),l,2,A.a1,l,l,l,m.aeW(k,12.5,B.b1(h).j(0.85),1.3,1.2,A.Q),A.dW,l,l),l)],n),A.m,l,A.e,A.i,0,l,l),A.O,B.p(l,l,A.f,B.b1(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.i,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iG,A.i,0,l,l)
t=m.ahP(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.ay8(v,u,1,A.Q),A.K,l,l)
q=a0?4:8
return B.x(B.a([w,A.au,t,new B.a6(l,s,l,l),v,new B.a6(l,q,l,l),m.ahP(!0,1.4),A.au,B.d(C.bE_(j).toUpperCase(),l,l,l,l,l,l,f,A.K,l,l),A.au,m.aAh(3)],h),A.m,l,A.e,A.i,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.aya(v,u,1,3,A.Q),A.K,l,l),A.O,m.ahP(!0,1.2),A.au,B.B(B.a([B.d(C.bE_(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iG,A.i,0,l,l),A.au,m.aAh(3)],h),A.m,l,A.e,A.i,0,A.p)}},
adp(d){return this.vJ(d,!1)},
aeU(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b1(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.aeW("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
caj(d,e){return this.aeU(d,null,e,null)},
aYl(d){var w=null,v=new B.V(Date.now(),0,!1),u=A.o.F(B.de(v),12)===0?12:A.o.F(B.de(v),12),t=B.b1(this.d.w).j(0.75),s=this.ay9("Roboto",15,t,1,A.cy),r=B.X(E.amY,t,w,w,w,18),q=A.a.ar(A.os[B.bM(v)-1],0,3),p=A.a.aS(A.o.u(B.fP(v)),2,"0"),o=B.de(v)>=12?"PM":"AM"
return B.B(B.a([r,A.ac,B.d(q+" "+B.bW(v)+", "+B.bC(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fZ,w,w,w,1),B.X(d,t,w,w,w,19),A.ac,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.i,0,w,w)},
awV(){return this.aYl(A.nw)},
b4T(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a1,w,w,w,this.aeW("Roboto",this.aeT(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
aAl(d,e,f){return this.b4T(d,e,f,30)},
aBP(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bJ
return new B.D(A.vT,B.d(v,w,e,A.a1,w,w,w,this.cak("Roboto",f,B.b1(this.d.w).j(0.88),1.35),w,w,w),w)},
b7R(d){return this.aBP(d,3,22)},
cA3(d,e){return this.aBP(d,e,22)},
tU(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fG(r,A.A,s,s,A.cc,A.bU,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.Bn(D.bEl,w,s)
if(v==="sepia")w=new B.Bn(D.bEk,w,s)}else{r=this.d
v=r.w
u=B.b1(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.at(B.X(A.yE,B.b1(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c4(s,new B.o(s,s,s,s,s,new B.c2(A.A,0.95,A.x,s,0,B.a([A.L,A.Y5.j(0.38)],x.O),s,s),A.n),A.bg))
return new B.a6(d,e,new B.an(A.a_,s,A.b0,A.t,v,s),s)},
qG(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.J(B.b1(j),A.r,3)
j=B.J(B.b1(j),A.r,1)
return B.p(k,B.p(k,l.tU(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.ev,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.m7,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.ehe,14)],x.V)
v=l.tU(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eL(A.A,-0.035,B.p(k,B.x(B.a([v,B.E(B.at(B.d(u,k,2,A.a1,k,k,k,l.b_H(j.as,13.5,D.beZ,1.1,A.cE),A.K,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.i,0,A.p),A.f,k,k,new B.o(D.biO,k,k,k,w,k,A.n),k,e,k,k,D.bz2,k,k,d),k)
case 3:w=B.m(30)
j=B.J(B.b1(j.x),A.r,5)
return B.p(k,B.bx(B.m(25),l.tU(d-10,e-10),A.ap),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.J(B.b1(j.x),A.r,6)
j=B.b1(j.f)
v=t-10
return new B.a6(d,e,B.at(B.p(k,B.hT(l.tU(v,v),A.ap),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.m7,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.egV,10)],x.V)
return B.eL(A.A,0.025,new B.a6(d,e,new B.an(A.a_,k,A.aa,A.f,B.a([B.bT(0,B.p(k,l.tU(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.rt,k,k,k),0,0,0),B.ao(k,B.eL(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eL(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b1(j.x)
return new B.a6(d,e,B.b4(B.nD(l.tU(d,e),A.ap,D.hiu),new C.bdQ(j,k),k,k,A.ax),k)
case 7:j=x.p
w=B.a([l.tU(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bh(u));++n){m=new B.aP(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bO,k,k,new B.bg(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cN(0,q,0,p,k,k,new B.ce(A.aM,A.qx,A.i,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.a_,k,A.b0,A.t,w,k),A.f,A.ej,k,k,k,e,k,k,D.bDA,k,k,d)
case 8:w=d/2
v=B.xd(A.fE,new B.aP(w,w))
j=B.J(B.b1(j.x),A.r,5)
w-=5
return B.p(k,B.bx(B.xd(A.hA,new B.aP(w,w)),l.tU(d-10,e-10),A.ap),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.h_,22)],x.V)
return B.p(k,l.tU(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bS,k,k,d)
case 10:return new B.a6(d,e,B.nD(l.tU(d,e),A.ap,D.hpH),k)
case 0:j=B.J(B.b1(j.w),A.r,2.4)
return B.p(k,l.tU(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.ev,k,k,d)}},
aPy(d,e){return this.d.e===D.Sn?A.bJ:this.bGH(d,e)},
WQ(d){return this.aPy(d,A.K)},
gaB5(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
aB4(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.E(B.at(B.d("\u201c"+m+"\u201d",n,7,A.a1,n,n,n,o.b_I(v.Q,19,1.15,A.cE,A.Q),A.K,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a1,n,n,n,o.Qd("Roboto",12.5,B.b1(t),1.2,A.u),n,n,n))
if(p)r.push(A.au)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a1,n,n,n,o.aeV(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jo(B.x(q,A.E,n,A.e,A.i,0,A.p),A.t,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bf,n,n,d)},
gciE(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a9X(d,e,f,g){return B.cy(new C.chb(this,e,d,f,g))},
a9W(d){return this.a9X(d,22,!0,18)},
X2(d,e){return this.a9X(d,22,!0,e)},
aQA(d,e,f){return this.a9X(d,22,e,f)},
bIH(d,e,f){return this.a9X(d,e,!0,f)},
baP(d,e,f,g){return B.cy(new C.chc(this,e,d,g,!0,f))},
chr(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.adp(824),A.aA,k.aWf(824),k.b7M(824),A.O,k.NW(),A.ad,B.at(k.qG(824,360),j,j,j),k.WQ(824),A.ad,B.E(k.a9W(3),1)],x.p),A.ak,j,A.e,A.i,0,A.p)
case 1:w=x.p
return B.x(B.a([k.adp(824),A.aN,new B.a6(j,350,B.B(B.a([new B.a6(440,j,B.x(B.a([k.acf(440,A.bi,3,62,26),k.aBM(440,A.bi,2,20),A.b1,k.arN(B.b1(h.x),!1)],w),A.E,j,A.e,A.i,0,A.p),j),A.JM,B.x(B.a([k.qG(362,310),k.WQ(362)],w),A.m,j,A.e,A.i,0,A.p)],w),A.E,j,A.e,A.i,0,j,j),j),A.W,k.aAh(2),A.ad,B.E(k.a9W(3),1)],w),A.ak,j,A.e,A.i,0,A.p)
case 2:w=k.vJ(824,!0)
v=B.b1(h.x)
u=h.ch
t=x.p
s=B.a([k.bZU(788,u?B.b1(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.czT(788,u?B.b1(h.f):A.c,22))
v=B.p(j,B.x(s,A.m,j,A.e,A.i,0,A.p),A.f,v,j,j,j,j,j,j,A.BR,j,j,j)
u=B.a([B.at(k.qG(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Sn){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a1,j,j,j,k.ay9(i,14,A.c,1.15,A.Q),j,j,j),A.f,h,j,j,j,j,j,j,A.lD,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.ad,v,A.ad,new B.an(A.a_,j,A.aa,A.t,u,j),A.O,k.NW(),A.W,B.E(k.X2(2,21),1)],t),A.ak,j,A.e,A.i,0,A.p)
case 3:h=k.vJ(824,!0)
w=k.qG(824,560)
v=B.a([A.L,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.ad,new B.an(A.b7,j,A.aa,A.t,B.a([w,B.ao(0,B.p(j,k.P_(780,A.bi,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a9(A.b4,A.b7,A.x,v,j,j),A.n),j,j,j,j,D.bBO,j,j,j),j,j,0,0,j,j)],u),j),k.b7N(824,A.bi),A.O,k.NW(),A.W,B.E(k.a9W(3),1)],u),A.ak,j,A.e,A.i,0,A.p)
case 4:h=x.p
return B.x(B.a([k.adp(824),A.aA,k.aWf(824),k.b7M(824),A.O,k.NW(),A.ad,B.E(k.baP(3,300,B.x(B.a([k.qG(300,300),k.WQ(300)],h),A.m,j,A.e,A.i,0,A.p),360),1)],h),A.ak,j,A.e,A.i,0,A.p)
case 5:w=k.vJ(824,!0)
v=x.p
u=B.x(B.a([k.acf(440,A.bi,3,62,26),k.aBM(440,A.bi,2,20),A.b1,k.arM(!1)],v),A.E,j,A.e,A.i,0,A.p)
return B.x(B.a([w,A.bu,new B.a6(j,400,B.B(B.a([new B.a6(440,j,u,j),A.aRh,new B.D(A.hZ,k.qG(364,h.e===D.Sn?400:330),j)],v),A.E,j,A.e,A.i,0,j,j),j),A.aA,B.E(k.X2(2,21),1)],v),A.ak,j,A.e,A.i,0,A.p)
case 6:return B.x(B.a([k.adp(824),A.ad,k.bZT(824,2,70),k.czR(824,21),A.O,k.NW(),A.ad,B.E(k.baP(3,340,B.at(k.qG(340,340),j,j,j),350),1)],x.p),A.ak,j,A.e,A.i,0,A.p)
case 7:w=k.vJ(824,!0)
v=B.b1(h.x)
u=Date.now()
u=C.bE_(new B.V(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Qd(i,13,h.ch?B.b1(h.f):A.c,1.2,A.u),A.K,j,j),A.f,v,j,j,j,j,j,j,A.bf,j,j,j),A.aA],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.b_I(h.Q,24,1.15,A.cE,A.Q),j,j,j))
v.push(A.b1)
if(k.gaB5())v.push(k.aB4(230,250))
return B.x(B.a([w,A.aA,B.E(B.B(B.a([new B.a6(230,j,B.x(v,A.ak,j,A.e,A.i,0,A.p),j),B.p(j,j,A.f,B.b1(h.w),j,j,j,j,j,A.ajO,j,j,j,1.2),new B.a6(570,j,B.x(B.a([k.acf(570,A.bi,3,62,28),k.czS(570,A.bi,20),A.O,k.arM(!1),A.O,B.at(k.qG(570,330),j,j,j),k.WQ(570),A.W,B.E(k.aQA(2,!1,17),1)],t),A.ak,j,A.e,A.i,0,A.p),j)],t),A.E,j,A.e,A.i,0,j,j),1)],t),A.ak,j,A.e,A.i,0,A.p)
case 8:w=k.vJ(824,!0)
v=h.ch
u=v?B.b1(h.x):B.b1(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Qd(i,13,v?A.w:B.b1(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.ad,B.p(j,B.x(B.a([t,A.am,k.P_(788,A.bi,v?A.w:B.b1(h.f),2,72,30)],s),A.E,j,A.e,A.i,0,A.p),A.f,u,j,j,j,j,j,j,D.bA5,j,j,j),k.b7N(824,A.bi),A.W,B.at(k.qG(824,310),j,j,j),k.WQ(824),A.O,k.NW(),A.W,B.E(k.a9W(3),1)],s),A.ak,j,A.e,A.i,0,A.p)
case 10:w=x.p
return B.x(B.a([k.vJ(824,!0),A.aN,new B.an(A.a_,j,A.aa,A.t,B.a([k.qG(824,430),B.ao(18,k.caj(k.c.b,17),j,j,18,j,j,j)],w),j),A.bu,k.aAl(824,3,66),k.b7R(824),A.ad,B.p(j,j,A.f,B.b1(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ad,k.awV(),A.aA,B.E(k.X2(2,18),1)],w),A.ak,j,A.e,A.i,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.vJ(824,!0),A.bu,new B.a6(j,500,B.B(B.a([new B.a6(410,j,B.x(B.a([k.aeU(k.c.b,B.b1(h).j(0.14),15,B.b1(h)),A.aN,k.b4T(410,4,58,28),k.aBP(410,6,20),A.b1],w),A.E,j,A.e,A.i,0,A.p),j),U.aRi,k.qG(390,500)],w),A.E,j,A.e,A.i,0,j,j),j),A.aA,k.awV(),A.aN,B.E(k.X2(2,18),1)],w),A.ak,j,A.e,A.i,0,A.p)
case 12:w=k.vJ(824,!0)
v=k.qG(824,420)
u=B.hHT(-0.25)
t=B.b1(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.I,10)],x.V)
r=x.p
return B.x(B.a([w,A.aN,new B.an(A.a_,j,A.aa,A.t,B.a([v,B.ao(22,B.fw(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.cam(i,30,A.c,1,A.cE,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bC3,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bu,k.aAl(824,3,62),k.b7R(824),A.ad,B.p(j,j,A.f,B.b1(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ad,k.aYl(A.ld),A.aA,B.E(k.X2(2,18),1)],r),A.ak,j,A.e,A.i,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vJ(824,!0)
u=h.w
t=x.p
w=B.a([k.qG(824,380),B.ao(j,k.aeU(w.b,B.b1(u).j(0.85),15,B.b1(h.f)),j,j,16,j,16,j)],t)
s=k.aAl(824,2,60)
r=k.cA3(824,2)
p=k.awV()
o=B.E(k.aQA(2,!1,18),1)
n=B.J(B.b1(u).j(0.18),A.r,1)
m=B.m(18)
h=h.x
l=B.b1(h).j(0.05)
return B.x(B.a([v,A.aN,new B.an(A.a_,j,A.aa,A.t,w,j),A.aN,s,r,A.W,p,A.aA,o,A.ad,B.p(j,B.B(B.a([B.bx(B.m(14),k.tU(150,104),A.ap),A.oD,B.E(B.x(B.a([k.aeU("RELATED",B.b1(h).j(0.14),12,B.b1(h)),A.O,B.d(q,j,2,A.a1,j,j,j,k.ay8(i,19,1.15,A.H),j,j,j)],t),A.E,j,A.e,A.P,0,A.p),1),B.X(A.eE,B.b1(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.i,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bf,j,j,j)],t),A.ak,j,A.e,A.i,0,A.p)
case 9:return B.x(B.a([k.vJ(824,!0),A.bu,k.acf(824,A.bi,3,62,30),k.aBM(824,A.bi,2,22),A.W,k.arM(!1),A.W,B.at(k.qG(824,330),j,j,j),k.aPy(824,A.bi),A.aN,B.E(k.bIH(2,40,21),1)],x.p),A.ak,j,A.e,A.i,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bT(0,B.c4(s,new B.o(s,s,s,s,s,new B.a9(A.ay,A.aE,A.x,B.a([B.b1(p),B.b1(q.r)],x.O),s,s),A.n),A.bg),0,0,0)],o)
if(q.ax)n.push(B.bT(0,B.b4(s,s,s,new C.bai(B.b1(q.w),s),A.ax),0,0,0))
w=q.w
n.push(new B.D(D.bCA,B.x(B.a([B.E(t.chr(),1),A.O,B.p(s,s,A.f,B.b1(w),s,s,s,1.4,s,s,s,s,s,s),A.fG,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b_G(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Qd(r,11,B.b1(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.iG,A.i,0,s,s)],o),A.ak,s,A.e,A.i,0,A.p),s))
v=B.b1(w)
n.push(B.bT(0,B.dX(B.b4(s,s,s,new C.bt5(v.j(q.ch?0.07:0.06),s),A.ax),!0,s),0,0,0))
p=B.b1(p).j(0.75)
v=B.J(B.b1(w).j(0.5),A.r,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hT(B.fG(q,A.A,s,s,A.cc,A.bU,!1,30,!1,s,30),A.ap))
else o.push(B.X(A.nw,B.b1(w),s,s,s,28))
o.push(A.ac)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.aya(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.dX(B.d9(B.p(s,B.B(o,A.m,s,A.e,A.P,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bDJ,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a6(900,1260,B.jo(new B.an(A.a_,s,A.aa,A.t,n,s),A.t,s),s)}}
C.bdR.prototype={
jl(d){return C.hmz(d)},
jZ(d){return!1}}
C.bdQ.prototype={
a3(d,e){var w,v=C.hmz(e)
$.S()
w=B.I()
w.r=this.b.gp(0)
w.b=A.ab
w.c=6
return d.aG(v,w)},
aw(d){return!d.b.A(0,this.b)}}
C.bvB.prototype={
jl(d){var w,v,u,t,s,r,q,p,o=new B.e9()
o.d4(3)
w=$.S()
v=B.a([],x.v)
u=new B.aG(w.r,A.ah,null,null,v)
u.D(new B.aY(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.aq(s,o.ah()*14)
v.push(w)
r=u.f
if(r!=null)w.by(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.D(new B.aq(t,8))
w=d.b
r=w-8
u.D(new B.aq(t,r))
for(;t>0;t-=14){q=new B.aq(t,w-o.ah()*14)
v.push(q)
p=u.f
if(p!=null)q.by(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.D(new B.aq(0,r))
u.D(new B.bt())
return u},
jZ(d){return!1}}
C.bai.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.e9()
k.d4(7)
$.S()
w=B.I()
for(v=this.b,u=e.a,t=e.b,s=d.a,r=0;r<700;++r){w.r=v.j(0.03+k.ah()*0.07).gp(0)
q=k.ah()
p=k.ah()
o=k.ah()
n=w.G()
s.drawCircle(q*u,p*t,0.4+o*1.4,n)
n.delete()}for(v=x.O,r=0;r<5;++r){q=k.ah()*u
p=k.ah()*t
m=50+k.ah()*90
w.sam(new B.c2(A.A,0.5,A.x,l,0,B.a([A.Xy.j(0.13),A.L],v),l,l).aB(0,B.bY(new B.t(q,p),m)))
n=w.G()
s.drawCircle(q,p,m,n)
n.delete()}w.sam(l)},
aw(d){return!1}}
C.bt5.prototype={
a3(d,e){var w,v,u=null,t=e.a,s=B.fv(u,u,u,u,B.cS(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a3,A.bZ,u,A.dA,A.bW)
s.el()
w=d.a
J.bm(w.save())
w.translate(t/2,e.b*0.52)
d.ig(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a3(d,new B.t(-v/2,-t.gbb(t)/2))
w.restore()},
aw(d){return!d.b.A(0,this.b)}}
C.Wm.prototype={
R(){return new C.aFd()}}
C.aFd.prototype={
Z(){var w=this
w.a2()
B.fBo(w.a.c,null).bN(new C.eox(),x.g7).bN(new C.eoy(w),x.a)
w.a.toString},
gaOm(){var w=D.axv[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gayb(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaOm()
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
a_q(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a_q=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.eok(r))
t=4
q=r.gayb()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.S()
n=new B.p0()
m=B.z9(n,null)
i=B.I()
i.Q=A.h7
m.oz(g,q,new B.a3(0,0,0+p,0+o),i)
w=7
return B.b(n.nf().x9(J.hbZ(p),J.hbZ(o)),$async$a_q)
case 7:l=e
w=8
return B.b(l.ht(A.h9),$async$a_q)
case 8:k=e
j=r.c
if(j!=null){j=B.a4(j,!1)
i=k
i.toString
j.O(J.eR(J.vD(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.eol(r))
r.c.K(x.q).f.U(D.fax)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_q,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aF(s,s,s,s,A.kK,s,s,s,new C.eor(d),s,s,s,s,s,s),p=x.p
q=B.eI(B.a([B.bN(!1,D.fPD,s,s,!0,s,s,s,t.y||r==null?s:t.gcan(),s,s)],p),s,s,!0,!0,A.Bv,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fTI,s,s,s,1,s,!0)
if(r==null)p=A.lZ
else{w=B.E(new B.D(A.bQ,B.at(new B.fE(t.gaOm(),B.cy(new C.eos(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iA,B.iO(s,s,s,new B.y(D.axv[u].a,s,A.a9N,s,s,s,s,s,s,s,s,s),s,new C.eot(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.p(s,B.bl(!0,B.x(B.a([new B.a6(s,40,B.cf(v,s,s,s,s,A.aM,!1),s),B.B(B.a([D.bVN,B.E(B.kP(s,s,s,6,1,new C.eou(t),t.f),1),D.bVo],p),A.m,s,A.e,A.i,0,s,s),D.fMT,A.am,B.bN(!1,D.fMB,s,s,!0,s,s,s,new C.eov(t,d),s,s)],p),A.m,s,A.e,A.P,0,A.p),!0,!1,A.af,!0,!1),A.f,D.Yj,s,s,s,s,s,s,D.bzr,s,s,s)],p),A.m,s,A.e,A.i,0,A.p)}return B.c7(q,A.Bv,p,s,!1,!1,s,s)}}
C.bdn.prototype={
a3(d,e){var w
$.S()
w=B.I()
w.Q=A.cc
return d.oz(this.b,this.c,new B.a3(0,0,0+e.a,0+e.b),w)},
aw(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a0v.prototype={
R(){var w=$.au(),v=x.A
return new C.aGG(new B.as(A.as,w),new B.as(new B.b9("NGMY",A.b2,A.aO),w),new B.cB(null,v),new B.cB(null,v),A.d.gI(D.a5b),"quote"+1000*Date.now(),B.a([],x.t),B.aX(x.S),A.K)}}
C.oJ.prototype={}
C.aGG.prototype={
gaWn(){var w,v,u=this
if(u.p1)w=new B.vT(1,u.p2,0.9,u.p3).lI().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.E(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
Z(){var w=this
w.a2()
w.a.toString
w.p4=null
$.aV.x1$.push(new C.eYy(w))},
q(){var w=this.d,v=$.au()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a1()},
Z1(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Z1=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.r6().jf(0,"assets/images/ngmy_logo.png"),$async$Z1)
case 7:q=e
p=J.eR(J.vD(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bEL(new B.pY(p,1),o),$async$Z1)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eXq(r,p))
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
return B.i($async$Z1,v)},
Qg(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qg=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().l1(92,1800,A.eL),$async$Qg)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fk(),$async$Qg)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bEL(new B.pY(p,1),n),$async$Qg)
case 9:if(r.c==null){w=1
break}r.m(new C.eXO(r,p))
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
return B.i($async$Qg,v)},
b4e(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aC=w.aN=w.aE=w.aA=w.a_=w.b8=w.bj=w.y2=0
w.b1=null
w.b0=0.25
w.be=null
w.bM=0.5
w.aJ=1
w.c9=w.bG=w.bi=0
w.cL=w.c6=!1},
aY5(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bBq(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.dnh)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bBq(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bBq(C.h6P(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bBq(C.h6P(1-a0*0.5,n,n,n),w)}return a1?C.bBq(C.h6P(-1,255,255,255),w):w},
aBV(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).lb(0,this.d.a.a),t=B.C(u,B.a7(u).k("L.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.zr(u,v,w)
this.dx.pp(new C.eXY(t),!0)
return t},
b6M(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aBV()
w=C.ieM(e.d.a.a,e.db)
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
return C.ibd(d,k,v,a0,j,e.gaWn(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cxJ(){return this.b6M(null)},
Dp(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$Dp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aV.gmG(),$async$Dp)
case 3:w=4
return B.b(B.bQ(A.eS,null,x.H),$async$Dp)
case 4:w=5
return B.b($.aV.gmG(),$async$Dp)
case 5:s=$.aV.al$.x.h(0,t.r)
r=s==null?null:s.gbd()
if(!(r instanceof B.q8)){u=null
w=1
break}w=7
return B.b(r.m5(1080/r.gY(0).a),$async$Dp)
case 7:w=6
return B.b(e.ht(A.h9),$async$Dp)
case 6:q=e
u=q==null?null:J.eR(A.dJ.gaR(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Dp,v)},
aaO(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aaO=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eX9(q))
t=4
w=7
return B.b(q.Dp(),$async$aaO)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cI.gcp().aL(p)
n=C.C3(null,null,null,null,D.ox,6,!1,null,null,null,null,null,C.cF(),null,!1,null,"NGMY Quote",null,null,B.a([q.b6M(o)],x.g),"office_blue",null,!1,null)
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
if(q.c!=null)q.m(new C.eXa(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aaO,v)},
AE(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$AE=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eX7(q))
t=4
w=7
return B.b($.aV.gmG(),$async$AE)
case 7:w=8
return B.b(B.bQ(A.nn,null,x.H),$async$AE)
case 8:w=9
return B.b($.aV.gmG(),$async$AE)
case 9:k=$.aV.al$.x.h(0,q.f)
p=k==null?null:k.gbd()
if(!(p instanceof B.q8))throw B.W("The picture is not ready yet.")
w=10
return B.b(p.m5(1080/p.gY(0).a),$async$AE)
case 10:o=e
w=11
return B.b(o.ht(A.h9),$async$AE)
case 11:n=e
if(n==null)throw B.W("Could not make the picture.")
w=12
return B.b(A7.agW(J.eR(A.dJ.gaR(n)),"ngmy_quote.png","image/png"),$async$AE)
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
if(q.c!=null)q.m(new C.eX8(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AE,v)},
ckz(){var w=this.p4
w.toString
return B.cy(new C.eXH(this,w))},
b_P(d,e){var w=null
return B.br(w,w,w,w,w,D.flr,w,w,!0,new B.b5(4,B.m(16),P.vy),w,w,w,w,w,D.tI,!0,w,w,w,w,new B.b5(4,B.m(16),D.b2_),w,w,w,w,w,w,w,w,A2.Eb,e,w,w,w,w,w,w,w,D.fr1,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
y6(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b6,w,w,w,15),A.bm],v))
u.push(B.d(d,w,w,w,w,w,w,D.aTW,w,w,w))
return new B.D(I.ajE,B.B(u,A.m,w,A.e,A.i,0,w,w),w)},
b_O(d,e){var w=null,v=B.m(18),u=B.J(A.bz,A.r,1)
return B.p(w,B.aH(!1,A.a2,!0,w,d,A.f,w,0,w,w,w,w,w,A.jX),A.f,w,w,new B.o(D.tI,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vQ(d){return this.b_O(d,A.bA)},
oj(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.uC:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.J(f?A.L:A.bz,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jN,r,r,r,16),A.bm],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.jN,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aB(r,B.dd(r,B.B(s,A.m,r,A.e,A.P,0,r,r),r,r,A.b5,new B.o(w,r,u,v,r,p,A.n),A.hr,r,r,r,A.G7,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
agP(d,e,f){return this.oj(d,null,e,f)},
ayf(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b6.j(0.28):A.c.j(0.05),t=g?A.eH:A.bz,s=x.p
v=B.a([B.dd(w,d,w,w,A.b5,new B.o(u,w,B.J(t,A.r,g?2:1),v,w,w,A.n),A.hr,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aB
A.d.v(v,B.a([A.au,B.d(f,w,1,A.a1,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.Q,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aB(w,new B.a6(j,w,B.x(v,A.m,w,A.e,A.P,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a4)},
b_S(d,e,f,g,h,i){return this.ayf(d,e,f,g,h,5,i)},
ku(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,E.aSI,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aB(u,D.ely,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eXU(this,h,i),u,u,u,u,u,u,!1,A.a4))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aSZ,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.a_Q,u,u,u))
s=B.B(s,A.m,u,A.e,A.i,0,u,u)
w=this.c
w.toString
w=B.awf(w).cMa(A.b6,A.bz,A.b6.j(0.2),A.c,D.f0K,4)
return new B.D(A.y8,B.x(B.a([s,B.aaz(B.kP(u,u,u,g,f,new C.eXV(this,h),A.k.E(e,f,g)),w)],t),A.m,u,A.e,A.i,0,A.p),u)},
aiP(d,e,f,g,h,i){return this.ku(d,e,f,g,h,null,i)},
aje(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.M)(f),++v){u=f[v]
t=u==null
s=t?A.dq:B.b1(u)
r=d==u
q=r?A.c:A.aZ
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bOC:o
n.push(B.aB(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bK(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eXX(this,e,u),o,o,o,o,o,o,!1,A.a4))}return B.bX(A.bC,n,A.bq,o,10,10)},
bMO(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a5b
else{v=x.a8
w=B.C(new B.Z(D.a5b,new C.eX_(o),v),v.k("L.E"))}v=B.aL(n,A.Y,!1,n,!0,A.t,n,B.aM(),o.d,n,n,n,n,n,2,o.b_P("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eX0(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.aa4,!0,A.a3,n,A.an,n,n,n,n)
u=B.aL(n,A.Y,!1,n,!0,A.t,n,B.aM(),o.e,n,n,n,n,n,2,o.b_P("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eX1(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.d9,!0,A.a3,n,A.an,n,n,n,n)
t=o.y6("DESIGNS",A.uj)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cXV[q]
r.push(new B.D(A.iA,o.agP(p,o.x===p,new C.eX2(o,p)),n))}return B.x(B.a([v,A.W,u,t,B.cg(B.B(r,A.m,n,A.e,A.i,0,n,n),A.t,n,A.y,n,n,n,n,A.aM),A.ad,new B.a6(n,118,B.hO(n,new C.eX3(o,w),w.length,n,n,A.aM,new C.eX4(),!1),n),A.O,o.b_O(B.x(B.a([B.iI(A.b6,n,n,A.af,!0,new C.eX5(o),n,D.fDI,n,D.fzT,o.k3),B.iI(A.b6,n,n,A.af,!0,new C.eX6(o),n,n,n,D.fwZ,o.k2)],s),A.m,n,A.e,A.i,0,A.p),A.akg)],s),A.E,n,A.e,A.i,0,A.p)},
cGq(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aBV()
if(a7.length===0)return a5.vQ(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.K8,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.M)(a7),++s){r=a7[s]
v.push(t)
q=B.af('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.ar(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gak(v)+1
u=a5.dx
m=B.C(u,B.a7(u).k("cs.E"))
A.d.fd(m)
l=m.length!==0&&A.d.d_(m,new C.eYn(a5,m))?a5.db[A.d.gI(m)]:a6
k=new C.eYu(a5)
j=new C.eYw()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.K8,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aP(11,11)
f=u.t(0,h)?A.b6.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.eH:A.bz
d=new B.ay(e,u.t(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.ar(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aN(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a7
o.push(B.aB(a6,B.p(a6,new B.y(e,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bK(d,d,d,d),new B.bg(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.NG,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eYo(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a4))}o=a5.vQ(B.bX(A.bC,o,A.vr,a6,6,6))
i=B.a([a5.oj("All words",L.aou,!1,new C.eYp(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.agP("Sentence "+a3,!1,new C.eYq(a5,a7,v,a2)))
a2=a3}}i.push(a5.agP("Clear picks",!1,new C.eYr(a5)))
i=B.bX(A.bC,i,A.bq,a6,8,8)
g=a5.y6("SIZE OF THE PICKED WORDS",D.anX)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dtj[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eYs(e,k)
f.push(a5.agP(a0.b,l===a4,e))}return B.x(B.a([q,A.W,o,A.W,i,g,B.bX(A.bC,f,A.bq,a6,8,8),A.W,a5.oj("Make every word normal",A.kJ,!1,new C.eYt(a5))],p),A.E,a6,A.e,A.i,0,A.p)},
cBx(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.bEV,B.d(A.d.fP(D.azh,new C.eY6(q)).b,p,p,p,p,p,p,D.fjQ,p,p,p)],o),A.m,p,A.e,A.i,0,p,p),m=B.cy(new C.eY7(q)),l=q.y6("HIGHLIGHT BEHIND THE WORDS",A.a1N),k=q.p1?-1:q.k4
k=q.aje(k,new C.eY8(q),D.d80)
w=q.p1
v=w?A.c:A.aZ
n=B.a([n,A.W,m,l,B.bX(A.bC,B.a([k,B.aB(p,B.p(p,D.bRD,A.f,p,p,new B.o(p,p,B.J(v,A.r,w?3:1),p,p,D.fdh,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eYb(q),p,p,p,p,p,p,!1,A.a4)],o),A.vr,p,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.K8,p,p,p)],o)
if(q.gaWn()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.aiP("Colour",l,0,360,new C.eYc(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.aiP("Shade",k,0.15,0.9,new C.eYd(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.ku("Strength",l,0.15,1,new C.eYe(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.W,q.vQ(B.x(m,A.m,p,A.e,A.i,0,A.p))],o))}n.push(q.y6("LOOK",A.yZ))
m=B.a([q.oj("Bold",K.anV,q.fy,new C.eYf(q)),q.oj("Italic",K.anW,q.go,new C.eYg(q))],o)
for(u=0;u<3;++u){l={}
k=D.cZ6[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.uC:p
w=w?p:A.c.j(0.07)
s=new B.aP(14,14)
r=new B.ay(q.id===l.a?A.L:A.bz,1,A.r,-1)
m.push(B.aB(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bK(r,r,r,r),new B.bg(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eYh(l,q),p,p,p,p,p,p,!1,A.a4))}n.push(B.bX(A.bC,m,A.vr,p,8,8))
n.push(q.y6("COLOUR",A.nu))
n.push(q.aje(q.fx,new C.eYi(q),D.djI))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.K8,p,p,p))
n.push(q.y6("SIZE AND PLACE",A.H6))
m=q.fr
m=q.ku("Text size",m,0.5,1.6,new C.eY9(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vQ(B.x(B.a([m,q.ku("Up / down",l,0.12,0.5,new C.eYa(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.i,0,A.p)))
return B.x(n,A.E,p,A.e,A.i,0,A.p)},
ckA(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.J(A.b6.j(0.6),A.r,1.6)
u=B.a([A.b6.j(0.18),A.bB.j(0.12)],x.O)
return B.aB(p,B.p(p,B.x(B.a([B.p(p,D.bXg,A.f,p,p,D.b4Y,p,62,p,p,p,p,p,62),A.aA,D.fB8,A.am,D.fFZ],x.p),A.m,p,A.e,A.i,0,A.p),A.f,p,p,new B.o(D.tI,p,v,w,p,new B.a9(A.a5,A.a8,A.x,u,p,p),A.n),p,p,p,p,D.bAF,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gb_R(),p,p,p,p,p,p,!1,A.a4)}w=x.p
v=B.B(B.a([B.bx(B.m(12),new B.a6(46,62,B.fG(o,A.A,120,p,A.cc,A.bU,!1,p,!1,p,p),p),A.ap),A.bd,B.E(B.x(B.a([D.fAF,A.O,B.bX(A.bC,B.a([q.oj("Change",A.kj,!1,q.gb_R()),q.oj("Remove",A.ea,!1,new C.eXL(q))],w),A.bq,p,6,6)],w),A.E,p,A.e,A.i,0,A.p),1)],w),A.m,p,A.e,A.i,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.dfW[t]
u.push(q.oj(s.b,s.a,q.at===t,new C.eXM(q,t)))}u=B.bX(A.bC,u,A.bq,p,8,8)
r=q.at
A:{if(0===r){s=q.c2W(o)
break A}if(1===r){s=q.c1R()
break A}if(2===r){s=q.bIG()
break A}if(3===r){s=q.bP3()
break A}s=q.bKL()
break A}return B.x(B.a([v,A.ad,u,A.aA,s,A.W,new B.bO(A.a5,p,p,q.oj("Reset the whole picture",A.kJ,!1,new C.eXN(q)),p)],w),A.E,p,A.e,A.i,0,A.p)},
c2W(d){var w=this,v=x.p
return B.x(B.a([B.bX(A.bC,B.a([w.oj("Auto enhance",E.a1o,!1,new C.eXD(w)),w.oj("Make words easy to read",A.pd,!1,new C.eXE(w))],v),A.bq,null,8,8),A.aA,B.cy(new C.eXF(w,d))],v),A.E,null,A.e,A.i,0,A.p)},
c1R(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.ku("Exposure",n,-1.5,1.5,new C.eXh(o),0,A.k.ac(n,1))
w=o.RG
w=o.ku("Brightness",w,-0.5,0.5,new C.eXi(o),0,""+A.k.V(w*100))
v=o.rx
v=o.ku("Contrast",v,0.4,2,new C.eXj(o),1,""+A.k.V(v*100))
u=o.xr
u=o.ku("Fade",u,0,1,new C.eXk(o),0,""+A.k.V(u*100))
t=o.aE
t=o.ku("Spotlight",t,0,1,new C.eXl(o),0,""+A.k.V(t*100))
s=o.a_
s=o.ku("Darken",s,0,0.85,new C.eXm(o),0,""+A.k.V(s*100))
r=o.b8
r=o.ku("Vignette",r,0,0.9,new C.eXn(o),0,""+A.k.V(r*100))
q=o.aC
q=o.ku("Shade behind words",q,0,0.85,new C.eXo(o),0,""+A.k.V(q*100))
p=o.aN
return o.vQ(B.x(B.a([n,w,v,u,t,s,r,q,o.ku("Shade top & bottom",p,0,0.85,new C.eXp(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.i,0,A.p))},
bIG(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.ku("Colour strength",q,0,2.2,new C.eWD(s),1,""+A.k.V(q*100))
w=s.to
w=s.ku("Warmth",w,-1,1,new C.eWE(s),0,""+A.k.V(w*100))
v=s.x1
v=s.ku("Tint",v,-1,1,new C.eWF(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vQ(B.x(B.a([q,w,v,s.ku("Shift colours",u,-180,180,new C.eWG(s),0,""+A.k.V(u)+"\xb0"),new B.bO(A.a5,r,r,s.oj("Negative",D.bMD,s.y1,new C.eWH(s)),r)],t),A.m,r,A.e,A.i,0,A.p))
v=s.y6("COLOUR WASH",A.OC)
w=s.b1
q=B.a([null],x.Z)
A.d.v(q,D.axU)
t=B.a([u,v,s.aje(w,new C.eWI(s),q),A.O],t)
if(s.b1!=null){q=s.b0
t.push(s.vQ(s.aiP("Wash strength",q,0,0.9,new C.eWJ(s),""+A.k.V(q*100))))}return B.x(t,A.E,r,A.e,A.i,0,A.p)},
bP3(){var w,v,u,t,s,r=this,q=r.y2
q=r.ku("Blur",q,0,24,new C.eXb(r),0,A.o.u(A.k.V(q)))
w=r.bj
w=r.ku("Soft focus",w,0,1,new C.eXc(r),0,""+A.k.V(w*100))
v=r.aA
u=x.p
v=r.vQ(B.x(B.a([q,w,r.ku("Film grain",v,0,1,new C.eXd(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.i,0,A.p))
w=r.y6("LIGHT LEAK",D.bMl)
q=r.be
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.d1(D.axU,0,B.dB(8,"count",s),s))
u=B.a([v,w,r.aje(q,new C.eXe(r),t),A.O],u)
if(r.be!=null){q=r.bM
u.push(r.vQ(r.aiP("Leak strength",q,0,1,new C.eXf(r),""+A.k.V(q*100))))}return B.x(u,A.E,null,A.e,A.i,0,A.p)},
bKL(){var w,v,u,t,s=this,r=s.aJ
r=s.ku("Zoom",r,1,3,new C.eWN(s),1,""+A.k.V(r*100)+"%")
w=s.bi
w=s.ku("Left / right",w,-1,1,new C.eWO(s),0,""+A.k.V(w*100))
v=s.bG
v=s.ku("Up / down",v,-1,1,new C.eWP(s),0,""+A.k.V(v*100))
u=s.c9
t=x.p
return B.x(B.a([s.vQ(B.x(B.a([r,w,v,s.ku("Turn",u,-180,180,new C.eWQ(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.i,0,A.p)),A.W,B.bX(A.bC,B.a([s.oj("Turn 90\xb0",I.aoZ,!1,new C.eWR(s)),s.oj("Flip sideways",A.GU,s.c6,new C.eWS(s)),s.oj("Flip upside down",A.GU,s.cL,new C.eWT(s))],t),A.bq,null,8,8)],t),A.E,null,A.e,A.i,0,A.p)},
c5E(){var w=null,v=B.m(22),u=B.J(A.bz,A.r,1)
return B.p(w,B.x(B.a([D.f0W,A.W,D.fCJ,A.aA,B.aB(w,B.p(A.A,D.f18,A.f,w,w,new B.o(w,w,w,B.m(16),w,G.uC,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eXG(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(D.tI,w,u,v,w,w,A.n),w,w,w,w,A.bQ,w,w,w)},
c2J(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eXy(p),m=x.p,l=B.B(B.a([D.bF0,p.oj("Reset",A.kJ,!1,new C.eXu(p))],m),A.m,o,A.e,A.i,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.K8,o,o,o),j=p.y6("SHAPE",A.aoV),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.CP[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.b_S(n.$2(t,p.cy),62,u.b,s===t,new C.eXv(v,p),62))}}i=B.bX(A.bC,i,A.bq,o,8,8)
v=p.y6("RING",A.ru)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.CJ[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.b_S(n.$2(p.cx,t),62,r.b,q===t,new C.eXw(s,p),62))}u=B.bX(A.bC,u,A.bq,o,8,8)
s=p.CW
return B.x(B.a([l,A.au,k,j,i,v,u,A.ad,p.vQ(p.ku("Size",s,0.12,0.4,new C.eXx(p),0.22,""+A.k.V(s*100)))],m),A.E,o,A.e,A.i,0,A.p)},
b2R(d){return new B.a6(null,d,new B.fE(0.5625,B.cy(new C.eXR(this)),null),null)},
cAO(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.J(A.bz,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.uC:q
t=new B.aP(14,14)
s=D.di5[w]
r=v?A.c:A.aB
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aB
l.push(new B.bz(1,A.bb,B.aB(A.c9,B.dd(q,B.x(B.a([r,A.cL,new B.qy(A.e2,A.A,A.f,new B.y(s.b,q,new B.F(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.P,0,A.p),q,q,A.b5,new B.o(q,q,q,new B.bg(t,t,t,t),q,u,A.n),D.bwe,q,q,q,A.ht,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eY_(this,w),q,q,q,q,q,q,!1,A.a4),q))}return B.p(q,B.B(l,A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.byl,A.m7,q,q,q)},
aR6(){var w,v,u=this,t=null,s=u.cAO(),r=u.as
A:{if(0===r){w=u.bMO()
break A}if(1===r){w=u.cGq()
break A}if(2===r){w=u.cBx()
break A}if(3===r){w=u.ckA()
break A}if(4===r){w=u.c2J()
break A}w=u.c5E()
break A}v=x.p
return B.bx(A.tn,B.eb(B.x(B.a([s,B.E(B.cf(B.a([w],v),t,D.bzs,t,t,A.ag,!1),1)],v),A.m,t,A.e,A.i,0,A.p),D.Yj,!0),A.ap)},
aNi(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gcaO(),p=B.m(16)
q=B.E(B.aB(r,B.p(r,D.f1j,A.f,r,r,new B.o(A.c.j(0.08),r,B.J(A.aZ,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1)
p=s.Q?r:s.gbOC()
w=B.m(16)
v=B.a([new B.ac(0,A.G,A.bB.j(0.35),A.cx,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.f6L)
else t.push(D.bQJ)
t.push(A.ac)
t.push(D.bH9)
return B.p(r,B.B(B.a([q,A.at,B.E(B.aB(r,B.p(r,B.B(t,A.m,r,A.b8,A.i,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.uC,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a4),1)],u),A.m,r,A.e,A.i,0,r,r),A.f,r,r,D.b44,r,r,r,r,G.ak5,r,r,r)},
b_Q(){var w=null
return new B.D(T.a_L,B.B(B.a([B.aF(w,w,w,w,A.mO,w,w,w,new C.eXg(this),w,w,w,w,w,w),D.fSz,A.b1,D.bZz],x.p),A.m,w,A.e,A.i,0,w,w),w)},
B(d){var w=null
return B.c7(w,A.Bv,B.bl(!0,B.cy(new C.eYx(this)),!0,!1,A.af,!0,!0),w,!1,!1,w,w)}}
C.bgZ.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.e9()
m.d4(7)
w=e.a
v=e.b
u=A.k.V(w*v/55)
$.S()
t=B.I()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.I()
r.r=A.w.j(0.2*s).gp(0)
for(s=d.a,q=0;q<u;++q){p=m.ah()*w
o=m.ah()*v
n=((q&1)===0?t:r).G()
s.drawRect(B.bH(new B.a3(p,o,p+1.1,o+1.1)),n)
n.delete()}},
aw(d){return d.b!==this.b}}
C.rG.prototype={
a5(){return"NgmyQuoteDeco."+this.b}}
C.mf.prototype={}
C.zS.prototype={
ag(){var w=this
return B.G(["at",w.a.a8().ae(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nT.prototype={}
C.wc.prototype={
a5(){return"NgmySlidesAiExtra."+this.b}}
C.a8z.prototype={}
C.arY.prototype={}
C.a11.prototype={
R(){return new C.aID(new B.as(A.as,$.au()),B.k2(!0,null,!0,!0,null,null,!1),D.dJq,B.a([],x.s),B.eD([D.IP],x.Q))}}
C.aID.prototype={
q(){var w=this.d
w.S$=$.au()
w.P$=0
this.f.q()
this.a1()},
a0O(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a0O=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().Ch(90,700,700,A.eL),$async$a0O)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fk(),$async$a0O)
case 8:p=e
if(r.c!=null)r.m(new C.f3W(r,p,q))
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
return B.i($async$a0O,v)},
a0R(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a0R=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hV().aIo(78,n,1100,1100),$async$a0R)
case 7:q=e
if(J.ct(q)){w=1
break}p=B.bq(r.y,!0,x.N)
n=J.aW(q)
case 8:if(!n.C()){w=9
break}o=n.gT(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fk(),$async$a0R)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c8(l,".png"))k="image/png"
else k=A.a.c8(l,".webp")?"image/webp":"image/jpeg"
J.cc(p,"data:"+k+";base64,"+A.cI.gcp().aL(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.f3X(r,p))
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
return B.i($async$a0R,v)},
b4S(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fG(A.cD.aL(A.d.gak(d.split(","))),A.A,u,u,A.cc,A.bU,!0,u,!1,u,u)
return w}catch(v){}return D.buo},
c2Q(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cwB(C.fIg(w,this.b4S(d),f),g)},
ad8(d,e,f,g,h){var w=null,v=new C.f3U(f,e),u=new C.f3V(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.J(p?A.bz:A.b6.j(0.6),A.r,1)
if(p)p=new B.a6(34,30,new B.an(A.a_,w,A.aa,A.f,B.a([B.at(B.X(f?A.Co:A.Or,A.bY,w,w,w,26),w,w,w),D.erT],x.p),w),w)
else p=this.c2Q(g,v.$1(h),u.$1(h),34)
return B.aH(!1,A.a2,!0,s,B.aO(!1,r,!0,B.p(w,B.B(B.a([B.E(B.at(p,w,w,w),1),D.bQq],x.p),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mJ,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f3T(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.aj)},
aYb(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bx(B.m(8),B.fG(A.cD.aL(A.d.gak(h.split(","))),A.A,p,p,A.cc,A.bU,!1,30,!1,p,30),A.ap)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.J(n?A.bz:A.be.j(0.6),A.r,1)
q=o
n=q==null?B.X(d,A.et,p,p,p,20):q
n=B.a([n,A.ac,B.E(B.d(e,p,1,A.a1,p,p,p,A.Kf,p,p,p),1)],x.p)
if(f!=null)n.push(B.aB(p,D.a2L,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a4))
return B.aH(!1,A.a2,!0,u,B.aO(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.i,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.kG,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.aj)},
a9g(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a9g=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fLI(),$async$a9g)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.f3C(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ab(n)
if(r.c!=null)r.m(new C.f3D(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9g,v)},
af3(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$af3=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.f3F(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.f3G(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.f3H(r))
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
return B.b(C.fGZ(q,r.cx,j,new C.b2v(r.z,r.Q,r.as,r.at),new C.f3I(r),i,m,p,k),$async$af3)
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
if(r.c!=null)r.m(new C.f3J(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$af3,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aJ(d,A.eN,g).w
g=B.aJ(d,A.bX,g).w
w=B.at(B.p(h,h,A.f,h,h,new B.o(A.aZ,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.at(B.aB(h,B.p(h,D.bTJ,A.f,h,h,new B.o(h,h,B.J(A.c.j(0.35),A.r,2),h,B.a([new B.ac(2,A.G,A.be.j(0.5),A.I,24)],v),D.c2H,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f49(i),h,h,h,h,h,h,!1,A.a4),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aF(h,h,h,h,D.a2L,h,h,h,i.ax?h:new C.f4a(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbDC()
v=B.a([new B.ac(0,A.G,A.b6.j(0.45),A.I,10)],v)
s.push(B.hc(B.aH(!1,A.a2,!0,h,B.aO(!1,h,!0,B.p(h,B.X(i.e==null?A.we:A.hw,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.wv,A.a6),h,40,h,h,h,h,h,40),A.cM,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.L,0,h,h,A.cM,h,h,A.aj),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.P,0,h,h)
s=A.c.j(0.05)
v=B.aL(h,A.Y,!1,h,!0,A.t,h,B.aM(),i.d,h,h,h,h,h,2,B.br(h,h,h,h,h,h,h,h,!0,new B.b5(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b5(4,B.m(16),D.b1x),h,h,h,h,h,h,h,h,A1.JW,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iA,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ai,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,h,D.aTn,!0,A.a3,h,A.an,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.f4b(i)
s=i.aYb(A.lH,q,r,i.gcl1(),s)
r=i.z
r=B.E(i.ad8(new C.f4d(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.am,B.B(B.a([r,A.bm,B.E(i.ad8(new C.f4e(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.i,0,h,h)],t),A.m,h,A.e,A.i,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gI(s)
p=i.y.length===0?h:new C.f4f(i)
s=i.aYb(A.ue,r,p,i.gcl9(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gI(o)
p=B.E(i.ad8(new C.f4g(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gI(n)
o=B.a([w,A.aA,D.fHj,A.au,D.fKa,A.bu,u,A.O,D.fIA,A.aA,v,A.bu,B.B(B.a([q,A.at,B.E(B.x(B.a([s,A.am,B.B(B.a([p,A.bm,B.E(i.ad8(new C.f4h(i),r,!0,n,o),1)],t),A.m,h,A.e,A.i,0,h,h)],t),A.m,h,A.e,A.i,0,A.p),1)],t),A.E,h,A.e,A.i,0,h,h),A.am,D.fM1],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.J(D.bm1,A.r,1)
w=C.aht(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.W,new B.bO(A.a5,h,h,B.p(h,B.B(B.a([D.bUR,A.bm,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fpD,h,h,h),B.aO(!1,h,!0,D.elQ,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.f4i(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.P,0,h,h),A.f,h,h,new B.o(D.be7,h,u,v,h,h,A.n),h,h,h,h,D.by0,h,h,h),h)],t))}o.push(A.bu)
o.push(D.fxJ)
o.push(A.O)
w=B.a([],t)
for(m=0;m<6;++m){l=D.daa[m]
v=i.ch===l?A.b6:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aB:A.bz,1,A.r,-1)
u=u?A.u:A.Q
w.push(new B.bz(1,A.bb,new B.D(A.jA,B.aB(h,B.dd(A.A,new B.y(""+l,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.b5,new B.o(v,h,new B.bK(k,k,k,k),h,h,h,A.a6),A.eO,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f4j(i,l),h,h,h,h,h,h,!1,A.a4),h),h))}o.push(B.B(w,A.m,h,A.e,A.i,0,h,h))
o.push(A.bu)
o.push(D.fQN)
o.push(A.O)
o.push(B.cy(new C.f4k(i)))
o.push(A.bu)
o.push(D.fFk)
o.push(A.O)
w=B.a([i.b7K("auto","Let AI choose",A.e5,A.R8)],t)
for(v=x.O,m=0;m<11;++m){j=D.wB[m]
u=j.d
w.push(i.b7K(j.a,j.b,j.c,B.a([B.b1(A.d.gI(u).a),B.b1(A.d.gI(u).b)],v)))}o.push(B.bX(A.bC,w,A.bq,h,8,8))
o.push(A.aN)
w=A.c.j(0.04)
v=B.m(16)
u=B.J(i.r?A.be.j(0.5):A.bz,A.r,1)
o.push(B.p(h,B.iI(h,A.be,h,h,h,new C.f4c(i),D.bPT,D.fQ1,h,D.fA8,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aA,B.d(w,h,h,h,h,h,h,D.aSw,h,h,h)],t))
o.push(A.bu)
w=i.ax?h:i.gcaS()
v=B.fo(h,h,A.b6,A.b6.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.m(18),A.a0),h,h,h,h,h)
u=i.ax
t=u?D.f6B:A.Hm
o.push(new B.a6(h,54,B.lH(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.oH,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.p(h,B.bl(!0,B.cg(B.x(o,A.ak,h,A.e,A.i,0,A.p),A.t,h,A.y,h,A.w0,h,h,A.ag),!0,!1,A.af,!0,!1),A.f,h,new B.aZ(0,680,0,g.a.b*0.92),D.add,h,h,h,h,h,h,h,h),h)},
bQi(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.f3K(this,p,d)
if(d===D.Dt)return new C.aF5(p,o,q)
w=B.m(16)
v=p?E.wv:q
u=p?q:A.c.j(0.05)
t=B.J(p?A.aB:A.bz,A.r,1)
s=B.X(p?A.ef:C.hOW(d),A.c,q,q,q,20)
r=C.hOX(d)
return B.aB(q,B.dd(q,B.x(B.a([s,A.au,B.eN(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.e2)],x.p),A.m,q,A.b8,A.i,0,A.p),q,q,A.b5,new B.o(u,q,t,w,q,v,A.n),A.hr,q,64,q,A.hu,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a4)},
b7K(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ae:A.bz
r=B.J(r,A.r,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a9(A.a5,A.a8,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aB(v,B.dd(v,B.B(B.a([w,M.JN,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a7,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.P,0,v,v),v,v,A.b5,new B.o(s,v,r,t,v,v,A.n),A.eO,v,v,v,M.alp,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f3Z(this,d),v,v,v,v,v,v,!1,A.a4)}}
C.a10.prototype={
R(){return new C.aIC(new B.as(A.as,$.au()))}}
C.aIC.prototype={
q(){var w=this.d
w.S$=$.au()
w.P$=0
this.a1()},
af4(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$af4=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.f3v(r))
w=1
break}B.f1()
r.m(new C.f3w(r))
t=4
q=C.ifH(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.ifr(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.f3x(r,q))
w=1
break}k=r.c
if(k!=null)B.a4(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.h6u()
f=$.D3.h(0,k.a)
o=f==null||J.ct(f)?null:J.fq(f)
if(o==null){r.m(new C.f3y(r))
w=1
break}n=C.ifp(o,r.a.c)
C.ifl(r.a.c.a)
$.h5L=!0
k=r.c
if(k!=null)B.a4(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.h9k(j)
h=C.h9l(r.a.c)
e=C.h9m(r.a.c)
w=7
return B.b(C.bDE(k,r.a.c.a,j,h,new C.f3z(r),i,e,a0),$async$af4)
case 7:m=a3
k=r.c
if(k!=null)B.a4(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ab(a1)
if(r.c!=null)r.m(new C.f3A(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$af4,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aJ(d,A.eN,i).w
i=B.aJ(d,A.bX,i).w
w=B.at(B.p(j,j,A.f,j,j,new B.o(A.aZ,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.apd,A.f,j,j,D.b3K,j,34,j,j,j,j,j,34),A.at,D.bFE],v),A.m,j,A.e,A.i,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Ar.a9K,j,j,j)
s=A.c.j(0.05)
s=B.aL(j,A.Y,!0,j,!0,A.t,j,B.aM(),k.d,j,j,j,j,j,2,B.br(j,j,j,j,j,j,j,j,!0,new B.b5(4,B.m(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b5(4,B.m(16),As.acF),j,j,j,j,j,j,j,j,A1.JW,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,D.aTn,!0,A.a3,j,A.an,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.d6j[q]
o=A.c.j(0.06)
n=k.e?j:new C.f3B(k,p)
r.push(B.mR(j,o,new B.y(p,j,Ax.UF,j,j,j,j,j,j,j,j,j),j,n,j,j,P.vy,j))}w=B.a([w,A.aA,u,A.am,t,A.aA,s,A.W,B.bX(A.bC,r,A.bq,j,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ad,B.d(u,j,j,j,j,j,j,D.aSw,j,j,j)],v))
w.push(A.aN)
u=k.e
t=u?j:k.gcaT()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.be.j(0.5),A.ed.j(0.5)],x.O):D.cEo
o=B.a([new B.ac(0,A.G,A.be.j(0.35),A.cx,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.elM:D.bUp
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aH(!1,A.a2,!0,j,B.aO(!1,s,!0,B.eJ(B.B(B.a([n,A.at,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hE,j,j,j)],v),A.m,j,A.b8,A.i,0,j,j),j,new B.o(j,j,j,r,o,new B.a9(A.a5,A.a8,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.aj))
return new B.D(new B.Q(0,0,0,h.f.d),B.p(j,B.bl(!0,B.cg(B.x(w,A.ak,j,A.e,A.i,0,A.p),A.t,j,A.y,j,A.w0,j,j,A.ag),!0,!1,A.af,!0,!1),A.f,j,new B.aZ(0,680,0,i.a.b*0.85),D.add,j,j,j,j,j,j,j,j),j)}}
C.b2v.prototype={}
C.aF5.prototype={
R(){return new C.blA(null,null)}}
C.blA.prototype={
gayg(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.q9,null,1,null,v)
w.cM(0)
v.d!==$&&B.bI()
v.d=w
u=w}return u},
q(){this.gayg().q()
this.bxw()},
B(d){var w=null,v=this.a.d
return B.aB(w,B.cd(this.gayg(),new C.ekS(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bjd.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.dcA[s]
p=q.a*v
q=q.b*u
$.S()
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.r=D.xY.j(0.25+r*0.6).gp(0)
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
aw(d){return d.b!==this.b}}
C.asv.prototype={
a5(){return"NgmyTextCommand."+this.b}}
C.a_n.prototype={
R(){return new C.aCB()}}
C.aCB.prototype={
gajb(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.ahG(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAo(){var w=this.e
return w===$?this.e=C.h9k(this.a.c).t(0,D.Dt):w},
a93(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a93=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dpt(s))
u=3
r=A.d.fP(D.wB,new C.dpu(s))
q=B.dg(C.h9k(s.a.c),x.Q)
l=q
J.hz(l,D.Dt)
p=l
if(s.gAo())J.cc(p,D.Dt)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAo()?" with Luxury FX":""
i=s.a
h=i.d
i=C.h9l(i.c)
g=C.h9m(s.a.c)
w=6
return B.b(C.bDE(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a93)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.ahG(q,s.gajb())
f=q==null?null:q.b
n=f==null?s.gajb():f
if(!J.A(n,r.a)&&!s.gAo())throw B.W("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a4(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ab(d)
if(s.c!=null)s.m(new C.dpv(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a93,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.J,l=m?A.c:A.M,k=m?A.aR:A.al,j=m?A.M:A.c,i=B.m(28),h=B.J(m?A.bz:A.aL,A.r,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bD,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1),e=o.f?n:new C.dpy(d)
e=B.B(B.a([f,B.aF(n,n,n,n,B.X(A.cz,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.i,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.wB[w]
u=o.gajb()
t=o.f?n:new C.dpz(o,v)
f.push(new C.buc(v,u===v.a,t,n))}f=B.ki(1.25,f,3,10,10,n,A.dR,!0)
u=B.m(18)
t=o.gAo()?D.c5t:n
if(o.gAo())s=n
else s=m?A.bo:A.bN
r=B.X(A.e5,o.gAo()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gAo()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gAo()?A.ae:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1)
p=o.gAo()
f=B.a([f,A.aA,B.p(n,B.B(B.a([r,A.at,q,B.Yk(n,A.c,n,A.bL,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dpA(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.ak8,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.W,B.d(u,n,n,n,n,n,n,D.fpX,n,n,n)],g))
f=B.cg(B.x(f,A.E,n,A.e,A.i,0,A.p),A.t,n,A.y,n,A.Ge,n,n,A.ag)
u=o.f?n:o.gbCB()
t=B.bo(A.L,n,n,n,n,n,A.af,n,new B.b7(B.m(16),A.a0),n,n,n)
s=B.m(16)
return B.bl(!0,B.p(n,B.x(B.a([new B.D(D.bB8,e,n),new B.ds(1,A.cn,f,n),new B.D(A.Gd,new B.a6(1/0,50,B.bE(B.eJ(B.at(o.f?A.t6:D.fHN,n,n,n),n,new B.o(n,n,n,s,n,D.c42,A.n),n,n,n),n,u,t),n),n)],g),A.m,n,A.e,A.P,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.u5,n,n,n,n),!0,!1,A.af,!0,!0)}}
C.buc.prototype={
B(d){var w=null,v=this.c,u=A.d.gI(v.d),t=B.m(16),s=u.a,r=B.a([B.b1(s),B.b1(u.b)],x.O),q=this.d,p=B.J(q?A.c:A.L,A.r,2.5)
s=q?B.a([new B.ac(0,A.G,B.b1(s).j(0.5),A.I,12)],x.V):w
v=B.a([new B.bO(A.ls,w,w,B.X(v.c,A.ae,w,w,w,18),w),new B.bO(A.lU,w,w,B.d(v.b,w,w,w,w,w,w,D.fpU,w,w,w),w)],x.p)
if(q)v.push(D.b_0)
return B.aB(w,B.dd(w,new B.an(A.a_,w,A.aa,A.t,v,w),w,w,A.b5,new B.o(w,w,p,t,s,new B.a9(A.ay,A.aE,A.x,r,w,w),A.n),A.eO,w,w,w,A.cj,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a4)}}
C.ekP.prototype={
aFZ(d,e,f){return e+"@"+A.a.aS(A.o.fH(f==null?this.a.c:f,16),8,"0").toUpperCase()},
wL(d,e){return this.aFZ(0,e,null)}}
C.aNa.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.b2r.prototype={
B(d){var w,v,u=null,t=C.h89(this.c)
if(t==null)w=D.bsT
else{w=B.aJ(d,u,x.w).w.cLD(D.bxx,D.f5M)
v=this.d
w=B.rt(B.dX(B.aoM(!1,t,!1,v,!1,390),!v,u),w)}return B.eN(A.A,new B.a6(416,870,new C.bn9(w,u),u),A.f,A.dw)}}
C.bn9.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dp1[w]
u=new B.aP(3,3)
s.push(new B.cN(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bg(u,u,u,u),t,D.arb,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dql[w]
u=new B.aP(3,3)
s.push(new B.cN(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bg(u,u,u,u),t,D.arb,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bT(0,B.c4(t,new B.o(t,t,t,B.m(64),D.cWs,D.c2o,A.n),A.bg),0,0,0))
s.push(B.bT(3,B.c4(t,new B.o(A.w,t,t,B.m(61),t,t,A.n),A.bg),3,3,3))
s.push(B.bT(13,B.bx(B.m(51),B.eb(this.c,A.w,!0),A.ap),13,13,13))
u=B.m(20)
s.push(B.ao(t,B.at(B.p(D.b_b,B.p(t,t,A.f,t,t,D.b42,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bT(13,B.dX(B.bx(B.m(51),D.buu,A.ap),!0,t),13,13,13))
s.push(B.ao(22,B.dX(B.at(B.p(t,t,A.f,t,t,new B.o(A.ae,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.a_,t,A.aa,A.f,s,t)}}
C.lm.prototype={
pL(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cF(),f=C.cF(),e=m.r
f=C.es(A.K,!1,e.l(),A.aF,"",k,42,A.bp,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bh,j,2,"Your Presentation Title",0,0,"",D.mU,D.cU,0.84,0.08,0.26)
w=C.cF()
v=m.w
w=C.es(A.K,!1,v.l(),A.aF,"",k,20,A.bp,A.a7,"",0.12,w,l,"","",0,!1,"",0,D.bh,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dh,D.cU,0.76,0.12,0.56)
u=C.cF()
t=m.d
s=x.u
t=C.rH(i,l,0,0,B.a([f,w,C.es(A.bi,!1,4279310375,A.aF,"",t.j(0.8).l(),24,A.bp,A.a7,"",0.006,u,l,"","",0,!1,"",0,D.fD,t.l(),3,"",0,0,"",D.cm,D.fa,0.3,0.35,0.72)],s),C.cF(),D.mT,"","","Welcome",D.dh)
u=C.cF()
u=C.es(A.bi,!1,e.l(),A.aF,"",k,34,A.bp,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bh,j,2,"Agenda",0,0,"",D.cm,D.cU,0.84,0.08,0.08)
w=C.cF()
w=C.rH(i,l,0,0,B.a([u,C.es(A.bi,!0,v.l(),A.aF,"",k,22,A.bp,A.a7,"",0.6,w,l,"","",0,!1,"",0,D.bh,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.uS,D.cU,0.8,0.1,0.26)],s),C.cF(),D.mT,"","","Agenda",D.dh)
u=C.cF()
u=C.es(A.bi,!1,e.l(),A.aF,"",k,32,A.bp,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bh,j,2,"Main Idea",0,0,"",D.cm,D.cU,0.84,0.08,0.08)
f=C.cF()
f=C.rH(i,l,0,0,B.a([u,C.es(A.bi,!0,v.l(),A.aF,"",k,21,A.bp,A.a7,"",0.62,f,l,"","",0,!1,"",0,D.bh,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cm,D.cU,0.8,0.1,0.26)],s),C.cF(),D.mT,"","","Key Point 1",D.dh)
u=C.cF()
u=C.es(A.bi,!1,e.l(),A.aF,"",k,30,A.bp,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bh,j,2,"Compare & Contrast",0,0,"",D.cm,D.cU,0.84,0.08,0.08)
r=C.cF()
r=C.es(A.bi,!0,v.l(),A.aF,"",k,18,A.bp,A.a7,"",0.62,r,l,"","",0,!1,"",0,D.bh,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cm,D.cU,0.4,0.08,0.24)
q=C.cF()
q=C.rH(i,l,0,0,B.a([u,r,C.es(A.bi,!0,v.l(),A.aF,"",k,18,A.bp,A.a7,"",0.62,q,l,"","",0,!1,"",0,D.bh,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cm,D.cU,0.4,0.52,0.24)],s),C.cF(),D.mT,"","","Key Point 2",D.dh)
r=C.cF()
r=C.es(A.K,!1,e.l(),A.aF,"",k,48,A.bp,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bh,j,2,h,0,0,"",D.dh,D.cU,0.8,0.1,0.32)
e=C.cF()
p=C.C3(l,l,l,l,D.Dp,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rH(i,l,0,0,B.a([r,C.es(A.K,!1,v.l(),A.aF,"",k,22,A.bp,A.a7,"",0.1,e,l,"","",0,!1,"",0,D.bh,j,2,"Questions?",0,0,"",D.cm,D.cU,0.7,0.15,0.58)],s),C.cF(),D.mT,"","",h,D.dh)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.M)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.F4.prototype={
by(d){return this.e.$1(d)}}
C.ex.prototype={}
C.j2.prototype={}
C.EW.prototype={
gaLR(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.aht(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a4e(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.EW(v,u,t,d==null?w.d:d)},
FU(d){return this.a4e(null,d,null,null)},
aEI(d){return this.a4e(null,null,null,d)},
cLB(d,e){return this.a4e(d,e,null,null)},
bd_(d){return this.a4e(d,null,null,null)},
bd5(d){return this.a4e(null,null,d,null)}}
C.NV.prototype={
R(){return new C.bkZ(new B.eA(0,$.au()),null,null)}}
C.bkZ.prototype={
Z(){var w,v=this
v.a2()
w=v.qQ(new C.e_8(v))
v.e!==$&&B.aQ()
v.e=w
if(v.a.e)w.h2(0)
else v.d.sp(0,3.2)},
q(){var w=this.e
w===$&&B.c()
w.q()
w=this.d
w.S$=$.au()
w.P$=0
this.bx1()},
B(d){var w=C.aht(this.a.c.a)
if(w==null)w=A.d.gI(D.HH)
return B.cy(new C.e_7(this,w,C.hoq(this.a.c.d)))}}
C.bsL.prototype={
B(d){return B.nZ(A.WD,this.e,new C.f2J(this,A.k.F(this.d*0.35,1.6)-0.3))}}
C.bg4.prototype={
a3(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aTK(d,e,v)
break
case"confetti":w.bJ9(d,e,v)
break
case"crown":w.bKM(d,e,v)
break
case"aurora":w.bDG(d,e,v)
break
case"champagne":w.bH1(d,e,v)
break
case"diamonds":w.bMX(d,e,v)
break
case"starburst":w.cys(d,e,v)
break
case"balloons":w.bDU(d,e,v)
break
case"galaxy":w.bS8(d,e,v)
break
case"redcarpet":w.cpl(d,e,v)
break
case"coins":w.bIy(d,e,v)
break
case"lanterns":w.c1n(d,e,v)
break
case"hearts":w.bZY(d,e,v)
break
case"petals":w.ckr(d,e,v)
break
case"butterflies":w.bG0(d,e,v)
break
case"neon":w.c5o(d,e,v)
break
case"disco":w.bN7(d,e,v)
break
case"sunrise":w.cA5(d,e,v)
break
case"pearls":w.cjv(d,e,v)
break
case"snow":w.cy9(d,e,v)
break
case"laurel":w.c1t(d,e,v)
break
case"ribbons":w.crQ(d,e,v)
break
case"kente":w.c1b(d,e,v)
break
case"trophy":w.cDH(d,e,v)
break
case"shooting":w.cvU(d,e,v)
break
case"bokeh":w.bEe(d,e,v)
break
case"orbits":w.ch7(d,e,v)
break
case"flowers":w.bRo(d,e,v)
break
case"music":w.c56(d,e,v)
break
case"mandala":w.c3w(d,e,v)
break
case"sparklers":w.cyg(d,e,v)
break
case"city":w.bHP(d,e,v)
break}},
rU(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.S()
v=B.I()
v.r=g.j(A.k.E(h,0,1)).gp(0)
v.a=A.oQ
u=new B.aG(w.r,A.ah,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.D(new B.aY(w,s))
u.D(new B.c5(w,t,w+f,t))
u.D(new B.c5(w,t,w,t+f))
u.D(new B.c5(w,t,w-f,t))
u.D(new B.c5(w,t,w,s))
u.D(new B.bt())
d.aG(u,v)
d.ad(e,f*0.18,v)},
lS(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.d_(q,v)*2.5)+C.d_(q,u)*6.28)+1)/2
this.rU(d,new B.t(C.d_(q,t)*o,C.d_(q,s)*n),m*(0.006+0.014*C.d_(q,r))*(0.5+p),h,p*p)}},
aTK(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lS(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bL,A.aC],w),B.a([A.ie,A.bB],w),B.a([A.eA,A.aQ],w),B.a([A.c,A.az],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bh(k/2.8)
i=A.k.F(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.d_(h,1))
f=g+c0*(C.d_(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.d_(h,3))
d=v[Math.abs(A.o.F(h,4))]
if(i<0.22){a0=B.kA(new B.t(g,c1),new B.t(f,e),A.cu.av(0,i/0.22))
a0.toString
$.S()
a1=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1.sam(new B.a9(A.a5,A.a8,A.x,B.a([d[0].j(0),d[0]],w),null,null).aB(0,B.rJ(new B.t(g,c1),a0)))
a1.c=n
a1.d=A.bE
a2=B.kA(new B.t(g,c1),a0,0.75)
a2.toString
a3=a1.G()
a4=a0.a
a0=a0.b
t.drawLine.apply(t,[a2.a,a2.b,a4,a0,a3])
a3.delete()
a2=new B.ap(A.R,A.N,A.U,A.V,A.S)
a2.r=A.c.gp(0)
a3=a2.G()
t.drawCircle(a4,a0,m,a3)
a3.delete()}else{a5=(i-0.22)/0.78
a6=A.cu.av(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.V(q))
a2=C.d_(h,4)
if(a5<0.15){a4=1-a5/0.15
$.S()
a8=new B.ap(A.R,A.N,A.U,A.V,A.S)
a8.r=d[0].j(0.5*a4).gp(0)
a8.z=new B.hg(A.G,o)
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
b9=new B.ap(A.R,A.N,A.U,A.V,A.S)
b9.r=b8.j(a8).gp(0)
b9.c=u
b9.d=A.bE
b9.a=A.oQ
a3=b9.G()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.d_(h,b1+120)>0.5)this.rU(c3,new B.t(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bJ9(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.F(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.S(),a0=B.I()
a0.sam(new B.a9(A.ay,A.aE,A.x,D.djn,B.a([A.k.E(g-0.15,0,1),A.k.E(g,0,1),A.k.E(g+0.15,0,1)],x.x),null).aB(0,new B.a3(0,0,f,e)))
a1.aP(new B.a3(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.F(a3*(h*(0.08+0.12*C.d_(u,1)))+C.d_(u,2)*w,w)
s=C.d_(u,3)
r=Math.sin(a3*(0.8+C.d_(u,4))+u)
q=h*(0.012+0.012*C.d_(u,5))
p=Math.cos(a3*(2+3*C.d_(u,6))+u)
o=D.QA[A.o.E(A.k.bh(C.d_(u,7)*5),0,4)]
J.bm(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.d_(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.ap(A.R,A.N,A.U,A.V,A.S)
t=Math.abs(p)
n.r=B.ar(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.F(u,5)===0){t=B.a([],v)
m=new B.aG(d.r,A.ah,null,null,t)
d=-q*2
t.push(new B.aY(d,0))
for(l=1;l<=8;++l){s=new B.aq(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.by(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.S()
t=new B.ap(A.R,A.N,A.U,A.V,A.S)
t.r=B.b1(n.r).gp(0)
t.b=A.ab
t.c=q*0.35
k=t.G()
t=m.e
f.drawPath((t==null?m.e=new B.cm(m.gbw().a.snapshot()):t).a,k)
k.delete()}else{t=B.bL(A.I,q*1.8*A.k.E(t,0.15,1),q)
k=n.G()
f.drawRect(B.bH(t),k)
k.delete()}f.restore()}this.lS(a1,a2,a3,25,A.bL,30)},
bKM(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.t(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.S()
n=B.a([],r)
m=new B.aG(o.r,A.ah,a4,a4,n)
n.push(new B.aY(a5,a6))
o=p-0.07
n.push(new B.aq(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.aq(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bt())
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.sam(new B.c2(A.A,0.5,A.x,a4,0,B.a([A.bL.j(0.22),D.bgb],v),a4,a4).aB(0,B.bY(w,u)))
l=o.G()
o=m.gbw().a.snapshot()
t.drawPath((m.e=new B.cm(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.aG($.S().r,A.ah,a4,a4,B.a([],r))
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
n.sam(new B.a9(A.b4,A.b7,A.x,D.di_,a4,a4).aB(0,new B.a3(a5,a6,o,v)))
a8.aG(i,n)
for(v=[D.eC4,D.evg,D.eLD],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
a0=d.b
d=a5+k*d.a
a1=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1.r=a0.gp(a0)
l=a1.G()
t.drawCircle(d,o,n,l)
l.delete()
a1=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1.r=A.ae.gp(0)
l=a1.G()
t.drawCircle(d-g,f,g,l)
l.delete()}for(v=[0,0.5,1],o=a7*0.014,e=0;e<3;++e){a2=v[e]
n=a2===0.5?0:u
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=A.hU.gp(0)
l=g.G()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.xs(i),u=B.a([],x.X),o=new B.tm(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b8(B.jw(y.M));--f
o.il()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aG(n,v.b,a4,new B.cw([new B.Bv(o,f),0,d*h,!0]),B.a([],r))
f=new B.ap(A.R,A.N,A.U,A.V,A.S)
f.b=A.ab
f.c=g
f.e=A.dT
f.r=A.bL.gp(0)
l=f.G()
f=d.gbw().a.snapshot()
t.drawPath((d.e=new B.cm(f)).a,l)
l.delete()}if(s){a3=A.k.F(b0*0.5,1)
this.rU(a8,new B.t(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lS(a8,a9,b0,45,A.bL,40)},
bDG(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lS(a8,a9,b0,60,A.c,50)
w=[D.eXc,D.eWV,D.eWP,D.eYa]
for(v=a7*0.01,u=a8.a,t=a7*0.14,s=a7*0.06,r=a5+10,q=a5/40,p=x.v,o=0;o<4;++o){n=w[o].a
m=n[0]
l=n[1]
k=n[2]
j=n[3]
n=$.S()
i=B.a([],p)
h=new B.aG(n.r,A.ah,null,null,i)
for(n=a6*l,g=b0*k,f=g*1.4,e=0;e<=r;e+=q){d=e/a5
a0=n+Math.sin(d*4+g+j)*a7*0.07+Math.sin(d*9-f+j)*a7*0.025
if(e===0){d=new B.aY(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.by(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.aq(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.by(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.S()
n=new B.ap(A.R,A.N,A.U,A.V,A.S)
n.b=A.ab
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.oQ
n.z=new B.hg(A.G,s)
a2=n.G()
n=h.e
u.drawPath((n==null?h.e=new B.cm(h.gbw().a.snapshot()):n).a,a2)
a2.delete()
n=new B.ap(A.R,A.N,A.U,A.V,A.S)
n.b=A.ab
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.oQ
n.z=new B.hg(A.G,v)
a2=n.G()
n=h.e
u.drawPath((n==null?h.e=new B.cm(h.gbw().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.F(t*(0.05+0.06*C.d_(a4,1))+C.d_(a4,2)*a3,a3)
r=C.d_(a4,3)
q=Math.sin(b0+a4)
p=C.d_(a4,4)
$.S()
n=new B.ap(A.R,A.N,A.U,A.V,A.S)
n.r=A.vQ.j(0.4+0.5*C.d_(a4,5)).gp(0)
n.a=A.oQ
a2=n.G()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bH1(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.S(),a0=B.I()
a0.sam(new B.c2(A.A,0.5,A.x,l,0,B.a([A.hT.j(0.25+0.1*h),D.Yu],x.O),l,l).aB(0,B.bY(new B.t(g,f),e)))
a1.ad(new B.t(g,f),e,a0)
for(h=i*0.008,g=a1.a,f=a3*3,e=x.v,w=0;w<6;++w){v=(w&1)===0
a0=B.a([],e)
u=new B.aG(d.r,A.ah,l,l,a0)
d=v?0:k
t=j*(0.05+w*0.07)
a0.push(new B.aY(d,t))
for(s=1;s<=20;++s){d=s/20*k
r=v?d*0.45:k-d*0.45
d=new B.aq(r,t+s*i*0.012+Math.sin(s*0.8+f+w)*i*0.02)
a0.push(d)
q=u.f
if(q!=null)d.by(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.S()
a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a0.b=A.ab
a0.c=h
a0.r=D.QA[A.o.F(w,4)].j(0.7).gp(0)
p=a0.G()
a0=u.e
g.drawPath((a0==null?u.e=new B.cm(u.gbw().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.F(a3*(i*(0.07+0.12*C.d_(w,1)))+C.d_(w,2)*o,o)
r=k*(0.1+0.8*C.d_(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.d_(w,4))
if(n<f){this.rU(a1,new B.t(r,n),m*2.4,A.bL,A.k.E(n/f,0,1))
continue}$.S()
d=new B.ap(A.R,A.N,A.U,A.V,A.S)
d.b=A.ab
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.xO.j(0.75).gp(0)
p=d.G()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.ap(A.R,A.N,A.U,A.V,A.S)
t.r=A.c.j(0.8).gp(0)
p=t.G()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bMX(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lS(a9,b0,b1,30,A.l2,60)
for(w=Math.max(4,A.k.V(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.d_(p,1))
n=a7+o*4
m=A.k.F(t*(0.04+0.06*C.d_(p,2))+C.d_(p,3)*n,n)-o*2
l=C.d_(p,4)*a6+Math.sin(s+p)*a8*0.02
J.bm(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.S()
g=B.a([],q)
f=new B.aG(h.r,A.ah,a5,a5,g)
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
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.sam(new B.a9(A.ay,A.aE,A.x,D.ddE,a5,a5).aB(0,B.bL(A.I,k*1.2,o)))
a2=g.G()
g=f.gbw().a.snapshot()
v.drawPath((f.e=new B.cm(g)).a,a2)
a2.delete()
a3=new B.ap(A.R,A.N,A.U,A.V,A.S)
a3.b=A.ab
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
cys(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.S()
o=B.a([],v)
n=new B.aG(p.r,A.ah,null,null,o)
o.push(new B.aY(h,g))
p=s-q
o.push(new B.aq(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.aq(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.bt())
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=A.bL.j(r?0.12:0.07).gp(0)
m=p.G()
r=n.gbw().a.snapshot()
w.drawPath((n.e=new B.cm(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.F(a0+l*0.6,1.8)/1.8
$.S()
u=new B.ap(A.R,A.N,A.U,A.V,A.S)
u.b=A.ab
r=1-k
u.c=v*r
u.r=A.bL.j(r*0.6).gp(0)
m=u.G()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bh(a0/2.4)
k=A.k.F(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.d_(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.btS.av(0,k)*(0.5+0.5*C.d_(t,v)))
this.rU(d,new B.t(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.d_(t,3)),D.QA[A.o.E(A.k.bh(C.d_(t,4)*5),0,4)],u)}},
bDU(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.d_(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.F(q*(0.05+0.05*C.d_(o,2))+C.d_(o,3)*m,m)
j=C.d_(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.ayl[A.o.F(o,6)]
h=$.S()
g=B.a([],s)
f=new B.aG(h.r,A.ah,a3,a3,g)
h=k+n*1.15
g.push(new B.aY(j,h))
for(e=1;e<=6;++e){d=new B.aq(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.by(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.S()
d=new B.ap(A.R,A.N,A.U,A.V,A.S)
d.b=A.ab
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.G()
d=f.e
u.drawPath((d==null?f.e=new B.cm(f.gbw().a.snapshot()):d).a,a1)
a1.delete()
a2=B.bL(new B.t(j,k),n*2.3,l)
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
d=B.ar(i,A.w,0.35)
d.toString
l.sam(new B.c2(D.b_e,0.9,A.x,a3,0,B.a([A.c,i,d],t),V.ayb,a3).aB(0,a2))
a1=l.G()
u.drawOval(B.bH(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aG(g.r,A.ah,a3,a3,l)
d=n*0.12
l.push(new B.aY(j-d,h))
l.push(new B.aq(j+d,h))
l.push(new B.aq(j,k+n))
l.push(new B.bt())
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.r=B.ar(i,A.w,0.3).gp(0)
a1=l.G()
l=g.gbw().a.snapshot()
u.drawPath((g.e=new B.cm(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.F(q*(0.1+0.1*C.d_(o,11))+C.d_(o,12)*m,m)
r=C.d_(o,13)
J.bm(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.bL(A.I,t,v)
$.S()
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=D.ayl[A.o.F(o,6)].j(0.85).gp(0)
a1=r.G()
u.drawRect(B.bH(s),a1)
a1.delete()
u.restore()}},
bS8(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.t(a8,a9)
this.lS(b1,b2,b3,50,A.c,70)
for(w=[D.eXk,D.eX0,D.eX6],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.S()
k=new B.ap(A.R,A.N,A.U,A.V,A.S)
k.sam(new B.c2(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).aB(0,B.bY(new B.t(r,m),l)))
j=k.G()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.V(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.F(i,3)
g=C.d_(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.d_(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.ar(A.bL,A.eH,g)
k.toString
d=C.d_(i,3)
$.S()
a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a0.r=k.j(0.5+0.5*C.d_(i,4)).gp(0)
a0.a=A.oQ
j=a0.G()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.S()
a9=B.I()
a9.sam(new B.c2(A.A,0.5,A.x,a4,0,B.a([A.xO.j(0.55),D.ahD],u),a4,a4).aB(0,B.bY(b0,a8)))
b1.ad(b0,a8,a9)
a1=A.k.F(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bh(b3/3.5)
a3=new B.t(a5*(0.1+0.5*C.d_(a2,9)),a6*0.1*C.d_(a2,8))
a5=B.kA(a3,a3.a9(0,new B.t(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.kA(a3,a5,0.6)
a6.toString
a8=B.I()
a8.sam(new B.a9(A.a5,A.a8,A.x,B.a([A.c.j(0),A.c],u),a4,a4).aB(0,B.rJ(a3,a5)))
a8.c=a7*0.005
a8.d=A.bE
b1.bo(a6,a5,a8)}},
cpl(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.S()
n=B.a([],s)
m=new B.aG(o.r,A.ah,b5,b5,n)
n.push(new B.aY(q,u))
o=p-0.16
n.push(new B.aq(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.aq(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.bt())
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.sam(new B.c2(A.A,0.5,A.x,b5,0,B.a([A.xO.j(0.28),D.ahD],w),b5,b5).aB(0,B.bY(new B.t(q,u),t)))
o.a=A.oQ
l=o.G()
q=m.gbw().a.snapshot()
v.drawPath((m.e=new B.cm(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.ek:A.e7)
a9=$.S()
b0=B.a([],s)
m=new B.aG(a9.r,A.ah,b5,b5,b0)
b0.push(new B.aY(a5?0:b6,0))
b0.push(new B.aq(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.c5(a9,k,a5?g:a1,b7))
b0.push(new B.aq(a5?0:b6,b7))
b0.push(new B.bt())
a9=new B.ap(A.R,A.N,A.U,A.V,A.S)
a9.sam(new B.a9(A.a5,A.a8,A.x,a7,b5,b5).aB(0,new B.a3(a6,0,a6+i,j)))
l=a9.G()
a9=m.gbw().a.snapshot()
v.drawPath((m.e=new B.cm(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.ap(A.R,A.N,A.U,A.V,A.S)
b1.r=A.hT.gp(0)
b1.c=o
b1.d=A.bE
l=b1.G()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aG($.S().r,A.ah,b5,b5,B.a([],s))
w=b7*0.78
b2.D(new B.aY(b6*0.42,w))
b2.D(new B.aq(b6*0.58,w))
b2.D(new B.aq(b6*0.8,b7))
b2.D(new B.aq(b6*0.2,b7))
b2.D(new B.bt())
v=B.I()
v.sam(D.c3W.aB(0,new B.a3(0,w,0+b6,w+b7*0.22)))
b9.aG(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.F(b7*(0.05+0.07*C.d_(r,1))+C.d_(r,2)*b3,b3)
u=C.d_(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rU(b9,new B.t(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.d_(r,4)),A.bL,0.3+0.7*((q+1)/2))}},
bIy(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.d_(t,1))
r=h+s*4
q=s*2
p=A.k.F(u*(0.12+0.12*C.d_(t,2))+C.d_(t,3)*r,r)-q
o=C.d_(t,4)*i
n=Math.cos(f*(2+3*C.d_(t,5))+t)
m=Math.abs(n)
l=B.bL(new B.t(o,p),q,q*A.k.E(m,0.12,1))
$.S()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.sam(new B.a9(A.ay,A.aE,A.x,n>0?D.dtR:D.cKd,null,null).aB(0,l))
k=q.G()
v.drawOval(B.bH(l),k)
k.delete()
q=-(s*0.22)
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.b=A.ab
j.c=Math.max(0.6,s*0.08)
j.r=D.bqv.gp(0)
k=j.G()
v.drawOval(B.bH(new B.a3(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rU(d,new B.t(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lS(d,e,f,30,A.bL,110)},
c1n(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lS(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.d_(p,1))
n=a1+o*4
m=a1+o*2-A.k.F(t*(0.03+0.04*C.d_(p,2))+C.d_(p,3)*n,n)
l=C.d_(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.S()
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.sam(new B.c2(A.A,0.5,A.x,d,0,B.a([X.Mv.j(0.45*k),D.agj],u),d,d).aB(0,B.bY(new B.t(l,m),j)))
g=h.G()
v.drawCircle(l,m,j,g)
g.delete()
j=B.a([],q)
f=new B.aG(i.r,A.ah,d,d,j)
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
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
i=B.ar(D.bgq,A.c,0.2*k)
i.toString
j.sam(new B.a9(A.b4,A.b7,A.x,B.a([D.blC,i],u),d,d).aB(0,B.bL(new B.t(l,m),o*1.4,o)))
g=j.G()
j=f.gbw().a.snapshot()
v.drawPath((f.e=new B.cm(j)).a,g)
g.delete()
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.r=A.c.j(k).gp(0)
g=j.G()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bZY(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.d_(p,1))
n=a1+o*4
m=A.k.F(s*(0.05+0.06*C.d_(p,2))+C.d_(p,3)*n,n)
l=C.d_(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bm(v.save())
v.translate(l*a0+k*a2*0.03,a1+o*2-m)
v.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
v.scale(j,j)
m=$.S()
l=B.a([],t)
i=new B.aG(m.r,A.ah,d,d,l)
m=o*0.9
l.push(new B.aY(0,m))
k=-o
h=k*0.2
g=k*1.6
l.push(new B.kZ(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.kZ(m,g,o*1.8,h,0,m))
l.push(new B.bt())
f=D.d43[A.o.F(p,5)]
m=new B.ap(A.R,A.N,A.U,A.V,A.S)
l=B.ar(f,A.w,0.25)
l.toString
m.sam(new B.c2(A.tk,0.5,A.x,d,0,B.a([A.c,f,l],u),H.a41,d).aB(0,B.bY(A.I,o*1.4)))
e=m.G()
m=i.gbw().a.snapshot()
v.drawPath((i.e=new B.cm(m)).a,e)
e.delete()
v.restore()}this.lS(a3,a4,a5,30,A.ie,130)},
ckr(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.d_(q,1))
o=g+p*4
n=A.k.F(t*(0.05+0.06*C.d_(q,2))+C.d_(q,3)*o,o)
m=C.d_(q,4)
l=Math.sin(s+q*0.7)
J.bm(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.d_(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.S()
m=B.a([],u)
k=new B.aG(n.r,A.ah,i,i,m)
n=-p
m.push(new B.aY(0,n))
l=n*0.2
m.push(new B.c5(p,l,0,p))
m.push(new B.c5(n,l,0,n))
m.push(new B.bt())
n=new B.ap(A.R,A.N,A.U,A.V,A.S)
m=(q&1)===0?D.cEn:D.df_
n.sam(new B.a9(A.a5,A.a8,A.x,m,i,i).aB(0,B.bY(A.I,p)))
j=n.G()
n=k.gbw().a.snapshot()
v.drawPath((k.e=new B.cm(n)).a,j)
j.delete()
v.restore()}this.lS(d,e,a0,25,A.bL,140)},
bG0(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lS(b0,b1,b2,40,A.bL,150)
for(w=Math.max(4,A.k.V(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.d_(r,1))
p=Math.sin(b2*(0.15+0.1*C.d_(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.d_(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bm(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.bm(v.save())
v.scale(a1*n,1)
a2=$.S()
a3=B.a([],u)
a4=new B.aG(a2.r,A.ah,a6,a6,a3)
a3.push(new B.aY(0,0))
a3.push(new B.kZ(f,e,l,d,h,0))
a3.push(new B.kZ(q,h,g,q,0,h))
a3.push(new B.bt())
a2=new B.ap(A.R,A.N,A.U,A.V,A.S)
a2.sam(new B.a9(A.a5,A.a8,A.x,i?D.deJ:D.dht,a6,a6).aB(0,new B.a3(0,m,k,j)))
a5=a2.G()
a2=a4.gbw().a.snapshot()
v.drawPath((a4.e=new B.cm(a2)).a,a5)
a5.delete()
a2=new B.ap(A.R,A.N,A.U,A.V,A.S)
a2.b=A.ab
a2.c=Math.max(0.6,o)
a2.r=D.Bn.gp(0)
a5=a2.G()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cm(a4.gbw().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=D.bpK.gp(0)
p.c=q*0.1
p.d=A.bE
a5=p.G()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c5o(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.t(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.F(w+t/4,1)
r=f*(0.2+0.7*s)
$.S()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.b=A.ab
q.c=v
q.r=D.azt[t].j((1-s)*0.9).gp(0)
q.z=new B.hg(A.G,v)
p=r*0.3
p=B.bu(B.bL(e,r,r*1.6),new B.aP(p,p))
o=q.G()
u.drawRRect(B.el(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.d_(m,1)*4)+m)))
k=D.azt[A.o.F(m,4)]
j=m*n+h
i=g-l
i=B.bu(new B.a3(j,i,j+w,i+l),new B.aP(v,v))
$.S()
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.r=k.j(0.85).gp(0)
j.z=new B.hg(A.act,p)
o=j.G()
u.drawRRect(B.el(i),o)
o.delete()}},
bN7(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.t(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.d_(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.d_(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bL,A.nU,A.dt][A.o.F(p,4)]
j=C.d_(p,3)
$.S()
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.r=k.j(0.75).gp(0)
i.a=A.oQ
i.z=new B.hg(A.G,r)
h=i.G()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.S()
t=B.I()
t.r=A.aB.gp(0)
t.c=1.2
a3.bo(new B.t(a0,0),new B.t(a0,w-u),t)
t=B.I()
t.r=A.dv.gp(0)
a3.ad(v,u,t)
J.bm(q.save())
a1=new B.aG(a1.r,A.ah,null,null,B.a([],x.v))
a1.D(new B.jF(B.bY(v,u)))
a3.mF(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.F(a1,g)
i=Math.sin(e*1.7+l+s)
$.S()
d=new B.ap(A.R,A.N,A.U,A.V,A.S)
d.r=B.ar(A.bn,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.G()
q.drawRect(B.bH(new B.a3(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.rU(a3,v.a9(0,new B.t(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cA5(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.cu.av(0,A.k.E(a4/3,0,1))),a1=new B.t(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.S()
q=B.a([],u)
p=new B.aG(r.r,A.ah,h,h,q)
q.push(new B.aY(d,a0))
r=s-0.04
q.push(new B.aq(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.aq(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bt())
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.bL.j(0.1).gp(0)
o=r.G()
r=p.gbw().a.snapshot()
w.drawPath((p.e=new B.cm(r)).a,o)
o.delete()}d=e*0.5
$.S()
a0=B.I()
a0.sam(new B.c2(A.A,0.5,A.x,h,0,B.a([D.bbQ.j(0.6),D.agj],x.O),h,h).aB(0,B.bY(a1,d)))
a2.ad(a1,d,a0)
a0=e*0.2
d=B.I()
d.sam(D.esJ.aB(0,B.bY(a1,a0)))
a2.ad(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.F(d*(1+t*0.3)+C.d_(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.r=A.c.j(0.18).gp(0)
i=B.bL(new B.t(l,k),r,u)
o=j.G()
w.drawOval(B.bH(i),o)
o.delete()
i=B.bL(new B.t(l+q,k-n),r,m)
o=j.G()
w.drawOval(B.bH(i),o)
o.delete()}this.lS(a2,a3,a4,20,A.hU,180)},
cjv(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.S()
q=B.a([],t)
p=new B.aG(r.r,A.ah,f,f,q)
q.push(new B.aY(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.aq(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.by(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.aq(e,d)
q.push(r)
o=p.f
if(o!=null)r.by(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.bt()
q.push(r)
q=p.f
if(q!=null)r.by(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.S()
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=B.ar(A.cw,A.j7,s/3).j(0.55).gp(0)
k=r.G()
r=p.e
w.drawPath((r==null?p.e=new B.cm(p.gbw().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.d_(i,1))
g=d-A.k.F(u*(0.04+0.05*C.d_(i,2))+C.d_(i,3)*j,j)
n=C.d_(i,4)*e+Math.sin(a3+i)*a0*0.02
$.S()
t=new B.ap(A.R,A.N,A.U,A.V,A.S)
t.sam(new B.c2(Ao.xl,0.5,A.x,f,0,D.dl4,f,f).aB(0,B.bY(new B.t(n,g),h)))
k=t.G()
w.drawCircle(n,g,h,k)
k.delete()}this.lS(a1,a2,a3,25,A.c,190)},
cy9(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.d_(r,1))
p=f+q*4
o=A.k.F(u*(0.03+0.05*C.d_(r,2))+C.d_(r,3)*p,p)
n=C.d_(r,4)
m=Math.sin(t+r)
$.S()
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.r=A.c.j(0.6+0.4*C.d_(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bE
J.bm(v.save())
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
h.delete()}v.restore()}this.lS(d,a0,a1,40,A.eA,200)},
c1t(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.t(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.E(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dd(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.bm(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.bL(new B.t(p,0),q,r)
$.S()
f=new B.ap(A.R,A.N,A.U,A.V,A.S)
f.sam(D.c3J.aB(0,new B.a3(0,o,n,m)))
e=f.G()
s.drawOval(B.bH(g),e)
e.delete()
s.restore()}}$.S()
a0=B.I()
a0.b=A.ab
a0.c=a2*0.003
a0.r=D.bgL.gp(0)
a3.ad(w,v*1.08,a0)
d=a5*0.8
this.rU(a3,w.a9(0,new B.t(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lS(a3,a4,a5,40,A.bL,210)},
crQ(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hT,A.hU],a6),B.a([A.oZ,A.ie],a6),B.a([A.aD,A.eH],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bS<ak.E>"),q=s.k("ak.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.S()
k=B.a([],o)
j=new B.aG(l.r,A.ah,null,null,k)
i=B.a([],n)
for(l=m*0.2,h=a4*(0.3+l),l=b0*(0.8+l),g=0;g<=40;++g){f=g/40
e=f*a3
d=h+Math.sin(f*5+l+m)*a5*0.1
a0=a5*(0.03+0.03*(0.5+0.5*Math.sin(f*7+p+m)))
f=d-a0
if(g===0){f=new B.aY(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.by(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.aq(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.by(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.t(e,d+a0))}for(l=new B.dw(i,s),l=new B.bS(l,l.gL(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.aq(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.by(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bt()
k.push(l)
k=j.f
if(k!=null)l.by(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.S()
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
k=a7[m]
h=k[0]
l.sam(new B.a9(A.a5,A.a8,A.x,B.a([h,k[1],h],a6),Aa.zj,new B.my(w)).aB(0,new B.a3(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.G()
l=j.e
t.drawPath((l==null?j.e=new B.cm(j.gbw().a.snapshot()):l).a,a2)
a2.delete()}this.lS(a8,a9,b0,40,A.c,220)},
c1b(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.F(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.F(A.k.bh(g/t),5)
a1=g+t
$.S()
a2=new B.ap(A.R,A.N,A.U,A.V,A.S)
a3=Math.abs(a0)
a2.r=D.a44[a3].gp(0)
a4=a2.G()
s.drawRect(B.bH(new B.a3(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.ap(A.R,A.N,A.U,A.V,A.S)
a5.r=D.a44[A.o.F(a3+2,5)].gp(0)
a4=a5.G()
s.drawRect(B.bH(new B.a3(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.F(n*(0.04+0.05*C.d_(a0,1))+C.d_(a0,2)*a6,a6)
v=C.d_(a0,3)
t=C.d_(a0,4)
this.rU(b1,new B.t(v*a7,l-a8),a9*(0.01+0.012*t),D.a44[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cDH(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.c=v
p.r=A.bL.j(0.06).gp(0)
o=p.G()
u.drawLine.apply(u,[a1,a2,a1+r*a3*1.2,a2+q*a3*1.2,o])
o.delete()}n=a3*0.16
m=a3*0.17
a2=a2-m-m
l=new B.aG($.S().r,A.ah,null,null,B.a([],x.v))
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
f=B.bL(new B.t(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ap(A.R,A.N,A.U,A.V,A.S)
d.b=A.ab
d.c=q
d.r=A.az.gp(0)
o=d.G()
u.drawArc.apply(u,[B.bH(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.I()
a1.sam(new B.a9(A.a5,A.a8,A.x,D.dnI,A.ayt,null).aB(0,new B.a3(v,a2,r,j)))
a4.aG(l,a1)
a0=A.k.F(a6*0.6,1.4)
if(a0<1)this.rU(a4,new B.t(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bJa(a4,a5,a6,60)},
bJa(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.F(k*(0.1+0.1*C.d_(p,31))+C.d_(p,32)*v,v)
n=C.d_(p,33)
J.bm(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.bL(A.I,r*A.k.E(Math.abs(Math.cos(q+p)),0.2,1),s)
$.S()
n=new B.ap(A.R,A.N,A.U,A.V,A.S)
n.r=D.QA[A.o.F(p,5)].gp(0)
m=n.G()
u.drawRect(B.bH(o),m)
m.delete()
u.restore()}},
cvU(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lS(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.d_(o,1)*1.6
m=A.k.F(a2+C.d_(o,2)*n,n)/n
l=e*(C.d_(o*7+A.k.bh((a2+C.d_(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.t(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.S()
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.sam(new B.a9(A.a5,A.a8,A.x,B.a([A.c.j(0),A.bL],s),null,null).aB(0,B.rJ(new B.t(l,h),i)))
g.c=r
g.d=A.bE
f=g.G()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rU(a0,i,p,A.c,1-m)}},
bEe(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.d_(r,1))
p=A.k.F(C.d_(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.F(C.d_(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.S()
m=new B.ap(A.R,A.N,A.U,A.V,A.S)
l=A.o.F(r,5)
m.r=D.aB7[l].j(n).gp(0)
m.a=A.oQ
m.z=new B.hg(A.G,q*0.12)
k=m.G()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.ap(A.R,A.N,A.U,A.V,A.S)
m.b=A.ab
m.c=Math.max(0.6,q*0.05)
m.r=D.aB7[l].j(n*1.4).gp(0)
k=m.G()
s.drawCircle(p,o,q,k)
k.delete()}},
ch7(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bm(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.bL(A.I,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.S()
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.b=A.ab
o.c=u
o.r=A.bL.j(0.45).gp(0)
n=o.G()
w.drawOval(B.bH(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.ap(A.R,A.N,A.U,A.V,A.S)
k.r=A.hU.gp(0)
n=k.G()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.ap(A.R,A.N,A.U,A.V,A.S)
k.r=A.hT.j(0.4).gp(0)
k.z=new B.hg(A.G,r)
n=k.G()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lS(d,e,f,45,A.bL,270)},
bRo(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.d_(o,1)
A:{if(0===n){l=new B.t(m*a2,p)
break A}if(1===n){l=new B.t(m*a2,q)
break A}if(2===n){l=new B.t(r,m*a3)
break A}l=new B.t(s,m*a3)
break A}k=A.k.F(a7+C.d_(o,2)*4,4)/4
j=A.eu.av(0,A.k.E(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.d_(o,3))*(j*i)
if(h<=0.5)continue
g=D.dbH[A.o.F(o,5)]
J.bm(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.bL(new B.t(0,l),i,j)
$.S()
a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a0.sam(new B.a9(A.b4,A.b7,A.x,B.a([A.c,g],u),null,null).aB(0,B.bL(new B.t(0,l),f,h)))
a1=a0.G()
v.drawOval(B.bH(d),a1)
a1.delete()}$.S()
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.r=A.hT.gp(0)
a1=l.G()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lS(a5,a6,a7,30,A.hU,280)},
c56(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.F(t+n/4,1)
l=B.bY(new B.t(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.S()
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.b=A.ab
j.c=v
j.r=D.axw[n].j((1-m)*0.8).gp(0)
i=j.G()
u.drawArc.apply(u,[B.bH(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.F(v*(0.06+0.06*C.d_(g,1))+C.d_(g,2)*h,h)
e=C.d_(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.d_(g,4))
a0=D.axw[A.o.F(g,4)]
$.S()
a1=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1.r=a0.gp(0)
J.bm(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.bL(A.I,d,d*1.5)
i=a1.G()
u.drawOval(B.bH(s),i)
i.delete()
u.restore()
s=e+d*0.65
p=f-d*2.6
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.18)
i=o.G()
u.drawLine.apply(u,[s,f,s,p,i])
i.delete()
if((g&1)===0){o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.3)
i=o.G()
u.drawLine.apply(u,[s,p,e+d*1.6,f-d*2,i])
i.delete()}}},
c3w(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.t(a4,a5)
for(v=a7.a,u=a6*0.004,t=a6*0.003,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bm(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=-o,l=m*1.16,k=q/3,j=m*0.12,i=m*0.82,h=o*0.12,g=m*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.S()
a0=B.a([],s)
a1=new B.aG(d.r,A.ah,a3,a3,a0)
a0.push(new B.aY(0,i))
a0.push(new B.c5(h,m,0,g))
a0.push(new B.c5(j,m,0,i))
d=new B.ap(A.R,A.N,A.U,A.V,A.S)
d.b=A.ab
d.c=t
d.r=B.ar(A.bL,A.nU,k).j(0.7).gp(0)
a2=d.G()
d=a1.gbw().a.snapshot()
v.drawPath((a1.e=new B.cm(d)).a,a2)
a2.delete()
d=new B.ap(A.R,A.N,A.U,A.V,A.S)
d.r=A.hU.j(0.8).gp(0)
a2=d.G()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.S()
a5=B.I()
a5.sam(new B.c2(A.A,0.5,A.x,a3,0,B.a([A.hT.j(0.25),D.Yu],x.O),a3,a3).aB(0,B.bY(w,a4)))
a7.ad(w,a4,a5)
this.lS(a7,a8,a9,30,A.bL,300)},
cyg(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.S()
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.r=A.bn.gp(0)
h.c=q
h.d=A.bE
g=h.G()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.sam(new B.c2(A.A,0.5,A.x,null,0,B.a([A.hU,A.hT.j(0.6),D.Yu],o),null,null).aB(0,B.bY(new B.t(j,i),p)))
g=l.G()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.d_(f,1)
d=A.k.F(b2+C.d_(f,2)*e,e)/e
a0=A.k.bh((b2+C.d_(f,2)*e)/e)
a1=C.d_(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.d_(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.ap(A.R,A.N,A.U,A.V,A.S)
a6.r=B.ar(A.hU,A.aC,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bE
a6.a=A.oQ
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
g.delete()}}}this.lS(b0,b1,b2,35,A.bL,310)},
bHP(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aTK(a9,new B.av(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.d_(n,1))
l=a8*(0.14+0.24*C.d_(n,2))
k=a8-l
j=new B.a3(o,k,o+m,k+l)
$.S()
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.sam(D.c4F.aB(0,j))
h=i.G()
r.drawRect(B.bH(j),h)
h.delete()
g=A.k.bh(m/q)
f=A.k.bh(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.d_(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.S()
a6=new B.ap(A.R,A.N,A.U,A.V,A.S)
a6.r=A.bL.j(0.85).gp(0)
h=a6.G()
r.drawRect(B.bH(new B.a3(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
aw(d){return d.b!==this.b||d.d!==this.d}}
C.b0l.prototype={
B(d){var w,v=null,u=new C.cd6(),t=new C.cd8(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.aqk,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.cd7(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.HH[w]))
return B.bX(A.bC,s,A.bq,v,12,10)}}
C.ZV.prototype={
R(){return new C.aAZ()}}
C.aAZ.prototype={
gvR(){var w=this.d
return w===$?this.d=this.a.c:w},
gb_V(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.as(new B.b9(w.b,A.b2,A.aO),$.au())}return v},
gayh(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaLR()
v=$.au()
u.f!==$&&B.bI()
t=u.f=new B.as(new B.b9(w,A.b2,A.aO),v)}return t},
q(){var w=this.gb_V(0),v=$.au()
w.S$=v
w.P$=0
w=this.gayh()
w.S$=v
w.P$=0
this.a1()},
a_B(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a_B=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hV().Ch(90,700,700,A.eL),$async$a_B)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fk(),$async$a_B)
case 8:p=e
o=q.b.toLowerCase()
n=J.aip(o,".png")?"image/png":"image/jpeg"
r.m(new C.deK(r,n,p))
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
return B.i($async$a_B,v)},
b_U(d){var w=null,v=A.c.j(0.07)
return B.br(w,new B.b5(4,B.m(12),A.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.UR,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.aht(p.gvR().a)
if(n==null)n=A.d.gI(D.HH)
w=p.gvR()
v=p.r
u=x.p
v=B.E(new B.an(A.a_,o,A.aa,A.t,B.a([B.bT(0,new C.NV(p.gvR(),!1,!0,new B.bG(w.a+v,x.W)),0,0,0),B.ao(o,B.Ic(A.mO,new C.deP(d),B.nI(o,A.aS,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.Ic(A.apb,new C.deQ(p),B.nI(o,A.aS,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aTm,o,o,o)
t=B.E(B.aL(o,A.Y,!1,o,!0,A.t,o,B.aM(),p.gb_V(0),o,o,o,o,o,2,p.b_U("Big words"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.deR(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.fT,!0,A.a3,o,A.an,o,o,o,o),1)
s=A.c.j(0.07)
r=B.J(A.hT.j(0.6),A.r,1)
if(p.gvR().d.length===0)q=D.bS6
else{q=C.hoq(p.gvR().d)
if(q==null)q=new Uint8Array(0)
q=B.hT(B.fG(q,A.A,o,o,A.cc,A.bU,!1,o,!1,o,o),A.ap)}r=B.a([t,A.ac,B.aB(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcaU(),o,o,o,o,o,o,!1,A.a4)],u)
if(p.gvR().d.length!==0)r.push(B.aF(o,o,o,o,D.a2L,o,o,o,new C.deS(p),o,o,o,o,"Remove logo",o))
return B.c7(o,A.w,B.bl(!0,B.x(B.a([v,B.p(o,B.x(B.a([w,A.W,B.B(r,A.m,o,A.e,A.i,0,o,o),A.O,B.aL(o,A.Y,!1,o,!0,A.t,o,B.aM(),p.gayh(),o,o,o,o,o,2,p.b_U("Line under it"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.deT(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.d9,!0,A.a3,o,A.an,o,o,o,o),A.ad,B.dl(D.bR0,D.fRI,new C.deU(p,d),B.bo(A.az,o,o,o,A.w,o,A.cl,o,new B.b7(B.m(14),A.a0),o,o,o))],u),A.ak,o,A.e,A.P,0,A.p),A.f,o,o,D.b4e,o,o,o,o,A.Ga,o,o,o)],u),A.m,o,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.aMH.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.a_f.prototype={
R(){return new C.bhz(new B.as(A.as,$.au()))}}
C.bhz.prototype={
q(){var w=this.d
w.S$=$.au()
w.P$=0
this.a1()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.J,m=n?A.c:A.M,l=n?A.aR:A.al,k=B.aJ(d,A.bX,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.J(n?A.bz:A.aL,A.r,1),g=x.p,f=B.B(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aF(o,o,o,o,B.X(A.cz,l,o,o,o,o),o,o,o,new C.dlv(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.i,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cVT[w]
u=B.a([],g)
for(t=J.aW(v.b);t.C();){s=t.gT(t)
r=new B.aP(12,12)
q=new B.aP(12,12)
p=n?A.c.j(0.06):A.bN
u.push(B.aO(!1,new B.bg(r,r,r,r),!0,B.p(A.A,new B.y(s,o,A.pA,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bg(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dlw(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.ht,new B.y(v.a.toUpperCase(),o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.CF(A.bC,6,6,A.bq,u,o)],g))}e.push(A.aA)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.O)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bo:A.aP
e.push(B.B(B.a([B.E(B.aL(o,A.Y,!1,o,!0,A.t,o,B.aM(),this.d,o,o,o,o,o,2,B.br(o,new B.b5(4,B.m(14),A.a0),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a3,o,A.an,o,o,o,o),1),A.ac,B.bE(A.aUl,o,new C.dlx(this),o)],g),A.m,o,A.e,A.i,0,o,o))
e.push(A.O)
return B.bl(!0,B.p(o,B.x(B.a([f,new B.ds(1,A.cn,B.cf(e,o,o,o,o,A.ag,!0),o)],g),A.E,o,A.e,A.P,0,A.p),A.f,o,new B.aZ(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.u5,A.a_r,o,o,o),!0,!1,A.af,!0,!0)}}
C.bgV.prototype={
a3(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.e9()
a2.d4(this.c)
w=this.b
v=w/6.283185307179586
$.S()
u=B.I()
u.z=A.Se
t=B.I()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.ah()
l=a2.ah()
k=a2.ah()
j=0.8+a2.ah()*2.2
i=Math.sin(w*(3+a2.aq(4))+n)
h=A.k.F(l-v*(0.4+k*0.9),1)
k=(m+Math.sin(q+n)*0.012)*p
g=h*o
if(a2.ah()<0.25){f=B.ar(r,A.c,0.85)
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
a1=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1.r=e.gp(0)
a1.c=1
d=a1.G()
s.drawLine.apply(s,[k-a0,g,k+a0,g+0,d])
d.delete()
d=a1.G()
s.drawLine.apply(s,[k,g-a0,k+0,g+a0,d])
d.delete()}}},
aw(d){return d.b!==this.b}}
C.bgD.prototype={
a3(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bu(new B.a3(0,0,0+a7.a,0+a7.b),A.kQ),a2=this.b,a3=Math.sin(a2*2),a4=$.S(),a5=B.I()
a5.b=A.ab
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.mS
a6.az(a1,a5)
a5=x.v
a4=new B.aG(a4.r,A.ah,a0,a0,B.a([],a5))
a4.D(new B.iN(a1))
v=new B.Tc(new B.tm(B.xs(a4),!1,B.a([],x.X))).gI(0)
a4=v.a
a3=v.b
a4.il()
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
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.b=A.ab
j.d=A.bE
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.F(n-p*(1-m/10),t)
h=A.k.F(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aG(r,k,a0,new B.cw([v,i,h,!0]),B.a([],a5))
g=j.G()
f=k.gbw().a.snapshot()
q.drawPath((k.e=new B.cm(f)).a,g)
g.delete()}else{k=new B.aG(r,k,a0,new B.cw([v,i,t,!0]),B.a([],a5))
g=j.G()
f=k.gbw().a.snapshot()
q.drawPath((k.e=new B.cm(f)).a,g)
g.delete()
k=new B.aG(r,a2.b,a0,new B.cw([v,0,h,!0]),B.a([],a5))
g=j.G()
f=k.gbw().a.snapshot()
q.drawPath((k.e=new B.cm(f)).a,g)
g.delete()}}a4.il()
e=u[a3].Hb(n).a
$.S()
k=new B.ap(A.R,A.N,A.U,A.V,A.S)
k.r=w.gp(0)
k.z=A2.pm
g=k.G()
k=e.a
f=e.b
q.drawCircle(k,f,5,g)
g.delete()
d=new B.ap(A.R,A.N,A.U,A.V,A.S)
d.r=A.c.gp(0)
g=d.G()
q.drawCircle(k,f,2,g)
g.delete()}},
aw(d){return d.b!==this.b}}
C.bpz.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.e9()
e.d4(this.c)
w=a0.a*(0.2+e.ah()*0.6)
v=e.hj()?-0.1:1.1
v=a0.b*v
u=new B.t(w,v)
t=a0.gani()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.S()
i=B.a([],n)
h=new B.aG(j.r,A.ah,f,f,i)
i.push(new B.aY(w,v))
j=l-k
i.push(new B.aq(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.aq(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.bt())
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.sam(B.tp(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.lL
g=j.G()
j=h.gbw().a.snapshot()
q.drawPath((h.e=new B.cm(j)).a,g)
g.delete()}},
aw(d){return d.b!==this.b}}
C.bbr.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.e9()
a0.d4(this.c*7+3)
for(w=a1.a,v=this.d,u=a2.a,t=Math.abs(u),s=a2.b,r=Math.abs(s),q=this.b,p=q*0.8,o=q*2,n=0;n<16;++n){m=a0.ah()
l=a0.ah()
k=Math.min(t,r)*(0.03+a0.ah()*0.09)
j=a0.ah()*3.141592653589793*2
i=(m+Math.sin(q+j)*0.04)*u
h=(l+Math.cos(p+j)*0.05)*s
g=0.08+0.1*(0.5+0.5*Math.sin(o+j))
if((n&1)===0)f=v
else{e=B.ar(v,A.c,0.6)
e.toString
f=e}$.S()
e=new B.ap(A.R,A.N,A.U,A.V,A.S)
e.r=f.j(g).gp(0)
e.z=new B.hg(A.G,k*0.35)
d=e.G()
w.drawCircle(i,h,k,d)
d.delete()
e=new B.ap(A.R,A.N,A.U,A.V,A.S)
e.b=A.ab
e.c=1
e.r=B.ar(f,A.c,0.5).j(g*0.9).gp(0)
d=e.G()
w.drawCircle(i,h,k,d)
d.delete()}},
aw(d){return d.b!==this.b}}
C.bb5.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.e9()
a0.d4(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.ah()-0.5)*0.1)
k=v*(0.06+a0.ah()*0.05)
j=a0.ah()*3.141592653589793*2
i=$.S()
h=B.a([],n)
g=new B.aG(i.r,A.ah,null,null,h)
h.push(new B.aY(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.aq(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.by(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.S()
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.b=A.ab
i.c=r
i.d=A.bE
if(m===1){h=B.ar(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gp(0)
i.z=new B.hg(A.G,u)
d=i.G()
i=g.e
t.drawPath((i==null?g.e=new B.cm(g.gbw().a.snapshot()):i).a,d)
d.delete()}},
aw(d){return d.b!==this.b}}
C.bwy.prototype={
a3(d,e){var w,v,u=new B.a3(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.S()
w=B.I()
t=(0.5+0.5*t)*0.12
w.sam(new B.c2(A.A,0.95,A.x,null,0,B.a([A.L,A.w.j(0.28+t)],x.O),D.d2O,null).aB(0,u))
d.aP(u,w)
w=u.cr(-3)
v=B.I()
v.b=A.ab
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.lL
d.aP(w,v)},
aw(d){return d.b!==this.b}}
C.bty.prototype={
a3(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bh(d)*7,p=0;p<7;++p){o=new B.e9()
o.d4(q+p)
n=o.ah()*w
m=o.ah()*u
l=Math.sin(A.k.F(A.k.F(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.ah()*0.025)*l
j=B.ar(s,A.c,0.7).j(l)
$.S()
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.r=j.gp(0)
i.c=1.4
i.d=A.bE
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
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=A.c.j(l*0.9).gp(0)
g.z=new B.hg(A.G,k*0.3)
h=g.G()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
aw(d){return d.b!==this.b}}
C.bsH.prototype={
a3(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a3(0,0,0+e.a,0+e.b)
$.S()
v=B.I()
v.a=A.oQ
v.sam(new B.a9(A.ay,A.aE,A.x,B.a([A.L,B.ar(this.c,A.c,0.6).j(0.16),A.L],x.O),B.a([A.k.E(u-0.15,0,1),A.k.E(u,0,1),A.k.E(u+0.15,0,1)],x.x),null).aB(0,w))
d.aP(w,v)},
aw(d){return d.b!==this.b}}
C.bfY.prototype={
a3(d,e){var w,v,u,t,s,r=e.gdC(),q=0.55+0.45*Math.sin(this.b)
$.S()
w=B.I()
w.b=A.ab
w.c=1.4
w.d=A.bE
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.I()
u.b=A.ab
u.c=4
u.r=v.j(0.12*q).gp(0)
u.z=A.uL
r=new C.der(this,r*0.16,d,u,w)
t=e.gdC()*0.045
r.$3(new B.t(t,t),1,1)
v=e.a-t
r.$3(new B.t(v,t),-1,1)
s=e.b-t
r.$3(new B.t(t,s),1,-1)
r.$3(new B.t(v,s),-1,-1)},
aw(d){return d.b!==this.b}}
C.xT.prototype={}
C.Jc.prototype={
a5(){return"NgmySlideElementType."+this.b}}
C.arX.prototype={
a5(){return"NgmySlideAspectRatio."+this.b}}
C.uX.prototype={
a5(){return"NgmySlideShapeKind."+this.b}}
C.mH.prototype={
a5(){return"NgmySlideLayout."+this.b}}
C.hG.prototype={
a5(){return"NgmySlideTransition."+this.b}}
C.eO.prototype={
hK(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.es(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ag(){var w,v=this,u=B.U(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"type",v.b.b)
u.n(0,"x",v.c)
u.n(0,"y",v.d)
u.n(0,"w",v.e)
u.n(0,"h",v.f)
u.n(0,"text",v.r)
u.n(0,"fontSize",v.w)
u.n(0,"fontWeight",v.x.gdM(0))
u.n(0,"fontStyle",v.y.a)
u.n(0,"decoration",C.i29(v.z))
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
C.lR.prototype={
hK(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("N<1,eO>")
n=B.C(new B.N(n,new C.ciF(),m),m.k("ak.E"))
return C.rH(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ag(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("N<1,a8<n,@>>")
n=B.C(new B.N(n,new C.ciG(),m),m.k("ak.E"))
return B.G(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i4.prototype={
gbbk(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bj(v)},
gSK(){if(!C.kH(this.w))return!1
var w=this.gbbk()
if(w==null)return!1
return new B.V(Date.now(),0,!1).d1(w.bU())},
hK(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
q=B.T(r).k("N<1,lR>")
r=B.C(new B.N(r,new C.ciu(),q),q.k("ak.E"))
return C.C3(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ag(){var w,v,u=this,t=B.U(x.N,x.z)
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
v=B.T(w).k("N<1,a8<n,@>>")
w=B.C(new B.N(w,new C.civ(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jO.prototype={}
C.b2u.prototype={
B(d){return B.cy(new C.ciA(this))}}
C.ap6.prototype={
R(){return new C.bkK(null,null)}}
C.bkK.prototype={
gb_W(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.fA,null,1,null,v)
w.cM(0)
v.d!==$&&B.bI()
v.d=w
u=w}return u},
q(){this.gb_W().q()
this.bwN()},
B(d){return B.cd(this.gb_W(),new C.dME(),this.a.c)}}
C.aMt.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.adT.prototype={
Qj(d,e,f,g){return this.bR2(d,e,f,g)},
bR2(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$Qj=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$Qj)
case 3:s=i
if(d.e==null){w=1
break}B.a4(d,!1).O(null)
t=d.K(x.q).f
t.U(B.b3(null,null,null,null,null,A.t,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ep,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Qj,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.J(A.c.j(0.08),A.r,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dr,24)],x.V),r=B.at(B.p(v,v,A.f,v,v,new B.o(A.aZ,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.de,A.K,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aN,p,A.am,B.d(o,v,n,A.a1,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m)
if(!q)A.d.v(n,B.a([A.au,B.d(w.c,v,2,A.a1,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m))
n.push(A.d4)
n.push(B.B(B.a([B.E(new C.ae9(A.hN,"Download",A.c1,new C.evV(w,d),!0,v),1),A.at,B.E(new C.ae9(A.uq,"Share",A.bk,new C.evW(w,d),!1,v),1),A.at,B.E(new C.ae9(A.hx,"Safari",A.b_,new C.evX(w,d),!1,v),1)],m),A.m,v,A.e,A.i,0,v,v))
n.push(A.aA)
n.push(B.bN(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.Q,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,v,new C.evY(d),v,v))
return B.bl(!0,new B.D(A.qd,B.x(B.a([B.p(v,B.x(n,A.ak,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(A.ja,v,t,u,s,v,A.n),v,v,v,v,A.Gh,v,v,1/0)],m),A.m,v,A.e,A.P,0,A.p),v),!0,!1,A.af,!0,!0)}}
C.ae9.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.J(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aH(!1,A.a2,!0,v,B.aO(!1,u,!0,B.eJ(B.x(B.a([p,A.O,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.Q,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.P,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bDz,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.aj)}}
C.b2s.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.ar6(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.caV().alo(1.35)
s=B.awG(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bCb(v)
if(i.e&&i.w!=null)q=B.aL(h,A.Y,!1,h,!0,A.t,h,B.aM(),i.w,A.bk,h,h,h,h,2,D.c_o,A.y,!0,h,!0,h,!1,i.x,A.ai,h,h,h,new B.bG("slide_tf_"+g.a,x.W),h,A.wU,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.A8,A.an,h,A.Ur,h,h)
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
w=n?t.cLn(B.b1(g.Q).j(0.45),A.cE):t
p=g.as
l=m?1:h
k=m?A.eM:A.E0
p=B.d(f,new B.bG("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Ui:s
$.S()
j=B.I()
j.b=A.ab
j.c=3*w
j.e=A.dT
j.r=A.av.gp(0)
j=i.crT(p,t,k,j)
k=g.r
w=new B.an(A.a_,h,A.aa,A.t,B.a([j,i.crR(k,t,l?A.Ui:s)],x.p),h)}else w=i.crS(p,t,g.k2?A.Ui:s,m)
v=new B.mA(w,new B.bG("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aB(A.c9,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a4)}return new B.D(u,new B.bO(r,h,h,q,h),h)
case 1:case 4:return i.c_E()
case 3:return i.cju()
case 2:return B.b4(h,h,h,new C.b2p(g,h),A.fF)
case 5:g=g.r
return new C.b2r(g,!i.e&&i.z==null,h)}},
caV(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b1(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.ji
j=A.cE
break
case"shadow":v=o.d
e=B.a([new B.cX(D.agh,new B.t(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cX(l,A.I,6*v),new B.cX(l,A.I,16*v),new B.cX(l.j(0.8),A.I,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bG
w=A.av
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mZ
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cX(A.bB,new B.t(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.ar(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cX(v,new B.t(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cX(A.b9,new B.t(-3*v,0),0),new B.cX(A.aw,new B.t(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cX(A.cS,A.I,8*v),new B.cX(A.aw,new B.t(0,-3*v),18*v)],x.r)
k=A.u
w=X.xD
break
case"ice":v=o.d
e=B.a([new B.cX(A.aQ,A.I,10*v),new B.cX(A.cw,A.I,22*v)],x.r)
k=A.Q
w=A.eA
break
case"chalk":h=o.d
e=B.a([new B.cX(l.j(0.45),A.I,3*h)],x.r)
w=l
k=A.ji
break
case"comic":v=B.ar(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.d4R[q]
u.push(new B.cX(v,new B.t(p.a*t,p.b*t),0))}u.push(new B.cX(v,new B.t(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.S()
f=B.I()
v=o.d
f.sam(D.c25.aB(0,new B.a3(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cX(A.LA,new B.t(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.S()
f=B.I()
v=o.d
f.sam(D.c2q.aB(0,new B.a3(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cX(l,A.I,14*o.d)],x.r)
w=l
k=A.a7
break
case"lowercase":h=2*o.d
w=l
k=A.cy
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cX(l.j(0.45),new B.t(u,u),0),new B.cX(l.j(0.2),new B.t(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.ji
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b1(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
aAe(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.f2S.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.ciy(h)
v=r.k2?C.ieZ(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eM:A.E0
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Yo(B.cS(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
crT(d,e,f,g){return this.aAe(d,e,f,!1,g)},
crR(d,e,f){return this.aAe(d,e,f,!1,null)},
crS(d,e,f,g){return this.aAe(d,e,f,g,null)},
bCb(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a8
default:return A.a5}},
c_E(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bJ
return B.at(B.X(s.b===D.lj?A.Hh:A.C6,A.aB,t,t,t,32),t,t,t)}w=u.bFe(r)
if(s.b===D.lj){s=B.m(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.J(A.cs,A.r,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dB,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aP0(r,!0)
return C.fIg(s.go,v,s.id)}return w},
aP0(d,e){var w,v,u,t
try{w=C.ifj(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c8(u,"_bg")
u=B.cy(new C.cix(this,w,v,e))
return u}catch(t){return D.adT}},
bFe(d){return this.aP0(d,!1)},
cju(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b9I
return C.ifB(v,w.db,w.dx)}}
C.b2p.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S(),g=B.I(),f=this.b
g.r=B.b1(f.ay).gp(0)
w=B.I()
w.r=B.b1(f.ch).gp(0)
w.b=A.ab
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a3(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.aP(s,g)
d.aP(s,w)
break
case 1:d.dO(s,g)
d.dO(s,w)
break
case 2:r=new B.aG(h.r,A.ah,i,i,B.a([],x.v))
r.D(new B.aY(u/2,0))
r.D(new B.aq(u,t))
r.D(new B.aq(0,t))
r.D(new B.bt())
d.aG(r,g)
d.aG(r,w)
break
case 3:r=new B.aG(h.r,A.ah,i,i,B.a([],x.v))
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
d.aG(r,g)
d.aG(r,w)
break
case 4:h=t/2
w.c=v+2
d.bo(new B.t(0,h),new B.t(u,h),w)
break
case 5:q=u*0.22
r=new B.aG(h.r,A.ah,i,i,B.a([],x.v))
r.D(new B.aY(q,0))
r.D(new B.aq(u,0))
r.D(new B.aq(u-q,t))
r.D(new B.aq(0,t))
r.D(new B.bt())
d.aG(r,g)
d.aG(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aG(h.r,A.ah,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.aY(k,j)
f.push(h)
v=r.f
if(v!=null)h.by(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.aq(k,j)
f.push(h)
v=r.f
if(v!=null)h.by(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.D(new B.bt())
d.aG(r,g)
d.aG(r,w)
break}},
aw(d){return d.b!==this.b}}
C.aK1.prototype={
R(){return new C.bw3(null,null)}}
C.bw3.prototype={
Z(){var w,v=this
v.a2()
w=B.bn(null,A.hs,null,1,null,v)
w.cM(0)
v.d!==$&&B.aQ()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.byX()},
aPb(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.c4(B.at(B.d(d,w,w,w,w,w,w,A.de,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a9(A.a5,A.a8,A.x,v,w,w),A.n),A.bg)},
bCp(){var w,v=this,u=null,t=v.aPb("Slide A",A.bk),s=v.aPb("Slide B",A.b_)
if(v.a.c===D.cm)return new B.an(A.a_,u,A.b0,A.t,B.a([t,B.at(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.Q,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.cd(w,new C.fbg(v,s,t),u)},
B(d){return this.bCp()}}
C.aKJ.prototype={
jl(d){return new B.a3(0,0,0+d.a*A.k.E(this.b,0,1),0+d.b)},
jZ(d){return d.b!==this.b}}
C.VD.prototype={
R(){return new C.bkV(null,null)}}
C.bkV.prototype={
Z(){var w,v,u=this
u.a2()
w=B.bn(null,A.BE,null,1,null,u)
u.d!==$&&B.aQ()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cm){w.sp(0,1)
return}B.bQ(B.dD(0,0,0,v.c.fr+v.f*120,0,0),new C.dXS(u),x.a)},
bx(d){var w,v,u,t=this
t.bH(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cm)w.sp(0,1)
else B.bQ(B.dD(0,0,0,v.c.fr+v.f*120,0,0),new C.dXR(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bx0()},
B(d){var w,v=this.a
if(v.c.dy===D.cm||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.cd(w,new C.dXQ(this),v.d)}}
C.Jb.prototype={
B(d){return B.cy(new C.ciq(this))}}
C.aAE.prototype={
R(){return new C.bfo()}}
C.bfo.prototype={
Z(){this.a2()
if(this.a.c!==D.cm)B.bQ(A.N1,new C.dbG(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cm)n=B.at(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.Q,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.VD(C.es(A.bi,!1,4279310375,A.aF,"",4294538006,24,A.bp,A.a7,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bh,o,2,"",0,0,"",u,D.fa,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.ce,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.bG("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.es(A.bi,!1,4294967295,A.aF,"",4280640491,22,A.bp,A.a7,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bh,o,2,"Element flies in",0,0,"",q.a.c,D.cU,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.a_,p,A.aa,A.t,B.a([w,B.ao(32,new C.VD(t,B.p(p,D.fCV,A.f,p,p,new B.o(s,p,B.J(A.aZ,A.r,1),r,p,p,A.n),p,p,p,p,A.jh,p,p,1/0),!0,1,new B.bG("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c4(n,D.b4O,A.bg)}}
C.a8h.prototype={
R(){return new C.bly(null,null)}}
C.bly.prototype={
gb0y(){var w=this.a
if(w.e)w=D.f30.t(0,w.c)||D.aQu.t(0,A.d.gI(this.a.c.split("@")))
else w=!1
return w},
Z(){var w,v=this
v.a2()
if(v.gb0y()){w=C.idC(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bn(null,B.dD(0,0,0,w,0,0),null,1,null,v)
w.cM(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.bxu()},
B(d){var w,v=this,u=v.d
if(!v.gb0y()||u==null)return v.a.d
w=v.a
return B.cd(u,new C.eky(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b0o.prototype={
B(d){var w=null
return B.at(C.b2t(!0,w,!1,C.es(A.K,!1,this.e.l(),A.aF,"",4280640491,this.f,A.bp,A.a7,"",0.2,"fx",w,"","",0,!1,"",0,D.bh,4280172719,2,"Aa",0,0,this.c,D.cm,D.cU,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gY(d){return this.f}}
C.bgB.prototype={
jl(d){return C.a31(this.b,new B.a3(0,0,0+d.a,0+d.b).cr(-this.c))},
jZ(d){return d.b!==this.b||d.c!==this.c}}
C.brC.prototype={
a3(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a3(0,0,0+a1.a,0+a1.b).cr(-this.d),g=this.b,f=C.a31(g,h),e=a1.gdC(),d=new C.f0b()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sam(D.aRZ.aB(0,h))
a0.aG(f,w)
g=C.a31(g,h.cr(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bqf.gp(0)
a0.aG(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sam(D.fde.aB(0,h))
a0.aG(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.hg(A.G,e*0.04)
a0.aG(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aG(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.sam(D.fdc.aB(0,h))
a0.aG(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aG(f,w)
g=C.a31(g,h.cr(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aG(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b9.j(0.7).gp(0)
g.z=new B.hg(A.G,e*0.035)
a0.aG(f,g)
g=d.$1(e*0.016)
g.r=A.p_.gp(0)
a0.aG(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sam(D.fd7.aB(0,h))
a0.aG(f,w)
w=C.a31(g,h.cr(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.bdv.gp(0)
a0.aG(w,v)
g=C.a31(g,h.cr(e*0.03))
v=d.$1(e*0.004)
v.r=D.bgu.gp(0)
a0.aG(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sam(D.aRZ.aB(0,h))
a0.aG(f,g)
for(g=B.xs(f),w=B.a([],x.X),g=new B.tm(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b8(B.jw(y.M));--q
g.il()
p=w[q].b
p===$&&B.c()
o=A.o.E(A.k.bh(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.il()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.il()
m=w[q].Hb(p*n/o).a
l=D.d24[A.o.F(n,4)]
$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=l.gp(0)
k=p.G()
p=m.a
j=m.b
u.drawCircle(p,j,v,k)
k.delete()
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.r=A.c.j(0.9).gp(0)
k=i.G()
u.drawCircle(p+t,j+t,s,k)
k.delete()}}break
case"aurora":g=d.$1(e*0.08)
g.sam(D.fdg.aB(0,h))
g.z=new B.hg(A.G,e*0.03)
a0.aG(f,g)
g=d.$1(e*0.018)
g.sam(D.fdd.aB(0,h))
a0.aG(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aG(f,w)
g=C.a31(g,h.cr(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nY.gp(0)
a0.aG(g,w)
break}},
aw(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bsE.prototype={
a3(d,e){d.G9(C.a31(this.b,new B.a3(0,0,0+e.a,0+e.b).cr(-this.c)),A.w,e.gdC()*0.05,!1)},
aw(d){return d.b!==this.b||d.c!==this.c}}
C.aMG.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.aN8.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.aOq.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.a8A.prototype={}
C.Oo.prototype={
R(){var w=x.gz,v=x.N,u=x.bO
return new C.aFt(B.a([],x.D),B.a([],w),B.a([],w),B.U(v,u),B.U(v,x.bo),B.U(v,u),B.aX(v),null,null)},
ge1(){return this.c},
gU5(){return this.r},
gU6(){return this.w},
gLY(){return this.x}}
C.aFt.prototype={
Z(){var w,v=this
v.a2()
$.aV.bZ$.push(v)
C.fNf()
$.hwb=new C.eC8(v)
w=B.bn(null,A.BB,null,1,null,v)
w.fm(0,!0)
v.fy!==$&&B.aQ()
v.fy=w
v.IH()},
bx(d){var w,v,u=this
u.bH(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.OR(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.IH()}},
jd(d){if(d===A.AE||d===A.tm||d===A.tl||d===A.pH)this.tR()},
q(){var w,v,u,t=this
$.aV.hP(t)
w=t.at
if(w!=null)w.a4(0)
t.tR()
w=t.fy
w===$&&B.c()
w.q()
for(w=t.ch,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
v.S$=$.au()
v.P$=0}for(w=t.CW,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bP(0)
v.hb()}for(w=t.cx,w=new B.dq(w,w.r,w.e);w.C();){v=w.d
v.S$=$.au()
v.P$=0}t.bxF()},
gac9(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gPa(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
acE(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gSK())return!1
return!0},
kq(){return this.acE(null)},
ajt(){var w=this.c
if(w==null)return
w.K(x.q).f.U(D.fbn)},
qy(){if(!this.kq())return!1
this.ajt()
return!0},
arS(d){var w,v,u,t,s,r=this
if(r.acE(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hvi(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
A2(){return this.arS(null)},
IH(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$IH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.arZ(k),$async$IH)
case 3:j=e
w=4
return B.b(C.aqz(k),$async$IH)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.h27(j,t.c2z())
w=t.gac9()?5:7
break
case 5:r=t.gPa()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.b0C(r),$async$IH)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bs(s,new C.eyw())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.c3(s,0,q)}case 9:w=6
break
case 7:A.d.bs(s,new C.eyx())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.M)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yW(m==null?"":m)!=null)continue
C.fNr(n,s)
p=!0}t.m(new C.eyy(t,s))
if(p||s.length>J.ad(j))t.tR()
case 1:return B.h(u,v)}})
return B.i($async$IH,v)},
c2z(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kH(w)&&w!==q}if(w)p.push(r)
return p},
cqk(d){var w,v=this,u=d.w
if(!C.kH(u)||u==="hati_kiapo_uongozi")return
v.aaY(d)
w=A.d.bg(v.d,new C.eA6(d))
u=v.d
if(w>=0){u[w]=d.hK()
v.d[w].f=new B.V(Date.now(),0,!1)}else A.d.c3(u,0,d.hK())
v.db=!1},
ckq(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kH(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cqk(t)
s=u.d
w=B.T(s)
v=w.k("cQ<1,i4>")
s=B.C(new B.cQ(new B.Z(s,new C.ezV(),w.k("Z<1>")),new C.ezW(),v),v.k("L.E"))
return s},
OR(d){return this.bRs(d)},
tR(){return this.OR(null)},
bRs(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$OR=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.ckq()
w=3
return B.b(C.Ww(d==null?t.a.c:d,s),$async$OR)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.arS(r)?4:5
break
case 4:w=6
return B.b(C.a7O(r),$async$OR)
case 6:q=r.x
p=A.a.i(q==null?t.gPa():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bg(t.d,new C.exU())
q=t.d
if(o>=0)q[o]=r.hK()
else A.d.c3(q,0,r.hK())
case 5:case 1:return B.h(u,v)}})
return B.i($async$OR,v)},
py(){var w,v=this,u=v.at
if(u!=null)u.a4(0)
u=v.e
w=(u==null?null:C.kH(u.w))===!0?A.hr:A.l5
v.at=B.cI(w,new C.eBe(v))},
b_X(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.afF(u.hK(),v.f,v.r))
if(w.length>40)A.d.cA(w,0)
A.d.a7(v.ay)},
cDY(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.afF(w.e.hK(),w.f,w.r))
w.m(new C.eC4(w,v.pop()))
w.py()},
cpq(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.afF(w.e.hK(),w.f,w.r))
w.m(new C.eA4(w,v.pop()))
w.py()},
op(){var w,v,u=this
if(u.e==null)return
w=A.d.bg(u.d,new C.eBS(u))
if(w>=0){u.d[w]=u.e.hK()
u.d[w].f=new B.V(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.V(Date.now(),0,!1)},
Y6(d){var w,v,u,t,s=this.gdw()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
xI(){var w,v,u,t
for(w=this.ch,v=new B.dq(w,w.r,w.e);v.C();){u=v.d
u.S$=$.au()
u.P$=0}w.a7(0)
for(w=this.CW,v=new B.dq(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bP(0)
u.hb()}w.a7(0)},
Kq(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdw()
if(l==null)return
w=l.z
v=B.T(w)
u=v.k("cQ<1,n>")
t=B.dg(new B.cQ(new B.Z(w,new C.eBT(),v.k("Z<1>")),new C.eBU(),u),u.k("L.E"))
w=this.ch
v=B.a7(w).k("cv<1>")
v=B.C(new B.cv(w,v),v.k("L.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.M)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.S$=$.au()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bP(0)
p.hb()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.M)(v),++r){n=v[r]
if(n.b!==D.cU)continue
p=n.a
m=w.c4(0,p,new C.eBV(n))
s.c4(0,p,new C.eBW())
p=m.a.a
o=n.r
if(p!==o)m.saX(0,o)}},
I0(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b2(u.d,new C.exi(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gPa()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.c3(u.d,0,u.e.hK())}u.op()
u.py()},
ajP(d,e){var w,v,u,t,s=this
if(s.kq())return
w=s.Y6(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kH(v.w))===!0
if(u){C.idG(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdw()
if(t!=null)C.idH(t,w.d+w.f*0.5)}}s.I0()
s.op()
s.py()
if(u&&s.c!=null)s.m(new C.eC5())},
cF1(d,e){var w=this,v=w.gdw()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.I0()
w.op()
w.py()},
gdw(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.E(this.f,0,w.length-1)]},
gqE(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.ibI(o)
if(w!=null)return w
v=q.gdw()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gI(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b1(p==null?v.e:p)
u=q.c_T(v)
t=q.c_S(v)
s=B.b1(v.e)
r=v.f
return new C.jO(o,"Class template",p,u,t,s,r==null?null:B.b1(r))}return C.hP7(o)},
c_T(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=w[u]
if(t.b===D.cU)s=t.w>=28||A.o.E(A.o.ao(t.x.a,100)-1,0,8)>=A.o.E(7,0,8)
else s=!1
if(s)return B.b1(t.Q)}return A.M},
c_S(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cU&&t.w<28)return B.b1(t.Q)}return A.aJ},
afO(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gac9()){w.c.K(x.q).f.U(D.f9Z)
return}w.aaY(d)
w.b1f(C.bDF(d))
return}if(C.cji(v)){w.aaY(d)
w.b1f(d)
return}w.m(new C.ezd(w,d))},
asq(){var w,v,u,t,s,r,q=this
q.a2M(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kH(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.exg(q))
if(r&&q.c!=null){u.toString
q.K_(u,s)}return}q.tR()
q.m(new C.exh(q))},
b1e(d){this.aaY(d)
this.a0e(d,!0)},
aaY(d){if(!C.kH(d.w))return
C.fNr(d,this.d)},
a0e(d,e){return this.cgj(d,e)},
b1f(d){return this.a0e(d,!1)},
cgj(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a0e=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bDF(d)
if(e){r=s.x
q=A.a.i(r==null?t.gPa():r)
t.dy.W(0,q.toLowerCase())
C.aqA(t.a.c,q)}r=s}else r=d
w=C.cji(r.w)?3:4
break
case 3:w=5
return B.b(t.aaZ(r),$async$a0e)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b2(t.d,new C.ezA(l))
o=l.a.hK()
n=C.kH(o.w)&&C.ieU(o)
t.m(new C.ezB(t,o,p))
if(n){m=A.d.bg(t.d,new C.ezC(o))
if(m>=0){t.d[m]=o.hK()
t.tR()}}if(!t.acE(l.a))t.Zh()
r=!1
if(t.c!=null)if(!t.acE(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.arS(r)&&C.fJr(l.a)}else l=r
else l=r
if(l)t.c.K(x.q).f.U(D.faz)
case 1:return B.h(u,v)}})
return B.i($async$a0e,v)},
aaZ(d){return this.bPx(d)},
bPx(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$aaZ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lq(r.c,A.zR),$async$aaZ)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.l4(!1,r,s.c,s.d,null,A.zR,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aaZ,v)},
oe(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$oe=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cji(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.ciI(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$oe,v)},
afv(){var w=0,v=B.j(x.H),u,t=this,s
var $async$afv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cj(null,null,!1,null,new C.ezc(),s,null,!0,!0,x.H),$async$afv)
case 3:if(t.c==null){w=1
break}t.asq()
case 1:return B.h(u,v)}})
return B.i($async$afv,v)},
afu(){var w=0,v=B.j(x.H),u,t=this,s
var $async$afu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cj(null,null,!1,null,new C.ez9(),s,null,!0,!0,x.H),$async$afu)
case 3:if(t.c==null){w=1
break}t.m(new C.eza())
t.asq()
case 1:return B.h(u,v)}})
return B.i($async$afu,v)},
Zh(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Zh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$Zh)
case 3:r=e
if(B.jT(J.r(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.au("Bool","ngmy_marriage_hint_seen",!0),$async$Zh)
case 4:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.f8z)
case 1:return B.h(u,v)}})
return B.i($async$Zh,v)},
K_(d,e){return this.cqJ(d,e)},
cqJ(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$K_=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ah4(s,t.gEF(),t.gEE(),!0,e,t.d),$async$K_)
case 9:w=4
break
case 6:w=10
return B.b(C.ah5(s,t.gEF(),t.gEE(),!0,e,t.d),$async$K_)
case 10:w=4
break
case 7:w=11
return B.b(C.ah6(s,t.gEF(),t.gEE(),!0,e,t.d),$async$K_)
case 11:w=4
break
case 8:w=12
return B.b(C.ah7(s,t.gEF(),t.gEE(),!0,e,t.d),$async$K_)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$K_,v)},
c1r(){var w,v,u,t,s=this
if(!s.gac9()){s.c.K(x.q).f.U(D.f8M)
return}w=s.gPa()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.ah3(u,t,v,new C.eys(s),new C.eyt(s),w)},
afP(){var w=0,v=B.j(x.H),u=this,t,s
var $async$afP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bV(A.dO,null,new C.ezj(u),s,!0,!0,!1,A.lN,!1,!1,x.N),$async$afP)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.ah7(s,u.gEF(),u.gEE(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ah4(s,u.gEF(),u.gEE(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ah5(s,u.gEF(),u.gEE(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.ah6(s,u.gEF(),u.gEE(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.c1r()
return B.h(null,v)}})
return B.i($async$afP,v)},
cfp(d,e){var w,v,u=this,t=null
if(u.e!=null)u.b_X()
w=C.cF()
v=C.C3(t,t,t,t,D.Dp,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.ezk(u,v))},
aao(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aao=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qy()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ijt(s),$async$aao)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d_(q.r,new C.exk())
t.d8(new C.exl(t,p,q,r))
s=t.c.K(x.q).f
o=r.r.length
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aao,v)},
ahM(d,e,f,g){var w=null,v=g?A.dq:A.bN,u=B.J(g?A.aZ:A.cs,A.r,1)
return B.hc(B.aB(w,B.p(w,B.X(d,g?A.c:A.aJ,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4),w,e,w,w)},
a0d(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0d=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qy()){w=1
break}s=t.k5()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.T(r).k("Z<1>")
p=B.C(new B.Z(r,new C.ezv(),q),q.k("L.E"))}o=s!=null&&s.b===D.lM?B.a([s],x.u):p
if(o.length===0){t.c.K(x.q).f.U(D.faK)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bV(A.L,null,new C.ezw(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a0d)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a0d,v)},
ag5(){return this.cgi()},
cgi(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$ag5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qy()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ijf(s,t.f+1,o),$async$ag5)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.Y
q=B.k3(s,B.T(s).c)
p.a=A.d.bg(o.r,new C.ezy(q))
t.d8(new C.ezz(p,t,o,q,r))
t.c.K(x.q).f.U(D.fb8)
case 1:return B.h(u,v)}})
return B.i($async$ag5,v)},
agc(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$agc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qy()||!t.A2()){w=1
break}s=t.gdw()
if(s==null){w=1
break}r=s.z
q=B.T(r).k("Z<1>")
p=B.C(new B.Z(r,new C.ezQ(),q),q.k("L.E"))
if(p.length===0){t.c.K(x.q).f.U(D.f8k)
w=1
break}o=new B.N(p,new C.ezR(),B.T(p).k("N<1,K>")).fb(0,new C.ezS())
r=B.U(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.M)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.as(new B.b9(l,A.b2,A.aO),$.au()))}q=t.c
q.toString
w=3
return B.b(B.bV(A.L,null,new C.ezT(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$agc)
case 3:for(r=new B.dq(r,r.r,r.e);r.C();){q=r.d
q.S$=$.au()
q.P$=0}if(t.c!=null)t.m(new C.ezU())
case 1:return B.h(u,v)}})
return B.i($async$agc,v)},
afS(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$afS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qy()){w=1
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
return B.b(C.hxp(s,new C.EW(r,q,p,o==null?"":o)),$async$afS)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d8(new C.ezl(m,n))
s=t.c.K(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.aht(r)
r=B.w(r==null?null:r.b)+" will play after your last slide."}s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$afS,v)},
aaS(){return this.bOP()},
bOP(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aaS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qy()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ijs(s,t.f+1,l),$async$aaS)
case 3:r=e
q=$.h5L
$.h5L=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d8(new C.exB())
t.c.K(x.q).f.U(D.f8b)
w=1
break}if(!q){s=r.CW
s=C.hw9(l,s==null?"":s,!1)}else s=!1
if(s){t.d8(new C.exC(t,l,r))
t.c.K(x.q).f.U(D.fbC)
w=1
break}s=l.cx
if(s==null)s=A.Y
p=B.k3(s,B.T(s).c)
s=l.r
m.a=A.d.bg(s,new C.exD(p))
o=s.length
t.d8(new C.exE(m,t,l,p,r))
n=s.length-o
s=t.c.K(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aaS,v)},
aRj(d,e){if(e){this.agF()
return}this.cfp(d,!1)},
bKm(){return this.aRj(null,!1)},
agF(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bV(A.c0,null,new C.eA_(t),r,!0,!0,!0,A.pt,!1,!1,x.N),$async$agF)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eA0(t,C.ibH(s).pL()))
case 1:return B.h(u,v)}})
return B.i($async$agF,v)},
d8(d){var w=this
if(w.qy())return
w.I0()
w.b_X()
w.m(d)
w.Kq()
w.op()
w.py()},
a8T(){this.d8(new C.ewf(this,D.mT))},
aSN(){var w=this.gdw()
if(w==null)return
this.d8(new C.exz(this,w))},
aRV(){var w=this.e
if(w==null||w.r.length<=1)return
this.d8(new C.exx(this))},
b49(d,e){if(this.e==null||d===e)return
this.d8(new C.eA8(this,d,e))},
On(d){return this.bMn(d)},
bMn(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$On=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gPa():s)
w=5
return B.b(C.aqy(t.a.c,r),$async$On)
case 5:t.dy.M(0,r.toLowerCase())
case 4:s=d.a
C.as0(s)
w=6
return B.b(C.b2x(t.a.c,s),$async$On)
case 6:if(t.c==null){w=1
break}t.m(new C.ext(t,d))
w=7
return B.b(t.tR(),$async$On)
case 7:case 1:return B.h(u,v)}})
return B.i($async$On,v)},
cqG(d,e){var w=this
if(d.z){w.ajt()
return}w.m(new C.eA7(w,d,e))
w.py()},
k5(){var w,v,u,t,s,r=this.gdw()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
X7(d){return this.ch.c4(0,d.a,new C.exj(d))},
aui(d){return this.CW.c4(0,d.a,new C.exV())},
a2M(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Y6(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aV.al$.d.c
if(u!=null)u.jj()},
b7E(){return this.a2M(!0)},
a2I(d){var w,v,u=this
if(u.qy())return
if(!u.A2())return
w=u.Y6(d)
if(w==null||w.b!==D.cU)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.X7(w).saX(0,"")}u.m(new C.eBQ(u,d))
$.aV.x1$.push(new C.eBR(u,d,w))},
b8c(d){var w=this
if(d.b===D.cU&&!w.kq()&&w.A2()){w.a2I(d.a)
return}w.aAE(d.a)},
aAE(d){var w,v,u,t,s,r=this
if(r.kq())return
w=r.r
if(w!=null&&w!==d){v=r.Y6(w)
if(v!=null&&v.b===D.cU){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eBf(r,s,d))
if(s||d==null){t=$.aV.al$.d.c
if(t!=null)t.jj()}},
aNy(){this.d8(new C.ewg(this))},
ph(d){return this.bBs(d)},
bBs(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$ph=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oe(),$async$ph)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d8(new C.ewd(t,d))
case 1:return B.h(u,v)}})
return B.i($async$ph,v)},
Wd(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Wd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A5.H4(78,1920),$async$Wd)
case 3:s=e
if(s==null||t.gdw()==null){w=1
break}t.d8(new C.ew3(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Wd,v)},
W7(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$W7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdw()==null){w=1
break}w=3
return B.b(S.De(t.a.c),$async$W7)
case 3:s=e
if(t.c==null){w=1
break}r=J.a5(s)
if(r.gan(s)){t.c.K(x.q).f.U(D.fcb)
w=1
break}w=r.gL(s)===1?4:6
break
case 4:q=r.gI(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bV(null,null,new C.ew0(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$W7)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdw()==null){w=1
break}t.d8(new C.ew1(t,q))
case 1:return B.h(u,v)}})
return B.i($async$W7,v)},
atg(){var w=this,v=w.r
if(v==null||w.gdw()==null)return
if(A.d.b2(w.gdw().z,new C.exv(v))){w.c.K(x.q).f.U(D.fbc)
return}if(w.w===v)w.a2M(!0)
w.d8(new C.exw(w,v))},
bIE(){var w=this.k5(),v=w==null
if((v?null:w.b)===D.fa)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cU)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aOf(d,e){var w=this,v=w.k5(),u=w.gdw(),t=w.e
if(t==null)return
w.d8(new C.ewI(w,v,d,e,t,u))},
bD2(d){return this.aOf(d,null)},
a9a(d){return this.bDa(d)},
bDa(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9a=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a8J.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.oe(),$async$a9a)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.k5()
if(s!=null){r=s.b
if(r===D.cU)t.bD2(s.w>=28||s.x.gdM(0)>=A.H.gdM(0)?d.d:d.e)
else if(r===D.fa){r=d.c
t.aOf(r.j(0.88),r)}w=1
break}t.d8(new C.ewN(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a9a,v)},
a99(d){return this.bD8(d)},
bD8(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a99=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.k5()
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
return B.b(t.oe(),$async$a99)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d8(new C.ewL(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a99,v)},
bCT(d){var w=this.gdw()
if(w==null)return
this.d8(new C.ewH(this,w,d))},
a0j(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a0j=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.ijo(r),$async$a0j)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.op()
t.m(new C.ezK(t,s))
w=4
return B.b(t.tR(),$async$a0j)
case 4:if(t.c!=null)t.afO(s)
case 1:return B.h(u,v)}})
return B.i($async$a0j,v)},
aaK(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aaK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a2M(!0)
t.op()
s=t.c
s.toString
w=3
return B.b(C.RK(s,q),$async$aaK)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.K(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aaK,v)},
DO(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$DO=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.op()
t=4
w=7
return B.b(C.aRc(m),$async$DO)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aQD(o,q,m.b),$async$DO)
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
return B.i($async$DO,v)},
Ft(d,e){return this.cDn(d,e)},
cDn(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ft=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qy()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a2M(!0)
t.op()
s=h.a=t.e.hK()}else{r=A.d.bg(t.d,new C.eBZ(d))
s=h.a=r>=0?t.d[r].hK():d.hK()}s=s.w
q=s==null
p=C.icF(q?"":s)
o=C.hv4(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.T(s).k("Z<1>")
n=B.C(new B.Z(s,new C.eC_(h,p),q),q.k("L.E"))
s=h.a.b
w=3
return B.b(t.cwB(n.length,o,s),$async$Ft)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.icz(h.a)
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
return B.b(t.cwA(n,o),$async$Ft)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.fP(t.d,new C.eC0(s))
s=h.a.b
w=11
return B.b(t.cwy(k.b,s),$async$Ft)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hK()
case 5:j=C.icE(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.K(x.q).f.U(D.fcn)
w=1
break}w=12
return B.b(t.cwz(j.a,s,o,j.c),$async$Ft)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.eC1(h,t,i))
t.py()
case 1:return B.h(u,v)}})
return B.i($async$Ft,v)},
cwB(d,e,f){var w=this.c
w.toString
return B.bV(A.L,null,new C.eBv(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cwA(d,e){var w=this.c
w.toString
return B.bV(A.L,null,new C.eBu(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cwy(d,e){var w=this.c
w.toString
return B.bV(A.L,null,new C.eBo(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cwz(d,e,f,g){var w=this.c
w.toString
return B.bV(A.L,null,new C.eBq(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
acd(){var w=null
return B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
ace(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.ar(d,A.c0,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dr,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a9(A.ay,A.aE,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.es,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.fnq,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a7,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),1)],v),A.E,u,A.e,A.i,0,u,u)},
aW6(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.J(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.a1,w,w,w,A.V5,A.K,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bS,w,w,w)},
aW9(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a9(A.ay,A.aE,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.J(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aH(!1,A.a2,!0,w,B.aO(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bd,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.n0,w,w,w),A.cL,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a7,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.E,w,A.e,A.i,0,A.p),1),B.X(A.yI,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bA,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eyo(e,j),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
bZN(d,e,f,g,h,i){return this.aW9(d,e,f,!1,g,h,i)},
avD(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.J(A.c.j(0.08),A.r,1)
return B.p(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.de,w,w,w),A.bD,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.Q,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.a_O,w,w,w)},
aW8(d,e,f){var w=null,v=B.bo(A.c.j(0.08),w,w,w,A.c,w,A.cl,w,new B.b7(B.m(14),A.a0),w,w,w)
return B.bE(B.d(e,w,w,w,w,w,w,A.nJ,w,w,w),w,new C.eyn(d,f),v)},
aW7(d,e){return this.aW8(d,e,null)},
Kh(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Kh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.pj(l,s.c,s.d),$async$Kh)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aI("=",l.length)+"\n\n"
q=new B.fg(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gaf(o.z),n=new B.f5(l,new C.eBg());n.C();){m=l.gT(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aN(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.aat(l.charCodeAt(0)==0?l:l,r.b),$async$Kh)
case 4:l=t.a
w=5
return B.b(B.pi(l.c,l.d),$async$Kh)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Kh,v)},
Im(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Im=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.pj(q,s.c,s.d),$async$Im)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.aat(A.X.ap(r.ag(),null),r.b+".json"),$async$Im)
case 4:q=t.a
w=5
return B.b(B.pi(q.c,q.d),$async$Im)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Im,v)},
b7n(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.op()
u.tR()
w=u.c
w.toString
v=B.dZ(new C.eBP(u,t),!1,null,x.z)
B.a4(w,!1).cd(v)},
HA(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$HA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oe(),$async$HA)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fNE(),$async$HA)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.ifv(s.a)
q=t.c
q.toString
w=5
return B.b(B.bV(A.av,null,new C.ew8(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$HA)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d8(new C.ew9(t,s))
w=1
break}if(p==="split")t.d8(new C.ewa(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$HA,v)},
NK(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$NK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qy()){w=1
break}w=3
return B.b(t.oe(),$async$NK)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aRb(s,null,null),$async$NK)
case 4:r=e
if(r==null||t.gdw()==null){w=1
break}t.d8(new C.ewe(t,r))
case 1:return B.h(u,v)}})
return B.i($async$NK,v)},
b3X(d){var w=this.e
if(w==null||!C.kH(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aPz(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aRb(s,t==null?null:B.b1(t),u)},
a8R(d){return this.bBj(d)},
bBj(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a8R=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qy()){w=1
break}if(!t.A2()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.fcC)
w=1
break}w=3
return B.b(t.aPz(),$async$a8R)
case 3:r=f
if(r==null||t.gdw()==null){w=1
break}t.d8(new C.ew5(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a8R,v)},
aho(d){return this.cpt(d)},
cpt(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aho=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qy()){w=1
break}if(!t.A2()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.fbK)
w=1
break}w=3
return B.b(t.aPz(),$async$aho)
case 3:r=f
if(r==null||t.gdw()==null){w=1
break}t.d8(new C.eA5(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$aho,v)},
cc6(){var w,v,u=this
if(u.kq())return
w=new B.V(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bD(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cCr()}},
cCr(){var w,v,u,t,s,r=this.gdw()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d8(new C.eBX(this,r,(A.o.aD(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
c_7(){var w,v,u,t,s,r=this.gdw()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d8(new C.eyr(this,r,u.d))},
c3S(d){var w
if(this.kq())return!1
w=this.e
if((w==null?null:C.kH(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fKc(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lj&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c3T(d){var w
if(this.kq())return!1
w=this.e
if((w==null?null:C.kH(w.w))!==!0)return!0
if(!this.A2())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fKc(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lj&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
NS(d){return this.bDA(d)},
bDA(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$NS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qy()){w=1
break}if(!t.A2()){s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(D.faA)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.aqC(p),$async$NS)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.K(x.q).f.U(D.fbe)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gI(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a7O(r)
w=1
break}t.m(new C.ewR(t,d,o))
t.op()
$.aV.x1$.push(new C.ewS(t))
case 1:return B.h(u,v)}})
return B.i($async$NS,v)},
Wb(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Wb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oe(),$async$Wb)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bEl(),$async$Wb)
case 4:s=e
if(s==null||t.gdw()==null){w=1
break}t.d8(new C.ew2(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Wb,v)},
OC(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oe(),$async$OC)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.k5()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fNv(r),$async$OC)
case 4:q=e
if(q==null){w=1
break}t.d8(new C.exT(s,q))
case 1:return B.h(u,v)}})
return B.i($async$OC,v)},
ja(d){this.d8(new C.ewb(this,d))},
qo(d){return this.bCM(d)},
bCM(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qo=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qy()){w=1
break}m=!D.aQx.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.oe(),$async$qo)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.HA()
w=1
break A
case"sign_paper":t.NK()
w=1
break A
case"hd_photo":t.Wb()
w=1
break A
case"sharpen":t.OC()
w=1
break A
case"print":t.DO()
w=1
break A
case"rotate":s=t.k5()
if(s!=null)t.d8(new C.ewk(s))
w=1
break A
case"text_box":t.aNy()
w=1
break A
case"picture":t.Wd()
w=1
break A
case"present":t.b7n()
w=1
break A
case"new_slide":t.a8T()
w=1
break A
case"export_json":t.Im()
w=1
break A
case"outline_share":t.Kh()
w=1
break A
case"flashcard_tool":t.vr(D.IK)
w=1
break A
case"quiz_tool":t.vr(D.IL)
w=1
break A
case"worksheet_tool":t.vr(D.IM)
w=1
break A
case"duplicate_el":s=t.k5()
if(s==null){w=1
break A}t.d8(new C.ewl(t,s))
w=1
break A
case"delete_el":t.atg()
w=1
break A
case"bring_fwd":s=t.k5()
if(s==null||t.gdw()==null){w=1
break A}t.d8(new C.ewm(t,s))
w=1
break A
case"send_back":s=t.k5()
if(s==null||t.gdw()==null){w=1
break A}t.d8(new C.ewx(t,s))
w=1
break A
case"align_left":s=t.k5()
if(s!=null)t.d8(new C.ewA(s))
w=1
break A
case"align_center":s=t.k5()
if(s!=null)t.d8(new C.ewB(s))
w=1
break A
case"align_right":s=t.k5()
if(s!=null)t.d8(new C.ewC(s))
w=1
break A
case"grayscale":case"brighten":t.OC()
w=1
break A
case"flip_h":s=t.k5()
if(s!=null)t.d8(new C.ewD(s))
w=1
break A
case"flip_v":s=t.k5()
if(s!=null)t.d8(new C.ewE(s))
w=1
break A
case"rectangle":t.ph(D.bh)
w=1
break A
case"circle":t.ph(D.eU)
w=1
break A
case"triangle":t.ph(D.k0)
w=1
break A
case"arrow":t.ph(D.Dr)
w=1
break A
case"line":case"divider":t.ph(D.fD)
w=1
break A
case"word_count":r=t.gdw()
if(r==null){w=1
break A}for(q=A.d.gaf(r.z),p=new B.f5(q,new C.ewF()),o=0;p.C();){n=A.a.fD(A.a.i(q.gT(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.Z(n,new C.ewG(),B.T(n).k("Z<1>")).gL(0)}t.c.K(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cF()
t.ja(C.iZ(A.K,!1,t.gqE().d.l(),A.aF,40,A.bp,A.u,0.18,q,"Presentation Title",0,D.mU,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cF()
t.ja(C.iZ(A.K,!1,t.gqE().e.l(),A.aF,22,A.bp,A.a7,0.12,q,"Subtitle goes here",0,D.dh,0.8,0.1,0.48))
w=1
break A
case"bullets":t.ja(C.iZ(A.bi,!0,4279310375,A.aF,20,A.bp,A.a7,0.5,C.cF(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.uS,0.8,0.1,0.22))
w=1
break A
case"numbered":t.ja(C.iZ(A.bi,!1,4279310375,A.aF,20,A.bp,A.a7,0.5,C.cF(),"1. First item\n2. Second item\n3. Third item",0,D.uR,0.8,0.1,0.22))
w=1
break A
case"quote":t.ja(C.iZ(A.K,!1,4279310375,A.aF,24,A.cE,A.a7,0.25,C.cF(),'"Insert meaningful quote here."',0,D.dh,0.8,0.1,0.3))
w=1
break A
case"citation":t.ja(C.iZ(A.bi,!1,4284773515,A.aF,14,A.bp,A.a7,0.1,C.cF(),"Author, Title (Year). Publisher.",0,D.uS,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.ja(C.iZ(A.dW,!1,4279310375,A.aF,14,A.bp,A.a7,0.08,C.cF(),C.bEn(),0,D.dh,0.24,0.72,0.04))
w=1
break A
case"page_number":t.ja(C.iZ(A.dW,!1,4279310375,A.aF,13,A.bp,A.a7,0.06,C.cF(),"Page "+(t.f+1),0,D.dh,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d8(new C.ewn(t))
w=1
break A
case"footer_bar":t.d8(new C.ewo(t))
w=1
break A
case"highlight":t.d8(new C.ewp(t))
w=1
break A
case"redact":t.d8(new C.ewq(t))
w=1
break A
case"callout":t.d8(new C.ewr(t))
w=1
break A
case"checkboxes":t.ja(C.iZ(A.bi,!1,4279310375,A.aF,20,A.bp,A.a7,0.45,C.cF(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dh,0.8,0.1,0.2))
w=1
break A
case"table":t.ja(C.iZ(A.bi,!1,4279310375,A.aF,16,A.bp,A.a7,0.55,C.cF(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dh,0.8,0.1,0.18))
w=1
break A
case"memo":t.d8(new C.ews(t))
w=1
break A
case"letter":t.ja(C.iZ(A.bi,!1,4279179050,A.aF,17,A.bp,A.a7,0.82,C.cF(),C.bEn()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dh,0.8,0.1,0.08))
w=1
break A
case"agenda":t.ja(C.iZ(A.bi,!1,4279310375,A.aF,22,A.bp,A.Q,0.76,C.cF(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.uS,0.8,0.1,0.12))
w=1
break A
case"toc":t.ja(C.iZ(A.bi,!1,4279310375,A.aF,18,A.bp,A.a7,0.76,C.cF(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dh,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.ja(C.iZ(A.bi,!1,4279310375,A.aF,16,A.bp,A.a7,0.08,C.cF(),"Signature: _________________________",0,D.dh,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.ja(C.iZ(A.bi,!1,4279310375,A.aF,16,A.bp,A.a7,0.08,C.cF(),"Initials: ______",0,D.dh,0.3,0.65,0.78))
w=1
break A
case"approved":t.ja(C.iZ(A.K,!1,4278556265,A.aF,28,A.bp,A.u,0.12,C.cF(),"APPROVED",0,D.mU,0.32,0.62,0.08))
w=1
break A
case"draft":t.ja(C.iZ(A.K,!1,4292617766,A.aF,28,A.bp,A.u,0.12,C.cF(),"DRAFT",0,D.dh,0.32,0.62,0.08))
w=1
break A
case"confidential":t.ja(C.iZ(A.K,!1,871318596,A.aF,36,A.bp,A.u,0.12,C.cF(),"CONFIDENTIAL",0,D.dh,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d8(new C.ewt(t))
w=1
break A
case"progress":t.d8(new C.ewu(t))
w=1
break A
case"stars":t.ja(C.iZ(A.K,!1,4279310375,A.aF,36,A.bp,A.a7,0.12,C.cF(),"\u2605\u2605\u2605\u2605\u2606",0,D.qD,0.8,0.1,0.4))
w=1
break A
case"equation":t.ja(C.iZ(A.K,!1,4279310375,A.aF,32,A.bp,A.Q,0.14,C.cF(),"y = mx + b",0,D.dh,0.8,0.1,0.38))
w=1
break A
case"timeline":t.ja(C.iZ(A.K,!1,4279310375,A.aF,18,A.bp,A.a7,0.2,C.cF(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.uR,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d8(new C.ewv(t))
w=1
break A
case"compare":t.d8(new C.eww(t))
w=1
break A
case"link_text":t.ja(C.iZ(A.bi,!1,4280640491,A.mZ,16,A.bp,A.a7,0.1,C.cF(),"https://example.com",0,D.dh,0.8,0.1,0.5))
w=1
break A
case"phone":t.ja(C.iZ(A.bi,!1,4279310375,A.aF,18,A.bp,A.a7,0.1,C.cF(),"(555) 123-4567",0,D.dh,0.8,0.1,0.5))
w=1
break A
case"email":t.ja(C.iZ(A.bi,!1,4280640491,A.aF,18,A.bp,A.a7,0.1,C.cF(),"name@email.com",0,D.dh,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d8(new C.ewy(t))
w=1
break A
case"cover_page":r=t.gdw()
if(r==null){w=1
break A}t.d8(new C.ewz(t,r))
w=1
break A
case"invoice":t.ja(C.iZ(A.bi,!1,4279179050,A.aF,16,A.bp,A.a7,0.84,C.cF(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dh,0.8,0.1,0.08))
w=1
break A
case"resume":t.ja(C.iZ(A.bi,!1,4279179050,A.aF,17,A.bp,A.a7,0.84,C.cF(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dh,0.8,0.1,0.08))
w=1
break A
case"minutes":t.ja(C.iZ(A.bi,!1,4279310375,A.aF,16,A.bp,A.a7,0.88,C.cF(),"MEETING MINUTES\nDate: "+C.bEn()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dh,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.ja(C.iZ(A.bi,!1,4279310375,A.aF,17,A.bp,A.a7,0.88,C.cF(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dh,0.8,0.1,0.06))
w=1
break A
case"rubric":t.ja(C.iZ(A.bi,!1,4279310375,A.aF,15,A.bp,A.a7,0.8,C.cF(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dh,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qo,v)},
cw2(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.f2X.t(0,this.z)},
cw1(d){if(this.k5()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b95(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cm,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bz
u=B.J(u,A.r,o&&e?2:1)
t=C.ifk(d)
s=o?12:18
r=o?A.H:A.cP
if(o)if(e)q=f
else q=g?A.ae:A.al
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.OX,A.f,p,p,D.EJ,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fB,B.aB(p,new B.an(A.a_,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a4),p)},
bP5(d){var w,v=null,u=this.k5()
if(u==null)return A.bJ
w=B.a([A.ac,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aB:A.al,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bm],x.p)
A.d.v(w,new B.N(D.Rt,new C.exS(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.i,0,v,v)},
vr(d){return this.bBr(d)},
bBr(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vr=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aQr.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.oe(),$async$vr)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d8(new C.ewc(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vr,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.f1E
w=h.e
if(w==null)return h.bFk()
v=h.gdw()
v.toString
u=h.c
u.toString
t=B.P(u).ax.a===A.J
u=h.c
u.toString
s=x.w
r=B.aJ(u,A.bX,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aJ(u,A.eN,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.c0:D.bfS
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gSK()}else j=!1
if(j)k.push(new C.a8i(h.a.c,!1,h.e.gbbk(),h.gcc3(),g))
else if(s&&h.e!=null&&!h.kq()&&C.cji(h.e.w)){j=h.a
k.push(new C.a8i(j.c,j.d,g,h.gcdc(),g))}if(s)k.push(h.bP0(w,t,r))
if(s&&h.kq()){w=t?A.fN:A.kB
j=B.m(14)
i=B.J(A.bk.j(0.35),A.r,1)
k.push(B.p(g,B.B(B.a([D.bTZ,A.ac,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fN,g,g,g,g,g,g,g,g,12,g,g,A.Q,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.i,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.BJ,A.iB,g,g,g))}w=!n
if(w&&!h.kq())k.push(h.c4Q(t,r))
if(w&&h.kq())k.push(h.cDo(t))
if(r&&h.k5()!=null&&w&&!h.kq())k.push(h.c4L(t))
j=B.a([],l)
if(q&&w)j.push(new B.a6(132,g,h.b6O(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a6(g,72,h.b6O(t,!1),g))
i.push(B.E(new B.bO(A.b4,g,g,h.bGE(v,t,!s||p),g),1))
if(h.cw2(r)&&u&&s&&!h.kq())i.push(h.cbQ(v,t,r))
j.push(B.E(B.x(i,A.m,g,A.e,A.i,0,A.p),1))
if(q&&!h.kq()&&h.cw1(!1))j.push(new B.a6(240,g,h.bRQ(t),g))
k.push(B.E(B.B(j,A.ak,g,A.e,A.i,0,g,g),1))
if(u&&s)k.push(new B.a6(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.m,g,A.e,A.i,0,A.p)],l)
if(o&&r)w.push(h.c4M(t))
return B.c7(g,m,B.bl(!1,new B.an(A.a_,g,A.aa,A.t,w,g),!0,!1,A.af,!0,!0),g,!1,!1,g,!1)},
bFk(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.J
p=w?A.c0:A.bN
v=r.a.e
u=r.caW(A.bk,A.qj,new C.ewV(r),r.gcfm(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.E(r.aNg(A.bk,A.hM,"Blank Presentation",new C.ewW(r)),1),A.at,B.E(r.aNg(A.b_,A.wo,"Class Template",new C.ewX(r)),1)],t),A.m,q,A.e,A.i,0,q,q)
u=B.a([u,A.bu,s,A.mY,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aB:A.al,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ad],t)
t=r.d
if(t.length===0)u.push(r.bCe(w))
else{t=new B.i2(t,B.T(t).k("i2<1>"))
A.d.v(u,t.gdS(t).dF(0,new C.ewY(r,w),x.l))}return B.c7(q,p,B.bl(!1,B.cf(u,q,new B.Q(18,12,18,v),q,q,A.ag,!1),!0,!1,A.af,!0,!0),q,!1,!1,q,q)},
bNa(){this.m(new C.exy(this))
var w=this.c
w.toString
if(B.aJ(w,A.bX,x.w).w.a.a<900){w=$.aV.al$.d.c
if(w!=null)w.jj()}},
ag6(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ag6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.k5()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bV(A.L,null,new C.ezJ(t,s.ax.a===A.J),r,!0,!0,!0,null,!1,!1,x.H),$async$ag6)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ag6,v)},
B_(d,e){return this.cwo(d,e)},
cwo(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$B_=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.i0(D.Y3,!0,"Dismiss",j,new C.eBh(),new C.eBi(d,e),A.iy,!0,x.N),$async$B_)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ajt()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gSK()){r.ajt()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aRc(d),$async$B_)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aQD(j,q,d.b),$async$B_)
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
return B.b(r.Ft(d,!1),$async$B_)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.i0(D.Y3,!0,"Dismiss",j,new C.eBj(),new C.eBk(d),A.a2,!0,x.y),$async$B_)
case 20:if(g===!0)r.On(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.ah8("Rename presentation",d.b),$async$B_)
case 24:l=g
if(l!=null)r.cqG(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ag()
k.n(0,"id",C.cF())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eBl(r,k))
r.py()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$B_,v)},
b1T(d,e){var w=null
return B.bN(!1,D.fNk,w,w,!0,w,w,w,e,w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.bk,w,w,w,A.ax,w,A.lD,w,w,w,w,w,A.kn,w,w))},
bCe(d){var w=this.fy
w===$&&B.c()
return B.cd(w,new C.ewh(this,d),null)},
bLg(d,e,f){var w=new B.N(B.a(d.split(" \u2022 "),x.s),new C.exm(),x.dv).c0(0,new C.exn()),v=B.C(w,w.$ti.k("L.E"))
return new B.D(G.ajJ,this.aNR(v,e,new C.exo(),f),null)},
aNR(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.en)
t=e.j(g?0.14:0.1)
s=new B.aP(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ae:A.br,n,n,n,10),A.qJ],m))}p=d[v]
o=g?A.c.j(0.85):A.aJ
q.push(new B.y(p,n,new B.F(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.ce(A.aM,A.e,A.P,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bK(r,r,r,r),new B.bg(s,s,s,s),n,n,A.n),n,n,n,n,A.mK,n,n,n))
A.d.v(l,u)}return B.eN(A.a5,B.B(l,A.m,n,A.e,A.P,0,n,n),A.f,A.e2)},
bCc(d,e,f){return this.aNR(d,e,null,f)},
bLi(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.do_
else if(v==="hati_kuhoweya")w=D.d8R
else{if(v==="hati_kiapo_uongozi")v=D.cVN
else v=C.kH(v)?D.d2p:A.R4
w=v}v=this.fy
v===$&&B.c()
return B.cd(v,new C.exr(this,f,d,e,w),null)},
c4M(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.k5()
if(i==null||i.b!==D.cU)return A.bJ
w=k.X7(i)
v=k.aui(i)
u=A.w.j(0.55)
t=x.p
s=B.bl(!1,new B.D(A.BL,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b1,B.bN(!1,D.fIM,j,j,!0,j,j,j,new C.eyS(k),j,j)],t),A.m,j,A.e,A.i,0,j,j),j),!0,!1,A.af,!0,!0)
r=d?A.av:A.c
q=B.m(18)
p=B.J(A.bk.j(0.45),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.h6,B.c4(new B.D(A.eT,B.aL(j,A.Y,!0,j,!0,A.t,j,B.aM(),w,A.bk,j,j,j,j,2,D.c_6,A.y,!0,j,!0,j,!0,v,A.ai,j,j,j,j,j,A.wU,j,j,j,j,j,j,!1,"\u2022",j,new C.eyT(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a3,A.A8,A.an,j,A.Ur,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bg),j),1)
q=B.m(16)
p=d?A.bo:A.c
o=B.J(d?A.aJ:A.aL,A.r,1)
n=B.E(B.cg(B.B(B.a([k.uh(G.O4,j,new C.eyU(k,i),d),k.uh(G.a0X,j,new C.eyV(k,i),d),k.uh(K.anY,j,new C.eyW(k,i),d),k.uh(K.a1G,j,new C.eyX(k,i),d),k.uh(k.bCa(i.as),j,new C.eyY(k,i),d),k.uh(D.ap3,j,new C.eyZ(k,i),d),k.uh(D.ap2,j,new C.ez_(k,i),d)],t),A.m,j,A.e,A.i,0,j,j),A.t,j,A.y,j,j,j,j,A.aM),1)
m=A.k.N(i.w)
return B.bT(0,B.aH(!1,A.a2,!0,j,B.x(B.a([s,r,new B.D(I.ajS,B.p(j,B.B(B.a([n,A.ac,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aB:A.al,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.dc],t),A.m,j,A.e,A.i,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lE,j,j,j),j)],t),A.m,j,A.e,A.i,0,A.p),A.f,u,0,j,j,j,j,j,A.aj),0,0,0)},
c4L(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.k5()
if(m==null)return A.bJ
w=m.b
v=w===D.cU
u=B.m(18)
t=x.O
t=d?B.a([A.bo,A.M],t):B.a([A.c,A.aP],t)
s=B.J(d?A.aJ:A.aL,A.r,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cx,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b5s(A.iW,"Edit",new C.eyD(o,m),d,!0))
if(w===D.lM)p.push(o.b5s(A.H9,"Shape & ring",new C.eyE(o),d,!0))
p.push(o.uh(A.Cv,"Format",new C.eyF(o),d))
if(v)A.d.v(p,B.a([o.uh(G.O4,n,new C.eyG(o,m),d),o.uh(D.ap3,n,new C.eyH(o,m),d),o.uh(D.ap2,n,new C.eyI(o,m),d)],q))
p.push(A.b1)
p.push(o.cue(A.ea,n,o.gaRT(),d,!0))
p.push(o.uh(A.hw,"Done",new C.eyJ(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a9(A.a5,A.a8,A.x,t,n,n),A.n),n,n,n,A.BK,A.lE,n,n,n)},
bCa(d){switch(d.a){case 2:return D.a1D
case 1:case 5:return D.a1F
default:return D.a1E}},
c5G(d){switch(d.a){case 0:case 4:return A.K
case 2:return A.dW
default:return A.bi}},
aAD(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aw
else if(h)w=A.c
else{v=g?A.ae:A.aJ
w=v}v=B.m(12)
u=B.m(12)
t=h?L.Hw:n
if(h)s=n
else s=g?A.c.j(0.06):A.bN
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.en,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.qc,B.aH(!1,A.a2,!0,n,B.aO(!1,v,!1,B.eJ(new B.D(new B.Q(q,8,q,8),B.B(o,A.m,n,A.e,A.P,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.aj),n)},
uh(d,e,f,g){return this.aAD(d,e,f,g,!1,!1)},
b5s(d,e,f,g,h){return this.aAD(d,e,f,g,h,!1)},
cue(d,e,f,g,h){return this.aAD(d,e,f,g,!1,h)},
bP0(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bo,A.M],m):B.a([A.c,A.n8],m)
w=B.J(e?A.aJ:A.nX,A.r,1.2)
v=B.a([new B.ac(0,A.G,A.bk.j(e?0.18:0.1),A.cx,18)],x.V)
u=p.a3c(A.eK,"Back",p.gbIo(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a1,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.dc,B.E(B.B(B.a([new B.ds(1,A.cn,t,o),A.ac,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.bY:A.al,o,o,o,o,o,o,o,o,11,o,o,A.Q,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.tR,o,A.e,A.i,0,A.cZ,o),1)],q)
if(!p.kq()){u=p.a3c(A.rB,"Undo",p.ax.length===0?o:p.gcDX(),e)
A.d.v(r,B.a([u,p.a3c(D.bNp,"Redo",p.ay.length===0?o:p.gcpp(),e)],q))}r.push(p.a3c(A.yG,"PDF",new C.exL(p),e))
r.push(p.a3c(A.hN,"Download as video",new C.exM(p),e))
if(!p.kq())r.push(B.Cg(o,o,B.X(A.ok,e?A.ae:A.br,o,o,o,o),new C.exN(p),A.I,new C.exO(p),A.af,"More",x.N))
r.push(A.dc)
r.push(B.aH(!1,A.a2,!0,o,B.aO(!1,B.m(14),!0,B.eJ(D.elT,o,new B.o(o,o,o,B.m(14),o,L.Hw,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaBr(),o,o,o,o,o,o,o),A.f,A.L,0,o,o,o,o,o,A.aj))
return B.p(o,B.B(r,A.m,o,A.e,A.i,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a9(A.ay,A.aE,A.x,m,o,o),A.n),o,o,o,D.by3,D.bDn,o,o,o)},
cDo(d){var w=this,v=null,u=B.m(18),t=d?A.av.j(0.92):A.c.j(0.96),s=B.J(d?A.cq:A.aL,A.r,1)
return B.p(v,B.cg(B.B(B.a([w.iW(A.ut,"Print",new C.eC2(w),d),w.iW(A.yG,"Download PDF",new C.eC3(w),d),w.iW(A.qp,"Present",w.gaBr(),d)],x.p),A.m,v,A.e,A.i,0,v,v),A.t,v,A.y,v,v,v,v,A.aM),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.BJ,G.alw,v,v,v)},
a3c(d,e,f,g){var w,v=null
if(f==null)w=g?A.aZ:A.dm
else w=g?A.ae:A.aJ
return B.aF(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cb)},
c4Q(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.av.j(0.92):A.c.j(0.96)
u=B.J(d?A.cq:A.aL,A.r,1)
t=x.f0
t=B.C(new B.N(p,new C.ez2(r,d),t),t.k("ak.E"))
t.push(new B.D(Y.alb,new B.fe(new C.ez3(r),q),q))
A.d.v(t,w?B.a([new B.D(R.w2,r.ahM(A.la,"Ending celebration",r.gcfz(),d),q),new B.D(R.w2,r.ahM(A.H9,"Logo ring & frame",r.gcgg(),d),q)],x.p):A.fv)
A.d.v(t,w?B.a([new B.D(R.w2,r.ahM(A.nu,"Look and feel",r.gcgh(),d),q),new B.D(R.w2,r.ahM(A.pf,"Edit this slide's text",r.gcgO(),d),q)],x.p):A.fv)
t.push(new B.D(R.w2,B.hc(B.aB(q,B.p(q,D.f13,A.f,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ac(0,A.G,O.lz.j(0.4),A.I,10)],x.V),D.ar5,A.n),q,34,q,q,A.eZ,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ez4(r),q,q,q,q,q,q,!1,A.a4),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cg(B.B(t,A.m,q,A.e,A.i,0,q,q),A.t,q,A.y,q,D.bDS,q,q,A.aM)
s=e?8:10
return B.p(q,B.x(B.a([t,B.cg(r.crP(d),A.t,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aM)],x.p),A.ak,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.BJ,q,q,q,q)},
crP(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.dhg[v]
u.a=null
s=u.a=t.b
w.push(e.lP(e.ctD(s),t.a,new C.eAr(u,e),a3,D.aQr.t(0,s)))}w.push(e.iW(A.lc,"Notes Slide",new C.eAs(e),a3))
w.push(e.lP(A.H8,"Quiz",new C.eAt(e),a3,!0))
w.push(e.lP(M.GI,"Worksheet",new C.eAE(e),a3,!0))
w.push(e.lP(V.Hf,"Flashcard",new C.eAP(e),a3,!0))
w.push(e.lP(A.OP,"Lab Report",new C.eB_(e),a3,!0))
w.push(e.lP(A.uk,"Rubric",new C.eB6(e),a3,!0))
w.push(e.lP(A.pa,"Minutes",new C.eB7(e),a3,!0))
w.push(e.lP(A.oj,"Syllabus",new C.eB8(e),a3,!0))
w.push(e.lP(A.a2e,"Timeline",new C.eB9(e),a3,!0))
return B.B(w,A.m,d,A.e,A.i,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.diC[v]
w.push(e.lP(r.b,r.c,new C.eBa(e,r),a3,!D.aQx.t(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.i,0,d,d)
case"Insert":return B.B(B.a([e.iW(A.yZ,a0,e.gaNx(),a3),e.iW(A.up,"Picture",new C.eAu(e),a3),e.iW(A.yU,"Bio link",new C.eAv(e),a3),e.iW(A.a2d,"Table",new C.eAw(e),a3),e.iW(A.Hd,"Sticky",new C.eAx(e),a3),e.iW(A.uo,"Divider",new C.eAy(e),a3),e.iW(A.Cw,"Header",new C.eAz(e),a3),e.lP(A4.wd,"Rectangle",new C.eAA(e),a3,!0),e.lP(A.ru,"Circle",new C.eAB(e),a3,!0),e.lP(A.a1v,"Triangle",new C.eAC(e),a3,!0),e.lP(A.jT,"Arrow",new C.eAD(e),a3,!0),e.lP(D.bLR,"Parallelogram",new C.eAF(e),a3,!0),e.lP(D.bOj,"Hexagon",new C.eAG(e),a3,!0),e.lP(A.uo,"Line",new C.eAH(e),a3,!0),e.lP(A.yG,"PDF",new C.eAI(e),a3,!0),e.lP(O.a2n,"Signature",new C.eAJ(e),a3,!0),e.iW(A3.Ci,"Quote",new C.eAK(e),a3),e.iW(D.a14,a1,new C.eAL(e),a3)],x.p),A.m,d,A.e,A.i,0,d,d)
case"Design":w=e.c
w.toString
w=B.aJ(w,A.bX,x.w).w
u=x.p
t=B.B(B.a([e.aOn("Wide 16:9",D.Dp,a3),e.aOn("Short 9:16",D.ox,a3),new B.D(A.fB,B.mR(D.bQw,d,D.fF_,d,new C.eAM(e),d,d,d,d),d)],u),A.m,d,A.e,A.i,0,d,d)
q=B.B(B.a([e.bID("This slide",!e.Q,a3,new C.eAN(e)),A.bm,e.aQz("All slides",e.Q,a3,new C.eAO(e),!0)],u),A.m,d,A.e,A.i,0,d,d)
p=e.bIE()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.bY:A.bM,d,d,d,d,d,d,d,d,10,d,d,A.a7,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.N(D.a4k,new C.eAQ(e),n),n.k("ak.E"))
n=B.cg(B.B(n,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aM)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.djE[v]
j=B.b1(k)
i=new B.ay(k===4294967295?A.dm:A.aZ,1.5,A.r,-1)
l.push(new B.D(A.fB,B.aB(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bK(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eAR(e,k),d,d,d,d,d,d,!1,A.a4),d))}l=B.cg(B.B(l,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aM)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bFG()
g=B.T(h).k("N<1,D>")
h=B.C(new B.N(h,new C.eAS(e,a3),g),g.k("ak.E"))
return new B.a6(w.a.a-20,d,B.x(B.a([t,A.O,q,A.am,p,A.O,o,A.au,n,A.O,m,A.au,l,A.O,j,A.au,B.cg(B.B(h,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aM),A.am,e.c1y(a3)],u),A.E,d,A.e,A.P,0,A.p),d)
case"Transitions":f=e.k5()
w=e.c
w.toString
w=B.aJ(w,A.bX,x.w).w
u=new C.eAq(e)
t=new C.eBb(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.Rt,f.dy,new C.eAT(e,u,f),A.b_)
A.d.v(p,B.a([o,A.au,n,A.O,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aB:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.au],q))}q=e.gdw()
q=q==null?d:q.r
p.push(t.$4(D.Rt,q,new C.eAU(e,u),A.bk))
return new B.a6(w.a.a-20,d,B.x(p,A.E,d,A.e,A.P,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.iW(A.lc,w,new C.eAV(e),a3),e.iW(A.ut,"Print deck",new C.eAW(e),a3),e.lP(D.an4,"Export JSON",new C.eAX(e),a3,!0),e.iW(A.fR,"Duplicate Slide",e.gaSM(),a3),e.iW(A.ea,a2,e.gaRU(),a3),e.cxK(a3)],x.p),A.m,d,A.e,A.i,0,d,d)
case"Home":default:f=e.k5()
w=x.p
u=B.a([e.iW(D.a14,a1,new C.eAY(e),a3),e.iW(A.fR,"Duplicate",e.gaSM(),a3),e.iW(A.ea,a2,e.gaRU(),a3),e.iW(A.qp,"Present",e.gaBr(),a3),e.iW(A.Ct,a0,e.gaNx(),a3),e.iW(A.Cm,"Fit Text",new C.eAZ(e),a3),e.iW(A.yG,"Download PDF",new C.eB0(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iW(A.kj,"Transfer",new C.eB1(e),a3))
if(f!=null){w=B.a([A.ac,e.iW(G.O4,"Bold",new C.eB2(e,f),a3),e.iW(G.a0X,"Italic",new C.eB3(e,f),a3),e.iW(G.amG,"Underline",new C.eB4(e,f),a3),e.iW(Af.O5,"Bullets",new C.eB5(e,f),a3),e.bRz(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bP5(a3))
w.push(e.iW(D.bKy,"Delete",e.gaRT(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.i,0,d,d)}},
aOn(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.ox
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.aac,t,t,t)],v)
if(w)A.d.v(u,B.a([A.dc,D.bPI],v))
return new B.D(A.fB,B.iO(t,t,t,B.B(u,A.m,t,A.e,A.P,0,t,t),t,new C.ewQ(this,w,e),s===e,A.bk.j(0.25),t,t,t),t)},
cxK(d){var w,v,u,t,s,r=this,q=null,p=r.gdw()
if(p==null)return A.bJ
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.J(d?A.aZ:A.cs,A.r,1)
u=B.m(8)
t=B.X(A.GG,d?A.aB:A.al,q,q,q,14)
s=B.aF(q,q,q,q,D.aq3,q,q,q,new C.eBy(r,p),q,q,q,q,q,A.cb)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bl,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aF(q,q,q,q,D.apV,q,q,q,new C.eBz(r,p),q,q,q,q,q,A.cb)],x.p),A.m,q,A.e,A.P,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.Gm,A.mJ,q,q,q)},
ctD(d){switch(d.a){case 6:return V.Hf
case 7:return A.H8
case 8:return M.GI
case 4:return A.Cw
default:return A.lc}},
bRz(d,e){var w=null,v=B.J(e?A.aZ:A.cs,A.r,1),u=B.m(8),t=B.aF(w,w,w,w,D.aq3,w,w,w,new C.exY(this,d),w,w,w,w,w,A.cb),s=A.k.N(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bl,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aF(w,w,w,w,D.apV,w,w,w,new C.exZ(this,d),w,w,w,w,w,A.cb)],x.p),A.m,w,A.e,A.P,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.w1,A.mJ,w,w,w)},
c1y(d){var w=null
return B.Cg(B.DL(B.X(A6.a17,d?A.ae:A.br,w,w,w,16),w,w,D.fKF,w,w,w),w,w,new C.eyv(),A.I,this.gbCS(),A.cj,"Slide layout",x.fO)},
lP(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bN,s=B.J(g?A.dq:A.aL,A.r,1),r=x.p,q=B.a([B.X(d,g?A.dt:A.bk,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.OX,A.f,w,w,D.EJ,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fB,B.aH(!1,A.a2,!0,w,B.aO(!1,v,!0,B.eJ(new B.D(A.h6,B.x(B.a([new B.an(A.a_,w,A.aa,A.f,q,w),A.cL,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aR:A.br,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.P,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w)},
iW(d,e,f,g){return this.lP(d,e,f,g,!1)},
b6O(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ag:A.aM
v=B.hO(t,new C.eBK(u,s,e,d),s.r.length,A.cj,t,w,new C.eBL(e),!1)
s=d?A.av:A.bN
w=B.a([],x.p)
if(e&&!u.kq())w.push(new B.D(A.cj,B.Ic(E.aqi,new C.eBM(u),B.nI(t,A.bk,t,t,t,t,t,t,t,t,t,t,E.aRa,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.x(w,A.m,t,A.e,A.i,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bGE(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.ox?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.Q(u,u,u,u),new B.bO(A.b4,v,v,new B.fE(w,B.aB(v,B.cy(new C.exe(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.exf(this),v,v,v,v,v,v,!1,A.a4),v),v),v)},
bGG(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kH(a9.w))===!0,b1=b0&&C.fKc(b3),b2=b0&&b3.b===D.lj&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.kq())v=!b0||a7.c3T(b3)
else v=!1
if(!a7.kq())u=!b0||a7.c3S(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.ce:A.bk
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.h8L(b3))o=a8
else if(p&&!a7.kq())o=a7.gcc5()
else o=a7.kq()?a8:new C.ex2(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c9:A.jB
i=w&&C.h8L(b3)&&a7.A2()?new C.ex3(a7,b3):a8
h=v&&b3.b===D.cU?new C.ex4(a7,b3):a8
g=u?new C.ex5(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.be
else e=q?A.c1:r
else e=A.L
e=B.J(e,A.r,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.c1.j(0.08)
else a0=b3.b===D.lj?A.L:a8
if(b1){a1=a7.kq()?"":"Tap to sign"
a1=B.at(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.c1.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.Q,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aJ(a1,A.bX,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.A2()
a3=b3.b===D.cU
a4=a3?a7.X7(b3):a8
a5=a3?a7.aui(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aJ(a6,A.bX,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.ex6(a7,b3):a8
a3=v&&a3?new C.ex7(a7,b3):a8
a6=C.b2t(q,a4,a1,b3,a5,a2,a3,new C.ex8(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ao(-4,B.aB(a8,B.p(a8,D.bSy,A.f,a8,a8,new B.o(r,a8,B.J(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.ex9(a7,b3,b4,b5),a8,a8,new C.exa(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kq()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aB(a8,B.p(a8,D.bTe,A.f,a8,a8,new B.o(A.dv,a8,B.J(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gc_6(),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kq()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aB(a8,B.p(a8,D.bUT,A.f,a8,a8,new B.o(A.c1,a8,B.J(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.exb(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cU)if(a7.w!==a9){e=a7.c
e.toString
e=B.aJ(e,A.bX,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.at(B.aB(a8,B.p(a8,D.fTP,A.f,a8,a8,new B.o(A.bk,a8,a8,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.I,8)],x.V),a8,A.n),a8,a8,a8,a8,A.l7,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.exc(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aB(j,B.eL(A.A,f,new B.an(A.a_,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a4),k*b5,new B.bG("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aQz(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bk.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.J(e?A.bk:A.bz,A.r,1)
if(e)t=A.bk
else t=f?A.aB:A.al
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.dc,B.p(r,D.OX,A.f,r,r,D.EJ,r,12,r,r,r,r,r,12)],s))
return B.aB(r,B.p(r,B.B(t,A.m,r,A.e,A.P,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h4,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
bID(d,e,f,g){return this.aQz(d,e,f,g,!1)},
cbQ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.S$=$.au()
v.P$=0}v=d.c
w.n(0,k,new B.as(new B.b9(v,A.b2,A.aO),$.au()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.av:A.aP
t=f?A.xo:l
if(f)s=new B.bK(new B.ay(e?A.bz:A.aL,1,A.r,-1),A.a0,A.a0,A.a0)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rV,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ae:A.br,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b1,m.b1T(e,new C.ez6(m))],q),A.m,l,A.e,A.i,0,l,l)
o=B.l(l,l,e?A.c:A.aJ,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.bY:A.bM,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.x(B.a([p,A.am,B.E(B.aL(l,A.Y,!1,l,!0,A.t,l,B.aM(),k,l,l,l,l,l,2,B.br(l,new B.b5(4,B.m(10),A.dk),l,A.bS,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.ez7(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a3,l,A.an,l,l,l,l),1)],q),A.ak,l,A.e,A.i,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aU3(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.k5()
if(a2==null)return A.bJ
w=new C.eyb(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.E(1-a2.c,0.06,1)
t=A.k.E(1-a2.d,0.06,1)
s=A.k.E(1-a2.e,0.01,1)
r=A.k.E(1-a2.f,0.01,1)
q=a5?A.dR:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b1,a0.b1T(a3,a0.gbN9())],p),A.m,a1,A.e,A.i,0,a1,a1))
if(n)o.push(A.W)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.fFv,B.E(B.kP(a1,a1,a1,u,0.05,new C.eyc(w,a2),A.k.E(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
o.push(B.B(B.a([D.fS9,B.E(B.kP(a1,a1,a1,t,0.05,new C.eyd(w,a2),A.k.E(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
n=a2.b
m=n===D.cU
if(m)o.push(B.B(B.a([D.fz1,B.E(B.kP(a1,a1,a1,96,10,new C.eye(w,a2),A.k.E(a2.w,10,96)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
l=n===D.lM
if(l||n===D.lj||n===D.SQ)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.fLr,B.E(B.kP(a1,a1,a1,s,0,new C.eyf(w,a2),A.k.E(a2.c,0,s)),1)],p),A.m,a1,A.e,A.i,0,a1,a1),B.B(B.a([D.fTw,B.E(B.kP(a1,a1,a1,r,0,new C.eyg(w,a2),A.k.E(a2.d,0,r)),1)],p),A.m,a1,A.e,A.i,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.CP[j]
i.a=null
g=h.a
i.a=g
k.push(B.iO(a1,a1,a1,new B.y(h.b,a1,A.pz,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.eyh(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bX(A.bC,k,A.bq,a1,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.CJ[j]
f.a=null
g=e.a
f.a=g
h.push(B.iO(a1,a1,a1,new B.y(e.b,a1,A.pz,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.eyi(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.O,l,A.am,k,A.O,i,A.am,B.bX(A.bC,h,A.bq,a1,6,6)],p))}o.push(A.O)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.N(v,new C.eyj(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.am,B.bX(A.bC,l,A.bq,a1,6,6),A.ad,B.hkZ(new C.eyk(w,a2),D.cwE,B.eD([a2.as],k),!0,a1,k)],p))}if(n===D.fa){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aB:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.N(v,new C.eyl(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bX(A.bC,m,A.bq,a1,0,6)],p))}o.push(A.ad)
o.push(B.dl(D.bUF,D.fNw,new C.eym(a0,a5),B.bo(A.bx,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cf(o,a1,a1,q,a1,A.ag,a5)
if(a5)return d
q=a3?A.cq:A.c
p=a4?A.xo:a1
if(a4)o=new B.bK(new B.ay(a3?A.bz:A.aL,1,A.r,-1),A.a0,A.a0,A.a0)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rV,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.G5,a1,a1,a1)},
bRQ(d){return this.aU3(d,!1,!1,null)},
caW(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.cd(p,new C.eyp(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.foj,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bd,B.E(B.x(B.a([w,A.bD,A.cL,r.bCc(D.d_I,d,B.P(v).ax.a===A.J)],u),A.E,q,A.e,A.i,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ac,B.dP(B.hc(B.aH(!1,A.a2,!0,q,B.aO(!1,q,!0,B.eJ(D.f6X,q,new B.o(q,q,B.J(A.c.j(0.55),A.r,1.3),q,B.a([new B.ac(0,A.G,A.c1.j(0.4),A.eq,8)],p),D.ara,A.a6),q,q,q),A.cM,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q,"Documents (Hati)",q,q),A.I)],u))
t=B.B(v,A.m,q,A.e,A.i,0,q,q)
w=r.c
w.toString
s=B.P(w).ax.a===A.J
w=B.m(20)
v=x.O
v=s?B.a([D.bc1,D.bcu],v):B.a([A.c,A.kB],v)
u=B.J(d.j(s?0.45:0.25),A.r,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cx,14)],p),new B.a9(A.ay,A.aE,A.x,v,q,q),A.n),q,q,q,q,A.bS,q,q,q)},
aNg(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.cd(w,new C.evZ(this,g,d,e,f),null)},
ah8(d,e){return this.cnE(d,e)},
cnE(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$ah8=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.au()
q=new B.as(new B.b9(e,A.b2,A.aO),r)
p=t.c
p.toString
w=3
return B.b(B.cj(null,null,!0,null,new C.eA3(d,q),p,null,!0,!0,x.N),$async$ah8)
case 3:s=g
q.S$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ah8,v)},
Qk(d){var w=d.bU()
return""+B.bM(w)+"/"+B.bW(w)+"/"+B.bC(w)}}
C.afF.prototype={}
C.aA_.prototype={
R(){return new C.bea(null,null)}}
C.bea.prototype={
gcA2(){var w,v=this.a.c,u=v.f.bU(),t=""+B.bM(u)+"/"+B.bW(u)+"/"+B.bC(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Z(){var w,v=this,u=null
v.a2()
w=B.bn(u,A.q9,u,1,u,v)
w.fm(0,!0)
v.d!==$&&B.aQ()
v.d=w
w=B.bn(u,D.bwz,u,1,u,v)
w.cq(0)
v.e!==$&&B.aQ()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.bvH()},
Jh(d){var w=0.12+d*0.09,v=A.k.E(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cu.av(0,new B.hW(w,v,A.cu).av(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.at(new B.D(D.bCb,B.cd(new B.h5(B.a([u,w],x.dS)),new C.d7i(this),v),v),v,v,v)}}
C.bep.prototype={
B(d){var w=null,v=B.m(22),u=B.J(A.aJ,A.r,1),t=x.p
return B.at(new B.D(D.bCs,B.aH(!1,A.a2,!0,w,B.p(w,B.bx(B.m(22),B.x(B.a([new B.D(D.bBD,B.x(B.a([B.p(w,D.bTk,A.f,w,w,new B.o(A.aw.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aN,D.fPI,A.W,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fpz,A.K,w,w)],t),A.m,w,A.e,A.i,0,A.p),w),A.dS,D.bvC,B.B(B.a([B.E(B.bN(!1,D.fDG,w,w,!0,w,w,w,new C.d7G(d),w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.bM,w,w,w,w,w,A.np,w,A.oB,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bo,w,w,w,48,w,w,w,w,w,1),B.E(B.bN(!1,D.fJ6,w,w,!0,w,w,w,new C.d7H(d),w,B.fu(w,w,w,w,w,w,w,w,w,w,w,A.aw,w,w,w,w,w,A.np,w,A.oB,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.i,0,w,w)],t),A.m,w,A.e,A.P,0,A.p),A.ap),A.f,w,A9.WN,new B.o(A.av,w,u,v,D.d05,w,A.n),w,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w),w,w,w)}}
C.Kf.prototype={
R(){return new C.be9()}}
C.be9.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.m(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.J(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dB,8)],t)
s=m.j(l?0.16:0.14)
r=B.m(9)
q=p.a
r=B.p(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dP(B.d9(B.aB(o,B.vF(B.dd(o,B.B(B.a([r,A.at,new B.ds(1,A.cn,B.d(q,o,2,A.a1,o,o,o,B.l(o,o,l?A.eP:A.c,o,o,o,o,o,o,o,o,13,o,o,A.Q,o,1.2,!0,o,o,o,o,o,o,o,o),A.K,o,o),o)],x.p),A.m,o,A.b8,A.P,0,o,o),o,o,A.b5,new B.o(n,o,u,v,t,o,A.n),A.eO,o,o,o,A.nq,o,o,1/0),A.cu,A.jf,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d7d(p,d),new C.d7e(p),new C.d7f(p),new C.d7g(p),o,o,o,!1,A.a4),k),new B.t(0,(1-k)*16))}}
C.Q7.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.J(A.c.j(0.5),A.r,1.2),p=x.p
return B.aH(!1,A.a2,!0,t,B.aO(!1,s,!0,new B.D(A.eT,B.B(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a9(A.ay,A.aE,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.es,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.n0,v,v,v),A.bD,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.E,v,A.e,A.i,0,A.p),1),B.X(A.eE,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.aj)}}
C.a07.prototype={
R(){return new C.aFw(D.dh,null,null)}}
C.aFw.prototype={
gZo(){var w,v=this,u=v.w
if(u===$){w=B.bn(null,D.bw8,null,1,null,v)
v.w!==$&&B.bI()
v.w=w
u=w}return u},
b7g(d){if(!this.a.c.ay)return
this.x=d
this.gZo().iO(0,0)},
Z(){var w,v=this
v.a2()
w=v.a
v.d=A.o.E(w.d,0,w.c.r.length-1)
C.awM(D.fdw)
C.icc()
v.RL()},
q(){var w=this,v=w.f
if(v!=null)v.a4(0)
w.gZo().q()
v=w.z
if(v!=null)v.a4(0)
C.awM(D.fdx)
C.icf()
w.bxG()},
cCO(){B.jJ()
this.m(new C.eCJ())
var w=this.c.K(x.q).f
w.a5n()
if($.blU)w.U(D.faf)},
RL(){var w,v=this,u=v.f
if(u!=null)u.a4(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cI(B.dD(0,0,0,0,0,A.o.E(C.hj9(u,w),1,120)),new C.eCz(v))},
cCt(){var w,v=this
v.m(new C.eCI(v))
if(v.r)v.RL()
else{w=v.f
if(w!=null)w.a4(0)}},
gaW_(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cwu(){var w=this,v=w.f
if(v!=null)v.a4(0)
w.m(new C.eCA(w))
v=w.z
if(v!=null)v.a4(0)
if(w.a.c.ch&&w.r)w.z=B.cI(A.lC,new C.eCB(w))},
ayi(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a4(0)
if(u.a.c.ch){u.m(new C.eCv(u))
u.RL()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaW_()){u.cwu()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.eCw(u,A.o.F(w+1,s)))
u.b7g(w)
u.RL()}},
cmh(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a4(0)
v.m(new C.eCx(v))
v.RL()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eCy(v,w,t))
v.b7g(w)
v.RL()}},
cy_(d){var w,v=this,u=v.e
if(u===D.cm){u=v.d
u===$&&B.c()
return new B.mA(d,new B.bG(u,x.ac))}w=v.cy0(u)
u=v.d
u===$&&B.c()
return B.oh(new B.mA(d,new B.bG(u,x.ac)),w,new C.eCG(),A.b5,A.b5,new C.eCH(v))},
cy0(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bwv
case 16:return A.iU
case 18:return A.mD
default:return A.mE}},
cxZ(d,e,f){var w,v,u,t=null,s=B.cJ(A.cu,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d0(s,!1,e,t)
case 2:case 17:w=x.K
return B.jk(e,new B.be(s,new B.bp(A.v0,A.I,w),w.k("be<bP.T>")),t,!0)
case 3:w=x.K
return B.jk(e,new B.be(s,new B.bp(A.T3,A.I,w),w.k("be<bP.T>")),t,!0)
case 4:case 21:w=x.K
return B.jk(e,new B.be(s,new B.bp(A.i7,A.I,w),w.k("be<bP.T>")),t,!0)
case 5:w=x.K
return B.jk(e,new B.be(s,new B.bp(A.rU,A.I,w),w.k("be<bP.T>")),t,!0)
case 6:case 16:w=x.b
return B.ir(A.A,new B.d0(s,!1,e,t),t,new B.be(s,new B.bp(0.82,1,w),w.k("be<bP.T>")))
case 7:w=x.b
return B.ir(A.A,new B.d0(s,!1,e,t),t,new B.be(s,new B.bp(1.18,1,w),w.k("be<bP.T>")))
case 8:return B.cd(s,new C.eCC(s),e)
case 9:return B.cd(s,new C.eCD(s),e)
case 10:return B.cd(s,new C.eCE(s),e)
case 11:return B.cd(s,new C.eCF(s),e)
case 12:w=x.b
return new B.d0(s,!1,B.ir(A.A,e,t,new B.be(s,new B.bp(1.03,1,w),w.k("be<bP.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jo(B.jk(e,new B.be(s,new B.bp(A.v0,A.I,v),v.k("be<bP.T>")),t,!0),A.t,new C.bt8(w,t))
case 15:w=x.K
return B.jk(e,new B.be(s,new B.bp(A.T3,A.I,w),w.k("be<bP.T>")),t,!0)
case 19:w=B.dr()
w.mP((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jV(v,u,v,1)
return B.fw(A.A,B.d9(e,s.gp(0)),t,w,!0)
case 20:return B.eL(A.A,(1-s.gp(0))*0.2,new B.d0(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jo(new C.ap6(B.cd(n.gZo(),new C.eCK(n,v,w),m),m),A.t,m)}else{t=B.rN(new C.Jb(w,!0,!1,m))
l=B.b1(w.e)
u=n.cy_(B.eb(B.jo(t,A.t,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.hj9(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oK,m,m,m),A.bm,D.bVL],k),A.m,m,A.e,A.P,0,m,m),A.f,m,m,new B.o(A.aS,m,m,l,m,m,A.n),m,m,m,m,A.h5,m,m,m)
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
l.push(B.bT(0,new C.NV(new C.EW(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.ox?0.5625:1.7777777777777777
l.push(B.at(new B.fE(r,B.jo(B.tu(A.af,u,!0,4,1,!0,!0,m),A.t,m),m),m,m,m))}if(!$.blU){r=B.Ic(A.kK,new C.eCL(d),B.nI(m,A.aS,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bl(!0,B.B(B.a([r,A.ac,B.Ic(B.X(n.r?Al.yT:A.i2,m,m,m,m,m),n.gcCs(),B.nI(m,A.aS,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.i,0,m,m),!0,!1,A.af,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ao(16,B.bl(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.fT,m,m,m),A.f,m,m,new B.o(A.aS,m,m,r,m,m,A.n),m,m,m,m,A.h5,m,m,m),!0,!1,A.af,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bl(!0,B.aB(A.c9,B.p(A.ls,$.blU?A.bJ:s,A.f,m,m,m,m,64,m,m,D.bxf,m,m,150),A.y,!1,m,n.gcCN(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a4),!0,!1,A.af,!0,!0),m,m,m,0,0,m))
return B.c7(m,A.w,B.aB(m,new B.an(A.a_,m,A.b0,A.t,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eCM(n,d),m,m,m,!1,A.a4),m,!1,!1,m,m)}}
C.Kl.prototype={
B(d){var w=null
return B.p(w,B.bl(!0,new B.D(E.akY,this.c,w),!0,!1,A.af,!0,!1),A.f,w,w,D.b4w,w,w,w,w,w,w,w,w)}}
C.bt8.prototype={
jl(d){return new B.a3(0,0,0+d.a*A.k.E(this.b,0,1),0+d.b)},
jZ(d){return d.b!==this.b}}
C.bj7.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.b1i
break A}w=B.m(6)
break A}v=s.e
u=B.J(v?A.aD:A.L,A.r,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.dd(r,B.at(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.wv,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b5,new B.o(s.f,r,u,w,r,r,A.n),A.hr,r,64,r,r,r,r,64)
return B.aB(r,new B.a6(78,r,B.x(B.a([w,A.am,B.d(s.d,r,1,A.a1,r,r,r,B.l(r,r,v?A.aD:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.i,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a4)}}
C.bj6.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dx_.h(0,p)
if(o==null)o=D.diM
p=p==="none"
w=p?q:new B.a9(A.a5,A.a8,A.x,o,q,q)
p=p?A.cY.j(0.25):q
v=r.e
u=v?B.J(A.aD,A.r,2.5):q
t=r.r.j(0.15)
s=v?K.apf:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.ev,q,q,52)
return B.aB(q,new B.a6(66,q,B.x(B.a([w,A.am,B.d(r.d,q,1,A.a1,q,q,q,B.l(q,q,v?A.aD:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.K,q,q)],x.p),A.m,q,A.e,A.i,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a4)}}
C.aLq.prototype={
aY(){this.b6()
this.b4()
this.dH()},
q(){var w=this,v=w.b5$
if(v!=null)v.a6(0,w.gdD())
w.b5$=null
w.a1()}}
C.aNj.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.byQ.prototype={}
C.aNk.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aY(){this.b6()
this.b4()
this.bF()}}
C.b2w.prototype={}
C.Wx.prototype={
R(){return new C.aFu()},
bhX(d){return this.e.$1(d)}}
C.aFu.prototype={
gb5y(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gab7(){var w,v
if(this.d==="all")return B.bq(this.a.d,!0,x.I)
w=this.gb5y()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaPd(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb5y()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb6N(){return A.d.cH(this.gab7(),0,new C.eCf())},
Z(){var w,v=this
v.a2()
w=v.a.d
if(w.length!==0)v.e=A.d.gI(w).a
v.Rn()},
Rn(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Rn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b37(s.c,s.f),$async$Rn)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eCb(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$Rn,v)},
Jj(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Jj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gab7()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.M)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fNr(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.pj(o,q.c,q.f),$async$Jj)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.dZ(new C.eCe(t,p),!1,null,x.H)
w=4
return B.b(B.a4(o,!1).cd(q),$async$Jj)
case 4:q=t.a
w=5
return B.b(B.pi(q.c,q.f),$async$Jj)
case 5:w=6
return B.b(t.Rn(),$async$Jj)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Jj,v)},
RJ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$RJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hF(o,D.e9e,!0,"NgmySlidesTransferScan",x.N),$async$RJ)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eCc(t))
w=4
return B.b(C.ahU(s),$async$RJ)
case 4:r=e
t.m(new C.eCd(t))
o=J.a5(r)
if(o.gan(r)){o=t.c
if(o==null){w=1
break}o.K(x.q).f.U(D.f94)
w=1
break}w=5
return B.b(t.a.bhX(r),$async$RJ)
case 5:q=t.c
if(q==null){w=1
break}B.a4(q,!1).O(null)
q=t.c.K(x.q).f
p=o.gL(r)
o=o.gL(r)===1?"":"s"
q.U(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$RJ,v)},
Ji(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Ji=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gab7()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.pj(s,r.c,r.f),$async$Ji)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fNG(null,A.d.gI(n),s,t.a.f)}else q=C.fNG(n,null,r.c,r.f)
if(n.length===1){s=A.d.gI(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aN(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.GS(q,"ngmy_slides_"+p,!1),$async$Ji)
case 4:o=e
s=t.a
w=5
return B.b(B.pi(s.c,s.f),$async$Ji)
case 5:w=6
return B.b(t.Rn(),$async$Ji)
case 6:s=t.c
if(s==null){w=1
break}s.K(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Ji,v)},
a3n(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a3n=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eCg(t))
w=3
return B.b(C.bE5(),$async$a3n)
case 3:s=e
t.m(new C.eCh(t))
if(s==null||J.ct(s)){w=1
break}w=4
return B.b(t.a.bhX(s),$async$a3n)
case 4:r=t.c
if(r==null){w=1
break}B.a4(r,!1).O(null)
r=t.c.K(x.q).f
q=J.a5(s)
p=q.gL(s)
q=q.gL(s)===1?"":"s"
r.U(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a3n,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.J,l=m?A.df:A.bN,k=o.gab7().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.c2(A.A,0.5,A.x,n,0,B.a([A.bk.j(0.22),A.L],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aF(n,n,n,n,B.X(A.cz,m?A.ae:A.al,n,n,n,n),n,n,n,new C.eCk(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),1),A.A6],h),A.m,n,A.e,A.i,0,n,n)
w=B.m(24)
v=B.a([new B.ac(0,A.G,A.bk.j(0.35),A.f2,24)],x.V)
u=B.ao(n,B.X(A.qj,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.B(B.a([B.p(n,D.bWi,A.f,n,n,new B.o(t,n,B.J(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.es,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.au,D.bGU],h),A.E,n,A.e,A.i,0,A.p),1)],h),A.m,n,A.e,A.i,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hc(B.aB(A.c9,D.f6Z,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gch_(),n,n,n,n,n,n,!1,A.a4),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.a_,n,A.aa,A.f,s,n),A.ap,n,n,new B.o(n,n,n,w,v,D.a2U,A.n),n,n,n,n,E.a_C,n,n,1/0),A.dS,o.ayj(m,"What to transfer"),A.ad,B.B(B.a([B.E(o.aYm(A.qp,m,new C.eCl(o),o.d==="one","Pick a single deck","One presentation"),1),A.at,B.E(o.aYm(D.bLK,m,new C.eCm(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.i,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d4,o.ayj(m,"Choose presentation"),A.W],h)
u=o.a.d
if(u.length===0){u=m?A.av:A.c
t=B.m(16)
s=B.J(m?A.bz:A.aL,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aB:A.al,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bQ,n,n,n))}else A.d.v(v,new B.N(u,new C.eCn(o,m),B.T(u).k("N<1,v>")))
A.d.v(w,v)}w.push(A.mY)
w.push(o.ayj(m,"Transfer options"))
w.push(A.ad)
w.push(B.B(B.a([B.E(o.aqZ(A.aQ,k,!0,A.jD,m,o.r,o.gcb_(),"Scan on another device","Show QR"),1),A.at,B.E(o.aNh(A.kc,!0,A.jj,m,o.gctb(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.i,0,n,n))
w.push(A.W)
w.push(B.B(B.a([B.E(o.bAH(A.aW,k,A.hN,m,o.r,o.gcaX(),"Download .json","Backup file"),1),A.at,B.E(o.aNh(A.aC,!0,Aw.z_,m,o.gcFc(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.i,0,n,n))
if(k){v=A.bk.j(m?0.12:0.08)
u=B.m(16)
t=B.J(A.bk.j(0.28),A.r,1)
s=B.X(A.lG,A.bk.j(0.9),n,n,n,18)
r=o.gaPd()
q=o.gb6N()
p=o.gb6N()===1?"":"s"
A.d.v(w,B.a([A.bu,B.p(n,B.B(B.a([s,A.at,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ae:A.br,n,n,n,n,n,n,n,n,12,n,n,A.a7,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bA,n,n,n)],h))}j=B.a([j,B.bl(!0,B.x(B.a([new B.D(Ah.NF,i,n),B.E(B.cf(w,n,D.bAL,n,n,A.ag,!1),1)],h),A.m,n,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0)],h)
if(o.f)j.push(B.p(n,T.X4,A.f,A.dD,n,n,n,n,n,n,n,n,n,n))
return B.c7(n,l,new B.an(A.a_,n,A.aa,A.t,j,n),n,!1,!1,n,n)},
agj(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.iiF(s,t.d,t.e),$async$agj)
case 2:return B.h(null,v)}})
return B.i($async$agj,v)},
ayj(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bk,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.ac,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aB:A.al,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,w,w)},
aYm(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.av:A.c
if(g)w=A.bk
else w=e?A.bz:A.aL
w=B.J(w,A.r,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bk.j(0.2),A.cx,14)],x.V):s
u=A.bk.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.X(d,A.bk,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cj,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aH(!1,A.a2,!0,s,B.aO(!1,r,!0,B.eJ(new B.D(A.bA,B.x(B.a([t,A.W,u,A.bD,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aB:A.al,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.E,s,A.e,A.i,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj)},
bLh(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.av:A.c,m=B.m(16)
if(p)w=A.bk
else w=e?A.bz:A.aL
w=B.J(w,A.r,p?2:1)
v=B.p(q,D.bWu,A.f,q,q,new B.o(q,q,q,B.m(12),q,new B.a9(A.a5,A.a8,A.x,B.a([A.bk,A.bk.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a1,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aB:A.al,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
u=p?A.ef:A.ru
if(p)r=A.bk
else r=e?A.aZ:A.dm
return new B.D(A.cv,B.aH(!1,A.a2,!0,q,B.aO(!1,o,!0,B.p(q,B.B(B.a([v,A.bd,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bA,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eCa(this,d),q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q)},
aqZ(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.av:A.c
if(f)w=d.j(0.45)
else w=h?A.bz:A.aL
w=B.J(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.rt,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.apP,A.f,s,s,D.b4i,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.d9(B.aH(!1,A.a2,!0,s,B.aO(!1,p,!0,B.eJ(new B.D(E.a_f,B.x(B.a([new B.an(A.a_,s,A.aa,A.f,u,s),A.ad,v,A.bD,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aB:A.al,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.E,s,A.e,A.i,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.aj),r)},
aNh(d,e,f,g,h,i,j){return this.aqZ(d,e,!1,f,g,!1,h,i,j)},
bAH(d,e,f,g,h,i,j,k){return this.aqZ(d,e,!1,f,g,h,i,j,k)}}
C.Wy.prototype={
R(){return new C.blT()}}
C.blT.prototype={
Z(){this.a2()
this.af5()},
af5(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$af5=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fNG(null,A.d.gI(m),k,r.a.f):C.fNG(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gI(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kH(A.d.gI(n).w))C.fNr(A.d.gI(r.a.d),D.dgA)
n=r.a
m=n.c
n=C.ifA(n.d)
w=7
return B.b(C.fNF(p,C.ifF(r.a.d),n,m,q),$async$af5)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.eCo(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.eCp(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$af5,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.J,h=i?A.df:A.bN,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cH(k.a.d,0,new C.eCq())
v=B.aF(j,j,j,j,B.X(A.eK,i?A.ae:A.al,j,j,j,18),j,j,j,new C.eCr(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),1),A.A6],u),A.m,j,A.e,A.i,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.de,A.K,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.x(B.a([r,A.O,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.Q,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a2U,A.n),j,j,j,j,E.a_C,j,j,1/0)
q=B.m(24)
s=B.J(A.aQ.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.UA,A.K,j,j))
else if(k.d==null)r.push(D.elp)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ac(0,A.G,A.aD.j(0.35),A.cx,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fE8,A.am,B.aB(j,B.p(j,B.B(B.a([D.bY0,A.at,B.d(m,j,j,j,j,j,j,D.fpZ,j,j,j)],u),A.m,j,A.e,A.P,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.c1V,A.n),j,j,j,j,A0.akJ,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eCs(k,d),j,j,j,j,j,j,!1,A.a4),A.O,D.fID,A.aA],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.J(A.bz,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.q_(j,j,!1,l,j,!0,!0,j,!1,D.brL),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cj,j,j,j))
A.d.v(r,p)}r.push(A.aA)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hn,A.K,j,j))
return B.c7(j,h,B.bl(!0,B.x(B.a([new B.D(Ah.NF,v,j),B.E(B.cg(B.x(B.a([t,A.aN,B.p(j,B.x(r,A.m,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.c3S,A.n),j,j,j,j,A.ua,j,j,1/0)],u),A.m,j,A.e,A.i,0,A.p),A.t,j,A.y,j,E.al2,j,j,A.ag),1)],u),A.m,j,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0),j,!1,!1,j,j)}}
C.aFr.prototype={
R(){return new C.aFs(new B.as(A.as,$.au()),B.k2(!0,null,!0,!0,null,null,!1))}}
C.aFs.prototype={
Z(){var w=this
w.a2()
w.e.aT(0,new C.evT(w))
$.aV.x1$.push(new C.evU(w))},
q(){var w=this.d
w.S$=$.au()
w.P$=0
this.e.q()
this.a1()},
b_Z(){var w,v=this.c
v.toString
w=C.yW(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a4(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aJ(a2,A.eN,x.w).w,i=B.m(28),h=B.J(A.bk.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bk.j(0.28),A.uY,36),D.adn],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.x(B.a([B.p(k,D.bTo,A.f,k,k,new B.o(d,k,B.J(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ad,D.fB9,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a7,k,1.35,!0,k,k,k,k,k,k,k,k),A.K,k,k)],a1),A.m,k,A.e,A.i,0,A.p),A.f,k,k,D.b4J,k,k,k,k,A.yl,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.at)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.gee()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.av:A.M
o=new B.aP(14,14)
if(q)n=A.bk
else n=r?A.bk.j(0.55):A.aJ
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ac(0,A.G,A.bk.j(0.28),A.I,12)],g):k
t.push(new B.bz(1,A.bb,B.dd(A.A,new B.y(p,k,D.fjj,k,k,k,k,k,k,k,k,k),k,k,A.b5,new B.o(s,k,new B.bK(m,m,m,m),new B.bg(o,o,o,o),n,k,A.n),A.hr,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(M.JN)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.i,0,k,k),B.bT(0,B.d9(B.aL(k,A.Y,!0,k,!0,A.t,k,B.aM(),w,k,k,k,k,k,2,D.c_P,A.y,!0,k,!0,k,!1,v,A.ai,k,k,B.a([new B.uA(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.BN(5,k),new C.bwo()],x.aS),k,k,A.aSm,k,5,k,1,k,k,!1,"\u2022",k,new C.evP(l),k,new C.evQ(l),k,!1,k,k,!1,k,!0,k,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a3,k,A.mm,k,k,k,k),0),0,0,0)],a1)
d=C.yW(w.a.a.toUpperCase())==null?k:l.gcb0()
return B.at(new B.D(new B.Q(24,24,24,24+j.f.d),B.aH(!1,A.a2,!0,k,new B.cU(Ae.Lg,B.p(k,B.bx(e,B.x(B.a([a0,new B.D(D.bBg,B.x(B.a([new B.an(A.a_,k,A.aa,A.t,g,k),A.W,D.fzt,A.bu,new B.a6(1/0,50,B.bE(D.fQC,k,d,B.bo(A.bk,A.bo,A.al,k,A.c,k,k,k,new B.b7(B.m(16),A.a0),k,k,k)),k),A.am,B.bN(!1,A.nM,k,k,!0,k,k,k,new C.evR(a2),k,B.fu(k,k,k,k,k,k,k,k,k,k,k,A.bM,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.i,0,A.p),k)],a1),A.m,k,A.e,A.P,0,A.p),A.ap),A.f,k,k,new B.o(A.df,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.L,0,k,k,k,k,k,A.aj),k),k,k,k)}}
C.bwo.prototype={
oK(d,e){var w=e.a.toUpperCase()
return e.cLG(B.hk(A.by,w.length),w)}}
C.as1.prototype={
R(){return new C.aFv(B.zz(A.MW,A.nS,A.uF))}}
C.aFv.prototype={
q(){this.d.q()
this.a1()},
b_Y(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iS(w,d)},
ab2(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ab2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fWz(s),$async$ab2)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.b_Y("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$ab2,v)},
caZ(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=C.ifD(w[u])
if(t!=null){this.b_Y(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aF(s,s,s,s,A.ws,s,s,s,t.gbPE(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eI(B.a([r,B.aF(s,s,s,s,B.X(q?A.ul:Am.Oz,s,s,s,s,s),s,s,s,new C.eCu(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.df,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fRQ,s,s,s,1,s,!0)
r=B.zy(t.d,A.bU,t.gcaY())
w=B.m(28)
w=B.at(B.p(s,s,A.f,s,s,new B.o(s,s,B.J(A.bk,A.r,3),w,B.a([new B.ac(2,A.G,A.bk.j(0.35),A.I,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.c7(p,A.w,new B.an(A.a_,s,A.b0,A.t,B.a([r,w,B.ao(32,B.p(s,D.fFg,A.f,s,s,new B.o(v,s,B.J(A.bk.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.jh,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bwC.prototype={
B(d){var w=null,v=B.m(24),u=B.J(A.aJ,A.r,1)
return B.aH(!1,A.a2,!0,w,B.p(w,B.x(B.a([B.p(w,I.apu,A.f,w,w,D.b4s,w,56,w,w,w,w,w,56),A.aN,D.fRv,A.am,new B.jS(this.c,new C.fdS(),w,w,x.cI),A.aN,new B.jS(this.d,new C.fdT(),w,w,x.cl),A.ad,D.fRt],x.p),A.m,w,A.e,A.P,0,A.p),A.f,w,Ae.Lg,new B.o(A.av,w,u,v,w,w,A.n),w,w,w,L.a_I,D.bBU,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)}}
C.a8i.prototype={
R(){return new C.blC(A.bF)},
gcZ(){return this.c}}
C.blC.prototype={
Z(){var w=this
w.a2()
if(w.a.d)return
w.a_C()
w.d=B.df(A.fA,new C.el_(w))},
q(){var w=this.d
if(w!=null)w.a4(0)
this.a1()},
a_C(){return this.cpw()},
cpw(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a_C=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.ekY(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bD(new B.V(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cjj(p.c),$async$a_C)
case 6:r=e
q.a=r==null?A.bF:r
case 4:if(t.c==null){w=1
break}t.m(new C.ekZ(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a_C,v)},
bRH(d){var w,v,u=d.a,t=A.o.ao(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.ao(u,6e7)%60
v=A.o.ao(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aS(A.o.u(w),2,"0")+"m "+A.a.aS(A.o.u(v),2,"0")+"s left"
return A.a.aS(A.o.u(w),2,"0")+":"+A.a.aS(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bJ
w=s.e.a
v=A.o.ao(w,6e7)<30&&A.o.ao(w,36e8)<999?A.aw:A.c1
w=v.j(0.14)
u=B.m(14)
t=B.J(v.j(0.55),A.r,1)
return B.p(r,B.B(B.a([B.X(A.GG,v,r,r,r,20),A.at,B.E(B.d("Marriage document session \xb7 "+s.bRH(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.i,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,A8.ajN,A.iB,r,r,1/0)}}
C.a9c.prototype={
nn(){var w,v,u,t=this
t.xt()
w=t.cx
v=t.c
w.bse(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.q6(B.G(["/S",D.epb,"/URI",new B.rI(B.X6(w.as),A.v1,!0)],x.N,u),u))}}
C.a9d.prototype={
a5(){return"PdfAnnotFlags."+this.b}}
C.b4a.prototype={
bzJ(d,e,f,g,h,i,j,k,l,m){var w=B.eD([D.enu],x.di)
this.w!==$&&B.aQ()
this.w=w},
gcP3(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.k1(w,new C.cmn(),B.a7(w).k("k1<cs.E,H>")).fb(0,new C.cmo())},
aDO(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.hh(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tI(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jh(d.a,d.b))
s.n(0,"/Border",B.tI(I.ary))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h3(t.gcP3()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.q6(w,x.Y))}}
C.cmp.prototype={}
C.a3s.prototype={}
C.aiM.prototype={}
C.aSq.prototype={
h1(d){var w,v,u,t,s,r,q=this,p=null
q.lr(d)
q.Ml(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bhj(w)
u=x.N
t=x.Y
s=new C.cmp(q.d.a,"/Link",w,p,p,p,p,p,B.U(u,t))
s.bzJ(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.q6(B.G(["/Type",D.ep9],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a9c(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.M(0,r)
v.dx.push(r)}}
C.axK.prototype={}
C.aTX.prototype={
h1(d){var w,v,u,t,s=this
s.lr(d)
w=s.b
if(w!=null){v=B.dr()
u=s.a
v.ef(u.a,u.b,0,1)
u=d.b
u.ih()
t=s.a
t.toString
u.Ls(t)
u.SZ(0)
u.p9(0,v)
w.h1(d)
u.nq(0)}}}
var z=a.updateTypes(["aA<~>()","~(lR)","R(i4)","~()","R(eO)","R(ow)","R(lR)","~(i4)","R(eO,eO)","Kl(Y)","R(nT)","R(lm)","aA<R>()","H(H,i4)","a8<n,@>(i4)","ai<zS>()","n(nT)","R(a8z)","n(lR)","n(wc)","R(F4)","H(i4,i4)","n(eO)","v(eO)","cN(eO)","v(hG)","~(hG)","eO(uX,K,K,K,K,H{fx:n,key:n,rotation:K})","eO(n,K,H)","H(ow,ow)","R(zS)","R(n,ai<zS>)","a8<n,@>(ow)","nT()","Zc(Y)","eO(n,K,K,K,K,K{align:qc,anim:hG,bullets:R,color:H?,delay:H,fx:n,key:n,style:I7,weight:nG})","a1w(Y)","eO(n,K,K,K,K{anim:hG,delay:H,fx:n,key:n})","aA<~>(ow)","R(mD)","Za(Y)","a11(Y)","a10(Y)","PY(Y)","a_n(Y)","eO(uX,K,K,K,K,H,n,n{anim:hG,delay:H,rotation:K,stroke:H,strokeWidth:K})","eO(n,K,K,K,K,K,n,n,H)","eO(K,K,n,H{size:K})","v(rw,K,K)","lm()","ow(a8<@,@>)","~(uN)","F4()","fh(eO)","v(j2)","ZV(Y)","~(EW)","a_f(Y)","H(eO,eO)","eO(eO)","a8<n,@>(eO)","eO(a8<@,@>)","lR(lR)","a8<n,@>(lR)","lR(a8<@,@>)","R(jO)","jO()","n(i4)","~(ai<ow>)","V(ai<i4>)","V(i4)","ai<i4>(n?)","adb(Y,H)","~(R(eO,eO))","adQ(Y)","afv(Y,H)","u(lR,R)","Wl(Y)","adT(Y)","Wm(Y)","~(mH)","i4(i4)","K(eO)","a0v(Y)","a07(Y)","i4()","ai<Fr>()","aA<~>(ai<i4>)","v(bA<H,i4>)","D(jO)","D(F4)","aA<~>(hG,~())","v(ai<hG>,hG?,~(hG),u)","R(mf)","ai<jv<mH>>(Y)","jv<mH>(mH)","i4(a8<@,@>)","Wx(Y)","eO(n,K,K,K,K,K,H{align:qc,style:I7,weight:nG})","Wy(Y)","v(i4)","~(m9)","Jb(Y,lR,v?)","H(a9d)","aA<ai<a8<n,@>>?>()","n(n)","aA<zR>({paper:n?,photo:dK?,request:n,template!lp})","aA<a8r>({doc!zR,history:ai<+(n,n)>,instruction!n,photo:dK?,template!lp})","adN(Y)"])
C.cLb.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:67}
C.cLc.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:75}
C.cLd.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gakQ(s):16;--w.c}w.b=A.o.dV(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mu(v,t)
w.b=v-A.o.dV(q,t)
w.a=t
return q},
$S:75}
C.cLe.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bSi.prototype={
$1(d){return J.eH(A.dJ.gaR(d),d.byteOffset,d.byteLength)},
$S:1690}
C.fA5.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iL(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iL(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iL(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iL(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1691}
C.c2c.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:31}
C.c2d.prototype={
$2(d,e){var w,v=J.r(e,"savedAt")
v=J.k(v==null?"":v)
w=J.r(d,"savedAt")
return A.a.aK(v,J.k(w==null?"":w))},
$S:41}
C.c2f.prototype={
$1(d){var w=J.r(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fQC.prototype={
$1(d){return new C.a1w(this.a,this.b,C.igv(),null)},
$S:z+36}
C.fck.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.fco.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.fcp.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fcq.prototype={
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
C.fcl.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fcm.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.fcn.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.fcf.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hm,w,w,w)
return B.en(B.a([B.bN(!1,E.aUs,w,w,!0,w,w,w,new C.fcd(d),w,w),B.bN(!1,D.fCG,w,w,!0,w,w,w,new C.fce(d),w,w)],x.p),w,w,D.Z4,v,w,w,w,w,D.fS8,w)},
$S:18}
C.fcd.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.fce.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.fcg.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fch.prototype={
$0(){return this.a.r=!1},
$S:0}
C.fcu.prototype={
$0(){var w=this.a
return w.m(new C.fct(w,this.b))},
$S:0}
C.fct.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.fcj.prototype={
$0(){var w=this.a
return w.m(new C.fci(w,this.b,this.c))},
$S:0}
C.fci.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.M(0,v)},
$S:0}
C.fcr.prototype={
$0(){return this.a.a1L(this.b)},
$S:0}
C.fcs.prototype={
$0(){return this.a.Pu(0,this.b)},
$S:0}
C.fcx.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.fcy.prototype={
$0(){var w=this.a
return w.m(new C.fcw(w,this.b))},
$S:0}
C.fcw.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a7(0)
else{w=w.a.c
v.v(0,new B.N(w,new C.fcv(),B.T(w).k("N<1,n>")))}},
$S:0}
C.fcv.prototype={
$1(d){return d.a},
$S:z+67}
C.fjU.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.hgl(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cA)
t=t.h(0,"updatedAt")
u=B.bj(J.k(t==null?"":t))
return new C.ow(s,v,u==null?new B.V(Date.now(),0,!1):u)},
$S:z+50}
C.fjV.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fCX.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.M)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbp())q=n===o.gbp()&&p.b>o.gcD()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fCV.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fCW.prototype={
$2(d,e){return e.c.aK(0,d.c)},
$S:z+29}
C.fQ6.prototype={
$1(d){return d.ag()},
$S:z+32}
C.fzK.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fQY.prototype={
$1(d){return new C.Zc(this.a,null)},
$S:z+34}
C.cMy.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cMA.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cMD.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cME.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cMC())},
$S:12}
C.cMC.prototype={
$0(){},
$S:0}
C.cMF.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a2t(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cE(s)
p=q.bg(s,new C.cMB(r))
if(p<0)q.c3(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.ai2(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:303}
C.cMB.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cMG.prototype={
$1(d){},
$S:33}
C.cMz.prototype={
$1(d){return new C.Za(this.b,this.a.gczo(),null)},
$S:z+40}
C.cMH.prototype={
$1(d){return D.hhn},
$S:z+43}
C.cMu.prototype={
$1(d){var w=null,v=B.m(24),u=B.J(D.YG,A.r,1),t=x.p
return B.at(B.aH(!1,A.a2,!0,w,B.p(w,B.x(B.a([new B.D(D.bBG,B.x(B.a([B.p(w,D.bQx,A.f,w,w,new B.o(A.aw.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aN,D.fBA,A.W,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.foU,A.K,w,w)],t),A.m,w,A.e,A.i,0,A.p),w),A.dS,new B.D(A.qd,B.B(B.a([B.E(B.dI(D.fIF,new C.cMs(d),B.di(w,w,w,w,w,w,w,w,w,E.ng,w,w,A.cl,w,new B.b7(B.m(14),A.a0),D.b1J,w,w,w,w)),1),A.at,B.E(B.bE(D.fOQ,w,new C.cMt(d),B.bo(A.bx,w,w,w,w,w,A.cl,w,new B.b7(B.m(14),A.a0),w,w,w)),1)],t),A.m,w,A.e,A.i,0,w,w),w)],t),A.m,w,A.e,A.P,0,A.p),A.f,w,A.xr,new B.o(D.af8,w,u,v,D.d4O,w,A.n),w,w,w,L.a_I,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj),w,w,w)},
$S:1692}
C.cMs.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.cMt.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.cMv.prototype={
$0(){return J.nA(this.a.d,new C.cMr(this.b))},
$S:0}
C.cMr.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cMq.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.J(D.YG,A.r,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bVD,A.f,t,t,new B.o(t,t,t,B.m(14),t,D.ar5,A.n),t,44,t,t,t,t,t,44),A.bd,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a1,t,t,t,D.aU7,t,t,t),A.bD,D.fOL],q),A.E,t,A.e,A.i,0,A.p),1)],q),A.m,t,A.e,A.i,0,t,t),A.aA],q)
for(w=0;w<2;++w){v={}
u=D.ds2[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.ayG(u[1],u[2],u[3],new C.cMo(v,d),!1,t))}q.push(A.am)
q.push(D.bvF)
q.push(A.am)
q.push(new C.ayG(A.ea,"Delete book","Remove it from this device",new C.cMp(d),!0,t))
return B.bl(!0,B.p(t,B.x(q,A.E,t,A.e,A.P,0,A.p),A.f,t,t,new B.o(D.af8,t,r,s,t,t,A.n),t,t,t,A.u5,E.a_l,t,t,t),!0,!1,A.af,!0,!0)},
$S:27}
C.cMo.prototype={
$0(){var w=this.a.a
B.a4(this.b,!1).O(w)
return null},
$S:0}
C.cMp.prototype={
$0(){B.a4(this.a,!1).O("delete")
return null},
$S:0}
C.cMx.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aJH,12)],x.V)
return B.dP(B.eL(A.A,e,B.p(w,B.bx(B.m(4),new B.a6(62,95.81818181818181,B.eN(A.A,F.aoT(d),A.f,A.dw),w),A.ap),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.t(f,0))},
$S:z+48}
C.cMw.prototype={
$0(){return this.a.c5v()},
$S:0}
C.cMn.prototype={
$0(){return this.a.aZv(0,this.b)},
$S:0}
C.cMm.prototype={
$0(){return this.a.Dq(this.b)},
$S:0}
C.cMl.prototype={
$0(){return this.a.Dq(this.b)},
$S:0}
C.cMI.prototype={
$2(d,e){var w=this.a
return w.bEf(J.r(w.d,e))},
$S:42}
C.cLP.prototype={
$0(){var w=this.a
if(w.c!=null)w.AV()},
$S:0}
C.cLO.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b1x("Page "+(v.length+1),"",""))},
$S:0}
C.cLR.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cLZ.prototype={
$0(){},
$S:0}
C.cM_.prototype={
$1(d){var w=this.a,v=w.a,u=$.au()
v.S$=u
v.P$=0
w=w.b
w.S$=u
w.P$=0
return null},
$S:9}
C.cLS.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cI.gcp().aL(this.c)},
$S:0}
C.cLQ.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cLU.prototype={
$0(){return this.a.QU(this.b)},
$S:0}
C.cLV.prototype={
$0(){return this.a.QU(this.b)},
$S:0}
C.cLW.prototype={
$0(){var w=this.a
w.m(new C.cLT(this.b))
w.Eh()},
$S:0}
C.cLT.prototype={
$0(){return this.a.c=""},
$S:0}
C.cLY.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cLX(w,d))
w.Eh()},
$S:z+51}
C.cLX.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cM4.prototype={
$2(d,e){if(d)this.a.AV()},
$S:124}
C.cM0.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.AV(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.K(x.q).f.U(D.fbE)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cM1.prototype={
$0(){return this.a.aYt(this.b,-1)},
$S:0}
C.cM2.prototype={
$0(){return this.a.aYt(this.b,1)},
$S:0}
C.cM3.prototype={
$0(){return this.a.c6R(0,this.b)},
$S:0}
C.fHu.prototype={
$1(d){return C.hqo()},
$S:44}
C.fHv.prototype={
$1(d){return null},
$S:33}
C.fo9.prototype={
$1(d){return null},
$S:33}
C.fIt.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:322}
C.fIs.prototype={
$2(d,e){return A.o.aK(e.length,d.length)},
$S:227}
C.fIz.prototype={
$1(d){var w=this.a
return C.h8C(d)===w||C.hv0(d)===w},
$S:z+4}
C.fnc.prototype={
$1(d){return A.a.aS(A.o.u(d),2,"0")},
$S:72}
C.cdv.prototype={
$1(d){return d.length!==0},
$S:3}
C.fHs.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fHt.prototype={
$1(d){return C.fKc(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fCi.prototype={
$1(d){var w=null
return B.bl(!0,new B.D(E.yk,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.fJg,A.O,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dl(D.Hn,D.fDi,new C.fCg(d),B.bo(A.c1,w,w,w,A.w,w,A.cl,w,w,w,w,w)),A.W,B.et(A.uA,D.fKz,new C.fCh(d),B.di(w,w,w,w,w,w,w,w,w,A.ae,w,w,A.cl,w,w,Q.xp,w,w,w,w))],x.p),A.ak,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:27}
C.fCg.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.fCh.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.fCj.prototype={
$1(d){var w=null
return B.en(B.a([B.bN(!1,D.fzj,w,w,!0,w,w,w,new C.fCe(d),w,w),B.bE(D.fR9,w,new C.fCf(d),w)],x.p),w,w,w,D.fT7,w,w,w,w,D.fzc,w)},
$S:18}
C.fCe.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.fCf.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.egG.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.egE.prototype={
$0(){return this.a.e=!0},
$S:0}
C.egF.prototype={
$0(){return this.a.f=!0},
$S:0}
C.egH.prototype={
$0(){return this.a.r=!1},
$S:0}
C.egI.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fIy.prototype={
$1(d){return A.a.aS(A.o.u(d),2,"0")},
$S:72}
C.fIu.prototype={
$2$h$w(d,e){var w=null
return new B.bO(A.a5,w,w,B.BA(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1693}
C.fIw.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.fqd,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:138}
C.fIx.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.J(A.ii,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dP(B.p(w,w,A.f,w,w,new B.o(w,w,B.J(A.ii,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.t(-d*0.38,0))],x.p),A.m,w,A.b8,A.i,0,w,w)},
$0(){return this.$1$size(18)},
$S:1694}
C.fIv.prototype={
$2$female$size(d,e){var w=null,v=d?D.aha:this.a,u=B.J(A.ii,A.r,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.t,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.afn,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1695}
C.fUq.prototype={
$1(d){return new C.adN(this.a,this.b,null)},
$S:z+108}
C.e3f.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bsi:A.Mp,q=B.J(D.jv.j(0.25),A.r,1),p=B.at(B.p(t,t,A.f,t,t,new B.o(A.c1.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.apO,A.f,t,t,new B.o(t,t,B.J(A.c.j(0.5),A.r,1.2),o,B.a([new B.ac(0,A.G,D.jv.j(0.35),A.eq,10)],x.V),D.c4u,A.n),t,t,t,t,A.yb,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.x(B.a([new B.D(H.a_y,B.x(B.a([p,A.aA,B.B(B.a([o,A.bd,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.jv,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bD,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fpo,t,t,t)],u),A.E,t,A.e,A.i,0,A.p),1)],u),A.m,t,A.e,A.i,0,t,t)],u),A.m,t,A.e,A.i,0,A.p),t),B.E(B.iy(!0,t,e,A.y,D.aRq,new C.e3e(w,this.c),v,D.akD,t,A.ag,!1),1)],u),A.m,t,A.e,A.i,0,A.p),A.f,t,t,new B.o(r,t,q,A.mr,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:119}
C.e3e.prototype={
$2(d,e){var w=this.a.d[e]
return new C.adb(w,new C.e3d(this.b,w),null)},
$S:z+72}
C.e3d.prototype={
$0(){B.a4(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fCm.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fCn.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.yk,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.fMP,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dl(D.Hn,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fCk(d),B.bo(D.jv,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.W,B.et(A.op,D.Vd,new C.fCl(d),B.di(w,w,w,w,w,w,w,w,w,A.ae,w,w,A.cl,w,w,Q.xp,w,w,w,w))],x.p),A.ak,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:27}
C.fCk.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.fCl.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.fCq.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fCr.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.yk,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.fAm,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dl(D.Hn,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fCo(d),B.bo(D.jv,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.W,B.et(A.op,D.Vd,new C.fCp(d),B.di(w,w,w,w,w,w,w,w,w,A.ae,w,w,A.cl,w,w,Q.xp,w,w,w,w))],x.p),A.ak,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:27}
C.fCo.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.fCp.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.fCu.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fCv.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.yk,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.fH3,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dl(D.Hn,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fCs(d),B.bo(D.jv,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.W,B.et(A.op,D.Vd,new C.fCt(d),B.di(w,w,w,w,w,w,w,w,w,A.ae,w,w,A.cl,w,w,Q.xp,w,w,w,w))],x.p),A.ak,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:27}
C.fCs.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.fCt.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.fVT.prototype={
$1(d){return D.hmj},
$S:z+74}
C.el2.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bj4:A.Mp,s=B.J(A.az.j(0.25),A.r,1),r=B.at(B.p(v,v,A.f,v,v,new B.o(A.az.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bXY,A.f,v,v,new B.o(v,v,B.J(A.c.j(0.5),A.r,1.2),q,B.a([new B.ac(0,A.G,A.c1.j(0.35),A.eq,10)],x.V),D.ara,A.n),v,v,v,v,A.yb,v,v,v)
w=x.p
return B.p(v,B.x(B.a([new B.D(H.a_y,B.x(B.a([r,A.aA,B.B(B.a([q,A.bd,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:A_.Ml,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bD,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.fmP,v,v,v)],w),A.E,v,A.e,A.i,0,A.p),1)],w),A.m,v,A.e,A.i,0,v,v)],w),A.m,v,A.e,A.i,0,A.p),v),B.E(B.iy(!0,v,e,A.y,D.aRq,new C.el1(this.b),19,D.akD,v,A.ag,!1),1)],w),A.m,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(t,v,s,A.mr,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:119}
C.el1.prototype={
$2(d,e){var w=D.RJ[e]
return new C.afv(w,new C.el0(this.a,w),null)},
$S:z+75}
C.el0.prototype={
$0(){B.a4(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fKg.prototype={
$0(){return B.h7z(C.i3N(this.a))},
$S:320}
C.fKf.prototype={
$0(){var w=C.h8V(this.a)
return"data:image/png;base64,"+A.cI.gcp().aL(w)},
$S:22}
C.flu.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.ji(d,e),new B.ji(w,e+v),new B.ji(d+f*14,e),new B.ji(w,e-v)],x.J)
B.a2q(this.a,C.fD(4291404327),v)},
$S:682}
C.fW3.prototype={
$1(d){return new C.Wl(this.a,null)},
$S:z+77}
C.eo_.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.enZ())},
$S:28}
C.enZ.prototype={
$0(){},
$S:0}
C.eo0.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.enY(w,d))},
$S:1697}
C.enY.prototype={
$0(){return this.a.x=J.eR(A.dJ.gaR(this.b))},
$S:0}
C.eo1.prototype={
$1(d){},
$S:33}
C.enC.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eny.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.enJ.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.enK.prototype={
$0(){var w=this.a
A.d.a7(w.ay)
w.z=this.b
w=w.ax
A.d.a7(w)
w.push(D.ezT)},
$S:0}
C.enL.prototype={
$0(){return this.a.as=!1},
$S:0}
C.enE.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bK(0,A.c5)},
$S:0}
C.enF.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.enG.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.w(this.b)))},
$S:0}
C.enH.prototype={
$0(){return this.a.as=!1},
$S:0}
C.enI.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd2(v).Q
v.toString
w.mf(v,A.dV,A.iz)}},
$S:9}
C.enD.prototype={
$0(){var w=this.a,v=w.z,u=C.fKU(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cKN(C.fKU(t))},
$S:0}
C.enA.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.enB.prototype={
$0(){return this.a.as=!1},
$S:0}
C.enR.prototype={
$0(){return B.a4(this.a,!1).ie()},
$S:0}
C.enS.prototype={
$0(){var w=this.a
return w.m(new C.enQ(w))},
$S:0}
C.enQ.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.enT.prototype={
$0(){var w=this.a
return w.m(new C.enP(w,this.b))},
$S:0}
C.enP.prototype={
$0(){var w=this.b.b
this.a.e.saX(0,w)
return w},
$S:0}
C.enU.prototype={
$1(d){var w=this.a
return w.m(new C.enO(w))},
$S:8}
C.enO.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.enV.prototype={
$1(d){var w=this.a
return w.m(new C.enN(w))},
$S:8}
C.enN.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.enW.prototype={
$0(){var w=this.a
return w.m(new C.enM(w,this.b))},
$S:0}
C.enM.prototype={
$0(){var w=this.b
this.a.f.saX(0,w)
return w},
$S:0}
C.enX.prototype={
$1(d){return this.a.a_o()},
$S:2}
C.enz.prototype={
$0(){return this.a.cag(this.b)},
$S:0}
C.cha.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cP(w.h(0,d))):null},
$S:278}
C.ch8.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.ch9.prototype={
$1(d){return d.length!==0},
$S:3}
C.fJR.prototype={
bmA(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bSh(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.M)(e),++t){s=e[t]
r.cH8($.r6().jf(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mL(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bmA(d,e)},
$S:1698}
C.fI8.prototype={
$1(d){return d.length!==0},
$S:3}
C.fIa.prototype={
$1(d){var w=this.a.a
w=A.d.aH(A.d.ds(this.b,w,w+d)," ")
w=B.aN(w," \n\n ","\n\n")
w=B.aN(w," \n\n","\n\n")
return B.aN(w,"\n\n ","\n\n")},
$S:72}
C.fI9.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.fv(t,t,t,t,B.cS(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qM,A.bZ,t,A.dA,A.bW)
v=this.a
w.nZ(v.b)
u=w.b.a.c
return u.gbb(u)<=v.a},
$S:32}
C.fl3.prototype={
$1(d){var w=A.a.fD(d,B.af("\\s+",!0,!1,!1,!1))
return new B.Z(w,new C.fl4(),B.T(w).k("Z<1>")).gL(0)},
$S:267}
C.fl4.prototype={
$1(d){return d.length!==0},
$S:3}
C.fl1.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:207}
C.fl2.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:207}
C.chb.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaB5()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b1(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,w-(f===t?r:0)))
o=C.h8B(i,new B.F(!0,h,a6,k,a6,a6,q,A.cP,A.bp,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.h5p(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aH(n.gciE(),"\n\n")
d=B.fv(a6,a6,a6,a6,B.cS(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.aeV(k,q,1.28),j),A.qM,A.bZ,a6,A.dA,A.bW)
d.nZ(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbb(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b1(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.h8B(i,new B.F(!0,h,a6,k,a6,a6,q,A.cP,A.bp,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.h5p(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.aeV(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b1(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bz(1,A.bb,new B.y(o.length>a4?o[a4]:"",a6,a3,a6,A.qM,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aB4(s,j))
i.push(new B.a6(s,a6,B.x(h,A.E,a6,A.e,A.i,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.E,a6,A.e,A.i,0,a6,a6)},
$S:441}
C.chc.prototype={
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
n=o.gaB5()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b1(j.w)
d=B.a([new B.z(u,q),new B.z(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.z(r,p-(a0===s?m:0)))
l=C.h8B(f,new B.F(!0,e,a5,i,a5,a5,h,A.cP,A.bp,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.h5p(g.length===0?B.a([a6],n):g,l))break}a1=o.aeV(i,h,1.28)
a2=new C.chd(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.JM,new B.a6(v,a5,a4.f,a5),A.JM,a2.$2(l[1],u)],n),A.E,a5,A.e,A.i,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bE3,B.p(a5,a5,A.f,B.b1(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bz(1,A.bb,new B.y(l[2+a3],a5,a1,a5,A.qM,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aB4(r,g))
f.push(new B.a6(r,a5,B.x(e,A.E,a5,A.e,A.i,0,A.p),a5))
A.d.v(k,f)}return B.x(B.a([new B.a6(a5,q,v,a5),A.ad,B.E(B.B(k,A.E,a5,A.e,A.i,0,a5,a5),1)],n),A.m,a5,A.e,A.i,0,A.p)},
$S:145}
C.chd.prototype={
$2(d,e){var w=null
return new B.a6(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qM,w,w),w)},
$S:1699}
C.fW6.prototype={
$1(d){return new C.Wm(this.a,this.b,null)},
$S:z+79}
C.eox.prototype={
$1(d){return d.lL()},
$S:1700}
C.eoy.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eow(w,d))},
$S:1701}
C.eow.prototype={
$0(){var w=this.b
return this.a.d=w.gfA(w)},
$S:0}
C.eok.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eol.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eor.prototype={
$0(){return B.a4(this.a,!1).eN()},
$S:0}
C.eos.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.J(A.bB,A.r,2.5)
return B.aB(w,B.p(w,B.b4(w,w,w,new C.bdn(u,v.gayb(),w),A.fF),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eop(v),new C.eoq(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a4)},
$S:37}
C.eop.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:256}
C.eoq.prototype={
$1(d){var w=this.a
w.m(new C.eom(w,d,this.b,this.c))},
$S:236}
C.eom.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.E(s.x*r.d,1,6)
w=s.gayb()
r=r.a
v=t.c
u=t.d
s.r=A.k.E(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.E(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.eot.prototype={
$1(d){var w=this.a
return w.m(new C.eoo(w,this.b))},
$S:8}
C.eoo.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eou.prototype={
$1(d){var w=this.a
return w.m(new C.eon(w,d))},
$S:6}
C.eon.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eov.prototype={
$0(){return B.a4(this.b,!1).O(this.a.a.c)},
$S:0}
C.fWm.prototype={
$1(d){return D.hp6},
$S:z+83}
C.eYy.prototype={
$1(d){return this.a.Z1()},
$S:9}
C.eXq.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cI.gcp().aL(v)},
$S:0}
C.eXO.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eXY.prototype={
$1(d){return d>=this.a.length},
$S:32}
C.eX9.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eXa.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eX7.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eX8.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eXH.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eXI(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jo(B.rN(p>0.2?F.bVJ(q,B.TR(p,p,A.x)):q),A.t,u)],x.p)
w=s.bj
if(w>0.02){v=B.TR(12,12,A.x)
p.push(B.jo(B.d9(B.rN(F.bVJ(r.$1(!0),v)),w*0.75),A.t,u))}r=s.b1
if(r!=null&&s.b0>0)p.push(B.eb(u,B.b1(r).j(s.b0),!0))
r=s.be
if(r!=null&&s.bM>0){r=B.b1(r).j(s.bM)
w=s.be
w.toString
p.push(B.c4(u,new B.o(u,u,u,u,u,new B.c2(D.b_o,1.15,A.x,u,0,B.a([r,B.b1(w).j(0)],x.O),u,u),A.n),A.bg))}r=s.aE
if(r>0)p.push(B.c4(u,new B.o(u,u,u,u,u,new B.c2(D.b_9,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bg))
r=s.aN
if(r>0)p.push(B.c4(u,new B.o(u,u,u,u,u,new B.a9(A.b4,A.b7,A.x,B.a([A.w.j(r),A.L,A.L,A.w.j(s.aN)],x.O),D.d3q,u),A.n),A.bg))
if(s.aC>0){r=s.k1
p.push(B.ao(u,B.c4(u,new B.o(u,u,u,u,u,new B.a9(A.b4,A.b7,A.x,B.a([A.w.j(0),A.w.j(s.aC),A.w.j(s.aC),A.w.j(0)],x.O),D.deY,u),A.n),A.bg),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.a_
if(r>0)p.push(B.eb(u,A.w.j(r),!0))
r=s.b8
if(r>0)p.push(B.c4(u,new B.o(u,u,u,u,u,new B.c2(A.A,0.95,A.x,u,0,B.a([A.L,A.w.j(r)],x.O),D.dbT,u),A.n),A.bg))
s=s.aA
if(s>0)p.push(B.b4(u,u,u,new C.bgZ(s,u),A.ax))
return new B.an(A.a_,u,A.b0,A.t,p,u)},
$S:64}
C.eXI.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fG(r.b,A.A,q,q,A.cc,A.bU,!0,q,!1,q,q),o=r.a,n=o.aY5(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c9,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bi
v=o.aJ
u=v-1
t=o.bG
s=o.c6?-1:1
return B.dP(B.ed(A.A,B.eL(A.A,l,B.fw(A.A,new B.Bn(new B.xr(q,q,n,A.B_),p,q),q,B.w_(s,o.cL?-1:1,1),!0),q),v*w,q,q),new B.t(-m*r.d*u/2,-t*r.c*u/2))},
$S:649}
C.eXU.prototype={
$0(){return this.a.m(new C.eXT(this.b,this.c))},
$S:0}
C.eXT.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eXV.prototype={
$1(d){return this.a.m(new C.eXS(this.b,d))},
$S:6}
C.eXS.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eXX.prototype={
$0(){return this.a.m(new C.eXW(this.b,this.c))},
$S:0}
C.eXW.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eX_.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eX0.prototype={
$1(d){var w=this.a
return w.m(w.gcAM())},
$S:2}
C.eX1.prototype={
$1(d){return this.a.m(new C.eWZ())},
$S:2}
C.eWZ.prototype={
$0(){},
$S:0}
C.eX2.prototype={
$0(){var w=this.a
return w.m(new C.eWY(w,this.b))},
$S:0}
C.eWY.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eX4.prototype={
$2(d,e){return A.at},
$S:36}
C.eX3.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b1(v.e),B.b1(v.f)],x.O),q=t?A.c:A.bz
q=B.J(q,A.r,t?2.5:1)
r=B.dd(w,B.at(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b1(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b5,new B.o(w,w,q,s,w,new B.a9(A.b4,A.b7,A.x,r,w,w),A.n),A.hr,w,94,w,w,w,w,70)
return B.aB(w,new B.a6(70,w,B.x(B.a([r,A.fG,B.d(v.b,w,1,A.a1,w,w,w,B.l(w,w,t?A.c:A.aB,w,w,w,w,w,w,w,w,10.5,w,w,A.Q,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eWX(u,v),w,w,w,w,w,w,!1,A.a4)},
$S:83}
C.eWX.prototype={
$0(){var w=this.a
return w.m(new C.eWU(w,this.b))},
$S:0}
C.eWU.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eX5.prototype={
$1(d){var w=this.a
return w.m(new C.eWW(w,d))},
$S:8}
C.eWW.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eX6.prototype={
$1(d){var w=this.a
return w.m(new C.eWV(w,d))},
$S:8}
C.eWV.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eYn.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gI(this.b)]},
$S:32}
C.eYu.prototype={
$1(d){var w=this.a
return w.m(new C.eYv(w,d))},
$S:30}
C.eYv.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.eo(v,v.r,B.a7(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eYw.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:248}
C.eYo.prototype={
$0(){var w=this.a
return w.m(new C.eYm(w,this.b))},
$S:0}
C.eYm.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.M(0,v)},
$S:0}
C.eYp.prototype={
$0(){var w=this.a
return w.m(new C.eYl(w,this.b))},
$S:0}
C.eYl.prototype={
$0(){var w,v=this.b.length,u=J.dY(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eYq.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eYk(v,w.b,w.c,w.d))},
$S:0}
C.eYk.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a7(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eYr.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gBy(v))},
$S:0}
C.eYs.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eYt.prototype={
$0(){var w=this.a
return w.m(new C.eYj(w))},
$S:0}
C.eYj.prototype={
$0(){var w=this.a.db
return A.d.hx(w,0,w.length,0)},
$S:0}
C.eY6.prototype={
$1(d){return d.a===this.a.dy},
$S:220}
C.eY7.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.azh[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aP(9,9)
m=B.a([B.b1(v.w.e),B.b1(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.ayf(new B.mU(new B.bg(n,n,n,n),A.ap,new B.l_(new B.o(j,j,j,j,j,new B.a9(A.a5,A.a8,A.x,m,j,j),A.n),A.bg,new C.b0o(l,B.b1(k==null?v.w.x:k),A.k.E(w,12,26),j),j),j),u,q.b,o===p,new C.eY5(r,v),2,i))}return B.bX(A.bC,h,A.bq,j,7,7)},
$S:159}
C.eY5.prototype={
$0(){var w=this.b
return w.m(new C.eY0(this.a,w))},
$S:0}
C.eY0.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eY8.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:171}
C.eYb.prototype={
$0(){var w=this.a
return w.m(new C.eY4(w))},
$S:0}
C.eY4.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eYc.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eYd.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eYe.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eYf.prototype={
$0(){var w=this.a
return w.m(new C.eY3(w))},
$S:0}
C.eY3.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eYg.prototype={
$0(){var w=this.a
return w.m(new C.eY2(w))},
$S:0}
C.eY2.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eYh.prototype={
$0(){var w=this.b
return w.m(new C.eY1(this.a,w))},
$S:0}
C.eY1.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eYi.prototype={
$1(d){return this.a.fx=d},
$S:171}
C.eY9.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eYa.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eXL.prototype={
$0(){var w=this.a
return w.m(new C.eXK(w))},
$S:0}
C.eXK.prototype={
$0(){var w=this.a
w.p4=null
w.b4e()},
$S:0}
C.eXM.prototype={
$0(){var w=this.a
return w.m(new C.eXJ(w,this.b))},
$S:0}
C.eXJ.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eXN.prototype={
$0(){var w=this.a
return w.m(w.gcr7())},
$S:0}
C.eXD.prototype={
$0(){var w=this.a
return w.m(new C.eXC(w))},
$S:0}
C.eXC.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eXE.prototype={
$0(){var w=this.a
return w.m(new C.eXB(w))},
$S:0}
C.eXB.prototype={
$0(){var w=this.a
w.aC=0.55
w.a_=Math.max(w.a_,0.12)},
$S:0}
C.eXF.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.dck[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aP(9,9)
m.push(v.ayf(new B.mU(new B.bg(p,p,p,p),A.ap,new B.a6(1/0,1/0,new B.Bn(new B.xr(o,o,v.aY5(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.B_),B.fG(u,A.A,140,o,A.cc,A.bU,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eXA(v,s),3,n))}return B.bX(A.bC,m,A.bq,o,10,8)},
$S:159}
C.eXA.prototype={
$0(){var w=this.a
return w.m(new C.eXz(w,this.b))},
$S:0}
C.eXz.prototype={
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
C.eXh.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eXi.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eXj.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eXk.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eXl.prototype={
$1(d){return this.a.aE=d},
$S:6}
C.eXm.prototype={
$1(d){return this.a.a_=d},
$S:6}
C.eXn.prototype={
$1(d){return this.a.b8=d},
$S:6}
C.eXo.prototype={
$1(d){return this.a.aC=d},
$S:6}
C.eXp.prototype={
$1(d){return this.a.aN=d},
$S:6}
C.eWD.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eWE.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eWF.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eWG.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eWH.prototype={
$0(){var w=this.a
return w.m(new C.eWC(w))},
$S:0}
C.eWC.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eWI.prototype={
$1(d){return this.a.b1=d},
$S:171}
C.eWJ.prototype={
$1(d){return this.a.b0=d},
$S:6}
C.eXb.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eXc.prototype={
$1(d){return this.a.bj=d},
$S:6}
C.eXd.prototype={
$1(d){return this.a.aA=d},
$S:6}
C.eXe.prototype={
$1(d){return this.a.be=d},
$S:171}
C.eXf.prototype={
$1(d){return this.a.bM=d},
$S:6}
C.eWN.prototype={
$1(d){return this.a.aJ=d},
$S:6}
C.eWO.prototype={
$1(d){return this.a.bi=d},
$S:6}
C.eWP.prototype={
$1(d){return this.a.bG=d},
$S:6}
C.eWQ.prototype={
$1(d){return this.a.c9=d},
$S:6}
C.eWR.prototype={
$0(){var w=this.a
return w.m(new C.eWM(w))},
$S:0}
C.eWM.prototype={
$0(){var w=this.a
return w.c9=A.k.F(w.c9+90+180,360)-180},
$S:0}
C.eWS.prototype={
$0(){var w=this.a
return w.m(new C.eWL(w))},
$S:0}
C.eWL.prototype={
$0(){var w=this.a
return w.c6=!w.c6},
$S:0}
C.eWT.prototype={
$0(){var w=this.a
return w.m(new C.eWK(w))},
$S:0}
C.eWK.prototype={
$0(){var w=this.a
return w.cL=!w.cL},
$S:0}
C.eXG.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.iji(v,w.p4)},
$S:0}
C.eXy.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bsE:B.fG(v,A.A,w,w,A.cc,A.bU,!1,w,!1,w,w)
return C.fIg(d.length===0?"rounded":d,u,e)},
$S:126}
C.eXu.prototype={
$0(){var w=this.a
return w.m(new C.eXt(w))},
$S:0}
C.eXt.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eXv.prototype={
$0(){var w=this.b
return w.m(new C.eXs(this.a,w))},
$S:0}
C.eXs.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eXw.prototype={
$0(){var w=this.b
return w.m(new C.eXr(this.a,w))},
$S:0}
C.eXr.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eXx.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.E(w.ay,0,1-d)
w.ch=A.k.E(w.ch,0,0.95)},
$S:6}
C.eXR.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ac(-4,A.G,A.b6.j(0.35),A.I,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.ey(n.ckz(),n.r))
l.push(new C.Jb(n.cxJ(),!1,!1,t))
o=B.bT(0,B.bx(o,new B.ey(new B.an(A.a_,t,A.b0,A.t,l,t),n.f),A.ap),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.an(A.a_,t,A.aa,A.t,B.a([o,B.ao(t,B.aB(A.c9,B.c4(t,new B.o(t,t,B.J(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bg),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eXQ(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a4),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:234}
C.eXQ.prototype={
$1(d){var w=this.a
return w.m(new C.eXP(w,d,this.b,this.c))},
$S:21}
C.eXP.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.E(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.E(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eY_.prototype={
$0(){var w=this.a
return w.m(new C.eXZ(w,this.b))},
$S:0}
C.eXZ.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eXg.prototype={
$0(){var w=this.a.c
w.toString
return B.a4(w,!1).ie()},
$S:0}
C.eYx.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a6(Math.min(s*0.4,460),t,B.x(B.a([w.b_Q(),B.E(B.at(w.b2R(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.i,0,A.p),t),B.E(B.x(B.a([B.E(w.aR6(),1),w.aNi()],v),A.m,t,A.e,A.i,0,A.p),1)],v),A.m,t,A.e,A.i,0,t,t)}u=A.k.E(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.b_Q(),new B.D(A.ht,B.at(s.b2R(u),t,t,t),t),B.E(s.aR6(),1),s.aNi()],x.p),A.m,t,A.e,A.i,0,A.p)},
$S:578}
C.fFx.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.es(k,!1,j,A.aF,"",4280640491,i,l,m,"",h,C.bC0(),null,"","",0,!1,"",0,D.bh,4280172719,2,d,0,0,"",D.cm,D.cU,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bp,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bp,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bp,A.Q)},
$S:z+98}
C.fFw.prototype={
$3(d,e,f){var w=this,v=C.bC0(),u=w.b?A.H:A.cy,t=w.c?A.cE:A.bp
return C.es(w.d,!1,f,A.aF,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bh,4280172719,2,d,0,w.f,w.e,D.cm,D.cU,0.82,0.09,w.a)},
$S:z+28}
C.ciH.prototype={
$1(d){return B.w(d)},
$S:17}
C.fNg.prototype={
$0(){return this.a},
$S:z+15}
C.fsS.prototype={
$1(d){return d.a.d1(this.a)},
$S:z+30}
C.fsT.prototype={
$2(d,e){return J.ct(e)},
$S:z+31}
C.fNi.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fNl.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fNm.prototype={
$0(){return A.d.gI(D.wB)},
$S:z+33}
C.fNe.prototype={
$1(d){return d.a},
$S:z+16}
C.fNh.prototype={
$1(d){return d.a},
$S:z+16}
C.fLc.prototype={
$1(d){return A.a.i(B.w(d))},
$S:17}
C.fLd.prototype={
$1(d){return d.length!==0},
$S:3}
C.fLe.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fFB.prototype={
$0(){return C.cF()},
$S:22}
C.fFE.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cm,s=u?n:0
return C.es(j,l,v,A.aF,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bh,4280172719,2,d,s,0,"",t,D.cU,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,D.dh,!1,null,0,"","",A.bp,A.a7)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,D.dh,!1,null,0,"",j,A.bp,A.a7)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,D.dh,!1,null,0,j,k,A.bp,A.a7)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bp,A.a7)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bp,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dh,!1,k,l,"",m,A.bp,A.a7)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,j,!1,null,0,"",k,A.bp,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,D.dh,!1,j,k,"",l,A.bp,A.a7)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,j,!1,k,0,l,m,A.bp,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,j,k,l,m,"",n,A.bp,A.a7)},
$S:z+35}
C.fFD.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.es(A.bi,!1,4279310375,A.aF,"",i,24,A.bp,A.a7,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cm,D.fa,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fFC.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cm,t=v?j:0
return C.es(A.bi,!1,4279310375,A.aF,"",4280640491,24,A.bp,A.a7,"",h,w,d,v?k:"",l,0,!1,"",0,D.bh,4280172719,2,"",t,0,"",u,D.lM,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.qD,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fFA.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fI1.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hrq.c4(0,A.a.i(s.w).toLowerCase(),new C.fI_(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c4(0,s.r,new C.fI0(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bA(t.e,new B.bq_(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1704}
C.fI_.prototype={
$0(){return F.aOS(this.a.w)},
$S:178}
C.fI0.prototype={
$0(){var w=this.a.r,v=B.aN(w.toLowerCase()," ","_")
return F.bAV("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.id(2,w,A.cd,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:178}
C.fkY.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fkZ.prototype={
$1(d){return d.a},
$S:z+18}
C.fl_.prototype={
$1(d){return d.b},
$S:z+19}
C.fWy.prototype={
$1(d){return D.hpm},
$S:z+41}
C.f3W.prototype={
$0(){return this.a.x=C.hWe(this.b,this.c.b)},
$S:0}
C.f3X.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.f3U.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:408}
C.f3V.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:408}
C.f3T.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bV(A.av,null,new C.f3O(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.k2,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b7(s,7)
if(r.length===0){n.m(new C.f3P(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hxq(o,m.cLB(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.f3Q(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.f3O.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.f3S(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b9h,A.f,p,p,D.b4b,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.CJ:D.CP,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a6(64,64,C.fIg(v,i.b4S(h),u),p)))}t=B.ki(1,m,4,10,10,p,A.dR,!0)
if(!l)return B.bl(!0,new B.D(Ab.yi,t,p),!0,!1,A.af,!0,!0)
s=new C.f3R(i,d)
m=B.aJ(d,A.bX,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.HH[e]
l.push(s.$2(r.a,r.b))}return B.bl(!0,new B.cU(new B.aZ(0,1/0,0,m.a.b*0.85),B.cg(B.x(B.a([D.fFp,A.W,t,A.dS,D.f1b,A.au,D.fQv,A.W,B.ki(1.15,l,3,10,10,p,A.dR,!0)],n),A.E,p,A.e,A.i,0,A.p),A.t,p,A.y,p,Ab.yi,p,p,A.ag),p),!0,!1,A.af,!0,!0)},
$S:27}
C.f3S.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b6.j(0.22):A.c.j(0.04),s=v?A.bw:A.dq
return B.aB(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.J(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hu,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f3N(this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:1705}
C.f3N.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.f3R.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bL:A.bz
r=B.J(r,A.r,t?2.5:1)
w=B.m(10)
u=B.E(B.p(v,B.bx(w,d.length===0?B.p(v,D.aqk,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.dX(new C.NV(u.FU(d),!0,!1,v),!0,v),A.ap),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aB(v,B.x(B.a([u,A.au,B.d(e,v,1,A.a1,v,v,v,B.l(v,v,t?A.bL:A.ae,v,v,v,v,v,v,v,v,10.5,v,v,A.Q,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f3M(this.b,d),v,v,v,v,v,v,!1,A.a4)},
$S:126}
C.f3M.prototype={
$0(){B.a4(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.f3P.prototype={
$0(){var w=this.a
return w.w=w.w.FU("")},
$S:0}
C.f3Q.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f3C.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.f3D.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.f3F.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.f3G.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.f3H.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.f3I.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f3E(w,d))},
$S:2}
C.f3E.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.f3J.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.w(this.b)},
$S:0}
C.f49.prototype={
$0(){return this.a.f.fR()},
$S:0}
C.f4a.prototype={
$0(){var w=this.a
return w.m(new C.f48(w))},
$S:0}
C.f48.prototype={
$0(){return this.a.e=null},
$S:0}
C.f4b.prototype={
$0(){var w=this.a
return w.m(new C.f47(w))},
$S:0}
C.f47.prototype={
$0(){return this.a.x=null},
$S:0}
C.f4d.prototype={
$1(d){var w=this.a
return w.m(new C.f46(w,d))},
$S:35}
C.f46.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.f4e.prototype={
$1(d){var w=this.a
return w.m(new C.f45(w,d))},
$S:35}
C.f45.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f4f.prototype={
$0(){var w=this.a
return w.m(new C.f44(w))},
$S:0}
C.f44.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.f4g.prototype={
$1(d){var w=this.a
return w.m(new C.f43(w,d))},
$S:35}
C.f43.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f4h.prototype={
$1(d){var w=this.a
return w.m(new C.f42(w,d))},
$S:35}
C.f42.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f4i.prototype={
$0(){var w=this.a
return w.m(new C.f41(w))},
$S:0}
C.f41.prototype={
$0(){var w=this.a
return w.w=w.w.FU("")},
$S:0}
C.f4j.prototype={
$0(){var w=this.a
return w.m(new C.f40(w,this.b))},
$S:0}
C.f40.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.f4k.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a6(u,null,w.bQi(D.a4H[v]),null))
return B.bX(A.bC,t,A.bq,null,8,8)},
$S:159}
C.f4c.prototype={
$1(d){var w=this.a
return w.m(new C.f4_(w,d))},
$S:8}
C.f4_.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.f3K.prototype={
$0(){var w=this.a
return w.m(new C.f3L(w,this.b,this.c))},
$S:0}
C.f3L.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.M(0,w)},
$S:0}
C.f3Z.prototype={
$0(){var w=this.a
return w.m(new C.f3Y(w,this.b))},
$S:0}
C.f3Y.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fWx.prototype={
$1(d){return new C.a10(this.a,this.b,null)},
$S:z+42}
C.f3v.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.f3w.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.f3x.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aJ4?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.f3y.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.f3z.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f3u(w,d))},
$S:2}
C.f3u.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f3A.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.w(this.b)},
$S:0}
C.f3B.prototype={
$0(){var w=this.b
if(A.a.c8(w,"\u2026"))w=A.a.ar(w,0,w.length-1)
this.a.d.bK(0,new B.b9(w,B.hk(A.by,w.length),A.aO))},
$S:0}
C.fs7.prototype={
$1(d){return d.a===this.a},
$S:220}
C.ekS.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gayg(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cY5:D.deH
t=D.xY.j(v?1:0.55)
v=p.a.c
t=B.J(t,A.r,v?1.8:1.2)
s=D.xY.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.I,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bT(0,B.b4(q,q,q,new C.bjd(n*6.283,q),A.ax),0,0,0)
o=o.x
o=B.bT(0,B.bSy(B.eL(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a9(A.a5,A.a8,A.x,B.a([A.L,D.bh9.j(0.28),A.L],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.t(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bx(s,new B.an(A.a_,q,A.aa,A.t,B.a([n,o,B.at(B.x(B.a([B.X(p.a.c?A.ef:A.mb,D.xY,q,q,q,20),A.au,B.eN(A.A,B.nZ(A.jG,D.fyF,new C.ekR()),A.f,A.e2)],r),A.m,q,A.e,A.P,0,A.p),q,q,q),B.ao(q,B.p(q,D.fv3,A.f,q,q,new B.o(D.xY,q,q,B.m(6),q,q,A.n),q,q,q,q,M.alk,q,q,q),q,q,q,4,4,q)],r),q),A.ap),A.f,q,q,new B.o(q,q,t,w,v,new B.a9(A.ay,A.aE,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:95}
C.ekR.prototype={
$1(d){return D.c2G.aB(0,d)},
$S:68}
C.fNn.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fNo.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:220}
C.fNp.prototype={
$2(d,e){return A.o.aK(e.a.length,d.a.length)},
$S:1706}
C.fNq.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aN(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aN(u,p,q.toUpperCase())}return u},
$S:14}
C.fNj.prototype={
$1(d){return d.a},
$S:z+18}
C.fNk.prototype={
$1(d){return d.b},
$S:z+19}
C.fVL.prototype={
$1(d){return new C.a_n(this.a,this.b,null)},
$S:z+44}
C.dpt.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dpu.prototype={
$1(d){return d.a===this.a.gajb()},
$S:z+10}
C.dpv.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dpy.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.dpz.prototype={
$0(){var w=this.a
return w.m(new C.dpx(w,this.b))},
$S:0}
C.dpx.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dpA.prototype={
$1(d){var w=this.a
return w.m(new C.dpw(w,d))},
$S:8}
C.dpw.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ekQ.prototype={
$1$2(d,e,f){var w=B.bq(d,!0,f)
A.d.dZ(w,this.a)
return B.d1(w,0,B.dB(e,"count",x.S),B.T(w).c).dm(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1707}
C.fhp.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.es(A.bi,!1,4279310375,A.aF,"",i,24,A.bp,A.a7,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.fa,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cm,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.fhr.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.es(A.K,!1,this.b.d,A.aF,"",4280640491,i,A.bp,A.cP,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bh,4280172719,2,d,l,0,"",D.mU,D.cU,g,e,f)},
$S:z+46}
C.fhq.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.wL(0,"twinkle")
w=t===D.bh?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mU,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.fho.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fGI.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fGJ.prototype={
$0(){return A.d.gI(D.HQ)},
$S:z+49}
C.fGK.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fjp.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fMQ.prototype={
$1(d){var w=2450411,v=4281908728
C.dz(d,C.dA(4280171146,1,0,D.bh,w,0,0.52,0,0))
C.dz(d,C.dA(v,1,0,D.bh,w,0,0.04,0.48,0))
C.dz(d,C.dA(4294047225,0.38,0,D.bh,w,0,0.48,0.52,0.62))
C.dz(d,C.dA(v,0.006,0,D.fD,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fMR.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dz(d,C.dA(4280172719,0.8,0,D.bh,w,0,0.36,0.58,0.1))
C.dz(d,C.dA(v,0.64,0,D.bh,w,0,0.28,0.64,0.18))
C.dz(d,C.dA(4282090230,0.44,0,D.bh,w,0,0.2,0.7,0.28))
C.dz(d,C.dA(v,0.006,0,D.fD,v,3,0.22,0.08,0.12))
C.dz(d,C.dA(u,0.004,0,D.fD,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fMS.prototype={
$1(d){var w=2450411,v=4279548070
C.dz(d,C.dA(4279080072,0.11,0,D.bh,w,0,1,0,0))
C.dz(d,C.dA(4279310375,0.11,0,D.bh,w,0,1,0,0.89))
C.dz(d,C.dA(856528008,0.72,0,D.k1,w,0,0.28,0.72,0.14))
C.dz(d,C.dA(1426953352,0.2,0,D.k1,w,0,0.2,0.78,0.22))
C.dz(d,C.dA(v,0.004,0,D.fD,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fN2.prototype={
$1(d){var w=2450411
C.dz(d,C.dA(4279203438,0.55,0,D.k1,w,0,0.5,0.55,-0.05))
C.dz(d,C.dA(4280171146,0.5,0,D.k1,w,0,0.45,0.62,0.35))
C.dz(d,C.dA(4280640491,0.4,0.3,D.k0,w,0,0.35,0.68,0.55))
C.dz(d,C.dA(571438702,0.12,0,D.bh,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fN7.prototype={
$1(d){var w=4280472558
C.dz(d,C.dA(4279310375,0.75,-0.4,D.k0,2450411,0,0.75,-0.15,0.35))
C.dz(d,C.dA(w,0.55,0,D.bh,2450411,0,0.06,0.42,0.38))
C.dz(d,C.dA(w,0.006,0,D.fD,w,3,0.35,0.08,0.08))
C.dz(d,C.dA(2282478,0.12,0,D.bh,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fN8.prototype={
$1(d){var w=2450411,v=4280640491
C.dz(d,C.dA(3423541034,0.48,0,D.bh,w,0,1,0,0))
C.dz(d,C.dA(v,0.12,-0.08,D.k1,w,0,1.1,-0.05,0.38))
C.dz(d,C.dA(858088427,0.35,0,D.bh,w,0,0.42,0.55,0.05))
C.dz(d,C.dA(v,0.006,0,D.fD,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fN9.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cX_[w]
u=Date.now()
t=$.j3
$.j3=t+1
v=new C.eO("design_"+(""+1000*u+"_"+t),D.fa,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a7,A.bp,A.aF,4279310375,A.bi,null,D.bh,v,4294967295,2,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.KS
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c3(d.z,0,v)}C.dz(d,C.dA(s,0.006,0,D.fD,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fNa.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ar(A.mA,A.dt,w/3).l()
u=Date.now()
t=$.j3
$.j3=t+1
v=new C.eO("design_"+(""+1000*u+"_"+t),D.fa,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a7,A.bp,A.aF,4279310375,A.bi,null,D.Dr,v,2450411,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.KS
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c3(d.z,0,v)}C.dz(d,C.dA(s,0.006,0,D.fD,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fNb.prototype={
$1(d){var w=4294967295
C.dz(d,C.dA(4280640491,1,0,D.bh,2450411,0,0.42,0,0))
C.dz(d,C.dA(4280110808,1.1,1.57,D.k0,2450411,0,0.18,0.35,-0.05))
C.dz(d,C.dA(w,0.006,0,D.fD,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fNc.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dz(d,C.dA(w,0.1,0,D.bh,v,0,1,0,0))
C.dz(d,C.dA(u,0.012,0,D.bh,v,0,1,0,0.1))
C.dz(d,C.dA(u,0.006,0,D.fD,u,3,0.42,0.06,0.14))
C.dz(d,C.dA(403446057,0.68,0,D.k1,v,0,0.22,0.72,0.18))
C.dz(d,C.dA(w,0.1,0,D.bh,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fNd.prototype={
$1(d){var w=4278630100
C.dz(d,C.dA(4279310375,1.2,0.15,D.k1,2450411,0,0.55,-0.2,-0.1))
C.dz(d,C.dA(w,1.1,0.15,D.bh,2450411,0,0.08,0.15,-0.05))
C.dz(d,C.dA(1120295,0.18,0,D.bh,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fMT.prototype={
$1(d){var w=4292617766
C.dz(d,C.dA(4282714634,0.65,-0.2,D.k0,2450411,0,0.65,-0.1,0.45))
C.dz(d,C.dA(w,0.5,-0.15,D.k0,2450411,0,0.5,0.05,0.55))
C.dz(d,C.dA(w,0.006,0,D.fD,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fMU.prototype={
$1(d){var w=2450411
C.dz(d,C.dA(4278413729,0.35,3.14,D.k0,w,0,0.45,-0.05,0.7))
C.dz(d,C.dA(4278355143,0.3,3.14,D.k0,w,0,0.4,0.25,0.75))
C.dz(d,C.dA(4279150057,0.32,3.14,D.k0,w,0,0.5,0.55,0.72))
C.dz(d,C.dA(863884284,0.22,0,D.eU,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fMV.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dz(d,C.dA(w,0.14,0,D.bh,v,0,0.14,0.02,0.02))
C.dz(d,C.dA(2282478,0.14,0,D.bh,u,3,0.14,0.84,0.02))
C.dz(d,C.dA(w,0.28,0,D.k1,v,0,0.35,-0.08,0.78))
C.dz(d,C.dA(u,0.22,0.5,D.k0,v,0,0.3,0.72,0.78))
C.dz(d,C.dA(w,0.006,0,D.fD,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fMW.prototype={
$1(d){var w=4293571336,v=1156231944
C.dz(d,C.dA(1841431,0.92,0,D.bh,w,3,0.92,0.04,0.04))
C.dz(d,C.dA(v,0.15,0,D.k0,2450411,0,0.15,0.02,0.02))
C.dz(d,C.dA(v,0.15,3.14,D.k0,2450411,0,0.15,0.83,0.83))
C.dz(d,C.dA(w,0.004,0,D.fD,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fMX.prototype={
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
C.fMY.prototype={
$1(d){var w=2450411,v=4280640491
C.dz(d,C.dA(3708753706,0.42,0,D.bh,w,0,1,0,0))
C.dz(d,C.dA(v,0.06,-0.05,D.k1,w,0,1,0,0.38))
C.dz(d,C.dA(859356664,0.25,0,D.eU,w,0,0.25,0.7,0.08))
C.dz(d,C.dA(v,0.006,0,D.fD,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fMZ.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ar(A.mA,A.dt,w/3).l()
u=Date.now()
t=$.j3
$.j3=t+1
v=new C.eO("design_"+(""+1000*u+"_"+t),D.fa,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a7,A.bp,A.aF,4279310375,A.bi,null,D.Dr,v,2450411,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.KS
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c3(d.z,0,v)}C.dz(d,C.dA(4280172719,0.08,0,D.bh,2450411,0,1,0,0))
C.dz(d,C.dA(s,0.006,0,D.fD,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fN_.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.j3
$.j3=u+1
u=new C.eO("design_"+(""+1000*v+"_"+u),D.fa,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a7,A.bp,A.aF,s,A.bi,null,D.fD,t,t,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
v=$.KS
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c3(d.z,0,u)}C.dz(d,C.dA(s,0.75,0,D.bh,2450411,0,0.22,0.72,0.1))
C.dz(d,C.dA(872415231,0.16,0,D.bh,2450411,0,0.16,0.75,0.15))
C.dz(d,C.dA(s,0.006,0,D.fD,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fN0.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dz(d,C.dA(4674921,0.9,0,D.bh,4287931320,2,0.9,0.05,0.05))
C.dz(d,C.dA(w,0.08,0,D.bh,v,0,0.08,0.03,0.03))
C.dz(d,C.dA(u,0.08,0,D.bh,v,0,0.08,0.89,0.03))
C.dz(d,C.dA(u,0.08,0,D.bh,v,0,0.08,0.03,0.89))
C.dz(d,C.dA(w,0.08,0,D.bh,v,0,0.08,0.89,0.89))
C.dz(d,C.dA(w,0.004,0,D.fD,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fN1.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.j3
$.j3=t+1
t=new C.eO("design_"+(""+1000*u+"_"+t),D.fa,0.55,0.14+v,0.38,0.18,"",24,A.a7,A.bp,A.aF,r,A.bi,null,D.bh,4294967295,4280640491,2,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.KS
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c3(d.z,0,t)
u=B.ar(A.d7,A.cp,w/2).l()
t=Date.now()
s=$.j3
$.j3=s+1
u=new C.eO("design_"+(""+1000*t+"_"+s),D.fa,0.57,0.16+v,0.06,0.14,"",24,A.a7,A.bp,A.aF,r,A.bi,null,D.bh,u,q,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
v=$.KS
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c3(d.z,0,u)}C.dz(d,C.dA(4280171146,1,0,D.bh,q,0,0.48,0,0))
C.dz(d,C.dA(4280172719,1.1,1.57,D.k0,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fN3.prototype={
$1(d){var w=2450411
C.dz(d,C.dA(870995980,0.55,0.45,D.k1,w,0,0.55,-0.12,-0.08))
C.dz(d,C.dA(856996006,0.45,0.45,D.k1,w,0,0.45,0.62,-0.05))
C.dz(d,C.dA(16777215,0.38,0.45,D.k1,4293548044,5,0.38,0.52,0.12))
C.dz(d,C.dA(585783308,0.3,0.45,D.k1,w,0,0.3,0.56,0.16))
C.dz(d,C.dA(4279548070,0.06,0,D.bh,w,0,0.16,0.38,0.04))
C.dz(d,C.dA(1156208652,0.28,0,D.eU,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fN4.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dz(d,C.dA(w,1,0,D.bh,v,0,0.07,0,0))
C.dz(d,C.dA(u,0.1,0,D.bh,t,1,0.46,0.48,0.14))
C.dz(d,C.dA(u,0.1,0,D.bh,t,1,0.46,0.48,0.28))
C.dz(d,C.dA(u,0.1,0,D.bh,t,1,0.46,0.48,0.42))
C.dz(d,C.dA(s,0.08,0,D.eU,v,0,0.08,0.5,0.16))
C.dz(d,C.dA(w,0.08,0,D.eU,v,0,0.08,0.5,0.3))
C.dz(d,C.dA(4279548070,0.08,0,D.eU,v,0,0.08,0.5,0.44))
C.dz(d,C.dA(16777215,0.32,0.45,D.k1,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fN5.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dz(d,C.dA(4294047225,0.08,0,D.bh,t,2,0.1,0.02,0.06))
C.dz(d,C.dA(s,0.42,0,D.bh,2450411,0,0.36,0.58,0.18))
C.dz(d,C.dA(872415231,0.12,0,D.bh,2450411,0,0.28,0.62,0.24))
C.dz(d,C.dA(16777215,0.28,0,D.eU,s,4,0.32,0,0.72))
C.dz(d,C.dA(r,0.006,0,D.fD,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.j3
$.j3=u+1
u=new C.eO("design_"+(""+1000*v+"_"+u),D.fa,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a7,A.bp,A.aF,4279310375,A.bi,null,D.eU,16777215,t,2,0,!1,"",0,D.cm,0,"","","","","",!1,0)
v=$.KS
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c3(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fN6.prototype={
$1(d){var w=2450411,v=4279548070
C.dz(d,C.dA(3423541034,0.55,0,D.bh,w,0,1,0,0))
C.dz(d,C.dA(4009754623,0.56,0.45,D.k1,w,0,0.56,0.22,0.18))
C.dz(d,C.dA(3439329279,0.44,0.45,D.k1,w,0,0.44,0.28,0.24))
C.dz(d,C.dA(v,0.07,0,D.bh,w,0,0.22,0.34,0.62))
C.dz(d,C.dA(v,1,0,D.bh,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fEy.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fEz.prototype={
$0(){return A.d.gI($.bFG())},
$S:z+52}
C.frq.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.frp.prototype={
$1(d){return C.i2I(d,this.a,this.b)},
$S:z+53}
C.fNw.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.w_(1.0375,1.01875,1)
return new B.fU(v,u,new C.aTX(B.hTf(A.vw,C.i2L(w.c,w.d,v,u),t)))},
$S:406}
C.e_8.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:9}
C.e_7.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c4(w,new B.o(w,w,w,w,w,new B.c2(A.KV,1.2,A.x,w,0,u.d,w,w),A.n),A.bg),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jo(new B.an(A.a_,w,A.b0,A.t,B.a([t,new B.ey(B.b4(w,w,w,new C.bg4(u.a,r,q,r),A.ax),w),B.at(new B.jS(r,new C.e_6(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.t,w)},
$S:419}
C.e_6.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.eu.av(0,A.k.E(e/1.4,0,1)),p=A.k.E(e/0.9,0,1),o=A.k.E((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gI(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.I,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hT(B.fG(i,A.A,r,r,A.cc,A.bU,!0,r,!1,r,r),A.ap),A.f,r,r,new B.o(r,r,r,r,u,new B.fY(A.A,0,6.283185307179586,A.x,t,r,new B.my(e*0.8)),A.a6),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a6(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bsL(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cX(i[1].j(0.6),A.I,t)],x.r),r,r),A.K,r,r),r))
j.push(new B.a6(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.d9(B.dP(B.x(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a9(A.a5,A.a8,A.x,B.a([A.L,i[1],A.L],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a6(r,m*0.022,r,r),B.d(w.a.c.gaLR(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a7,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.K,r,r)],k),A.m,r,A.e,A.P,0,A.p),new B.t(0,(1-o)*m*0.03)),o))
return B.d9(B.ed(A.A,new B.D(new B.Q(l,0,l,0),B.x(j,A.m,r,A.e,A.P,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:101}
C.f2J.prototype={
$1(d){var w=this.b
return new B.a9(A.ay,A.aE,A.x,this.a.c,B.a([0,A.k.E(w-0.1,0,1),A.k.E(w,0,1),A.k.E(w+0.1,0,1),1],x.x),null).aB(0,d)},
$S:68}
C.cd6.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bL:A.bz
t=B.J(t,A.r,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hT.j(0.4),A.I,14)],x.V):v
w=B.dd(v,B.bx(B.m(12),d,A.ap),v,v,A.b5,new B.o(v,v,t,u,w,v,A.n),A.eO,v,72,v,v,v,v,v)
return B.aB(v,new B.a6(112,v,B.x(B.a([w,A.fG,B.d(e,v,1,A.a1,v,v,v,B.l(v,v,g?A.bL:A.ae,v,v,v,v,v,v,v,v,11,v,v,A.Q,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.i,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a4)},
$S:1708}
C.cd7.prototype={
$0(){var w=this.a
return w.d.$1(w.c.FU(""))},
$S:0}
C.cd8.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.dX(new C.NV(v.FU(u),!0,!1,null),!0,null),d.b,new C.cd9(w,this.c,d),v.a===u)},
$S:z+54}
C.cd9.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hxq(u.b,t.c.FU(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fUa.prototype={
$1(d){return new C.ZV(this.a,null)},
$S:z+55}
C.deK.prototype={
$0(){var w=this.a
w.d=w.gvR().bd_("data:"+this.b+";base64,"+A.cI.gcp().aL(this.c));++w.r},
$S:0}
C.deP.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.deQ.prototype={
$0(){var w=this.a
return w.m(new C.deO(w))},
$S:0}
C.deO.prototype={
$0(){return this.a.r++},
$S:0}
C.deR.prototype={
$1(d){var w=this.a
return w.m(new C.deN(w,d))},
$S:2}
C.deN.prototype={
$0(){var w=this.a
return w.d=w.gvR().aEI(this.b)},
$S:0}
C.deS.prototype={
$0(){var w=this.a
return w.m(new C.deM(w))},
$S:0}
C.deM.prototype={
$0(){var w=this.a
return w.d=w.gvR().bd_("")},
$S:0}
C.deT.prototype={
$1(d){var w=this.a
return w.m(new C.deL(w,d))},
$S:2}
C.deL.prototype={
$0(){var w=this.a
return w.d=w.gvR().bd5(this.b)},
$S:0}
C.deU.prototype={
$0(){var w=this.a
w=w.gvR().bd5(w.gayh().a.a)
B.a4(this.b,!1).O(w)
return null},
$S:0}
C.fU9.prototype={
$1(d){var w={}
w.a=this.a
return new B.e0(new C.fU8(w),null)},
$S:19}
C.fU8.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bl(!0,new B.cU(new B.aZ(0,1/0,0,B.aJ(d,A.bX,x.w).w.a.b*0.85),B.cg(B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aA,D.fNv,A.au,D.fNL,A.aA,new C.b0l(v.a,new C.fU7(v,e,d),!0,w)],x.p),A.E,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,A.ag),w),!0,!1,A.af,!0,!1),A.f,w,w,D.b4K,w,w,w,w,A.Np,w,w,w)},
$S:162}
C.fU7.prototype={
$1(d){this.b.$1(new C.fU6(this.a,d))
B.a4(this.c,!1).O(d)},
$S:z+56}
C.fU6.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fWw.prototype={
$1(d){return D.hjE},
$S:z+57}
C.dlv.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.dlw.prototype={
$0(){var w=this.a.c
w.toString
B.a4(w,!1).O(this.b)
return null},
$S:0}
C.dlx.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a4(w,!1).O(v)}},
$S:0}
C.fK9.prototype={
$1(d){var w=this.b
return new B.a9(A.ay,A.aE,A.x,B.a([A.L,B.ar(this.a,A.c,0.75).j(0.9),A.L],x.O),B.a([A.k.E(w-0.12,0,1),A.k.E(w,0,1),A.k.E(w+0.12,0,1)],x.x),null).aB(0,d)},
$S:68}
C.der.prototype={
$3(d,e,f){var w,v=this,u=new B.aG($.S().r,A.ah,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.D(new B.aY(t+r*1.2,o))
u.D(new B.c5(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.D(new B.c5(w,q+p,w,q+p*1.2))
u.D(new B.Du(B.bY(new B.t(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aG(u,v.d)
s.aG(u,v.e)
p=B.I()
p.r=B.ar(v.a.d,A.c,0.6).gp(0)
s.ad(new B.t(w,o),2.2,p)},
$S:398}
C.fKd.prototype={
$2(d,e){return A.k.aK(d.c,e.c)},
$S:z+58}
C.fCy.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fCz.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.yk,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.fvl,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aN,B.dl(D.Hn,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fCw(d),B.bo(A.c1,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.W,B.et(A.op,D.Vd,new C.fCx(d),B.di(w,w,w,w,w,w,w,w,w,A.ae,w,w,A.cl,w,w,Q.xp,w,w,w,w))],x.p),A.ak,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:27}
C.fCw.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.fCx.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.ciF.prototype={
$1(d){return d.hK()},
$S:z+59}
C.ciG.prototype={
$1(d){return d.ag()},
$S:z+60}
C.ciE.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a2(b5,x.N,x.z),b3=B.aK(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.N(b3)
if(b4==null)b4=A.a7.gdM(0)
b3=B.aK(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.N(b3)
if(w==null)w=0
b3=B.aK(b2.h(0,"align"))
v=b3==null?b1:A.k.N(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hZp(b2.h(0,"type"))
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
n=A.aBf[A.o.E(b4,0,8)]
m=D.d_4[A.o.E(w,0,1)]
l=C.i28(b2.h(0,"decoration"))
k=B.aK(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.axJ[A.o.E(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.i50(b2.h(0,"shape"))
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
a3=C.hsz(b2.h(0,"textTransition"))
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
return C.es(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.ciu.prototype={
$1(d){return d.hK()},
$S:z+62}
C.civ.prototype={
$1(d){return d.ag()},
$S:z+63}
C.cir.prototype={
$1(d){return B.w(d)},
$S:17}
C.cis.prototype={
$1(d){return B.w(d)},
$S:17}
C.cit.prototype={
$1(d){return C.hja(B.a2(d,x.N,x.z))},
$S:z+64}
C.ciW.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.ciX.prototype={
$0(){return A.d.gI(D.a4k)},
$S:z+66}
C.ciR.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cg(d.f))w.n(0,u,d.hK())},
$S:z+7}
C.ciQ.prototype={
$2(d,e){return e.f.aK(0,d.f)},
$S:z+21}
C.ciM.prototype={
$1(d){return new B.N(d,new C.ciN(),B.T(d).k("N<1,V>")).fb(0,new C.ciO())},
$S:z+69}
C.ciN.prototype={
$1(d){return d.f},
$S:z+70}
C.ciO.prototype={
$2(d,e){return d.cg(e)?d:e},
$S:677}
C.ciP.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hP4(d)},
$S:z+71}
C.ciS.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.ciT.prototype={
$2(d,e){return e.f.aK(0,d.f)},
$S:z+21}
C.ciU.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fKM.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.M)(w),++r){q=w[r]
p=q.a
if(s.aj(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.M)(o),++l){k=o[l]
j=k.a
if(t.t(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.M(0,j)
break}}}},
$S:z+73}
C.fKI.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fKJ.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fKK.prototype={
$2(d,e){var w
if(d.b===D.cU){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fKL.prototype={
$2(d,e){return d.b===D.fa&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.ciA.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.idS(b2,b3),b5=B.a7(b4).k("bc<2>")
b5=B.cG(new B.bc(b4,b5),new C.ciz(),b5.k("L.E"),x.N)
w=B.dg(b5,B.a7(b5).k("L.E"))
b1=b1.e
v=A.q5.av(0,A.k.E(b1,0,1))
u=new C.ciB()
b5=B.ar(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ar(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.ciC(a9,b7.d)
r=new C.ciD(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.M)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jO.av(0,A.k.E(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kB(A.k.E(1-k,0,1),B.dP(B.ed(A.A,r.$1(l),1-k*0.06,a8,a8),new B.t(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.M)(b2),++m){i=b2[m]
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
if(a2===D.fa){a4=i.hK()
a4.ay=B.ar(B.b1(l.ay),B.b1(i.ay),v).l()
a4.ch=B.ar(B.b1(l.ch),B.b1(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lM&&l.at==i.at?r.$1(i):new B.an(A.a_,a8,A.b0,A.t,B.a([new B.kB(A.k.E(o,0,1),r.$1(l),a8),new B.kB(A.k.E(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iJ(B.wx(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.E((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cm)a7=D.mU
p.push(s.$5(i.c,i.d,i.e,i.f,C.huQ(a7,a6,r.$1(i))))}}return B.c4(new B.an(A.a_,a8,A.aa,A.t,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a9(A.a5,A.a8,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bg)},
$S:397}
C.ciz.prototype={
$1(d){return d.a},
$S:z+22}
C.ciB.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b1(w)},
$S:z+76}
C.ciC.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1712}
C.ciD.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a8h(v,C.b2t(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dME.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ed(new B.dh(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:46}
C.ciJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.ciK.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fND.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:324}
C.fMK.prototype={
$1(d){return new C.adT(this.a,this.b,null)},
$S:z+78}
C.evV.prototype={
$0(){return this.a.Qj(this.b,C.ihh(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.evW.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.Qj(this.b,C.ihj(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.evX.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.Qj(this.b,C.ihi(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.evY.prototype={
$0(){Z.huA()
B.a4(this.a,!1).O(null)},
$S:0}
C.ciy.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1713}
C.cix.prototype={
$2(d,e){var w,v=this,u=null,t=B.dN(d,A.nO),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.E(p*Math.max(B.jV(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bU:A.dw
return B.fG(t,A.A,o,new C.ciw(),A.cc,w,!0,u,!1,new B.bG("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1714}
C.ciw.prototype={
$3(d,e,f){return D.adT},
$S:224}
C.fKH.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.b1(r.e)
v=r.f
v.toString
v=new B.a9(A.ay,A.aE,A.x,B.a([w,B.b1(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b1(r.e):t
r=r.z
r=B.d1(r,0,B.dB(6,"count",x.S),B.T(r).c)
u=r.$ti.k("N<ak.E,cN>")
r=B.C(new B.N(r,new C.fKG(e.b,e.d),u),u.k("ak.E"))
return B.bx(s,B.c4(new B.an(A.a_,t,A.aa,A.t,r,t),new B.o(v,t,t,t,t,w,A.n),A.bg),A.ap)},
$S:1715}
C.fKG.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b2t(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fud.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cI(r.b,new C.fub(d))
w=B.aJ(d,A.bX,x.w).w
v=B.m(22)
u=B.J(A.bz,A.r,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.h_,28)],x.V)
s=x.p
return new B.d0(e,!1,B.at(B.aH(!1,A.a2,!0,q,B.p(q,B.x(B.a([B.B(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.k5,q,q,q),A.au,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1),B.bN(!1,A.Al,q,q,!0,q,q,q,new C.fuc(p,d),q,B.fu(q,q,A.bk,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.BN,q,new B.b7(B.m(12),A.a0),q,q,q,q,q,q))],s),A.m,q,A.e,A.i,0,q,q),A.aA,r.d],s),A.m,q,A.e,A.P,0,A.p),A.f,q,new B.aZ(0,w.a.a*0.94,0,1/0),new B.o(A.av,q,u,v,t,q,A.n),q,q,q,A.fZ,A.Gg,q,q,q),A.f,A.L,0,q,q,q,q,q,A.aj),q,q,q),q)},
$C:"$3",
$R:3,
$S:262}
C.fub.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a4(w,!0).pM())B.a4(w,!0).eN()},
$S:0}
C.fuc.prototype={
$0(){var w=this.a.a
if(w!=null)w.a4(0)
B.a4(this.b,!0).eN()},
$S:0}
C.fbg.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.d9(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.dP(u.b,new B.t((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.dP(u.b,new B.t(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.dP(u.b,new B.t(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.dP(u.b,new B.t(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.ed(A.A,B.d9(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.ed(A.A,B.d9(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fG(r*3.14159)
return B.fw(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.kh(r*3.14159)
return B.fw(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fG(r*1.2)
s.kh(r*0.5)
return B.fw(A.A,B.d9(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fG(-r*1.4)
return B.fw(A.a8,B.d9(u.b,r),t,s,!0)
case 12:return new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.d9(B.ed(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.jo(u.b,A.t,new C.aKJ(r,t))],x.p),t)
case 15:return new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.jo(u.b,A.t,new C.aKJ(1-r,t))],x.p),t)
case 16:v=D.b8d.av(0,r)
return new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.ed(A.A,B.d9(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.d9(B.eb(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dr()
s.mP(r*6.28)
s.jV(r,r,r,1)
return B.fw(A.A,u.b,t,s,!0)
case 20:return B.eL(A.A,(r-0.5)*0.35,new B.an(A.a_,t,A.b0,A.t,B.a([u.c,B.d9(u.b,r)],x.p),t),t)}},
$S:61}
C.dXS.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cq(0)}},
$S:12}
C.dXR.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cq(0)}},
$S:12}
C.dXQ.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.huQ(v,w,e)},
$S:61}
C.ciq.prototype={
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
q=B.C(new B.N(v,new C.cip(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c4(new B.an(A.a_,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bg)},
$S:397}
C.cip.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cm?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a8h(m,new C.VD(d,C.b2t(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.dbG.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.dbF(w))},
$S:12}
C.dbF.prototype={
$0(){return this.a.d++},
$S:0}
C.eky.prototype={
$2(d,e){var w,v=null,u=A.o.ao(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aQu.t(0,A.d.gI(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.idB(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.ef(0,w*7,0,1)
s.fG(Math.sin(t)*0.32)
s.kh(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jV(w,w,w,1)
return B.fw(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dP(B.ed(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.t(s*14,w*10))
default:s=Math.sin(t)
return B.d9(B.ed(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:61}
C.f0b.prototype={
$1(d){var w
$.S()
w=B.I()
w.b=A.ab
w.c=d
w.e=A.dT
return w},
$S:1716}
C.fIh.prototype={
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
if(q==="framed"||q==="gold")w.push(B.b4(r,r,r,new C.bsE(u,t,r),A.ax))
w.push(B.nD(s.d,A.ap,new C.bgB(u,t,r)))
if(!p)w.push(B.b4(r,r,r,new C.brC(u,q,t,r),A.ax))
return B.at(new B.a6(v.a,v.b,new B.an(A.a_,r,A.b0,A.t,w,r),r),r,r,r)},
$S:222}
C.fxc.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:322}
C.eC8.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.De(t.a.a.c),$async$$0)
case 3:s=e
r=J.a5(s)
if(r.gan(s)){u=null
w=1
break}u=r.dK(s,new C.eC6(),new C.eC7(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1717}
C.eC6.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:193}
C.eC7.prototype={
$0(){return J.fq(this.a)},
$S:1719}
C.eyw.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eyx.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eyy.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eA6.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ezV.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.ezW.prototype={
$1(d){return d.hK()},
$S:z+81}
C.exU.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eBe.prototype={
$0(){this.a.tR()},
$S:0}
C.eC4.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.E(v.b,0,u.r.length-1)
w.r=v.c
w.op()
w.Kq()},
$S:0}
C.eA4.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.E(v.b,0,u.r.length-1)
w.r=v.c
w.op()
w.Kq()},
$S:0}
C.eBS.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eBT.prototype={
$1(d){return d.b===D.cU},
$S:z+4}
C.eBU.prototype={
$1(d){return d.a},
$S:z+22}
C.eBV.prototype={
$0(){var w=this.a.r
return new B.as(new B.b9(w,A.b2,A.aO),$.au())},
$S:247}
C.eBW.prototype={
$0(){return B.k2(!0,null,!0,!0,null,null,!1)},
$S:666}
C.exi.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eC5.prototype={
$0(){},
$S:0}
C.ezd.prototype={
$0(){var w=this.a
w.e=this.b.hK()
w.f=0
w.r=null
w.db=!1
A.d.a7(w.ax)
A.d.a7(w.ay)
w.xI()
w.Kq()},
$S:0}
C.exg.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.xI()},
$S:0}
C.exh.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.xI()},
$S:0}
C.ezA.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.ezB.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a7(w.ax)
A.d.a7(w.ay)
w.xI()
w.Kq()
w.z="Home"},
$S:0}
C.ezC.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ezc.prototype={
$1(d){var w=null
return B.en(B.a([B.bN(!1,A.Vc,w,w,!0,w,w,w,new C.ezb(d),w,w)],x.p),w,w,w,D.fPm,w,w,w,w,D.fvP,w)},
$S:18}
C.ezb.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.ez9.prototype={
$1(d){var w=null
return B.en(B.a([B.bN(!1,A.Vc,w,w,!0,w,w,w,new C.ez8(d),w,w)],x.p),w,w,w,D.fA3,w,w,w,w,D.fxH,w)},
$S:18}
C.ez8.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.eza.prototype={
$0(){},
$S:0}
C.eys.prototype={
$1(d){return this.a.b1e(C.bDF(d))},
$S:z+7}
C.eyt.prototype={
$1(d){return this.a.afO(C.bDF(d))},
$S:z+7}
C.ezj.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aZ,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bu,D.fPq,A.au,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bu,new C.Q7(A.we,D.az7,"HATI YA KUHOWA","Hati ya mahari",new C.eze(d),w),A.W,new C.Q7(A.hj,D.dcm,"HATI YA KUHOWESHA","Hati ya kupokea",new C.ezf(d),w),A.W,new C.Q7(A.i0,D.cYb,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.ezg(d),w),A.W,new C.Q7(A.i1,D.cWf,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.ezh(d),w)],v)
if(this.a.gac9())A.d.v(u,B.a([A.W,new C.Q7(A.jk,D.cHb,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.ezi(d),w)],v))
return B.bl(!0,B.cg(B.x(u,A.ak,w,A.e,A.P,0,A.p),A.t,w,A.y,w,E.yk,w,w,A.ag),!0,!1,A.af,!0,!0)},
$S:27}
C.eze.prototype={
$0(){B.a4(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.ezf.prototype={
$0(){B.a4(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.ezg.prototype={
$0(){B.a4(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.ezh.prototype={
$0(){B.a4(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.ezi.prototype={
$0(){B.a4(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.ezk.prototype={
$0(){var w=this.a
w.e=this.b.hK()
w.f=0
w.r=null
w.db=!0
A.d.a7(w.ax)
A.d.a7(w.ay)
w.xI()},
$S:0}
C.exk.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.exl.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a7(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.nm(r,v.f+1,q);++v.f
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
C.ezv.prototype={
$1(d){return d.b===D.lM},
$S:z+4}
C.ezw.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gI(v).go
w.b=A.d.gI(v).id
return new B.e0(new C.ezt(w,this.a,v),null)},
$S:19}
C.ezt.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.ezu(p,o,a3,n),l=B.P(a2).ax.a===A.J,k=l?A.c:A.M,j=l?A.aR:A.al,i=l?A.bo:A.bN,h=l?A.M:A.c,g=B.m(28),f=B.J(l?A.bz:A.aL,A.r,1),e=x.p,d=B.B(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bD,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.E,q,A.e,A.i,0,A.p),1),B.aF(q,q,q,q,B.X(A.cz,j,q,q,q,q),q,q,q,new C.ezp(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.i,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.CP[w]
v.a=null
t=v.a=u.a
a1.push(new C.bj7(t,u.b,p.a===t,i,k,new C.ezq(v,m),q))}a1=B.bX(A.bC,a1,A.bq,q,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.CJ[w]
s.a=null
t=s.a=r.a
u.push(new C.bj6(t,r.b,p.b===t,k,j,new C.ezr(s,m),q))}return B.bl(!0,B.p(q,B.cg(B.x(B.a([d,A.aN,a0,A.W,a1,A.bu,v,A.W,B.bX(A.bC,u,A.bq,q,12,12),A.bu,new B.a6(1/0,48,B.et(D.bZG,D.fRS,new C.ezs(o,n),B.di(q,q,q,q,q,q,q,q,q,A.aD,q,q,q,q,new B.b7(B.m(16),A.a0),D.b2f,q,q,q,q)),q)],e),A.E,q,A.e,A.P,0,A.p),A.t,q,A.y,q,q,q,q,A.ag),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.u5,D.bAp,q,q,q),!0,!1,A.af,!0,!0)},
$S:85}
C.ezu.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.ezn(w.a,d,e))
w.b.d8(new C.ezo(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1722}
C.ezn.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.ezo.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.ezp.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.ezq.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.ezr.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.ezs.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A5.H4(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d8(new C.ezm(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ezm.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.ezy.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.ezz.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bs(v,new C.ezx(t.d))
u=A.o.E(s.a,0,v.length)
s.a=u
s=t.e
A.d.nm(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.E(s.f,0,v.length-1)
s.r=null
s.xI()},
$S:0}
C.ezx.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.ezQ.prototype={
$1(d){return d.b===D.cU},
$S:z+4}
C.ezR.prototype={
$1(d){return d.w},
$S:z+82}
C.ezS.prototype={
$2(d,e){return d>e?d:e},
$S:80}
C.ezT.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.J,t=u?A.c:A.M,s=u?A.aR:A.al,r=u?A.bo:A.aP,q=u?A.M:A.c,p=B.m(28),o=B.J(u?A.bz:A.aL,A.r,1),n=B.aJ(d,A.bX,x.w).w,m=w.a,l=x.p,k=w.b
return B.bl(!0,B.p(v,B.x(B.a([B.B(B.a([B.p(v,D.bTa,A.f,v,v,D.b3C,v,38,v,v,v,v,v,38),A.bd,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.E,v,A.e,A.i,0,A.p),1),B.aF(v,v,v,v,B.X(A.cz,s,v,v,v,v),v,v,v,new C.ezN(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.i,0,v,v),A.aA,new B.ds(1,A.cn,B.hO(v,new C.ezO(m,k,w.c,s,w.d,t,r),k.length,A.fB,v,A.ag,new C.ezP(),!0),v)],l),A.E,v,A.e,A.P,0,A.p),A.f,v,new B.aZ(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.u5,A.a_r,v,v,v),!0,!1,A.af,!0,!0)},
$S:27}
C.ezN.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.ezP.prototype={
$2(d,e){return A.ad},
$S:36}
C.ezO.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aD:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cy
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aF(q,q,q,q,D.bWt,q,q,q,new C.ezL(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bCF,n,q),B.aL(q,A.Y,!1,q,!0,A.t,q,B.aM(),v,q,q,q,q,q,2,B.br(q,new B.b5(4,B.m(16),A.a0),q,A.eT,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b5(4,B.m(16),D.b1V),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ai,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.ezM(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a9,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a3,q,A.an,q,q,q,q)],x.p),A.E,q,A.e,A.i,0,A.p)},
$S:665}
C.ezL.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.ijr(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geM()?p.a:q.a.length
n=p.geM()?p.b:q.a.length
m=A.a.oW(q.a,o,n,s)
r.bK(0,new B.b9(m,B.hk(A.by,o+s.length),A.aO))
l.ajP(k,m)
l.py()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ezM.prototype={
$1(d){var w=this.a
w.ajP(this.b.a,d)
w.py()},
$S:2}
C.ezU.prototype={
$0(){},
$S:0}
C.ezl.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.exB.prototype={
$0(){},
$S:0}
C.exC.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hw9(this.b,w,!0)
w=this.a
w.r=null
w.xI()},
$S:0}
C.exD.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.exE.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bs(v,new C.exA(t.d))
u=A.o.E(s.a,0,v.length)
s.a=u
s=t.e
A.d.nm(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.E(s.f,0,v.length-1)
s.r=null
s.xI()},
$S:0}
C.exA.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eA_.prototype={
$1(d){return B.p3(new C.ezZ(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:134}
C.ezZ.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.al0,B.x(B.a([D.fMR,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.E,w,A.e,A.i,0,A.p),w),B.E(B.iy(!0,w,e,A.y,D.f7x,new C.ezY(this.a,this.b),20,A.u8,w,A.ag,!1),1)],v),A.ak,w,A.e,A.i,0,A.p)},
$S:396}
C.ezY.prototype={
$2(d,e){var w=null,v=D.HQ[e],u=C.hP_(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.J(q.j(0.45),A.r,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fQ,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bm,B.p(w,D.f17,A.f,w,w,new B.o(A.dF.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.mK,w,w,w)],m))
return B.aH(!1,A.a2,!0,w,B.aO(!1,t,!0,B.p(w,B.x(B.a([B.B(n,A.m,w,A.e,A.i,0,w,w),A.b1,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a9(A.a5,A.a8,A.x,r,w,w),A.n),w,w,w,w,A.bf,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ezX(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:78}
C.ezX.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.ciI(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a4(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eA0.prototype={
$0(){var w=this.a
w.e=this.b.hK()
w.f=0
w.r=null
w.db=!0
A.d.a7(w.ax)
A.d.a7(w.ay)
w.xI()},
$S:0}
C.ewf.prototype={
$0(){var w,v=this.a,u=v.gqE(),t=C.rH(4294967295,null,0,0,null,C.cF(),D.mT,"","","",D.dh),s=this.b
C.ciV(t,s,u)
w=v.gdw()
if(w!=null&&s!==D.Dq){t.e=w.e
t.f=w.f}A.d.c3(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.exz.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ag()
q.n(0,"id",C.cF())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aW(w),u=x.f;v.C();){t=v.gT(v)
if(u.b(t)){s=Date.now()
r=$.j3
$.j3=r+1
J.aI(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c3(v.e.r,v.f+1,C.hja(q));++v.f},
$S:0}
C.exx.prototype={
$0(){var w=this.a
A.d.cA(w.e.r,w.f)
w.f=A.o.E(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eA8.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cA(v.e.r,u),s=this.c
A.d.c3(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.ext.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bs(v.d,new C.exs(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.exs.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eA7.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.V(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.exj.prototype={
$0(){var w=this.a.r
return new B.as(new B.b9(w,A.b2,A.aO),$.au())},
$S:247}
C.exV.prototype={
$0(){return B.k2(!0,null,!0,!0,null,null,!1)},
$S:666}
C.eBQ.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.eBR.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.aui(w).fR()
v=u.X7(w)
v.stB(B.hk(A.by,v.a.a.length))},
$S:9}
C.eBf.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Y6(v)
if(u!=null&&u.b===D.cU)w.X7(u).saX(0,u.r)}else w.w=null},
$S:0}
C.ewg.prototype={
$0(){var w=C.cF(),v=this.a,u=C.es(A.bi,!1,v.gqE().e.l(),A.aF,"",4280640491,24,A.bp,A.a7,"",0.22,w,null,"","",0,!1,"",0,D.bh,4280172719,2,"Tap to edit text",0,0,"",D.cm,D.cU,0.7,0.15,0.2)
A.d.M(v.gdw().z,u)
v.r=u.a},
$S:0}
C.ewd.prototype={
$0(){var w=C.cF(),v=this.a,u=C.es(A.bi,!1,4279310375,A.aF,"",v.gqE().c.j(0.25).l(),24,A.bp,A.a7,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqE().c.l(),2,"",0,0,"",D.cm,D.fa,0.25,0.3,0.3)
A.d.M(v.gdw().z,u)
v.r=u.a},
$S:0}
C.ew3.prototype={
$0(){var w=C.es(A.bi,!1,4279310375,A.aF,"",4280640491,24,A.bp,A.a7,"",0.55,C.cF(),this.b,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cm,D.lM,0.6,0.2,0.18),v=this.a
A.d.M(v.gdw().z,w)
v.r=w.a},
$S:0}
C.ew0.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.c5E],x.p)
for(w=J.aW(this.a);w.C();){v=w.gT(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gaks().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dy(!1,r,r,r,!0,r,r,r,!0,r,r,D.bQQ,r,r,r,r,new C.ew_(d,v),!1,r,r,r,r,r,new B.y(""+t+" links"+s,r,r,r,r,r,r,A.a1,r,1,r,r),r,new B.y(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bl(!0,B.cf(q,r,r,r,r,A.ag,!0),!0,!1,A.af,!0,!0)},
$S:27}
C.ew_.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.ew1.prototype={
$0(){var w=A.k.E(0.23131034482758622,0.12,0.5),v=C.cF(),u=this.b,t=A.X.ap(u.ag(),null),s=C.es(A.bi,!1,4279310375,A.aF,u.b,4280640491,24,A.bp,A.a7,"",0.86,v,null,"","",0,!1,"",0,D.bh,4280172719,2,t,0,0,"",D.cm,D.a6W,w,0.5-w/2,0.07)
t=this.a
A.d.M(t.gdw().z,s)
t.r=s.a},
$S:0}
C.exv.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.exw.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bs(v.gdw().z,new C.exu(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.S$=$.au()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.exu.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.ewI.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cU)s.Q=t.c.l()
else if(w===D.fa){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.ewJ(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.M)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.ewJ.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.ewN.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.ewO(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.M)(s),++u)v.$1(s[u])}else{t=s.gdw()
if(t!=null)v.$1(t)}},
$S:0}
C.ewO.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.ewL.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cU){s.Q=t.c
return}w=new C.ewM(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.M)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.ewM.prototype={
$1(d){var w,v,u
for(w=A.d.gaf(d.z),v=new B.f5(w,new C.ewK()),u=this.a;v.C();)w.gT(0).Q=u},
$S:z+1}
C.ewK.prototype={
$1(d){return d.b===D.cU},
$S:z+4}
C.ewH.prototype={
$0(){return C.ciV(this.b,this.c,this.a.gqE())},
$S:0}
C.ezK.prototype={
$0(){return A.d.c3(this.a.d,0,this.b)},
$S:0}
C.eBZ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eC_.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eC0.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eC1.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c3(s,0,v.b)
else{w=A.d.bg(s,new C.eBY(v))
if(w>=0)t.d[w]=v.b}if(v.a.gSK()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hK()
t.f=0
t.r=null
t.db=!1
A.d.a7(t.ax)
A.d.a7(t.ay)
t.xI()
t.Kq()}},
$S:0}
C.eBY.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eBv.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acd(),s=w.b,r=u.ace(A.fg,A.kj,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.J(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.O,r,A.bu,B.p(v,B.B(B.a([B.E(u.aW6(w.c,A.al),1),new B.D(A.fC,B.p(v,D.bQW,A.f,v,v,new B.o(A.fg.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.E(u.aW6(s,A.fg),1)],n),A.m,v,A.e,A.i,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a9(A.ay,A.aE,A.x,p,v,v),A.n),v,v,v,v,A.bA,v,v,v),A.bu,u.aW9(A.fg,d,D.bN0,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.W,u.bZN(A.aQ,d,A.um,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aA)
p.push(u.aW7(d,"Not now"))
return new C.Kl(B.x(p,A.ak,v,A.e,A.P,0,A.p),v)},
$S:z+9}
C.eBu.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.Kl(B.x(B.a([v.acd(),A.O,v.ace(A.aQ,D.bMG,"Pick which saved document should receive the details.","Choose "+this.b),A.aN,new B.cU(new B.aZ(0,1/0,0,B.aJ(d,A.bX,x.w).w.a.b*0.42),B.hO(w,new C.eBs(v,u,d),u.length,w,w,A.ag,new C.eBt(),!0),w),A.aA,v.aW7(d,"Cancel")],x.p),A.ak,w,A.e,A.P,0,A.p),w)},
$S:z+9}
C.eBt.prototype={
$2(d,e){return A.W},
$S:36}
C.eBs.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.J(A.c.j(0.08),A.r,1),q=x.p
return B.aH(!1,A.a2,!0,w,B.aO(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.apO,A.f,w,w,new B.o(w,w,w,B.m(12),w,D.c2B,A.n),w,42,w,w,w,w,w,42),A.bd,B.E(B.x(B.a([B.d(v.b,w,1,A.a1,w,w,w,A.n0,w,w,w),A.cL,B.d("Updated "+this.a.Qk(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.E,w,A.e,A.i,0,A.p),1),B.X(A.eE,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bA,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eBr(this.c,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.aj)},
$S:78}
C.eBr.prototype={
$0(){B.a4(this.a,!1).O(this.b.a)
return null},
$S:0}
C.eBo.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.acd()
t=t.ace(A.aC,A.uw,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.Kl(B.x(B.a([s,A.O,t,A.bu,B.B(B.a([B.E(B.dI(A.aak,new C.eBm(d),B.di(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cl,u,new B.b7(B.m(14),A.a0),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.at,B.E(B.bE(D.fyh,u,new C.eBn(d),B.bo(A.fg,u,u,u,A.c,u,A.cl,u,new B.b7(B.m(14),A.a0),u,u,u)),1)],v),A.m,u,A.e,A.i,0,u,u)],v),A.ak,u,A.e,A.P,0,A.p),u)},
$S:z+9}
C.eBm.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.eBn.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.eBq.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acd(),s=w.b,r=u.ace(A.aW,A.ef,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.E(u.avD("Names",""+w.c),1),A.ac,B.E(u.avD("Fields",""+w.d),1),A.ac,B.E(u.avD("Signatures",""+w.e),1)],q),A.m,v,A.e,A.i,0,v,v),o=B.bo(A.bk,v,v,v,A.c,v,A.y9,v,new B.b7(B.m(14),A.a0),v,v,v)
return new C.Kl(B.x(B.a([t,A.O,r,A.aN,p,A.bu,B.bE(B.d("Open "+s,v,v,v,v,v,v,A.nJ,v,v,v),v,new C.eBp(d),o),A.W,u.aW8(d,"Stay here",!1)],q),A.ak,v,A.e,A.P,0,A.p),v)},
$S:z+9}
C.eBp.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.eyo.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.eyn.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.eBg.prototype={
$1(d){return d.b===D.cU},
$S:z+4}
C.eBP.prototype={
$1(d){var w=this.a,v=this.b
return new C.a07(A.d.dK(w.d,new C.eBN(v),new C.eBO(v)).hK(),w.f,null)},
$S:z+84}
C.eBN.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eBO.prototype={
$0(){return this.a},
$S:z+85}
C.ew8.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bA,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.fT,w,w,w),w),B.dy(!1,w,w,w,!0,w,w,w,!0,w,w,D.bSJ,w,w,w,w,new C.ew6(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fwd,w,w,w)],x.p)
if(v>1)t.push(B.dy(!1,w,w,w,!0,w,w,w,!0,w,w,D.bTY,w,w,w,w,new C.ew7(d),!1,w,w,w,w,w,D.fT8,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.d9,w,w,w),w,w,w))
return B.bl(!0,B.x(t,A.m,w,A.e,A.P,0,A.p),!0,!1,A.af,!0,!0)},
$S:27}
C.ew6.prototype={
$0(){B.a4(this.a,!1).O("scroll")
return null},
$S:0}
C.ew7.prototype={
$0(){B.a4(this.a,!1).O("split")
return null},
$S:0}
C.ew9.prototype={
$0(){var w=this.b,v=w.c,u=C.es(A.bi,!1,4279310375,A.aF,v,4280640491,24,A.bp,A.a7,"",0.84,C.cF(),w.b,"","",0,!1,"",0,D.bh,4280172719,2,v,0,0,"",D.cm,D.SQ,0.88,0.06,0.08)
v=this.a
A.d.M(v.gdw().z,u)
v.r=u.a},
$S:0}
C.ewa.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.j3
$.j3=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.j3
$.j3=k+1
m.push(new C.eO(""+1000*l+"_"+k,D.SQ,0.04,0.06,0.92,0.88,v,24,A.a7,A.bp,A.aF,4279310375,A.bi,u,D.bh,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cm,0,"","","","","",!1,0))
A.d.c3(j.e.r,i+q-1,new C.lR(""+1000*p+"_"+o,r+n,"",D.qC,4294967295,null,D.dh,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.ewe.prototype={
$0(){var w,v=C.cF(),u=this.a,t=u.e
t=(t==null?null:C.kH(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.es(A.bi,!1,4279310375,A.aF,t,4280640491,24,A.bp,A.a7,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cm,D.lj,0.35,0.55,0.62)
A.d.M(u.gdw().z,w)
u.r=w.a},
$S:0}
C.ew5.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b3X(o)
w=C.cF()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.es(A.bi,!1,4279310375,A.aF,"marriage_sign_placed_"+A.a.ea(v.db,"marriage_sign_",""),4280640491,24,A.bp,A.a7,"",r,w,o.a,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cm,D.lj,s,u,t)
A.d.M(p.gdw().z,q)
A.d.bs(p.gdw().z,new C.ew4(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.idk(p)}},
$S:0}
C.ew4.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eA5.prototype={
$0(){var w=this.a,v=this.b
w.b3X(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eBX.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.eyr.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bs(r.z,new C.eyq())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eyq.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.ewR.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.ewS.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.tR()},
$S:9}
C.ew2.prototype={
$0(){var w=C.es(A.bi,!1,4279310375,A.aF,"HD Photo",4280640491,24,A.bp,A.a7,"",0.8,C.cF(),this.b,"","",0,!1,"",0,D.bh,4280172719,2,"",0,0,"",D.cm,D.lM,0.8,0.1,0.1),v=this.a
A.d.M(v.gdw().z,w)
v.r=w.a},
$S:0}
C.exT.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.ewb.prototype={
$0(){var w=this.a,v=this.b
A.d.M(w.gdw().z,v)
w.r=v.a},
$S:0}
C.ewk.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.ewl.prototype={
$0(){var w=this.b.hK(),v=C.cF(),u=A.k.E(w.c+0.04,0,0.92),t=A.k.E(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.es(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.M(t.gdw().z,f)
t.r=f.a},
$S:0}
C.ewm.prototype={
$0(){var w=this.a.gdw().z,v=this.b,u=A.d.bg(w,new C.ewj(v))
if(u>=0&&u<w.length-1){A.d.cA(w,u)
A.d.c3(w,u+1,v)}},
$S:0}
C.ewj.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ewx.prototype={
$0(){var w=this.a.gdw().z,v=this.b,u=A.d.bg(w,new C.ewi(v))
if(u>0){A.d.cA(w,u)
A.d.c3(w,u-1,v)}},
$S:0}
C.ewi.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ewA.prototype={
$0(){return this.a.as=A.bi},
$S:0}
C.ewB.prototype={
$0(){return this.a.as=A.K},
$S:0}
C.ewC.prototype={
$0(){return this.a.as=A.dW},
$S:0}
C.ewD.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.ewE.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.ewF.prototype={
$1(d){return d.b===D.cU},
$S:z+4}
C.ewG.prototype={
$1(d){return d.length!==0},
$S:3}
C.ewn.prototype={
$0(){var w=this.a,v=w.gdw().z,u=C.cF()
A.d.M(v,C.Dj(w.gqE().c.j(0.18).l(),0.1,u,D.bh,0,2,1,0,0))
u=w.gdw().z
v=C.cF()
A.d.M(u,C.iZ(A.bi,!1,w.gqE().d.l(),A.aF,18,A.bp,A.H,0.07,v,"Document Header",0,D.dh,0.9,0.05,0.02))},
$S:0}
C.ewo.prototype={
$0(){var w,v=this.a,u=v.gdw().z,t=C.cF()
A.d.M(u,C.Dj(v.gqE().c.j(0.12).l(),0.1,t,D.bh,0,2,1,0,0.9))
t=v.gdw().z
u=C.cF()
w=C.bEn()
A.d.M(t,C.iZ(A.K,!1,v.gqE().e.l(),A.aF,12,A.bp,A.a7,0.06,u,"Footer \xb7 "+w,0,D.dh,0.9,0.05,0.92))},
$S:0}
C.ewp.prototype={
$0(){A.d.M(this.a.gdw().z,C.Dj(1727914055,0.12,C.cF(),D.bh,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.ewq.prototype={
$0(){var w=4279310375
A.d.M(this.a.gdw().z,C.Dj(w,0.08,C.cF(),D.bh,w,2,0.5,0.2,0.4))},
$S:0}
C.ewr.prototype={
$0(){var w=this.a,v=w.gdw().z,u=C.cF()
A.d.M(v,C.Dj(w.gqE().c.j(0.35).l(),0.12,u,D.Dr,4280640491,2,0.2,0.15,0.55))
A.d.M(w.gdw().z,C.iZ(A.bi,!1,4279310375,A.aF,18,A.bp,A.a7,0.15,C.cF(),"Important note",0,D.qD,0.5,0.38,0.52))},
$S:0}
C.ews.prototype={
$0(){var w=this.a
A.d.M(w.gdw().z,C.Dj(4294507260,0.78,C.cF(),D.bh,4291548641,1.5,0.84,0.08,0.1))
A.d.M(w.gdw().z,C.iZ(A.bi,!1,4279179050,A.aF,16,A.bp,A.a7,0.7,C.cF(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bEn()+"\n\nSubject:\n\nBody text\u2026",0,D.dh,0.76,0.12,0.14))},
$S:0}
C.ewt.prototype={
$0(){var w=this.a
A.d.M(w.gdw().z,C.Dj(4294897802,0.28,C.cF(),D.bh,4294626325,2,0.3,0.62,0.12))
A.d.M(w.gdw().z,C.iZ(A.bi,!1,4285611794,A.aF,15,A.bp,A.a7,0.24,C.cF(),"Sticky note",0,D.aIU,0.26,0.64,0.14))},
$S:0}
C.ewu.prototype={
$0(){var w=4280640491,v=this.a
A.d.M(v.gdw().z,C.Dj(4293060848,0.04,C.cF(),D.bh,4291548641,2,0.8,0.1,0.48))
A.d.M(v.gdw().z,C.Dj(w,0.04,C.cF(),D.bh,w,2,0.55,0.1,0.48))},
$S:0}
C.ewv.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdw().z,C.iZ(A.bi,!1,w,A.aF,18,A.bp,A.a7,0.62,C.cF(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.IN,0.42,0.06,0.18))
A.d.M(v.gdw().z,C.iZ(A.bi,!1,w,A.aF,18,A.bp,A.a7,0.62,C.cF(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.uR,0.42,0.52,0.18))},
$S:0}
C.eww.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdw().z,C.Dj(858088427,0.62,C.cF(),D.bh,4280640491,2,0.42,0.05,0.18))
A.d.M(v.gdw().z,C.Dj(856004201,0.62,C.cF(),D.bh,4278556265,2,0.42,0.53,0.18))
A.d.M(v.gdw().z,C.iZ(A.bi,!1,w,A.aF,20,A.bp,A.H,0.1,C.cF(),"Option A",0,D.dh,0.36,0.08,0.2))
A.d.M(v.gdw().z,C.iZ(A.bi,!1,w,A.aF,20,A.bp,A.H,0.1,C.cF(),"Option B",0,D.dh,0.36,0.56,0.2))},
$S:0}
C.ewy.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdw().z,C.Dj(4294967295,0.36,C.cF(),D.bh,w,2,0.24,0.38,0.28))
A.d.M(v.gdw().z,C.iZ(A.K,!1,w,A.aF,14,A.bp,A.a7,0.12,C.cF(),"[ QR CODE ]",0,D.dh,0.24,0.38,0.4))},
$S:0}
C.ewz.prototype={
$0(){return C.ciV(this.b,D.SR,this.a.gqE())},
$S:0}
C.exS.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a8I.t(0,d),t=this.a
return t.b95(d,v===d,A.b_,this.c,new C.exR(t,u,d,w),u)},
$S:z+25}
C.exR.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.oe(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bF9(r,new C.exQ(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.exQ.prototype={
$0(){return this.a.d8(new C.exP(this.b,this.c))},
$S:0}
C.exP.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.ewc.prototype={
$0(){var w,v=this.a,u=v.gqE(),t=C.rH(4294967295,null,0,0,null,C.cF(),D.mT,"","","",D.dh),s=this.b
C.ciV(t,s,u)
w=v.gdw()
if(w!=null&&s!==D.Dq){t.e=w.e
t.f=w.f}A.d.c3(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.ewV.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.iju(p,q.d,s,new C.ewU(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.tR(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ewU.prototype={
$1(d){return this.bm0(d)},
bm0(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.ewT(t,d))
w=2
return B.b(t.tR(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.ewT.prototype={
$0(){var w,v,u
for(w=J.aW(this.b),v=this.a;w.C();){u=w.gT(w)
A.d.c3(v.d,0,u)}},
$S:0}
C.ewW.prototype={
$0(){return this.a.bKm()},
$S:0}
C.ewX.prototype={
$0(){return this.a.aRj("Class Presentation",!0)},
$S:0}
C.ewY.prototype={
$1(d){return this.a.bLi(d.b,this.b,d.a)},
$S:z+88}
C.exy.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aJ(w,A.bX,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.ezJ.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aJ(d,A.eN,x.w).w.f.d),new B.e0(new C.ezI(this.a,this.b),null),null)},
$S:62}
C.ezI.prototype={
$2(d,e){return B.p3(new C.ezH(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:556}
C.ezH.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.av:A.c,s=B.J(u?A.bz:A.aL,A.r,1),r=B.p(v,v,A.f,v,v,new B.o(A.aZ,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.x(B.a([A.W,r,new B.D(A.akq,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b1,B.bN(!1,A.Al,v,v,!0,v,v,v,new C.ezF(w.c),v,v)],q),A.m,v,A.e,A.i,0,v,v),v),B.E(B.cf(B.a([p.aU3(u,!0,!0,new C.ezG(p,w.d))],q),e,D.by8,v,v,A.ag,!1),1)],q),A.m,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(t,v,s,A.kX,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:119}
C.ezF.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.ezG.prototype={
$0(){this.b.$1(new C.ezD())
var w=this.a
if(w.c!=null)w.m(new C.ezE())},
$S:0}
C.ezD.prototype={
$0(){},
$S:0}
C.ezE.prototype={
$0(){},
$S:0}
C.eBh.prototype={
$3(d,e,f){return A.bJ},
$C:"$3",
$R:3,
$S:94}
C.eBi.prototype={
$4(d,e,f,g){var w=A.cu.av(0,e.gp(0))
return B.d9(B.ed(A.A,new C.aA_(this.a,null),0.94+w*0.06,null,null),w)},
$S:395}
C.eBj.prototype={
$3(d,e,f){return A.bJ},
$C:"$3",
$R:3,
$S:94}
C.eBk.prototype={
$4(d,e,f,g){var w=A.cu.av(0,e.gp(0))
return B.d9(B.ed(A.A,new C.bep(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:395}
C.eBl.prototype={
$0(){return A.d.c3(this.a.d,0,C.Wv(this.b))},
$S:0}
C.ewh.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dx.av(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.av.j(0.72)],t):B.a([A.c.j(0.88),A.pS.j(0.75)],t)
r=B.J(A.b3.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.b3.j(0.35+q),A.cg.j(0.18),A.L],t)
q=B.J(A.b3.j(0.45+q),A.r,1)
t=B.p(p,B.X(A0.a1g,u?A.ae:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.c2(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bx(o,B.ui(A.fL,B.p(p,B.x(B.a([t,A.aA,q,A.am,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aB:A.al,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],x.p),A.m,p,A.e,A.i,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a9(A.ay,A.aE,A.x,s,p,p),A.n),p,p,p,p,A.em,p,p,1/0),14,!1),A.ap)},
$S:298}
C.exm.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.exn.prototype={
$1(d){return d.length!==0},
$S:3}
C.exo.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.jV
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a1S:A.C4}return w},
$S:652}
C.exr.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dx.av(0,A.k.F(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.av.j(0.78)],s):B.a([A.c.j(0.92),A.n8.j(0.82)],s)
r=m.e
q=A.d.gI(r)
p=t?0.34:0.26
p=B.J(q.j(p+w*0.22),A.r,1.25)
q=B.m(10)
q=B.p(l,B.X(C.kH(v.w)?A.we:A.qp,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a9(A.a5,A.a8,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.Qk(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.Qk(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.Qk(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.w(n)+" \u2022 Updated "+k.Qk(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.Qk(v.f)
r=k.bLg(n,A.d.gI(r),t)
return B.p(l,B.bx(j,new B.a8s(B.aH(!1,A.a2,!0,l,B.aO(!1,l,!0,B.p(l,B.dy(!1,A.Nm,l,l,!0,l,l,l,!0,l,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aF(l,l,l,l,B.X(A.ok,t?A.aB:A.bM,l,l,l,l),l,l,l,new C.exp(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a9(A.ay,A.aE,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.exq(k,v),l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.aj),l),A.ap),A.f,l,l,l,l,l,l,A.d2,l,l,l,l)},
$S:95}
C.exq.prototype={
$0(){return this.a.afO(this.b)},
$S:0}
C.exp.prototype={
$0(){return this.a.B_(this.b,this.c)},
$S:0}
C.eyS.prototype={
$0(){var w=this.a
w.b7E()
w.m(new C.eyR())},
$S:0}
C.eyR.prototype={
$0(){},
$S:0}
C.eyT.prototype={
$1(d){return this.a.ajP(this.b.a,d)},
$S:2}
C.eyU.prototype={
$0(){this.a.d8(new C.eyQ(this.b))},
$S:0}
C.eyQ.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.Q)?A.cy:A.Q},
$S:0}
C.eyV.prototype={
$0(){this.a.d8(new C.eyP(this.b))},
$S:0}
C.eyP.prototype={
$0(){var w=this.a
return w.y=w.y===A.cE?A.bp:A.cE},
$S:0}
C.eyW.prototype={
$0(){this.a.d8(new C.eyO(this.b))},
$S:0}
C.eyO.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aF:A.mZ},
$S:0}
C.eyX.prototype={
$0(){this.a.d8(new C.eyN(this.b))},
$S:0}
C.eyN.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eyY.prototype={
$0(){var w=this.a
w.d8(new C.eyM(w,this.b))},
$S:0}
C.eyM.prototype={
$0(){var w=this.b
return w.as=this.a.c5G(w.as)},
$S:0}
C.eyZ.prototype={
$0(){return this.a.d8(new C.eyL(this.b))},
$S:0}
C.eyL.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.ez_.prototype={
$0(){return this.a.d8(new C.eyK(this.b))},
$S:0}
C.eyK.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.eyD.prototype={
$0(){return this.a.a2I(this.b.a)},
$S:0}
C.eyE.prototype={
$0(){this.a.a0d()
return null},
$S:0}
C.eyF.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aJ(v,A.bX,x.w).w.a.a<900)w.ag6()
else w.m(new C.eyC(w))},
$S:0}
C.eyC.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eyG.prototype={
$0(){this.a.d8(new C.eyB(this.b))},
$S:0}
C.eyB.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.Q)?A.cy:A.Q},
$S:0}
C.eyH.prototype={
$0(){return this.a.d8(new C.eyA(this.b))},
$S:0}
C.eyA.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.eyI.prototype={
$0(){return this.a.d8(new C.eyz(this.b))},
$S:0}
C.eyz.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.eyJ.prototype={
$0(){return this.a.aAE(null)},
$S:0}
C.exL.prototype={
$0(){this.a.DO()
return null},
$S:0}
C.exM.prototype={
$0(){this.a.aaK()
return null},
$S:0}
C.exO.prototype={
$1(d){return this.bm1(d)},
bm1(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.Kh(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bV(A.av,null,new C.exG(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d8(new C.exH(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d8(new C.exI(r))
s=s.c.K(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d8(new C.exJ(r))
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
return B.b(C.hxp(q,new C.EW(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d8(new C.exK(r,p))
s=s.c.K(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.aht(q)
q=B.w(q==null?null:q.b)+" will play after your last slide."}s.U(B.b3(null,null,null,null,null,A.t,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:98}
C.exG.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.em9],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bSS:r
q.push(B.dy(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,r,new C.exF(d,t),!1,r,r,r,r,r,r,r,new B.y(""+t+" seconds",r,A.d9,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bl(!0,B.x(q,A.m,r,A.e,A.P,0,A.p),!0,!1,A.af,!0,!0)},
$S:27}
C.exF.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.exH.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.exI.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.exJ.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.exK.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.exN.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.A4(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.A4(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.A4(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.aht(r?t:s.db)
s=s==null?t:s.b
return B.a([D.erK,q,v,u,B.A4(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:140}
C.eC2.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bEk(w,v)}},
$S:0}
C.eC3.prototype={
$0(){this.a.DO()
return null},
$S:0}
C.ez2.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.c2v:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bN
if(s)v=A.c
else v=this.b?A.aR:A.br
return new B.D(A.fB,B.aB(u,B.dd(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b5,new B.o(w,u,u,r,u,q,A.n),A.eO,u,u,u,A.lD,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.ez1(t,d),u,u,u,u,u,u,!1,A.a4),u)},
$S:135}
C.ez1.prototype={
$0(){var w=this.a
return w.m(new C.ez0(w,this.b))},
$S:0}
C.ez0.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.ez3.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a4S:E.azd
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbOO():t.gbKH()
return B.hc(B.aB(u,B.p(u,D.apd,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gI(v).j(0.45),A.I,10)],x.V),new B.a9(A.a5,A.a8,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a4),u,s,u,u)},
$S:1727}
C.ez4.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.iiK(v,w.a.c)},
$S:0}
C.eAr.prototype={
$0(){return this.b.vr(this.a.a)},
$S:0}
C.eAs.prototype={
$0(){return this.a.vr(D.mT)},
$S:0}
C.eAt.prototype={
$0(){return this.a.vr(D.IL)},
$S:0}
C.eAE.prototype={
$0(){return this.a.vr(D.IM)},
$S:0}
C.eAP.prototype={
$0(){return this.a.vr(D.IK)},
$S:0}
C.eB_.prototype={
$0(){return this.a.qo("lab_report")},
$S:0}
C.eB6.prototype={
$0(){return this.a.qo("rubric")},
$S:0}
C.eB7.prototype={
$0(){return this.a.qo("minutes")},
$S:0}
C.eB8.prototype={
$0(){return this.a.qo("agenda")},
$S:0}
C.eB9.prototype={
$0(){return this.a.qo("timeline")},
$S:0}
C.eBa.prototype={
$0(){return this.a.qo(this.b.a)},
$S:0}
C.eAu.prototype={
$0(){this.a.Wd()
return null},
$S:0}
C.eAv.prototype={
$0(){this.a.W7()
return null},
$S:0}
C.eAw.prototype={
$0(){return this.a.qo("table")},
$S:0}
C.eAx.prototype={
$0(){return this.a.qo("sticky")},
$S:0}
C.eAy.prototype={
$0(){return this.a.qo("divider")},
$S:0}
C.eAz.prototype={
$0(){return this.a.qo("header_bar")},
$S:0}
C.eAA.prototype={
$0(){return this.a.ph(D.bh)},
$S:0}
C.eAB.prototype={
$0(){return this.a.ph(D.eU)},
$S:0}
C.eAC.prototype={
$0(){return this.a.ph(D.k0)},
$S:0}
C.eAD.prototype={
$0(){return this.a.ph(D.Dr)},
$S:0}
C.eAF.prototype={
$0(){return this.a.ph(D.k1)},
$S:0}
C.eAG.prototype={
$0(){return this.a.ph(D.lk)},
$S:0}
C.eAH.prototype={
$0(){return this.a.ph(D.fD)},
$S:0}
C.eAI.prototype={
$0(){this.a.HA()
return null},
$S:0}
C.eAJ.prototype={
$0(){this.a.NK()
return null},
$S:0}
C.eAK.prototype={
$0(){return this.a.qo("quote")},
$S:0}
C.eAL.prototype={
$0(){return this.a.a8T()},
$S:0}
C.eAM.prototype={
$0(){this.a.a0j()
return null},
$S:0}
C.eAN.prototype={
$0(){var w=this.a
return w.m(new C.eAh(w))},
$S:0}
C.eAh.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eAO.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.oe(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.eAp(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eAp.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eAQ.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.k5()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a8J.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aZ
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.J(t,A.r,v?2.5:1),s,s,new B.a9(A.a5,A.a8,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a8J.t(0,q))u.push(B.ao(s,B.p(s,D.OX,A.f,s,s,D.EJ,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fB,B.aB(s,B.hc(new B.an(A.a_,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eAo(r,d),s,s,s,s,s,s,!1,A.a4),s)},
$S:z+89}
C.eAo.prototype={
$0(){this.a.a9a(this.b)
return null},
$S:0}
C.eAR.prototype={
$0(){this.a.a99(this.b)
return null},
$S:0}
C.eAS.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hP0(d),p=this.a,o=B.m(8),n=p.gdw()
n=n==null?r:n.x
w=d.a
n=n===w?A.bk:A.aZ
v=p.gdw()
n=B.J(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.rH(4294967295,r,0,0,r,"preview_"+w,D.qC,"","","",D.dh)
C.hud(s,w)
w=x.p
u=B.a([B.bx(o,B.p(r,B.bx(t,C.hvy(s),A.ap),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.ap)],w)
if(q)u.push(B.ao(r,B.p(r,D.apP,A.f,r,r,D.EJ,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iA,B.aB(r,B.x(B.a([new B.an(A.a_,r,A.aa,A.t,u,r),A.cL,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aB:A.al,r,r,r,r,r,r,r,r,9,r,r,A.Q,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.i,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eAn(p,q,d),r,r,r,r,r,r,!1,A.a4),r)},
$S:z+90}
C.eAn.prototype={
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
return B.b(s.oe(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.d8(new C.eAd(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eAd.prototype={
$0(){return C.hud(this.a,this.b.a)},
$S:0}
C.eAq.prototype={
bm2(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a8I.t(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.oe(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bm2(d,e)},
$S:z+91}
C.eBb.prototype={
$4(d,e,f,g){var w=null,v=B.T(d).k("N<1,v>")
v=B.C(new B.N(d,new C.eBd(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.cg(B.B(v,A.m,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aM)},
$S:z+92}
C.eBd.prototype={
$1(d){var w=this
return w.a.b95(d,w.b===d,w.c,w.d,new C.eBc(w.e,d),!D.a8I.t(0,d))},
$S:z+25}
C.eBc.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eAT.prototype={
$1(d){this.b.$2(d,new C.eAm(this.a,d,this.c))
return null},
$S:z+26}
C.eAm.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bF9(u,new C.eAc(v,this.c,w),w)},
$S:0}
C.eAc.prototype={
$0(){return this.a.d8(new C.eAa(this.b,this.c))},
$S:0}
C.eAa.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eAU.prototype={
$1(d){this.b.$2(d,new C.eAl(this.a,d))
return null},
$S:z+26}
C.eAl.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fXk(u,new C.eAb(v,w),w)},
$S:0}
C.eAb.prototype={
$0(){var w=this.a
return w.d8(new C.eA9(w,this.b))},
$S:0}
C.eA9.prototype={
$0(){return this.a.gdw().r=this.b},
$S:0}
C.eAV.prototype={
$0(){var w=this.a
return w.m(new C.eAk(w))},
$S:0}
C.eAk.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eAW.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bEk(w,v)}},
$S:0}
C.eAX.prototype={
$0(){this.a.Im()
return null},
$S:0}
C.eAY.prototype={
$0(){return this.a.a8T()},
$S:0}
C.eAZ.prototype={
$0(){var w=this.a,v=w.k5()
if(v!=null&&v.b===D.cU)w.d8(new C.eAj(v))},
$S:0}
C.eAj.prototype={
$0(){var w=this.a
w.f=A.k.E(w.f*1.25,0.08,1.8)
w.e=A.k.E(w.e*1.1,0.08,1.8)},
$S:0}
C.eB0.prototype={
$0(){this.a.DO()
return null},
$S:0}
C.eB1.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.Ft(v,!0)
return null},
$S:0}
C.eB2.prototype={
$0(){this.a.d8(new C.eAi(this.b))},
$S:0}
C.eAi.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.Q)?A.cy:A.Q},
$S:0}
C.eB3.prototype={
$0(){this.a.d8(new C.eAg(this.b))},
$S:0}
C.eAg.prototype={
$0(){var w=this.a
return w.y=w.y===A.cE?A.bp:A.cE},
$S:0}
C.eB4.prototype={
$0(){this.a.d8(new C.eAf(this.b))},
$S:0}
C.eAf.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aF:A.mZ},
$S:0}
C.eB5.prototype={
$0(){this.a.d8(new C.eAe(this.b))},
$S:0}
C.eAe.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.ewQ.prototype={
$1(d){return this.bm_(d)},
bm_(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.oe(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.d8(new C.ewP(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:186}
C.ewP.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eBy.prototype={
$0(){var w=this.a
return w.d8(new C.eBx(w,this.b))},
$S:0}
C.eBx.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.E(u-1,1,120)},
$S:0}
C.eBz.prototype={
$0(){var w=this.a
return w.d8(new C.eBw(w,this.b))},
$S:0}
C.eBw.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.E(u+1,1,120)},
$S:0}
C.exY.prototype={
$0(){return this.a.d8(new C.exX(this.b))},
$S:0}
C.exX.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.exZ.prototype={
$0(){return this.a.d8(new C.exW(this.b))},
$S:0}
C.exW.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.eyv.prototype={
$1(d){var w=x.gh
w=B.C(new B.N(D.arw,new C.eyu(),w),w.k("ak.E"))
return w},
$S:z+94}
C.eyu.prototype={
$1(d){var w=null
return B.A4(B.d(d.b,w,w,w,w,w,w,A.lQ,w,w,w),48,d,x.fO)},
$S:z+95}
C.eBL.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a6(v,w?8:0,null,null)},
$S:36}
C.eBK.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kq()?q:new C.eBI(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bk
else v=r.d?A.aZ:A.cs
v=B.J(v,A.r,o?2:1)
u=r.d?A.cq:A.c
t=B.bT(0,C.hvy(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aB(q,B.p(q,new B.an(A.a_,q,A.aa,A.t,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nH,q,q,q),A.f,q,q,new B.o(A.aS,q,q,s,q,q,A.n),q,q,q,q,A.all,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eBJ(p,e),q,q,q,q,q,q,!1,A.a4)},
$S:83}
C.eBJ.prototype={
$0(){var w=this.a
return w.m(new C.eBE(w,this.b))},
$S:0}
C.eBE.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.Kq()},
$S:0}
C.eBI.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bV(null,null,new C.eBF(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eBG(q,s))
q.aSN()}else if(r==="del"){q=t.a
q.m(new C.eBH(q,s))
q.aRV()}else if(r==="up")t.a.b49(s,s-1)
else if(r==="down")t.a.b49(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eBF.prototype={
$1(d){var w=null,v=B.a([B.dy(!1,w,w,w,!0,w,w,w,!0,w,w,D.bUC,w,w,w,w,new C.eBA(d),!1,w,w,w,w,w,w,w,D.fxd,w,w,w),B.dy(!1,w,w,w,!0,w,w,w,!0,w,w,D.bUv,w,w,w,w,new C.eBB(d),!1,w,w,w,w,w,w,w,A.x1,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dy(!1,w,w,w,!0,w,w,w,!0,w,w,D.bTK,w,w,w,w,new C.eBC(d),!1,w,w,w,w,w,w,w,D.fFF,w,w,w))
if(u<this.b.r.length-1)v.push(B.dy(!1,w,w,w,!0,w,w,w,!0,w,w,D.bVS,w,w,w,w,new C.eBD(d),!1,w,w,w,w,w,w,w,D.fx1,w,w,w))
return B.bl(!0,B.x(v,A.m,w,A.e,A.P,0,A.p),!0,!1,A.af,!0,!0)},
$S:27}
C.eBA.prototype={
$0(){B.a4(this.a,!1).O("dup")
return null},
$S:0}
C.eBB.prototype={
$0(){B.a4(this.a,!1).O("del")
return null},
$S:0}
C.eBC.prototype={
$0(){B.a4(this.a,!1).O("up")
return null},
$S:0}
C.eBD.prototype={
$0(){B.a4(this.a,!1).O("down")
return null},
$S:0}
C.eBG.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eBH.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eBM.prototype={
$0(){return this.a.a8T()},
$S:0}
C.exf.prototype={
$0(){var w=this.a
w.b7E()
w.aAE(null)},
$S:0}
C.exe.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dr,24)],x.V),m=this.b
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
s=B.a([B.bx(s,B.c4(A.kS,new B.o(m.f==null?B.b1(m.e):p,p,p,p,p,r,A.n),A.bg),A.ap)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.N(r,new C.exd(this.a,e.b,e.d,q),B.T(r).k("N<1,v>")))
if(m.z.length===0)s.push(B.at(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aB:A.bM,p,p,p,p,p,p,p,p,p,p,p,A.a7,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c4(new B.an(A.a_,p,A.aa,A.f,s,new B.bG("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bg)},
$S:397}
C.exd.prototype={
$1(d){var w=this
return w.a.bGG(d,w.b,w.c,w.d)},
$S:z+23}
C.ex2.prototype={
$0(){var w=this
if(w.b){w.a.NS(w.c)
return}if(w.d){w.a.a8R(w.c)
return}if(w.e){w.a.aho(w.c)
return}if(w.f)w.a.b8c(w.c)},
$S:0}
C.ex3.prototype={
$0(){this.a.NS(this.b)
return null},
$S:0}
C.ex4.prototype={
$0(){return this.a.a2I(this.b.a)},
$S:0}
C.ex5.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.ex1(u,d,w.c,w.d))
v.I0()
v.op()
v.py()},
$S:21}
C.ex1.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.E(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.E(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.ex6.prototype={
$1(d){return this.a.ajP(this.b.a,d)},
$S:2}
C.ex8.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.h8L(w))u.a.NS(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b8c(v)},
$S:0}
C.ex7.prototype={
$0(){return this.a.a2I(this.b.a)},
$S:0}
C.ex9.prototype={
$1(d){var w=this,v=w.a
v.m(new C.ex0(w.b,d,w.c,w.d))
v.I0()
v.op()
v.py()},
$S:21}
C.ex0.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.E(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.E(v.f+u/w.d,0.04,1.8)
if(v.b===D.cU)v.w=A.k.E(v.w+u*0.15,10,120)},
$S:0}
C.exa.prototype={
$1(d){var w=this.a
w.m(new C.ex_(this.b,d))
w.I0()
w.op()
w.py()},
$S:236}
C.ex_.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.E(w.e*v,0.04,1.8)
w.f=A.k.E(w.f*v,0.04,1.8)
if(w.b===D.cU)w.w=A.k.E(w.w*v,10,120)},
$S:0}
C.exb.prototype={
$0(){var w=this.a
w.m(new C.ewZ(this.b))
w.I0()
w.op()
w.py()},
$S:0}
C.ewZ.prototype={
$0(){this.a.r=C.hv2()},
$S:0}
C.exc.prototype={
$0(){return this.a.a2I(this.b.a)},
$S:0}
C.ez6.prototype={
$0(){var w=this.a
return w.m(new C.ez5(w))},
$S:0}
C.ez5.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ez7.prototype={
$1(d){return this.a.cF1(this.b.a,d)},
$S:2}
C.eyb.prototype={
$1(d){var w
this.a.d8(d)
w=this.b
if(w!=null)w.$0()},
$S:170}
C.eyc.prototype={
$1(d){return this.a.$1(new C.eya(this.b,d))},
$S:6}
C.eya.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eyd.prototype={
$1(d){return this.a.$1(new C.ey9(this.b,d))},
$S:6}
C.ey9.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eye.prototype={
$1(d){return this.a.$1(new C.ey8(this.b,d))},
$S:6}
C.ey8.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eyf.prototype={
$1(d){return this.a.$1(new C.ey7(this.b,d))},
$S:6}
C.ey7.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eyg.prototype={
$1(d){return this.a.$1(new C.ey6(this.b,d))},
$S:6}
C.ey6.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eyh.prototype={
$1(d){return this.b.$1(new C.ey5(this.a,this.c))},
$S:8}
C.ey5.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eyi.prototype={
$1(d){return this.b.$1(new C.ey4(this.a,this.c))},
$S:8}
C.ey4.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eyj.prototype={
$1(d){var w=null,v=this.b,u=B.b1(d),t=v.Q===d,s=t?A.bk:A.cY
return B.aB(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.J(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ey3(this.a,v,d),w,w,w,w,w,w,!1,A.a4)},
$S:399}
C.ey3.prototype={
$0(){return this.a.$1(new C.ey0(this.b,this.c))},
$S:0}
C.ey0.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eyk.prototype={
$1(d){return this.a.$1(new C.ey2(this.b,d))},
$S:1728}
C.ey2.prototype={
$0(){var w=this.b
return this.a.as=w.gI(w)},
$S:0}
C.eyl.prototype={
$1(d){var w=null
return B.aB(w,B.p(w,w,A.f,w,w,new B.o(B.b1(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ey1(this.a,this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:399}
C.ey1.prototype={
$0(){return this.a.$1(new C.ey_(this.b,this.c))},
$S:0}
C.ey_.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eym.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a4(w,!1).pM()}else w=!1
if(w){w=v.a.c
w.toString
B.a4(w,!1).eN()}v.a.atg()},
$S:0}
C.eyp.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dx.av(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.ar(u,A.b3,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.J(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.X(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.J(u,A.r,1.2)
r.push(B.ao(2,B.p(n,B.X(A.uw,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.ns,n,n,n),n,n,n,2,n,n))
return B.aH(!1,A.a2,!0,n,B.aO(!1,m,!0,B.eJ(new B.a6(48,48,new B.an(A.A,n,A.aa,A.t,r,n),n),n,new B.o(n,n,s,v,n,new B.a9(A.ay,A.aE,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.L,0,n,A.L,n,n,n,A.aj)},
$S:132}
C.evZ.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dx.av(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.ar(u,A.b3,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.J(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.J(A.c.j(0.4+w*0.15),A.r,1)
return B.aH(!1,A.a2,!0,p,B.aO(!1,o,!0,B.eJ(B.x(B.a([B.ed(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ad,B.d(q.e,p,p,p,p,p,p,A.j3,A.K,p,p)],x.p),A.m,p,A.b8,A.i,0,A.p),p,new B.o(p,p,t,v,p,new B.a9(A.ay,A.aE,A.x,u,p,p),A.n),p,A.Gb,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.L,0,p,A.L,p,p,p,A.aj)},
$S:132}
C.eA3.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aL(w,A.Y,!0,w,!0,A.t,w,B.aM(),u,w,w,w,w,w,2,A.aqG,A.y,!0,w,!0,w,!1,w,A.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a3,w,A.an,w,w,w,w)
return B.en(B.a([B.bN(!1,A.di,w,w,!0,w,w,w,new C.eA1(d),w,w),B.bE(A.qO,w,new C.eA2(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:18}
C.eA1.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.eA2.prototype={
$0(){var w=this.b.a.a
B.a4(this.a,!1).O(w)
return null},
$S:0}
C.d7i.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dx.av(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.eu.av(0,A.k.E(v,0,1))
i=i.x
i===$&&B.c()
i=A.dV.av(0,i)
v=B.m(22)
t=B.ar(A.aJ,A.d.gI(C.kH(j.a.c.w)?D.uI:N.nz),w*0.35)
t.toString
t=B.J(t,A.r,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gI(C.kH(j.a.c.w)?D.uI:N.nz).j(0.18+w*0.12),A.I,32+w*10),D.adn],s)
q=B.m(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c2(A.b4,0.9,A.x,k,0,B.a([A.d.gI(C.kH(j.a.c.w)?D.uI:N.nz).j(0.22+w*0.1),A.L],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gI(C.kH(j.a.c.w)?D.uI:N.nz).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c2(A.A,0.5,A.x,k,0,B.a([m,A.d.gak(C.kH(j.a.c.w)?D.uI:N.nz).j(0.08),A.L],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kH(m)?D.uI:N.nz
s=B.a([new B.ac(0,A.G,A.d.gI(C.kH(m)?D.uI:N.nz).j(0.45+w*0.2),A.cx,18)],s)
m=x.p
l=B.a([p,B.ed(A.A,B.p(k,B.X(C.kH(j.a.c.w)?A.we:A.qp,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a9(A.ay,A.aE,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.t,l,k),A.W,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kH(j.a.c.w)?D.uI:N.nz).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.K,k,k),A.fG,B.d(j.a.c.b,k,2,A.a1,k,k,k,D.foS,A.K,k,k),A.au,B.d(j.gcA2(),k,k,k,k,k,k,D.ftJ,A.K,k,k),A.aA],m)
p=j.a.c
if(p.z){p=p.gSK()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kH(j.a.c.w)?D.uI:N.nz).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.Q,k,k,!0,k,k,k,k,k,k,k,k),A.K,k,k),A.ad],m))}s.push(new C.Kf(A.yG,"Download PDF","pdf",A.d3,j.Jh(0),!1,k))
p=j.a.c
if(!p.z||p.gSK()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.am,new C.Kf(A.kj,"Transfer to "+C.hv4(p==null?"":p),"transfer_hati",A.aW,j.Jh(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Jh(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.am,new C.Kf(D.bM3,"Rename presentation","rename",A.cg,n,!1,k),A.am,new C.Kf(A.an0,"Duplicate","duplicate",A.b6,j.Jh(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.O)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.Kf(A.ea,"Delete presentation","delete",A.aw,j.Jh(p),!0,k))
s.push(A.au)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Jh(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Jh(n)
s.push(B.dP(B.d9(B.bN(!1,E.aUi,k,k,!0,k,k,k,new C.d7h(d),k,B.fu(k,k,k,k,k,k,k,k,k,k,k,A.bM,k,k,k,A.ax,k,D.bBl,k,k,k,k,k,A.kn,k,k)),n),new B.t(0,(1-p)*8)))
return B.ed(A.A,B.d9(B.aH(!1,A.a2,!0,k,B.p(k,B.bx(q,new B.an(A.a_,k,A.aa,A.t,B.a([o,new B.D(D.bAu,B.x(s,A.m,k,A.e,A.P,0,A.p),k)],m),k),A.ap),A.f,k,A.WM,new B.o(A.av,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.L,0,k,k,k,k,k,A.aj),i),0.88+u*0.12,k,k)},
$S:46}
C.d7h.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.d7G.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.d7H.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.d7f.prototype={
$1(d){var w=this.a
return w.m(new C.d7b(w))},
$S:23}
C.d7b.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d7g.prototype={
$1(d){var w=this.a
return w.m(new C.d7a(w))},
$S:69}
C.d7a.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d7e.prototype={
$0(){var w=this.a
return w.m(new C.d7c(w))},
$S:0}
C.d7c.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d7d.prototype={
$0(){var w=this.a.a.e
B.a4(this.b,!1).O(w)
return null},
$S:0}
C.eCJ.prototype={
$0(){return $.blU=!$.blU},
$S:0}
C.eCz.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaW_())u.ayi()},
$S:0}
C.eCI.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eCA.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eCB.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.ayi()},
$S:0}
C.eCv.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gI(w.a.c.r).r
w.d=0},
$S:0}
C.eCw.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eCx.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eCy.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.eCG.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b0,A.t,w,null)},
$S:1729}
C.eCH.prototype={
$2(d,e){var w
if(e.gc5(e)===A.ic)return new B.d0(e,!1,d,null)
w=this.a
return w.cxZ(w.e,d,e)},
$S:394}
C.eCC.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fG((1-v.gp(0))*1.5708)
return B.fw(A.A,B.d9(e,v.gp(0)),null,w,!0)},
$S:46}
C.eCD.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.kh((1-v.gp(0))*1.5708)
return B.fw(A.A,B.d9(e,v.gp(0)),null,w,!0)},
$S:46}
C.eCE.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fG(v.gp(0)*0.8)
w.kh(v.gp(0)*0.35)
return B.fw(A.A,B.d9(e,v.gp(0)),null,w,!0)},
$S:46}
C.eCF.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fG(-v.gp(0)*1.2)
return B.fw(A.a8,B.d9(e,v.gp(0)),null,w,!0)},
$S:46}
C.eCK.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gZo().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gZo().x
t===$&&B.c()
return new C.b2u(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.Jb(v.c,t,!0,new B.bG("cine"+u,x.W))},
$S:728}
C.eCM.prototype={
$1(d){var w=this.a
if(d.b.a>B.aJ(this.b,A.bX,x.w).w.a.a*0.55)w.ayi()
else w.cmh()},
$S:69}
C.eCL.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.fNt.prototype={
$4(d,e,f,g){var w=this.b
A.d.a7(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:393}
C.fNC.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.en(B.a([B.bN(!1,A.di,w,w,!0,w,w,w,new C.fNz(d),w,w),B.bN(!1,D.fNc,w,w,!0,w,w,w,new C.fNA(d,this.b,v),w,w),B.bE(A.aUz,w,new C.fNB(d,v,this.c),w)],x.p),w,w,M.tL,new B.a6(320,w,t,w),w,w,w,w,D.fOK,w)},
$S:18}
C.fNz.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.fNA.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a4(u.a,!1).O(null)
C.h9p(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fNB.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a4(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aRc(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aQD(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fNs.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.ciY.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.r(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:603}
C.fNy.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fjT.prototype={
$1(d){return C.h9n(C.Wv(B.a2(d,x.N,x.z)),this.a)},
$S:z+96}
C.fWA.prototype={
$3(d,e,f){return A.bJ},
$C:"$3",
$R:3,
$S:94}
C.fWB.prototype={
$4(d,e,f,g){var w=A.cu.av(0,e.gp(0))
return B.d9(B.ed(A.A,D.hml,0.94+w*0.06,null,null),w)},
$S:395}
C.fWC.prototype={
$1(d){var w=this
return new C.Wx(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.eCf.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eCb.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eCe.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.Wy(u,this.b,w.gaPd(),v,null)},
$S:z+99}
C.eCc.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eCd.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eCg.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eCh.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eCk.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.eCl.prototype={
$0(){var w=this.a
return w.m(new C.eCj(w))},
$S:0}
C.eCj.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eCm.prototype={
$0(){var w=this.a
return w.m(new C.eCi(w))},
$S:0}
C.eCi.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eCn.prototype={
$1(d){return this.a.bLh(d,this.b)},
$S:z+100}
C.eCa.prototype={
$0(){var w=this.a
return w.m(new C.eC9(w,this.b))},
$S:0}
C.eC9.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eCo.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eCp.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eCq.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eCr.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.eCs.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fI(new B.fC(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.K(x.q).f.U(D.faB)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.evT.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.evS())},
$S:0}
C.evS.prototype={
$0(){},
$S:0}
C.evU.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fR()},
$S:9}
C.evP.prototype={
$1(d){return this.a.m(new C.evO())},
$S:2}
C.evO.prototype={
$0(){},
$S:0}
C.evQ.prototype={
$1(d){return this.a.b_Z()},
$S:2}
C.evR.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.eCu.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.qc(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eCt(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eCt.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fHK.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.ey(new B.jS(this.c,new C.fHJ(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:225}
C.fHJ.prototype={
$3(d,e,f){return new C.Jb(e,!1,!1,new B.bG(e.a,x.W))},
$S:z+102}
C.fHL.prototype={
$1(d){var w=null
return B.oz(!1,B.at(new C.bwC(this.a,this.b,w),w,w,w),w,x.z)},
$S:280}
C.fHP.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aV.gmG(),$async$$0)
case 3:w=4
return B.b(B.bQ(A.mE,null,x.H),$async$$0)
case 4:w=5
return B.b($.aV.gmG(),$async$$0)
case 5:s=$.aV.al$.x.h(0,t.a)
r=s==null?null:s.gbd()
if(!(r instanceof B.q8))throw B.W("Could not draw the slide.")
u=r.m5(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1732}
C.fHQ.prototype={
bmx(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.ht(A.h9),$async$$1)
case 3:r=f
if(r==null)throw B.W("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hL([J.eR(A.dJ.gaR(r))],"image/png"))
t.toString
s=An.h0_(t)
w=4
return B.b(new B.qf(s,"load",!1,x.ev).gI(0).d7(0,A.jy),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bmx(d)},
$S:1733}
C.fHM.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:144}
C.fHN.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fW(0)},
$S:144}
C.fHO.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.fdS.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.flh,A.K,w,w)},
$S:1734}
C.fdT.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bx(v,B.kx(A.bo,w,A.dG,8,w,e===0?w:e,w),A.ap)},
$S:572}
C.el_.prototype={
$1(d){this.a.a_C()
return null},
$S:11}
C.ekY.prototype={
$0(){return this.a.e=D.bwo},
$S:0}
C.ekZ.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bF
return this.b.e=w},
$S:0}
C.cmn.prototype={
$1(d){return A.o.dt(1,d.a)},
$S:z+103}
C.cmo.prototype={
$2(d,e){return(d|e)>>>0},
$S:67};(function aliases(){var w=C.aNa.prototype
w.bxw=w.q
w=C.aMH.prototype
w.bx1=w.q
w=C.aMt.prototype
w.bwN=w.q
w=C.aMG.prototype
w.bx0=w.q
w=C.aN8.prototype
w.bxu=w.q
w=C.aOq.prototype
w.byX=w.q
w=C.aLq.prototype
w.bvH=w.q
w=C.aNj.prototype
w.bxF=w.q
w=C.aNk.prototype
w.bxG=w.q
w=C.b4a.prototype
w.bse=w.aDO})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"igv","aoh",104)
v(C.aKl.prototype,"gc62","Zv",0)
var r
u(r=C.ayI.prototype,"gczo","czp",38)
v(r,"gc6S","ae2",0)
v(r=C.ayE.prototype,"gaZu","Eh",3)
v(r,"gc6P","c6Q",3)
v(r,"gaxs","xW",0)
v(r,"gaxt","IX",0)
t(C,"igW","hMM",105)
v(C.aEV.prototype,"gc9w","c9x",3)
s(C,"ih6",0,null,["$4$paper$photo$request$template"],["fOT"],106,0)
s(C,"ih5",0,null,["$5$doc$history$instruction$photo$template"],["bDD"],107,0)
v(r=C.aFb.prototype,"gcaf","Je",0)
v(r,"gbKK","Xj",0)
v(r,"gcai","aeS",0)
v(r,"gcah","a_o",0)
v(r,"gb_E","Ey",0)
v(C.aFd.prototype,"gcan","a_q",0)
v(r=C.aGG.prototype,"gb_R","Qg",0)
v(r,"gcr7","b4e",3)
v(r,"gcAM","aBV",86)
v(r,"gbOC","aaO",0)
v(r,"gcaO","AE",0)
v(r=C.aID.prototype,"gcl1","a0O",0)
v(r,"gcl9","a0R",0)
v(r,"gbDC","a9g",0)
v(r,"gcaS","af3",0)
v(C.aIC.prototype,"gcaT","af4",0)
v(C.aCB.prototype,"gbCB","a93",0)
v(C.aAZ.prototype,"gcaU","a_B",0)
w(C,"ihj","ifc",12)
w(C,"ihh","ic5",12)
w(C,"ihi","iea",12)
v(r=C.aFt.prototype,"gcDX","cDY",3)
v(r,"gcpp","cpq",3)
u(r,"gEE","afO",7)
v(r,"gbIo","asq",3)
u(r,"gEF","b1e",7)
v(r,"gcdc","afv",0)
v(r,"gcc3","afu",0)
v(r,"gcfm","afP",0)
v(r,"gbKH","aao",0)
v(r,"gcgg","a0d",0)
v(r,"gcgh","ag5",0)
v(r,"gcgO","agc",0)
v(r,"gcfz","afS",0)
v(r,"gbOO","aaS",0)
v(r,"gaSM","aSN",3)
v(r,"gaRU","aRV",3)
v(r,"gaNx","aNy",3)
v(r,"gaRT","atg",3)
u(r,"gbCS","bCT",80)
v(r,"gaBr","b7n",3)
v(r,"gcc5","cc6",3)
v(r,"gc_6","c_7",3)
v(r,"gbN9","bNa",3)
v(r=C.aFw.prototype,"gcCN","cCO",3)
v(r,"gcCs","cCt",3)
t(C,"ihk","ift",2)
v(r=C.aFu.prototype,"gcb_","Jj",0)
v(r,"gctb","RJ",0)
v(r,"gcaX","Ji",0)
v(r,"gcFc","a3n",0)
v(r,"gch_","agj",0)
v(C.aFs.prototype,"gcb0","b_Z",3)
v(r=C.aFv.prototype,"gbPE","ab2",0)
u(r,"gcaY","caZ",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aD,[C.o4,C.So,C.bJe,C.bHz,C.cDk,C.cDi,C.bRe,C.ba0,C.cDj,C.bG9,C.cmh,C.cmf,C.cmg,C.cme,C.atB,C.cmd,C.bSh,C.ow,C.aG6,C.jt,C.nP,C.a8r,C.zR,C.lp,C.oJ,C.mf,C.zS,C.nT,C.a8z,C.arY,C.b2v,C.ekP,C.lm,C.F4,C.ex,C.j2,C.EW,C.xT,C.eO,C.lR,C.i4,C.jO,C.a8A,C.afF,C.b2w,C.b4a,C.a3s])
u(B.ke,[C.cLb,C.c2d,C.fCW,C.cMI,C.cM4,C.fIs,C.e3f,C.e3e,C.el2,C.el1,C.fJR,C.fl1,C.fl2,C.chb,C.chc,C.chd,C.eos,C.eXH,C.eX4,C.eX3,C.eY7,C.eXF,C.eXy,C.eXR,C.eYx,C.fsT,C.f3S,C.f3R,C.f4k,C.ekS,C.fNp,C.e_7,C.fU8,C.fKd,C.ciQ,C.ciO,C.ciT,C.fKI,C.fKJ,C.fKK,C.fKL,C.ciA,C.ciB,C.dME,C.cix,C.fKH,C.fbg,C.dXQ,C.ciq,C.eky,C.fIh,C.ezt,C.ezS,C.ezP,C.ezO,C.ezZ,C.ezY,C.eBt,C.eBs,C.ezI,C.ezH,C.ewh,C.exr,C.eAq,C.eBL,C.eBK,C.exe,C.eyp,C.evZ,C.d7i,C.eCG,C.eCH,C.eCC,C.eCD,C.eCE,C.eCF,C.eCK,C.ciY,C.eCf,C.eCq,C.cmo])
u(B.hM,[C.cLc,C.cLd,C.bSi,C.fA5,C.c2c,C.c2f,C.fQC,C.fco,C.fcf,C.fcv,C.fjU,C.fjV,C.fCX,C.fCV,C.fQ6,C.fzK,C.fQY,C.cMy,C.cMD,C.cMF,C.cMB,C.cMG,C.cMz,C.cMH,C.cMu,C.cMr,C.cMq,C.cMx,C.cM_,C.cLY,C.fHu,C.fHv,C.fo9,C.fIt,C.fIz,C.fnc,C.cdv,C.fHs,C.fHt,C.fCi,C.fCj,C.fIy,C.fIu,C.fIw,C.fIx,C.fIv,C.fUq,C.fCm,C.fCn,C.fCq,C.fCr,C.fCu,C.fCv,C.fVT,C.flu,C.fW3,C.eo_,C.eo0,C.eo1,C.enI,C.enU,C.enV,C.enX,C.cha,C.ch8,C.ch9,C.fI8,C.fIa,C.fI9,C.fl3,C.fl4,C.fW6,C.eox,C.eoy,C.eop,C.eoq,C.eot,C.eou,C.fWm,C.eYy,C.eXY,C.eXI,C.eXV,C.eX_,C.eX0,C.eX1,C.eX5,C.eX6,C.eYn,C.eYu,C.eYw,C.eY6,C.eY8,C.eYc,C.eYd,C.eYe,C.eYi,C.eY9,C.eYa,C.eXh,C.eXi,C.eXj,C.eXk,C.eXl,C.eXm,C.eXn,C.eXo,C.eXp,C.eWD,C.eWE,C.eWF,C.eWG,C.eWI,C.eWJ,C.eXb,C.eXc,C.eXd,C.eXe,C.eXf,C.eWN,C.eWO,C.eWP,C.eWQ,C.eXx,C.eXQ,C.fFx,C.fFw,C.ciH,C.fsS,C.fNl,C.fNe,C.fNh,C.fLc,C.fLd,C.fLe,C.fFE,C.fFD,C.fFC,C.fFA,C.fkY,C.fkZ,C.fl_,C.fWy,C.f3U,C.f3V,C.f3O,C.f3I,C.f4d,C.f4e,C.f4g,C.f4h,C.f4c,C.fWx,C.f3z,C.fs7,C.ekR,C.fNn,C.fNo,C.fNq,C.fNj,C.fNk,C.fVL,C.dpu,C.dpA,C.ekQ,C.fhp,C.fhr,C.fhq,C.fho,C.fGI,C.fGK,C.fjp,C.fMQ,C.fMR,C.fMS,C.fN2,C.fN7,C.fN8,C.fN9,C.fNa,C.fNb,C.fNc,C.fNd,C.fMT,C.fMU,C.fMV,C.fMW,C.fMX,C.fMY,C.fMZ,C.fN_,C.fN0,C.fN1,C.fN3,C.fN4,C.fN5,C.fN6,C.fEy,C.frq,C.frp,C.fNw,C.e_8,C.e_6,C.f2J,C.cd6,C.cd8,C.fUa,C.deR,C.deT,C.fU9,C.fU7,C.fWw,C.fK9,C.der,C.fCy,C.fCz,C.ciF,C.ciG,C.ciE,C.ciu,C.civ,C.cir,C.cis,C.cit,C.ciW,C.ciR,C.ciM,C.ciN,C.ciP,C.ciS,C.ciU,C.fKM,C.ciz,C.ciC,C.ciD,C.ciJ,C.ciK,C.fND,C.fMK,C.ciy,C.ciw,C.fKG,C.fud,C.cip,C.f0b,C.fxc,C.eC6,C.eyw,C.eyx,C.eA6,C.ezV,C.ezW,C.exU,C.eBS,C.eBT,C.eBU,C.exi,C.ezA,C.ezC,C.ezc,C.ez9,C.eys,C.eyt,C.ezj,C.exk,C.ezv,C.ezw,C.ezu,C.ezy,C.ezx,C.ezQ,C.ezR,C.ezT,C.ezM,C.exD,C.exA,C.eA_,C.exs,C.eBR,C.ew0,C.exv,C.exu,C.ewJ,C.ewO,C.ewM,C.ewK,C.eBZ,C.eC_,C.eC0,C.eBY,C.eBv,C.eBu,C.eBo,C.eBq,C.eBg,C.eBP,C.eBN,C.ew8,C.ew4,C.eyq,C.ewS,C.ewj,C.ewi,C.ewF,C.ewG,C.exS,C.ewU,C.ewY,C.ezJ,C.eBh,C.eBi,C.eBj,C.eBk,C.exm,C.exn,C.exo,C.eyT,C.exO,C.exG,C.exN,C.ez2,C.ez3,C.eAQ,C.eAS,C.eBb,C.eBd,C.eAT,C.eAU,C.ewQ,C.eyv,C.eyu,C.eBF,C.exd,C.ex5,C.ex6,C.ex9,C.exa,C.ez7,C.eyb,C.eyc,C.eyd,C.eye,C.eyf,C.eyg,C.eyh,C.eyi,C.eyj,C.eyk,C.eyl,C.eA3,C.d7f,C.d7g,C.eCM,C.fNt,C.fNC,C.fNs,C.fNy,C.fjT,C.fWA,C.fWB,C.fWC,C.eCe,C.eCn,C.evU,C.evP,C.evQ,C.fHK,C.fHJ,C.fHL,C.fHQ,C.fHM,C.fHN,C.fdS,C.fdT,C.el_,C.cmn])
u(B.jc,[C.cLe,C.fck,C.fcp,C.fcq,C.fcl,C.fcm,C.fcn,C.fcd,C.fce,C.fcg,C.fch,C.fcu,C.fct,C.fcj,C.fci,C.fcr,C.fcs,C.fcx,C.fcy,C.fcw,C.cMA,C.cME,C.cMC,C.cMs,C.cMt,C.cMv,C.cMo,C.cMp,C.cMw,C.cMn,C.cMm,C.cMl,C.cLP,C.cLO,C.cLR,C.cLZ,C.cLS,C.cLQ,C.cLU,C.cLV,C.cLW,C.cLT,C.cLX,C.cM0,C.cM1,C.cM2,C.cM3,C.fCg,C.fCh,C.fCe,C.fCf,C.egG,C.egE,C.egF,C.egH,C.egI,C.e3d,C.fCk,C.fCl,C.fCo,C.fCp,C.fCs,C.fCt,C.el0,C.fKg,C.fKf,C.enZ,C.enY,C.enC,C.eny,C.enJ,C.enK,C.enL,C.enE,C.enF,C.enG,C.enH,C.enD,C.enA,C.enB,C.enR,C.enS,C.enQ,C.enT,C.enP,C.enO,C.enN,C.enW,C.enM,C.enz,C.eow,C.eok,C.eol,C.eor,C.eom,C.eoo,C.eon,C.eov,C.eXq,C.eXO,C.eX9,C.eXa,C.eX7,C.eX8,C.eXU,C.eXT,C.eXS,C.eXX,C.eXW,C.eWZ,C.eX2,C.eWY,C.eWX,C.eWU,C.eWW,C.eWV,C.eYv,C.eYo,C.eYm,C.eYp,C.eYl,C.eYq,C.eYk,C.eYr,C.eYs,C.eYt,C.eYj,C.eY5,C.eY0,C.eYb,C.eY4,C.eYf,C.eY3,C.eYg,C.eY2,C.eYh,C.eY1,C.eXL,C.eXK,C.eXM,C.eXJ,C.eXN,C.eXD,C.eXC,C.eXE,C.eXB,C.eXA,C.eXz,C.eWH,C.eWC,C.eWR,C.eWM,C.eWS,C.eWL,C.eWT,C.eWK,C.eXG,C.eXu,C.eXt,C.eXv,C.eXs,C.eXw,C.eXr,C.eXP,C.eY_,C.eXZ,C.eXg,C.fNg,C.fNi,C.fNm,C.fFB,C.fI1,C.fI_,C.fI0,C.f3W,C.f3X,C.f3T,C.f3N,C.f3M,C.f3P,C.f3Q,C.f3C,C.f3D,C.f3F,C.f3G,C.f3H,C.f3E,C.f3J,C.f49,C.f4a,C.f48,C.f4b,C.f47,C.f46,C.f45,C.f4f,C.f44,C.f43,C.f42,C.f4i,C.f41,C.f4j,C.f40,C.f4_,C.f3K,C.f3L,C.f3Z,C.f3Y,C.f3v,C.f3w,C.f3x,C.f3y,C.f3u,C.f3A,C.f3B,C.dpt,C.dpv,C.dpy,C.dpz,C.dpx,C.dpw,C.fGJ,C.fEz,C.cd7,C.cd9,C.deK,C.deP,C.deQ,C.deO,C.deN,C.deS,C.deM,C.deL,C.deU,C.fU6,C.dlv,C.dlw,C.dlx,C.fCw,C.fCx,C.ciX,C.evV,C.evW,C.evX,C.evY,C.fub,C.fuc,C.dXS,C.dXR,C.dbG,C.dbF,C.eC8,C.eC7,C.eyy,C.eBe,C.eC4,C.eA4,C.eBV,C.eBW,C.eC5,C.ezd,C.exg,C.exh,C.ezB,C.ezb,C.ez8,C.eza,C.eze,C.ezf,C.ezg,C.ezh,C.ezi,C.ezk,C.exl,C.ezn,C.ezo,C.ezp,C.ezq,C.ezr,C.ezs,C.ezm,C.ezz,C.ezN,C.ezL,C.ezU,C.ezl,C.exB,C.exC,C.exE,C.ezX,C.eA0,C.ewf,C.exz,C.exx,C.eA8,C.ext,C.eA7,C.exj,C.exV,C.eBQ,C.eBf,C.ewg,C.ewd,C.ew3,C.ew_,C.ew1,C.exw,C.ewI,C.ewN,C.ewL,C.ewH,C.ezK,C.eC1,C.eBr,C.eBm,C.eBn,C.eBp,C.eyo,C.eyn,C.eBO,C.ew6,C.ew7,C.ew9,C.ewa,C.ewe,C.ew5,C.eA5,C.eBX,C.eyr,C.ewR,C.ew2,C.exT,C.ewb,C.ewk,C.ewl,C.ewm,C.ewx,C.ewA,C.ewB,C.ewC,C.ewD,C.ewE,C.ewn,C.ewo,C.ewp,C.ewq,C.ewr,C.ews,C.ewt,C.ewu,C.ewv,C.eww,C.ewy,C.ewz,C.exR,C.exQ,C.exP,C.ewc,C.ewV,C.ewT,C.ewW,C.ewX,C.exy,C.ezF,C.ezG,C.ezD,C.ezE,C.eBl,C.exq,C.exp,C.eyS,C.eyR,C.eyU,C.eyQ,C.eyV,C.eyP,C.eyW,C.eyO,C.eyX,C.eyN,C.eyY,C.eyM,C.eyZ,C.eyL,C.ez_,C.eyK,C.eyD,C.eyE,C.eyF,C.eyC,C.eyG,C.eyB,C.eyH,C.eyA,C.eyI,C.eyz,C.eyJ,C.exL,C.exM,C.exF,C.exH,C.exI,C.exJ,C.exK,C.eC2,C.eC3,C.ez1,C.ez0,C.ez4,C.eAr,C.eAs,C.eAt,C.eAE,C.eAP,C.eB_,C.eB6,C.eB7,C.eB8,C.eB9,C.eBa,C.eAu,C.eAv,C.eAw,C.eAx,C.eAy,C.eAz,C.eAA,C.eAB,C.eAC,C.eAD,C.eAF,C.eAG,C.eAH,C.eAI,C.eAJ,C.eAK,C.eAL,C.eAM,C.eAN,C.eAh,C.eAO,C.eAp,C.eAo,C.eAR,C.eAn,C.eAd,C.eBc,C.eAm,C.eAc,C.eAa,C.eAl,C.eAb,C.eA9,C.eAV,C.eAk,C.eAW,C.eAX,C.eAY,C.eAZ,C.eAj,C.eB0,C.eB1,C.eB2,C.eAi,C.eB3,C.eAg,C.eB4,C.eAf,C.eB5,C.eAe,C.ewP,C.eBy,C.eBx,C.eBz,C.eBw,C.exY,C.exX,C.exZ,C.exW,C.eBJ,C.eBE,C.eBI,C.eBA,C.eBB,C.eBC,C.eBD,C.eBG,C.eBH,C.eBM,C.exf,C.ex2,C.ex3,C.ex4,C.ex1,C.ex8,C.ex7,C.ex0,C.ex_,C.exb,C.ewZ,C.exc,C.ez6,C.ez5,C.eya,C.ey9,C.ey8,C.ey7,C.ey6,C.ey5,C.ey4,C.ey3,C.ey0,C.ey2,C.ey1,C.ey_,C.eym,C.eA1,C.eA2,C.d7h,C.d7G,C.d7H,C.d7b,C.d7a,C.d7e,C.d7c,C.d7d,C.eCJ,C.eCz,C.eCI,C.eCA,C.eCB,C.eCv,C.eCw,C.eCx,C.eCy,C.eCL,C.fNz,C.fNA,C.fNB,C.eCb,C.eCc,C.eCd,C.eCg,C.eCh,C.eCk,C.eCl,C.eCj,C.eCm,C.eCi,C.eCa,C.eC9,C.eCo,C.eCp,C.eCr,C.eCs,C.evT,C.evS,C.evO,C.evR,C.eCu,C.eCt,C.fHP,C.fHO,C.ekY,C.ekZ])
t(C.aSA,B.L)
u(B.lZ,[C.a4o,C.ay9,C.awP,C.xR,C.xU,C.l2,C.tx,C.BQ,C.rG,C.wc,C.asv,C.Jc,C.arX,C.uX,C.mH,C.hG,C.a9d])
u(C.bRe,[C.cDl,C.bRf])
u(C.cmh,[C.cml,C.atA])
t(C.cmk,C.cmf)
t(C.cmj,C.cme)
t(C.cmm,C.cmj)
t(C.cmi,C.cmg)
t(C.cmc,C.cmd)
t(C.bbz,B.p1)
t(C.cwN,B.awh)
t(C.a9_,B.xE)
u(B.ag,[C.a1w,C.Zc,C.Za,C.ar6,C.Wl,C.Wm,C.a0v,C.a11,C.a10,C.aF5,C.a_n,C.NV,C.ZV,C.a_f,C.ap6,C.aK1,C.VD,C.aAE,C.a8h,C.Oo,C.aA_,C.Kf,C.a07,C.Wx,C.Wy,C.aFr,C.as1,C.a8i])
u(B.ah,[C.aKl,C.ayI,C.ayE,C.aEV,C.aFb,C.aFd,C.aGG,C.aID,C.aIC,C.aNa,C.aCB,C.aMH,C.aAZ,C.bhz,C.aMt,C.aOq,C.aMG,C.bfo,C.aN8,C.aNj,C.aLq,C.be9,C.aNk,C.aFu,C.blT,C.aFs,C.aFv,C.blC])
u(B.ax,[C.ayG,C.adN,C.adb,C.bkI,C.adQ,C.afv,C.b26,C.buc,C.b2r,C.bn9,C.bsL,C.b0l,C.b2u,C.adT,C.ae9,C.b2s,C.Jb,C.b0o,C.bep,C.Q7,C.Kl,C.bj7,C.bj6,C.bwC])
u(B.HH,[C.bdR,C.bvB,C.aKJ,C.bgB,C.bt8])
u(B.mX,[C.bdQ,C.bai,C.bt5,C.bdn,C.bgZ,C.bjd,C.bg4,C.bgV,C.bgD,C.bpz,C.bbr,C.bb5,C.bwy,C.bty,C.bsH,C.bfY,C.b2p,C.brC,C.bsE])
t(C.blA,C.aNa)
t(C.bkZ,C.aMH)
t(C.bkK,C.aMt)
t(C.bw3,C.aOq)
t(C.bkV,C.aMG)
t(C.bly,C.aN8)
t(C.byQ,C.aNj)
t(C.aFt,C.byQ)
t(C.bea,C.aLq)
t(C.aFw,C.aNk)
t(C.bwo,B.iV)
t(C.a9c,B.kC)
t(C.cmp,C.b4a)
t(C.aiM,C.a3s)
u(B.Ya,[C.aSq,C.aTX])
t(C.axK,C.aSq)
w(C.aNa,B.cq)
w(C.aMH,B.cq)
w(C.aMt,B.cq)
w(C.aMG,B.cq)
w(C.aN8,B.cq)
w(C.aOq,B.cq)
w(C.aLq,B.eP)
w(C.aNj,B.cq)
v(C.byQ,B.eE)
w(C.aNk,B.cq)})()
B.jl(b.typeUniverse,JSON.parse('{"aT9":{"hN":["aT9"]},"o4":{"aT9":[],"hN":["aT9"]},"aSA":{"L":["So"],"L.E":"So"},"bbz":{"p1":[]},"a9_":{"xE":[],"oq":[]},"a1w":{"ag":[],"v":[]},"aKl":{"ah":["a1w"]},"Zc":{"ag":[],"v":[]},"Za":{"ag":[],"v":[]},"ayI":{"ah":["Zc"]},"ayE":{"ah":["Za"]},"ayG":{"ax":[],"v":[]},"ar6":{"ag":[],"v":[]},"aEV":{"ah":["ar6"]},"adN":{"ax":[],"v":[]},"adb":{"ax":[],"v":[]},"adQ":{"ax":[],"v":[]},"afv":{"ax":[],"v":[]},"bkI":{"ax":[],"v":[]},"Wl":{"ag":[],"v":[]},"aFb":{"ah":["Wl"]},"b26":{"ax":[],"v":[]},"bdR":{"aC":[]},"bdQ":{"aC":[]},"bvB":{"aC":[]},"bai":{"aC":[]},"bt5":{"aC":[]},"Wm":{"ag":[],"v":[]},"aFd":{"ah":["Wm"]},"bdn":{"aC":[]},"a0v":{"ag":[],"v":[]},"aGG":{"ah":["a0v"]},"bgZ":{"aC":[]},"a11":{"ag":[],"v":[]},"a10":{"ag":[],"v":[]},"aF5":{"ag":[],"v":[]},"a_n":{"ag":[],"v":[]},"aID":{"ah":["a11"]},"aIC":{"ah":["a10"]},"blA":{"ah":["aF5"]},"bjd":{"aC":[]},"aCB":{"ah":["a_n"]},"buc":{"ax":[],"v":[]},"b2r":{"ax":[],"v":[]},"bn9":{"ax":[],"v":[]},"NV":{"ag":[],"v":[]},"ZV":{"ag":[],"v":[]},"bkZ":{"ah":["NV"]},"bsL":{"ax":[],"v":[]},"bg4":{"aC":[]},"b0l":{"ax":[],"v":[]},"aAZ":{"ah":["ZV"]},"a_f":{"ag":[],"v":[]},"bhz":{"ah":["a_f"]},"bgV":{"aC":[]},"bgD":{"aC":[]},"bpz":{"aC":[]},"bbr":{"aC":[]},"bb5":{"aC":[]},"bwy":{"aC":[]},"bty":{"aC":[]},"bsH":{"aC":[]},"bfY":{"aC":[]},"ap6":{"ag":[],"v":[]},"b2u":{"ax":[],"v":[]},"bkK":{"ah":["ap6"]},"adT":{"ax":[],"v":[]},"ae9":{"ax":[],"v":[]},"aK1":{"ag":[],"v":[]},"VD":{"ag":[],"v":[]},"Jb":{"ax":[],"v":[]},"aAE":{"ag":[],"v":[]},"a8h":{"ag":[],"v":[]},"b2s":{"ax":[],"v":[]},"b2p":{"aC":[]},"bw3":{"ah":["aK1"]},"aKJ":{"aC":[]},"bkV":{"ah":["VD"]},"bfo":{"ah":["aAE"]},"bly":{"ah":["a8h"]},"b0o":{"ax":[],"v":[]},"bgB":{"aC":[]},"brC":{"aC":[]},"bsE":{"aC":[]},"aA_":{"ag":[],"v":[]},"Kf":{"ag":[],"v":[]},"a07":{"ag":[],"v":[]},"Kl":{"ax":[],"v":[]},"Oo":{"ag":[],"v":[]},"aFt":{"ah":["Oo"],"eE":[]},"bea":{"ah":["aA_"]},"bep":{"ax":[],"v":[]},"be9":{"ah":["Kf"]},"Q7":{"ax":[],"v":[]},"aFw":{"ah":["a07"]},"bt8":{"aC":[]},"bj7":{"ax":[],"v":[]},"bj6":{"ax":[],"v":[]},"Wx":{"ag":[],"v":[]},"Wy":{"ag":[],"v":[]},"aFr":{"ag":[],"v":[]},"as1":{"ag":[],"v":[]},"aFu":{"ah":["Wx"]},"blT":{"ah":["Wy"]},"aFs":{"ah":["aFr"]},"bwo":{"iV":[]},"aFv":{"ah":["as1"]},"bwC":{"ax":[],"v":[]},"a8i":{"ag":[],"v":[]},"blC":{"ah":["a8i"]},"a9c":{"kC":["ft<eV>"],"kn":["ft<eV>"]},"aiM":{"a3s":[]},"aSq":{"j6":[],"fh":[]},"axK":{"j6":[],"fh":[]},"aTX":{"j6":[],"fh":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.aw
return{bu:w("M6"),U:w("vI<qc>"),bz:w("u"),M:w("dF<n>"),bo:w("jH"),g7:w("MF"),gc:w("aA<iB?>"),bq:w("aA<~>"),cc:w("MR"),fS:w("Ek"),an:w("In"),bm:w("O<So>"),X:w("O<a3A>"),f3:w("O<aT9>"),aK:w("O<nh>"),V:w("O<ac>"),O:w("O<u>"),fA:w("O<lJ>"),d5:w("O<aA<bA<H,+icon3d,picture(n?,n?)>>>"),bH:w("O<aA<dK>>"),fG:w("O<aA<~>>"),aF:w("O<nn>"),cd:w("O<ai<jt>>"),ez:w("O<a8<n,aD>>"),d:w("O<a8<n,@>>"),B:w("O<mD>"),h:w("O<jt>"),gE:w("O<zR>"),k:w("O<ow>"),g:w("O<lR>"),D:w("O<i4>"),u:w("O<eO>"),m:w("O<uX>"),i:w("O<hG>"),aC:w("O<a8z>"),o:w("O<zS>"),e3:w("O<aD>"),dN:w("O<t>"),v:w("O<h9>"),cR:w("O<iT>"),J:w("O<ji>"),gx:w("O<pl<n>>"),f2:w("O<+(a0,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(K,K)>"),ek:w("O<+(H,n)>"),n:w("O<+(H,H)>"),r:w("O<cX>"),s:w("O<n>"),aS:w("O<iV>"),p:w("O<v>"),eR:w("O<fh>"),fT:w("O<ba0>"),bx:w("O<aG6>"),gz:w("O<afF>"),x:w("O<K>"),t:w("O<H>"),dS:w("O<aC?>"),bA:w("O<t?>"),Z:w("O<H?>"),cA:w("O<ch>"),A:w("cB<ah<ag>>"),gL:w("ai<ow>"),R:w("ai<i4>"),j:w("ai<@>"),bW:w("ai<H>"),e:w("bA<H,+icon3d,picture(n?,n?)>"),P:w("a8<n,@>"),f:w("a8<@,@>"),gI:w("a8<H,+icon3d,picture(n?,n?)>"),bR:w("N<hG,v>"),eC:w("N<nT,n>"),cT:w("N<jO,D>"),dv:w("N<n,n>"),f0:w("N<n,v>"),gN:w("N<H,pQ>"),gh:w("N<mH,jv<mH>>"),w:w("iF"),ei:w("iB"),g2:w("rw"),fB:w("EW"),b6:w("zR"),gX:w("a8r"),dt:w("lp"),ea:w("ow"),bt:w("lR"),I:w("i4"),F:w("eO"),fO:w("mH"),ff:w("uX"),fP:w("hG"),Q:w("wc"),dO:w("arY"),a:w("cu"),C:w("aD"),dw:w("atB"),di:w("a9d"),Y:w("eV"),fz:w("+(n,n)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("Fr"),dB:w("dw<t>"),bJ:w("dw<n>"),_:w("e4<n>"),N:w("n"),fw:w("qc"),bO:w("as"),K:w("bp<t>"),b:w("bp<K>"),E:w("dK"),W:w("bG<n>"),ac:w("bG<H>"),ex:w("jS<lR>"),cI:w("jS<n>"),cl:w("jS<K>"),b4:w("Z<lm>"),a8:w("Z<mf>"),fR:w("Z<+(n,n)>"),co:w("ee<t>"),l:w("v"),b2:w("bZ<~>"),ev:w("qf<dW>"),dT:w("bi<~>"),q:w("n8"),y:w("R"),gR:w("K"),z:w("@"),S:w("H"),at:w("ba?"),gw:w("ai<a8<n,@>>?"),aT:w("ai<i4>?"),c:w("ai<@>?"),aP:w("iB?"),af:w("i4?"),go:w("b2w?"),a6:w("a8A?"),cK:w("aD?"),bZ:w("+bytes,dataUrl,fileName(dK,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dK?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b_0=new B.bO(A.ay,null,null,I.aqr,null)
D.b_9=new B.dh(0,-0.15)
D.b_b=new B.dh(0.62,0)
D.b_e=new B.dh(-0.35,-0.45)
D.b_o=new B.dh(0.9,-0.85)
D.b1i=new B.bg(I.Tv,I.Tv,A.fE,A.fE)
D.b1x=new B.ay(A.b6,1,A.r,-1)
D.bn0=new B.u(1,0.4196078431372549,0.2901960784313726,0.2,A.q)
D.b1J=new B.ay(D.bn0,1,A.r,-1)
D.b1V=new B.ay(A.aD,1.5,A.r,-1)
D.b2_=new B.ay(A.b6,1.6,A.r,-1)
D.b2f=new B.ay(A.aD,1.4,A.r,-1)
D.b3C=new B.o(null,null,null,null,null,L.Hw,A.a6)
D.c3H=new B.a9(A.a5,A.a8,A.x,G.a4S,null,null)
D.b3K=new B.o(null,null,null,null,null,D.c3H,A.a6)
D.add=new B.o(A.av,null,null,A.tn,null,null,A.n)
D.bg2=new B.u(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.q)
D.bmY=new B.u(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.q)
D.d1Z=w([D.bg2,D.bmY],x.O)
D.et7=new B.c2(A.A,0.5,A.x,null,0,D.d1Z,null,null)
D.b42=new B.o(null,null,null,null,null,D.et7,A.a6)
D.Yj=new B.u(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.q)
D.b2v=new B.bK(P.vy,A.a0,A.a0,A.a0)
D.b44=new B.o(D.Yj,null,D.b2v,null,null,null,A.n)
D.c5r=new B.a9(A.a5,A.a8,A.x,A.R8,null,null)
D.b4b=new B.o(null,null,null,null,null,D.c5r,A.a6)
D.aeP=new B.u(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.q)
D.b4e=new B.o(D.aeP,null,null,A.r_,null,null,A.n)
D.b4i=new B.o(A.jc,null,null,null,null,null,A.a6)
D.b4l=new B.o(A_.afZ,null,I.acQ,A.mr,null,null,A.n)
D.EJ=new B.o(A.dF,null,null,null,null,null,A.a6)
D.b4s=new B.o(null,null,null,null,null,E.wv,A.a6)
D.d7d=w([E.agY,A.c0],x.O)
D.c52=new B.a9(A.b4,A.b7,A.x,D.d7d,null,null)
D.b4w=new B.o(null,null,null,A.mr,null,D.c52,A.n)
D.dis=w([A.bk,A.dF,A.kc],x.O)
D.a2U=new B.a9(A.ay,A.aE,A.x,D.dis,null,null)
D.b4J=new B.o(null,null,null,null,null,D.a2U,A.n)
D.b4K=new B.o(D.aeP,null,null,A.kX,null,null,A.n)
D.cwT=w([A.d7,A.bk],x.O)
D.c4U=new B.a9(A.ay,A.aE,A.x,D.cwT,null,null)
D.b4O=new B.o(null,null,null,null,null,D.c4U,A.n)
D.b4Y=new B.o(null,null,null,null,null,G.uC,A.a6)
D.b5i=new B.o(A.ah_,null,null,null,null,null,A.a6)
D.bh3=new B.u(0.5647058823529412,0,0,0,A.q)
D.adn=new B.ac(0,A.G,D.bh3,A.J_,28)
D.b7t=new B.aXl()
D.b81=new C.cwN()
D.b8d=new C.bbz()
D.adT=new B.ca(A.A,null,null,A.a2I,null)
D.baZ=new B.fj(null,null,null,null,null,E.ng,null,null,null,null)
D.b8N=new B.ca(A.A,null,null,D.baZ,null)
D.bP_=new B.ae(A.e5,28,A.c,null,null,null)
D.b9h=new B.ca(A.A,null,null,D.bP_,null)
D.baW=new B.fj(2,null,null,null,null,A.c1,null,null,null,null)
D.b9H=new B.ca(A.A,null,null,D.baW,null)
D.bPk=new B.ae(L.OL,40,A.bx,null,null,null)
D.b9I=new B.ca(A.A,null,null,D.bPk,null)
D.bbQ=new B.u(1,1,0.9019607843137255,0.6549019607843137,A.q)
D.bc1=new B.u(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.q)
D.bcu=new B.u(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.q)
D.bcE=new B.u(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.q)
D.bde=new B.u(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.q)
D.bdv=new B.u(0.8,1,0.9450980392156862,0.9490196078431372,A.q)
D.bdx=new B.u(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.q)
D.LL=new B.u(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.q)
D.be_=new B.u(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.q)
D.be7=new B.u(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.af8=new B.u(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.q)
D.beZ=new B.u(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.q)
D.bfS=new B.u(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.q)
D.afn=new B.u(1,1,1,0.9725490196078431,A.q)
D.bgb=new B.u(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bgq=new B.u(1,1,0.5490196078431373,0.10196078431372549,A.q)
D.bgu=new B.u(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.q)
D.bgL=new B.u(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bh9=new B.u(1,1,0.9568627450980393,0.8392156862745098,A.q)
D.biO=new B.u(1,1,0.996078431372549,0.9725490196078431,A.q)
D.Y3=new B.u(0.8509803921568627,0,0,0,A.q)
D.biY=new B.u(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.q)
D.bj4=new B.u(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.q)
D.agh=new B.u(0.6,0,0,0,A.q)
D.agj=new B.u(0,1,0.7019607843137254,0.2784313725490196,A.q)
D.bkI=new B.u(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.q)
D.tI=new B.u(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.q)
D.bla=new B.u(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.q)
D.blC=new B.u(1,1,0.8784313725490196,0.6392156862745098,A.q)
D.bm1=new B.u(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.aha=new B.u(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.q)
D.Yu=new B.u(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.Bn=new B.u(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.q)
D.Mk=new B.u(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.q)
D.jv=new B.u(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.q)
D.ahD=new B.u(0,1,0.9686274509803922,0.8392156862745098,A.q)
D.YG=new B.u(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.q)
D.bpK=new B.u(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.q)
D.bqf=new B.u(0.6,1,0.9686274509803922,0.9019607843137255,A.q)
D.bqv=new B.u(0.6,1,0.984313725490196,0.9215686274509803,A.q)
D.Z4=new B.u(1,0.07450980392156863,0.10980392156862745,0.2,A.q)
D.brL=new B.u(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.q)
D.xY=new B.u(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.q)
D.bsi=new B.u(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.q)
D.bsE=new B.hA(A.aZ,!0,null,null)
D.frV=new B.F(!0,A.aB,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fT0=new B.y("Bio link",null,D.frV,null,null,null,null,null,null,null,null,null)
D.b9B=new B.ca(A.A,null,null,D.fT0,null)
D.bsT=new B.hA(A.B0,!0,D.b9B,null)
D.ML=new C.a4o(0,"none")
D.aiQ=new C.a4o(1,"deflate")
D.aiR=new C.a4o(2,"bzip2")
D.btS=new B.kt(0.165,0.84,0.44,1)
D.d7x=w([A.ce,A.dG,A.aD],x.O)
D.c4b=new B.a9(A.ay,A.aE,A.x,D.d7x,null,null)
D.b3H=new B.o(null,null,null,null,null,D.c4b,A.n)
D.bYt=new B.ae(A.f0,null,A.ae,null,null,null)
D.bai=new B.ca(A.A,null,null,D.bYt,null)
D.buo=new B.l_(D.b3H,A.bg,D.bai,null)
D.bq_=new B.u(0.058823529411764705,1,1,1,A.q)
D.daW=w([A.bz,A.r8,A.r8,D.bq_],x.O)
D.cOh=w([0,0.32,0.7,1],x.x)
D.c4K=new B.a9(A.ay,A.aE,A.x,D.daW,D.cOh,null)
D.b3w=new B.o(null,null,null,null,null,D.c4K,A.n)
D.buu=new B.l_(D.b3w,A.bg,null,null)
D.bvC=new B.mv(1,1,null,null,null,A.bo,null)
D.bvF=new B.mv(1,null,null,null,null,D.YG,null)
D.bw8=new B.ba(125e4)
D.bwe=new B.ba(17e4)
D.bwo=new B.ba(35964e8)
D.bwv=new B.ba(55e4)
D.bwz=new B.ba(68e4)
D.bx_=new B.ii(0,0,0,5)
D.bxf=new B.Q(0,16,16,0)
D.bxp=new B.Q(0,36,0,36)
D.bxx=new B.Q(0,54,0,0)
D.bxE=new B.Q(10,0,10,3)
D.bxP=new B.ii(10,16,10,10)
D.by0=new B.Q(10,6,4,6)
D.by3=new B.Q(10,8,10,6)
D.ajQ=new B.Q(11,8,11,11)
D.by8=new B.Q(12,0,12,24)
D.byl=new B.Q(12,12,12,4)
D.byo=new B.Q(12,12,8,12)
D.byD=new B.Q(12,8,8,12)
D.bz2=new B.Q(14,14,14,0)
D.bz7=new B.Q(14,14,14,90)
D.bzr=new B.Q(16,10,16,16)
D.bzs=new B.Q(16,10,16,20)
D.akD=new B.Q(16,6,16,28)
D.bA0=new B.Q(18,0,18,10)
D.bA2=new B.Q(18,0,18,30)
D.bA4=new B.Q(18,10,18,12)
D.bA5=new B.Q(18,10,18,14)
D.bAp=new B.Q(18,16,14,18)
D.bAu=new B.Q(18,18,18,12)
D.bAA=new B.Q(18,26,18,12)
D.bAF=new B.Q(18,34,18,34)
D.bAG=new B.Q(18,4,18,14)
D.bAL=new B.Q(18,8,18,24)
D.bB3=new B.Q(20,16,14,4)
D.bB8=new B.Q(20,18,12,4)
D.bBd=new B.Q(20,20,12,20)
D.bBg=new B.Q(20,22,20,20)
D.bBl=new B.Q(20,6,20,6)
D.bBv=new B.Q(22,18,22,18)
D.bBD=new B.Q(22,24,22,0)
D.bBG=new B.Q(22,24,22,4)
D.bBO=new B.Q(22,60,22,22)
D.bBU=new B.Q(24,24,24,22)
D.bC3=new B.Q(26,10,60,10)
D.bCb=new B.Q(28,44,28,44)
D.bCs=new B.Q(32,44,32,44)
D.bCA=new B.Q(38,30,38,20)
D.bCF=new B.Q(4,0,0,6)
D.bCR=new B.ii(4,4,4,4)
D.bDi=new B.ii(6,5,6,5)
D.bDn=new B.Q(6,6,8,6)
D.bDz=new B.Q(8,14,8,14)
D.bDA=new B.Q(8,22,8,22)
D.bDJ=new B.Q(8,6,12,6)
D.bDS=new B.Q(8,8,8,4)
D.aly=new B.Q(9,9,9,6)
D.bE2=new B.ii(2.5,2.5,2.5,2.5)
D.bE3=new B.Q(10.5,0,10.5,0)
D.bE4=new B.Q(7,1.5,7,1.5)
D.cZS=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bEk=new B.xr(null,null,D.cZS,A.B_)
D.cWK=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bEl=new B.xr(null,null,D.cWK,A.B_)
D.aTW=new B.F(!0,A.aB,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSh=new B.y("WORD DESIGN",null,D.aTW,null,null,null,null,null,null,null,null,null)
D.bEV=new B.bz(1,A.bb,D.fSh,null)
D.fRW=new B.y("Slides database",null,Ac.t7,null,null,null,null,null,null,null,null,null)
D.fP7=new B.y("Admin only \xb7 keep as many as you like",null,U.aTq,null,null,null,null,null,null,null,null,null)
D.dr8=w([D.fRW,A.bD,D.fP7],x.p)
D.btj=new B.fi(A.ag,A.e,A.i,A.E,null,A.p,null,0,D.dr8,null)
D.bEY=new B.bz(1,A.bb,D.btj,null)
D.fJl=new B.y("NGMY logo",null,A.fp,null,null,null,null,null,null,null,null,null)
D.bF0=new B.bz(1,A.bb,D.fJl,null)
D.fpC=new B.F(!0,A.ae,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUp=new B.y("TALK TO THE EDITOR",null,D.fpC,null,null,null,null,null,null,null,null,null)
D.bFj=new B.bz(1,A.bb,D.fUp,null)
D.fD0=new B.y("Tell the AI what to change",null,Ac.t7,null,null,null,null,null,null,null,null,null)
D.bFE=new B.bz(1,A.bb,D.fD0,null)
D.bGQ=new B.Ea(!0,"video/mp4")
D.fnO=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAV=new B.y("Move presentations between devices",null,D.fnO,null,null,null,!1,null,null,1,null,null)
D.bGU=new B.qy(A.e2,A.a5,A.f,D.fAV,null)
D.fCa=new B.y("Edit in Slides",null,A.j3,null,null,null,null,null,null,null,null,null)
D.bGV=new B.qy(A.e2,A.A,A.f,D.fCa,null)
D.bH9=new B.ds(1,A.cn,D.bGV,null)
D.a14=new B.a0(60988,"MaterialIcons",!1)
D.bKy=new B.a0(61352,"MaterialIcons",!1)
D.an4=new B.a0(61531,"MaterialIcons",!1)
D.bLK=new B.a0(63062,"MaterialIcons",!1)
D.bLR=new B.a0(63109,"MaterialIcons",!1)
D.bM3=new B.a0(63206,"MaterialIcons",!1)
D.anM=new B.a0(63238,"MaterialIcons",!1)
D.bMl=new B.a0(63338,"MaterialIcons",!1)
D.a1D=new B.a0(63365,"MaterialIcons",!1)
D.a1E=new B.a0(63367,"MaterialIcons",!1)
D.a1F=new B.a0(63368,"MaterialIcons",!1)
D.anX=new B.a0(63384,"MaterialIcons",!1)
D.bMD=new B.a0(63525,"MaterialIcons",!1)
D.bMG=new B.a0(63568,"MaterialIcons",!1)
D.bN0=new B.a0(983072,"MaterialIcons",!1)
D.bNp=new B.a0(983271,"MaterialIcons",!0)
D.ap2=new B.a0(983965,"MaterialIcons",!1)
D.ap3=new B.a0(983966,"MaterialIcons",!1)
D.bOj=new B.a0(984592,"MaterialIcons",!1)
D.bOC=new B.ae(A.uh,16,A.aB,null,null,null)
D.apd=new B.ae(A.qn,18,A.c,null,null,null)
D.bP0=new B.ae(A.C3,18,O.lz,null,null,null)
D.bPI=new B.ae(A.jU,11,null,null,null,null)
D.bPT=new B.ae(A.a1m,null,A.et,null,null,null)
D.bQq=new B.ae(A.rw,18,A.aB,null,null,null)
D.bQw=new B.ae(A3.Ci,14,null,null,null,null)
D.bQx=new B.ae(A.ea,28,A.ct,null,null,null)
D.bQJ=new B.ae(A.qp,20,A.c,null,null,null)
D.bQQ=new B.ae(A.yU,null,null,null,null,null)
D.bQW=new B.ae(A.jT,18,A.iQ,null,null,null)
D.bR0=new B.ae(A.la,null,null,null,null,null)
D.bLM=new B.a0(63065,"MaterialIcons",!1)
D.bRD=new B.ae(D.bLM,15,A.c,null,null,null)
D.bLS=new B.a0(63113,"MaterialIcons",!1)
D.bRJ=new B.ae(D.bLS,null,A.ae,null,null,null)
D.bS6=new B.ae(A.ue,22,A.bL,null,null,null)
D.bSs=new B.ae(A.wc,18,null,null,null,null)
D.bSy=new B.ae(A.Cm,12,A.c,null,null,null)
D.bNX=new B.a0(983687,"MaterialIcons",!1)
D.bSJ=new B.ae(D.bNX,null,A.bk,null,null,null)
D.bSS=new B.ae(A.hw,null,A.bk,null,null,null)
D.bTa=new B.ae(A.pf,22,A.c,null,null,null)
D.bTe=new B.ae(A.cz,13,A.c,null,null,null)
D.bTk=new B.ae(A.ea,26,A.aw,null,null,null)
D.bTo=new B.ae(A.rA,26,A.c,null,null,null)
D.OX=new B.ae(A.jU,8,A.c,null,null,null)
D.bTJ=new B.ae(A.qn,40,A.c,null,null,null)
D.bTK=new B.ae(A.bJv,null,null,null,null,null)
D.bTO=new B.ae(A.ut,20,null,null,null,null)
D.bNW=new B.a0(983683,"MaterialIcons",!1)
D.bTY=new B.ae(D.bNW,null,A.b_,null,null,null)
D.bTZ=new B.ae(A.jU,16,A.bk,null,null,null)
D.bUj=new B.ae(A.rB,null,null,null,null,null)
D.apO=new B.ae(A.we,22,A.c,null,null,null)
D.bUp=new B.ae(A.e5,17,A.c,null,null,null)
D.apP=new B.ae(A.jU,9,A.c,null,null,null)
D.bUv=new B.ae(A.w9,null,null,null,null,null)
D.bJM=new B.a0(57744,"MaterialIcons",!1)
D.bUC=new B.ae(D.bJM,null,null,null,null,null)
D.bUF=new B.ae(A.w9,16,null,null,null,null)
D.bOt=new B.a0(985181,"MaterialIcons",!1)
D.Hn=new B.ae(D.bOt,null,null,null,null,null)
D.bUR=new B.ae(A.la,16,A.bL,null,null,null)
D.bNP=new B.a0(983615,"MaterialIcons",!1)
D.bUT=new B.ae(D.bNP,12,A.c,null,null,null)
D.apV=new B.ae(A.yD,16,null,null,null,null)
D.bV0=new B.ae(A.e5,21,A.c,null,null,null)
D.bV5=new B.ae(A.hw,17,A.c,null,null,null)
D.bV6=new B.ae(A.ue,null,null,null,null,null)
D.bVo=new B.ae(A.a2l,20,A.aB,null,null,null)
D.bVD=new B.ae(A.oj,22,E.ng,null,null,null)
D.bVL=new B.ae(A.ry,13,A.ae,null,null,null)
D.bVN=new B.ae(A.aoP,20,A.aB,null,null,null)
D.bJt=new B.a0(57495,"MaterialIcons",!1)
D.bVS=new B.ae(D.bJt,null,null,null,null,null)
D.bVW=new B.ae(A.ok,18,A.c,null,null,null)
D.bWi=new B.ae(A.uw,28,A.c,null,null,null)
D.bWt=new B.ae(D.anM,null,A.aD,null,null,null)
D.bWu=new B.ae(A.qp,22,A.c,null,null,null)
D.aq3=new B.ae(A.a10,16,null,null,null,null)
D.bXg=new B.ae(A.ue,32,A.c,null,null,null)
D.bXY=new B.ae(A.jk,22,A.c,null,null,null)
D.bY0=new B.ae(A.rA,22,A.ae,null,null,null)
D.aqk=new B.ae(A.uh,null,A.bY,null,null,null)
D.bYY=new B.ae(A.ug,18,null,null,null,null)
D.bZz=new B.ae(A.e5,18,A.bG,null,null,null)
D.a2L=new B.ae(A.cz,18,A.aB,null,null,null)
D.bZG=new B.ae(A.aoJ,null,null,null,null,null)
D.c_6=new B.e5(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aTL,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eG,!0,null,null,null,null)
D.ffx=new B.F(!0,A.bM,null,null,null,null,null,A.cy,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c_o=new B.e5(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.ffx,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.af,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eG,!0,null,null,null,null)
D.c_P=new B.e5(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eG,!0,null,null,null,null)
D.d32=w([A.dF,A.aD],x.O)
D.c1V=new B.a9(A.a5,A.a8,A.x,D.d32,null,null)
D.c25=new B.a9(A.b4,A.b7,A.Vk,A.axm,null,null)
D.bcj=new B.u(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.q)
D.bhc=new B.u(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.q)
D.bkJ=new B.u(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.q)
D.beR=new B.u(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.q)
D.cOj=w([D.bcj,D.bhc,D.bkJ,D.beR],x.O)
D.c2o=new B.a9(A.ay,A.aE,A.x,D.cOj,A.HU,null)
D.drh=w([A.cS,A.bB,A.b6],x.O)
D.c2q=new B.a9(A.b4,A.b7,A.Vk,D.drh,null,null)
D.dsL=w([A.bk,A.cg],x.O)
D.c2v=new B.a9(A.a5,A.a8,A.x,D.dsL,null,null)
D.dnu=w([A.hJ,A.d1,A.aC],x.O)
D.c2x=new B.a9(A.ay,A.aE,A.x,D.dnu,null,null)
D.d9g=w([A.cO,A.fg],x.O)
D.c2B=new B.a9(A.a5,A.a8,A.x,D.d9g,null,null)
D.dra=w([O.lz,A.d1],x.O)
D.ar5=new B.a9(A.a5,A.a8,A.x,D.dra,null,null)
D.bhV=new B.u(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.q)
D.dr7=w([D.bhV,D.xY,A.c1],x.O)
D.c2G=new B.a9(A.a5,A.a8,A.x,D.dr7,null,null)
D.d4J=w([A.bj,A.cV,A.ed],x.O)
D.c2H=new B.a9(A.ay,A.aE,A.x,D.d4J,null,null)
D.Pd=new B.a9(A.a5,A.a8,A.x,A.I8,null,null)
D.bqU=new B.u(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.q)
D.cHg=w([D.bqU,A.c1,A.jx],x.O)
D.ara=new B.a9(A.ay,A.aE,A.x,D.cHg,null,null)
D.deS=w([A.tC,A.az,D.Bn],x.O)
D.c3J=new B.a9(A.a5,A.a8,A.x,D.deS,null,null)
D.bsj=new B.u(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.q)
D.bfR=new B.u(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.q)
D.blQ=new B.u(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.q)
D.d3Q=w([D.bsj,D.bfR,D.blQ],x.O)
D.arb=new B.a9(A.a5,A.a8,A.x,D.d3Q,null,null)
D.bhX=new B.u(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.q)
D.c5H=w([Av.aiu,D.bhX],x.O)
D.c3S=new B.a9(A.b4,A.b7,A.x,D.c5H,null,null)
D.d1O=w([A.ne,A.bx],x.O)
D.c3W=new B.a9(A.b4,A.b7,A.x,D.d1O,null,null)
D.dk9=w([A.aD,A.dG],x.O)
D.c42=new B.a9(A.a5,A.a8,A.x,D.dk9,null,null)
D.ahm=new B.u(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.q)
D.az7=w([D.ahm,D.jv,D.LL],x.O)
D.c4u=new B.a9(A.ay,A.aE,A.x,D.az7,null,null)
D.cH8=w([A.du,A.dK],x.O)
D.c4F=new B.a9(A.b4,A.b7,A.x,D.cH8,null,null)
D.dh4=w([A.xG,Ay.Fr],x.O)
D.c5t=new B.a9(A.a5,A.a8,A.x,D.dh4,null,null)
D.fKV=new B.y("Which Bio link?",null,A.cB,null,null,null,null,null,null,null,null,null)
D.c5E=new B.pX(null,D.fKV,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.ze=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a6P=new C.l2(2,"elegantNavy")
D.htc=w([A.Ys,D.jv,A.c1],x.O)
D.k_=new C.xR(0,"classic")
D.a6C=new C.jt("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a6P,4294967035,4279378237,4290283019,D.k_)
D.aIA=new C.l2(3,"elegantGold")
D.bbP=new B.u(1,1,0.9882352941176471,0.9529411764705882,A.q)
D.bcW=new B.u(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.q)
D.afO=new B.u(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.q)
D.hsF=w([D.bbP,D.bcW,D.afO],x.O)
D.a6A=new C.jt("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aIA,4294966515,4281016592,4289102906,D.k_)
D.dNO=new C.l2(22,"goldRibbon")
D.hsB=w([A.Ys,D.jv,A.ii],x.O)
D.a6t=new C.jt("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dNO,4294967035,4279378237,4291404327,D.k_)
D.dNP=new C.l2(23,"goldBaroque")
D.agv=new B.u(1,1,0.9647058823529412,0.8941176470588236,A.q)
D.hsH=w([D.agv,A.az,A.jx],x.O)
D.a6u=new C.jt("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dNP,4294964964,4283053072,4292128567,D.k_)
D.dNR=new C.l2(4,"elegantEmerald")
D.bee=new B.u(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.q)
D.bff=new B.u(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.q)
D.hsN=w([D.bee,D.bff,A.ii],x.O)
D.a6v=new C.jt("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dNR,4294376440,4279122734,4291404327,D.k_)
D.dNS=new C.l2(5,"elegantBurgundy")
D.bjv=new B.u(1,1,0.9686274509803922,0.9647058823529412,A.q)
D.hsU=w([D.bjv,A.af0,A.ii],x.O)
D.a6y=new C.jt("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dNS,4294965238,4283043359,4291404327,D.k_)
D.dNL=new C.l2(19,"goldFiligree")
D.Ms=new B.u(1,1,0.984313725490196,0.9529411764705882,A.q)
D.hsI=w([D.Ms,A.az,A.jx],x.O)
D.a6w=new C.jt("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dNL,4294966259,4279378237,4292128567,D.k_)
D.dNM=new C.l2(20,"goldLaurel")
D.bqK=new B.u(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.q)
D.hsV=w([A.LE,A.ii,D.bqK],x.O)
D.a6x=new C.jt("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dNM,4294966776,4282000405,4291404327,D.k_)
D.dNN=new C.l2(21,"goldCrest")
D.aeS=new B.u(1,1,0.9725490196078431,0.9254901960784314,A.q)
D.bqR=new B.u(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.q)
D.hsK=w([D.aeS,A.az,D.bqR],x.O)
D.a6B=new C.jt("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dNN,4294965484,4283053072,4292128567,D.k_)
D.dNQ=new C.l2(24,"goldStar")
D.bsa=new B.u(1,1,0.9882352941176471,0.9647058823529412,A.q)
D.hsO=w([D.bsa,A.az,D.jv],x.O)
D.a6z=new C.jt("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dNQ,4294966518,4279378237,4292128567,D.k_)
D.Hy=w([D.a6C,D.a6A,D.a6t,D.a6u,D.a6v,D.a6y,D.a6w,D.a6x,D.a6B,D.a6z],x.h)
D.qC=new C.mH(0,"blank")
D.SR=new C.mH(1,"title")
D.mT=new C.mH(2,"titleContent")
D.e7o=new C.mH(3,"twoColumn")
D.Dq=new C.mH(4,"section")
D.e7p=new C.mH(5,"comparison")
D.IK=new C.mH(6,"flashcard")
D.IL=new C.mH(7,"quiz")
D.IM=new C.mH(8,"worksheet")
D.arw=w([D.qC,D.SR,D.mT,D.e7o,D.Dq,D.e7p,D.IK,D.IL,D.IM],B.aw("O<mH>"))
D.aAd=w([Aa.XP,A.dK],x.O)
D.kM=w([A.c1,A.bL,A.hU,A.hT,D.Bn],x.O)
D.dJL=new C.j2("fireworks","Royal Fireworks","Thank you for celebrating with us",D.aAd,D.kM)
D.br4=new B.u(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.q)
D.bjt=new B.u(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.q)
D.d2_=w([D.br4,D.bjt],x.O)
D.dJC=new C.j2("confetti","Golden Confetti","Together we rise",D.d2_,D.kM)
D.cZY=w([A.nT,A.Xq],x.O)
D.dJD=new C.j2("crown","Crown of Glory","Built for our community",D.cZY,D.kM)
D.bfE=new B.u(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.q)
D.bj6=new B.u(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.q)
D.d6a=w([D.bfE,D.bj6],x.O)
D.uE=w([A.bM,A.aP,A.c,A.aL,A.al],x.O)
D.dJx=new C.j2("aurora","Aurora Gala","A brighter future, together",D.d6a,D.uE)
D.bkL=new B.u(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.q)
D.dha=w([G.aeu,D.bkL],x.O)
D.dJO=new C.j2("champagne","Champagne Toast","Cheers to every member",D.dha,D.kM)
D.dJP=new C.j2("diamonds","Diamond Rain","Every member is a jewel",Y.aAV,D.uE)
D.bcL=new B.u(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.q)
D.biz=new B.u(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.q)
D.dmJ=w([D.bcL,D.biz],x.O)
D.dJs=new C.j2("starburst","Golden Starburst","Thank you!",D.dmJ,D.kM)
D.c5O=w([A.fc,A.xS],x.O)
D.aeE=new B.u(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.q)
D.QM=w([A.oZ,A.ie,A.vR,A.nU,D.aeE],x.O)
D.dJW=new C.j2("balloons","Luxury Balloons","Let's celebrate",D.c5O,D.QM)
D.cZc=w([A.XD,A.w],x.O)
D.dJK=new C.j2("galaxy","Galaxy Spiral","The sky is not the limit",D.cZc,D.uE)
D.boX=new B.u(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.q)
D.ddB=w([A.jM,D.boX],x.O)
D.dJF=new C.j2("redcarpet","Red Carpet","Tonight we shine",D.ddB,D.kM)
D.bmw=new B.u(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.q)
D.bkw=new B.u(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.q)
D.di7=w([D.bmw,D.bkw],x.O)
D.dJu=new C.j2("coins","Gold Coin Rain","Every contribution counts",D.di7,D.kM)
D.dpv=w([A.du,A.hS],x.O)
D.dJA=new C.j2("lanterns","Sky Lanterns","Lighting the way together",D.dpv,D.kM)
D.bgQ=new B.u(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.q)
D.cX4=w([A.xU,D.bgQ],x.O)
D.dJw=new C.j2("hearts","Floating Hearts","Made with love",D.cX4,D.QM)
D.bdn=new B.u(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.q)
D.bel=new B.u(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.q)
D.dr5=w([D.bdn,D.bel],x.O)
D.dJV=new C.j2("petals","Rose Petals","Thank you, from our hearts",D.dr5,D.QM)
D.bpY=new B.u(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.q)
D.dn5=w([A.l4,D.bpY],x.O)
D.dJr=new C.j2("butterflies","Golden Butterflies","New beginnings",D.dn5,D.kM)
D.blM=new B.u(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.q)
D.cY8=w([D.blM,A.w],x.O)
D.dJN=new C.j2("neon","Neon Night","Let's go!",D.cY8,D.uE)
D.bic=new B.u(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.q)
D.dkl=w([A.M3,D.bic],x.O)
D.dJQ=new C.j2("disco","Disco Ball","Party time",D.dkl,D.uE)
D.bmm=new B.u(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.q)
D.djR=w([A.hJ,D.bmm],x.O)
D.dJv=new C.j2("sunrise","Golden Sunrise","A new day for our community",D.djR,D.kM)
D.djs=w([A.pT,A.dK],x.O)
D.dJR=new C.j2("pearls","Ocean Pearls","Deep roots, bright future",D.djs,D.uE)
D.bfL=new B.u(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.q)
D.djG=w([D.bfL,A.dK],x.O)
D.dJU=new C.j2("snow","Winter Gala","Warm wishes to all",D.djG,D.uE)
D.bbY=new B.u(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.q)
D.bd8=new B.u(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.q)
D.dpW=w([D.bbY,D.bd8],x.O)
D.dJJ=new C.j2("laurel","Laurel Victory","We did it together",D.dpW,D.kM)
D.bbO=new B.u(1,0.12156862745098039,0.06274509803921569,0.2,A.q)
D.bj2=new B.u(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.q)
D.cW3=w([D.bbO,D.bj2],x.O)
D.dJT=new C.j2("ribbons","Silk Ribbons","Elegance in every step",D.cW3,D.kM)
D.bkc=new B.u(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.q)
D.cH5=w([G.Bm,D.bkc],x.O)
D.dJG=new C.j2("kente","Kente Pride","Proud of our roots",D.cH5,D.kM)
D.bna=new B.u(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.q)
D.bqk=new B.u(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.q)
D.d7W=w([D.bna,D.bqk],x.O)
D.dJB=new C.j2("trophy","Trophy Shine","Winners together",D.d7W,D.kM)
D.djN=w([Ap.LR,A.w],x.O)
D.dJt=new C.j2("shooting","Shooting Stars","Make a wish",D.djN,D.uE)
D.bc5=new B.u(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.q)
D.aig=new B.u(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.q)
D.dqe=w([D.bc5,D.aig],x.O)
D.dJH=new C.j2("bokeh","Golden Bokeh","Shine bright",D.dqe,D.kM)
D.bcw=new B.u(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.q)
D.der=w([D.bcw,A.w],x.O)
D.dJz=new C.j2("orbits","Golden Orbits","Always moving forward",D.der,D.kM)
D.bpZ=new B.u(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.q)
D.daO=w([A.afK,D.bpZ],x.O)
D.dJE=new C.j2("flowers","Blooming Garden","Growing together",D.daO,D.QM)
D.bch=new B.u(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.q)
D.bd0=new B.u(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.q)
D.doX=w([D.bch,D.bd0],x.O)
D.dJy=new C.j2("music","Music Party","Celebrate with us",D.doX,D.uE)
D.be0=new B.u(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.q)
D.bqN=new B.u(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.q)
D.cXh=w([D.be0,D.bqN],x.O)
D.dJS=new C.j2("mandala","Royal Mandala","Harmony and unity",D.cXh,D.kM)
D.daU=w([G.Bm,D.aig],x.O)
D.dJM=new C.j2("sparklers","Golden Sparklers","Light up the night",D.daU,D.kM)
D.dJI=new C.j2("city","City Lights","The whole city celebrates",D.aAd,D.kM)
D.HH=w([D.dJL,D.dJC,D.dJD,D.dJx,D.dJO,D.dJP,D.dJs,D.dJW,D.dJK,D.dJF,D.dJu,D.dJA,D.dJw,D.dJV,D.dJr,D.dJN,D.dJQ,D.dJv,D.dJR,D.dJU,D.dJJ,D.dJT,D.dJG,D.dJB,D.dJt,D.dJH,D.dJz,D.dJE,D.dJy,D.dJS,D.dJM,D.dJI],B.aw("O<j2>"))
D.ez1=new B.z("","No ring")
D.ePf=new B.z("platinum","Platinum")
D.eLo=new B.z("glow","Glow")
D.eCK=new B.z("double","Double line")
D.eBE=new B.z("framed","Gallery frame")
D.eyy=new B.z("rosegold","Rose gold")
D.eMc=new B.z("jewels","Jeweled")
D.eIS=new B.z("aurora","Aurora")
D.CJ=w([D.ez1,A.TB,D.ePf,D.eLo,H.aPh,D.eCK,A.aPf,D.eBE,D.eyy,D.eMc,D.eIS],x.L)
D.cql=w([D.a6w,D.a6x,D.a6B,D.a6t,D.a6u,D.a6z],x.h)
D.bVe=new B.ae(G.amF,16,null,null,null,null)
D.b6P=new B.vI(A.bi,D.bVe,null,x.U)
D.bJV=new B.a0(58027,"MaterialIcons",!1)
D.bOI=new B.ae(D.bJV,16,null,null,null,null)
D.b6N=new B.vI(A.K,D.bOI,null,x.U)
D.bJW=new B.a0(58030,"MaterialIcons",!1)
D.bSQ=new B.ae(D.bJW,16,null,null,null,null)
D.b6Q=new B.vI(A.dW,D.bSQ,null,x.U)
D.cwE=w([D.b6P,D.b6N,D.b6Q],B.aw("O<vI<qc>>"))
D.cEn=w([A.Br,A.hp],x.O)
D.cEo=w([A.bj,A.be,A.ed],x.O)
D.QA=w([A.bL,A.hT,A.hU,A.az,A.nU],x.O)
D.cHb=w([A.c1,D.jv,D.LL],x.O)
D.cHJ=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.ewl=new B.z(4278913286,4280030216)
D.ewD=new B.z(4279373061,4278518787)
D.ewK=new B.z(4279898630,4278847235)
D.d7h=w([D.ewl,D.ewD,D.ewK],x.n)
D.d2L=w(["\u265b","\u269c","\u2726"],x.s)
D.dNK=new C.xT("Royal Onyx & Gold",D.d7h,4292128567,4294370209,4294965479,3874020544,D.d2L)
D.ew8=new B.z(4278326799,4278598442)
D.ewa=new B.z(4278395929,4278258953)
D.ewh=new B.z(4278599728,4278327826)
D.dpm=w([D.ew8,D.ewa,D.ewh],x.n)
D.cY0=w(["\u269c","\u2756","\u2727"],x.s)
D.dNH=new C.xT("Imperial Emerald",D.dpm,4293050997,4294699968,4294180856,3872254170,D.cY0)
D.ewb=new B.z(4278455076,4278918747)
D.ewg=new B.z(4278587439,4278322714)
D.ewu=new B.z(4279051376,4278455076)
D.dnq=w([D.ewb,D.ewg,D.ewu],x.n)
D.df9=w(["\u2654","\u2726","\u2748"],x.s)
D.dNB=new C.xT("Sapphire Crown",D.dnq,4291417834,4294967295,4294310143,3871986666,D.df9)
D.ewI=new B.z(4279894534,4283041554)
D.ewU=new B.z(4281008906,4279042307)
D.ex1=new B.z(4284221976,4279894534)
D.dtr=w([D.ewI,D.ewU,D.ex1],x.n)
D.cZl=w(["\u265b","\u2766","\u2726"],x.s)
D.dND=new C.xT("Ruby Throne",D.dtr,4293378685,4294963145,4294964466,3874213833,D.cZl)
D.ewC=new B.z(4279371039,4281995100)
D.ewM=new B.z(4280092723,4278714896)
D.ewZ=new B.z(4283045242,4279371039)
D.dpJ=w([D.ewC,D.ewM,D.ewZ],x.n)
D.dnN=w(["\u2655","\u2756","\u2727"],x.s)
D.dNI=new C.xT("Amethyst Palace",D.dpJ,4293314984,4294963421,4294702591,3873229802,D.dnN)
D.ewd=new B.z(4278519045,4280032287)
D.ewv=new B.z(4279111184,4278321666)
D.ewR=new B.z(4280492839,4278716426)
D.dmc=w([D.ewd,D.ewv,D.ewR],x.n)
D.ddo=w(["\u2726","\u25c6","\u2742"],x.s)
D.dNF=new C.xT("Obsidian & Platinum",D.dmc,4293256418,4294967295,4294638330,3872378836,D.ddo)
D.ewJ=new B.z(4279896588,4282194463)
D.ewS=new B.z(4280553487,4279043334)
D.ex_=new B.z(4283048488,4279896588)
D.dcR=w([D.ewJ,D.ewS,D.ex_],x.n)
D.dry=w(["\u2766","\u273f","\u2727"],x.s)
D.dNC=new C.xT("Rose Gold Velvet",D.dcR,4293440672,4294960345,4294964979,3874214602,D.dry)
D.ewe=new B.z(4278520340,4279180595)
D.ewj=new B.z(4278718495,4278322443)
D.ewG=new B.z(4279510591,4278520340)
D.cO0=w([D.ewe,D.ewj,D.ewG],x.n)
D.de5=w(["\u269c","\u2736","\u2756"],x.s)
D.dNG=new C.xT("Midnight Brass",D.cO0,4291405148,4293975208,4294439914,3872837564,D.de5)
D.exe=new B.z(4294703086,4293780428)
D.exa=new B.z(4294307549,4293187253)
D.exf=new B.z(4294966517,4293977807)
D.d0D=w([D.exe,D.exa,D.exf],x.n)
D.dev=w(["\u269c","\u265b","\u2726"],x.s)
D.dNJ=new C.xT("Ivory Marble & Gold",D.d0D,4289760572,4286209048,4280951062,3863625518,D.dev)
D.ewp=new B.z(4278978566,4280555024)
D.ewF=new B.z(4279504137,4278518530)
D.ewW=new B.z(4281211923,4278978566)
D.cZb=w([D.ewp,D.ewF,D.ewW],x.n)
D.dox=w(["\u2742","\u2726","\u265c"],x.s)
D.dNE=new C.xT("Onyx & Copper",D.cZb,4291856987,4294365880,4294964718,3873885630,D.dox)
D.cHR=w([D.dNK,D.dNH,D.dNB,D.dND,D.dNI,D.dNF,D.dNC,D.dNG,D.dNJ,D.dNE],B.aw("O<xT>"))
D.cKd=w([A.az,D.Bn,A.hT],x.O)
D.eF_=new B.z("Original",null)
D.eF9=new B.z("Wide 16:9",1.7777777777777777)
D.eHv=new B.z("Landscape 3:2",1.5)
D.eEq=new B.z("Photo 4:3",1.3333333333333333)
D.eT5=new B.z("Portrait 3:4",0.75)
D.axv=w([D.eF_,D.eF9,D.eHv,D.eEq,H.aP5,D.eT5],B.aw("O<+(n,K?)>"))
D.axw=w([A.hT,A.c2,A.b9,A.bw],x.O)
D.eHH=new B.z("","Original")
D.eJA=new B.z("circle","Circle")
D.eQ2=new B.z("rounded","Rounded")
D.eR1=new B.z("triangle","Triangle")
D.eLF=new B.z("hexagon","Hexagon")
D.eK_=new B.z("diamond","Diamond")
D.eIR=new B.z("arch","Arch")
D.CP=w([D.eHH,D.eJA,D.eQ2,D.eR1,D.eLF,D.eK_,D.eIR],x.L)
D.dIT=new C.lm("classic_blue","Classic Blue","Normal",A.bk,A.c,A.kB,A.d7,A.aJ)
D.dJ8=new C.lm("campus_green","Campus Green","Normal",A.b_,A.nc,A.tF,A.h3,A.e8)
D.dJ_=new C.lm("warm_sand","Warm Sand","Normal",A.dY,A.hU,A.bL,A.ij,A.o_)
D.dJ6=new C.lm("slate_minimal","Slate Minimal","Normal",A.br,A.aP,A.aL,A.M,A.aJ)
D.dIS=new C.lm("coral_fresh","Coral Fresh","Normal",A.ce,A.ig,A.pN,A.ke,A.tx)
D.dJ7=new C.lm("lavender_calm","Lavender Calm","Normal",A.b6,A.pQ,A.xN,A.nb,A.jt)
D.dIU=new C.lm("ocean_breeze","Ocean Breeze","Normal",A.fg,A.rg,A.tu,A.tz,A.o0)
D.ahu=new B.u(1,0.9803921568627451,0.9607843137254902,1,A.q)
D.dJ4=new C.lm("berry_pop","Berry Pop","Normal",A.f5,D.ahu,A.kx,G.Z1,A.Bs)
D.dIV=new C.lm("midnight_pro","Midnight Pro","Professional",A.aD,A.M,A.du,A.kx,A.cs)
D.dJ3=new C.lm("executive_navy","Executive Navy","Professional",A.d3,A.agL,A.d7,A.l2,A.bM)
D.dJ1=new C.lm("boardroom_charcoal","Boardroom Charcoal","Professional",A.al,A.bo,A.M,A.aP,A.cs)
D.dIW=new C.lm("corporate_steel","Corporate Steel","Professional",A.o3,A.M,A.mA,A.fi,A.bM)
D.dIZ=new C.lm("gold_luxe","Gold Luxe","Luxury",A.mv,A.dO,A.o7,A.m_,A.bL)
D.bmr=new B.u(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.q)
D.dJ2=new C.lm("rose_gold_elite","Rose Gold Elite","Luxury",A.hp,D.bmr,A.YN,A.ie,A.nU)
D.dJ5=new C.lm("platinum_night","Platinum Night","Luxury",A.cs,A.dK,A.bo,A.aP,A.aL)
D.dJ9=new C.lm("emerald_prestige","Emerald Prestige","Luxury",A.aW,A.pW,A.f7,A.q3,A.jJ)
D.dIR=new C.lm("royal_purple","Royal Purple","Luxury",A.na,A.XV,A.jt,A.kx,A.LD)
D.dJ0=new C.lm("neon_pitch","Neon Pitch","Bold",A.b9,A.dK,A.M,A.b3,A.aL)
D.dIY=new C.lm("crimson_impact","Crimson Impact","Bold",A.bx,A.jM,A.ek,A.rh,A.eP)
D.dIX=new C.lm("sunset_gallery","Sunset Gallery","Bold",A.fr,A.tx,A.ke,A.pN,A.mz)
D.HQ=w([D.dIT,D.dJ8,D.dJ_,D.dJ6,D.dIS,D.dJ7,D.dIU,D.dJ4,D.dIV,D.dJ3,D.dJ1,D.dIW,D.dIZ,D.dJ2,D.dJ5,D.dJ9,D.dIR,D.dJ0,D.dIY,D.dIX],B.aw("O<lm>"))
D.cVN=w([A.c1,D.jv],x.O)
D.dd7=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eID=new B.z("Faces & people",D.dd7)
D.cKh=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.ev_=new B.z("Ideas & work",D.cKh)
D.d3h=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eLK=new B.z("Nature",D.d3h)
D.ddg=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.eEY=new B.z("Places & things",D.ddg)
D.d6P=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eIW=new B.z("Symbols",D.d6P)
D.cVT=w([D.eID,D.ev_,D.eLK,D.eEY,D.eIW],B.aw("O<+(n,ai<n>)>"))
D.bcm=new B.u(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.q)
D.cWf=w([A.c1,D.afO,D.bcm],x.O)
D.b68=new B.ac(0,A.G,A.LA,A.aJn,40)
D.b5P=new B.ac(0,A.G,A.nY,A.eq,8)
D.cWs=w([D.b68,D.b5P],x.V)
D.cX_=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.axU=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a44=w([A.hT,A.ed,A.bx,A.av,A.ce],x.O)
D.cXV=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.ag2=new B.u(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.q)
D.cY5=w([A.YC,D.ag2,A.YC],x.O)
D.cYb=w([A.ii,D.jv,D.LL],x.O)
D.eEK=new B.z(A.bi,D.a1E)
D.eGa=new B.z(A.K,D.a1D)
D.ezO=new B.z(A.dW,D.a1F)
D.cZ6=w([D.eEK,D.eGa,D.ezO],B.aw("O<+(qc,a0)>"))
D.cU=new C.Jc(0,"text")
D.lM=new C.Jc(1,"image")
D.fa=new C.Jc(2,"shape")
D.SQ=new C.Jc(3,"pdf")
D.lj=new C.Jc(4,"signature")
D.a6W=new C.Jc(5,"bio")
D.d_3=w([D.cU,D.lM,D.fa,D.SQ,D.lj,D.a6W],B.aw("O<Jc>"))
D.d_4=w([A.bp,A.cE],B.aw("O<I7>"))
D.d_I=w(["School","Documents","Sign & present"],x.s)
D.b6d=new B.ac(0,A.G,A.ai5,A.uY,28)
D.d05=w([D.b6d],x.V)
D.d0o=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.QU=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.ayl=w([A.hT,A.FL,A.aL,A.c,A.oZ,A.az],x.O)
D.eSu=new B.z(0.1,0.08)
D.eLI=new B.z(0.3,0.05)
D.ezg=new B.z(0.55,0.1)
D.eDG=new B.z(0.8,0.06)
D.eGW=new B.z(0.92,0.16)
D.eGp=new B.z(0.2,0.2)
D.eEa=new B.z(0.7,0.22)
D.eKm=new B.z(0.05,0.4)
D.eHn=new B.z(0.95,0.45)
D.eA3=new B.z(0.12,0.7)
D.eCo=new B.z(0.88,0.75)
D.eCw=new B.z(0.4,0.9)
D.exw=new B.z(0.65,0.93)
D.eDj=new B.z(0.25,0.97)
D.eEH=new B.z(0.85,0.9)
D.eAY=new B.z(0.5,0.04)
D.d1V=w([D.eSu,D.eLI,D.ezg,D.eDG,D.eGW,D.eGp,D.eEa,D.eKm,D.eHn,D.eA3,D.eCo,D.eCw,D.exw,D.eDj,D.eEH,D.eAY],x.G)
D.d24=w([A.c,A.hp,A.aQ,A.aW],x.O)
D.e90=new C.jO("office_blue","Office Blue",A.bk,A.d7,A.aJ,A.c,A.kB)
D.e9b=new C.jO("campus_green","Campus Green",A.b_,A.h3,A.e8,A.nc,A.tF)
D.e91=new C.jO("sunset","Sunset",A.fr,A.ke,A.o_,A.ig,A.pN)
D.e92=new C.jO("midnight","Midnight",A.aD,A.kx,A.cs,A.M,A.du)
D.e9d=new C.jO("classic","Classic",A.d1,A.dO,A.m0,A.hU,A.fO)
D.e9a=new C.jO("rose_gold","Rose Gold",A.hp,A.xV,A.xU,A.vR,A.Br)
D.e8W=new C.jO("ocean_teal","Ocean Teal",A.fg,A.tz,A.o0,A.rg,A.tu)
D.e8V=new C.jO("slate_pro","Slate Pro",A.br,A.M,A.aJ,A.aP,A.aL)
D.e8U=new C.jO("neon_night","Neon Night",A.b9,A.b3,A.aL,A.dK,A.M)
D.e95=new C.jO("lavender","Lavender",A.b6,A.nb,A.jt,A.pQ,A.xN)
D.e97=new C.jO("coral","Coral",A.ce,A.ke,A.tx,A.ig,A.mz)
D.e8X=new C.jO("forest","Forest",A.hd,A.e_,A.cq,A.m1,A.et)
D.e8Y=new C.jO("berry","Berry",A.f5,G.Z1,A.Bs,D.ahu,A.kx)
D.e94=new C.jO("sand","Sand",A.dY,A.ij,A.o_,A.hU,A.bL)
D.e99=new C.jO("ice","Ice",A.o3,A.Fl,A.aJ,A.n8,A.fi)
D.e9_=new C.jO("charcoal","Charcoal",A.al,A.aP,A.cs,A.bo,A.M)
D.e8T=new C.jO("mint","Mint",A.aW,A.fM,A.h3,A.m1,A.q3)
D.e98=new C.jO("crimson","Crimson",A.bx,A.ne,A.jM,A.FJ,A.rh)
D.bfe=new B.u(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.q)
D.e93=new C.jO("gold","Gold",A.mv,A.xG,A.o7,D.bfe,A.m_)
D.e96=new C.jO("aqua","Aqua",A.bT,A.Fy,A.oW,A.pS,A.p_)
D.e8Z=new C.jO("plum","Plum",A.na,A.xS,A.Bs,A.Fm,A.rd)
D.e9c=new C.jO("steel","Steel",A.d3,A.d7,A.bo,A.kB,A.l2)
D.a4k=w([D.e90,D.e9b,D.e91,D.e92,D.e9d,D.e9a,D.e8W,D.e8V,D.e8U,D.e95,D.e97,D.e8X,D.e8Y,D.e94,D.e99,D.e9_,D.e8T,D.e98,D.e93,D.e96,D.e8Z,D.e9c],B.aw("O<jO>"))
D.d2p=w([A.c1,A.jx],x.O)
D.SS=new C.hG(10,"rotate3d")
D.IO=new C.hG(8,"flip")
D.aIT=new C.hG(19,"spiral")
D.qD=new C.hG(16,"bounce")
D.aIW=new C.hG(9,"flipVertical")
D.d2q=w([D.SS,D.IO,D.aIT,D.qD,D.aIW],x.i)
D.eg=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.d2O=w([0.62,1],x.x)
D.d3q=w([0,0.32,0.68,1],x.x)
D.mU=new C.hG(6,"zoom")
D.uS=new C.hG(4,"slideUp")
D.uR=new C.hG(2,"slideLeft")
D.d3z=w([D.mU,D.IO,D.uS,D.SS,D.uR],x.i)
D.d43=w([A.c2,A.hp,A.ie,A.hT,A.c],x.O)
D.b63=new B.ac(0,A.G,D.agh,A.uY,30)
D.d4O=w([D.b63],x.V)
D.ekd=new B.t(0,-2.5)
D.ek3=new B.t(-2.5,0)
D.eih=new B.t(2.5,0)
D.d4R=w([A.T5,A.a7m,A.aK_,A.a7l,D.ekd,H.aJW,D.ek3,D.eih],x.dN)
D.HW=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.d5n=w([23,114,69,56,80,144],x.t)
D.d5R=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.d6j=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.d80=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.d84=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bh=new C.uX(0,"rectangle")
D.eU=new C.uX(1,"circle")
D.lk=new C.uX(6,"hexagon")
D.d8j=w([D.bh,D.eU,D.lk],x.m)
D.ou=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.ahC=new B.u(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.q)
D.d8R=w([D.ahC,A.e_],x.O)
D.ezx=new B.z("","Classic")
D.exL=new B.z("caps","Bold caps")
D.eKp=new B.z("elegant","Elegant")
D.eQm=new B.z("shadow","Shadow")
D.eE3=new B.z("neon","Neon glow")
D.eO6=new B.z("marker","Highlighter")
D.eQA=new B.z("stamp","Stamp")
D.eCW=new B.z("threed","3D")
D.eKW=new B.z("fire","Fire")
D.eLU=new B.z("ice","Ice")
D.eJz=new B.z("chalk","Chalk")
D.eJE=new B.z("comic","Comic")
D.eQD=new B.z("sunset","Sunset")
D.eRR=new B.z("softglow","Soft glow")
D.eMV=new B.z("lowercase","Lowercase")
D.eK7=new B.z("double","Echo")
D.eS_=new B.z("whisper","Whisper")
D.azh=w([D.ezx,D.exL,D.eKp,D.eQm,D.eE3,H.aPg,D.eO6,D.eQA,H.aPi,D.eCW,H.aPa,D.eKW,D.eLU,D.eJz,D.eJE,A.TB,D.eQD,D.eRR,D.eMV,D.eK7,D.eS_],x.L)
D.daa=w([3,5,7,10,12,15],x.t)
D.dbH=w([A.c2,A.bL,A.c,A.eH,A.cS],x.O)
D.dAz=new C.tx(10,"cardWorld")
D.Di=new C.BQ(3,"rounded")
D.dQJ=new C.lp("world","NGMY World",D.dAz,D.Di,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dAA=new C.tx(11,"cardSplit")
D.dQF=new C.lp("business","Business Wire",D.dAA,D.Di,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dAB=new C.tx(12,"cardBreaking")
D.dQS=new C.lp("breaking","Breaking Red",D.dAB,D.Di,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dAC=new C.tx(13,"cardFeature")
D.dQL=new C.lp("feature","Tech Feature",D.dAC,D.Di,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aHp=new C.tx(6,"circle")
D.aHj=new C.BQ(4,"circle")
D.dQP=new C.lp("parchment","Royal Circle",D.aHp,D.aHj,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dQE=new C.lp("ocean","Blue Ocean",D.aHp,D.aHj,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dAF=new C.tx(7,"rail")
D.aHi=new C.BQ(1,"double")
D.dQG=new C.lp("forest","Green Leaf",D.dAF,D.aHi,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aHm=new C.tx(1,"sideBySide")
D.dQU=new C.lp("herald","NGMY Herald",D.aHm,D.Di,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aHl=new C.tx(0,"classic")
D.a68=new C.BQ(9,"shadow")
D.dQT=new C.lp("daily","The Daily",D.aHl,D.a68,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dAD=new C.tx(2,"splash")
D.aHk=new C.BQ(6,"cutCorner")
D.dQD=new C.lp("tabloid","Big Tabloid",D.dAD,D.aHk,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aHq=new C.tx(9,"minimal")
D.dQO=new C.lp("modern","Modern Digest",D.aHq,D.Di,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aHn=new C.tx(3,"magazine")
D.aHh=new C.BQ(0,"plain")
D.dQK=new C.lp("midnight","Midnight Edition",D.aHn,D.aHh,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dAG=new C.tx(8,"banner")
D.dQM=new C.lp("metro","Metro Wire",D.dAG,D.aHk,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dAy=new C.BQ(8,"arch")
D.dQN=new C.lp("sunrise","Sunrise Post",D.aHn,D.dAy,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aHo=new C.tx(5,"scrapbook")
D.dAx=new C.BQ(5,"tape")
D.dQI=new C.lp("neon","Neon Beat",D.aHo,D.dAx,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dAE=new C.tx(4,"wrap")
D.dQV=new C.lp("gold","Golden Press",D.dAE,D.a68,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dQW=new C.lp("minimal","Paper White",D.aHq,D.a68,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dQH=new C.lp("gazette","Fresh Gazette",D.aHl,D.aHi,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dQR=new C.lp("times","Classic Times",D.aHm,D.aHh,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Sn=new C.BQ(2,"polaroid")
D.dQQ=new C.lp("scrapbook","Memory Scrapbook",D.aHo,D.Sn,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a4z=w([D.dQJ,D.dQF,D.dQS,D.dQL,D.dQP,D.dQE,D.dQG,D.dQU,D.dQT,D.dQD,D.dQO,D.dQK,D.dQM,D.dQN,D.dQI,D.dQV,D.dQW,D.dQH,D.dQR,D.dQQ],B.aw("O<lp>"))
D.dbT=w([0.45,1],x.x)
D.HZ=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.dcj=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.ho3=new C.oJ("Original",0,1,1,0,0,0)
D.ho7=new C.oJ("Black & white",0,1.1,0,0,0,0)
D.hnV=new C.oJ("Noir",-0.05,1.55,0,0,0,0)
D.hnZ=new C.oJ("Sepia",0,1,0.25,0.9,0,0)
D.hnY=new C.oJ("Vivid",0,1.15,1.6,0,0,0)
D.hnR=new C.oJ("Pop",0,1.3,1.9,0,0,0)
D.hnT=new C.oJ("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.ho4=new C.oJ("Matte",0,0.9,0.85,0,0,0.55)
D.ho_=new C.oJ("Cool",0,1.05,1,-0.8,0,0)
D.ho6=new C.oJ("Warm",0.03,1.05,1.1,0.8,0,0)
D.hnS=new C.oJ("Golden hour",0.04,1,1.25,1,0,0)
D.hnX=new C.oJ("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.ho5=new C.oJ("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.hnW=new C.oJ("Dramatic",-0.05,1.5,1.2,0,0,0)
D.ho1=new C.oJ("Retro",0,0.9,0.7,0.4,0,0.35)
D.ho0=new C.oJ("Forest",0,1,1.2,-0.1,-0.45,0)
D.ho2=new C.oJ("Rose",0,1,1.1,0.3,0.4,0)
D.hnU=new C.oJ("Ocean",0,1,1.2,-0.5,-0.2,0)
D.dck=w([D.ho3,D.ho7,D.hnV,D.hnZ,D.hnY,D.hnR,D.hnT,D.ho4,D.ho_,D.ho6,D.hnS,D.hnX,D.ho5,D.hnW,D.ho1,D.ho0,D.ho2,D.hnU],B.aw("O<oJ>"))
D.bbJ=new B.u(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.q)
D.dcm=w([D.ahC,A.e_,D.bbJ],x.O)
D.euT=new B.z(0.12,0.3)
D.eM4=new B.z(0.26,0.75)
D.eKl=new B.z(0.8,0.22)
D.eQM=new B.z(0.9,0.7)
D.eMU=new B.z(0.5,0.15)
D.eOZ=new B.z(0.65,0.85)
D.eBu=new B.z(0.08,0.85)
D.dcA=w([D.euT,D.eM4,D.eKl,D.eQM,D.eMU,D.eOZ,D.eBu],x.G)
D.azt=w([A.b9,A.c2,A.bw,A.bj],x.O)
D.ddj=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer and Cipher Lab were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in. Latest billboard update: no boards are joined any more. Billboard layouts are Two far apart, Three in a row, Three scattered far, Skyline, Two lines of three and Billboard park, with boards of different heights and sizes, the taller ones standing behind and some far from the others. The chooser shows two billboards in every row. Every kind of billboard has its own camera move, and each layout has its own tour where the drone flies from board to board. The rooftop board stands on a tall house with one big TV on each side of the door, and its board, TVs, logo and frame no longer vanish when the angle changes. Cipher Lab was removed from Core Protocol. In the city wiring job the person chooses what goes into an empty box from the tray (nothing is picked for them), and any outlet counts for an outlet and any switch for a switch as long as it is wired right, so the red frames in the house turn green when the job is really done. The zoom buttons answer at once with a big step and keep zooming while held, and pinching measures from the last step so the zoom is never thrown back. FAMILY GAMES: in the Family Tree there is a games button (a game controller icon) next to the Family Book button, and the redesigned Tree display settings sheet has a Family Games card. The system makes games by itself from the people in the tree: Family Kahoot (10 timed questions with coloured answer tiles, points for speed, a streak bonus and a podium against family members), Fireside Stories (a painted African village at night, with huts, a baobab, the moon and a living village: someone pounds grain, a girl carries water on her head, children roll a hoop, a goat grazes, a drummer plays. The oldest person in the tree sits by the fire and talks, with the words coming out while the mouth moves; the other elder and the children look at whoever speaks, blink, nod, ask things, gasp, laugh and clap, and the fire grows with every right answer), Safari Journey (a painted bus drives to a stop for each question, a villager asks, a wrong answer is a flat tyre), Line Up (tap two people to swap them until the family stands in the right order, then everybody cheers) and Village School (the teacher writes each question on a chalkboard, then a report card with the mistakes explained). Small trees get culture questions with Swahili family words and African proverbs. The person who created the tree can write up to two games of their own, in the Kahoot style, with up to 12 questions each, and everyone who opens the tree can play them. Players win Family Stars on this phone, with badges: Little Seed, Young Listener, Storyteller, Village Pride, Keeper of Roots and Elder of the Fire. The Family Games hub now shows eight games, two in every row: Family Kahoot, Fireside Stories, Calabash Catch (slide a basket under the gourd with the right answer as gourds fall), Plant the Tree (drag the children of a family onto the branches and watch the tree grow), Who Am I (a shadow turns into a face as clues come), Safari Journey, Line Up and Village School. Memory Drums, the old Family Test and the old Elder Order were removed. CITY PEOPLE: everybody in the city is one of the 3D characters you made (the X Bot and the Soldier for the residents, and whichever of the X Bot, the Dancer or the Soldier you choose for yourself on the tour sheet), read from their .glb files. They are dressed in their own colours (skin on the head and arms, a shirt, trousers), the X Bot residents get a face with eyes, brows, nose and mouth, and the head and hands keep more detail than the rest. The three character files are kept on the phone after the first visit so the same people appear with no internet; while a file is still being read nobody else is drawn in their place. The 3D view skips whole blocks of the town that are behind you, too far or off the side of the screen, and keeps billboard pictures on top of their boards. PHONE (Phone Unlock page, under Open on your phone, the Phone button): a whole virtual phone of its own inside NGMY, separate from the device in use, with a lock screen (swipe up or tap), a home screen with a dock and a clock card, a home bar to go home, a status bar, and its own apps: Videos (paste the link of any video, YouTube, Vimeo or a video file such as mp4 or webm, and it plays on the virtual phone; save videos and see recent ones), Web (type an address; some sites refuse to be shown inside another page), Notes, Calculator, Clock (clock, stopwatch, timer) and Settings (phone name, six wallpapers, brightness, reset). The phone is a phone of its own: it has its own name, its own phone number and device ID (made when it is first opened, new again after a reset), its own place in the world that you choose in Settings (the Maps app shows that place and the phone never reads the place of the device running it), its own storage that no other part of NGMY reads, and its own App Store (Contacts, Messages, Calendar, Maps, Music, Photos, Tic Tac Toe and Number Guess: tap Get to install, the icon appears on its home screen, Remove takes it away, and what is installed is remembered). Files lets the phone download a file from a link into its own storage (up to 1.5 MB a file and 4 MB in all, and only where the site allows the browser to read it; otherwise a shortcut is saved), and downloaded pictures show in Photos. Contacts, messages, calendar events, notes, saved videos and playlists are all kept on the phone. Limits: the phone uses the internet connection of the device it runs on, so its internet address is the same as that device (a web page cannot change it), and apps from Google Play or the Apple App Store cannot run inside a web page. Everything on the virtual phone is kept on its own and a reset clears only it. PHONE WALL (inside the Phone, there is no separate button): the Phone shows one phone. When a YouTube, Vimeo or video file link is played in the Videos app, the four front phones of a wall of 100 open, two in a row, filling the room, each playing the video with the picture filling its screen, with the waiting phones stacked behind. Each of the 100 phones has its own phone number, device ID and place and a memory of the videos it watched (kept between visits). The four start one after the other so the first is never kept waiting. They play without sound, because a browser only starts several videos on its own when they are muted. When the video is over, the next four phones slide in and play it from the start, set after set (25 sets), and after the 100th phone it starts again from the first four (round 2, 3...). Buttons: next four, start again from phone 1, and One phone, which goes back to the single phone with the same video playing there. The single phone plays a video straight away with no extra settings. A web page link (not a video) stays on the single phone. EARTH GLOBE OFFLINE: the Universe Explorer Earth Globe map data is kept on the phone after the first visit and preloaded, so the globe opens with no internet; if it cannot load it says so and has a Try again button. TITLE ANIMATOR: more than 24 title movements, 8 letter looks and 20 different painted background scenes (not just colours); Download the animation saves the whole animation as a looping GIF, not a single picture. BUSINESS CARDS: the cards on the Home screen are saved safely: a background refresh can no longer write an old list over a card that was just added, there is a second copy of the cards kept beside the first that restores them if the first is damaged, and a business card put on Home is also kept on the account when one of the 5 cloud places is free, so it is still there after the app is reset. The studio card list uses a key made from the email so saved cards are not lost when the app is built again. Every business card has a Share my card button (the NFC icon on the card on Home and next to Download in the studio): it makes a contact file (vCard) with the name, job, company, phone, email, website, address and logo, shows a QR code any phone camera can read, opens the phone share sheet so the card can be sent by AirDrop to a phone held close, copies the contact text, and writes the card to an NFC tag on phones that allow it (Chrome on Android; iPhone Safari does not allow web pages to use NFC, and Apple Wallet passes need an Apple developer certificate, so they are not available yet).","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.dds=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.ddE=w([A.c,A.fi,A.dt,A.vG],x.O)
D.bfu=new B.u(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.q)
D.deH=w([D.bfu,D.ag2],x.O)
D.deJ=w([A.tC,A.az],x.O)
D.deY=w([0,0.25,0.75,1],x.x)
D.df_=w([A.xJ,A.oZ],x.O)
D.aIt=new C.l2(10,"kenteSunset")
D.hsD=w([D.agv,A.k9,A.az],x.O)
D.dM3=new C.jt("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aIt,4294964964,4282000405,4279983648,D.k_)
D.aIu=new C.l2(11,"indigoMudcloth")
D.bcQ=new B.u(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.q)
D.hsR=w([D.bcQ,A.ag_,A.ii],x.O)
D.dMb=new C.jt("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aIu,4294439140,4279903102,4279903102,D.k_)
D.aIv=new C.l2(12,"adinkraRoyal")
D.bry=new B.u(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.q)
D.hsS=w([D.aeS,D.bry,A.az],x.O)
D.dMd=new C.jt("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aIv,4294965484,4285218591,4287322667,D.k_)
D.aIw=new C.l2(13,"nileLotus")
D.bnv=new B.u(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.q)
D.bjO=new B.u(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.q)
D.hsX=w([D.bnv,D.bjO,A.ii],x.O)
D.dMc=new C.jt("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aIw,4294244340,4279196764,4279196764,D.k_)
D.aIx=new C.l2(14,"shweshweIvory")
D.bhJ=new B.u(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.q)
D.bgi=new B.u(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.q)
D.bdm=new B.u(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.q)
D.hsE=w([D.bhJ,D.bgi,D.bdm],x.O)
D.dM8=new C.jt("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aIx,4294505710,4279970378,4291058750,D.k_)
D.rQ=new C.l2(15,"certIvoryNavy")
D.hsC=w([D.Ms,D.jv,A.ii],x.O)
D.aHZ=new C.xR(1,"ringsNdoa")
D.dM5=new C.jt("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.rQ,4294966259,4279378237,4291404327,D.aHZ)
D.a6E=new C.xR(2,"coupleCards")
D.dM0=new C.jt("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.rQ,4294966259,4279378237,4291404327,D.a6E)
D.Dl=new C.l2(18,"certIvoryNavyBar")
D.aeR=new B.u(1,1,0.9882352941176471,0.9686274509803922,A.q)
D.hsQ=w([D.aeR,D.jv,A.ii],x.O)
D.aI_=new C.xR(3,"kuhoweshaForm")
D.dLZ=new C.jt("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.Dl,4294966519,4279378237,4291404327,D.aI_)
D.agf=new B.u(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.q)
D.ht9=w([D.Ms,D.agf,A.ii],x.O)
D.a6F=new C.xR(4,"mahariPande")
D.dM1=new C.jt("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.rQ,4294966259,4279904068,4291404327,D.a6F)
D.aIy=new C.l2(16,"certIvoryGreen")
D.bh0=new B.u(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.q)
D.hsG=w([A.LE,D.bh0,A.ii],x.O)
D.aI0=new C.xR(5,"familiaMti")
D.dM7=new C.jt("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aIy,4294966776,4280241466,4291404327,D.aI0)
D.a6G=new C.xR(6,"ndoaSafi")
D.dM_=new C.jt("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.Dl,4294966519,4279378237,4291404327,D.a6G)
D.blL=new B.u(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.q)
D.hsJ=w([D.Ms,A.ii,D.blL],x.O)
D.a6H=new C.xR(7,"peteWide")
D.dM4=new C.jt("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.rQ,4294966259,4282001936,4291404327,D.a6H)
D.dMe=new C.xR(8,"muhuriCrest")
D.dLY=new C.jt("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.rQ,4294966259,4279378237,4291404327,D.dMe)
D.hsT=w([D.aeR,D.agf,A.ii],x.O)
D.dMf=new C.xR(9,"fomuWazi")
D.dMa=new C.jt("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.Dl,4294966519,4279904068,4291404327,D.dMf)
D.aIz=new C.l2(17,"certIvoryRose")
D.bhO=new B.u(1,1,0.9725490196078431,0.9607843137254902,A.q)
D.hsW=w([D.bhO,D.aha,A.ii],x.O)
D.a6D=new C.xR(10,"upendoOrnate")
D.dM6=new C.jt("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aIz,4294965493,4286200650,4291404327,D.a6D)
D.dfp=w([D.dM3,D.dMb,D.dMd,D.dMc,D.dM8,D.dM5,D.dM0,D.dLZ,D.dM1,D.dM7,D.dM_,D.dM4,D.dLY,D.dMa,D.dM6],x.h)
D.eh=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.IP=new C.wc(0,"emojis")
D.Ds=new C.wc(1,"pictures")
D.IQ=new C.wc(2,"icons3d")
D.a6Y=new C.wc(3,"animations")
D.SU=new C.wc(4,"videoMotion")
D.Dt=new C.wc(5,"luxe")
D.a4H=w([D.IP,D.Ds,D.IQ,D.a6Y,D.SU,D.Dt],B.aw("O<wc>"))
D.ePA=new B.z(A.e5,"Looks")
D.eDz=new B.z(A.Cz,"Light")
D.eDw=new B.z(A.nu,"Colour")
D.eBv=new B.z(A.yJ,"Effects")
D.anG=new B.a0(63112,"MaterialIcons",!1)
D.ey0=new B.z(D.anG,"Crop")
D.dfW=w([D.ePA,D.eDz,D.eDw,D.eBv,D.ey0],x.f2)
D.dgA=w([],x.D)
D.ht6=w([],x.L)
D.eBJ=new B.z("Flashcard",D.IK)
D.eFB=new B.z("Quiz",D.IL)
D.eHC=new B.z("Worksheet",D.IM)
D.eEC=new B.z("Notes",D.mT)
D.eG8=new B.z("Section",D.Dq)
D.dhg=w([D.eBJ,D.eFB,D.eHC,D.eEC,D.eG8],B.aw("O<+(n,mH)>"))
D.dNT=new C.l2(6,"beadedPearl")
D.bkz=new B.u(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.q)
D.hta=w([I.YM,D.bkz,A.ii],x.O)
D.aHX=new C.jt("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dNT,4294966774,4286209070,4291404327,D.k_)
D.dNU=new C.l2(7,"artDeco")
D.boR=new B.u(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.q)
D.brT=new B.u(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.q)
D.ht8=w([D.boR,D.brT,A.c1],x.O)
D.aHY=new C.jt("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dNU,4294440434,4280228630,4290283019,D.k_)
D.dNV=new C.l2(8,"rosetteCorners")
D.bqY=new B.u(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.q)
D.bfz=new B.u(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.q)
D.bku=new B.u(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.q)
D.hsM=w([D.bqY,D.bfz,D.bku],x.O)
D.aHW=new C.jt("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dNV,4294702831,4285218602,4291394365,D.k_)
D.dNW=new C.l2(9,"modernLedger")
D.hsL=w([A.c,D.jv,D.jv],x.O)
D.aHV=new C.jt("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dNW,4294967295,4279378237,4279378237,D.k_)
D.dhk=w([D.aHX,D.aHY,D.aHW,D.aHV],x.h)
D.dht=w([A.ie,A.oZ],x.O)
D.cm=new C.hG(0,"none")
D.dh=new C.hG(1,"fade")
D.IN=new C.hG(3,"slideRight")
D.aIV=new C.hG(5,"slideDown")
D.e7v=new C.hG(7,"zoomOut")
D.a6X=new C.hG(11,"cube")
D.e7q=new C.hG(12,"blur")
D.aIS=new C.hG(13,"dissolve")
D.e7r=new C.hG(14,"wipeLeft")
D.e7s=new C.hG(15,"wipeRight")
D.ST=new C.hG(17,"push")
D.e7t=new C.hG(18,"flash")
D.aIU=new C.hG(20,"swing")
D.e7u=new C.hG(21,"curtain")
D.Rt=w([D.cm,D.dh,D.uR,D.IN,D.uS,D.aIV,D.mU,D.e7v,D.IO,D.aIW,D.SS,D.a6X,D.e7q,D.aIS,D.e7r,D.e7s,D.qD,D.ST,D.e7t,D.aIT,D.aIU,D.e7u],x.i)
D.Ru=w([D.a6C,D.a6A,D.a6t,D.a6u,D.a6v,D.a6y,D.a6w,D.a6x,D.a6B,D.a6z,D.aHX,D.aHY,D.aHW,D.aHV],x.h)
D.dhW=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.di_=w([A.xO,A.hT,A.c1],x.O)
D.eCQ=new B.z(A.uj,"Design")
D.eRa=new B.z(D.anX,"Word sizes")
D.eME=new B.z(A.Ct,"Text")
D.bNf=new B.a0(983182,"MaterialIcons",!1)
D.eMI=new B.z(D.bNf,"Photo")
D.exz=new B.z(A.lH,"Logo")
D.eSs=new B.z(A.Hk,"News")
D.di5=w([D.eCQ,D.eRa,D.eME,D.eMI,D.exz,D.eSs],x.f2)
D.di6=w(["golddust","sparkle","sheen"],x.s)
D.e8S=new C.ex("upload_pdf",L.OL,"Upload PDF")
D.e81=new C.ex("sign_paper",A.Hh,"Sign Paper")
D.bMx=new B.a0(63438,"MaterialIcons",!1)
D.e8O=new C.ex("hd_photo",D.bMx,"HD Photo")
D.e7U=new C.ex("sharpen",E.a1o,"Sharpen")
D.e83=new C.ex("print",L.OL,"Download PDF")
D.e8v=new C.ex("rotate",D.anG,"Rotate")
D.e8c=new C.ex("text_box",A.Ct,"Text Box")
D.e8e=new C.ex("picture",A.up,"Picture")
D.e8a=new C.ex("title",A.yZ,"Title")
D.e86=new C.ex("subtitle",T.aov,"Subtitle")
D.e8E=new C.ex("bullets",K.a1G,"Bullet List")
D.e87=new C.ex("numbered",A.OD,"Numbered")
D.e8H=new C.ex("quote",A3.Ci,"Quote")
D.e8j=new C.ex("citation",A.oj,"Citation")
D.e8K=new C.ex("date_stamp",Ai.a1t,"Date Stamp")
D.e8x=new C.ex("page_number",A.yY,"Page #")
D.e8B=new C.ex("header_bar",A.Cw,"Header")
D.e8d=new C.ex("footer_bar",Aq.a2g,"Footer")
D.e82=new C.ex("divider",A.uo,"Divider")
D.e7Z=new C.ex("highlight",A.a1N,"Highlight")
D.e8D=new C.ex("redact",A.uy,"Redact")
D.e8q=new C.ex("callout",A.Cb,"Callout")
D.e8M=new C.ex("checkboxes",K.amZ,"Checklist")
D.e8n=new C.ex("table",A.a2d,"Table")
D.e8h=new C.ex("memo",K.a2_,"Memo")
D.e8r=new C.ex("letter",A.H3,"Letter")
D.bM7=new B.a0(63259,"MaterialIcons",!0)
D.e7T=new C.ex("agenda",D.bM7,"Agenda")
D.e84=new C.ex("toc",Az.ao9,"Contents")
D.bMs=new B.a0(63406,"MaterialIcons",!1)
D.e8o=new C.ex("sig_line",D.bMs,"Sign Line")
D.e7M=new C.ex("initial_line",A.iW,"Initials")
D.e7P=new C.ex("approved",A.lH,"APPROVED")
D.e8t=new C.ex("draft",A.pf,"DRAFT")
D.e8z=new C.ex("confidential",A.jU,"Confidential")
D.e8C=new C.ex("sticky",A.Hd,"Sticky Note")
D.e8L=new C.ex("progress",A.ao8,"Progress")
D.bNH=new B.a0(983507,"MaterialIcons",!1)
D.e8_=new C.ex("stars",D.bNH,"Star Rating")
D.e7K=new C.ex("equation",A.anZ,"Equation")
D.e7V=new C.ex("timeline",A.a2e,"Timeline")
D.e8i=new C.ex("two_col",A.a2h,"Two Columns")
D.e7X=new C.ex("compare",A2.a1y,"Compare")
D.e7I=new C.ex("duplicate_el",A.fR,"Duplicate")
D.e8Q=new C.ex("delete_el",A.ea,"Delete")
D.e8G=new C.ex("bring_fwd",I.anT,"Bring Front")
D.e7N=new C.ex("send_back",I.anS,"Send Back")
D.e8s=new C.ex("align_left",D.a1E,"Align L")
D.e8y=new C.ex("align_center",D.a1D,"Align C")
D.e8P=new C.ex("align_right",D.a1F,"Align R")
D.e8b=new C.ex("word_count",A0.a15,"Word Count")
D.e88=new C.ex("link_text",A.hi,"Link")
D.e8w=new C.ex("phone",A.iX,"Phone")
D.e7Y=new C.ex("email",A.Cf,"Email")
D.e8R=new C.ex("qr_placeholder",A.jD,"QR Placeholder")
D.e7S=new C.ex("rectangle",A4.wd,"Rectangle")
D.e8m=new C.ex("circle",A.ru,"Circle")
D.e7O=new C.ex("arrow",A.jT,"Arrow")
D.e8F=new C.ex("line",A.uo,"Line")
D.e80=new C.ex("triangle",A.a1v,"Triangle")
D.bMf=new B.a0(63318,"MaterialIcons",!1)
D.e85=new C.ex("grayscale",D.bMf,"Grayscale")
D.e8f=new C.ex("brighten",K.anj,"Brighten")
D.e8k=new C.ex("flip_h",A.GU,"Flip H")
D.bMn=new B.a0(63348,"MaterialIcons",!1)
D.e8N=new C.ex("flip_v",D.bMn,"Flip V")
D.e8A=new C.ex("cover_page",A.qj,"Cover Page")
D.e7L=new C.ex("invoice",A.hj,"Invoice")
D.e7W=new C.ex("resume",A.mL,"Resume")
D.e89=new C.ex("minutes",A.pa,"Minutes")
D.e7Q=new C.ex("lab_report",A.OP,"Lab Report")
D.e7R=new C.ex("rubric",A.uk,"Rubric")
D.e8l=new C.ex("flashcard_tool",V.Hf,"Flashcard")
D.e8I=new C.ex("quiz_tool",A.H8,"Quiz Block")
D.e8p=new C.ex("worksheet_tool",M.GI,"Worksheet")
D.e8u=new C.ex("outline_share",A.OR,"Share Outline")
D.e8J=new C.ex("export_json",D.an4,"Export JSON")
D.e7J=new C.ex("new_slide",D.a14,"New Slide")
D.e8g=new C.ex("present",A.qp,"Present")
D.diC=w([D.e8S,D.e81,D.e8O,D.e7U,D.e83,D.e8v,D.e8c,D.e8e,D.e8a,D.e86,D.e8E,D.e87,D.e8H,D.e8j,D.e8K,D.e8x,D.e8B,D.e8d,D.e82,D.e7Z,D.e8D,D.e8q,D.e8M,D.e8n,D.e8h,D.e8r,D.e7T,D.e84,D.e8o,D.e7M,D.e7P,D.e8t,D.e8z,D.e8C,D.e8L,D.e8_,D.e7K,D.e7V,D.e8i,D.e7X,D.e7I,D.e8Q,D.e8G,D.e7N,D.e8s,D.e8y,D.e8P,D.e8b,D.e88,D.e8w,D.e7Y,D.e8R,D.e7S,D.e8m,D.e7O,D.e8F,D.e80,D.e85,D.e8f,D.e8k,D.e8N,D.e8A,D.e7L,D.e7W,D.e89,D.e7Q,D.e7R,D.e8l,D.e8I,D.e8p,D.e8u,D.e8J,D.e7J,D.e8g],B.aw("O<ex>"))
D.diM=w([A.cs,A.al],x.O)
D.ex5=new B.z(4286331629,4292552567)
D.ewT=new B.z(4280640491,4278630100)
D.exd=new B.z(4294538006,4292943176)
D.ewf=new B.z(4278556265,4280640491)
D.dcM=w([D.ex5,D.ewT,D.exd,D.ewf],x.n)
D.cAq=w([4294626325,4280472558,4294210230],x.t)
D.e7D=new C.nT("colorful","Colorful",A.nu,D.dcM,4294967295,3875536895,D.cAq,D.mU)
D.ewH=new B.z(4279522093,4279657780)
D.ewX=new B.z(4281750292,4283268111)
D.ewi=new B.z(4278603323,4279203438)
D.ewY=new B.z(4282343954,4279599165)
D.cLv=w([D.ewH,D.ewX,D.ewi,D.ewY],x.n)
D.cA8=w([4288931381,4294829706,4287033260],x.t)
D.e7z=new C.nT("nature","Nature",A.Hi,D.cLv,4294442727,3874290891,D.cA8,D.dh)
D.ewB=new B.z(4279369771,4283178389)
D.ewy=new B.z(4279179050,4286456526)
D.ewP=new B.z(4280163147,4290648157)
D.ew7=new B.z(4278322711,4285343961)
D.d2F=w([D.ewB,D.ewy,D.ewP,D.ew7],x.n)
D.cAm=w([4294210230,4280472558,4289170426],x.t)
D.e7x=new C.nT("vibe","Vibe",A.a1L,D.d2F,4294967295,3874869502,D.cAm,D.uR)
D.ex9=new B.z(4290007817,4292552567)
D.ex3=new B.z(4286328082,4294286859)
D.ex8=new B.z(4288485197,4294538006)
D.ex2=new B.z(4285343961,4293675161)
D.c6f=w([D.ex9,D.ex3,D.ex8,D.ex2],x.n)
D.cAr=w([4294829706,4294967295,4284999929],x.t)
D.e7y=new C.nT("celebration","Celebration",A.la,D.c6f,4294967295,4009752557,D.cAr,D.qD)
D.eww=new B.z(4279179050,4280171146)
D.ewA=new B.z(4279310375,4280232247)
D.ewo=new B.z(4278916151,4280172719)
D.ewx=new B.z(4279179050,4281549141)
D.cW8=w([D.eww,D.ewA,D.ewo,D.ewx],x.n)
D.cA3=w([4281908728,4294626325,4287931320],x.t)
D.e7C=new C.nT("professional","Professional",A.C9,D.cW8,4294967295,3872118241,D.cA3,D.ST)
D.ews=new B.z(4278995566,4278413729)
D.ewk=new B.z(4278727492,4279137424)
D.ewQ=new B.z(4280171146,4278751666)
D.ewt=new B.z(4278995566,4279590517)
D.cEf=w([D.ews,D.ewk,D.ewQ,D.ewt],x.n)
D.cA6=w([4286436348,4284410580,4294829706],x.t)
D.e7E=new C.nT("ocean","Ocean",K.a2j,D.cEf,4294967295,3873501950,D.cA6,D.uS)
D.ex4=new B.z(4286328082,4294538006)
D.ex6=new B.z(4286781507,4294677052)
D.ex0=new B.z(4283178389,4294197086)
D.ex7=new B.z(4288295954,4294688548)
D.cSk=w([D.ex4,D.ex6,D.ex0,D.ex7],x.n)
D.cAs=w([4294829706,4294967295,4294747557],x.t)
D.e7F=new C.nT("sunset","Sunset",A.OU,D.cSk,4294967295,4009749973,D.cAs,D.dh)
D.exh=new B.z(4294967295,4294047225)
D.exc=new B.z(4294507260,4294967295)
D.exg=new B.z(4294967295,4293060848)
D.exb=new B.z(4294507260,4294047225)
D.d5X=w([D.exh,D.exc,D.exg,D.exb],x.n)
D.cA1=w([4280640491,4279179050,4287931320],x.t)
D.e7B=new C.nT("minimal","Minimal",A4.wd,D.d5X,4279179050,4282865001,D.cA1,D.dh)
D.ewr=new B.z(4278979081,4280886564)
D.ewL=new B.z(4280031511,4278979081)
D.ewz=new B.z(4279308561,4281148438)
D.ewq=new B.z(4278979081,4280031511)
D.dkQ=w([D.ewr,D.ewL,D.ewz,D.ewq],x.n)
D.cAf=w([4292128567,4294829706,4289241758],x.t)
D.e7G=new C.nT("elegant","Elegant",A.mb,D.dkQ,4294898631,3873957348,D.cAf,D.aIS)
D.ewN=new B.z(4280159034,4282058596)
D.ewn=new B.z(4278916151,4280163147)
D.ewV=new B.z(4281208933,4278916151)
D.ewE=new B.z(4279502891,4283178389)
D.dsc=w([D.ewN,D.ewn,D.ewV,D.ewE],x.n)
D.cAo=w([4294296657,4292128567,4291081725],x.t)
D.e7A=new C.nT("royal","Royal Gold",A.jk,D.dsc,4294965222,3874084351,D.cAo,D.mU)
D.ewc=new B.z(4278464302,4280163147)
D.ewm=new B.z(4278916151,4279455306)
D.ewO=new B.z(4280163147,4283040846)
D.ew9=new B.z(4278332450,4281413249)
D.dcp=w([D.ewc,D.ewm,D.ewO,D.ew9],x.n)
D.cA2=w([4281193663,4289170426,4294210230],x.t)
D.e7H=new C.nT("aurora","Aurora Glow",A.e5,D.dcp,4293983738,3869766608,D.cA2,D.dh)
D.wB=w([D.e7D,D.e7z,D.e7x,D.e7y,D.e7C,D.e7E,D.e7F,D.e7B,D.e7G,D.e7A,D.e7H],B.aw("O<nT>"))
D.bl8=new B.u(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.djn=w([A.r8,D.bl8,A.r8],x.O)
D.djE=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.djI=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eMw=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.eCq=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.eHa=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.etH=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eFM=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eDW=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eIs=new B.z("Surprise me","")
D.dkg=w([D.eMw,D.eCq,D.eHa,D.etH,D.eFM,D.eDW,D.eIs],x.L)
D.bdo=new B.u(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.q)
D.bpn=new B.u(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.q)
D.dl4=w([A.c,D.bdo,D.bpn],x.O)
D.dnh=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aIr=new C.l2(0,"heritageGold")
D.bjy=new B.u(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.q)
D.htb=w([D.bjy,A8.agr,A.az],x.O)
D.dM9=new C.jt("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aIr,4294570461,4284234270,4292128567,D.k_)
D.aIs=new C.l2(1,"heritageCrimson")
D.bbF=new B.u(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.q)
D.bhL=new B.u(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.q)
D.bpb=new B.u(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.q)
D.hsP=w([D.bbF,D.bhL,D.bpb],x.O)
D.dM2=new C.jt("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aIs,4294635750,4285213214,4292912216,D.k_)
D.dnl=w([D.a6C,D.a6A,D.dM9,D.dM2,D.a6v,D.a6y],x.h)
D.dRX=new C.rG(1,"circuit")
D.dSp=new C.mf("neural","Neural Link","Robotic",D.dRX,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dRW=new C.rG(0,"grid")
D.dSm=new C.mf("signal","Signal Grid","Robotic",D.dRW,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dS1=new C.rG(2,"hexes")
D.dS7=new C.mf("core","Core Protocol","Robotic",D.dS1,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aIP=new C.rG(11,"diagonal")
D.dSi=new C.mf("steel","Steel Tech","Robotic",D.aIP,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aIQ=new C.rG(3,"rings")
D.dS6=new C.mf("vault","Vault Gold","Robotic",D.aIQ,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dS_=new C.rG(13,"leaves")
D.dS9=new C.mf("forest","Forest Morning","Nature",D.dS_,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aIR=new C.rG(5,"waves")
D.dSg=new C.mf("ocean","Ocean Calm","Nature",D.aIR,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dS2=new C.rG(6,"sunset")
D.dSl=new C.mf("sunset","Sunset Glow","Nature",D.dS2,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dS3=new C.rG(7,"mountains")
D.dS8=new C.mf("mountain","Mountain Air","Nature",D.dS3,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dS4=new C.rG(8,"stars")
D.dSf=new C.mf("night","Night Sky","Nature",D.dS4,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a6V=new C.rG(4,"orbs")
D.dSd=new C.mf("aurora","Aurora","Nature",D.a6V,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dSn=new C.mf("sand","Sand Dune","Nature",D.aIR,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dS5=new C.rG(9,"rays")
D.dSc=new C.mf("golden","Golden Hour","Warm",D.dS5,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dSa=new C.mf("royal","Royal Purple","Warm",D.aIP,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dSb=new C.mf("rose","Rose Petal","Warm",D.a6V,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dRZ=new C.rG(12,"blocks")
D.dSe=new C.mf("electric","Electric Blue","Bold",D.dRZ,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dSo=new C.mf("mint","Fresh Mint","Bold",D.a6V,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dS0=new C.rG(14,"minimal")
D.dSk=new C.mf("white","Clean White","Clean",D.dS0,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dRY=new C.rG(10,"frame")
D.dSh=new C.mf("midnight","Midnight Gold","Clean",D.dRY,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dSj=new C.mf("community","Community Green","Clean",D.aIQ,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a5b=w([D.dSp,D.dSm,D.dS7,D.dSi,D.dS6,D.dS9,D.dSg,D.dSl,D.dS8,D.dSf,D.dSd,D.dSn,D.dSc,D.dSa,D.dSb,D.dSe,D.dSo,D.dSk,D.dSh,D.dSj],B.aw("O<mf>"))
D.dnI=w([D.Bn,A.tC,A.hT,A.c1],x.O)
D.do_=w([D.ahm,D.jv],x.O)
D.do9=w(["pdf","docx","txt","md"],x.s)
D.eVW=new B.bk(-3,150,34)
D.eVX=new B.bk(-3,214,62)
D.eVY=new B.bk(-3,288,62)
D.dp1=w([D.eVW,D.eVX,D.eVY],B.aw("O<+(K,K,K)>"))
D.dpx=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dqc=w(["Write","Design","Print & fold"],x.s)
D.k0=new C.uX(2,"triangle")
D.Dr=new C.uX(3,"arrow")
D.fD=new C.uX(4,"line")
D.k1=new C.uX(5,"parallelogram")
D.dqf=w([D.bh,D.eU,D.k0,D.Dr,D.fD,D.k1,D.lk],x.m)
D.ev7=new B.z(240,96)
D.exT=new B.z(560,46)
D.dql=w([D.ev7,D.exT],x.G)
D.htm=new C.xU(0,"classic")
D.dNZ=new C.nP("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aIr,4294570461,4282000405,4284234270)
D.dOa=new C.nP("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aIs,4294635750,4281999378,4285213214)
D.dO_=new C.nP("elegant_navy","Umoja Mzuri",y.s,D.a6P,4294967035,4279378237,4290283019)
D.dOc=new C.nP("elegant_gold","Umoja wa Dhahabu",y.Q,D.aIA,4294966515,4281016592,4289102906)
D.dOe=new C.nP("kente_sunset","Kente ya Jua",y.H,D.aIt,4294964964,4282000405,4279983648)
D.dNX=new C.nP("indigo_mudcloth","Nguo ya Indigo",y.n,D.aIu,4294439140,4279903102,4279903102)
D.dO1=new C.nP("adinkra_royal","Muhuri wa Adinkra",y.z,D.aIv,4294965484,4285218591,4287322667)
D.dO6=new C.nP("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aIw,4294244340,4279196764,4279196764)
D.dO8=new C.nP("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aIx,4294505710,4279970378,4291058750)
D.htn=new C.xU(1,"ringsNdoa")
D.dO0=new C.nP("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.rQ,4294966259,4279378237,4291404327)
D.htp=new C.xU(2,"coupleCards")
D.dOb=new C.nP("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.rQ,4294966259,4279378237,4291404327)
D.htq=new C.xU(3,"kuhoweshaForm")
D.dO7=new C.nP("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.Dl,4294966519,4279378237,4291404327)
D.htr=new C.xU(4,"mahariPande")
D.dNY=new C.nP("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.rQ,4294966259,4279904068,4291404327)
D.hts=new C.xU(5,"familiaMti")
D.dOd=new C.nP("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aIy,4294966776,4280241466,4291404327)
D.htt=new C.xU(6,"ndoaSafi")
D.dO4=new C.nP("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.Dl,4294966519,4279378237,4291404327)
D.htu=new C.xU(7,"peteWide")
D.dO3=new C.nP("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.rQ,4294966259,4282001936,4291404327)
D.htv=new C.xU(8,"muhuriCrest")
D.dO2=new C.nP("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.rQ,4294966259,4279378237,4291404327)
D.htw=new C.xU(9,"fomuWazi")
D.dO5=new C.nP("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.Dl,4294966519,4279904068,4291404327)
D.hto=new C.xU(10,"upendoOrnate")
D.dO9=new C.nP("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aIz,4294965493,4286200650,4291404327)
D.RJ=w([D.dNZ,D.dOa,D.dO_,D.dOc,D.dOe,D.dNX,D.dO1,D.dO6,D.dO8,D.dO0,D.dOb,D.dO7,D.dNY,D.dOd,D.dO4,D.dO3,D.dO2,D.dO5,D.dO9],B.aw("O<nP>"))
D.Dp=new C.arX(0,"landscape169")
D.ox=new C.arX(1,"portrait916")
D.dr9=w([D.Dp,D.ox],B.aw("O<arX>"))
D.aB7=w([A.hT,A.bL,A.cS,A.ie,A.c],x.O)
D.uI=w([A.c1,A.ij],x.O)
D.eua=new B.z(1000,"M")
D.ezm=new B.z(900,"CM")
D.exN=new B.z(500,"D")
D.ew2=new B.z(400,"CD")
D.eub=new B.z(100,"C")
D.ezn=new B.z(90,"XC")
D.exO=new B.z(50,"L")
D.ew3=new B.z(40,"XL")
D.euh=new B.z(10,"X")
D.ezz=new B.z(9,"IX")
D.ey4=new B.z(5,"V")
D.exy=new B.z(4,"IV")
D.euM=new B.z(1,"I")
D.drS=w([D.eua,D.ezm,D.exN,D.ew2,D.eub,D.ezn,D.exO,D.ew3,D.euh,D.ezz,D.ey4,D.exy,D.euM],x.ek)
D.eWZ=new B.cw(["open",A.iW,"Open & write","Keep writing this book"])
D.eXp=new B.cw(["print",A.ut,"Print as a book","Fold and staple it"])
D.ds2=w([D.eWZ,D.eXp],B.aw("O<+(n,a0,n,n)>"))
D.dsK=w([D.a6X,D.mU,D.IO,D.ST,D.dh,D.SS],x.i)
D.eNe=new B.z(-1,"Small")
D.etW=new B.z(0,"Normal")
D.euL=new B.z(1,"Big")
D.evn=new B.z(2,"Huge")
D.dtj=w([D.eNe,D.etW,D.euL,D.evn],x.ek)
D.dtL=w([49,65,89,38,83,89],x.t)
D.dtR=w([A.tC,A.hT,A.c1],x.O)
D.duk=w([D.dh,D.mU,D.uR,D.a6X,D.IO,D.ST],x.i)
D.aGr=new B.du([0,D.ML,8,D.aiQ,12,D.aiR],B.aw("du<H,a4o>"))
D.edw={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bp1=new B.u(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.q)
D.cWj=w([A.bL,D.bp1],x.O)
D.dh2=w([A.b3,A.bk],x.O)
D.dbt=w([A.c2,A.aQ,A.bG],x.O)
D.ds3=w([A.cs,A.br],x.O)
D.d3D=w([A.b9,A.f5],x.O)
D.dei=w([A.b6,A.fc],x.O)
D.bho=new B.u(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.q)
D.ddz=w([D.bho,A.oZ],x.O)
D.d7K=w([A.hb,A.xP],x.O)
D.d3r=w([A.bt,A.cg],x.O)
D.dx_=new B.bw(D.edw,[D.cWj,H.art,D.dh2,D.dbt,D.ds3,D.d3D,D.dei,D.ddz,D.d7K,D.d3r],B.aw("bw<n,ai<u>>"))
D.ecN={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a5P=new B.bw(D.ecN,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.aw("bw<n,n>"))
D.a5V=new B.bw(A.hP,[],B.aw("bw<H,+icon3d,picture(n?,n?)>"))
D.dBi=new F.No(30,null)
D.dGm=new F.mD("Chapter 1","","","")
D.dqV=w([D.dGm],x.B)
D.dGq=new F.rw("My Book","","",D.dqV,E.aHL)
D.dGo=new F.uN("starry",null,null,null,null,"","","")
D.dGr=new F.rw("Dream Big","","",E.a4P,D.dGo)
D.dGp=new F.uN("story",null,null,null,null,"","","")
D.dGs=new F.rw("Little Lion","","",E.a4P,D.dGp)
D.dGn=new F.uN("vintage",null,null,null,null,"","","")
D.dGt=new F.rw("Our Story","","",E.a4P,D.dGn)
D.dJq=new C.EW("","NGMY","","")
D.dQC=new C.zR("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.Y,"","","")
D.e7w=new C.b2v(null,null,null,null)
D.e9e=new C.as1(null)
D.e9q=new C.asv(0,"smaller")
D.e9r=new C.asv(1,"bigger")
D.aJ4=new C.asv(2,"fit")
D.egV=new B.t(3,6)
D.ehe=new B.t(4,8)
D.elp=new B.D(E.ajI,T.aea,null)
D.elt=new B.D(A.a_1,A.lZ,null)
D.bOZ=new B.ae(A.kJ,16,A.bY,null,null,null)
D.ely=new B.D(A.iA,D.bOZ,null)
D.bb3=new B.fj(2.2,null,null,null,null,A.c,null,null,null,null)
D.elM=new B.D(A.Gl,D.bb3,null)
D.bZx=new B.ae(A.cz,16,A.aB,null,null,null)
D.elQ=new B.D(A.ev,D.bZx,null)
D.fEq=new B.y("Play",null,A.nL,null,null,null,null,null,null,null,null,null)
D.dhh=w([U.apW,A.t4,D.fEq],x.p)
D.f11=new B.ce(A.aM,A.e,A.P,A.m,null,A.p,null,0,D.dhh,null)
D.elT=new B.D(A.nq,D.f11,null)
D.bbc=new B.fj(2.4,null,null,null,null,null,null,null,null,null)
D.f6S=new B.a6(20,20,D.bbc,null)
D.elZ=new B.D(A.iA,D.f6S,null)
D.fNP=new B.y("Seconds per slide",null,A.fT,null,null,null,null,null,null,null,null,null)
D.em9=new B.D(A.bf,D.fNP,null)
D.enu=new C.a9d(2,"print")
D.enx=new B.iT(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.ep9=new B.hh("/Annot")
D.epb=new B.hh("/URI")
D.fyp=new B.y("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.erK=new B.jv("share",48,D.fyp,null,B.aw("jv<n>"))
D.bZr=new B.ae(A.e5,14,A.eH,null,null,null)
D.erT=new B.cN(null,-2,-2,null,null,null,D.bZr,null)
D.cYx=w([I.agZ,A.L],x.O)
D.c51=new B.a9(A.a5,A.a8,A.x,D.cYx,null,null)
D.b3z=new B.o(null,null,null,null,null,D.c51,A.n)
D.bul=new B.l_(D.b3z,A.bg,null,null)
D.es4=new B.cN(0,0,null,0,8,null,D.bul,null)
D.dmd=w([A.hU,A.mz,A.ce],x.O)
D.esJ=new B.c2(A.A,0.5,A.x,null,0,D.dmd,null,null)
D.evg=new B.z(0.22,A.bk)
D.ezT=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.eC4=new B.z(0.5,A.hp)
D.eLD=new B.z(0.78,A.aW)
D.eWP=new B.cw([A.bw,0.22,0.7,2.6])
D.eWV=new B.cw([A.b9,0.36,1.2,1.3])
D.eX0=new B.cw([A.dG,0.28,0.2,0.4])
D.eX6=new B.cw([A.cw,0.05,0.3,0.35])
D.eXc=new B.cw([A.bt,0.28,0.9,0])
D.eXk=new B.cw([A.aD,-0.25,-0.15,0.45])
D.eYa=new B.cw([A.c2,0.42,1,4.1])
D.f0K=new B.aaa(9)
D.bQ7=new B.ae(A.Hk,28,A.bG,null,null,null)
D.fOn=new B.y("NGMY News",null,A.de,null,null,null,null,null,null,null,null,null)
D.bEt=new B.bz(1,A.bb,D.fOn,null)
D.dpA=w([D.bQ7,A.at,D.bEt],x.p)
D.f0W=new B.ce(A.aM,A.e,A.i,A.m,null,A.p,null,0,D.dpA,null)
D.bQi=new B.ae(A.oj,16,A.c,null,null,null)
D.fPY=new B.y("Book",null,A.oF,null,null,null,null,null,null,null,null,null)
D.dtQ=w([D.bQi,A.en,D.fPY],x.p)
D.f13=new B.ce(A.aM,A.e,A.P,A.m,null,A.p,null,0,D.dtQ,null)
D.bX1=new B.ae(A.jU,10,A.c,null,null,null)
D.fCq=new B.y("Pro",null,A.nH,null,null,null,null,null,null,null,null,null)
D.dhm=w([D.bX1,A.qJ,D.fCq],x.p)
D.f17=new B.ce(A.aM,A.e,A.P,A.m,null,A.p,null,0,D.dhm,null)
D.fNN=new B.y("Make a newspaper",null,A.V0,null,null,null,null,null,null,null,null,null)
D.c6d=w([E.a2F,A.ac,D.fNN],x.p)
D.f18=new B.ce(A.aM,A.e,A.P,A.m,null,A.p,null,0,D.c6d,null)
D.bVv=new B.ae(A.la,18,A.bL,null,null,null)
D.fEE=new B.y("Ending celebration",null,A.hE,null,null,null,null,null,null,null,null,null)
D.doA=w([D.bVv,A.bm,D.fEE],x.p)
D.f1b=new B.ce(A.aM,A.e,A.i,A.m,null,A.p,null,0,D.doA,null)
D.bWN=new B.ae(A.iW,18,A.ke,null,null,null)
D.fhX=new B.F(!0,A.ke,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQg=new B.y("Write",null,D.fhX,null,null,null,null,null,null,null,null,null)
D.d5L=w([D.bWN,A.ac,D.fQg],x.p)
D.f1i=new B.ce(A.aM,A.e,A.P,A.m,null,A.p,null,0,D.d5L,null)
D.fCo=new B.y("Download picture",null,A.nI,null,null,null,null,null,null,null,null,null)
D.bGX=new B.qy(A.e2,A.A,A.f,D.fCo,null)
D.bH7=new B.ds(1,A.cn,D.bGX,null)
D.dhL=w([L.apN,A.ac,D.bH7],x.p)
D.f1j=new B.ce(A.aM,A.b8,A.i,A.m,null,A.p,null,0,D.dhL,null)
D.bS4=new B.ae(A.Hk,22,A.bG,null,null,null)
D.fMk=new B.y("NGMY NEWS",null,H.a9B,null,null,null,null,null,null,null,null,null)
D.cXY=w([D.bS4,A.ac,D.fMk],x.p)
D.f1s=new B.ce(A.aM,A.e,A.P,A.m,null,A.p,null,0,D.cXY,null)
D.f1E=new B.pm(!1,!1,null,T.X4,null,A.c0,null,null,null)
D.a8I=new B.jp([D.cm,D.dh,D.uR,D.IN,D.uS,D.aIV],B.aw("jp<hG>"))
D.efc={title:0,quote:1,closing:2,bio:3}
D.f2P=new B.dF(D.efc,4,x.M)
D.ed5={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.f2S=new B.dF(D.ed5,5,x.M)
D.eeu={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a8J=new B.dF(D.eeu,8,x.M)
D.edH={Design:0,Transitions:1,Insert:2}
D.f2X=new B.dF(D.edH,3,x.M)
D.htF=new B.jp([D.a6Y],B.aw("jp<wc>"))
D.edQ={float3d:0,drift:1,pulse:2}
D.f30=new B.dF(D.edQ,3,x.M)
D.aQr=new B.jp([D.IK,D.IL,D.IM],B.aw("jp<mH>"))
D.ed3={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aQu=new B.dF(D.ed3,14,x.M)
D.htG=new B.dF(A.hP,0,B.aw("dF<wc>"))
D.edN={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.U_=new B.dF(D.edN,4,x.M)
D.ecX={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aQx=new B.dF(D.ecX,30,x.M)
D.edW={circle:0,triangle:1,hexagon:2,diamond:3}
D.f3n=new B.dF(D.edW,4,x.M)
D.f5M=new B.av(390,844)
D.f6B=new B.a6(20,20,A.Lx,null)
D.aRj=new B.a6(null,2.5,null,null)
D.f6L=new B.a6(18,18,A.Lx,null)
D.bWR=new B.ae(A.jk,19,A.c,null,null,null)
D.f6X=new B.a6(38,38,D.bWR,null)
D.bV2=new B.ae(A.z2,22,A.c,null,null,null)
D.f6Z=new B.a6(40,40,D.bV2,null)
D.f7x=new B.hR(2,10,10,1.15,null)
D.aRq=new B.hR(2,16,14,0.62,null)
D.bCr=new B.Q(32,30,32,40)
D.bcG=new B.u(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.bQ4=new B.ae(A.qj,56,D.bcG,null,null,null)
D.ahV=new B.u(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fk5=new B.F(!0,D.ahV,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJe=new B.y("Your books will live here.",null,D.fk5,null,A.K,null,null,null,null,null,null,null)
D.d8I=w([D.bQ4,A.W,D.fJe],x.p)
D.bti=new B.fi(A.ag,A.e,A.i,A.m,null,A.p,null,0,D.d8I,null)
D.em6=new B.D(D.bCr,D.bti,null)
D.f7T=new B.mj(D.em6,null)
D.fJb=new B.y("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.f8a=new B.b2(D.fJb,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fHi=new B.y("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.f8b=new B.b2(D.fHi,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fMo=new B.y("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.f8k=new B.b2(D.fMo,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fMX=new B.y("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.f8z=new B.b2(D.fMX,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fFT=new B.y("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.f8M=new B.b2(D.fFT,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fUm=new B.y("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.f94=new B.b2(D.fUm,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fRi=new B.y("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.f9f=new B.b2(D.fRi,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fN5=new B.y("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.f9Z=new B.b2(D.fN5,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fAy=new B.y("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.faf=new B.b2(D.fAy,null,null,null,null,null,null,null,A.iJ,null,null,null,null,A.q7,!1,null,null,null,A.t,null)
D.fCy=new B.y("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.fax=new B.b2(D.fCy,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fIS=new B.y("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.faz=new B.b2(D.fIS,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fIy=new B.y("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.faA=new B.b2(D.fIy,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fPd=new B.y("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.faB=new B.b2(D.fPd,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fwy=new B.y("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.faK=new B.b2(D.fwy,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fDJ=new B.y("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.fb6=new B.b2(D.fDJ,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fSY=new B.y("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.fb8=new B.b2(D.fSY,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fSt=new B.y("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.fbc=new B.b2(D.fSt,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fvr=new B.y("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fbe=new B.b2(D.fvr,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fOi=new B.y("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fbn=new B.b2(D.fOi,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fS2=new B.y("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.fbC=new B.b2(D.fS2,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fRU=new B.y("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.fbE=new B.b2(D.fRU,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fvi=new B.y("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.fbK=new B.b2(D.fvi,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fzw=new B.y("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.fcb=new B.b2(D.fzw,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fR5=new B.y("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.fcn=new B.b2(D.fR5,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fzi=new B.y("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fcC=new B.b2(D.fzi,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.bkO=new B.u(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.q)
D.cWz=w([A.ie,A.oZ,D.bkO,D.aeE,A.ie],x.O)
D.fd7=new B.fY(A.A,0,6.283185307179586,A.x,D.cWz,null,null)
D.d4S=w([A.bL,A.c1,A.hT,D.Bn,A.bL],x.O)
D.aRZ=new B.fY(A.A,0,6.283185307179586,A.x,D.d4S,null,null)
D.djC=w([A.c2,A.bw,A.b9,A.bj,A.bG,A.c2],x.O)
D.fdc=new B.fY(A.A,0,6.283185307179586,A.x,D.djC,null,null)
D.cYM=w([A.q3,A.p_,A.xN,A.ie,A.q3],x.O)
D.fdd=new B.fY(A.A,0,6.283185307179586,A.x,D.cYM,null,null)
D.djw=w([A.aP,A.bM,A.aL,A.al,A.aP],x.O)
D.fde=new B.fY(A.A,0,6.283185307179586,A.x,D.djw,null,null)
D.drG=w([A.bt,A.b9,A.bw,A.c2,A.bt],x.O)
D.fdg=new B.fY(A.A,0,6.283185307179586,A.x,D.drG,null,null)
D.bgh=new B.u(1,0,1,0,A.q)
D.bl7=new B.u(1,0,1,1,A.q)
D.bi7=new B.u(1,0,0,1,A.q)
D.be2=new B.u(1,1,0,1,A.q)
D.dnA=w([A.LO,A.agF,D.bgh,D.bl7,D.bi7,D.be2,A.LO],x.O)
D.fdh=new B.fY(A.A,0,6.283185307179586,A.x,D.dnA,null,null)
D.fdw=new C.awP(2,"immersiveSticky")
D.fdx=new C.awP(3,"edgeToEdge")
D.fdy=new C.awP(4,"manual")
D.fg0=new B.F(!0,A.oV,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aSw=new B.F(!0,A.eP,null,null,null,null,12.5,A.Q,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgA=new B.F(!0,E.ng,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjj=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjt=new B.F(!0,A.bY,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjQ=new B.F(!0,A.eH,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flh=new B.F(!0,A.bM,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flr=new B.F(!0,A.jN,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flF=new B.rR(!0,A.J9,null,null,null,null,A.dy,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm7=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmP=new B.F(!0,A.jx,null,null,null,null,11.5,A.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnd=new B.F(!0,A.aB,null,null,null,null,12.5,A.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.enA=new B.iT(1,1,0.7568627450980392,0.027450980392156862)
D.fnh=new B.rR(!0,D.enA,null,null,null,null,A.dy,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.agN=new B.u(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.q)
D.aTl=new B.F(!0,D.agN,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnp=new B.F(!0,D.ahV,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnq=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTn=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo2=new B.rR(!0,A.pp,null,null,null,null,A.dy,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.foj=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foS=new B.F(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foU=new B.F(!0,D.agN,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.K8=new B.F(!0,A.aB,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpo=new B.F(!0,A.c1,null,null,null,null,11.5,A.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpz=new B.F(!0,A.bM,null,null,null,null,14,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpD=new B.F(!0,A.bL,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpU=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ayI,null,null,null)
D.fpX=new B.F(!0,A.ct,null,null,null,null,null,A.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpZ=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqd=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqq=new B.F(!0,A.dt,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr1=new B.F(!0,A.aR,null,null,null,null,null,A.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fra=new B.F(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frq=new B.F(!0,A.ae,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aTZ=new B.F(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aU1=new B.F(!0,A.bY,null,null,null,null,11.5,A.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bqM=new B.u(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.ftd=new B.F(!0,D.bqM,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aU7=new B.F(!0,E.ng,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftJ=new B.F(!0,A.bM,null,null,null,null,11,A.a7,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftM=new B.F(!0,O.lz,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmm=new B.F(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv3=new B.y("NEW",null,D.fmm,null,null,null,null,null,null,null,null,null)
D.fvl=new B.y("Hati ya Kuhowesha",null,A.fw,null,null,null,null,null,null,null,null,null)
D.fvP=new B.y("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fwd=new B.y("Scrollable PDF on this slide",null,A.d9,null,null,null,null,null,null,null,null,null)
D.fwZ=new B.y("Big quote mark",null,A.j2,null,null,null,null,null,null,null,null,null)
D.fx1=new B.y("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fxd=new B.y("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fxH=new B.y("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fxJ=new B.y("How many slides?",null,A.fT,null,null,null,null,null,null,null,null,null)
D.fyh=new B.y("Transfer",null,A.cf,null,null,null,null,null,null,null,null,null)
D.fi_=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyF=new B.y("Luxury FX",null,D.fi_,null,null,null,null,null,null,null,null,null)
D.fz1=new B.y("Font",null,A.t8,null,null,null,null,null,null,null,null,null)
D.fzc=new B.y("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fzj=new B.y("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fsK=new B.F(!0,A.bM,null,null,null,null,12,A.Q,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzt=new B.y("Example  GA847",null,D.fsK,null,null,null,null,null,null,null,null,null)
D.fzT=new B.y("Design shapes",null,A.j2,null,null,null,null,null,null,null,null,null)
D.fA3=new B.y("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fA8=new B.y("Non-stop (loop)",null,A.fT,null,null,null,null,null,null,null,null,null)
D.fAm=new B.y("Hati ya Kuhoweya",null,A.fw,null,null,null,null,null,null,null,null,null)
D.fAF=new B.y("Photo studio",null,A.fp,null,null,null,null,null,null,null,null,null)
D.fB8=new B.y("Add your picture",null,A.k5,null,null,null,null,null,null,null,null,null)
D.flG=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fB9=new B.y("Enter document code",null,D.flG,null,A.K,null,null,null,null,null,null,null)
D.fBa=new B.y("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fBf=new B.y("English",null,null,null,null,null,null,null,null,null,null,null)
D.fj7=new B.F(!0,E.ng,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBA=new B.y("Delete this book?",null,D.fj7,null,A.K,null,null,null,null,null,null,null)
D.fnT=new B.F(!0,E.ng,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCA=new B.y("Your library",null,D.fnT,null,null,null,null,null,null,null,null,null)
D.fCG=new B.y("Delete",null,A.aTe,null,null,null,null,null,null,null,null,null)
D.fCJ=new B.y("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,At.E8,null,null,null,null,null,null,null,null,null)
D.fCV=new B.y("Element flies in",null,A.aTr,null,null,null,null,null,null,null,null,null)
D.Vd=new B.y("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fDi=new B.y("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fDG=new B.y("Cancel",null,E.aTB,null,null,null,null,null,null,null,null,null)
D.fDI=new B.y("The lines and circles that come with the design",null,A.hn,null,null,null,null,null,null,null,null,null)
D.fry=new B.F(!0,A.hf,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fE8=new B.y("DOCUMENT CODE",null,D.fry,null,null,null,null,null,null,null,null,null)
D.fF_=new B.y("Quotes",null,G.aac,null,null,null,null,null,null,null,null,null)
D.fl3=new B.F(!0,O.lz,null,null,null,null,null,A.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF8=new B.y("Add a picture",null,D.fl3,null,null,null,null,null,null,null,null,null)
D.fFg=new B.y("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.UO,null,A.K,null,null,null,null,null,null,null)
D.fFk=new B.y("Look & feel",null,A.fT,null,null,null,null,null,null,null,null,null)
D.fFp=new B.y("Rings",null,A.hE,null,null,null,null,null,null,null,null,null)
D.fFv=new B.y("W",null,A.t8,null,null,null,null,null,null,null,null,null)
D.fFF=new B.y("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fFZ=new B.y("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.UY,null,A.K,null,null,null,null,null,null,null)
D.fG0=new B.y("Write your book",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fGN=new B.y("Add page",null,A.cf,null,null,null,null,null,null,null,null,null)
D.fH3=new B.y("Malipo ya Awamu ya Mahari",null,A.fw,null,null,null,null,null,null,null,null,null)
D.flv=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHj=new B.y("Create with AI",null,D.flv,null,A.K,null,null,null,null,null,null,null)
D.fHN=new B.y("Apply look",null,A.hE,null,null,null,null,null,null,null,null,null)
D.fmc=new B.F(!0,A.et,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIA=new B.y("Type your presentation below",null,D.fmc,null,A.K,null,null,null,null,null,null,null)
D.fID=new B.y("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aUb,null,A.K,null,null,null,null,null,null,null)
D.fIF=new B.y("Keep it",null,A.cf,null,null,null,null,null,null,null,null,null)
D.fgT=new B.F(!0,A.cp,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIM=new B.y("Done",null,D.fgT,null,null,null,null,null,null,null,null,null)
D.fJ6=new B.y("Delete",null,A.nJ,null,null,null,null,null,null,null,null,null)
D.fJg=new B.y("Hati ya Kiapo cha Uongozi",null,A.fw,null,null,null,null,null,null,null,null,null)
D.fkn=new B.F(!0,A.aR,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKa=new B.y("Write your idea in any language \u2014 the AI makes the slides.",null,D.fkn,null,A.K,null,null,null,null,null,null,null)
D.fKz=new B.y("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fKF=new B.y("Layout",null,A.V2,null,null,null,null,null,null,null,null,null)
D.fLi=new B.y("Print",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fLr=new B.y("X",null,A.t8,null,null,null,null,null,null,null,null,null)
D.fM1=new B.y("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,X.E7,null,null,null,null,null,null,null,null,null)
D.fMB=new B.y("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fMP=new B.y("Hati ya Kuhowa",null,A.fw,null,null,null,null,null,null,null,null,null)
D.fMR=new B.y("Choose a class template",null,A.fw,null,null,null,null,null,null,null,null,null)
D.fMT=new B.y("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hn,null,null,null,null,null,null,null,null,null)
D.fN_=new B.y("Download the newspaper picture",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fNc=new B.y("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fNk=new B.y("Done",null,A.aTY,null,null,null,null,null,null,null,null,null)
D.fNv=new B.y("Ending celebration",null,A.de,null,null,null,null,null,null,null,null,null)
D.fNw=new B.y("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fNL=new B.y("Plays after your last slide. Tap one to watch it and change its words or logo.",null,X.vg,null,null,null,null,null,null,null,null,null)
D.fOK=new B.y("Export presentation",null,A.d9,null,null,null,null,null,null,null,null,null)
D.fOL=new B.y("What would you like to do?",null,D.aTl,null,null,null,null,null,null,null,null,null)
D.fOQ=new B.y("Delete",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fPm=new B.y("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fPq=new B.y("Hati (Documents)",null,A.fw,null,null,null,null,null,null,null,null,null)
D.fPD=new B.y("Done",null,A.lq,null,null,null,null,null,null,null,null,null)
D.fsA=new B.F(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPI=new B.y("Delete presentation?",null,D.fsA,null,A.K,null,null,null,null,null,null,null)
D.fQ1=new B.y("After the last slide it starts again from the first",null,A.hn,null,null,null,null,null,null,null,null,null)
D.fQd=new B.y("\ud83c\udf33",null,A.E6,null,A.K,null,null,null,null,null,null,null)
D.fQv=new B.y("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hn,null,null,null,null,null,null,null,null,null)
D.fQC=new B.y("Transfer document",null,A.oH,null,null,null,null,null,null,null,null,null)
D.fQN=new B.y("Add to the slides",null,A.fT,null,null,null,null,null,null,null,null,null)
D.fR9=new B.y("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fRo=new B.y("Make a book",null,K.aSO,null,null,null,null,null,null,null,null,null)
D.fRs=new B.y("Books",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fkX=new B.F(!0,A.al,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRt=new B.y("Keep this page open until it finishes.",null,D.fkX,null,null,null,null,null,null,null,null,null)
D.fRv=new B.y("Making your video",null,A.de,null,null,null,null,null,null,null,null,null)
D.fRB=new B.y("LANGUAGE",null,W.t9,null,null,null,null,null,null,null,null,null)
D.fRI=new B.y("Use this ending",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fRQ=new B.y("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fRS=new B.y("Upload a different logo",null,A.cf,null,null,null,null,null,null,null,null,null)
D.fS8=new B.y("Delete from the database?",null,A.k5,null,null,null,null,null,null,null,null,null)
D.fS9=new B.y("H",null,A.t8,null,null,null,null,null,null,null,null,null)
D.fSz=new B.y("NGMY Quotes",null,A.de,null,null,null,null,null,null,null,null,null)
D.fT3=new B.y("Cover",null,D.aU7,null,null,null,null,null,null,null,null,null)
D.fT7=new B.y("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fT8=new B.y("Each page becomes its own slide you can present",null,A.hn,null,null,null,null,null,null,null,null,null)
D.fTw=new B.y("Y",null,A.t8,null,null,null,null,null,null,null,null,null)
D.fTI=new B.y("Crop the picture",null,A.lq,null,null,null,null,null,null,null,null,null)
D.fTP=new B.y("Edit text",null,A.K3,null,null,null,null,null,null,null,null,null)
D.fW9=B.dV("a9_")
D.Ek=new C.ay9(0,"none")
D.aXE=new C.ay9(1,"zipCrypto")
D.aXF=new C.ay9(2,"aes")
D.hhn=new F.PY("","",null)
D.hiu=new C.bdR(null)
D.hjE=new C.a_f(null)
D.hmj=new C.adQ(null)
D.hml=new C.aFr(null)
D.hp6=new C.a0v(null)
D.hpm=new C.a11(null)
D.hpH=new C.bvB(null)})();(function staticFields(){$.hmo=null
$.hmp=null
$.hmq=null
$.hmr=null
$.h46=B.vk("_lastQuoRemDigits")
$.h47=B.vk("_lastQuoRemUsed")
$.ayw=B.vk("_lastRemUsed")
$.h48=B.vk("_lastRem_nsh")
$.ql=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a7N=B.U(x.N,x.I)
$.h1w=!1
$.hrg=B.U(B.aw("l2"),x.N)
$.hrt=B.U(B.aw("l2"),x.E)
$.hpr=!1
$.bB8="q"
$.R0=0
$.D3=B.U(x.N,B.aw("ai<zS>"))
$.hpO=!1
$.h5L=!1
$.hwb=null
$.i_O=B.U(x.N,B.aw("aA<n?>"))
$.KS=""
$.j3=0
$.hjc=function(){var w=x.N
return B.U(w,w)}()
$.hjb=B.U(x.N,x.R)
$.h65=!1
$.agz=B.U(x.N,x.E)
$.h6U=0
$.blU=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ipr","Dp",()=>C.bbj(0))
w($,"ipp","a3f",()=>C.bbj(1))
w($,"ipq","hzW",()=>C.bbj(2))
w($,"ipo","haP",()=>$.a3f().vi(0))
w($,"ipm","hzU",()=>C.bbj(1e4))
w($,"ipn","hzV",()=>B.EC(8))
w($,"ilc","hxW",()=>B.EC(0))
w($,"ilk","hy_",()=>B.EC(0))
w($,"ilj","hxZ",()=>B.c16(0))
w($,"itb","hBX",()=>{var v,u,t=x.N
t=B.U(t,t)
for(v=D.a5P.gdS(D.a5P),v=v.gaf(v);v.C();){u=v.gT(v)
t.n(0,u.b,u.a)}return t})
w($,"itC","bFG",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.n2(new C.fMQ(),v,"biz_plan_blue","Business Plan",B.a([B.b1(u),B.b1(t)],h)),C.n2(new C.fMR(),v,"exec_summary","Executive",B.a([B.b1(s),B.b1(t)],h)),C.n2(new C.fMS(),v,"teal_corporate","Teal Corp",B.a([B.b1(r),B.b1(4279310375)],h)),C.n2(new C.fN2(),q,"geometric_overlap","Geometric",B.a([B.b1(4279203438),B.b1(u)],h)),C.n2(new C.fN7(),p,"midnight_cyan","Midnight Cyan",B.a([B.b1(o),B.b1(n)],h)),C.n2(new C.fN8(),q,"diagonal_hero","Diagonal Hero",B.a([B.b1(m),B.b1(l)],h)),C.n2(new C.fN9(),v,"swot_grid","SWOT Grid",B.a([B.b1(u),B.b1(4278556265)],h)),C.n2(new C.fNa(),v,"layered_chevrons","Chevrons",B.a([B.b1(4280172719),B.b1(k)],h)),C.n2(new C.fNb(),q,"split_triangle","Split Panel",B.a([B.b1(s),B.b1(t)],h)),C.n2(new C.fNc(),v,"corporate_navy","Navy Pro",B.a([B.b1(4278982953),B.b1(4282090230)],h)),C.n2(new C.fNd(),p,"cyan_slash","Cyan Slash",B.a([B.b1(o),B.b1(4278630100)],h)),C.n2(new C.fMT(),p,"crimson_impact","Crimson",B.a([B.b1(4282714634),B.b1(4292617766)],h)),C.n2(new C.fMU(),q,"ocean_waves","Ocean Waves",B.a([B.b1(4278413729),B.b1(4286436348)],h)),C.n2(new C.fMV(),p,"mono_geometric","Mono Geo",B.a([B.b1(o),B.b1(n)],h)),C.n2(new C.fMW(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b1(4280031511),B.b1(4293571336)],h)),C.n2(new C.fMX(),q,"hex_infographic","Hex Stack",B.a([B.b1(r),B.b1(4284410580)],h)),C.n2(new C.fMY(),q,"photo_banner","Photo Banner",B.a([B.b1(m),B.b1(4281908728)],h)),C.n2(new C.fMZ(),v,"process_steps","Process",B.a([B.b1(s),B.b1(k)],h)),C.n2(new C.fN_(),"Minimal","grid_modern","Grid Modern",B.a([B.b1(l),B.b1(t)],h)),C.n2(new C.fN0(),"Luxury","platinum_frame","Platinum",B.a([B.b1(4282865001),B.b1(4293060848)],h)),C.n2(new C.fN1(),v,"agenda_cards","Agenda Cards",B.a([B.b1(u),B.b1(4292602622)],h)),C.n2(new C.fN3(),q,"headline_orange","Headline Orange",B.a([B.b1(j),B.b1(i)],h)),C.n2(new C.fN4(),q,"infographic_teal","Infographic",B.a([B.b1(r),B.b1(j)],h)),C.n2(new C.fN5(),q,"content_year","Year Feature",B.a([B.b1(j),B.b1(t)],h)),C.n2(new C.fN6(),q,"photo_cta","Photo CTA",B.a([B.b1(m),B.b1(i)],h))],B.aw("O<F4>"))})
w($,"ite","hBZ",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["re03GK9y6sghx2cocDGf5pciyaE="]=a.current})($__dart_deferred_initializers__);