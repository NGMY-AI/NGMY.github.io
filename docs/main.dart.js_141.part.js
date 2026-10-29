((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ah,A5,Ai,A6,Aj,U,A7,Ak,Al,C={
tK(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fWz(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
Ju(d){var w
if(d===0)return $.CQ()
if(d===1)return $.a2i()
if(d===2)return $.hqM()
if(Math.abs(d)<4294967296)return C.b9i(A.o.N(d))
w=C.hLr(d)
return w},
b9i(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.tK(4,w)
return new C.nS(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.tK(1,w)
return new C.nS(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aA(d,16)
v=C.tK(2,w)
return new C.nS(v===0?!1:s,w,v)}v=A.o.an(A.o.gajE(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.an(d,65536)}v=C.tK(v,w)
return new C.nS(v===0?!1:s,w,v)},
hLr(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.V(B.dI("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.CQ()
w=$.hqL()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.l6(A.aH.gaM(w))
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
q=new C.nS(!1,r,4)
if(s<0)p=q.ms(0,-s)
else p=s>0?q.dX(0,s):q
return p},
fWA(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hdB(d,e,f,g){var w,v,u,t,s,r=A.o.an(f,16),q=A.o.E(f,16),p=16-q,o=A.o.dX(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fF(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dX(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hdw(d,e,f,g){var w,v,u,t,s=A.o.an(f,16)
if(A.o.E(f,16)===0)return C.fWA(d,e,s,g)
w=e+s+1
C.hdB(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hLu(d,e,f,g){var w,v,u,t,s=A.o.an(f,16),r=A.o.E(f,16),q=16-r,p=A.o.dX(1,r)-1,o=A.o.fF(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dX(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fF(u,r)}w&2&&B.aj(g)
g[n]=o},
cEj(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hLs(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
b9j(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}},
hdC(d,e,f,g,h,i){var w,v,u,t,s,r
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
hLt(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.e6((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nS:function nS(d,e,f){this.a=d
this.b=e
this.c=f},
cEk:function cEk(){},
cEl:function cEl(){},
cEm:function cEm(d,e){this.a=d
this.b=e},
cEn:function cEn(d){this.a=d},
aQO:function aQO(d,e){this.a=d
this.b=e},
h3s(d,e,f){var w=new C.Ru(d,A.o.an(Date.now(),1000),e)
w.Q=f
return w},
Ru:function Ru(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a3t:function a3t(d,e){this.a=d
this.b=e},
bH3:function bH3(d){this.a=d
this.c=this.b=0},
htZ(){return new C.bFq()},
bFq:function bFq(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cwu:function cwu(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hL9(d,e,f){var w,v,u,t,s
if(d.gam(d))return new Uint8Array(0)
w=new Uint8Array(B.ce(d.gcW3(d)))
v=f*2+2
u=C.hbd(C.hbf(),64)
t=new C.cgj(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cgk(e,1000,v)
s=new Uint8Array(v)
return A.aH.dq(s,0,t.cJw(w,0,s,0))},
cws:function cws(d,e){this.c=d
this.d=e},
awC:function awC(d,e){this.a=d
this.b=e},
cwv:function cwv(d,e,f,g){var _=this
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
b8_:function b8_(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cwt:function cwt(){this.a=$},
hd0(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
htI(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bE0:function bE0(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
h19(d,e){e&=31
return(d&$.q6[e])<<e>>>0},
nq(d,e){e&=31
return(d>>>e|C.h19(d,32-e))>>>0},
hbe(d){var w,v=new C.ask()
if(B.iI(d))v.aJC(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hbf(){var w=C.hbe(0),v=new Uint8Array(4),u=x.S
u=new C.cgl(w,v,A.DW,5,B.c2(5,0,!1,u),B.c2(80,0,!1,u))
u.lC(0)
return u},
hbd(d,e){var w=new C.cgh(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cgg:function cgg(){},
cgk:function cgk(d,e,f){this.a=d
this.b=e
this.c=f},
cge:function cge(){},
asj:function asj(d){this.a=d},
cgj:function cgj(d){this.a=$
this.b=d
this.c=$},
cgf:function cgf(){},
cgd:function cgd(){},
ask:function ask(){this.b=this.a=$},
cgi:function cgi(){},
cgl:function cgl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cgh:function cgh(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cgc:function cgc(){},
cgb:function cgb(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bNk:function bNk(){},
bNl:function bNl(d){this.a=d},
hOo(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b9y:function b9y(){},
cqj:function cqj(){},
bOd:function bOd(d,e){this.a=d
this.b=!1
this.c=e},
bOe:function bOe(){},
hXj(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
avg(d){var w=0,v=B.j(x.H),u
var $async$avg=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.eY_?2:4
break
case 2:w=5
return B.b(A.kb.fZ("SystemChrome.setEnabledSystemUIMode",d.a5(),u),$async$avg)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kb.fZ("SystemChrome.setEnabledSystemUIOverlays",C.hXj(null),u),$async$avg)
case 6:case 3:return B.h(null,v)}})
return B.i($async$avg,v)},
avj:function avj(d,e){this.a=d
this.b=e},
a85:function a85(d){this.a=d},
fSy(d,e){return new C.aVg(e,d,null)},
aVg:function aVg(d,e,f){this.e=d
this.c=e
this.a=f},
aAa:function aAa(d,e,f,g,h){var _=this
_.ah=d
_.ak=e
_.aa$=f
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
hZY(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fsq(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.k.bv(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fsq:function fsq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ana(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$ana=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.agz("ngmy_menu_lib_v1_zzslides_index",A.bH),$async$ana)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.da(s,x.f)
t=B.cF(t,new C.bYU(),t.$ti.k("J.E"),x.P)
r=B.C(t,B.a3(t).k("J.E"))}else r=B.a([],x.d)
A.d.b2(r,new C.bYV())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ana,v)},
anc(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$anc=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ana(),$async$anc)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.T(t,x.P)
for(r=J.aV(j);r.C();){q=r.gR(r)
p=J.q(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.S(Date.now(),0,!1).a7().ac()
p=m.a
k=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.np("ngmy_menu_lib_v1_zzslide_"+B.aK(p,k,""),B.F(["deck",m.ag(),"savedAt",l],t,q),null),$async$anc)
case 7:if(!f){w=5
break}s.n(0,p,B.F(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.L)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bc<2>")
s=B.C(new B.bc(s,r),r.k("J.E"))
w=10
return B.b(B.np("ngmy_menu_lib_v1_zzslides_index",B.F(["items",s,"savedAt",new B.S(Date.now(),0,!1).a7().ac()],t,q),null),$async$anc)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anc,v)},
bYW(d){return C.hzq(d)},
hzq(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bYW=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.agz("ngmy_menu_lib_v1_zzslide_"+B.aK(d,o,""),A.hL),$async$bYW)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.VD(B.a2(q,x.N,x.z))
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
return B.i($async$bYW,v)},
anb(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$anb=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ana(),$async$anb)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nr(r,new C.bYX(d))
w=4
return B.b(B.np("ngmy_menu_lib_v1_zzslides_index",B.F(["items",r,"savedAt",new B.S(Date.now(),0,!1).a7().ac()],x.N,x.z),null),$async$anb)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aOQ("ngmy_menu_lib_v1_zzslide_"+B.aK(d,s,"")),$async$anb)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anb,v)},
bYU:function bYU(){},
bYV:function bYV(){},
bYX:function bYX(d){this.a=d},
i8U(d,e,f){return B.bR(A.K,null,new C.fIp(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fIp:function fIp(d,e,f){this.a=d
this.b=e
this.c=f},
a0x:function a0x(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aIz:function aIz(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
f5V:function f5V(d,e){this.a=d
this.b=e},
f5Z:function f5Z(d){this.a=d},
f6_:function f6_(d){this.a=d},
f60:function f60(d,e,f){this.a=d
this.b=e
this.c=f},
f5W:function f5W(d){this.a=d},
f5X:function f5X(d){this.a=d},
f5Y:function f5Y(d,e){this.a=d
this.b=e},
f5Q:function f5Q(d){this.a=d},
f5O:function f5O(d){this.a=d},
f5P:function f5P(d){this.a=d},
f5R:function f5R(d){this.a=d},
f5S:function f5S(d){this.a=d},
f64:function f64(d,e){this.a=d
this.b=e},
f63:function f63(d,e){this.a=d
this.b=e},
f5U:function f5U(d,e,f){this.a=d
this.b=e
this.c=f},
f5T:function f5T(d,e,f){this.a=d
this.b=e
this.c=f},
f61:function f61(d,e){this.a=d
this.b=e},
f62:function f62(d,e){this.a=d
this.b=e},
f67:function f67(d){this.a=d},
f68:function f68(d,e){this.a=d
this.b=e},
f66:function f66(d,e){this.a=d
this.b=e},
f65:function f65(){},
hg0(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.R.aI(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.da(w,x.f)
v=B.cF(v,new C.fda(),v.$ti.k("J.E"),x.ea)
u=B.a3(v).k("a_<J.E>")
v=B.C(new B.a_(v,new C.fdb(),u),u.k("J.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a1v(d){return C.i0d(d)},
i0d(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a1v=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fv2(n)
t=4
j=m
i=C
w=7
return B.b(B.a24("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a1v)
case 7:j.$1(i.hg0(f))
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
return B.b(B.aA(),$async$a1v)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hg0(B.aU(J.q(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.fdj(d),$async$a1v)
case 13:p=j.C(new i.a_(h,new g.fv0(f),o),o.k("J.E"))
A.d.b2(p,new C.fv1())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a1v,v)},
aha(d,e){return C.i8z(d,e)},
i8z(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aha=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fHU(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.R.ao(n,null)
q=!1
t=4
w=7
return B.b(B.ah1("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aha)
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
return B.b(B.aA(),$async$aha)
case 12:p=g
w=13
return B.b(p.ar("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aha)
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
return B.i($async$aha,v)},
fdj(d){return C.hPO(d)},
hPO(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fdj=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$fdj)
case 7:r=f
q=r.t8("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kE(q,B.U(q).c)
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
return B.i($async$fdj,v)},
afZ(d,e){return C.hZQ(d,e)},
hZQ(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$afZ=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$afZ)
case 6:s=g
r=B.aX(x.N)
q=s.t8("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h1(r,q)
J.ci(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a3(q).k("co.E"))
w=7
return B.b(s.ar("StringList","ngmy_books_deleted_v1_"+r,q),$async$afZ)
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
return B.b(C.a1v(d),$async$afZ)
case 8:n=g
J.nr(n,new C.fs6(e))
w=9
return B.b(C.aha(d,n),$async$afZ)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$afZ,v)},
i8Z(d,e){return B.a6(d,!1).cl(B.e8(new C.fIL(e),!0,null,x.H))},
hLw(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d7(w.d,new C.cFG())},
oi:function oi(d,e,f){this.a=d
this.b=e
this.c=f},
fda:function fda(){},
fdb:function fdb(){},
fv2:function fv2(d){this.a=d},
fv0:function fv0(d){this.a=d},
fv1:function fv1(){},
fHU:function fHU(){},
fs6:function fs6(d){this.a=d},
fIL:function fIL(d){this.a=d},
Yg:function Yg(d,e){this.c=d
this.a=e},
ax9:function ax9(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cFG:function cFG(){},
cFI:function cFI(d,e){this.a=d
this.b=e},
cFL:function cFL(d){this.a=d},
cFM:function cFM(d){this.a=d},
cFK:function cFK(){},
cFN:function cFN(d,e){this.a=d
this.b=e},
cFJ:function cFJ(d){this.a=d},
cFO:function cFO(){},
cFH:function cFH(d,e){this.a=d
this.b=e},
cFP:function cFP(){},
cFC:function cFC(d){this.a=d},
cFA:function cFA(d){this.a=d},
cFB:function cFB(d){this.a=d},
cFD:function cFD(d,e){this.a=d
this.b=e},
cFz:function cFz(d){this.a=d},
cFy:function cFy(d){this.a=d},
cFw:function cFw(d,e){this.a=d
this.b=e},
cFx:function cFx(d){this.a=d},
cFF:function cFF(){},
cFE:function cFE(d){this.a=d},
cFv:function cFv(d,e){this.a=d
this.b=e},
cFu:function cFu(d,e){this.a=d
this.b=e},
cFt:function cFt(d,e){this.a=d
this.b=e},
cFQ:function cFQ(d){this.a=d},
Ye:function Ye(d,e,f){this.c=d
this.d=e
this.a=f},
aEr:function aEr(d,e,f){this.a=d
this.b=e
this.c=f},
ax5:function ax5(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cEX:function cEX(d){this.a=d},
cEW:function cEW(d){this.a=d},
cEZ:function cEZ(d,e,f){this.a=d
this.b=e
this.c=f},
cF6:function cF6(){},
cF7:function cF7(d){this.a=d},
cF_:function cF_(d,e,f){this.a=d
this.b=e
this.c=f},
cEY:function cEY(d,e){this.a=d
this.b=e},
cF1:function cF1(d,e){this.a=d
this.b=e},
cF2:function cF2(d,e){this.a=d
this.b=e},
cF3:function cF3(d,e){this.a=d
this.b=e},
cF0:function cF0(d){this.a=d},
cF5:function cF5(d){this.a=d},
cF4:function cF4(d,e){this.a=d
this.b=e},
cFc:function cFc(d){this.a=d},
cF8:function cF8(d,e){this.a=d
this.b=e},
cF9:function cF9(d,e){this.a=d
this.b=e},
cFa:function cFa(d,e){this.a=d
this.b=e},
cFb:function cFb(d,e){this.a=d
this.b=e},
ax7:function ax7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
i2y(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ei(v,x.cK).bB(new C.fzz(),x.H).eL(new C.fzA())}}else if(s)C.hht()}catch(t){}},
hht(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ei(v,x.cK).eL(new C.fhA())}catch(u){}},
i2B(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fzz:function fzz(){},
fzA:function fzA(){},
fhA:function fhA(){},
hm4(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.eg(v,w,"").split(":"))},
hm1(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.l3)return null
return A.a.b4(w,14)},
h_U(d){var w
if(d.b!==D.l3)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b4(w,21)},
i30(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hm5(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
i2W(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aK(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aK(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kW(0,f)
t=x.N
u=B.cF(u,new C.fAy(),B.a3(u).k("J.E"),t)
s=B.C(u,B.a3(u).k("J.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kW(0,f),u=new B.Jt(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.Rb(A.a.ap(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.Rb(A.a.b4(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cF(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
i2U(d,e){var w,v,u,t,s,r=B.a3(e).k("cu<1>"),q=B.C(new B.cu(e,r),r.k("J.E"))
A.d.b2(q,new C.fAx())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.L)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.cb(s,"]"))continue
w=B.aPO(w,u,s,0)}return w},
i2Y(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a3K:$.hsM(),s=x.N,r=B.T(s,s)
for(s=t.gdL(t),s=s.gae(s);s.C();){w=s.gR(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.cb(u,"]"))continue
r.n(0,w.b,u)}return r},
hm2(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fec(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
if(C.hm4(q)===e)return q}return null},
i2Z(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b4(v,u)
return A.d.gI(D.Gz).a},
i3_(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.adS(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.adS(0,0,0)
v=C.fec(b6,b0)
u=C.fec(b5,b0)
t=0
if(v!=null&&u!=null){s=C.i2Y(b2,C.i2W(C.hm2(b2),v.r))
if(s.a!==0){u.r=C.i2U(C.hm2(b4),s)
t=s.a}}r=B.aX(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){l=C.hm4(o[m])
if(l==null||l==="utangulizi")continue
r.L(0,l)}for(q=B.ea(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fec(b6,n)
i=C.fec(b5,n)
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
a0=C.h_U(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.L)(a1),++a7){a8=a1[a7]
if(C.hm1(a8)===a0||C.h_U(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.QJ(a1,new C.fAE(a0),!0)
a1=f.z
a6=Date.now()
a9=$.j1
$.j1=a9+1
A.d.L(a1,new C.eK(""+1000*a6+"_"+a9,D.l3,a2,a3,a4,a5,"",24,A.a5,A.bn,A.aD,4279310375,A.bg,d.at,D.bf,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cm,0,"","","","","",!1,0));++e}b5.f=new B.S(Date.now(),0,!1)
return new B.adS(k,t,e)},
i2V(d){var w=C.i2Z(d)
if(d.w==="hati_kuhowa")return C.hlp("",w)
return C.hlo("",w)},
fAy:function fAy(){},
fAx:function fAx(){},
fAE:function fAE(d){this.a=d},
hhc(){var w=new B.S(Date.now(),0,!1),v=new C.fgD()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bH(w)))+"/"+B.bA(w)},
h01(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fBw(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.l3&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hmi(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fBw(d)
w=B.bi(u)
if(w==null)return!C.fBw(d)
return new B.S(Date.now(),0,!1).a7().cZ(w.a7().bR(18e9))},
i3G(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.S(Date.now(),0,!1).a7().ac()},
hDr(d){return A.a.i(d).toLowerCase()},
apl(d){return C.hDt(d)},
hDt(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$apl=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$apl)
case 7:r=f
p=r.t8("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.T:p
o=q
o=new B.M(o,C.i7d(),B.U(o).k("M<1,m>")).c_(0,new C.c8t())
o=B.dc(o,o.$ti.k("J.E"))
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
return B.i($async$apl,v)},
apk(d,e){return C.hDs(d,e)},
hDs(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apk=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.apl(d),$async$apk)
case 3:r=g
if(!J.ci(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$apk)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qf(r)),$async$apk)
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
return B.i($async$apk,v)},
apm(d,e){return C.hDu(d,e)},
hDu(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apm=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.apl(d),$async$apm)
case 3:r=g
if(!J.hF(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$apm)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qf(r)),$async$apm)
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
return B.i($async$apm,v)},
UW(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$UW=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fU2&&!a5){w=1
break}t=4
w=7
return B.b(B.aA(),$async$UW)
case 7:r=a7
q=B.aU(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.R.aI(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.T(e,x.I)
for(d=J.jy(p),d=d.gae(d),a0=x.z;d.C();){n=d.gR(d)
if(f.b(n.b))J.aF(o,J.k(n.a),C.VD(B.a2(f.a(n.b),e,a0)))}$.a6U=o}}t=2
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
return B.b(B.c3(),$async$UW)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.tY("civic_hati_kiapo_uongozi",null,A.ee),$async$UW)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.T(o,x.I)
for(f=x.f,e=J.jy(f.a(J.q(l,"byState"))),e=e.gae(e),d=x.z;e.C();){j=e.gR(e)
if(!f.b(j.b))continue
J.aF(k,J.k(j.a),C.VD(B.a2(f.a(j.b),o,d)))}for(o=k,o=new B.cK(o,B.a3(o).k("cK<1,2>")).gae(0);o.C();){f=o.d
f.toString
i=f
h=$.a6U.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbq())f=d===e.gbq()&&f.b<e.gcB()
else f=!0
f=!f}else f=!0
if(f)$.a6U.n(0,i.a,i.b)}w=20
return B.b(C.apn(),$async$UW)
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
case 16:case 9:$.fU2=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$UW,v)},
apn(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$apn=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$apn)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.a6U,o=new B.cK(o,B.a3(o).k("cK<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aF(r,q.a,q.b.ag())}w=7
return B.b(s.ar("String","ngmy_civic_hati_kiapo_uongozi_v1",A.R.ao(r,null)),$async$apn)
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
return B.i($async$apn,v)},
aZH(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aZH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.UW(!1),$async$aZH)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a6U.h(0,t)
r=s==null?null:s.hF()
if(r==null){u=null
w=1
break}u=C.bBx(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aZH,v)},
a6V(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a6V=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.S(Date.now(),0,!1)
o=a1.hF()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.L)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a6U.n(0,d,o)
$.fU2=!0
w=3
return B.b(C.apn(),$async$a6V)
case 3:w=4
return B.b(B.c3(),$async$a6V)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.T(e,x.P)
for(n=$.a6U,n=new B.cK(n,B.a3(n).k("cK<1,2>")).gae(0);n.C();){l=n.d
l.toString
q=l
J.aF(r,q.a,q.b.ag())}w=9
return B.b(B.np("civic_hati_kiapo_uongozi",B.F(["byState",r,"updatedAt",new B.S(Date.now(),0,!1).a7().ac()],e,x.z),null),$async$a6V)
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
return B.i($async$a6V,v)},
apo(d){var w=0,v=B.j(x.T),u,t,s
var $async$apo=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hY().a5g(A.eH),$async$apo)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fl(),$async$apo)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aZG(t,d),$async$apo)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apo,v)},
aZG(d,e){return C.hDv(d,e)},
hDv(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aZG=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c3(),$async$aZG)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.af("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aK(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.t(r)+"/"+1000*Date.now()+".mp4"
n=$.eY().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.ib("media")
w=8
return B.b(p.wU(q,new Uint8Array(B.ce(d)),D.bz4),$async$aZG)
case 8:n=p.Cy(q)
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
return B.i($async$aZG,v)},
Kl(d,e,f,g,h,i,j,k,l,m,n){var w=C.cD()
return C.ep(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bf,4280172719,2,d,0,0,"",D.cm,D.cQ,l,m,n)},
ffT(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.ep(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bn,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.f1,j,k,l)},
fY3(d,e,f,g,h,i,j,k){var w=C.cD(),v=A.k.D(i*0.0017,0.02,0.06)
return C.ep(h,!1,j,A.aD,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.cF,A.N,"",v,w,null,"","",0,!1,"",0,D.bf,4280172719,2,k,0,0,"",D.cm,D.cQ,g,e,f)},
ffr(d,e,f,g){return C.ffT(0,0.002,D.fs,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fY4(d,e,f,g,h,i,j,k){var w=C.cD()
return C.ep(A.qp,!1,j,A.aD,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.bn,A.a5,"",h,w,null,"","",0,!1,"",0,D.bf,4280172719,2,k,0,0,"",D.cm,D.cQ,g,e,f)},
hhb(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.eg(v,w,"").split(":"))},
bBx(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gI(t)
t=x.N
r=B.T(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.L)(t),++n){m=t[n]
l=C.hhb(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.l3&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hF()}h=C.h_y(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Bx(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gI(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.L)(w),++n){m=w[n]
l=C.hhb(m)
if(l!=null&&r.ai(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.l3&&A.a.cb(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bp(a1.z,new C.fzx(a2))}else A.d.bp(a1.z,new C.fzy())
A.d.L(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fBw(a0))a0.ax=a6.f.a7().ac()
return a0},
h_y(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fCj(D.a4L),l=C.cD(),k=x.u,j=B.a([C.ep(A.bg,!1,s,A.aD,"marriage_locked_bg",r,24,A.bn,A.a5,"",1,C.cD(),m,"","",0,!1,"",0,D.bf,q,2,"",0,0,"",D.cm,D.lv,1,0,0)],k),i=B.a([],k)
i.push(C.Kl("NGMY",A.L,236069181,52,A.bn,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Kl("TAREHE:",A.bg,o,16,A.bn,A.H,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fY3("tarehe",0.8059999999999999,0.026,0.18,A.bg,16,p,C.hhc()))
i.push(C.ffr(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Kl("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bn,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Kl("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cF,A.a5,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.ffT(0,0.002,D.fs,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fY4("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fY4("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fY4("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.ffT(268435456,0.175,D.bf,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Kl("VIDEO YA KIAPO",A.bg,o,10,A.bn,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.ep(A.bg,!1,s,A.aD,"__kiapo_video__",r,24,A.bn,A.a5,"",0.131,C.cD(),t,"","",0,!1,"",0,D.bf,q,2,"",0,0,"",D.cm,D.lv,0.77,0.115,0.492))
i.push(C.Kl("Rais Anayeapa:",A.bg,p,15,A.bn,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Kl("Jina:",A.bg,p,13,A.bn,A.N,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fY3("rais_jina",0.195,0.6930000000000001,0.62,A.bg,13,p,""))
i.push(C.ffr(0.195,0.7130000000000001,0.62,n))
i.push(C.Kl("Sahihi:",A.bg,p,13,A.bn,A.N,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.ep(A.bg,!1,s,A.aD,"marriage_sign_rais",0,24,A.bn,A.a5,"",0.07,C.cD(),t,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cm,D.f1,0.38,0.21500000000000002,0.73))
i.push(C.ffr(0.21500000000000002,0.795,0.38,n))
i.push(C.Kl("Tarehe:",A.bg,p,13,A.bn,A.N,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fY3("rais_tarehe",0.745,0.74,0.2,A.bg,12,p,C.hhc()))
i.push(C.ffr(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.ffT(0,0.032,D.bf,o,1,"state_box",0.72,0.14,0.875),C.Kl("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bn,A.N,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rs(4294967035,t,0,0,j,l,D.qd,"","",u,D.dd)
return C.Bx(t,t,t,t,D.oe,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cD(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
ag9(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ag9=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.J(x.q).f.U(D.eSP)
w=1
break}w=3
return B.b(C.UW(!0),$async$ag9)
case 3:w=4
return B.b(C.aZH(p),$async$ag9)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hmi(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bR(D.bd2,null,new C.fuo(p),f,!0,!0,!1,A.lw,!1,!1,x.N),$async$ag9)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cb(null,null,!0,null,new C.fup(),f,null,!0,!0,x.y),$async$ag9)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.h_y(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.J(x.q).f
q.U(B.b2(null,null,null,null,null,A.r,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.h_y(p))
case 1:return B.h(u,v)}})
return B.i($async$ag9,v)},
fgD:function fgD(){},
c8t:function c8t(){},
fzx:function fzx(d){this.a=d},
fzy:function fzy(){},
fuo:function fuo(d){this.a=d},
fum:function fum(d){this.a=d},
fun:function fun(d){this.a=d},
fup:function fup(){},
fuk:function fuk(d){this.a=d},
ful:function ful(d){this.a=d},
apT:function apT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDd:function aDd(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
e9e:function e9e(d){this.a=d},
e9c:function e9c(d){this.a=d},
e9d:function e9d(d){this.a=d},
e9f:function e9f(d){this.a=d},
e9g:function e9g(d){this.a=d},
wu(d,e,f,g,h,i,j,k,l,m,n){var w=C.cD()
return C.ep(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bn,h,"",i,w,null,"","",0,!1,"",j,D.bf,4280172719,2,d,0,0,"",D.cm,D.cQ,l,m,n)},
hgQ(d,e,f){var w=4291404327
return B.a([C.q5(0,f,D.eL,w,2,"ring_l",f,d-f*0.42,e),C.q5(0,f,D.eL,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
feS(d,e,f,g,h){var w,v,u="ps_"+g,t=C.q5(4294967288,f,D.eL,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.q5(h,s,D.eL,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.q5(h,f*0.46,D.eL,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
q5(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.ep(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bn,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.f1,j,k,l)},
feR(d,e,f,g,h,i,j,k,l){var w=C.cD(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.ep(h,!1,k,A.aD,i?u+A.k.ab(g,3)+":"+A.o.ab(j,1):u+A.k.ab(g,3),4280640491,j,A.cF,A.N,"",v,w,null,"","",0,!1,"",0,D.bf,4280172719,2,l,0,0,"",D.cm,D.cQ,g,e,f)},
byY(d,e,f,g){return C.q5(0,0.002,D.fs,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
hgP(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.q5(0,0.036,D.bf,h,1.4,"banner_box_"+d,w,v,e),C.wu(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hm3(){var w=new B.S(Date.now(),0,!1),v=new C.fAD()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bH(w)))+"/"+B.bA(w)},
hgR(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wu(r+".",A.bg,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.feR("witness_"+d+"_"+r+"_name",q,g,p,A.bg,!0,16,j,"[Jina la Shahidi]"),C.byY(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.wu("Sahihi:",A.bg,j,15,A.a5,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.ep(A.bg,!1,4279310375,A.aD,"marriage_sign_"+d+"_witness_"+r,0,24,A.bn,A.a5,"",0.05,C.cD(),null,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cm,D.f1,s,t,g-0.004),C.byY(t,g+0.044,s,w)],x.u)},
agB(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.dc_,D.chB,D.d4K,D.d6y],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.L)(s),++w)for(v=A.d.gae(s[w]);v.C();){u=v.gR(0)
if(u.a===d)return u}return null},
fXm(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fCj(d.d),v=B.a([C.ep(A.bg,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bn,A.a5,"",1,C.cD(),w,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.lv,1,0,0)],x.u)
A.d.v(v,C.hSd(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hSd(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wu("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hgQ(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hgQ(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.feS(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.feS(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wu("\ud83c\udf33",A.L,4279898632,22,A.a5,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.q5(0,0.062,D.eL,b1,1.6,"crest_o",0.11,0.445,0.012),C.q5(0,0.046,D.eL,b1,1,"crest_i",0.084,0.458,0.02),C.wu("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.q5(0,0.002,D.fs,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.q5(b9,0.016,D.l4,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.q5(0,0.002,D.fs,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wu("TAREHE:",A.bg,c0,20,A.H,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.feR("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bg,!1,21,b9,C.hm3()),C.byY(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wu(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.q5(c0,0.0026,D.bf,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.q5(c3.e,0.138,D.bf,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cD()
c2.push(C.ep(A.bg,!1,b9,A.aD,"marriage_field_utangulizi:"+A.k.ab(0.82,3),b2,19,A.bn,A.cv,"",0.128,s,a9,"","",0,!1,"",0,D.bf,b3,2,c5,0,0,"",D.cm,D.cQ,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.q5(0,0.036,D.bf,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cD()
A.d.v(c2,B.a([s,C.ep(A.L,!1,c0,A.aD,"marriage_field_nimetowe_label:"+A.k.ab(r,3),b2,30,A.bn,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bf,b3,2,c7,0,0,"",D.cm,D.cQ,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hgP(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wu(c9,A.bg,b9,d0,A.N,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.feR("mahari_"+p,0.132,k,m,A.bg,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.j1
$.j1=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.j1
$.j1=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eK(""+1000*i+"_"+h,D.cQ,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bn,A.aD,c0,A.bg,a9,D.bf,b2,b3,2,0,!1,s,0,D.cm,0,"","","","","",!1,0),j,new C.eK(""+1000*f+"_"+e,D.f1,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a5,A.bn,A.aD,b6,A.bg,a9,D.fs,0,b5,0.8,0,!1,g,0,D.cm,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.j1
$.j1=p+1
i=Date.now()
h=$.j1
$.j1=h+1
g=Date.now()
f=$.j1
$.j1=f+1
e=Date.now()
a3=$.j1
$.j1=a3+1
A.d.v(d,B.a([new C.eK(""+1000*s+"_"+p,D.cQ,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bn,A.aD,b7,A.dM,a9,D.bf,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cm,0,"","","","","",!1,0),new C.eK(""+1000*i+"_"+h,D.f1,a1,a2,0.046,0.025875,"",24,A.a5,A.bn,A.aD,b6,A.bg,a9,D.bf,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cm,0,"","","","","",!1,0),new C.eK(""+1000*g+"_"+f,D.cQ,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bn,A.aD,b7,A.L,a9,D.bf,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cm,0,"","","","","",!1,0),new C.eK(""+1000*e+"_"+a3,D.f1,a0,k,a1+0.046-a0,l,"",24,A.a5,A.bn,A.aD,b6,A.bg,a9,D.bf,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cm,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hgP("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a4A||w===D.a4C||w===D.a4z||w===D.a4B){w=t-0.008
A.d.v(c2,C.feS(0.21,w,0.044,!0,b0))
A.d.v(c2,C.feS(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.q5(0,a4,D.bf,c0,1.3,"wit_table_border",0.82,0.09,t),C.q5(c0,a4,D.bf,c0,0,"wit_table_divider",0.0024,0.4988,t),C.q5(0,0.0022,D.fs,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wu("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wu("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hgR("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hgR("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.q5(0,0.11,D.bf,c0,1.2,"mw_box",0.82,0.09,t),C.wu("MWANDISHI",A.bg,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wu("Jina:",A.bg,b9,15,A.a5,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.feR("mwandishi_jina",0.215,w,0.3116,A.bg,!0,15,b9,""),C.byY(0.215,p,0.3116,b5),C.wu("Sahihi:",A.bg,b9,15,A.a5,0.028,0,"mw_sl",0.09,0.5,w),C.ep(A.bg,!1,b6,A.aD,"marriage_sign_mwandishi",0,24,A.bn,A.a5,"",0.044,C.cD(),a9,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cm,D.f1,0.3161999999999999,0.5738,s-0.044),C.byY(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.q5(0,0.032,D.bf,c0,1,"state_box",0.7,0.15,a8),C.wu("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.N,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
i2X(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.h0b(d.d),p=new C.fAz(s),o=new C.fAA(s),n=d.z,m=n===D.a4A||n===D.a4C||n===D.a4z||n===D.a4B,l=n===D.aEW||n===D.a4D||n===D.aEX,k=B.bZ(0,B.fM(q,A.A,t,t,A.ci,A.bT,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a4D?26:16
i.push(new C.fAC().$1$size(w))}if(n===D.aEY)i.push(D.fxB)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hC,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.am)
n=B.I(r,A.q,1.1)
w=B.n(4)
i.push(B.p(t,B.v(B.a([p.$0(),D.aO0,p.$1$w(0.9),D.aO0,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.b8s,t,n,w,t,t,A.n),t,t,t,t,A.aix,t,t,t))
i.push(A.am)
i.push(new C.fAB(r).$1("NIMETOWE"))
i.push(A.h0)
v=J.e3(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.M_,new B.cm(A.aO,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.db,new B.bC(1,A.bh,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b7)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.W,t,A.b0,A.r,B.a([k,new B.D(A.ah6,B.v(i,A.aj,t,A.e,A.j,0,A.p),t)],j),t)},
hlo(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.agB(e,t)
if(r==null)r=A.d.gI(D.Gz)
w=C.cD()
v=C.rs(r.e,t,0,0,C.fXm(r,0.165,y.O,D.d77,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.qd,"","",s,D.dd)
w=C.cD()
u=A.a.i(d)
if(u.length===0)u=t
return C.Bx(t,t,t,t,D.oe,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hlp(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.agB(e,t)
if(r==null)r=A.d.gI(D.Gz)
w=C.cD()
v=C.rs(r.e,t,0,0,C.fXm(r,0.165,y.f,D.d2U,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.qd,"","",s,D.dd)
w=C.cD()
u=A.a.i(d)
if(u.length===0)u=t
return C.Bx(t,t,t,t,D.oe,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bCU(d,e,f){var w=0,v=B.j(x.T),u
var $async$bCU=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bR(A.K,null,new C.fMc(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCU,v)},
aga(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aga=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a_<1>")
p=B.C(new B.a_(i,new C.fus(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(D.Lb,null,new C.fut(p),d,!0,!0,!1,A.lw,!1,!1,x.N),$async$aga)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hF())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCU(d,"Hati ya Kuhowa",D.Gz),$async$aga)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.L_(d,"Tafuta jimbo\u2026","",A.k6,"Chagua jimbo"),$async$aga)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hlo(r,s))
case 1:return B.h(u,v)}})
return B.i($async$aga,v)},
agb(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agb=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a_<1>")
p=B.C(new B.a_(i,new C.fuw(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(D.Lb,null,new C.fux(p),d,!0,!0,!1,A.lw,!1,!1,x.N),$async$agb)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hF())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCU(d,"Hati ya Kuhoweya",D.Gz),$async$agb)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.L_(d,"Tafuta jimbo\u2026","",A.k6,"Chagua jimbo"),$async$agb)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hlp(r,s))
case 1:return B.h(u,v)}})
return B.i($async$agb,v)},
agc(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$agc=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("a_<1>")
m=B.C(new B.a_(i,new C.fuA(),n),n.k("J.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(D.Lb,null,new C.fuB(m),d,!0,!0,!1,A.lw,!1,!1,x.N),$async$agc)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(m).hF())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCU(d,"Malipo ya Awamu ya Mahari",D.Qp),$async$agc)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.L_(d,"Tafuta jimbo\u2026","",A.k6,"Chagua jimbo"),$async$agc)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.agB(s,D.Qp)
if(q==null)q=A.d.gI(D.Qp)
n=C.cD()
p=C.rs(q.e,null,0,0,C.fXm(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cYX,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.qd,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dd)
n=C.cD()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Bx(null,null,null,null,D.oe,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agc,v)},
xs:function xs(d,e){this.a=d
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
fAD:function fAD(){},
fAz:function fAz(d){this.a=d},
fAB:function fAB(d){this.a=d},
fAC:function fAC(){},
fAA:function fAA(d){this.a=d},
fMc:function fMc(d,e){this.a=d
this.b=e},
acX:function acX(d,e,f){this.c=d
this.d=e
this.a=f},
dXX:function dXX(d,e,f){this.a=d
this.b=e
this.c=f},
dXW:function dXW(d,e){this.a=d
this.b=e},
dXV:function dXV(d,e){this.a=d
this.b=e},
acl:function acl(d,e,f){this.c=d
this.d=e
this.a=f},
fus:function fus(){},
fut:function fut(d){this.a=d},
fuq:function fuq(d){this.a=d},
fur:function fur(d){this.a=d},
fuw:function fuw(){},
fux:function fux(d){this.a=d},
fuu:function fuu(d){this.a=d},
fuv:function fuv(d){this.a=d},
fuA:function fuA(){},
fuB:function fuB(d){this.a=d},
fuy:function fuy(d){this.a=d},
fuz:function fuz(d){this.a=d},
Ko(d,e,f,g,h,i,j,k,l,m){var w=C.cD()
return C.ep(e,!1,f,A.aD,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bn,h,"",i,w,null,"","",0,!1,"",0,D.bf,4280172719,2,d,0,0,"",D.cm,D.cQ,k,l,m)},
Cx(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.ep(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bn,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.f1,j,k,l)},
hhw(d,e,f){return C.Cx(0,0.002,D.fs,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
bz7(d,e,f,g,h){return B.a([C.Cx(4294967288,0.032,D.bf,4291404327,1.15,"pill_"+d,g,f,e),C.Ko(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fY8(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.Cx(0,0.002,D.fs,g,1,"orn_l_"+t,u,d,v),C.Cx(h,0.016,D.l4,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Cx(0,0.002,D.fs,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a0T(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.Ko(d,A.bg,j,i,A.N,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cD()
return B.a([v,C.ep(A.L,!1,j,A.aD,"marriage_field_"+e+":"+A.k.ab(t,3),4280640491,i,A.cF,A.N,"",0.02,s,null,"","",0,!1,"",0,D.bf,4280172719,2,k,0,0,"",D.cm,D.cQ,t,u,g-0.002),C.hhw(u,g+0.018,t)],x.u)},
hhx(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Cx(h,0.028,D.bf,h,0,"chv_"+d,g,e,f),C.Cx(w,0.024,D.l4,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Cx(w,0.024,D.l4,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.Ko(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bz6(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.Ko("Sahihi:",A.bg,h,10,A.N,0.02,"is_"+d,0.12,e,f),C.ep(A.bg,!1,4279310375,A.aD,"marriage_sign_"+d,0,24,A.bn,A.a5,"",0.032,C.cD(),null,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cm,D.f1,v,w,f-0.006),C.hhw(w,f+0.016,v)],x.u)},
h0c(d){var w,v
for(w=0;w<19;++w){v=D.QD[w]
if(v.a===d)return v}return null},
i5d(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.agB(A.a.b4(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.agB(A.a.b4(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b4(k,18)
w=C.agB(u,D.Qp)
v=w==null?l:w.d
if(v==null){w=C.agB(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.h0c(A.a.b4(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hil.a9(0)
$.hiy.a9(0)
t=C.fCj(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.L)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
h1g(d){var w=0,v=B.j(x.T),u
var $async$h1g=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bR(A.K,null,new C.fNF(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h1g,v)},
xv:function xv(d,e){this.a=d
this.b=e},
nF:function nF(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
biC:function biC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fNF:function fNF(){},
ad_:function ad_(d){this.a=d},
eet:function eet(d,e){this.a=d
this.b=e},
ees:function ees(d){this.a=d},
eer:function eer(d,e){this.a=d
this.b=e},
aeG:function aeG(d,e,f){this.c=d
this.d=e
this.a=f},
h0b(d){return $.hiy.cg(0,d,new C.fCl(d))},
fCj(d){return $.hil.cg(0,d,new C.fCk(d))},
fA(d){return B.fRC(d>>>16&255,d>>>8&255,d&255,255)},
hVg(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hjD(4294570461,4293910718,4284234270,u)
case 1:return C.hjD(4294635750,4293975240,t,4292912216)
case 2:w=C.fdr(s,4294505966,r)
C.byS(w,14,16,p)
C.ku(w,8,9,464,836,u,1.2)
C.Ct(w,2,2,1,1,u,10)
C.Ct(w,478,2,-1,1,u,10)
C.Ct(w,2,852,1,-1,u,10)
C.Ct(w,478,852,-1,-1,u,10)
return w
case 3:return C.fdr(4294966515,4294373082,4289102906)
case 4:return C.hQ2(C.fdr(4294376440,4293653998,4290287194))
case 5:w=C.fdr(4294965238,4294437098,4288444980)
C.byS(w,14,16,4283043359)
C.ku(w,6,7,468,840,u,1)
C.ku(w,9,10,462,834,o,0.7)
return w
case 6:v=B.ho(q,q,A.cc,0,A.e3,854,q,0,3,q,A.cc,480,!1)
C.yk(v,n,4294175448)
C.rN(v,n)
C.ku(v,24,24,432,806,4286209070,1)
C.a0H(v,12,12,468,12,o,3,20)
C.a0H(v,12,842,468,842,o,3,20)
C.a0H(v,12,12,12,842,o,3,20)
C.a0H(v,468,12,468,842,o,3,20)
return v
case 7:return C.hO4(4294440434,4293518297,4280228630,r)
case 8:v=B.ho(q,q,A.cc,0,A.e3,854,q,0,3,q,A.cc,480,!1)
C.yk(v,m,4293911504)
C.rN(v,m)
C.ku(v,28,28,424,798,l,1)
C.fmv(v,28,28,l,k)
C.fmv(v,452,28,l,k)
C.fmv(v,28,826,l,k)
C.fmv(v,452,826,l,k)
return v
case 9:v=B.ho(q,q,A.cc,0,A.e3,854,q,0,3,q,A.cc,480,!1)
C.yk(v,j,4294111986)
C.rN(v,j)
C.ku(v,18,18,444,818,4292401368,0.7)
B.iK(v,!0,C.fA(p),0,13,0,853)
return v
case 10:return C.hS_(i,4294173372)
case 11:return C.hT4(4294439140,4293449662)
case 12:return C.hNX(h,4294239432)
case 13:return C.hSw(4294244340,4293193448)
case 14:return C.hWR(4294505710,4293780694)
case 15:return C.fcp(4294966259,4294439138,o,p,q)
case 16:return C.fcp(4294966776,4294178544,o,g,g)
case 17:return C.fcp(4294965493,4294504170,o,4286200650,q)
case 18:return C.fcp(4294966519,4294373862,o,p,p)
case 19:return C.hR7()
case 20:return C.hR8()
case 21:v=B.ho(q,q,A.cc,0,A.e3,854,q,0,3,q,A.cc,480,!1)
C.yk(v,h,4293976768)
C.rN(v,h)
C.byS(v,14,16,p)
B.iK(v,!0,C.fA(u),4,475,4,9)
B.iK(v,!0,C.fA(u),4,475,844,849)
B.iK(v,!0,C.fA(u),4,9,4,849)
B.iK(v,!0,C.fA(u),470,475,4,849)
C.a0H(v,10,12,470,12,u,2,16)
C.a0H(v,10,842,470,842,u,2,16)
C.a0H(v,10,12,10,842,u,2,18)
C.a0H(v,470,12,470,842,u,2,18)
C.Ct(v,2,2,1,1,t,10)
C.Ct(v,478,2,-1,1,t,10)
C.Ct(v,2,852,1,-1,t,10)
C.Ct(v,478,852,-1,-1,t,10)
C.ku(v,14,16,452,822,u,1.8)
return v
case 22:v=B.ho(q,q,A.cc,0,A.e3,854,q,0,3,q,A.cc,480,!1)
C.yk(v,s,4294438872)
C.rN(v,s)
C.ku(v,14,16,452,822,o,2.2)
C.ku(v,22,24,436,806,o,1)
C.fZs(v,!1,!1,o,p,p,36,14,16)
C.kJ(v,240,20,7,o,!0)
C.kJ(v,240,834,7,o,!0)
C.kJ(v,18,427,7,o,!0)
C.kJ(v,462,427,7,o,!0)
return v
case 23:v=B.ho(q,q,A.cc,0,A.e3,854,q,0,3,q,A.cc,480,!1)
C.yk(v,i,4293910712)
C.rN(v,i)
B.iK(v,!0,C.fA(u),0,479,0,20)
B.iK(v,!0,C.fA(u),0,479,834,853)
B.iK(v,!0,C.fA(u),0,20,0,853)
B.iK(v,!0,C.fA(u),460,479,0,853)
B.iK(v,!0,C.fA(f),5,474,5,9)
B.iK(v,!0,C.fA(f),5,474,844,848)
B.iK(v,!0,C.fA(f),5,9,5,848)
B.iK(v,!0,C.fA(f),470,474,5,848)
C.ku(v,28,28,424,798,f,1.4)
return v
case 24:v=B.ho(q,q,A.cc,0,A.e3,854,q,0,3,q,A.cc,480,!1)
C.yk(v,e,4294174404)
C.rN(v,e)
C.byS(v,14,16,p)
B.iK(v,!0,C.fA(u),3,476,3,8)
B.iK(v,!0,C.fA(u),3,476,845,850)
B.iK(v,!0,C.fA(u),3,8,3,850)
B.iK(v,!0,C.fA(u),471,476,3,850)
C.ku(v,9,10,462,834,t,1)
C.ku(v,14,16,452,822,u,1.8)
C.kJ(v,240,8,4,u,!0)
C.kJ(v,240,846,4,u,!0)
C.kJ(v,8,427,4,u,!0)
C.kJ(v,472,427,4,u,!0)
C.kJ(v,8,8,3,t,!0)
C.kJ(v,472,8,3,t,!0)
C.kJ(v,8,846,3,t,!0)
C.kJ(v,472,846,3,t,!0)
return v}},
yk(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kL(d,!1,A.dc,new B.RP(s),r,A.cX,1,0,w-1,k,k);++k}},
rN(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.eM()
n.dC(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aB(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aB(v==null?0:v)
v=d.a
s=v==null?o:v.dT(u,t,o)
if(s==null)s=new B.iF()
v=A.o.D(A.k.N(s.gb6(s))-3,0,255)
r=A.o.D(A.k.N(s.gbb())-3,0,255)
q=A.o.D(A.k.N(s.gb9(s))-2,0,255)
p=d.a
if(p!=null)p.jJ(u,t,v,r,q,255)}},
ku(d,e,f,g,h,i,j){var w,v=null,u=C.fA(i),t=e+g
B.kL(d,!0,A.dc,u,v,A.cX,j,e,t,f,f)
w=f+h
B.kL(d,!0,A.dc,u,v,A.cX,j,e,t,w,w)
B.kL(d,!0,A.dc,u,v,A.cX,j,e,e,f,w)
B.kL(d,!0,A.dc,u,v,A.cX,j,t,t,f,w)},
Ct(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.V(j*0.72),8,j-2)
B.kL(d,!0,A.dc,C.fA(i),u,A.cX,2,e,e+g*j,f,f)
B.kL(d,!0,A.dc,C.fA(i),u,A.cX,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kL(d,!0,A.dc,C.fA(i),u,A.cX,1,w,e+g*t,v,v)
B.kL(d,!0,A.dc,C.fA(i),u,A.cX,1,w,w,v,f+h*t)},
hjD(d,e,f,g){var w=null,v=B.ho(w,w,A.cc,0,A.e3,854,w,0,3,w,A.cc,480,!1)
C.yk(v,d,e)
C.rN(v,d)
B.iK(v,!0,C.fA(f),0,479,0,28)
B.iK(v,!0,C.fA(f),0,479,826,853)
B.iK(v,!0,C.fA(f),0,28,0,853)
B.iK(v,!0,C.fA(f),452,479,0,853)
C.ku(v,5,5,470,844,g,1.1)
C.ku(v,28,28,424,798,g,1.6)
C.Ct(v,2,2,1,1,g,11)
C.Ct(v,478,2,-1,1,g,11)
C.Ct(v,2,852,1,-1,g,11)
C.Ct(v,478,852,-1,-1,g,11)
return v},
fdr(d,e,f){var w=null,v=B.ho(w,w,A.cc,0,A.e3,854,w,0,3,w,A.cc,480,!1)
C.yk(v,d,e)
C.rN(v,d)
C.ku(v,14,16,452,822,f,1.6)
C.ku(v,20,22,440,810,f,0.8)
return v},
byS(d,e,f,g){var w,v=C.fA(g)
B.iK(d,!0,v,0,479,0,f-1)
w=854-f
B.iK(d,!0,v,0,479,w,853);--w
B.iK(d,!0,v,0,e-1,f,w)
B.iK(d,!0,v,480-e,479,f,w)},
hQ2(d){var w,v,u=4291404327
C.byS(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kJ(d,w,8,3,u,!0)
C.kJ(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kJ(d,7,v,3,u,!0)
C.kJ(d,473,v,3,u,!0)}return d},
fpy(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jf(e,f),new B.jf(e+g*n,f),new B.jf(e,f+h*n)],t)
B.a1s(d,C.fA(m),s)
w=A.o.D(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jf(s,u),new B.jf(e+g*v,u),new B.jf(s,f+h*v)],t)
B.a1s(d,C.fA(k),t)
t=A.k.V(n*0.39)
C.kJ(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kJ(d,e+g*t,f+h*3,4,k,!0)
C.kJ(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kJ(d,e+g*t,f,5,k,!0)
C.kJ(d,e,f+h*t,5,k,!0)}},
fZs(d,e,f,g,h,i,j,k,l){var w,v
C.fpy(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fpy(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fpy(d,k,v,1,-1,e,f,g,h,i,j)
C.fpy(d,w,v,-1,-1,e,f,g,h,i,j)},
a0H(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.l1(d,!0,A.dc,new B.qZ(p),null,A.cX,j,r,q)}},
foE(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kL(d,!0,A.dc,new B.qZ(o),null,A.cX,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kL(d,!0,A.dc,new B.qZ(o),null,A.cX,1.4,q,q,p,p+h*r)}},
hO4(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.ho(o,o,A.cc,0,A.e3,854,o,0,3,o,A.cc,480,!1)
C.yk(n,d,e)
C.rN(n,d)
C.ku(n,20,20,440,814,f,1.2)
C.foE(n,0,0,1,1,g)
C.foE(n,480,0,-1,1,g)
C.foE(n,0,854,1,-1,g)
C.foE(n,480,854,-1,-1,g)
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
B.kL(n,!0,A.dc,new B.qZ(p),o,A.cX,1.2,240,r,60,q)}return n},
fmv(d,e,f,g,h){var w
C.fsr(d,!0,C.fA(g),13,e,f)
C.fsr(d,!0,C.fA(g),9,e,f)
w=B.a([new B.jf(e,f-4),new B.jf(e+4,f),new B.jf(e,f+4),new B.jf(e-4,f)],x.J)
B.a1s(d,C.fA(h),w)},
kJ(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jf(e,v),new B.jf(u,f),new B.jf(e,t),new B.jf(s,f)],x.J)
if(i){B.a1s(d,C.fA(h),r)
return}B.kL(d,!0,A.dc,C.fA(h),w,A.cX,1,e,u,v,f)
B.kL(d,!0,A.dc,C.fA(h),w,A.cX,1,u,e,f,t)
B.kL(d,!0,A.dc,C.fA(h),w,A.cX,1,e,s,t,f)
B.kL(d,!0,A.dc,C.fA(h),w,A.cX,1,s,e,f,v)},
fco(d,e,f,g,h,i,j){var w,v=B.a([new B.jf(e,f),new B.jf(e+g*28,f),new B.jf(e,f+h*28)],x.J)
B.a1s(d,C.fA(i),v)
v=e+g*14
w=f+h*14
C.kJ(d,v,w,6,j,!0)
C.kJ(d,v,w,3,i,!0)},
fcp(d,e,f,g,h){var w=null,v=B.ho(w,w,A.cc,0,A.e3,854,w,0,3,w,A.cc,480,!1)
C.yk(v,d,e)
C.rN(v,d)
C.ku(v,18,18,444,818,f,2)
C.ku(v,26,26,428,802,f,0.9)
if(h!=null)B.iK(v,!0,C.fA(h),28,451,28,34)
C.fco(v,18,18,1,1,g,f)
C.fco(v,462,18,-1,1,g,f)
C.fco(v,18,836,1,-1,g,f)
C.fco(v,462,836,-1,-1,g,f)
return v},
hR7(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.ho(v,v,A.cc,0,A.e3,854,v,0,3,v,A.cc,480,!1)
C.yk(r,u,4294240980)
C.rN(r,u)
C.ku(r,10,12,460,830,t,3.2)
C.ku(r,18,20,444,814,s,1.2)
C.ku(r,24,26,432,802,t,1.8)
C.fZs(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kJ(r,w,16,3,t,!0)
C.kJ(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kJ(r,16,w,3,t,!0)
C.kJ(r,464,w,3,t,!0)}return r},
hR8(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.ho(t,t,A.cc,0,A.e3,854,t,0,3,t,A.cc,480,!1)
C.yk(p,s,4294373080)
C.rN(p,s)
C.ku(p,16,18,448,818,r,2.4)
C.ku(p,24,26,432,802,4286209044,1)
w=new C.feJ(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fZs(p,!1,!0,r,q,q,34,16,18)
return p},
bzy(d,e,f,g,h,i){B.iK(d,!0,C.fA(i),e,e+g,f,f+h)},
bAn(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kL(d,!1,A.dc,new B.RP(i),null,A.cX,1,e,w,l,l)}},
hRZ(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.kL(d,!1,A.dc,new B.qZ(r),null,A.cX,1,e,s,t,t);++v}return}w=f+g-1
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
B.kL(d,!1,A.dc,new B.qZ(r),null,A.cX,1,t,t,f,s);++q}},
hS_(d,e){var w,v,u=null,t=B.ho(u,u,A.cc,0,A.e3,854,u,0,3,u,A.cc,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hRZ(t,v,w,30,D.cRQ,(A.o.an(v,30)+A.o.an(w,30)&1)===0)
C.bzy(t,44,44,392,766,d)
C.bAn(t,44,44,392,766,d,e)
C.rN(t,d)
C.ku(t,44,44,392,766,4292128567,2.2)
C.ku(t,50,50,380,754,4279898632,0.8)
return t},
hT3(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.E(g,4)){case 0:C.kJ(d,e,f,7,h,!0)
C.kJ(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kL(d,!0,A.dc,C.fA(h),o,A.cX,1.6,w,u,v,t)
B.kL(d,!0,A.dc,C.fA(h),o,A.cX,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kL(d,!0,A.dc,new B.qZ(p),o,A.cX,1.2,w,v,q,q)}break
default:B.kL(d,!0,A.dc,C.fA(h),o,A.cX,1.5,e-8,e+8,f,f)
B.kL(d,!0,A.dc,C.fA(h),o,A.cX,1.5,e,e,f-8,f+8)
B.l1(d,!0,A.dc,C.fA(h),o,A.cX,2,e,f)}},
hT4(d,e){var w,v,u,t,s=null,r=B.ho(s,s,A.cc,0,A.e3,854,s,0,3,s,A.cc,480,!1)
B.iK(r,!0,C.fA(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hT3(r,u,v,w,4292391514)}C.bzy(r,46,46,388,762,d)
C.bAn(r,46,46,388,762,d,e)
C.rN(r,d)
C.ku(r,46,46,388,762,4291404327,1.8)
return r},
hf2(d,e,f,g){C.fsr(d,!0,C.fA(g),16,e,f)
C.fsr(d,!0,C.fA(g),11,e,f)
C.kJ(d,e,f,6,g,!0)
B.kL(d,!0,A.dc,C.fA(g),null,A.cX,1.3,e-14,e+14,f,f)
B.kL(d,!0,A.dc,C.fA(g),null,A.cX,1.3,e,e,f-14,f+14)},
hNX(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.ho(v,v,A.cc,0,A.e3,854,v,0,3,v,A.cc,480,!1)
B.iK(s,!0,C.fA(4280948752),0,479,0,853)
B.iK(s,!0,C.fA(u),0,479,0,78)
B.iK(s,!0,C.fA(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hf2(s,w,39,t)
C.hf2(s,w,815,t)}C.bzy(s,38,92,404,670,d)
C.bAn(s,38,92,404,670,d,e)
C.rN(s,d)
C.ku(s,38,92,404,670,t,1.8)
C.ku(s,45,99,390,656,4287322667,0.8)
return s},
hSv(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jf(e,f),new B.jf(q-5,w),new B.jf(q,f-(18-Math.abs(r)*3)),new B.jf(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a1s(d,new B.qZ(o),p)}B.l1(d,!0,A.dc,C.fA(4292128567),null,A.cX,3,e,f)},
hSw(d,e){var w,v,u,t,s=null,r=4279196764,q=B.ho(s,s,A.cc,0,A.e3,854,s,0,3,s,A.cc,480,!1)
C.yk(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kL(q,!0,A.dc,new B.qZ(v),s,A.cX,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kL(q,!0,A.dc,new B.qZ(u),s,A.cX,1.1,v,v,0,853)}B.iK(q,!0,C.fA(r),0,479,0,70)
B.iK(q,!0,C.fA(r),0,479,798,853)
for(t=0;t<5;++t)C.hSv(q,70+t*85,48,4292128567)
C.bzy(q,48,78,384,712,d)
C.bAn(q,48,78,384,712,d,e)
C.rN(q,d)
C.ku(q,48,78,384,712,4291404327,1.6)
return q},
hWR(d,e){var w,v,u,t=null,s=4279970378,r=B.ho(t,t,A.cc,0,A.e3,854,t,0,3,t,A.cc,480,!1)
B.iK(r,!0,C.fA(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kJ(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.l1(r,!0,A.dc,new B.qZ(u),t,A.cX,1,v,w)}C.bzy(r,40,40,400,774,d)
C.bAn(r,40,40,400,774,d,e)
C.rN(r,d)
C.ku(r,40,40,400,774,4291058750,2)
C.ku(r,48,48,384,758,s,0.8)
return r},
kS:function kS(d,e){this.a=d
this.b=e},
fCl:function fCl(d){this.a=d},
fCk:function fCk(d){this.a=d},
feJ:function feJ(d){this.a=d},
fCZ(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hSY(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fY1(d){var w,v,u,t=null,s=A.a.cJ(d,"{"),r=A.a.oD(d,"}")
if(s<0||r<=s)return t
try{w=A.R.aI(0,Ai.agx(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
af3(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$af3=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vh(null,""),$async$af3)
case 3:n=g
if(A.a.i(n).length===0)throw B.V("AI is not available right now. Please try again later.")
t=B.n5(n)
if(e==null)s=A.hq
else{r=C.hSY(e)
s=B.a([new B.a_H(A.cS.gcz().aJ(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qO(t,d,s,E.F3),$async$af3)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.V(q!=null&&B.KP(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$af3,v)},
bC0(d){return C.i4U(d)},
i4U(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bC0=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.R.ao(d.ag(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.af3(r,null),$async$bC0)
case 7:q=f
p=C.fY1(q)
if(p==null){u=d
w=1
break}o=d.aC1(p)
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
return B.i($async$bC0,v)},
hiX(d){var w,v=F.h_u(d)
v=B.aK(v,"book","newspaper")
if(F.a1L(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fGU(d,e,f,g){return C.i6L(d,e,f,g)},
i6L(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fGU=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fCZ(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hmr()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.af3('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hiX(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fGU)
case 3:r=m.fY1(i)
if(r==null)throw B.V(y.S)
q=new C.zl(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","").aC1(r)
t=q.r
if(t.length===0)throw B.V("The AI did not write a story. Try again.")
s=n+" "+A.d.aH(t," ")
if(F.a1L(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a1L(A.d.aH(t," "))==="sw"?C.bC0(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fGU,v)},
bBv(d,e,f,g,h){return C.i2w(d,e,f,g,h)},
i2w(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bBv=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fN(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.L)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aH(l,"\n")
l=C.hmr()
k=A.R.ao(d.ag(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.af3('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hiX(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bBv)
case 3:p=j.fY1(a0)
if(p==null)throw B.V(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cz(o)){n=d.aC1(B.a2(o,x.N,x.z))
m=A.R.ao(n.ag(),null)!==A.R.ao(d.ag(),null)}else{n=d
m=!1}w=m&&F.a1L(A.d.aH(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bC0(n),$async$bBv)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a7z(A.a.i(B.t(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBv,v)},
a7z:function a7z(d,e,f){this.a=d
this.b=e
this.c=f},
i9x(d,e){return B.a6(d,!1).cl(B.e8(new C.fNQ(e),!0,null,x.H))},
fNQ:function fNQ(d){this.a=d},
Vr:function Vr(d,e){this.c=d
this.a=e},
aDw:function aDw(d,e,f,g,h,i,j,k){var _=this
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
ehL:function ehL(d){this.a=d},
ehK:function ehK(){},
ehM:function ehM(d){this.a=d},
ehJ:function ehJ(d,e){this.a=d
this.b=e},
ehN:function ehN(){},
ehn:function ehn(d,e){this.a=d
this.b=e},
ehj:function ehj(d,e){this.a=d
this.b=e},
ehu:function ehu(d){this.a=d},
ehv:function ehv(d,e){this.a=d
this.b=e},
ehw:function ehw(d){this.a=d},
ehp:function ehp(d,e){this.a=d
this.b=e},
ehq:function ehq(d,e){this.a=d
this.b=e},
ehr:function ehr(d,e){this.a=d
this.b=e},
ehs:function ehs(d){this.a=d},
eht:function eht(d){this.a=d},
eho:function eho(d,e){this.a=d
this.b=e},
ehl:function ehl(d){this.a=d},
ehm:function ehm(d){this.a=d},
ehC:function ehC(d){this.a=d},
ehD:function ehD(d){this.a=d},
ehB:function ehB(d){this.a=d},
ehE:function ehE(d,e){this.a=d
this.b=e},
ehA:function ehA(d,e){this.a=d
this.b=e},
ehF:function ehF(d){this.a=d},
ehz:function ehz(d){this.a=d},
ehG:function ehG(d){this.a=d},
ehy:function ehy(d){this.a=d},
ehH:function ehH(d,e){this.a=d
this.b=e},
ehx:function ehx(d,e){this.a=d
this.b=e},
ehI:function ehI(d){this.a=d},
ehk:function ehk(d,e){this.a=d
this.b=e},
fBV(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fBV=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hgy){w=1
break}r=new C.fBW()
t=4
q=x.s
w=7
return B.b(B.iN(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fBV)
case 7:$.hgy=!0
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
return B.i($async$fBV,v)},
bBS(d){return A.GV[B.mz(d)-1]+", "+A.p_[B.bH(d)-1]+" "+B.bQ(d)+", "+B.bA(d)},
hVV(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dgc[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
h_T(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fE(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a_(v,new C.fAd(),B.U(v).k("a_<1>")))
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
continue}o=new C.fAf(j,h)
n=new C.fAe(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.an(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iX(o.$1(l)))
j.a+=l}return u},
fXL(d,e){var w=new C.fej()
return A.d.cI(e,0,new C.feh(w))>=A.d.cI(d,0,new C.fei(w))},
hdI(d){var w,v,u=new B.aO($.W().r,A.ao,null,null,B.a([],x.v))
u.F(new B.b5(46,0))
w=d.a
u.F(new B.ap(w,0))
v=d.b
u.F(new B.ap(w,v-46))
u.F(new B.ap(w-46,v))
u.F(new B.ap(0,v))
u.F(new B.ap(0,46))
u.F(new B.bF())
return u},
zl:function zl(d,e,f,g,h,i,j,k,l,m){var _=this
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
cc9:function cc9(d){this.a=d},
cc7:function cc7(){},
cc8:function cc8(){},
tf:function tf(d,e){this.a=d
this.b=e},
Bk:function Bk(d,e){this.a=d
this.b=e},
le:function le(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fBW:function fBW(){},
fAd:function fAd(){},
fAf:function fAf(d,e){this.a=d
this.b=e},
fAe:function fAe(d,e,f){this.a=d
this.b=e
this.c=f},
fej:function fej(){},
fek:function fek(){},
feh:function feh(d){this.a=d},
fei:function fei(d){this.a=d},
b0c:function b0c(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cca:function cca(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ccb:function ccb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ccc:function ccc(d){this.a=d},
bbN:function bbN(d){this.a=d},
bbM:function bbM(d,e){this.b=d
this.a=e},
bto:function bto(d){this.a=d},
b8h:function b8h(d,e){this.b=d
this.a=e},
bqT:function bqT(d,e){this.b=d
this.a=e},
hom(d,e){return B.a6(d,!1).cl(B.e8(new C.fNT(e,null),!0,null,x.E))},
fNT:function fNT(d,e){this.a=d
this.b=e},
Vu:function Vu(d,e,f){this.c=d
this.d=e
this.a=f},
aDA:function aDA(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
eiW:function eiW(){},
eiX:function eiX(d){this.a=d},
eiV:function eiV(d,e){this.a=d
this.b=e},
eiJ:function eiJ(d){this.a=d},
eiK:function eiK(d){this.a=d},
eiQ:function eiQ(d){this.a=d},
eiR:function eiR(d,e){this.a=d
this.b=e},
eiO:function eiO(d){this.a=d},
eiP:function eiP(d,e,f){this.a=d
this.b=e
this.c=f},
eiL:function eiL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eiS:function eiS(d,e){this.a=d
this.b=e},
eiN:function eiN(d,e){this.a=d
this.b=e},
eiT:function eiT(d){this.a=d},
eiM:function eiM(d,e){this.a=d
this.b=e},
eiU:function eiU(d,e){this.a=d
this.b=e},
bbj:function bbj(d,e,f){this.b=d
this.c=e
this.a=f},
i9D(d){return B.a6(d,!1).cl(B.e8(new C.fO8(),!0,null,x.I))},
bzj(d,e){var w,v,u,t,s,r,q=B.c2(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fZ9(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fO8:function fO8(){},
a_y:function a_y(d){this.a=d},
ou:function ou(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aEX:function aEX(d,e,f,g,h,i,j,k,l){var _=this
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
_.aF=_.aO=_.aE=_.aw=_.Y=_.aW=_.bi=_.y2=0
_.b0=null
_.b1=0.25
_.bd=null
_.bJ=0.5
_.aR=1
_.c4=_.bQ=_.bk=0
_.cM=_.cL=!1
_.c=_.a=null},
eSw:function eSw(d){this.a=d},
eRo:function eRo(d,e){this.a=d
this.b=e},
eRM:function eRM(d,e){this.a=d
this.b=e},
eRW:function eRW(d){this.a=d},
eR7:function eR7(d){this.a=d},
eR8:function eR8(d){this.a=d},
eR5:function eR5(d){this.a=d},
eR6:function eR6(d){this.a=d},
eRF:function eRF(d,e){this.a=d
this.b=e},
eRG:function eRG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eRS:function eRS(d,e,f){this.a=d
this.b=e
this.c=f},
eRR:function eRR(d,e){this.a=d
this.b=e},
eRT:function eRT(d,e){this.a=d
this.b=e},
eRQ:function eRQ(d,e){this.a=d
this.b=e},
eRV:function eRV(d,e,f){this.a=d
this.b=e
this.c=f},
eRU:function eRU(d,e){this.a=d
this.b=e},
eQY:function eQY(d){this.a=d},
eQZ:function eQZ(d){this.a=d},
eR_:function eR_(d){this.a=d},
eQX:function eQX(){},
eR0:function eR0(d,e){this.a=d
this.b=e},
eQW:function eQW(d,e){this.a=d
this.b=e},
eR2:function eR2(){},
eR1:function eR1(d,e){this.a=d
this.b=e},
eQV:function eQV(d,e){this.a=d
this.b=e},
eQS:function eQS(d,e){this.a=d
this.b=e},
eR3:function eR3(d){this.a=d},
eQU:function eQU(d,e){this.a=d
this.b=e},
eR4:function eR4(d){this.a=d},
eQT:function eQT(d,e){this.a=d
this.b=e},
eSl:function eSl(d,e){this.a=d
this.b=e},
eSs:function eSs(d){this.a=d},
eSt:function eSt(d,e){this.a=d
this.b=e},
eSu:function eSu(){},
eSm:function eSm(d,e){this.a=d
this.b=e},
eSk:function eSk(d,e){this.a=d
this.b=e},
eSn:function eSn(d,e){this.a=d
this.b=e},
eSj:function eSj(d,e){this.a=d
this.b=e},
eSo:function eSo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eSi:function eSi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eSp:function eSp(d){this.a=d},
eSq:function eSq(d,e){this.a=d
this.b=e},
eSr:function eSr(d){this.a=d},
eSh:function eSh(d){this.a=d},
eS4:function eS4(d){this.a=d},
eS5:function eS5(d){this.a=d},
eS3:function eS3(d,e){this.a=d
this.b=e},
eRZ:function eRZ(d,e){this.a=d
this.b=e},
eS6:function eS6(d){this.a=d},
eS9:function eS9(d){this.a=d},
eS2:function eS2(d){this.a=d},
eSa:function eSa(d){this.a=d},
eSb:function eSb(d){this.a=d},
eSc:function eSc(d){this.a=d},
eSd:function eSd(d){this.a=d},
eS1:function eS1(d){this.a=d},
eSe:function eSe(d){this.a=d},
eS0:function eS0(d){this.a=d},
eSf:function eSf(d,e){this.a=d
this.b=e},
eS_:function eS_(d,e){this.a=d
this.b=e},
eSg:function eSg(d){this.a=d},
eS7:function eS7(d){this.a=d},
eS8:function eS8(d){this.a=d},
eRJ:function eRJ(d){this.a=d},
eRI:function eRI(d){this.a=d},
eRK:function eRK(d,e){this.a=d
this.b=e},
eRH:function eRH(d,e){this.a=d
this.b=e},
eRL:function eRL(d){this.a=d},
eRB:function eRB(d){this.a=d},
eRA:function eRA(d){this.a=d},
eRC:function eRC(d){this.a=d},
eRz:function eRz(d){this.a=d},
eRD:function eRD(d,e){this.a=d
this.b=e},
eRy:function eRy(d,e){this.a=d
this.b=e},
eRx:function eRx(d,e){this.a=d
this.b=e},
eRf:function eRf(d){this.a=d},
eRg:function eRg(d){this.a=d},
eRh:function eRh(d){this.a=d},
eRi:function eRi(d){this.a=d},
eRj:function eRj(d){this.a=d},
eRk:function eRk(d){this.a=d},
eRl:function eRl(d){this.a=d},
eRm:function eRm(d){this.a=d},
eRn:function eRn(d){this.a=d},
eQB:function eQB(d){this.a=d},
eQC:function eQC(d){this.a=d},
eQD:function eQD(d){this.a=d},
eQE:function eQE(d){this.a=d},
eQF:function eQF(d){this.a=d},
eQA:function eQA(d){this.a=d},
eQG:function eQG(d){this.a=d},
eQH:function eQH(d){this.a=d},
eR9:function eR9(d){this.a=d},
eRa:function eRa(d){this.a=d},
eRb:function eRb(d){this.a=d},
eRc:function eRc(d){this.a=d},
eRd:function eRd(d){this.a=d},
eQL:function eQL(d){this.a=d},
eQM:function eQM(d){this.a=d},
eQN:function eQN(d){this.a=d},
eQO:function eQO(d){this.a=d},
eQP:function eQP(d){this.a=d},
eQK:function eQK(d){this.a=d},
eQQ:function eQQ(d){this.a=d},
eQJ:function eQJ(d){this.a=d},
eQR:function eQR(d){this.a=d},
eQI:function eQI(d){this.a=d},
eRE:function eRE(d){this.a=d},
eRw:function eRw(d){this.a=d},
eRs:function eRs(d){this.a=d},
eRr:function eRr(d){this.a=d},
eRt:function eRt(d,e){this.a=d
this.b=e},
eRq:function eRq(d,e){this.a=d
this.b=e},
eRu:function eRu(d,e){this.a=d
this.b=e},
eRp:function eRp(d,e){this.a=d
this.b=e},
eRv:function eRv(d){this.a=d},
eRP:function eRP(d){this.a=d},
eRO:function eRO(d,e,f){this.a=d
this.b=e
this.c=f},
eRN:function eRN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eRY:function eRY(d,e){this.a=d
this.b=e},
eRX:function eRX(d,e){this.a=d
this.b=e},
eRe:function eRe(d){this.a=d},
eSv:function eSv(d){this.a=d},
beS:function beS(d,e){this.b=d
this.a=e},
i54(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
i55(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).kW(0,d),m=B.C(n,B.a3(n).k("J.E"))
if(m.length===0)return d
w=new B.fe("")
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
v=t.index+t[0].length}n=w.a=n+A.a.b4(d,v)
return n.charCodeAt(0)==0?n:n},
bzU(){var w=$.bz1,v=$.Q8
$.Q8=v+1
return w+"_"+v},
i9(d,e,f,g,h,i,j){return C.ep(A.bg,!1,4279310375,A.aD,"",i,24,A.bn,A.a5,"",h,C.bzU(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cm,D.f1,g,e,f)},
nV(d,e,f,g){var w=f*9
return C.i9(D.eL,d-f/2,e-w/32,f,w/16,g,0)},
hPD(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bz1
p=$.Q8
$.Q8=p+1
w.push(new C.eK(q+"_"+p,D.f1,0,r,1,0.0016,"",24,A.a5,A.bn,A.aD,k,A.bg,null,D.bf,t,t,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bz1
p=$.Q8
$.Q8=p+1
w.push(new C.eK(q+"_"+p,D.f1,o,0,0.004,1,"",24,A.a5,A.bn,A.aD,k,A.bg,null,D.bf,t,t,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}w.push(C.nV(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nV(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.i9(D.bf,0.08,0.08,0.5,0.003,v,0),C.i9(D.bf,0.58,0.08,0.004,0.06,v,0),C.i9(D.bf,0.58,0.14,0.34,0.003,v,0),C.i9(D.bf,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.i9(D.bf,0.08,0.8,0.004,0.14,t,0),C.i9(D.bf,0.08,0.94,0.6,0.003,t,0),C.nV(0.58,0.08,0.05,e),C.nV(0.92,0.22,0.05,e),C.nV(0.08,0.8,0.05,f),C.nV(0.68,0.94,0.05,f),C.nV(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.i9(D.l4,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i9(D.l4,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i9(D.l4,0.7,0.8,0.22,0.12,w|1140850688,0),C.i9(D.l4,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nV(0.5,0.5,1.5,w|335544320),C.nV(0.5,0.5,1.15,w|402653184),C.nV(0.5,0.5,0.8,v|436207616),C.nV(0.95,0.05,0.4,v|855638016),C.nV(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nV(0.85,0.08,0.7,w|1140850688),C.nV(0.1,0.35,0.5,v|855638016),C.nV(0.9,0.62,0.55,v|771751936),C.nV(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.i9(D.bf,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.i9(D.bf,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.i9(D.bf,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.i9(D.bf,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nV(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nV(0.5,0.2,0.65,(w|3422552064)>>>0),C.nV(0.5,0.2,0.95,w|855638016),C.i9(D.bf,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.i9(D.bf,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.i9(D.jN,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i9(D.jN,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i9(D.jN,0.15,0.86,0.6,0.14,1712265002,0),C.nV(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cTe[n]
u=A.o.E(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bz1
l=$.Q8
$.Q8=l+1
w.push(new C.eK(m+"_"+l,D.f1,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a5,A.bn,A.aD,k,A.bg,null,D.eL,q,q,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}w.push(C.nV(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i9(D.jN,0.35,-0.1,0.3,0.62,w|855638016,0),C.i9(D.jN,0.05,-0.1,0.3,0.55,v,-0.5),C.i9(D.jN,0.65,-0.1,0.3,0.55,v,0.5),C.nV(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.i9(D.bf,0.06,0.04,0.88,0.002,e,0),C.i9(D.bf,0.06,0.96,0.88,0.002,e,0),C.i9(D.bf,0.06,0.04,0.004,0.92,e,0),C.i9(D.bf,0.936,0.04,0.004,0.92,e,0),C.i9(D.bf,0.09,0.07,0.82,0.001,w,0),C.i9(D.bf,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.i9(D.jO,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.i9(D.jO,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.i9(D.jO,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.i9(D.bf,0,0,0.3,0.09,w|1140850688,0),C.i9(D.bf,0.7,0.9,0.3,0.1,v|1426063360,0),C.i9(D.bf,0.82,0.04,0.12,0.07,w|771751936,0),C.i9(D.bf,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.i9(D.eL,0.62,0.02,0.5,0.16,v,0.6),C.i9(D.eL,0.78,0.12,0.4,0.12,u,0.9),C.i9(D.eL,-0.12,0.8,0.5,0.16,u,-0.6),C.i9(D.eL,-0.05,0.9,0.4,0.12,v,-0.9),C.nV(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i9(D.bf,0.09,0.12,0.16,0.006,e,0),C.i9(D.bf,0.05,0.03,0.9,0.001,w,0),C.i9(D.bf,0.05,0.97,0.9,0.001,w,0)],x.u)}},
i1A(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bz1=j
$.Q8=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fxC()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.ep(A.bg,!1,n,A.aD,"ngmy_quote_background",m,24,A.bn,A.a5,"",1,C.bzU(),g,"","",0,!1,"",0,D.bf,l,2,"",0,0,"",D.cm,D.lv,1,0,0))
if(a9)A.d.v(q,C.hPD(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.i54(B.aK(w,p,""))
o=A.a.t(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fxB(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cF,A.a5))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a5))
if(a0!=null&&a0.length!==0)q.push(C.ep(A.bg,!1,n,A.aD,"ngmy_quote_logo",m,24,A.bn,A.a5,a1,a3*9/16,C.bzU(),a0,"","",0,!1,a2,0,D.bf,l,2,"",0,0,"",D.cm,D.lv,a3,a4,a5))
return C.rs(s,r,0,0,q,j+"_slide",D.qd,"","","",D.dd)},
rr:function rr(d,e){this.a=d
this.b=e},
m6:function m6(d,e,f,g,h,i,j,k,l,m){var _=this
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
fxC:function fxC(){},
fxB:function fxB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hFF(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a5(d)
v=B.bi(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.cdx(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bT()
w=w.h(d,"request")
return new C.zn(u,t,s,B.t(w==null?"":w))},
fFh(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fFh=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hgV){w=1
break}$.hgV=!0
t=4
w=7
return B.b(B.aA(),$async$fFh)
case 7:r=e
q=B.aU(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.R.aI(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jy(p),k=k.gae(k),j=x.j,i=x.o;k.C();){o=k.gR(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aV(j.a(o.b));h.C();){m=h.gR(h)
l=C.hFF(m)
if(l!=null)J.ci(n,l)}$.Cu.cg(0,B.t(o.a),new C.fFi(n))}C.fYQ()
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
return B.i($async$fFh,v)},
fYQ(){var w,v=new B.S(Date.now(),0,!1).bR(-12e8)
for(w=new B.dt($.Cu,$.Cu.r,$.Cu.e);w.C();)J.nr(w.d,new C.flI(v))
$.Cu.bp($.Cu,new C.flJ())},
aNy(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aNy=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$aNy)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.cK($.Cu,B.a3($.Cu).k("cK<1,2>")).gae(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aV(q.b);h.C();){o=h.gR(h)
g=o
J.ci(p,B.F(["at",g.a.a7().ac(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aF(r,i,p)}n=r
w=7
return B.b(s.ar("String","ngmy_slides_ai_history_v1",A.R.ao(n,null)),$async$aNy)
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
return B.i($async$aNy,v)},
i5G(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fYQ()
w=$.Cu.cg(0,d,new C.fFk())
v=Date.now()
u=B.C(e,B.a3(e).k("co.E"))
J.pw(w,0,new C.zn(new B.S(v,0,!1),f,u,g))
C.aNy()},
i5D(d){var w,v=$.Cu.h(0,d)
if(v==null||J.cn(v))return
w=J.cG(v)
w.cw(v,0)
if(w.gam(v))$.Cu.W(0,d)
C.aNy()},
zn:function zn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cdx:function cdx(){},
fFi:function fFi(d){this.a=d},
flI:function flI(d){this.a=d},
flJ:function flJ(){},
fFk:function fFk(){},
i5I(d){return A.d.dM(D.w0,new C.fFn(d),new C.fFo())},
hFD(d){var w
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
hFC(d){var w
switch(d.a){case 0:w=D.akX
break
case 1:w=A.yi
break
case 2:w=A.am0
break
case 3:w=K.akz
break
case 4:w=A.alr
break
case 5:w=A.lU
break
default:w=null}return w},
hSB(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.PQ[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.PQ[w]
if(!B.cS(v.toLowerCase(),t,0))u=B.cS(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hFE(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
i5E(d,e,f,g,h){var w=new B.M(D.w0,new C.fFg(),x.eC).aH(0,", "),v=""+d,u=C.hmj(h),t=F.fz0(h),s=C.hiw(g),r=e.t(0,D.HQ)?'- New slides get an "emoji".\n':"",q=e.t(0,D.HR)?'- New slides get an "icon3d" from: '+A.d.aH(D.PQ,", ")+".\n":"",p=e.t(0,D.CE)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
i5F(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.M(D.w0,new C.fFj(),x.eC).aH(0,", "),p=new B.fe("")
if(e.t(0,D.HQ)){p.a=s
w=s}else w=""
if(e.t(0,D.HR))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aH(D.PQ,", ")+".\n")
if(e.t(0,D.CE))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hmj(d)
v=F.fz0(d)
u=C.hiw(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
agN(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.CT(a3,"{"),a5=J.fRc(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.L8(a3,a4,a5+1)
try{w=A.R.aI(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.cn(v))return a1
u=B.a([],x.aC)
for(o=J.aV(v),n=x.s,m=x.N;o.C();){t=o.gR(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.fDg(),m).c_(0,new C.fDh())
k=B.C(l,l.$ti.k("J.E"))}else k=B.a([],n)
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
f=C.hSB(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c8(B.t(d==null?0:d),a1)
if(d==null)d=0
J.ci(u,new C.a7H(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fp(u).b:q))
p=A.d.b5(D.w0,new C.fDi(r))?r:a7
o=C.fkX(J.q(w,"logo_frame"),D.C1)
n=C.fkX(J.q(w,"logo_ring"),D.BX)
m=C.fkX(J.q(w,"photo_frame"),D.C1)
l=C.fkX(J.q(w,"photo_ring"),D.BX)
return new C.aqI(q,p,u,o,n,m,l)}catch(a0){return a1}},
a1h(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hlr(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.CF),f7=f6?C.hMi():e4,f8=f7==null
if(f8)w=e4
else{v=new B.eM()
v.dC(f7.w+1)
u=f7.a
t=B.bo(u.b,!0,x.dL)
A.d.fn(t,v)
s=u.c
s=new C.nJ("luxe",u.a,A.lU,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dd)
w=s}if(w==null)w=C.i5I(f9.b)
r=g2.t(0,D.a4U)||f6
q=g2.t(0,D.HQ)
p=g2.t(0,D.RM)
o=new C.fxG()
n=B.a([],x.g)
m=new C.fxJ(o,w,r)
l=new C.fxI(o,r)
k=new C.fxH(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a5(g0),a7=!A.d.b5(u,new C.fxF(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.E(b1,a3.length)]
b4=A.o.E(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.E(b1,5)
b9=D.cUL[b8]
c0=D.cTH[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eNU.t(0,b2.a)){c7=b0+1
c5=g8[A.o.E(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eL,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.D(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eL,0.7,-0.25,0.46,0.82,(A.o.D(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eL,-0.08,0.68,0.24,0.43,(A.o.D(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mG,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.qe,500,f2,f0))
c1.push(l.$8$fx$key(D.bf,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.RJ
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eL,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.l4,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bf,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.CC
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eL,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eL,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mG,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cF,A.N))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.qe,500,f2,f0))
d3=D.mF
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eL,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bf,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.uo:D.cm
c1.push(new C.eK(b4,D.a4S,0.64,0.05,0.27,0.9,g1,24,A.a5,A.bn,A.aD,4279310375,A.bg,e4,D.bf,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mF
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eL,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eL,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mG,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.qe,450,f2,f0))
c1.push(l.$8$fx$key(D.bf,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.RJ
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eL,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eL,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bf,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bf,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aH(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.HO,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mF}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dd,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hNW(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.E(b1,b8.length)]}else b8=r?D.diu[A.o.E(b1,6)]:s
n.push(new C.lG(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Bx(e4,e4,e4,e4,D.CB,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fA3(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fA3=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.CE)
n=e.t(0,D.HR)
if(!o&&!n){u=D.a3R
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fA6(o,s[r],n,$.hRm,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iN(t,x.e),$async$fA3)
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
return B.i($async$fA3,v)},
fz3(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fz3=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.i5F(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aMU(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fz3)
case 3:u=s.aNe(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fz3,v)},
bBw(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bBw=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aX(x.N)
for(s=B.ea(f,f.r,B.a3(f).c),r=s.$ti.c;s.C();){q=s.d
t.L(0,(q==null?r.a(q):q).b)}C.i5G(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.agN(i,"colorful")
t=C.i5E(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aMU(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hq),$async$bBw)
case 3:u=o.aNe(m,f,h,g,D.dWT,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBw,v)},
aMU(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aMU=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vh(null,""),$async$aMU)
case 3:n=i
if(A.a.i(n).length===0)throw B.V("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.n5(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qO(t,d,g,null),$async$aMU)
case 7:q=i
p=q.b
if(p!=null){o=C.agN(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.V(s!=null&&B.KP(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aMU,v)},
aNe(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aNe=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.CE)||e.t(0,D.HR)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.dc(e,x.Q)
t.W(0,D.CE)}w=6
return B.b(C.fA3(d,t),$async$aNe)
case 6:s=k
w=4
break
case 5:s=D.a3R
case 4:t=d.c
w=A.d.b5(t,new C.fee())?7:9
break
case 7:r=$.hnb
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dP(r,x.aP),$async$aNe)
case 10:q=k
p=q!=null?A.R.ao(q.ag(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hlr(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hFE(new C.aqI(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("M<1,m>")
t=B.C(new B.M(m,new C.fef(),n),n.k("ak.E"))
l.cx=t
t=B.a3(e).k("jP<co.E,m>")
t=B.C(new B.jP(e,new C.feg(),t),t.k("J.E"))
l.cy=t
l.ay=e.t(0,D.RM)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aNe,v)},
h0B(d){var w,v,u,t=d.cy
if(t==null)t=A.T
w=B.aX(x.Q)
for(v=0;v<6;++v){u=D.a2E[v]
if(A.d.t(t,u.b))w.L(0,u)}return w},
i9I(d){return B.bR(A.K,null,new C.fOk(),d,!0,!0,!0,null,!1,!1,x.I)},
hMV(d,e){var w,v=e.toLowerCase()
if(A.a.cb(v,".png"))w="image/png"
else w=A.a.cb(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cS.gcz().aJ(d)},
i9H(d,e,f){return B.bR(A.K,null,new C.fOj(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
h0C(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
h0D(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
fkX(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.b5(e,new C.fkY(w))?w:""},
hiw(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hn9(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.agN(a1==null?"":a1,a0),a3=C.agN(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("a_<1>"),p=0;p<t.length;t.length===v||(0,B.L)(t),++p){o=B.rd(new B.a_(r,new C.fFp(t[p]),q))
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
g=B.C(new B.a_(k,new C.fFq(),v),r)
A.d.b2(g,new C.fFr())
if(g.length===0)continue
f=new C.fFs(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.L)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
i5Z(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aG1
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dYO
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dYP
return null},
hi7(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bv(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dw(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
i5J(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.oe
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
if(C.hi7(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hi7(n,i,v,u))if(n.w>10){f=h+1
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
i5H(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.agN(o,"colorful")
if(n==null)throw B.V("That earlier version could not be read.")
w=B.aX(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a2E[r]
if(q.b===s)w.L(0,q)}}v=C.h0C(e)
u=C.h0D(e)
p=C.hlr(n,D.a3R,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("M<1,m>")
o=B.C(new B.M(o,new C.fFl(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("jP<co.E,m>")
o=B.C(new B.jP(w,new C.fFm(),o),o.k("J.E"))
p.cy=o
p.ay=w.t(0,D.RM)
return p},
i9u(d,e,f){return B.bR(A.K,null,new C.fNx(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hMi(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.eM()
s.dC(t)
w=D.cyR[s.aB(10)]
v=new C.edR(s)
u=x.N
return new C.edQ(w,s.aB(4),J.fp(v.$1$2(D.cZ9,1,x.ff)),w.r[s.aB(3)],v.$1$2(D.de6,2+s.aB(2),u),v.$1$2(D.d7h,2,u),v.$1$2(D.dh2,4,x.fP),t)},
hNW(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.eM()
a1.dC(a5.w+a3*13)
w=new C.faI(a4)
v=new C.faK(a4,d)
u=new C.faJ(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.L)(a2),++q){p=a2[q]
if(p.b===D.cQ){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aT(A.o.fU(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aT(A.o.fU(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.E(a3,t.length)]
if(n==="spotlight")A.d.ck(a2,0,w.$8(D.eL,0.1+a1.aj()*0.45,0.05+a1.aj()*0.3,0.45,0.75,C.a1h(a0,52),"lux_spot",a5.ws(0,"spotlight")))
else A.d.ck(a2,0,w.$8(D.bf,0,0,1,1,0,"lux_back",a5.ws(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.ck(a2,1,w.$8(D.bf,0,0,1,1,0,"lux_back2",a5.aEp(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bf,0.022,0.038,0.956,0.924,0,g,a5.ws(0,f),D.dd,150,C.a1h(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bf,0.018,0.032,0.964,0.936,0,g,a5.ws(0,f),D.dd,120,C.a1h(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bf,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dd,260,C.a1h(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bf,0,0,1,1,0,"lux_filigree",a5.ws(0,"filigree"),D.dd,200))
break
default:a2.push(w.$10$anim$delay(D.bf,0.08,0.06,0.84,0.004,C.a1h(a0,208),"lux_rule",a5.aEp(0,"shimmer",r),D.un,150))
a2.push(w.$10$anim$delay(D.bf,0.08,0.936,0.84,0.004,C.a1h(a0,144),"lux_rule2","",D.HO,220))}l=!A.d.b5(a2,new C.faH())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.ws(0,"crest"),350))
else{o=a1.hd()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.ws(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a1h(r,242)
j=a5.ws(0,"orbit")
i=s===D.bf?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.qe,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eL,t-0.007,0.9495,0.014,0.025,C.a1h(r,242),"lux_g2",a5.ws(0,"orbit"),D.qe,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){h=t[q]
a2.push(w.$8(D.bf,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aT(A.o.fU(a0,16),8,"0").toUpperCase()))}if((A.d.gI(d.b).a&16777215)<8421504)a2.push(w.$8(D.bf,0,0,1,1,0,"lux_velvet",a5.ws(0,"velvet")))},
nJ:function nJ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fFn:function fFn(d){this.a=d},
fFo:function fFo(){},
vV:function vV(d,e){this.a=d
this.b=e},
a7H:function a7H(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aqI:function aqI(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fFg:function fFg(){},
fFj:function fFj(){},
fDg:function fDg(){},
fDh:function fDh(){},
fDi:function fDi(d){this.a=d},
fxG:function fxG(){},
fxJ:function fxJ(d,e,f){this.a=d
this.b=e
this.c=f},
fxI:function fxI(d,e){this.a=d
this.b=e},
fxH:function fxH(d,e){this.a=d
this.b=e},
fxF:function fxF(d){this.a=d},
fA6:function fA6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fA4:function fA4(d){this.a=d},
fA5:function fA5(d){this.a=d},
fee:function fee(){},
fef:function fef(){},
feg:function feg(){},
fOk:function fOk(){},
a04:function a04(d){this.a=d},
aGS:function aGS(d,e,f,g,h){var _=this
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
eYI:function eYI(d,e,f){this.a=d
this.b=e
this.c=f},
eYJ:function eYJ(d,e){this.a=d
this.b=e},
eYG:function eYG(d,e){this.a=d
this.b=e},
eYH:function eYH(d,e){this.a=d
this.b=e},
eYF:function eYF(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eYA:function eYA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eYE:function eYE(d,e){this.a=d
this.b=e},
eYz:function eYz(d,e){this.a=d
this.b=e},
eYD:function eYD(d,e){this.a=d
this.b=e},
eYy:function eYy(d,e){this.a=d
this.b=e},
eYB:function eYB(d){this.a=d},
eYC:function eYC(d,e){this.a=d
this.b=e},
eYo:function eYo(d,e){this.a=d
this.b=e},
eYp:function eYp(d,e){this.a=d
this.b=e},
eYr:function eYr(d){this.a=d},
eYs:function eYs(d){this.a=d},
eYt:function eYt(d){this.a=d},
eYu:function eYu(d){this.a=d},
eYq:function eYq(d,e){this.a=d
this.b=e},
eYv:function eYv(d,e){this.a=d
this.b=e},
eYW:function eYW(d){this.a=d},
eYX:function eYX(d){this.a=d},
eYV:function eYV(d){this.a=d},
eYY:function eYY(d){this.a=d},
eYU:function eYU(d){this.a=d},
eZ_:function eZ_(d){this.a=d},
eYT:function eYT(d,e){this.a=d
this.b=e},
eZ0:function eZ0(d){this.a=d},
eYS:function eYS(d,e){this.a=d
this.b=e},
eZ1:function eZ1(d){this.a=d},
eYR:function eYR(d){this.a=d},
eZ2:function eZ2(d){this.a=d},
eYQ:function eYQ(d,e){this.a=d
this.b=e},
eZ3:function eZ3(d){this.a=d},
eYP:function eYP(d,e){this.a=d
this.b=e},
eZ4:function eZ4(d){this.a=d},
eYO:function eYO(d){this.a=d},
eZ5:function eZ5(d,e){this.a=d
this.b=e},
eYN:function eYN(d,e){this.a=d
this.b=e},
eZ6:function eZ6(d){this.a=d},
eYZ:function eYZ(d){this.a=d},
eYM:function eYM(d,e){this.a=d
this.b=e},
eYw:function eYw(d,e,f){this.a=d
this.b=e
this.c=f},
eYx:function eYx(d,e,f){this.a=d
this.b=e
this.c=f},
eYL:function eYL(d,e){this.a=d
this.b=e},
eYK:function eYK(d,e){this.a=d
this.b=e},
fOj:function fOj(d,e){this.a=d
this.b=e},
a03:function a03(d,e,f){this.c=d
this.d=e
this.a=f},
aGR:function aGR(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eYh:function eYh(d){this.a=d},
eYi:function eYi(d){this.a=d},
eYj:function eYj(d,e){this.a=d
this.b=e},
eYk:function eYk(d){this.a=d},
eYl:function eYl(d){this.a=d},
eYg:function eYg(d,e){this.a=d
this.b=e},
eYm:function eYm(d,e){this.a=d
this.b=e},
eYn:function eYn(d,e){this.a=d
this.b=e},
fkY:function fkY(d){this.a=d},
b0A:function b0A(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDp:function aDp(d,e,f){this.c=d
this.d=e
this.a=f},
bjx:function bjx(d,e){var _=this
_.d=$
_.bt$=d
_.a8$=e
_.c=_.a=null},
edT:function edT(d){this.a=d},
edS:function edS(){},
bh4:function bh4(d,e){this.b=d
this.a=e},
fFp:function fFp(d){this.a=d},
fFq:function fFq(){},
fFr:function fFr(){},
fFs:function fFs(d){this.a=d},
arh:function arh(d,e){this.a=d
this.b=e},
fFl:function fFl(){},
fFm:function fFm(){},
fNx:function fNx(d,e){this.a=d
this.b=e},
Zp:function Zp(d,e,f){this.c=d
this.d=e
this.a=f},
aAS:function aAS(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dii:function dii(d){this.a=d},
dij:function dij(d){this.a=d},
dik:function dik(d,e){this.a=d
this.b=e},
din:function din(d){this.a=d},
dio:function dio(d,e){this.a=d
this.b=e},
dim:function dim(d,e){this.a=d
this.b=e},
dip:function dip(d){this.a=d},
dil:function dil(d,e){this.a=d
this.b=e},
brZ:function brZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
edQ:function edQ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
edR:function edR(d){this.a=d},
faI:function faI(d){this.a=d},
faK:function faK(d,e){this.a=d
this.b=e},
faJ:function faJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
faH:function faH(){},
aLq:function aLq(){},
h_r(d){var w,v,u
try{w=A.R.aI(0,d,null)
if(x.f.b(w)){v=B.vN(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b0w:function b0w(d,e,f){this.c=d
this.d=e
this.a=f},
bla:function bla(d,e){this.c=d
this.a=e},
i22(d){return A.d.dM(D.GS,new C.fyN(d),new C.fyO())},
i23(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b4(t,6)
if(w.length===0)return null
v=new B.a_(D.GS,new C.fyP(w),x.b4)
if(!v.gae(0).C())return null
u=v.gI(0)
return new C.jG("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
lb:function lb(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fyN:function fyN(d){this.a=d},
fyO:function fyO(){},
fyP:function fyP(d){this.a=d},
mU(d,e,f,g,h){return new C.Eu(f,g,d)},
hP9(d){var w=d.z,v=B.U(w).k("a_<1>")
w=B.C(new B.a_(w,new C.fcI(),v),v.k("J.E"))
d.z=w
d.x=""},
dw(d,e){var w=$.Kd
e.db="__design__:"+(w.length===0?"layer":w)
A.d.ck(d.z,0,e)},
dx(d,e,f,g,h,i,j,k,l){return C.ep(A.bg,!1,4279310375,A.aD,"",d,24,A.bn,A.a5,"",e,"design_"+C.cD(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cm,D.f1,j,k,l)},
hle(d,e){var w
C.hP9(d)
w=A.d.dM($.bDx(),new C.fwD(e),new C.fwE())
$.Kd=w.a
d.x=w.a;++d.y
try{w.bC(d)}finally{$.Kd=""}d.z=B.bo(d.z,!0,x.F)},
Eu:function Eu(d,e,f){this.a=d
this.b=e
this.e=f},
fcI:function fcI(){},
fES:function fES(){},
fET:function fET(){},
fEU:function fEU(){},
fF4:function fF4(){},
fF9:function fF9(){},
fFa:function fFa(){},
fFb:function fFb(){},
fFc:function fFc(){},
fFd:function fFd(){},
fFe:function fFe(){},
fFf:function fFf(){},
fEV:function fEV(){},
fEW:function fEW(){},
fEX:function fEX(){},
fEY:function fEY(){},
fEZ:function fEZ(){},
fF_:function fF_(){},
fF0:function fF0(){},
fF1:function fF1(){},
fF2:function fF2(){},
fF3:function fF3(){},
fF5:function fF5(){},
fF6:function fF6(){},
fF7:function fF7(){},
fF8:function fF8(){},
fwD:function fwD(d){this.a=d},
fwE:function fwE(){},
iW(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.ep(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bf,4280172719,2,m,n,0,"",o,D.cQ,p,q,r)},
CL(d,e,f,g,h,i,j,k,l){return C.ep(A.bg,!1,4279310375,A.aD,"",d,24,A.bn,A.a5,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cm,D.f1,j,k,l)},
bCf(){var w=new B.S(Date.now(),0,!1)
return A.ih[B.bH(w)-1]+" "+B.bQ(w)+", "+B.bA(w)},
eu:function eu(d,e,f){this.a=d
this.b=e
this.c=f},
bzE(d){return new B.iR((A.o.aA(d,24)&255)/255,(A.o.aA(d,16)&255)/255,(A.o.aA(d,8)&255)/255,(d&255)/255)},
hUd(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.amu(A.cG.aJ(A.d.gal(d.split(","))))
return w}catch(v){return null}},
hUh(d){var w=d.r
if(!d.cy)return w
return new B.M(B.a(w.split("\n"),x.s),new C.fkw(),x.dv).aH(0,"\n")},
hUg(d){switch(d.a){case 2:return A.nt
case 1:case 5:return A.eYu
default:return A.Te}},
hUa(d){switch(d.a){case 2:return A.uX
case 1:case 5:return A.V4
default:return A.a9L}},
hUe(d,e){var w,v=null,u=d.ay,t=A.o.aA(u,24),s=A.o.aA(d.ch,24),r=(t&255)===0?v:C.bzE(u),q=(s&255)===0?v:C.bzE(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nt(q,p,A.kL)
w=new B.px(t,t,t,t)}switch(d.ax.a){case 1:return B.lv(v,v,v,new B.kB(r,w,v,A.ab_,v),v,v,v,v)
case 4:return u?new B.fP(v,v,v):B.wX(B.lv(v,v,q,v,p+0.4,v,v,v))
default:return B.lv(v,v,v,new B.kB(r,w,B.vp(4),A.hG,v),v,v,v,v)}},
hUc(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f1?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hUa(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hUh(d)
t=C.bzE(d.Q)
s=d.x.a>=700?A.el:A.vx
r=d.y===A.cF?A.xW:A.ajq
q=d.z
p=new B.CW(w,l,l,B.fb(u,l,l,l,B.h6(l,t,1===q.a?A.aP_:A.aOZ,l,l,l,l,l,l,A.ds,l,l,v,r,s,l,!0,l,l,l,l),C.hUg(d.as)))
break
case 1:case 4:o=C.hUd(d.at)
n=i===D.lv&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.wX(B.fb(w,l,l,l,B.h6(l,A.rC,l,l,l,l,l,l,l,A.ds,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.HD(o,n?A.aaW:A.Vs,l,l)
break
case 3:w=new B.nt(A.I6,1,A.kL)
u=B.vp(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lv(A.uX,B.fb(t,l,l,l,B.h6(l,D.ea8,l,l,l,l,l,l,l,A.ds,l,l,11,l,A.el,l,!0,l,l,l,l),A.nt),l,new B.kB(E.aHk,new B.px(w,w,w,w),u,A.hG,l),l,l,l,l)
break
case 2:p=C.hUe(d,e)
break
case 5:p=C.hUb(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hcU(-w,p)
w=i===D.cQ
if(w){m=A.o.aA(d.Q,24)&255
if(m<255)p=new B.as2(m/255,p)}if(w)return new F.w0(k,l,j,l,new B.RW(new B.kA(g,g,f,1/0),p))
if(i===D.l3){i=new B.nt(A.I6,1,A.kL)
i=B.lv(A.uX,p,l,new B.kB(A.p5,new B.px(i,i,i,i),B.vp(4),A.hG,l),l,l,D.bvy,l)}else i=p
return new F.w0(k,l,j,l,new B.fP(g,f,i))},
hUf(d,e,f,g){var w,v=null,u=C.bzE(d.e),t=d.f
t=B.a([F.hbw(t!=null?B.lv(v,v,v,new B.kB(v,v,v,A.hG,new B.aW4(E.V5,A.a9F,B.a([u,C.bzE(t)],x.cR),v)),v,v,v,v):B.lv(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.M(w,new C.fkv(f,g),B.U(w).k("M<1,ff>")))
return F.cqM(t)},
h0F(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$h0F=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a3V(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){p=t[q]
o=new B.Wc(A.wc,A.I3,D.bwF,null,null,null,!1,null)
o=new B.BD(o,new C.fFy(607,787,p,d))
o.Mq(n,null)
r.push(o)}u=n.k7(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h0F,v)},
hUb(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.h_r(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gajf()
if(h==null)h=A.awU
j=B.ts(4279308564)
w=B.vp(18)
v=new B.nt(B.ts(4287531653),3,A.kL)
u=i.length===0?"My links":i
u=B.a([B.wX(B.fb(u,m,m,m,B.h6(m,A.p5,m,m,m,m,m,m,m,A.ds,m,m,12,m,A.el,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.wX(B.fb(A.a.i(l.c),m,m,m,D.f4E,m)))
u.push(new B.fP(m,8,m))
for(t=B.de(h,0,B.dJ(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bS(t,t.gM(0),s.k("bS<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.ts(4280690220)
o=new B.a9_(8,8)
n=A.a.i(r.b)
u.push(new B.nK(D.bpS,new C.awe(new C.ahU(q),B.lv(m,B.fb(n.length===0?A.a.i(r.c):n,m,m,m,D.f6X,A.nt),m,new B.kB(p,m,new B.aik(o,o,o,o),A.hG,m),m,m,D.bvY,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.wX(B.fb(k,m,m,m,D.f6b,m))
u.push(new C.awe(C.htO(k),t))}return B.lv(m,B.yH(u,A.LG,A.lt),m,new B.kB(j,new B.px(v,v,v,v),w,A.hG,m),m,m,D.bqH,m)},
fkw:function fkw(){},
fkv:function fkv(d,e){this.a=d
this.b=e},
fFy:function fFy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agA(d){var w,v
for(w=0;w<32;++w){v=D.GI[w]
if(v.a===d)return v}return null},
hfy(d){var w,v,u=A.a.cJ(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cG.aJ(A.a.b4(d,u+1))
return w}catch(v){return null}},
cX(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hoi(d,e){return B.a6(d,!1).cl(B.e8(new C.fLX(e),!0,null,x.fB))},
hoh(d,e){return B.bR(A.K,null,new C.fLW(e),d,!0,!0,!0,null,!1,!1,x.fB)},
j_:function j_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
El:function El(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Nf:function Nf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biU:function biU(d,e,f){var _=this
_.d=d
_.e=$
_.bt$=e
_.a8$=f
_.c=_.a=null},
dTH:function dTH(d){this.a=d},
dTG:function dTG(d,e,f){this.a=d
this.b=e
this.c=f},
dTF:function dTF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqy:function bqy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eXv:function eXv(d,e){this.a=d
this.b=e},
bdY:function bdY(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aZq:function aZq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c84:function c84(){},
c85:function c85(d){this.a=d},
c86:function c86(d,e,f){this.a=d
this.b=e
this.c=f},
c87:function c87(d,e,f){this.a=d
this.b=e
this.c=f},
fLX:function fLX(d){this.a=d},
YY:function YY(d,e){this.c=d
this.a=e},
azf:function azf(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d7v:function d7v(d,e,f){this.a=d
this.b=e
this.c=f},
d7A:function d7A(d){this.a=d},
d7B:function d7B(d){this.a=d},
d7z:function d7z(d){this.a=d},
d7C:function d7C(d){this.a=d},
d7y:function d7y(d,e){this.a=d
this.b=e},
d7D:function d7D(d){this.a=d},
d7x:function d7x(d){this.a=d},
d7E:function d7E(d){this.a=d},
d7w:function d7w(d,e){this.a=d
this.b=e},
d7F:function d7F(d,e){this.a=d
this.b=e},
fLW:function fLW(d){this.a=d},
fLV:function fLV(d){this.a=d},
fLU:function fLU(d,e,f){this.a=d
this.b=e
this.c=f},
fLT:function fLT(d,e){this.a=d
this.b=e},
aKU:function aKU(){},
i9G(d){return B.bR(A.K,null,new C.fOi(),d,!0,!0,!0,null,!1,!1,x.N)},
fOi:function fOi(){},
Zi:function Zi(d){this.a=d},
bfr:function bfr(d){this.d=d
this.c=this.a=null},
deh:function deh(d){this.a=d},
dei:function dei(d,e){this.a=d
this.b=e},
dej:function dej(d){this.a=d},
hQF(d){var w,v=d.split("@")
if(v.length>1){w=B.c8(v[1],16)
if(w!=null)return B.b0(w)}return D.xm},
i3Y(d){var w,v=A.d.gI(d.split("@"))
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
i3X(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gI(d.split("@")),p=C.hQF(d)
switch(q){case"shimmer":return B.nO(A.aa6,g,new C.fCe(p,A.k.E(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.beP(e,f,p,r),A.au),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dU(B.ed(A.A,B.dd(C.fSy(g,B.a4L(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.u(w*60,v*26))
case"goldframe":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bew(e,p,r),A.au),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.dd(B.eH(A.A,e*0.5,B.ed(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dp()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fB(e)
u.mM(Math.sin(e)*0.3)
return B.dU(B.ft(A.A,g,r,u,!0),new B.u(w*22,v*12))
case"rays":return new B.an(A.W,r,A.b0,A.r,B.a([B.e1(B.b3(r,r,r,new C.bnq(e,f,p,r),A.au),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.W,r,A.b0,A.r,B.a([B.e1(B.b3(r,r,r,new C.b9q(e,f,p,r),A.au),!0,r),g],x.p),r)
case"aurora":return new B.an(A.W,r,A.b0,A.r,B.a([B.e1(B.b3(r,r,r,new C.b93(e,f,p,r),A.au),!0,r),g],x.p),r)
case"velvet":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.buk(e,p,r),A.au),!0,r)],x.p),r)
case"sparkle":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.brl(e,f,p,r),A.au),!0,r)],x.p),r)
case"sheen":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bqu(e,p,r),A.au),!0,r)],x.p),r)
case"filigree":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bdR(e,p,r),A.au),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.aa,A.f,B.a([B.bZ(0,B.e1(B.ed(A.A,B.c0(r,new B.o(r,r,r,r,r,new B.bT(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.be),1.6+s*0.15,r,r),!0,r),0,0,0),B.eH(A.A,s*0.06,B.ed(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fCe:function fCe(d,e){this.a=d
this.b=e},
beP:function beP(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bew:function bew(d,e,f){this.b=d
this.c=e
this.a=f},
bnq:function bnq(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9q:function b9q(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b93:function b93(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
buk:function buk(d,e,f){this.b=d
this.c=e
this.a=f},
brl:function brl(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bqu:function bqu(d,e,f){this.b=d
this.c=e
this.a=f},
bdR:function bdR(d,e,f){this.b=d
this.d=e
this.a=f},
d7c:function d7c(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
xu:function xu(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fCh(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.l3},
i42(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.b2(j,new C.fCi())
s=A.d.gI(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.L)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gI(B.aPO(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
i41(d,e){var w,v,u,t,s,r=d.db
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
agd(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$agd=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("a_<1>")
e=B.C(new B.a_(a4,new C.fuE(),f),f.k("J.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(A.dH,null,new C.fuF(e),d,!0,!0,!1,A.lw,!1,!1,x.N),$async$agd)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gI(e).hF())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.h1g(d),$async$agd)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.L_(d,"Search states\u2026","",A.k6,"Choose state"),$async$agd)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.h0c(s)
if(p==null)p=A.d.gI(D.QD)
f=C.cD()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cD()
m=p.e
l=C.fCj(p.d)
k=x.u
j=B.a([C.ep(A.bg,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bn,A.a5,"",1,C.cD(),l,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.lv,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.Cx(i,0.016,D.l4,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Cx(0,0.058,D.eL,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Cx(0,0.058,D.eL,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.Ko("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.Ko("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a5,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fY8(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bz7("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a0T("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a0T("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a0T("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a0T("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bz7("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Cx(m,0.082,D.bf,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cD()
k.push(C.ep(A.bg,!1,i,A.aD,"marriage_field_utangulizi:"+A.k.ab(0.78,3),4280640491,9.5,A.bn,A.cv,"",0.074,g,null,"","",0,!1,"",0,D.bf,4280172719,2,y.O,0,0,"",D.cm,D.cQ,0.78,0.11,0.388))
A.d.v(k,C.fY8(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bz7("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hhx("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hhx("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a0T("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a0T("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bz6("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bz6("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bz7("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.Ko("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.Ko("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bz6("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bz6("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bz7("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a0T("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bz6("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a0T("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.fY8(0.22,0.83,0.56,4291404327,i),h)
h.push(C.Ko("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.Ko("Nakala ya Hati",A.L,4291404327,9,A.a5,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Bx(null,null,null,null,D.oe,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rs(m,null,0,0,j,n,D.qd,"","","Hati ya Ndoa",D.dd)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agd,v)},
fCi:function fCi(){},
fuE:function fuE(){},
fuF:function fuF(d){this.a=d},
fuC:function fuC(d){this.a=d},
fuD:function fuD(d){this.a=d},
hTG(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hTF(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mL
case"lineThrough":return A.zy
default:return A.aD}},
ep(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eK(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hjB(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.Qo[w]
if(v.b===u)return v}return D.dd},
hQ3(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cQC[w]
if(v.b===u)return v}return D.cQ},
hWu(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.deL[w]
if(v.b===u)return v}return D.bf},
rs(d,e,f,g,h,i,j,k,l,m,n){return new C.lG(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hag(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hS3(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.hjB(d.h(0,"transition"))
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
n=B.cF(n,new C.cdu(),n.$ti.k("J.E"),x.F)
n=B.C(n,B.a3(n).k("J.E"))}return C.rs(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hS3(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.aoJ[w]
if(v.b===u)return v}return D.mF},
Bx(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.S(Date.now(),0,!1):a4
return new C.i0(p,t,a1,h,i,w,a0==null?B.a([C.rs(4294967295,null,0,0,null,C.cD(),D.qd,"","","",D.dd)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
VD(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hOb(a6.h(0,"aspectRatio"))
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
o=C.kw(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kw(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
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
else{f=J.b6(f,new C.cdh(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.cdi(),x.N)
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
g=B.cF(g,new C.cdj(),g.$ti.k("J.E"),x.bt)
g=B.C(g,B.a3(g).k("J.E"))}return C.Bx(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rs(4294967295,a3,0,0,a3,C.cD(),D.qd,"","","",D.dd)],x.g):g,v,p,o,s)},
kw(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hOb(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dfB[w]
if(v.b===u)return v}return D.CB},
cD(){var w=Date.now(),v=$.j1
$.j1=v+1
return""+1000*w+"_"+v},
cdL(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a9(d.z)
if(e!==D.CC){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cD()
v=C.ep(A.L,!1,f.d.l(),A.aD,"",n,40,A.bn,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bf,m,2,o,0,0,"",D.cm,D.cQ,0.84,0.08,0.3)
u=C.cD()
A.d.v(w,B.a([v,C.ep(A.L,!1,f.e.l(),A.aD,"",n,20,A.bn,A.cv,"",0.12,u,p,"","",0,!1,"",0,D.bf,m,2,"Click to add subtitle",0,0,"",D.cm,D.cQ,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cD()
v=C.ep(A.bg,!1,f.d.l(),A.aD,"",n,32,A.bn,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bf,m,2,o,0,0,"",D.cm,D.cQ,0.88,0.06,0.06)
u=C.cD()
A.d.v(w,B.a([v,C.ep(A.bg,!0,f.e.l(),A.aD,"",n,20,A.bn,A.cv,"",0.68,u,p,"","",0,!1,"",0,D.bf,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cm,D.cQ,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cD()
v=C.ep(A.bg,!1,f.d.l(),A.aD,"",n,30,A.bn,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bf,m,2,"Two Column Slide",0,0,"",D.cm,D.cQ,0.88,0.06,0.06)
u=C.cD()
t=f.e
u=C.ep(A.bg,!0,t.l(),A.aD,"",n,18,A.bn,A.a5,"",0.7,u,p,"","",0,!1,"",0,D.bf,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cm,D.cQ,0.42,0.06,0.22)
s=C.cD()
A.d.v(w,B.a([v,u,C.ep(A.bg,!0,t.l(),A.aD,"",n,18,A.bn,A.a5,"",0.7,s,p,"","",0,!1,"",0,D.bf,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cm,D.cQ,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.L(d.z,C.ep(A.L,!1,4294967295,A.aD,"",n,42,A.bn,A.u,"",0.2,C.cD(),p,"","",0,!1,"",0,D.bf,m,2,"Section Header",0,0,"",D.cm,D.cQ,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cD()
v=C.ep(A.bg,!1,f.d.l(),A.aD,"",n,30,A.bn,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bf,m,2,"Compare",0,0,"",D.cm,D.cQ,0.88,0.06,0.06)
u=C.cD()
t=f.c
u=C.ep(A.bg,!1,l,A.aD,"",t.j(0.12).l(),24,A.bn,A.a5,"",0.68,u,p,"","",0,!1,"",0,D.bf,t.l(),2,"",0,0,"",D.cm,D.f1,0.42,0.06,0.22)
s=C.cD()
r=f.e
s=C.ep(A.bg,!1,r.l(),A.aD,"",n,20,A.bn,A.N,"",0.6,s,p,"","",0,!1,"",0,D.bf,m,2,"Option A",0,0,"",D.cm,D.cQ,0.38,0.08,0.26)
q=C.cD()
t=C.ep(A.bg,!1,l,A.aD,"",t.j(0.06).l(),24,A.bn,A.a5,"",0.68,q,p,"","",0,!1,"",0,D.bf,t.j(0.5).l(),2,"",0,0,"",D.cm,D.f1,0.42,0.52,0.22)
q=C.cD()
A.d.v(w,B.a([v,u,s,t,C.ep(A.bg,!1,r.l(),A.aD,"",n,20,A.bn,A.N,"",0.6,q,p,"","",0,!1,"",0,D.bf,m,2,"Option B",0,0,"",D.cm,D.cQ,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cD()
v=C.ep(A.L,!1,f.d.l(),A.aD,"",n,36,A.bn,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bf,m,2,"TERM / QUESTION",0,0,"",D.cm,D.cQ,0.8,0.1,0.12)
u=C.cD()
A.d.v(w,B.a([v,C.ep(A.L,!1,f.e.l(),A.aD,"",n,22,A.bn,A.cv,"",0.35,u,p,"","",0,!1,"",0,D.bf,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cm,D.cQ,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cD()
v=C.ep(A.bg,!1,f.d.l(),A.aD,"",n,28,A.bn,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bf,m,2,"Quiz Question",0,0,"",D.cm,D.cQ,0.88,0.06,0.06)
u=C.cD()
A.d.v(w,B.a([v,C.ep(A.bg,!1,f.e.l(),A.aD,"",n,20,A.bn,A.a5,"",0.62,u,p,"","",0,!1,"",0,D.bf,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cm,D.cQ,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cD()
v=C.ep(A.bg,!1,f.d.l(),A.aD,"",n,26,A.bn,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bf,m,2,"Worksheet / Assignment",0,0,"",D.cm,D.cQ,0.88,0.06,0.04)
u=C.cD()
A.d.v(w,B.a([v,C.ep(A.bg,!1,f.e.l(),A.aD,"",n,18,A.bn,A.a5,"",0.78,u,p,"","",0,!1,"",0,D.bf,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cm,D.cQ,0.88,0.06,0.16)],x.u))
break}},
hFO(d){return A.d.dM(D.a2h,new C.cdM(d),new C.cdN())},
hFL(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.R.aI(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aV(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gR(t)
if(!q.b(u))continue
try{J.ci(v,C.VD(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fUE(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.cdH(t)
for(w=J.aV(d);w.C();)s.$1(w.gR(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.L)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.C(new B.bc(t,w),w.k("J.E"))
A.d.b2(u,new C.cdG())
return u},
haj(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cdC()
if(u!==w)return u>=w?d:e
return v.$1(d).cc(v.$1(e))?d:e},
aqJ(d){return C.hFJ(d)},
hFJ(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aqJ=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.cdF()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a24(m),$async$aqJ)
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
return B.b(B.aA(),$async$aqJ)
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
case 11:o=l.$1($.hai.h(0,m))
n=C.fUE(C.fUE(j,r),o)
if(n.length===0){u=C.haj(C.haj(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aqJ,v)},
cdB(d){return C.hFI(d)},
hFI(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$cdB=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$cdB)
case 7:r=f
q=r.t8("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kE(q,B.U(q).c)
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
return B.i($async$cdB,v)},
b0C(d,e){return C.hFK(d,e)},
hFK(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b0C=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b0C)
case 6:s=g
q=s.t8("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.L(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.L7(r,J.ad(r)-500):r
w=7
return B.b(s.ar("StringList","ngmy_slides_deleted_"+p,o),$async$b0C)
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
return B.i($async$b0C,v)},
VE(d,e){return C.hFM(d,e)},
hFM(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$VE=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hah.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aqJ(a3),$async$VE)
case 5:p=a6
case 4:w=6
return B.b(C.cdB(a3),$async$VE)
case 6:o=a6
n=B.T(x.N,x.I)
for(m=J.aV(p);m.C();){l=m.gR(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.L)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbq())k=f===g.gbq()&&k.b>g.gcB()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("bc<2>")
l=m.k("a_<J.E>")
e=B.C(new B.a_(new B.bc(n,m),new C.cdI(o),l),l.k("J.E"))
A.d.b2(e,new C.cdJ())
$.hah.n(0,a0,e)
n=B.U(e).k("M<1,a4<m,@>>")
n=B.C(new B.M(e,new C.cdK(),n),n.k("ak.E"))
r=A.R.ao(n,null)
$.hai.n(0,a0,r)
t=8
w=11
return B.b(B.ah1(a0,r),$async$VE)
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
return B.b(B.aA(),$async$VE)
case 16:q=a6
w=17
return B.b(q.ar("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$VE)
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
return B.i($async$VE,v)},
Ix:function Ix(d,e){this.a=d
this.b=e},
aqH:function aqH(d,e){this.a=d
this.b=e},
uD:function uD(d,e){this.a=d
this.b=e},
mx:function mx(d,e){this.a=d
this.b=e},
hz:function hz(d,e){this.a=d
this.b=e},
eK:function eK(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
lG:function lG(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cdv:function cdv(){},
cdw:function cdw(){},
cdu:function cdu(){},
i0:function i0(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
cdk:function cdk(){},
cdl:function cdl(){},
cdh:function cdh(){},
cdi:function cdi(){},
cdj:function cdj(){},
jG:function jG(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cdM:function cdM(d){this.a=d},
cdN:function cdN(){},
cdH:function cdH(d){this.a=d},
cdG:function cdG(){},
cdC:function cdC(){},
cdD:function cdD(){},
cdE:function cdE(){},
cdF:function cdF(){},
cdI:function cdI(d){this.a=d},
cdJ:function cdJ(){},
cdK:function cdK(){},
i4d(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fCR(e,v,d,B.aX(w))
w.$1(new C.fCN())
w.$1(new C.fCO())
w.$1(new C.fCP())
w.$1(new C.fCQ())
return v},
fCR:function fCR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCN:function fCN(){},
fCO:function fCO(){},
fCP:function fCP(){},
fCQ:function fCQ(){},
b0z:function b0z(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cdq:function cdq(d){this.a=d},
cdp:function cdp(){},
cdr:function cdr(){},
cds:function cds(d,e){this.a=d
this.b=e},
cdt:function cdt(d){this.a=d},
anT:function anT(d,e){this.c=d
this.a=e},
biE:function biE(d,e){var _=this
_.d=$
_.bt$=d
_.a8$=e
_.c=_.a=null},
dFW:function dFW(){},
aKF:function aKF(){},
cdy(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cdy=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.J(x.q).f.U(D.eVH)
u=!1
w=1
break}u=B.kU(!1,d,t,!1,null,A.a4W,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cdy,v)},
hFG(d){var w=A.d.be(D.GS,new C.cdz(d))
if(w<0)return!0
return w>=4},
hFH(d){var w=A.d.be($.bDx(),new C.cdA(d))
if(w<0)return!0
return w>=5},
cdz:function cdz(d){this.a=d},
cdA:function cdA(d){this.a=d},
i5T(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.yv()
$.qc().pU(t,new C.fFF(s),!0)
u=B.a([B.DH(v,A.qh,t)],x.p)
if(e.length!==0){w=B.n(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.f57,v,v,v),A.f,v,v,new B.o(A.aW,v,v,w,v,v,A.n),v,v,v,v,A.nf,v,v,v),v,v,4,v,4,v))}return new B.an(A.W,v,A.b0,A.r,u,v)},
fFF:function fFF(d){this.a=d},
i5u(){return C.h0y()},
i2r(){return C.bBt()},
i4u(){return C.h0p()},
aOT(d,e,f){var w=0,v=B.j(x.H),u
var $async$aOT=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fEL(d,f),$async$aOT)
case 5:w=1
break
case 4:if(d.e!=null)d.J(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aOT,v)},
fEL(d,e){var w=0,v=B.j(x.H),u
var $async$fEL=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bzF
if(u==null)u=e+".pdf"
w=2
return B.b(B.bR(A.K,null,new C.fEM(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fEL)
case 2:return B.h(null,v)}})
return B.i($async$fEL,v)},
fEM:function fEM(d,e){this.a=d
this.b=e},
ad2:function ad2(d,e,f){this.c=d
this.d=e
this.a=f},
eqi:function eqi(d,e){this.a=d
this.b=e},
eqj:function eqj(d,e){this.a=d
this.b=e},
eqk:function eqk(d,e){this.a=d
this.b=e},
eql:function eql(d){this.a=d},
adk:function adk(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b0y(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b0x(g,m,f,d,e,h,l,k,j,o,i,null)},
hmy(d){return B.cq(new C.fCM(d))},
h0A(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
i5C(d){if(d===D.cm)return"None"
return C.h0A(d)},
bAa(d,e,f,g){return C.hWB(d,e,f,g)},
hWB(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bAa=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a6(d,!0)
if($.fYr&&t.py())t.eN()
$.fYr=!0
s.a=null
w=3
return B.b(B.hT(A.bi,!0,"Animation preview",d,new C.fn3(s,e,g,f),null,A.eG,!0,x.H),$async$bAa)
case 3:s=s.a
if(s!=null)s.a6(0)
$.fYr=!1
case 1:return B.h(u,v)}})
return B.i($async$bAa,v)},
fP6(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fP6=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bV,x.w).w.a.a*0.88,280,440)
s=f===D.cm
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.h0A(f)+" Slide transition preview"
s=s?Af.F7:A.vj
w=3
return B.b(C.bAa(d,s,new B.a7(t,t*0.56,B.bw(B.n(14),new C.aIg(f,null),A.aq),null),r),$async$fP6)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fP6,v)},
hlR(d,e,f){var w,v,u=null,t=A.ct.az(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.dd(f,t)
case 2:case 17:return B.dU(B.dd(f,t),new B.u((1-t)*48,0))
case 3:return B.dU(B.dd(f,t),new B.u(-(1-t)*48,0))
case 4:case 21:return B.dU(B.dd(f,t),new B.u(0,(1-t)*36))
case 5:return B.dU(B.dd(f,t),new B.u(0,-(1-t)*36))
case 6:case 16:return B.ed(A.A,B.dd(f,t),0.5+t*0.5,u,u)
case 7:return B.ed(A.A,B.dd(f,t),1.4-t*0.4,u,u)
case 8:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fB((1-t)*1.2)
return B.ft(A.A,B.dd(f,t),u,w,!0)
case 9:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.k_((1-t)*1.2)
return B.ft(A.A,B.dd(f,t),u,w,!0)
case 10:case 19:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.mM((1-t)*0.8)
v=0.6+t*0.4
w.jI(v,v,v,1)
return B.ft(A.A,B.dd(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dU(B.dd(f,t),new B.u((1-t)*24,0))}},
bD2(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bD2=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bV,x.w).w.a.a*0.88,300,440)
s=f===D.cm
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.h0A(f)+" Element animation preview"
s=s?Af.F7:A.vj
w=3
return B.b(C.bAa(d,s,new B.a7(t,t*0.62,B.bw(B.n(14),new C.az_(f,null),A.aq),null),r),$async$bD2)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bD2,v)},
i5B(d){var w,v,u,t,s=$.afH.W(0,d)
if(s!=null){$.afH.n(0,d,s)
return s}w=A.cG.aJ(A.a.b4(d,A.a.cJ(d,",")+1))
$.afH.n(0,d,w)
v=$.fZe=$.fZe+w.length
u=B.a3($.afH).k("cu<1>")
for(;;){if(!(v>41943040&&$.afH.a>1))break
t=new B.cu($.afH,u).gae(0)
if(!t.C())B.b8(B.fr())
v-=$.afH.W(0,t.gR(0)).length
$.fZe=v}return w},
i5i(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kW(0,d),j=B.C(k,B.a3(k).k("J.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.L)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ap(d,r,o)
m=f.$1(e)
v.push(new B.eq(n,l,l,A.cO,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.St(s,A.u))
v.push(new B.eq(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.St(t,A.u))
v.push(new B.eq(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.St(u,A.cv))
v.push(new B.eq(n,l,l,A.cO,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b4(d,r)
v.push(B.d7(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a23(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.k1(e))
return m
case"rounded":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
w=e.gdB()*0.18
m.F(new B.iL(B.bx(e,new B.aT(w,w))))
return m
case"triangle":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.b5(e.gbP().a,e.b))
w=e.d
m.F(new B.ap(e.c,w))
m.F(new B.ap(e.a,w))
m.F(new B.bF())
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
v.e=null}}v.F(new B.bF())
return v
case"diamond":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.b5(e.gbP().a,e.b))
m.F(new B.ap(e.c,e.gbP().b))
m.F(new B.ap(e.gbP().a,e.d))
m.F(new B.ap(e.a,e.gbP().b))
m.F(new B.bF())
return m
case"arch":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
w=e.a
u=e.d
m.F(new B.b5(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.F(new B.ap(w,p))
m.b9s(new B.u(t,p),new B.aT(s,s))
m.F(new B.ap(t,u))
m.F(new B.bF())
return m
default:m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.o2(e))
return m}},
fAl(d,e,f){return B.cq(new C.fAm(D.eOl.t(0,d),d,f,e))},
b0x:function b0x(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cdo:function cdo(d){this.a=d},
cdn:function cdn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cdm:function cdm(){},
b0u:function b0u(d,e){this.b=d
this.a=e},
fCM:function fCM(d){this.a=d},
fCL:function fCL(d,e){this.a=d
this.b=e},
fn3:function fn3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fn1:function fn1(d){this.a=d},
fn2:function fn2(d,e){this.a=d
this.b=e},
aIg:function aIg(d,e){this.c=d
this.a=e},
btR:function btR(d,e){var _=this
_.d=$
_.bt$=d
_.a8$=e
_.c=_.a=null},
f50:function f50(d,e,f){this.a=d
this.b=e
this.c=f},
aIT:function aIT(d,e){this.b=d
this.a=e},
UG:function UG(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
biR:function biR(d,e){var _=this
_.d=$
_.bt$=d
_.a8$=e
_.c=_.a=null},
dRU:function dRU(d){this.a=d},
dRT:function dRT(d){this.a=d},
dRS:function dRS(d){this.a=d},
Iw:function Iw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cdg:function cdg(d){this.a=d},
cdf:function cdf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
az_:function az_(d,e){this.c=d
this.a=e},
bdk:function bdk(){this.d=0
this.c=this.a=null},
d4r:function d4r(d){this.a=d},
d4q:function d4q(d){this.a=d},
a7p:function a7p(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjv:function bjv(d,e){var _=this
_.d=null
_.bt$=d
_.a8$=e
_.c=_.a=null},
edz:function edz(d,e,f){this.a=d
this.b=e
this.c=f},
aZt:function aZt(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
beu:function beu(d,e,f){this.b=d
this.c=e
this.a=f},
bpr:function bpr(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eV8:function eV8(){},
fAm:function fAm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqr:function bqr(d,e,f){this.b=d
this.c=e
this.a=f},
aKT:function aKT(){},
aLo:function aLo(){},
aML:function aML(){},
fDM(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fDM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.x5.c7().LP(D.dcO,A.tP,!0),$async$fDM)
case 3:r=e
if(r==null||J.cn(r.a)){u=null
w=1
break}t=J.fp(r.a)
s=t.c
if(s==null)throw B.V("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.V("That file is too big. Use a file under 8 MB.")
u=C.i5c(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fDM,v)},
i5c(d,e){var w,v=d.toLowerCase()
if(A.a.cb(v,".pdf"))return new C.a7I(d,new B.a_H(A.cS.gcz().aJ(e),"application/pdf"),"")
if(A.a.cb(v,".docx")){w=C.hYf(e)
if(A.a.i(w).length===0)throw B.V("No readable words were found in that Word file.")
return new C.a7I(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.c9.KC(0,e,!0)
if(A.a.i(w).length===0)throw B.V("That file is empty.")
return new C.a7I(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
hYf(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cwt().cJh(B.rc(d,A.hX,o,o),o,o,!1).cL_(0,"word/document.xml")
if(n==null)return""
w=n.cT0()
v=A.c9.KC(0,w==null?$.hoN():w,!0).split("</w:p>")
u=new B.fe("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kW(0,r)
p=A.a.i(B.cF(q,new C.fpX(),B.a3(q).k("J.E"),t).h_(0))
if(p.length!==0){q=B.aK(p,"&lt;","<")
q=B.aK(q,"&gt;",">")
q=B.aK(q,"&quot;",'"')
q=B.aK(q,"&apos;","'")
q=B.aK(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a7I:function a7I(d,e,f){this.a=d
this.b=e
this.c=f},
fpX:function fpX(){},
hFN(d,e,f,g,h,i,j,k,l){return new C.NH(l,e,d,g,f,i,h,j,k,null)},
NH:function NH(d,e,f,g,h,i,j,k,l,m){var _=this
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
aDQ:function aDQ(d,e,f,g,h,i,j,k,l){var _=this
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
_.a8$=l
_.c=_.a=null},
eww:function eww(d){this.a=d},
ewu:function ewu(){},
ewv:function ewv(d){this.a=d},
esU:function esU(){},
esV:function esV(){},
esW:function esW(d,e){this.a=d
this.b=e},
euu:function euu(d){this.a=d},
eui:function eui(){},
euj:function euj(){},
esh:function esh(){},
evC:function evC(d){this.a=d},
ews:function ews(d,e){this.a=d
this.b=e},
eus:function eus(d,e){this.a=d
this.b=e},
ewf:function ewf(d){this.a=d},
ewg:function ewg(){},
ewh:function ewh(){},
ewi:function ewi(d){this.a=d},
ewj:function ewj(){},
erG:function erG(d){this.a=d},
ewt:function ewt(){},
etB:function etB(d,e){this.a=d
this.b=e},
erE:function erE(d){this.a=d},
erF:function erF(d){this.a=d},
etY:function etY(d){this.a=d},
etZ:function etZ(d,e,f){this.a=d
this.b=e
this.c=f},
eu_:function eu_(d){this.a=d},
etA:function etA(){},
etz:function etz(d){this.a=d},
etx:function etx(){},
etw:function etw(d){this.a=d},
ety:function ety(){},
esQ:function esQ(d){this.a=d},
esR:function esR(d){this.a=d},
etH:function etH(d){this.a=d},
etC:function etC(d){this.a=d},
etD:function etD(d){this.a=d},
etE:function etE(d){this.a=d},
etF:function etF(d){this.a=d},
etG:function etG(d){this.a=d},
etI:function etI(d,e){this.a=d
this.b=e},
erI:function erI(){},
erJ:function erJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
etT:function etT(){},
etU:function etU(d,e){this.a=d
this.b=e},
etR:function etR(d,e,f){this.a=d
this.b=e
this.c=f},
etS:function etS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
etL:function etL(d,e,f){this.a=d
this.b=e
this.c=f},
etM:function etM(d,e,f){this.a=d
this.b=e
this.c=f},
etN:function etN(d){this.a=d},
etO:function etO(d,e){this.a=d
this.b=e},
etP:function etP(d,e){this.a=d
this.b=e},
etQ:function etQ(d,e){this.a=d
this.b=e},
etK:function etK(d,e){this.a=d
this.b=e},
etW:function etW(d){this.a=d},
etX:function etX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
etV:function etV(d){this.a=d},
eud:function eud(){},
eue:function eue(){},
euf:function euf(){},
eug:function eug(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eua:function eua(d){this.a=d},
euc:function euc(){},
eub:function eub(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eu8:function eu8(d,e,f){this.a=d
this.b=e
this.c=f},
eu9:function eu9(d,e){this.a=d
this.b=e},
euh:function euh(){},
etJ:function etJ(d,e){this.a=d
this.b=e},
erZ:function erZ(){},
es_:function es_(d,e,f){this.a=d
this.b=e
this.c=f},
es0:function es0(d){this.a=d},
es1:function es1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
erY:function erY(d){this.a=d},
eun:function eun(d){this.a=d},
eum:function eum(d,e){this.a=d
this.b=e},
eul:function eul(d,e){this.a=d
this.b=e},
euk:function euk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euo:function euo(d,e){this.a=d
this.b=e},
eqD:function eqD(d,e){this.a=d
this.b=e},
erX:function erX(d,e){this.a=d
this.b=e},
erV:function erV(d){this.a=d},
euw:function euw(d,e,f){this.a=d
this.b=e
this.c=f},
erR:function erR(d,e){this.a=d
this.b=e},
erQ:function erQ(d){this.a=d},
euv:function euv(d,e,f){this.a=d
this.b=e
this.c=f},
erH:function erH(d){this.a=d},
esi:function esi(){},
ewd:function ewd(d,e){this.a=d
this.b=e},
ewe:function ewe(d,e,f){this.a=d
this.b=e
this.c=f},
evD:function evD(d,e,f){this.a=d
this.b=e
this.c=f},
eqE:function eqE(d){this.a=d},
eqB:function eqB(d,e){this.a=d
this.b=e},
eqr:function eqr(d,e){this.a=d
this.b=e},
eqo:function eqo(d){this.a=d},
eqn:function eqn(d,e){this.a=d
this.b=e},
eqp:function eqp(d,e){this.a=d
this.b=e},
erT:function erT(d){this.a=d},
erU:function erU(d,e){this.a=d
this.b=e},
erS:function erS(d){this.a=d},
er5:function er5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
er6:function er6(d,e){this.a=d
this.b=e},
era:function era(d,e){this.a=d
this.b=e},
erb:function erb(d){this.a=d},
er8:function er8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
er9:function er9(d){this.a=d},
er7:function er7(){},
er4:function er4(d,e,f){this.a=d
this.b=e
this.c=f},
eu7:function eu7(d,e){this.a=d
this.b=e},
ewm:function ewm(d){this.a=d},
ewn:function ewn(d,e){this.a=d
this.b=e},
ewo:function ewo(d){this.a=d},
ewp:function ewp(d,e,f){this.a=d
this.b=e
this.c=f},
ewl:function ewl(d){this.a=d},
evT:function evT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
evS:function evS(d,e,f){this.a=d
this.b=e
this.c=f},
evR:function evR(){},
evQ:function evQ(d,e,f){this.a=d
this.b=e
this.c=f},
evP:function evP(d,e){this.a=d
this.b=e},
evM:function evM(d,e,f){this.a=d
this.b=e
this.c=f},
evK:function evK(d){this.a=d},
evL:function evL(d){this.a=d},
evO:function evO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
evN:function evN(d){this.a=d},
esM:function esM(d,e){this.a=d
this.b=e},
esL:function esL(d,e){this.a=d
this.b=e},
evE:function evE(){},
ewc:function ewc(d,e){this.a=d
this.b=e},
ewa:function ewa(d){this.a=d},
ewb:function ewb(d){this.a=d},
eqw:function eqw(d,e){this.a=d
this.b=e},
equ:function equ(d){this.a=d},
eqv:function eqv(d){this.a=d},
eqx:function eqx(d,e){this.a=d
this.b=e},
eqy:function eqy(d,e,f){this.a=d
this.b=e
this.c=f},
eqC:function eqC(d,e){this.a=d
this.b=e},
eqt:function eqt(d,e,f){this.a=d
this.b=e
this.c=f},
eqs:function eqs(d){this.a=d},
eut:function eut(d,e,f){this.a=d
this.b=e
this.c=f},
ewk:function ewk(d,e,f){this.a=d
this.b=e
this.c=f},
esP:function esP(d,e,f){this.a=d
this.b=e
this.c=f},
esO:function esO(){},
ere:function ere(d,e,f){this.a=d
this.b=e
this.c=f},
erf:function erf(d){this.a=d},
eqq:function eqq(d,e){this.a=d
this.b=e},
esg:function esg(d,e){this.a=d
this.b=e},
eqz:function eqz(d,e){this.a=d
this.b=e},
eqI:function eqI(d){this.a=d},
eqJ:function eqJ(d,e){this.a=d
this.b=e},
eqK:function eqK(d,e){this.a=d
this.b=e},
eqH:function eqH(d){this.a=d},
eqV:function eqV(d,e){this.a=d
this.b=e},
eqG:function eqG(d){this.a=d},
eqY:function eqY(d){this.a=d},
eqZ:function eqZ(d){this.a=d},
er_:function er_(d){this.a=d},
er0:function er0(d){this.a=d},
er1:function er1(d){this.a=d},
er2:function er2(){},
er3:function er3(){},
eqL:function eqL(d){this.a=d},
eqM:function eqM(d){this.a=d},
eqN:function eqN(d){this.a=d},
eqO:function eqO(d){this.a=d},
eqP:function eqP(d){this.a=d},
eqQ:function eqQ(d){this.a=d},
eqR:function eqR(d){this.a=d},
eqS:function eqS(d){this.a=d},
eqT:function eqT(d){this.a=d},
eqU:function eqU(d){this.a=d},
eqW:function eqW(d){this.a=d},
eqX:function eqX(d,e){this.a=d
this.b=e},
esf:function esf(d,e,f){this.a=d
this.b=e
this.c=f},
ese:function ese(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esd:function esd(d,e,f){this.a=d
this.b=e
this.c=f},
esc:function esc(d,e){this.a=d
this.b=e},
eqA:function eqA(d,e){this.a=d
this.b=e},
eri:function eri(d){this.a=d},
erh:function erh(d){this.a=d},
erg:function erg(d,e){this.a=d
this.b=e},
erj:function erj(d){this.a=d},
erk:function erk(d){this.a=d},
erl:function erl(d,e){this.a=d
this.b=e},
erW:function erW(d){this.a=d},
eu6:function eu6(d,e){this.a=d
this.b=e},
eu5:function eu5(d,e){this.a=d
this.b=e},
eu4:function eu4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eu2:function eu2(d){this.a=d},
eu3:function eu3(d,e){this.a=d
this.b=e},
eu0:function eu0(){},
eu1:function eu1(){},
evF:function evF(){},
evG:function evG(d,e){this.a=d
this.b=e},
evH:function evH(){},
evI:function evI(d){this.a=d},
evJ:function evJ(d,e){this.a=d
this.b=e},
eqF:function eqF(d,e){this.a=d
this.b=e},
erK:function erK(){},
erL:function erL(){},
erM:function erM(){},
erP:function erP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
erO:function erO(d,e){this.a=d
this.b=e},
erN:function erN(d,e,f){this.a=d
this.b=e
this.c=f},
etf:function etf(d){this.a=d},
ete:function ete(){},
etg:function etg(d,e){this.a=d
this.b=e},
eth:function eth(d,e){this.a=d
this.b=e},
etd:function etd(d){this.a=d},
eti:function eti(d,e){this.a=d
this.b=e},
etc:function etc(d){this.a=d},
etj:function etj(d,e){this.a=d
this.b=e},
etb:function etb(d){this.a=d},
etk:function etk(d,e){this.a=d
this.b=e},
eta:function eta(d){this.a=d},
etl:function etl(d,e){this.a=d
this.b=e},
et9:function et9(d,e){this.a=d
this.b=e},
etm:function etm(d,e){this.a=d
this.b=e},
et8:function et8(d){this.a=d},
etn:function etn(d,e){this.a=d
this.b=e},
et7:function et7(d){this.a=d},
et0:function et0(d,e){this.a=d
this.b=e},
et1:function et1(d){this.a=d},
et2:function et2(d){this.a=d},
et_:function et_(d){this.a=d},
et3:function et3(d,e){this.a=d
this.b=e},
esZ:function esZ(d){this.a=d},
et4:function et4(d,e){this.a=d
this.b=e},
esY:function esY(d){this.a=d},
et5:function et5(d,e){this.a=d
this.b=e},
esX:function esX(d){this.a=d},
et6:function et6(d){this.a=d},
es8:function es8(d){this.a=d},
es9:function es9(d){this.a=d},
esb:function esb(d){this.a=d},
es3:function es3(d){this.a=d},
es2:function es2(d,e){this.a=d
this.b=e},
es4:function es4(d,e){this.a=d
this.b=e},
es5:function es5(d){this.a=d},
es6:function es6(d){this.a=d},
es7:function es7(d,e){this.a=d
this.b=e},
esa:function esa(d){this.a=d},
ewq:function ewq(d){this.a=d},
ewr:function ewr(d){this.a=d},
etq:function etq(d,e){this.a=d
this.b=e},
etp:function etp(d,e){this.a=d
this.b=e},
eto:function eto(d,e){this.a=d
this.b=e},
etr:function etr(d){this.a=d},
ets:function ets(d){this.a=d},
euP:function euP(d,e){this.a=d
this.b=e},
euQ:function euQ(d){this.a=d},
euR:function euR(d){this.a=d},
ev1:function ev1(d){this.a=d},
evc:function evc(d){this.a=d},
evn:function evn(d){this.a=d},
evu:function evu(d){this.a=d},
evv:function evv(d){this.a=d},
evw:function evw(d){this.a=d},
evx:function evx(d){this.a=d},
evy:function evy(d,e){this.a=d
this.b=e},
euS:function euS(d){this.a=d},
euT:function euT(d){this.a=d},
euU:function euU(d){this.a=d},
euV:function euV(d){this.a=d},
euW:function euW(d){this.a=d},
euX:function euX(d){this.a=d},
euY:function euY(d){this.a=d},
euZ:function euZ(d){this.a=d},
ev_:function ev_(d){this.a=d},
ev0:function ev0(d){this.a=d},
ev2:function ev2(d){this.a=d},
ev3:function ev3(d){this.a=d},
ev4:function ev4(d){this.a=d},
ev5:function ev5(d){this.a=d},
ev6:function ev6(d){this.a=d},
ev7:function ev7(d){this.a=d},
ev8:function ev8(d){this.a=d},
ev9:function ev9(d){this.a=d},
eva:function eva(d){this.a=d},
euF:function euF(d){this.a=d},
evb:function evb(d){this.a=d},
euN:function euN(d){this.a=d},
evd:function evd(d){this.a=d},
euM:function euM(d,e){this.a=d
this.b=e},
eve:function eve(d,e){this.a=d
this.b=e},
evf:function evf(d,e){this.a=d
this.b=e},
euL:function euL(d,e,f){this.a=d
this.b=e
this.c=f},
euB:function euB(d,e){this.a=d
this.b=e},
euO:function euO(d){this.a=d},
evz:function evz(d,e){this.a=d
this.b=e},
evB:function evB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
evA:function evA(d,e){this.a=d
this.b=e},
evg:function evg(d,e,f){this.a=d
this.b=e
this.c=f},
euK:function euK(d,e,f){this.a=d
this.b=e
this.c=f},
euA:function euA(d,e,f){this.a=d
this.b=e
this.c=f},
euy:function euy(d,e){this.a=d
this.b=e},
evh:function evh(d,e){this.a=d
this.b=e},
euJ:function euJ(d,e){this.a=d
this.b=e},
euz:function euz(d,e){this.a=d
this.b=e},
eux:function eux(d,e){this.a=d
this.b=e},
evi:function evi(d){this.a=d},
euI:function euI(d){this.a=d},
evj:function evj(d){this.a=d},
evk:function evk(d){this.a=d},
evl:function evl(d){this.a=d},
evm:function evm(d){this.a=d},
euH:function euH(d){this.a=d},
evo:function evo(d){this.a=d},
evp:function evp(d){this.a=d},
evq:function evq(d,e){this.a=d
this.b=e},
euG:function euG(d){this.a=d},
evr:function evr(d,e){this.a=d
this.b=e},
euE:function euE(d){this.a=d},
evs:function evs(d,e){this.a=d
this.b=e},
euD:function euD(d){this.a=d},
evt:function evt(d,e){this.a=d
this.b=e},
euC:function euC(d){this.a=d},
erd:function erd(d,e,f){this.a=d
this.b=e
this.c=f},
erc:function erc(d,e){this.a=d
this.b=e},
evW:function evW(d,e){this.a=d
this.b=e},
evV:function evV(d,e){this.a=d
this.b=e},
evX:function evX(d,e){this.a=d
this.b=e},
evU:function evU(d,e){this.a=d
this.b=e},
esl:function esl(d,e){this.a=d
this.b=e},
esk:function esk(d){this.a=d},
esm:function esm(d,e){this.a=d
this.b=e},
esj:function esj(d){this.a=d},
esT:function esT(){},
esS:function esS(){},
ew8:function ew8(d){this.a=d},
ew7:function ew7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ew6:function ew6(d,e){this.a=d
this.b=e},
ew1:function ew1(d,e){this.a=d
this.b=e},
ew5:function ew5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ew2:function ew2(d,e){this.a=d
this.b=e},
evY:function evY(d){this.a=d},
evZ:function evZ(d){this.a=d},
ew_:function ew_(d){this.a=d},
ew0:function ew0(d){this.a=d},
ew3:function ew3(d,e){this.a=d
this.b=e},
ew4:function ew4(d,e){this.a=d
this.b=e},
ew9:function ew9(d){this.a=d},
erD:function erD(d){this.a=d},
erC:function erC(d,e,f){this.a=d
this.b=e
this.c=f},
erB:function erB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erq:function erq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
err:function err(d,e){this.a=d
this.b=e},
ers:function ers(d,e){this.a=d
this.b=e},
ert:function ert(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erp:function erp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eru:function eru(d,e){this.a=d
this.b=e},
erw:function erw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erv:function erv(d,e){this.a=d
this.b=e},
erx:function erx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ero:function ero(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ery:function ery(d,e){this.a=d
this.b=e},
ern:function ern(d,e){this.a=d
this.b=e},
erz:function erz(d,e){this.a=d
this.b=e},
erm:function erm(d){this.a=d},
erA:function erA(d,e){this.a=d
this.b=e},
etu:function etu(d){this.a=d},
ett:function ett(d){this.a=d},
etv:function etv(d,e){this.a=d
this.b=e},
esz:function esz(d,e){this.a=d
this.b=e},
esA:function esA(d,e){this.a=d
this.b=e},
esy:function esy(d,e){this.a=d
this.b=e},
esB:function esB(d,e){this.a=d
this.b=e},
esx:function esx(d,e){this.a=d
this.b=e},
esC:function esC(d,e){this.a=d
this.b=e},
esw:function esw(d,e){this.a=d
this.b=e},
esD:function esD(d,e){this.a=d
this.b=e},
esv:function esv(d,e){this.a=d
this.b=e},
esE:function esE(d,e){this.a=d
this.b=e},
esu:function esu(d,e){this.a=d
this.b=e},
esF:function esF(d,e,f){this.a=d
this.b=e
this.c=f},
est:function est(d,e){this.a=d
this.b=e},
esG:function esG(d,e,f){this.a=d
this.b=e
this.c=f},
ess:function ess(d,e){this.a=d
this.b=e},
esH:function esH(d,e){this.a=d
this.b=e},
esr:function esr(d,e,f){this.a=d
this.b=e
this.c=f},
eso:function eso(d,e){this.a=d
this.b=e},
esI:function esI(d,e){this.a=d
this.b=e},
esq:function esq(d,e){this.a=d
this.b=e},
esJ:function esJ(d,e){this.a=d
this.b=e},
esp:function esp(d,e,f){this.a=d
this.b=e
this.c=f},
esn:function esn(d,e){this.a=d
this.b=e},
esK:function esK(d,e){this.a=d
this.b=e},
esN:function esN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqm:function eqm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eur:function eur(d,e){this.a=d
this.b=e},
eup:function eup(d){this.a=d},
euq:function euq(d,e){this.a=d
this.b=e},
aeQ:function aeQ(d,e,f){this.a=d
this.b=e
this.c=f},
aym:function aym(d,e){this.c=d
this.a=e},
bc6:function bc6(d,e){var _=this
_.e=_.d=$
_.cQ$=d
_.b3$=e
_.c=_.a=null},
d02:function d02(d){this.a=d},
d01:function d01(d){this.a=d},
bck:function bck(d,e){this.c=d
this.a=e},
d0o:function d0o(d){this.a=d},
d0p:function d0p(d){this.a=d},
Jy:function Jy(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bc5:function bc5(){this.d=!1
this.c=this.a=null},
d0_:function d0_(d){this.a=d},
d_W:function d_W(d){this.a=d},
d00:function d00(d){this.a=d},
d_V:function d_V(d){this.a=d},
d_Z:function d_Z(d){this.a=d},
d_X:function d_X(d){this.a=d},
d_Y:function d_Y(d,e){this.a=d
this.b=e},
Pm:function Pm(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a_a:function a_a(d,e,f){this.c=d
this.d=e
this.a=f},
aDT:function aDT(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bt$=e
_.a8$=f
_.c=_.a=null},
ex6:function ex6(){},
ewX:function ewX(d){this.a=d},
ex5:function ex5(d){this.a=d},
ewY:function ewY(d){this.a=d},
ewZ:function ewZ(d){this.a=d},
ewT:function ewT(d){this.a=d},
ewU:function ewU(d,e){this.a=d
this.b=e},
ewV:function ewV(d){this.a=d},
ewW:function ewW(d,e,f){this.a=d
this.b=e
this.c=f},
ex3:function ex3(){},
ex4:function ex4(d){this.a=d},
ex_:function ex_(d){this.a=d},
ex0:function ex0(d){this.a=d},
ex1:function ex1(d){this.a=d},
ex2:function ex2(d){this.a=d},
ex7:function ex7(d,e,f){this.a=d
this.b=e
this.c=f},
ex9:function ex9(d,e){this.a=d
this.b=e},
ex8:function ex8(d){this.a=d},
JF:function JF(d,e){this.c=d
this.a=e},
bqW:function bqW(d,e){this.b=d
this.a=e},
bgZ:function bgZ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bgY:function bgY(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aJA:function aJA(){},
aLC:function aLC(){},
bwF:function bwF(){},
aLD:function aLD(){},
fFG(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fFG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.x5.c7().LP(B.a(["pdf"],x.s),A.tP,!0),$async$fFG)
case 3:q=e
if(q==null||J.cn(q.a)){u=null
w=1
break}t=J.fp(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.boc(s,"data:application/pdf;base64,"+A.cS.gcz().aJ(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fFG,v)},
i5N(d){var w,v,u,t,s,r
try{w=B.js(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cF(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c8(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).kW(0,w).gM(0)
if(t>0){s=J.aQf(t,1,200)
return s}}catch(r){}return 1},
fFx(d){return C.i5M(d)},
i5M(d){var w=0,v=B.j(x.T),u
var $async$fFx=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fFx,v)},
bCe(d,e,f,g){return C.i5W(d,e,f,g)},
i5W(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bCe=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e9(b6,x.co).gae(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.hn8(b9,new B.ar(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.lR(a9),b0)
b0=n
a9=k.b
n=Math.min(B.lR(b0),a9)
a9=m
b0=k.a
m=Math.max(B.lR(a9),b0)
b0=l
a9=k.b
l=Math.max(B.lR(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.V(800*(i/j)),180,420)
$.W()
g=new B.qY()
f=B.Db(g,null)
a7=B.N()
a7.r=A.qO.gp(0)
f.aZ(new B.a9(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.N()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bQ
b1.e=A.fC
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
b2.delete()}a0=a2}a3=g.pE()
w=7
return B.b(a3.zh(800,h),$async$bCe)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.ht(A.fY),$async$bCe)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.eT(A.dD.gaM(a5))
a7=A.cS.gcz().aJ(a7)
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
return B.i($async$bCe,v)},
aPs(d,e,f){return C.i5K(d,e,f)},
i5K(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aPs=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.az:e
r.c=f==null?5.2:f
w=3
return B.b(B.ahg(d,e,f,new C.fFv(r,q),q,"Sign document"),$async$aPs)
case 3:if(!new B.e9(q,x.co).gae(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bCe(q,t,r.b,r.c),$async$aPs)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b0B(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPs,v)},
i5U(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hgk(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hgk(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b4(A.a.aT(A.o.fU(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.ab(q.c*100,2)+"%;top:"+A.k.ab(q.d*100,2)+"%;width:"+A.k.ab(q.e*100,2)+"%;height:"+A.k.ab(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b4(A.a.aT(A.o.fU(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d+='<div class="txt" style="font-size:'+B.t(p)+"px;color:#"+o+'">'+B.aK(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lv&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aK(p,"&",h)
p=B.aK(p,"<",g)
p=B.aK(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aK(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hfX(q.ay)+";border:2px solid "+C.hfX(q.ch)+'"></div>'
break
case 5:l=C.h_r(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aK(n,'"',e)+"</div>")
p=p?null:l.gajf()
if(p==null)p=A.awU
n=B.U(p)
k=n.k("nl<1>")
j=new B.nl(p,0,8,k)
j.zG(p,0,8,n.c)
j=new B.bS(j,j.gM(0),k.k("bS<ak.E>"))
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
hfX(d){var w=A.o.aA(d,24)
return"rgba("+(A.o.aA(d,16)&255)+","+(A.o.aA(d,8)&255)+","+(d&255)+","+A.k.ab((w&255)/255,3)+")"},
hgk(d){var w=B.aK(d,"&","&amp;")
w=B.aK(w,"<","&lt;")
w=B.aK(w,">","&gt;")
return B.aK(w,'"',"&quot;")},
bCc(d,e){var w=0,v=B.j(x.H)
var $async$bCc=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cb(null,null,!0,null,new C.fFE(e,C.i5U(e),d),d,null,!0,!0,x.H),$async$bCc)
case 2:return B.h(null,v)}})
return B.i($async$bCc,v)},
bCd(){var w=0,v=B.j(x.T),u,t,s
var $async$bCd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gs(92,2400),$async$bCd)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fFx(s),$async$bCd)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCd,v)},
aPt(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aPt=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.h0F(d),$async$aPt)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aK(s,r,"_"))
u=Y.fI1(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPt,v)},
haf(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b0B:function b0B(d,e,f){this.a=d
this.b=e
this.c=f},
fFv:function fFv(d,e){this.a=d
this.b=e},
fFE:function fFE(d,e,f){this.a=d
this.b=e
this.c=f},
fFB:function fFB(d){this.a=d},
fFC:function fFC(d,e,f){this.a=d
this.b=e
this.c=f},
fFD:function fFD(d,e,f){this.a=d
this.b=e
this.c=f},
i5L(d){return C.kw(d.w)},
i5S(d){var w,v,u,t
if(d.length===0||!A.d.d7(d,C.i7C()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yt(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aK(w.toUpperCase(),v,"")
w=$.hsO()
if(w.b.test(u))return u
return null},
hna(d,e,f){var w,v,u=C.hBp(d),t=$.ps()
for(w=0;w<80;++w){v=u+A.a.aT(A.o.u(t.aB(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
i5Y(d){var w,v,u,t,s=B.aX(x.N)
for(w=J.aV(d.a),v=new B.f_(w,d.b);v.C();){u=w.gR(w).y
t=C.yt(u==null?"":u)
if(t!=null)s.L(0,t)}return s},
fFt(d,e){var w,v=d.y,u=C.yt(v==null?"":v)
if(u!=null)return d.y=u
w=C.i5Y(new B.a_(e,new C.fFu(d),B.U(e).k("a_<1>")))
v=d.x
return d.y=C.hna(v==null?"":v,null,w)},
i5X(d){var w,v
if(d.length!==1)return null
w=A.d.gI(d)
if(!C.kw(w.w))return null
v=w.y
return C.yt(v==null?"":v)},
hFP(){var w,v=$.ps(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"SL"+A.d.h_(u)},
VH(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$VH=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$VH)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f5("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bH),$async$VH)
case 8:r=e
if(r==null){u=B.T(x.N,x.z)
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
return B.i($async$VH,v)},
VI(d){return C.hFQ(d)},
hFQ(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$VI=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$VI)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hE("ngmy_slides_transfer_qr_stashes_v1",B.F(["stashes",d,"savedAt",new B.S(Date.now(),0,!1).a7().ac()],x.N,x.z),!1,!1,A.cI,null),$async$VI)
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
return B.i($async$VI,v)},
a7K(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7K=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$a7K)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.VH(),$async$a7K)
case 4:s=a6
r=C.yt(a2==null?"":a2)
if(r==null)r=a3!=null?C.hna(a3,null,A.Iv):null
q=x.N
p=B.aX(q)
for(o=J.dl(s),n=J.aV(o.gi6(s)),m=x.f;n.C();){l=n.gR(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.yt(J.k(k==null?"":k))
if(j!=null)p.L(0,j)}n=o.gdL(s),n=n.gae(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gR(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a2(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dJ.aJ(t)
g.n(0,"payload",A.cS.gcz().aJ(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.S(Date.now(),0,!1).a7().ac())
if(D.SR.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yt(J.k(q==null?"":q))
if(f==null)f=C.hak(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.VI(s),$async$a7K)
case 7:u=new B.aFj(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hFP()
n=r==null
d=n?C.hak(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dJ.aJ(t)
q.n(0,"payload",A.cS.gcz().aJ(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.S(Date.now(),0,!1).a7().ac())
if(D.SR.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.VI(s),$async$a7K)
case 8:u=new B.aFj(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7K,v)},
hak(d){var w,v,u=$.ps()
for(w=0;w<200;++w){v="SL"+A.a.aT(A.o.u(u.aB(1000)),3,"0")
if(d.L(0,v))return v}return"SL"+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
aqL(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aqL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$aqL)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.VH(),$async$aqL)
case 6:t=f
s=J.a5(t)
r=s.gM(t)
s.bp(t,new C.cdO(q))
w=s.gM(t)!==r?7:8
break
case 7:w=9
return B.b(C.VI(t),$async$aqL)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$aqL,v)},
aqK(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$aqK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yt(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$aqK)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.VH(),$async$aqK)
case 6:t=o.jy(f),t=t.gae(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gR(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.yt(J.k(q==null?"":q))===p){u=C.a7J(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aqK,v)},
a7J(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a7J=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$a7J)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.VH(),$async$a7J)
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
try{s=A.c9.ca(0,A.cG.aJ(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.SR.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.A(l.h(n,"sharedByAdmin"),!0))try{r=A.R.aI(0,s,null)
if(m.b(r)){q=B.a2(r,x.N,x.z)
J.aF(q,"sharedByAdmin",!0)
s=A.R.ao(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dW(B.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.S(Date.now(),0,!1).a7().ac())
o.n(p,g,l)}w=7
return B.b(C.VI(p),$async$a7J)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7J,v)},
i5R(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.S(Date.now(),0,!1).a7().ac())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("M<1,a4<m,@>>")
w=B.C(new B.M(d,new C.fFA(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fFI(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.S(Date.now(),0,!1).a7().ac())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ag())
return A.R.ao(w,null)}return A.R.ao(C.i5R(d==null?B.a([],x.D):d,f,g),null)},
fFH(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fFH=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a7K(h,d,e,f,g),$async$fFH)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yt(e==null?"":e)
u=new B.aF6(s,t)
w=1
break}t=A.dJ.aJ(h)
t=A.ki.gcz().aJ(t)
u=new B.aF6(C.yt(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fFH,v)},
h0H(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d0(q,"NGMYSLIDESYNC2|"))return!0
if(J.d0(q,"NGMYSLIDECODE|"))return!0
if(J.d0(q,"NGMY_SL:"))return!0
if(J.f1(q,s)||J.f1(q,r))return!0
if(J.d0(q,"{"))try{w=A.R.aI(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.A(v,s)||J.A(v,r)
return u}}catch(t){}return!1},
i5V(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.h0H(v))return v
u=A.a.cJ(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b4(v,u))
if(C.h0H(t))return t}s=A.a.cJ(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b4(v,s))
if(C.h0H(t))return t}}return null},
fFw(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d0(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d0(t,"NGMY_SL:"))w=v.a(A.R.aI(0,A.c9.ca(0,A.cG.aJ(J.mH(t,8))),null))
else w=v.a(A.R.aI(0,t,null))
v=C.hPA(w)
return v}catch(u){v=B.a([],x.D)
return v}},
ah0(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$ah0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.aqK(t[1]),$async$ah0)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fFw(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yt(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.aqK(r),$async$ah0)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fFw(s)
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
return B.b(C.a7J(t[1]),$async$ah0)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fFw(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fFw(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ah0,v)},
hPA(d){var w,v,u,t=J.a5(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.A(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.SR.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.h0E(C.VD(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.da(u,x.f)
t=B.cF(t,new C.fd9(w),t.$ti.k("J.E"),x.I)
t=B.C(t,B.a3(t).k("J.E"))
return t}return B.a([],x.D)},
h0E(d,e){var w,v,u,t,s,r,q,p,o=d.ag()
o.n(0,"id",C.cD())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aV(v),t=x.f;u.C();){s=u.gR(u)
if(t.b(s)){r=Date.now()
q=$.j1
$.j1=q+1
J.aF(s,"id",""+1000*r+"_"+q)}}p=C.VD(B.a2(o,x.N,x.z))
if(e&&C.kw(p.w))p.Q=new B.S(Date.now(),0,!1).a7().bR(144e8).ac()
return p},
bBY(){var w=0,v=B.j(x.aT),u,t,s
var $async$bBY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Gr(),$async$bBY)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.ah0(s),$async$bBY)
case 4:t=e
u=J.cn(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBY,v)},
fOl(d){var w=0,v=B.j(x.T),u,t
var $async$fOl=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hT(D.Wz,!0,"Dismiss",d,new C.fOm(),new C.fOn(),A.F5,!0,x.N),$async$fOl)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.J(x.q).f.U(D.eTU)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fOl,v)},
i9J(d,e,f,g,h){return B.a6(d,!1).cl(B.e8(new C.fOo(h,e,g,f),!0,null,x.H))},
fFu:function fFu(d){this.a=d},
cdO:function cdO(d){this.a=d},
fFA:function fFA(){},
fd9:function fd9(d){this.a=d},
fOm:function fOm(){},
fOn:function fOn(){},
fOo:function fOo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VF:function VF(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDR:function aDR(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
ewD:function ewD(){},
ewz:function ewz(d,e){this.a=d
this.b=e},
ewC:function ewC(d,e){this.a=d
this.b=e},
ewA:function ewA(d){this.a=d},
ewB:function ewB(d){this.a=d},
ewE:function ewE(d){this.a=d},
ewF:function ewF(d){this.a=d},
ewI:function ewI(d){this.a=d},
ewJ:function ewJ(d){this.a=d},
ewH:function ewH(d){this.a=d},
ewK:function ewK(d){this.a=d},
ewG:function ewG(d){this.a=d},
ewL:function ewL(d,e){this.a=d
this.b=e},
ewy:function ewy(d,e){this.a=d
this.b=e},
ewx:function ewx(d,e){this.a=d
this.b=e},
VG:function VG(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjR:function bjR(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
ewM:function ewM(d,e){this.a=d
this.b=e},
ewN:function ewN(d){this.a=d},
ewO:function ewO(){},
ewP:function ewP(d){this.a=d},
ewQ:function ewQ(d,e){this.a=d
this.b=e},
aDO:function aDO(d){this.a=d},
aDP:function aDP(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eqg:function eqg(d){this.a=d},
eqf:function eqf(){},
eqh:function eqh(d){this.a=d},
eqc:function eqc(d){this.a=d},
eqb:function eqb(){},
eqd:function eqd(d){this.a=d},
eqe:function eqe(d){this.a=d},
bub:function bub(){},
aqM:function aqM(d){this.a=d},
aDS:function aDS(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
ewS:function ewS(d){this.a=d},
ewR:function ewR(d){this.a=d},
hUK(){var w,v,u,t
for(v=0;v<4;++v){w=D.d1S[v]
try{if(Ac.bWr(w)){u=w
return u}}catch(t){}}return null},
QS(d,e){return C.i2C(d,e)},
i2C(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$QS=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hUK()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.oe?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.E(b4,2)
c2.b=b5-A.o.E(b5,2)
b6=B.qv(c6,!0)
b6.toString
p=B.a6(c6,!0)
b7=new B.cs(null,x.A)
b8=A.d.gI(c3)
b9=$.aw()
o=new B.eS(b8,b9)
n=new B.eS("Getting ready\u2026",b9)
m=new B.eS(0,b9)
l=B.oj(new C.fzP(c2,b7,o),!1,!1)
b6.lR(0,l)
b9=x.H
B.cb(null,A.d9,!1,null,new C.fzQ(n,m),c6,null,!0,!0,b9)
k=new C.fzU(b7)
j=new C.fzV()
i=null
t=4
b3=c2.a
h=Aj.aRK(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fR3(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ac.aWD(f,B.F(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.Hu.yk(i,"dataavailable",new C.fzR(e))
d=new B.bW(new B.bg($.bz,x.dT),x.b2)
A.Hu.yk(i,"stop",new C.fzS(d))
J.ahC(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$QS)
case 8:w=7
return B.b(c5.$1(d0),$async$QS)
case 7:a0=d0
J.fR5(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ahC(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.ahC(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$QS)
case 15:w=14
return B.b(c5.$1(d0),$async$QS)
case 14:a0=d0
case 13:J.fR5(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ahC(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.S(Date.now(),0,!1).bR(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbq())b3=b3===b8.gbq()&&0<b8.gcB()
else b3=!0
if(!b3){w=17
break}J.fR5(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.fq,null,b9),$async$QS)
case 18:w=16
break
case 17:J.ahC(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ahC(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cO(0,A.nX),$async$QS)
case 19:a5=A.d.gI(q.split(";"))
a6=B.hO(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.A(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aK(c3,b3,"_"))
c0=B.n7(a7)
c0.download=B.t(J.ad(a9)===0?"presentation":a9)+"."+B.t(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.L4(b0)
J.lX(b0)
B.bN(A.nW,new C.fzT(a7),b9)
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
J.lX(l)
if(p.py())p.eN()
c3=o
b3=$.aw()
c3.shX(b3)
J.aQj(c3,0)
c3=n
c3.shX(b3)
J.aQj(c3,0)
c3=m
c3.shX(b3)
J.aQj(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$QS,v)},
fzP:function fzP(d,e,f){this.a=d
this.b=e
this.c=f},
fzO:function fzO(){},
fzQ:function fzQ(d,e){this.a=d
this.b=e},
fzU:function fzU(d){this.a=d},
fzV:function fzV(){},
fzR:function fzR(d){this.a=d},
fzS:function fzS(d){this.a=d},
fzT:function fzT(d){this.a=d},
bun:function bun(d,e,f){this.c=d
this.d=e
this.a=f},
f7s:function f7s(){},
f7t:function f7t(){},
cea(d){var w=0,v=B.j(x.at),u,t,s
var $async$cea=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aqW(d,A.zf),$async$cea)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bD(new B.S(Date.now(),0,!1))
if(t.a<0){u=A.bx
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cea,v)},
ce9(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a7q:function a7q(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjA:function bjA(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
eeq:function eeq(d){this.a=d},
eeo:function eeo(d){this.a=d},
eep:function eep(d,e){this.a=d
this.b=e},
a8i:function a8i(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
a8j:function a8j(d,e){this.a=d
this.b=e},
b2e:function b2e(){},
cgm:function cgm(){},
cgn:function cgn(){},
cgo:function cgo(d,e,f,g,h,i,j,k,l){var _=this
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
htO(d){return new C.ahU(d)},
a2v:function a2v(){},
ahU:function ahU(d){this.a=d},
aQE:function aQE(){},
awe:function awe(d,e){this.d=d
this.b=e
this.a=null},
aS8:function aS8(d){this.b=d
this.a=null},
fuY(d,e){var w=0,v=B.j(x.H)
var $async$fuY=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.W().gxv().Lx(d,e),$async$fuY)
case 2:B.fI7()
return B.h(null,v)}})
return B.i($async$fuY,v)},
hks(d,e){return(A.rn[(d^e)&255]^A.o.aA(d,8))>>>0},
fsr(d,e,f,g,h,i){var w=C.hZY(d,A.dc,f,null,A.cX,g,h,i)
return w},
hmj(d){var w=F.hn1(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hBp(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.p2.h(0,w)
if(v!=null)return v
for(u=A.p2.gdL(A.p2),u=u.gae(u);u.C();){t=u.gR(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aK(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
hmr(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<44;++w)v+="- "+D.cNr[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bA7(d,e){return C.hWw(d,e)},
hWw(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bA7=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hO([d],"application/pdf")
n=x.z
q=B.aTN(B.a([r],x.e3),e,B.F(["type","application/pdf"],n,n))
p=B.cB(B.F(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ei(B.jZ(o,"share",[p]),x.H),$async$bA7)
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
return B.i($async$bA7,v)},
h0y(){var w=0,v=B.j(x.y),u,t,s
var $async$h0y=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fkx
s=$.bzF
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bA7(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h0y,v)},
bBt(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bBt=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fkx
l=$.bzF
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Y.hh0()?3:4
break
case 3:w=5
return B.b(C.bA7(m,k),$async$bBt)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bzG
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.n7(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.L4(q)
w=10
return B.b(B.bN(A.a1,null,x.H),$async$bBt)
case 10:J.lX(q)
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
return B.i($async$bBt,v)},
h0p(){var w=0,v=B.j(x.y),u,t,s,r
var $async$h0p=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bzG
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lz.uF(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$h0p,v)},
h0G(d,e){var w=0,v=B.j(x.H),u,t
var $async$h0G=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hO([d],"text/html"))
t.toString
u=window
u.toString
A.lz.uF(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$h0G,v)},
b1b(d,e){var w=0,v=B.j(x.y),u
var $async$b1b=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b1d(d,e),$async$b1b)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b1c(d),$async$b1b)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b1b,v)}},D,H,I,Am,A8,X,V,An,G,F,E,W,Q,Y,Z,Ao,Ap,A9,L,Aq,A_,O,A0,Aa,M,Ab,Ar,As,P,A1,At,Au,Ac,Ad,Av,Ae,Af,Ag,Aw,Ax,R,Ay,K,Az,S,T,AA,N,A2,A3,A4
J=c[1]
B=c[0]
A=c[2]
Ah=c[196]
A5=c[66]
Ai=c[49]
A6=c[161]
Aj=c[57]
U=c[211]
A7=c[52]
Ak=c[138]
Al=c[221]
C=a.updateHolder(c[4],C)
D=c[209]
H=c[91]
I=c[126]
Am=c[36]
A8=c[213]
X=c[210]
V=c[199]
An=c[120]
G=c[180]
F=c[31]
E=c[212]
W=c[122]
Q=c[140]
Y=c[29]
Z=c[168]
Ao=c[223]
Ap=c[176]
A9=c[111]
L=c[214]
Aq=c[119]
A_=c[60]
O=c[190]
A0=c[75]
Aa=c[102]
M=c[149]
Ab=c[101]
Ar=c[89]
As=c[216]
P=c[114]
A1=c[129]
At=c[87]
Au=c[124]
Ac=c[53]
Ad=c[186]
Av=c[35]
Ae=c[73]
Af=c[139]
Ag=c[220]
Aw=c[222]
Ax=c[219]
R=c[67]
Ay=c[217]
K=c[165]
Az=c[177]
S=c[47]
T=c[215]
AA=c[224]
N=c[197]
A2=c[218]
A3=c[108]
A4=c[56]
C.nS.prototype={
uZ(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.tK(t,v)
return new C.nS(t===0?!1:w,v,t)},
bKR(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.CQ()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.tK(w,u)
return new C.nS(r===0?!1:s,u,r)},
bLl(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.CQ()
w=o-d
if(w<=0)return p.a?$.h24():$.CQ()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.tK(w,u)
q=new C.nS(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aC(0,$.a2i())
return q},
dX(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.V(B.dI("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.an(e,16)
if(A.o.E(e,16)===0)return r.bKR(v)
u=w+v+1
t=new Uint16Array(u)
C.hdB(r.b,w,e,t)
w=r.a
s=C.tK(u,t)
return new C.nS(s===0?!1:w,t,s)},
ms(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.V(B.dI("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.an(e,16)
u=A.o.E(e,16)
if(u===0)return n.bLl(v)
t=w-v
if(t<=0)return n.a?$.h24():$.CQ()
s=n.b
r=new Uint16Array(t)
C.hLu(s,w,e,r)
w=n.a
q=C.tK(t,r)
p=new C.nS(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dX(1,u)-1)!==0)return p.aC(0,$.a2i())
for(o=0;o<v;++o)if(s[o]!==0)return p.aC(0,$.a2i())}return p},
aL(d,e){var w,v=this.a
if(v===e.a){w=C.cEj(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a7G(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a7G(t,e)
if(s===0)return $.CQ()
if(r===0)return t.a===e?t:t.uZ(0)
w=s+1
v=new Uint16Array(w)
C.hLs(t.b,s,d.b,r,v)
u=C.tK(w,v)
return new C.nS(u===0?!1:e,v,u)},
H7(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.CQ()
w=d.c
if(w===0)return t.a===e?t:t.uZ(0)
v=new Uint16Array(s)
C.b9j(t.b,s,d.b,w,v)
u=C.tK(s,v)
return new C.nS(u===0?!1:e,v,u)},
bxR(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.tK(r,u)
return new C.nS(!1,u,s)},
bxQ(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.tK(u,r)
return new C.nS(!1,r,v)},
bxS(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.tK(p,m)
return new C.nS(s!==0,m,s)},
Us(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.CQ()
w=t.a
if(w===e.a){if(w){w=$.a2i()
return t.H7(w,!0).bxS(e.H7(w,!0),!0).a7G(w,!0)}return t.bxR(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bxQ(v.H7($.a2i(),!1),!1)},
ad(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a7G(e,v)
if(C.cEj(u.b,t,e.b,w)>=0)return u.H7(e,v)
return e.H7(u,!v)},
aC(d,e){var w,v,u=this,t=u.c
if(t===0)return e.uZ(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a7G(e,v)
if(C.cEj(u.b,t,e.b,w)>=0)return u.H7(e,v)
return e.H7(u,!v)},
aG(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.CQ()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hdC(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.tK(w,t)
return new C.nS(q===0?!1:r,t,q)},
bKQ(d){var w,v,u,t
if(this.c<d.c)return $.CQ()
this.aQI(d)
w=$.fWx.c7()-$.awY.c7()
v=C.fWz($.fWw.c7(),$.awY.c7(),$.fWx.c7(),w)
u=C.tK(w,v)
t=new C.nS(!1,v,u)
return this.a!==d.a&&u>0?t.uZ(0):t},
cmU(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aQI(d)
w=C.fWz($.fWw.c7(),0,$.awY.c7(),$.awY.c7())
v=C.tK($.awY.c7(),w)
u=new C.nS(!1,w,v)
if($.fWy.c7()>0)u=u.ms(0,$.fWy.c7())
return t.a&&u.c>0?u.uZ(0):u},
aQI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hdy&&d.c===$.hdA&&g.b===$.hdx&&d.b===$.hdz)return
w=d.b
v=d.c
u=16-A.o.gajE(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hdw(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hdw(g.b,f,u,r)}else{r=C.fWz(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fWA(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cEj(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.b9j(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b9j(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hLt(p,r,i);--o
C.hdC(h,j,0,r,o,s)
if(r[i]<h){m=C.fWA(j,s,o,n)
C.b9j(r,l,n,m,r)
while(--h,r[i]<h)C.b9j(r,l,n,m,r)}--i}$.hdx=g.b
$.hdy=f
$.hdz=w
$.hdA=v
$.fWw.b=r
$.fWx.b=l
$.awY.b=s
$.fWy.b=u},
gX(d){var w,v,u,t=new C.cEk(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cEl().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nS&&this.aL(0,e)===0},
t9(d,e){return this.aL(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
uT(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gajE(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aA(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cEm(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cEn(w)
if(J.A(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.l6(A.aH.gaM(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.uZ(0):r
while(v.c>1){u=$.hqK()
if(u.c===0)B.b8(D.b2S)
t=v.cmU(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bKQ(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dz(w,x.bJ).h_(0)},
$iaRn:1,
$ihI:1}
C.aQO.prototype={
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
cL_(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gI(d){return A.d.gI(this.a)},
gal(d){return A.d.gal(this.a)},
gam(d){return this.a.length===0},
gco(d){return this.a.length!==0},
gae(d){var w=this.a
return new J.k2(w,w.length,B.U(w).k("k2<1>"))}}
C.Ru.prototype={
cT0(){var w,v
if(this.as==null)this.bbT()
w=this.as
v=w==null?null:w.aok()
return v==null?null:v.eI()},
bbT(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.aok().eI()
this.as=new C.bNl(v)}},
gZ(d){return this.at}}
C.a3t.prototype={
a5(){return"CompressionType."+this.b}}
C.bH3.prototype={
ew(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cq()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dX(v,u)+(s.b&A.yP[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cq()}w=A.o.dX(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fF(u,t)&A.yP[d])
s.c=t}return v}}
C.bFq.prototype={
cJg(d,e){var w,v,u,t,s,r=this,q=new C.bH3(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.ew(8)!==66||q.ew(8)!==90||q.ew(8)!==104)return!1
w=r.a=q.ew(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.cla(q)
if(t<0)return!1
if(t===0){q.ew(8)
q.ew(8)
q.ew(8)
q.ew(8)
s=r.cld(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.ew(8)
q.ew(8)
q.ew(8)
q.ew(8)
return!0}}return!0},
cla(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.ew(8)
if(t!==D.dhX[u])v=!1
if(t!==D.cWs[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cld(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.ew(1),d2=((d3.ew(8)<<8|d3.ew(8))<<8|d3.ew(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.ew(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.ew(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c0q()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.ew(3)
if(q<2||q>6)return-1
v=d3.ew(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.ew(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.c2(6,$.hoR(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.ew(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.ew(1)===0)break
i=d3.ew(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hoQ()
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
if(f<h)h=f}c9.bWR(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.ata(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.ata(d3)}while(a3===0||a3===1);++a5
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
a3=c9.ata(d3)
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
d4.bI(c3)
c1=(c1<<8^D.H_[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.H1[b9];++b9
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
if(b8===0){b8=D.H1[b9];++b9
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
if(b8===0){b8=D.H1[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.H1[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.H1[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bI(c3)
c1=c1<<8^D.H_[c1>>>24&255^v];--c2}d4.bI(c3)
c1=(c1<<8^D.H_[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bI(c7)
c1=(c1<<8^D.H_[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bI(c7)
c1=(c1<<8^D.H_[c1>>>24&255^c7&255])>>>0
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
ata(d){var w,v,u,t,s=this,r=s.ay
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
t=d.ew(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.ew(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
bWR(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c0q(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cwu.prototype={
aH7(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bO7(e)
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
if(w>0)e.aHa(w,!1)
r.cly(e)
q=r.r
v=r.f
u=e.aKa(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aK()!==33639248)break
s=new C.b8_()
s.cT_(0,u,e,f)
q.push(s)}},
cly(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a7j(20,r)
if(w.aK()!==117853008){d.c=s
return}w.aK()
v=w.rY()
w.aK()
d.c=v
if(d.aK()!==101075792){d.c=s
return}d.rY()
d.aU()
d.aU()
d.aK()
d.aK()
d.rY()
d.rY()
u=d.rY()
t=d.rY()
this.f=u
this.r=t
d.c=s},
bO7(d){var w,v,u,t,s,r,q,p,o,n
if(d.gM(0)<=4)return-1
w=d.c
v=d.gM(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a7j(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.als(A.hX)
o.aLr(r.eI(),A.hX,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aK()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cws.prototype={}
C.awC.prototype={
a5(){return"ZipEncryptionMode."+this.b}}
C.cwv.prototype={
aH7(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aK()!==67324752)return
e.aU()
o.b=e.aU()
w=D.aDp.h(0,e.aU())
o.c=w==null?D.LA:w
o.d=e.aU()
o.e=e.aU()
o.f=e.aK()
o.r=e.aK()
o.w=e.aK()
v=e.aU()
u=e.aU()
o.x=e.an8(v)
o.y=e.hf(u).eI()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aTT:D.Dv
o.ay=f
o.Q=e.hf(t)
if(o.at!==D.Dv&&u>2){w=o.y
w.toString
s=B.rc(w,A.hX,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aU()===39169){s.aU()
s.aU()
s.an8(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aU()
o.at=D.aTU
o.ax=new C.cws(r,q)
w=D.aDp.h(0,q)
o.c=w==null?D.LA:w}}}if((o.b&8)!==0){p=e.aK()
if(p===134695760)o.f=e.aK()
else o.f=p
o.r=e.aK()
o.w=e.aK()}},
gM(d){return this.blr().length},
aok(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rc(new Uint8Array(0),A.hX,q,q)
w=r.at
if(w!==D.Dv)if(p.gM(0)<=0)r.at=D.Dv
else{if(w===D.aTT){p=r.bJ8(p)
r.Q=p}else if(w===D.aTU){p=r.bIM(p)
r.Q=p}r.at=D.Dv}w=r.c
if(w===D.ag_){v=p.c
u=B.dj()
p=r.Q
if(p.gM(0)<=524288e3)u.b=A.ps.Bp(p.eI(),!0,!1)
else{t=B.a87(A.hX,r.w)
p=r.Q
p.toString
A.ps.a3v(p,t,!0,!1)
u.b=t.GI()}r.Q.c=v
return B.rc(u.bf(),A.hX,q,q)}else if(w===D.ag0){s=B.a87(A.hX,32768)
p=r.Q
v=p.c
C.htZ().cJg(p,s)
u=s.GI()
r.Q.c=v
return B.rc(u,A.hX,q,q)}else return B.rc(p.eI(),A.hX,q,q)},
blr(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eI()},
u(d){return this.x},
b7M(d){var w=this.ch,v=C.Ju(C.hks(w[0].N(0),d))
w[0]=v
v=w[1].ad(0,v.Us(0,C.Ju(255)))
w[1]=v
w[1]=v.aG(0,C.Ju(134775813)).ad(0,C.Ju(1)).Us(0,C.Ju(4294967295))
w[2]=C.Ju(C.hks(w[2].N(0),w[1].ms(0,24).N(0)))},
aQ6(){var w=(this.ch[2].Us(0,C.Ju(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bJ8(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rc(new Uint8Array(0),A.hX,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b7M(u[v.c++]^r.aQ6())}t=r.Q.eI()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aQ6()
r.b7M(s)
u&2&&B.aj(t)
t[w]=s}return B.rc(t,A.hX,q,q)},
bIM(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hf(8).eI()
v=16}else if(k===2){w=d.hf(12).eI()
v=24}else{w=d.hf(16).eI()
v=32}u=d.hf(2).eI()
t=d.hf(d.gM(0)-10)
s=d.hf(10)
r=t.eI()
k=this.ay
k.toString
q=C.hL9(k,w,v)
p=new Uint8Array(B.ce(A.aH.dq(q,0,v)))
k=v*2
o=new Uint8Array(B.ce(A.aH.dq(q,v,k)))
if(!C.hd0(A.aH.dq(q,k,k+2),u))throw B.V(B.fm("password error"))
k=new Uint8Array(16)
n=new C.bE0(k,new Uint8Array(16),p)
k=x.S
m=J.a4T(0,k)
m=n.r=new C.cgb(m)
m.c=!0
m.b=m.bkK(!0,new C.asj(p))
if(m.c)m.d=B.bo(D.oa,!0,k)
else m.d=B.bo(D.yH,!0,k)
l=C.hbd(C.hbf(),64)
l.bef(new C.asj(o))
n.w=l
n.cSz(r,0,r.length)
k=s.eI()
m=n.x
m===$&&B.c()
if(!C.hd0(k,m))throw B.V(B.fm("macs don't match"))
return B.rc(r,A.hX,null,null)}}
C.b8_.prototype={
cT_(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.an8(w)
if(v>0){t=e.hf(v).eI()
n.ax=t
if(v>=4){s=B.rc(t,A.hX,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aU()
p=s.aU()
o=s.a7j(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.rY()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.rY()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.rY()
p-=8}if(p>=4&&n.y===65535)n.y=o.aK()}}}}if(u>0)e.an8(u)
f.c=n.as
t=new C.cwv(D.LA,n,D.Dv,B.a([C.Ju(0),C.Ju(0),C.Ju(0)],x.f3))
n.ch=t
t.aH7(0,f,g)},
u(d){return this.at}}
C.cwt.prototype={
cJh(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cwu(B.a([],x.fT))
this.a=g
g.aH7(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aQO(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.L)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.cb(o,"/")||A.a.cb(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.Ru(o,A.o.an(Date.now(),1000),0):C.h3s(o,q.w,q)
v.L(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.h3s(o,q.w,q)
if(k.as==null)k.bbT()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.als(A.hX)
j.aLr(o,A.hX,h,h)}i=j==null?h:j.eI()
if(i!=null)new B.FQ(!1).Do(i,0,h,!0)}}return v}}
C.bE0.prototype={
cSz(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Cl(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.htI(u,m.a)
q=m.r
if(16>u.byteLength)B.b8(B.dI("Input buffer too short",null))
if(16>w.byteLength)B.b8(B.dI("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bMt(u,0,w,0,o)}else{o===$&&B.c()
q.bJc(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.KT(w,0)
m.x=A.aH.dq(m.x,0,10)
w=m.w
l=w.a
l.lC(0)
w=w.d
w===$&&B.c()
l.Cl(0,w,0,w.length)
return f}}
C.cgg.prototype={}
C.cgk.prototype={}
C.cge.prototype={}
C.asj.prototype={}
C.cgj.prototype={
cJw(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.e6(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bef(new C.asj(A.aH.fN(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bNt(n.a,n.b,t,s,r)
r+=v}A.aH.hh(f,g,g+w,s)
return o.a.c},
bNt(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.V(B.dI("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Cl(0,d,0,d.length)
v.Cl(0,f,0,4)
u=m.c
u===$&&B.c()
w.KT(u,0)
u=m.c
A.aH.hh(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Cl(0,s,0,s.length)
w.KT(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cgf.prototype={}
C.cgd.prototype={}
C.ask.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.ask){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
t9(d,e){var w=this.a
w===$&&B.c()
w=A.o.t9(w,e.gbX7())
if(!w)e.gbX7()
return w},
aJC(d,e){this.a=0
this.b=d},
td(d){return this.aJC(d,null)},
aKd(d){var w,v=this,u=v.b
u===$&&B.c()
w=u+d
u=w>>>0
v.b=u
if(w!==u){u=v.a
u===$&&B.c();++u
v.a=u
v.a=u>>>0}},
u(d){var w=this,v=new B.fe(""),u=w.a
u===$&&B.c()
w.b_x(v,u)
u=w.b
u===$&&B.c()
w.b_x(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b_x(d,e){var w,v=A.o.fU(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bt(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cgi.prototype={
lC(d){var w,v=this
v.a.td(0)
v.c=0
A.aH.h2(v.b,0,4,0)
v.w=0
w=v.r
A.d.h2(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
anP(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b11(u,0)
v.c=0}v.a.aKd(1)},
Cl(d,e,f,g){var w=this.cjW(e,f,g)
f+=w
g-=w
w=this.cjX(e,f,g)
this.cjN(e,f+w,g-w)},
KT(d,e){var w,v=this,u=C.hbe(v.a),t=u.a
t===$&&B.c()
t=C.h19(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.h19(w,3)
v.cjR()
v.cjO(u)
v.as0()
v.ce0(d,e)
v.lC(0)
return 20},
b11(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.o1(A.aH.gaM(d),d.byteOffset,d.length).getUint32(e,A.i8===w.d)
if(w.w===16)w.as0()},
as0(){this.cSy()
this.w=0
A.d.h2(this.r,0,16,0)},
cjN(d,e,f){while(f>0){this.anP(d[e]);++e;--f}},
cjX(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b11(d,e)
e+=4
f-=4
w.aKd(4)
v+=4}return v},
cjW(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.anP(d[e]);++e;--f;++v}return v},
cjR(){this.anP(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.anP(0)}},
cjO(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.as0()
u=v.d
switch(u){case A.i8:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.DW:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.V(B.bd("Invalid endianness: "+u.u(0)))}},
ce0(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.i8===this.d,s=0;s<w;++s){r=v[s]
q=J.o1(A.aH.gaM(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdc(d){return this.f}}
C.cgl.prototype={
cSy(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.q6[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.q6[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.q6[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q6[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.q6[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q6[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.q6[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q6[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.q6[30]
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
C.cgh.prototype={
bef(d){var w,v,u,t,s=this,r=s.a
r.lC(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Cl(0,w,0,v)
w=s.d
w===$&&B.c()
r.KT(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aH.hh(t,0,v,w)}w=s.d
w===$&&B.c()
A.aH.h2(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aH.hh(w,0,u,s.d)
s.b8V(s.d,u,54)
s.b8V(s.e,u,92)
u=s.d
r.Cl(0,u,0,u.length)},
KT(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.KT(s,w)
s=u.e
t.Cl(0,s,0,s.length)
v=t.KT(d,e)
s=u.e
A.aH.h2(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Cl(0,s,0,s.length)
return v},
b8V(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cgc.prototype={}
C.cgb.prototype={
a1S(d){return(D.oa[d&255]&255|(D.oa[d>>>8&255]&255)<<8|(D.oa[d>>>16&255]&255)<<16|D.oa[d>>>24&255]<<24)>>>0},
bkK(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.V(B.dI("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e3(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c2(4,0,!1,u)
switch(v){case 4:q=J.o1(A.aH.gaM(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a1S((m>>>8|(m&$.q6[24])<<24)>>>0)^D.cyJ[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.o1(A.aH.gaM(e),e.byteOffset,w)
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
p=(p^f.a1S((k>>>8|(k&$.q6[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a1S((k>>>8|(k&$.q6[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.o1(A.aH.gaM(e),e.byteOffset,w)
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
p=(p^f.a1S((g>>>8|(g&$.q6[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a1S(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.V(B.bd("Should never get here"))}return s},
bMt(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.o1(A.aH.gaM(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.e8[a8&255]
u=D.e8[a9>>>8&255]
t=$.q6[8]
s=D.e8[b0>>>16&255]
r=$.q6[16]
q=D.e8[b1>>>24&255]
p=$.q6[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.e8[a9&255]
s=D.e8[b0>>>8&255]
u=D.e8[b1>>>16&255]
v=D.e8[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.e8[b0&255]
u=D.e8[b1>>>8&255]
s=D.e8[a8>>>16&255]
q=D.e8[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.e8[b1&255]
a8=D.e8[a8>>>8&255]
a9=D.e8[a9>>>16&255]
b0=D.e8[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.e8[n&255]
b0=D.e8[m>>>8&255]
a9=D.e8[l>>>16&255]
a8=D.e8[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.e8[m&255]
b0=D.e8[l>>>8&255]
o=D.e8[b1>>>16&255]
s=D.e8[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.e8[l&255]
o=D.e8[b1>>>8&255]
b0=D.e8[n>>>16&255]
u=D.e8[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.e8[b1&255]
o=D.e8[n>>>8&255]
s=D.e8[m>>>16&255]
v=D.e8[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.e8[a8&255]^C.nq(D.e8[a9>>>8&255],24)^C.nq(D.e8[b0>>>16&255],16)^C.nq(D.e8[b1>>>24&255],8)^b6[w][0]
m=D.e8[a9&255]^C.nq(D.e8[b0>>>8&255],24)^C.nq(D.e8[b1>>>16&255],16)^C.nq(D.e8[a8>>>24&255],8)^b6[w][1]
l=D.e8[b0&255]^C.nq(D.e8[b1>>>8&255],24)^C.nq(D.e8[a8>>>16&255],16)^C.nq(D.e8[a9>>>24&255],8)^b6[w][2]
b1=D.e8[b1&255]^C.nq(D.e8[a8>>>8&255],24)^C.nq(D.e8[a9>>>16&255],16)^C.nq(D.e8[b0>>>24&255],8)^b6[w][3]
a7=D.oa[n&255]
b0=D.oa[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.oa[l>>>8&255]
a9=D.oa[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.oa[b1>>>8&255]
h=D.oa[n>>>16&255]
g=D.oa[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.oa[l>>>24&255]
s=s[3]
a1=J.o1(A.aH.gaM(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.o1(A.aH.gaM(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.o1(A.aH.gaM(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.o1(A.aH.gaM(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bJc(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.o1(A.aH.gaM(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.o1(A.aH.gaM(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.o1(A.aH.gaM(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.o1(A.aH.gaM(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.e7[a6&255]
v=D.e7[b0>>>8&255]
u=$.q6[8]
t=D.e7[a5>>>16&255]
s=$.q6[16]
r=D.e7[a4>>>24&255]
q=$.q6[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.e7[a4&255]
t=D.e7[a6>>>8&255]
v=D.e7[b0>>>16&255]
w=D.e7[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.e7[a5&255]
v=D.e7[a4>>>8&255]
t=D.e7[a6>>>16&255]
r=D.e7[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.e7[b0&255]
a5=D.e7[a5>>>8&255]
a4=D.e7[a4>>>16&255]
a6=D.e7[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.e7[p&255]
a6=D.e7[b0>>>8&255]
a4=D.e7[n>>>16&255]
a5=D.e7[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.e7[o&255]
a4=D.e7[p>>>8&255]
a7=D.e7[b0>>>16&255]
t=D.e7[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.e7[n&255]
a7=D.e7[o>>>8&255]
a5=D.e7[p>>>16&255]
v=D.e7[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.e7[b0&255]
a7=D.e7[n>>>8&255]
t=D.e7[o>>>16&255]
w=D.e7[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.e7[a6&255]^C.nq(D.e7[b0>>>8&255],24)^C.nq(D.e7[a5>>>16&255],16)^C.nq(D.e7[a4>>>24&255],8)^b5[a9][0]
o=D.e7[a4&255]^C.nq(D.e7[a6>>>8&255],24)^C.nq(D.e7[b0>>>16&255],16)^C.nq(D.e7[a5>>>24&255],8)^b5[a9][1]
n=D.e7[a5&255]^C.nq(D.e7[a4>>>8&255],24)^C.nq(D.e7[a6>>>16&255],16)^C.nq(D.e7[b0>>>24&255],8)^b5[a9][2]
b0=D.e7[b0&255]^C.nq(D.e7[a5>>>8&255],24)^C.nq(D.e7[a4>>>16&255],16)^C.nq(D.e7[a6>>>24&255],8)^b5[a9][3]
a4=D.yH[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.yH[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.yH[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.yH[o>>>8&255]
i=D.yH[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.yH[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.o1(A.aH.gaM(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bNk.prototype={}
C.bNl.prototype={
gM(d){var w=this.a.length
return w},
aok(){return B.rc(this.a,A.hX,null,null)}}
C.b9y.prototype={
uV(d){return C.hOo(d)}}
C.cqj.prototype={
Mu(d){var w=d.w,v=Math.max(1,A.k.dw(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a9K(v,t+20,u+16,t,u,B.tU(d.x))},
nn(d){return!1}}
C.bOd.prototype={
cDw(d){if(this.b)throw B.V(B.bd("FontLoader is already loaded"))
this.c.push(d.bB(new C.bOe(),x.E))},
mI(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mI=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.V(B.bd("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mI)
case 6:w=5
return B.b(p.fuY(f,r),$async$mI)
case 5:case 3:t.length===s||(0,B.L)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mI,v)}}
C.avj.prototype={
a5(){return"SystemUiMode."+this.b}}
C.a85.prototype={
A(d,e){if(e==null)return!1
if(J.bM(e)!==B.b_(this))return!1
return e instanceof C.a85&&e.a===this.a},
gX(d){return B.bt(B.b_(this),B.wL(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.fDg)return"["+(w+B.e4(this.a))+"]"
return"[ObjectKey "+(w+B.e4(this.a))+"]"}}
C.aVg.prototype={
c0(d){var w=new C.aAa(!0,this.e,null,new B.dh(),B.cj())
w.bZ()
w.scE(null)
return w},
c9(d,e){var w
x.cQ.a(e)
e.syB(0,!0)
w=this.e
if(!w.A(0,e.ak)){e.ak=w
e.aFK()}}}
C.aAa.prototype={
syB(d,e){return},
gpu(){var w=this.aa$
return w!=null},
gl2(){var w=this.aa$
return w!=null},
Mj(d){var w=d==null?B.h5V(null):d
w.sa4p(this.ak)
return w}}
C.a0x.prototype={
S(){return new C.aIz(B.aX(x.N))},
cQJ(d){return this.d.$1(d)},
cOw(){return this.e.$0()}}
C.aIz.prototype={
a_(){this.a1()
this.OS()},
OS(){var w=0,v=B.j(x.H),u,t=this,s
var $async$OS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cOw(),$async$OS)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f5V(t,s))
case 1:return B.h(u,v)}})
return B.i($async$OS,v)},
YD(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$YD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("a_<1>")
p=B.C(new B.a_(r,new C.f5Z(t),q),q.k("J.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f6_(t))
w=3
return B.b(C.anc(p),$async$YD)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f60(t,s,p))
w=4
return B.b(t.OS(),$async$YD)
case 4:case 1:return B.h(u,v)}})
return B.i($async$YD,v)},
a0Q(d){return this.co7(d)},
co7(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a0Q=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f5W(t))
s=J.q(d,"id")
w=3
return B.b(C.bYW(J.k(s==null?"":s)),$async$a0Q)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f5X(t))
w=1
break}q=C.h0E(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cQJ(B.a([q],x.D)),$async$a0Q)
case 4:if(t.c==null){w=1
break}t.m(new C.f5Y(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a0Q,v)},
OR(d,e){return this.bJD(0,e)},
bJD(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OR=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a5(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cb(null,null,!0,null,new C.f5Q(q),r,null,!0,!0,x.y),$async$OR)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f5R(t))
s=s.h(e,"id")
w=4
return B.b(C.anb(J.k(s==null?"":s)),$async$OR)
case 4:if(t.c==null){w=1
break}t.m(new C.f5S(t))
w=5
return B.b(t.OS(),$async$OR)
case 5:case 1:return B.h(u,v)}})
return B.i($async$OR,v)},
cCy(d){var w=B.bi(d),v=w==null?null:w.bT()
if(v==null)return""
return A.ih[B.bH(v)-1]+" "+B.bQ(v)},
aPY(d,e){var w=null,v=B.n(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.O8,A.n),w,e,w,w,w,w,w,e)},
aPX(d){return this.aPY(d,44)},
b68(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.O8:u,r=B.n(14),q=B.X(e,t?A.c:A.aA,u,u,u,17),p=x.p
q=B.a([q,M.IJ,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aA,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.n(10)
A.d.v(q,B.a([M.IJ,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aS,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bwH,u,u,u)],p))}return B.E(B.aD(A.c7,B.df(u,B.B(q,A.m,u,A.b8,A.j,0,u,u),u,u,A.bc,new B.o(u,u,u,r,u,s,A.n),A.hy,u,u,u,A.tH,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f64(this,d),u,u,u,u,u,u,!1,A.a7),1)},
chU(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d3.j(0.14):D.Xu,n=B.n(18),m=p?A.d3:A.dr
m=B.I(m,A.q,p?1.8:1)
w=this.aPX(A.q1)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aQC,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.v(B.a([v,A.cV,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aQE,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.O8:q
u=p?q:B.I(A.b2,A.q,1.6)
r=p?D.bMM:q
return B.aD(q,B.df(q,B.B(B.a([w,A.bd,t,B.df(q,r,q,q,A.bc,new B.o(q,q,u,q,q,v,A.a6),A.fH,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.bc,new B.o(o,q,m,n,q,q,A.n),A.fH,q,q,A.da,A.bm,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f5U(this,p,d),q,q,q,q,q,q,!1,A.a7)},
cpG(d){var w,v,u,t,s,r=this,q=null,p=J.a5(d),o=p.h(d,"savedAt"),n=r.cCy(J.k(o==null?"":o))
o=B.n(18)
w=B.I(A.dr,A.q,1)
v=r.aPX(A.Nl)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aQC,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.v(B.a([u,A.cV,B.d(p+" slides"+t,q,q,q,q,q,q,D.aQE,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.b2M(A.hB,A.bv,"Bring it back",r.r?q:new C.f61(r,d))
return B.p(q,B.B(B.a([v,A.bd,t,p,A.bp,r.b2M(A.e6,A.cb,"Delete",r.r?q:new C.f62(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.Xu,q,w,o,q,q,A.n),q,q,q,A.da,D.bre,q,q,q)},
b2M(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hs(B.aD(w,B.p(w,B.X(d,v?A.b2:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a7),w,f,w,w)},
asg(d,e,f){var w=null
return new B.D(D.bqi,B.v(B.a([B.X(d,A.b2,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.fa2,w,w,w),A.at,B.d(f,w,w,w,w,w,w,D.f2A,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.ca
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aI(d,A.bV,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.b2,i,i,B.n(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aPY(A.yu,46),A.bd,D.bxz],t)
if(j.r)s.push(D.e8D)
s.push(B.aH(i,i,i,i,A.BO,i,i,i,new C.f67(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.n(18)
p=B.I(A.dr,A.q,1)
o=J.a5(h)
q=B.a([A.S,u,new B.D(D.btM,s,i),B.p(i,B.B(B.a([j.b68(0,A.y5,"Save",j.a.c.length),j.b68(1,A.Nz,"Saved",o.gM(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bsR,A.ek,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cb:A.bv).j(0.12)
s=B.n(14)
r=B.I((j.y?A.cb:A.bv).j(0.4),A.q,1)
p=j.y
n=p?A.Nm:A.ef
n=B.X(n,p?A.cb:A.bv,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.ab,B.E(B.d(m,i,i,i,i,i,i,A.a7u,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bsN,A.iC,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.f67,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aD(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.f99,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f68(j,v),i,i,i,i,i,i,!1,A.a7))
s=B.a([B.B(s,A.m,i,A.e,A.j,0,i,i),A.S],t)
if(j.a.c.length===0)s.push(j.asg(A.q1,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.L)(r),++l)s.push(j.chU(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.e8b)
else if(j.e==null)s.push(j.asg(A.akJ,"Could not reach the database","Check the connection, then open this again."))
else if(o.gam(h))s.push(j.asg(A.oN,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gae(h);r.C();)s.push(j.cpG(r.gR(r)))
A.d.v(u,s)}q.push(new B.dq(1,A.cn,B.cw(u,i,X.ahP,i,i,A.ag,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc2X()
p=s?i:D.O8
s=s?A.c.j(0.07):i
o=B.n(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b6.j(0.4),A.cy,18)],x.V)
u=u.a
m=u===0
k=B.X(A.y5,m?A.jg:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.btp,B.aD(i,B.df(i,B.B(B.a([k,A.a6W,new B.dq(1,A.cn,B.f6(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.jg:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.eh),i)],t),A.m,i,A.b8,A.j,0,i,i),i,i,A.bc,new B.o(s,i,i,o,n,p,A.n),A.hy,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a7),i))}else q.push(A.S)
return B.p(i,B.bl(!0,B.v(q,A.m,i,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.b_O,i,i,i,i,i,i,i,i)}}
C.oi.prototype={
ag(){return B.F(["id",this.a,"doc",this.b.ag(),"updatedAt",this.c.a7().ac()],x.N,x.z)}}
C.Yg.prototype={
S(){return new C.ax9(B.a([],x.k),B.f8(null,x.H))},
ge1(){return this.c}}
C.ax9.prototype={
a_(){this.a1()
this.P_()},
P_(){var w=0,v=B.j(x.H),u,t=this,s
var $async$P_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a1v(t.a.c),$async$P_)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cFI(t,s))
case 1:return B.h(u,v)}})
return B.i($async$P_,v)},
cvS(d){var w,v,u,t=this
d.c=new B.S(Date.now(),0,!1)
w=J.qe(t.d,new C.cFL(d))
v=w<0
if(v&&C.hLw(d))return t.f
u=t.d
if(v)J.pw(u,0,d)
else J.aF(u,w,d)
v=x.a
B.fSl(new C.cFM(t),v)
return t.f=t.f.bB(new C.cFN(t,d),v).eL(new C.cFO())},
Is(d,e,f){return this.cby(0,e,f)},
aXH(d,e){return this.Is(0,e,!1)},
cby(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Is=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a6(s,!1).cl(B.e8(new C.cFH(t,e),!1,null,x.H)),$async$Is)
case 3:w=4
return B.b(t.f,$async$Is)
case 4:w=5
return B.b(t.P_(),$async$Is)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Is,v)},
aWY(d){var w=A.o.u(1000*Date.now()),v=d==null?D.duC:d
this.Is(0,new C.oi(w,v,new B.S(Date.now(),0,!1)),!0)},
c2r(){return this.aWY(null)},
acT(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$acT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.cFP(),r,!1,!1,!0,null,!1,!1,x.g2),$async$acT)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aWY(s)
case 1:return B.h(u,v)}})
return B.i($async$acT,v)},
Ir(d,e){return this.bJv(0,e)},
bJv(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ir=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cb(null,null,!0,null,new C.cFC(e),s,null,!0,!0,x.y),$async$Ir)
case 3:if(g!==!0){w=1
break}t.m(new C.cFD(t,e))
w=4
return B.b(t.f,$async$Ir)
case 4:w=5
return B.b(C.afZ(t.a.c,e.a),$async$Ir)
case 5:w=6
return B.b(t.P_(),$async$Ir)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Ir,v)},
D7(d){return this.bBG(d)},
bBG(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$D7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.cFy(d),r,!0,!0,!1,null,!1,!1,x.N),$async$D7)
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
return B.b(t.aXH(0,d),$async$D7)
case 9:w=5
break
case 7:w=10
return B.b(F.h1b(r,d.b,null),$async$D7)
case 10:w=5
break
case 8:w=11
return B.b(t.Ir(0,d),$async$D7)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$D7,v)},
bX4(){var w,v,u=null,t=[D.duF,D.duD,D.duE],s=new C.cFF(),r=B.n(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d5.j(0.4),A.eU,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aT(999,999)
n.push(B.p(u,new B.y(D.deI[w],u,A.oo,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bp(v,v,v,v),u,u,A.n),u,u,u,u,A.o1,u,u,u))}return B.p(u,B.B(B.a([B.E(B.v(B.a([D.fyM,A.O,B.bY(A.bA,n,A.bq,6,6),A.aP,B.aD(u,B.p(u,D.eMq,A.f,u,u,new B.o(A.c,u,u,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cJ,10)],q),u,A.n),u,u,u,u,U.aic,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cFE(this),u,u,u,u,u,u,!1,A.a7)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a7(130,110,new B.an(A.A,u,A.aa,A.r,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bUX,A.n),u,u,u,u,D.btW,u,u,u)},
bBE(d){var w,v=null,u=d.b.d.length,t=B.n(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cy,14)],x.V),r=x.p
s=B.p(v,B.bw(B.n(6),new B.an(A.W,v,A.b0,A.r,B.a([B.f6(A.A,F.anK(d.b),A.f,A.bT),D.ee9,B.ao(v,B.aD(v,B.p(v,D.bNz,A.f,v,v,D.b0K,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cFt(this,d),v,v,v,v,v,v,!1,A.a7),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.f_Y,v,v,v)
w=u===1?"":"s"
return B.aD(v,B.v(B.a([new B.fH(0.6470588235294118,s,v),A.O,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.f6j,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cFu(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cFv(this,d),v,v,v,v,v,v,!1,A.a7)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eD(B.a([new B.D(I.agI,B.hs(B.aD(s,B.p(s,A.anr,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b6.j(0.5),A.J,12)],x.V),E.vW,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc3I(),s,s,s,s,s,s,!1,A.a7),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.n1,s,s,s,!0,s,s,s,s,s,D.fyQ,s,s,s,1,s,!0)
if(t.e)r=D.b48
else{w=t.bX4()
v=B.a([D.fkx,A.ab],r)
if(J.cz(t.d)){u=B.n(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.f_p,s,s,s),A.f,s,s,new B.o(D.b8T,s,s,u,s,s,A.n),s,s,s,s,A.xO,s,s,s))}r=B.a([new B.nP(A5.YD,new B.m9(w,s),s),new B.nP(D.btj,new B.m9(B.B(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cn(t.d))r.push(D.eSx)
else r.push(new B.nP(D.bsP,B.OG(new B.on(new C.cFQ(t),J.ad(t.d),!0,!0,!0,0,B.rU(),s),D.b3q),s))
r=B.vu(0,s,A.r,s,A.y,s,s,s,s,s,!1,s,A.ag,!1,r)}return B.c7(q,D.b7G,r,s,!1,!1,s,s)}}
C.Ye.prototype={
S(){return new C.ax5(B.a([],x.bx))},
TH(d){return this.d.$1(d)}}
C.aEr.prototype={}
C.ax5.prototype={
b_z(d,e,f){var w=$.aw(),v=new B.as(new B.bb(d,A.b5,A.aN),w),u=this.gaXG()
v.aN(0,u)
w=new B.as(new B.bb(e,A.b5,A.aN),w)
w.aN(0,u)
return new C.aEr(v,w,f)},
DX(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a6(0)
v.x=B.cM(A.pR,new C.cEX(v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a1()
w=m.a.c.b
v=$.aw()
u=new B.as(new B.bb(w.a,A.b5,A.aN),v)
t=m.gaXG()
u.aN(0,t)
m.d!==$&&B.aP()
m.d=u
u=new B.as(new B.bb(w.b,A.b5,A.aN),v)
u.aN(0,t)
m.e!==$&&B.aP()
m.e=u
u=new B.as(new B.bb(w.c,A.b5,A.aN),v)
u.aN(0,t)
m.f!==$&&B.aP()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.L)(u),++q){p=u[q]
o=new B.as(new B.bb(p.a,A.b5,A.aN),v)
o.aN(0,t)
n=new B.as(new B.bb(p.b,A.b5,A.aN),v)
n.aN(0,t)
r.push(new C.aEr(o,n,p.c))}if(r.length===0)r.push(m.b_z("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a6(0)
if(r.y){r.a.c.b=r.gp9()
q=r.a
q.TH(q.c)}q=r.d
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
for(s=o.w,r=s.length,q=0;q<s.length;s.length===r||(0,B.L)(s),++q){p=s[q]
t.push(new F.mt(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rh(n,w,v,t,u)},
AG(){var w=0,v=B.j(x.H),u=this,t
var $async$AG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a6(0)
u.y=!1
u.a.c.b=u.gp9()
t=u.a
w=2
return B.b(t.TH(t.c),$async$AG)
case 2:return B.h(null,v)}})
return B.i($async$AG,v)},
c3G(){this.m(new C.cEW(this))
this.DX()},
aWF(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cEZ(w,d,v))
w.DX()},
c3H(d,e){var w=A.d.cw(this.w,e)
this.m(new C.cF6())
this.DX()
$.aW.x1$.push(new C.cF7(w))},
Qa(d){return this.chK(d)},
chK(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qa=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hY().l5(80,1400,A.eH),$async$Qa)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fl(),$async$Qa)
case 8:p=f
o=q.b.toLowerCase()
n=J.ahx(o,".png")?"image/png":"image/jpeg"
r.m(new C.cF_(d,n,p))
r.DX()
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
return B.i($async$Qa,v)},
xE(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.ho5(r,t.gp9()),$async$xE)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cEY(t,s))
t.DX()
case 1:return B.h(u,v)}})
return B.i($async$xE,v)},
ci1(d){var w,v=this,u=null,t=F.fz5(d.c)
if(t==null)return new B.bI(A.a3,u,u,B.hh(D.bGS,D.fn_,new C.cF1(v,d),u),u)
w=x.p
return new B.D(A.cB,new B.an(A.W,u,A.aa,A.r,B.a([B.bw(B.n(12),B.fM(t,A.A,u,u,A.ci,A.bT,!0,140,!1,u,1/0),A.aq),B.ao(u,B.B(B.a([v.b2N(A.ku,new C.cF2(v,d)),A.bp,v.b2N(A.cD,new C.cF3(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b2N(d,e){var w=null
return B.aG(!1,A.a1,!0,w,B.aL(!1,w,!0,new B.D(A.hz,B.X(d,A.c,w,w,w,18),w),A.cL,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aW,0,w,w,A.cL,w,w,A.ah)},
It(){var w=0,v=B.j(x.H),u,t=this,s
var $async$It=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.AG(),$async$It)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.h1b(s,t.gp9(),new C.cF5(t)),$async$It)
case 4:case 1:return B.h(u,v)}})
return B.i($async$It,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eD(B.a([new B.D(A.r3,B.hh(D.bLx,D.fsX,n.gavX(),B.fx(m,m,m,m,m,m,m,m,m,m,m,A.bL,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aH(m,m,m,m,A.anq,m,m,m,new C.cF8(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.WF,m,1,m,m,m,!1,m,!1,E.n1,m,m,m,!0,m,m,m,m,m,D.fnR,m,m,m,1,m,!0),j=Av.aTY(O.lg,A.c,Ae.VA,A.o6,D.foB,n.gc3F()),i=B.n(18),h=n.gavW(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.js,12)],x.V)
g=B.aD(m,B.p(m,new B.a7(92,142.1818181818182,B.f6(A.A,F.anK(n.gp9()),A.f,A.du),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a7)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.er,B.E(B.v(B.a([D.fAl,A.at,B.d(F.h_I(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.fbL,m,m,m),A.S,B.dn(E.amI,E.aRq,h,B.bn(A.d5,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.WF,m,m,i,m,m,A.n),m,m,m,m,A.bm,m,m,m)
h=n.d
h===$&&B.c()
h=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),h,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.n(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.on,!0,A.a4,m,A.an,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),w,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.n(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aB,h,A.O,w,A.O,B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),g,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.n(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m),A.aP],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aT(16,16)
u=new B.ay(O.lg.j(0.18),1,A.q,-1)
t=v+1
s=B.aH(m,m,m,m,D.bKg,m,m,m,v===0?m:new C.cF9(n,v),m,m,m,m,"Move up",A.cd)
r=i.length
q=B.aH(m,m,m,m,D.bQx,m,m,m,v===r-1?m:new C.cFa(n,v),m,m,m,m,"Move down",A.cd)
r=r===1?m:new C.cFb(n,v)
p=new B.aT(12,12)
o=new B.aT(12,12)
g.push(B.p(m,B.v(B.a([new B.cm(A.aO,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.y("Page "+t,m,D.fci,m,m,m,m,m,m,m,m,m),A.b7,s,q,B.aH(m,m,m,m,B.X(A.e6,A.oG,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.cd)],l),m),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].a,m,m,m,m,m,2,new B.e2(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bp(p,p,p,p),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.ck,!0,A.a4,m,A.an,m,m,m,m),A.am,n.ci1(i[v]),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].b,m,m,m,m,m,2,new B.e2(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bp(o,o,o,o),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.n1,m,new B.bO(u,u,u,u),new B.bp(w,w,w,w),m,m,A.n),m,m,new C.a85(h),A.e5,D.brt,m,m,m))}return B.ok(!0,B.c7(k,E.aeT,B.cw(g,m,D.brV,m,m,A.ag,!1),m,!1,!1,j,m),new C.cFc(n),x.C)}}
C.ax7.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cb:E.n1,q=B.n(16),p=B.n(16),o=s?A.ay.j(0.08):A.c.j(0.04)
s=s?A.ay.j(0.16):A.d5.j(0.22)
w=B.n(12)
v=x.p
return new B.D(A.eK,B.aG(!1,A.a1,!0,t,B.aL(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bd,B.E(B.v(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bD,B.d(u.e,t,t,t,t,t,t,D.aPY,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.X(A.ey,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bm,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ah),t)}}
C.apT.prototype={
S(){return new C.aDd()}}
C.aDd.prototype={
a_(){this.a1()
this.Zh()},
bu(d){this.bF(d)
if(d.c!=this.a.c)this.a0F()},
a0F(){var w=0,v=B.j(x.H),u=this,t
var $async$a0F=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dP(t,x.H),$async$a0F)
case 2:u.d=null
if(u.c!=null)u.m(new C.e9e(u))
w=3
return B.b(u.Zh(),$async$a0F)
case 3:return B.h(null,v)}})
return B.i($async$a0F,v)},
Zh(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Zh=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d0(n,"http://")||J.d0(n,"https://")||J.d0(n,"data:")){o=B.XT(B.cx(n,0,null),new B.P2(!0))
r.d=o}else{o=B.fm("unsupported video ref")
throw B.V(o)}w=7
return B.b(o.ic(0).cO(0,A.pN),$async$Zh)
case 7:if(r.c==null){w=1
break}r.d.tf(!1)
r.m(new C.e9c(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.aa(m)
$.am.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.m(new C.e9d(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Zh,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
c6p(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.h5(0)
w.m(new C.e9f(w))}else{v.pT(0)
w.m(new C.e9g(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bI
n=B.n(8*n.d)
m=B.a([D.jd.j(0.92),D.KC.j(0.95)],x.O)
w=B.I(A.c_.j(0.55),A.q,1)
v=p.a
u=v.d
t=B.X(A.q4,A.c_,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c0(B.av(B.v(B.a([t,new B.a7(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.N,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.Q,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),A.be)}if(p.f)return B.av(B.X(A.alZ,A.aA,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b4Y
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.n(6*n.d)
m=B.a([B.f6(A.A,new B.a7(r,q,new B.A_(s,o),o),A.r,A.bT)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.av(B.p(o,B.X(A.iF,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aD(o,B.bw(n,new B.an(A.W,o,A.b0,A.r,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc6o(),o,o,o,o,o,o,!1,A.a7)}}
C.xs.prototype={
a5(){return"NgmyHatiLayoutKind."+this.b}}
C.jo.prototype={}
C.acX.prototype={
B(d){return B.oO(new C.dXX(this,B.P(d).ax.a===A.I,d),!0,0.72,0.9,0.5,!1,null)}}
C.acl.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.I,s=B.n(18),r=B.n(18),q=B.I(D.jd.j(t?0.35:0.4),A.q,1),p=t?D.Lb:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cy,14)],o),m=B.n(10),l=B.I(A.c_.j(0.5),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],o)
w=this.c
o=B.E(B.p(u,new B.fH(0.5625,C.i2X(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.aiH,u,u,u,u),1)
m=D.jd.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.jd,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aG(!1,A.a1,!0,u,B.aL(!1,s,!0,B.p(u,B.v(B.a([o,B.p(u,B.v(B.a([l,A.cV,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aA:D.beW,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bO(new B.ay(m,1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,D.agY,u,u,u)],v),A.aj,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ah)}}
C.xv.prototype={
a5(){return"NgmyMarriageLayoutKind."+this.b}}
C.nF.prototype={}
C.biC.prototype={
Zq(d){var w=null
return new B.bI(A.a3,w,w,B.DF(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.n(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
c6R(){return this.Zq(1)},
awA(d){var w=null,v=B.n(8),u=B.I(A.hZ,A.q,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.acT,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.v(B.a([B.B(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hZ,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dU(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hZ,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.u(-8.36,0))],u),A.m,v,A.b8,A.j,0,v,v),A.at,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.am,w.awA("TAARIFA ZA WANANDOA"),A.am,w.c6R(),A.cV,w.Zq(0.9),A.cV,w.Zq(0.7),A.O,w.awA("TAMKO LA MAKUBALIANO"),A.h0,w.Zq(1),A.cV,w.Zq(0.95),A.O,w.awA("MASHAHIDI"),A.b7,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.N,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.ad_.prototype={
B(d){return B.oO(new C.eet(B.P(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.aeG.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.I,p=B.n(18),o=B.n(18),n=B.I(A.aw.j(q?0.35:0.4),A.q,1),m=q?D.bew:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cy,14)],l),j=B.n(10),i=B.I(A.aw.j(0.5),A.q,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],l)
w=this.c
v=C.h0c(w.a)
if(v==null)v=A.d.gI(D.QD)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.p(r,new B.fH(0.5625,new B.an(A.W,r,A.b0,A.r,B.a([B.bZ(0,B.fM(C.h0b(v.d),A.A,r,r,A.ci,A.bT,!0,r,!1,r,r),0,0,0),new B.D(A.ahG,new C.biC(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.aiH,r,r,r,r),1)
j=A.aw.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:Z.Lc,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aG(!1,A.a1,!0,r,B.aL(!1,p,!0,B.p(r,B.v(B.a([l,B.p(r,B.v(B.a([i,A.cV,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aA:D.b8b,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bO(new B.ay(j,1,A.q,-1),A.Y,A.Y,A.Y),r,r,r,A.n),r,r,r,r,D.agY,r,r,r)],s),A.aj,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ah)}}
C.kS.prototype={
a5(){return"NgmyMarriagePaperStyle."+this.b}}
C.a7z.prototype={}
C.Vr.prototype={
S(){var w=$.aw()
return new C.aDw(new B.cs(null,x.A),new B.as(A.as,w),new B.as(A.as,w),B.mB(0,null,null),A.d.gI(D.a2w),D.dEX,B.a([],x.L),B.a([],x.gE))}}
C.aDw.prototype={
a_(){var w,v=this
v.a1()
v.w=v.a.c
v.z=new C.zl(C.fCZ(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
w=x.a
C.fBV().bB(new C.ehL(v),w)
$.qR().jz(0,"assets/images/ngmy_logo.png").bB(new C.ehM(v),w).eL(new C.ehN())},
q(){var w=this,v=w.e,u=$.aw()
v.T$=u
v.P$=0
v=w.f
v.T$=u
v.P$=0
w.r.q()
w.a2()},
agN(d){var w=null,v=this.c
if(v!=null)v.J(x.q).f.U(B.b2(w,w,w,w,w,A.r,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.U,w,w,w,w,w,w,w,w,w,w))},
IM(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$IM=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hY().l5(88,1600,A.eH),$async$IM)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fl(),$async$IM)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hom(m,p),$async$IM)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bCD(new B.pK(o,1),m),$async$IM)
case 10:if(r.c!=null)r.m(new C.ehn(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.aa(k)
r.agN("Could not open that picture. "+B.t(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$IM,v)},
Wu(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Wu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hom(s,q),$async$Wu)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bCD(new B.pK(r,1),s),$async$Wu)
case 4:if(t.c!=null)t.m(new C.ehj(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Wu,v)},
adI(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$adI=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.ehu(q))
t=4
q.a.toString
p=C.i7o()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$adI)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ehv(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.aa(i)
q.agN(B.t(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ehw(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adI,v)},
Zv(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$Zv=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.ehp(q,i))
t=4
q.a.toString
p=C.i7n()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$Zv)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ehq(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.aa(g)
if(q.c!=null)q.m(new C.ehr(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ehs(q))
$.aW.x1$.push(new C.eht(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Zv,v)},
c76(d){this.m(new C.eho(this,d))},
Ee(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Ee=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.ehl(q))
t=4
w=7
return B.b($.aW.gmD(),$async$Ee)
case 7:w=8
return B.b(B.bN(A.n9,null,x.H),$async$Ee)
case 8:k=$.aW.ak$.x.h(0,q.d)
p=k==null?null:k.gb8()
if(!(p instanceof B.pV))throw B.V("The page is not ready yet.")
w=9
return B.b(p.m_(1800/p.gZ(0).a),$async$Ee)
case 9:o=e
w=10
return B.b(o.ht(A.fY),$async$Ee)
case 10:n=e
if(n==null)throw B.V("Could not make the picture.")
w=11
return B.b(A7.ag1(J.eT(A.dD.gaM(n)),"ngmy_news.png","image/png"),$async$Ee)
case 11:m=e
q.agN(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.aa(i)
q.agN(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ehm(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ee,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.l0,a2,a2,a2,new C.ehC(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bM2,a2,a2,a2,new C.ehD(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.oW,a2,a2,a2,a4?a1.gaYN():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eD(v,a2,a2,!0,!0,A.AL,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eMA,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eU,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fH(0.7142857142857143,B.f6(A.A,new B.ev(new C.b0c(t,s,r,a1.x,a2),a1.d),A.f,A.du),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,H.J4,a2,a2,a2)
t=a1.as?a2:a1.gc75()
t=B.a([B.E(B.dn(D.bMN,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ck,a2,a2,a2),t,B.bn(D.tn,a2,a2,a2,A.c,A.fO,a2,a2,new B.b7(B.n(14),P.uZ),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bw(B.n(10),B.fM(r,A.A,a2,a2,A.ci,A.bT,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.av,r,B.aH(a2,a2,a2,a2,D.bJz,a2,a2,a2,a1.as?a2:a1.gbI6(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,H.J4,a2,a2,a2)
q=B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aRP("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dn,!0,A.a4,a2,A.an,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.d9g[o]
p.push(B.mJ(a2,D.tn,new B.y(n.a,a2,A.pe,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hE,new C.ehE(a1,n),a2,a2,P.uZ,a2))}p=B.bY(A.bA,p,A.bq,6,8)
m=a1.Q
m=B.bY(A.bA,B.a([D.fyZ,A.bd,B.j8(a2,a2,a2,D.fjk,a2,new C.ehF(a1),m==="en",a2,a2,a2,a2),A.ab,B.j8(a2,a2,a2,D.fjf,a2,new C.ehG(a1),m==="sw",a2,a2,a2,a2)],w),A.rX,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,H.J4,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.de(D.a2w,0,B.dJ(10,"count",x.S),j),h=i.$ti,i=new B.bS(i,i.gM(0),h.k("bS<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aQh(g==null?h.a(g):g))}k=B.cw(k,a2,a2,a2,a2,A.aO,!1)
i=B.a([],w)
for(j=B.de(D.a2w,10,a2,j),h=j.$ti,j=new B.bS(j,j.gM(0),h.k("bS<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aQh(g==null?h.a(g):g))}j=B.cw(i,a2,a2,a2,a2,A.aO,!1)
i=a1.as?a2:a1.gc78()
h=B.n(18)
v=B.a([new B.ac(0,A.G,A.bC.j(0.4),A.J,18)],v)
v=B.a([u,A.aB,new B.D(A.cB,s,a2),t,A.aB,new B.D(A.cB,r,a2),q,A.O,p,A.S,m,A.aB,new B.D(A.cB,l,a2),new B.a7(a2,78,k,a2),A.O,new B.a7(a2,78,j,a2),A.aP,B.aD(a2,B.p(A.A,B.B(B.a([D.bMH,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fP,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.u8,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a7)],w)
if(a4){u=B.a([A.dY,B.B(B.a([D.dpu,A.av,D.bxT],w),A.m,a2,A.e,A.j,0,a2,a2),A.O],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.L)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a8:A.a3
q=e?A.b6.j(0.35):D.tn
p=new B.aT(16,16)
d=new B.ay(A.bF,1,A.q,-1)
u.push(new B.bI(r,a2,a2,B.p(a2,new B.y(f.b,a2,D.f9P,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A8.Vn,new B.o(q,a2,new B.bO(d,d,d,d),new B.bp(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cB,A.iC,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cWU[o]
t.push(B.mJ(a2,D.tn,new B.y(a0,a2,A.IX,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hE,new C.ehH(a1,a0),a2,a2,P.uZ,a2))}u.push(B.bY(A.bA,t,A.bq,6,8))
u.push(A.S)
t=B.E(B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aRP("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.ehI(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dn,!0,A.a4,a2,A.an,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc77()
u.push(B.B(B.a([t,A.ab,B.Hx(A.yz,s,B.nz(a2,A.b6,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.aB)
t=a1.as?a2:a1.gaYN()
u.push(B.dn(A.oW,D.fux,t,B.bn(A.cZ,a2,a2,a2,a2,A.IH,a2,a2,new B.b7(B.n(16),A.Y),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cw(v,a1.r,A.ahs,a2,a2,A.ag,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.n(20)
s=B.I(E.jV.j(0.5),A.q,1)
v.push(B.bZ(0,B.el(B.av(B.p(a2,B.B(B.a([E.a6X,A.er,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iM,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(E.AD,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bud,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c7(a3,A.AL,new B.an(A.W,a2,A.aa,A.r,v,a2),a2,!1,!1,a2,a2)},
aRP(d){var w=null
return B.bs(w,new B.b4(4,B.n(14),A.Y),w,A.eQ,w,w,w,w,!0,w,w,w,w,w,w,D.tn,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A0.IS,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aQh(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.n(12),q=B.b0(d.f),p=s?A.bC:A.bF
p=B.I(p,A.q,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.kV,t,t,t,t),A.h0],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bqw,t,t,t,t))
w.push(A.cV)
w.push(new B.D(A.jl,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aD(t,B.p(t,B.v(w,A.m,t,A.b8,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.iX,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.ehk(this,d),t,t,t,t,t,t,!1,A.a7)}}
C.zl.prototype={
bb3(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.zl(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cH1(d){var w=null
return this.bb3(w,w,w,w,w,d,w,w,w,w)},
ag(){var w=this
return B.F(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aC1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cc9(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aV(g);v.C();){u=v.gR(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fE(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.M(w,new C.cc7(),B.U(w).k("M<1,m>")).c_(0,new C.cc8())
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
return this.bb3(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gFq(d){return this.f}}
C.tf.prototype={
a5(){return"NewsLayout."+this.b}}
C.Bk.prototype={
a5(){return"NewsFrame."+this.b}}
C.le.prototype={}
C.b0c.prototype={
ri(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aYP(d,e,f,g){return this.ri(d,e,null,1.25,f,A.bn,g)},
Pw(d,e,f,g,h){return this.ri(d,e,f,1.25,g,A.bn,h)},
awG(d,e,f,g,h){return this.ri(d,e,null,f,g,A.bn,h)},
awF(d,e,f,g,h){return this.ri(d,e,f,g,0,A.bn,h)},
aYR(d,e,f,g,h){return this.ri(d,e,null,f,0,g,h)},
c7c(d,e,f,g,h,i){return this.ri(d,e,f,g,0,h,i)},
awE(d,e,f,g){return this.ri(d,e,null,f,0,A.bn,g)},
adL(d,e,f){return this.ri(d,e,null,f,0,A.bn,A.cN)},
aYQ(d,e,f,g,h){return this.ri(d,e,f,g,0,h,A.cN)},
c7b(d,e,f,g){return this.ri(d,e,null,f,0,g,A.cN)},
c7a(d,e,f,g){return this.ri(d,e,f,g,0,A.bn,A.cN)},
adM(d,e,f,g,h,i){return this.ri(d,e,f,g,h,A.bn,i)},
aYO(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.kh(new B.eq(d,u,u,A.cO,u,u,u,u,u,u,new B.G(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a4,A.c6,new B.ju(1),u,u,h,u,A.c5,u)
v.wB(g)
if(!v.b.a.c.gaDF())return w
w-=2}return j},
adJ(d,e,f,g,h,i,j,k){return this.aYO(d,e,f,g,h,i,j,k,A.bn)},
ayO(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a7(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.v(t,A.m,w,A.e,A.j,0,A.p)},
ayN(d){return this.ayO(null,!1,d)},
agB(d,e){return this.ayO(null,d,e)},
coP(d,e){return this.ayO(d,!1,e)},
gb_X(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaUq(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
On(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.adJ(w.gaUq(),u,A.N,d,g,h,i,1.02)
return B.d(w.gaUq(),v,g,A.a2,v,v,v,w.awF(u,t,f,1.02,A.N),e,v,v)},
aUv(d){return this.On(d,A.L,null,2,78,30)},
ab8(d,e,f,g,h){return this.On(d,e,null,f,g,h)},
bWX(d,e,f,g,h){return this.On(d,A.L,e,f,g,h)},
bWW(d,e,f){return this.On(d,A.L,null,e,f,30)},
Rs(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bI
w=v.d.as
return new B.D(A.jF,B.d(s,u,g,A.a2,u,u,u,v.aYQ(w,v.aYO(t,w,A.cN,d,g,h,15,1.2,A.cF),f,1.2,A.cF),e,u,u),u)},
b5P(d){return this.Rs(d,A.L,null,3,24)},
aAj(d,e,f,g){return this.Rs(d,e,null,f,g)},
cwl(d,e,f){return this.Rs(d,A.L,e,3,f)},
b5Q(d,e){return this.Rs(d,e,null,3,24)},
cwj(d,e){return this.Rs(d,A.L,null,3,e)},
cwk(d,e,f){return this.Rs(d,e,null,3,f)},
aqh(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.fV,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Pw("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
Nk(){return this.aqh(null,!0)},
aqg(d){return this.aqh(null,d)},
bE_(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bI
return new B.D(A.i0,new B.a7(d,w,B.d(v,w,2,A.a2,w,w,w,this.c7b(this.d.as,13.5,1.2,A.cF),e,w,w),w),w)},
vr(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.S(Date.now(),0,!1),i=m.gb_X(),h=A.o.an(j.bD(B.c1(B.bA(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hVV(Math.max(1,B.bA(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aYP(k,12,1.2,A.N),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.adJ(i,v,A.N,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.adJ(i.toUpperCase(),v,A.N,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.v(B.a([B.p(l,B.B(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eD,l,l,l,m.adM(v,u*0.84,h,1,1,A.N),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.O,B.B(B.a([B.d(C.bBS(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hC,A.j,0,l,l),A.am,m.agB(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.v(B.a([B.B(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.er,B.E(B.d(i,l,1,A.eD,l,l,l,m.awE(v,u*0.9,1,A.N),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.S,B.B(B.a([B.d(C.bBS(j),l,l,l,l,l,l,m.Pw(k,13,B.b0(h),0.6,A.N),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hC,A.j,0,l,l),A.O,m.coP(B.b0(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb_X()
v=B.d("NGMY",l,l,l,l,l,l,m.awG(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.n(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.v(B.a([B.B(B.a([v,A.ab,B.eH(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.ri(k,r*0.72,o,1.05,-0.5,A.cF,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b7,new B.dq(1,A.cn,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.adM(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.N),A.dM,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.O,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hC,A.j,0,l,l)
t=m.agB(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.awE(v,u,1,A.N),A.L,l,l)
q=a0?4:8
return B.v(B.a([w,A.at,t,new B.a7(l,s,l,l),v,new B.a7(l,q,l,l),m.agB(!0,1.4),A.at,B.d(C.bBS(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.at,m.ayN(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.v(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.awG(v,u,1,3,A.N),A.L,l,l),A.O,m.agB(!0,1.2),A.at,B.B(B.a([B.d(C.bBS(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hC,A.j,0,l,l),A.at,m.ayN(3)],h),A.m,l,A.e,A.j,0,A.p)}},
acg(d){return this.vr(d,!1)},
adK(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.n(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.adM("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
c79(d,e){return this.adK(d,null,e,null)},
aWx(d){var w=null,v=new B.S(Date.now(),0,!1),u=A.o.E(B.dk(v),12)===0?12:A.o.E(B.dk(v),12),t=B.b0(this.d.w).j(0.75),s=this.awF("Roboto",15,t,1,A.cv),r=B.X(E.ak5,t,w,w,w,18),q=A.a.ap(A.p_[B.bH(v)-1],0,3),p=A.a.aT(A.o.u(B.h_(v)),2,"0"),o=B.dk(v)>=12?"PM":"AM"
return B.B(B.a([r,A.ab,B.d(q+" "+B.bQ(v)+", "+B.bA(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fK,w,w,w,1),B.X(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
avp(){return this.aWx(A.mw)},
b30(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.adM("Roboto",this.adJ(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
ayR(d,e,f){return this.b30(d,e,f,30)},
aAm(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bI
return new B.D(A.vk,B.d(v,w,e,A.a2,w,w,w,this.c7a("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b5U(d){return this.aAm(d,3,22)},
cww(d,e){return this.aAm(d,e,22)},
ty(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fM(r,A.A,s,s,A.ci,A.bT,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.Dd(D.bwY,w,s)
if(v==="sepia")w=new B.Dd(D.bwX,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.av(B.X(A.y0,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c0(s,new B.o(s,s,s,s,s,new B.bT(A.A,0.95,A.x,s,0,B.a([A.K,A.WB.j(0.38)],x.O),s,s),A.n),A.be))
return new B.a7(d,e,new B.an(A.W,s,A.b0,A.r,v,s),s)},
qo(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b0(j),A.q,3)
j=B.I(B.b0(j),A.q,1)
return B.p(k,B.p(k,l.ty(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.ek,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lR,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.e4H,14)],x.V)
v=l.ty(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eH(A.A,-0.035,B.p(k,B.v(B.a([v,B.E(B.av(B.d(u,k,2,A.a2,k,k,k,l.aYQ(j.as,13.5,D.b9J,1.1,A.cF),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.bcV,k,k,k,w,k,A.n),k,e,k,k,D.brQ,k,k,d),k)
case 3:w=B.n(30)
j=B.I(B.b0(j.x),A.q,5)
return B.p(k,B.bw(B.n(25),l.ty(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b0(j.x),A.q,6)
j=B.b0(j.f)
v=t-10
return new B.a7(d,e,B.av(B.p(k,B.hU(l.ty(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.lR,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.e4x,10)],x.V)
return B.eH(A.A,0.025,new B.a7(d,e,new B.an(A.W,k,A.aa,A.f,B.a([B.bZ(0,B.p(k,l.ty(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.r7,k,k,k),0,0,0),B.ao(k,B.eH(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eH(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a7(d,e,B.b3(B.nu(l.ty(d,e),A.aq,D.fVz),new C.bbM(j,k),k,k,A.au),k)
case 7:j=x.p
w=B.a([l.ty(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bv(u));++n){m=new B.aT(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bN,k,k,new B.bp(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cL(0,q,0,p,k,k,new B.cm(A.aO,A.q8,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.W,k,A.b0,A.r,w,k),A.f,A.ea,k,k,k,e,k,k,D.bwd,k,k,d)
case 8:w=d/2
v=B.wT(A.hg,new B.aT(w,w))
j=B.I(B.b0(j.x),A.q,5)
w-=5
return B.p(k,B.bw(B.wT(A.hD,new B.aT(w,w)),l.ty(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fN,22)],x.V)
return B.p(k,l.ty(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bS,k,k,d)
case 10:return new B.a7(d,e,B.nu(l.ty(d,e),A.aq,D.h0B),k)
case 0:j=B.I(B.b0(j.w),A.q,2.4)
return B.p(k,l.ty(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.ek,k,k,d)}},
aNS(d,e){return this.d.e===D.Rg?A.bI:this.bE_(d,e)},
W2(d){return this.aNS(d,A.L)},
gazD(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
azC(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.E(B.av(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aYR(v.Q,19,1.15,A.cF,A.N),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.Pw("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.at)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.adL(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jz(B.v(q,A.F,n,A.e,A.j,0,A.p),A.r,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bm,n,n,d)},
gcfh(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a8R(d,e,f,g){return B.cq(new C.cca(this,e,d,f,g))},
a8Q(d){return this.a8R(d,22,!0,18)},
Wd(d,e){return this.a8R(d,22,!0,e)},
aOU(d,e,f){return this.a8R(d,22,e,f)},
bG1(d,e,f){return this.a8R(d,e,!0,f)},
b8L(d,e,f,g){return B.cq(new C.ccb(this,e,d,g,!0,f))},
ce5(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.v(B.a([k.acg(824),A.aB,k.aUv(824),k.b5P(824),A.O,k.Nk(),A.ac,B.av(k.qo(824,360),j,j,j),k.W2(824),A.ac,B.E(k.a8Q(3),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.v(B.a([k.acg(824),A.aP,new B.a7(j,350,B.B(B.a([new B.a7(440,j,B.v(B.a([k.ab8(440,A.bg,3,62,26),k.aAj(440,A.bg,2,20),A.b7,k.aqh(B.b0(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.II,B.v(B.a([k.qo(362,310),k.W2(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.S,k.ayN(2),A.ac,B.E(k.a8Q(3),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 2:w=k.vr(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.bWX(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cwl(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.v(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.B6,j,j,j)
u=B.a([B.av(k.qo(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Rg){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.awF(i,14,A.c,1.15,A.N),j,j,j),A.f,h,j,j,j,j,j,j,A.lP,j,j,j),j,j,0,0,j,j))}return B.v(B.a([w,A.ac,v,A.ac,new B.an(A.W,j,A.aa,A.r,u,j),A.O,k.Nk(),A.S,B.E(k.Wd(2,21),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 3:h=k.vr(824,!0)
w=k.qo(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.v(B.a([h,A.ac,new B.an(A.b4,j,A.aa,A.r,B.a([w,B.ao(0,B.p(j,k.On(780,A.bg,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a8(A.b_,A.b4,A.x,v,j,j),A.n),j,j,j,j,D.buw,j,j,j),j,j,0,0,j,j)],u),j),k.b5Q(824,A.bg),A.O,k.Nk(),A.S,B.E(k.a8Q(3),1)],u),A.aj,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.v(B.a([k.acg(824),A.aB,k.aUv(824),k.b5P(824),A.O,k.Nk(),A.ac,B.E(k.b8L(3,300,B.v(B.a([k.qo(300,300),k.W2(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.aj,j,A.e,A.j,0,A.p)
case 5:w=k.vr(824,!0)
v=x.p
u=B.v(B.a([k.ab8(440,A.bg,3,62,26),k.aAj(440,A.bg,2,20),A.b7,k.aqg(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.v(B.a([w,A.by,new B.a7(j,400,B.B(B.a([new B.a7(440,j,u,j),A.aNZ,new B.D(A.i0,k.qo(364,h.e===D.Rg?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.aB,B.E(k.Wd(2,21),1)],v),A.aj,j,A.e,A.j,0,A.p)
case 6:return B.v(B.a([k.acg(824),A.ac,k.bWW(824,2,70),k.cwj(824,21),A.O,k.Nk(),A.ac,B.E(k.b8L(3,340,B.av(k.qo(340,340),j,j,j),350),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 7:w=k.vr(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bBS(new B.S(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Pw(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bm,j,j,j),A.aB],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aYR(h.Q,24,1.15,A.cF,A.N),j,j,j))
v.push(A.b7)
if(k.gazD())v.push(k.azC(230,250))
return B.v(B.a([w,A.aB,B.E(B.B(B.a([new B.a7(230,j,B.v(v,A.aj,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.agW,j,j,j,1.2),new B.a7(570,j,B.v(B.a([k.ab8(570,A.bg,3,62,28),k.cwk(570,A.bg,20),A.O,k.aqg(!1),A.O,B.av(k.qo(570,330),j,j,j),k.W2(570),A.S,B.E(k.aOU(2,!1,17),1)],t),A.aj,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 8:w=k.vr(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Pw(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.v(B.a([w,A.ac,B.p(j,B.v(B.a([t,A.am,k.On(788,A.bg,v?A.w:B.b0(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.bsS,j,j,j),k.b5Q(824,A.bg),A.S,B.av(k.qo(824,310),j,j,j),k.W2(824),A.O,k.Nk(),A.S,B.E(k.a8Q(3),1)],s),A.aj,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.v(B.a([k.vr(824,!0),A.aP,new B.an(A.W,j,A.aa,A.r,B.a([k.qo(824,430),B.ao(18,k.c79(k.c.b,17),j,j,18,j,j,j)],w),j),A.by,k.ayR(824,3,66),k.b5U(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.avp(),A.aB,B.E(k.Wd(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.v(B.a([k.vr(824,!0),A.by,new B.a7(j,500,B.B(B.a([new B.a7(410,j,B.v(B.a([k.adK(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aP,k.b30(410,4,58,28),k.aAm(410,6,20),A.b7],w),A.F,j,A.e,A.j,0,A.p),j),U.aO_,k.qo(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.aB,k.avp(),A.aP,B.E(k.Wd(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 12:w=k.vr(824,!0)
v=k.qo(824,420)
u=B.hyA(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.v(B.a([w,A.aP,new B.an(A.W,j,A.aa,A.r,B.a([v,B.ao(22,B.ft(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c7c(i,30,A.c,1,A.cF,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.buM,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.by,k.ayR(824,3,62),k.b5U(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aWx(A.lp),A.aB,B.E(k.Wd(2,18),1)],r),A.aj,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vr(824,!0)
u=h.w
t=x.p
w=B.a([k.qo(824,380),B.ao(j,k.adK(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.ayR(824,2,60)
r=k.cww(824,2)
p=k.avp()
o=B.E(k.aOU(2,!1,18),1)
n=B.I(B.b0(u).j(0.18),A.q,1)
m=B.n(18)
h=h.x
l=B.b0(h).j(0.05)
return B.v(B.a([v,A.aP,new B.an(A.W,j,A.aa,A.r,w,j),A.aP,s,r,A.S,p,A.aB,o,A.ac,B.p(j,B.B(B.a([B.bw(B.n(14),k.ty(150,104),A.aq),A.ok,B.E(B.v(B.a([k.adK("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.O,B.d(q,j,2,A.a2,j,j,j,k.awE(i,19,1.15,A.H),j,j,j)],t),A.F,j,A.e,A.Q,0,A.p),1),B.X(A.ey,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bm,j,j,j)],t),A.aj,j,A.e,A.j,0,A.p)
case 9:return B.v(B.a([k.vr(824,!0),A.by,k.ab8(824,A.bg,3,62,30),k.aAj(824,A.bg,2,22),A.S,k.aqg(!1),A.S,B.av(k.qo(824,330),j,j,j),k.aNS(824,A.bg),A.aP,B.E(k.bG1(2,40,21),1)],x.p),A.aj,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bZ(0,B.c0(s,new B.o(s,s,s,s,s,new B.a8(A.ax,A.aC,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.be),0,0,0)],o)
if(q.ax)n.push(B.bZ(0,B.b3(s,s,s,new C.b8h(B.b0(q.w),s),A.au),0,0,0))
w=q.w
n.push(new B.D(D.bvh,B.v(B.a([B.E(t.ce5(),1),A.O,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.h0,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aYP(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Pw(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hC,A.j,0,s,s)],o),A.aj,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bZ(0,B.e1(B.b3(s,s,s,new C.bqT(v.j(q.ch?0.07:0.06),s),A.au),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.I(B.b0(w).j(0.5),A.q,1.2)
u=B.n(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hU(B.fM(q,A.A,s,s,A.ci,A.bT,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.mw,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.awG(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e1(B.dd(B.p(s,B.B(o,A.m,s,A.e,A.Q,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bwl,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a7(900,1260,B.jz(new B.an(A.W,s,A.aa,A.r,n,s),A.r,s),s)}}
C.bbN.prototype={
j6(d){return C.hdI(d)},
jL(d){return!1}}
C.bbM.prototype={
a4(d,e){var w,v=C.hdI(e)
$.W()
w=B.N()
w.r=this.b.gp(0)
w.b=A.ae
w.c=6
return d.aP(v,w)},
au(d){return!d.b.A(0,this.b)}}
C.bto.prototype={
j6(d){var w,v,u,t,s,r,q,p,o=new B.eM()
o.dC(3)
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
u.F(new B.bF())
return u},
jL(d){return!1}}
C.b8h.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.eM()
k.dC(7)
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
w.saq(new B.bT(A.A,0.5,A.x,l,0,B.a([A.KD.j(0.13),A.K],v),l,l).av(0,B.bU(new B.u(q,p),m)))
n=w.H()
s.drawCircle(q,p,m,n)
n.delete()}w.saq(l)},
au(d){return!1}}
C.bqT.prototype={
a4(d,e){var w,v,u=null,t=e.a,s=B.h5(u,u,u,u,B.d7(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a4,A.c6,u,A.dS,A.c5)
s.ep()
w=d.a
J.by(w.save())
w.translate(t/2,e.b*0.52)
d.j3(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a4(d,new B.u(-v/2,-t.gbc(t)/2))
w.restore()},
au(d){return!d.b.A(0,this.b)}}
C.Vu.prototype={
S(){return new C.aDA()}}
C.aDA.prototype={
a_(){var w=this
w.a1()
B.h_4(w.a.c,null).bB(new C.eiW(),x.g7).bB(new C.eiX(w),x.a)
w.a.toString},
gaMH(){var w=D.auI[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gawH(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaMH()
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
Zx(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Zx=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.eiJ(r))
t=4
q=r.gawH()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.W()
n=new B.qY()
m=B.Db(n,null)
i=B.N()
i.Q=A.fW
m.qz(g,q,new B.a9(0,0,0+p,0+o),i)
w=7
return B.b(n.pE().zh(J.h3c(p),J.h3c(o)),$async$Zx)
case 7:l=e
w=8
return B.b(l.ht(A.fY),$async$Zx)
case 8:k=e
j=r.c
if(j!=null){j=B.a6(j,!1)
i=k
i.toString
j.O(J.eT(J.vl(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.eiK(r))
r.c.J(x.q).f.U(D.eV7)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Zx,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.l0,s,s,s,new C.eiQ(d),s,s,s,s,s,s),p=x.p
q=B.eD(B.a([B.bK(!1,D.fx2,s,s,!0,s,s,t.y||r==null?s:t.gc7d(),s,s)],p),s,s,!0,!0,A.AL,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fAX,s,s,s,1,s,!0)
if(r==null)p=A.lG
else{w=B.E(new B.D(A.bP,B.av(new B.fH(t.gaMH(),B.cq(new C.eiR(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iX,B.j8(s,s,s,new B.y(D.auI[u].a,s,E.aPM,s,s,s,s,s,s,s,s,s),s,new C.eiS(t,u),t.e===u,s,s,s,s),s))
p=B.v(B.a([w,B.p(s,B.bl(!0,B.v(B.a([new B.a7(s,40,B.cw(v,s,s,s,s,A.aO,!1),s),B.B(B.a([D.bNq,B.E(B.kZ(s,s,s,6,1,new C.eiT(t),t.f),1),D.bN2],p),A.m,s,A.e,A.j,0,s,s),D.fur,A.am,B.bK(!1,D.fua,s,s,!0,s,s,new C.eiU(t,d),s,s)],p),A.m,s,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,D.WP,s,s,s,s,s,s,D.bsd,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.c7(q,A.AL,p,s,!1,!1,s,s)}}
C.bbj.prototype={
a4(d,e){var w
$.W()
w=B.N()
w.Q=A.ci
return d.qz(this.b,this.c,new B.a9(0,0,0+e.a,0+e.b),w)},
au(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a_y.prototype={
S(){var w=$.aw(),v=x.A
return new C.aEX(new B.as(A.as,w),new B.as(new B.bb("NGMY",A.b5,A.aN),w),new B.cs(null,v),new B.cs(null,v),A.d.gI(D.a37),"quote"+1000*Date.now(),B.a([],x.t),B.aX(x.S),A.L)}}
C.ou.prototype={}
C.aEX.prototype={
gaUD(){var w,v,u=this
if(u.p1)w=new B.vC(1,u.p2,0.9,u.p3).iC().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
a_(){var w=this
w.a1()
w.a.toString
w.p4=null
$.aW.x1$.push(new C.eSw(w))},
q(){var w=this.d,v=$.aw()
w.T$=v
w.P$=0
w=this.e
w.T$=v
w.P$=0
this.a2()},
Ya(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Ya=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.qR().jz(0,"assets/images/ngmy_logo.png"),$async$Ya)
case 7:q=e
p=J.eT(J.vl(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bCD(new B.pK(p,1),o),$async$Ya)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eRo(r,p))
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
return B.i($async$Ya,v)},
Pz(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Pz=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hY().l5(92,1800,A.eH),$async$Pz)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fl(),$async$Pz)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bCD(new B.pK(p,1),n),$async$Pz)
case 9:if(r.c==null){w=1
break}r.m(new C.eRM(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.aa(l)
n=r.c
if(n!=null)n.J(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d("Could not open that picture. "+B.t(o),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Pz,v)},
b2n(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aF=w.aO=w.aE=w.aw=w.Y=w.aW=w.bi=w.y2=0
w.b0=null
w.b1=0.25
w.bd=null
w.bJ=0.5
w.aR=1
w.c4=w.bQ=w.bk=0
w.cM=w.cL=!1},
aWh(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bzj(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.dbW)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bzj(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bzj(C.fZ9(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bzj(C.fZ9(1-a0*0.5,n,n,n),w)}return a1?C.bzj(C.fZ9(-1,255,255,255),w):w},
aAs(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).kW(0,this.d.a.a),t=B.C(u,B.a3(u).k("J.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.za(u,v,w)
this.dx.pa(new C.eRW(t),!0)
return t},
b4U(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aAs()
w=C.i55(e.d.a.a,e.db)
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
return C.i1A(d,k,v,a0,j,e.gaUD(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cuh(){return this.b4U(null)},
D6(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$D6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aW.gmD(),$async$D6)
case 3:w=4
return B.b(B.bN(A.eJ,null,x.H),$async$D6)
case 4:w=5
return B.b($.aW.gmD(),$async$D6)
case 5:s=$.aW.ak$.x.h(0,t.r)
r=s==null?null:s.gb8()
if(!(r instanceof B.pV)){u=null
w=1
break}w=7
return B.b(r.m_(1080/r.gZ(0).a),$async$D6)
case 7:w=6
return B.b(e.ht(A.fY),$async$D6)
case 6:q=e
u=q==null?null:J.eT(A.dD.gaM(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$D6,v)},
a9I(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a9I=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eR7(q))
t=4
w=7
return B.b(q.D6(),$async$a9I)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cS.gcz().aJ(p)
n=C.Bx(null,null,null,null,D.oe,6,!1,null,null,null,null,null,C.cD(),null,!1,null,"NGMY Quote",null,null,B.a([q.b4U(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a6(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.aa(j)
l=q.c
if(l!=null)l.J(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(B.t(m),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eR8(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9I,v)},
Ao(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Ao=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eR5(q))
t=4
w=7
return B.b($.aW.gmD(),$async$Ao)
case 7:w=8
return B.b(B.bN(A.oJ,null,x.H),$async$Ao)
case 8:w=9
return B.b($.aW.gmD(),$async$Ao)
case 9:k=$.aW.ak$.x.h(0,q.f)
p=k==null?null:k.gb8()
if(!(p instanceof B.pV))throw B.V("The picture is not ready yet.")
w=10
return B.b(p.m_(1080/p.gZ(0).a),$async$Ao)
case 10:o=e
w=11
return B.b(o.ht(A.fY),$async$Ao)
case 11:n=e
if(n==null)throw B.V("Could not make the picture.")
w=12
return B.b(A7.ag1(J.eT(A.dD.gaM(n)),"ngmy_quote.png","image/png"),$async$Ao)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.J(x.q).f
k.U(B.b2(null,null,null,null,null,A.r,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.aa(i)
k=q.c
if(k!=null)k.J(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(B.t(l),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eR6(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ao,v)},
chb(){var w=this.p4
w.toString
return B.cq(new C.eRF(this,w))},
aYY(d,e){var w=null
return B.bs(w,w,w,w,w,D.f4q,w,w,!0,new B.b4(4,B.n(16),P.uZ),w,w,w,w,w,D.tn,!0,w,w,w,w,new B.b4(4,B.n(16),D.aYs),w,w,w,w,w,w,w,w,A1.Dm,e,w,w,w,w,w,w,w,D.f9G,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xM(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b6,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aQz,w,w,w))
return new B.D(H.agN,B.B(u,A.m,w,A.e,A.j,0,w,w),w)},
aYX(d,e){var w=null,v=B.n(18),u=B.I(A.bF,A.q,1)
return B.p(w,B.aG(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.jJ),A.f,w,w,new B.o(D.tn,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vy(d){return this.aYX(d,A.bB)},
oa(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.u8:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.n(30)
u=B.I(f?A.K:A.bF,A.q,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jg,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.jg,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aD(r,B.df(r,B.B(s,A.m,r,A.e,A.Q,0,r,r),r,r,A.bc,new B.o(w,r,u,v,r,p,A.n),A.hy,r,r,r,A.Fa,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a7)},
afA(d,e,f){return this.oa(d,null,e,f)},
awL(d,e,f,g,h,i,j){var w=null,v=B.n(12),u=g?A.b6.j(0.28):A.c.j(0.05),t=g?A.eA:A.bF,s=x.p
v=B.a([B.df(w,d,w,w,A.bc,new B.o(u,w,B.I(t,A.q,g?2:1),v,w,w,A.n),A.hy,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aA
A.d.v(v,B.a([A.at,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aD(w,new B.a7(j,w,B.v(v,A.m,w,A.e,A.Q,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a7)},
aZ0(d,e,f,g,h,i){return this.awL(d,e,f,g,h,5,i)},
kh(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,D.f1s,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aD(u,D.e8f,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eRS(this,h,i),u,u,u,u,u,u,!1,A.a7))
w=A.c.j(0.08)
v=B.n(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aPE,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.Z2,u,u,u))
s=B.B(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.auK(w).cIp(A.b6,A.bF,A.b6.j(0.2),A.c,D.eLS,4)
return new B.D(A.xy,B.v(B.a([s,B.a9G(B.kZ(u,u,u,g,f,new C.eRT(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
ahB(d,e,f,g,h,i){return this.kh(d,e,f,g,h,null,i)},
ai2(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.L)(f),++v){u=f[v]
t=u==null
s=t?A.dr:B.b0(u)
r=d==u
q=r?A.c:A.b2
p=new B.ay(q,r?3:1,A.q,-1)
t=t?D.bGu:o
n.push(B.aD(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bO(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eRV(this,e,u),o,o,o,o,o,o,!1,A.a7))}return B.bY(A.bA,n,A.bq,10,10)},
bKa(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a37
else{v=x.a8
w=B.C(new B.a_(D.a37,new C.eQY(o),v),v.k("J.E"))}v=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.d,n,n,n,n,n,2,o.aYY("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eQZ(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.a7V,!0,A.a4,n,A.an,n,n,n,n)
u=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.e,n,n,n,n,n,2,o.aYY("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eR_(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.dn,!0,A.a4,n,A.an,n,n,n,n)
t=o.xM("DESIGNS",A.tW)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cOy[q]
r.push(new B.D(A.iX,o.afA(p,o.x===p,new C.eR0(o,p)),n))}return B.v(B.a([v,A.S,u,t,B.c9(B.B(r,A.m,n,A.e,A.j,0,n,n),A.r,n,A.y,n,n,n,n,A.aO),A.ac,new B.a7(n,118,B.hJ(n,new C.eR1(o,w),w.length,n,n,A.aO,new C.eR2(),!1),n),A.O,o.aYX(B.v(B.a([B.iG(A.b6,n,n,A.af,!0,new C.eR3(o),n,D.flD,n,D.fi1,o.k3),B.iG(A.b6,n,n,A.af,!0,new C.eR4(o),n,n,n,D.ffh,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.ahr)],s),A.F,n,A.e,A.j,0,A.p)},
cCO(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aAs()
if(a7.length===0)return a5.vy(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.J5,a6,a6,a6))
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
m=B.C(u,B.a3(u).k("co.E"))
A.d.fo(m)
l=m.length!==0&&A.d.d7(m,new C.eSl(a5,m))?a5.db[A.d.gI(m)]:a6
k=new C.eSs(a5)
j=new C.eSu()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.J5,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aT(11,11)
f=u.t(0,h)?A.b6.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.eA:A.bF
d=new B.ay(e,u.t(0,h)?2:1,A.q,-1)
e=a7[h].b
a0=e.index
e=A.a.ap(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aK(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a5
o.push(B.aD(a6,B.p(a6,new B.y(e,a6,new B.G(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bO(d,d,d,d),new B.bp(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.Mw,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eSm(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a7))}o=a5.vy(B.bY(A.bA,o,A.rX,6,6))
i=B.a([a5.oa("All words",L.alG,!1,new C.eSn(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.afA("Sentence "+a3,!1,new C.eSo(a5,a7,v,a2)))
a2=a3}}i.push(a5.afA("Clear picks",!1,new C.eSp(a5)))
i=B.bY(A.bA,i,A.bq,8,8)
g=a5.xM("SIZE OF THE PICKED WORDS",D.al8)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dhx[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eSq(e,k)
f.push(a5.afA(a0.b,l===a4,e))}return B.v(B.a([q,A.S,o,A.S,i,g,B.bY(A.bA,f,A.bq,8,8),A.S,a5.oa("Make every word normal",A.lo,!1,new C.eSr(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cy0(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.bxw,B.d(A.d.hr(D.awp,new C.eS4(q)).b,p,p,p,p,p,p,D.f2V,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cq(new C.eS5(q)),l=q.xM("HIGHLIGHT BEHIND THE WORDS",A.a_X),k=q.p1?-1:q.k4
k=q.ai2(k,new C.eS6(q),D.cYT)
w=q.p1
v=w?A.c:A.b2
n=B.a([n,A.S,m,l,B.bY(A.bA,B.a([k,B.aD(p,B.p(p,D.bJt,A.f,p,p,new B.o(p,p,B.I(v,A.q,w?3:1),p,p,D.eXJ,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eS9(q),p,p,p,p,p,p,!1,A.a7)],o),A.rX,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.J5,p,p,p)],o)
if(q.gaUD()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ahB("Colour",l,0,360,new C.eSa(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ahB("Shade",k,0.15,0.9,new C.eSb(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.kh("Strength",l,0.15,1,new C.eSc(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.S,q.vy(B.v(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xM("LOOK",A.yn))
m=B.a([q.oa("Bold",K.al6,q.fy,new C.eSd(q)),q.oa("Italic",K.al7,q.go,new C.eSe(q))],o)
for(u=0;u<3;++u){l={}
k=D.cPK[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.u8:p
w=w?p:A.c.j(0.07)
s=new B.aT(14,14)
r=new B.ay(q.id===l.a?A.K:A.bF,1,A.q,-1)
m.push(B.aD(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bO(r,r,r,r),new B.bp(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eSf(l,q),p,p,p,p,p,p,!1,A.a7))}n.push(B.bY(A.bA,m,A.rX,8,8))
n.push(q.xM("COLOUR",A.ni))
n.push(q.ai2(q.fx,new C.eSg(q),D.d8L))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.J5,p,p,p))
n.push(q.xM("SIZE AND PLACE",A.Ga))
m=q.fr
m=q.kh("Text size",m,0.5,1.6,new C.eS7(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vy(B.v(B.a([m,q.kh("Up / down",l,0.12,0.5,new C.eS8(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.v(n,A.F,p,A.e,A.j,0,A.p)},
chc(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.n(22)
v=B.I(A.b6.j(0.6),A.q,1.6)
u=B.a([A.b6.j(0.18),A.bC.j(0.12)],x.O)
return B.aD(p,B.p(p,B.v(B.a([B.p(p,D.bOQ,A.f,p,p,D.b0q,p,62,p,p,p,p,p,62),A.aB,D.fjd,A.am,D.fnP],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.tn,p,v,w,p,new B.a8(A.a3,A.a8,A.x,u,p,p),A.n),p,p,p,p,D.bto,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaZ_(),p,p,p,p,p,p,!1,A.a7)}w=x.p
v=B.B(B.a([B.bw(B.n(12),new B.a7(46,62,B.fM(o,A.A,120,p,A.ci,A.bT,!1,p,!1,p,p),p),A.aq),A.bd,B.E(B.v(B.a([D.fiM,A.O,B.bY(A.bA,B.a([q.oa("Change",A.ku,!1,q.gaZ_()),q.oa("Remove",A.e6,!1,new C.eRJ(q))],w),A.bq,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.d5d[t]
u.push(q.oa(s.b,s.a,q.at===t,new C.eRK(q,t)))}u=B.bY(A.bA,u,A.bq,8,8)
r=q.at
A:{if(0===r){s=q.c_U(o)
break A}if(1===r){s=q.bZS()
break A}if(2===r){s=q.bG0()
break A}if(3===r){s=q.bMk()
break A}s=q.bI7()
break A}return B.v(B.a([v,A.ac,u,A.aB,s,A.S,new B.bI(A.a3,p,p,q.oa("Reset the whole picture",A.lo,!1,new C.eRL(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
c_U(d){var w=this,v=x.p
return B.v(B.a([B.bY(A.bA,B.a([w.oa("Auto enhance",E.a_A,!1,new C.eRB(w)),w.oa("Make words easy to read",A.oT,!1,new C.eRC(w))],v),A.bq,8,8),A.aB,B.cq(new C.eRD(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bZS(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kh("Exposure",n,-1.5,1.5,new C.eRf(o),0,A.k.ab(n,1))
w=o.RG
w=o.kh("Brightness",w,-0.5,0.5,new C.eRg(o),0,""+A.k.V(w*100))
v=o.rx
v=o.kh("Contrast",v,0.4,2,new C.eRh(o),1,""+A.k.V(v*100))
u=o.xr
u=o.kh("Fade",u,0,1,new C.eRi(o),0,""+A.k.V(u*100))
t=o.aE
t=o.kh("Spotlight",t,0,1,new C.eRj(o),0,""+A.k.V(t*100))
s=o.Y
s=o.kh("Darken",s,0,0.85,new C.eRk(o),0,""+A.k.V(s*100))
r=o.aW
r=o.kh("Vignette",r,0,0.9,new C.eRl(o),0,""+A.k.V(r*100))
q=o.aF
q=o.kh("Shade behind words",q,0,0.85,new C.eRm(o),0,""+A.k.V(q*100))
p=o.aO
return o.vy(B.v(B.a([n,w,v,u,t,s,r,q,o.kh("Shade top & bottom",p,0,0.85,new C.eRn(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bG0(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kh("Colour strength",q,0,2.2,new C.eQB(s),1,""+A.k.V(q*100))
w=s.to
w=s.kh("Warmth",w,-1,1,new C.eQC(s),0,""+A.k.V(w*100))
v=s.x1
v=s.kh("Tint",v,-1,1,new C.eQD(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vy(B.v(B.a([q,w,v,s.kh("Shift colours",u,-180,180,new C.eQE(s),0,""+A.k.V(u)+"\xb0"),new B.bI(A.a3,r,r,s.oa("Negative",D.bEr,s.y1,new C.eQF(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xM("COLOUR WASH",A.Nu)
w=s.b0
q=B.a([null],x.Z)
A.d.v(q,D.av7)
t=B.a([u,v,s.ai2(w,new C.eQG(s),q),A.O],t)
if(s.b0!=null){q=s.b1
t.push(s.vy(s.ahB("Wash strength",q,0,0.9,new C.eQH(s),""+A.k.V(q*100))))}return B.v(t,A.F,r,A.e,A.j,0,A.p)},
bMk(){var w,v,u,t,s,r=this,q=r.y2
q=r.kh("Blur",q,0,24,new C.eR9(r),0,A.o.u(A.k.V(q)))
w=r.bi
w=r.kh("Soft focus",w,0,1,new C.eRa(r),0,""+A.k.V(w*100))
v=r.aw
u=x.p
v=r.vy(B.v(B.a([q,w,r.kh("Film grain",v,0,1,new C.eRb(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xM("LIGHT LEAK",I.al2)
q=r.bd
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.de(D.av7,0,B.dJ(8,"count",s),s))
u=B.a([v,w,r.ai2(q,new C.eRc(r),t),A.O],u)
if(r.bd!=null){q=r.bJ
u.push(r.vy(r.ahB("Leak strength",q,0,1,new C.eRd(r),""+A.k.V(q*100))))}return B.v(u,A.F,null,A.e,A.j,0,A.p)},
bI7(){var w,v,u,t,s=this,r=s.aR
r=s.kh("Zoom",r,1,3,new C.eQL(s),1,""+A.k.V(r*100)+"%")
w=s.bk
w=s.kh("Left / right",w,-1,1,new C.eQM(s),0,""+A.k.V(w*100))
v=s.bQ
v=s.kh("Up / down",v,-1,1,new C.eQN(s),0,""+A.k.V(v*100))
u=s.c4
t=x.p
return B.v(B.a([s.vy(B.v(B.a([r,w,v,s.kh("Turn",u,-180,180,new C.eQO(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.S,B.bY(A.bA,B.a([s.oa("Turn 90\xb0",H.amc,!1,new C.eQP(s)),s.oa("Flip sideways",A.FX,s.cL,new C.eQQ(s)),s.oa("Flip upside down",A.FX,s.cM,new C.eQR(s))],t),A.bq,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
c2A(){var w=null,v=B.n(22),u=B.I(A.bF,A.q,1)
return B.p(w,B.v(B.a([D.eM3,A.S,D.fkF,A.aB,B.aD(w,B.p(A.A,D.eMg,A.f,w,w,new B.o(w,w,w,B.n(16),w,G.u8,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eRE(this),w,w,w,w,w,w,!1,A.a7)],x.p),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.tn,w,u,v,w,w,A.n),w,w,w,w,A.bP,w,w,w)},
c_I(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eRw(p),m=x.p,l=B.B(B.a([D.bxC,p.oa("Reset",A.lo,!1,new C.eRs(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.J5,o,o,o),j=p.xM("SHAPE",A.am8),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.C1[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aZ0(n.$2(t,p.cy),62,u.b,s===t,new C.eRt(v,p),62))}}i=B.bY(A.bA,i,A.bq,8,8)
v=p.xM("RING",A.r9)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.BX[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aZ0(n.$2(p.cx,t),62,r.b,q===t,new C.eRu(s,p),62))}u=B.bY(A.bA,u,A.bq,8,8)
s=p.CW
return B.v(B.a([l,A.at,k,j,i,v,u,A.ac,p.vy(p.kh("Size",s,0.12,0.4,new C.eRv(p),0.22,""+A.k.V(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
b0V(d){return new B.a7(null,d,new B.fH(0.5625,B.cq(new C.eRP(this)),null),null)},
cxh(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.n(18),n=B.I(A.bF,A.q,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.u8:q
t=new B.aT(14,14)
s=D.d7g[w]
r=v?A.c:A.aA
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aA
l.push(new B.bC(1,A.bh,B.aD(A.c7,B.df(q,B.v(B.a([r,A.cV,new B.qj(A.eh,A.A,A.f,new B.y(s.b,q,new B.G(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.Q,0,A.p),q,q,A.bc,new B.o(q,q,q,new B.bp(t,t,t,t),q,u,A.n),D.bp7,q,q,q,A.hM,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eRY(this,w),q,q,q,q,q,q,!1,A.a7),q))}return B.p(q,B.B(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.brb,A.lR,q,q,q)},
aPp(){var w,v,u=this,t=null,s=u.cxh(),r=u.as
A:{if(0===r){w=u.bKa()
break A}if(1===r){w=u.cCO()
break A}if(2===r){w=u.cy0()
break A}if(3===r){w=u.chc()
break A}if(4===r){w=u.c_I()
break A}w=u.c2A()
break A}v=x.p
return B.bw(A.t2,B.el(B.v(B.a([s,B.E(B.cw(B.a([w],v),t,D.bse,t,t,A.ag,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.WP,!0),A.aq)},
aLE(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc7E(),p=B.n(16)
q=B.E(B.aD(r,B.p(r,D.eMr,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.b2,A.q,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a7),1)
p=s.Q?r:s.gbLV()
w=B.n(16)
v=B.a([new B.ac(0,A.G,A.bC.j(0.35),A.cy,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eRr)
else t.push(D.bIy)
t.push(A.ab)
t.push(D.bzo)
return B.p(r,B.B(B.a([q,A.av,B.E(B.aD(r,B.p(r,B.B(t,A.m,r,A.b8,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.u8,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a7),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.b_x,r,r,r,r,G.ahf,r,r,r)},
aYZ(){var w=null
return new B.D(T.YZ,B.B(B.a([B.aH(w,w,w,w,A.mA,w,w,w,new C.eRe(this),w,w,w,w,w,w),D.fzU,A.b7,D.bR8],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c7(w,A.AL,B.bl(!0,B.cq(new C.eSv(this)),!0,!1,A.af,!0,!0),w,!1,!1,w,w)}}
C.beS.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.eM()
m.dC(7)
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
s.drawRect(B.c_(new B.a9(p,o,p+1.1,o+1.1)),n)
n.delete()}},
au(d){return d.b!==this.b}}
C.rr.prototype={
a5(){return"NgmyQuoteDeco."+this.b}}
C.m6.prototype={}
C.zn.prototype={
ag(){var w=this
return B.F(["at",w.a.a7().ac(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nJ.prototype={}
C.vV.prototype={
a5(){return"NgmySlidesAiExtra."+this.b}}
C.a7H.prototype={}
C.aqI.prototype={}
C.a04.prototype={
S(){return new C.aGS(new B.as(A.as,$.aw()),B.jQ(!0,null,!0,!0,null,null,!1),D.dxG,B.a([],x.s),B.et([D.HQ],x.Q))}}
C.aGS.prototype={
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.f.q()
this.a2()},
a_S(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a_S=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hY().C0(90,700,700,A.eH),$async$a_S)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fl(),$async$a_S)
case 8:p=e
if(r.c!=null)r.m(new C.eYI(r,p,q))
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
return B.i($async$a_S,v)},
a_V(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_V=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hY().aGQ(78,n,1100,1100),$async$a_V)
case 7:q=e
if(J.cn(q)){w=1
break}p=B.bo(r.y,!0,x.N)
n=J.aV(q)
case 8:if(!n.C()){w=9
break}o=n.gR(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fl(),$async$a_V)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.cb(l,".png"))k="image/png"
else k=A.a.cb(l,".webp")?"image/webp":"image/jpeg"
J.ci(p,"data:"+k+";base64,"+A.cS.gcz().aJ(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.eYJ(r,p))
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
return B.i($async$a_V,v)},
b3_(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fM(A.cG.aJ(A.d.gal(d.split(","))),A.A,u,u,A.ci,A.bT,!0,u,!1,u,u)
return w}catch(v){}return D.bnn},
c_O(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cq7(C.fAl(w,this.b3_(d),f),g)},
ac1(d,e,f,g,h){var w=null,v=new C.eYG(f,e),u=new C.eYH(f,e),t=A.c.j(0.05),s=B.n(12),r=B.n(12),q=B.n(12),p=h==null,o=B.I(p?A.bF:A.b6.j(0.6),A.q,1)
if(p)p=new B.a7(34,30,new B.an(A.W,w,A.aa,A.f,B.a([B.av(B.X(f?A.BF:A.Nk,A.c2,w,w,w,26),w,w,w),D.edY],x.p),w),w)
else p=this.c_O(g,v.$1(h),u.$1(h),34)
return B.aG(!1,A.a1,!0,s,B.aL(!1,r,!0,B.p(w,B.B(B.a([B.E(B.av(p,w,w,w),1),D.bIf],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mr,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eYF(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ah)},
aWn(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bw(B.n(8),B.fM(A.cG.aJ(A.d.gal(h.split(","))),A.A,p,p,A.ci,A.bT,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.n(14)
t=B.n(14)
s=B.n(14)
r=B.I(n?A.bF:A.bl.j(0.6),A.q,1)
q=o
n=q==null?B.X(d,A.eu,p,p,p,20):q
n=B.a([n,A.ab,B.E(B.d(e,p,1,A.a2,p,p,p,A.TT,p,p,p),1)],x.p)
if(f!=null)n.push(B.aD(p,D.a0Q,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a7))
return B.aG(!1,A.a1,!0,u,B.aL(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.kV,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ah)},
a8a(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a8a=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fDM(),$async$a8a)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.eYo(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.aa(n)
if(r.c!=null)r.m(new C.eYp(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8a,v)},
adU(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$adU=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.eYr(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.eYs(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.eYt(r))
t=4
m=r.ch
k=r.CW
j=r.x
i=r.y
p=B.a([],x.aD)
h=r.e
if((h==null?null:h.b)!=null){h=h.b
h.toString
J.ci(p,h)}w=7
return B.b(C.fz3(q,r.cx,j,new C.b0A(r.z,r.Q,r.as,r.at),new C.eYu(r),i,m,p,k),$async$adU)
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
if(r.c!=null)r.m(new C.eYv(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adU,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aI(d,A.eE,g).w
g=B.aI(d,A.bV,g).w
w=B.av(B.p(h,h,A.f,h,h,new B.o(A.b2,h,h,B.n(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.av(B.aD(h,B.p(h,D.bLs,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.q,2),h,B.a([new B.ac(2,A.G,A.bl.j(0.5),A.J,24)],v),D.bV6,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eYW(i),h,h,h,h,h,h,!1,A.a7),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,D.a0Q,h,h,h,i.ax?h:new C.eYX(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbB0()
v=B.a([new B.ac(0,A.G,A.b6.j(0.45),A.J,10)],v)
s.push(B.hs(B.aG(!1,A.a1,!0,h,B.aL(!1,h,!0,B.p(h,B.X(i.e==null?A.vG:A.hn,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.vW,A.a6),h,40,h,h,h,h,h,40),A.cL,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cL,h,h,A.ah),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.d,h,h,h,h,h,2,B.bs(h,h,h,h,h,h,h,h,!0,new B.b4(4,B.n(16),new B.ay(A.c.j(0.1),1,A.q,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b4(4,B.n(16),D.aY_),h,h,h,h,h,h,h,h,A0.IS,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iX,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ai,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,h,D.aQ_,!0,A.a4,h,A.an,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eYY(i)
s=i.aWn(A.lq,q,r,i.gchD(),s)
r=i.z
r=B.E(i.ac1(new C.eZ_(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.v(B.a([s,A.am,B.B(B.a([r,A.bp,B.E(i.ac1(new C.eZ0(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gI(s)
p=i.y.length===0?h:new C.eZ1(i)
s=i.aWn(A.vD,r,p,i.gchL(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gI(o)
p=B.E(i.ac1(new C.eZ2(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gI(n)
o=B.a([w,A.aB,D.fp4,A.at,D.frT,A.by,u,A.O,D.fql,A.aB,v,A.by,B.B(B.a([q,A.av,B.E(B.v(B.a([s,A.am,B.B(B.a([p,A.bp,B.E(i.ac1(new C.eZ3(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.am,D.ftB],t)
w=i.w.a
if(w.length!==0){v=B.n(999)
u=B.I(D.bfI,A.q,1)
w=C.agA(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.S,new B.bI(A.a3,h,h,B.p(h,B.B(B.a([D.bMx,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.f8q,h,h,h),B.aL(!1,h,!0,D.e8v,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eZ4(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.Q,0,h,h),A.f,h,h,new B.o(D.b8Z,h,u,v,h,h,A.n),h,h,h,h,D.bqT,h,h,h),h)],t))}o.push(A.by)
o.push(D.ffZ)
o.push(A.O)
w=B.a([],t)
for(m=0;m<6;++m){l=D.d_Y[m]
v=i.ch===l?A.b6:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aA:A.bF,1,A.q,-1)
u=u?A.u:A.N
w.push(new B.bC(1,A.bh,new B.D(A.jl,B.aD(h,B.df(A.A,new B.y(""+l,h,new B.G(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.bc,new B.o(v,h,new B.bO(k,k,k,k),h,h,h,A.a6),A.eG,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eZ5(i,l),h,h,h,h,h,h,!1,A.a7),h),h))}o.push(B.B(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.by)
o.push(D.fya)
o.push(A.O)
o.push(B.cq(new C.eZ6(i)))
o.push(A.by)
o.push(D.fnb)
o.push(A.O)
w=B.a([i.b5N("auto","Let AI choose",A.dX,A.Q3)],t)
for(v=x.O,m=0;m<11;++m){j=D.w0[m]
u=j.d
w.push(i.b5N(j.a,j.b,j.c,B.a([B.b0(A.d.gI(u).a),B.b0(A.d.gI(u).b)],v)))}o.push(B.bY(A.bA,w,A.bq,8,8))
o.push(A.aP)
w=A.c.j(0.04)
v=B.n(16)
u=B.I(i.r?A.bl.j(0.5):A.bF,A.q,1)
o.push(B.p(h,B.iG(h,A.bl,h,h,h,new C.eYZ(i),D.bHH,D.fxq,h,D.fif,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aPe,h,h,h)],t))
o.push(A.by)
w=i.ax?h:i.gc7I()
v=B.fn(h,h,A.b6,A.b6.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.n(18),A.Y),h,h,h,h,h)
u=i.ax
t=u?D.eRh:A.Gn
o.push(new B.a7(h,54,B.lw(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.pd,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.p(h,B.bl(!0,B.c9(B.v(o,A.aj,h,A.e,A.j,0,A.p),A.r,h,A.y,h,A.vv,h,h,A.ag),!0,!1,A.af,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.aaP,h,h,h,h,h,h,h,h),h)},
bNq(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.eYw(this,p,d)
if(d===D.CF)return new C.aDp(p,o,q)
w=B.n(16)
v=p?E.vW:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.aA:A.bF,A.q,1)
s=B.X(p?A.ef:C.hFC(d),A.c,q,q,q,20)
r=C.hFD(d)
return B.aD(q,B.df(q,B.v(B.a([s,A.at,B.f6(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.eh)],x.p),A.m,q,A.b8,A.j,0,A.p),q,q,A.bc,new B.o(u,q,t,w,q,v,A.n),A.hy,q,64,q,A.hz,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a7)},
b5N(d,e,f,g){var w,v=null,u=this.CW===d,t=B.n(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bF
r=B.I(r,A.q,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a8(A.a3,A.a8,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aD(v,B.df(v,B.B(B.a([w,M.IJ,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a5,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v,v,A.bc,new B.o(s,v,r,t,v,v,A.n),A.eG,v,v,v,M.aiy,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eYL(this,d),v,v,v,v,v,v,!1,A.a7)}}
C.a03.prototype={
S(){return new C.aGR(new B.as(A.as,$.aw()))}}
C.aGR.prototype={
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
adV(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$adV=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.eYh(r))
w=1
break}B.eU()
r.m(new C.eYi(r))
t=4
q=C.i5Z(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.i5J(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.eYj(r,q))
w=1
break}k=r.c
if(k!=null)B.a6(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fYQ()
f=$.Cu.h(0,k.a)
o=f==null||J.cn(f)?null:J.fp(f)
if(o==null){r.m(new C.eYk(r))
w=1
break}n=C.i5H(o,r.a.c)
C.i5D(r.a.c.a)
$.fY6=!0
k=r.c
if(k!=null)B.a6(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.h0B(j)
h=C.h0C(r.a.c)
e=C.h0D(r.a.c)
w=7
return B.b(C.bBw(k,r.a.c.a,j,h,new C.eYl(r),i,e,a0),$async$adV)
case 7:m=a3
k=r.c
if(k!=null)B.a6(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.aa(a1)
if(r.c!=null)r.m(new C.eYm(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adV,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aI(d,A.eE,i).w
i=B.aI(d,A.bV,i).w
w=B.av(B.p(j,j,A.f,j,j,new B.o(A.b2,j,j,B.n(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.ams,A.f,j,j,D.b_c,j,34,j,j,j,j,j,34),A.av,D.byd],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Ar.a7C,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),k.d,j,j,j,j,j,2,B.bs(j,j,j,j,j,j,j,j,!0,new B.b4(4,B.n(16),new B.ay(A.c.j(0.1),1,A.q,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b4(4,B.n(16),As.aaj),j,j,j,j,j,j,j,j,A0.IS,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,D.aQ_,!0,A.a4,j,A.an,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cXj[q]
o=A.c.j(0.06)
n=k.e?j:new C.eYn(k,p)
r.push(B.mJ(j,o,new B.y(p,j,Ay.Tq,j,j,j,j,j,j,j,j,j),j,n,j,j,P.uZ,j))}w=B.a([w,A.aB,u,A.am,t,A.aB,s,A.S,B.bY(A.bA,r,A.bq,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aPe,j,j,j)],v))
w.push(A.aP)
u=k.e
t=u?j:k.gc7J()
s=B.n(18)
r=B.n(18)
u=u?B.a([A.bl.j(0.5),A.eF.j(0.5)],x.O):D.cvr
o=B.a([new B.ac(0,A.G,A.bl.j(0.35),A.cy,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.e8r:D.bM6
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aG(!1,A.a1,!0,j,B.aL(!1,s,!0,B.eF(B.B(B.a([n,A.av,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hF,j,j,j)],v),A.m,j,A.b8,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a8(A.a3,A.a8,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ah))
return new B.D(new B.Q(0,0,0,h.f.d),B.p(j,B.bl(!0,B.c9(B.v(w,A.aj,j,A.e,A.j,0,A.p),A.r,j,A.y,j,A.vv,j,j,A.ag),!0,!1,A.af,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.aaP,j,j,j,j,j,j,j,j),j)}}
C.b0A.prototype={}
C.aDp.prototype={
S(){return new C.bjx(null,null)}}
C.bjx.prototype={
gawM(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.pP,null,1,null,v)
w.cH(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gawM().q()
this.buV()},
B(d){var w=null,v=this.a.d
return B.aD(w,B.c6(this.gawM(),new C.edT(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a7)}}
C.bh4.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.d25[s]
p=q.a*v
q=q.b*u
$.W()
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=D.xm.j(0.25+r*0.6).gp(0)
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
C.arh.prototype={
a5(){return"NgmyTextCommand."+this.b}}
C.Zp.prototype={
S(){return new C.aAS()}}
C.aAS.prototype={
gai_(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.agN(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gA9(){var w=this.e
return w===$?this.e=C.h0B(this.a.c).t(0,D.CF):w},
a7Y(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7Y=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dii(s))
u=3
r=A.d.hr(D.w0,new C.dij(s))
q=B.dc(C.h0B(s.a.c),x.Q)
l=q
J.hF(l,D.CF)
p=l
if(s.gA9())J.ci(p,D.CF)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gA9()?" with Luxury FX":""
i=s.a
h=i.d
i=C.h0C(i.c)
g=C.h0D(s.a.c)
w=6
return B.b(C.bBw(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a7Y)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.agN(q,s.gai_())
f=q==null?null:q.b
n=f==null?s.gai_():f
if(!J.A(n,r.a)&&!s.gA9())throw B.V("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a6(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.aa(d)
if(s.c!=null)s.m(new C.dik(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a7Y,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.c:A.M,k=m?A.aS:A.ak,j=m?A.M:A.c,i=B.n(28),h=B.I(m?A.bF:A.aL,A.q,1),g=x.p,f=B.E(B.v(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bD,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.din(d)
e=B.B(B.a([f,B.aH(n,n,n,n,B.X(A.cD,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.w0[w]
u=o.gai_()
t=o.f?n:new C.dio(o,v)
f.push(new C.brZ(v,u===v.a,t,n))}f=B.m1(1.25,f,3,10,10,n,A.dR,!0)
u=B.n(18)
t=o.gA9()?D.bXS:n
if(o.gA9())s=n
else s=m?A.bo:A.bK
r=B.X(A.dX,o.gA9()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gA9()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.v(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gA9()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gA9()
f=B.a([f,A.aB,B.p(n,B.B(B.a([r,A.av,q,B.aaa(n,A.c,n,A.bL,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dip(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,I.ahi,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.S,B.d(u,n,n,n,n,n,n,D.f8J,n,n,n)],g))
f=B.c9(B.v(f,A.F,n,A.e,A.j,0,A.p),A.r,n,A.y,n,A.Fi,n,n,A.ag)
u=o.f?n:o.gbA_()
t=B.bn(A.K,n,n,n,n,n,A.af,n,new B.b7(B.n(16),A.Y),n,n,n)
s=B.n(16)
return B.bl(!0,B.p(n,B.v(B.a([new B.D(D.btR,e,n),new B.dq(1,A.cn,f,n),new B.D(A.Fh,new B.a7(1/0,50,B.bG(B.eF(B.av(o.f?A.rM:D.fpy,n,n,n),n,new B.o(n,n,n,s,n,D.bWq,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.Q,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.tI,n,n,n,n),!0,!1,A.af,!0,!0)}}
C.brZ.prototype={
B(d){var w=null,v=this.c,u=A.d.gI(v.d),t=B.n(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.q,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bI(A.lb,w,w,B.X(v.c,A.ad,w,w,w,18),w),new B.bI(A.lB,w,w,B.d(v.b,w,w,w,w,w,w,D.f8H,w,w,w),w)],x.p)
if(q)v.push(D.aW3)
return B.aD(w,B.df(w,new B.an(A.W,w,A.aa,A.r,v,w),w,w,A.bc,new B.o(w,w,p,t,s,new B.a8(A.ax,A.aC,A.x,r,w,w),A.n),A.eG,w,w,w,A.cp,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a7)}}
C.edQ.prototype={
aEp(d,e,f){return e+"@"+A.a.aT(A.o.fU(f==null?this.a.c:f,16),8,"0").toUpperCase()},
ws(d,e){return this.aEp(0,e,null)}}
C.aLq.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gby())
w.a8$=null
w.a2()},
aS(){this.b_()
this.aY()
this.bz()}}
C.b0w.prototype={
B(d){var w,v,u=null,t=C.h_r(this.c)
if(t==null)w=D.blV
else{w=B.aI(d,u,x.w).w.cHR(D.bqp,D.eQv)
v=this.d
w=B.tc(B.e1(B.anD(!1,t,!1,v,!1,390),!v,u),w)}return B.f6(A.A,new B.a7(416,870,new C.bla(w,u),u),A.f,A.du)}}
C.bla.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.ddD[w]
u=new B.aT(3,3)
s.push(new B.cL(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bp(u,u,u,u),t,D.aom,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.deQ[w]
u=new B.aT(3,3)
s.push(new B.cL(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bp(u,u,u,u),t,D.aom,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bZ(0,B.c0(t,new B.o(t,t,t,B.n(64),D.cNh,D.bUP,A.n),A.be),0,0,0))
s.push(B.bZ(3,B.c0(t,new B.o(A.w,t,t,B.n(61),t,t,A.n),A.be),3,3,3))
s.push(B.bZ(13,B.bw(B.n(51),B.el(this.c,A.w,!0),A.aq),13,13,13))
u=B.n(20)
s.push(B.ao(t,B.av(B.p(D.aWf,B.p(t,t,A.f,t,t,D.b_v,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bZ(13,B.e1(B.bw(B.n(51),D.bnt,A.aq),!0,t),13,13,13))
s.push(B.ao(22,B.e1(B.av(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.n(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.W,t,A.aa,A.f,s,t)}}
C.lb.prototype={
px(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cD(),f=C.cD(),e=m.r
f=C.ep(A.L,!1,e.l(),A.aD,"",k,42,A.bn,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bf,j,2,"Your Presentation Title",0,0,"",D.mG,D.cQ,0.84,0.08,0.26)
w=C.cD()
v=m.w
w=C.ep(A.L,!1,v.l(),A.aD,"",k,20,A.bn,A.a5,"",0.12,w,l,"","",0,!1,"",0,D.bf,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dd,D.cQ,0.76,0.12,0.56)
u=C.cD()
t=m.d
s=x.u
t=C.rs(i,l,0,0,B.a([f,w,C.ep(A.bg,!1,4279310375,A.aD,"",t.j(0.8).l(),24,A.bn,A.a5,"",0.006,u,l,"","",0,!1,"",0,D.fs,t.l(),3,"",0,0,"",D.cm,D.f1,0.3,0.35,0.72)],s),C.cD(),D.mF,"","","Welcome",D.dd)
u=C.cD()
u=C.ep(A.bg,!1,e.l(),A.aD,"",k,34,A.bn,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bf,j,2,"Agenda",0,0,"",D.cm,D.cQ,0.84,0.08,0.08)
w=C.cD()
w=C.rs(i,l,0,0,B.a([u,C.ep(A.bg,!0,v.l(),A.aD,"",k,22,A.bn,A.a5,"",0.6,w,l,"","",0,!1,"",0,D.bf,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.uo,D.cQ,0.8,0.1,0.26)],s),C.cD(),D.mF,"","","Agenda",D.dd)
u=C.cD()
u=C.ep(A.bg,!1,e.l(),A.aD,"",k,32,A.bn,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bf,j,2,"Main Idea",0,0,"",D.cm,D.cQ,0.84,0.08,0.08)
f=C.cD()
f=C.rs(i,l,0,0,B.a([u,C.ep(A.bg,!0,v.l(),A.aD,"",k,21,A.bn,A.a5,"",0.62,f,l,"","",0,!1,"",0,D.bf,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cm,D.cQ,0.8,0.1,0.26)],s),C.cD(),D.mF,"","","Key Point 1",D.dd)
u=C.cD()
u=C.ep(A.bg,!1,e.l(),A.aD,"",k,30,A.bn,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bf,j,2,"Compare & Contrast",0,0,"",D.cm,D.cQ,0.84,0.08,0.08)
r=C.cD()
r=C.ep(A.bg,!0,v.l(),A.aD,"",k,18,A.bn,A.a5,"",0.62,r,l,"","",0,!1,"",0,D.bf,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cm,D.cQ,0.4,0.08,0.24)
q=C.cD()
q=C.rs(i,l,0,0,B.a([u,r,C.ep(A.bg,!0,v.l(),A.aD,"",k,18,A.bn,A.a5,"",0.62,q,l,"","",0,!1,"",0,D.bf,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cm,D.cQ,0.4,0.52,0.24)],s),C.cD(),D.mF,"","","Key Point 2",D.dd)
r=C.cD()
r=C.ep(A.L,!1,e.l(),A.aD,"",k,48,A.bn,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bf,j,2,h,0,0,"",D.dd,D.cQ,0.8,0.1,0.32)
e=C.cD()
p=C.Bx(l,l,l,l,D.CB,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rs(i,l,0,0,B.a([r,C.ep(A.L,!1,v.l(),A.aD,"",k,22,A.bn,A.a5,"",0.1,e,l,"","",0,!1,"",0,D.bf,j,2,"Questions?",0,0,"",D.cm,D.cQ,0.7,0.15,0.58)],s),C.cD(),D.mF,"","",h,D.dd)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.L)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Eu.prototype={
bC(d){return this.e.$1(d)}}
C.eu.prototype={}
C.j_.prototype={}
C.El.prototype={
gaKc(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.agA(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a3c(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.El(v,u,t,d==null?w.d:d)},
Fx(d){return this.a3c(null,d,null,null)},
aDa(d){return this.a3c(null,null,null,d)},
cHP(d,e){return this.a3c(d,e,null,null)},
baV(d){return this.a3c(d,null,null,null)},
bb1(d){return this.a3c(null,null,d,null)}}
C.Nf.prototype={
S(){return new C.biU(new B.eS(0,$.aw()),null,null)}}
C.biU.prototype={
a_(){var w,v=this
v.a1()
w=v.qy(new C.dTH(v))
v.e!==$&&B.aP()
v.e=w
if(v.a.e)w.iW(0)
else v.d.sp(0,3.2)},
q(){var w=this.e
w===$&&B.c()
w.q()
w=this.d
w.T$=$.aw()
w.P$=0
this.bun()},
B(d){var w=C.agA(this.a.c.a)
if(w==null)w=A.d.gI(D.GI)
return B.cq(new C.dTG(this,w,C.hfy(this.a.c.d)))}}
C.bqy.prototype={
B(d){return B.nO(A.Vd,this.e,new C.eXv(this,A.k.E(this.d*0.35,1.6)-0.3))}}
C.bdY.prototype={
a4(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aS3(d,e,v)
break
case"confetti":w.bGw(d,e,v)
break
case"crown":w.bI8(d,e,v)
break
case"aurora":w.bB4(d,e,v)
break
case"champagne":w.bEl(d,e,v)
break
case"diamonds":w.bKj(d,e,v)
break
case"starburst":w.cuZ(d,e,v)
break
case"balloons":w.bBi(d,e,v)
break
case"galaxy":w.bPc(d,e,v)
break
case"redcarpet":w.clW(d,e,v)
break
case"coins":w.bFT(d,e,v)
break
case"lanterns":w.bZo(d,e,v)
break
case"hearts":w.bX0(d,e,v)
break
case"petals":w.ch4(d,e,v)
break
case"butterflies":w.bDl(d,e,v)
break
case"neon":w.c2k(d,e,v)
break
case"disco":w.bKu(d,e,v)
break
case"sunrise":w.cwy(d,e,v)
break
case"pearls":w.cg8(d,e,v)
break
case"snow":w.cuE(d,e,v)
break
case"laurel":w.bZu(d,e,v)
break
case"ribbons":w.cou(d,e,v)
break
case"kente":w.bZc(d,e,v)
break
case"trophy":w.cAc(d,e,v)
break
case"shooting":w.css(d,e,v)
break
case"bokeh":w.bBD(d,e,v)
break
case"orbits":w.cdN(d,e,v)
break
case"flowers":w.bOt(d,e,v)
break
case"music":w.c22(d,e,v)
break
case"mandala":w.c0u(d,e,v)
break
case"sparklers":w.cuN(d,e,v)
break
case"city":w.bFa(d,e,v)
break}},
rw(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.W()
v=B.N()
v.r=g.j(A.k.D(h,0,1)).gp(0)
v.a=A.nD
u=new B.aO(w.r,A.ao,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.F(new B.b5(w,s))
u.F(new B.cV(w,t,w+f,t))
u.F(new B.cV(w,t,w,t+f))
u.F(new B.cV(w,t,w-f,t))
u.F(new B.cV(w,t,w,s))
u.F(new B.bF())
d.aP(u,v)
d.af(e,f*0.18,v)},
lL(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cX(q,v)*2.5)+C.cX(q,u)*6.28)+1)/2
this.rw(d,new B.u(C.cX(q,t)*o,C.cX(q,s)*n),m*(0.006+0.014*C.cX(q,r))*(0.5+p),h,p*p)}},
aS3(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lL(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bL,A.aF],w),B.a([A.is,A.bC],w),B.a([A.ev,A.aR],w),B.a([A.c,A.aw],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bv(k/2.8)
i=A.k.E(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cX(h,1))
f=g+c0*(C.cX(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cX(h,3))
d=v[Math.abs(A.o.E(h,4))]
if(i<0.22){a0=B.lh(new B.u(g,c1),new B.u(f,e),A.ct.az(0,i/0.22))
a0.toString
$.W()
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.saq(new B.a8(A.a3,A.a8,A.x,B.a([d[0].j(0),d[0]],w),null,null).av(0,B.ru(new B.u(g,c1),a0)))
a1.c=n
a1.d=A.bQ
a2=B.lh(new B.u(g,c1),a0,0.75)
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
a6=A.ct.az(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.V(q))
a2=C.cX(h,4)
if(a5<0.15){a4=1-a5/0.15
$.W()
a8=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a8.r=d[0].j(0.5*a4).gp(0)
a8.z=new B.hw(A.G,o)
a3=a8.H()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cX(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cX(h,b1+60))
b4=f+Math.cos(b2)*b3
b5=e+Math.sin(b2)*b3+a9
b6=Math.cos(b2)
b7=Math.sin(b2)
b8=(b1&1)===0?d[0]:d[1]
$.W()
b9=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
b9.r=b8.j(a8).gp(0)
b9.c=u
b9.d=A.bQ
b9.a=A.nD
a3=b9.H()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cX(h,b1+120)>0.5)this.rw(c3,new B.u(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bGw(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.E(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.W(),a0=B.N()
a0.saq(new B.a8(A.ax,A.aC,A.x,D.d8p,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).av(0,new B.a9(0,0,f,e)))
a1.aZ(new B.a9(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.E(a3*(h*(0.08+0.12*C.cX(u,1)))+C.cX(u,2)*w,w)
s=C.cX(u,3)
r=Math.sin(a3*(0.8+C.cX(u,4))+u)
q=h*(0.012+0.012*C.cX(u,5))
p=Math.cos(a3*(2+3*C.cX(u,6))+u)
o=D.Pw[A.o.D(A.k.bv(C.cX(u,7)*5),0,4)]
J.by(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cX(u,8)*2)+u)*180/3.141592653589793,0,0)
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
f.drawPath((t==null?m.e=new B.cE(m.gbM().a.snapshot()):t).a,k)
k.delete()}else{t=B.cg(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.H()
f.drawRect(B.c_(t),k)
k.delete()}f.restore()}this.lL(a1,a2,a3,25,A.bL,30)},
bI8(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.u(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.W()
n=B.a([],r)
m=new B.aO(o.r,A.ao,a4,a4,n)
n.push(new B.b5(a5,a6))
o=p-0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bF())
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(new B.bT(A.A,0.5,A.x,a4,0,B.a([A.bL.j(0.22),D.baO],v),a4,a4).av(0,B.bU(w,u)))
l=o.H()
o=m.gbM().a.snapshot()
t.drawPath((m.e=new B.cE(o)).a,l)
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
i.F(new B.bF())
h=A.k.D(b0/1.8,0,1)
s=h>=1
if(s){n=B.N()
n.saq(new B.a8(A.b_,A.b4,A.x,D.d7b,a4,a4).av(0,new B.a9(a5,a6,o,v)))
a8.aP(i,n)
for(v=[D.enz,D.ehe,D.ewM],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
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
g.r=A.hY.gp(0)
l=g.H()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.x3(i),u=B.a([],x.X),o=new B.vx(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b8(B.jW(y.M));--f
o.jr()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aO(n,v.b,a4,new B.cC([new B.Hd(o,f),0,d*h,!0]),B.a([],r))
f=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
f.b=A.ae
f.c=g
f.e=A.fC
f.r=A.bL.gp(0)
l=f.H()
f=d.gbM().a.snapshot()
t.drawPath((d.e=new B.cE(f)).a,l)
l.delete()}if(s){a3=A.k.E(b0*0.5,1)
this.rw(a8,new B.u(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lL(a8,a9,b0,45,A.bL,40)},
bB4(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lL(a8,a9,b0,60,A.c,50)
w=[D.eHM,D.eHu,D.eHo,D.eIK]
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
n.a=A.nD
n.z=new B.hw(A.G,s)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cE(h.gbM().a.snapshot()):n).a,a2)
a2.delete()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.nD
n.z=new B.hw(A.G,v)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cE(h.gbM().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.E(t*(0.05+0.06*C.cX(a4,1))+C.cX(a4,2)*a3,a3)
r=C.cX(a4,3)
q=Math.sin(b0+a4)
p=C.cX(a4,4)
$.W()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.vg.j(0.4+0.5*C.cX(a4,5)).gp(0)
n.a=A.nD
a2=n.H()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bEl(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.W(),a0=B.N()
a0.saq(new B.bT(A.A,0.5,A.x,l,0,B.a([A.hI.j(0.25+0.1*h),D.WZ],x.O),l,l).av(0,B.bU(new B.u(g,f),e)))
a1.af(new B.u(g,f),e,a0)
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
a0.r=D.Pw[A.o.E(w,4)].j(0.7).gp(0)
p=a0.H()
a0=u.e
g.drawPath((a0==null?u.e=new B.cE(u.gbM().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.E(a3*(i*(0.07+0.12*C.cX(w,1)))+C.cX(w,2)*o,o)
r=k*(0.1+0.8*C.cX(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cX(w,4))
if(n<f){this.rw(a1,new B.u(r,n),m*2.4,A.bL,A.k.D(n/f,0,1))
continue}$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.Ax.j(0.75).gp(0)
p=d.H()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.8).gp(0)
p=t.H()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bKj(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lL(a9,b0,b1,30,A.ld,60)
for(w=Math.max(4,A.k.V(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cX(p,1))
n=a7+o*4
m=A.k.E(t*(0.04+0.06*C.cX(p,2))+C.cX(p,3)*n,n)-o*2
l=C.cX(p,4)*a6+Math.sin(s+p)*a8*0.02
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
g.push(new B.bF())
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.saq(new B.a8(A.ax,A.aC,A.x,D.d35,a5,a5).av(0,B.cg(A.J,k*1.2,o)))
a2=g.H()
g=f.gbM().a.snapshot()
v.drawPath((f.e=new B.cE(g)).a,a2)
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
if(a4>0.85)this.rw(a9,new B.u(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
cuZ(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
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
o.push(new B.bF())
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bL.j(r?0.12:0.07).gp(0)
m=p.H()
r=n.gbM().a.snapshot()
w.drawPath((n.e=new B.cE(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.E(a0+l*0.6,1.8)/1.8
$.W()
u=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
r=1-k
u.c=v*r
u.r=A.bL.j(r*0.6).gp(0)
m=u.H()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bv(a0/2.4)
k=A.k.E(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cX(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bmR.az(0,k)*(0.5+0.5*C.cX(t,v)))
this.rw(d,new B.u(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cX(t,3)),D.Pw[A.o.D(A.k.bv(C.cX(t,4)*5),0,4)],u)}},
bBi(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cX(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.E(q*(0.05+0.05*C.cX(o,2))+C.cX(o,3)*m,m)
j=C.cX(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.avw[A.o.E(o,6)]
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
u.drawPath((d==null?f.e=new B.cE(f.gbM().a.snapshot()):d).a,a1)
a1.delete()
a2=B.cg(new B.u(j,k),n*2.3,l)
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d=B.aq(i,A.w,0.35)
d.toString
l.saq(new B.bT(D.aWi,0.9,A.x,a3,0,B.a([A.c,i,d],t),V.avn,a3).av(0,a2))
a1=l.H()
u.drawOval(B.c_(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aO(g.r,A.ao,a3,a3,l)
d=n*0.12
l.push(new B.b5(j-d,h))
l.push(new B.ap(j+d,h))
l.push(new B.ap(j,k+n))
l.push(new B.bF())
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=B.aq(i,A.w,0.3).gp(0)
a1=l.H()
l=g.gbM().a.snapshot()
u.drawPath((g.e=new B.cE(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.E(q*(0.1+0.1*C.cX(o,11))+C.cX(o,12)*m,m)
r=C.cX(o,13)
J.by(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.cg(A.J,t,v)
$.W()
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=D.avw[A.o.E(o,6)].j(0.85).gp(0)
a1=r.H()
u.drawRect(B.c_(s),a1)
a1.delete()
u.restore()}},
bPc(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.u(a8,a9)
this.lL(b1,b2,b3,50,A.c,70)
for(w=[D.eHU,D.eHA,D.eHG],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.W()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.saq(new B.bT(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).av(0,B.bU(new B.u(r,m),l)))
j=k.H()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.V(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.E(i,3)
g=C.cX(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cX(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.aq(A.bL,A.eA,g)
k.toString
d=C.cX(i,3)
$.W()
a0=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=k.j(0.5+0.5*C.cX(i,4)).gp(0)
a0.a=A.nD
j=a0.H()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.W()
a9=B.N()
a9.saq(new B.bT(A.A,0.5,A.x,a4,0,B.a([A.Ax.j(0.55),D.aeV],u),a4,a4).av(0,B.bU(b0,a8)))
b1.af(b0,a8,a9)
a1=A.k.E(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bv(b3/3.5)
a3=new B.u(a5*(0.1+0.5*C.cX(a2,9)),a6*0.1*C.cX(a2,8))
a5=B.lh(a3,a3.ad(0,new B.u(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.lh(a3,a5,0.6)
a6.toString
a8=B.N()
a8.saq(new B.a8(A.a3,A.a8,A.x,B.a([A.c.j(0),A.c],u),a4,a4).av(0,B.ru(a3,a5)))
a8.c=a7*0.005
a8.d=A.bQ
b1.bE(a6,a5,a8)}},
clW(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
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
n.push(new B.bF())
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(new B.bT(A.A,0.5,A.x,b5,0,B.a([A.Ax.j(0.28),D.aeV],w),b5,b5).av(0,B.bU(new B.u(q,u),t)))
o.a=A.nD
l=o.H()
q=m.gbM().a.snapshot()
v.drawPath((m.e=new B.cE(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.eq:A.eP)
a9=$.W()
b0=B.a([],s)
m=new B.aO(a9.r,A.ao,b5,b5,b0)
b0.push(new B.b5(a5?0:b6,0))
b0.push(new B.ap(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.cV(a9,k,a5?g:a1,b7))
b0.push(new B.ap(a5?0:b6,b7))
b0.push(new B.bF())
a9=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a9.saq(new B.a8(A.a3,A.a8,A.x,a7,b5,b5).av(0,new B.a9(a6,0,a6+i,j)))
l=a9.H()
a9=m.gbM().a.snapshot()
v.drawPath((m.e=new B.cE(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
b1.r=A.hI.gp(0)
b1.c=o
b1.d=A.bQ
l=b1.H()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aO($.W().r,A.ao,b5,b5,B.a([],s))
w=b7*0.78
b2.F(new B.b5(b6*0.42,w))
b2.F(new B.ap(b6*0.58,w))
b2.F(new B.ap(b6*0.8,b7))
b2.F(new B.ap(b6*0.2,b7))
b2.F(new B.bF())
v=B.N()
v.saq(D.bWk.av(0,new B.a9(0,w,0+b6,w+b7*0.22)))
b9.aP(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.E(b7*(0.05+0.07*C.cX(r,1))+C.cX(r,2)*b3,b3)
u=C.cX(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rw(b9,new B.u(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cX(r,4)),A.bL,0.3+0.7*((q+1)/2))}},
bFT(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cX(t,1))
r=h+s*4
q=s*2
p=A.k.E(u*(0.12+0.12*C.cX(t,2))+C.cX(t,3)*r,r)-q
o=C.cX(t,4)*i
n=Math.cos(f*(2+3*C.cX(t,5))+t)
m=Math.abs(n)
l=B.cg(new B.u(o,p),q,q*A.k.D(m,0.12,1))
$.W()
q=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
q.saq(new B.a8(A.ax,A.aC,A.x,n>0?D.di3:D.cB8,null,null).av(0,l))
k=q.H()
v.drawOval(B.c_(l),k)
k.delete()
q=-(s*0.22)
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=Math.max(0.6,s*0.08)
j.r=D.bjL.gp(0)
k=j.H()
v.drawOval(B.c_(new B.a9(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rw(d,new B.u(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lL(d,e,f,30,A.bL,110)},
bZo(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lL(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cX(p,1))
n=a1+o*4
m=a1+o*2-A.k.E(t*(0.03+0.04*C.cX(p,2))+C.cX(p,3)*n,n)
l=C.cX(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.W()
h=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
h.saq(new B.bT(A.A,0.5,A.x,d,0,B.a([W.Xb.j(0.45*k),D.adK],u),d,d).av(0,B.bU(new B.u(l,m),j)))
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
j.push(new B.bF())
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i=B.aq(D.baZ,A.c,0.2*k)
i.toString
j.saq(new B.a8(A.b_,A.b4,A.x,B.a([D.bfk,i],u),d,d).av(0,B.cg(new B.u(l,m),o*1.4,o)))
g=j.H()
j=f.gbM().a.snapshot()
v.drawPath((f.e=new B.cE(j)).a,g)
g.delete()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(k).gp(0)
g=j.H()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bX0(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cX(p,1))
n=a1+o*4
m=A.k.E(s*(0.05+0.06*C.cX(p,2))+C.cX(p,3)*n,n)
l=C.cX(p,4)
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
l.push(new B.pB(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.pB(m,g,o*1.8,h,0,m))
l.push(new B.bF())
f=D.cVf[A.o.E(p,5)]
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l=B.aq(f,A.w,0.25)
l.toString
m.saq(new B.bT(A.t_,0.5,A.x,d,0,B.a([A.c,f,l],u),I.a1Z,d).av(0,B.bU(A.J,o*1.4)))
e=m.H()
m=i.gbM().a.snapshot()
v.drawPath((i.e=new B.cE(m)).a,e)
e.delete()
v.restore()}this.lL(a3,a4,a5,30,A.is,130)},
ch4(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cX(q,1))
o=g+p*4
n=A.k.E(t*(0.05+0.06*C.cX(q,2))+C.cX(q,3)*o,o)
m=C.cX(q,4)
l=Math.sin(s+q*0.7)
J.by(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cX(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.W()
m=B.a([],u)
k=new B.aO(n.r,A.ao,i,i,m)
n=-p
m.push(new B.b5(0,n))
l=n*0.2
m.push(new B.cV(p,l,0,p))
m.push(new B.cV(n,l,0,n))
m.push(new B.bF())
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
m=(q&1)===0?D.cvq:D.d4l
n.saq(new B.a8(A.a3,A.a8,A.x,m,i,i).av(0,B.bU(A.J,p)))
j=n.H()
n=k.gbM().a.snapshot()
v.drawPath((k.e=new B.cE(n)).a,j)
j.delete()
v.restore()}this.lL(d,e,a0,25,A.bL,140)},
bDl(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lL(b0,b1,b2,40,A.bL,150)
for(w=Math.max(4,A.k.V(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cX(r,1))
p=Math.sin(b2*(0.15+0.1*C.cX(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cX(r,3))+r*1.3)
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
a3.push(new B.pB(f,e,l,d,h,0))
a3.push(new B.pB(q,h,g,q,0,h))
a3.push(new B.bF())
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.saq(new B.a8(A.a3,A.a8,A.x,i?D.d44:D.d6G,a6,a6).av(0,new B.a9(0,m,k,j)))
a5=a2.H()
a2=a4.gbM().a.snapshot()
v.drawPath((a4.e=new B.cE(a2)).a,a5)
a5.delete()
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.b=A.ae
a2.c=Math.max(0.6,o)
a2.r=D.AF.gp(0)
a5=a2.H()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cE(a4.gbM().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.W()
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=D.bj3.gp(0)
p.c=q*0.1
p.d=A.bQ
a5=p.H()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c2k(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.u(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.E(w+t/4,1)
r=f*(0.2+0.7*s)
$.W()
q=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=v
q.r=D.awB[t].j((1-s)*0.9).gp(0)
q.z=new B.hw(A.G,v)
p=r*0.3
p=B.bx(B.cg(e,r,r*1.6),new B.aT(p,p))
o=q.H()
u.drawRRect(B.er(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cX(m,1)*4)+m)))
k=D.awB[A.o.E(m,4)]
j=m*n+h
i=g-l
i=B.bx(new B.a9(j,i,j+w,i+l),new B.aT(v,v))
$.W()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=k.j(0.85).gp(0)
j.z=new B.hw(A.aa7,p)
o=j.H()
u.drawRRect(B.er(i),o)
o.delete()}},
bKu(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.u(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cX(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cX(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bL,A.nI,A.dv][A.o.E(p,4)]
j=C.cX(p,3)
$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=k.j(0.75).gp(0)
i.a=A.nD
i.z=new B.hw(A.G,r)
h=i.H()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.W()
t=B.N()
t.r=A.aA.gp(0)
t.c=1.2
a3.bE(new B.u(a0,0),new B.u(a0,w-u),t)
t=B.N()
t.r=A.dz.gp(0)
a3.af(v,u,t)
J.by(q.save())
a1=new B.aO(a1.r,A.ao,null,null,B.a([],x.v))
a1.F(new B.k1(B.bU(v,u)))
a3.qv(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.E(a1,g)
i=Math.sin(e*1.7+l+s)
$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=B.aq(A.bk,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.H()
q.drawRect(B.c_(new B.a9(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.rw(a3,v.ad(0,new B.u(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cwy(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.ct.az(0,A.k.D(a4/3,0,1))),a1=new B.u(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.W()
q=B.a([],u)
p=new B.aO(r.r,A.ao,h,h,q)
q.push(new B.b5(d,a0))
r=s-0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bF())
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.bL.j(0.1).gp(0)
o=r.H()
r=p.gbM().a.snapshot()
w.drawPath((p.e=new B.cE(r)).a,o)
o.delete()}d=e*0.5
$.W()
a0=B.N()
a0.saq(new B.bT(A.A,0.5,A.x,h,0,B.a([D.b7_.j(0.6),D.adK],x.O),h,h).av(0,B.bU(a1,d)))
a2.af(a1,d,a0)
a0=e*0.2
d=B.N()
d.saq(D.eeO.av(0,B.bU(a1,a0)))
a2.af(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.E(d*(1+t*0.3)+C.cX(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(0.18).gp(0)
i=B.cg(new B.u(l,k),r,u)
o=j.H()
w.drawOval(B.c_(i),o)
o.delete()
i=B.cg(new B.u(l+q,k-n),r,m)
o=j.H()
w.drawOval(B.c_(i),o)
o.delete()}this.lL(a2,a3,a4,20,A.hY,180)},
cg8(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
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
r=new B.bF()
q.push(r)
q=p.f
if(q!=null)r.bC(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.W()
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=B.aq(A.cA,A.j9,s/3).j(0.55).gp(0)
k=r.H()
r=p.e
w.drawPath((r==null?p.e=new B.cE(p.gbM().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cX(i,1))
g=d-A.k.E(u*(0.04+0.05*C.cX(i,2))+C.cX(i,3)*j,j)
n=C.cX(i,4)*e+Math.sin(a3+i)*a0*0.02
$.W()
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.saq(new B.bT(An.po,0.5,A.x,f,0,D.da0,f,f).av(0,B.bU(new B.u(n,g),h)))
k=t.H()
w.drawCircle(n,g,h,k)
k.delete()}this.lL(a1,a2,a3,25,A.c,190)},
cuE(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cX(r,1))
p=f+q*4
o=A.k.E(u*(0.03+0.05*C.cX(r,2))+C.cX(r,3)*p,p)
n=C.cX(r,4)
m=Math.sin(t+r)
$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.j(0.6+0.4*C.cX(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bQ
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
h.delete()}v.restore()}this.lL(d,a0,a1,40,A.ev,200)},
bZu(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
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
g=B.cg(new B.u(p,0),q,r)
$.W()
f=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
f.saq(D.bW7.av(0,new B.a9(0,o,n,m)))
e=f.H()
s.drawOval(B.c_(g),e)
e.delete()
s.restore()}}$.W()
a0=B.N()
a0.b=A.ae
a0.c=a2*0.003
a0.r=D.bbd.gp(0)
a3.af(w,v*1.08,a0)
d=a5*0.8
this.rw(a3,w.ad(0,new B.u(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lL(a3,a4,a5,40,A.bL,210)},
cou(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hI,A.hY],a6),B.a([A.oD,A.is],a6),B.a([A.aE,A.eA],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bS<ak.E>"),q=s.k("ak.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.W()
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
j.e=null}i.push(new B.u(e,d+a0))}for(l=new B.dz(i,s),l=new B.bS(l,l.gM(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.ap(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.bC(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bF()
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
l.saq(new B.a8(A.a3,A.a8,A.x,B.a([h,k[1],h],a6),I.awd,new B.mo(w)).av(0,new B.a9(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.H()
l=j.e
t.drawPath((l==null?j.e=new B.cE(j.gbM().a.snapshot()):l).a,a2)
a2.delete()}this.lL(a8,a9,b0,40,A.c,220)},
bZc(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.E(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.E(A.k.bv(g/t),5)
a1=g+t
$.W()
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a3=Math.abs(a0)
a2.r=D.a21[a3].gp(0)
a4=a2.H()
s.drawRect(B.c_(new B.a9(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a5.r=D.a21[A.o.E(a3+2,5)].gp(0)
a4=a5.H()
s.drawRect(B.c_(new B.a9(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.E(n*(0.04+0.05*C.cX(a0,1))+C.cX(a0,2)*a6,a6)
v=C.cX(a0,3)
t=C.cX(a0,4)
this.rw(b1,new B.u(v*a7,l-a8),a9*(0.01+0.012*t),D.a21[A.o.E(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cAc(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.W()
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.c=v
p.r=A.bL.j(0.06).gp(0)
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
l.F(new B.cV(w,r,p,k))
w=a2+m*0.95
l.F(new B.ap(p,w))
p=n*0.3
j=a2+m
l.F(new B.ap(a1+p,j))
l.F(new B.ap(a1-p,j))
q=a1-q
l.F(new B.ap(q,w))
l.F(new B.ap(q,k))
l.F(new B.cV(v,r,v,a2))
l.F(new B.bF())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.cg(new B.u(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=q
d.r=A.aw.gp(0)
o=d.H()
u.drawArc.apply(u,[B.c_(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.N()
a1.saq(new B.a8(A.a3,A.a8,A.x,D.dcm,A.avD,null).av(0,new B.a9(v,a2,r,j)))
a4.aP(l,a1)
a0=A.k.E(a6*0.6,1.4)
if(a0<1)this.rw(a4,new B.u(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bGx(a4,a5,a6,60)},
bGx(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.E(k*(0.1+0.1*C.cX(p,31))+C.cX(p,32)*v,v)
n=C.cX(p,33)
J.by(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.cg(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.W()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.Pw[A.o.E(p,5)].gp(0)
m=n.H()
u.drawRect(B.c_(o),m)
m.delete()
u.restore()}},
css(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lL(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cX(o,1)*1.6
m=A.k.E(a2+C.cX(o,2)*n,n)/n
l=e*(C.cX(o*7+A.k.bv((a2+C.cX(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.u(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.W()
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.saq(new B.a8(A.a3,A.a8,A.x,B.a([A.c.j(0),A.bL],s),null,null).av(0,B.ru(new B.u(l,h),i)))
g.c=r
g.d=A.bQ
f=g.H()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rw(a0,i,p,A.c,1-m)}},
bBD(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cX(r,1))
p=A.k.E(C.cX(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.E(C.cX(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.W()
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l=A.o.E(r,5)
m.r=D.ay6[l].j(n).gp(0)
m.a=A.nD
m.z=new B.hw(A.G,q*0.12)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=Math.max(0.6,q*0.05)
m.r=D.ay6[l].j(n*1.4).gp(0)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()}},
cdN(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.by(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.cg(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.W()
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=u
o.r=A.bL.j(0.45).gp(0)
n=o.H()
w.drawOval(B.c_(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.hY.gp(0)
n=k.H()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.hI.j(0.4).gp(0)
k.z=new B.hw(A.G,r)
n=k.H()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lL(d,e,f,45,A.bL,270)},
bOt(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.E(o,4)
m=C.cX(o,1)
A:{if(0===n){l=new B.u(m*a2,p)
break A}if(1===n){l=new B.u(m*a2,q)
break A}if(2===n){l=new B.u(r,m*a3)
break A}l=new B.u(s,m*a3)
break A}k=A.k.E(a7+C.cX(o,2)*4,4)/4
j=A.ew.az(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cX(o,3))*(j*i)
if(h<=0.5)continue
g=D.d1i[A.o.E(o,5)]
J.by(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.cg(new B.u(0,l),i,j)
$.W()
a0=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.saq(new B.a8(A.b_,A.b4,A.x,B.a([A.c,g],u),null,null).av(0,B.cg(new B.u(0,l),f,h)))
a1=a0.H()
v.drawOval(B.c_(d),a1)
a1.delete()}$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.hI.gp(0)
a1=l.H()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lL(a5,a6,a7,30,A.hY,280)},
c22(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.E(t+n/4,1)
l=B.bU(new B.u(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.W()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=v
j.r=D.auJ[n].j((1-m)*0.8).gp(0)
i=j.H()
u.drawArc.apply(u,[B.c_(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.E(v*(0.06+0.06*C.cX(g,1))+C.cX(g,2)*h,h)
e=C.cX(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cX(g,4))
a0=D.auJ[A.o.E(g,4)]
$.W()
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=a0.gp(0)
J.by(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.cg(A.J,d,d*1.5)
i=a1.H()
u.drawOval(B.c_(s),i)
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
c0u(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
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
a1=new B.aO(d.r,A.ao,a3,a3,a0)
a0.push(new B.b5(0,i))
a0.push(new B.cV(h,m,0,g))
a0.push(new B.cV(j,m,0,i))
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=t
d.r=B.aq(A.bL,A.nI,k).j(0.7).gp(0)
a2=d.H()
d=a1.gbM().a.snapshot()
v.drawPath((a1.e=new B.cE(d)).a,a2)
a2.delete()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.hY.j(0.8).gp(0)
a2=d.H()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.W()
a5=B.N()
a5.saq(new B.bT(A.A,0.5,A.x,a3,0,B.a([A.hI.j(0.25),D.WZ],x.O),a3,a3).av(0,B.bU(w,a4)))
a7.af(w,a4,a5)
this.lL(a7,a8,a9,30,A.bL,300)},
cuN(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.W()
h=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.bk.gp(0)
h.c=q
h.d=A.bQ
g=h.H()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.saq(new B.bT(A.A,0.5,A.x,null,0,B.a([A.hY,A.hI.j(0.6),D.WZ],o),null,null).av(0,B.bU(new B.u(j,i),p)))
g=l.H()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.cX(f,1)
d=A.k.E(b2+C.cX(f,2)*e,e)/e
a0=A.k.bv((b2+C.cX(f,2)*e)/e)
a1=C.cX(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cX(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=B.aq(A.hY,A.aF,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bQ
a6.a=A.nD
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
g.delete()}}}this.lL(b0,b1,b2,35,A.bL,310)},
bFa(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aS3(a9,new B.ar(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cX(n,1))
l=a8*(0.14+0.24*C.cX(n,2))
k=a8-l
j=new B.a9(o,k,o+m,k+l)
$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.saq(D.bX2.av(0,j))
h=i.H()
r.drawRect(B.c_(j),h)
h.delete()
g=A.k.bv(m/q)
f=A.k.bv(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cX(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.W()
a6=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=A.bL.j(0.85).gp(0)
h=a6.H()
r.drawRect(B.c_(new B.a9(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
au(d){return d.b!==this.b||d.d!==this.d}}
C.aZq.prototype={
B(d){var w,v=null,u=new C.c84(),t=new C.c86(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.anv,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c85(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.GI[w]))
return B.bY(A.bA,s,A.bq,12,10)}}
C.YY.prototype={
S(){return new C.azf()}}
C.azf.prototype={
gvz(){var w=this.d
return w===$?this.d=this.a.c:w},
gaZ3(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.as(new B.bb(w.b,A.b5,A.aN),$.aw())}return v},
gawN(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaKc()
v=$.aw()
u.f!==$&&B.bL()
t=u.f=new B.as(new B.bb(w,A.b5,A.aN),v)}return t},
q(){var w=this.gaZ3(0),v=$.aw()
w.T$=v
w.P$=0
w=this.gawN()
w.T$=v
w.P$=0
this.a2()},
ZI(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$ZI=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hY().C0(90,700,700,A.eH),$async$ZI)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fl(),$async$ZI)
case 8:p=e
o=q.b.toLowerCase()
n=J.ahx(o,".png")?"image/png":"image/jpeg"
r.m(new C.d7v(r,n,p))
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
return B.i($async$ZI,v)},
aZ2(d){var w=null,v=A.c.j(0.07)
return B.bs(w,new B.b4(4,B.n(12),A.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aQ4,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.agA(p.gvz().a)
if(n==null)n=A.d.gI(D.GI)
w=p.gvz()
v=p.r
u=x.p
v=B.E(new B.an(A.W,o,A.aa,A.r,B.a([B.bZ(0,new C.Nf(p.gvz(),!1,!0,new B.cy(w.a+v,x.W)),0,0,0),B.ao(o,B.Hx(A.mA,new C.d7A(d),B.nz(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.Hx(D.bGB,new C.d7B(p),B.nz(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aPZ,o,o,o)
t=B.E(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gaZ3(0),o,o,o,o,o,2,p.aZ2("Big words"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d7C(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.ht,!0,A.a4,o,A.an,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hI.j(0.6),A.q,1)
if(p.gvz().d.length===0)q=D.bJX
else{q=C.hfy(p.gvz().d)
if(q==null)q=new Uint8Array(0)
q=B.hU(B.fM(q,A.A,o,o,A.ci,A.bT,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ab,B.aD(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc7K(),o,o,o,o,o,o,!1,A.a7)],u)
if(p.gvz().d.length!==0)r.push(B.aH(o,o,o,o,D.a0Q,o,o,o,new C.d7D(p),o,o,o,o,"Remove logo",o))
return B.c7(o,A.w,B.bl(!0,B.v(B.a([v,B.p(o,B.v(B.a([w,A.S,B.B(r,A.m,o,A.e,A.j,0,o,o),A.O,B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gawN(),o,o,o,o,o,2,p.aZ2("Line under it"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d7E(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.dn,!0,A.a4,o,A.an,o,o,o,o),A.ac,B.dn(D.bIQ,D.fz5,new C.d7F(p,d),B.bn(A.aw,o,o,o,A.w,o,A.cl,o,new B.b7(B.n(14),A.Y),o,o,o))],u),A.aj,o,A.e,A.Q,0,A.p),A.f,o,o,D.b_H,o,o,o,o,A.Fe,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.aKU.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gby())
w.a8$=null
w.a2()},
aS(){this.b_()
this.aY()
this.bz()}}
C.Zi.prototype={
S(){return new C.bfr(new B.as(A.as,$.aw()))}}
C.bfr.prototype={
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.I,m=n?A.c:A.M,l=n?A.aS:A.ak,k=B.aI(d,A.bV,x.w).w,j=n?A.M:A.c,i=B.n(28),h=B.I(n?A.bF:A.aL,A.q,1),g=x.p,f=B.B(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.X(A.cD,l,o,o,o,o),o,o,o,new C.deh(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cMI[w]
u=B.a([],g)
for(t=J.aV(v.b);t.C();){s=t.gR(t)
r=new B.aT(12,12)
q=new B.aT(12,12)
p=n?A.c.j(0.06):A.bK
u.push(B.aL(!1,new B.bp(r,r,r,r),!0,B.p(A.A,new B.y(s,o,A.pg,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bp(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dei(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hM,new B.y(v.a.toUpperCase(),o,new B.G(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.C6(A.bA,6,6,A.bq,u,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.O)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bo:A.aQ
e.push(B.B(B.a([B.E(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),this.d,o,o,o,o,o,2,B.bs(o,new B.b4(4,B.n(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a4,o,A.an,o,o,o,o),1),A.ab,B.bG(A.aQY,new C.dej(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.O)
return B.bl(!0,B.p(o,B.v(B.a([f,new B.dq(1,A.cn,B.cw(e,o,o,o,o,A.ag,!0),o)],g),A.F,o,A.e,A.Q,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.tI,A.YG,o,o,o),!0,!1,A.af,!0,!0)}}
C.beP.prototype={
a4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eM()
a2.dC(this.c)
w=this.b
v=w/6.283185307179586
$.W()
u=B.N()
u.z=A.R6
t=B.N()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.aj()
l=a2.aj()
k=a2.aj()
j=0.8+a2.aj()*2.2
i=Math.sin(w*(3+a2.aB(4))+n)
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
C.bew.prototype={
a4(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bx(new B.a9(0,0,0+a7.a,0+a7.b),A.kA),a2=this.b,a3=Math.sin(a2*2),a4=$.W(),a5=B.N()
a5.b=A.ae
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.lu
a6.aD(a1,a5)
a5=x.v
a4=new B.aO(a4.r,A.ao,a0,a0,B.a([],a5))
a4.F(new B.iL(a1))
v=new B.Sh(new B.vx(B.x3(a4),!1,B.a([],x.X))).gI(0)
a4=v.a
a3=v.b
a4.jr()
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
j.d=A.bQ
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.E(n-p*(1-m/10),t)
h=A.k.E(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aO(r,k,a0,new B.cC([v,i,h,!0]),B.a([],a5))
g=j.H()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cE(f)).a,g)
g.delete()}else{k=new B.aO(r,k,a0,new B.cC([v,i,t,!0]),B.a([],a5))
g=j.H()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cE(f)).a,g)
g.delete()
k=new B.aO(r,a2.b,a0,new B.cC([v,0,h,!0]),B.a([],a5))
g=j.H()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cE(f)).a,g)
g.delete()}}a4.jr()
e=u[a3].Mz(n).a
$.W()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=w.gp(0)
k.z=A1.mE
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
C.bnq.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.eM()
e.dC(this.c)
w=a0.a*(0.2+e.aj()*0.6)
v=e.hd()?-0.1:1.1
v=a0.b*v
u=new B.u(w,v)
t=a0.gam0()*1.4
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
i.push(new B.bF())
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.saq(B.aUw(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.jr
g=j.H()
j=h.gbM().a.snapshot()
q.drawPath((h.e=new B.cE(j)).a,g)
g.delete()}},
au(d){return d.b!==this.b}}
C.b9q.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eM()
a0.dC(this.c*7+3)
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
e.z=new B.hw(A.G,k*0.35)
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
C.b93.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eM()
a0.dC(this.c+11)
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
i.d=A.bQ
if(m===1){h=B.aq(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gp(0)
i.z=new B.hw(A.G,u)
d=i.H()
i=g.e
t.drawPath((i==null?g.e=new B.cE(g.gbM().a.snapshot()):i).a,d)
d.delete()}},
au(d){return d.b!==this.b}}
C.buk.prototype={
a4(d,e){var w,v,u=new B.a9(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.W()
w=B.N()
t=(0.5+0.5*t)*0.12
w.saq(new B.bT(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cU1,null).av(0,u))
d.aZ(u,w)
w=u.cA(-3)
v=B.N()
v.b=A.ae
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.jr
d.aZ(w,v)},
au(d){return d.b!==this.b}}
C.brl.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bv(d)*7,p=0;p<7;++p){o=new B.eM()
o.dC(q+p)
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
i.d=A.bQ
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
g.z=new B.hw(A.G,k*0.3)
h=g.H()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
au(d){return d.b!==this.b}}
C.bqu.prototype={
a4(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a9(0,0,0+e.a,0+e.b)
$.W()
v=B.N()
v.a=A.nD
v.saq(new B.a8(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).av(0,w))
d.aZ(w,v)},
au(d){return d.b!==this.b}}
C.bdR.prototype={
a4(d,e){var w,v,u,t,s,r=e.gdB(),q=0.55+0.45*Math.sin(this.b)
$.W()
w=B.N()
w.b=A.ae
w.c=1.4
w.d=A.bQ
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.N()
u.b=A.ae
u.c=4
u.r=v.j(0.12*q).gp(0)
u.z=A.rs
r=new C.d7c(this,r*0.16,d,u,w)
t=e.gdB()*0.045
r.$3(new B.u(t,t),1,1)
v=e.a-t
r.$3(new B.u(v,t),-1,1)
s=e.b-t
r.$3(new B.u(t,s),1,-1)
r.$3(new B.u(v,s),-1,-1)},
au(d){return d.b!==this.b}}
C.xu.prototype={}
C.Ix.prototype={
a5(){return"NgmySlideElementType."+this.b}}
C.aqH.prototype={
a5(){return"NgmySlideAspectRatio."+this.b}}
C.uD.prototype={
a5(){return"NgmySlideShapeKind."+this.b}}
C.mx.prototype={
a5(){return"NgmySlideLayout."+this.b}}
C.hz.prototype={
a5(){return"NgmySlideTransition."+this.b}}
C.eK.prototype={
hF(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.ep(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ag(){var w,v=this,u=B.T(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"type",v.b.b)
u.n(0,"x",v.c)
u.n(0,"y",v.d)
u.n(0,"w",v.e)
u.n(0,"h",v.f)
u.n(0,"text",v.r)
u.n(0,"fontSize",v.w)
u.n(0,"fontWeight",v.x.gdK(0))
u.n(0,"fontStyle",v.y.a)
u.n(0,"decoration",C.hTG(v.z))
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
C.lG.prototype={
hF(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("M<1,eK>")
n=B.C(new B.M(n,new C.cdv(),m),m.k("ak.E"))
return C.rs(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ag(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("M<1,a4<m,@>>")
n=B.C(new B.M(n,new C.cdw(),m),m.k("ak.E"))
return B.F(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i0.prototype={
gb9e(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gS0(){if(!C.kw(this.w))return!1
var w=this.gb9e()
if(w==null)return!1
return new B.S(Date.now(),0,!1).cZ(w.bT())},
hF(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
q=B.U(r).k("M<1,lG>")
r=B.C(new B.M(r,new C.cdk(),q),q.k("ak.E"))
return C.Bx(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ag(){var w,v,u=this,t=B.T(x.N,x.z)
t.n(0,"id",u.a)
t.n(0,"name",u.b)
t.n(0,"themeId",u.c)
t.n(0,"aspectRatio",u.d.b)
t.n(0,"autoAdvanceSeconds",u.e)
t.n(0,"updatedAt",u.f.a7().ac())
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
v=B.U(w).k("M<1,a4<m,@>>")
w=B.C(new B.M(w,new C.cdl(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jG.prototype={}
C.b0z.prototype={
B(d){return B.cq(new C.cdq(this))}}
C.anT.prototype={
S(){return new C.biE(null,null)}}
C.biE.prototype={
gaZ4(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.fU,null,1,null,v)
w.cH(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gaZ4().q()
this.bu7()},
B(d){return B.c6(this.gaZ4(),new C.dFW(),this.a.c)}}
C.aKF.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gby())
w.a8$=null
w.a2()},
aS(){this.b_()
this.aY()
this.bz()}}
C.ad2.prototype={
PC(d,e,f,g){return this.bO9(d,e,f,g)},
bO9(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$PC=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$PC)
case 3:s=i
if(d.e==null){w=1
break}B.a6(d,!1).O(null)
t=d.J(x.q).f
t.U(B.b2(null,null,null,null,null,A.r,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ee,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$PC,v)},
B(d){var w=this,v=null,u=B.n(22),t=B.I(A.c.j(0.08),A.q,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dm,24)],x.V),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.b2,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dj,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aP,p,A.am,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.at,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d7)
n.push(B.B(B.a([B.E(new C.adk(A.hB,"Download",A.c_,new C.eqi(w,d),!0,v),1),A.av,B.E(new C.adk(A.vI,"Share",A.bj,new C.eqj(w,d),!1,v),1),A.av,B.E(new C.adk(A.ho,"Safari",A.aZ,new C.eqk(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aB)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.N,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.eql(d),v,v))
return B.bl(!0,new B.D(A.pS,B.v(B.a([B.p(v,B.v(n,A.aj,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.iS,v,t,u,s,v,A.n),v,v,v,v,A.Fl,v,v,1/0)],m),A.m,v,A.e,A.Q,0,A.p),v),!0,!1,A.af,!0,!0)}}
C.adk.prototype={
B(d){var w=this,v=null,u=B.n(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.n(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.q,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aG(!1,A.a1,!0,v,B.aL(!1,u,!0,B.eF(B.v(B.a([p,A.O,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.N,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bwc,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ah)}}
C.b0x.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.apT(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.c7L().akc(1.35)
s=B.av9(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bzA(v)
if(i.e&&i.w!=null)q=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.w,A.bj,h,h,h,h,2,D.bRX,A.y,!0,h,!0,h,!1,i.x,A.ai,h,h,h,new B.cy("slide_tf_"+g.a,x.W),h,A.wl,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.zx,A.an,h,A.Th,h,h)
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
w=n?t.cHC(B.b0(g.Q).j(0.45),A.cF):t
p=g.as
l=m?1:h
k=m?A.eD:A.Db
p=B.d(f,new B.cy("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.T8:s
$.W()
j=B.N()
j.b=A.ae
j.c=3*w
j.e=A.fC
j.r=A.az.gp(0)
j=i.cox(p,t,k,j)
k=g.r
w=new B.an(A.W,h,A.aa,A.r,B.a([j,i.cov(k,t,l?A.T8:s)],x.p),h)}else w=i.cow(p,t,g.k2?A.T8:s,m)
v=new B.nf(w,new B.cy("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aD(A.c7,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a7)}return new B.D(u,new B.bI(r,h,h,q,h),h)
case 1:case 4:return i.bXH()
case 3:return i.cg7()
case 2:return B.b3(h,h,h,new C.b0u(g,h),A.f2)
case 5:g=g.r
return new C.b0w(g,!i.e&&i.z==null,h)}},
c7L(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.k2
j=A.cF
break
case"shadow":v=o.d
e=B.a([new B.cR(D.adI,new B.u(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cR(l,A.J,6*v),new B.cR(l,A.J,16*v),new B.cR(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bZ
w=A.az
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mL
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cR(A.bC,new B.u(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.aq(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cR(v,new B.u(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cR(A.b9,new B.u(-3*v,0),0),new B.cR(A.ay,new B.u(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cR(A.cs,A.J,8*v),new B.cR(A.ay,new B.u(0,-3*v),18*v)],x.r)
k=A.u
w=W.KB
break
case"ice":v=o.d
e=B.a([new B.cR(A.aR,A.J,10*v),new B.cR(A.cA,A.J,22*v)],x.r)
k=A.N
w=A.ev
break
case"chalk":h=o.d
e=B.a([new B.cR(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.k2
break
case"comic":v=B.aq(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cW_[q]
u.push(new B.cR(v,new B.u(p.a*t,p.b*t),0))}u.push(new B.cR(v,new B.u(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.W()
f=B.N()
v=o.d
f.saq(D.bUw.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cR(A.Kp,new B.u(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.W()
f=B.N()
v=o.d
f.saq(D.bUR.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cR(l,A.J,14*o.d)],x.r)
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
e=B.a([new B.cR(l.j(0.45),new B.u(u,u),0),new B.cR(l.j(0.2),new B.u(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.k2
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
ayK(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eNW.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cdo(h)
v=r.k2?C.i5i(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eD:A.Db
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Xu(B.d7(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cox(d,e,f,g){return this.ayK(d,e,f,!1,g)},
cov(d,e,f){return this.ayK(d,e,f,!1,null)},
cow(d,e,f,g){return this.ayK(d,e,f,g,null)},
bzA(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a8
default:return A.a3}},
bXH(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bI
return B.av(B.X(s.b===D.l3?A.Gi:A.Br,A.aA,t,t,t,32),t,t,t)}w=u.bCz(r)
if(s.b===D.l3){s=B.n(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cr,A.q,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dE,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aNl(r,!0)
return C.fAl(s.go,v,s.id)}return w},
aNl(d,e){var w,v,u,t
try{w=C.i5B(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.cb(u,"_bg")
u=B.cq(new C.cdn(this,w,v,e))
return u}catch(t){return D.abu}},
bCz(d){return this.aNl(d,!1)},
cg7(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b4Z
return C.i5T(v,w.db,w.dx)}}
C.b0u.prototype={
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
switch(f.ax.a){case 0:d.aZ(s,g)
d.aZ(s,w)
break
case 1:d.hR(s,g)
d.hR(s,w)
break
case 2:r=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
r.F(new B.b5(u/2,0))
r.F(new B.ap(u,t))
r.F(new B.ap(0,t))
r.F(new B.bF())
d.aP(r,g)
d.aP(r,w)
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
r.F(new B.bF())
d.aP(r,g)
d.aP(r,w)
break
case 4:h=t/2
w.c=v+2
d.bE(new B.u(0,h),new B.u(u,h),w)
break
case 5:q=u*0.22
r=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
r.F(new B.b5(q,0))
r.F(new B.ap(u,0))
r.F(new B.ap(u-q,t))
r.F(new B.ap(0,t))
r.F(new B.bF())
d.aP(r,g)
d.aP(r,w)
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
r.e=null}}r.F(new B.bF())
d.aP(r,g)
d.aP(r,w)
break}},
au(d){return d.b!==this.b}}
C.aIg.prototype={
S(){return new C.btR(null,null)}}
C.btR.prototype={
a_(){var w,v=this
v.a1()
w=B.bj(null,A.ie,null,1,null,v)
w.cH(0)
v.d!==$&&B.aP()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bwq()},
aNw(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.n(8)
return B.c0(B.av(B.d(d,w,w,w,w,w,w,A.dj,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a8(A.a3,A.a8,A.x,v,w,w),A.n),A.be)},
bzO(){var w,v=this,u=null,t=v.aNw("Slide A",A.bj),s=v.aNw("Slide B",A.aZ)
if(v.a.c===D.cm)return new B.an(A.W,u,A.b0,A.r,B.a([t,B.av(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c6(w,new C.f50(v,s,t),u)},
B(d){return this.bzO()}}
C.aIT.prototype={
j6(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jL(d){return d.b!==this.b}}
C.UG.prototype={
S(){return new C.biR(null,null)}}
C.biR.prototype={
a_(){var w,v,u=this
u.a1()
w=B.bj(null,A.AT,null,1,null,u)
u.d!==$&&B.aP()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cm){w.sp(0,1)
return}B.bN(B.dC(0,0,0,v.c.fr+v.f*120,0,0),new C.dRU(u),x.a)},
bu(d){var w,v,u,t=this
t.bF(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cm)w.sp(0,1)
else B.bN(B.dC(0,0,0,v.c.fr+v.f*120,0,0),new C.dRT(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bum()},
B(d){var w,v=this.a
if(v.c.dy===D.cm||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c6(w,new C.dRS(this),v.d)}}
C.Iw.prototype={
B(d){return B.cq(new C.cdg(this))}}
C.az_.prototype={
S(){return new C.bdk()}}
C.bdk.prototype={
a_(){this.a1()
if(this.a.c!==D.cm)B.bN(A.LR,new C.d4r(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cm)n=B.av(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.N,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.UG(C.ep(A.bg,!1,4279310375,A.aD,"",4294538006,24,A.bn,A.a5,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bf,o,2,"",0,0,"",u,D.f1,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cg,p,p,B.n(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cy("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.ep(A.bg,!1,4294967295,A.aD,"",4280640491,22,A.bn,A.a5,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bf,o,2,"Element flies in",0,0,"",q.a.c,D.cQ,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.n(14)
v=new B.an(A.W,p,A.aa,A.r,B.a([w,B.ao(32,new C.UG(t,B.p(p,D.fkQ,A.f,p,p,new B.o(s,p,B.I(A.b2,A.q,1),r,p,p,A.n),p,p,p,p,A.jk,p,p,1/0),!0,1,new B.cy("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c0(n,D.b0g,A.be)}}
C.a7p.prototype={
S(){return new C.bjv(null,null)}}
C.bjv.prototype={
gaZB(){var w=this.a
if(w.e)w=D.eO3.t(0,w.c)||D.aNc.t(0,A.d.gI(this.a.c.split("@")))
else w=!1
return w},
a_(){var w,v=this
v.a1()
if(v.gaZB()){w=C.i3Y(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bj(null,B.dC(0,0,0,w,0,0),null,1,null,v)
w.cH(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.buT()},
B(d){var w,v=this,u=v.d
if(!v.gaZB()||u==null)return v.a.d
w=v.a
return B.c6(u,new C.edz(v,u,A.o.E(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aZt.prototype={
B(d){var w=null
return B.av(C.b0y(!0,w,!1,C.ep(A.L,!1,this.e.l(),A.aD,"",4280640491,this.f,A.bn,A.a5,"",0.2,"fx",w,"","",0,!1,"",0,D.bf,4280172719,2,"Aa",0,0,this.c,D.cm,D.cQ,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gZ(d){return this.f}}
C.beu.prototype={
j6(d){return C.a23(this.b,new B.a9(0,0,0+d.a,0+d.b).cA(-this.c))},
jL(d){return d.b!==this.b||d.c!==this.c}}
C.bpr.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a9(0,0,0+a1.a,0+a1.b).cA(-this.d),g=this.b,f=C.a23(g,h),e=a1.gdB(),d=new C.eV8()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.saq(D.aOI.av(0,h))
a0.aP(f,w)
g=C.a23(g,h.cA(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bjx.gp(0)
a0.aP(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.saq(D.eXG.av(0,h))
a0.aP(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.hw(A.G,e*0.04)
a0.aP(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aP(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.saq(D.eXE.av(0,h))
a0.aP(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aP(f,w)
g=C.a23(g,h.cA(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aP(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b9.j(0.7).gp(0)
g.z=new B.hw(A.G,e*0.035)
a0.aP(f,g)
g=d.$1(e*0.016)
g.r=A.oE.gp(0)
a0.aP(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.saq(D.eXz.av(0,h))
a0.aP(f,w)
w=C.a23(g,h.cA(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b8r.gp(0)
a0.aP(w,v)
g=C.a23(g,h.cA(e*0.03))
v=d.$1(e*0.004)
v.r=D.bb1.gp(0)
a0.aP(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.saq(D.aOI.av(0,h))
a0.aP(f,g)
for(g=B.x3(f),w=B.a([],x.X),g=new B.vx(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b8(B.jW(y.M));--q
g.jr()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bv(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.jr()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.jr()
m=w[q].Mz(p*n/o).a
l=D.cTl[A.o.E(n,4)]
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
g.saq(D.eXI.av(0,h))
g.z=new B.hw(A.G,e*0.03)
a0.aP(f,g)
g=d.$1(e*0.018)
g.saq(D.eXF.av(0,h))
a0.aP(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aP(f,w)
g=C.a23(g,h.cA(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nK.gp(0)
a0.aP(g,w)
break}},
au(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bqr.prototype={
a4(d,e){d.FM(C.a23(this.b,new B.a9(0,0,0+e.a,0+e.b).cA(-this.c)),A.w,e.gdB()*0.05,!1)},
au(d){return d.b!==this.b||d.c!==this.c}}
C.aKT.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gby())
w.a8$=null
w.a2()},
aS(){this.b_()
this.aY()
this.bz()}}
C.aLo.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gby())
w.a8$=null
w.a2()},
aS(){this.b_()
this.aY()
this.bz()}}
C.aML.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gby())
w.a8$=null
w.a2()},
aS(){this.b_()
this.aY()
this.bz()}}
C.a7I.prototype={}
C.NH.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aDQ(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aX(v),null,null)},
ge1(){return this.c},
gTm(){return this.r},
gTn(){return this.w},
gLo(){return this.x}}
C.aDQ.prototype={
a_(){var w,v=this
v.a1()
$.aW.c2$.push(v)
C.fFh()
$.hnb=new C.eww(v)
w=B.bj(null,A.AR,null,1,null,v)
w.ff(0,!0)
v.fy!==$&&B.aP()
v.fy=w
v.If()},
bu(d){var w,v,u=this
u.bF(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.Oe(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.If()}},
j_(d){if(d===A.zY||d===A.t1||d===A.t0||d===A.pp)this.tv()},
q(){var w,v,u,t=this
$.aW.hI(t)
w=t.at
if(w!=null)w.a6(0)
t.tv()
w=t.fy
w===$&&B.c()
w.q()
for(w=t.ch,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.T$=$.aw()
v.P$=0}for(w=t.CW,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bN(0)
v.h6()}for(w=t.cx,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.T$=$.aw()
v.P$=0}t.bv6()},
gab2(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gOy(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
abw(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gS0())return!1
return!0},
ke(){return this.abw(null)},
aih(){var w=this.c
if(w==null)return
w.J(x.q).f.U(D.eVY)},
qg(){if(!this.ke())return!1
this.aih()
return!0},
aqm(d){var w,v,u,t,s,r=this
if(r.abw(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hmi(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zO(){return this.aqm(null)},
If(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$If=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.aqJ(k),$async$If)
case 3:j=e
w=4
return B.b(C.apl(k),$async$If)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fUE(j,t.c_y())
w=t.gab2()?5:7
break
case 5:r=t.gOy()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aZH(r),$async$If)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bp(s,new C.esU())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.ck(s,0,q)}case 9:w=6
break
case 7:A.d.bp(s,new C.esV())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.L)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yt(m==null?"":m)!=null)continue
C.fFt(n,s)
p=!0}t.m(new C.esW(t,s))
if(p||s.length>J.ad(j))t.tv()
case 1:return B.h(u,v)}})
return B.i($async$If,v)},
c_y(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kw(w)&&w!==q}if(w)p.push(r)
return p},
cmW(d){var w,v=this,u=d.w
if(!C.kw(u)||u==="hati_kiapo_uongozi")return
v.a9S(d)
w=A.d.be(v.d,new C.euu(d))
u=v.d
if(w>=0){u[w]=d.hF()
v.d[w].f=new B.S(Date.now(),0,!1)}else A.d.ck(u,0,d.hF())
v.db=!1},
ch3(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kw(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cmW(t)
s=u.d
w=B.U(s)
v=w.k("cQ<1,i0>")
s=B.C(new B.cQ(new B.a_(s,new C.eui(),w.k("a_<1>")),new C.euj(),v),v.k("J.E"))
return s},
Oe(d){return this.bOx(d)},
tv(){return this.Oe(null)},
bOx(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Oe=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.ch3()
w=3
return B.b(C.VE(d==null?t.a.c:d,s),$async$Oe)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.aqm(r)?4:5
break
case 4:w=6
return B.b(C.a6V(r),$async$Oe)
case 6:q=r.x
p=A.a.i(q==null?t.gOy():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.be(t.d,new C.esh())
q=t.d
if(o>=0)q[o]=r.hF()
else A.d.ck(q,0,r.hF())
case 5:case 1:return B.h(u,v)}})
return B.i($async$Oe,v)},
pj(){var w,v=this,u=v.at
if(u!=null)u.a6(0)
u=v.e
w=(u==null?null:C.kw(u.w))===!0?A.hy:A.lN
v.at=B.cM(w,new C.evC(v))},
aZ5(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.aeQ(u.hF(),v.f,v.r))
if(w.length>40)A.d.cw(w,0)
A.d.a9(v.ay)},
cAq(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.aeQ(w.e.hF(),w.f,w.r))
w.m(new C.ews(w,v.pop()))
w.pj()},
cm0(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.aeQ(w.e.hF(),w.f,w.r))
w.m(new C.eus(w,v.pop()))
w.pj()},
of(){var w,v,u=this
if(u.e==null)return
w=A.d.be(u.d,new C.ewf(u))
if(w>=0){u.d[w]=u.e.hF()
u.d[w].f=new B.S(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.S(Date.now(),0,!1)},
Xh(d){var w,v,u,t,s=this.gdr()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
xo(){var w,v,u,t
for(w=this.ch,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
u.T$=$.aw()
u.P$=0}w.a9(0)
for(w=this.CW,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bN(0)
u.h6()}w.a9(0)},
JW(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdr()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cQ<1,m>")
t=B.dc(new B.cQ(new B.a_(w,new C.ewg(),v.k("a_<1>")),new C.ewh(),u),u.k("J.E"))
w=this.ch
v=B.a3(w).k("cu<1>")
v=B.C(new B.cu(w,v),v.k("J.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.L)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.T$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bN(0)
p.h6()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.L)(v),++r){n=v[r]
if(n.b!==D.cQ)continue
p=n.a
m=w.cg(0,p,new C.ewi(n))
s.cg(0,p,new C.ewj())
p=m.a.a
o=n.r
if(p!==o)m.saV(0,o)}},
HA(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b5(u.d,new C.erG(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gOy()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.ck(u.d,0,u.e.hF())}u.of()
u.pj()},
aiE(d,e){var w,v,u,t,s=this
if(s.ke())return
w=s.Xh(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kw(v.w))===!0
if(u){C.i41(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdr()
if(t!=null)C.i42(t,w.d+w.f*0.5)}}s.HA()
s.of()
s.pj()
if(u&&s.c!=null)s.m(new C.ewt())},
cBu(d,e){var w=this,v=w.gdr()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.HA()
w.of()
w.pj()},
gdr(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gql(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.i23(o)
if(w!=null)return w
v=q.gdr()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gI(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bXW(v)
t=q.bXV(v)
s=B.b0(v.e)
r=v.f
return new C.jG(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hFO(o)},
bXW(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(t.b===D.cQ)s=t.w>=28||A.o.D(A.o.an(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bXV(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cQ&&t.w<28)return B.b0(t.Q)}return A.aK},
aez(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gab2()){w.c.J(x.q).f.U(D.eUA)
return}w.a9S(d)
w.b_h(C.bBx(d))
return}if(C.ce9(v)){w.a9S(d)
w.b_h(d)
return}w.m(new C.etB(w,d))},
aqW(){var w,v,u,t,s,r,q=this
q.a1N(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kw(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.erE(q))
if(r&&q.c!=null){u.toString
q.Jw(u,s)}return}q.tv()
q.m(new C.erF(q))},
b_g(d){this.a9S(d)
this.a_i(d,!0)},
a9S(d){if(!C.kw(d.w))return
C.fFt(d,this.d)},
a_i(d,e){return this.ccZ(d,e)},
b_h(d){return this.a_i(d,!1)},
ccZ(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a_i=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bBx(d)
if(e){r=s.x
q=A.a.i(r==null?t.gOy():r)
t.dy.W(0,q.toLowerCase())
C.apm(t.a.c,q)}r=s}else r=d
w=C.ce9(r.w)?3:4
break
case 3:w=5
return B.b(t.a9T(r),$async$a_i)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b5(t.d,new C.etY(l))
o=l.a.hF()
n=C.kw(o.w)&&C.i5d(o)
t.m(new C.etZ(t,o,p))
if(n){m=A.d.be(t.d,new C.eu_(o))
if(m>=0){t.d[m]=o.hF()
t.tv()}}if(!t.abw(l.a))t.Yq()
r=!1
if(t.c!=null)if(!t.abw(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.aqm(r)&&C.fBw(l.a)}else l=r
else l=r
if(l)t.c.J(x.q).f.U(D.eV9)
case 1:return B.h(u,v)}})
return B.i($async$a_i,v)},
a9T(d){return this.bMJ(d)},
bMJ(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a9T=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lf(r.c,A.zf),$async$a9T)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kU(!1,r,s.c,s.d,null,A.zf,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9T,v)},
o6(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$o6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.ce9(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cdy(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$o6,v)},
aeg(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aeg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cb(null,null,!1,null,new C.etA(),s,null,!0,!0,x.H),$async$aeg)
case 3:if(t.c==null){w=1
break}t.aqW()
case 1:return B.h(u,v)}})
return B.i($async$aeg,v)},
aef(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aef=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cb(null,null,!1,null,new C.etx(),s,null,!0,!0,x.H),$async$aef)
case 3:if(t.c==null){w=1
break}t.m(new C.ety())
t.aqW()
case 1:return B.h(u,v)}})
return B.i($async$aef,v)},
Yq(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Yq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aA(),$async$Yq)
case 3:r=e
if(B.jL(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.ar("Bool","ngmy_marriage_hint_seen",!0),$async$Yq)
case 4:s=t.c
if(s==null){w=1
break}s.J(x.q).f.U(D.eTd)
case 1:return B.h(u,v)}})
return B.i($async$Yq,v)},
Jw(d,e){return this.cnm(d,e)},
cnm(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jw=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.aga(s,t.gEl(),t.gEk(),!0,e,t.d),$async$Jw)
case 9:w=4
break
case 6:w=10
return B.b(C.agb(s,t.gEl(),t.gEk(),!0,e,t.d),$async$Jw)
case 10:w=4
break
case 7:w=11
return B.b(C.agc(s,t.gEl(),t.gEk(),!0,e,t.d),$async$Jw)
case 11:w=4
break
case 8:w=12
return B.b(C.agd(s,t.gEl(),t.gEk(),!0,e,t.d),$async$Jw)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Jw,v)},
bZs(){var w,v,u,t,s=this
if(!s.gab2()){s.c.J(x.q).f.U(D.eTq)
return}w=s.gOy()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.ag9(u,t,v,new C.esQ(s),new C.esR(s),w)},
aeA(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aeA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bR(A.dH,null,new C.etH(u),s,!0,!0,!1,A.lw,!1,!1,x.N),$async$aeA)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.agd(s,u.gEl(),u.gEk(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.aga(s,u.gEl(),u.gEk(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.agb(s,u.gEl(),u.gEk(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.agc(s,u.gEl(),u.gEk(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bZs()
return B.h(null,v)}})
return B.i($async$aeA,v)},
cc5(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aZ5()
w=C.cD()
v=C.Bx(t,t,t,t,D.CB,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.etI(u,v))},
a9j(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a9j=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qg()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i9I(s),$async$a9j)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d7(q.r,new C.erI())
t.d3(new C.erJ(t,p,q,r))
s=t.c.J(x.q).f
o=r.r.length
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9j,v)},
agy(d,e,f,g){var w=null,v=g?A.dr:A.bK,u=B.I(g?A.b2:A.cr,A.q,1)
return B.hs(B.aD(w,B.p(w,B.X(d,g?A.c:A.aK,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a7),w,e,w,w)},
a_h(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_h=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qg()){w=1
break}s=t.jQ()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("a_<1>")
p=B.C(new B.a_(r,new C.etT(),q),q.k("J.E"))}o=s!=null&&s.b===D.lv?B.a([s],x.u):p
if(o.length===0){t.c.J(x.q).f.U(D.eVk)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.etU(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a_h)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_h,v)},
aeR(){return this.ccY()},
ccY(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aeR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qg()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i9u(s,t.f+1,o),$async$aeR)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.T
q=B.kE(s,B.U(s).c)
p.a=A.d.be(o.r,new C.etW(q))
t.d3(new C.etX(p,t,o,q,r))
t.c.J(x.q).f.U(D.eVJ)
case 1:return B.h(u,v)}})
return B.i($async$aeR,v)},
aeY(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aeY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qg()||!t.zO()){w=1
break}s=t.gdr()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("a_<1>")
p=B.C(new B.a_(r,new C.eud(),q),q.k("J.E"))
if(p.length===0){t.c.J(x.q).f.U(D.eSZ)
w=1
break}o=new B.M(p,new C.eue(),B.U(p).k("M<1,K>")).fd(0,new C.euf())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.L)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.as(new B.bb(l,A.b5,A.aN),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bR(A.K,null,new C.eug(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$aeY)
case 3:for(r=new B.dt(r,r.r,r.e);r.C();){q=r.d
q.T$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.euh())
case 1:return B.h(u,v)}})
return B.i($async$aeY,v)},
aeD(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$aeD=B.e(function(d,e){if(d===1)return B.f(e,v)
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
return B.b(C.hoh(s,new C.El(r,q,p,o==null?"":o)),$async$aeD)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d3(new C.etJ(m,n))
s=t.c.J(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.agA(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.U(B.b2(null,null,null,null,null,A.r,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aeD,v)},
a9M(){return this.bM5()},
bM5(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a9M=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qg()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i9H(s,t.f+1,l),$async$a9M)
case 3:r=e
q=$.fY6
$.fY6=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d3(new C.erZ())
t.c.J(x.q).f.U(D.eSQ)
w=1
break}if(!q){s=r.CW
s=C.hn9(l,s==null?"":s,!1)}else s=!1
if(s){t.d3(new C.es_(t,l,r))
t.c.J(x.q).f.U(D.eWc)
w=1
break}s=l.cx
if(s==null)s=A.T
p=B.kE(s,B.U(s).c)
s=l.r
m.a=A.d.be(s,new C.es0(p))
o=s.length
t.d3(new C.es1(m,t,l,p,r))
n=s.length-o
s=t.c.J(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9M,v)},
aPC(d,e){if(e){this.afq()
return}this.cc5(d,!1)},
bHJ(){return this.aPC(null,!1)},
afq(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bR(A.bY,null,new C.eun(t),r,!0,!0,!0,A.p8,!1,!1,x.N),$async$afq)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.euo(t,C.i22(s).px()))
case 1:return B.h(u,v)}})
return B.i($async$afq,v)},
d3(d){var w=this
if(w.qg())return
w.HA()
w.aZ5()
w.m(d)
w.JW()
w.of()
w.pj()},
a7N(){this.d3(new C.eqD(this,D.mF))},
aR4(){var w=this.gdr()
if(w==null)return
this.d3(new C.erX(this,w))},
aQd(){var w=this.e
if(w==null||w.r.length<=1)return
this.d3(new C.erV(this))},
b2h(d,e){if(this.e==null||d===e)return
this.d3(new C.euw(this,d,e))},
NM(d){return this.bJJ(d)},
bJJ(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$NM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gOy():s)
w=5
return B.b(C.apk(t.a.c,r),$async$NM)
case 5:t.dy.L(0,r.toLowerCase())
case 4:s=d.a
C.aqL(s)
w=6
return B.b(C.b0C(t.a.c,s),$async$NM)
case 6:if(t.c==null){w=1
break}t.m(new C.erR(t,d))
w=7
return B.b(t.tv(),$async$NM)
case 7:case 1:return B.h(u,v)}})
return B.i($async$NM,v)},
cnj(d,e){var w=this
if(d.z){w.aih()
return}w.m(new C.euv(w,d,e))
w.pj()},
jQ(){var w,v,u,t,s,r=this.gdr()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Wi(d){return this.ch.cg(0,d.a,new C.erH(d))},
asN(d){return this.CW.cg(0,d.a,new C.esi())},
a1N(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Xh(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aW.ak$.d.c
if(u!=null)u.jF()},
b5H(){return this.a1N(!0)},
a1K(d){var w,v,u=this
if(u.qg())return
if(!u.zO())return
w=u.Xh(d)
if(w==null||w.b!==D.cQ)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Wi(w).saV(0,"")}u.m(new C.ewd(u,d))
$.aW.x1$.push(new C.ewe(u,d,w))},
b6c(d){var w=this
if(d.b===D.cQ&&!w.ke()&&w.zO()){w.a1K(d.a)
return}w.az9(d.a)},
az9(d){var w,v,u,t,s,r=this
if(r.ke())return
w=r.r
if(w!=null&&w!==d){v=r.Xh(w)
if(v!=null&&v.b===D.cQ){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.evD(r,s,d))
if(s||d==null){t=$.aW.ak$.d.c
if(t!=null)t.jF()}},
aLU(){this.d3(new C.eqE(this))},
p_(d){return this.byR(d)},
byR(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$p_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$p_)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d3(new C.eqB(t,d))
case 1:return B.h(u,v)}})
return B.i($async$p_,v)},
Vr(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Vr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gs(78,1920),$async$Vr)
case 3:s=e
if(s==null||t.gdr()==null){w=1
break}t.d3(new C.eqr(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Vr,v)},
Vl(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Vl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdr()==null){w=1
break}w=3
return B.b(S.CG(t.a.c),$async$Vl)
case 3:s=e
if(t.c==null){w=1
break}r=J.a5(s)
if(r.gam(s)){t.c.J(x.q).f.U(D.eWM)
w=1
break}w=r.gM(s)===1?4:6
break
case 4:q=r.gI(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bR(null,null,new C.eqo(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Vl)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdr()==null){w=1
break}t.d3(new C.eqp(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Vl,v)},
arM(){var w=this,v=w.r
if(v==null||w.gdr()==null)return
if(A.d.b5(w.gdr().z,new C.erT(v))){w.c.J(x.q).f.U(D.eVN)
return}if(w.w===v)w.a1N(!0)
w.d3(new C.erU(w,v))},
bFZ(){var w=this.jQ(),v=w==null
if((v?null:w.b)===D.f1)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cQ)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aMB(d,e){var w=this,v=w.jQ(),u=w.gdr(),t=w.e
if(t==null)return
w.d3(new C.er5(w,v,d,e,t,u))},
bAr(d){return this.aMB(d,null)},
a84(d){return this.bAz(d)},
bAz(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a84=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a6x.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.o6(),$async$a84)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jQ()
if(s!=null){r=s.b
if(r===D.cQ)t.bAr(s.w>=28||s.x.gdK(0)>=A.H.gdK(0)?d.d:d.e)
else if(r===D.f1){r=d.c
t.aMB(r.j(0.88),r)}w=1
break}t.d3(new C.era(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a84,v)},
a83(d){return this.bAx(d)},
bAx(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a83=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jQ()
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
return B.b(t.o6(),$async$a83)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d3(new C.er8(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a83,v)},
bAh(d){var w=this.gdr()
if(w==null)return
this.d3(new C.er4(this,w,d))},
a_n(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_n=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.i9D(r),$async$a_n)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.of()
t.m(new C.eu7(t,s))
w=4
return B.b(t.tv(),$async$a_n)
case 4:if(t.c!=null)t.aez(s)
case 1:return B.h(u,v)}})
return B.i($async$a_n,v)},
a9E(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9E=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a1N(!0)
t.of()
s=t.c
s.toString
w=3
return B.b(C.QS(s,q),$async$a9E)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.J(x.q).f
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9E,v)},
Du(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Du=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.of()
t=4
w=7
return B.b(C.aPt(m),$async$Du)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aOT(o,q,m.b),$async$Du)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.aa(l)
o=r.c
if(o==null){w=1
break}o.J(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Du,v)},
F8(d,e){return this.czT(d,e)},
czT(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$F8=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qg()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a1N(!0)
t.of()
s=h.a=t.e.hF()}else{r=A.d.be(t.d,new C.ewm(d))
s=h.a=r>=0?t.d[r].hF():d.hF()}s=s.w
q=s==null
p=C.i30(q?"":s)
o=C.hm5(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("a_<1>")
n=B.C(new B.a_(s,new C.ewn(h,p),q),q.k("J.E"))
s=h.a.b
w=3
return B.b(t.ct9(n.length,o,s),$async$F8)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.i2V(h.a)
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
return B.b(t.ct8(n,o),$async$F8)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.hr(t.d,new C.ewo(s))
s=h.a.b
w=11
return B.b(t.ct6(k.b,s),$async$F8)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hF()
case 5:j=C.i3_(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.J(x.q).f.U(D.eWX)
w=1
break}w=12
return B.b(t.ct7(j.a,s,o,j.c),$async$F8)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.ewp(h,t,i))
t.pj()
case 1:return B.h(u,v)}})
return B.i($async$F8,v)},
ct9(d,e,f){var w=this.c
w.toString
return B.bR(A.K,null,new C.evT(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
ct8(d,e){var w=this.c
w.toString
return B.bR(A.K,null,new C.evS(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
ct6(d,e){var w=this.c
w.toString
return B.bR(A.K,null,new C.evM(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
ct7(d,e,f,g){var w=this.c
w.toString
return B.bR(A.K,null,new C.evO(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
ab6(){var w=null
return B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
ab7(d,e,f,g){var w,v,u=null,t=B.n(16),s=B.aq(d,A.bY,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dm,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a8(A.ax,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.er,B.E(B.v(B.a([B.d(g,u,u,u,u,u,u,D.f6k,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a5,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aUm(d,e){var w=null,v=e.j(0.14),u=B.n(12),t=B.I(e.j(0.22),A.q,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.TQ,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bS,w,w,w)},
aUp(d,e,f,g,h,i,j){var w=null,v=B.n(16),u=B.n(16),t=g?new B.a8(A.ax,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.q,1),q=d.j(g?0.22:0.14),p=B.n(13),o=x.p
return B.aG(!1,A.a1,!0,w,B.aL(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bd,B.E(B.v(B.a([B.d(i,w,w,w,w,w,w,A.ny,w,w,w),A.cV,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a5,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.X(A.Bu,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.esM(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
bWQ(d,e,f,g,h,i){return this.aUp(d,e,f,!1,g,h,i)},
au6(d,e){var w=null,v=A.c.j(0.05),u=B.n(14),t=B.I(A.c.j(0.08),A.q,1)
return B.p(w,B.v(B.a([B.d(e,w,w,w,w,w,w,A.dj,w,w,w),A.bD,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.Z0,w,w,w)},
aUo(d,e,f){var w=null,v=B.bn(A.c.j(0.08),w,w,w,A.c,w,A.cl,w,new B.b7(B.n(14),A.Y),w,w,w)
return B.bG(B.d(e,w,w,w,w,w,w,A.nw,w,w,w),new C.esL(d,f),v)},
aUn(d,e){return this.aUo(d,e,null)},
JN(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$JN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.p4(l,s.c,s.d),$async$JN)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aG("=",l.length)+"\n\n"
q=new B.fe(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gae(o.z),n=new B.f_(l,new C.evE());n.C();){m=l.gR(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aK(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a9z(l.charCodeAt(0)==0?l:l,r.b),$async$JN)
case 4:l=t.a
w=5
return B.b(B.p3(l.c,l.d),$async$JN)
case 5:case 1:return B.h(u,v)}})
return B.i($async$JN,v)},
HV(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$HV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.p4(q,s.c,s.d),$async$HV)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a9z(A.R.ao(r.ag(),null),r.b+".json"),$async$HV)
case 4:q=t.a
w=5
return B.b(B.p3(q.c,q.d),$async$HV)
case 5:case 1:return B.h(u,v)}})
return B.i($async$HV,v)},
b5r(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.of()
u.tv()
w=u.c
w.toString
v=B.e8(new C.ewc(u,t),!1,null,x.z)
B.a6(w,!1).cl(v)},
H9(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$H9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$H9)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fFG(),$async$H9)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.i5N(s.a)
q=t.c
q.toString
w=5
return B.b(B.bR(A.az,null,new C.eqw(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$H9)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d3(new C.eqx(t,s))
w=1
break}if(p==="split")t.d3(new C.eqy(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$H9,v)},
N7(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$N7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qg()){w=1
break}w=3
return B.b(t.o6(),$async$N7)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aPs(s,null,null),$async$N7)
case 4:r=e
if(r==null||t.gdr()==null){w=1
break}t.d3(new C.eqC(t,r))
case 1:return B.h(u,v)}})
return B.i($async$N7,v)},
b24(d){var w=this.e
if(w==null||!C.kw(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aNT(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aPs(s,t==null?null:B.b0(t),u)},
a7L(d){return this.byI(d)},
byI(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7L=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qg()){w=1
break}if(!t.zO()){s=t.c
if(s==null){w=1
break}s.J(x.q).f.U(D.eXb)
w=1
break}w=3
return B.b(t.aNT(),$async$a7L)
case 3:r=f
if(r==null||t.gdr()==null){w=1
break}t.d3(new C.eqt(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a7L,v)},
agb(d){return this.cm3(d)},
cm3(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agb=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qg()){w=1
break}if(!t.zO()){s=t.c
if(s==null){w=1
break}s.J(x.q).f.U(D.eWk)
w=1
break}w=3
return B.b(t.aNT(),$async$agb)
case 3:r=f
if(r==null||t.gdr()==null){w=1
break}t.d3(new C.eut(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$agb,v)},
c8N(){var w,v,u=this
if(u.ke())return
w=new B.S(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bD(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cyV()}},
cyV(){var w,v,u,t,s,r=this.gdr()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d3(new C.ewk(this,r,(A.o.aA(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bXa(){var w,v,u,t,s,r=this.gdr()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d3(new C.esP(this,r,u.d))},
c0Q(d){var w
if(this.ke())return!1
w=this.e
if((w==null?null:C.kw(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fCh(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.l3&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c0R(d){var w
if(this.ke())return!1
w=this.e
if((w==null?null:C.kw(w.w))!==!0)return!0
if(!this.zO())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fCh(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.l3&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
Ng(d){return this.bAZ(d)},
bAZ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Ng=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qg()){w=1
break}if(!t.zO()){s=t.c
if(s==null){w=1
break}s.J(x.q).f.U(D.eVa)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.apo(p),$async$Ng)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.J(x.q).f.U(D.eVP)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gI(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a6V(r)
w=1
break}t.m(new C.ere(t,d,o))
t.of()
$.aW.x1$.push(new C.erf(t))
case 1:return B.h(u,v)}})
return B.i($async$Ng,v)},
Vp(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Vp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$Vp)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bCd(),$async$Vp)
case 4:s=e
if(s==null||t.gdr()==null){w=1
break}t.d3(new C.eqq(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Vp,v)},
O_(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$O_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$O_)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jQ()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fFx(r),$async$O_)
case 4:q=e
if(q==null){w=1
break}t.d3(new C.esg(s,q))
case 1:return B.h(u,v)}})
return B.i($async$O_,v)},
iX(d){this.d3(new C.eqz(this,d))},
q6(d){return this.bAa(d)},
bAa(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$q6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qg()){w=1
break}m=!D.aNf.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.o6(),$async$q6)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.H9()
w=1
break A
case"sign_paper":t.N7()
w=1
break A
case"hd_photo":t.Vp()
w=1
break A
case"sharpen":t.O_()
w=1
break A
case"print":t.Du()
w=1
break A
case"rotate":s=t.jQ()
if(s!=null)t.d3(new C.eqI(s))
w=1
break A
case"text_box":t.aLU()
w=1
break A
case"picture":t.Vr()
w=1
break A
case"present":t.b5r()
w=1
break A
case"new_slide":t.a7N()
w=1
break A
case"export_json":t.HV()
w=1
break A
case"outline_share":t.JN()
w=1
break A
case"flashcard_tool":t.v7(D.HL)
w=1
break A
case"quiz_tool":t.v7(D.HM)
w=1
break A
case"worksheet_tool":t.v7(D.HN)
w=1
break A
case"duplicate_el":s=t.jQ()
if(s==null){w=1
break A}t.d3(new C.eqJ(t,s))
w=1
break A
case"delete_el":t.arM()
w=1
break A
case"bring_fwd":s=t.jQ()
if(s==null||t.gdr()==null){w=1
break A}t.d3(new C.eqK(t,s))
w=1
break A
case"send_back":s=t.jQ()
if(s==null||t.gdr()==null){w=1
break A}t.d3(new C.eqV(t,s))
w=1
break A
case"align_left":s=t.jQ()
if(s!=null)t.d3(new C.eqY(s))
w=1
break A
case"align_center":s=t.jQ()
if(s!=null)t.d3(new C.eqZ(s))
w=1
break A
case"align_right":s=t.jQ()
if(s!=null)t.d3(new C.er_(s))
w=1
break A
case"grayscale":case"brighten":t.O_()
w=1
break A
case"flip_h":s=t.jQ()
if(s!=null)t.d3(new C.er0(s))
w=1
break A
case"flip_v":s=t.jQ()
if(s!=null)t.d3(new C.er1(s))
w=1
break A
case"rectangle":t.p_(D.bf)
w=1
break A
case"circle":t.p_(D.eL)
w=1
break A
case"triangle":t.p_(D.jN)
w=1
break A
case"arrow":t.p_(D.CD)
w=1
break A
case"line":case"divider":t.p_(D.fs)
w=1
break A
case"word_count":r=t.gdr()
if(r==null){w=1
break A}for(q=A.d.gae(r.z),p=new B.f_(q,new C.er2()),o=0;p.C();){n=A.a.fE(A.a.i(q.gR(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.a_(n,new C.er3(),B.U(n).k("a_<1>")).gM(0)}t.c.J(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cD()
t.iX(C.iW(A.L,!1,t.gql().d.l(),A.aD,40,A.bn,A.u,0.18,q,"Presentation Title",0,D.mG,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cD()
t.iX(C.iW(A.L,!1,t.gql().e.l(),A.aD,22,A.bn,A.a5,0.12,q,"Subtitle goes here",0,D.dd,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iX(C.iW(A.bg,!0,4279310375,A.aD,20,A.bn,A.a5,0.5,C.cD(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.uo,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iX(C.iW(A.bg,!1,4279310375,A.aD,20,A.bn,A.a5,0.5,C.cD(),"1. First item\n2. Second item\n3. Third item",0,D.un,0.8,0.1,0.22))
w=1
break A
case"quote":t.iX(C.iW(A.L,!1,4279310375,A.aD,24,A.cF,A.a5,0.25,C.cD(),'"Insert meaningful quote here."',0,D.dd,0.8,0.1,0.3))
w=1
break A
case"citation":t.iX(C.iW(A.bg,!1,4284773515,A.aD,14,A.bn,A.a5,0.1,C.cD(),"Author, Title (Year). Publisher.",0,D.uo,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iX(C.iW(A.dM,!1,4279310375,A.aD,14,A.bn,A.a5,0.08,C.cD(),C.bCf(),0,D.dd,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iX(C.iW(A.dM,!1,4279310375,A.aD,13,A.bn,A.a5,0.06,C.cD(),"Page "+(t.f+1),0,D.dd,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d3(new C.eqL(t))
w=1
break A
case"footer_bar":t.d3(new C.eqM(t))
w=1
break A
case"highlight":t.d3(new C.eqN(t))
w=1
break A
case"redact":t.d3(new C.eqO(t))
w=1
break A
case"callout":t.d3(new C.eqP(t))
w=1
break A
case"checkboxes":t.iX(C.iW(A.bg,!1,4279310375,A.aD,20,A.bn,A.a5,0.45,C.cD(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dd,0.8,0.1,0.2))
w=1
break A
case"table":t.iX(C.iW(A.bg,!1,4279310375,A.aD,16,A.bn,A.a5,0.55,C.cD(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dd,0.8,0.1,0.18))
w=1
break A
case"memo":t.d3(new C.eqQ(t))
w=1
break A
case"letter":t.iX(C.iW(A.bg,!1,4279179050,A.aD,17,A.bn,A.a5,0.82,C.cD(),C.bCf()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iX(C.iW(A.bg,!1,4279310375,A.aD,22,A.bn,A.N,0.76,C.cD(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.uo,0.8,0.1,0.12))
w=1
break A
case"toc":t.iX(C.iW(A.bg,!1,4279310375,A.aD,18,A.bn,A.a5,0.76,C.cD(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dd,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iX(C.iW(A.bg,!1,4279310375,A.aD,16,A.bn,A.a5,0.08,C.cD(),"Signature: _________________________",0,D.dd,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iX(C.iW(A.bg,!1,4279310375,A.aD,16,A.bn,A.a5,0.08,C.cD(),"Initials: ______",0,D.dd,0.3,0.65,0.78))
w=1
break A
case"approved":t.iX(C.iW(A.L,!1,4278556265,A.aD,28,A.bn,A.u,0.12,C.cD(),"APPROVED",0,D.mG,0.32,0.62,0.08))
w=1
break A
case"draft":t.iX(C.iW(A.L,!1,4292617766,A.aD,28,A.bn,A.u,0.12,C.cD(),"DRAFT",0,D.dd,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iX(C.iW(A.L,!1,871318596,A.aD,36,A.bn,A.u,0.12,C.cD(),"CONFIDENTIAL",0,D.dd,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d3(new C.eqR(t))
w=1
break A
case"progress":t.d3(new C.eqS(t))
w=1
break A
case"stars":t.iX(C.iW(A.L,!1,4279310375,A.aD,36,A.bn,A.a5,0.12,C.cD(),"\u2605\u2605\u2605\u2605\u2606",0,D.qe,0.8,0.1,0.4))
w=1
break A
case"equation":t.iX(C.iW(A.L,!1,4279310375,A.aD,32,A.bn,A.N,0.14,C.cD(),"y = mx + b",0,D.dd,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iX(C.iW(A.L,!1,4279310375,A.aD,18,A.bn,A.a5,0.2,C.cD(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.un,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d3(new C.eqT(t))
w=1
break A
case"compare":t.d3(new C.eqU(t))
w=1
break A
case"link_text":t.iX(C.iW(A.bg,!1,4280640491,A.mL,16,A.bn,A.a5,0.1,C.cD(),"https://example.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"phone":t.iX(C.iW(A.bg,!1,4279310375,A.aD,18,A.bn,A.a5,0.1,C.cD(),"(555) 123-4567",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"email":t.iX(C.iW(A.bg,!1,4280640491,A.aD,18,A.bn,A.a5,0.1,C.cD(),"name@email.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d3(new C.eqW(t))
w=1
break A
case"cover_page":r=t.gdr()
if(r==null){w=1
break A}t.d3(new C.eqX(t,r))
w=1
break A
case"invoice":t.iX(C.iW(A.bg,!1,4279179050,A.aD,16,A.bn,A.a5,0.84,C.cD(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"resume":t.iX(C.iW(A.bg,!1,4279179050,A.aD,17,A.bn,A.a5,0.84,C.cD(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iX(C.iW(A.bg,!1,4279310375,A.aD,16,A.bn,A.a5,0.88,C.cD(),"MEETING MINUTES\nDate: "+C.bCf()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iX(C.iW(A.bg,!1,4279310375,A.aD,17,A.bn,A.a5,0.88,C.cD(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iX(C.iW(A.bg,!1,4279310375,A.aD,15,A.bn,A.a5,0.8,C.cD(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dd,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$q6,v)},
csB(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eO_.t(0,this.z)},
csA(d){if(this.jQ()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b72(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cm,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.n(12)
u=e?f:A.bF
u=B.I(u,A.q,o&&e?2:1)
t=C.i5C(d)
s=o?12:18
r=o?A.H:A.cN
if(o)if(e)q=f
else q=g?A.ad:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.NU,A.f,p,p,D.DU,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fA,B.aD(p,new B.an(A.W,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a7),p)},
bMl(d){var w,v=null,u=this.jQ()
if(u==null)return A.bI
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aA:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.M(D.Qo,new C.esf(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.j,0,v,v)},
v7(d){return this.byQ(d)},
byQ(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$v7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aN9.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.o6(),$async$v7)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d3(new C.eqA(t,d))
case 1:return B.h(u,v)}})
return B.i($async$v7,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eMM
w=h.e
if(w==null)return h.bCF()
v=h.gdr()
v.toString
u=h.c
u.toString
t=B.P(u).ax.a===A.I
u=h.c
u.toString
s=x.w
r=B.aI(u,A.bV,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aI(u,A.eE,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bY:D.bau
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gS0()}else j=!1
if(j)k.push(new C.a7q(h.a.c,!1,h.e.gb9e(),h.gc8K(),g))
else if(s&&h.e!=null&&!h.ke()&&C.ce9(h.e.w)){j=h.a
k.push(new C.a7q(j.c,j.d,g,h.gc9T(),g))}if(s)k.push(h.bMh(w,t,r))
if(s&&h.ke()){w=t?A.fy:A.kq
j=B.n(14)
i=B.I(A.bj.j(0.35),A.q,1)
k.push(B.p(g,B.B(B.a([D.bLI,A.ab,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fy,g,g,g,g,g,g,g,g,12,g,g,A.N,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.AY,A.iC,g,g,g))}w=!n
if(w&&!h.ke())k.push(h.c1M(t,r))
if(w&&h.ke())k.push(h.czU(t))
if(r&&h.jQ()!=null&&w&&!h.ke())k.push(h.c1I(t))
j=B.a([],l)
if(q&&w)j.push(new B.a7(132,g,h.b4W(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a7(g,72,h.b4W(t,!1),g))
i.push(B.E(new B.bI(A.b_,g,g,h.bDX(v,t,!s||p),g),1))
if(h.csB(r)&&u&&s&&!h.ke())i.push(h.c8w(v,t,r))
j.push(B.E(B.v(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.ke()&&h.csA(!1))j.push(new B.a7(240,g,h.bOV(t),g))
k.push(B.E(B.B(j,A.aj,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a7(g,r?72:h.a.e,g,g))
w=B.a([B.v(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c1J(t))
return B.c7(g,m,B.bl(!1,new B.an(A.W,g,A.aa,A.r,w,g),!0,!1,A.af,!0,!0),g,!1,!1,g,!1)},
bCF(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.I
p=w?A.bY:A.bK
v=r.a.e
u=r.c7M(A.bj,A.pW,new C.eri(r),r.gcc2(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.E(r.aLC(A.bj,A.hA,"Blank Presentation",new C.erj(r)),1),A.av,B.E(r.aLC(A.aZ,A.vP,"Class Template",new C.erk(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.by,s,A.mK,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.bzD(w))
else{t=new B.hZ(t,B.U(t).k("hZ<1>"))
A.d.v(u,t.gdL(t).dt(0,new C.erl(r,w),x.l))}return B.c7(q,p,B.bl(!1,B.cw(u,q,new B.Q(18,12,18,v),q,q,A.ag,!1),!0,!1,A.af,!0,!0),q,!1,!1,q,q)},
bKx(){this.m(new C.erW(this))
var w=this.c
w.toString
if(B.aI(w,A.bV,x.w).w.a.a<900){w=$.aW.ak$.d.c
if(w!=null)w.jF()}},
aeS(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jQ()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.eu6(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$aeS)
case 3:case 1:return B.h(u,v)}})
return B.i($async$aeS,v)},
AL(d,e){return this.csX(d,e)},
csX(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$AL=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hT(D.Wz,!0,"Dismiss",j,new C.evF(),new C.evG(d,e),A.iA,!0,x.N),$async$AL)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.aih()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gS0()){r.aih()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aPt(d),$async$AL)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aOT(j,q,d.b),$async$AL)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.aa(i)
j=r.c
if(j==null){w=1
break}j.J(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.F8(d,!1),$async$AL)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hT(D.Wz,!0,"Dismiss",j,new C.evH(),new C.evI(d),A.a1,!0,x.y),$async$AL)
case 20:if(g===!0)r.NM(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.afV("Rename presentation",d.b),$async$AL)
case 24:l=g
if(l!=null)r.cnj(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ag()
k.n(0,"id",C.cD())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.evJ(r,k))
r.pj()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AL,v)},
b_W(d,e){var w=null
return B.bK(!1,D.fuR,w,w,!0,w,w,e,w,B.fx(w,w,w,w,w,w,w,w,w,w,w,A.bj,w,w,w,A.au,w,A.lP,w,w,w,w,w,A.k8,w,w))},
bzD(d){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.eqF(this,d),null)},
bID(d,e,f){var w=new B.M(B.a(d.split(" \u2022 "),x.s),new C.erK(),x.dv).c_(0,new C.erL()),v=B.C(w,w.$ti.k("J.E"))
return new B.D(G.agR,this.aMb(v,e,new C.erM(),f),null)},
aMb(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.ec)
t=e.j(g?0.14:0.1)
s=new B.aT(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.q,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ad:A.bt,n,n,n,10),A.qm],m))}p=d[v]
o=g?A.c.j(0.85):A.aK
q.push(new B.y(p,n,new B.G(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cm(A.aO,A.e,A.Q,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bO(r,r,r,r),new B.bp(s,s,s,s),n,n,A.n),n,n,n,n,A.nf,n,n,n))
A.d.v(l,u)}return B.f6(A.a3,B.B(l,A.m,n,A.e,A.Q,0,n,n),A.f,A.eh)},
bzB(d,e,f){return this.aMb(d,e,null,f)},
bIF(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dcD
else if(v==="hati_kuhoweya")w=D.cZI
else{if(v==="hati_kiapo_uongozi")v=D.cMC
else v=C.kw(v)?D.cTG:A.Q_
w=v}v=this.fy
v===$&&B.c()
return B.c6(v,new C.erP(this,f,d,e,w),null)},
c1J(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jQ()
if(i==null||i.b!==D.cQ)return A.bI
w=k.Wi(i)
v=k.asN(i)
u=A.w.j(0.55)
t=x.p
s=B.bl(!1,new B.D(A.B0,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b7,B.bK(!1,D.fqx,j,j,!0,j,j,new C.etf(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.af,!0,!0)
r=d?A.az:A.c
q=B.n(18)
p=B.I(A.bj.j(0.45),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.h9,B.c0(new B.D(A.eQ,B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),w,A.bj,j,j,j,j,2,D.bRF,A.y,!0,j,!0,j,!0,v,A.ai,j,j,j,j,j,A.wl,j,j,j,j,j,j,!1,"\u2022",j,new C.etg(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a4,A.zx,A.an,j,A.Th,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.be),j),1)
q=B.n(16)
p=d?A.bo:A.c
o=B.I(d?A.aK:A.aL,A.q,1)
n=B.E(B.c9(B.B(B.a([k.tV(G.MU,j,new C.eth(k,i),d),k.tV(G.a_a,j,new C.eti(k,i),d),k.tV(K.al9,j,new C.etj(k,i),d),k.tV(K.a_R,j,new C.etk(k,i),d),k.tV(k.bzz(i.as),j,new C.etl(k,i),d),k.tV(D.amh,j,new C.etm(k,i),d),k.tV(D.amg,j,new C.etn(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.r,j,A.y,j,j,j,j,A.aO),1)
m=A.k.N(i.w)
return B.bZ(0,B.aG(!1,A.a1,!0,j,B.v(B.a([s,r,new B.D(H.ah_,B.p(j,B.B(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aA:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.db],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lk,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ah),0,0,0)},
c1I(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jQ()
if(m==null)return A.bI
w=m.b
v=w===D.cQ
u=B.n(18)
t=x.O
t=d?B.a([A.bo,A.M],t):B.a([A.c,A.aQ],t)
s=B.I(d?A.aK:A.aL,A.q,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cy,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b3A(A.jn,"Edit",new C.et0(o,m),d,!0))
if(w===D.lv)p.push(o.b3A(A.Gd,"Shape & ring",new C.et1(o),d,!0))
p.push(o.tV(A.BL,"Format",new C.et2(o),d))
if(v)A.d.v(p,B.a([o.tV(G.MU,n,new C.et3(o,m),d),o.tV(D.amh,n,new C.et4(o,m),d),o.tV(D.amg,n,new C.et5(o,m),d)],q))
p.push(A.b7)
p.push(o.cqM(A.e6,n,o.gaQb(),d,!0))
p.push(o.tV(A.hn,"Done",new C.et6(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a8(A.a3,A.a8,A.x,t,n,n),A.n),n,n,n,A.AZ,A.lk,n,n,n)},
bzz(d){switch(d.a){case 2:return D.a_O
case 1:case 5:return D.a_Q
default:return D.a_P}},
c2B(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dM
default:return A.bg}},
az8(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.ay
else if(h)w=A.c
else{v=g?A.ad:A.aK
w=v}v=B.n(12)
u=B.n(12)
t=h?L.Gx:n
if(h)s=n
else s=g?A.c.j(0.06):A.bK
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.ec,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.r3,B.aG(!1,A.a1,!0,n,B.aL(!1,v,!1,B.eF(new B.D(new B.Q(q,8,q,8),B.B(o,A.m,n,A.e,A.Q,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ah),n)},
tV(d,e,f,g){return this.az8(d,e,f,g,!1,!1)},
b3A(d,e,f,g,h){return this.az8(d,e,f,g,h,!1)},
cqM(d,e,f,g,h){return this.az8(d,e,f,g,!1,h)},
bMh(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.n(20),m=x.O
m=e?B.a([A.bo,A.M],m):B.a([A.c,A.mU],m)
w=B.I(e?A.aK:A.ox,A.q,1.2)
v=B.a([new B.ac(0,A.G,A.bj.j(e?0.18:0.1),A.cy,18)],x.V)
u=p.a2c(A.eC,"Back",p.gbFJ(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.db,B.E(B.B(B.a([new B.dq(1,A.cn,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.c2:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.N,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.tx,o,A.e,A.j,0,A.cW,o),1)],q)
if(!p.ke()){u=p.a2c(A.rh,"Undo",p.ax.length===0?o:p.gcAp(),e)
A.d.v(r,B.a([u,p.a2c(D.bFe,"Redo",p.ay.length===0?o:p.gcm_(),e)],q))}r.push(p.a2c(A.y2,"PDF",new C.es8(p),e))
r.push(p.a2c(A.hB,"Download as video",new C.es9(p),e))
if(!p.ke())r.push(B.BL(o,o,B.X(A.o4,e?A.ad:A.bt,o,o,o,o),new C.esa(p),A.J,new C.esb(p),A.af,"More",x.N))
r.push(A.db)
r.push(B.aG(!1,A.a1,!0,o,B.aL(!1,B.n(14),!0,B.eF(D.e8y,o,new B.o(o,o,o,B.n(14),o,L.Gx,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gazZ(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ah))
return B.p(o,B.B(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),o,o,o,D.bqW,D.bw1,o,o,o)},
czU(d){var w=this,v=null,u=B.n(18),t=d?A.az.j(0.92):A.c.j(0.96),s=B.I(d?A.cx:A.aL,A.q,1)
return B.p(v,B.c9(B.B(B.a([w.iG(A.u2,"Print",new C.ewq(w),d),w.iG(A.y2,"Download PDF",new C.ewr(w),d),w.iG(A.q1,"Present",w.gazZ(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.r,v,A.y,v,v,v,v,A.aO),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.AY,G.aiF,v,v,v)},
a2c(d,e,f,g){var w,v=null
if(f==null)w=g?A.b2:A.dq
else w=g?A.ad:A.aK
return B.aH(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cd)},
c1M(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.n(18)
v=d?A.az.j(0.92):A.c.j(0.96)
u=B.I(d?A.cx:A.aL,A.q,1)
t=x.f0
t=B.C(new B.M(p,new C.etq(r,d),t),t.k("ak.E"))
t.push(new B.D(X.aij,new B.fg(new C.etr(r),q),q))
A.d.v(t,w?B.a([new B.D(R.vw,r.agy(A.ll,"Ending celebration",r.gccf(),d),q),new B.D(R.vw,r.agy(A.Gd,"Logo ring & frame",r.gccW(),d),q)],x.p):A.hc)
A.d.v(t,w?B.a([new B.D(R.vw,r.agy(A.ni,"Look and feel",r.gccX(),d),q),new B.D(R.vw,r.agy(A.oV,"Edit this slide's text",r.gcdt(),d),q)],x.p):A.hc)
t.push(new B.D(R.vw,B.hs(B.aD(q,B.p(q,D.eMb,A.f,q,q,new B.o(q,q,q,B.n(999),B.a([new B.ac(0,A.G,O.lg.j(0.4),A.J,10)],x.V),D.aog,A.n),q,34,q,q,A.fV,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ets(r),q,q,q,q,q,q,!1,A.a7),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.c9(B.B(t,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,D.bwu,q,q,A.aO)
s=e?8:10
return B.p(q,B.v(B.a([t,B.c9(r.cot(d),A.r,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aO)],x.p),A.aj,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.AY,q,q,q,q)},
cot(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.d6u[v]
u.a=null
s=u.a=t.b
w.push(e.lI(e.cqb(s),t.a,new C.euP(u,e),a3,D.aN9.t(0,s)))}w.push(e.iG(A.kY,"Notes Slide",new C.euQ(e),a3))
w.push(e.lI(A.Gc,"Quiz",new C.euR(e),a3,!0))
w.push(e.lI(M.FN,"Worksheet",new C.ev1(e),a3,!0))
w.push(e.lI(V.Gf,"Flashcard",new C.evc(e),a3,!0))
w.push(e.lI(A.NJ,"Lab Report",new C.evn(e),a3,!0))
w.push(e.lI(A.tX,"Rubric",new C.evu(e),a3,!0))
w.push(e.lI(A.oP,"Minutes",new C.evv(e),a3,!0))
w.push(e.lI(A.o3,"Syllabus",new C.evw(e),a3,!0))
w.push(e.lI(A.NP,"Timeline",new C.evx(e),a3,!0))
return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.d7I[v]
w.push(e.lI(r.b,r.c,new C.evy(e,r),a3,!D.aNf.t(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.B(B.a([e.iG(A.yn,a0,e.gaLT(),a3),e.iG(A.u_,"Picture",new C.euS(e),a3),e.iG(A.yh,"Bio link",new C.euT(e),a3),e.iG(A.a0j,"Table",new C.euU(e),a3),e.iG(A.NN,"Sticky",new C.euV(e),a3),e.iG(A.tZ,"Divider",new C.euW(e),a3),e.iG(A.BM,"Header",new C.euX(e),a3),e.lI(A3.vF,"Rectangle",new C.euY(e),a3,!0),e.lI(A.r9,"Circle",new C.euZ(e),a3,!0),e.lI(A.a_G,"Triangle",new C.ev_(e),a3,!0),e.lI(A.iY,"Arrow",new C.ev0(e),a3,!0),e.lI(D.bDH,"Parallelogram",new C.ev2(e),a3,!0),e.lI(D.bGc,"Hexagon",new C.ev3(e),a3,!0),e.lI(A.tZ,"Line",new C.ev4(e),a3,!0),e.lI(A.y2,"PDF",new C.ev5(e),a3,!0),e.lI(O.a0t,"Signature",new C.ev6(e),a3,!0),e.iG(A2.BB,"Quote",new C.ev7(e),a3),e.iG(D.a_i,a1,new C.ev8(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aI(w,A.bV,x.w).w
u=x.p
t=B.B(B.a([e.aMI("Wide 16:9",D.CB,a3),e.aMI("Short 9:16",D.oe,a3),new B.D(A.fA,B.mJ(D.bIl,d,D.fmS,d,new C.ev9(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.B(B.a([e.bFY("This slide",!e.Q,a3,new C.eva(e)),A.bp,e.aOT("All slides",e.Q,a3,new C.evb(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bFZ()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c2:A.bJ,d,d,d,d,d,d,d,d,10,d,d,A.a5,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.M(D.a2h,new C.evd(e),n),n.k("ak.E"))
n=B.c9(B.B(n,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.d8H[v]
j=B.b0(k)
i=new B.ay(k===4294967295?A.dq:A.b2,1.5,A.q,-1)
l.push(new B.D(A.fA,B.aD(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bO(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eve(e,k),d,d,d,d,d,d,!1,A.a7),d))}l=B.c9(B.B(l,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bDx()
g=B.U(h).k("M<1,D>")
h=B.C(new B.M(h,new C.evf(e,a3),g),g.k("ak.E"))
return new B.a7(w.a.a-20,d,B.v(B.a([t,A.O,q,A.am,p,A.O,o,A.at,n,A.O,m,A.at,l,A.O,j,A.at,B.c9(B.B(h,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO),A.am,e.bZz(a3)],u),A.F,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.jQ()
w=e.c
w.toString
w=B.aI(w,A.bV,x.w).w
u=new C.euO(e)
t=new C.evz(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.Qo,f.dy,new C.evg(e,u,f),A.aZ)
A.d.v(p,B.a([o,A.at,n,A.O,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.at],q))}q=e.gdr()
q=q==null?d:q.r
p.push(t.$4(D.Qo,q,new C.evh(e,u),A.bj))
return new B.a7(w.a.a-20,d,B.v(p,A.F,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.iG(A.kY,w,new C.evi(e),a3),e.iG(A.u2,"Print deck",new C.evj(e),a3),e.lI(D.akc,"Export JSON",new C.evk(e),a3,!0),e.iG(A.fM,"Duplicate Slide",e.gaR3(),a3),e.iG(A.e6,a2,e.gaQc(),a3),e.cui(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jQ()
w=x.p
u=B.a([e.iG(D.a_i,a1,new C.evl(e),a3),e.iG(A.fM,"Duplicate",e.gaR3(),a3),e.iG(A.e6,a2,e.gaQc(),a3),e.iG(A.q1,"Present",e.gazZ(),a3),e.iG(A.BK,a0,e.gaLT(),a3),e.iG(A.BE,"Fit Text",new C.evm(e),a3),e.iG(A.y2,"Download PDF",new C.evo(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iG(A.ku,"Transfer",new C.evp(e),a3))
if(f!=null){w=B.a([A.ab,e.iG(G.MU,"Bold",new C.evq(e,f),a3),e.iG(G.a_a,"Italic",new C.evr(e,f),a3),e.iG(G.ajO,"Underline",new C.evs(e,f),a3),e.iG(Ae.MV,"Bullets",new C.evt(e,f),a3),e.bOE(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bMl(a3))
w.push(e.iG(D.bCk,"Delete",e.gaQb(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.j,0,d,d)}},
aMI(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.oe
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a82,t,t,t)],v)
if(w)A.d.v(u,B.a([A.db,D.bHx],v))
return new B.D(A.fA,B.j8(t,t,t,B.B(u,A.m,t,A.e,A.Q,0,t,t),t,new C.erd(this,w,e),s===e,A.bj.j(0.25),t,t,t),t)},
cui(d){var w,v,u,t,s,r=this,q=null,p=r.gdr()
if(p==null)return A.bI
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.b2:A.cr,A.q,1)
u=B.n(8)
t=B.X(A.FL,d?A.aA:A.ak,q,q,q,14)
s=B.aH(q,q,q,q,D.anf,q,q,q,new C.evW(r,p),q,q,q,q,q,A.cd)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bi,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.an6,q,q,q,new C.evX(r,p),q,q,q,q,q,A.cd)],x.p),A.m,q,A.e,A.Q,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.Fr,A.mr,q,q,q)},
cqb(d){switch(d.a){case 6:return V.Gf
case 7:return A.Gc
case 8:return M.FN
case 4:return A.BM
default:return A.kY}},
bOE(d,e){var w=null,v=B.I(e?A.b2:A.cr,A.q,1),u=B.n(8),t=B.aH(w,w,w,w,D.anf,w,w,w,new C.esl(this,d),w,w,w,w,w,A.cd),s=A.k.N(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bi,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.an6,w,w,w,new C.esm(this,d),w,w,w,w,w,A.cd)],x.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.xM,A.mr,w,w,w)},
bZz(d){var w=null
return B.BL(B.Da(B.X(A5.a_l,d?A.ad:A.bt,w,w,w,16),w,w,D.fsk,w,w,w),w,w,new C.esT(),A.J,this.gbAg(),A.cp,"Slide layout",x.fO)},
lI(d,e,f,g,h){var w=null,v=B.n(14),u=B.n(14),t=g?A.c.j(0.06):A.bK,s=B.I(g?A.dr:A.aL,A.q,1),r=x.p,q=B.a([B.X(d,g?A.dv:A.bj,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.NU,A.f,w,w,D.DU,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fA,B.aG(!1,A.a1,!0,w,B.aL(!1,v,!0,B.eF(new B.D(A.h9,B.v(B.a([new B.an(A.W,w,A.aa,A.f,q,w),A.cV,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aS:A.bt,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.Q,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w)},
iG(d,e,f,g){return this.lI(d,e,f,g,!1)},
b4W(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ag:A.aO
v=B.hJ(t,new C.ew7(u,s,e,d),s.r.length,A.cp,t,w,new C.ew8(e),!1)
s=d?A.az:A.bK
w=B.a([],x.p)
if(e&&!u.ke())w.push(new B.D(A.cp,B.Hx(E.ant,new C.ew9(u),B.nz(t,A.bj,t,t,t,t,t,t,t,t,t,t,E.aNS,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.v(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bDX(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.oe?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.Q(u,u,u,u),new B.bI(A.b_,v,v,new B.fH(w,B.aD(v,B.cq(new C.erC(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.erD(this),v,v,v,v,v,v,!1,A.a7),v),v),v)},
bDZ(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kw(a9.w))===!0,b1=b0&&C.fCh(b3),b2=b0&&b3.b===D.l3&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.ke())v=!b0||a7.c0R(b3)
else v=!1
if(!a7.ke())u=!b0||a7.c0Q(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.cg:A.bj
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.h01(b3))o=a8
else if(p&&!a7.ke())o=a7.gc8M()
else o=a7.ke()?a8:new C.erq(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c7:A.jG
i=w&&C.h01(b3)&&a7.zO()?new C.err(a7,b3):a8
h=v&&b3.b===D.cQ?new C.ers(a7,b3):a8
g=u?new C.ert(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bl
else e=q?A.c_:r
else e=A.K
e=B.I(e,A.q,t?2:0)
d=B.n(t?6:0)
if(b1)a0=A.c_.j(0.08)
else a0=b3.b===D.l3?A.K:a8
if(b1){a1=a7.ke()?"":"Tap to sign"
a1=B.av(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.c_.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.N,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aI(a1,A.bV,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.zO()
a3=b3.b===D.cQ
a4=a3?a7.Wi(b3):a8
a5=a3?a7.asN(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aI(a6,A.bV,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eru(a7,b3):a8
a3=v&&a3?new C.erv(a7,b3):a8
a6=C.b0y(q,a4,a1,b3,a5,a2,a3,new C.erw(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.n(6)
d.push(B.ao(-4,B.aD(a8,B.p(a8,D.bKm,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.q,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.erx(a7,b3,b4,b5),a8,a8,new C.ery(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.ke()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aD(a8,B.p(a8,D.bL0,A.f,a8,a8,new B.o(A.dz,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbX9(),a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.ke()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aD(a8,B.p(a8,D.bMz,A.f,a8,a8,new B.o(A.c_,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.erz(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cQ)if(a7.w!==a9){e=a7.c
e.toString
e=B.aI(e,A.bV,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.av(B.aD(a8,B.p(a8,D.fB2,A.f,a8,a8,new B.o(A.bj,a8,a8,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kW,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.erA(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aD(j,B.eH(A.A,f,new B.an(A.W,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a7),k*b5,new B.cy("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aOT(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bj.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.n(10)
u=B.I(e?A.bj:A.bF,A.q,1)
if(e)t=A.bj
else t=f?A.aA:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.db,B.p(r,D.NU,A.f,r,r,D.DU,r,12,r,r,r,r,r,12)],s))
return B.aD(r,B.p(r,B.B(t,A.m,r,A.e,A.Q,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h8,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a7)},
bFY(d,e,f,g){return this.aOT(d,e,f,g,!1)},
c8w(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.T$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.as(new B.bb(v,A.b5,A.aN),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.az:A.aQ
t=f?A.wN:l
if(f)s=new B.bO(new B.ay(e?A.bF:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rB,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.bt,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b7,m.b_W(e,new C.etu(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aK,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c2:A.bJ,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.v(B.a([p,A.am,B.E(B.aM(l,A.T,!1,l,!0,A.r,l,B.aN(),k,l,l,l,l,l,2,B.bs(l,new B.b4(4,B.n(10),A.dg),l,A.bS,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.etv(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a4,l,A.an,l,l,l,l),1)],q),A.aj,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aSm(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jQ()
if(a2==null)return A.bI
w=new C.esz(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dR:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b7,a0.b_W(a3,a0.gbKw())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.S)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.fnm,B.E(B.kZ(a1,a1,a1,u,0.05,new C.esA(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.B(B.a([D.fzw,B.E(B.kZ(a1,a1,a1,t,0.05,new C.esB(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cQ
if(m)o.push(B.B(B.a([D.fhd,B.E(B.kZ(a1,a1,a1,96,10,new C.esC(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lv
if(l||n===D.l3||n===D.RI)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.ft2,B.E(B.kZ(a1,a1,a1,s,0,new C.esD(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.B(B.a([D.fAM,B.E(B.kZ(a1,a1,a1,r,0,new C.esE(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.C1[j]
i.a=null
g=h.a
i.a=g
k.push(B.j8(a1,a1,a1,new B.y(h.b,a1,A.qr,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.esF(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bY(A.bA,k,A.bq,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.BX[j]
f.a=null
g=e.a
f.a=g
h.push(B.j8(a1,a1,a1,new B.y(e.b,a1,A.qr,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.esG(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.O,l,A.am,k,A.O,i,A.am,B.bY(A.bA,h,A.bq,6,6)],p))}o.push(A.O)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.M(v,new C.esH(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.am,B.bY(A.bA,l,A.bq,6,6),A.ac,B.hc5(new C.esI(w,a2),D.cnN,B.et([a2.as],k),!0,a1,k)],p))}if(n===D.f1){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.M(v,new C.esJ(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bY(A.bA,m,A.bq,0,6)],p))}o.push(A.ac)
o.push(B.dn(D.bMl,D.fv1,new C.esK(a0,a5),B.bn(A.bz,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cw(o,a1,a1,q,a1,A.ag,a5)
if(a5)return d
q=a3?A.cx:A.c
p=a4?A.wN:a1
if(a4)o=new B.bO(new B.ay(a3?A.bF:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rB,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.F9,a1,a1,a1)},
bOV(d){return this.aSm(d,!1,!1,null)},
c7M(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c6(p,new C.esN(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.f7e,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bd,B.E(B.v(B.a([w,A.bD,A.cV,r.bzB(D.cRd,d,B.P(v).ax.a===A.I)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dU(B.hs(B.aG(!1,A.a1,!0,q,B.aL(!1,q,!0,B.eF(D.eRC,q,new B.o(q,q,B.I(A.c.j(0.55),A.q,1.3),q,B.a([new B.ac(0,A.G,A.c_.j(0.4),A.em,8)],p),D.aol,A.a6),q,q,q),A.cL,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q,"Documents (Hati)",q,q),A.J)],u))
t=B.B(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.P(w).ax.a===A.I
w=B.n(20)
v=x.O
v=s?B.a([D.b7c,D.b7A],v):B.a([A.c,A.kq],v)
u=B.I(d.j(s?0.45:0.25),A.q,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cy,14)],p),new B.a8(A.ax,A.aC,A.x,v,q,q),A.n),q,q,q,q,A.bS,q,q,q)},
aLC(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.eqm(this,g,d,e,f),null)},
afV(d,e){return this.ckf(d,e)},
ckf(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$afV=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.as(new B.bb(e,A.b5,A.aN),r)
p=t.c
p.toString
w=3
return B.b(B.cb(null,null,!0,null,new C.eur(d,q),p,null,!0,!0,x.N),$async$afV)
case 3:s=g
q.T$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$afV,v)},
PD(d){var w=d.bT()
return""+B.bH(w)+"/"+B.bQ(w)+"/"+B.bA(w)}}
C.aeQ.prototype={}
C.aym.prototype={
S(){return new C.bc6(null,null)}}
C.bc6.prototype={
gcwv(){var w,v=this.a.c,u=v.f.bT(),t=""+B.bH(u)+"/"+B.bQ(u)+"/"+B.bA(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
a_(){var w,v=this,u=null
v.a1()
w=B.bj(u,A.pP,u,1,u,v)
w.ff(0,!0)
v.d!==$&&B.aP()
v.d=w
w=B.bj(u,D.bpr,u,1,u,v)
w.cs(0)
v.e!==$&&B.aP()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.bt_()},
IP(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.ct.az(0,new B.hP(w,v,A.ct).az(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.av(new B.D(D.buT,B.c6(new B.h7(B.a([u,w],x.dS)),new C.d02(this),v),v),v,v,v)}}
C.bck.prototype={
B(d){var w=null,v=B.n(22),u=B.I(A.aK,A.q,1),t=x.p
return B.av(new B.D(D.bv9,B.aG(!1,A.a1,!0,w,B.p(w,B.bw(B.n(22),B.v(B.a([new B.D(D.bul,B.v(B.a([B.p(w,D.bL6,A.f,w,w,new B.o(A.ay.j(0.12),w,w,B.n(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aP,D.fx7,A.S,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.f8n,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dY,D.bov,B.B(B.a([B.E(B.bK(!1,D.flB,w,w,!0,w,w,new C.d0o(d),w,B.fx(w,w,w,w,w,w,w,w,w,w,w,A.bJ,w,w,w,w,w,A.nc,w,A.oi,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bo,w,w,w,48,w,w,w,w,w,1),B.E(B.bK(!1,D.fqS,w,w,!0,w,w,new C.d0p(d),w,B.fx(w,w,w,w,w,w,w,w,w,w,w,A.ay,w,w,w,w,w,A.nc,w,A.oi,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.Q,0,A.p),A.aq),A.f,w,A8.Vn,new B.o(A.az,w,u,v,D.cRx,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w),w,w,w)}}
C.Jy.prototype={
S(){return new C.bc5()}}
C.bc5.prototype={
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
return B.dU(B.dd(B.aD(o,B.vn(B.df(o,B.B(B.a([r,A.av,new B.dq(1,A.cn,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f5:A.c,o,o,o,o,o,o,o,o,13,o,o,A.N,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b8,A.Q,0,o,o),o,o,A.bc,new B.o(n,o,u,v,t,o,A.n),A.eG,o,o,o,A.o_,o,o,1/0),A.ct,A.ji,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d_Y(p,d),new C.d_Z(p),new C.d0_(p),new C.d00(p),o,o,o,!1,A.a7),k),new B.u(0,(1-k)*16))}}
C.Pm.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.n(16),s=B.n(16),r=B.n(14),q=B.I(A.c.j(0.5),A.q,1.2),p=x.p
return B.aG(!1,A.a1,!0,t,B.aL(!1,s,!0,new B.D(A.eQ,B.B(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a8(A.ax,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.er,B.E(B.v(B.a([B.d(w.e,v,v,v,v,v,v,A.ny,v,v,v),A.bD,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.X(A.ey,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ah)}}
C.a_a.prototype={
S(){return new C.aDT(D.dd,null,null)}}
C.aDT.prototype={
gYw(){var w,v=this,u=v.w
if(u===$){w=B.bj(null,D.bp1,null,1,null,v)
v.w!==$&&B.bL()
v.w=w
u=w}return u},
b5l(d){if(!this.a.c.ay)return
this.x=d
this.gYw().iA(0,0)},
a_(){var w,v=this
v.a1()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.avg(D.eXY)
C.i2y()
v.R1()},
q(){var w=this,v=w.f
if(v!=null)v.a6(0)
w.gYw().q()
v=w.z
if(v!=null)v.a6(0)
C.avg(D.eXZ)
C.i2B()
w.bv7()},
czh(){B.jl()
this.m(new C.ex6())
var w=this.c.J(x.q).f
w.a4j()
if($.bjS)w.U(D.eUQ)},
R1(){var w,v=this,u=v.f
if(u!=null)u.a6(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cM(B.dC(0,0,0,0,0,A.o.D(C.haf(u,w),1,120)),new C.ewX(v))},
cyX(){var w,v=this
v.m(new C.ex5(v))
if(v.r)v.R1()
else{w=v.f
if(w!=null)w.a6(0)}},
gaUf(){var w=this.a.c.db
return(w==null?"":w).length!==0},
ct2(){var w=this,v=w.f
if(v!=null)v.a6(0)
w.m(new C.ewY(w))
v=w.z
if(v!=null)v.a6(0)
if(w.a.c.ch&&w.r)w.z=B.cM(A.li,new C.ewZ(w))},
avE(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a6(0)
if(u.a.c.ch){u.m(new C.ewT(u))
u.R1()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaUf()){u.ct2()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.ewU(u,A.o.E(w+1,s)))
u.b5l(w)
u.R1()}},
ciU(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a6(0)
v.m(new C.ewV(v))
v.R1()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.ewW(v,w,t))
v.b5l(w)
v.R1()}},
cuu(d){var w,v=this,u=v.e
if(u===D.cm){u=v.d
u===$&&B.c()
return new B.nf(d,new B.cy(u,x.ac))}w=v.cuv(u)
u=v.d
u===$&&B.c()
return B.qg(new B.nf(d,new B.cy(u,x.ac)),w,new C.ex3(),A.bc,A.bc,new C.ex4(v))},
cuv(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bpn
case 16:return A.ks
case 18:return A.n9
default:return A.na}},
cut(d,e,f){var w,v,u,t=null,s=B.cI(A.ct,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cZ(s,!1,e,t)
case 2:case 17:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.uw,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 3:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.RY,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 4:case 21:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.ik,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 5:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.uv,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 6:case 16:w=x.b
return B.im(A.A,new B.cZ(s,!1,e,t),t,new B.bf(s,new B.bq(0.82,1,w),w.k("bf<bJ.T>")))
case 7:w=x.b
return B.im(A.A,new B.cZ(s,!1,e,t),t,new B.bf(s,new B.bq(1.18,1,w),w.k("bf<bJ.T>")))
case 8:return B.c6(s,new C.ex_(s),e)
case 9:return B.c6(s,new C.ex0(s),e)
case 10:return B.c6(s,new C.ex1(s),e)
case 11:return B.c6(s,new C.ex2(s),e)
case 12:w=x.b
return new B.cZ(s,!1,B.im(A.A,e,t,new B.bf(s,new B.bq(1.03,1,w),w.k("bf<bJ.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jz(B.jr(e,new B.bf(s,new B.bq(A.uw,A.J,v),v.k("bf<bJ.T>")),t,!0),A.r,new C.bqW(w,t))
case 15:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.RY,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 19:w=B.dp()
w.mM((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jI(v,u,v,1)
return B.ft(A.A,B.dd(e,s.gp(0)),t,w,!0)
case 20:return B.eH(A.A,(1-s.gp(0))*0.2,new B.cZ(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jz(new C.anT(B.c6(n.gYw(),new C.ex7(n,v,w),m),m),A.r,m)}else{t=B.rx(new C.Iw(w,!0,!1,m))
l=B.b0(w.e)
u=n.cuu(B.el(B.jz(t,A.r,m),l,!0))}l=B.n(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.haf(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oo,m,m,m),A.bp,D.bNo],k),A.m,m,A.e,A.Q,0,m,m),A.f,m,m,new B.o(A.aW,m,m,l,m,m,A.n),m,m,m,m,A.fJ,m,m,m)
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
l.push(B.bZ(0,new C.Nf(new C.El(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.oe?0.5625:1.7777777777777777
l.push(B.av(new B.fH(r,B.jz(B.un(A.af,u,!0,4,1,!0,!0,m),A.r,m),m),m,m,m))}if(!$.bjS){r=B.Hx(A.l0,new C.ex8(d),B.nz(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bl(!0,B.B(B.a([r,A.ab,B.Hx(B.X(n.r?Ak.yf:A.iF,m,m,m,m,m),n.gcyW(),B.nz(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.af,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.n(20)
k.push(B.ao(16,B.bl(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.ht,m,m,m),A.f,m,m,new B.o(A.aW,m,m,r,m,m,A.n),m,m,m,m,A.fJ,m,m,m),!0,!1,A.af,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bl(!0,B.aD(A.c7,B.p(A.lb,$.bjS?A.bI:s,A.f,m,m,m,m,64,m,m,D.bq8,m,m,150),A.y,!1,m,n.gczg(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a7),!0,!1,A.af,!0,!0),m,m,m,0,0,m))
return B.c7(m,A.w,B.aD(m,new B.an(A.W,m,A.b0,A.r,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.ex9(n,d),m,m,m,!1,A.a7),m,!1,!1,m,m)}}
C.JF.prototype={
B(d){var w=null
return B.p(w,B.bl(!0,new B.D(E.ai5,this.c,w),!0,!1,A.af,!0,!1),A.f,w,w,D.b_Z,w,w,w,w,w,w,w,w)}}
C.bqW.prototype={
j6(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jL(d){return d.b!==this.b}}
C.bgZ.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.n(999)
break A}if("rounded"===q){w=B.n(18)
break A}if("arch"===q){w=D.aXL
break A}w=B.n(6)
break A}v=s.e
u=B.I(v?A.aE:A.K,A.q,2.5)
if(q==="circle")t=B.n(999)
else t=B.n(q==="rounded"?9:3)
w=B.df(r,B.av(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.vW,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.bc,new B.o(s.f,r,u,w,r,r,A.n),A.hy,r,64,r,r,r,r,64)
return B.aD(r,new B.a7(78,r,B.v(B.a([w,A.am,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a7)}}
C.bgY.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dl5.h(0,p)
if(o==null)o=D.d7T
p=p==="none"
w=p?q:new B.a8(A.a3,A.a8,A.x,o,q,q)
p=p?A.cU.j(0.25):q
v=r.e
u=v?B.I(A.aE,A.q,2.5):q
t=r.r.j(0.15)
s=v?K.amt:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.ek,q,q,52)
return B.aD(q,new B.a7(66,q,B.v(B.a([w,A.am,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a7)}}
C.aJA.prototype={
aS(){this.b_()
this.aY()
this.dJ()},
q(){var w=this,v=w.b3$
if(v!=null)v.a3(0,w.gdD())
w.b3$=null
w.a2()}}
C.aLC.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gby())
w.a8$=null
w.a2()},
aS(){this.b_()
this.aY()
this.bz()}}
C.bwF.prototype={}
C.aLD.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gby())
w.a8$=null
w.a2()},
aS(){this.b_()
this.aY()
this.bz()}}
C.b0B.prototype={}
C.VF.prototype={
S(){return new C.aDR()},
bfU(d){return this.e.$1(d)}}
C.aDR.prototype={
gb3G(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gaa1(){var w,v
if(this.d==="all")return B.bo(this.a.d,!0,x.I)
w=this.gb3G()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaNy(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb3G()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb4V(){return A.d.cI(this.gaa1(),0,new C.ewD())},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w.length!==0)v.e=A.d.gI(w).a
v.QD()},
QD(){var w=0,v=B.j(x.H),u,t=this,s
var $async$QD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b1b(s.c,s.f),$async$QD)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.ewz(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$QD,v)},
IR(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$IR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gaa1()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.L)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fFt(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.p4(o,q.c,q.f),$async$IR)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.e8(new C.ewC(t,p),!1,null,x.H)
w=4
return B.b(B.a6(o,!1).cl(q),$async$IR)
case 4:q=t.a
w=5
return B.b(B.p3(q.c,q.f),$async$IR)
case 5:w=6
return B.b(t.QD(),$async$IR)
case 6:case 1:return B.h(u,v)}})
return B.i($async$IR,v)},
R_(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$R_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hy(o,D.dYB,!0,"NgmySlidesTransferScan",x.N),$async$R_)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.ewA(t))
w=4
return B.b(C.ah0(s),$async$R_)
case 4:r=e
t.m(new C.ewB(t))
o=J.a5(r)
if(o.gam(r)){o=t.c
if(o==null){w=1
break}o.J(x.q).f.U(D.eTJ)
w=1
break}w=5
return B.b(t.a.bfU(r),$async$R_)
case 5:q=t.c
if(q==null){w=1
break}B.a6(q,!1).O(null)
q=t.c.J(x.q).f
p=o.gM(r)
o=o.gM(r)===1?"":"s"
q.U(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$R_,v)},
IQ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$IQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gaa1()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.p4(s,r.c,r.f),$async$IQ)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fFI(null,A.d.gI(n),s,t.a.f)}else q=C.fFI(n,null,r.c,r.f)
if(n.length===1){s=A.d.gI(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aK(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Gg(q,"ngmy_slides_"+p,!1),$async$IQ)
case 4:o=e
s=t.a
w=5
return B.b(B.p3(s.c,s.f),$async$IQ)
case 5:w=6
return B.b(t.QD(),$async$IQ)
case 6:s=t.c
if(s==null){w=1
break}s.J(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$IQ,v)},
a2n(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2n=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.ewE(t))
w=3
return B.b(C.bBY(),$async$a2n)
case 3:s=e
t.m(new C.ewF(t))
if(s==null||J.cn(s)){w=1
break}w=4
return B.b(t.a.bfU(s),$async$a2n)
case 4:r=t.c
if(r==null){w=1
break}B.a6(r,!1).O(null)
r=t.c.J(x.q).f
q=J.a5(s)
p=q.gM(s)
q=q.gM(s)===1?"":"s"
r.U(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a2n,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.d9:A.bK,k=o.gaa1().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bT(A.A,0.5,A.x,n,0,B.a([A.bj.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.X(A.cD,m?A.ad:A.ak,n,n,n,n),n,n,n,new C.ewI(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.zv],h),A.m,n,A.e,A.j,0,n,n)
w=B.n(24)
v=B.a([new B.ac(0,A.G,A.bj.j(0.35),A.eU,24)],x.V)
u=B.ao(n,B.X(A.pW,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.n(16)
s=B.a([u,B.B(B.a([B.p(n,D.bNU,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.q,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.er,B.E(B.v(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.at,D.bz8],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hs(B.aD(A.c7,D.eRE,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcdF(),n,n,n,n,n,n,!1,A.a7),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.W,n,A.aa,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a0Y,A.n),n,n,n,n,E.YP,n,n,1/0),A.dY,o.awO(m,"What to transfer"),A.ac,B.B(B.a([B.E(o.aWy(A.q1,m,new C.ewJ(o),o.d==="one","Pick a single deck","One presentation"),1),A.av,B.E(o.aWy(D.bDz,m,new C.ewK(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d7,o.awO(m,"Choose presentation"),A.S],h)
u=o.a.d
if(u.length===0){u=m?A.az:A.c
t=B.n(16)
s=B.I(m?A.bF:A.aL,A.q,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aA:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bP,n,n,n))}else A.d.v(v,new B.M(u,new C.ewL(o,m),B.U(u).k("M<1,r>")))
A.d.v(w,v)}w.push(A.mK)
w.push(o.awO(m,"Transfer options"))
w.push(A.ac)
w.push(B.B(B.a([B.E(o.apw(A.aR,k,!0,A.jq,m,o.r,o.gc7Q(),"Scan on another device","Show QR"),1),A.av,B.E(o.aLD(A.jW,!0,A.iZ,m,o.gcpL(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.S)
w.push(B.B(B.a([B.E(o.by5(A.aV,k,A.hB,m,o.r,o.gc7N(),"Download .json","Backup file"),1),A.av,B.E(o.aLD(A.aF,!0,Ax.yp,m,o.gcBF(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bj.j(m?0.12:0.08)
u=B.n(16)
t=B.I(A.bj.j(0.28),A.q,1)
s=B.X(A.ln,A.bj.j(0.9),n,n,n,18)
r=o.gaNy()
q=o.gb4V()
p=o.gb4V()===1?"":"s"
A.d.v(w,B.a([A.by,B.p(n,B.B(B.a([s,A.av,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.bt,n,n,n,n,n,n,n,n,12,n,n,A.a5,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bB,n,n,n)],h))}j=B.a([j,B.bl(!0,B.v(B.a([new B.D(Ag.Mv,i,n),B.E(B.cw(w,n,D.btv,n,n,A.ag,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)],h)
if(o.f)j.push(B.p(n,T.VH,A.f,A.dB,n,n,n,n,n,n,n,n,n,n))
return B.c7(n,l,new B.an(A.W,n,A.aa,A.r,j,n),n,!1,!1,n,n)},
af4(){var w=0,v=B.j(x.H),u=this,t,s
var $async$af4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.i8U(s,t.d,t.e),$async$af4)
case 2:return B.h(null,v)}})
return B.i($async$af4,v)},
awO(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bj,w,w,B.n(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aA:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aWy(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.n(18),q=B.n(18),p=e?A.az:A.c
if(g)w=A.bj
else w=e?A.bF:A.aL
w=B.I(w,A.q,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bj.j(0.2),A.cy,14)],x.V):s
u=A.bj.j(g?0.2:0.1)
t=B.n(12)
t=B.p(s,B.X(d,A.bj,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cp,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aG(!1,A.a1,!0,s,B.aL(!1,r,!0,B.eF(new B.D(A.bB,B.v(B.a([t,A.S,u,A.bD,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ah)},
bIE(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.n(16),n=e?A.az:A.c,m=B.n(16)
if(p)w=A.bj
else w=e?A.bF:A.aL
w=B.I(w,A.q,p?2:1)
v=B.p(q,D.bO4,A.f,q,q,new B.o(q,q,q,B.n(12),q,new B.a8(A.a3,A.a8,A.x,B.a([A.bj,A.bj.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.v(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.ef:A.r9
if(p)r=A.bj
else r=e?A.b2:A.dq
return new B.D(A.cB,B.aG(!1,A.a1,!0,q,B.aL(!1,o,!0,B.p(q,B.B(B.a([v,A.bd,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bB,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.ewy(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q)},
apw(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.n(18),o=B.n(18),n=h?A.az:A.c
if(f)w=d.j(0.45)
else w=h?A.bF:A.aL
w=B.I(w,A.q,f?1.5:1)
v=d.j(0.14)
u=B.n(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.r7,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.an0,A.f,s,s,D.b_L,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.dd(B.aG(!1,A.a1,!0,s,B.aL(!1,p,!0,B.eF(new B.D(E.Yu,B.v(B.a([new B.an(A.W,s,A.aa,A.f,u,s),A.ac,v,A.bD,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ah),r)},
aLD(d,e,f,g,h,i,j){return this.apw(d,e,!1,f,g,!1,h,i,j)},
by5(d,e,f,g,h,i,j,k){return this.apw(d,e,!1,f,g,h,i,j,k)}}
C.VG.prototype={
S(){return new C.bjR()}}
C.bjR.prototype={
a_(){this.a1()
this.adW()},
adW(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$adW=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fFI(null,A.d.gI(m),k,r.a.f):C.fFI(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gI(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kw(A.d.gI(n).w))C.fFt(A.d.gI(r.a.d),D.d5Q)
n=r.a
m=n.c
n=C.i5S(n.d)
w=7
return B.b(C.fFH(p,C.i5X(r.a.d),n,m,q),$async$adW)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.ewM(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.ewN(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adW,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.I,h=i?A.d9:A.bK,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.ewO())
v=B.aH(j,j,j,j,B.X(A.eC,i?A.ad:A.ak,j,j,j,18),j,j,j,new C.ewP(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.zv],u),A.m,j,A.e,A.j,0,j,j)
t=B.n(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dj,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.v(B.a([r,A.O,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.N,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a0Y,A.n),j,j,j,j,E.YP,j,j,1/0)
q=B.n(24)
s=B.I(A.aR.j(0.35),A.q,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a7p,A.L,j,j))
else if(k.d==null)r.push(D.e87)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.n(16)
n=B.a([new B.ac(0,A.G,A.aE.j(0.35),A.cy,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fm3,A.am,B.aD(j,B.p(j,B.B(B.a([D.bPD,A.av,B.d(m,j,j,j,j,j,j,D.f8L,j,j,j)],u),A.m,j,A.e,A.Q,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bUk,A.n),j,j,j,j,A_.ahS,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.ewQ(k,d),j,j,j,j,j,j,!1,A.a7),A.O,D.fqo,A.aB],u))}o=A.c.j(0.04)
n=B.n(22)
m=B.I(A.bF,A.q,1)
l=k.d
l.toString
p.push(B.p(j,B.pM(j,j,!1,l,j,!0,!0,j,!1,D.bkT),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cp,j,j,j))
A.d.v(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.h1,A.L,j,j))
return B.c7(j,h,B.bl(!0,B.v(B.a([new B.D(Ag.Mv,v,j),B.E(B.c9(B.v(B.a([t,A.aP,B.p(j,B.v(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.bWg,A.n),j,j,j,j,A.tN,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.r,j,A.y,j,E.aia,j,j,A.ag),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),j,!1,!1,j,j)}}
C.aDO.prototype={
S(){return new C.aDP(new B.as(A.as,$.aw()),B.jQ(!0,null,!0,!0,null,null,!1))}}
C.aDP.prototype={
a_(){var w=this
w.a1()
w.e.aN(0,new C.eqg(w))
$.aW.x1$.push(new C.eqh(w))},
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.e.q()
this.a2()},
aZ7(){var w,v=this.c
v.toString
w=C.yt(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a6(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aI(a2,A.eE,x.w).w,i=B.n(28),h=B.I(A.bj.j(0.4),A.q,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bj.j(0.28),A.uu,36),D.aaZ],g),e=B.n(28),d=A.c.j(0.16),a0=B.n(16),a1=x.p
a0=B.p(k,B.v(B.a([B.p(k,D.bL9,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.q,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.fje,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a5,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.b0b,k,k,k,k,A.xL,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.av)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge8()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.az:A.M
o=new B.aT(14,14)
if(q)n=A.bj
else n=r?A.bj.j(0.55):A.aK
m=new B.ay(n,q?2:1.2,A.q,-1)
n=q?B.a([new B.ac(0,A.G,A.bj.j(0.28),A.J,12)],g):k
t.push(new B.bC(1,A.bh,B.df(A.A,new B.y(p,k,D.f2q,k,k,k,k,k,k,k,k,k),k,k,A.bc,new B.o(s,k,new B.bO(m,m,m,m),new B.bp(o,o,o,o),n,k,A.n),A.hy,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(M.IJ)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.j,0,k,k),B.bZ(0,B.dd(B.aM(k,A.T,!0,k,!0,A.r,k,B.aN(),w,k,k,k,k,k,2,D.bSn,A.y,!0,k,!0,k,!1,v,A.ai,k,k,B.a([new B.ue(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.Bg(5,k),new C.bub()],x.aS),k,k,A.aP6,k,5,k,1,k,k,!1,"\u2022",k,new C.eqc(l),k,new C.eqd(l),k,!1,k,k,!1,k,!0,k,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a4,k,A.m4,k,k,k,k),0),0,0,0)],a1)
d=C.yt(w.a.a.toUpperCase())==null?k:l.gc7R()
return B.av(new B.D(new B.Q(24,24,24,24+j.f.d),B.aG(!1,A.a1,!0,k,new B.cT(Ad.K9,B.p(k,B.bw(e,B.v(B.a([a0,new B.D(D.btZ,B.v(B.a([new B.an(A.W,k,A.aa,A.r,g,k),A.S,D.fhC,A.by,new B.a7(1/0,50,B.bG(D.fy_,d,B.bn(A.bj,A.bo,A.ak,k,A.c,k,k,k,new B.b7(B.n(16),A.Y),k,k,k)),k),A.am,B.bK(!1,A.nz,k,k,!0,k,k,new C.eqe(a2),k,B.fx(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.Q,0,A.p),A.aq),A.f,k,k,new B.o(A.d9,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ah),k),k,k,k)}}
C.bub.prototype={
oz(d,e){var w=e.a.toUpperCase()
return e.cHU(B.hc(A.bw,w.length),w)}}
C.aqM.prototype={
S(){return new C.aDS(B.z4(A.LL,A.nG,A.ub))}}
C.aDS.prototype={
q(){this.d.q()
this.a2()},
aZ6(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iQ(w,d)},
a9W(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9W=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fOl(s),$async$a9W)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aZ6("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a9W,v)},
c7P(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=C.i5V(w[u])
if(t!=null){this.aZ6(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.vT,s,s,s,t.gbMQ(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eD(B.a([r,B.aH(s,s,s,s,B.X(q?A.rc:Al.Nr,s,s,s,s,s),s,s,s,new C.ewS(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.d9,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fzd,s,s,s,1,s,!0)
r=B.z3(t.d,A.bT,t.gc7O())
w=B.n(28)
w=B.av(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bj,A.q,3),w,B.a([new B.ac(2,A.G,A.bj.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.n(16)
return B.c7(p,A.w,new B.an(A.W,s,A.b0,A.r,B.a([r,w,B.ao(32,B.p(s,D.fn7,A.f,s,s,new B.o(v,s,B.I(A.bj.j(0.45),A.q,1),u,s,s,A.n),s,s,s,s,A.jk,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bun.prototype={
B(d){var w=null,v=B.n(24),u=B.I(A.aK,A.q,1)
return B.aG(!1,A.a1,!0,w,B.p(w,B.v(B.a([B.p(w,H.amF,A.f,w,w,D.b_U,w,56,w,w,w,w,w,56),A.aP,D.fyU,A.am,new B.ki(this.c,new C.f7s(),w,w,x.cI),A.aP,new B.ki(this.d,new C.f7t(),w,w,x.cl),A.ac,D.fyR],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,Ad.K9,new B.o(A.az,w,u,v,w,w,A.n),w,w,w,L.YW,D.buC,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)}}
C.a7q.prototype={
S(){return new C.bjA(A.bx)},
gdd(){return this.c}}
C.bjA.prototype={
a_(){var w=this
w.a1()
if(w.a.d)return
w.ZJ()
w.d=B.du(A.fU,new C.eeq(w))},
q(){var w=this.d
if(w!=null)w.a6(0)
this.a2()},
ZJ(){return this.cm6()},
cm6(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.eeo(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bD(new B.S(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cea(p.c),$async$ZJ)
case 6:r=e
q.a=r==null?A.bx:r
case 4:if(t.c==null){w=1
break}t.m(new C.eep(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$ZJ,v)},
bOM(d){var w,v,u=d.a,t=A.o.an(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.an(u,6e7)%60
v=A.o.an(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aT(A.o.u(w),2,"0")+"m "+A.a.aT(A.o.u(v),2,"0")+"s left"
return A.a.aT(A.o.u(w),2,"0")+":"+A.a.aT(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bI
w=s.e.a
v=A.o.an(w,6e7)<30&&A.o.an(w,36e8)<999?A.ay:A.c_
w=v.j(0.14)
u=B.n(14)
t=B.I(v.j(0.55),A.q,1)
return B.p(r,B.B(B.a([B.X(A.FL,v,r,r,r,20),A.av,B.E(B.d("Marriage document session \xb7 "+s.bOM(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,W.agV,A.iC,r,r,1/0)}}
C.a8i.prototype={
nd(){var w,v,u,t=this
t.x9()
w=t.cx
v=t.c
w.bpE(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.pT(B.F(["/S",D.ebN,"/URI",new B.rt(B.Wd(w.as),A.ux,!0)],x.N,u),u))}}
C.a8j.prototype={
a5(){return"PdfAnnotFlags."+this.b}}
C.b2e.prototype={
bx9(d,e,f,g,h,i,j,k,l,m){var w=B.et([D.ea5],x.di)
this.w!==$&&B.aP()
this.w=w},
gcLb(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jP(w,new C.cgm(),B.a3(w).k("jP<co.E,H>")).fd(0,new C.cgn())},
aCj(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.ha(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tr(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.je(d.a,d.b))
s.n(0,"/Border",B.tr(H.aoL))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.fZ(t.gcLb()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.pT(w,x.Y))}}
C.cgo.prototype={}
C.a2v.prototype={}
C.ahU.prototype={}
C.aQE.prototype={
h0(d){var w,v,u,t,s,r,q=this,p=null
q.lg(d)
q.LL(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bfh(w)
u=x.N
t=x.Y
s=new C.cgo(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bx9(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pT(B.F(["/Type",D.ebL],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a8i(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.L(0,r)
v.dx.push(r)}}
C.awe.prototype={}
C.aS8.prototype={
h0(d){var w,v,u,t,s=this
s.lg(d)
w=s.b
if(w!=null){v=B.dp()
u=s.a
v.ea(u.a,u.b,0,1)
u=d.b
u.i7()
t=s.a
t.toString
u.KU(t)
u.Sh(0)
u.oU(0,v)
w.h0(d)
u.ng(0)}}}
var z=a.updateTypes(["az<~>()","~(lG)","R(i0)","~()","R(eK)","R(oi)","R(lG)","~(i0)","R(eK,eK)","JF(Y)","R(nJ)","R(lb)","az<R>()","H(H,i0)","a4<m,@>(i0)","ai<zn>()","m(nJ)","R(a7H)","m(lG)","m(vV)","R(Eu)","H(i0,i0)","m(eK)","r(eK)","cL(eK)","r(hz)","~(hz)","eK(uD,K,K,K,K,H{fx:m,key:m,rotation:K})","eK(m,K,H)","H(oi,oi)","R(zn)","R(m,ai<zn>)","a4<m,@>(oi)","nJ()","Yg(Y)","eK(m,K,K,K,K,K{align:pZ,anim:hz,bullets:R,color:H?,delay:H,fx:m,key:m,style:Hs,weight:oP})","a0x(Y)","eK(m,K,K,K,K{anim:hz,delay:H,fx:m,key:m})","az<~>(oi)","R(mt)","Ye(Y)","a04(Y)","a03(Y)","Pc(Y)","Zp(Y)","eK(uD,K,K,K,K,H,m,m{anim:hz,delay:H,rotation:K,stroke:H,strokeWidth:K})","eK(m,K,K,K,K,K,m,m,H)","eK(K,K,m,H{size:K})","r(rh,K,K)","lb()","oi(a4<@,@>)","~(ut)","Eu()","ff(eK)","r(j_)","YY(Y)","~(El)","Zi(Y)","H(eK,eK)","eK(eK)","a4<m,@>(eK)","eK(a4<@,@>)","lG(lG)","a4<m,@>(lG)","lG(a4<@,@>)","R(jG)","jG()","m(i0)","~(ai<oi>)","S(ai<i0>)","S(i0)","ai<i0>(m?)","acl(Y,H)","~(R(eK,eK))","ad_(Y)","aeG(Y,H)","w(lG,R)","Vr(Y)","ad2(Y)","Vu(Y)","~(mx)","i0(i0)","K(eK)","a_y(Y)","a_a(Y)","i0()","ai<EQ>()","az<~>(ai<i0>)","r(bv<H,i0>)","D(jG)","D(Eu)","az<~>(hz,~())","r(ai<hz>,hz?,~(hz),w)","R(m6)","ai<jq<mx>>(Y)","jq<mx>(mx)","i0(a4<@,@>)","VF(Y)","eK(m,K,K,K,K,K,H{align:pZ,style:Hs,weight:oP})","VG(Y)","r(i0)","~(m_)","Iw(Y,lG,r?)","H(a8j)","az<ai<a4<m,@>>?>()","m(m)","az<zl>({paper:m?,photo:dD?,request:m,template!le})","az<a7z>({doc!zl,history:ai<+(m,m)>,instruction!m,photo:dD?,template!le})","acX(Y)"])
C.cEk.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:73}
C.cEl.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:75}
C.cEm.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gajE(s):16;--w.c}w.b=A.o.dX(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.ms(v,t)
w.b=v-A.o.dX(q,t)
w.a=t
return q},
$S:75}
C.cEn.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bOe.prototype={
$1(d){return J.eZ(A.dD.gaM(d),d.byteOffset,d.byteLength)},
$S:1666}
C.fsq.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iJ(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iJ(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iJ(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iJ(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1667}
C.bYU.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:28}
C.bYV.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aL(v,J.k(w==null?"":w))},
$S:43}
C.bYX.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fIp.prototype={
$1(d){return new C.a0x(this.a,this.b,C.i6N(),null)},
$S:z+36}
C.f5V.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f5Z.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.f6_.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f60.prototype={
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
C.f5W.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f5X.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f5Y.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.f5Q.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hE,w,w,w)
return B.ek(B.a([B.bK(!1,D.flx,w,w,!0,w,w,new C.f5O(d),w,w),B.bK(!1,D.fkC,w,w,!0,w,w,new C.f5P(d),w,w)],x.p),w,w,D.Xu,v,w,w,w,w,D.fzv,w)},
$S:19}
C.f5O.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.f5P.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.f5R.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f5S.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f64.prototype={
$0(){var w=this.a
return w.m(new C.f63(w,this.b))},
$S:0}
C.f63.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f5U.prototype={
$0(){var w=this.a
return w.m(new C.f5T(w,this.b,this.c))},
$S:0}
C.f5T.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.L(0,v)},
$S:0}
C.f61.prototype={
$0(){return this.a.a0Q(this.b)},
$S:0}
C.f62.prototype={
$0(){return this.a.OR(0,this.b)},
$S:0}
C.f67.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.f68.prototype={
$0(){var w=this.a
return w.m(new C.f66(w,this.b))},
$S:0}
C.f66.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a9(0)
else{w=w.a.c
v.v(0,new B.M(w,new C.f65(),B.U(w).k("M<1,m>")))}},
$S:0}
C.f65.prototype={
$1(d){return d.a},
$S:z+67}
C.fda.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.h7u(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cC)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.oi(s,v,u==null?new B.S(Date.now(),0,!1):u)},
$S:z+50}
C.fdb.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fv2.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.L)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbq())q=n===o.gbq()&&p.b>o.gcB()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fv0.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fv1.prototype={
$2(d,e){return e.c.aL(0,d.c)},
$S:z+29}
C.fHU.prototype={
$1(d){return d.ag()},
$S:z+32}
C.fs6.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fIL.prototype={
$1(d){return new C.Yg(this.a,null)},
$S:z+34}
C.cFG.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cFI.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cFL.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cFM.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cFK())},
$S:11}
C.cFK.prototype={
$0(){},
$S:0}
C.cFN.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a1v(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cG(s)
p=q.be(s,new C.cFJ(r))
if(p<0)q.ck(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.aha(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:297}
C.cFJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cFO.prototype={
$1(d){},
$S:27}
C.cFH.prototype={
$1(d){return new C.Ye(this.b,this.a.gcvR(),null)},
$S:z+40}
C.cFP.prototype={
$1(d){return D.fUt},
$S:z+43}
C.cFC.prototype={
$1(d){var w=null,v=B.n(24),u=B.I(D.X9,A.q,1),t=x.p
return B.av(B.aG(!1,A.a1,!0,w,B.p(w,B.v(B.a([new B.D(D.buo,B.v(B.a([B.p(w,D.bIm,A.f,w,w,new B.o(A.ay.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aP,D.fjF,A.S,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.f7N,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dY,new B.D(A.pS,B.B(B.a([B.E(B.dT(D.fqq,new C.cFA(d),B.di(w,w,w,w,w,w,w,w,w,E.n1,w,w,A.cl,w,new B.b7(B.n(14),A.Y),D.aYb,w,w,w,w)),1),A.av,B.E(B.bG(D.fwg,new C.cFB(d),B.bn(A.bz,w,w,w,w,w,A.cl,w,new B.b7(B.n(14),A.Y),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.Q,0,A.p),A.f,w,A.wQ,new B.o(D.acF,w,u,v,D.cVX,w,A.n),w,w,w,L.YW,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w,w,w)},
$S:1668}
C.cFA.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.cFB.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.cFD.prototype={
$0(){return J.nr(this.a.d,new C.cFz(this.b))},
$S:0}
C.cFz.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cFy.prototype={
$1(d){var w,v,u,t=null,s=B.n(28),r=B.I(D.X9,A.q,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bNh,A.f,t,t,new B.o(t,t,t,B.n(14),t,D.aog,A.n),t,44,t,t,t,t,t,44),A.bd,B.E(B.v(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aQM,t,t,t),A.bD,D.fwc],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.dgm[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.ax7(u[1],u[2],u[3],new C.cFw(v,d),!1,t))}q.push(A.am)
q.push(D.boy)
q.push(A.am)
q.push(new C.ax7(A.e6,"Delete book","Remove it from this device",new C.cFx(d),!0,t))
return B.bl(!0,B.p(t,B.v(q,A.F,t,A.e,A.Q,0,A.p),A.f,t,t,new B.o(D.acF,t,r,s,t,t,A.n),t,t,t,A.tI,E.YA,t,t,t),!0,!1,A.af,!0,!0)},
$S:26}
C.cFw.prototype={
$0(){var w=this.a.a
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.cFx.prototype={
$0(){B.a6(this.a,!1).O("delete")
return null},
$S:0}
C.cFF.prototype={
$3(d,e,f){var w=null,v=B.n(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aGC,12)],x.V)
return B.dU(B.eH(A.A,e,B.p(w,B.bw(B.n(4),new B.a7(62,95.81818181818181,B.f6(A.A,F.anK(d),A.f,A.du),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.u(f,0))},
$S:z+48}
C.cFE.prototype={
$0(){return this.a.c2r()},
$S:0}
C.cFv.prototype={
$0(){return this.a.aXH(0,this.b)},
$S:0}
C.cFu.prototype={
$0(){return this.a.D7(this.b)},
$S:0}
C.cFt.prototype={
$0(){return this.a.D7(this.b)},
$S:0}
C.cFQ.prototype={
$2(d,e){var w=this.a
return w.bBE(J.q(w.d,e))},
$S:39}
C.cEX.prototype={
$0(){var w=this.a
if(w.c!=null)w.AG()},
$S:0}
C.cEW.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b_z("Page "+(v.length+1),"",""))},
$S:0}
C.cEZ.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cF6.prototype={
$0(){},
$S:0}
C.cF7.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.T$=u
v.P$=0
w=w.b
w.T$=u
w.P$=0
return null},
$S:9}
C.cF_.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cS.gcz().aJ(this.c)},
$S:0}
C.cEY.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cF1.prototype={
$0(){return this.a.Qa(this.b)},
$S:0}
C.cF2.prototype={
$0(){return this.a.Qa(this.b)},
$S:0}
C.cF3.prototype={
$0(){var w=this.a
w.m(new C.cF0(this.b))
w.DX()},
$S:0}
C.cF0.prototype={
$0(){return this.a.c=""},
$S:0}
C.cF5.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cF4(w,d))
w.DX()},
$S:z+51}
C.cF4.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cFc.prototype={
$2(d,e){if(d)this.a.AG()},
$S:125}
C.cF8.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.AG(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.J(x.q).f.U(D.eWe)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cF9.prototype={
$0(){return this.a.aWF(this.b,-1)},
$S:0}
C.cFa.prototype={
$0(){return this.a.aWF(this.b,1)},
$S:0}
C.cFb.prototype={
$0(){return this.a.c3H(0,this.b)},
$S:0}
C.fzz.prototype={
$1(d){return C.hht()},
$S:44}
C.fzA.prototype={
$1(d){return null},
$S:27}
C.fhA.prototype={
$1(d){return null},
$S:27}
C.fAy.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:314}
C.fAx.prototype={
$2(d,e){return A.o.aL(e.length,d.length)},
$S:268}
C.fAE.prototype={
$1(d){var w=this.a
return C.h_U(d)===w||C.hm1(d)===w},
$S:z+4}
C.fgD.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:79}
C.c8t.prototype={
$1(d){return d.length!==0},
$S:3}
C.fzx.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fzy.prototype={
$1(d){return C.fCh(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fuo.prototype={
$1(d){var w=null
return B.bl(!0,new B.D(E.xK,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fr0,A.O,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dn(D.Go,D.fld,new C.fum(d),B.bn(A.c_,w,w,w,A.w,w,A.cl,w,w,w,w,w)),A.S,B.eC(A.vS,D.fse,new C.fun(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wO,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fum.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fun.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fup.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,D.fhu,w,w,!0,w,w,new C.fuk(d),w,w),B.bG(D.fyx,new C.ful(d),w)],x.p),w,w,w,D.fAp,w,w,w,w,D.fho,w)},
$S:19}
C.fuk.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.ful.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e9e.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.e9c.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e9d.prototype={
$0(){return this.a.f=!0},
$S:0}
C.e9f.prototype={
$0(){return this.a.r=!1},
$S:0}
C.e9g.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fAD.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:79}
C.fAz.prototype={
$2$h$w(d,e){var w=null
return new B.bI(A.a3,w,w,B.DF(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.n(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1669}
C.fAB.prototype={
$1(d){var w=null,v=B.n(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.f8Y,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:157}
C.fAC.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hZ,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dU(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hZ,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.u(-d*0.38,0))],x.p),A.m,w,A.b8,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1670}
C.fAA.prototype={
$2$female$size(d,e){var w=null,v=d?D.aex:this.a,u=B.I(A.hZ,A.q,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.r,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.n(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.acT,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1671}
C.fMc.prototype={
$1(d){return new C.acX(this.a,this.b,null)},
$S:z+108}
C.dXX.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.blm:A.Lf,q=B.I(D.jd.j(0.25),A.q,1),p=B.av(B.p(t,t,A.f,t,t,new B.o(A.c_.j(0.45),t,t,B.n(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.n(15)
o=B.p(t,D.an_,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.q,1.2),o,B.a([new B.ac(0,A.G,D.jd.j(0.35),A.em,10)],x.V),D.bWS,A.n),t,t,t,t,A.xB,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.v(B.a([new B.D(I.YL,B.v(B.a([p,A.aB,B.B(B.a([o,A.bd,B.E(B.v(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.jd,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bD,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.f8f,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.E(B.ig(!0,t,e,A.y,D.aO8,new C.dXW(w,this.c),v,D.ahN,t,A.ag,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.mb,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:115}
C.dXW.prototype={
$2(d,e){var w=this.a.d[e]
return new C.acl(w,new C.dXV(this.b,w),null)},
$S:z+72}
C.dXV.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fus.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fut.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xK,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fun,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dn(D.Go,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fuq(d),B.bn(D.jd,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.S,B.eC(A.o6,D.TX,new C.fur(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wO,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fuq.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fur.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fuw.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fux.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xK,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fit,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dn(D.Go,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fuu(d),B.bn(D.jd,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.S,B.eC(A.o6,D.TX,new C.fuv(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wO,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fuu.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fuv.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fuA.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fuB.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xK,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.foQ,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dn(D.Go,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fuy(d),B.bn(D.jd,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.S,B.eC(A.o6,D.TX,new C.fuz(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wO,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fuy.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fuz.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fNF.prototype={
$1(d){return D.fYe},
$S:z+74}
C.eet.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bd9:A.Lf,s=B.I(A.aw.j(0.25),A.q,1),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.aw.j(0.45),v,v,B.n(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.n(15)
q=B.p(v,D.bPz,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.q,1.2),q,B.a([new B.ac(0,A.G,A.c_.j(0.35),A.em,10)],x.V),D.aol,A.n),v,v,v,v,A.xB,v,v,v)
w=x.p
return B.p(v,B.v(B.a([new B.D(I.YL,B.v(B.a([r,A.aB,B.B(B.a([q,A.bd,B.E(B.v(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:Z.Lc,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bD,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.f5K,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.E(B.ig(!0,v,e,A.y,D.aO8,new C.ees(this.b),19,D.ahN,v,A.ag,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.mb,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:115}
C.ees.prototype={
$2(d,e){var w=D.QD[e]
return new C.aeG(w,new C.eer(this.a,w),null)},
$S:z+75}
C.eer.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fCl.prototype={
$0(){return B.fZT(C.hVg(this.a))},
$S:290}
C.fCk.prototype={
$0(){var w=C.h0b(this.a)
return"data:image/png;base64,"+A.cS.gcz().aJ(w)},
$S:23}
C.feJ.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jf(d,e),new B.jf(w,e+v),new B.jf(d+f*14,e),new B.jf(w,e-v)],x.J)
B.a1s(this.a,C.fA(4291404327),v)},
$S:665}
C.fNQ.prototype={
$1(d){return new C.Vr(this.a,null)},
$S:z+77}
C.ehL.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ehK())},
$S:30}
C.ehK.prototype={
$0(){},
$S:0}
C.ehM.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ehJ(w,d))},
$S:1673}
C.ehJ.prototype={
$0(){return this.a.x=J.eT(A.dD.gaM(this.b))},
$S:0}
C.ehN.prototype={
$1(d){},
$S:27}
C.ehn.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ehj.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ehu.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.ehv.prototype={
$0(){var w=this.a
A.d.a9(w.ay)
w.z=this.b
w=w.ax
A.d.a9(w)
w.push(D.elv)},
$S:0}
C.ehw.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ehp.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bO(0,A.c8)},
$S:0}
C.ehq.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.ehr.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.t(this.b)))},
$S:0}
C.ehs.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eht.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd_(v).Q
v.toString
w.mb(v,A.dV,A.id)}},
$S:9}
C.eho.prototype={
$0(){var w=this.a,v=w.z,u=C.fCZ(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cH1(C.fCZ(t))},
$S:0}
C.ehl.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.ehm.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ehC.prototype={
$0(){return B.a6(this.a,!1).lx()},
$S:0}
C.ehD.prototype={
$0(){var w=this.a
return w.m(new C.ehB(w))},
$S:0}
C.ehB.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.ehE.prototype={
$0(){var w=this.a
return w.m(new C.ehA(w,this.b))},
$S:0}
C.ehA.prototype={
$0(){var w=this.b.b
this.a.e.saV(0,w)
return w},
$S:0}
C.ehF.prototype={
$1(d){var w=this.a
return w.m(new C.ehz(w))},
$S:8}
C.ehz.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.ehG.prototype={
$1(d){var w=this.a
return w.m(new C.ehy(w))},
$S:8}
C.ehy.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.ehH.prototype={
$0(){var w=this.a
return w.m(new C.ehx(w,this.b))},
$S:0}
C.ehx.prototype={
$0(){var w=this.b
this.a.f.saV(0,w)
return w},
$S:0}
C.ehI.prototype={
$1(d){return this.a.Zv()},
$S:2}
C.ehk.prototype={
$0(){return this.a.c76(this.b)},
$S:0}
C.cc9.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cP(w.h(0,d))):null},
$S:325}
C.cc7.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.cc8.prototype={
$1(d){return d.length!==0},
$S:3}
C.fBW.prototype={
bkn(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bOd(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.L)(e),++t){s=e[t]
r.cDw($.qR().jz(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mI(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bkn(d,e)},
$S:1674}
C.fAd.prototype={
$1(d){return d.length!==0},
$S:3}
C.fAf.prototype={
$1(d){var w=this.a.a
w=A.d.aH(A.d.dq(this.b,w,w+d)," ")
w=B.aK(w," \n\n ","\n\n")
w=B.aK(w," \n\n","\n\n")
return B.aK(w,"\n\n ","\n\n")},
$S:79}
C.fAe.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.h5(t,t,t,t,B.d7(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qp,A.c6,t,A.dS,A.c5)
v=this.a
w.wB(v.b)
u=w.b.a.c
return u.gbc(u)<=v.a},
$S:32}
C.fej.prototype={
$1(d){var w=A.a.fE(d,B.af("\\s+",!0,!1,!1,!1))
return new B.a_(w,new C.fek(),B.U(w).k("a_<1>")).gM(0)},
$S:254}
C.fek.prototype={
$1(d){return d.length!==0},
$S:3}
C.feh.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:232}
C.fei.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:232}
C.cca.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gazD()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,w-(f===t?r:0)))
o=C.h_T(i,new B.G(!0,h,a6,k,a6,a6,q,A.cN,A.bn,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fXL(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aH(n.gcfh(),"\n\n")
d=B.h5(a6,a6,a6,a6,B.d7(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.adL(k,q,1.28),j),A.qp,A.c6,a6,A.dS,A.c5)
d.wB(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbc(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.h_T(i,new B.G(!0,h,a6,k,a6,a6,q,A.cN,A.bn,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fXL(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.adL(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bC(1,A.bh,new B.y(o.length>a4?o[a4]:"",a6,a3,a6,A.qp,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.azC(s,j))
i.push(new B.a7(s,a6,B.v(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:345}
C.ccb.prototype={
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
n=o.gazD()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.z(u,q),new B.z(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.z(r,p-(a0===s?m:0)))
l=C.h_T(f,new B.G(!0,e,a5,i,a5,a5,h,A.cN,A.bn,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fXL(g.length===0?B.a([a6],n):g,l))break}a1=o.adL(i,h,1.28)
a2=new C.ccc(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.II,new B.a7(v,a5,a4.f,a5),A.II,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bwG,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bC(1,A.bh,new B.y(l[2+a3],a5,a1,a5,A.qp,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.azC(r,g))
f.push(new B.a7(r,a5,B.v(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.v(B.a([new B.a7(a5,q,v,a5),A.ac,B.E(B.B(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:150}
C.ccc.prototype={
$2(d,e){var w=null
return new B.a7(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qp,w,w),w)},
$S:1675}
C.fNT.prototype={
$1(d){return new C.Vu(this.a,this.b,null)},
$S:z+79}
C.eiW.prototype={
$1(d){return d.m1()},
$S:1676}
C.eiX.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eiV(w,d))},
$S:1677}
C.eiV.prototype={
$0(){var w=this.b
return this.a.d=w.gfu(w)},
$S:0}
C.eiJ.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eiK.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eiQ.prototype={
$0(){return B.a6(this.a,!1).eN()},
$S:0}
C.eiR.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bC,A.q,2.5)
return B.aD(w,B.p(w,B.b3(w,w,w,new C.bbj(u,v.gawH(),w),A.f2),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eiO(v),new C.eiP(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a7)},
$S:35}
C.eiO.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:246}
C.eiP.prototype={
$1(d){var w=this.a
w.m(new C.eiL(w,d,this.b,this.c))},
$S:217}
C.eiL.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gawH()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.eiS.prototype={
$1(d){var w=this.a
return w.m(new C.eiN(w,this.b))},
$S:8}
C.eiN.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eiT.prototype={
$1(d){var w=this.a
return w.m(new C.eiM(w,d))},
$S:6}
C.eiM.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eiU.prototype={
$0(){return B.a6(this.b,!1).O(this.a.a.c)},
$S:0}
C.fO8.prototype={
$1(d){return D.h01},
$S:z+83}
C.eSw.prototype={
$1(d){return this.a.Ya()},
$S:9}
C.eRo.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cS.gcz().aJ(v)},
$S:0}
C.eRM.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eRW.prototype={
$1(d){return d>=this.a.length},
$S:32}
C.eR7.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eR8.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eR5.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eR6.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eRF.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eRG(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jz(B.rx(p>0.2?C.fSy(q,B.a4L(p,p,A.x)):q),A.r,u)],x.p)
w=s.bi
if(w>0.02){v=B.a4L(12,12,A.x)
p.push(B.jz(B.dd(B.rx(C.fSy(r.$1(!0),v)),w*0.75),A.r,u))}r=s.b0
if(r!=null&&s.b1>0)p.push(B.el(u,B.b0(r).j(s.b1),!0))
r=s.bd
if(r!=null&&s.bJ>0){r=B.b0(r).j(s.bJ)
w=s.bd
w.toString
p.push(B.c0(u,new B.o(u,u,u,u,u,new B.bT(D.aWs,1.15,A.x,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.be))}r=s.aE
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.bT(D.aWd,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.be))
r=s.aO
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.a8(A.b_,A.b4,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aO)],x.O),D.cUC,u),A.n),A.be))
if(s.aF>0){r=s.k1
p.push(B.ao(u,B.c0(u,new B.o(u,u,u,u,u,new B.a8(A.b_,A.b4,A.x,B.a([A.w.j(0),A.w.j(s.aF),A.w.j(s.aF),A.w.j(0)],x.O),D.d4j,u),A.n),A.be),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Y
if(r>0)p.push(B.el(u,A.w.j(r),!0))
r=s.aW
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.bT(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.d1u,u),A.n),A.be))
s=s.aw
if(s>0)p.push(B.b3(u,u,u,new C.beS(s,u),A.au))
return new B.an(A.W,u,A.b0,A.r,p,u)},
$S:64}
C.eRG.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fM(r.b,A.A,q,q,A.ci,A.bT,!0,q,!1,q,q),o=r.a,n=o.aWh(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c4,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bk
v=o.aR
u=v-1
t=o.bQ
s=o.cL?-1:1
return B.dU(B.ed(A.A,B.eH(A.A,l,B.ft(A.A,new B.Dd(new B.yK(q,q,n,A.Aj),p,q),q,B.vI(s,o.cM?-1:1,1),!0),q),v*w,q,q),new B.u(-m*r.d*u/2,-t*r.c*u/2))},
$S:483}
C.eRS.prototype={
$0(){return this.a.m(new C.eRR(this.b,this.c))},
$S:0}
C.eRR.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eRT.prototype={
$1(d){return this.a.m(new C.eRQ(this.b,d))},
$S:6}
C.eRQ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eRV.prototype={
$0(){return this.a.m(new C.eRU(this.b,this.c))},
$S:0}
C.eRU.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eQY.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eQZ.prototype={
$1(d){var w=this.a
return w.m(w.gcxf())},
$S:2}
C.eR_.prototype={
$1(d){return this.a.m(new C.eQX())},
$S:2}
C.eQX.prototype={
$0(){},
$S:0}
C.eR0.prototype={
$0(){var w=this.a
return w.m(new C.eQW(w,this.b))},
$S:0}
C.eQW.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eR2.prototype={
$2(d,e){return A.av},
$S:36}
C.eR1.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.n(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bF
q=B.I(q,A.q,t?2.5:1)
r=B.df(w,B.av(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.bc,new B.o(w,w,q,s,w,new B.a8(A.b_,A.b4,A.x,r,w,w),A.n),A.hy,w,94,w,w,w,w,70)
return B.aD(w,new B.a7(70,w,B.v(B.a([r,A.h0,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aA,w,w,w,w,w,w,w,w,10.5,w,w,A.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eQV(u,v),w,w,w,w,w,w,!1,A.a7)},
$S:76}
C.eQV.prototype={
$0(){var w=this.a
return w.m(new C.eQS(w,this.b))},
$S:0}
C.eQS.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eR3.prototype={
$1(d){var w=this.a
return w.m(new C.eQU(w,d))},
$S:8}
C.eQU.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eR4.prototype={
$1(d){var w=this.a
return w.m(new C.eQT(w,d))},
$S:8}
C.eQT.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eSl.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gI(this.b)]},
$S:32}
C.eSs.prototype={
$1(d){var w=this.a
return w.m(new C.eSt(w,d))},
$S:29}
C.eSt.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.ea(v,v.r,B.a3(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eSu.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:252}
C.eSm.prototype={
$0(){var w=this.a
return w.m(new C.eSk(w,this.b))},
$S:0}
C.eSk.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.L(0,v)},
$S:0}
C.eSn.prototype={
$0(){var w=this.a
return w.m(new C.eSj(w,this.b))},
$S:0}
C.eSj.prototype={
$0(){var w,v=this.b.length,u=J.e3(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eSo.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eSi(v,w.b,w.c,w.d))},
$S:0}
C.eSi.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a9(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eSp.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.grC(v))},
$S:0}
C.eSq.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eSr.prototype={
$0(){var w=this.a
return w.m(new C.eSh(w))},
$S:0}
C.eSh.prototype={
$0(){var w=this.a.db
return A.d.h2(w,0,w.length,0)},
$S:0}
C.eS4.prototype={
$1(d){return d.a===this.a.dy},
$S:207}
C.eS5.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.awp[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aT(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.awL(new B.n9(new B.bp(n,n,n,n),A.aq,new B.kP(new B.o(j,j,j,j,j,new B.a8(A.a3,A.a8,A.x,m,j,j),A.n),A.be,new C.aZt(l,B.b0(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eS3(r,v),2,i))}return B.bY(A.bA,h,A.bq,7,7)},
$S:169}
C.eS3.prototype={
$0(){var w=this.b
return w.m(new C.eRZ(this.a,w))},
$S:0}
C.eRZ.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eS6.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:222}
C.eS9.prototype={
$0(){var w=this.a
return w.m(new C.eS2(w))},
$S:0}
C.eS2.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eSa.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eSb.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eSc.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eSd.prototype={
$0(){var w=this.a
return w.m(new C.eS1(w))},
$S:0}
C.eS1.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eSe.prototype={
$0(){var w=this.a
return w.m(new C.eS0(w))},
$S:0}
C.eS0.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eSf.prototype={
$0(){var w=this.b
return w.m(new C.eS_(this.a,w))},
$S:0}
C.eS_.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eSg.prototype={
$1(d){return this.a.fx=d},
$S:222}
C.eS7.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eS8.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eRJ.prototype={
$0(){var w=this.a
return w.m(new C.eRI(w))},
$S:0}
C.eRI.prototype={
$0(){var w=this.a
w.p4=null
w.b2n()},
$S:0}
C.eRK.prototype={
$0(){var w=this.a
return w.m(new C.eRH(w,this.b))},
$S:0}
C.eRH.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eRL.prototype={
$0(){var w=this.a
return w.m(w.gcnL())},
$S:0}
C.eRB.prototype={
$0(){var w=this.a
return w.m(new C.eRA(w))},
$S:0}
C.eRA.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eRC.prototype={
$0(){var w=this.a
return w.m(new C.eRz(w))},
$S:0}
C.eRz.prototype={
$0(){var w=this.a
w.aF=0.55
w.Y=Math.max(w.Y,0.12)},
$S:0}
C.eRD.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.d1T[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aT(9,9)
m.push(v.awL(new B.n9(new B.bp(p,p,p,p),A.aq,new B.a7(1/0,1/0,new B.Dd(new B.yK(o,o,v.aWh(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.Aj),B.fM(u,A.A,140,o,A.ci,A.bT,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eRy(v,s),3,n))}return B.bY(A.bA,m,A.bq,10,8)},
$S:169}
C.eRy.prototype={
$0(){var w=this.a
return w.m(new C.eRx(w,this.b))},
$S:0}
C.eRx.prototype={
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
C.eRf.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eRg.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eRh.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eRi.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eRj.prototype={
$1(d){return this.a.aE=d},
$S:6}
C.eRk.prototype={
$1(d){return this.a.Y=d},
$S:6}
C.eRl.prototype={
$1(d){return this.a.aW=d},
$S:6}
C.eRm.prototype={
$1(d){return this.a.aF=d},
$S:6}
C.eRn.prototype={
$1(d){return this.a.aO=d},
$S:6}
C.eQB.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eQC.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eQD.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eQE.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eQF.prototype={
$0(){var w=this.a
return w.m(new C.eQA(w))},
$S:0}
C.eQA.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eQG.prototype={
$1(d){return this.a.b0=d},
$S:222}
C.eQH.prototype={
$1(d){return this.a.b1=d},
$S:6}
C.eR9.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eRa.prototype={
$1(d){return this.a.bi=d},
$S:6}
C.eRb.prototype={
$1(d){return this.a.aw=d},
$S:6}
C.eRc.prototype={
$1(d){return this.a.bd=d},
$S:222}
C.eRd.prototype={
$1(d){return this.a.bJ=d},
$S:6}
C.eQL.prototype={
$1(d){return this.a.aR=d},
$S:6}
C.eQM.prototype={
$1(d){return this.a.bk=d},
$S:6}
C.eQN.prototype={
$1(d){return this.a.bQ=d},
$S:6}
C.eQO.prototype={
$1(d){return this.a.c4=d},
$S:6}
C.eQP.prototype={
$0(){var w=this.a
return w.m(new C.eQK(w))},
$S:0}
C.eQK.prototype={
$0(){var w=this.a
return w.c4=A.k.E(w.c4+90+180,360)-180},
$S:0}
C.eQQ.prototype={
$0(){var w=this.a
return w.m(new C.eQJ(w))},
$S:0}
C.eQJ.prototype={
$0(){var w=this.a
return w.cL=!w.cL},
$S:0}
C.eQR.prototype={
$0(){var w=this.a
return w.m(new C.eQI(w))},
$S:0}
C.eQI.prototype={
$0(){var w=this.a
return w.cM=!w.cM},
$S:0}
C.eRE.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i9x(v,w.p4)},
$S:0}
C.eRw.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.blF:B.fM(v,A.A,w,w,A.ci,A.bT,!1,w,!1,w,w)
return C.fAl(d.length===0?"rounded":d,u,e)},
$S:138}
C.eRs.prototype={
$0(){var w=this.a
return w.m(new C.eRr(w))},
$S:0}
C.eRr.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eRt.prototype={
$0(){var w=this.b
return w.m(new C.eRq(this.a,w))},
$S:0}
C.eRq.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eRu.prototype={
$0(){var w=this.b
return w.m(new C.eRp(this.a,w))},
$S:0}
C.eRp.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eRv.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eRP.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.n(20),p=B.a([new B.ac(-4,A.G,A.b6.j(0.35),A.J,30)],x.V),o=B.n(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.ev(n.chb(),n.r))
l.push(new C.Iw(n.cuh(),!1,!1,t))
o=B.bZ(0,B.bw(o,new B.ev(new B.an(A.W,t,A.b0,A.r,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.n(8)
return B.p(t,new B.an(A.W,t,A.aa,A.r,B.a([o,B.ao(t,B.aD(A.c7,B.c0(t,new B.o(t,t,B.I(A.c.j(0.3),A.q,1),u,t,t,A.n),A.be),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eRO(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a7),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:219}
C.eRO.prototype={
$1(d){var w=this.a
return w.m(new C.eRN(w,d,this.b,this.c))},
$S:18}
C.eRN.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eRY.prototype={
$0(){var w=this.a
return w.m(new C.eRX(w,this.b))},
$S:0}
C.eRX.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eRe.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).lx()},
$S:0}
C.eSv.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a7(Math.min(s*0.4,460),t,B.v(B.a([w.aYZ(),B.E(B.av(w.b0V(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.E(B.v(B.a([B.E(w.aPp(),1),w.aLE()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.v(B.a([s.aYZ(),new B.D(A.hM,B.av(s.b0V(u),t,t,t),t),B.E(s.aPp(),1),s.aLE()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:745}
C.fxC.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.ep(k,!1,j,A.aD,"",4280640491,i,l,m,"",h,C.bzU(),null,"","",0,!1,"",0,D.bf,4280172719,2,d,0,0,"",D.cm,D.cQ,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bn,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bn,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bn,A.N)},
$S:z+98}
C.fxB.prototype={
$3(d,e,f){var w=this,v=C.bzU(),u=w.b?A.H:A.cv,t=w.c?A.cF:A.bn
return C.ep(w.d,!1,f,A.aD,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bf,4280172719,2,d,0,w.f,w.e,D.cm,D.cQ,0.82,0.09,w.a)},
$S:z+28}
C.cdx.prototype={
$1(d){return B.t(d)},
$S:17}
C.fFi.prototype={
$0(){return this.a},
$S:z+15}
C.flI.prototype={
$1(d){return d.a.cZ(this.a)},
$S:z+30}
C.flJ.prototype={
$2(d,e){return J.cn(e)},
$S:z+31}
C.fFk.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fFn.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fFo.prototype={
$0(){return A.d.gI(D.w0)},
$S:z+33}
C.fFg.prototype={
$1(d){return d.a},
$S:z+16}
C.fFj.prototype={
$1(d){return d.a},
$S:z+16}
C.fDg.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fDh.prototype={
$1(d){return d.length!==0},
$S:3}
C.fDi.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fxG.prototype={
$0(){return C.cD()},
$S:23}
C.fxJ.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cm,s=u?n:0
return C.ep(j,l,v,A.aD,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bf,4280172719,2,d,s,0,"",t,D.cQ,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dd,!1,null,0,"","",A.bn,A.a5)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dd,!1,null,0,"",j,A.bn,A.a5)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dd,!1,null,0,j,k,A.bn,A.a5)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bn,A.a5)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bn,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dd,!1,k,l,"",m,A.bn,A.a5)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,!1,null,0,"",k,A.bn,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dd,!1,j,k,"",l,A.bn,A.a5)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,!1,k,0,l,m,A.bn,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,k,l,m,"",n,A.bn,A.a5)},
$S:z+35}
C.fxI.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.ep(A.bg,!1,4279310375,A.aD,"",i,24,A.bn,A.a5,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cm,D.f1,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fxH.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cm,t=v?j:0
return C.ep(A.bg,!1,4279310375,A.aD,"",4280640491,24,A.bn,A.a5,"",h,w,d,v?k:"",l,0,!1,"",0,D.bf,4280172719,2,"",t,0,"",u,D.lv,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.qe,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fxF.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fA6.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hiv.cg(0,A.a.i(s.w).toLowerCase(),new C.fA4(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.cg(0,s.r,new C.fA5(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bv(t.e,new B.bnS(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1681}
C.fA4.prototype={
$0(){return F.aNb(this.a.w)},
$S:185}
C.fA5.prototype={
$0(){var w=this.a.r,v=B.aK(w.toLowerCase()," ","_")
return F.byO("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hD(2,w,A.c9,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:185}
C.fee.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fef.prototype={
$1(d){return d.a},
$S:z+18}
C.feg.prototype={
$1(d){return d.b},
$S:z+19}
C.fOk.prototype={
$1(d){return D.h0i},
$S:z+41}
C.eYI.prototype={
$0(){return this.a.x=C.hMV(this.b,this.c.b)},
$S:0}
C.eYJ.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eYG.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:409}
C.eYH.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:409}
C.eYF.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bR(A.az,null,new C.eYA(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.kB,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b4(s,7)
if(r.length===0){n.m(new C.eYB(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hoi(o,m.cHP(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.eYC(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eYA.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eYE(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b4C,A.f,p,p,D.b_E,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.BX:D.C1,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a7(64,64,C.fAl(v,i.b3_(h),u),p)))}t=B.m1(1,m,4,10,10,p,A.dR,!0)
if(!l)return B.bl(!0,new B.D(A9.xH,t,p),!0,!1,A.af,!0,!0)
s=new C.eYD(i,d)
m=B.aI(d,A.bV,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.GI[e]
l.push(s.$2(r.a,r.b))}return B.bl(!0,new B.cT(new B.aY(0,1/0,0,m.a.b*0.85),B.c9(B.v(B.a([D.fng,A.S,t,A.dY,D.eMj,A.at,D.fxT,A.S,B.m1(1.15,l,3,10,10,p,A.dR,!0)],n),A.F,p,A.e,A.j,0,A.p),A.r,p,A.y,p,A9.xH,p,p,A.ag),p),!0,!1,A.af,!0,!0)},
$S:26}
C.eYE.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.n(16),t=v?A.b6.j(0.22):A.c.j(0.04),s=v?A.bu:A.dr
return B.aD(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.q,v?2:1),u,w,w,A.n),w,w,w,w,A.hz,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eYz(this.b,d),w,w,w,w,w,w,!1,A.a7)},
$S:1682}
C.eYz.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eYD.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.n(12),r=t?A.bL:A.bF
r=B.I(r,A.q,t?2.5:1)
w=B.n(10)
u=B.E(B.p(v,B.bw(w,d.length===0?B.p(v,D.anv,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e1(new C.Nf(u.Fx(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aD(v,B.v(B.a([u,A.at,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bL:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.N,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eYy(this.b,d),v,v,v,v,v,v,!1,A.a7)},
$S:138}
C.eYy.prototype={
$0(){B.a6(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.eYB.prototype={
$0(){var w=this.a
return w.w=w.w.Fx("")},
$S:0}
C.eYC.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eYo.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eYp.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eYr.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eYs.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eYt.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eYu.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eYq(w,d))},
$S:2}
C.eYq.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eYv.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eYW.prototype={
$0(){return this.a.f.fL()},
$S:0}
C.eYX.prototype={
$0(){var w=this.a
return w.m(new C.eYV(w))},
$S:0}
C.eYV.prototype={
$0(){return this.a.e=null},
$S:0}
C.eYY.prototype={
$0(){var w=this.a
return w.m(new C.eYU(w))},
$S:0}
C.eYU.prototype={
$0(){return this.a.x=null},
$S:0}
C.eZ_.prototype={
$1(d){var w=this.a
return w.m(new C.eYT(w,d))},
$S:33}
C.eYT.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eZ0.prototype={
$1(d){var w=this.a
return w.m(new C.eYS(w,d))},
$S:33}
C.eYS.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eZ1.prototype={
$0(){var w=this.a
return w.m(new C.eYR(w))},
$S:0}
C.eYR.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eZ2.prototype={
$1(d){var w=this.a
return w.m(new C.eYQ(w,d))},
$S:33}
C.eYQ.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eZ3.prototype={
$1(d){var w=this.a
return w.m(new C.eYP(w,d))},
$S:33}
C.eYP.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eZ4.prototype={
$0(){var w=this.a
return w.m(new C.eYO(w))},
$S:0}
C.eYO.prototype={
$0(){var w=this.a
return w.w=w.w.Fx("")},
$S:0}
C.eZ5.prototype={
$0(){var w=this.a
return w.m(new C.eYN(w,this.b))},
$S:0}
C.eYN.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eZ6.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a7(u,null,w.bNq(D.a2E[v]),null))
return B.bY(A.bA,t,A.bq,8,8)},
$S:169}
C.eYZ.prototype={
$1(d){var w=this.a
return w.m(new C.eYM(w,d))},
$S:8}
C.eYM.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eYw.prototype={
$0(){var w=this.a
return w.m(new C.eYx(w,this.b,this.c))},
$S:0}
C.eYx.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.L(0,w)},
$S:0}
C.eYL.prototype={
$0(){var w=this.a
return w.m(new C.eYK(w,this.b))},
$S:0}
C.eYK.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fOj.prototype={
$1(d){return new C.a03(this.a,this.b,null)},
$S:z+42}
C.eYh.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eYi.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eYj.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aG1?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eYk.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eYl.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eYg(w,d))},
$S:2}
C.eYg.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eYm.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eYn.prototype={
$0(){var w=this.b
if(A.a.cb(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bO(0,new B.bb(w,B.hc(A.bw,w.length),A.aN))},
$S:0}
C.fkY.prototype={
$1(d){return d.a===this.a},
$S:207}
C.edT.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gawM(),n=o.x
n===$&&B.c()
w=B.n(16)
v=p.a.c
u=v?D.cOJ:D.d43
t=D.xm.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.q,v?1.8:1.2)
s=D.xm.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.n(15)
n=B.bZ(0,B.b3(q,q,q,new C.bh4(n*6.283,q),A.au),0,0,0)
o=o.x
o=B.bZ(0,B.bOu(B.eH(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a8(A.a3,A.a8,A.x,B.a([A.K,D.bby.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.u(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bw(s,new B.an(A.W,q,A.aa,A.r,B.a([n,o,B.av(B.v(B.a([B.X(p.a.c?A.ef:A.lU,D.xm,q,q,q,20),A.at,B.f6(A.A,B.nO(A.jw,D.fgS,new C.edS()),A.f,A.eh)],r),A.m,q,A.e,A.Q,0,A.p),q,q,q),B.ao(q,B.p(q,D.fdw,A.f,q,q,new B.o(D.xm,q,q,B.n(6),q,q,A.n),q,q,q,q,M.ait,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a8(A.ax,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:92}
C.edS.prototype={
$1(d){return D.bV5.av(0,d)},
$S:65}
C.fFp.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fFq.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:207}
C.fFr.prototype={
$2(d,e){return A.o.aL(e.a.length,d.a.length)},
$S:1683}
C.fFs.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aK(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aK(u,p,q.toUpperCase())}return u},
$S:14}
C.fFl.prototype={
$1(d){return d.a},
$S:z+18}
C.fFm.prototype={
$1(d){return d.b},
$S:z+19}
C.fNx.prototype={
$1(d){return new C.Zp(this.a,this.b,null)},
$S:z+44}
C.dii.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dij.prototype={
$1(d){return d.a===this.a.gai_()},
$S:z+10}
C.dik.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.din.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dio.prototype={
$0(){var w=this.a
return w.m(new C.dim(w,this.b))},
$S:0}
C.dim.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dip.prototype={
$1(d){var w=this.a
return w.m(new C.dil(w,d))},
$S:8}
C.dil.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.edR.prototype={
$1$2(d,e,f){var w=B.bo(d,!0,f)
A.d.fn(w,this.a)
return B.de(w,0,B.dJ(e,"count",x.S),B.U(w).c).dI(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1684}
C.faI.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.ep(A.bg,!1,4279310375,A.aD,"",i,24,A.bn,A.a5,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f1,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cm,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.faK.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.ep(A.L,!1,this.b.d,A.aD,"",4280640491,i,A.bn,A.cN,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bf,4280172719,2,d,l,0,"",D.mG,D.cQ,g,e,f)},
$S:z+46}
C.faJ.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.ws(0,"twinkle")
w=t===D.bf?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mG,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.faH.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fyN.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fyO.prototype={
$0(){return A.d.gI(D.GS)},
$S:z+49}
C.fyP.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fcI.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fES.prototype={
$1(d){var w=2450411,v=4281908728
C.dw(d,C.dx(4280171146,1,0,D.bf,w,0,0.52,0,0))
C.dw(d,C.dx(v,1,0,D.bf,w,0,0.04,0.48,0))
C.dw(d,C.dx(4294047225,0.38,0,D.bf,w,0,0.48,0.52,0.62))
C.dw(d,C.dx(v,0.006,0,D.fs,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fET.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dw(d,C.dx(4280172719,0.8,0,D.bf,w,0,0.36,0.58,0.1))
C.dw(d,C.dx(v,0.64,0,D.bf,w,0,0.28,0.64,0.18))
C.dw(d,C.dx(4282090230,0.44,0,D.bf,w,0,0.2,0.7,0.28))
C.dw(d,C.dx(v,0.006,0,D.fs,v,3,0.22,0.08,0.12))
C.dw(d,C.dx(u,0.004,0,D.fs,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fEU.prototype={
$1(d){var w=2450411,v=4279548070
C.dw(d,C.dx(4279080072,0.11,0,D.bf,w,0,1,0,0))
C.dw(d,C.dx(4279310375,0.11,0,D.bf,w,0,1,0,0.89))
C.dw(d,C.dx(856528008,0.72,0,D.jO,w,0,0.28,0.72,0.14))
C.dw(d,C.dx(1426953352,0.2,0,D.jO,w,0,0.2,0.78,0.22))
C.dw(d,C.dx(v,0.004,0,D.fs,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fF4.prototype={
$1(d){var w=2450411
C.dw(d,C.dx(4279203438,0.55,0,D.jO,w,0,0.5,0.55,-0.05))
C.dw(d,C.dx(4280171146,0.5,0,D.jO,w,0,0.45,0.62,0.35))
C.dw(d,C.dx(4280640491,0.4,0.3,D.jN,w,0,0.35,0.68,0.55))
C.dw(d,C.dx(571438702,0.12,0,D.bf,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fF9.prototype={
$1(d){var w=4280472558
C.dw(d,C.dx(4279310375,0.75,-0.4,D.jN,2450411,0,0.75,-0.15,0.35))
C.dw(d,C.dx(w,0.55,0,D.bf,2450411,0,0.06,0.42,0.38))
C.dw(d,C.dx(w,0.006,0,D.fs,w,3,0.35,0.08,0.08))
C.dw(d,C.dx(2282478,0.12,0,D.bf,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fFa.prototype={
$1(d){var w=2450411,v=4280640491
C.dw(d,C.dx(3423541034,0.48,0,D.bf,w,0,1,0,0))
C.dw(d,C.dx(v,0.12,-0.08,D.jO,w,0,1.1,-0.05,0.38))
C.dw(d,C.dx(858088427,0.35,0,D.bf,w,0,0.42,0.55,0.05))
C.dw(d,C.dx(v,0.006,0,D.fs,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fFb.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cNM[w]
u=Date.now()
t=$.j1
$.j1=t+1
v=new C.eK("design_"+(""+1000*u+"_"+t),D.f1,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a5,A.bn,A.aD,4279310375,A.bg,null,D.bf,v,4294967295,2,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.Kd
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dw(d,C.dx(s,0.006,0,D.fs,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fFc.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.mk,A.dv,w/3).l()
u=Date.now()
t=$.j1
$.j1=t+1
v=new C.eK("design_"+(""+1000*u+"_"+t),D.f1,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a5,A.bn,A.aD,4279310375,A.bg,null,D.CD,v,2450411,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.Kd
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dw(d,C.dx(s,0.006,0,D.fs,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fFd.prototype={
$1(d){var w=4294967295
C.dw(d,C.dx(4280640491,1,0,D.bf,2450411,0,0.42,0,0))
C.dw(d,C.dx(4280110808,1.1,1.57,D.jN,2450411,0,0.18,0.35,-0.05))
C.dw(d,C.dx(w,0.006,0,D.fs,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fFe.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dw(d,C.dx(w,0.1,0,D.bf,v,0,1,0,0))
C.dw(d,C.dx(u,0.012,0,D.bf,v,0,1,0,0.1))
C.dw(d,C.dx(u,0.006,0,D.fs,u,3,0.42,0.06,0.14))
C.dw(d,C.dx(403446057,0.68,0,D.jO,v,0,0.22,0.72,0.18))
C.dw(d,C.dx(w,0.1,0,D.bf,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fFf.prototype={
$1(d){var w=4278630100
C.dw(d,C.dx(4279310375,1.2,0.15,D.jO,2450411,0,0.55,-0.2,-0.1))
C.dw(d,C.dx(w,1.1,0.15,D.bf,2450411,0,0.08,0.15,-0.05))
C.dw(d,C.dx(1120295,0.18,0,D.bf,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fEV.prototype={
$1(d){var w=4292617766
C.dw(d,C.dx(4282714634,0.65,-0.2,D.jN,2450411,0,0.65,-0.1,0.45))
C.dw(d,C.dx(w,0.5,-0.15,D.jN,2450411,0,0.5,0.05,0.55))
C.dw(d,C.dx(w,0.006,0,D.fs,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fEW.prototype={
$1(d){var w=2450411
C.dw(d,C.dx(4278413729,0.35,3.14,D.jN,w,0,0.45,-0.05,0.7))
C.dw(d,C.dx(4278355143,0.3,3.14,D.jN,w,0,0.4,0.25,0.75))
C.dw(d,C.dx(4279150057,0.32,3.14,D.jN,w,0,0.5,0.55,0.72))
C.dw(d,C.dx(863884284,0.22,0,D.eL,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fEX.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dw(d,C.dx(w,0.14,0,D.bf,v,0,0.14,0.02,0.02))
C.dw(d,C.dx(2282478,0.14,0,D.bf,u,3,0.14,0.84,0.02))
C.dw(d,C.dx(w,0.28,0,D.jO,v,0,0.35,-0.08,0.78))
C.dw(d,C.dx(u,0.22,0.5,D.jN,v,0,0.3,0.72,0.78))
C.dw(d,C.dx(w,0.006,0,D.fs,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fEY.prototype={
$1(d){var w=4293571336,v=1156231944
C.dw(d,C.dx(1841431,0.92,0,D.bf,w,3,0.92,0.04,0.04))
C.dw(d,C.dx(v,0.15,0,D.jN,2450411,0,0.15,0.02,0.02))
C.dw(d,C.dx(v,0.15,3.14,D.jN,2450411,0,0.15,0.83,0.83))
C.dw(d,C.dx(w,0.004,0,D.fs,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fEZ.prototype={
$1(d){var w=4279080072,v=2450411
C.dw(d,C.dx(w,0.14,0,D.l4,v,0,0.14,0.68,0.18))
C.dw(d,C.dx(4279548070,0.14,0,D.l4,v,0,0.14,0.78,0.28))
C.dw(d,C.dx(4281193663,0.14,0,D.l4,v,0,0.14,0.68,0.38))
C.dw(d,C.dx(4284410580,0.14,0,D.l4,v,0,0.14,0.78,0.48))
C.dw(d,C.dx(4279203438,0.14,0,D.l4,v,0,0.14,0.68,0.58))
C.dw(d,C.dx(w,0.006,0,D.fs,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fF_.prototype={
$1(d){var w=2450411,v=4280640491
C.dw(d,C.dx(3708753706,0.42,0,D.bf,w,0,1,0,0))
C.dw(d,C.dx(v,0.06,-0.05,D.jO,w,0,1,0,0.38))
C.dw(d,C.dx(859356664,0.25,0,D.eL,w,0,0.25,0.7,0.08))
C.dw(d,C.dx(v,0.006,0,D.fs,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fF0.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.mk,A.dv,w/3).l()
u=Date.now()
t=$.j1
$.j1=t+1
v=new C.eK("design_"+(""+1000*u+"_"+t),D.f1,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a5,A.bn,A.aD,4279310375,A.bg,null,D.CD,v,2450411,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.Kd
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dw(d,C.dx(4280172719,0.08,0,D.bf,2450411,0,1,0,0))
C.dw(d,C.dx(s,0.006,0,D.fs,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fF1.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.j1
$.j1=u+1
u=new C.eK("design_"+(""+1000*v+"_"+u),D.f1,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a5,A.bn,A.aD,s,A.bg,null,D.fs,t,t,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
v=$.Kd
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dw(d,C.dx(s,0.75,0,D.bf,2450411,0,0.22,0.72,0.1))
C.dw(d,C.dx(872415231,0.16,0,D.bf,2450411,0,0.16,0.75,0.15))
C.dw(d,C.dx(s,0.006,0,D.fs,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fF2.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dw(d,C.dx(4674921,0.9,0,D.bf,4287931320,2,0.9,0.05,0.05))
C.dw(d,C.dx(w,0.08,0,D.bf,v,0,0.08,0.03,0.03))
C.dw(d,C.dx(u,0.08,0,D.bf,v,0,0.08,0.89,0.03))
C.dw(d,C.dx(u,0.08,0,D.bf,v,0,0.08,0.03,0.89))
C.dw(d,C.dx(w,0.08,0,D.bf,v,0,0.08,0.89,0.89))
C.dw(d,C.dx(w,0.004,0,D.fs,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fF3.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.j1
$.j1=t+1
t=new C.eK("design_"+(""+1000*u+"_"+t),D.f1,0.55,0.14+v,0.38,0.18,"",24,A.a5,A.bn,A.aD,r,A.bg,null,D.bf,4294967295,4280640491,2,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.Kd
t.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,t)
u=B.aq(A.di,A.co,w/2).l()
t=Date.now()
s=$.j1
$.j1=s+1
u=new C.eK("design_"+(""+1000*t+"_"+s),D.f1,0.57,0.16+v,0.06,0.14,"",24,A.a5,A.bn,A.aD,r,A.bg,null,D.bf,u,q,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
v=$.Kd
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dw(d,C.dx(4280171146,1,0,D.bf,q,0,0.48,0,0))
C.dw(d,C.dx(4280172719,1.1,1.57,D.jN,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fF5.prototype={
$1(d){var w=2450411
C.dw(d,C.dx(870995980,0.55,0.45,D.jO,w,0,0.55,-0.12,-0.08))
C.dw(d,C.dx(856996006,0.45,0.45,D.jO,w,0,0.45,0.62,-0.05))
C.dw(d,C.dx(16777215,0.38,0.45,D.jO,4293548044,5,0.38,0.52,0.12))
C.dw(d,C.dx(585783308,0.3,0.45,D.jO,w,0,0.3,0.56,0.16))
C.dw(d,C.dx(4279548070,0.06,0,D.bf,w,0,0.16,0.38,0.04))
C.dw(d,C.dx(1156208652,0.28,0,D.eL,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fF6.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dw(d,C.dx(w,1,0,D.bf,v,0,0.07,0,0))
C.dw(d,C.dx(u,0.1,0,D.bf,t,1,0.46,0.48,0.14))
C.dw(d,C.dx(u,0.1,0,D.bf,t,1,0.46,0.48,0.28))
C.dw(d,C.dx(u,0.1,0,D.bf,t,1,0.46,0.48,0.42))
C.dw(d,C.dx(s,0.08,0,D.eL,v,0,0.08,0.5,0.16))
C.dw(d,C.dx(w,0.08,0,D.eL,v,0,0.08,0.5,0.3))
C.dw(d,C.dx(4279548070,0.08,0,D.eL,v,0,0.08,0.5,0.44))
C.dw(d,C.dx(16777215,0.32,0.45,D.jO,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fF7.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dw(d,C.dx(4294047225,0.08,0,D.bf,t,2,0.1,0.02,0.06))
C.dw(d,C.dx(s,0.42,0,D.bf,2450411,0,0.36,0.58,0.18))
C.dw(d,C.dx(872415231,0.12,0,D.bf,2450411,0,0.28,0.62,0.24))
C.dw(d,C.dx(16777215,0.28,0,D.eL,s,4,0.32,0,0.72))
C.dw(d,C.dx(r,0.006,0,D.fs,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.j1
$.j1=u+1
u=new C.eK("design_"+(""+1000*v+"_"+u),D.f1,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a5,A.bn,A.aD,4279310375,A.bg,null,D.eL,16777215,t,2,0,!1,"",0,D.cm,0,"","","","","",!1,0)
v=$.Kd
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fF8.prototype={
$1(d){var w=2450411,v=4279548070
C.dw(d,C.dx(3423541034,0.55,0,D.bf,w,0,1,0,0))
C.dw(d,C.dx(4009754623,0.56,0.45,D.jO,w,0,0.56,0.22,0.18))
C.dw(d,C.dx(3439329279,0.44,0.45,D.jO,w,0,0.44,0.28,0.24))
C.dw(d,C.dx(v,0.07,0,D.bf,w,0,0.22,0.34,0.62))
C.dw(d,C.dx(v,1,0,D.bf,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fwD.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fwE.prototype={
$0(){return A.d.gI($.bDx())},
$S:z+52}
C.fkw.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fkv.prototype={
$1(d){return C.hUc(d,this.a,this.b)},
$S:z+53}
C.fFy.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vI(1.0375,1.01875,1)
return new B.fP(v,u,new C.aS8(B.hJW(A.uX,C.hUf(w.c,w.d,v,u),t)))},
$S:408}
C.dTH.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:9}
C.dTG.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c0(w,new B.o(w,w,w,w,w,new B.bT(A.JP,1.2,A.x,w,0,u.d,w,w),A.n),A.be),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jz(new B.an(A.W,w,A.b0,A.r,B.a([t,new B.ev(B.b3(w,w,w,new C.bdY(u.a,r,q,r),A.au),w),B.av(new B.ki(r,new C.dTF(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.r,w)},
$S:354}
C.dTF.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ew.az(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gI(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hU(B.fM(i,A.A,r,r,A.ci,A.bT,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fT(A.A,0,6.283185307179586,A.x,t,r,new B.mo(e*0.8)),A.a6),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a7(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bqy(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cR(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a7(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.dd(B.dU(B.v(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a8(A.a3,A.a8,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a7(r,m*0.022,r,r),B.d(w.a.c.gaKc(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a5,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.Q,0,A.p),new B.u(0,(1-o)*m*0.03)),o))
return B.dd(B.ed(A.A,new B.D(new B.Q(l,0,l,0),B.v(j,A.m,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:105}
C.eXv.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).av(0,d)},
$S:65}
C.c84.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.n(14),t=g?A.bL:A.bF
t=B.I(t,A.q,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hI.j(0.4),A.J,14)],x.V):v
w=B.df(v,B.bw(B.n(12),d,A.aq),v,v,A.bc,new B.o(v,v,t,u,w,v,A.n),A.eG,v,72,v,v,v,v,v)
return B.aD(v,new B.a7(112,v,B.v(B.a([w,A.h0,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bL:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.N,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a7)},
$S:1685}
C.c85.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Fx(""))},
$S:0}
C.c86.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e1(new C.Nf(v.Fx(u),!0,!1,null),!0,null),d.b,new C.c87(w,this.c,d),v.a===u)},
$S:z+54}
C.c87.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hoi(u.b,t.c.Fx(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fLX.prototype={
$1(d){return new C.YY(this.a,null)},
$S:z+55}
C.d7v.prototype={
$0(){var w=this.a
w.d=w.gvz().baV("data:"+this.b+";base64,"+A.cS.gcz().aJ(this.c));++w.r},
$S:0}
C.d7A.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.d7B.prototype={
$0(){var w=this.a
return w.m(new C.d7z(w))},
$S:0}
C.d7z.prototype={
$0(){return this.a.r++},
$S:0}
C.d7C.prototype={
$1(d){var w=this.a
return w.m(new C.d7y(w,d))},
$S:2}
C.d7y.prototype={
$0(){var w=this.a
return w.d=w.gvz().aDa(this.b)},
$S:0}
C.d7D.prototype={
$0(){var w=this.a
return w.m(new C.d7x(w))},
$S:0}
C.d7x.prototype={
$0(){var w=this.a
return w.d=w.gvz().baV("")},
$S:0}
C.d7E.prototype={
$1(d){var w=this.a
return w.m(new C.d7w(w,d))},
$S:2}
C.d7w.prototype={
$0(){var w=this.a
return w.d=w.gvz().bb1(this.b)},
$S:0}
C.d7F.prototype={
$0(){var w=this.a
w=w.gvz().bb1(w.gawN().a.a)
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.fLW.prototype={
$1(d){var w={}
w.a=this.a
return new B.e0(new C.fLV(w),null)},
$S:21}
C.fLV.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bl(!0,new B.cT(new B.aY(0,1/0,0,B.aI(d,A.bV,x.w).w.a.b*0.85),B.c9(B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.n(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.fv0,A.at,D.fvg,A.aB,new C.aZq(v.a,new C.fLU(v,e,d),!0,w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,w,w,w,A.ag),w),!0,!1,A.af,!0,!1),A.f,w,w,D.b0c,w,w,w,w,A.Mf,w,w,w)},
$S:163}
C.fLU.prototype={
$1(d){this.b.$1(new C.fLT(this.a,d))
B.a6(this.c,!1).O(d)},
$S:z+56}
C.fLT.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fOi.prototype={
$1(d){return D.fWG},
$S:z+57}
C.deh.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dei.prototype={
$0(){var w=this.a.c
w.toString
B.a6(w,!1).O(this.b)
return null},
$S:0}
C.dej.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a6(w,!1).O(v)}},
$S:0}
C.fCe.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).av(0,d)},
$S:65}
C.d7c.prototype={
$3(d,e,f){var w,v=this,u=new B.aO($.W().r,A.ao,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.F(new B.b5(t+r*1.2,o))
u.F(new B.cV(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.F(new B.cV(w,q+p,w,q+p*1.2))
u.F(new B.CV(B.bU(new B.u(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aP(u,v.d)
s.aP(u,v.e)
p=B.N()
p.r=B.aq(v.a.d,A.c,0.6).gp(0)
s.af(new B.u(w,o),2.2,p)},
$S:669}
C.fCi.prototype={
$2(d,e){return A.k.aL(d.c,e.c)},
$S:z+58}
C.fuE.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fuF.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xK,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fdN,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dn(D.Go,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fuC(d),B.bn(A.c_,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.S,B.eC(A.o6,D.TX,new C.fuD(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wO,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fuC.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fuD.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.cdv.prototype={
$1(d){return d.hF()},
$S:z+59}
C.cdw.prototype={
$1(d){return d.ag()},
$S:z+60}
C.cdu.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a2(b5,x.N,x.z),b3=B.aJ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.N(b3)
if(b4==null)b4=A.a5.gdK(0)
b3=B.aJ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.N(b3)
if(w==null)w=0
b3=B.aJ(b2.h(0,"align"))
v=b3==null?b1:A.k.N(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hQ3(b2.h(0,"type"))
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
n=A.aye[A.o.D(b4,0,8)]
m=D.cQD[A.o.D(w,0,1)]
l=C.hTF(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.auV[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hWu(b2.h(0,"shape"))
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
a3=C.hjB(b2.h(0,"textTransition"))
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
return C.ep(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.cdk.prototype={
$1(d){return d.hF()},
$S:z+62}
C.cdl.prototype={
$1(d){return d.ag()},
$S:z+63}
C.cdh.prototype={
$1(d){return B.t(d)},
$S:17}
C.cdi.prototype={
$1(d){return B.t(d)},
$S:17}
C.cdj.prototype={
$1(d){return C.hag(B.a2(d,x.N,x.z))},
$S:z+64}
C.cdM.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.cdN.prototype={
$0(){return A.d.gI(D.a2h)},
$S:z+66}
C.cdH.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cc(d.f))w.n(0,u,d.hF())},
$S:z+7}
C.cdG.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cdC.prototype={
$1(d){return new B.M(d,new C.cdD(),B.U(d).k("M<1,S>")).fd(0,new C.cdE())},
$S:z+69}
C.cdD.prototype={
$1(d){return d.f},
$S:z+70}
C.cdE.prototype={
$2(d,e){return d.cc(e)?d:e},
$S:670}
C.cdF.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hFL(d)},
$S:z+71}
C.cdI.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.cdJ.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cdK.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fCR.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.L)(w),++r){q=w[r]
p=q.a
if(s.ai(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.L)(o),++l){k=o[l]
j=k.a
if(t.t(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.L(0,j)
break}}}},
$S:z+73}
C.fCN.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fCO.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fCP.prototype={
$2(d,e){var w
if(d.b===D.cQ){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fCQ.prototype={
$2(d,e){return d.b===D.f1&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cdq.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.i4d(b2,b3),b5=B.a3(b4).k("bc<2>")
b5=B.cF(new B.bc(b4,b5),new C.cdp(),b5.k("J.E"),x.N)
w=B.dc(b5,B.a3(b5).k("J.E"))
b1=b1.e
v=A.pL.az(0,A.k.D(b1,0,1))
u=new C.cdr()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cds(a9,b7.d)
r=new C.cdt(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.L)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jB.az(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kF(A.k.D(1-k,0,1),B.dU(B.ed(A.A,r.$1(l),1-k*0.06,a8,a8),new B.u(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.L)(b2),++m){i=b2[m]
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
if(a2===D.f1){a4=i.hF()
a4.ay=B.aq(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.aq(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lv&&l.at==i.at?r.$1(i):new B.an(A.W,a8,A.b0,A.r,B.a([new B.kF(A.k.D(o,0,1),r.$1(l),a8),new B.kF(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iH(B.wd(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cm)a7=D.mG
p.push(s.$5(i.c,i.d,i.e,i.f,C.hlR(a7,a6,r.$1(i))))}}return B.c0(new B.an(A.W,a8,A.aa,A.r,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a8(A.a3,A.a8,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.be)},
$S:398}
C.cdp.prototype={
$1(d){return d.a},
$S:z+22}
C.cdr.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.cds.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1689}
C.cdt.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a7p(v,C.b0y(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dFW.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ed(new B.db(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:46}
C.cdz.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.cdA.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fFF.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:313}
C.fEM.prototype={
$1(d){return new C.ad2(this.a,this.b,null)},
$S:z+78}
C.eqi.prototype={
$0(){return this.a.PC(this.b,C.i7z(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eqj.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.PC(this.b,C.i7B(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eqk.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.PC(this.b,C.i7A(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eql.prototype={
$0(){Y.hlB()
B.a6(this.a,!1).O(null)},
$S:0}
C.cdo.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1690}
C.cdn.prototype={
$2(d,e){var w,v=this,u=null,t=B.dM(d,A.nB),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.D(p*Math.max(B.lR(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bT:A.du
return B.fM(t,A.A,o,new C.cdm(),A.ci,w,!0,u,!1,new B.cy("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1691}
C.cdm.prototype={
$3(d,e,f){return D.abu},
$S:216}
C.fCM.prototype={
$2(d,e){var w,v,u,t=null,s=B.n(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a8(A.ax,A.aC,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.de(r,0,B.dJ(6,"count",x.S),B.U(r).c)
u=r.$ti.k("M<ak.E,cL>")
r=B.C(new B.M(r,new C.fCL(e.b,e.d),u),u.k("ak.E"))
return B.bw(s,B.c0(new B.an(A.W,t,A.aa,A.r,r,t),new B.o(v,t,t,t,t,w,A.n),A.be),A.aq)},
$S:1692}
C.fCL.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b0y(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fn3.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cM(r.b,new C.fn1(d))
w=B.aI(d,A.bV,x.w).w
v=B.n(22)
u=B.I(A.bF,A.q,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fN,28)],x.V)
s=x.p
return new B.cZ(e,!1,B.av(B.aG(!1,A.a1,!0,q,B.p(q,B.v(B.a([B.B(B.a([B.E(B.v(B.a([B.d(r.c,q,q,q,q,q,q,A.ke,q,q,q),A.at,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bK(!1,A.zG,q,q,!0,q,q,new C.fn2(p,d),q,B.fx(q,q,A.bj,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Fb,q,new B.b7(B.n(12),A.Y),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aB,r.d],s),A.m,q,A.e,A.Q,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.az,q,u,v,t,q,A.n),q,q,q,A.fK,A.Fk,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q,q,q),q)},
$C:"$3",
$R:3,
$S:240}
C.fn1.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a6(w,!0).py())B.a6(w,!0).eN()},
$S:0}
C.fn2.prototype={
$0(){var w=this.a.a
if(w!=null)w.a6(0)
B.a6(this.b,!0).eN()},
$S:0}
C.f50.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dd(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dU(u.b,new B.u((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dU(u.b,new B.u(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dU(u.b,new B.u(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dU(u.b,new B.u(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.ed(A.A,B.dd(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.ed(A.A,B.dd(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fB(r*3.14159)
return B.ft(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.k_(r*3.14159)
return B.ft(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fB(r*1.2)
s.k_(r*0.5)
return B.ft(A.A,B.dd(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fB(-r*1.4)
return B.ft(A.a8,B.dd(u.b,r),t,s,!0)
case 12:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dd(B.ed(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.jz(u.b,A.r,new C.aIT(r,t))],x.p),t)
case 15:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.jz(u.b,A.r,new C.aIT(1-r,t))],x.p),t)
case 16:v=D.b3C.az(0,r)
return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.ed(A.A,B.dd(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dd(B.el(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dp()
s.mM(r*6.28)
s.jI(r,r,r,1)
return B.ft(A.A,u.b,t,s,!0)
case 20:return B.eH(A.A,(r-0.5)*0.35,new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dd(u.b,r)],x.p),t),t)}},
$S:59}
C.dRU.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cs(0)}},
$S:11}
C.dRT.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cs(0)}},
$S:11}
C.dRS.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hlR(v,w,e)},
$S:59}
C.cdg.prototype={
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
s=B.U(v).k("M<1,cL>")
q=B.C(new B.M(v,new C.cdf(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c0(new B.an(A.W,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.be)},
$S:398}
C.cdf.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cm?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a7p(m,new C.UG(d,C.b0y(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d4r.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d4q(w))},
$S:11}
C.d4q.prototype={
$0(){return this.a.d++},
$S:0}
C.edz.prototype={
$2(d,e){var w,v=null,u=A.o.an(this.b.e.a,1000),t=A.o.E(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aNc.t(0,A.d.gI(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.i3X(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.ea(0,w*7,0,1)
s.fB(Math.sin(t)*0.32)
s.k_(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jI(w,w,w,1)
return B.ft(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dU(B.ed(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.u(s*14,w*10))
default:s=Math.sin(t)
return B.dd(B.ed(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:59}
C.eV8.prototype={
$1(d){var w
$.W()
w=B.N()
w.b=A.ae
w.c=d
w.e=A.fC
return w},
$S:1693}
C.fAm.prototype={
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
if(q==="framed"||q==="gold")w.push(B.b3(r,r,r,new C.bqr(u,t,r),A.au))
w.push(B.nu(s.d,A.aq,new C.beu(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.bpr(u,q,t,r),A.au))
return B.av(new B.a7(v.a,v.b,new B.an(A.W,r,A.b0,A.r,w,r),r),r,r,r)},
$S:242}
C.fpX.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:314}
C.eww.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.CG(t.a.a.c),$async$$0)
case 3:s=e
r=J.a5(s)
if(r.gam(s)){u=null
w=1
break}u=r.dM(s,new C.ewu(),new C.ewv(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1694}
C.ewu.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:179}
C.ewv.prototype={
$0(){return J.fp(this.a)},
$S:1696}
C.esU.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.esV.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.esW.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.euu.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eui.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.euj.prototype={
$1(d){return d.hF()},
$S:z+81}
C.esh.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.evC.prototype={
$0(){this.a.tv()},
$S:0}
C.ews.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.of()
w.JW()},
$S:0}
C.eus.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.of()
w.JW()},
$S:0}
C.ewf.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.ewg.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.ewh.prototype={
$1(d){return d.a},
$S:z+22}
C.ewi.prototype={
$0(){var w=this.a.r
return new B.as(new B.bb(w,A.b5,A.aN),$.aw())},
$S:255}
C.ewj.prototype={
$0(){return B.jQ(!0,null,!0,!0,null,null,!1)},
$S:674}
C.erG.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.ewt.prototype={
$0(){},
$S:0}
C.etB.prototype={
$0(){var w=this.a
w.e=this.b.hF()
w.f=0
w.r=null
w.db=!1
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xo()
w.JW()},
$S:0}
C.erE.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.xo()},
$S:0}
C.erF.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.xo()},
$S:0}
C.etY.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.etZ.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xo()
w.JW()
w.z="Home"},
$S:0}
C.eu_.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.etA.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,A.TW,w,w,!0,w,w,new C.etz(d),w,w)],x.p),w,w,w,D.fwM,w,w,w,w,D.fee,w)},
$S:19}
C.etz.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.etx.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,A.TW,w,w,!0,w,w,new C.etw(d),w,w)],x.p),w,w,w,D.fib,w,w,w,w,D.ffX,w)},
$S:19}
C.etw.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.ety.prototype={
$0(){},
$S:0}
C.esQ.prototype={
$1(d){return this.a.b_g(C.bBx(d))},
$S:z+7}
C.esR.prototype={
$1(d){return this.a.aez(C.bBx(d))},
$S:z+7}
C.etH.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fwQ,A.at,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.by,new C.Pm(A.vG,D.awh,"HATI YA KUHOWA","Hati ya mahari",new C.etC(d),w),A.S,new C.Pm(A.hb,D.d1U,"HATI YA KUHOWESHA","Hati ya kupokea",new C.etD(d),w),A.S,new C.Pm(A.i2,D.cOP,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.etE(d),w),A.S,new C.Pm(A.hO,D.cN5,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.etF(d),w)],v)
if(this.a.gab2())A.d.v(u,B.a([A.S,new C.Pm(A.j_,D.cyb,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.etG(d),w)],v))
return B.bl(!0,B.c9(B.v(u,A.aj,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,E.xK,w,w,A.ag),!0,!1,A.af,!0,!0)},
$S:26}
C.etC.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.etD.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.etE.prototype={
$0(){B.a6(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.etF.prototype={
$0(){B.a6(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.etG.prototype={
$0(){B.a6(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.etI.prototype={
$0(){var w=this.a
w.e=this.b.hF()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xo()},
$S:0}
C.erI.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.erJ.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a9(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.mj(r,v.f+1,q);++v.f
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
C.etT.prototype={
$1(d){return d.b===D.lv},
$S:z+4}
C.etU.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gI(v).go
w.b=A.d.gI(v).id
return new B.e0(new C.etR(w,this.a,v),null)},
$S:21}
C.etR.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.etS(p,o,a3,n),l=B.P(a2).ax.a===A.I,k=l?A.c:A.M,j=l?A.aS:A.ak,i=l?A.bo:A.bK,h=l?A.M:A.c,g=B.n(28),f=B.I(l?A.bF:A.aL,A.q,1),e=x.p,d=B.B(B.a([B.E(B.v(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bD,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aH(q,q,q,q,B.X(A.cD,j,q,q,q,q),q,q,q,new C.etN(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.C1[w]
v.a=null
t=v.a=u.a
a1.push(new C.bgZ(t,u.b,p.a===t,i,k,new C.etO(v,m),q))}a1=B.bY(A.bA,a1,A.bq,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.BX[w]
s.a=null
t=s.a=r.a
u.push(new C.bgY(t,r.b,p.b===t,k,j,new C.etP(s,m),q))}return B.bl(!0,B.p(q,B.c9(B.v(B.a([d,A.aP,a0,A.S,a1,A.by,v,A.S,B.bY(A.bA,u,A.bq,12,12),A.by,new B.a7(1/0,48,B.eC(D.bRe,D.fzf,new C.etQ(o,n),B.di(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b7(B.n(16),A.Y),D.aYI,q,q,q,q)),q)],e),A.F,q,A.e,A.Q,0,A.p),A.r,q,A.y,q,q,q,q,A.ag),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.tI,D.bt8,q,q,q),!0,!1,A.af,!0,!0)},
$S:88}
C.etS.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.etL(w.a,d,e))
w.b.d3(new C.etM(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1699}
C.etL.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.etM.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.etN.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.etO.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.etP.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.etQ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gs(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d3(new C.etK(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.etK.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.etW.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.etX.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bp(v,new C.etV(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mj(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xo()},
$S:0}
C.etV.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eud.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.eue.prototype={
$1(d){return d.w},
$S:z+82}
C.euf.prototype={
$2(d,e){return d>e?d:e},
$S:86}
C.eug.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.c:A.M,s=u?A.aS:A.ak,r=u?A.bo:A.aQ,q=u?A.M:A.c,p=B.n(28),o=B.I(u?A.bF:A.aL,A.q,1),n=B.aI(d,A.bV,x.w).w,m=w.a,l=x.p,k=w.b
return B.bl(!0,B.p(v,B.v(B.a([B.B(B.a([B.p(v,D.bKX,A.f,v,v,D.b_4,v,38,v,v,v,v,v,38),A.bd,B.E(B.v(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aH(v,v,v,v,B.X(A.cD,s,v,v,v,v),v,v,v,new C.eua(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aB,new B.dq(1,A.cn,B.hJ(v,new C.eub(m,k,w.c,s,w.d,t,r),k.length,A.fA,v,A.ag,new C.euc(),!0),v)],l),A.F,v,A.e,A.Q,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.tI,A.YG,v,v,v),!0,!1,A.af,!0,!0)},
$S:26}
C.eua.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.euc.prototype={
$2(d,e){return A.ac},
$S:36}
C.eub.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cv
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.bO3,q,q,q,new C.eu8(s,w,p),q,q,q,q,"Add an icon",q)
return B.v(B.a([new B.D(D.bvm,n,q),B.aM(q,A.T,!1,q,!0,A.r,q,B.aN(),v,q,q,q,q,q,2,B.bs(q,new B.b4(4,B.n(16),A.Y),q,A.eQ,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b4(4,B.n(16),D.aYn),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ai,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eu9(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a9,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a4,q,A.an,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:675}
C.eu8.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.i9G(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geA()?p.a:q.a.length
n=p.geA()?p.b:q.a.length
m=A.a.oK(q.a,o,n,s)
r.bO(0,new B.bb(m,B.hc(A.bw,o+s.length),A.aN))
l.aiE(k,m)
l.pj()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eu9.prototype={
$1(d){var w=this.a
w.aiE(this.b.a,d)
w.pj()},
$S:2}
C.euh.prototype={
$0(){},
$S:0}
C.etJ.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.erZ.prototype={
$0(){},
$S:0}
C.es_.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hn9(this.b,w,!0)
w=this.a
w.r=null
w.xo()},
$S:0}
C.es0.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.es1.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bp(v,new C.erY(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.mj(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xo()},
$S:0}
C.erY.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eun.prototype={
$1(d){return B.oO(new C.eum(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:140}
C.eum.prototype={
$2(d,e){var w=null,v=x.p
return B.v(B.a([new B.D(E.ai8,B.v(B.a([D.fup,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.E(B.ig(!0,w,e,A.y,D.eSc,new C.eul(this.a,this.b),20,A.tL,w,A.ag,!1),1)],v),A.aj,w,A.e,A.j,0,A.p)},
$S:389}
C.eul.prototype={
$2(d,e){var w=null,v=D.GS[e],u=C.hFG(v),t=B.n(16),s=B.n(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.q,1),o=q.j(0.2),n=B.n(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fL,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.eMf,A.f,w,w,new B.o(A.dN.j(0.85),w,w,B.n(8),w,w,A.n),w,w,w,w,A.nf,w,w,w)],m))
return B.aG(!1,A.a1,!0,w,B.aL(!1,t,!0,B.p(w,B.v(B.a([B.B(n,A.m,w,A.e,A.j,0,w,w),A.b7,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a8(A.a3,A.a8,A.x,r,w,w),A.n),w,w,w,w,A.bm,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.euk(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
$S:74}
C.euk.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cdy(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a6(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.euo.prototype={
$0(){var w=this.a
w.e=this.b.hF()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xo()},
$S:0}
C.eqD.prototype={
$0(){var w,v=this.a,u=v.gql(),t=C.rs(4294967295,null,0,0,null,C.cD(),D.mF,"","","",D.dd),s=this.b
C.cdL(t,s,u)
w=v.gdr()
if(w!=null&&s!==D.CC){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.erX.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ag()
q.n(0,"id",C.cD())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aV(w),u=x.f;v.C();){t=v.gR(v)
if(u.b(t)){s=Date.now()
r=$.j1
$.j1=r+1
J.aF(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.ck(v.e.r,v.f+1,C.hag(q));++v.f},
$S:0}
C.erV.prototype={
$0(){var w=this.a
A.d.cw(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.euw.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cw(v.e.r,u),s=this.c
A.d.ck(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.erR.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bp(v.d,new C.erQ(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.erQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.euv.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.S(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.erH.prototype={
$0(){var w=this.a.r
return new B.as(new B.bb(w,A.b5,A.aN),$.aw())},
$S:255}
C.esi.prototype={
$0(){return B.jQ(!0,null,!0,!0,null,null,!1)},
$S:674}
C.ewd.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.ewe.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.asN(w).fL()
v=u.Wi(w)
v.stc(B.hc(A.bw,v.a.a.length))},
$S:9}
C.evD.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Xh(v)
if(u!=null&&u.b===D.cQ)w.Wi(u).saV(0,u.r)}else w.w=null},
$S:0}
C.eqE.prototype={
$0(){var w=C.cD(),v=this.a,u=C.ep(A.bg,!1,v.gql().e.l(),A.aD,"",4280640491,24,A.bn,A.a5,"",0.22,w,null,"","",0,!1,"",0,D.bf,4280172719,2,"Tap to edit text",0,0,"",D.cm,D.cQ,0.7,0.15,0.2)
A.d.L(v.gdr().z,u)
v.r=u.a},
$S:0}
C.eqB.prototype={
$0(){var w=C.cD(),v=this.a,u=C.ep(A.bg,!1,4279310375,A.aD,"",v.gql().c.j(0.25).l(),24,A.bn,A.a5,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gql().c.l(),2,"",0,0,"",D.cm,D.f1,0.25,0.3,0.3)
A.d.L(v.gdr().z,u)
v.r=u.a},
$S:0}
C.eqr.prototype={
$0(){var w=C.ep(A.bg,!1,4279310375,A.aD,"",4280640491,24,A.bn,A.a5,"",0.55,C.cD(),this.b,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.lv,0.6,0.2,0.18),v=this.a
A.d.L(v.gdr().z,w)
v.r=w.a},
$S:0}
C.eqo.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bY2],x.p)
for(w=J.aV(this.a);w.C();){v=w.gR(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gajf().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,D.bIF,r,r,r,r,new C.eqn(d,v),!1,r,r,r,r,r,new B.y(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.y(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bl(!0,B.cw(q,r,r,r,r,A.ag,!0),!0,!1,A.af,!0,!0)},
$S:26}
C.eqn.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eqp.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cD(),u=this.b,t=A.R.ao(u.ag(),null),s=C.ep(A.bg,!1,4279310375,A.aD,u.b,4280640491,24,A.bn,A.a5,"",0.86,v,null,"","",0,!1,"",0,D.bf,4280172719,2,t,0,0,"",D.cm,D.a4S,w,0.5-w/2,0.07)
t=this.a
A.d.L(t.gdr().z,s)
t.r=s.a},
$S:0}
C.erT.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.erU.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bp(v.gdr().z,new C.erS(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.T$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.erS.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.er5.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cQ)s.Q=t.c.l()
else if(w===D.f1){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.er6(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.L)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.er6.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.era.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.erb(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.L)(s),++u)v.$1(s[u])}else{t=s.gdr()
if(t!=null)v.$1(t)}},
$S:0}
C.erb.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.er8.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cQ){s.Q=t.c
return}w=new C.er9(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.L)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.er9.prototype={
$1(d){var w,v,u
for(w=A.d.gae(d.z),v=new B.f_(w,new C.er7()),u=this.a;v.C();)w.gR(0).Q=u},
$S:z+1}
C.er7.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.er4.prototype={
$0(){return C.cdL(this.b,this.c,this.a.gql())},
$S:0}
C.eu7.prototype={
$0(){return A.d.ck(this.a.d,0,this.b)},
$S:0}
C.ewm.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ewn.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.ewo.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ewp.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.ck(s,0,v.b)
else{w=A.d.be(s,new C.ewl(v))
if(w>=0)t.d[w]=v.b}if(v.a.gS0()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hF()
t.f=0
t.r=null
t.db=!1
A.d.a9(t.ax)
A.d.a9(t.ay)
t.xo()
t.JW()}},
$S:0}
C.ewl.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.evT.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.ab6(),s=w.b,r=u.ab7(A.fc,A.ku,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.n(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.q,1),n=x.p
p=B.a([t,A.O,r,A.by,B.p(v,B.B(B.a([B.E(u.aUm(w.c,A.ak),1),new B.D(A.fr,B.p(v,D.bIL,A.f,v,v,new B.o(A.fc.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.E(u.aUm(s,A.fc),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a8(A.ax,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.bB,v,v,v),A.by,u.aUp(A.fc,d,D.bEQ,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.S,u.bWQ(A.aR,d,A.tY,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aUn(d,"Not now"))
return new C.JF(B.v(p,A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.evS.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.JF(B.v(B.a([v.ab6(),A.O,v.ab7(A.aR,D.bEv,"Pick which saved document should receive the details.","Choose "+this.b),A.aP,new B.cT(new B.aY(0,1/0,0,B.aI(d,A.bV,x.w).w.a.b*0.42),B.hJ(w,new C.evQ(v,u,d),u.length,w,w,A.ag,new C.evR(),!0),w),A.aB,v.aUn(d,"Cancel")],x.p),A.aj,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.evR.prototype={
$2(d,e){return A.S},
$S:36}
C.evQ.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.n(16),t=A.c.j(0.05),s=B.n(16),r=B.I(A.c.j(0.08),A.q,1),q=x.p
return B.aG(!1,A.a1,!0,w,B.aL(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.an_,A.f,w,w,new B.o(w,w,w,B.n(12),w,D.bV0,A.n),w,42,w,w,w,w,w,42),A.bd,B.E(B.v(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.ny,w,w,w),A.cV,B.d("Updated "+this.a.PD(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.X(A.ey,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bB,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.evP(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
$S:74}
C.evP.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.evM.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.ab6()
t=t.ab7(A.aF,A.u6,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.JF(B.v(B.a([s,A.O,t,A.by,B.B(B.a([B.E(B.dT(A.a8a,new C.evK(d),B.di(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cl,u,new B.b7(B.n(14),A.Y),new B.ay(w,1,A.q,-1),u,u,u,u)),1),A.av,B.E(B.bG(D.fgw,new C.evL(d),B.bn(A.fc,u,u,u,A.c,u,A.cl,u,new B.b7(B.n(14),A.Y),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.aj,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.evK.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.evL.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.evO.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.ab6(),s=w.b,r=u.ab7(A.aV,A.ef,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.E(u.au6("Names",""+w.c),1),A.ab,B.E(u.au6("Fields",""+w.d),1),A.ab,B.E(u.au6("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bn(A.bj,v,v,v,A.c,v,A.xz,v,new B.b7(B.n(14),A.Y),v,v,v)
return new C.JF(B.v(B.a([t,A.O,r,A.aP,p,A.by,B.bG(B.d("Open "+s,v,v,v,v,v,v,A.nw,v,v,v),new C.evN(d),o),A.S,u.aUo(d,"Stay here",!1)],q),A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.evN.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.esM.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.esL.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.evE.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.ewc.prototype={
$1(d){var w=this.a,v=this.b
return new C.a_a(A.d.dM(w.d,new C.ewa(v),new C.ewb(v)).hF(),w.f,null)},
$S:z+84}
C.ewa.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ewb.prototype={
$0(){return this.a},
$S:z+85}
C.eqw.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bB,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.ht,w,w,w),w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bKx,w,w,w,w,new C.equ(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fey,w,w,w)],x.p)
if(v>1)t.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bLH,w,w,w,w,new C.eqv(d),!1,w,w,w,w,w,D.fAq,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dn,w,w,w),w,w,w))
return B.bl(!0,B.v(t,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.equ.prototype={
$0(){B.a6(this.a,!1).O("scroll")
return null},
$S:0}
C.eqv.prototype={
$0(){B.a6(this.a,!1).O("split")
return null},
$S:0}
C.eqx.prototype={
$0(){var w=this.b,v=w.c,u=C.ep(A.bg,!1,4279310375,A.aD,v,4280640491,24,A.bn,A.a5,"",0.84,C.cD(),w.b,"","",0,!1,"",0,D.bf,4280172719,2,v,0,0,"",D.cm,D.RI,0.88,0.06,0.08)
v=this.a
A.d.L(v.gdr().z,u)
v.r=u.a},
$S:0}
C.eqy.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.j1
$.j1=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.j1
$.j1=k+1
m.push(new C.eK(""+1000*l+"_"+k,D.RI,0.04,0.06,0.92,0.88,v,24,A.a5,A.bn,A.aD,4279310375,A.bg,u,D.bf,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cm,0,"","","","","",!1,0))
A.d.ck(j.e.r,i+q-1,new C.lG(""+1000*p+"_"+o,r+n,"",D.qd,4294967295,null,D.dd,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eqC.prototype={
$0(){var w,v=C.cD(),u=this.a,t=u.e
t=(t==null?null:C.kw(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.ep(A.bg,!1,4279310375,A.aD,t,4280640491,24,A.bn,A.a5,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.l3,0.35,0.55,0.62)
A.d.L(u.gdr().z,w)
u.r=w.a},
$S:0}
C.eqt.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b24(o)
w=C.cD()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.ep(A.bg,!1,4279310375,A.aD,"marriage_sign_placed_"+A.a.eg(v.db,"marriage_sign_",""),4280640491,24,A.bn,A.a5,"",r,w,o.a,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.l3,s,u,t)
A.d.L(p.gdr().z,q)
A.d.bp(p.gdr().z,new C.eqs(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.i3G(p)}},
$S:0}
C.eqs.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eut.prototype={
$0(){var w=this.a,v=this.b
w.b24(v)
this.c.at=v.a
w.r=null},
$S:0}
C.ewk.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.esP.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bp(r.z,new C.esO())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.esO.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.ere.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.erf.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.tv()},
$S:9}
C.eqq.prototype={
$0(){var w=C.ep(A.bg,!1,4279310375,A.aD,"HD Photo",4280640491,24,A.bn,A.a5,"",0.8,C.cD(),this.b,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.lv,0.8,0.1,0.1),v=this.a
A.d.L(v.gdr().z,w)
v.r=w.a},
$S:0}
C.esg.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eqz.prototype={
$0(){var w=this.a,v=this.b
A.d.L(w.gdr().z,v)
w.r=v.a},
$S:0}
C.eqI.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eqJ.prototype={
$0(){var w=this.b.hF(),v=C.cD(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.ep(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.L(t.gdr().z,f)
t.r=f.a},
$S:0}
C.eqK.prototype={
$0(){var w=this.a.gdr().z,v=this.b,u=A.d.be(w,new C.eqH(v))
if(u>=0&&u<w.length-1){A.d.cw(w,u)
A.d.ck(w,u+1,v)}},
$S:0}
C.eqH.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eqV.prototype={
$0(){var w=this.a.gdr().z,v=this.b,u=A.d.be(w,new C.eqG(v))
if(u>0){A.d.cw(w,u)
A.d.ck(w,u-1,v)}},
$S:0}
C.eqG.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eqY.prototype={
$0(){return this.a.as=A.bg},
$S:0}
C.eqZ.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.er_.prototype={
$0(){return this.a.as=A.dM},
$S:0}
C.er0.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.er1.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.er2.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.er3.prototype={
$1(d){return d.length!==0},
$S:3}
C.eqL.prototype={
$0(){var w=this.a,v=w.gdr().z,u=C.cD()
A.d.L(v,C.CL(w.gql().c.j(0.18).l(),0.1,u,D.bf,0,2,1,0,0))
u=w.gdr().z
v=C.cD()
A.d.L(u,C.iW(A.bg,!1,w.gql().d.l(),A.aD,18,A.bn,A.H,0.07,v,"Document Header",0,D.dd,0.9,0.05,0.02))},
$S:0}
C.eqM.prototype={
$0(){var w,v=this.a,u=v.gdr().z,t=C.cD()
A.d.L(u,C.CL(v.gql().c.j(0.12).l(),0.1,t,D.bf,0,2,1,0,0.9))
t=v.gdr().z
u=C.cD()
w=C.bCf()
A.d.L(t,C.iW(A.L,!1,v.gql().e.l(),A.aD,12,A.bn,A.a5,0.06,u,"Footer \xb7 "+w,0,D.dd,0.9,0.05,0.92))},
$S:0}
C.eqN.prototype={
$0(){A.d.L(this.a.gdr().z,C.CL(1727914055,0.12,C.cD(),D.bf,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eqO.prototype={
$0(){var w=4279310375
A.d.L(this.a.gdr().z,C.CL(w,0.08,C.cD(),D.bf,w,2,0.5,0.2,0.4))},
$S:0}
C.eqP.prototype={
$0(){var w=this.a,v=w.gdr().z,u=C.cD()
A.d.L(v,C.CL(w.gql().c.j(0.35).l(),0.12,u,D.CD,4280640491,2,0.2,0.15,0.55))
A.d.L(w.gdr().z,C.iW(A.bg,!1,4279310375,A.aD,18,A.bn,A.a5,0.15,C.cD(),"Important note",0,D.qe,0.5,0.38,0.52))},
$S:0}
C.eqQ.prototype={
$0(){var w=this.a
A.d.L(w.gdr().z,C.CL(4294507260,0.78,C.cD(),D.bf,4291548641,1.5,0.84,0.08,0.1))
A.d.L(w.gdr().z,C.iW(A.bg,!1,4279179050,A.aD,16,A.bn,A.a5,0.7,C.cD(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bCf()+"\n\nSubject:\n\nBody text\u2026",0,D.dd,0.76,0.12,0.14))},
$S:0}
C.eqR.prototype={
$0(){var w=this.a
A.d.L(w.gdr().z,C.CL(4294897802,0.28,C.cD(),D.bf,4294626325,2,0.3,0.62,0.12))
A.d.L(w.gdr().z,C.iW(A.bg,!1,4285611794,A.aD,15,A.bn,A.a5,0.24,C.cD(),"Sticky note",0,D.aFR,0.26,0.64,0.14))},
$S:0}
C.eqS.prototype={
$0(){var w=4280640491,v=this.a
A.d.L(v.gdr().z,C.CL(4293060848,0.04,C.cD(),D.bf,4291548641,2,0.8,0.1,0.48))
A.d.L(v.gdr().z,C.CL(w,0.04,C.cD(),D.bf,w,2,0.55,0.1,0.48))},
$S:0}
C.eqT.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdr().z,C.iW(A.bg,!1,w,A.aD,18,A.bn,A.a5,0.62,C.cD(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.HO,0.42,0.06,0.18))
A.d.L(v.gdr().z,C.iW(A.bg,!1,w,A.aD,18,A.bn,A.a5,0.62,C.cD(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.un,0.42,0.52,0.18))},
$S:0}
C.eqU.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdr().z,C.CL(858088427,0.62,C.cD(),D.bf,4280640491,2,0.42,0.05,0.18))
A.d.L(v.gdr().z,C.CL(856004201,0.62,C.cD(),D.bf,4278556265,2,0.42,0.53,0.18))
A.d.L(v.gdr().z,C.iW(A.bg,!1,w,A.aD,20,A.bn,A.H,0.1,C.cD(),"Option A",0,D.dd,0.36,0.08,0.2))
A.d.L(v.gdr().z,C.iW(A.bg,!1,w,A.aD,20,A.bn,A.H,0.1,C.cD(),"Option B",0,D.dd,0.36,0.56,0.2))},
$S:0}
C.eqW.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdr().z,C.CL(4294967295,0.36,C.cD(),D.bf,w,2,0.24,0.38,0.28))
A.d.L(v.gdr().z,C.iW(A.L,!1,w,A.aD,14,A.bn,A.a5,0.12,C.cD(),"[ QR CODE ]",0,D.dd,0.24,0.38,0.4))},
$S:0}
C.eqX.prototype={
$0(){return C.cdL(this.b,D.RJ,this.a.gql())},
$S:0}
C.esf.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a6w.t(0,d),t=this.a
return t.b72(d,v===d,A.aZ,this.c,new C.ese(t,u,d,w),u)},
$S:z+25}
C.ese.prototype={
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
C.bD2(r,new C.esd(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.esd.prototype={
$0(){return this.a.d3(new C.esc(this.b,this.c))},
$S:0}
C.esc.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eqA.prototype={
$0(){var w,v=this.a,u=v.gql(),t=C.rs(4294967295,null,0,0,null,C.cD(),D.mF,"","","",D.dd),s=this.b
C.cdL(t,s,u)
w=v.gdr()
if(w!=null&&s!==D.CC){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eri.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.i9J(p,q.d,s,new C.erh(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.tv(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.erh.prototype={
$1(d){return this.bjN(d)},
bjN(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.erg(t,d))
w=2
return B.b(t.tv(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.erg.prototype={
$0(){var w,v,u
for(w=J.aV(this.b),v=this.a;w.C();){u=w.gR(w)
A.d.ck(v.d,0,u)}},
$S:0}
C.erj.prototype={
$0(){return this.a.bHJ()},
$S:0}
C.erk.prototype={
$0(){return this.a.aPC("Class Presentation",!0)},
$S:0}
C.erl.prototype={
$1(d){return this.a.bIF(d.b,this.b,d.a)},
$S:z+88}
C.erW.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aI(w,A.bV,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eu6.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aI(d,A.eE,x.w).w.f.d),new B.e0(new C.eu5(this.a,this.b),null),null)},
$S:60}
C.eu5.prototype={
$2(d,e){return B.oO(new C.eu4(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:592}
C.eu4.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.az:A.c,s=B.I(u?A.bF:A.aL,A.q,1),r=B.p(v,v,A.f,v,v,new B.o(A.b2,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.v(B.a([A.S,r,new B.D(A.ahA,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b7,B.bK(!1,A.zG,v,v,!0,v,v,new C.eu2(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.E(B.cw(B.a([p.aSm(u,!0,!0,new C.eu3(p,w.d))],q),e,D.br_,v,v,A.ag,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kK,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:115}
C.eu2.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eu3.prototype={
$0(){this.b.$1(new C.eu0())
var w=this.a
if(w.c!=null)w.m(new C.eu1())},
$S:0}
C.eu0.prototype={
$0(){},
$S:0}
C.eu1.prototype={
$0(){},
$S:0}
C.evF.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:96}
C.evG.prototype={
$4(d,e,f,g){var w=A.ct.az(0,e.gp(0))
return B.dd(B.ed(A.A,new C.aym(this.a,null),0.94+w*0.06,null,null),w)},
$S:416}
C.evH.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:96}
C.evI.prototype={
$4(d,e,f,g){var w=A.ct.az(0,e.gp(0))
return B.dd(B.ed(A.A,new C.bck(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:416}
C.evJ.prototype={
$0(){return A.d.ck(this.a.d,0,C.VD(this.b))},
$S:0}
C.eqF.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.az(0,o)
o=B.n(22)
v=B.n(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.az.j(0.72)],t):B.a([A.c.j(0.88),A.py.j(0.75)],t)
r=B.I(A.b3.j(0.28+w*0.22),A.q,1.3)
q=w*0.2
t=B.a([A.b3.j(0.35+q),A.cf.j(0.18),A.K],t)
q=B.I(A.b3.j(0.45+q),A.q,1)
t=B.p(p,B.X(A_.a_u,u?A.ad:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bT(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bw(o,B.tX(A.fw,B.p(p,B.v(B.a([t,A.aB,q,A.am,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aA:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a8(A.ax,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.ex,p,p,1/0),14,!1),A.aq)},
$S:334}
C.erK.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.erL.prototype={
$1(d){return d.length!==0},
$S:3}
C.erM.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.jI
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a00:A.Bp}return w},
$S:678}
C.erP.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dC.az(0,A.k.E(j+m.b*0.12,1))
j=B.n(20)
v=m.c
u=B.n(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.az.j(0.78)],s):B.a([A.c.j(0.92),A.mU.j(0.82)],s)
r=m.e
q=A.d.gI(r)
p=t?0.34:0.26
p=B.I(q.j(p+w*0.22),A.q,1.25)
q=B.n(10)
q=B.p(l,B.X(C.kw(v.w)?A.vG:A.q1,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a8(A.a3,A.a8,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.PD(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.PD(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.PD(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.PD(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.PD(v.f)
r=k.bID(n,A.d.gI(r),t)
return B.p(l,B.bw(j,new B.a7A(B.aG(!1,A.a1,!0,l,B.aL(!1,l,!0,B.p(l,B.dL(!1,A.Mc,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.X(A.o4,t?A.aA:A.bJ,l,l,l,l),l,l,l,new C.erN(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a8(A.ax,A.aC,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.erO(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ah),l),A.aq),A.f,l,l,l,l,l,l,A.da,l,l,l,l)},
$S:92}
C.erO.prototype={
$0(){return this.a.aez(this.b)},
$S:0}
C.erN.prototype={
$0(){return this.a.AL(this.b,this.c)},
$S:0}
C.etf.prototype={
$0(){var w=this.a
w.b5H()
w.m(new C.ete())},
$S:0}
C.ete.prototype={
$0(){},
$S:0}
C.etg.prototype={
$1(d){return this.a.aiE(this.b.a,d)},
$S:2}
C.eth.prototype={
$0(){this.a.d3(new C.etd(this.b))},
$S:0}
C.etd.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.N)?A.cv:A.N},
$S:0}
C.eti.prototype={
$0(){this.a.d3(new C.etc(this.b))},
$S:0}
C.etc.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bn:A.cF},
$S:0}
C.etj.prototype={
$0(){this.a.d3(new C.etb(this.b))},
$S:0}
C.etb.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mL},
$S:0}
C.etk.prototype={
$0(){this.a.d3(new C.eta(this.b))},
$S:0}
C.eta.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.etl.prototype={
$0(){var w=this.a
w.d3(new C.et9(w,this.b))},
$S:0}
C.et9.prototype={
$0(){var w=this.b
return w.as=this.a.c2B(w.as)},
$S:0}
C.etm.prototype={
$0(){return this.a.d3(new C.et8(this.b))},
$S:0}
C.et8.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.etn.prototype={
$0(){return this.a.d3(new C.et7(this.b))},
$S:0}
C.et7.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.et0.prototype={
$0(){return this.a.a1K(this.b.a)},
$S:0}
C.et1.prototype={
$0(){this.a.a_h()
return null},
$S:0}
C.et2.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aI(v,A.bV,x.w).w.a.a<900)w.aeS()
else w.m(new C.et_(w))},
$S:0}
C.et_.prototype={
$0(){return this.a.as=!0},
$S:0}
C.et3.prototype={
$0(){this.a.d3(new C.esZ(this.b))},
$S:0}
C.esZ.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.N)?A.cv:A.N},
$S:0}
C.et4.prototype={
$0(){return this.a.d3(new C.esY(this.b))},
$S:0}
C.esY.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.et5.prototype={
$0(){return this.a.d3(new C.esX(this.b))},
$S:0}
C.esX.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.et6.prototype={
$0(){return this.a.az9(null)},
$S:0}
C.es8.prototype={
$0(){this.a.Du()
return null},
$S:0}
C.es9.prototype={
$0(){this.a.a9E()
return null},
$S:0}
C.esb.prototype={
$1(d){return this.bjO(d)},
bjO(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.JN(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bR(A.az,null,new C.es3(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d3(new C.es4(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d3(new C.es5(r))
s=s.c.J(x.q).f
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d3(new C.es6(r))
s=s.c.J(x.q).f
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.hoh(q,new C.El(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d3(new C.es7(r,p))
s=s.c.J(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.agA(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.U(B.b2(null,null,null,null,null,A.r,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:97}
C.es3.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.e8L],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bKE:r
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.es2(d,t),!1,r,r,r,r,r,r,r,new B.y(""+t+" seconds",r,A.dn,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bl(!0,B.v(q,A.m,r,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.es2.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.es4.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.es5.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.es6.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.es7.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.esa.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zz(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zz(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zz(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.agA(r?t:s.db)
s=s==null?t:s.b
return B.a([D.edP,q,v,u,B.zz(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:130}
C.ewq.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bCc(w,v)}},
$S:0}
C.ewr.prototype={
$0(){this.a.Du()
return null},
$S:0}
C.etq.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.n(999),q=s?D.bUV:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bK
if(s)v=A.c
else v=this.b?A.aS:A.bt
return new B.D(A.fA,B.aD(u,B.df(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.bc,new B.o(w,u,u,r,u,q,A.n),A.eG,u,u,u,A.lP,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.etp(t,d),u,u,u,u,u,u,!1,A.a7),u)},
$S:142}
C.etp.prototype={
$0(){var w=this.a
return w.m(new C.eto(w,this.b))},
$S:0}
C.eto.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.etr.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a2P:E.awn
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbM4():t.gbI3()
return B.hs(B.aD(u,B.p(u,D.ams,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gI(v).j(0.45),A.J,10)],x.V),new B.a8(A.a3,A.a8,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a7),u,s,u,u)},
$S:1704}
C.ets.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i8Z(v,w.a.c)},
$S:0}
C.euP.prototype={
$0(){return this.b.v7(this.a.a)},
$S:0}
C.euQ.prototype={
$0(){return this.a.v7(D.mF)},
$S:0}
C.euR.prototype={
$0(){return this.a.v7(D.HM)},
$S:0}
C.ev1.prototype={
$0(){return this.a.v7(D.HN)},
$S:0}
C.evc.prototype={
$0(){return this.a.v7(D.HL)},
$S:0}
C.evn.prototype={
$0(){return this.a.q6("lab_report")},
$S:0}
C.evu.prototype={
$0(){return this.a.q6("rubric")},
$S:0}
C.evv.prototype={
$0(){return this.a.q6("minutes")},
$S:0}
C.evw.prototype={
$0(){return this.a.q6("agenda")},
$S:0}
C.evx.prototype={
$0(){return this.a.q6("timeline")},
$S:0}
C.evy.prototype={
$0(){return this.a.q6(this.b.a)},
$S:0}
C.euS.prototype={
$0(){this.a.Vr()
return null},
$S:0}
C.euT.prototype={
$0(){this.a.Vl()
return null},
$S:0}
C.euU.prototype={
$0(){return this.a.q6("table")},
$S:0}
C.euV.prototype={
$0(){return this.a.q6("sticky")},
$S:0}
C.euW.prototype={
$0(){return this.a.q6("divider")},
$S:0}
C.euX.prototype={
$0(){return this.a.q6("header_bar")},
$S:0}
C.euY.prototype={
$0(){return this.a.p_(D.bf)},
$S:0}
C.euZ.prototype={
$0(){return this.a.p_(D.eL)},
$S:0}
C.ev_.prototype={
$0(){return this.a.p_(D.jN)},
$S:0}
C.ev0.prototype={
$0(){return this.a.p_(D.CD)},
$S:0}
C.ev2.prototype={
$0(){return this.a.p_(D.jO)},
$S:0}
C.ev3.prototype={
$0(){return this.a.p_(D.l4)},
$S:0}
C.ev4.prototype={
$0(){return this.a.p_(D.fs)},
$S:0}
C.ev5.prototype={
$0(){this.a.H9()
return null},
$S:0}
C.ev6.prototype={
$0(){this.a.N7()
return null},
$S:0}
C.ev7.prototype={
$0(){return this.a.q6("quote")},
$S:0}
C.ev8.prototype={
$0(){return this.a.a7N()},
$S:0}
C.ev9.prototype={
$0(){this.a.a_n()
return null},
$S:0}
C.eva.prototype={
$0(){var w=this.a
return w.m(new C.euF(w))},
$S:0}
C.euF.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.evb.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.o6(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.euN(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.euN.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.evd.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jQ()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a6x.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.b2
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.q,v?2.5:1),s,s,new B.a8(A.a3,A.a8,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a6x.t(0,q))u.push(B.ao(s,B.p(s,D.NU,A.f,s,s,D.DU,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fA,B.aD(s,B.hs(new B.an(A.W,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.euM(r,d),s,s,s,s,s,s,!1,A.a7),s)},
$S:z+89}
C.euM.prototype={
$0(){this.a.a84(this.b)
return null},
$S:0}
C.eve.prototype={
$0(){this.a.a83(this.b)
return null},
$S:0}
C.evf.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hFH(d),p=this.a,o=B.n(8),n=p.gdr()
n=n==null?r:n.x
w=d.a
n=n===w?A.bj:A.b2
v=p.gdr()
n=B.I(n,A.q,(v==null?r:v.x)===w?2.5:1)
u=B.n(8)
t=B.n(7)
s=C.rs(4294967295,r,0,0,r,"preview_"+w,D.qd,"","","",D.dd)
C.hle(s,w)
w=x.p
u=B.a([B.bw(o,B.p(r,B.bw(t,C.hmy(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.an0,A.f,r,r,D.DU,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iX,B.aD(r,B.v(B.a([new B.an(A.W,r,A.aa,A.r,u,r),A.cV,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aA:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.N,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.euL(p,q,d),r,r,r,r,r,r,!1,A.a7),r)},
$S:z+90}
C.euL.prototype={
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
return B.b(s.o6(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.d3(new C.euB(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.euB.prototype={
$0(){return C.hle(this.a,this.b.a)},
$S:0}
C.euO.prototype={
bjP(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a6w.t(0,d)
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
$2(d,e){return this.bjP(d,e)},
$S:z+91}
C.evz.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("M<1,r>")
v=B.C(new B.M(d,new C.evB(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.c9(B.B(v,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO)},
$S:z+92}
C.evB.prototype={
$1(d){var w=this
return w.a.b72(d,w.b===d,w.c,w.d,new C.evA(w.e,d),!D.a6w.t(0,d))},
$S:z+25}
C.evA.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.evg.prototype={
$1(d){this.b.$2(d,new C.euK(this.a,d,this.c))
return null},
$S:z+26}
C.euK.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bD2(u,new C.euA(v,this.c,w),w)},
$S:0}
C.euA.prototype={
$0(){return this.a.d3(new C.euy(this.b,this.c))},
$S:0}
C.euy.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.evh.prototype={
$1(d){this.b.$2(d,new C.euJ(this.a,d))
return null},
$S:z+26}
C.euJ.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fP6(u,new C.euz(v,w),w)},
$S:0}
C.euz.prototype={
$0(){var w=this.a
return w.d3(new C.eux(w,this.b))},
$S:0}
C.eux.prototype={
$0(){return this.a.gdr().r=this.b},
$S:0}
C.evi.prototype={
$0(){var w=this.a
return w.m(new C.euI(w))},
$S:0}
C.euI.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.evj.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bCc(w,v)}},
$S:0}
C.evk.prototype={
$0(){this.a.HV()
return null},
$S:0}
C.evl.prototype={
$0(){return this.a.a7N()},
$S:0}
C.evm.prototype={
$0(){var w=this.a,v=w.jQ()
if(v!=null&&v.b===D.cQ)w.d3(new C.euH(v))},
$S:0}
C.euH.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.evo.prototype={
$0(){this.a.Du()
return null},
$S:0}
C.evp.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.F8(v,!0)
return null},
$S:0}
C.evq.prototype={
$0(){this.a.d3(new C.euG(this.b))},
$S:0}
C.euG.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.N)?A.cv:A.N},
$S:0}
C.evr.prototype={
$0(){this.a.d3(new C.euE(this.b))},
$S:0}
C.euE.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bn:A.cF},
$S:0}
C.evs.prototype={
$0(){this.a.d3(new C.euD(this.b))},
$S:0}
C.euD.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mL},
$S:0}
C.evt.prototype={
$0(){this.a.d3(new C.euC(this.b))},
$S:0}
C.euC.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.erd.prototype={
$1(d){return this.bjM(d)},
bjM(d){var w=0,v=B.j(x.H),u,t=this,s,r
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
break}s.d3(new C.erc(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:186}
C.erc.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.evW.prototype={
$0(){var w=this.a
return w.d3(new C.evV(w,this.b))},
$S:0}
C.evV.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.evX.prototype={
$0(){var w=this.a
return w.d3(new C.evU(w,this.b))},
$S:0}
C.evU.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.esl.prototype={
$0(){return this.a.d3(new C.esk(this.b))},
$S:0}
C.esk.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.esm.prototype={
$0(){return this.a.d3(new C.esj(this.b))},
$S:0}
C.esj.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.esT.prototype={
$1(d){var w=x.gh
w=B.C(new B.M(D.aoJ,new C.esS(),w),w.k("ak.E"))
return w},
$S:z+94}
C.esS.prototype={
$1(d){var w=null
return B.zz(B.d(d.b,w,w,w,w,w,w,A.m7,w,w,w),48,d,x.fO)},
$S:z+95}
C.ew8.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a7(v,w?8:0,null,null)},
$S:36}
C.ew7.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.ke()?q:new C.ew5(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.n(8)
if(o)v=A.bj
else v=r.d?A.b2:A.cr
v=B.I(v,A.q,o?2:1)
u=r.d?A.cx:A.c
t=B.bZ(0,C.hmy(r.b.r[e]),0,0,0)
s=B.n(4)
return B.aD(q,B.p(q,new B.an(A.W,q,A.aa,A.r,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nu,q,q,q),A.f,q,q,new B.o(A.aW,q,q,s,q,q,A.n),q,q,q,q,A.aiu,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ew6(p,e),q,q,q,q,q,q,!1,A.a7)},
$S:76}
C.ew6.prototype={
$0(){var w=this.a
return w.m(new C.ew1(w,this.b))},
$S:0}
C.ew1.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.JW()},
$S:0}
C.ew5.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bR(null,null,new C.ew2(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.ew3(q,s))
q.aR4()}else if(r==="del"){q=t.a
q.m(new C.ew4(q,s))
q.aQd()}else if(r==="up")t.a.b2h(s,s-1)
else if(r==="down")t.a.b2h(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ew2.prototype={
$1(d){var w=null,v=B.a([B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bMi,w,w,w,w,new C.evY(d),!1,w,w,w,w,w,w,w,D.ffv,w,w,w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bMb,w,w,w,w,new C.evZ(d),!1,w,w,w,w,w,w,w,A.wr,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bLt,w,w,w,w,new C.ew_(d),!1,w,w,w,w,w,w,w,D.fnw,w,w,w))
if(u<this.b.r.length-1)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bNv,w,w,w,w,new C.ew0(d),!1,w,w,w,w,w,w,w,D.ffk,w,w,w))
return B.bl(!0,B.v(v,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.evY.prototype={
$0(){B.a6(this.a,!1).O("dup")
return null},
$S:0}
C.evZ.prototype={
$0(){B.a6(this.a,!1).O("del")
return null},
$S:0}
C.ew_.prototype={
$0(){B.a6(this.a,!1).O("up")
return null},
$S:0}
C.ew0.prototype={
$0(){B.a6(this.a,!1).O("down")
return null},
$S:0}
C.ew3.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ew4.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ew9.prototype={
$0(){return this.a.a7N()},
$S:0}
C.erD.prototype={
$0(){var w=this.a
w.b5H()
w.az9(null)},
$S:0}
C.erC.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.n(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dm,24)],x.V),m=this.b
if(m.f!=null){w=B.b0(m.e)
v=m.f
v.toString
v=new B.a8(A.ax,A.aC,A.x,B.a([w,B.b0(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b0(m.e):p
u=m.x
t=m.y
s=B.n(4)
if(m.f!=null){r=B.b0(m.e)
q=m.f
q.toString
q=new B.a8(A.ax,A.aC,A.x,B.a([r,B.b0(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bw(s,B.c0(A.kD,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.be),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.M(r,new C.erB(this.a,e.b,e.d,q),B.U(r).k("M<1,r>")))
if(m.z.length===0)s.push(B.av(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aA:A.bJ,p,p,p,p,p,p,p,p,p,p,p,A.a5,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c0(new B.an(A.W,p,A.aa,A.f,s,new B.cy("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.be)},
$S:398}
C.erB.prototype={
$1(d){var w=this
return w.a.bDZ(d,w.b,w.c,w.d)},
$S:z+23}
C.erq.prototype={
$0(){var w=this
if(w.b){w.a.Ng(w.c)
return}if(w.d){w.a.a7L(w.c)
return}if(w.e){w.a.agb(w.c)
return}if(w.f)w.a.b6c(w.c)},
$S:0}
C.err.prototype={
$0(){this.a.Ng(this.b)
return null},
$S:0}
C.ers.prototype={
$0(){return this.a.a1K(this.b.a)},
$S:0}
C.ert.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.erp(u,d,w.c,w.d))
v.HA()
v.of()
v.pj()},
$S:18}
C.erp.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eru.prototype={
$1(d){return this.a.aiE(this.b.a,d)},
$S:2}
C.erw.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.h01(w))u.a.Ng(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b6c(v)},
$S:0}
C.erv.prototype={
$0(){return this.a.a1K(this.b.a)},
$S:0}
C.erx.prototype={
$1(d){var w=this,v=w.a
v.m(new C.ero(w.b,d,w.c,w.d))
v.HA()
v.of()
v.pj()},
$S:18}
C.ero.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cQ)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.ery.prototype={
$1(d){var w=this.a
w.m(new C.ern(this.b,d))
w.HA()
w.of()
w.pj()},
$S:217}
C.ern.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cQ)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.erz.prototype={
$0(){var w=this.a
w.m(new C.erm(this.b))
w.HA()
w.of()
w.pj()},
$S:0}
C.erm.prototype={
$0(){this.a.r=C.hm3()},
$S:0}
C.erA.prototype={
$0(){return this.a.a1K(this.b.a)},
$S:0}
C.etu.prototype={
$0(){var w=this.a
return w.m(new C.ett(w))},
$S:0}
C.ett.prototype={
$0(){return this.a.y=!1},
$S:0}
C.etv.prototype={
$1(d){return this.a.cBu(this.b.a,d)},
$S:2}
C.esz.prototype={
$1(d){var w
this.a.d3(d)
w=this.b
if(w!=null)w.$0()},
$S:159}
C.esA.prototype={
$1(d){return this.a.$1(new C.esy(this.b,d))},
$S:6}
C.esy.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.esB.prototype={
$1(d){return this.a.$1(new C.esx(this.b,d))},
$S:6}
C.esx.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.esC.prototype={
$1(d){return this.a.$1(new C.esw(this.b,d))},
$S:6}
C.esw.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.esD.prototype={
$1(d){return this.a.$1(new C.esv(this.b,d))},
$S:6}
C.esv.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.esE.prototype={
$1(d){return this.a.$1(new C.esu(this.b,d))},
$S:6}
C.esu.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.esF.prototype={
$1(d){return this.b.$1(new C.est(this.a,this.c))},
$S:8}
C.est.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.esG.prototype={
$1(d){return this.b.$1(new C.ess(this.a,this.c))},
$S:8}
C.ess.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.esH.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bj:A.cU
return B.aD(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.q,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.esr(this.a,v,d),w,w,w,w,w,w,!1,A.a7)},
$S:401}
C.esr.prototype={
$0(){return this.a.$1(new C.eso(this.b,this.c))},
$S:0}
C.eso.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.esI.prototype={
$1(d){return this.a.$1(new C.esq(this.b,d))},
$S:1705}
C.esq.prototype={
$0(){var w=this.b
return this.a.as=w.gI(w)},
$S:0}
C.esJ.prototype={
$1(d){var w=null
return B.aD(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.esp(this.a,this.b,d),w,w,w,w,w,w,!1,A.a7)},
$S:401}
C.esp.prototype={
$0(){return this.a.$1(new C.esn(this.b,this.c))},
$S:0}
C.esn.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.esK.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a6(w,!1).py()}else w=!1
if(w){w=v.a.c
w.toString
B.a6(w,!1).eN()}v.a.arM()},
$S:0}
C.esN.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dC.az(0,m)
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
r.push(B.ao(2,B.p(n,B.X(A.u6,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.ne,n,n,n),n,n,n,2,n,n))
return B.aG(!1,A.a1,!0,n,B.aL(!1,m,!0,B.eF(new B.a7(48,48,new B.an(A.A,n,A.aa,A.r,r,n),n),n,new B.o(n,n,s,v,n,new B.a8(A.ax,A.aC,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ah)},
$S:143}
C.eqm.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.az(0,o)
o=B.n(22)
v=B.n(22)
u=q.c
t=B.aq(u,A.b3,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.I(A.c.j(0.28+w*0.22),A.q,1.35)
s=A.c.j(0.14+w*0.08)
r=B.I(A.c.j(0.4+w*0.15),A.q,1)
return B.aG(!1,A.a1,!0,p,B.aL(!1,o,!0,B.eF(B.v(B.a([B.ed(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ac,B.d(q.e,p,p,p,p,p,p,A.j5,A.L,p,p)],x.p),A.m,p,A.b8,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a8(A.ax,A.aC,A.x,u,p,p),A.n),p,A.Ff,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ah)},
$S:143}
C.eur.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.T,!0,w,!0,A.r,w,B.aN(),u,w,w,w,w,w,2,A.anS,A.y,!0,w,!0,w,!1,w,A.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a4,w,A.an,w,w,w,w)
return B.ek(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.eup(d),w,w),B.bG(A.pj,new C.euq(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:19}
C.eup.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.euq.prototype={
$0(){var w=this.b.a.a
B.a6(this.a,!1).O(w)
return null},
$S:0}
C.d02.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dC.az(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.ew.az(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dV.az(0,i)
v=B.n(22)
t=B.aq(A.aK,A.d.gI(C.kw(j.a.c.w)?D.ug:N.nm),w*0.35)
t.toString
t=B.I(t,A.q,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gI(C.kw(j.a.c.w)?D.ug:N.nm).j(0.18+w*0.12),A.J,32+w*10),D.aaZ],s)
q=B.n(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bT(A.b_,0.9,A.x,k,0,B.a([A.d.gI(C.kw(j.a.c.w)?D.ug:N.nm).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gI(C.kw(j.a.c.w)?D.ug:N.nm).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bT(A.A,0.5,A.x,k,0,B.a([m,A.d.gal(C.kw(j.a.c.w)?D.ug:N.nm).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.n(14)
m=j.a.c.w
l=C.kw(m)?D.ug:N.nm
s=B.a([new B.ac(0,A.G,A.d.gI(C.kw(m)?D.ug:N.nm).j(0.45+w*0.2),A.cy,18)],s)
m=x.p
l=B.a([p,B.ed(A.A,B.p(k,B.X(C.kw(j.a.c.w)?A.vG:A.q1,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a8(A.ax,A.aC,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.r,l,k),A.S,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kw(j.a.c.w)?D.ug:N.nm).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.h0,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.f7L,A.L,k,k),A.at,B.d(j.gcwv(),k,k,k,k,k,k,D.fcf,A.L,k,k),A.aB],m)
p=j.a.c
if(p.z){p=p.gS0()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kw(j.a.c.w)?D.ug:N.nm).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.N,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.Jy(A.y2,"Download PDF","pdf",A.d3,j.IP(0),!1,k))
p=j.a.c
if(!p.z||p.gS0()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.am,new C.Jy(A.ku,"Transfer to "+C.hm5(p==null?"":p),"transfer_hati",A.aV,j.IP(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.IP(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.am,new C.Jy(D.bDT,"Rename presentation","rename",A.cf,n,!1,k),A.am,new C.Jy(A.ak8,"Duplicate","duplicate",A.b6,j.IP(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.O)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.Jy(A.e6,"Delete presentation","delete",A.ay,j.IP(p),!0,k))
s.push(A.at)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.IP(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.IP(n)
s.push(B.dU(B.dd(B.bK(!1,E.aQV,k,k,!0,k,k,new C.d01(d),k,B.fx(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,A.au,k,D.bu3,k,k,k,k,k,A.k8,k,k)),n),new B.u(0,(1-p)*8)))
return B.ed(A.A,B.dd(B.aG(!1,A.a1,!0,k,B.p(k,B.bw(q,new B.an(A.W,k,A.aa,A.r,B.a([o,new B.D(D.btd,B.v(s,A.m,k,A.e,A.Q,0,A.p),k)],m),k),A.aq),A.f,k,A.Vm,new B.o(A.az,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ah),i),0.88+u*0.12,k,k)},
$S:46}
C.d01.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.d0o.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d0p.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d0_.prototype={
$1(d){var w=this.a
return w.m(new C.d_W(w))},
$S:22}
C.d_W.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d00.prototype={
$1(d){var w=this.a
return w.m(new C.d_V(w))},
$S:49}
C.d_V.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d_Z.prototype={
$0(){var w=this.a
return w.m(new C.d_X(w))},
$S:0}
C.d_X.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d_Y.prototype={
$0(){var w=this.a.a.e
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.ex6.prototype={
$0(){return $.bjS=!$.bjS},
$S:0}
C.ewX.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaUf())u.avE()},
$S:0}
C.ex5.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ewY.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ewZ.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.avE()},
$S:0}
C.ewT.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gI(w.a.c.r).r
w.d=0},
$S:0}
C.ewU.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.ewV.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ewW.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.E(w-1+v,v)},
$S:0}
C.ex3.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b0,A.r,w,null)},
$S:1706}
C.ex4.prototype={
$2(d,e){var w
if(e.gc3(e)===A.hW)return new B.cZ(e,!1,d,null)
w=this.a
return w.cut(w.e,d,e)},
$S:470}
C.ex_.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fB((1-v.gp(0))*1.5708)
return B.ft(A.A,B.dd(e,v.gp(0)),null,w,!0)},
$S:46}
C.ex0.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.k_((1-v.gp(0))*1.5708)
return B.ft(A.A,B.dd(e,v.gp(0)),null,w,!0)},
$S:46}
C.ex1.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fB(v.gp(0)*0.8)
w.k_(v.gp(0)*0.35)
return B.ft(A.A,B.dd(e,v.gp(0)),null,w,!0)},
$S:46}
C.ex2.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fB(-v.gp(0)*1.2)
return B.ft(A.a8,B.dd(e,v.gp(0)),null,w,!0)},
$S:46}
C.ex7.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gYw().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gYw().x
t===$&&B.c()
return new C.b0z(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.Iw(v.c,t,!0,new B.cy("cine"+u,x.W))},
$S:658}
C.ex9.prototype={
$1(d){var w=this.a
if(d.b.a>B.aI(this.b,A.bV,x.w).w.a.a*0.55)w.avE()
else w.ciU()},
$S:49}
C.ex8.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fFv.prototype={
$4(d,e,f,g){var w=this.b
A.d.a9(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:465}
C.fFE.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ek(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.fFB(d),w,w),B.bK(!1,D.fuK,w,w,!0,w,w,new C.fFC(d,this.b,v),w,w),B.bG(A.aRc,new C.fFD(d,v,this.c),w)],x.p),w,w,M.tp,new B.a7(320,w,t,w),w,w,w,w,D.fwb,w)},
$S:19}
C.fFB.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fFC.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
C.h0G(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fFD.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aPt(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aOT(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fFu.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cdO.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:537}
C.fFA.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fd9.prototype={
$1(d){return C.h0E(C.VD(B.a2(d,x.N,x.z)),this.a)},
$S:z+96}
C.fOm.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:96}
C.fOn.prototype={
$4(d,e,f,g){var w=A.ct.az(0,e.gp(0))
return B.dd(B.ed(A.A,D.fYg,0.94+w*0.06,null,null),w)},
$S:416}
C.fOo.prototype={
$1(d){var w=this
return new C.VF(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.ewD.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.ewz.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.ewC.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.VG(u,this.b,w.gaNy(),v,null)},
$S:z+99}
C.ewA.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ewB.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ewE.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ewF.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ewI.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.ewJ.prototype={
$0(){var w=this.a
return w.m(new C.ewH(w))},
$S:0}
C.ewH.prototype={
$0(){return this.a.d="one"},
$S:0}
C.ewK.prototype={
$0(){var w=this.a
return w.m(new C.ewG(w))},
$S:0}
C.ewG.prototype={
$0(){return this.a.d="all"},
$S:0}
C.ewL.prototype={
$1(d){return this.a.bIE(d,this.b)},
$S:z+100}
C.ewy.prototype={
$0(){var w=this.a
return w.m(new C.ewx(w,this.b))},
$S:0}
C.ewx.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.ewM.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.ewN.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.ewO.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.ewP.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.ewQ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fK(new B.fD(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.J(x.q).f.U(D.eVb)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eqg.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eqf())},
$S:0}
C.eqf.prototype={
$0(){},
$S:0}
C.eqh.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fL()},
$S:9}
C.eqc.prototype={
$1(d){return this.a.m(new C.eqb())},
$S:2}
C.eqb.prototype={
$0(){},
$S:0}
C.eqd.prototype={
$1(d){return this.a.aZ7()},
$S:2}
C.eqe.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.ewS.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.pX(),$async$$0)
case 2:if(t.c!=null)t.m(new C.ewR(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.ewR.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fzP.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.ev(new B.ki(this.c,new C.fzO(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:233}
C.fzO.prototype={
$3(d,e,f){return new C.Iw(e,!1,!1,new B.cy(e.a,x.W))},
$S:z+102}
C.fzQ.prototype={
$1(d){var w=null
return B.ok(!1,B.av(new C.bun(this.a,this.b,w),w,w,w),w,x.z)},
$S:322}
C.fzU.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aW.gmD(),$async$$0)
case 3:w=4
return B.b(B.bN(A.na,null,x.H),$async$$0)
case 4:w=5
return B.b($.aW.gmD(),$async$$0)
case 5:s=$.aW.ak$.x.h(0,t.a)
r=s==null?null:s.gb8()
if(!(r instanceof B.pV))throw B.V("Could not draw the slide.")
u=r.m_(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1709}
C.fzV.prototype={
bkk(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.ht(A.fY),$async$$1)
case 3:r=f
if(r==null)throw B.V("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hO([J.eT(A.dD.gaM(r))],"image/png"))
t.toString
s=Am.fSw(t)
w=4
return B.b(new B.q0(s,"load",!1,x.ev).gI(0).cO(0,A.jC),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bkk(d)},
$S:1710}
C.fzR.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:149}
C.fzS.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fR(0)},
$S:149}
C.fzT.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.f7s.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.f4h,A.L,w,w)},
$S:1711}
C.f7t.prototype={
$3(d,e,f){var w=null,v=B.n(99)
return B.bw(v,B.m4(A.bo,w,A.dQ,8,w,e===0?w:e,w),A.aq)},
$S:566}
C.eeq.prototype={
$1(d){this.a.ZJ()
return null},
$S:12}
C.eeo.prototype={
$0(){return this.a.e=D.bph},
$S:0}
C.eep.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bx
return this.b.e=w},
$S:0}
C.cgm.prototype={
$1(d){return A.o.dv(1,d.a)},
$S:z+103}
C.cgn.prototype={
$2(d,e){return(d|e)>>>0},
$S:73};(function aliases(){var w=C.aLq.prototype
w.buV=w.q
w=C.aKU.prototype
w.bun=w.q
w=C.aKF.prototype
w.bu7=w.q
w=C.aKT.prototype
w.bum=w.q
w=C.aLo.prototype
w.buT=w.q
w=C.aML.prototype
w.bwq=w.q
w=C.aJA.prototype
w.bt_=w.q
w=C.aLC.prototype
w.bv6=w.q
w=C.aLD.prototype
w.bv7=w.q
w=C.b2e.prototype
w.bpE=w.aCj})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"i6N","ana",104)
v(C.aIz.prototype,"gc2X","YD",0)
var r
u(r=C.ax9.prototype,"gcvR","cvS",38)
v(r,"gc3I","acT",0)
v(r=C.ax5.prototype,"gaXG","DX",3)
v(r,"gc3F","c3G",3)
v(r,"gavW","xE",0)
v(r,"gavX","It",0)
t(C,"i7d","hDr",105)
v(C.aDd.prototype,"gc6o","c6p",3)
s(C,"i7o",0,null,["$4$paper$photo$request$template"],["fGU"],106,0)
s(C,"i7n",0,null,["$5$doc$history$instruction$photo$template"],["bBv"],107,0)
v(r=C.aDw.prototype,"gc75","IM",0)
v(r,"gbI6","Wu",0)
v(r,"gc78","adI",0)
v(r,"gc77","Zv",0)
v(r,"gaYN","Ee",0)
v(C.aDA.prototype,"gc7d","Zx",0)
v(r=C.aEX.prototype,"gaZ_","Pz",0)
v(r,"gcnL","b2n",3)
v(r,"gcxf","aAs",86)
v(r,"gbLV","a9I",0)
v(r,"gc7E","Ao",0)
v(r=C.aGS.prototype,"gchD","a_S",0)
v(r,"gchL","a_V",0)
v(r,"gbB0","a8a",0)
v(r,"gc7I","adU",0)
v(C.aGR.prototype,"gc7J","adV",0)
v(C.aAS.prototype,"gbA_","a7Y",0)
v(C.azf.prototype,"gc7K","ZI",0)
w(C,"i7B","i5u",12)
w(C,"i7z","i2r",12)
w(C,"i7A","i4u",12)
v(r=C.aDQ.prototype,"gcAp","cAq",3)
v(r,"gcm_","cm0",3)
u(r,"gEk","aez",7)
v(r,"gbFJ","aqW",3)
u(r,"gEl","b_g",7)
v(r,"gc9T","aeg",0)
v(r,"gc8K","aef",0)
v(r,"gcc2","aeA",0)
v(r,"gbI3","a9j",0)
v(r,"gccW","a_h",0)
v(r,"gccX","aeR",0)
v(r,"gcdt","aeY",0)
v(r,"gccf","aeD",0)
v(r,"gbM4","a9M",0)
v(r,"gaR3","aR4",3)
v(r,"gaQc","aQd",3)
v(r,"gaLT","aLU",3)
v(r,"gaQb","arM",3)
u(r,"gbAg","bAh",80)
v(r,"gazZ","b5r",3)
v(r,"gc8M","c8N",3)
v(r,"gbX9","bXa",3)
v(r,"gbKw","bKx",3)
v(r=C.aDT.prototype,"gczg","czh",3)
v(r,"gcyW","cyX",3)
t(C,"i7C","i5L",2)
v(r=C.aDR.prototype,"gc7Q","IR",0)
v(r,"gcpL","R_",0)
v(r,"gc7N","IQ",0)
v(r,"gcBF","a2n",0)
v(r,"gcdF","af4",0)
v(C.aDP.prototype,"gc7R","aZ7",3)
v(r=C.aDS.prototype,"gbMQ","a9W",0)
u(r,"gc7O","c7P",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aC,[C.nS,C.Ru,C.bH3,C.bFq,C.cwu,C.cws,C.bNk,C.b8_,C.cwt,C.bE0,C.cgg,C.cge,C.cgf,C.cgd,C.ask,C.cgc,C.bOd,C.oi,C.aEr,C.jo,C.nF,C.a7z,C.zl,C.le,C.ou,C.m6,C.zn,C.nJ,C.a7H,C.aqI,C.b0A,C.edQ,C.lb,C.Eu,C.eu,C.j_,C.El,C.xu,C.eK,C.lG,C.i0,C.jG,C.a7I,C.aeQ,C.b0B,C.b2e,C.a2v])
u(B.kk,[C.cEk,C.bYV,C.fv1,C.cFQ,C.cFc,C.fAx,C.dXX,C.dXW,C.eet,C.ees,C.fBW,C.feh,C.fei,C.cca,C.ccb,C.ccc,C.eiR,C.eRF,C.eR2,C.eR1,C.eS5,C.eRD,C.eRw,C.eRP,C.eSv,C.flJ,C.eYE,C.eYD,C.eZ6,C.edT,C.fFr,C.dTG,C.fLV,C.fCi,C.cdG,C.cdE,C.cdJ,C.fCN,C.fCO,C.fCP,C.fCQ,C.cdq,C.cdr,C.dFW,C.cdn,C.fCM,C.f50,C.dRS,C.cdg,C.edz,C.fAm,C.etR,C.euf,C.euc,C.eub,C.eum,C.eul,C.evR,C.evQ,C.eu5,C.eu4,C.eqF,C.erP,C.euO,C.ew8,C.ew7,C.erC,C.esN,C.eqm,C.d02,C.ex3,C.ex4,C.ex_,C.ex0,C.ex1,C.ex2,C.ex7,C.cdO,C.ewD,C.ewO,C.cgn])
u(B.hV,[C.cEl,C.cEm,C.bOe,C.fsq,C.bYU,C.bYX,C.fIp,C.f5Z,C.f5Q,C.f65,C.fda,C.fdb,C.fv2,C.fv0,C.fHU,C.fs6,C.fIL,C.cFG,C.cFL,C.cFN,C.cFJ,C.cFO,C.cFH,C.cFP,C.cFC,C.cFz,C.cFy,C.cFF,C.cF7,C.cF5,C.fzz,C.fzA,C.fhA,C.fAy,C.fAE,C.fgD,C.c8t,C.fzx,C.fzy,C.fuo,C.fup,C.fAD,C.fAz,C.fAB,C.fAC,C.fAA,C.fMc,C.fus,C.fut,C.fuw,C.fux,C.fuA,C.fuB,C.fNF,C.feJ,C.fNQ,C.ehL,C.ehM,C.ehN,C.eht,C.ehF,C.ehG,C.ehI,C.cc9,C.cc7,C.cc8,C.fAd,C.fAf,C.fAe,C.fej,C.fek,C.fNT,C.eiW,C.eiX,C.eiO,C.eiP,C.eiS,C.eiT,C.fO8,C.eSw,C.eRW,C.eRG,C.eRT,C.eQY,C.eQZ,C.eR_,C.eR3,C.eR4,C.eSl,C.eSs,C.eSu,C.eS4,C.eS6,C.eSa,C.eSb,C.eSc,C.eSg,C.eS7,C.eS8,C.eRf,C.eRg,C.eRh,C.eRi,C.eRj,C.eRk,C.eRl,C.eRm,C.eRn,C.eQB,C.eQC,C.eQD,C.eQE,C.eQG,C.eQH,C.eR9,C.eRa,C.eRb,C.eRc,C.eRd,C.eQL,C.eQM,C.eQN,C.eQO,C.eRv,C.eRO,C.fxC,C.fxB,C.cdx,C.flI,C.fFn,C.fFg,C.fFj,C.fDg,C.fDh,C.fDi,C.fxJ,C.fxI,C.fxH,C.fxF,C.fee,C.fef,C.feg,C.fOk,C.eYG,C.eYH,C.eYA,C.eYu,C.eZ_,C.eZ0,C.eZ2,C.eZ3,C.eYZ,C.fOj,C.eYl,C.fkY,C.edS,C.fFp,C.fFq,C.fFs,C.fFl,C.fFm,C.fNx,C.dij,C.dip,C.edR,C.faI,C.faK,C.faJ,C.faH,C.fyN,C.fyP,C.fcI,C.fES,C.fET,C.fEU,C.fF4,C.fF9,C.fFa,C.fFb,C.fFc,C.fFd,C.fFe,C.fFf,C.fEV,C.fEW,C.fEX,C.fEY,C.fEZ,C.fF_,C.fF0,C.fF1,C.fF2,C.fF3,C.fF5,C.fF6,C.fF7,C.fF8,C.fwD,C.fkw,C.fkv,C.fFy,C.dTH,C.dTF,C.eXv,C.c84,C.c86,C.fLX,C.d7C,C.d7E,C.fLW,C.fLU,C.fOi,C.fCe,C.d7c,C.fuE,C.fuF,C.cdv,C.cdw,C.cdu,C.cdk,C.cdl,C.cdh,C.cdi,C.cdj,C.cdM,C.cdH,C.cdC,C.cdD,C.cdF,C.cdI,C.cdK,C.fCR,C.cdp,C.cds,C.cdt,C.cdz,C.cdA,C.fFF,C.fEM,C.cdo,C.cdm,C.fCL,C.fn3,C.cdf,C.eV8,C.fpX,C.ewu,C.esU,C.esV,C.euu,C.eui,C.euj,C.esh,C.ewf,C.ewg,C.ewh,C.erG,C.etY,C.eu_,C.etA,C.etx,C.esQ,C.esR,C.etH,C.erI,C.etT,C.etU,C.etS,C.etW,C.etV,C.eud,C.eue,C.eug,C.eu9,C.es0,C.erY,C.eun,C.erQ,C.ewe,C.eqo,C.erT,C.erS,C.er6,C.erb,C.er9,C.er7,C.ewm,C.ewn,C.ewo,C.ewl,C.evT,C.evS,C.evM,C.evO,C.evE,C.ewc,C.ewa,C.eqw,C.eqs,C.esO,C.erf,C.eqH,C.eqG,C.er2,C.er3,C.esf,C.erh,C.erl,C.eu6,C.evF,C.evG,C.evH,C.evI,C.erK,C.erL,C.erM,C.etg,C.esb,C.es3,C.esa,C.etq,C.etr,C.evd,C.evf,C.evz,C.evB,C.evg,C.evh,C.erd,C.esT,C.esS,C.ew2,C.erB,C.ert,C.eru,C.erx,C.ery,C.etv,C.esz,C.esA,C.esB,C.esC,C.esD,C.esE,C.esF,C.esG,C.esH,C.esI,C.esJ,C.eur,C.d0_,C.d00,C.ex9,C.fFv,C.fFE,C.fFu,C.fFA,C.fd9,C.fOm,C.fOn,C.fOo,C.ewC,C.ewL,C.eqh,C.eqc,C.eqd,C.fzP,C.fzO,C.fzQ,C.fzV,C.fzR,C.fzS,C.f7s,C.f7t,C.eeq,C.cgm])
u(B.j9,[C.cEn,C.f5V,C.f6_,C.f60,C.f5W,C.f5X,C.f5Y,C.f5O,C.f5P,C.f5R,C.f5S,C.f64,C.f63,C.f5U,C.f5T,C.f61,C.f62,C.f67,C.f68,C.f66,C.cFI,C.cFM,C.cFK,C.cFA,C.cFB,C.cFD,C.cFw,C.cFx,C.cFE,C.cFv,C.cFu,C.cFt,C.cEX,C.cEW,C.cEZ,C.cF6,C.cF_,C.cEY,C.cF1,C.cF2,C.cF3,C.cF0,C.cF4,C.cF8,C.cF9,C.cFa,C.cFb,C.fum,C.fun,C.fuk,C.ful,C.e9e,C.e9c,C.e9d,C.e9f,C.e9g,C.dXV,C.fuq,C.fur,C.fuu,C.fuv,C.fuy,C.fuz,C.eer,C.fCl,C.fCk,C.ehK,C.ehJ,C.ehn,C.ehj,C.ehu,C.ehv,C.ehw,C.ehp,C.ehq,C.ehr,C.ehs,C.eho,C.ehl,C.ehm,C.ehC,C.ehD,C.ehB,C.ehE,C.ehA,C.ehz,C.ehy,C.ehH,C.ehx,C.ehk,C.eiV,C.eiJ,C.eiK,C.eiQ,C.eiL,C.eiN,C.eiM,C.eiU,C.eRo,C.eRM,C.eR7,C.eR8,C.eR5,C.eR6,C.eRS,C.eRR,C.eRQ,C.eRV,C.eRU,C.eQX,C.eR0,C.eQW,C.eQV,C.eQS,C.eQU,C.eQT,C.eSt,C.eSm,C.eSk,C.eSn,C.eSj,C.eSo,C.eSi,C.eSp,C.eSq,C.eSr,C.eSh,C.eS3,C.eRZ,C.eS9,C.eS2,C.eSd,C.eS1,C.eSe,C.eS0,C.eSf,C.eS_,C.eRJ,C.eRI,C.eRK,C.eRH,C.eRL,C.eRB,C.eRA,C.eRC,C.eRz,C.eRy,C.eRx,C.eQF,C.eQA,C.eQP,C.eQK,C.eQQ,C.eQJ,C.eQR,C.eQI,C.eRE,C.eRs,C.eRr,C.eRt,C.eRq,C.eRu,C.eRp,C.eRN,C.eRY,C.eRX,C.eRe,C.fFi,C.fFk,C.fFo,C.fxG,C.fA6,C.fA4,C.fA5,C.eYI,C.eYJ,C.eYF,C.eYz,C.eYy,C.eYB,C.eYC,C.eYo,C.eYp,C.eYr,C.eYs,C.eYt,C.eYq,C.eYv,C.eYW,C.eYX,C.eYV,C.eYY,C.eYU,C.eYT,C.eYS,C.eZ1,C.eYR,C.eYQ,C.eYP,C.eZ4,C.eYO,C.eZ5,C.eYN,C.eYM,C.eYw,C.eYx,C.eYL,C.eYK,C.eYh,C.eYi,C.eYj,C.eYk,C.eYg,C.eYm,C.eYn,C.dii,C.dik,C.din,C.dio,C.dim,C.dil,C.fyO,C.fwE,C.c85,C.c87,C.d7v,C.d7A,C.d7B,C.d7z,C.d7y,C.d7D,C.d7x,C.d7w,C.d7F,C.fLT,C.deh,C.dei,C.dej,C.fuC,C.fuD,C.cdN,C.eqi,C.eqj,C.eqk,C.eql,C.fn1,C.fn2,C.dRU,C.dRT,C.d4r,C.d4q,C.eww,C.ewv,C.esW,C.evC,C.ews,C.eus,C.ewi,C.ewj,C.ewt,C.etB,C.erE,C.erF,C.etZ,C.etz,C.etw,C.ety,C.etC,C.etD,C.etE,C.etF,C.etG,C.etI,C.erJ,C.etL,C.etM,C.etN,C.etO,C.etP,C.etQ,C.etK,C.etX,C.eua,C.eu8,C.euh,C.etJ,C.erZ,C.es_,C.es1,C.euk,C.euo,C.eqD,C.erX,C.erV,C.euw,C.erR,C.euv,C.erH,C.esi,C.ewd,C.evD,C.eqE,C.eqB,C.eqr,C.eqn,C.eqp,C.erU,C.er5,C.era,C.er8,C.er4,C.eu7,C.ewp,C.evP,C.evK,C.evL,C.evN,C.esM,C.esL,C.ewb,C.equ,C.eqv,C.eqx,C.eqy,C.eqC,C.eqt,C.eut,C.ewk,C.esP,C.ere,C.eqq,C.esg,C.eqz,C.eqI,C.eqJ,C.eqK,C.eqV,C.eqY,C.eqZ,C.er_,C.er0,C.er1,C.eqL,C.eqM,C.eqN,C.eqO,C.eqP,C.eqQ,C.eqR,C.eqS,C.eqT,C.eqU,C.eqW,C.eqX,C.ese,C.esd,C.esc,C.eqA,C.eri,C.erg,C.erj,C.erk,C.erW,C.eu2,C.eu3,C.eu0,C.eu1,C.evJ,C.erO,C.erN,C.etf,C.ete,C.eth,C.etd,C.eti,C.etc,C.etj,C.etb,C.etk,C.eta,C.etl,C.et9,C.etm,C.et8,C.etn,C.et7,C.et0,C.et1,C.et2,C.et_,C.et3,C.esZ,C.et4,C.esY,C.et5,C.esX,C.et6,C.es8,C.es9,C.es2,C.es4,C.es5,C.es6,C.es7,C.ewq,C.ewr,C.etp,C.eto,C.ets,C.euP,C.euQ,C.euR,C.ev1,C.evc,C.evn,C.evu,C.evv,C.evw,C.evx,C.evy,C.euS,C.euT,C.euU,C.euV,C.euW,C.euX,C.euY,C.euZ,C.ev_,C.ev0,C.ev2,C.ev3,C.ev4,C.ev5,C.ev6,C.ev7,C.ev8,C.ev9,C.eva,C.euF,C.evb,C.euN,C.euM,C.eve,C.euL,C.euB,C.evA,C.euK,C.euA,C.euy,C.euJ,C.euz,C.eux,C.evi,C.euI,C.evj,C.evk,C.evl,C.evm,C.euH,C.evo,C.evp,C.evq,C.euG,C.evr,C.euE,C.evs,C.euD,C.evt,C.euC,C.erc,C.evW,C.evV,C.evX,C.evU,C.esl,C.esk,C.esm,C.esj,C.ew6,C.ew1,C.ew5,C.evY,C.evZ,C.ew_,C.ew0,C.ew3,C.ew4,C.ew9,C.erD,C.erq,C.err,C.ers,C.erp,C.erw,C.erv,C.ero,C.ern,C.erz,C.erm,C.erA,C.etu,C.ett,C.esy,C.esx,C.esw,C.esv,C.esu,C.est,C.ess,C.esr,C.eso,C.esq,C.esp,C.esn,C.esK,C.eup,C.euq,C.d01,C.d0o,C.d0p,C.d_W,C.d_V,C.d_Z,C.d_X,C.d_Y,C.ex6,C.ewX,C.ex5,C.ewY,C.ewZ,C.ewT,C.ewU,C.ewV,C.ewW,C.ex8,C.fFB,C.fFC,C.fFD,C.ewz,C.ewA,C.ewB,C.ewE,C.ewF,C.ewI,C.ewJ,C.ewH,C.ewK,C.ewG,C.ewy,C.ewx,C.ewM,C.ewN,C.ewP,C.ewQ,C.eqg,C.eqf,C.eqb,C.eqe,C.ewS,C.ewR,C.fzU,C.fzT,C.eeo,C.eep])
t(C.aQO,B.J)
u(B.mb,[C.a3t,C.awC,C.avj,C.xs,C.xv,C.kS,C.tf,C.Bk,C.rr,C.vV,C.arh,C.Ix,C.aqH,C.uD,C.mx,C.hz,C.a8j])
u(C.bNk,[C.cwv,C.bNl])
u(C.cgg,[C.cgk,C.asj])
t(C.cgj,C.cge)
t(C.cgi,C.cgd)
t(C.cgl,C.cgi)
t(C.cgh,C.cgf)
t(C.cgb,C.cgc)
t(C.b9y,B.oM)
t(C.cqj,B.auM)
t(C.a85,B.xf)
t(C.aVg,B.dG)
t(C.aAa,B.atE)
u(B.ag,[C.a0x,C.Yg,C.Ye,C.apT,C.Vr,C.Vu,C.a_y,C.a04,C.a03,C.aDp,C.Zp,C.Nf,C.YY,C.Zi,C.anT,C.aIg,C.UG,C.az_,C.a7p,C.NH,C.aym,C.Jy,C.a_a,C.VF,C.VG,C.aDO,C.aqM,C.a7q])
u(B.ah,[C.aIz,C.ax9,C.ax5,C.aDd,C.aDw,C.aDA,C.aEX,C.aGS,C.aGR,C.aLq,C.aAS,C.aKU,C.azf,C.bfr,C.aKF,C.aML,C.aKT,C.bdk,C.aLo,C.aLC,C.aJA,C.bc5,C.aLD,C.aDR,C.bjR,C.aDP,C.aDS,C.bjA])
u(B.au,[C.ax7,C.acX,C.acl,C.biC,C.ad_,C.aeG,C.b0c,C.brZ,C.b0w,C.bla,C.bqy,C.aZq,C.b0z,C.ad2,C.adk,C.b0x,C.Iw,C.aZt,C.bck,C.Pm,C.JF,C.bgZ,C.bgY,C.bun])
u(B.H1,[C.bbN,C.bto,C.aIT,C.beu,C.bqW])
u(B.mN,[C.bbM,C.b8h,C.bqT,C.bbj,C.beS,C.bh4,C.bdY,C.beP,C.bew,C.bnq,C.b9q,C.b93,C.buk,C.brl,C.bqu,C.bdR,C.b0u,C.bpr,C.bqr])
t(C.bjx,C.aLq)
t(C.biU,C.aKU)
t(C.biE,C.aKF)
t(C.btR,C.aML)
t(C.biR,C.aKT)
t(C.bjv,C.aLo)
t(C.bwF,C.aLC)
t(C.aDQ,C.bwF)
t(C.bc6,C.aJA)
t(C.aDT,C.aLD)
t(C.bub,B.iT)
t(C.a8i,B.ks)
t(C.cgo,C.b2e)
t(C.ahU,C.a2v)
u(B.Xh,[C.aQE,C.aS8])
t(C.awe,C.aQE)
w(C.aLq,B.ca)
w(C.aKU,B.ca)
w(C.aKF,B.ca)
w(C.aKT,B.ca)
w(C.aLo,B.ca)
w(C.aML,B.ca)
w(C.aJA,B.eR)
w(C.aLC,B.ca)
v(C.bwF,B.ey)
w(C.aLD,B.ca)})()
B.jY(b.typeUniverse,JSON.parse('{"aRn":{"hI":["aRn"]},"nS":{"aRn":[],"hI":["aRn"]},"aQO":{"J":["Ru"],"J.E":"Ru"},"b9y":{"oM":[]},"a85":{"xf":[],"ob":[]},"aVg":{"dG":[],"cA":[],"r":[]},"aAa":{"aS":[],"d6":["aS"],"aR":[],"cv":[]},"a0x":{"ag":[],"r":[]},"aIz":{"ah":["a0x"]},"Yg":{"ag":[],"r":[]},"Ye":{"ag":[],"r":[]},"ax9":{"ah":["Yg"]},"ax5":{"ah":["Ye"]},"ax7":{"au":[],"r":[]},"apT":{"ag":[],"r":[]},"aDd":{"ah":["apT"]},"acX":{"au":[],"r":[]},"acl":{"au":[],"r":[]},"ad_":{"au":[],"r":[]},"aeG":{"au":[],"r":[]},"biC":{"au":[],"r":[]},"Vr":{"ag":[],"r":[]},"aDw":{"ah":["Vr"]},"b0c":{"au":[],"r":[]},"bbN":{"aB":[]},"bbM":{"aB":[]},"bto":{"aB":[]},"b8h":{"aB":[]},"bqT":{"aB":[]},"Vu":{"ag":[],"r":[]},"aDA":{"ah":["Vu"]},"bbj":{"aB":[]},"a_y":{"ag":[],"r":[]},"aEX":{"ah":["a_y"]},"beS":{"aB":[]},"a04":{"ag":[],"r":[]},"a03":{"ag":[],"r":[]},"aDp":{"ag":[],"r":[]},"Zp":{"ag":[],"r":[]},"aGS":{"ah":["a04"]},"aGR":{"ah":["a03"]},"bjx":{"ah":["aDp"]},"bh4":{"aB":[]},"aAS":{"ah":["Zp"]},"brZ":{"au":[],"r":[]},"b0w":{"au":[],"r":[]},"bla":{"au":[],"r":[]},"Nf":{"ag":[],"r":[]},"YY":{"ag":[],"r":[]},"biU":{"ah":["Nf"]},"bqy":{"au":[],"r":[]},"bdY":{"aB":[]},"aZq":{"au":[],"r":[]},"azf":{"ah":["YY"]},"Zi":{"ag":[],"r":[]},"bfr":{"ah":["Zi"]},"beP":{"aB":[]},"bew":{"aB":[]},"bnq":{"aB":[]},"b9q":{"aB":[]},"b93":{"aB":[]},"buk":{"aB":[]},"brl":{"aB":[]},"bqu":{"aB":[]},"bdR":{"aB":[]},"anT":{"ag":[],"r":[]},"b0z":{"au":[],"r":[]},"biE":{"ah":["anT"]},"ad2":{"au":[],"r":[]},"adk":{"au":[],"r":[]},"aIg":{"ag":[],"r":[]},"UG":{"ag":[],"r":[]},"Iw":{"au":[],"r":[]},"az_":{"ag":[],"r":[]},"a7p":{"ag":[],"r":[]},"b0x":{"au":[],"r":[]},"b0u":{"aB":[]},"btR":{"ah":["aIg"]},"aIT":{"aB":[]},"biR":{"ah":["UG"]},"bdk":{"ah":["az_"]},"bjv":{"ah":["a7p"]},"aZt":{"au":[],"r":[]},"beu":{"aB":[]},"bpr":{"aB":[]},"bqr":{"aB":[]},"aym":{"ag":[],"r":[]},"Jy":{"ag":[],"r":[]},"a_a":{"ag":[],"r":[]},"JF":{"au":[],"r":[]},"NH":{"ag":[],"r":[]},"aDQ":{"ah":["NH"],"ey":[]},"bc6":{"ah":["aym"]},"bck":{"au":[],"r":[]},"bc5":{"ah":["Jy"]},"Pm":{"au":[],"r":[]},"aDT":{"ah":["a_a"]},"bqW":{"aB":[]},"bgZ":{"au":[],"r":[]},"bgY":{"au":[],"r":[]},"VF":{"ag":[],"r":[]},"VG":{"ag":[],"r":[]},"aDO":{"ag":[],"r":[]},"aqM":{"ag":[],"r":[]},"aDR":{"ah":["VF"]},"bjR":{"ah":["VG"]},"aDP":{"ah":["aDO"]},"bub":{"iT":[]},"aDS":{"ah":["aqM"]},"bun":{"au":[],"r":[]},"a7q":{"ag":[],"r":[]},"bjA":{"ah":["a7q"]},"a8i":{"ks":["fs<eP>"],"ke":["fs<eP>"]},"ahU":{"a2v":[]},"aQE":{"j3":[],"ff":[]},"awe":{"j3":[],"ff":[]},"aS8":{"j3":[],"ff":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.ax
return{bu:w("Ls"),U:w("vq<pZ>"),bz:w("w"),M:w("eA<m>"),bo:w("jB"),g7:w("LY"),gc:w("az<iw?>"),bq:w("az<~>"),cc:w("Ma"),fS:w("DM"),an:w("HI"),bm:w("O<Ru>"),X:w("O<a2D>"),f3:w("O<aRn>"),aK:w("O<n8>"),V:w("O<ac>"),O:w("O<w>"),fA:w("O<ly>"),d5:w("O<az<bv<H,+icon3d,picture(m?,m?)>>>"),bH:w("O<az<dD>>"),fG:w("O<az<~>>"),aF:w("O<ne>"),cd:w("O<ai<jo>>"),ez:w("O<a4<m,aC>>"),d:w("O<a4<m,@>>"),B:w("O<mt>"),h:w("O<jo>"),gE:w("O<zl>"),k:w("O<oi>"),g:w("O<lG>"),D:w("O<i0>"),u:w("O<eK>"),m:w("O<uD>"),i:w("O<hz>"),aC:w("O<a7H>"),o:w("O<zn>"),e3:w("O<aC>"),dN:w("O<u>"),v:w("O<hq>"),cR:w("O<iR>"),J:w("O<jf>"),gx:w("O<p6<m>>"),f2:w("O<+(a0,m)>"),L:w("O<+(m,m)>"),aD:w("O<+data,mimeType(m,m)>"),G:w("O<+(K,K)>"),ek:w("O<+(H,m)>"),n:w("O<+(H,H)>"),r:w("O<cR>"),s:w("O<m>"),aS:w("O<iT>"),p:w("O<r>"),eR:w("O<ff>"),fT:w("O<b8_>"),bx:w("O<aEr>"),gz:w("O<aeQ>"),x:w("O<K>"),t:w("O<H>"),dS:w("O<aB?>"),bA:w("O<u?>"),Z:w("O<H?>"),cA:w("O<cf>"),A:w("cs<ah<ag>>"),gL:w("ai<oi>"),R:w("ai<i0>"),j:w("ai<@>"),bW:w("ai<H>"),e:w("bv<H,+icon3d,picture(m?,m?)>"),P:w("a4<m,@>"),f:w("a4<@,@>"),gI:w("a4<H,+icon3d,picture(m?,m?)>"),bR:w("M<hz,r>"),eC:w("M<nJ,m>"),cT:w("M<jG,D>"),dv:w("M<m,m>"),f0:w("M<m,r>"),gN:w("M<H,pD>"),gh:w("M<mx,jq<mx>>"),w:w("iC"),ei:w("iw"),g2:w("rh"),fB:w("El"),b6:w("zl"),gX:w("a7z"),dt:w("le"),ea:w("oi"),bt:w("lG"),I:w("i0"),F:w("eK"),fO:w("mx"),ff:w("uD"),fP:w("hz"),Q:w("vV"),dO:w("aqI"),a:w("cr"),C:w("aC"),dw:w("ask"),di:w("a8j"),Y:w("eP"),fz:w("+(m,m)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(m?,m)"),aH:w("+icon3d,picture(m?,m?)"),cz:w("EQ"),dB:w("dz<u>"),bJ:w("dz<m>"),_:w("e_<m>"),N:w("m"),fw:w("pZ"),bO:w("as"),K:w("bq<u>"),b:w("bq<K>"),E:w("dD"),W:w("cy<m>"),ac:w("cy<H>"),ex:w("ki<lG>"),cI:w("ki<m>"),cl:w("ki<K>"),b4:w("a_<lb>"),a8:w("a_<m6>"),fR:w("a_<+(m,m)>"),co:w("e9<u>"),l:w("r"),b2:w("bW<~>"),ev:w("q0<dX>"),dT:w("bg<~>"),cQ:w("aAa"),q:w("n0"),y:w("R"),gR:w("K"),z:w("@"),S:w("H"),at:w("ba?"),gw:w("ai<a4<m,@>>?"),aT:w("ai<i0>?"),c:w("ai<@>?"),aP:w("iw?"),af:w("i0?"),go:w("b0B?"),a6:w("a7I?"),cK:w("aC?"),bZ:w("+bytes,dataUrl,fileName(dD,m,m)?"),gl:w("+claimCode,qrPayload,token(m?,m,m)?"),T:w("m?"),dd:w("dD?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aW3=new B.bI(A.ax,null,null,H.anC,null)
D.aWd=new B.db(0,-0.15)
D.aWf=new B.db(0.62,0)
D.aWi=new B.db(-0.35,-0.45)
D.aWs=new B.db(0.9,-0.85)
D.aXL=new B.bp(H.So,H.So,A.hg,A.hg)
D.aY_=new B.ay(A.b6,1,A.q,-1)
D.bgA=new B.w(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aYb=new B.ay(D.bgA,1,A.q,-1)
D.aYn=new B.ay(A.aE,1.5,A.q,-1)
D.aYs=new B.ay(A.b6,1.6,A.q,-1)
D.aYI=new B.ay(A.aE,1.4,A.q,-1)
D.b_4=new B.o(null,null,null,null,null,L.Gx,A.a6)
D.bW5=new B.a8(A.a3,A.a8,A.x,G.a2P,null,null)
D.b_c=new B.o(null,null,null,null,null,D.bW5,A.a6)
D.aaP=new B.o(A.az,null,null,A.t2,null,null,A.n)
D.baF=new B.w(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.bgx=new B.w(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cTi=w([D.baF,D.bgx],x.O)
D.efd=new B.bT(A.A,0.5,A.x,null,0,D.cTi,null,null)
D.b_v=new B.o(null,null,null,null,null,D.efd,A.a6)
D.WP=new B.w(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aYY=new B.bO(P.uZ,A.Y,A.Y,A.Y)
D.b_x=new B.o(D.WP,null,D.aYY,null,null,null,A.n)
D.bXQ=new B.a8(A.a3,A.a8,A.x,A.Q3,null,null)
D.b_E=new B.o(null,null,null,null,null,D.bXQ,A.a6)
D.acm=new B.w(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.b_H=new B.o(D.acm,null,null,A.qD,null,null,A.n)
D.b_L=new B.o(A.jY,null,null,null,null,null,A.a6)
D.b_O=new B.o(Z.adq,null,H.aau,A.mb,null,null,A.n)
D.DU=new B.o(A.dN,null,null,null,null,null,A.a6)
D.b_U=new B.o(null,null,null,null,null,E.vW,A.a6)
D.cY9=w([E.aek,A.bY],x.O)
D.bXr=new B.a8(A.b_,A.b4,A.x,D.cY9,null,null)
D.b_Z=new B.o(null,null,null,A.mb,null,D.bXr,A.n)
D.d7B=w([A.bj,A.dN,A.jW],x.O)
D.a0Y=new B.a8(A.ax,A.aC,A.x,D.d7B,null,null)
D.b0b=new B.o(null,null,null,null,null,D.a0Y,A.n)
D.b0c=new B.o(D.acm,null,null,A.kK,null,null,A.n)
D.co_=w([A.di,A.bj],x.O)
D.bXi=new B.a8(A.ax,A.aC,A.x,D.co_,null,null)
D.b0g=new B.o(null,null,null,null,null,D.bXi,A.n)
D.b0q=new B.o(null,null,null,null,null,G.u8,A.a6)
D.b0K=new B.o(A.aem,null,null,null,null,null,A.a6)
D.bbt=new B.w(0.5647058823529412,0,0,0,A.t)
D.aaZ=new B.ac(0,A.G,D.bbt,A.RU,28)
D.b2S=new B.aVt()
D.b3q=new C.cqj()
D.b3C=new C.b9y()
D.abu=new B.cp(A.A,null,null,A.a0N,null)
D.b69=new B.fj(null,null,null,null,null,E.n1,null,null,null,null)
D.b48=new B.cp(A.A,null,null,D.b69,null)
D.bGR=new B.ae(A.dX,28,A.c,null,null,null)
D.b4C=new B.cp(A.A,null,null,D.bGR,null)
D.b66=new B.fj(2,null,null,null,null,A.c_,null,null,null,null)
D.b4Y=new B.cp(A.A,null,null,D.b66,null)
D.bHb=new B.ae(L.NG,40,A.bz,null,null,null)
D.b4Z=new B.cp(A.A,null,null,D.bHb,null)
D.b7_=new B.w(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b7c=new B.w(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b7A=new B.w(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b7G=new B.w(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b8b=new B.w(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b8r=new B.w(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b8s=new B.w(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.KC=new B.w(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b8T=new B.w(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b8Z=new B.w(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.acF=new B.w(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b9J=new B.w(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.bau=new B.w(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.acT=new B.w(1,1,1,0.9725490196078431,A.t)
D.baO=new B.w(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.baZ=new B.w(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.bb1=new B.w(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.bbd=new B.w(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.bby=new B.w(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.bcV=new B.w(1,1,0.996078431372549,0.9725490196078431,A.t)
D.Wz=new B.w(0.8509803921568627,0,0,0,A.t)
D.bd2=new B.w(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.bd9=new B.w(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.adI=new B.w(0.6,0,0,0,A.t)
D.adK=new B.w(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.bew=new B.w(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.tn=new B.w(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.beW=new B.w(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.bfk=new B.w(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.bfI=new B.w(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.aex=new B.w(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.WZ=new B.w(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.AF=new B.w(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.Lb=new B.w(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.jd=new B.w(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.aeV=new B.w(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.X9=new B.w(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.bj3=new B.w(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.bjx=new B.w(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.bjL=new B.w(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.Xu=new B.w(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.bkT=new B.w(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.xm=new B.w(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.blm=new B.w(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.blF=new B.hH(A.b2,!0,null,null)
D.faw=new B.G(!0,A.aA,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAi=new B.y("Bio link",null,D.faw,null,null,null,null,null,null,null,null,null)
D.b4S=new B.cp(A.A,null,null,D.fAi,null)
D.blV=new B.hH(A.VY,!0,D.b4S,null)
D.LA=new C.a3t(0,"none")
D.ag_=new C.a3t(1,"deflate")
D.ag0=new C.a3t(2,"bzip2")
D.bmR=new B.km(0.165,0.84,0.44,1)
D.cYt=w([A.cg,A.dQ,A.aE],x.O)
D.bWz=new B.a8(A.ax,A.aC,A.x,D.cYt,null,null)
D.b_9=new B.o(null,null,null,null,null,D.bWz,A.n)
D.bQ2=new B.ae(A.eS,null,A.ad,null,null,null)
D.b5t=new B.cp(A.A,null,null,D.bQ2,null)
D.bnn=new B.kP(D.b_9,A.be,D.b5t,null)
D.bjj=new B.w(0.058823529411764705,1,1,1,A.t)
D.d0D=w([A.bF,A.qO,A.qO,D.bjj],x.O)
D.cFb=w([0,0.32,0.7,1],x.x)
D.bX7=new B.a8(A.ax,A.aC,A.x,D.d0D,D.cFb,null)
D.aZZ=new B.o(null,null,null,null,null,D.bX7,A.n)
D.bnt=new B.kP(D.aZZ,A.be,null,null)
D.bov=new B.ml(1,1,null,null,null,A.bo,null)
D.boy=new B.ml(1,null,null,null,null,D.X9,null)
D.bp1=new B.ba(125e4)
D.bp7=new B.ba(17e4)
D.bph=new B.ba(35964e8)
D.bpn=new B.ba(55e4)
D.bpr=new B.ba(68e4)
D.bpS=new B.ic(0,0,0,5)
D.bq8=new B.Q(0,16,16,0)
D.bqi=new B.Q(0,36,0,36)
D.bqp=new B.Q(0,54,0,0)
D.bqw=new B.Q(10,0,10,3)
D.bqH=new B.ic(10,16,10,10)
D.bqT=new B.Q(10,6,4,6)
D.bqW=new B.Q(10,8,10,6)
D.agY=new B.Q(11,8,11,11)
D.br_=new B.Q(12,0,12,24)
D.brb=new B.Q(12,12,12,4)
D.bre=new B.Q(12,12,8,12)
D.brt=new B.Q(12,8,8,12)
D.brQ=new B.Q(14,14,14,0)
D.brV=new B.Q(14,14,14,90)
D.bsd=new B.Q(16,10,16,16)
D.bse=new B.Q(16,10,16,20)
D.ahN=new B.Q(16,6,16,28)
D.bsN=new B.Q(18,0,18,10)
D.bsP=new B.Q(18,0,18,30)
D.bsR=new B.Q(18,10,18,12)
D.bsS=new B.Q(18,10,18,14)
D.bt8=new B.Q(18,16,14,18)
D.btd=new B.Q(18,18,18,12)
D.btj=new B.Q(18,26,18,12)
D.bto=new B.Q(18,34,18,34)
D.btp=new B.Q(18,4,18,14)
D.btv=new B.Q(18,8,18,24)
D.btM=new B.Q(20,16,14,4)
D.btR=new B.Q(20,18,12,4)
D.btW=new B.Q(20,20,12,20)
D.btZ=new B.Q(20,22,20,20)
D.bu3=new B.Q(20,6,20,6)
D.bud=new B.Q(22,18,22,18)
D.bul=new B.Q(22,24,22,0)
D.buo=new B.Q(22,24,22,4)
D.buw=new B.Q(22,60,22,22)
D.buC=new B.Q(24,24,24,22)
D.buM=new B.Q(26,10,60,10)
D.buT=new B.Q(28,44,28,44)
D.bv9=new B.Q(32,44,32,44)
D.bvh=new B.Q(38,30,38,20)
D.bvm=new B.Q(4,0,0,6)
D.bvy=new B.ic(4,4,4,4)
D.bvY=new B.ic(6,5,6,5)
D.bw1=new B.Q(6,6,8,6)
D.bwc=new B.Q(8,14,8,14)
D.bwd=new B.Q(8,22,8,22)
D.bwl=new B.Q(8,6,12,6)
D.bwu=new B.Q(8,8,8,4)
D.aiH=new B.Q(9,9,9,6)
D.bwF=new B.ic(2.5,2.5,2.5,2.5)
D.bwG=new B.Q(10.5,0,10.5,0)
D.bwH=new B.Q(7,1.5,7,1.5)
D.cQs=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bwX=new B.yK(null,null,D.cQs,A.Aj)
D.cNx=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bwY=new B.yK(null,null,D.cNx,A.Aj)
D.aQz=new B.G(!0,A.aA,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzC=new B.y("WORD DESIGN",null,D.aQz,null,null,null,null,null,null,null,null,null)
D.bxw=new B.bC(1,A.bh,D.fzC,null)
D.fzi=new B.y("Slides database",null,Ab.qq,null,null,null,null,null,null,null,null,null)
D.fwy=new B.y("Admin only \xb7 keep as many as you like",null,U.aQ2,null,null,null,null,null,null,null,null,null)
D.dfA=w([D.fzi,A.bD,D.fwy],x.p)
D.bmk=new B.fl(A.ag,A.e,A.j,A.F,null,A.p,null,0,D.dfA,null)
D.bxz=new B.bC(1,A.bh,D.bmk,null)
D.fr5=new B.y("NGMY logo",null,A.fP,null,null,null,null,null,null,null,null,null)
D.bxC=new B.bC(1,A.bh,D.fr5,null)
D.f8p=new B.G(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBx=new B.y("TALK TO THE EDITOR",null,D.f8p,null,null,null,null,null,null,null,null,null)
D.bxT=new B.bC(1,A.bh,D.fBx,null)
D.fkW=new B.y("Tell the AI what to change",null,Ab.qq,null,null,null,null,null,null,null,null,null)
D.byd=new B.bC(1,A.bh,D.fkW,null)
D.bz4=new B.DA(!0,"video/mp4")
D.f6I=new B.G(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj1=new B.y("Move presentations between devices",null,D.f6I,null,null,null,!1,null,null,1,null,null)
D.bz8=new B.qj(A.eh,A.a3,A.f,D.fj1,null)
D.fk9=new B.y("Edit in Slides",null,A.j5,null,null,null,null,null,null,null,null,null)
D.bz9=new B.qj(A.eh,A.A,A.f,D.fk9,null)
D.bzo=new B.dq(1,A.cn,D.bz9,null)
D.a_i=new B.a0(60988,"MaterialIcons",!1)
D.bCk=new B.a0(61352,"MaterialIcons",!1)
D.akc=new B.a0(61531,"MaterialIcons",!1)
D.bDz=new B.a0(63062,"MaterialIcons",!1)
D.bDH=new B.a0(63109,"MaterialIcons",!1)
D.bDT=new B.a0(63206,"MaterialIcons",!1)
D.akX=new B.a0(63238,"MaterialIcons",!1)
D.a_O=new B.a0(63365,"MaterialIcons",!1)
D.a_P=new B.a0(63367,"MaterialIcons",!1)
D.a_Q=new B.a0(63368,"MaterialIcons",!1)
D.al8=new B.a0(63384,"MaterialIcons",!1)
D.bEr=new B.a0(63525,"MaterialIcons",!1)
D.bEv=new B.a0(63568,"MaterialIcons",!1)
D.bEQ=new B.a0(983072,"MaterialIcons",!1)
D.bFe=new B.a0(983271,"MaterialIcons",!0)
D.amg=new B.a0(983965,"MaterialIcons",!1)
D.amh=new B.a0(983966,"MaterialIcons",!1)
D.bGc=new B.a0(984592,"MaterialIcons",!1)
D.bGu=new B.ae(A.tU,16,A.aA,null,null,null)
D.bGB=new B.ae(A.mx,null,A.c,null,null,null)
D.ams=new B.ae(A.q0,18,A.c,null,null,null)
D.bGS=new B.ae(A.Bo,18,O.lg,null,null,null)
D.bHx=new B.ae(A.jo,11,null,null,null,null)
D.bHH=new B.ae(A.a_y,null,A.eu,null,null,null)
D.bIf=new B.ae(A.rb,18,A.aA,null,null,null)
D.bIl=new B.ae(A2.BB,14,null,null,null,null)
D.bIm=new B.ae(A.e6,28,A.cb,null,null,null)
D.bIy=new B.ae(A.q1,20,A.c,null,null,null)
D.bIF=new B.ae(A.yh,null,null,null,null,null)
D.bIL=new B.ae(A.iY,18,A.hx,null,null,null)
D.bIQ=new B.ae(A.ll,null,null,null,null,null)
D.bDC=new B.a0(63065,"MaterialIcons",!1)
D.bJt=new B.ae(D.bDC,15,A.c,null,null,null)
D.bDI=new B.a0(63113,"MaterialIcons",!1)
D.bJz=new B.ae(D.bDI,null,A.ad,null,null,null)
D.bJX=new B.ae(A.vD,22,A.bL,null,null,null)
D.bKg=new B.ae(A.vE,18,null,null,null,null)
D.bKm=new B.ae(A.BE,12,A.c,null,null,null)
D.bFP=new B.a0(983687,"MaterialIcons",!1)
D.bKx=new B.ae(D.bFP,null,A.bj,null,null,null)
D.bKE=new B.ae(A.hn,null,A.bj,null,null,null)
D.bKX=new B.ae(A.oV,22,A.c,null,null,null)
D.bL0=new B.ae(A.cD,13,A.c,null,null,null)
D.bL6=new B.ae(A.e6,26,A.ay,null,null,null)
D.bL9=new B.ae(A.rg,26,A.c,null,null,null)
D.NU=new B.ae(A.jo,8,A.c,null,null,null)
D.bLs=new B.ae(A.q0,40,A.c,null,null,null)
D.bLt=new B.ae(A.bBh,null,null,null,null,null)
D.bLx=new B.ae(A.u2,20,null,null,null,null)
D.bFO=new B.a0(983683,"MaterialIcons",!1)
D.bLH=new B.ae(D.bFO,null,A.aZ,null,null,null)
D.bLI=new B.ae(A.jo,16,A.bj,null,null,null)
D.bM2=new B.ae(A.rh,null,null,null,null,null)
D.an_=new B.ae(A.vG,22,A.c,null,null,null)
D.bM6=new B.ae(A.dX,17,A.c,null,null,null)
D.an0=new B.ae(A.jo,9,A.c,null,null,null)
D.bMb=new B.ae(A.vA,null,null,null,null,null)
D.bBy=new B.a0(57744,"MaterialIcons",!1)
D.bMi=new B.ae(D.bBy,null,null,null,null,null)
D.bMl=new B.ae(A.vA,16,null,null,null,null)
D.bGl=new B.a0(985181,"MaterialIcons",!1)
D.Go=new B.ae(D.bGl,null,null,null,null,null)
D.bMx=new B.ae(A.ll,16,A.bL,null,null,null)
D.bFG=new B.a0(983615,"MaterialIcons",!1)
D.bMz=new B.ae(D.bFG,12,A.c,null,null,null)
D.an6=new B.ae(A.y_,16,null,null,null,null)
D.bMH=new B.ae(A.dX,21,A.c,null,null,null)
D.bMM=new B.ae(A.hn,17,A.c,null,null,null)
D.bMN=new B.ae(A.vD,null,null,null,null,null)
D.bN2=new B.ae(A.a0r,20,A.aA,null,null,null)
D.bNh=new B.ae(A.o3,22,E.n1,null,null,null)
D.bNo=new B.ae(A.q_,13,A.ad,null,null,null)
D.bNq=new B.ae(A.am2,20,A.aA,null,null,null)
D.bBf=new B.a0(57495,"MaterialIcons",!1)
D.bNv=new B.ae(D.bBf,null,null,null,null,null)
D.bNz=new B.ae(A.o4,18,A.c,null,null,null)
D.bNU=new B.ae(A.u6,28,A.c,null,null,null)
D.bO3=new B.ae(D.akX,null,A.aE,null,null,null)
D.bO4=new B.ae(A.q1,22,A.c,null,null,null)
D.anf=new B.ae(A.a_e,16,null,null,null,null)
D.bOQ=new B.ae(A.vD,32,A.c,null,null,null)
D.bPz=new B.ae(A.j_,22,A.c,null,null,null)
D.bPD=new B.ae(A.rg,22,A.ad,null,null,null)
D.anv=new B.ae(A.tU,null,A.c2,null,null,null)
D.bQx=new B.ae(A.tT,18,null,null,null,null)
D.bR8=new B.ae(A.dX,18,A.bZ,null,null,null)
D.a0Q=new B.ae(A.cD,18,A.aA,null,null,null)
D.bRe=new B.ae(A.alX,null,null,null,null,null)
D.bRF=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aQm,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ez,!0,null,null,null,null)
D.eZY=new B.G(!0,A.bJ,null,null,null,null,null,A.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bRX=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.eZY,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.af,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ez,!0,null,null,null,null)
D.bSn=new B.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.ez,!0,null,null,null,null)
D.cUf=w([A.dN,A.aE],x.O)
D.bUk=new B.a8(A.a3,A.a8,A.x,D.cUf,null,null)
D.bUw=new B.a8(A.b_,A.b4,A.U3,A.auz,null,null)
D.b7q=new B.w(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.bbB=new B.w(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.bex=new B.w(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b9B=new B.w(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cFd=w([D.b7q,D.bbB,D.bex,D.b9B],x.O)
D.bUP=new B.a8(A.ax,A.aC,A.x,D.cFd,A.GY,null)
D.dfI=w([A.cs,A.bC,A.b6],x.O)
D.bUR=new B.a8(A.b_,A.b4,A.U3,D.dfI,null,null)
D.dh3=w([A.bj,A.cf],x.O)
D.bUV=new B.a8(A.a3,A.a8,A.x,D.dh3,null,null)
D.dc8=w([A.hl,A.d5,A.aF],x.O)
D.bUX=new B.a8(A.ax,A.aC,A.x,D.dc8,null,null)
D.d_6=w([A.cY,A.fc],x.O)
D.bV0=new B.a8(A.a3,A.a8,A.x,D.d_6,null,null)
D.dfC=w([O.lg,A.d5],x.O)
D.aog=new B.a8(A.a3,A.a8,A.x,D.dfC,null,null)
D.bca=new B.w(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.dfz=w([D.bca,D.xm,A.c_],x.O)
D.bV5=new B.a8(A.a3,A.a8,A.x,D.dfz,null,null)
D.cVS=w([A.b1,A.cZ,A.eF],x.O)
D.bV6=new B.a8(A.ax,A.aC,A.x,D.cVS,null,null)
D.O8=new B.a8(A.a3,A.a8,A.x,A.Hb,null,null)
D.bk7=new B.w(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cyg=w([D.bk7,A.c_,A.jf],x.O)
D.aol=new B.a8(A.ax,A.aC,A.x,D.cyg,null,null)
D.d4d=w([A.v9,A.aw,D.AF],x.O)
D.bW7=new B.a8(A.a3,A.a8,A.x,D.d4d,null,null)
D.bln=new B.w(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.bat=new B.w(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.bfx=new B.w(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cV1=w([D.bln,D.bat,D.bfx],x.O)
D.aom=new B.a8(A.a3,A.a8,A.x,D.cV1,null,null)
D.bcc=new B.w(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bY5=w([Aw.afH,D.bcc],x.O)
D.bWg=new B.a8(A.b_,A.b4,A.x,D.bY5,null,null)
D.cT6=w([A.n0,A.bz],x.O)
D.bWk=new B.a8(A.b_,A.b4,A.x,D.cT6,null,null)
D.d99=w([A.aE,A.dQ],x.O)
D.bWq=new B.a8(A.a3,A.a8,A.x,D.d99,null,null)
D.aeH=new B.w(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.awh=w([D.aeH,D.jd,D.KC],x.O)
D.bWS=new B.a8(A.ax,A.aC,A.x,D.awh,null,null)
D.cy8=w([A.dx,A.dL],x.O)
D.bX2=new B.a8(A.b_,A.b4,A.x,D.cy8,null,null)
D.d6i=w([A.v5,Az.Ev],x.O)
D.bXS=new B.a8(A.a3,A.a8,A.x,D.d6i,null,null)
D.fsA=new B.y("Which Bio link?",null,A.cz,null,null,null,null,null,null,null,null,null)
D.bY2=new B.pJ(null,D.fsA,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.yH=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a4L=new C.kS(2,"elegantNavy")
D.h41=w([A.WX,D.jd,A.c_],x.O)
D.jM=new C.xs(0,"classic")
D.a4y=new C.jo("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a4L,4294967035,4279378237,4290283019,D.jM)
D.aFx=new C.kS(3,"elegantGold")
D.b6Z=new B.w(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b7V=new B.w(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.adg=new B.w(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.h3u=w([D.b6Z,D.b7V,D.adg],x.O)
D.a4w=new C.jo("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aFx,4294966515,4281016592,4289102906,D.jM)
D.dC7=new C.kS(22,"goldRibbon")
D.h3q=w([A.WX,D.jd,A.hZ],x.O)
D.a4p=new C.jo("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dC7,4294967035,4279378237,4291404327,D.jM)
D.dC8=new C.kS(23,"goldBaroque")
D.adU=new B.w(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.h3w=w([D.adU,A.aw,A.jf],x.O)
D.a4q=new C.jo("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dC8,4294964964,4283053072,4292128567,D.jM)
D.dCa=new C.kS(4,"elegantEmerald")
D.b94=new B.w(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b9Z=new B.w(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.h3C=w([D.b94,D.b9Z,A.hZ],x.O)
D.a4r=new C.jo("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dCa,4294376440,4279122734,4291404327,D.jM)
D.dCb=new C.kS(5,"elegantBurgundy")
D.bdy=new B.w(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.h3J=w([D.bdy,A.acx,A.hZ],x.O)
D.a4u=new C.jo("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dCb,4294965238,4283043359,4291404327,D.jM)
D.dC4=new C.kS(19,"goldFiligree")
D.Li=new B.w(1,1,0.984313725490196,0.9529411764705882,A.t)
D.h3x=w([D.Li,A.aw,A.jf],x.O)
D.a4s=new C.jo("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dC4,4294966259,4279378237,4292128567,D.jM)
D.dC5=new C.kS(20,"goldLaurel")
D.bjY=new B.w(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.h3K=w([A.Ku,A.hZ,D.bjY],x.O)
D.a4t=new C.jo("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dC5,4294966776,4282000405,4291404327,D.jM)
D.dC6=new C.kS(21,"goldCrest")
D.acp=new B.w(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.bk4=new B.w(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.h3z=w([D.acp,A.aw,D.bk4],x.O)
D.a4x=new C.jo("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dC6,4294965484,4283053072,4292128567,D.jM)
D.dC9=new C.kS(24,"goldStar")
D.blg=new B.w(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.h3D=w([D.blg,A.aw,D.jd],x.O)
D.a4v=new C.jo("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dC9,4294966518,4279378237,4292128567,D.jM)
D.Gz=w([D.a4y,D.a4w,D.a4p,D.a4q,D.a4r,D.a4u,D.a4s,D.a4t,D.a4x,D.a4v],x.h)
D.qd=new C.mx(0,"blank")
D.RJ=new C.mx(1,"title")
D.mF=new C.mx(2,"titleContent")
D.dWL=new C.mx(3,"twoColumn")
D.CC=new C.mx(4,"section")
D.dWM=new C.mx(5,"comparison")
D.HL=new C.mx(6,"flashcard")
D.HM=new C.mx(7,"quiz")
D.HN=new C.mx(8,"worksheet")
D.aoJ=w([D.qd,D.RJ,D.mF,D.dWL,D.CC,D.dWM,D.HL,D.HM,D.HN],B.ax("O<mx>"))
D.axj=w([Ao.Wk,A.dL],x.O)
D.kw=w([A.c_,A.bL,A.hY,A.hI,D.AF],x.O)
D.dy0=new C.j_("fireworks","Royal Fireworks","Thank you for celebrating with us",D.axj,D.kw)
D.bkf=new B.w(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.bdw=new B.w(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cTj=w([D.bkf,D.bdw],x.O)
D.dxS=new C.j_("confetti","Golden Confetti","Together we rise",D.cTj,D.kw)
D.cQx=w([A.nH,A.W0],x.O)
D.dxT=new C.j_("crown","Crown of Glory","Built for our community",D.cQx,D.kw)
D.baj=new B.w(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.bdb=new B.w(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cXb=w([D.baj,D.bdb],x.O)
D.ua=w([A.bJ,A.aQ,A.c,A.aL,A.ak],x.O)
D.dxN=new C.j_("aurora","Aurora Gala","A brighter future, together",D.cXb,D.ua)
D.bez=new B.w(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.d6o=w([G.ac2,D.bez],x.O)
D.dy3=new C.j_("champagne","Champagne Toast","Cheers to every member",D.d6o,D.kw)
D.dy4=new C.j_("diamonds","Diamond Rain","Every member is a jewel",X.axW,D.ua)
D.b7M=new B.w(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.bcI=new B.w(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.dbq=w([D.b7M,D.bcI],x.O)
D.dxI=new C.j_("starburst","Golden Starburst","Thank you!",D.dbq,D.kw)
D.bYb=w([A.fb,A.xe],x.O)
D.acb=new B.w(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.PI=w([A.oD,A.is,A.vh,A.nI,D.acb],x.O)
D.dyb=new C.j_("balloons","Luxury Balloons","Let's celebrate",D.bYb,D.PI)
D.cPQ=w([A.W8,A.w],x.O)
D.dy_=new C.j_("galaxy","Galaxy Spiral","The sky is not the limit",D.cPQ,D.ua)
D.bik=new B.w(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.d32=w([A.kp,D.bik],x.O)
D.dxV=new C.j_("redcarpet","Red Carpet","Tonight we shine",D.d32,D.kw)
D.bga=new B.w(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.bem=new B.w(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.d7i=w([D.bga,D.bem],x.O)
D.dxK=new C.j_("coins","Gold Coin Rain","Every contribution counts",D.d7i,D.kw)
D.de4=w([A.dx,A.hH],x.O)
D.dxQ=new C.j_("lanterns","Sky Lanterns","Lighting the way together",D.de4,D.kw)
D.bbh=new B.w(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cNQ=w([A.xg,D.bbh],x.O)
D.dxM=new C.j_("hearts","Floating Hearts","Made with love",D.cNQ,D.PI)
D.b8k=new B.w(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b9a=new B.w(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.dfx=w([D.b8k,D.b9a],x.O)
D.dya=new C.j_("petals","Rose Petals","Thank you, from our hearts",D.dfx,D.PI)
D.bjh=new B.w(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.dbK=w([A.lf,D.bjh],x.O)
D.dxH=new C.j_("butterflies","Golden Butterflies","New beginnings",D.dbK,D.kw)
D.bfu=new B.w(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cOM=w([D.bfu,A.w],x.O)
D.dy2=new C.j_("neon","Neon Night","Let's go!",D.cOM,D.ua)
D.bcp=new B.w(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.d9k=w([A.KU,D.bcp],x.O)
D.dy5=new C.j_("disco","Disco Ball","Party time",D.d9k,D.ua)
D.bg1=new B.w(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.d8S=w([A.hl,D.bg1],x.O)
D.dxL=new C.j_("sunrise","Golden Sunrise","A new day for our community",D.d8S,D.kw)
D.d8u=w([A.qR,A.dL],x.O)
D.dy6=new C.j_("pearls","Ocean Pearls","Deep roots, bright future",D.d8u,D.ua)
D.bao=new B.w(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.d8J=w([D.bao,A.dL],x.O)
D.dy9=new C.j_("snow","Winter Gala","Warm wishes to all",D.d8J,D.ua)
D.b78=new B.w(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b85=new B.w(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.des=w([D.b78,D.b85],x.O)
D.dxZ=new C.j_("laurel","Laurel Victory","We did it together",D.des,D.kw)
D.b6Y=new B.w(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.bd7=new B.w(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cMV=w([D.b6Y,D.bd7],x.O)
D.dy8=new C.j_("ribbons","Silk Ribbons","Elegance in every step",D.cMV,D.kw)
D.be5=new B.w(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.cy5=w([G.AE,D.be5],x.O)
D.dxW=new C.j_("kente","Kente Pride","Proud of our roots",D.cy5,D.kw)
D.bgJ=new B.w(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.bjB=new B.w(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cYP=w([D.bgJ,D.bjB],x.O)
D.dxR=new C.j_("trophy","Trophy Shine","Winners together",D.cYP,D.kw)
D.d8P=w([Ap.KI,A.w],x.O)
D.dxJ=new C.j_("shooting","Shooting Stars","Make a wish",D.d8P,D.ua)
D.b7f=new B.w(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.afv=new B.w(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.deK=w([D.b7f,D.afv],x.O)
D.dxX=new C.j_("bokeh","Golden Bokeh","Shine bright",D.deK,D.kw)
D.b7B=new B.w(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.d3S=w([D.b7B,A.w],x.O)
D.dxP=new C.j_("orbits","Golden Orbits","Always moving forward",D.d3S,D.kw)
D.bji=new B.w(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.d0w=w([A.adc,D.bji],x.O)
D.dxU=new C.j_("flowers","Blooming Garden","Growing together",D.d0w,D.PI)
D.b7o=new B.w(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b8_=new B.w(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.ddy=w([D.b7o,D.b8_],x.O)
D.dxO=new C.j_("music","Music Party","Celebrate with us",D.ddy,D.ua)
D.b8U=new B.w(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.bk0=new B.w(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cO1=w([D.b8U,D.bk0],x.O)
D.dy7=new C.j_("mandala","Royal Mandala","Harmony and unity",D.cO1,D.kw)
D.d0B=w([G.AE,D.afv],x.O)
D.dy1=new C.j_("sparklers","Golden Sparklers","Light up the night",D.d0B,D.kw)
D.dxY=new C.j_("city","City Lights","The whole city celebrates",D.axj,D.kw)
D.GI=w([D.dy0,D.dxS,D.dxT,D.dxN,D.dy3,D.dy4,D.dxI,D.dyb,D.dy_,D.dxV,D.dxK,D.dxQ,D.dxM,D.dya,D.dxH,D.dy2,D.dy5,D.dxL,D.dy6,D.dy9,D.dxZ,D.dy8,D.dxW,D.dxR,D.dxJ,D.dxX,D.dxP,D.dxU,D.dxO,D.dy7,D.dy1,D.dxY],B.ax("O<j_>"))
D.ekL=new B.z("","No ring")
D.eA2=new B.z("platinum","Platinum")
D.ewz=new B.z("glow","Glow")
D.eod=new B.z("double","Double line")
D.en7=new B.z("framed","Gallery frame")
D.ekm=new B.z("rosegold","Rose gold")
D.exk=new B.z("jewels","Jeweled")
D.eu_=new B.z("aurora","Aurora")
D.BX=w([D.ekL,A.a60,D.eA2,D.ewz,I.aM4,D.eod,A.a62,D.en7,D.ekm,D.exk,D.eu_],x.L)
D.chB=w([D.a4s,D.a4t,D.a4x,D.a4p,D.a4q,D.a4v],x.h)
D.bMV=new B.ae(G.ajN,16,null,null,null,null)
D.b2d=new B.vq(A.bg,D.bMV,null,x.U)
D.bBH=new B.a0(58027,"MaterialIcons",!1)
D.bGA=new B.ae(D.bBH,16,null,null,null,null)
D.b2b=new B.vq(A.L,D.bGA,null,x.U)
D.bBI=new B.a0(58030,"MaterialIcons",!1)
D.bKD=new B.ae(D.bBI,16,null,null,null,null)
D.b2e=new B.vq(A.dM,D.bKD,null,x.U)
D.cnN=w([D.b2d,D.b2b,D.b2e],B.ax("O<vq<pZ>>"))
D.cvq=w([A.AI,A.hi],x.O)
D.cvr=w([A.b1,A.bl,A.eF],x.O)
D.Pw=w([A.bL,A.hI,A.hY,A.aw,A.nI],x.O)
D.cyb=w([A.c_,D.jd,D.KC],x.O)
D.cyJ=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.eic=new B.z(4278913286,4280030216)
D.eiu=new B.z(4279373061,4278518787)
D.eiB=new B.z(4279898630,4278847235)
D.cYd=w([D.eic,D.eiu,D.eiB],x.n)
D.cTZ=w(["\u265b","\u269c","\u2726"],x.s)
D.dC2=new C.xu("Royal Onyx & Gold",D.cYd,4292128567,4294370209,4294965479,3874020544,D.cTZ)
D.ei_=new B.z(4278326799,4278598442)
D.ei1=new B.z(4278395929,4278258953)
D.ei8=new B.z(4278599728,4278327826)
D.ddW=w([D.ei_,D.ei1,D.ei8],x.n)
D.cOE=w(["\u269c","\u2756","\u2727"],x.s)
D.dC_=new C.xu("Imperial Emerald",D.ddW,4293050997,4294699968,4294180856,3872254170,D.cOE)
D.ei2=new B.z(4278455076,4278918747)
D.ei7=new B.z(4278587439,4278322714)
D.eil=new B.z(4279051376,4278455076)
D.dc4=w([D.ei2,D.ei7,D.eil],x.n)
D.d4u=w(["\u2654","\u2726","\u2748"],x.s)
D.dBU=new C.xu("Sapphire Crown",D.dc4,4291417834,4294967295,4294310143,3871986666,D.d4u)
D.eiz=new B.z(4279894534,4283041554)
D.eiL=new B.z(4281008906,4279042307)
D.eiT=new B.z(4284221976,4279894534)
D.dhD=w([D.eiz,D.eiL,D.eiT],x.n)
D.cPZ=w(["\u265b","\u2766","\u2726"],x.s)
D.dBW=new C.xu("Ruby Throne",D.dhD,4293378685,4294963145,4294964466,3874213833,D.cPZ)
D.eit=new B.z(4279371039,4281995100)
D.eiD=new B.z(4280092723,4278714896)
D.eiQ=new B.z(4283045242,4279371039)
D.dei=w([D.eit,D.eiD,D.eiQ],x.n)
D.dcq=w(["\u2655","\u2756","\u2727"],x.s)
D.dC0=new C.xu("Amethyst Palace",D.dei,4293314984,4294963421,4294702591,3873229802,D.dcq)
D.ei4=new B.z(4278519045,4280032287)
D.eim=new B.z(4279111184,4278321666)
D.eiI=new B.z(4280492839,4278716426)
D.daY=w([D.ei4,D.eim,D.eiI],x.n)
D.d2Q=w(["\u2726","\u25c6","\u2742"],x.s)
D.dBY=new C.xu("Obsidian & Platinum",D.daY,4293256418,4294967295,4294638330,3872378836,D.d2Q)
D.eiA=new B.z(4279896588,4282194463)
D.eiJ=new B.z(4280553487,4279043334)
D.eiR=new B.z(4283048488,4279896588)
D.d2k=w([D.eiA,D.eiJ,D.eiR],x.n)
D.dfW=w(["\u2766","\u273f","\u2727"],x.s)
D.dBV=new C.xu("Rose Gold Velvet",D.d2k,4293440672,4294960345,4294964979,3874214602,D.dfW)
D.ei5=new B.z(4278520340,4279180595)
D.eia=new B.z(4278718495,4278322443)
D.eix=new B.z(4279510591,4278520340)
D.cEU=w([D.ei5,D.eia,D.eix],x.n)
D.d3w=w(["\u269c","\u2736","\u2756"],x.s)
D.dBZ=new C.xu("Midnight Brass",D.cEU,4291405148,4293975208,4294439914,3872837564,D.d3w)
D.ej5=new B.z(4294703086,4293780428)
D.ej1=new B.z(4294307549,4293187253)
D.ej6=new B.z(4294966517,4293977807)
D.cS3=w([D.ej5,D.ej1,D.ej6],x.n)
D.d3V=w(["\u269c","\u265b","\u2726"],x.s)
D.dC1=new C.xu("Ivory Marble & Gold",D.cS3,4289760572,4286209048,4280951062,3863625518,D.d3V)
D.eig=new B.z(4278978566,4280555024)
D.eiw=new B.z(4279504137,4278518530)
D.eiN=new B.z(4281211923,4278978566)
D.cPP=w([D.eig,D.eiw,D.eiN],x.n)
D.ddb=w(["\u2742","\u2726","\u265c"],x.s)
D.dBX=new C.xu("Onyx & Copper",D.cPP,4291856987,4294365880,4294964718,3873885630,D.ddb)
D.cyR=w([D.dC2,D.dC_,D.dBU,D.dBW,D.dC0,D.dBY,D.dBV,D.dBZ,D.dC1,D.dBX],B.ax("O<xu>"))
D.cB8=w([A.aw,D.AF,A.hI],x.O)
D.eqk=new B.z("Original",null)
D.eqs=new B.z("Wide 16:9",1.7777777777777777)
D.esH=new B.z("Landscape 3:2",1.5)
D.epN=new B.z("Photo 4:3",1.3333333333333333)
D.erw=new B.z("Square",1)
D.eDF=new B.z("Portrait 3:4",0.75)
D.auI=w([D.eqk,D.eqs,D.esH,D.epN,D.erw,D.eDF],B.ax("O<+(m,K?)>"))
D.auJ=w([A.hI,A.bW,A.b9,A.bu],x.O)
D.esS=new B.z("","Original")
D.euK=new B.z("circle","Circle")
D.eAN=new B.z("rounded","Rounded")
D.eBH=new B.z("triangle","Triangle")
D.ewO=new B.z("hexagon","Hexagon")
D.ev9=new B.z("diamond","Diamond")
D.etZ=new B.z("arch","Arch")
D.C1=w([D.esS,D.euK,D.eAN,D.eBH,D.ewO,D.ev9,D.etZ],x.L)
D.dx6=new C.lb("classic_blue","Classic Blue","Normal",A.bj,A.c,A.kq,A.di,A.aK)
D.dxm=new C.lb("campus_green","Campus Green","Normal",A.aZ,A.mZ,A.tk,A.h7,A.ei)
D.dxd=new C.lb("warm_sand","Warm Sand","Normal",A.dU,A.hY,A.bL,A.ib,A.nM)
D.dxk=new C.lb("slate_minimal","Slate Minimal","Normal",A.bt,A.aQ,A.aL,A.M,A.aK)
D.dx5=new C.lb("coral_fresh","Coral Fresh","Normal",A.cg,A.iu,A.qL,A.jZ,A.td)
D.dxl=new C.lb("lavender_calm","Lavender Calm","Normal",A.b6,A.pw,A.At,A.pA,A.ja)
D.dx7=new C.lb("ocean_breeze","Ocean Breeze","Normal",A.fc,A.qW,A.t9,A.tf,A.nN)
D.aeN=new B.w(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dxi=new C.lb("berry_pop","Berry Pop","Normal",A.fk,D.aeN,A.kk,G.Xs,A.EQ)
D.dx8=new C.lb("midnight_pro","Midnight Pro","Professional",A.aE,A.M,A.dx,A.kk,A.cr)
D.dxh=new C.lb("executive_navy","Executive Navy","Professional",A.d3,A.ae8,A.di,A.ld,A.bJ)
D.dxf=new C.lb("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bo,A.M,A.aQ,A.cr)
D.dx9=new C.lb("corporate_steel","Corporate Steel","Professional",A.mX,A.M,A.mk,A.f7,A.bJ)
D.dxc=new C.lb("gold_luxe","Gold Luxe","Luxury",A.mW,A.dH,A.oC,A.lI,A.bL)
D.bg5=new B.w(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dxg=new C.lb("rose_gold_elite","Rose Gold Elite","Luxury",A.hi,D.bg5,A.Xg,A.is,A.nI)
D.dxj=new C.lb("platinum_night","Platinum Night","Luxury",A.cr,A.dL,A.bo,A.aQ,A.aL)
D.dxn=new C.lb("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.pD,A.f_,A.pK,A.jz)
D.dx4=new C.lb("royal_purple","Royal Purple","Luxury",A.mY,A.Wq,A.ja,A.kk,A.Ks)
D.dxe=new C.lb("neon_pitch","Neon Pitch","Bold",A.b9,A.dL,A.M,A.b3,A.aL)
D.dxb=new C.lb("crimson_impact","Crimson Impact","Bold",A.bz,A.kp,A.eq,A.tv,A.f5)
D.dxa=new C.lb("sunset_gallery","Sunset Gallery","Bold",A.fl,A.td,A.jZ,A.qL,A.mi)
D.GS=w([D.dx6,D.dxm,D.dxd,D.dxk,D.dx5,D.dxl,D.dx7,D.dxi,D.dx8,D.dxh,D.dxf,D.dx9,D.dxc,D.dxg,D.dxj,D.dxn,D.dx4,D.dxe,D.dxb,D.dxa],B.ax("O<lb>"))
D.cMC=w([A.c_,D.jd],x.O)
D.d2A=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.etL=new B.z("Faces & people",D.d2A)
D.cBc=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.egY=new B.z("Ideas & work",D.cBc)
D.cUu=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.ewT=new B.z("Nature",D.cUu)
D.d2J=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.eqi=new B.z("Places & things",D.d2J)
D.cXN=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eu3=new B.z("Symbols",D.cXN)
D.cMI=w([D.etL,D.egY,D.ewT,D.eqi,D.eu3],B.ax("O<+(m,ai<m>)>"))
D.b7t=new B.w(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cN5=w([A.c_,D.adg,D.b7t],x.O)
D.b1z=new B.ac(0,A.G,A.Kp,A.aGm,40)
D.b1f=new B.ac(0,A.G,A.nK,A.em,8)
D.cNh=w([D.b1z,D.b1f],x.V)
D.cNr=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.cNM=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.av7=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a21=w([A.hI,A.eF,A.bz,A.az,A.cg],x.O)
D.cOy=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.adu=new B.w(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cOJ=w([A.X6,D.adu,A.X6],x.O)
D.cOP=w([A.hZ,D.jd,D.KC],x.O)
D.eq5=new B.z(A.bg,D.a_P)
D.err=new B.z(A.L,D.a_O)
D.elq=new B.z(A.dM,D.a_Q)
D.cPK=w([D.eq5,D.err,D.elq],B.ax("O<+(pZ,a0)>"))
D.cQ=new C.Ix(0,"text")
D.lv=new C.Ix(1,"image")
D.f1=new C.Ix(2,"shape")
D.RI=new C.Ix(3,"pdf")
D.l3=new C.Ix(4,"signature")
D.a4S=new C.Ix(5,"bio")
D.cQC=w([D.cQ,D.lv,D.f1,D.RI,D.l3,D.a4S],B.ax("O<Ix>"))
D.cQD=w([A.bn,A.cF],B.ax("O<Hs>"))
D.cRd=w(["School","Documents","Sign & present"],x.s)
D.b1E=new B.ac(0,A.G,A.afl,A.uu,28)
D.cRx=w([D.b1E],x.V)
D.cRQ=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.PQ=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.avw=w([A.hI,A.EP,A.aL,A.c,A.oD,A.aw],x.O)
D.eD3=new B.z(0.1,0.08)
D.ewR=new B.z(0.3,0.05)
D.ekY=new B.z(0.55,0.1)
D.ep5=new B.z(0.8,0.06)
D.esa=new B.z(0.92,0.16)
D.erG=new B.z(0.2,0.2)
D.epy=new B.z(0.7,0.22)
D.evw=new B.z(0.05,0.4)
D.esz=new B.z(0.95,0.45)
D.elF=new B.z(0.12,0.7)
D.enS=new B.z(0.88,0.75)
D.eo_=new B.z(0.4,0.9)
D.ejl=new B.z(0.65,0.93)
D.eoJ=new B.z(0.25,0.97)
D.eq2=new B.z(0.85,0.9)
D.emu=new B.z(0.5,0.04)
D.cTe=w([D.eD3,D.ewR,D.ekY,D.ep5,D.esa,D.erG,D.epy,D.evw,D.esz,D.elF,D.enS,D.eo_,D.ejl,D.eoJ,D.eq2,D.emu],x.G)
D.cTl=w([A.c,A.hi,A.aR,A.aV],x.O)
D.dYn=new C.jG("office_blue","Office Blue",A.bj,A.di,A.aK,A.c,A.kq)
D.dYy=new C.jG("campus_green","Campus Green",A.aZ,A.h7,A.ei,A.mZ,A.tk)
D.dYo=new C.jG("sunset","Sunset",A.fl,A.jZ,A.nM,A.iu,A.qL)
D.dYp=new C.jG("midnight","Midnight",A.aE,A.kk,A.cr,A.M,A.dx)
D.dYA=new C.jG("classic","Classic",A.d5,A.dH,A.lJ,A.hY,A.h5)
D.dYx=new C.jG("rose_gold","Rose Gold",A.hi,A.xi,A.xg,A.vh,A.AI)
D.dYi=new C.jG("ocean_teal","Ocean Teal",A.fc,A.tf,A.nN,A.qW,A.t9)
D.dYh=new C.jG("slate_pro","Slate Pro",A.bt,A.M,A.aK,A.aQ,A.aL)
D.dYg=new C.jG("neon_night","Neon Night",A.b9,A.b3,A.aL,A.dL,A.M)
D.dYs=new C.jG("lavender","Lavender",A.b6,A.pA,A.ja,A.pw,A.At)
D.dYu=new C.jG("coral","Coral",A.cg,A.jZ,A.td,A.iu,A.mi)
D.dYj=new C.jG("forest","Forest",A.hk,A.dZ,A.cx,A.lK,A.eu)
D.dYk=new C.jG("berry","Berry",A.fk,G.Xs,A.EQ,D.aeN,A.kk)
D.dYr=new C.jG("sand","Sand",A.dU,A.ib,A.nM,A.hY,A.bL)
D.dYw=new C.jG("ice","Ice",A.mX,A.KV,A.aK,A.mU,A.f7)
D.dYm=new C.jG("charcoal","Charcoal",A.ak,A.aQ,A.cr,A.bo,A.M)
D.dYf=new C.jG("mint","Mint",A.aV,A.fx,A.h7,A.lK,A.pK)
D.dYv=new C.jG("crimson","Crimson",A.bz,A.n0,A.kp,A.EN,A.tv)
D.b9Y=new B.w(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dYq=new C.jG("gold","Gold",A.mW,A.v5,A.oC,D.b9Y,A.lI)
D.dYt=new C.jG("aqua","Aqua",A.bO,A.ED,A.oz,A.py,A.oE)
D.dYl=new C.jG("plum","Plum",A.mY,A.xe,A.EQ,A.Es,A.qU)
D.dYz=new C.jG("steel","Steel",A.d3,A.di,A.bo,A.kq,A.ld)
D.a2h=w([D.dYn,D.dYy,D.dYo,D.dYp,D.dYA,D.dYx,D.dYi,D.dYh,D.dYg,D.dYs,D.dYu,D.dYj,D.dYk,D.dYr,D.dYw,D.dYm,D.dYf,D.dYv,D.dYq,D.dYt,D.dYl,D.dYz],B.ax("O<jG>"))
D.cTG=w([A.c_,A.jf],x.O)
D.RK=new C.hz(10,"rotate3d")
D.HP=new C.hz(8,"flip")
D.aFQ=new C.hz(19,"spiral")
D.qe=new C.hz(16,"bounce")
D.aFT=new C.hz(9,"flipVertical")
D.cTH=w([D.RK,D.HP,D.aFQ,D.qe,D.aFT],x.i)
D.e7=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cU1=w([0.62,1],x.x)
D.cUC=w([0,0.32,0.68,1],x.x)
D.mG=new C.hz(6,"zoom")
D.uo=new C.hz(4,"slideUp")
D.un=new C.hz(2,"slideLeft")
D.cUL=w([D.mG,D.HP,D.uo,D.RK,D.un],x.i)
D.cVf=w([A.bW,A.hi,A.is,A.hI,A.c],x.O)
D.b1u=new B.ac(0,A.G,D.adI,A.uu,30)
D.cVX=w([D.b1u],x.V)
D.e72=new B.u(0,-2.5)
D.e6T=new B.u(-2.5,0)
D.e5B=new B.u(2.5,0)
D.cW_=w([A.S_,A.a5e,A.aGS,A.a5d,D.e72,I.aGO,D.e6T,D.e5B],x.dN)
D.H_=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cWs=w([23,114,69,56,80,144],x.t)
D.cWU=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cXj=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cYT=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cYX=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bf=new C.uD(0,"rectangle")
D.eL=new C.uD(1,"circle")
D.l4=new C.uD(6,"hexagon")
D.cZ9=w([D.bf,D.eL,D.l4],x.m)
D.oa=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aeU=new B.w(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cZI=w([D.aeU,A.dZ],x.O)
D.el8=new B.z("","Classic")
D.ejA=new B.z("caps","Bold caps")
D.evz=new B.z("elegant","Elegant")
D.eB5=new B.z("shadow","Shadow")
D.epr=new B.z("neon","Neon glow")
D.ezJ=new B.z("outline","Outline")
D.eyV=new B.z("marker","Highlighter")
D.eBg=new B.z("stamp","Stamp")
D.eAI=new B.z("retro","Retro")
D.eop=new B.z("threed","3D")
D.ew5=new B.z("fire","Fire")
D.ex2=new B.z("ice","Ice")
D.euJ=new B.z("chalk","Chalk")
D.euO=new B.z("comic","Comic")
D.eBi=new B.z("sunset","Sunset")
D.eCq=new B.z("softglow","Soft glow")
D.ey0=new B.z("lowercase","Lowercase")
D.evg=new B.z("double","Echo")
D.eCz=new B.z("whisper","Whisper")
D.awp=w([D.el8,D.ejA,D.evz,D.eB5,D.epr,D.ezJ,D.eyV,D.eBg,D.eAI,D.eop,I.aM0,D.ew5,D.ex2,D.euJ,D.euO,A.a60,D.eBi,D.eCq,D.ey0,D.evg,D.eCz],x.L)
D.d_Y=w([3,5,7,10,12,15],x.t)
D.d1i=w([A.bW,A.bL,A.c,A.eA,A.cs],x.O)
D.doL=new C.tf(10,"cardWorld")
D.Cu=new C.Bk(3,"rounded")
D.dF3=new C.le("world","NGMY World",D.doL,D.Cu,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.doM=new C.tf(11,"cardSplit")
D.dF_=new C.le("business","Business Wire",D.doM,D.Cu,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.doN=new C.tf(12,"cardBreaking")
D.dFc=new C.le("breaking","Breaking Red",D.doN,D.Cu,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.doO=new C.tf(13,"cardFeature")
D.dF5=new C.le("feature","Tech Feature",D.doO,D.Cu,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aEm=new C.tf(6,"circle")
D.aEg=new C.Bk(4,"circle")
D.dF9=new C.le("parchment","Royal Circle",D.aEm,D.aEg,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dEZ=new C.le("ocean","Blue Ocean",D.aEm,D.aEg,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.doR=new C.tf(7,"rail")
D.aEf=new C.Bk(1,"double")
D.dF0=new C.le("forest","Green Leaf",D.doR,D.aEf,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aEj=new C.tf(1,"sideBySide")
D.dFe=new C.le("herald","NGMY Herald",D.aEj,D.Cu,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aEi=new C.tf(0,"classic")
D.a44=new C.Bk(9,"shadow")
D.dFd=new C.le("daily","The Daily",D.aEi,D.a44,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.doP=new C.tf(2,"splash")
D.aEh=new C.Bk(6,"cutCorner")
D.dEY=new C.le("tabloid","Big Tabloid",D.doP,D.aEh,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aEn=new C.tf(9,"minimal")
D.dF8=new C.le("modern","Modern Digest",D.aEn,D.Cu,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aEk=new C.tf(3,"magazine")
D.aEe=new C.Bk(0,"plain")
D.dF4=new C.le("midnight","Midnight Edition",D.aEk,D.aEe,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.doS=new C.tf(8,"banner")
D.dF6=new C.le("metro","Metro Wire",D.doS,D.aEh,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.doK=new C.Bk(8,"arch")
D.dF7=new C.le("sunrise","Sunrise Post",D.aEk,D.doK,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aEl=new C.tf(5,"scrapbook")
D.doJ=new C.Bk(5,"tape")
D.dF2=new C.le("neon","Neon Beat",D.aEl,D.doJ,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.doQ=new C.tf(4,"wrap")
D.dFf=new C.le("gold","Golden Press",D.doQ,D.a44,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dFg=new C.le("minimal","Paper White",D.aEn,D.a44,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dF1=new C.le("gazette","Fresh Gazette",D.aEi,D.aEf,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dFb=new C.le("times","Classic Times",D.aEj,D.aEe,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Rg=new C.Bk(2,"polaroid")
D.dFa=new C.le("scrapbook","Memory Scrapbook",D.aEl,D.Rg,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a2w=w([D.dF3,D.dF_,D.dFc,D.dF5,D.dF9,D.dEZ,D.dF0,D.dFe,D.dFd,D.dEY,D.dF8,D.dF4,D.dF6,D.dF7,D.dF2,D.dFf,D.dFg,D.dF1,D.dFb,D.dFa],B.ax("O<le>"))
D.d1u=w([0.45,1],x.x)
D.H1=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.d1S=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.fZZ=new C.ou("Original",0,1,1,0,0,0)
D.h_2=new C.ou("Black & white",0,1.1,0,0,0,0)
D.fZQ=new C.ou("Noir",-0.05,1.55,0,0,0,0)
D.fZU=new C.ou("Sepia",0,1,0.25,0.9,0,0)
D.fZT=new C.ou("Vivid",0,1.15,1.6,0,0,0)
D.fZM=new C.ou("Pop",0,1.3,1.9,0,0,0)
D.fZO=new C.ou("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.h__=new C.ou("Matte",0,0.9,0.85,0,0,0.55)
D.fZV=new C.ou("Cool",0,1.05,1,-0.8,0,0)
D.h_1=new C.ou("Warm",0.03,1.05,1.1,0.8,0,0)
D.fZN=new C.ou("Golden hour",0.04,1,1.25,1,0,0)
D.fZS=new C.ou("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.h_0=new C.ou("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.fZR=new C.ou("Dramatic",-0.05,1.5,1.2,0,0,0)
D.fZX=new C.ou("Retro",0,0.9,0.7,0.4,0,0.35)
D.fZW=new C.ou("Forest",0,1,1.2,-0.1,-0.45,0)
D.fZY=new C.ou("Rose",0,1,1.1,0.3,0.4,0)
D.fZP=new C.ou("Ocean",0,1,1.2,-0.5,-0.2,0)
D.d1T=w([D.fZZ,D.h_2,D.fZQ,D.fZU,D.fZT,D.fZM,D.fZO,D.h__,D.fZV,D.h_1,D.fZN,D.fZS,D.h_0,D.fZR,D.fZX,D.fZW,D.fZY,D.fZP],B.ax("O<ou>"))
D.b6U=new B.w(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.d1U=w([D.aeU,A.dZ,D.b6U],x.O)
D.egR=new B.z(0.12,0.3)
D.exd=new B.z(0.26,0.75)
D.evv=new B.z(0.8,0.22)
D.eBq=new B.z(0.9,0.7)
D.ey_=new B.z(0.5,0.15)
D.ezL=new B.z(0.65,0.85)
D.emZ=new B.z(0.08,0.85)
D.d25=w([D.egR,D.exd,D.evv,D.eBq,D.ey_,D.ezL,D.emZ],x.G)
D.awB=w([A.b9,A.bW,A.bu,A.b1],x.O)
D.d2U=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.d35=w([A.c,A.f7,A.dv,A.v7],x.O)
D.baa=new B.w(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.d43=w([D.baa,D.adu],x.O)
D.d44=w([A.v9,A.aw],x.O)
D.d4j=w([0,0.25,0.75,1],x.x)
D.d4l=w([A.x6,A.oD],x.O)
D.aFq=new C.kS(10,"kenteSunset")
D.h3s=w([D.adU,A.jU,A.aw],x.O)
D.dAk=new C.jo("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aFq,4294964964,4282000405,4279983648,D.jM)
D.aFr=new C.kS(11,"indigoMudcloth")
D.b7R=new B.w(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.h3G=w([D.b7R,A.adr,A.hZ],x.O)
D.dAs=new C.jo("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aFr,4294439140,4279903102,4279903102,D.jM)
D.aFs=new C.kS(12,"adinkraRoyal")
D.bkI=new B.w(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.h3H=w([D.acp,D.bkI,A.aw],x.O)
D.dAu=new C.jo("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aFs,4294965484,4285218591,4287322667,D.jM)
D.aFt=new C.kS(13,"nileLotus")
D.bh_=new B.w(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.bdL=new B.w(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.h3M=w([D.bh_,D.bdL,A.hZ],x.O)
D.dAt=new C.jo("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aFt,4294244340,4279196764,4279196764,D.jM)
D.aFu=new C.kS(14,"shweshweIvory")
D.bc0=new B.w(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.baS=new B.w(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b8j=new B.w(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.h3t=w([D.bc0,D.baS,D.b8j],x.O)
D.dAp=new C.jo("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aFu,4294505710,4279970378,4291058750,D.jM)
D.rx=new C.kS(15,"certIvoryNavy")
D.h3r=w([D.Li,D.jd,A.hZ],x.O)
D.aEW=new C.xs(1,"ringsNdoa")
D.dAm=new C.jo("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.rx,4294966259,4279378237,4291404327,D.aEW)
D.a4A=new C.xs(2,"coupleCards")
D.dAh=new C.jo("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.rx,4294966259,4279378237,4291404327,D.a4A)
D.Cx=new C.kS(18,"certIvoryNavyBar")
D.aco=new B.w(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.h3F=w([D.aco,D.jd,A.hZ],x.O)
D.aEX=new C.xs(3,"kuhoweshaForm")
D.dAf=new C.jo("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.Cx,4294966519,4279378237,4291404327,D.aEX)
D.adG=new B.w(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.h3Z=w([D.Li,D.adG,A.hZ],x.O)
D.a4B=new C.xs(4,"mahariPande")
D.dAi=new C.jo("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.rx,4294966259,4279904068,4291404327,D.a4B)
D.aFv=new C.kS(16,"certIvoryGreen")
D.bbr=new B.w(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.h3v=w([A.Ku,D.bbr,A.hZ],x.O)
D.aEY=new C.xs(5,"familiaMti")
D.dAo=new C.jo("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aFv,4294966776,4280241466,4291404327,D.aEY)
D.a4C=new C.xs(6,"ndoaSafi")
D.dAg=new C.jo("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.Cx,4294966519,4279378237,4291404327,D.a4C)
D.bft=new B.w(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.h3y=w([D.Li,A.hZ,D.bft],x.O)
D.a4D=new C.xs(7,"peteWide")
D.dAl=new C.jo("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.rx,4294966259,4282001936,4291404327,D.a4D)
D.dAv=new C.xs(8,"muhuriCrest")
D.dAe=new C.jo("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.rx,4294966259,4279378237,4291404327,D.dAv)
D.h3I=w([D.aco,D.adG,A.hZ],x.O)
D.dAw=new C.xs(9,"fomuWazi")
D.dAr=new C.jo("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.Cx,4294966519,4279904068,4291404327,D.dAw)
D.aFw=new C.kS(17,"certIvoryRose")
D.bc4=new B.w(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.h3L=w([D.bc4,D.aex,A.hZ],x.O)
D.a4z=new C.xs(10,"upendoOrnate")
D.dAn=new C.jo("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aFw,4294965493,4286200650,4291404327,D.a4z)
D.d4K=w([D.dAk,D.dAs,D.dAu,D.dAt,D.dAp,D.dAm,D.dAh,D.dAf,D.dAi,D.dAo,D.dAg,D.dAl,D.dAe,D.dAr,D.dAn],x.h)
D.e8=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.HQ=new C.vV(0,"emojis")
D.CE=new C.vV(1,"pictures")
D.HR=new C.vV(2,"icons3d")
D.a4U=new C.vV(3,"animations")
D.RM=new C.vV(4,"videoMotion")
D.CF=new C.vV(5,"luxe")
D.a2E=w([D.HQ,D.CE,D.HR,D.a4U,D.RM,D.CF],B.ax("O<vV>"))
D.eAl=new B.z(A.dX,"Looks")
D.eoZ=new B.z(A.yt,"Light")
D.eoW=new B.z(A.ni,"Colour")
D.en_=new B.z(A.y4,"Effects")
D.akR=new B.a0(63112,"MaterialIcons",!1)
D.ejQ=new B.z(D.akR,"Crop")
D.d5d=w([D.eAl,D.eoZ,D.eoW,D.en_,D.ejQ],x.f2)
D.d5Q=w([],x.D)
D.h3W=w([],x.L)
D.enc=new B.z("Flashcard",D.HL)
D.eqU=new B.z("Quiz",D.HM)
D.esN=new B.z("Worksheet",D.HN)
D.epY=new B.z("Notes",D.mF)
D.erp=new B.z("Section",D.CC)
D.d6u=w([D.enc,D.eqU,D.esN,D.epY,D.erp],B.ax("O<+(m,mx)>"))
D.dCc=new C.kS(6,"beadedPearl")
D.bep=new B.w(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.h4_=w([H.Xf,D.bep,A.hZ],x.O)
D.aEU=new C.jo("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dCc,4294966774,4286209070,4291404327,D.jM)
D.dCd=new C.kS(7,"artDeco")
D.bie=new B.w(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.bl_=new B.w(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.h3Y=w([D.bie,D.bl_,A.c_],x.O)
D.aEV=new C.jo("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dCd,4294440434,4280228630,4290283019,D.jM)
D.dCe=new C.kS(8,"rosetteCorners")
D.bka=new B.w(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.bae=new B.w(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.bek=new B.w(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.h3B=w([D.bka,D.bae,D.bek],x.O)
D.aET=new C.jo("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dCe,4294702831,4285218602,4291394365,D.jM)
D.dCf=new C.kS(9,"modernLedger")
D.h3A=w([A.c,D.jd,D.jd],x.O)
D.aES=new C.jo("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dCf,4294967295,4279378237,4279378237,D.jM)
D.d6y=w([D.aEU,D.aEV,D.aET,D.aES],x.h)
D.d6G=w([A.is,A.oD],x.O)
D.cm=new C.hz(0,"none")
D.dd=new C.hz(1,"fade")
D.HO=new C.hz(3,"slideRight")
D.aFS=new C.hz(5,"slideDown")
D.dWS=new C.hz(7,"zoomOut")
D.a4T=new C.hz(11,"cube")
D.dWN=new C.hz(12,"blur")
D.aFP=new C.hz(13,"dissolve")
D.dWO=new C.hz(14,"wipeLeft")
D.dWP=new C.hz(15,"wipeRight")
D.RL=new C.hz(17,"push")
D.dWQ=new C.hz(18,"flash")
D.aFR=new C.hz(20,"swing")
D.dWR=new C.hz(21,"curtain")
D.Qo=w([D.cm,D.dd,D.un,D.HO,D.uo,D.aFS,D.mG,D.dWS,D.HP,D.aFT,D.RK,D.a4T,D.dWN,D.aFP,D.dWO,D.dWP,D.qe,D.RL,D.dWQ,D.aFQ,D.aFR,D.dWR],x.i)
D.Qp=w([D.a4y,D.a4w,D.a4p,D.a4q,D.a4r,D.a4u,D.a4s,D.a4t,D.a4x,D.a4v,D.aEU,D.aEV,D.aET,D.aES],x.h)
D.d77=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.d7b=w([A.Ax,A.hI,A.c_],x.O)
D.eoj=new B.z(A.tW,"Design")
D.eBQ=new B.z(D.al8,"Word sizes")
D.exK=new B.z(A.BK,"Text")
D.bF4=new B.a0(983182,"MaterialIcons",!1)
D.exO=new B.z(D.bF4,"Photo")
D.ejo=new B.z(A.lq,"Logo")
D.eD1=new B.z(A.Gl,"News")
D.d7g=w([D.eoj,D.eBQ,D.exK,D.exO,D.ejo,D.eD1],x.f2)
D.d7h=w(["golddust","sparkle","sheen"],x.s)
D.dYe=new C.eu("upload_pdf",L.NG,"Upload PDF")
D.dXo=new C.eu("sign_paper",A.Gi,"Sign Paper")
D.bEk=new B.a0(63438,"MaterialIcons",!1)
D.dYa=new C.eu("hd_photo",D.bEk,"HD Photo")
D.dXg=new C.eu("sharpen",E.a_A,"Sharpen")
D.dXq=new C.eu("print",L.NG,"Download PDF")
D.dXS=new C.eu("rotate",D.akR,"Rotate")
D.dXz=new C.eu("text_box",A.BK,"Text Box")
D.dXB=new C.eu("picture",A.u_,"Picture")
D.dXx=new C.eu("title",A.yn,"Title")
D.dXt=new C.eu("subtitle",T.alI,"Subtitle")
D.dY0=new C.eu("bullets",K.a_R,"Bullet List")
D.dXu=new C.eu("numbered",A.Nv,"Numbered")
D.dY3=new C.eu("quote",A2.BB,"Quote")
D.dXG=new C.eu("citation",A.o3,"Citation")
D.dY6=new C.eu("date_stamp",Ah.a_F,"Date Stamp")
D.dXU=new C.eu("page_number",A.ym,"Page #")
D.dXY=new C.eu("header_bar",A.BM,"Header")
D.dXA=new C.eu("footer_bar",Aq.a0m,"Footer")
D.dXp=new C.eu("divider",A.tZ,"Divider")
D.dXl=new C.eu("highlight",A.a_X,"Highlight")
D.dY_=new C.eu("redact",A.yq,"Redact")
D.dXN=new C.eu("callout",A.Bx,"Callout")
D.dY8=new C.eu("checkboxes",K.ak6,"Checklist")
D.dXK=new C.eu("table",A.a0j,"Table")
D.dXE=new C.eu("memo",K.a06,"Memo")
D.dXO=new C.eu("letter",A.G7,"Letter")
D.bDX=new B.a0(63259,"MaterialIcons",!0)
D.dXf=new C.eu("agenda",D.bDX,"Agenda")
D.dXr=new C.eu("toc",AA.alk,"Contents")
D.bEg=new B.a0(63406,"MaterialIcons",!1)
D.dXL=new C.eu("sig_line",D.bEg,"Sign Line")
D.dX8=new C.eu("initial_line",A.jn,"Initials")
D.dXb=new C.eu("approved",A.lq,"APPROVED")
D.dXQ=new C.eu("draft",A.oV,"DRAFT")
D.dXW=new C.eu("confidential",A.jo,"Confidential")
D.dXZ=new C.eu("sticky",A.NN,"Sticky Note")
D.dY7=new C.eu("progress",A.alj,"Progress")
D.bFy=new B.a0(983507,"MaterialIcons",!1)
D.dXm=new C.eu("stars",D.bFy,"Star Rating")
D.dX6=new C.eu("equation",A.ala,"Equation")
D.dXh=new C.eu("timeline",A.NP,"Timeline")
D.dXF=new C.eu("two_col",A.a0n,"Two Columns")
D.dXj=new C.eu("compare",A1.a_I,"Compare")
D.dX4=new C.eu("duplicate_el",A.fM,"Duplicate")
D.dYc=new C.eu("delete_el",A.e6,"Delete")
D.dY2=new C.eu("bring_fwd",H.al4,"Bring Front")
D.dX9=new C.eu("send_back",H.al3,"Send Back")
D.dXP=new C.eu("align_left",D.a_P,"Align L")
D.dXV=new C.eu("align_center",D.a_O,"Align C")
D.dYb=new C.eu("align_right",D.a_Q,"Align R")
D.dXy=new C.eu("word_count",A_.a_j,"Word Count")
D.dXv=new C.eu("link_text",A.hp,"Link")
D.dXT=new C.eu("phone",A.iE,"Phone")
D.dXk=new C.eu("email",A.Bz,"Email")
D.dYd=new C.eu("qr_placeholder",A.jq,"QR Placeholder")
D.dXe=new C.eu("rectangle",A3.vF,"Rectangle")
D.dXJ=new C.eu("circle",A.r9,"Circle")
D.dXa=new C.eu("arrow",A.iY,"Arrow")
D.dY1=new C.eu("line",A.tZ,"Line")
D.dXn=new C.eu("triangle",A.a_G,"Triangle")
D.bE4=new B.a0(63318,"MaterialIcons",!1)
D.dXs=new C.eu("grayscale",D.bE4,"Grayscale")
D.dXC=new C.eu("brighten",K.akq,"Brighten")
D.dXH=new C.eu("flip_h",A.FX,"Flip H")
D.bEb=new B.a0(63348,"MaterialIcons",!1)
D.dY9=new C.eu("flip_v",D.bEb,"Flip V")
D.dXX=new C.eu("cover_page",A.pW,"Cover Page")
D.dX7=new C.eu("invoice",A.hb,"Invoice")
D.dXi=new C.eu("resume",A.ms,"Resume")
D.dXw=new C.eu("minutes",A.oP,"Minutes")
D.dXc=new C.eu("lab_report",A.NJ,"Lab Report")
D.dXd=new C.eu("rubric",A.tX,"Rubric")
D.dXI=new C.eu("flashcard_tool",V.Gf,"Flashcard")
D.dY4=new C.eu("quiz_tool",A.Gc,"Quiz Block")
D.dXM=new C.eu("worksheet_tool",M.FN,"Worksheet")
D.dXR=new C.eu("outline_share",A.NL,"Share Outline")
D.dY5=new C.eu("export_json",D.akc,"Export JSON")
D.dX5=new C.eu("new_slide",D.a_i,"New Slide")
D.dXD=new C.eu("present",A.q1,"Present")
D.d7I=w([D.dYe,D.dXo,D.dYa,D.dXg,D.dXq,D.dXS,D.dXz,D.dXB,D.dXx,D.dXt,D.dY0,D.dXu,D.dY3,D.dXG,D.dY6,D.dXU,D.dXY,D.dXA,D.dXp,D.dXl,D.dY_,D.dXN,D.dY8,D.dXK,D.dXE,D.dXO,D.dXf,D.dXr,D.dXL,D.dX8,D.dXb,D.dXQ,D.dXW,D.dXZ,D.dY7,D.dXm,D.dX6,D.dXh,D.dXF,D.dXj,D.dX4,D.dYc,D.dY2,D.dX9,D.dXP,D.dXV,D.dYb,D.dXy,D.dXv,D.dXT,D.dXk,D.dYd,D.dXe,D.dXJ,D.dXa,D.dY1,D.dXn,D.dXs,D.dXC,D.dXH,D.dY9,D.dXX,D.dX7,D.dXi,D.dXw,D.dXc,D.dXd,D.dXI,D.dY4,D.dXM,D.dXR,D.dY5,D.dX5,D.dXD],B.ax("O<eu>"))
D.d7T=w([A.cr,A.ak],x.O)
D.eiX=new B.z(4286331629,4292552567)
D.eiK=new B.z(4280640491,4278630100)
D.ej4=new B.z(4294538006,4292943176)
D.ei6=new B.z(4278556265,4280640491)
D.d2f=w([D.eiX,D.eiK,D.ej4,D.ei6],x.n)
D.crw=w([4294626325,4280472558,4294210230],x.t)
D.dX_=new C.nJ("colorful","Colorful",A.ni,D.d2f,4294967295,3875536895,D.crw,D.mG)
D.eiy=new B.z(4279522093,4279657780)
D.eiO=new B.z(4281750292,4283268111)
D.ei9=new B.z(4278603323,4279203438)
D.eiP=new B.z(4282343954,4279599165)
D.cCp=w([D.eiy,D.eiO,D.ei9,D.eiP],x.n)
D.cre=w([4288931381,4294829706,4287033260],x.t)
D.dWW=new C.nJ("nature","Nature",A.Gj,D.cCp,4294442727,3874290891,D.cre,D.dd)
D.eis=new B.z(4279369771,4283178389)
D.eip=new B.z(4279179050,4286456526)
D.eiG=new B.z(4280163147,4290648157)
D.ehZ=new B.z(4278322711,4285343961)
D.cTU=w([D.eis,D.eip,D.eiG,D.ehZ],x.n)
D.crs=w([4294210230,4280472558,4289170426],x.t)
D.dWU=new C.nJ("vibe","Vibe",A.a_V,D.cTU,4294967295,3874869502,D.crs,D.un)
D.ej0=new B.z(4290007817,4292552567)
D.eiV=new B.z(4286328082,4294286859)
D.ej_=new B.z(4288485197,4294538006)
D.eiU=new B.z(4285343961,4293675161)
D.bYC=w([D.ej0,D.eiV,D.ej_,D.eiU],x.n)
D.crx=w([4294829706,4294967295,4284999929],x.t)
D.dWV=new C.nJ("celebration","Celebration",A.ll,D.bYC,4294967295,4009752557,D.crx,D.qe)
D.ein=new B.z(4279179050,4280171146)
D.eir=new B.z(4279310375,4280232247)
D.eif=new B.z(4278916151,4280172719)
D.eio=new B.z(4279179050,4281549141)
D.cMZ=w([D.ein,D.eir,D.eif,D.eio],x.n)
D.cr9=w([4281908728,4294626325,4287931320],x.t)
D.dWZ=new C.nJ("professional","Professional",A.Bv,D.cMZ,4294967295,3872118241,D.cr9,D.RL)
D.eij=new B.z(4278995566,4278413729)
D.eib=new B.z(4278727492,4279137424)
D.eiH=new B.z(4280171146,4278751666)
D.eik=new B.z(4278995566,4279590517)
D.cvj=w([D.eij,D.eib,D.eiH,D.eik],x.n)
D.crc=w([4286436348,4284410580,4294829706],x.t)
D.dX0=new C.nJ("ocean","Ocean",K.a0p,D.cvj,4294967295,3873501950,D.crc,D.uo)
D.eiW=new B.z(4286328082,4294538006)
D.eiY=new B.z(4286781507,4294677052)
D.eiS=new B.z(4283178389,4294197086)
D.eiZ=new B.z(4288295954,4294688548)
D.cJb=w([D.eiW,D.eiY,D.eiS,D.eiZ],x.n)
D.cry=w([4294829706,4294967295,4294747557],x.t)
D.dX1=new C.nJ("sunset","Sunset",A.NR,D.cJb,4294967295,4009749973,D.cry,D.dd)
D.ej8=new B.z(4294967295,4294047225)
D.ej3=new B.z(4294507260,4294967295)
D.ej7=new B.z(4294967295,4293060848)
D.ej2=new B.z(4294507260,4294047225)
D.cX_=w([D.ej8,D.ej3,D.ej7,D.ej2],x.n)
D.cr7=w([4280640491,4279179050,4287931320],x.t)
D.dWY=new C.nJ("minimal","Minimal",A3.vF,D.cX_,4279179050,4282865001,D.cr7,D.dd)
D.eii=new B.z(4278979081,4280886564)
D.eiC=new B.z(4280031511,4278979081)
D.eiq=new B.z(4279308561,4281148438)
D.eih=new B.z(4278979081,4280031511)
D.d9O=w([D.eii,D.eiC,D.eiq,D.eih],x.n)
D.crl=w([4292128567,4294829706,4289241758],x.t)
D.dX2=new C.nJ("elegant","Elegant",A.lU,D.d9O,4294898631,3873957348,D.crl,D.aFP)
D.eiE=new B.z(4280159034,4282058596)
D.eie=new B.z(4278916151,4280163147)
D.eiM=new B.z(4281208933,4278916151)
D.eiv=new B.z(4279502891,4283178389)
D.dgw=w([D.eiE,D.eie,D.eiM,D.eiv],x.n)
D.cru=w([4294296657,4292128567,4291081725],x.t)
D.dWX=new C.nJ("royal","Royal Gold",A.j_,D.dgw,4294965222,3874084351,D.cru,D.mG)
D.ei3=new B.z(4278464302,4280163147)
D.eid=new B.z(4278916151,4279455306)
D.eiF=new B.z(4280163147,4283040846)
D.ei0=new B.z(4278332450,4281413249)
D.d1X=w([D.ei3,D.eid,D.eiF,D.ei0],x.n)
D.cr8=w([4281193663,4289170426,4294210230],x.t)
D.dX3=new C.nJ("aurora","Aurora Glow",A.dX,D.d1X,4293983738,3869766608,D.cr8,D.dd)
D.w0=w([D.dX_,D.dWW,D.dWU,D.dWV,D.dWZ,D.dX0,D.dX1,D.dWY,D.dX2,D.dWX,D.dX3],B.ax("O<nJ>"))
D.beU=new B.w(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.d8p=w([A.qO,D.beU,A.qO],x.O)
D.d8H=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.d8L=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.exD=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.enU=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.esn=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.efN=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.er2=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.epj=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.etA=new B.z("Surprise me","")
D.d9g=w([D.exD,D.enU,D.esn,D.efN,D.er2,D.epj,D.etA],x.L)
D.b8l=new B.w(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.biJ=new B.w(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.da0=w([A.c,D.b8l,D.biJ],x.O)
D.dbW=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aFo=new C.kS(0,"heritageGold")
D.bdA=new B.w(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.h40=w([D.bdA,W.adR,A.aw],x.O)
D.dAq=new C.jo("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aFo,4294570461,4284234270,4292128567,D.jM)
D.aFp=new C.kS(1,"heritageCrimson")
D.b6Q=new B.w(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.bc1=new B.w(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.biz=new B.w(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.h3E=w([D.b6Q,D.bc1,D.biz],x.O)
D.dAj=new C.jo("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aFp,4294635750,4285213214,4292912216,D.jM)
D.dc_=w([D.a4y,D.a4w,D.dAq,D.dAj,D.a4r,D.a4u],x.h)
D.dGj=new C.rr(1,"circuit")
D.dGM=new C.m6("neural","Neural Link","Robotic",D.dGj,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dGi=new C.rr(0,"grid")
D.dGJ=new C.m6("signal","Signal Grid","Robotic",D.dGi,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dGo=new C.rr(2,"hexes")
D.dGu=new C.m6("core","Core Protocol","Robotic",D.dGo,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aFM=new C.rr(11,"diagonal")
D.dGF=new C.m6("steel","Steel Tech","Robotic",D.aFM,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aFN=new C.rr(3,"rings")
D.dGt=new C.m6("vault","Vault Gold","Robotic",D.aFN,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dGm=new C.rr(13,"leaves")
D.dGw=new C.m6("forest","Forest Morning","Nature",D.dGm,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aFO=new C.rr(5,"waves")
D.dGD=new C.m6("ocean","Ocean Calm","Nature",D.aFO,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dGp=new C.rr(6,"sunset")
D.dGI=new C.m6("sunset","Sunset Glow","Nature",D.dGp,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dGq=new C.rr(7,"mountains")
D.dGv=new C.m6("mountain","Mountain Air","Nature",D.dGq,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dGr=new C.rr(8,"stars")
D.dGC=new C.m6("night","Night Sky","Nature",D.dGr,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a4R=new C.rr(4,"orbs")
D.dGA=new C.m6("aurora","Aurora","Nature",D.a4R,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dGK=new C.m6("sand","Sand Dune","Nature",D.aFO,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dGs=new C.rr(9,"rays")
D.dGz=new C.m6("golden","Golden Hour","Warm",D.dGs,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dGx=new C.m6("royal","Royal Purple","Warm",D.aFM,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dGy=new C.m6("rose","Rose Petal","Warm",D.a4R,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dGl=new C.rr(12,"blocks")
D.dGB=new C.m6("electric","Electric Blue","Bold",D.dGl,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dGL=new C.m6("mint","Fresh Mint","Bold",D.a4R,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dGn=new C.rr(14,"minimal")
D.dGH=new C.m6("white","Clean White","Clean",D.dGn,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dGk=new C.rr(10,"frame")
D.dGE=new C.m6("midnight","Midnight Gold","Clean",D.dGk,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dGG=new C.m6("community","Community Green","Clean",D.aFN,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a37=w([D.dGM,D.dGJ,D.dGu,D.dGF,D.dGt,D.dGw,D.dGD,D.dGI,D.dGv,D.dGC,D.dGA,D.dGK,D.dGz,D.dGx,D.dGy,D.dGB,D.dGL,D.dGH,D.dGE,D.dGG],B.ax("O<m6>"))
D.dcm=w([D.AF,A.v9,A.hI,A.c_],x.O)
D.dcD=w([D.aeH,D.jd],x.O)
D.dcO=w(["pdf","docx","txt","md"],x.s)
D.eGx=new B.bm(-3,150,34)
D.eGy=new B.bm(-3,214,62)
D.eGz=new B.bm(-3,288,62)
D.ddD=w([D.eGx,D.eGy,D.eGz],B.ax("O<+(K,K,K)>"))
D.de6=w(["rays","bokeh","aurora","spotlight"],x.s)
D.deI=w(["Write","Design","Print & fold"],x.s)
D.jN=new C.uD(2,"triangle")
D.CD=new C.uD(3,"arrow")
D.fs=new C.uD(4,"line")
D.jO=new C.uD(5,"parallelogram")
D.deL=w([D.bf,D.eL,D.jN,D.CD,D.fs,D.jO,D.l4],x.m)
D.eh5=new B.z(240,96)
D.ejI=new B.z(560,46)
D.deQ=w([D.eh5,D.ejI],x.G)
D.h4b=new C.xv(0,"classic")
D.dCi=new C.nF("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aFo,4294570461,4282000405,4284234270)
D.dCu=new C.nF("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aFp,4294635750,4281999378,4285213214)
D.dCj=new C.nF("elegant_navy","Umoja Mzuri",y.s,D.a4L,4294967035,4279378237,4290283019)
D.dCw=new C.nF("elegant_gold","Umoja wa Dhahabu",y.Q,D.aFx,4294966515,4281016592,4289102906)
D.dCy=new C.nF("kente_sunset","Kente ya Jua",y.H,D.aFq,4294964964,4282000405,4279983648)
D.dCg=new C.nF("indigo_mudcloth","Nguo ya Indigo",y.n,D.aFr,4294439140,4279903102,4279903102)
D.dCl=new C.nF("adinkra_royal","Muhuri wa Adinkra",y.z,D.aFs,4294965484,4285218591,4287322667)
D.dCq=new C.nF("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aFt,4294244340,4279196764,4279196764)
D.dCs=new C.nF("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aFu,4294505710,4279970378,4291058750)
D.h4c=new C.xv(1,"ringsNdoa")
D.dCk=new C.nF("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.rx,4294966259,4279378237,4291404327)
D.h4e=new C.xv(2,"coupleCards")
D.dCv=new C.nF("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.rx,4294966259,4279378237,4291404327)
D.h4f=new C.xv(3,"kuhoweshaForm")
D.dCr=new C.nF("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.Cx,4294966519,4279378237,4291404327)
D.h4g=new C.xv(4,"mahariPande")
D.dCh=new C.nF("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.rx,4294966259,4279904068,4291404327)
D.h4h=new C.xv(5,"familiaMti")
D.dCx=new C.nF("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aFv,4294966776,4280241466,4291404327)
D.h4i=new C.xv(6,"ndoaSafi")
D.dCo=new C.nF("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.Cx,4294966519,4279378237,4291404327)
D.h4j=new C.xv(7,"peteWide")
D.dCn=new C.nF("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.rx,4294966259,4282001936,4291404327)
D.h4k=new C.xv(8,"muhuriCrest")
D.dCm=new C.nF("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.rx,4294966259,4279378237,4291404327)
D.h4l=new C.xv(9,"fomuWazi")
D.dCp=new C.nF("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.Cx,4294966519,4279904068,4291404327)
D.h4d=new C.xv(10,"upendoOrnate")
D.dCt=new C.nF("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aFw,4294965493,4286200650,4291404327)
D.QD=w([D.dCi,D.dCu,D.dCj,D.dCw,D.dCy,D.dCg,D.dCl,D.dCq,D.dCs,D.dCk,D.dCv,D.dCr,D.dCh,D.dCx,D.dCo,D.dCn,D.dCm,D.dCp,D.dCt],B.ax("O<nF>"))
D.CB=new C.aqH(0,"landscape169")
D.oe=new C.aqH(1,"portrait916")
D.dfB=w([D.CB,D.oe],B.ax("O<aqH>"))
D.ay6=w([A.hI,A.bL,A.cs,A.is,A.c],x.O)
D.ug=w([A.c_,A.ib],x.O)
D.egd=new B.z(1000,"M")
D.el_=new B.z(900,"CM")
D.ejC=new B.z(500,"D")
D.ehU=new B.z(400,"CD")
D.ege=new B.z(100,"C")
D.el0=new B.z(90,"XC")
D.ejD=new B.z(50,"L")
D.ehV=new B.z(40,"XL")
D.egk=new B.z(10,"X")
D.ela=new B.z(9,"IX")
D.ejU=new B.z(5,"V")
D.ejn=new B.z(4,"IV")
D.egM=new B.z(1,"I")
D.dgc=w([D.egd,D.el_,D.ejC,D.ehU,D.ege,D.el0,D.ejD,D.ehV,D.egk,D.ela,D.ejU,D.ejn,D.egM],x.ek)
D.eHy=new B.cC(["open",A.jn,"Open & write","Keep writing this book"])
D.eHZ=new B.cC(["print",A.u2,"Print as a book","Fold and staple it"])
D.dgm=w([D.eHy,D.eHZ],B.ax("O<+(m,a0,m,m)>"))
D.dh2=w([D.a4T,D.mG,D.HP,D.RL,D.dd,D.RK],x.i)
D.eyg=new B.z(-1,"Small")
D.eg_=new B.z(0,"Normal")
D.egL=new B.z(1,"Big")
D.ehl=new B.z(2,"Huge")
D.dhx=w([D.eyg,D.eg_,D.egL,D.ehl],x.ek)
D.dhX=w([49,65,89,38,83,89],x.t)
D.di3=w([A.v9,A.hI,A.c_],x.O)
D.diu=w([D.dd,D.mG,D.un,D.a4T,D.HP,D.RL],x.i)
D.aDp=new B.dS([0,D.LA,8,D.ag_,12,D.ag0],B.ax("dS<H,a3t>"))
D.e21={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.biq=new B.w(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cN8=w([A.bL,D.biq],x.O)
D.d6g=w([A.b3,A.bj],x.O)
D.d14=w([A.bW,A.aR,A.bZ],x.O)
D.dgn=w([A.cr,A.bt],x.O)
D.cUP=w([A.b9,A.fk],x.O)
D.d3J=w([A.b6,A.fb],x.O)
D.bbN=new B.w(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.d30=w([D.bbN,A.oD],x.O)
D.cYF=w([A.h3,A.xa],x.O)
D.cUD=w([A.bv,A.cf],x.O)
D.dl5=new B.bk(D.e21,[D.cN8,I.aoF,D.d6g,D.d14,D.dgn,D.cUP,D.d3J,D.d30,D.cYF,D.cUD],B.ax("bk<m,ai<w>>"))
D.e18={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a3K=new B.bk(D.e18,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.ax("bk<m,m>"))
D.a3R=new B.bk(A.i6,[],B.ax("bk<H,+icon3d,picture(m?,m?)>"))
D.dpu=new F.MJ(30,null)
D.duy=new F.mt("Chapter 1","","","")
D.dfn=w([D.duy],x.B)
D.duC=new F.rh("My Book","","",D.dfn,E.aEI)
D.duA=new F.ut("starry",null,null,null,null,"","","")
D.duD=new F.rh("Dream Big","","",E.a2N,D.duA)
D.duB=new F.ut("story",null,null,null,null,"","","")
D.duE=new F.rh("Little Lion","","",E.a2N,D.duB)
D.duz=new F.ut("vintage",null,null,null,null,"","","")
D.duF=new F.rh("Our Story","","",E.a2N,D.duz)
D.dxG=new C.El("","NGMY","","")
D.dEX=new C.zl("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
D.dWT=new C.b0A(null,null,null,null)
D.dYB=new C.aqM(null)
D.dYO=new C.arh(0,"smaller")
D.dYP=new C.arh(1,"bigger")
D.aG1=new C.arh(2,"fit")
D.e4x=new B.u(3,6)
D.e4H=new B.u(4,8)
D.e87=new B.D(E.agQ,T.abM,null)
D.e8b=new B.D(A.Yf,A.lG,null)
D.bGQ=new B.ae(A.lo,16,A.c2,null,null,null)
D.e8f=new B.D(A.iX,D.bGQ,null)
D.b6e=new B.fj(2.2,null,null,null,null,A.c,null,null,null,null)
D.e8r=new B.D(A.Fq,D.b6e,null)
D.bR6=new B.ae(A.cD,16,A.aA,null,null,null)
D.e8v=new B.D(A.ek,D.bR6,null)
D.fmi=new B.y("Play",null,A.nx,null,null,null,null,null,null,null,null,null)
D.d6v=w([U.an7,A.rK,D.fmi],x.p)
D.eM9=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.d6v,null)
D.e8y=new B.D(A.o_,D.eM9,null)
D.b6n=new B.fj(2.4,null,null,null,null,null,null,null,null,null)
D.eRx=new B.a7(20,20,D.b6n,null)
D.e8D=new B.D(A.iX,D.eRx,null)
D.fvj=new B.y("Seconds per slide",null,A.ht,null,null,null,null,null,null,null,null,null)
D.e8L=new B.D(A.bm,D.fvj,null)
D.ea5=new C.a8j(2,"print")
D.ea8=new B.iR(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.ebL=new B.ha("/Annot")
D.ebN=new B.ha("/URI")
D.fgF=new B.y("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.edP=new B.jq("share",48,D.fgF,null,B.ax("jq<m>"))
D.bR0=new B.ae(A.dX,14,A.eA,null,null,null)
D.edY=new B.cL(null,-2,-2,null,null,null,D.bR0,null)
D.cPa=w([H.ael,A.K],x.O)
D.bXq=new B.a8(A.a3,A.a8,A.x,D.cPa,null,null)
D.b_1=new B.o(null,null,null,null,null,D.bXq,A.n)
D.bnk=new B.kP(D.b_1,A.be,null,null)
D.ee9=new B.cL(0,0,null,0,8,null,D.bnk,null)
D.daZ=w([A.hY,A.mi,A.cg],x.O)
D.eeO=new B.bT(A.A,0.5,A.x,null,0,D.daZ,null,null)
D.ehe=new B.z(0.22,A.bj)
D.elv=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.enz=new B.z(0.5,A.hi)
D.ewM=new B.z(0.78,A.aV)
D.eHo=new B.cC([A.bu,0.22,0.7,2.6])
D.eHu=new B.cC([A.b9,0.36,1.2,1.3])
D.eHA=new B.cC([A.dQ,0.28,0.2,0.4])
D.eHG=new B.cC([A.cA,0.05,0.3,0.35])
D.eHM=new B.cC([A.bv,0.28,0.9,0])
D.eHU=new B.cC([A.aE,-0.25,-0.15,0.45])
D.eIK=new B.cC([A.bW,0.42,1,4.1])
D.eLS=new B.a9g(9)
D.bHX=new B.ae(A.Gl,28,A.bZ,null,null,null)
D.fvR=new B.y("NGMY News",null,A.dj,null,null,null,null,null,null,null,null,null)
D.bx4=new B.bC(1,A.bh,D.fvR,null)
D.de9=w([D.bHX,A.av,D.bx4],x.p)
D.eM3=new B.cm(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.de9,null)
D.bI7=new B.ae(A.o3,16,A.c,null,null,null)
D.fxm=new B.y("Book",null,A.om,null,null,null,null,null,null,null,null,null)
D.di2=w([D.bI7,A.ec,D.fxm],x.p)
D.eMb=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.di2,null)
D.bOB=new B.ae(A.jo,10,A.c,null,null,null)
D.fko=new B.y("Pro",null,A.nu,null,null,null,null,null,null,null,null,null)
D.d6A=w([D.bOB,A.qm,D.fko],x.p)
D.eMf=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.d6A,null)
D.fvi=new B.y("Make a newspaper",null,Au.TM,null,null,null,null,null,null,null,null,null)
D.bYA=w([E.a0K,A.ab,D.fvi],x.p)
D.eMg=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.bYA,null)
D.bN9=new B.ae(A.ll,18,A.bL,null,null,null)
D.fmw=new B.y("Ending celebration",null,A.hF,null,null,null,null,null,null,null,null,null)
D.dde=w([D.bN9,A.bp,D.fmw],x.p)
D.eMj=new B.cm(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.dde,null)
D.bOn=new B.ae(A.jn,18,A.jZ,null,null,null)
D.f1b=new B.G(!0,A.jZ,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxD=new B.y("Write",null,D.f1b,null,null,null,null,null,null,null,null,null)
D.cWO=w([D.bOn,A.ab,D.fxD],x.p)
D.eMq=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.cWO,null)
D.fkm=new B.y("Download picture",null,A.pb,null,null,null,null,null,null,null,null,null)
D.bzb=new B.qj(A.eh,A.A,A.f,D.fkm,null)
D.bzm=new B.dq(1,A.cn,D.bzb,null)
D.d6X=w([L.amY,A.ab,D.bzm],x.p)
D.eMr=new B.cm(A.aO,A.b8,A.j,A.m,null,A.p,null,0,D.d6X,null)
D.bJV=new B.ae(A.Gl,22,A.bZ,null,null,null)
D.ftU=new B.y("NGMY NEWS",null,I.a7s,null,null,null,null,null,null,null,null,null)
D.cOB=w([D.bJV,A.ab,D.ftU],x.p)
D.eMA=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.cOB,null)
D.eMM=new B.p7(!1,!1,null,T.VH,null,A.bY,null,null,null)
D.a6w=new B.jk([D.cm,D.dd,D.un,D.HO,D.uo,D.aFS],B.ax("jk<hz>"))
D.e3l={title:0,quote:1,closing:2,bio:3}
D.eNU=new B.eA(D.e3l,4,x.M)
D.e1s={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eNW=new B.eA(D.e1s,5,x.M)
D.e2Q={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a6x=new B.eA(D.e2Q,8,x.M)
D.e2a={Design:0,Transitions:1,Insert:2}
D.eO_=new B.eA(D.e2a,3,x.M)
D.h4t=new B.jk([D.a4U],B.ax("jk<vV>"))
D.e2j={float3d:0,drift:1,pulse:2}
D.eO3=new B.eA(D.e2j,3,x.M)
D.aN9=new B.jk([D.HL,D.HM,D.HN],B.ax("jk<mx>"))
D.e1p={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aNc=new B.eA(D.e1p,14,x.M)
D.h4u=new B.eA(A.i6,0,B.ax("eA<vV>"))
D.e2g={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.SR=new B.eA(D.e2g,4,x.M)
D.e1h={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aNf=new B.eA(D.e1h,30,x.M)
D.e2o={circle:0,triangle:1,hexagon:2,diamond:3}
D.eOl=new B.eA(D.e2o,4,x.M)
D.eQv=new B.ar(390,844)
D.eRh=new B.a7(20,20,A6.Kn,null)
D.aO0=new B.a7(null,2.5,null,null)
D.eRr=new B.a7(18,18,A6.Kn,null)
D.bOr=new B.ae(A.j_,19,A.c,null,null,null)
D.eRC=new B.a7(38,38,D.bOr,null)
D.bMJ=new B.ae(A.yu,22,A.c,null,null,null)
D.eRE=new B.a7(40,40,D.bMJ,null)
D.eSc=new B.hM(2,10,10,1.15,null)
D.aO8=new B.hM(2,16,14,0.62,null)
D.bv8=new B.Q(32,30,32,40)
D.b7I=new B.w(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bHU=new B.ae(A.pW,56,D.b7I,null,null,null)
D.afc=new B.w(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.f38=new B.G(!0,D.afc,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqZ=new B.y("Your books will live here.",null,D.f38,null,A.L,null,null,null,null,null,null,null)
D.cZz=w([D.bHU,A.S,D.fqZ],x.p)
D.bmj=new B.fl(A.ag,A.e,A.j,A.m,null,A.p,null,0,D.cZz,null)
D.e8J=new B.D(D.bv8,D.bmj,null)
D.eSx=new B.m9(D.e8J,null)
D.fqW=new B.y("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.eSP=new B.b1(D.fqW,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fp3=new B.y("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.eSQ=new B.b1(D.fp3,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.ftY=new B.y("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.eSZ=new B.b1(D.ftY,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fuv=new B.y("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.eTd=new B.b1(D.fuv,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fnJ=new B.y("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.eTq=new B.b1(D.fnJ,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fBu=new B.y("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.eTJ=new B.b1(D.fBu,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fyG=new B.y("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.eTU=new B.b1(D.fyG,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fuD=new B.y("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eUA=new B.b1(D.fuD,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fiF=new B.y("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.eUQ=new B.b1(D.fiF,null,null,null,null,null,null,null,A.io,null,null,null,null,A.pM,!1,null,null,null,A.r,null)
D.fkv=new B.y("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.eV7=new B.b1(D.fkv,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fqD=new B.y("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.eV9=new B.b1(D.fqD,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fqj=new B.y("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.eVa=new B.b1(D.fqj,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fwE=new B.y("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.eVb=new B.b1(D.fwE,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.feS=new B.y("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.eVk=new B.b1(D.feS,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.flE=new B.y("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.eVH=new B.b1(D.flE,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fAg=new B.y("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.eVJ=new B.b1(D.fAg,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fzO=new B.y("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.eVN=new B.b1(D.fzO,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fdS=new B.y("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eVP=new B.b1(D.fdS,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fvM=new B.y("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eVY=new B.b1(D.fvM,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fzp=new B.y("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.eWc=new B.b1(D.fzp,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fzg=new B.y("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.eWe=new B.b1(D.fzg,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fdK=new B.y("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.eWk=new B.b1(D.fdK,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fhF=new B.y("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.eWM=new B.b1(D.fhF,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fyt=new B.y("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.eWX=new B.b1(D.fyt,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fht=new B.y("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eXb=new B.b1(D.fht,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.beB=new B.w(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cNm=w([A.is,A.oD,D.beB,D.acb,A.is],x.O)
D.eXz=new B.fT(A.A,0,6.283185307179586,A.x,D.cNm,null,null)
D.cW0=w([A.bL,A.c_,A.hI,D.AF,A.bL],x.O)
D.aOI=new B.fT(A.A,0,6.283185307179586,A.x,D.cW0,null,null)
D.d8F=w([A.bW,A.bu,A.b9,A.b1,A.bZ,A.bW],x.O)
D.eXE=new B.fT(A.A,0,6.283185307179586,A.x,D.d8F,null,null)
D.cPo=w([A.pK,A.oE,A.At,A.is,A.pK],x.O)
D.eXF=new B.fT(A.A,0,6.283185307179586,A.x,D.cPo,null,null)
D.d8z=w([A.aQ,A.bJ,A.aL,A.ak,A.aQ],x.O)
D.eXG=new B.fT(A.A,0,6.283185307179586,A.x,D.d8z,null,null)
D.dg2=w([A.bv,A.b9,A.bu,A.bW,A.bv],x.O)
D.eXI=new B.fT(A.A,0,6.283185307179586,A.x,D.dg2,null,null)
D.beT=new B.w(1,0,1,1,A.t)
D.b8W=new B.w(1,1,0,1,A.t)
D.dce=w([A.Ei,A.ae3,I.acY,D.beT,I.adm,D.b8W,A.Ei],x.O)
D.eXJ=new B.fT(A.A,0,6.283185307179586,A.x,D.dce,null,null)
D.eXY=new C.avj(2,"immersiveSticky")
D.eXZ=new C.avj(3,"edgeToEdge")
D.eY_=new C.avj(4,"manual")
D.f_p=new B.G(!0,A.oy,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPe=new B.G(!0,A.f5,null,null,null,null,12.5,A.N,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_Y=new B.G(!0,E.n1,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1s=new B.G(!0,A.ad,null,null,null,null,13,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2q=new B.G(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2A=new B.G(!0,A.c2,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2V=new B.G(!0,A.eA,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4h=new B.G(!0,A.bJ,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4q=new B.G(!0,A.jg,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4E=new B.rB(!0,A.I6,null,null,null,null,A.ds,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.f57=new B.G(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5K=new B.G(!0,A.jf,null,null,null,null,11.5,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f67=new B.G(!0,A.aA,null,null,null,null,12.5,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eab=new B.iR(1,1,0.7568627450980392,0.027450980392156862)
D.f6b=new B.rB(!0,D.eab,null,null,null,null,A.ds,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.aea=new B.w(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aPY=new B.G(!0,D.aea,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6j=new B.G(!0,D.afc,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6k=new B.G(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQ_=new B.G(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6X=new B.rB(!0,A.p5,null,null,null,null,A.ds,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7e=new B.G(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7L=new B.G(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7N=new B.G(!0,D.aea,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.J5=new B.G(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8f=new B.G(!0,A.c_,null,null,null,null,11.5,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8n=new B.G(!0,A.bJ,null,null,null,null,14,A.a5,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8q=new B.G(!0,A.bL,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8H=new B.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.avQ,null,null,null)
D.f8J=new B.G(!0,A.cb,null,null,null,null,null,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8L=new B.G(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8Y=new B.G(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f99=new B.G(!0,A.dv,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9G=new B.G(!0,A.aS,null,null,null,null,null,A.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9P=new B.G(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa2=new B.G(!0,A.ad,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQC=new B.G(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQE=new B.G(!0,A.c2,null,null,null,null,11.5,A.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bk_=new B.w(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.fbL=new B.G(!0,D.bk_,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQM=new B.G(!0,E.n1,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcf=new B.G(!0,A.bJ,null,null,null,null,11,A.a5,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fci=new B.G(!0,O.lg,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5l=new B.G(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdw=new B.y("NEW",null,D.f5l,null,null,null,null,null,null,null,null,null)
D.fdN=new B.y("Hati ya Kuhowesha",null,A.h2,null,null,null,null,null,null,null,null,null)
D.fee=new B.y("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fey=new B.y("Scrollable PDF on this slide",null,A.dn,null,null,null,null,null,null,null,null,null)
D.ffh=new B.y("Big quote mark",null,A.iM,null,null,null,null,null,null,null,null,null)
D.ffk=new B.y("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.ffv=new B.y("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.ffX=new B.y("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.ffZ=new B.y("How many slides?",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fgw=new B.y("Transfer",null,A.ck,null,null,null,null,null,null,null,null,null)
D.f1e=new B.G(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgS=new B.y("Luxury FX",null,D.f1e,null,null,null,null,null,null,null,null,null)
D.fhd=new B.y("Font",null,A.rP,null,null,null,null,null,null,null,null,null)
D.fho=new B.y("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fhu=new B.y("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fbj=new B.G(!0,A.bJ,null,null,null,null,12,A.N,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhC=new B.y("Example  GA847",null,D.fbj,null,null,null,null,null,null,null,null,null)
D.fi1=new B.y("Design shapes",null,A.iM,null,null,null,null,null,null,null,null,null)
D.fib=new B.y("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fif=new B.y("Non-stop (loop)",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fit=new B.y("Hati ya Kuhoweya",null,A.h2,null,null,null,null,null,null,null,null,null)
D.fiM=new B.y("Photo studio",null,A.fP,null,null,null,null,null,null,null,null,null)
D.fjd=new B.y("Add your picture",null,A.ke,null,null,null,null,null,null,null,null,null)
D.f4F=new B.G(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fje=new B.y("Enter document code",null,D.f4F,null,A.L,null,null,null,null,null,null,null)
D.fjf=new B.y("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fjk=new B.y("English",null,null,null,null,null,null,null,null,null,null,null)
D.f2g=new B.G(!0,E.n1,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjF=new B.y("Delete this book?",null,D.f2g,null,A.L,null,null,null,null,null,null,null)
D.f6N=new B.G(!0,E.n1,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkx=new B.y("Your library",null,D.f6N,null,null,null,null,null,null,null,null,null)
D.fkC=new B.y("Delete",null,A.aPS,null,null,null,null,null,null,null,null,null)
D.fkF=new B.y("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,At.Dj,null,null,null,null,null,null,null,null,null)
D.fkQ=new B.y("Element flies in",null,A.aQ3,null,null,null,null,null,null,null,null,null)
D.TX=new B.y("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fld=new B.y("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.flx=new B.y("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.flB=new B.y("Cancel",null,E.aQe,null,null,null,null,null,null,null,null,null)
D.flD=new B.y("The lines and circles that come with the design",null,A.h1,null,null,null,null,null,null,null,null,null)
D.faa=new B.G(!0,A.fT,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm3=new B.y("DOCUMENT CODE",null,D.faa,null,null,null,null,null,null,null,null,null)
D.fmS=new B.y("Quotes",null,G.a82,null,null,null,null,null,null,null,null,null)
D.f44=new B.G(!0,O.lg,null,null,null,null,null,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn_=new B.y("Add a picture",null,D.f44,null,null,null,null,null,null,null,null,null)
D.fn7=new B.y("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a7L,null,A.L,null,null,null,null,null,null,null)
D.fnb=new B.y("Look & feel",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fng=new B.y("Rings",null,A.hF,null,null,null,null,null,null,null,null,null)
D.fnm=new B.y("W",null,A.rP,null,null,null,null,null,null,null,null,null)
D.fnw=new B.y("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fnP=new B.y("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.TI,null,A.L,null,null,null,null,null,null,null)
D.fnR=new B.y("Write your book",null,A.cz,null,null,null,null,null,null,null,null,null)
D.foB=new B.y("Add page",null,A.ck,null,null,null,null,null,null,null,null,null)
D.foQ=new B.y("Malipo ya Awamu ya Mahari",null,A.h2,null,null,null,null,null,null,null,null,null)
D.f4u=new B.G(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp4=new B.y("Create with AI",null,D.f4u,null,A.L,null,null,null,null,null,null,null)
D.fpy=new B.y("Apply look",null,A.hF,null,null,null,null,null,null,null,null,null)
D.f5c=new B.G(!0,A.eu,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fql=new B.y("Type your presentation below",null,D.f5c,null,A.L,null,null,null,null,null,null,null)
D.fqo=new B.y("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,I.aQP,null,A.L,null,null,null,null,null,null,null)
D.fqq=new B.y("Keep it",null,A.ck,null,null,null,null,null,null,null,null,null)
D.f0e=new B.G(!0,A.co,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqx=new B.y("Done",null,D.f0e,null,null,null,null,null,null,null,null,null)
D.fqS=new B.y("Delete",null,A.nw,null,null,null,null,null,null,null,null,null)
D.fr0=new B.y("Hati ya Kiapo cha Uongozi",null,A.h2,null,null,null,null,null,null,null,null,null)
D.f3q=new B.G(!0,A.aS,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frT=new B.y("Write your idea in any language \u2014 the AI makes the slides.",null,D.f3q,null,A.L,null,null,null,null,null,null,null)
D.fse=new B.y("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fsk=new B.y("Layout",null,A.TO,null,null,null,null,null,null,null,null,null)
D.fsX=new B.y("Print",null,A.cz,null,null,null,null,null,null,null,null,null)
D.ft2=new B.y("X",null,A.rP,null,null,null,null,null,null,null,null,null)
D.ftB=new B.y("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Aa.Di,null,null,null,null,null,null,null,null,null)
D.fua=new B.y("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fun=new B.y("Hati ya Kuhowa",null,A.h2,null,null,null,null,null,null,null,null,null)
D.fup=new B.y("Choose a class template",null,A.h2,null,null,null,null,null,null,null,null,null)
D.fur=new B.y("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.h1,null,null,null,null,null,null,null,null,null)
D.fux=new B.y("Download the newspaper picture",null,A.cz,null,null,null,null,null,null,null,null,null)
D.fuK=new B.y("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fuR=new B.y("Done",null,A.aQB,null,null,null,null,null,null,null,null,null)
D.fv0=new B.y("Ending celebration",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fv1=new B.y("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fvg=new B.y("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Aa.IW,null,null,null,null,null,null,null,null,null)
D.fwb=new B.y("Export presentation",null,A.dn,null,null,null,null,null,null,null,null,null)
D.fwc=new B.y("What would you like to do?",null,D.aPY,null,null,null,null,null,null,null,null,null)
D.fwg=new B.y("Delete",null,A.cz,null,null,null,null,null,null,null,null,null)
D.fwM=new B.y("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fwQ=new B.y("Hati (Documents)",null,A.h2,null,null,null,null,null,null,null,null,null)
D.fx2=new B.y("Done",null,A.l9,null,null,null,null,null,null,null,null,null)
D.fb9=new B.G(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx7=new B.y("Delete presentation?",null,D.fb9,null,A.L,null,null,null,null,null,null,null)
D.fxq=new B.y("After the last slide it starts again from the first",null,A.h1,null,null,null,null,null,null,null,null,null)
D.fxB=new B.y("\ud83c\udf33",null,A.J_,null,A.L,null,null,null,null,null,null,null)
D.fxT=new B.y("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.h1,null,null,null,null,null,null,null,null,null)
D.fy_=new B.y("Transfer document",null,A.pd,null,null,null,null,null,null,null,null,null)
D.fya=new B.y("Add to the slides",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fyx=new B.y("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fyM=new B.y("Make a book",null,K.aPw,null,null,null,null,null,null,null,null,null)
D.fyQ=new B.y("Books",null,A.cz,null,null,null,null,null,null,null,null,null)
D.f3Y=new B.G(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyR=new B.y("Keep this page open until it finishes.",null,D.f3Y,null,null,null,null,null,null,null,null,null)
D.fyU=new B.y("Making your video",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fyZ=new B.y("LANGUAGE",null,H.J4,null,null,null,null,null,null,null,null,null)
D.fz5=new B.y("Use this ending",null,A.cz,null,null,null,null,null,null,null,null,null)
D.fzd=new B.y("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fzf=new B.y("Upload a different logo",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fzv=new B.y("Delete from the database?",null,A.ke,null,null,null,null,null,null,null,null,null)
D.fzw=new B.y("H",null,A.rP,null,null,null,null,null,null,null,null,null)
D.fzU=new B.y("NGMY Quotes",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fAl=new B.y("Cover",null,D.aQM,null,null,null,null,null,null,null,null,null)
D.fAp=new B.y("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fAq=new B.y("Each page becomes its own slide you can present",null,A.h1,null,null,null,null,null,null,null,null,null)
D.fAM=new B.y("Y",null,A.rP,null,null,null,null,null,null,null,null,null)
D.fAX=new B.y("Crop the picture",null,A.l9,null,null,null,null,null,null,null,null,null)
D.fB2=new B.y("Edit text",null,A.J0,null,null,null,null,null,null,null,null,null)
D.fDg=B.dR("a85")
D.Dv=new C.awC(0,"none")
D.aTT=new C.awC(1,"zipCrypto")
D.aTU=new C.awC(2,"aes")
D.fUt=new F.Pc("","",null)
D.fVz=new C.bbN(null)
D.fWG=new C.Zi(null)
D.fYe=new C.ad_(null)
D.fYg=new C.aDO(null)
D.h01=new C.a_y(null)
D.h0i=new C.a04(null)
D.h0B=new C.bto(null)})();(function staticFields(){$.hdx=null
$.hdy=null
$.hdz=null
$.hdA=null
$.fWw=B.v1("_lastQuoRemDigits")
$.fWx=B.v1("_lastQuoRemUsed")
$.awY=B.v1("_lastRemUsed")
$.fWy=B.v1("_lastRem_nsh")
$.q6=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a6U=B.T(x.N,x.I)
$.fU2=!1
$.hil=B.T(B.ax("kS"),x.N)
$.hiy=B.T(B.ax("kS"),x.E)
$.hgy=!1
$.bz1="q"
$.Q8=0
$.Cu=B.T(x.N,B.ax("ai<zn>"))
$.hgV=!1
$.fY6=!1
$.hnb=null
$.hRm=B.T(x.N,B.ax("az<m?>"))
$.Kd=""
$.j1=0
$.hai=function(){var w=x.N
return B.T(w,w)}()
$.hah=B.T(x.N,x.R)
$.fYr=!1
$.afH=B.T(x.N,x.E)
$.fZe=0
$.bjS=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ifD","CQ",()=>C.b9i(0))
w($,"ifB","a2i",()=>C.b9i(1))
w($,"ifC","hqM",()=>C.b9i(2))
w($,"ifA","h24",()=>$.a2i().uZ(0))
w($,"ify","hqK",()=>C.b9i(1e4))
w($,"ifz","hqL",()=>B.E3(8))
w($,"ibq","hoN",()=>B.E3(0))
w($,"iby","hoR",()=>B.E3(0))
w($,"ibx","hoQ",()=>B.bXQ(0))
w($,"iji","hsM",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a3K.gdL(D.a3K),v=v.gae(v);v.C();){u=v.gR(v)
t.n(0,u.b,u.a)}return t})
w($,"ijJ","bDx",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mU(new C.fES(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mU(new C.fET(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mU(new C.fEU(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mU(new C.fF4(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mU(new C.fF9(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mU(new C.fFa(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mU(new C.fFb(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mU(new C.fFc(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mU(new C.fFd(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mU(new C.fFe(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mU(new C.fFf(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mU(new C.fEV(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mU(new C.fEW(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mU(new C.fEX(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mU(new C.fEY(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mU(new C.fEZ(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mU(new C.fF_(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mU(new C.fF0(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mU(new C.fF1(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mU(new C.fF2(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mU(new C.fF3(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mU(new C.fF5(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mU(new C.fF6(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mU(new C.fF7(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mU(new C.fF8(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.ax("O<Eu>"))})
w($,"ijl","hsO",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["58iyyGLfcJ2oi/jx3oXx4qCJKQo="]=a.current})($__dart_deferred_initializers__);