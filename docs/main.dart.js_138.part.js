((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ag,A5,Ah,Ai,U,A6,Aj,Ak,C={
tS(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fYJ(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
JF(d){var w
if(d===0)return $.D0()
if(d===1)return $.a2z()
if(d===2)return $.ht6()
if(Math.abs(d)<4294967296)return C.b9L(A.o.N(d))
w=C.hNP(d)
return w},
b9L(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.tS(4,w)
return new C.nU(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.tS(1,w)
return new C.nU(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aC(d,16)
v=C.tS(2,w)
return new C.nU(v===0?!1:s,w,v)}v=A.o.an(A.o.gajX(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.an(d,65536)}v=C.tS(v,w)
return new C.nU(v===0?!1:s,w,v)},
hNP(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.V(B.dK("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.D0()
w=$.ht5()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.l8(A.aH.gaP(w))
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
q=new C.nU(!1,r,4)
if(s<0)p=q.mu(0,-s)
else p=s>0?q.dX(0,s):q
return p},
fYK(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hfT(d,e,f,g){var w,v,u,t,s,r=A.o.an(f,16),q=A.o.E(f,16),p=16-q,o=A.o.dX(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fI(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dX(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hfO(d,e,f,g){var w,v,u,t,s=A.o.an(f,16)
if(A.o.E(f,16)===0)return C.fYK(d,e,s,g)
w=e+s+1
C.hfT(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hNS(d,e,f,g){var w,v,u,t,s=A.o.an(f,16),r=A.o.E(f,16),q=16-r,p=A.o.dX(1,r)-1,o=A.o.fI(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dX(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fI(u,r)}w&2&&B.aj(g)
g[n]=o},
cFb(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hNQ(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
b9M(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aC(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aC(v,16)&1)}},
hfU(d,e,f,g,h,i){var w,v,u,t,s,r
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
hNR(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.dY((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nU:function nU(d,e,f){this.a=d
this.b=e
this.c=f},
cFc:function cFc(){},
cFd:function cFd(){},
cFe:function cFe(d,e){this.a=d
this.b=e},
cFf:function cFf(d){this.a=d},
aRc:function aRc(d,e){this.a=d
this.b=e},
h5I(d,e,f){var w=new C.RE(d,A.o.an(Date.now(),1000),e)
w.Q=f
return w},
RE:function RE(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a3K:function a3K(d,e){this.a=d
this.b=e},
bHv:function bHv(d){this.a=d
this.c=this.b=0},
hwj(){return new C.bFS()},
bFS:function bFS(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cxl:function cxl(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hNx(d,e,f){var w,v,u,t,s
if(d.gam(d))return new Uint8Array(0)
w=new Uint8Array(B.cf(d.gcXa(d)))
v=f*2+2
u=C.hdv(C.hdx(),64)
t=new C.ch7(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.ch8(e,1000,v)
s=new Uint8Array(v)
return A.aH.ds(s,0,t.cKC(w,0,s,0))},
cxj:function cxj(d,e){this.c=d
this.d=e},
ax_:function ax_(d,e){this.a=d
this.b=e},
cxm:function cxm(d,e,f,g){var _=this
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
b8s:function b8s(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cxk:function cxk(){this.a=$},
hfi(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hw2(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bEs:function bEs(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
h3o(d,e){e&=31
return(d&$.qc[e])<<e>>>0},
ns(d,e){e&=31
return(d>>>e|C.h3o(d,32-e))>>>0},
hdw(d){var w,v=new C.asG()
if(B.iK(d))v.aK3(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hdx(){var w=C.hdw(0),v=new Uint8Array(4),u=x.S
u=new C.ch9(w,v,A.Ea,5,B.c2(5,0,!1,u),B.c2(80,0,!1,u))
u.lE(0)
return u},
hdv(d,e){var w=new C.ch5(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
ch4:function ch4(){},
ch8:function ch8(d,e,f){this.a=d
this.b=e
this.c=f},
ch2:function ch2(){},
asF:function asF(d){this.a=d},
ch7:function ch7(d){this.a=$
this.b=d
this.c=$},
ch3:function ch3(){},
ch1:function ch1(){},
asG:function asG(){this.b=this.a=$},
ch6:function ch6(){},
ch9:function ch9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
ch5:function ch5(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
ch0:function ch0(){},
ch_:function ch_(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bO_:function bO_(){},
bO0:function bO0(d){this.a=d},
hQM(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
ba0:function ba0(){},
cr7:function cr7(){},
bOT:function bOT(d,e){this.a=d
this.b=!1
this.c=e},
bOU:function bOU(){},
hZD(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
avE(d){var w=0,v=B.j(x.H),u
var $async$avE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.f1I?2:4
break
case 2:w=5
return B.b(A.kc.h1("SystemChrome.setEnabledSystemUIMode",d.a5(),u),$async$avE)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kc.h1("SystemChrome.setEnabledSystemUIOverlays",C.hZD(null),u),$async$avE)
case 6:case 3:return B.h(null,v)}})
return B.i($async$avE,v)},
avH:function avH(d,e){this.a=d
this.b=e},
a8n:function a8n(d){this.a=d},
fUG(d,e){return new C.aVG(e,d,null)},
aVG:function aVG(d,e,f){this.e=d
this.c=e
this.a=f},
aAy:function aAy(d,e,f,g,h){var _=this
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
i1g(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fum(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.k.bm(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fum:function fum(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ans(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$ans=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.agQ("ngmy_menu_lib_v1_zzslides_index",A.bJ),$async$ans)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.da(s,x.f)
t=B.cD(t,new C.bZG(),t.$ti.k("J.E"),x.P)
r=B.C(t,B.a3(t).k("J.E"))}else r=B.a([],x.d)
A.d.aZ(r,new C.bZH())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ans,v)},
anu(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$anu=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ans(),$async$anu)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.U(t,x.P)
for(r=J.aV(j);r.C();){q=r.gR(r)
p=J.q(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.S(Date.now(),0,!1).a6().ac()
p=m.a
k=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nr("ngmy_menu_lib_v1_zzslide_"+B.aK(p,k,""),B.F(["deck",m.ah(),"savedAt",l],t,q),null),$async$anu)
case 7:if(!f){w=5
break}s.n(0,p,B.F(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.K)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bc<2>")
s=B.C(new B.bc(s,r),r.k("J.E"))
w=10
return B.b(B.nr("ngmy_menu_lib_v1_zzslides_index",B.F(["items",s,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],t,q),null),$async$anu)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anu,v)},
bZI(d){return C.hBN(d)},
hBN(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bZI=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.agQ("ngmy_menu_lib_v1_zzslide_"+B.aK(d,o,""),A.hO),$async$bZI)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.VT(B.a2(q,x.N,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.ab(m)
$.am.$1("[admin slides vault] load "+d+": "+B.u(p))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$bZI,v)},
ant(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$ant=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ans(),$async$ant)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nt(r,new C.bZJ(d))
w=4
return B.b(B.nr("ngmy_menu_lib_v1_zzslides_index",B.F(["items",r,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],x.N,x.z),null),$async$ant)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aPg("ngmy_menu_lib_v1_zzslide_"+B.aK(d,s,"")),$async$ant)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ant,v)},
bZG:function bZG(){},
bZH:function bZH(){},
bZJ:function bZJ(d){this.a=d},
ibe(d,e,f){return B.bS(A.K,null,new C.fKu(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fKu:function fKu(d,e,f){this.a=d
this.b=e
this.c=f},
a0N:function a0N(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aIX:function aIX(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
f7A:function f7A(d,e){this.a=d
this.b=e},
f7E:function f7E(d){this.a=d},
f7F:function f7F(d){this.a=d},
f7G:function f7G(d,e,f){this.a=d
this.b=e
this.c=f},
f7B:function f7B(d){this.a=d},
f7C:function f7C(d){this.a=d},
f7D:function f7D(d,e){this.a=d
this.b=e},
f7v:function f7v(d){this.a=d},
f7t:function f7t(d){this.a=d},
f7u:function f7u(d){this.a=d},
f7w:function f7w(d){this.a=d},
f7x:function f7x(d){this.a=d},
f7K:function f7K(d,e){this.a=d
this.b=e},
f7J:function f7J(d,e){this.a=d
this.b=e},
f7z:function f7z(d,e,f){this.a=d
this.b=e
this.c=f},
f7y:function f7y(d,e,f){this.a=d
this.b=e
this.c=f},
f7H:function f7H(d,e){this.a=d
this.b=e},
f7I:function f7I(d,e){this.a=d
this.b=e},
f7N:function f7N(d){this.a=d},
f7O:function f7O(d,e){this.a=d
this.b=e},
f7M:function f7M(d,e){this.a=d
this.b=e},
f7L:function f7L(){},
hii(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.S.aK(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.da(w,x.f)
v=B.cD(v,new C.feM(),v.$ti.k("J.E"),x.ea)
u=B.a3(v).k("a_<J.E>")
v=B.C(new B.a_(v,new C.feN(),u),u.k("J.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a1M(d){return C.i2w(d)},
i2w(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a1M=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.U(x.N,x.ea)
m=new C.fxa(n)
t=4
j=m
i=C
w=7
return B.b(B.a2l("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a1M)
case 7:j.$1(i.hii(f))
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
return B.b(B.ay(),$async$a1M)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hii(B.aU(J.q(r.a,"ngmy_books_v1_"+p))))
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
o=p.k("a_<J.E>")
j=B
i=B
h=new B.bc(n,p)
g=C
w=13
return B.b(C.feV(d),$async$a1M)
case 13:p=j.C(new i.a_(h,new g.fx8(f),o),o.k("J.E"))
A.d.aZ(p,new C.fx9())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a1M,v)},
ahq(d,e){return C.iaU(d,e)},
iaU(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ahq=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fJZ(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.S.ao(n,null)
q=!1
t=4
w=7
return B.b(B.ahi("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ahq)
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
return B.b(B.ay(),$async$ahq)
case 12:p=g
w=13
return B.b(p.aq("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ahq)
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
return B.i($async$ahq,v)},
feV(d){return C.hS6(d)},
hS6(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$feV=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ay(),$async$feV)
case 7:r=f
q=r.tc("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.kG(q,B.T(q).c)
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
return B.i($async$feV,v)},
agg(d,e){return C.i18(d,e)},
i18(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$agg=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$agg)
case 6:s=g
r=B.aX(x.N)
q=s.tc("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h5(r,q)
J.ce(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a3(q).k("co.E"))
w=7
return B.b(s.aq("StringList","ngmy_books_deleted_v1_"+r,q),$async$agg)
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
return B.b(C.a1M(d),$async$agg)
case 8:n=g
J.nt(n,new C.fu0(e))
w=9
return B.b(C.ahq(d,n),$async$agg)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$agg,v)},
ibj(d,e){return B.a6(d,!1).cm(B.e9(new C.fKQ(e),!0,null,x.H))},
hNU(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d6(w.d,new C.cGy())},
ok:function ok(d,e,f){this.a=d
this.b=e
this.c=f},
feM:function feM(){},
feN:function feN(){},
fxa:function fxa(d){this.a=d},
fx8:function fx8(d){this.a=d},
fx9:function fx9(){},
fJZ:function fJZ(){},
fu0:function fu0(d){this.a=d},
fKQ:function fKQ(d){this.a=d},
Yx:function Yx(d,e){this.c=d
this.a=e},
axx:function axx(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cGy:function cGy(){},
cGA:function cGA(d,e){this.a=d
this.b=e},
cGD:function cGD(d){this.a=d},
cGE:function cGE(d){this.a=d},
cGC:function cGC(){},
cGF:function cGF(d,e){this.a=d
this.b=e},
cGB:function cGB(d){this.a=d},
cGG:function cGG(){},
cGz:function cGz(d,e){this.a=d
this.b=e},
cGH:function cGH(){},
cGu:function cGu(d){this.a=d},
cGs:function cGs(d){this.a=d},
cGt:function cGt(d){this.a=d},
cGv:function cGv(d,e){this.a=d
this.b=e},
cGr:function cGr(d){this.a=d},
cGq:function cGq(d){this.a=d},
cGo:function cGo(d,e){this.a=d
this.b=e},
cGp:function cGp(d){this.a=d},
cGx:function cGx(){},
cGw:function cGw(d){this.a=d},
cGn:function cGn(d,e){this.a=d
this.b=e},
cGm:function cGm(d,e){this.a=d
this.b=e},
cGl:function cGl(d,e){this.a=d
this.b=e},
cGI:function cGI(d){this.a=d},
Yv:function Yv(d,e,f){this.c=d
this.d=e
this.a=f},
aEP:function aEP(d,e,f){this.a=d
this.b=e
this.c=f},
axt:function axt(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cFP:function cFP(d){this.a=d},
cFO:function cFO(d){this.a=d},
cFR:function cFR(d,e,f){this.a=d
this.b=e
this.c=f},
cFZ:function cFZ(){},
cG_:function cG_(d){this.a=d},
cFS:function cFS(d,e,f){this.a=d
this.b=e
this.c=f},
cFQ:function cFQ(d,e){this.a=d
this.b=e},
cFU:function cFU(d,e){this.a=d
this.b=e},
cFV:function cFV(d,e){this.a=d
this.b=e},
cFW:function cFW(d,e){this.a=d
this.b=e},
cFT:function cFT(d){this.a=d},
cFY:function cFY(d){this.a=d},
cFX:function cFX(d,e){this.a=d
this.b=e},
cG4:function cG4(d){this.a=d},
cG0:function cG0(d,e){this.a=d
this.b=e},
cG1:function cG1(d,e){this.a=d
this.b=e},
cG2:function cG2(d,e){this.a=d
this.b=e},
cG3:function cG3(d,e){this.a=d
this.b=e},
axv:function axv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
i4R(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ek(v,x.cK).bB(new C.fBE(),x.H).eR(new C.fBF())}}else if(s)C.hjK()}catch(t){}},
hjK(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ek(v,x.cK).eR(new C.fjb())}catch(u){}},
i4U(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fBE:function fBE(){},
fBF:function fBF(){},
fjb:function fjb(){},
hom(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.eg(v,w,"").split(":"))},
hoj(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.l5)return null
return A.a.b5(w,14)},
h27(d){var w
if(d.b!==D.l5)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b5(w,21)},
i5j(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hon(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
i5e(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aK(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aK(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.U(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.l0(0,f)
t=x.N
u=B.cD(u,new C.fCD(),B.a3(u).k("J.E"),t)
s=B.C(u,B.a3(u).k("J.E"))
if(s.length===0)return B.U(t,t)
for(u=v.l0(0,f),u=new B.JE(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.Rl(A.a.ap(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.Rl(A.a.b5(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cG(w)
if(l==null)return B.U(t,t)
k=B.U(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
i5c(d,e){var w,v,u,t,s,r=B.a3(e).k("cu<1>"),q=B.C(new B.cu(e,r),r.k("J.E"))
A.d.aZ(q,new C.fCC())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.K)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.cb(s,"]"))continue
w=B.aQc(w,u,s,0)}return w},
i5g(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a4g:$.hv6(),s=x.N,r=B.U(s,s)
for(s=t.gdL(t),s=s.gae(s);s.C();){w=s.gR(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.cb(u,"]"))continue
r.n(0,w.b,u)}return r},
hok(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
ffO(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
if(C.hom(q)===e)return q}return null},
i5h(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b5(v,u)
return A.d.gI(D.GQ).a},
i5i(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.ae9(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.ae9(0,0,0)
v=C.ffO(b6,b0)
u=C.ffO(b5,b0)
t=0
if(v!=null&&u!=null){s=C.i5g(b2,C.i5e(C.hok(b2),v.r))
if(s.a!==0){u.r=C.i5c(C.hok(b4),s)
t=s.a}}r=B.aX(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){l=C.hom(o[m])
if(l==null||l==="utangulizi")continue
r.L(0,l)}for(q=B.eb(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.ffO(b6,n)
i=C.ffO(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a0(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gI(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){d=o[m]
a0=C.h27(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.K)(a1),++a7){a8=a1[a7]
if(C.hoj(a8)===a0||C.h27(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.QS(a1,new C.fCJ(a0),!0)
a1=f.z
a6=Date.now()
a9=$.j2
$.j2=a9+1
A.d.L(a1,new C.eM(""+1000*a6+"_"+a9,D.l5,a2,a3,a4,a5,"",24,A.a6,A.bo,A.aD,4279310375,A.bi,d.at,D.bg,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cn,0,"","","","","",!1,0));++e}b5.f=new B.S(Date.now(),0,!1)
return new B.ae9(k,t,e)},
i5d(d){var w=C.i5h(d)
if(d.w==="hati_kuhowa")return C.hnH("",w)
return C.hnG("",w)},
fCD:function fCD(){},
fCC:function fCC(){},
fCJ:function fCJ(d){this.a=d},
hjt(){var w=new B.S(Date.now(),0,!1),v=new C.fie()
return B.u(v.$1(B.bR(w)))+"/"+B.u(v.$1(B.bH(w)))+"/"+B.bA(w)},
h2g(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fDB(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.l5&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hoB(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fDB(d)
w=B.bi(u)
if(w==null)return!C.fDB(d)
return new B.S(Date.now(),0,!1).a6().cZ(w.a6().bR(18e9))},
i5Z(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.S(Date.now(),0,!1).a6().ac()},
hFQ(d){return A.a.i(d).toLowerCase()},
apI(d){return C.hFS(d)},
hFS(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$apI=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ay(),$async$apI)
case 7:r=f
p=r.tc("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.U:p
o=q
o=new B.M(o,C.i9w(),B.T(o).k("M<1,m>")).c0(0,new C.c9i())
o=B.dd(o,o.$ti.k("J.E"))
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
return B.i($async$apI,v)},
apH(d,e){return C.hFR(d,e)},
hFR(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apH=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.apI(d),$async$apH)
case 3:r=g
if(!J.ce(r,o)){w=1
break}t=5
w=8
return B.b(B.ay(),$async$apH)
case 8:q=g
w=9
return B.b(q.aq("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.ql(r)),$async$apH)
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
return B.i($async$apH,v)},
apJ(d,e){return C.hFT(d,e)},
hFT(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apJ=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.apI(d),$async$apJ)
case 3:r=g
if(!J.hy(r,o)){w=1
break}t=5
w=8
return B.b(B.ay(),$async$apJ)
case 8:q=g
w=9
return B.b(q.aq("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.ql(r)),$async$apJ)
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
return B.i($async$apJ,v)},
Vb(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Vb=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fWb&&!a5){w=1
break}t=4
w=7
return B.b(B.ay(),$async$Vb)
case 7:r=a7
q=B.aU(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.S.aK(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.U(e,x.I)
for(d=J.jz(p),d=d.gae(d),a0=x.z;d.C();){n=d.gR(d)
if(f.b(n.b))J.aG(o,J.k(n.a),C.VT(B.a2(f.a(n.b),e,a0)))}$.a79=o}}t=2
w=6
break
case 4:t=3
a2=s.pop()
m=B.ab(a2)
$.am.$1("[kiapo] local load: "+B.u(m))
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
return B.b(B.c3(),$async$Vb)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.u4("civic_hati_kiapo_uongozi",null,A.eg),$async$Vb)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.U(o,x.I)
for(f=x.f,e=J.jz(f.a(J.q(l,"byState"))),e=e.gae(e),d=x.z;e.C();){j=e.gR(e)
if(!f.b(j.b))continue
J.aG(k,J.k(j.a),C.VT(B.a2(f.a(j.b),o,d)))}for(o=k,o=new B.cI(o,B.a3(o).k("cI<1,2>")).gae(0);o.C();){f=o.d
f.toString
i=f
h=$.a79.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbq())f=d===e.gbq()&&f.b<e.gcC()
else f=!0
f=!f}else f=!0
if(f)$.a79.n(0,i.a,i.b)}w=20
return B.b(C.apK(),$async$Vb)
case 20:case 19:t=2
w=16
break
case 14:t=13
a3=s.pop()
g=B.ab(a3)
$.am.$1("[kiapo] cloud load: "+B.u(g))
w=16
break
case 13:w=2
break
case 16:case 9:$.fWb=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Vb,v)},
apK(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$apK=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$apK)
case 6:s=e
r=B.U(x.N,x.P)
for(o=$.a79,o=new B.cI(o,B.a3(o).k("cI<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aG(r,q.a,q.b.ah())}w=7
return B.b(s.aq("String","ngmy_civic_hati_kiapo_uongozi_v1",A.S.ao(r,null)),$async$apK)
case 7:u=1
w=5
break
case 3:u=2
l=t.pop()
p=B.ab(l)
$.am.$1("[kiapo] local save: "+B.u(p))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$apK,v)},
b_a(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$b_a=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Vb(!1),$async$b_a)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a79.h(0,t)
r=s==null?null:s.hH()
if(r==null){u=null
w=1
break}u=C.bC_(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b_a,v)},
a7a(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a7a=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.S(Date.now(),0,!1)
o=a1.hH()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.K)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a79.n(0,d,o)
$.fWb=!0
w=3
return B.b(C.apK(),$async$a7a)
case 3:w=4
return B.b(B.c3(),$async$a7a)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.U(e,x.P)
for(n=$.a79,n=new B.cI(n,B.a3(n).k("cI<1,2>")).gae(0);n.C();){l=n.d
l.toString
q=l
J.aG(r,q.a,q.b.ah())}w=9
return B.b(B.nr("civic_hati_kiapo_uongozi",B.F(["byState",r,"updatedAt",new B.S(Date.now(),0,!1).a6().ac()],e,x.z),null),$async$a7a)
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
$.am.$1("[kiapo] cloud save: "+B.u(p))
u=!1
w=1
break
w=8
break
case 5:w=2
break
case 8:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a7a,v)},
apL(d){var w=0,v=B.j(x.T),u,t,s
var $async$apL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.i2().a5t(A.eJ),$async$apL)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fn(),$async$apL)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b_9(t,d),$async$apL)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apL,v)},
b_9(d,e){return C.hFU(d,e)},
hFU(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b_9=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c3(),$async$b_9)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.af("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aK(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.u(r)+"/"+1000*Date.now()+".mp4"
n=$.f0().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.ij("media")
w=8
return B.b(p.wY(q,new Uint8Array(B.cf(d)),D.bAG),$async$b_9)
case 8:n=p.CB(q)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=B.ab(k)
$.am.$1("[kiapo] video upload: "+B.u(o))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$b_9,v)},
Kv(d,e,f,g,h,i,j,k,l,m,n){var w=C.cB()
return C.er(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bg,4280172719,2,d,0,0,"",D.cn,D.cQ,l,m,n)},
fhu(d,e,f,g,h,i,j,k,l){var w=C.cB()
return C.er(A.bi,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bo,A.a6,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cn,D.f4,j,k,l)},
h_e(d,e,f,g,h,i,j,k){var w=C.cB(),v=A.k.D(i*0.0017,0.02,0.06)
return C.er(h,!1,j,A.aD,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.cF,A.P,"",v,w,null,"","",0,!1,"",0,D.bg,4280172719,2,k,0,0,"",D.cn,D.cQ,g,e,f)},
fh2(d,e,f,g){return C.fhu(0,0.002,D.fs,g,0.8,"ul_"+B.u(d)+"_"+B.u(e),f,d,e+0.002)},
h_f(d,e,f,g,h,i,j,k){var w=C.cB()
return C.er(A.qw,!1,j,A.aD,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.bo,A.a6,"",h,w,null,"","",0,!1,"",0,D.bg,4280172719,2,k,0,0,"",D.cn,D.cQ,g,e,f)},
hjs(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.eg(v,w,"").split(":"))},
bC_(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.K)(t),++n){m=t[n]
l=C.hjs(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.l5&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hH()}h=C.h1M(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.BI(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gI(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.K)(w),++n){m=w[n]
l=C.hjs(m)
if(l!=null&&r.ai(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.l5&&A.a.cb(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.br(a1.z,new C.fBC(a2))}else A.d.br(a1.z,new C.fBD())
A.d.L(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fDB(a0))a0.ax=a6.f.a6().ac()
return a0},
h1M(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fEo(D.a5i),l=C.cB(),k=x.u,j=B.a([C.er(A.bi,!1,s,A.aD,"marriage_locked_bg",r,24,A.bo,A.a6,"",1,C.cB(),m,"","",0,!1,"",0,D.bg,q,2,"",0,0,"",D.cn,D.lw,1,0,0)],k),i=B.a([],k)
i.push(C.Kv("NGMY",A.L,236069181,52,A.bo,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Kv("TAREHE:",A.bi,o,16,A.bo,A.H,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.h_e("tarehe",0.8059999999999999,0.026,0.18,A.bi,16,p,C.hjt()))
i.push(C.fh2(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Kv("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bo,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Kv("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cF,A.a6,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fhu(0,0.002,D.fs,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.h_f("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.h_f("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.h_f("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fhu(268435456,0.175,D.bg,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Kv("VIDEO YA KIAPO",A.bi,o,10,A.bo,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.er(A.bi,!1,s,A.aD,"__kiapo_video__",r,24,A.bo,A.a6,"",0.131,C.cB(),t,"","",0,!1,"",0,D.bg,q,2,"",0,0,"",D.cn,D.lw,0.77,0.115,0.492))
i.push(C.Kv("Rais Anayeapa:",A.bi,p,15,A.bo,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Kv("Jina:",A.bi,p,13,A.bo,A.P,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.h_e("rais_jina",0.195,0.6930000000000001,0.62,A.bi,13,p,""))
i.push(C.fh2(0.195,0.7130000000000001,0.62,n))
i.push(C.Kv("Sahihi:",A.bi,p,13,A.bo,A.P,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.er(A.bi,!1,s,A.aD,"marriage_sign_rais",0,24,A.bo,A.a6,"",0.07,C.cB(),t,"","",0,!1,"",0,D.bg,0,2,"",0,0,"",D.cn,D.f4,0.38,0.21500000000000002,0.73))
i.push(C.fh2(0.21500000000000002,0.795,0.38,n))
i.push(C.Kv("Tarehe:",A.bi,p,13,A.bo,A.P,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.h_e("rais_tarehe",0.745,0.74,0.2,A.bi,12,p,C.hjt()))
i.push(C.fh2(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fhu(0,0.032,D.bg,o,1,"state_box",0.72,0.14,0.875),C.Kv("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bo,A.P,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rw(4294967035,t,0,0,j,l,D.qk,"","",u,D.de)
return C.BI(t,t,t,t,D.of,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cB(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
agr(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agr=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.J(x.q).f.S(D.eXu)
w=1
break}w=3
return B.b(C.Vb(!0),$async$agr)
case 3:w=4
return B.b(C.b_a(p),$async$agr)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hoB(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bS(D.bem,null,new C.fww(p),f,!0,!0,!1,A.lx,!1,!1,x.N),$async$agr)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.ca(null,null,!0,null,new C.fwx(),f,null,!0,!0,x.y),$async$agr)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.h1M(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.J(x.q).f
q.S(B.b2(null,null,null,null,null,A.r,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.h1M(p))
case 1:return B.h(u,v)}})
return B.i($async$agr,v)},
fie:function fie(){},
c9i:function c9i(){},
fBC:function fBC(d){this.a=d},
fBD:function fBD(){},
fww:function fww(d){this.a=d},
fwu:function fwu(d){this.a=d},
fwv:function fwv(d){this.a=d},
fwx:function fwx(){},
fws:function fws(d){this.a=d},
fwt:function fwt(d){this.a=d},
aqg:function aqg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDB:function aDB(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
eaQ:function eaQ(d){this.a=d},
eaO:function eaO(d){this.a=d},
eaP:function eaP(d){this.a=d},
eaR:function eaR(d){this.a=d},
eaS:function eaS(d){this.a=d},
wB(d,e,f,g,h,i,j,k,l,m,n){var w=C.cB()
return C.er(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bo,h,"",i,w,null,"","",0,!1,"",j,D.bg,4280172719,2,d,0,0,"",D.cn,D.cQ,l,m,n)},
hj6(d,e,f){var w=4291404327
return B.a([C.qb(0,f,D.eN,w,2,"ring_l",f,d-f*0.42,e),C.qb(0,f,D.eN,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fgt(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qb(4294967288,f,D.eN,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qb(h,s,D.eN,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qb(h,f*0.46,D.eN,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qb(d,e,f,g,h,i,j,k,l){var w=C.cB()
return C.er(A.bi,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bo,A.a6,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cn,D.f4,j,k,l)},
fgs(d,e,f,g,h,i,j,k,l){var w=C.cB(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.er(h,!1,k,A.aD,i?u+A.k.aa(g,3)+":"+A.o.aa(j,1):u+A.k.aa(g,3),4280640491,j,A.cF,A.P,"",v,w,null,"","",0,!1,"",0,D.bg,4280172719,2,l,0,0,"",D.cn,D.cQ,g,e,f)},
bzq(d,e,f,g){return C.qb(0,0.002,D.fs,g,0.8,"ul_"+B.u(d)+"_"+B.u(e),f,d,e+0.002)},
hj5(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qb(0,0.036,D.bg,h,1.4,"banner_box_"+d,w,v,e),C.wB(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hol(){var w=new B.S(Date.now(),0,!1),v=new C.fCI()
return B.u(v.$1(B.bR(w)))+"/"+B.u(v.$1(B.bH(w)))+"/"+B.bA(w)},
hj7(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wB(r+".",A.bi,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fgs("witness_"+d+"_"+r+"_name",q,g,p,A.bi,!0,16,j,"[Jina la Shahidi]"),C.bzq(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.wB("Sahihi:",A.bi,j,15,A.a6,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.er(A.bi,!1,4279310375,A.aD,"marriage_sign_"+d+"_witness_"+r,0,24,A.bo,A.a6,"",0.05,C.cB(),null,"","",0,!1,"",0,D.bg,0,2,"",0,0,"",D.cn,D.f4,s,t,g-0.004),C.bzq(t,g+0.044,s,w)],x.u)},
agS(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.df_,D.cjQ,D.d7r,D.d9i],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.K)(s),++w)for(v=A.d.gae(s[w]);v.C();){u=v.gR(0)
if(u.a===d)return u}return null},
fZw(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fEo(d.d),v=B.a([C.er(A.bi,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bo,A.a6,"",1,C.cB(),w,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cn,D.lw,1,0,0)],x.u)
A.d.v(v,C.hUw(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hUw(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wB("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hj6(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hj6(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fgt(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fgt(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wB("\ud83c\udf33",A.L,4279898632,22,A.a6,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.qb(0,0.062,D.eN,b1,1.6,"crest_o",0.11,0.445,0.012),C.qb(0,0.046,D.eN,b1,1,"crest_i",0.084,0.458,0.02),C.wB("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.qb(0,0.002,D.fs,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qb(b9,0.016,D.l6,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qb(0,0.002,D.fs,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wB("TAREHE:",A.bi,c0,20,A.H,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fgs("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bi,!1,21,b9,C.hol()),C.bzq(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wB(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qb(c0,0.0026,D.bg,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qb(c3.e,0.138,D.bg,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cB()
c2.push(C.er(A.bi,!1,b9,A.aD,"marriage_field_utangulizi:"+A.k.aa(0.82,3),b2,19,A.bo,A.cx,"",0.128,s,a9,"","",0,!1,"",0,D.bg,b3,2,c5,0,0,"",D.cn,D.cQ,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qb(0,0.036,D.bg,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cB()
A.d.v(c2,B.a([s,C.er(A.L,!1,c0,A.aD,"marriage_field_nimetowe_label:"+A.k.aa(r,3),b2,30,A.bo,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bg,b3,2,c7,0,0,"",D.cn,D.cQ,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hj5(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wB(c9,A.bi,b9,d0,A.P,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fgs("mahari_"+p,0.132,k,m,A.bi,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.j2
$.j2=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.j2
$.j2=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eM(""+1000*i+"_"+h,D.cQ,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bo,A.aD,c0,A.bi,a9,D.bg,b2,b3,2,0,!1,s,0,D.cn,0,"","","","","",!1,0),j,new C.eM(""+1000*f+"_"+e,D.f4,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a6,A.bo,A.aD,b6,A.bi,a9,D.fs,0,b5,0.8,0,!1,g,0,D.cn,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.j2
$.j2=p+1
i=Date.now()
h=$.j2
$.j2=h+1
g=Date.now()
f=$.j2
$.j2=f+1
e=Date.now()
a3=$.j2
$.j2=a3+1
A.d.v(d,B.a([new C.eM(""+1000*s+"_"+p,D.cQ,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bo,A.aD,b7,A.dN,a9,D.bg,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cn,0,"","","","","",!1,0),new C.eM(""+1000*i+"_"+h,D.f4,a1,a2,0.046,0.025875,"",24,A.a6,A.bo,A.aD,b6,A.bi,a9,D.bg,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cn,0,"","","","","",!1,0),new C.eM(""+1000*g+"_"+f,D.cQ,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bo,A.aD,b7,A.L,a9,D.bg,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cn,0,"","","","","",!1,0),new C.eM(""+1000*e+"_"+a3,D.f4,a0,k,a1+0.046-a0,l,"",24,A.a6,A.bo,A.aD,b6,A.bi,a9,D.bg,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cn,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hj5("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a57||w===D.a59||w===D.a56||w===D.a58){w=t-0.008
A.d.v(c2,C.fgt(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fgt(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.qb(0,a4,D.bg,c0,1.3,"wit_table_border",0.82,0.09,t),C.qb(c0,a4,D.bg,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qb(0,0.0022,D.fs,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wB("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wB("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hj7("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hj7("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.qb(0,0.11,D.bg,c0,1.2,"mw_box",0.82,0.09,t),C.wB("MWANDISHI",A.bi,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wB("Jina:",A.bi,b9,15,A.a6,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fgs("mwandishi_jina",0.215,w,0.3116,A.bi,!0,15,b9,""),C.bzq(0.215,p,0.3116,b5),C.wB("Sahihi:",A.bi,b9,15,A.a6,0.028,0,"mw_sl",0.09,0.5,w),C.er(A.bi,!1,b6,A.aD,"marriage_sign_mwandishi",0,24,A.bo,A.a6,"",0.044,C.cB(),a9,"","",0,!1,"",0,D.bg,0,2,"",0,0,"",D.cn,D.f4,0.3161999999999999,0.5738,s-0.044),C.bzq(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.qb(0,0.032,D.bg,c0,1,"state_box",0.7,0.15,a8),C.wB("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.P,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
i5f(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.h2q(d.d),p=new C.fCE(s),o=new C.fCF(s),n=d.z,m=n===D.a57||n===D.a59||n===D.a56||n===D.a58,l=n===D.aFB||n===D.a5a||n===D.aFC,k=B.bZ(0,B.fP(q,A.A,t,t,A.ci,A.bV,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a5a?26:16
i.push(new C.fCH().$1$size(w))}if(n===D.aFD)i.push(D.fCB)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hE,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.am)
n=B.I(r,A.q,1.1)
w=B.n(4)
i.push(B.p(t,B.x(B.a([p.$0(),D.aOP,p.$1$w(0.9),D.aOP,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.b9F,t,n,w,t,t,A.n),t,t,t,t,A.aja,t,t,t))
i.push(A.am)
i.push(new C.fCG(r).$1("NIMETOWE"))
i.push(A.fF)
v=J.e4(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.Mi,new B.cl(A.aP,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a5),t,7,t,t,t,t,t,7),A.db,new B.bB(1,A.bh,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b7)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.W,t,A.b1,A.r,B.a([k,new B.D(A.ahM,B.x(i,A.ai,t,A.e,A.j,0,A.p),t)],j),t)},
hnG(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.agS(e,t)
if(r==null)r=A.d.gI(D.GQ)
w=C.cB()
v=C.rw(r.e,t,0,0,C.fZw(r,0.165,y.O,D.d9U,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.qk,"","",s,D.de)
w=C.cB()
u=A.a.i(d)
if(u.length===0)u=t
return C.BI(t,t,t,t,D.of,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hnH(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.agS(e,t)
if(r==null)r=A.d.gI(D.GQ)
w=C.cB()
v=C.rw(r.e,t,0,0,C.fZw(r,0.165,y.f,D.d5x,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.qk,"","",s,D.de)
w=C.cB()
u=A.a.i(d)
if(u.length===0)u=t
return C.BI(t,t,t,t,D.of,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bDl(d,e,f){var w=0,v=B.j(x.T),u
var $async$bDl=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bS(A.K,null,new C.fOh(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bDl,v)},
ags(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ags=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("a_<1>")
p=B.C(new B.a_(i,new C.fwA(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bS(D.Lv,null,new C.fwB(p),d,!0,!0,!1,A.lx,!1,!1,x.N),$async$ags)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hH())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bDl(d,"Hati ya Kuhowa",D.GQ),$async$ags)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.L8(d,"Tafuta jimbo\u2026","",A.k7,"Chagua jimbo"),$async$ags)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hnG(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ags,v)},
agt(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agt=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("a_<1>")
p=B.C(new B.a_(i,new C.fwE(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bS(D.Lv,null,new C.fwF(p),d,!0,!0,!1,A.lx,!1,!1,x.N),$async$agt)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hH())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bDl(d,"Hati ya Kuhoweya",D.GQ),$async$agt)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.L8(d,"Tafuta jimbo\u2026","",A.k7,"Chagua jimbo"),$async$agt)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hnH(r,s))
case 1:return B.h(u,v)}})
return B.i($async$agt,v)},
agu(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$agu=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.T(i).k("a_<1>")
m=B.C(new B.a_(i,new C.fwI(),n),n.k("J.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bS(D.Lv,null,new C.fwJ(m),d,!0,!0,!1,A.lx,!1,!1,x.N),$async$agu)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(m).hH())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bDl(d,"Malipo ya Awamu ya Mahari",D.QJ),$async$agu)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.L8(d,"Tafuta jimbo\u2026","",A.k7,"Chagua jimbo"),$async$agu)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.agS(s,D.QJ)
if(q==null)q=A.d.gI(D.QJ)
n=C.cB()
p=C.rw(q.e,null,0,0,C.fZw(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.d0t,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.qk,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.de)
n=C.cB()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.BI(null,null,null,null,D.of,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agu,v)},
xx:function xx(d,e){this.a=d
this.b=e},
jo:function jo(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fCI:function fCI(){},
fCE:function fCE(d){this.a=d},
fCG:function fCG(d){this.a=d},
fCH:function fCH(){},
fCF:function fCF(d){this.a=d},
fOh:function fOh(d,e){this.a=d
this.b=e},
ade:function ade(d,e,f){this.c=d
this.d=e
this.a=f},
dYQ:function dYQ(d,e,f){this.a=d
this.b=e
this.c=f},
dYP:function dYP(d,e){this.a=d
this.b=e},
dYO:function dYO(d,e){this.a=d
this.b=e},
acD:function acD(d,e,f){this.c=d
this.d=e
this.a=f},
fwA:function fwA(){},
fwB:function fwB(d){this.a=d},
fwy:function fwy(d){this.a=d},
fwz:function fwz(d){this.a=d},
fwE:function fwE(){},
fwF:function fwF(d){this.a=d},
fwC:function fwC(d){this.a=d},
fwD:function fwD(d){this.a=d},
fwI:function fwI(){},
fwJ:function fwJ(d){this.a=d},
fwG:function fwG(d){this.a=d},
fwH:function fwH(d){this.a=d},
Ky(d,e,f,g,h,i,j,k,l,m){var w=C.cB()
return C.er(e,!1,f,A.aD,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bo,h,"",i,w,null,"","",0,!1,"",0,D.bg,4280172719,2,d,0,0,"",D.cn,D.cQ,k,l,m)},
CJ(d,e,f,g,h,i,j,k,l){var w=C.cB()
return C.er(A.bi,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bo,A.a6,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cn,D.f4,j,k,l)},
hjN(d,e,f){return C.CJ(0,0.002,D.fs,4293056712,0.8,"ul_"+B.u(d)+"_"+B.u(e),f,d,e+0.022)},
bzA(d,e,f,g,h){return B.a([C.CJ(4294967288,0.032,D.bg,4291404327,1.15,"pill_"+d,g,f,e),C.Ky(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
h_j(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.u(e)
return B.a([C.CJ(0,0.002,D.fs,g,1,"orn_l_"+t,u,d,v),C.CJ(h,0.016,D.l6,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.CJ(0,0.002,D.fs,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a19(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.Ky(d,A.bi,j,i,A.P,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cB()
return B.a([v,C.er(A.L,!1,j,A.aD,"marriage_field_"+e+":"+A.k.aa(t,3),4280640491,i,A.cF,A.P,"",0.02,s,null,"","",0,!1,"",0,D.bg,4280172719,2,k,0,0,"",D.cn,D.cQ,t,u,g-0.002),C.hjN(u,g+0.018,t)],x.u)},
hjO(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.CJ(h,0.028,D.bg,h,0,"chv_"+d,g,e,f),C.CJ(w,0.024,D.l6,w,0,"chv_l_"+d,0.024,e-0.008,v),C.CJ(w,0.024,D.l6,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.Ky(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bzz(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.Ky("Sahihi:",A.bi,h,10,A.P,0.02,"is_"+d,0.12,e,f),C.er(A.bi,!1,4279310375,A.aD,"marriage_sign_"+d,0,24,A.bo,A.a6,"",0.032,C.cB(),null,"","",0,!1,"",0,D.bg,0,2,"",0,0,"",D.cn,D.f4,v,w,f-0.006),C.hjN(w,f+0.016,v)],x.u)},
h2r(d){var w,v
for(w=0;w<19;++w){v=D.QY[w]
if(v.a===d)return v}return null},
i7w(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.agS(A.a.b5(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.agS(A.a.b5(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b5(k,18)
w=C.agS(u,D.QJ)
v=w==null?l:w.d
if(v==null){w=C.agS(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.h2r(A.a.b5(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hkC.a8(0)
$.hkP.a8(0)
t=C.fEo(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.K)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
h3w(d){var w=0,v=B.j(x.T),u
var $async$h3w=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bS(A.K,null,new C.fPK(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h3w,v)},
xA:function xA(d,e){this.a=d
this.b=e},
nH:function nH(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bj4:function bj4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fPK:function fPK(){},
adh:function adh(d){this.a=d},
eg4:function eg4(d,e){this.a=d
this.b=e},
eg3:function eg3(d){this.a=d},
eg2:function eg2(d,e){this.a=d
this.b=e},
aeY:function aeY(d,e,f){this.c=d
this.d=e
this.a=f},
h2q(d){return $.hkP.c9(0,d,new C.fEq(d))},
fEo(d){return $.hkC.c9(0,d,new C.fEp(d))},
fB(d){return B.fTK(d>>>16&255,d>>>8&255,d&255,255)},
hXA(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hlV(4294570461,4293910718,4284234270,u)
case 1:return C.hlV(4294635750,4293975240,t,4292912216)
case 2:w=C.ff2(s,4294505966,r)
C.bzk(w,14,16,p)
C.kv(w,8,9,464,836,u,1.2)
C.CF(w,2,2,1,1,u,10)
C.CF(w,478,2,-1,1,u,10)
C.CF(w,2,852,1,-1,u,10)
C.CF(w,478,852,-1,-1,u,10)
return w
case 3:return C.ff2(4294966515,4294373082,4289102906)
case 4:return C.hSl(C.ff2(4294376440,4293653998,4290287194))
case 5:w=C.ff2(4294965238,4294437098,4288444980)
C.bzk(w,14,16,4283043359)
C.kv(w,6,7,468,840,u,1)
C.kv(w,9,10,462,834,o,0.7)
return w
case 6:v=B.ht(q,q,A.cd,0,A.e4,854,q,0,3,q,A.cd,480,!1)
C.yq(v,n,4294175448)
C.rT(v,n)
C.kv(v,24,24,432,806,4286209070,1)
C.a0X(v,12,12,468,12,o,3,20)
C.a0X(v,12,842,468,842,o,3,20)
C.a0X(v,12,12,12,842,o,3,20)
C.a0X(v,468,12,468,842,o,3,20)
return v
case 7:return C.hQs(4294440434,4293518297,4280228630,r)
case 8:v=B.ht(q,q,A.cd,0,A.e4,854,q,0,3,q,A.cd,480,!1)
C.yq(v,m,4293911504)
C.rT(v,m)
C.kv(v,28,28,424,798,l,1)
C.fok(v,28,28,l,k)
C.fok(v,452,28,l,k)
C.fok(v,28,826,l,k)
C.fok(v,452,826,l,k)
return v
case 9:v=B.ht(q,q,A.cd,0,A.e4,854,q,0,3,q,A.cd,480,!1)
C.yq(v,j,4294111986)
C.rT(v,j)
C.kv(v,18,18,444,818,4292401368,0.7)
B.iM(v,!0,C.fB(p),0,13,0,853)
return v
case 10:return C.hUi(i,4294173372)
case 11:return C.hVo(4294439140,4293449662)
case 12:return C.hQk(h,4294239432)
case 13:return C.hUQ(4294244340,4293193448)
case 14:return C.hZa(4294505710,4293780694)
case 15:return C.fe0(4294966259,4294439138,o,p,q)
case 16:return C.fe0(4294966776,4294178544,o,g,g)
case 17:return C.fe0(4294965493,4294504170,o,4286200650,q)
case 18:return C.fe0(4294966519,4294373862,o,p,p)
case 19:return C.hTq()
case 20:return C.hTr()
case 21:v=B.ht(q,q,A.cd,0,A.e4,854,q,0,3,q,A.cd,480,!1)
C.yq(v,h,4293976768)
C.rT(v,h)
C.bzk(v,14,16,p)
B.iM(v,!0,C.fB(u),4,475,4,9)
B.iM(v,!0,C.fB(u),4,475,844,849)
B.iM(v,!0,C.fB(u),4,9,4,849)
B.iM(v,!0,C.fB(u),470,475,4,849)
C.a0X(v,10,12,470,12,u,2,16)
C.a0X(v,10,842,470,842,u,2,16)
C.a0X(v,10,12,10,842,u,2,18)
C.a0X(v,470,12,470,842,u,2,18)
C.CF(v,2,2,1,1,t,10)
C.CF(v,478,2,-1,1,t,10)
C.CF(v,2,852,1,-1,t,10)
C.CF(v,478,852,-1,-1,t,10)
C.kv(v,14,16,452,822,u,1.8)
return v
case 22:v=B.ht(q,q,A.cd,0,A.e4,854,q,0,3,q,A.cd,480,!1)
C.yq(v,s,4294438872)
C.rT(v,s)
C.kv(v,14,16,452,822,o,2.2)
C.kv(v,22,24,436,806,o,1)
C.h0D(v,!1,!1,o,p,p,36,14,16)
C.kL(v,240,20,7,o,!0)
C.kL(v,240,834,7,o,!0)
C.kL(v,18,427,7,o,!0)
C.kL(v,462,427,7,o,!0)
return v
case 23:v=B.ht(q,q,A.cd,0,A.e4,854,q,0,3,q,A.cd,480,!1)
C.yq(v,i,4293910712)
C.rT(v,i)
B.iM(v,!0,C.fB(u),0,479,0,20)
B.iM(v,!0,C.fB(u),0,479,834,853)
B.iM(v,!0,C.fB(u),0,20,0,853)
B.iM(v,!0,C.fB(u),460,479,0,853)
B.iM(v,!0,C.fB(f),5,474,5,9)
B.iM(v,!0,C.fB(f),5,474,844,848)
B.iM(v,!0,C.fB(f),5,9,5,848)
B.iM(v,!0,C.fB(f),470,474,5,848)
C.kv(v,28,28,424,798,f,1.4)
return v
case 24:v=B.ht(q,q,A.cd,0,A.e4,854,q,0,3,q,A.cd,480,!1)
C.yq(v,e,4294174404)
C.rT(v,e)
C.bzk(v,14,16,p)
B.iM(v,!0,C.fB(u),3,476,3,8)
B.iM(v,!0,C.fB(u),3,476,845,850)
B.iM(v,!0,C.fB(u),3,8,3,850)
B.iM(v,!0,C.fB(u),471,476,3,850)
C.kv(v,9,10,462,834,t,1)
C.kv(v,14,16,452,822,u,1.8)
C.kL(v,240,8,4,u,!0)
C.kL(v,240,846,4,u,!0)
C.kL(v,8,427,4,u,!0)
C.kL(v,472,427,4,u,!0)
C.kL(v,8,8,3,t,!0)
C.kL(v,472,8,3,t,!0)
C.kL(v,8,846,3,t,!0)
C.kL(v,472,846,3,t,!0)
return v}},
yq(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kN(d,!1,A.dd,new B.RZ(s),r,A.cZ,1,0,w-1,k,k);++k}},
rT(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.eE()
n.dt(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aw(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aw(v==null?0:v)
v=d.a
s=v==null?o:v.dT(u,t,o)
if(s==null)s=new B.iH()
v=A.o.D(A.k.N(s.gb7(s))-3,0,255)
r=A.o.D(A.k.N(s.gbf())-3,0,255)
q=A.o.D(A.k.N(s.gbc(s))-2,0,255)
p=d.a
if(p!=null)p.jQ(u,t,v,r,q,255)}},
kv(d,e,f,g,h,i,j){var w,v=null,u=C.fB(i),t=e+g
B.kN(d,!0,A.dd,u,v,A.cZ,j,e,t,f,f)
w=f+h
B.kN(d,!0,A.dd,u,v,A.cZ,j,e,t,w,w)
B.kN(d,!0,A.dd,u,v,A.cZ,j,e,e,f,w)
B.kN(d,!0,A.dd,u,v,A.cZ,j,t,t,f,w)},
CF(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.V(j*0.72),8,j-2)
B.kN(d,!0,A.dd,C.fB(i),u,A.cZ,2,e,e+g*j,f,f)
B.kN(d,!0,A.dd,C.fB(i),u,A.cZ,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kN(d,!0,A.dd,C.fB(i),u,A.cZ,1,w,e+g*t,v,v)
B.kN(d,!0,A.dd,C.fB(i),u,A.cZ,1,w,w,v,f+h*t)},
hlV(d,e,f,g){var w=null,v=B.ht(w,w,A.cd,0,A.e4,854,w,0,3,w,A.cd,480,!1)
C.yq(v,d,e)
C.rT(v,d)
B.iM(v,!0,C.fB(f),0,479,0,28)
B.iM(v,!0,C.fB(f),0,479,826,853)
B.iM(v,!0,C.fB(f),0,28,0,853)
B.iM(v,!0,C.fB(f),452,479,0,853)
C.kv(v,5,5,470,844,g,1.1)
C.kv(v,28,28,424,798,g,1.6)
C.CF(v,2,2,1,1,g,11)
C.CF(v,478,2,-1,1,g,11)
C.CF(v,2,852,1,-1,g,11)
C.CF(v,478,852,-1,-1,g,11)
return v},
ff2(d,e,f){var w=null,v=B.ht(w,w,A.cd,0,A.e4,854,w,0,3,w,A.cd,480,!1)
C.yq(v,d,e)
C.rT(v,d)
C.kv(v,14,16,452,822,f,1.6)
C.kv(v,20,22,440,810,f,0.8)
return v},
bzk(d,e,f,g){var w,v=C.fB(g)
B.iM(d,!0,v,0,479,0,f-1)
w=854-f
B.iM(d,!0,v,0,479,w,853);--w
B.iM(d,!0,v,0,e-1,f,w)
B.iM(d,!0,v,480-e,479,f,w)},
hSl(d){var w,v,u=4291404327
C.bzk(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kL(d,w,8,3,u,!0)
C.kL(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kL(d,7,v,3,u,!0)
C.kL(d,473,v,3,u,!0)}return d},
frn(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jg(e,f),new B.jg(e+g*n,f),new B.jg(e,f+h*n)],t)
B.a1J(d,C.fB(m),s)
w=A.o.D(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jg(s,u),new B.jg(e+g*v,u),new B.jg(s,f+h*v)],t)
B.a1J(d,C.fB(k),t)
t=A.k.V(n*0.39)
C.kL(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kL(d,e+g*t,f+h*3,4,k,!0)
C.kL(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kL(d,e+g*t,f,5,k,!0)
C.kL(d,e,f+h*t,5,k,!0)}},
h0D(d,e,f,g,h,i,j,k,l){var w,v
C.frn(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.frn(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.frn(d,k,v,1,-1,e,f,g,h,i,j)
C.frn(d,w,v,-1,-1,e,f,g,h,i,j)},
a0X(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.l3(d,!0,A.dd,new B.r2(p),null,A.cZ,j,r,q)}},
fqt(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kN(d,!0,A.dd,new B.r2(o),null,A.cZ,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kN(d,!0,A.dd,new B.r2(o),null,A.cZ,1.4,q,q,p,p+h*r)}},
hQs(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.ht(o,o,A.cd,0,A.e4,854,o,0,3,o,A.cd,480,!1)
C.yq(n,d,e)
C.rT(n,d)
C.kv(n,20,20,440,814,f,1.2)
C.fqt(n,0,0,1,1,g)
C.fqt(n,480,0,-1,1,g)
C.fqt(n,0,854,1,-1,g)
C.fqt(n,480,854,-1,-1,g)
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
B.kN(n,!0,A.dd,new B.r2(p),o,A.cZ,1.2,240,r,60,q)}return n},
fok(d,e,f,g,h){var w
C.fun(d,!0,C.fB(g),13,e,f)
C.fun(d,!0,C.fB(g),9,e,f)
w=B.a([new B.jg(e,f-4),new B.jg(e+4,f),new B.jg(e,f+4),new B.jg(e-4,f)],x.J)
B.a1J(d,C.fB(h),w)},
kL(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jg(e,v),new B.jg(u,f),new B.jg(e,t),new B.jg(s,f)],x.J)
if(i){B.a1J(d,C.fB(h),r)
return}B.kN(d,!0,A.dd,C.fB(h),w,A.cZ,1,e,u,v,f)
B.kN(d,!0,A.dd,C.fB(h),w,A.cZ,1,u,e,f,t)
B.kN(d,!0,A.dd,C.fB(h),w,A.cZ,1,e,s,t,f)
B.kN(d,!0,A.dd,C.fB(h),w,A.cZ,1,s,e,f,v)},
fe_(d,e,f,g,h,i,j){var w,v=B.a([new B.jg(e,f),new B.jg(e+g*28,f),new B.jg(e,f+h*28)],x.J)
B.a1J(d,C.fB(i),v)
v=e+g*14
w=f+h*14
C.kL(d,v,w,6,j,!0)
C.kL(d,v,w,3,i,!0)},
fe0(d,e,f,g,h){var w=null,v=B.ht(w,w,A.cd,0,A.e4,854,w,0,3,w,A.cd,480,!1)
C.yq(v,d,e)
C.rT(v,d)
C.kv(v,18,18,444,818,f,2)
C.kv(v,26,26,428,802,f,0.9)
if(h!=null)B.iM(v,!0,C.fB(h),28,451,28,34)
C.fe_(v,18,18,1,1,g,f)
C.fe_(v,462,18,-1,1,g,f)
C.fe_(v,18,836,1,-1,g,f)
C.fe_(v,462,836,-1,-1,g,f)
return v},
hTq(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.ht(v,v,A.cd,0,A.e4,854,v,0,3,v,A.cd,480,!1)
C.yq(r,u,4294240980)
C.rT(r,u)
C.kv(r,10,12,460,830,t,3.2)
C.kv(r,18,20,444,814,s,1.2)
C.kv(r,24,26,432,802,t,1.8)
C.h0D(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kL(r,w,16,3,t,!0)
C.kL(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kL(r,16,w,3,t,!0)
C.kL(r,464,w,3,t,!0)}return r},
hTr(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.ht(t,t,A.cd,0,A.e4,854,t,0,3,t,A.cd,480,!1)
C.yq(p,s,4294373080)
C.rT(p,s)
C.kv(p,16,18,448,818,r,2.4)
C.kv(p,24,26,432,802,4286209044,1)
w=new C.fgk(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.h0D(p,!1,!0,r,q,q,34,16,18)
return p},
bA0(d,e,f,g,h,i){B.iM(d,!0,C.fB(i),e,e+g,f,f+h)},
bAQ(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kN(d,!1,A.dd,new B.RZ(i),null,A.cZ,1,e,w,l,l)}},
hUh(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.E(A.o.an(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kN(d,!1,A.dd,new B.r2(r),null,A.cZ,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.E(A.o.an(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kN(d,!1,A.dd,new B.r2(r),null,A.cZ,1,t,t,f,s);++q}},
hUi(d,e){var w,v,u=null,t=B.ht(u,u,A.cd,0,A.e4,854,u,0,3,u,A.cd,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hUh(t,v,w,30,D.cUb,(A.o.an(v,30)+A.o.an(w,30)&1)===0)
C.bA0(t,44,44,392,766,d)
C.bAQ(t,44,44,392,766,d,e)
C.rT(t,d)
C.kv(t,44,44,392,766,4292128567,2.2)
C.kv(t,50,50,380,754,4279898632,0.8)
return t},
hVn(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.E(g,4)){case 0:C.kL(d,e,f,7,h,!0)
C.kL(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kN(d,!0,A.dd,C.fB(h),o,A.cZ,1.6,w,u,v,t)
B.kN(d,!0,A.dd,C.fB(h),o,A.cZ,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kN(d,!0,A.dd,new B.r2(p),o,A.cZ,1.2,w,v,q,q)}break
default:B.kN(d,!0,A.dd,C.fB(h),o,A.cZ,1.5,e-8,e+8,f,f)
B.kN(d,!0,A.dd,C.fB(h),o,A.cZ,1.5,e,e,f-8,f+8)
B.l3(d,!0,A.dd,C.fB(h),o,A.cZ,2,e,f)}},
hVo(d,e){var w,v,u,t,s=null,r=B.ht(s,s,A.cd,0,A.e4,854,s,0,3,s,A.cd,480,!1)
B.iM(r,!0,C.fB(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hVn(r,u,v,w,4292391514)}C.bA0(r,46,46,388,762,d)
C.bAQ(r,46,46,388,762,d,e)
C.rT(r,d)
C.kv(r,46,46,388,762,4291404327,1.8)
return r},
hhk(d,e,f,g){C.fun(d,!0,C.fB(g),16,e,f)
C.fun(d,!0,C.fB(g),11,e,f)
C.kL(d,e,f,6,g,!0)
B.kN(d,!0,A.dd,C.fB(g),null,A.cZ,1.3,e-14,e+14,f,f)
B.kN(d,!0,A.dd,C.fB(g),null,A.cZ,1.3,e,e,f-14,f+14)},
hQk(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.ht(v,v,A.cd,0,A.e4,854,v,0,3,v,A.cd,480,!1)
B.iM(s,!0,C.fB(4280948752),0,479,0,853)
B.iM(s,!0,C.fB(u),0,479,0,78)
B.iM(s,!0,C.fB(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hhk(s,w,39,t)
C.hhk(s,w,815,t)}C.bA0(s,38,92,404,670,d)
C.bAQ(s,38,92,404,670,d,e)
C.rT(s,d)
C.kv(s,38,92,404,670,t,1.8)
C.kv(s,45,99,390,656,4287322667,0.8)
return s},
hUP(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jg(e,f),new B.jg(q-5,w),new B.jg(q,f-(18-Math.abs(r)*3)),new B.jg(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a1J(d,new B.r2(o),p)}B.l3(d,!0,A.dd,C.fB(4292128567),null,A.cZ,3,e,f)},
hUQ(d,e){var w,v,u,t,s=null,r=4279196764,q=B.ht(s,s,A.cd,0,A.e4,854,s,0,3,s,A.cd,480,!1)
C.yq(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kN(q,!0,A.dd,new B.r2(v),s,A.cZ,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kN(q,!0,A.dd,new B.r2(u),s,A.cZ,1.1,v,v,0,853)}B.iM(q,!0,C.fB(r),0,479,0,70)
B.iM(q,!0,C.fB(r),0,479,798,853)
for(t=0;t<5;++t)C.hUP(q,70+t*85,48,4292128567)
C.bA0(q,48,78,384,712,d)
C.bAQ(q,48,78,384,712,d,e)
C.rT(q,d)
C.kv(q,48,78,384,712,4291404327,1.6)
return q},
hZa(d,e){var w,v,u,t=null,s=4279970378,r=B.ht(t,t,A.cd,0,A.e4,854,t,0,3,t,A.cd,480,!1)
B.iM(r,!0,C.fB(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kL(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.l3(r,!0,A.dd,new B.r2(u),t,A.cZ,1,v,w)}C.bA0(r,40,40,400,774,d)
C.bAQ(r,40,40,400,774,d,e)
C.rT(r,d)
C.kv(r,40,40,400,774,4291058750,2)
C.kv(r,48,48,384,758,s,0.8)
return r},
kU:function kU(d,e){this.a=d
this.b=e},
fEq:function fEq(d){this.a=d},
fEp:function fEp(d){this.a=d},
fgk:function fgk(d){this.a=d},
fF3(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hVh(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
h_c(d){var w,v,u,t=null,s=A.a.cK(d,"{"),r=A.a.oD(d,"}")
if(s<0||r<=s)return t
try{w=A.S.aK(0,Ah.agO(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
afl(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$afl=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vm(null,""),$async$afl)
case 3:n=g
if(A.a.i(n).length===0)throw B.V("AI is not available right now. Please try again later.")
t=B.n7(n)
if(e==null)s=A.hD
else{r=C.hVh(e)
s=B.a([new B.a_X(A.cR.gcw().aL(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qS(t,d,s,"news",E.Fk),$async$afl)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.V(q!=null&&B.KY(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$afl,v)},
bCt(d){return C.i7c(d)},
i7c(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bCt=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.S.ao(d.ah(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.afl(r,null),$async$bCt)
case 7:q=f
p=C.h_c(q)
if(p==null){u=d
w=1
break}o=d.aCo(p)
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
return B.i($async$bCt,v)},
hld(d){var w,v=F.h1I(d)
v=B.aK(v,"book","newspaper")
if(F.a21(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fIZ(d,e,f,g){return C.i93(d,e,f,g)},
i93(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fIZ=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fF3(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hoK()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.afl('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hld(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fIZ)
case 3:r=m.h_c(i)
if(r==null)throw B.V(y.S)
q=new C.zv(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","").aCo(r)
t=q.r
if(t.length===0)throw B.V("The AI did not write a story. Try again.")
s=n+" "+A.d.aH(t," ")
if(F.a21(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a21(A.d.aH(t," "))==="sw"?C.bCt(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fIZ,v)},
bBY(d,e,f,g,h){return C.i4P(d,e,f,g,h)},
i4P(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bBY=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fQ(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.K)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aH(l,"\n")
l=C.hoK()
k=A.S.ao(d.ah(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.afl('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hld(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bBY)
case 3:p=j.h_c(a0)
if(p==null)throw B.V(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cJ(o)){n=d.aCo(B.a2(o,x.N,x.z))
m=A.S.ao(n.ah(),null)!==A.S.ao(d.ah(),null)}else{n=d
m=!1}w=m&&F.a21(A.d.aH(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bCt(n),$async$bBY)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a7P(A.a.i(B.u(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBY,v)},
a7P:function a7P(d,e,f){this.a=d
this.b=e
this.c=f},
ibS(d,e){return B.a6(d,!1).cm(B.e9(new C.fPV(e),!0,null,x.H))},
fPV:function fPV(d){this.a=d},
VH:function VH(d,e){this.c=d
this.a=e},
aDU:function aDU(d,e,f,g,h,i,j,k){var _=this
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
ejm:function ejm(d){this.a=d},
ejl:function ejl(){},
ejn:function ejn(d){this.a=d},
ejk:function ejk(d,e){this.a=d
this.b=e},
ejo:function ejo(){},
eiZ:function eiZ(d,e){this.a=d
this.b=e},
eiV:function eiV(d,e){this.a=d
this.b=e},
ej5:function ej5(d){this.a=d},
ej6:function ej6(d,e){this.a=d
this.b=e},
ej7:function ej7(d){this.a=d},
ej0:function ej0(d,e){this.a=d
this.b=e},
ej1:function ej1(d,e){this.a=d
this.b=e},
ej2:function ej2(d,e){this.a=d
this.b=e},
ej3:function ej3(d){this.a=d},
ej4:function ej4(d){this.a=d},
ej_:function ej_(d,e){this.a=d
this.b=e},
eiX:function eiX(d){this.a=d},
eiY:function eiY(d){this.a=d},
ejd:function ejd(d){this.a=d},
eje:function eje(d){this.a=d},
ejc:function ejc(d){this.a=d},
ejf:function ejf(d,e){this.a=d
this.b=e},
ejb:function ejb(d,e){this.a=d
this.b=e},
ejg:function ejg(d){this.a=d},
eja:function eja(d){this.a=d},
ejh:function ejh(d){this.a=d},
ej9:function ej9(d){this.a=d},
eji:function eji(d,e){this.a=d
this.b=e},
ej8:function ej8(d,e){this.a=d
this.b=e},
ejj:function ejj(d){this.a=d},
eiW:function eiW(d,e){this.a=d
this.b=e},
fE_(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fE_=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hiQ){w=1
break}r=new C.fE0()
t=4
q=x.s
w=7
return B.b(B.iP(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fE_)
case 7:$.hiQ=!0
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
return B.i($async$fE_,v)},
bCk(d){return A.Ha[B.mA(d)-1]+", "+A.p5[B.bH(d)-1]+" "+B.bR(d)+", "+B.bA(d)},
hYe(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dji[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
h26(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fH(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a_(v,new C.fCi(),B.T(v).k("a_<1>")))
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
continue}o=new C.fCk(j,h)
n=new C.fCj(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.an(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iZ(o.$1(l)))
j.a+=l}return u},
fZW(d,e){var w=new C.ffV()
return A.d.cJ(e,0,new C.ffT(w))>=A.d.cJ(d,0,new C.ffU(w))},
hg_(d){var w,v,u=new B.aO($.W().r,A.ao,null,null,B.a([],x.v))
u.F(new B.b5(46,0))
w=d.a
u.F(new B.ap(w,0))
v=d.b
u.F(new B.ap(w,v-46))
u.F(new B.ap(w-46,v))
u.F(new B.ap(0,v))
u.F(new B.ap(0,46))
u.F(new B.bE())
return u},
zv:function zv(d,e,f,g,h,i,j,k,l,m){var _=this
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
ccZ:function ccZ(d){this.a=d},
ccX:function ccX(){},
ccY:function ccY(){},
tn:function tn(d,e){this.a=d
this.b=e},
Bu:function Bu(d,e){this.a=d
this.b=e},
lg:function lg(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fE0:function fE0(){},
fCi:function fCi(){},
fCk:function fCk(d,e){this.a=d
this.b=e},
fCj:function fCj(d,e,f){this.a=d
this.b=e
this.c=f},
ffV:function ffV(){},
ffW:function ffW(){},
ffT:function ffT(d){this.a=d},
ffU:function ffU(d){this.a=d},
b0F:function b0F(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cd_:function cd_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cd0:function cd0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cd1:function cd1(d){this.a=d},
bcf:function bcf(d){this.a=d},
bce:function bce(d,e){this.b=d
this.a=e},
btT:function btT(d){this.a=d},
b8K:function b8K(d,e){this.b=d
this.a=e},
brm:function brm(d,e){this.b=d
this.a=e},
hqF(d,e){return B.a6(d,!1).cm(B.e9(new C.fPY(e,null),!0,null,x.E))},
fPY:function fPY(d,e){this.a=d
this.b=e},
VK:function VK(d,e,f){this.c=d
this.d=e
this.a=f},
aDY:function aDY(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
eky:function eky(){},
ekz:function ekz(d){this.a=d},
ekx:function ekx(d,e){this.a=d
this.b=e},
ekl:function ekl(d){this.a=d},
ekm:function ekm(d){this.a=d},
eks:function eks(d){this.a=d},
ekt:function ekt(d,e){this.a=d
this.b=e},
ekq:function ekq(d){this.a=d},
ekr:function ekr(d,e,f){this.a=d
this.b=e
this.c=f},
ekn:function ekn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eku:function eku(d,e){this.a=d
this.b=e},
ekp:function ekp(d,e){this.a=d
this.b=e},
ekv:function ekv(d){this.a=d},
eko:function eko(d,e){this.a=d
this.b=e},
ekw:function ekw(d,e){this.a=d
this.b=e},
bbM:function bbM(d,e,f){this.b=d
this.c=e
this.a=f},
ibY(d){return B.a6(d,!1).cm(B.e9(new C.fQd(),!0,null,x.I))},
bzM(d,e){var w,v,u,t,s,r,q=B.c2(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
h0k(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fQd:function fQd(){},
a_O:function a_O(d){this.a=d},
oy:function oy(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aFk:function aFk(d,e,f,g,h,i,j,k,l){var _=this
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
_.aB=_.aJ=_.aF=_.az=_.a_=_.b8=_.bi=_.y2=0
_.b1=null
_.b2=0.25
_.bb=null
_.bL=0.5
_.aI=1
_.c5=_.bF=_.bh=0
_.cI=_.c6=!1
_.c=_.a=null},
eU8:function eU8(d){this.a=d},
eT0:function eT0(d,e){this.a=d
this.b=e},
eTo:function eTo(d,e){this.a=d
this.b=e},
eTy:function eTy(d){this.a=d},
eSK:function eSK(d){this.a=d},
eSL:function eSL(d){this.a=d},
eSI:function eSI(d){this.a=d},
eSJ:function eSJ(d){this.a=d},
eTh:function eTh(d,e){this.a=d
this.b=e},
eTi:function eTi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eTu:function eTu(d,e,f){this.a=d
this.b=e
this.c=f},
eTt:function eTt(d,e){this.a=d
this.b=e},
eTv:function eTv(d,e){this.a=d
this.b=e},
eTs:function eTs(d,e){this.a=d
this.b=e},
eTx:function eTx(d,e,f){this.a=d
this.b=e
this.c=f},
eTw:function eTw(d,e){this.a=d
this.b=e},
eSA:function eSA(d){this.a=d},
eSB:function eSB(d){this.a=d},
eSC:function eSC(d){this.a=d},
eSz:function eSz(){},
eSD:function eSD(d,e){this.a=d
this.b=e},
eSy:function eSy(d,e){this.a=d
this.b=e},
eSF:function eSF(){},
eSE:function eSE(d,e){this.a=d
this.b=e},
eSx:function eSx(d,e){this.a=d
this.b=e},
eSu:function eSu(d,e){this.a=d
this.b=e},
eSG:function eSG(d){this.a=d},
eSw:function eSw(d,e){this.a=d
this.b=e},
eSH:function eSH(d){this.a=d},
eSv:function eSv(d,e){this.a=d
this.b=e},
eTY:function eTY(d,e){this.a=d
this.b=e},
eU4:function eU4(d){this.a=d},
eU5:function eU5(d,e){this.a=d
this.b=e},
eU6:function eU6(){},
eTZ:function eTZ(d,e){this.a=d
this.b=e},
eTX:function eTX(d,e){this.a=d
this.b=e},
eU_:function eU_(d,e){this.a=d
this.b=e},
eTW:function eTW(d,e){this.a=d
this.b=e},
eU0:function eU0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eTV:function eTV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eU1:function eU1(d){this.a=d},
eU2:function eU2(d,e){this.a=d
this.b=e},
eU3:function eU3(d){this.a=d},
eTU:function eTU(d){this.a=d},
eTH:function eTH(d){this.a=d},
eTI:function eTI(d){this.a=d},
eTG:function eTG(d,e){this.a=d
this.b=e},
eTB:function eTB(d,e){this.a=d
this.b=e},
eTJ:function eTJ(d){this.a=d},
eTM:function eTM(d){this.a=d},
eTF:function eTF(d){this.a=d},
eTN:function eTN(d){this.a=d},
eTO:function eTO(d){this.a=d},
eTP:function eTP(d){this.a=d},
eTQ:function eTQ(d){this.a=d},
eTE:function eTE(d){this.a=d},
eTR:function eTR(d){this.a=d},
eTD:function eTD(d){this.a=d},
eTS:function eTS(d,e){this.a=d
this.b=e},
eTC:function eTC(d,e){this.a=d
this.b=e},
eTT:function eTT(d){this.a=d},
eTK:function eTK(d){this.a=d},
eTL:function eTL(d){this.a=d},
eTl:function eTl(d){this.a=d},
eTk:function eTk(d){this.a=d},
eTm:function eTm(d,e){this.a=d
this.b=e},
eTj:function eTj(d,e){this.a=d
this.b=e},
eTn:function eTn(d){this.a=d},
eTd:function eTd(d){this.a=d},
eTc:function eTc(d){this.a=d},
eTe:function eTe(d){this.a=d},
eTb:function eTb(d){this.a=d},
eTf:function eTf(d,e){this.a=d
this.b=e},
eTa:function eTa(d,e){this.a=d
this.b=e},
eT9:function eT9(d,e){this.a=d
this.b=e},
eSS:function eSS(d){this.a=d},
eST:function eST(d){this.a=d},
eSU:function eSU(d){this.a=d},
eSV:function eSV(d){this.a=d},
eSW:function eSW(d){this.a=d},
eSX:function eSX(d){this.a=d},
eSY:function eSY(d){this.a=d},
eSZ:function eSZ(d){this.a=d},
eT_:function eT_(d){this.a=d},
eSd:function eSd(d){this.a=d},
eSe:function eSe(d){this.a=d},
eSf:function eSf(d){this.a=d},
eSg:function eSg(d){this.a=d},
eSh:function eSh(d){this.a=d},
eSc:function eSc(d){this.a=d},
eSi:function eSi(d){this.a=d},
eSj:function eSj(d){this.a=d},
eSM:function eSM(d){this.a=d},
eSN:function eSN(d){this.a=d},
eSO:function eSO(d){this.a=d},
eSP:function eSP(d){this.a=d},
eSQ:function eSQ(d){this.a=d},
eSn:function eSn(d){this.a=d},
eSo:function eSo(d){this.a=d},
eSp:function eSp(d){this.a=d},
eSq:function eSq(d){this.a=d},
eSr:function eSr(d){this.a=d},
eSm:function eSm(d){this.a=d},
eSs:function eSs(d){this.a=d},
eSl:function eSl(d){this.a=d},
eSt:function eSt(d){this.a=d},
eSk:function eSk(d){this.a=d},
eTg:function eTg(d){this.a=d},
eT8:function eT8(d){this.a=d},
eT4:function eT4(d){this.a=d},
eT3:function eT3(d){this.a=d},
eT5:function eT5(d,e){this.a=d
this.b=e},
eT2:function eT2(d,e){this.a=d
this.b=e},
eT6:function eT6(d,e){this.a=d
this.b=e},
eT1:function eT1(d,e){this.a=d
this.b=e},
eT7:function eT7(d){this.a=d},
eTr:function eTr(d){this.a=d},
eTq:function eTq(d,e,f){this.a=d
this.b=e
this.c=f},
eTp:function eTp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eTA:function eTA(d,e){this.a=d
this.b=e},
eTz:function eTz(d,e){this.a=d
this.b=e},
eSR:function eSR(d){this.a=d},
eU7:function eU7(d){this.a=d},
bfk:function bfk(d,e){this.b=d
this.a=e},
i7n(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
i7o(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).l0(0,d),m=B.C(n,B.a3(n).k("J.E"))
if(m.length===0)return d
w=new B.ff("")
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
v=t.index+t[0].length}n=w.a=n+A.a.b5(d,v)
return n.charCodeAt(0)==0?n:n},
bAm(){var w=$.bzu,v=$.Qg
$.Qg=v+1
return w+"_"+v},
ih(d,e,f,g,h,i,j){return C.er(A.bi,!1,4279310375,A.aD,"",i,24,A.bo,A.a6,"",h,C.bAm(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cn,D.f4,g,e,f)},
nX(d,e,f,g){var w=f*9
return C.ih(D.eN,d-f/2,e-w/32,f,w/16,g,0)},
hRW(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bzu
p=$.Qg
$.Qg=p+1
w.push(new C.eM(q+"_"+p,D.f4,0,r,1,0.0016,"",24,A.a6,A.bo,A.aD,k,A.bi,null,D.bg,t,t,0,0,!1,"",0,D.cn,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bzu
p=$.Qg
$.Qg=p+1
w.push(new C.eM(q+"_"+p,D.f4,o,0,0.004,1,"",24,A.a6,A.bo,A.aD,k,A.bi,null,D.bg,t,t,0,0,!1,"",0,D.cn,0,"","","","","",!1,0))}w.push(C.nX(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nX(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ih(D.bg,0.08,0.08,0.5,0.003,v,0),C.ih(D.bg,0.58,0.08,0.004,0.06,v,0),C.ih(D.bg,0.58,0.14,0.34,0.003,v,0),C.ih(D.bg,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ih(D.bg,0.08,0.8,0.004,0.14,t,0),C.ih(D.bg,0.08,0.94,0.6,0.003,t,0),C.nX(0.58,0.08,0.05,e),C.nX(0.92,0.22,0.05,e),C.nX(0.08,0.8,0.05,f),C.nX(0.68,0.94,0.05,f),C.nX(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ih(D.l6,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ih(D.l6,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ih(D.l6,0.7,0.8,0.22,0.12,w|1140850688,0),C.ih(D.l6,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nX(0.5,0.5,1.5,w|335544320),C.nX(0.5,0.5,1.15,w|402653184),C.nX(0.5,0.5,0.8,v|436207616),C.nX(0.95,0.05,0.4,v|855638016),C.nX(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nX(0.85,0.08,0.7,w|1140850688),C.nX(0.1,0.35,0.5,v|855638016),C.nX(0.9,0.62,0.55,v|771751936),C.nX(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.ih(D.bg,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.ih(D.bg,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.ih(D.bg,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.ih(D.bg,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nX(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nX(0.5,0.2,0.65,(w|3422552064)>>>0),C.nX(0.5,0.2,0.95,w|855638016),C.ih(D.bg,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.ih(D.bg,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.ih(D.jP,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ih(D.jP,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ih(D.jP,0.15,0.86,0.6,0.14,1712265002,0),C.nX(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cVE[n]
u=A.o.E(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bzu
l=$.Qg
$.Qg=l+1
w.push(new C.eM(m+"_"+l,D.f4,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a6,A.bo,A.aD,k,A.bi,null,D.eN,q,q,0,0,!1,"",0,D.cn,0,"","","","","",!1,0))}w.push(C.nX(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ih(D.jP,0.35,-0.1,0.3,0.62,w|855638016,0),C.ih(D.jP,0.05,-0.1,0.3,0.55,v,-0.5),C.ih(D.jP,0.65,-0.1,0.3,0.55,v,0.5),C.nX(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ih(D.bg,0.06,0.04,0.88,0.002,e,0),C.ih(D.bg,0.06,0.96,0.88,0.002,e,0),C.ih(D.bg,0.06,0.04,0.004,0.92,e,0),C.ih(D.bg,0.936,0.04,0.004,0.92,e,0),C.ih(D.bg,0.09,0.07,0.82,0.001,w,0),C.ih(D.bg,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ih(D.jQ,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ih(D.jQ,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ih(D.jQ,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ih(D.bg,0,0,0.3,0.09,w|1140850688,0),C.ih(D.bg,0.7,0.9,0.3,0.1,v|1426063360,0),C.ih(D.bg,0.82,0.04,0.12,0.07,w|771751936,0),C.ih(D.bg,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ih(D.eN,0.62,0.02,0.5,0.16,v,0.6),C.ih(D.eN,0.78,0.12,0.4,0.12,u,0.9),C.ih(D.eN,-0.12,0.8,0.5,0.16,u,-0.6),C.ih(D.eN,-0.05,0.9,0.4,0.12,v,-0.9),C.nX(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ih(D.bg,0.09,0.12,0.16,0.006,e,0),C.ih(D.bg,0.05,0.03,0.9,0.001,w,0),C.ih(D.bg,0.05,0.97,0.9,0.001,w,0)],x.u)}},
i3T(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bzu=j
$.Qg=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fzH()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.er(A.bi,!1,n,A.aD,"ngmy_quote_background",m,24,A.bo,A.a6,"",1,C.bAm(),g,"","",0,!1,"",0,D.bg,l,2,"",0,0,"",D.cn,D.lw,1,0,0))
if(a9)A.d.v(q,C.hRW(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.i7n(B.aK(w,p,""))
o=A.a.t(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fzG(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cF,A.a6))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a6))
if(a0!=null&&a0.length!==0)q.push(C.er(A.bi,!1,n,A.aD,"ngmy_quote_logo",m,24,A.bo,A.a6,a1,a3*9/16,C.bAm(),a0,"","",0,!1,a2,0,D.bg,l,2,"",0,0,"",D.cn,D.lw,a3,a4,a5))
return C.rw(s,r,0,0,q,j+"_slide",D.qk,"","","",D.de)},
rv:function rv(d,e){this.a=d
this.b=e},
m7:function m7(d,e,f,g,h,i,j,k,l,m){var _=this
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
fzH:function fzH(){},
fzG:function fzG(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hI2(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a4(d)
v=B.bi(B.u(w.h(d,"at")))
u=w.h(d,"outline")
t=B.u(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.cem(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bV()
w=w.h(d,"request")
return new C.zx(u,t,s,B.u(w==null?"":w))},
fHm(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fHm=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hjb){w=1
break}$.hjb=!0
t=4
w=7
return B.b(B.ay(),$async$fHm)
case 7:r=e
q=B.aU(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.S.aK(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jz(p),k=k.gae(k),j=x.j,i=x.o;k.C();){o=k.gR(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aV(j.a(o.b));h.C();){m=h.gR(h)
l=C.hI2(m)
if(l!=null)J.ce(n,l)}$.CG.c9(0,B.u(o.a),new C.fHn(n))}C.h00()
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
return B.i($async$fHm,v)},
h00(){var w,v=new B.S(Date.now(),0,!1).bR(-12e8)
for(w=new B.du($.CG,$.CG.r,$.CG.e);w.C();)J.nt(w.d,new C.fnx(v))
$.CG.br($.CG,new C.fny())},
aNX(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aNX=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$aNX)
case 6:s=a0
m=x.N
l=x.z
r=B.U(m,l)
for(k=new B.cI($.CG,B.a3($.CG).k("cI<1,2>")).gae(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aV(q.b);h.C();){o=h.gR(h)
g=o
J.ce(p,B.F(["at",g.a.a6().ac(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aG(r,i,p)}n=r
w=7
return B.b(s.aq("String","ngmy_slides_ai_history_v1",A.S.ao(n,null)),$async$aNX)
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
return B.i($async$aNX,v)},
i7Z(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.h00()
w=$.CG.c9(0,d,new C.fHp())
v=Date.now()
u=B.C(e,B.a3(e).k("co.E"))
J.pC(w,0,new C.zx(new B.S(v,0,!1),f,u,g))
C.aNX()},
i7W(d){var w,v=$.CG.h(0,d)
if(v==null||J.cn(v))return
w=J.cF(v)
w.cA(v,0)
if(w.gam(v))$.CG.W(0,d)
C.aNX()},
zx:function zx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cem:function cem(){},
fHn:function fHn(d){this.a=d},
fnx:function fnx(d){this.a=d},
fny:function fny(){},
fHp:function fHp(){},
i80(d){return A.d.dM(D.wb,new C.fHs(d),new C.fHt())},
hI0(d){var w
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
hI_(d){var w
switch(d.a){case 0:w=D.alD
break
case 1:w=A.yq
break
case 2:w=A.amG
break
case 3:w=K.alf
break
case 4:w=A.am7
break
case 5:w=A.lV
break
default:w=null}return w},
hUV(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Q7[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Q7[w]
if(!B.cS(v.toLowerCase(),t,0))u=B.cS(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hI1(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.K)(w),++s){r=w[s]
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
o.push(q)}return A.S.ao(B.F(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
i7X(d,e,f,g,h){var w=new B.M(D.wb,new C.fHl(),x.eC).aH(0,", "),v=""+d,u=C.hoC(h),t=F.fB5(h),s=C.hkN(g),r=e.t(0,D.I4)?'- New slides get an "emoji".\n':"",q=e.t(0,D.I5)?'- New slides get an "icon3d" from: '+A.d.aH(D.Q7,", ")+".\n":"",p=e.t(0,D.CU)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
i7Y(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.M(D.wb,new C.fHo(),x.eC).aH(0,", "),p=new B.ff("")
if(e.t(0,D.I4)){p.a=s
w=s}else w=""
if(e.t(0,D.I5))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aH(D.Q7,", ")+".\n")
if(e.t(0,D.CU))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hoC(d)
v=F.fB5(d)
u=C.hkN(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ah3(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.D2(a3,"{"),a5=J.fTj(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Lh(a3,a4,a5+1)
try{w=A.S.aK(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.cn(v))return a1
u=B.a([],x.aC)
for(o=J.aV(v),n=x.s,m=x.N;o.C();){t=o.gR(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.fFl(),m).c0(0,new C.fFm())
k=B.C(l,l.$ti.k("J.E"))}else k=B.a([],n)
s=k
l=J.q(t,"kind")
l=A.a.i(B.u(l==null?a2:l))
j=J.q(t,"title")
j=A.a.i(B.u(j==null?"":j))
i=J.q(t,"subtitle")
i=A.a.i(B.u(i==null?"":i))
h=J.q(t,"notes")
h=A.a.i(B.u(h==null?"":h))
g=J.q(t,"emoji")
g=A.a.i(B.u(g==null?"":g))
f=J.q(t,"icon3d")
f=C.hUV(B.u(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.u(e==null?"":e))
d=J.q(t,"picture")
d=B.c7(B.u(d==null?0:d),a1)
if(d==null)d=0
J.ce(u,new C.a7X(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.u(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.u(q==null?J.fr(u).b:q))
p=A.d.b6(D.wb,new C.fFn(r))?r:a7
o=C.fmM(J.q(w,"logo_frame"),D.Cg)
n=C.fmM(J.q(w,"logo_ring"),D.Cb)
m=C.fmM(J.q(w,"photo_frame"),D.Cg)
l=C.fmM(J.q(w,"photo_ring"),D.Cb)
return new C.ar5(q,p,u,o,n,m,l)}catch(a0){return a1}},
a1y(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hnJ(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.CV),f7=f6?C.hOG():e4,f8=f7==null
if(f8)w=e4
else{v=new B.eE()
v.dt(f7.w+1)
u=f7.a
t=B.bo(u.b,!0,x.dL)
A.d.fp(t,v)
s=u.c
s=new C.nL("luxe",u.a,A.lV,t,u.e,u.f,B.a([s,u.d,s],x.t),D.de)
w=s}if(w==null)w=C.i80(f9.b)
r=g2.t(0,D.a5r)||f6
q=g2.t(0,D.I4)
p=g2.t(0,D.S7)
o=new C.fzL()
n=B.a([],x.g)
m=new C.fzO(o,w,r)
l=new C.fzN(o,r)
k=new C.fzM(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a4(g0),a7=!A.d.b6(u,new C.fzK(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.E(b1,a3.length)]
b4=A.o.E(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.E(b1,5)
b9=D.cXa[b8]
c0=D.cW6[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eSd.t(0,b2.a)){c7=b0+1
c5=g8[A.o.E(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eN,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.D(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eN,0.7,-0.25,0.46,0.82,(A.o.D(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eN,-0.08,0.68,0.24,0.43,(A.o.D(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mK,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.ql,500,f2,f0))
c1.push(l.$8$fx$key(D.bg,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.S4
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eN,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.l6,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bg,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.CS
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eN,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eN,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mK,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cF,A.P))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.ql,500,f2,f0))
d3=D.mJ
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eN,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bg,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.uu:D.cn
c1.push(new C.eM(b4,D.a5p,0.64,0.05,0.27,0.9,g1,24,A.a6,A.bo,A.aD,4279310375,A.bi,e4,D.bg,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mJ
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eN,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eN,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mK,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.ql,450,f2,f0))
c1.push(l.$8$fx$key(D.bg,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.S4
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eN,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eN,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bg,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bg,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aH(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.I2,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mJ}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.de,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hQj(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.E(b1,b8.length)]}else b8=r?D.dlG[A.o.E(b1,6)]:s
n.push(new C.lH(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.BI(e4,e4,e4,e4,D.CR,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fC8(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fC8=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.CU)
n=e.t(0,D.I5)
if(!o&&!n){u=D.a4n
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fCb(o,s[r],n,$.hTF,r).$0())
s=B.U(x.S,x.aH)
m=J
w=3
return B.b(B.iP(t,x.e),$async$fC8)
case 3:q=m.aV(g)
case 4:if(!q.C()){w=5
break}p=q.gR(q)
s.n(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fC8,v)},
fB8(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fB8=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.i7Y(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aNh(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fB8)
case 3:u=s.aND(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fB8,v)},
bBZ(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bBZ=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aX(x.N)
for(s=B.eb(f,f.r,B.a3(f).c),r=s.$ti.c;s.C();){q=s.d
t.L(0,(q==null?r.a(q):q).b)}C.i7Z(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.ah3(i,"colorful")
t=C.i7X(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aNh(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hD),$async$bBZ)
case 3:u=o.aND(m,f,h,g,D.e_r,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBZ,v)},
aNh(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aNh=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vm(null,""),$async$aNh)
case 3:n=i
if(A.a.i(n).length===0)throw B.V("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.n7(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qS(t,d,g,"slides",null),$async$aNh)
case 7:q=i
p=q.b
if(p!=null){o=C.ah3(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.V(s!=null&&B.KY(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aNh,v)},
aND(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aND=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.CU)||e.t(0,D.I5)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.dd(e,x.Q)
t.W(0,D.CU)}w=6
return B.b(C.fC8(d,t),$async$aND)
case 6:s=k
w=4
break
case 5:s=D.a4n
case 4:t=d.c
w=A.d.b6(t,new C.ffQ())?7:9
break
case 7:r=$.hpu
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dS(r,x.aP),$async$aND)
case 10:q=k
p=q!=null?A.S.ao(q.ah(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hnJ(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hI1(new C.ar5(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.T(m).k("M<1,m>")
t=B.C(new B.M(m,new C.ffR(),n),n.k("ak.E"))
l.cx=t
t=B.a3(e).k("jR<co.E,m>")
t=B.C(new B.jR(e,new C.ffS(),t),t.k("J.E"))
l.cy=t
l.ay=e.t(0,D.S7)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aND,v)},
h2Q(d){var w,v,u,t=d.cy
if(t==null)t=A.U
w=B.aX(x.Q)
for(v=0;v<6;++v){u=D.a3a[v]
if(A.d.t(t,u.b))w.L(0,u)}return w},
ic2(d){return B.bS(A.K,null,new C.fQp(),d,!0,!0,!0,null,!1,!1,x.I)},
hPi(d,e){var w,v=e.toLowerCase()
if(A.a.cb(v,".png"))w="image/png"
else w=A.a.cb(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cR.gcw().aL(d)},
ic1(d,e,f){return B.bS(A.K,null,new C.fQo(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
h2R(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
h2S(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
fmM(d,e){var w=A.a.i(B.u(d==null?"":d)).toLowerCase()
return A.d.b6(e,new C.fmN(w))?w:""},
hkN(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hps(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.ah3(a1==null?"":a1,a0),a3=C.ah3(a5,a0)
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
for(v=t.length,r=a4.r,q=B.T(r).k("a_<1>"),p=0;p<t.length;t.length===v||(0,B.K)(t),++p){o=B.rh(new B.a_(r,new C.fHu(t[p]),q))
if(o==null)return!1
s.push(o)}for(v=w.length,n=0;n<v;++n){m=w[n]
l=u[n]
if(m.a!==l.a||m.f!==l.f||m.r!==l.r||m.w!==l.w||m.x!==l.x)return!1
if(m.d.length!==l.d.length)return!1}if(!a6)return!0
for(v=x.fR,r=v.k("J.E"),q=x.L,n=0;n<w.length;++n){m=w[n]
l=u[n]
k=B.a([new B.z(m.b,l.b),new B.z(m.c,l.c)],q)
for(j=m.d,i=l.d,h=0;h<j.length;++h)k.push(new B.z(j[h],i[h]))
k.push(new B.z(m.e,l.e))
g=B.C(new B.a_(k,new C.fHv(),v),r)
A.d.aZ(g,new C.fHw())
if(g.length===0)continue
f=new C.fHx(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.K)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
i8h(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aGH
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.e1m
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.e1n
return null},
hko(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bm(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dk(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
i81(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.of
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.K)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.K)(q),++o){n=q[o]
if(n.b!==D.cQ)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.D(m*0.85,10,120)
break
case 1:j=A.k.D(m*1.15,10,120)
if(C.hko(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hko(n,i,v,u))if(n.w>10){f=h+1
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
i8_(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.ah3(o,"colorful")
if(n==null)throw B.V("That earlier version could not be read.")
w=B.aX(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a3a[r]
if(q.b===s)w.L(0,q)}}v=C.h2R(e)
u=C.h2S(e)
p=C.hnJ(n,D.a4n,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.T(o).k("M<1,m>")
o=B.C(new B.M(o,new C.fHq(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("jR<co.E,m>")
o=B.C(new B.jR(w,new C.fHr(),o),o.k("J.E"))
p.cy=o
p.ay=w.t(0,D.S7)
return p},
ibP(d,e,f){return B.bS(A.K,null,new C.fPC(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hOG(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.eE()
s.dt(t)
w=D.cB8[s.aw(10)]
v=new C.efs(s)
u=x.N
return new C.efr(w,s.aw(4),J.fr(v.$1$2(D.d0H,1,x.ff)),w.r[s.aw(3)],v.$1$2(D.dh5,2+s.aw(2),u),v.$1$2(D.da3,2,u),v.$1$2(D.dk9,4,x.fP),t)},
hQj(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.eE()
a1.dt(a5.w+a3*13)
w=new C.fcn(a4)
v=new C.fcp(a4,d)
u=new C.fco(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.K)(a2),++q){p=a2[q]
if(p.b===D.cQ){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aV(A.o.fX(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aV(A.o.fX(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.E(a3,t.length)]
if(n==="spotlight")A.d.cj(a2,0,w.$8(D.eN,0.1+a1.aj()*0.45,0.05+a1.aj()*0.3,0.45,0.75,C.a1y(a0,52),"lux_spot",a5.wv(0,"spotlight")))
else A.d.cj(a2,0,w.$8(D.bg,0,0,1,1,0,"lux_back",a5.wv(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.cj(a2,1,w.$8(D.bg,0,0,1,1,0,"lux_back2",a5.aEP(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bg,0.022,0.038,0.956,0.924,0,g,a5.wv(0,f),D.de,150,C.a1y(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bg,0.018,0.032,0.964,0.936,0,g,a5.wv(0,f),D.de,120,C.a1y(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bg,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.de,260,C.a1y(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bg,0,0,1,1,0,"lux_filigree",a5.wv(0,"filigree"),D.de,200))
break
default:a2.push(w.$10$anim$delay(D.bg,0.08,0.06,0.84,0.004,C.a1y(a0,208),"lux_rule",a5.aEP(0,"shimmer",r),D.ut,150))
a2.push(w.$10$anim$delay(D.bg,0.08,0.936,0.84,0.004,C.a1y(a0,144),"lux_rule2","",D.I2,220))}l=!A.d.b6(a2,new C.fcm())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.wv(0,"crest"),350))
else{o=a1.hi()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.wv(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a1y(r,242)
j=a5.wv(0,"orbit")
i=s===D.bg?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.ql,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eN,t-0.007,0.9495,0.014,0.025,C.a1y(r,242),"lux_g2",a5.wv(0,"orbit"),D.ql,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){h=t[q]
a2.push(w.$8(D.bg,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aV(A.o.fX(a0,16),8,"0").toUpperCase()))}if((A.d.gI(d.b).a&16777215)<8421504)a2.push(w.$8(D.bg,0,0,1,1,0,"lux_velvet",a5.wv(0,"velvet")))},
nL:function nL(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fHs:function fHs(d){this.a=d},
fHt:function fHt(){},
w1:function w1(d,e){this.a=d
this.b=e},
a7X:function a7X(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
ar5:function ar5(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fHl:function fHl(){},
fHo:function fHo(){},
fFl:function fFl(){},
fFm:function fFm(){},
fFn:function fFn(d){this.a=d},
fzL:function fzL(){},
fzO:function fzO(d,e,f){this.a=d
this.b=e
this.c=f},
fzN:function fzN(d,e){this.a=d
this.b=e},
fzM:function fzM(d,e){this.a=d
this.b=e},
fzK:function fzK(d){this.a=d},
fCb:function fCb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fC9:function fC9(d){this.a=d},
fCa:function fCa(d){this.a=d},
ffQ:function ffQ(){},
ffR:function ffR(){},
ffS:function ffS(){},
fQp:function fQp(){},
a0k:function a0k(d){this.a=d},
aHf:function aHf(d,e,f,g,h){var _=this
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
f_l:function f_l(d,e,f){this.a=d
this.b=e
this.c=f},
f_m:function f_m(d,e){this.a=d
this.b=e},
f_j:function f_j(d,e){this.a=d
this.b=e},
f_k:function f_k(d,e){this.a=d
this.b=e},
f_i:function f_i(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
f_d:function f_d(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f_h:function f_h(d,e){this.a=d
this.b=e},
f_c:function f_c(d,e){this.a=d
this.b=e},
f_g:function f_g(d,e){this.a=d
this.b=e},
f_b:function f_b(d,e){this.a=d
this.b=e},
f_e:function f_e(d){this.a=d},
f_f:function f_f(d,e){this.a=d
this.b=e},
f_1:function f_1(d,e){this.a=d
this.b=e},
f_2:function f_2(d,e){this.a=d
this.b=e},
f_4:function f_4(d){this.a=d},
f_5:function f_5(d){this.a=d},
f_6:function f_6(d){this.a=d},
f_7:function f_7(d){this.a=d},
f_3:function f_3(d,e){this.a=d
this.b=e},
f_8:function f_8(d,e){this.a=d
this.b=e},
f_z:function f_z(d){this.a=d},
f_A:function f_A(d){this.a=d},
f_y:function f_y(d){this.a=d},
f_B:function f_B(d){this.a=d},
f_x:function f_x(d){this.a=d},
f_D:function f_D(d){this.a=d},
f_w:function f_w(d,e){this.a=d
this.b=e},
f_E:function f_E(d){this.a=d},
f_v:function f_v(d,e){this.a=d
this.b=e},
f_F:function f_F(d){this.a=d},
f_u:function f_u(d){this.a=d},
f_G:function f_G(d){this.a=d},
f_t:function f_t(d,e){this.a=d
this.b=e},
f_H:function f_H(d){this.a=d},
f_s:function f_s(d,e){this.a=d
this.b=e},
f_I:function f_I(d){this.a=d},
f_r:function f_r(d){this.a=d},
f_J:function f_J(d,e){this.a=d
this.b=e},
f_q:function f_q(d,e){this.a=d
this.b=e},
f_K:function f_K(d){this.a=d},
f_C:function f_C(d){this.a=d},
f_p:function f_p(d,e){this.a=d
this.b=e},
f_9:function f_9(d,e,f){this.a=d
this.b=e
this.c=f},
f_a:function f_a(d,e,f){this.a=d
this.b=e
this.c=f},
f_o:function f_o(d,e){this.a=d
this.b=e},
f_n:function f_n(d,e){this.a=d
this.b=e},
fQo:function fQo(d,e){this.a=d
this.b=e},
a0j:function a0j(d,e,f){this.c=d
this.d=e
this.a=f},
aHe:function aHe(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eZV:function eZV(d){this.a=d},
eZW:function eZW(d){this.a=d},
eZX:function eZX(d,e){this.a=d
this.b=e},
eZY:function eZY(d){this.a=d},
eZZ:function eZZ(d){this.a=d},
eZU:function eZU(d,e){this.a=d
this.b=e},
f__:function f__(d,e){this.a=d
this.b=e},
f_0:function f_0(d,e){this.a=d
this.b=e},
fmN:function fmN(d){this.a=d},
b12:function b12(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDN:function aDN(d,e,f){this.c=d
this.d=e
this.a=f},
bk_:function bk_(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
efu:function efu(d){this.a=d},
eft:function eft(){},
bhx:function bhx(d,e){this.b=d
this.a=e},
fHu:function fHu(d){this.a=d},
fHv:function fHv(){},
fHw:function fHw(){},
fHx:function fHx(d){this.a=d},
arD:function arD(d,e){this.a=d
this.b=e},
fHq:function fHq(){},
fHr:function fHr(){},
fPC:function fPC(d,e){this.a=d
this.b=e},
ZG:function ZG(d,e,f){this.c=d
this.d=e
this.a=f},
aBf:function aBf(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
djb:function djb(d){this.a=d},
djc:function djc(d){this.a=d},
djd:function djd(d,e){this.a=d
this.b=e},
djg:function djg(d){this.a=d},
djh:function djh(d,e){this.a=d
this.b=e},
djf:function djf(d,e){this.a=d
this.b=e},
dji:function dji(d){this.a=d},
dje:function dje(d,e){this.a=d
this.b=e},
bst:function bst(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
efr:function efr(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
efs:function efs(d){this.a=d},
fcn:function fcn(d){this.a=d},
fcp:function fcp(d,e){this.a=d
this.b=e},
fco:function fco(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fcm:function fcm(){},
aLO:function aLO(){},
h1F(d){var w,v,u
try{w=A.S.aK(0,d,null)
if(x.f.b(w)){v=B.vU(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b0Z:function b0Z(d,e,f){this.c=d
this.d=e
this.a=f},
blD:function blD(d,e){this.c=d
this.a=e},
i4l(d){return A.d.dM(D.H7,new C.fAS(d),new C.fAT())},
i4m(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b5(t,6)
if(w.length===0)return null
v=new B.a_(D.H7,new C.fAU(w),x.b4)
if(!v.gae(0).C())return null
u=v.gI(0)
return new C.jH("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
ld:function ld(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fAS:function fAS(d){this.a=d},
fAT:function fAT(){},
fAU:function fAU(d){this.a=d},
mW(d,e,f,g,h){return new C.EF(f,g,d)},
hRs(d){var w=d.z,v=B.T(w).k("a_<1>")
w=B.C(new B.a_(w,new C.fej(),v),v.k("J.E"))
d.z=w
d.x=""},
dy(d,e){var w=$.Kn
e.db="__design__:"+(w.length===0?"layer":w)
A.d.cj(d.z,0,e)},
dz(d,e,f,g,h,i,j,k,l){return C.er(A.bi,!1,4279310375,A.aD,"",d,24,A.bo,A.a6,"",e,"design_"+C.cB(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cn,D.f4,j,k,l)},
hnw(d,e){var w
C.hRs(d)
w=A.d.dM($.bDZ(),new C.fyI(e),new C.fyJ())
$.Kn=w.a
d.x=w.a;++d.y
try{w.bC(d)}finally{$.Kn=""}d.z=B.bo(d.z,!0,x.F)},
EF:function EF(d,e,f){this.a=d
this.b=e
this.e=f},
fej:function fej(){},
fGX:function fGX(){},
fGY:function fGY(){},
fGZ:function fGZ(){},
fH9:function fH9(){},
fHe:function fHe(){},
fHf:function fHf(){},
fHg:function fHg(){},
fHh:function fHh(){},
fHi:function fHi(){},
fHj:function fHj(){},
fHk:function fHk(){},
fH_:function fH_(){},
fH0:function fH0(){},
fH1:function fH1(){},
fH2:function fH2(){},
fH3:function fH3(){},
fH4:function fH4(){},
fH5:function fH5(){},
fH6:function fH6(){},
fH7:function fH7(){},
fH8:function fH8(){},
fHa:function fHa(){},
fHb:function fHb(){},
fHc:function fHc(){},
fHd:function fHd(){},
fyI:function fyI(d){this.a=d},
fyJ:function fyJ(){},
iY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.er(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bg,4280172719,2,m,n,0,"",o,D.cQ,p,q,r)},
CW(d,e,f,g,h,i,j,k,l){return C.er(A.bi,!1,4279310375,A.aD,"",d,24,A.bo,A.a6,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cn,D.f4,j,k,l)},
bCI(){var w=new B.S(Date.now(),0,!1)
return A.im[B.bH(w)-1]+" "+B.bR(w)+", "+B.bA(w)},
ew:function ew(d,e,f){this.a=d
this.b=e
this.c=f},
bA6(d){return new B.iS((A.o.aC(d,24)&255)/255,(A.o.aC(d,16)&255)/255,(A.o.aC(d,8)&255)/255,(d&255)/255)},
hWx(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.amM(A.cI.aL(A.d.gal(d.split(","))))
return w}catch(v){return null}},
hWB(d){var w=d.r
if(!d.cy)return w
return new B.M(B.a(w.split("\n"),x.s),new C.fml(),x.dv).aH(0,"\n")},
hWA(d){switch(d.a){case 2:return A.ny
case 1:case 5:return A.f2c
default:return A.TA}},
hWu(d){switch(d.a){case 2:return A.v2
case 1:case 5:return A.Vn
default:return A.aao}},
hWy(d,e){var w,v=null,u=d.ay,t=A.o.aC(u,24),s=A.o.aC(d.ch,24),r=(t&255)===0?v:C.bA6(u),q=(s&255)===0?v:C.bA6(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nv(q,p,A.kM)
w=new B.pD(t,t,t,t)}switch(d.ax.a){case 1:return B.lw(v,v,v,new B.kD(r,w,v,A.abE,v),v,v,v,v)
case 4:return u?new B.fS(v,v,v):B.x2(B.lw(v,v,q,v,p+0.4,v,v,v))
default:return B.lw(v,v,v,new B.kD(r,w,B.vu(4),A.hI,v),v,v,v,v)}},
hWw(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f4?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hWu(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hWB(d)
t=C.bA6(d.Q)
s=d.x.a>=700?A.el:A.vG
r=d.y===A.cF?A.y3:A.ak3
q=d.z
p=new B.D5(w,l,l,B.fc(u,l,l,l,B.h9(l,t,1===q.a?A.aPO:A.aPN,l,l,l,l,l,l,A.dt,l,l,v,r,s,l,!0,l,l,l,l),C.hWA(d.as)))
break
case 1:case 4:o=C.hWx(d.at)
n=i===D.lw&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.x2(B.fc(w,l,l,l,B.h9(l,A.rH,l,l,l,l,l,l,l,A.dt,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.HP(o,n?A.abA:A.VK,l,l)
break
case 3:w=new B.nv(A.Im,1,A.kM)
u=B.vu(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lw(A.v2,B.fc(t,l,l,l,B.h9(l,D.ee3,l,l,l,l,l,l,l,A.dt,l,l,11,l,A.el,l,!0,l,l,l,l),A.ny),l,new B.kD(E.aI_,new B.pD(w,w,w,w),u,A.hI,l),l,l,l,l)
break
case 2:p=C.hWy(d,e)
break
case 5:p=C.hWv(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hfb(-w,p)
w=i===D.cQ
if(w){m=A.o.aC(d.Q,24)&255
if(m<255)p=new B.aso(m/255,p)}if(w)return new F.w7(k,l,j,l,new B.S5(new B.kC(g,g,f,1/0),p))
if(i===D.l5){i=new B.nv(A.Im,1,A.kM)
i=B.lw(A.v2,p,l,new B.kD(A.pb,new B.pD(i,i,i,i),B.vu(4),A.hI,l),l,l,D.bx8,l)}else i=p
return new F.w7(k,l,j,l,new B.fS(g,f,i))},
hWz(d,e,f,g){var w,v=null,u=C.bA6(d.e),t=d.f
t=B.a([F.hdO(t!=null?B.lw(v,v,v,new B.kD(v,v,v,A.hI,new B.aWv(E.Vo,A.aai,B.a([u,C.bA6(t)],x.cR),v)),v,v,v,v):B.lw(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.M(w,new C.fmk(f,g),B.T(w).k("M<1,fg>")))
return F.crA(t)},
h2U(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$h2U=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a4c(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){p=t[q]
o=new B.Ws(A.wn,A.Ij,D.byf,null,null,null,!1,null)
o=new B.BO(o,new C.fHD(607,787,p,d))
o.MB(n,null)
r.push(o)}u=n.kc(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h2U,v)},
hWv(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.h1F(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gajy()
if(h==null)h=A.axz
j=B.tA(4279308564)
w=B.vu(18)
v=new B.nv(B.tA(4287531653),3,A.kM)
u=i.length===0?"My links":i
u=B.a([B.x2(B.fc(u,m,m,m,B.h9(m,A.pb,m,m,m,m,m,m,m,A.dt,m,m,12,m,A.el,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.x2(B.fc(A.a.i(l.c),m,m,m,D.f9p,m)))
u.push(new B.fS(m,8,m))
for(t=B.db(h,0,B.dI(8,"count",x.S),B.T(h).c),s=t.$ti,t=new B.bQ(t,t.gM(0),s.k("bQ<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tA(4280690220)
o=new B.a9h(8,8)
n=A.a.i(r.b)
u.push(new B.nM(D.brp,new C.awC(new C.ai9(q),B.lw(m,B.fc(n.length===0?A.a.i(r.c):n,m,m,m,D.fbJ,A.ny),m,new B.kD(p,m,new B.aiA(o,o,o,o),A.hI,m),m,m,D.bxy,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.x2(B.fc(k,m,m,m,D.faY,m))
u.push(new C.awC(C.hw8(k),t))}return B.lw(m,B.yO(u,A.M_,A.lu),m,new B.kD(j,new B.pD(v,v,v,v),w,A.hI,m),m,m,D.bsf,m)},
fml:function fml(){},
fmk:function fmk(d,e){this.a=d
this.b=e},
fHD:function fHD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agR(d){var w,v
for(w=0;w<32;++w){v=D.GZ[w]
if(v.a===d)return v}return null},
hhQ(d){var w,v,u=A.a.cK(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cI.aL(A.a.b5(d,u+1))
return w}catch(v){return null}},
cY(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hqB(d,e){return B.a6(d,!1).cm(B.e9(new C.fO1(e),!0,null,x.fB))},
hqA(d,e){return B.bS(A.K,null,new C.fO0(e),d,!0,!0,!0,null,!1,!1,x.fB)},
j1:function j1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ew:function Ew(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Nn:function Nn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bjm:function bjm(d,e,f){var _=this
_.d=d
_.e=$
_.bt$=e
_.a9$=f
_.c=_.a=null},
dUA:function dUA(d){this.a=d},
dUz:function dUz(d,e,f){this.a=d
this.b=e
this.c=f},
dUy:function dUy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
br1:function br1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eZ8:function eZ8(d,e){this.a=d
this.b=e},
beq:function beq(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aZU:function aZU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c8U:function c8U(){},
c8V:function c8V(d){this.a=d},
c8W:function c8W(d,e,f){this.a=d
this.b=e
this.c=f},
c8X:function c8X(d,e,f){this.a=d
this.b=e
this.c=f},
fO1:function fO1(d){this.a=d},
Ze:function Ze(d,e){this.c=d
this.a=e},
azD:function azD(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d8n:function d8n(d,e,f){this.a=d
this.b=e
this.c=f},
d8s:function d8s(d){this.a=d},
d8t:function d8t(d){this.a=d},
d8r:function d8r(d){this.a=d},
d8u:function d8u(d){this.a=d},
d8q:function d8q(d,e){this.a=d
this.b=e},
d8v:function d8v(d){this.a=d},
d8p:function d8p(d){this.a=d},
d8w:function d8w(d){this.a=d},
d8o:function d8o(d,e){this.a=d
this.b=e},
d8x:function d8x(d,e){this.a=d
this.b=e},
fO0:function fO0(d){this.a=d},
fO_:function fO_(d){this.a=d},
fNZ:function fNZ(d,e,f){this.a=d
this.b=e
this.c=f},
fNY:function fNY(d,e){this.a=d
this.b=e},
aLh:function aLh(){},
ic0(d){return B.bS(A.K,null,new C.fQn(),d,!0,!0,!0,null,!1,!1,x.N)},
fQn:function fQn(){},
Zz:function Zz(d){this.a=d},
bfU:function bfU(d){this.d=d
this.c=this.a=null},
dfa:function dfa(d){this.a=d},
dfb:function dfb(d,e){this.a=d
this.b=e},
dfc:function dfc(d){this.a=d},
hSY(d){var w,v=d.split("@")
if(v.length>1){w=B.c7(v[1],16)
if(w!=null)return B.b0(w)}return D.xv},
i6g(d){var w,v=A.d.gI(d.split("@"))
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
i6f(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gI(d.split("@")),p=C.hSY(d)
switch(q){case"shimmer":return B.nQ(A.aaK,g,new C.fEj(p,A.k.E(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.W,r,A.b1,A.r,B.a([g,B.e_(B.b3(r,r,r,new C.bfh(e,f,p,r),A.aw),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dW(B.ef(A.A,B.de(C.fUG(g,B.a51(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.v(w*60,v*26))
case"goldframe":return new B.an(A.W,r,A.b1,A.r,B.a([g,B.e_(B.b3(r,r,r,new C.beZ(e,p,r),A.aw),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.de(B.eJ(A.A,e*0.5,B.ef(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dp()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fE(e)
u.mN(Math.sin(e)*0.3)
return B.dW(B.fv(A.A,g,r,u,!0),new B.v(w*22,v*12))
case"rays":return new B.an(A.W,r,A.b1,A.r,B.a([B.e_(B.b3(r,r,r,new C.bnT(e,f,p,r),A.aw),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.W,r,A.b1,A.r,B.a([B.e_(B.b3(r,r,r,new C.b9T(e,f,p,r),A.aw),!0,r),g],x.p),r)
case"aurora":return new B.an(A.W,r,A.b1,A.r,B.a([B.e_(B.b3(r,r,r,new C.b9w(e,f,p,r),A.aw),!0,r),g],x.p),r)
case"velvet":return new B.an(A.W,r,A.b1,A.r,B.a([g,B.e_(B.b3(r,r,r,new C.buP(e,p,r),A.aw),!0,r)],x.p),r)
case"sparkle":return new B.an(A.W,r,A.b1,A.r,B.a([g,B.e_(B.b3(r,r,r,new C.brP(e,f,p,r),A.aw),!0,r)],x.p),r)
case"sheen":return new B.an(A.W,r,A.b1,A.r,B.a([g,B.e_(B.b3(r,r,r,new C.bqY(e,p,r),A.aw),!0,r)],x.p),r)
case"filigree":return new B.an(A.W,r,A.b1,A.r,B.a([g,B.e_(B.b3(r,r,r,new C.bej(e,p,r),A.aw),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.aa,A.f,B.a([B.bZ(0,B.e_(B.ef(A.A,B.c_(r,new B.o(r,r,r,r,r,new B.bT(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a5),A.bf),1.6+s*0.15,r,r),!0,r),0,0,0),B.eJ(A.A,s*0.06,B.ef(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fEj:function fEj(d,e){this.a=d
this.b=e},
bfh:function bfh(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
beZ:function beZ(d,e,f){this.b=d
this.c=e
this.a=f},
bnT:function bnT(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9T:function b9T(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9w:function b9w(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
buP:function buP(d,e,f){this.b=d
this.c=e
this.a=f},
brP:function brP(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bqY:function bqY(d,e,f){this.b=d
this.c=e
this.a=f},
bej:function bej(d,e,f){this.b=d
this.d=e
this.a=f},
d84:function d84(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
xz:function xz(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fEm(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.l5},
i6l(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aZ(j,new C.fEn())
s=A.d.gI(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.K)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gI(B.aQc(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
i6k(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a0(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.d6(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.d6(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.k.D(s,0.06,u)}else{d.w=A.k.D((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.k.D(r*(d.w*0.001)+0.028,0.06,u)},
agv(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$agv=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.T(a4).k("a_<1>")
e=B.C(new B.a_(a4,new C.fwM(),f),f.k("J.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bS(A.dH,null,new C.fwN(e),d,!0,!0,!1,A.lx,!1,!1,x.N),$async$agv)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gI(e).hH())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.h3w(d),$async$agv)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.L8(d,"Search states\u2026","",A.k7,"Choose state"),$async$agv)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.h2r(s)
if(p==null)p=A.d.gI(D.QY)
f=C.cB()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cB()
m=p.e
l=C.fEo(p.d)
k=x.u
j=B.a([C.er(A.bi,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bo,A.a6,"",1,C.cB(),l,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cn,D.lw,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.CJ(i,0.016,D.l6,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.CJ(0,0.058,D.eN,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.CJ(0,0.058,D.eN,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.Ky("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.Ky("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a6,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.h_j(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bzA("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a19("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a19("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a19("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a19("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bzA("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.CJ(m,0.082,D.bg,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cB()
k.push(C.er(A.bi,!1,i,A.aD,"marriage_field_utangulizi:"+A.k.aa(0.78,3),4280640491,9.5,A.bo,A.cx,"",0.074,g,null,"","",0,!1,"",0,D.bg,4280172719,2,y.O,0,0,"",D.cn,D.cQ,0.78,0.11,0.388))
A.d.v(k,C.h_j(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bzA("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hjO("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hjO("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a19("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a19("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bzz("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bzz("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bzA("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.Ky("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.Ky("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bzz("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bzz("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bzA("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a19("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bzz("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a19("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.h_j(0.22,0.83,0.56,4291404327,i),h)
h.push(C.Ky("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.Ky("Nakala ya Hati",A.L,4291404327,9,A.a6,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.BI(null,null,null,null,D.of,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rw(m,null,0,0,j,n,D.qk,"","","Hati ya Ndoa",D.de)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agv,v)},
fEn:function fEn(){},
fwM:function fwM(){},
fwN:function fwN(d){this.a=d},
fwK:function fwK(d){this.a=d},
fwL:function fwL(d){this.a=d},
hW_(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hVZ(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mP
case"lineThrough":return A.zJ
default:return A.aD}},
er(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eM(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hlT(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.QI[w]
if(v.b===u)return v}return D.de},
hSm(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cSX[w]
if(v.b===u)return v}return D.cQ},
hYO(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dhL[w]
if(v.b===u)return v}return D.bg},
rw(d,e,f,g,h,i,j,k,l,m,n){return new C.lH(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hcz(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hUm(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.hlT(d.h(0,"transition"))
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
else{n=J.da(n,x.f)
n=B.cD(n,new C.cej(),n.$ti.k("J.E"),x.F)
n=B.C(n,B.a3(n).k("J.E"))}return C.rw(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hUm(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.apm[w]
if(v.b===u)return v}return D.mJ},
BI(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.S(Date.now(),0,!1):a4
return new C.i5(p,t,a1,h,i,w,a0==null?B.a([C.rw(4294967295,null,0,0,null,C.cB(),D.qk,"","","",D.de)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
VT(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hQz(a6.h(0,"aspectRatio"))
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
if(J.A(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.kx(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kx(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aJ(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aJ(a6.h(0,"signatureInkColor"))
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
else{f=J.b6(f,new C.ce6(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.ce7(),x.N)
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
else{g=J.da(g,x.f)
g=B.cD(g,new C.ce8(),g.$ti.k("J.E"),x.bt)
g=B.C(g,B.a3(g).k("J.E"))}return C.BI(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rw(4294967295,a3,0,0,a3,C.cB(),D.qk,"","","",D.de)],x.g):g,v,p,o,s)},
kx(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hQz(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.diD[w]
if(v.b===u)return v}return D.CR},
cB(){var w=Date.now(),v=$.j2
$.j2=v+1
return""+1000*w+"_"+v},
ceA(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.CS){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cB()
v=C.er(A.L,!1,f.d.l(),A.aD,"",n,40,A.bo,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bg,m,2,o,0,0,"",D.cn,D.cQ,0.84,0.08,0.3)
u=C.cB()
A.d.v(w,B.a([v,C.er(A.L,!1,f.e.l(),A.aD,"",n,20,A.bo,A.cx,"",0.12,u,p,"","",0,!1,"",0,D.bg,m,2,"Click to add subtitle",0,0,"",D.cn,D.cQ,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cB()
v=C.er(A.bi,!1,f.d.l(),A.aD,"",n,32,A.bo,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bg,m,2,o,0,0,"",D.cn,D.cQ,0.88,0.06,0.06)
u=C.cB()
A.d.v(w,B.a([v,C.er(A.bi,!0,f.e.l(),A.aD,"",n,20,A.bo,A.cx,"",0.68,u,p,"","",0,!1,"",0,D.bg,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cn,D.cQ,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cB()
v=C.er(A.bi,!1,f.d.l(),A.aD,"",n,30,A.bo,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bg,m,2,"Two Column Slide",0,0,"",D.cn,D.cQ,0.88,0.06,0.06)
u=C.cB()
t=f.e
u=C.er(A.bi,!0,t.l(),A.aD,"",n,18,A.bo,A.a6,"",0.7,u,p,"","",0,!1,"",0,D.bg,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cn,D.cQ,0.42,0.06,0.22)
s=C.cB()
A.d.v(w,B.a([v,u,C.er(A.bi,!0,t.l(),A.aD,"",n,18,A.bo,A.a6,"",0.7,s,p,"","",0,!1,"",0,D.bg,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cn,D.cQ,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.L(d.z,C.er(A.L,!1,4294967295,A.aD,"",n,42,A.bo,A.u,"",0.2,C.cB(),p,"","",0,!1,"",0,D.bg,m,2,"Section Header",0,0,"",D.cn,D.cQ,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cB()
v=C.er(A.bi,!1,f.d.l(),A.aD,"",n,30,A.bo,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bg,m,2,"Compare",0,0,"",D.cn,D.cQ,0.88,0.06,0.06)
u=C.cB()
t=f.c
u=C.er(A.bi,!1,l,A.aD,"",t.j(0.12).l(),24,A.bo,A.a6,"",0.68,u,p,"","",0,!1,"",0,D.bg,t.l(),2,"",0,0,"",D.cn,D.f4,0.42,0.06,0.22)
s=C.cB()
r=f.e
s=C.er(A.bi,!1,r.l(),A.aD,"",n,20,A.bo,A.P,"",0.6,s,p,"","",0,!1,"",0,D.bg,m,2,"Option A",0,0,"",D.cn,D.cQ,0.38,0.08,0.26)
q=C.cB()
t=C.er(A.bi,!1,l,A.aD,"",t.j(0.06).l(),24,A.bo,A.a6,"",0.68,q,p,"","",0,!1,"",0,D.bg,t.j(0.5).l(),2,"",0,0,"",D.cn,D.f4,0.42,0.52,0.22)
q=C.cB()
A.d.v(w,B.a([v,u,s,t,C.er(A.bi,!1,r.l(),A.aD,"",n,20,A.bo,A.P,"",0.6,q,p,"","",0,!1,"",0,D.bg,m,2,"Option B",0,0,"",D.cn,D.cQ,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cB()
v=C.er(A.L,!1,f.d.l(),A.aD,"",n,36,A.bo,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bg,m,2,"TERM / QUESTION",0,0,"",D.cn,D.cQ,0.8,0.1,0.12)
u=C.cB()
A.d.v(w,B.a([v,C.er(A.L,!1,f.e.l(),A.aD,"",n,22,A.bo,A.cx,"",0.35,u,p,"","",0,!1,"",0,D.bg,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cn,D.cQ,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cB()
v=C.er(A.bi,!1,f.d.l(),A.aD,"",n,28,A.bo,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bg,m,2,"Quiz Question",0,0,"",D.cn,D.cQ,0.88,0.06,0.06)
u=C.cB()
A.d.v(w,B.a([v,C.er(A.bi,!1,f.e.l(),A.aD,"",n,20,A.bo,A.a6,"",0.62,u,p,"","",0,!1,"",0,D.bg,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cn,D.cQ,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cB()
v=C.er(A.bi,!1,f.d.l(),A.aD,"",n,26,A.bo,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bg,m,2,"Worksheet / Assignment",0,0,"",D.cn,D.cQ,0.88,0.06,0.04)
u=C.cB()
A.d.v(w,B.a([v,C.er(A.bi,!1,f.e.l(),A.aD,"",n,18,A.bo,A.a6,"",0.78,u,p,"","",0,!1,"",0,D.bg,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cn,D.cQ,0.88,0.06,0.16)],x.u))
break}},
hIb(d){return A.d.dM(D.a2O,new C.ceB(d),new C.ceC())},
hI8(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.S.aK(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aV(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gR(t)
if(!q.b(u))continue
try{J.ce(v,C.VT(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fWN(d,e){var w,v,u,t=B.U(x.N,x.I),s=new C.cew(t)
for(w=J.aV(d);w.C();)s.$1(w.gR(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.K)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.C(new B.bc(t,w),w.k("J.E"))
A.d.aZ(u,new C.cev())
return u},
hcC(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cer()
if(u!==w)return u>=w?d:e
return v.$1(d).cc(v.$1(e))?d:e},
ar6(d){return C.hI6(d)},
hI6(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$ar6=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.ceu()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a2l(m),$async$ar6)
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
return B.b(B.ay(),$async$ar6)
case 12:q=f
k=A.a.i(d.toLowerCase())
r=l.$1(B.aU(J.q(q.a,"ngmy_slides_decks_"+k)))
t=2
w=11
break
case 9:t=8
h=s.pop()
w=11
break
case 8:w=2
break
case 11:o=l.$1($.hcB.h(0,m))
n=C.fWN(C.fWN(j,r),o)
if(n.length===0){u=C.hcC(C.hcC(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ar6,v)},
ceq(d){return C.hI5(d)},
hI5(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$ceq=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ay(),$async$ceq)
case 7:r=f
q=r.tc("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.kG(q,B.T(q).c)
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
return B.i($async$ceq,v)},
b14(d,e){return C.hI7(d,e)},
hI7(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b14=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$b14)
case 6:s=g
q=s.tc("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.L(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.Lg(r,J.ad(r)-500):r
w=7
return B.b(s.aq("StringList","ngmy_slides_deleted_"+p,o),$async$b14)
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
return B.i($async$b14,v)},
VU(d,e){return C.hI9(d,e)},
hI9(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$VU=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hcA.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.ar6(a3),$async$VU)
case 5:p=a6
case 4:w=6
return B.b(C.ceq(a3),$async$VU)
case 6:o=a6
n=B.U(x.N,x.I)
for(m=J.aV(p);m.C();){l=m.gR(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.K)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbq())k=f===g.gbq()&&k.b>g.gcC()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("bc<2>")
l=m.k("a_<J.E>")
e=B.C(new B.a_(new B.bc(n,m),new C.cex(o),l),l.k("J.E"))
A.d.aZ(e,new C.cey())
$.hcA.n(0,a0,e)
n=B.T(e).k("M<1,a5<m,@>>")
n=B.C(new B.M(e,new C.cez(),n),n.k("ak.E"))
r=A.S.ao(n,null)
$.hcB.n(0,a0,r)
t=8
w=11
return B.b(B.ahi(a0,r),$async$VU)
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
return B.b(B.ay(),$async$VU)
case 16:q=a6
w=17
return B.b(q.aq("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$VU)
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
return B.i($async$VU,v)},
IJ:function IJ(d,e){this.a=d
this.b=e},
ar4:function ar4(d,e){this.a=d
this.b=e},
uJ:function uJ(d,e){this.a=d
this.b=e},
mx:function mx(d,e){this.a=d
this.b=e},
hF:function hF(d,e){this.a=d
this.b=e},
eM:function eM(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
lH:function lH(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cek:function cek(){},
cel:function cel(){},
cej:function cej(){},
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
ce9:function ce9(){},
cea:function cea(){},
ce6:function ce6(){},
ce7:function ce7(){},
ce8:function ce8(){},
jH:function jH(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ceB:function ceB(d){this.a=d},
ceC:function ceC(){},
cew:function cew(d){this.a=d},
cev:function cev(){},
cer:function cer(){},
ces:function ces(){},
cet:function cet(){},
ceu:function ceu(){},
cex:function cex(d){this.a=d},
cey:function cey(){},
cez:function cez(){},
i6w(d,e){var w=x.N,v=B.U(w,x.F)
w=new C.fEW(e,v,d,B.aX(w))
w.$1(new C.fES())
w.$1(new C.fET())
w.$1(new C.fEU())
w.$1(new C.fEV())
return v},
fEW:function fEW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fES:function fES(){},
fET:function fET(){},
fEU:function fEU(){},
fEV:function fEV(){},
b11:function b11(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cef:function cef(d){this.a=d},
cee:function cee(){},
ceg:function ceg(){},
ceh:function ceh(d,e){this.a=d
this.b=e},
cei:function cei(d){this.a=d},
aof:function aof(d,e){this.c=d
this.a=e},
bj6:function bj6(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
dGP:function dGP(){},
aL2:function aL2(){},
cen(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cen=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.J(x.q).f.S(D.f_o)
u=!1
w=1
break}u=B.kW(!1,d,t,!1,null,A.a5t,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cen,v)},
hI3(d){var w=A.d.bg(D.H7,new C.ceo(d))
if(w<0)return!0
return w>=4},
hI4(d){var w=A.d.bg($.bDZ(),new C.cep(d))
if(w<0)return!0
return w>=5},
ceo:function ceo(d){this.a=d},
cep:function cep(d){this.a=d},
i8b(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.yC()
$.qi().pU(t,new C.fHK(s),!0)
u=B.a([B.DQ(v,A.qo,t)],x.p)
if(e.length!==0){w=B.n(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.f9T,v,v,v),A.f,v,v,new B.o(A.aW,v,v,w,v,v,A.n),v,v,v,v,A.nj,v,v,v),v,v,4,v,4,v))}return new B.an(A.W,v,A.b1,A.r,u,v)},
fHK:function fHK(d){this.a=d},
i7N(){return C.h2N()},
i4K(){return C.bBW()},
i6N(){return C.h2E()},
aPj(d,e,f){var w=0,v=B.j(x.H),u
var $async$aPj=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fGQ(d,f),$async$aPj)
case 5:w=1
break
case 4:if(d.e!=null)d.J(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aPj,v)},
fGQ(d,e){var w=0,v=B.j(x.H),u
var $async$fGQ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bA7
if(u==null)u=e+".pdf"
w=2
return B.b(B.bS(A.K,null,new C.fGR(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fGQ)
case 2:return B.h(null,v)}})
return B.i($async$fGQ,v)},
fGR:function fGR(d,e){this.a=d
this.b=e},
adk:function adk(d,e,f){this.c=d
this.d=e
this.a=f},
erV:function erV(d,e){this.a=d
this.b=e},
erW:function erW(d,e){this.a=d
this.b=e},
erX:function erX(d,e){this.a=d
this.b=e},
erY:function erY(d){this.a=d},
adC:function adC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b10(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b1_(g,m,f,d,e,h,l,k,j,o,i,null)},
hoR(d){return B.cq(new C.fER(d))},
h2P(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
i7V(d){if(d===D.cn)return"None"
return C.h2P(d)},
bAD(d,e,f,g){return C.hYV(d,e,f,g)},
hYV(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bAD=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a6(d,!0)
if($.h_C&&t.py())t.eF()
$.h_C=!0
s.a=null
w=3
return B.b(B.hY(A.bk,!0,"Animation preview",d,new C.foU(s,e,g,f),null,A.eH,!0,x.H),$async$bAD)
case 3:s=s.a
if(s!=null)s.a7(0)
$.h_C=!1
case 1:return B.h(u,v)}})
return B.i($async$bAD,v)},
fRb(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fRb=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bW,x.w).w.a.a*0.88,280,440)
s=f===D.cn
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.h2P(f)+" Slide transition preview"
s=s?Ae.Fp:A.vs
w=3
return B.b(C.bAD(d,s,new B.a7(t,t*0.56,B.bw(B.n(14),new C.aIE(f,null),A.aq),null),r),$async$fRb)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fRb,v)},
ho8(d,e,f){var w,v,u=null,t=A.cu.aA(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.de(f,t)
case 2:case 17:return B.dW(B.de(f,t),new B.v((1-t)*48,0))
case 3:return B.dW(B.de(f,t),new B.v(-(1-t)*48,0))
case 4:case 21:return B.dW(B.de(f,t),new B.v(0,(1-t)*36))
case 5:return B.dW(B.de(f,t),new B.v(0,-(1-t)*36))
case 6:case 16:return B.ef(A.A,B.de(f,t),0.5+t*0.5,u,u)
case 7:return B.ef(A.A,B.de(f,t),1.4-t*0.4,u,u)
case 8:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fE((1-t)*1.2)
return B.fv(A.A,B.de(f,t),u,w,!0)
case 9:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.k9((1-t)*1.2)
return B.fv(A.A,B.de(f,t),u,w,!0)
case 10:case 19:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.mN((1-t)*0.8)
v=0.6+t*0.4
w.jP(v,v,v,1)
return B.fv(A.A,B.de(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dW(B.de(f,t),new B.v((1-t)*24,0))}},
bDu(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bDu=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bW,x.w).w.a.a*0.88,300,440)
s=f===D.cn
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.h2P(f)+" Element animation preview"
s=s?Ae.Fp:A.vs
w=3
return B.b(C.bAD(d,s,new B.a7(t,t*0.62,B.bw(B.n(14),new C.azn(f,null),A.aq),null),r),$async$bDu)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bDu,v)},
i7U(d){var w,v,u,t,s=$.afZ.W(0,d)
if(s!=null){$.afZ.n(0,d,s)
return s}w=A.cI.aL(A.a.b5(d,A.a.cK(d,",")+1))
$.afZ.n(0,d,w)
v=$.h0p=$.h0p+w.length
u=B.a3($.afZ).k("cu<1>")
for(;;){if(!(v>41943040&&$.afZ.a>1))break
t=new B.cu($.afZ,u).gae(0)
if(!t.C())B.b8(B.ft())
v-=$.afZ.W(0,t.gR(0)).length
$.h0p=v}return w},
i7B(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).l0(0,d),j=B.C(k,B.a3(k).k("J.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.K)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ap(d,r,o)
m=f.$1(e)
v.push(new B.es(n,l,l,A.cO,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.SA(s,A.u))
v.push(new B.es(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.SA(t,A.u))
v.push(new B.es(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.SA(u,A.cx))
v.push(new B.es(n,l,l,A.cO,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b5(d,r)
v.push(B.d3(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a2k(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.k4(e))
return m
case"rounded":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
w=e.gdB()*0.18
m.F(new B.iN(B.bx(e,new B.aT(w,w))))
return m
case"triangle":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.b5(e.gbQ().a,e.b))
w=e.d
m.F(new B.ap(e.c,w))
m.F(new B.ap(e.a,w))
m.F(new B.bE())
return m
case"hexagon":w=$.W()
m=B.a([],m)
v=new B.aO(w.r,A.ao,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.b5(p,o)
m.push(p)
o=v.f
if(o!=null)p.bC(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.ap(p,o)
m.push(p)
o=v.f
if(o!=null)p.bC(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}}v.F(new B.bE())
return v
case"diamond":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.b5(e.gbQ().a,e.b))
m.F(new B.ap(e.c,e.gbQ().b))
m.F(new B.ap(e.gbQ().a,e.d))
m.F(new B.ap(e.a,e.gbQ().b))
m.F(new B.bE())
return m
case"arch":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
w=e.a
u=e.d
m.F(new B.b5(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.F(new B.ap(w,p))
m.bac(new B.v(t,p),new B.aT(s,s))
m.F(new B.ap(t,u))
m.F(new B.bE())
return m
default:m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.o4(e))
return m}},
fCq(d,e,f){return B.cq(new C.fCr(D.eSL.t(0,d),d,f,e))},
b1_:function b1_(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
ced:function ced(d){this.a=d},
cec:function cec(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ceb:function ceb(){},
b0X:function b0X(d,e){this.b=d
this.a=e},
fER:function fER(d){this.a=d},
fEQ:function fEQ(d,e){this.a=d
this.b=e},
foU:function foU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
foS:function foS(d){this.a=d},
foT:function foT(d,e){this.a=d
this.b=e},
aIE:function aIE(d,e){this.c=d
this.a=e},
bul:function bul(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
f6G:function f6G(d,e,f){this.a=d
this.b=e
this.c=f},
aJg:function aJg(d,e){this.b=d
this.a=e},
UW:function UW(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjj:function bjj(d,e){var _=this
_.d=$
_.bt$=d
_.a9$=e
_.c=_.a=null},
dSN:function dSN(d){this.a=d},
dSM:function dSM(d){this.a=d},
dSL:function dSL(d){this.a=d},
II:function II(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ce5:function ce5(d){this.a=d},
ce4:function ce4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azn:function azn(d,e){this.c=d
this.a=e},
bdN:function bdN(){this.d=0
this.c=this.a=null},
d5j:function d5j(d){this.a=d},
d5i:function d5i(d){this.a=d},
a7F:function a7F(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjY:function bjY(d,e){var _=this
_.d=null
_.bt$=d
_.a9$=e
_.c=_.a=null},
efa:function efa(d,e,f){this.a=d
this.b=e
this.c=f},
aZX:function aZX(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
beX:function beX(d,e,f){this.b=d
this.c=e
this.a=f},
bpV:function bpV(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eWM:function eWM(){},
fCr:function fCr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqV:function bqV(d,e,f){this.b=d
this.c=e
this.a=f},
aLg:function aLg(){},
aLM:function aLM(){},
aN8:function aN8(){},
fFR(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fFR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xb.c7().M_(D.dfP,A.tU,!0),$async$fFR)
case 3:r=e
if(r==null||J.cn(r.a)){u=null
w=1
break}t=J.fr(r.a)
s=t.c
if(s==null)throw B.V("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.V("That file is too big. Use a file under 8 MB.")
u=C.i7v(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fFR,v)},
i7v(d,e){var w,v=d.toLowerCase()
if(A.a.cb(v,".pdf"))return new C.a7Y(d,new B.a_X(A.cR.gcw().aL(e),"application/pdf"),"")
if(A.a.cb(v,".docx")){w=C.i_y(e)
if(A.a.i(w).length===0)throw B.V("No readable words were found in that Word file.")
return new C.a7Y(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.cg.KM(0,e,!0)
if(A.a.i(w).length===0)throw B.V("That file is empty.")
return new C.a7Y(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
i_y(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cxk().cKn(B.rg(d,A.i0,o,o),o,o,!1).cM6(0,"word/document.xml")
if(n==null)return""
w=n.cU6()
v=A.cg.KM(0,w==null?$.hr6():w,!0).split("</w:p>")
u=new B.ff("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).l0(0,r)
p=A.a.i(B.cD(q,new C.frM(),B.a3(q).k("J.E"),t).h2(0))
if(p.length!==0){q=B.aK(p,"&lt;","<")
q=B.aK(q,"&gt;",">")
q=B.aK(q,"&quot;",'"')
q=B.aK(q,"&apos;","'")
q=B.aK(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a7Y:function a7Y(d,e,f){this.a=d
this.b=e
this.c=f},
frM:function frM(){},
hIa(d,e,f,g,h,i,j,k,l){return new C.NP(l,e,d,g,f,i,h,j,k,null)},
NP:function NP(d,e,f,g,h,i,j,k,l,m){var _=this
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
aEd:function aEd(d,e,f,g,h,i,j,k,l){var _=this
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
_.bt$=k
_.a9$=l
_.c=_.a=null},
ey8:function ey8(d){this.a=d},
ey6:function ey6(){},
ey7:function ey7(d){this.a=d},
euw:function euw(){},
eux:function eux(){},
euy:function euy(d,e){this.a=d
this.b=e},
ew6:function ew6(d){this.a=d},
evV:function evV(){},
evW:function evW(){},
etU:function etU(){},
exe:function exe(d){this.a=d},
ey4:function ey4(d,e){this.a=d
this.b=e},
ew4:function ew4(d,e){this.a=d
this.b=e},
exS:function exS(d){this.a=d},
exT:function exT(){},
exU:function exU(){},
exV:function exV(d){this.a=d},
exW:function exW(){},
eti:function eti(d){this.a=d},
ey5:function ey5(){},
evd:function evd(d,e){this.a=d
this.b=e},
etg:function etg(d){this.a=d},
eth:function eth(d){this.a=d},
evA:function evA(d){this.a=d},
evB:function evB(d,e,f){this.a=d
this.b=e
this.c=f},
evC:function evC(d){this.a=d},
evc:function evc(){},
evb:function evb(d){this.a=d},
ev9:function ev9(){},
ev8:function ev8(d){this.a=d},
eva:function eva(){},
eus:function eus(d){this.a=d},
eut:function eut(d){this.a=d},
evj:function evj(d){this.a=d},
eve:function eve(d){this.a=d},
evf:function evf(d){this.a=d},
evg:function evg(d){this.a=d},
evh:function evh(d){this.a=d},
evi:function evi(d){this.a=d},
evk:function evk(d,e){this.a=d
this.b=e},
etk:function etk(){},
etl:function etl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
evv:function evv(){},
evw:function evw(d,e){this.a=d
this.b=e},
evt:function evt(d,e,f){this.a=d
this.b=e
this.c=f},
evu:function evu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
evn:function evn(d,e,f){this.a=d
this.b=e
this.c=f},
evo:function evo(d,e,f){this.a=d
this.b=e
this.c=f},
evp:function evp(d){this.a=d},
evq:function evq(d,e){this.a=d
this.b=e},
evr:function evr(d,e){this.a=d
this.b=e},
evs:function evs(d,e){this.a=d
this.b=e},
evm:function evm(d,e){this.a=d
this.b=e},
evy:function evy(d){this.a=d},
evz:function evz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
evx:function evx(d){this.a=d},
evQ:function evQ(){},
evR:function evR(){},
evS:function evS(){},
evT:function evT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
evN:function evN(d){this.a=d},
evP:function evP(){},
evO:function evO(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
evL:function evL(d,e,f){this.a=d
this.b=e
this.c=f},
evM:function evM(d,e){this.a=d
this.b=e},
evU:function evU(){},
evl:function evl(d,e){this.a=d
this.b=e},
etB:function etB(){},
etC:function etC(d,e,f){this.a=d
this.b=e
this.c=f},
etD:function etD(d){this.a=d},
etE:function etE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
etA:function etA(d){this.a=d},
ew_:function ew_(d){this.a=d},
evZ:function evZ(d,e){this.a=d
this.b=e},
evY:function evY(d,e){this.a=d
this.b=e},
evX:function evX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ew0:function ew0(d,e){this.a=d
this.b=e},
esf:function esf(d,e){this.a=d
this.b=e},
etz:function etz(d,e){this.a=d
this.b=e},
etx:function etx(d){this.a=d},
ew8:function ew8(d,e,f){this.a=d
this.b=e
this.c=f},
ett:function ett(d,e){this.a=d
this.b=e},
ets:function ets(d){this.a=d},
ew7:function ew7(d,e,f){this.a=d
this.b=e
this.c=f},
etj:function etj(d){this.a=d},
etV:function etV(){},
exQ:function exQ(d,e){this.a=d
this.b=e},
exR:function exR(d,e,f){this.a=d
this.b=e
this.c=f},
exf:function exf(d,e,f){this.a=d
this.b=e
this.c=f},
esg:function esg(d){this.a=d},
esd:function esd(d,e){this.a=d
this.b=e},
es3:function es3(d,e){this.a=d
this.b=e},
es0:function es0(d){this.a=d},
es_:function es_(d,e){this.a=d
this.b=e},
es1:function es1(d,e){this.a=d
this.b=e},
etv:function etv(d){this.a=d},
etw:function etw(d,e){this.a=d
this.b=e},
etu:function etu(d){this.a=d},
esI:function esI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
esJ:function esJ(d,e){this.a=d
this.b=e},
esN:function esN(d,e){this.a=d
this.b=e},
esO:function esO(d){this.a=d},
esL:function esL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
esM:function esM(d){this.a=d},
esK:function esK(){},
esH:function esH(d,e,f){this.a=d
this.b=e
this.c=f},
evK:function evK(d,e){this.a=d
this.b=e},
exZ:function exZ(d){this.a=d},
ey_:function ey_(d,e){this.a=d
this.b=e},
ey0:function ey0(d){this.a=d},
ey1:function ey1(d,e,f){this.a=d
this.b=e
this.c=f},
exY:function exY(d){this.a=d},
exv:function exv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
exu:function exu(d,e,f){this.a=d
this.b=e
this.c=f},
ext:function ext(){},
exs:function exs(d,e,f){this.a=d
this.b=e
this.c=f},
exr:function exr(d,e){this.a=d
this.b=e},
exo:function exo(d,e,f){this.a=d
this.b=e
this.c=f},
exm:function exm(d){this.a=d},
exn:function exn(d){this.a=d},
exq:function exq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
exp:function exp(d){this.a=d},
euo:function euo(d,e){this.a=d
this.b=e},
eun:function eun(d,e){this.a=d
this.b=e},
exg:function exg(){},
exP:function exP(d,e){this.a=d
this.b=e},
exN:function exN(d){this.a=d},
exO:function exO(d){this.a=d},
es8:function es8(d,e){this.a=d
this.b=e},
es6:function es6(d){this.a=d},
es7:function es7(d){this.a=d},
es9:function es9(d,e){this.a=d
this.b=e},
esa:function esa(d,e,f){this.a=d
this.b=e
this.c=f},
ese:function ese(d,e){this.a=d
this.b=e},
es5:function es5(d,e,f){this.a=d
this.b=e
this.c=f},
es4:function es4(d){this.a=d},
ew5:function ew5(d,e,f){this.a=d
this.b=e
this.c=f},
exX:function exX(d,e,f){this.a=d
this.b=e
this.c=f},
eur:function eur(d,e,f){this.a=d
this.b=e
this.c=f},
euq:function euq(){},
esR:function esR(d,e,f){this.a=d
this.b=e
this.c=f},
esS:function esS(d){this.a=d},
es2:function es2(d,e){this.a=d
this.b=e},
etT:function etT(d,e){this.a=d
this.b=e},
esb:function esb(d,e){this.a=d
this.b=e},
esk:function esk(d){this.a=d},
esl:function esl(d,e){this.a=d
this.b=e},
esm:function esm(d,e){this.a=d
this.b=e},
esj:function esj(d){this.a=d},
esx:function esx(d,e){this.a=d
this.b=e},
esi:function esi(d){this.a=d},
esA:function esA(d){this.a=d},
esB:function esB(d){this.a=d},
esC:function esC(d){this.a=d},
esD:function esD(d){this.a=d},
esE:function esE(d){this.a=d},
esF:function esF(){},
esG:function esG(){},
esn:function esn(d){this.a=d},
eso:function eso(d){this.a=d},
esp:function esp(d){this.a=d},
esq:function esq(d){this.a=d},
esr:function esr(d){this.a=d},
ess:function ess(d){this.a=d},
est:function est(d){this.a=d},
esu:function esu(d){this.a=d},
esv:function esv(d){this.a=d},
esw:function esw(d){this.a=d},
esy:function esy(d){this.a=d},
esz:function esz(d,e){this.a=d
this.b=e},
etS:function etS(d,e,f){this.a=d
this.b=e
this.c=f},
etR:function etR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
etQ:function etQ(d,e,f){this.a=d
this.b=e
this.c=f},
etP:function etP(d,e){this.a=d
this.b=e},
esc:function esc(d,e){this.a=d
this.b=e},
esV:function esV(d){this.a=d},
esU:function esU(d){this.a=d},
esT:function esT(d,e){this.a=d
this.b=e},
esW:function esW(d){this.a=d},
esX:function esX(d){this.a=d},
esY:function esY(d,e){this.a=d
this.b=e},
ety:function ety(d){this.a=d},
evJ:function evJ(d,e){this.a=d
this.b=e},
evI:function evI(d,e){this.a=d
this.b=e},
evH:function evH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
evF:function evF(d){this.a=d},
evG:function evG(d,e){this.a=d
this.b=e},
evD:function evD(){},
evE:function evE(){},
exh:function exh(){},
exi:function exi(d,e){this.a=d
this.b=e},
exj:function exj(){},
exk:function exk(d){this.a=d},
exl:function exl(d,e){this.a=d
this.b=e},
esh:function esh(d,e){this.a=d
this.b=e},
etm:function etm(){},
etn:function etn(){},
eto:function eto(){},
etr:function etr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
etq:function etq(d,e){this.a=d
this.b=e},
etp:function etp(d,e,f){this.a=d
this.b=e
this.c=f},
euS:function euS(d){this.a=d},
euR:function euR(){},
euT:function euT(d,e){this.a=d
this.b=e},
euU:function euU(d,e){this.a=d
this.b=e},
euQ:function euQ(d){this.a=d},
euV:function euV(d,e){this.a=d
this.b=e},
euP:function euP(d){this.a=d},
euW:function euW(d,e){this.a=d
this.b=e},
euO:function euO(d){this.a=d},
euX:function euX(d,e){this.a=d
this.b=e},
euN:function euN(d){this.a=d},
euY:function euY(d,e){this.a=d
this.b=e},
euM:function euM(d,e){this.a=d
this.b=e},
euZ:function euZ(d,e){this.a=d
this.b=e},
euL:function euL(d){this.a=d},
ev_:function ev_(d,e){this.a=d
this.b=e},
euK:function euK(d){this.a=d},
euD:function euD(d,e){this.a=d
this.b=e},
euE:function euE(d){this.a=d},
euF:function euF(d){this.a=d},
euC:function euC(d){this.a=d},
euG:function euG(d,e){this.a=d
this.b=e},
euB:function euB(d){this.a=d},
euH:function euH(d,e){this.a=d
this.b=e},
euA:function euA(d){this.a=d},
euI:function euI(d,e){this.a=d
this.b=e},
euz:function euz(d){this.a=d},
euJ:function euJ(d){this.a=d},
etL:function etL(d){this.a=d},
etM:function etM(d){this.a=d},
etO:function etO(d){this.a=d},
etG:function etG(d){this.a=d},
etF:function etF(d,e){this.a=d
this.b=e},
etH:function etH(d,e){this.a=d
this.b=e},
etI:function etI(d){this.a=d},
etJ:function etJ(d){this.a=d},
etK:function etK(d,e){this.a=d
this.b=e},
etN:function etN(d){this.a=d},
ey2:function ey2(d){this.a=d},
ey3:function ey3(d){this.a=d},
ev2:function ev2(d,e){this.a=d
this.b=e},
ev1:function ev1(d,e){this.a=d
this.b=e},
ev0:function ev0(d,e){this.a=d
this.b=e},
ev3:function ev3(d){this.a=d},
ev4:function ev4(d){this.a=d},
ewr:function ewr(d,e){this.a=d
this.b=e},
ews:function ews(d){this.a=d},
ewt:function ewt(d){this.a=d},
ewE:function ewE(d){this.a=d},
ewP:function ewP(d){this.a=d},
ex_:function ex_(d){this.a=d},
ex6:function ex6(d){this.a=d},
ex7:function ex7(d){this.a=d},
ex8:function ex8(d){this.a=d},
ex9:function ex9(d){this.a=d},
exa:function exa(d,e){this.a=d
this.b=e},
ewu:function ewu(d){this.a=d},
ewv:function ewv(d){this.a=d},
eww:function eww(d){this.a=d},
ewx:function ewx(d){this.a=d},
ewy:function ewy(d){this.a=d},
ewz:function ewz(d){this.a=d},
ewA:function ewA(d){this.a=d},
ewB:function ewB(d){this.a=d},
ewC:function ewC(d){this.a=d},
ewD:function ewD(d){this.a=d},
ewF:function ewF(d){this.a=d},
ewG:function ewG(d){this.a=d},
ewH:function ewH(d){this.a=d},
ewI:function ewI(d){this.a=d},
ewJ:function ewJ(d){this.a=d},
ewK:function ewK(d){this.a=d},
ewL:function ewL(d){this.a=d},
ewM:function ewM(d){this.a=d},
ewN:function ewN(d){this.a=d},
ewh:function ewh(d){this.a=d},
ewO:function ewO(d){this.a=d},
ewp:function ewp(d){this.a=d},
ewQ:function ewQ(d){this.a=d},
ewo:function ewo(d,e){this.a=d
this.b=e},
ewR:function ewR(d,e){this.a=d
this.b=e},
ewS:function ewS(d,e){this.a=d
this.b=e},
ewn:function ewn(d,e,f){this.a=d
this.b=e
this.c=f},
ewd:function ewd(d,e){this.a=d
this.b=e},
ewq:function ewq(d){this.a=d},
exb:function exb(d,e){this.a=d
this.b=e},
exd:function exd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
exc:function exc(d,e){this.a=d
this.b=e},
ewT:function ewT(d,e,f){this.a=d
this.b=e
this.c=f},
ewm:function ewm(d,e,f){this.a=d
this.b=e
this.c=f},
ewc:function ewc(d,e,f){this.a=d
this.b=e
this.c=f},
ewa:function ewa(d,e){this.a=d
this.b=e},
ewU:function ewU(d,e){this.a=d
this.b=e},
ewl:function ewl(d,e){this.a=d
this.b=e},
ewb:function ewb(d,e){this.a=d
this.b=e},
ew9:function ew9(d,e){this.a=d
this.b=e},
ewV:function ewV(d){this.a=d},
ewk:function ewk(d){this.a=d},
ewW:function ewW(d){this.a=d},
ewX:function ewX(d){this.a=d},
ewY:function ewY(d){this.a=d},
ewZ:function ewZ(d){this.a=d},
ewj:function ewj(d){this.a=d},
ex0:function ex0(d){this.a=d},
ex1:function ex1(d){this.a=d},
ex2:function ex2(d,e){this.a=d
this.b=e},
ewi:function ewi(d){this.a=d},
ex3:function ex3(d,e){this.a=d
this.b=e},
ewg:function ewg(d){this.a=d},
ex4:function ex4(d,e){this.a=d
this.b=e},
ewf:function ewf(d){this.a=d},
ex5:function ex5(d,e){this.a=d
this.b=e},
ewe:function ewe(d){this.a=d},
esQ:function esQ(d,e,f){this.a=d
this.b=e
this.c=f},
esP:function esP(d,e){this.a=d
this.b=e},
exy:function exy(d,e){this.a=d
this.b=e},
exx:function exx(d,e){this.a=d
this.b=e},
exz:function exz(d,e){this.a=d
this.b=e},
exw:function exw(d,e){this.a=d
this.b=e},
etY:function etY(d,e){this.a=d
this.b=e},
etX:function etX(d){this.a=d},
etZ:function etZ(d,e){this.a=d
this.b=e},
etW:function etW(d){this.a=d},
euv:function euv(){},
euu:function euu(){},
exL:function exL(d){this.a=d},
exK:function exK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
exJ:function exJ(d,e){this.a=d
this.b=e},
exE:function exE(d,e){this.a=d
this.b=e},
exI:function exI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
exF:function exF(d,e){this.a=d
this.b=e},
exA:function exA(d){this.a=d},
exB:function exB(d){this.a=d},
exC:function exC(d){this.a=d},
exD:function exD(d){this.a=d},
exG:function exG(d,e){this.a=d
this.b=e},
exH:function exH(d,e){this.a=d
this.b=e},
exM:function exM(d){this.a=d},
etf:function etf(d){this.a=d},
ete:function ete(d,e,f){this.a=d
this.b=e
this.c=f},
etd:function etd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
et2:function et2(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
et3:function et3(d,e){this.a=d
this.b=e},
et4:function et4(d,e){this.a=d
this.b=e},
et5:function et5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
et1:function et1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
et6:function et6(d,e){this.a=d
this.b=e},
et8:function et8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
et7:function et7(d,e){this.a=d
this.b=e},
et9:function et9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
et0:function et0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eta:function eta(d,e){this.a=d
this.b=e},
et_:function et_(d,e){this.a=d
this.b=e},
etb:function etb(d,e){this.a=d
this.b=e},
esZ:function esZ(d){this.a=d},
etc:function etc(d,e){this.a=d
this.b=e},
ev6:function ev6(d){this.a=d},
ev5:function ev5(d){this.a=d},
ev7:function ev7(d,e){this.a=d
this.b=e},
eub:function eub(d,e){this.a=d
this.b=e},
euc:function euc(d,e){this.a=d
this.b=e},
eua:function eua(d,e){this.a=d
this.b=e},
eud:function eud(d,e){this.a=d
this.b=e},
eu9:function eu9(d,e){this.a=d
this.b=e},
eue:function eue(d,e){this.a=d
this.b=e},
eu8:function eu8(d,e){this.a=d
this.b=e},
euf:function euf(d,e){this.a=d
this.b=e},
eu7:function eu7(d,e){this.a=d
this.b=e},
eug:function eug(d,e){this.a=d
this.b=e},
eu6:function eu6(d,e){this.a=d
this.b=e},
euh:function euh(d,e,f){this.a=d
this.b=e
this.c=f},
eu5:function eu5(d,e){this.a=d
this.b=e},
eui:function eui(d,e,f){this.a=d
this.b=e
this.c=f},
eu4:function eu4(d,e){this.a=d
this.b=e},
euj:function euj(d,e){this.a=d
this.b=e},
eu3:function eu3(d,e,f){this.a=d
this.b=e
this.c=f},
eu0:function eu0(d,e){this.a=d
this.b=e},
euk:function euk(d,e){this.a=d
this.b=e},
eu2:function eu2(d,e){this.a=d
this.b=e},
eul:function eul(d,e){this.a=d
this.b=e},
eu1:function eu1(d,e,f){this.a=d
this.b=e
this.c=f},
eu_:function eu_(d,e){this.a=d
this.b=e},
eum:function eum(d,e){this.a=d
this.b=e},
eup:function eup(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erZ:function erZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ew3:function ew3(d,e){this.a=d
this.b=e},
ew1:function ew1(d){this.a=d},
ew2:function ew2(d,e){this.a=d
this.b=e},
af7:function af7(d,e,f){this.a=d
this.b=e
this.c=f},
ayK:function ayK(d,e){this.c=d
this.a=e},
bcz:function bcz(d,e){var _=this
_.e=_.d=$
_.cQ$=d
_.b4$=e
_.c=_.a=null},
d0V:function d0V(d){this.a=d},
d0U:function d0U(d){this.a=d},
bcN:function bcN(d,e){this.c=d
this.a=e},
d1g:function d1g(d){this.a=d},
d1h:function d1h(d){this.a=d},
JJ:function JJ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bcy:function bcy(){this.d=!1
this.c=this.a=null},
d0S:function d0S(d){this.a=d},
d0O:function d0O(d){this.a=d},
d0T:function d0T(d){this.a=d},
d0N:function d0N(d){this.a=d},
d0R:function d0R(d){this.a=d},
d0P:function d0P(d){this.a=d},
d0Q:function d0Q(d,e){this.a=d
this.b=e},
Pt:function Pt(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a_q:function a_q(d,e,f){this.c=d
this.d=e
this.a=f},
aEg:function aEg(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bt$=e
_.a9$=f
_.c=_.a=null},
eyJ:function eyJ(){},
eyz:function eyz(d){this.a=d},
eyI:function eyI(d){this.a=d},
eyA:function eyA(d){this.a=d},
eyB:function eyB(d){this.a=d},
eyv:function eyv(d){this.a=d},
eyw:function eyw(d,e){this.a=d
this.b=e},
eyx:function eyx(d){this.a=d},
eyy:function eyy(d,e,f){this.a=d
this.b=e
this.c=f},
eyG:function eyG(){},
eyH:function eyH(d){this.a=d},
eyC:function eyC(d){this.a=d},
eyD:function eyD(d){this.a=d},
eyE:function eyE(d){this.a=d},
eyF:function eyF(d){this.a=d},
eyK:function eyK(d,e,f){this.a=d
this.b=e
this.c=f},
eyM:function eyM(d,e){this.a=d
this.b=e},
eyL:function eyL(d){this.a=d},
JQ:function JQ(d,e){this.c=d
this.a=e},
brp:function brp(d,e){this.b=d
this.a=e},
bhr:function bhr(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bhq:function bhq(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aJY:function aJY(){},
aM_:function aM_(){},
bx9:function bx9(){},
aM0:function aM0(){},
fHL(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fHL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xb.c7().M_(B.a(["pdf"],x.s),A.tU,!0),$async$fHL)
case 3:q=e
if(q==null||J.cn(q.a)){u=null
w=1
break}t=J.fr(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.boF(s,"data:application/pdf;base64,"+A.cR.gcw().aL(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fHL,v)},
i85(d){var w,v,u,t,s,r
try{w=B.js(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cG(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c7(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).l0(0,w).gM(0)
if(t>0){s=J.aQE(t,1,200)
return s}}catch(r){}return 1},
fHC(d){return C.i84(d)},
i84(d){var w=0,v=B.j(x.T),u
var $async$fHC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fHC,v)},
bCH(d,e,f,g){return C.i8e(d,e,f,g)},
i8e(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bCH=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.ea(b6,x.co).gae(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.hpr(b9,new B.ar(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.lS(a9),b0)
b0=n
a9=k.b
n=Math.min(B.lS(b0),a9)
a9=m
b0=k.a
m=Math.max(B.lS(a9),b0)
b0=l
a9=k.b
l=Math.max(B.lS(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.V(800*(i/j)),180,420)
$.W()
g=new B.r1()
f=B.Dl(g,null)
a7=B.N()
a7.r=A.qS.gp(0)
f.b0(new B.a9(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.N()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bS
b1.e=A.fG
b1.b=A.ae
b1.f=!0
d=b1
a0=null
for(a7=b6.length,a8=0;a8<b6.length;b6.length===a7||(0,B.K)(b6),++a8){a1=b6[a8]
if(a1==null){a0=null
continue}a2=new B.v((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null){a9=a0
b0=a2
b2=d.H()
b3=f.a
b3.drawLine.apply(b3,[a9.a,a9.b,b0.a,b0.b,b2])
b2.delete()}a0=a2}a3=g.pE()
w=7
return B.b(a3.zl(800,h),$async$bCH)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.hv(A.h0),$async$bCH)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.eX(A.dD.gaP(a5))
a7=A.cR.gcw().aL(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b5=s.pop()
a6=B.ab(b5)
$.am.$1("[slides signature] "+B.u(a6))
u=null
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$bCH,v)},
aPS(d,e,f){return C.i82(d,e,f)},
i82(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aPS=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.ax:e
r.c=f==null?5.2:f
w=3
return B.b(B.ahw(d,e,f,new C.fHA(r,q),q,"Sign document"),$async$aPS)
case 3:if(!new B.ea(q,x.co).gae(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bCH(q,t,r.b,r.c),$async$aPS)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b13(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPS,v)},
i8c(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hiC(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hiC(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b5(A.a.aV(A.o.fX(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.aa(q.c*100,2)+"%;top:"+A.k.aa(q.d*100,2)+"%;width:"+A.k.aa(q.e*100,2)+"%;height:"+A.k.aa(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b5(A.a.aV(A.o.fX(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d+='<div class="txt" style="font-size:'+B.u(p)+"px;color:#"+o+'">'+B.aK(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lw&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aK(p,"&",h)
p=B.aK(p,"<",g)
p=B.aK(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aK(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hie(q.ay)+";border:2px solid "+C.hie(q.ch)+'"></div>'
break
case 5:l=C.h1F(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aK(n,'"',e)+"</div>")
p=p?null:l.gajy()
if(p==null)p=A.axz
n=B.T(p)
k=n.k("nn<1>")
j=new B.nn(p,0,8,k)
j.zK(p,0,8,n.c)
j=new B.bQ(j,j.gM(0),k.k("bQ<ak.E>"))
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
hie(d){var w=A.o.aC(d,24)
return"rgba("+(A.o.aC(d,16)&255)+","+(A.o.aC(d,8)&255)+","+(d&255)+","+A.k.aa((w&255)/255,3)+")"},
hiC(d){var w=B.aK(d,"&","&amp;")
w=B.aK(w,"<","&lt;")
w=B.aK(w,">","&gt;")
return B.aK(w,'"',"&quot;")},
bCF(d,e){var w=0,v=B.j(x.H)
var $async$bCF=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.ca(null,null,!0,null,new C.fHJ(e,C.i8c(e),d),d,null,!0,!0,x.H),$async$bCF)
case 2:return B.h(null,v)}})
return B.i($async$bCF,v)},
bCG(){var w=0,v=B.j(x.T),u,t,s
var $async$bCG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.GE(92,2400),$async$bCG)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fHC(s),$async$bCG)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCG,v)},
aPT(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aPT=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.h2U(d),$async$aPT)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aK(s,r,"_"))
u=Y.fK6(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPT,v)},
hcy(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b13:function b13(d,e,f){this.a=d
this.b=e
this.c=f},
fHA:function fHA(d,e){this.a=d
this.b=e},
fHJ:function fHJ(d,e,f){this.a=d
this.b=e
this.c=f},
fHG:function fHG(d){this.a=d},
fHH:function fHH(d,e,f){this.a=d
this.b=e
this.c=f},
fHI:function fHI(d,e,f){this.a=d
this.b=e
this.c=f},
i83(d){return C.kx(d.w)},
i8a(d){var w,v,u,t
if(d.length===0||!A.d.d6(d,C.i9V()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yA(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aK(w.toUpperCase(),v,"")
w=$.hv8()
if(w.b.test(u))return u
return null},
hpt(d,e,f){var w,v,u=C.hDO(d),t=$.py()
for(w=0;w<80;++w){v=u+A.a.aV(A.o.u(t.aw(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aV(A.o.u(Date.now()%1000),3,"0")},
i8g(d){var w,v,u,t,s=B.aX(x.N)
for(w=J.aV(d.a),v=new B.f2(w,d.b);v.C();){u=w.gR(w).y
t=C.yA(u==null?"":u)
if(t!=null)s.L(0,t)}return s},
fHy(d,e){var w,v=d.y,u=C.yA(v==null?"":v)
if(u!=null)return d.y=u
w=C.i8g(new B.a_(e,new C.fHz(d),B.T(e).k("a_<1>")))
v=d.x
return d.y=C.hpt(v==null?"":v,null,w)},
i8f(d){var w,v
if(d.length!==1)return null
w=A.d.gI(d)
if(!C.kx(w.w))return null
v=w.y
return C.yA(v==null?"":v)},
hIc(){var w,v=$.py(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"SL"+A.d.h2(u)},
VX(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$VX=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$VX)
case 3:if(!e){u=B.U(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f7("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bJ),$async$VX)
case 8:r=e
if(r==null){u=B.U(x.N,x.z)
w=1
break}q=J.q(r,"stashes")
if(x.f.b(q)){o=B.a2(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=B.ab(m)
$.am.$1("[slides qr stash] load: "+B.u(p))
w=7
break
case 4:w=2
break
case 7:u=B.U(x.N,x.z)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$VX,v)},
VY(d){return C.hId(d)},
hId(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$VY=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$VY)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hJ("ngmy_slides_transfer_qr_stashes_v1",B.F(["stashes",d,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,A.cH,null),$async$VY)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=B.ab(p)
$.am.$1("[slides qr stash] save: "+B.u(r))
w=7
break
case 4:w=2
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$VY,v)},
a8_(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a8_=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$a8_)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.VX(),$async$a8_)
case 4:s=a6
r=C.yA(a2==null?"":a2)
if(r==null)r=a3!=null?C.hpt(a3,null,A.IM):null
q=x.N
p=B.aX(q)
for(o=J.dl(s),n=J.aV(o.gib(s)),m=x.f;n.C();){l=n.gR(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.yA(J.k(k==null?"":k))
if(j!=null)p.L(0,j)}n=o.gdL(s),n=n.gae(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gR(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a2(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dK.aL(t)
g.n(0,"payload",A.cR.gcw().aL(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.S(Date.now(),0,!1).a6().ac())
if(D.Tc.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yA(J.k(q==null?"":q))
if(f==null)f=C.hcD(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.VY(s),$async$a8_)
case 7:u=new B.aFH(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hIc()
n=r==null
d=n?C.hcD(p):r
q=B.U(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dK.aL(t)
q.n(0,"payload",A.cR.gcw().aL(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.S(Date.now(),0,!1).a6().ac())
if(D.Tc.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.VY(s),$async$a8_)
case 8:u=new B.aFH(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8_,v)},
hcD(d){var w,v,u=$.py()
for(w=0;w<200;++w){v="SL"+A.a.aV(A.o.u(u.aw(1000)),3,"0")
if(d.L(0,v))return v}return"SL"+A.a.aV(A.o.u(Date.now()%1000),3,"0")},
ar8(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ar8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$ar8)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.VX(),$async$ar8)
case 6:t=f
s=J.a4(t)
r=s.gM(t)
s.br(t,new C.ceD(q))
w=s.gM(t)!==r?7:8
break
case 7:w=9
return B.b(C.VY(t),$async$ar8)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$ar8,v)},
ar7(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$ar7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yA(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$ar7)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.VX(),$async$ar7)
case 6:t=o.jz(f),t=t.gae(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gR(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.yA(J.k(q==null?"":q))===p){u=C.a7Z(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ar7,v)},
a7Z(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a7Z=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$a7Z)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.VX(),$async$a7Z)
case 6:p=a1
o=J.a4(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a4(n)
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
try{s=A.cg.cB(0,A.cI.aL(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.Tc.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.A(l.h(n,"sharedByAdmin"),!0))try{r=A.S.aK(0,s,null)
if(m.b(r)){q=B.a2(r,x.N,x.z)
J.aG(q,"sharedByAdmin",!0)
s=A.S.ao(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dQ(B.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.S(Date.now(),0,!1).a6().ac())
o.n(p,g,l)}w=7
return B.b(C.VY(p),$async$a7Z)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7Z,v)},
i89(d,e,f){var w,v=B.U(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.S(Date.now(),0,!1).a6().ac())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.T(d).k("M<1,a5<m,@>>")
w=B.C(new B.M(d,new C.fHF(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fHN(d,e,f,g){var w
if(e!=null){w=B.U(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.S(Date.now(),0,!1).a6().ac())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ah())
return A.S.ao(w,null)}return A.S.ao(C.i89(d==null?B.a([],x.D):d,f,g),null)},
fHM(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fHM=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a8_(h,d,e,f,g),$async$fHM)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yA(e==null?"":e)
u=new B.aFu(s,t)
w=1
break}t=A.dK.aL(h)
t=A.kk.gcw().aL(t)
u=new B.aFu(C.yA(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fHM,v)},
h2W(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d0(q,"NGMYSLIDESYNC2|"))return!0
if(J.d0(q,"NGMYSLIDECODE|"))return!0
if(J.d0(q,"NGMY_SL:"))return!0
if(J.f4(q,s)||J.f4(q,r))return!0
if(J.d0(q,"{"))try{w=A.S.aK(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.A(v,s)||J.A(v,r)
return u}}catch(t){}return!1},
i8d(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.h2W(v))return v
u=A.a.cK(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b5(v,u))
if(C.h2W(t))return t}s=A.a.cK(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b5(v,s))
if(C.h2W(t))return t}}return null},
fHB(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d0(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d0(t,"NGMY_SL:"))w=v.a(A.S.aK(0,A.cg.cB(0,A.cI.aL(J.mI(t,8))),null))
else w=v.a(A.S.aK(0,t,null))
v=C.hRT(w)
return v}catch(u){v=B.a([],x.D)
return v}},
ahh(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$ahh=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.ar7(t[1]),$async$ahh)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fHB(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yA(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.ar7(r),$async$ahh)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fHB(s)
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
return B.b(C.a7Z(t[1]),$async$ahh)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fHB(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fHB(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ahh,v)},
hRT(d){var w,v,u,t=J.a4(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.A(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Tc.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.h2T(C.VT(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.da(u,x.f)
t=B.cD(t,new C.feL(w),t.$ti.k("J.E"),x.I)
t=B.C(t,B.a3(t).k("J.E"))
return t}return B.a([],x.D)},
h2T(d,e){var w,v,u,t,s,r,q,p,o=d.ah()
o.n(0,"id",C.cB())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aV(v),t=x.f;u.C();){s=u.gR(u)
if(t.b(s)){r=Date.now()
q=$.j2
$.j2=q+1
J.aG(s,"id",""+1000*r+"_"+q)}}p=C.VT(B.a2(o,x.N,x.z))
if(e&&C.kx(p.w))p.Q=new B.S(Date.now(),0,!1).a6().bR(144e8).ac()
return p},
bCq(){var w=0,v=B.j(x.aT),u,t,s
var $async$bCq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.GD(),$async$bCq)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.ahh(s),$async$bCq)
case 4:t=e
u=J.cn(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCq,v)},
fQq(d){var w=0,v=B.j(x.T),u,t
var $async$fQq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hY(D.WS,!0,"Dismiss",d,new C.fQr(),new C.fQs(),A.Fm,!0,x.N),$async$fQq)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.J(x.q).f.S(D.eYA)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fQq,v)},
ic3(d,e,f,g,h){return B.a6(d,!1).cm(B.e9(new C.fQt(h,e,g,f),!0,null,x.H))},
fHz:function fHz(d){this.a=d},
ceD:function ceD(d){this.a=d},
fHF:function fHF(){},
feL:function feL(d){this.a=d},
fQr:function fQr(){},
fQs:function fQs(){},
fQt:function fQt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VV:function VV(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aEe:function aEe(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eyf:function eyf(){},
eyb:function eyb(d,e){this.a=d
this.b=e},
eye:function eye(d,e){this.a=d
this.b=e},
eyc:function eyc(d){this.a=d},
eyd:function eyd(d){this.a=d},
eyg:function eyg(d){this.a=d},
eyh:function eyh(d){this.a=d},
eyk:function eyk(d){this.a=d},
eyl:function eyl(d){this.a=d},
eyj:function eyj(d){this.a=d},
eym:function eym(d){this.a=d},
eyi:function eyi(d){this.a=d},
eyn:function eyn(d,e){this.a=d
this.b=e},
eya:function eya(d,e){this.a=d
this.b=e},
ey9:function ey9(d,e){this.a=d
this.b=e},
VW:function VW(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bkj:function bkj(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eyo:function eyo(d,e){this.a=d
this.b=e},
eyp:function eyp(d){this.a=d},
eyq:function eyq(){},
eyr:function eyr(d){this.a=d},
eys:function eys(d,e){this.a=d
this.b=e},
aEb:function aEb(d){this.a=d},
aEc:function aEc(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
erT:function erT(d){this.a=d},
erS:function erS(){},
erU:function erU(d){this.a=d},
erP:function erP(d){this.a=d},
erO:function erO(){},
erQ:function erQ(d){this.a=d},
erR:function erR(d){this.a=d},
buG:function buG(){},
ar9:function ar9(d){this.a=d},
aEf:function aEf(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eyu:function eyu(d){this.a=d},
eyt:function eyt(d){this.a=d},
hX3(){var w,v,u,t
for(v=0;v<4;++v){w=D.d4s[v]
try{if(Ab.bXc(w)){u=w
return u}}catch(t){}}return null},
R0(d,e){return C.i4V(d,e)},
i4V(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$R0=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hX3()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.of?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.E(b4,2)
c2.b=b5-A.o.E(b5,2)
b6=B.qz(c6,!0)
b6.toString
p=B.a6(c6,!0)
b7=new B.cs(null,x.A)
b8=A.d.gI(c3)
b9=$.aw()
o=new B.eN(b8,b9)
n=new B.eN("Getting ready\u2026",b9)
m=new B.eN(0,b9)
l=B.om(new C.fBU(c2,b7,o),!1,!1)
b6.lT(0,l)
b9=x.H
B.ca(null,A.d9,!1,null,new C.fBV(n,m),c6,null,!0,!0,b9)
k=new C.fBZ(b7)
j=new C.fC_()
i=null
t=4
b3=c2.a
h=Ai.aS8(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fTa(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ab.aX3(f,B.F(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.HJ.yo(i,"dataavailable",new C.fBW(e))
d=new B.bX(new B.bg($.bz,x.dT),x.b2)
A.HJ.yo(i,"stop",new C.fBX(d))
J.ahS(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$R0)
case 8:w=7
return B.b(c5.$1(d0),$async$R0)
case 7:a0=d0
J.fTc(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ahS(n,"Drawing slide "+B.u(a1+1)+" of "+b8+"\u2026")
J.ahS(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$R0)
case 15:w=14
return B.b(c5.$1(d0),$async$R0)
case 14:a0=d0
case 13:J.fTc(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ahS(n,"Recording slide "+B.u(a1+1)+" of "+c3.length+" \xb7 "+B.u(a3)+" s")
a4=new B.S(Date.now(),0,!1).bR(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbq())b3=b3===b8.gbq()&&0<b8.gcC()
else b3=!0
if(!b3){w=17
break}J.fTc(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.fq,null,b9),$async$R0)
case 18:w=16
break
case 17:J.ahS(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ahS(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.d7(0,A.o_),$async$R0)
case 19:a5=A.d.gI(q.split(";"))
a6=B.hS(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.A(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aK(c3,b3,"_"))
c0=B.n9(a7)
c0.download=B.u(J.ad(a9)===0?"presentation":a9)+"."+B.u(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.Ld(b0)
J.lY(b0)
B.bN(A.pQ,new C.fBY(a7),b9)
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
try{if(i!=null&&i.state!=="inactive")i.stop()}catch(c8){}c3=B.u(b1)
u="Could not make the video: "+c3
r=[1]
w=5
break
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
J.lY(l)
if(p.py())p.eF()
c3=o
b3=$.aw()
c3.si1(b3)
J.aQI(c3,0)
c3=n
c3.si1(b3)
J.aQI(c3,0)
c3=m
c3.si1(b3)
J.aQI(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$R0,v)},
fBU:function fBU(d,e,f){this.a=d
this.b=e
this.c=f},
fBT:function fBT(){},
fBV:function fBV(d,e){this.a=d
this.b=e},
fBZ:function fBZ(d){this.a=d},
fC_:function fC_(){},
fBW:function fBW(d){this.a=d},
fBX:function fBX(d){this.a=d},
fBY:function fBY(d){this.a=d},
buS:function buS(d,e,f){this.c=d
this.d=e
this.a=f},
f97:function f97(){},
f98:function f98(){},
ceZ(d){var w=0,v=B.j(x.at),u,t,s
var $async$ceZ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.arh(d,A.zq),$async$ceZ)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bA(new B.S(Date.now(),0,!1))
if(t.a<0){u=A.bx
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ceZ,v)},
ceY(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a7G:function a7G(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bk2:function bk2(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
eg1:function eg1(d){this.a=d},
eg_:function eg_(d){this.a=d},
eg0:function eg0(d,e){this.a=d
this.b=e},
a8A:function a8A(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.ot$=k
_.ou$=l
_.ov$=m
_.nO$=n},
a8B:function a8B(d,e){this.a=d
this.b=e},
b2I:function b2I(){},
cha:function cha(){},
chb:function chb(){},
chc:function chc(d,e,f,g,h,i,j,k,l){var _=this
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
hw8(d){return new C.ai9(d)},
a2M:function a2M(){},
ai9:function ai9(d){this.a=d},
aR2:function aR2(){},
awC:function awC(d,e){this.d=d
this.b=e
this.a=null},
aSy:function aSy(d){this.b=d
this.a=null},
fx5(d,e){var w=0,v=B.j(x.H)
var $async$fx5=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.W().gxz().LI(d,e),$async$fx5)
case 2:B.fKc()
return B.h(null,v)}})
return B.i($async$fx5,v)},
hmK(d,e){return(A.rs[(d^e)&255]^A.o.aC(d,8))>>>0},
fun(d,e,f,g,h,i){var w=C.i1g(d,A.dd,f,null,A.cZ,g,h,i)
return w},
hoC(d){var w=F.hpk(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hDO(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.p8.h(0,w)
if(v!=null)return v
for(u=A.p8.gdL(A.p8),u=u.gae(u);u.C();){t=u.gR(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aK(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
hoK(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<45;++w)v+="- "+D.cW9[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bAA(d,e){return C.hYQ(d,e)},
hYQ(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bAA=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hS([d],"application/pdf")
n=x.z
q=B.aUc(B.a([r],x.e3),e,B.F(["type","application/pdf"],n,n))
p=B.cz(B.F(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ek(B.k1(o,"share",[p]),x.H),$async$bAA)
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
return B.i($async$bAA,v)},
h2N(){var w=0,v=B.j(x.y),u,t,s
var $async$h2N=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fmm
s=$.bA7
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bAA(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h2N,v)},
bBW(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bBW=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fmm
l=$.bA7
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Y.hjh()?3:4
break
case 3:w=5
return B.b(C.bAA(m,k),$async$bBW)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bA8
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.n9(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.Ld(q)
w=10
return B.b(B.bN(A.a1,null,x.H),$async$bBW)
case 10:J.lY(q)
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
return B.i($async$bBW,v)},
h2E(){var w=0,v=B.j(x.y),u,t,s,r
var $async$h2E=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bA8
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lA.qL(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$h2E,v)},
h2V(d,e){var w=0,v=B.j(x.H),u,t
var $async$h2V=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hS([d],"text/html"))
t.toString
u=window
u.toString
A.lA.qL(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$h2V,v)},
b1F(d,e){var w=0,v=B.j(x.y),u
var $async$b1F=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b1H(d,e),$async$b1F)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b1G(d),$async$b1F)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b1F,v)}},D,H,I,Al,A7,X,V,Am,G,F,E,W,Q,Y,Z,An,Ao,A8,L,Ap,A_,O,A0,A9,M,Aa,Aq,Ar,P,A1,As,Ab,Ac,At,Ad,Ae,Af,Au,Av,R,Aw,K,Ax,S,T,Ay,N,A2,A3,A4
J=c[1]
B=c[0]
A=c[2]
Ag=c[193]
A5=c[66]
Ah=c[49]
Ai=c[57]
U=c[208]
A6=c[52]
Aj=c[137]
Ak=c[218]
C=a.updateHolder(c[4],C)
D=c[206]
H=c[91]
I=c[126]
Al=c[36]
A7=c[210]
X=c[207]
V=c[196]
Am=c[121]
G=c[177]
F=c[31]
E=c[209]
W=c[123]
Q=c[139]
Y=c[29]
Z=c[165]
An=c[220]
Ao=c[173]
A8=c[109]
L=c[211]
Ap=c[120]
A_=c[60]
O=c[187]
A0=c[75]
A9=c[99]
M=c[147]
Aa=c[110]
Aq=c[89]
Ar=c[213]
P=c[114]
A1=c[129]
As=c[87]
Ab=c[53]
Ac=c[183]
At=c[35]
Ad=c[73]
Ae=c[138]
Af=c[217]
Au=c[219]
Av=c[216]
R=c[67]
Aw=c[214]
K=c[162]
Ax=c[174]
S=c[47]
T=c[212]
Ay=c[221]
N=c[194]
A2=c[215]
A3=c[106]
A4=c[56]
C.nU.prototype={
v1(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.tS(t,v)
return new C.nU(t===0?!1:w,v,t)},
bLI(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.D0()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.tS(w,u)
return new C.nU(r===0?!1:s,u,r)},
bMd(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.D0()
w=o-d
if(w<=0)return p.a?$.h4k():$.D0()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.tS(w,u)
q=new C.nU(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aD(0,$.a2z())
return q},
dX(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.V(B.dK("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.an(e,16)
if(A.o.E(e,16)===0)return r.bLI(v)
u=w+v+1
t=new Uint16Array(u)
C.hfT(r.b,w,e,t)
w=r.a
s=C.tS(u,t)
return new C.nU(s===0?!1:w,t,s)},
mu(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.V(B.dK("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.an(e,16)
u=A.o.E(e,16)
if(u===0)return n.bMd(v)
t=w-v
if(t<=0)return n.a?$.h4k():$.D0()
s=n.b
r=new Uint16Array(t)
C.hNS(s,w,e,r)
w=n.a
q=C.tS(t,r)
p=new C.nU(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dX(1,u)-1)!==0)return p.aD(0,$.a2z())
for(o=0;o<v;++o)if(s[o]!==0)return p.aD(0,$.a2z())}return p},
aM(d,e){var w,v=this.a
if(v===e.a){w=C.cFb(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a7Y(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a7Y(t,e)
if(s===0)return $.D0()
if(r===0)return t.a===e?t:t.v1(0)
w=s+1
v=new Uint16Array(w)
C.hNQ(t.b,s,d.b,r,v)
u=C.tS(w,v)
return new C.nU(u===0?!1:e,v,u)},
Hd(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.D0()
w=d.c
if(w===0)return t.a===e?t:t.v1(0)
v=new Uint16Array(s)
C.b9M(t.b,s,d.b,w,v)
u=C.tS(s,v)
return new C.nU(u===0?!1:e,v,u)},
byD(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.tS(r,u)
return new C.nU(!1,u,s)},
byC(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.tS(u,r)
return new C.nU(!1,r,v)},
byE(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.tS(p,m)
return new C.nU(s!==0,m,s)},
UA(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.D0()
w=t.a
if(w===e.a){if(w){w=$.a2z()
return t.Hd(w,!0).byE(e.Hd(w,!0),!0).a7Y(w,!0)}return t.byD(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.byC(v.Hd($.a2z(),!1),!1)},
ad(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a7Y(e,v)
if(C.cFb(u.b,t,e.b,w)>=0)return u.Hd(e,v)
return e.Hd(u,!v)},
aD(d,e){var w,v,u=this,t=u.c
if(t===0)return e.v1(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a7Y(e,v)
if(C.cFb(u.b,t,e.b,w)>=0)return u.Hd(e,v)
return e.Hd(u,!v)},
aG(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.D0()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hfU(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.tS(w,t)
return new C.nU(q===0?!1:r,t,q)},
bLH(d){var w,v,u,t
if(this.c<d.c)return $.D0()
this.aRd(d)
w=$.fYH.c7()-$.axl.c7()
v=C.fYJ($.fYG.c7(),$.axl.c7(),$.fYH.c7(),w)
u=C.tS(w,v)
t=new C.nU(!1,v,u)
return this.a!==d.a&&u>0?t.v1(0):t},
cnS(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aRd(d)
w=C.fYJ($.fYG.c7(),0,$.axl.c7(),$.axl.c7())
v=C.tS($.axl.c7(),w)
u=new C.nU(!1,w,v)
if($.fYI.c7()>0)u=u.mu(0,$.fYI.c7())
return t.a&&u.c>0?u.v1(0):u},
aRd(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hfQ&&d.c===$.hfS&&g.b===$.hfP&&d.b===$.hfR)return
w=d.b
v=d.c
u=16-A.o.gajX(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hfO(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hfO(g.b,f,u,r)}else{r=C.fYJ(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fYK(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cFb(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.b9M(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b9M(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hNR(p,r,i);--o
C.hfU(h,j,0,r,o,s)
if(r[i]<h){m=C.fYK(j,s,o,n)
C.b9M(r,l,n,m,r)
while(--h,r[i]<h)C.b9M(r,l,n,m,r)}--i}$.hfP=g.b
$.hfQ=f
$.hfR=w
$.hfS=v
$.fYG.b=r
$.fYH.b=l
$.axl.b=s
$.fYI.b=u},
gX(d){var w,v,u,t=new C.cFc(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cFd().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nU&&this.aM(0,e)===0},
td(d,e){return this.aM(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
uW(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gajX(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aC(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cFe(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cFf(w)
if(J.A(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.l8(A.aH.gaP(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.v1(0):r
while(v.c>1){u=$.ht4()
if(u.c===0)B.b8(D.b44)
t=v.cnS(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bLH(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dx(w,x.bJ).h2(0)},
$iaRM:1,
$ihM:1}
C.aRc.prototype={
L(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
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
cM6(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gI(d){return A.d.gI(this.a)},
gal(d){return A.d.gal(this.a)},
gam(d){return this.a.length===0},
gcl(d){return this.a.length!==0},
gae(d){var w=this.a
return new J.k5(w,w.length,B.T(w).k("k5<1>"))}}
C.RE.prototype={
cU6(){var w,v
if(this.as==null)this.bcB()
w=this.as
v=w==null?null:w.aoC()
return v==null?null:v.eM()},
bcB(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.aoC().eM()
this.as=new C.bO0(v)}},
gY(d){return this.at}}
C.a3K.prototype={
a5(){return"CompressionType."+this.b}}
C.bHv.prototype={
eA(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cq()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dX(v,u)+(s.b&A.z_[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cq()}w=A.o.dX(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fI(u,t)&A.z_[d])
s.c=t}return v}}
C.bFS.prototype={
cKm(d,e){var w,v,u,t,s,r=this,q=new C.bHv(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.eA(8)!==66||q.eA(8)!==90||q.eA(8)!==104)return!1
w=r.a=q.eA(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.cm8(q)
if(t<0)return!1
if(t===0){q.eA(8)
q.eA(8)
q.eA(8)
q.eA(8)
s=r.cmb(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eA(8)
q.eA(8)
q.eA(8)
q.eA(8)
return!0}}return!0},
cm8(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eA(8)
if(t!==D.dl7[u])v=!1
if(t!==D.cYT[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cmb(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eA(1),d2=((d3.eA(8)<<8|d3.eA(8))<<8|d3.eA(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eA(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eA(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c1m()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.eA(3)
if(q<2||q>6)return-1
v=d3.eA(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.eA(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.c2(6,$.hra(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eA(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eA(1)===0)break
i=d3.eA(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hr9()
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
if(f<h)h=f}c9.bXN(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.atw(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.atw(d3)}while(a3===0||a3===1);++a5
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
a3=c9.atw(d3)
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
d4.bJ(c3)
c1=(c1<<8^D.Hf[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.Hh[b9];++b9
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
if(b8===0){b8=D.Hh[b9];++b9
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
if(b8===0){b8=D.Hh[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.Hh[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.Hh[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bJ(c3)
c1=c1<<8^D.Hf[c1>>>24&255^v];--c2}d4.bJ(c3)
c1=(c1<<8^D.Hf[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bJ(c7)
c1=(c1<<8^D.Hf[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bJ(c7)
c1=(c1<<8^D.Hf[c1>>>24&255^c7&255])>>>0
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
atw(d){var w,v,u,t,s=this,r=s.ay
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
t=d.eA(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.eA(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
bXN(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c1m(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cxl.prototype={
aHy(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bP1(e)
if(q<0)return
e.c=q
if(e.aN()!==101010256)return
e.aW()
e.aW()
e.aW()
e.aW()
r.f=e.aN()
r.r=e.aN()
w=e.aW()
if(w>0)e.aHB(w,!1)
r.cmx(e)
q=r.r
v=r.f
u=e.aKC(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aN()!==33639248)break
s=new C.b8s()
s.cU5(0,u,e,f)
q.push(s)}},
cmx(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a7B(20,r)
if(w.aN()!==117853008){d.c=s
return}w.aN()
v=w.t1()
w.aN()
d.c=v
if(d.aN()!==101075792){d.c=s
return}d.t1()
d.aW()
d.aW()
d.aN()
d.aN()
d.t1()
d.t1()
u=d.t1()
t=d.t1()
this.f=u
this.r=t
d.c=s},
bP1(d){var w,v,u,t,s,r,q,p,o,n
if(d.gM(0)<=4)return-1
w=d.c
v=d.gM(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a7B(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.alK(A.i0)
o.aLT(r.eM(),A.i0,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aN()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cxj.prototype={}
C.ax_.prototype={
a5(){return"ZipEncryptionMode."+this.b}}
C.cxm.prototype={
aHy(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aN()!==67324752)return
e.aW()
o.b=e.aW()
w=D.aE5.h(0,e.aW())
o.c=w==null?D.LU:w
o.d=e.aW()
o.e=e.aW()
o.f=e.aN()
o.r=e.aN()
o.w=e.aN()
v=e.aW()
u=e.aW()
o.x=e.anq(v)
o.y=e.hk(u).eM()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aV5:D.DK
o.ay=f
o.Q=e.hk(t)
if(o.at!==D.DK&&u>2){w=o.y
w.toString
s=B.rg(w,A.i0,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aW()===39169){s.aW()
s.aW()
s.anq(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aW()
o.at=D.aV6
o.ax=new C.cxj(r,q)
w=D.aE5.h(0,q)
o.c=w==null?D.LU:w}}}if((o.b&8)!==0){p=e.aN()
if(p===134695760)o.f=e.aN()
else o.f=p
o.r=e.aN()
o.w=e.aN()}},
gM(d){return this.bm9().length},
aoC(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rg(new Uint8Array(0),A.i0,q,q)
w=r.at
if(w!==D.DK)if(p.gM(0)<=0)r.at=D.DK
else{if(w===D.aV5){p=r.bK_(p)
r.Q=p}else if(w===D.aV6){p=r.bJD(p)
r.Q=p}r.at=D.DK}w=r.c
if(w===D.agG){v=p.c
u=B.dj()
p=r.Q
if(p.gM(0)<=524288e3)u.b=A.pw.Bt(p.eM(),!0,!1)
else{t=B.a8p(A.i0,r.w)
p=r.Q
p.toString
A.pw.a3I(p,t,!0,!1)
u.b=t.GM()}r.Q.c=v
return B.rg(u.bj(),A.i0,q,q)}else if(w===D.agH){s=B.a8p(A.i0,32768)
p=r.Q
v=p.c
C.hwj().cKm(p,s)
u=s.GM()
r.Q.c=v
return B.rg(u,A.i0,q,q)}else return B.rg(p.eM(),A.i0,q,q)},
bm9(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eM()},
u(d){return this.x},
b8u(d){var w=this.ch,v=C.JF(C.hmK(w[0].N(0),d))
w[0]=v
v=w[1].ad(0,v.UA(0,C.JF(255)))
w[1]=v
w[1]=v.aG(0,C.JF(134775813)).ad(0,C.JF(1)).UA(0,C.JF(4294967295))
w[2]=C.JF(C.hmK(w[2].N(0),w[1].mu(0,24).N(0)))},
aQB(){var w=(this.ch[2].UA(0,C.JF(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bK_(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rg(new Uint8Array(0),A.i0,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b8u(u[v.c++]^r.aQB())}t=r.Q.eM()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aQB()
r.b8u(s)
u&2&&B.aj(t)
t[w]=s}return B.rg(t,A.i0,q,q)},
bJD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hk(8).eM()
v=16}else if(k===2){w=d.hk(12).eM()
v=24}else{w=d.hk(16).eM()
v=32}u=d.hk(2).eM()
t=d.hk(d.gM(0)-10)
s=d.hk(10)
r=t.eM()
k=this.ay
k.toString
q=C.hNx(k,w,v)
p=new Uint8Array(B.cf(A.aH.ds(q,0,v)))
k=v*2
o=new Uint8Array(B.cf(A.aH.ds(q,v,k)))
if(!C.hfi(A.aH.ds(q,k,k+2),u))throw B.V(B.fn("password error"))
k=new Uint8Array(16)
n=new C.bEs(k,new Uint8Array(16),p)
k=x.S
m=J.a59(0,k)
m=n.r=new C.ch_(m)
m.c=!0
m.b=m.bls(!0,new C.asF(p))
if(m.c)m.d=B.bo(D.oc,!0,k)
else m.d=B.bo(D.yQ,!0,k)
l=C.hdv(C.hdx(),64)
l.beX(new C.asF(o))
n.w=l
n.cTG(r,0,r.length)
k=s.eM()
m=n.x
m===$&&B.c()
if(!C.hfi(k,m))throw B.V(B.fn("macs don't match"))
return B.rg(r,A.i0,null,null)}}
C.b8s.prototype={
cU5(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.aW()
e.aW()
e.aW()
e.aW()
e.aW()
e.aW()
e.aN()
n.w=e.aN()
n.x=e.aN()
w=e.aW()
v=e.aW()
u=e.aW()
n.y=e.aW()
e.aW()
n.Q=e.aN()
n.as=e.aN()
if(w>0)n.at=e.anq(w)
if(v>0){t=e.hk(v).eM()
n.ax=t
if(v>=4){s=B.rg(t,A.i0,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aW()
p=s.aW()
o=s.a7B(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.t1()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.t1()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.t1()
p-=8}if(p>=4&&n.y===65535)n.y=o.aN()}}}}if(u>0)e.anq(u)
f.c=n.as
t=new C.cxm(D.LU,n,D.DK,B.a([C.JF(0),C.JF(0),C.JF(0)],x.f3))
n.ch=t
t.aHy(0,f,g)},
u(d){return this.at}}
C.cxk.prototype={
cKn(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cxl(B.a([],x.fT))
this.a=g
g.aHy(0,d,f)
g=B.a([],x.bm)
w=B.U(x.N,x.S)
v=new C.aRc(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.K)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.cb(o,"/")||A.a.cb(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.RE(o,A.o.an(Date.now(),1000),0):C.h5I(o,q.w,q)
v.L(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.h5I(o,q.w,q)
if(k.as==null)k.bcB()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.alK(A.i0)
j.aLT(o,A.i0,h,h)}i=j==null?h:j.eM()
if(i!=null)new B.G1(!1).Dr(i,0,h,!0)}}return v}}
C.bEs.prototype={
cTG(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Co(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hw2(u,m.a)
q=m.r
if(16>u.byteLength)B.b8(B.dK("Input buffer too short",null))
if(16>w.byteLength)B.b8(B.dK("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bNn(u,0,w,0,o)}else{o===$&&B.c()
q.bK3(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.L2(w,0)
m.x=A.aH.ds(m.x,0,10)
w=m.w
l=w.a
l.lE(0)
w=w.d
w===$&&B.c()
l.Co(0,w,0,w.length)
return f}}
C.ch4.prototype={}
C.ch8.prototype={}
C.ch2.prototype={}
C.asF.prototype={}
C.ch7.prototype={
cKC(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.dY(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.beX(new C.asF(A.aH.fQ(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bOn(n.a,n.b,t,s,r)
r+=v}A.aH.hm(f,g,g+w,s)
return o.a.c},
bOn(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.V(B.dK("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Co(0,d,0,d.length)
v.Co(0,f,0,4)
u=m.c
u===$&&B.c()
w.L2(u,0)
u=m.c
A.aH.hm(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Co(0,s,0,s.length)
w.L2(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.ch3.prototype={}
C.ch1.prototype={}
C.asG.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.asG){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
td(d,e){var w=this.a
w===$&&B.c()
w=A.o.td(w,e.gbY3())
if(!w)e.gbY3()
return w},
aK3(d,e){this.a=0
this.b=d},
th(d){return this.aK3(d,null)},
aKF(d){var w,v=this,u=v.b
u===$&&B.c()
w=u+d
u=w>>>0
v.b=u
if(w!==u){u=v.a
u===$&&B.c();++u
v.a=u
v.a=u>>>0}},
u(d){var w=this,v=new B.ff(""),u=w.a
u===$&&B.c()
w.b0b(v,u)
u=w.b
u===$&&B.c()
w.b0b(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b0b(d,e){var w,v=A.o.fX(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bt(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.ch6.prototype={
lE(d){var w,v=this
v.a.th(0)
v.c=0
A.aH.h6(v.b,0,4,0)
v.w=0
w=v.r
A.d.h6(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
ao6(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b1G(u,0)
v.c=0}v.a.aKF(1)},
Co(d,e,f,g){var w=this.ckT(e,f,g)
f+=w
g-=w
w=this.ckU(e,f,g)
this.ckK(e,f+w,g-w)},
L2(d,e){var w,v=this,u=C.hdw(v.a),t=u.a
t===$&&B.c()
t=C.h3o(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.h3o(w,3)
v.ckO()
v.ckL(u)
v.asl()
v.ceY(d,e)
v.lE(0)
return 20},
b1G(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.o3(A.aH.gaP(d),d.byteOffset,d.length).getUint32(e,A.ib===w.d)
if(w.w===16)w.asl()},
asl(){this.cTF()
this.w=0
A.d.h6(this.r,0,16,0)},
ckK(d,e,f){while(f>0){this.ao6(d[e]);++e;--f}},
ckU(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b1G(d,e)
e+=4
f-=4
w.aKF(4)
v+=4}return v},
ckT(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.ao6(d[e]);++e;--f;++v}return v},
ckO(){this.ao6(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.ao6(0)}},
ckL(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.asl()
u=v.d
switch(u){case A.ib:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Ea:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.V(B.bd("Invalid endianness: "+u.u(0)))}},
ceY(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.ib===this.d,s=0;s<w;++s){r=v[s]
q=J.o3(A.aH.gaP(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdc(d){return this.f}}
C.ch9.prototype={
cTF(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.qc[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.qc[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.qc[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qc[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.qc[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qc[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.qc[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qc[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.qc[30]
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
C.ch5.prototype={
beX(d){var w,v,u,t,s=this,r=s.a
r.lE(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Co(0,w,0,v)
w=s.d
w===$&&B.c()
r.L2(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aH.hm(t,0,v,w)}w=s.d
w===$&&B.c()
A.aH.h6(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aH.hm(w,0,u,s.d)
s.b9F(s.d,u,54)
s.b9F(s.e,u,92)
u=s.d
r.Co(0,u,0,u.length)},
L2(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.L2(s,w)
s=u.e
t.Co(0,s,0,s.length)
v=t.L2(d,e)
s=u.e
A.aH.h6(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Co(0,s,0,s.length)
return v},
b9F(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.ch0.prototype={}
C.ch_.prototype={
a21(d){return(D.oc[d&255]&255|(D.oc[d>>>8&255]&255)<<8|(D.oc[d>>>16&255]&255)<<16|D.oc[d>>>24&255]<<24)>>>0},
bls(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.V(B.dK("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e4(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c2(4,0,!1,u)
switch(v){case 4:q=J.o3(A.aH.gaP(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a21((m>>>8|(m&$.qc[24])<<24)>>>0)^D.cB0[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.o3(A.aH.gaP(e),e.byteOffset,w)
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
p=(p^f.a21((k>>>8|(k&$.qc[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a21((k>>>8|(k&$.qc[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.o3(A.aH.gaP(e),e.byteOffset,w)
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
p=(p^f.a21((g>>>8|(g&$.qc[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a21(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.V(B.bd("Should never get here"))}return s},
bNn(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.o3(A.aH.gaP(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.e9[a8&255]
u=D.e9[a9>>>8&255]
t=$.qc[8]
s=D.e9[b0>>>16&255]
r=$.qc[16]
q=D.e9[b1>>>24&255]
p=$.qc[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.e9[a9&255]
s=D.e9[b0>>>8&255]
u=D.e9[b1>>>16&255]
v=D.e9[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.e9[b0&255]
u=D.e9[b1>>>8&255]
s=D.e9[a8>>>16&255]
q=D.e9[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.e9[b1&255]
a8=D.e9[a8>>>8&255]
a9=D.e9[a9>>>16&255]
b0=D.e9[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.e9[n&255]
b0=D.e9[m>>>8&255]
a9=D.e9[l>>>16&255]
a8=D.e9[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.e9[m&255]
b0=D.e9[l>>>8&255]
o=D.e9[b1>>>16&255]
s=D.e9[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.e9[l&255]
o=D.e9[b1>>>8&255]
b0=D.e9[n>>>16&255]
u=D.e9[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.e9[b1&255]
o=D.e9[n>>>8&255]
s=D.e9[m>>>16&255]
v=D.e9[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.e9[a8&255]^C.ns(D.e9[a9>>>8&255],24)^C.ns(D.e9[b0>>>16&255],16)^C.ns(D.e9[b1>>>24&255],8)^b6[w][0]
m=D.e9[a9&255]^C.ns(D.e9[b0>>>8&255],24)^C.ns(D.e9[b1>>>16&255],16)^C.ns(D.e9[a8>>>24&255],8)^b6[w][1]
l=D.e9[b0&255]^C.ns(D.e9[b1>>>8&255],24)^C.ns(D.e9[a8>>>16&255],16)^C.ns(D.e9[a9>>>24&255],8)^b6[w][2]
b1=D.e9[b1&255]^C.ns(D.e9[a8>>>8&255],24)^C.ns(D.e9[a9>>>16&255],16)^C.ns(D.e9[b0>>>24&255],8)^b6[w][3]
a7=D.oc[n&255]
b0=D.oc[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.oc[l>>>8&255]
a9=D.oc[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.oc[b1>>>8&255]
h=D.oc[n>>>16&255]
g=D.oc[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.oc[l>>>24&255]
s=s[3]
a1=J.o3(A.aH.gaP(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.o3(A.aH.gaP(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.o3(A.aH.gaP(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.o3(A.aH.gaP(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bK3(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.o3(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.o3(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.o3(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.o3(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.e8[a6&255]
v=D.e8[b0>>>8&255]
u=$.qc[8]
t=D.e8[a5>>>16&255]
s=$.qc[16]
r=D.e8[a4>>>24&255]
q=$.qc[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.e8[a4&255]
t=D.e8[a6>>>8&255]
v=D.e8[b0>>>16&255]
w=D.e8[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.e8[a5&255]
v=D.e8[a4>>>8&255]
t=D.e8[a6>>>16&255]
r=D.e8[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.e8[b0&255]
a5=D.e8[a5>>>8&255]
a4=D.e8[a4>>>16&255]
a6=D.e8[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.e8[p&255]
a6=D.e8[b0>>>8&255]
a4=D.e8[n>>>16&255]
a5=D.e8[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.e8[o&255]
a4=D.e8[p>>>8&255]
a7=D.e8[b0>>>16&255]
t=D.e8[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.e8[n&255]
a7=D.e8[o>>>8&255]
a5=D.e8[p>>>16&255]
v=D.e8[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.e8[b0&255]
a7=D.e8[n>>>8&255]
t=D.e8[o>>>16&255]
w=D.e8[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.e8[a6&255]^C.ns(D.e8[b0>>>8&255],24)^C.ns(D.e8[a5>>>16&255],16)^C.ns(D.e8[a4>>>24&255],8)^b5[a9][0]
o=D.e8[a4&255]^C.ns(D.e8[a6>>>8&255],24)^C.ns(D.e8[b0>>>16&255],16)^C.ns(D.e8[a5>>>24&255],8)^b5[a9][1]
n=D.e8[a5&255]^C.ns(D.e8[a4>>>8&255],24)^C.ns(D.e8[a6>>>16&255],16)^C.ns(D.e8[b0>>>24&255],8)^b5[a9][2]
b0=D.e8[b0&255]^C.ns(D.e8[a5>>>8&255],24)^C.ns(D.e8[a4>>>16&255],16)^C.ns(D.e8[a6>>>24&255],8)^b5[a9][3]
a4=D.yQ[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.yQ[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.yQ[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.yQ[o>>>8&255]
i=D.yQ[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.yQ[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.o3(A.aH.gaP(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bO_.prototype={}
C.bO0.prototype={
gM(d){var w=this.a.length
return w},
aoC(){return B.rg(this.a,A.i0,null,null)}}
C.ba0.prototype={
uY(d){return C.hQM(d)}}
C.cr7.prototype={
MF(d){var w=d.w,v=Math.max(1,A.k.dk(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.aa1(v,t+20,u+16,t,u,B.u0(d.x))},
no(d){return!1}}
C.bOT.prototype={
cED(d){if(this.b)throw B.V(B.bd("FontLoader is already loaded"))
this.c.push(d.bB(new C.bOU(),x.E))},
mJ(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.V(B.bd("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mJ)
case 6:w=5
return B.b(p.fx5(f,r),$async$mJ)
case 5:case 3:t.length===s||(0,B.K)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mJ,v)}}
C.avH.prototype={
a5(){return"SystemUiMode."+this.b}}
C.a8n.prototype={
A(d,e){if(e==null)return!1
if(J.bM(e)!==B.b_(this))return!1
return e instanceof C.a8n&&e.a===this.a},
gX(d){return B.bt(B.b_(this),B.wR(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.fIk)return"["+(w+B.e5(this.a))+"]"
return"[ObjectKey "+(w+B.e5(this.a))+"]"}}
C.aVG.prototype={
c1(d){var w=new C.aAy(!0,this.e,null,new B.di(),B.cj())
w.c_()
w.scF(null)
return w},
ca(d,e){var w
x.cQ.a(e)
e.syF(0,!0)
w=this.e
if(!w.A(0,e.ak)){e.ak=w
e.aGa()}}}
C.aAy.prototype={
syF(d,e){return},
gpu(){var w=this.ab$
return w!=null},
gl8(){var w=this.ab$
return w!=null},
Mu(d){var w=d==null?B.h8b(null):d
w.sa4C(this.ak)
return w}}
C.a0N.prototype={
T(){return new C.aIX(B.aX(x.N))},
cRQ(d){return this.d.$1(d)},
cPD(){return this.e.$0()}}
C.aIX.prototype={
Z(){this.a1()
this.P0()},
P0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$P0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cPD(),$async$P0)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f7A(t,s))
case 1:return B.h(u,v)}})
return B.i($async$P0,v)},
YM(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$YM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.T(r).k("a_<1>")
p=B.C(new B.a_(r,new C.f7E(t),q),q.k("J.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f7F(t))
w=3
return B.b(C.anu(p),$async$YM)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f7G(t,s,p))
w=4
return B.b(t.P0(),$async$YM)
case 4:case 1:return B.h(u,v)}})
return B.i($async$YM,v)},
a0Z(d){return this.cp5(d)},
cp5(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a0Z=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f7B(t))
s=J.q(d,"id")
w=3
return B.b(C.bZI(J.k(s==null?"":s)),$async$a0Z)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f7C(t))
w=1
break}q=C.h2T(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cRQ(B.a([q],x.D)),$async$a0Z)
case 4:if(t.c==null){w=1
break}t.m(new C.f7D(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a0Z,v)},
P_(d,e){return this.bKu(0,e)},
bKu(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$P_=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a4(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.f7v(q),r,null,!0,!0,x.y),$async$P_)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f7w(t))
s=s.h(e,"id")
w=4
return B.b(C.ant(J.k(s==null?"":s)),$async$P_)
case 4:if(t.c==null){w=1
break}t.m(new C.f7x(t))
w=5
return B.b(t.P0(),$async$P_)
case 5:case 1:return B.h(u,v)}})
return B.i($async$P_,v)},
cDF(d){var w=B.bi(d),v=w==null?null:w.bV()
if(v==null)return""
return A.im[B.bH(v)-1]+" "+B.bR(v)},
aQs(d,e){var w=null,v=B.n(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.Or,A.n),w,e,w,w,w,w,w,e)},
aQr(d){return this.aQs(d,44)},
b6Q(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Or:u,r=B.n(14),q=B.X(e,t?A.c:A.aA,u,u,u,17),p=x.p
q=B.a([q,M.J0,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aA,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.n(10)
A.d.v(q,B.a([M.J0,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aS,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.byh,u,u,u)],p))}return B.E(B.aC(A.c7,B.df(u,B.B(q,A.m,u,A.b9,A.j,0,u,u),u,u,A.bc,new B.o(u,u,u,r,u,s,A.n),A.hz,u,u,u,A.tN,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f7K(this,d),u,u,u,u,u,u,!1,A.a7),1)},
ciR(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d_.j(0.14):D.XO,n=B.n(18),m=p?A.d_:A.dm
m=B.I(m,A.q,p?1.8:1)
w=this.aQr(A.q7)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aRr,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cV,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aRt,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.Or:q
u=p?q:B.I(A.b_,A.q,1.6)
r=p?D.bOR:q
return B.aC(q,B.df(q,B.B(B.a([w,A.be,t,B.df(q,r,q,q,A.bc,new B.o(q,q,u,q,q,v,A.a5),A.fB,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.bc,new B.o(o,q,m,n,q,q,A.n),A.fB,q,q,A.da,A.bl,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f7z(this,p,d),q,q,q,q,q,q,!1,A.a7)},
cqG(d){var w,v,u,t,s,r=this,q=null,p=J.a4(d),o=p.h(d,"savedAt"),n=r.cDF(J.k(o==null?"":o))
o=B.n(18)
w=B.I(A.dm,A.q,1)
v=r.aQr(A.ND)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aRr,q,q,q)
p=p.h(d,"slides")
p=B.u(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cV,B.d(p+" slides"+t,q,q,q,q,q,q,D.aRt,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.b3q(A.hC,A.bv,"Bring it back",r.r?q:new C.f7H(r,d))
return B.p(q,B.B(B.a([v,A.be,t,p,A.bp,r.b3q(A.e7,A.c9,"Delete",r.r?q:new C.f7I(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.XO,q,w,o,q,q,A.n),q,q,q,A.da,D.bsN,q,q,q)},
b3q(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hx(B.aC(w,B.p(w,B.X(d,v?A.b_:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a5),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a7),w,f,w,w)},
asB(d,e,f){var w=null
return new B.D(D.brR,B.x(B.a([B.X(d,A.b_,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.feS,w,w,w),A.au,B.d(f,w,w,w,w,w,w,D.f7j,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.ca
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aI(d,A.bW,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.b_,i,i,B.n(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aQs(A.yC,46),A.be,D.bz9],t)
if(j.r)s.push(D.ecy)
s.push(B.aH(i,i,i,i,A.ud,i,i,i,new C.f7N(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.n(18)
p=B.I(A.dm,A.q,1)
o=J.a4(h)
q=B.a([A.R,u,new B.D(D.bvl,s,i),B.p(i,B.B(B.a([j.b6Q(0,A.yd,"Save",j.a.c.length),j.b6Q(1,A.NR,"Saved",o.gM(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bup,A.ek,i,i,i)],t)
if(j.x!=null){u=(j.y?A.c9:A.bv).j(0.12)
s=B.n(14)
r=B.I((j.y?A.c9:A.bv).j(0.4),A.q,1)
p=j.y
n=p?A.NE:A.eh
n=B.X(n,p?A.c9:A.bv,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.ab,B.E(B.d(m,i,i,i,i,i,i,A.a83,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bul,A.ik,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.faU,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aC(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fdY,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f7O(j,v),i,i,i,i,i,i,!1,A.a7))
s=B.a([B.B(s,A.m,i,A.e,A.j,0,i,i),A.R],t)
if(j.a.c.length===0)s.push(j.asB(A.q7,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.K)(r),++l)s.push(j.ciR(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.ec6)
else if(j.e==null)s.push(j.asB(A.alp,"Could not reach the database","Check the connection, then open this again."))
else if(o.gam(h))s.push(j.asB(A.oT,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gae(h);r.C();)s.push(j.cqG(r.gR(r)))
A.d.v(u,s)}q.push(new B.dq(1,A.co,B.cw(u,i,X.ait,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc3T()
p=s?i:D.Or
s=s?A.c.j(0.07):i
o=B.n(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b6.j(0.4),A.cB,18)],x.V)
u=u.a
m=u===0
k=B.X(A.yd,m?A.jj:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.buY,B.aC(i,B.df(i,B.B(B.a([k,A.a7u,new B.dq(1,A.co,B.eQ(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.jj:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.dZ),i)],t),A.m,i,A.b9,A.j,0,i,i),i,i,A.bc,new B.o(s,i,i,o,n,p,A.n),A.hz,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a7),i))}else q.push(A.R)
return B.p(i,B.bm(!0,B.x(q,A.m,i,A.e,A.N,0,A.p),!0,!1,A.af,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.b10,i,i,i,i,i,i,i,i)}}
C.ok.prototype={
ah(){return B.F(["id",this.a,"doc",this.b.ah(),"updatedAt",this.c.a6().ac()],x.N,x.z)}}
C.Yx.prototype={
T(){return new C.axx(B.a([],x.k),B.f9(null,x.H))},
ge1(){return this.c}}
C.axx.prototype={
Z(){this.a1()
this.P8()},
P8(){var w=0,v=B.j(x.H),u,t=this,s
var $async$P8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a1M(t.a.c),$async$P8)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cGA(t,s))
case 1:return B.h(u,v)}})
return B.i($async$P8,v)},
cwU(d){var w,v,u,t=this
d.c=new B.S(Date.now(),0,!1)
w=J.qk(t.d,new C.cGD(d))
v=w<0
if(v&&C.hNU(d))return t.f
u=t.d
if(v)J.pC(u,0,d)
else J.aG(u,w,d)
v=x.a
B.fUt(new C.cGE(t),v)
return t.f=t.f.bB(new C.cGF(t,d),v).eR(new C.cGG())},
IA(d,e,f){return this.ccu(0,e,f)},
aYd(d,e){return this.IA(0,e,!1)},
ccu(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$IA=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a6(s,!1).cm(B.e9(new C.cGz(t,e),!1,null,x.H)),$async$IA)
case 3:w=4
return B.b(t.f,$async$IA)
case 4:w=5
return B.b(t.P8(),$async$IA)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IA,v)},
aXu(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dya:d
this.IA(0,new C.ok(w,v,new B.S(Date.now(),0,!1)),!0)},
c3n(){return this.aXu(null)},
adb(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bS(A.K,null,new C.cGH(),r,!1,!1,!0,null,!1,!1,x.g2),$async$adb)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aXu(s)
case 1:return B.h(u,v)}})
return B.i($async$adb,v)},
Iz(d,e){return this.bKm(0,e)},
bKm(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Iz=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.cGu(e),s,null,!0,!0,x.y),$async$Iz)
case 3:if(g!==!0){w=1
break}t.m(new C.cGv(t,e))
w=4
return B.b(t.f,$async$Iz)
case 4:w=5
return B.b(C.agg(t.a.c,e.a),$async$Iz)
case 5:w=6
return B.b(t.P8(),$async$Iz)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Iz,v)},
Da(d){return this.bCs(d)},
bCs(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Da=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bS(A.K,null,new C.cGq(d),r,!0,!0,!1,null,!1,!1,x.N),$async$Da)
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
return B.b(t.aYd(0,d),$async$Da)
case 9:w=5
break
case 7:w=10
return B.b(F.h3q(r,d.b,null),$async$Da)
case 10:w=5
break
case 8:w=11
return B.b(t.Iz(0,d),$async$Da)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$Da,v)},
bY0(){var w,v,u=null,t=[D.dyd,D.dyb,D.dyc],s=new C.cGx(),r=B.n(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d5.j(0.4),A.eV,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aT(999,999)
n.push(B.p(u,new B.y(D.dhI[w],u,A.ot,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bp(v,v,v,v),u,u,A.n),u,u,u,u,A.o3,u,u,u))}return B.p(u,B.B(B.a([B.E(B.x(B.a([D.fDM,A.O,B.bV(A.bA,n,A.br,6,6),A.aR,B.aC(u,B.p(u,D.eQH,A.f,u,u,new B.o(A.c,u,u,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cJ,10)],q),u,A.n),u,u,u,u,U.aiR,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cGw(this),u,u,u,u,u,u,!1,A.a7)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a7(130,110,new B.an(A.A,u,A.aa,A.r,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bX9,A.n),u,u,u,u,D.bvv,u,u,u)},
bCq(d){var w,v=null,u=d.b.d.length,t=B.n(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cB,14)],x.V),r=x.p
s=B.p(v,B.bw(B.n(6),new B.an(A.W,v,A.b1,A.r,B.a([B.eQ(A.A,F.ao1(d.b),A.f,A.bV),D.ei4,B.ao(v,B.aC(v,B.p(v,D.bPF,A.f,v,v,D.b1X,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cGl(this,d),v,v,v,v,v,v,!1,A.a7),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.f4F,v,v,v)
w=u===1?"":"s"
return B.aC(v,B.x(B.a([new B.fK(0.6470588235294118,s,v),A.O,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fb5,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cGm(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cGn(this,d),v,v,v,v,v,v,!1,A.a7)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eF(B.a([new B.D(I.ahn,B.hx(B.aC(s,B.p(s,A.ao4,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b6.j(0.5),A.J,12)],x.V),E.w5,A.a5),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc4E(),s,s,s,s,s,s,!1,A.a7),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.n5,s,s,s,!0,s,s,s,s,s,D.fDQ,s,s,s,1,s,!0)
if(t.e)r=D.b5l
else{w=t.bY0()
v=B.a([D.fpp,A.ab],r)
if(J.cJ(t.d)){u=B.n(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.f46,s,s,s),A.f,s,s,new B.o(D.ba4,s,s,u,s,s,A.n),s,s,s,s,A.xW,s,s,s))}r=B.a([new B.nR(A5.Z9,new B.ma(w,s),s),new B.nR(D.buS,new B.ma(B.B(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cn(t.d))r.push(D.eXc)
else r.push(new B.nR(D.bun,B.OO(new B.oq(new C.cGI(t),J.ad(t.d),!0,!0,!0,0,B.t0(),s),D.b4D),s))
r=B.vz(0,s,A.r,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c8(q,D.b8U,r,s,!1,!1,s,s)}}
C.Yv.prototype={
T(){return new C.axt(B.a([],x.bx))},
TO(d){return this.d.$1(d)}}
C.aEP.prototype={}
C.axt.prototype={
b0d(d,e,f){var w=$.aw(),v=new B.as(new B.bb(d,A.b5,A.aO),w),u=this.gaYc()
v.aQ(0,u)
w=new B.as(new B.bb(e,A.b5,A.aO),w)
w.aQ(0,u)
return new C.aEP(v,w,f)},
E0(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a7(0)
v.x=B.cM(A.pW,new C.cFP(v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a1()
w=m.a.c.b
v=$.aw()
u=new B.as(new B.bb(w.a,A.b5,A.aO),v)
t=m.gaYc()
u.aQ(0,t)
m.d!==$&&B.aP()
m.d=u
u=new B.as(new B.bb(w.b,A.b5,A.aO),v)
u.aQ(0,t)
m.e!==$&&B.aP()
m.e=u
u=new B.as(new B.bb(w.c,A.b5,A.aO),v)
u.aQ(0,t)
m.f!==$&&B.aP()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.K)(u),++q){p=u[q]
o=new B.as(new B.bb(p.a,A.b5,A.aO),v)
o.aQ(0,t)
n=new B.as(new B.bb(p.b,A.b5,A.aO),v)
n.aQ(0,t)
r.push(new C.aEP(o,n,p.c))}if(r.length===0)r.push(m.b0d("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a7(0)
if(r.y){r.a.c.b=r.gp9()
q=r.a
q.TO(q.c)}q=r.d
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
s.P$=0}r.a2()},
gp9(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.mt(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rl(n,w,v,t,u)},
AK(){var w=0,v=B.j(x.H),u=this,t
var $async$AK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a7(0)
u.y=!1
u.a.c.b=u.gp9()
t=u.a
w=2
return B.b(t.TO(t.c),$async$AK)
case 2:return B.h(null,v)}})
return B.i($async$AK,v)},
c4C(){this.m(new C.cFO(this))
this.E0()},
aXb(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cFR(w,d,v))
w.E0()},
c4D(d,e){var w=A.d.cA(this.w,e)
this.m(new C.cFZ())
this.E0()
$.aW.x1$.push(new C.cG_(w))},
Qj(d){return this.ciH(d)},
ciH(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qj=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i2().lb(80,1400,A.eJ),$async$Qj)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fn(),$async$Qj)
case 8:p=f
o=q.b.toLowerCase()
n=J.ahN(o,".png")?"image/png":"image/jpeg"
r.m(new C.cFS(d,n,p))
r.E0()
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
return B.i($async$Qj,v)},
xH(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hqp(r,t.gp9()),$async$xH)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cFQ(t,s))
t.E0()
case 1:return B.h(u,v)}})
return B.i($async$xH,v)},
ciZ(d){var w,v=this,u=null,t=F.fBa(d.c)
if(t==null)return new B.bI(A.a3,u,u,B.hn(D.bIW,D.frT,new C.cFU(v,d),u),u)
w=x.p
return new B.D(A.cw,new B.an(A.W,u,A.aa,A.r,B.a([B.bw(B.n(12),B.fP(t,A.A,u,u,A.ci,A.bV,!0,140,!1,u,1/0),A.aq),B.ao(u,B.B(B.a([v.b3r(A.kw,new C.cFV(v,d)),A.bp,v.b3r(A.cD,new C.cFW(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b3r(d,e){var w=null
return B.aF(!1,A.a1,!0,w,B.aL(!1,w,!0,new B.D(A.hA,B.X(d,A.c,w,w,w,18),w),A.cL,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aW,0,w,w,A.cL,w,w,A.ag)},
IB(){var w=0,v=B.j(x.H),u,t=this,s
var $async$IB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.AK(),$async$IB)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.h3q(s,t.gp9(),new C.cFY(t)),$async$IB)
case 4:case 1:return B.h(u,v)}})
return B.i($async$IB,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eF(B.a([new B.D(A.pX,B.hn(D.bNC,D.fxT,n.gawj(),B.fy(m,m,m,m,m,m,m,m,m,m,m,A.bM,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aH(m,m,m,m,A.ao3,m,m,m,new C.cG0(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.WY,m,1,m,m,m,!1,m,!1,E.n5,m,m,m,!0,m,m,m,m,m,D.fsK,m,m,m,1,m,!0),j=At.aUn(O.li,A.c,Ad.VS,A.o8,D.ftt,n.gc4B()),i=B.n(18),h=n.gawi(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.jw,12)],x.V)
g=B.aC(m,B.p(m,new B.a7(92,142.1818181818182,B.eQ(A.A,F.ao1(n.gp9()),A.f,A.dv),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a7)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.eo,B.E(B.x(B.a([D.fFn,A.au,B.d(F.h1W(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.fgA,m,m,m),A.R,B.dn(E.anm,E.aSe,h,B.bn(A.d5,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.WY,m,m,i,m,m,A.n),m,m,m,m,A.bl,m,m,m)
h=n.d
h===$&&B.c()
h=B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),h,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.n(12),A.dh),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.op,!0,A.a4,m,A.an,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),w,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.n(12),A.dh),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aB,h,A.O,w,A.O,B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),g,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.n(12),A.dh),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m),A.aR],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aT(16,16)
u=new B.az(O.li.j(0.18),1,A.q,-1)
t=v+1
s=B.aH(m,m,m,m,D.bMk,m,m,m,v===0?m:new C.cG1(n,v),m,m,m,m,"Move up",A.ce)
r=i.length
q=B.aH(m,m,m,m,D.bSD,m,m,m,v===r-1?m:new C.cG2(n,v),m,m,m,m,"Move down",A.ce)
r=r===1?m:new C.cG3(n,v)
p=new B.aT(12,12)
o=new B.aT(12,12)
g.push(B.p(m,B.x(B.a([new B.cl(A.aP,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.y("Page "+t,m,D.fh7,m,m,m,m,m,m,m,m,m),A.b7,s,q,B.aH(m,m,m,m,B.X(A.e7,A.oN,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.ce)],l),m),B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),i[v].a,m,m,m,m,m,2,new B.e3(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bp(p,p,p,p),A.dh),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.ck,!0,A.a4,m,A.an,m,m,m,m),A.am,n.ciZ(i[v]),B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),i[v].b,m,m,m,m,m,2,new B.e3(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bp(o,o,o,o),A.dh),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.n5,m,new B.bO(u,u,u,u),new B.bp(w,w,w,w),m,m,A.n),m,m,new C.a8n(h),A.e6,D.bt1,m,m,m))}return B.on(!0,B.c8(k,E.afB,B.cw(g,m,D.btt,m,m,A.ah,!1),m,!1,!1,j,m),new C.cG4(n),x.C)}}
C.axv.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.c9:E.n5,q=B.n(16),p=B.n(16),o=s?A.av.j(0.08):A.c.j(0.04)
s=s?A.av.j(0.16):A.d5.j(0.22)
w=B.n(12)
v=x.p
return new B.D(A.eI,B.aF(!1,A.a1,!0,t,B.aL(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.be,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bC,B.d(u.e,t,t,t,t,t,t,D.aQN,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.X(A.ey,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bl,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ag),t)}}
C.aqg.prototype={
T(){return new C.aDB()}}
C.aDB.prototype={
Z(){this.a1()
this.Zq()},
bv(d){this.bG(d)
if(d.c!=this.a.c)this.a0O()},
a0O(){var w=0,v=B.j(x.H),u=this,t
var $async$a0O=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dS(t,x.H),$async$a0O)
case 2:u.d=null
if(u.c!=null)u.m(new C.eaQ(u))
w=3
return B.b(u.Zq(),$async$a0O)
case 3:return B.h(null,v)}})
return B.i($async$a0O,v)},
Zq(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Zq=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d0(n,"http://")||J.d0(n,"https://")||J.d0(n,"data:")){o=B.Y9(B.cE(n,0,null),new B.Pa(!0))
r.d=o}else{o=B.fn("unsupported video ref")
throw B.V(o)}w=7
return B.b(o.ik(0).d7(0,A.pS),$async$Zq)
case 7:if(r.c==null){w=1
break}r.d.tj(!1)
r.m(new C.eaO(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ab(m)
$.am.$1("[kiapo video] "+B.u(q))
if(r.c!=null)r.m(new C.eaP(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Zq,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
c7m(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.ha(0)
w.m(new C.eaR(w))}else{v.pT(0)
w.m(new C.eaS(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bI
n=B.n(8*n.d)
m=B.a([D.jf.j(0.92),D.KV.j(0.95)],x.O)
w=B.I(A.c0.j(0.55),A.q,1)
v=p.a
u=v.d
t=B.X(A.qa,A.c0,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c_(B.av(B.x(B.a([t,new B.a7(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.P,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.N,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a8(A.az,A.aC,A.x,m,o,o),A.n),A.bf)}if(p.f)return B.av(B.X(A.amE,A.aA,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b6a
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.n(6*n.d)
m=B.a([B.eQ(A.A,new B.a7(r,q,new B.A9(s,o),o),A.r,A.bV)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.av(B.p(o,B.X(A.iJ,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a5),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aC(o,B.bw(n,new B.an(A.W,o,A.b1,A.r,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc7l(),o,o,o,o,o,o,!1,A.a7)}}
C.xx.prototype={
a5(){return"NgmyHatiLayoutKind."+this.b}}
C.jo.prototype={}
C.ade.prototype={
B(d){return B.oT(new C.dYQ(this,B.P(d).ax.a===A.I,d),!0,0.72,0.9,0.5,!1,null)}}
C.acD.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.I,s=B.n(18),r=B.n(18),q=B.I(D.jf.j(t?0.35:0.4),A.q,1),p=t?D.Lv:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cB,14)],o),m=B.n(10),l=B.I(A.c0.j(0.5),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],o)
w=this.c
o=B.E(B.p(u,new B.fK(0.5625,C.i5f(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.ajk,u,u,u,u),1)
m=D.jf.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.jf,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aF(!1,A.a1,!0,u,B.aL(!1,s,!0,B.p(u,B.x(B.a([o,B.p(u,B.x(B.a([l,A.cV,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aA:D.bgf,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bO(new B.az(m,1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,D.ahD,u,u,u)],v),A.ai,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ag)}}
C.xA.prototype={
a5(){return"NgmyMarriageLayoutKind."+this.b}}
C.nH.prototype={}
C.bj4.prototype={
Zz(d){var w=null
return new B.bI(A.a3,w,w,B.Bg(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.n(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
c7O(){return this.Zz(1)},
awX(d){var w=null,v=B.n(8),u=B.I(A.i2,A.q,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.ady,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.B(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.i2,A.q,1.6),v,v,v,A.a5),v,22,v,v,v,v,v,22),B.dW(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.i2,A.q,1.6),v,v,v,A.a5),v,22,v,v,v,v,v,22),new B.v(-8.36,0))],u),A.m,v,A.b9,A.j,0,v,v),A.au,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a6,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.am,w.awX("TAARIFA ZA WANANDOA"),A.am,w.c7O(),A.cV,w.Zz(0.9),A.cV,w.Zz(0.7),A.O,w.awX("TAMKO LA MAKUBALIANO"),A.fF,w.Zz(1),A.cV,w.Zz(0.95),A.O,w.awX("MASHAHIDI"),A.b7,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.adh.prototype={
B(d){return B.oT(new C.eg4(B.P(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.aeY.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.I,p=B.n(18),o=B.n(18),n=B.I(A.ay.j(q?0.35:0.4),A.q,1),m=q?D.bfR:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cB,14)],l),j=B.n(10),i=B.I(A.ay.j(0.5),A.q,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],l)
w=this.c
v=C.h2r(w.a)
if(v==null)v=A.d.gI(D.QY)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.p(r,new B.fK(0.5625,new B.an(A.W,r,A.b1,A.r,B.a([B.bZ(0,B.fP(C.h2q(v.d),A.A,r,r,A.ci,A.bV,!0,r,!1,r,r),0,0,0),new B.D(A.aik,new C.bj4(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.ajk,r,r,r,r),1)
j=A.ay.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:Z.Lw,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aF(!1,A.a1,!0,r,B.aL(!1,p,!0,B.p(r,B.x(B.a([l,B.p(r,B.x(B.a([i,A.cV,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aA:D.b9o,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bO(new B.az(j,1,A.q,-1),A.Y,A.Y,A.Y),r,r,r,A.n),r,r,r,r,D.ahD,r,r,r)],s),A.ai,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ag)}}
C.kU.prototype={
a5(){return"NgmyMarriagePaperStyle."+this.b}}
C.a7P.prototype={}
C.VH.prototype={
T(){var w=$.aw()
return new C.aDU(new B.cs(null,x.A),new B.as(A.as,w),new B.as(A.as,w),B.mC(0,null,null),A.d.gI(D.a32),D.dIv,B.a([],x.L),B.a([],x.gE))}}
C.aDU.prototype={
Z(){var w,v=this
v.a1()
v.w=v.a.c
v.z=new C.zv(C.fF3(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
w=x.a
C.fE_().bB(new C.ejm(v),w)
$.qV().jH(0,"assets/images/ngmy_logo.png").bB(new C.ejn(v),w).eR(new C.ejo())},
q(){var w=this,v=w.e,u=$.aw()
v.U$=u
v.P$=0
v=w.f
v.U$=u
v.P$=0
w.r.q()
w.a2()},
ah5(d){var w=null,v=this.c
if(v!=null)v.J(x.q).f.S(B.b2(w,w,w,w,w,A.r,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.T,w,w,w,w,w,w,w,w,w,w))},
IU(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$IU=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i2().lb(88,1600,A.eJ),$async$IU)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fn(),$async$IU)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hqF(m,p),$async$IU)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bD4(new B.pR(o,1),m),$async$IU)
case 10:if(r.c!=null)r.m(new C.eiZ(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ab(k)
r.ah5("Could not open that picture. "+B.u(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$IU,v)},
WC(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$WC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hqF(s,q),$async$WC)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bD4(new B.pR(r,1),s),$async$WC)
case 4:if(t.c!=null)t.m(new C.eiV(t,r))
case 1:return B.h(u,v)}})
return B.i($async$WC,v)},
ae0(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$ae0=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.ej5(q))
t=4
q.a.toString
p=C.i9H()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$ae0)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ej6(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ab(i)
q.ah5(B.u(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ej7(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ae0,v)},
ZE(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$ZE=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.ej0(q,i))
t=4
q.a.toString
p=C.i9G()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$ZE)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ej1(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ab(g)
if(q.c!=null)q.m(new C.ej2(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ej3(q))
$.aW.x1$.push(new C.ej4(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ZE,v)},
c83(d){this.m(new C.ej_(this,d))},
Eh(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Eh=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.eiX(q))
t=4
w=7
return B.b($.aW.gmF(),$async$Eh)
case 7:w=8
return B.b(B.bN(A.nd,null,x.H),$async$Eh)
case 8:k=$.aW.ak$.x.h(0,q.d)
p=k==null?null:k.gba()
if(!(p instanceof B.q0))throw B.V("The page is not ready yet.")
w=9
return B.b(p.m1(1800/p.gY(0).a),$async$Eh)
case 9:o=e
w=10
return B.b(o.hv(A.h0),$async$Eh)
case 10:n=e
if(n==null)throw B.V("Could not make the picture.")
w=11
return B.b(A6.agj(J.eX(A.dD.gaP(n)),"ngmy_news.png","image/png"),$async$Eh)
case 11:m=e
q.ah5(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
q.ah5(B.u(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eiY(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Eh,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.l2,a2,a2,a2,new C.ejd(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bO7,a2,a2,a2,new C.eje(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.p1,a2,a2,a2,a4?a1.gaZq():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eF(v,a2,a2,!0,!0,A.AZ,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eQR,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eV,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fK(0.7142857142857143,B.eQ(A.A,new B.ex(new C.b0F(t,s,r,a1.x,a2),a1.d),A.f,A.dv),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,H.zQ,a2,a2,a2)
t=a1.as?a2:a1.gc82()
t=B.a([B.E(B.dn(D.bOS,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ck,a2,a2,a2),t,B.bn(D.tt,a2,a2,a2,A.c,A.fR,a2,a2,new B.b7(B.n(14),P.v4),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bw(B.n(10),B.fP(r,A.A,a2,a2,A.ci,A.bV,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.at,r,B.aH(a2,a2,a2,a2,D.bLD,a2,a2,a2,a1.as?a2:a1.gbIY(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,H.zQ,a2,a2,a2)
q=B.aM(a2,A.U,!1,a2,!0,A.r,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aSj("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.aj,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dp,!0,A.a4,a2,A.an,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.dc7[o]
p.push(B.mK(a2,D.tt,new B.y(n.a,a2,A.pi,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hG,new C.ejf(a1,n),a2,a2,P.v4,a2))}p=B.bV(A.bA,p,A.br,6,8)
m=a1.Q
m=B.bV(A.bA,B.a([D.fDZ,A.be,B.j9(a2,a2,a2,D.foa,a2,new C.ejg(a1),m==="en",a2,a2,a2,a2),A.ab,B.j9(a2,a2,a2,D.fo5,a2,new C.ejh(a1),m==="sw",a2,a2,a2,a2)],w),A.t2,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,H.zQ,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.db(D.a32,0,B.dI(10,"count",x.S),j),h=i.$ti,i=new B.bQ(i,i.gM(0),h.k("bQ<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aQN(g==null?h.a(g):g))}k=B.cw(k,a2,a2,a2,a2,A.aP,!1)
i=B.a([],w)
for(j=B.db(D.a32,10,a2,j),h=j.$ti,j=new B.bQ(j,j.gM(0),h.k("bQ<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aQN(g==null?h.a(g):g))}j=B.cw(i,a2,a2,a2,a2,A.aP,!1)
i=a1.as?a2:a1.gc85()
h=B.n(18)
v=B.a([new B.ac(0,A.G,A.bD.j(0.4),A.J,18)],v)
v=B.a([u,A.aB,new B.D(A.cw,s,a2),t,A.aB,new B.D(A.cw,r,a2),q,A.O,p,A.R,m,A.aB,new B.D(A.cw,l,a2),new B.a7(a2,78,k,a2),A.O,new B.a7(a2,78,j,a2),A.aR,B.aC(a2,B.p(A.A,B.B(B.a([D.bOM,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fS,a2,a2,a2)],w),A.m,a2,A.e,A.N,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.uf,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a7)],w)
if(a4){u=B.a([A.dY,B.B(B.a([D.dt2,A.at,D.bzt],w),A.m,a2,A.e,A.j,0,a2,a2),A.O],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.K)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a8:A.a3
q=e?A.b6.j(0.35):D.tt
p=new B.aT(16,16)
d=new B.az(A.bE,1,A.q,-1)
u.push(new B.bI(r,a2,a2,B.p(a2,new B.y(f.b,a2,D.feE,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A7.VG,new B.o(q,a2,new B.bO(d,d,d,d),new B.bp(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cw,A.ik,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cZk[o]
t.push(B.mK(a2,D.tt,new B.y(a0,a2,A.Je,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hG,new C.eji(a1,a0),a2,a2,P.v4,a2))}u.push(B.bV(A.bA,t,A.br,6,8))
u.push(A.R)
t=B.E(B.aM(a2,A.U,!1,a2,!0,A.r,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aSj("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.aj,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.ejj(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dp,!0,A.a4,a2,A.an,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc84()
u.push(B.B(B.a([t,A.ab,B.HJ(A.yH,s,B.nB(a2,A.b6,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.aB)
t=a1.as?a2:a1.gaZq()
u.push(B.dn(A.p1,D.fzv,t,B.bn(A.cS,a2,a2,a2,a2,A.IZ,a2,a2,new B.b7(B.n(16),A.Y),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cw(v,a1.r,A.ai6,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.n(20)
s=B.I(E.jX.j(0.5),A.q,1)
v.push(B.bZ(0,B.en(B.av(B.p(a2,B.B(B.a([E.a7v,A.eo,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iP,a2,a2,a2)],w),A.m,a2,A.e,A.N,0,a2,a2),A.f,a2,a2,new B.o(E.AR,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bvN,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c8(a3,A.AZ,new B.an(A.W,a2,A.aa,A.r,v,a2),a2,!1,!1,a2,a2)},
aSj(d){var w=null
return B.bs(w,new B.b4(4,B.n(14),A.Y),w,A.eR,w,w,w,w,!0,w,w,w,w,w,w,D.tt,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A0.J9,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aQN(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.n(12),q=B.b0(d.f),p=s?A.bD:A.bE
p=B.I(p,A.q,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.kW,t,t,t,t),A.fF],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bs4,t,t,t,t))
w.push(A.cV)
w.push(new B.D(A.jp,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aC(t,B.p(t,B.x(w,A.m,t,A.b9,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.ij,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eiW(this,d),t,t,t,t,t,t,!1,A.a7)}}
C.zv.prototype={
bbN(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.zv(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cI7(d){var w=null
return this.bbN(w,w,w,w,w,d,w,w,w,w)},
ah(){var w=this
return B.F(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aCo(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.ccZ(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aV(g);v.C();){u=v.gR(v)
if(A.a.i(B.u(u)).length!==0)w.push(A.a.i(B.u(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fH(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.M(w,new C.ccX(),B.T(w).k("M<1,m>")).c0(0,new C.ccY())
t=B.C(w,w.$ti.k("J.E"))}else t=k
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
return this.bbN(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gFt(d){return this.f}}
C.tn.prototype={
a5(){return"NewsLayout."+this.b}}
C.Bu.prototype={
a5(){return"NewsFrame."+this.b}}
C.lg.prototype={}
C.b0F.prototype={
rm(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aZs(d,e,f,g){return this.rm(d,e,null,1.25,f,A.bo,g)},
PF(d,e,f,g,h){return this.rm(d,e,f,1.25,g,A.bo,h)},
ax2(d,e,f,g,h){return this.rm(d,e,null,f,g,A.bo,h)},
ax1(d,e,f,g,h){return this.rm(d,e,f,g,0,A.bo,h)},
aZu(d,e,f,g,h){return this.rm(d,e,null,f,0,g,h)},
c89(d,e,f,g,h,i){return this.rm(d,e,f,g,0,h,i)},
ax0(d,e,f,g){return this.rm(d,e,null,f,0,A.bo,g)},
ae3(d,e,f){return this.rm(d,e,null,f,0,A.bo,A.cN)},
aZt(d,e,f,g,h){return this.rm(d,e,f,g,0,h,A.cN)},
c88(d,e,f,g){return this.rm(d,e,null,f,0,g,A.cN)},
c87(d,e,f,g){return this.rm(d,e,f,g,0,A.bo,A.cN)},
ae4(d,e,f,g,h,i){return this.rm(d,e,f,g,h,A.bo,i)},
aZr(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.kk(new B.es(d,u,u,A.cO,u,u,u,u,u,u,new B.H(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a4,A.c6,new B.jv(1),u,u,h,u,A.c5,u)
v.wE(g)
if(!v.b.a.c.gaE3())return w
w-=2}return j},
ae1(d,e,f,g,h,i,j,k){return this.aZr(d,e,f,g,h,i,j,k,A.bo)},
aza(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a7(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.m,w,A.e,A.j,0,A.p)},
az9(d){return this.aza(null,!1,d)},
agU(d,e){return this.aza(null,d,e)},
cpP(d,e){return this.aza(d,!1,e)},
gb0B(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaUX(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
Ow(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.ae1(w.gaUX(),u,A.P,d,g,h,i,1.02)
return B.d(w.gaUX(),v,g,A.a2,v,v,v,w.ax1(u,t,f,1.02,A.P),e,v,v)},
aV1(d){return this.Ow(d,A.L,null,2,78,30)},
abr(d,e,f,g,h){return this.Ow(d,e,null,f,g,h)},
bXT(d,e,f,g,h){return this.Ow(d,A.L,e,f,g,h)},
bXS(d,e,f){return this.Ow(d,A.L,null,e,f,30)},
RA(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bI
w=v.d.as
return new B.D(A.jH,B.d(s,u,g,A.a2,u,u,u,v.aZt(w,v.aZr(t,w,A.cN,d,g,h,15,1.2,A.cF),f,1.2,A.cF),e,u,u),u)},
b6v(d){return this.RA(d,A.L,null,3,24)},
aAG(d,e,f,g){return this.RA(d,e,null,f,g)},
cxn(d,e,f){return this.RA(d,A.L,e,3,f)},
b6w(d,e){return this.RA(d,e,null,3,24)},
cxl(d,e){return this.RA(d,A.L,null,3,e)},
cxm(d,e,f){return this.RA(d,e,null,3,f)},
aqB(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.fY,B.d(u.toUpperCase(),v,v,v,v,v,v,w.PF("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
Nt(){return this.aqB(null,!0)},
aqA(d){return this.aqB(null,d)},
bER(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bI
return new B.D(A.i4,new B.a7(d,w,B.d(v,w,2,A.a2,w,w,w,this.c88(this.d.as,13.5,1.2,A.cF),e,w,w),w),w)},
vu(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.S(Date.now(),0,!1),i=m.gb0B(),h=A.o.an(j.bA(B.c1(B.bA(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hYe(Math.max(1,B.bA(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aZs(k,12,1.2,A.P),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.ae1(i,v,A.P,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.ae1(i.toUpperCase(),v,A.P,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.x(B.a([B.p(l,B.B(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eF,l,l,l,m.ae4(v,u*0.84,h,1,1,A.P),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.O,B.B(B.a([B.d(C.bCk(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hE,A.j,0,l,l),A.am,m.agU(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.B(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.eo,B.E(B.d(i,l,1,A.eF,l,l,l,m.ax0(v,u*0.9,1,A.P),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.R,B.B(B.a([B.d(C.bCk(j),l,l,l,l,l,l,m.PF(k,13,B.b0(h),0.6,A.P),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hE,A.j,0,l,l),A.O,m.cpP(B.b0(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb0B()
v=B.d("NGMY",l,l,l,l,l,l,m.ax2(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.n(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.B(B.a([v,A.ab,B.eJ(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.rm(k,r*0.72,o,1.05,-0.5,A.cF,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b7,new B.dq(1,A.co,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.ae4(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.P),A.dN,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.O,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hE,A.j,0,l,l)
t=m.agU(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.ax0(v,u,1,A.P),A.L,l,l)
q=a0?4:8
return B.x(B.a([w,A.au,t,new B.a7(l,s,l,l),v,new B.a7(l,q,l,l),m.agU(!0,1.4),A.au,B.d(C.bCk(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.au,m.az9(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.ax2(v,u,1,3,A.P),A.L,l,l),A.O,m.agU(!0,1.2),A.au,B.B(B.a([B.d(C.bCk(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hE,A.j,0,l,l),A.au,m.az9(3)],h),A.m,l,A.e,A.j,0,A.p)}},
acz(d){return this.vu(d,!1)},
ae2(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.n(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.ae4("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
c86(d,e){return this.ae2(d,null,e,null)},
aX3(d){var w=null,v=new B.S(Date.now(),0,!1),u=A.o.E(B.dk(v),12)===0?12:A.o.E(B.dk(v),12),t=B.b0(this.d.w).j(0.75),s=this.ax1("Roboto",15,t,1,A.cx),r=B.X(E.akM,t,w,w,w,18),q=A.a.ap(A.p5[B.bH(v)-1],0,3),p=A.a.aV(A.o.u(B.h2(v)),2,"0"),o=B.dk(v)>=12?"PM":"AM"
return B.B(B.a([r,A.ab,B.d(q+" "+B.bR(v)+", "+B.bA(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fO,w,w,w,1),B.X(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
avM(){return this.aX3(A.mz)},
b3F(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.ae4("Roboto",this.ae1(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
azd(d,e,f){return this.b3F(d,e,f,30)},
aAJ(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bI
return new B.D(A.vt,B.d(v,w,e,A.a2,w,w,w,this.c87("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b6A(d){return this.aAJ(d,3,22)},
cxy(d,e){return this.aAJ(d,e,22)},
tB(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fP(r,A.A,s,s,A.ci,A.bV,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.Dn(D.byy,w,s)
if(v==="sepia")w=new B.Dn(D.byx,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.av(B.X(A.y8,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c_(s,new B.o(s,s,s,s,s,new B.bT(A.A,0.95,A.x,s,0,B.a([A.K,A.WU.j(0.38)],x.O),s,s),A.n),A.bf))
return new B.a7(d,e,new B.an(A.W,s,A.b1,A.r,v,s),s)},
qo(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b0(j),A.q,3)
j=B.I(B.b0(j),A.q,1)
return B.p(k,B.p(k,l.tB(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.ek,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lS,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.e8C,14)],x.V)
v=l.tB(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eJ(A.A,-0.035,B.p(k,B.x(B.a([v,B.E(B.av(B.d(u,k,2,A.a2,k,k,k,l.aZt(j.as,13.5,D.baW,1.1,A.cF),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.bed,k,k,k,w,k,A.n),k,e,k,k,D.bto,k,k,d),k)
case 3:w=B.n(30)
j=B.I(B.b0(j.x),A.q,5)
return B.p(k,B.bw(B.n(25),l.tB(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b0(j.x),A.q,6)
j=B.b0(j.f)
v=t-10
return new B.a7(d,e,B.av(B.p(k,B.hZ(l.tB(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a5),k,t,k,k,A.lS,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.e8s,10)],x.V)
return B.eJ(A.A,0.025,new B.a7(d,e,new B.an(A.W,k,A.aa,A.f,B.a([B.bZ(0,B.p(k,l.tB(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.rc,k,k,k),0,0,0),B.ao(k,B.eJ(A.A,-0.6,B.p(k,k,A.f,A.bM.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eJ(A.A,-0.6,B.p(k,k,A.f,A.bM.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a7(d,e,B.b3(B.nw(l.tB(d,e),A.aq,D.h2p),new C.bce(j,k),k,k,A.aw),k)
case 7:j=x.p
w=B.a([l.tB(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bm(u));++n){m=new B.aT(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bN,k,k,new B.bp(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cL(0,q,0,p,k,k,new B.cl(A.aP,A.qf,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.W,k,A.b1,A.r,w,k),A.f,A.eb,k,k,k,e,k,k,D.bxO,k,k,d)
case 8:w=d/2
v=B.wZ(A.hf,new B.aT(w,w))
j=B.I(B.b0(j.x),A.q,5)
w-=5
return B.p(k,B.bw(B.wZ(A.hF,new B.aT(w,w)),l.tB(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fQ,22)],x.V)
return B.p(k,l.tB(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bR,k,k,d)
case 10:return new B.a7(d,e,B.nw(l.tB(d,e),A.aq,D.h8L),k)
case 0:j=B.I(B.b0(j.w),A.q,2.4)
return B.p(k,l.tB(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.ek,k,k,d)}},
aOk(d,e){return this.d.e===D.RB?A.bI:this.bER(d,e)},
Wa(d){return this.aOk(d,A.L)},
gaA_(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
azZ(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.E(B.av(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aZu(v.Q,19,1.15,A.cF,A.P),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.PF("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.au)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.ae3(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jA(B.x(q,A.F,n,A.e,A.j,0,A.p),A.r,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bl,n,n,d)},
gcge(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a98(d,e,f,g){return B.cq(new C.cd_(this,e,d,f,g))},
a97(d){return this.a98(d,22,!0,18)},
Wl(d,e){return this.a98(d,22,!0,e)},
aPm(d,e,f){return this.a98(d,22,e,f)},
bGT(d,e,f){return this.a98(d,e,!0,f)},
b9v(d,e,f,g){return B.cq(new C.cd0(this,e,d,g,!0,f))},
cf2(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.acz(824),A.aB,k.aV1(824),k.b6v(824),A.O,k.Nt(),A.ac,B.av(k.qo(824,360),j,j,j),k.Wa(824),A.ac,B.E(k.a97(3),1)],x.p),A.ai,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.x(B.a([k.acz(824),A.aR,new B.a7(j,350,B.B(B.a([new B.a7(440,j,B.x(B.a([k.abr(440,A.bi,3,62,26),k.aAG(440,A.bi,2,20),A.b7,k.aqB(B.b0(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.J_,B.x(B.a([k.qo(362,310),k.Wa(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.R,k.az9(2),A.ac,B.E(k.a97(3),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 2:w=k.vu(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.bXT(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cxn(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.x(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.Bk,j,j,j)
u=B.a([B.av(k.qo(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.RB){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.ax1(i,14,A.c,1.15,A.P),j,j,j),A.f,h,j,j,j,j,j,j,A.lQ,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.ac,v,A.ac,new B.an(A.W,j,A.aa,A.r,u,j),A.O,k.Nt(),A.R,B.E(k.Wl(2,21),1)],t),A.ai,j,A.e,A.j,0,A.p)
case 3:h=k.vu(824,!0)
w=k.qo(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.ac,new B.an(A.b4,j,A.aa,A.r,B.a([w,B.ao(0,B.p(j,k.Ow(780,A.bi,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a8(A.b0,A.b4,A.x,v,j,j),A.n),j,j,j,j,D.bw5,j,j,j),j,j,0,0,j,j)],u),j),k.b6w(824,A.bi),A.O,k.Nt(),A.R,B.E(k.a97(3),1)],u),A.ai,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.x(B.a([k.acz(824),A.aB,k.aV1(824),k.b6v(824),A.O,k.Nt(),A.ac,B.E(k.b9v(3,300,B.x(B.a([k.qo(300,300),k.Wa(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.ai,j,A.e,A.j,0,A.p)
case 5:w=k.vu(824,!0)
v=x.p
u=B.x(B.a([k.abr(440,A.bi,3,62,26),k.aAG(440,A.bi,2,20),A.b7,k.aqA(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.x(B.a([w,A.by,new B.a7(j,400,B.B(B.a([new B.a7(440,j,u,j),A.aON,new B.D(A.i4,k.qo(364,h.e===D.RB?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.aB,B.E(k.Wl(2,21),1)],v),A.ai,j,A.e,A.j,0,A.p)
case 6:return B.x(B.a([k.acz(824),A.ac,k.bXS(824,2,70),k.cxl(824,21),A.O,k.Nt(),A.ac,B.E(k.b9v(3,340,B.av(k.qo(340,340),j,j,j),350),1)],x.p),A.ai,j,A.e,A.j,0,A.p)
case 7:w=k.vu(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bCk(new B.S(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.PF(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bl,j,j,j),A.aB],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aZu(h.Q,24,1.15,A.cF,A.P),j,j,j))
v.push(A.b7)
if(k.gaA_())v.push(k.azZ(230,250))
return B.x(B.a([w,A.aB,B.E(B.B(B.a([new B.a7(230,j,B.x(v,A.ai,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.ahB,j,j,j,1.2),new B.a7(570,j,B.x(B.a([k.abr(570,A.bi,3,62,28),k.cxm(570,A.bi,20),A.O,k.aqA(!1),A.O,B.av(k.qo(570,330),j,j,j),k.Wa(570),A.R,B.E(k.aPm(2,!1,17),1)],t),A.ai,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.ai,j,A.e,A.j,0,A.p)
case 8:w=k.vu(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.PF(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.ac,B.p(j,B.x(B.a([t,A.am,k.Ow(788,A.bi,v?A.w:B.b0(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.buq,j,j,j),k.b6w(824,A.bi),A.R,B.av(k.qo(824,310),j,j,j),k.Wa(824),A.O,k.Nt(),A.R,B.E(k.a97(3),1)],s),A.ai,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.x(B.a([k.vu(824,!0),A.aR,new B.an(A.W,j,A.aa,A.r,B.a([k.qo(824,430),B.ao(18,k.c86(k.c.b,17),j,j,18,j,j,j)],w),j),A.by,k.azd(824,3,66),k.b6A(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.avM(),A.aB,B.E(k.Wl(2,18),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.vu(824,!0),A.by,new B.a7(j,500,B.B(B.a([new B.a7(410,j,B.x(B.a([k.ae2(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aR,k.b3F(410,4,58,28),k.aAJ(410,6,20),A.b7],w),A.F,j,A.e,A.j,0,A.p),j),U.aOO,k.qo(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.aB,k.avM(),A.aR,B.E(k.Wl(2,18),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 12:w=k.vu(824,!0)
v=k.qo(824,420)
u=B.hAX(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.x(B.a([w,A.aR,new B.an(A.W,j,A.aa,A.r,B.a([v,B.ao(22,B.fv(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c89(i,30,A.c,1,A.cF,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bwl,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.by,k.azd(824,3,62),k.b6A(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aX3(A.lq),A.aB,B.E(k.Wl(2,18),1)],r),A.ai,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vu(824,!0)
u=h.w
t=x.p
w=B.a([k.qo(824,380),B.ao(j,k.ae2(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.azd(824,2,60)
r=k.cxy(824,2)
p=k.avM()
o=B.E(k.aPm(2,!1,18),1)
n=B.I(B.b0(u).j(0.18),A.q,1)
m=B.n(18)
h=h.x
l=B.b0(h).j(0.05)
return B.x(B.a([v,A.aR,new B.an(A.W,j,A.aa,A.r,w,j),A.aR,s,r,A.R,p,A.aB,o,A.ac,B.p(j,B.B(B.a([B.bw(B.n(14),k.tB(150,104),A.aq),A.ol,B.E(B.x(B.a([k.ae2("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.O,B.d(q,j,2,A.a2,j,j,j,k.ax0(i,19,1.15,A.H),j,j,j)],t),A.F,j,A.e,A.N,0,A.p),1),B.X(A.ey,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bl,j,j,j)],t),A.ai,j,A.e,A.j,0,A.p)
case 9:return B.x(B.a([k.vu(824,!0),A.by,k.abr(824,A.bi,3,62,30),k.aAG(824,A.bi,2,22),A.R,k.aqA(!1),A.R,B.av(k.qo(824,330),j,j,j),k.aOk(824,A.bi),A.aR,B.E(k.bGT(2,40,21),1)],x.p),A.ai,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bZ(0,B.c_(s,new B.o(s,s,s,s,s,new B.a8(A.az,A.aC,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bf),0,0,0)],o)
if(q.ax)n.push(B.bZ(0,B.b3(s,s,s,new C.b8K(B.b0(q.w),s),A.aw),0,0,0))
w=q.w
n.push(new B.D(D.bwS,B.x(B.a([B.E(t.cf2(),1),A.O,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fF,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aZs(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.PF(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hE,A.j,0,s,s)],o),A.ai,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bZ(0,B.e_(B.b3(s,s,s,new C.brm(v.j(q.ch?0.07:0.06),s),A.aw),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.I(B.b0(w).j(0.5),A.q,1.2)
u=B.n(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hZ(B.fP(q,A.A,s,s,A.ci,A.bV,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.mz,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.ax2(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e_(B.de(B.p(s,B.B(o,A.m,s,A.e,A.N,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bxW,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a7(900,1260,B.jA(new B.an(A.W,s,A.aa,A.r,n,s),A.r,s),s)}}
C.bcf.prototype={
je(d){return C.hg_(d)},
jS(d){return!1}}
C.bce.prototype={
a4(d,e){var w,v=C.hg_(e)
$.W()
w=B.N()
w.r=this.b.gp(0)
w.b=A.ae
w.c=6
return d.aR(v,w)},
au(d){return!d.b.A(0,this.b)}}
C.btT.prototype={
je(d){var w,v,u,t,s,r,q,p,o=new B.eE()
o.dt(3)
w=$.W()
v=B.a([],x.v)
u=new B.aO(w.r,A.ao,null,null,v)
u.F(new B.b5(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.ap(s,o.aj()*14)
v.push(w)
r=u.f
if(r!=null)w.bC(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.F(new B.ap(t,8))
w=d.b
r=w-8
u.F(new B.ap(t,r))
for(;t>0;t-=14){q=new B.ap(t,w-o.aj()*14)
v.push(q)
p=u.f
if(p!=null)q.bC(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.F(new B.ap(0,r))
u.F(new B.bE())
return u},
jS(d){return!1}}
C.b8K.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.eE()
k.dt(7)
$.W()
w=B.N()
for(v=this.b,u=e.a,t=e.b,s=d.a,r=0;r<700;++r){w.r=v.j(0.03+k.aj()*0.07).gp(0)
q=k.aj()
p=k.aj()
o=k.aj()
n=w.H()
s.drawCircle(q*u,p*t,0.4+o*1.4,n)
n.delete()}for(v=x.O,r=0;r<5;++r){q=k.aj()*u
p=k.aj()*t
m=50+k.aj()*90
w.sar(new B.bT(A.A,0.5,A.x,l,0,B.a([A.KW.j(0.13),A.K],v),l,l).av(0,B.bU(new B.v(q,p),m)))
n=w.H()
s.drawCircle(q,p,m,n)
n.delete()}w.sar(l)},
au(d){return!1}}
C.brm.prototype={
a4(d,e){var w,v,u=null,t=e.a,s=B.h3(u,u,u,u,B.d3(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a4,A.c6,u,A.dP,A.c5)
s.en()
w=d.a
J.by(w.save())
w.translate(t/2,e.b*0.52)
d.ja(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a4(d,new B.v(-v/2,-t.gbd(t)/2))
w.restore()},
au(d){return!d.b.A(0,this.b)}}
C.VK.prototype={
T(){return new C.aDY()}}
C.aDY.prototype={
Z(){var w=this
w.a1()
B.h1g(w.a.c,null).bB(new C.eky(),x.g7).bB(new C.ekz(w),x.a)
w.a.toString},
gaN8(){var w=D.avm[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gax3(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaN8()
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
ZG(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ZG=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.ekl(r))
t=4
q=r.gax3()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.W()
n=new B.r1()
m=B.Dl(n,null)
i=B.N()
i.Q=A.fZ
m.qz(g,q,new B.a9(0,0,0+p,0+o),i)
w=7
return B.b(n.pE().zl(J.h5s(p),J.h5s(o)),$async$ZG)
case 7:l=e
w=8
return B.b(l.hv(A.h0),$async$ZG)
case 8:k=e
j=r.c
if(j!=null){j=B.a6(j,!1)
i=k
i.toString
j.O(J.eX(J.vq(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.ekm(r))
r.c.J(x.q).f.S(D.eZP)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ZG,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.l2,s,s,s,new C.eks(d),s,s,s,s,s,s),p=x.p
q=B.eF(B.a([B.bK(!1,D.fC1,s,s,!0,s,s,t.y||r==null?s:t.gc8a(),s,s)],p),s,s,!0,!0,A.AZ,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fFZ,s,s,s,1,s,!0)
if(r==null)p=A.lH
else{w=B.E(new B.D(A.bQ,B.av(new B.fK(t.gaN8(),B.cq(new C.ekt(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.ij,B.j9(s,s,s,new B.y(D.avm[u].a,s,E.aQB,s,s,s,s,s,s,s,s,s),s,new C.eku(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.p(s,B.bm(!0,B.x(B.a([new B.a7(s,40,B.cw(v,s,s,s,s,A.aP,!1),s),B.B(B.a([D.bPw,B.E(B.l0(s,s,s,6,1,new C.ekv(t),t.f),1),D.bP8],p),A.m,s,A.e,A.j,0,s,s),D.fzp,A.am,B.bK(!1,D.fz8,s,s,!0,s,s,new C.ekw(t,d),s,s)],p),A.m,s,A.e,A.N,0,A.p),!0,!1,A.af,!0,!1),A.f,D.X7,s,s,s,s,s,s,D.btM,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.c8(q,A.AZ,p,s,!1,!1,s,s)}}
C.bbM.prototype={
a4(d,e){var w
$.W()
w=B.N()
w.Q=A.ci
return d.qz(this.b,this.c,new B.a9(0,0,0+e.a,0+e.b),w)},
au(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a_O.prototype={
T(){var w=$.aw(),v=x.A
return new C.aFk(new B.as(A.as,w),new B.as(new B.bb("NGMY",A.b5,A.aO),w),new B.cs(null,v),new B.cs(null,v),A.d.gI(D.a3E),"quote"+1000*Date.now(),B.a([],x.t),B.aX(x.S),A.L)}}
C.oy.prototype={}
C.aFk.prototype={
gaV9(){var w,v,u=this
if(u.p1)w=new B.vI(1,u.p2,0.9,u.p3).iI().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
Z(){var w=this
w.a1()
w.a.toString
w.p4=null
$.aW.x1$.push(new C.eU8(w))},
q(){var w=this.d,v=$.aw()
w.U$=v
w.P$=0
w=this.e
w.U$=v
w.P$=0
this.a2()},
Yj(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Yj=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.qV().jH(0,"assets/images/ngmy_logo.png"),$async$Yj)
case 7:q=e
p=J.eX(J.vq(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bD4(new B.pR(p,1),o),$async$Yj)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eT0(r,p))
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
return B.i($async$Yj,v)},
PI(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PI=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i2().lb(92,1800,A.eJ),$async$PI)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fn(),$async$PI)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bD4(new B.pR(p,1),n),$async$PI)
case 9:if(r.c==null){w=1
break}r.m(new C.eTo(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.ab(l)
n=r.c
if(n!=null)n.J(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d("Could not open that picture. "+B.u(o),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$PI,v)},
b31(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aB=w.aJ=w.aF=w.az=w.a_=w.b8=w.bi=w.y2=0
w.b1=null
w.b2=0.25
w.bb=null
w.bL=0.5
w.aI=1
w.c5=w.bF=w.bh=0
w.cI=w.c6=!1},
aWO(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bzM(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.deW)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bzM(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bzM(C.h0k(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bzM(C.h0k(1-a0*0.5,n,n,n),w)}return a1?C.bzM(C.h0k(-1,255,255,255),w):w},
aAP(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).l0(0,this.d.a.a),t=B.C(u,B.a3(u).k("J.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.ze(u,v,w)
this.dx.pa(new C.eTy(t),!0)
return t},
b5z(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aAP()
w=C.i7o(e.d.a.a,e.db)
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
return C.i3T(d,k,v,a0,j,e.gaV9(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cvi(){return this.b5z(null)},
D9(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$D9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aW.gmF(),$async$D9)
case 3:w=4
return B.b(B.bN(A.eM,null,x.H),$async$D9)
case 4:w=5
return B.b($.aW.gmF(),$async$D9)
case 5:s=$.aW.ak$.x.h(0,t.r)
r=s==null?null:s.gba()
if(!(r instanceof B.q0)){u=null
w=1
break}w=7
return B.b(r.m1(1080/r.gY(0).a),$async$D9)
case 7:w=6
return B.b(e.hv(A.h0),$async$D9)
case 6:q=e
u=q==null?null:J.eX(A.dD.gaP(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$D9,v)},
aa_(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aa_=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eSK(q))
t=4
w=7
return B.b(q.D9(),$async$aa_)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cR.gcw().aL(p)
n=C.BI(null,null,null,null,D.of,6,!1,null,null,null,null,null,C.cB(),null,!1,null,"NGMY Quote",null,null,B.a([q.b5z(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a6(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.ab(j)
l=q.c
if(l!=null)l.J(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d(B.u(m),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eSL(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aa_,v)},
As(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$As=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eSI(q))
t=4
w=7
return B.b($.aW.gmF(),$async$As)
case 7:w=8
return B.b(B.bN(A.o0,null,x.H),$async$As)
case 8:w=9
return B.b($.aW.gmF(),$async$As)
case 9:k=$.aW.ak$.x.h(0,q.f)
p=k==null?null:k.gba()
if(!(p instanceof B.q0))throw B.V("The picture is not ready yet.")
w=10
return B.b(p.m1(1080/p.gY(0).a),$async$As)
case 10:o=e
w=11
return B.b(o.hv(A.h0),$async$As)
case 11:n=e
if(n==null)throw B.V("Could not make the picture.")
w=12
return B.b(A6.agj(J.eX(A.dD.gaP(n)),"ngmy_quote.png","image/png"),$async$As)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.J(x.q).f
k.S(B.b2(null,null,null,null,null,A.r,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
k=q.c
if(k!=null)k.J(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d(B.u(l),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eSJ(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$As,v)},
ci8(){var w=this.p4
w.toString
return B.cq(new C.eTh(this,w))},
aZB(d,e){var w=null
return B.bs(w,w,w,w,w,D.f9b,w,w,!0,new B.b4(4,B.n(16),P.v4),w,w,w,w,w,D.tt,!0,w,w,w,w,new B.b4(4,B.n(16),D.aZF),w,w,w,w,w,w,w,w,A1.DB,e,w,w,w,w,w,w,w,D.fev,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xQ(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b6,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aRo,w,w,w))
return new B.D(H.ahs,B.B(u,A.m,w,A.e,A.j,0,w,w),w)},
aZA(d,e){var w=null,v=B.n(18),u=B.I(A.bE,A.q,1)
return B.p(w,B.aF(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.jL),A.f,w,w,new B.o(D.tt,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vB(d){return this.aZA(d,A.bB)},
oa(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.uf:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.n(30)
u=B.I(f?A.K:A.bE,A.q,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jj,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.jj,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aC(r,B.df(r,B.B(s,A.m,r,A.e,A.N,0,r,r),r,r,A.bc,new B.o(w,r,u,v,r,p,A.n),A.hz,r,r,r,A.Fs,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a7)},
afT(d,e,f){return this.oa(d,null,e,f)},
ax7(d,e,f,g,h,i,j){var w=null,v=B.n(12),u=g?A.b6.j(0.28):A.c.j(0.05),t=g?A.eC:A.bE,s=x.p
v=B.a([B.df(w,d,w,w,A.bc,new B.o(u,w,B.I(t,A.q,g?2:1),v,w,w,A.n),A.hz,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aA
A.d.v(v,B.a([A.au,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aC(w,new B.a7(j,w,B.x(v,A.m,w,A.e,A.N,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a7)},
aZE(d,e,f,g,h,i){return this.ax7(d,e,f,g,h,5,i)},
km(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,D.f6a,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aC(u,D.eca,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eTu(this,h,i),u,u,u,u,u,u,!1,A.a7))
w=A.c.j(0.08)
v=B.n(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aQt,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.ZB,u,u,u))
s=B.B(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.av6(w).cJv(A.b6,A.bE,A.b6.j(0.2),A.c,D.eQ8,4)
return new B.D(A.xG,B.x(B.a([s,B.a9Y(B.l0(u,u,u,g,f,new C.eTv(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
ahU(d,e,f,g,h,i){return this.km(d,e,f,g,h,null,i)},
aik(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.K)(f),++v){u=f[v]
t=u==null
s=t?A.dm:B.b0(u)
r=d==u
q=r?A.c:A.b_
p=new B.az(q,r?3:1,A.q,-1)
t=t?D.bIy:o
n.push(B.aC(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bO(p,p,p,p),o,o,o,A.a5),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eTx(this,e,u),o,o,o,o,o,o,!1,A.a7))}return B.bV(A.bA,n,A.br,10,10)},
bL1(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a3E
else{v=x.a8
w=B.C(new B.a_(D.a3E,new C.eSA(o),v),v.k("J.E"))}v=B.aM(n,A.U,!1,n,!0,A.r,n,B.aN(),o.d,n,n,n,n,n,2,o.aZB("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eSB(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.a8u,!0,A.a4,n,A.an,n,n,n,n)
u=B.aM(n,A.U,!1,n,!0,A.r,n,B.aN(),o.e,n,n,n,n,n,2,o.aZB("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eSC(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.dp,!0,A.a4,n,A.an,n,n,n,n)
t=o.xQ("DESIGNS",A.u0)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cQT[q]
r.push(new B.D(A.ij,o.afT(p,o.x===p,new C.eSD(o,p)),n))}return B.x(B.a([v,A.R,u,t,B.cd(B.B(r,A.m,n,A.e,A.j,0,n,n),A.r,n,A.y,n,n,n,n,A.aP),A.ac,new B.a7(n,118,B.hN(n,new C.eSE(o,w),w.length,n,n,A.aP,new C.eSF(),!1),n),A.O,o.aZA(B.x(B.a([B.iI(A.b6,n,n,A.af,!0,new C.eSG(o),n,D.fqw,n,D.fmR,o.k3),B.iI(A.b6,n,n,A.af,!0,new C.eSH(o),n,n,n,D.fk6,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.ai5)],s),A.F,n,A.e,A.j,0,A.p)},
cDV(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aAP()
if(a7.length===0)return a5.vB(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.Jn,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.K)(a7),++s){r=a7[s]
v.push(t)
q=B.af('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.ap(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gal(v)+1
u=a5.dx
m=B.C(u,B.a3(u).k("co.E"))
A.d.fq(m)
l=m.length!==0&&A.d.d6(m,new C.eTY(a5,m))?a5.db[A.d.gI(m)]:a6
k=new C.eU4(a5)
j=new C.eU6()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.Jn,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aT(11,11)
f=u.t(0,h)?A.b6.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.eC:A.bE
d=new B.az(e,u.t(0,h)?2:1,A.q,-1)
e=a7[h].b
a0=e.index
e=A.a.ap(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aK(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a6
o.push(B.aC(a6,B.p(a6,new B.y(e,a6,new B.H(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bO(d,d,d,d),new B.bp(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.MO,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eTZ(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a7))}o=a5.vB(B.bV(A.bA,o,A.t2,6,6))
i=B.a([a5.oa("All words",L.aml,!1,new C.eU_(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.afT("Sentence "+a3,!1,new C.eU0(a5,a7,v,a2)))
a2=a3}}i.push(a5.afT("Clear picks",!1,new C.eU1(a5)))
i=B.bV(A.bA,i,A.br,8,8)
g=a5.xQ("SIZE OF THE PICKED WORDS",D.alP)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dkH[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eU2(e,k)
f.push(a5.afT(a0.b,l===a4,e))}return B.x(B.a([q,A.R,o,A.R,i,g,B.bV(A.bA,f,A.br,8,8),A.R,a5.oa("Make every word normal",A.lp,!1,new C.eU3(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cz2(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.bz6,B.d(A.d.h7(D.ax4,new C.eTH(q)).b,p,p,p,p,p,p,D.f7E,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cq(new C.eTI(q)),l=q.xQ("HIGHLIGHT BEHIND THE WORDS",A.a0u),k=q.p1?-1:q.k4
k=q.aik(k,new C.eTJ(q),D.d0p)
w=q.p1
v=w?A.c:A.b_
n=B.a([n,A.R,m,l,B.bV(A.bA,B.a([k,B.aC(p,B.p(p,D.bLx,A.f,p,p,new B.o(p,p,B.I(v,A.q,w?3:1),p,p,D.f1r,A.a5),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eTM(q),p,p,p,p,p,p,!1,A.a7)],o),A.t2,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.Jn,p,p,p)],o)
if(q.gaV9()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ahU("Colour",l,0,360,new C.eTN(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ahU("Shade",k,0.15,0.9,new C.eTO(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.km("Strength",l,0.15,1,new C.eTP(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.R,q.vB(B.x(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xQ("LOOK",A.yv))
m=B.a([q.oa("Bold",K.alN,q.fy,new C.eTQ(q)),q.oa("Italic",K.alO,q.go,new C.eTR(q))],o)
for(u=0;u<3;++u){l={}
k=D.cS4[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.uf:p
w=w?p:A.c.j(0.07)
s=new B.aT(14,14)
r=new B.az(q.id===l.a?A.K:A.bE,1,A.q,-1)
m.push(B.aC(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bO(r,r,r,r),new B.bp(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eTS(l,q),p,p,p,p,p,p,!1,A.a7))}n.push(B.bV(A.bA,m,A.t2,8,8))
n.push(q.xQ("COLOUR",A.nm))
n.push(q.aik(q.fx,new C.eTT(q),D.dbB))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.Jn,p,p,p))
n.push(q.xQ("SIZE AND PLACE",A.Gs))
m=q.fr
m=q.km("Text size",m,0.5,1.6,new C.eTK(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vB(B.x(B.a([m,q.km("Up / down",l,0.12,0.5,new C.eTL(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.x(n,A.F,p,A.e,A.j,0,A.p)},
ci9(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.n(22)
v=B.I(A.b6.j(0.6),A.q,1.6)
u=B.a([A.b6.j(0.18),A.bD.j(0.12)],x.O)
return B.aC(p,B.p(p,B.x(B.a([B.p(p,D.bQX,A.f,p,p,D.b1D,p,62,p,p,p,p,p,62),A.aB,D.fo3,A.am,D.fsI],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.tt,p,v,w,p,new B.a8(A.a3,A.a8,A.x,u,p,p),A.n),p,p,p,p,D.buX,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaZD(),p,p,p,p,p,p,!1,A.a7)}w=x.p
v=B.B(B.a([B.bw(B.n(12),new B.a7(46,62,B.fP(o,A.A,120,p,A.ci,A.bV,!1,p,!1,p,p),p),A.aq),A.be,B.E(B.x(B.a([D.fnB,A.O,B.bV(A.bA,B.a([q.oa("Change",A.kw,!1,q.gaZD()),q.oa("Remove",A.e7,!1,new C.eTl(q))],w),A.br,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.d7V[t]
u.push(q.oa(s.b,s.a,q.at===t,new C.eTm(q,t)))}u=B.bV(A.bA,u,A.br,8,8)
r=q.at
A:{if(0===r){s=q.c0Q(o)
break A}if(1===r){s=q.c_P()
break A}if(2===r){s=q.bGS()
break A}if(3===r){s=q.bNd()
break A}s=q.bIZ()
break A}return B.x(B.a([v,A.ac,u,A.aB,s,A.R,new B.bI(A.a3,p,p,q.oa("Reset the whole picture",A.lp,!1,new C.eTn(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
c0Q(d){var w=this,v=x.p
return B.x(B.a([B.bV(A.bA,B.a([w.oa("Auto enhance",E.a08,!1,new C.eTd(w)),w.oa("Make words easy to read",A.oZ,!1,new C.eTe(w))],v),A.br,8,8),A.aB,B.cq(new C.eTf(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
c_P(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.km("Exposure",n,-1.5,1.5,new C.eSS(o),0,A.k.aa(n,1))
w=o.RG
w=o.km("Brightness",w,-0.5,0.5,new C.eST(o),0,""+A.k.V(w*100))
v=o.rx
v=o.km("Contrast",v,0.4,2,new C.eSU(o),1,""+A.k.V(v*100))
u=o.xr
u=o.km("Fade",u,0,1,new C.eSV(o),0,""+A.k.V(u*100))
t=o.aF
t=o.km("Spotlight",t,0,1,new C.eSW(o),0,""+A.k.V(t*100))
s=o.a_
s=o.km("Darken",s,0,0.85,new C.eSX(o),0,""+A.k.V(s*100))
r=o.b8
r=o.km("Vignette",r,0,0.9,new C.eSY(o),0,""+A.k.V(r*100))
q=o.aB
q=o.km("Shade behind words",q,0,0.85,new C.eSZ(o),0,""+A.k.V(q*100))
p=o.aJ
return o.vB(B.x(B.a([n,w,v,u,t,s,r,q,o.km("Shade top & bottom",p,0,0.85,new C.eT_(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bGS(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.km("Colour strength",q,0,2.2,new C.eSd(s),1,""+A.k.V(q*100))
w=s.to
w=s.km("Warmth",w,-1,1,new C.eSe(s),0,""+A.k.V(w*100))
v=s.x1
v=s.km("Tint",v,-1,1,new C.eSf(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vB(B.x(B.a([q,w,v,s.km("Shift colours",u,-180,180,new C.eSg(s),0,""+A.k.V(u)+"\xb0"),new B.bI(A.a3,r,r,s.oa("Negative",D.bGv,s.y1,new C.eSh(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xQ("COLOUR WASH",A.NM)
w=s.b1
q=B.a([null],x.Z)
A.d.v(q,D.avN)
t=B.a([u,v,s.aik(w,new C.eSi(s),q),A.O],t)
if(s.b1!=null){q=s.b2
t.push(s.vB(s.ahU("Wash strength",q,0,0.9,new C.eSj(s),""+A.k.V(q*100))))}return B.x(t,A.F,r,A.e,A.j,0,A.p)},
bNd(){var w,v,u,t,s,r=this,q=r.y2
q=r.km("Blur",q,0,24,new C.eSM(r),0,A.o.u(A.k.V(q)))
w=r.bi
w=r.km("Soft focus",w,0,1,new C.eSN(r),0,""+A.k.V(w*100))
v=r.az
u=x.p
v=r.vB(B.x(B.a([q,w,r.km("Film grain",v,0,1,new C.eSO(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xQ("LIGHT LEAK",I.alJ)
q=r.bb
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.db(D.avN,0,B.dI(8,"count",s),s))
u=B.a([v,w,r.aik(q,new C.eSP(r),t),A.O],u)
if(r.bb!=null){q=r.bL
u.push(r.vB(r.ahU("Leak strength",q,0,1,new C.eSQ(r),""+A.k.V(q*100))))}return B.x(u,A.F,null,A.e,A.j,0,A.p)},
bIZ(){var w,v,u,t,s=this,r=s.aI
r=s.km("Zoom",r,1,3,new C.eSn(s),1,""+A.k.V(r*100)+"%")
w=s.bh
w=s.km("Left / right",w,-1,1,new C.eSo(s),0,""+A.k.V(w*100))
v=s.bF
v=s.km("Up / down",v,-1,1,new C.eSp(s),0,""+A.k.V(v*100))
u=s.c5
t=x.p
return B.x(B.a([s.vB(B.x(B.a([r,w,v,s.km("Turn",u,-180,180,new C.eSq(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.R,B.bV(A.bA,B.a([s.oa("Turn 90\xb0",H.amS,!1,new C.eSr(s)),s.oa("Flip sideways",A.Ge,s.c6,new C.eSs(s)),s.oa("Flip upside down",A.Ge,s.cI,new C.eSt(s))],t),A.br,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
c3w(){var w=null,v=B.n(22),u=B.I(A.bE,A.q,1)
return B.p(w,B.x(B.a([D.eQk,A.R,D.fpy,A.aB,B.aC(w,B.p(A.A,D.eQx,A.f,w,w,new B.o(w,w,w,B.n(16),w,G.uf,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eTg(this),w,w,w,w,w,w,!1,A.a7)],x.p),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.tt,w,u,v,w,w,A.n),w,w,w,w,A.bQ,w,w,w)},
c0E(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eT8(p),m=x.p,l=B.B(B.a([D.bzc,p.oa("Reset",A.lp,!1,new C.eT4(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.Jn,o,o,o),j=p.xQ("SHAPE",A.amO),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Cg[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aZE(n.$2(t,p.cy),62,u.b,s===t,new C.eT5(v,p),62))}}i=B.bV(A.bA,i,A.br,8,8)
v=p.xQ("RING",A.re)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Cb[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aZE(n.$2(p.cx,t),62,r.b,q===t,new C.eT6(s,p),62))}u=B.bV(A.bA,u,A.br,8,8)
s=p.CW
return B.x(B.a([l,A.au,k,j,i,v,u,A.ac,p.vB(p.km("Size",s,0.12,0.4,new C.eT7(p),0.22,""+A.k.V(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
b1z(d){return new B.a7(null,d,new B.fK(0.5625,B.cq(new C.eTr(this)),null),null)},
cyj(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.n(18),n=B.I(A.bE,A.q,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.uf:q
t=new B.aT(14,14)
s=D.da2[w]
r=v?A.c:A.aA
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aA
l.push(new B.bB(1,A.bh,B.aC(A.c7,B.df(q,B.x(B.a([r,A.cV,new B.qp(A.dZ,A.A,A.f,new B.y(s.b,q,new B.H(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.N,0,A.p),q,q,A.bc,new B.o(q,q,q,new B.bp(t,t,t,t),q,u,A.n),D.bqF,q,q,q,A.hP,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eTA(this,w),q,q,q,q,q,q,!1,A.a7),q))}return B.p(q,B.B(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bsK,A.lS,q,q,q)},
aPT(){var w,v,u=this,t=null,s=u.cyj(),r=u.as
A:{if(0===r){w=u.bL1()
break A}if(1===r){w=u.cDV()
break A}if(2===r){w=u.cz2()
break A}if(3===r){w=u.ci9()
break A}if(4===r){w=u.c0E()
break A}w=u.c3w()
break A}v=x.p
return B.bw(A.t8,B.en(B.x(B.a([s,B.E(B.cw(B.a([w],v),t,D.btN,t,t,A.ah,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.X7,!0),A.aq)},
aM5(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc8B(),p=B.n(16)
q=B.E(B.aC(r,B.p(r,D.eQI,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.b_,A.q,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a7),1)
p=s.Q?r:s.gbMO()
w=B.n(16)
v=B.a([new B.ac(0,A.G,A.bD.j(0.35),A.cB,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eW6)
else t.push(D.bKC)
t.push(A.ab)
t.push(D.bB_)
return B.p(r,B.B(B.a([q,A.at,B.E(B.aC(r,B.p(r,B.B(t,A.m,r,A.b9,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.uf,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a7),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.b0K,r,r,r,r,G.ahU,r,r,r)},
aZC(){var w=null
return new B.D(T.Zw,B.B(B.a([B.aH(w,w,w,w,A.mD,w,w,w,new C.eSR(this),w,w,w,w,w,w),D.fEW,A.b7,D.bTe],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c8(w,A.AZ,B.bm(!0,B.cq(new C.eU7(this)),!0,!1,A.af,!0,!0),w,!1,!1,w,w)}}
C.bfk.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.eE()
m.dt(7)
w=e.a
v=e.b
u=A.k.V(w*v/55)
$.W()
t=B.N()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.N()
r.r=A.w.j(0.2*s).gp(0)
for(s=d.a,q=0;q<u;++q){p=m.aj()*w
o=m.aj()*v
n=((q&1)===0?t:r).H()
s.drawRect(B.c0(new B.a9(p,o,p+1.1,o+1.1)),n)
n.delete()}},
au(d){return d.b!==this.b}}
C.rv.prototype={
a5(){return"NgmyQuoteDeco."+this.b}}
C.m7.prototype={}
C.zx.prototype={
ah(){var w=this
return B.F(["at",w.a.a6().ac(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nL.prototype={}
C.w1.prototype={
a5(){return"NgmySlidesAiExtra."+this.b}}
C.a7X.prototype={}
C.ar5.prototype={}
C.a0k.prototype={
T(){return new C.aHf(new B.as(A.as,$.aw()),B.jS(!0,null,!0,!0,null,null,!1),D.dBe,B.a([],x.s),B.ev([D.I4],x.Q))}}
C.aHf.prototype={
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.f.q()
this.a2()},
a00(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a00=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i2().C3(90,700,700,A.eJ),$async$a00)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fn(),$async$a00)
case 8:p=e
if(r.c!=null)r.m(new C.f_l(r,p,q))
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
return B.i($async$a00,v)},
a03(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a03=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.i2().aHg(78,n,1100,1100),$async$a03)
case 7:q=e
if(J.cn(q)){w=1
break}p=B.bo(r.y,!0,x.N)
n=J.aV(q)
case 8:if(!n.C()){w=9
break}o=n.gR(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fn(),$async$a03)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.cb(l,".png"))k="image/png"
else k=A.a.cb(l,".webp")?"image/webp":"image/jpeg"
J.ce(p,"data:"+k+";base64,"+A.cR.gcw().aL(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.f_m(r,p))
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
return B.i($async$a03,v)},
b3E(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fP(A.cI.aL(A.d.gal(d.split(","))),A.A,u,u,A.ci,A.bV,!0,u,!1,u,u)
return w}catch(v){}return D.boP},
c0K(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cqW(C.fCq(w,this.b3E(d),f),g)},
ack(d,e,f,g,h){var w=null,v=new C.f_j(f,e),u=new C.f_k(f,e),t=A.c.j(0.05),s=B.n(12),r=B.n(12),q=B.n(12),p=h==null,o=B.I(p?A.bE:A.b6.j(0.6),A.q,1)
if(p)p=new B.a7(34,30,new B.an(A.W,w,A.aa,A.f,B.a([B.av(B.X(f?A.BU:A.NC,A.bX,w,w,w,26),w,w,w),D.ehT],x.p),w),w)
else p=this.c0K(g,v.$1(h),u.$1(h),34)
return B.aF(!1,A.a1,!0,s,B.aL(!1,r,!0,B.p(w,B.B(B.a([B.E(B.av(p,w,w,w),1),D.bKj],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mu,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f_i(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ag)},
aWU(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bw(B.n(8),B.fP(A.cI.aL(A.d.gal(h.split(","))),A.A,p,p,A.ci,A.bV,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.n(14)
t=B.n(14)
s=B.n(14)
r=B.I(n?A.bE:A.bd.j(0.6),A.q,1)
q=o
n=q==null?B.X(d,A.es,p,p,p,20):q
n=B.a([n,A.ab,B.E(B.d(e,p,1,A.a2,p,p,p,A.Js,p,p,p),1)],x.p)
if(f!=null)n.push(B.aC(p,D.a1m,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a7))
return B.aF(!1,A.a1,!0,u,B.aL(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.kW,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ag)},
a8s(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a8s=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fFR(),$async$a8s)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.f_1(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ab(n)
if(r.c!=null)r.m(new C.f_2(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8s,v)},
aec(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aec=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.f_4(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.f_5(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.f_6(r))
t=4
m=r.ch
k=r.CW
j=r.x
i=r.y
p=B.a([],x.aD)
h=r.e
if((h==null?null:h.b)!=null){h=h.b
h.toString
J.ce(p,h)}w=7
return B.b(C.fB8(q,r.cx,j,new C.b12(r.z,r.Q,r.as,r.at),new C.f_7(r),i,m,p,k),$async$aec)
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
if(r.c!=null)r.m(new C.f_8(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aec,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aI(d,A.eG,g).w
g=B.aI(d,A.bW,g).w
w=B.av(B.p(h,h,A.f,h,h,new B.o(A.b_,h,h,B.n(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.av(B.aC(h,B.p(h,D.bNx,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.q,2),h,B.a([new B.ac(2,A.G,A.bd.j(0.5),A.J,24)],v),D.bXj,A.a5),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f_z(i),h,h,h,h,h,h,!1,A.a7),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,D.a1m,h,h,h,i.ax?h:new C.f_A(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbBN()
v=B.a([new B.ac(0,A.G,A.b6.j(0.45),A.J,10)],v)
s.push(B.hx(B.aF(!1,A.a1,!0,h,B.aL(!1,h,!0,B.p(h,B.X(i.e==null?A.vQ:A.ho,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.w5,A.a5),h,40,h,h,h,h,h,40),A.cL,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cL,h,h,A.ag),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.N,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.U,!1,h,!0,A.r,h,B.aN(),i.d,h,h,h,h,h,2,B.bs(h,h,h,h,h,h,h,h,!0,new B.b4(4,B.n(16),new B.az(A.c.j(0.1),1,A.q,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b4(4,B.n(16),D.aZc),h,h,h,h,h,h,h,h,A0.J9,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.ij,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.aj,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,h,D.aQP,!0,A.a4,h,A.an,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.f_B(i)
s=i.aWU(A.lr,q,r,i.gciA(),s)
r=i.z
r=B.E(i.ack(new C.f_D(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.am,B.B(B.a([r,A.bp,B.E(i.ack(new C.f_E(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gI(s)
p=i.y.length===0?h:new C.f_F(i)
s=i.aWU(A.vN,r,p,i.gciI(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gI(o)
p=B.E(i.ack(new C.f_G(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gI(n)
o=B.a([w,A.aB,D.ftX,A.au,D.fwO,A.by,u,A.O,D.fvd,A.aB,v,A.by,B.B(B.a([q,A.at,B.E(B.x(B.a([s,A.am,B.B(B.a([p,A.bp,B.E(i.ack(new C.f_H(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.am,D.fyz],t)
w=i.w.a
if(w.length!==0){v=B.n(999)
u=B.I(D.bh2,A.q,1)
w=C.agR(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.R,new B.bI(A.a3,h,h,B.p(h,B.B(B.a([D.bOC,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fdd,h,h,h),B.aL(!1,h,!0,D.ecq,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.f_I(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.N,0,h,h),A.f,h,h,new B.o(D.baa,h,u,v,h,h,A.n),h,h,h,h,D.bsr,h,h,h),h)],t))}o.push(A.by)
o.push(D.fkO)
o.push(A.O)
w=B.a([],t)
for(m=0;m<6;++m){l=D.d2w[m]
v=i.ch===l?A.b6:A.c.j(0.06)
u=i.ch===l
k=new B.az(u?A.aA:A.bE,1,A.q,-1)
u=u?A.u:A.P
w.push(new B.bB(1,A.bh,new B.D(A.jp,B.aC(h,B.df(A.A,new B.y(""+l,h,new B.H(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.bc,new B.o(v,h,new B.bO(k,k,k,k),h,h,h,A.a5),A.eH,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f_J(i,l),h,h,h,h,h,h,!1,A.a7),h),h))}o.push(B.B(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.by)
o.push(D.fDa)
o.push(A.O)
o.push(B.cq(new C.f_K(i)))
o.push(A.by)
o.push(D.fs4)
o.push(A.O)
w=B.a([i.b6t("auto","Let AI choose",A.dX,A.Qm)],t)
for(v=x.O,m=0;m<11;++m){j=D.wb[m]
u=j.d
w.push(i.b6t(j.a,j.b,j.c,B.a([B.b0(A.d.gI(u).a),B.b0(A.d.gI(u).b)],v)))}o.push(B.bV(A.bA,w,A.br,8,8))
o.push(A.aR)
w=A.c.j(0.04)
v=B.n(16)
u=B.I(i.r?A.bd.j(0.5):A.bE,A.q,1)
o.push(B.p(h,B.iI(h,A.bd,h,h,h,new C.f_C(i),D.bJL,D.fCp,h,D.fn4,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aQ3,h,h,h)],t))
o.push(A.by)
w=i.ax?h:i.gc8F()
v=B.fp(h,h,A.b6,A.b6.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.n(18),A.Y),h,h,h,h,h)
u=i.ax
t=u?D.eVX:A.GE
o.push(new B.a7(h,54,B.lx(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.or,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.p(h,B.bm(!0,B.cd(B.x(o,A.ai,h,A.e,A.j,0,A.p),A.r,h,A.y,h,A.vE,h,h,A.ah),!0,!1,A.af,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.abt,h,h,h,h,h,h,h,h),h)},
bOk(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.f_9(this,p,d)
if(d===D.CV)return new C.aDN(p,o,q)
w=B.n(16)
v=p?E.w5:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.aA:A.bE,A.q,1)
s=B.X(p?A.eh:C.hI_(d),A.c,q,q,q,20)
r=C.hI0(d)
return B.aC(q,B.df(q,B.x(B.a([s,A.au,B.eQ(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.dZ)],x.p),A.m,q,A.b9,A.j,0,A.p),q,q,A.bc,new B.o(u,q,t,w,q,v,A.n),A.hz,q,64,q,A.hA,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a7)},
b6t(d,e,f,g){var w,v=null,u=this.CW===d,t=B.n(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bE
r=B.I(r,A.q,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a8(A.a3,A.a8,A.x,g,v,v),A.a5),v,26,v,v,v,v,v,26)
return B.aC(v,B.df(v,B.B(B.a([w,M.J0,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a6,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.N,0,v,v),v,v,A.bc,new B.o(s,v,r,t,v,v,A.n),A.eH,v,v,v,M.ajb,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f_o(this,d),v,v,v,v,v,v,!1,A.a7)}}
C.a0j.prototype={
T(){return new C.aHe(new B.as(A.as,$.aw()))}}
C.aHe.prototype={
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a2()},
aed(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$aed=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.eZV(r))
w=1
break}B.eY()
r.m(new C.eZW(r))
t=4
q=C.i8h(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.i81(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.eZX(r,q))
w=1
break}k=r.c
if(k!=null)B.a6(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.h00()
f=$.CG.h(0,k.a)
o=f==null||J.cn(f)?null:J.fr(f)
if(o==null){r.m(new C.eZY(r))
w=1
break}n=C.i8_(o,r.a.c)
C.i7W(r.a.c.a)
$.h_h=!0
k=r.c
if(k!=null)B.a6(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.h2Q(j)
h=C.h2R(r.a.c)
e=C.h2S(r.a.c)
w=7
return B.b(C.bBZ(k,r.a.c.a,j,h,new C.eZZ(r),i,e,a0),$async$aed)
case 7:m=a3
k=r.c
if(k!=null)B.a6(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ab(a1)
if(r.c!=null)r.m(new C.f__(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aed,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aI(d,A.eG,i).w
i=B.aI(d,A.bW,i).w
w=B.av(B.p(j,j,A.f,j,j,new B.o(A.b_,j,j,B.n(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.an6,A.f,j,j,D.b0p,j,34,j,j,j,j,j,34),A.at,D.bzO],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Aq.a8b,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.U,!0,j,!0,A.r,j,B.aN(),k.d,j,j,j,j,j,2,B.bs(j,j,j,j,j,j,j,j,!0,new B.b4(4,B.n(16),new B.az(A.c.j(0.1),1,A.q,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b4(4,B.n(16),Ar.aaX),j,j,j,j,j,j,j,j,A0.J9,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.aj,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,D.aQP,!0,A.a4,j,A.an,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cZL[q]
o=A.c.j(0.06)
n=k.e?j:new C.f_0(k,p)
r.push(B.mK(j,o,new B.y(p,j,Aw.TM,j,j,j,j,j,j,j,j,j),j,n,j,j,P.v4,j))}w=B.a([w,A.aB,u,A.am,t,A.aB,s,A.R,B.bV(A.bA,r,A.br,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aQ3,j,j,j)],v))
w.push(A.aR)
u=k.e
t=u?j:k.gc8G()
s=B.n(18)
r=B.n(18)
u=u?B.a([A.bd.j(0.5),A.eB.j(0.5)],x.O):D.cxJ
o=B.a([new B.ac(0,A.G,A.bd.j(0.35),A.cB,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.ecm:D.bOb
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a5),j,30,j,j,j,j,j,30)
w.push(B.aF(!1,A.a1,!0,j,B.aL(!1,s,!0,B.eH(B.B(B.a([n,A.at,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hH,j,j,j)],v),A.m,j,A.b9,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a8(A.a3,A.a8,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ag))
return new B.D(new B.Q(0,0,0,h.f.d),B.p(j,B.bm(!0,B.cd(B.x(w,A.ai,j,A.e,A.j,0,A.p),A.r,j,A.y,j,A.vE,j,j,A.ah),!0,!1,A.af,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.abt,j,j,j,j,j,j,j,j),j)}}
C.b12.prototype={}
C.aDN.prototype={
T(){return new C.bk_(null,null)}}
C.bk_.prototype={
gax8(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.pU,null,1,null,v)
w.cL(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gax8().q()
this.bvF()},
B(d){var w=null,v=this.a.d
return B.aC(w,B.c6(this.gax8(),new C.efu(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a7)}}
C.bhx.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.d4I[s]
p=q.a*v
q=q.b*u
$.W()
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=D.xv.j(0.25+r*0.6).gp(0)
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
au(d){return d.b!==this.b}}
C.arD.prototype={
a5(){return"NgmyTextCommand."+this.b}}
C.ZG.prototype={
T(){return new C.aBf()}}
C.aBf.prototype={
gaih(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.ah3(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAd(){var w=this.e
return w===$?this.e=C.h2Q(this.a.c).t(0,D.CV):w},
a8f(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a8f=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.djb(s))
u=3
r=A.d.h7(D.wb,new C.djc(s))
q=B.dd(C.h2Q(s.a.c),x.Q)
l=q
J.hy(l,D.CV)
p=l
if(s.gAd())J.ce(p,D.CV)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAd()?" with Luxury FX":""
i=s.a
h=i.d
i=C.h2R(i.c)
g=C.h2S(s.a.c)
w=6
return B.b(C.bBZ(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a8f)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.ah3(q,s.gaih())
f=q==null?null:q.b
n=f==null?s.gaih():f
if(!J.A(n,r.a)&&!s.gAd())throw B.V("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a6(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ab(d)
if(s.c!=null)s.m(new C.djd(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a8f,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.c:A.M,k=m?A.aS:A.ak,j=m?A.M:A.c,i=B.n(28),h=B.I(m?A.bE:A.aL,A.q,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bC,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.djg(d)
e=B.B(B.a([f,B.aH(n,n,n,n,B.X(A.cD,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.wb[w]
u=o.gaih()
t=o.f?n:new C.djh(o,v)
f.push(new C.bst(v,u===v.a,t,n))}f=B.m2(1.25,f,3,10,10,n,A.dS,!0)
u=B.n(18)
t=o.gAd()?D.c_4:n
if(o.gAd())s=n
else s=m?A.bn:A.bL
r=B.X(A.dX,o.gAd()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gAd()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gAd()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gAd()
f=B.a([f,A.aB,B.p(n,B.B(B.a([r,A.at,q,B.aas(n,A.c,n,A.bM,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dji(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,I.ahX,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.R,B.d(u,n,n,n,n,n,n,D.fdx,n,n,n)],g))
f=B.cd(B.x(f,A.F,n,A.e,A.j,0,A.p),A.r,n,A.y,n,A.FA,n,n,A.ah)
u=o.f?n:o.gbAM()
t=B.bn(A.K,n,n,n,n,n,A.af,n,new B.b7(B.n(16),A.Y),n,n,n)
s=B.n(16)
return B.bm(!0,B.p(n,B.x(B.a([new B.D(D.bvq,e,n),new B.dq(1,A.co,f,n),new B.D(A.Fz,new B.a7(1/0,50,B.bG(B.eH(B.av(o.f?A.rR:D.fuq,n,n,n),n,new B.o(n,n,n,s,n,D.bYD,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.N,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.tO,n,n,n,n),!0,!1,A.af,!0,!0)}}
C.bst.prototype={
B(d){var w=null,v=this.c,u=A.d.gI(v.d),t=B.n(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.q,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bI(A.ld,w,w,B.X(v.c,A.ad,w,w,w,18),w),new B.bI(A.lC,w,w,B.d(v.b,w,w,w,w,w,w,D.fdv,w,w,w),w)],x.p)
if(q)v.push(D.aXg)
return B.aC(w,B.df(w,new B.an(A.W,w,A.aa,A.r,v,w),w,w,A.bc,new B.o(w,w,p,t,s,new B.a8(A.az,A.aC,A.x,r,w,w),A.n),A.eH,w,w,w,A.cp,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a7)}}
C.efr.prototype={
aEP(d,e,f){return e+"@"+A.a.aV(A.o.fX(f==null?this.a.c:f,16),8,"0").toUpperCase()},
wv(d,e){return this.aEP(0,e,null)}}
C.aLO.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
C.b0Z.prototype={
B(d){var w,v,u=null,t=C.h1F(this.c)
if(t==null)w=D.bnl
else{w=B.aI(d,u,x.w).w.cIX(D.brY,D.eVa)
v=this.d
w=B.tk(B.e_(B.anV(!1,t,!1,v,!1,390),!v,u),w)}return B.eQ(A.A,new B.a7(416,870,new C.blD(w,u),u),A.f,A.dv)}}
C.blD.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dgD[w]
u=new B.aT(3,3)
s.push(new B.cL(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bp(u,u,u,u),t,D.ap_,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dhQ[w]
u=new B.aT(3,3)
s.push(new B.cL(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bp(u,u,u,u),t,D.ap_,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bZ(0,B.c_(t,new B.o(t,t,t,B.n(64),D.cPA,D.bX1,A.n),A.bf),0,0,0))
s.push(B.bZ(3,B.c_(t,new B.o(A.w,t,t,B.n(61),t,t,A.n),A.bf),3,3,3))
s.push(B.bZ(13,B.bw(B.n(51),B.en(this.c,A.w,!0),A.aq),13,13,13))
u=B.n(20)
s.push(B.ao(t,B.av(B.p(D.aXs,B.p(t,t,A.f,t,t,D.b0I,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bZ(13,B.e_(B.bw(B.n(51),D.boV,A.aq),!0,t),13,13,13))
s.push(B.ao(22,B.e_(B.av(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.n(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.W,t,A.aa,A.f,s,t)}}
C.ld.prototype={
px(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cB(),f=C.cB(),e=m.r
f=C.er(A.L,!1,e.l(),A.aD,"",k,42,A.bo,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bg,j,2,"Your Presentation Title",0,0,"",D.mK,D.cQ,0.84,0.08,0.26)
w=C.cB()
v=m.w
w=C.er(A.L,!1,v.l(),A.aD,"",k,20,A.bo,A.a6,"",0.12,w,l,"","",0,!1,"",0,D.bg,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.de,D.cQ,0.76,0.12,0.56)
u=C.cB()
t=m.d
s=x.u
t=C.rw(i,l,0,0,B.a([f,w,C.er(A.bi,!1,4279310375,A.aD,"",t.j(0.8).l(),24,A.bo,A.a6,"",0.006,u,l,"","",0,!1,"",0,D.fs,t.l(),3,"",0,0,"",D.cn,D.f4,0.3,0.35,0.72)],s),C.cB(),D.mJ,"","","Welcome",D.de)
u=C.cB()
u=C.er(A.bi,!1,e.l(),A.aD,"",k,34,A.bo,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bg,j,2,"Agenda",0,0,"",D.cn,D.cQ,0.84,0.08,0.08)
w=C.cB()
w=C.rw(i,l,0,0,B.a([u,C.er(A.bi,!0,v.l(),A.aD,"",k,22,A.bo,A.a6,"",0.6,w,l,"","",0,!1,"",0,D.bg,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.uu,D.cQ,0.8,0.1,0.26)],s),C.cB(),D.mJ,"","","Agenda",D.de)
u=C.cB()
u=C.er(A.bi,!1,e.l(),A.aD,"",k,32,A.bo,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bg,j,2,"Main Idea",0,0,"",D.cn,D.cQ,0.84,0.08,0.08)
f=C.cB()
f=C.rw(i,l,0,0,B.a([u,C.er(A.bi,!0,v.l(),A.aD,"",k,21,A.bo,A.a6,"",0.62,f,l,"","",0,!1,"",0,D.bg,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cn,D.cQ,0.8,0.1,0.26)],s),C.cB(),D.mJ,"","","Key Point 1",D.de)
u=C.cB()
u=C.er(A.bi,!1,e.l(),A.aD,"",k,30,A.bo,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bg,j,2,"Compare & Contrast",0,0,"",D.cn,D.cQ,0.84,0.08,0.08)
r=C.cB()
r=C.er(A.bi,!0,v.l(),A.aD,"",k,18,A.bo,A.a6,"",0.62,r,l,"","",0,!1,"",0,D.bg,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cn,D.cQ,0.4,0.08,0.24)
q=C.cB()
q=C.rw(i,l,0,0,B.a([u,r,C.er(A.bi,!0,v.l(),A.aD,"",k,18,A.bo,A.a6,"",0.62,q,l,"","",0,!1,"",0,D.bg,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cn,D.cQ,0.4,0.52,0.24)],s),C.cB(),D.mJ,"","","Key Point 2",D.de)
r=C.cB()
r=C.er(A.L,!1,e.l(),A.aD,"",k,48,A.bo,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bg,j,2,h,0,0,"",D.de,D.cQ,0.8,0.1,0.32)
e=C.cB()
p=C.BI(l,l,l,l,D.CR,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rw(i,l,0,0,B.a([r,C.er(A.L,!1,v.l(),A.aD,"",k,22,A.bo,A.a6,"",0.1,e,l,"","",0,!1,"",0,D.bg,j,2,"Questions?",0,0,"",D.cn,D.cQ,0.7,0.15,0.58)],s),C.cB(),D.mJ,"","",h,D.de)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.K)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.EF.prototype={
bC(d){return this.e.$1(d)}}
C.ew.prototype={}
C.j1.prototype={}
C.Ew.prototype={
gaKE(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.agR(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a3p(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Ew(v,u,t,d==null?w.d:d)},
FA(d){return this.a3p(null,d,null,null)},
aDy(d){return this.a3p(null,null,null,d)},
cIV(d,e){return this.a3p(d,e,null,null)},
bbE(d){return this.a3p(d,null,null,null)},
bbL(d){return this.a3p(null,null,d,null)}}
C.Nn.prototype={
T(){return new C.bjm(new B.eN(0,$.aw()),null,null)}}
C.bjm.prototype={
Z(){var w,v=this
v.a1()
w=v.qy(new C.dUA(v))
v.e!==$&&B.aP()
v.e=w
if(v.a.e)w.hZ(0)
else v.d.sp(0,3.2)},
q(){var w=this.e
w===$&&B.c()
w.q()
w=this.d
w.U$=$.aw()
w.P$=0
this.bv7()},
B(d){var w=C.agR(this.a.c.a)
if(w==null)w=A.d.gI(D.GZ)
return B.cq(new C.dUz(this,w,C.hhQ(this.a.c.d)))}}
C.br1.prototype={
B(d){return B.nQ(A.Vw,this.e,new C.eZ8(this,A.k.E(this.d*0.35,1.6)-0.3))}}
C.beq.prototype={
a4(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aSy(d,e,v)
break
case"confetti":w.bHn(d,e,v)
break
case"crown":w.bJ_(d,e,v)
break
case"aurora":w.bBR(d,e,v)
break
case"champagne":w.bFc(d,e,v)
break
case"diamonds":w.bLa(d,e,v)
break
case"starburst":w.cw_(d,e,v)
break
case"balloons":w.bC4(d,e,v)
break
case"galaxy":w.bQ7(d,e,v)
break
case"redcarpet":w.cmV(d,e,v)
break
case"coins":w.bGK(d,e,v)
break
case"lanterns":w.c_k(d,e,v)
break
case"hearts":w.bXX(d,e,v)
break
case"petals":w.ci1(d,e,v)
break
case"butterflies":w.bEa(d,e,v)
break
case"neon":w.c3g(d,e,v)
break
case"disco":w.bLl(d,e,v)
break
case"sunrise":w.cxA(d,e,v)
break
case"pearls":w.ch5(d,e,v)
break
case"snow":w.cvF(d,e,v)
break
case"laurel":w.c_q(d,e,v)
break
case"ribbons":w.cps(d,e,v)
break
case"kente":w.c_8(d,e,v)
break
case"trophy":w.cBf(d,e,v)
break
case"shooting":w.ctu(d,e,v)
break
case"bokeh":w.bCp(d,e,v)
break
case"orbits":w.ceJ(d,e,v)
break
case"flowers":w.bPn(d,e,v)
break
case"music":w.c2Z(d,e,v)
break
case"mandala":w.c1q(d,e,v)
break
case"sparklers":w.cvO(d,e,v)
break
case"city":w.bG1(d,e,v)
break}},
rC(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.W()
v=B.N()
v.r=g.j(A.k.D(h,0,1)).gp(0)
v.a=A.nI
u=new B.aO(w.r,A.ao,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.F(new B.b5(w,s))
u.F(new B.cW(w,t,w+f,t))
u.F(new B.cW(w,t,w,t+f))
u.F(new B.cW(w,t,w-f,t))
u.F(new B.cW(w,t,w,s))
u.F(new B.bE())
d.aR(u,v)
d.af(e,f*0.18,v)},
lN(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cY(q,v)*2.5)+C.cY(q,u)*6.28)+1)/2
this.rC(d,new B.v(C.cY(q,t)*o,C.cY(q,s)*n),m*(0.006+0.014*C.cY(q,r))*(0.5+p),h,p*p)}},
aSy(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lN(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bM,A.aF],w),B.a([A.iy,A.bD],w),B.a([A.ev,A.aN],w),B.a([A.c,A.ay],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bm(k/2.8)
i=A.k.E(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cY(h,1))
f=g+c0*(C.cY(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cY(h,3))
d=v[Math.abs(A.o.E(h,4))]
if(i<0.22){a0=B.lj(new B.v(g,c1),new B.v(f,e),A.cu.aA(0,i/0.22))
a0.toString
$.W()
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.sar(new B.a8(A.a3,A.a8,A.x,B.a([d[0].j(0),d[0]],w),null,null).av(0,B.rz(new B.v(g,c1),a0)))
a1.c=n
a1.d=A.bS
a2=B.lj(new B.v(g,c1),a0,0.75)
a2.toString
a3=a1.H()
a4=a0.a
a0=a0.b
t.drawLine.apply(t,[a2.a,a2.b,a4,a0,a3])
a3.delete()
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.r=A.c.gp(0)
a3=a2.H()
t.drawCircle(a4,a0,m,a3)
a3.delete()}else{a5=(i-0.22)/0.78
a6=A.cu.aA(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.V(q))
a2=C.cY(h,4)
if(a5<0.15){a4=1-a5/0.15
$.W()
a8=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a8.r=d[0].j(0.5*a4).gp(0)
a8.z=new B.hC(A.G,o)
a3=a8.H()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cY(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cY(h,b1+60))
b4=f+Math.cos(b2)*b3
b5=e+Math.sin(b2)*b3+a9
b6=Math.cos(b2)
b7=Math.sin(b2)
b8=(b1&1)===0?d[0]:d[1]
$.W()
b9=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
b9.r=b8.j(a8).gp(0)
b9.c=u
b9.d=A.bS
b9.a=A.nI
a3=b9.H()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cY(h,b1+120)>0.5)this.rC(c3,new B.v(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bHn(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.E(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.W(),a0=B.N()
a0.sar(new B.a8(A.az,A.aC,A.x,D.dbg,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).av(0,new B.a9(0,0,f,e)))
a1.b0(new B.a9(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.E(a3*(h*(0.08+0.12*C.cY(u,1)))+C.cY(u,2)*w,w)
s=C.cY(u,3)
r=Math.sin(a3*(0.8+C.cY(u,4))+u)
q=h*(0.012+0.012*C.cY(u,5))
p=Math.cos(a3*(2+3*C.cY(u,6))+u)
o=D.PO[A.o.D(A.k.bm(C.cY(u,7)*5),0,4)]
J.by(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cY(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t=Math.abs(p)
n.r=B.aq(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.E(u,5)===0){t=B.a([],v)
m=new B.aO(d.r,A.ao,null,null,t)
d=-q*2
t.push(new B.b5(d,0))
for(l=1;l<=8;++l){s=new B.ap(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.bC(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.W()
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=B.b0(n.r).gp(0)
t.b=A.ae
t.c=q*0.35
k=t.H()
t=m.e
f.drawPath((t==null?m.e=new B.cC(m.gbK().a.snapshot()):t).a,k)
k.delete()}else{t=B.ch(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.H()
f.drawRect(B.c0(t),k)
k.delete()}f.restore()}this.lN(a1,a2,a3,25,A.bM,30)},
bJ_(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.v(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.W()
n=B.a([],r)
m=new B.aO(o.r,A.ao,a4,a4,n)
n.push(new B.b5(a5,a6))
o=p-0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bE())
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.sar(new B.bT(A.A,0.5,A.x,a4,0,B.a([A.bM.j(0.22),D.bc2],v),a4,a4).av(0,B.bU(w,u)))
l=o.H()
o=m.gbK().a.snapshot()
t.drawPath((m.e=new B.cC(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.aO($.W().r,A.ao,a4,a4,B.a([],r))
v=a6+j
i.F(new B.b5(a5,v))
u=j*0.3
s=a6+u
i.F(new B.ap(a5,s))
o=a6+j*0.6
i.F(new B.ap(a5+k*0.22,o))
i.F(new B.ap(a5+k*0.5,a6))
i.F(new B.ap(a5+k*0.78,o))
o=a5+k
i.F(new B.ap(o,s))
i.F(new B.ap(o,v))
i.F(new B.bE())
h=A.k.D(b0/1.8,0,1)
s=h>=1
if(s){n=B.N()
n.sar(new B.a8(A.b0,A.b4,A.x,D.d9Y,a4,a4).av(0,new B.a9(a5,a6,o,v)))
a8.aR(i,n)
for(v=[D.erJ,D.elc,D.eAV],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
a0=d.b
d=a5+k*d.a
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=a0.gp(a0)
l=a1.H()
t.drawCircle(d,o,n,l)
l.delete()
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=A.ad.gp(0)
l=a1.H()
t.drawCircle(d-g,f,g,l)
l.delete()}for(v=[0,0.5,1],o=a7*0.014,e=0;e<3;++e){a2=v[e]
n=a2===0.5?0:u
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.i1.gp(0)
l=g.H()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.x9(i),u=B.a([],x.X),o=new B.vD(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b8(B.jY(y.M));--f
o.jz()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aO(n,v.b,a4,new B.cA([new B.Hp(o,f),0,d*h,!0]),B.a([],r))
f=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
f.b=A.ae
f.c=g
f.e=A.fG
f.r=A.bM.gp(0)
l=f.H()
f=d.gbK().a.snapshot()
t.drawPath((d.e=new B.cC(f)).a,l)
l.delete()}if(s){a3=A.k.E(b0*0.5,1)
this.rC(a8,new B.v(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lN(a8,a9,b0,45,A.bM,40)},
bBR(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lN(a8,a9,b0,60,A.c,50)
w=[D.eM2,D.eLL,D.eLF,D.eN0]
for(v=a7*0.01,u=a8.a,t=a7*0.14,s=a7*0.06,r=a5+10,q=a5/40,p=x.v,o=0;o<4;++o){n=w[o].a
m=n[0]
l=n[1]
k=n[2]
j=n[3]
n=$.W()
i=B.a([],p)
h=new B.aO(n.r,A.ao,null,null,i)
for(n=a6*l,g=b0*k,f=g*1.4,e=0;e<=r;e+=q){d=e/a5
a0=n+Math.sin(d*4+g+j)*a7*0.07+Math.sin(d*9-f+j)*a7*0.025
if(e===0){d=new B.b5(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bC(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.ap(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bC(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.W()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.nI
n.z=new B.hC(A.G,s)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cC(h.gbK().a.snapshot()):n).a,a2)
a2.delete()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.nI
n.z=new B.hC(A.G,v)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cC(h.gbK().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.E(t*(0.05+0.06*C.cY(a4,1))+C.cY(a4,2)*a3,a3)
r=C.cY(a4,3)
q=Math.sin(b0+a4)
p=C.cY(a4,4)
$.W()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.vp.j(0.4+0.5*C.cY(a4,5)).gp(0)
n.a=A.nI
a2=n.H()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bFc(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.W(),a0=B.N()
a0.sar(new B.bT(A.A,0.5,A.x,l,0,B.a([A.hK.j(0.25+0.1*h),D.Xh],x.O),l,l).av(0,B.bU(new B.v(g,f),e)))
a1.af(new B.v(g,f),e,a0)
for(h=i*0.008,g=a1.a,f=a3*3,e=x.v,w=0;w<6;++w){v=(w&1)===0
a0=B.a([],e)
u=new B.aO(d.r,A.ao,l,l,a0)
d=v?0:k
t=j*(0.05+w*0.07)
a0.push(new B.b5(d,t))
for(s=1;s<=20;++s){d=s/20*k
r=v?d*0.45:k-d*0.45
d=new B.ap(r,t+s*i*0.012+Math.sin(s*0.8+f+w)*i*0.02)
a0.push(d)
q=u.f
if(q!=null)d.bC(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.W()
a0=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=h
a0.r=D.PO[A.o.E(w,4)].j(0.7).gp(0)
p=a0.H()
a0=u.e
g.drawPath((a0==null?u.e=new B.cC(u.gbK().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.E(a3*(i*(0.07+0.12*C.cY(w,1)))+C.cY(w,2)*o,o)
r=k*(0.1+0.8*C.cY(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cY(w,4))
if(n<f){this.rC(a1,new B.v(r,n),m*2.4,A.bM,A.k.D(n/f,0,1))
continue}$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.xl.j(0.75).gp(0)
p=d.H()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.8).gp(0)
p=t.H()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bLa(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lN(a9,b0,b1,30,A.lf,60)
for(w=Math.max(4,A.k.V(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cY(p,1))
n=a7+o*4
m=A.k.E(t*(0.04+0.06*C.cY(p,2))+C.cY(p,3)*n,n)-o*2
l=C.cY(p,4)*a6+Math.sin(s+p)*a8*0.02
J.by(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.W()
g=B.a([],q)
f=new B.aO(h.r,A.ao,a5,a5,g)
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
g.push(new B.bE())
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.sar(new B.a8(A.az,A.aC,A.x,D.d5J,a5,a5).av(0,B.ch(A.J,k*1.2,o)))
a2=g.H()
g=f.gbK().a.snapshot()
v.drawPath((f.e=new B.cC(g)).a,a2)
a2.delete()
a3=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
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
if(a4>0.85)this.rC(a9,new B.v(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
cw_(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.W()
o=B.a([],v)
n=new B.aO(p.r,A.ao,null,null,o)
o.push(new B.b5(h,g))
p=s-q
o.push(new B.ap(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.ap(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.bE())
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bM.j(r?0.12:0.07).gp(0)
m=p.H()
r=n.gbK().a.snapshot()
w.drawPath((n.e=new B.cC(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.E(a0+l*0.6,1.8)/1.8
$.W()
u=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
r=1-k
u.c=v*r
u.r=A.bM.j(r*0.6).gp(0)
m=u.H()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bm(a0/2.4)
k=A.k.E(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cY(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.boi.aA(0,k)*(0.5+0.5*C.cY(t,v)))
this.rC(d,new B.v(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cY(t,3)),D.PO[A.o.D(A.k.bm(C.cY(t,4)*5),0,4)],u)}},
bC4(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cY(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.E(q*(0.05+0.05*C.cY(o,2))+C.cY(o,3)*m,m)
j=C.cY(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.awb[A.o.E(o,6)]
h=$.W()
g=B.a([],s)
f=new B.aO(h.r,A.ao,a3,a3,g)
h=k+n*1.15
g.push(new B.b5(j,h))
for(e=1;e<=6;++e){d=new B.ap(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bC(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.H()
d=f.e
u.drawPath((d==null?f.e=new B.cC(f.gbK().a.snapshot()):d).a,a1)
a1.delete()
a2=B.ch(new B.v(j,k),n*2.3,l)
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d=B.aq(i,A.w,0.35)
d.toString
l.sar(new B.bT(D.aXv,0.9,A.x,a3,0,B.a([A.c,i,d],t),V.aw2,a3).av(0,a2))
a1=l.H()
u.drawOval(B.c0(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aO(g.r,A.ao,a3,a3,l)
d=n*0.12
l.push(new B.b5(j-d,h))
l.push(new B.ap(j+d,h))
l.push(new B.ap(j,k+n))
l.push(new B.bE())
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=B.aq(i,A.w,0.3).gp(0)
a1=l.H()
l=g.gbK().a.snapshot()
u.drawPath((g.e=new B.cC(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.E(q*(0.1+0.1*C.cY(o,11))+C.cY(o,12)*m,m)
r=C.cY(o,13)
J.by(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.ch(A.J,t,v)
$.W()
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=D.awb[A.o.E(o,6)].j(0.85).gp(0)
a1=r.H()
u.drawRect(B.c0(s),a1)
a1.delete()
u.restore()}},
bQ7(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.v(a8,a9)
this.lN(b1,b2,b3,50,A.c,70)
for(w=[D.eMa,D.eLR,D.eLX],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.W()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.sar(new B.bT(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).av(0,B.bU(new B.v(r,m),l)))
j=k.H()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.V(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.E(i,3)
g=C.cY(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cY(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.aq(A.bM,A.eC,g)
k.toString
d=C.cY(i,3)
$.W()
a0=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=k.j(0.5+0.5*C.cY(i,4)).gp(0)
a0.a=A.nI
j=a0.H()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.W()
a9=B.N()
a9.sar(new B.bT(A.A,0.5,A.x,a4,0,B.a([A.xl.j(0.55),D.afD],u),a4,a4).av(0,B.bU(b0,a8)))
b1.af(b0,a8,a9)
a1=A.k.E(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bm(b3/3.5)
a3=new B.v(a5*(0.1+0.5*C.cY(a2,9)),a6*0.1*C.cY(a2,8))
a5=B.lj(a3,a3.ad(0,new B.v(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.lj(a3,a5,0.6)
a6.toString
a8=B.N()
a8.sar(new B.a8(A.a3,A.a8,A.x,B.a([A.c.j(0),A.c],u),a4,a4).av(0,B.rz(a3,a5)))
a8.c=a7*0.005
a8.d=A.bS
b1.bE(a6,a5,a8)}},
cmV(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.W()
n=B.a([],s)
m=new B.aO(o.r,A.ao,b5,b5,n)
n.push(new B.b5(q,u))
o=p-0.16
n.push(new B.ap(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.ap(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.bE())
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.sar(new B.bT(A.A,0.5,A.x,b5,0,B.a([A.xl.j(0.28),D.afD],w),b5,b5).av(0,B.bU(new B.v(q,u),t)))
o.a=A.nI
l=o.H()
q=m.gbK().a.snapshot()
v.drawPath((m.e=new B.cC(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.er:A.eK)
a9=$.W()
b0=B.a([],s)
m=new B.aO(a9.r,A.ao,b5,b5,b0)
b0.push(new B.b5(a5?0:b6,0))
b0.push(new B.ap(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.cW(a9,k,a5?g:a1,b7))
b0.push(new B.ap(a5?0:b6,b7))
b0.push(new B.bE())
a9=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a9.sar(new B.a8(A.a3,A.a8,A.x,a7,b5,b5).av(0,new B.a9(a6,0,a6+i,j)))
l=a9.H()
a9=m.gbK().a.snapshot()
v.drawPath((m.e=new B.cC(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
b1.r=A.hK.gp(0)
b1.c=o
b1.d=A.bS
l=b1.H()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aO($.W().r,A.ao,b5,b5,B.a([],s))
w=b7*0.78
b2.F(new B.b5(b6*0.42,w))
b2.F(new B.ap(b6*0.58,w))
b2.F(new B.ap(b6*0.8,b7))
b2.F(new B.ap(b6*0.2,b7))
b2.F(new B.bE())
v=B.N()
v.sar(D.bYx.av(0,new B.a9(0,w,0+b6,w+b7*0.22)))
b9.aR(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.E(b7*(0.05+0.07*C.cY(r,1))+C.cY(r,2)*b3,b3)
u=C.cY(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rC(b9,new B.v(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cY(r,4)),A.bM,0.3+0.7*((q+1)/2))}},
bGK(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cY(t,1))
r=h+s*4
q=s*2
p=A.k.E(u*(0.12+0.12*C.cY(t,2))+C.cY(t,3)*r,r)-q
o=C.cY(t,4)*i
n=Math.cos(f*(2+3*C.cY(t,5))+t)
m=Math.abs(n)
l=B.ch(new B.v(o,p),q,q*A.k.D(m,0.12,1))
$.W()
q=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
q.sar(new B.a8(A.az,A.aC,A.x,n>0?D.dle:D.cDs,null,null).av(0,l))
k=q.H()
v.drawOval(B.c0(l),k)
k.delete()
q=-(s*0.22)
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=Math.max(0.6,s*0.08)
j.r=D.bl7.gp(0)
k=j.H()
v.drawOval(B.c0(new B.a9(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rC(d,new B.v(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lN(d,e,f,30,A.bM,110)},
c_k(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lN(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cY(p,1))
n=a1+o*4
m=a1+o*2-A.k.E(t*(0.03+0.04*C.cY(p,2))+C.cY(p,3)*n,n)
l=C.cY(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.W()
h=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
h.sar(new B.bT(A.A,0.5,A.x,d,0,B.a([W.Xv.j(0.45*k),D.aet],u),d,d).av(0,B.bU(new B.v(l,m),j)))
g=h.H()
v.drawCircle(l,m,j,g)
g.delete()
j=B.a([],q)
f=new B.aO(i.r,A.ao,d,d,j)
i=o*0.5
h=o*0.7
e=m-h
j.push(new B.b5(l-i,e))
j.push(new B.ap(l+i,e))
i=o*0.38
h=m+h
j.push(new B.ap(l+i,h))
j.push(new B.ap(l-i,h))
j.push(new B.bE())
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i=B.aq(D.bcc,A.c,0.2*k)
i.toString
j.sar(new B.a8(A.b0,A.b4,A.x,B.a([D.bgF,i],u),d,d).av(0,B.ch(new B.v(l,m),o*1.4,o)))
g=j.H()
j=f.gbK().a.snapshot()
v.drawPath((f.e=new B.cC(j)).a,g)
g.delete()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(k).gp(0)
g=j.H()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bXX(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cY(p,1))
n=a1+o*4
m=A.k.E(s*(0.05+0.06*C.cY(p,2))+C.cY(p,3)*n,n)
l=C.cY(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.by(v.save())
v.translate(l*a0+k*a2*0.03,a1+o*2-m)
v.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
v.scale(j,j)
m=$.W()
l=B.a([],t)
i=new B.aO(m.r,A.ao,d,d,l)
m=o*0.9
l.push(new B.b5(0,m))
k=-o
h=k*0.2
g=k*1.6
l.push(new B.pH(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.pH(m,g,o*1.8,h,0,m))
l.push(new B.bE())
f=D.cXG[A.o.E(p,5)]
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l=B.aq(f,A.w,0.25)
l.toString
m.sar(new B.bT(A.t5,0.5,A.x,d,0,B.a([A.c,f,l],u),I.a2v,d).av(0,B.bU(A.J,o*1.4)))
e=m.H()
m=i.gbK().a.snapshot()
v.drawPath((i.e=new B.cC(m)).a,e)
e.delete()
v.restore()}this.lN(a3,a4,a5,30,A.iy,130)},
ci1(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cY(q,1))
o=g+p*4
n=A.k.E(t*(0.05+0.06*C.cY(q,2))+C.cY(q,3)*o,o)
m=C.cY(q,4)
l=Math.sin(s+q*0.7)
J.by(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cY(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.W()
m=B.a([],u)
k=new B.aO(n.r,A.ao,i,i,m)
n=-p
m.push(new B.b5(0,n))
l=n*0.2
m.push(new B.cW(p,l,0,p))
m.push(new B.cW(n,l,0,n))
m.push(new B.bE())
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
m=(q&1)===0?D.cxI:D.d71
n.sar(new B.a8(A.a3,A.a8,A.x,m,i,i).av(0,B.bU(A.J,p)))
j=n.H()
n=k.gbK().a.snapshot()
v.drawPath((k.e=new B.cC(n)).a,j)
j.delete()
v.restore()}this.lN(d,e,a0,25,A.bM,140)},
bEa(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lN(b0,b1,b2,40,A.bM,150)
for(w=Math.max(4,A.k.V(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cY(r,1))
p=Math.sin(b2*(0.15+0.1*C.cY(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cY(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.by(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.by(v.save())
v.scale(a1*n,1)
a2=$.W()
a3=B.a([],u)
a4=new B.aO(a2.r,A.ao,a6,a6,a3)
a3.push(new B.b5(0,0))
a3.push(new B.pH(f,e,l,d,h,0))
a3.push(new B.pH(q,h,g,q,0,h))
a3.push(new B.bE())
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.sar(new B.a8(A.a3,A.a8,A.x,i?D.d6L:D.d9r,a6,a6).av(0,new B.a9(0,m,k,j)))
a5=a2.H()
a2=a4.gbK().a.snapshot()
v.drawPath((a4.e=new B.cC(a2)).a,a5)
a5.delete()
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.b=A.ae
a2.c=Math.max(0.6,o)
a2.r=D.AT.gp(0)
a5=a2.H()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cC(a4.gbK().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.W()
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=D.bkq.gp(0)
p.c=q*0.1
p.d=A.bS
a5=p.H()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c3g(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.v(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.E(w+t/4,1)
r=f*(0.2+0.7*s)
$.W()
q=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=v
q.r=D.axg[t].j((1-s)*0.9).gp(0)
q.z=new B.hC(A.G,v)
p=r*0.3
p=B.bx(B.ch(e,r,r*1.6),new B.aT(p,p))
o=q.H()
u.drawRRect(B.et(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cY(m,1)*4)+m)))
k=D.axg[A.o.E(m,4)]
j=m*n+h
i=g-l
i=B.bx(new B.a9(j,i,j+w,i+l),new B.aT(v,v))
$.W()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=k.j(0.85).gp(0)
j.z=new B.hC(A.aaL,p)
o=j.H()
u.drawRRect(B.et(i),o)
o.delete()}},
bLl(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.v(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cY(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cY(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bM,A.nN,A.ds][A.o.E(p,4)]
j=C.cY(p,3)
$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=k.j(0.75).gp(0)
i.a=A.nI
i.z=new B.hC(A.G,r)
h=i.H()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.W()
t=B.N()
t.r=A.aA.gp(0)
t.c=1.2
a3.bE(new B.v(a0,0),new B.v(a0,w-u),t)
t=B.N()
t.r=A.dy.gp(0)
a3.af(v,u,t)
J.by(q.save())
a1=new B.aO(a1.r,A.ao,null,null,B.a([],x.v))
a1.F(new B.k4(B.bU(v,u)))
a3.qv(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.E(a1,g)
i=Math.sin(e*1.7+l+s)
$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=B.aq(A.bm,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.H()
q.drawRect(B.c0(new B.a9(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.rC(a3,v.ad(0,new B.v(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cxA(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.cu.aA(0,A.k.D(a4/3,0,1))),a1=new B.v(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.W()
q=B.a([],u)
p=new B.aO(r.r,A.ao,h,h,q)
q.push(new B.b5(d,a0))
r=s-0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bE())
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.bM.j(0.1).gp(0)
o=r.H()
r=p.gbK().a.snapshot()
w.drawPath((p.e=new B.cC(r)).a,o)
o.delete()}d=e*0.5
$.W()
a0=B.N()
a0.sar(new B.bT(A.A,0.5,A.x,h,0,B.a([D.b8c.j(0.6),D.aet],x.O),h,h).av(0,B.bU(a1,d)))
a2.af(a1,d,a0)
a0=e*0.2
d=B.N()
d.sar(D.eiJ.av(0,B.bU(a1,a0)))
a2.af(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.E(d*(1+t*0.3)+C.cY(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(0.18).gp(0)
i=B.ch(new B.v(l,k),r,u)
o=j.H()
w.drawOval(B.c0(i),o)
o.delete()
i=B.ch(new B.v(l+q,k-n),r,m)
o=j.H()
w.drawOval(B.c0(i),o)
o.delete()}this.lN(a2,a3,a4,20,A.i1,180)},
ch5(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.W()
q=B.a([],t)
p=new B.aO(r.r,A.ao,f,f,q)
q.push(new B.b5(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.ap(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.bC(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.ap(e,d)
q.push(r)
o=p.f
if(o!=null)r.bC(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.bE()
q.push(r)
q=p.f
if(q!=null)r.bC(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.W()
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=B.aq(A.cA,A.jc,s/3).j(0.55).gp(0)
k=r.H()
r=p.e
w.drawPath((r==null?p.e=new B.cC(p.gbK().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cY(i,1))
g=d-A.k.E(u*(0.04+0.05*C.cY(i,2))+C.cY(i,3)*j,j)
n=C.cY(i,4)*e+Math.sin(a3+i)*a0*0.02
$.W()
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.sar(new B.bT(Am.ps,0.5,A.x,f,0,D.dcU,f,f).av(0,B.bU(new B.v(n,g),h)))
k=t.H()
w.drawCircle(n,g,h,k)
k.delete()}this.lN(a1,a2,a3,25,A.c,190)},
cvF(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cY(r,1))
p=f+q*4
o=A.k.E(u*(0.03+0.05*C.cY(r,2))+C.cY(r,3)*p,p)
n=C.cY(r,4)
m=Math.sin(t+r)
$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.j(0.6+0.4*C.cY(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bS
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
h.delete()}v.restore()}this.lN(d,a0,a1,40,A.ev,200)},
c_q(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.v(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.D(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dk(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.by(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.ch(new B.v(p,0),q,r)
$.W()
f=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
f.sar(D.bYk.av(0,new B.a9(0,o,n,m)))
e=f.H()
s.drawOval(B.c0(g),e)
e.delete()
s.restore()}}$.W()
a0=B.N()
a0.b=A.ae
a0.c=a2*0.003
a0.r=D.bct.gp(0)
a3.af(w,v*1.08,a0)
d=a5*0.8
this.rC(a3,w.ad(0,new B.v(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lN(a3,a4,a5,40,A.bM,210)},
cps(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hK,A.i1],a6),B.a([A.oK,A.iy],a6),B.a([A.aE,A.eC],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bQ<ak.E>"),q=s.k("ak.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.W()
k=B.a([],o)
j=new B.aO(l.r,A.ao,null,null,k)
i=B.a([],n)
for(l=m*0.2,h=a4*(0.3+l),l=b0*(0.8+l),g=0;g<=40;++g){f=g/40
e=f*a3
d=h+Math.sin(f*5+l+m)*a5*0.1
a0=a5*(0.03+0.03*(0.5+0.5*Math.sin(f*7+p+m)))
f=d-a0
if(g===0){f=new B.b5(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bC(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.ap(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bC(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.v(e,d+a0))}for(l=new B.dx(i,s),l=new B.bQ(l,l.gM(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.ap(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.bC(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bE()
k.push(l)
k=j.f
if(k!=null)l.bC(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k=a7[m]
h=k[0]
l.sar(new B.a8(A.a3,A.a8,A.x,B.a([h,k[1],h],a6),I.awT,new B.mp(w)).av(0,new B.a9(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.H()
l=j.e
t.drawPath((l==null?j.e=new B.cC(j.gbK().a.snapshot()):l).a,a2)
a2.delete()}this.lN(a8,a9,b0,40,A.c,220)},
c_8(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.E(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.E(A.k.bm(g/t),5)
a1=g+t
$.W()
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a3=Math.abs(a0)
a2.r=D.a2y[a3].gp(0)
a4=a2.H()
s.drawRect(B.c0(new B.a9(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a5.r=D.a2y[A.o.E(a3+2,5)].gp(0)
a4=a5.H()
s.drawRect(B.c0(new B.a9(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.E(n*(0.04+0.05*C.cY(a0,1))+C.cY(a0,2)*a6,a6)
v=C.cY(a0,3)
t=C.cY(a0,4)
this.rC(b1,new B.v(v*a7,l-a8),a9*(0.01+0.012*t),D.a2y[A.o.E(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cBf(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.W()
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.c=v
p.r=A.bM.j(0.06).gp(0)
o=p.H()
u.drawLine.apply(u,[a1,a2,a1+r*a3*1.2,a2+q*a3*1.2,o])
o.delete()}n=a3*0.16
m=a3*0.17
a2=a2-m-m
l=new B.aO($.W().r,A.ao,null,null,B.a([],x.v))
w=n/2
v=a1-w
l.F(new B.b5(v,a2))
w=a1+w
l.F(new B.ap(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.F(new B.cW(w,r,p,k))
w=a2+m*0.95
l.F(new B.ap(p,w))
p=n*0.3
j=a2+m
l.F(new B.ap(a1+p,j))
l.F(new B.ap(a1-p,j))
q=a1-q
l.F(new B.ap(q,w))
l.F(new B.ap(q,k))
l.F(new B.cW(v,r,v,a2))
l.F(new B.bE())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.ch(new B.v(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=q
d.r=A.ay.gp(0)
o=d.H()
u.drawArc.apply(u,[B.c0(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.N()
a1.sar(new B.a8(A.a3,A.a8,A.x,D.dfm,A.awi,null).av(0,new B.a9(v,a2,r,j)))
a4.aR(l,a1)
a0=A.k.E(a6*0.6,1.4)
if(a0<1)this.rC(a4,new B.v(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bHo(a4,a5,a6,60)},
bHo(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.E(k*(0.1+0.1*C.cY(p,31))+C.cY(p,32)*v,v)
n=C.cY(p,33)
J.by(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.ch(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.W()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.PO[A.o.E(p,5)].gp(0)
m=n.H()
u.drawRect(B.c0(o),m)
m.delete()
u.restore()}},
ctu(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lN(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cY(o,1)*1.6
m=A.k.E(a2+C.cY(o,2)*n,n)/n
l=e*(C.cY(o*7+A.k.bm((a2+C.cY(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.v(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.W()
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.sar(new B.a8(A.a3,A.a8,A.x,B.a([A.c.j(0),A.bM],s),null,null).av(0,B.rz(new B.v(l,h),i)))
g.c=r
g.d=A.bS
f=g.H()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rC(a0,i,p,A.c,1-m)}},
bCp(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cY(r,1))
p=A.k.E(C.cY(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.E(C.cY(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.W()
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l=A.o.E(r,5)
m.r=D.ayO[l].j(n).gp(0)
m.a=A.nI
m.z=new B.hC(A.G,q*0.12)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=Math.max(0.6,q*0.05)
m.r=D.ayO[l].j(n*1.4).gp(0)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()}},
ceJ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.by(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.ch(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.W()
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=u
o.r=A.bM.j(0.45).gp(0)
n=o.H()
w.drawOval(B.c0(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.i1.gp(0)
n=k.H()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.hK.j(0.4).gp(0)
k.z=new B.hC(A.G,r)
n=k.H()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lN(d,e,f,45,A.bM,270)},
bPn(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.E(o,4)
m=C.cY(o,1)
A:{if(0===n){l=new B.v(m*a2,p)
break A}if(1===n){l=new B.v(m*a2,q)
break A}if(2===n){l=new B.v(r,m*a3)
break A}l=new B.v(s,m*a3)
break A}k=A.k.E(a7+C.cY(o,2)*4,4)/4
j=A.ew.aA(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cY(o,3))*(j*i)
if(h<=0.5)continue
g=D.d3T[A.o.E(o,5)]
J.by(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.ch(new B.v(0,l),i,j)
$.W()
a0=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.sar(new B.a8(A.b0,A.b4,A.x,B.a([A.c,g],u),null,null).av(0,B.ch(new B.v(0,l),f,h)))
a1=a0.H()
v.drawOval(B.c0(d),a1)
a1.delete()}$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.hK.gp(0)
a1=l.H()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lN(a5,a6,a7,30,A.i1,280)},
c2Z(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.E(t+n/4,1)
l=B.bU(new B.v(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.W()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=v
j.r=D.avn[n].j((1-m)*0.8).gp(0)
i=j.H()
u.drawArc.apply(u,[B.c0(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.E(v*(0.06+0.06*C.cY(g,1))+C.cY(g,2)*h,h)
e=C.cY(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cY(g,4))
a0=D.avn[A.o.E(g,4)]
$.W()
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=a0.gp(0)
J.by(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.ch(A.J,d,d*1.5)
i=a1.H()
u.drawOval(B.c0(s),i)
i.delete()
u.restore()
s=e+d*0.65
p=f-d*2.6
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.18)
i=o.H()
u.drawLine.apply(u,[s,f,s,p,i])
i.delete()
if((g&1)===0){o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.3)
i=o.H()
u.drawLine.apply(u,[s,p,e+d*1.6,f-d*2,i])
i.delete()}}},
c1q(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.v(a4,a5)
for(v=a7.a,u=a6*0.004,t=a6*0.003,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.by(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=-o,l=m*1.16,k=q/3,j=m*0.12,i=m*0.82,h=o*0.12,g=m*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.W()
a0=B.a([],s)
a1=new B.aO(d.r,A.ao,a3,a3,a0)
a0.push(new B.b5(0,i))
a0.push(new B.cW(h,m,0,g))
a0.push(new B.cW(j,m,0,i))
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=t
d.r=B.aq(A.bM,A.nN,k).j(0.7).gp(0)
a2=d.H()
d=a1.gbK().a.snapshot()
v.drawPath((a1.e=new B.cC(d)).a,a2)
a2.delete()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.i1.j(0.8).gp(0)
a2=d.H()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.W()
a5=B.N()
a5.sar(new B.bT(A.A,0.5,A.x,a3,0,B.a([A.hK.j(0.25),D.Xh],x.O),a3,a3).av(0,B.bU(w,a4)))
a7.af(w,a4,a5)
this.lN(a7,a8,a9,30,A.bM,300)},
cvO(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.W()
h=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.bm.gp(0)
h.c=q
h.d=A.bS
g=h.H()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.sar(new B.bT(A.A,0.5,A.x,null,0,B.a([A.i1,A.hK.j(0.6),D.Xh],o),null,null).av(0,B.bU(new B.v(j,i),p)))
g=l.H()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.cY(f,1)
d=A.k.E(b2+C.cY(f,2)*e,e)/e
a0=A.k.bm((b2+C.cY(f,2)*e)/e)
a1=C.cY(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cY(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=B.aq(A.i1,A.aF,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bS
a6.a=A.nI
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
g.delete()}}}this.lN(b0,b1,b2,35,A.bM,310)},
bG1(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aSy(a9,new B.ar(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cY(n,1))
l=a8*(0.14+0.24*C.cY(n,2))
k=a8-l
j=new B.a9(o,k,o+m,k+l)
$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.sar(D.bZf.av(0,j))
h=i.H()
r.drawRect(B.c0(j),h)
h.delete()
g=A.k.bm(m/q)
f=A.k.bm(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cY(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.W()
a6=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=A.bM.j(0.85).gp(0)
h=a6.H()
r.drawRect(B.c0(new B.a9(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
au(d){return d.b!==this.b||d.d!==this.d}}
C.aZU.prototype={
B(d){var w,v=null,u=new C.c8U(),t=new C.c8W(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.ao8,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c8V(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.GZ[w]))
return B.bV(A.bA,s,A.br,12,10)}}
C.Ze.prototype={
T(){return new C.azD()}}
C.azD.prototype={
gvC(){var w=this.d
return w===$?this.d=this.a.c:w},
gaZH(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.as(new B.bb(w.b,A.b5,A.aO),$.aw())}return v},
gax9(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaKE()
v=$.aw()
u.f!==$&&B.bL()
t=u.f=new B.as(new B.bb(w,A.b5,A.aO),v)}return t},
q(){var w=this.gaZH(0),v=$.aw()
w.U$=v
w.P$=0
w=this.gax9()
w.U$=v
w.P$=0
this.a2()},
ZR(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$ZR=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i2().C3(90,700,700,A.eJ),$async$ZR)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fn(),$async$ZR)
case 8:p=e
o=q.b.toLowerCase()
n=J.ahN(o,".png")?"image/png":"image/jpeg"
r.m(new C.d8n(r,n,p))
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
return B.i($async$ZR,v)},
aZG(d){var w=null,v=A.c.j(0.07)
return B.bs(w,new B.b4(4,B.n(12),A.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aQU,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.agR(p.gvC().a)
if(n==null)n=A.d.gI(D.GZ)
w=p.gvC()
v=p.r
u=x.p
v=B.E(new B.an(A.W,o,A.aa,A.r,B.a([B.bZ(0,new C.Nn(p.gvC(),!1,!0,new B.cx(w.a+v,x.W)),0,0,0),B.ao(o,B.HJ(A.mD,new C.d8s(d),B.nB(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.HJ(D.bIF,new C.d8t(p),B.nB(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aQO,o,o,o)
t=B.E(B.aM(o,A.U,!1,o,!0,A.r,o,B.aN(),p.gaZH(0),o,o,o,o,o,2,p.aZG("Big words"),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d8u(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.hu,!0,A.a4,o,A.an,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hK.j(0.6),A.q,1)
if(p.gvC().d.length===0)q=D.bM0
else{q=C.hhQ(p.gvC().d)
if(q==null)q=new Uint8Array(0)
q=B.hZ(B.fP(q,A.A,o,o,A.ci,A.bV,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ab,B.aC(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a5),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc8H(),o,o,o,o,o,o,!1,A.a7)],u)
if(p.gvC().d.length!==0)r.push(B.aH(o,o,o,o,D.a1m,o,o,o,new C.d8v(p),o,o,o,o,"Remove logo",o))
return B.c8(o,A.w,B.bm(!0,B.x(B.a([v,B.p(o,B.x(B.a([w,A.R,B.B(r,A.m,o,A.e,A.j,0,o,o),A.O,B.aM(o,A.U,!1,o,!0,A.r,o,B.aN(),p.gax9(),o,o,o,o,o,2,p.aZG("Line under it"),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d8w(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.dp,!0,A.a4,o,A.an,o,o,o,o),A.ac,B.dn(D.bKU,D.fE5,new C.d8x(p,d),B.bn(A.ay,o,o,o,A.w,o,A.cm,o,new B.b7(B.n(14),A.Y),o,o,o))],u),A.ai,o,A.e,A.N,0,A.p),A.f,o,o,D.b0U,o,o,o,o,A.Fw,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.aLh.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
C.Zz.prototype={
T(){return new C.bfU(new B.as(A.as,$.aw()))}}
C.bfU.prototype={
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.I,m=n?A.c:A.M,l=n?A.aS:A.ak,k=B.aI(d,A.bW,x.w).w,j=n?A.M:A.c,i=B.n(28),h=B.I(n?A.bE:A.aL,A.q,1),g=x.p,f=B.B(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.X(A.cD,l,o,o,o,o),o,o,o,new C.dfa(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cP1[w]
u=B.a([],g)
for(t=J.aV(v.b);t.C();){s=t.gR(t)
r=new B.aT(12,12)
q=new B.aT(12,12)
p=n?A.c.j(0.06):A.bL
u.push(B.aL(!1,new B.bp(r,r,r,r),!0,B.p(A.A,new B.y(s,o,A.pk,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bp(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dfb(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hP,new B.y(v.a.toUpperCase(),o,new B.H(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.Ci(A.bA,6,6,A.br,u,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.O)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bn:A.aQ
e.push(B.B(B.a([B.E(B.aM(o,A.U,!1,o,!0,A.r,o,B.aN(),this.d,o,o,o,o,o,2,B.bs(o,new B.b4(4,B.n(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a4,o,A.an,o,o,o,o),1),A.ab,B.bG(A.aRN,new C.dfc(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.O)
return B.bm(!0,B.p(o,B.x(B.a([f,new B.dq(1,A.co,B.cw(e,o,o,o,o,A.ah,!0),o)],g),A.F,o,A.e,A.N,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.tO,A.Zc,o,o,o),!0,!1,A.af,!0,!0)}}
C.bfh.prototype={
a4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eE()
a2.dt(this.c)
w=this.b
v=w/6.283185307179586
$.W()
u=B.N()
u.z=A.Rr
t=B.N()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.aj()
l=a2.aj()
k=a2.aj()
j=0.8+a2.aj()*2.2
i=Math.sin(w*(3+a2.aw(4))+n)
h=A.k.E(l-v*(0.4+k*0.9),1)
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
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=e.gp(0)
a1.c=1
d=a1.H()
s.drawLine.apply(s,[k-a0,g,k+a0,g+0,d])
d.delete()
d=a1.H()
s.drawLine.apply(s,[k,g-a0,k+0,g+a0,d])
d.delete()}}},
au(d){return d.b!==this.b}}
C.beZ.prototype={
a4(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bx(new B.a9(0,0,0+a7.a,0+a7.b),A.kd),a2=this.b,a3=Math.sin(a2*2),a4=$.W(),a5=B.N()
a5.b=A.ae
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.lv
a6.aE(a1,a5)
a5=x.v
a4=new B.aO(a4.r,A.ao,a0,a0,B.a([],a5))
a4.F(new B.iN(a1))
v=new B.Ss(new B.vD(B.x9(a4),!1,B.a([],x.X))).gI(0)
a4=v.a
a3=v.b
a4.jz()
u=a4.e
t=u[a3].b
t===$&&B.c()
t=t.a.length()
s=a2/6.283185307179586*t
w=B.aq(w,A.c,0.8)
w.toString
for(a2=a4.a,r=a2.a,q=a6.a,p=t*0.14,o=0;o<2;++o){n=A.k.E(s+o*t/2,t)
for(m=0;m<10;m=l){l=m+1
k=l/10
$.W()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.d=A.bS
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.E(n-p*(1-m/10),t)
h=A.k.E(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aO(r,k,a0,new B.cA([v,i,h,!0]),B.a([],a5))
g=j.H()
f=k.gbK().a.snapshot()
q.drawPath((k.e=new B.cC(f)).a,g)
g.delete()}else{k=new B.aO(r,k,a0,new B.cA([v,i,t,!0]),B.a([],a5))
g=j.H()
f=k.gbK().a.snapshot()
q.drawPath((k.e=new B.cC(f)).a,g)
g.delete()
k=new B.aO(r,a2.b,a0,new B.cA([v,0,h,!0]),B.a([],a5))
g=j.H()
f=k.gbK().a.snapshot()
q.drawPath((k.e=new B.cC(f)).a,g)
g.delete()}}a4.jz()
e=u[a3].MK(n).a
$.W()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=w.gp(0)
k.z=A1.mI
g=k.H()
k=e.a
f=e.b
q.drawCircle(k,f,5,g)
g.delete()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.c.gp(0)
g=d.H()
q.drawCircle(k,f,2,g)
g.delete()}},
au(d){return d.b!==this.b}}
C.bnT.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.eE()
e.dt(this.c)
w=a0.a*(0.2+e.aj()*0.6)
v=e.hi()?-0.1:1.1
v=a0.b*v
u=new B.v(w,v)
t=a0.gamh()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.W()
i=B.a([],n)
h=new B.aO(j.r,A.ao,f,f,i)
i.push(new B.b5(w,v))
j=l-k
i.push(new B.ap(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.ap(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.bE())
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.sar(B.aUW(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.jv
g=j.H()
j=h.gbK().a.snapshot()
q.drawPath((h.e=new B.cC(j)).a,g)
g.delete()}},
au(d){return d.b!==this.b}}
C.b9T.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eE()
a0.dt(this.c*7+3)
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
e=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
e.r=f.j(g).gp(0)
e.z=new B.hC(A.G,k*0.35)
d=e.H()
w.drawCircle(i,h,k,d)
d.delete()
e=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
e.b=A.ae
e.c=1
e.r=B.aq(f,A.c,0.5).j(g*0.9).gp(0)
d=e.H()
w.drawCircle(i,h,k,d)
d.delete()}},
au(d){return d.b!==this.b}}
C.b9w.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eE()
a0.dt(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.aj()-0.5)*0.1)
k=v*(0.06+a0.aj()*0.05)
j=a0.aj()*3.141592653589793*2
i=$.W()
h=B.a([],n)
g=new B.aO(i.r,A.ao,null,null,h)
h.push(new B.b5(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.ap(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.bC(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.b=A.ae
i.c=r
i.d=A.bS
if(m===1){h=B.aq(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gp(0)
i.z=new B.hC(A.G,u)
d=i.H()
i=g.e
t.drawPath((i==null?g.e=new B.cC(g.gbK().a.snapshot()):i).a,d)
d.delete()}},
au(d){return d.b!==this.b}}
C.buP.prototype={
a4(d,e){var w,v,u=new B.a9(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.W()
w=B.N()
t=(0.5+0.5*t)*0.12
w.sar(new B.bT(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cWs,null).av(0,u))
d.b0(u,w)
w=u.cz(-3)
v=B.N()
v.b=A.ae
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.jv
d.b0(w,v)},
au(d){return d.b!==this.b}}
C.brP.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bm(d)*7,p=0;p<7;++p){o=new B.eE()
o.dt(q+p)
n=o.aj()*w
m=o.aj()*u
l=Math.sin(A.k.E(A.k.E(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.aj()*0.025)*l
j=B.aq(s,A.c,0.7).j(l)
$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=j.gp(0)
i.c=1.4
i.d=A.bS
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
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.r=A.c.j(l*0.9).gp(0)
g.z=new B.hC(A.G,k*0.3)
h=g.H()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
au(d){return d.b!==this.b}}
C.bqY.prototype={
a4(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a9(0,0,0+e.a,0+e.b)
$.W()
v=B.N()
v.a=A.nI
v.sar(new B.a8(A.az,A.aC,A.x,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).av(0,w))
d.b0(w,v)},
au(d){return d.b!==this.b}}
C.bej.prototype={
a4(d,e){var w,v,u,t,s,r=e.gdB(),q=0.55+0.45*Math.sin(this.b)
$.W()
w=B.N()
w.b=A.ae
w.c=1.4
w.d=A.bS
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.N()
u.b=A.ae
u.c=4
u.r=v.j(0.12*q).gp(0)
u.z=A.rx
r=new C.d84(this,r*0.16,d,u,w)
t=e.gdB()*0.045
r.$3(new B.v(t,t),1,1)
v=e.a-t
r.$3(new B.v(v,t),-1,1)
s=e.b-t
r.$3(new B.v(t,s),1,-1)
r.$3(new B.v(v,s),-1,-1)},
au(d){return d.b!==this.b}}
C.xz.prototype={}
C.IJ.prototype={
a5(){return"NgmySlideElementType."+this.b}}
C.ar4.prototype={
a5(){return"NgmySlideAspectRatio."+this.b}}
C.uJ.prototype={
a5(){return"NgmySlideShapeKind."+this.b}}
C.mx.prototype={
a5(){return"NgmySlideLayout."+this.b}}
C.hF.prototype={
a5(){return"NgmySlideTransition."+this.b}}
C.eM.prototype={
hH(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.er(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ah(){var w,v=this,u=B.U(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"type",v.b.b)
u.n(0,"x",v.c)
u.n(0,"y",v.d)
u.n(0,"w",v.e)
u.n(0,"h",v.f)
u.n(0,"text",v.r)
u.n(0,"fontSize",v.w)
u.n(0,"fontWeight",v.x.gdN(0))
u.n(0,"fontStyle",v.y.a)
u.n(0,"decoration",C.hW_(v.z))
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
C.lH.prototype={
hH(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("M<1,eM>")
n=B.C(new B.M(n,new C.cek(),m),m.k("ak.E"))
return C.rw(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ah(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("M<1,a5<m,@>>")
n=B.C(new B.M(n,new C.cel(),m),m.k("ak.E"))
return B.F(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i5.prototype={
gb9Z(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gS8(){if(!C.kx(this.w))return!1
var w=this.gb9Z()
if(w==null)return!1
return new B.S(Date.now(),0,!1).cZ(w.bV())},
hH(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
q=B.T(r).k("M<1,lH>")
r=B.C(new B.M(r,new C.ce9(),q),q.k("ak.E"))
return C.BI(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ah(){var w,v,u=this,t=B.U(x.N,x.z)
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
v=B.T(w).k("M<1,a5<m,@>>")
w=B.C(new B.M(w,new C.cea(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jH.prototype={}
C.b11.prototype={
B(d){return B.cq(new C.cef(this))}}
C.aof.prototype={
T(){return new C.bj6(null,null)}}
C.bj6.prototype={
gaZI(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.fX,null,1,null,v)
w.cL(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gaZI().q()
this.buS()},
B(d){return B.c6(this.gaZI(),new C.dGP(),this.a.c)}}
C.aL2.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
C.adk.prototype={
PL(d,e,f,g){return this.bP3(d,e,f,g)},
bP3(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$PL=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$PL)
case 3:s=i
if(d.e==null){w=1
break}B.a6(d,!1).O(null)
t=d.J(x.q).f
t.S(B.b2(null,null,null,null,null,A.r,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.eg,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$PL,v)},
B(d){var w=this,v=null,u=B.n(22),t=B.I(A.c.j(0.08),A.q,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dn,24)],x.V),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.b_,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dj,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aR,p,A.am,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a6,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.au,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a6,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d7)
n.push(B.B(B.a([B.E(new C.adC(A.hC,"Download",A.c0,new C.erV(w,d),!0,v),1),A.at,B.E(new C.adC(A.vS,"Share",A.bj,new C.erW(w,d),!1,v),1),A.at,B.E(new C.adC(A.hp,"Safari",A.aZ,new C.erX(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aB)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.erY(d),v,v))
return B.bm(!0,new B.D(A.pY,B.x(B.a([B.p(v,B.x(n,A.ai,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.iW,v,t,u,s,v,A.n),v,v,v,v,A.FD,v,v,1/0)],m),A.m,v,A.e,A.N,0,A.p),v),!0,!1,A.af,!0,!0)}}
C.adC.prototype={
B(d){var w=this,v=null,u=B.n(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.n(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.q,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aF(!1,A.a1,!0,v,B.aL(!1,u,!0,B.eH(B.x(B.a([p,A.O,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.N,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bxN,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ag)}}
C.b1_.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.aqg(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.c8I().akt(1.35)
s=B.avx(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bAm(v)
if(i.e&&i.w!=null)q=B.aM(h,A.U,!1,h,!0,A.r,h,B.aN(),i.w,A.bj,h,h,h,h,2,D.bU2,A.y,!0,h,!0,h,!1,i.x,A.aj,h,h,h,new B.cx("slide_tf_"+g.a,x.W),h,A.ww,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.zI,A.an,h,A.TD,h,h)
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
w=n?t.cII(B.b0(g.Q).j(0.45),A.cF):t
p=g.as
l=m?1:h
k=m?A.eF:A.Dr
p=B.d(f,new B.cx("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Tu:s
$.W()
j=B.N()
j.b=A.ae
j.c=3*w
j.e=A.fG
j.r=A.ax.gp(0)
j=i.cpv(p,t,k,j)
k=g.r
w=new B.an(A.W,h,A.aa,A.r,B.a([j,i.cpt(k,t,l?A.Tu:s)],x.p),h)}else w=i.cpu(p,t,g.k2?A.Tu:s,m)
v=new B.nh(w,new B.cx("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aC(A.c7,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a7)}return new B.D(u,new B.bI(r,h,h,q,h),h)
case 1:case 4:return i.bYC()
case 3:return i.ch4()
case 2:return B.b3(h,h,h,new C.b0X(g,h),A.f5)
case 5:g=g.r
return new C.b0Z(g,!i.e&&i.z==null,h)}},
c8I(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.k3
j=A.cF
break
case"shadow":v=o.d
e=B.a([new B.cR(D.aer,new B.v(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cR(l,A.J,6*v),new B.cR(l,A.J,16*v),new B.cR(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bH
w=A.ax
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mP
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cR(A.bD,new B.v(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.aq(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cR(v,new B.v(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cR(A.b8,new B.v(-3*v,0),0),new B.cR(A.av,new B.v(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cR(A.cs,A.J,8*v),new B.cR(A.av,new B.v(0,-3*v),18*v)],x.r)
k=A.u
w=W.KU
break
case"ice":v=o.d
e=B.a([new B.cR(A.aN,A.J,10*v),new B.cR(A.cA,A.J,22*v)],x.r)
k=A.P
w=A.ev
break
case"chalk":h=o.d
e=B.a([new B.cR(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.k3
break
case"comic":v=B.aq(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cYs[q]
u.push(new B.cR(v,new B.v(p.a*t,p.b*t),0))}u.push(new B.cR(v,new B.v(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.W()
f=B.N()
v=o.d
f.sar(D.bWJ.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cR(A.KJ,new B.v(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.W()
f=B.N()
v=o.d
f.sar(D.bX3.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cR(l,A.J,14*o.d)],x.r)
w=l
k=A.a6
break
case"lowercase":h=2*o.d
w=l
k=A.cx
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cR(l.j(0.45),new B.v(u,u),0),new B.cR(l.j(0.2),new B.v(v,v),0)],x.r)
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
az6(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eSg.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.ced(h)
v=r.k2?C.i7B(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eF:A.Dr
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.XL(B.d3(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cpv(d,e,f,g){return this.az6(d,e,f,!1,g)},
cpt(d,e,f){return this.az6(d,e,f,!1,null)},
cpu(d,e,f,g){return this.az6(d,e,f,g,null)},
bAm(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a8
default:return A.a3}},
bYC(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bI
return B.av(B.X(s.b===D.l5?A.Gz:A.BF,A.aA,t,t,t,32),t,t,t)}w=u.bDo(r)
if(s.b===D.l5){s=B.n(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cr,A.q,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dE,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aNN(r,!0)
return C.fCq(s.go,v,s.id)}return w},
aNN(d,e){var w,v,u,t
try{w=C.i7U(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.cb(u,"_bg")
u=B.cq(new C.cec(this,w,v,e))
return u}catch(t){return D.ac8}},
bDo(d){return this.aNN(d,!1)},
ch4(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b6b
return C.i8b(v,w.db,w.dx)}}
C.b0X.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.W(),g=B.N(),f=this.b
g.r=B.b0(f.ay).gp(0)
w=B.N()
w.r=B.b0(f.ch).gp(0)
w.b=A.ae
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a9(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.b0(s,g)
d.b0(s,w)
break
case 1:d.hV(s,g)
d.hV(s,w)
break
case 2:r=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
r.F(new B.b5(u/2,0))
r.F(new B.ap(u,t))
r.F(new B.ap(0,t))
r.F(new B.bE())
d.aR(r,g)
d.aR(r,w)
break
case 3:r=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
h=t*0.45
r.F(new B.b5(0,h))
f=u*0.65
r.F(new B.ap(f,h))
r.F(new B.ap(f,t*0.2))
r.F(new B.ap(u,t*0.5))
r.F(new B.ap(f,t*0.8))
t*=0.55
r.F(new B.ap(f,t))
r.F(new B.ap(0,t))
r.F(new B.bE())
d.aR(r,g)
d.aR(r,w)
break
case 4:h=t/2
w.c=v+2
d.bE(new B.v(0,h),new B.v(u,h),w)
break
case 5:q=u*0.22
r=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
r.F(new B.b5(q,0))
r.F(new B.ap(u,0))
r.F(new B.ap(u-q,t))
r.F(new B.ap(0,t))
r.F(new B.bE())
d.aR(r,g)
d.aR(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aO(h.r,A.ao,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.b5(k,j)
f.push(h)
v=r.f
if(v!=null)h.bC(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.ap(k,j)
f.push(h)
v=r.f
if(v!=null)h.bC(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.F(new B.bE())
d.aR(r,g)
d.aR(r,w)
break}},
au(d){return d.b!==this.b}}
C.aIE.prototype={
T(){return new C.bul(null,null)}}
C.bul.prototype={
Z(){var w,v=this
v.a1()
w=B.bj(null,A.ii,null,1,null,v)
w.cL(0)
v.d!==$&&B.aP()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bxa()},
aNY(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.n(8)
return B.c_(B.av(B.d(d,w,w,w,w,w,w,A.dj,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a8(A.a3,A.a8,A.x,v,w,w),A.n),A.bf)},
bAA(){var w,v=this,u=null,t=v.aNY("Slide A",A.bj),s=v.aNY("Slide B",A.aZ)
if(v.a.c===D.cn)return new B.an(A.W,u,A.b1,A.r,B.a([t,B.av(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c6(w,new C.f6G(v,s,t),u)},
B(d){return this.bAA()}}
C.aJg.prototype={
je(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jS(d){return d.b!==this.b}}
C.UW.prototype={
T(){return new C.bjj(null,null)}}
C.bjj.prototype={
Z(){var w,v,u=this
u.a1()
w=B.bj(null,A.B6,null,1,null,u)
u.d!==$&&B.aP()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cn){w.sp(0,1)
return}B.bN(B.dE(0,0,0,v.c.fr+v.f*120,0,0),new C.dSN(u),x.a)},
bv(d){var w,v,u,t=this
t.bG(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cn)w.sp(0,1)
else B.bN(B.dE(0,0,0,v.c.fr+v.f*120,0,0),new C.dSM(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bv6()},
B(d){var w,v=this.a
if(v.c.dy===D.cn||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c6(w,new C.dSL(this),v.d)}}
C.II.prototype={
B(d){return B.cq(new C.ce5(this))}}
C.azn.prototype={
T(){return new C.bdN()}}
C.bdN.prototype={
Z(){this.a1()
if(this.a.c!==D.cn)B.bN(A.Ma,new C.d5j(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cn)n=B.av(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.UW(C.er(A.bi,!1,4279310375,A.aD,"",4294538006,24,A.bo,A.a6,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bg,o,2,"",0,0,"",u,D.f4,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cc,p,p,B.n(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cx("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.er(A.bi,!1,4294967295,A.aD,"",4280640491,22,A.bo,A.a6,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bg,o,2,"Element flies in",0,0,"",q.a.c,D.cQ,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.n(14)
v=new B.an(A.W,p,A.aa,A.r,B.a([w,B.ao(32,new C.UW(t,B.p(p,D.fpJ,A.f,p,p,new B.o(s,p,B.I(A.b_,A.q,1),r,p,p,A.n),p,p,p,p,A.jo,p,p,1/0),!0,1,new B.cx("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c_(n,D.b1t,A.bf)}}
C.a7F.prototype={
T(){return new C.bjY(null,null)}}
C.bjY.prototype={
gb_f(){var w=this.a
if(w.e)w=D.eSp.t(0,w.c)||D.aNZ.t(0,A.d.gI(this.a.c.split("@")))
else w=!1
return w},
Z(){var w,v=this
v.a1()
if(v.gb_f()){w=C.i6g(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bj(null,B.dE(0,0,0,w,0,0),null,1,null,v)
w.cL(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.bvD()},
B(d){var w,v=this,u=v.d
if(!v.gb_f()||u==null)return v.a.d
w=v.a
return B.c6(u,new C.efa(v,u,A.o.E(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aZX.prototype={
B(d){var w=null
return B.av(C.b10(!0,w,!1,C.er(A.L,!1,this.e.l(),A.aD,"",4280640491,this.f,A.bo,A.a6,"",0.2,"fx",w,"","",0,!1,"",0,D.bg,4280172719,2,"Aa",0,0,this.c,D.cn,D.cQ,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gY(d){return this.f}}
C.beX.prototype={
je(d){return C.a2k(this.b,new B.a9(0,0,0+d.a,0+d.b).cz(-this.c))},
jS(d){return d.b!==this.b||d.c!==this.c}}
C.bpV.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a9(0,0,0+a1.a,0+a1.b).cz(-this.d),g=this.b,f=C.a2k(g,h),e=a1.gdB(),d=new C.eWM()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sar(D.aPw.av(0,h))
a0.aR(f,w)
g=C.a2k(g,h.cz(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bkU.gp(0)
a0.aR(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sar(D.f1o.av(0,h))
a0.aR(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.hC(A.G,e*0.04)
a0.aR(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aR(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.sar(D.f1m.av(0,h))
a0.aR(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aR(f,w)
g=C.a2k(g,h.cz(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aR(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b8.j(0.7).gp(0)
g.z=new B.hC(A.G,e*0.035)
a0.aR(f,g)
g=d.$1(e*0.016)
g.r=A.oL.gp(0)
a0.aR(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sar(D.f1h.av(0,h))
a0.aR(f,w)
w=C.a2k(g,h.cz(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b9E.gp(0)
a0.aR(w,v)
g=C.a2k(g,h.cz(e*0.03))
v=d.$1(e*0.004)
v.r=D.bcg.gp(0)
a0.aR(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sar(D.aPw.av(0,h))
a0.aR(f,g)
for(g=B.x9(f),w=B.a([],x.X),g=new B.vD(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b8(B.jY(y.M));--q
g.jz()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bm(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.jz()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.jz()
m=w[q].MK(p*n/o).a
l=D.cVL[A.o.E(n,4)]
$.W()
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=l.gp(0)
k=p.H()
p=m.a
j=m.b
u.drawCircle(p,j,v,k)
k.delete()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=A.c.j(0.9).gp(0)
k=i.H()
u.drawCircle(p+t,j+t,s,k)
k.delete()}}break
case"aurora":g=d.$1(e*0.08)
g.sar(D.f1q.av(0,h))
g.z=new B.hC(A.G,e*0.03)
a0.aR(f,g)
g=d.$1(e*0.018)
g.sar(D.f1n.av(0,h))
a0.aR(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aR(f,w)
g=C.a2k(g,h.cz(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nP.gp(0)
a0.aR(g,w)
break}},
au(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bqV.prototype={
a4(d,e){d.FQ(C.a2k(this.b,new B.a9(0,0,0+e.a,0+e.b).cz(-this.c)),A.w,e.gdB()*0.05,!1)},
au(d){return d.b!==this.b||d.c!==this.c}}
C.aLg.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
C.aLM.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
C.aN8.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
C.a7Y.prototype={}
C.NP.prototype={
T(){var w=x.gz,v=x.N,u=x.bO
return new C.aEd(B.a([],x.D),B.a([],w),B.a([],w),B.U(v,u),B.U(v,x.bo),B.U(v,u),B.aX(v),null,null)},
ge1(){return this.c},
gTt(){return this.r},
gTu(){return this.w},
gLy(){return this.x}}
C.aEd.prototype={
Z(){var w,v=this
v.a1()
$.aW.bU$.push(v)
C.fHm()
$.hpu=new C.ey8(v)
w=B.bj(null,A.B4,null,1,null,v)
w.fh(0,!0)
v.fy!==$&&B.aP()
v.fy=w
v.In()},
bv(d){var w,v,u=this
u.bG(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.On(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.In()}},
j6(d){if(d===A.Ab||d===A.t7||d===A.t6||d===A.pt)this.ty()},
q(){var w,v,u,t=this
$.aW.hL(t)
w=t.at
if(w!=null)w.a7(0)
t.ty()
w=t.fy
w===$&&B.c()
w.q()
for(w=t.ch,w=new B.du(w,w.r,w.e);w.C();){v=w.d
v.U$=$.aw()
v.P$=0}for(w=t.CW,w=new B.du(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bO(0)
v.hb()}for(w=t.cx,w=new B.du(w,w.r,w.e);w.C();){v=w.d
v.U$=$.aw()
v.P$=0}t.bvR()},
gabl(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gOH(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
abQ(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gS8())return!1
return!0},
kj(){return this.abQ(null)},
aiA(){var w=this.c
if(w==null)return
w.J(x.q).f.S(D.f_F)},
qg(){if(!this.kj())return!1
this.aiA()
return!0},
aqG(d){var w,v,u,t,s,r=this
if(r.abQ(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hoB(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zS(){return this.aqG(null)},
In(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$In=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.ar6(k),$async$In)
case 3:j=e
w=4
return B.b(C.apI(k),$async$In)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fWN(j,t.c0v())
w=t.gabl()?5:7
break
case 5:r=t.gOH()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.b_a(r),$async$In)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.br(s,new C.euw())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.cj(s,0,q)}case 9:w=6
break
case 7:A.d.br(s,new C.eux())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.K)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yA(m==null?"":m)!=null)continue
C.fHy(n,s)
p=!0}t.m(new C.euy(t,s))
if(p||s.length>J.ad(j))t.ty()
case 1:return B.h(u,v)}})
return B.i($async$In,v)},
c0v(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kx(w)&&w!==q}if(w)p.push(r)
return p},
cnU(d){var w,v=this,u=d.w
if(!C.kx(u)||u==="hati_kiapo_uongozi")return
v.aa9(d)
w=A.d.bg(v.d,new C.ew6(d))
u=v.d
if(w>=0){u[w]=d.hH()
v.d[w].f=new B.S(Date.now(),0,!1)}else A.d.cj(u,0,d.hH())
v.db=!1},
ci0(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kx(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cnU(t)
s=u.d
w=B.T(s)
v=w.k("cO<1,i5>")
s=B.C(new B.cO(new B.a_(s,new C.evV(),w.k("a_<1>")),new C.evW(),v),v.k("J.E"))
return s},
On(d){return this.bPr(d)},
ty(){return this.On(null)},
bPr(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$On=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.ci0()
w=3
return B.b(C.VU(d==null?t.a.c:d,s),$async$On)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.aqG(r)?4:5
break
case 4:w=6
return B.b(C.a7a(r),$async$On)
case 6:q=r.x
p=A.a.i(q==null?t.gOH():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bg(t.d,new C.etU())
q=t.d
if(o>=0)q[o]=r.hH()
else A.d.cj(q,0,r.hH())
case 5:case 1:return B.h(u,v)}})
return B.i($async$On,v)},
pj(){var w,v=this,u=v.at
if(u!=null)u.a7(0)
u=v.e
w=(u==null?null:C.kx(u.w))===!0?A.hz:A.lO
v.at=B.cM(w,new C.exe(v))},
aZJ(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.af7(u.hH(),v.f,v.r))
if(w.length>40)A.d.cA(w,0)
A.d.a8(v.ay)},
cBw(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.af7(w.e.hH(),w.f,w.r))
w.m(new C.ey4(w,v.pop()))
w.pj()},
cn_(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.af7(w.e.hH(),w.f,w.r))
w.m(new C.ew4(w,v.pop()))
w.pj()},
of(){var w,v,u=this
if(u.e==null)return
w=A.d.bg(u.d,new C.exS(u))
if(w>=0){u.d[w]=u.e.hH()
u.d[w].f=new B.S(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.S(Date.now(),0,!1)},
Xp(d){var w,v,u,t,s=this.gdu()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
xt(){var w,v,u,t
for(w=this.ch,v=new B.du(w,w.r,w.e);v.C();){u=v.d
u.U$=$.aw()
u.P$=0}w.a8(0)
for(w=this.CW,v=new B.du(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bO(0)
u.hb()}w.a8(0)},
K4(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdu()
if(l==null)return
w=l.z
v=B.T(w)
u=v.k("cO<1,m>")
t=B.dd(new B.cO(new B.a_(w,new C.exT(),v.k("a_<1>")),new C.exU(),u),u.k("J.E"))
w=this.ch
v=B.a3(w).k("cu<1>")
v=B.C(new B.cu(w,v),v.k("J.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.K)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.U$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bO(0)
p.hb()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.K)(v),++r){n=v[r]
if(n.b!==D.cQ)continue
p=n.a
m=w.c9(0,p,new C.exV(n))
s.c9(0,p,new C.exW())
p=m.a.a
o=n.r
if(p!==o)m.saX(0,o)}},
HG(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b6(u.d,new C.eti(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gOH()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.cj(u.d,0,u.e.hH())}u.of()
u.pj()},
aiW(d,e){var w,v,u,t,s=this
if(s.kj())return
w=s.Xp(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kx(v.w))===!0
if(u){C.i6k(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdu()
if(t!=null)C.i6l(t,w.d+w.f*0.5)}}s.HG()
s.of()
s.pj()
if(u&&s.c!=null)s.m(new C.ey5())},
cCA(d,e){var w=this,v=w.gdu()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.HG()
w.of()
w.pj()},
gdu(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gql(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.i4m(o)
if(w!=null)return w
v=q.gdu()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gI(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bYR(v)
t=q.bYQ(v)
s=B.b0(v.e)
r=v.f
return new C.jH(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hIb(o)},
bYR(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(t.b===D.cQ)s=t.w>=28||A.o.D(A.o.an(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bYQ(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cQ&&t.w<28)return B.b0(t.Q)}return A.aJ},
aeS(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gabl()){w.c.J(x.q).f.S(D.eZg)
return}w.aa9(d)
w.b_W(C.bC_(d))
return}if(C.ceY(v)){w.aa9(d)
w.b_W(d)
return}w.m(new C.evd(w,d))},
arg(){var w,v,u,t,s,r,q=this
q.a1X(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kx(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.etg(q))
if(r&&q.c!=null){u.toString
q.JE(u,s)}return}q.ty()
q.m(new C.eth(q))},
b_V(d){this.aa9(d)
this.a_r(d,!0)},
aa9(d){if(!C.kx(d.w))return
C.fHy(d,this.d)},
a_r(d,e){return this.cdV(d,e)},
b_W(d){return this.a_r(d,!1)},
cdV(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a_r=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bC_(d)
if(e){r=s.x
q=A.a.i(r==null?t.gOH():r)
t.dy.W(0,q.toLowerCase())
C.apJ(t.a.c,q)}r=s}else r=d
w=C.ceY(r.w)?3:4
break
case 3:w=5
return B.b(t.aaa(r),$async$a_r)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b6(t.d,new C.evA(l))
o=l.a.hH()
n=C.kx(o.w)&&C.i7w(o)
t.m(new C.evB(t,o,p))
if(n){m=A.d.bg(t.d,new C.evC(o))
if(m>=0){t.d[m]=o.hH()
t.ty()}}if(!t.abQ(l.a))t.Yz()
r=!1
if(t.c!=null)if(!t.abQ(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.aqG(r)&&C.fDB(l.a)}else l=r
else l=r
if(l)t.c.J(x.q).f.S(D.eZR)
case 1:return B.h(u,v)}})
return B.i($async$a_r,v)},
aaa(d){return this.bND(d)},
bND(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$aaa=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lh(r.c,A.zq),$async$aaa)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kW(!1,r,s.c,s.d,null,A.zq,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aaa,v)},
o6(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$o6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.ceY(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cen(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$o6,v)},
aez(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aez=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.evc(),s,null,!0,!0,x.H),$async$aez)
case 3:if(t.c==null){w=1
break}t.arg()
case 1:return B.h(u,v)}})
return B.i($async$aez,v)},
aey(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aey=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.ev9(),s,null,!0,!0,x.H),$async$aey)
case 3:if(t.c==null){w=1
break}t.m(new C.eva())
t.arg()
case 1:return B.h(u,v)}})
return B.i($async$aey,v)},
Yz(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Yz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ay(),$async$Yz)
case 3:r=e
if(B.jN(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.aq("Bool","ngmy_marriage_hint_seen",!0),$async$Yz)
case 4:s=t.c
if(s==null){w=1
break}s.J(x.q).f.S(D.eXU)
case 1:return B.h(u,v)}})
return B.i($async$Yz,v)},
JE(d,e){return this.cok(d,e)},
cok(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$JE=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ags(s,t.gEo(),t.gEn(),!0,e,t.d),$async$JE)
case 9:w=4
break
case 6:w=10
return B.b(C.agt(s,t.gEo(),t.gEn(),!0,e,t.d),$async$JE)
case 10:w=4
break
case 7:w=11
return B.b(C.agu(s,t.gEo(),t.gEn(),!0,e,t.d),$async$JE)
case 11:w=4
break
case 8:w=12
return B.b(C.agv(s,t.gEo(),t.gEn(),!0,e,t.d),$async$JE)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$JE,v)},
c_o(){var w,v,u,t,s=this
if(!s.gabl()){s.c.J(x.q).f.S(D.eY6)
return}w=s.gOH()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.agr(u,t,v,new C.eus(s),new C.eut(s),w)},
aeT(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aeT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bS(A.dH,null,new C.evj(u),s,!0,!0,!1,A.lx,!1,!1,x.N),$async$aeT)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.agv(s,u.gEo(),u.gEn(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ags(s,u.gEo(),u.gEn(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.agt(s,u.gEo(),u.gEn(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.agu(s,u.gEo(),u.gEn(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.c_o()
return B.h(null,v)}})
return B.i($async$aeT,v)},
cd1(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aZJ()
w=C.cB()
v=C.BI(t,t,t,t,D.CR,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.evk(u,v))},
a9B(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a9B=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qg()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ic2(s),$async$a9B)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d6(q.r,new C.etk())
t.d3(new C.etl(t,p,q,r))
s=t.c.J(x.q).f
o=r.r.length
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9B,v)},
agR(d,e,f,g){var w=null,v=g?A.dm:A.bL,u=B.I(g?A.b_:A.cr,A.q,1)
return B.hx(B.aC(w,B.p(w,B.X(d,g?A.c:A.aJ,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a5),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a7),w,e,w,w)},
a_q(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_q=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qg()){w=1
break}s=t.jW()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.T(r).k("a_<1>")
p=B.C(new B.a_(r,new C.evv(),q),q.k("J.E"))}o=s!=null&&s.b===D.lw?B.a([s],x.u):p
if(o.length===0){t.c.J(x.q).f.S(D.f_1)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bS(A.K,null,new C.evw(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a_q)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_q,v)},
af9(){return this.cdU()},
cdU(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$af9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qg()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ibP(s,t.f+1,o),$async$af9)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.U
q=B.kG(s,B.T(s).c)
p.a=A.d.bg(o.r,new C.evy(q))
t.d3(new C.evz(p,t,o,q,r))
t.c.J(x.q).f.S(D.f_q)
case 1:return B.h(u,v)}})
return B.i($async$af9,v)},
afg(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$afg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qg()||!t.zS()){w=1
break}s=t.gdu()
if(s==null){w=1
break}r=s.z
q=B.T(r).k("a_<1>")
p=B.C(new B.a_(r,new C.evQ(),q),q.k("J.E"))
if(p.length===0){t.c.J(x.q).f.S(D.eXE)
w=1
break}o=new B.M(p,new C.evR(),B.T(p).k("M<1,L>")).ff(0,new C.evS())
r=B.U(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.K)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.as(new B.bb(l,A.b5,A.aO),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bS(A.K,null,new C.evT(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$afg)
case 3:for(r=new B.du(r,r.r,r.e);r.C();){q=r.d
q.U$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.evU())
case 1:return B.h(u,v)}})
return B.i($async$afg,v)},
aeW(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$aeW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qg()){w=1
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
return B.b(C.hqA(s,new C.Ew(r,q,p,o==null?"":o)),$async$aeW)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d3(new C.evl(m,n))
s=t.c.J(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.agR(r)
r=B.u(r==null?null:r.b)+" will play after your last slide."}s.S(B.b2(null,null,null,null,null,A.r,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aeW,v)},
aa3(){return this.bMZ()},
bMZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aa3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qg()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ic1(s,t.f+1,l),$async$aa3)
case 3:r=e
q=$.h_h
$.h_h=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d3(new C.etB())
t.c.J(x.q).f.S(D.eXv)
w=1
break}if(!q){s=r.CW
s=C.hps(l,s==null?"":s,!1)}else s=!1
if(s){t.d3(new C.etC(t,l,r))
t.c.J(x.q).f.S(D.f_U)
w=1
break}s=l.cx
if(s==null)s=A.U
p=B.kG(s,B.T(s).c)
s=l.r
m.a=A.d.bg(s,new C.etD(p))
o=s.length
t.d3(new C.etE(m,t,l,p,r))
n=s.length-o
s=t.c.J(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aa3,v)},
aQ5(d,e){if(e){this.afJ()
return}this.cd1(d,!1)},
bIA(){return this.aQ5(null,!1)},
afJ(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bS(A.c_,null,new C.ew_(t),r,!0,!0,!0,A.pe,!1,!1,x.N),$async$afJ)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.ew0(t,C.i4l(s).px()))
case 1:return B.h(u,v)}})
return B.i($async$afJ,v)},
d3(d){var w=this
if(w.qg())return
w.HG()
w.aZJ()
w.m(d)
w.K4()
w.of()
w.pj()},
a84(){this.d3(new C.esf(this,D.mJ))},
aRA(){var w=this.gdu()
if(w==null)return
this.d3(new C.etz(this,w))},
aQI(){var w=this.e
if(w==null||w.r.length<=1)return
this.d3(new C.etx(this))},
b2W(d,e){if(this.e==null||d===e)return
this.d3(new C.ew8(this,d,e))},
NV(d){return this.bKA(d)},
bKA(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$NV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gOH():s)
w=5
return B.b(C.apH(t.a.c,r),$async$NV)
case 5:t.dy.L(0,r.toLowerCase())
case 4:s=d.a
C.ar8(s)
w=6
return B.b(C.b14(t.a.c,s),$async$NV)
case 6:if(t.c==null){w=1
break}t.m(new C.ett(t,d))
w=7
return B.b(t.ty(),$async$NV)
case 7:case 1:return B.h(u,v)}})
return B.i($async$NV,v)},
coh(d,e){var w=this
if(d.z){w.aiA()
return}w.m(new C.ew7(w,d,e))
w.pj()},
jW(){var w,v,u,t,s,r=this.gdu()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Wq(d){return this.ch.c9(0,d.a,new C.etj(d))},
at8(d){return this.CW.c9(0,d.a,new C.etV())},
a1X(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Xp(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aW.ak$.d.c
if(u!=null)u.jM()},
b6n(){return this.a1X(!0)},
a1U(d){var w,v,u=this
if(u.qg())return
if(!u.zS())return
w=u.Xp(d)
if(w==null||w.b!==D.cQ)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Wq(w).saX(0,"")}u.m(new C.exQ(u,d))
$.aW.x1$.push(new C.exR(u,d,w))},
b6V(d){var w=this
if(d.b===D.cQ&&!w.kj()&&w.zS()){w.a1U(d.a)
return}w.azw(d.a)},
azw(d){var w,v,u,t,s,r=this
if(r.kj())return
w=r.r
if(w!=null&&w!==d){v=r.Xp(w)
if(v!=null&&v.b===D.cQ){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.exf(r,s,d))
if(s||d==null){t=$.aW.ak$.d.c
if(t!=null)t.jM()}},
aMl(){this.d3(new C.esg(this))},
p_(d){return this.bzD(d)},
bzD(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$p_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$p_)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d3(new C.esd(t,d))
case 1:return B.h(u,v)}})
return B.i($async$p_,v)},
Vz(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Vz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.GE(78,1920),$async$Vz)
case 3:s=e
if(s==null||t.gdu()==null){w=1
break}t.d3(new C.es3(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Vz,v)},
Vt(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Vt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdu()==null){w=1
break}w=3
return B.b(S.CR(t.a.c),$async$Vt)
case 3:s=e
if(t.c==null){w=1
break}r=J.a4(s)
if(r.gam(s)){t.c.J(x.q).f.S(D.f0t)
w=1
break}w=r.gM(s)===1?4:6
break
case 4:q=r.gI(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bS(null,null,new C.es0(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Vt)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdu()==null){w=1
break}t.d3(new C.es1(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Vt,v)},
as6(){var w=this,v=w.r
if(v==null||w.gdu()==null)return
if(A.d.b6(w.gdu().z,new C.etv(v))){w.c.J(x.q).f.S(D.f_u)
return}if(w.w===v)w.a1X(!0)
w.d3(new C.etw(w,v))},
bGQ(){var w=this.jW(),v=w==null
if((v?null:w.b)===D.f4)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cQ)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aN2(d,e){var w=this,v=w.jW(),u=w.gdu(),t=w.e
if(t==null)return
w.d3(new C.esI(w,v,d,e,t,u))},
bBd(d){return this.aN2(d,null)},
a8m(d){return this.bBl(d)},
bBl(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a8m=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a74.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.o6(),$async$a8m)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jW()
if(s!=null){r=s.b
if(r===D.cQ)t.bBd(s.w>=28||s.x.gdN(0)>=A.H.gdN(0)?d.d:d.e)
else if(r===D.f4){r=d.c
t.aN2(r.j(0.88),r)}w=1
break}t.d3(new C.esN(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a8m,v)},
a8l(d){return this.bBj(d)},
bBj(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a8l=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jW()
r=t.gdu()
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
return B.b(t.o6(),$async$a8l)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d3(new C.esL(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a8l,v)},
bB3(d){var w=this.gdu()
if(w==null)return
this.d3(new C.esH(this,w,d))},
a_w(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_w=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.ibY(r),$async$a_w)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.of()
t.m(new C.evK(t,s))
w=4
return B.b(t.ty(),$async$a_w)
case 4:if(t.c!=null)t.aeS(s)
case 1:return B.h(u,v)}})
return B.i($async$a_w,v)},
a9W(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9W=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a1X(!0)
t.of()
s=t.c
s.toString
w=3
return B.b(C.R0(s,q),$async$a9W)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.J(x.q).f
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9W,v)},
Dx(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Dx=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.of()
t=4
w=7
return B.b(C.aPT(m),$async$Dx)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aPj(o,q,m.b),$async$Dx)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.ab(l)
o=r.c
if(o==null){w=1
break}o.J(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.u(p),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Dx,v)},
Fb(d,e){return this.cAW(d,e)},
cAW(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Fb=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qg()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a1X(!0)
t.of()
s=h.a=t.e.hH()}else{r=A.d.bg(t.d,new C.exZ(d))
s=h.a=r>=0?t.d[r].hH():d.hH()}s=s.w
q=s==null
p=C.i5j(q?"":s)
o=C.hon(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.T(s).k("a_<1>")
n=B.C(new B.a_(s,new C.ey_(h,p),q),q.k("J.E"))
s=h.a.b
w=3
return B.b(t.cub(n.length,o,s),$async$Fb)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.i5d(h.a)
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
return B.b(t.cua(n,o),$async$Fb)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.h7(t.d,new C.ey0(s))
s=h.a.b
w=11
return B.b(t.cu8(k.b,s),$async$Fb)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hH()
case 5:j=C.i5i(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.J(x.q).f.S(D.f0F)
w=1
break}w=12
return B.b(t.cu9(j.a,s,o,j.c),$async$Fb)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.ey1(h,t,i))
t.pj()
case 1:return B.h(u,v)}})
return B.i($async$Fb,v)},
cub(d,e,f){var w=this.c
w.toString
return B.bS(A.K,null,new C.exv(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cua(d,e){var w=this.c
w.toString
return B.bS(A.K,null,new C.exu(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cu8(d,e){var w=this.c
w.toString
return B.bS(A.K,null,new C.exo(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cu9(d,e,f,g){var w=this.c
w.toString
return B.bS(A.K,null,new C.exq(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
abp(){var w=null
return B.av(B.p(w,w,A.f,w,w,new B.o(A.b_,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
abq(d,e,f,g){var w,v,u=null,t=B.n(16),s=B.aq(d,A.c_,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dn,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a8(A.az,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.eo,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.fb6,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a6,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aUT(d,e){var w=null,v=e.j(0.14),u=B.n(12),t=B.I(e.j(0.22),A.q,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.U8,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bR,w,w,w)},
aUW(d,e,f,g,h,i,j){var w=null,v=B.n(16),u=B.n(16),t=g?new B.a8(A.az,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.q,1),q=d.j(g?0.22:0.14),p=B.n(13),o=x.p
return B.aF(!1,A.a1,!0,w,B.aL(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.be,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.nD,w,w,w),A.cV,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a6,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.X(A.BI,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.euo(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
bXM(d,e,f,g,h,i){return this.aUW(d,e,f,!1,g,h,i)},
aus(d,e){var w=null,v=A.c.j(0.05),u=B.n(14),t=B.I(A.c.j(0.08),A.q,1)
return B.p(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.dj,w,w,w),A.bC,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.Zz,w,w,w)},
aUV(d,e,f){var w=null,v=B.bn(A.c.j(0.08),w,w,w,A.c,w,A.cm,w,new B.b7(B.n(14),A.Y),w,w,w)
return B.bG(B.d(e,w,w,w,w,w,w,A.nB,w,w,w),new C.eun(d,f),v)},
aUU(d,e){return this.aUV(d,e,null)},
JW(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$JW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.p9(l,s.c,s.d),$async$JW)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aG("=",l.length)+"\n\n"
q=new B.ff(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gae(o.z),n=new B.f2(l,new C.exg());n.C();){m=l.gR(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aK(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a9R(l.charCodeAt(0)==0?l:l,r.b),$async$JW)
case 4:l=t.a
w=5
return B.b(B.p8(l.c,l.d),$async$JW)
case 5:case 1:return B.h(u,v)}})
return B.i($async$JW,v)},
I1(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$I1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.p9(q,s.c,s.d),$async$I1)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a9R(A.S.ao(r.ah(),null),r.b+".json"),$async$I1)
case 4:q=t.a
w=5
return B.b(B.p8(q.c,q.d),$async$I1)
case 5:case 1:return B.h(u,v)}})
return B.i($async$I1,v)},
b67(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.of()
u.ty()
w=u.c
w.toString
v=B.e9(new C.exP(u,t),!1,null,x.z)
B.a6(w,!1).cm(v)},
Hf(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Hf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$Hf)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fHL(),$async$Hf)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.i85(s.a)
q=t.c
q.toString
w=5
return B.b(B.bS(A.ax,null,new C.es8(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$Hf)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d3(new C.es9(t,s))
w=1
break}if(p==="split")t.d3(new C.esa(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$Hf,v)},
Ng(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Ng=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qg()){w=1
break}w=3
return B.b(t.o6(),$async$Ng)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aPS(s,null,null),$async$Ng)
case 4:r=e
if(r==null||t.gdu()==null){w=1
break}t.d3(new C.ese(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Ng,v)},
b2J(d){var w=this.e
if(w==null||!C.kx(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aOl(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aPS(s,t==null?null:B.b0(t),u)},
a82(d){return this.bzu(d)},
bzu(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a82=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qg()){w=1
break}if(!t.zS()){s=t.c
if(s==null){w=1
break}s.J(x.q).f.S(D.f0U)
w=1
break}w=3
return B.b(t.aOl(),$async$a82)
case 3:r=f
if(r==null||t.gdu()==null){w=1
break}t.d3(new C.es5(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a82,v)},
agu(d){return this.cn2(d)},
cn2(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agu=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qg()){w=1
break}if(!t.zS()){s=t.c
if(s==null){w=1
break}s.J(x.q).f.S(D.f01)
w=1
break}w=3
return B.b(t.aOl(),$async$agu)
case 3:r=f
if(r==null||t.gdu()==null){w=1
break}t.d3(new C.ew5(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$agu,v)},
c9J(){var w,v,u=this
if(u.kj())return
w=new B.S(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bA(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.czX()}},
czX(){var w,v,u,t,s,r=this.gdu()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d3(new C.exX(this,r,(A.o.aC(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bY6(){var w,v,u,t,s,r=this.gdu()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d3(new C.eur(this,r,u.d))},
c1M(d){var w
if(this.kj())return!1
w=this.e
if((w==null?null:C.kx(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fEm(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.l5&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c1N(d){var w
if(this.kj())return!1
w=this.e
if((w==null?null:C.kx(w.w))!==!0)return!0
if(!this.zS())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fEm(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.l5&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
Np(d){return this.bBL(d)},
bBL(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Np=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qg()){w=1
break}if(!t.zS()){s=t.c
if(s==null){w=1
break}s.J(x.q).f.S(D.eZS)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.apL(p),$async$Np)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.J(x.q).f.S(D.f_w)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gI(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a7a(r)
w=1
break}t.m(new C.esR(t,d,o))
t.of()
$.aW.x1$.push(new C.esS(t))
case 1:return B.h(u,v)}})
return B.i($async$Np,v)},
Vx(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Vx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$Vx)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bCG(),$async$Vx)
case 4:s=e
if(s==null||t.gdu()==null){w=1
break}t.d3(new C.es2(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Vx,v)},
O8(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$O8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$O8)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jW()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fHC(r),$async$O8)
case 4:q=e
if(q==null){w=1
break}t.d3(new C.etT(s,q))
case 1:return B.h(u,v)}})
return B.i($async$O8,v)},
j3(d){this.d3(new C.esb(this,d))},
q6(d){return this.bAX(d)},
bAX(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$q6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qg()){w=1
break}m=!D.aO1.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.o6(),$async$q6)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.Hf()
w=1
break A
case"sign_paper":t.Ng()
w=1
break A
case"hd_photo":t.Vx()
w=1
break A
case"sharpen":t.O8()
w=1
break A
case"print":t.Dx()
w=1
break A
case"rotate":s=t.jW()
if(s!=null)t.d3(new C.esk(s))
w=1
break A
case"text_box":t.aMl()
w=1
break A
case"picture":t.Vz()
w=1
break A
case"present":t.b67()
w=1
break A
case"new_slide":t.a84()
w=1
break A
case"export_json":t.I1()
w=1
break A
case"outline_share":t.JW()
w=1
break A
case"flashcard_tool":t.va(D.I_)
w=1
break A
case"quiz_tool":t.va(D.I0)
w=1
break A
case"worksheet_tool":t.va(D.I1)
w=1
break A
case"duplicate_el":s=t.jW()
if(s==null){w=1
break A}t.d3(new C.esl(t,s))
w=1
break A
case"delete_el":t.as6()
w=1
break A
case"bring_fwd":s=t.jW()
if(s==null||t.gdu()==null){w=1
break A}t.d3(new C.esm(t,s))
w=1
break A
case"send_back":s=t.jW()
if(s==null||t.gdu()==null){w=1
break A}t.d3(new C.esx(t,s))
w=1
break A
case"align_left":s=t.jW()
if(s!=null)t.d3(new C.esA(s))
w=1
break A
case"align_center":s=t.jW()
if(s!=null)t.d3(new C.esB(s))
w=1
break A
case"align_right":s=t.jW()
if(s!=null)t.d3(new C.esC(s))
w=1
break A
case"grayscale":case"brighten":t.O8()
w=1
break A
case"flip_h":s=t.jW()
if(s!=null)t.d3(new C.esD(s))
w=1
break A
case"flip_v":s=t.jW()
if(s!=null)t.d3(new C.esE(s))
w=1
break A
case"rectangle":t.p_(D.bg)
w=1
break A
case"circle":t.p_(D.eN)
w=1
break A
case"triangle":t.p_(D.jP)
w=1
break A
case"arrow":t.p_(D.CT)
w=1
break A
case"line":case"divider":t.p_(D.fs)
w=1
break A
case"word_count":r=t.gdu()
if(r==null){w=1
break A}for(q=A.d.gae(r.z),p=new B.f2(q,new C.esF()),o=0;p.C();){n=A.a.fH(A.a.i(q.gR(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.a_(n,new C.esG(),B.T(n).k("a_<1>")).gM(0)}t.c.J(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cB()
t.j3(C.iY(A.L,!1,t.gql().d.l(),A.aD,40,A.bo,A.u,0.18,q,"Presentation Title",0,D.mK,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cB()
t.j3(C.iY(A.L,!1,t.gql().e.l(),A.aD,22,A.bo,A.a6,0.12,q,"Subtitle goes here",0,D.de,0.8,0.1,0.48))
w=1
break A
case"bullets":t.j3(C.iY(A.bi,!0,4279310375,A.aD,20,A.bo,A.a6,0.5,C.cB(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.uu,0.8,0.1,0.22))
w=1
break A
case"numbered":t.j3(C.iY(A.bi,!1,4279310375,A.aD,20,A.bo,A.a6,0.5,C.cB(),"1. First item\n2. Second item\n3. Third item",0,D.ut,0.8,0.1,0.22))
w=1
break A
case"quote":t.j3(C.iY(A.L,!1,4279310375,A.aD,24,A.cF,A.a6,0.25,C.cB(),'"Insert meaningful quote here."',0,D.de,0.8,0.1,0.3))
w=1
break A
case"citation":t.j3(C.iY(A.bi,!1,4284773515,A.aD,14,A.bo,A.a6,0.1,C.cB(),"Author, Title (Year). Publisher.",0,D.uu,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.j3(C.iY(A.dN,!1,4279310375,A.aD,14,A.bo,A.a6,0.08,C.cB(),C.bCI(),0,D.de,0.24,0.72,0.04))
w=1
break A
case"page_number":t.j3(C.iY(A.dN,!1,4279310375,A.aD,13,A.bo,A.a6,0.06,C.cB(),"Page "+(t.f+1),0,D.de,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d3(new C.esn(t))
w=1
break A
case"footer_bar":t.d3(new C.eso(t))
w=1
break A
case"highlight":t.d3(new C.esp(t))
w=1
break A
case"redact":t.d3(new C.esq(t))
w=1
break A
case"callout":t.d3(new C.esr(t))
w=1
break A
case"checkboxes":t.j3(C.iY(A.bi,!1,4279310375,A.aD,20,A.bo,A.a6,0.45,C.cB(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.de,0.8,0.1,0.2))
w=1
break A
case"table":t.j3(C.iY(A.bi,!1,4279310375,A.aD,16,A.bo,A.a6,0.55,C.cB(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.de,0.8,0.1,0.18))
w=1
break A
case"memo":t.d3(new C.ess(t))
w=1
break A
case"letter":t.j3(C.iY(A.bi,!1,4279179050,A.aD,17,A.bo,A.a6,0.82,C.cB(),C.bCI()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.de,0.8,0.1,0.08))
w=1
break A
case"agenda":t.j3(C.iY(A.bi,!1,4279310375,A.aD,22,A.bo,A.P,0.76,C.cB(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.uu,0.8,0.1,0.12))
w=1
break A
case"toc":t.j3(C.iY(A.bi,!1,4279310375,A.aD,18,A.bo,A.a6,0.76,C.cB(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.de,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.j3(C.iY(A.bi,!1,4279310375,A.aD,16,A.bo,A.a6,0.08,C.cB(),"Signature: _________________________",0,D.de,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.j3(C.iY(A.bi,!1,4279310375,A.aD,16,A.bo,A.a6,0.08,C.cB(),"Initials: ______",0,D.de,0.3,0.65,0.78))
w=1
break A
case"approved":t.j3(C.iY(A.L,!1,4278556265,A.aD,28,A.bo,A.u,0.12,C.cB(),"APPROVED",0,D.mK,0.32,0.62,0.08))
w=1
break A
case"draft":t.j3(C.iY(A.L,!1,4292617766,A.aD,28,A.bo,A.u,0.12,C.cB(),"DRAFT",0,D.de,0.32,0.62,0.08))
w=1
break A
case"confidential":t.j3(C.iY(A.L,!1,871318596,A.aD,36,A.bo,A.u,0.12,C.cB(),"CONFIDENTIAL",0,D.de,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d3(new C.est(t))
w=1
break A
case"progress":t.d3(new C.esu(t))
w=1
break A
case"stars":t.j3(C.iY(A.L,!1,4279310375,A.aD,36,A.bo,A.a6,0.12,C.cB(),"\u2605\u2605\u2605\u2605\u2606",0,D.ql,0.8,0.1,0.4))
w=1
break A
case"equation":t.j3(C.iY(A.L,!1,4279310375,A.aD,32,A.bo,A.P,0.14,C.cB(),"y = mx + b",0,D.de,0.8,0.1,0.38))
w=1
break A
case"timeline":t.j3(C.iY(A.L,!1,4279310375,A.aD,18,A.bo,A.a6,0.2,C.cB(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.ut,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d3(new C.esv(t))
w=1
break A
case"compare":t.d3(new C.esw(t))
w=1
break A
case"link_text":t.j3(C.iY(A.bi,!1,4280640491,A.mP,16,A.bo,A.a6,0.1,C.cB(),"https://example.com",0,D.de,0.8,0.1,0.5))
w=1
break A
case"phone":t.j3(C.iY(A.bi,!1,4279310375,A.aD,18,A.bo,A.a6,0.1,C.cB(),"(555) 123-4567",0,D.de,0.8,0.1,0.5))
w=1
break A
case"email":t.j3(C.iY(A.bi,!1,4280640491,A.aD,18,A.bo,A.a6,0.1,C.cB(),"name@email.com",0,D.de,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d3(new C.esy(t))
w=1
break A
case"cover_page":r=t.gdu()
if(r==null){w=1
break A}t.d3(new C.esz(t,r))
w=1
break A
case"invoice":t.j3(C.iY(A.bi,!1,4279179050,A.aD,16,A.bo,A.a6,0.84,C.cB(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.de,0.8,0.1,0.08))
w=1
break A
case"resume":t.j3(C.iY(A.bi,!1,4279179050,A.aD,17,A.bo,A.a6,0.84,C.cB(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.de,0.8,0.1,0.08))
w=1
break A
case"minutes":t.j3(C.iY(A.bi,!1,4279310375,A.aD,16,A.bo,A.a6,0.88,C.cB(),"MEETING MINUTES\nDate: "+C.bCI()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.de,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.j3(C.iY(A.bi,!1,4279310375,A.aD,17,A.bo,A.a6,0.88,C.cB(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.de,0.8,0.1,0.06))
w=1
break A
case"rubric":t.j3(C.iY(A.bi,!1,4279310375,A.aD,15,A.bo,A.a6,0.8,C.cB(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.de,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$q6,v)},
ctD(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eSl.t(0,this.z)},
ctC(d){if(this.jW()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b7L(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cn,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.n(12)
u=e?f:A.bE
u=B.I(u,A.q,o&&e?2:1)
t=C.i7V(d)
s=o?12:18
r=o?A.H:A.cN
if(o)if(e)q=f
else q=g?A.ad:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.Oc,A.f,p,p,D.E8,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fC,B.aC(p,new B.an(A.W,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a7),p)},
bNe(d){var w,v=null,u=this.jW()
if(u==null)return A.bI
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aA:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.M(D.QI,new C.etS(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.j,0,v,v)},
va(d){return this.bzC(d)},
bzC(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$va=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aNW.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.o6(),$async$va)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d3(new C.esc(t,d))
case 1:return B.h(u,v)}})
return B.i($async$va,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eR2
w=h.e
if(w==null)return h.bDu()
v=h.gdu()
v.toString
u=h.c
u.toString
t=B.P(u).ax.a===A.I
u=h.c
u.toString
s=x.w
r=B.aI(u,A.bW,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aI(u,A.eG,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.c_:D.bbJ
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gS8()}else j=!1
if(j)k.push(new C.a7G(h.a.c,!1,h.e.gb9Z(),h.gc9G(),g))
else if(s&&h.e!=null&&!h.kj()&&C.ceY(h.e.w)){j=h.a
k.push(new C.a7G(j.c,j.d,g,h.gcaP(),g))}if(s)k.push(h.bNa(w,t,r))
if(s&&h.kj()){w=t?A.fz:A.ks
j=B.n(14)
i=B.I(A.bj.j(0.35),A.q,1)
k.push(B.p(g,B.B(B.a([D.bNN,A.ab,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fz,g,g,g,g,g,g,g,g,12,g,g,A.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.Bb,A.ik,g,g,g))}w=!n
if(w&&!h.kj())k.push(h.c2I(t,r))
if(w&&h.kj())k.push(h.cAX(t))
if(r&&h.jW()!=null&&w&&!h.kj())k.push(h.c2E(t))
j=B.a([],l)
if(q&&w)j.push(new B.a7(132,g,h.b5B(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a7(g,72,h.b5B(t,!1),g))
i.push(B.E(new B.bI(A.b0,g,g,h.bEO(v,t,!s||p),g),1))
if(h.ctD(r)&&u&&s&&!h.kj())i.push(h.c9t(v,t,r))
j.push(B.E(B.x(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.kj()&&h.ctC(!1))j.push(new B.a7(240,g,h.bPP(t),g))
k.push(B.E(B.B(j,A.ai,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a7(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c2F(t))
return B.c8(g,m,B.bm(!1,new B.an(A.W,g,A.aa,A.r,w,g),!0,!1,A.af,!0,!0),g,!1,!1,g,!1)},
bDu(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.I
p=w?A.c_:A.bL
v=r.a.e
u=r.c8J(A.bj,A.q1,new C.esV(r),r.gccZ(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.E(r.aM3(A.bj,A.hB,"Blank Presentation",new C.esW(r)),1),A.at,B.E(r.aM3(A.aZ,A.vZ,"Class Template",new C.esX(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.by,s,A.mO,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.bAp(w))
else{t=new B.i3(t,B.T(t).k("i3<1>"))
A.d.v(u,t.gdL(t).dz(0,new C.esY(r,w),x.l))}return B.c8(q,p,B.bm(!1,B.cw(u,q,new B.Q(18,12,18,v),q,q,A.ah,!1),!0,!1,A.af,!0,!0),q,!1,!1,q,q)},
bLo(){this.m(new C.ety(this))
var w=this.c
w.toString
if(B.aI(w,A.bW,x.w).w.a.a<900){w=$.aW.ak$.d.c
if(w!=null)w.jM()}},
afa(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afa=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jW()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bS(A.K,null,new C.evJ(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$afa)
case 3:case 1:return B.h(u,v)}})
return B.i($async$afa,v)},
AP(d,e){return this.ctZ(d,e)},
ctZ(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$AP=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hY(D.WS,!0,"Dismiss",j,new C.exh(),new C.exi(d,e),A.iF,!0,x.N),$async$AP)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.aiA()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gS8()){r.aiA()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aPT(d),$async$AP)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aPj(j,q,d.b),$async$AP)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.ab(i)
j=r.c
if(j==null){w=1
break}j.J(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.u(p),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.Fb(d,!1),$async$AP)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hY(D.WS,!0,"Dismiss",j,new C.exj(),new C.exk(d),A.a1,!0,x.y),$async$AP)
case 20:if(g===!0)r.NV(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.agd("Rename presentation",d.b),$async$AP)
case 24:l=g
if(l!=null)r.coh(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ah()
k.n(0,"id",C.cB())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.exl(r,k))
r.pj()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AP,v)},
b0A(d,e){var w=null
return B.bK(!1,D.fzP,w,w,!0,w,w,e,w,B.fy(w,w,w,w,w,w,w,w,w,w,w,A.bj,w,w,w,A.aw,w,A.lQ,w,w,w,w,w,A.k9,w,w))},
bAp(d){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.esh(this,d),null)},
bJu(d,e,f){var w=new B.M(B.a(d.split(" \u2022 "),x.s),new C.etm(),x.dv).c0(0,new C.etn()),v=B.C(w,w.$ti.k("J.E"))
return new B.D(G.ahw,this.aMD(v,e,new C.eto(),f),null)},
aMD(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.ee)
t=e.j(g?0.14:0.1)
s=new B.aT(6,6)
r=new B.az(e.j(g?0.55:0.45),1,A.q,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ad:A.bq,n,n,n,10),A.qt],m))}p=d[v]
o=g?A.c.j(0.85):A.aJ
q.push(new B.y(p,n,new B.H(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cl(A.aP,A.e,A.N,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bO(r,r,r,r),new B.bp(s,s,s,s),n,n,A.n),n,n,n,n,A.nj,n,n,n))
A.d.v(l,u)}return B.eQ(A.a3,B.B(l,A.m,n,A.e,A.N,0,n,n),A.f,A.dZ)},
bAn(d,e,f){return this.aMD(d,e,null,f)},
bJw(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dfE
else if(v==="hati_kuhoweya")w=D.d1e
else{if(v==="hati_kiapo_uongozi")v=D.cOW
else v=C.kx(v)?D.cW5:A.Qi
w=v}v=this.fy
v===$&&B.c()
return B.c6(v,new C.etr(this,f,d,e,w),null)},
c2F(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jW()
if(i==null||i.b!==D.cQ)return A.bI
w=k.Wq(i)
v=k.at8(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.D(A.Be,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b7,B.bK(!1,D.fvp,j,j,!0,j,j,new C.euS(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.af,!0,!0)
r=d?A.ax:A.c
q=B.n(18)
p=B.I(A.bj.j(0.45),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.h8,B.c_(new B.D(A.eR,B.aM(j,A.U,!0,j,!0,A.r,j,B.aN(),w,A.bj,j,j,j,j,2,D.bTL,A.y,!0,j,!0,j,!0,v,A.aj,j,j,j,j,j,A.ww,j,j,j,j,j,j,!1,"\u2022",j,new C.euT(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a4,A.zI,A.an,j,A.TD,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bf),j),1)
q=B.n(16)
p=d?A.bn:A.c
o=B.I(d?A.aJ:A.aL,A.q,1)
n=B.E(B.cd(B.B(B.a([k.tY(G.Nb,j,new C.euU(k,i),d),k.tY(G.a_J,j,new C.euV(k,i),d),k.tY(K.alQ,j,new C.euW(k,i),d),k.tY(K.a0o,j,new C.euX(k,i),d),k.tY(k.bAl(i.as),j,new C.euY(k,i),d),k.tY(D.amX,j,new C.euZ(k,i),d),k.tY(D.amW,j,new C.ev_(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.r,j,A.y,j,j,j,j,A.aP),1)
m=A.k.N(i.w)
return B.bZ(0,B.aF(!1,A.a1,!0,j,B.x(B.a([s,r,new B.D(H.ahF,B.p(j,B.B(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aA:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.db],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.ll,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ag),0,0,0)},
c2E(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jW()
if(m==null)return A.bI
w=m.b
v=w===D.cQ
u=B.n(18)
t=x.O
t=d?B.a([A.bn,A.M],t):B.a([A.c,A.aQ],t)
s=B.I(d?A.aJ:A.aL,A.q,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cB,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b4e(A.jr,"Edit",new C.euD(o,m),d,!0))
if(w===D.lw)p.push(o.b4e(A.Gv,"Shape & ring",new C.euE(o),d,!0))
p.push(o.tY(A.C0,"Format",new C.euF(o),d))
if(v)A.d.v(p,B.a([o.tY(G.Nb,n,new C.euG(o,m),d),o.tY(D.amX,n,new C.euH(o,m),d),o.tY(D.amW,n,new C.euI(o,m),d)],q))
p.push(A.b7)
p.push(o.crN(A.e7,n,o.gaQG(),d,!0))
p.push(o.tY(A.ho,"Done",new C.euJ(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a8(A.a3,A.a8,A.x,t,n,n),A.n),n,n,n,A.Bc,A.ll,n,n,n)},
bAl(d){switch(d.a){case 2:return D.a0l
case 1:case 5:return D.a0n
default:return D.a0m}},
c3x(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dN
default:return A.bi}},
azv(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.av
else if(h)w=A.c
else{v=g?A.ad:A.aJ
w=v}v=B.n(12)
u=B.n(12)
t=h?L.GO:n
if(h)s=n
else s=g?A.c.j(0.06):A.bL
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.ee,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.pX,B.aF(!1,A.a1,!0,n,B.aL(!1,v,!1,B.eH(new B.D(new B.Q(q,8,q,8),B.B(o,A.m,n,A.e,A.N,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ag),n)},
tY(d,e,f,g){return this.azv(d,e,f,g,!1,!1)},
b4e(d,e,f,g,h){return this.azv(d,e,f,g,h,!1)},
crN(d,e,f,g,h){return this.azv(d,e,f,g,!1,h)},
bNa(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.n(20),m=x.O
m=e?B.a([A.bn,A.M],m):B.a([A.c,A.mY],m)
w=B.I(e?A.aJ:A.oE,A.q,1.2)
v=B.a([new B.ac(0,A.G,A.bj.j(e?0.18:0.1),A.cB,18)],x.V)
u=p.a2n(A.eE,"Back",p.gbGA(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.db,B.E(B.B(B.a([new B.dq(1,A.co,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.bX:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.tD,o,A.e,A.j,0,A.cY,o),1)],q)
if(!p.kj()){u=p.a2n(A.rm,"Undo",p.ax.length===0?o:p.gcBv(),e)
A.d.v(r,B.a([u,p.a2n(D.bHi,"Redo",p.ay.length===0?o:p.gcmZ(),e)],q))}r.push(p.a2n(A.ya,"PDF",new C.etL(p),e))
r.push(p.a2n(A.hC,"Download as video",new C.etM(p),e))
if(!p.kj())r.push(B.BW(o,o,B.X(A.o6,e?A.ad:A.bq,o,o,o,o),new C.etN(p),A.J,new C.etO(p),A.af,"More",x.N))
r.push(A.db)
r.push(B.aF(!1,A.a1,!0,o,B.aL(!1,B.n(14),!0,B.eH(D.ect,o,new B.o(o,o,o,B.n(14),o,L.GO,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaAl(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ag))
return B.p(o,B.B(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a8(A.az,A.aC,A.x,m,o,o),A.n),o,o,o,D.bsu,D.bxC,o,o,o)},
cAX(d){var w=this,v=null,u=B.n(18),t=d?A.ax.j(0.92):A.c.j(0.96),s=B.I(d?A.ct:A.aL,A.q,1)
return B.p(v,B.cd(B.B(B.a([w.iP(A.u7,"Print",new C.ey2(w),d),w.iP(A.ya,"Download PDF",new C.ey3(w),d),w.iP(A.q7,"Present",w.gaAl(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.r,v,A.y,v,v,v,v,A.aP),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.Bb,G.aji,v,v,v)},
a2n(d,e,f,g){var w,v=null
if(f==null)w=g?A.b_:A.dr
else w=g?A.ad:A.aJ
return B.aH(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.ce)},
c2I(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.n(18)
v=d?A.ax.j(0.92):A.c.j(0.96)
u=B.I(d?A.ct:A.aL,A.q,1)
t=x.f0
t=B.C(new B.M(p,new C.ev2(r,d),t),t.k("ak.E"))
t.push(new B.D(X.aiY,new B.fh(new C.ev3(r),q),q))
A.d.v(t,w?B.a([new B.D(R.vF,r.agR(A.lm,"Ending celebration",r.gcdb(),d),q),new B.D(R.vF,r.agR(A.Gv,"Logo ring & frame",r.gcdS(),d),q)],x.p):A.hb)
A.d.v(t,w?B.a([new B.D(R.vF,r.agR(A.nm,"Look and feel",r.gcdT(),d),q),new B.D(R.vF,r.agR(A.p0,"Edit this slide's text",r.gcep(),d),q)],x.p):A.hb)
t.push(new B.D(R.vF,B.hx(B.aC(q,B.p(q,D.eQs,A.f,q,q,new B.o(q,q,q,B.n(999),B.a([new B.ac(0,A.G,O.li.j(0.4),A.J,10)],x.V),D.aoU,A.n),q,34,q,q,A.fY,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ev4(r),q,q,q,q,q,q,!1,A.a7),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cd(B.B(t,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,D.by4,q,q,A.aP)
s=e?8:10
return B.p(q,B.x(B.a([t,B.cd(r.cpr(d),A.r,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aP)],x.p),A.ai,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.Bb,q,q,q,q)},
cpr(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.d9e[v]
u.a=null
s=u.a=t.b
w.push(e.lK(e.crb(s),t.a,new C.ewr(u,e),a3,D.aNW.t(0,s)))}w.push(e.iP(A.l_,"Notes Slide",new C.ews(e),a3))
w.push(e.lK(A.Gu,"Quiz",new C.ewt(e),a3,!0))
w.push(e.lK(M.G4,"Worksheet",new C.ewE(e),a3,!0))
w.push(e.lK(V.Gx,"Flashcard",new C.ewP(e),a3,!0))
w.push(e.lK(A.O1,"Lab Report",new C.ex_(e),a3,!0))
w.push(e.lK(A.u1,"Rubric",new C.ex6(e),a3,!0))
w.push(e.lK(A.oV,"Minutes",new C.ex7(e),a3,!0))
w.push(e.lK(A.o5,"Syllabus",new C.ex8(e),a3,!0))
w.push(e.lK(A.O7,"Timeline",new C.ex9(e),a3,!0))
return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.daw[v]
w.push(e.lK(r.b,r.c,new C.exa(e,r),a3,!D.aO1.t(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.B(B.a([e.iP(A.yv,a0,e.gaMk(),a3),e.iP(A.u4,"Picture",new C.ewu(e),a3),e.iP(A.yp,"Bio link",new C.ewv(e),a3),e.iP(A.a0R,"Table",new C.eww(e),a3),e.iP(A.O5,"Sticky",new C.ewx(e),a3),e.iP(A.u3,"Divider",new C.ewy(e),a3),e.iP(A.C1,"Header",new C.ewz(e),a3),e.lK(A3.vP,"Rectangle",new C.ewA(e),a3,!0),e.lK(A.re,"Circle",new C.ewB(e),a3,!0),e.lK(A.a0e,"Triangle",new C.ewC(e),a3,!0),e.lK(A.j1,"Arrow",new C.ewD(e),a3,!0),e.lK(D.bFL,"Parallelogram",new C.ewF(e),a3,!0),e.lK(D.bIg,"Hexagon",new C.ewG(e),a3,!0),e.lK(A.u3,"Line",new C.ewH(e),a3,!0),e.lK(A.ya,"PDF",new C.ewI(e),a3,!0),e.lK(O.a1_,"Signature",new C.ewJ(e),a3,!0),e.iP(A2.BQ,"Quote",new C.ewK(e),a3),e.iP(D.a_R,a1,new C.ewL(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aI(w,A.bW,x.w).w
u=x.p
t=B.B(B.a([e.aN9("Wide 16:9",D.CR,a3),e.aN9("Short 9:16",D.of,a3),new B.D(A.fC,B.mK(D.bKp,d,D.frL,d,new C.ewM(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.B(B.a([e.bGP("This slide",!e.Q,a3,new C.ewN(e)),A.bp,e.aPl("All slides",e.Q,a3,new C.ewO(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bGQ()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.bX:A.bK,d,d,d,d,d,d,d,d,10,d,d,A.a6,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.M(D.a2O,new C.ewQ(e),n),n.k("ak.E"))
n=B.cd(B.B(n,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aP)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.dbx[v]
j=B.b0(k)
i=new B.az(k===4294967295?A.dr:A.b_,1.5,A.q,-1)
l.push(new B.D(A.fC,B.aC(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bO(i,i,i,i),d,d,d,A.a5),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.ewR(e,k),d,d,d,d,d,d,!1,A.a7),d))}l=B.cd(B.B(l,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aP)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bDZ()
g=B.T(h).k("M<1,D>")
h=B.C(new B.M(h,new C.ewS(e,a3),g),g.k("ak.E"))
return new B.a7(w.a.a-20,d,B.x(B.a([t,A.O,q,A.am,p,A.O,o,A.au,n,A.O,m,A.au,l,A.O,j,A.au,B.cd(B.B(h,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aP),A.am,e.c_v(a3)],u),A.F,d,A.e,A.N,0,A.p),d)
case"Transitions":f=e.jW()
w=e.c
w.toString
w=B.aI(w,A.bW,x.w).w
u=new C.ewq(e)
t=new C.exb(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.QI,f.dy,new C.ewT(e,u,f),A.aZ)
A.d.v(p,B.a([o,A.au,n,A.O,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.au],q))}q=e.gdu()
q=q==null?d:q.r
p.push(t.$4(D.QI,q,new C.ewU(e,u),A.bj))
return new B.a7(w.a.a-20,d,B.x(p,A.F,d,A.e,A.N,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.iP(A.l_,w,new C.ewV(e),a3),e.iP(A.u7,"Print deck",new C.ewW(e),a3),e.lK(D.akT,"Export JSON",new C.ewX(e),a3,!0),e.iP(A.fP,"Duplicate Slide",e.gaRz(),a3),e.iP(A.e7,a2,e.gaQH(),a3),e.cvj(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jW()
w=x.p
u=B.a([e.iP(D.a_R,a1,new C.ewY(e),a3),e.iP(A.fP,"Duplicate",e.gaRz(),a3),e.iP(A.e7,a2,e.gaQH(),a3),e.iP(A.q7,"Present",e.gaAl(),a3),e.iP(A.C_,a0,e.gaMk(),a3),e.iP(A.BT,"Fit Text",new C.ewZ(e),a3),e.iP(A.ya,"Download PDF",new C.ex0(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iP(A.kw,"Transfer",new C.ex1(e),a3))
if(f!=null){w=B.a([A.ab,e.iP(G.Nb,"Bold",new C.ex2(e,f),a3),e.iP(G.a_J,"Italic",new C.ex3(e,f),a3),e.iP(G.aku,"Underline",new C.ex4(e,f),a3),e.iP(Ad.Nc,"Bullets",new C.ex5(e,f),a3),e.bPy(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bNe(a3))
w.push(e.iP(D.bEo,"Delete",e.gaQG(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.j,0,d,d)}},
aN9(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.of
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a8D,t,t,t)],v)
if(w)A.d.v(u,B.a([A.db,D.bJB],v))
return new B.D(A.fC,B.j9(t,t,t,B.B(u,A.m,t,A.e,A.N,0,t,t),t,new C.esQ(this,w,e),s===e,A.bj.j(0.25),t,t,t),t)},
cvj(d){var w,v,u,t,s,r=this,q=null,p=r.gdu()
if(p==null)return A.bI
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.b_:A.cr,A.q,1)
u=B.n(8)
t=B.X(A.G2,d?A.aA:A.ak,q,q,q,14)
s=B.aH(q,q,q,q,D.anU,q,q,q,new C.exy(r,p),q,q,q,q,q,A.ce)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bk,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.anL,q,q,q,new C.exz(r,p),q,q,q,q,q,A.ce)],x.p),A.m,q,A.e,A.N,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.FJ,A.mu,q,q,q)},
crb(d){switch(d.a){case 6:return V.Gx
case 7:return A.Gu
case 8:return M.G4
case 4:return A.C1
default:return A.l_}},
bPy(d,e){var w=null,v=B.I(e?A.b_:A.cr,A.q,1),u=B.n(8),t=B.aH(w,w,w,w,D.anU,w,w,w,new C.etY(this,d),w,w,w,w,w,A.ce),s=A.k.N(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bk,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.anL,w,w,w,new C.etZ(this,d),w,w,w,w,w,A.ce)],x.p),A.m,w,A.e,A.N,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.xU,A.mu,w,w,w)},
c_v(d){var w=null
return B.BW(B.Dk(B.X(A5.a_U,d?A.ad:A.bq,w,w,w,16),w,w,D.fxf,w,w,w),w,w,new C.euv(),A.J,this.gbB2(),A.cp,"Slide layout",x.fO)},
lK(d,e,f,g,h){var w=null,v=B.n(14),u=B.n(14),t=g?A.c.j(0.06):A.bL,s=B.I(g?A.dm:A.aL,A.q,1),r=x.p,q=B.a([B.X(d,g?A.ds:A.bj,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.Oc,A.f,w,w,D.E8,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fC,B.aF(!1,A.a1,!0,w,B.aL(!1,v,!0,B.eH(new B.D(A.h8,B.x(B.a([new B.an(A.W,w,A.aa,A.f,q,w),A.cV,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aS:A.bq,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.N,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w)},
iP(d,e,f,g){return this.lK(d,e,f,g,!1)},
b5B(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aP
v=B.hN(t,new C.exK(u,s,e,d),s.r.length,A.cp,t,w,new C.exL(e),!1)
s=d?A.ax:A.bL
w=B.a([],x.p)
if(e&&!u.kj())w.push(new B.D(A.cp,B.HJ(E.ao6,new C.exM(u),B.nB(t,A.bj,t,t,t,t,t,t,t,t,t,t,E.aOG,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.x(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bEO(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.of?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.Q(u,u,u,u),new B.bI(A.b0,v,v,new B.fK(w,B.aC(v,B.cq(new C.ete(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.etf(this),v,v,v,v,v,v,!1,A.a7),v),v),v)},
bEQ(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kx(a9.w))===!0,b1=b0&&C.fEm(b3),b2=b0&&b3.b===D.l5&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.kj())v=!b0||a7.c1N(b3)
else v=!1
if(!a7.kj())u=!b0||a7.c1M(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.cc:A.bj
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.h2g(b3))o=a8
else if(p&&!a7.kj())o=a7.gc9I()
else o=a7.kj()?a8:new C.et2(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c7:A.jI
i=w&&C.h2g(b3)&&a7.zS()?new C.et3(a7,b3):a8
h=v&&b3.b===D.cQ?new C.et4(a7,b3):a8
g=u?new C.et5(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bd
else e=q?A.c0:r
else e=A.K
e=B.I(e,A.q,t?2:0)
d=B.n(t?6:0)
if(b1)a0=A.c0.j(0.08)
else a0=b3.b===D.l5?A.K:a8
if(b1){a1=a7.kj()?"":"Tap to sign"
a1=B.av(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.c0.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.P,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aI(a1,A.bW,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.zS()
a3=b3.b===D.cQ
a4=a3?a7.Wq(b3):a8
a5=a3?a7.at8(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aI(a6,A.bW,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.et6(a7,b3):a8
a3=v&&a3?new C.et7(a7,b3):a8
a6=C.b10(q,a4,a1,b3,a5,a2,a3,new C.et8(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.n(6)
d.push(B.ao(-4,B.aC(a8,B.p(a8,D.bMq,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.q,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.et9(a7,b3,b4,b5),a8,a8,new C.eta(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kj()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aC(a8,B.p(a8,D.bN5,A.f,a8,a8,new B.o(A.dy,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a5),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbY5(),a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kj()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aC(a8,B.p(a8,D.bOE,A.f,a8,a8,new B.o(A.c0,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a5),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.etb(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cQ)if(a7.w!==a9){e=a7.c
e.toString
e=B.aI(e,A.bW,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.av(B.aC(a8,B.p(a8,D.fG5,A.f,a8,a8,new B.o(A.bj,a8,a8,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kX,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.etc(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aC(j,B.eJ(A.A,f,new B.an(A.W,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a7),k*b5,new B.cx("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aPl(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bj.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.n(10)
u=B.I(e?A.bj:A.bE,A.q,1)
if(e)t=A.bj
else t=f?A.aA:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.db,B.p(r,D.Oc,A.f,r,r,D.E8,r,12,r,r,r,r,r,12)],s))
return B.aC(r,B.p(r,B.B(t,A.m,r,A.e,A.N,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h7,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a7)},
bGP(d,e,f,g){return this.aPl(d,e,f,g,!1)},
c9t(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.U$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.as(new B.bb(v,A.b5,A.aO),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.ax:A.aQ
t=f?A.wZ:l
if(f)s=new B.bO(new B.az(e?A.bE:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rG,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.bq,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b7,m.b0A(e,new C.ev6(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aJ,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.bX:A.bK,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.x(B.a([p,A.am,B.E(B.aM(l,A.U,!1,l,!0,A.r,l,B.aN(),k,l,l,l,l,l,2,B.bs(l,new B.b4(4,B.n(10),A.dh),l,A.bR,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.ev7(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a4,l,A.an,l,l,l,l),1)],q),A.ai,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aSR(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jW()
if(a2==null)return A.bI
w=new C.eub(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dS:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b7,a0.b0A(a3,a0.gbLn())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.R)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.fsf,B.E(B.l0(a1,a1,a1,u,0.05,new C.euc(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.B(B.a([D.fEx,B.E(B.l0(a1,a1,a1,t,0.05,new C.eud(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cQ
if(m)o.push(B.B(B.a([D.fm1,B.E(B.l0(a1,a1,a1,96,10,new C.eue(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lw
if(l||n===D.l5||n===D.S3)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.fxZ,B.E(B.l0(a1,a1,a1,s,0,new C.euf(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.B(B.a([D.fFO,B.E(B.l0(a1,a1,a1,r,0,new C.eug(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Cg[j]
i.a=null
g=h.a
i.a=g
k.push(B.j9(a1,a1,a1,new B.y(h.b,a1,A.pj,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.euh(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bV(A.bA,k,A.br,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Cb[j]
f.a=null
g=e.a
f.a=g
h.push(B.j9(a1,a1,a1,new B.y(e.b,a1,A.pj,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.eui(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.O,l,A.am,k,A.O,i,A.am,B.bV(A.bA,h,A.br,6,6)],p))}o.push(A.O)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.M(v,new C.euj(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.am,B.bV(A.bA,l,A.br,6,6),A.ac,B.hen(new C.euk(w,a2),D.cq2,B.ev([a2.as],k),!0,a1,k)],p))}if(n===D.f4){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.M(v,new C.eul(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bV(A.bA,m,A.br,0,6)],p))}o.push(A.ac)
o.push(B.dn(D.bOq,D.fA_,new C.eum(a0,a5),B.bn(A.bz,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cw(o,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.ct:A.c
p=a4?A.wZ:a1
if(a4)o=new B.bO(new B.az(a3?A.bE:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rG,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.Fr,a1,a1,a1)},
bPP(d){return this.aSR(d,!1,!1,null)},
c8J(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c6(p,new C.eup(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.fc0,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.be,B.E(B.x(B.a([w,A.bC,A.cV,r.bAn(D.cTy,d,B.P(v).ax.a===A.I)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dW(B.hx(B.aF(!1,A.a1,!0,q,B.aL(!1,q,!0,B.eH(D.eWh,q,new B.o(q,q,B.I(A.c.j(0.55),A.q,1.3),q,B.a([new B.ac(0,A.G,A.c0.j(0.4),A.em,8)],p),D.aoZ,A.a5),q,q,q),A.cL,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,"Documents (Hati)",q,q),A.J)],u))
t=B.B(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.P(w).ax.a===A.I
w=B.n(20)
v=x.O
v=s?B.a([D.b8p,D.b8N],v):B.a([A.c,A.ks],v)
u=B.I(d.j(s?0.45:0.25),A.q,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cB,14)],p),new B.a8(A.az,A.aC,A.x,v,q,q),A.n),q,q,q,q,A.bR,q,q,q)},
aM3(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.erZ(this,g,d,e,f),null)},
agd(d,e){return this.clc(d,e)},
clc(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$agd=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.as(new B.bb(e,A.b5,A.aO),r)
p=t.c
p.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.ew3(d,q),p,null,!0,!0,x.N),$async$agd)
case 3:s=g
q.U$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$agd,v)},
PM(d){var w=d.bV()
return""+B.bH(w)+"/"+B.bR(w)+"/"+B.bA(w)}}
C.af7.prototype={}
C.ayK.prototype={
T(){return new C.bcz(null,null)}}
C.bcz.prototype={
gcxx(){var w,v=this.a.c,u=v.f.bV(),t=""+B.bH(u)+"/"+B.bR(u)+"/"+B.bA(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Z(){var w,v=this,u=null
v.a1()
w=B.bj(u,A.pU,u,1,u,v)
w.fh(0,!0)
v.d!==$&&B.aP()
v.d=w
w=B.bj(u,D.bqZ,u,1,u,v)
w.cs(0)
v.e!==$&&B.aP()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.btK()},
IX(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cu.aA(0,new B.hT(w,v,A.cu).aA(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.av(new B.D(D.bwt,B.c6(new B.ha(B.a([u,w],x.dS)),new C.d0V(this),v),v),v,v,v)}}
C.bcN.prototype={
B(d){var w=null,v=B.n(22),u=B.I(A.aJ,A.q,1),t=x.p
return B.av(new B.D(D.bwK,B.aF(!1,A.a1,!0,w,B.p(w,B.bw(B.n(22),B.x(B.a([new B.D(D.bvV,B.x(B.a([B.p(w,D.bNb,A.f,w,w,new B.o(A.av.j(0.12),w,w,B.n(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aR,D.fC6,A.R,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fda,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dY,D.bq2,B.B(B.a([B.E(B.bK(!1,D.fqu,w,w,!0,w,w,new C.d1g(d),w,B.fy(w,w,w,w,w,w,w,w,w,w,w,A.bK,w,w,w,w,w,A.ng,w,A.oj,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bn,w,w,w,48,w,w,w,w,w,1),B.E(B.bK(!1,D.fvK,w,w,!0,w,w,new C.d1h(d),w,B.fy(w,w,w,w,w,w,w,w,w,w,w,A.av,w,w,w,w,w,A.ng,w,A.oj,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.N,0,A.p),A.aq),A.f,w,A7.VG,new B.o(A.ax,w,u,v,D.cTT,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w),w,w,w)}}
C.JJ.prototype={
T(){return new C.bcy()}}
C.bcy.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.n(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.I(m.j(l?0.34:0.28),A.q,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dE,8)],t)
s=m.j(l?0.16:0.14)
r=B.n(9)
q=p.a
r=B.p(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dW(B.de(B.aC(o,B.vs(B.df(o,B.B(B.a([r,A.at,new B.dq(1,A.co,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f0:A.c,o,o,o,o,o,o,o,o,13,o,o,A.P,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b9,A.N,0,o,o),o,o,A.bc,new B.o(n,o,u,v,t,o,A.n),A.eH,o,o,o,A.nh,o,o,1/0),A.cu,A.jm,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d0Q(p,d),new C.d0R(p),new C.d0S(p),new C.d0T(p),o,o,o,!1,A.a7),k),new B.v(0,(1-k)*16))}}
C.Pt.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.n(16),s=B.n(16),r=B.n(14),q=B.I(A.c.j(0.5),A.q,1.2),p=x.p
return B.aF(!1,A.a1,!0,t,B.aL(!1,s,!0,new B.D(A.eR,B.B(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a8(A.az,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.eo,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.nD,v,v,v),A.bC,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.X(A.ey,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ag)}}
C.a_q.prototype={
T(){return new C.aEg(D.de,null,null)}}
C.aEg.prototype={
gYF(){var w,v=this,u=v.w
if(u===$){w=B.bj(null,D.bqz,null,1,null,v)
v.w!==$&&B.bL()
v.w=w
u=w}return u},
b61(d){if(!this.a.c.ay)return
this.x=d
this.gYF().iG(0,0)},
Z(){var w,v=this
v.a1()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.avE(D.f1G)
C.i4R()
v.Ra()},
q(){var w=this,v=w.f
if(v!=null)v.a7(0)
w.gYF().q()
v=w.z
if(v!=null)v.a7(0)
C.avE(D.f1H)
C.i4U()
w.bvS()},
cAj(){B.jl()
this.m(new C.eyJ())
var w=this.c.J(x.q).f
w.a4w()
if($.bkk)w.S(D.eZx)},
Ra(){var w,v=this,u=v.f
if(u!=null)u.a7(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cM(B.dE(0,0,0,0,0,A.o.D(C.hcy(u,w),1,120)),new C.eyz(v))},
czZ(){var w,v=this
v.m(new C.eyI(v))
if(v.r)v.Ra()
else{w=v.f
if(w!=null)w.a7(0)}},
gaUM(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cu4(){var w=this,v=w.f
if(v!=null)v.a7(0)
w.m(new C.eyA(w))
v=w.z
if(v!=null)v.a7(0)
if(w.a.c.ch&&w.r)w.z=B.cM(A.lk,new C.eyB(w))},
aw0(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a7(0)
if(u.a.c.ch){u.m(new C.eyv(u))
u.Ra()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaUM()){u.cu4()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.eyw(u,A.o.E(w+1,s)))
u.b61(w)
u.Ra()}},
cjR(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a7(0)
v.m(new C.eyx(v))
v.Ra()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eyy(v,w,t))
v.b61(w)
v.Ra()}},
cvv(d){var w,v=this,u=v.e
if(u===D.cn){u=v.d
u===$&&B.c()
return new B.nh(d,new B.cx(u,x.ac))}w=v.cvw(u)
u=v.d
u===$&&B.c()
return B.qm(new B.nh(d,new B.cx(u,x.ac)),w,new C.eyG(),A.bc,A.bc,new C.eyH(v))},
cvw(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bqV
case 16:return A.ku
case 18:return A.nd
default:return A.ne}},
cvu(d,e,f){var w,v,u,t=null,s=B.cH(A.cu,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d_(s,!1,e,t)
case 2:case 17:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.uC,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 3:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.Sj,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 4:case 21:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.iq,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 5:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.uB,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 6:case 16:w=x.b
return B.is(A.A,new B.d_(s,!1,e,t),t,new B.bf(s,new B.bq(0.82,1,w),w.k("bf<bJ.T>")))
case 7:w=x.b
return B.is(A.A,new B.d_(s,!1,e,t),t,new B.bf(s,new B.bq(1.18,1,w),w.k("bf<bJ.T>")))
case 8:return B.c6(s,new C.eyC(s),e)
case 9:return B.c6(s,new C.eyD(s),e)
case 10:return B.c6(s,new C.eyE(s),e)
case 11:return B.c6(s,new C.eyF(s),e)
case 12:w=x.b
return new B.d_(s,!1,B.is(A.A,e,t,new B.bf(s,new B.bq(1.03,1,w),w.k("bf<bJ.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jA(B.jr(e,new B.bf(s,new B.bq(A.uC,A.J,v),v.k("bf<bJ.T>")),t,!0),A.r,new C.brp(w,t))
case 15:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.Sj,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 19:w=B.dp()
w.mN((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jP(v,u,v,1)
return B.fv(A.A,B.de(e,s.gp(0)),t,w,!0)
case 20:return B.eJ(A.A,(1-s.gp(0))*0.2,new B.d_(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jA(new C.aof(B.c6(n.gYF(),new C.eyK(n,v,w),m),m),A.r,m)}else{t=B.rD(new C.II(w,!0,!1,m))
l=B.b0(w.e)
u=n.cvv(B.en(B.jA(t,A.r,m),l,!0))}l=B.n(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.hcy(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.ot,m,m,m),A.bp,D.bPu],k),A.m,m,A.e,A.N,0,m,m),A.f,m,m,new B.o(A.aW,m,m,l,m,m,A.n),m,m,m,m,A.fN,m,m,m)
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
l.push(B.bZ(0,new C.Nn(new C.Ew(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.of?0.5625:1.7777777777777777
l.push(B.av(new B.fK(r,B.jA(B.uu(A.af,u,!0,4,1,!0,!0,m),A.r,m),m),m,m,m))}if(!$.bkk){r=B.HJ(A.l2,new C.eyL(d),B.nB(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bm(!0,B.B(B.a([r,A.ab,B.HJ(B.X(n.r?Aj.yn:A.iJ,m,m,m,m,m),n.gczY(),B.nB(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.af,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.n(20)
k.push(B.ao(16,B.bm(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.hu,m,m,m),A.f,m,m,new B.o(A.aW,m,m,r,m,m,A.n),m,m,m,m,A.fN,m,m,m),!0,!1,A.af,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bm(!0,B.aC(A.c7,B.p(A.ld,$.bkk?A.bI:s,A.f,m,m,m,m,64,m,m,D.brG,m,m,150),A.y,!1,m,n.gcAi(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a7),!0,!1,A.af,!0,!0),m,m,m,0,0,m))
return B.c8(m,A.w,B.aC(m,new B.an(A.W,m,A.b1,A.r,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eyM(n,d),m,m,m,!1,A.a7),m,!1,!1,m,m)}}
C.JQ.prototype={
B(d){var w=null
return B.p(w,B.bm(!0,new B.D(E.aiK,this.c,w),!0,!1,A.af,!0,!1),A.f,w,w,D.b1b,w,w,w,w,w,w,w,w)}}
C.brp.prototype={
je(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jS(d){return d.b!==this.b}}
C.bhr.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.n(999)
break A}if("rounded"===q){w=B.n(18)
break A}if("arch"===q){w=D.aYY
break A}w=B.n(6)
break A}v=s.e
u=B.I(v?A.aE:A.K,A.q,2.5)
if(q==="circle")t=B.n(999)
else t=B.n(q==="rounded"?9:3)
w=B.df(r,B.av(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.w5,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.bc,new B.o(s.f,r,u,w,r,r,A.n),A.hz,r,64,r,r,r,r,64)
return B.aC(r,new B.a7(78,r,B.x(B.a([w,A.am,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a7)}}
C.bhq.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dol.h(0,p)
if(o==null)o=D.daH
p=p==="none"
w=p?q:new B.a8(A.a3,A.a8,A.x,o,q,q)
p=p?A.cX.j(0.25):q
v=r.e
u=v?B.I(A.aE,A.q,2.5):q
t=r.r.j(0.15)
s=v?K.an7:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a5),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a5),q,52,q,q,A.ek,q,q,52)
return B.aC(q,new B.a7(66,q,B.x(B.a([w,A.am,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a7)}}
C.aJY.prototype={
aT(){this.b3()
this.b_()
this.dK()},
q(){var w=this,v=w.b4$
if(v!=null)v.a3(0,w.gdF())
w.b4$=null
w.a2()}}
C.aM_.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
C.bx9.prototype={}
C.aM0.prototype={
q(){var w=this,v=w.a9$
if(v!=null)v.a3(0,w.gbx())
w.a9$=null
w.a2()},
aT(){this.b3()
this.b_()
this.by()}}
C.b13.prototype={}
C.VV.prototype={
T(){return new C.aEe()},
bgB(d){return this.e.$1(d)}}
C.aEe.prototype={
gb4k(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gaaj(){var w,v
if(this.d==="all")return B.bo(this.a.d,!0,x.I)
w=this.gb4k()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaO_(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb4k()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb5A(){return A.d.cJ(this.gaaj(),0,new C.eyf())},
Z(){var w,v=this
v.a1()
w=v.a.d
if(w.length!==0)v.e=A.d.gI(w).a
v.QM()},
QM(){var w=0,v=B.j(x.H),u,t=this,s
var $async$QM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b1F(s.c,s.f),$async$QM)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eyb(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$QM,v)},
IZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$IZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gaaj()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.K)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fHy(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.p9(o,q.c,q.f),$async$IZ)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.e9(new C.eye(t,p),!1,null,x.H)
w=4
return B.b(B.a6(o,!1).cm(q),$async$IZ)
case 4:q=t.a
w=5
return B.b(B.p8(q.c,q.f),$async$IZ)
case 5:w=6
return B.b(t.QM(),$async$IZ)
case 6:case 1:return B.h(u,v)}})
return B.i($async$IZ,v)},
R7(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$R7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hE(o,D.e19,!0,"NgmySlidesTransferScan",x.N),$async$R7)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eyc(t))
w=4
return B.b(C.ahh(s),$async$R7)
case 4:r=e
t.m(new C.eyd(t))
o=J.a4(r)
if(o.gam(r)){o=t.c
if(o==null){w=1
break}o.J(x.q).f.S(D.eYp)
w=1
break}w=5
return B.b(t.a.bgB(r),$async$R7)
case 5:q=t.c
if(q==null){w=1
break}B.a6(q,!1).O(null)
q=t.c.J(x.q).f
p=o.gM(r)
o=o.gM(r)===1?"":"s"
q.S(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$R7,v)},
IY(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$IY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gaaj()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.p9(s,r.c,r.f),$async$IY)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fHN(null,A.d.gI(n),s,t.a.f)}else q=C.fHN(n,null,r.c,r.f)
if(n.length===1){s=A.d.gI(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aK(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Gs(q,"ngmy_slides_"+p,!1),$async$IY)
case 4:o=e
s=t.a
w=5
return B.b(B.p8(s.c,s.f),$async$IY)
case 5:w=6
return B.b(t.QM(),$async$IY)
case 6:s=t.c
if(s==null){w=1
break}s.J(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$IY,v)},
a2y(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2y=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eyg(t))
w=3
return B.b(C.bCq(),$async$a2y)
case 3:s=e
t.m(new C.eyh(t))
if(s==null||J.cn(s)){w=1
break}w=4
return B.b(t.a.bgB(s),$async$a2y)
case 4:r=t.c
if(r==null){w=1
break}B.a6(r,!1).O(null)
r=t.c.J(x.q).f
q=J.a4(s)
p=q.gM(s)
q=q.gM(s)===1?"":"s"
r.S(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a2y,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.d9:A.bL,k=o.gaaj().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bT(A.A,0.5,A.x,n,0,B.a([A.bj.j(0.22),A.K],x.O),n,n),A.a5),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.X(A.cD,m?A.ad:A.ak,n,n,n,n),n,n,n,new C.eyk(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.zG],h),A.m,n,A.e,A.j,0,n,n)
w=B.n(24)
v=B.a([new B.ac(0,A.G,A.bj.j(0.35),A.eV,24)],x.V)
u=B.ao(n,B.X(A.q1,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.n(16)
s=B.a([u,B.B(B.a([B.p(n,D.bQ0,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.q,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.eo,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.au,D.bAK],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hx(B.aC(A.c7,D.eWj,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gceB(),n,n,n,n,n,n,!1,A.a7),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.W,n,A.aa,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a1u,A.n),n,n,n,n,E.Zm,n,n,1/0),A.dY,o.axa(m,"What to transfer"),A.ac,B.B(B.a([B.E(o.aX4(A.q7,m,new C.eyl(o),o.d==="one","Pick a single deck","One presentation"),1),A.at,B.E(o.aX4(D.bFD,m,new C.eym(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d7,o.axa(m,"Choose presentation"),A.R],h)
u=o.a.d
if(u.length===0){u=m?A.ax:A.c
t=B.n(16)
s=B.I(m?A.bE:A.aL,A.q,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aA:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bQ,n,n,n))}else A.d.v(v,new B.M(u,new C.eyn(o,m),B.T(u).k("M<1,t>")))
A.d.v(w,v)}w.push(A.mO)
w.push(o.axa(m,"Transfer options"))
w.push(A.ac)
w.push(B.B(B.a([B.E(o.apP(A.aN,k,!0,A.ju,m,o.r,o.gc8N(),"Scan on another device","Show QR"),1),A.at,B.E(o.aM4(A.jY,!0,A.j2,m,o.gcqL(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.R)
w.push(B.B(B.a([B.E(o.byS(A.aV,k,A.hC,m,o.r,o.gc8K(),"Download .json","Backup file"),1),A.at,B.E(o.aM4(A.aF,!0,Av.yx,m,o.gcCL(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bj.j(m?0.12:0.08)
u=B.n(16)
t=B.I(A.bj.j(0.28),A.q,1)
s=B.X(A.lo,A.bj.j(0.9),n,n,n,18)
r=o.gaO_()
q=o.gb5A()
p=o.gb5A()===1?"":"s"
A.d.v(w,B.a([A.by,B.p(n,B.B(B.a([s,A.at,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.bq,n,n,n,n,n,n,n,n,12,n,n,A.a6,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bB,n,n,n)],h))}j=B.a([j,B.bm(!0,B.x(B.a([new B.D(Af.MN,i,n),B.E(B.cw(w,n,D.bv3,n,n,A.ah,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)],h)
if(o.f)j.push(B.p(n,T.VZ,A.f,A.dB,n,n,n,n,n,n,n,n,n,n))
return B.c8(n,l,new B.an(A.W,n,A.aa,A.r,j,n),n,!1,!1,n,n)},
afn(){var w=0,v=B.j(x.H),u=this,t,s
var $async$afn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.ibe(s,t.d,t.e),$async$afn)
case 2:return B.h(null,v)}})
return B.i($async$afn,v)},
axa(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bj,w,w,B.n(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aA:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aX4(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.n(18),q=B.n(18),p=e?A.ax:A.c
if(g)w=A.bj
else w=e?A.bE:A.aL
w=B.I(w,A.q,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bj.j(0.2),A.cB,14)],x.V):s
u=A.bj.j(g?0.2:0.1)
t=B.n(12)
t=B.p(s,B.X(d,A.bj,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cp,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aF(!1,A.a1,!0,s,B.aL(!1,r,!0,B.eH(new B.D(A.bB,B.x(B.a([t,A.R,u,A.bC,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag)},
bJv(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.n(16),n=e?A.ax:A.c,m=B.n(16)
if(p)w=A.bj
else w=e?A.bE:A.aL
w=B.I(w,A.q,p?2:1)
v=B.p(q,D.bQb,A.f,q,q,new B.o(q,q,q,B.n(12),q,new B.a8(A.a3,A.a8,A.x,B.a([A.bj,A.bj.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.eh:A.re
if(p)r=A.bj
else r=e?A.b_:A.dr
return new B.D(A.cw,B.aF(!1,A.a1,!0,q,B.aL(!1,o,!0,B.p(q,B.B(B.a([v,A.be,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bB,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eya(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q)},
apP(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.n(18),o=B.n(18),n=h?A.ax:A.c
if(f)w=d.j(0.45)
else w=h?A.bE:A.aL
w=B.I(w,A.q,f?1.5:1)
v=d.j(0.14)
u=B.n(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.rc,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.anF,A.f,s,s,D.b0Y,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.de(B.aF(!1,A.a1,!0,s,B.aL(!1,p,!0,B.eH(new B.D(E.Z0,B.x(B.a([new B.an(A.W,s,A.aa,A.f,u,s),A.ac,v,A.bC,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag),r)},
aM4(d,e,f,g,h,i,j){return this.apP(d,e,!1,f,g,!1,h,i,j)},
byS(d,e,f,g,h,i,j,k){return this.apP(d,e,!1,f,g,h,i,j,k)}}
C.VW.prototype={
T(){return new C.bkj()}}
C.bkj.prototype={
Z(){this.a1()
this.aee()},
aee(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$aee=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fHN(null,A.d.gI(m),k,r.a.f):C.fHN(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gI(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kx(A.d.gI(n).w))C.fHy(A.d.gI(r.a.d),D.d8y)
n=r.a
m=n.c
n=C.i8a(n.d)
w=7
return B.b(C.fHM(p,C.i8f(r.a.d),n,m,q),$async$aee)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.eyo(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.eyp(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aee,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.I,h=i?A.d9:A.bL,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cJ(k.a.d,0,new C.eyq())
v=B.aH(j,j,j,j,B.X(A.eE,i?A.ad:A.ak,j,j,j,18),j,j,j,new C.eyr(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.zG],u),A.m,j,A.e,A.j,0,j,j)
t=B.n(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dj,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.x(B.a([r,A.O,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a1u,A.n),j,j,j,j,E.Zm,j,j,1/0)
q=B.n(24)
s=B.I(A.aN.j(0.35),A.q,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a7Y,A.L,j,j))
else if(k.d==null)r.push(D.ec2)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.n(16)
n=B.a([new B.ac(0,A.G,A.aE.j(0.35),A.cB,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fqX,A.am,B.aC(j,B.p(j,B.B(B.a([D.bRJ,A.at,B.d(m,j,j,j,j,j,j,D.fdz,j,j,j)],u),A.m,j,A.e,A.N,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bWx,A.n),j,j,j,j,A_.aiw,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eys(k,d),j,j,j,j,j,j,!1,A.a7),A.O,D.fvg,A.aB],u))}o=A.c.j(0.04)
n=B.n(22)
m=B.I(A.bE,A.q,1)
l=k.d
l.toString
p.push(B.p(j,B.pT(j,j,!1,l,j,!0,!0,j,!1,D.bmg),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cp,j,j,j))
A.d.v(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hg,A.L,j,j))
return B.c8(j,h,B.bm(!0,B.x(B.a([new B.D(Af.MN,v,j),B.E(B.cd(B.x(B.a([t,A.aR,B.p(j,B.x(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.bYt,A.n),j,j,j,j,A.tS,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.r,j,A.y,j,E.aiP,j,j,A.ah),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),j,!1,!1,j,j)}}
C.aEb.prototype={
T(){return new C.aEc(new B.as(A.as,$.aw()),B.jS(!0,null,!0,!0,null,null,!1))}}
C.aEc.prototype={
Z(){var w=this
w.a1()
w.e.aQ(0,new C.erT(w))
$.aW.x1$.push(new C.erU(w))},
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.e.q()
this.a2()},
aZL(){var w,v=this.c
v.toString
w=C.yA(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a6(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aI(a2,A.eG,x.w).w,i=B.n(28),h=B.I(A.bj.j(0.4),A.q,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bj.j(0.28),A.uA,36),D.abD],g),e=B.n(28),d=A.c.j(0.16),a0=B.n(16),a1=x.p
a0=B.p(k,B.x(B.a([B.p(k,D.bNe,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.q,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.fo4,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a6,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.b1o,k,k,k,k,A.xT,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.at)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge7()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.ax:A.M
o=new B.aT(14,14)
if(q)n=A.bj
else n=r?A.bj.j(0.55):A.aJ
m=new B.az(n,q?2:1.2,A.q,-1)
n=q?B.a([new B.ac(0,A.G,A.bj.j(0.28),A.J,12)],g):k
t.push(new B.bB(1,A.bh,B.df(A.A,new B.y(p,k,D.f79,k,k,k,k,k,k,k,k,k),k,k,A.bc,new B.o(s,k,new B.bO(m,m,m,m),new B.bp(o,o,o,o),n,k,A.n),A.hz,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(M.J0)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.j,0,k,k),B.bZ(0,B.de(B.aM(k,A.U,!0,k,!0,A.r,k,B.aN(),w,k,k,k,k,k,2,D.bUt,A.y,!0,k,!0,k,!1,v,A.aj,k,k,B.a([new B.ul(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.Br(5,k),new C.buG()],x.aS),k,k,A.aPV,k,5,k,1,k,k,!1,"\u2022",k,new C.erP(l),k,new C.erQ(l),k,!1,k,k,!1,k,!0,k,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a4,k,A.m5,k,k,k,k),0),0,0,0)],a1)
d=C.yA(w.a.a.toUpperCase())==null?k:l.gc8O()
return B.av(new B.D(new B.Q(24,24,24,24+j.f.d),B.aF(!1,A.a1,!0,k,new B.cT(Ac.Kt,B.p(k,B.bw(e,B.x(B.a([a0,new B.D(D.bvy,B.x(B.a([new B.an(A.W,k,A.aa,A.r,g,k),A.R,D.fmr,A.by,new B.a7(1/0,50,B.bG(D.fD_,d,B.bn(A.bj,A.bn,A.ak,k,A.c,k,k,k,new B.b7(B.n(16),A.Y),k,k,k)),k),A.am,B.bK(!1,A.nE,k,k,!0,k,k,new C.erR(a2),k,B.fy(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.N,0,A.p),A.aq),A.f,k,k,new B.o(A.d9,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ag),k),k,k,k)}}
C.buG.prototype={
oz(d,e){var w=e.a.toUpperCase()
return e.cJ_(B.hg(A.bw,w.length),w)}}
C.ar9.prototype={
T(){return new C.aEf(B.ze(A.M4,A.nL,A.ui))}}
C.aEf.prototype={
q(){this.d.q()
this.a2()},
aZK(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iR(w,d)},
aad(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aad=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fQq(s),$async$aad)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aZK("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$aad,v)},
c8M(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=C.i8d(w[u])
if(t!=null){this.aZK(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.w2,s,s,s,t.gbNK(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eF(B.a([r,B.aH(s,s,s,s,B.X(q?A.rh:Ak.NJ,s,s,s,s,s),s,s,s,new C.eyu(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.d9,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fEd,s,s,s,1,s,!0)
r=B.zd(t.d,A.bV,t.gc8L())
w=B.n(28)
w=B.av(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bj,A.q,3),w,B.a([new B.ac(2,A.G,A.bj.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.n(16)
return B.c8(p,A.w,new B.an(A.W,s,A.b1,A.r,B.a([r,w,B.ao(32,B.p(s,D.fs0,A.f,s,s,new B.o(v,s,B.I(A.bj.j(0.45),A.q,1),u,s,s,A.n),s,s,s,s,A.jo,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.buS.prototype={
B(d){var w=null,v=B.n(24),u=B.I(A.aJ,A.q,1)
return B.aF(!1,A.a1,!0,w,B.p(w,B.x(B.a([B.p(w,H.anj,A.f,w,w,D.b17,w,56,w,w,w,w,w,56),A.aR,D.fDU,A.am,new B.jM(this.c,new C.f97(),w,w,x.cI),A.aR,new B.jM(this.d,new C.f98(),w,w,x.cl),A.ac,D.fDR],x.p),A.m,w,A.e,A.N,0,A.p),A.f,w,Ac.Kt,new B.o(A.ax,w,u,v,w,w,A.n),w,w,w,L.Zt,D.bwb,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)}}
C.a7G.prototype={
T(){return new C.bk2(A.bx)},
gde(){return this.c}}
C.bk2.prototype={
Z(){var w=this
w.a1()
if(w.a.d)return
w.ZS()
w.d=B.dv(A.fX,new C.eg1(w))},
q(){var w=this.d
if(w!=null)w.a7(0)
this.a2()},
ZS(){return this.cn5()},
cn5(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.eg_(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bA(new B.S(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.ceZ(p.c),$async$ZS)
case 6:r=e
q.a=r==null?A.bx:r
case 4:if(t.c==null){w=1
break}t.m(new C.eg0(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$ZS,v)},
bPG(d){var w,v,u=d.a,t=A.o.an(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.an(u,6e7)%60
v=A.o.an(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aV(A.o.u(w),2,"0")+"m "+A.a.aV(A.o.u(v),2,"0")+"s left"
return A.a.aV(A.o.u(w),2,"0")+":"+A.a.aV(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bI
w=s.e.a
v=A.o.an(w,6e7)<30&&A.o.an(w,36e8)<999?A.av:A.c0
w=v.j(0.14)
u=B.n(14)
t=B.I(v.j(0.55),A.q,1)
return B.p(r,B.B(B.a([B.X(A.G2,v,r,r,r,20),A.at,B.E(B.d("Marriage document session \xb7 "+s.bPG(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,W.ahA,A.ik,r,r,1/0)}}
C.a8A.prototype={
nf(){var w,v,u,t=this
t.xd()
w=t.cx
v=t.c
w.bqo(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.pZ(B.F(["/S",D.efI,"/URI",new B.rx(B.Wt(w.as),A.uD,!0)],x.N,u),u))}}
C.a8B.prototype={
a5(){return"PdfAnnotFlags."+this.b}}
C.b2I.prototype={
bxV(d,e,f,g,h,i,j,k,l,m){var w=B.ev([D.ee0],x.di)
this.w!==$&&B.aP()
this.w=w},
gcMi(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jR(w,new C.cha(),B.a3(w).k("jR<co.E,G>")).ff(0,new C.chb())},
aCH(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.he(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tz(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jf(d.a,d.b))
s.n(0,"/Border",B.tz(H.apo))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h1(t.gcMi()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.pZ(w,x.Y))}}
C.chc.prototype={}
C.a2M.prototype={}
C.ai9.prototype={}
C.aR2.prototype={
h3(d){var w,v,u,t,s,r,q=this,p=null
q.lk(d)
q.LW(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bfZ(w)
u=x.N
t=x.Y
s=new C.chc(q.d.a,"/Link",w,p,p,p,p,p,B.U(u,t))
s.bxV(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pZ(B.F(["/Type",D.efG],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a8A(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.L(0,r)
v.dx.push(r)}}
C.awC.prototype={}
C.aSy.prototype={
h3(d){var w,v,u,t,s=this
s.lk(d)
w=s.b
if(w!=null){v=B.dp()
u=s.a
v.e9(u.a,u.b,0,1)
u=d.b
u.ic()
t=s.a
t.toString
u.L3(t)
u.So(0)
u.oU(0,v)
w.h3(d)
u.ni(0)}}}
var z=a.updateTypes(["aA<~>()","~(lH)","R(i5)","~()","R(eM)","R(ok)","R(lH)","~(i5)","R(eM,eM)","JQ(Y)","R(nL)","R(ld)","aA<R>()","G(G,i5)","a5<m,@>(i5)","ai<zx>()","m(nL)","R(a7X)","m(lH)","m(w1)","R(EF)","G(i5,i5)","m(eM)","t(eM)","cL(eM)","t(hF)","~(hF)","eM(uJ,L,L,L,L,G{fx:m,key:m,rotation:L})","eM(m,L,G)","G(ok,ok)","R(zx)","R(m,ai<zx>)","a5<m,@>(ok)","nL()","Yx(Y)","eM(m,L,L,L,L,L{align:q4,anim:hF,bullets:R,color:G?,delay:G,fx:m,key:m,style:HE,weight:oU})","a0N(Y)","eM(m,L,L,L,L{anim:hF,delay:G,fx:m,key:m})","aA<~>(ok)","R(mt)","Yv(Y)","a0k(Y)","a0j(Y)","Pj(Y)","ZG(Y)","eM(uJ,L,L,L,L,G,m,m{anim:hF,delay:G,rotation:L,stroke:G,strokeWidth:L})","eM(m,L,L,L,L,L,m,m,G)","eM(L,L,m,G{size:L})","t(rl,L,L)","ld()","ok(a5<@,@>)","~(uz)","EF()","fg(eM)","t(j1)","Ze(Y)","~(Ew)","Zz(Y)","G(eM,eM)","eM(eM)","a5<m,@>(eM)","eM(a5<@,@>)","lH(lH)","a5<m,@>(lH)","lH(a5<@,@>)","R(jH)","jH()","m(i5)","~(ai<ok>)","S(ai<i5>)","S(i5)","ai<i5>(m?)","acD(Y,G)","~(R(eM,eM))","adh(Y)","aeY(Y,G)","w(lH,R)","VH(Y)","adk(Y)","VK(Y)","~(mx)","i5(i5)","L(eM)","a_O(Y)","a_q(Y)","i5()","ai<F1>()","aA<~>(ai<i5>)","t(bv<G,i5>)","D(jH)","D(EF)","aA<~>(hF,~())","t(ai<hF>,hF?,~(hF),w)","R(m7)","ai<jq<mx>>(Y)","jq<mx>(mx)","i5(a5<@,@>)","VV(Y)","eM(m,L,L,L,L,L,G{align:q4,style:HE,weight:oU})","VW(Y)","t(i5)","~(m0)","II(Y,lH,t?)","G(a8B)","aA<ai<a5<m,@>>?>()","m(m)","aA<zv>({paper:m?,photo:dL?,request:m,template!lg})","aA<a7P>({doc!zv,history:ai<+(m,m)>,instruction!m,photo:dL?,template!lg})","ade(Y)"])
C.cFc.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:74}
C.cFd.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:76}
C.cFe.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gajX(s):16;--w.c}w.b=A.o.dX(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mu(v,t)
w.b=v-A.o.dX(q,t)
w.a=t
return q},
$S:76}
C.cFf.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bOU.prototype={
$1(d){return J.f1(A.dD.gaP(d),d.byteOffset,d.byteLength)},
$S:1669}
C.fum.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iL(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iL(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iL(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iL(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1670}
C.bZG.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:28}
C.bZH.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aM(v,J.k(w==null?"":w))},
$S:40}
C.bZJ.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fKu.prototype={
$1(d){return new C.a0N(this.a,this.b,C.i95(),null)},
$S:z+36}
C.f7A.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f7E.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.f7F.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f7G.prototype={
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
C.f7B.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f7C.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f7D.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.f7v.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hG,w,w,w)
return B.em(B.a([B.bK(!1,D.fqq,w,w,!0,w,w,new C.f7t(d),w,w),B.bK(!1,D.fpv,w,w,!0,w,w,new C.f7u(d),w,w)],x.p),w,w,D.XO,v,w,w,w,w,D.fEw,w)},
$S:20}
C.f7t.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.f7u.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.f7w.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f7x.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f7K.prototype={
$0(){var w=this.a
return w.m(new C.f7J(w,this.b))},
$S:0}
C.f7J.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f7z.prototype={
$0(){var w=this.a
return w.m(new C.f7y(w,this.b,this.c))},
$S:0}
C.f7y.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.L(0,v)},
$S:0}
C.f7H.prototype={
$0(){return this.a.a0Z(this.b)},
$S:0}
C.f7I.prototype={
$0(){return this.a.P_(0,this.b)},
$S:0}
C.f7N.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.f7O.prototype={
$0(){var w=this.a
return w.m(new C.f7M(w,this.b))},
$S:0}
C.f7M.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.M(w,new C.f7L(),B.T(w).k("M<1,m>")))}},
$S:0}
C.f7L.prototype={
$1(d){return d.a},
$S:z+67}
C.feM.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.h9M(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cy)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.ok(s,v,u==null?new B.S(Date.now(),0,!1):u)},
$S:z+50}
C.feN.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fxa.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.K)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbq())q=n===o.gbq()&&p.b>o.gcC()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fx8.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fx9.prototype={
$2(d,e){return e.c.aM(0,d.c)},
$S:z+29}
C.fJZ.prototype={
$1(d){return d.ah()},
$S:z+32}
C.fu0.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fKQ.prototype={
$1(d){return new C.Yx(this.a,null)},
$S:z+34}
C.cGy.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cGA.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cGD.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cGE.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cGC())},
$S:11}
C.cGC.prototype={
$0(){},
$S:0}
C.cGF.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a1M(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cF(s)
p=q.bg(s,new C.cGB(r))
if(p<0)q.cj(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.ahq(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:297}
C.cGB.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cGG.prototype={
$1(d){},
$S:29}
C.cGz.prototype={
$1(d){return new C.Yv(this.b,this.a.gcwT(),null)},
$S:z+40}
C.cGH.prototype={
$1(d){return D.h1j},
$S:z+43}
C.cGu.prototype={
$1(d){var w=null,v=B.n(24),u=B.I(D.Xt,A.q,1),t=x.p
return B.av(B.aF(!1,A.a1,!0,w,B.p(w,B.x(B.a([new B.D(D.bvY,B.x(B.a([B.p(w,D.bKq,A.f,w,w,new B.o(A.av.j(0.14),w,w,w,w,w,A.a5),w,56,w,w,w,w,w,56),A.aR,D.fow,A.R,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fcz,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dY,new B.D(A.pY,B.B(B.a([B.E(B.dV(D.fvi,new C.cGs(d),B.dg(w,w,w,w,w,w,w,w,w,E.n5,w,w,A.cm,w,new B.b7(B.n(14),A.Y),D.aZo,w,w,w,w)),1),A.at,B.E(B.bG(D.fBf,new C.cGt(d),B.bn(A.bz,w,w,w,w,w,A.cm,w,new B.b7(B.n(14),A.Y),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.N,0,A.p),A.f,w,A.x1,new B.o(D.adj,w,u,v,D.cYp,w,A.n),w,w,w,L.Zt,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w,w,w)},
$S:1671}
C.cGs.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.cGt.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.cGv.prototype={
$0(){return J.nt(this.a.d,new C.cGr(this.b))},
$S:0}
C.cGr.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cGq.prototype={
$1(d){var w,v,u,t=null,s=B.n(28),r=B.I(D.Xt,A.q,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bPn,A.f,t,t,new B.o(t,t,t,B.n(14),t,D.aoU,A.n),t,44,t,t,t,t,t,44),A.be,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aRA,t,t,t),A.bC,D.fBb],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.djs[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.axv(u[1],u[2],u[3],new C.cGo(v,d),!1,t))}q.push(A.am)
q.push(D.bq5)
q.push(A.am)
q.push(new C.axv(A.e7,"Delete book","Remove it from this device",new C.cGp(d),!0,t))
return B.bm(!0,B.p(t,B.x(q,A.F,t,A.e,A.N,0,A.p),A.f,t,t,new B.o(D.adj,t,r,s,t,t,A.n),t,t,t,A.tO,E.Z6,t,t,t),!0,!1,A.af,!0,!0)},
$S:26}
C.cGo.prototype={
$0(){var w=this.a.a
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.cGp.prototype={
$0(){B.a6(this.a,!1).O("delete")
return null},
$S:0}
C.cGx.prototype={
$3(d,e,f){var w=null,v=B.n(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aHh,12)],x.V)
return B.dW(B.eJ(A.A,e,B.p(w,B.bw(B.n(4),new B.a7(62,95.81818181818181,B.eQ(A.A,F.ao1(d),A.f,A.dv),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.v(f,0))},
$S:z+48}
C.cGw.prototype={
$0(){return this.a.c3n()},
$S:0}
C.cGn.prototype={
$0(){return this.a.aYd(0,this.b)},
$S:0}
C.cGm.prototype={
$0(){return this.a.Da(this.b)},
$S:0}
C.cGl.prototype={
$0(){return this.a.Da(this.b)},
$S:0}
C.cGI.prototype={
$2(d,e){var w=this.a
return w.bCq(J.q(w.d,e))},
$S:43}
C.cFP.prototype={
$0(){var w=this.a
if(w.c!=null)w.AK()},
$S:0}
C.cFO.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b0d("Page "+(v.length+1),"",""))},
$S:0}
C.cFR.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cFZ.prototype={
$0(){},
$S:0}
C.cG_.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.U$=u
v.P$=0
w=w.b
w.U$=u
w.P$=0
return null},
$S:8}
C.cFS.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cR.gcw().aL(this.c)},
$S:0}
C.cFQ.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cFU.prototype={
$0(){return this.a.Qj(this.b)},
$S:0}
C.cFV.prototype={
$0(){return this.a.Qj(this.b)},
$S:0}
C.cFW.prototype={
$0(){var w=this.a
w.m(new C.cFT(this.b))
w.E0()},
$S:0}
C.cFT.prototype={
$0(){return this.a.c=""},
$S:0}
C.cFY.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cFX(w,d))
w.E0()},
$S:z+51}
C.cFX.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cG4.prototype={
$2(d,e){if(d)this.a.AK()},
$S:122}
C.cG0.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.AK(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.J(x.q).f.S(D.f_W)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cG1.prototype={
$0(){return this.a.aXb(this.b,-1)},
$S:0}
C.cG2.prototype={
$0(){return this.a.aXb(this.b,1)},
$S:0}
C.cG3.prototype={
$0(){return this.a.c4D(0,this.b)},
$S:0}
C.fBE.prototype={
$1(d){return C.hjK()},
$S:45}
C.fBF.prototype={
$1(d){return null},
$S:29}
C.fjb.prototype={
$1(d){return null},
$S:29}
C.fCD.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:315}
C.fCC.prototype={
$2(d,e){return A.o.aM(e.length,d.length)},
$S:247}
C.fCJ.prototype={
$1(d){var w=this.a
return C.h27(d)===w||C.hoj(d)===w},
$S:z+4}
C.fie.prototype={
$1(d){return A.a.aV(A.o.u(d),2,"0")},
$S:83}
C.c9i.prototype={
$1(d){return d.length!==0},
$S:3}
C.fBC.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fBD.prototype={
$1(d){return C.fEm(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fww.prototype={
$1(d){var w=null
return B.bm(!0,new B.D(E.xS,B.x(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b_,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fvU,A.O,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dn(D.GF,D.fq6,new C.fwu(d),B.bn(A.c0,w,w,w,A.w,w,A.cm,w,w,w,w,w)),A.R,B.eA(A.w1,D.fx9,new C.fwv(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cm,w,w,Q.x_,w,w,w,w))],x.p),A.ai,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fwu.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fwv.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fwx.prototype={
$1(d){var w=null
return B.em(B.a([B.bK(!1,D.fmj,w,w,!0,w,w,new C.fws(d),w,w),B.bG(D.fDx,new C.fwt(d),w)],x.p),w,w,w,D.fFr,w,w,w,w,D.fmc,w)},
$S:20}
C.fws.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fwt.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eaQ.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.eaO.prototype={
$0(){return this.a.e=!0},
$S:0}
C.eaP.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eaR.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eaS.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fCI.prototype={
$1(d){return A.a.aV(A.o.u(d),2,"0")},
$S:83}
C.fCE.prototype={
$2$h$w(d,e){var w=null
return new B.bI(A.a3,w,w,B.Bg(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.n(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1672}
C.fCG.prototype={
$1(d){var w=null,v=B.n(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.fdM,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:149}
C.fCH.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.i2,A.q,1.5),w,w,w,A.a5),w,d,w,w,w,w,w,d),B.dW(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.i2,A.q,1.5),w,w,w,A.a5),w,d,w,w,w,w,w,d),new B.v(-d*0.38,0))],x.p),A.m,w,A.b9,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1673}
C.fCF.prototype={
$2$female$size(d,e){var w=null,v=d?D.aff:this.a,u=B.I(A.i2,A.q,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a5),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.r,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.n(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.ady,w,u,w,w,w,A.a5),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1674}
C.fOh.prototype={
$1(d){return new C.ade(this.a,this.b,null)},
$S:z+108}
C.dYQ.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bmM:A.Lz,q=B.I(D.jf.j(0.25),A.q,1),p=B.av(B.p(t,t,A.f,t,t,new B.o(A.c0.j(0.45),t,t,B.n(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.n(15)
o=B.p(t,D.anE,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.q,1.2),o,B.a([new B.ac(0,A.G,D.jf.j(0.35),A.em,10)],x.V),D.bZ4,A.n),t,t,t,t,A.xJ,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.x(B.a([new B.D(I.Zi,B.x(B.a([p,A.aB,B.B(B.a([o,A.be,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.jf,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bC,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fd1,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.E(B.im(!0,t,e,A.y,D.aOX,new C.dYP(w,this.c),v,D.air,t,A.ah,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.mc,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:115}
C.dYP.prototype={
$2(d,e){var w=this.a.d[e]
return new C.acD(w,new C.dYO(this.b,w),null)},
$S:z+72}
C.dYO.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fwA.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fwB.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xS,B.x(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b_,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fzl,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dn(D.GF,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fwy(d),B.bn(D.jf,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.R,B.eA(A.o8,D.Ue,new C.fwz(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cm,w,w,Q.x_,w,w,w,w))],x.p),A.ai,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fwy.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fwz.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fwE.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fwF.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xS,B.x(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b_,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fni,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dn(D.GF,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fwC(d),B.bn(D.jf,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.R,B.eA(A.o8,D.Ue,new C.fwD(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cm,w,w,Q.x_,w,w,w,w))],x.p),A.ai,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fwC.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fwD.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fwI.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fwJ.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xS,B.x(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b_,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.ftI,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dn(D.GF,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fwG(d),B.bn(D.jf,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.R,B.eA(A.o8,D.Ue,new C.fwH(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cm,w,w,Q.x_,w,w,w,w))],x.p),A.ai,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fwG.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fwH.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fPK.prototype={
$1(d){return D.h5o},
$S:z+74}
C.eg4.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bet:A.Lz,s=B.I(A.ay.j(0.25),A.q,1),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.ay.j(0.45),v,v,B.n(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.n(15)
q=B.p(v,D.bRF,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.q,1.2),q,B.a([new B.ac(0,A.G,A.c0.j(0.35),A.em,10)],x.V),D.aoZ,A.n),v,v,v,v,A.xJ,v,v,v)
w=x.p
return B.p(v,B.x(B.a([new B.D(I.Zi,B.x(B.a([r,A.aB,B.B(B.a([q,A.be,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:Z.Lw,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bC,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.faw,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.E(B.im(!0,v,e,A.y,D.aOX,new C.eg3(this.b),19,D.air,v,A.ah,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.mc,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:115}
C.eg3.prototype={
$2(d,e){var w=D.QY[e]
return new C.aeY(w,new C.eg2(this.a,w),null)},
$S:z+75}
C.eg2.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fEq.prototype={
$0(){return B.h13(C.hXA(this.a))},
$S:291}
C.fEp.prototype={
$0(){var w=C.h2q(this.a)
return"data:image/png;base64,"+A.cR.gcw().aL(w)},
$S:22}
C.fgk.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jg(d,e),new B.jg(w,e+v),new B.jg(d+f*14,e),new B.jg(w,e-v)],x.J)
B.a1J(this.a,C.fB(4291404327),v)},
$S:664}
C.fPV.prototype={
$1(d){return new C.VH(this.a,null)},
$S:z+77}
C.ejm.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ejl())},
$S:30}
C.ejl.prototype={
$0(){},
$S:0}
C.ejn.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ejk(w,d))},
$S:1676}
C.ejk.prototype={
$0(){return this.a.x=J.eX(A.dD.gaP(this.b))},
$S:0}
C.ejo.prototype={
$1(d){},
$S:29}
C.eiZ.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eiV.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ej5.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.ej6.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.epE)},
$S:0}
C.ej7.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ej0.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bP(0,A.c8)},
$S:0}
C.ej1.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.ej2.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.u(this.b)))},
$S:0}
C.ej3.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ej4.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd_(v).Q
v.toString
w.md(v,A.dV,A.ih)}},
$S:8}
C.ej_.prototype={
$0(){var w=this.a,v=w.z,u=C.fF3(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cI7(C.fF3(t))},
$S:0}
C.eiX.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.eiY.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ejd.prototype={
$0(){return B.a6(this.a,!1).lz()},
$S:0}
C.eje.prototype={
$0(){var w=this.a
return w.m(new C.ejc(w))},
$S:0}
C.ejc.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.ejf.prototype={
$0(){var w=this.a
return w.m(new C.ejb(w,this.b))},
$S:0}
C.ejb.prototype={
$0(){var w=this.b.b
this.a.e.saX(0,w)
return w},
$S:0}
C.ejg.prototype={
$1(d){var w=this.a
return w.m(new C.eja(w))},
$S:9}
C.eja.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.ejh.prototype={
$1(d){var w=this.a
return w.m(new C.ej9(w))},
$S:9}
C.ej9.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.eji.prototype={
$0(){var w=this.a
return w.m(new C.ej8(w,this.b))},
$S:0}
C.ej8.prototype={
$0(){var w=this.b
this.a.f.saX(0,w)
return w},
$S:0}
C.ejj.prototype={
$1(d){return this.a.ZE()},
$S:2}
C.eiW.prototype={
$0(){return this.a.c83(this.b)},
$S:0}
C.ccZ.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cQ(w.h(0,d))):null},
$S:333}
C.ccX.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.ccY.prototype={
$1(d){return d.length!==0},
$S:3}
C.fE0.prototype={
bl5(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bOT(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.K)(e),++t){s=e[t]
r.cED($.qV().jH(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mJ(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bl5(d,e)},
$S:1677}
C.fCi.prototype={
$1(d){return d.length!==0},
$S:3}
C.fCk.prototype={
$1(d){var w=this.a.a
w=A.d.aH(A.d.ds(this.b,w,w+d)," ")
w=B.aK(w," \n\n ","\n\n")
w=B.aK(w," \n\n","\n\n")
return B.aK(w,"\n\n ","\n\n")},
$S:83}
C.fCj.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.h3(t,t,t,t,B.d3(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qw,A.c6,t,A.dP,A.c5)
v=this.a
w.wE(v.b)
u=w.b.a.c
return u.gbd(u)<=v.a},
$S:33}
C.ffV.prototype={
$1(d){var w=A.a.fH(d,B.af("\\s+",!0,!1,!1,!1))
return new B.a_(w,new C.ffW(),B.T(w).k("a_<1>")).gM(0)},
$S:253}
C.ffW.prototype={
$1(d){return d.length!==0},
$S:3}
C.ffT.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:216}
C.ffU.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:216}
C.cd_.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaA_()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,w-(f===t?r:0)))
o=C.h26(i,new B.H(!0,h,a6,k,a6,a6,q,A.cN,A.bo,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fZW(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aH(n.gcge(),"\n\n")
d=B.h3(a6,a6,a6,a6,B.d3(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.ae3(k,q,1.28),j),A.qw,A.c6,a6,A.dP,A.c5)
d.wE(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbd(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.h26(i,new B.H(!0,h,a6,k,a6,a6,q,A.cN,A.bo,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fZW(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.ae3(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bB(1,A.bh,new B.y(o.length>a4?o[a4]:"",a6,a3,a6,A.qw,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.azZ(s,j))
i.push(new B.a7(s,a6,B.x(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:462}
C.cd0.prototype={
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
n=o.gaA_()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.z(u,q),new B.z(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.z(r,p-(a0===s?m:0)))
l=C.h26(f,new B.H(!0,e,a5,i,a5,a5,h,A.cN,A.bo,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fZW(g.length===0?B.a([a6],n):g,l))break}a1=o.ae3(i,h,1.28)
a2=new C.cd1(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.J_,new B.a7(v,a5,a4.f,a5),A.J_,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.byg,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bB(1,A.bh,new B.y(l[2+a3],a5,a1,a5,A.qw,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.azZ(r,g))
f.push(new B.a7(r,a5,B.x(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.x(B.a([new B.a7(a5,q,v,a5),A.ac,B.E(B.B(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:154}
C.cd1.prototype={
$2(d,e){var w=null
return new B.a7(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qw,w,w),w)},
$S:1678}
C.fPY.prototype={
$1(d){return new C.VK(this.a,this.b,null)},
$S:z+79}
C.eky.prototype={
$1(d){return d.m3()},
$S:1679}
C.ekz.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ekx(w,d))},
$S:1680}
C.ekx.prototype={
$0(){var w=this.b
return this.a.d=w.gfw(w)},
$S:0}
C.ekl.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ekm.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eks.prototype={
$0(){return B.a6(this.a,!1).eF()},
$S:0}
C.ekt.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bD,A.q,2.5)
return B.aC(w,B.p(w,B.b3(w,w,w,new C.bbM(u,v.gax3(),w),A.f5),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ekq(v),new C.ekr(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a7)},
$S:35}
C.ekq.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:272}
C.ekr.prototype={
$1(d){var w=this.a
w.m(new C.ekn(w,d,this.b,this.c))},
$S:220}
C.ekn.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gax3()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.eku.prototype={
$1(d){var w=this.a
return w.m(new C.ekp(w,this.b))},
$S:9}
C.ekp.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ekv.prototype={
$1(d){var w=this.a
return w.m(new C.eko(w,d))},
$S:6}
C.eko.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ekw.prototype={
$0(){return B.a6(this.b,!1).O(this.a.a.c)},
$S:0}
C.fQd.prototype={
$1(d){return D.h8b},
$S:z+83}
C.eU8.prototype={
$1(d){return this.a.Yj()},
$S:8}
C.eT0.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cR.gcw().aL(v)},
$S:0}
C.eTo.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eTy.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.eSK.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eSL.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eSI.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eSJ.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eTh.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eTi(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jA(B.rD(p>0.2?C.fUG(q,B.a51(p,p,A.x)):q),A.r,u)],x.p)
w=s.bi
if(w>0.02){v=B.a51(12,12,A.x)
p.push(B.jA(B.de(B.rD(C.fUG(r.$1(!0),v)),w*0.75),A.r,u))}r=s.b1
if(r!=null&&s.b2>0)p.push(B.en(u,B.b0(r).j(s.b2),!0))
r=s.bb
if(r!=null&&s.bL>0){r=B.b0(r).j(s.bL)
w=s.bb
w.toString
p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bT(D.aXF,1.15,A.x,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.bf))}r=s.aF
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bT(D.aXq,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bf))
r=s.aJ
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.a8(A.b0,A.b4,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aJ)],x.O),D.cX1,u),A.n),A.bf))
if(s.aB>0){r=s.k1
p.push(B.ao(u,B.c_(u,new B.o(u,u,u,u,u,new B.a8(A.b0,A.b4,A.x,B.a([A.w.j(0),A.w.j(s.aB),A.w.j(s.aB),A.w.j(0)],x.O),D.d7_,u),A.n),A.bf),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.a_
if(r>0)p.push(B.en(u,A.w.j(r),!0))
r=s.b8
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bT(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.d44,u),A.n),A.bf))
s=s.az
if(s>0)p.push(B.b3(u,u,u,new C.bfk(s,u),A.aw))
return new B.an(A.W,u,A.b1,A.r,p,u)},
$S:65}
C.eTi.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fP(r.b,A.A,q,q,A.ci,A.bV,!0,q,!1,q,q),o=r.a,n=o.aWO(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c5,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bh
v=o.aI
u=v-1
t=o.bF
s=o.c6?-1:1
return B.dW(B.ef(A.A,B.eJ(A.A,l,B.fv(A.A,new B.Dn(new B.yU(q,q,n,A.Ax),p,q),q,B.vO(s,o.cI?-1:1,1),!0),q),v*w,q,q),new B.v(-m*r.d*u/2,-t*r.c*u/2))},
$S:483}
C.eTu.prototype={
$0(){return this.a.m(new C.eTt(this.b,this.c))},
$S:0}
C.eTt.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eTv.prototype={
$1(d){return this.a.m(new C.eTs(this.b,d))},
$S:6}
C.eTs.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eTx.prototype={
$0(){return this.a.m(new C.eTw(this.b,this.c))},
$S:0}
C.eTw.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eSA.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eSB.prototype={
$1(d){var w=this.a
return w.m(w.gcyh())},
$S:2}
C.eSC.prototype={
$1(d){return this.a.m(new C.eSz())},
$S:2}
C.eSz.prototype={
$0(){},
$S:0}
C.eSD.prototype={
$0(){var w=this.a
return w.m(new C.eSy(w,this.b))},
$S:0}
C.eSy.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eSF.prototype={
$2(d,e){return A.at},
$S:36}
C.eSE.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.n(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bE
q=B.I(q,A.q,t?2.5:1)
r=B.df(w,B.av(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.bc,new B.o(w,w,q,s,w,new B.a8(A.b0,A.b4,A.x,r,w,w),A.n),A.hz,w,94,w,w,w,w,70)
return B.aC(w,new B.a7(70,w,B.x(B.a([r,A.fF,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aA,w,w,w,w,w,w,w,w,10.5,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eSx(u,v),w,w,w,w,w,w,!1,A.a7)},
$S:78}
C.eSx.prototype={
$0(){var w=this.a
return w.m(new C.eSu(w,this.b))},
$S:0}
C.eSu.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eSG.prototype={
$1(d){var w=this.a
return w.m(new C.eSw(w,d))},
$S:9}
C.eSw.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eSH.prototype={
$1(d){var w=this.a
return w.m(new C.eSv(w,d))},
$S:9}
C.eSv.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eTY.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gI(this.b)]},
$S:33}
C.eU4.prototype={
$1(d){var w=this.a
return w.m(new C.eU5(w,d))},
$S:27}
C.eU5.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.eb(v,v.r,B.a3(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eU6.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:252}
C.eTZ.prototype={
$0(){var w=this.a
return w.m(new C.eTX(w,this.b))},
$S:0}
C.eTX.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.L(0,v)},
$S:0}
C.eU_.prototype={
$0(){var w=this.a
return w.m(new C.eTW(w,this.b))},
$S:0}
C.eTW.prototype={
$0(){var w,v=this.b.length,u=J.e4(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eU0.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eTV(v,w.b,w.c,w.d))},
$S:0}
C.eTV.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eU1.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.grG(v))},
$S:0}
C.eU2.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eU3.prototype={
$0(){var w=this.a
return w.m(new C.eTU(w))},
$S:0}
C.eTU.prototype={
$0(){var w=this.a.db
return A.d.h6(w,0,w.length,0)},
$S:0}
C.eTH.prototype={
$1(d){return d.a===this.a.dy},
$S:208}
C.eTI.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.ax4[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aT(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.ax7(new B.nb(new B.bp(n,n,n,n),A.aq,new B.kR(new B.o(j,j,j,j,j,new B.a8(A.a3,A.a8,A.x,m,j,j),A.n),A.bf,new C.aZX(l,B.b0(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eTG(r,v),2,i))}return B.bV(A.bA,h,A.br,7,7)},
$S:171}
C.eTG.prototype={
$0(){var w=this.b
return w.m(new C.eTB(this.a,w))},
$S:0}
C.eTB.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eTJ.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:219}
C.eTM.prototype={
$0(){var w=this.a
return w.m(new C.eTF(w))},
$S:0}
C.eTF.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eTN.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eTO.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eTP.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eTQ.prototype={
$0(){var w=this.a
return w.m(new C.eTE(w))},
$S:0}
C.eTE.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eTR.prototype={
$0(){var w=this.a
return w.m(new C.eTD(w))},
$S:0}
C.eTD.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eTS.prototype={
$0(){var w=this.b
return w.m(new C.eTC(this.a,w))},
$S:0}
C.eTC.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eTT.prototype={
$1(d){return this.a.fx=d},
$S:219}
C.eTK.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eTL.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eTl.prototype={
$0(){var w=this.a
return w.m(new C.eTk(w))},
$S:0}
C.eTk.prototype={
$0(){var w=this.a
w.p4=null
w.b31()},
$S:0}
C.eTm.prototype={
$0(){var w=this.a
return w.m(new C.eTj(w,this.b))},
$S:0}
C.eTj.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eTn.prototype={
$0(){var w=this.a
return w.m(w.gcoJ())},
$S:0}
C.eTd.prototype={
$0(){var w=this.a
return w.m(new C.eTc(w))},
$S:0}
C.eTc.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eTe.prototype={
$0(){var w=this.a
return w.m(new C.eTb(w))},
$S:0}
C.eTb.prototype={
$0(){var w=this.a
w.aB=0.55
w.a_=Math.max(w.a_,0.12)},
$S:0}
C.eTf.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.d4t[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aT(9,9)
m.push(v.ax7(new B.nb(new B.bp(p,p,p,p),A.aq,new B.a7(1/0,1/0,new B.Dn(new B.yU(o,o,v.aWO(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.Ax),B.fP(u,A.A,140,o,A.ci,A.bV,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eTa(v,s),3,n))}return B.bV(A.bA,m,A.br,10,8)},
$S:171}
C.eTa.prototype={
$0(){var w=this.a
return w.m(new C.eT9(w,this.b))},
$S:0}
C.eT9.prototype={
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
C.eSS.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eST.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eSU.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eSV.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eSW.prototype={
$1(d){return this.a.aF=d},
$S:6}
C.eSX.prototype={
$1(d){return this.a.a_=d},
$S:6}
C.eSY.prototype={
$1(d){return this.a.b8=d},
$S:6}
C.eSZ.prototype={
$1(d){return this.a.aB=d},
$S:6}
C.eT_.prototype={
$1(d){return this.a.aJ=d},
$S:6}
C.eSd.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eSe.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eSf.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eSg.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eSh.prototype={
$0(){var w=this.a
return w.m(new C.eSc(w))},
$S:0}
C.eSc.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eSi.prototype={
$1(d){return this.a.b1=d},
$S:219}
C.eSj.prototype={
$1(d){return this.a.b2=d},
$S:6}
C.eSM.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eSN.prototype={
$1(d){return this.a.bi=d},
$S:6}
C.eSO.prototype={
$1(d){return this.a.az=d},
$S:6}
C.eSP.prototype={
$1(d){return this.a.bb=d},
$S:219}
C.eSQ.prototype={
$1(d){return this.a.bL=d},
$S:6}
C.eSn.prototype={
$1(d){return this.a.aI=d},
$S:6}
C.eSo.prototype={
$1(d){return this.a.bh=d},
$S:6}
C.eSp.prototype={
$1(d){return this.a.bF=d},
$S:6}
C.eSq.prototype={
$1(d){return this.a.c5=d},
$S:6}
C.eSr.prototype={
$0(){var w=this.a
return w.m(new C.eSm(w))},
$S:0}
C.eSm.prototype={
$0(){var w=this.a
return w.c5=A.k.E(w.c5+90+180,360)-180},
$S:0}
C.eSs.prototype={
$0(){var w=this.a
return w.m(new C.eSl(w))},
$S:0}
C.eSl.prototype={
$0(){var w=this.a
return w.c6=!w.c6},
$S:0}
C.eSt.prototype={
$0(){var w=this.a
return w.m(new C.eSk(w))},
$S:0}
C.eSk.prototype={
$0(){var w=this.a
return w.cI=!w.cI},
$S:0}
C.eTg.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.ibS(v,w.p4)},
$S:0}
C.eT8.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bn5:B.fP(v,A.A,w,w,A.ci,A.bV,!1,w,!1,w,w)
return C.fCq(d.length===0?"rounded":d,u,e)},
$S:129}
C.eT4.prototype={
$0(){var w=this.a
return w.m(new C.eT3(w))},
$S:0}
C.eT3.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eT5.prototype={
$0(){var w=this.b
return w.m(new C.eT2(this.a,w))},
$S:0}
C.eT2.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eT6.prototype={
$0(){var w=this.b
return w.m(new C.eT1(this.a,w))},
$S:0}
C.eT1.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eT7.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eTr.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.n(20),p=B.a([new B.ac(-4,A.G,A.b6.j(0.35),A.J,30)],x.V),o=B.n(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.ex(n.ci8(),n.r))
l.push(new C.II(n.cvi(),!1,!1,t))
o=B.bZ(0,B.bw(o,new B.ex(new B.an(A.W,t,A.b1,A.r,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.n(8)
return B.p(t,new B.an(A.W,t,A.aa,A.r,B.a([o,B.ao(t,B.aC(A.c7,B.c_(t,new B.o(t,t,B.I(A.c.j(0.3),A.q,1),u,t,t,A.n),A.bf),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eTq(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a7),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:204}
C.eTq.prototype={
$1(d){var w=this.a
return w.m(new C.eTp(w,d,this.b,this.c))},
$S:18}
C.eTp.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eTA.prototype={
$0(){var w=this.a
return w.m(new C.eTz(w,this.b))},
$S:0}
C.eTz.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eSR.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).lz()},
$S:0}
C.eU7.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a7(Math.min(s*0.4,460),t,B.x(B.a([w.aZC(),B.E(B.av(w.b1z(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.E(B.x(B.a([B.E(w.aPT(),1),w.aM5()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.aZC(),new B.D(A.hP,B.av(s.b1z(u),t,t,t),t),B.E(s.aPT(),1),s.aM5()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:518}
C.fzH.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.er(k,!1,j,A.aD,"",4280640491,i,l,m,"",h,C.bAm(),null,"","",0,!1,"",0,D.bg,4280172719,2,d,0,0,"",D.cn,D.cQ,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bo,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bo,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bo,A.P)},
$S:z+98}
C.fzG.prototype={
$3(d,e,f){var w=this,v=C.bAm(),u=w.b?A.H:A.cx,t=w.c?A.cF:A.bo
return C.er(w.d,!1,f,A.aD,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bg,4280172719,2,d,0,w.f,w.e,D.cn,D.cQ,0.82,0.09,w.a)},
$S:z+28}
C.cem.prototype={
$1(d){return B.u(d)},
$S:17}
C.fHn.prototype={
$0(){return this.a},
$S:z+15}
C.fnx.prototype={
$1(d){return d.a.cZ(this.a)},
$S:z+30}
C.fny.prototype={
$2(d,e){return J.cn(e)},
$S:z+31}
C.fHp.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fHs.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fHt.prototype={
$0(){return A.d.gI(D.wb)},
$S:z+33}
C.fHl.prototype={
$1(d){return d.a},
$S:z+16}
C.fHo.prototype={
$1(d){return d.a},
$S:z+16}
C.fFl.prototype={
$1(d){return A.a.i(B.u(d))},
$S:17}
C.fFm.prototype={
$1(d){return d.length!==0},
$S:3}
C.fFn.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fzL.prototype={
$0(){return C.cB()},
$S:22}
C.fzO.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cn,s=u?n:0
return C.er(j,l,v,A.aD,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bg,4280172719,2,d,s,0,"",t,D.cQ,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,D.de,!1,null,0,"","",A.bo,A.a6)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,D.de,!1,null,0,"",j,A.bo,A.a6)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,D.de,!1,null,0,j,k,A.bo,A.a6)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bo,A.a6)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bo,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.de,!1,k,l,"",m,A.bo,A.a6)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,j,!1,null,0,"",k,A.bo,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,D.de,!1,j,k,"",l,A.bo,A.a6)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,j,!1,k,0,l,m,A.bo,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bi,j,k,l,m,"",n,A.bo,A.a6)},
$S:z+35}
C.fzN.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.er(A.bi,!1,4279310375,A.aD,"",i,24,A.bo,A.a6,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cn,D.f4,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fzM.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cn,t=v?j:0
return C.er(A.bi,!1,4279310375,A.aD,"",4280640491,24,A.bo,A.a6,"",h,w,d,v?k:"",l,0,!1,"",0,D.bg,4280172719,2,"",t,0,"",u,D.lw,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.ql,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fzK.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fCb.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hkM.c9(0,A.a.i(s.w).toLowerCase(),new C.fC9(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c9(0,s.r,new C.fCa(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bv(t.e,new B.bok(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1684}
C.fC9.prototype={
$0(){return F.aNA(this.a.w)},
$S:181}
C.fCa.prototype={
$0(){var w=this.a.r,v=B.aK(w.toLowerCase()," ","_")
return F.bzg("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.ie(2,w,A.cg,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:181}
C.ffQ.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.ffR.prototype={
$1(d){return d.a},
$S:z+18}
C.ffS.prototype={
$1(d){return d.b},
$S:z+19}
C.fQp.prototype={
$1(d){return D.h8s},
$S:z+41}
C.f_l.prototype={
$0(){return this.a.x=C.hPi(this.b,this.c.b)},
$S:0}
C.f_m.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.f_j.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:410}
C.f_k.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:410}
C.f_i.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bS(A.ax,null,new C.f_d(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.kC,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b5(s,7)
if(r.length===0){n.m(new C.f_e(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hqB(o,m.cIV(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.f_f(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.f_d.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.f_h(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b5P,A.f,p,p,D.b0R,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Cb:D.Cg,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a7(64,64,C.fCq(v,i.b3E(h),u),p)))}t=B.m2(1,m,4,10,10,p,A.dS,!0)
if(!l)return B.bm(!0,new B.D(A8.xP,t,p),!0,!1,A.af,!0,!0)
s=new C.f_g(i,d)
m=B.aI(d,A.bW,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.GZ[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cT(new B.aY(0,1/0,0,m.a.b*0.85),B.cd(B.x(B.a([D.fs9,A.R,t,A.dY,D.eQA,A.au,D.fCT,A.R,B.m2(1.15,l,3,10,10,p,A.dS,!0)],n),A.F,p,A.e,A.j,0,A.p),A.r,p,A.y,p,A8.xP,p,p,A.ah),p),!0,!1,A.af,!0,!0)},
$S:26}
C.f_h.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.n(16),t=v?A.b6.j(0.22):A.c.j(0.04),s=v?A.bu:A.dm
return B.aC(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.q,v?2:1),u,w,w,A.n),w,w,w,w,A.hA,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f_c(this.b,d),w,w,w,w,w,w,!1,A.a7)},
$S:1685}
C.f_c.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.f_g.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.n(12),r=t?A.bM:A.bE
r=B.I(r,A.q,t?2.5:1)
w=B.n(10)
u=B.E(B.p(v,B.bw(w,d.length===0?B.p(v,D.ao8,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e_(new C.Nn(u.FA(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aC(v,B.x(B.a([u,A.au,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bM:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f_b(this.b,d),v,v,v,v,v,v,!1,A.a7)},
$S:129}
C.f_b.prototype={
$0(){B.a6(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.f_e.prototype={
$0(){var w=this.a
return w.w=w.w.FA("")},
$S:0}
C.f_f.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f_1.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.f_2.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.f_4.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.f_5.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.f_6.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.f_7.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f_3(w,d))},
$S:2}
C.f_3.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.f_8.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.u(this.b)},
$S:0}
C.f_z.prototype={
$0(){return this.a.f.fO()},
$S:0}
C.f_A.prototype={
$0(){var w=this.a
return w.m(new C.f_y(w))},
$S:0}
C.f_y.prototype={
$0(){return this.a.e=null},
$S:0}
C.f_B.prototype={
$0(){var w=this.a
return w.m(new C.f_x(w))},
$S:0}
C.f_x.prototype={
$0(){return this.a.x=null},
$S:0}
C.f_D.prototype={
$1(d){var w=this.a
return w.m(new C.f_w(w,d))},
$S:32}
C.f_w.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.f_E.prototype={
$1(d){var w=this.a
return w.m(new C.f_v(w,d))},
$S:32}
C.f_v.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f_F.prototype={
$0(){var w=this.a
return w.m(new C.f_u(w))},
$S:0}
C.f_u.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.f_G.prototype={
$1(d){var w=this.a
return w.m(new C.f_t(w,d))},
$S:32}
C.f_t.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f_H.prototype={
$1(d){var w=this.a
return w.m(new C.f_s(w,d))},
$S:32}
C.f_s.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f_I.prototype={
$0(){var w=this.a
return w.m(new C.f_r(w))},
$S:0}
C.f_r.prototype={
$0(){var w=this.a
return w.w=w.w.FA("")},
$S:0}
C.f_J.prototype={
$0(){var w=this.a
return w.m(new C.f_q(w,this.b))},
$S:0}
C.f_q.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.f_K.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a7(u,null,w.bOk(D.a3a[v]),null))
return B.bV(A.bA,t,A.br,8,8)},
$S:171}
C.f_C.prototype={
$1(d){var w=this.a
return w.m(new C.f_p(w,d))},
$S:9}
C.f_p.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.f_9.prototype={
$0(){var w=this.a
return w.m(new C.f_a(w,this.b,this.c))},
$S:0}
C.f_a.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.L(0,w)},
$S:0}
C.f_o.prototype={
$0(){var w=this.a
return w.m(new C.f_n(w,this.b))},
$S:0}
C.f_n.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fQo.prototype={
$1(d){return new C.a0j(this.a,this.b,null)},
$S:z+42}
C.eZV.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eZW.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eZX.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aGH?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eZY.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eZZ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eZU(w,d))},
$S:2}
C.eZU.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f__.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.u(this.b)},
$S:0}
C.f_0.prototype={
$0(){var w=this.b
if(A.a.cb(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bP(0,new B.bb(w,B.hg(A.bw,w.length),A.aO))},
$S:0}
C.fmN.prototype={
$1(d){return d.a===this.a},
$S:208}
C.efu.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gax8(),n=o.x
n===$&&B.c()
w=B.n(16)
v=p.a.c
u=v?D.cR3:D.d6K
t=D.xv.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.q,v?1.8:1.2)
s=D.xv.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.n(15)
n=B.bZ(0,B.b3(q,q,q,new C.bhx(n*6.283,q),A.aw),0,0,0)
o=o.x
o=B.bZ(0,B.bP9(B.eJ(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a8(A.a3,A.a8,A.x,B.a([A.K,D.bcO.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.v(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bw(s,new B.an(A.W,q,A.aa,A.r,B.a([n,o,B.av(B.x(B.a([B.X(p.a.c?A.eh:A.lV,D.xv,q,q,q,20),A.au,B.eQ(A.A,B.nQ(A.jz,D.flH,new C.eft()),A.f,A.dZ)],r),A.m,q,A.e,A.N,0,A.p),q,q,q),B.ao(q,B.p(q,D.fil,A.f,q,q,new B.o(D.xv,q,q,B.n(6),q,q,A.n),q,q,q,q,M.aj6,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a8(A.az,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:94}
C.eft.prototype={
$1(d){return D.bXi.av(0,d)},
$S:66}
C.fHu.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fHv.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:208}
C.fHw.prototype={
$2(d,e){return A.o.aM(e.a.length,d.a.length)},
$S:1686}
C.fHx.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aK(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aK(u,p,q.toUpperCase())}return u},
$S:14}
C.fHq.prototype={
$1(d){return d.a},
$S:z+18}
C.fHr.prototype={
$1(d){return d.b},
$S:z+19}
C.fPC.prototype={
$1(d){return new C.ZG(this.a,this.b,null)},
$S:z+44}
C.djb.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.djc.prototype={
$1(d){return d.a===this.a.gaih()},
$S:z+10}
C.djd.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.djg.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.djh.prototype={
$0(){var w=this.a
return w.m(new C.djf(w,this.b))},
$S:0}
C.djf.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dji.prototype={
$1(d){var w=this.a
return w.m(new C.dje(w,d))},
$S:9}
C.dje.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.efs.prototype={
$1$2(d,e,f){var w=B.bo(d,!0,f)
A.d.fp(w,this.a)
return B.db(w,0,B.dI(e,"count",x.S),B.T(w).c).dJ(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1687}
C.fcn.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.er(A.bi,!1,4279310375,A.aD,"",i,24,A.bo,A.a6,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f4,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cn,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.fcp.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.er(A.L,!1,this.b.d,A.aD,"",4280640491,i,A.bo,A.cN,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bg,4280172719,2,d,l,0,"",D.mK,D.cQ,g,e,f)},
$S:z+46}
C.fco.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.wv(0,"twinkle")
w=t===D.bg?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mK,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.fcm.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fAS.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fAT.prototype={
$0(){return A.d.gI(D.H7)},
$S:z+49}
C.fAU.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fej.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fGX.prototype={
$1(d){var w=2450411,v=4281908728
C.dy(d,C.dz(4280171146,1,0,D.bg,w,0,0.52,0,0))
C.dy(d,C.dz(v,1,0,D.bg,w,0,0.04,0.48,0))
C.dy(d,C.dz(4294047225,0.38,0,D.bg,w,0,0.48,0.52,0.62))
C.dy(d,C.dz(v,0.006,0,D.fs,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fGY.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dy(d,C.dz(4280172719,0.8,0,D.bg,w,0,0.36,0.58,0.1))
C.dy(d,C.dz(v,0.64,0,D.bg,w,0,0.28,0.64,0.18))
C.dy(d,C.dz(4282090230,0.44,0,D.bg,w,0,0.2,0.7,0.28))
C.dy(d,C.dz(v,0.006,0,D.fs,v,3,0.22,0.08,0.12))
C.dy(d,C.dz(u,0.004,0,D.fs,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fGZ.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(4279080072,0.11,0,D.bg,w,0,1,0,0))
C.dy(d,C.dz(4279310375,0.11,0,D.bg,w,0,1,0,0.89))
C.dy(d,C.dz(856528008,0.72,0,D.jQ,w,0,0.28,0.72,0.14))
C.dy(d,C.dz(1426953352,0.2,0,D.jQ,w,0,0.2,0.78,0.22))
C.dy(d,C.dz(v,0.004,0,D.fs,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fH9.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4279203438,0.55,0,D.jQ,w,0,0.5,0.55,-0.05))
C.dy(d,C.dz(4280171146,0.5,0,D.jQ,w,0,0.45,0.62,0.35))
C.dy(d,C.dz(4280640491,0.4,0.3,D.jP,w,0,0.35,0.68,0.55))
C.dy(d,C.dz(571438702,0.12,0,D.bg,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fHe.prototype={
$1(d){var w=4280472558
C.dy(d,C.dz(4279310375,0.75,-0.4,D.jP,2450411,0,0.75,-0.15,0.35))
C.dy(d,C.dz(w,0.55,0,D.bg,2450411,0,0.06,0.42,0.38))
C.dy(d,C.dz(w,0.006,0,D.fs,w,3,0.35,0.08,0.08))
C.dy(d,C.dz(2282478,0.12,0,D.bg,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fHf.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3423541034,0.48,0,D.bg,w,0,1,0,0))
C.dy(d,C.dz(v,0.12,-0.08,D.jQ,w,0,1.1,-0.05,0.38))
C.dy(d,C.dz(858088427,0.35,0,D.bg,w,0,0.42,0.55,0.05))
C.dy(d,C.dz(v,0.006,0,D.fs,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fHg.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cQ3[w]
u=Date.now()
t=$.j2
$.j2=t+1
v=new C.eM("design_"+(""+1000*u+"_"+t),D.f4,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a6,A.bo,A.aD,4279310375,A.bi,null,D.bg,v,4294967295,2,0,!1,"",0,D.cn,0,"","","","","",!1,0)
u=$.Kn
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fs,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fHh.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.mm,A.ds,w/3).l()
u=Date.now()
t=$.j2
$.j2=t+1
v=new C.eM("design_"+(""+1000*u+"_"+t),D.f4,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a6,A.bo,A.aD,4279310375,A.bi,null,D.CT,v,2450411,0,0,!1,"",0,D.cn,0,"","","","","",!1,0)
u=$.Kn
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fs,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fHi.prototype={
$1(d){var w=4294967295
C.dy(d,C.dz(4280640491,1,0,D.bg,2450411,0,0.42,0,0))
C.dy(d,C.dz(4280110808,1.1,1.57,D.jP,2450411,0,0.18,0.35,-0.05))
C.dy(d,C.dz(w,0.006,0,D.fs,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fHj.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dy(d,C.dz(w,0.1,0,D.bg,v,0,1,0,0))
C.dy(d,C.dz(u,0.012,0,D.bg,v,0,1,0,0.1))
C.dy(d,C.dz(u,0.006,0,D.fs,u,3,0.42,0.06,0.14))
C.dy(d,C.dz(403446057,0.68,0,D.jQ,v,0,0.22,0.72,0.18))
C.dy(d,C.dz(w,0.1,0,D.bg,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fHk.prototype={
$1(d){var w=4278630100
C.dy(d,C.dz(4279310375,1.2,0.15,D.jQ,2450411,0,0.55,-0.2,-0.1))
C.dy(d,C.dz(w,1.1,0.15,D.bg,2450411,0,0.08,0.15,-0.05))
C.dy(d,C.dz(1120295,0.18,0,D.bg,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fH_.prototype={
$1(d){var w=4292617766
C.dy(d,C.dz(4282714634,0.65,-0.2,D.jP,2450411,0,0.65,-0.1,0.45))
C.dy(d,C.dz(w,0.5,-0.15,D.jP,2450411,0,0.5,0.05,0.55))
C.dy(d,C.dz(w,0.006,0,D.fs,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fH0.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4278413729,0.35,3.14,D.jP,w,0,0.45,-0.05,0.7))
C.dy(d,C.dz(4278355143,0.3,3.14,D.jP,w,0,0.4,0.25,0.75))
C.dy(d,C.dz(4279150057,0.32,3.14,D.jP,w,0,0.5,0.55,0.72))
C.dy(d,C.dz(863884284,0.22,0,D.eN,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fH1.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dy(d,C.dz(w,0.14,0,D.bg,v,0,0.14,0.02,0.02))
C.dy(d,C.dz(2282478,0.14,0,D.bg,u,3,0.14,0.84,0.02))
C.dy(d,C.dz(w,0.28,0,D.jQ,v,0,0.35,-0.08,0.78))
C.dy(d,C.dz(u,0.22,0.5,D.jP,v,0,0.3,0.72,0.78))
C.dy(d,C.dz(w,0.006,0,D.fs,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fH2.prototype={
$1(d){var w=4293571336,v=1156231944
C.dy(d,C.dz(1841431,0.92,0,D.bg,w,3,0.92,0.04,0.04))
C.dy(d,C.dz(v,0.15,0,D.jP,2450411,0,0.15,0.02,0.02))
C.dy(d,C.dz(v,0.15,3.14,D.jP,2450411,0,0.15,0.83,0.83))
C.dy(d,C.dz(w,0.004,0,D.fs,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fH3.prototype={
$1(d){var w=4279080072,v=2450411
C.dy(d,C.dz(w,0.14,0,D.l6,v,0,0.14,0.68,0.18))
C.dy(d,C.dz(4279548070,0.14,0,D.l6,v,0,0.14,0.78,0.28))
C.dy(d,C.dz(4281193663,0.14,0,D.l6,v,0,0.14,0.68,0.38))
C.dy(d,C.dz(4284410580,0.14,0,D.l6,v,0,0.14,0.78,0.48))
C.dy(d,C.dz(4279203438,0.14,0,D.l6,v,0,0.14,0.68,0.58))
C.dy(d,C.dz(w,0.006,0,D.fs,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fH4.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3708753706,0.42,0,D.bg,w,0,1,0,0))
C.dy(d,C.dz(v,0.06,-0.05,D.jQ,w,0,1,0,0.38))
C.dy(d,C.dz(859356664,0.25,0,D.eN,w,0,0.25,0.7,0.08))
C.dy(d,C.dz(v,0.006,0,D.fs,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fH5.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.mm,A.ds,w/3).l()
u=Date.now()
t=$.j2
$.j2=t+1
v=new C.eM("design_"+(""+1000*u+"_"+t),D.f4,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a6,A.bo,A.aD,4279310375,A.bi,null,D.CT,v,2450411,0,0,!1,"",0,D.cn,0,"","","","","",!1,0)
u=$.Kn
v.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,v)}C.dy(d,C.dz(4280172719,0.08,0,D.bg,2450411,0,1,0,0))
C.dy(d,C.dz(s,0.006,0,D.fs,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fH6.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.j2
$.j2=u+1
u=new C.eM("design_"+(""+1000*v+"_"+u),D.f4,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a6,A.bo,A.aD,s,A.bi,null,D.fs,t,t,0,0,!1,"",0,D.cn,0,"","","","","",!1,0)
v=$.Kn
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cj(d.z,0,u)}C.dy(d,C.dz(s,0.75,0,D.bg,2450411,0,0.22,0.72,0.1))
C.dy(d,C.dz(872415231,0.16,0,D.bg,2450411,0,0.16,0.75,0.15))
C.dy(d,C.dz(s,0.006,0,D.fs,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fH7.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dy(d,C.dz(4674921,0.9,0,D.bg,4287931320,2,0.9,0.05,0.05))
C.dy(d,C.dz(w,0.08,0,D.bg,v,0,0.08,0.03,0.03))
C.dy(d,C.dz(u,0.08,0,D.bg,v,0,0.08,0.89,0.03))
C.dy(d,C.dz(u,0.08,0,D.bg,v,0,0.08,0.03,0.89))
C.dy(d,C.dz(w,0.08,0,D.bg,v,0,0.08,0.89,0.89))
C.dy(d,C.dz(w,0.004,0,D.fs,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fH8.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.j2
$.j2=t+1
t=new C.eM("design_"+(""+1000*u+"_"+t),D.f4,0.55,0.14+v,0.38,0.18,"",24,A.a6,A.bo,A.aD,r,A.bi,null,D.bg,4294967295,4280640491,2,0,!1,"",0,D.cn,0,"","","","","",!1,0)
u=$.Kn
t.db="__design__:"+(u.length===0?"layer":u)
A.d.cj(d.z,0,t)
u=B.aq(A.dc,A.cl,w/2).l()
t=Date.now()
s=$.j2
$.j2=s+1
u=new C.eM("design_"+(""+1000*t+"_"+s),D.f4,0.57,0.16+v,0.06,0.14,"",24,A.a6,A.bo,A.aD,r,A.bi,null,D.bg,u,q,0,0,!1,"",0,D.cn,0,"","","","","",!1,0)
v=$.Kn
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cj(d.z,0,u)}C.dy(d,C.dz(4280171146,1,0,D.bg,q,0,0.48,0,0))
C.dy(d,C.dz(4280172719,1.1,1.57,D.jP,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fHa.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(870995980,0.55,0.45,D.jQ,w,0,0.55,-0.12,-0.08))
C.dy(d,C.dz(856996006,0.45,0.45,D.jQ,w,0,0.45,0.62,-0.05))
C.dy(d,C.dz(16777215,0.38,0.45,D.jQ,4293548044,5,0.38,0.52,0.12))
C.dy(d,C.dz(585783308,0.3,0.45,D.jQ,w,0,0.3,0.56,0.16))
C.dy(d,C.dz(4279548070,0.06,0,D.bg,w,0,0.16,0.38,0.04))
C.dy(d,C.dz(1156208652,0.28,0,D.eN,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fHb.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dy(d,C.dz(w,1,0,D.bg,v,0,0.07,0,0))
C.dy(d,C.dz(u,0.1,0,D.bg,t,1,0.46,0.48,0.14))
C.dy(d,C.dz(u,0.1,0,D.bg,t,1,0.46,0.48,0.28))
C.dy(d,C.dz(u,0.1,0,D.bg,t,1,0.46,0.48,0.42))
C.dy(d,C.dz(s,0.08,0,D.eN,v,0,0.08,0.5,0.16))
C.dy(d,C.dz(w,0.08,0,D.eN,v,0,0.08,0.5,0.3))
C.dy(d,C.dz(4279548070,0.08,0,D.eN,v,0,0.08,0.5,0.44))
C.dy(d,C.dz(16777215,0.32,0.45,D.jQ,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fHc.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dy(d,C.dz(4294047225,0.08,0,D.bg,t,2,0.1,0.02,0.06))
C.dy(d,C.dz(s,0.42,0,D.bg,2450411,0,0.36,0.58,0.18))
C.dy(d,C.dz(872415231,0.12,0,D.bg,2450411,0,0.28,0.62,0.24))
C.dy(d,C.dz(16777215,0.28,0,D.eN,s,4,0.32,0,0.72))
C.dy(d,C.dz(r,0.006,0,D.fs,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.j2
$.j2=u+1
u=new C.eM("design_"+(""+1000*v+"_"+u),D.f4,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a6,A.bo,A.aD,4279310375,A.bi,null,D.eN,16777215,t,2,0,!1,"",0,D.cn,0,"","","","","",!1,0)
v=$.Kn
u.db="__design__:"+(v.length===0?"layer":v)
A.d.cj(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fHd.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(3423541034,0.55,0,D.bg,w,0,1,0,0))
C.dy(d,C.dz(4009754623,0.56,0.45,D.jQ,w,0,0.56,0.22,0.18))
C.dy(d,C.dz(3439329279,0.44,0.45,D.jQ,w,0,0.44,0.28,0.24))
C.dy(d,C.dz(v,0.07,0,D.bg,w,0,0.22,0.34,0.62))
C.dy(d,C.dz(v,1,0,D.bg,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fyI.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fyJ.prototype={
$0(){return A.d.gI($.bDZ())},
$S:z+52}
C.fml.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fmk.prototype={
$1(d){return C.hWw(d,this.a,this.b)},
$S:z+53}
C.fHD.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vO(1.0375,1.01875,1)
return new B.fS(v,u,new C.aSy(B.hMj(A.v2,C.hWz(w.c,w.d,v,u),t)))},
$S:409}
C.dUA.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:8}
C.dUz.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c_(w,new B.o(w,w,w,w,w,new B.bT(A.K8,1.2,A.x,w,0,u.d,w,w),A.n),A.bf),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jA(new B.an(A.W,w,A.b1,A.r,B.a([t,new B.ex(B.b3(w,w,w,new C.beq(u.a,r,q,r),A.aw),w),B.av(new B.jM(r,new C.dUy(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.r,w)},
$S:358}
C.dUy.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ew.aA(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gI(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hZ(B.fP(i,A.A,r,r,A.ci,A.bV,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fW(A.A,0,6.283185307179586,A.x,t,r,new B.mp(e*0.8)),A.a5),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a7(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.br1(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cR(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a7(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.de(B.dW(B.x(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a8(A.a3,A.a8,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a7(r,m*0.022,r,r),B.d(w.a.c.gaKE(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a6,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.N,0,A.p),new B.v(0,(1-o)*m*0.03)),o))
return B.de(B.ef(A.A,new B.D(new B.Q(l,0,l,0),B.x(j,A.m,r,A.e,A.N,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:100}
C.eZ8.prototype={
$1(d){var w=this.b
return new B.a8(A.az,A.aC,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).av(0,d)},
$S:66}
C.c8U.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.n(14),t=g?A.bM:A.bE
t=B.I(t,A.q,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hK.j(0.4),A.J,14)],x.V):v
w=B.df(v,B.bw(B.n(12),d,A.aq),v,v,A.bc,new B.o(v,v,t,u,w,v,A.n),A.eH,v,72,v,v,v,v,v)
return B.aC(v,new B.a7(112,v,B.x(B.a([w,A.fF,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bM:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a7)},
$S:1688}
C.c8V.prototype={
$0(){var w=this.a
return w.d.$1(w.c.FA(""))},
$S:0}
C.c8W.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e_(new C.Nn(v.FA(u),!0,!1,null),!0,null),d.b,new C.c8X(w,this.c,d),v.a===u)},
$S:z+54}
C.c8X.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hqB(u.b,t.c.FA(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fO1.prototype={
$1(d){return new C.Ze(this.a,null)},
$S:z+55}
C.d8n.prototype={
$0(){var w=this.a
w.d=w.gvC().bbE("data:"+this.b+";base64,"+A.cR.gcw().aL(this.c));++w.r},
$S:0}
C.d8s.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.d8t.prototype={
$0(){var w=this.a
return w.m(new C.d8r(w))},
$S:0}
C.d8r.prototype={
$0(){return this.a.r++},
$S:0}
C.d8u.prototype={
$1(d){var w=this.a
return w.m(new C.d8q(w,d))},
$S:2}
C.d8q.prototype={
$0(){var w=this.a
return w.d=w.gvC().aDy(this.b)},
$S:0}
C.d8v.prototype={
$0(){var w=this.a
return w.m(new C.d8p(w))},
$S:0}
C.d8p.prototype={
$0(){var w=this.a
return w.d=w.gvC().bbE("")},
$S:0}
C.d8w.prototype={
$1(d){var w=this.a
return w.m(new C.d8o(w,d))},
$S:2}
C.d8o.prototype={
$0(){var w=this.a
return w.d=w.gvC().bbL(this.b)},
$S:0}
C.d8x.prototype={
$0(){var w=this.a
w=w.gvC().bbL(w.gax9().a.a)
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.fO0.prototype={
$1(d){var w={}
w.a=this.a
return new B.e2(new C.fO_(w),null)},
$S:21}
C.fO_.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bm(!0,new B.cT(new B.aY(0,1/0,0,B.aI(d,A.bW,x.w).w.a.b*0.85),B.cd(B.x(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b_,w,w,B.n(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.fzZ,A.au,D.fAe,A.aB,new C.aZU(v.a,new C.fNZ(v,e,d),!0,w)],x.p),A.F,w,A.e,A.N,0,A.p),A.r,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.af,!0,!1),A.f,w,w,D.b1p,w,w,w,w,A.My,w,w,w)},
$S:161}
C.fNZ.prototype={
$1(d){this.b.$1(new C.fNY(this.a,d))
B.a6(this.c,!1).O(d)},
$S:z+56}
C.fNY.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fQn.prototype={
$1(d){return D.h3w},
$S:z+57}
C.dfa.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dfb.prototype={
$0(){var w=this.a.c
w.toString
B.a6(w,!1).O(this.b)
return null},
$S:0}
C.dfc.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a6(w,!1).O(v)}},
$S:0}
C.fEj.prototype={
$1(d){var w=this.b
return new B.a8(A.az,A.aC,A.x,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).av(0,d)},
$S:66}
C.d84.prototype={
$3(d,e,f){var w,v=this,u=new B.aO($.W().r,A.ao,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.F(new B.b5(t+r*1.2,o))
u.F(new B.cW(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.F(new B.cW(w,q+p,w,q+p*1.2))
u.F(new B.D4(B.bU(new B.v(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aR(u,v.d)
s.aR(u,v.e)
p=B.N()
p.r=B.aq(v.a.d,A.c,0.6).gp(0)
s.af(new B.v(w,o),2.2,p)},
$S:668}
C.fEn.prototype={
$2(d,e){return A.k.aM(d.c,e.c)},
$S:z+58}
C.fwM.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fwN.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.xS,B.x(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b_,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fiC,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aR,B.dn(D.GF,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fwK(d),B.bn(A.c0,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.R,B.eA(A.o8,D.Ue,new C.fwL(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cm,w,w,Q.x_,w,w,w,w))],x.p),A.ai,w,A.e,A.N,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fwK.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fwL.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.cek.prototype={
$1(d){return d.hH()},
$S:z+59}
C.cel.prototype={
$1(d){return d.ah()},
$S:z+60}
C.cej.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a2(b5,x.N,x.z),b3=B.aJ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.N(b3)
if(b4==null)b4=A.a6.gdN(0)
b3=B.aJ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.N(b3)
if(w==null)w=0
b3=B.aJ(b2.h(0,"align"))
v=b3==null?b1:A.k.N(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hSm(b2.h(0,"type"))
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
n=A.ayV[A.o.D(b4,0,8)]
m=D.cSY[A.o.D(w,0,1)]
l=C.hVZ(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.avA[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hYO(b2.h(0,"shape"))
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
a0=J.A(b2.h(0,"bulletList"),!0)
a1=b2.h(0,"fileName")
a1=J.k(a1==null?"":a1)
a2=B.aJ(b2.h(0,"pdfPage"))
a2=a2==null?b1:A.k.N(a2)
if(a2==null)a2=0
a3=C.hlT(b2.h(0,"textTransition"))
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
b0=J.A(b2.h(0,"rich"),!0)
b2=B.aJ(b2.h(0,"textBg"))
b2=b2==null?b1:A.k.N(b2)
return C.er(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.ce9.prototype={
$1(d){return d.hH()},
$S:z+62}
C.cea.prototype={
$1(d){return d.ah()},
$S:z+63}
C.ce6.prototype={
$1(d){return B.u(d)},
$S:17}
C.ce7.prototype={
$1(d){return B.u(d)},
$S:17}
C.ce8.prototype={
$1(d){return C.hcz(B.a2(d,x.N,x.z))},
$S:z+64}
C.ceB.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.ceC.prototype={
$0(){return A.d.gI(D.a2O)},
$S:z+66}
C.cew.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cc(d.f))w.n(0,u,d.hH())},
$S:z+7}
C.cev.prototype={
$2(d,e){return e.f.aM(0,d.f)},
$S:z+21}
C.cer.prototype={
$1(d){return new B.M(d,new C.ces(),B.T(d).k("M<1,S>")).ff(0,new C.cet())},
$S:z+69}
C.ces.prototype={
$1(d){return d.f},
$S:z+70}
C.cet.prototype={
$2(d,e){return d.cc(e)?d:e},
$S:669}
C.ceu.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hI8(d)},
$S:z+71}
C.cex.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.cey.prototype={
$2(d,e){return e.f.aM(0,d.f)},
$S:z+21}
C.cez.prototype={
$1(d){return d.ah()},
$S:z+14}
C.fEW.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
p=q.a
if(s.ai(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.K)(o),++l){k=o[l]
j=k.a
if(t.t(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.L(0,j)
break}}}},
$S:z+73}
C.fES.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fET.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fEU.prototype={
$2(d,e){var w
if(d.b===D.cQ){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fEV.prototype={
$2(d,e){return d.b===D.f4&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cef.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.i6w(b2,b3),b5=B.a3(b4).k("bc<2>")
b5=B.cD(new B.bc(b4,b5),new C.cee(),b5.k("J.E"),x.N)
w=B.dd(b5,B.a3(b5).k("J.E"))
b1=b1.e
v=A.pP.aA(0,A.k.D(b1,0,1))
u=new C.ceg()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.ceh(a9,b7.d)
r=new C.cei(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.K)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jE.aA(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kH(A.k.D(1-k,0,1),B.dW(B.ef(A.A,r.$1(l),1-k*0.06,a8,a8),new B.v(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.K)(b2),++m){i=b2[m]
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
if(a2===D.f4){a4=i.hH()
a4.ay=B.aq(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.aq(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lw&&l.at==i.at?r.$1(i):new B.an(A.W,a8,A.b1,A.r,B.a([new B.kH(A.k.D(o,0,1),r.$1(l),a8),new B.kH(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iJ(B.wj(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cn)a7=D.mK
p.push(s.$5(i.c,i.d,i.e,i.f,C.ho8(a7,a6,r.$1(i))))}}return B.c_(new B.an(A.W,a8,A.aa,A.r,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a8(A.a3,A.a8,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bf)},
$S:401}
C.cee.prototype={
$1(d){return d.a},
$S:z+22}
C.ceg.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.ceh.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1692}
C.cei.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a7F(v,C.b10(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dGP.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ef(new B.dc(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:47}
C.ceo.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.cep.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fHK.prototype={
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
C.fGR.prototype={
$1(d){return new C.adk(this.a,this.b,null)},
$S:z+78}
C.erV.prototype={
$0(){return this.a.PL(this.b,C.i9S(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.erW.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.PL(this.b,C.i9U(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.erX.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.PL(this.b,C.i9T(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.erY.prototype={
$0(){Y.hnT()
B.a6(this.a,!1).O(null)},
$S:0}
C.ced.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1693}
C.cec.prototype={
$2(d,e){var w,v=this,u=null,t=B.dO(d,A.nG),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.D(p*Math.max(B.lS(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bV:A.dv
return B.fP(t,A.A,o,new C.ceb(),A.ci,w,!0,u,!1,new B.cx("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1694}
C.ceb.prototype={
$3(d,e,f){return D.ac8},
$S:205}
C.fER.prototype={
$2(d,e){var w,v,u,t=null,s=B.n(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a8(A.az,A.aC,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.db(r,0,B.dI(6,"count",x.S),B.T(r).c)
u=r.$ti.k("M<ak.E,cL>")
r=B.C(new B.M(r,new C.fEQ(e.b,e.d),u),u.k("ak.E"))
return B.bw(s,B.c_(new B.an(A.W,t,A.aa,A.r,r,t),new B.o(v,t,t,t,t,w,A.n),A.bf),A.aq)},
$S:1695}
C.fEQ.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b10(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.foU.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cM(r.b,new C.foS(d))
w=B.aI(d,A.bW,x.w).w
v=B.n(22)
u=B.I(A.bE,A.q,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fQ,28)],x.V)
s=x.p
return new B.d_(e,!1,B.av(B.aF(!1,A.a1,!0,q,B.p(q,B.x(B.a([B.B(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.kg,q,q,q),A.au,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bK(!1,A.zU,q,q,!0,q,q,new C.foT(p,d),q,B.fy(q,q,A.bj,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Ft,q,new B.b7(B.n(12),A.Y),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aB,r.d],s),A.m,q,A.e,A.N,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.ax,q,u,v,t,q,A.n),q,q,q,A.fO,A.FC,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,q,q),q)},
$C:"$3",
$R:3,
$S:237}
C.foS.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a6(w,!0).py())B.a6(w,!0).eF()},
$S:0}
C.foT.prototype={
$0(){var w=this.a.a
if(w!=null)w.a7(0)
B.a6(this.b,!0).eF()},
$S:0}
C.f6G.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.de(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.dW(u.b,new B.v((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.dW(u.b,new B.v(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.dW(u.b,new B.v(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.dW(u.b,new B.v(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.ef(A.A,B.de(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.ef(A.A,B.de(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fE(r*3.14159)
return B.fv(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.k9(r*3.14159)
return B.fv(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fE(r*1.2)
s.k9(r*0.5)
return B.fv(A.A,B.de(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fE(-r*1.4)
return B.fv(A.a8,B.de(u.b,r),t,s,!0)
case 12:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.de(B.ef(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.jA(u.b,A.r,new C.aJg(r,t))],x.p),t)
case 15:return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.jA(u.b,A.r,new C.aJg(1-r,t))],x.p),t)
case 16:v=D.b4P.aA(0,r)
return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.ef(A.A,B.de(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.de(B.en(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dp()
s.mN(r*6.28)
s.jP(r,r,r,1)
return B.fv(A.A,u.b,t,s,!0)
case 20:return B.eJ(A.A,(r-0.5)*0.35,new B.an(A.W,t,A.b1,A.r,B.a([u.c,B.de(u.b,r)],x.p),t),t)}},
$S:62}
C.dSN.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cs(0)}},
$S:11}
C.dSM.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cs(0)}},
$S:11}
C.dSL.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.ho8(v,w,e)},
$S:62}
C.ce5.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b0(v.e)
t=v.f
t.toString
t=new B.a8(A.a3,A.a8,A.x,B.a([u,B.b0(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b0(v.e):r
v=v.z
s=B.T(v).k("M<1,cL>")
q=B.C(new B.M(v,new C.ce4(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c_(new B.an(A.W,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bf)},
$S:401}
C.ce4.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cn?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a7F(m,new C.UW(d,C.b10(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d5j.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d5i(w))},
$S:11}
C.d5i.prototype={
$0(){return this.a.d++},
$S:0}
C.efa.prototype={
$2(d,e){var w,v=null,u=A.o.an(this.b.e.a,1000),t=A.o.E(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aNZ.t(0,A.d.gI(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.i6f(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.e9(0,w*7,0,1)
s.fE(Math.sin(t)*0.32)
s.k9(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jP(w,w,w,1)
return B.fv(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dW(B.ef(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.v(s*14,w*10))
default:s=Math.sin(t)
return B.de(B.ef(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:62}
C.eWM.prototype={
$1(d){var w
$.W()
w=B.N()
w.b=A.ae
w.c=d
w.e=A.fG
return w},
$S:1696}
C.fCr.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.ar(o,o):new B.ar(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gdB()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b3(r,r,r,new C.bqV(u,t,r),A.aw))
w.push(B.nw(s.d,A.aq,new C.beX(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.bpV(u,q,t,r),A.aw))
return B.av(new B.a7(v.a,v.b,new B.an(A.W,r,A.b1,A.r,w,r),r),r,r,r)},
$S:242}
C.frM.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:315}
C.ey8.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.CR(t.a.a.c),$async$$0)
case 3:s=e
r=J.a4(s)
if(r.gam(s)){u=null
w=1
break}u=r.dM(s,new C.ey6(),new C.ey7(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1697}
C.ey6.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:182}
C.ey7.prototype={
$0(){return J.fr(this.a)},
$S:1699}
C.euw.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eux.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.euy.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.ew6.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.evV.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.evW.prototype={
$1(d){return d.hH()},
$S:z+81}
C.etU.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.exe.prototype={
$0(){this.a.ty()},
$S:0}
C.ey4.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.of()
w.K4()},
$S:0}
C.ew4.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.of()
w.K4()},
$S:0}
C.exS.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.exT.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.exU.prototype={
$1(d){return d.a},
$S:z+22}
C.exV.prototype={
$0(){var w=this.a.r
return new B.as(new B.bb(w,A.b5,A.aO),$.aw())},
$S:255}
C.exW.prototype={
$0(){return B.jS(!0,null,!0,!0,null,null,!1)},
$S:673}
C.eti.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.ey5.prototype={
$0(){},
$S:0}
C.evd.prototype={
$0(){var w=this.a
w.e=this.b.hH()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xt()
w.K4()},
$S:0}
C.etg.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.xt()},
$S:0}
C.eth.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.xt()},
$S:0}
C.evA.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.evB.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xt()
w.K4()
w.z="Home"},
$S:0}
C.evC.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.evc.prototype={
$1(d){var w=null
return B.em(B.a([B.bK(!1,A.Ud,w,w,!0,w,w,new C.evb(d),w,w)],x.p),w,w,w,D.fBL,w,w,w,w,D.fj3,w)},
$S:20}
C.evb.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.ev9.prototype={
$1(d){var w=null
return B.em(B.a([B.bK(!1,A.Ud,w,w,!0,w,w,new C.ev8(d),w,w)],x.p),w,w,w,D.fn0,w,w,w,w,D.fkM,w)},
$S:20}
C.ev8.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eva.prototype={
$0(){},
$S:0}
C.eus.prototype={
$1(d){return this.a.b_V(C.bC_(d))},
$S:z+7}
C.eut.prototype={
$1(d){return this.a.aeS(C.bC_(d))},
$S:z+7}
C.evj.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b_,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fBP,A.au,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.by,new C.Pt(A.vQ,D.awX,"HATI YA KUHOWA","Hati ya mahari",new C.eve(d),w),A.R,new C.Pt(A.ha,D.d4v,"HATI YA KUHOWESHA","Hati ya kupokea",new C.evf(d),w),A.R,new C.Pt(A.i5,D.cR9,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.evg(d),w),A.R,new C.Pt(A.hS,D.cPn,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.evh(d),w)],v)
if(this.a.gabl())A.d.v(u,B.a([A.R,new C.Pt(A.j3,D.cAt,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.evi(d),w)],v))
return B.bm(!0,B.cd(B.x(u,A.ai,w,A.e,A.N,0,A.p),A.r,w,A.y,w,E.xS,w,w,A.ah),!0,!1,A.af,!0,!0)},
$S:26}
C.eve.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.evf.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.evg.prototype={
$0(){B.a6(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.evh.prototype={
$0(){B.a6(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.evi.prototype={
$0(){B.a6(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.evk.prototype={
$0(){var w=this.a
w.e=this.b.hH()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xt()},
$S:0}
C.etk.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.etl.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.ml(r,v.f+1,q);++v.f
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
C.evv.prototype={
$1(d){return d.b===D.lw},
$S:z+4}
C.evw.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gI(v).go
w.b=A.d.gI(v).id
return new B.e2(new C.evt(w,this.a,v),null)},
$S:21}
C.evt.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.evu(p,o,a3,n),l=B.P(a2).ax.a===A.I,k=l?A.c:A.M,j=l?A.aS:A.ak,i=l?A.bn:A.bL,h=l?A.M:A.c,g=B.n(28),f=B.I(l?A.bE:A.aL,A.q,1),e=x.p,d=B.B(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bC,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aH(q,q,q,q,B.X(A.cD,j,q,q,q,q),q,q,q,new C.evp(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Cg[w]
v.a=null
t=v.a=u.a
a1.push(new C.bhr(t,u.b,p.a===t,i,k,new C.evq(v,m),q))}a1=B.bV(A.bA,a1,A.br,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Cb[w]
s.a=null
t=s.a=r.a
u.push(new C.bhq(t,r.b,p.b===t,k,j,new C.evr(s,m),q))}return B.bm(!0,B.p(q,B.cd(B.x(B.a([d,A.aR,a0,A.R,a1,A.by,v,A.R,B.bV(A.bA,u,A.br,12,12),A.by,new B.a7(1/0,48,B.eA(D.bTk,D.fEf,new C.evs(o,n),B.dg(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b7(B.n(16),A.Y),D.aZV,q,q,q,q)),q)],e),A.F,q,A.e,A.N,0,A.p),A.r,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.tO,D.buH,q,q,q),!0,!1,A.af,!0,!0)},
$S:88}
C.evu.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.evn(w.a,d,e))
w.b.d3(new C.evo(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1702}
C.evn.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.evo.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.evp.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.evq.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.evr.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.evs.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.GE(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d3(new C.evm(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.evm.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.evy.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.evz.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.br(v,new C.evx(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.ml(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xt()},
$S:0}
C.evx.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.evQ.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.evR.prototype={
$1(d){return d.w},
$S:z+82}
C.evS.prototype={
$2(d,e){return d>e?d:e},
$S:86}
C.evT.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.c:A.M,s=u?A.aS:A.ak,r=u?A.bn:A.aQ,q=u?A.M:A.c,p=B.n(28),o=B.I(u?A.bE:A.aL,A.q,1),n=B.aI(d,A.bW,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.p(v,B.x(B.a([B.B(B.a([B.p(v,D.bN1,A.f,v,v,D.b0h,v,38,v,v,v,v,v,38),A.be,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aH(v,v,v,v,B.X(A.cD,s,v,v,v,v),v,v,v,new C.evN(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aB,new B.dq(1,A.co,B.hN(v,new C.evO(m,k,w.c,s,w.d,t,r),k.length,A.fC,v,A.ah,new C.evP(),!0),v)],l),A.F,v,A.e,A.N,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.tO,A.Zc,v,v,v),!0,!1,A.af,!0,!0)},
$S:26}
C.evN.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.evP.prototype={
$2(d,e){return A.ac},
$S:36}
C.evO.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cx
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.bQa,q,q,q,new C.evL(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bwX,n,q),B.aM(q,A.U,!1,q,!0,A.r,q,B.aN(),v,q,q,q,q,q,2,B.bs(q,new B.b4(4,B.n(16),A.Y),q,A.eR,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b4(4,B.n(16),D.aZA),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.aj,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.evM(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a9,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a4,q,A.an,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:674}
C.evL.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.ic0(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geE()?p.a:q.a.length
n=p.geE()?p.b:q.a.length
m=A.a.oK(q.a,o,n,s)
r.bP(0,new B.bb(m,B.hg(A.bw,o+s.length),A.aO))
l.aiW(k,m)
l.pj()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.evM.prototype={
$1(d){var w=this.a
w.aiW(this.b.a,d)
w.pj()},
$S:2}
C.evU.prototype={
$0(){},
$S:0}
C.evl.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.etB.prototype={
$0(){},
$S:0}
C.etC.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hps(this.b,w,!0)
w=this.a
w.r=null
w.xt()},
$S:0}
C.etD.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.etE.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.br(v,new C.etA(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.ml(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xt()},
$S:0}
C.etA.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.ew_.prototype={
$1(d){return B.oT(new C.evZ(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:143}
C.evZ.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.aiN,B.x(B.a([D.fzn,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.E(B.im(!0,w,e,A.y,D.eWS,new C.evY(this.a,this.b),20,A.tQ,w,A.ah,!1),1)],v),A.ai,w,A.e,A.j,0,A.p)},
$S:397}
C.evY.prototype={
$2(d,e){var w=null,v=D.H7[e],u=C.hI3(v),t=B.n(16),s=B.n(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.q,1),o=q.j(0.2),n=B.n(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fE,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.eQw,A.f,w,w,new B.o(A.dM.j(0.85),w,w,B.n(8),w,w,A.n),w,w,w,w,A.nj,w,w,w)],m))
return B.aF(!1,A.a1,!0,w,B.aL(!1,t,!0,B.p(w,B.x(B.a([B.B(n,A.m,w,A.e,A.j,0,w,w),A.b7,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a8(A.a3,A.a8,A.x,r,w,w),A.n),w,w,w,w,A.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.evX(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:75}
C.evX.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cen(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a6(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ew0.prototype={
$0(){var w=this.a
w.e=this.b.hH()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xt()},
$S:0}
C.esf.prototype={
$0(){var w,v=this.a,u=v.gql(),t=C.rw(4294967295,null,0,0,null,C.cB(),D.mJ,"","","",D.de),s=this.b
C.ceA(t,s,u)
w=v.gdu()
if(w!=null&&s!==D.CS){t.e=w.e
t.f=w.f}A.d.cj(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.etz.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ah()
q.n(0,"id",C.cB())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aV(w),u=x.f;v.C();){t=v.gR(v)
if(u.b(t)){s=Date.now()
r=$.j2
$.j2=r+1
J.aG(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.cj(v.e.r,v.f+1,C.hcz(q));++v.f},
$S:0}
C.etx.prototype={
$0(){var w=this.a
A.d.cA(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.ew8.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cA(v.e.r,u),s=this.c
A.d.cj(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.ett.prototype={
$0(){var w,v=this.a,u=this.b
A.d.br(v.d,new C.ets(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.ets.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ew7.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.S(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.etj.prototype={
$0(){var w=this.a.r
return new B.as(new B.bb(w,A.b5,A.aO),$.aw())},
$S:255}
C.etV.prototype={
$0(){return B.jS(!0,null,!0,!0,null,null,!1)},
$S:673}
C.exQ.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.exR.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.at8(w).fO()
v=u.Wq(w)
v.stg(B.hg(A.bw,v.a.a.length))},
$S:8}
C.exf.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Xp(v)
if(u!=null&&u.b===D.cQ)w.Wq(u).saX(0,u.r)}else w.w=null},
$S:0}
C.esg.prototype={
$0(){var w=C.cB(),v=this.a,u=C.er(A.bi,!1,v.gql().e.l(),A.aD,"",4280640491,24,A.bo,A.a6,"",0.22,w,null,"","",0,!1,"",0,D.bg,4280172719,2,"Tap to edit text",0,0,"",D.cn,D.cQ,0.7,0.15,0.2)
A.d.L(v.gdu().z,u)
v.r=u.a},
$S:0}
C.esd.prototype={
$0(){var w=C.cB(),v=this.a,u=C.er(A.bi,!1,4279310375,A.aD,"",v.gql().c.j(0.25).l(),24,A.bo,A.a6,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gql().c.l(),2,"",0,0,"",D.cn,D.f4,0.25,0.3,0.3)
A.d.L(v.gdu().z,u)
v.r=u.a},
$S:0}
C.es3.prototype={
$0(){var w=C.er(A.bi,!1,4279310375,A.aD,"",4280640491,24,A.bo,A.a6,"",0.55,C.cB(),this.b,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cn,D.lw,0.6,0.2,0.18),v=this.a
A.d.L(v.gdu().z,w)
v.r=w.a},
$S:0}
C.es0.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.c_f],x.p)
for(w=J.aV(this.a);w.C();){v=w.gR(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gajy().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dN(!1,r,r,r,!0,r,r,r,!0,r,D.bKJ,r,r,r,r,new C.es_(d,v),!1,r,r,r,r,r,new B.y(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.y(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bm(!0,B.cw(q,r,r,r,r,A.ah,!0),!0,!1,A.af,!0,!0)},
$S:26}
C.es_.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.es1.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cB(),u=this.b,t=A.S.ao(u.ah(),null),s=C.er(A.bi,!1,4279310375,A.aD,u.b,4280640491,24,A.bo,A.a6,"",0.86,v,null,"","",0,!1,"",0,D.bg,4280172719,2,t,0,0,"",D.cn,D.a5p,w,0.5-w/2,0.07)
t=this.a
A.d.L(t.gdu().z,s)
t.r=s.a},
$S:0}
C.etv.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.etw.prototype={
$0(){var w,v=this.a,u=this.b
A.d.br(v.gdu().z,new C.etu(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.U$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.etu.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.esI.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cQ)s.Q=t.c.l()
else if(w===D.f4){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.esJ(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.K)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.esJ.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.esN.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.esO(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.K)(s),++u)v.$1(s[u])}else{t=s.gdu()
if(t!=null)v.$1(t)}},
$S:0}
C.esO.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.esL.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cQ){s.Q=t.c
return}w=new C.esM(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.K)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.esM.prototype={
$1(d){var w,v,u
for(w=A.d.gae(d.z),v=new B.f2(w,new C.esK()),u=this.a;v.C();)w.gR(0).Q=u},
$S:z+1}
C.esK.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.esH.prototype={
$0(){return C.ceA(this.b,this.c,this.a.gql())},
$S:0}
C.evK.prototype={
$0(){return A.d.cj(this.a.d,0,this.b)},
$S:0}
C.exZ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ey_.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.ey0.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ey1.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.cj(s,0,v.b)
else{w=A.d.bg(s,new C.exY(v))
if(w>=0)t.d[w]=v.b}if(v.a.gS8()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hH()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.xt()
t.K4()}},
$S:0}
C.exY.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.exv.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.abp(),s=w.b,r=u.abq(A.fd,A.kw,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.n(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.q,1),n=x.p
p=B.a([t,A.O,r,A.by,B.p(v,B.B(B.a([B.E(u.aUT(w.c,A.ak),1),new B.D(A.fr,B.p(v,D.bKP,A.f,v,v,new B.o(A.fd.j(0.18),v,v,v,v,v,A.a5),v,34,v,v,v,v,v,34),v),B.E(u.aUT(s,A.fd),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a8(A.az,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.bB,v,v,v),A.by,u.aUW(A.fd,d,D.bGU,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.R,u.bXM(A.aN,d,A.u2,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aUU(d,"Not now"))
return new C.JQ(B.x(p,A.ai,v,A.e,A.N,0,A.p),v)},
$S:z+9}
C.exu.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.JQ(B.x(B.a([v.abp(),A.O,v.abq(A.aN,D.bGz,"Pick which saved document should receive the details.","Choose "+this.b),A.aR,new B.cT(new B.aY(0,1/0,0,B.aI(d,A.bW,x.w).w.a.b*0.42),B.hN(w,new C.exs(v,u,d),u.length,w,w,A.ah,new C.ext(),!0),w),A.aB,v.aUU(d,"Cancel")],x.p),A.ai,w,A.e,A.N,0,A.p),w)},
$S:z+9}
C.ext.prototype={
$2(d,e){return A.R},
$S:36}
C.exs.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.n(16),t=A.c.j(0.05),s=B.n(16),r=B.I(A.c.j(0.08),A.q,1),q=x.p
return B.aF(!1,A.a1,!0,w,B.aL(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.anE,A.f,w,w,new B.o(w,w,w,B.n(12),w,D.bXd,A.n),w,42,w,w,w,w,w,42),A.be,B.E(B.x(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.nD,w,w,w),A.cV,B.d("Updated "+this.a.PM(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a6,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.X(A.ey,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.exr(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:75}
C.exr.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.exo.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.abp()
t=t.abq(A.aF,A.ub,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.JQ(B.x(B.a([s,A.O,t,A.by,B.B(B.a([B.E(B.dV(A.a8L,new C.exm(d),B.dg(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cm,u,new B.b7(B.n(14),A.Y),new B.az(w,1,A.q,-1),u,u,u,u)),1),A.at,B.E(B.bG(D.fll,new C.exn(d),B.bn(A.fd,u,u,u,A.c,u,A.cm,u,new B.b7(B.n(14),A.Y),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.ai,u,A.e,A.N,0,A.p),u)},
$S:z+9}
C.exm.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.exn.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.exq.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.abp(),s=w.b,r=u.abq(A.aV,A.eh,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.E(u.aus("Names",""+w.c),1),A.ab,B.E(u.aus("Fields",""+w.d),1),A.ab,B.E(u.aus("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bn(A.bj,v,v,v,A.c,v,A.xH,v,new B.b7(B.n(14),A.Y),v,v,v)
return new C.JQ(B.x(B.a([t,A.O,r,A.aR,p,A.by,B.bG(B.d("Open "+s,v,v,v,v,v,v,A.nB,v,v,v),new C.exp(d),o),A.R,u.aUV(d,"Stay here",!1)],q),A.ai,v,A.e,A.N,0,A.p),v)},
$S:z+9}
C.exp.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.euo.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eun.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.exg.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.exP.prototype={
$1(d){var w=this.a,v=this.b
return new C.a_q(A.d.dM(w.d,new C.exN(v),new C.exO(v)).hH(),w.f,null)},
$S:z+84}
C.exN.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.exO.prototype={
$0(){return this.a},
$S:z+85}
C.es8.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bB,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.hu,w,w,w),w),B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bMB,w,w,w,w,new C.es6(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fjn,w,w,w)],x.p)
if(v>1)t.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bNM,w,w,w,w,new C.es7(d),!1,w,w,w,w,w,D.fFs,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dp,w,w,w),w,w,w))
return B.bm(!0,B.x(t,A.m,w,A.e,A.N,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.es6.prototype={
$0(){B.a6(this.a,!1).O("scroll")
return null},
$S:0}
C.es7.prototype={
$0(){B.a6(this.a,!1).O("split")
return null},
$S:0}
C.es9.prototype={
$0(){var w=this.b,v=w.c,u=C.er(A.bi,!1,4279310375,A.aD,v,4280640491,24,A.bo,A.a6,"",0.84,C.cB(),w.b,"","",0,!1,"",0,D.bg,4280172719,2,v,0,0,"",D.cn,D.S3,0.88,0.06,0.08)
v=this.a
A.d.L(v.gdu().z,u)
v.r=u.a},
$S:0}
C.esa.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.j2
$.j2=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.j2
$.j2=k+1
m.push(new C.eM(""+1000*l+"_"+k,D.S3,0.04,0.06,0.92,0.88,v,24,A.a6,A.bo,A.aD,4279310375,A.bi,u,D.bg,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cn,0,"","","","","",!1,0))
A.d.cj(j.e.r,i+q-1,new C.lH(""+1000*p+"_"+o,r+n,"",D.qk,4294967295,null,D.de,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.ese.prototype={
$0(){var w,v=C.cB(),u=this.a,t=u.e
t=(t==null?null:C.kx(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.er(A.bi,!1,4279310375,A.aD,t,4280640491,24,A.bo,A.a6,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cn,D.l5,0.35,0.55,0.62)
A.d.L(u.gdu().z,w)
u.r=w.a},
$S:0}
C.es5.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b2J(o)
w=C.cB()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.er(A.bi,!1,4279310375,A.aD,"marriage_sign_placed_"+A.a.eg(v.db,"marriage_sign_",""),4280640491,24,A.bo,A.a6,"",r,w,o.a,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cn,D.l5,s,u,t)
A.d.L(p.gdu().z,q)
A.d.br(p.gdu().z,new C.es4(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.i5Z(p)}},
$S:0}
C.es4.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ew5.prototype={
$0(){var w=this.a,v=this.b
w.b2J(v)
this.c.at=v.a
w.r=null},
$S:0}
C.exX.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.eur.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.br(r.z,new C.euq())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.euq.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.esR.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.esS.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.ty()},
$S:8}
C.es2.prototype={
$0(){var w=C.er(A.bi,!1,4279310375,A.aD,"HD Photo",4280640491,24,A.bo,A.a6,"",0.8,C.cB(),this.b,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cn,D.lw,0.8,0.1,0.1),v=this.a
A.d.L(v.gdu().z,w)
v.r=w.a},
$S:0}
C.etT.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.esb.prototype={
$0(){var w=this.a,v=this.b
A.d.L(w.gdu().z,v)
w.r=v.a},
$S:0}
C.esk.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.esl.prototype={
$0(){var w=this.b.hH(),v=C.cB(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.er(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.L(t.gdu().z,f)
t.r=f.a},
$S:0}
C.esm.prototype={
$0(){var w=this.a.gdu().z,v=this.b,u=A.d.bg(w,new C.esj(v))
if(u>=0&&u<w.length-1){A.d.cA(w,u)
A.d.cj(w,u+1,v)}},
$S:0}
C.esj.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.esx.prototype={
$0(){var w=this.a.gdu().z,v=this.b,u=A.d.bg(w,new C.esi(v))
if(u>0){A.d.cA(w,u)
A.d.cj(w,u-1,v)}},
$S:0}
C.esi.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.esA.prototype={
$0(){return this.a.as=A.bi},
$S:0}
C.esB.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.esC.prototype={
$0(){return this.a.as=A.dN},
$S:0}
C.esD.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.esE.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.esF.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.esG.prototype={
$1(d){return d.length!==0},
$S:3}
C.esn.prototype={
$0(){var w=this.a,v=w.gdu().z,u=C.cB()
A.d.L(v,C.CW(w.gql().c.j(0.18).l(),0.1,u,D.bg,0,2,1,0,0))
u=w.gdu().z
v=C.cB()
A.d.L(u,C.iY(A.bi,!1,w.gql().d.l(),A.aD,18,A.bo,A.H,0.07,v,"Document Header",0,D.de,0.9,0.05,0.02))},
$S:0}
C.eso.prototype={
$0(){var w,v=this.a,u=v.gdu().z,t=C.cB()
A.d.L(u,C.CW(v.gql().c.j(0.12).l(),0.1,t,D.bg,0,2,1,0,0.9))
t=v.gdu().z
u=C.cB()
w=C.bCI()
A.d.L(t,C.iY(A.L,!1,v.gql().e.l(),A.aD,12,A.bo,A.a6,0.06,u,"Footer \xb7 "+w,0,D.de,0.9,0.05,0.92))},
$S:0}
C.esp.prototype={
$0(){A.d.L(this.a.gdu().z,C.CW(1727914055,0.12,C.cB(),D.bg,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.esq.prototype={
$0(){var w=4279310375
A.d.L(this.a.gdu().z,C.CW(w,0.08,C.cB(),D.bg,w,2,0.5,0.2,0.4))},
$S:0}
C.esr.prototype={
$0(){var w=this.a,v=w.gdu().z,u=C.cB()
A.d.L(v,C.CW(w.gql().c.j(0.35).l(),0.12,u,D.CT,4280640491,2,0.2,0.15,0.55))
A.d.L(w.gdu().z,C.iY(A.bi,!1,4279310375,A.aD,18,A.bo,A.a6,0.15,C.cB(),"Important note",0,D.ql,0.5,0.38,0.52))},
$S:0}
C.ess.prototype={
$0(){var w=this.a
A.d.L(w.gdu().z,C.CW(4294507260,0.78,C.cB(),D.bg,4291548641,1.5,0.84,0.08,0.1))
A.d.L(w.gdu().z,C.iY(A.bi,!1,4279179050,A.aD,16,A.bo,A.a6,0.7,C.cB(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bCI()+"\n\nSubject:\n\nBody text\u2026",0,D.de,0.76,0.12,0.14))},
$S:0}
C.est.prototype={
$0(){var w=this.a
A.d.L(w.gdu().z,C.CW(4294897802,0.28,C.cB(),D.bg,4294626325,2,0.3,0.62,0.12))
A.d.L(w.gdu().z,C.iY(A.bi,!1,4285611794,A.aD,15,A.bo,A.a6,0.24,C.cB(),"Sticky note",0,D.aGw,0.26,0.64,0.14))},
$S:0}
C.esu.prototype={
$0(){var w=4280640491,v=this.a
A.d.L(v.gdu().z,C.CW(4293060848,0.04,C.cB(),D.bg,4291548641,2,0.8,0.1,0.48))
A.d.L(v.gdu().z,C.CW(w,0.04,C.cB(),D.bg,w,2,0.55,0.1,0.48))},
$S:0}
C.esv.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdu().z,C.iY(A.bi,!1,w,A.aD,18,A.bo,A.a6,0.62,C.cB(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.I2,0.42,0.06,0.18))
A.d.L(v.gdu().z,C.iY(A.bi,!1,w,A.aD,18,A.bo,A.a6,0.62,C.cB(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.ut,0.42,0.52,0.18))},
$S:0}
C.esw.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdu().z,C.CW(858088427,0.62,C.cB(),D.bg,4280640491,2,0.42,0.05,0.18))
A.d.L(v.gdu().z,C.CW(856004201,0.62,C.cB(),D.bg,4278556265,2,0.42,0.53,0.18))
A.d.L(v.gdu().z,C.iY(A.bi,!1,w,A.aD,20,A.bo,A.H,0.1,C.cB(),"Option A",0,D.de,0.36,0.08,0.2))
A.d.L(v.gdu().z,C.iY(A.bi,!1,w,A.aD,20,A.bo,A.H,0.1,C.cB(),"Option B",0,D.de,0.36,0.56,0.2))},
$S:0}
C.esy.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdu().z,C.CW(4294967295,0.36,C.cB(),D.bg,w,2,0.24,0.38,0.28))
A.d.L(v.gdu().z,C.iY(A.L,!1,w,A.aD,14,A.bo,A.a6,0.12,C.cB(),"[ QR CODE ]",0,D.de,0.24,0.38,0.4))},
$S:0}
C.esz.prototype={
$0(){return C.ceA(this.b,D.S4,this.a.gql())},
$S:0}
C.etS.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a73.t(0,d),t=this.a
return t.b7L(d,v===d,A.aZ,this.c,new C.etR(t,u,d,w),u)},
$S:z+25}
C.etR.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.o6(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bDu(r,new C.etQ(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.etQ.prototype={
$0(){return this.a.d3(new C.etP(this.b,this.c))},
$S:0}
C.etP.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.esc.prototype={
$0(){var w,v=this.a,u=v.gql(),t=C.rw(4294967295,null,0,0,null,C.cB(),D.mJ,"","","",D.de),s=this.b
C.ceA(t,s,u)
w=v.gdu()
if(w!=null&&s!==D.CS){t.e=w.e
t.f=w.f}A.d.cj(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.esV.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.ic3(p,q.d,s,new C.esU(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.ty(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.esU.prototype={
$1(d){return this.bkw(d)},
bkw(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.esT(t,d))
w=2
return B.b(t.ty(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.esT.prototype={
$0(){var w,v,u
for(w=J.aV(this.b),v=this.a;w.C();){u=w.gR(w)
A.d.cj(v.d,0,u)}},
$S:0}
C.esW.prototype={
$0(){return this.a.bIA()},
$S:0}
C.esX.prototype={
$0(){return this.a.aQ5("Class Presentation",!0)},
$S:0}
C.esY.prototype={
$1(d){return this.a.bJw(d.b,this.b,d.a)},
$S:z+88}
C.ety.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aI(w,A.bW,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.evJ.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aI(d,A.eG,x.w).w.f.d),new B.e2(new C.evI(this.a,this.b),null),null)},
$S:61}
C.evI.prototype={
$2(d,e){return B.oT(new C.evH(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:591}
C.evH.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.ax:A.c,s=B.I(u?A.bE:A.aL,A.q,1),r=B.p(v,v,A.f,v,v,new B.o(A.b_,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.x(B.a([A.R,r,new B.D(A.aie,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b7,B.bK(!1,A.zU,v,v,!0,v,v,new C.evF(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.E(B.cw(B.a([p.aSR(u,!0,!0,new C.evG(p,w.d))],q),e,D.bsy,v,v,A.ah,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kL,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:115}
C.evF.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.evG.prototype={
$0(){this.b.$1(new C.evD())
var w=this.a
if(w.c!=null)w.m(new C.evE())},
$S:0}
C.evD.prototype={
$0(){},
$S:0}
C.evE.prototype={
$0(){},
$S:0}
C.exh.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:95}
C.exi.prototype={
$4(d,e,f,g){var w=A.cu.aA(0,e.gp(0))
return B.de(B.ef(A.A,new C.ayK(this.a,null),0.94+w*0.06,null,null),w)},
$S:390}
C.exj.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:95}
C.exk.prototype={
$4(d,e,f,g){var w=A.cu.aA(0,e.gp(0))
return B.de(B.ef(A.A,new C.bcN(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:390}
C.exl.prototype={
$0(){return A.d.cj(this.a.d,0,C.VT(this.b))},
$S:0}
C.esh.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.aA(0,o)
o=B.n(22)
v=B.n(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.ax.j(0.72)],t):B.a([A.c.j(0.88),A.pC.j(0.75)],t)
r=B.I(A.b3.j(0.28+w*0.22),A.q,1.3)
q=w*0.2
t=B.a([A.b3.j(0.35+q),A.cb.j(0.18),A.K],t)
q=B.I(A.b3.j(0.45+q),A.q,1)
t=B.p(p,B.X(A_.a02,u?A.ad:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bT(A.A,0.5,A.x,p,0,t,p,p),A.a5),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bw(o,B.u3(A.fx,B.p(p,B.x(B.a([t,A.aB,q,A.am,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aA:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a8(A.az,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.ex,p,p,1/0),14,!1),A.aq)},
$S:334}
C.etm.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.etn.prototype={
$1(d){return d.length!==0},
$S:3}
C.eto.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.jK
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a0y:A.BD}return w},
$S:677}
C.etr.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dC.aA(0,A.k.E(j+m.b*0.12,1))
j=B.n(20)
v=m.c
u=B.n(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.ax.j(0.78)],s):B.a([A.c.j(0.92),A.mY.j(0.82)],s)
r=m.e
q=A.d.gI(r)
p=t?0.34:0.26
p=B.I(q.j(p+w*0.22),A.q,1.25)
q=B.n(10)
q=B.p(l,B.X(C.kx(v.w)?A.vQ:A.q7,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a8(A.a3,A.a8,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.PM(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.PM(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.PM(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.u(n)+" \u2022 Updated "+k.PM(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.PM(v.f)
r=k.bJu(n,A.d.gI(r),t)
return B.p(l,B.bw(j,new B.a7Q(B.aF(!1,A.a1,!0,l,B.aL(!1,l,!0,B.p(l,B.dN(!1,A.Mv,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.X(A.o6,t?A.aA:A.bK,l,l,l,l),l,l,l,new C.etp(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a8(A.az,A.aC,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.etq(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ag),l),A.aq),A.f,l,l,l,l,l,l,A.da,l,l,l,l)},
$S:94}
C.etq.prototype={
$0(){return this.a.aeS(this.b)},
$S:0}
C.etp.prototype={
$0(){return this.a.AP(this.b,this.c)},
$S:0}
C.euS.prototype={
$0(){var w=this.a
w.b6n()
w.m(new C.euR())},
$S:0}
C.euR.prototype={
$0(){},
$S:0}
C.euT.prototype={
$1(d){return this.a.aiW(this.b.a,d)},
$S:2}
C.euU.prototype={
$0(){this.a.d3(new C.euQ(this.b))},
$S:0}
C.euQ.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cx:A.P},
$S:0}
C.euV.prototype={
$0(){this.a.d3(new C.euP(this.b))},
$S:0}
C.euP.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bo:A.cF},
$S:0}
C.euW.prototype={
$0(){this.a.d3(new C.euO(this.b))},
$S:0}
C.euO.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mP},
$S:0}
C.euX.prototype={
$0(){this.a.d3(new C.euN(this.b))},
$S:0}
C.euN.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.euY.prototype={
$0(){var w=this.a
w.d3(new C.euM(w,this.b))},
$S:0}
C.euM.prototype={
$0(){var w=this.b
return w.as=this.a.c3x(w.as)},
$S:0}
C.euZ.prototype={
$0(){return this.a.d3(new C.euL(this.b))},
$S:0}
C.euL.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.ev_.prototype={
$0(){return this.a.d3(new C.euK(this.b))},
$S:0}
C.euK.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.euD.prototype={
$0(){return this.a.a1U(this.b.a)},
$S:0}
C.euE.prototype={
$0(){this.a.a_q()
return null},
$S:0}
C.euF.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aI(v,A.bW,x.w).w.a.a<900)w.afa()
else w.m(new C.euC(w))},
$S:0}
C.euC.prototype={
$0(){return this.a.as=!0},
$S:0}
C.euG.prototype={
$0(){this.a.d3(new C.euB(this.b))},
$S:0}
C.euB.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cx:A.P},
$S:0}
C.euH.prototype={
$0(){return this.a.d3(new C.euA(this.b))},
$S:0}
C.euA.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.euI.prototype={
$0(){return this.a.d3(new C.euz(this.b))},
$S:0}
C.euz.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.euJ.prototype={
$0(){return this.a.azw(null)},
$S:0}
C.etL.prototype={
$0(){this.a.Dx()
return null},
$S:0}
C.etM.prototype={
$0(){this.a.a9W()
return null},
$S:0}
C.etO.prototype={
$1(d){return this.bkx(d)},
bkx(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.JW(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bS(A.ax,null,new C.etG(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d3(new C.etH(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d3(new C.etI(r))
s=s.c.J(x.q).f
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d3(new C.etJ(r))
s=s.c.J(x.q).f
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.hqA(q,new C.Ew(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d3(new C.etK(r,p))
s=s.c.J(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.agR(q)
q=B.u(q==null?null:q.b)+" will play after your last slide."}s.S(B.b2(null,null,null,null,null,A.r,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:93}
C.etG.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.ecG],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bMJ:r
q.push(B.dN(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.etF(d,t),!1,r,r,r,r,r,r,r,new B.y(""+t+" seconds",r,A.dp,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bm(!0,B.x(q,A.m,r,A.e,A.N,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.etF.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.etH.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.etI.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.etJ.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.etK.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.etN.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zI(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zI(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zI(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.agR(r?t:s.db)
s=s==null?t:s.b
return B.a([D.ehK,q,v,u,B.zI(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:135}
C.ey2.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bCF(w,v)}},
$S:0}
C.ey3.prototype={
$0(){this.a.Dx()
return null},
$S:0}
C.ev2.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.n(999),q=s?D.bX7:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bL
if(s)v=A.c
else v=this.b?A.aS:A.bq
return new B.D(A.fC,B.aC(u,B.df(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.bc,new B.o(w,u,u,r,u,q,A.n),A.eH,u,u,u,A.lQ,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.ev1(t,d),u,u,u,u,u,u,!1,A.a7),u)},
$S:142}
C.ev1.prototype={
$0(){var w=this.a
return w.m(new C.ev0(w,this.b))},
$S:0}
C.ev0.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.ev3.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a3l:E.ax2
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbMY():t.gbIV()
return B.hx(B.aC(u,B.p(u,D.an6,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gI(v).j(0.45),A.J,10)],x.V),new B.a8(A.a3,A.a8,A.x,v,u,u),A.a5),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a7),u,s,u,u)},
$S:1707}
C.ev4.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.ibj(v,w.a.c)},
$S:0}
C.ewr.prototype={
$0(){return this.b.va(this.a.a)},
$S:0}
C.ews.prototype={
$0(){return this.a.va(D.mJ)},
$S:0}
C.ewt.prototype={
$0(){return this.a.va(D.I0)},
$S:0}
C.ewE.prototype={
$0(){return this.a.va(D.I1)},
$S:0}
C.ewP.prototype={
$0(){return this.a.va(D.I_)},
$S:0}
C.ex_.prototype={
$0(){return this.a.q6("lab_report")},
$S:0}
C.ex6.prototype={
$0(){return this.a.q6("rubric")},
$S:0}
C.ex7.prototype={
$0(){return this.a.q6("minutes")},
$S:0}
C.ex8.prototype={
$0(){return this.a.q6("agenda")},
$S:0}
C.ex9.prototype={
$0(){return this.a.q6("timeline")},
$S:0}
C.exa.prototype={
$0(){return this.a.q6(this.b.a)},
$S:0}
C.ewu.prototype={
$0(){this.a.Vz()
return null},
$S:0}
C.ewv.prototype={
$0(){this.a.Vt()
return null},
$S:0}
C.eww.prototype={
$0(){return this.a.q6("table")},
$S:0}
C.ewx.prototype={
$0(){return this.a.q6("sticky")},
$S:0}
C.ewy.prototype={
$0(){return this.a.q6("divider")},
$S:0}
C.ewz.prototype={
$0(){return this.a.q6("header_bar")},
$S:0}
C.ewA.prototype={
$0(){return this.a.p_(D.bg)},
$S:0}
C.ewB.prototype={
$0(){return this.a.p_(D.eN)},
$S:0}
C.ewC.prototype={
$0(){return this.a.p_(D.jP)},
$S:0}
C.ewD.prototype={
$0(){return this.a.p_(D.CT)},
$S:0}
C.ewF.prototype={
$0(){return this.a.p_(D.jQ)},
$S:0}
C.ewG.prototype={
$0(){return this.a.p_(D.l6)},
$S:0}
C.ewH.prototype={
$0(){return this.a.p_(D.fs)},
$S:0}
C.ewI.prototype={
$0(){this.a.Hf()
return null},
$S:0}
C.ewJ.prototype={
$0(){this.a.Ng()
return null},
$S:0}
C.ewK.prototype={
$0(){return this.a.q6("quote")},
$S:0}
C.ewL.prototype={
$0(){return this.a.a84()},
$S:0}
C.ewM.prototype={
$0(){this.a.a_w()
return null},
$S:0}
C.ewN.prototype={
$0(){var w=this.a
return w.m(new C.ewh(w))},
$S:0}
C.ewh.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.ewO.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.o6(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.ewp(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ewp.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.ewQ.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jW()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a74.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.b_
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.q,v?2.5:1),s,s,new B.a8(A.a3,A.a8,A.x,u,s,s),A.a5),s,26,s,s,s,s,s,26)],x.p)
if(D.a74.t(0,q))u.push(B.ao(s,B.p(s,D.Oc,A.f,s,s,D.E8,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fC,B.aC(s,B.hx(new B.an(A.W,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.ewo(r,d),s,s,s,s,s,s,!1,A.a7),s)},
$S:z+89}
C.ewo.prototype={
$0(){this.a.a8m(this.b)
return null},
$S:0}
C.ewR.prototype={
$0(){this.a.a8l(this.b)
return null},
$S:0}
C.ewS.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hI4(d),p=this.a,o=B.n(8),n=p.gdu()
n=n==null?r:n.x
w=d.a
n=n===w?A.bj:A.b_
v=p.gdu()
n=B.I(n,A.q,(v==null?r:v.x)===w?2.5:1)
u=B.n(8)
t=B.n(7)
s=C.rw(4294967295,r,0,0,r,"preview_"+w,D.qk,"","","",D.de)
C.hnw(s,w)
w=x.p
u=B.a([B.bw(o,B.p(r,B.bw(t,C.hoR(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.anF,A.f,r,r,D.E8,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.ij,B.aC(r,B.x(B.a([new B.an(A.W,r,A.aa,A.r,u,r),A.cV,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aA:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.ewn(p,q,d),r,r,r,r,r,r,!1,A.a7),r)},
$S:z+90}
C.ewn.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gdu()
if(r==null){w=1
break}q=t.b||s.Q
if(q){w=3
break}else e=q
w=4
break
case 3:w=5
return B.b(s.o6(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.d3(new C.ewd(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ewd.prototype={
$0(){return C.hnw(this.a,this.b.a)},
$S:0}
C.ewq.prototype={
bky(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a73.t(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.o6(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bky(d,e)},
$S:z+91}
C.exb.prototype={
$4(d,e,f,g){var w=null,v=B.T(d).k("M<1,t>")
v=B.C(new B.M(d,new C.exd(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.cd(B.B(v,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aP)},
$S:z+92}
C.exd.prototype={
$1(d){var w=this
return w.a.b7L(d,w.b===d,w.c,w.d,new C.exc(w.e,d),!D.a73.t(0,d))},
$S:z+25}
C.exc.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.ewT.prototype={
$1(d){this.b.$2(d,new C.ewm(this.a,d,this.c))
return null},
$S:z+26}
C.ewm.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bDu(u,new C.ewc(v,this.c,w),w)},
$S:0}
C.ewc.prototype={
$0(){return this.a.d3(new C.ewa(this.b,this.c))},
$S:0}
C.ewa.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.ewU.prototype={
$1(d){this.b.$2(d,new C.ewl(this.a,d))
return null},
$S:z+26}
C.ewl.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fRb(u,new C.ewb(v,w),w)},
$S:0}
C.ewb.prototype={
$0(){var w=this.a
return w.d3(new C.ew9(w,this.b))},
$S:0}
C.ew9.prototype={
$0(){return this.a.gdu().r=this.b},
$S:0}
C.ewV.prototype={
$0(){var w=this.a
return w.m(new C.ewk(w))},
$S:0}
C.ewk.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.ewW.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bCF(w,v)}},
$S:0}
C.ewX.prototype={
$0(){this.a.I1()
return null},
$S:0}
C.ewY.prototype={
$0(){return this.a.a84()},
$S:0}
C.ewZ.prototype={
$0(){var w=this.a,v=w.jW()
if(v!=null&&v.b===D.cQ)w.d3(new C.ewj(v))},
$S:0}
C.ewj.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.ex0.prototype={
$0(){this.a.Dx()
return null},
$S:0}
C.ex1.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.Fb(v,!0)
return null},
$S:0}
C.ex2.prototype={
$0(){this.a.d3(new C.ewi(this.b))},
$S:0}
C.ewi.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cx:A.P},
$S:0}
C.ex3.prototype={
$0(){this.a.d3(new C.ewg(this.b))},
$S:0}
C.ewg.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bo:A.cF},
$S:0}
C.ex4.prototype={
$0(){this.a.d3(new C.ewf(this.b))},
$S:0}
C.ewf.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mP},
$S:0}
C.ex5.prototype={
$0(){this.a.d3(new C.ewe(this.b))},
$S:0}
C.ewe.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.esQ.prototype={
$1(d){return this.bkv(d)},
bkv(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.o6(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.d3(new C.esP(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:178}
C.esP.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.exy.prototype={
$0(){var w=this.a
return w.d3(new C.exx(w,this.b))},
$S:0}
C.exx.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.exz.prototype={
$0(){var w=this.a
return w.d3(new C.exw(w,this.b))},
$S:0}
C.exw.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.etY.prototype={
$0(){return this.a.d3(new C.etX(this.b))},
$S:0}
C.etX.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.etZ.prototype={
$0(){return this.a.d3(new C.etW(this.b))},
$S:0}
C.etW.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.euv.prototype={
$1(d){var w=x.gh
w=B.C(new B.M(D.apm,new C.euu(),w),w.k("ak.E"))
return w},
$S:z+94}
C.euu.prototype={
$1(d){var w=null
return B.zI(B.d(d.b,w,w,w,w,w,w,A.m8,w,w,w),48,d,x.fO)},
$S:z+95}
C.exL.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a7(v,w?8:0,null,null)},
$S:36}
C.exK.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kj()?q:new C.exI(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.n(8)
if(o)v=A.bj
else v=r.d?A.b_:A.cr
v=B.I(v,A.q,o?2:1)
u=r.d?A.ct:A.c
t=B.bZ(0,C.hoR(r.b.r[e]),0,0,0)
s=B.n(4)
return B.aC(q,B.p(q,new B.an(A.W,q,A.aa,A.r,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nz,q,q,q),A.f,q,q,new B.o(A.aW,q,q,s,q,q,A.n),q,q,q,q,A.aj7,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.exJ(p,e),q,q,q,q,q,q,!1,A.a7)},
$S:78}
C.exJ.prototype={
$0(){var w=this.a
return w.m(new C.exE(w,this.b))},
$S:0}
C.exE.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.K4()},
$S:0}
C.exI.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bS(null,null,new C.exF(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.exG(q,s))
q.aRA()}else if(r==="del"){q=t.a
q.m(new C.exH(q,s))
q.aQI()}else if(r==="up")t.a.b2W(s,s-1)
else if(r==="down")t.a.b2W(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.exF.prototype={
$1(d){var w=null,v=B.a([B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bOn,w,w,w,w,new C.exA(d),!1,w,w,w,w,w,w,w,D.fkk,w,w,w),B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bOg,w,w,w,w,new C.exB(d),!1,w,w,w,w,w,w,w,A.wD,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bNy,w,w,w,w,new C.exC(d),!1,w,w,w,w,w,w,w,D.fsp,w,w,w))
if(u<this.b.r.length-1)v.push(B.dN(!1,w,w,w,!0,w,w,w,!0,w,D.bPB,w,w,w,w,new C.exD(d),!1,w,w,w,w,w,w,w,D.fk9,w,w,w))
return B.bm(!0,B.x(v,A.m,w,A.e,A.N,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.exA.prototype={
$0(){B.a6(this.a,!1).O("dup")
return null},
$S:0}
C.exB.prototype={
$0(){B.a6(this.a,!1).O("del")
return null},
$S:0}
C.exC.prototype={
$0(){B.a6(this.a,!1).O("up")
return null},
$S:0}
C.exD.prototype={
$0(){B.a6(this.a,!1).O("down")
return null},
$S:0}
C.exG.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.exH.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.exM.prototype={
$0(){return this.a.a84()},
$S:0}
C.etf.prototype={
$0(){var w=this.a
w.b6n()
w.azw(null)},
$S:0}
C.ete.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.n(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dn,24)],x.V),m=this.b
if(m.f!=null){w=B.b0(m.e)
v=m.f
v.toString
v=new B.a8(A.az,A.aC,A.x,B.a([w,B.b0(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b0(m.e):p
u=m.x
t=m.y
s=B.n(4)
if(m.f!=null){r=B.b0(m.e)
q=m.f
q.toString
q=new B.a8(A.az,A.aC,A.x,B.a([r,B.b0(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bw(s,B.c_(A.kE,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bf),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.M(r,new C.etd(this.a,e.b,e.d,q),B.T(r).k("M<1,t>")))
if(m.z.length===0)s.push(B.av(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aA:A.bK,p,p,p,p,p,p,p,p,p,p,p,A.a6,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c_(new B.an(A.W,p,A.aa,A.f,s,new B.cx("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bf)},
$S:401}
C.etd.prototype={
$1(d){var w=this
return w.a.bEQ(d,w.b,w.c,w.d)},
$S:z+23}
C.et2.prototype={
$0(){var w=this
if(w.b){w.a.Np(w.c)
return}if(w.d){w.a.a82(w.c)
return}if(w.e){w.a.agu(w.c)
return}if(w.f)w.a.b6V(w.c)},
$S:0}
C.et3.prototype={
$0(){this.a.Np(this.b)
return null},
$S:0}
C.et4.prototype={
$0(){return this.a.a1U(this.b.a)},
$S:0}
C.et5.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.et1(u,d,w.c,w.d))
v.HG()
v.of()
v.pj()},
$S:18}
C.et1.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.et6.prototype={
$1(d){return this.a.aiW(this.b.a,d)},
$S:2}
C.et8.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.h2g(w))u.a.Np(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b6V(v)},
$S:0}
C.et7.prototype={
$0(){return this.a.a1U(this.b.a)},
$S:0}
C.et9.prototype={
$1(d){var w=this,v=w.a
v.m(new C.et0(w.b,d,w.c,w.d))
v.HG()
v.of()
v.pj()},
$S:18}
C.et0.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cQ)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.eta.prototype={
$1(d){var w=this.a
w.m(new C.et_(this.b,d))
w.HG()
w.of()
w.pj()},
$S:220}
C.et_.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cQ)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.etb.prototype={
$0(){var w=this.a
w.m(new C.esZ(this.b))
w.HG()
w.of()
w.pj()},
$S:0}
C.esZ.prototype={
$0(){this.a.r=C.hol()},
$S:0}
C.etc.prototype={
$0(){return this.a.a1U(this.b.a)},
$S:0}
C.ev6.prototype={
$0(){var w=this.a
return w.m(new C.ev5(w))},
$S:0}
C.ev5.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ev7.prototype={
$1(d){return this.a.cCA(this.b.a,d)},
$S:2}
C.eub.prototype={
$1(d){var w
this.a.d3(d)
w=this.b
if(w!=null)w.$0()},
$S:173}
C.euc.prototype={
$1(d){return this.a.$1(new C.eua(this.b,d))},
$S:6}
C.eua.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eud.prototype={
$1(d){return this.a.$1(new C.eu9(this.b,d))},
$S:6}
C.eu9.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eue.prototype={
$1(d){return this.a.$1(new C.eu8(this.b,d))},
$S:6}
C.eu8.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.euf.prototype={
$1(d){return this.a.$1(new C.eu7(this.b,d))},
$S:6}
C.eu7.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eug.prototype={
$1(d){return this.a.$1(new C.eu6(this.b,d))},
$S:6}
C.eu6.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.euh.prototype={
$1(d){return this.b.$1(new C.eu5(this.a,this.c))},
$S:9}
C.eu5.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eui.prototype={
$1(d){return this.b.$1(new C.eu4(this.a,this.c))},
$S:9}
C.eu4.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.euj.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bj:A.cX
return B.aC(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.q,t?2:1),w,w,w,A.a5),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eu3(this.a,v,d),w,w,w,w,w,w,!1,A.a7)},
$S:402}
C.eu3.prototype={
$0(){return this.a.$1(new C.eu0(this.b,this.c))},
$S:0}
C.eu0.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.euk.prototype={
$1(d){return this.a.$1(new C.eu2(this.b,d))},
$S:1708}
C.eu2.prototype={
$0(){var w=this.b
return this.a.as=w.gI(w)},
$S:0}
C.eul.prototype={
$1(d){var w=null
return B.aC(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a5),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eu1(this.a,this.b,d),w,w,w,w,w,w,!1,A.a7)},
$S:402}
C.eu1.prototype={
$0(){return this.a.$1(new C.eu_(this.b,this.c))},
$S:0}
C.eu_.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eum.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a6(w,!1).py()}else w=!1
if(w){w=v.a.c
w.toString
B.a6(w,!1).eF()}v.a.as6()},
$S:0}
C.eup.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dC.aA(0,m)
m=B.n(16)
v=B.n(16)
u=o.c
t=B.aq(u,A.b3,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.I(A.c.j(0.3+w*0.2),A.q,1.2)
r=B.a([B.X(o.d,A.c,n,n,n,26)],x.p)
q=B.n(6)
p=B.I(u,A.q,1.2)
r.push(B.ao(2,B.p(n,B.X(A.ub,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.mt,n,n,n),n,n,n,2,n,n))
return B.aF(!1,A.a1,!0,n,B.aL(!1,m,!0,B.eH(new B.a7(48,48,new B.an(A.A,n,A.aa,A.r,r,n),n),n,new B.o(n,n,s,v,n,new B.a8(A.az,A.aC,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ag)},
$S:134}
C.erZ.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.aA(0,o)
o=B.n(22)
v=B.n(22)
u=q.c
t=B.aq(u,A.b3,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.I(A.c.j(0.28+w*0.22),A.q,1.35)
s=A.c.j(0.14+w*0.08)
r=B.I(A.c.j(0.4+w*0.15),A.q,1)
return B.aF(!1,A.a1,!0,p,B.aL(!1,o,!0,B.eH(B.x(B.a([B.ef(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a5),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ac,B.d(q.e,p,p,p,p,p,p,A.j8,A.L,p,p)],x.p),A.m,p,A.b9,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a8(A.az,A.aC,A.x,u,p,p),A.n),p,A.Fx,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ag)},
$S:134}
C.ew3.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.U,!0,w,!0,A.r,w,B.aN(),u,w,w,w,w,w,2,A.aov,A.y,!0,w,!0,w,!1,w,A.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a4,w,A.an,w,w,w,w)
return B.em(B.a([B.bK(!1,A.df,w,w,!0,w,w,new C.ew1(d),w,w),B.bG(A.pn,new C.ew2(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:20}
C.ew1.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.ew2.prototype={
$0(){var w=this.b.a.a
B.a6(this.a,!1).O(w)
return null},
$S:0}
C.d0V.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dC.aA(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.ew.aA(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dV.aA(0,i)
v=B.n(22)
t=B.aq(A.aJ,A.d.gI(C.kx(j.a.c.w)?D.um:N.nr),w*0.35)
t.toString
t=B.I(t,A.q,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gI(C.kx(j.a.c.w)?D.um:N.nr).j(0.18+w*0.12),A.J,32+w*10),D.abD],s)
q=B.n(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bT(A.b0,0.9,A.x,k,0,B.a([A.d.gI(C.kx(j.a.c.w)?D.um:N.nr).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gI(C.kx(j.a.c.w)?D.um:N.nr).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bT(A.A,0.5,A.x,k,0,B.a([m,A.d.gal(C.kx(j.a.c.w)?D.um:N.nr).j(0.08),A.K],p),k,k),A.a5),k,n,k,k,k,k,k,n)
n=B.n(14)
m=j.a.c.w
l=C.kx(m)?D.um:N.nr
s=B.a([new B.ac(0,A.G,A.d.gI(C.kx(m)?D.um:N.nr).j(0.45+w*0.2),A.cB,18)],s)
m=x.p
l=B.a([p,B.ef(A.A,B.p(k,B.X(C.kx(j.a.c.w)?A.vQ:A.q7,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a8(A.az,A.aC,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.r,l,k),A.R,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kx(j.a.c.w)?D.um:N.nr).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.fF,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.fcx,A.L,k,k),A.au,B.d(j.gcxx(),k,k,k,k,k,k,D.fh4,A.L,k,k),A.aB],m)
p=j.a.c
if(p.z){p=p.gS8()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kx(j.a.c.w)?D.um:N.nr).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.P,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.JJ(A.ya,"Download PDF","pdf",A.d_,j.IX(0),!1,k))
p=j.a.c
if(!p.z||p.gS8()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.am,new C.JJ(A.kw,"Transfer to "+C.hon(p==null?"":p),"transfer_hati",A.aV,j.IX(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.IX(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.am,new C.JJ(D.bFX,"Rename presentation","rename",A.cb,n,!1,k),A.am,new C.JJ(A.akP,"Duplicate","duplicate",A.b6,j.IX(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.O)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.JJ(A.e7,"Delete presentation","delete",A.av,j.IX(p),!0,k))
s.push(A.au)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.IX(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.IX(n)
s.push(B.dW(B.de(B.bK(!1,E.aRK,k,k,!0,k,k,new C.d0U(d),k,B.fy(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,A.aw,k,D.bvD,k,k,k,k,k,A.k9,k,k)),n),new B.v(0,(1-p)*8)))
return B.ef(A.A,B.de(B.aF(!1,A.a1,!0,k,B.p(k,B.bw(q,new B.an(A.W,k,A.aa,A.r,B.a([o,new B.D(D.buM,B.x(s,A.m,k,A.e,A.N,0,A.p),k)],m),k),A.aq),A.f,k,A.VF,new B.o(A.ax,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ag),i),0.88+u*0.12,k,k)},
$S:47}
C.d0U.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.d1g.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d1h.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d0S.prototype={
$1(d){var w=this.a
return w.m(new C.d0O(w))},
$S:23}
C.d0O.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d0T.prototype={
$1(d){var w=this.a
return w.m(new C.d0N(w))},
$S:51}
C.d0N.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d0R.prototype={
$0(){var w=this.a
return w.m(new C.d0P(w))},
$S:0}
C.d0P.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d0Q.prototype={
$0(){var w=this.a.a.e
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.eyJ.prototype={
$0(){return $.bkk=!$.bkk},
$S:0}
C.eyz.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaUM())u.aw0()},
$S:0}
C.eyI.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eyA.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eyB.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.aw0()},
$S:0}
C.eyv.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gI(w.a.c.r).r
w.d=0},
$S:0}
C.eyw.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eyx.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eyy.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.E(w-1+v,v)},
$S:0}
C.eyG.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b1,A.r,w,null)},
$S:1709}
C.eyH.prototype={
$2(d,e){var w
if(e.gc3(e)===A.i_)return new B.d_(e,!1,d,null)
w=this.a
return w.cvu(w.e,d,e)},
$S:419}
C.eyC.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fE((1-v.gp(0))*1.5708)
return B.fv(A.A,B.de(e,v.gp(0)),null,w,!0)},
$S:47}
C.eyD.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.k9((1-v.gp(0))*1.5708)
return B.fv(A.A,B.de(e,v.gp(0)),null,w,!0)},
$S:47}
C.eyE.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fE(v.gp(0)*0.8)
w.k9(v.gp(0)*0.35)
return B.fv(A.A,B.de(e,v.gp(0)),null,w,!0)},
$S:47}
C.eyF.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fE(-v.gp(0)*1.2)
return B.fv(A.a8,B.de(e,v.gp(0)),null,w,!0)},
$S:47}
C.eyK.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gYF().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gYF().x
t===$&&B.c()
return new C.b11(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.II(v.c,t,!0,new B.cx("cine"+u,x.W))},
$S:657}
C.eyM.prototype={
$1(d){var w=this.a
if(d.b.a>B.aI(this.b,A.bW,x.w).w.a.a*0.55)w.aw0()
else w.cjR()},
$S:51}
C.eyL.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fHA.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:470}
C.fHJ.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.em(B.a([B.bK(!1,A.df,w,w,!0,w,w,new C.fHG(d),w,w),B.bK(!1,D.fzI,w,w,!0,w,w,new C.fHH(d,this.b,v),w,w),B.bG(A.aS0,new C.fHI(d,v,this.c),w)],x.p),w,w,M.tv,new B.a7(320,w,t,w),w,w,w,w,D.fBa,w)},
$S:20}
C.fHG.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fHH.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
C.h2V(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fHI.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aPT(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aPj(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fHz.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.ceD.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:535}
C.fHF.prototype={
$1(d){return d.ah()},
$S:z+14}
C.feL.prototype={
$1(d){return C.h2T(C.VT(B.a2(d,x.N,x.z)),this.a)},
$S:z+96}
C.fQr.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:95}
C.fQs.prototype={
$4(d,e,f,g){var w=A.cu.aA(0,e.gp(0))
return B.de(B.ef(A.A,D.h5q,0.94+w*0.06,null,null),w)},
$S:390}
C.fQt.prototype={
$1(d){var w=this
return new C.VV(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.eyf.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eyb.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eye.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.VW(u,this.b,w.gaO_(),v,null)},
$S:z+99}
C.eyc.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eyd.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eyg.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eyh.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eyk.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eyl.prototype={
$0(){var w=this.a
return w.m(new C.eyj(w))},
$S:0}
C.eyj.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eym.prototype={
$0(){var w=this.a
return w.m(new C.eyi(w))},
$S:0}
C.eyi.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eyn.prototype={
$1(d){return this.a.bJv(d,this.b)},
$S:z+100}
C.eya.prototype={
$0(){var w=this.a
return w.m(new C.ey9(w,this.b))},
$S:0}
C.ey9.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eyo.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eyp.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eyq.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eyr.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eys.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fN(new B.fE(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.J(x.q).f.S(D.eZT)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.erT.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.erS())},
$S:0}
C.erS.prototype={
$0(){},
$S:0}
C.erU.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fO()},
$S:8}
C.erP.prototype={
$1(d){return this.a.m(new C.erO())},
$S:2}
C.erO.prototype={
$0(){},
$S:0}
C.erQ.prototype={
$1(d){return this.a.aZL()},
$S:2}
C.erR.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eyu.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.pX(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eyt(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eyt.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fBU.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.ex(new B.jM(this.c,new C.fBT(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:228}
C.fBT.prototype={
$3(d,e,f){return new C.II(e,!1,!1,new B.cx(e.a,x.W))},
$S:z+102}
C.fBV.prototype={
$1(d){var w=null
return B.on(!1,B.av(new C.buS(this.a,this.b,w),w,w,w),w,x.z)},
$S:323}
C.fBZ.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aW.gmF(),$async$$0)
case 3:w=4
return B.b(B.bN(A.ne,null,x.H),$async$$0)
case 4:w=5
return B.b($.aW.gmF(),$async$$0)
case 5:s=$.aW.ak$.x.h(0,t.a)
r=s==null?null:s.gba()
if(!(r instanceof B.q0))throw B.V("Could not draw the slide.")
u=r.m1(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1712}
C.fC_.prototype={
bl2(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hv(A.h0),$async$$1)
case 3:r=f
if(r==null)throw B.V("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hS([J.eX(A.dD.gaP(r))],"image/png"))
t.toString
s=Al.fUE(t)
w=4
return B.b(new B.q6(s,"load",!1,x.ev).gI(0).d7(0,A.jl),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bl2(d)},
$S:1713}
C.fBW.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:155}
C.fBX.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fU(0)},
$S:155}
C.fBY.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.f97.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.f92,A.L,w,w)},
$S:1714}
C.f98.prototype={
$3(d,e,f){var w=null,v=B.n(99)
return B.bw(v,B.m5(A.bn,w,A.dR,8,w,e===0?w:e,w),A.aq)},
$S:564}
C.eg1.prototype={
$1(d){this.a.ZS()
return null},
$S:12}
C.eg_.prototype={
$0(){return this.a.e=D.bqP},
$S:0}
C.eg0.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bx
return this.b.e=w},
$S:0}
C.cha.prototype={
$1(d){return A.o.dC(1,d.a)},
$S:z+103}
C.chb.prototype={
$2(d,e){return(d|e)>>>0},
$S:74};(function aliases(){var w=C.aLO.prototype
w.bvF=w.q
w=C.aLh.prototype
w.bv7=w.q
w=C.aL2.prototype
w.buS=w.q
w=C.aLg.prototype
w.bv6=w.q
w=C.aLM.prototype
w.bvD=w.q
w=C.aN8.prototype
w.bxa=w.q
w=C.aJY.prototype
w.btK=w.q
w=C.aM_.prototype
w.bvR=w.q
w=C.aM0.prototype
w.bvS=w.q
w=C.b2I.prototype
w.bqo=w.aCH})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"i95","ans",104)
v(C.aIX.prototype,"gc3T","YM",0)
var r
u(r=C.axx.prototype,"gcwT","cwU",38)
v(r,"gc4E","adb",0)
v(r=C.axt.prototype,"gaYc","E0",3)
v(r,"gc4B","c4C",3)
v(r,"gawi","xH",0)
v(r,"gawj","IB",0)
t(C,"i9w","hFQ",105)
v(C.aDB.prototype,"gc7l","c7m",3)
s(C,"i9H",0,null,["$4$paper$photo$request$template"],["fIZ"],106,0)
s(C,"i9G",0,null,["$5$doc$history$instruction$photo$template"],["bBY"],107,0)
v(r=C.aDU.prototype,"gc82","IU",0)
v(r,"gbIY","WC",0)
v(r,"gc85","ae0",0)
v(r,"gc84","ZE",0)
v(r,"gaZq","Eh",0)
v(C.aDY.prototype,"gc8a","ZG",0)
v(r=C.aFk.prototype,"gaZD","PI",0)
v(r,"gcoJ","b31",3)
v(r,"gcyh","aAP",86)
v(r,"gbMO","aa_",0)
v(r,"gc8B","As",0)
v(r=C.aHf.prototype,"gciA","a00",0)
v(r,"gciI","a03",0)
v(r,"gbBN","a8s",0)
v(r,"gc8F","aec",0)
v(C.aHe.prototype,"gc8G","aed",0)
v(C.aBf.prototype,"gbAM","a8f",0)
v(C.azD.prototype,"gc8H","ZR",0)
w(C,"i9U","i7N",12)
w(C,"i9S","i4K",12)
w(C,"i9T","i6N",12)
v(r=C.aEd.prototype,"gcBv","cBw",3)
v(r,"gcmZ","cn_",3)
u(r,"gEn","aeS",7)
v(r,"gbGA","arg",3)
u(r,"gEo","b_V",7)
v(r,"gcaP","aez",0)
v(r,"gc9G","aey",0)
v(r,"gccZ","aeT",0)
v(r,"gbIV","a9B",0)
v(r,"gcdS","a_q",0)
v(r,"gcdT","af9",0)
v(r,"gcep","afg",0)
v(r,"gcdb","aeW",0)
v(r,"gbMY","aa3",0)
v(r,"gaRz","aRA",3)
v(r,"gaQH","aQI",3)
v(r,"gaMk","aMl",3)
v(r,"gaQG","as6",3)
u(r,"gbB2","bB3",80)
v(r,"gaAl","b67",3)
v(r,"gc9I","c9J",3)
v(r,"gbY5","bY6",3)
v(r,"gbLn","bLo",3)
v(r=C.aEg.prototype,"gcAi","cAj",3)
v(r,"gczY","czZ",3)
t(C,"i9V","i83",2)
v(r=C.aEe.prototype,"gc8N","IZ",0)
v(r,"gcqL","R7",0)
v(r,"gc8K","IY",0)
v(r,"gcCL","a2y",0)
v(r,"gceB","afn",0)
v(C.aEc.prototype,"gc8O","aZL",3)
v(r=C.aEf.prototype,"gbNK","aad",0)
u(r,"gc8L","c8M",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aD,[C.nU,C.RE,C.bHv,C.bFS,C.cxl,C.cxj,C.bO_,C.b8s,C.cxk,C.bEs,C.ch4,C.ch2,C.ch3,C.ch1,C.asG,C.ch0,C.bOT,C.ok,C.aEP,C.jo,C.nH,C.a7P,C.zv,C.lg,C.oy,C.m7,C.zx,C.nL,C.a7X,C.ar5,C.b12,C.efr,C.ld,C.EF,C.ew,C.j1,C.Ew,C.xz,C.eM,C.lH,C.i5,C.jH,C.a7Y,C.af7,C.b13,C.b2I,C.a2M])
u(B.km,[C.cFc,C.bZH,C.fx9,C.cGI,C.cG4,C.fCC,C.dYQ,C.dYP,C.eg4,C.eg3,C.fE0,C.ffT,C.ffU,C.cd_,C.cd0,C.cd1,C.ekt,C.eTh,C.eSF,C.eSE,C.eTI,C.eTf,C.eT8,C.eTr,C.eU7,C.fny,C.f_h,C.f_g,C.f_K,C.efu,C.fHw,C.dUz,C.fO_,C.fEn,C.cev,C.cet,C.cey,C.fES,C.fET,C.fEU,C.fEV,C.cef,C.ceg,C.dGP,C.cec,C.fER,C.f6G,C.dSL,C.ce5,C.efa,C.fCr,C.evt,C.evS,C.evP,C.evO,C.evZ,C.evY,C.ext,C.exs,C.evI,C.evH,C.esh,C.etr,C.ewq,C.exL,C.exK,C.ete,C.eup,C.erZ,C.d0V,C.eyG,C.eyH,C.eyC,C.eyD,C.eyE,C.eyF,C.eyK,C.ceD,C.eyf,C.eyq,C.chb])
u(B.i_,[C.cFd,C.cFe,C.bOU,C.fum,C.bZG,C.bZJ,C.fKu,C.f7E,C.f7v,C.f7L,C.feM,C.feN,C.fxa,C.fx8,C.fJZ,C.fu0,C.fKQ,C.cGy,C.cGD,C.cGF,C.cGB,C.cGG,C.cGz,C.cGH,C.cGu,C.cGr,C.cGq,C.cGx,C.cG_,C.cFY,C.fBE,C.fBF,C.fjb,C.fCD,C.fCJ,C.fie,C.c9i,C.fBC,C.fBD,C.fww,C.fwx,C.fCI,C.fCE,C.fCG,C.fCH,C.fCF,C.fOh,C.fwA,C.fwB,C.fwE,C.fwF,C.fwI,C.fwJ,C.fPK,C.fgk,C.fPV,C.ejm,C.ejn,C.ejo,C.ej4,C.ejg,C.ejh,C.ejj,C.ccZ,C.ccX,C.ccY,C.fCi,C.fCk,C.fCj,C.ffV,C.ffW,C.fPY,C.eky,C.ekz,C.ekq,C.ekr,C.eku,C.ekv,C.fQd,C.eU8,C.eTy,C.eTi,C.eTv,C.eSA,C.eSB,C.eSC,C.eSG,C.eSH,C.eTY,C.eU4,C.eU6,C.eTH,C.eTJ,C.eTN,C.eTO,C.eTP,C.eTT,C.eTK,C.eTL,C.eSS,C.eST,C.eSU,C.eSV,C.eSW,C.eSX,C.eSY,C.eSZ,C.eT_,C.eSd,C.eSe,C.eSf,C.eSg,C.eSi,C.eSj,C.eSM,C.eSN,C.eSO,C.eSP,C.eSQ,C.eSn,C.eSo,C.eSp,C.eSq,C.eT7,C.eTq,C.fzH,C.fzG,C.cem,C.fnx,C.fHs,C.fHl,C.fHo,C.fFl,C.fFm,C.fFn,C.fzO,C.fzN,C.fzM,C.fzK,C.ffQ,C.ffR,C.ffS,C.fQp,C.f_j,C.f_k,C.f_d,C.f_7,C.f_D,C.f_E,C.f_G,C.f_H,C.f_C,C.fQo,C.eZZ,C.fmN,C.eft,C.fHu,C.fHv,C.fHx,C.fHq,C.fHr,C.fPC,C.djc,C.dji,C.efs,C.fcn,C.fcp,C.fco,C.fcm,C.fAS,C.fAU,C.fej,C.fGX,C.fGY,C.fGZ,C.fH9,C.fHe,C.fHf,C.fHg,C.fHh,C.fHi,C.fHj,C.fHk,C.fH_,C.fH0,C.fH1,C.fH2,C.fH3,C.fH4,C.fH5,C.fH6,C.fH7,C.fH8,C.fHa,C.fHb,C.fHc,C.fHd,C.fyI,C.fml,C.fmk,C.fHD,C.dUA,C.dUy,C.eZ8,C.c8U,C.c8W,C.fO1,C.d8u,C.d8w,C.fO0,C.fNZ,C.fQn,C.fEj,C.d84,C.fwM,C.fwN,C.cek,C.cel,C.cej,C.ce9,C.cea,C.ce6,C.ce7,C.ce8,C.ceB,C.cew,C.cer,C.ces,C.ceu,C.cex,C.cez,C.fEW,C.cee,C.ceh,C.cei,C.ceo,C.cep,C.fHK,C.fGR,C.ced,C.ceb,C.fEQ,C.foU,C.ce4,C.eWM,C.frM,C.ey6,C.euw,C.eux,C.ew6,C.evV,C.evW,C.etU,C.exS,C.exT,C.exU,C.eti,C.evA,C.evC,C.evc,C.ev9,C.eus,C.eut,C.evj,C.etk,C.evv,C.evw,C.evu,C.evy,C.evx,C.evQ,C.evR,C.evT,C.evM,C.etD,C.etA,C.ew_,C.ets,C.exR,C.es0,C.etv,C.etu,C.esJ,C.esO,C.esM,C.esK,C.exZ,C.ey_,C.ey0,C.exY,C.exv,C.exu,C.exo,C.exq,C.exg,C.exP,C.exN,C.es8,C.es4,C.euq,C.esS,C.esj,C.esi,C.esF,C.esG,C.etS,C.esU,C.esY,C.evJ,C.exh,C.exi,C.exj,C.exk,C.etm,C.etn,C.eto,C.euT,C.etO,C.etG,C.etN,C.ev2,C.ev3,C.ewQ,C.ewS,C.exb,C.exd,C.ewT,C.ewU,C.esQ,C.euv,C.euu,C.exF,C.etd,C.et5,C.et6,C.et9,C.eta,C.ev7,C.eub,C.euc,C.eud,C.eue,C.euf,C.eug,C.euh,C.eui,C.euj,C.euk,C.eul,C.ew3,C.d0S,C.d0T,C.eyM,C.fHA,C.fHJ,C.fHz,C.fHF,C.feL,C.fQr,C.fQs,C.fQt,C.eye,C.eyn,C.erU,C.erP,C.erQ,C.fBU,C.fBT,C.fBV,C.fC_,C.fBW,C.fBX,C.f97,C.f98,C.eg1,C.cha])
u(B.ja,[C.cFf,C.f7A,C.f7F,C.f7G,C.f7B,C.f7C,C.f7D,C.f7t,C.f7u,C.f7w,C.f7x,C.f7K,C.f7J,C.f7z,C.f7y,C.f7H,C.f7I,C.f7N,C.f7O,C.f7M,C.cGA,C.cGE,C.cGC,C.cGs,C.cGt,C.cGv,C.cGo,C.cGp,C.cGw,C.cGn,C.cGm,C.cGl,C.cFP,C.cFO,C.cFR,C.cFZ,C.cFS,C.cFQ,C.cFU,C.cFV,C.cFW,C.cFT,C.cFX,C.cG0,C.cG1,C.cG2,C.cG3,C.fwu,C.fwv,C.fws,C.fwt,C.eaQ,C.eaO,C.eaP,C.eaR,C.eaS,C.dYO,C.fwy,C.fwz,C.fwC,C.fwD,C.fwG,C.fwH,C.eg2,C.fEq,C.fEp,C.ejl,C.ejk,C.eiZ,C.eiV,C.ej5,C.ej6,C.ej7,C.ej0,C.ej1,C.ej2,C.ej3,C.ej_,C.eiX,C.eiY,C.ejd,C.eje,C.ejc,C.ejf,C.ejb,C.eja,C.ej9,C.eji,C.ej8,C.eiW,C.ekx,C.ekl,C.ekm,C.eks,C.ekn,C.ekp,C.eko,C.ekw,C.eT0,C.eTo,C.eSK,C.eSL,C.eSI,C.eSJ,C.eTu,C.eTt,C.eTs,C.eTx,C.eTw,C.eSz,C.eSD,C.eSy,C.eSx,C.eSu,C.eSw,C.eSv,C.eU5,C.eTZ,C.eTX,C.eU_,C.eTW,C.eU0,C.eTV,C.eU1,C.eU2,C.eU3,C.eTU,C.eTG,C.eTB,C.eTM,C.eTF,C.eTQ,C.eTE,C.eTR,C.eTD,C.eTS,C.eTC,C.eTl,C.eTk,C.eTm,C.eTj,C.eTn,C.eTd,C.eTc,C.eTe,C.eTb,C.eTa,C.eT9,C.eSh,C.eSc,C.eSr,C.eSm,C.eSs,C.eSl,C.eSt,C.eSk,C.eTg,C.eT4,C.eT3,C.eT5,C.eT2,C.eT6,C.eT1,C.eTp,C.eTA,C.eTz,C.eSR,C.fHn,C.fHp,C.fHt,C.fzL,C.fCb,C.fC9,C.fCa,C.f_l,C.f_m,C.f_i,C.f_c,C.f_b,C.f_e,C.f_f,C.f_1,C.f_2,C.f_4,C.f_5,C.f_6,C.f_3,C.f_8,C.f_z,C.f_A,C.f_y,C.f_B,C.f_x,C.f_w,C.f_v,C.f_F,C.f_u,C.f_t,C.f_s,C.f_I,C.f_r,C.f_J,C.f_q,C.f_p,C.f_9,C.f_a,C.f_o,C.f_n,C.eZV,C.eZW,C.eZX,C.eZY,C.eZU,C.f__,C.f_0,C.djb,C.djd,C.djg,C.djh,C.djf,C.dje,C.fAT,C.fyJ,C.c8V,C.c8X,C.d8n,C.d8s,C.d8t,C.d8r,C.d8q,C.d8v,C.d8p,C.d8o,C.d8x,C.fNY,C.dfa,C.dfb,C.dfc,C.fwK,C.fwL,C.ceC,C.erV,C.erW,C.erX,C.erY,C.foS,C.foT,C.dSN,C.dSM,C.d5j,C.d5i,C.ey8,C.ey7,C.euy,C.exe,C.ey4,C.ew4,C.exV,C.exW,C.ey5,C.evd,C.etg,C.eth,C.evB,C.evb,C.ev8,C.eva,C.eve,C.evf,C.evg,C.evh,C.evi,C.evk,C.etl,C.evn,C.evo,C.evp,C.evq,C.evr,C.evs,C.evm,C.evz,C.evN,C.evL,C.evU,C.evl,C.etB,C.etC,C.etE,C.evX,C.ew0,C.esf,C.etz,C.etx,C.ew8,C.ett,C.ew7,C.etj,C.etV,C.exQ,C.exf,C.esg,C.esd,C.es3,C.es_,C.es1,C.etw,C.esI,C.esN,C.esL,C.esH,C.evK,C.ey1,C.exr,C.exm,C.exn,C.exp,C.euo,C.eun,C.exO,C.es6,C.es7,C.es9,C.esa,C.ese,C.es5,C.ew5,C.exX,C.eur,C.esR,C.es2,C.etT,C.esb,C.esk,C.esl,C.esm,C.esx,C.esA,C.esB,C.esC,C.esD,C.esE,C.esn,C.eso,C.esp,C.esq,C.esr,C.ess,C.est,C.esu,C.esv,C.esw,C.esy,C.esz,C.etR,C.etQ,C.etP,C.esc,C.esV,C.esT,C.esW,C.esX,C.ety,C.evF,C.evG,C.evD,C.evE,C.exl,C.etq,C.etp,C.euS,C.euR,C.euU,C.euQ,C.euV,C.euP,C.euW,C.euO,C.euX,C.euN,C.euY,C.euM,C.euZ,C.euL,C.ev_,C.euK,C.euD,C.euE,C.euF,C.euC,C.euG,C.euB,C.euH,C.euA,C.euI,C.euz,C.euJ,C.etL,C.etM,C.etF,C.etH,C.etI,C.etJ,C.etK,C.ey2,C.ey3,C.ev1,C.ev0,C.ev4,C.ewr,C.ews,C.ewt,C.ewE,C.ewP,C.ex_,C.ex6,C.ex7,C.ex8,C.ex9,C.exa,C.ewu,C.ewv,C.eww,C.ewx,C.ewy,C.ewz,C.ewA,C.ewB,C.ewC,C.ewD,C.ewF,C.ewG,C.ewH,C.ewI,C.ewJ,C.ewK,C.ewL,C.ewM,C.ewN,C.ewh,C.ewO,C.ewp,C.ewo,C.ewR,C.ewn,C.ewd,C.exc,C.ewm,C.ewc,C.ewa,C.ewl,C.ewb,C.ew9,C.ewV,C.ewk,C.ewW,C.ewX,C.ewY,C.ewZ,C.ewj,C.ex0,C.ex1,C.ex2,C.ewi,C.ex3,C.ewg,C.ex4,C.ewf,C.ex5,C.ewe,C.esP,C.exy,C.exx,C.exz,C.exw,C.etY,C.etX,C.etZ,C.etW,C.exJ,C.exE,C.exI,C.exA,C.exB,C.exC,C.exD,C.exG,C.exH,C.exM,C.etf,C.et2,C.et3,C.et4,C.et1,C.et8,C.et7,C.et0,C.et_,C.etb,C.esZ,C.etc,C.ev6,C.ev5,C.eua,C.eu9,C.eu8,C.eu7,C.eu6,C.eu5,C.eu4,C.eu3,C.eu0,C.eu2,C.eu1,C.eu_,C.eum,C.ew1,C.ew2,C.d0U,C.d1g,C.d1h,C.d0O,C.d0N,C.d0R,C.d0P,C.d0Q,C.eyJ,C.eyz,C.eyI,C.eyA,C.eyB,C.eyv,C.eyw,C.eyx,C.eyy,C.eyL,C.fHG,C.fHH,C.fHI,C.eyb,C.eyc,C.eyd,C.eyg,C.eyh,C.eyk,C.eyl,C.eyj,C.eym,C.eyi,C.eya,C.ey9,C.eyo,C.eyp,C.eyr,C.eys,C.erT,C.erS,C.erO,C.erR,C.eyu,C.eyt,C.fBZ,C.fBY,C.eg_,C.eg0])
t(C.aRc,B.J)
u(B.mc,[C.a3K,C.ax_,C.avH,C.xx,C.xA,C.kU,C.tn,C.Bu,C.rv,C.w1,C.arD,C.IJ,C.ar4,C.uJ,C.mx,C.hF,C.a8B])
u(C.bO_,[C.cxm,C.bO0])
u(C.ch4,[C.ch8,C.asF])
t(C.ch7,C.ch2)
t(C.ch6,C.ch1)
t(C.ch9,C.ch6)
t(C.ch5,C.ch3)
t(C.ch_,C.ch0)
t(C.ba0,B.oR)
t(C.cr7,B.av8)
t(C.a8n,B.xl)
t(C.aVG,B.dH)
t(C.aAy,B.au0)
u(B.ag,[C.a0N,C.Yx,C.Yv,C.aqg,C.VH,C.VK,C.a_O,C.a0k,C.a0j,C.aDN,C.ZG,C.Nn,C.Ze,C.Zz,C.aof,C.aIE,C.UW,C.azn,C.a7F,C.NP,C.ayK,C.JJ,C.a_q,C.VV,C.VW,C.aEb,C.ar9,C.a7G])
u(B.ah,[C.aIX,C.axx,C.axt,C.aDB,C.aDU,C.aDY,C.aFk,C.aHf,C.aHe,C.aLO,C.aBf,C.aLh,C.azD,C.bfU,C.aL2,C.aN8,C.aLg,C.bdN,C.aLM,C.aM_,C.aJY,C.bcy,C.aM0,C.aEe,C.bkj,C.aEc,C.aEf,C.bk2])
u(B.au,[C.axv,C.ade,C.acD,C.bj4,C.adh,C.aeY,C.b0F,C.bst,C.b0Z,C.blD,C.br1,C.aZU,C.b11,C.adk,C.adC,C.b1_,C.II,C.aZX,C.bcN,C.Pt,C.JQ,C.bhr,C.bhq,C.buS])
u(B.Hd,[C.bcf,C.btT,C.aJg,C.beX,C.brp])
u(B.mO,[C.bce,C.b8K,C.brm,C.bbM,C.bfk,C.bhx,C.beq,C.bfh,C.beZ,C.bnT,C.b9T,C.b9w,C.buP,C.brP,C.bqY,C.bej,C.b0X,C.bpV,C.bqV])
t(C.bk_,C.aLO)
t(C.bjm,C.aLh)
t(C.bj6,C.aL2)
t(C.bul,C.aN8)
t(C.bjj,C.aLg)
t(C.bjY,C.aLM)
t(C.bx9,C.aM_)
t(C.aEd,C.bx9)
t(C.bcz,C.aJY)
t(C.aEg,C.aM0)
t(C.buG,B.iU)
t(C.a8A,B.kt)
t(C.chc,C.b2I)
t(C.ai9,C.a2M)
u(B.Xy,[C.aR2,C.aSy])
t(C.awC,C.aR2)
w(C.aLO,B.c9)
w(C.aLh,B.c9)
w(C.aL2,B.c9)
w(C.aLg,B.c9)
w(C.aLM,B.c9)
w(C.aN8,B.c9)
w(C.aJY,B.eW)
w(C.aM_,B.c9)
v(C.bx9,B.eB)
w(C.aM0,B.c9)})()
B.k0(b.typeUniverse,JSON.parse('{"aRM":{"hM":["aRM"]},"nU":{"aRM":[],"hM":["aRM"]},"aRc":{"J":["RE"],"J.E":"RE"},"ba0":{"oR":[]},"a8n":{"xl":[],"od":[]},"aVG":{"dH":[],"cy":[],"t":[]},"aAy":{"aS":[],"d7":["aS"],"aR":[],"cv":[]},"a0N":{"ag":[],"t":[]},"aIX":{"ah":["a0N"]},"Yx":{"ag":[],"t":[]},"Yv":{"ag":[],"t":[]},"axx":{"ah":["Yx"]},"axt":{"ah":["Yv"]},"axv":{"au":[],"t":[]},"aqg":{"ag":[],"t":[]},"aDB":{"ah":["aqg"]},"ade":{"au":[],"t":[]},"acD":{"au":[],"t":[]},"adh":{"au":[],"t":[]},"aeY":{"au":[],"t":[]},"bj4":{"au":[],"t":[]},"VH":{"ag":[],"t":[]},"aDU":{"ah":["VH"]},"b0F":{"au":[],"t":[]},"bcf":{"aB":[]},"bce":{"aB":[]},"btT":{"aB":[]},"b8K":{"aB":[]},"brm":{"aB":[]},"VK":{"ag":[],"t":[]},"aDY":{"ah":["VK"]},"bbM":{"aB":[]},"a_O":{"ag":[],"t":[]},"aFk":{"ah":["a_O"]},"bfk":{"aB":[]},"a0k":{"ag":[],"t":[]},"a0j":{"ag":[],"t":[]},"aDN":{"ag":[],"t":[]},"ZG":{"ag":[],"t":[]},"aHf":{"ah":["a0k"]},"aHe":{"ah":["a0j"]},"bk_":{"ah":["aDN"]},"bhx":{"aB":[]},"aBf":{"ah":["ZG"]},"bst":{"au":[],"t":[]},"b0Z":{"au":[],"t":[]},"blD":{"au":[],"t":[]},"Nn":{"ag":[],"t":[]},"Ze":{"ag":[],"t":[]},"bjm":{"ah":["Nn"]},"br1":{"au":[],"t":[]},"beq":{"aB":[]},"aZU":{"au":[],"t":[]},"azD":{"ah":["Ze"]},"Zz":{"ag":[],"t":[]},"bfU":{"ah":["Zz"]},"bfh":{"aB":[]},"beZ":{"aB":[]},"bnT":{"aB":[]},"b9T":{"aB":[]},"b9w":{"aB":[]},"buP":{"aB":[]},"brP":{"aB":[]},"bqY":{"aB":[]},"bej":{"aB":[]},"aof":{"ag":[],"t":[]},"b11":{"au":[],"t":[]},"bj6":{"ah":["aof"]},"adk":{"au":[],"t":[]},"adC":{"au":[],"t":[]},"aIE":{"ag":[],"t":[]},"UW":{"ag":[],"t":[]},"II":{"au":[],"t":[]},"azn":{"ag":[],"t":[]},"a7F":{"ag":[],"t":[]},"b1_":{"au":[],"t":[]},"b0X":{"aB":[]},"bul":{"ah":["aIE"]},"aJg":{"aB":[]},"bjj":{"ah":["UW"]},"bdN":{"ah":["azn"]},"bjY":{"ah":["a7F"]},"aZX":{"au":[],"t":[]},"beX":{"aB":[]},"bpV":{"aB":[]},"bqV":{"aB":[]},"ayK":{"ag":[],"t":[]},"JJ":{"ag":[],"t":[]},"a_q":{"ag":[],"t":[]},"JQ":{"au":[],"t":[]},"NP":{"ag":[],"t":[]},"aEd":{"ah":["NP"],"eB":[]},"bcz":{"ah":["ayK"]},"bcN":{"au":[],"t":[]},"bcy":{"ah":["JJ"]},"Pt":{"au":[],"t":[]},"aEg":{"ah":["a_q"]},"brp":{"aB":[]},"bhr":{"au":[],"t":[]},"bhq":{"au":[],"t":[]},"VV":{"ag":[],"t":[]},"VW":{"ag":[],"t":[]},"aEb":{"ag":[],"t":[]},"ar9":{"ag":[],"t":[]},"aEe":{"ah":["VV"]},"bkj":{"ah":["VW"]},"aEc":{"ah":["aEb"]},"buG":{"iU":[]},"aEf":{"ah":["ar9"]},"buS":{"au":[],"t":[]},"a7G":{"ag":[],"t":[]},"bk2":{"ah":["a7G"]},"a8A":{"kt":["fu<eT>"],"kh":["fu<eT>"]},"ai9":{"a2M":[]},"aR2":{"j4":[],"fg":[]},"awC":{"j4":[],"fg":[]},"aSy":{"j4":[],"fg":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.ax
return{bu:w("LB"),U:w("vv<q4>"),bz:w("w"),M:w("dD<m>"),bo:w("jC"),g7:w("M6"),gc:w("aA<iA?>"),bq:w("aA<~>"),cc:w("Mj"),fS:w("DV"),an:w("HU"),bm:w("O<RE>"),X:w("O<a2U>"),f3:w("O<aRM>"),aK:w("O<na>"),V:w("O<ac>"),O:w("O<w>"),fA:w("O<lz>"),d5:w("O<aA<bv<G,+icon3d,picture(m?,m?)>>>"),bH:w("O<aA<dL>>"),fG:w("O<aA<~>>"),aF:w("O<ng>"),cd:w("O<ai<jo>>"),ez:w("O<a5<m,aD>>"),d:w("O<a5<m,@>>"),B:w("O<mt>"),h:w("O<jo>"),gE:w("O<zv>"),k:w("O<ok>"),g:w("O<lH>"),D:w("O<i5>"),u:w("O<eM>"),m:w("O<uJ>"),i:w("O<hF>"),aC:w("O<a7X>"),o:w("O<zx>"),e3:w("O<aD>"),dN:w("O<v>"),v:w("O<hv>"),cR:w("O<iS>"),J:w("O<jg>"),gx:w("O<pb<m>>"),f2:w("O<+(a0,m)>"),L:w("O<+(m,m)>"),aD:w("O<+data,mimeType(m,m)>"),G:w("O<+(L,L)>"),ek:w("O<+(G,m)>"),n:w("O<+(G,G)>"),r:w("O<cR>"),s:w("O<m>"),aS:w("O<iU>"),p:w("O<t>"),eR:w("O<fg>"),fT:w("O<b8s>"),bx:w("O<aEP>"),gz:w("O<af7>"),x:w("O<L>"),t:w("O<G>"),dS:w("O<aB?>"),bA:w("O<v?>"),Z:w("O<G?>"),cA:w("O<cg>"),A:w("cs<ah<ag>>"),gL:w("ai<ok>"),R:w("ai<i5>"),j:w("ai<@>"),bW:w("ai<G>"),e:w("bv<G,+icon3d,picture(m?,m?)>"),P:w("a5<m,@>"),f:w("a5<@,@>"),gI:w("a5<G,+icon3d,picture(m?,m?)>"),bR:w("M<hF,t>"),eC:w("M<nL,m>"),cT:w("M<jH,D>"),dv:w("M<m,m>"),f0:w("M<m,t>"),gN:w("M<G,pJ>"),gh:w("M<mx,jq<mx>>"),w:w("iE"),ei:w("iA"),g2:w("rl"),fB:w("Ew"),b6:w("zv"),gX:w("a7P"),dt:w("lg"),ea:w("ok"),bt:w("lH"),I:w("i5"),F:w("eM"),fO:w("mx"),ff:w("uJ"),fP:w("hF"),Q:w("w1"),dO:w("ar5"),a:w("cr"),C:w("aD"),dw:w("asG"),di:w("a8B"),Y:w("eT"),fz:w("+(m,m)"),dL:w("+(G,G)"),eb:w("+claimCode,qrPayload(m?,m)"),aH:w("+icon3d,picture(m?,m?)"),cz:w("F1"),dB:w("dx<v>"),bJ:w("dx<m>"),_:w("e1<m>"),N:w("m"),fw:w("q4"),bO:w("as"),K:w("bq<v>"),b:w("bq<L>"),E:w("dL"),W:w("cx<m>"),ac:w("cx<G>"),ex:w("jM<lH>"),cI:w("jM<m>"),cl:w("jM<L>"),b4:w("a_<ld>"),a8:w("a_<m7>"),fR:w("a_<+(m,m)>"),co:w("ea<v>"),l:w("t"),b2:w("bX<~>"),ev:w("q6<dY>"),dT:w("bg<~>"),cQ:w("aAy"),q:w("n2"),y:w("R"),gR:w("L"),z:w("@"),S:w("G"),at:w("ba?"),gw:w("ai<a5<m,@>>?"),aT:w("ai<i5>?"),c:w("ai<@>?"),aP:w("iA?"),af:w("i5?"),go:w("b13?"),a6:w("a7Y?"),cK:w("aD?"),bZ:w("+bytes,dataUrl,fileName(dL,m,m)?"),gl:w("+claimCode,qrPayload,token(m?,m,m)?"),T:w("m?"),dd:w("dL?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aXg=new B.bI(A.az,null,null,H.aof,null)
D.aXq=new B.dc(0,-0.15)
D.aXs=new B.dc(0.62,0)
D.aXv=new B.dc(-0.35,-0.45)
D.aXF=new B.dc(0.9,-0.85)
D.aYY=new B.bp(H.SK,H.SK,A.hf,A.hf)
D.aZc=new B.az(A.b6,1,A.q,-1)
D.bhV=new B.w(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aZo=new B.az(D.bhV,1,A.q,-1)
D.aZA=new B.az(A.aE,1.5,A.q,-1)
D.aZF=new B.az(A.b6,1.6,A.q,-1)
D.aZV=new B.az(A.aE,1.4,A.q,-1)
D.b0h=new B.o(null,null,null,null,null,L.GO,A.a5)
D.bYi=new B.a8(A.a3,A.a8,A.x,G.a3l,null,null)
D.b0p=new B.o(null,null,null,null,null,D.bYi,A.a5)
D.abt=new B.o(A.ax,null,null,A.t8,null,null,A.n)
D.bbU=new B.w(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.bhS=new B.w(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cVI=w([D.bbU,D.bhS],x.O)
D.ej8=new B.bT(A.A,0.5,A.x,null,0,D.cVI,null,null)
D.b0I=new B.o(null,null,null,null,null,D.ej8,A.a5)
D.X7=new B.w(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.b_a=new B.bO(P.v4,A.Y,A.Y,A.Y)
D.b0K=new B.o(D.X7,null,D.b_a,null,null,null,A.n)
D.c_2=new B.a8(A.a3,A.a8,A.x,A.Qm,null,null)
D.b0R=new B.o(null,null,null,null,null,D.c_2,A.a5)
D.ad1=new B.w(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.b0U=new B.o(D.ad1,null,null,A.qI,null,null,A.n)
D.b0Y=new B.o(A.ji,null,null,null,null,null,A.a5)
D.b10=new B.o(Z.ae8,null,H.ab7,A.mc,null,null,A.n)
D.E8=new B.o(A.dM,null,null,null,null,null,A.a5)
D.b17=new B.o(null,null,null,null,null,E.w5,A.a5)
D.d_D=w([E.af2,A.c_],x.O)
D.bZE=new B.a8(A.b0,A.b4,A.x,D.d_D,null,null)
D.b1b=new B.o(null,null,null,A.mc,null,D.bZE,A.n)
D.dao=w([A.bj,A.dM,A.jY],x.O)
D.a1u=new B.a8(A.az,A.aC,A.x,D.dao,null,null)
D.b1o=new B.o(null,null,null,null,null,D.a1u,A.n)
D.b1p=new B.o(D.ad1,null,null,A.kL,null,null,A.n)
D.cqg=w([A.dc,A.bj],x.O)
D.bZv=new B.a8(A.az,A.aC,A.x,D.cqg,null,null)
D.b1t=new B.o(null,null,null,null,null,D.bZv,A.n)
D.b1D=new B.o(null,null,null,null,null,G.uf,A.a5)
D.b1X=new B.o(A.af4,null,null,null,null,null,A.a5)
D.bcJ=new B.w(0.5647058823529412,0,0,0,A.t)
D.abD=new B.ac(0,A.G,D.bcJ,A.Sf,28)
D.b44=new B.aVT()
D.b4D=new C.cr7()
D.b4P=new C.ba0()
D.ac8=new B.cp(A.A,null,null,A.a1j,null)
D.b7m=new B.fk(null,null,null,null,null,E.n5,null,null,null,null)
D.b5l=new B.cp(A.A,null,null,D.b7m,null)
D.bIV=new B.ae(A.dX,28,A.c,null,null,null)
D.b5P=new B.cp(A.A,null,null,D.bIV,null)
D.b7j=new B.fk(2,null,null,null,null,A.c0,null,null,null,null)
D.b6a=new B.cp(A.A,null,null,D.b7j,null)
D.bJf=new B.ae(L.NY,40,A.bz,null,null,null)
D.b6b=new B.cp(A.A,null,null,D.bJf,null)
D.b8c=new B.w(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b8p=new B.w(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b8N=new B.w(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b8U=new B.w(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b9o=new B.w(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b9E=new B.w(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b9F=new B.w(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.KV=new B.w(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.ba4=new B.w(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.baa=new B.w(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.adj=new B.w(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.baW=new B.w(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.bbJ=new B.w(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.ady=new B.w(1,1,1,0.9725490196078431,A.t)
D.bc2=new B.w(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.bcc=new B.w(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.bcg=new B.w(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.bct=new B.w(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.bcO=new B.w(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.bed=new B.w(1,1,0.996078431372549,0.9725490196078431,A.t)
D.WS=new B.w(0.8509803921568627,0,0,0,A.t)
D.bem=new B.w(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.bet=new B.w(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.aer=new B.w(0.6,0,0,0,A.t)
D.aet=new B.w(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.bfR=new B.w(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.tt=new B.w(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.bgf=new B.w(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.bgF=new B.w(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.bh2=new B.w(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.aff=new B.w(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.Xh=new B.w(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.AT=new B.w(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.Lv=new B.w(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.jf=new B.w(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.afD=new B.w(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.Xt=new B.w(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.bkq=new B.w(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.bkU=new B.w(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.bl7=new B.w(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.XO=new B.w(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.bmg=new B.w(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.xv=new B.w(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.bmM=new B.w(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.bn5=new B.hL(A.b_,!0,null,null)
D.ffl=new B.H(!0,A.aA,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFk=new B.y("Bio link",null,D.ffl,null,null,null,null,null,null,null,null,null)
D.b64=new B.cp(A.A,null,null,D.fFk,null)
D.bnl=new B.hL(A.We,!0,D.b64,null)
D.LU=new C.a3K(0,"none")
D.agG=new C.a3K(1,"deflate")
D.agH=new C.a3K(2,"bzip2")
D.boi=new B.ko(0.165,0.84,0.44,1)
D.d_X=w([A.cc,A.dR,A.aE],x.O)
D.bYM=new B.a8(A.az,A.aC,A.x,D.d_X,null,null)
D.b0m=new B.o(null,null,null,null,null,D.bYM,A.n)
D.bS8=new B.ae(A.eT,null,A.ad,null,null,null)
D.b6G=new B.cp(A.A,null,null,D.bS8,null)
D.boP=new B.kR(D.b0m,A.bf,D.b6G,null)
D.bkG=new B.w(0.058823529411764705,1,1,1,A.t)
D.d3b=w([A.bE,A.qS,A.qS,D.bkG],x.O)
D.cHu=w([0,0.32,0.7,1],x.x)
D.bZk=new B.a8(A.az,A.aC,A.x,D.d3b,D.cHu,null)
D.b0b=new B.o(null,null,null,null,null,D.bZk,A.n)
D.boV=new B.kR(D.b0b,A.bf,null,null)
D.bq2=new B.mm(1,1,null,null,null,A.bn,null)
D.bq5=new B.mm(1,null,null,null,null,D.Xt,null)
D.bqz=new B.ba(125e4)
D.bqF=new B.ba(17e4)
D.bqP=new B.ba(35964e8)
D.bqV=new B.ba(55e4)
D.bqZ=new B.ba(68e4)
D.brp=new B.ij(0,0,0,5)
D.brG=new B.Q(0,16,16,0)
D.brR=new B.Q(0,36,0,36)
D.brY=new B.Q(0,54,0,0)
D.bs4=new B.Q(10,0,10,3)
D.bsf=new B.ij(10,16,10,10)
D.bsr=new B.Q(10,6,4,6)
D.bsu=new B.Q(10,8,10,6)
D.ahD=new B.Q(11,8,11,11)
D.bsy=new B.Q(12,0,12,24)
D.bsK=new B.Q(12,12,12,4)
D.bsN=new B.Q(12,12,8,12)
D.bt1=new B.Q(12,8,8,12)
D.bto=new B.Q(14,14,14,0)
D.btt=new B.Q(14,14,14,90)
D.btM=new B.Q(16,10,16,16)
D.btN=new B.Q(16,10,16,20)
D.air=new B.Q(16,6,16,28)
D.bul=new B.Q(18,0,18,10)
D.bun=new B.Q(18,0,18,30)
D.bup=new B.Q(18,10,18,12)
D.buq=new B.Q(18,10,18,14)
D.buH=new B.Q(18,16,14,18)
D.buM=new B.Q(18,18,18,12)
D.buS=new B.Q(18,26,18,12)
D.buX=new B.Q(18,34,18,34)
D.buY=new B.Q(18,4,18,14)
D.bv3=new B.Q(18,8,18,24)
D.bvl=new B.Q(20,16,14,4)
D.bvq=new B.Q(20,18,12,4)
D.bvv=new B.Q(20,20,12,20)
D.bvy=new B.Q(20,22,20,20)
D.bvD=new B.Q(20,6,20,6)
D.bvN=new B.Q(22,18,22,18)
D.bvV=new B.Q(22,24,22,0)
D.bvY=new B.Q(22,24,22,4)
D.bw5=new B.Q(22,60,22,22)
D.bwb=new B.Q(24,24,24,22)
D.bwl=new B.Q(26,10,60,10)
D.bwt=new B.Q(28,44,28,44)
D.bwK=new B.Q(32,44,32,44)
D.bwS=new B.Q(38,30,38,20)
D.bwX=new B.Q(4,0,0,6)
D.bx8=new B.ij(4,4,4,4)
D.bxy=new B.ij(6,5,6,5)
D.bxC=new B.Q(6,6,8,6)
D.bxN=new B.Q(8,14,8,14)
D.bxO=new B.Q(8,22,8,22)
D.bxW=new B.Q(8,6,12,6)
D.by4=new B.Q(8,8,8,4)
D.ajk=new B.Q(9,9,9,6)
D.byf=new B.ij(2.5,2.5,2.5,2.5)
D.byg=new B.Q(10.5,0,10.5,0)
D.byh=new B.Q(7,1.5,7,1.5)
D.cSN=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.byx=new B.yU(null,null,D.cSN,A.Ax)
D.cPP=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.byy=new B.yU(null,null,D.cPP,A.Ax)
D.aRo=new B.H(!0,A.aA,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEE=new B.y("WORD DESIGN",null,D.aRo,null,null,null,null,null,null,null,null,null)
D.bz6=new B.bB(1,A.bh,D.fEE,null)
D.fEj=new B.y("Slides database",null,Aa.rT,null,null,null,null,null,null,null,null,null)
D.fBx=new B.y("Admin only \xb7 keep as many as you like",null,U.aQS,null,null,null,null,null,null,null,null,null)
D.diC=w([D.fEj,A.bC,D.fBx],x.p)
D.bnL=new B.fm(A.ah,A.e,A.j,A.F,null,A.p,null,0,D.diC,null)
D.bz9=new B.bB(1,A.bh,D.bnL,null)
D.fvZ=new B.y("NGMY logo",null,A.fS,null,null,null,null,null,null,null,null,null)
D.bzc=new B.bB(1,A.bh,D.fvZ,null)
D.fdc=new B.H(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGB=new B.y("TALK TO THE EDITOR",null,D.fdc,null,null,null,null,null,null,null,null,null)
D.bzt=new B.bB(1,A.bh,D.fGB,null)
D.fpP=new B.y("Tell the AI what to change",null,Aa.rT,null,null,null,null,null,null,null,null,null)
D.bzO=new B.bB(1,A.bh,D.fpP,null)
D.bAG=new B.DK(!0,"video/mp4")
D.fbu=new B.H(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnR=new B.y("Move presentations between devices",null,D.fbu,null,null,null,!1,null,null,1,null,null)
D.bAK=new B.qp(A.dZ,A.a3,A.f,D.fnR,null)
D.fp1=new B.y("Edit in Slides",null,A.j8,null,null,null,null,null,null,null,null,null)
D.bAL=new B.qp(A.dZ,A.A,A.f,D.fp1,null)
D.bB_=new B.dq(1,A.co,D.bAL,null)
D.a_R=new B.a0(60988,"MaterialIcons",!1)
D.bEo=new B.a0(61352,"MaterialIcons",!1)
D.akT=new B.a0(61531,"MaterialIcons",!1)
D.bFD=new B.a0(63062,"MaterialIcons",!1)
D.bFL=new B.a0(63109,"MaterialIcons",!1)
D.bFX=new B.a0(63206,"MaterialIcons",!1)
D.alD=new B.a0(63238,"MaterialIcons",!1)
D.a0l=new B.a0(63365,"MaterialIcons",!1)
D.a0m=new B.a0(63367,"MaterialIcons",!1)
D.a0n=new B.a0(63368,"MaterialIcons",!1)
D.alP=new B.a0(63384,"MaterialIcons",!1)
D.bGv=new B.a0(63525,"MaterialIcons",!1)
D.bGz=new B.a0(63568,"MaterialIcons",!1)
D.bGU=new B.a0(983072,"MaterialIcons",!1)
D.bHi=new B.a0(983271,"MaterialIcons",!0)
D.amW=new B.a0(983965,"MaterialIcons",!1)
D.amX=new B.a0(983966,"MaterialIcons",!1)
D.bIg=new B.a0(984592,"MaterialIcons",!1)
D.bIy=new B.ae(A.tZ,16,A.aA,null,null,null)
D.bIF=new B.ae(A.mA,null,A.c,null,null,null)
D.an6=new B.ae(A.q6,18,A.c,null,null,null)
D.bIW=new B.ae(A.BC,18,O.li,null,null,null)
D.bJB=new B.ae(A.js,11,null,null,null,null)
D.bJL=new B.ae(A.a06,null,A.es,null,null,null)
D.bKj=new B.ae(A.rg,18,A.aA,null,null,null)
D.bKp=new B.ae(A2.BQ,14,null,null,null,null)
D.bKq=new B.ae(A.e7,28,A.c9,null,null,null)
D.bKC=new B.ae(A.q7,20,A.c,null,null,null)
D.bKJ=new B.ae(A.yp,null,null,null,null,null)
D.bKP=new B.ae(A.j1,18,A.hm,null,null,null)
D.bKU=new B.ae(A.lm,null,null,null,null,null)
D.bFG=new B.a0(63065,"MaterialIcons",!1)
D.bLx=new B.ae(D.bFG,15,A.c,null,null,null)
D.bFM=new B.a0(63113,"MaterialIcons",!1)
D.bLD=new B.ae(D.bFM,null,A.ad,null,null,null)
D.bM0=new B.ae(A.vN,22,A.bM,null,null,null)
D.bMk=new B.ae(A.vO,18,null,null,null,null)
D.bMq=new B.ae(A.BT,12,A.c,null,null,null)
D.bHT=new B.a0(983687,"MaterialIcons",!1)
D.bMB=new B.ae(D.bHT,null,A.bj,null,null,null)
D.bMJ=new B.ae(A.ho,null,A.bj,null,null,null)
D.bN1=new B.ae(A.p0,22,A.c,null,null,null)
D.bN5=new B.ae(A.cD,13,A.c,null,null,null)
D.bNb=new B.ae(A.e7,26,A.av,null,null,null)
D.bNe=new B.ae(A.rl,26,A.c,null,null,null)
D.Oc=new B.ae(A.js,8,A.c,null,null,null)
D.bNx=new B.ae(A.q6,40,A.c,null,null,null)
D.bNy=new B.ae(A.bDl,null,null,null,null,null)
D.bNC=new B.ae(A.u7,20,null,null,null,null)
D.bHS=new B.a0(983683,"MaterialIcons",!1)
D.bNM=new B.ae(D.bHS,null,A.aZ,null,null,null)
D.bNN=new B.ae(A.js,16,A.bj,null,null,null)
D.bO7=new B.ae(A.rm,null,null,null,null,null)
D.anE=new B.ae(A.vQ,22,A.c,null,null,null)
D.bOb=new B.ae(A.dX,17,A.c,null,null,null)
D.anF=new B.ae(A.js,9,A.c,null,null,null)
D.bOg=new B.ae(A.vK,null,null,null,null,null)
D.bDC=new B.a0(57744,"MaterialIcons",!1)
D.bOn=new B.ae(D.bDC,null,null,null,null,null)
D.bOq=new B.ae(A.vK,16,null,null,null,null)
D.bIp=new B.a0(985181,"MaterialIcons",!1)
D.GF=new B.ae(D.bIp,null,null,null,null,null)
D.bOC=new B.ae(A.lm,16,A.bM,null,null,null)
D.bHK=new B.a0(983615,"MaterialIcons",!1)
D.bOE=new B.ae(D.bHK,12,A.c,null,null,null)
D.anL=new B.ae(A.y7,16,null,null,null,null)
D.bOM=new B.ae(A.dX,21,A.c,null,null,null)
D.bOR=new B.ae(A.ho,17,A.c,null,null,null)
D.bOS=new B.ae(A.vN,null,null,null,null,null)
D.bP8=new B.ae(A.a0Y,20,A.aA,null,null,null)
D.bPn=new B.ae(A.o5,22,E.n5,null,null,null)
D.bPu=new B.ae(A.q5,13,A.ad,null,null,null)
D.bPw=new B.ae(A.amI,20,A.aA,null,null,null)
D.bDj=new B.a0(57495,"MaterialIcons",!1)
D.bPB=new B.ae(D.bDj,null,null,null,null,null)
D.bPF=new B.ae(A.o6,18,A.c,null,null,null)
D.bQ0=new B.ae(A.ub,28,A.c,null,null,null)
D.bQa=new B.ae(D.alD,null,A.aE,null,null,null)
D.bQb=new B.ae(A.q7,22,A.c,null,null,null)
D.anU=new B.ae(A.a_N,16,null,null,null,null)
D.bQX=new B.ae(A.vN,32,A.c,null,null,null)
D.bRF=new B.ae(A.j3,22,A.c,null,null,null)
D.bRJ=new B.ae(A.rl,22,A.ad,null,null,null)
D.ao8=new B.ae(A.tZ,null,A.bX,null,null,null)
D.bSD=new B.ae(A.tY,18,null,null,null,null)
D.bTe=new B.ae(A.dX,18,A.bH,null,null,null)
D.a1m=new B.ae(A.cD,18,A.aA,null,null,null)
D.bTk=new B.ae(A.amC,null,null,null,null,null)
D.bTL=new B.e3(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aRb,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eA,!0,null,null,null,null)
D.f3F=new B.H(!0,A.bK,null,null,null,null,null,A.cx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bU2=new B.e3(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.f3F,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.af,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eA,!0,null,null,null,null)
D.bUt=new B.e3(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eA,!0,null,null,null,null)
D.cWF=w([A.dM,A.aE],x.O)
D.bWx=new B.a8(A.a3,A.a8,A.x,D.cWF,null,null)
D.bWJ=new B.a8(A.b0,A.b4,A.Ul,A.avd,null,null)
D.b8D=new B.w(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.bcR=new B.w(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.bfS=new B.w(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.baO=new B.w(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cHw=w([D.b8D,D.bcR,D.bfS,D.baO],x.O)
D.bX1=new B.a8(A.az,A.aC,A.x,D.cHw,A.Hd,null)
D.diL=w([A.cs,A.bD,A.b6],x.O)
D.bX3=new B.a8(A.b0,A.b4,A.Ul,D.diL,null,null)
D.dka=w([A.bj,A.cb],x.O)
D.bX7=new B.a8(A.a3,A.a8,A.x,D.dka,null,null)
D.df8=w([A.hl,A.d5,A.aF],x.O)
D.bX9=new B.a8(A.az,A.aC,A.x,D.df8,null,null)
D.d1D=w([A.cT,A.fd],x.O)
D.bXd=new B.a8(A.a3,A.a8,A.x,D.d1D,null,null)
D.diE=w([O.li,A.d5],x.O)
D.aoU=new B.a8(A.a3,A.a8,A.x,D.diE,null,null)
D.bds=new B.w(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.diB=w([D.bds,D.xv,A.c0],x.O)
D.bXi=new B.a8(A.a3,A.a8,A.x,D.diB,null,null)
D.cYk=w([A.b2,A.cS,A.eB],x.O)
D.bXj=new B.a8(A.az,A.aC,A.x,D.cYk,null,null)
D.Or=new B.a8(A.a3,A.a8,A.x,A.Hp,null,null)
D.blu=new B.w(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cAy=w([D.blu,A.c0,A.jh],x.O)
D.aoZ=new B.a8(A.az,A.aC,A.x,D.cAy,null,null)
D.d6U=w([A.vf,A.ay,D.AT],x.O)
D.bYk=new B.a8(A.a3,A.a8,A.x,D.d6U,null,null)
D.bmN=new B.w(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.bbI=new B.w(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.bgS=new B.w(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cXr=w([D.bmN,D.bbI,D.bgS],x.O)
D.ap_=new B.a8(A.a3,A.a8,A.x,D.cXr,null,null)
D.bdu=new B.w(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.c_i=w([Au.agn,D.bdu],x.O)
D.bYt=new B.a8(A.b0,A.b4,A.x,D.c_i,null,null)
D.cVw=w([A.n4,A.bz],x.O)
D.bYx=new B.a8(A.b0,A.b4,A.x,D.cVw,null,null)
D.dc0=w([A.aE,A.dR],x.O)
D.bYD=new B.a8(A.a3,A.a8,A.x,D.dc0,null,null)
D.afp=new B.w(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.awX=w([D.afp,D.jf,D.KV],x.O)
D.bZ4=new B.a8(A.az,A.aC,A.x,D.awX,null,null)
D.cAq=w([A.dx,A.dI],x.O)
D.bZf=new B.a8(A.b0,A.b4,A.x,D.cAq,null,null)
D.d92=w([A.vb,Ax.EM],x.O)
D.c_4=new B.a8(A.a3,A.a8,A.x,D.d92,null,null)
D.fxv=new B.y("Which Bio link?",null,A.cC,null,null,null,null,null,null,null,null,null)
D.c_f=new B.pQ(null,D.fxv,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.yQ=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a5i=new C.kU(2,"elegantNavy")
D.hcf=w([A.Xf,D.jf,A.c0],x.O)
D.jO=new C.xx(0,"classic")
D.a55=new C.jo("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a5i,4294967035,4279378237,4290283019,D.jO)
D.aGc=new C.kU(3,"elegantGold")
D.b8b=new B.w(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b97=new B.w(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.adY=new B.w(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.hbI=w([D.b8b,D.b97,D.adY],x.O)
D.a53=new C.jo("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aGc,4294966515,4281016592,4289102906,D.jO)
D.dFG=new C.kU(22,"goldRibbon")
D.hbE=w([A.Xf,D.jf,A.i2],x.O)
D.a4X=new C.jo("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dFG,4294967035,4279378237,4291404327,D.jO)
D.dFH=new C.kU(23,"goldBaroque")
D.aeC=new B.w(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.hbK=w([D.aeC,A.ay,A.jh],x.O)
D.a4Y=new C.jo("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dFH,4294964964,4283053072,4292128567,D.jO)
D.dFJ=new C.kU(4,"elegantEmerald")
D.bag=new B.w(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.bbb=new B.w(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.hbQ=w([D.bag,D.bbb,A.i2],x.O)
D.a4Z=new C.jo("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dFJ,4294376440,4279122734,4291404327,D.jO)
D.dFK=new C.kU(5,"elegantBurgundy")
D.beS=new B.w(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.hbX=w([D.beS,A.adb,A.i2],x.O)
D.a51=new C.jo("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dFK,4294965238,4283043359,4291404327,D.jO)
D.dFD=new C.kU(19,"goldFiligree")
D.LC=new B.w(1,1,0.984313725490196,0.9529411764705882,A.t)
D.hbL=w([D.LC,A.ay,A.jh],x.O)
D.a5_=new C.jo("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dFD,4294966259,4279378237,4292128567,D.jO)
D.dFE=new C.kU(20,"goldLaurel")
D.blk=new B.w(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.hbY=w([A.KN,A.i2,D.blk],x.O)
D.a50=new C.jo("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dFE,4294966776,4282000405,4291404327,D.jO)
D.dFF=new C.kU(21,"goldCrest")
D.ad4=new B.w(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.blr=new B.w(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.hbN=w([D.ad4,A.ay,D.blr],x.O)
D.a54=new C.jo("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dFF,4294965484,4283053072,4292128567,D.jO)
D.dFI=new C.kU(24,"goldStar")
D.bmF=new B.w(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.hbR=w([D.bmF,A.ay,D.jf],x.O)
D.a52=new C.jo("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dFI,4294966518,4279378237,4292128567,D.jO)
D.GQ=w([D.a55,D.a53,D.a4X,D.a4Y,D.a4Z,D.a51,D.a5_,D.a50,D.a54,D.a52],x.h)
D.qk=new C.mx(0,"blank")
D.S4=new C.mx(1,"title")
D.mJ=new C.mx(2,"titleContent")
D.e_j=new C.mx(3,"twoColumn")
D.CS=new C.mx(4,"section")
D.e_k=new C.mx(5,"comparison")
D.I_=new C.mx(6,"flashcard")
D.I0=new C.mx(7,"quiz")
D.I1=new C.mx(8,"worksheet")
D.apm=w([D.qk,D.S4,D.mJ,D.e_j,D.CS,D.e_k,D.I_,D.I0,D.I1],B.ax("O<mx>"))
D.axZ=w([An.WD,A.dI],x.O)
D.ky=w([A.c0,A.bM,A.i1,A.hK,D.AT],x.O)
D.dBz=new C.j1("fireworks","Royal Fireworks","Thank you for celebrating with us",D.axZ,D.ky)
D.blC=new B.w(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.beQ=new B.w(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cVJ=w([D.blC,D.beQ],x.O)
D.dBq=new C.j1("confetti","Golden Confetti","Together we rise",D.cVJ,D.ky)
D.cSS=w([A.nM,A.Wh],x.O)
D.dBr=new C.j1("crown","Crown of Glory","Built for our community",D.cSS,D.ky)
D.bby=new B.w(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.bev=new B.w(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cZD=w([D.bby,D.bev],x.O)
D.uh=w([A.bK,A.aQ,A.c,A.aL,A.ak],x.O)
D.dBl=new C.j1("aurora","Aurora Gala","A brighter future, together",D.cZD,D.uh)
D.bfU=new B.w(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.d98=w([G.acI,D.bfU],x.O)
D.dBC=new C.j1("champagne","Champagne Toast","Cheers to every member",D.d98,D.ky)
D.dBD=new C.j1("diamonds","Diamond Rain","Every member is a jewel",X.ayD,D.uh)
D.b9_=new B.w(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.be0=new B.w(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.deq=w([D.b9_,D.be0],x.O)
D.dBg=new C.j1("starburst","Golden Starburst","Thank you!",D.deq,D.ky)
D.c_p=w([A.fc,A.xp],x.O)
D.acR=new B.w(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.Q_=w([A.oK,A.iy,A.vq,A.nN,D.acR],x.O)
D.dBK=new C.j1("balloons","Luxury Balloons","Let's celebrate",D.c_p,D.Q_)
D.cSa=w([A.Wr,A.w],x.O)
D.dBy=new C.j1("galaxy","Galaxy Spiral","The sky is not the limit",D.cSa,D.uh)
D.bjG=new B.w(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.d5G=w([A.kr,D.bjG],x.O)
D.dBt=new C.j1("redcarpet","Red Carpet","Tonight we shine",D.d5G,D.ky)
D.bhv=new B.w(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.bfH=new B.w(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.da4=w([D.bhv,D.bfH],x.O)
D.dBi=new C.j1("coins","Gold Coin Rain","Every contribution counts",D.da4,D.ky)
D.dh3=w([A.dx,A.hJ],x.O)
D.dBo=new C.j1("lanterns","Sky Lanterns","Lighting the way together",D.dh3,D.ky)
D.bcx=new B.w(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cQ8=w([A.xr,D.bcx],x.O)
D.dBk=new C.j1("hearts","Floating Hearts","Made with love",D.cQ8,D.Q_)
D.b9x=new B.w(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.bam=new B.w(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.diz=w([D.b9x,D.bam],x.O)
D.dBJ=new C.j1("petals","Rose Petals","Thank you, from our hearts",D.diz,D.Q_)
D.bkE=new B.w(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.deK=w([A.lh,D.bkE],x.O)
D.dBf=new C.j1("butterflies","Golden Butterflies","New beginnings",D.deK,D.ky)
D.bgP=new B.w(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cR6=w([D.bgP,A.w],x.O)
D.dBB=new C.j1("neon","Neon Night","Let's go!",D.cR6,D.uh)
D.bdH=new B.w(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.dcb=w([A.Lc,D.bdH],x.O)
D.dBE=new C.j1("disco","Disco Ball","Party time",D.dcb,D.uh)
D.bhm=new B.w(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.dbJ=w([A.hl,D.bhm],x.O)
D.dBj=new C.j1("sunrise","Golden Sunrise","A new day for our community",D.dbJ,D.ky)
D.dbl=w([A.qV,A.dI],x.O)
D.dBF=new C.j1("pearls","Ocean Pearls","Deep roots, bright future",D.dbl,D.uh)
D.bbD=new B.w(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.dbz=w([D.bbD,A.dI],x.O)
D.dBI=new C.j1("snow","Winter Gala","Warm wishes to all",D.dbz,D.uh)
D.b8l=new B.w(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b9i=new B.w(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.dht=w([D.b8l,D.b9i],x.O)
D.dBx=new C.j1("laurel","Laurel Victory","We did it together",D.dht,D.ky)
D.b8a=new B.w(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.ber=new B.w(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cPc=w([D.b8a,D.ber],x.O)
D.dBH=new C.j1("ribbons","Silk Ribbons","Elegance in every step",D.cPc,D.ky)
D.bfq=new B.w(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.cAn=w([G.AS,D.bfq],x.O)
D.dBu=new C.j1("kente","Kente Pride","Proud of our roots",D.cAn,D.ky)
D.bi3=new B.w(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.bkY=new B.w(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.d0k=w([D.bi3,D.bkY],x.O)
D.dBp=new C.j1("trophy","Trophy Shine","Winners together",D.d0k,D.ky)
D.dbF=w([Ao.L0,A.w],x.O)
D.dBh=new C.j1("shooting","Shooting Stars","Make a wish",D.dbF,D.uh)
D.b8s=new B.w(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.agb=new B.w(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.dhK=w([D.b8s,D.agb],x.O)
D.dBv=new C.j1("bokeh","Golden Bokeh","Shine bright",D.dhK,D.ky)
D.b8P=new B.w(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.d6w=w([D.b8P,A.w],x.O)
D.dBn=new C.j1("orbits","Golden Orbits","Always moving forward",D.d6w,D.ky)
D.bkF=new B.w(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.d34=w([A.adU,D.bkF],x.O)
D.dBs=new C.j1("flowers","Blooming Garden","Growing together",D.d34,D.Q_)
D.b8B=new B.w(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b9c=new B.w(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.dgy=w([D.b8B,D.b9c],x.O)
D.dBm=new C.j1("music","Music Party","Celebrate with us",D.dgy,D.uh)
D.ba5=new B.w(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.bln=new B.w(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cQl=w([D.ba5,D.bln],x.O)
D.dBG=new C.j1("mandala","Royal Mandala","Harmony and unity",D.cQl,D.ky)
D.d39=w([G.AS,D.agb],x.O)
D.dBA=new C.j1("sparklers","Golden Sparklers","Light up the night",D.d39,D.ky)
D.dBw=new C.j1("city","City Lights","The whole city celebrates",D.axZ,D.ky)
D.GZ=w([D.dBz,D.dBq,D.dBr,D.dBl,D.dBC,D.dBD,D.dBg,D.dBK,D.dBy,D.dBt,D.dBi,D.dBo,D.dBk,D.dBJ,D.dBf,D.dBB,D.dBE,D.dBj,D.dBF,D.dBI,D.dBx,D.dBH,D.dBu,D.dBp,D.dBh,D.dBv,D.dBn,D.dBs,D.dBm,D.dBG,D.dBA,D.dBw],B.ax("O<j1>"))
D.eoP=new B.z("","No ring")
D.eEo=new B.z("platinum","Platinum")
D.eAI=new B.z("glow","Glow")
D.esn=new B.z("double","Double line")
D.erh=new B.z("framed","Gallery frame")
D.eoo=new B.z("rosegold","Rose gold")
D.eBt=new B.z("jewels","Jeweled")
D.ey9=new B.z("aurora","Aurora")
D.Cb=w([D.eoP,A.a6y,D.eEo,D.eAI,I.aMK,D.esn,A.a6A,D.erh,D.eoo,D.eBt,D.ey9],x.L)
D.cjQ=w([D.a5_,D.a50,D.a54,D.a4X,D.a4Y,D.a52],x.h)
D.bP_=new B.ae(G.akt,16,null,null,null,null)
D.b3q=new B.vv(A.bi,D.bP_,null,x.U)
D.bDL=new B.a0(58027,"MaterialIcons",!1)
D.bIE=new B.ae(D.bDL,16,null,null,null,null)
D.b3o=new B.vv(A.L,D.bIE,null,x.U)
D.bDM=new B.a0(58030,"MaterialIcons",!1)
D.bMH=new B.ae(D.bDM,16,null,null,null,null)
D.b3r=new B.vv(A.dN,D.bMH,null,x.U)
D.cq2=w([D.b3q,D.b3o,D.b3r],B.ax("O<vv<q4>>"))
D.cxI=w([A.AW,A.hi],x.O)
D.cxJ=w([A.b2,A.bd,A.eB],x.O)
D.PO=w([A.bM,A.hK,A.i1,A.ay,A.nN],x.O)
D.cAt=w([A.c0,D.jf,D.KV],x.O)
D.cB0=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.emc=new B.z(4278913286,4280030216)
D.emu=new B.z(4279373061,4278518787)
D.emB=new B.z(4279898630,4278847235)
D.d_H=w([D.emc,D.emu,D.emB],x.n)
D.cWp=w(["\u265b","\u269c","\u2726"],x.s)
D.dFB=new C.xz("Royal Onyx & Gold",D.d_H,4292128567,4294370209,4294965479,3874020544,D.cWp)
D.em_=new B.z(4278326799,4278598442)
D.em1=new B.z(4278395929,4278258953)
D.em8=new B.z(4278599728,4278327826)
D.dgV=w([D.em_,D.em1,D.em8],x.n)
D.cQZ=w(["\u269c","\u2756","\u2727"],x.s)
D.dFy=new C.xz("Imperial Emerald",D.dgV,4293050997,4294699968,4294180856,3872254170,D.cQZ)
D.em2=new B.z(4278455076,4278918747)
D.em7=new B.z(4278587439,4278322714)
D.eml=new B.z(4279051376,4278455076)
D.df4=w([D.em2,D.em7,D.eml],x.n)
D.d7b=w(["\u2654","\u2726","\u2748"],x.s)
D.dFs=new C.xz("Sapphire Crown",D.df4,4291417834,4294967295,4294310143,3871986666,D.d7b)
D.emz=new B.z(4279894534,4283041554)
D.emL=new B.z(4281008906,4279042307)
D.emT=new B.z(4284221976,4279894534)
D.dkO=w([D.emz,D.emL,D.emT],x.n)
D.cSj=w(["\u265b","\u2766","\u2726"],x.s)
D.dFu=new C.xz("Ruby Throne",D.dkO,4293378685,4294963145,4294964466,3874213833,D.cSj)
D.emt=new B.z(4279371039,4281995100)
D.emD=new B.z(4280092723,4278714896)
D.emQ=new B.z(4283045242,4279371039)
D.dhh=w([D.emt,D.emD,D.emQ],x.n)
D.dfr=w(["\u2655","\u2756","\u2727"],x.s)
D.dFz=new C.xz("Amethyst Palace",D.dhh,4293314984,4294963421,4294702591,3873229802,D.dfr)
D.em4=new B.z(4278519045,4280032287)
D.emm=new B.z(4279111184,4278321666)
D.emI=new B.z(4280492839,4278716426)
D.ddW=w([D.em4,D.emm,D.emI],x.n)
D.d5t=w(["\u2726","\u25c6","\u2742"],x.s)
D.dFw=new C.xz("Obsidian & Platinum",D.ddW,4293256418,4294967295,4294638330,3872378836,D.d5t)
D.emA=new B.z(4279896588,4282194463)
D.emJ=new B.z(4280553487,4279043334)
D.emR=new B.z(4283048488,4279896588)
D.d4X=w([D.emA,D.emJ,D.emR],x.n)
D.dj0=w(["\u2766","\u273f","\u2727"],x.s)
D.dFt=new C.xz("Rose Gold Velvet",D.d4X,4293440672,4294960345,4294964979,3874214602,D.dj0)
D.em5=new B.z(4278520340,4279180595)
D.ema=new B.z(4278718495,4278322443)
D.emx=new B.z(4279510591,4278520340)
D.cHe=w([D.em5,D.ema,D.emx],x.n)
D.d6a=w(["\u269c","\u2736","\u2756"],x.s)
D.dFx=new C.xz("Midnight Brass",D.cHe,4291405148,4293975208,4294439914,3872837564,D.d6a)
D.en5=new B.z(4294703086,4293780428)
D.en1=new B.z(4294307549,4293187253)
D.en6=new B.z(4294966517,4293977807)
D.cUq=w([D.en5,D.en1,D.en6],x.n)
D.d6A=w(["\u269c","\u265b","\u2726"],x.s)
D.dFA=new C.xz("Ivory Marble & Gold",D.cUq,4289760572,4286209048,4280951062,3863625518,D.d6A)
D.emg=new B.z(4278978566,4280555024)
D.emw=new B.z(4279504137,4278518530)
D.emN=new B.z(4281211923,4278978566)
D.cS9=w([D.emg,D.emw,D.emN],x.n)
D.dgb=w(["\u2742","\u2726","\u265c"],x.s)
D.dFv=new C.xz("Onyx & Copper",D.cS9,4291856987,4294365880,4294964718,3873885630,D.dgb)
D.cB8=w([D.dFB,D.dFy,D.dFs,D.dFu,D.dFz,D.dFw,D.dFt,D.dFx,D.dFA,D.dFv],B.ax("O<xz>"))
D.cDs=w([A.ay,D.AT,A.hK],x.O)
D.euu=new B.z("Original",null)
D.euC=new B.z("Wide 16:9",1.7777777777777777)
D.ewR=new B.z("Landscape 3:2",1.5)
D.etX=new B.z("Photo 4:3",1.3333333333333333)
D.evG=new B.z("Square",1)
D.eI_=new B.z("Portrait 3:4",0.75)
D.avm=w([D.euu,D.euC,D.ewR,D.etX,D.evG,D.eI_],B.ax("O<+(m,L?)>"))
D.avn=w([A.hK,A.bY,A.b8,A.bu],x.O)
D.ex1=new B.z("","Original")
D.eyU=new B.z("circle","Circle")
D.eF8=new B.z("rounded","Rounded")
D.eG2=new B.z("triangle","Triangle")
D.eAX=new B.z("hexagon","Hexagon")
D.ezj=new B.z("diamond","Diamond")
D.ey8=new B.z("arch","Arch")
D.Cg=w([D.ex1,D.eyU,D.eF8,D.eG2,D.eAX,D.ezj,D.ey8],x.L)
D.dAF=new C.ld("classic_blue","Classic Blue","Normal",A.bj,A.c,A.ks,A.dc,A.aJ)
D.dAV=new C.ld("campus_green","Campus Green","Normal",A.aZ,A.n2,A.tq,A.h6,A.ec)
D.dAM=new C.ld("warm_sand","Warm Sand","Normal",A.dU,A.i1,A.bM,A.ie,A.nR)
D.dAT=new C.ld("slate_minimal","Slate Minimal","Normal",A.bq,A.aQ,A.aL,A.M,A.aJ)
D.dAE=new C.ld("coral_fresh","Coral Fresh","Normal",A.cc,A.iA,A.qP,A.k_,A.tj)
D.dAU=new C.ld("lavender_calm","Lavender Calm","Normal",A.b6,A.pA,A.AI,A.pE,A.jd)
D.dAG=new C.ld("ocean_breeze","Ocean Breeze","Normal",A.fd,A.r_,A.tf,A.tl,A.nS)
D.afv=new B.w(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dAR=new C.ld("berry_pop","Berry Pop","Normal",A.f_,D.afv,A.km,G.XM,A.F6)
D.dAH=new C.ld("midnight_pro","Midnight Pro","Professional",A.aE,A.M,A.dx,A.km,A.cr)
D.dAQ=new C.ld("executive_navy","Executive Navy","Professional",A.d_,A.aeR,A.dc,A.lf,A.bK)
D.dAO=new C.ld("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bn,A.M,A.aQ,A.cr)
D.dAI=new C.ld("corporate_steel","Corporate Steel","Professional",A.n0,A.M,A.mm,A.f9,A.bK)
D.dAL=new C.ld("gold_luxe","Gold Luxe","Luxury",A.n_,A.dH,A.oJ,A.lJ,A.bM)
D.bhq=new B.w(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dAP=new C.ld("rose_gold_elite","Rose Gold Elite","Luxury",A.hi,D.bhq,A.XA,A.iy,A.nN)
D.dAS=new C.ld("platinum_night","Platinum Night","Luxury",A.cr,A.dI,A.bn,A.aQ,A.aL)
D.dAW=new C.ld("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.pH,A.f1,A.pO,A.jC)
D.dAD=new C.ld("royal_purple","Royal Purple","Luxury",A.n1,A.WJ,A.jd,A.km,A.KM)
D.dAN=new C.ld("neon_pitch","Neon Pitch","Bold",A.b8,A.dI,A.M,A.b3,A.aL)
D.dAK=new C.ld("crimson_impact","Crimson Impact","Bold",A.bz,A.kr,A.er,A.tC,A.f0)
D.dAJ=new C.ld("sunset_gallery","Sunset Gallery","Bold",A.fl,A.tj,A.k_,A.qP,A.mk)
D.H7=w([D.dAF,D.dAV,D.dAM,D.dAT,D.dAE,D.dAU,D.dAG,D.dAR,D.dAH,D.dAQ,D.dAO,D.dAI,D.dAL,D.dAP,D.dAS,D.dAW,D.dAD,D.dAN,D.dAK,D.dAJ],B.ax("O<ld>"))
D.cOW=w([A.c0,D.jf],x.O)
D.d5d=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.exV=new B.z("Faces & people",D.d5d)
D.cDw=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.ekW=new B.z("Ideas & work",D.cDw)
D.cWU=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eB1=new B.z("Nature",D.cWU)
D.d5m=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.eus=new B.z("Places & things",D.d5m)
D.d_f=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eyd=new B.z("Symbols",D.d_f)
D.cP1=w([D.exV,D.ekW,D.eB1,D.eus,D.eyd],B.ax("O<+(m,ai<m>)>"))
D.b8G=new B.w(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cPn=w([A.c0,D.adY,D.b8G],x.O)
D.b2M=new B.ac(0,A.G,A.KJ,A.aH1,40)
D.b2s=new B.ac(0,A.G,A.nP,A.em,8)
D.cPA=w([D.b2M,D.b2s],x.V)
D.cQ3=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.avN=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a2y=w([A.hK,A.eB,A.bz,A.ax,A.cc],x.O)
D.cQT=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.aed=new B.w(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cR3=w([A.Xp,D.aed,A.Xp],x.O)
D.cR9=w([A.i2,D.jf,D.KV],x.O)
D.euf=new B.z(A.bi,D.a0m)
D.evB=new B.z(A.L,D.a0l)
D.epz=new B.z(A.dN,D.a0n)
D.cS4=w([D.euf,D.evB,D.epz],B.ax("O<+(q4,a0)>"))
D.cQ=new C.IJ(0,"text")
D.lw=new C.IJ(1,"image")
D.f4=new C.IJ(2,"shape")
D.S3=new C.IJ(3,"pdf")
D.l5=new C.IJ(4,"signature")
D.a5p=new C.IJ(5,"bio")
D.cSX=w([D.cQ,D.lw,D.f4,D.S3,D.l5,D.a5p],B.ax("O<IJ>"))
D.cSY=w([A.bo,A.cF],B.ax("O<HE>"))
D.cTy=w(["School","Documents","Sign & present"],x.s)
D.b2R=new B.ac(0,A.G,A.ag1,A.uA,28)
D.cTT=w([D.b2R],x.V)
D.cUb=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Q7=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.awb=w([A.hK,A.F5,A.aL,A.c,A.oK,A.ay],x.O)
D.eHo=new B.z(0.1,0.08)
D.eB_=new B.z(0.3,0.05)
D.ep2=new B.z(0.55,0.1)
D.etf=new B.z(0.8,0.06)
D.ewk=new B.z(0.92,0.16)
D.evQ=new B.z(0.2,0.2)
D.etI=new B.z(0.7,0.22)
D.ezG=new B.z(0.05,0.4)
D.ewJ=new B.z(0.95,0.45)
D.epO=new B.z(0.12,0.7)
D.es1=new B.z(0.88,0.75)
D.es9=new B.z(0.4,0.9)
D.enm=new B.z(0.65,0.93)
D.esT=new B.z(0.25,0.97)
D.euc=new B.z(0.85,0.9)
D.eqD=new B.z(0.5,0.04)
D.cVE=w([D.eHo,D.eB_,D.ep2,D.etf,D.ewk,D.evQ,D.etI,D.ezG,D.ewJ,D.epO,D.es1,D.es9,D.enm,D.esT,D.euc,D.eqD],x.G)
D.cVL=w([A.c,A.hi,A.aN,A.aV],x.O)
D.e0W=new C.jH("office_blue","Office Blue",A.bj,A.dc,A.aJ,A.c,A.ks)
D.e16=new C.jH("campus_green","Campus Green",A.aZ,A.h6,A.ec,A.n2,A.tq)
D.e0X=new C.jH("sunset","Sunset",A.fl,A.k_,A.nR,A.iA,A.qP)
D.e0Y=new C.jH("midnight","Midnight",A.aE,A.km,A.cr,A.M,A.dx)
D.e18=new C.jH("classic","Classic",A.d5,A.dH,A.lK,A.i1,A.fJ)
D.e15=new C.jH("rose_gold","Rose Gold",A.hi,A.xs,A.xr,A.vq,A.AW)
D.e0R=new C.jH("ocean_teal","Ocean Teal",A.fd,A.tl,A.nS,A.r_,A.tf)
D.e0Q=new C.jH("slate_pro","Slate Pro",A.bq,A.M,A.aJ,A.aQ,A.aL)
D.e0P=new C.jH("neon_night","Neon Night",A.b8,A.b3,A.aL,A.dI,A.M)
D.e10=new C.jH("lavender","Lavender",A.b6,A.pE,A.jd,A.pA,A.AI)
D.e12=new C.jH("coral","Coral",A.cc,A.k_,A.tj,A.iA,A.mk)
D.e0S=new C.jH("forest","Forest",A.hk,A.e_,A.ct,A.lL,A.es)
D.e0T=new C.jH("berry","Berry",A.f_,G.XM,A.F6,D.afv,A.km)
D.e1_=new C.jH("sand","Sand",A.dU,A.ie,A.nR,A.i1,A.bM)
D.e14=new C.jH("ice","Ice",A.n0,A.Ld,A.aJ,A.mY,A.f9)
D.e0V=new C.jH("charcoal","Charcoal",A.ak,A.aQ,A.cr,A.bn,A.M)
D.e0O=new C.jH("mint","Mint",A.aV,A.fy,A.h6,A.lL,A.pO)
D.e13=new C.jH("crimson","Crimson",A.bz,A.n4,A.kr,A.F3,A.tC)
D.bba=new B.w(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.e0Z=new C.jH("gold","Gold",A.n_,A.vb,A.oJ,D.bba,A.lJ)
D.e11=new C.jH("aqua","Aqua",A.bP,A.EU,A.oG,A.pC,A.oL)
D.e0U=new C.jH("plum","Plum",A.n1,A.xp,A.F6,A.EI,A.qY)
D.e17=new C.jH("steel","Steel",A.d_,A.dc,A.bn,A.ks,A.lf)
D.a2O=w([D.e0W,D.e16,D.e0X,D.e0Y,D.e18,D.e15,D.e0R,D.e0Q,D.e0P,D.e10,D.e12,D.e0S,D.e0T,D.e1_,D.e14,D.e0V,D.e0O,D.e13,D.e0Z,D.e11,D.e0U,D.e17],B.ax("O<jH>"))
D.cW5=w([A.c0,A.jh],x.O)
D.S5=new C.hF(10,"rotate3d")
D.I3=new C.hF(8,"flip")
D.aGv=new C.hF(19,"spiral")
D.ql=new C.hF(16,"bounce")
D.aGy=new C.hF(9,"flipVertical")
D.cW6=w([D.S5,D.I3,D.aGv,D.ql,D.aGy],x.i)
D.e8=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cW9=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once.","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.cWs=w([0.62,1],x.x)
D.cX1=w([0,0.32,0.68,1],x.x)
D.mK=new C.hF(6,"zoom")
D.uu=new C.hF(4,"slideUp")
D.ut=new C.hF(2,"slideLeft")
D.cXa=w([D.mK,D.I3,D.uu,D.S5,D.ut],x.i)
D.cXG=w([A.bY,A.hi,A.iy,A.hK,A.c],x.O)
D.b2H=new B.ac(0,A.G,D.aer,A.uA,30)
D.cYp=w([D.b2H],x.V)
D.eaY=new B.v(0,-2.5)
D.eaO=new B.v(-2.5,0)
D.e9w=new B.v(2.5,0)
D.cYs=w([A.Sl,A.a5M,A.aHx,A.a5L,D.eaY,I.aHt,D.eaO,D.e9w],x.dN)
D.Hf=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cYT=w([23,114,69,56,80,144],x.t)
D.cZk=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cZL=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.d0p=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.d0t=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bg=new C.uJ(0,"rectangle")
D.eN=new C.uJ(1,"circle")
D.l6=new C.uJ(6,"hexagon")
D.d0H=w([D.bg,D.eN,D.l6],x.m)
D.oc=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.afC=new B.w(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.d1e=w([D.afC,A.e_],x.O)
D.eph=new B.z("","Classic")
D.enB=new B.z("caps","Bold caps")
D.ezJ=new B.z("elegant","Elegant")
D.eFr=new B.z("shadow","Shadow")
D.etB=new B.z("neon","Neon glow")
D.eE4=new B.z("outline","Outline")
D.eDf=new B.z("marker","Highlighter")
D.eFC=new B.z("stamp","Stamp")
D.eF3=new B.z("retro","Retro")
D.esz=new B.z("threed","3D")
D.eAf=new B.z("fire","Fire")
D.eBb=new B.z("ice","Ice")
D.eyT=new B.z("chalk","Chalk")
D.eyY=new B.z("comic","Comic")
D.eFE=new B.z("sunset","Sunset")
D.eGL=new B.z("softglow","Soft glow")
D.eC9=new B.z("lowercase","Lowercase")
D.ezq=new B.z("double","Echo")
D.eGU=new B.z("whisper","Whisper")
D.ax4=w([D.eph,D.enB,D.ezJ,D.eFr,D.etB,D.eE4,D.eDf,D.eFC,D.eF3,D.esz,I.aMG,D.eAf,D.eBb,D.eyT,D.eyY,A.a6y,D.eFE,D.eGL,D.eC9,D.ezq,D.eGU],x.L)
D.d2w=w([3,5,7,10,12,15],x.t)
D.d3T=w([A.bY,A.bM,A.c,A.eC,A.cs],x.O)
D.dsj=new C.tn(10,"cardWorld")
D.CK=new C.Bu(3,"rounded")
D.dIC=new C.lg("world","NGMY World",D.dsj,D.CK,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dsk=new C.tn(11,"cardSplit")
D.dIy=new C.lg("business","Business Wire",D.dsk,D.CK,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dsl=new C.tn(12,"cardBreaking")
D.dIL=new C.lg("breaking","Breaking Red",D.dsl,D.CK,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dsm=new C.tn(13,"cardFeature")
D.dIE=new C.lg("feature","Tech Feature",D.dsm,D.CK,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aF1=new C.tn(6,"circle")
D.aEW=new C.Bu(4,"circle")
D.dII=new C.lg("parchment","Royal Circle",D.aF1,D.aEW,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dIx=new C.lg("ocean","Blue Ocean",D.aF1,D.aEW,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dsp=new C.tn(7,"rail")
D.aEV=new C.Bu(1,"double")
D.dIz=new C.lg("forest","Green Leaf",D.dsp,D.aEV,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aEZ=new C.tn(1,"sideBySide")
D.dIN=new C.lg("herald","NGMY Herald",D.aEZ,D.CK,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aEY=new C.tn(0,"classic")
D.a4C=new C.Bu(9,"shadow")
D.dIM=new C.lg("daily","The Daily",D.aEY,D.a4C,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dsn=new C.tn(2,"splash")
D.aEX=new C.Bu(6,"cutCorner")
D.dIw=new C.lg("tabloid","Big Tabloid",D.dsn,D.aEX,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aF2=new C.tn(9,"minimal")
D.dIH=new C.lg("modern","Modern Digest",D.aF2,D.CK,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aF_=new C.tn(3,"magazine")
D.aEU=new C.Bu(0,"plain")
D.dID=new C.lg("midnight","Midnight Edition",D.aF_,D.aEU,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dsq=new C.tn(8,"banner")
D.dIF=new C.lg("metro","Metro Wire",D.dsq,D.aEX,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dsi=new C.Bu(8,"arch")
D.dIG=new C.lg("sunrise","Sunrise Post",D.aF_,D.dsi,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aF0=new C.tn(5,"scrapbook")
D.dsh=new C.Bu(5,"tape")
D.dIB=new C.lg("neon","Neon Beat",D.aF0,D.dsh,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dso=new C.tn(4,"wrap")
D.dIO=new C.lg("gold","Golden Press",D.dso,D.a4C,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dIP=new C.lg("minimal","Paper White",D.aF2,D.a4C,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dIA=new C.lg("gazette","Fresh Gazette",D.aEY,D.aEV,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dIK=new C.lg("times","Classic Times",D.aEZ,D.aEU,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.RB=new C.Bu(2,"polaroid")
D.dIJ=new C.lg("scrapbook","Memory Scrapbook",D.aF0,D.RB,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a32=w([D.dIC,D.dIy,D.dIL,D.dIE,D.dII,D.dIx,D.dIz,D.dIN,D.dIM,D.dIw,D.dIH,D.dID,D.dIF,D.dIG,D.dIB,D.dIO,D.dIP,D.dIA,D.dIK,D.dIJ],B.ax("O<lg>"))
D.d44=w([0.45,1],x.x)
D.Hh=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.d4s=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.h78=new C.oy("Original",0,1,1,0,0,0)
D.h7c=new C.oy("Black & white",0,1.1,0,0,0,0)
D.h7_=new C.oy("Noir",-0.05,1.55,0,0,0,0)
D.h73=new C.oy("Sepia",0,1,0.25,0.9,0,0)
D.h72=new C.oy("Vivid",0,1.15,1.6,0,0,0)
D.h6W=new C.oy("Pop",0,1.3,1.9,0,0,0)
D.h6Y=new C.oy("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.h79=new C.oy("Matte",0,0.9,0.85,0,0,0.55)
D.h74=new C.oy("Cool",0,1.05,1,-0.8,0,0)
D.h7b=new C.oy("Warm",0.03,1.05,1.1,0.8,0,0)
D.h6X=new C.oy("Golden hour",0.04,1,1.25,1,0,0)
D.h71=new C.oy("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.h7a=new C.oy("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.h70=new C.oy("Dramatic",-0.05,1.5,1.2,0,0,0)
D.h76=new C.oy("Retro",0,0.9,0.7,0.4,0,0.35)
D.h75=new C.oy("Forest",0,1,1.2,-0.1,-0.45,0)
D.h77=new C.oy("Rose",0,1,1.1,0.3,0.4,0)
D.h6Z=new C.oy("Ocean",0,1,1.2,-0.5,-0.2,0)
D.d4t=w([D.h78,D.h7c,D.h7_,D.h73,D.h72,D.h6W,D.h6Y,D.h79,D.h74,D.h7b,D.h6X,D.h71,D.h7a,D.h70,D.h76,D.h75,D.h77,D.h6Z],B.ax("O<oy>"))
D.b86=new B.w(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.d4v=w([D.afC,A.e_,D.b86],x.O)
D.ekP=new B.z(0.12,0.3)
D.eBm=new B.z(0.26,0.75)
D.ezF=new B.z(0.8,0.22)
D.eFM=new B.z(0.9,0.7)
D.eC8=new B.z(0.5,0.15)
D.eE6=new B.z(0.65,0.85)
D.er8=new B.z(0.08,0.85)
D.d4I=w([D.ekP,D.eBm,D.ezF,D.eFM,D.eC8,D.eE6,D.er8],x.G)
D.axg=w([A.b8,A.bY,A.bu,A.b2],x.O)
D.d5x=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.d5J=w([A.c,A.f9,A.ds,A.vd],x.O)
D.bbo=new B.w(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.d6K=w([D.bbo,D.aed],x.O)
D.d6L=w([A.vf,A.ay],x.O)
D.d7_=w([0,0.25,0.75,1],x.x)
D.d71=w([A.xh,A.oK],x.O)
D.aG5=new C.kU(10,"kenteSunset")
D.hbG=w([D.aeC,A.jW,A.ay],x.O)
D.dDT=new C.jo("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aG5,4294964964,4282000405,4279983648,D.jO)
D.aG6=new C.kU(11,"indigoMudcloth")
D.b93=new B.w(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.hbU=w([D.b93,A.ae9,A.i2],x.O)
D.dE0=new C.jo("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aG6,4294439140,4279903102,4279903102,D.jO)
D.aG7=new C.kU(12,"adinkraRoyal")
D.bm4=new B.w(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.hbV=w([D.ad4,D.bm4,A.ay],x.O)
D.dE2=new C.jo("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aG7,4294965484,4285218591,4287322667,D.jO)
D.aG8=new C.kU(13,"nileLotus")
D.bil=new B.w(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.bf5=new B.w(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.hc_=w([D.bil,D.bf5,A.i2],x.O)
D.dE1=new C.jo("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aG8,4294244340,4279196764,4279196764,D.jO)
D.aG9=new C.kU(14,"shweshweIvory")
D.bdi=new B.w(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.bc6=new B.w(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b9w=new B.w(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.hbH=w([D.bdi,D.bc6,D.b9w],x.O)
D.dDY=new C.jo("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aG9,4294505710,4279970378,4291058750,D.jO)
D.rC=new C.kU(15,"certIvoryNavy")
D.hbF=w([D.LC,D.jf,A.i2],x.O)
D.aFB=new C.xx(1,"ringsNdoa")
D.dDV=new C.jo("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.rC,4294966259,4279378237,4291404327,D.aFB)
D.a57=new C.xx(2,"coupleCards")
D.dDQ=new C.jo("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.rC,4294966259,4279378237,4291404327,D.a57)
D.CN=new C.kU(18,"certIvoryNavyBar")
D.ad3=new B.w(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.hbT=w([D.ad3,D.jf,A.i2],x.O)
D.aFC=new C.xx(3,"kuhoweshaForm")
D.dDO=new C.jo("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.CN,4294966519,4279378237,4291404327,D.aFC)
D.aep=new B.w(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.hcc=w([D.LC,D.aep,A.i2],x.O)
D.a58=new C.xx(4,"mahariPande")
D.dDR=new C.jo("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.rC,4294966259,4279904068,4291404327,D.a58)
D.aGa=new C.kU(16,"certIvoryGreen")
D.bcH=new B.w(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.hbJ=w([A.KN,D.bcH,A.i2],x.O)
D.aFD=new C.xx(5,"familiaMti")
D.dDX=new C.jo("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aGa,4294966776,4280241466,4291404327,D.aFD)
D.a59=new C.xx(6,"ndoaSafi")
D.dDP=new C.jo("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.CN,4294966519,4279378237,4291404327,D.a59)
D.bgO=new B.w(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.hbM=w([D.LC,A.i2,D.bgO],x.O)
D.a5a=new C.xx(7,"peteWide")
D.dDU=new C.jo("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.rC,4294966259,4282001936,4291404327,D.a5a)
D.dE3=new C.xx(8,"muhuriCrest")
D.dDN=new C.jo("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.rC,4294966259,4279378237,4291404327,D.dE3)
D.hbW=w([D.ad3,D.aep,A.i2],x.O)
D.dE4=new C.xx(9,"fomuWazi")
D.dE_=new C.jo("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.CN,4294966519,4279904068,4291404327,D.dE4)
D.aGb=new C.kU(17,"certIvoryRose")
D.bdm=new B.w(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.hbZ=w([D.bdm,D.aff,A.i2],x.O)
D.a56=new C.xx(10,"upendoOrnate")
D.dDW=new C.jo("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aGb,4294965493,4286200650,4291404327,D.a56)
D.d7r=w([D.dDT,D.dE0,D.dE2,D.dE1,D.dDY,D.dDV,D.dDQ,D.dDO,D.dDR,D.dDX,D.dDP,D.dDU,D.dDN,D.dE_,D.dDW],x.h)
D.e9=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.I4=new C.w1(0,"emojis")
D.CU=new C.w1(1,"pictures")
D.I5=new C.w1(2,"icons3d")
D.a5r=new C.w1(3,"animations")
D.S7=new C.w1(4,"videoMotion")
D.CV=new C.w1(5,"luxe")
D.a3a=w([D.I4,D.CU,D.I5,D.a5r,D.S7,D.CV],B.ax("O<w1>"))
D.eEH=new B.z(A.dX,"Looks")
D.et8=new B.z(A.yB,"Light")
D.et5=new B.z(A.nm,"Colour")
D.er9=new B.z(A.yc,"Effects")
D.alx=new B.a0(63112,"MaterialIcons",!1)
D.enR=new B.z(D.alx,"Crop")
D.d7V=w([D.eEH,D.et8,D.et5,D.er9,D.enR],x.f2)
D.d8y=w([],x.D)
D.hc9=w([],x.L)
D.erm=new B.z("Flashcard",D.I_)
D.ev3=new B.z("Quiz",D.I0)
D.ewX=new B.z("Worksheet",D.I1)
D.eu7=new B.z("Notes",D.mJ)
D.evz=new B.z("Section",D.CS)
D.d9e=w([D.erm,D.ev3,D.ewX,D.eu7,D.evz],B.ax("O<+(m,mx)>"))
D.dFL=new C.kU(6,"beadedPearl")
D.bfK=new B.w(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.hcd=w([H.Xz,D.bfK,A.i2],x.O)
D.aFz=new C.jo("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dFL,4294966774,4286209070,4291404327,D.jO)
D.dFM=new C.kU(7,"artDeco")
D.bjA=new B.w(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.bmn=new B.w(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.hcb=w([D.bjA,D.bmn,A.c0],x.O)
D.aFA=new C.jo("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dFM,4294440434,4280228630,4290283019,D.jO)
D.dFN=new C.kU(8,"rosetteCorners")
D.blx=new B.w(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.bbt=new B.w(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.bfF=new B.w(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.hbP=w([D.blx,D.bbt,D.bfF],x.O)
D.aFy=new C.jo("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dFN,4294702831,4285218602,4291394365,D.jO)
D.dFO=new C.kU(9,"modernLedger")
D.hbO=w([A.c,D.jf,D.jf],x.O)
D.aFx=new C.jo("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dFO,4294967295,4279378237,4279378237,D.jO)
D.d9i=w([D.aFz,D.aFA,D.aFy,D.aFx],x.h)
D.d9r=w([A.iy,A.oK],x.O)
D.cn=new C.hF(0,"none")
D.de=new C.hF(1,"fade")
D.I2=new C.hF(3,"slideRight")
D.aGx=new C.hF(5,"slideDown")
D.e_q=new C.hF(7,"zoomOut")
D.a5q=new C.hF(11,"cube")
D.e_l=new C.hF(12,"blur")
D.aGu=new C.hF(13,"dissolve")
D.e_m=new C.hF(14,"wipeLeft")
D.e_n=new C.hF(15,"wipeRight")
D.S6=new C.hF(17,"push")
D.e_o=new C.hF(18,"flash")
D.aGw=new C.hF(20,"swing")
D.e_p=new C.hF(21,"curtain")
D.QI=w([D.cn,D.de,D.ut,D.I2,D.uu,D.aGx,D.mK,D.e_q,D.I3,D.aGy,D.S5,D.a5q,D.e_l,D.aGu,D.e_m,D.e_n,D.ql,D.S6,D.e_o,D.aGv,D.aGw,D.e_p],x.i)
D.QJ=w([D.a55,D.a53,D.a4X,D.a4Y,D.a4Z,D.a51,D.a5_,D.a50,D.a54,D.a52,D.aFz,D.aFA,D.aFy,D.aFx],x.h)
D.d9U=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.d9Y=w([A.xl,A.hK,A.c0],x.O)
D.est=new B.z(A.u0,"Design")
D.eGb=new B.z(D.alP,"Word sizes")
D.eBT=new B.z(A.C_,"Text")
D.bH8=new B.a0(983182,"MaterialIcons",!1)
D.eBX=new B.z(D.bH8,"Photo")
D.enp=new B.z(A.lr,"Logo")
D.eHm=new B.z(A.GC,"News")
D.da2=w([D.est,D.eGb,D.eBT,D.eBX,D.enp,D.eHm],x.f2)
D.da3=w(["golddust","sparkle","sheen"],x.s)
D.e0N=new C.ew("upload_pdf",L.NY,"Upload PDF")
D.e_X=new C.ew("sign_paper",A.Gz,"Sign Paper")
D.bGo=new B.a0(63438,"MaterialIcons",!1)
D.e0J=new C.ew("hd_photo",D.bGo,"HD Photo")
D.e_P=new C.ew("sharpen",E.a08,"Sharpen")
D.e_Z=new C.ew("print",L.NY,"Download PDF")
D.e0q=new C.ew("rotate",D.alx,"Rotate")
D.e07=new C.ew("text_box",A.C_,"Text Box")
D.e09=new C.ew("picture",A.u4,"Picture")
D.e05=new C.ew("title",A.yv,"Title")
D.e01=new C.ew("subtitle",T.amn,"Subtitle")
D.e0z=new C.ew("bullets",K.a0o,"Bullet List")
D.e02=new C.ew("numbered",A.NN,"Numbered")
D.e0C=new C.ew("quote",A2.BQ,"Quote")
D.e0e=new C.ew("citation",A.o5,"Citation")
D.e0F=new C.ew("date_stamp",Ag.a0d,"Date Stamp")
D.e0s=new C.ew("page_number",A.yu,"Page #")
D.e0w=new C.ew("header_bar",A.C1,"Header")
D.e08=new C.ew("footer_bar",Ap.a0T,"Footer")
D.e_Y=new C.ew("divider",A.u3,"Divider")
D.e_U=new C.ew("highlight",A.a0u,"Highlight")
D.e0y=new C.ew("redact",A.yy,"Redact")
D.e0l=new C.ew("callout",A.BL,"Callout")
D.e0H=new C.ew("checkboxes",K.akN,"Checklist")
D.e0i=new C.ew("table",A.a0R,"Table")
D.e0c=new C.ew("memo",K.a0E,"Memo")
D.e0m=new C.ew("letter",A.Gp,"Letter")
D.bG0=new B.a0(63259,"MaterialIcons",!0)
D.e_O=new C.ew("agenda",D.bG0,"Agenda")
D.e0_=new C.ew("toc",Ay.am0,"Contents")
D.bGk=new B.a0(63406,"MaterialIcons",!1)
D.e0j=new C.ew("sig_line",D.bGk,"Sign Line")
D.e_H=new C.ew("initial_line",A.jr,"Initials")
D.e_K=new C.ew("approved",A.lr,"APPROVED")
D.e0o=new C.ew("draft",A.p0,"DRAFT")
D.e0u=new C.ew("confidential",A.js,"Confidential")
D.e0x=new C.ew("sticky",A.O5,"Sticky Note")
D.e0G=new C.ew("progress",A.am_,"Progress")
D.bHC=new B.a0(983507,"MaterialIcons",!1)
D.e_V=new C.ew("stars",D.bHC,"Star Rating")
D.e_F=new C.ew("equation",A.alR,"Equation")
D.e_Q=new C.ew("timeline",A.O7,"Timeline")
D.e0d=new C.ew("two_col",A.a0U,"Two Columns")
D.e_S=new C.ew("compare",A1.a0g,"Compare")
D.e_D=new C.ew("duplicate_el",A.fP,"Duplicate")
D.e0L=new C.ew("delete_el",A.e7,"Delete")
D.e0B=new C.ew("bring_fwd",H.alL,"Bring Front")
D.e_I=new C.ew("send_back",H.alK,"Send Back")
D.e0n=new C.ew("align_left",D.a0m,"Align L")
D.e0t=new C.ew("align_center",D.a0l,"Align C")
D.e0K=new C.ew("align_right",D.a0n,"Align R")
D.e06=new C.ew("word_count",A_.a_S,"Word Count")
D.e03=new C.ew("link_text",A.hq,"Link")
D.e0r=new C.ew("phone",A.iI,"Phone")
D.e_T=new C.ew("email",A.BO,"Email")
D.e0M=new C.ew("qr_placeholder",A.ju,"QR Placeholder")
D.e_N=new C.ew("rectangle",A3.vP,"Rectangle")
D.e0h=new C.ew("circle",A.re,"Circle")
D.e_J=new C.ew("arrow",A.j1,"Arrow")
D.e0A=new C.ew("line",A.u3,"Line")
D.e_W=new C.ew("triangle",A.a0e,"Triangle")
D.bG8=new B.a0(63318,"MaterialIcons",!1)
D.e00=new C.ew("grayscale",D.bG8,"Grayscale")
D.e0a=new C.ew("brighten",K.al6,"Brighten")
D.e0f=new C.ew("flip_h",A.Ge,"Flip H")
D.bGf=new B.a0(63348,"MaterialIcons",!1)
D.e0I=new C.ew("flip_v",D.bGf,"Flip V")
D.e0v=new C.ew("cover_page",A.q1,"Cover Page")
D.e_G=new C.ew("invoice",A.ha,"Invoice")
D.e_R=new C.ew("resume",A.mv,"Resume")
D.e04=new C.ew("minutes",A.oV,"Minutes")
D.e_L=new C.ew("lab_report",A.O1,"Lab Report")
D.e_M=new C.ew("rubric",A.u1,"Rubric")
D.e0g=new C.ew("flashcard_tool",V.Gx,"Flashcard")
D.e0D=new C.ew("quiz_tool",A.Gu,"Quiz Block")
D.e0k=new C.ew("worksheet_tool",M.G4,"Worksheet")
D.e0p=new C.ew("outline_share",A.O3,"Share Outline")
D.e0E=new C.ew("export_json",D.akT,"Export JSON")
D.e_E=new C.ew("new_slide",D.a_R,"New Slide")
D.e0b=new C.ew("present",A.q7,"Present")
D.daw=w([D.e0N,D.e_X,D.e0J,D.e_P,D.e_Z,D.e0q,D.e07,D.e09,D.e05,D.e01,D.e0z,D.e02,D.e0C,D.e0e,D.e0F,D.e0s,D.e0w,D.e08,D.e_Y,D.e_U,D.e0y,D.e0l,D.e0H,D.e0i,D.e0c,D.e0m,D.e_O,D.e0_,D.e0j,D.e_H,D.e_K,D.e0o,D.e0u,D.e0x,D.e0G,D.e_V,D.e_F,D.e_Q,D.e0d,D.e_S,D.e_D,D.e0L,D.e0B,D.e_I,D.e0n,D.e0t,D.e0K,D.e06,D.e03,D.e0r,D.e_T,D.e0M,D.e_N,D.e0h,D.e_J,D.e0A,D.e_W,D.e00,D.e0a,D.e0f,D.e0I,D.e0v,D.e_G,D.e_R,D.e04,D.e_L,D.e_M,D.e0g,D.e0D,D.e0k,D.e0p,D.e0E,D.e_E,D.e0b],B.ax("O<ew>"))
D.daH=w([A.cr,A.ak],x.O)
D.emX=new B.z(4286331629,4292552567)
D.emK=new B.z(4280640491,4278630100)
D.en4=new B.z(4294538006,4292943176)
D.em6=new B.z(4278556265,4280640491)
D.d4S=w([D.emX,D.emK,D.en4,D.em6],x.n)
D.ctO=w([4294626325,4280472558,4294210230],x.t)
D.e_y=new C.nL("colorful","Colorful",A.nm,D.d4S,4294967295,3875536895,D.ctO,D.mK)
D.emy=new B.z(4279522093,4279657780)
D.emO=new B.z(4281750292,4283268111)
D.em9=new B.z(4278603323,4279203438)
D.emP=new B.z(4282343954,4279599165)
D.cEJ=w([D.emy,D.emO,D.em9,D.emP],x.n)
D.ctw=w([4288931381,4294829706,4287033260],x.t)
D.e_u=new C.nL("nature","Nature",A.GA,D.cEJ,4294442727,3874290891,D.ctw,D.de)
D.ems=new B.z(4279369771,4283178389)
D.emp=new B.z(4279179050,4286456526)
D.emG=new B.z(4280163147,4290648157)
D.elZ=new B.z(4278322711,4285343961)
D.cWk=w([D.ems,D.emp,D.emG,D.elZ],x.n)
D.ctK=w([4294210230,4280472558,4289170426],x.t)
D.e_s=new C.nL("vibe","Vibe",A.a0s,D.cWk,4294967295,3874869502,D.ctK,D.ut)
D.en0=new B.z(4290007817,4292552567)
D.emV=new B.z(4286328082,4294286859)
D.en_=new B.z(4288485197,4294538006)
D.emU=new B.z(4285343961,4293675161)
D.c_Q=w([D.en0,D.emV,D.en_,D.emU],x.n)
D.ctP=w([4294829706,4294967295,4284999929],x.t)
D.e_t=new C.nL("celebration","Celebration",A.lm,D.c_Q,4294967295,4009752557,D.ctP,D.ql)
D.emn=new B.z(4279179050,4280171146)
D.emr=new B.z(4279310375,4280232247)
D.emf=new B.z(4278916151,4280172719)
D.emo=new B.z(4279179050,4281549141)
D.cPg=w([D.emn,D.emr,D.emf,D.emo],x.n)
D.ctr=w([4281908728,4294626325,4287931320],x.t)
D.e_x=new C.nL("professional","Professional",A.BJ,D.cPg,4294967295,3872118241,D.ctr,D.S6)
D.emj=new B.z(4278995566,4278413729)
D.emb=new B.z(4278727492,4279137424)
D.emH=new B.z(4280171146,4278751666)
D.emk=new B.z(4278995566,4279590517)
D.cxB=w([D.emj,D.emb,D.emH,D.emk],x.n)
D.ctu=w([4286436348,4284410580,4294829706],x.t)
D.e_z=new C.nL("ocean","Ocean",K.a0W,D.cxB,4294967295,3873501950,D.ctu,D.uu)
D.emW=new B.z(4286328082,4294538006)
D.emY=new B.z(4286781507,4294677052)
D.emS=new B.z(4283178389,4294197086)
D.emZ=new B.z(4288295954,4294688548)
D.cLv=w([D.emW,D.emY,D.emS,D.emZ],x.n)
D.ctQ=w([4294829706,4294967295,4294747557],x.t)
D.e_A=new C.nL("sunset","Sunset",A.O9,D.cLv,4294967295,4009749973,D.ctQ,D.de)
D.en8=new B.z(4294967295,4294047225)
D.en3=new B.z(4294507260,4294967295)
D.en7=new B.z(4294967295,4293060848)
D.en2=new B.z(4294507260,4294047225)
D.cZq=w([D.en8,D.en3,D.en7,D.en2],x.n)
D.ctp=w([4280640491,4279179050,4287931320],x.t)
D.e_w=new C.nL("minimal","Minimal",A3.vP,D.cZq,4279179050,4282865001,D.ctp,D.de)
D.emi=new B.z(4278979081,4280886564)
D.emC=new B.z(4280031511,4278979081)
D.emq=new B.z(4279308561,4281148438)
D.emh=new B.z(4278979081,4280031511)
D.dcG=w([D.emi,D.emC,D.emq,D.emh],x.n)
D.ctD=w([4292128567,4294829706,4289241758],x.t)
D.e_B=new C.nL("elegant","Elegant",A.lV,D.dcG,4294898631,3873957348,D.ctD,D.aGu)
D.emE=new B.z(4280159034,4282058596)
D.eme=new B.z(4278916151,4280163147)
D.emM=new B.z(4281208933,4278916151)
D.emv=new B.z(4279502891,4283178389)
D.djC=w([D.emE,D.eme,D.emM,D.emv],x.n)
D.ctM=w([4294296657,4292128567,4291081725],x.t)
D.e_v=new C.nL("royal","Royal Gold",A.j3,D.djC,4294965222,3874084351,D.ctM,D.mK)
D.em3=new B.z(4278464302,4280163147)
D.emd=new B.z(4278916151,4279455306)
D.emF=new B.z(4280163147,4283040846)
D.em0=new B.z(4278332450,4281413249)
D.d4y=w([D.em3,D.emd,D.emF,D.em0],x.n)
D.ctq=w([4281193663,4289170426,4294210230],x.t)
D.e_C=new C.nL("aurora","Aurora Glow",A.dX,D.d4y,4293983738,3869766608,D.ctq,D.de)
D.wb=w([D.e_y,D.e_u,D.e_s,D.e_t,D.e_x,D.e_z,D.e_A,D.e_w,D.e_B,D.e_v,D.e_C],B.ax("O<nL>"))
D.bgd=new B.w(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.dbg=w([A.qS,D.bgd,A.qS],x.O)
D.dbx=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.dbB=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eBM=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.es3=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.ewx=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.ejI=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.evc=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.ett=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.exK=new B.z("Surprise me","")
D.dc7=w([D.eBM,D.es3,D.ewx,D.ejI,D.evc,D.ett,D.exK],x.L)
D.b9y=new B.w(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.bk4=new B.w(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.dcU=w([A.c,D.b9y,D.bk4],x.O)
D.deW=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aG3=new C.kU(0,"heritageGold")
D.beU=new B.w(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.hce=w([D.beU,W.aez,A.ay],x.O)
D.dDZ=new C.jo("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aG3,4294570461,4284234270,4292128567,D.jO)
D.aG4=new C.kU(1,"heritageCrimson")
D.b82=new B.w(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.bdj=new B.w(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.bjV=new B.w(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.hbS=w([D.b82,D.bdj,D.bjV],x.O)
D.dDS=new C.jo("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aG4,4294635750,4285213214,4292912216,D.jO)
D.df_=w([D.a55,D.a53,D.dDZ,D.dDS,D.a4Z,D.a51],x.h)
D.dJS=new C.rv(1,"circuit")
D.dKk=new C.m7("neural","Neural Link","Robotic",D.dJS,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dJR=new C.rv(0,"grid")
D.dKh=new C.m7("signal","Signal Grid","Robotic",D.dJR,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dJX=new C.rv(2,"hexes")
D.dK2=new C.m7("core","Core Protocol","Robotic",D.dJX,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aGr=new C.rv(11,"diagonal")
D.dKd=new C.m7("steel","Steel Tech","Robotic",D.aGr,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aGs=new C.rv(3,"rings")
D.dK1=new C.m7("vault","Vault Gold","Robotic",D.aGs,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dJV=new C.rv(13,"leaves")
D.dK4=new C.m7("forest","Forest Morning","Nature",D.dJV,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aGt=new C.rv(5,"waves")
D.dKb=new C.m7("ocean","Ocean Calm","Nature",D.aGt,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dJY=new C.rv(6,"sunset")
D.dKg=new C.m7("sunset","Sunset Glow","Nature",D.dJY,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dJZ=new C.rv(7,"mountains")
D.dK3=new C.m7("mountain","Mountain Air","Nature",D.dJZ,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dK_=new C.rv(8,"stars")
D.dKa=new C.m7("night","Night Sky","Nature",D.dK_,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a5o=new C.rv(4,"orbs")
D.dK8=new C.m7("aurora","Aurora","Nature",D.a5o,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dKi=new C.m7("sand","Sand Dune","Nature",D.aGt,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dK0=new C.rv(9,"rays")
D.dK7=new C.m7("golden","Golden Hour","Warm",D.dK0,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dK5=new C.m7("royal","Royal Purple","Warm",D.aGr,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dK6=new C.m7("rose","Rose Petal","Warm",D.a5o,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dJU=new C.rv(12,"blocks")
D.dK9=new C.m7("electric","Electric Blue","Bold",D.dJU,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dKj=new C.m7("mint","Fresh Mint","Bold",D.a5o,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dJW=new C.rv(14,"minimal")
D.dKf=new C.m7("white","Clean White","Clean",D.dJW,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dJT=new C.rv(10,"frame")
D.dKc=new C.m7("midnight","Midnight Gold","Clean",D.dJT,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dKe=new C.m7("community","Community Green","Clean",D.aGs,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a3E=w([D.dKk,D.dKh,D.dK2,D.dKd,D.dK1,D.dK4,D.dKb,D.dKg,D.dK3,D.dKa,D.dK8,D.dKi,D.dK7,D.dK5,D.dK6,D.dK9,D.dKj,D.dKf,D.dKc,D.dKe],B.ax("O<m7>"))
D.dfm=w([D.AT,A.vf,A.hK,A.c0],x.O)
D.dfE=w([D.afp,D.jf],x.O)
D.dfP=w(["pdf","docx","txt","md"],x.s)
D.eKO=new B.bl(-3,150,34)
D.eKP=new B.bl(-3,214,62)
D.eKQ=new B.bl(-3,288,62)
D.dgD=w([D.eKO,D.eKP,D.eKQ],B.ax("O<+(L,L,L)>"))
D.dh5=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dhI=w(["Write","Design","Print & fold"],x.s)
D.jP=new C.uJ(2,"triangle")
D.CT=new C.uJ(3,"arrow")
D.fs=new C.uJ(4,"line")
D.jQ=new C.uJ(5,"parallelogram")
D.dhL=w([D.bg,D.eN,D.jP,D.CT,D.fs,D.jQ,D.l6],x.m)
D.el3=new B.z(240,96)
D.enJ=new B.z(560,46)
D.dhQ=w([D.el3,D.enJ],x.G)
D.hcp=new C.xA(0,"classic")
D.dFR=new C.nH("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aG3,4294570461,4282000405,4284234270)
D.dG2=new C.nH("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aG4,4294635750,4281999378,4285213214)
D.dFS=new C.nH("elegant_navy","Umoja Mzuri",y.s,D.a5i,4294967035,4279378237,4290283019)
D.dG4=new C.nH("elegant_gold","Umoja wa Dhahabu",y.Q,D.aGc,4294966515,4281016592,4289102906)
D.dG6=new C.nH("kente_sunset","Kente ya Jua",y.H,D.aG5,4294964964,4282000405,4279983648)
D.dFP=new C.nH("indigo_mudcloth","Nguo ya Indigo",y.n,D.aG6,4294439140,4279903102,4279903102)
D.dFU=new C.nH("adinkra_royal","Muhuri wa Adinkra",y.z,D.aG7,4294965484,4285218591,4287322667)
D.dFZ=new C.nH("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aG8,4294244340,4279196764,4279196764)
D.dG0=new C.nH("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aG9,4294505710,4279970378,4291058750)
D.hcq=new C.xA(1,"ringsNdoa")
D.dFT=new C.nH("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.rC,4294966259,4279378237,4291404327)
D.hcs=new C.xA(2,"coupleCards")
D.dG3=new C.nH("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.rC,4294966259,4279378237,4291404327)
D.hct=new C.xA(3,"kuhoweshaForm")
D.dG_=new C.nH("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.CN,4294966519,4279378237,4291404327)
D.hcu=new C.xA(4,"mahariPande")
D.dFQ=new C.nH("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.rC,4294966259,4279904068,4291404327)
D.hcv=new C.xA(5,"familiaMti")
D.dG5=new C.nH("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aGa,4294966776,4280241466,4291404327)
D.hcw=new C.xA(6,"ndoaSafi")
D.dFX=new C.nH("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.CN,4294966519,4279378237,4291404327)
D.hcx=new C.xA(7,"peteWide")
D.dFW=new C.nH("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.rC,4294966259,4282001936,4291404327)
D.hcy=new C.xA(8,"muhuriCrest")
D.dFV=new C.nH("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.rC,4294966259,4279378237,4291404327)
D.hcz=new C.xA(9,"fomuWazi")
D.dFY=new C.nH("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.CN,4294966519,4279904068,4291404327)
D.hcr=new C.xA(10,"upendoOrnate")
D.dG1=new C.nH("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aGb,4294965493,4286200650,4291404327)
D.QY=w([D.dFR,D.dG2,D.dFS,D.dG4,D.dG6,D.dFP,D.dFU,D.dFZ,D.dG0,D.dFT,D.dG3,D.dG_,D.dFQ,D.dG5,D.dFX,D.dFW,D.dFV,D.dFY,D.dG1],B.ax("O<nH>"))
D.CR=new C.ar4(0,"landscape169")
D.of=new C.ar4(1,"portrait916")
D.diD=w([D.CR,D.of],B.ax("O<ar4>"))
D.ayO=w([A.hK,A.bM,A.cs,A.iy,A.c],x.O)
D.um=w([A.c0,A.ie],x.O)
D.ekb=new B.z(1000,"M")
D.ep7=new B.z(900,"CM")
D.enD=new B.z(500,"D")
D.elU=new B.z(400,"CD")
D.ekc=new B.z(100,"C")
D.ep8=new B.z(90,"XC")
D.enE=new B.z(50,"L")
D.elV=new B.z(40,"XL")
D.eki=new B.z(10,"X")
D.epj=new B.z(9,"IX")
D.enV=new B.z(5,"V")
D.eno=new B.z(4,"IV")
D.ekK=new B.z(1,"I")
D.dji=w([D.ekb,D.ep7,D.enD,D.elU,D.ekc,D.ep8,D.enE,D.elV,D.eki,D.epj,D.enV,D.eno,D.ekK],x.ek)
D.eLP=new B.cA(["open",A.jr,"Open & write","Keep writing this book"])
D.eMf=new B.cA(["print",A.u7,"Print as a book","Fold and staple it"])
D.djs=w([D.eLP,D.eMf],B.ax("O<+(m,a0,m,m)>"))
D.dk9=w([D.a5q,D.mK,D.I3,D.S6,D.de,D.S5],x.i)
D.eCq=new B.z(-1,"Small")
D.ejX=new B.z(0,"Normal")
D.ekJ=new B.z(1,"Big")
D.elj=new B.z(2,"Huge")
D.dkH=w([D.eCq,D.ejX,D.ekJ,D.elj],x.ek)
D.dl7=w([49,65,89,38,83,89],x.t)
D.dle=w([A.vf,A.hK,A.c0],x.O)
D.dlG=w([D.de,D.mK,D.ut,D.a5q,D.I3,D.S6],x.i)
D.aE5=new B.dt([0,D.LU,8,D.agG,12,D.agH],B.ax("dt<G,a3K>"))
D.e5B={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bjM=new B.w(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cPr=w([A.bM,D.bjM],x.O)
D.d90=w([A.b3,A.bj],x.O)
D.d3F=w([A.bY,A.aN,A.bH],x.O)
D.djt=w([A.cr,A.bq],x.O)
D.cXe=w([A.b8,A.f_],x.O)
D.d6n=w([A.b6,A.fc],x.O)
D.bd2=new B.w(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.d5E=w([D.bd2,A.oK],x.O)
D.d09=w([A.h3,A.xm],x.O)
D.cX2=w([A.bv,A.cb],x.O)
D.dol=new B.bk(D.e5B,[D.cPr,I.api,D.d90,D.d3F,D.djt,D.cXe,D.d6n,D.d5E,D.d09,D.cX2],B.ax("bk<m,ai<w>>"))
D.e4I={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a4g=new B.bk(D.e4I,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.ax("bk<m,m>"))
D.a4n=new B.bk(A.hX,[],B.ax("bk<G,+icon3d,picture(m?,m?)>"))
D.dt2=new F.MR(30,null)
D.dy6=new F.mt("Chapter 1","","","")
D.dio=w([D.dy6],x.B)
D.dya=new F.rl("My Book","","",D.dio,E.aFn)
D.dy8=new F.uz("starry",null,null,null,null,"","","")
D.dyb=new F.rl("Dream Big","","",E.a3j,D.dy8)
D.dy9=new F.uz("story",null,null,null,null,"","","")
D.dyc=new F.rl("Little Lion","","",E.a3j,D.dy9)
D.dy7=new F.uz("vintage",null,null,null,null,"","","")
D.dyd=new F.rl("Our Story","","",E.a3j,D.dy7)
D.dBe=new C.Ew("","NGMY","","")
D.dIv=new C.zv("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
D.e_r=new C.b12(null,null,null,null)
D.e19=new C.ar9(null)
D.e1m=new C.arD(0,"smaller")
D.e1n=new C.arD(1,"bigger")
D.aGH=new C.arD(2,"fit")
D.e8s=new B.v(3,6)
D.e8C=new B.v(4,8)
D.ec2=new B.D(E.ahv,T.acq,null)
D.ec6=new B.D(A.YL,A.lH,null)
D.bIU=new B.ae(A.lp,16,A.bX,null,null,null)
D.eca=new B.D(A.ij,D.bIU,null)
D.b7r=new B.fk(2.2,null,null,null,null,A.c,null,null,null,null)
D.ecm=new B.D(A.FI,D.b7r,null)
D.bTc=new B.ae(A.cD,16,A.aA,null,null,null)
D.ecq=new B.D(A.ek,D.bTc,null)
D.frb=new B.y("Play",null,A.nC,null,null,null,null,null,null,null,null,null)
D.d9f=w([U.anM,A.rP,D.frb],x.p)
D.eQq=new B.cl(A.aP,A.e,A.N,A.m,null,A.p,null,0,D.d9f,null)
D.ect=new B.D(A.nh,D.eQq,null)
D.b7A=new B.fk(2.4,null,null,null,null,null,null,null,null,null)
D.eWc=new B.a7(20,20,D.b7A,null)
D.ecy=new B.D(A.ij,D.eWc,null)
D.fAi=new B.y("Seconds per slide",null,A.hu,null,null,null,null,null,null,null,null,null)
D.ecG=new B.D(A.bl,D.fAi,null)
D.ee0=new C.a8B(2,"print")
D.ee3=new B.iS(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.efG=new B.he("/Annot")
D.efI=new B.he("/URI")
D.flu=new B.y("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.ehK=new B.jq("share",48,D.flu,null,B.ax("jq<m>"))
D.bT6=new B.ae(A.dX,14,A.eC,null,null,null)
D.ehT=new B.cL(null,-2,-2,null,null,null,D.bT6,null)
D.cRv=w([H.af3,A.K],x.O)
D.bZD=new B.a8(A.a3,A.a8,A.x,D.cRv,null,null)
D.b0e=new B.o(null,null,null,null,null,D.bZD,A.n)
D.boM=new B.kR(D.b0e,A.bf,null,null)
D.ei4=new B.cL(0,0,null,0,8,null,D.boM,null)
D.ddX=w([A.i1,A.mk,A.cc],x.O)
D.eiJ=new B.bT(A.A,0.5,A.x,null,0,D.ddX,null,null)
D.elc=new B.z(0.22,A.bj)
D.epE=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.erJ=new B.z(0.5,A.hi)
D.eAV=new B.z(0.78,A.aV)
D.eLF=new B.cA([A.bu,0.22,0.7,2.6])
D.eLL=new B.cA([A.b8,0.36,1.2,1.3])
D.eLR=new B.cA([A.dR,0.28,0.2,0.4])
D.eLX=new B.cA([A.cA,0.05,0.3,0.35])
D.eM2=new B.cA([A.bv,0.28,0.9,0])
D.eMa=new B.cA([A.aE,-0.25,-0.15,0.45])
D.eN0=new B.cA([A.bY,0.42,1,4.1])
D.eQ8=new B.a9y(9)
D.bK0=new B.ae(A.GC,28,A.bH,null,null,null)
D.fAQ=new B.y("NGMY News",null,A.dj,null,null,null,null,null,null,null,null,null)
D.byF=new B.bB(1,A.bh,D.fAQ,null)
D.dh8=w([D.bK0,A.at,D.byF],x.p)
D.eQk=new B.cl(A.aP,A.e,A.j,A.m,null,A.p,null,0,D.dh8,null)
D.bKb=new B.ae(A.o5,16,A.c,null,null,null)
D.fCl=new B.y("Book",null,A.oo,null,null,null,null,null,null,null,null,null)
D.dld=w([D.bKb,A.ee,D.fCl],x.p)
D.eQs=new B.cl(A.aP,A.e,A.N,A.m,null,A.p,null,0,D.dld,null)
D.bQI=new B.ae(A.js,10,A.c,null,null,null)
D.fpg=new B.y("Pro",null,A.nz,null,null,null,null,null,null,null,null,null)
D.d9k=w([D.bQI,A.qt,D.fpg],x.p)
D.eQw=new B.cl(A.aP,A.e,A.N,A.m,null,A.p,null,0,D.d9k,null)
D.fAg=new B.y("Make a newspaper",null,A.U5,null,null,null,null,null,null,null,null,null)
D.c_O=w([E.a1g,A.ab,D.fAg],x.p)
D.eQx=new B.cl(A.aP,A.e,A.N,A.m,null,A.p,null,0,D.c_O,null)
D.bPf=new B.ae(A.lm,18,A.bM,null,null,null)
D.frp=new B.y("Ending celebration",null,A.hH,null,null,null,null,null,null,null,null,null)
D.dge=w([D.bPf,A.bp,D.frp],x.p)
D.eQA=new B.cl(A.aP,A.e,A.j,A.m,null,A.p,null,0,D.dge,null)
D.bQu=new B.ae(A.jr,18,A.k_,null,null,null)
D.f5U=new B.H(!0,A.k_,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCD=new B.y("Write",null,D.f5U,null,null,null,null,null,null,null,null,null)
D.cZe=w([D.bQu,A.ab,D.fCD],x.p)
D.eQH=new B.cl(A.aP,A.e,A.N,A.m,null,A.p,null,0,D.cZe,null)
D.fpe=new B.y("Download picture",null,A.on,null,null,null,null,null,null,null,null,null)
D.bAN=new B.qp(A.dZ,A.A,A.f,D.fpe,null)
D.bAY=new B.dq(1,A.co,D.bAN,null)
D.d9J=w([L.anC,A.ab,D.bAY],x.p)
D.eQI=new B.cl(A.aP,A.b9,A.j,A.m,null,A.p,null,0,D.d9J,null)
D.bLZ=new B.ae(A.GC,22,A.bH,null,null,null)
D.fyS=new B.y("NGMY NEWS",null,I.a80,null,null,null,null,null,null,null,null,null)
D.cQW=w([D.bLZ,A.ab,D.fyS],x.p)
D.eQR=new B.cl(A.aP,A.e,A.N,A.m,null,A.p,null,0,D.cQW,null)
D.eR2=new B.pc(!1,!1,null,T.VZ,null,A.c_,null,null,null)
D.a73=new B.jk([D.cn,D.de,D.ut,D.I2,D.uu,D.aGx],B.ax("jk<hF>"))
D.e7g={title:0,quote:1,closing:2,bio:3}
D.eSd=new B.dD(D.e7g,4,x.M)
D.e50={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eSg=new B.dD(D.e50,5,x.M)
D.e6y={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a74=new B.dD(D.e6y,8,x.M)
D.e5L={Design:0,Transitions:1,Insert:2}
D.eSl=new B.dD(D.e5L,3,x.M)
D.hcH=new B.jk([D.a5r],B.ax("jk<w1>"))
D.e5U={float3d:0,drift:1,pulse:2}
D.eSp=new B.dD(D.e5U,3,x.M)
D.aNW=new B.jk([D.I_,D.I0,D.I1],B.ax("jk<mx>"))
D.e4Z={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aNZ=new B.dD(D.e4Z,14,x.M)
D.hcI=new B.dD(A.hX,0,B.ax("dD<w1>"))
D.e5R={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Tc=new B.dD(D.e5R,4,x.M)
D.e4R={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aO1=new B.dD(D.e4R,30,x.M)
D.e6_={circle:0,triangle:1,hexagon:2,diamond:3}
D.eSL=new B.dD(D.e6_,4,x.M)
D.eVa=new B.ar(390,844)
D.eVX=new B.a7(20,20,A.KG,null)
D.aOP=new B.a7(null,2.5,null,null)
D.eW6=new B.a7(18,18,A.KG,null)
D.bQy=new B.ae(A.j3,19,A.c,null,null,null)
D.eWh=new B.a7(38,38,D.bQy,null)
D.bOO=new B.ae(A.yC,22,A.c,null,null,null)
D.eWj=new B.a7(40,40,D.bOO,null)
D.eWS=new B.hQ(2,10,10,1.15,null)
D.aOX=new B.hQ(2,16,14,0.62,null)
D.bwJ=new B.Q(32,30,32,40)
D.b8W=new B.w(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bJY=new B.ae(A.q1,56,D.b8W,null,null,null)
D.afT=new B.w(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.f7T=new B.H(!0,D.afT,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvS=new B.y("Your books will live here.",null,D.f7T,null,A.L,null,null,null,null,null,null,null)
D.d15=w([D.bJY,A.R,D.fvS],x.p)
D.bnK=new B.fm(A.ah,A.e,A.j,A.m,null,A.p,null,0,D.d15,null)
D.ecE=new B.D(D.bwJ,D.bnK,null)
D.eXc=new B.ma(D.ecE,null)
D.fvP=new B.y("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.eXu=new B.b1(D.fvP,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.ftW=new B.y("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.eXv=new B.b1(D.ftW,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fyW=new B.y("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.eXE=new B.b1(D.fyW,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fzt=new B.y("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.eXU=new B.b1(D.fzt,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fsC=new B.y("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.eY6=new B.b1(D.fsC,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fGy=new B.y("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.eYp=new B.b1(D.fGy,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fDG=new B.y("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.eYA=new B.b1(D.fDG,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fzB=new B.y("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eZg=new B.b1(D.fzB,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fnu=new B.y("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.eZx=new B.b1(D.fnu,null,null,null,null,null,null,null,A.iu,null,null,null,null,A.pR,!1,null,null,null,A.r,null)
D.fpn=new B.y("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.eZP=new B.b1(D.fpn,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fvv=new B.y("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.eZR=new B.b1(D.fvv,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fvb=new B.y("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.eZS=new B.b1(D.fvb,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fBD=new B.y("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.eZT=new B.b1(D.fBD,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fjH=new B.y("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.f_1=new B.b1(D.fjH,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fqx=new B.y("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.f_o=new B.b1(D.fqx,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fFi=new B.y("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.f_q=new B.b1(D.fFi,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fEQ=new B.y("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.f_u=new B.b1(D.fEQ,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fiH=new B.y("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f_w=new B.b1(D.fiH,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fAL=new B.y("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.f_F=new B.b1(D.fAL,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fEq=new B.y("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.f_U=new B.b1(D.fEq,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fEh=new B.y("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.f_W=new B.b1(D.fEh,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fiz=new B.y("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.f01=new B.b1(D.fiz,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fmu=new B.y("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.f0t=new B.b1(D.fmu,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fDt=new B.y("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.f0F=new B.b1(D.fDt,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fmi=new B.y("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.f0U=new B.b1(D.fmi,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.bfW=new B.w(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cPF=w([A.iy,A.oK,D.bfW,D.acR,A.iy],x.O)
D.f1h=new B.fW(A.A,0,6.283185307179586,A.x,D.cPF,null,null)
D.cYt=w([A.bM,A.c0,A.hK,D.AT,A.bM],x.O)
D.aPw=new B.fW(A.A,0,6.283185307179586,A.x,D.cYt,null,null)
D.dbv=w([A.bY,A.bu,A.b8,A.b2,A.bH,A.bY],x.O)
D.f1m=new B.fW(A.A,0,6.283185307179586,A.x,D.dbv,null,null)
D.cRJ=w([A.pO,A.oL,A.AI,A.iy,A.pO],x.O)
D.f1n=new B.fW(A.A,0,6.283185307179586,A.x,D.cRJ,null,null)
D.dbp=w([A.aQ,A.bK,A.aL,A.ak,A.aQ],x.O)
D.f1o=new B.fW(A.A,0,6.283185307179586,A.x,D.dbp,null,null)
D.dj8=w([A.bv,A.b8,A.bu,A.bY,A.bv],x.O)
D.f1q=new B.fW(A.A,0,6.283185307179586,A.x,D.dj8,null,null)
D.bgc=new B.w(1,0,1,1,A.t)
D.ba7=new B.w(1,1,0,1,A.t)
D.dfe=w([A.Ey,A.aeM,I.adE,D.bgc,I.ae4,D.ba7,A.Ey],x.O)
D.f1r=new B.fW(A.A,0,6.283185307179586,A.x,D.dfe,null,null)
D.f1G=new C.avH(2,"immersiveSticky")
D.f1H=new C.avH(3,"edgeToEdge")
D.f1I=new C.avH(4,"manual")
D.f46=new B.H(!0,A.oF,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQ3=new B.H(!0,A.f0,null,null,null,null,12.5,A.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4F=new B.H(!0,E.n5,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6a=new B.H(!0,A.ad,null,null,null,null,13,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f79=new B.H(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7j=new B.H(!0,A.bX,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7E=new B.H(!0,A.eC,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f92=new B.H(!0,A.bK,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9b=new B.H(!0,A.jj,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9p=new B.rH(!0,A.Im,null,null,null,null,A.dt,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9T=new B.H(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faw=new B.H(!0,A.jh,null,null,null,null,11.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faU=new B.H(!0,A.aA,null,null,null,null,12.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ee6=new B.iS(1,1,0.7568627450980392,0.027450980392156862)
D.faY=new B.rH(!0,D.ee6,null,null,null,null,A.dt,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.aeT=new B.w(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aQN=new B.H(!0,D.aeT,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb5=new B.H(!0,D.afT,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb6=new B.H(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQP=new B.H(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbJ=new B.rH(!0,A.pb,null,null,null,null,A.dt,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc0=new B.H(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcx=new B.H(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcz=new B.H(!0,D.aeT,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Jn=new B.H(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd1=new B.H(!0,A.c0,null,null,null,null,11.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fda=new B.H(!0,A.bK,null,null,null,null,14,A.a6,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdd=new B.H(!0,A.bM,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdv=new B.H(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.awv,null,null,null)
D.fdx=new B.H(!0,A.c9,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdz=new B.H(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdM=new B.H(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdY=new B.H(!0,A.ds,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fev=new B.H(!0,A.aS,null,null,null,null,null,A.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feE=new B.H(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feS=new B.H(!0,A.ad,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRr=new B.H(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRt=new B.H(!0,A.bX,null,null,null,null,11.5,A.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.blm=new B.w(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.fgA=new B.H(!0,D.blm,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRA=new B.H(!0,E.n5,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh4=new B.H(!0,A.bK,null,null,null,null,11,A.a6,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh7=new B.H(!0,O.li,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa7=new B.H(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fil=new B.y("NEW",null,D.fa7,null,null,null,null,null,null,null,null,null)
D.fiC=new B.y("Hati ya Kuhowesha",null,A.ft,null,null,null,null,null,null,null,null,null)
D.fj3=new B.y("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fjn=new B.y("Scrollable PDF on this slide",null,A.dp,null,null,null,null,null,null,null,null,null)
D.fk6=new B.y("Big quote mark",null,A.iP,null,null,null,null,null,null,null,null,null)
D.fk9=new B.y("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fkk=new B.y("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fkM=new B.y("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fkO=new B.y("How many slides?",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fll=new B.y("Transfer",null,A.ck,null,null,null,null,null,null,null,null,null)
D.f5X=new B.H(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flH=new B.y("Luxury FX",null,D.f5X,null,null,null,null,null,null,null,null,null)
D.fm1=new B.y("Font",null,A.rU,null,null,null,null,null,null,null,null,null)
D.fmc=new B.y("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fmj=new B.y("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fg8=new B.H(!0,A.bK,null,null,null,null,12,A.P,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmr=new B.y("Example  GA847",null,D.fg8,null,null,null,null,null,null,null,null,null)
D.fmR=new B.y("Design shapes",null,A.iP,null,null,null,null,null,null,null,null,null)
D.fn0=new B.y("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fn4=new B.y("Non-stop (loop)",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fni=new B.y("Hati ya Kuhoweya",null,A.ft,null,null,null,null,null,null,null,null,null)
D.fnB=new B.y("Photo studio",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fo3=new B.y("Add your picture",null,A.kg,null,null,null,null,null,null,null,null,null)
D.f9q=new B.H(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo4=new B.y("Enter document code",null,D.f9q,null,A.L,null,null,null,null,null,null,null)
D.fo5=new B.y("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.foa=new B.y("English",null,null,null,null,null,null,null,null,null,null,null)
D.f7_=new B.H(!0,E.n5,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fow=new B.y("Delete this book?",null,D.f7_,null,A.L,null,null,null,null,null,null,null)
D.fbz=new B.H(!0,E.n5,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpp=new B.y("Your library",null,D.fbz,null,null,null,null,null,null,null,null,null)
D.fpv=new B.y("Delete",null,A.aQH,null,null,null,null,null,null,null,null,null)
D.fpy=new B.y("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,As.Dy,null,null,null,null,null,null,null,null,null)
D.fpJ=new B.y("Element flies in",null,A.aQT,null,null,null,null,null,null,null,null,null)
D.Ue=new B.y("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fq6=new B.y("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fqq=new B.y("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.fqu=new B.y("Cancel",null,E.aR3,null,null,null,null,null,null,null,null,null)
D.fqw=new B.y("The lines and circles that come with the design",null,A.hg,null,null,null,null,null,null,null,null,null)
D.ff_=new B.H(!0,A.fW,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqX=new B.y("DOCUMENT CODE",null,D.ff_,null,null,null,null,null,null,null,null,null)
D.frL=new B.y("Quotes",null,G.a8D,null,null,null,null,null,null,null,null,null)
D.f8Q=new B.H(!0,O.li,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frT=new B.y("Add a picture",null,D.f8Q,null,null,null,null,null,null,null,null,null)
D.fs0=new B.y("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a8k,null,A.L,null,null,null,null,null,null,null)
D.fs4=new B.y("Look & feel",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fs9=new B.y("Rings",null,A.hH,null,null,null,null,null,null,null,null,null)
D.fsf=new B.y("W",null,A.rU,null,null,null,null,null,null,null,null,null)
D.fsp=new B.y("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fsI=new B.y("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.U1,null,A.L,null,null,null,null,null,null,null)
D.fsK=new B.y("Write your book",null,A.cC,null,null,null,null,null,null,null,null,null)
D.ftt=new B.y("Add page",null,A.ck,null,null,null,null,null,null,null,null,null)
D.ftI=new B.y("Malipo ya Awamu ya Mahari",null,A.ft,null,null,null,null,null,null,null,null,null)
D.f9f=new B.H(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftX=new B.y("Create with AI",null,D.f9f,null,A.L,null,null,null,null,null,null,null)
D.fuq=new B.y("Apply look",null,A.hH,null,null,null,null,null,null,null,null,null)
D.f9Y=new B.H(!0,A.es,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvd=new B.y("Type your presentation below",null,D.f9Y,null,A.L,null,null,null,null,null,null,null)
D.fvg=new B.y("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,I.aRE,null,A.L,null,null,null,null,null,null,null)
D.fvi=new B.y("Keep it",null,A.ck,null,null,null,null,null,null,null,null,null)
D.f4W=new B.H(!0,A.cl,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvp=new B.y("Done",null,D.f4W,null,null,null,null,null,null,null,null,null)
D.fvK=new B.y("Delete",null,A.nB,null,null,null,null,null,null,null,null,null)
D.fvU=new B.y("Hati ya Kiapo cha Uongozi",null,A.ft,null,null,null,null,null,null,null,null,null)
D.f8a=new B.H(!0,A.aS,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwO=new B.y("Write your idea in any language \u2014 the AI makes the slides.",null,D.f8a,null,A.L,null,null,null,null,null,null,null)
D.fx9=new B.y("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fxf=new B.y("Layout",null,A.U7,null,null,null,null,null,null,null,null,null)
D.fxT=new B.y("Print",null,A.cC,null,null,null,null,null,null,null,null,null)
D.fxZ=new B.y("X",null,A.rU,null,null,null,null,null,null,null,null,null)
D.fyz=new B.y("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,A9.Ji,null,null,null,null,null,null,null,null,null)
D.fz8=new B.y("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fzl=new B.y("Hati ya Kuhowa",null,A.ft,null,null,null,null,null,null,null,null,null)
D.fzn=new B.y("Choose a class template",null,A.ft,null,null,null,null,null,null,null,null,null)
D.fzp=new B.y("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fzv=new B.y("Download the newspaper picture",null,A.cC,null,null,null,null,null,null,null,null,null)
D.fzI=new B.y("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fzP=new B.y("Done",null,A.aRq,null,null,null,null,null,null,null,null,null)
D.fzZ=new B.y("Ending celebration",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fA_=new B.y("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fAe=new B.y("Plays after your last slide. Tap one to watch it and change its words or logo.",null,A9.zP,null,null,null,null,null,null,null,null,null)
D.fBa=new B.y("Export presentation",null,A.dp,null,null,null,null,null,null,null,null,null)
D.fBb=new B.y("What would you like to do?",null,D.aQN,null,null,null,null,null,null,null,null,null)
D.fBf=new B.y("Delete",null,A.cC,null,null,null,null,null,null,null,null,null)
D.fBL=new B.y("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fBP=new B.y("Hati (Documents)",null,A.ft,null,null,null,null,null,null,null,null,null)
D.fC1=new B.y("Done",null,A.lb,null,null,null,null,null,null,null,null,null)
D.ffZ=new B.H(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC6=new B.y("Delete presentation?",null,D.ffZ,null,A.L,null,null,null,null,null,null,null)
D.fCp=new B.y("After the last slide it starts again from the first",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fCB=new B.y("\ud83c\udf33",null,A.Jg,null,A.L,null,null,null,null,null,null,null)
D.fCT=new B.y("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fD_=new B.y("Transfer document",null,A.or,null,null,null,null,null,null,null,null,null)
D.fDa=new B.y("Add to the slides",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fDx=new B.y("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fDM=new B.y("Make a book",null,K.aQl,null,null,null,null,null,null,null,null,null)
D.fDQ=new B.y("Books",null,A.cC,null,null,null,null,null,null,null,null,null)
D.f8J=new B.H(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDR=new B.y("Keep this page open until it finishes.",null,D.f8J,null,null,null,null,null,null,null,null,null)
D.fDU=new B.y("Making your video",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fDZ=new B.y("LANGUAGE",null,H.zQ,null,null,null,null,null,null,null,null,null)
D.fE5=new B.y("Use this ending",null,A.cC,null,null,null,null,null,null,null,null,null)
D.fEd=new B.y("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fEf=new B.y("Upload a different logo",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fEw=new B.y("Delete from the database?",null,A.kg,null,null,null,null,null,null,null,null,null)
D.fEx=new B.y("H",null,A.rU,null,null,null,null,null,null,null,null,null)
D.fEW=new B.y("NGMY Quotes",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fFn=new B.y("Cover",null,D.aRA,null,null,null,null,null,null,null,null,null)
D.fFr=new B.y("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fFs=new B.y("Each page becomes its own slide you can present",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fFO=new B.y("Y",null,A.rU,null,null,null,null,null,null,null,null,null)
D.fFZ=new B.y("Crop the picture",null,A.lb,null,null,null,null,null,null,null,null,null)
D.fG5=new B.y("Edit text",null,A.Jh,null,null,null,null,null,null,null,null,null)
D.fIk=B.dU("a8n")
D.DK=new C.ax_(0,"none")
D.aV5=new C.ax_(1,"zipCrypto")
D.aV6=new C.ax_(2,"aes")
D.h1j=new F.Pj("","",null)
D.h2p=new C.bcf(null)
D.h3w=new C.Zz(null)
D.h5o=new C.adh(null)
D.h5q=new C.aEb(null)
D.h8b=new C.a_O(null)
D.h8s=new C.a0k(null)
D.h8L=new C.btT(null)})();(function staticFields(){$.hfP=null
$.hfQ=null
$.hfR=null
$.hfS=null
$.fYG=B.v7("_lastQuoRemDigits")
$.fYH=B.v7("_lastQuoRemUsed")
$.axl=B.v7("_lastRemUsed")
$.fYI=B.v7("_lastRem_nsh")
$.qc=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a79=B.U(x.N,x.I)
$.fWb=!1
$.hkC=B.U(B.ax("kU"),x.N)
$.hkP=B.U(B.ax("kU"),x.E)
$.hiQ=!1
$.bzu="q"
$.Qg=0
$.CG=B.U(x.N,B.ax("ai<zx>"))
$.hjb=!1
$.h_h=!1
$.hpu=null
$.hTF=B.U(x.N,B.ax("aA<m?>"))
$.Kn=""
$.j2=0
$.hcB=function(){var w=x.N
return B.U(w,w)}()
$.hcA=B.U(x.N,x.R)
$.h_C=!1
$.afZ=B.U(x.N,x.E)
$.h0p=0
$.bkk=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ihZ","D0",()=>C.b9L(0))
w($,"ihX","a2z",()=>C.b9L(1))
w($,"ihY","ht6",()=>C.b9L(2))
w($,"ihW","h4k",()=>$.a2z().v1(0))
w($,"ihU","ht4",()=>C.b9L(1e4))
w($,"ihV","ht5",()=>B.Ec(8))
w($,"idL","hr6",()=>B.Ec(0))
w($,"idT","hra",()=>B.Ec(0))
w($,"idS","hr9",()=>B.bYB(0))
w($,"ilF","hv6",()=>{var v,u,t=x.N
t=B.U(t,t)
for(v=D.a4g.gdL(D.a4g),v=v.gae(v);v.C();){u=v.gR(v)
t.n(0,u.b,u.a)}return t})
w($,"im5","bDZ",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mW(new C.fGX(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mW(new C.fGY(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mW(new C.fGZ(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mW(new C.fH9(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mW(new C.fHe(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mW(new C.fHf(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mW(new C.fHg(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mW(new C.fHh(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mW(new C.fHi(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mW(new C.fHj(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mW(new C.fHk(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mW(new C.fH_(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mW(new C.fH0(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mW(new C.fH1(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mW(new C.fH2(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mW(new C.fH3(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mW(new C.fH4(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mW(new C.fH5(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mW(new C.fH6(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mW(new C.fH7(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mW(new C.fH8(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mW(new C.fHa(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mW(new C.fHb(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mW(new C.fHc(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mW(new C.fHd(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.ax("O<EF>"))})
w($,"ilI","hv8",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["mzwyw0dSzpWkDLFwz3hH5tvldUg="]=a.current})($__dart_deferred_initializers__);