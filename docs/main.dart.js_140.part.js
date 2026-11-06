((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ag,A5,Ah,Ai,U,A6,Aj,Ak,C={
tS(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fW4(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
JG(d){var w
if(d===0)return $.D_()
if(d===1)return $.a2o()
if(d===2)return $.hqz()
if(Math.abs(d)<4294967296)return C.b9l(A.o.N(d))
w=C.hLj(d)
return w},
b9l(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.tS(4,w)
return new C.nV(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.tS(1,w)
return new C.nV(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aC(d,16)
v=C.tS(2,w)
return new C.nV(v===0?!1:s,w,v)}v=A.o.am(A.o.gajZ(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.am(d,65536)}v=C.tS(v,w)
return new C.nV(v===0?!1:s,w,v)},
hLj(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.V(B.dH("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.D_()
w=$.hqy()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.la(A.aH.gaP(w))
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
q=new C.nV(!1,r,4)
if(s<0)p=q.mq(0,-s)
else p=s>0?q.dY(0,s):q
return p},
fW5(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hdg(d,e,f,g){var w,v,u,t,s,r=A.o.am(f,16),q=A.o.E(f,16),p=16-q,o=A.o.dY(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fG(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dY(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hdb(d,e,f,g){var w,v,u,t,s=A.o.am(f,16)
if(A.o.E(f,16)===0)return C.fW5(d,e,s,g)
w=e+s+1
C.hdg(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hLm(d,e,f,g){var w,v,u,t,s=A.o.am(f,16),r=A.o.E(f,16),q=16-r,p=A.o.dY(1,r)-1,o=A.o.fG(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dY(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fG(u,r)}w&2&&B.aj(g)
g[n]=o},
cFf(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hLk(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
b9m(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aC(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aC(v,16)&1)}},
hdh(d,e,f,g,h,i){var w,v,u,t,s,r
if(d===0)return
for(w=g.$flags|0,v=0;--i,i>=0;h=s,f=u){u=f+1
t=d*e[f]+g[h]+v
s=h+1
w&2&&B.aj(g)
g[h]=t&65535
v=A.o.am(t,65536)}for(;v!==0;h=s){r=g[h]+v
s=h+1
w&2&&B.aj(g)
g[h]=r&65535
v=A.o.am(r,65536)}},
hLl(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.dZ((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nV:function nV(d,e,f){this.a=d
this.b=e
this.c=f},
cFg:function cFg(){},
cFh:function cFh(){},
cFi:function cFi(d,e){this.a=d
this.b=e},
cFj:function cFj(d){this.a=d},
aQN:function aQN(d,e){this.a=d
this.b=e},
h35(d,e,f){var w=new C.RH(d,A.o.am(Date.now(),1000),e)
w.Q=f
return w},
RH:function RH(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a3A:function a3A(d,e){this.a=d
this.b=e},
bGL:function bGL(d){this.a=d
this.c=this.b=0},
htN(){return new C.bF6()},
bF6:function bF6(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cxp:function cxp(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hL1(d,e,f){var w,v,u,t,s
if(d.gal(d))return new Uint8Array(0)
w=new Uint8Array(B.ce(d.gcWz(d)))
v=f*2+2
u=C.haT(C.haV(),64)
t=new C.cha(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.chb(e,1000,v)
s=new Uint8Array(v)
return A.aH.ds(s,0,t.cK_(w,0,s,0))},
cxn:function cxn(d,e){this.c=d
this.d=e},
awP:function awP(d,e){this.a=d
this.b=e},
cxq:function cxq(d,e,f,g){var _=this
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
b84:function b84(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cxo:function cxo(){this.a=$},
hcG(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
htw(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bDH:function bDH(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
h0M(d,e){e&=31
return(d&$.q9[e])<<e>>>0},
nq(d,e){e&=31
return(d>>>e|C.h0M(d,32-e))>>>0},
haU(d){var w,v=new C.asx()
if(B.iI(d))v.aJX(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
haV(){var w=C.haU(0),v=new Uint8Array(4),u=x.S
u=new C.chc(w,v,A.Eb,5,B.c2(5,0,!1,u),B.c2(80,0,!1,u))
u.kA(0)
return u},
haT(d,e){var w=new C.ch8(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
ch7:function ch7(){},
chb:function chb(d,e,f){this.a=d
this.b=e
this.c=f},
ch5:function ch5(){},
asw:function asw(d){this.a=d},
cha:function cha(d){this.a=$
this.b=d
this.c=$},
ch6:function ch6(){},
ch4:function ch4(){},
asx:function asx(){this.b=this.a=$},
ch9:function ch9(){},
chc:function chc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
ch8:function ch8(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
ch3:function ch3(){},
ch2:function ch2(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bNm:function bNm(){},
bNn:function bNn(d){this.a=d},
hOg(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b9B:function b9B(){},
crb:function crb(){},
bOf:function bOf(d,e){this.a=d
this.b=!1
this.c=e},
bOg:function bOg(){},
hXb(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
avt(d){var w=0,v=B.j(x.H),u
var $async$avt=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.f1j?2:4
break
case 2:w=5
return B.b(A.kf.h_("SystemChrome.setEnabledSystemUIMode",d.a3(),u),$async$avt)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kf.h_("SystemChrome.setEnabledSystemUIOverlays",C.hXb(null),u),$async$avt)
case 6:case 3:return B.h(null,v)}})
return B.i($async$avt,v)},
avw:function avw(d,e){this.a=d
this.b=e},
a8d:function a8d(d){this.a=d},
fS0(d,e){return new C.aVh(e,d,null)},
aVh:function aVh(d,e,f){this.e=d
this.c=e
this.a=f},
aAn:function aAn(d,e,f,g,h){var _=this
_.ah=d
_.aj=e
_.a9$=f
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
hZQ(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.frC(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
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
frC:function frC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ang(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$ang=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.agG("ngmy_menu_lib_v1_zzslides_index",A.bJ),$async$ang)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.da(s,x.f)
t=B.cC(t,new C.bZ2(),t.$ti.k("J.E"),x.P)
r=B.C(t,B.a6(t).k("J.E"))}else r=B.a([],x.d)
A.d.aZ(r,new C.bZ3())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ang,v)},
ani(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$ani=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ang(),$async$ani)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.U(t,x.P)
for(r=J.aW(j);r.C();){q=r.gT(r)
p=J.q(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.S(Date.now(),0,!1).a5().ac()
p=m.a
k=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.np("ngmy_menu_lib_v1_zzslide_"+B.aK(p,k,""),B.F(["deck",m.ag(),"savedAt",l],t,q),null),$async$ani)
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
return B.b(B.np("ngmy_menu_lib_v1_zzslides_index",B.F(["items",s,"savedAt",new B.S(Date.now(),0,!1).a5().ac()],t,q),null),$async$ani)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ani,v)},
bZ4(d){return C.hzi(d)},
hzi(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bZ4=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.agG("ngmy_menu_lib_v1_zzslide_"+B.aK(d,o,""),A.hL),$async$bZ4)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.VL(B.a2(q,x.N,x.z))
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
return B.i($async$bZ4,v)},
anh(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$anh=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ang(),$async$anh)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nr(r,new C.bZ5(d))
w=4
return B.b(B.np("ngmy_menu_lib_v1_zzslides_index",B.F(["items",r,"savedAt",new B.S(Date.now(),0,!1).a5().ac()],x.N,x.z),null),$async$anh)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aOQ("ngmy_menu_lib_v1_zzslide_"+B.aK(d,s,"")),$async$anh)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anh,v)},
bZ2:function bZ2(){},
bZ3:function bZ3(){},
bZ5:function bZ5(d){this.a=d},
i8M(d,e,f){return B.bQ(A.K,null,new C.fHO(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fHO:function fHO(d,e,f){this.a=d
this.b=e
this.c=f},
a0D:function a0D(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aIG:function aIG(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
f4v:function f4v(d,e){this.a=d
this.b=e},
f4z:function f4z(d){this.a=d},
f4A:function f4A(d){this.a=d},
f4B:function f4B(d,e,f){this.a=d
this.b=e
this.c=f},
f4w:function f4w(d){this.a=d},
f4x:function f4x(d){this.a=d},
f4y:function f4y(d,e){this.a=d
this.b=e},
f4q:function f4q(d){this.a=d},
f4o:function f4o(d){this.a=d},
f4p:function f4p(d){this.a=d},
f4r:function f4r(d){this.a=d},
f4s:function f4s(d){this.a=d},
f4F:function f4F(d,e){this.a=d
this.b=e},
f4E:function f4E(d,e){this.a=d
this.b=e},
f4u:function f4u(d,e,f){this.a=d
this.b=e
this.c=f},
f4t:function f4t(d,e,f){this.a=d
this.b=e
this.c=f},
f4C:function f4C(d,e){this.a=d
this.b=e},
f4D:function f4D(d,e){this.a=d
this.b=e},
f4I:function f4I(d){this.a=d},
f4J:function f4J(d,e){this.a=d
this.b=e},
f4H:function f4H(d,e){this.a=d
this.b=e},
f4G:function f4G(){},
hfH(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.S.aL(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.da(w,x.f)
v=B.cC(v,new C.fbN(),v.$ti.k("J.E"),x.ea)
u=B.a6(v).k("a_<J.E>")
v=B.C(new B.a_(v,new C.fbO(),u),u.k("J.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a1C(d){return C.i05(d)},
i05(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a1C=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.U(x.N,x.ea)
m=new C.fur(n)
t=4
j=m
i=C
w=7
return B.b(B.a2b("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a1C)
case 7:j.$1(i.hfH(f))
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
return B.b(B.ay(),$async$a1C)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hfH(B.aU(J.q(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.fbW(d),$async$a1C)
case 13:p=j.C(new i.a_(h,new g.fup(f),o),o.k("J.E"))
A.d.aZ(p,new C.fuq())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a1C,v)},
ahg(d,e){return C.i8r(d,e)},
i8r(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ahg=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fHi(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.S.ao(n,null)
q=!1
t=4
w=7
return B.b(B.ah8("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ahg)
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
return B.b(B.ay(),$async$ahg)
case 12:p=g
w=13
return B.b(p.aq("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ahg)
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
return B.i($async$ahg,v)},
fbW(d){return C.hPC(d)},
hPC(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fbW=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ay(),$async$fbW)
case 7:r=f
q=r.tf("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.kE(q,B.T(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aY(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$fbW,v)},
ag5(d,e){return C.hZI(d,e)},
hZI(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$ag5=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$ag5)
case 6:s=g
r=B.aY(x.N)
q=s.tf("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h4(r,q)
J.cd(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a6(q).k("cq.E"))
w=7
return B.b(s.aq("StringList","ngmy_books_deleted_v1_"+r,q),$async$ag5)
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
return B.b(C.a1C(d),$async$ag5)
case 8:n=g
J.nr(n,new C.frg(e))
w=9
return B.b(C.ahg(d,n),$async$ag5)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ag5,v)},
i8R(d,e){return B.a4(d,!1).cm(B.e9(new C.fI9(e),!0,null,x.H))},
hLo(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d8(w.d,new C.cGC())},
om:function om(d,e,f){this.a=d
this.b=e
this.c=f},
fbN:function fbN(){},
fbO:function fbO(){},
fur:function fur(d){this.a=d},
fup:function fup(d){this.a=d},
fuq:function fuq(){},
fHi:function fHi(){},
frg:function frg(d){this.a=d},
fI9:function fI9(d){this.a=d},
Yo:function Yo(d,e){this.c=d
this.a=e},
axm:function axm(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cGC:function cGC(){},
cGE:function cGE(d,e){this.a=d
this.b=e},
cGH:function cGH(d){this.a=d},
cGI:function cGI(d){this.a=d},
cGG:function cGG(){},
cGJ:function cGJ(d,e){this.a=d
this.b=e},
cGF:function cGF(d){this.a=d},
cGK:function cGK(){},
cGD:function cGD(d,e){this.a=d
this.b=e},
cGL:function cGL(){},
cGy:function cGy(d){this.a=d},
cGw:function cGw(d){this.a=d},
cGx:function cGx(d){this.a=d},
cGz:function cGz(d,e){this.a=d
this.b=e},
cGv:function cGv(d){this.a=d},
cGu:function cGu(d){this.a=d},
cGs:function cGs(d,e){this.a=d
this.b=e},
cGt:function cGt(d){this.a=d},
cGB:function cGB(){},
cGA:function cGA(d){this.a=d},
cGr:function cGr(d,e){this.a=d
this.b=e},
cGq:function cGq(d,e){this.a=d
this.b=e},
cGp:function cGp(d,e){this.a=d
this.b=e},
cGM:function cGM(d){this.a=d},
Ym:function Ym(d,e,f){this.c=d
this.d=e
this.a=f},
aEy:function aEy(d,e,f){this.a=d
this.b=e
this.c=f},
axi:function axi(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cFT:function cFT(d){this.a=d},
cFS:function cFS(d){this.a=d},
cFV:function cFV(d,e,f){this.a=d
this.b=e
this.c=f},
cG2:function cG2(){},
cG3:function cG3(d){this.a=d},
cFW:function cFW(d,e,f){this.a=d
this.b=e
this.c=f},
cFU:function cFU(d,e){this.a=d
this.b=e},
cFY:function cFY(d,e){this.a=d
this.b=e},
cFZ:function cFZ(d,e){this.a=d
this.b=e},
cG_:function cG_(d,e){this.a=d
this.b=e},
cFX:function cFX(d){this.a=d},
cG1:function cG1(d){this.a=d},
cG0:function cG0(d,e){this.a=d
this.b=e},
cG8:function cG8(d){this.a=d},
cG4:function cG4(d,e){this.a=d
this.b=e},
cG5:function cG5(d,e){this.a=d
this.b=e},
cG6:function cG6(d,e){this.a=d
this.b=e},
cG7:function cG7(d,e){this.a=d
this.b=e},
axk:function axk(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
i2p(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ei(v,x.cK).bH(new C.fyV(),x.H).eS(new C.fyW())}}else if(s)C.hh9()}catch(t){}},
hh9(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ei(v,x.cK).eS(new C.fg1())}catch(u){}},
i2s(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fyV:function fyV(){},
fyW:function fyW(){},
fg1:function fg1(){},
hlL(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gH(A.a.ef(v,w,"").split(":"))},
hlI(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.l6)return null
return A.a.b3(w,14)},
h_u(d){var w
if(d.b!==D.l6)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b3(w,21)},
i2S(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hlM(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
i2N(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aK(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aK(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.U(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.l1(0,f)
t=x.N
u=B.cC(u,new C.fzU(),B.a6(u).k("J.E"),t)
s=B.C(u,B.a6(u).k("J.E"))
if(s.length===0)return B.U(t,t)
for(u=v.l1(0,f),u=new B.JF(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.Ro(A.a.ap(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.Ro(A.a.b3(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cE(w)
if(l==null)return B.U(t,t)
k=B.U(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
i2L(d,e){var w,v,u,t,s,r=B.a6(e).k("cw<1>"),q=B.C(new B.cw(e,r),r.k("J.E"))
A.d.aZ(q,new C.fzT())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.L)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.cc(s,"]"))continue
w=B.aPM(w,u,s,0)}return w},
i2P(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a4c:$.hsA(),s=x.N,r=B.U(s,s)
for(s=t.gdQ(t),s=s.gae(s);s.C();){w=s.gT(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.cc(u,"]"))continue
r.n(0,w.b,u)}return r},
hlJ(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fcP(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
if(C.hlL(q)===e)return q}return null},
i2Q(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b3(v,u)
return A.d.gH(D.GR).a},
i2R(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.adX(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.adX(0,0,0)
v=C.fcP(b6,b0)
u=C.fcP(b5,b0)
t=0
if(v!=null&&u!=null){s=C.i2P(b2,C.i2N(C.hlJ(b2),v.r))
if(s.a!==0){u.r=C.i2L(C.hlJ(b4),s)
t=s.a}}r=B.aY(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){l=C.hlL(o[m])
if(l==null||l==="utangulizi")continue
r.L(0,l)}for(q=B.em(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fcP(b6,n)
i=C.fcP(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a0(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gH(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){d=o[m]
a0=C.h_u(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.L)(a1),++a7){a8=a1[a7]
if(C.hlI(a8)===a0||C.h_u(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.R_(a1,new C.fA_(a0),!0)
a1=f.z
a6=Date.now()
a9=$.j1
$.j1=a9+1
A.d.L(a1,new C.eG(""+1000*a6+"_"+a9,D.l6,a2,a3,a4,a5,"",24,A.a6,A.bo,A.aD,4279310375,A.bh,d.at,D.bg,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cl,0,"","","","","",!1,0));++e}b5.f=new B.S(Date.now(),0,!1)
return new B.adX(k,t,e)},
i2M(d){var w=C.i2Q(d)
if(d.w==="hati_kuhowa")return C.hl5("",w)
return C.hl4("",w)},
fzU:function fzU(){},
fzT:function fzT(){},
fA_:function fA_(d){this.a=d},
hgT(){var w=new B.S(Date.now(),0,!1),v=new C.ff4()
return B.u(v.$1(B.bS(w)))+"/"+B.u(v.$1(B.bH(w)))+"/"+B.bA(w)},
h_D(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fAS(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.l6&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hm_(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fAS(d)
w=B.bi(u)
if(w==null)return!C.fAS(d)
return new B.S(Date.now(),0,!1).a5().d_(w.a5().bS(18e9))},
i3x(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.S(Date.now(),0,!1).a5().ac()},
hDl(d){return A.a.i(d).toLowerCase()},
apy(d){return C.hDn(d)},
hDn(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$apy=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ay(),$async$apy)
case 7:r=f
p=r.tf("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.U:p
o=q
o=new B.M(o,C.i73(),B.T(o).k("M<1,m>")).c0(0,new C.c9k())
o=B.df(o,o.$ti.k("J.E"))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
u=B.aY(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$apy,v)},
apx(d,e){return C.hDm(d,e)},
hDm(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apx=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.apy(d),$async$apx)
case 3:r=g
if(!J.cd(r,o)){w=1
break}t=5
w=8
return B.b(B.ay(),$async$apx)
case 8:q=g
w=9
return B.b(q.aq("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qi(r)),$async$apx)
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
return B.i($async$apx,v)},
apz(d,e){return C.hDo(d,e)},
hDo(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apz=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.apy(d),$async$apz)
case 3:r=g
if(!J.hx(r,o)){w=1
break}t=5
w=8
return B.b(B.ay(),$async$apz)
case 8:q=g
w=9
return B.b(q.aq("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qi(r)),$async$apz)
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
return B.i($async$apz,v)},
V8(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$V8=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fTw&&!a5){w=1
break}t=4
w=7
return B.b(B.ay(),$async$V8)
case 7:r=a7
q=B.aU(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.S.aL(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.U(e,x.I)
for(d=J.jN(p),d=d.gae(d),a0=x.z;d.C();){n=d.gT(d)
if(f.b(n.b))J.aG(o,J.k(n.a),C.VL(B.a2(f.a(n.b),e,a0)))}$.a70=o}}t=2
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
return B.b(B.c3(),$async$V8)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.u5("civic_hati_kiapo_uongozi",null,A.ei),$async$V8)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.U(o,x.I)
for(f=x.f,e=J.jN(f.a(J.q(l,"byState"))),e=e.gae(e),d=x.z;e.C();){j=e.gT(e)
if(!f.b(j.b))continue
J.aG(k,J.k(j.a),C.VL(B.a2(f.a(j.b),o,d)))}for(o=k,o=new B.cI(o,B.a6(o).k("cI<1,2>")).gae(0);o.C();){f=o.d
f.toString
i=f
h=$.a70.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbq())f=d===e.gbq()&&f.b<e.gcA()
else f=!0
f=!f}else f=!0
if(f)$.a70.n(0,i.a,i.b)}w=20
return B.b(C.apA(),$async$V8)
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
case 16:case 9:$.fTw=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$V8,v)},
apA(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$apA=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$apA)
case 6:s=e
r=B.U(x.N,x.P)
for(o=$.a70,o=new B.cI(o,B.a6(o).k("cI<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aG(r,q.a,q.b.ag())}w=7
return B.b(s.aq("String","ngmy_civic_hati_kiapo_uongozi_v1",A.S.ao(r,null)),$async$apA)
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
return B.i($async$apA,v)},
aZL(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aZL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.V8(!1),$async$aZL)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a70.h(0,t)
r=s==null?null:s.hG()
if(r==null){u=null
w=1
break}u=C.bBd(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aZL,v)},
a71(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a71=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.S(Date.now(),0,!1)
o=a1.hG()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.L)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a70.n(0,d,o)
$.fTw=!0
w=3
return B.b(C.apA(),$async$a71)
case 3:w=4
return B.b(B.c3(),$async$a71)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.U(e,x.P)
for(n=$.a70,n=new B.cI(n,B.a6(n).k("cI<1,2>")).gae(0);n.C();){l=n.d
l.toString
q=l
J.aG(r,q.a,q.b.ag())}w=9
return B.b(B.np("civic_hati_kiapo_uongozi",B.F(["byState",r,"updatedAt",new B.S(Date.now(),0,!1).a5().ac()],e,x.z),null),$async$a71)
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
return B.i($async$a71,v)},
apB(d){var w=0,v=B.j(x.T),u,t,s
var $async$apB=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hR().a5A(A.eG),$async$apB)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fe(),$async$apB)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aZK(t,d),$async$apB)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apB,v)},
aZK(d,e){return C.hDp(d,e)},
hDp(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aZK=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c3(),$async$aZK)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.af("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aK(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.u(r)+"/"+1000*Date.now()+".mp4"
n=$.eY().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.ij("media")
w=8
return B.b(p.wZ(q,new Uint8Array(B.ce(d)),D.bAY),$async$aZK)
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
return B.i($async$aZK,v)},
Kx(d,e,f,g,h,i,j,k,l,m,n){var w=C.cB()
return C.eq(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bg,4280172719,2,d,0,0,"",D.cl,D.cP,l,m,n)},
few(d,e,f,g,h,i,j,k,l){var w=C.cB()
return C.eq(A.bh,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bo,A.a6,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cl,D.f5,j,k,l)},
fXA(d,e,f,g,h,i,j,k){var w=C.cB(),v=A.k.D(i*0.0017,0.02,0.06)
return C.eq(h,!1,j,A.aD,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.cE,A.O,"",v,w,null,"","",0,!1,"",0,D.bg,4280172719,2,k,0,0,"",D.cl,D.cP,g,e,f)},
fe4(d,e,f,g){return C.few(0,0.002,D.fr,g,0.8,"ul_"+B.u(d)+"_"+B.u(e),f,d,e+0.002)},
fXB(d,e,f,g,h,i,j,k){var w=C.cB()
return C.eq(A.qu,!1,j,A.aD,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.bo,A.a6,"",h,w,null,"","",0,!1,"",0,D.bg,4280172719,2,k,0,0,"",D.cl,D.cP,g,e,f)},
hgS(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gH(A.a.ef(v,w,"").split(":"))},
bBd(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gH(t)
t=x.N
r=B.U(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.L)(t),++n){m=t[n]
l=C.hgS(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.l6&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hG()}h=C.h_8(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.BJ(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gH(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.L)(w),++n){m=w[n]
l=C.hgS(m)
if(l!=null&&r.ai(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.l6&&A.a.cc(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bs(a1.z,new C.fyT(a2))}else A.d.bs(a1.z,new C.fyU())
A.d.L(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fAS(a0))a0.ax=a6.f.a5().ac()
return a0},
h_8(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fBF(D.a5d),l=C.cB(),k=x.u,j=B.a([C.eq(A.bh,!1,s,A.aD,"marriage_locked_bg",r,24,A.bo,A.a6,"",1,C.cB(),m,"","",0,!1,"",0,D.bg,q,2,"",0,0,"",D.cl,D.ly,1,0,0)],k),i=B.a([],k)
i.push(C.Kx("NGMY",A.L,236069181,52,A.bo,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Kx("TAREHE:",A.bh,o,16,A.bo,A.H,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fXA("tarehe",0.8059999999999999,0.026,0.18,A.bh,16,p,C.hgT()))
i.push(C.fe4(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Kx("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bo,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Kx("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cE,A.a6,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.few(0,0.002,D.fr,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fXB("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fXB("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fXB("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.few(268435456,0.175,D.bg,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Kx("VIDEO YA KIAPO",A.bh,o,10,A.bo,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.eq(A.bh,!1,s,A.aD,"__kiapo_video__",r,24,A.bo,A.a6,"",0.131,C.cB(),t,"","",0,!1,"",0,D.bg,q,2,"",0,0,"",D.cl,D.ly,0.77,0.115,0.492))
i.push(C.Kx("Rais Anayeapa:",A.bh,p,15,A.bo,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Kx("Jina:",A.bh,p,13,A.bo,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fXA("rais_jina",0.195,0.6930000000000001,0.62,A.bh,13,p,""))
i.push(C.fe4(0.195,0.7130000000000001,0.62,n))
i.push(C.Kx("Sahihi:",A.bh,p,13,A.bo,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.eq(A.bh,!1,s,A.aD,"marriage_sign_rais",0,24,A.bo,A.a6,"",0.07,C.cB(),t,"","",0,!1,"",0,D.bg,0,2,"",0,0,"",D.cl,D.f5,0.38,0.21500000000000002,0.73))
i.push(C.fe4(0.21500000000000002,0.795,0.38,n))
i.push(C.Kx("Tarehe:",A.bh,p,13,A.bo,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fXA("rais_tarehe",0.745,0.74,0.2,A.bh,12,p,C.hgT()))
i.push(C.fe4(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.few(0,0.032,D.bg,o,1,"state_box",0.72,0.14,0.875),C.Kx("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bo,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rw(4294967035,t,0,0,j,l,D.qj,"","",u,D.df)
return C.BJ(t,t,t,t,D.ob,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cB(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
agh(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agh=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.I(x.q).f.S(D.eX5)
w=1
break}w=3
return B.b(C.V8(!0),$async$agh)
case 3:w=4
return B.b(C.aZL(p),$async$agh)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hm_(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bQ(D.beB,null,new C.ftN(p),f,!0,!0,!1,A.lz,!1,!1,x.N),$async$agh)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.ca(null,null,!0,null,new C.ftO(),f,null,!0,!0,x.y),$async$agh)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.h_8(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.I(x.q).f
q.S(B.b2(null,null,null,null,null,A.r,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.h_8(p))
case 1:return B.h(u,v)}})
return B.i($async$agh,v)},
ff4:function ff4(){},
c9k:function c9k(){},
fyT:function fyT(d){this.a=d},
fyU:function fyU(){},
ftN:function ftN(d){this.a=d},
ftL:function ftL(d){this.a=d},
ftM:function ftM(d){this.a=d},
ftO:function ftO(){},
ftJ:function ftJ(d){this.a=d},
ftK:function ftK(d){this.a=d},
aq6:function aq6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDo:function aDo(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
ea1:function ea1(d){this.a=d},
ea_:function ea_(d){this.a=d},
ea0:function ea0(d){this.a=d},
ea2:function ea2(d){this.a=d},
ea3:function ea3(d){this.a=d},
wA(d,e,f,g,h,i,j,k,l,m,n){var w=C.cB()
return C.eq(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bo,h,"",i,w,null,"","",0,!1,"",j,D.bg,4280172719,2,d,0,0,"",D.cl,D.cP,l,m,n)},
hgw(d,e,f){var w=4291404327
return B.a([C.q8(0,f,D.eN,w,2,"ring_l",f,d-f*0.42,e),C.q8(0,f,D.eN,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fdv(d,e,f,g,h){var w,v,u="ps_"+g,t=C.q8(4294967288,f,D.eN,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.q8(h,s,D.eN,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.q8(h,f*0.46,D.eN,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
q8(d,e,f,g,h,i,j,k,l){var w=C.cB()
return C.eq(A.bh,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bo,A.a6,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cl,D.f5,j,k,l)},
fdu(d,e,f,g,h,i,j,k,l){var w=C.cB(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.eq(h,!1,k,A.aD,i?u+A.k.ab(g,3)+":"+A.o.ab(j,1):u+A.k.ab(g,3),4280640491,j,A.cE,A.O,"",v,w,null,"","",0,!1,"",0,D.bg,4280172719,2,l,0,0,"",D.cl,D.cP,g,e,f)},
byF(d,e,f,g){return C.q8(0,0.002,D.fr,g,0.8,"ul_"+B.u(d)+"_"+B.u(e),f,d,e+0.002)},
hgv(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.q8(0,0.036,D.bg,h,1.4,"banner_box_"+d,w,v,e),C.wA(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hlK(){var w=new B.S(Date.now(),0,!1),v=new C.fzZ()
return B.u(v.$1(B.bS(w)))+"/"+B.u(v.$1(B.bH(w)))+"/"+B.bA(w)},
hgx(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wA(r+".",A.bh,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fdu("witness_"+d+"_"+r+"_name",q,g,p,A.bh,!0,16,j,"[Jina la Shahidi]"),C.byF(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.wA("Sahihi:",A.bh,j,15,A.a6,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.eq(A.bh,!1,4279310375,A.aD,"marriage_sign_"+d+"_witness_"+r,0,24,A.bo,A.a6,"",0.05,C.cB(),null,"","",0,!1,"",0,D.bg,0,2,"",0,0,"",D.cl,D.f5,s,t,g-0.004),C.byF(t,g+0.044,s,w)],x.u)},
agI(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.dfm,D.ck3,D.d7K,D.d9B],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.L)(s),++w)for(v=A.d.gae(s[w]);v.C();){u=v.gT(0)
if(u.a===d)return u}return null},
fWS(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fBF(d.d),v=B.a([C.eq(A.bh,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bo,A.a6,"",1,C.cB(),w,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cl,D.ly,1,0,0)],x.u)
A.d.v(v,C.hS1(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hS1(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wA("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hgw(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hgw(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fdv(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fdv(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wA("\ud83c\udf33",A.L,4279898632,22,A.a6,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.q8(0,0.062,D.eN,b1,1.6,"crest_o",0.11,0.445,0.012),C.q8(0,0.046,D.eN,b1,1,"crest_i",0.084,0.458,0.02),C.wA("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.q8(0,0.002,D.fr,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.q8(b9,0.016,D.l7,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.q8(0,0.002,D.fr,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wA("TAREHE:",A.bh,c0,20,A.H,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fdu("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bh,!1,21,b9,C.hlK()),C.byF(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wA(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.q8(c0,0.0026,D.bg,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.q8(c3.e,0.138,D.bg,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cB()
c2.push(C.eq(A.bh,!1,b9,A.aD,"marriage_field_utangulizi:"+A.k.ab(0.82,3),b2,19,A.bo,A.cv,"",0.128,s,a9,"","",0,!1,"",0,D.bg,b3,2,c5,0,0,"",D.cl,D.cP,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.q8(0,0.036,D.bg,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cB()
A.d.v(c2,B.a([s,C.eq(A.L,!1,c0,A.aD,"marriage_field_nimetowe_label:"+A.k.ab(r,3),b2,30,A.bo,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bg,b3,2,c7,0,0,"",D.cl,D.cP,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hgv(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wA(c9,A.bh,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fdu("mahari_"+p,0.132,k,m,A.bh,!1,16,b9,s)
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
d=B.a([new C.eG(""+1000*i+"_"+h,D.cP,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bo,A.aD,c0,A.bh,a9,D.bg,b2,b3,2,0,!1,s,0,D.cl,0,"","","","","",!1,0),j,new C.eG(""+1000*f+"_"+e,D.f5,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a6,A.bo,A.aD,b6,A.bh,a9,D.fr,0,b5,0.8,0,!1,g,0,D.cl,0,"","","","","",!1,0)],c1)
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
A.d.v(d,B.a([new C.eG(""+1000*s+"_"+p,D.cP,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bo,A.aD,b7,A.dP,a9,D.bg,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cl,0,"","","","","",!1,0),new C.eG(""+1000*i+"_"+h,D.f5,a1,a2,0.046,0.025875,"",24,A.a6,A.bo,A.aD,b6,A.bh,a9,D.bg,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cl,0,"","","","","",!1,0),new C.eG(""+1000*g+"_"+f,D.cP,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bo,A.aD,b7,A.L,a9,D.bg,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cl,0,"","","","","",!1,0),new C.eG(""+1000*e+"_"+a3,D.f5,a0,k,a1+0.046-a0,l,"",24,A.a6,A.bo,A.aD,b6,A.bh,a9,D.bg,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cl,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hgv("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a52||w===D.a54||w===D.a51||w===D.a53){w=t-0.008
A.d.v(c2,C.fdv(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fdv(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.q8(0,a4,D.bg,c0,1.3,"wit_table_border",0.82,0.09,t),C.q8(c0,a4,D.bg,c0,0,"wit_table_divider",0.0024,0.4988,t),C.q8(0,0.0022,D.fr,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wA("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wA("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hgx("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hgx("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.q8(0,0.11,D.bg,c0,1.2,"mw_box",0.82,0.09,t),C.wA("MWANDISHI",A.bh,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wA("Jina:",A.bh,b9,15,A.a6,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fdu("mwandishi_jina",0.215,w,0.3116,A.bh,!0,15,b9,""),C.byF(0.215,p,0.3116,b5),C.wA("Sahihi:",A.bh,b9,15,A.a6,0.028,0,"mw_sl",0.09,0.5,w),C.eq(A.bh,!1,b6,A.aD,"marriage_sign_mwandishi",0,24,A.bo,A.a6,"",0.044,C.cB(),a9,"","",0,!1,"",0,D.bg,0,2,"",0,0,"",D.cl,D.f5,0.3161999999999999,0.5738,s-0.044),C.byF(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.q8(0,0.032,D.bg,c0,1,"state_box",0.7,0.15,a8),C.wA("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
i2O(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.h_N(d.d),p=new C.fzV(s),o=new C.fzW(s),n=d.z,m=n===D.a52||n===D.a54||n===D.a51||n===D.a53,l=n===D.aFq||n===D.a55||n===D.aFr,k=B.bT(0,B.fO(q,A.A,t,t,A.ce,A.bU,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a55?26:16
i.push(new C.fzY().$1$size(w))}if(n===D.aFs)i.push(D.fCf)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.is,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.an)
n=B.I(r,A.q,1.1)
w=B.n(4)
i.push(B.p(t,B.w(B.a([p.$0(),D.aOz,p.$1$w(0.9),D.aOz,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.b9M,t,n,w,t,t,A.n),t,t,t,t,A.aj4,t,t,t))
i.push(A.an)
i.push(new C.fzX(r).$1("NIMETOWE"))
i.push(A.fF)
v=J.e6(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.Mh,new B.ck(A.aN,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a5),t,7,t,t,t,t,t,7),A.db,new B.bB(1,A.bf,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b5)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.V,t,A.b0,A.r,B.a([k,new B.D(A.ahH,B.w(i,A.ai,t,A.e,A.j,0,A.p),t)],j),t)},
hl4(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.agI(e,t)
if(r==null)r=A.d.gH(D.GR)
w=C.cB()
v=C.rw(r.e,t,0,0,C.fWS(r,0.165,y.O,D.dac,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.qj,"","",s,D.df)
w=C.cB()
u=A.a.i(d)
if(u.length===0)u=t
return C.BJ(t,t,t,t,D.ob,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hl5(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.agI(e,t)
if(r==null)r=A.d.gH(D.GR)
w=C.cB()
v=C.rw(r.e,t,0,0,C.fWS(r,0.165,y.f,D.d5Q,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.qj,"","",s,D.df)
w=C.cB()
u=A.a.i(d)
if(u.length===0)u=t
return C.BJ(t,t,t,t,D.ob,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bCz(d,e,f){var w=0,v=B.j(x.T),u
var $async$bCz=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bQ(A.K,null,new C.fLB(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCz,v)},
agi(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agi=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("a_<1>")
p=B.C(new B.a_(i,new C.ftR(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bQ(D.Lv,null,new C.ftS(p),d,!0,!0,!1,A.lz,!1,!1,x.N),$async$agi)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hG())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCz(d,"Hati ya Kuhowa",D.GR),$async$agi)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Lc(d,"Tafuta jimbo\u2026","",A.k9,"Chagua jimbo"),$async$agi)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hl4(r,s))
case 1:return B.h(u,v)}})
return B.i($async$agi,v)},
agj(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agj=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("a_<1>")
p=B.C(new B.a_(i,new C.ftV(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bQ(D.Lv,null,new C.ftW(p),d,!0,!0,!1,A.lz,!1,!1,x.N),$async$agj)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hG())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCz(d,"Hati ya Kuhoweya",D.GR),$async$agj)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Lc(d,"Tafuta jimbo\u2026","",A.k9,"Chagua jimbo"),$async$agj)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hl5(r,s))
case 1:return B.h(u,v)}})
return B.i($async$agj,v)},
agk(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$agk=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.T(i).k("a_<1>")
m=B.C(new B.a_(i,new C.ftZ(),n),n.k("J.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bQ(D.Lv,null,new C.fu_(m),d,!0,!0,!1,A.lz,!1,!1,x.N),$async$agk)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(m).hG())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCz(d,"Malipo ya Awamu ya Mahari",D.QD),$async$agk)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Lc(d,"Tafuta jimbo\u2026","",A.k9,"Chagua jimbo"),$async$agk)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.agI(s,D.QD)
if(q==null)q=A.d.gH(D.QD)
n=C.cB()
p=C.rw(q.e,null,0,0,C.fWS(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.d0L,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.qj,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.df)
n=C.cB()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.BJ(null,null,null,null,D.ob,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agk,v)},
xA:function xA(d,e){this.a=d
this.b=e},
jm:function jm(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fzZ:function fzZ(){},
fzV:function fzV(d){this.a=d},
fzX:function fzX(d){this.a=d},
fzY:function fzY(){},
fzW:function fzW(d){this.a=d},
fLB:function fLB(d,e){this.a=d
this.b=e},
ad2:function ad2(d,e,f){this.c=d
this.d=e
this.a=f},
dXE:function dXE(d,e,f){this.a=d
this.b=e
this.c=f},
dXD:function dXD(d,e){this.a=d
this.b=e},
dXC:function dXC(d,e){this.a=d
this.b=e},
acs:function acs(d,e,f){this.c=d
this.d=e
this.a=f},
ftR:function ftR(){},
ftS:function ftS(d){this.a=d},
ftP:function ftP(d){this.a=d},
ftQ:function ftQ(d){this.a=d},
ftV:function ftV(){},
ftW:function ftW(d){this.a=d},
ftT:function ftT(d){this.a=d},
ftU:function ftU(d){this.a=d},
ftZ:function ftZ(){},
fu_:function fu_(d){this.a=d},
ftX:function ftX(d){this.a=d},
ftY:function ftY(d){this.a=d},
KA(d,e,f,g,h,i,j,k,l,m){var w=C.cB()
return C.eq(e,!1,f,A.aD,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bo,h,"",i,w,null,"","",0,!1,"",0,D.bg,4280172719,2,d,0,0,"",D.cl,D.cP,k,l,m)},
CI(d,e,f,g,h,i,j,k,l){var w=C.cB()
return C.eq(A.bh,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bo,A.a6,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cl,D.f5,j,k,l)},
hhc(d,e,f){return C.CI(0,0.002,D.fr,4293056712,0.8,"ul_"+B.u(d)+"_"+B.u(e),f,d,e+0.022)},
byP(d,e,f,g,h){return B.a([C.CI(4294967288,0.032,D.bg,4291404327,1.15,"pill_"+d,g,f,e),C.KA(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fXF(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.u(e)
return B.a([C.CI(0,0.002,D.fr,g,1,"orn_l_"+t,u,d,v),C.CI(h,0.016,D.l7,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.CI(0,0.002,D.fr,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a1_(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.KA(d,A.bh,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cB()
return B.a([v,C.eq(A.L,!1,j,A.aD,"marriage_field_"+e+":"+A.k.ab(t,3),4280640491,i,A.cE,A.O,"",0.02,s,null,"","",0,!1,"",0,D.bg,4280172719,2,k,0,0,"",D.cl,D.cP,t,u,g-0.002),C.hhc(u,g+0.018,t)],x.u)},
hhd(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.CI(h,0.028,D.bg,h,0,"chv_"+d,g,e,f),C.CI(w,0.024,D.l7,w,0,"chv_l_"+d,0.024,e-0.008,v),C.CI(w,0.024,D.l7,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.KA(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
byO(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.KA("Sahihi:",A.bh,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.eq(A.bh,!1,4279310375,A.aD,"marriage_sign_"+d,0,24,A.bo,A.a6,"",0.032,C.cB(),null,"","",0,!1,"",0,D.bg,0,2,"",0,0,"",D.cl,D.f5,v,w,f-0.006),C.hhc(w,f+0.016,v)],x.u)},
h_O(d){var w,v
for(w=0;w<19;++w){v=D.QS[w]
if(v.a===d)return v}return null},
i54(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.agI(A.a.b3(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.agI(A.a.b3(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b3(k,18)
w=C.agI(u,D.QD)
v=w==null?l:w.d
if(v==null){w=C.agI(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.h_O(A.a.b3(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hi1.a8(0)
$.hie.a8(0)
t=C.fBF(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.L)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
h0U(d){var w=0,v=B.j(x.T),u
var $async$h0U=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bQ(A.K,null,new C.fN3(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h0U,v)},
xD:function xD(d,e){this.a=d
this.b=e},
nG:function nG(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bix:function bix(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fN3:function fN3(){},
ad5:function ad5(d){this.a=d},
eeo:function eeo(d,e){this.a=d
this.b=e},
een:function een(d){this.a=d},
eem:function eem(d,e){this.a=d
this.b=e},
aeL:function aeL(d,e,f){this.c=d
this.d=e
this.a=f},
h_N(d){return $.hie.ca(0,d,new C.fBH(d))},
fBF(d){return $.hi1.ca(0,d,new C.fBG(d))},
fA(d){return B.fR3(d>>>16&255,d>>>8&255,d&255,255)},
hV8(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hjj(4294570461,4293910718,4284234270,u)
case 1:return C.hjj(4294635750,4293975240,t,4292912216)
case 2:w=C.fc3(s,4294505966,r)
C.byz(w,14,16,p)
C.ku(w,8,9,464,836,u,1.2)
C.CE(w,2,2,1,1,u,10)
C.CE(w,478,2,-1,1,u,10)
C.CE(w,2,852,1,-1,u,10)
C.CE(w,478,852,-1,-1,u,10)
return w
case 3:return C.fc3(4294966515,4294373082,4289102906)
case 4:return C.hPR(C.fc3(4294376440,4293653998,4290287194))
case 5:w=C.fc3(4294965238,4294437098,4288444980)
C.byz(w,14,16,4283043359)
C.ku(w,6,7,468,840,u,1)
C.ku(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hs(q,q,A.ca,0,A.e5,854,q,0,3,q,A.ca,480,!1)
C.yw(v,n,4294175448)
C.rT(v,n)
C.ku(v,24,24,432,806,4286209070,1)
C.a0N(v,12,12,468,12,o,3,20)
C.a0N(v,12,842,468,842,o,3,20)
C.a0N(v,12,12,12,842,o,3,20)
C.a0N(v,468,12,468,842,o,3,20)
return v
case 7:return C.hNX(4294440434,4293518297,4280228630,r)
case 8:v=B.hs(q,q,A.ca,0,A.e5,854,q,0,3,q,A.ca,480,!1)
C.yw(v,m,4293911504)
C.rT(v,m)
C.ku(v,28,28,424,798,l,1)
C.fle(v,28,28,l,k)
C.fle(v,452,28,l,k)
C.fle(v,28,826,l,k)
C.fle(v,452,826,l,k)
return v
case 9:v=B.hs(q,q,A.ca,0,A.e5,854,q,0,3,q,A.ca,480,!1)
C.yw(v,j,4294111986)
C.rT(v,j)
C.ku(v,18,18,444,818,4292401368,0.7)
B.iK(v,!0,C.fA(p),0,13,0,853)
return v
case 10:return C.hRO(i,4294173372)
case 11:return C.hSV(4294439140,4293449662)
case 12:return C.hNP(h,4294239432)
case 13:return C.hSm(4294244340,4293193448)
case 14:return C.hWJ(4294505710,4293780694)
case 15:return C.fb_(4294966259,4294439138,o,p,q)
case 16:return C.fb_(4294966776,4294178544,o,g,g)
case 17:return C.fb_(4294965493,4294504170,o,4286200650,q)
case 18:return C.fb_(4294966519,4294373862,o,p,p)
case 19:return C.hQW()
case 20:return C.hQX()
case 21:v=B.hs(q,q,A.ca,0,A.e5,854,q,0,3,q,A.ca,480,!1)
C.yw(v,h,4293976768)
C.rT(v,h)
C.byz(v,14,16,p)
B.iK(v,!0,C.fA(u),4,475,4,9)
B.iK(v,!0,C.fA(u),4,475,844,849)
B.iK(v,!0,C.fA(u),4,9,4,849)
B.iK(v,!0,C.fA(u),470,475,4,849)
C.a0N(v,10,12,470,12,u,2,16)
C.a0N(v,10,842,470,842,u,2,16)
C.a0N(v,10,12,10,842,u,2,18)
C.a0N(v,470,12,470,842,u,2,18)
C.CE(v,2,2,1,1,t,10)
C.CE(v,478,2,-1,1,t,10)
C.CE(v,2,852,1,-1,t,10)
C.CE(v,478,852,-1,-1,t,10)
C.ku(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hs(q,q,A.ca,0,A.e5,854,q,0,3,q,A.ca,480,!1)
C.yw(v,s,4294438872)
C.rT(v,s)
C.ku(v,14,16,452,822,o,2.2)
C.ku(v,22,24,436,806,o,1)
C.fZ0(v,!1,!1,o,p,p,36,14,16)
C.kK(v,240,20,7,o,!0)
C.kK(v,240,834,7,o,!0)
C.kK(v,18,427,7,o,!0)
C.kK(v,462,427,7,o,!0)
return v
case 23:v=B.hs(q,q,A.ca,0,A.e5,854,q,0,3,q,A.ca,480,!1)
C.yw(v,i,4293910712)
C.rT(v,i)
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
case 24:v=B.hs(q,q,A.ca,0,A.e5,854,q,0,3,q,A.ca,480,!1)
C.yw(v,e,4294174404)
C.rT(v,e)
C.byz(v,14,16,p)
B.iK(v,!0,C.fA(u),3,476,3,8)
B.iK(v,!0,C.fA(u),3,476,845,850)
B.iK(v,!0,C.fA(u),3,8,3,850)
B.iK(v,!0,C.fA(u),471,476,3,850)
C.ku(v,9,10,462,834,t,1)
C.ku(v,14,16,452,822,u,1.8)
C.kK(v,240,8,4,u,!0)
C.kK(v,240,846,4,u,!0)
C.kK(v,8,427,4,u,!0)
C.kK(v,472,427,4,u,!0)
C.kK(v,8,8,3,t,!0)
C.kK(v,472,8,3,t,!0)
C.kK(v,8,846,3,t,!0)
C.kK(v,472,846,3,t,!0)
return v}},
yw(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kM(d,!1,A.dd,new B.S1(s),r,A.cX,1,0,w-1,k,k);++k}},
rT(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.f5()
n.dU(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.az(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.az(v==null?0:v)
v=d.a
s=v==null?o:v.dT(u,t,o)
if(s==null)s=new B.iF()
v=A.o.D(A.k.N(s.gb7(s))-3,0,255)
r=A.o.D(A.k.N(s.gbe())-3,0,255)
q=A.o.D(A.k.N(s.gbc(s))-2,0,255)
p=d.a
if(p!=null)p.jR(u,t,v,r,q,255)}},
ku(d,e,f,g,h,i,j){var w,v=null,u=C.fA(i),t=e+g
B.kM(d,!0,A.dd,u,v,A.cX,j,e,t,f,f)
w=f+h
B.kM(d,!0,A.dd,u,v,A.cX,j,e,t,w,w)
B.kM(d,!0,A.dd,u,v,A.cX,j,e,e,f,w)
B.kM(d,!0,A.dd,u,v,A.cX,j,t,t,f,w)},
CE(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.V(j*0.72),8,j-2)
B.kM(d,!0,A.dd,C.fA(i),u,A.cX,2,e,e+g*j,f,f)
B.kM(d,!0,A.dd,C.fA(i),u,A.cX,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kM(d,!0,A.dd,C.fA(i),u,A.cX,1,w,e+g*t,v,v)
B.kM(d,!0,A.dd,C.fA(i),u,A.cX,1,w,w,v,f+h*t)},
hjj(d,e,f,g){var w=null,v=B.hs(w,w,A.ca,0,A.e5,854,w,0,3,w,A.ca,480,!1)
C.yw(v,d,e)
C.rT(v,d)
B.iK(v,!0,C.fA(f),0,479,0,28)
B.iK(v,!0,C.fA(f),0,479,826,853)
B.iK(v,!0,C.fA(f),0,28,0,853)
B.iK(v,!0,C.fA(f),452,479,0,853)
C.ku(v,5,5,470,844,g,1.1)
C.ku(v,28,28,424,798,g,1.6)
C.CE(v,2,2,1,1,g,11)
C.CE(v,478,2,-1,1,g,11)
C.CE(v,2,852,1,-1,g,11)
C.CE(v,478,852,-1,-1,g,11)
return v},
fc3(d,e,f){var w=null,v=B.hs(w,w,A.ca,0,A.e5,854,w,0,3,w,A.ca,480,!1)
C.yw(v,d,e)
C.rT(v,d)
C.ku(v,14,16,452,822,f,1.6)
C.ku(v,20,22,440,810,f,0.8)
return v},
byz(d,e,f,g){var w,v=C.fA(g)
B.iK(d,!0,v,0,479,0,f-1)
w=854-f
B.iK(d,!0,v,0,479,w,853);--w
B.iK(d,!0,v,0,e-1,f,w)
B.iK(d,!0,v,480-e,479,f,w)},
hPR(d){var w,v,u=4291404327
C.byz(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kK(d,w,8,3,u,!0)
C.kK(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kK(d,7,v,3,u,!0)
C.kK(d,473,v,3,u,!0)}return d},
fok(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jf(e,f),new B.jf(e+g*n,f),new B.jf(e,f+h*n)],t)
B.a1z(d,C.fA(m),s)
w=A.o.D(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jf(s,u),new B.jf(e+g*v,u),new B.jf(s,f+h*v)],t)
B.a1z(d,C.fA(k),t)
t=A.k.V(n*0.39)
C.kK(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kK(d,e+g*t,f+h*3,4,k,!0)
C.kK(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kK(d,e+g*t,f,5,k,!0)
C.kK(d,e,f+h*t,5,k,!0)}},
fZ0(d,e,f,g,h,i,j,k,l){var w,v
C.fok(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fok(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fok(d,k,v,1,-1,e,f,g,h,i,j)
C.fok(d,w,v,-1,-1,e,f,g,h,i,j)},
a0N(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.l4(d,!0,A.dd,new B.r1(p),null,A.cX,j,r,q)}},
fnm(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kM(d,!0,A.dd,new B.r1(o),null,A.cX,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kM(d,!0,A.dd,new B.r1(o),null,A.cX,1.4,q,q,p,p+h*r)}},
hNX(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hs(o,o,A.ca,0,A.e5,854,o,0,3,o,A.ca,480,!1)
C.yw(n,d,e)
C.rT(n,d)
C.ku(n,20,20,440,814,f,1.2)
C.fnm(n,0,0,1,1,g)
C.fnm(n,480,0,-1,1,g)
C.fnm(n,0,854,1,-1,g)
C.fnm(n,480,854,-1,-1,g)
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
B.kM(n,!0,A.dd,new B.r1(p),o,A.cX,1.2,240,r,60,q)}return n},
fle(d,e,f,g,h){var w
C.frD(d,!0,C.fA(g),13,e,f)
C.frD(d,!0,C.fA(g),9,e,f)
w=B.a([new B.jf(e,f-4),new B.jf(e+4,f),new B.jf(e,f+4),new B.jf(e-4,f)],x.J)
B.a1z(d,C.fA(h),w)},
kK(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jf(e,v),new B.jf(u,f),new B.jf(e,t),new B.jf(s,f)],x.J)
if(i){B.a1z(d,C.fA(h),r)
return}B.kM(d,!0,A.dd,C.fA(h),w,A.cX,1,e,u,v,f)
B.kM(d,!0,A.dd,C.fA(h),w,A.cX,1,u,e,f,t)
B.kM(d,!0,A.dd,C.fA(h),w,A.cX,1,e,s,t,f)
B.kM(d,!0,A.dd,C.fA(h),w,A.cX,1,s,e,f,v)},
faZ(d,e,f,g,h,i,j){var w,v=B.a([new B.jf(e,f),new B.jf(e+g*28,f),new B.jf(e,f+h*28)],x.J)
B.a1z(d,C.fA(i),v)
v=e+g*14
w=f+h*14
C.kK(d,v,w,6,j,!0)
C.kK(d,v,w,3,i,!0)},
fb_(d,e,f,g,h){var w=null,v=B.hs(w,w,A.ca,0,A.e5,854,w,0,3,w,A.ca,480,!1)
C.yw(v,d,e)
C.rT(v,d)
C.ku(v,18,18,444,818,f,2)
C.ku(v,26,26,428,802,f,0.9)
if(h!=null)B.iK(v,!0,C.fA(h),28,451,28,34)
C.faZ(v,18,18,1,1,g,f)
C.faZ(v,462,18,-1,1,g,f)
C.faZ(v,18,836,1,-1,g,f)
C.faZ(v,462,836,-1,-1,g,f)
return v},
hQW(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hs(v,v,A.ca,0,A.e5,854,v,0,3,v,A.ca,480,!1)
C.yw(r,u,4294240980)
C.rT(r,u)
C.ku(r,10,12,460,830,t,3.2)
C.ku(r,18,20,444,814,s,1.2)
C.ku(r,24,26,432,802,t,1.8)
C.fZ0(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kK(r,w,16,3,t,!0)
C.kK(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kK(r,16,w,3,t,!0)
C.kK(r,464,w,3,t,!0)}return r},
hQX(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hs(t,t,A.ca,0,A.e5,854,t,0,3,t,A.ca,480,!1)
C.yw(p,s,4294373080)
C.rT(p,s)
C.ku(p,16,18,448,818,r,2.4)
C.ku(p,24,26,432,802,4286209044,1)
w=new C.fdm(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fZ0(p,!1,!0,r,q,q,34,16,18)
return p},
bzf(d,e,f,g,h,i){B.iK(d,!0,C.fA(i),e,e+g,f,f+h)},
bA4(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kM(d,!1,A.dd,new B.S1(i),null,A.cX,1,e,w,l,l)}},
hRN(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.E(A.o.am(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kM(d,!1,A.dd,new B.r1(r),null,A.cX,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.E(A.o.am(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kM(d,!1,A.dd,new B.r1(r),null,A.cX,1,t,t,f,s);++q}},
hRO(d,e){var w,v,u=null,t=B.hs(u,u,A.ca,0,A.e5,854,u,0,3,u,A.ca,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hRN(t,v,w,30,D.cUs,(A.o.am(v,30)+A.o.am(w,30)&1)===0)
C.bzf(t,44,44,392,766,d)
C.bA4(t,44,44,392,766,d,e)
C.rT(t,d)
C.ku(t,44,44,392,766,4292128567,2.2)
C.ku(t,50,50,380,754,4279898632,0.8)
return t},
hSU(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.E(g,4)){case 0:C.kK(d,e,f,7,h,!0)
C.kK(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kM(d,!0,A.dd,C.fA(h),o,A.cX,1.6,w,u,v,t)
B.kM(d,!0,A.dd,C.fA(h),o,A.cX,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kM(d,!0,A.dd,new B.r1(p),o,A.cX,1.2,w,v,q,q)}break
default:B.kM(d,!0,A.dd,C.fA(h),o,A.cX,1.5,e-8,e+8,f,f)
B.kM(d,!0,A.dd,C.fA(h),o,A.cX,1.5,e,e,f-8,f+8)
B.l4(d,!0,A.dd,C.fA(h),o,A.cX,2,e,f)}},
hSV(d,e){var w,v,u,t,s=null,r=B.hs(s,s,A.ca,0,A.e5,854,s,0,3,s,A.ca,480,!1)
B.iK(r,!0,C.fA(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hSU(r,u,v,w,4292391514)}C.bzf(r,46,46,388,762,d)
C.bA4(r,46,46,388,762,d,e)
C.rT(r,d)
C.ku(r,46,46,388,762,4291404327,1.8)
return r},
heJ(d,e,f,g){C.frD(d,!0,C.fA(g),16,e,f)
C.frD(d,!0,C.fA(g),11,e,f)
C.kK(d,e,f,6,g,!0)
B.kM(d,!0,A.dd,C.fA(g),null,A.cX,1.3,e-14,e+14,f,f)
B.kM(d,!0,A.dd,C.fA(g),null,A.cX,1.3,e,e,f-14,f+14)},
hNP(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hs(v,v,A.ca,0,A.e5,854,v,0,3,v,A.ca,480,!1)
B.iK(s,!0,C.fA(4280948752),0,479,0,853)
B.iK(s,!0,C.fA(u),0,479,0,78)
B.iK(s,!0,C.fA(u),0,479,776,853)
for(w=28;w<460;w+=44){C.heJ(s,w,39,t)
C.heJ(s,w,815,t)}C.bzf(s,38,92,404,670,d)
C.bA4(s,38,92,404,670,d,e)
C.rT(s,d)
C.ku(s,38,92,404,670,t,1.8)
C.ku(s,45,99,390,656,4287322667,0.8)
return s},
hSl(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jf(e,f),new B.jf(q-5,w),new B.jf(q,f-(18-Math.abs(r)*3)),new B.jf(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a1z(d,new B.r1(o),p)}B.l4(d,!0,A.dd,C.fA(4292128567),null,A.cX,3,e,f)},
hSm(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hs(s,s,A.ca,0,A.e5,854,s,0,3,s,A.ca,480,!1)
C.yw(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kM(q,!0,A.dd,new B.r1(v),s,A.cX,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kM(q,!0,A.dd,new B.r1(u),s,A.cX,1.1,v,v,0,853)}B.iK(q,!0,C.fA(r),0,479,0,70)
B.iK(q,!0,C.fA(r),0,479,798,853)
for(t=0;t<5;++t)C.hSl(q,70+t*85,48,4292128567)
C.bzf(q,48,78,384,712,d)
C.bA4(q,48,78,384,712,d,e)
C.rT(q,d)
C.ku(q,48,78,384,712,4291404327,1.6)
return q},
hWJ(d,e){var w,v,u,t=null,s=4279970378,r=B.hs(t,t,A.ca,0,A.e5,854,t,0,3,t,A.ca,480,!1)
B.iK(r,!0,C.fA(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kK(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.l4(r,!0,A.dd,new B.r1(u),t,A.cX,1,v,w)}C.bzf(r,40,40,400,774,d)
C.bA4(r,40,40,400,774,d,e)
C.rT(r,d)
C.ku(r,40,40,400,774,4291058750,2)
C.ku(r,48,48,384,758,s,0.8)
return r},
kT:function kT(d,e){this.a=d
this.b=e},
fBH:function fBH(d){this.a=d},
fBG:function fBG(d){this.a=d},
fdm:function fdm(d){this.a=d},
fCk(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hSO(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fXy(d){var w,v,u,t=null,s=A.a.cK(d,"{"),r=A.a.oF(d,"}")
if(s<0||r<=s)return t
try{w=A.S.aL(0,Ah.agE(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
af8(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$af8=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vl(null,""),$async$af8)
case 3:n=g
if(A.a.i(n).length===0)throw B.V("AI is not available right now. Please try again later.")
t=B.n2(n)
if(e==null)s=A.hC
else{r=C.hSO(e)
s=B.a([new B.a_N(A.cJ.gct().aK(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qT(t,d,s,"news",E.Fl),$async$af8)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.V(q!=null&&B.L1(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$af8,v)},
bBH(d){return C.i4L(d)},
i4L(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bBH=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.S.ao(d.ag(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.af8(r,null),$async$bBH)
case 7:q=f
p=C.fXy(q)
if(p==null){u=d
w=1
break}o=d.aCi(p)
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
return B.i($async$bBH,v)},
hiC(d){var w,v=F.h_4(d)
v=B.aK(v,"book","newspaper")
if(F.a1S(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fGf(d,e,f,g){return C.i6C(d,e,f,g)},
i6C(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fGf=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fCk(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hm8()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.af8('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hiC(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fGf)
case 3:r=m.fXy(i)
if(r==null)throw B.V(y.S)
q=new C.zB(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","").aCi(r)
t=q.r
if(t.length===0)throw B.V("The AI did not write a story. Try again.")
s=n+" "+A.d.aH(t," ")
if(F.a1S(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a1S(A.d.aH(t," "))==="sw"?C.bBH(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fGf,v)},
bBb(d,e,f,g,h){return C.i2n(d,e,f,g,h)},
i2n(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bBb=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fO(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.L)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aH(l,"\n")
l=C.hm8()
k=A.S.ao(d.ag(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.af8('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hiC(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bBb)
case 3:p=j.fXy(a0)
if(p==null)throw B.V(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cJ(o)){n=d.aCi(B.a2(o,x.N,x.z))
m=A.S.ao(n.ag(),null)!==A.S.ao(d.ag(),null)}else{n=d
m=!1}w=m&&F.a1S(A.d.aH(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bBH(n),$async$bBb)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a7F(A.a.i(B.u(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBb,v)},
a7F:function a7F(d,e,f){this.a=d
this.b=e
this.c=f},
i9p(d,e){return B.a4(d,!1).cm(B.e9(new C.fNe(e),!0,null,x.H))},
fNe:function fNe(d){this.a=d},
VB:function VB(d,e){this.c=d
this.a=e},
aDF:function aDF(d,e,f,g,h,i,j,k){var _=this
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
ehl:function ehl(d){this.a=d},
ehk:function ehk(){},
ehm:function ehm(d){this.a=d},
ehj:function ehj(d,e){this.a=d
this.b=e},
ehn:function ehn(){},
egY:function egY(d,e){this.a=d
this.b=e},
egU:function egU(d,e){this.a=d
this.b=e},
eh4:function eh4(d){this.a=d},
eh5:function eh5(d,e){this.a=d
this.b=e},
eh6:function eh6(d){this.a=d},
eh_:function eh_(d,e){this.a=d
this.b=e},
eh0:function eh0(d,e){this.a=d
this.b=e},
eh1:function eh1(d,e){this.a=d
this.b=e},
eh2:function eh2(d){this.a=d},
eh3:function eh3(d){this.a=d},
egZ:function egZ(d,e){this.a=d
this.b=e},
egW:function egW(d){this.a=d},
egX:function egX(d){this.a=d},
ehc:function ehc(d){this.a=d},
ehd:function ehd(d){this.a=d},
ehb:function ehb(d){this.a=d},
ehe:function ehe(d,e){this.a=d
this.b=e},
eha:function eha(d,e){this.a=d
this.b=e},
ehf:function ehf(d){this.a=d},
eh9:function eh9(d){this.a=d},
ehg:function ehg(d){this.a=d},
eh8:function eh8(d){this.a=d},
ehh:function ehh(d,e){this.a=d
this.b=e},
eh7:function eh7(d,e){this.a=d
this.b=e},
ehi:function ehi(d){this.a=d},
egV:function egV(d,e){this.a=d
this.b=e},
fBg(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fBg=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hgf){w=1
break}r=new C.fBh()
t=4
q=x.s
w=7
return B.b(B.iN(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fBg)
case 7:$.hgf=!0
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
return B.i($async$fBg,v)},
bBy(d){return A.Hb[B.my(d)-1]+", "+A.p4[B.bH(d)-1]+" "+B.bS(d)+", "+B.bA(d)},
hVN(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.djG[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
h_t(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fF(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a_(v,new C.fzz(),B.T(v).k("a_<1>")))
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
continue}o=new C.fzB(j,h)
n=new C.fzA(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.am(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iY(o.$1(l)))
j.a+=l}return u},
fXh(d,e){var w=new C.fcX()
return A.d.cM(e,0,new C.fcV(w))>=A.d.cM(d,0,new C.fcW(w))},
hdn(d){var w,v,u=new B.aO($.W().r,A.ao,null,null,B.a([],x.v))
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
zB:function zB(d,e,f,g,h,i,j,k,l,m){var _=this
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
cd0:function cd0(d){this.a=d},
ccZ:function ccZ(){},
cd_:function cd_(){},
tm:function tm(d,e){this.a=d
this.b=e},
Bv:function Bv(d,e){this.a=d
this.b=e},
li:function li(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fBh:function fBh(){},
fzz:function fzz(){},
fzB:function fzB(d,e){this.a=d
this.b=e},
fzA:function fzA(d,e,f){this.a=d
this.b=e
this.c=f},
fcX:function fcX(){},
fcY:function fcY(){},
fcV:function fcV(d){this.a=d},
fcW:function fcW(d){this.a=d},
b0f:function b0f(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cd1:function cd1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cd2:function cd2(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cd3:function cd3(d){this.a=d},
bbP:function bbP(d){this.a=d},
bbO:function bbO(d,e){this.b=d
this.a=e},
btd:function btd(d){this.a=d},
b8m:function b8m(d,e){this.b=d
this.a=e},
bqI:function bqI(d,e){this.b=d
this.a=e},
ho8(d,e){return B.a4(d,!1).cm(B.e9(new C.fNh(e,null),!0,null,x.E))},
fNh:function fNh(d,e){this.a=d
this.b=e},
VC:function VC(d,e,f){this.c=d
this.d=e
this.a=f},
aDH:function aDH(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
ehT:function ehT(){},
ehU:function ehU(d){this.a=d},
ehS:function ehS(d,e){this.a=d
this.b=e},
ehG:function ehG(d){this.a=d},
ehH:function ehH(d){this.a=d},
ehN:function ehN(d){this.a=d},
ehO:function ehO(d,e){this.a=d
this.b=e},
ehL:function ehL(d){this.a=d},
ehM:function ehM(d,e,f){this.a=d
this.b=e
this.c=f},
ehI:function ehI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ehP:function ehP(d,e){this.a=d
this.b=e},
ehK:function ehK(d,e){this.a=d
this.b=e},
ehQ:function ehQ(d){this.a=d},
ehJ:function ehJ(d,e){this.a=d
this.b=e},
ehR:function ehR(d,e){this.a=d
this.b=e},
bbl:function bbl(d,e,f){this.b=d
this.c=e
this.a=f},
i9v(d){return B.a4(d,!1).cm(B.e9(new C.fNx(),!0,null,x.I))},
bz0(d,e){var w,v,u,t,s,r,q=B.c2(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fYI(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fNx:function fNx(){},
a_E:function a_E(d){this.a=d},
oz:function oz(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aF3:function aF3(d,e,f,g,h,i,j,k,l){var _=this
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
_.aB=_.aI=_.aE=_.aw=_.Z=_.b8=_.bi=_.y2=0
_.b0=null
_.b_=0.25
_.bb=null
_.bJ=0.5
_.aG=1
_.c6=_.bB=_.bh=0
_.cJ=_.c4=!1
_.c=_.a=null},
eR3:function eR3(d){this.a=d},
ePW:function ePW(d,e){this.a=d
this.b=e},
eQj:function eQj(d,e){this.a=d
this.b=e},
eQt:function eQt(d){this.a=d},
ePF:function ePF(d){this.a=d},
ePG:function ePG(d){this.a=d},
ePD:function ePD(d){this.a=d},
ePE:function ePE(d){this.a=d},
eQc:function eQc(d,e){this.a=d
this.b=e},
eQd:function eQd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQp:function eQp(d,e,f){this.a=d
this.b=e
this.c=f},
eQo:function eQo(d,e){this.a=d
this.b=e},
eQq:function eQq(d,e){this.a=d
this.b=e},
eQn:function eQn(d,e){this.a=d
this.b=e},
eQs:function eQs(d,e,f){this.a=d
this.b=e
this.c=f},
eQr:function eQr(d,e){this.a=d
this.b=e},
ePv:function ePv(d){this.a=d},
ePw:function ePw(d){this.a=d},
ePx:function ePx(d){this.a=d},
ePu:function ePu(){},
ePy:function ePy(d,e){this.a=d
this.b=e},
ePt:function ePt(d,e){this.a=d
this.b=e},
ePA:function ePA(){},
ePz:function ePz(d,e){this.a=d
this.b=e},
ePs:function ePs(d,e){this.a=d
this.b=e},
ePp:function ePp(d,e){this.a=d
this.b=e},
ePB:function ePB(d){this.a=d},
ePr:function ePr(d,e){this.a=d
this.b=e},
ePC:function ePC(d){this.a=d},
ePq:function ePq(d,e){this.a=d
this.b=e},
eQT:function eQT(d,e){this.a=d
this.b=e},
eR_:function eR_(d){this.a=d},
eR0:function eR0(d,e){this.a=d
this.b=e},
eR1:function eR1(){},
eQU:function eQU(d,e){this.a=d
this.b=e},
eQS:function eQS(d,e){this.a=d
this.b=e},
eQV:function eQV(d,e){this.a=d
this.b=e},
eQR:function eQR(d,e){this.a=d
this.b=e},
eQW:function eQW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQQ:function eQQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQX:function eQX(d){this.a=d},
eQY:function eQY(d,e){this.a=d
this.b=e},
eQZ:function eQZ(d){this.a=d},
eQP:function eQP(d){this.a=d},
eQC:function eQC(d){this.a=d},
eQD:function eQD(d){this.a=d},
eQB:function eQB(d,e){this.a=d
this.b=e},
eQw:function eQw(d,e){this.a=d
this.b=e},
eQE:function eQE(d){this.a=d},
eQH:function eQH(d){this.a=d},
eQA:function eQA(d){this.a=d},
eQI:function eQI(d){this.a=d},
eQJ:function eQJ(d){this.a=d},
eQK:function eQK(d){this.a=d},
eQL:function eQL(d){this.a=d},
eQz:function eQz(d){this.a=d},
eQM:function eQM(d){this.a=d},
eQy:function eQy(d){this.a=d},
eQN:function eQN(d,e){this.a=d
this.b=e},
eQx:function eQx(d,e){this.a=d
this.b=e},
eQO:function eQO(d){this.a=d},
eQF:function eQF(d){this.a=d},
eQG:function eQG(d){this.a=d},
eQg:function eQg(d){this.a=d},
eQf:function eQf(d){this.a=d},
eQh:function eQh(d,e){this.a=d
this.b=e},
eQe:function eQe(d,e){this.a=d
this.b=e},
eQi:function eQi(d){this.a=d},
eQ8:function eQ8(d){this.a=d},
eQ7:function eQ7(d){this.a=d},
eQ9:function eQ9(d){this.a=d},
eQ6:function eQ6(d){this.a=d},
eQa:function eQa(d,e){this.a=d
this.b=e},
eQ5:function eQ5(d,e){this.a=d
this.b=e},
eQ4:function eQ4(d,e){this.a=d
this.b=e},
ePN:function ePN(d){this.a=d},
ePO:function ePO(d){this.a=d},
ePP:function ePP(d){this.a=d},
ePQ:function ePQ(d){this.a=d},
ePR:function ePR(d){this.a=d},
ePS:function ePS(d){this.a=d},
ePT:function ePT(d){this.a=d},
ePU:function ePU(d){this.a=d},
ePV:function ePV(d){this.a=d},
eP8:function eP8(d){this.a=d},
eP9:function eP9(d){this.a=d},
ePa:function ePa(d){this.a=d},
ePb:function ePb(d){this.a=d},
ePc:function ePc(d){this.a=d},
eP7:function eP7(d){this.a=d},
ePd:function ePd(d){this.a=d},
ePe:function ePe(d){this.a=d},
ePH:function ePH(d){this.a=d},
ePI:function ePI(d){this.a=d},
ePJ:function ePJ(d){this.a=d},
ePK:function ePK(d){this.a=d},
ePL:function ePL(d){this.a=d},
ePi:function ePi(d){this.a=d},
ePj:function ePj(d){this.a=d},
ePk:function ePk(d){this.a=d},
ePl:function ePl(d){this.a=d},
ePm:function ePm(d){this.a=d},
ePh:function ePh(d){this.a=d},
ePn:function ePn(d){this.a=d},
ePg:function ePg(d){this.a=d},
ePo:function ePo(d){this.a=d},
ePf:function ePf(d){this.a=d},
eQb:function eQb(d){this.a=d},
eQ3:function eQ3(d){this.a=d},
eQ_:function eQ_(d){this.a=d},
ePZ:function ePZ(d){this.a=d},
eQ0:function eQ0(d,e){this.a=d
this.b=e},
ePY:function ePY(d,e){this.a=d
this.b=e},
eQ1:function eQ1(d,e){this.a=d
this.b=e},
ePX:function ePX(d,e){this.a=d
this.b=e},
eQ2:function eQ2(d){this.a=d},
eQm:function eQm(d){this.a=d},
eQl:function eQl(d,e,f){this.a=d
this.b=e
this.c=f},
eQk:function eQk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQv:function eQv(d,e){this.a=d
this.b=e},
eQu:function eQu(d,e){this.a=d
this.b=e},
ePM:function ePM(d){this.a=d},
eR2:function eR2(d){this.a=d},
beS:function beS(d,e){this.b=d
this.a=e},
i4W(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
i4X(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).l1(0,d),m=B.C(n,B.a6(n).k("J.E"))
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
v=t.index+t[0].length}n=w.a=n+A.a.b3(d,v)
return n.charCodeAt(0)==0?n:n},
bzB(){var w=$.byJ,v=$.Qk
$.Qk=v+1
return w+"_"+v},
ie(d,e,f,g,h,i,j){return C.eq(A.bh,!1,4279310375,A.aD,"",i,24,A.bo,A.a6,"",h,C.bzB(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cl,D.f5,g,e,f)},
nY(d,e,f,g){var w=f*9
return C.ie(D.eN,d-f/2,e-w/32,f,w/16,g,0)},
hPr(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.byJ
p=$.Qk
$.Qk=p+1
w.push(new C.eG(q+"_"+p,D.f5,0,r,1,0.0016,"",24,A.a6,A.bo,A.aD,k,A.bh,null,D.bg,t,t,0,0,!1,"",0,D.cl,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.byJ
p=$.Qk
$.Qk=p+1
w.push(new C.eG(q+"_"+p,D.f5,o,0,0.004,1,"",24,A.a6,A.bo,A.aD,k,A.bh,null,D.bg,t,t,0,0,!1,"",0,D.cl,0,"","","","","",!1,0))}w.push(C.nY(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nY(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ie(D.bg,0.08,0.08,0.5,0.003,v,0),C.ie(D.bg,0.58,0.08,0.004,0.06,v,0),C.ie(D.bg,0.58,0.14,0.34,0.003,v,0),C.ie(D.bg,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ie(D.bg,0.08,0.8,0.004,0.14,t,0),C.ie(D.bg,0.08,0.94,0.6,0.003,t,0),C.nY(0.58,0.08,0.05,e),C.nY(0.92,0.22,0.05,e),C.nY(0.08,0.8,0.05,f),C.nY(0.68,0.94,0.05,f),C.nY(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ie(D.l7,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ie(D.l7,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ie(D.l7,0.7,0.8,0.22,0.12,w|1140850688,0),C.ie(D.l7,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nY(0.5,0.5,1.5,w|335544320),C.nY(0.5,0.5,1.15,w|402653184),C.nY(0.5,0.5,0.8,v|436207616),C.nY(0.95,0.05,0.4,v|855638016),C.nY(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nY(0.85,0.08,0.7,w|1140850688),C.nY(0.1,0.35,0.5,v|855638016),C.nY(0.9,0.62,0.55,v|771751936),C.nY(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.ie(D.bg,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.ie(D.bg,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.ie(D.bg,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.ie(D.bg,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nY(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nY(0.5,0.2,0.65,(w|3422552064)>>>0),C.nY(0.5,0.2,0.95,w|855638016),C.ie(D.bg,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.ie(D.bg,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.ie(D.jP,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ie(D.jP,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ie(D.jP,0.15,0.86,0.6,0.14,1712265002,0),C.nY(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cVV[n]
u=A.o.E(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.byJ
l=$.Qk
$.Qk=l+1
w.push(new C.eG(m+"_"+l,D.f5,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a6,A.bo,A.aD,k,A.bh,null,D.eN,q,q,0,0,!1,"",0,D.cl,0,"","","","","",!1,0))}w.push(C.nY(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ie(D.jP,0.35,-0.1,0.3,0.62,w|855638016,0),C.ie(D.jP,0.05,-0.1,0.3,0.55,v,-0.5),C.ie(D.jP,0.65,-0.1,0.3,0.55,v,0.5),C.nY(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ie(D.bg,0.06,0.04,0.88,0.002,e,0),C.ie(D.bg,0.06,0.96,0.88,0.002,e,0),C.ie(D.bg,0.06,0.04,0.004,0.92,e,0),C.ie(D.bg,0.936,0.04,0.004,0.92,e,0),C.ie(D.bg,0.09,0.07,0.82,0.001,w,0),C.ie(D.bg,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ie(D.jQ,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ie(D.jQ,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ie(D.jQ,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ie(D.bg,0,0,0.3,0.09,w|1140850688,0),C.ie(D.bg,0.7,0.9,0.3,0.1,v|1426063360,0),C.ie(D.bg,0.82,0.04,0.12,0.07,w|771751936,0),C.ie(D.bg,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ie(D.eN,0.62,0.02,0.5,0.16,v,0.6),C.ie(D.eN,0.78,0.12,0.4,0.12,u,0.9),C.ie(D.eN,-0.12,0.8,0.5,0.16,u,-0.6),C.ie(D.eN,-0.05,0.9,0.4,0.12,v,-0.9),C.nY(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ie(D.bg,0.09,0.12,0.16,0.006,e,0),C.ie(D.bg,0.05,0.03,0.9,0.001,w,0),C.ie(D.bg,0.05,0.97,0.9,0.001,w,0)],x.u)}},
i1r(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.byJ=j
$.Qk=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fwY()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.eq(A.bh,!1,n,A.aD,"ngmy_quote_background",m,24,A.bo,A.a6,"",1,C.bzB(),g,"","",0,!1,"",0,D.bg,l,2,"",0,0,"",D.cl,D.ly,1,0,0))
if(a9)A.d.v(q,C.hPr(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.i4W(B.aK(w,p,""))
o=A.a.t(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fwX(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cE,A.a6))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a6))
if(a0!=null&&a0.length!==0)q.push(C.eq(A.bh,!1,n,A.aD,"ngmy_quote_logo",m,24,A.bo,A.a6,a1,a3*9/16,C.bzB(),a0,"","",0,!1,a2,0,D.bg,l,2,"",0,0,"",D.cl,D.ly,a3,a4,a5))
return C.rw(s,r,0,0,q,j+"_slide",D.qj,"","","",D.df)},
rv:function rv(d,e){this.a=d
this.b=e},
m5:function m5(d,e,f,g,h,i,j,k,l,m){var _=this
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
fwY:function fwY(){},
fwX:function fwX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hFx(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a3(d)
v=B.bi(B.u(w.h(d,"at")))
u=w.h(d,"outline")
t=B.u(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.ceo(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bU()
w=w.h(d,"request")
return new C.zC(u,t,s,B.u(w==null?"":w))},
fED(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fED=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hgB){w=1
break}$.hgB=!0
t=4
w=7
return B.b(B.ay(),$async$fED)
case 7:r=e
q=B.aU(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.S.aL(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jN(p),k=k.gae(k),j=x.j,i=x.o;k.C();){o=k.gT(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aW(j.a(o.b));h.C();){m=h.gT(h)
l=C.hFx(m)
if(l!=null)J.cd(n,l)}$.CF.ca(0,B.u(o.a),new C.fEE(n))}C.fYn()
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
return B.i($async$fED,v)},
fYn(){var w,v=new B.S(Date.now(),0,!1).bS(-12e8)
for(w=new B.du($.CF,$.CF.r,$.CF.e);w.C();)J.nr(w.d,new C.fkr(v))
$.CF.bs($.CF,new C.fks())},
aNx(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aNx=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$aNx)
case 6:s=a0
m=x.N
l=x.z
r=B.U(m,l)
for(k=new B.cI($.CF,B.a6($.CF).k("cI<1,2>")).gae(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aW(q.b);h.C();){o=h.gT(h)
g=o
J.cd(p,B.F(["at",g.a.a5().ac(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aG(r,i,p)}n=r
w=7
return B.b(s.aq("String","ngmy_slides_ai_history_v1",A.S.ao(n,null)),$async$aNx)
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
return B.i($async$aNx,v)},
i5x(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fYn()
w=$.CF.ca(0,d,new C.fEG())
v=Date.now()
u=B.C(e,B.a6(e).k("cq.E"))
J.py(w,0,new C.zC(new B.S(v,0,!1),f,u,g))
C.aNx()},
i5u(d){var w,v=$.CF.h(0,d)
if(v==null||J.cm(v))return
w=J.cE(v)
w.cF(v,0)
if(w.gal(v))$.CF.W(0,d)
C.aNx()},
zC:function zC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ceo:function ceo(){},
fEE:function fEE(d){this.a=d},
fkr:function fkr(d){this.a=d},
fks:function fks(){},
fEG:function fEG(){},
i5z(d){return A.d.dK(D.wb,new C.fEJ(d),new C.fEK())},
hFv(d){var w
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
hFu(d){var w
switch(d.a){case 0:w=D.aly
break
case 1:w=A.yt
break
case 2:w=A.amB
break
case 3:w=I.al9
break
case 4:w=A.am2
break
case 5:w=A.lX
break
default:w=null}return w},
hSr(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Q0[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Q0[w]
if(!B.cU(v.toLowerCase(),t,0))u=B.cU(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hFw(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
o.push(q)}return A.S.ao(B.F(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
i5v(d,e,f,g,h){var w=new B.M(D.wb,new C.fEC(),x.eC).aH(0,", "),v=""+d,u=C.hm0(h),t=F.fym(h),s=C.hic(g),r=e.t(0,D.I7)?'- New slides get an "emoji".\n':"",q=e.t(0,D.I8)?'- New slides get an "icon3d" from: '+A.d.aH(D.Q0,", ")+".\n":"",p=e.t(0,D.CT)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
i5w(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.M(D.wb,new C.fEF(),x.eC).aH(0,", "),p=new B.fe("")
if(e.t(0,D.I7)){p.a=s
w=s}else w=""
if(e.t(0,D.I8))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aH(D.Q0,", ")+".\n")
if(e.t(0,D.CT))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hm0(d)
v=F.fym(d)
u=C.hic(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
agU(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.D1(a3,"{"),a5=J.fQC(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Ll(a3,a4,a5+1)
try{w=A.S.aL(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.cm(v))return a1
u=B.a([],x.aC)
for(o=J.aW(v),n=x.s,m=x.N;o.C();){t=o.gT(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.fCC(),m).c0(0,new C.fCD())
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
f=C.hSr(B.u(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.u(e==null?"":e))
d=J.q(t,"picture")
d=B.c8(B.u(d==null?0:d),a1)
if(d==null)d=0
J.cd(u,new C.a7N(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.u(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.u(q==null?J.fq(u).b:q))
p=A.d.b4(D.wb,new C.fCE(r))?r:a7
o=C.fjG(J.q(w,"logo_frame"),D.Cj)
n=C.fjG(J.q(w,"logo_ring"),D.Ce)
m=C.fjG(J.q(w,"photo_frame"),D.Cj)
l=C.fjG(J.q(w,"photo_ring"),D.Ce)
return new C.aqX(q,p,u,o,n,m,l)}catch(a0){return a1}},
a1o(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hl7(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.CU),f7=f6?C.hMa():e4,f8=f7==null
if(f8)w=e4
else{v=new B.f5()
v.dU(f7.w+1)
u=f7.a
t=B.bn(u.b,!0,x.dL)
A.d.fN(t,v)
s=u.c
s=new C.nK("luxe",u.a,A.lX,t,u.e,u.f,B.a([s,u.d,s],x.t),D.df)
w=s}if(w==null)w=C.i5z(f9.b)
r=g2.t(0,D.a5m)||f6
q=g2.t(0,D.I7)
p=g2.t(0,D.S2)
o=new C.fx1()
n=B.a([],x.g)
m=new C.fx4(o,w,r)
l=new C.fx3(o,r)
k=new C.fx2(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a3(g0),a7=!A.d.b4(u,new C.fx0(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.E(b1,a3.length)]
b4=A.o.E(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.E(b1,5)
b9=D.cXq[b8]
c0=D.cWn[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eRL.t(0,b2.a)){c7=b0+1
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
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mF,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.qk,500,f2,f0))
c1.push(l.$8$fx$key(D.bg,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.S_
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eN,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.l7,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bg,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.CR
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eN,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eN,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mF,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cE,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.qk,500,f2,f0))
d3=D.mE
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eN,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bg,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.uu:D.cl
c1.push(new C.eG(b4,D.a5k,0.64,0.05,0.27,0.9,g1,24,A.a6,A.bo,A.aD,4279310375,A.bh,e4,D.bg,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mE
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eN,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eN,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mF,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.qk,450,f2,f0))
c1.push(l.$8$fx$key(D.bg,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.S_
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
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.I5,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mE}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.df,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hNO(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.E(b1,b8.length)]}else b8=r?D.dm2[A.o.E(b1,6)]:s
n.push(new C.lG(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.BJ(e4,e4,e4,e4,D.CQ,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fzp(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fzp=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.CT)
n=e.t(0,D.I8)
if(!o&&!n){u=D.a4j
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fzs(o,s[r],n,$.hRa,r).$0())
s=B.U(x.S,x.aH)
m=J
w=3
return B.b(B.iN(t,x.e),$async$fzp)
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
return B.i($async$fzp,v)},
fyp(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fyp=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.i5w(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aMR(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fyp)
case 3:u=s.aNc(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fyp,v)},
bBc(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bBc=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aY(x.N)
for(s=B.em(f,f.r,B.a6(f).c),r=s.$ti.c;s.C();){q=s.d
t.L(0,(q==null?r.a(q):q).b)}C.i5x(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.agU(i,"colorful")
t=C.i5v(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aMR(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hC),$async$bBc)
case 3:u=o.aNc(m,f,h,g,D.e_c,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBc,v)},
aMR(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aMR=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vl(null,""),$async$aMR)
case 3:n=i
if(A.a.i(n).length===0)throw B.V("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.n2(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qT(t,d,g,"slides",null),$async$aMR)
case 7:q=i
p=q.b
if(p!=null){o=C.agU(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.V(s!=null&&B.L1(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aMR,v)},
aNc(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aNc=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.CT)||e.t(0,D.I8)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.df(e,x.Q)
t.W(0,D.CT)}w=6
return B.b(C.fzp(d,t),$async$aNc)
case 6:s=k
w=4
break
case 5:s=D.a4j
case 4:t=d.c
w=A.d.b4(t,new C.fcR())?7:9
break
case 7:r=$.hmT
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dR(r,x.aP),$async$aNc)
case 10:q=k
p=q!=null?A.S.ao(q.ag(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hl7(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hFw(new C.aqX(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.T(m).k("M<1,m>")
t=B.C(new B.M(m,new C.fcS(),n),n.k("ak.E"))
l.cx=t
t=B.a6(e).k("jR<cq.E,m>")
t=B.C(new B.jR(e,new C.fcT(),t),t.k("J.E"))
l.cy=t
l.ay=e.t(0,D.S2)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aNc,v)},
h0c(d){var w,v,u,t=d.cy
if(t==null)t=A.U
w=B.aY(x.Q)
for(v=0;v<6;++v){u=D.a38[v]
if(A.d.t(t,u.b))w.L(0,u)}return w},
i9A(d){return B.bQ(A.K,null,new C.fNJ(),d,!0,!0,!0,null,!1,!1,x.I)},
hMN(d,e){var w,v=e.toLowerCase()
if(A.a.cc(v,".png"))w="image/png"
else w=A.a.cc(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cJ.gct().aK(d)},
i9z(d,e,f){return B.bQ(A.K,null,new C.fNI(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
h0d(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
h0e(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
fjG(d,e){var w=A.a.i(B.u(d==null?"":d)).toLowerCase()
return A.d.b4(e,new C.fjH(w))?w:""},
hic(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hmR(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.agU(a1==null?"":a1,a0),a3=C.agU(a5,a0)
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
for(v=t.length,r=a4.r,q=B.T(r).k("a_<1>"),p=0;p<t.length;t.length===v||(0,B.L)(t),++p){o=B.rg(new B.a_(r,new C.fEL(t[p]),q))
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
g=B.C(new B.a_(k,new C.fEM(),v),r)
A.d.aZ(g,new C.fEN())
if(g.length===0)continue
f=new C.fEO(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.L)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
i5Q(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aGw
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.e16
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.e17
return null},
hhO(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bm(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dj(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
i5A(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.ob
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.L)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.L)(q),++o){n=q[o]
if(n.b!==D.cP)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.D(m*0.85,10,120)
break
case 1:j=A.k.D(m*1.15,10,120)
if(C.hhO(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hhO(n,i,v,u))if(n.w>10){f=h+1
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
i5y(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.agU(o,"colorful")
if(n==null)throw B.V("That earlier version could not be read.")
w=B.aY(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a38[r]
if(q.b===s)w.L(0,q)}}v=C.h0d(e)
u=C.h0e(e)
p=C.hl7(n,D.a4j,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.T(o).k("M<1,m>")
o=B.C(new B.M(o,new C.fEH(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("jR<cq.E,m>")
o=B.C(new B.jR(w,new C.fEI(),o),o.k("J.E"))
p.cy=o
p.ay=w.t(0,D.S2)
return p},
i9m(d,e,f){return B.bQ(A.K,null,new C.fMW(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hMa(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.f5()
s.dU(t)
w=D.cBn[s.az(10)]
v=new C.eeb(s)
u=x.N
return new C.eea(w,s.az(4),J.fq(v.$1$2(D.d0Z,1,x.ff)),w.r[s.az(3)],v.$1$2(D.dht,2+s.az(2),u),v.$1$2(D.dam,2,u),v.$1$2(D.dkx,4,x.fP),t)},
hNO(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.f5()
a1.dU(a5.w+a3*13)
w=new C.f9j(a4)
v=new C.f9l(a4,d)
u=new C.f9k(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.L)(a2),++q){p=a2[q]
if(p.b===D.cP){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aX(A.o.fV(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aX(A.o.fV(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.E(a3,t.length)]
if(n==="spotlight")A.d.c9(a2,0,w.$8(D.eN,0.1+a1.an()*0.45,0.05+a1.an()*0.3,0.45,0.75,C.a1o(a0,52),"lux_spot",a5.wx(0,"spotlight")))
else A.d.c9(a2,0,w.$8(D.bg,0,0,1,1,0,"lux_back",a5.wx(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c9(a2,1,w.$8(D.bg,0,0,1,1,0,"lux_back2",a5.aEI(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bg,0.022,0.038,0.956,0.924,0,g,a5.wx(0,f),D.df,150,C.a1o(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bg,0.018,0.032,0.964,0.936,0,g,a5.wx(0,f),D.df,120,C.a1o(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bg,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.df,260,C.a1o(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bg,0,0,1,1,0,"lux_filigree",a5.wx(0,"filigree"),D.df,200))
break
default:a2.push(w.$10$anim$delay(D.bg,0.08,0.06,0.84,0.004,C.a1o(a0,208),"lux_rule",a5.aEI(0,"shimmer",r),D.ut,150))
a2.push(w.$10$anim$delay(D.bg,0.08,0.936,0.84,0.004,C.a1o(a0,144),"lux_rule2","",D.I5,220))}l=!A.d.b4(a2,new C.f9i())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.wx(0,"crest"),350))
else{o=a1.ht()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.wx(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a1o(r,242)
j=a5.wx(0,"orbit")
i=s===D.bg?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.qk,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eN,t-0.007,0.9495,0.014,0.025,C.a1o(r,242),"lux_g2",a5.wx(0,"orbit"),D.qk,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){h=t[q]
a2.push(w.$8(D.bg,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aX(A.o.fV(a0,16),8,"0").toUpperCase()))}if((A.d.gH(d.b).a&16777215)<8421504)a2.push(w.$8(D.bg,0,0,1,1,0,"lux_velvet",a5.wx(0,"velvet")))},
nK:function nK(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fEJ:function fEJ(d){this.a=d},
fEK:function fEK(){},
w1:function w1(d,e){this.a=d
this.b=e},
a7N:function a7N(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aqX:function aqX(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fEC:function fEC(){},
fEF:function fEF(){},
fCC:function fCC(){},
fCD:function fCD(){},
fCE:function fCE(d){this.a=d},
fx1:function fx1(){},
fx4:function fx4(d,e,f){this.a=d
this.b=e
this.c=f},
fx3:function fx3(d,e){this.a=d
this.b=e},
fx2:function fx2(d,e){this.a=d
this.b=e},
fx0:function fx0(d){this.a=d},
fzs:function fzs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fzq:function fzq(d){this.a=d},
fzr:function fzr(d){this.a=d},
fcR:function fcR(){},
fcS:function fcS(){},
fcT:function fcT(){},
fNJ:function fNJ(){},
a0a:function a0a(d){this.a=d},
aGZ:function aGZ(d,e,f,g,h){var _=this
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
eXg:function eXg(d,e,f){this.a=d
this.b=e
this.c=f},
eXh:function eXh(d,e){this.a=d
this.b=e},
eXe:function eXe(d,e){this.a=d
this.b=e},
eXf:function eXf(d,e){this.a=d
this.b=e},
eXd:function eXd(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eX8:function eX8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eXc:function eXc(d,e){this.a=d
this.b=e},
eX7:function eX7(d,e){this.a=d
this.b=e},
eXb:function eXb(d,e){this.a=d
this.b=e},
eX6:function eX6(d,e){this.a=d
this.b=e},
eX9:function eX9(d){this.a=d},
eXa:function eXa(d,e){this.a=d
this.b=e},
eWX:function eWX(d,e){this.a=d
this.b=e},
eWY:function eWY(d,e){this.a=d
this.b=e},
eX_:function eX_(d){this.a=d},
eX0:function eX0(d){this.a=d},
eX1:function eX1(d){this.a=d},
eX2:function eX2(d){this.a=d},
eWZ:function eWZ(d,e){this.a=d
this.b=e},
eX3:function eX3(d,e){this.a=d
this.b=e},
eXu:function eXu(d){this.a=d},
eXv:function eXv(d){this.a=d},
eXt:function eXt(d){this.a=d},
eXw:function eXw(d){this.a=d},
eXs:function eXs(d){this.a=d},
eXy:function eXy(d){this.a=d},
eXr:function eXr(d,e){this.a=d
this.b=e},
eXz:function eXz(d){this.a=d},
eXq:function eXq(d,e){this.a=d
this.b=e},
eXA:function eXA(d){this.a=d},
eXp:function eXp(d){this.a=d},
eXB:function eXB(d){this.a=d},
eXo:function eXo(d,e){this.a=d
this.b=e},
eXC:function eXC(d){this.a=d},
eXn:function eXn(d,e){this.a=d
this.b=e},
eXD:function eXD(d){this.a=d},
eXm:function eXm(d){this.a=d},
eXE:function eXE(d,e){this.a=d
this.b=e},
eXl:function eXl(d,e){this.a=d
this.b=e},
eXF:function eXF(d){this.a=d},
eXx:function eXx(d){this.a=d},
eXk:function eXk(d,e){this.a=d
this.b=e},
eX4:function eX4(d,e,f){this.a=d
this.b=e
this.c=f},
eX5:function eX5(d,e,f){this.a=d
this.b=e
this.c=f},
eXj:function eXj(d,e){this.a=d
this.b=e},
eXi:function eXi(d,e){this.a=d
this.b=e},
fNI:function fNI(d,e){this.a=d
this.b=e},
a09:function a09(d,e,f){this.c=d
this.d=e
this.a=f},
aGY:function aGY(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eWQ:function eWQ(d){this.a=d},
eWR:function eWR(d){this.a=d},
eWS:function eWS(d,e){this.a=d
this.b=e},
eWT:function eWT(d){this.a=d},
eWU:function eWU(d){this.a=d},
eWP:function eWP(d,e){this.a=d
this.b=e},
eWV:function eWV(d,e){this.a=d
this.b=e},
eWW:function eWW(d,e){this.a=d
this.b=e},
fjH:function fjH(d){this.a=d},
b0E:function b0E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDz:function aDz(d,e,f){this.c=d
this.d=e
this.a=f},
bjp:function bjp(d,e){var _=this
_.d=$
_.bw$=d
_.aa$=e
_.c=_.a=null},
eed:function eed(d){this.a=d},
eec:function eec(){},
bh2:function bh2(d,e){this.b=d
this.a=e},
fEL:function fEL(d){this.a=d},
fEM:function fEM(){},
fEN:function fEN(){},
fEO:function fEO(d){this.a=d},
aru:function aru(d,e){this.a=d
this.b=e},
fEH:function fEH(){},
fEI:function fEI(){},
fMW:function fMW(d,e){this.a=d
this.b=e},
Zx:function Zx(d,e,f){this.c=d
this.d=e
this.a=f},
aB4:function aB4(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dj5:function dj5(d){this.a=d},
dj6:function dj6(d){this.a=d},
dj7:function dj7(d,e){this.a=d
this.b=e},
dja:function dja(d){this.a=d},
djb:function djb(d,e){this.a=d
this.b=e},
dj9:function dj9(d,e){this.a=d
this.b=e},
djc:function djc(d){this.a=d},
dj8:function dj8(d,e){this.a=d
this.b=e},
brP:function brP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eea:function eea(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
eeb:function eeb(d){this.a=d},
f9j:function f9j(d){this.a=d},
f9l:function f9l(d,e){this.a=d
this.b=e},
f9k:function f9k(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9i:function f9i(){},
aLr:function aLr(){},
h_1(d){var w,v,u
try{w=A.S.aL(0,d,null)
if(x.f.b(w)){v=B.vV(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b0A:function b0A(d,e,f){this.c=d
this.d=e
this.a=f},
bkZ:function bkZ(d,e){this.c=d
this.a=e},
i1U(d){return A.d.dK(D.H8,new C.fy8(d),new C.fy9())},
i1V(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b3(t,6)
if(w.length===0)return null
v=new B.a_(D.H8,new C.fya(w),x.b4)
if(!v.gae(0).C())return null
u=v.gH(0)
return new C.jE("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
lf:function lf(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fy8:function fy8(d){this.a=d},
fy9:function fy9(){},
fya:function fya(d){this.a=d},
mR(d,e,f,g,h){return new C.ED(f,g,d)},
hOX(d){var w=d.z,v=B.T(w).k("a_<1>")
w=B.C(new B.a_(w,new C.fbi(),v),v.k("J.E"))
d.z=w
d.x=""},
dy(d,e){var w=$.Kp
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c9(d.z,0,e)},
dz(d,e,f,g,h,i,j,k,l){return C.eq(A.bh,!1,4279310375,A.aD,"",d,24,A.bo,A.a6,"",e,"design_"+C.cB(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cl,D.f5,j,k,l)},
hkV(d,e){var w
C.hOX(d)
w=A.d.dK($.bDd(),new C.fvZ(e),new C.fw_())
$.Kp=w.a
d.x=w.a;++d.y
try{w.bA(d)}finally{$.Kp=""}d.z=B.bn(d.z,!0,x.F)},
ED:function ED(d,e,f){this.a=d
this.b=e
this.e=f},
fbi:function fbi(){},
fEd:function fEd(){},
fEe:function fEe(){},
fEf:function fEf(){},
fEq:function fEq(){},
fEv:function fEv(){},
fEw:function fEw(){},
fEx:function fEx(){},
fEy:function fEy(){},
fEz:function fEz(){},
fEA:function fEA(){},
fEB:function fEB(){},
fEg:function fEg(){},
fEh:function fEh(){},
fEi:function fEi(){},
fEj:function fEj(){},
fEk:function fEk(){},
fEl:function fEl(){},
fEm:function fEm(){},
fEn:function fEn(){},
fEo:function fEo(){},
fEp:function fEp(){},
fEr:function fEr(){},
fEs:function fEs(){},
fEt:function fEt(){},
fEu:function fEu(){},
fvZ:function fvZ(d){this.a=d},
fw_:function fw_(){},
iX(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.eq(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bg,4280172719,2,m,n,0,"",o,D.cP,p,q,r)},
CV(d,e,f,g,h,i,j,k,l){return C.eq(A.bh,!1,4279310375,A.aD,"",d,24,A.bo,A.a6,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cl,D.f5,j,k,l)},
bBW(){var w=new B.S(Date.now(),0,!1)
return A.iq[B.bH(w)-1]+" "+B.bS(w)+", "+B.bA(w)},
et:function et(d,e,f){this.a=d
this.b=e
this.c=f},
bzl(d){return new B.iQ((A.o.aC(d,24)&255)/255,(A.o.aC(d,16)&255)/255,(A.o.aC(d,8)&255)/255,(d&255)/255)},
hU5(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.amA(A.cF.aK(A.d.gak(d.split(","))))
return w}catch(v){return null}},
hU9(d){var w=d.r
if(!d.cy)return w
return new B.M(B.a(w.split("\n"),x.s),new C.fjf(),x.dv).aH(0,"\n")},
hU8(d){switch(d.a){case 2:return A.ns
case 1:case 5:return A.f1O
default:return A.Tu}},
hU2(d){switch(d.a){case 2:return A.v3
case 1:case 5:return A.Vg
default:return A.aal}},
hU6(d,e){var w,v=null,u=d.ay,t=A.o.aC(u,24),s=A.o.aC(d.ch,24),r=(t&255)===0?v:C.bzl(u),q=(s&255)===0?v:C.bzl(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nt(q,p,A.kN)
w=new B.pz(t,t,t,t)}switch(d.ax.a){case 1:return B.lv(v,v,v,new B.kB(r,w,v,A.abC,v),v,v,v,v)
case 4:return u?new B.fR(v,v,v):B.x4(B.lv(v,v,q,v,p+0.4,v,v,v))
default:return B.lv(v,v,v,new B.kB(r,w,B.vu(4),A.hF,v),v,v,v,v)}},
hU4(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f5?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hU2(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hU9(d)
t=C.bzl(d.Q)
s=d.x.a>=700?A.el:A.vF
r=d.y===A.cE?A.y8:A.ajY
q=d.z
p=new B.D4(w,l,l,B.fb(u,l,l,l,B.h9(l,t,1===q.a?A.aPx:A.aPw,l,l,l,l,l,l,A.ds,l,l,v,r,s,l,!0,l,l,l,l),C.hU8(d.as)))
break
case 1:case 4:o=C.hU5(d.at)
n=i===D.ly&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.x4(B.fb(w,l,l,l,B.h9(l,A.rB,l,l,l,l,l,l,l,A.ds,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.HP(o,n?A.aby:A.VE,l,l)
break
case 3:w=new B.nt(A.Ip,1,A.kN)
u=B.vu(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lv(A.v3,B.fb(t,l,l,l,B.h9(l,D.edD,l,l,l,l,l,l,l,A.ds,l,l,11,l,A.el,l,!0,l,l,l,l),A.ns),l,new B.kB(E.aHN,new B.pz(w,w,w,w),u,A.hF,l),l,l,l,l)
break
case 2:p=C.hU6(d,e)
break
case 5:p=C.hU3(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hcz(-w,p)
w=i===D.cP
if(w){m=A.o.aC(d.Q,24)&255
if(m<255)p=new B.asf(m/255,p)}if(w)return new F.w6(k,l,j,l,new B.S8(new B.kA(g,g,f,1/0),p))
if(i===D.l6){i=new B.nt(A.Ip,1,A.kN)
i=B.lv(A.v3,p,l,new B.kB(A.pb,new B.pz(i,i,i,i),B.vu(4),A.hF,l),l,l,D.bxq,l)}else i=p
return new F.w6(k,l,j,l,new B.fR(g,f,i))},
hU7(d,e,f,g){var w,v=null,u=C.bzl(d.e),t=d.f
t=B.a([F.hbb(t!=null?B.lv(v,v,v,new B.kB(v,v,v,A.hF,new B.aW5(E.Vi,A.aaf,B.a([u,C.bzl(t)],x.cR),v)),v,v,v,v):B.lv(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.M(w,new C.fje(f,g),B.T(w).k("M<1,ff>")))
return F.crE(t)},
h0g(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$h0g=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a42(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){p=t[q]
o=new B.Wj(A.wm,A.Im,D.byx,null,null,null,!1,null)
o=new B.BO(o,new C.fEU(607,787,p,d))
o.MH(n,null)
r.push(o)}u=n.kc(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h0g,v)},
hU3(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.h_1(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gajA()
if(h==null)h=A.axo
j=B.tz(4279308564)
w=B.vu(18)
v=new B.nt(B.tz(4287531653),3,A.kN)
u=i.length===0?"My links":i
u=B.a([B.x4(B.fb(u,m,m,m,B.h9(m,A.pb,m,m,m,m,m,m,m,A.ds,m,m,12,m,A.el,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.x4(B.fb(A.a.i(l.c),m,m,m,D.f91,m)))
u.push(new B.fR(m,8,m))
for(t=B.dc(h,0,B.dG(8,"count",x.S),B.T(h).c),s=t.$ti,t=new B.bR(t,t.gM(0),s.k("bR<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tz(4280690220)
o=new B.a98(8,8)
n=A.a.i(r.b)
u.push(new B.nL(D.brJ,new C.awr(new C.ahZ(q),B.lv(m,B.fb(n.length===0?A.a.i(r.c):n,m,m,m,D.fbk,A.ns),m,new B.kB(p,m,new B.aip(o,o,o,o),A.hF,m),m,m,D.bxQ,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.x4(B.fb(k,m,m,m,D.faz,m))
u.push(new C.awr(C.htC(k),t))}return B.lv(m,B.yV(u,A.LZ,A.lw),m,new B.kB(j,new B.pz(v,v,v,v),w,A.hF,m),m,m,D.bsx,m)},
fjf:function fjf(){},
fje:function fje(d,e){this.a=d
this.b=e},
fEU:function fEU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agH(d){var w,v
for(w=0;w<32;++w){v=D.H_[w]
if(v.a===d)return v}return null},
hfe(d){var w,v,u=A.a.cK(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cF.aK(A.a.b3(d,u+1))
return w}catch(v){return null}},
cY(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
ho4(d,e){return B.a4(d,!1).cm(B.e9(new C.fLl(e),!0,null,x.fB))},
ho3(d,e){return B.bQ(A.K,null,new C.fLk(e),d,!0,!0,!0,null,!1,!1,x.fB)},
j0:function j0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Eu:function Eu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Nr:function Nr(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biO:function biO(d,e,f){var _=this
_.d=d
_.e=$
_.bw$=e
_.aa$=f
_.c=_.a=null},
dTA:function dTA(d){this.a=d},
dTz:function dTz(d,e,f){this.a=d
this.b=e
this.c=f},
dTy:function dTy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqn:function bqn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eW3:function eW3(d,e){this.a=d
this.b=e},
bdZ:function bdZ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aZu:function aZu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c8W:function c8W(){},
c8X:function c8X(d){this.a=d},
c8Y:function c8Y(d,e,f){this.a=d
this.b=e
this.c=f},
c8Z:function c8Z(d,e,f){this.a=d
this.b=e
this.c=f},
fLl:function fLl(d){this.a=d},
Z5:function Z5(d,e){this.c=d
this.a=e},
azs:function azs(){var _=this
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
fLk:function fLk(d){this.a=d},
fLj:function fLj(d){this.a=d},
fLi:function fLi(d,e,f){this.a=d
this.b=e
this.c=f},
fLh:function fLh(d,e){this.a=d
this.b=e},
aKY:function aKY(){},
i9y(d){return B.bQ(A.K,null,new C.fNH(),d,!0,!0,!0,null,!1,!1,x.N)},
fNH:function fNH(){},
Zq:function Zq(d){this.a=d},
bfr:function bfr(d){this.d=d
this.c=this.a=null},
df8:function df8(d){this.a=d},
df9:function df9(d,e){this.a=d
this.b=e},
dfa:function dfa(d){this.a=d},
hQt(d){var w,v=d.split("@")
if(v.length>1){w=B.c8(v[1],16)
if(w!=null)return B.b0(w)}return D.xA},
i3P(d){var w,v=A.d.gH(d.split("@"))
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
i3O(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gH(d.split("@")),p=C.hQt(d)
switch(q){case"shimmer":return B.nP(A.aaI,g,new C.fBA(p,A.k.E(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.V,r,A.b0,A.r,B.a([g,B.e2(B.b4(r,r,r,new C.beP(e,f,p,r),A.az),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dU(B.ed(A.A,B.db(C.fS0(g,B.a4T(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.x(w*60,v*26))
case"goldframe":return new B.an(A.V,r,A.b0,A.r,B.a([g,B.e2(B.b4(r,r,r,new C.bex(e,p,r),A.az),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.db(B.eE(A.A,e*0.5,B.ed(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dp()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fC(e)
u.mK(Math.sin(e)*0.3)
return B.dU(B.fu(A.A,g,r,u,!0),new B.x(w*22,v*12))
case"rays":return new B.an(A.V,r,A.b0,A.r,B.a([B.e2(B.b4(r,r,r,new C.bne(e,f,p,r),A.az),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.V,r,A.b0,A.r,B.a([B.e2(B.b4(r,r,r,new C.b9t(e,f,p,r),A.az),!0,r),g],x.p),r)
case"aurora":return new B.an(A.V,r,A.b0,A.r,B.a([B.e2(B.b4(r,r,r,new C.b97(e,f,p,r),A.az),!0,r),g],x.p),r)
case"velvet":return new B.an(A.V,r,A.b0,A.r,B.a([g,B.e2(B.b4(r,r,r,new C.bu9(e,p,r),A.az),!0,r)],x.p),r)
case"sparkle":return new B.an(A.V,r,A.b0,A.r,B.a([g,B.e2(B.b4(r,r,r,new C.bra(e,f,p,r),A.az),!0,r)],x.p),r)
case"sheen":return new B.an(A.V,r,A.b0,A.r,B.a([g,B.e2(B.b4(r,r,r,new C.bqj(e,p,r),A.az),!0,r)],x.p),r)
case"filigree":return new B.an(A.V,r,A.b0,A.r,B.a([g,B.e2(B.b4(r,r,r,new C.bdS(e,p,r),A.az),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.aa,A.f,B.a([B.bT(0,B.e2(B.ed(A.A,B.c0(r,new B.o(r,r,r,r,r,new B.c_(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a5),A.be),1.6+s*0.15,r,r),!0,r),0,0,0),B.eE(A.A,s*0.06,B.ed(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fBA:function fBA(d,e){this.a=d
this.b=e},
beP:function beP(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bex:function bex(d,e,f){this.b=d
this.c=e
this.a=f},
bne:function bne(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9t:function b9t(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b97:function b97(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bu9:function bu9(d,e,f){this.b=d
this.c=e
this.a=f},
bra:function bra(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bqj:function bqj(d,e,f){this.b=d
this.c=e
this.a=f},
bdS:function bdS(d,e,f){this.b=d
this.d=e
this.a=f},
d84:function d84(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
xC:function xC(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fBD(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.l6},
i3U(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aZ(j,new C.fBE())
s=A.d.gH(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.L)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gH(B.aPM(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
i3T(d,e){var w,v,u,t,s,r=d.db
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
agl(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$agl=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.T(a4).k("a_<1>")
e=B.C(new B.a_(a4,new C.fu2(),f),f.k("J.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bQ(A.dG,null,new C.fu3(e),d,!0,!0,!1,A.lz,!1,!1,x.N),$async$agl)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gH(e).hG())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.h0U(d),$async$agl)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.Lc(d,"Search states\u2026","",A.k9,"Choose state"),$async$agl)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.h_O(s)
if(p==null)p=A.d.gH(D.QS)
f=C.cB()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cB()
m=p.e
l=C.fBF(p.d)
k=x.u
j=B.a([C.eq(A.bh,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bo,A.a6,"",1,C.cB(),l,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cl,D.ly,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.CI(i,0.016,D.l7,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.CI(0,0.058,D.eN,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.CI(0,0.058,D.eN,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.KA("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.KA("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a6,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fXF(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.byP("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a1_("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a1_("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a1_("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a1_("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.byP("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.CI(m,0.082,D.bg,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cB()
k.push(C.eq(A.bh,!1,i,A.aD,"marriage_field_utangulizi:"+A.k.ab(0.78,3),4280640491,9.5,A.bo,A.cv,"",0.074,g,null,"","",0,!1,"",0,D.bg,4280172719,2,y.O,0,0,"",D.cl,D.cP,0.78,0.11,0.388))
A.d.v(k,C.fXF(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.byP("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hhd("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hhd("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a1_("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a1_("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.byO("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.byO("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.byP("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.KA("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.KA("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.byO("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.byO("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.byP("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a1_("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.byO("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a1_("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.fXF(0.22,0.83,0.56,4291404327,i),h)
h.push(C.KA("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.KA("Nakala ya Hati",A.L,4291404327,9,A.a6,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.BJ(null,null,null,null,D.ob,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rw(m,null,0,0,j,n,D.qj,"","","Hati ya Ndoa",D.df)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agl,v)},
fBE:function fBE(){},
fu2:function fu2(){},
fu3:function fu3(d){this.a=d},
fu0:function fu0(d){this.a=d},
fu1:function fu1(d){this.a=d},
hTw(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hTv(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mJ
case"lineThrough":return A.zJ
default:return A.aD}},
eq(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eG(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hjh(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.QC[w]
if(v.b===u)return v}return D.df},
hPS(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cTd[w]
if(v.b===u)return v}return D.cP},
hWm(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.di7[w]
if(v.b===u)return v}return D.bg},
rw(d,e,f,g,h,i,j,k,l,m,n){return new C.lG(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
h9X(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hRS(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.hjh(d.h(0,"transition"))
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
n=B.cC(n,new C.cel(),n.$ti.k("J.E"),x.F)
n=B.C(n,B.a6(n).k("J.E"))}return C.rw(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hRS(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.ape[w]
if(v.b===u)return v}return D.mE},
BJ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.S(Date.now(),0,!1):a4
return new C.i3(p,t,a1,h,i,w,a0==null?B.a([C.rw(4294967295,null,0,0,null,C.cB(),D.qj,"","","",D.df)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
VL(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hO3(a6.h(0,"aspectRatio"))
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
else{f=J.b6(f,new C.ce8(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.ce9(),x.N)
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
g=B.cC(g,new C.cea(),g.$ti.k("J.E"),x.bt)
g=B.C(g,B.a6(g).k("J.E"))}return C.BJ(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rw(4294967295,a3,0,0,a3,C.cB(),D.qj,"","","",D.df)],x.g):g,v,p,o,s)},
kw(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hO3(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dj_[w]
if(v.b===u)return v}return D.CQ},
cB(){var w=Date.now(),v=$.j1
$.j1=v+1
return""+1000*w+"_"+v},
ceC(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.CR){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cB()
v=C.eq(A.L,!1,f.d.l(),A.aD,"",n,40,A.bo,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bg,m,2,o,0,0,"",D.cl,D.cP,0.84,0.08,0.3)
u=C.cB()
A.d.v(w,B.a([v,C.eq(A.L,!1,f.e.l(),A.aD,"",n,20,A.bo,A.cv,"",0.12,u,p,"","",0,!1,"",0,D.bg,m,2,"Click to add subtitle",0,0,"",D.cl,D.cP,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cB()
v=C.eq(A.bh,!1,f.d.l(),A.aD,"",n,32,A.bo,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bg,m,2,o,0,0,"",D.cl,D.cP,0.88,0.06,0.06)
u=C.cB()
A.d.v(w,B.a([v,C.eq(A.bh,!0,f.e.l(),A.aD,"",n,20,A.bo,A.cv,"",0.68,u,p,"","",0,!1,"",0,D.bg,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cl,D.cP,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cB()
v=C.eq(A.bh,!1,f.d.l(),A.aD,"",n,30,A.bo,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bg,m,2,"Two Column Slide",0,0,"",D.cl,D.cP,0.88,0.06,0.06)
u=C.cB()
t=f.e
u=C.eq(A.bh,!0,t.l(),A.aD,"",n,18,A.bo,A.a6,"",0.7,u,p,"","",0,!1,"",0,D.bg,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cl,D.cP,0.42,0.06,0.22)
s=C.cB()
A.d.v(w,B.a([v,u,C.eq(A.bh,!0,t.l(),A.aD,"",n,18,A.bo,A.a6,"",0.7,s,p,"","",0,!1,"",0,D.bg,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cl,D.cP,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.L(d.z,C.eq(A.L,!1,4294967295,A.aD,"",n,42,A.bo,A.u,"",0.2,C.cB(),p,"","",0,!1,"",0,D.bg,m,2,"Section Header",0,0,"",D.cl,D.cP,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cB()
v=C.eq(A.bh,!1,f.d.l(),A.aD,"",n,30,A.bo,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bg,m,2,"Compare",0,0,"",D.cl,D.cP,0.88,0.06,0.06)
u=C.cB()
t=f.c
u=C.eq(A.bh,!1,l,A.aD,"",t.j(0.12).l(),24,A.bo,A.a6,"",0.68,u,p,"","",0,!1,"",0,D.bg,t.l(),2,"",0,0,"",D.cl,D.f5,0.42,0.06,0.22)
s=C.cB()
r=f.e
s=C.eq(A.bh,!1,r.l(),A.aD,"",n,20,A.bo,A.O,"",0.6,s,p,"","",0,!1,"",0,D.bg,m,2,"Option A",0,0,"",D.cl,D.cP,0.38,0.08,0.26)
q=C.cB()
t=C.eq(A.bh,!1,l,A.aD,"",t.j(0.06).l(),24,A.bo,A.a6,"",0.68,q,p,"","",0,!1,"",0,D.bg,t.j(0.5).l(),2,"",0,0,"",D.cl,D.f5,0.42,0.52,0.22)
q=C.cB()
A.d.v(w,B.a([v,u,s,t,C.eq(A.bh,!1,r.l(),A.aD,"",n,20,A.bo,A.O,"",0.6,q,p,"","",0,!1,"",0,D.bg,m,2,"Option B",0,0,"",D.cl,D.cP,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cB()
v=C.eq(A.L,!1,f.d.l(),A.aD,"",n,36,A.bo,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bg,m,2,"TERM / QUESTION",0,0,"",D.cl,D.cP,0.8,0.1,0.12)
u=C.cB()
A.d.v(w,B.a([v,C.eq(A.L,!1,f.e.l(),A.aD,"",n,22,A.bo,A.cv,"",0.35,u,p,"","",0,!1,"",0,D.bg,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cl,D.cP,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cB()
v=C.eq(A.bh,!1,f.d.l(),A.aD,"",n,28,A.bo,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bg,m,2,"Quiz Question",0,0,"",D.cl,D.cP,0.88,0.06,0.06)
u=C.cB()
A.d.v(w,B.a([v,C.eq(A.bh,!1,f.e.l(),A.aD,"",n,20,A.bo,A.a6,"",0.62,u,p,"","",0,!1,"",0,D.bg,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cl,D.cP,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cB()
v=C.eq(A.bh,!1,f.d.l(),A.aD,"",n,26,A.bo,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bg,m,2,"Worksheet / Assignment",0,0,"",D.cl,D.cP,0.88,0.06,0.04)
u=C.cB()
A.d.v(w,B.a([v,C.eq(A.bh,!1,f.e.l(),A.aD,"",n,18,A.bo,A.a6,"",0.78,u,p,"","",0,!1,"",0,D.bg,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cl,D.cP,0.88,0.06,0.16)],x.u))
break}},
hFG(d){return A.d.dK(D.a2N,new C.ceD(d),new C.ceE())},
hFD(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.S.aL(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aW(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gT(t)
if(!q.b(u))continue
try{J.cd(v,C.VL(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fU7(d,e){var w,v,u,t=B.U(x.N,x.I),s=new C.cey(t)
for(w=J.aW(d);w.C();)s.$1(w.gT(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.L)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.C(new B.bc(t,w),w.k("J.E"))
A.d.aZ(u,new C.cex())
return u},
ha_(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cet()
if(u!==w)return u>=w?d:e
return v.$1(d).cd(v.$1(e))?d:e},
aqY(d){return C.hFB(d)},
hFB(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aqY=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.cew()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a2b(m),$async$aqY)
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
return B.b(B.ay(),$async$aqY)
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
case 11:o=l.$1($.h9Z.h(0,m))
n=C.fU7(C.fU7(j,r),o)
if(n.length===0){u=C.ha_(C.ha_(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aqY,v)},
ces(d){return C.hFA(d)},
hFA(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$ces=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ay(),$async$ces)
case 7:r=f
q=r.tf("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.U
q=B.kE(q,B.T(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aY(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ces,v)},
b0G(d,e){return C.hFC(d,e)},
hFC(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b0G=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$b0G)
case 6:s=g
q=s.tf("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.L(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.Lk(r,J.ad(r)-500):r
w=7
return B.b(s.aq("StringList","ngmy_slides_deleted_"+p,o),$async$b0G)
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
return B.i($async$b0G,v)},
VM(d,e){return C.hFE(d,e)},
hFE(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$VM=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.h9Y.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aqY(a3),$async$VM)
case 5:p=a6
case 4:w=6
return B.b(C.ces(a3),$async$VM)
case 6:o=a6
n=B.U(x.N,x.I)
for(m=J.aW(p);m.C();){l=m.gT(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.L)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbq())k=f===g.gbq()&&k.b>g.gcA()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("bc<2>")
l=m.k("a_<J.E>")
e=B.C(new B.a_(new B.bc(n,m),new C.cez(o),l),l.k("J.E"))
A.d.aZ(e,new C.ceA())
$.h9Y.n(0,a0,e)
n=B.T(e).k("M<1,a5<m,@>>")
n=B.C(new B.M(e,new C.ceB(),n),n.k("ak.E"))
r=A.S.ao(n,null)
$.h9Z.n(0,a0,r)
t=8
w=11
return B.b(B.ah8(a0,r),$async$VM)
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
return B.b(B.ay(),$async$VM)
case 16:q=a6
w=17
return B.b(q.aq("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$VM)
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
return B.i($async$VM,v)},
IJ:function IJ(d,e){this.a=d
this.b=e},
aqW:function aqW(d,e){this.a=d
this.b=e},
uK:function uK(d,e){this.a=d
this.b=e},
mv:function mv(d,e){this.a=d
this.b=e},
hE:function hE(d,e){this.a=d
this.b=e},
eG:function eG(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
cem:function cem(){},
cen:function cen(){},
cel:function cel(){},
i3:function i3(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
ceb:function ceb(){},
cec:function cec(){},
ce8:function ce8(){},
ce9:function ce9(){},
cea:function cea(){},
jE:function jE(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ceD:function ceD(d){this.a=d},
ceE:function ceE(){},
cey:function cey(d){this.a=d},
cex:function cex(){},
cet:function cet(){},
ceu:function ceu(){},
cev:function cev(){},
cew:function cew(){},
cez:function cez(d){this.a=d},
ceA:function ceA(){},
ceB:function ceB(){},
i44(d,e){var w=x.N,v=B.U(w,x.F)
w=new C.fCc(e,v,d,B.aY(w))
w.$1(new C.fC8())
w.$1(new C.fC9())
w.$1(new C.fCa())
w.$1(new C.fCb())
return v},
fCc:function fCc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fC8:function fC8(){},
fC9:function fC9(){},
fCa:function fCa(){},
fCb:function fCb(){},
b0D:function b0D(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ceh:function ceh(d){this.a=d},
ceg:function ceg(){},
cei:function cei(){},
cej:function cej(d,e){this.a=d
this.b=e},
cek:function cek(d){this.a=d},
ao5:function ao5(d,e){this.c=d
this.a=e},
biz:function biz(d,e){var _=this
_.d=$
_.bw$=d
_.aa$=e
_.c=_.a=null},
dGg:function dGg(){},
aKK:function aKK(){},
cep(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cep=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.I(x.q).f.S(D.f__)
u=!1
w=1
break}u=B.kV(!1,d,t,!1,null,A.a5o,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cep,v)},
hFy(d){var w=A.d.bg(D.H8,new C.ceq(d))
if(w<0)return!0
return w>=4},
hFz(d){var w=A.d.bg($.bDd(),new C.cer(d))
if(w<0)return!0
return w>=5},
ceq:function ceq(d){this.a=d},
cer:function cer(d){this.a=d},
i5K(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.yK()
$.qf().pY(t,new C.fF0(s),!0)
u=B.a([B.DO(v,A.qn,t)],x.p)
if(e.length!==0){w=B.n(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.f9v,v,v,v),A.f,v,v,new B.o(A.aW,v,v,w,v,v,A.n),v,v,v,v,A.ne,v,v,v),v,v,4,v,4,v))}return new B.an(A.V,v,A.b0,A.r,u,v)},
fF0:function fF0(d){this.a=d},
i5l(){return C.h09()},
i2i(){return C.bB9()},
i4l(){return C.h00()},
aOT(d,e,f){var w=0,v=B.j(x.H),u
var $async$aOT=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fE6(d,f),$async$aOT)
case 5:w=1
break
case 4:if(d.e!=null)d.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aOT,v)},
fE6(d,e){var w=0,v=B.j(x.H),u
var $async$fE6=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bzm
if(u==null)u=e+".pdf"
w=2
return B.b(B.bQ(A.K,null,new C.fE7(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fE6)
case 2:return B.h(null,v)}})
return B.i($async$fE6,v)},
fE7:function fE7(d,e){this.a=d
this.b=e},
ad8:function ad8(d,e,f){this.c=d
this.d=e
this.a=f},
epg:function epg(d,e){this.a=d
this.b=e},
eph:function eph(d,e){this.a=d
this.b=e},
epi:function epi(d,e){this.a=d
this.b=e},
epj:function epj(d){this.a=d},
adp:function adp(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b0C(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b0B(g,m,f,d,e,h,l,k,j,o,i,null)},
hmf(d){return B.cA(new C.fC7(d))},
h0b(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
i5t(d){if(d===D.cl)return"None"
return C.h0b(d)},
bzS(d,e,f,g){return C.hWt(d,e,f,g)},
hWt(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bzS=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a4(d,!0)
if($.fXY&&t.pB())t.eE()
$.fXY=!0
s.a=null
w=3
return B.b(B.hX(A.bj,!0,"Animation preview",d,new C.flN(s,e,g,f),null,A.eJ,!0,x.H),$async$bzS)
case 3:s=s.a
if(s!=null)s.a7(0)
$.fXY=!1
case 1:return B.h(u,v)}})
return B.i($async$bzS,v)},
fOv(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fOv=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aH(d,A.bW,x.w).w.a.a*0.88,280,440)
s=f===D.cl
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.h0b(f)+" Slide transition preview"
s=s?Ae.Fp:A.vs
w=3
return B.b(C.bzS(d,s,new B.a7(t,t*0.56,B.bw(B.n(14),new C.aIn(f,null),A.aq),null),r),$async$fOv)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fOv,v)},
hlx(d,e,f){var w,v,u=null,t=A.ct.au(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.db(f,t)
case 2:case 17:return B.dU(B.db(f,t),new B.x((1-t)*48,0))
case 3:return B.dU(B.db(f,t),new B.x(-(1-t)*48,0))
case 4:case 21:return B.dU(B.db(f,t),new B.x(0,(1-t)*36))
case 5:return B.dU(B.db(f,t),new B.x(0,-(1-t)*36))
case 6:case 16:return B.ed(A.A,B.db(f,t),0.5+t*0.5,u,u)
case 7:return B.ed(A.A,B.db(f,t),1.4-t*0.4,u,u)
case 8:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fC((1-t)*1.2)
return B.fu(A.A,B.db(f,t),u,w,!0)
case 9:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.k9((1-t)*1.2)
return B.fu(A.A,B.db(f,t),u,w,!0)
case 10:case 19:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.mK((1-t)*0.8)
v=0.6+t*0.4
w.jQ(v,v,v,1)
return B.fu(A.A,B.db(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dU(B.db(f,t),new B.x((1-t)*24,0))}},
bCI(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bCI=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aH(d,A.bW,x.w).w.a.a*0.88,300,440)
s=f===D.cl
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.h0b(f)+" Element animation preview"
s=s?Ae.Fp:A.vs
w=3
return B.b(C.bzS(d,s,new B.a7(t,t*0.62,B.bw(B.n(14),new C.azc(f,null),A.aq),null),r),$async$bCI)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bCI,v)},
i5s(d){var w,v,u,t,s=$.afN.W(0,d)
if(s!=null){$.afN.n(0,d,s)
return s}w=A.cF.aK(A.a.b3(d,A.a.cK(d,",")+1))
$.afN.n(0,d,w)
v=$.fYN=$.fYN+w.length
u=B.a6($.afN).k("cw<1>")
for(;;){if(!(v>41943040&&$.afN.a>1))break
t=new B.cw($.afN,u).gae(0)
if(!t.C())B.b8(B.fs())
v-=$.afN.W(0,t.gT(0)).length
$.fYN=v}return w},
i59(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).l1(0,d),j=B.C(k,B.a6(k).k("J.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.L)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ap(d,r,o)
m=f.$1(e)
v.push(new B.eR(n,l,l,A.d_,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.SI(s,A.u))
v.push(new B.eR(n,l,l,A.d_,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.SI(t,A.u))
v.push(new B.eR(n,l,l,A.d_,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.SI(u,A.cv))
v.push(new B.eR(n,l,l,A.d_,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b3(d,r)
v.push(B.d0(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a2a(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.jO(e))
return m
case"rounded":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
w=e.gdH()*0.18
m.F(new B.iL(B.by(e,new B.aR(w,w))))
return m
case"triangle":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.b5(e.gbN().a,e.b))
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
if(o!=null)p.bA(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.ap(p,o)
m.push(p)
o=v.f
if(o!=null)p.bA(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}}v.F(new B.bE())
return v
case"diamond":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.b5(e.gbN().a,e.b))
m.F(new B.ap(e.c,e.gbN().b))
m.F(new B.ap(e.gbN().a,e.d))
m.F(new B.ap(e.a,e.gbN().b))
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
m.b9Q(new B.x(t,p),new B.aR(s,s))
m.F(new B.ap(t,u))
m.F(new B.bE())
return m
default:m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.o6(e))
return m}},
fzH(d,e,f){return B.cA(new C.fzI(D.eSj.t(0,d),d,f,e))},
b0B:function b0B(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cef:function cef(d){this.a=d},
cee:function cee(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ced:function ced(){},
b0y:function b0y(d,e){this.b=d
this.a=e},
fC7:function fC7(d){this.a=d},
fC6:function fC6(d,e){this.a=d
this.b=e},
flN:function flN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
flL:function flL(d){this.a=d},
flM:function flM(d,e){this.a=d
this.b=e},
aIn:function aIn(d,e){this.c=d
this.a=e},
btG:function btG(d,e){var _=this
_.d=$
_.bw$=d
_.aa$=e
_.c=_.a=null},
f3B:function f3B(d,e,f){this.a=d
this.b=e
this.c=f},
aJ_:function aJ_(d,e){this.b=d
this.a=e},
UU:function UU(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
biL:function biL(d,e){var _=this
_.d=$
_.bw$=d
_.aa$=e
_.c=_.a=null},
dRN:function dRN(d){this.a=d},
dRM:function dRM(d){this.a=d},
dRL:function dRL(d){this.a=d},
II:function II(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ce7:function ce7(d){this.a=d},
ce6:function ce6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
azc:function azc(d,e){this.c=d
this.a=e},
bdl:function bdl(){this.d=0
this.c=this.a=null},
d5j:function d5j(d){this.a=d},
d5i:function d5i(d){this.a=d},
a7v:function a7v(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjn:function bjn(d,e){var _=this
_.d=null
_.bw$=d
_.aa$=e
_.c=_.a=null},
edU:function edU(d,e,f){this.a=d
this.b=e
this.c=f},
aZx:function aZx(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bev:function bev(d,e,f){this.b=d
this.c=e
this.a=f},
bpg:function bpg(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eTH:function eTH(){},
fzI:function fzI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqg:function bqg(d,e,f){this.b=d
this.c=e
this.a=f},
aKX:function aKX(){},
aLp:function aLp(){},
aMI:function aMI(){},
fD7(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fD7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xe.c7().M2(D.dga,A.tQ,!0),$async$fD7)
case 3:r=e
if(r==null||J.cm(r.a)){u=null
w=1
break}t=J.fq(r.a)
s=t.c
if(s==null)throw B.V("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.V("That file is too big. Use a file under 8 MB.")
u=C.i53(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fD7,v)},
i53(d,e){var w,v=d.toLowerCase()
if(A.a.cc(v,".pdf"))return new C.a7O(d,new B.a_N(A.cJ.gct().aK(e),"application/pdf"),"")
if(A.a.cc(v,".docx")){w=C.hY6(e)
if(A.a.i(w).length===0)throw B.V("No readable words were found in that Word file.")
return new C.a7O(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.cf.KP(0,e,!0)
if(A.a.i(w).length===0)throw B.V("That file is empty.")
return new C.a7O(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
hY6(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cxo().cJL(B.rf(d,A.i_,o,o),o,o,!1).cLu(0,"word/document.xml")
if(n==null)return""
w=n.cTv()
v=A.cf.KP(0,w==null?$.hoz():w,!0).split("</w:p>")
u=new B.fe("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).l1(0,r)
p=A.a.i(B.cC(q,new C.foK(),B.a6(q).k("J.E"),t).hk(0))
if(p.length!==0){q=B.aK(p,"&lt;","<")
q=B.aK(q,"&gt;",">")
q=B.aK(q,"&quot;",'"')
q=B.aK(q,"&apos;","'")
q=B.aK(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a7O:function a7O(d,e,f){this.a=d
this.b=e
this.c=f},
foK:function foK(){},
hFF(d,e,f,g,h,i,j,k,l){return new C.NT(l,e,d,g,f,i,h,j,k,null)},
NT:function NT(d,e,f,g,h,i,j,k,l,m){var _=this
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
aDX:function aDX(d,e,f,g,h,i,j,k,l){var _=this
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
_.aa$=l
_.c=_.a=null},
evu:function evu(d){this.a=d},
evs:function evs(){},
evt:function evt(d){this.a=d},
erS:function erS(){},
erT:function erT(){},
erU:function erU(d,e){this.a=d
this.b=e},
ets:function ets(d){this.a=d},
etg:function etg(){},
eth:function eth(){},
erf:function erf(){},
euA:function euA(d){this.a=d},
evq:function evq(d,e){this.a=d
this.b=e},
etq:function etq(d,e){this.a=d
this.b=e},
evd:function evd(d){this.a=d},
eve:function eve(){},
evf:function evf(){},
evg:function evg(d){this.a=d},
evh:function evh(){},
eqE:function eqE(d){this.a=d},
evr:function evr(){},
esz:function esz(d,e){this.a=d
this.b=e},
eqC:function eqC(d){this.a=d},
eqD:function eqD(d){this.a=d},
esW:function esW(d){this.a=d},
esX:function esX(d,e,f){this.a=d
this.b=e
this.c=f},
esY:function esY(d){this.a=d},
esy:function esy(){},
esx:function esx(d){this.a=d},
esv:function esv(){},
esu:function esu(d){this.a=d},
esw:function esw(){},
erO:function erO(d){this.a=d},
erP:function erP(d){this.a=d},
esF:function esF(d){this.a=d},
esA:function esA(d){this.a=d},
esB:function esB(d){this.a=d},
esC:function esC(d){this.a=d},
esD:function esD(d){this.a=d},
esE:function esE(d){this.a=d},
esG:function esG(d,e){this.a=d
this.b=e},
eqG:function eqG(){},
eqH:function eqH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esR:function esR(){},
esS:function esS(d,e){this.a=d
this.b=e},
esP:function esP(d,e,f){this.a=d
this.b=e
this.c=f},
esQ:function esQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esJ:function esJ(d,e,f){this.a=d
this.b=e
this.c=f},
esK:function esK(d,e,f){this.a=d
this.b=e
this.c=f},
esL:function esL(d){this.a=d},
esM:function esM(d,e){this.a=d
this.b=e},
esN:function esN(d,e){this.a=d
this.b=e},
esO:function esO(d,e){this.a=d
this.b=e},
esI:function esI(d,e){this.a=d
this.b=e},
esU:function esU(d){this.a=d},
esV:function esV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
esT:function esT(d){this.a=d},
etb:function etb(){},
etc:function etc(){},
etd:function etd(){},
ete:function ete(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
et8:function et8(d){this.a=d},
eta:function eta(){},
et9:function et9(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
et6:function et6(d,e,f){this.a=d
this.b=e
this.c=f},
et7:function et7(d,e){this.a=d
this.b=e},
etf:function etf(){},
esH:function esH(d,e){this.a=d
this.b=e},
eqX:function eqX(){},
eqY:function eqY(d,e,f){this.a=d
this.b=e
this.c=f},
eqZ:function eqZ(d){this.a=d},
er_:function er_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eqW:function eqW(d){this.a=d},
etl:function etl(d){this.a=d},
etk:function etk(d,e){this.a=d
this.b=e},
etj:function etj(d,e){this.a=d
this.b=e},
eti:function eti(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
etm:function etm(d,e){this.a=d
this.b=e},
epB:function epB(d,e){this.a=d
this.b=e},
eqV:function eqV(d,e){this.a=d
this.b=e},
eqT:function eqT(d){this.a=d},
etu:function etu(d,e,f){this.a=d
this.b=e
this.c=f},
eqP:function eqP(d,e){this.a=d
this.b=e},
eqO:function eqO(d){this.a=d},
ett:function ett(d,e,f){this.a=d
this.b=e
this.c=f},
eqF:function eqF(d){this.a=d},
erg:function erg(){},
evb:function evb(d,e){this.a=d
this.b=e},
evc:function evc(d,e,f){this.a=d
this.b=e
this.c=f},
euB:function euB(d,e,f){this.a=d
this.b=e
this.c=f},
epC:function epC(d){this.a=d},
epz:function epz(d,e){this.a=d
this.b=e},
epp:function epp(d,e){this.a=d
this.b=e},
epm:function epm(d){this.a=d},
epl:function epl(d,e){this.a=d
this.b=e},
epn:function epn(d,e){this.a=d
this.b=e},
eqR:function eqR(d){this.a=d},
eqS:function eqS(d,e){this.a=d
this.b=e},
eqQ:function eqQ(d){this.a=d},
eq3:function eq3(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eq4:function eq4(d,e){this.a=d
this.b=e},
eq8:function eq8(d,e){this.a=d
this.b=e},
eq9:function eq9(d){this.a=d},
eq6:function eq6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eq7:function eq7(d){this.a=d},
eq5:function eq5(){},
eq2:function eq2(d,e,f){this.a=d
this.b=e
this.c=f},
et5:function et5(d,e){this.a=d
this.b=e},
evk:function evk(d){this.a=d},
evl:function evl(d,e){this.a=d
this.b=e},
evm:function evm(d){this.a=d},
evn:function evn(d,e,f){this.a=d
this.b=e
this.c=f},
evj:function evj(d){this.a=d},
euR:function euR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euQ:function euQ(d,e,f){this.a=d
this.b=e
this.c=f},
euP:function euP(){},
euO:function euO(d,e,f){this.a=d
this.b=e
this.c=f},
euN:function euN(d,e){this.a=d
this.b=e},
euK:function euK(d,e,f){this.a=d
this.b=e
this.c=f},
euI:function euI(d){this.a=d},
euJ:function euJ(d){this.a=d},
euM:function euM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
euL:function euL(d){this.a=d},
erK:function erK(d,e){this.a=d
this.b=e},
erJ:function erJ(d,e){this.a=d
this.b=e},
euC:function euC(){},
eva:function eva(d,e){this.a=d
this.b=e},
ev8:function ev8(d){this.a=d},
ev9:function ev9(d){this.a=d},
epu:function epu(d,e){this.a=d
this.b=e},
eps:function eps(d){this.a=d},
ept:function ept(d){this.a=d},
epv:function epv(d,e){this.a=d
this.b=e},
epw:function epw(d,e,f){this.a=d
this.b=e
this.c=f},
epA:function epA(d,e){this.a=d
this.b=e},
epr:function epr(d,e,f){this.a=d
this.b=e
this.c=f},
epq:function epq(d){this.a=d},
etr:function etr(d,e,f){this.a=d
this.b=e
this.c=f},
evi:function evi(d,e,f){this.a=d
this.b=e
this.c=f},
erN:function erN(d,e,f){this.a=d
this.b=e
this.c=f},
erM:function erM(){},
eqc:function eqc(d,e,f){this.a=d
this.b=e
this.c=f},
eqd:function eqd(d){this.a=d},
epo:function epo(d,e){this.a=d
this.b=e},
ere:function ere(d,e){this.a=d
this.b=e},
epx:function epx(d,e){this.a=d
this.b=e},
epG:function epG(d){this.a=d},
epH:function epH(d,e){this.a=d
this.b=e},
epI:function epI(d,e){this.a=d
this.b=e},
epF:function epF(d){this.a=d},
epT:function epT(d,e){this.a=d
this.b=e},
epE:function epE(d){this.a=d},
epW:function epW(d){this.a=d},
epX:function epX(d){this.a=d},
epY:function epY(d){this.a=d},
epZ:function epZ(d){this.a=d},
eq_:function eq_(d){this.a=d},
eq0:function eq0(){},
eq1:function eq1(){},
epJ:function epJ(d){this.a=d},
epK:function epK(d){this.a=d},
epL:function epL(d){this.a=d},
epM:function epM(d){this.a=d},
epN:function epN(d){this.a=d},
epO:function epO(d){this.a=d},
epP:function epP(d){this.a=d},
epQ:function epQ(d){this.a=d},
epR:function epR(d){this.a=d},
epS:function epS(d){this.a=d},
epU:function epU(d){this.a=d},
epV:function epV(d,e){this.a=d
this.b=e},
erd:function erd(d,e,f){this.a=d
this.b=e
this.c=f},
erc:function erc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erb:function erb(d,e,f){this.a=d
this.b=e
this.c=f},
era:function era(d,e){this.a=d
this.b=e},
epy:function epy(d,e){this.a=d
this.b=e},
eqg:function eqg(d){this.a=d},
eqf:function eqf(d){this.a=d},
eqe:function eqe(d,e){this.a=d
this.b=e},
eqh:function eqh(d){this.a=d},
eqi:function eqi(d){this.a=d},
eqj:function eqj(d,e){this.a=d
this.b=e},
eqU:function eqU(d){this.a=d},
et4:function et4(d,e){this.a=d
this.b=e},
et3:function et3(d,e){this.a=d
this.b=e},
et2:function et2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
et0:function et0(d){this.a=d},
et1:function et1(d,e){this.a=d
this.b=e},
esZ:function esZ(){},
et_:function et_(){},
euD:function euD(){},
euE:function euE(d,e){this.a=d
this.b=e},
euF:function euF(){},
euG:function euG(d){this.a=d},
euH:function euH(d,e){this.a=d
this.b=e},
epD:function epD(d,e){this.a=d
this.b=e},
eqI:function eqI(){},
eqJ:function eqJ(){},
eqK:function eqK(){},
eqN:function eqN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eqM:function eqM(d,e){this.a=d
this.b=e},
eqL:function eqL(d,e,f){this.a=d
this.b=e
this.c=f},
esd:function esd(d){this.a=d},
esc:function esc(){},
ese:function ese(d,e){this.a=d
this.b=e},
esf:function esf(d,e){this.a=d
this.b=e},
esb:function esb(d){this.a=d},
esg:function esg(d,e){this.a=d
this.b=e},
esa:function esa(d){this.a=d},
esh:function esh(d,e){this.a=d
this.b=e},
es9:function es9(d){this.a=d},
esi:function esi(d,e){this.a=d
this.b=e},
es8:function es8(d){this.a=d},
esj:function esj(d,e){this.a=d
this.b=e},
es7:function es7(d,e){this.a=d
this.b=e},
esk:function esk(d,e){this.a=d
this.b=e},
es6:function es6(d){this.a=d},
esl:function esl(d,e){this.a=d
this.b=e},
es5:function es5(d){this.a=d},
erZ:function erZ(d,e){this.a=d
this.b=e},
es_:function es_(d){this.a=d},
es0:function es0(d){this.a=d},
erY:function erY(d){this.a=d},
es1:function es1(d,e){this.a=d
this.b=e},
erX:function erX(d){this.a=d},
es2:function es2(d,e){this.a=d
this.b=e},
erW:function erW(d){this.a=d},
es3:function es3(d,e){this.a=d
this.b=e},
erV:function erV(d){this.a=d},
es4:function es4(d){this.a=d},
er6:function er6(d){this.a=d},
er7:function er7(d){this.a=d},
er9:function er9(d){this.a=d},
er1:function er1(d){this.a=d},
er0:function er0(d,e){this.a=d
this.b=e},
er2:function er2(d,e){this.a=d
this.b=e},
er3:function er3(d){this.a=d},
er4:function er4(d){this.a=d},
er5:function er5(d,e){this.a=d
this.b=e},
er8:function er8(d){this.a=d},
evo:function evo(d){this.a=d},
evp:function evp(d){this.a=d},
eso:function eso(d,e){this.a=d
this.b=e},
esn:function esn(d,e){this.a=d
this.b=e},
esm:function esm(d,e){this.a=d
this.b=e},
esp:function esp(d){this.a=d},
esq:function esq(d){this.a=d},
etN:function etN(d,e){this.a=d
this.b=e},
etO:function etO(d){this.a=d},
etP:function etP(d){this.a=d},
eu_:function eu_(d){this.a=d},
eua:function eua(d){this.a=d},
eul:function eul(d){this.a=d},
eus:function eus(d){this.a=d},
eut:function eut(d){this.a=d},
euu:function euu(d){this.a=d},
euv:function euv(d){this.a=d},
euw:function euw(d,e){this.a=d
this.b=e},
etQ:function etQ(d){this.a=d},
etR:function etR(d){this.a=d},
etS:function etS(d){this.a=d},
etT:function etT(d){this.a=d},
etU:function etU(d){this.a=d},
etV:function etV(d){this.a=d},
etW:function etW(d){this.a=d},
etX:function etX(d){this.a=d},
etY:function etY(d){this.a=d},
etZ:function etZ(d){this.a=d},
eu0:function eu0(d){this.a=d},
eu1:function eu1(d){this.a=d},
eu2:function eu2(d){this.a=d},
eu3:function eu3(d){this.a=d},
eu4:function eu4(d){this.a=d},
eu5:function eu5(d){this.a=d},
eu6:function eu6(d){this.a=d},
eu7:function eu7(d){this.a=d},
eu8:function eu8(d){this.a=d},
etD:function etD(d){this.a=d},
eu9:function eu9(d){this.a=d},
etL:function etL(d){this.a=d},
eub:function eub(d){this.a=d},
etK:function etK(d,e){this.a=d
this.b=e},
euc:function euc(d,e){this.a=d
this.b=e},
eud:function eud(d,e){this.a=d
this.b=e},
etJ:function etJ(d,e,f){this.a=d
this.b=e
this.c=f},
etz:function etz(d,e){this.a=d
this.b=e},
etM:function etM(d){this.a=d},
eux:function eux(d,e){this.a=d
this.b=e},
euz:function euz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
euy:function euy(d,e){this.a=d
this.b=e},
eue:function eue(d,e,f){this.a=d
this.b=e
this.c=f},
etI:function etI(d,e,f){this.a=d
this.b=e
this.c=f},
ety:function ety(d,e,f){this.a=d
this.b=e
this.c=f},
etw:function etw(d,e){this.a=d
this.b=e},
euf:function euf(d,e){this.a=d
this.b=e},
etH:function etH(d,e){this.a=d
this.b=e},
etx:function etx(d,e){this.a=d
this.b=e},
etv:function etv(d,e){this.a=d
this.b=e},
eug:function eug(d){this.a=d},
etG:function etG(d){this.a=d},
euh:function euh(d){this.a=d},
eui:function eui(d){this.a=d},
euj:function euj(d){this.a=d},
euk:function euk(d){this.a=d},
etF:function etF(d){this.a=d},
eum:function eum(d){this.a=d},
eun:function eun(d){this.a=d},
euo:function euo(d,e){this.a=d
this.b=e},
etE:function etE(d){this.a=d},
eup:function eup(d,e){this.a=d
this.b=e},
etC:function etC(d){this.a=d},
euq:function euq(d,e){this.a=d
this.b=e},
etB:function etB(d){this.a=d},
eur:function eur(d,e){this.a=d
this.b=e},
etA:function etA(d){this.a=d},
eqb:function eqb(d,e,f){this.a=d
this.b=e
this.c=f},
eqa:function eqa(d,e){this.a=d
this.b=e},
euU:function euU(d,e){this.a=d
this.b=e},
euT:function euT(d,e){this.a=d
this.b=e},
euV:function euV(d,e){this.a=d
this.b=e},
euS:function euS(d,e){this.a=d
this.b=e},
erj:function erj(d,e){this.a=d
this.b=e},
eri:function eri(d){this.a=d},
erk:function erk(d,e){this.a=d
this.b=e},
erh:function erh(d){this.a=d},
erR:function erR(){},
erQ:function erQ(){},
ev6:function ev6(d){this.a=d},
ev5:function ev5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ev4:function ev4(d,e){this.a=d
this.b=e},
ev_:function ev_(d,e){this.a=d
this.b=e},
ev3:function ev3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ev0:function ev0(d,e){this.a=d
this.b=e},
euW:function euW(d){this.a=d},
euX:function euX(d){this.a=d},
euY:function euY(d){this.a=d},
euZ:function euZ(d){this.a=d},
ev1:function ev1(d,e){this.a=d
this.b=e},
ev2:function ev2(d,e){this.a=d
this.b=e},
ev7:function ev7(d){this.a=d},
eqB:function eqB(d){this.a=d},
eqA:function eqA(d,e,f){this.a=d
this.b=e
this.c=f},
eqz:function eqz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqo:function eqo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eqp:function eqp(d,e){this.a=d
this.b=e},
eqq:function eqq(d,e){this.a=d
this.b=e},
eqr:function eqr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqn:function eqn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqs:function eqs(d,e){this.a=d
this.b=e},
equ:function equ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqt:function eqt(d,e){this.a=d
this.b=e},
eqv:function eqv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqm:function eqm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqw:function eqw(d,e){this.a=d
this.b=e},
eql:function eql(d,e){this.a=d
this.b=e},
eqx:function eqx(d,e){this.a=d
this.b=e},
eqk:function eqk(d){this.a=d},
eqy:function eqy(d,e){this.a=d
this.b=e},
ess:function ess(d){this.a=d},
esr:function esr(d){this.a=d},
est:function est(d,e){this.a=d
this.b=e},
erx:function erx(d,e){this.a=d
this.b=e},
ery:function ery(d,e){this.a=d
this.b=e},
erw:function erw(d,e){this.a=d
this.b=e},
erz:function erz(d,e){this.a=d
this.b=e},
erv:function erv(d,e){this.a=d
this.b=e},
erA:function erA(d,e){this.a=d
this.b=e},
eru:function eru(d,e){this.a=d
this.b=e},
erB:function erB(d,e){this.a=d
this.b=e},
ert:function ert(d,e){this.a=d
this.b=e},
erC:function erC(d,e){this.a=d
this.b=e},
ers:function ers(d,e){this.a=d
this.b=e},
erD:function erD(d,e,f){this.a=d
this.b=e
this.c=f},
err:function err(d,e){this.a=d
this.b=e},
erE:function erE(d,e,f){this.a=d
this.b=e
this.c=f},
erq:function erq(d,e){this.a=d
this.b=e},
erF:function erF(d,e){this.a=d
this.b=e},
erp:function erp(d,e,f){this.a=d
this.b=e
this.c=f},
erm:function erm(d,e){this.a=d
this.b=e},
erG:function erG(d,e){this.a=d
this.b=e},
ero:function ero(d,e){this.a=d
this.b=e},
erH:function erH(d,e){this.a=d
this.b=e},
ern:function ern(d,e,f){this.a=d
this.b=e
this.c=f},
erl:function erl(d,e){this.a=d
this.b=e},
erI:function erI(d,e){this.a=d
this.b=e},
erL:function erL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epk:function epk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
etp:function etp(d,e){this.a=d
this.b=e},
etn:function etn(d){this.a=d},
eto:function eto(d,e){this.a=d
this.b=e},
aeV:function aeV(d,e,f){this.a=d
this.b=e
this.c=f},
ayz:function ayz(d,e){this.c=d
this.a=e},
bc8:function bc8(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b2$=e
_.c=_.a=null},
d0Y:function d0Y(d){this.a=d},
d0X:function d0X(d){this.a=d},
bcm:function bcm(d,e){this.c=d
this.a=e},
d1j:function d1j(d){this.a=d},
d1k:function d1k(d){this.a=d},
JK:function JK(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bc7:function bc7(){this.d=!1
this.c=this.a=null},
d0V:function d0V(d){this.a=d},
d0R:function d0R(d){this.a=d},
d0W:function d0W(d){this.a=d},
d0Q:function d0Q(d){this.a=d},
d0U:function d0U(d){this.a=d},
d0S:function d0S(d){this.a=d},
d0T:function d0T(d,e){this.a=d
this.b=e},
Px:function Px(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a_h:function a_h(d,e,f){this.c=d
this.d=e
this.a=f},
aE_:function aE_(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bw$=e
_.aa$=f
_.c=_.a=null},
ew4:function ew4(){},
evV:function evV(d){this.a=d},
ew3:function ew3(d){this.a=d},
evW:function evW(d){this.a=d},
evX:function evX(d){this.a=d},
evR:function evR(d){this.a=d},
evS:function evS(d,e){this.a=d
this.b=e},
evT:function evT(d){this.a=d},
evU:function evU(d,e,f){this.a=d
this.b=e
this.c=f},
ew1:function ew1(){},
ew2:function ew2(d){this.a=d},
evY:function evY(d){this.a=d},
evZ:function evZ(d){this.a=d},
ew_:function ew_(d){this.a=d},
ew0:function ew0(d){this.a=d},
ew5:function ew5(d,e,f){this.a=d
this.b=e
this.c=f},
ew7:function ew7(d,e){this.a=d
this.b=e},
ew6:function ew6(d){this.a=d},
JR:function JR(d,e){this.c=d
this.a=e},
bqL:function bqL(d,e){this.b=d
this.a=e},
bgX:function bgX(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bgW:function bgW(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aJH:function aJH(){},
aLA:function aLA(){},
bwp:function bwp(){},
aLB:function aLB(){},
fF1(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fF1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xe.c7().M2(B.a(["pdf"],x.s),A.tQ,!0),$async$fF1)
case 3:q=e
if(q==null||J.cm(q.a)){u=null
w=1
break}t=J.fq(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bo_(s,"data:application/pdf;base64,"+A.cJ.gct().aK(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fF1,v)},
i5E(d){var w,v,u,t,s,r
try{w=B.jq(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cE(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c8(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).l1(0,w).gM(0)
if(t>0){s=J.aQe(t,1,200)
return s}}catch(r){}return 1},
fET(d){return C.i5D(d)},
i5D(d){var w=0,v=B.j(x.T),u
var $async$fET=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fET,v)},
bBV(d,e,f,g){return C.i5N(d,e,f,g)},
i5N(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bBV=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.ea(b6,x.co).gae(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.hmQ(b9,new B.as(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.jK(a9),b0)
b0=n
a9=k.b
n=Math.min(B.jK(b0),a9)
a9=m
b0=k.a
m=Math.max(B.jK(a9),b0)
b0=l
a9=k.b
l=Math.max(B.jK(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.V(800*(i/j)),180,420)
$.W()
g=new B.qk()
f=B.B7(g,null)
a7=B.N()
a7.r=A.qQ.gp(0)
f.b1(new B.a9(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.N()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bV
b1.e=A.hn
b1.b=A.af
b1.f=!0
d=b1
a0=null
for(a7=b6.length,a8=0;a8<b6.length;b6.length===a7||(0,B.L)(b6),++a8){a1=b6[a8]
if(a1==null){a0=null
continue}a2=new B.x((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null){a9=a0
b0=a2
b2=d.K()
b3=f.a
b3.drawLine.apply(b3,[a9.a,a9.b,b0.a,b0.b,b2])
b2.delete()}a0=a2}a3=g.oq()
w=7
return B.b(a3.zj(800,h),$async$bBV)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.hu(A.h0),$async$bBV)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.eU(A.dC.gaP(a5))
a7=A.cJ.gct().aK(a7)
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
return B.i($async$bBV,v)},
aPr(d,e,f){return C.i5B(d,e,f)},
i5B(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aPr=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.av:e
r.c=f==null?5.2:f
w=3
return B.b(B.ahm(d,e,f,new C.fER(r,q),q,"Sign document"),$async$aPr)
case 3:if(!new B.ea(q,x.co).gae(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bBV(q,t,r.b,r.c),$async$aPr)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b0F(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPr,v)},
i5L(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hg1(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hg1(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b3(A.a.aX(A.o.fV(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.ab(q.c*100,2)+"%;top:"+A.k.ab(q.d*100,2)+"%;width:"+A.k.ab(q.e*100,2)+"%;height:"+A.k.ab(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b3(A.a.aX(A.o.fV(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d+='<div class="txt" style="font-size:'+B.u(p)+"px;color:#"+o+'">'+B.aK(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.ly&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aK(p,"&",h)
p=B.aK(p,"<",g)
p=B.aK(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aK(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hfD(q.ay)+";border:2px solid "+C.hfD(q.ch)+'"></div>'
break
case 5:l=C.h_1(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aK(n,'"',e)+"</div>")
p=p?null:l.gajA()
if(p==null)p=A.axo
n=B.T(p)
k=n.k("nl<1>")
j=new B.nl(p,0,8,k)
j.zJ(p,0,8,n.c)
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
hfD(d){var w=A.o.aC(d,24)
return"rgba("+(A.o.aC(d,16)&255)+","+(A.o.aC(d,8)&255)+","+(d&255)+","+A.k.ab((w&255)/255,3)+")"},
hg1(d){var w=B.aK(d,"&","&amp;")
w=B.aK(w,"<","&lt;")
w=B.aK(w,">","&gt;")
return B.aK(w,'"',"&quot;")},
bBT(d,e){var w=0,v=B.j(x.H)
var $async$bBT=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.ca(null,null,!0,null,new C.fF_(e,C.i5L(e),d),d,null,!0,!0,x.H),$async$bBT)
case 2:return B.h(null,v)}})
return B.i($async$bBT,v)},
bBU(){var w=0,v=B.j(x.T),u,t,s
var $async$bBU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.GB(92,2400),$async$bBU)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fET(s),$async$bBU)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBU,v)},
aPs(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aPs=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.h0g(d),$async$aPs)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aK(s,r,"_"))
u=Y.fHq(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPs,v)},
h9W(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b0F:function b0F(d,e,f){this.a=d
this.b=e
this.c=f},
fER:function fER(d,e){this.a=d
this.b=e},
fF_:function fF_(d,e,f){this.a=d
this.b=e
this.c=f},
fEX:function fEX(d){this.a=d},
fEY:function fEY(d,e,f){this.a=d
this.b=e
this.c=f},
fEZ:function fEZ(d,e,f){this.a=d
this.b=e
this.c=f},
i5C(d){return C.kw(d.w)},
i5J(d){var w,v,u,t
if(d.length===0||!A.d.d8(d,C.i7s()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yG(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aK(w.toUpperCase(),v,"")
w=$.hsC()
if(w.b.test(u))return u
return null},
hmS(d,e,f){var w,v,u=C.hBj(d),t=$.pu()
for(w=0;w<80;++w){v=u+A.a.aX(A.o.u(t.az(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aX(A.o.u(Date.now()%1000),3,"0")},
i5P(d){var w,v,u,t,s=B.aY(x.N)
for(w=J.aW(d.a),v=new B.f4(w,d.b);v.C();){u=w.gT(w).y
t=C.yG(u==null?"":u)
if(t!=null)s.L(0,t)}return s},
fEP(d,e){var w,v=d.y,u=C.yG(v==null?"":v)
if(u!=null)return d.y=u
w=C.i5P(new B.a_(e,new C.fEQ(d),B.T(e).k("a_<1>")))
v=d.x
return d.y=C.hmS(v==null?"":v,null,w)},
i5O(d){var w,v
if(d.length!==1)return null
w=A.d.gH(d)
if(!C.kw(w.w))return null
v=w.y
return C.yG(v==null?"":v)},
hFH(){var w,v=$.pu(),u=J.e6(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"SL"+A.d.hk(u)},
VP(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$VP=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$VP)
case 3:if(!e){u=B.U(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f6("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bJ),$async$VP)
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
return B.i($async$VP,v)},
VQ(d){return C.hFI(d)},
hFI(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$VQ=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$VQ)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hH("ngmy_slides_transfer_qr_stashes_v1",B.F(["stashes",d,"savedAt",new B.S(Date.now(),0,!1).a5().ac()],x.N,x.z),!1,!1,A.cG,null),$async$VQ)
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
return B.i($async$VQ,v)},
a7Q(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7Q=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$a7Q)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.VP(),$async$a7Q)
case 4:s=a6
r=C.yG(a2==null?"":a2)
if(r==null)r=a3!=null?C.hmS(a3,null,A.IP):null
q=x.N
p=B.aY(q)
for(o=J.dl(s),n=J.aW(o.gi8(s)),m=x.f;n.C();){l=n.gT(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.yG(J.k(k==null?"":k))
if(j!=null)p.L(0,j)}n=o.gdQ(s),n=n.gae(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gT(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a2(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dK.aK(t)
g.n(0,"payload",A.cJ.gct().aK(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.S(Date.now(),0,!1).a5().ac())
if(D.T6.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yG(J.k(q==null?"":q))
if(f==null)f=C.ha0(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.VQ(s),$async$a7Q)
case 7:u=new B.aFq(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hFH()
n=r==null
d=n?C.ha0(p):r
q=B.U(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dK.aK(t)
q.n(0,"payload",A.cJ.gct().aK(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.S(Date.now(),0,!1).a5().ac())
if(D.T6.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.VQ(s),$async$a7Q)
case 8:u=new B.aFq(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7Q,v)},
ha0(d){var w,v,u=$.pu()
for(w=0;w<200;++w){v="SL"+A.a.aX(A.o.u(u.az(1000)),3,"0")
if(d.L(0,v))return v}return"SL"+A.a.aX(A.o.u(Date.now()%1000),3,"0")},
ar_(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ar_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$ar_)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.VP(),$async$ar_)
case 6:t=f
s=J.a3(t)
r=s.gM(t)
s.bs(t,new C.ceF(q))
w=s.gM(t)!==r?7:8
break
case 7:w=9
return B.b(C.VQ(t),$async$ar_)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$ar_,v)},
aqZ(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$aqZ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yG(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$aqZ)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.VP(),$async$aqZ)
case 6:t=o.jN(f),t=t.gae(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gT(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.yG(J.k(q==null?"":q))===p){u=C.a7P(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aqZ,v)},
a7P(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a7P=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$a7P)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.VP(),$async$a7P)
case 6:p=a1
o=J.a3(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a3(n)
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
try{s=A.cf.cz(0,A.cF.aK(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.T6.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.A(l.h(n,"sharedByAdmin"),!0))try{r=A.S.aL(0,s,null)
if(m.b(r)){q=B.a2(r,x.N,x.z)
J.aG(q,"sharedByAdmin",!0)
s=A.S.ao(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dO(B.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.S(Date.now(),0,!1).a5().ac())
o.n(p,g,l)}w=7
return B.b(C.VQ(p),$async$a7P)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7P,v)},
i5I(d,e,f){var w,v=B.U(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.S(Date.now(),0,!1).a5().ac())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.T(d).k("M<1,a5<m,@>>")
w=B.C(new B.M(d,new C.fEW(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fF3(d,e,f,g){var w
if(e!=null){w=B.U(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.S(Date.now(),0,!1).a5().ac())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ag())
return A.S.ao(w,null)}return A.S.ao(C.i5I(d==null?B.a([],x.D):d,f,g),null)},
fF2(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fF2=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a7Q(h,d,e,f,g),$async$fF2)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yG(e==null?"":e)
u=new B.aFd(s,t)
w=1
break}t=A.dK.aK(h)
t=A.km.gct().aK(t)
u=new B.aFd(C.yG(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fF2,v)},
h0i(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d1(q,"NGMYSLIDESYNC2|"))return!0
if(J.d1(q,"NGMYSLIDECODE|"))return!0
if(J.d1(q,"NGMY_SL:"))return!0
if(J.f1(q,s)||J.f1(q,r))return!0
if(J.d1(q,"{"))try{w=A.S.aL(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.A(v,s)||J.A(v,r)
return u}}catch(t){}return!1},
i5M(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.h0i(v))return v
u=A.a.cK(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b3(v,u))
if(C.h0i(t))return t}s=A.a.cK(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b3(v,s))
if(C.h0i(t))return t}}return null},
fES(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d1(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d1(t,"NGMY_SL:"))w=v.a(A.S.aL(0,A.cf.cz(0,A.cF.aK(J.n6(t,8))),null))
else w=v.a(A.S.aL(0,t,null))
v=C.hPn(w)
return v}catch(u){v=B.a([],x.D)
return v}},
ah7(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$ah7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.aqZ(t[1]),$async$ah7)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fES(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yG(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.aqZ(r),$async$ah7)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fES(s)
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
return B.b(C.a7P(t[1]),$async$ah7)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fES(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fES(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ah7,v)},
hPn(d){var w,v,u,t=J.a3(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.A(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.T6.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.h0f(C.VL(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.da(u,x.f)
t=B.cC(t,new C.fbM(w),t.$ti.k("J.E"),x.I)
t=B.C(t,B.a6(t).k("J.E"))
return t}return B.a([],x.D)},
h0f(d,e){var w,v,u,t,s,r,q,p,o=d.ag()
o.n(0,"id",C.cB())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aW(v),t=x.f;u.C();){s=u.gT(u)
if(t.b(s)){r=Date.now()
q=$.j1
$.j1=q+1
J.aG(s,"id",""+1000*r+"_"+q)}}p=C.VL(B.a2(o,x.N,x.z))
if(e&&C.kw(p.w))p.Q=new B.S(Date.now(),0,!1).a5().bS(144e8).ac()
return p},
bBE(){var w=0,v=B.j(x.aT),u,t,s
var $async$bBE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.GA(),$async$bBE)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.ah7(s),$async$bBE)
case 4:t=e
u=J.cm(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBE,v)},
fNK(d){var w=0,v=B.j(x.T),u,t
var $async$fNK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hX(D.WO,!0,"Dismiss",d,new C.fNL(),new C.fNM(),A.Fn,!0,x.N),$async$fNK)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.I(x.q).f.S(D.eYa)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fNK,v)},
i9B(d,e,f,g,h){return B.a4(d,!1).cm(B.e9(new C.fNN(h,e,g,f),!0,null,x.H))},
fEQ:function fEQ(d){this.a=d},
ceF:function ceF(d){this.a=d},
fEW:function fEW(){},
fbM:function fbM(d){this.a=d},
fNL:function fNL(){},
fNM:function fNM(){},
fNN:function fNN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VN:function VN(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDY:function aDY(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
evB:function evB(){},
evx:function evx(d,e){this.a=d
this.b=e},
evA:function evA(d,e){this.a=d
this.b=e},
evy:function evy(d){this.a=d},
evz:function evz(d){this.a=d},
evC:function evC(d){this.a=d},
evD:function evD(d){this.a=d},
evG:function evG(d){this.a=d},
evH:function evH(d){this.a=d},
evF:function evF(d){this.a=d},
evI:function evI(d){this.a=d},
evE:function evE(d){this.a=d},
evJ:function evJ(d,e){this.a=d
this.b=e},
evw:function evw(d,e){this.a=d
this.b=e},
evv:function evv(d,e){this.a=d
this.b=e},
VO:function VO(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjI:function bjI(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
evK:function evK(d,e){this.a=d
this.b=e},
evL:function evL(d){this.a=d},
evM:function evM(){},
evN:function evN(d){this.a=d},
evO:function evO(d,e){this.a=d
this.b=e},
aDV:function aDV(d){this.a=d},
aDW:function aDW(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
epe:function epe(d){this.a=d},
epd:function epd(){},
epf:function epf(d){this.a=d},
epa:function epa(d){this.a=d},
ep9:function ep9(){},
epb:function epb(d){this.a=d},
epc:function epc(d){this.a=d},
bu0:function bu0(){},
ar0:function ar0(d){this.a=d},
aDZ:function aDZ(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
evQ:function evQ(d){this.a=d},
evP:function evP(d){this.a=d},
hUC(){var w,v,u,t
for(v=0;v<4;++v){w=D.d4L[v]
try{if(Ab.bWz(w)){u=w
return u}}catch(t){}}return null},
R3(d,e){return C.i2t(d,e)},
i2t(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$R3=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hUC()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.ob?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.E(b4,2)
c2.b=b5-A.o.E(b5,2)
b6=B.qx(c6,!0)
b6.toString
p=B.a4(c6,!0)
b7=new B.cv(null,x.A)
b8=A.d.gH(c3)
b9=$.aw()
o=new B.eI(b8,b9)
n=new B.eI("Getting ready\u2026",b9)
m=new B.eI(0,b9)
l=B.oo(new C.fza(c2,b7,o),!1,!1)
b6.lQ(0,l)
b9=x.H
B.ca(null,A.dc,!1,null,new C.fzb(n,m),c6,null,!0,!0,b9)
k=new C.fzf(b7)
j=new C.fzg()
i=null
t=4
b3=c2.a
h=Ai.aRJ(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fQt(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ab.aWE(f,B.F(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.HM.yp(i,"dataavailable",new C.fzc(e))
d=new B.bW(new B.bg($.bz,x.dT),x.b2)
A.HM.yp(i,"stop",new C.fzd(d))
J.ahH(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$R3)
case 8:w=7
return B.b(c5.$1(d0),$async$R3)
case 7:a0=d0
J.fQv(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ahH(n,"Drawing slide "+B.u(a1+1)+" of "+b8+"\u2026")
J.ahH(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$R3)
case 15:w=14
return B.b(c5.$1(d0),$async$R3)
case 14:a0=d0
case 13:J.fQv(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ahH(n,"Recording slide "+B.u(a1+1)+" of "+c3.length+" \xb7 "+B.u(a3)+" s")
a4=new B.S(Date.now(),0,!1).bS(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbq())b3=b3===b8.gbq()&&0<b8.gcA()
else b3=!0
if(!b3){w=17
break}J.fQv(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bM(A.fp,null,b9),$async$R3)
case 18:w=16
break
case 17:J.ahH(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ahH(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.d7(0,A.nV),$async$R3)
case 19:a5=A.d.gH(q.split(";"))
a6=B.hQ(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.A(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aK(c3,b3,"_"))
c0=B.n7(a7)
c0.download=B.u(J.ad(a9)===0?"presentation":a9)+"."+B.u(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.Lh(b0)
J.lV(b0)
B.bM(A.pP,new C.fze(a7),b9)
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
J.lV(l)
if(p.pB())p.eE()
c3=o
b3=$.aw()
c3.si0(b3)
J.aQi(c3,0)
c3=n
c3.si0(b3)
J.aQi(c3,0)
c3=m
c3.si0(b3)
J.aQi(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$R3,v)},
fza:function fza(d,e,f){this.a=d
this.b=e
this.c=f},
fz9:function fz9(){},
fzb:function fzb(d,e){this.a=d
this.b=e},
fzf:function fzf(d){this.a=d},
fzg:function fzg(){},
fzc:function fzc(d){this.a=d},
fzd:function fzd(d){this.a=d},
fze:function fze(d){this.a=d},
buc:function buc(d,e,f){this.c=d
this.d=e
this.a=f},
f62:function f62(){},
f63:function f63(){},
cf0(d){var w=0,v=B.j(x.at),u,t,s
var $async$cf0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ar8(d,A.zq),$async$cf0)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bz(new B.S(Date.now(),0,!1))
if(t.a<0){u=A.bB
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cf0,v)},
cf_(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a7w:function a7w(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjr:function bjr(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
eel:function eel(d){this.a=d},
eej:function eej(d){this.a=d},
eek:function eek(d,e){this.a=d
this.b=e},
a8q:function a8q(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.ov$=k
_.ow$=l
_.ox$=m
_.nO$=n},
a8r:function a8r(d,e){this.a=d
this.b=e},
b2j:function b2j(){},
chd:function chd(){},
che:function che(){},
chf:function chf(d,e,f,g,h,i,j,k,l){var _=this
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
htC(d){return new C.ahZ(d)},
a2C:function a2C(){},
ahZ:function ahZ(d){this.a=d},
aQD:function aQD(){},
awr:function awr(d,e){this.d=d
this.b=e
this.a=null},
aS9:function aS9(d){this.b=d
this.a=null},
fum(d,e){var w=0,v=B.j(x.H)
var $async$fum=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.W().gxA().LL(d,e),$async$fum)
case 2:B.fHw()
return B.h(null,v)}})
return B.i($async$fum,v)},
hk8(d,e){return(A.rn[(d^e)&255]^A.o.aC(d,8))>>>0},
frD(d,e,f,g,h,i){var w=C.hZQ(d,A.dd,f,null,A.cX,g,h,i)
return w},
hm0(d){var w=F.hmJ(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hBj(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.p7.h(0,w)
if(v!=null)return v
for(u=A.p7.gdQ(A.p7),u=u.gae(u);u.C();){t=u.gT(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aK(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
hm8(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<45;++w)v+="- "+D.dgy[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bzP(d,e){return C.hWo(d,e)},
hWo(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bzP=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hQ([d],"application/pdf")
n=x.z
q=B.aTO(B.a([r],x.e3),e,B.F(["type","application/pdf"],n,n))
p=B.cz(B.F(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ei(B.k0(o,"share",[p]),x.H),$async$bzP)
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
return B.i($async$bzP,v)},
h09(){var w=0,v=B.j(x.y),u,t,s
var $async$h09=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fjg
s=$.bzm
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bzP(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h09,v)},
bB9(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bB9=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fjg
l=$.bzm
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Y.hgH()?3:4
break
case 3:w=5
return B.b(C.bzP(m,k),$async$bB9)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bzn
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
J.Lh(q)
w=10
return B.b(B.bM(A.a1,null,x.H),$async$bB9)
case 10:J.lV(q)
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
return B.i($async$bB9,v)},
h00(){var w=0,v=B.j(x.y),u,t,s,r
var $async$h00=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bzn
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lD.qM(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$h00,v)},
h0h(d,e){var w=0,v=B.j(x.H),u,t
var $async$h0h=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hQ([d],"text/html"))
t.toString
u=window
u.toString
A.lD.qM(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$h0h,v)},
b1g(d,e){var w=0,v=B.j(x.y),u
var $async$b1g=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b1i(d,e),$async$b1g)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b1h(d),$async$b1g)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b1g,v)}},D,H,K,Al,A7,X,V,W,Am,G,F,E,Q,Y,Z,An,Ao,A8,L,Ap,A_,O,A0,A9,M,Aa,Aq,Ar,P,A1,As,Ab,Ac,At,Ad,Ae,Af,Au,Av,R,Aw,I,Ax,S,T,Ay,N,A2,A3,A4
J=c[1]
B=c[0]
A=c[2]
Ag=c[193]
A5=c[66]
Ah=c[49]
Ai=c[57]
U=c[209]
A6=c[52]
Aj=c[136]
Ak=c[219]
C=a.updateHolder(c[4],C)
D=c[207]
H=c[91]
K=c[127]
Al=c[36]
A7=c[211]
X=c[208]
V=c[124]
W=c[197]
Am=c[122]
G=c[177]
F=c[31]
E=c[210]
Q=c[138]
Y=c[29]
Z=c[165]
An=c[221]
Ao=c[173]
A8=c[109]
L=c[212]
Ap=c[121]
A_=c[60]
O=c[187]
A0=c[75]
A9=c[100]
M=c[147]
Aa=c[110]
Aq=c[89]
Ar=c[214]
P=c[114]
A1=c[130]
As=c[87]
Ab=c[53]
Ac=c[183]
At=c[35]
Ad=c[73]
Ae=c[137]
Af=c[218]
Au=c[220]
Av=c[217]
R=c[67]
Aw=c[215]
I=c[162]
Ax=c[174]
S=c[47]
T=c[213]
Ay=c[222]
N=c[194]
A2=c[216]
A3=c[106]
A4=c[56]
C.nV.prototype={
v1(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.tS(t,v)
return new C.nV(t===0?!1:w,v,t)},
bLe(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.D_()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.tS(w,u)
return new C.nV(r===0?!1:s,u,r)},
bLK(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.D_()
w=o-d
if(w<=0)return p.a?$.h1H():$.D_()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.tS(w,u)
q=new C.nV(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aF(0,$.a2o())
return q},
dY(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.V(B.dH("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.am(e,16)
if(A.o.E(e,16)===0)return r.bLe(v)
u=w+v+1
t=new Uint16Array(u)
C.hdg(r.b,w,e,t)
w=r.a
s=C.tS(u,t)
return new C.nV(s===0?!1:w,t,s)},
mq(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.V(B.dH("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.am(e,16)
u=A.o.E(e,16)
if(u===0)return n.bLK(v)
t=w-v
if(t<=0)return n.a?$.h1H():$.D_()
s=n.b
r=new Uint16Array(t)
C.hLm(s,w,e,r)
w=n.a
q=C.tS(t,r)
p=new C.nV(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dY(1,u)-1)!==0)return p.aF(0,$.a2o())
for(o=0;o<v;++o)if(s[o]!==0)return p.aF(0,$.a2o())}return p},
aM(d,e){var w,v=this.a
if(v===e.a){w=C.cFf(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a83(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a83(t,e)
if(s===0)return $.D_()
if(r===0)return t.a===e?t:t.v1(0)
w=s+1
v=new Uint16Array(w)
C.hLk(t.b,s,d.b,r,v)
u=C.tS(w,v)
return new C.nV(u===0?!1:e,v,u)},
Hf(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.D_()
w=d.c
if(w===0)return t.a===e?t:t.v1(0)
v=new Uint16Array(s)
C.b9m(t.b,s,d.b,w,v)
u=C.tS(s,v)
return new C.nV(u===0?!1:e,v,u)},
byd(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.tS(r,u)
return new C.nV(!1,u,s)},
byc(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.tS(u,r)
return new C.nV(!1,r,v)},
bye(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.tS(p,m)
return new C.nV(s!==0,m,s)},
UJ(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.D_()
w=t.a
if(w===e.a){if(w){w=$.a2o()
return t.Hf(w,!0).bye(e.Hf(w,!0),!0).a83(w,!0)}return t.byd(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.byc(v.Hf($.a2o(),!1),!1)},
ad(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a83(e,v)
if(C.cFf(u.b,t,e.b,w)>=0)return u.Hf(e,v)
return e.Hf(u,!v)},
aF(d,e){var w,v,u=this,t=u.c
if(t===0)return e.v1(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a83(e,v)
if(C.cFf(u.b,t,e.b,w)>=0)return u.Hf(e,v)
return e.Hf(u,!v)},
aJ(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.D_()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hdh(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.tS(w,t)
return new C.nV(q===0?!1:r,t,q)},
bLd(d){var w,v,u,t
if(this.c<d.c)return $.D_()
this.aR2(d)
w=$.fW2.c7()-$.axa.c7()
v=C.fW4($.fW1.c7(),$.axa.c7(),$.fW2.c7(),w)
u=C.tS(w,v)
t=new C.nV(!1,v,u)
return this.a!==d.a&&u>0?t.v1(0):t},
cnf(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aR2(d)
w=C.fW4($.fW1.c7(),0,$.axa.c7(),$.axa.c7())
v=C.tS($.axa.c7(),w)
u=new C.nV(!1,w,v)
if($.fW3.c7()>0)u=u.mq(0,$.fW3.c7())
return t.a&&u.c>0?u.v1(0):u},
aR2(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hdd&&d.c===$.hdf&&g.b===$.hdc&&d.b===$.hde)return
w=d.b
v=d.c
u=16-A.o.gajZ(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hdb(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hdb(g.b,f,u,r)}else{r=C.fW4(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fW5(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cFf(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.b9m(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b9m(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hLl(p,r,i);--o
C.hdh(h,j,0,r,o,s)
if(r[i]<h){m=C.fW5(j,s,o,n)
C.b9m(r,l,n,m,r)
while(--h,r[i]<h)C.b9m(r,l,n,m,r)}--i}$.hdc=g.b
$.hdd=f
$.hde=w
$.hdf=v
$.fW1.b=r
$.fW2.b=l
$.axa.b=s
$.fW3.b=u},
gX(d){var w,v,u,t=new C.cFg(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cFh().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nV&&this.aM(0,e)===0},
tg(d,e){return this.aM(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
uX(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gajZ(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aC(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cFi(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cFj(w)
if(J.A(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.la(A.aH.gaP(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.v1(0):r
while(v.c>1){u=$.hqx()
if(u.c===0)B.b8(D.b4b)
t=v.cnf(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bLd(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dx(w,x.bJ).hk(0)},
$iaRm:1,
$ihK:1}
C.aQN.prototype={
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
cLu(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gH(d){return A.d.gH(this.a)},
gak(d){return A.d.gak(this.a)},
gal(d){return this.a.length===0},
gcl(d){return this.a.length!==0},
gae(d){var w=this.a
return new J.k3(w,w.length,B.T(w).k("k3<1>"))}}
C.RH.prototype={
cTv(){var w,v
if(this.as==null)this.bch()
w=this.as
v=w==null?null:w.aoF()
return v==null?null:v.eK()},
bch(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.aoF().eK()
this.as=new C.bNn(v)}},
gY(d){return this.at}}
C.a3A.prototype={
a3(){return"CompressionType."+this.b}}
C.bGL.prototype={
ey(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cp()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dY(v,u)+(s.b&A.z_[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cp()}w=A.o.dY(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fG(u,t)&A.z_[d])
s.c=t}return v}}
C.bF6.prototype={
cJK(d,e){var w,v,u,t,s,r=this,q=new C.bGL(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.ey(8)!==66||q.ey(8)!==90||q.ey(8)!==104)return!1
w=r.a=q.ey(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.clw(q)
if(t<0)return!1
if(t===0){q.ey(8)
q.ey(8)
q.ey(8)
q.ey(8)
s=r.clz(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.ey(8)
q.ey(8)
q.ey(8)
q.ey(8)
return!0}}return!0},
clw(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.ey(8)
if(t!==D.dlu[u])v=!1
if(t!==D.cZ8[u])w=!1
if(!w&&!v)return-1}return v?0:2},
clz(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.ey(1),d2=((d3.ey(8)<<8|d3.ey(8))<<8|d3.ey(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.ey(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.ey(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c0X()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.ey(3)
if(q<2||q>6)return-1
v=d3.ey(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.ey(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.c2(6,$.hoD(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.ey(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.ey(1)===0)break
i=d3.ey(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hoC()
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
if(f<h)h=f}c9.bXo(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.atx(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.atx(d3)}while(a3===0||a3===1);++a5
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
u[a9]=a7}else{b1=A.o.am(a8,16)
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
a3=c9.atx(d3)
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
c1=(c1<<8^D.Hg[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.Hi[b9];++b9
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
if(b8===0){b8=D.Hi[b9];++b9
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
if(b8===0){b8=D.Hi[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.Hi[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.Hi[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bI(c3)
c1=c1<<8^D.Hg[c1>>>24&255^v];--c2}d4.bI(c3)
c1=(c1<<8^D.Hg[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bI(c7)
c1=(c1<<8^D.Hg[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bI(c7)
c1=(c1<<8^D.Hg[c1>>>24&255^c7&255])>>>0
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
atx(d){var w,v,u,t,s=this,r=s.ay
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
t=d.ey(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.ey(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
bXo(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c0X(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cxp.prototype={
aHs(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bOE(e)
if(q<0)return
e.c=q
if(e.aO()!==101010256)return
e.aY()
e.aY()
e.aY()
e.aY()
r.f=e.aO()
r.r=e.aO()
w=e.aY()
if(w>0)e.aHv(w,!1)
r.clU(e)
q=r.r
v=r.f
u=e.aKv(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aO()!==33639248)break
s=new C.b84()
s.cTu(0,u,e,f)
q.push(s)}},
clU(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a7H(20,r)
if(w.aO()!==117853008){d.c=s
return}w.aO()
v=w.t4()
w.aO()
d.c=v
if(d.aO()!==101075792){d.c=s
return}d.t4()
d.aY()
d.aY()
d.aO()
d.aO()
d.t4()
d.t4()
u=d.t4()
t=d.t4()
this.f=u
this.r=t
d.c=s},
bOE(d){var w,v,u,t,s,r,q,p,o,n
if(d.gM(0)<=4)return-1
w=d.c
v=d.gM(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a7H(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.aly(A.i_)
o.aLM(r.eK(),A.i_,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aO()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cxn.prototype={}
C.awP.prototype={
a3(){return"ZipEncryptionMode."+this.b}}
C.cxq.prototype={
aHs(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aO()!==67324752)return
e.aY()
o.b=e.aY()
w=D.aDV.h(0,e.aY())
o.c=w==null?D.LT:w
o.d=e.aY()
o.e=e.aY()
o.f=e.aO()
o.r=e.aO()
o.w=e.aO()
v=e.aY()
u=e.aY()
o.x=e.ans(v)
o.y=e.he(u).eK()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aUM:D.DL
o.ay=f
o.Q=e.he(t)
if(o.at!==D.DL&&u>2){w=o.y
w.toString
s=B.rf(w,A.i_,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aY()===39169){s.aY()
s.aY()
s.ans(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aY()
o.at=D.aUN
o.ax=new C.cxn(r,q)
w=D.aDV.h(0,q)
o.c=w==null?D.LT:w}}}if((o.b&8)!==0){p=e.aO()
if(p===134695760)o.f=e.aO()
else o.f=p
o.r=e.aO()
o.w=e.aO()}},
gM(d){return this.blR().length},
aoF(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rf(new Uint8Array(0),A.i_,q,q)
w=r.at
if(w!==D.DL)if(p.gM(0)<=0)r.at=D.DL
else{if(w===D.aUM){p=r.bJx(p)
r.Q=p}else if(w===D.aUN){p=r.bJa(p)
r.Q=p}r.at=D.DL}w=r.c
if(w===D.agB){v=p.c
u=B.dj()
p=r.Q
if(p.gM(0)<=524288e3)u.b=A.pu.Bt(p.eK(),!0,!1)
else{t=B.a8f(A.i_,r.w)
p=r.Q
p.toString
A.pu.a3P(p,t,!0,!1)
u.b=t.GO()}r.Q.c=v
return B.rf(u.bj(),A.i_,q,q)}else if(w===D.agC){s=B.a8f(A.i_,32768)
p=r.Q
v=p.c
C.htN().cJK(p,s)
u=s.GO()
r.Q.c=v
return B.rf(u,A.i_,q,q)}else return B.rf(p.eK(),A.i_,q,q)},
blR(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eK()},
u(d){return this.x},
b87(d){var w=this.ch,v=C.JG(C.hk8(w[0].N(0),d))
w[0]=v
v=w[1].ad(0,v.UJ(0,C.JG(255)))
w[1]=v
w[1]=v.aJ(0,C.JG(134775813)).ad(0,C.JG(1)).UJ(0,C.JG(4294967295))
w[2]=C.JG(C.hk8(w[2].N(0),w[1].mq(0,24).N(0)))},
aQr(){var w=(this.ch[2].UJ(0,C.JG(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bJx(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rf(new Uint8Array(0),A.i_,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b87(u[v.c++]^r.aQr())}t=r.Q.eK()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aQr()
r.b87(s)
u&2&&B.aj(t)
t[w]=s}return B.rf(t,A.i_,q,q)},
bJa(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.he(8).eK()
v=16}else if(k===2){w=d.he(12).eK()
v=24}else{w=d.he(16).eK()
v=32}u=d.he(2).eK()
t=d.he(d.gM(0)-10)
s=d.he(10)
r=t.eK()
k=this.ay
k.toString
q=C.hL1(k,w,v)
p=new Uint8Array(B.ce(A.aH.ds(q,0,v)))
k=v*2
o=new Uint8Array(B.ce(A.aH.ds(q,v,k)))
if(!C.hcG(A.aH.ds(q,k,k+2),u))throw B.V(B.fm("password error"))
k=new Uint8Array(16)
n=new C.bDH(k,new Uint8Array(16),p)
k=x.S
m=J.a50(0,k)
m=n.r=new C.ch2(m)
m.c=!0
m.b=m.bl9(!0,new C.asw(p))
if(m.c)m.d=B.bn(D.o8,!0,k)
else m.d=B.bn(D.yP,!0,k)
l=C.haT(C.haV(),64)
l.beD(new C.asw(o))
n.w=l
n.cT4(r,0,r.length)
k=s.eK()
m=n.x
m===$&&B.c()
if(!C.hcG(k,m))throw B.V(B.fm("macs don't match"))
return B.rf(r,A.i_,null,null)}}
C.b84.prototype={
cTu(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.aY()
e.aY()
e.aY()
e.aY()
e.aY()
e.aY()
e.aO()
n.w=e.aO()
n.x=e.aO()
w=e.aY()
v=e.aY()
u=e.aY()
n.y=e.aY()
e.aY()
n.Q=e.aO()
n.as=e.aO()
if(w>0)n.at=e.ans(w)
if(v>0){t=e.he(v).eK()
n.ax=t
if(v>=4){s=B.rf(t,A.i_,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aY()
p=s.aY()
o=s.a7H(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.t4()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.t4()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.t4()
p-=8}if(p>=4&&n.y===65535)n.y=o.aO()}}}}if(u>0)e.ans(u)
f.c=n.as
t=new C.cxq(D.LT,n,D.DL,B.a([C.JG(0),C.JG(0),C.JG(0)],x.f3))
n.ch=t
t.aHs(0,f,g)},
u(d){return this.at}}
C.cxo.prototype={
cJL(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cxp(B.a([],x.fT))
this.a=g
g.aHs(0,d,f)
g=B.a([],x.bm)
w=B.U(x.N,x.S)
v=new C.aQN(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.L)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.cc(o,"/")||A.a.cc(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.RH(o,A.o.am(Date.now(),1000),0):C.h35(o,q.w,q)
v.L(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.h35(o,q.w,q)
if(k.as==null)k.bch()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.aly(A.i_)
j.aLM(o,A.i_,h,h)}i=j==null?h:j.eK()
if(i!=null)new B.G_(!1).Ds(i,0,h,!0)}}return v}}
C.bDH.prototype={
cT4(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Co(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.htw(u,m.a)
q=m.r
if(16>u.byteLength)B.b8(B.dH("Input buffer too short",null))
if(16>w.byteLength)B.b8(B.dH("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bMW(u,0,w,0,o)}else{o===$&&B.c()
q.bJB(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.L5(w,0)
m.x=A.aH.ds(m.x,0,10)
w=m.w
l=w.a
l.kA(0)
w=w.d
w===$&&B.c()
l.Co(0,w,0,w.length)
return f}}
C.ch7.prototype={}
C.chb.prototype={}
C.ch5.prototype={}
C.asw.prototype={}
C.cha.prototype={
cK_(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.dZ(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.beD(new C.asw(A.aH.fO(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bO_(n.a,n.b,t,s,r)
r+=v}A.aH.hg(f,g,g+w,s)
return o.a.c},
bO_(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.V(B.dH("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Co(0,d,0,d.length)
v.Co(0,f,0,4)
u=m.c
u===$&&B.c()
w.L5(u,0)
u=m.c
A.aH.hg(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Co(0,s,0,s.length)
w.L5(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.ch6.prototype={}
C.ch4.prototype={}
C.asx.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.asx){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
tg(d,e){var w=this.a
w===$&&B.c()
w=A.o.tg(w,e.gbXF())
if(!w)e.gbXF()
return w},
aJX(d,e){this.a=0
this.b=d},
tj(d){return this.aJX(d,null)},
aKy(d){var w,v=this,u=v.b
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
w.b_T(v,u)
u=w.b
u===$&&B.c()
w.b_T(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b_T(d,e){var w,v=A.o.fV(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bs(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.ch9.prototype={
kA(d){var w,v=this
v.a.tj(0)
v.c=0
A.aH.hr(v.b,0,4,0)
v.w=0
w=v.r
A.d.hr(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
ao8(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b1m(u,0)
v.c=0}v.a.aKy(1)},
Co(d,e,f,g){var w=this.ckh(e,f,g)
f+=w
g-=w
w=this.cki(e,f,g)
this.ck8(e,f+w,g-w)},
L5(d,e){var w,v=this,u=C.haU(v.a),t=u.a
t===$&&B.c()
t=C.h0M(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.h0M(w,3)
v.ckc()
v.ck9(u)
v.asn()
v.cel(d,e)
v.kA(0)
return 20},
b1m(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.o5(A.aH.gaP(d),d.byteOffset,d.length).getUint32(e,A.ib===w.d)
if(w.w===16)w.asn()},
asn(){this.cT3()
this.w=0
A.d.hr(this.r,0,16,0)},
ck8(d,e,f){while(f>0){this.ao8(d[e]);++e;--f}},
cki(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b1m(d,e)
e+=4
f-=4
w.aKy(4)
v+=4}return v},
ckh(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.ao8(d[e]);++e;--f;++v}return v},
ckc(){this.ao8(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.ao8(0)}},
ck9(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.asn()
u=v.d
switch(u){case A.ib:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Eb:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.V(B.bd("Invalid endianness: "+u.u(0)))}},
cel(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.ib===this.d,s=0;s<w;++s){r=v[s]
q=J.o5(A.aH.gaP(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdc(d){return this.f}}
C.chc.prototype={
cT3(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.q9[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.q9[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.q9[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q9[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.q9[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q9[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.q9[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q9[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.q9[30]
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
C.ch8.prototype={
beD(d){var w,v,u,t,s=this,r=s.a
r.kA(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Co(0,w,0,v)
w=s.d
w===$&&B.c()
r.L5(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aH.hg(t,0,v,w)}w=s.d
w===$&&B.c()
A.aH.hr(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aH.hg(w,0,u,s.d)
s.b9i(s.d,u,54)
s.b9i(s.e,u,92)
u=s.d
r.Co(0,u,0,u.length)},
L5(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.L5(s,w)
s=u.e
t.Co(0,s,0,s.length)
v=t.L5(d,e)
s=u.e
A.aH.hr(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Co(0,s,0,s.length)
return v},
b9i(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.ch3.prototype={}
C.ch2.prototype={
a29(d){return(D.o8[d&255]&255|(D.o8[d>>>8&255]&255)<<8|(D.o8[d>>>16&255]&255)<<16|D.o8[d>>>24&255]<<24)>>>0},
bl9(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.V(B.dH("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e6(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c2(4,0,!1,u)
switch(v){case 4:q=J.o5(A.aH.gaP(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a29((m>>>8|(m&$.q9[24])<<24)>>>0)^D.cBf[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.o5(A.aH.gaP(e),e.byteOffset,w)
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
p=(p^f.a29((k>>>8|(k&$.q9[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a29((k>>>8|(k&$.q9[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.o5(A.aH.gaP(e),e.byteOffset,w)
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
p=(p^f.a29((g>>>8|(g&$.q9[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a29(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.V(B.bd("Should never get here"))}return s},
bMW(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.o5(A.aH.gaP(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.eb[a8&255]
u=D.eb[a9>>>8&255]
t=$.q9[8]
s=D.eb[b0>>>16&255]
r=$.q9[16]
q=D.eb[b1>>>24&255]
p=$.q9[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.eb[a9&255]
s=D.eb[b0>>>8&255]
u=D.eb[b1>>>16&255]
v=D.eb[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.eb[b0&255]
u=D.eb[b1>>>8&255]
s=D.eb[a8>>>16&255]
q=D.eb[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.eb[b1&255]
a8=D.eb[a8>>>8&255]
a9=D.eb[a9>>>16&255]
b0=D.eb[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.eb[n&255]
b0=D.eb[m>>>8&255]
a9=D.eb[l>>>16&255]
a8=D.eb[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.eb[m&255]
b0=D.eb[l>>>8&255]
o=D.eb[b1>>>16&255]
s=D.eb[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.eb[l&255]
o=D.eb[b1>>>8&255]
b0=D.eb[n>>>16&255]
u=D.eb[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.eb[b1&255]
o=D.eb[n>>>8&255]
s=D.eb[m>>>16&255]
v=D.eb[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.eb[a8&255]^C.nq(D.eb[a9>>>8&255],24)^C.nq(D.eb[b0>>>16&255],16)^C.nq(D.eb[b1>>>24&255],8)^b6[w][0]
m=D.eb[a9&255]^C.nq(D.eb[b0>>>8&255],24)^C.nq(D.eb[b1>>>16&255],16)^C.nq(D.eb[a8>>>24&255],8)^b6[w][1]
l=D.eb[b0&255]^C.nq(D.eb[b1>>>8&255],24)^C.nq(D.eb[a8>>>16&255],16)^C.nq(D.eb[a9>>>24&255],8)^b6[w][2]
b1=D.eb[b1&255]^C.nq(D.eb[a8>>>8&255],24)^C.nq(D.eb[a9>>>16&255],16)^C.nq(D.eb[b0>>>24&255],8)^b6[w][3]
a7=D.o8[n&255]
b0=D.o8[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.o8[l>>>8&255]
a9=D.o8[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.o8[b1>>>8&255]
h=D.o8[n>>>16&255]
g=D.o8[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.o8[l>>>24&255]
s=s[3]
a1=J.o5(A.aH.gaP(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.o5(A.aH.gaP(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.o5(A.aH.gaP(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.o5(A.aH.gaP(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bJB(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.o5(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.o5(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.o5(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.o5(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.ea[a6&255]
v=D.ea[b0>>>8&255]
u=$.q9[8]
t=D.ea[a5>>>16&255]
s=$.q9[16]
r=D.ea[a4>>>24&255]
q=$.q9[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.ea[a4&255]
t=D.ea[a6>>>8&255]
v=D.ea[b0>>>16&255]
w=D.ea[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.ea[a5&255]
v=D.ea[a4>>>8&255]
t=D.ea[a6>>>16&255]
r=D.ea[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.ea[b0&255]
a5=D.ea[a5>>>8&255]
a4=D.ea[a4>>>16&255]
a6=D.ea[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.ea[p&255]
a6=D.ea[b0>>>8&255]
a4=D.ea[n>>>16&255]
a5=D.ea[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.ea[o&255]
a4=D.ea[p>>>8&255]
a7=D.ea[b0>>>16&255]
t=D.ea[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.ea[n&255]
a7=D.ea[o>>>8&255]
a5=D.ea[p>>>16&255]
v=D.ea[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.ea[b0&255]
a7=D.ea[n>>>8&255]
t=D.ea[o>>>16&255]
w=D.ea[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.ea[a6&255]^C.nq(D.ea[b0>>>8&255],24)^C.nq(D.ea[a5>>>16&255],16)^C.nq(D.ea[a4>>>24&255],8)^b5[a9][0]
o=D.ea[a4&255]^C.nq(D.ea[a6>>>8&255],24)^C.nq(D.ea[b0>>>16&255],16)^C.nq(D.ea[a5>>>24&255],8)^b5[a9][1]
n=D.ea[a5&255]^C.nq(D.ea[a4>>>8&255],24)^C.nq(D.ea[a6>>>16&255],16)^C.nq(D.ea[b0>>>24&255],8)^b5[a9][2]
b0=D.ea[b0&255]^C.nq(D.ea[a5>>>8&255],24)^C.nq(D.ea[a4>>>16&255],16)^C.nq(D.ea[a6>>>24&255],8)^b5[a9][3]
a4=D.yP[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.yP[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.yP[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.yP[o>>>8&255]
i=D.yP[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.yP[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.o5(A.aH.gaP(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bNm.prototype={}
C.bNn.prototype={
gM(d){var w=this.a.length
return w},
aoF(){return B.rf(this.a,A.i_,null,null)}}
C.b9B.prototype={
uY(d){return C.hOg(d)}}
C.crb.prototype={
ML(d){var w=d.w,v=Math.max(1,A.k.dj(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a9T(v,t+20,u+16,t,u,B.u0(d.x))},
no(d){return!1}}
C.bOf.prototype={
cE1(d){if(this.b)throw B.V(B.bd("FontLoader is already loaded"))
this.c.push(d.bH(new C.bOg(),x.E))},
mG(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.V(B.bd("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mG)
case 6:w=5
return B.b(p.fum(f,r),$async$mG)
case 5:case 3:t.length===s||(0,B.L)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mG,v)}}
C.avw.prototype={
a3(){return"SystemUiMode."+this.b}}
C.a8d.prototype={
A(d,e){if(e==null)return!1
if(J.bN(e)!==B.b_(this))return!1
return e instanceof C.a8d&&e.a===this.a},
gX(d){return B.bs(B.b_(this),B.wQ(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.fI0)return"["+(w+B.e4(this.a))+"]"
return"[ObjectKey "+(w+B.e4(this.a))+"]"}}
C.aVh.prototype={
c1(d){var w=new C.aAn(!0,this.e,null,new B.di(),B.ch())
w.c_()
w.scD(null)
return w},
cb(d,e){var w
x.cQ.a(e)
e.syF(0,!0)
w=this.e
if(!w.A(0,e.aj)){e.aj=w
e.aG4()}}}
C.aAn.prototype={
syF(d,e){return},
gpy(){var w=this.a9$
return w!=null},
gl8(){var w=this.a9$
return w!=null},
MA(d){var w=d==null?B.h5y(null):d
w.sa4J(this.aj)
return w}}
C.a0D.prototype={
U(){return new C.aIG(B.aY(x.N))},
cRc(d){return this.d.$1(d)},
cP_(){return this.e.$0()}}
C.aIG.prototype={
a_(){this.a1()
this.P7()},
P7(){var w=0,v=B.j(x.H),u,t=this,s
var $async$P7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cP_(),$async$P7)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f4v(t,s))
case 1:return B.h(u,v)}})
return B.i($async$P7,v)},
YV(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$YV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.T(r).k("a_<1>")
p=B.C(new B.a_(r,new C.f4z(t),q),q.k("J.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f4A(t))
w=3
return B.b(C.ani(p),$async$YV)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f4B(t,s,p))
w=4
return B.b(t.P7(),$async$YV)
case 4:case 1:return B.h(u,v)}})
return B.i($async$YV,v)},
a15(d){return this.cor(d)},
cor(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a15=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f4w(t))
s=J.q(d,"id")
w=3
return B.b(C.bZ4(J.k(s==null?"":s)),$async$a15)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f4x(t))
w=1
break}q=C.h0f(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cRc(B.a([q],x.D)),$async$a15)
case 4:if(t.c==null){w=1
break}t.m(new C.f4y(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a15,v)},
P6(d,e){return this.bK1(0,e)},
bK1(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$P6=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a3(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.f4q(q),r,null,!0,!0,x.y),$async$P6)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f4r(t))
s=s.h(e,"id")
w=4
return B.b(C.anh(J.k(s==null?"":s)),$async$P6)
case 4:if(t.c==null){w=1
break}t.m(new C.f4s(t))
w=5
return B.b(t.P7(),$async$P6)
case 5:case 1:return B.h(u,v)}})
return B.i($async$P6,v)},
cD2(d){var w=B.bi(d),v=w==null?null:w.bU()
if(v==null)return""
return A.iq[B.bH(v)-1]+" "+B.bS(v)},
aQi(d,e){var w=null,v=B.n(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.Ol,A.n),w,e,w,w,w,w,w,e)},
aQh(d){return this.aQi(d,44)},
b6t(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Ol:u,r=B.n(14),q=B.X(e,t?A.c:A.aA,u,u,u,17),p=x.p
q=B.a([q,M.J3,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aA,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.n(10)
A.d.v(q,B.a([M.J3,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aR,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.byz,u,u,u)],p))}return B.E(B.aB(A.ci,B.de(u,B.B(q,A.m,u,A.b7,A.j,0,u,u),u,u,A.bb,new B.o(u,u,u,r,u,s,A.n),A.hw,u,u,u,A.tI,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f4F(this,d),u,u,u,u,u,u,!1,A.a7),1)},
cig(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d0.j(0.14):D.XJ,n=B.n(18),m=p?A.d0:A.dB
m=B.I(m,A.q,p?1.8:1)
w=this.aQh(A.q6)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aR9,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.w(B.a([v,A.cR,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aRb,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.Ol:q
u=p?q:B.I(A.b2,A.q,1.6)
r=p?D.bP_:q
return B.aB(q,B.de(q,B.B(B.a([w,A.bc,t,B.de(q,r,q,q,A.bb,new B.o(q,q,u,q,q,v,A.a5),A.fA,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.bb,new B.o(o,q,m,n,q,q,A.n),A.fA,q,q,A.d9,A.bl,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f4u(this,p,d),q,q,q,q,q,q,!1,A.a7)},
cq2(d){var w,v,u,t,s,r=this,q=null,p=J.a3(d),o=p.h(d,"savedAt"),n=r.cD2(J.k(o==null?"":o))
o=B.n(18)
w=B.I(A.dB,A.q,1)
v=r.aQh(A.NA)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aR9,q,q,q)
p=p.h(d,"slides")
p=B.u(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.w(B.a([u,A.cR,B.d(p+" slides"+t,q,q,q,q,q,q,D.aRb,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.b34(A.hB,A.bu,"Bring it back",r.r?q:new C.f4C(r,d))
return B.p(q,B.B(B.a([v,A.bc,t,p,A.bp,r.b34(A.ef,A.cs,"Delete",r.r?q:new C.f4D(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.XJ,q,w,o,q,q,A.n),q,q,q,A.d9,D.bt5,q,q,q)},
b34(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hw(B.aB(w,B.p(w,B.X(d,v?A.b2:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a5),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a7),w,f,w,w)},
asD(d,e,f){var w=null
return new B.D(D.bs9,B.w(B.a([B.X(d,A.b2,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.fet,w,w,w),A.au,B.d(f,w,w,w,w,w,w,D.f6W,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c6
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aH(d,A.bW,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.b2,i,i,B.n(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aQi(A.yC,46),A.bc,D.bzr],t)
if(j.r)s.push(D.ec7)
s.push(B.aI(i,i,i,i,A.ri,i,i,i,new C.f4I(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.n(18)
p=B.I(A.dB,A.q,1)
o=J.a3(h)
q=B.a([A.R,u,new B.D(D.bvD,s,i),B.p(i,B.B(B.a([j.b6t(0,A.yi,"Save",j.a.c.length),j.b6t(1,A.NO,"Saved",o.gM(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.buH,A.ev,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cs:A.bu).j(0.12)
s=B.n(14)
r=B.I((j.y?A.cs:A.bu).j(0.4),A.q,1)
p=j.y
n=p?A.NC:A.e9
n=B.X(n,p?A.cs:A.bu,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.ab,B.E(B.d(m,i,i,i,i,i,i,A.TH,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.buD,A.im,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.fav,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aB(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fdz,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f4J(j,v),i,i,i,i,i,i,!1,A.a7))
s=B.a([B.B(s,A.m,i,A.e,A.j,0,i,i),A.R],t)
if(j.a.c.length===0)s.push(j.asD(A.q6,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.L)(r),++l)s.push(j.cig(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.ebG)
else if(j.e==null)s.push(j.asD(A.alk,"Could not reach the database","Check the connection, then open this again."))
else if(o.gal(h))s.push(j.asD(A.oR,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gae(h);r.C();)s.push(j.cq2(r.gT(r)))
A.d.v(u,s)}q.push(new B.dq(1,A.cm,B.ct(u,i,X.ain,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc3t()
p=s?i:D.Ol
s=s?A.c.j(0.07):i
o=B.n(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b4.j(0.4),A.cz,18)],x.V)
u=u.a
m=u===0
k=B.X(A.yi,m?A.k0:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bvf,B.aB(i,B.de(i,B.B(B.a([k,A.a7t,new B.dq(1,A.cm,B.eM(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.k0:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.dZ),i)],t),A.m,i,A.b7,A.j,0,i,i),i,i,A.bb,new B.o(s,i,i,o,n,p,A.n),A.hw,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a7),i))}else q.push(A.R)
return B.p(i,B.bl(!0,B.w(q,A.m,i,A.e,A.Q,0,A.p),!0,!1,A.ae,!0,!1),A.f,i,new B.aX(0,1/0,0,w.a.b*0.9),D.b17,i,i,i,i,i,i,i,i)}}
C.om.prototype={
ag(){return B.F(["id",this.a,"doc",this.b.ag(),"updatedAt",this.c.a5().ac()],x.N,x.z)}}
C.Yo.prototype={
U(){return new C.axm(B.a([],x.k),B.f8(null,x.H))},
ge2(){return this.c}}
C.axm.prototype={
a_(){this.a1()
this.Pg()},
Pg(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Pg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a1C(t.a.c),$async$Pg)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cGE(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Pg,v)},
cwh(d){var w,v,u,t=this
d.c=new B.S(Date.now(),0,!1)
w=J.qh(t.d,new C.cGH(d))
v=w<0
if(v&&C.hLo(d))return t.f
u=t.d
if(v)J.py(u,0,d)
else J.aG(u,w,d)
v=x.a
B.fRO(new C.cGI(t),v)
return t.f=t.f.bH(new C.cGJ(t,d),v).eS(new C.cGK())},
ID(d,e,f){return this.cbS(0,e,f)},
aY2(d,e){return this.ID(0,e,!1)},
cbS(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$ID=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a4(s,!1).cm(B.e9(new C.cGD(t,e),!1,null,x.H)),$async$ID)
case 3:w=4
return B.b(t.f,$async$ID)
case 4:w=5
return B.b(t.Pg(),$async$ID)
case 5:case 1:return B.h(u,v)}})
return B.i($async$ID,v)},
aXi(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dy5:d
this.ID(0,new C.om(w,v,new B.S(Date.now(),0,!1)),!0)},
c2Y(){return this.aXi(null)},
adh(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bQ(A.K,null,new C.cGL(),r,!1,!1,!0,null,!1,!1,x.g2),$async$adh)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aXi(s)
case 1:return B.h(u,v)}})
return B.i($async$adh,v)},
IC(d,e){return this.bJU(0,e)},
bJU(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$IC=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.cGy(e),s,null,!0,!0,x.y),$async$IC)
case 3:if(g!==!0){w=1
break}t.m(new C.cGz(t,e))
w=4
return B.b(t.f,$async$IC)
case 4:w=5
return B.b(C.ag5(t.a.c,e.a),$async$IC)
case 5:w=6
return B.b(t.Pg(),$async$IC)
case 6:case 1:return B.h(u,v)}})
return B.i($async$IC,v)},
Da(d){return this.bC2(d)},
bC2(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Da=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bQ(A.K,null,new C.cGu(d),r,!0,!0,!1,null,!1,!1,x.N),$async$Da)
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
return B.b(t.aY2(0,d),$async$Da)
case 9:w=5
break
case 7:w=10
return B.b(F.h0O(r,d.b,null),$async$Da)
case 10:w=5
break
case 8:w=11
return B.b(t.IC(0,d),$async$Da)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$Da,v)},
bXC(){var w,v,u=null,t=[D.dy8,D.dy6,D.dy7],s=new C.cGB(),r=B.n(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d8.j(0.4),A.eV,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aR(999,999)
n.push(B.p(u,new B.y(D.di4[w],u,A.oq,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bo(v,v,v,v),u,u,A.n),u,u,u,u,A.nY,u,u,u))}return B.p(u,B.B(B.a([B.E(B.w(B.a([D.fDq,A.N,B.bZ(A.bD,n,A.br,6,6),A.aQ,B.aB(u,B.p(u,D.eQe,A.f,u,u,new B.o(A.c,u,u,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cH,10)],q),u,A.n),u,u,u,u,U.aiL,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cGA(this),u,u,u,u,u,u,!1,A.a7)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a7(130,110,new B.an(A.A,u,A.aa,A.r,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bXj,A.n),u,u,u,u,D.bvN,u,u,u)},
bC0(d){var w,v=null,u=d.b.d.length,t=B.n(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cz,14)],x.V),r=x.p
s=B.p(v,B.bw(B.n(6),new B.an(A.V,v,A.b0,A.r,B.a([B.eM(A.A,F.anS(d.b),A.f,A.bU),D.ehE,B.ao(v,B.aB(v,B.p(v,D.bPO,A.f,v,v,D.b23,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cGp(this,d),v,v,v,v,v,v,!1,A.a7),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.f4g,v,v,v)
w=u===1?"":"s"
return B.aB(v,B.w(B.a([new B.fK(0.6470588235294118,s,v),A.N,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.faH,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cGq(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cGr(this,d),v,v,v,v,v,v,!1,A.a7)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.ez(B.a([new B.D(K.ahi,B.hw(B.aB(s,B.p(s,A.anZ,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b4.j(0.5),A.J,12)],x.V),E.w4,A.a5),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc4h(),s,s,s,s,s,s,!1,A.a7),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.mZ,s,s,s,!0,s,s,s,s,s,D.fDu,s,s,s,1,s,!0)
if(t.e)r=D.b5s
else{w=t.bXC()
v=B.a([D.fp2,A.ab],r)
if(J.cJ(t.d)){u=B.n(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.f3I,s,s,s),A.f,s,s,new B.o(D.baa,s,s,u,s,s,A.n),s,s,s,s,A.y0,s,s,s))}r=B.a([new B.nQ(A5.Z3,new B.m8(w,s),s),new B.nQ(D.bv9,new B.m8(B.B(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cm(t.d))r.push(D.eWO)
else r.push(new B.nQ(D.buF,B.OS(new B.os(new C.cGM(t),J.ad(t.d),!0,!0,!0,0,B.t_(),s),D.b4K),s))
r=B.vz(0,s,A.r,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c6(q,D.b90,r,s,!1,!1,s,s)}}
C.Ym.prototype={
U(){return new C.axi(B.a([],x.bx))},
TX(d){return this.d.$1(d)}}
C.aEy.prototype={}
C.axi.prototype={
b_V(d,e,f){var w=$.aw(),v=new B.ar(new B.ba(d,A.b3,A.aM),w),u=this.gaY1()
v.aQ(0,u)
w=new B.ar(new B.ba(e,A.b3,A.aM),w)
w.aQ(0,u)
return new C.aEy(v,w,f)},
E1(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a7(0)
v.x=B.cM(A.pV,new C.cFT(v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a1()
w=m.a.c.b
v=$.aw()
u=new B.ar(new B.ba(w.a,A.b3,A.aM),v)
t=m.gaY1()
u.aQ(0,t)
m.d!==$&&B.aP()
m.d=u
u=new B.ar(new B.ba(w.b,A.b3,A.aM),v)
u.aQ(0,t)
m.e!==$&&B.aP()
m.e=u
u=new B.ar(new B.ba(w.c,A.b3,A.aM),v)
u.aQ(0,t)
m.f!==$&&B.aP()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.L)(u),++q){p=u[q]
o=new B.ar(new B.ba(p.a,A.b3,A.aM),v)
o.aQ(0,t)
n=new B.ar(new B.ba(p.b,A.b3,A.aM),v)
n.aQ(0,t)
r.push(new C.aEy(o,n,p.c))}if(r.length===0)r.push(m.b_V("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a7(0)
if(r.y){r.a.c.b=r.gpd()
q=r.a
q.TX(q.c)}q=r.d
q===$&&B.c()
w=q.R$=$.aw()
q.P$=0
q=r.e
q===$&&B.c()
q.R$=w
q.P$=0
q=r.f
q===$&&B.c()
q.R$=w
q.P$=0
for(q=r.w,v=q.length,u=0;u<v;++u){t=q[u]
s=t.a
s.R$=w
s.P$=0
s=t.b
s.R$=w
s.P$=0}r.a2()},
gpd(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.mr(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rl(n,w,v,t,u)},
AJ(){var w=0,v=B.j(x.H),u=this,t
var $async$AJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a7(0)
u.y=!1
u.a.c.b=u.gpd()
t=u.a
w=2
return B.b(t.TX(t.c),$async$AJ)
case 2:return B.h(null,v)}})
return B.i($async$AJ,v)},
c4f(){this.m(new C.cFS(this))
this.E1()},
aX_(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cFV(w,d,v))
w.E1()},
c4g(d,e){var w=A.d.cF(this.w,e)
this.m(new C.cG2())
this.E1()
$.aV.x1$.push(new C.cG3(w))},
Qr(d){return this.ci6(d)},
ci6(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qr=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hR().kT(80,1400,A.eG),$async$Qr)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fe(),$async$Qr)
case 8:p=f
o=q.b.toLowerCase()
n=J.ahD(o,".png")?"image/png":"image/jpeg"
r.m(new C.cFW(d,n,p))
r.E1()
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
return B.i($async$Qr,v)},
xI(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hnT(r,t.gpd()),$async$xI)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cFU(t,s))
t.E1()
case 1:return B.h(u,v)}})
return B.i($async$xI,v)},
cio(d){var w,v=this,u=null,t=F.fyr(d.c)
if(t==null)return new B.bI(A.a3,u,u,B.hm(D.bJ4,D.frw,new C.cFY(v,d),u),u)
w=x.p
return new B.D(A.cu,new B.an(A.V,u,A.aa,A.r,B.a([B.bw(B.n(12),B.fO(t,A.A,u,u,A.ce,A.bU,!0,140,!1,u,1/0),A.aq),B.ao(u,B.B(B.a([v.b35(A.k8,new C.cFZ(v,d)),A.bp,v.b35(A.cy,new C.cG_(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b35(d,e){var w=null
return B.aF(!1,A.a1,!0,w,B.aL(!1,w,!0,new B.D(A.hy,B.X(d,A.c,w,w,w,18),w),A.cK,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aW,0,w,w,A.cK,w,w,A.ag)},
IE(){var w=0,v=B.j(x.H),u,t=this,s
var $async$IE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.AJ(),$async$IE)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.h0O(s,t.gpd(),new C.cG1(t)),$async$IE)
case 4:case 1:return B.h(u,v)}})
return B.i($async$IE,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.ez(B.a([new B.D(A.pW,B.hm(D.bNL,D.fxw,n.gawl(),B.fx(m,m,m,m,m,m,m,m,m,m,m,A.bL,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aI(m,m,m,m,A.anY,m,m,m,new C.cG4(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.WU,m,1,m,m,m,!1,m,!1,E.mZ,m,m,m,!0,m,m,m,m,m,D.fsn,m,m,m,1,m,!0),j=At.aTZ(O.li,A.c,Ad.VM,A.o4,D.ft6,n.gc4e()),i=B.n(18),h=n.gawk(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.jv,12)],x.V)
g=B.aB(m,B.p(m,new B.a7(92,142.1818181818182,B.eM(A.A,F.anS(n.gpd()),A.f,A.du),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a7)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.eo,B.E(B.w(B.a([D.fF0,A.au,B.d(F.h_i(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.fgb,m,m,m),A.R,B.dn(E.ang,E.aRX,h,B.bm(A.d8,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.WU,m,m,i,m,m,A.n),m,m,m,m,A.bl,m,m,m)
h=n.d
h===$&&B.c()
h=B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),h,m,m,m,m,m,2,B.br(m,new B.b3(4,B.n(12),A.dj),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.ol,!0,A.a4,m,A.am,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),w,m,m,m,m,m,2,B.br(m,new B.b3(4,B.n(12),A.dj),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.am,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aB,h,A.N,w,A.N,B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),g,m,m,m,m,m,2,B.br(m,new B.b3(4,B.n(12),A.dj),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.am,m,m,m,m),A.aQ],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aR(16,16)
u=new B.az(O.li.j(0.18),1,A.q,-1)
t=v+1
s=B.aI(m,m,m,m,D.bMt,m,m,m,v===0?m:new C.cG5(n,v),m,m,m,m,"Move up",A.cc)
r=i.length
q=B.aI(m,m,m,m,D.bSO,m,m,m,v===r-1?m:new C.cG6(n,v),m,m,m,m,"Move down",A.cc)
r=r===1?m:new C.cG7(n,v)
p=new B.aR(12,12)
o=new B.aR(12,12)
g.push(B.p(m,B.w(B.a([new B.ck(A.aN,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.y("Page "+t,m,D.fgJ,m,m,m,m,m,m,m,m,m),A.b5,s,q,B.aI(m,m,m,m,B.X(A.ef,A.oL,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.cc)],l),m),B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),i[v].a,m,m,m,m,m,2,new B.e3(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b3(4,new B.bo(p,p,p,p),A.dj),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.cj,!0,A.a4,m,A.am,m,m,m,m),A.an,n.cio(i[v]),B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),i[v].b,m,m,m,m,m,2,new B.e3(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b3(4,new B.bo(o,o,o,o),A.dj),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.am,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.mZ,m,new B.bO(u,u,u,u),new B.bo(w,w,w,w),m,m,A.n),m,m,new C.a8d(h),A.e8,D.btk,m,m,m))}return B.op(!0,B.c6(k,E.afv,B.ct(g,m,D.btM,m,m,A.ah,!1),m,!1,!1,j,m),new C.cG8(n),x.C)}}
C.axk.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cs:E.mZ,q=B.n(16),p=B.n(16),o=s?A.aw.j(0.08):A.c.j(0.04)
s=s?A.aw.j(0.16):A.d8.j(0.22)
w=B.n(12)
v=x.p
return new B.D(A.eM,B.aF(!1,A.a1,!0,t,B.aL(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bc,B.E(B.w(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bz,B.d(u.e,t,t,t,t,t,t,D.aQw,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.X(A.eA,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bl,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ag),t)}}
C.aq6.prototype={
U(){return new C.aDo()}}
C.aDo.prototype={
a_(){this.a1()
this.Zz()},
bu(d){this.bC(d)
if(d.c!=this.a.c)this.a0V()},
a0V(){var w=0,v=B.j(x.H),u=this,t
var $async$a0V=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dR(t,x.H),$async$a0V)
case 2:u.d=null
if(u.c!=null)u.m(new C.ea1(u))
w=3
return B.b(u.Zz(),$async$a0V)
case 3:return B.h(null,v)}})
return B.i($async$a0V,v)},
Zz(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Zz=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d1(n,"http://")||J.d1(n,"https://")||J.d1(n,"data:")){o=B.Y0(B.cD(n,0,null),new B.Pe(!0))
r.d=o}else{o=B.fm("unsupported video ref")
throw B.V(o)}w=7
return B.b(o.ik(0).d7(0,A.pR),$async$Zz)
case 7:if(r.c==null){w=1
break}r.d.tl(!1)
r.m(new C.ea_(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ab(m)
$.am.$1("[kiapo video] "+B.u(q))
if(r.c!=null)r.m(new C.ea0(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Zz,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
c6K(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.h5(0)
w.m(new C.ea2(w))}else{v.pX(0)
w.m(new C.ea3(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bI
n=B.n(8*n.d)
m=B.a([D.jg.j(0.92),D.KW.j(0.95)],x.O)
w=B.I(A.bZ.j(0.55),A.q,1)
v=p.a
u=v.d
t=B.X(A.q9,A.bZ,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c0(B.au(B.w(B.a([t,new B.a7(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.Q,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a8(A.ay,A.aC,A.x,m,o,o),A.n),A.be)}if(p.f)return B.au(B.X(A.amz,A.aA,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b6h
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.n(6*n.d)
m=B.a([B.eM(A.A,new B.a7(r,q,new B.Ac(s,o),o),A.r,A.bU)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.au(B.p(o,B.X(A.j2,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a5),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aB(o,B.bw(n,new B.an(A.V,o,A.b0,A.r,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc6J(),o,o,o,o,o,o,!1,A.a7)}}
C.xA.prototype={
a3(){return"NgmyHatiLayoutKind."+this.b}}
C.jm.prototype={}
C.ad2.prototype={
B(d){return B.oR(new C.dXE(this,B.P(d).ax.a===A.I,d),!0,0.72,0.9,0.5,!1,null)}}
C.acs.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.I,s=B.n(18),r=B.n(18),q=B.I(D.jg.j(t?0.35:0.4),A.q,1),p=t?D.Lv:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cz,14)],o),m=B.n(10),l=B.I(A.bZ.j(0.5),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dD,6)],o)
w=this.c
o=B.E(B.p(u,new B.fK(0.5625,C.i2O(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.aje,u,u,u,u),1)
m=D.jg.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.jg,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aF(!1,A.a1,!0,u,B.aL(!1,s,!0,B.p(u,B.w(B.a([o,B.p(u,B.w(B.a([l,A.cR,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aA:D.bgv,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bO(new B.az(m,1,A.q,-1),A.W,A.W,A.W),u,u,u,A.n),u,u,u,u,D.ahy,u,u,u)],v),A.ai,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ag)}}
C.xD.prototype={
a3(){return"NgmyMarriageLayoutKind."+this.b}}
C.nG.prototype={}
C.bix.prototype={
ZI(d){var w=null
return new B.bI(A.a3,w,w,B.Bh(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.n(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
c7b(){return this.ZI(1)},
awW(d){var w=null,v=B.n(8),u=B.I(A.i2,A.q,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.adw,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.w(B.a([B.B(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.i2,A.q,1.6),v,v,v,A.a5),v,22,v,v,v,v,v,22),B.dU(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.i2,A.q,1.6),v,v,v,A.a5),v,22,v,v,v,v,v,22),new B.x(-8.36,0))],u),A.m,v,A.b7,A.j,0,v,v),A.au,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a6,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.an,w.awW("TAARIFA ZA WANANDOA"),A.an,w.c7b(),A.cR,w.ZI(0.9),A.cR,w.ZI(0.7),A.N,w.awW("TAMKO LA MAKUBALIANO"),A.fF,w.ZI(1),A.cR,w.ZI(0.95),A.N,w.awW("MASHAHIDI"),A.b5,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.ad5.prototype={
B(d){return B.oR(new C.eeo(B.P(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.aeL.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.I,p=B.n(18),o=B.n(18),n=B.I(A.ax.j(q?0.35:0.4),A.q,1),m=q?D.bg6:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cz,14)],l),j=B.n(10),i=B.I(A.ax.j(0.5),A.q,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dD,6)],l)
w=this.c
v=C.h_O(w.a)
if(v==null)v=A.d.gH(D.QS)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.p(r,new B.fK(0.5625,new B.an(A.V,r,A.b0,A.r,B.a([B.bT(0,B.fO(C.h_N(v.d),A.A,r,r,A.ce,A.bU,!0,r,!1,r,r),0,0,0),new B.D(A.aie,new C.bix(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.aje,r,r,r,r),1)
j=A.ax.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:Z.Lw,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aF(!1,A.a1,!0,r,B.aL(!1,p,!0,B.p(r,B.w(B.a([l,B.p(r,B.w(B.a([i,A.cR,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aA:D.b9v,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bO(new B.az(j,1,A.q,-1),A.W,A.W,A.W),r,r,r,A.n),r,r,r,r,D.ahy,r,r,r)],s),A.ai,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ag)}}
C.kT.prototype={
a3(){return"NgmyMarriagePaperStyle."+this.b}}
C.a7F.prototype={}
C.VB.prototype={
U(){var w=$.aw()
return new C.aDF(new B.cv(null,x.A),new B.ar(A.as,w),new B.ar(A.as,w),B.mA(0,null,null),A.d.gH(D.a31),D.dIi,B.a([],x.L),B.a([],x.gE))}}
C.aDF.prototype={
a_(){var w,v=this
v.a1()
v.w=v.a.c
v.z=new C.zB(C.fCk(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
w=x.a
C.fBg().bH(new C.ehl(v),w)
$.qV().jG(0,"assets/images/ngmy_logo.png").bH(new C.ehm(v),w).eS(new C.ehn())},
q(){var w=this,v=w.e,u=$.aw()
v.R$=u
v.P$=0
v=w.f
v.R$=u
v.P$=0
w.r.q()
w.a2()},
ah7(d){var w=null,v=this.c
if(v!=null)v.I(x.q).f.S(B.b2(w,w,w,w,w,A.r,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.T,w,w,w,w,w,w,w,w,w,w))},
IX(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$IX=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hR().kT(88,1600,A.eG),$async$IX)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fe(),$async$IX)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.ho8(m,p),$async$IX)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bCi(new B.pN(o,1),m),$async$IX)
case 10:if(r.c!=null)r.m(new C.egY(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ab(k)
r.ah7("Could not open that picture. "+B.u(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$IX,v)},
WL(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$WL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ho8(s,q),$async$WL)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bCi(new B.pN(r,1),s),$async$WL)
case 4:if(t.c!=null)t.m(new C.egU(t,r))
case 1:return B.h(u,v)}})
return B.i($async$WL,v)},
ae2(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$ae2=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.eh4(q))
t=4
q.a.toString
p=C.i7e()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$ae2)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eh5(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ab(i)
q.ah7(B.u(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eh6(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ae2,v)},
ZN(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$ZN=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.eh_(q,i))
t=4
q.a.toString
p=C.i7d()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$ZN)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.eh0(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ab(g)
if(q.c!=null)q.m(new C.eh1(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eh2(q))
$.aV.x1$.push(new C.eh3(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ZN,v)},
c7r(d){this.m(new C.egZ(this,d))},
Ei(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Ei=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.egW(q))
t=4
w=7
return B.b($.aV.gmB(),$async$Ei)
case 7:w=8
return B.b(B.bM(A.n6,null,x.H),$async$Ei)
case 8:k=$.aV.aj$.x.h(0,q.d)
p=k==null?null:k.gba()
if(!(p instanceof B.pY))throw B.V("The page is not ready yet.")
w=9
return B.b(p.m_(1800/p.gY(0).a),$async$Ei)
case 9:o=e
w=10
return B.b(o.hu(A.h0),$async$Ei)
case 10:n=e
if(n==null)throw B.V("Could not make the picture.")
w=11
return B.b(A6.ag9(J.eU(A.dC.gaP(n)),"ngmy_news.png","image/png"),$async$Ei)
case 11:m=e
q.ah7(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
q.ah7(B.u(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.egX(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ei,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aI(a2,a2,a2,a2,A.l3,a2,a2,a2,new C.ehc(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aI(a2,a2,a2,a2,D.bOg,a2,a2,a2,new C.ehd(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aI(a2,a2,a2,a2,A.p0,a2,a2,a2,a4?a1.gaZ7():a2,a2,a2,a2,a2,"Download",a2))
a3=B.ez(v,a2,a2,!0,!0,A.AW,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eQo,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eV,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fK(0.7142857142857143,B.eM(A.A,new B.eH(new C.b0f(t,s,r,a1.x,a2),a1.d),A.f,A.du),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,H.zP,a2,a2,a2)
t=a1.as?a2:a1.gc7q()
t=B.a([B.E(B.dn(D.bP0,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cj,a2,a2,a2),t,B.bm(D.to,a2,a2,a2,A.c,A.fO,a2,a2,new B.b7(B.n(14),P.v5),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bw(B.n(10),B.fO(r,A.A,a2,a2,A.ce,A.bU,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.at,r,B.aI(a2,a2,a2,a2,D.bLM,a2,a2,a2,a1.as?a2:a1.gbIv(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,H.zP,a2,a2,a2)
q=B.aM(a2,A.U,!1,a2,!0,A.r,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aS7("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.aj,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dg,!0,A.a4,a2,A.am,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.dcr[o]
p.push(B.mH(a2,D.to,new B.y(n.a,a2,A.pi,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hW,new C.ehe(a1,n),a2,a2,P.v5,a2))}p=B.bZ(A.bD,p,A.br,6,8)
m=a1.Q
m=B.bZ(A.bD,B.a([D.fDC,A.bc,B.j8(a2,a2,a2,D.fnO,a2,new C.ehf(a1),m==="en",a2,a2,a2,a2),A.ab,B.j8(a2,a2,a2,D.fnJ,a2,new C.ehg(a1),m==="sw",a2,a2,a2,a2)],w),A.rY,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,H.zP,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.dc(D.a31,0,B.dG(10,"count",x.S),j),h=i.$ti,i=new B.bR(i,i.gM(0),h.k("bR<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aQC(g==null?h.a(g):g))}k=B.ct(k,a2,a2,a2,a2,A.aN,!1)
i=B.a([],w)
for(j=B.dc(D.a31,10,a2,j),h=j.$ti,j=new B.bR(j,j.gM(0),h.k("bR<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aQC(g==null?h.a(g):g))}j=B.ct(i,a2,a2,a2,a2,A.aN,!1)
i=a1.as?a2:a1.gc7t()
h=B.n(18)
v=B.a([new B.ac(0,A.G,A.bA.j(0.4),A.J,18)],v)
v=B.a([u,A.aB,new B.D(A.cu,s,a2),t,A.aB,new B.D(A.cu,r,a2),q,A.N,p,A.R,m,A.aB,new B.D(A.cu,l,a2),new B.a7(a2,78,k,a2),A.N,new B.a7(a2,78,j,a2),A.aQ,B.aB(a2,B.p(A.A,B.B(B.a([D.bOV,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fP,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.ue,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a7)],w)
if(a4){u=B.a([A.dY,B.B(B.a([D.dsY,A.at,D.bzL],w),A.m,a2,A.e,A.j,0,a2,a2),A.N],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.L)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a8:A.a3
q=e?A.b4.j(0.35):D.to
p=new B.aR(16,16)
d=new B.az(A.bE,1,A.q,-1)
u.push(new B.bI(r,a2,a2,B.p(a2,new B.y(f.b,a2,D.fef,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A7.VA,new B.o(q,a2,new B.bO(d,d,d,d),new B.bo(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cu,A.im,a2,a2,a2),a2))}u.push(A.an)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cZA[o]
t.push(B.mH(a2,D.to,new B.y(a0,a2,A.Jh,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hW,new C.ehh(a1,a0),a2,a2,P.v5,a2))}u.push(B.bZ(A.bD,t,A.br,6,8))
u.push(A.R)
t=B.E(B.aM(a2,A.U,!1,a2,!0,A.r,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aS7("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.aj,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.ehi(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dg,!0,A.a4,a2,A.am,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc7s()
u.push(B.B(B.a([t,A.ab,B.HJ(A.yG,s,B.nA(a2,A.b4,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.aB)
t=a1.as?a2:a1.gaZ7()
u.push(B.dn(A.p0,D.fz8,t,B.bm(A.cT,a2,a2,a2,a2,A.J1,a2,a2,new B.b7(B.n(16),A.W),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.ct(v,a1.r,A.ai0,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.n(20)
s=B.I(E.jY.j(0.5),A.q,1)
v.push(B.bT(0,B.el(B.au(B.p(a2,B.B(B.a([E.a7u,A.eo,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iS,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(E.AO,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bw4,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c6(a3,A.AW,new B.an(A.V,a2,A.aa,A.r,v,a2),a2,!1,!1,a2,a2)},
aS7(d){var w=null
return B.br(w,new B.b3(4,B.n(14),A.W),w,A.eR,w,w,w,w,!0,w,w,w,w,w,w,D.to,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A0.Jc,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aQC(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.n(12),q=B.b0(d.f),p=s?A.bA:A.bE
p=B.I(p,A.q,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.kW,t,t,t,t),A.fF],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bsn,t,t,t,t))
w.push(A.cR)
w.push(new B.D(A.jo,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aB(t,B.p(t,B.w(w,A.m,t,A.b7,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.il,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.egV(this,d),t,t,t,t,t,t,!1,A.a7)}}
C.zB.prototype={
bbq(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.zB(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cHw(d){var w=null
return this.bbq(w,w,w,w,w,d,w,w,w,w)},
ag(){var w=this
return B.F(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aCi(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cd0(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aW(g);v.C();){u=v.gT(v)
if(A.a.i(B.u(u)).length!==0)w.push(A.a.i(B.u(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fF(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.M(w,new C.ccZ(),B.T(w).k("M<1,m>")).c0(0,new C.cd_())
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
return this.bbq(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gFv(d){return this.f}}
C.tm.prototype={
a3(){return"NewsLayout."+this.b}}
C.Bv.prototype={
a3(){return"NewsFrame."+this.b}}
C.li.prototype={}
C.b0f.prototype={
ro(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aZ9(d,e,f,g){return this.ro(d,e,null,1.25,f,A.bo,g)},
PN(d,e,f,g,h){return this.ro(d,e,f,1.25,g,A.bo,h)},
ax1(d,e,f,g,h){return this.ro(d,e,null,f,g,A.bo,h)},
ax0(d,e,f,g,h){return this.ro(d,e,f,g,0,A.bo,h)},
aZb(d,e,f,g,h){return this.ro(d,e,null,f,0,g,h)},
c7x(d,e,f,g,h,i){return this.ro(d,e,f,g,0,h,i)},
ax_(d,e,f,g){return this.ro(d,e,null,f,0,A.bo,g)},
ae5(d,e,f){return this.ro(d,e,null,f,0,A.bo,A.cM)},
aZa(d,e,f,g,h){return this.ro(d,e,f,g,0,h,A.cM)},
c7w(d,e,f,g){return this.ro(d,e,null,f,0,g,A.cM)},
c7v(d,e,f,g){return this.ro(d,e,f,g,0,A.bo,A.cM)},
ae6(d,e,f,g,h,i){return this.ro(d,e,f,g,h,A.bo,i)},
aZ8(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.l1(new B.eR(d,u,u,A.d_,u,u,u,u,u,u,new B.G(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a4,A.cb,new B.kI(1),u,u,h,u,A.c7,u)
v.uB(g)
if(!v.b.a.c.gaDY())return w
w-=2}return j},
ae3(d,e,f,g,h,i,j,k){return this.aZ8(d,e,f,g,h,i,j,k,A.bo)},
az7(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a7(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.w(t,A.m,w,A.e,A.j,0,A.p)},
az6(d){return this.az7(null,!1,d)},
agW(d,e){return this.az7(null,d,e)},
cpb(d,e){return this.az7(d,!1,e)},
gb0i(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaUM(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
OD(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.ae3(w.gaUM(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaUM(),v,g,A.a2,v,v,v,w.ax0(u,t,f,1.02,A.O),e,v,v)},
aUR(d){return this.OD(d,A.L,null,2,78,30)},
abx(d,e,f,g,h){return this.OD(d,e,null,f,g,h)},
bXu(d,e,f,g,h){return this.OD(d,A.L,e,f,g,h)},
bXt(d,e,f){return this.OD(d,A.L,null,e,f,30)},
RJ(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bI
w=v.d.as
return new B.D(A.jH,B.d(s,u,g,A.a2,u,u,u,v.aZa(w,v.aZ8(t,w,A.cM,d,g,h,15,1.2,A.cE),f,1.2,A.cE),e,u,u),u)},
b68(d){return this.RJ(d,A.L,null,3,24)},
aAB(d,e,f,g){return this.RJ(d,e,null,f,g)},
cwL(d,e,f){return this.RJ(d,A.L,e,3,f)},
b69(d,e){return this.RJ(d,e,null,3,24)},
cwJ(d,e){return this.RJ(d,A.L,null,3,e)},
cwK(d,e,f){return this.RJ(d,e,null,3,f)},
aqE(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.fY,B.d(u.toUpperCase(),v,v,v,v,v,v,w.PN("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
NA(){return this.aqE(null,!0)},
aqD(d){return this.aqE(null,d)},
bEr(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bI
return new B.D(A.i4,new B.a7(d,w,B.d(v,w,2,A.a2,w,w,w,this.c7w(this.d.as,13.5,1.2,A.cE),e,w,w),w),w)},
vu(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.S(Date.now(),0,!1),i=m.gb0i(),h=A.o.am(j.bz(B.c1(B.bA(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hVN(Math.max(1,B.bA(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aZ9(k,12,1.2,A.O),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.ae3(i,v,A.O,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.ae3(i.toUpperCase(),v,A.O,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.w(B.a([B.p(l,B.B(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eH,l,l,l,m.ae6(v,u*0.84,h,1,1,A.O),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.N,B.B(B.a([B.d(C.bBy(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.is,A.j,0,l,l),A.an,m.agW(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.w(B.a([B.B(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.eo,B.E(B.d(i,l,1,A.eH,l,l,l,m.ax_(v,u*0.9,1,A.O),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.R,B.B(B.a([B.d(C.bBy(j),l,l,l,l,l,l,m.PN(k,13,B.b0(h),0.6,A.O),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.is,A.j,0,l,l),A.N,m.cpb(B.b0(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb0i()
v=B.d("NGMY",l,l,l,l,l,l,m.ax1(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.n(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.w(B.a([B.B(B.a([v,A.ab,B.eE(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.ro(k,r*0.72,o,1.05,-0.5,A.cE,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b5,new B.dq(1,A.cm,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.ae6(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.O),A.dP,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.N,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.is,A.j,0,l,l)
t=m.agW(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.ax_(v,u,1,A.O),A.L,l,l)
q=a0?4:8
return B.w(B.a([w,A.au,t,new B.a7(l,s,l,l),v,new B.a7(l,q,l,l),m.agW(!0,1.4),A.au,B.d(C.bBy(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.au,m.az6(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.w(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.ax1(v,u,1,3,A.O),A.L,l,l),A.N,m.agW(!0,1.2),A.au,B.B(B.a([B.d(C.bBy(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.is,A.j,0,l,l),A.au,m.az6(3)],h),A.m,l,A.e,A.j,0,A.p)}},
acF(d){return this.vu(d,!1)},
ae4(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.n(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.ae6("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
c7u(d,e){return this.ae4(d,null,e,null)},
aWS(d){var w=null,v=new B.S(Date.now(),0,!1),u=A.o.E(B.dk(v),12)===0?12:A.o.E(B.dk(v),12),t=B.b0(this.d.w).j(0.75),s=this.ax0("Roboto",15,t,1,A.cv),r=B.X(E.akG,t,w,w,w,18),q=A.a.ap(A.p4[B.bH(v)-1],0,3),p=A.a.aX(A.o.u(B.h1(v)),2,"0"),o=B.dk(v)>=12?"PM":"AM"
return B.B(B.a([r,A.ab,B.d(q+" "+B.bS(v)+", "+B.bA(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fL,w,w,w,1),B.X(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
avM(){return this.aWS(A.o1)},
b3j(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.ae6("Roboto",this.ae3(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
aza(d,e,f){return this.b3j(d,e,f,30)},
aAE(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bI
return new B.D(A.vt,B.d(v,w,e,A.a2,w,w,w,this.c7v("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b6d(d){return this.aAE(d,3,22)},
cwW(d,e){return this.aAE(d,e,22)},
tD(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fO(r,A.A,s,s,A.ce,A.bU,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.Dl(D.byQ,w,s)
if(v==="sepia")w=new B.Dl(D.byP,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.au(B.X(A.yd,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c0(s,new B.o(s,s,s,s,s,new B.c_(A.A,0.95,A.x,s,0,B.a([A.K,A.WQ.j(0.38)],x.O),s,s),A.n),A.be))
return new B.a7(d,e,new B.an(A.V,s,A.b0,A.r,v,s),s)},
qs(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b0(j),A.q,3)
j=B.I(B.b0(j),A.q,1)
return B.p(k,B.p(k,l.tD(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.ev,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lU,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.e8a,14)],x.V)
v=l.tD(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eE(A.A,-0.035,B.p(k,B.w(B.a([v,B.E(B.au(B.d(u,k,2,A.a2,k,k,k,l.aZa(j.as,13.5,D.bb1,1.1,A.cE),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.bes,k,k,k,w,k,A.n),k,e,k,k,D.btH,k,k,d),k)
case 3:w=B.n(30)
j=B.I(B.b0(j.x),A.q,5)
return B.p(k,B.bw(B.n(25),l.tD(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b0(j.x),A.q,6)
j=B.b0(j.f)
v=t-10
return new B.a7(d,e,B.au(B.p(k,B.hY(l.tD(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a5),k,t,k,k,A.lU,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.e80,10)],x.V)
return B.eE(A.A,0.025,new B.a7(d,e,new B.an(A.V,k,A.aa,A.f,B.a([B.bT(0,B.p(k,l.tD(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.r8,k,k,k),0,0,0),B.ao(k,B.eE(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eE(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a7(d,e,B.b4(B.nu(l.tD(d,e),A.aq,D.h3e),new C.bbO(j,k),k,k,A.az),k)
case 7:j=x.p
w=B.a([l.tD(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bm(u));++n){m=new B.aR(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bO,k,k,new B.bo(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cL(0,q,0,p,k,k,new B.ck(A.aN,A.rr,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.V,k,A.b0,A.r,w,k),A.f,A.ed,k,k,k,e,k,k,D.by5,k,k,d)
case 8:w=d/2
v=B.wZ(A.hE,new B.aR(w,w))
j=B.I(B.b0(j.x),A.q,5)
w-=5
return B.p(k,B.bw(B.wZ(A.hD,new B.aR(w,w)),l.tD(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fN,22)],x.V)
return B.p(k,l.tD(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bT,k,k,d)
case 10:return new B.a7(d,e,B.nu(l.tD(d,e),A.aq,D.h9L),k)
case 0:j=B.I(B.b0(j.w),A.q,2.4)
return B.p(k,l.tD(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.ev,k,k,d)}},
aOc(d,e){return this.d.e===D.Rw?A.bI:this.bEr(d,e)},
Wj(d){return this.aOc(d,A.L)},
gazV(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
azU(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.E(B.au(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aZb(v.Q,19,1.15,A.cE,A.O),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.PN("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.au)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.ae5(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jw(B.w(q,A.F,n,A.e,A.j,0,A.p),A.r,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bl,n,n,d)},
gcfC(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a9d(d,e,f,g){return B.cA(new C.cd1(this,e,d,f,g))},
a9c(d){return this.a9d(d,22,!0,18)},
Wu(d,e){return this.a9d(d,22,!0,e)},
aPd(d,e,f){return this.a9d(d,22,e,f)},
bGs(d,e,f){return this.a9d(d,e,!0,f)},
b98(d,e,f,g){return B.cA(new C.cd2(this,e,d,g,!0,f))},
ceq(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.w(B.a([k.acF(824),A.aB,k.aUR(824),k.b68(824),A.N,k.NA(),A.ac,B.au(k.qs(824,360),j,j,j),k.Wj(824),A.ac,B.E(k.a9c(3),1)],x.p),A.ai,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.w(B.a([k.acF(824),A.aQ,new B.a7(j,350,B.B(B.a([new B.a7(440,j,B.w(B.a([k.abx(440,A.bh,3,62,26),k.aAB(440,A.bh,2,20),A.b5,k.aqE(B.b0(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.J2,B.w(B.a([k.qs(362,310),k.Wj(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.R,k.az6(2),A.ac,B.E(k.a9c(3),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 2:w=k.vu(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.bXu(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cwL(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.w(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.Bi,j,j,j)
u=B.a([B.au(k.qs(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Rw){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.ax0(i,14,A.c,1.15,A.O),j,j,j),A.f,h,j,j,j,j,j,j,A.lm,j,j,j),j,j,0,0,j,j))}return B.w(B.a([w,A.ac,v,A.ac,new B.an(A.V,j,A.aa,A.r,u,j),A.N,k.NA(),A.R,B.E(k.Wu(2,21),1)],t),A.ai,j,A.e,A.j,0,A.p)
case 3:h=k.vu(824,!0)
w=k.qs(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.w(B.a([h,A.ac,new B.an(A.b6,j,A.aa,A.r,B.a([w,B.ao(0,B.p(j,k.OD(780,A.bh,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a8(A.b1,A.b6,A.x,v,j,j),A.n),j,j,j,j,D.bwn,j,j,j),j,j,0,0,j,j)],u),j),k.b69(824,A.bh),A.N,k.NA(),A.R,B.E(k.a9c(3),1)],u),A.ai,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.w(B.a([k.acF(824),A.aB,k.aUR(824),k.b68(824),A.N,k.NA(),A.ac,B.E(k.b98(3,300,B.w(B.a([k.qs(300,300),k.Wj(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.ai,j,A.e,A.j,0,A.p)
case 5:w=k.vu(824,!0)
v=x.p
u=B.w(B.a([k.abx(440,A.bh,3,62,26),k.aAB(440,A.bh,2,20),A.b5,k.aqD(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.w(B.a([w,A.bw,new B.a7(j,400,B.B(B.a([new B.a7(440,j,u,j),A.aOx,new B.D(A.i4,k.qs(364,h.e===D.Rw?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.aB,B.E(k.Wu(2,21),1)],v),A.ai,j,A.e,A.j,0,A.p)
case 6:return B.w(B.a([k.acF(824),A.ac,k.bXt(824,2,70),k.cwJ(824,21),A.N,k.NA(),A.ac,B.E(k.b98(3,340,B.au(k.qs(340,340),j,j,j),350),1)],x.p),A.ai,j,A.e,A.j,0,A.p)
case 7:w=k.vu(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bBy(new B.S(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.PN(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bl,j,j,j),A.aB],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aZb(h.Q,24,1.15,A.cE,A.O),j,j,j))
v.push(A.b5)
if(k.gazV())v.push(k.azU(230,250))
return B.w(B.a([w,A.aB,B.E(B.B(B.a([new B.a7(230,j,B.w(v,A.ai,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.ahw,j,j,j,1.2),new B.a7(570,j,B.w(B.a([k.abx(570,A.bh,3,62,28),k.cwK(570,A.bh,20),A.N,k.aqD(!1),A.N,B.au(k.qs(570,330),j,j,j),k.Wj(570),A.R,B.E(k.aPd(2,!1,17),1)],t),A.ai,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.ai,j,A.e,A.j,0,A.p)
case 8:w=k.vu(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.PN(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.w(B.a([w,A.ac,B.p(j,B.w(B.a([t,A.an,k.OD(788,A.bh,v?A.w:B.b0(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.buI,j,j,j),k.b69(824,A.bh),A.R,B.au(k.qs(824,310),j,j,j),k.Wj(824),A.N,k.NA(),A.R,B.E(k.a9c(3),1)],s),A.ai,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.w(B.a([k.vu(824,!0),A.aQ,new B.an(A.V,j,A.aa,A.r,B.a([k.qs(824,430),B.ao(18,k.c7u(k.c.b,17),j,j,18,j,j,j)],w),j),A.bw,k.aza(824,3,66),k.b6d(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.avM(),A.aB,B.E(k.Wu(2,18),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.w(B.a([k.vu(824,!0),A.bw,new B.a7(j,500,B.B(B.a([new B.a7(410,j,B.w(B.a([k.ae4(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aQ,k.b3j(410,4,58,28),k.aAE(410,6,20),A.b5],w),A.F,j,A.e,A.j,0,A.p),j),U.aOy,k.qs(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.aB,k.avM(),A.aQ,B.E(k.Wu(2,18),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 12:w=k.vu(824,!0)
v=k.qs(824,420)
u=B.hys(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.w(B.a([w,A.aQ,new B.an(A.V,j,A.aa,A.r,B.a([v,B.ao(22,B.fu(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c7x(i,30,A.c,1,A.cE,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bwD,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bw,k.aza(824,3,62),k.b6d(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aWS(A.ls),A.aB,B.E(k.Wu(2,18),1)],r),A.ai,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vu(824,!0)
u=h.w
t=x.p
w=B.a([k.qs(824,380),B.ao(j,k.ae4(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.aza(824,2,60)
r=k.cwW(824,2)
p=k.avM()
o=B.E(k.aPd(2,!1,18),1)
n=B.I(B.b0(u).j(0.18),A.q,1)
m=B.n(18)
h=h.x
l=B.b0(h).j(0.05)
return B.w(B.a([v,A.aQ,new B.an(A.V,j,A.aa,A.r,w,j),A.aQ,s,r,A.R,p,A.aB,o,A.ac,B.p(j,B.B(B.a([B.bw(B.n(14),k.tD(150,104),A.aq),A.oh,B.E(B.w(B.a([k.ae4("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.N,B.d(q,j,2,A.a2,j,j,j,k.ax_(i,19,1.15,A.H),j,j,j)],t),A.F,j,A.e,A.Q,0,A.p),1),B.X(A.eA,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bl,j,j,j)],t),A.ai,j,A.e,A.j,0,A.p)
case 9:return B.w(B.a([k.vu(824,!0),A.bw,k.abx(824,A.bh,3,62,30),k.aAB(824,A.bh,2,22),A.R,k.aqD(!1),A.R,B.au(k.qs(824,330),j,j,j),k.aOc(824,A.bh),A.aQ,B.E(k.bGs(2,40,21),1)],x.p),A.ai,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bT(0,B.c0(s,new B.o(s,s,s,s,s,new B.a8(A.ay,A.aC,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.be),0,0,0)],o)
if(q.ax)n.push(B.bT(0,B.b4(s,s,s,new C.b8m(B.b0(q.w),s),A.az),0,0,0))
w=q.w
n.push(new B.D(D.bx9,B.w(B.a([B.E(t.ceq(),1),A.N,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fF,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aZ9(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.PN(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.is,A.j,0,s,s)],o),A.ai,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bT(0,B.e2(B.b4(s,s,s,new C.bqI(v.j(q.ch?0.07:0.06),s),A.az),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.I(B.b0(w).j(0.5),A.q,1.2)
u=B.n(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hY(B.fO(q,A.A,s,s,A.ce,A.bU,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.o1,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.ax1(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e2(B.db(B.p(s,B.B(o,A.m,s,A.e,A.Q,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.byd,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a7(900,1260,B.jw(new B.an(A.V,s,A.aa,A.r,n,s),A.r,s),s)}}
C.bbP.prototype={
jd(d){return C.hdn(d)},
jT(d){return!1}}
C.bbO.prototype={
a6(d,e){var w,v=C.hdn(e)
$.W()
w=B.N()
w.r=this.b.gp(0)
w.b=A.af
w.c=6
return d.aS(v,w)},
av(d){return!d.b.A(0,this.b)}}
C.btd.prototype={
jd(d){var w,v,u,t,s,r,q,p,o=new B.f5()
o.dU(3)
w=$.W()
v=B.a([],x.v)
u=new B.aO(w.r,A.ao,null,null,v)
u.F(new B.b5(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.ap(s,o.an()*14)
v.push(w)
r=u.f
if(r!=null)w.bA(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.F(new B.ap(t,8))
w=d.b
r=w-8
u.F(new B.ap(t,r))
for(;t>0;t-=14){q=new B.ap(t,w-o.an()*14)
v.push(q)
p=u.f
if(p!=null)q.bA(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.F(new B.ap(0,r))
u.F(new B.bE())
return u},
jT(d){return!1}}
C.b8m.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.f5()
k.dU(7)
$.W()
w=B.N()
for(v=this.b,u=e.a,t=e.b,s=d.a,r=0;r<700;++r){w.r=v.j(0.03+k.an()*0.07).gp(0)
q=k.an()
p=k.an()
o=k.an()
n=w.K()
s.drawCircle(q*u,p*t,0.4+o*1.4,n)
n.delete()}for(v=x.O,r=0;r<5;++r){q=k.an()*u
p=k.an()*t
m=50+k.an()*90
w.sar(new B.c_(A.A,0.5,A.x,l,0,B.a([A.Wj.j(0.13),A.K],v),l,l).aA(0,B.bV(new B.x(q,p),m)))
n=w.K()
s.drawCircle(q,p,m,n)
n.delete()}w.sar(l)},
av(d){return!1}}
C.bqI.prototype={
a6(d,e){var w,v,u=null,t=e.a,s=B.h2(u,u,u,u,B.d0(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a4,A.cb,u,A.dR,A.c7)
s.eO()
w=d.a
J.bx(w.save())
w.translate(t/2,e.b*0.52)
d.jp(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a6(d,new B.x(-v/2,-t.gbf(t)/2))
w.restore()},
av(d){return!d.b.A(0,this.b)}}
C.VC.prototype={
U(){return new C.aDH()}}
C.aDH.prototype={
a_(){var w=this
w.a1()
B.fsT(w.a.c,null).bH(new C.ehT(),x.g7).bH(new C.ehU(w),x.a)
w.a.toString},
gaN0(){var w=D.ave[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gax2(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaN0()
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
ZP(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ZP=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.ehG(r))
t=4
q=r.gax2()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.W()
n=new B.qk()
m=B.B7(n,null)
i=B.N()
i.Q=A.fZ
m.op(g,q,new B.a9(0,0,0+p,0+o),i)
w=7
return B.b(n.oq().zj(J.h2Q(p),J.h2Q(o)),$async$ZP)
case 7:l=e
w=8
return B.b(l.hu(A.h0),$async$ZP)
case 8:k=e
j=r.c
if(j!=null){j=B.a4(j,!1)
i=k
i.toString
j.O(J.eU(J.vq(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.ehH(r))
r.c.I(x.q).f.S(D.eZq)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ZP,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aI(s,s,s,s,A.l3,s,s,s,new C.ehN(d),s,s,s,s,s,s),p=x.p
q=B.ez(B.a([B.bK(!1,D.fBG,s,s,!0,s,s,t.y||r==null?s:t.gc7y(),s,s)],p),s,s,!0,!0,A.AW,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fFC,s,s,s,1,s,!0)
if(r==null)p=A.mg
else{w=B.E(new B.D(A.bP,B.au(new B.fK(t.gaN0(),B.cA(new C.ehO(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.il,B.j8(s,s,s,new B.y(D.ave[u].a,s,E.aQk,s,s,s,s,s,s,s,s,s),s,new C.ehP(t,u),t.e===u,s,s,s,s),s))
p=B.w(B.a([w,B.p(s,B.bl(!0,B.w(B.a([new B.a7(s,40,B.ct(v,s,s,s,s,A.aN,!1),s),B.B(B.a([D.bPF,B.E(B.l_(s,s,s,6,1,new C.ehQ(t),t.f),1),D.bPh],p),A.m,s,A.e,A.j,0,s,s),D.fz2,A.an,B.bK(!1,D.fyL,s,s,!0,s,s,new C.ehR(t,d),s,s)],p),A.m,s,A.e,A.Q,0,A.p),!0,!1,A.ae,!0,!1),A.f,D.X2,s,s,s,s,s,s,D.bu3,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.c6(q,A.AW,p,s,!1,!1,s,s)}}
C.bbl.prototype={
a6(d,e){var w
$.W()
w=B.N()
w.Q=A.ce
return d.op(this.b,this.c,new B.a9(0,0,0+e.a,0+e.b),w)},
av(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a_E.prototype={
U(){var w=$.aw(),v=x.A
return new C.aF3(new B.ar(A.as,w),new B.ar(new B.ba("NGMY",A.b3,A.aM),w),new B.cv(null,v),new B.cv(null,v),A.d.gH(D.a3z),"quote"+1000*Date.now(),B.a([],x.t),B.aY(x.S),A.L)}}
C.oz.prototype={}
C.aF3.prototype={
gaUZ(){var w,v,u=this
if(u.p1)w=new B.vI(1,u.p2,0.9,u.p3).lZ().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
a_(){var w=this
w.a1()
w.a.toString
w.p4=null
$.aV.x1$.push(new C.eR3(w))},
q(){var w=this.d,v=$.aw()
w.R$=v
w.P$=0
w=this.e
w.R$=v
w.P$=0
this.a2()},
Ys(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Ys=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.qV().jG(0,"assets/images/ngmy_logo.png"),$async$Ys)
case 7:q=e
p=J.eU(J.vq(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bCi(new B.pN(p,1),o),$async$Ys)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.ePW(r,p))
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
return B.i($async$Ys,v)},
PQ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PQ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hR().kT(92,1800,A.eG),$async$PQ)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fe(),$async$PQ)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bCi(new B.pN(p,1),n),$async$PQ)
case 9:if(r.c==null){w=1
break}r.m(new C.eQj(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.ab(l)
n=r.c
if(n!=null)n.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d("Could not open that picture. "+B.u(o),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$PQ,v)},
b2H(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aB=w.aI=w.aE=w.aw=w.Z=w.b8=w.bi=w.y2=0
w.b0=null
w.b_=0.25
w.bb=null
w.bJ=0.5
w.aG=1
w.c6=w.bB=w.bh=0
w.cJ=w.c4=!1},
aWC(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bz0(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.dfi)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bz0(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bz0(C.fYI(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bz0(C.fYI(1-a0*0.5,n,n,n),w)}return a1?C.bz0(C.fYI(-1,255,255,255),w):w},
aAK(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).l1(0,this.d.a.a),t=B.C(u,B.a6(u).k("J.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.zc(u,v,w)
this.dx.pe(new C.eQt(t),!0)
return t},
b5c(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aAK()
w=C.i4X(e.d.a.a,e.db)
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
return C.i1r(d,k,v,a0,j,e.gaUZ(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cuE(){return this.b5c(null)},
D9(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$D9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aV.gmB(),$async$D9)
case 3:w=4
return B.b(B.bM(A.eL,null,x.H),$async$D9)
case 4:w=5
return B.b($.aV.gmB(),$async$D9)
case 5:s=$.aV.aj$.x.h(0,t.r)
r=s==null?null:s.gba()
if(!(r instanceof B.pY)){u=null
w=1
break}w=7
return B.b(r.m_(1080/r.gY(0).a),$async$D9)
case 7:w=6
return B.b(e.hu(A.h0),$async$D9)
case 6:q=e
u=q==null?null:J.eU(A.dC.gaP(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$D9,v)},
aa5(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aa5=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.ePF(q))
t=4
w=7
return B.b(q.D9(),$async$aa5)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cJ.gct().aK(p)
n=C.BJ(null,null,null,null,D.ob,6,!1,null,null,null,null,null,C.cB(),null,!1,null,"NGMY Quote",null,null,B.a([q.b5c(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a4(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.ab(j)
l=q.c
if(l!=null)l.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d(B.u(m),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ePG(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aa5,v)},
Ar(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Ar=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.ePD(q))
t=4
w=7
return B.b($.aV.gmB(),$async$Ar)
case 7:w=8
return B.b(B.bM(A.n7,null,x.H),$async$Ar)
case 8:w=9
return B.b($.aV.gmB(),$async$Ar)
case 9:k=$.aV.aj$.x.h(0,q.f)
p=k==null?null:k.gba()
if(!(p instanceof B.pY))throw B.V("The picture is not ready yet.")
w=10
return B.b(p.m_(1080/p.gY(0).a),$async$Ar)
case 10:o=e
w=11
return B.b(o.hu(A.h0),$async$Ar)
case 11:n=e
if(n==null)throw B.V("Could not make the picture.")
w=12
return B.b(A6.ag9(J.eU(A.dC.gaP(n)),"ngmy_quote.png","image/png"),$async$Ar)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.I(x.q).f
k.S(B.b2(null,null,null,null,null,A.r,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
k=q.c
if(k!=null)k.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d(B.u(l),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ePE(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ar,v)},
chx(){var w=this.p4
w.toString
return B.cA(new C.eQc(this,w))},
aZi(d,e){var w=null
return B.br(w,w,w,w,w,D.f8O,w,w,!0,new B.b3(4,B.n(16),P.v5),w,w,w,w,w,D.to,!0,w,w,w,w,new B.b3(4,B.n(16),D.aZM),w,w,w,w,w,w,w,w,A1.DB,e,w,w,w,w,w,w,w,D.fe6,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xR(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b4,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aR6,w,w,w))
return new B.D(H.ahn,B.B(u,A.m,w,A.e,A.j,0,w,w),w)},
aZh(d,e){var w=null,v=B.n(18),u=B.I(A.bE,A.q,1)
return B.p(w,B.aF(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.jL),A.f,w,w,new B.o(D.to,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vB(d){return this.aZh(d,A.bC)},
oa(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.ue:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.n(30)
u=B.I(f?A.K:A.bE,A.q,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.k0,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.k0,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aB(r,B.de(r,B.B(s,A.m,r,A.e,A.Q,0,r,r),r,r,A.bb,new B.o(w,r,u,v,r,p,A.n),A.hw,r,r,r,A.Fs,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a7)},
afV(d,e,f){return this.oa(d,null,e,f)},
ax6(d,e,f,g,h,i,j){var w=null,v=B.n(12),u=g?A.b4.j(0.28):A.c.j(0.05),t=g?A.eC:A.bE,s=x.p
v=B.a([B.de(w,d,w,w,A.bb,new B.o(u,w,B.I(t,A.q,g?2:1),v,w,w,A.n),A.hw,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aA
A.d.v(v,B.a([A.au,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aB(w,new B.a7(j,w,B.w(v,A.m,w,A.e,A.Q,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a7)},
aZl(d,e,f,g,h,i){return this.ax6(d,e,f,g,h,5,i)},
km(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,D.f5N,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aB(u,D.ebK,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eQp(this,h,i),u,u,u,u,u,u,!1,A.a7))
w=A.c.j(0.08)
v=B.n(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aQd,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.Zv,u,u,u))
s=B.B(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.auX(w).cIT(A.b4,A.bE,A.b4.j(0.2),A.c,D.ePG,4)
return new B.D(A.xL,B.w(B.a([s,B.a9P(B.l_(u,u,u,g,f,new C.eQq(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
ahW(d,e,f,g,h,i){return this.km(d,e,f,g,h,null,i)},
aim(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.L)(f),++v){u=f[v]
t=u==null
s=t?A.dB:B.b0(u)
r=d==u
q=r?A.c:A.b2
p=new B.az(q,r?3:1,A.q,-1)
t=t?D.bIH:o
n.push(B.aB(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bO(p,p,p,p),o,o,o,A.a5),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eQs(this,e,u),o,o,o,o,o,o,!1,A.a7))}return B.bZ(A.bD,n,A.br,10,10)},
bKy(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a3z
else{v=x.a8
w=B.C(new B.a_(D.a3z,new C.ePv(o),v),v.k("J.E"))}v=B.aM(n,A.U,!1,n,!0,A.r,n,B.aN(),o.d,n,n,n,n,n,2,o.aZi("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.ePw(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.a8q,!0,A.a4,n,A.am,n,n,n,n)
u=B.aM(n,A.U,!1,n,!0,A.r,n,B.aN(),o.e,n,n,n,n,n,2,o.aZi("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.ePx(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.dg,!0,A.a4,n,A.am,n,n,n,n)
t=o.xR("DESIGNS",A.tY)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cRa[q]
r.push(new B.D(A.il,o.afV(p,o.x===p,new C.ePy(o,p)),n))}return B.w(B.a([v,A.R,u,t,B.cc(B.B(r,A.m,n,A.e,A.j,0,n,n),A.r,n,A.y,n,n,n,n,A.aN),A.ac,new B.a7(n,118,B.hL(n,new C.ePz(o,w),w.length,n,n,A.aN,new C.ePA(),!1),n),A.N,o.aZh(B.w(B.a([B.iG(A.b4,n,n,A.ae,!0,new C.ePB(o),n,D.fq9,n,D.fmt,o.k3),B.iG(A.b4,n,n,A.ae,!0,new C.ePC(o),n,n,n,D.fjJ,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.ai_)],s),A.F,n,A.e,A.j,0,A.p)},
cDj(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aAK()
if(a7.length===0)return a5.vB(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.Jq,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.L)(a7),++s){r=a7[s]
v.push(t)
q=B.af('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.ap(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gak(v)+1
u=a5.dx
m=B.C(u,B.a6(u).k("cq.E"))
A.d.fp(m)
l=m.length!==0&&A.d.d8(m,new C.eQT(a5,m))?a5.db[A.d.gH(m)]:a6
k=new C.eR_(a5)
j=new C.eR1()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.Jq,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aR(11,11)
f=u.t(0,h)?A.b4.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.eC:A.bE
d=new B.az(e,u.t(0,h)?2:1,A.q,-1)
e=a7[h].b
a0=e.index
e=A.a.ap(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aK(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a6
o.push(B.aB(a6,B.p(a6,new B.y(e,a6,new B.G(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bO(d,d,d,d),new B.bo(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.MN,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eQU(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a7))}o=a5.vB(B.bZ(A.bD,o,A.rY,6,6))
i=B.a([a5.oa("All words",L.amg,!1,new C.eQV(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.afV("Sentence "+a3,!1,new C.eQW(a5,a7,v,a2)))
a2=a3}}i.push(a5.afV("Clear picks",!1,new C.eQX(a5)))
i=B.bZ(A.bD,i,A.br,8,8)
g=a5.xR("SIZE OF THE PICKED WORDS",D.alJ)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dl4[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eQY(e,k)
f.push(a5.afV(a0.b,l===a4,e))}return B.w(B.a([q,A.R,o,A.R,i,g,B.bZ(A.bD,f,A.br,8,8),A.R,a5.oa("Make every word normal",A.l0,!1,new C.eQZ(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cyq(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.bzo,B.d(A.d.fZ(D.awT,new C.eQC(q)).b,p,p,p,p,p,p,D.f7f,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cA(new C.eQD(q)),l=q.xR("HIGHLIGHT BEHIND THE WORDS",A.a0p),k=q.p1?-1:q.k4
k=q.aim(k,new C.eQE(q),D.d0H)
w=q.p1
v=w?A.c:A.b2
n=B.a([n,A.R,m,l,B.bZ(A.bD,B.a([k,B.aB(p,B.p(p,D.bLG,A.f,p,p,new B.o(p,p,B.I(v,A.q,w?3:1),p,p,D.f12,A.a5),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eQH(q),p,p,p,p,p,p,!1,A.a7)],o),A.rY,10,10),A.an,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.Jq,p,p,p)],o)
if(q.gaUZ()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ahW("Colour",l,0,360,new C.eQI(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ahW("Shade",k,0.15,0.9,new C.eQJ(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.km("Strength",l,0.15,1,new C.eQK(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.R,q.vB(B.w(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xR("LOOK",A.yy))
m=B.a([q.oa("Bold",I.alH,q.fy,new C.eQL(q)),q.oa("Italic",I.alI,q.go,new C.eQM(q))],o)
for(u=0;u<3;++u){l={}
k=D.cSl[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.ue:p
w=w?p:A.c.j(0.07)
s=new B.aR(14,14)
r=new B.az(q.id===l.a?A.K:A.bE,1,A.q,-1)
m.push(B.aB(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bO(r,r,r,r),new B.bo(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eQN(l,q),p,p,p,p,p,p,!1,A.a7))}n.push(B.bZ(A.bD,m,A.rY,8,8))
n.push(q.xR("COLOUR",A.nh))
n.push(q.aim(q.fx,new C.eQO(q),D.dbU))
n.push(A.an)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.Jq,p,p,p))
n.push(q.xR("SIZE AND PLACE",A.Gq))
m=q.fr
m=q.km("Text size",m,0.5,1.6,new C.eQF(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vB(B.w(B.a([m,q.km("Up / down",l,0.12,0.5,new C.eQG(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.w(n,A.F,p,A.e,A.j,0,A.p)},
chy(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.n(22)
v=B.I(A.b4.j(0.6),A.q,1.6)
u=B.a([A.b4.j(0.18),A.bA.j(0.12)],x.O)
return B.aB(p,B.p(p,B.w(B.a([B.p(p,D.bR6,A.f,p,p,D.b1K,p,62,p,p,p,p,p,62),A.aB,D.fnH,A.an,D.fsl],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.to,p,v,w,p,new B.a8(A.a3,A.a8,A.x,u,p,p),A.n),p,p,p,p,D.bve,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaZk(),p,p,p,p,p,p,!1,A.a7)}w=x.p
v=B.B(B.a([B.bw(B.n(12),new B.a7(46,62,B.fO(o,A.A,120,p,A.ce,A.bU,!1,p,!1,p,p),p),A.aq),A.bc,B.E(B.w(B.a([D.fne,A.N,B.bZ(A.bD,B.a([q.oa("Change",A.k8,!1,q.gaZk()),q.oa("Remove",A.ef,!1,new C.eQg(q))],w),A.br,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.d8d[t]
u.push(q.oa(s.b,s.a,q.at===t,new C.eQh(q,t)))}u=B.bZ(A.bD,u,A.br,8,8)
r=q.at
A:{if(0===r){s=q.c0q(o)
break A}if(1===r){s=q.c_p()
break A}if(2===r){s=q.bGr()
break A}if(3===r){s=q.bMM()
break A}s=q.bIw()
break A}return B.w(B.a([v,A.ac,u,A.aB,s,A.R,new B.bI(A.a3,p,p,q.oa("Reset the whole picture",A.l0,!1,new C.eQi(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
c0q(d){var w=this,v=x.p
return B.w(B.a([B.bZ(A.bD,B.a([w.oa("Auto enhance",E.a02,!1,new C.eQ8(w)),w.oa("Make words easy to read",A.oY,!1,new C.eQ9(w))],v),A.br,8,8),A.aB,B.cA(new C.eQa(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
c_p(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.km("Exposure",n,-1.5,1.5,new C.ePN(o),0,A.k.ab(n,1))
w=o.RG
w=o.km("Brightness",w,-0.5,0.5,new C.ePO(o),0,""+A.k.V(w*100))
v=o.rx
v=o.km("Contrast",v,0.4,2,new C.ePP(o),1,""+A.k.V(v*100))
u=o.xr
u=o.km("Fade",u,0,1,new C.ePQ(o),0,""+A.k.V(u*100))
t=o.aE
t=o.km("Spotlight",t,0,1,new C.ePR(o),0,""+A.k.V(t*100))
s=o.Z
s=o.km("Darken",s,0,0.85,new C.ePS(o),0,""+A.k.V(s*100))
r=o.b8
r=o.km("Vignette",r,0,0.9,new C.ePT(o),0,""+A.k.V(r*100))
q=o.aB
q=o.km("Shade behind words",q,0,0.85,new C.ePU(o),0,""+A.k.V(q*100))
p=o.aI
return o.vB(B.w(B.a([n,w,v,u,t,s,r,q,o.km("Shade top & bottom",p,0,0.85,new C.ePV(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bGr(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.km("Colour strength",q,0,2.2,new C.eP8(s),1,""+A.k.V(q*100))
w=s.to
w=s.km("Warmth",w,-1,1,new C.eP9(s),0,""+A.k.V(w*100))
v=s.x1
v=s.km("Tint",v,-1,1,new C.ePa(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vB(B.w(B.a([q,w,v,s.km("Shift colours",u,-180,180,new C.ePb(s),0,""+A.k.V(u)+"\xb0"),new B.bI(A.a3,r,r,s.oa("Negative",D.bGM,s.y1,new C.ePc(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xR("COLOUR WASH",A.NK)
w=s.b0
q=B.a([null],x.Z)
A.d.v(q,D.avD)
t=B.a([u,v,s.aim(w,new C.ePd(s),q),A.N],t)
if(s.b0!=null){q=s.b_
t.push(s.vB(s.ahW("Wash strength",q,0,0.9,new C.ePe(s),""+A.k.V(q*100))))}return B.w(t,A.F,r,A.e,A.j,0,A.p)},
bMM(){var w,v,u,t,s,r=this,q=r.y2
q=r.km("Blur",q,0,24,new C.ePH(r),0,A.o.u(A.k.V(q)))
w=r.bi
w=r.km("Soft focus",w,0,1,new C.ePI(r),0,""+A.k.V(w*100))
v=r.aw
u=x.p
v=r.vB(B.w(B.a([q,w,r.km("Film grain",v,0,1,new C.ePJ(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xR("LIGHT LEAK",D.bGu)
q=r.bb
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.dc(D.avD,0,B.dG(8,"count",s),s))
u=B.a([v,w,r.aim(q,new C.ePK(r),t),A.N],u)
if(r.bb!=null){q=r.bJ
u.push(r.vB(r.ahW("Leak strength",q,0,1,new C.ePL(r),""+A.k.V(q*100))))}return B.w(u,A.F,null,A.e,A.j,0,A.p)},
bIw(){var w,v,u,t,s=this,r=s.aG
r=s.km("Zoom",r,1,3,new C.ePi(s),1,""+A.k.V(r*100)+"%")
w=s.bh
w=s.km("Left / right",w,-1,1,new C.ePj(s),0,""+A.k.V(w*100))
v=s.bB
v=s.km("Up / down",v,-1,1,new C.ePk(s),0,""+A.k.V(v*100))
u=s.c6
t=x.p
return B.w(B.a([s.vB(B.w(B.a([r,w,v,s.km("Turn",u,-180,180,new C.ePl(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.R,B.bZ(A.bD,B.a([s.oa("Turn 90\xb0",H.amN,!1,new C.ePm(s)),s.oa("Flip sideways",A.Gd,s.c4,new C.ePn(s)),s.oa("Flip upside down",A.Gd,s.cJ,new C.ePo(s))],t),A.br,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
c36(){var w=null,v=B.n(22),u=B.I(A.bE,A.q,1)
return B.p(w,B.w(B.a([D.ePS,A.R,D.fpb,A.aB,B.aB(w,B.p(A.A,D.eQ4,A.f,w,w,new B.o(w,w,w,B.n(16),w,G.ue,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eQb(this),w,w,w,w,w,w,!1,A.a7)],x.p),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.to,w,u,v,w,w,A.n),w,w,w,w,A.bP,w,w,w)},
c0e(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eQ3(p),m=x.p,l=B.B(B.a([D.bzu,p.oa("Reset",A.l0,!1,new C.eQ_(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.Jq,o,o,o),j=p.xR("SHAPE",A.amJ),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Cj[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aZl(n.$2(t,p.cy),62,u.b,s===t,new C.eQ0(v,p),62))}}i=B.bZ(A.bD,i,A.br,8,8)
v=p.xR("RING",A.ra)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Ce[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aZl(n.$2(p.cx,t),62,r.b,q===t,new C.eQ1(s,p),62))}u=B.bZ(A.bD,u,A.br,8,8)
s=p.CW
return B.w(B.a([l,A.au,k,j,i,v,u,A.ac,p.vB(p.km("Size",s,0.12,0.4,new C.eQ2(p),0.22,""+A.k.V(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
b1f(d){return new B.a7(null,d,new B.fK(0.5625,B.cA(new C.eQm(this)),null),null)},
cxH(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.n(18),n=B.I(A.bE,A.q,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.ue:q
t=new B.aR(14,14)
s=D.dal[w]
r=v?A.c:A.aA
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aA
l.push(new B.bB(1,A.bf,B.aB(A.ci,B.de(q,B.w(B.a([r,A.cR,new B.qn(A.dZ,A.A,A.f,new B.y(s.b,q,new B.G(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.Q,0,A.p),q,q,A.bb,new B.o(q,q,q,new B.bo(t,t,t,t),q,u,A.n),D.bqZ,q,q,q,A.hx,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eQv(this,w),q,q,q,q,q,q,!1,A.a7),q))}return B.p(q,B.B(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bt2,A.lU,q,q,q)},
aPK(){var w,v,u=this,t=null,s=u.cxH(),r=u.as
A:{if(0===r){w=u.bKy()
break A}if(1===r){w=u.cDj()
break A}if(2===r){w=u.cyq()
break A}if(3===r){w=u.chy()
break A}if(4===r){w=u.c0e()
break A}w=u.c36()
break A}v=x.p
return B.bw(A.t3,B.el(B.w(B.a([s,B.E(B.ct(B.a([w],v),t,D.bu4,t,t,A.ah,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.X2,!0),A.aq)},
aLZ(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc7Z(),p=B.n(16)
q=B.E(B.aB(r,B.p(r,D.eQf,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.b2,A.q,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a7),1)
p=s.Q?r:s.gbMk()
w=B.n(16)
v=B.a([new B.ac(0,A.G,A.bA.j(0.35),A.cz,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eVH)
else t.push(D.bKL)
t.push(A.ab)
t.push(D.bBh)
return B.p(r,B.B(B.a([q,A.at,B.E(B.aB(r,B.p(r,B.B(t,A.m,r,A.b7,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.ue,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a7),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.b0R,r,r,r,r,G.ahO,r,r,r)},
aZj(){var w=null
return new B.D(T.Zq,B.B(B.a([B.aI(w,w,w,w,A.mz,w,w,w,new C.ePM(this),w,w,w,w,w,w),D.fEz,A.b5,D.bTp],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c6(w,A.AW,B.bl(!0,B.cA(new C.eR2(this)),!0,!1,A.ae,!0,!0),w,!1,!1,w,w)}}
C.beS.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.f5()
m.dU(7)
w=e.a
v=e.b
u=A.k.V(w*v/55)
$.W()
t=B.N()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.N()
r.r=A.w.j(0.2*s).gp(0)
for(s=d.a,q=0;q<u;++q){p=m.an()*w
o=m.an()*v
n=((q&1)===0?t:r).K()
s.drawRect(B.bY(new B.a9(p,o,p+1.1,o+1.1)),n)
n.delete()}},
av(d){return d.b!==this.b}}
C.rv.prototype={
a3(){return"NgmyQuoteDeco."+this.b}}
C.m5.prototype={}
C.zC.prototype={
ag(){var w=this
return B.F(["at",w.a.a5().ac(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nK.prototype={}
C.w1.prototype={
a3(){return"NgmySlidesAiExtra."+this.b}}
C.a7N.prototype={}
C.aqX.prototype={}
C.a0a.prototype={
U(){return new C.aGZ(new B.ar(A.as,$.aw()),B.jS(!0,null,!0,!0,null,null,!1),D.dB6,B.a([],x.s),B.eC([D.I7],x.Q))}}
C.aGZ.prototype={
q(){var w=this.d
w.R$=$.aw()
w.P$=0
this.f.q()
this.a2()},
a08(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a08=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hR().C3(90,700,700,A.eG),$async$a08)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fe(),$async$a08)
case 8:p=e
if(r.c!=null)r.m(new C.eXg(r,p,q))
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
return B.i($async$a08,v)},
a0b(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a0b=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hR().aHa(78,n,1100,1100),$async$a0b)
case 7:q=e
if(J.cm(q)){w=1
break}p=B.bn(r.y,!0,x.N)
n=J.aW(q)
case 8:if(!n.C()){w=9
break}o=n.gT(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fe(),$async$a0b)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.cc(l,".png"))k="image/png"
else k=A.a.cc(l,".webp")?"image/webp":"image/jpeg"
J.cd(p,"data:"+k+";base64,"+A.cJ.gct().aK(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.eXh(r,p))
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
return B.i($async$a0b,v)},
b3i(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fO(A.cF.aK(A.d.gak(d.split(","))),A.A,u,u,A.ce,A.bU,!0,u,!1,u,u)
return w}catch(v){}return D.bp8},
c0k(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cr_(C.fzH(w,this.b3i(d),f),g)},
acq(d,e,f,g,h){var w=null,v=new C.eXe(f,e),u=new C.eXf(f,e),t=A.c.j(0.05),s=B.n(12),r=B.n(12),q=B.n(12),p=h==null,o=B.I(p?A.bE:A.b4.j(0.6),A.q,1)
if(p)p=new B.a7(34,30,new B.an(A.V,w,A.aa,A.f,B.a([B.au(B.X(f?A.BV:A.Nz,A.c_,w,w,w,26),w,w,w),D.ehs],x.p),w),w)
else p=this.c0k(g,v.$1(h),u.$1(h),34)
return B.aF(!1,A.a1,!0,s,B.aL(!1,r,!0,B.p(w,B.B(B.a([B.E(B.au(p,w,w,w),1),D.bKs],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mt,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eXd(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ag)},
aWI(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bw(B.n(8),B.fO(A.cF.aK(A.d.gak(h.split(","))),A.A,p,p,A.ce,A.bU,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.n(14)
t=B.n(14)
s=B.n(14)
r=B.I(n?A.bE:A.bd.j(0.6),A.q,1)
q=o
n=q==null?B.X(d,A.ek,p,p,p,20):q
n=B.a([n,A.ab,B.E(B.d(e,p,1,A.a2,p,p,p,A.Jv,p,p,p),1)],x.p)
if(f!=null)n.push(B.aB(p,D.a1k,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a7))
return B.aF(!1,A.a1,!0,u,B.aL(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.kW,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ag)},
a8y(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a8y=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fD7(),$async$a8y)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.eWX(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ab(n)
if(r.c!=null)r.m(new C.eWY(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8y,v)},
aee(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aee=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.eX_(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.eX0(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.eX1(r))
t=4
m=r.ch
k=r.CW
j=r.x
i=r.y
p=B.a([],x.aD)
h=r.e
if((h==null?null:h.b)!=null){h=h.b
h.toString
J.cd(p,h)}w=7
return B.b(C.fyp(q,r.cx,j,new C.b0E(r.z,r.Q,r.as,r.at),new C.eX2(r),i,m,p,k),$async$aee)
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
if(r.c!=null)r.m(new C.eX3(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aee,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aH(d,A.eI,g).w
g=B.aH(d,A.bW,g).w
w=B.au(B.p(h,h,A.f,h,h,new B.o(A.b2,h,h,B.n(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.au(B.aB(h,B.p(h,D.bNG,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.q,2),h,B.a([new B.ac(2,A.G,A.bd.j(0.5),A.J,24)],v),D.bXt,A.a5),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eXu(i),h,h,h,h,h,h,!1,A.a7),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aI(h,h,h,h,D.a1k,h,h,h,i.ax?h:new C.eXv(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbBn()
v=B.a([new B.ac(0,A.G,A.b4.j(0.45),A.J,10)],v)
s.push(B.hw(B.aF(!1,A.a1,!0,h,B.aL(!1,h,!0,B.p(h,B.X(i.e==null?A.vO:A.hA,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.w4,A.a5),h,40,h,h,h,h,h,40),A.cK,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cK,h,h,A.ag),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.U,!1,h,!0,A.r,h,B.aN(),i.d,h,h,h,h,h,2,B.br(h,h,h,h,h,h,h,h,!0,new B.b3(4,B.n(16),new B.az(A.c.j(0.1),1,A.q,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b3(4,B.n(16),D.aZj),h,h,h,h,h,h,h,h,A0.Jc,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.il,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.aj,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,h,D.aQy,!0,A.a4,h,A.am,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eXw(i)
s=i.aWI(A.lt,q,r,i.gci_(),s)
r=i.z
r=B.E(i.acq(new C.eXy(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.w(B.a([s,A.an,B.B(B.a([r,A.bp,B.E(i.acq(new C.eXz(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gH(s)
p=i.y.length===0?h:new C.eXA(i)
s=i.aWI(A.tT,r,p,i.gci7(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gH(o)
p=B.E(i.acq(new C.eXB(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gH(n)
o=B.a([w,A.aB,D.ftA,A.au,D.fwr,A.bw,u,A.N,D.fuR,A.aB,v,A.bw,B.B(B.a([q,A.at,B.E(B.w(B.a([s,A.an,B.B(B.a([p,A.bp,B.E(i.acq(new C.eXC(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.an,D.fyb],t)
w=i.w.a
if(w.length!==0){v=B.n(999)
u=B.I(D.bhi,A.q,1)
w=C.agH(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.R,new B.bI(A.a3,h,h,B.p(h,B.B(B.a([D.bOL,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fcP,h,h,h),B.aL(!1,h,!0,D.ec_,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eXD(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.Q,0,h,h),A.f,h,h,new B.o(D.bag,h,u,v,h,h,A.n),h,h,h,h,D.bsJ,h,h,h),h)],t))}o.push(A.bw)
o.push(D.fkq)
o.push(A.N)
w=B.a([],t)
for(m=0;m<6;++m){l=D.d2O[m]
v=i.ch===l?A.b4:A.c.j(0.06)
u=i.ch===l
k=new B.az(u?A.aA:A.bE,1,A.q,-1)
u=u?A.u:A.O
w.push(new B.bB(1,A.bf,new B.D(A.jo,B.aB(h,B.de(A.A,new B.y(""+l,h,new B.G(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.bb,new B.o(v,h,new B.bO(k,k,k,k),h,h,h,A.a5),A.eJ,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eXE(i,l),h,h,h,h,h,h,!1,A.a7),h),h))}o.push(B.B(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.bw)
o.push(D.fCP)
o.push(A.N)
o.push(B.cA(new C.eXF(i)))
o.push(A.bw)
o.push(D.frI)
o.push(A.N)
w=B.a([i.b66("auto","Let AI choose",A.e0,A.Qg)],t)
for(v=x.O,m=0;m<11;++m){j=D.wb[m]
u=j.d
w.push(i.b66(j.a,j.b,j.c,B.a([B.b0(A.d.gH(u).a),B.b0(A.d.gH(u).b)],v)))}o.push(B.bZ(A.bD,w,A.br,8,8))
o.push(A.aQ)
w=A.c.j(0.04)
v=B.n(16)
u=B.I(i.r?A.bd.j(0.5):A.bE,A.q,1)
o.push(B.p(h,B.iG(h,A.bd,h,h,h,new C.eXx(i),D.bJU,D.fC3,h,D.fmI,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aPN,h,h,h)],t))
o.push(A.bw)
w=i.ax?h:i.gc82()
v=B.fo(h,h,A.b4,A.b4.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.n(18),A.W),h,h,h,h,h)
u=i.ax
t=u?D.eVx:A.GF
o.push(new B.a7(h,54,B.lw(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.on,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.p(h,B.bl(!0,B.cc(B.w(o,A.ai,h,A.e,A.j,0,A.p),A.r,h,A.y,h,A.vE,h,h,A.ah),!0,!1,A.ae,!0,!1),A.f,h,new B.aX(0,680,0,g.a.b*0.92),D.abr,h,h,h,h,h,h,h,h),h)},
bNX(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.eX4(this,p,d)
if(d===D.CU)return new C.aDz(p,o,q)
w=B.n(16)
v=p?E.w4:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.aA:A.bE,A.q,1)
s=B.X(p?A.e9:C.hFu(d),A.c,q,q,q,20)
r=C.hFv(d)
return B.aB(q,B.de(q,B.w(B.a([s,A.au,B.eM(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.dZ)],x.p),A.m,q,A.b7,A.j,0,A.p),q,q,A.bb,new B.o(u,q,t,w,q,v,A.n),A.hw,q,64,q,A.hy,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a7)},
b66(d,e,f,g){var w,v=null,u=this.CW===d,t=B.n(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bE
r=B.I(r,A.q,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a8(A.a3,A.a8,A.x,g,v,v),A.a5),v,26,v,v,v,v,v,26)
return B.aB(v,B.de(v,B.B(B.a([w,M.J3,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a6,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v,v,A.bb,new B.o(s,v,r,t,v,v,A.n),A.eJ,v,v,v,M.aj5,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eXj(this,d),v,v,v,v,v,v,!1,A.a7)}}
C.a09.prototype={
U(){return new C.aGY(new B.ar(A.as,$.aw()))}}
C.aGY.prototype={
q(){var w=this.d
w.R$=$.aw()
w.P$=0
this.a2()},
aef(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$aef=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.eWQ(r))
w=1
break}B.f_()
r.m(new C.eWR(r))
t=4
q=C.i5Q(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.i5A(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.eWS(r,q))
w=1
break}k=r.c
if(k!=null)B.a4(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fYn()
f=$.CF.h(0,k.a)
o=f==null||J.cm(f)?null:J.fq(f)
if(o==null){r.m(new C.eWT(r))
w=1
break}n=C.i5y(o,r.a.c)
C.i5u(r.a.c.a)
$.fXD=!0
k=r.c
if(k!=null)B.a4(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.h0c(j)
h=C.h0d(r.a.c)
e=C.h0e(r.a.c)
w=7
return B.b(C.bBc(k,r.a.c.a,j,h,new C.eWU(r),i,e,a0),$async$aef)
case 7:m=a3
k=r.c
if(k!=null)B.a4(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ab(a1)
if(r.c!=null)r.m(new C.eWV(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aef,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aH(d,A.eI,i).w
i=B.aH(d,A.bW,i).w
w=B.au(B.p(j,j,A.f,j,j,new B.o(A.b2,j,j,B.n(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.an1,A.f,j,j,D.b0w,j,34,j,j,j,j,j,34),A.at,D.bA5],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Aq.a86,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.U,!0,j,!0,A.r,j,B.aN(),k.d,j,j,j,j,j,2,B.br(j,j,j,j,j,j,j,j,!0,new B.b3(4,B.n(16),new B.az(A.c.j(0.1),1,A.q,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b3(4,B.n(16),Ar.aaV),j,j,j,j,j,j,j,j,A0.Jc,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.aj,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,D.aQy,!0,A.a4,j,A.am,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.d_2[q]
o=A.c.j(0.06)
n=k.e?j:new C.eWW(k,p)
r.push(B.mH(j,o,new B.y(p,j,Aw.TF,j,j,j,j,j,j,j,j,j),j,n,j,j,P.v5,j))}w=B.a([w,A.aB,u,A.an,t,A.aB,s,A.R,B.bZ(A.bD,r,A.br,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aPN,j,j,j)],v))
w.push(A.aQ)
u=k.e
t=u?j:k.gc83()
s=B.n(18)
r=B.n(18)
u=u?B.a([A.bd.j(0.5),A.er.j(0.5)],x.O):D.cxY
o=B.a([new B.ac(0,A.G,A.bd.j(0.35),A.cz,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.ebW:D.bOk
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a5),j,30,j,j,j,j,j,30)
w.push(B.aF(!1,A.a1,!0,j,B.aL(!1,s,!0,B.eB(B.B(B.a([n,A.at,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hX,j,j,j)],v),A.m,j,A.b7,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a8(A.a3,A.a8,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ag))
return new B.D(new B.Q(0,0,0,h.f.d),B.p(j,B.bl(!0,B.cc(B.w(w,A.ai,j,A.e,A.j,0,A.p),A.r,j,A.y,j,A.vE,j,j,A.ah),!0,!1,A.ae,!0,!1),A.f,j,new B.aX(0,680,0,i.a.b*0.85),D.abr,j,j,j,j,j,j,j,j),j)}}
C.b0E.prototype={}
C.aDz.prototype={
U(){return new C.bjp(null,null)}}
C.bjp.prototype={
gax7(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.pT,null,1,null,v)
w.cL(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gax7().q()
this.bvi()},
B(d){var w=null,v=this.a.d
return B.aB(w,B.c7(this.gax7(),new C.eed(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a7)}}
C.bh2.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.d50[s]
p=q.a*v
q=q.b*u
$.W()
o=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
o.r=D.xA.j(0.25+r*0.6).gp(0)
n=o.K()
t.drawCircle(p,q,1+r*1.4,n)
n.delete()
if(r>0.85){m=4*(r-0.85)/0.15
o.c=1
n=o.K()
t.drawLine.apply(t,[p-m,q,p+m,q+0,n])
n.delete()
n=o.K()
t.drawLine.apply(t,[p,q-m,p+0,q+m,n])
n.delete()}}},
av(d){return d.b!==this.b}}
C.aru.prototype={
a3(){return"NgmyTextCommand."+this.b}}
C.Zx.prototype={
U(){return new C.aB4()}}
C.aB4.prototype={
gaij(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.agU(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAc(){var w=this.e
return w===$?this.e=C.h0c(this.a.c).t(0,D.CU):w},
a8l(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a8l=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dj5(s))
u=3
r=A.d.fZ(D.wb,new C.dj6(s))
q=B.df(C.h0c(s.a.c),x.Q)
l=q
J.hx(l,D.CU)
p=l
if(s.gAc())J.cd(p,D.CU)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAc()?" with Luxury FX":""
i=s.a
h=i.d
i=C.h0d(i.c)
g=C.h0e(s.a.c)
w=6
return B.b(C.bBc(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a8l)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.agU(q,s.gaij())
f=q==null?null:q.b
n=f==null?s.gaij():f
if(!J.A(n,r.a)&&!s.gAc())throw B.V("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a4(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ab(d)
if(s.c!=null)s.m(new C.dj7(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a8l,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.c:A.M,k=m?A.aR:A.ak,j=m?A.M:A.c,i=B.n(28),h=B.I(m?A.bE:A.aL,A.q,1),g=x.p,f=B.E(B.w(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bz,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dja(d)
e=B.B(B.a([f,B.aI(n,n,n,n,B.X(A.cy,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.wb[w]
u=o.gaij()
t=o.f?n:new C.djb(o,v)
f.push(new C.brP(v,u===v.a,t,n))}f=B.m0(1.25,f,3,10,10,n,A.dT,!0)
u=B.n(18)
t=o.gAc()?D.c_e:n
if(o.gAc())s=n
else s=m?A.bm:A.bM
r=B.X(A.e0,o.gAc()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gAc()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.w(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gAc()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gAc()
f=B.a([f,A.aB,B.p(n,B.B(B.a([r,A.at,q,B.aaj(n,A.c,n,A.bL,!1,A.y,n,n,n,n,n,n,o.f?n:new C.djc(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,K.ahR,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.R,B.d(u,n,n,n,n,n,n,D.fd8,n,n,n)],g))
f=B.cc(B.w(f,A.F,n,A.e,A.j,0,A.p),A.r,n,A.y,n,A.FA,n,n,A.ah)
u=o.f?n:o.gbAm()
t=B.bm(A.K,n,n,n,n,n,A.ae,n,new B.b7(B.n(16),A.W),n,n,n)
s=B.n(16)
return B.bl(!0,B.p(n,B.w(B.a([new B.D(D.bvI,e,n),new B.dq(1,A.cm,f,n),new B.D(A.Fz,new B.a7(1/0,50,B.bG(B.eB(B.au(o.f?A.rM:D.fu3,n,n,n),n,new B.o(n,n,n,s,n,D.bYP,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.Q,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.tJ,n,n,n,n),!0,!1,A.ae,!0,!0)}}
C.brP.prototype={
B(d){var w=null,v=this.c,u=A.d.gH(v.d),t=B.n(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.q,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bI(A.le,w,w,B.X(v.c,A.ad,w,w,w,18),w),new B.bI(A.lF,w,w,B.d(v.b,w,w,w,w,w,w,D.fd6,w,w,w),w)],x.p)
if(q)v.push(D.aWX)
return B.aB(w,B.de(w,new B.an(A.V,w,A.aa,A.r,v,w),w,w,A.bb,new B.o(w,w,p,t,s,new B.a8(A.ay,A.aC,A.x,r,w,w),A.n),A.eJ,w,w,w,A.cp,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a7)}}
C.eea.prototype={
aEI(d,e,f){return e+"@"+A.a.aX(A.o.fV(f==null?this.a.c:f,16),8,"0").toUpperCase()},
wx(d,e){return this.aEI(0,e,null)}}
C.aLr.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.b0A.prototype={
B(d){var w,v,u=null,t=C.h_1(this.c)
if(t==null)w=D.bnF
else{w=B.aH(d,u,x.w).w.cIl(D.bsg,D.eUI)
v=this.d
w=B.ri(B.e2(B.anL(!1,t,!1,v,!1,390),!v,u),w)}return B.eM(A.A,new B.a7(416,870,new C.bkZ(w,u),u),A.f,A.du)}}
C.bkZ.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dh_[w]
u=new B.aR(3,3)
s.push(new B.cL(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bo(u,u,u,u),t,D.aoU,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dic[w]
u=new B.aR(3,3)
s.push(new B.cL(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bo(u,u,u,u),t,D.aoU,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bT(0,B.c0(t,new B.o(t,t,t,B.n(64),D.cPS,D.bXb,A.n),A.be),0,0,0))
s.push(B.bT(3,B.c0(t,new B.o(A.w,t,t,B.n(61),t,t,A.n),A.be),3,3,3))
s.push(B.bT(13,B.bw(B.n(51),B.el(this.c,A.w,!0),A.aq),13,13,13))
u=B.n(20)
s.push(B.ao(t,B.au(B.p(D.aX7,B.p(t,t,A.f,t,t,D.b0P,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bT(13,B.e2(B.bw(B.n(51),D.bpe,A.aq),!0,t),13,13,13))
s.push(B.ao(22,B.e2(B.au(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.n(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.V,t,A.aa,A.f,s,t)}}
C.lf.prototype={
pA(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cB(),f=C.cB(),e=m.r
f=C.eq(A.L,!1,e.l(),A.aD,"",k,42,A.bo,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bg,j,2,"Your Presentation Title",0,0,"",D.mF,D.cP,0.84,0.08,0.26)
w=C.cB()
v=m.w
w=C.eq(A.L,!1,v.l(),A.aD,"",k,20,A.bo,A.a6,"",0.12,w,l,"","",0,!1,"",0,D.bg,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.df,D.cP,0.76,0.12,0.56)
u=C.cB()
t=m.d
s=x.u
t=C.rw(i,l,0,0,B.a([f,w,C.eq(A.bh,!1,4279310375,A.aD,"",t.j(0.8).l(),24,A.bo,A.a6,"",0.006,u,l,"","",0,!1,"",0,D.fr,t.l(),3,"",0,0,"",D.cl,D.f5,0.3,0.35,0.72)],s),C.cB(),D.mE,"","","Welcome",D.df)
u=C.cB()
u=C.eq(A.bh,!1,e.l(),A.aD,"",k,34,A.bo,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bg,j,2,"Agenda",0,0,"",D.cl,D.cP,0.84,0.08,0.08)
w=C.cB()
w=C.rw(i,l,0,0,B.a([u,C.eq(A.bh,!0,v.l(),A.aD,"",k,22,A.bo,A.a6,"",0.6,w,l,"","",0,!1,"",0,D.bg,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.uu,D.cP,0.8,0.1,0.26)],s),C.cB(),D.mE,"","","Agenda",D.df)
u=C.cB()
u=C.eq(A.bh,!1,e.l(),A.aD,"",k,32,A.bo,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bg,j,2,"Main Idea",0,0,"",D.cl,D.cP,0.84,0.08,0.08)
f=C.cB()
f=C.rw(i,l,0,0,B.a([u,C.eq(A.bh,!0,v.l(),A.aD,"",k,21,A.bo,A.a6,"",0.62,f,l,"","",0,!1,"",0,D.bg,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cl,D.cP,0.8,0.1,0.26)],s),C.cB(),D.mE,"","","Key Point 1",D.df)
u=C.cB()
u=C.eq(A.bh,!1,e.l(),A.aD,"",k,30,A.bo,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bg,j,2,"Compare & Contrast",0,0,"",D.cl,D.cP,0.84,0.08,0.08)
r=C.cB()
r=C.eq(A.bh,!0,v.l(),A.aD,"",k,18,A.bo,A.a6,"",0.62,r,l,"","",0,!1,"",0,D.bg,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cl,D.cP,0.4,0.08,0.24)
q=C.cB()
q=C.rw(i,l,0,0,B.a([u,r,C.eq(A.bh,!0,v.l(),A.aD,"",k,18,A.bo,A.a6,"",0.62,q,l,"","",0,!1,"",0,D.bg,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cl,D.cP,0.4,0.52,0.24)],s),C.cB(),D.mE,"","","Key Point 2",D.df)
r=C.cB()
r=C.eq(A.L,!1,e.l(),A.aD,"",k,48,A.bo,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bg,j,2,h,0,0,"",D.df,D.cP,0.8,0.1,0.32)
e=C.cB()
p=C.BJ(l,l,l,l,D.CQ,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rw(i,l,0,0,B.a([r,C.eq(A.L,!1,v.l(),A.aD,"",k,22,A.bo,A.a6,"",0.1,e,l,"","",0,!1,"",0,D.bg,j,2,"Questions?",0,0,"",D.cl,D.cP,0.7,0.15,0.58)],s),C.cB(),D.mE,"","",h,D.df)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.L)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.ED.prototype={
bA(d){return this.e.$1(d)}}
C.et.prototype={}
C.j0.prototype={}
C.Eu.prototype={
gaKx(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.agH(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a3w(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Eu(v,u,t,d==null?w.d:d)},
FC(d){return this.a3w(null,d,null,null)},
aDs(d){return this.a3w(null,null,null,d)},
cIj(d,e){return this.a3w(d,e,null,null)},
bbh(d){return this.a3w(d,null,null,null)},
bbo(d){return this.a3w(null,null,d,null)}}
C.Nr.prototype={
U(){return new C.biO(new B.eI(0,$.aw()),null,null)}}
C.biO.prototype={
a_(){var w,v=this
v.a1()
w=v.wl(new C.dTA(v))
v.e!==$&&B.aP()
v.e=w
if(v.a.e)w.ia(0)
else v.d.sp(0,3.2)},
q(){var w=this.e
w===$&&B.c()
w.q()
w=this.d
w.R$=$.aw()
w.P$=0
this.buO()},
B(d){var w=C.agH(this.a.c.a)
if(w==null)w=A.d.gH(D.H_)
return B.cA(new C.dTz(this,w,C.hfe(this.a.c.d)))}}
C.bqn.prototype={
B(d){return B.nP(A.Vq,this.e,new C.eW3(this,A.k.E(this.d*0.35,1.6)-0.3))}}
C.bdZ.prototype={
a6(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aSm(d,e,v)
break
case"confetti":w.bGV(d,e,v)
break
case"crown":w.bIx(d,e,v)
break
case"aurora":w.bBr(d,e,v)
break
case"champagne":w.bEN(d,e,v)
break
case"diamonds":w.bKH(d,e,v)
break
case"starburst":w.cvj(d,e,v)
break
case"balloons":w.bBF(d,e,v)
break
case"galaxy":w.bPK(d,e,v)
break
case"redcarpet":w.cmh(d,e,v)
break
case"coins":w.bGj(d,e,v)
break
case"lanterns":w.bZV(d,e,v)
break
case"hearts":w.bXy(d,e,v)
break
case"petals":w.chp(d,e,v)
break
case"butterflies":w.bDL(d,e,v)
break
case"neon":w.c2R(d,e,v)
break
case"disco":w.bKS(d,e,v)
break
case"sunrise":w.cwY(d,e,v)
break
case"pearls":w.cgt(d,e,v)
break
case"snow":w.cv0(d,e,v)
break
case"laurel":w.c_0(d,e,v)
break
case"ribbons":w.coO(d,e,v)
break
case"kente":w.bZJ(d,e,v)
break
case"trophy":w.cAE(d,e,v)
break
case"shooting":w.csP(d,e,v)
break
case"bokeh":w.bC_(d,e,v)
break
case"orbits":w.ce6(d,e,v)
break
case"flowers":w.bP_(d,e,v)
break
case"music":w.c2z(d,e,v)
break
case"mandala":w.c10(d,e,v)
break
case"sparklers":w.cv7(d,e,v)
break
case"city":w.bFA(d,e,v)
break}},
rE(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.W()
v=B.N()
v.r=g.j(A.k.D(h,0,1)).gp(0)
v.a=A.ox
u=new B.aO(w.r,A.ao,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.F(new B.b5(w,s))
u.F(new B.cR(w,t,w+f,t))
u.F(new B.cR(w,t,w,t+f))
u.F(new B.cR(w,t,w-f,t))
u.F(new B.cR(w,t,w,s))
u.F(new B.bE())
d.aS(u,v)
d.af(e,f*0.18,v)},
lK(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cY(q,v)*2.5)+C.cY(q,u)*6.28)+1)/2
this.rE(d,new B.x(C.cY(q,t)*o,C.cY(q,s)*n),m*(0.006+0.014*C.cY(q,r))*(0.5+p),h,p*p)}},
aSm(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lK(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bL,A.aF],w),B.a([A.i0,A.bA],w),B.a([A.ez,A.aP],w),B.a([A.c,A.ax],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bm(k/2.8)
i=A.k.E(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cY(h,1))
f=g+c0*(C.cY(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cY(h,3))
d=v[Math.abs(A.o.E(h,4))]
if(i<0.22){a0=B.kr(new B.x(g,c1),new B.x(f,e),A.ct.au(0,i/0.22))
a0.toString
$.W()
a1=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a1.sar(new B.a8(A.a3,A.a8,A.x,B.a([d[0].j(0),d[0]],w),null,null).aA(0,B.rz(new B.x(g,c1),a0)))
a1.c=n
a1.d=A.bV
a2=B.kr(new B.x(g,c1),a0,0.75)
a2.toString
a3=a1.K()
a4=a0.a
a0=a0.b
t.drawLine.apply(t,[a2.a,a2.b,a4,a0,a3])
a3.delete()
a2=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a2.r=A.c.gp(0)
a3=a2.K()
t.drawCircle(a4,a0,m,a3)
a3.delete()}else{a5=(i-0.22)/0.78
a6=A.ct.au(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.V(q))
a2=C.cY(h,4)
if(a5<0.15){a4=1-a5/0.15
$.W()
a8=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a8.r=d[0].j(0.5*a4).gp(0)
a8.z=new B.hB(A.G,o)
a3=a8.K()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cY(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cY(h,b1+60))
b4=f+Math.cos(b2)*b3
b5=e+Math.sin(b2)*b3+a9
b6=Math.cos(b2)
b7=Math.sin(b2)
b8=(b1&1)===0?d[0]:d[1]
$.W()
b9=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
b9.r=b8.j(a8).gp(0)
b9.c=u
b9.d=A.bV
b9.a=A.ox
a3=b9.K()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cY(h,b1+120)>0.5)this.rE(c3,new B.x(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bGV(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.E(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.W(),a0=B.N()
a0.sar(new B.a8(A.ay,A.aC,A.x,D.dbz,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).aA(0,new B.a9(0,0,f,e)))
a1.b1(new B.a9(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.E(a3*(h*(0.08+0.12*C.cY(u,1)))+C.cY(u,2)*w,w)
s=C.cY(u,3)
r=Math.sin(a3*(0.8+C.cY(u,4))+u)
q=h*(0.012+0.012*C.cY(u,5))
p=Math.cos(a3*(2+3*C.cY(u,6))+u)
o=D.PI[A.o.D(A.k.bm(C.cY(u,7)*5),0,4)]
J.bx(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cY(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
t=Math.abs(p)
n.r=B.aq(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.E(u,5)===0){t=B.a([],v)
m=new B.aO(d.r,A.ao,null,null,t)
d=-q*2
t.push(new B.b5(d,0))
for(l=1;l<=8;++l){s=new B.ap(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.bA(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.W()
t=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
t.r=B.b0(n.r).gp(0)
t.b=A.af
t.c=q*0.35
k=t.K()
t=m.e
f.drawPath((t==null?m.e=new B.cF(m.gbK().a.snapshot()):t).a,k)
k.delete()}else{t=B.ci(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.K()
f.drawRect(B.bY(t),k)
k.delete()}f.restore()}this.lK(a1,a2,a3,25,A.bL,30)},
bIx(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.x(a5,a6)
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
o=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
o.sar(new B.c_(A.A,0.5,A.x,a4,0,B.a([A.bL.j(0.22),D.bc8],v),a4,a4).aA(0,B.bV(w,u)))
l=o.K()
o=m.gbK().a.snapshot()
t.drawPath((m.e=new B.cF(o)).a,l)
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
n.sar(new B.a8(A.b1,A.b6,A.x,D.dag,a4,a4).aA(0,new B.a9(a5,a6,o,v)))
a8.aS(i,n)
for(v=[D.erj,D.ekM,D.eAr],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
a0=d.b
d=a5+k*d.a
a1=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a1.r=a0.gp(a0)
l=a1.K()
t.drawCircle(d,o,n,l)
l.delete()
a1=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a1.r=A.ad.gp(0)
l=a1.K()
t.drawCircle(d-g,f,g,l)
l.delete()}for(v=[0,0.5,1],o=a7*0.014,e=0;e<3;++e){a2=v[e]
n=a2===0.5?0:u
g=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
g.r=A.hI.gp(0)
l=g.K()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.xc(i),u=B.a([],x.X),o=new B.vD(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b8(B.jX(y.M));--f
o.jz()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aO(n,v.b,a4,new B.cu([new B.Ho(o,f),0,d*h,!0]),B.a([],r))
f=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
f.b=A.af
f.c=g
f.e=A.hn
f.r=A.bL.gp(0)
l=f.K()
f=d.gbK().a.snapshot()
t.drawPath((d.e=new B.cF(f)).a,l)
l.delete()}if(s){a3=A.k.E(b0*0.5,1)
this.rE(a8,new B.x(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lK(a8,a9,b0,45,A.bL,40)},
bBr(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lK(a8,a9,b0,60,A.c,50)
w=[D.eLB,D.eLj,D.eLd,D.eMz]
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
if(a1!=null)d.bA(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.ap(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bA(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.W()
n=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
n.b=A.af
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.ox
n.z=new B.hB(A.G,s)
a2=n.K()
n=h.e
u.drawPath((n==null?h.e=new B.cF(h.gbK().a.snapshot()):n).a,a2)
a2.delete()
n=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
n.b=A.af
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.ox
n.z=new B.hB(A.G,v)
a2=n.K()
n=h.e
u.drawPath((n==null?h.e=new B.cF(h.gbK().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.E(t*(0.05+0.06*C.cY(a4,1))+C.cY(a4,2)*a3,a3)
r=C.cY(a4,3)
q=Math.sin(b0+a4)
p=C.cY(a4,4)
$.W()
n=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
n.r=A.vp.j(0.4+0.5*C.cY(a4,5)).gp(0)
n.a=A.ox
a2=n.K()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bEN(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.W(),a0=B.N()
a0.sar(new B.c_(A.A,0.5,A.x,l,0,B.a([A.hH.j(0.25+0.1*h),D.Xc],x.O),l,l).aA(0,B.bV(new B.x(g,f),e)))
a1.af(new B.x(g,f),e,a0)
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
if(q!=null)d.bA(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.W()
a0=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a0.b=A.af
a0.c=h
a0.r=D.PI[A.o.E(w,4)].j(0.7).gp(0)
p=a0.K()
a0=u.e
g.drawPath((a0==null?u.e=new B.cF(u.gbK().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.E(a3*(i*(0.07+0.12*C.cY(w,1)))+C.cY(w,2)*o,o)
r=k*(0.1+0.8*C.cY(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cY(w,4))
if(n<f){this.rE(a1,new B.x(r,n),m*2.4,A.bL,A.k.D(n/f,0,1))
continue}$.W()
d=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
d.b=A.af
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.xp.j(0.75).gp(0)
p=d.K()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
t.r=A.c.j(0.8).gp(0)
p=t.K()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bKH(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lK(a9,b0,b1,30,A.kR,60)
for(w=Math.max(4,A.k.V(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cY(p,1))
n=a7+o*4
m=A.k.E(t*(0.04+0.06*C.cY(p,2))+C.cY(p,3)*n,n)-o*2
l=C.cY(p,4)*a6+Math.sin(s+p)*a8*0.02
J.bx(v.save())
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
g=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
g.sar(new B.a8(A.ay,A.aC,A.x,D.d61,a5,a5).aA(0,B.ci(A.J,k*1.2,o)))
a2=g.K()
g=f.gbK().a.snapshot()
v.drawPath((f.e=new B.cF(g)).a,a2)
a2.delete()
a3=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a3.b=A.af
a3.c=Math.max(0.6,o*0.03)
a3.r=A.c.j(0.7).gp(0)
a2=a3.K()
v.drawLine.apply(v,[e,i,a0,i,a2])
a2.delete()
a2=a3.K()
v.drawLine.apply(v,[h,j,0,a1,a2])
a2.delete()
a2=a3.K()
v.drawLine.apply(v,[d,j,0,a1,a2])
a2.delete()
v.restore()
a4=Math.sin(u+p*1.7)
if(a4>0.85)this.rE(a9,new B.x(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
cvj(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
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
p=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
p.r=A.bL.j(r?0.12:0.07).gp(0)
m=p.K()
r=n.gbK().a.snapshot()
w.drawPath((n.e=new B.cF(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.E(a0+l*0.6,1.8)/1.8
$.W()
u=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
u.b=A.af
r=1-k
u.c=v*r
u.r=A.bL.j(r*0.6).gp(0)
m=u.K()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bm(a0/2.4)
k=A.k.E(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cY(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.boC.au(0,k)*(0.5+0.5*C.cY(t,v)))
this.rE(d,new B.x(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cY(t,3)),D.PI[A.o.D(A.k.bm(C.cY(t,4)*5),0,4)],u)}},
bBF(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cY(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.E(q*(0.05+0.05*C.cY(o,2))+C.cY(o,3)*m,m)
j=C.cY(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.aw1[A.o.E(o,6)]
h=$.W()
g=B.a([],s)
f=new B.aO(h.r,A.ao,a3,a3,g)
h=k+n*1.15
g.push(new B.b5(j,h))
for(e=1;e<=6;++e){d=new B.ap(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bA(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.W()
d=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
d.b=A.af
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.K()
d=f.e
u.drawPath((d==null?f.e=new B.cF(f.gbK().a.snapshot()):d).a,a1)
a1.delete()
a2=B.ci(new B.x(j,k),n*2.3,l)
l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
d=B.aq(i,A.w,0.35)
d.toString
l.sar(new B.c_(D.aXa,0.9,A.x,a3,0,B.a([A.c,i,d],t),W.avT,a3).aA(0,a2))
a1=l.K()
u.drawOval(B.bY(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aO(g.r,A.ao,a3,a3,l)
d=n*0.12
l.push(new B.b5(j-d,h))
l.push(new B.ap(j+d,h))
l.push(new B.ap(j,k+n))
l.push(new B.bE())
l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.r=B.aq(i,A.w,0.3).gp(0)
a1=l.K()
l=g.gbK().a.snapshot()
u.drawPath((g.e=new B.cF(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.E(q*(0.1+0.1*C.cY(o,11))+C.cY(o,12)*m,m)
r=C.cY(o,13)
J.bx(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.ci(A.J,t,v)
$.W()
r=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
r.r=D.aw1[A.o.E(o,6)].j(0.85).gp(0)
a1=r.K()
u.drawRect(B.bY(s),a1)
a1.delete()
u.restore()}},
bPK(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.x(a8,a9)
this.lK(b1,b2,b3,50,A.c,70)
for(w=[D.eLJ,D.eLp,D.eLv],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.W()
k=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
k.sar(new B.c_(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).aA(0,B.bV(new B.x(r,m),l)))
j=k.K()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.V(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.E(i,3)
g=C.cY(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cY(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.aq(A.bL,A.eC,g)
k.toString
d=C.cY(i,3)
$.W()
a0=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a0.r=k.j(0.5+0.5*C.cY(i,4)).gp(0)
a0.a=A.ox
j=a0.K()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.W()
a9=B.N()
a9.sar(new B.c_(A.A,0.5,A.x,a4,0,B.a([A.xp.j(0.55),D.afx],u),a4,a4).aA(0,B.bV(b0,a8)))
b1.af(b0,a8,a9)
a1=A.k.E(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bm(b3/3.5)
a3=new B.x(a5*(0.1+0.5*C.cY(a2,9)),a6*0.1*C.cY(a2,8))
a5=B.kr(a3,a3.ad(0,new B.x(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.kr(a3,a5,0.6)
a6.toString
a8=B.N()
a8.sar(new B.a8(A.a3,A.a8,A.x,B.a([A.c.j(0),A.c],u),a4,a4).aA(0,B.rz(a3,a5)))
a8.c=a7*0.005
a8.d=A.bV
b1.bL(a6,a5,a8)}},
cmh(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
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
o=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
o.sar(new B.c_(A.A,0.5,A.x,b5,0,B.a([A.xp.j(0.28),D.afx],w),b5,b5).aA(0,B.bV(new B.x(q,u),t)))
o.a=A.ox
l=o.K()
q=m.gbK().a.snapshot()
v.drawPath((m.e=new B.cF(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.es:A.ey)
a9=$.W()
b0=B.a([],s)
m=new B.aO(a9.r,A.ao,b5,b5,b0)
b0.push(new B.b5(a5?0:b6,0))
b0.push(new B.ap(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.cR(a9,k,a5?g:a1,b7))
b0.push(new B.ap(a5?0:b6,b7))
b0.push(new B.bE())
a9=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a9.sar(new B.a8(A.a3,A.a8,A.x,a7,b5,b5).aA(0,new B.a9(a6,0,a6+i,j)))
l=a9.K()
a9=m.gbK().a.snapshot()
v.drawPath((m.e=new B.cF(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
b1.r=A.hH.gp(0)
b1.c=o
b1.d=A.bV
l=b1.K()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aO($.W().r,A.ao,b5,b5,B.a([],s))
w=b7*0.78
b2.F(new B.b5(b6*0.42,w))
b2.F(new B.ap(b6*0.58,w))
b2.F(new B.ap(b6*0.8,b7))
b2.F(new B.ap(b6*0.2,b7))
b2.F(new B.bE())
v=B.N()
v.sar(D.bYI.aA(0,new B.a9(0,w,0+b6,w+b7*0.22)))
b9.aS(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.E(b7*(0.05+0.07*C.cY(r,1))+C.cY(r,2)*b3,b3)
u=C.cY(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rE(b9,new B.x(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cY(r,4)),A.bL,0.3+0.7*((q+1)/2))}},
bGj(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cY(t,1))
r=h+s*4
q=s*2
p=A.k.E(u*(0.12+0.12*C.cY(t,2))+C.cY(t,3)*r,r)-q
o=C.cY(t,4)*i
n=Math.cos(f*(2+3*C.cY(t,5))+t)
m=Math.abs(n)
l=B.ci(new B.x(o,p),q,q*A.k.D(m,0.12,1))
$.W()
q=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
q.sar(new B.a8(A.ay,A.aC,A.x,n>0?D.dlB:D.cDJ,null,null).aA(0,l))
k=q.K()
v.drawOval(B.bY(l),k)
k.delete()
q=-(s*0.22)
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.b=A.af
j.c=Math.max(0.6,s*0.08)
j.r=D.blq.gp(0)
k=j.K()
v.drawOval(B.bY(new B.a9(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rE(d,new B.x(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lK(d,e,f,30,A.bL,110)},
bZV(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lK(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cY(p,1))
n=a1+o*4
m=a1+o*2-A.k.E(t*(0.03+0.04*C.cY(p,2))+C.cY(p,3)*n,n)
l=C.cY(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.W()
h=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
h.sar(new B.c_(A.A,0.5,A.x,d,0,B.a([V.Xp.j(0.45*k),D.aeo],u),d,d).aA(0,B.bV(new B.x(l,m),j)))
g=h.K()
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
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
i=B.aq(D.bck,A.c,0.2*k)
i.toString
j.sar(new B.a8(A.b1,A.b6,A.x,B.a([D.bgV,i],u),d,d).aA(0,B.ci(new B.x(l,m),o*1.4,o)))
g=j.K()
j=f.gbK().a.snapshot()
v.drawPath((f.e=new B.cF(j)).a,g)
g.delete()
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.r=A.c.j(k).gp(0)
g=j.K()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bXy(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cY(p,1))
n=a1+o*4
m=A.k.E(s*(0.05+0.06*C.cY(p,2))+C.cY(p,3)*n,n)
l=C.cY(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.bx(v.save())
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
l.push(new B.pD(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.pD(m,g,o*1.8,h,0,m))
l.push(new B.bE())
f=D.cXV[A.o.E(p,5)]
m=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l=B.aq(f,A.w,0.25)
l.toString
m.sar(new B.c_(A.t0,0.5,A.x,d,0,B.a([A.c,f,l],u),K.a2u,d).aA(0,B.bV(A.J,o*1.4)))
e=m.K()
m=i.gbK().a.snapshot()
v.drawPath((i.e=new B.cF(m)).a,e)
e.delete()
v.restore()}this.lK(a3,a4,a5,30,A.i0,130)},
chp(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cY(q,1))
o=g+p*4
n=A.k.E(t*(0.05+0.06*C.cY(q,2))+C.cY(q,3)*o,o)
m=C.cY(q,4)
l=Math.sin(s+q*0.7)
J.bx(v.save())
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
m.push(new B.cR(p,l,0,p))
m.push(new B.cR(n,l,0,n))
m.push(new B.bE())
n=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
m=(q&1)===0?D.cxX:D.d7k
n.sar(new B.a8(A.a3,A.a8,A.x,m,i,i).aA(0,B.bV(A.J,p)))
j=n.K()
n=k.gbK().a.snapshot()
v.drawPath((k.e=new B.cF(n)).a,j)
j.delete()
v.restore()}this.lK(d,e,a0,25,A.bL,140)},
bDL(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lK(b0,b1,b2,40,A.bL,150)
for(w=Math.max(4,A.k.V(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cY(r,1))
p=Math.sin(b2*(0.15+0.1*C.cY(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cY(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.bx(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.bx(v.save())
v.scale(a1*n,1)
a2=$.W()
a3=B.a([],u)
a4=new B.aO(a2.r,A.ao,a6,a6,a3)
a3.push(new B.b5(0,0))
a3.push(new B.pD(f,e,l,d,h,0))
a3.push(new B.pD(q,h,g,q,0,h))
a3.push(new B.bE())
a2=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a2.sar(new B.a8(A.a3,A.a8,A.x,i?D.d73:D.d9K,a6,a6).aA(0,new B.a9(0,m,k,j)))
a5=a2.K()
a2=a4.gbK().a.snapshot()
v.drawPath((a4.e=new B.cF(a2)).a,a5)
a5.delete()
a2=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a2.b=A.af
a2.c=Math.max(0.6,o)
a2.r=D.AQ.gp(0)
a5=a2.K()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cF(a4.gbK().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.W()
p=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
p.r=D.bkJ.gp(0)
p.c=q*0.1
p.d=A.bV
a5=p.K()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c2R(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.x(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.E(w+t/4,1)
r=f*(0.2+0.7*s)
$.W()
q=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
q.b=A.af
q.c=v
q.r=D.ax4[t].j((1-s)*0.9).gp(0)
q.z=new B.hB(A.G,v)
p=r*0.3
p=B.by(B.ci(e,r,r*1.6),new B.aR(p,p))
o=q.K()
u.drawRRect(B.eT(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cY(m,1)*4)+m)))
k=D.ax4[A.o.E(m,4)]
j=m*n+h
i=g-l
i=B.by(new B.a9(j,i,j+w,i+l),new B.aR(v,v))
$.W()
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.r=k.j(0.85).gp(0)
j.z=new B.hB(A.aaJ,p)
o=j.K()
u.drawRRect(B.eT(i),o)
o.delete()}},
bKS(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.x(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cY(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cY(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bL,A.nE,A.dr][A.o.E(p,4)]
j=C.cY(p,3)
$.W()
i=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
i.r=k.j(0.75).gp(0)
i.a=A.ox
i.z=new B.hB(A.G,r)
h=i.K()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.W()
t=B.N()
t.r=A.aA.gp(0)
t.c=1.2
a3.bL(new B.x(a0,0),new B.x(a0,w-u),t)
t=B.N()
t.r=A.dv.gp(0)
a3.af(v,u,t)
J.bx(q.save())
a1=new B.aO(a1.r,A.ao,null,null,B.a([],x.v))
a1.F(new B.jO(B.bV(v,u)))
a3.pD(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.E(a1,g)
i=Math.sin(e*1.7+l+s)
$.W()
d=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
d.r=B.aq(A.bn,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.K()
q.drawRect(B.bY(new B.a9(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.rE(a3,v.ad(0,new B.x(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cwY(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.ct.au(0,A.k.D(a4/3,0,1))),a1=new B.x(d,a0)
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
r=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
r.r=A.bL.j(0.1).gp(0)
o=r.K()
r=p.gbK().a.snapshot()
w.drawPath((p.e=new B.cF(r)).a,o)
o.delete()}d=e*0.5
$.W()
a0=B.N()
a0.sar(new B.c_(A.A,0.5,A.x,h,0,B.a([D.b8j.j(0.6),D.aeo],x.O),h,h).aA(0,B.bV(a1,d)))
a2.af(a1,d,a0)
a0=e*0.2
d=B.N()
d.sar(D.eih.aA(0,B.bV(a1,a0)))
a2.af(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.E(d*(1+t*0.3)+C.cY(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.r=A.c.j(0.18).gp(0)
i=B.ci(new B.x(l,k),r,u)
o=j.K()
w.drawOval(B.bY(i),o)
o.delete()
i=B.ci(new B.x(l+q,k-n),r,m)
o=j.K()
w.drawOval(B.bY(i),o)
o.delete()}this.lK(a2,a3,a4,20,A.hI,180)},
cgt(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.W()
q=B.a([],t)
p=new B.aO(r.r,A.ao,f,f,q)
q.push(new B.b5(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.ap(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.bA(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.ap(e,d)
q.push(r)
o=p.f
if(o!=null)r.bA(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.bE()
q.push(r)
q=p.f
if(q!=null)r.bA(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.W()
r=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
r.r=B.aq(A.cB,A.jd,s/3).j(0.55).gp(0)
k=r.K()
r=p.e
w.drawPath((r==null?p.e=new B.cF(p.gbK().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cY(i,1))
g=d-A.k.E(u*(0.04+0.05*C.cY(i,2))+C.cY(i,3)*j,j)
n=C.cY(i,4)*e+Math.sin(a3+i)*a0*0.02
$.W()
t=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
t.sar(new B.c_(Am.wX,0.5,A.x,f,0,D.ddd,f,f).aA(0,B.bV(new B.x(n,g),h)))
k=t.K()
w.drawCircle(n,g,h,k)
k.delete()}this.lK(a1,a2,a3,25,A.c,190)},
cv0(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cY(r,1))
p=f+q*4
o=A.k.E(u*(0.03+0.05*C.cY(r,2))+C.cY(r,3)*p,p)
n=C.cY(r,4)
m=Math.sin(t+r)
$.W()
l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.r=A.c.j(0.6+0.4*C.cY(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bV
J.bx(v.save())
v.translate(n*g+m*e*0.03,o-q*2)
v.rotate((s+r)*180/3.141592653589793,0,0)
for(o=-q,n=o*0.55,m=q*0.25,k=o*0.8,j=o*0.25,i=0;i<6;++i){v.rotate(59.99999999999999,0,0)
h=l.K()
v.drawLine.apply(v,[0,0,0,o,h])
h.delete()
h=l.K()
v.drawLine.apply(v,[0,n,m,k,h])
h.delete()
h=l.K()
v.drawLine.apply(v,[0,n,j,k,h])
h.delete()}v.restore()}this.lK(d,a0,a1,40,A.ez,200)},
c_0(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.x(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.D(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dj(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.bx(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.ci(new B.x(p,0),q,r)
$.W()
f=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
f.sar(D.bYv.aA(0,new B.a9(0,o,n,m)))
e=f.K()
s.drawOval(B.bY(g),e)
e.delete()
s.restore()}}$.W()
a0=B.N()
a0.b=A.af
a0.c=a2*0.003
a0.r=D.bcC.gp(0)
a3.af(w,v*1.08,a0)
d=a5*0.8
this.rE(a3,w.ad(0,new B.x(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lK(a3,a4,a5,40,A.bL,210)},
coO(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hH,A.hI],a6),B.a([A.oH,A.i0],a6),B.a([A.aE,A.eC],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bR<ak.E>"),q=s.k("ak.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.W()
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
if(a1!=null)f.bA(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.ap(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bA(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.x(e,d+a0))}for(l=new B.dx(i,s),l=new B.bR(l,l.gM(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.ap(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.bA(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bE()
k.push(l)
k=j.f
if(k!=null)l.bA(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.W()
l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
k=a7[m]
h=k[0]
l.sar(new B.a8(A.a3,A.a8,A.x,B.a([h,k[1],h],a6),D.cZU,new B.mn(w)).aA(0,new B.a9(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.K()
l=j.e
t.drawPath((l==null?j.e=new B.cF(j.gbK().a.snapshot()):l).a,a2)
a2.delete()}this.lK(a8,a9,b0,40,A.c,220)},
bZJ(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
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
a2=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a3=Math.abs(a0)
a2.r=D.a2x[a3].gp(0)
a4=a2.K()
s.drawRect(B.bY(new B.a9(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a5.r=D.a2x[A.o.E(a3+2,5)].gp(0)
a4=a5.K()
s.drawRect(B.bY(new B.a9(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.E(n*(0.04+0.05*C.cY(a0,1))+C.cY(a0,2)*a6,a6)
v=C.cY(a0,3)
t=C.cY(a0,4)
this.rE(b1,new B.x(v*a7,l-a8),a9*(0.01+0.012*t),D.a2x[A.o.E(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cAE(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.W()
p=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
p.c=v
p.r=A.bL.j(0.06).gp(0)
o=p.K()
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
l.F(new B.cR(w,r,p,k))
w=a2+m*0.95
l.F(new B.ap(p,w))
p=n*0.3
j=a2+m
l.F(new B.ap(a1+p,j))
l.F(new B.ap(a1-p,j))
q=a1-q
l.F(new B.ap(q,w))
l.F(new B.ap(q,k))
l.F(new B.cR(v,r,v,a2))
l.F(new B.bE())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.ci(new B.x(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
d.b=A.af
d.c=q
d.r=A.ax.gp(0)
o=d.K()
u.drawArc.apply(u,[B.bY(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.N()
a1.sar(new B.a8(A.a3,A.a8,A.x,D.dfJ,A.aw8,null).aA(0,new B.a9(v,a2,r,j)))
a4.aS(l,a1)
a0=A.k.E(a6*0.6,1.4)
if(a0<1)this.rE(a4,new B.x(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bGW(a4,a5,a6,60)},
bGW(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.E(k*(0.1+0.1*C.cY(p,31))+C.cY(p,32)*v,v)
n=C.cY(p,33)
J.bx(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.ci(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.W()
n=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
n.r=D.PI[A.o.E(p,5)].gp(0)
m=n.K()
u.drawRect(B.bY(o),m)
m.delete()
u.restore()}},
csP(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lK(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cY(o,1)*1.6
m=A.k.E(a2+C.cY(o,2)*n,n)/n
l=e*(C.cY(o*7+A.k.bm((a2+C.cY(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.x(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.W()
g=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
g.sar(new B.a8(A.a3,A.a8,A.x,B.a([A.c.j(0),A.bL],s),null,null).aA(0,B.rz(new B.x(l,h),i)))
g.c=r
g.d=A.bV
f=g.K()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rE(a0,i,p,A.c,1-m)}},
bC_(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cY(r,1))
p=A.k.E(C.cY(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.E(C.cY(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.W()
m=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l=A.o.E(r,5)
m.r=D.ayE[l].j(n).gp(0)
m.a=A.ox
m.z=new B.hB(A.G,q*0.12)
k=m.K()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
m.b=A.af
m.c=Math.max(0.6,q*0.05)
m.r=D.ayE[l].j(n*1.4).gp(0)
k=m.K()
s.drawCircle(p,o,q,k)
k.delete()}},
ce6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.bx(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.ci(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.W()
o=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
o.b=A.af
o.c=u
o.r=A.bL.j(0.45).gp(0)
n=o.K()
w.drawOval(B.bY(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
k.r=A.hI.gp(0)
n=k.K()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
k.r=A.hH.j(0.4).gp(0)
k.z=new B.hB(A.G,r)
n=k.K()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lK(d,e,f,45,A.bL,270)},
bP_(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.E(o,4)
m=C.cY(o,1)
A:{if(0===n){l=new B.x(m*a2,p)
break A}if(1===n){l=new B.x(m*a2,q)
break A}if(2===n){l=new B.x(r,m*a3)
break A}l=new B.x(s,m*a3)
break A}k=A.k.E(a7+C.cY(o,2)*4,4)/4
j=A.et.au(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cY(o,3))*(j*i)
if(h<=0.5)continue
g=D.d4b[A.o.E(o,5)]
J.bx(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.ci(new B.x(0,l),i,j)
$.W()
a0=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a0.sar(new B.a8(A.b1,A.b6,A.x,B.a([A.c,g],u),null,null).aA(0,B.ci(new B.x(0,l),f,h)))
a1=a0.K()
v.drawOval(B.bY(d),a1)
a1.delete()}$.W()
l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.r=A.hH.gp(0)
a1=l.K()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lK(a5,a6,a7,30,A.hI,280)},
c2z(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.E(t+n/4,1)
l=B.bV(new B.x(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.W()
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.b=A.af
j.c=v
j.r=D.avf[n].j((1-m)*0.8).gp(0)
i=j.K()
u.drawArc.apply(u,[B.bY(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.E(v*(0.06+0.06*C.cY(g,1))+C.cY(g,2)*h,h)
e=C.cY(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cY(g,4))
a0=D.avf[A.o.E(g,4)]
$.W()
a1=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a1.r=a0.gp(0)
J.bx(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.ci(A.J,d,d*1.5)
i=a1.K()
u.drawOval(B.bY(s),i)
i.delete()
u.restore()
s=e+d*0.65
p=f-d*2.6
o=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.18)
i=o.K()
u.drawLine.apply(u,[s,f,s,p,i])
i.delete()
if((g&1)===0){o=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
o.r=a0.gp(0)
o.c=Math.max(1,d*0.3)
i=o.K()
u.drawLine.apply(u,[s,p,e+d*1.6,f-d*2,i])
i.delete()}}},
c10(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.x(a4,a5)
for(v=a7.a,u=a6*0.004,t=a6*0.003,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.bx(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=-o,l=m*1.16,k=q/3,j=m*0.12,i=m*0.82,h=o*0.12,g=m*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.W()
a0=B.a([],s)
a1=new B.aO(d.r,A.ao,a3,a3,a0)
a0.push(new B.b5(0,i))
a0.push(new B.cR(h,m,0,g))
a0.push(new B.cR(j,m,0,i))
d=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
d.b=A.af
d.c=t
d.r=B.aq(A.bL,A.nE,k).j(0.7).gp(0)
a2=d.K()
d=a1.gbK().a.snapshot()
v.drawPath((a1.e=new B.cF(d)).a,a2)
a2.delete()
d=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
d.r=A.hI.j(0.8).gp(0)
a2=d.K()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.W()
a5=B.N()
a5.sar(new B.c_(A.A,0.5,A.x,a3,0,B.a([A.hH.j(0.25),D.Xc],x.O),a3,a3).aA(0,B.bV(w,a4)))
a7.af(w,a4,a5)
this.lK(a7,a8,a9,30,A.bL,300)},
cv7(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.W()
h=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
h.r=A.bn.gp(0)
h.c=q
h.d=A.bV
g=h.K()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.sar(new B.c_(A.A,0.5,A.x,null,0,B.a([A.hI,A.hH.j(0.6),D.Xc],o),null,null).aA(0,B.bV(new B.x(j,i),p)))
g=l.K()
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
a6=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a6.r=B.aq(A.hI,A.aF,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bV
a6.a=A.ox
g=a6.K()
t.drawLine.apply(t,[j+h*a2*d*0.6,i+a3*a2*d*0.6,a4,a5,g])
g.delete()
if(d>0.6){h=a1+0.7
a3=Math.cos(h)
h=Math.sin(h)
g=a6.K()
t.drawLine.apply(t,[a4,a5,a4+a3*a2*0.15,a5+h*a2*0.15,g])
g.delete()
h=a1-0.7
a3=Math.cos(h)
h=Math.sin(h)
g=a6.K()
t.drawLine.apply(t,[a4,a5,a4+a3*a2*0.15,a5+h*a2*0.15,g])
g.delete()}}}this.lK(b0,b1,b2,35,A.bL,310)},
bFA(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aSm(a9,new B.as(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cY(n,1))
l=a8*(0.14+0.24*C.cY(n,2))
k=a8-l
j=new B.a9(o,k,o+m,k+l)
$.W()
i=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
i.sar(D.bZq.aA(0,j))
h=i.K()
r.drawRect(B.bY(j),h)
h.delete()
g=A.k.bm(m/q)
f=A.k.bm(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cY(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.W()
a6=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a6.r=A.bL.j(0.85).gp(0)
h=a6.K()
r.drawRect(B.bY(new B.a9(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
av(d){return d.b!==this.b||d.d!==this.d}}
C.aZu.prototype={
B(d){var w,v=null,u=new C.c8W(),t=new C.c8Y(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.ao2,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c8X(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.H_[w]))
return B.bZ(A.bD,s,A.br,12,10)}}
C.Z5.prototype={
U(){return new C.azs()}}
C.azs.prototype={
gvC(){var w=this.d
return w===$?this.d=this.a.c:w},
gaZo(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.ar(new B.ba(w.b,A.b3,A.aM),$.aw())}return v},
gax8(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaKx()
v=$.aw()
u.f!==$&&B.bL()
t=u.f=new B.ar(new B.ba(w,A.b3,A.aM),v)}return t},
q(){var w=this.gaZo(0),v=$.aw()
w.R$=v
w.P$=0
w=this.gax8()
w.R$=v
w.P$=0
this.a2()},
a__(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a__=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hR().C3(90,700,700,A.eG),$async$a__)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fe(),$async$a__)
case 8:p=e
o=q.b.toLowerCase()
n=J.ahD(o,".png")?"image/png":"image/jpeg"
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
return B.i($async$a__,v)},
aZn(d){var w=null,v=A.c.j(0.07)
return B.br(w,new B.b3(4,B.n(12),A.W),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.a8i,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.agH(p.gvC().a)
if(n==null)n=A.d.gH(D.H_)
w=p.gvC()
v=p.r
u=x.p
v=B.E(new B.an(A.V,o,A.aa,A.r,B.a([B.bT(0,new C.Nr(p.gvC(),!1,!0,new B.cx(w.a+v,x.W)),0,0,0),B.ao(o,B.HJ(A.mz,new C.d8s(d),B.nA(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.HJ(D.bIO,new C.d8t(p),B.nA(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aQx,o,o,o)
t=B.E(B.aM(o,A.U,!1,o,!0,A.r,o,B.aN(),p.gaZo(0),o,o,o,o,o,2,p.aZn("Big words"),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d8u(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.hq,!0,A.a4,o,A.am,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hH.j(0.6),A.q,1)
if(p.gvC().d.length===0)q=D.bM9
else{q=C.hfe(p.gvC().d)
if(q==null)q=new Uint8Array(0)
q=B.hY(B.fO(q,A.A,o,o,A.ce,A.bU,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ab,B.aB(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a5),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc84(),o,o,o,o,o,o,!1,A.a7)],u)
if(p.gvC().d.length!==0)r.push(B.aI(o,o,o,o,D.a1k,o,o,o,new C.d8v(p),o,o,o,o,"Remove logo",o))
return B.c6(o,A.w,B.bl(!0,B.w(B.a([v,B.p(o,B.w(B.a([w,A.R,B.B(r,A.m,o,A.e,A.j,0,o,o),A.N,B.aM(o,A.U,!1,o,!0,A.r,o,B.aN(),p.gax8(),o,o,o,o,o,2,p.aZn("Line under it"),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d8w(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.dg,!0,A.a4,o,A.am,o,o,o,o),A.ac,B.dn(D.bL2,D.fDJ,new C.d8x(p,d),B.bm(A.ax,o,o,o,A.w,o,A.ck,o,new B.b7(B.n(14),A.W),o,o,o))],u),A.ai,o,A.e,A.Q,0,A.p),A.f,o,o,D.b10,o,o,o,o,A.Fw,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.ae,!0,!0),o,!1,!1,o,o)}}
C.aKY.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.Zq.prototype={
U(){return new C.bfr(new B.ar(A.as,$.aw()))}}
C.bfr.prototype={
q(){var w=this.d
w.R$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.I,m=n?A.c:A.M,l=n?A.aR:A.ak,k=B.aH(d,A.bW,x.w).w,j=n?A.M:A.c,i=B.n(28),h=B.I(n?A.bE:A.aL,A.q,1),g=x.p,f=B.B(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aI(o,o,o,o,B.X(A.cy,l,o,o,o,o),o,o,o,new C.df8(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cPi[w]
u=B.a([],g)
for(t=J.aW(v.b);t.C();){s=t.gT(t)
r=new B.aR(12,12)
q=new B.aR(12,12)
p=n?A.c.j(0.06):A.bM
u.push(B.aL(!1,new B.bo(r,r,r,r),!0,B.p(A.A,new B.y(s,o,A.pk,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bo(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.df9(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hx,new B.y(v.a.toUpperCase(),o,new B.G(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.Ch(A.bD,6,6,A.br,u,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.N)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bm:A.aO
e.push(B.B(B.a([B.E(B.aM(o,A.U,!1,o,!0,A.r,o,B.aN(),this.d,o,o,o,o,o,2,B.br(o,new B.b3(4,B.n(14),A.W),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a4,o,A.am,o,o,o,o),1),A.ab,B.bG(A.aRv,new C.dfa(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.N)
return B.bl(!0,B.p(o,B.w(B.a([f,new B.dq(1,A.cm,B.ct(e,o,o,o,o,A.ah,!0),o)],g),A.F,o,A.e,A.Q,0,A.p),A.f,o,new B.aX(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.tJ,A.Z6,o,o,o),!0,!1,A.ae,!0,!0)}}
C.beP.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.f5()
a2.dU(this.c)
w=this.b
v=w/6.283185307179586
$.W()
u=B.N()
u.z=A.Rm
t=B.N()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.an()
l=a2.an()
k=a2.an()
j=0.8+a2.an()*2.2
i=Math.sin(w*(3+a2.az(4))+n)
h=A.k.E(l-v*(0.4+k*0.9),1)
k=(m+Math.sin(q+n)*0.012)*p
g=h*o
if(a2.an()<0.25){f=B.aq(r,A.c,0.85)
f.toString}else f=r
e=f.j(A.k.D(0.35+i*0.35,0.05,0.85))
u.r=e.j(e.a*0.5).gp(0)
d=u.K()
s.drawCircle(k,g,j*2.4,d)
d.delete()
t.r=e.gp(0)
d=t.K()
s.drawCircle(k,g,j,d)
d.delete()
if(i>0.85&&j>2){a0=j*4*(i-0.85)/0.15
$.W()
a1=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a1.r=e.gp(0)
a1.c=1
d=a1.K()
s.drawLine.apply(s,[k-a0,g,k+a0,g+0,d])
d.delete()
d=a1.K()
s.drawLine.apply(s,[k,g-a0,k+0,g+a0,d])
d.delete()}}},
av(d){return d.b!==this.b}}
C.bex.prototype={
a6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.by(new B.a9(0,0,0+a7.a,0+a7.b),A.kD),a2=this.b,a3=Math.sin(a2*2),a4=$.W(),a5=B.N()
a5.b=A.af
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.mD
a6.aD(a1,a5)
a5=x.v
a4=new B.aO(a4.r,A.ao,a0,a0,B.a([],a5))
a4.F(new B.iL(a1))
v=new B.Sv(new B.vD(B.xc(a4),!1,B.a([],x.X))).gH(0)
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
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.b=A.af
j.d=A.bV
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.E(n-p*(1-m/10),t)
h=A.k.E(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aO(r,k,a0,new B.cu([v,i,h,!0]),B.a([],a5))
g=j.K()
f=k.gbK().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()}else{k=new B.aO(r,k,a0,new B.cu([v,i,t,!0]),B.a([],a5))
g=j.K()
f=k.gbK().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()
k=new B.aO(r,a2.b,a0,new B.cu([v,0,h,!0]),B.a([],a5))
g=j.K()
f=k.gbK().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()}}a4.jz()
e=u[a3].MQ(n).a
$.W()
k=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
k.r=w.gp(0)
k.z=A1.p8
g=k.K()
k=e.a
f=e.b
q.drawCircle(k,f,5,g)
g.delete()
d=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
d.r=A.c.gp(0)
g=d.K()
q.drawCircle(k,f,2,g)
g.delete()}},
av(d){return d.b!==this.b}}
C.bne.prototype={
a6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.f5()
e.dU(this.c)
w=a0.a*(0.2+e.an()*0.6)
v=e.ht()?-0.1:1.1
v=a0.b*v
u=new B.x(w,v)
t=a0.gaFZ()*1.4
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
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.sar(B.aUx(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.lx
g=j.K()
j=h.gbK().a.snapshot()
q.drawPath((h.e=new B.cF(j)).a,g)
g.delete()}},
av(d){return d.b!==this.b}}
C.b9t.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.f5()
a0.dU(this.c*7+3)
for(w=a1.a,v=this.d,u=a2.a,t=Math.abs(u),s=a2.b,r=Math.abs(s),q=this.b,p=q*0.8,o=q*2,n=0;n<16;++n){m=a0.an()
l=a0.an()
k=Math.min(t,r)*(0.03+a0.an()*0.09)
j=a0.an()*3.141592653589793*2
i=(m+Math.sin(q+j)*0.04)*u
h=(l+Math.cos(p+j)*0.05)*s
g=0.08+0.1*(0.5+0.5*Math.sin(o+j))
if((n&1)===0)f=v
else{e=B.aq(v,A.c,0.6)
e.toString
f=e}$.W()
e=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
e.r=f.j(g).gp(0)
e.z=new B.hB(A.G,k*0.35)
d=e.K()
w.drawCircle(i,h,k,d)
d.delete()
e=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
e.b=A.af
e.c=1
e.r=B.aq(f,A.c,0.5).j(g*0.9).gp(0)
d=e.K()
w.drawCircle(i,h,k,d)
d.delete()}},
av(d){return d.b!==this.b}}
C.b97.prototype={
a6(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.f5()
a0.dU(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.an()-0.5)*0.1)
k=v*(0.06+a0.an()*0.05)
j=a0.an()*3.141592653589793*2
i=$.W()
h=B.a([],n)
g=new B.aO(i.r,A.ao,null,null,h)
h.push(new B.b5(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.ap(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.bA(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.W()
i=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
i.b=A.af
i.c=r
i.d=A.bV
if(m===1){h=B.aq(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gp(0)
i.z=new B.hB(A.G,u)
d=i.K()
i=g.e
t.drawPath((i==null?g.e=new B.cF(g.gbK().a.snapshot()):i).a,d)
d.delete()}},
av(d){return d.b!==this.b}}
C.bu9.prototype={
a6(d,e){var w,v,u=new B.a9(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.W()
w=B.N()
t=(0.5+0.5*t)*0.12
w.sar(new B.c_(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cWI,null).aA(0,u))
d.b1(u,w)
w=u.cs(-3)
v=B.N()
v.b=A.af
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.lx
d.b1(w,v)},
av(d){return d.b!==this.b}}
C.bra.prototype={
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bm(d)*7,p=0;p<7;++p){o=new B.f5()
o.dU(q+p)
n=o.an()*w
m=o.an()*u
l=Math.sin(A.k.E(A.k.E(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.an()*0.025)*l
j=B.aq(s,A.c,0.7).j(l)
$.W()
i=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
i.r=j.gp(0)
i.c=1.4
i.d=A.bV
h=i.K()
r.drawLine.apply(r,[n-k,m,n+k,m+0,h])
h.delete()
g=k*1.4
h=i.K()
r.drawLine.apply(r,[n,m-g,n+0,m+g,h])
h.delete()
g=k*0.45
f=n-g
e=n+g
i.c=0.8
h=i.K()
r.drawLine.apply(r,[f,m-g,e,m+g,h])
h.delete()
g=-k*0.45
h=i.K()
r.drawLine.apply(r,[f,m-g,e,m+g,h])
h.delete()
g=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
g.r=A.c.j(l*0.9).gp(0)
g.z=new B.hB(A.G,k*0.3)
h=g.K()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
av(d){return d.b!==this.b}}
C.bqj.prototype={
a6(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a9(0,0,0+e.a,0+e.b)
$.W()
v=B.N()
v.a=A.ox
v.sar(new B.a8(A.ay,A.aC,A.x,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).aA(0,w))
d.b1(w,v)},
av(d){return d.b!==this.b}}
C.bdS.prototype={
a6(d,e){var w,v,u,t,s,r=e.gdH(),q=0.55+0.45*Math.sin(this.b)
$.W()
w=B.N()
w.b=A.af
w.c=1.4
w.d=A.bV
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.N()
u.b=A.af
u.c=4
u.r=v.j(0.12*q).gp(0)
u.z=A.un
r=new C.d84(this,r*0.16,d,u,w)
t=e.gdH()*0.045
r.$3(new B.x(t,t),1,1)
v=e.a-t
r.$3(new B.x(v,t),-1,1)
s=e.b-t
r.$3(new B.x(t,s),1,-1)
r.$3(new B.x(v,s),-1,-1)},
av(d){return d.b!==this.b}}
C.xC.prototype={}
C.IJ.prototype={
a3(){return"NgmySlideElementType."+this.b}}
C.aqW.prototype={
a3(){return"NgmySlideAspectRatio."+this.b}}
C.uK.prototype={
a3(){return"NgmySlideShapeKind."+this.b}}
C.mv.prototype={
a3(){return"NgmySlideLayout."+this.b}}
C.hE.prototype={
a3(){return"NgmySlideTransition."+this.b}}
C.eG.prototype={
hG(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.eq(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ag(){var w,v=this,u=B.U(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"type",v.b.b)
u.n(0,"x",v.c)
u.n(0,"y",v.d)
u.n(0,"w",v.e)
u.n(0,"h",v.f)
u.n(0,"text",v.r)
u.n(0,"fontSize",v.w)
u.n(0,"fontWeight",v.x.gdL(0))
u.n(0,"fontStyle",v.y.a)
u.n(0,"decoration",C.hTw(v.z))
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
hG(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("M<1,eG>")
n=B.C(new B.M(n,new C.cem(),m),m.k("ak.E"))
return C.rw(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ag(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("M<1,a5<m,@>>")
n=B.C(new B.M(n,new C.cen(),m),m.k("ak.E"))
return B.F(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i3.prototype={
gb9C(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gSh(){if(!C.kw(this.w))return!1
var w=this.gb9C()
if(w==null)return!1
return new B.S(Date.now(),0,!1).d_(w.bU())},
hG(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
q=B.T(r).k("M<1,lG>")
r=B.C(new B.M(r,new C.ceb(),q),q.k("ak.E"))
return C.BJ(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ag(){var w,v,u=this,t=B.U(x.N,x.z)
t.n(0,"id",u.a)
t.n(0,"name",u.b)
t.n(0,"themeId",u.c)
t.n(0,"aspectRatio",u.d.b)
t.n(0,"autoAdvanceSeconds",u.e)
t.n(0,"updatedAt",u.f.a5().ac())
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
w=B.C(new B.M(w,new C.cec(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jE.prototype={}
C.b0D.prototype={
B(d){return B.cA(new C.ceh(this))}}
C.ao5.prototype={
U(){return new C.biz(null,null)}}
C.biz.prototype={
gaZp(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.fW,null,1,null,v)
w.cL(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gaZp().q()
this.buz()},
B(d){return B.c7(this.gaZp(),new C.dGg(),this.a.c)}}
C.aKK.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.ad8.prototype={
PT(d,e,f,g){return this.bOG(d,e,f,g)},
bOG(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$PT=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$PT)
case 3:s=i
if(d.e==null){w=1
break}B.a4(d,!1).O(null)
t=d.I(x.q).f
t.S(B.b2(null,null,null,null,null,A.r,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ei,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$PT,v)},
B(d){var w=this,v=null,u=B.n(22),t=B.I(A.c.j(0.08),A.q,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dn,24)],x.V),r=B.au(B.p(v,v,A.f,v,v,new B.o(A.b2,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.de,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aQ,p,A.an,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a6,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.au,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a6,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d7)
n.push(B.B(B.a([B.E(new C.adp(A.hB,"Download",A.bZ,new C.epg(w,d),!0,v),1),A.at,B.E(new C.adp(A.vQ,"Share",A.bi,new C.eph(w,d),!1,v),1),A.at,B.E(new C.adp(A.hk,"Safari",A.aZ,new C.epi(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aB)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.epj(d),v,v))
return B.bl(!0,new B.D(A.pX,B.w(B.a([B.p(v,B.w(n,A.ai,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.iY,v,t,u,s,v,A.n),v,v,v,v,A.FD,v,v,1/0)],m),A.m,v,A.e,A.Q,0,A.p),v),!0,!1,A.ae,!0,!0)}}
C.adp.prototype={
B(d){var w=this,v=null,u=B.n(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.n(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.q,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aF(!1,A.a1,!0,v,B.aL(!1,u,!0,B.eB(B.w(B.a([p,A.N,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.by4,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ag)}}
C.b0B.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.aq6(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.c85().akv(1.35)
s=B.avn(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bzX(v)
if(i.e&&i.w!=null)q=B.aM(h,A.U,!1,h,!0,A.r,h,B.aN(),i.w,A.bi,h,h,h,h,2,D.bUd,A.y,!0,h,!0,h,!1,i.x,A.aj,h,h,h,new B.cx("slide_tf_"+g.a,x.W),h,A.ww,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.zI,A.am,h,A.Tx,h,h)
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
w=n?t.cI6(B.b0(g.Q).j(0.45),A.cE):t
p=g.as
l=m?1:h
k=m?A.eH:A.Dq
p=B.d(f,new B.cx("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.To:s
$.W()
j=B.N()
j.b=A.af
j.c=3*w
j.e=A.hn
j.r=A.av.gp(0)
j=i.coR(p,t,k,j)
k=g.r
w=new B.an(A.V,h,A.aa,A.r,B.a([j,i.coP(k,t,l?A.To:s)],x.p),h)}else w=i.coQ(p,t,g.k2?A.To:s,m)
v=new B.nf(w,new B.cx("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aB(A.ci,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a7)}return new B.D(u,new B.bI(r,h,h,q,h),h)
case 1:case 4:return i.bYc()
case 3:return i.cgs()
case 2:return B.b4(h,h,h,new C.b0y(g,h),A.fE)
case 5:g=g.r
return new C.b0A(g,!i.e&&i.z==null,h)}},
c85(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.k5
j=A.cE
break
case"shadow":v=o.d
e=B.a([new B.cS(D.aem,new B.x(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cS(l,A.J,6*v),new B.cS(l,A.J,16*v),new B.cS(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bH
w=A.av
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mJ
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cS(A.bA,new B.x(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.aq(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cS(v,new B.x(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cS(A.ba,new B.x(-3*v,0),0),new B.cS(A.aw,new B.x(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cS(A.cY,A.J,8*v),new B.cS(A.aw,new B.x(0,-3*v),18*v)],x.r)
k=A.u
w=V.Eu
break
case"ice":v=o.d
e=B.a([new B.cS(A.aP,A.J,10*v),new B.cS(A.cB,A.J,22*v)],x.r)
k=A.O
w=A.ez
break
case"chalk":h=o.d
e=B.a([new B.cS(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.k5
break
case"comic":v=B.aq(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cYH[q]
u.push(new B.cS(v,new B.x(p.a*t,p.b*t),0))}u.push(new B.cS(v,new B.x(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.W()
f=B.N()
v=o.d
f.sar(D.bWT.aA(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cS(A.KL,new B.x(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.W()
f=B.N()
v=o.d
f.sar(D.bXd.aA(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cS(l,A.J,14*o.d)],x.r)
w=l
k=A.a6
break
case"lowercase":h=2*o.d
w=l
k=A.cv
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cS(l.j(0.45),new B.x(u,u),0),new B.cS(l.j(0.2),new B.x(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.k5
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
az3(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eRO.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cef(h)
v=r.k2?C.i59(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eH:A.Dq
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.XC(B.d0(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
coR(d,e,f,g){return this.az3(d,e,f,!1,g)},
coP(d,e,f){return this.az3(d,e,f,!1,null)},
coQ(d,e,f,g){return this.az3(d,e,f,g,null)},
bzX(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a8
default:return A.a3}},
bYc(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bI
return B.au(B.X(s.b===D.l6?A.GA:A.BD,A.aA,t,t,t,32),t,t,t)}w=u.bCZ(r)
if(s.b===D.l6){s=B.n(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cr,A.q,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dD,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aNF(r,!0)
return C.fzH(s.go,v,s.id)}return w},
aNF(d,e){var w,v,u,t
try{w=C.i5s(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.cc(u,"_bg")
u=B.cA(new C.cee(this,w,v,e))
return u}catch(t){return D.ac6}},
bCZ(d){return this.aNF(d,!1)},
cgs(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b6i
return C.i5K(v,w.db,w.dx)}}
C.b0y.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.W(),g=B.N(),f=this.b
g.r=B.b0(f.ay).gp(0)
w=B.N()
w.r=B.b0(f.ch).gp(0)
w.b=A.af
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a9(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.b1(s,g)
d.b1(s,w)
break
case 1:d.hH(s,g)
d.hH(s,w)
break
case 2:r=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
r.F(new B.b5(u/2,0))
r.F(new B.ap(u,t))
r.F(new B.ap(0,t))
r.F(new B.bE())
d.aS(r,g)
d.aS(r,w)
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
d.aS(r,g)
d.aS(r,w)
break
case 4:h=t/2
w.c=v+2
d.bL(new B.x(0,h),new B.x(u,h),w)
break
case 5:q=u*0.22
r=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
r.F(new B.b5(q,0))
r.F(new B.ap(u,0))
r.F(new B.ap(u-q,t))
r.F(new B.ap(0,t))
r.F(new B.bE())
d.aS(r,g)
d.aS(r,w)
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
if(v!=null)h.bA(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.ap(k,j)
f.push(h)
v=r.f
if(v!=null)h.bA(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.F(new B.bE())
d.aS(r,g)
d.aS(r,w)
break}},
av(d){return d.b!==this.b}}
C.aIn.prototype={
U(){return new C.btG(null,null)}}
C.btG.prototype={
a_(){var w,v=this
v.a1()
w=B.bj(null,A.ik,null,1,null,v)
w.cL(0)
v.d!==$&&B.aP()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bwK()},
aNQ(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.n(8)
return B.c0(B.au(B.d(d,w,w,w,w,w,w,A.de,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a8(A.a3,A.a8,A.x,v,w,w),A.n),A.be)},
bAa(){var w,v=this,u=null,t=v.aNQ("Slide A",A.bi),s=v.aNQ("Slide B",A.aZ)
if(v.a.c===D.cl)return new B.an(A.V,u,A.b0,A.r,B.a([t,B.au(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c7(w,new C.f3B(v,s,t),u)},
B(d){return this.bAa()}}
C.aJ_.prototype={
jd(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jT(d){return d.b!==this.b}}
C.UU.prototype={
U(){return new C.biL(null,null)}}
C.biL.prototype={
a_(){var w,v,u=this
u.a1()
w=B.bj(null,A.B4,null,1,null,u)
u.d!==$&&B.aP()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cl){w.sp(0,1)
return}B.bM(B.dD(0,0,0,v.c.fr+v.f*120,0,0),new C.dRN(u),x.a)},
bu(d){var w,v,u,t=this
t.bC(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cl)w.sp(0,1)
else B.bM(B.dD(0,0,0,v.c.fr+v.f*120,0,0),new C.dRM(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.buN()},
B(d){var w,v=this.a
if(v.c.dy===D.cl||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c7(w,new C.dRL(this),v.d)}}
C.II.prototype={
B(d){return B.cA(new C.ce7(this))}}
C.azc.prototype={
U(){return new C.bdl()}}
C.bdl.prototype={
a_(){this.a1()
if(this.a.c!==D.cl)B.bM(A.M9,new C.d5j(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cl)n=B.au(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.UU(C.eq(A.bh,!1,4279310375,A.aD,"",4294538006,24,A.bo,A.a6,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bg,o,2,"",0,0,"",u,D.f5,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.c9,p,p,B.n(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cx("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.eq(A.bh,!1,4294967295,A.aD,"",4280640491,22,A.bo,A.a6,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bg,o,2,"Element flies in",0,0,"",q.a.c,D.cP,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.n(14)
v=new B.an(A.V,p,A.aa,A.r,B.a([w,B.ao(32,new C.UU(t,B.p(p,D.fpm,A.f,p,p,new B.o(s,p,B.I(A.b2,A.q,1),r,p,p,A.n),p,p,p,p,A.jn,p,p,1/0),!0,1,new B.cx("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c0(n,D.b1A,A.be)}}
C.a7v.prototype={
U(){return new C.bjn(null,null)}}
C.bjn.prototype={
gaZX(){var w=this.a
if(w.e)w=D.eRX.t(0,w.c)||D.aNJ.t(0,A.d.gH(this.a.c.split("@")))
else w=!1
return w},
a_(){var w,v=this
v.a1()
if(v.gaZX()){w=C.i3P(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bj(null,B.dD(0,0,0,w,0,0),null,1,null,v)
w.cL(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.bvg()},
B(d){var w,v=this,u=v.d
if(!v.gaZX()||u==null)return v.a.d
w=v.a
return B.c7(u,new C.edU(v,u,A.o.E(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aZx.prototype={
B(d){var w=null
return B.au(C.b0C(!0,w,!1,C.eq(A.L,!1,this.e.l(),A.aD,"",4280640491,this.f,A.bo,A.a6,"",0.2,"fx",w,"","",0,!1,"",0,D.bg,4280172719,2,"Aa",0,0,this.c,D.cl,D.cP,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gY(d){return this.f}}
C.bev.prototype={
jd(d){return C.a2a(this.b,new B.a9(0,0,0+d.a,0+d.b).cs(-this.c))},
jT(d){return d.b!==this.b||d.c!==this.c}}
C.bpg.prototype={
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a9(0,0,0+a1.a,0+a1.b).cs(-this.d),g=this.b,f=C.a2a(g,h),e=a1.gdH(),d=new C.eTH()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sar(D.aPf.aA(0,h))
a0.aS(f,w)
g=C.a2a(g,h.cs(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.blc.gp(0)
a0.aS(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sar(D.f1_.aA(0,h))
a0.aS(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.hB(A.G,e*0.04)
a0.aS(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aS(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.sar(D.f0Y.aA(0,h))
a0.aS(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aS(f,w)
g=C.a2a(g,h.cs(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aS(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.ba.j(0.7).gp(0)
g.z=new B.hB(A.G,e*0.035)
a0.aS(f,g)
g=d.$1(e*0.016)
g.r=A.oI.gp(0)
a0.aS(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sar(D.f0T.aA(0,h))
a0.aS(f,w)
w=C.a2a(g,h.cs(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b9L.gp(0)
a0.aS(w,v)
g=C.a2a(g,h.cs(e*0.03))
v=d.$1(e*0.004)
v.r=D.bco.gp(0)
a0.aS(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sar(D.aPf.aA(0,h))
a0.aS(f,g)
for(g=B.xc(f),w=B.a([],x.X),g=new B.vD(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b8(B.jX(y.M));--q
g.jz()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bm(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.jz()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.jz()
m=w[q].MQ(p*n/o).a
l=D.cW1[A.o.E(n,4)]
$.W()
p=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
p.r=l.gp(0)
k=p.K()
p=m.a
j=m.b
u.drawCircle(p,j,v,k)
k.delete()
i=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
i.r=A.c.j(0.9).gp(0)
k=i.K()
u.drawCircle(p+t,j+t,s,k)
k.delete()}}break
case"aurora":g=d.$1(e*0.08)
g.sar(D.f11.aA(0,h))
g.z=new B.hB(A.G,e*0.03)
a0.aS(f,g)
g=d.$1(e*0.018)
g.sar(D.f0Z.aA(0,h))
a0.aS(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aS(f,w)
g=C.a2a(g,h.cs(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nI.gp(0)
a0.aS(g,w)
break}},
av(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bqg.prototype={
a6(d,e){d.FS(C.a2a(this.b,new B.a9(0,0,0+e.a,0+e.b).cs(-this.c)),A.w,e.gdH()*0.05,!1)},
av(d){return d.b!==this.b||d.c!==this.c}}
C.aKX.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.aLp.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.aMI.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.a7O.prototype={}
C.NT.prototype={
U(){var w=x.gz,v=x.N,u=x.bO
return new C.aDX(B.a([],x.D),B.a([],w),B.a([],w),B.U(v,u),B.U(v,x.bo),B.U(v,u),B.aY(v),null,null)},
ge2(){return this.c},
gTC(){return this.r},
gTD(){return this.w},
gLB(){return this.x}}
C.aDX.prototype={
a_(){var w,v=this
v.a1()
$.aV.bY$.push(v)
C.fED()
$.hmT=new C.evu(v)
w=B.bj(null,A.B1,null,1,null,v)
w.fg(0,!0)
v.fy!==$&&B.aP()
v.fy=w
v.Io()},
bu(d){var w,v,u=this
u.bC(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.Ou(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.Io()}},
j6(d){if(d===A.A9||d===A.t2||d===A.t1||d===A.ps)this.tA()},
q(){var w,v,u,t=this
$.aV.hM(t)
w=t.at
if(w!=null)w.a7(0)
t.tA()
w=t.fy
w===$&&B.c()
w.q()
for(w=t.ch,w=new B.du(w,w.r,w.e);w.C();){v=w.d
v.R$=$.aw()
v.P$=0}for(w=t.CW,w=new B.du(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bO(0)
v.h6()}for(w=t.cx,w=new B.du(w,w.r,w.e);w.C();){v=w.d
v.R$=$.aw()
v.P$=0}t.bvr()},
gabr(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gOO(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
abW(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gSh())return!1
return!0},
kj(){return this.abW(null)},
aiD(){var w=this.c
if(w==null)return
w.I(x.q).f.S(D.f_g)},
qk(){if(!this.kj())return!1
this.aiD()
return!0},
aqJ(d){var w,v,u,t,s,r=this
if(r.abW(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hm_(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zR(){return this.aqJ(null)},
Io(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Io=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.aqY(k),$async$Io)
case 3:j=e
w=4
return B.b(C.apy(k),$async$Io)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fU7(j,t.c05())
w=t.gabr()?5:7
break
case 5:r=t.gOO()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aZL(r),$async$Io)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bs(s,new C.erS())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.c9(s,0,q)}case 9:w=6
break
case 7:A.d.bs(s,new C.erT())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.L)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yG(m==null?"":m)!=null)continue
C.fEP(n,s)
p=!0}t.m(new C.erU(t,s))
if(p||s.length>J.ad(j))t.tA()
case 1:return B.h(u,v)}})
return B.i($async$Io,v)},
c05(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kw(w)&&w!==q}if(w)p.push(r)
return p},
cnh(d){var w,v=this,u=d.w
if(!C.kw(u)||u==="hati_kiapo_uongozi")return
v.aaf(d)
w=A.d.bg(v.d,new C.ets(d))
u=v.d
if(w>=0){u[w]=d.hG()
v.d[w].f=new B.S(Date.now(),0,!1)}else A.d.c9(u,0,d.hG())
v.db=!1},
cho(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kw(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cnh(t)
s=u.d
w=B.T(s)
v=w.k("cP<1,i3>")
s=B.C(new B.cP(new B.a_(s,new C.etg(),w.k("a_<1>")),new C.eth(),v),v.k("J.E"))
return s},
Ou(d){return this.bP3(d)},
tA(){return this.Ou(null)},
bP3(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Ou=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cho()
w=3
return B.b(C.VM(d==null?t.a.c:d,s),$async$Ou)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.aqJ(r)?4:5
break
case 4:w=6
return B.b(C.a71(r),$async$Ou)
case 6:q=r.x
p=A.a.i(q==null?t.gOO():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bg(t.d,new C.erf())
q=t.d
if(o>=0)q[o]=r.hG()
else A.d.c9(q,0,r.hG())
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ou,v)},
pn(){var w,v=this,u=v.at
if(u!=null)u.a7(0)
u=v.e
w=(u==null?null:C.kw(u.w))===!0?A.hw:A.lR
v.at=B.cM(w,new C.euA(v))},
aZq(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.aeV(u.hG(),v.f,v.r))
if(w.length>40)A.d.cF(w,0)
A.d.a8(v.ay)},
cAV(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.aeV(w.e.hG(),w.f,w.r))
w.m(new C.evq(w,v.pop()))
w.pn()},
cmm(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.aeV(w.e.hG(),w.f,w.r))
w.m(new C.etq(w,v.pop()))
w.pn()},
of(){var w,v,u=this
if(u.e==null)return
w=A.d.bg(u.d,new C.evd(u))
if(w>=0){u.d[w]=u.e.hG()
u.d[w].f=new B.S(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.S(Date.now(),0,!1)},
Xy(d){var w,v,u,t,s=this.gdt()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
xu(){var w,v,u,t
for(w=this.ch,v=new B.du(w,w.r,w.e);v.C();){u=v.d
u.R$=$.aw()
u.P$=0}w.a8(0)
for(w=this.CW,v=new B.du(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bO(0)
u.h6()}w.a8(0)},
K7(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdt()
if(l==null)return
w=l.z
v=B.T(w)
u=v.k("cP<1,m>")
t=B.df(new B.cP(new B.a_(w,new C.eve(),v.k("a_<1>")),new C.evf(),u),u.k("J.E"))
w=this.ch
v=B.a6(w).k("cw<1>")
v=B.C(new B.cw(w,v),v.k("J.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.L)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.R$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bO(0)
p.h6()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.L)(v),++r){n=v[r]
if(n.b!==D.cP)continue
p=n.a
m=w.ca(0,p,new C.evg(n))
s.ca(0,p,new C.evh())
p=m.a.a
o=n.r
if(p!==o)m.saU(0,o)}},
HI(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b4(u.d,new C.eqE(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gOO()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.c9(u.d,0,u.e.hG())}u.of()
u.pn()},
aiZ(d,e){var w,v,u,t,s=this
if(s.kj())return
w=s.Xy(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kw(v.w))===!0
if(u){C.i3T(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdt()
if(t!=null)C.i3U(t,w.d+w.f*0.5)}}s.HI()
s.of()
s.pn()
if(u&&s.c!=null)s.m(new C.evr())},
cBZ(d,e){var w=this,v=w.gdt()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.HI()
w.of()
w.pn()},
gdt(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gqp(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.i1V(o)
if(w!=null)return w
v=q.gdt()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gH(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bYr(v)
t=q.bYq(v)
s=B.b0(v.e)
r=v.f
return new C.jE(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hFG(o)},
bYr(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(t.b===D.cP)s=t.w>=28||A.o.D(A.o.am(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bYq(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cP&&t.w<28)return B.b0(t.Q)}return A.aJ},
aeU(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gabr()){w.c.I(x.q).f.S(D.eYS)
return}w.aaf(d)
w.b_D(C.bBd(d))
return}if(C.cf_(v)){w.aaf(d)
w.b_D(d)
return}w.m(new C.esz(w,d))},
ari(){var w,v,u,t,s,r,q=this
q.a24(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kw(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eqC(q))
if(r&&q.c!=null){u.toString
q.JH(u,s)}return}q.tA()
q.m(new C.eqD(q))},
b_C(d){this.aaf(d)
this.a_z(d,!0)},
aaf(d){if(!C.kw(d.w))return
C.fEP(d,this.d)},
a_z(d,e){return this.cdi(d,e)},
b_D(d){return this.a_z(d,!1)},
cdi(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a_z=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bBd(d)
if(e){r=s.x
q=A.a.i(r==null?t.gOO():r)
t.dy.W(0,q.toLowerCase())
C.apz(t.a.c,q)}r=s}else r=d
w=C.cf_(r.w)?3:4
break
case 3:w=5
return B.b(t.aag(r),$async$a_z)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b4(t.d,new C.esW(l))
o=l.a.hG()
n=C.kw(o.w)&&C.i54(o)
t.m(new C.esX(t,o,p))
if(n){m=A.d.bg(t.d,new C.esY(o))
if(m>=0){t.d[m]=o.hG()
t.tA()}}if(!t.abW(l.a))t.YI()
r=!1
if(t.c!=null)if(!t.abW(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.aqJ(r)&&C.fAS(l.a)}else l=r
else l=r
if(l)t.c.I(x.q).f.S(D.eZs)
case 1:return B.h(u,v)}})
return B.i($async$a_z,v)},
aag(d){return this.bNb(d)},
bNb(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$aag=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lj(r.c,A.zq),$async$aag)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kV(!1,r,s.c,s.d,null,A.zq,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aag,v)},
o6(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$o6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cf_(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cep(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$o6,v)},
aeB(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aeB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.esy(),s,null,!0,!0,x.H),$async$aeB)
case 3:if(t.c==null){w=1
break}t.ari()
case 1:return B.h(u,v)}})
return B.i($async$aeB,v)},
aeA(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aeA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.esv(),s,null,!0,!0,x.H),$async$aeA)
case 3:if(t.c==null){w=1
break}t.m(new C.esw())
t.ari()
case 1:return B.h(u,v)}})
return B.i($async$aeA,v)},
YI(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$YI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ay(),$async$YI)
case 3:r=e
if(B.jJ(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.aq("Bool","ngmy_marriage_hint_seen",!0),$async$YI)
case 4:s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(D.eXu)
case 1:return B.h(u,v)}})
return B.i($async$YI,v)},
JH(d,e){return this.cnG(d,e)},
cnG(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$JH=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.agi(s,t.gEp(),t.gEo(),!0,e,t.d),$async$JH)
case 9:w=4
break
case 6:w=10
return B.b(C.agj(s,t.gEp(),t.gEo(),!0,e,t.d),$async$JH)
case 10:w=4
break
case 7:w=11
return B.b(C.agk(s,t.gEp(),t.gEo(),!0,e,t.d),$async$JH)
case 11:w=4
break
case 8:w=12
return B.b(C.agl(s,t.gEp(),t.gEo(),!0,e,t.d),$async$JH)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$JH,v)},
bZZ(){var w,v,u,t,s=this
if(!s.gabr()){s.c.I(x.q).f.S(D.eXH)
return}w=s.gOO()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.agh(u,t,v,new C.erO(s),new C.erP(s),w)},
aeV(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aeV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bQ(A.dG,null,new C.esF(u),s,!0,!0,!1,A.lz,!1,!1,x.N),$async$aeV)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.agl(s,u.gEp(),u.gEo(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.agi(s,u.gEp(),u.gEo(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.agj(s,u.gEp(),u.gEo(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.agk(s,u.gEp(),u.gEo(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bZZ()
return B.h(null,v)}})
return B.i($async$aeV,v)},
ccp(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aZq()
w=C.cB()
v=C.BJ(t,t,t,t,D.CQ,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.esG(u,v))},
a9G(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a9G=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qk()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i9A(s),$async$a9G)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d8(q.r,new C.eqG())
t.d4(new C.eqH(t,p,q,r))
s=t.c.I(x.q).f
o=r.r.length
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9G,v)},
agT(d,e,f,g){var w=null,v=g?A.dB:A.bM,u=B.I(g?A.b2:A.cr,A.q,1)
return B.hw(B.aB(w,B.p(w,B.X(d,g?A.c:A.aJ,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a5),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a7),w,e,w,w)},
a_y(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_y=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qk()){w=1
break}s=t.jW()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.T(r).k("a_<1>")
p=B.C(new B.a_(r,new C.esR(),q),q.k("J.E"))}o=s!=null&&s.b===D.ly?B.a([s],x.u):p
if(o.length===0){t.c.I(x.q).f.S(D.eZD)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bQ(A.K,null,new C.esS(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a_y)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_y,v)},
afb(){return this.cdh()},
cdh(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$afb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qk()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i9m(s,t.f+1,o),$async$afb)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.U
q=B.kE(s,B.T(s).c)
p.a=A.d.bg(o.r,new C.esU(q))
t.d4(new C.esV(p,t,o,q,r))
t.c.I(x.q).f.S(D.f_1)
case 1:return B.h(u,v)}})
return B.i($async$afb,v)},
afi(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$afi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qk()||!t.zR()){w=1
break}s=t.gdt()
if(s==null){w=1
break}r=s.z
q=B.T(r).k("a_<1>")
p=B.C(new B.a_(r,new C.etb(),q),q.k("J.E"))
if(p.length===0){t.c.I(x.q).f.S(D.eXf)
w=1
break}o=new B.M(p,new C.etc(),B.T(p).k("M<1,K>")).fn(0,new C.etd())
r=B.U(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.L)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.ar(new B.ba(l,A.b3,A.aM),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bQ(A.K,null,new C.ete(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$afi)
case 3:for(r=new B.du(r,r.r,r.e);r.C();){q=r.d
q.R$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.etf())
case 1:return B.h(u,v)}})
return B.i($async$afi,v)},
aeY(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$aeY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qk()){w=1
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
return B.b(C.ho3(s,new C.Eu(r,q,p,o==null?"":o)),$async$aeY)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d4(new C.esH(m,n))
s=t.c.I(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.agH(r)
r=B.u(r==null?null:r.b)+" will play after your last slide."}s.S(B.b2(null,null,null,null,null,A.r,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aeY,v)},
aa9(){return this.bMx()},
bMx(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aa9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qk()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i9z(s,t.f+1,l),$async$aa9)
case 3:r=e
q=$.fXD
$.fXD=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d4(new C.eqX())
t.c.I(x.q).f.S(D.eX6)
w=1
break}if(!q){s=r.CW
s=C.hmR(l,s==null?"":s,!1)}else s=!1
if(s){t.d4(new C.eqY(t,l,r))
t.c.I(x.q).f.S(D.f_v)
w=1
break}s=l.cx
if(s==null)s=A.U
p=B.kE(s,B.T(s).c)
s=l.r
m.a=A.d.bg(s,new C.eqZ(p))
o=s.length
t.d4(new C.er_(m,t,l,p,r))
n=s.length-o
s=t.c.I(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aa9,v)},
aPX(d,e){if(e){this.afL()
return}this.ccp(d,!1)},
bI7(){return this.aPX(null,!1)},
afL(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bQ(A.bY,null,new C.etl(t),r,!0,!0,!0,A.pe,!1,!1,x.N),$async$afL)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.etm(t,C.i1U(s).pA()))
case 1:return B.h(u,v)}})
return B.i($async$afL,v)},
d4(d){var w=this
if(w.qk())return
w.HI()
w.aZq()
w.m(d)
w.K7()
w.of()
w.pn()},
a8a(){this.d4(new C.epB(this,D.mE))},
aRp(){var w=this.gdt()
if(w==null)return
this.d4(new C.eqV(this,w))},
aQy(){var w=this.e
if(w==null||w.r.length<=1)return
this.d4(new C.eqT(this))},
b2B(d,e){if(this.e==null||d===e)return
this.d4(new C.etu(this,d,e))},
O1(d){return this.bK7(d)},
bK7(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$O1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gOO():s)
w=5
return B.b(C.apx(t.a.c,r),$async$O1)
case 5:t.dy.L(0,r.toLowerCase())
case 4:s=d.a
C.ar_(s)
w=6
return B.b(C.b0G(t.a.c,s),$async$O1)
case 6:if(t.c==null){w=1
break}t.m(new C.eqP(t,d))
w=7
return B.b(t.tA(),$async$O1)
case 7:case 1:return B.h(u,v)}})
return B.i($async$O1,v)},
cnD(d,e){var w=this
if(d.z){w.aiD()
return}w.m(new C.ett(w,d,e))
w.pn()},
jW(){var w,v,u,t,s,r=this.gdt()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Wz(d){return this.ch.ca(0,d.a,new C.eqF(d))},
at9(d){return this.CW.ca(0,d.a,new C.erg())},
a24(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Xy(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aV.aj$.d.c
if(u!=null)u.jN()},
b60(){return this.a24(!0)},
a20(d){var w,v,u=this
if(u.qk())return
if(!u.zR())return
w=u.Xy(d)
if(w==null||w.b!==D.cP)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Wz(w).saU(0,"")}u.m(new C.evb(u,d))
$.aV.x1$.push(new C.evc(u,d,w))},
b6y(d){var w=this
if(d.b===D.cP&&!w.kj()&&w.zR()){w.a20(d.a)
return}w.azt(d.a)},
azt(d){var w,v,u,t,s,r=this
if(r.kj())return
w=r.r
if(w!=null&&w!==d){v=r.Xy(w)
if(v!=null&&v.b===D.cP){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.euB(r,s,d))
if(s||d==null){t=$.aV.aj$.d.c
if(t!=null)t.jN()}},
aMe(){this.d4(new C.epC(this))},
p6(d){return this.bzd(d)},
bzd(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$p6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$p6)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d4(new C.epz(t,d))
case 1:return B.h(u,v)}})
return B.i($async$p6,v)},
VI(){var w=0,v=B.j(x.H),u,t=this,s
var $async$VI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.GB(78,1920),$async$VI)
case 3:s=e
if(s==null||t.gdt()==null){w=1
break}t.d4(new C.epp(t,s))
case 1:return B.h(u,v)}})
return B.i($async$VI,v)},
VC(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$VC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdt()==null){w=1
break}w=3
return B.b(S.CQ(t.a.c),$async$VC)
case 3:s=e
if(t.c==null){w=1
break}r=J.a3(s)
if(r.gal(s)){t.c.I(x.q).f.S(D.f04)
w=1
break}w=r.gM(s)===1?4:6
break
case 4:q=r.gH(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bQ(null,null,new C.epm(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$VC)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdt()==null){w=1
break}t.d4(new C.epn(t,q))
case 1:return B.h(u,v)}})
return B.i($async$VC,v)},
as8(){var w=this,v=w.r
if(v==null||w.gdt()==null)return
if(A.d.b4(w.gdt().z,new C.eqR(v))){w.c.I(x.q).f.S(D.f_5)
return}if(w.w===v)w.a24(!0)
w.d4(new C.eqS(w,v))},
bGp(){var w=this.jW(),v=w==null
if((v?null:w.b)===D.f5)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cP)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aMV(d,e){var w=this,v=w.jW(),u=w.gdt(),t=w.e
if(t==null)return
w.d4(new C.eq3(w,v,d,e,t,u))},
bAO(d){return this.aMV(d,null)},
a8s(d){return this.bAW(d)},
bAW(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a8s=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a73.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.o6(),$async$a8s)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jW()
if(s!=null){r=s.b
if(r===D.cP)t.bAO(s.w>=28||s.x.gdL(0)>=A.H.gdL(0)?d.d:d.e)
else if(r===D.f5){r=d.c
t.aMV(r.j(0.88),r)}w=1
break}t.d4(new C.eq8(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a8s,v)},
a8r(d){return this.bAU(d)},
bAU(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a8r=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jW()
r=t.gdt()
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
return B.b(t.o6(),$async$a8r)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d4(new C.eq6(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a8r,v)},
bAE(d){var w=this.gdt()
if(w==null)return
this.d4(new C.eq2(this,w,d))},
a_E(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_E=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.i9v(r),$async$a_E)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.of()
t.m(new C.et5(t,s))
w=4
return B.b(t.tA(),$async$a_E)
case 4:if(t.c!=null)t.aeU(s)
case 1:return B.h(u,v)}})
return B.i($async$a_E,v)},
aa1(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aa1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a24(!0)
t.of()
s=t.c
s.toString
w=3
return B.b(C.R3(s,q),$async$aa1)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.I(x.q).f
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aa1,v)},
Dy(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Dy=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.of()
t=4
w=7
return B.b(C.aPs(m),$async$Dy)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aOT(o,q,m.b),$async$Dy)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.ab(l)
o=r.c
if(o==null){w=1
break}o.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.u(p),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Dy,v)},
Fc(d,e){return this.cAk(d,e)},
cAk(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Fc=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qk()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a24(!0)
t.of()
s=h.a=t.e.hG()}else{r=A.d.bg(t.d,new C.evk(d))
s=h.a=r>=0?t.d[r].hG():d.hG()}s=s.w
q=s==null
p=C.i2S(q?"":s)
o=C.hlM(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.T(s).k("a_<1>")
n=B.C(new B.a_(s,new C.evl(h,p),q),q.k("J.E"))
s=h.a.b
w=3
return B.b(t.ctx(n.length,o,s),$async$Fc)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.i2M(h.a)
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
return B.b(t.ctw(n,o),$async$Fc)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.fZ(t.d,new C.evm(s))
s=h.a.b
w=11
return B.b(t.ctu(k.b,s),$async$Fc)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hG()
case 5:j=C.i2R(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.I(x.q).f.S(D.f0g)
w=1
break}w=12
return B.b(t.ctv(j.a,s,o,j.c),$async$Fc)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.evn(h,t,i))
t.pn()
case 1:return B.h(u,v)}})
return B.i($async$Fc,v)},
ctx(d,e,f){var w=this.c
w.toString
return B.bQ(A.K,null,new C.euR(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
ctw(d,e){var w=this.c
w.toString
return B.bQ(A.K,null,new C.euQ(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
ctu(d,e){var w=this.c
w.toString
return B.bQ(A.K,null,new C.euK(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
ctv(d,e,f,g){var w=this.c
w.toString
return B.bQ(A.K,null,new C.euM(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
abv(){var w=null
return B.au(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
abw(d,e,f,g){var w,v,u=null,t=B.n(16),s=B.aq(d,A.bY,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dn,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a8(A.ay,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.eo,B.E(B.w(B.a([B.d(g,u,u,u,u,u,u,D.faI,u,u,u),A.an,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a6,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aUI(d,e){var w=null,v=e.j(0.14),u=B.n(12),t=B.I(e.j(0.22),A.q,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.U1,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bT,w,w,w)},
aUL(d,e,f,g,h,i,j){var w=null,v=B.n(16),u=B.n(16),t=g?new B.a8(A.ay,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.q,1),q=d.j(g?0.22:0.14),p=B.n(13),o=x.p
return B.aF(!1,A.a1,!0,w,B.aL(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bc,B.E(B.w(B.a([B.d(i,w,w,w,w,w,w,A.mK,w,w,w),A.cR,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a6,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.X(A.BG,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.erK(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
bXn(d,e,f,g,h,i){return this.aUL(d,e,f,!1,g,h,i)},
aut(d,e){var w=null,v=A.c.j(0.05),u=B.n(14),t=B.I(A.c.j(0.08),A.q,1)
return B.p(w,B.w(B.a([B.d(e,w,w,w,w,w,w,A.de,w,w,w),A.bz,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.Zt,w,w,w)},
aUK(d,e,f){var w=null,v=B.bm(A.c.j(0.08),w,w,w,A.c,w,A.ck,w,new B.b7(B.n(14),A.W),w,w,w)
return B.bG(B.d(e,w,w,w,w,w,w,A.nv,w,w,w),new C.erJ(d,f),v)},
aUJ(d,e){return this.aUK(d,e,null)},
JZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$JZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.p6(l,s.c,s.d),$async$JZ)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aJ("=",l.length)+"\n\n"
q=new B.fe(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gae(o.z),n=new B.f4(l,new C.euC());n.C();){m=l.gT(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aK(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a9I(l.charCodeAt(0)==0?l:l,r.b),$async$JZ)
case 4:l=t.a
w=5
return B.b(B.p5(l.c,l.d),$async$JZ)
case 5:case 1:return B.h(u,v)}})
return B.i($async$JZ,v)},
I3(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$I3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.p6(q,s.c,s.d),$async$I3)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a9I(A.S.ao(r.ag(),null),r.b+".json"),$async$I3)
case 4:q=t.a
w=5
return B.b(B.p5(q.c,q.d),$async$I3)
case 5:case 1:return B.h(u,v)}})
return B.i($async$I3,v)},
b5L(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.of()
u.tA()
w=u.c
w.toString
v=B.e9(new C.eva(u,t),!1,null,x.z)
B.a4(w,!1).cm(v)},
Hh(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Hh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$Hh)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fF1(),$async$Hh)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.i5E(s.a)
q=t.c
q.toString
w=5
return B.b(B.bQ(A.av,null,new C.epu(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$Hh)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d4(new C.epv(t,s))
w=1
break}if(p==="split")t.d4(new C.epw(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$Hh,v)},
Nn(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Nn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qk()){w=1
break}w=3
return B.b(t.o6(),$async$Nn)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aPr(s,null,null),$async$Nn)
case 4:r=e
if(r==null||t.gdt()==null){w=1
break}t.d4(new C.epA(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Nn,v)},
b2o(d){var w=this.e
if(w==null||!C.kw(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aOd(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aPr(s,t==null?null:B.b0(t),u)},
a88(d){return this.bz4(d)},
bz4(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a88=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qk()){w=1
break}if(!t.zR()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(D.f0v)
w=1
break}w=3
return B.b(t.aOd(),$async$a88)
case 3:r=f
if(r==null||t.gdt()==null){w=1
break}t.d4(new C.epr(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a88,v)},
agw(d){return this.cmq(d)},
cmq(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agw=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qk()){w=1
break}if(!t.zR()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(D.f_D)
w=1
break}w=3
return B.b(t.aOd(),$async$agw)
case 3:r=f
if(r==null||t.gdt()==null){w=1
break}t.d4(new C.etr(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$agw,v)},
c96(){var w,v,u=this
if(u.kj())return
w=new B.S(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bz(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.czk()}},
czk(){var w,v,u,t,s,r=this.gdt()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d4(new C.evi(this,r,(A.o.aC(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bXI(){var w,v,u,t,s,r=this.gdt()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d4(new C.erN(this,r,u.d))},
c1m(d){var w
if(this.kj())return!1
w=this.e
if((w==null?null:C.kw(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fBD(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.l6&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c1n(d){var w
if(this.kj())return!1
w=this.e
if((w==null?null:C.kw(w.w))!==!0)return!0
if(!this.zR())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fBD(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.l6&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
Nw(d){return this.bBl(d)},
bBl(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Nw=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qk()){w=1
break}if(!t.zR()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(D.eZt)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.apB(p),$async$Nw)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.I(x.q).f.S(D.f_7)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gH(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a71(r)
w=1
break}t.m(new C.eqc(t,d,o))
t.of()
$.aV.x1$.push(new C.eqd(t))
case 1:return B.h(u,v)}})
return B.i($async$Nw,v)},
VG(){var w=0,v=B.j(x.H),u,t=this,s
var $async$VG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$VG)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bBU(),$async$VG)
case 4:s=e
if(s==null||t.gdt()==null){w=1
break}t.d4(new C.epo(t,s))
case 1:return B.h(u,v)}})
return B.i($async$VG,v)},
Of(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Of=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$Of)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jW()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fET(r),$async$Of)
case 4:q=e
if(q==null){w=1
break}t.d4(new C.ere(s,q))
case 1:return B.h(u,v)}})
return B.i($async$Of,v)},
j3(d){this.d4(new C.epx(this,d))},
qa(d){return this.bAx(d)},
bAx(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qa=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qk()){w=1
break}m=!D.aNM.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.o6(),$async$qa)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.Hh()
w=1
break A
case"sign_paper":t.Nn()
w=1
break A
case"hd_photo":t.VG()
w=1
break A
case"sharpen":t.Of()
w=1
break A
case"print":t.Dy()
w=1
break A
case"rotate":s=t.jW()
if(s!=null)t.d4(new C.epG(s))
w=1
break A
case"text_box":t.aMe()
w=1
break A
case"picture":t.VI()
w=1
break A
case"present":t.b5L()
w=1
break A
case"new_slide":t.a8a()
w=1
break A
case"export_json":t.I3()
w=1
break A
case"outline_share":t.JZ()
w=1
break A
case"flashcard_tool":t.vb(D.I2)
w=1
break A
case"quiz_tool":t.vb(D.I3)
w=1
break A
case"worksheet_tool":t.vb(D.I4)
w=1
break A
case"duplicate_el":s=t.jW()
if(s==null){w=1
break A}t.d4(new C.epH(t,s))
w=1
break A
case"delete_el":t.as8()
w=1
break A
case"bring_fwd":s=t.jW()
if(s==null||t.gdt()==null){w=1
break A}t.d4(new C.epI(t,s))
w=1
break A
case"send_back":s=t.jW()
if(s==null||t.gdt()==null){w=1
break A}t.d4(new C.epT(t,s))
w=1
break A
case"align_left":s=t.jW()
if(s!=null)t.d4(new C.epW(s))
w=1
break A
case"align_center":s=t.jW()
if(s!=null)t.d4(new C.epX(s))
w=1
break A
case"align_right":s=t.jW()
if(s!=null)t.d4(new C.epY(s))
w=1
break A
case"grayscale":case"brighten":t.Of()
w=1
break A
case"flip_h":s=t.jW()
if(s!=null)t.d4(new C.epZ(s))
w=1
break A
case"flip_v":s=t.jW()
if(s!=null)t.d4(new C.eq_(s))
w=1
break A
case"rectangle":t.p6(D.bg)
w=1
break A
case"circle":t.p6(D.eN)
w=1
break A
case"triangle":t.p6(D.jP)
w=1
break A
case"arrow":t.p6(D.CS)
w=1
break A
case"line":case"divider":t.p6(D.fr)
w=1
break A
case"word_count":r=t.gdt()
if(r==null){w=1
break A}for(q=A.d.gae(r.z),p=new B.f4(q,new C.eq0()),o=0;p.C();){n=A.a.fF(A.a.i(q.gT(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.a_(n,new C.eq1(),B.T(n).k("a_<1>")).gM(0)}t.c.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cB()
t.j3(C.iX(A.L,!1,t.gqp().d.l(),A.aD,40,A.bo,A.u,0.18,q,"Presentation Title",0,D.mF,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cB()
t.j3(C.iX(A.L,!1,t.gqp().e.l(),A.aD,22,A.bo,A.a6,0.12,q,"Subtitle goes here",0,D.df,0.8,0.1,0.48))
w=1
break A
case"bullets":t.j3(C.iX(A.bh,!0,4279310375,A.aD,20,A.bo,A.a6,0.5,C.cB(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.uu,0.8,0.1,0.22))
w=1
break A
case"numbered":t.j3(C.iX(A.bh,!1,4279310375,A.aD,20,A.bo,A.a6,0.5,C.cB(),"1. First item\n2. Second item\n3. Third item",0,D.ut,0.8,0.1,0.22))
w=1
break A
case"quote":t.j3(C.iX(A.L,!1,4279310375,A.aD,24,A.cE,A.a6,0.25,C.cB(),'"Insert meaningful quote here."',0,D.df,0.8,0.1,0.3))
w=1
break A
case"citation":t.j3(C.iX(A.bh,!1,4284773515,A.aD,14,A.bo,A.a6,0.1,C.cB(),"Author, Title (Year). Publisher.",0,D.uu,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.j3(C.iX(A.dP,!1,4279310375,A.aD,14,A.bo,A.a6,0.08,C.cB(),C.bBW(),0,D.df,0.24,0.72,0.04))
w=1
break A
case"page_number":t.j3(C.iX(A.dP,!1,4279310375,A.aD,13,A.bo,A.a6,0.06,C.cB(),"Page "+(t.f+1),0,D.df,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d4(new C.epJ(t))
w=1
break A
case"footer_bar":t.d4(new C.epK(t))
w=1
break A
case"highlight":t.d4(new C.epL(t))
w=1
break A
case"redact":t.d4(new C.epM(t))
w=1
break A
case"callout":t.d4(new C.epN(t))
w=1
break A
case"checkboxes":t.j3(C.iX(A.bh,!1,4279310375,A.aD,20,A.bo,A.a6,0.45,C.cB(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.df,0.8,0.1,0.2))
w=1
break A
case"table":t.j3(C.iX(A.bh,!1,4279310375,A.aD,16,A.bo,A.a6,0.55,C.cB(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.df,0.8,0.1,0.18))
w=1
break A
case"memo":t.d4(new C.epO(t))
w=1
break A
case"letter":t.j3(C.iX(A.bh,!1,4279179050,A.aD,17,A.bo,A.a6,0.82,C.cB(),C.bBW()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.df,0.8,0.1,0.08))
w=1
break A
case"agenda":t.j3(C.iX(A.bh,!1,4279310375,A.aD,22,A.bo,A.O,0.76,C.cB(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.uu,0.8,0.1,0.12))
w=1
break A
case"toc":t.j3(C.iX(A.bh,!1,4279310375,A.aD,18,A.bo,A.a6,0.76,C.cB(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.df,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.j3(C.iX(A.bh,!1,4279310375,A.aD,16,A.bo,A.a6,0.08,C.cB(),"Signature: _________________________",0,D.df,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.j3(C.iX(A.bh,!1,4279310375,A.aD,16,A.bo,A.a6,0.08,C.cB(),"Initials: ______",0,D.df,0.3,0.65,0.78))
w=1
break A
case"approved":t.j3(C.iX(A.L,!1,4278556265,A.aD,28,A.bo,A.u,0.12,C.cB(),"APPROVED",0,D.mF,0.32,0.62,0.08))
w=1
break A
case"draft":t.j3(C.iX(A.L,!1,4292617766,A.aD,28,A.bo,A.u,0.12,C.cB(),"DRAFT",0,D.df,0.32,0.62,0.08))
w=1
break A
case"confidential":t.j3(C.iX(A.L,!1,871318596,A.aD,36,A.bo,A.u,0.12,C.cB(),"CONFIDENTIAL",0,D.df,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d4(new C.epP(t))
w=1
break A
case"progress":t.d4(new C.epQ(t))
w=1
break A
case"stars":t.j3(C.iX(A.L,!1,4279310375,A.aD,36,A.bo,A.a6,0.12,C.cB(),"\u2605\u2605\u2605\u2605\u2606",0,D.qk,0.8,0.1,0.4))
w=1
break A
case"equation":t.j3(C.iX(A.L,!1,4279310375,A.aD,32,A.bo,A.O,0.14,C.cB(),"y = mx + b",0,D.df,0.8,0.1,0.38))
w=1
break A
case"timeline":t.j3(C.iX(A.L,!1,4279310375,A.aD,18,A.bo,A.a6,0.2,C.cB(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.ut,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d4(new C.epR(t))
w=1
break A
case"compare":t.d4(new C.epS(t))
w=1
break A
case"link_text":t.j3(C.iX(A.bh,!1,4280640491,A.mJ,16,A.bo,A.a6,0.1,C.cB(),"https://example.com",0,D.df,0.8,0.1,0.5))
w=1
break A
case"phone":t.j3(C.iX(A.bh,!1,4279310375,A.aD,18,A.bo,A.a6,0.1,C.cB(),"(555) 123-4567",0,D.df,0.8,0.1,0.5))
w=1
break A
case"email":t.j3(C.iX(A.bh,!1,4280640491,A.aD,18,A.bo,A.a6,0.1,C.cB(),"name@email.com",0,D.df,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d4(new C.epU(t))
w=1
break A
case"cover_page":r=t.gdt()
if(r==null){w=1
break A}t.d4(new C.epV(t,r))
w=1
break A
case"invoice":t.j3(C.iX(A.bh,!1,4279179050,A.aD,16,A.bo,A.a6,0.84,C.cB(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.df,0.8,0.1,0.08))
w=1
break A
case"resume":t.j3(C.iX(A.bh,!1,4279179050,A.aD,17,A.bo,A.a6,0.84,C.cB(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.df,0.8,0.1,0.08))
w=1
break A
case"minutes":t.j3(C.iX(A.bh,!1,4279310375,A.aD,16,A.bo,A.a6,0.88,C.cB(),"MEETING MINUTES\nDate: "+C.bBW()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.df,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.j3(C.iX(A.bh,!1,4279310375,A.aD,17,A.bo,A.a6,0.88,C.cB(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.df,0.8,0.1,0.06))
w=1
break A
case"rubric":t.j3(C.iX(A.bh,!1,4279310375,A.aD,15,A.bo,A.a6,0.8,C.cB(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.df,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qa,v)},
csY(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eRT.t(0,this.z)},
csX(d){if(this.jW()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b7o(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cl,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.n(12)
u=e?f:A.bE
u=B.I(u,A.q,o&&e?2:1)
t=C.i5t(d)
s=o?12:18
r=o?A.H:A.cM
if(o)if(e)q=f
else q=g?A.ad:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.O6,A.f,p,p,D.E9,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fB,B.aB(p,new B.an(A.V,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a7),p)},
bMN(d){var w,v=null,u=this.jW()
if(u==null)return A.bI
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aA:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.M(D.QC,new C.erd(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.j,0,v,v)},
vb(d){return this.bzc(d)},
bzc(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vb=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aNG.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.o6(),$async$vb)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d4(new C.epy(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vb,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eQA
w=h.e
if(w==null)return h.bD4()
v=h.gdt()
v.toString
u=h.c
u.toString
t=B.P(u).ax.a===A.I
u=h.c
u.toString
s=x.w
r=B.aH(u,A.bW,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aH(u,A.eI,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bY:D.bbP
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gSh()}else j=!1
if(j)k.push(new C.a7w(h.a.c,!1,h.e.gb9C(),h.gc93(),g))
else if(s&&h.e!=null&&!h.kj()&&C.cf_(h.e.w)){j=h.a
k.push(new C.a7w(j.c,j.d,g,h.gcac(),g))}if(s)k.push(h.bMJ(w,t,r))
if(s&&h.kj()){w=t?A.fy:A.ku
j=B.n(14)
i=B.I(A.bi.j(0.35),A.q,1)
k.push(B.p(g,B.B(B.a([D.bNW,A.ab,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fy,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.B9,A.im,g,g,g))}w=!n
if(w&&!h.kj())k.push(h.c2i(t,r))
if(w&&h.kj())k.push(h.cAl(t))
if(r&&h.jW()!=null&&w&&!h.kj())k.push(h.c2e(t))
j=B.a([],l)
if(q&&w)j.push(new B.a7(132,g,h.b5e(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a7(g,72,h.b5e(t,!1),g))
i.push(B.E(new B.bI(A.b1,g,g,h.bEo(v,t,!s||p),g),1))
if(h.csY(r)&&u&&s&&!h.kj())i.push(h.c8R(v,t,r))
j.push(B.E(B.w(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.kj()&&h.csX(!1))j.push(new B.a7(240,g,h.bPr(t),g))
k.push(B.E(B.B(j,A.ai,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a7(g,r?72:h.a.e,g,g))
w=B.a([B.w(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c2f(t))
return B.c6(g,m,B.bl(!1,new B.an(A.V,g,A.aa,A.r,w,g),!0,!1,A.ae,!0,!0),g,!1,!1,g,!1)},
bD4(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.I
p=w?A.bY:A.bM
v=r.a.e
u=r.c86(A.bi,A.q0,new C.eqg(r),r.gccm(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.E(r.aLX(A.bi,A.hz,"Blank Presentation",new C.eqh(r)),1),A.at,B.E(r.aLX(A.aZ,A.vY,"Class Template",new C.eqi(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.bw,s,A.mI,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.bA_(w))
else{t=new B.i1(t,B.T(t).k("i1<1>"))
A.d.v(u,t.gdQ(t).dB(0,new C.eqj(r,w),x.l))}return B.c6(q,p,B.bl(!1,B.ct(u,q,new B.Q(18,12,18,v),q,q,A.ah,!1),!0,!1,A.ae,!0,!0),q,!1,!1,q,q)},
bKV(){this.m(new C.eqU(this))
var w=this.c
w.toString
if(B.aH(w,A.bW,x.w).w.a.a<900){w=$.aV.aj$.d.c
if(w!=null)w.jN()}},
afc(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jW()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bQ(A.K,null,new C.et4(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$afc)
case 3:case 1:return B.h(u,v)}})
return B.i($async$afc,v)},
AO(d,e){return this.ctj(d,e)},
ctj(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$AO=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hX(D.WO,!0,"Dismiss",j,new C.euD(),new C.euE(d,e),A.iJ,!0,x.N),$async$AO)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.aiD()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gSh()){r.aiD()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aPs(d),$async$AO)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aOT(j,q,d.b),$async$AO)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.ab(i)
j=r.c
if(j==null){w=1
break}j.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.u(p),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.Fc(d,!1),$async$AO)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hX(D.WO,!0,"Dismiss",j,new C.euF(),new C.euG(d),A.a1,!0,x.y),$async$AO)
case 20:if(g===!0)r.O1(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.agf("Rename presentation",d.b),$async$AO)
case 24:l=g
if(l!=null)r.cnD(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ag()
k.n(0,"id",C.cB())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.euH(r,k))
r.pn()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AO,v)},
b0h(d,e){var w=null
return B.bK(!1,D.fzs,w,w,!0,w,w,e,w,B.fx(w,w,w,w,w,w,w,w,w,w,w,A.bi,w,w,w,A.az,w,A.lm,w,w,w,w,w,A.kc,w,w))},
bA_(d){var w=this.fy
w===$&&B.c()
return B.c7(w,new C.epD(this,d),null)},
bJ1(d,e,f){var w=new B.M(B.a(d.split(" \u2022 "),x.s),new C.eqI(),x.dv).c0(0,new C.eqJ()),v=B.C(w,w.$ti.k("J.E"))
return new B.D(G.ahr,this.aMw(v,e,new C.eqK(),f),null)},
aMw(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.eg)
t=e.j(g?0.14:0.1)
s=new B.aR(6,6)
r=new B.az(e.j(g?0.55:0.45),1,A.q,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ad:A.bq,n,n,n,10),A.qr],m))}p=d[v]
o=g?A.c.j(0.85):A.aJ
q.push(new B.y(p,n,new B.G(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.ck(A.aN,A.e,A.Q,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bO(r,r,r,r),new B.bo(s,s,s,s),n,n,A.n),n,n,n,n,A.ne,n,n,n))
A.d.v(l,u)}return B.eM(A.a3,B.B(l,A.m,n,A.e,A.Q,0,n,n),A.f,A.dZ)},
bzY(d,e,f){return this.aMw(d,e,null,f)},
bJ3(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dg0
else if(v==="hati_kuhoweya")w=D.d1w
else{if(v==="hati_kiapo_uongozi")v=D.cPc
else v=C.kw(v)?D.cWm:A.Qc
w=v}v=this.fy
v===$&&B.c()
return B.c7(v,new C.eqN(this,f,d,e,w),null)},
c2f(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jW()
if(i==null||i.b!==D.cP)return A.bI
w=k.Wz(i)
v=k.at9(i)
u=A.w.j(0.55)
t=x.p
s=B.bl(!1,new B.D(A.Bc,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b5,B.bK(!1,D.fv2,j,j,!0,j,j,new C.esd(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.ae,!0,!0)
r=d?A.av:A.c
q=B.n(18)
p=B.I(A.bi.j(0.45),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.h8,B.c0(new B.D(A.eR,B.aM(j,A.U,!0,j,!0,A.r,j,B.aN(),w,A.bi,j,j,j,j,2,D.bTW,A.y,!0,j,!0,j,!0,v,A.aj,j,j,j,j,j,A.ww,j,j,j,j,j,j,!1,"\u2022",j,new C.ese(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a4,A.zI,A.am,j,A.Tx,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.be),j),1)
q=B.n(16)
p=d?A.bm:A.c
o=B.I(d?A.aJ:A.aL,A.q,1)
n=B.E(B.cc(B.B(B.a([k.tY(G.Na,j,new C.esf(k,i),d),k.tY(G.a_D,j,new C.esg(k,i),d),k.tY(I.alK,j,new C.esh(k,i),d),k.tY(I.a0i,j,new C.esi(k,i),d),k.tY(k.bzW(i.as),j,new C.esj(k,i),d),k.tY(D.amS,j,new C.esk(k,i),d),k.tY(D.amR,j,new C.esl(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.r,j,A.y,j,j,j,j,A.aN),1)
m=A.k.N(i.w)
return B.bT(0,B.aF(!1,A.a1,!0,j,B.w(B.a([s,r,new B.D(H.ahA,B.p(j,B.B(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aA:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.db],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.ln,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ag),0,0,0)},
c2e(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jW()
if(m==null)return A.bI
w=m.b
v=w===D.cP
u=B.n(18)
t=x.O
t=d?B.a([A.bm,A.M],t):B.a([A.c,A.aO],t)
s=B.I(d?A.aJ:A.aL,A.q,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cz,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b3T(A.jp,"Edit",new C.erZ(o,m),d,!0))
if(w===D.ly)p.push(o.b3T(A.Gt,"Shape & ring",new C.es_(o),d,!0))
p.push(o.tY(A.C0,"Format",new C.es0(o),d))
if(v)A.d.v(p,B.a([o.tY(G.Na,n,new C.es1(o,m),d),o.tY(D.amS,n,new C.es2(o,m),d),o.tY(D.amR,n,new C.es3(o,m),d)],q))
p.push(A.b5)
p.push(o.cr8(A.ef,n,o.gaQw(),d,!0))
p.push(o.tY(A.hA,"Done",new C.es4(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a8(A.a3,A.a8,A.x,t,n,n),A.n),n,n,n,A.Ba,A.ln,n,n,n)},
bzW(d){switch(d.a){case 2:return D.a0f
case 1:case 5:return D.a0h
default:return D.a0g}},
c37(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dP
default:return A.bh}},
azs(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aw
else if(h)w=A.c
else{v=g?A.ad:A.aJ
w=v}v=B.n(12)
u=B.n(12)
t=h?L.GP:n
if(h)s=n
else s=g?A.c.j(0.06):A.bM
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.eg,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.pW,B.aF(!1,A.a1,!0,n,B.aL(!1,v,!1,B.eB(new B.D(new B.Q(q,8,q,8),B.B(o,A.m,n,A.e,A.Q,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ag),n)},
tY(d,e,f,g){return this.azs(d,e,f,g,!1,!1)},
b3T(d,e,f,g,h){return this.azs(d,e,f,g,h,!1)},
cr8(d,e,f,g,h){return this.azs(d,e,f,g,!1,h)},
bMJ(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.n(20),m=x.O
m=e?B.a([A.bm,A.M],m):B.a([A.c,A.mR],m)
w=B.I(e?A.aJ:A.nH,A.q,1.2)
v=B.a([new B.ac(0,A.G,A.bi.j(e?0.18:0.1),A.cz,18)],x.V)
u=p.a2u(A.eF,"Back",p.gbG9(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.db,B.E(B.B(B.a([new B.dq(1,A.cm,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.c_:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.ty,o,A.e,A.j,0,A.cW,o),1)],q)
if(!p.kj()){u=p.a2u(A.rg,"Undo",p.ax.length===0?o:p.gcAU(),e)
A.d.v(r,B.a([u,p.a2u(D.bHx,"Redo",p.ay.length===0?o:p.gcml(),e)],q))}r.push(p.a2u(A.yf,"PDF",new C.er6(p),e))
r.push(p.a2u(A.hB,"Download as video",new C.er7(p),e))
if(!p.kj())r.push(B.BW(o,o,B.X(A.o0,e?A.ad:A.bq,o,o,o,o),new C.er8(p),A.J,new C.er9(p),A.ae,"More",x.N))
r.push(A.db)
r.push(B.aF(!1,A.a1,!0,o,B.aL(!1,B.n(14),!0,B.eB(D.ec2,o,new B.o(o,o,o,B.n(14),o,L.GP,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaAg(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ag))
return B.p(o,B.B(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a8(A.ay,A.aC,A.x,m,o,o),A.n),o,o,o,D.bsM,D.bxU,o,o,o)},
cAl(d){var w=this,v=null,u=B.n(18),t=d?A.av.j(0.92):A.c.j(0.96),s=B.I(d?A.co:A.aL,A.q,1)
return B.p(v,B.cc(B.B(B.a([w.iP(A.u6,"Print",new C.evo(w),d),w.iP(A.yf,"Download PDF",new C.evp(w),d),w.iP(A.q6,"Present",w.gaAg(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.r,v,A.y,v,v,v,v,A.aN),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.B9,G.ajc,v,v,v)},
a2u(d,e,f,g){var w,v=null
if(f==null)w=g?A.b2:A.dq
else w=g?A.ad:A.aJ
return B.aI(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cc)},
c2i(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.n(18)
v=d?A.av.j(0.92):A.c.j(0.96)
u=B.I(d?A.co:A.aL,A.q,1)
t=x.f0
t=B.C(new B.M(p,new C.eso(r,d),t),t.k("ak.E"))
t.push(new B.D(X.aiS,new B.fg(new C.esp(r),q),q))
A.d.v(t,w?B.a([new B.D(R.tO,r.agT(A.lp,"Ending celebration",r.gccz(),d),q),new B.D(R.tO,r.agT(A.Gt,"Logo ring & frame",r.gcdf(),d),q)],x.p):A.jt)
A.d.v(t,w?B.a([new B.D(R.tO,r.agT(A.nh,"Look and feel",r.gcdg(),d),q),new B.D(R.tO,r.agT(A.p_,"Edit this slide's text",r.gcdN(),d),q)],x.p):A.jt)
t.push(new B.D(R.tO,B.hw(B.aB(q,B.p(q,D.eQ_,A.f,q,q,new B.o(q,q,q,B.n(999),B.a([new B.ac(0,A.G,O.li.j(0.4),A.J,10)],x.V),D.aoO,A.n),q,34,q,q,A.fY,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.esq(r),q,q,q,q,q,q,!1,A.a7),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cc(B.B(t,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,D.bym,q,q,A.aN)
s=e?8:10
return B.p(q,B.w(B.a([t,B.cc(r.coN(d),A.r,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aN)],x.p),A.ai,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.B9,q,q,q,q)},
coN(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.d9x[v]
u.a=null
s=u.a=t.b
w.push(e.lH(e.cqy(s),t.a,new C.etN(u,e),a3,D.aNG.t(0,s)))}w.push(e.iP(A.l_,"Notes Slide",new C.etO(e),a3))
w.push(e.lH(A.Gs,"Quiz",new C.etP(e),a3,!0))
w.push(e.lH(M.G4,"Worksheet",new C.eu_(e),a3,!0))
w.push(e.lH(W.Gy,"Flashcard",new C.eua(e),a3,!0))
w.push(e.lH(A.NY,"Lab Report",new C.eul(e),a3,!0))
w.push(e.lH(A.tZ,"Rubric",new C.eus(e),a3,!0))
w.push(e.lH(A.oU,"Minutes",new C.eut(e),a3,!0))
w.push(e.lH(A.o_,"Syllabus",new C.euu(e),a3,!0))
w.push(e.lH(A.a0O,"Timeline",new C.euv(e),a3,!0))
return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.daQ[v]
w.push(e.lH(r.b,r.c,new C.euw(e,r),a3,!D.aNM.t(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.B(B.a([e.iP(A.yy,a0,e.gaMd(),a3),e.iP(A.u3,"Picture",new C.etQ(e),a3),e.iP(A.ys,"Bio link",new C.etR(e),a3),e.iP(A.a0N,"Table",new C.etS(e),a3),e.iP(A.O1,"Sticky",new C.etT(e),a3),e.iP(A.u2,"Divider",new C.etU(e),a3),e.iP(A.C1,"Header",new C.etV(e),a3),e.lH(A3.vN,"Rectangle",new C.etW(e),a3,!0),e.lH(A.ra,"Circle",new C.etX(e),a3,!0),e.lH(A.a08,"Triangle",new C.etY(e),a3,!0),e.lH(A.lo,"Arrow",new C.etZ(e),a3,!0),e.lH(D.bG0,"Parallelogram",new C.eu0(e),a3,!0),e.lH(D.bIp,"Hexagon",new C.eu1(e),a3,!0),e.lH(A.u2,"Line",new C.eu2(e),a3,!0),e.lH(A.yf,"PDF",new C.eu3(e),a3,!0),e.lH(O.a0X,"Signature",new C.eu4(e),a3,!0),e.iP(A2.BP,"Quote",new C.eu5(e),a3),e.iP(D.a_L,a1,new C.eu6(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aH(w,A.bW,x.w).w
u=x.p
t=B.B(B.a([e.aN1("Wide 16:9",D.CQ,a3),e.aN1("Short 9:16",D.ob,a3),new B.D(A.fB,B.mH(D.bKy,d,D.fro,d,new C.eu7(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.B(B.a([e.bGo("This slide",!e.Q,a3,new C.eu8(e)),A.bp,e.aPc("All slides",e.Q,a3,new C.eu9(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bGp()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c_:A.bK,d,d,d,d,d,d,d,d,10,d,d,A.a6,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.M(D.a2N,new C.eub(e),n),n.k("ak.E"))
n=B.cc(B.B(n,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aN)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.dbQ[v]
j=B.b0(k)
i=new B.az(k===4294967295?A.dq:A.b2,1.5,A.q,-1)
l.push(new B.D(A.fB,B.aB(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bO(i,i,i,i),d,d,d,A.a5),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.euc(e,k),d,d,d,d,d,d,!1,A.a7),d))}l=B.cc(B.B(l,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aN)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bDd()
g=B.T(h).k("M<1,D>")
h=B.C(new B.M(h,new C.eud(e,a3),g),g.k("ak.E"))
return new B.a7(w.a.a-20,d,B.w(B.a([t,A.N,q,A.an,p,A.N,o,A.au,n,A.N,m,A.au,l,A.N,j,A.au,B.cc(B.B(h,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aN),A.an,e.c_5(a3)],u),A.F,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.jW()
w=e.c
w.toString
w=B.aH(w,A.bW,x.w).w
u=new C.etM(e)
t=new C.eux(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.QC,f.dy,new C.eue(e,u,f),A.aZ)
A.d.v(p,B.a([o,A.au,n,A.N,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.au],q))}q=e.gdt()
q=q==null?d:q.r
p.push(t.$4(D.QC,q,new C.euf(e,u),A.bi))
return new B.a7(w.a.a-20,d,B.w(p,A.F,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.iP(A.l_,w,new C.eug(e),a3),e.iP(A.u6,"Print deck",new C.euh(e),a3),e.lH(D.akN,"Export JSON",new C.eui(e),a3,!0),e.iP(A.fM,"Duplicate Slide",e.gaRo(),a3),e.iP(A.ef,a2,e.gaQx(),a3),e.cuF(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jW()
w=x.p
u=B.a([e.iP(D.a_L,a1,new C.euj(e),a3),e.iP(A.fM,"Duplicate",e.gaRo(),a3),e.iP(A.ef,a2,e.gaQx(),a3),e.iP(A.q6,"Present",e.gaAg(),a3),e.iP(A.BZ,a0,e.gaMd(),a3),e.iP(A.BT,"Fit Text",new C.euk(e),a3),e.iP(A.yf,"Download PDF",new C.eum(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iP(A.k8,"Transfer",new C.eun(e),a3))
if(f!=null){w=B.a([A.ab,e.iP(G.Na,"Bold",new C.euo(e,f),a3),e.iP(G.a_D,"Italic",new C.eup(e,f),a3),e.iP(G.ako,"Underline",new C.euq(e,f),a3),e.iP(Ad.Nb,"Bullets",new C.eur(e,f),a3),e.bPa(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bMN(a3))
w.push(e.iP(D.bEG,"Delete",e.gaQw(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.j,0,d,d)}},
aN1(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.ob
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a8z,t,t,t)],v)
if(w)A.d.v(u,B.a([A.db,D.bJK],v))
return new B.D(A.fB,B.j8(t,t,t,B.B(u,A.m,t,A.e,A.Q,0,t,t),t,new C.eqb(this,w,e),s===e,A.bi.j(0.25),t,t,t),t)},
cuF(d){var w,v,u,t,s,r=this,q=null,p=r.gdt()
if(p==null)return A.bI
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.b2:A.cr,A.q,1)
u=B.n(8)
t=B.X(A.G2,d?A.aA:A.ak,q,q,q,14)
s=B.aI(q,q,q,q,D.anO,q,q,q,new C.euU(r,p),q,q,q,q,q,A.cc)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bj,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aI(q,q,q,q,D.anF,q,q,q,new C.euV(r,p),q,q,q,q,q,A.cc)],x.p),A.m,q,A.e,A.Q,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.FJ,A.mt,q,q,q)},
cqy(d){switch(d.a){case 6:return W.Gy
case 7:return A.Gs
case 8:return M.G4
case 4:return A.C1
default:return A.l_}},
bPa(d,e){var w=null,v=B.I(e?A.b2:A.cr,A.q,1),u=B.n(8),t=B.aI(w,w,w,w,D.anO,w,w,w,new C.erj(this,d),w,w,w,w,w,A.cc),s=A.k.N(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bj,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aI(w,w,w,w,D.anF,w,w,w,new C.erk(this,d),w,w,w,w,w,A.cc)],x.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.xZ,A.mt,w,w,w)},
c_5(d){var w=null
return B.BW(B.Dj(B.X(A5.a_O,d?A.ad:A.bq,w,w,w,16),w,w,D.fwT,w,w,w),w,w,new C.erR(),A.J,this.gbAD(),A.cp,"Slide layout",x.fO)},
lH(d,e,f,g,h){var w=null,v=B.n(14),u=B.n(14),t=g?A.c.j(0.06):A.bM,s=B.I(g?A.dB:A.aL,A.q,1),r=x.p,q=B.a([B.X(d,g?A.dr:A.bi,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.O6,A.f,w,w,D.E9,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fB,B.aF(!1,A.a1,!0,w,B.aL(!1,v,!0,B.eB(new B.D(A.h8,B.w(B.a([new B.an(A.V,w,A.aa,A.f,q,w),A.cR,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aR:A.bq,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.Q,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w)},
iP(d,e,f,g){return this.lH(d,e,f,g,!1)},
b5e(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aN
v=B.hL(t,new C.ev5(u,s,e,d),s.r.length,A.cp,t,w,new C.ev6(e),!1)
s=d?A.av:A.bM
w=B.a([],x.p)
if(e&&!u.kj())w.push(new B.D(A.cp,B.HJ(E.ao0,new C.ev7(u),B.nA(t,A.bi,t,t,t,t,t,t,t,t,t,t,E.aOq,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.w(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bEo(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.ob?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.Q(u,u,u,u),new B.bI(A.b1,v,v,new B.fK(w,B.aB(v,B.cA(new C.eqA(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eqB(this),v,v,v,v,v,v,!1,A.a7),v),v),v)},
bEq(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kw(a9.w))===!0,b1=b0&&C.fBD(b3),b2=b0&&b3.b===D.l6&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.kj())v=!b0||a7.c1n(b3)
else v=!1
if(!a7.kj())u=!b0||a7.c1m(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.c9:A.bi
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.h_D(b3))o=a8
else if(p&&!a7.kj())o=a7.gc95()
else o=a7.kj()?a8:new C.eqo(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.ci:A.jI
i=w&&C.h_D(b3)&&a7.zR()?new C.eqp(a7,b3):a8
h=v&&b3.b===D.cP?new C.eqq(a7,b3):a8
g=u?new C.eqr(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bd
else e=q?A.bZ:r
else e=A.K
e=B.I(e,A.q,t?2:0)
d=B.n(t?6:0)
if(b1)a0=A.bZ.j(0.08)
else a0=b3.b===D.l6?A.K:a8
if(b1){a1=a7.kj()?"":"Tap to sign"
a1=B.au(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.bZ.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aH(a1,A.bW,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.zR()
a3=b3.b===D.cP
a4=a3?a7.Wz(b3):a8
a5=a3?a7.at9(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aH(a6,A.bW,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eqs(a7,b3):a8
a3=v&&a3?new C.eqt(a7,b3):a8
a6=C.b0C(q,a4,a1,b3,a5,a2,a3,new C.equ(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.n(6)
d.push(B.ao(-4,B.aB(a8,B.p(a8,D.bMz,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.q,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eqv(a7,b3,b4,b5),a8,a8,new C.eqw(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kj()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aB(a8,B.p(a8,D.bNe,A.f,a8,a8,new B.o(A.dv,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a5),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbXH(),a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kj()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aB(a8,B.p(a8,D.bON,A.f,a8,a8,new B.o(A.bZ,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a5),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eqx(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cP)if(a7.w!==a9){e=a7.c
e.toString
e=B.aH(e,A.bW,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.au(B.aB(a8,B.p(a8,D.fFJ,A.f,a8,a8,new B.o(A.bi,a8,a8,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kX,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eqy(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aB(j,B.eE(A.A,f,new B.an(A.V,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a7),k*b5,new B.cx("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aPc(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bi.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.n(10)
u=B.I(e?A.bi:A.bE,A.q,1)
if(e)t=A.bi
else t=f?A.aA:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.db,B.p(r,D.O6,A.f,r,r,D.E9,r,12,r,r,r,r,r,12)],s))
return B.aB(r,B.p(r,B.B(t,A.m,r,A.e,A.Q,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h7,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a7)},
bGo(d,e,f,g){return this.aPc(d,e,f,g,!1)},
c8R(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.R$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.ar(new B.ba(v,A.b3,A.aM),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.av:A.aO
t=f?A.x_:l
if(f)s=new B.bO(new B.az(e?A.bE:A.aL,1,A.q,-1),A.W,A.W,A.W)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rA,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.bq,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b5,m.b0h(e,new C.ess(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aJ,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c_:A.bK,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.w(B.a([p,A.an,B.E(B.aM(l,A.U,!1,l,!0,A.r,l,B.aN(),k,l,l,l,l,l,2,B.br(l,new B.b3(4,B.n(10),A.dj),l,A.bT,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.est(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a4,l,A.am,l,l,l,l),1)],q),A.ai,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aSG(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jW()
if(a2==null)return A.bI
w=new C.erx(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dT:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b5,a0.b0h(a3,a0.gbKU())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.R)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.frT,B.E(B.l_(a1,a1,a1,u,0.05,new C.ery(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.B(B.a([D.fEa,B.E(B.l_(a1,a1,a1,t,0.05,new C.erz(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cP
if(m)o.push(B.B(B.a([D.flE,B.E(B.l_(a1,a1,a1,96,10,new C.erA(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.ly
if(l||n===D.l6||n===D.RZ)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.fxC,B.E(B.l_(a1,a1,a1,s,0,new C.erB(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.B(B.a([D.fFr,B.E(B.l_(a1,a1,a1,r,0,new C.erC(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Cj[j]
i.a=null
g=h.a
i.a=g
k.push(B.j8(a1,a1,a1,new B.y(h.b,a1,A.pj,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.erD(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bZ(A.bD,k,A.br,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Ce[j]
f.a=null
g=e.a
f.a=g
h.push(B.j8(a1,a1,a1,new B.y(e.b,a1,A.pj,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.erE(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.N,l,A.an,k,A.N,i,A.an,B.bZ(A.bD,h,A.br,6,6)],p))}o.push(A.N)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.M(v,new C.erF(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.an,B.bZ(A.bD,l,A.br,6,6),A.ac,B.hbL(new C.erG(w,a2),D.cqh,B.eC([a2.as],k),!0,a1,k)],p))}if(n===D.f5){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.M(v,new C.erH(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bZ(A.bD,m,A.br,0,6)],p))}o.push(A.ac)
o.push(B.dn(D.bOz,D.fzD,new C.erI(a0,a5),B.bm(A.bx,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.ct(o,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.co:A.c
p=a4?A.x_:a1
if(a4)o=new B.bO(new B.az(a3?A.bE:A.aL,1,A.q,-1),A.W,A.W,A.W)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rA,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.Fr,a1,a1,a1)},
bPr(d){return this.aSG(d,!1,!1,null)},
c86(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c7(p,new C.erL(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.fbC,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bc,B.E(B.w(B.a([w,A.bz,A.cR,r.bzY(D.cTP,d,B.P(v).ax.a===A.I)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dU(B.hw(B.aF(!1,A.a1,!0,q,B.aL(!1,q,!0,B.eB(D.eVS,q,new B.o(q,q,B.I(A.c.j(0.55),A.q,1.3),q,B.a([new B.ac(0,A.G,A.bZ.j(0.4),A.em,8)],p),D.aoT,A.a5),q,q,q),A.cK,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,"Documents (Hati)",q,q),A.J)],u))
t=B.B(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.P(w).ax.a===A.I
w=B.n(20)
v=x.O
v=s?B.a([D.b8v,D.b8U],v):B.a([A.c,A.ku],v)
u=B.I(d.j(s?0.45:0.25),A.q,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cz,14)],p),new B.a8(A.ay,A.aC,A.x,v,q,q),A.n),q,q,q,q,A.bT,q,q,q)},
aLX(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c7(w,new C.epk(this,g,d,e,f),null)},
agf(d,e){return this.ckB(d,e)},
ckB(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$agf=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.ar(new B.ba(e,A.b3,A.aM),r)
p=t.c
p.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.etp(d,q),p,null,!0,!0,x.N),$async$agf)
case 3:s=g
q.R$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$agf,v)},
PU(d){var w=d.bU()
return""+B.bH(w)+"/"+B.bS(w)+"/"+B.bA(w)}}
C.aeV.prototype={}
C.ayz.prototype={
U(){return new C.bc8(null,null)}}
C.bc8.prototype={
gcwV(){var w,v=this.a.c,u=v.f.bU(),t=""+B.bH(u)+"/"+B.bS(u)+"/"+B.bA(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
a_(){var w,v=this,u=null
v.a1()
w=B.bj(u,A.pT,u,1,u,v)
w.fg(0,!0)
v.d!==$&&B.aP()
v.d=w
w=B.bj(u,D.bri,u,1,u,v)
w.cr(0)
v.e!==$&&B.aP()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.btt()},
J_(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.ct.au(0,new B.hS(w,v,A.ct).au(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.au(new B.D(D.bwL,B.c7(new B.ha(B.a([u,w],x.dS)),new C.d0Y(this),v),v),v,v,v)}}
C.bcm.prototype={
B(d){var w=null,v=B.n(22),u=B.I(A.aJ,A.q,1),t=x.p
return B.au(new B.D(D.bx1,B.aF(!1,A.a1,!0,w,B.p(w,B.bw(B.n(22),B.w(B.a([new B.D(D.bwc,B.w(B.a([B.p(w,D.bNk,A.f,w,w,new B.o(A.aw.j(0.12),w,w,B.n(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aQ,D.fBL,A.R,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fcM,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dY,D.bqm,B.B(B.a([B.E(B.bK(!1,D.fq7,w,w,!0,w,w,new C.d1j(d),w,B.fx(w,w,w,w,w,w,w,w,w,w,w,A.bK,w,w,w,w,w,A.na,w,A.of,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bm,w,w,w,48,w,w,w,w,w,1),B.E(B.bK(!1,D.fvn,w,w,!0,w,w,new C.d1k(d),w,B.fx(w,w,w,w,w,w,w,w,w,w,w,A.aw,w,w,w,w,w,A.na,w,A.of,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.Q,0,A.p),A.aq),A.f,w,A7.VA,new B.o(A.av,w,u,v,D.cU9,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w),w,w,w)}}
C.JK.prototype={
U(){return new C.bc7()}}
C.bc7.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.n(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.I(m.j(l?0.34:0.28),A.q,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dD,8)],t)
s=m.j(l?0.16:0.14)
r=B.n(9)
q=p.a
r=B.p(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dU(B.db(B.aB(o,B.vs(B.de(o,B.B(B.a([r,A.at,new B.dq(1,A.cm,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f1:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b7,A.Q,0,o,o),o,o,A.bb,new B.o(n,o,u,v,t,o,A.n),A.eJ,o,o,o,A.nb,o,o,1/0),A.ct,A.jl,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d0T(p,d),new C.d0U(p),new C.d0V(p),new C.d0W(p),o,o,o,!1,A.a7),k),new B.x(0,(1-k)*16))}}
C.Px.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.n(16),s=B.n(16),r=B.n(14),q=B.I(A.c.j(0.5),A.q,1.2),p=x.p
return B.aF(!1,A.a1,!0,t,B.aL(!1,s,!0,new B.D(A.eR,B.B(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a8(A.ay,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.eo,B.E(B.w(B.a([B.d(w.e,v,v,v,v,v,v,A.mK,v,v,v),A.bz,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.X(A.eA,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ag)}}
C.a_h.prototype={
U(){return new C.aE_(D.df,null,null)}}
C.aE_.prototype={
gYO(){var w,v=this,u=v.w
if(u===$){w=B.bj(null,D.bqT,null,1,null,v)
v.w!==$&&B.bL()
v.w=w
u=w}return u},
b5F(d){if(!this.a.c.ay)return
this.x=d
this.gYO().iJ(0,0)},
a_(){var w,v=this
v.a1()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.avt(D.f1h)
C.i2p()
v.Ri()},
q(){var w=this,v=w.f
if(v!=null)v.a7(0)
w.gYO().q()
v=w.z
if(v!=null)v.a7(0)
C.avt(D.f1i)
C.i2s()
w.bvs()},
czH(){B.jA()
this.m(new C.ew4())
var w=this.c.I(x.q).f
w.a4D()
if($.bjJ)w.S(D.eZ8)},
Ri(){var w,v=this,u=v.f
if(u!=null)u.a7(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cM(B.dD(0,0,0,0,0,A.o.D(C.h9W(u,w),1,120)),new C.evV(v))},
czm(){var w,v=this
v.m(new C.ew3(v))
if(v.r)v.Ri()
else{w=v.f
if(w!=null)w.a7(0)}},
gaUB(){var w=this.a.c.db
return(w==null?"":w).length!==0},
ctq(){var w=this,v=w.f
if(v!=null)v.a7(0)
w.m(new C.evW(w))
v=w.z
if(v!=null)v.a7(0)
if(w.a.c.ch&&w.r)w.z=B.cM(A.ll,new C.evX(w))},
aw_(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a7(0)
if(u.a.c.ch){u.m(new C.evR(u))
u.Ri()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaUB()){u.ctq()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.evS(u,A.o.E(w+1,s)))
u.b5F(w)
u.Ri()}},
cjf(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a7(0)
v.m(new C.evT(v))
v.Ri()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.evU(v,w,t))
v.b5F(w)
v.Ri()}},
cuR(d){var w,v=this,u=v.e
if(u===D.cl){u=v.d
u===$&&B.c()
return new B.nf(d,new B.cx(u,x.ac))}w=v.cuS(u)
u=v.d
u===$&&B.c()
return B.qj(new B.nf(d,new B.cx(u,x.ac)),w,new C.ew1(),A.bb,A.bb,new C.ew2(v))},
cuS(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bre
case 16:return A.kw
case 18:return A.n6
default:return A.n8}},
cuQ(d,e,f){var w,v,u,t=null,s=B.cH(A.ct,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d_(s,!1,e,t)
case 2:case 17:w=x.K
return B.jp(e,new B.bf(s,new B.bp(A.uC,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 3:w=x.K
return B.jp(e,new B.bf(s,new B.bp(A.Se,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 4:case 21:w=x.K
return B.jp(e,new B.bf(s,new B.bp(A.iu,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 5:w=x.K
return B.jp(e,new B.bf(s,new B.bp(A.uB,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 6:case 16:w=x.b
return B.ip(A.A,new B.d_(s,!1,e,t),t,new B.bf(s,new B.bp(0.82,1,w),w.k("bf<bJ.T>")))
case 7:w=x.b
return B.ip(A.A,new B.d_(s,!1,e,t),t,new B.bf(s,new B.bp(1.18,1,w),w.k("bf<bJ.T>")))
case 8:return B.c7(s,new C.evY(s),e)
case 9:return B.c7(s,new C.evZ(s),e)
case 10:return B.c7(s,new C.ew_(s),e)
case 11:return B.c7(s,new C.ew0(s),e)
case 12:w=x.b
return new B.d_(s,!1,B.ip(A.A,e,t,new B.bf(s,new B.bp(1.03,1,w),w.k("bf<bJ.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jw(B.jp(e,new B.bf(s,new B.bp(A.uC,A.J,v),v.k("bf<bJ.T>")),t,!0),A.r,new C.bqL(w,t))
case 15:w=x.K
return B.jp(e,new B.bf(s,new B.bp(A.Se,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 19:w=B.dp()
w.mK((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jQ(v,u,v,1)
return B.fu(A.A,B.db(e,s.gp(0)),t,w,!0)
case 20:return B.eE(A.A,(1-s.gp(0))*0.2,new B.d_(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jw(new C.ao5(B.c7(n.gYO(),new C.ew5(n,v,w),m),m),A.r,m)}else{t=B.rD(new C.II(w,!0,!1,m))
l=B.b0(w.e)
u=n.cuR(B.el(B.jw(t,A.r,m),l,!0))}l=B.n(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.h9W(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oq,m,m,m),A.bp,D.bPD],k),A.m,m,A.e,A.Q,0,m,m),A.f,m,m,new B.o(A.aW,m,m,l,m,m,A.n),m,m,m,m,A.fX,m,m,m)
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
l.push(B.bT(0,new C.Nr(new C.Eu(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.ob?0.5625:1.7777777777777777
l.push(B.au(new B.fK(r,B.jw(B.uv(A.ae,u,!0,4,1,!0,!0,m),A.r,m),m),m,m,m))}if(!$.bjJ){r=B.HJ(A.l3,new C.ew6(d),B.nA(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bl(!0,B.B(B.a([r,A.ab,B.HJ(B.X(n.r?Aj.yr:A.j2,m,m,m,m,m),n.gczl(),B.nA(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.ae,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.n(20)
k.push(B.ao(16,B.bl(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.hq,m,m,m),A.f,m,m,new B.o(A.aW,m,m,r,m,m,A.n),m,m,m,m,A.fX,m,m,m),!0,!1,A.ae,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bl(!0,B.aB(A.ci,B.p(A.le,$.bjJ?A.bI:s,A.f,m,m,m,m,64,m,m,D.brZ,m,m,150),A.y,!1,m,n.gczG(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a7),!0,!1,A.ae,!0,!0),m,m,m,0,0,m))
return B.c6(m,A.w,B.aB(m,new B.an(A.V,m,A.b0,A.r,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.ew7(n,d),m,m,m,!1,A.a7),m,!1,!1,m,m)}}
C.JR.prototype={
B(d){var w=null
return B.p(w,B.bl(!0,new B.D(E.aiE,this.c,w),!0,!1,A.ae,!0,!1),A.f,w,w,D.b1i,w,w,w,w,w,w,w,w)}}
C.bqL.prototype={
jd(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jT(d){return d.b!==this.b}}
C.bgX.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.n(999)
break A}if("rounded"===q){w=B.n(18)
break A}if("arch"===q){w=D.aZ4
break A}w=B.n(6)
break A}v=s.e
u=B.I(v?A.aE:A.K,A.q,2.5)
if(q==="circle")t=B.n(999)
else t=B.n(q==="rounded"?9:3)
w=B.de(r,B.au(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.w4,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.bb,new B.o(s.f,r,u,w,r,r,A.n),A.hw,r,64,r,r,r,r,64)
return B.aB(r,new B.a7(78,r,B.w(B.a([w,A.an,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a7)}}
C.bgW.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.doI.h(0,p)
if(o==null)o=D.db_
p=p==="none"
w=p?q:new B.a8(A.a3,A.a8,A.x,o,q,q)
p=p?A.cV.j(0.25):q
v=r.e
u=v?B.I(A.aE,A.q,2.5):q
t=r.r.j(0.15)
s=v?I.an2:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a5),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a5),q,52,q,q,A.ev,q,q,52)
return B.aB(q,new B.a7(66,q,B.w(B.a([w,A.an,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a7)}}
C.aJH.prototype={
aW(){this.b6()
this.b5()
this.dI()},
q(){var w=this,v=w.b2$
if(v!=null)v.a4(0,w.gdD())
w.b2$=null
w.a2()}}
C.aLA.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bwp.prototype={}
C.aLB.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.b0F.prototype={}
C.VN.prototype={
U(){return new C.aDY()},
bgh(d){return this.e.$1(d)}}
C.aDY.prototype={
gb3Z(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gaap(){var w,v
if(this.d==="all")return B.bn(this.a.d,!0,x.I)
w=this.gb3Z()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaNS(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb3Z()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb5d(){return A.d.cM(this.gaap(),0,new C.evB())},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w.length!==0)v.e=A.d.gH(w).a
v.QU()},
QU(){var w=0,v=B.j(x.H),u,t=this,s
var $async$QU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b1g(s.c,s.f),$async$QU)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.evx(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$QU,v)},
J1(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$J1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gaap()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.L)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fEP(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.p6(o,q.c,q.f),$async$J1)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.e9(new C.evA(t,p),!1,null,x.H)
w=4
return B.b(B.a4(o,!1).cm(q),$async$J1)
case 4:q=t.a
w=5
return B.b(B.p5(q.c,q.f),$async$J1)
case 5:w=6
return B.b(t.QU(),$async$J1)
case 6:case 1:return B.h(u,v)}})
return B.i($async$J1,v)},
Rg(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Rg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hD(o,D.e0V,!0,"NgmySlidesTransferScan",x.N),$async$Rg)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.evy(t))
w=4
return B.b(C.ah7(s),$async$Rg)
case 4:r=e
t.m(new C.evz(t))
o=J.a3(r)
if(o.gal(r)){o=t.c
if(o==null){w=1
break}o.I(x.q).f.S(D.eY_)
w=1
break}w=5
return B.b(t.a.bgh(r),$async$Rg)
case 5:q=t.c
if(q==null){w=1
break}B.a4(q,!1).O(null)
q=t.c.I(x.q).f
p=o.gM(r)
o=o.gM(r)===1?"":"s"
q.S(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Rg,v)},
J0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$J0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gaap()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.p6(s,r.c,r.f),$async$J0)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fF3(null,A.d.gH(n),s,t.a.f)}else q=C.fF3(n,null,r.c,r.f)
if(n.length===1){s=A.d.gH(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aK(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Gp(q,"ngmy_slides_"+p,!1),$async$J0)
case 4:o=e
s=t.a
w=5
return B.b(B.p5(s.c,s.f),$async$J0)
case 5:w=6
return B.b(t.QU(),$async$J0)
case 6:s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$J0,v)},
a2F(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2F=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.evC(t))
w=3
return B.b(C.bBE(),$async$a2F)
case 3:s=e
t.m(new C.evD(t))
if(s==null||J.cm(s)){w=1
break}w=4
return B.b(t.a.bgh(s),$async$a2F)
case 4:r=t.c
if(r==null){w=1
break}B.a4(r,!1).O(null)
r=t.c.I(x.q).f
q=J.a3(s)
p=q.gM(s)
q=q.gM(s)===1?"":"s"
r.S(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a2F,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.dc:A.bM,k=o.gaap().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.c_(A.A,0.5,A.x,n,0,B.a([A.bi.j(0.22),A.K],x.O),n,n),A.a5),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aI(n,n,n,n,B.X(A.cy,m?A.ad:A.ak,n,n,n,n),n,n,n,new C.evG(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.zG],h),A.m,n,A.e,A.j,0,n,n)
w=B.n(24)
v=B.a([new B.ac(0,A.G,A.bi.j(0.35),A.eV,24)],x.V)
u=B.ao(n,B.X(A.q0,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.n(16)
s=B.a([u,B.B(B.a([B.p(n,D.bQ9,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.q,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.eo,B.E(B.w(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.au,D.bB1],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hw(B.aB(A.ci,D.eVU,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcdZ(),n,n,n,n,n,n,!1,A.a7),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.V,n,A.aa,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a1s,A.n),n,n,n,n,E.Zg,n,n,1/0),A.dY,o.ax9(m,"What to transfer"),A.ac,B.B(B.a([B.E(o.aWT(A.q6,m,new C.evH(o),o.d==="one","Pick a single deck","One presentation"),1),A.at,B.E(o.aWT(D.bFU,m,new C.evI(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d7,o.ax9(m,"Choose presentation"),A.R],h)
u=o.a.d
if(u.length===0){u=m?A.av:A.c
t=B.n(16)
s=B.I(m?A.bE:A.aL,A.q,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aA:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bP,n,n,n))}else A.d.v(v,new B.M(u,new C.evJ(o,m),B.T(u).k("M<1,t>")))
A.d.v(w,v)}w.push(A.mI)
w.push(o.ax9(m,"Transfer options"))
w.push(A.ac)
w.push(B.B(B.a([B.E(o.apS(A.aP,k,!0,A.js,m,o.r,o.gc8a(),"Scan on another device","Show QR"),1),A.at,B.E(o.aLY(A.jZ,!0,A.j3,m,o.gcq7(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.R)
w.push(B.B(B.a([B.E(o.bys(A.aV,k,A.hB,m,o.r,o.gc87(),"Download .json","Backup file"),1),A.at,B.E(o.aLY(A.aF,!0,Av.yz,m,o.gcC9(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bi.j(m?0.12:0.08)
u=B.n(16)
t=B.I(A.bi.j(0.28),A.q,1)
s=B.X(A.lr,A.bi.j(0.9),n,n,n,18)
r=o.gaNS()
q=o.gb5d()
p=o.gb5d()===1?"":"s"
A.d.v(w,B.a([A.bw,B.p(n,B.B(B.a([s,A.at,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.bq,n,n,n,n,n,n,n,n,12,n,n,A.a6,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bC,n,n,n)],h))}j=B.a([j,B.bl(!0,B.w(B.a([new B.D(Af.MM,i,n),B.E(B.ct(w,n,D.bvl,n,n,A.ah,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.ae,!0,!0)],h)
if(o.f)j.push(B.p(n,T.VT,A.f,A.dI,n,n,n,n,n,n,n,n,n,n))
return B.c6(n,l,new B.an(A.V,n,A.aa,A.r,j,n),n,!1,!1,n,n)},
afp(){var w=0,v=B.j(x.H),u=this,t,s
var $async$afp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.i8M(s,t.d,t.e),$async$afp)
case 2:return B.h(null,v)}})
return B.i($async$afp,v)},
ax9(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bi,w,w,B.n(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aA:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aWT(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.n(18),q=B.n(18),p=e?A.av:A.c
if(g)w=A.bi
else w=e?A.bE:A.aL
w=B.I(w,A.q,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bi.j(0.2),A.cz,14)],x.V):s
u=A.bi.j(g?0.2:0.1)
t=B.n(12)
t=B.p(s,B.X(d,A.bi,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cp,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aF(!1,A.a1,!0,s,B.aL(!1,r,!0,B.eB(new B.D(A.bC,B.w(B.a([t,A.R,u,A.bz,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag)},
bJ2(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.n(16),n=e?A.av:A.c,m=B.n(16)
if(p)w=A.bi
else w=e?A.bE:A.aL
w=B.I(w,A.q,p?2:1)
v=B.p(q,D.bQl,A.f,q,q,new B.o(q,q,q,B.n(12),q,new B.a8(A.a3,A.a8,A.x,B.a([A.bi,A.bi.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.w(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.e9:A.ra
if(p)r=A.bi
else r=e?A.b2:A.dq
return new B.D(A.cu,B.aF(!1,A.a1,!0,q,B.aL(!1,o,!0,B.p(q,B.B(B.a([v,A.bc,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bC,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.evw(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q)},
apS(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.n(18),o=B.n(18),n=h?A.av:A.c
if(f)w=d.j(0.45)
else w=h?A.bE:A.aL
w=B.I(w,A.q,f?1.5:1)
v=d.j(0.14)
u=B.n(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.r8,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.anz,A.f,s,s,D.b14,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.db(B.aF(!1,A.a1,!0,s,B.aL(!1,p,!0,B.eB(new B.D(E.YV,B.w(B.a([new B.an(A.V,s,A.aa,A.f,u,s),A.ac,v,A.bz,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag),r)},
aLY(d,e,f,g,h,i,j){return this.apS(d,e,!1,f,g,!1,h,i,j)},
bys(d,e,f,g,h,i,j,k){return this.apS(d,e,!1,f,g,h,i,j,k)}}
C.VO.prototype={
U(){return new C.bjI()}}
C.bjI.prototype={
a_(){this.a1()
this.aeg()},
aeg(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$aeg=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fF3(null,A.d.gH(m),k,r.a.f):C.fF3(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gH(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kw(A.d.gH(n).w))C.fEP(A.d.gH(r.a.d),D.d8R)
n=r.a
m=n.c
n=C.i5J(n.d)
w=7
return B.b(C.fF2(p,C.i5O(r.a.d),n,m,q),$async$aeg)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.evK(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.evL(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aeg,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.I,h=i?A.dc:A.bM,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cM(k.a.d,0,new C.evM())
v=B.aI(j,j,j,j,B.X(A.eF,i?A.ad:A.ak,j,j,j,18),j,j,j,new C.evN(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.zG],u),A.m,j,A.e,A.j,0,j,j)
t=B.n(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.de,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.w(B.a([r,A.N,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a1s,A.n),j,j,j,j,E.Zg,j,j,1/0)
q=B.n(24)
s=B.I(A.aP.j(0.35),A.q,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a7W,A.L,j,j))
else if(k.d==null)r.push(D.ebC)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.n(16)
n=B.a([new B.ac(0,A.G,A.aE.j(0.35),A.cz,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fqA,A.an,B.aB(j,B.p(j,B.B(B.a([D.bRU,A.at,B.d(m,j,j,j,j,j,j,D.fda,j,j,j)],u),A.m,j,A.e,A.Q,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bWI,A.n),j,j,j,j,A_.aiq,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.evO(k,d),j,j,j,j,j,j,!1,A.a7),A.N,D.fuU,A.aB],u))}o=A.c.j(0.04)
n=B.n(22)
m=B.I(A.bE,A.q,1)
l=k.d
l.toString
p.push(B.p(j,B.pP(j,j,!1,l,j,!0,!0,j,!1,D.bmA),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cp,j,j,j))
A.d.v(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hc,A.L,j,j))
return B.c6(j,h,B.bl(!0,B.w(B.a([new B.D(Af.MM,v,j),B.E(B.cc(B.w(B.a([t,A.aQ,B.p(j,B.w(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.bYE,A.n),j,j,j,j,A.tN,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.r,j,A.y,j,E.aiJ,j,j,A.ah),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.ae,!0,!0),j,!1,!1,j,j)}}
C.aDV.prototype={
U(){return new C.aDW(new B.ar(A.as,$.aw()),B.jS(!0,null,!0,!0,null,null,!1))}}
C.aDW.prototype={
a_(){var w=this
w.a1()
w.e.aQ(0,new C.epe(w))
$.aV.x1$.push(new C.epf(w))},
q(){var w=this.d
w.R$=$.aw()
w.P$=0
this.e.q()
this.a2()},
aZs(){var w,v=this.c
v.toString
w=C.yG(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a4(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aH(a2,A.eI,x.w).w,i=B.n(28),h=B.I(A.bi.j(0.4),A.q,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bi.j(0.28),A.uA,36),D.abB],g),e=B.n(28),d=A.c.j(0.16),a0=B.n(16),a1=x.p
a0=B.p(k,B.w(B.a([B.p(k,D.bNn,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.q,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.fnI,A.an,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a6,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.b1v,k,k,k,k,A.xY,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.at)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge7()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.av:A.M
o=new B.aR(14,14)
if(q)n=A.bi
else n=r?A.bi.j(0.55):A.aJ
m=new B.az(n,q?2:1.2,A.q,-1)
n=q?B.a([new B.ac(0,A.G,A.bi.j(0.28),A.J,12)],g):k
t.push(new B.bB(1,A.bf,B.de(A.A,new B.y(p,k,D.f6M,k,k,k,k,k,k,k,k,k),k,k,A.bb,new B.o(s,k,new B.bO(m,m,m,m),new B.bo(o,o,o,o),n,k,A.n),A.hw,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(M.J3)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.j,0,k,k),B.bT(0,B.db(B.aM(k,A.U,!0,k,!0,A.r,k,B.aN(),w,k,k,k,k,k,2,D.bUE,A.y,!0,k,!0,k,!1,v,A.aj,k,k,B.a([new B.um(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.Bs(5,k),new C.bu0()],x.aS),k,k,A.aPE,k,5,k,1,k,k,!1,"\u2022",k,new C.epa(l),k,new C.epb(l),k,!1,k,k,!1,k,!0,k,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a4,k,A.m7,k,k,k,k),0),0,0,0)],a1)
d=C.yG(w.a.a.toUpperCase())==null?k:l.gc8b()
return B.au(new B.D(new B.Q(24,24,24,24+j.f.d),B.aF(!1,A.a1,!0,k,new B.cT(Ac.Kv,B.p(k,B.bw(e,B.w(B.a([a0,new B.D(D.bvQ,B.w(B.a([new B.an(A.V,k,A.aa,A.r,g,k),A.R,D.fm3,A.bw,new B.a7(1/0,50,B.bG(D.fCE,d,B.bm(A.bi,A.bm,A.ak,k,A.c,k,k,k,new B.b7(B.n(16),A.W),k,k,k)),k),A.an,B.bK(!1,A.nw,k,k,!0,k,k,new C.epc(a2),k,B.fx(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.Q,0,A.p),A.aq),A.f,k,k,new B.o(A.dc,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ag),k),k,k,k)}}
C.bu0.prototype={
oB(d,e){var w=e.a.toUpperCase()
return e.cIo(B.hh(A.bv,w.length),w)}}
C.ar0.prototype={
U(){return new C.aDZ(B.zk(A.M3,A.nC,A.uh))}}
C.aDZ.prototype={
q(){this.d.q()
this.a2()},
aZr(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iP(w,d)},
aak(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aak=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fNK(s),$async$aak)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aZr("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$aak,v)},
c89(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=C.i5M(w[u])
if(t!=null){this.aZr(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aI(s,s,s,s,A.w1,s,s,s,t.gbNi(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.ez(B.a([r,B.aI(s,s,s,s,B.X(q?A.u_:Ak.NH,s,s,s,s,s),s,s,s,new C.evQ(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.dc,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fDR,s,s,s,1,s,!0)
r=B.zj(t.d,A.bU,t.gc88())
w=B.n(28)
w=B.au(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bi,A.q,3),w,B.a([new B.ac(2,A.G,A.bi.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.n(16)
return B.c6(p,A.w,new B.an(A.V,s,A.b0,A.r,B.a([r,w,B.ao(32,B.p(s,D.frE,A.f,s,s,new B.o(v,s,B.I(A.bi.j(0.45),A.q,1),u,s,s,A.n),s,s,s,s,A.jn,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.buc.prototype={
B(d){var w=null,v=B.n(24),u=B.I(A.aJ,A.q,1)
return B.aF(!1,A.a1,!0,w,B.p(w,B.w(B.a([B.p(w,H.ane,A.f,w,w,D.b1e,w,56,w,w,w,w,w,56),A.aQ,D.fDx,A.an,new B.jI(this.c,new C.f62(),w,w,x.cI),A.aQ,new B.jI(this.d,new C.f63(),w,w,x.cl),A.ac,D.fDv],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,Ac.Kv,new B.o(A.av,w,u,v,w,w,A.n),w,w,w,L.Zn,D.bwt,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)}}
C.a7w.prototype={
U(){return new C.bjr(A.bB)},
gde(){return this.c}}
C.bjr.prototype={
a_(){var w=this
w.a1()
if(w.a.d)return
w.a_0()
w.d=B.dv(A.fW,new C.eel(w))},
q(){var w=this.d
if(w!=null)w.a7(0)
this.a2()},
a_0(){return this.cmt()},
cmt(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a_0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.eej(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bz(new B.S(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cf0(p.c),$async$a_0)
case 6:r=e
q.a=r==null?A.bB:r
case 4:if(t.c==null){w=1
break}t.m(new C.eek(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a_0,v)},
bPi(d){var w,v,u=d.a,t=A.o.am(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.am(u,6e7)%60
v=A.o.am(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aX(A.o.u(w),2,"0")+"m "+A.a.aX(A.o.u(v),2,"0")+"s left"
return A.a.aX(A.o.u(w),2,"0")+":"+A.a.aX(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bI
w=s.e.a
v=A.o.am(w,6e7)<30&&A.o.am(w,36e8)<999?A.aw:A.bZ
w=v.j(0.14)
u=B.n(14)
t=B.I(v.j(0.55),A.q,1)
return B.p(r,B.B(B.a([B.X(A.G2,v,r,r,r,20),A.at,B.E(B.d("Marriage document session \xb7 "+s.bPi(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,V.ahv,A.im,r,r,1/0)}}
C.a8q.prototype={
nf(){var w,v,u,t=this
t.xe()
w=t.cx
v=t.c
w.bq7(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.pW(B.F(["/S",D.efh,"/URI",new B.rx(B.Wk(w.as),A.uD,!0)],x.N,u),u))}}
C.a8r.prototype={
a3(){return"PdfAnnotFlags."+this.b}}
C.b2j.prototype={
bxu(d,e,f,g,h,i,j,k,l,m){var w=B.eC([D.edA],x.di)
this.w!==$&&B.aP()
this.w=w},
gcLG(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jR(w,new C.chd(),B.a6(w).k("jR<cq.E,H>")).fn(0,new C.che())},
aCB(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.hf(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.ty(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.je(d.a,d.b))
s.n(0,"/Border",B.ty(H.apg))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h0(t.gcLG()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.pW(w,x.Y))}}
C.chf.prototype={}
C.a2C.prototype={}
C.ahZ.prototype={}
C.aQD.prototype={
h0(d){var w,v,u,t,s,r,q=this,p=null
q.li(d)
q.LZ(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bfF(w)
u=x.N
t=x.Y
s=new C.chf(q.d.a,"/Link",w,p,p,p,p,p,B.U(u,t))
s.bxu(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pW(B.F(["/Type",D.eff],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a8q(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.L(0,r)
v.dx.push(r)}}
C.awr.prototype={}
C.aS9.prototype={
h0(d){var w,v,u,t,s=this
s.li(d)
w=s.b
if(w!=null){v=B.dp()
u=s.a
v.e9(u.a,u.b,0,1)
u=d.b
u.i9()
t=s.a
t.toString
u.L6(t)
u.Sw(0)
u.oW(0,v)
w.h0(d)
u.ni(0)}}}
var z=a.updateTypes(["aA<~>()","~(lG)","R(i3)","~()","R(eG)","R(om)","R(lG)","~(i3)","R(eG,eG)","JR(Y)","R(nK)","R(lf)","aA<R>()","H(H,i3)","a5<m,@>(i3)","ai<zC>()","m(nK)","R(a7N)","m(lG)","m(w1)","R(ED)","H(i3,i3)","m(eG)","t(eG)","cL(eG)","t(hE)","~(hE)","eG(uK,K,K,K,K,H{fx:m,key:m,rotation:K})","eG(m,K,H)","H(om,om)","R(zC)","R(m,ai<zC>)","a5<m,@>(om)","nK()","Yo(Y)","eG(m,K,K,K,K,K{align:q1,anim:hE,bullets:R,color:H?,delay:H,fx:m,key:m,style:HE,weight:ny})","a0D(Y)","eG(m,K,K,K,K{anim:hE,delay:H,fx:m,key:m})","aA<~>(om)","R(mr)","Ym(Y)","a0a(Y)","a09(Y)","Pn(Y)","Zx(Y)","eG(uK,K,K,K,K,H,m,m{anim:hE,delay:H,rotation:K,stroke:H,strokeWidth:K})","eG(m,K,K,K,K,K,m,m,H)","eG(K,K,m,H{size:K})","t(rl,K,K)","lf()","om(a5<@,@>)","~(uA)","ED()","ff(eG)","t(j0)","Z5(Y)","~(Eu)","Zq(Y)","H(eG,eG)","eG(eG)","a5<m,@>(eG)","eG(a5<@,@>)","lG(lG)","a5<m,@>(lG)","lG(a5<@,@>)","R(jE)","jE()","m(i3)","~(ai<om>)","S(ai<i3>)","S(i3)","ai<i3>(m?)","acs(Y,H)","~(R(eG,eG))","ad5(Y)","aeL(Y,H)","v(lG,R)","VB(Y)","ad8(Y)","VC(Y)","~(mv)","i3(i3)","K(eG)","a_E(Y)","a_h(Y)","i3()","ai<F0>()","aA<~>(ai<i3>)","t(bv<H,i3>)","D(jE)","D(ED)","aA<~>(hE,~())","t(ai<hE>,hE?,~(hE),v)","R(m5)","ai<jo<mv>>(Y)","jo<mv>(mv)","i3(a5<@,@>)","VN(Y)","eG(m,K,K,K,K,K,H{align:q1,style:HE,weight:ny})","VO(Y)","t(i3)","~(lY)","II(Y,lG,t?)","H(a8r)","aA<ai<a5<m,@>>?>()","m(m)","aA<zB>({paper:m?,photo:dI?,request:m,template!li})","aA<a7F>({doc!zB,history:ai<+(m,m)>,instruction!m,photo:dI?,template!li})","ad2(Y)"])
C.cFg.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:75}
C.cFh.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:74}
C.cFi.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gajZ(s):16;--w.c}w.b=A.o.dY(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mq(v,t)
w.b=v-A.o.dY(q,t)
w.a=t
return q},
$S:74}
C.cFj.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bOg.prototype={
$1(d){return J.eZ(A.dC.gaP(d),d.byteOffset,d.byteLength)},
$S:1669}
C.frC.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iJ(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iJ(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iJ(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iJ(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1670}
C.bZ2.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:29}
C.bZ3.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aM(v,J.k(w==null?"":w))},
$S:39}
C.bZ5.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fHO.prototype={
$1(d){return new C.a0D(this.a,this.b,C.i6E(),null)},
$S:z+36}
C.f4v.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f4z.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.f4A.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f4B.prototype={
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
C.f4w.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f4x.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f4y.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.f4q.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hW,w,w,w)
return B.ek(B.a([B.bK(!1,D.fq3,w,w,!0,w,w,new C.f4o(d),w,w),B.bK(!1,D.fp8,w,w,!0,w,w,new C.f4p(d),w,w)],x.p),w,w,D.XJ,v,w,w,w,w,D.fE9,w)},
$S:18}
C.f4o.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.f4p.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.f4r.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f4s.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f4F.prototype={
$0(){var w=this.a
return w.m(new C.f4E(w,this.b))},
$S:0}
C.f4E.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f4u.prototype={
$0(){var w=this.a
return w.m(new C.f4t(w,this.b,this.c))},
$S:0}
C.f4t.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.L(0,v)},
$S:0}
C.f4C.prototype={
$0(){return this.a.a15(this.b)},
$S:0}
C.f4D.prototype={
$0(){return this.a.P6(0,this.b)},
$S:0}
C.f4I.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.f4J.prototype={
$0(){var w=this.a
return w.m(new C.f4H(w,this.b))},
$S:0}
C.f4H.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.M(w,new C.f4G(),B.T(w).k("M<1,m>")))}},
$S:0}
C.f4G.prototype={
$1(d){return d.a},
$S:z+67}
C.fbN.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.h78(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cw)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.om(s,v,u==null?new B.S(Date.now(),0,!1):u)},
$S:z+50}
C.fbO.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fur.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.L)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbq())q=n===o.gbq()&&p.b>o.gcA()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fup.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fuq.prototype={
$2(d,e){return e.c.aM(0,d.c)},
$S:z+29}
C.fHi.prototype={
$1(d){return d.ag()},
$S:z+32}
C.frg.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fI9.prototype={
$1(d){return new C.Yo(this.a,null)},
$S:z+34}
C.cGC.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cGE.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cGH.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cGI.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cGG())},
$S:11}
C.cGG.prototype={
$0(){},
$S:0}
C.cGJ.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a1C(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cE(s)
p=q.bg(s,new C.cGF(r))
if(p<0)q.c9(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.ahg(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:301}
C.cGF.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cGK.prototype={
$1(d){},
$S:31}
C.cGD.prototype={
$1(d){return new C.Ym(this.b,this.a.gcwg(),null)},
$S:z+40}
C.cGL.prototype={
$1(d){return D.h28},
$S:z+43}
C.cGy.prototype={
$1(d){var w=null,v=B.n(24),u=B.I(D.Xn,A.q,1),t=x.p
return B.au(B.aF(!1,A.a1,!0,w,B.p(w,B.w(B.a([new B.D(D.bwf,B.w(B.a([B.p(w,D.bKz,A.f,w,w,new B.o(A.aw.j(0.14),w,w,w,w,w,A.a5),w,56,w,w,w,w,w,56),A.aQ,D.fo8,A.R,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fca,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dY,new B.D(A.pX,B.B(B.a([B.E(B.dT(D.fuW,new C.cGw(d),B.dg(w,w,w,w,w,w,w,w,w,E.mZ,w,w,A.ck,w,new B.b7(B.n(14),A.W),D.aZv,w,w,w,w)),1),A.at,B.E(B.bG(D.fAU,new C.cGx(d),B.bm(A.bx,w,w,w,w,w,A.ck,w,new B.b7(B.n(14),A.W),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.Q,0,A.p),A.f,w,A.x2,new B.o(D.adh,w,u,v,D.cYE,w,A.n),w,w,w,L.Zn,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w,w,w)},
$S:1671}
C.cGw.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.cGx.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.cGz.prototype={
$0(){return J.nr(this.a.d,new C.cGv(this.b))},
$S:0}
C.cGv.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cGu.prototype={
$1(d){var w,v,u,t=null,s=B.n(28),r=B.I(D.Xn,A.q,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bPw,A.f,t,t,new B.o(t,t,t,B.n(14),t,D.aoO,A.n),t,44,t,t,t,t,t,44),A.bc,B.E(B.w(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aRh,t,t,t),A.bz,D.fAQ],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.djQ[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.axk(u[1],u[2],u[3],new C.cGs(v,d),!1,t))}q.push(A.an)
q.push(D.bqp)
q.push(A.an)
q.push(new C.axk(A.ef,"Delete book","Remove it from this device",new C.cGt(d),!0,t))
return B.bl(!0,B.p(t,B.w(q,A.F,t,A.e,A.Q,0,A.p),A.f,t,t,new B.o(D.adh,t,r,s,t,t,A.n),t,t,t,A.tJ,E.Z0,t,t,t),!0,!1,A.ae,!0,!0)},
$S:25}
C.cGs.prototype={
$0(){var w=this.a.a
B.a4(this.b,!1).O(w)
return null},
$S:0}
C.cGt.prototype={
$0(){B.a4(this.a,!1).O("delete")
return null},
$S:0}
C.cGB.prototype={
$3(d,e,f){var w=null,v=B.n(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aH4,12)],x.V)
return B.dU(B.eE(A.A,e,B.p(w,B.bw(B.n(4),new B.a7(62,95.81818181818181,B.eM(A.A,F.anS(d),A.f,A.du),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.x(f,0))},
$S:z+48}
C.cGA.prototype={
$0(){return this.a.c2Y()},
$S:0}
C.cGr.prototype={
$0(){return this.a.aY2(0,this.b)},
$S:0}
C.cGq.prototype={
$0(){return this.a.Da(this.b)},
$S:0}
C.cGp.prototype={
$0(){return this.a.Da(this.b)},
$S:0}
C.cGM.prototype={
$2(d,e){var w=this.a
return w.bC0(J.q(w.d,e))},
$S:42}
C.cFT.prototype={
$0(){var w=this.a
if(w.c!=null)w.AJ()},
$S:0}
C.cFS.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b_V("Page "+(v.length+1),"",""))},
$S:0}
C.cFV.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cG2.prototype={
$0(){},
$S:0}
C.cG3.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.R$=u
v.P$=0
w=w.b
w.R$=u
w.P$=0
return null},
$S:9}
C.cFW.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cJ.gct().aK(this.c)},
$S:0}
C.cFU.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cFY.prototype={
$0(){return this.a.Qr(this.b)},
$S:0}
C.cFZ.prototype={
$0(){return this.a.Qr(this.b)},
$S:0}
C.cG_.prototype={
$0(){var w=this.a
w.m(new C.cFX(this.b))
w.E1()},
$S:0}
C.cFX.prototype={
$0(){return this.a.c=""},
$S:0}
C.cG1.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cG0(w,d))
w.E1()},
$S:z+51}
C.cG0.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cG8.prototype={
$2(d,e){if(d)this.a.AJ()},
$S:120}
C.cG4.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.AJ(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.I(x.q).f.S(D.f_x)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cG5.prototype={
$0(){return this.a.aX_(this.b,-1)},
$S:0}
C.cG6.prototype={
$0(){return this.a.aX_(this.b,1)},
$S:0}
C.cG7.prototype={
$0(){return this.a.c4g(0,this.b)},
$S:0}
C.fyV.prototype={
$1(d){return C.hh9()},
$S:44}
C.fyW.prototype={
$1(d){return null},
$S:31}
C.fg1.prototype={
$1(d){return null},
$S:31}
C.fzU.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:290}
C.fzT.prototype={
$2(d,e){return A.o.aM(e.length,d.length)},
$S:263}
C.fA_.prototype={
$1(d){var w=this.a
return C.h_u(d)===w||C.hlI(d)===w},
$S:z+4}
C.ff4.prototype={
$1(d){return A.a.aX(A.o.u(d),2,"0")},
$S:81}
C.c9k.prototype={
$1(d){return d.length!==0},
$S:3}
C.fyT.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fyU.prototype={
$1(d){return C.fBD(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.ftN.prototype={
$1(d){var w=null
return B.bl(!0,new B.D(E.xX,B.w(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bw,D.fvx,A.N,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dn(D.GG,D.fpK,new C.ftL(d),B.bm(A.bZ,w,w,w,A.w,w,A.ck,w,w,w,w,w)),A.R,B.er(A.w0,D.fwN,new C.ftM(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.x0,w,w,w,w))],x.p),A.ai,w,A.e,A.Q,0,A.p),w),!0,!1,A.ae,!0,!0)},
$S:25}
C.ftL.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.ftM.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.ftO.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,D.flW,w,w,!0,w,w,new C.ftJ(d),w,w),B.bG(D.fDb,new C.ftK(d),w)],x.p),w,w,w,D.fF4,w,w,w,w,D.flP,w)},
$S:18}
C.ftJ.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.ftK.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.ea1.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.ea_.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ea0.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ea2.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ea3.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fzZ.prototype={
$1(d){return A.a.aX(A.o.u(d),2,"0")},
$S:81}
C.fzV.prototype={
$2$h$w(d,e){var w=null
return new B.bI(A.a3,w,w,B.Bh(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.n(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1672}
C.fzX.prototype={
$1(d){var w=null,v=B.n(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.fdn,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:146}
C.fzY.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.i2,A.q,1.5),w,w,w,A.a5),w,d,w,w,w,w,w,d),B.dU(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.i2,A.q,1.5),w,w,w,A.a5),w,d,w,w,w,w,w,d),new B.x(-d*0.38,0))],x.p),A.m,w,A.b7,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1673}
C.fzW.prototype={
$2$female$size(d,e){var w=null,v=d?D.af9:this.a,u=B.I(A.i2,A.q,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a5),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.r,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.n(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.adw,w,u,w,w,w,A.a5),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1674}
C.fLB.prototype={
$1(d){return new C.ad2(this.a,this.b,null)},
$S:z+108}
C.dXE.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bn5:A.LA,q=B.I(D.jg.j(0.25),A.q,1),p=B.au(B.p(t,t,A.f,t,t,new B.o(A.bZ.j(0.45),t,t,B.n(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.n(15)
o=B.p(t,D.any,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.q,1.2),o,B.a([new B.ac(0,A.G,D.jg.j(0.35),A.em,10)],x.V),D.bZf,A.n),t,t,t,t,A.xO,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.w(B.a([new B.D(K.Zc,B.w(B.a([p,A.aB,B.B(B.a([o,A.bc,B.E(B.w(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.jg,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bz,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fcD,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.E(B.iv(!0,t,e,A.y,D.aOH,new C.dXD(w,this.c),v,D.ail,t,A.ah,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.md,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:114}
C.dXD.prototype={
$2(d,e){var w=this.a.d[e]
return new C.acs(w,new C.dXC(this.b,w),null)},
$S:z+72}
C.dXC.prototype={
$0(){B.a4(this.a,!1).O(this.b.a)
return null},
$S:0}
C.ftR.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.ftS.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xX,B.w(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bw,D.fyZ,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dn(D.GG,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.ftP(d),B.bm(D.jg,w,w,w,A.c,w,A.ck,w,w,w,w,w)),A.R,B.er(A.o4,D.U7,new C.ftQ(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.x0,w,w,w,w))],x.p),A.ai,w,A.e,A.Q,0,A.p),w),!0,!1,A.ae,!0,!0)},
$S:25}
C.ftP.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.ftQ.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.ftV.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.ftW.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xX,B.w(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bw,D.fmW,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dn(D.GG,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.ftT(d),B.bm(D.jg,w,w,w,A.c,w,A.ck,w,w,w,w,w)),A.R,B.er(A.o4,D.U7,new C.ftU(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.x0,w,w,w,w))],x.p),A.ai,w,A.e,A.Q,0,A.p),w),!0,!1,A.ae,!0,!0)},
$S:25}
C.ftT.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.ftU.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.ftZ.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fu_.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xX,B.w(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bw,D.ftl,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dn(D.GG,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.ftX(d),B.bm(D.jg,w,w,w,A.c,w,A.ck,w,w,w,w,w)),A.R,B.er(A.o4,D.U7,new C.ftY(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.x0,w,w,w,w))],x.p),A.ai,w,A.e,A.Q,0,A.p),w),!0,!1,A.ae,!0,!0)},
$S:25}
C.ftX.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.ftY.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.fN3.prototype={
$1(d){return D.h6o},
$S:z+74}
C.eeo.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.beI:A.LA,s=B.I(A.ax.j(0.25),A.q,1),r=B.au(B.p(v,v,A.f,v,v,new B.o(A.ax.j(0.45),v,v,B.n(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.n(15)
q=B.p(v,D.bRQ,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.q,1.2),q,B.a([new B.ac(0,A.G,A.bZ.j(0.35),A.em,10)],x.V),D.aoT,A.n),v,v,v,v,A.xO,v,v,v)
w=x.p
return B.p(v,B.w(B.a([new B.D(K.Zc,B.w(B.a([r,A.aB,B.B(B.a([q,A.bc,B.E(B.w(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:Z.Lw,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bz,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.fa7,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.E(B.iv(!0,v,e,A.y,D.aOH,new C.een(this.b),19,D.ail,v,A.ah,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.md,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:114}
C.een.prototype={
$2(d,e){var w=D.QS[e]
return new C.aeL(w,new C.eem(this.a,w),null)},
$S:z+75}
C.eem.prototype={
$0(){B.a4(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fBH.prototype={
$0(){return B.fZr(C.hV8(this.a))},
$S:299}
C.fBG.prototype={
$0(){var w=C.h_N(this.a)
return"data:image/png;base64,"+A.cJ.gct().aK(w)},
$S:22}
C.fdm.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jf(d,e),new B.jf(w,e+v),new B.jf(d+f*14,e),new B.jf(w,e-v)],x.J)
B.a1z(this.a,C.fA(4291404327),v)},
$S:701}
C.fNe.prototype={
$1(d){return new C.VB(this.a,null)},
$S:z+77}
C.ehl.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ehk())},
$S:30}
C.ehk.prototype={
$0(){},
$S:0}
C.ehm.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ehj(w,d))},
$S:1676}
C.ehj.prototype={
$0(){return this.a.x=J.eU(A.dC.gaP(this.b))},
$S:0}
C.ehn.prototype={
$1(d){},
$S:31}
C.egY.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.egU.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eh4.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.eh5.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.epe)},
$S:0}
C.eh6.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eh_.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bP(0,A.c4)},
$S:0}
C.eh0.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.eh1.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.u(this.b)))},
$S:0}
C.eh2.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eh3.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd0(v).Q
v.toString
w.ma(v,A.dX,A.ij)}},
$S:9}
C.egZ.prototype={
$0(){var w=this.a,v=w.z,u=C.fCk(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cHw(C.fCk(t))},
$S:0}
C.egW.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.egX.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ehc.prototype={
$0(){return B.a4(this.a,!1).la()},
$S:0}
C.ehd.prototype={
$0(){var w=this.a
return w.m(new C.ehb(w))},
$S:0}
C.ehb.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.ehe.prototype={
$0(){var w=this.a
return w.m(new C.eha(w,this.b))},
$S:0}
C.eha.prototype={
$0(){var w=this.b.b
this.a.e.saU(0,w)
return w},
$S:0}
C.ehf.prototype={
$1(d){var w=this.a
return w.m(new C.eh9(w))},
$S:8}
C.eh9.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.ehg.prototype={
$1(d){var w=this.a
return w.m(new C.eh8(w))},
$S:8}
C.eh8.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.ehh.prototype={
$0(){var w=this.a
return w.m(new C.eh7(w,this.b))},
$S:0}
C.eh7.prototype={
$0(){var w=this.b
this.a.f.saU(0,w)
return w},
$S:0}
C.ehi.prototype={
$1(d){return this.a.ZN()},
$S:2}
C.egV.prototype={
$0(){return this.a.c7r(this.b)},
$S:0}
C.cd0.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cO(w.h(0,d))):null},
$S:328}
C.ccZ.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.cd_.prototype={
$1(d){return d.length!==0},
$S:3}
C.fBh.prototype={
bkN(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bOf(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.L)(e),++t){s=e[t]
r.cE1($.qV().jG(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mG(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bkN(d,e)},
$S:1677}
C.fzz.prototype={
$1(d){return d.length!==0},
$S:3}
C.fzB.prototype={
$1(d){var w=this.a.a
w=A.d.aH(A.d.ds(this.b,w,w+d)," ")
w=B.aK(w," \n\n ","\n\n")
w=B.aK(w," \n\n","\n\n")
return B.aK(w,"\n\n ","\n\n")},
$S:81}
C.fzA.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.h2(t,t,t,t,B.d0(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qu,A.cb,t,A.dR,A.c7)
v=this.a
w.uB(v.b)
u=w.b.a.c
return u.gbf(u)<=v.a},
$S:34}
C.fcX.prototype={
$1(d){var w=A.a.fF(d,B.af("\\s+",!0,!1,!1,!1))
return new B.a_(w,new C.fcY(),B.T(w).k("a_<1>")).gM(0)},
$S:245}
C.fcY.prototype={
$1(d){return d.length!==0},
$S:3}
C.fcV.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:224}
C.fcW.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:224}
C.cd1.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gazV()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,w-(f===t?r:0)))
o=C.h_t(i,new B.G(!0,h,a6,k,a6,a6,q,A.cM,A.bo,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fXh(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aH(n.gcfC(),"\n\n")
d=B.h2(a6,a6,a6,a6,B.d0(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.ae5(k,q,1.28),j),A.qu,A.cb,a6,A.dR,A.c7)
d.uB(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbf(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.h_t(i,new B.G(!0,h,a6,k,a6,a6,q,A.cM,A.bo,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fXh(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.ae5(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bB(1,A.bf,new B.y(o.length>a4?o[a4]:"",a6,a3,a6,A.qu,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.azU(s,j))
i.push(new B.a7(s,a6,B.w(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:351}
C.cd2.prototype={
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
n=o.gazV()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.z(u,q),new B.z(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.z(r,p-(a0===s?m:0)))
l=C.h_t(f,new B.G(!0,e,a5,i,a5,a5,h,A.cM,A.bo,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fXh(g.length===0?B.a([a6],n):g,l))break}a1=o.ae5(i,h,1.28)
a2=new C.cd3(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.J2,new B.a7(v,a5,a4.f,a5),A.J2,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.byy,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bB(1,A.bf,new B.y(l[2+a3],a5,a1,a5,A.qu,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.azU(r,g))
f.push(new B.a7(r,a5,B.w(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.w(B.a([new B.a7(a5,q,v,a5),A.ac,B.E(B.B(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:144}
C.cd3.prototype={
$2(d,e){var w=null
return new B.a7(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qu,w,w),w)},
$S:1678}
C.fNh.prototype={
$1(d){return new C.VC(this.a,this.b,null)},
$S:z+79}
C.ehT.prototype={
$1(d){return d.lC()},
$S:1679}
C.ehU.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ehS(w,d))},
$S:1680}
C.ehS.prototype={
$0(){var w=this.b
return this.a.d=w.gfu(w)},
$S:0}
C.ehG.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ehH.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ehN.prototype={
$0(){return B.a4(this.a,!1).eE()},
$S:0}
C.ehO.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bA,A.q,2.5)
return B.aB(w,B.p(w,B.b4(w,w,w,new C.bbl(u,v.gax2(),w),A.fE),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ehL(v),new C.ehM(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a7)},
$S:37}
C.ehL.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:267}
C.ehM.prototype={
$1(d){var w=this.a
w.m(new C.ehI(w,d,this.b,this.c))},
$S:203}
C.ehI.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gax2()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.ehP.prototype={
$1(d){var w=this.a
return w.m(new C.ehK(w,this.b))},
$S:8}
C.ehK.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ehQ.prototype={
$1(d){var w=this.a
return w.m(new C.ehJ(w,d))},
$S:6}
C.ehJ.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ehR.prototype={
$0(){return B.a4(this.b,!1).O(this.a.a.c)},
$S:0}
C.fNx.prototype={
$1(d){return D.h9b},
$S:z+83}
C.eR3.prototype={
$1(d){return this.a.Ys()},
$S:9}
C.ePW.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cJ.gct().aK(v)},
$S:0}
C.eQj.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eQt.prototype={
$1(d){return d>=this.a.length},
$S:34}
C.ePF.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.ePG.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.ePD.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.ePE.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eQc.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eQd(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jw(B.rD(p>0.2?C.fS0(q,B.a4T(p,p,A.x)):q),A.r,u)],x.p)
w=s.bi
if(w>0.02){v=B.a4T(12,12,A.x)
p.push(B.jw(B.db(B.rD(C.fS0(r.$1(!0),v)),w*0.75),A.r,u))}r=s.b0
if(r!=null&&s.b_>0)p.push(B.el(u,B.b0(r).j(s.b_),!0))
r=s.bb
if(r!=null&&s.bJ>0){r=B.b0(r).j(s.bJ)
w=s.bb
w.toString
p.push(B.c0(u,new B.o(u,u,u,u,u,new B.c_(D.aXk,1.15,A.x,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.be))}r=s.aE
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.c_(D.aX5,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.be))
r=s.aI
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.a8(A.b1,A.b6,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aI)],x.O),D.cXh,u),A.n),A.be))
if(s.aB>0){r=s.k1
p.push(B.ao(u,B.c0(u,new B.o(u,u,u,u,u,new B.a8(A.b1,A.b6,A.x,B.a([A.w.j(0),A.w.j(s.aB),A.w.j(s.aB),A.w.j(0)],x.O),D.d7i,u),A.n),A.be),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Z
if(r>0)p.push(B.el(u,A.w.j(r),!0))
r=s.b8
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.c_(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.d4n,u),A.n),A.be))
s=s.aw
if(s>0)p.push(B.b4(u,u,u,new C.beS(s,u),A.az))
return new B.an(A.V,u,A.b0,A.r,p,u)},
$S:68}
C.eQd.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fO(r.b,A.A,q,q,A.ce,A.bU,!0,q,!1,q,q),o=r.a,n=o.aWC(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c6,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bh
v=o.aG
u=v-1
t=o.bB
s=o.c4?-1:1
return B.dU(B.ed(A.A,B.eE(A.A,l,B.fu(A.A,new B.Dl(new B.z_(q,q,n,A.Au),p,q),q,B.vP(s,o.cJ?-1:1,1),!0),q),v*w,q,q),new B.x(-m*r.d*u/2,-t*r.c*u/2))},
$S:604}
C.eQp.prototype={
$0(){return this.a.m(new C.eQo(this.b,this.c))},
$S:0}
C.eQo.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eQq.prototype={
$1(d){return this.a.m(new C.eQn(this.b,d))},
$S:6}
C.eQn.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eQs.prototype={
$0(){return this.a.m(new C.eQr(this.b,this.c))},
$S:0}
C.eQr.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.ePv.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.ePw.prototype={
$1(d){var w=this.a
return w.m(w.gcxF())},
$S:2}
C.ePx.prototype={
$1(d){return this.a.m(new C.ePu())},
$S:2}
C.ePu.prototype={
$0(){},
$S:0}
C.ePy.prototype={
$0(){var w=this.a
return w.m(new C.ePt(w,this.b))},
$S:0}
C.ePt.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.ePA.prototype={
$2(d,e){return A.at},
$S:36}
C.ePz.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.n(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bE
q=B.I(q,A.q,t?2.5:1)
r=B.de(w,B.au(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.bb,new B.o(w,w,q,s,w,new B.a8(A.b1,A.b6,A.x,r,w,w),A.n),A.hw,w,94,w,w,w,w,70)
return B.aB(w,new B.a7(70,w,B.w(B.a([r,A.fF,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aA,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ePs(u,v),w,w,w,w,w,w,!1,A.a7)},
$S:82}
C.ePs.prototype={
$0(){var w=this.a
return w.m(new C.ePp(w,this.b))},
$S:0}
C.ePp.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ePB.prototype={
$1(d){var w=this.a
return w.m(new C.ePr(w,d))},
$S:8}
C.ePr.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.ePC.prototype={
$1(d){var w=this.a
return w.m(new C.ePq(w,d))},
$S:8}
C.ePq.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eQT.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gH(this.b)]},
$S:34}
C.eR_.prototype={
$1(d){var w=this.a
return w.m(new C.eR0(w,d))},
$S:28}
C.eR0.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.em(v,v.r,B.a6(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eR1.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:244}
C.eQU.prototype={
$0(){var w=this.a
return w.m(new C.eQS(w,this.b))},
$S:0}
C.eQS.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.L(0,v)},
$S:0}
C.eQV.prototype={
$0(){var w=this.a
return w.m(new C.eQR(w,this.b))},
$S:0}
C.eQR.prototype={
$0(){var w,v=this.b.length,u=J.e6(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eQW.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eQQ(v,w.b,w.c,w.d))},
$S:0}
C.eQQ.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eQX.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gBm(v))},
$S:0}
C.eQY.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eQZ.prototype={
$0(){var w=this.a
return w.m(new C.eQP(w))},
$S:0}
C.eQP.prototype={
$0(){var w=this.a.db
return A.d.hr(w,0,w.length,0)},
$S:0}
C.eQC.prototype={
$1(d){return d.a===this.a.dy},
$S:221}
C.eQD.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.awT[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aR(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.ax6(new B.n9(new B.bo(n,n,n,n),A.aq,new B.kQ(new B.o(j,j,j,j,j,new B.a8(A.a3,A.a8,A.x,m,j,j),A.n),A.be,new C.aZx(l,B.b0(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eQB(r,v),2,i))}return B.bZ(A.bD,h,A.br,7,7)},
$S:156}
C.eQB.prototype={
$0(){var w=this.b
return w.m(new C.eQw(this.a,w))},
$S:0}
C.eQw.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eQE.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:204}
C.eQH.prototype={
$0(){var w=this.a
return w.m(new C.eQA(w))},
$S:0}
C.eQA.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eQI.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eQJ.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eQK.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eQL.prototype={
$0(){var w=this.a
return w.m(new C.eQz(w))},
$S:0}
C.eQz.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eQM.prototype={
$0(){var w=this.a
return w.m(new C.eQy(w))},
$S:0}
C.eQy.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eQN.prototype={
$0(){var w=this.b
return w.m(new C.eQx(this.a,w))},
$S:0}
C.eQx.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eQO.prototype={
$1(d){return this.a.fx=d},
$S:204}
C.eQF.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eQG.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eQg.prototype={
$0(){var w=this.a
return w.m(new C.eQf(w))},
$S:0}
C.eQf.prototype={
$0(){var w=this.a
w.p4=null
w.b2H()},
$S:0}
C.eQh.prototype={
$0(){var w=this.a
return w.m(new C.eQe(w,this.b))},
$S:0}
C.eQe.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eQi.prototype={
$0(){var w=this.a
return w.m(w.gco4())},
$S:0}
C.eQ8.prototype={
$0(){var w=this.a
return w.m(new C.eQ7(w))},
$S:0}
C.eQ7.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eQ9.prototype={
$0(){var w=this.a
return w.m(new C.eQ6(w))},
$S:0}
C.eQ6.prototype={
$0(){var w=this.a
w.aB=0.55
w.Z=Math.max(w.Z,0.12)},
$S:0}
C.eQa.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.d4M[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aR(9,9)
m.push(v.ax6(new B.n9(new B.bo(p,p,p,p),A.aq,new B.a7(1/0,1/0,new B.Dl(new B.z_(o,o,v.aWC(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.Au),B.fO(u,A.A,140,o,A.ce,A.bU,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eQ5(v,s),3,n))}return B.bZ(A.bD,m,A.br,10,8)},
$S:156}
C.eQ5.prototype={
$0(){var w=this.a
return w.m(new C.eQ4(w,this.b))},
$S:0}
C.eQ4.prototype={
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
C.ePN.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.ePO.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.ePP.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.ePQ.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.ePR.prototype={
$1(d){return this.a.aE=d},
$S:6}
C.ePS.prototype={
$1(d){return this.a.Z=d},
$S:6}
C.ePT.prototype={
$1(d){return this.a.b8=d},
$S:6}
C.ePU.prototype={
$1(d){return this.a.aB=d},
$S:6}
C.ePV.prototype={
$1(d){return this.a.aI=d},
$S:6}
C.eP8.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eP9.prototype={
$1(d){return this.a.to=d},
$S:6}
C.ePa.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.ePb.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.ePc.prototype={
$0(){var w=this.a
return w.m(new C.eP7(w))},
$S:0}
C.eP7.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.ePd.prototype={
$1(d){return this.a.b0=d},
$S:204}
C.ePe.prototype={
$1(d){return this.a.b_=d},
$S:6}
C.ePH.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.ePI.prototype={
$1(d){return this.a.bi=d},
$S:6}
C.ePJ.prototype={
$1(d){return this.a.aw=d},
$S:6}
C.ePK.prototype={
$1(d){return this.a.bb=d},
$S:204}
C.ePL.prototype={
$1(d){return this.a.bJ=d},
$S:6}
C.ePi.prototype={
$1(d){return this.a.aG=d},
$S:6}
C.ePj.prototype={
$1(d){return this.a.bh=d},
$S:6}
C.ePk.prototype={
$1(d){return this.a.bB=d},
$S:6}
C.ePl.prototype={
$1(d){return this.a.c6=d},
$S:6}
C.ePm.prototype={
$0(){var w=this.a
return w.m(new C.ePh(w))},
$S:0}
C.ePh.prototype={
$0(){var w=this.a
return w.c6=A.k.E(w.c6+90+180,360)-180},
$S:0}
C.ePn.prototype={
$0(){var w=this.a
return w.m(new C.ePg(w))},
$S:0}
C.ePg.prototype={
$0(){var w=this.a
return w.c4=!w.c4},
$S:0}
C.ePo.prototype={
$0(){var w=this.a
return w.m(new C.ePf(w))},
$S:0}
C.ePf.prototype={
$0(){var w=this.a
return w.cJ=!w.cJ},
$S:0}
C.eQb.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i9p(v,w.p4)},
$S:0}
C.eQ3.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bnp:B.fO(v,A.A,w,w,A.ce,A.bU,!1,w,!1,w,w)
return C.fzH(d.length===0?"rounded":d,u,e)},
$S:142}
C.eQ_.prototype={
$0(){var w=this.a
return w.m(new C.ePZ(w))},
$S:0}
C.ePZ.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eQ0.prototype={
$0(){var w=this.b
return w.m(new C.ePY(this.a,w))},
$S:0}
C.ePY.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eQ1.prototype={
$0(){var w=this.b
return w.m(new C.ePX(this.a,w))},
$S:0}
C.ePX.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eQ2.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eQm.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.n(20),p=B.a([new B.ac(-4,A.G,A.b4.j(0.35),A.J,30)],x.V),o=B.n(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.eH(n.chx(),n.r))
l.push(new C.II(n.cuE(),!1,!1,t))
o=B.bT(0,B.bw(o,new B.eH(new B.an(A.V,t,A.b0,A.r,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.n(8)
return B.p(t,new B.an(A.V,t,A.aa,A.r,B.a([o,B.ao(t,B.aB(A.ci,B.c0(t,new B.o(t,t,B.I(A.c.j(0.3),A.q,1),u,t,t,A.n),A.be),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eQl(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a7),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:212}
C.eQl.prototype={
$1(d){var w=this.a
return w.m(new C.eQk(w,d,this.b,this.c))},
$S:21}
C.eQk.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eQv.prototype={
$0(){var w=this.a
return w.m(new C.eQu(w,this.b))},
$S:0}
C.eQu.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.ePM.prototype={
$0(){var w=this.a.c
w.toString
return B.a4(w,!1).la()},
$S:0}
C.eR2.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a7(Math.min(s*0.4,460),t,B.w(B.a([w.aZj(),B.E(B.au(w.b1f(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.E(B.w(B.a([B.E(w.aPK(),1),w.aLZ()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.w(B.a([s.aZj(),new B.D(A.hx,B.au(s.b1f(u),t,t,t),t),B.E(s.aPK(),1),s.aLZ()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:571}
C.fwY.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.eq(k,!1,j,A.aD,"",4280640491,i,l,m,"",h,C.bzB(),null,"","",0,!1,"",0,D.bg,4280172719,2,d,0,0,"",D.cl,D.cP,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bo,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bo,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bo,A.O)},
$S:z+98}
C.fwX.prototype={
$3(d,e,f){var w=this,v=C.bzB(),u=w.b?A.H:A.cv,t=w.c?A.cE:A.bo
return C.eq(w.d,!1,f,A.aD,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bg,4280172719,2,d,0,w.f,w.e,D.cl,D.cP,0.82,0.09,w.a)},
$S:z+28}
C.ceo.prototype={
$1(d){return B.u(d)},
$S:17}
C.fEE.prototype={
$0(){return this.a},
$S:z+15}
C.fkr.prototype={
$1(d){return d.a.d_(this.a)},
$S:z+30}
C.fks.prototype={
$2(d,e){return J.cm(e)},
$S:z+31}
C.fEG.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fEJ.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fEK.prototype={
$0(){return A.d.gH(D.wb)},
$S:z+33}
C.fEC.prototype={
$1(d){return d.a},
$S:z+16}
C.fEF.prototype={
$1(d){return d.a},
$S:z+16}
C.fCC.prototype={
$1(d){return A.a.i(B.u(d))},
$S:17}
C.fCD.prototype={
$1(d){return d.length!==0},
$S:3}
C.fCE.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fx1.prototype={
$0(){return C.cB()},
$S:22}
C.fx4.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cl,s=u?n:0
return C.eq(j,l,v,A.aD,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bg,4280172719,2,d,s,0,"",t,D.cP,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,D.df,!1,null,0,"","",A.bo,A.a6)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,D.df,!1,null,0,"",j,A.bo,A.a6)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,D.df,!1,null,0,j,k,A.bo,A.a6)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bo,A.a6)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bo,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.df,!1,k,l,"",m,A.bo,A.a6)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,j,!1,null,0,"",k,A.bo,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,D.df,!1,j,k,"",l,A.bo,A.a6)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,j,!1,k,0,l,m,A.bo,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bh,j,k,l,m,"",n,A.bo,A.a6)},
$S:z+35}
C.fx3.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.eq(A.bh,!1,4279310375,A.aD,"",i,24,A.bo,A.a6,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cl,D.f5,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fx2.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cl,t=v?j:0
return C.eq(A.bh,!1,4279310375,A.aD,"",4280640491,24,A.bo,A.a6,"",h,w,d,v?k:"",l,0,!1,"",0,D.bg,4280172719,2,"",t,0,"",u,D.ly,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.qk,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fx0.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fzs.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hib.ca(0,A.a.i(s.w).toLowerCase(),new C.fzq(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.ca(0,s.r,new C.fzr(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bv(t.e,new B.bnF(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1684}
C.fzq.prototype={
$0(){return F.aN9(this.a.w)},
$S:196}
C.fzr.prototype={
$0(){var w=this.a.r,v=B.aK(w.toLowerCase()," ","_")
return F.byv("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.ic(2,w,A.cf,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:196}
C.fcR.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fcS.prototype={
$1(d){return d.a},
$S:z+18}
C.fcT.prototype={
$1(d){return d.b},
$S:z+19}
C.fNJ.prototype={
$1(d){return D.h9s},
$S:z+41}
C.eXg.prototype={
$0(){return this.a.x=C.hMN(this.b,this.c.b)},
$S:0}
C.eXh.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eXe.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:416}
C.eXf.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:416}
C.eXd.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bQ(A.av,null,new C.eX8(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.jR,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b3(s,7)
if(r.length===0){n.m(new C.eX9(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.ho4(o,m.cIj(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.eXa(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eX8.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eXc(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b5W,A.f,p,p,D.b0Y,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Ce:D.Cj,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a7(64,64,C.fzH(v,i.b3i(h),u),p)))}t=B.m0(1,m,4,10,10,p,A.dT,!0)
if(!l)return B.bl(!0,new B.D(A8.xU,t,p),!0,!1,A.ae,!0,!0)
s=new C.eXb(i,d)
m=B.aH(d,A.bW,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.H_[e]
l.push(s.$2(r.a,r.b))}return B.bl(!0,new B.cT(new B.aX(0,1/0,0,m.a.b*0.85),B.cc(B.w(B.a([D.frN,A.R,t,A.dY,D.eQ7,A.au,D.fCx,A.R,B.m0(1.15,l,3,10,10,p,A.dT,!0)],n),A.F,p,A.e,A.j,0,A.p),A.r,p,A.y,p,A8.xU,p,p,A.ah),p),!0,!1,A.ae,!0,!0)},
$S:25}
C.eXc.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.n(16),t=v?A.b4.j(0.22):A.c.j(0.04),s=v?A.by:A.dB
return B.aB(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.q,v?2:1),u,w,w,A.n),w,w,w,w,A.hy,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eX7(this.b,d),w,w,w,w,w,w,!1,A.a7)},
$S:1685}
C.eX7.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.eXb.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.n(12),r=t?A.bL:A.bE
r=B.I(r,A.q,t?2.5:1)
w=B.n(10)
u=B.E(B.p(v,B.bw(w,d.length===0?B.p(v,D.ao2,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e2(new C.Nr(u.FC(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aB(v,B.w(B.a([u,A.au,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bL:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eX6(this.b,d),v,v,v,v,v,v,!1,A.a7)},
$S:142}
C.eX6.prototype={
$0(){B.a4(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.eX9.prototype={
$0(){var w=this.a
return w.w=w.w.FC("")},
$S:0}
C.eXa.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eWX.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eWY.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eX_.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eX0.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eX1.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eX2.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eWZ(w,d))},
$S:2}
C.eWZ.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eX3.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.u(this.b)},
$S:0}
C.eXu.prototype={
$0(){return this.a.f.fL()},
$S:0}
C.eXv.prototype={
$0(){var w=this.a
return w.m(new C.eXt(w))},
$S:0}
C.eXt.prototype={
$0(){return this.a.e=null},
$S:0}
C.eXw.prototype={
$0(){var w=this.a
return w.m(new C.eXs(w))},
$S:0}
C.eXs.prototype={
$0(){return this.a.x=null},
$S:0}
C.eXy.prototype={
$1(d){var w=this.a
return w.m(new C.eXr(w,d))},
$S:33}
C.eXr.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eXz.prototype={
$1(d){var w=this.a
return w.m(new C.eXq(w,d))},
$S:33}
C.eXq.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eXA.prototype={
$0(){var w=this.a
return w.m(new C.eXp(w))},
$S:0}
C.eXp.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eXB.prototype={
$1(d){var w=this.a
return w.m(new C.eXo(w,d))},
$S:33}
C.eXo.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eXC.prototype={
$1(d){var w=this.a
return w.m(new C.eXn(w,d))},
$S:33}
C.eXn.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eXD.prototype={
$0(){var w=this.a
return w.m(new C.eXm(w))},
$S:0}
C.eXm.prototype={
$0(){var w=this.a
return w.w=w.w.FC("")},
$S:0}
C.eXE.prototype={
$0(){var w=this.a
return w.m(new C.eXl(w,this.b))},
$S:0}
C.eXl.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eXF.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a7(u,null,w.bNX(D.a38[v]),null))
return B.bZ(A.bD,t,A.br,8,8)},
$S:156}
C.eXx.prototype={
$1(d){var w=this.a
return w.m(new C.eXk(w,d))},
$S:8}
C.eXk.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eX4.prototype={
$0(){var w=this.a
return w.m(new C.eX5(w,this.b,this.c))},
$S:0}
C.eX5.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.L(0,w)},
$S:0}
C.eXj.prototype={
$0(){var w=this.a
return w.m(new C.eXi(w,this.b))},
$S:0}
C.eXi.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fNI.prototype={
$1(d){return new C.a09(this.a,this.b,null)},
$S:z+42}
C.eWQ.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eWR.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eWS.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aGw?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eWT.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eWU.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eWP(w,d))},
$S:2}
C.eWP.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eWV.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.u(this.b)},
$S:0}
C.eWW.prototype={
$0(){var w=this.b
if(A.a.cc(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bP(0,new B.ba(w,B.hh(A.bv,w.length),A.aM))},
$S:0}
C.fjH.prototype={
$1(d){return d.a===this.a},
$S:221}
C.eed.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gax7(),n=o.x
n===$&&B.c()
w=B.n(16)
v=p.a.c
u=v?D.cRl:D.d72
t=D.xA.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.q,v?1.8:1.2)
s=D.xA.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.n(15)
n=B.bT(0,B.b4(q,q,q,new C.bh2(n*6.283,q),A.az),0,0,0)
o=o.x
o=B.bT(0,B.bOw(B.eE(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a8(A.a3,A.a8,A.x,B.a([A.K,D.bcX.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.x(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bw(s,new B.an(A.V,q,A.aa,A.r,B.a([n,o,B.au(B.w(B.a([B.X(p.a.c?A.e9:A.lX,D.xA,q,q,q,20),A.au,B.eM(A.A,B.nP(A.jy,D.flj,new C.eec()),A.f,A.dZ)],r),A.m,q,A.e,A.Q,0,A.p),q,q,q),B.ao(q,B.p(q,D.fhY,A.f,q,q,new B.o(D.xA,q,q,B.n(6),q,q,A.n),q,q,q,q,M.aj0,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a8(A.ay,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:92}
C.eec.prototype={
$1(d){return D.bXs.aA(0,d)},
$S:65}
C.fEL.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fEM.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:221}
C.fEN.prototype={
$2(d,e){return A.o.aM(e.a.length,d.a.length)},
$S:1686}
C.fEO.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aK(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aK(u,p,q.toUpperCase())}return u},
$S:14}
C.fEH.prototype={
$1(d){return d.a},
$S:z+18}
C.fEI.prototype={
$1(d){return d.b},
$S:z+19}
C.fMW.prototype={
$1(d){return new C.Zx(this.a,this.b,null)},
$S:z+44}
C.dj5.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dj6.prototype={
$1(d){return d.a===this.a.gaij()},
$S:z+10}
C.dj7.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dja.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.djb.prototype={
$0(){var w=this.a
return w.m(new C.dj9(w,this.b))},
$S:0}
C.dj9.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.djc.prototype={
$1(d){var w=this.a
return w.m(new C.dj8(w,d))},
$S:8}
C.dj8.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eeb.prototype={
$1$2(d,e,f){var w=B.bn(d,!0,f)
A.d.fN(w,this.a)
return B.dc(w,0,B.dG(e,"count",x.S),B.T(w).c).dM(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1687}
C.f9j.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.eq(A.bh,!1,4279310375,A.aD,"",i,24,A.bo,A.a6,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f5,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cl,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.f9l.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.eq(A.L,!1,this.b.d,A.aD,"",4280640491,i,A.bo,A.cM,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bg,4280172719,2,d,l,0,"",D.mF,D.cP,g,e,f)},
$S:z+46}
C.f9k.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.wx(0,"twinkle")
w=t===D.bg?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mF,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.f9i.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fy8.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fy9.prototype={
$0(){return A.d.gH(D.H8)},
$S:z+49}
C.fya.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fbi.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fEd.prototype={
$1(d){var w=2450411,v=4281908728
C.dy(d,C.dz(4280171146,1,0,D.bg,w,0,0.52,0,0))
C.dy(d,C.dz(v,1,0,D.bg,w,0,0.04,0.48,0))
C.dy(d,C.dz(4294047225,0.38,0,D.bg,w,0,0.48,0.52,0.62))
C.dy(d,C.dz(v,0.006,0,D.fr,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fEe.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dy(d,C.dz(4280172719,0.8,0,D.bg,w,0,0.36,0.58,0.1))
C.dy(d,C.dz(v,0.64,0,D.bg,w,0,0.28,0.64,0.18))
C.dy(d,C.dz(4282090230,0.44,0,D.bg,w,0,0.2,0.7,0.28))
C.dy(d,C.dz(v,0.006,0,D.fr,v,3,0.22,0.08,0.12))
C.dy(d,C.dz(u,0.004,0,D.fr,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fEf.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(4279080072,0.11,0,D.bg,w,0,1,0,0))
C.dy(d,C.dz(4279310375,0.11,0,D.bg,w,0,1,0,0.89))
C.dy(d,C.dz(856528008,0.72,0,D.jQ,w,0,0.28,0.72,0.14))
C.dy(d,C.dz(1426953352,0.2,0,D.jQ,w,0,0.2,0.78,0.22))
C.dy(d,C.dz(v,0.004,0,D.fr,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fEq.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4279203438,0.55,0,D.jQ,w,0,0.5,0.55,-0.05))
C.dy(d,C.dz(4280171146,0.5,0,D.jQ,w,0,0.45,0.62,0.35))
C.dy(d,C.dz(4280640491,0.4,0.3,D.jP,w,0,0.35,0.68,0.55))
C.dy(d,C.dz(571438702,0.12,0,D.bg,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fEv.prototype={
$1(d){var w=4280472558
C.dy(d,C.dz(4279310375,0.75,-0.4,D.jP,2450411,0,0.75,-0.15,0.35))
C.dy(d,C.dz(w,0.55,0,D.bg,2450411,0,0.06,0.42,0.38))
C.dy(d,C.dz(w,0.006,0,D.fr,w,3,0.35,0.08,0.08))
C.dy(d,C.dz(2282478,0.12,0,D.bg,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fEw.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3423541034,0.48,0,D.bg,w,0,1,0,0))
C.dy(d,C.dz(v,0.12,-0.08,D.jQ,w,0,1.1,-0.05,0.38))
C.dy(d,C.dz(858088427,0.35,0,D.bg,w,0,0.42,0.55,0.05))
C.dy(d,C.dz(v,0.006,0,D.fr,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fEx.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cQl[w]
u=Date.now()
t=$.j1
$.j1=t+1
v=new C.eG("design_"+(""+1000*u+"_"+t),D.f5,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a6,A.bo,A.aD,4279310375,A.bh,null,D.bg,v,4294967295,2,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.Kp
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fr,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fEy.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.mm,A.dr,w/3).l()
u=Date.now()
t=$.j1
$.j1=t+1
v=new C.eG("design_"+(""+1000*u+"_"+t),D.f5,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a6,A.bo,A.aD,4279310375,A.bh,null,D.CS,v,2450411,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.Kp
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fr,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fEz.prototype={
$1(d){var w=4294967295
C.dy(d,C.dz(4280640491,1,0,D.bg,2450411,0,0.42,0,0))
C.dy(d,C.dz(4280110808,1.1,1.57,D.jP,2450411,0,0.18,0.35,-0.05))
C.dy(d,C.dz(w,0.006,0,D.fr,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fEA.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dy(d,C.dz(w,0.1,0,D.bg,v,0,1,0,0))
C.dy(d,C.dz(u,0.012,0,D.bg,v,0,1,0,0.1))
C.dy(d,C.dz(u,0.006,0,D.fr,u,3,0.42,0.06,0.14))
C.dy(d,C.dz(403446057,0.68,0,D.jQ,v,0,0.22,0.72,0.18))
C.dy(d,C.dz(w,0.1,0,D.bg,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fEB.prototype={
$1(d){var w=4278630100
C.dy(d,C.dz(4279310375,1.2,0.15,D.jQ,2450411,0,0.55,-0.2,-0.1))
C.dy(d,C.dz(w,1.1,0.15,D.bg,2450411,0,0.08,0.15,-0.05))
C.dy(d,C.dz(1120295,0.18,0,D.bg,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fEg.prototype={
$1(d){var w=4292617766
C.dy(d,C.dz(4282714634,0.65,-0.2,D.jP,2450411,0,0.65,-0.1,0.45))
C.dy(d,C.dz(w,0.5,-0.15,D.jP,2450411,0,0.5,0.05,0.55))
C.dy(d,C.dz(w,0.006,0,D.fr,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fEh.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4278413729,0.35,3.14,D.jP,w,0,0.45,-0.05,0.7))
C.dy(d,C.dz(4278355143,0.3,3.14,D.jP,w,0,0.4,0.25,0.75))
C.dy(d,C.dz(4279150057,0.32,3.14,D.jP,w,0,0.5,0.55,0.72))
C.dy(d,C.dz(863884284,0.22,0,D.eN,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fEi.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dy(d,C.dz(w,0.14,0,D.bg,v,0,0.14,0.02,0.02))
C.dy(d,C.dz(2282478,0.14,0,D.bg,u,3,0.14,0.84,0.02))
C.dy(d,C.dz(w,0.28,0,D.jQ,v,0,0.35,-0.08,0.78))
C.dy(d,C.dz(u,0.22,0.5,D.jP,v,0,0.3,0.72,0.78))
C.dy(d,C.dz(w,0.006,0,D.fr,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fEj.prototype={
$1(d){var w=4293571336,v=1156231944
C.dy(d,C.dz(1841431,0.92,0,D.bg,w,3,0.92,0.04,0.04))
C.dy(d,C.dz(v,0.15,0,D.jP,2450411,0,0.15,0.02,0.02))
C.dy(d,C.dz(v,0.15,3.14,D.jP,2450411,0,0.15,0.83,0.83))
C.dy(d,C.dz(w,0.004,0,D.fr,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fEk.prototype={
$1(d){var w=4279080072,v=2450411
C.dy(d,C.dz(w,0.14,0,D.l7,v,0,0.14,0.68,0.18))
C.dy(d,C.dz(4279548070,0.14,0,D.l7,v,0,0.14,0.78,0.28))
C.dy(d,C.dz(4281193663,0.14,0,D.l7,v,0,0.14,0.68,0.38))
C.dy(d,C.dz(4284410580,0.14,0,D.l7,v,0,0.14,0.78,0.48))
C.dy(d,C.dz(4279203438,0.14,0,D.l7,v,0,0.14,0.68,0.58))
C.dy(d,C.dz(w,0.006,0,D.fr,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fEl.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3708753706,0.42,0,D.bg,w,0,1,0,0))
C.dy(d,C.dz(v,0.06,-0.05,D.jQ,w,0,1,0,0.38))
C.dy(d,C.dz(859356664,0.25,0,D.eN,w,0,0.25,0.7,0.08))
C.dy(d,C.dz(v,0.006,0,D.fr,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fEm.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.mm,A.dr,w/3).l()
u=Date.now()
t=$.j1
$.j1=t+1
v=new C.eG("design_"+(""+1000*u+"_"+t),D.f5,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a6,A.bo,A.aD,4279310375,A.bh,null,D.CS,v,2450411,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.Kp
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dy(d,C.dz(4280172719,0.08,0,D.bg,2450411,0,1,0,0))
C.dy(d,C.dz(s,0.006,0,D.fr,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fEn.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.j1
$.j1=u+1
u=new C.eG("design_"+(""+1000*v+"_"+u),D.f5,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a6,A.bo,A.aD,s,A.bh,null,D.fr,t,t,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
v=$.Kp
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}C.dy(d,C.dz(s,0.75,0,D.bg,2450411,0,0.22,0.72,0.1))
C.dy(d,C.dz(872415231,0.16,0,D.bg,2450411,0,0.16,0.75,0.15))
C.dy(d,C.dz(s,0.006,0,D.fr,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fEo.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dy(d,C.dz(4674921,0.9,0,D.bg,4287931320,2,0.9,0.05,0.05))
C.dy(d,C.dz(w,0.08,0,D.bg,v,0,0.08,0.03,0.03))
C.dy(d,C.dz(u,0.08,0,D.bg,v,0,0.08,0.89,0.03))
C.dy(d,C.dz(u,0.08,0,D.bg,v,0,0.08,0.03,0.89))
C.dy(d,C.dz(w,0.08,0,D.bg,v,0,0.08,0.89,0.89))
C.dy(d,C.dz(w,0.004,0,D.fr,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fEp.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.j1
$.j1=t+1
t=new C.eG("design_"+(""+1000*u+"_"+t),D.f5,0.55,0.14+v,0.38,0.18,"",24,A.a6,A.bo,A.aD,r,A.bh,null,D.bg,4294967295,4280640491,2,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.Kp
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,t)
u=B.aq(A.d5,A.cn,w/2).l()
t=Date.now()
s=$.j1
$.j1=s+1
u=new C.eG("design_"+(""+1000*t+"_"+s),D.f5,0.57,0.16+v,0.06,0.14,"",24,A.a6,A.bo,A.aD,r,A.bh,null,D.bg,u,q,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
v=$.Kp
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}C.dy(d,C.dz(4280171146,1,0,D.bg,q,0,0.48,0,0))
C.dy(d,C.dz(4280172719,1.1,1.57,D.jP,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fEr.prototype={
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
C.fEs.prototype={
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
C.fEt.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dy(d,C.dz(4294047225,0.08,0,D.bg,t,2,0.1,0.02,0.06))
C.dy(d,C.dz(s,0.42,0,D.bg,2450411,0,0.36,0.58,0.18))
C.dy(d,C.dz(872415231,0.12,0,D.bg,2450411,0,0.28,0.62,0.24))
C.dy(d,C.dz(16777215,0.28,0,D.eN,s,4,0.32,0,0.72))
C.dy(d,C.dz(r,0.006,0,D.fr,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.j1
$.j1=u+1
u=new C.eG("design_"+(""+1000*v+"_"+u),D.f5,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a6,A.bo,A.aD,4279310375,A.bh,null,D.eN,16777215,t,2,0,!1,"",0,D.cl,0,"","","","","",!1,0)
v=$.Kp
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fEu.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(3423541034,0.55,0,D.bg,w,0,1,0,0))
C.dy(d,C.dz(4009754623,0.56,0.45,D.jQ,w,0,0.56,0.22,0.18))
C.dy(d,C.dz(3439329279,0.44,0.45,D.jQ,w,0,0.44,0.28,0.24))
C.dy(d,C.dz(v,0.07,0,D.bg,w,0,0.22,0.34,0.62))
C.dy(d,C.dz(v,1,0,D.bg,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fvZ.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fw_.prototype={
$0(){return A.d.gH($.bDd())},
$S:z+52}
C.fjf.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fje.prototype={
$1(d){return C.hU4(d,this.a,this.b)},
$S:z+53}
C.fEU.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vP(1.0375,1.01875,1)
return new B.fR(v,u,new C.aS9(B.hJO(A.v3,C.hU7(w.c,w.d,v,u),t)))},
$S:419}
C.dTA.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:9}
C.dTz.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c0(w,new B.o(w,w,w,w,w,new B.c_(A.Ka,1.2,A.x,w,0,u.d,w,w),A.n),A.be),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jw(new B.an(A.V,w,A.b0,A.r,B.a([t,new B.eH(B.b4(w,w,w,new C.bdZ(u.a,r,q,r),A.az),w),B.au(new B.jI(r,new C.dTy(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.r,w)},
$S:346}
C.dTy.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.et.au(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gH(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hY(B.fO(i,A.A,r,r,A.ce,A.bU,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fW(A.A,0,6.283185307179586,A.x,t,r,new B.mn(e*0.8)),A.a5),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a7(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bqn(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cS(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a7(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.db(B.dU(B.w(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a8(A.a3,A.a8,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a7(r,m*0.022,r,r),B.d(w.a.c.gaKx(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a6,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.Q,0,A.p),new B.x(0,(1-o)*m*0.03)),o))
return B.db(B.ed(A.A,new B.D(new B.Q(l,0,l,0),B.w(j,A.m,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:108}
C.eW3.prototype={
$1(d){var w=this.b
return new B.a8(A.ay,A.aC,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).aA(0,d)},
$S:65}
C.c8W.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.n(14),t=g?A.bL:A.bE
t=B.I(t,A.q,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hH.j(0.4),A.J,14)],x.V):v
w=B.de(v,B.bw(B.n(12),d,A.aq),v,v,A.bb,new B.o(v,v,t,u,w,v,A.n),A.eJ,v,72,v,v,v,v,v)
return B.aB(v,new B.a7(112,v,B.w(B.a([w,A.fF,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bL:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a7)},
$S:1688}
C.c8X.prototype={
$0(){var w=this.a
return w.d.$1(w.c.FC(""))},
$S:0}
C.c8Y.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e2(new C.Nr(v.FC(u),!0,!1,null),!0,null),d.b,new C.c8Z(w,this.c,d),v.a===u)},
$S:z+54}
C.c8Z.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.ho4(u.b,t.c.FC(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fLl.prototype={
$1(d){return new C.Z5(this.a,null)},
$S:z+55}
C.d8n.prototype={
$0(){var w=this.a
w.d=w.gvC().bbh("data:"+this.b+";base64,"+A.cJ.gct().aK(this.c));++w.r},
$S:0}
C.d8s.prototype={
$0(){B.a4(this.a,!1).O(null)
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
return w.d=w.gvC().aDs(this.b)},
$S:0}
C.d8v.prototype={
$0(){var w=this.a
return w.m(new C.d8p(w))},
$S:0}
C.d8p.prototype={
$0(){var w=this.a
return w.d=w.gvC().bbh("")},
$S:0}
C.d8w.prototype={
$1(d){var w=this.a
return w.m(new C.d8o(w,d))},
$S:2}
C.d8o.prototype={
$0(){var w=this.a
return w.d=w.gvC().bbo(this.b)},
$S:0}
C.d8x.prototype={
$0(){var w=this.a
w=w.gvC().bbo(w.gax8().a.a)
B.a4(this.b,!1).O(w)
return null},
$S:0}
C.fLk.prototype={
$1(d){var w={}
w.a=this.a
return new B.dY(new C.fLj(w),null)},
$S:19}
C.fLj.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bl(!0,new B.cT(new B.aX(0,1/0,0,B.aH(d,A.bW,x.w).w.a.b*0.85),B.cc(B.w(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.n(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.fzC,A.au,D.fzS,A.aB,new C.aZu(v.a,new C.fLi(v,e,d),!0,w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.ae,!0,!1),A.f,w,w,D.b1w,w,w,w,w,A.Mx,w,w,w)},
$S:168}
C.fLi.prototype={
$1(d){this.b.$1(new C.fLh(this.a,d))
B.a4(this.c,!1).O(d)},
$S:z+56}
C.fLh.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fNH.prototype={
$1(d){return D.h4l},
$S:z+57}
C.df8.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.df9.prototype={
$0(){var w=this.a.c
w.toString
B.a4(w,!1).O(this.b)
return null},
$S:0}
C.dfa.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a4(w,!1).O(v)}},
$S:0}
C.fBA.prototype={
$1(d){var w=this.b
return new B.a8(A.ay,A.aC,A.x,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).aA(0,d)},
$S:65}
C.d84.prototype={
$3(d,e,f){var w,v=this,u=new B.aO($.W().r,A.ao,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.F(new B.b5(t+r*1.2,o))
u.F(new B.cR(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.F(new B.cR(w,q+p,w,q+p*1.2))
u.F(new B.D3(B.bV(new B.x(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aS(u,v.d)
s.aS(u,v.e)
p=B.N()
p.r=B.aq(v.a.d,A.c,0.6).gp(0)
s.af(new B.x(w,o),2.2,p)},
$S:435}
C.fBE.prototype={
$2(d,e){return A.k.aM(d.c,e.c)},
$S:z+58}
C.fu2.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fu3.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xX,B.w(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bw,D.fie,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dn(D.GG,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fu0(d),B.bm(A.bZ,w,w,w,A.c,w,A.ck,w,w,w,w,w)),A.R,B.er(A.o4,D.U7,new C.fu1(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.x0,w,w,w,w))],x.p),A.ai,w,A.e,A.Q,0,A.p),w),!0,!1,A.ae,!0,!0)},
$S:25}
C.fu0.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.fu1.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.cem.prototype={
$1(d){return d.hG()},
$S:z+59}
C.cen.prototype={
$1(d){return d.ag()},
$S:z+60}
C.cel.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a2(b5,x.N,x.z),b3=B.aJ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.N(b3)
if(b4==null)b4=A.a6.gdL(0)
b3=B.aJ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.N(b3)
if(w==null)w=0
b3=B.aJ(b2.h(0,"align"))
v=b3==null?b1:A.k.N(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hPS(b2.h(0,"type"))
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
n=A.ayK[A.o.D(b4,0,8)]
m=D.cTe[A.o.D(w,0,1)]
l=C.hTv(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.avs[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hWm(b2.h(0,"shape"))
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
a3=C.hjh(b2.h(0,"textTransition"))
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
return C.eq(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.ceb.prototype={
$1(d){return d.hG()},
$S:z+62}
C.cec.prototype={
$1(d){return d.ag()},
$S:z+63}
C.ce8.prototype={
$1(d){return B.u(d)},
$S:17}
C.ce9.prototype={
$1(d){return B.u(d)},
$S:17}
C.cea.prototype={
$1(d){return C.h9X(B.a2(d,x.N,x.z))},
$S:z+64}
C.ceD.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.ceE.prototype={
$0(){return A.d.gH(D.a2N)},
$S:z+66}
C.cey.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cd(d.f))w.n(0,u,d.hG())},
$S:z+7}
C.cex.prototype={
$2(d,e){return e.f.aM(0,d.f)},
$S:z+21}
C.cet.prototype={
$1(d){return new B.M(d,new C.ceu(),B.T(d).k("M<1,S>")).fn(0,new C.cev())},
$S:z+69}
C.ceu.prototype={
$1(d){return d.f},
$S:z+70}
C.cev.prototype={
$2(d,e){return d.cd(e)?d:e},
$S:703}
C.cew.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hFD(d)},
$S:z+71}
C.cez.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.ceA.prototype={
$2(d,e){return e.f.aM(0,d.f)},
$S:z+21}
C.ceB.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fCc.prototype={
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
C.fC8.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fC9.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fCa.prototype={
$2(d,e){var w
if(d.b===D.cP){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fCb.prototype={
$2(d,e){return d.b===D.f5&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.ceh.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.i44(b2,b3),b5=B.a6(b4).k("bc<2>")
b5=B.cC(new B.bc(b4,b5),new C.ceg(),b5.k("J.E"),x.N)
w=B.df(b5,B.a6(b5).k("J.E"))
b1=b1.e
v=A.pO.au(0,A.k.D(b1,0,1))
u=new C.cei()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cej(a9,b7.d)
r=new C.cek(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.L)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jE.au(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kF(A.k.D(1-k,0,1),B.dU(B.ed(A.A,r.$1(l),1-k*0.06,a8,a8),new B.x(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.L)(b2),++m){i=b2[m]
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
if(a2===D.f5){a4=i.hG()
a4.ay=B.aq(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.aq(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.ly&&l.at==i.at?r.$1(i):new B.an(A.V,a8,A.b0,A.r,B.a([new B.kF(A.k.D(o,0,1),r.$1(l),a8),new B.kF(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iH(B.wi(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cl)a7=D.mF
p.push(s.$5(i.c,i.d,i.e,i.f,C.hlx(a7,a6,r.$1(i))))}}return B.c0(new B.an(A.V,a8,A.aa,A.r,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a8(A.a3,A.a8,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.be)},
$S:436}
C.ceg.prototype={
$1(d){return d.a},
$S:z+22}
C.cei.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.cej.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1692}
C.cek.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a7v(v,C.b0C(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dGg.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ed(new B.dd(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:45}
C.ceq.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.cer.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fF0.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:289}
C.fE7.prototype={
$1(d){return new C.ad8(this.a,this.b,null)},
$S:z+78}
C.epg.prototype={
$0(){return this.a.PT(this.b,C.i7p(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eph.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.PT(this.b,C.i7r(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.epi.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.PT(this.b,C.i7q(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.epj.prototype={
$0(){Y.hlh()
B.a4(this.a,!1).O(null)},
$S:0}
C.cef.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1693}
C.cee.prototype={
$2(d,e){var w,v=this,u=null,t=B.dM(d,A.ny),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.D(p*Math.max(B.jK(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bU:A.du
return B.fO(t,A.A,o,new C.ced(),A.ce,w,!0,u,!1,new B.cx("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1694}
C.ced.prototype={
$3(d,e,f){return D.ac6},
$S:215}
C.fC7.prototype={
$2(d,e){var w,v,u,t=null,s=B.n(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a8(A.ay,A.aC,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.dc(r,0,B.dG(6,"count",x.S),B.T(r).c)
u=r.$ti.k("M<ak.E,cL>")
r=B.C(new B.M(r,new C.fC6(e.b,e.d),u),u.k("ak.E"))
return B.bw(s,B.c0(new B.an(A.V,t,A.aa,A.r,r,t),new B.o(v,t,t,t,t,w,A.n),A.be),A.aq)},
$S:1695}
C.fC6.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b0C(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.flN.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cM(r.b,new C.flL(d))
w=B.aH(d,A.bW,x.w).w
v=B.n(22)
u=B.I(A.bE,A.q,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fN,28)],x.V)
s=x.p
return new B.d_(e,!1,B.au(B.aF(!1,A.a1,!0,q,B.p(q,B.w(B.a([B.B(B.a([B.E(B.w(B.a([B.d(r.c,q,q,q,q,q,q,A.ki,q,q,q),A.au,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bK(!1,A.zS,q,q,!0,q,q,new C.flM(p,d),q,B.fx(q,q,A.bi,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Ft,q,new B.b7(B.n(12),A.W),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aB,r.d],s),A.m,q,A.e,A.Q,0,A.p),A.f,q,new B.aX(0,w.a.a*0.94,0,1/0),new B.o(A.av,q,u,v,t,q,A.n),q,q,q,A.fL,A.FC,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,q,q),q)},
$C:"$3",
$R:3,
$S:252}
C.flL.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a4(w,!0).pB())B.a4(w,!0).eE()},
$S:0}
C.flM.prototype={
$0(){var w=this.a.a
if(w!=null)w.a7(0)
B.a4(this.b,!0).eE()},
$S:0}
C.f3B.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.V,t,A.b0,A.r,B.a([u.c,B.db(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.V,t,A.b0,A.r,B.a([u.c,B.dU(u.b,new B.x((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.V,t,A.b0,A.r,B.a([u.c,B.dU(u.b,new B.x(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.V,t,A.b0,A.r,B.a([u.c,B.dU(u.b,new B.x(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.V,t,A.b0,A.r,B.a([u.c,B.dU(u.b,new B.x(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.V,t,A.b0,A.r,B.a([u.c,B.ed(A.A,B.db(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.V,t,A.b0,A.r,B.a([u.c,B.ed(A.A,B.db(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fC(r*3.14159)
return B.fu(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.k9(r*3.14159)
return B.fu(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fC(r*1.2)
s.k9(r*0.5)
return B.fu(A.A,B.db(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fC(-r*1.4)
return B.fu(A.a8,B.db(u.b,r),t,s,!0)
case 12:return new B.an(A.V,t,A.b0,A.r,B.a([u.c,B.db(B.ed(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.V,t,A.b0,A.r,B.a([u.c,B.jw(u.b,A.r,new C.aJ_(r,t))],x.p),t)
case 15:return new B.an(A.V,t,A.b0,A.r,B.a([u.c,B.jw(u.b,A.r,new C.aJ_(1-r,t))],x.p),t)
case 16:v=D.b4W.au(0,r)
return new B.an(A.V,t,A.b0,A.r,B.a([u.c,B.ed(A.A,B.db(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.V,t,A.b0,A.r,B.a([u.c,B.db(B.el(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dp()
s.mK(r*6.28)
s.jQ(r,r,r,1)
return B.fu(A.A,u.b,t,s,!0)
case 20:return B.eE(A.A,(r-0.5)*0.35,new B.an(A.V,t,A.b0,A.r,B.a([u.c,B.db(u.b,r)],x.p),t),t)}},
$S:59}
C.dRN.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:11}
C.dRM.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:11}
C.dRL.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hlx(v,w,e)},
$S:59}
C.ce7.prototype={
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
q=B.C(new B.M(v,new C.ce6(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c0(new B.an(A.V,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.be)},
$S:436}
C.ce6.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cl?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a7v(m,new C.UU(d,C.b0C(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d5j.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d5i(w))},
$S:11}
C.d5i.prototype={
$0(){return this.a.d++},
$S:0}
C.edU.prototype={
$2(d,e){var w,v=null,u=A.o.am(this.b.e.a,1000),t=A.o.E(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aNJ.t(0,A.d.gH(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.i3O(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.e9(0,w*7,0,1)
s.fC(Math.sin(t)*0.32)
s.k9(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jQ(w,w,w,1)
return B.fu(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dU(B.ed(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.x(s*14,w*10))
default:s=Math.sin(t)
return B.db(B.ed(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:59}
C.eTH.prototype={
$1(d){var w
$.W()
w=B.N()
w.b=A.af
w.c=d
w.e=A.hn
return w},
$S:1696}
C.fzI.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.as(o,o):new B.as(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gdH()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b4(r,r,r,new C.bqg(u,t,r),A.az))
w.push(B.nu(s.d,A.aq,new C.bev(u,t,r)))
if(!p)w.push(B.b4(r,r,r,new C.bpg(u,q,t,r),A.az))
return B.au(new B.a7(v.a,v.b,new B.an(A.V,r,A.b0,A.r,w,r),r),r,r,r)},
$S:247}
C.foK.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:290}
C.evu.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.CQ(t.a.a.c),$async$$0)
case 3:s=e
r=J.a3(s)
if(r.gal(s)){u=null
w=1
break}u=r.dK(s,new C.evs(),new C.evt(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1697}
C.evs.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:195}
C.evt.prototype={
$0(){return J.fq(this.a)},
$S:1699}
C.erS.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.erT.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.erU.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.ets.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.etg.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eth.prototype={
$1(d){return d.hG()},
$S:z+81}
C.erf.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.euA.prototype={
$0(){this.a.tA()},
$S:0}
C.evq.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.of()
w.K7()},
$S:0}
C.etq.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.of()
w.K7()},
$S:0}
C.evd.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eve.prototype={
$1(d){return d.b===D.cP},
$S:z+4}
C.evf.prototype={
$1(d){return d.a},
$S:z+22}
C.evg.prototype={
$0(){var w=this.a.r
return new B.ar(new B.ba(w,A.b3,A.aM),$.aw())},
$S:270}
C.evh.prototype={
$0(){return B.jS(!0,null,!0,!0,null,null,!1)},
$S:705}
C.eqE.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.evr.prototype={
$0(){},
$S:0}
C.esz.prototype={
$0(){var w=this.a
w.e=this.b.hG()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xu()
w.K7()},
$S:0}
C.eqC.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.xu()},
$S:0}
C.eqD.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.xu()},
$S:0}
C.esW.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.esX.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xu()
w.K7()
w.z="Home"},
$S:0}
C.esY.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.esy.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,A.U6,w,w,!0,w,w,new C.esx(d),w,w)],x.p),w,w,w,D.fBp,w,w,w,w,D.fiG,w)},
$S:18}
C.esx.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.esv.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,A.U6,w,w,!0,w,w,new C.esu(d),w,w)],x.p),w,w,w,D.fmE,w,w,w,w,D.fko,w)},
$S:18}
C.esu.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.esw.prototype={
$0(){},
$S:0}
C.erO.prototype={
$1(d){return this.a.b_C(C.bBd(d))},
$S:z+7}
C.erP.prototype={
$1(d){return this.a.aeU(C.bBd(d))},
$S:z+7}
C.esF.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bw,D.fBt,A.au,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bw,new C.Px(A.vO,D.awL,"HATI YA KUHOWA","Hati ya mahari",new C.esA(d),w),A.R,new C.Px(A.h9,D.d4O,"HATI YA KUHOWESHA","Hati ya kupokea",new C.esB(d),w),A.R,new C.Px(A.i5,D.cRr,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.esC(d),w),A.R,new C.Px(A.hO,D.cPF,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.esD(d),w)],v)
if(this.a.gabr())A.d.v(u,B.a([A.R,new C.Px(A.j4,D.cAI,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.esE(d),w)],v))
return B.bl(!0,B.cc(B.w(u,A.ai,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,E.xX,w,w,A.ah),!0,!1,A.ae,!0,!0)},
$S:25}
C.esA.prototype={
$0(){B.a4(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.esB.prototype={
$0(){B.a4(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.esC.prototype={
$0(){B.a4(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.esD.prototype={
$0(){B.a4(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.esE.prototype={
$0(){B.a4(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.esG.prototype={
$0(){var w=this.a
w.e=this.b.hG()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xu()},
$S:0}
C.eqG.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eqH.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.ne(r,v.f+1,q);++v.f
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
C.esR.prototype={
$1(d){return d.b===D.ly},
$S:z+4}
C.esS.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gH(v).go
w.b=A.d.gH(v).id
return new B.dY(new C.esP(w,this.a,v),null)},
$S:19}
C.esP.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.esQ(p,o,a3,n),l=B.P(a2).ax.a===A.I,k=l?A.c:A.M,j=l?A.aR:A.ak,i=l?A.bm:A.bM,h=l?A.M:A.c,g=B.n(28),f=B.I(l?A.bE:A.aL,A.q,1),e=x.p,d=B.B(B.a([B.E(B.w(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bz,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aI(q,q,q,q,B.X(A.cy,j,q,q,q,q),q,q,q,new C.esL(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Cj[w]
v.a=null
t=v.a=u.a
a1.push(new C.bgX(t,u.b,p.a===t,i,k,new C.esM(v,m),q))}a1=B.bZ(A.bD,a1,A.br,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Ce[w]
s.a=null
t=s.a=r.a
u.push(new C.bgW(t,r.b,p.b===t,k,j,new C.esN(s,m),q))}return B.bl(!0,B.p(q,B.cc(B.w(B.a([d,A.aQ,a0,A.R,a1,A.bw,v,A.R,B.bZ(A.bD,u,A.br,12,12),A.bw,new B.a7(1/0,48,B.er(D.bTv,D.fDT,new C.esO(o,n),B.dg(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b7(B.n(16),A.W),D.b_1,q,q,q,q)),q)],e),A.F,q,A.e,A.Q,0,A.p),A.r,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.tJ,D.buZ,q,q,q),!0,!1,A.ae,!0,!0)},
$S:90}
C.esQ.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.esJ(w.a,d,e))
w.b.d4(new C.esK(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1702}
C.esJ.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.esK.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.esL.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.esM.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.esN.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.esO.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.GB(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d4(new C.esI(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.esI.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.esU.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.esV.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bs(v,new C.esT(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.ne(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xu()},
$S:0}
C.esT.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.etb.prototype={
$1(d){return d.b===D.cP},
$S:z+4}
C.etc.prototype={
$1(d){return d.w},
$S:z+82}
C.etd.prototype={
$2(d,e){return d>e?d:e},
$S:80}
C.ete.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.c:A.M,s=u?A.aR:A.ak,r=u?A.bm:A.aO,q=u?A.M:A.c,p=B.n(28),o=B.I(u?A.bE:A.aL,A.q,1),n=B.aH(d,A.bW,x.w).w,m=w.a,l=x.p,k=w.b
return B.bl(!0,B.p(v,B.w(B.a([B.B(B.a([B.p(v,D.bNa,A.f,v,v,D.b0o,v,38,v,v,v,v,v,38),A.bc,B.E(B.w(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aI(v,v,v,v,B.X(A.cy,s,v,v,v,v),v,v,v,new C.et8(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aB,new B.dq(1,A.cm,B.hL(v,new C.et9(m,k,w.c,s,w.d,t,r),k.length,A.fB,v,A.ah,new C.eta(),!0),v)],l),A.F,v,A.e,A.Q,0,A.p),A.f,v,new B.aX(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.tJ,A.Z6,v,v,v),!0,!1,A.ae,!0,!0)},
$S:25}
C.et8.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.eta.prototype={
$2(d,e){return A.ac},
$S:36}
C.et9.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cv
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aI(q,q,q,q,D.bQk,q,q,q,new C.et6(s,w,p),q,q,q,q,"Add an icon",q)
return B.w(B.a([new B.D(D.bxe,n,q),B.aM(q,A.U,!1,q,!0,A.r,q,B.aN(),v,q,q,q,q,q,2,B.br(q,new B.b3(4,B.n(16),A.W),q,A.eR,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b3(4,B.n(16),D.aZH),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.aj,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.et7(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a9,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a4,q,A.am,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:706}
C.et6.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.i9y(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geD()?p.a:q.a.length
n=p.geD()?p.b:q.a.length
m=A.a.oM(q.a,o,n,s)
r.bP(0,new B.ba(m,B.hh(A.bv,o+s.length),A.aM))
l.aiZ(k,m)
l.pn()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.et7.prototype={
$1(d){var w=this.a
w.aiZ(this.b.a,d)
w.pn()},
$S:2}
C.etf.prototype={
$0(){},
$S:0}
C.esH.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eqX.prototype={
$0(){},
$S:0}
C.eqY.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hmR(this.b,w,!0)
w=this.a
w.r=null
w.xu()},
$S:0}
C.eqZ.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.er_.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bs(v,new C.eqW(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.ne(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xu()},
$S:0}
C.eqW.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.etl.prototype={
$1(d){return B.oR(new C.etk(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:131}
C.etk.prototype={
$2(d,e){var w=null,v=x.p
return B.w(B.a([new B.D(E.aiH,B.w(B.a([D.fz0,A.an,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.E(B.iv(!0,w,e,A.y,D.eWs,new C.etj(this.a,this.b),20,A.tL,w,A.ah,!1),1)],v),A.ai,w,A.e,A.j,0,A.p)},
$S:439}
C.etj.prototype={
$2(d,e){var w=null,v=D.H8[e],u=C.hFy(v),t=B.n(16),s=B.n(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.q,1),o=q.j(0.2),n=B.n(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fD,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.eQ3,A.f,w,w,new B.o(A.dL.j(0.85),w,w,B.n(8),w,w,A.n),w,w,w,w,A.ne,w,w,w)],m))
return B.aF(!1,A.a1,!0,w,B.aL(!1,t,!0,B.p(w,B.w(B.a([B.B(n,A.m,w,A.e,A.j,0,w,w),A.b5,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a8(A.a3,A.a8,A.x,r,w,w),A.n),w,w,w,w,A.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eti(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:77}
C.eti.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cep(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a4(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.etm.prototype={
$0(){var w=this.a
w.e=this.b.hG()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xu()},
$S:0}
C.epB.prototype={
$0(){var w,v=this.a,u=v.gqp(),t=C.rw(4294967295,null,0,0,null,C.cB(),D.mE,"","","",D.df),s=this.b
C.ceC(t,s,u)
w=v.gdt()
if(w!=null&&s!==D.CR){t.e=w.e
t.f=w.f}A.d.c9(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eqV.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ag()
q.n(0,"id",C.cB())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aW(w),u=x.f;v.C();){t=v.gT(v)
if(u.b(t)){s=Date.now()
r=$.j1
$.j1=r+1
J.aG(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c9(v.e.r,v.f+1,C.h9X(q));++v.f},
$S:0}
C.eqT.prototype={
$0(){var w=this.a
A.d.cF(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.etu.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cF(v.e.r,u),s=this.c
A.d.c9(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eqP.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bs(v.d,new C.eqO(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eqO.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ett.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.S(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eqF.prototype={
$0(){var w=this.a.r
return new B.ar(new B.ba(w,A.b3,A.aM),$.aw())},
$S:270}
C.erg.prototype={
$0(){return B.jS(!0,null,!0,!0,null,null,!1)},
$S:705}
C.evb.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.evc.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.at9(w).fL()
v=u.Wz(w)
v.sti(B.hh(A.bv,v.a.a.length))},
$S:9}
C.euB.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Xy(v)
if(u!=null&&u.b===D.cP)w.Wz(u).saU(0,u.r)}else w.w=null},
$S:0}
C.epC.prototype={
$0(){var w=C.cB(),v=this.a,u=C.eq(A.bh,!1,v.gqp().e.l(),A.aD,"",4280640491,24,A.bo,A.a6,"",0.22,w,null,"","",0,!1,"",0,D.bg,4280172719,2,"Tap to edit text",0,0,"",D.cl,D.cP,0.7,0.15,0.2)
A.d.L(v.gdt().z,u)
v.r=u.a},
$S:0}
C.epz.prototype={
$0(){var w=C.cB(),v=this.a,u=C.eq(A.bh,!1,4279310375,A.aD,"",v.gqp().c.j(0.25).l(),24,A.bo,A.a6,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqp().c.l(),2,"",0,0,"",D.cl,D.f5,0.25,0.3,0.3)
A.d.L(v.gdt().z,u)
v.r=u.a},
$S:0}
C.epp.prototype={
$0(){var w=C.eq(A.bh,!1,4279310375,A.aD,"",4280640491,24,A.bo,A.a6,"",0.55,C.cB(),this.b,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cl,D.ly,0.6,0.2,0.18),v=this.a
A.d.L(v.gdt().z,w)
v.r=w.a},
$S:0}
C.epm.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.c_p],x.p)
for(w=J.aW(this.a);w.C();){v=w.gT(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gajA().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,D.bKS,r,r,r,r,new C.epl(d,v),!1,r,r,r,r,r,new B.y(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.y(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bl(!0,B.ct(q,r,r,r,r,A.ah,!0),!0,!1,A.ae,!0,!0)},
$S:25}
C.epl.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.epn.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cB(),u=this.b,t=A.S.ao(u.ag(),null),s=C.eq(A.bh,!1,4279310375,A.aD,u.b,4280640491,24,A.bo,A.a6,"",0.86,v,null,"","",0,!1,"",0,D.bg,4280172719,2,t,0,0,"",D.cl,D.a5k,w,0.5-w/2,0.07)
t=this.a
A.d.L(t.gdt().z,s)
t.r=s.a},
$S:0}
C.eqR.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eqS.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bs(v.gdt().z,new C.eqQ(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.R$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.eqQ.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eq3.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cP)s.Q=t.c.l()
else if(w===D.f5){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eq4(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.L)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eq4.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.eq8.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.eq9(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.L)(s),++u)v.$1(s[u])}else{t=s.gdt()
if(t!=null)v.$1(t)}},
$S:0}
C.eq9.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eq6.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cP){s.Q=t.c
return}w=new C.eq7(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.L)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eq7.prototype={
$1(d){var w,v,u
for(w=A.d.gae(d.z),v=new B.f4(w,new C.eq5()),u=this.a;v.C();)w.gT(0).Q=u},
$S:z+1}
C.eq5.prototype={
$1(d){return d.b===D.cP},
$S:z+4}
C.eq2.prototype={
$0(){return C.ceC(this.b,this.c,this.a.gqp())},
$S:0}
C.et5.prototype={
$0(){return A.d.c9(this.a.d,0,this.b)},
$S:0}
C.evk.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.evl.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.evm.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.evn.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c9(s,0,v.b)
else{w=A.d.bg(s,new C.evj(v))
if(w>=0)t.d[w]=v.b}if(v.a.gSh()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hG()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.xu()
t.K7()}},
$S:0}
C.evj.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.euR.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.abv(),s=w.b,r=u.abw(A.fb,A.k8,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.n(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.q,1),n=x.p
p=B.a([t,A.N,r,A.bw,B.p(v,B.B(B.a([B.E(u.aUI(w.c,A.ak),1),new B.D(A.fq,B.p(v,D.bKY,A.f,v,v,new B.o(A.fb.j(0.18),v,v,v,v,v,A.a5),v,34,v,v,v,v,v,34),v),B.E(u.aUI(s,A.fb),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a8(A.ay,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.bC,v,v,v),A.bw,u.aUL(A.fb,d,D.bH9,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.R,u.bXn(A.aP,d,A.u0,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aUJ(d,"Not now"))
return new C.JR(B.w(p,A.ai,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.euQ.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.JR(B.w(B.a([v.abv(),A.N,v.abw(A.aP,D.bGP,"Pick which saved document should receive the details.","Choose "+this.b),A.aQ,new B.cT(new B.aX(0,1/0,0,B.aH(d,A.bW,x.w).w.a.b*0.42),B.hL(w,new C.euO(v,u,d),u.length,w,w,A.ah,new C.euP(),!0),w),A.aB,v.aUJ(d,"Cancel")],x.p),A.ai,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.euP.prototype={
$2(d,e){return A.R},
$S:36}
C.euO.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.n(16),t=A.c.j(0.05),s=B.n(16),r=B.I(A.c.j(0.08),A.q,1),q=x.p
return B.aF(!1,A.a1,!0,w,B.aL(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.any,A.f,w,w,new B.o(w,w,w,B.n(12),w,D.bXn,A.n),w,42,w,w,w,w,w,42),A.bc,B.E(B.w(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.mK,w,w,w),A.cR,B.d("Updated "+this.a.PU(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a6,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.X(A.eA,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.euN(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:77}
C.euN.prototype={
$0(){B.a4(this.a,!1).O(this.b.a)
return null},
$S:0}
C.euK.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.abv()
t=t.abw(A.aF,A.u9,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.JR(B.w(B.a([s,A.N,t,A.bw,B.B(B.a([B.E(B.dT(A.a8G,new C.euI(d),B.dg(u,u,u,u,u,u,u,u,u,A.c,u,u,A.ck,u,new B.b7(B.n(14),A.W),new B.az(w,1,A.q,-1),u,u,u,u)),1),A.at,B.E(B.bG(D.fkY,new C.euJ(d),B.bm(A.fb,u,u,u,A.c,u,A.ck,u,new B.b7(B.n(14),A.W),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.ai,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.euI.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.euJ.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.euM.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.abv(),s=w.b,r=u.abw(A.aV,A.e9,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.E(u.aut("Names",""+w.c),1),A.ab,B.E(u.aut("Fields",""+w.d),1),A.ab,B.E(u.aut("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bm(A.bi,v,v,v,A.c,v,A.xM,v,new B.b7(B.n(14),A.W),v,v,v)
return new C.JR(B.w(B.a([t,A.N,r,A.aQ,p,A.bw,B.bG(B.d("Open "+s,v,v,v,v,v,v,A.nv,v,v,v),new C.euL(d),o),A.R,u.aUK(d,"Stay here",!1)],q),A.ai,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.euL.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.erK.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.erJ.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.euC.prototype={
$1(d){return d.b===D.cP},
$S:z+4}
C.eva.prototype={
$1(d){var w=this.a,v=this.b
return new C.a_h(A.d.dK(w.d,new C.ev8(v),new C.ev9(v)).hG(),w.f,null)},
$S:z+84}
C.ev8.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ev9.prototype={
$0(){return this.a},
$S:z+85}
C.epu.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bC,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.hq,w,w,w),w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bMK,w,w,w,w,new C.eps(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fj_,w,w,w)],x.p)
if(v>1)t.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bNV,w,w,w,w,new C.ept(d),!1,w,w,w,w,w,D.fF5,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dg,w,w,w),w,w,w))
return B.bl(!0,B.w(t,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ae,!0,!0)},
$S:25}
C.eps.prototype={
$0(){B.a4(this.a,!1).O("scroll")
return null},
$S:0}
C.ept.prototype={
$0(){B.a4(this.a,!1).O("split")
return null},
$S:0}
C.epv.prototype={
$0(){var w=this.b,v=w.c,u=C.eq(A.bh,!1,4279310375,A.aD,v,4280640491,24,A.bo,A.a6,"",0.84,C.cB(),w.b,"","",0,!1,"",0,D.bg,4280172719,2,v,0,0,"",D.cl,D.RZ,0.88,0.06,0.08)
v=this.a
A.d.L(v.gdt().z,u)
v.r=u.a},
$S:0}
C.epw.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.j1
$.j1=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.j1
$.j1=k+1
m.push(new C.eG(""+1000*l+"_"+k,D.RZ,0.04,0.06,0.92,0.88,v,24,A.a6,A.bo,A.aD,4279310375,A.bh,u,D.bg,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cl,0,"","","","","",!1,0))
A.d.c9(j.e.r,i+q-1,new C.lG(""+1000*p+"_"+o,r+n,"",D.qj,4294967295,null,D.df,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.epA.prototype={
$0(){var w,v=C.cB(),u=this.a,t=u.e
t=(t==null?null:C.kw(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.eq(A.bh,!1,4279310375,A.aD,t,4280640491,24,A.bo,A.a6,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cl,D.l6,0.35,0.55,0.62)
A.d.L(u.gdt().z,w)
u.r=w.a},
$S:0}
C.epr.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b2o(o)
w=C.cB()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.eq(A.bh,!1,4279310375,A.aD,"marriage_sign_placed_"+A.a.ef(v.db,"marriage_sign_",""),4280640491,24,A.bo,A.a6,"",r,w,o.a,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cl,D.l6,s,u,t)
A.d.L(p.gdt().z,q)
A.d.bs(p.gdt().z,new C.epq(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.i3x(p)}},
$S:0}
C.epq.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.etr.prototype={
$0(){var w=this.a,v=this.b
w.b2o(v)
this.c.at=v.a
w.r=null},
$S:0}
C.evi.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.erN.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bs(r.z,new C.erM())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.erM.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.eqc.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.eqd.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.tA()},
$S:9}
C.epo.prototype={
$0(){var w=C.eq(A.bh,!1,4279310375,A.aD,"HD Photo",4280640491,24,A.bo,A.a6,"",0.8,C.cB(),this.b,"","",0,!1,"",0,D.bg,4280172719,2,"",0,0,"",D.cl,D.ly,0.8,0.1,0.1),v=this.a
A.d.L(v.gdt().z,w)
v.r=w.a},
$S:0}
C.ere.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.epx.prototype={
$0(){var w=this.a,v=this.b
A.d.L(w.gdt().z,v)
w.r=v.a},
$S:0}
C.epG.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.epH.prototype={
$0(){var w=this.b.hG(),v=C.cB(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.eq(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.L(t.gdt().z,f)
t.r=f.a},
$S:0}
C.epI.prototype={
$0(){var w=this.a.gdt().z,v=this.b,u=A.d.bg(w,new C.epF(v))
if(u>=0&&u<w.length-1){A.d.cF(w,u)
A.d.c9(w,u+1,v)}},
$S:0}
C.epF.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.epT.prototype={
$0(){var w=this.a.gdt().z,v=this.b,u=A.d.bg(w,new C.epE(v))
if(u>0){A.d.cF(w,u)
A.d.c9(w,u-1,v)}},
$S:0}
C.epE.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.epW.prototype={
$0(){return this.a.as=A.bh},
$S:0}
C.epX.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.epY.prototype={
$0(){return this.a.as=A.dP},
$S:0}
C.epZ.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eq_.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eq0.prototype={
$1(d){return d.b===D.cP},
$S:z+4}
C.eq1.prototype={
$1(d){return d.length!==0},
$S:3}
C.epJ.prototype={
$0(){var w=this.a,v=w.gdt().z,u=C.cB()
A.d.L(v,C.CV(w.gqp().c.j(0.18).l(),0.1,u,D.bg,0,2,1,0,0))
u=w.gdt().z
v=C.cB()
A.d.L(u,C.iX(A.bh,!1,w.gqp().d.l(),A.aD,18,A.bo,A.H,0.07,v,"Document Header",0,D.df,0.9,0.05,0.02))},
$S:0}
C.epK.prototype={
$0(){var w,v=this.a,u=v.gdt().z,t=C.cB()
A.d.L(u,C.CV(v.gqp().c.j(0.12).l(),0.1,t,D.bg,0,2,1,0,0.9))
t=v.gdt().z
u=C.cB()
w=C.bBW()
A.d.L(t,C.iX(A.L,!1,v.gqp().e.l(),A.aD,12,A.bo,A.a6,0.06,u,"Footer \xb7 "+w,0,D.df,0.9,0.05,0.92))},
$S:0}
C.epL.prototype={
$0(){A.d.L(this.a.gdt().z,C.CV(1727914055,0.12,C.cB(),D.bg,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.epM.prototype={
$0(){var w=4279310375
A.d.L(this.a.gdt().z,C.CV(w,0.08,C.cB(),D.bg,w,2,0.5,0.2,0.4))},
$S:0}
C.epN.prototype={
$0(){var w=this.a,v=w.gdt().z,u=C.cB()
A.d.L(v,C.CV(w.gqp().c.j(0.35).l(),0.12,u,D.CS,4280640491,2,0.2,0.15,0.55))
A.d.L(w.gdt().z,C.iX(A.bh,!1,4279310375,A.aD,18,A.bo,A.a6,0.15,C.cB(),"Important note",0,D.qk,0.5,0.38,0.52))},
$S:0}
C.epO.prototype={
$0(){var w=this.a
A.d.L(w.gdt().z,C.CV(4294507260,0.78,C.cB(),D.bg,4291548641,1.5,0.84,0.08,0.1))
A.d.L(w.gdt().z,C.iX(A.bh,!1,4279179050,A.aD,16,A.bo,A.a6,0.7,C.cB(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bBW()+"\n\nSubject:\n\nBody text\u2026",0,D.df,0.76,0.12,0.14))},
$S:0}
C.epP.prototype={
$0(){var w=this.a
A.d.L(w.gdt().z,C.CV(4294897802,0.28,C.cB(),D.bg,4294626325,2,0.3,0.62,0.12))
A.d.L(w.gdt().z,C.iX(A.bh,!1,4285611794,A.aD,15,A.bo,A.a6,0.24,C.cB(),"Sticky note",0,D.aGl,0.26,0.64,0.14))},
$S:0}
C.epQ.prototype={
$0(){var w=4280640491,v=this.a
A.d.L(v.gdt().z,C.CV(4293060848,0.04,C.cB(),D.bg,4291548641,2,0.8,0.1,0.48))
A.d.L(v.gdt().z,C.CV(w,0.04,C.cB(),D.bg,w,2,0.55,0.1,0.48))},
$S:0}
C.epR.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdt().z,C.iX(A.bh,!1,w,A.aD,18,A.bo,A.a6,0.62,C.cB(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.I5,0.42,0.06,0.18))
A.d.L(v.gdt().z,C.iX(A.bh,!1,w,A.aD,18,A.bo,A.a6,0.62,C.cB(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.ut,0.42,0.52,0.18))},
$S:0}
C.epS.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdt().z,C.CV(858088427,0.62,C.cB(),D.bg,4280640491,2,0.42,0.05,0.18))
A.d.L(v.gdt().z,C.CV(856004201,0.62,C.cB(),D.bg,4278556265,2,0.42,0.53,0.18))
A.d.L(v.gdt().z,C.iX(A.bh,!1,w,A.aD,20,A.bo,A.H,0.1,C.cB(),"Option A",0,D.df,0.36,0.08,0.2))
A.d.L(v.gdt().z,C.iX(A.bh,!1,w,A.aD,20,A.bo,A.H,0.1,C.cB(),"Option B",0,D.df,0.36,0.56,0.2))},
$S:0}
C.epU.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdt().z,C.CV(4294967295,0.36,C.cB(),D.bg,w,2,0.24,0.38,0.28))
A.d.L(v.gdt().z,C.iX(A.L,!1,w,A.aD,14,A.bo,A.a6,0.12,C.cB(),"[ QR CODE ]",0,D.df,0.24,0.38,0.4))},
$S:0}
C.epV.prototype={
$0(){return C.ceC(this.b,D.S_,this.a.gqp())},
$S:0}
C.erd.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a72.t(0,d),t=this.a
return t.b7o(d,v===d,A.aZ,this.c,new C.erc(t,u,d,w),u)},
$S:z+25}
C.erc.prototype={
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
C.bCI(r,new C.erb(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.erb.prototype={
$0(){return this.a.d4(new C.era(this.b,this.c))},
$S:0}
C.era.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.epy.prototype={
$0(){var w,v=this.a,u=v.gqp(),t=C.rw(4294967295,null,0,0,null,C.cB(),D.mE,"","","",D.df),s=this.b
C.ceC(t,s,u)
w=v.gdt()
if(w!=null&&s!==D.CR){t.e=w.e
t.f=w.f}A.d.c9(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eqg.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.i9B(p,q.d,s,new C.eqf(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.tA(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eqf.prototype={
$1(d){return this.bkd(d)},
bkd(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.eqe(t,d))
w=2
return B.b(t.tA(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.eqe.prototype={
$0(){var w,v,u
for(w=J.aW(this.b),v=this.a;w.C();){u=w.gT(w)
A.d.c9(v.d,0,u)}},
$S:0}
C.eqh.prototype={
$0(){return this.a.bI7()},
$S:0}
C.eqi.prototype={
$0(){return this.a.aPX("Class Presentation",!0)},
$S:0}
C.eqj.prototype={
$1(d){return this.a.bJ3(d.b,this.b,d.a)},
$S:z+88}
C.eqU.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aH(w,A.bW,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.et4.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aH(d,A.eI,x.w).w.f.d),new B.dY(new C.et3(this.a,this.b),null),null)},
$S:60}
C.et3.prototype={
$2(d,e){return B.oR(new C.et2(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:655}
C.et2.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.av:A.c,s=B.I(u?A.bE:A.aL,A.q,1),r=B.p(v,v,A.f,v,v,new B.o(A.b2,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.w(B.a([A.R,r,new B.D(A.ai8,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b5,B.bK(!1,A.zS,v,v,!0,v,v,new C.et0(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.E(B.ct(B.a([p.aSG(u,!0,!0,new C.et1(p,w.d))],q),e,D.bsR,v,v,A.ah,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kM,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:114}
C.et0.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.et1.prototype={
$0(){this.b.$1(new C.esZ())
var w=this.a
if(w.c!=null)w.m(new C.et_())},
$S:0}
C.esZ.prototype={
$0(){},
$S:0}
C.et_.prototype={
$0(){},
$S:0}
C.euD.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:91}
C.euE.prototype={
$4(d,e,f,g){var w=A.ct.au(0,e.gp(0))
return B.db(B.ed(A.A,new C.ayz(this.a,null),0.94+w*0.06,null,null),w)},
$S:440}
C.euF.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:91}
C.euG.prototype={
$4(d,e,f,g){var w=A.ct.au(0,e.gp(0))
return B.db(B.ed(A.A,new C.bcm(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:440}
C.euH.prototype={
$0(){return A.d.c9(this.a.d,0,C.VL(this.b))},
$S:0}
C.epD.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dz.au(0,o)
o=B.n(22)
v=B.n(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.av.j(0.72)],t):B.a([A.c.j(0.88),A.pB.j(0.75)],t)
r=B.I(A.b_.j(0.28+w*0.22),A.q,1.3)
q=w*0.2
t=B.a([A.b_.j(0.35+q),A.c8.j(0.18),A.K],t)
q=B.I(A.b_.j(0.45+q),A.q,1)
t=B.p(p,B.X(A_.a_X,u?A.ad:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.c_(A.A,0.5,A.x,p,0,t,p,p),A.a5),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bw(o,B.u4(A.fw,B.p(p,B.w(B.a([t,A.aB,q,A.an,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aA:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a8(A.ay,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.eD,p,p,1/0),14,!1),A.aq)},
$S:306}
C.eqI.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.eqJ.prototype={
$1(d){return d.length!==0},
$S:3}
C.eqK.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.jK
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a0t:A.BB}return w},
$S:707}
C.eqN.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dz.au(0,A.k.E(j+m.b*0.12,1))
j=B.n(20)
v=m.c
u=B.n(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.av.j(0.78)],s):B.a([A.c.j(0.92),A.mR.j(0.82)],s)
r=m.e
q=A.d.gH(r)
p=t?0.34:0.26
p=B.I(q.j(p+w*0.22),A.q,1.25)
q=B.n(10)
q=B.p(l,B.X(C.kw(v.w)?A.vO:A.q6,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a8(A.a3,A.a8,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.PU(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.PU(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.PU(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.u(n)+" \u2022 Updated "+k.PU(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.PU(v.f)
r=k.bJ1(n,A.d.gH(r),t)
return B.p(l,B.bw(j,new B.a7G(B.aF(!1,A.a1,!0,l,B.aL(!1,l,!0,B.p(l,B.dL(!1,A.Mu,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aI(l,l,l,l,B.X(A.o0,t?A.aA:A.bK,l,l,l,l),l,l,l,new C.eqL(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a8(A.ay,A.aC,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eqM(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ag),l),A.aq),A.f,l,l,l,l,l,l,A.d9,l,l,l,l)},
$S:92}
C.eqM.prototype={
$0(){return this.a.aeU(this.b)},
$S:0}
C.eqL.prototype={
$0(){return this.a.AO(this.b,this.c)},
$S:0}
C.esd.prototype={
$0(){var w=this.a
w.b60()
w.m(new C.esc())},
$S:0}
C.esc.prototype={
$0(){},
$S:0}
C.ese.prototype={
$1(d){return this.a.aiZ(this.b.a,d)},
$S:2}
C.esf.prototype={
$0(){this.a.d4(new C.esb(this.b))},
$S:0}
C.esb.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cv:A.O},
$S:0}
C.esg.prototype={
$0(){this.a.d4(new C.esa(this.b))},
$S:0}
C.esa.prototype={
$0(){var w=this.a
return w.y=w.y===A.cE?A.bo:A.cE},
$S:0}
C.esh.prototype={
$0(){this.a.d4(new C.es9(this.b))},
$S:0}
C.es9.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mJ},
$S:0}
C.esi.prototype={
$0(){this.a.d4(new C.es8(this.b))},
$S:0}
C.es8.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.esj.prototype={
$0(){var w=this.a
w.d4(new C.es7(w,this.b))},
$S:0}
C.es7.prototype={
$0(){var w=this.b
return w.as=this.a.c37(w.as)},
$S:0}
C.esk.prototype={
$0(){return this.a.d4(new C.es6(this.b))},
$S:0}
C.es6.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.esl.prototype={
$0(){return this.a.d4(new C.es5(this.b))},
$S:0}
C.es5.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.erZ.prototype={
$0(){return this.a.a20(this.b.a)},
$S:0}
C.es_.prototype={
$0(){this.a.a_y()
return null},
$S:0}
C.es0.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aH(v,A.bW,x.w).w.a.a<900)w.afc()
else w.m(new C.erY(w))},
$S:0}
C.erY.prototype={
$0(){return this.a.as=!0},
$S:0}
C.es1.prototype={
$0(){this.a.d4(new C.erX(this.b))},
$S:0}
C.erX.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cv:A.O},
$S:0}
C.es2.prototype={
$0(){return this.a.d4(new C.erW(this.b))},
$S:0}
C.erW.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.es3.prototype={
$0(){return this.a.d4(new C.erV(this.b))},
$S:0}
C.erV.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.es4.prototype={
$0(){return this.a.azt(null)},
$S:0}
C.er6.prototype={
$0(){this.a.Dy()
return null},
$S:0}
C.er7.prototype={
$0(){this.a.aa1()
return null},
$S:0}
C.er9.prototype={
$1(d){return this.bke(d)},
bke(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.JZ(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bQ(A.av,null,new C.er1(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d4(new C.er2(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d4(new C.er3(r))
s=s.c.I(x.q).f
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d4(new C.er4(r))
s=s.c.I(x.q).f
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
return B.b(C.ho3(q,new C.Eu(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d4(new C.er5(r,p))
s=s.c.I(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.agH(q)
q=B.u(q==null?null:q.b)+" will play after your last slide."}s.S(B.b2(null,null,null,null,null,A.r,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:97}
C.er1.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.ecf],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bMS:r
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.er0(d,t),!1,r,r,r,r,r,r,r,new B.y(""+t+" seconds",r,A.dg,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bl(!0,B.w(q,A.m,r,A.e,A.Q,0,A.p),!0,!1,A.ae,!0,!0)},
$S:25}
C.er0.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.er2.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.er3.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.er4.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.er5.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.er8.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zN(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zN(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zN(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.agH(r?t:s.db)
s=s==null?t:s.b
return B.a([D.ehj,q,v,u,B.zN(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:135}
C.evo.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bBT(w,v)}},
$S:0}
C.evp.prototype={
$0(){this.a.Dy()
return null},
$S:0}
C.eso.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.n(999),q=s?D.bXh:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bM
if(s)v=A.c
else v=this.b?A.aR:A.bq
return new B.D(A.fB,B.aB(u,B.de(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.bb,new B.o(w,u,u,r,u,q,A.n),A.eJ,u,u,u,A.lm,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.esn(t,d),u,u,u,u,u,u,!1,A.a7),u)},
$S:136}
C.esn.prototype={
$0(){var w=this.a
return w.m(new C.esm(w,this.b))},
$S:0}
C.esm.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.esp.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a3i:E.awR
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbMw():t.gbIs()
return B.hw(B.aB(u,B.p(u,D.an1,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gH(v).j(0.45),A.J,10)],x.V),new B.a8(A.a3,A.a8,A.x,v,u,u),A.a5),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a7),u,s,u,u)},
$S:1707}
C.esq.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i8R(v,w.a.c)},
$S:0}
C.etN.prototype={
$0(){return this.b.vb(this.a.a)},
$S:0}
C.etO.prototype={
$0(){return this.a.vb(D.mE)},
$S:0}
C.etP.prototype={
$0(){return this.a.vb(D.I3)},
$S:0}
C.eu_.prototype={
$0(){return this.a.vb(D.I4)},
$S:0}
C.eua.prototype={
$0(){return this.a.vb(D.I2)},
$S:0}
C.eul.prototype={
$0(){return this.a.qa("lab_report")},
$S:0}
C.eus.prototype={
$0(){return this.a.qa("rubric")},
$S:0}
C.eut.prototype={
$0(){return this.a.qa("minutes")},
$S:0}
C.euu.prototype={
$0(){return this.a.qa("agenda")},
$S:0}
C.euv.prototype={
$0(){return this.a.qa("timeline")},
$S:0}
C.euw.prototype={
$0(){return this.a.qa(this.b.a)},
$S:0}
C.etQ.prototype={
$0(){this.a.VI()
return null},
$S:0}
C.etR.prototype={
$0(){this.a.VC()
return null},
$S:0}
C.etS.prototype={
$0(){return this.a.qa("table")},
$S:0}
C.etT.prototype={
$0(){return this.a.qa("sticky")},
$S:0}
C.etU.prototype={
$0(){return this.a.qa("divider")},
$S:0}
C.etV.prototype={
$0(){return this.a.qa("header_bar")},
$S:0}
C.etW.prototype={
$0(){return this.a.p6(D.bg)},
$S:0}
C.etX.prototype={
$0(){return this.a.p6(D.eN)},
$S:0}
C.etY.prototype={
$0(){return this.a.p6(D.jP)},
$S:0}
C.etZ.prototype={
$0(){return this.a.p6(D.CS)},
$S:0}
C.eu0.prototype={
$0(){return this.a.p6(D.jQ)},
$S:0}
C.eu1.prototype={
$0(){return this.a.p6(D.l7)},
$S:0}
C.eu2.prototype={
$0(){return this.a.p6(D.fr)},
$S:0}
C.eu3.prototype={
$0(){this.a.Hh()
return null},
$S:0}
C.eu4.prototype={
$0(){this.a.Nn()
return null},
$S:0}
C.eu5.prototype={
$0(){return this.a.qa("quote")},
$S:0}
C.eu6.prototype={
$0(){return this.a.a8a()},
$S:0}
C.eu7.prototype={
$0(){this.a.a_E()
return null},
$S:0}
C.eu8.prototype={
$0(){var w=this.a
return w.m(new C.etD(w))},
$S:0}
C.etD.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eu9.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.o6(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.etL(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.etL.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eub.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jW()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a73.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.b2
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.q,v?2.5:1),s,s,new B.a8(A.a3,A.a8,A.x,u,s,s),A.a5),s,26,s,s,s,s,s,26)],x.p)
if(D.a73.t(0,q))u.push(B.ao(s,B.p(s,D.O6,A.f,s,s,D.E9,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fB,B.aB(s,B.hw(new B.an(A.V,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.etK(r,d),s,s,s,s,s,s,!1,A.a7),s)},
$S:z+89}
C.etK.prototype={
$0(){this.a.a8s(this.b)
return null},
$S:0}
C.euc.prototype={
$0(){this.a.a8r(this.b)
return null},
$S:0}
C.eud.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hFz(d),p=this.a,o=B.n(8),n=p.gdt()
n=n==null?r:n.x
w=d.a
n=n===w?A.bi:A.b2
v=p.gdt()
n=B.I(n,A.q,(v==null?r:v.x)===w?2.5:1)
u=B.n(8)
t=B.n(7)
s=C.rw(4294967295,r,0,0,r,"preview_"+w,D.qj,"","","",D.df)
C.hkV(s,w)
w=x.p
u=B.a([B.bw(o,B.p(r,B.bw(t,C.hmf(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.anz,A.f,r,r,D.E9,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.il,B.aB(r,B.w(B.a([new B.an(A.V,r,A.aa,A.r,u,r),A.cR,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aA:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.etJ(p,q,d),r,r,r,r,r,r,!1,A.a7),r)},
$S:z+90}
C.etJ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gdt()
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
break}s.d4(new C.etz(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.etz.prototype={
$0(){return C.hkV(this.a,this.b.a)},
$S:0}
C.etM.prototype={
bkf(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a72.t(0,d)
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
$2(d,e){return this.bkf(d,e)},
$S:z+91}
C.eux.prototype={
$4(d,e,f,g){var w=null,v=B.T(d).k("M<1,t>")
v=B.C(new B.M(d,new C.euz(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.cc(B.B(v,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aN)},
$S:z+92}
C.euz.prototype={
$1(d){var w=this
return w.a.b7o(d,w.b===d,w.c,w.d,new C.euy(w.e,d),!D.a72.t(0,d))},
$S:z+25}
C.euy.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eue.prototype={
$1(d){this.b.$2(d,new C.etI(this.a,d,this.c))
return null},
$S:z+26}
C.etI.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bCI(u,new C.ety(v,this.c,w),w)},
$S:0}
C.ety.prototype={
$0(){return this.a.d4(new C.etw(this.b,this.c))},
$S:0}
C.etw.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.euf.prototype={
$1(d){this.b.$2(d,new C.etH(this.a,d))
return null},
$S:z+26}
C.etH.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fOv(u,new C.etx(v,w),w)},
$S:0}
C.etx.prototype={
$0(){var w=this.a
return w.d4(new C.etv(w,this.b))},
$S:0}
C.etv.prototype={
$0(){return this.a.gdt().r=this.b},
$S:0}
C.eug.prototype={
$0(){var w=this.a
return w.m(new C.etG(w))},
$S:0}
C.etG.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.euh.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bBT(w,v)}},
$S:0}
C.eui.prototype={
$0(){this.a.I3()
return null},
$S:0}
C.euj.prototype={
$0(){return this.a.a8a()},
$S:0}
C.euk.prototype={
$0(){var w=this.a,v=w.jW()
if(v!=null&&v.b===D.cP)w.d4(new C.etF(v))},
$S:0}
C.etF.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.eum.prototype={
$0(){this.a.Dy()
return null},
$S:0}
C.eun.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.Fc(v,!0)
return null},
$S:0}
C.euo.prototype={
$0(){this.a.d4(new C.etE(this.b))},
$S:0}
C.etE.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cv:A.O},
$S:0}
C.eup.prototype={
$0(){this.a.d4(new C.etC(this.b))},
$S:0}
C.etC.prototype={
$0(){var w=this.a
return w.y=w.y===A.cE?A.bo:A.cE},
$S:0}
C.euq.prototype={
$0(){this.a.d4(new C.etB(this.b))},
$S:0}
C.etB.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mJ},
$S:0}
C.eur.prototype={
$0(){this.a.d4(new C.etA(this.b))},
$S:0}
C.etA.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eqb.prototype={
$1(d){return this.bkc(d)},
bkc(d){var w=0,v=B.j(x.H),u,t=this,s,r
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
break}s.d4(new C.eqa(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:185}
C.eqa.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.euU.prototype={
$0(){var w=this.a
return w.d4(new C.euT(w,this.b))},
$S:0}
C.euT.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.euV.prototype={
$0(){var w=this.a
return w.d4(new C.euS(w,this.b))},
$S:0}
C.euS.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.erj.prototype={
$0(){return this.a.d4(new C.eri(this.b))},
$S:0}
C.eri.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.erk.prototype={
$0(){return this.a.d4(new C.erh(this.b))},
$S:0}
C.erh.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.erR.prototype={
$1(d){var w=x.gh
w=B.C(new B.M(D.ape,new C.erQ(),w),w.k("ak.E"))
return w},
$S:z+94}
C.erQ.prototype={
$1(d){var w=null
return B.zN(B.d(d.b,w,w,w,w,w,w,A.m9,w,w,w),48,d,x.fO)},
$S:z+95}
C.ev6.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a7(v,w?8:0,null,null)},
$S:36}
C.ev5.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kj()?q:new C.ev3(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.n(8)
if(o)v=A.bi
else v=r.d?A.b2:A.cr
v=B.I(v,A.q,o?2:1)
u=r.d?A.co:A.c
t=B.bT(0,C.hmf(r.b.r[e]),0,0,0)
s=B.n(4)
return B.aB(q,B.p(q,new B.an(A.V,q,A.aa,A.r,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nt,q,q,q),A.f,q,q,new B.o(A.aW,q,q,s,q,q,A.n),q,q,q,q,A.aj1,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ev4(p,e),q,q,q,q,q,q,!1,A.a7)},
$S:82}
C.ev4.prototype={
$0(){var w=this.a
return w.m(new C.ev_(w,this.b))},
$S:0}
C.ev_.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.K7()},
$S:0}
C.ev3.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bQ(null,null,new C.ev0(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.ev1(q,s))
q.aRp()}else if(r==="del"){q=t.a
q.m(new C.ev2(q,s))
q.aQy()}else if(r==="up")t.a.b2B(s,s-1)
else if(r==="down")t.a.b2B(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ev0.prototype={
$1(d){var w=null,v=B.a([B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bOw,w,w,w,w,new C.euW(d),!1,w,w,w,w,w,w,w,D.fjX,w,w,w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bOp,w,w,w,w,new C.euX(d),!1,w,w,w,w,w,w,w,A.wD,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bNH,w,w,w,w,new C.euY(d),!1,w,w,w,w,w,w,w,D.fs2,w,w,w))
if(u<this.b.r.length-1)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bPK,w,w,w,w,new C.euZ(d),!1,w,w,w,w,w,w,w,D.fjM,w,w,w))
return B.bl(!0,B.w(v,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ae,!0,!0)},
$S:25}
C.euW.prototype={
$0(){B.a4(this.a,!1).O("dup")
return null},
$S:0}
C.euX.prototype={
$0(){B.a4(this.a,!1).O("del")
return null},
$S:0}
C.euY.prototype={
$0(){B.a4(this.a,!1).O("up")
return null},
$S:0}
C.euZ.prototype={
$0(){B.a4(this.a,!1).O("down")
return null},
$S:0}
C.ev1.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ev2.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ev7.prototype={
$0(){return this.a.a8a()},
$S:0}
C.eqB.prototype={
$0(){var w=this.a
w.b60()
w.azt(null)},
$S:0}
C.eqA.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.n(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dn,24)],x.V),m=this.b
if(m.f!=null){w=B.b0(m.e)
v=m.f
v.toString
v=new B.a8(A.ay,A.aC,A.x,B.a([w,B.b0(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b0(m.e):p
u=m.x
t=m.y
s=B.n(4)
if(m.f!=null){r=B.b0(m.e)
q=m.f
q.toString
q=new B.a8(A.ay,A.aC,A.x,B.a([r,B.b0(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bw(s,B.c0(A.kF,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.be),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.M(r,new C.eqz(this.a,e.b,e.d,q),B.T(r).k("M<1,t>")))
if(m.z.length===0)s.push(B.au(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aA:A.bK,p,p,p,p,p,p,p,p,p,p,p,A.a6,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c0(new B.an(A.V,p,A.aa,A.f,s,new B.cx("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.be)},
$S:436}
C.eqz.prototype={
$1(d){var w=this
return w.a.bEq(d,w.b,w.c,w.d)},
$S:z+23}
C.eqo.prototype={
$0(){var w=this
if(w.b){w.a.Nw(w.c)
return}if(w.d){w.a.a88(w.c)
return}if(w.e){w.a.agw(w.c)
return}if(w.f)w.a.b6y(w.c)},
$S:0}
C.eqp.prototype={
$0(){this.a.Nw(this.b)
return null},
$S:0}
C.eqq.prototype={
$0(){return this.a.a20(this.b.a)},
$S:0}
C.eqr.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.eqn(u,d,w.c,w.d))
v.HI()
v.of()
v.pn()},
$S:21}
C.eqn.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eqs.prototype={
$1(d){return this.a.aiZ(this.b.a,d)},
$S:2}
C.equ.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.h_D(w))u.a.Nw(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b6y(v)},
$S:0}
C.eqt.prototype={
$0(){return this.a.a20(this.b.a)},
$S:0}
C.eqv.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eqm(w.b,d,w.c,w.d))
v.HI()
v.of()
v.pn()},
$S:21}
C.eqm.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cP)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.eqw.prototype={
$1(d){var w=this.a
w.m(new C.eql(this.b,d))
w.HI()
w.of()
w.pn()},
$S:203}
C.eql.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cP)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.eqx.prototype={
$0(){var w=this.a
w.m(new C.eqk(this.b))
w.HI()
w.of()
w.pn()},
$S:0}
C.eqk.prototype={
$0(){this.a.r=C.hlK()},
$S:0}
C.eqy.prototype={
$0(){return this.a.a20(this.b.a)},
$S:0}
C.ess.prototype={
$0(){var w=this.a
return w.m(new C.esr(w))},
$S:0}
C.esr.prototype={
$0(){return this.a.y=!1},
$S:0}
C.est.prototype={
$1(d){return this.a.cBZ(this.b.a,d)},
$S:2}
C.erx.prototype={
$1(d){var w
this.a.d4(d)
w=this.b
if(w!=null)w.$0()},
$S:164}
C.ery.prototype={
$1(d){return this.a.$1(new C.erw(this.b,d))},
$S:6}
C.erw.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.erz.prototype={
$1(d){return this.a.$1(new C.erv(this.b,d))},
$S:6}
C.erv.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.erA.prototype={
$1(d){return this.a.$1(new C.eru(this.b,d))},
$S:6}
C.eru.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.erB.prototype={
$1(d){return this.a.$1(new C.ert(this.b,d))},
$S:6}
C.ert.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.erC.prototype={
$1(d){return this.a.$1(new C.ers(this.b,d))},
$S:6}
C.ers.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.erD.prototype={
$1(d){return this.b.$1(new C.err(this.a,this.c))},
$S:8}
C.err.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.erE.prototype={
$1(d){return this.b.$1(new C.erq(this.a,this.c))},
$S:8}
C.erq.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.erF.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bi:A.cV
return B.aB(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.q,t?2:1),w,w,w,A.a5),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.erp(this.a,v,d),w,w,w,w,w,w,!1,A.a7)},
$S:430}
C.erp.prototype={
$0(){return this.a.$1(new C.erm(this.b,this.c))},
$S:0}
C.erm.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.erG.prototype={
$1(d){return this.a.$1(new C.ero(this.b,d))},
$S:1708}
C.ero.prototype={
$0(){var w=this.b
return this.a.as=w.gH(w)},
$S:0}
C.erH.prototype={
$1(d){var w=null
return B.aB(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a5),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ern(this.a,this.b,d),w,w,w,w,w,w,!1,A.a7)},
$S:430}
C.ern.prototype={
$0(){return this.a.$1(new C.erl(this.b,this.c))},
$S:0}
C.erl.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.erI.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a4(w,!1).pB()}else w=!1
if(w){w=v.a.c
w.toString
B.a4(w,!1).eE()}v.a.as8()},
$S:0}
C.erL.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dz.au(0,m)
m=B.n(16)
v=B.n(16)
u=o.c
t=B.aq(u,A.b_,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.I(A.c.j(0.3+w*0.2),A.q,1.2)
r=B.a([B.X(o.d,A.c,n,n,n,26)],x.p)
q=B.n(6)
p=B.I(u,A.q,1.2)
r.push(B.ao(2,B.p(n,B.X(A.u9,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.nd,n,n,n),n,n,n,2,n,n))
return B.aF(!1,A.a1,!0,n,B.aL(!1,m,!0,B.eB(new B.a7(48,48,new B.an(A.A,n,A.aa,A.r,r,n),n),n,new B.o(n,n,s,v,n,new B.a8(A.ay,A.aC,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ag)},
$S:133}
C.epk.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dz.au(0,o)
o=B.n(22)
v=B.n(22)
u=q.c
t=B.aq(u,A.b_,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.I(A.c.j(0.28+w*0.22),A.q,1.35)
s=A.c.j(0.14+w*0.08)
r=B.I(A.c.j(0.4+w*0.15),A.q,1)
return B.aF(!1,A.a1,!0,p,B.aL(!1,o,!0,B.eB(B.w(B.a([B.ed(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a5),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ac,B.d(q.e,p,p,p,p,p,p,A.j9,A.L,p,p)],x.p),A.m,p,A.b7,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a8(A.ay,A.aC,A.x,u,p,p),A.n),p,A.Fx,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ag)},
$S:133}
C.etp.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.U,!0,w,!0,A.r,w,B.aN(),u,w,w,w,w,w,2,A.aop,A.y,!0,w,!0,w,!1,w,A.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a4,w,A.am,w,w,w,w)
return B.ek(B.a([B.bK(!1,A.dh,w,w,!0,w,w,new C.etn(d),w,w),B.bG(A.pn,new C.eto(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:18}
C.etn.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.eto.prototype={
$0(){var w=this.b.a.a
B.a4(this.a,!1).O(w)
return null},
$S:0}
C.d0Y.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dz.au(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.et.au(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dX.au(0,i)
v=B.n(22)
t=B.aq(A.aJ,A.d.gH(C.kw(j.a.c.w)?D.uk:N.nl),w*0.35)
t.toString
t=B.I(t,A.q,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gH(C.kw(j.a.c.w)?D.uk:N.nl).j(0.18+w*0.12),A.J,32+w*10),D.abB],s)
q=B.n(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c_(A.b1,0.9,A.x,k,0,B.a([A.d.gH(C.kw(j.a.c.w)?D.uk:N.nl).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gH(C.kw(j.a.c.w)?D.uk:N.nl).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c_(A.A,0.5,A.x,k,0,B.a([m,A.d.gak(C.kw(j.a.c.w)?D.uk:N.nl).j(0.08),A.K],p),k,k),A.a5),k,n,k,k,k,k,k,n)
n=B.n(14)
m=j.a.c.w
l=C.kw(m)?D.uk:N.nl
s=B.a([new B.ac(0,A.G,A.d.gH(C.kw(m)?D.uk:N.nl).j(0.45+w*0.2),A.cz,18)],s)
m=x.p
l=B.a([p,B.ed(A.A,B.p(k,B.X(C.kw(j.a.c.w)?A.vO:A.q6,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a8(A.ay,A.aC,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.r,l,k),A.R,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gH(C.kw(j.a.c.w)?D.uk:N.nl).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.fF,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.fc8,A.L,k,k),A.au,B.d(j.gcwV(),k,k,k,k,k,k,D.fgG,A.L,k,k),A.aB],m)
p=j.a.c
if(p.z){p=p.gSh()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gH(C.kw(j.a.c.w)?D.uk:N.nl).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.JK(A.yf,"Download PDF","pdf",A.d0,j.J_(0),!1,k))
p=j.a.c
if(!p.z||p.gSh()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.an,new C.JK(A.k8,"Transfer to "+C.hlM(p==null?"":p),"transfer_hati",A.aV,j.J_(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.J_(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.an,new C.JK(D.bGc,"Rename presentation","rename",A.c8,n,!1,k),A.an,new C.JK(A.akJ,"Duplicate","duplicate",A.b4,j.J_(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.N)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.JK(A.ef,"Delete presentation","delete",A.aw,j.J_(p),!0,k))
s.push(A.au)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.J_(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.J_(n)
s.push(B.dU(B.db(B.bK(!1,E.aRs,k,k,!0,k,k,new C.d0X(d),k,B.fx(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,A.az,k,D.bvV,k,k,k,k,k,A.kc,k,k)),n),new B.x(0,(1-p)*8)))
return B.ed(A.A,B.db(B.aF(!1,A.a1,!0,k,B.p(k,B.bw(q,new B.an(A.V,k,A.aa,A.r,B.a([o,new B.D(D.bv3,B.w(s,A.m,k,A.e,A.Q,0,A.p),k)],m),k),A.aq),A.f,k,A.Vz,new B.o(A.av,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ag),i),0.88+u*0.12,k,k)},
$S:45}
C.d0X.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.d1j.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.d1k.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.d0V.prototype={
$1(d){var w=this.a
return w.m(new C.d0R(w))},
$S:23}
C.d0R.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d0W.prototype={
$1(d){var w=this.a
return w.m(new C.d0Q(w))},
$S:67}
C.d0Q.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d0U.prototype={
$0(){var w=this.a
return w.m(new C.d0S(w))},
$S:0}
C.d0S.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d0T.prototype={
$0(){var w=this.a.a.e
B.a4(this.b,!1).O(w)
return null},
$S:0}
C.ew4.prototype={
$0(){return $.bjJ=!$.bjJ},
$S:0}
C.evV.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaUB())u.aw_()},
$S:0}
C.ew3.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.evW.prototype={
$0(){return this.a.y=!0},
$S:0}
C.evX.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.aw_()},
$S:0}
C.evR.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gH(w.a.c.r).r
w.d=0},
$S:0}
C.evS.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.evT.prototype={
$0(){return this.a.y=!1},
$S:0}
C.evU.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.E(w-1+v,v)},
$S:0}
C.ew1.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b0,A.r,w,null)},
$S:1709}
C.ew2.prototype={
$2(d,e){var w
if(e.gc3(e)===A.hZ)return new B.d_(e,!1,d,null)
w=this.a
return w.cuQ(w.e,d,e)},
$S:441}
C.evY.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fC((1-v.gp(0))*1.5708)
return B.fu(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.evZ.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.k9((1-v.gp(0))*1.5708)
return B.fu(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.ew_.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fC(v.gp(0)*0.8)
w.k9(v.gp(0)*0.35)
return B.fu(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.ew0.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fC(-v.gp(0)*1.2)
return B.fu(A.a8,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.ew5.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gYO().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gYO().x
t===$&&B.c()
return new C.b0D(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.II(v.c,t,!0,new B.cx("cine"+u,x.W))},
$S:696}
C.ew7.prototype={
$1(d){var w=this.a
if(d.b.a>B.aH(this.b,A.bW,x.w).w.a.a*0.55)w.aw_()
else w.cjf()},
$S:67}
C.ew6.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.fER.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:442}
C.fF_.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ek(B.a([B.bK(!1,A.dh,w,w,!0,w,w,new C.fEX(d),w,w),B.bK(!1,D.fzl,w,w,!0,w,w,new C.fEY(d,this.b,v),w,w),B.bG(A.aRJ,new C.fEZ(d,v,this.c),w)],x.p),w,w,M.tq,new B.a7(320,w,t,w),w,w,w,w,D.fAP,w)},
$S:18}
C.fEX.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.fEY.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a4(u.a,!1).O(null)
C.h0h(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fEZ.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a4(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aPs(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aOT(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fEQ.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.ceF.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:630}
C.fEW.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fbM.prototype={
$1(d){return C.h0f(C.VL(B.a2(d,x.N,x.z)),this.a)},
$S:z+96}
C.fNL.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:91}
C.fNM.prototype={
$4(d,e,f,g){var w=A.ct.au(0,e.gp(0))
return B.db(B.ed(A.A,D.h6q,0.94+w*0.06,null,null),w)},
$S:440}
C.fNN.prototype={
$1(d){var w=this
return new C.VN(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.evB.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.evx.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.evA.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.VO(u,this.b,w.gaNS(),v,null)},
$S:z+99}
C.evy.prototype={
$0(){return this.a.f=!0},
$S:0}
C.evz.prototype={
$0(){return this.a.f=!1},
$S:0}
C.evC.prototype={
$0(){return this.a.f=!0},
$S:0}
C.evD.prototype={
$0(){return this.a.f=!1},
$S:0}
C.evG.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.evH.prototype={
$0(){var w=this.a
return w.m(new C.evF(w))},
$S:0}
C.evF.prototype={
$0(){return this.a.d="one"},
$S:0}
C.evI.prototype={
$0(){var w=this.a
return w.m(new C.evE(w))},
$S:0}
C.evE.prototype={
$0(){return this.a.d="all"},
$S:0}
C.evJ.prototype={
$1(d){return this.a.bJ2(d,this.b)},
$S:z+100}
C.evw.prototype={
$0(){var w=this.a
return w.m(new C.evv(w,this.b))},
$S:0}
C.evv.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.evK.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.evL.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.evM.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.evN.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.evO.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fM(new B.fD(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.I(x.q).f.S(D.eZu)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.epe.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.epd())},
$S:0}
C.epd.prototype={
$0(){},
$S:0}
C.epf.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fL()},
$S:9}
C.epa.prototype={
$1(d){return this.a.m(new C.ep9())},
$S:2}
C.ep9.prototype={
$0(){},
$S:0}
C.epb.prototype={
$1(d){return this.a.aZs()},
$S:2}
C.epc.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.evQ.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.q0(),$async$$0)
case 2:if(t.c!=null)t.m(new C.evP(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.evP.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fza.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.eH(new B.jI(this.c,new C.fz9(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:213}
C.fz9.prototype={
$3(d,e,f){return new C.II(e,!1,!1,new B.cx(e.a,x.W))},
$S:z+102}
C.fzb.prototype={
$1(d){var w=null
return B.op(!1,B.au(new C.buc(this.a,this.b,w),w,w,w),w,x.z)},
$S:337}
C.fzf.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aV.gmB(),$async$$0)
case 3:w=4
return B.b(B.bM(A.n8,null,x.H),$async$$0)
case 4:w=5
return B.b($.aV.gmB(),$async$$0)
case 5:s=$.aV.aj$.x.h(0,t.a)
r=s==null?null:s.gba()
if(!(r instanceof B.pY))throw B.V("Could not draw the slide.")
u=r.m_(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1712}
C.fzg.prototype={
bkK(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hu(A.h0),$async$$1)
case 3:r=f
if(r==null)throw B.V("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hQ([J.eU(A.dC.gaP(r))],"image/png"))
t.toString
s=Al.fRZ(t)
w=4
return B.b(new B.q3(s,"load",!1,x.ev).gH(0).d7(0,A.jk),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bkK(d)},
$S:1713}
C.fzc.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:153}
C.fzd.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fT(0)},
$S:153}
C.fze.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.f62.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.f8E,A.L,w,w)},
$S:1714}
C.f63.prototype={
$3(d,e,f){var w=null,v=B.n(99)
return B.bw(v,B.m3(A.bm,w,A.dN,8,w,e===0?w:e,w),A.aq)},
$S:642}
C.eel.prototype={
$1(d){this.a.a_0()
return null},
$S:12}
C.eej.prototype={
$0(){return this.a.e=D.br8},
$S:0}
C.eek.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bB
return this.b.e=w},
$S:0}
C.chd.prototype={
$1(d){return A.o.dz(1,d.a)},
$S:z+103}
C.che.prototype={
$2(d,e){return(d|e)>>>0},
$S:75};(function aliases(){var w=C.aLr.prototype
w.bvi=w.q
w=C.aKY.prototype
w.buO=w.q
w=C.aKK.prototype
w.buz=w.q
w=C.aKX.prototype
w.buN=w.q
w=C.aLp.prototype
w.bvg=w.q
w=C.aMI.prototype
w.bwK=w.q
w=C.aJH.prototype
w.btt=w.q
w=C.aLA.prototype
w.bvr=w.q
w=C.aLB.prototype
w.bvs=w.q
w=C.b2j.prototype
w.bq7=w.aCB})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"i6E","ang",104)
v(C.aIG.prototype,"gc3t","YV",0)
var r
u(r=C.axm.prototype,"gcwg","cwh",38)
v(r,"gc4h","adh",0)
v(r=C.axi.prototype,"gaY1","E1",3)
v(r,"gc4e","c4f",3)
v(r,"gawk","xI",0)
v(r,"gawl","IE",0)
t(C,"i73","hDl",105)
v(C.aDo.prototype,"gc6J","c6K",3)
s(C,"i7e",0,null,["$4$paper$photo$request$template"],["fGf"],106,0)
s(C,"i7d",0,null,["$5$doc$history$instruction$photo$template"],["bBb"],107,0)
v(r=C.aDF.prototype,"gc7q","IX",0)
v(r,"gbIv","WL",0)
v(r,"gc7t","ae2",0)
v(r,"gc7s","ZN",0)
v(r,"gaZ7","Ei",0)
v(C.aDH.prototype,"gc7y","ZP",0)
v(r=C.aF3.prototype,"gaZk","PQ",0)
v(r,"gco4","b2H",3)
v(r,"gcxF","aAK",86)
v(r,"gbMk","aa5",0)
v(r,"gc7Z","Ar",0)
v(r=C.aGZ.prototype,"gci_","a08",0)
v(r,"gci7","a0b",0)
v(r,"gbBn","a8y",0)
v(r,"gc82","aee",0)
v(C.aGY.prototype,"gc83","aef",0)
v(C.aB4.prototype,"gbAm","a8l",0)
v(C.azs.prototype,"gc84","a__",0)
w(C,"i7r","i5l",12)
w(C,"i7p","i2i",12)
w(C,"i7q","i4l",12)
v(r=C.aDX.prototype,"gcAU","cAV",3)
v(r,"gcml","cmm",3)
u(r,"gEo","aeU",7)
v(r,"gbG9","ari",3)
u(r,"gEp","b_C",7)
v(r,"gcac","aeB",0)
v(r,"gc93","aeA",0)
v(r,"gccm","aeV",0)
v(r,"gbIs","a9G",0)
v(r,"gcdf","a_y",0)
v(r,"gcdg","afb",0)
v(r,"gcdN","afi",0)
v(r,"gccz","aeY",0)
v(r,"gbMw","aa9",0)
v(r,"gaRo","aRp",3)
v(r,"gaQx","aQy",3)
v(r,"gaMd","aMe",3)
v(r,"gaQw","as8",3)
u(r,"gbAD","bAE",80)
v(r,"gaAg","b5L",3)
v(r,"gc95","c96",3)
v(r,"gbXH","bXI",3)
v(r,"gbKU","bKV",3)
v(r=C.aE_.prototype,"gczG","czH",3)
v(r,"gczl","czm",3)
t(C,"i7s","i5C",2)
v(r=C.aDY.prototype,"gc8a","J1",0)
v(r,"gcq7","Rg",0)
v(r,"gc87","J0",0)
v(r,"gcC9","a2F",0)
v(r,"gcdZ","afp",0)
v(C.aDW.prototype,"gc8b","aZs",3)
v(r=C.aDZ.prototype,"gbNi","aak",0)
u(r,"gc88","c89",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aD,[C.nV,C.RH,C.bGL,C.bF6,C.cxp,C.cxn,C.bNm,C.b84,C.cxo,C.bDH,C.ch7,C.ch5,C.ch6,C.ch4,C.asx,C.ch3,C.bOf,C.om,C.aEy,C.jm,C.nG,C.a7F,C.zB,C.li,C.oz,C.m5,C.zC,C.nK,C.a7N,C.aqX,C.b0E,C.eea,C.lf,C.ED,C.et,C.j0,C.Eu,C.xC,C.eG,C.lG,C.i3,C.jE,C.a7O,C.aeV,C.b0F,C.b2j,C.a2C])
u(B.kj,[C.cFg,C.bZ3,C.fuq,C.cGM,C.cG8,C.fzT,C.dXE,C.dXD,C.eeo,C.een,C.fBh,C.fcV,C.fcW,C.cd1,C.cd2,C.cd3,C.ehO,C.eQc,C.ePA,C.ePz,C.eQD,C.eQa,C.eQ3,C.eQm,C.eR2,C.fks,C.eXc,C.eXb,C.eXF,C.eed,C.fEN,C.dTz,C.fLj,C.fBE,C.cex,C.cev,C.ceA,C.fC8,C.fC9,C.fCa,C.fCb,C.ceh,C.cei,C.dGg,C.cee,C.fC7,C.f3B,C.dRL,C.ce7,C.edU,C.fzI,C.esP,C.etd,C.eta,C.et9,C.etk,C.etj,C.euP,C.euO,C.et3,C.et2,C.epD,C.eqN,C.etM,C.ev6,C.ev5,C.eqA,C.erL,C.epk,C.d0Y,C.ew1,C.ew2,C.evY,C.evZ,C.ew_,C.ew0,C.ew5,C.ceF,C.evB,C.evM,C.che])
u(B.hZ,[C.cFh,C.cFi,C.bOg,C.frC,C.bZ2,C.bZ5,C.fHO,C.f4z,C.f4q,C.f4G,C.fbN,C.fbO,C.fur,C.fup,C.fHi,C.frg,C.fI9,C.cGC,C.cGH,C.cGJ,C.cGF,C.cGK,C.cGD,C.cGL,C.cGy,C.cGv,C.cGu,C.cGB,C.cG3,C.cG1,C.fyV,C.fyW,C.fg1,C.fzU,C.fA_,C.ff4,C.c9k,C.fyT,C.fyU,C.ftN,C.ftO,C.fzZ,C.fzV,C.fzX,C.fzY,C.fzW,C.fLB,C.ftR,C.ftS,C.ftV,C.ftW,C.ftZ,C.fu_,C.fN3,C.fdm,C.fNe,C.ehl,C.ehm,C.ehn,C.eh3,C.ehf,C.ehg,C.ehi,C.cd0,C.ccZ,C.cd_,C.fzz,C.fzB,C.fzA,C.fcX,C.fcY,C.fNh,C.ehT,C.ehU,C.ehL,C.ehM,C.ehP,C.ehQ,C.fNx,C.eR3,C.eQt,C.eQd,C.eQq,C.ePv,C.ePw,C.ePx,C.ePB,C.ePC,C.eQT,C.eR_,C.eR1,C.eQC,C.eQE,C.eQI,C.eQJ,C.eQK,C.eQO,C.eQF,C.eQG,C.ePN,C.ePO,C.ePP,C.ePQ,C.ePR,C.ePS,C.ePT,C.ePU,C.ePV,C.eP8,C.eP9,C.ePa,C.ePb,C.ePd,C.ePe,C.ePH,C.ePI,C.ePJ,C.ePK,C.ePL,C.ePi,C.ePj,C.ePk,C.ePl,C.eQ2,C.eQl,C.fwY,C.fwX,C.ceo,C.fkr,C.fEJ,C.fEC,C.fEF,C.fCC,C.fCD,C.fCE,C.fx4,C.fx3,C.fx2,C.fx0,C.fcR,C.fcS,C.fcT,C.fNJ,C.eXe,C.eXf,C.eX8,C.eX2,C.eXy,C.eXz,C.eXB,C.eXC,C.eXx,C.fNI,C.eWU,C.fjH,C.eec,C.fEL,C.fEM,C.fEO,C.fEH,C.fEI,C.fMW,C.dj6,C.djc,C.eeb,C.f9j,C.f9l,C.f9k,C.f9i,C.fy8,C.fya,C.fbi,C.fEd,C.fEe,C.fEf,C.fEq,C.fEv,C.fEw,C.fEx,C.fEy,C.fEz,C.fEA,C.fEB,C.fEg,C.fEh,C.fEi,C.fEj,C.fEk,C.fEl,C.fEm,C.fEn,C.fEo,C.fEp,C.fEr,C.fEs,C.fEt,C.fEu,C.fvZ,C.fjf,C.fje,C.fEU,C.dTA,C.dTy,C.eW3,C.c8W,C.c8Y,C.fLl,C.d8u,C.d8w,C.fLk,C.fLi,C.fNH,C.fBA,C.d84,C.fu2,C.fu3,C.cem,C.cen,C.cel,C.ceb,C.cec,C.ce8,C.ce9,C.cea,C.ceD,C.cey,C.cet,C.ceu,C.cew,C.cez,C.ceB,C.fCc,C.ceg,C.cej,C.cek,C.ceq,C.cer,C.fF0,C.fE7,C.cef,C.ced,C.fC6,C.flN,C.ce6,C.eTH,C.foK,C.evs,C.erS,C.erT,C.ets,C.etg,C.eth,C.erf,C.evd,C.eve,C.evf,C.eqE,C.esW,C.esY,C.esy,C.esv,C.erO,C.erP,C.esF,C.eqG,C.esR,C.esS,C.esQ,C.esU,C.esT,C.etb,C.etc,C.ete,C.et7,C.eqZ,C.eqW,C.etl,C.eqO,C.evc,C.epm,C.eqR,C.eqQ,C.eq4,C.eq9,C.eq7,C.eq5,C.evk,C.evl,C.evm,C.evj,C.euR,C.euQ,C.euK,C.euM,C.euC,C.eva,C.ev8,C.epu,C.epq,C.erM,C.eqd,C.epF,C.epE,C.eq0,C.eq1,C.erd,C.eqf,C.eqj,C.et4,C.euD,C.euE,C.euF,C.euG,C.eqI,C.eqJ,C.eqK,C.ese,C.er9,C.er1,C.er8,C.eso,C.esp,C.eub,C.eud,C.eux,C.euz,C.eue,C.euf,C.eqb,C.erR,C.erQ,C.ev0,C.eqz,C.eqr,C.eqs,C.eqv,C.eqw,C.est,C.erx,C.ery,C.erz,C.erA,C.erB,C.erC,C.erD,C.erE,C.erF,C.erG,C.erH,C.etp,C.d0V,C.d0W,C.ew7,C.fER,C.fF_,C.fEQ,C.fEW,C.fbM,C.fNL,C.fNM,C.fNN,C.evA,C.evJ,C.epf,C.epa,C.epb,C.fza,C.fz9,C.fzb,C.fzg,C.fzc,C.fzd,C.f62,C.f63,C.eel,C.chd])
u(B.j9,[C.cFj,C.f4v,C.f4A,C.f4B,C.f4w,C.f4x,C.f4y,C.f4o,C.f4p,C.f4r,C.f4s,C.f4F,C.f4E,C.f4u,C.f4t,C.f4C,C.f4D,C.f4I,C.f4J,C.f4H,C.cGE,C.cGI,C.cGG,C.cGw,C.cGx,C.cGz,C.cGs,C.cGt,C.cGA,C.cGr,C.cGq,C.cGp,C.cFT,C.cFS,C.cFV,C.cG2,C.cFW,C.cFU,C.cFY,C.cFZ,C.cG_,C.cFX,C.cG0,C.cG4,C.cG5,C.cG6,C.cG7,C.ftL,C.ftM,C.ftJ,C.ftK,C.ea1,C.ea_,C.ea0,C.ea2,C.ea3,C.dXC,C.ftP,C.ftQ,C.ftT,C.ftU,C.ftX,C.ftY,C.eem,C.fBH,C.fBG,C.ehk,C.ehj,C.egY,C.egU,C.eh4,C.eh5,C.eh6,C.eh_,C.eh0,C.eh1,C.eh2,C.egZ,C.egW,C.egX,C.ehc,C.ehd,C.ehb,C.ehe,C.eha,C.eh9,C.eh8,C.ehh,C.eh7,C.egV,C.ehS,C.ehG,C.ehH,C.ehN,C.ehI,C.ehK,C.ehJ,C.ehR,C.ePW,C.eQj,C.ePF,C.ePG,C.ePD,C.ePE,C.eQp,C.eQo,C.eQn,C.eQs,C.eQr,C.ePu,C.ePy,C.ePt,C.ePs,C.ePp,C.ePr,C.ePq,C.eR0,C.eQU,C.eQS,C.eQV,C.eQR,C.eQW,C.eQQ,C.eQX,C.eQY,C.eQZ,C.eQP,C.eQB,C.eQw,C.eQH,C.eQA,C.eQL,C.eQz,C.eQM,C.eQy,C.eQN,C.eQx,C.eQg,C.eQf,C.eQh,C.eQe,C.eQi,C.eQ8,C.eQ7,C.eQ9,C.eQ6,C.eQ5,C.eQ4,C.ePc,C.eP7,C.ePm,C.ePh,C.ePn,C.ePg,C.ePo,C.ePf,C.eQb,C.eQ_,C.ePZ,C.eQ0,C.ePY,C.eQ1,C.ePX,C.eQk,C.eQv,C.eQu,C.ePM,C.fEE,C.fEG,C.fEK,C.fx1,C.fzs,C.fzq,C.fzr,C.eXg,C.eXh,C.eXd,C.eX7,C.eX6,C.eX9,C.eXa,C.eWX,C.eWY,C.eX_,C.eX0,C.eX1,C.eWZ,C.eX3,C.eXu,C.eXv,C.eXt,C.eXw,C.eXs,C.eXr,C.eXq,C.eXA,C.eXp,C.eXo,C.eXn,C.eXD,C.eXm,C.eXE,C.eXl,C.eXk,C.eX4,C.eX5,C.eXj,C.eXi,C.eWQ,C.eWR,C.eWS,C.eWT,C.eWP,C.eWV,C.eWW,C.dj5,C.dj7,C.dja,C.djb,C.dj9,C.dj8,C.fy9,C.fw_,C.c8X,C.c8Z,C.d8n,C.d8s,C.d8t,C.d8r,C.d8q,C.d8v,C.d8p,C.d8o,C.d8x,C.fLh,C.df8,C.df9,C.dfa,C.fu0,C.fu1,C.ceE,C.epg,C.eph,C.epi,C.epj,C.flL,C.flM,C.dRN,C.dRM,C.d5j,C.d5i,C.evu,C.evt,C.erU,C.euA,C.evq,C.etq,C.evg,C.evh,C.evr,C.esz,C.eqC,C.eqD,C.esX,C.esx,C.esu,C.esw,C.esA,C.esB,C.esC,C.esD,C.esE,C.esG,C.eqH,C.esJ,C.esK,C.esL,C.esM,C.esN,C.esO,C.esI,C.esV,C.et8,C.et6,C.etf,C.esH,C.eqX,C.eqY,C.er_,C.eti,C.etm,C.epB,C.eqV,C.eqT,C.etu,C.eqP,C.ett,C.eqF,C.erg,C.evb,C.euB,C.epC,C.epz,C.epp,C.epl,C.epn,C.eqS,C.eq3,C.eq8,C.eq6,C.eq2,C.et5,C.evn,C.euN,C.euI,C.euJ,C.euL,C.erK,C.erJ,C.ev9,C.eps,C.ept,C.epv,C.epw,C.epA,C.epr,C.etr,C.evi,C.erN,C.eqc,C.epo,C.ere,C.epx,C.epG,C.epH,C.epI,C.epT,C.epW,C.epX,C.epY,C.epZ,C.eq_,C.epJ,C.epK,C.epL,C.epM,C.epN,C.epO,C.epP,C.epQ,C.epR,C.epS,C.epU,C.epV,C.erc,C.erb,C.era,C.epy,C.eqg,C.eqe,C.eqh,C.eqi,C.eqU,C.et0,C.et1,C.esZ,C.et_,C.euH,C.eqM,C.eqL,C.esd,C.esc,C.esf,C.esb,C.esg,C.esa,C.esh,C.es9,C.esi,C.es8,C.esj,C.es7,C.esk,C.es6,C.esl,C.es5,C.erZ,C.es_,C.es0,C.erY,C.es1,C.erX,C.es2,C.erW,C.es3,C.erV,C.es4,C.er6,C.er7,C.er0,C.er2,C.er3,C.er4,C.er5,C.evo,C.evp,C.esn,C.esm,C.esq,C.etN,C.etO,C.etP,C.eu_,C.eua,C.eul,C.eus,C.eut,C.euu,C.euv,C.euw,C.etQ,C.etR,C.etS,C.etT,C.etU,C.etV,C.etW,C.etX,C.etY,C.etZ,C.eu0,C.eu1,C.eu2,C.eu3,C.eu4,C.eu5,C.eu6,C.eu7,C.eu8,C.etD,C.eu9,C.etL,C.etK,C.euc,C.etJ,C.etz,C.euy,C.etI,C.ety,C.etw,C.etH,C.etx,C.etv,C.eug,C.etG,C.euh,C.eui,C.euj,C.euk,C.etF,C.eum,C.eun,C.euo,C.etE,C.eup,C.etC,C.euq,C.etB,C.eur,C.etA,C.eqa,C.euU,C.euT,C.euV,C.euS,C.erj,C.eri,C.erk,C.erh,C.ev4,C.ev_,C.ev3,C.euW,C.euX,C.euY,C.euZ,C.ev1,C.ev2,C.ev7,C.eqB,C.eqo,C.eqp,C.eqq,C.eqn,C.equ,C.eqt,C.eqm,C.eql,C.eqx,C.eqk,C.eqy,C.ess,C.esr,C.erw,C.erv,C.eru,C.ert,C.ers,C.err,C.erq,C.erp,C.erm,C.ero,C.ern,C.erl,C.erI,C.etn,C.eto,C.d0X,C.d1j,C.d1k,C.d0R,C.d0Q,C.d0U,C.d0S,C.d0T,C.ew4,C.evV,C.ew3,C.evW,C.evX,C.evR,C.evS,C.evT,C.evU,C.ew6,C.fEX,C.fEY,C.fEZ,C.evx,C.evy,C.evz,C.evC,C.evD,C.evG,C.evH,C.evF,C.evI,C.evE,C.evw,C.evv,C.evK,C.evL,C.evN,C.evO,C.epe,C.epd,C.ep9,C.epc,C.evQ,C.evP,C.fzf,C.fze,C.eej,C.eek])
t(C.aQN,B.J)
u(B.ma,[C.a3A,C.awP,C.avw,C.xA,C.xD,C.kT,C.tm,C.Bv,C.rv,C.w1,C.aru,C.IJ,C.aqW,C.uK,C.mv,C.hE,C.a8r])
u(C.bNm,[C.cxq,C.bNn])
u(C.ch7,[C.chb,C.asw])
t(C.cha,C.ch5)
t(C.ch9,C.ch4)
t(C.chc,C.ch9)
t(C.ch8,C.ch6)
t(C.ch2,C.ch3)
t(C.b9B,B.oP)
t(C.crb,B.auZ)
t(C.a8d,B.xo)
t(C.aVh,B.dF)
t(C.aAn,B.atR)
u(B.ag,[C.a0D,C.Yo,C.Ym,C.aq6,C.VB,C.VC,C.a_E,C.a0a,C.a09,C.aDz,C.Zx,C.Nr,C.Z5,C.Zq,C.ao5,C.aIn,C.UU,C.azc,C.a7v,C.NT,C.ayz,C.JK,C.a_h,C.VN,C.VO,C.aDV,C.ar0,C.a7w])
u(B.ah,[C.aIG,C.axm,C.axi,C.aDo,C.aDF,C.aDH,C.aF3,C.aGZ,C.aGY,C.aLr,C.aB4,C.aKY,C.azs,C.bfr,C.aKK,C.aMI,C.aKX,C.bdl,C.aLp,C.aLA,C.aJH,C.bc7,C.aLB,C.aDY,C.bjI,C.aDW,C.aDZ,C.bjr])
u(B.at,[C.axk,C.ad2,C.acs,C.bix,C.ad5,C.aeL,C.b0f,C.brP,C.b0A,C.bkZ,C.bqn,C.aZu,C.b0D,C.ad8,C.adp,C.b0B,C.II,C.aZx,C.bcm,C.Px,C.JR,C.bgX,C.bgW,C.buc])
u(B.Hc,[C.bbP,C.btd,C.aJ_,C.bev,C.bqL])
u(B.mL,[C.bbO,C.b8m,C.bqI,C.bbl,C.beS,C.bh2,C.bdZ,C.beP,C.bex,C.bne,C.b9t,C.b97,C.bu9,C.bra,C.bqj,C.bdS,C.b0y,C.bpg,C.bqg])
t(C.bjp,C.aLr)
t(C.biO,C.aKY)
t(C.biz,C.aKK)
t(C.btG,C.aMI)
t(C.biL,C.aKX)
t(C.bjn,C.aLp)
t(C.bwp,C.aLA)
t(C.aDX,C.bwp)
t(C.bc8,C.aJH)
t(C.aE_,C.aLB)
t(C.bu0,B.iT)
t(C.a8q,B.ks)
t(C.chf,C.b2j)
t(C.ahZ,C.a2C)
u(B.Xp,[C.aQD,C.aS9])
t(C.awr,C.aQD)
w(C.aLr,B.cn)
w(C.aKY,B.cn)
w(C.aKK,B.cn)
w(C.aKX,B.cn)
w(C.aLp,B.cn)
w(C.aMI,B.cn)
w(C.aJH,B.eS)
w(C.aLA,B.cn)
v(C.bwp,B.ew)
w(C.aLB,B.cn)})()
B.k_(b.typeUniverse,JSON.parse('{"aRm":{"hK":["aRm"]},"nV":{"aRm":[],"hK":["aRm"]},"aQN":{"J":["RH"],"J.E":"RH"},"b9B":{"oP":[]},"a8d":{"xo":[],"of":[]},"aVh":{"dF":[],"cy":[],"t":[]},"aAn":{"aT":[],"d7":["aT"],"aS":[],"cs":[]},"a0D":{"ag":[],"t":[]},"aIG":{"ah":["a0D"]},"Yo":{"ag":[],"t":[]},"Ym":{"ag":[],"t":[]},"axm":{"ah":["Yo"]},"axi":{"ah":["Ym"]},"axk":{"at":[],"t":[]},"aq6":{"ag":[],"t":[]},"aDo":{"ah":["aq6"]},"ad2":{"at":[],"t":[]},"acs":{"at":[],"t":[]},"ad5":{"at":[],"t":[]},"aeL":{"at":[],"t":[]},"bix":{"at":[],"t":[]},"VB":{"ag":[],"t":[]},"aDF":{"ah":["VB"]},"b0f":{"at":[],"t":[]},"bbP":{"aC":[]},"bbO":{"aC":[]},"btd":{"aC":[]},"b8m":{"aC":[]},"bqI":{"aC":[]},"VC":{"ag":[],"t":[]},"aDH":{"ah":["VC"]},"bbl":{"aC":[]},"a_E":{"ag":[],"t":[]},"aF3":{"ah":["a_E"]},"beS":{"aC":[]},"a0a":{"ag":[],"t":[]},"a09":{"ag":[],"t":[]},"aDz":{"ag":[],"t":[]},"Zx":{"ag":[],"t":[]},"aGZ":{"ah":["a0a"]},"aGY":{"ah":["a09"]},"bjp":{"ah":["aDz"]},"bh2":{"aC":[]},"aB4":{"ah":["Zx"]},"brP":{"at":[],"t":[]},"b0A":{"at":[],"t":[]},"bkZ":{"at":[],"t":[]},"Nr":{"ag":[],"t":[]},"Z5":{"ag":[],"t":[]},"biO":{"ah":["Nr"]},"bqn":{"at":[],"t":[]},"bdZ":{"aC":[]},"aZu":{"at":[],"t":[]},"azs":{"ah":["Z5"]},"Zq":{"ag":[],"t":[]},"bfr":{"ah":["Zq"]},"beP":{"aC":[]},"bex":{"aC":[]},"bne":{"aC":[]},"b9t":{"aC":[]},"b97":{"aC":[]},"bu9":{"aC":[]},"bra":{"aC":[]},"bqj":{"aC":[]},"bdS":{"aC":[]},"ao5":{"ag":[],"t":[]},"b0D":{"at":[],"t":[]},"biz":{"ah":["ao5"]},"ad8":{"at":[],"t":[]},"adp":{"at":[],"t":[]},"aIn":{"ag":[],"t":[]},"UU":{"ag":[],"t":[]},"II":{"at":[],"t":[]},"azc":{"ag":[],"t":[]},"a7v":{"ag":[],"t":[]},"b0B":{"at":[],"t":[]},"b0y":{"aC":[]},"btG":{"ah":["aIn"]},"aJ_":{"aC":[]},"biL":{"ah":["UU"]},"bdl":{"ah":["azc"]},"bjn":{"ah":["a7v"]},"aZx":{"at":[],"t":[]},"bev":{"aC":[]},"bpg":{"aC":[]},"bqg":{"aC":[]},"ayz":{"ag":[],"t":[]},"JK":{"ag":[],"t":[]},"a_h":{"ag":[],"t":[]},"JR":{"at":[],"t":[]},"NT":{"ag":[],"t":[]},"aDX":{"ah":["NT"],"ew":[]},"bc8":{"ah":["ayz"]},"bcm":{"at":[],"t":[]},"bc7":{"ah":["JK"]},"Px":{"at":[],"t":[]},"aE_":{"ah":["a_h"]},"bqL":{"aC":[]},"bgX":{"at":[],"t":[]},"bgW":{"at":[],"t":[]},"VN":{"ag":[],"t":[]},"VO":{"ag":[],"t":[]},"aDV":{"ag":[],"t":[]},"ar0":{"ag":[],"t":[]},"aDY":{"ah":["VN"]},"bjI":{"ah":["VO"]},"aDW":{"ah":["aDV"]},"bu0":{"iT":[]},"aDZ":{"ah":["ar0"]},"buc":{"at":[],"t":[]},"a7w":{"ag":[],"t":[]},"bjr":{"ah":["a7w"]},"a8q":{"ks":["ft<eP>"],"kf":["ft<eP>"]},"ahZ":{"a2C":[]},"aQD":{"j3":[],"ff":[]},"awr":{"j3":[],"ff":[]},"aS9":{"j3":[],"ff":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.ax
return{bu:w("LF"),U:w("vv<q1>"),bz:w("v"),M:w("dC<m>"),bo:w("jy"),g7:w("Ma"),gc:w("aA<iy?>"),bq:w("aA<~>"),cc:w("Mn"),fS:w("DT"),an:w("HU"),bm:w("O<RH>"),X:w("O<a2K>"),f3:w("O<aRm>"),aK:w("O<n8>"),V:w("O<ac>"),O:w("O<v>"),fA:w("O<ly>"),d5:w("O<aA<bv<H,+icon3d,picture(m?,m?)>>>"),bH:w("O<aA<dI>>"),fG:w("O<aA<~>>"),aF:w("O<ne>"),cd:w("O<ai<jm>>"),ez:w("O<a5<m,aD>>"),d:w("O<a5<m,@>>"),B:w("O<mr>"),h:w("O<jm>"),gE:w("O<zB>"),k:w("O<om>"),g:w("O<lG>"),D:w("O<i3>"),u:w("O<eG>"),m:w("O<uK>"),i:w("O<hE>"),aC:w("O<a7N>"),o:w("O<zC>"),e3:w("O<aD>"),dN:w("O<x>"),v:w("O<hu>"),cR:w("O<iQ>"),J:w("O<jf>"),gx:w("O<p8<m>>"),f2:w("O<+(a1,m)>"),L:w("O<+(m,m)>"),aD:w("O<+data,mimeType(m,m)>"),G:w("O<+(K,K)>"),ek:w("O<+(H,m)>"),n:w("O<+(H,H)>"),r:w("O<cS>"),s:w("O<m>"),aS:w("O<iT>"),p:w("O<t>"),eR:w("O<ff>"),fT:w("O<b84>"),bx:w("O<aEy>"),gz:w("O<aeV>"),x:w("O<K>"),t:w("O<H>"),dS:w("O<aC?>"),bA:w("O<x?>"),Z:w("O<H?>"),cA:w("O<cf>"),A:w("cv<ah<ag>>"),gL:w("ai<om>"),R:w("ai<i3>"),j:w("ai<@>"),bW:w("ai<H>"),e:w("bv<H,+icon3d,picture(m?,m?)>"),P:w("a5<m,@>"),f:w("a5<@,@>"),gI:w("a5<H,+icon3d,picture(m?,m?)>"),bR:w("M<hE,t>"),eC:w("M<nK,m>"),cT:w("M<jE,D>"),dv:w("M<m,m>"),f0:w("M<m,t>"),gN:w("M<H,pF>"),gh:w("M<mv,jo<mv>>"),w:w("iC"),ei:w("iy"),g2:w("rl"),fB:w("Eu"),b6:w("zB"),gX:w("a7F"),dt:w("li"),ea:w("om"),bt:w("lG"),I:w("i3"),F:w("eG"),fO:w("mv"),ff:w("uK"),fP:w("hE"),Q:w("w1"),dO:w("aqX"),a:w("cp"),C:w("aD"),dw:w("asx"),di:w("a8r"),Y:w("eP"),fz:w("+(m,m)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(m?,m)"),aH:w("+icon3d,picture(m?,m?)"),cz:w("F0"),dB:w("dx<x>"),bJ:w("dx<m>"),_:w("e0<m>"),N:w("m"),fw:w("q1"),bO:w("ar"),K:w("bp<x>"),b:w("bp<K>"),E:w("dI"),W:w("cx<m>"),ac:w("cx<H>"),ex:w("jI<lG>"),cI:w("jI<m>"),cl:w("jI<K>"),b4:w("a_<lf>"),a8:w("a_<m5>"),fR:w("a_<+(m,m)>"),co:w("ea<x>"),l:w("t"),b2:w("bW<~>"),ev:w("q3<dW>"),dT:w("bg<~>"),cQ:w("aAn"),q:w("mY"),y:w("R"),gR:w("K"),z:w("@"),S:w("H"),at:w("bb?"),gw:w("ai<a5<m,@>>?"),aT:w("ai<i3>?"),c:w("ai<@>?"),aP:w("iy?"),af:w("i3?"),go:w("b0F?"),a6:w("a7O?"),cK:w("aD?"),bZ:w("+bytes,dataUrl,fileName(dI,m,m)?"),gl:w("+claimCode,qrPayload,token(m?,m,m)?"),T:w("m?"),dd:w("dI?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aWX=new B.bI(A.ay,null,null,H.ao9,null)
D.aX5=new B.dd(0,-0.15)
D.aX7=new B.dd(0.62,0)
D.aXa=new B.dd(-0.35,-0.45)
D.aXk=new B.dd(0.9,-0.85)
D.aZ4=new B.bo(H.SF,H.SF,A.hE,A.hE)
D.aZj=new B.az(A.b4,1,A.q,-1)
D.bic=new B.v(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aZv=new B.az(D.bic,1,A.q,-1)
D.aZH=new B.az(A.aE,1.5,A.q,-1)
D.aZM=new B.az(A.b4,1.6,A.q,-1)
D.b_1=new B.az(A.aE,1.4,A.q,-1)
D.b0o=new B.o(null,null,null,null,null,L.GP,A.a5)
D.bYt=new B.a8(A.a3,A.a8,A.x,G.a3i,null,null)
D.b0w=new B.o(null,null,null,null,null,D.bYt,A.a5)
D.abr=new B.o(A.av,null,null,A.t3,null,null,A.n)
D.bc_=new B.v(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.bi9=new B.v(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cVZ=w([D.bc_,D.bi9],x.O)
D.eiG=new B.c_(A.A,0.5,A.x,null,0,D.cVZ,null,null)
D.b0P=new B.o(null,null,null,null,null,D.eiG,A.a5)
D.X2=new B.v(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.b_h=new B.bO(P.v5,A.W,A.W,A.W)
D.b0R=new B.o(D.X2,null,D.b_h,null,null,null,A.n)
D.c_c=new B.a8(A.a3,A.a8,A.x,A.Qg,null,null)
D.b0Y=new B.o(null,null,null,null,null,D.c_c,A.a5)
D.ad_=new B.v(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.b10=new B.o(D.ad_,null,null,A.qG,null,null,A.n)
D.b14=new B.o(A.jj,null,null,null,null,null,A.a5)
D.b17=new B.o(Z.ae4,null,H.ab5,A.md,null,null,A.n)
D.E9=new B.o(A.dL,null,null,null,null,null,A.a5)
D.b1e=new B.o(null,null,null,null,null,E.w4,A.a5)
D.d_W=w([E.aeX,A.bY],x.O)
D.bZO=new B.a8(A.b1,A.b6,A.x,D.d_W,null,null)
D.b1i=new B.o(null,null,null,A.md,null,D.bZO,A.n)
D.daH=w([A.bi,A.dL,A.jZ],x.O)
D.a1s=new B.a8(A.ay,A.aC,A.x,D.daH,null,null)
D.b1v=new B.o(null,null,null,null,null,D.a1s,A.n)
D.b1w=new B.o(D.ad_,null,null,A.kM,null,null,A.n)
D.cqv=w([A.d5,A.bi],x.O)
D.bZF=new B.a8(A.ay,A.aC,A.x,D.cqv,null,null)
D.b1A=new B.o(null,null,null,null,null,D.bZF,A.n)
D.b1K=new B.o(null,null,null,null,null,G.ue,A.a5)
D.b23=new B.o(A.aeZ,null,null,null,null,null,A.a5)
D.bcS=new B.v(0.5647058823529412,0,0,0,A.t)
D.abB=new B.ac(0,A.G,D.bcS,A.Sa,28)
D.b4b=new B.aVu()
D.b4K=new C.crb()
D.b4W=new C.b9B()
D.ac6=new B.co(A.A,null,null,A.a1h,null)
D.b7t=new B.fi(null,null,null,null,null,E.mZ,null,null,null,null)
D.b5s=new B.co(A.A,null,null,D.b7t,null)
D.bJ3=new B.ae(A.e0,28,A.c,null,null,null)
D.b5W=new B.co(A.A,null,null,D.bJ3,null)
D.b7q=new B.fi(2,null,null,null,null,A.bZ,null,null,null,null)
D.b6h=new B.co(A.A,null,null,D.b7q,null)
D.bJo=new B.ae(L.NU,40,A.bx,null,null,null)
D.b6i=new B.co(A.A,null,null,D.bJo,null)
D.b8j=new B.v(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b8v=new B.v(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b8U=new B.v(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b90=new B.v(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b9v=new B.v(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b9L=new B.v(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b9M=new B.v(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.KW=new B.v(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.baa=new B.v(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.bag=new B.v(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.adh=new B.v(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.bb1=new B.v(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.bbP=new B.v(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.adw=new B.v(1,1,1,0.9725490196078431,A.t)
D.bc8=new B.v(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.bck=new B.v(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.bco=new B.v(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.bcC=new B.v(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.bcX=new B.v(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.bes=new B.v(1,1,0.996078431372549,0.9725490196078431,A.t)
D.WO=new B.v(0.8509803921568627,0,0,0,A.t)
D.beB=new B.v(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.beI=new B.v(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.aem=new B.v(0.6,0,0,0,A.t)
D.aeo=new B.v(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.bg6=new B.v(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.to=new B.v(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.bgv=new B.v(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.bgV=new B.v(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.bhi=new B.v(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.af9=new B.v(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.Xc=new B.v(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.AQ=new B.v(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.Lv=new B.v(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.jg=new B.v(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.afx=new B.v(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.Xn=new B.v(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.bkJ=new B.v(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.blc=new B.v(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.blq=new B.v(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.XJ=new B.v(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.bmA=new B.v(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.xA=new B.v(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.bn5=new B.v(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.bnp=new B.hJ(A.b2,!0,null,null)
D.feX=new B.G(!0,A.aA,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEY=new B.y("Bio link",null,D.feX,null,null,null,null,null,null,null,null,null)
D.b6b=new B.co(A.A,null,null,D.fEY,null)
D.bnF=new B.hJ(A.W8,!0,D.b6b,null)
D.LT=new C.a3A(0,"none")
D.agB=new C.a3A(1,"deflate")
D.agC=new C.a3A(2,"bzip2")
D.boC=new B.kl(0.165,0.84,0.44,1)
D.d0f=w([A.c9,A.dN,A.aE],x.O)
D.bYX=new B.a8(A.ay,A.aC,A.x,D.d0f,null,null)
D.b0t=new B.o(null,null,null,null,null,D.bYX,A.n)
D.bSj=new B.ae(A.eT,null,A.ad,null,null,null)
D.b6N=new B.co(A.A,null,null,D.bSj,null)
D.bp8=new B.kQ(D.b0t,A.be,D.b6N,null)
D.bkZ=new B.v(0.058823529411764705,1,1,1,A.t)
D.d3t=w([A.bE,A.qQ,A.qQ,D.bkZ],x.O)
D.cHN=w([0,0.32,0.7,1],x.x)
D.bZv=new B.a8(A.ay,A.aC,A.x,D.d3t,D.cHN,null)
D.b0i=new B.o(null,null,null,null,null,D.bZv,A.n)
D.bpe=new B.kQ(D.b0i,A.be,null,null)
D.bqm=new B.mk(1,1,null,null,null,A.bm,null)
D.bqp=new B.mk(1,null,null,null,null,D.Xn,null)
D.bqT=new B.bb(125e4)
D.bqZ=new B.bb(17e4)
D.br8=new B.bb(35964e8)
D.bre=new B.bb(55e4)
D.bri=new B.bb(68e4)
D.brJ=new B.ih(0,0,0,5)
D.brZ=new B.Q(0,16,16,0)
D.bs9=new B.Q(0,36,0,36)
D.bsg=new B.Q(0,54,0,0)
D.bsn=new B.Q(10,0,10,3)
D.bsx=new B.ih(10,16,10,10)
D.bsJ=new B.Q(10,6,4,6)
D.bsM=new B.Q(10,8,10,6)
D.ahy=new B.Q(11,8,11,11)
D.bsR=new B.Q(12,0,12,24)
D.bt2=new B.Q(12,12,12,4)
D.bt5=new B.Q(12,12,8,12)
D.btk=new B.Q(12,8,8,12)
D.btH=new B.Q(14,14,14,0)
D.btM=new B.Q(14,14,14,90)
D.bu3=new B.Q(16,10,16,16)
D.bu4=new B.Q(16,10,16,20)
D.ail=new B.Q(16,6,16,28)
D.buD=new B.Q(18,0,18,10)
D.buF=new B.Q(18,0,18,30)
D.buH=new B.Q(18,10,18,12)
D.buI=new B.Q(18,10,18,14)
D.buZ=new B.Q(18,16,14,18)
D.bv3=new B.Q(18,18,18,12)
D.bv9=new B.Q(18,26,18,12)
D.bve=new B.Q(18,34,18,34)
D.bvf=new B.Q(18,4,18,14)
D.bvl=new B.Q(18,8,18,24)
D.bvD=new B.Q(20,16,14,4)
D.bvI=new B.Q(20,18,12,4)
D.bvN=new B.Q(20,20,12,20)
D.bvQ=new B.Q(20,22,20,20)
D.bvV=new B.Q(20,6,20,6)
D.bw4=new B.Q(22,18,22,18)
D.bwc=new B.Q(22,24,22,0)
D.bwf=new B.Q(22,24,22,4)
D.bwn=new B.Q(22,60,22,22)
D.bwt=new B.Q(24,24,24,22)
D.bwD=new B.Q(26,10,60,10)
D.bwL=new B.Q(28,44,28,44)
D.bx1=new B.Q(32,44,32,44)
D.bx9=new B.Q(38,30,38,20)
D.bxe=new B.Q(4,0,0,6)
D.bxq=new B.ih(4,4,4,4)
D.bxQ=new B.ih(6,5,6,5)
D.bxU=new B.Q(6,6,8,6)
D.by4=new B.Q(8,14,8,14)
D.by5=new B.Q(8,22,8,22)
D.byd=new B.Q(8,6,12,6)
D.bym=new B.Q(8,8,8,4)
D.aje=new B.Q(9,9,9,6)
D.byx=new B.ih(2.5,2.5,2.5,2.5)
D.byy=new B.Q(10.5,0,10.5,0)
D.byz=new B.Q(7,1.5,7,1.5)
D.cT3=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.byP=new B.z_(null,null,D.cT3,A.Au)
D.cQ5=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.byQ=new B.z_(null,null,D.cQ5,A.Au)
D.aR6=new B.G(!0,A.aA,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEh=new B.y("WORD DESIGN",null,D.aR6,null,null,null,null,null,null,null,null,null)
D.bzo=new B.bB(1,A.bf,D.fEh,null)
D.fDX=new B.y("Slides database",null,Aa.rO,null,null,null,null,null,null,null,null,null)
D.fBb=new B.y("Admin only \xb7 keep as many as you like",null,U.aQB,null,null,null,null,null,null,null,null,null)
D.diZ=w([D.fDX,A.bz,D.fBb],x.p)
D.bo4=new B.fl(A.ah,A.e,A.j,A.F,null,A.p,null,0,D.diZ,null)
D.bzr=new B.bB(1,A.bf,D.bo4,null)
D.fvC=new B.y("NGMY logo",null,A.fP,null,null,null,null,null,null,null,null,null)
D.bzu=new B.bB(1,A.bf,D.fvC,null)
D.fcO=new B.G(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGh=new B.y("TALK TO THE EDITOR",null,D.fcO,null,null,null,null,null,null,null,null,null)
D.bzL=new B.bB(1,A.bf,D.fGh,null)
D.fps=new B.y("Tell the AI what to change",null,Aa.rO,null,null,null,null,null,null,null,null,null)
D.bA5=new B.bB(1,A.bf,D.fps,null)
D.bAY=new B.DI(!0,"video/mp4")
D.fb5=new B.G(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnu=new B.y("Move presentations between devices",null,D.fb5,null,null,null,!1,null,null,1,null,null)
D.bB1=new B.qn(A.dZ,A.a3,A.f,D.fnu,null)
D.foF=new B.y("Edit in Slides",null,A.j9,null,null,null,null,null,null,null,null,null)
D.bB2=new B.qn(A.dZ,A.A,A.f,D.foF,null)
D.bBh=new B.dq(1,A.cm,D.bB2,null)
D.a_L=new B.a1(60988,"MaterialIcons",!1)
D.bEG=new B.a1(61352,"MaterialIcons",!1)
D.akN=new B.a1(61531,"MaterialIcons",!1)
D.bFU=new B.a1(63062,"MaterialIcons",!1)
D.bG0=new B.a1(63109,"MaterialIcons",!1)
D.bGc=new B.a1(63206,"MaterialIcons",!1)
D.aly=new B.a1(63238,"MaterialIcons",!1)
D.bGu=new B.a1(63338,"MaterialIcons",!1)
D.a0f=new B.a1(63365,"MaterialIcons",!1)
D.a0g=new B.a1(63367,"MaterialIcons",!1)
D.a0h=new B.a1(63368,"MaterialIcons",!1)
D.alJ=new B.a1(63384,"MaterialIcons",!1)
D.bGM=new B.a1(63525,"MaterialIcons",!1)
D.bGP=new B.a1(63568,"MaterialIcons",!1)
D.bH9=new B.a1(983072,"MaterialIcons",!1)
D.bHx=new B.a1(983271,"MaterialIcons",!0)
D.amR=new B.a1(983965,"MaterialIcons",!1)
D.amS=new B.a1(983966,"MaterialIcons",!1)
D.bIp=new B.a1(984592,"MaterialIcons",!1)
D.bIH=new B.ae(A.tW,16,A.aA,null,null,null)
D.bIO=new B.ae(A.o2,null,A.c,null,null,null)
D.an1=new B.ae(A.q5,18,A.c,null,null,null)
D.bJ4=new B.ae(A.BA,18,O.li,null,null,null)
D.bJK=new B.ae(A.jq,11,null,null,null,null)
D.bJU=new B.ae(A.a00,null,A.ek,null,null,null)
D.bKs=new B.ae(A.rc,18,A.aA,null,null,null)
D.bKy=new B.ae(A2.BP,14,null,null,null,null)
D.bKz=new B.ae(A.ef,28,A.cs,null,null,null)
D.bKL=new B.ae(A.q6,20,A.c,null,null,null)
D.bKS=new B.ae(A.ys,null,null,null,null,null)
D.bKY=new B.ae(A.lo,18,A.iF,null,null,null)
D.bL2=new B.ae(A.lp,null,null,null,null,null)
D.bFW=new B.a1(63065,"MaterialIcons",!1)
D.bLG=new B.ae(D.bFW,15,A.c,null,null,null)
D.bG1=new B.a1(63113,"MaterialIcons",!1)
D.bLM=new B.ae(D.bG1,null,A.ad,null,null,null)
D.bM9=new B.ae(A.tT,22,A.bL,null,null,null)
D.bMt=new B.ae(A.vM,18,null,null,null,null)
D.bMz=new B.ae(A.BT,12,A.c,null,null,null)
D.bI2=new B.a1(983687,"MaterialIcons",!1)
D.bMK=new B.ae(D.bI2,null,A.bi,null,null,null)
D.bMS=new B.ae(A.hA,null,A.bi,null,null,null)
D.bNa=new B.ae(A.p_,22,A.c,null,null,null)
D.bNe=new B.ae(A.cy,13,A.c,null,null,null)
D.bNk=new B.ae(A.ef,26,A.aw,null,null,null)
D.bNn=new B.ae(A.rf,26,A.c,null,null,null)
D.O6=new B.ae(A.jq,8,A.c,null,null,null)
D.bNG=new B.ae(A.q5,40,A.c,null,null,null)
D.bNH=new B.ae(A.bDD,null,null,null,null,null)
D.bNL=new B.ae(A.u6,20,null,null,null,null)
D.bI1=new B.a1(983683,"MaterialIcons",!1)
D.bNV=new B.ae(D.bI1,null,A.aZ,null,null,null)
D.bNW=new B.ae(A.jq,16,A.bi,null,null,null)
D.bOg=new B.ae(A.rg,null,null,null,null,null)
D.any=new B.ae(A.vO,22,A.c,null,null,null)
D.bOk=new B.ae(A.e0,17,A.c,null,null,null)
D.anz=new B.ae(A.jq,9,A.c,null,null,null)
D.bOp=new B.ae(A.vJ,null,null,null,null,null)
D.bDU=new B.a1(57744,"MaterialIcons",!1)
D.bOw=new B.ae(D.bDU,null,null,null,null,null)
D.bOz=new B.ae(A.vJ,16,null,null,null,null)
D.bIy=new B.a1(985181,"MaterialIcons",!1)
D.GG=new B.ae(D.bIy,null,null,null,null,null)
D.bOL=new B.ae(A.lp,16,A.bL,null,null,null)
D.bHV=new B.a1(983615,"MaterialIcons",!1)
D.bON=new B.ae(D.bHV,12,A.c,null,null,null)
D.anF=new B.ae(A.yc,16,null,null,null,null)
D.bOV=new B.ae(A.e0,21,A.c,null,null,null)
D.bP_=new B.ae(A.hA,17,A.c,null,null,null)
D.bP0=new B.ae(A.tT,null,null,null,null,null)
D.bPh=new B.ae(A.a0V,20,A.aA,null,null,null)
D.bPw=new B.ae(A.o_,22,E.mZ,null,null,null)
D.bPD=new B.ae(A.q4,13,A.ad,null,null,null)
D.bPF=new B.ae(A.amD,20,A.aA,null,null,null)
D.bDB=new B.a1(57495,"MaterialIcons",!1)
D.bPK=new B.ae(D.bDB,null,null,null,null,null)
D.bPO=new B.ae(A.o0,18,A.c,null,null,null)
D.bQ9=new B.ae(A.u9,28,A.c,null,null,null)
D.bQk=new B.ae(D.aly,null,A.aE,null,null,null)
D.bQl=new B.ae(A.q6,22,A.c,null,null,null)
D.anO=new B.ae(A.a_H,16,null,null,null,null)
D.bR6=new B.ae(A.tT,32,A.c,null,null,null)
D.bRQ=new B.ae(A.j4,22,A.c,null,null,null)
D.bRU=new B.ae(A.rf,22,A.ad,null,null,null)
D.ao2=new B.ae(A.tW,null,A.c_,null,null,null)
D.bSO=new B.ae(A.tV,18,null,null,null,null)
D.bTp=new B.ae(A.e0,18,A.bH,null,null,null)
D.a1k=new B.ae(A.cy,18,A.aA,null,null,null)
D.bTv=new B.ae(A.amx,null,null,null,null,null)
D.bTW=new B.e3(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aQV,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eB,!0,null,null,null,null)
D.f3e=new B.G(!0,A.bK,null,null,null,null,null,A.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bUd=new B.e3(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.f3e,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ae,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eB,!0,null,null,null,null)
D.bUE=new B.e3(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eB,!0,null,null,null,null)
D.cWV=w([A.dL,A.aE],x.O)
D.bWI=new B.a8(A.a3,A.a8,A.x,D.cWV,null,null)
D.bWT=new B.a8(A.b1,A.b6,A.Ue,A.av5,null,null)
D.b8K=new B.v(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.bd_=new B.v(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.bg7=new B.v(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.baU=new B.v(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cHP=w([D.b8K,D.bd_,D.bg7,D.baU],x.O)
D.bXb=new B.a8(A.ay,A.aC,A.x,D.cHP,A.He,null)
D.dj7=w([A.cY,A.bA,A.b4],x.O)
D.bXd=new B.a8(A.b1,A.b6,A.Ue,D.dj7,null,null)
D.dky=w([A.bi,A.c8],x.O)
D.bXh=new B.a8(A.a3,A.a8,A.x,D.dky,null,null)
D.dfv=w([A.hv,A.d8,A.aF],x.O)
D.bXj=new B.a8(A.ay,A.aC,A.x,D.dfv,null,null)
D.d1V=w([A.cN,A.fb],x.O)
D.bXn=new B.a8(A.a3,A.a8,A.x,D.d1V,null,null)
D.dj0=w([O.li,A.d8],x.O)
D.aoO=new B.a8(A.a3,A.a8,A.x,D.dj0,null,null)
D.bdD=new B.v(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.diY=w([D.bdD,D.xA,A.bZ],x.O)
D.bXs=new B.a8(A.a3,A.a8,A.x,D.diY,null,null)
D.cYz=w([A.bk,A.cT,A.er],x.O)
D.bXt=new B.a8(A.ay,A.aC,A.x,D.cYz,null,null)
D.Ol=new B.a8(A.a3,A.a8,A.x,A.Hr,null,null)
D.blP=new B.v(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cAN=w([D.blP,A.bZ,A.ji],x.O)
D.aoT=new B.a8(A.ay,A.aC,A.x,D.cAN,null,null)
D.d7c=w([A.vf,A.ax,D.AQ],x.O)
D.bYv=new B.a8(A.a3,A.a8,A.x,D.d7c,null,null)
D.bn6=new B.v(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.bbO=new B.v(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.bh7=new B.v(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cXH=w([D.bn6,D.bbO,D.bh7],x.O)
D.aoU=new B.a8(A.a3,A.a8,A.x,D.cXH,null,null)
D.bdF=new B.v(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.c_s=w([Au.agh,D.bdF],x.O)
D.bYE=new B.a8(A.b1,A.b6,A.x,D.c_s,null,null)
D.cVN=w([A.mX,A.bx],x.O)
D.bYI=new B.a8(A.b1,A.b6,A.x,D.cVN,null,null)
D.dck=w([A.aE,A.dN],x.O)
D.bYP=new B.a8(A.a3,A.a8,A.x,D.dck,null,null)
D.afj=new B.v(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.awL=w([D.afj,D.jg,D.KW],x.O)
D.bZf=new B.a8(A.ay,A.aC,A.x,D.awL,null,null)
D.cAF=w([A.dx,A.dH],x.O)
D.bZq=new B.a8(A.b1,A.b6,A.x,D.cAF,null,null)
D.d9l=w([A.xh,Ax.EO],x.O)
D.c_e=new B.a8(A.a3,A.a8,A.x,D.d9l,null,null)
D.fx8=new B.y("Which Bio link?",null,A.cA,null,null,null,null,null,null,null,null,null)
D.c_p=new B.pM(null,D.fx8,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.yP=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a5d=new C.kT(2,"elegantNavy")
D.hdf=w([A.Xa,D.jg,A.bZ],x.O)
D.jO=new C.xA(0,"classic")
D.a50=new C.jm("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a5d,4294967035,4279378237,4290283019,D.jO)
D.aG1=new C.kT(3,"elegantGold")
D.b8i=new B.v(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b9e=new B.v(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.adV=new B.v(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.hcI=w([D.b8i,D.b9e,D.adV],x.O)
D.a4Z=new C.jm("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aG1,4294966515,4281016592,4289102906,D.jO)
D.dFu=new C.kT(22,"goldRibbon")
D.hcE=w([A.Xa,D.jg,A.i2],x.O)
D.a4S=new C.jm("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dFu,4294967035,4279378237,4291404327,D.jO)
D.dFv=new C.kT(23,"goldBaroque")
D.aex=new B.v(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.hcK=w([D.aex,A.ax,A.ji],x.O)
D.a4T=new C.jm("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dFv,4294964964,4283053072,4292128567,D.jO)
D.dFx=new C.kT(4,"elegantEmerald")
D.bam=new B.v(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.bbg=new B.v(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.hcQ=w([D.bam,D.bbg,A.i2],x.O)
D.a4U=new C.jm("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dFx,4294376440,4279122734,4291404327,D.jO)
D.dFy=new C.kT(5,"elegantBurgundy")
D.bf5=new B.v(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.hcX=w([D.bf5,A.ad9,A.i2],x.O)
D.a4X=new C.jm("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dFy,4294965238,4283043359,4291404327,D.jO)
D.dFr=new C.kT(19,"goldFiligree")
D.LD=new B.v(1,1,0.984313725490196,0.9529411764705882,A.t)
D.hcL=w([D.LD,A.ax,A.ji],x.O)
D.a4V=new C.jm("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dFr,4294966259,4279378237,4292128567,D.jO)
D.dFs=new C.kT(20,"goldLaurel")
D.blE=new B.v(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.hcY=w([A.KP,A.i2,D.blE],x.O)
D.a4W=new C.jm("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dFs,4294966776,4282000405,4291404327,D.jO)
D.dFt=new C.kT(21,"goldCrest")
D.ad2=new B.v(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.blM=new B.v(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.hcN=w([D.ad2,A.ax,D.blM],x.O)
D.a5_=new C.jm("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dFt,4294965484,4283053072,4292128567,D.jO)
D.dFw=new C.kT(24,"goldStar")
D.bmZ=new B.v(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.hcR=w([D.bmZ,A.ax,D.jg],x.O)
D.a4Y=new C.jm("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dFw,4294966518,4279378237,4292128567,D.jO)
D.GR=w([D.a50,D.a4Z,D.a4S,D.a4T,D.a4U,D.a4X,D.a4V,D.a4W,D.a5_,D.a4Y],x.h)
D.qj=new C.mv(0,"blank")
D.S_=new C.mv(1,"title")
D.mE=new C.mv(2,"titleContent")
D.e_4=new C.mv(3,"twoColumn")
D.CR=new C.mv(4,"section")
D.e_5=new C.mv(5,"comparison")
D.I2=new C.mv(6,"flashcard")
D.I3=new C.mv(7,"quiz")
D.I4=new C.mv(8,"worksheet")
D.ape=w([D.qj,D.S_,D.mE,D.e_4,D.CR,D.e_5,D.I2,D.I3,D.I4],B.ax("O<mv>"))
D.axP=w([An.Wy,A.dH],x.O)
D.kz=w([A.bZ,A.bL,A.hI,A.hH,D.AQ],x.O)
D.dBr=new C.j0("fireworks","Royal Fireworks","Thank you for celebrating with us",D.axP,D.kz)
D.blX=new B.v(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.bf3=new B.v(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cW_=w([D.blX,D.bf3],x.O)
D.dBi=new C.j0("confetti","Golden Confetti","Together we rise",D.cW_,D.kz)
D.cT8=w([A.nD,A.Wb],x.O)
D.dBj=new C.j0("crown","Crown of Glory","Built for our community",D.cT8,D.kz)
D.bbE=new B.v(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.beK=new B.v(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cZT=w([D.bbE,D.beK],x.O)
D.ug=w([A.bK,A.aO,A.c,A.aL,A.ak],x.O)
D.dBd=new C.j0("aurora","Aurora Gala","A brighter future, together",D.cZT,D.ug)
D.bg9=new B.v(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.d9r=w([G.acG,D.bg9],x.O)
D.dBu=new C.j0("champagne","Champagne Toast","Cheers to every member",D.d9r,D.kz)
D.dBv=new C.j0("diamonds","Diamond Rain","Every member is a jewel",X.ayt,D.ug)
D.b96=new B.v(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.bee=new B.v(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.deN=w([D.b96,D.bee],x.O)
D.dB8=new C.j0("starburst","Golden Starburst","Thank you!",D.deN,D.kz)
D.c_z=w([A.fa,A.xt],x.O)
D.acP=new B.v(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.PT=w([A.oH,A.i0,A.vq,A.nE,D.acP],x.O)
D.dBC=new C.j0("balloons","Luxury Balloons","Let's celebrate",D.c_z,D.PT)
D.cSr=w([A.Wm,A.w],x.O)
D.dBq=new C.j0("galaxy","Galaxy Spiral","The sky is not the limit",D.cSr,D.ug)
D.bk_=new B.v(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.d5Z=w([A.kt,D.bk_],x.O)
D.dBl=new C.j0("redcarpet","Red Carpet","Tonight we shine",D.d5Z,D.kz)
D.bhN=new B.v(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.bfX=new B.v(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.dan=w([D.bhN,D.bfX],x.O)
D.dBa=new C.j0("coins","Gold Coin Rain","Every contribution counts",D.dan,D.kz)
D.dhr=w([A.dx,A.hG],x.O)
D.dBg=new C.j0("lanterns","Sky Lanterns","Lighting the way together",D.dhr,D.kz)
D.bcG=new B.v(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cQq=w([A.xv,D.bcG],x.O)
D.dBc=new C.j0("hearts","Floating Hearts","Made with love",D.cQq,D.PT)
D.b9E=new B.v(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.bas=new B.v(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.diW=w([D.b9E,D.bas],x.O)
D.dBB=new C.j0("petals","Rose Petals","Thank you, from our hearts",D.diW,D.PT)
D.bkX=new B.v(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.df6=w([A.lh,D.bkX],x.O)
D.dB7=new C.j0("butterflies","Golden Butterflies","New beginnings",D.df6,D.kz)
D.bh4=new B.v(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cRo=w([D.bh4,A.w],x.O)
D.dBt=new C.j0("neon","Neon Night","Let's go!",D.cRo,D.ug)
D.bdU=new B.v(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.dcv=w([A.Ld,D.bdU],x.O)
D.dBw=new C.j0("disco","Disco Ball","Party time",D.dcv,D.ug)
D.bhC=new B.v(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.dc2=w([A.hv,D.bhC],x.O)
D.dBb=new C.j0("sunrise","Golden Sunrise","A new day for our community",D.dc2,D.kz)
D.dbE=w([A.qT,A.dH],x.O)
D.dBx=new C.j0("pearls","Ocean Pearls","Deep roots, bright future",D.dbE,D.ug)
D.bbJ=new B.v(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.dbS=w([D.bbJ,A.dH],x.O)
D.dBA=new C.j0("snow","Winter Gala","Warm wishes to all",D.dbS,D.ug)
D.b8r=new B.v(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b9p=new B.v(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.dhQ=w([D.b8r,D.b9p],x.O)
D.dBp=new C.j0("laurel","Laurel Victory","We did it together",D.dhQ,D.kz)
D.b8h=new B.v(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.beG=new B.v(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cPt=w([D.b8h,D.beG],x.O)
D.dBz=new C.j0("ribbons","Silk Ribbons","Elegance in every step",D.cPt,D.kz)
D.bfG=new B.v(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.cAC=w([G.AP,D.bfG],x.O)
D.dBm=new C.j0("kente","Kente Pride","Proud of our roots",D.cAC,D.kz)
D.bil=new B.v(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.blg=new B.v(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.d0C=w([D.bil,D.blg],x.O)
D.dBh=new C.j0("trophy","Trophy Shine","Winners together",D.d0C,D.kz)
D.dbZ=w([Ao.L1,A.w],x.O)
D.dB9=new C.j0("shooting","Shooting Stars","Make a wish",D.dbZ,D.ug)
D.b8y=new B.v(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.ag5=new B.v(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.di6=w([D.b8y,D.ag5],x.O)
D.dBn=new C.j0("bokeh","Golden Bokeh","Shine bright",D.di6,D.kz)
D.b8W=new B.v(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.d6O=w([D.b8W,A.w],x.O)
D.dBf=new C.j0("orbits","Golden Orbits","Always moving forward",D.d6O,D.kz)
D.bkY=new B.v(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.d3m=w([A.adR,D.bkY],x.O)
D.dBk=new C.j0("flowers","Blooming Garden","Growing together",D.d3m,D.PT)
D.b8I=new B.v(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b9j=new B.v(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.dgV=w([D.b8I,D.b9j],x.O)
D.dBe=new C.j0("music","Music Party","Celebrate with us",D.dgV,D.ug)
D.bab=new B.v(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.blH=new B.v(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cQD=w([D.bab,D.blH],x.O)
D.dBy=new C.j0("mandala","Royal Mandala","Harmony and unity",D.cQD,D.kz)
D.d3r=w([G.AP,D.ag5],x.O)
D.dBs=new C.j0("sparklers","Golden Sparklers","Light up the night",D.d3r,D.kz)
D.dBo=new C.j0("city","City Lights","The whole city celebrates",D.axP,D.kz)
D.H_=w([D.dBr,D.dBi,D.dBj,D.dBd,D.dBu,D.dBv,D.dB8,D.dBC,D.dBq,D.dBl,D.dBa,D.dBg,D.dBc,D.dBB,D.dB7,D.dBt,D.dBw,D.dBb,D.dBx,D.dBA,D.dBp,D.dBz,D.dBm,D.dBh,D.dB9,D.dBn,D.dBf,D.dBk,D.dBe,D.dBy,D.dBs,D.dBo],B.ax("O<j0>"))
D.eop=new B.z("","No ring")
D.eDZ=new B.z("platinum","Platinum")
D.eAd=new B.z("glow","Glow")
D.erY=new B.z("double","Double line")
D.eqT=new B.z("framed","Gallery frame")
D.enY=new B.z("rosegold","Rose gold")
D.eB_=new B.z("jewels","Jeweled")
D.exN=new B.z("aurora","Aurora")
D.Ce=w([D.eop,A.a6s,D.eDZ,D.eAd,K.aMy,D.erY,A.a6v,D.eqT,D.enY,D.eB_,D.exN],x.L)
D.ck3=w([D.a4V,D.a4W,D.a5_,D.a4S,D.a4T,D.a4Y],x.h)
D.bP8=new B.ae(G.akn,16,null,null,null,null)
D.b3x=new B.vv(A.bh,D.bP8,null,x.U)
D.bE2=new B.a1(58027,"MaterialIcons",!1)
D.bIN=new B.ae(D.bE2,16,null,null,null,null)
D.b3v=new B.vv(A.L,D.bIN,null,x.U)
D.bE3=new B.a1(58030,"MaterialIcons",!1)
D.bMQ=new B.ae(D.bE3,16,null,null,null,null)
D.b3y=new B.vv(A.dP,D.bMQ,null,x.U)
D.cqh=w([D.b3x,D.b3v,D.b3y],B.ax("O<vv<q1>>"))
D.cxX=w([A.AT,A.he],x.O)
D.cxY=w([A.bk,A.bd,A.er],x.O)
D.PI=w([A.bL,A.hH,A.hI,A.ax,A.nE],x.O)
D.cAI=w([A.bZ,D.jg,D.KW],x.O)
D.cBf=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.elM=new B.z(4278913286,4280030216)
D.em3=new B.z(4279373061,4278518787)
D.ema=new B.z(4279898630,4278847235)
D.d0_=w([D.elM,D.em3,D.ema],x.n)
D.cWF=w(["\u265b","\u269c","\u2726"],x.s)
D.dFq=new C.xC("Royal Onyx & Gold",D.d0_,4292128567,4294370209,4294965479,3874020544,D.cWF)
D.elz=new B.z(4278326799,4278598442)
D.elB=new B.z(4278395929,4278258953)
D.elI=new B.z(4278599728,4278327826)
D.dhi=w([D.elz,D.elB,D.elI],x.n)
D.cRg=w(["\u269c","\u2756","\u2727"],x.s)
D.dFn=new C.xC("Imperial Emerald",D.dhi,4293050997,4294699968,4294180856,3872254170,D.cRg)
D.elC=new B.z(4278455076,4278918747)
D.elH=new B.z(4278587439,4278322714)
D.elV=new B.z(4279051376,4278455076)
D.dfr=w([D.elC,D.elH,D.elV],x.n)
D.d7u=w(["\u2654","\u2726","\u2748"],x.s)
D.dFh=new C.xC("Sapphire Crown",D.dfr,4291417834,4294967295,4294310143,3871986666,D.d7u)
D.em8=new B.z(4279894534,4283041554)
D.emk=new B.z(4281008906,4279042307)
D.ems=new B.z(4284221976,4279894534)
D.dlb=w([D.em8,D.emk,D.ems],x.n)
D.cSA=w(["\u265b","\u2766","\u2726"],x.s)
D.dFj=new C.xC("Ruby Throne",D.dlb,4293378685,4294963145,4294964466,3874213833,D.cSA)
D.em2=new B.z(4279371039,4281995100)
D.emc=new B.z(4280092723,4278714896)
D.emp=new B.z(4283045242,4279371039)
D.dhE=w([D.em2,D.emc,D.emp],x.n)
D.dfO=w(["\u2655","\u2756","\u2727"],x.s)
D.dFo=new C.xC("Amethyst Palace",D.dhE,4293314984,4294963421,4294702591,3873229802,D.dfO)
D.elE=new B.z(4278519045,4280032287)
D.elW=new B.z(4279111184,4278321666)
D.emh=new B.z(4280492839,4278716426)
D.deh=w([D.elE,D.elW,D.emh],x.n)
D.d5M=w(["\u2726","\u25c6","\u2742"],x.s)
D.dFl=new C.xC("Obsidian & Platinum",D.deh,4293256418,4294967295,4294638330,3872378836,D.d5M)
D.em9=new B.z(4279896588,4282194463)
D.emi=new B.z(4280553487,4279043334)
D.emq=new B.z(4283048488,4279896588)
D.d5f=w([D.em9,D.emi,D.emq],x.n)
D.djo=w(["\u2766","\u273f","\u2727"],x.s)
D.dFi=new C.xC("Rose Gold Velvet",D.d5f,4293440672,4294960345,4294964979,3874214602,D.djo)
D.elF=new B.z(4278520340,4279180595)
D.elK=new B.z(4278718495,4278322443)
D.em6=new B.z(4279510591,4278520340)
D.cHw=w([D.elF,D.elK,D.em6],x.n)
D.d6s=w(["\u269c","\u2736","\u2756"],x.s)
D.dFm=new C.xC("Midnight Brass",D.cHw,4291405148,4293975208,4294439914,3872837564,D.d6s)
D.emF=new B.z(4294703086,4293780428)
D.emB=new B.z(4294307549,4293187253)
D.emG=new B.z(4294966517,4293977807)
D.cUH=w([D.emF,D.emB,D.emG],x.n)
D.d6S=w(["\u269c","\u265b","\u2726"],x.s)
D.dFp=new C.xC("Ivory Marble & Gold",D.cUH,4289760572,4286209048,4280951062,3863625518,D.d6S)
D.elQ=new B.z(4278978566,4280555024)
D.em5=new B.z(4279504137,4278518530)
D.emm=new B.z(4281211923,4278978566)
D.cSq=w([D.elQ,D.em5,D.emm],x.n)
D.dgx=w(["\u2742","\u2726","\u265c"],x.s)
D.dFk=new C.xC("Onyx & Copper",D.cSq,4291856987,4294365880,4294964718,3873885630,D.dgx)
D.cBn=w([D.dFq,D.dFn,D.dFh,D.dFj,D.dFo,D.dFl,D.dFi,D.dFm,D.dFp,D.dFk],B.ax("O<xC>"))
D.cDJ=w([A.ax,D.AQ,A.hH],x.O)
D.eu7=new B.z("Original",null)
D.euf=new B.z("Wide 16:9",1.7777777777777777)
D.ewu=new B.z("Landscape 3:2",1.5)
D.etz=new B.z("Photo 4:3",1.3333333333333333)
D.evj=new B.z("Square",1)
D.eHz=new B.z("Portrait 3:4",0.75)
D.ave=w([D.eu7,D.euf,D.ewu,D.etz,D.evj,D.eHz],B.ax("O<+(m,K?)>"))
D.avf=w([A.hH,A.c5,A.ba,A.by],x.O)
D.ewF=new B.z("","Original")
D.eyu=new B.z("circle","Circle")
D.eEJ=new B.z("rounded","Rounded")
D.eFA=new B.z("triangle","Triangle")
D.eAt=new B.z("hexagon","Hexagon")
D.eyU=new B.z("diamond","Diamond")
D.exM=new B.z("arch","Arch")
D.Cj=w([D.ewF,D.eyu,D.eEJ,D.eFA,D.eAt,D.eyU,D.exM],x.L)
D.dAz=new C.lf("classic_blue","Classic Blue","Normal",A.bi,A.c,A.ku,A.d5,A.aJ)
D.dAP=new C.lf("campus_green","Campus Green","Normal",A.aZ,A.mV,A.tl,A.fV,A.e2)
D.dAG=new C.lf("warm_sand","Warm Sand","Normal",A.dS,A.hI,A.bL,A.ih,A.nK)
D.dAN=new C.lf("slate_minimal","Slate Minimal","Normal",A.bq,A.aO,A.aL,A.M,A.aJ)
D.dAy=new C.lf("coral_fresh","Coral Fresh","Normal",A.c9,A.ie,A.pw,A.k1,A.te)
D.dAO=new C.lf("lavender_calm","Lavender Calm","Normal",A.b4,A.pz,A.xo,A.oF,A.je)
D.dAA=new C.lf("ocean_breeze","Ocean Breeze","Normal",A.fb,A.qY,A.ta,A.tg,A.nL)
D.afp=new B.v(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dAL=new C.lf("berry_pop","Berry Pop","Normal",A.f0,D.afp,A.ko,G.XH,A.F7)
D.dAB=new C.lf("midnight_pro","Midnight Pro","Professional",A.aE,A.M,A.dx,A.ko,A.cr)
D.dAK=new C.lf("executive_navy","Executive Navy","Professional",A.d0,A.aeL,A.d5,A.kR,A.bK)
D.dAI=new C.lf("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bm,A.M,A.aO,A.cr)
D.dAC=new C.lf("corporate_steel","Corporate Steel","Professional",A.nO,A.M,A.mm,A.fe,A.bK)
D.dAF=new C.lf("gold_luxe","Gold Luxe","Luxury",A.mT,A.dG,A.oG,A.lM,A.bL)
D.bhI=new B.v(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dAJ=new C.lf("rose_gold_elite","Rose Gold Elite","Luxury",A.he,D.bhI,A.Xv,A.i0,A.nE)
D.dAM=new C.lf("platinum_night","Platinum Night","Luxury",A.cr,A.dH,A.bm,A.aO,A.aL)
D.dAQ=new C.lf("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.pF,A.f2,A.pM,A.jB)
D.dAx=new C.lf("royal_purple","Royal Purple","Luxury",A.mU,A.WE,A.je,A.ko,A.KO)
D.dAH=new C.lf("neon_pitch","Neon Pitch","Bold",A.ba,A.dH,A.M,A.b_,A.aL)
D.dAE=new C.lf("crimson_impact","Crimson Impact","Bold",A.bx,A.kt,A.es,A.tx,A.f1)
D.dAD=new C.lf("sunset_gallery","Sunset Gallery","Bold",A.fz,A.te,A.k1,A.pw,A.ml)
D.H8=w([D.dAz,D.dAP,D.dAG,D.dAN,D.dAy,D.dAO,D.dAA,D.dAL,D.dAB,D.dAK,D.dAI,D.dAC,D.dAF,D.dAJ,D.dAM,D.dAQ,D.dAx,D.dAH,D.dAE,D.dAD],B.ax("O<lf>"))
D.cPc=w([A.bZ,D.jg],x.O)
D.d5w=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.exy=new B.z("Faces & people",D.d5w)
D.cDN=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.ekv=new B.z("Ideas & work",D.cDN)
D.cX9=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eAy=new B.z("Nature",D.cX9)
D.d5F=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.eu5=new B.z("Places & things",D.d5F)
D.d_y=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.exR=new B.z("Symbols",D.d_y)
D.cPi=w([D.exy,D.ekv,D.eAy,D.eu5,D.exR],B.ax("O<+(m,ai<m>)>"))
D.b8N=new B.v(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cPF=w([A.bZ,D.adV,D.b8N],x.O)
D.b2T=new B.ac(0,A.G,A.KL,A.aGP,40)
D.b2z=new B.ac(0,A.G,A.nI,A.em,8)
D.cPS=w([D.b2T,D.b2z],x.V)
D.cQl=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.avD=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a2x=w([A.hH,A.er,A.bx,A.av,A.c9],x.O)
D.cRa=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.ae9=new B.v(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cRl=w([A.Xj,D.ae9,A.Xj],x.O)
D.cRr=w([A.i2,D.jg,D.KW],x.O)
D.etT=new B.z(A.bh,D.a0g)
D.eve=new B.z(A.L,D.a0f)
D.ep9=new B.z(A.dP,D.a0h)
D.cSl=w([D.etT,D.eve,D.ep9],B.ax("O<+(q1,a1)>"))
D.cP=new C.IJ(0,"text")
D.ly=new C.IJ(1,"image")
D.f5=new C.IJ(2,"shape")
D.RZ=new C.IJ(3,"pdf")
D.l6=new C.IJ(4,"signature")
D.a5k=new C.IJ(5,"bio")
D.cTd=w([D.cP,D.ly,D.f5,D.RZ,D.l6,D.a5k],B.ax("O<IJ>"))
D.cTe=w([A.bo,A.cE],B.ax("O<HE>"))
D.cTP=w(["School","Documents","Sign & present"],x.s)
D.b2Y=new B.ac(0,A.G,A.afW,A.uA,28)
D.cU9=w([D.b2Y],x.V)
D.cUs=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Q0=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aw1=w([A.hH,A.F6,A.aL,A.c,A.oH,A.ax],x.O)
D.eGY=new B.z(0.1,0.08)
D.eAw=new B.z(0.3,0.05)
D.eoD=new B.z(0.55,0.1)
D.esR=new B.z(0.8,0.06)
D.evY=new B.z(0.92,0.16)
D.evt=new B.z(0.2,0.2)
D.etk=new B.z(0.7,0.22)
D.ezf=new B.z(0.05,0.4)
D.ewm=new B.z(0.95,0.45)
D.epo=new B.z(0.12,0.7)
D.erC=new B.z(0.88,0.75)
D.erK=new B.z(0.4,0.9)
D.emW=new B.z(0.65,0.93)
D.esu=new B.z(0.25,0.97)
D.etQ=new B.z(0.85,0.9)
D.eqd=new B.z(0.5,0.04)
D.cVV=w([D.eGY,D.eAw,D.eoD,D.esR,D.evY,D.evt,D.etk,D.ezf,D.ewm,D.epo,D.erC,D.erK,D.emW,D.esu,D.etQ,D.eqd],x.G)
D.cW1=w([A.c,A.he,A.aP,A.aV],x.O)
D.e0H=new C.jE("office_blue","Office Blue",A.bi,A.d5,A.aJ,A.c,A.ku)
D.e0S=new C.jE("campus_green","Campus Green",A.aZ,A.fV,A.e2,A.mV,A.tl)
D.e0I=new C.jE("sunset","Sunset",A.fz,A.k1,A.nK,A.ie,A.pw)
D.e0J=new C.jE("midnight","Midnight",A.aE,A.ko,A.cr,A.M,A.dx)
D.e0U=new C.jE("classic","Classic",A.d8,A.dG,A.lN,A.hI,A.fT)
D.e0R=new C.jE("rose_gold","Rose Gold",A.he,A.xw,A.xv,A.vq,A.AT)
D.e0C=new C.jE("ocean_teal","Ocean Teal",A.fb,A.tg,A.nL,A.qY,A.ta)
D.e0B=new C.jE("slate_pro","Slate Pro",A.bq,A.M,A.aJ,A.aO,A.aL)
D.e0A=new C.jE("neon_night","Neon Night",A.ba,A.b_,A.aL,A.dH,A.M)
D.e0M=new C.jE("lavender","Lavender",A.b4,A.oF,A.je,A.pz,A.xo)
D.e0O=new C.jE("coral","Coral",A.c9,A.k1,A.te,A.ie,A.ml)
D.e0D=new C.jE("forest","Forest",A.hg,A.dW,A.co,A.lO,A.ek)
D.e0E=new C.jE("berry","Berry",A.f0,G.XH,A.F7,D.afp,A.ko)
D.e0L=new C.jE("sand","Sand",A.dS,A.ih,A.nK,A.hI,A.bL)
D.e0Q=new C.jE("ice","Ice",A.nO,A.Le,A.aJ,A.mR,A.fe)
D.e0G=new C.jE("charcoal","Charcoal",A.ak,A.aO,A.cr,A.bm,A.M)
D.e0z=new C.jE("mint","Mint",A.aV,A.fx,A.fV,A.lO,A.pM)
D.e0P=new C.jE("crimson","Crimson",A.bx,A.mX,A.kt,A.F4,A.tx)
D.bbf=new B.v(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.e0K=new C.jE("gold","Gold",A.mT,A.xh,A.oG,D.bbf,A.lM)
D.e0N=new C.jE("aqua","Aqua",A.bQ,A.EW,A.oD,A.pB,A.oI)
D.e0F=new C.jE("plum","Plum",A.mU,A.xt,A.F7,A.EK,A.qW)
D.e0T=new C.jE("steel","Steel",A.d0,A.d5,A.bm,A.ku,A.kR)
D.a2N=w([D.e0H,D.e0S,D.e0I,D.e0J,D.e0U,D.e0R,D.e0C,D.e0B,D.e0A,D.e0M,D.e0O,D.e0D,D.e0E,D.e0L,D.e0Q,D.e0G,D.e0z,D.e0P,D.e0K,D.e0N,D.e0F,D.e0T],B.ax("O<jE>"))
D.cWm=w([A.bZ,A.ji],x.O)
D.S0=new C.hE(10,"rotate3d")
D.I6=new C.hE(8,"flip")
D.aGk=new C.hE(19,"spiral")
D.qk=new C.hE(16,"bounce")
D.aGn=new C.hE(9,"flipVertical")
D.cWn=w([D.S0,D.I6,D.aGk,D.qk,D.aGn],x.i)
D.ea=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cWI=w([0.62,1],x.x)
D.cXh=w([0,0.32,0.68,1],x.x)
D.mF=new C.hE(6,"zoom")
D.uu=new C.hE(4,"slideUp")
D.ut=new C.hE(2,"slideLeft")
D.cXq=w([D.mF,D.I6,D.uu,D.S0,D.ut],x.i)
D.cXV=w([A.c5,A.he,A.i0,A.hH,A.c],x.O)
D.b2O=new B.ac(0,A.G,D.aem,A.uA,30)
D.cYE=w([D.b2O],x.V)
D.eaw=new B.x(0,-2.5)
D.eam=new B.x(-2.5,0)
D.e94=new B.x(2.5,0)
D.cYH=w([A.Sg,A.a5G,A.aHk,A.a5F,D.eaw,K.aHg,D.eam,D.e94],x.dN)
D.Hg=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cZ8=w([23,114,69,56,80,144],x.t)
D.cZA=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cZU=w([0,0.5,1],x.x)
D.d_2=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.d0H=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.d0L=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bg=new C.uK(0,"rectangle")
D.eN=new C.uK(1,"circle")
D.l7=new C.uK(6,"hexagon")
D.d0Z=w([D.bg,D.eN,D.l7],x.m)
D.o8=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.afw=new B.v(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.d1w=w([D.afw,A.dW],x.O)
D.eoT=new B.z("","Classic")
D.ena=new B.z("caps","Bold caps")
D.ezi=new B.z("elegant","Elegant")
D.eF1=new B.z("shadow","Shadow")
D.etd=new B.z("neon","Neon glow")
D.eDG=new B.z("outline","Outline")
D.eCS=new B.z("marker","Highlighter")
D.eFc=new B.z("stamp","Stamp")
D.eEE=new B.z("retro","Retro")
D.es9=new B.z("threed","3D")
D.ezP=new B.z("fire","Fire")
D.eAI=new B.z("ice","Ice")
D.eyt=new B.z("chalk","Chalk")
D.eyy=new B.z("comic","Comic")
D.eFe=new B.z("sunset","Sunset")
D.eGl=new B.z("softglow","Soft glow")
D.eBH=new B.z("lowercase","Lowercase")
D.ez0=new B.z("double","Echo")
D.eGu=new B.z("whisper","Whisper")
D.awT=w([D.eoT,D.ena,D.ezi,D.eF1,D.etd,D.eDG,D.eCS,D.eFc,D.eEE,D.es9,K.aMt,D.ezP,D.eAI,D.eyt,D.eyy,A.a6s,D.eFe,D.eGl,D.eBH,D.ez0,D.eGu],x.L)
D.d2O=w([3,5,7,10,12,15],x.t)
D.d4b=w([A.c5,A.bL,A.c,A.eC,A.cY],x.O)
D.dse=new C.tm(10,"cardWorld")
D.CJ=new C.Bv(3,"rounded")
D.dIp=new C.li("world","NGMY World",D.dse,D.CJ,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dsf=new C.tm(11,"cardSplit")
D.dIl=new C.li("business","Business Wire",D.dsf,D.CJ,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dsg=new C.tm(12,"cardBreaking")
D.dIy=new C.li("breaking","Breaking Red",D.dsg,D.CJ,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dsh=new C.tm(13,"cardFeature")
D.dIr=new C.li("feature","Tech Feature",D.dsh,D.CJ,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aER=new C.tm(6,"circle")
D.aEL=new C.Bv(4,"circle")
D.dIv=new C.li("parchment","Royal Circle",D.aER,D.aEL,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dIk=new C.li("ocean","Blue Ocean",D.aER,D.aEL,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dsk=new C.tm(7,"rail")
D.aEK=new C.Bv(1,"double")
D.dIm=new C.li("forest","Green Leaf",D.dsk,D.aEK,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aEO=new C.tm(1,"sideBySide")
D.dIA=new C.li("herald","NGMY Herald",D.aEO,D.CJ,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aEN=new C.tm(0,"classic")
D.a4x=new C.Bv(9,"shadow")
D.dIz=new C.li("daily","The Daily",D.aEN,D.a4x,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dsi=new C.tm(2,"splash")
D.aEM=new C.Bv(6,"cutCorner")
D.dIj=new C.li("tabloid","Big Tabloid",D.dsi,D.aEM,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aES=new C.tm(9,"minimal")
D.dIu=new C.li("modern","Modern Digest",D.aES,D.CJ,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aEP=new C.tm(3,"magazine")
D.aEJ=new C.Bv(0,"plain")
D.dIq=new C.li("midnight","Midnight Edition",D.aEP,D.aEJ,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dsl=new C.tm(8,"banner")
D.dIs=new C.li("metro","Metro Wire",D.dsl,D.aEM,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dsd=new C.Bv(8,"arch")
D.dIt=new C.li("sunrise","Sunrise Post",D.aEP,D.dsd,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aEQ=new C.tm(5,"scrapbook")
D.dsc=new C.Bv(5,"tape")
D.dIo=new C.li("neon","Neon Beat",D.aEQ,D.dsc,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dsj=new C.tm(4,"wrap")
D.dIB=new C.li("gold","Golden Press",D.dsj,D.a4x,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dIC=new C.li("minimal","Paper White",D.aES,D.a4x,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dIn=new C.li("gazette","Fresh Gazette",D.aEN,D.aEK,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dIx=new C.li("times","Classic Times",D.aEO,D.aEJ,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Rw=new C.Bv(2,"polaroid")
D.dIw=new C.li("scrapbook","Memory Scrapbook",D.aEQ,D.Rw,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a31=w([D.dIp,D.dIl,D.dIy,D.dIr,D.dIv,D.dIk,D.dIm,D.dIA,D.dIz,D.dIj,D.dIu,D.dIq,D.dIs,D.dIt,D.dIo,D.dIB,D.dIC,D.dIn,D.dIx,D.dIw],B.ax("O<li>"))
D.d4n=w([0.45,1],x.x)
D.Hi=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.d4L=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.h88=new C.oz("Original",0,1,1,0,0,0)
D.h8c=new C.oz("Black & white",0,1.1,0,0,0,0)
D.h8_=new C.oz("Noir",-0.05,1.55,0,0,0,0)
D.h83=new C.oz("Sepia",0,1,0.25,0.9,0,0)
D.h82=new C.oz("Vivid",0,1.15,1.6,0,0,0)
D.h7W=new C.oz("Pop",0,1.3,1.9,0,0,0)
D.h7Y=new C.oz("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.h89=new C.oz("Matte",0,0.9,0.85,0,0,0.55)
D.h84=new C.oz("Cool",0,1.05,1,-0.8,0,0)
D.h8b=new C.oz("Warm",0.03,1.05,1.1,0.8,0,0)
D.h7X=new C.oz("Golden hour",0.04,1,1.25,1,0,0)
D.h81=new C.oz("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.h8a=new C.oz("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.h80=new C.oz("Dramatic",-0.05,1.5,1.2,0,0,0)
D.h86=new C.oz("Retro",0,0.9,0.7,0.4,0,0.35)
D.h85=new C.oz("Forest",0,1,1.2,-0.1,-0.45,0)
D.h87=new C.oz("Rose",0,1,1.1,0.3,0.4,0)
D.h7Z=new C.oz("Ocean",0,1,1.2,-0.5,-0.2,0)
D.d4M=w([D.h88,D.h8c,D.h8_,D.h83,D.h82,D.h7W,D.h7Y,D.h89,D.h84,D.h8b,D.h7X,D.h81,D.h8a,D.h80,D.h86,D.h85,D.h87,D.h7Z],B.ax("O<oz>"))
D.b8d=new B.v(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.d4O=w([D.afw,A.dW,D.b8d],x.O)
D.ekp=new B.z(0.12,0.3)
D.eAT=new B.z(0.26,0.75)
D.eze=new B.z(0.8,0.22)
D.eFk=new B.z(0.9,0.7)
D.eBG=new B.z(0.5,0.15)
D.eDI=new B.z(0.65,0.85)
D.eqK=new B.z(0.08,0.85)
D.d50=w([D.ekp,D.eAT,D.eze,D.eFk,D.eBG,D.eDI,D.eqK],x.G)
D.ax4=w([A.ba,A.c5,A.by,A.bk],x.O)
D.d5Q=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.d61=w([A.c,A.fe,A.dr,A.vd],x.O)
D.bbu=new B.v(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.d72=w([D.bbu,D.ae9],x.O)
D.d73=w([A.vf,A.ax],x.O)
D.d7i=w([0,0.25,0.75,1],x.x)
D.d7k=w([A.xk,A.oH],x.O)
D.aFV=new C.kT(10,"kenteSunset")
D.hcG=w([D.aex,A.jX,A.ax],x.O)
D.dDK=new C.jm("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aFV,4294964964,4282000405,4279983648,D.jO)
D.aFW=new C.kT(11,"indigoMudcloth")
D.b9a=new B.v(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.hcU=w([D.b9a,A.ae5,A.i2],x.O)
D.dDS=new C.jm("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aFW,4294439140,4279903102,4279903102,D.jO)
D.aFX=new C.kT(12,"adinkraRoyal")
D.bmo=new B.v(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.hcV=w([D.ad2,D.bmo,A.ax],x.O)
D.dDU=new C.jm("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aFX,4294965484,4285218591,4287322667,D.jO)
D.aFY=new C.kT(13,"nileLotus")
D.biD=new B.v(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.bfk=new B.v(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.hd_=w([D.biD,D.bfk,A.i2],x.O)
D.dDT=new C.jm("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aFY,4294244340,4279196764,4279196764,D.jO)
D.aFZ=new C.kT(14,"shweshweIvory")
D.bds=new B.v(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.bce=new B.v(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b9D=new B.v(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.hcH=w([D.bds,D.bce,D.b9D],x.O)
D.dDP=new C.jm("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aFZ,4294505710,4279970378,4291058750,D.jO)
D.rw=new C.kT(15,"certIvoryNavy")
D.hcF=w([D.LD,D.jg,A.i2],x.O)
D.aFq=new C.xA(1,"ringsNdoa")
D.dDM=new C.jm("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.rw,4294966259,4279378237,4291404327,D.aFq)
D.a52=new C.xA(2,"coupleCards")
D.dDH=new C.jm("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.rw,4294966259,4279378237,4291404327,D.a52)
D.CM=new C.kT(18,"certIvoryNavyBar")
D.ad1=new B.v(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.hcT=w([D.ad1,D.jg,A.i2],x.O)
D.aFr=new C.xA(3,"kuhoweshaForm")
D.dDF=new C.jm("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.CM,4294966519,4279378237,4291404327,D.aFr)
D.aek=new B.v(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.hdc=w([D.LD,D.aek,A.i2],x.O)
D.a53=new C.xA(4,"mahariPande")
D.dDI=new C.jm("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.rw,4294966259,4279904068,4291404327,D.a53)
D.aG_=new C.kT(16,"certIvoryGreen")
D.bcQ=new B.v(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.hcJ=w([A.KP,D.bcQ,A.i2],x.O)
D.aFs=new C.xA(5,"familiaMti")
D.dDO=new C.jm("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aG_,4294966776,4280241466,4291404327,D.aFs)
D.a54=new C.xA(6,"ndoaSafi")
D.dDG=new C.jm("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.CM,4294966519,4279378237,4291404327,D.a54)
D.bh3=new B.v(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.hcM=w([D.LD,A.i2,D.bh3],x.O)
D.a55=new C.xA(7,"peteWide")
D.dDL=new C.jm("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.rw,4294966259,4282001936,4291404327,D.a55)
D.dDV=new C.xA(8,"muhuriCrest")
D.dDE=new C.jm("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.rw,4294966259,4279378237,4291404327,D.dDV)
D.hcW=w([D.ad1,D.aek,A.i2],x.O)
D.dDW=new C.xA(9,"fomuWazi")
D.dDR=new C.jm("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.CM,4294966519,4279904068,4291404327,D.dDW)
D.aG0=new C.kT(17,"certIvoryRose")
D.bdw=new B.v(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.hcZ=w([D.bdw,D.af9,A.i2],x.O)
D.a51=new C.xA(10,"upendoOrnate")
D.dDN=new C.jm("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aG0,4294965493,4286200650,4291404327,D.a51)
D.d7K=w([D.dDK,D.dDS,D.dDU,D.dDT,D.dDP,D.dDM,D.dDH,D.dDF,D.dDI,D.dDO,D.dDG,D.dDL,D.dDE,D.dDR,D.dDN],x.h)
D.eb=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.I7=new C.w1(0,"emojis")
D.CT=new C.w1(1,"pictures")
D.I8=new C.w1(2,"icons3d")
D.a5m=new C.w1(3,"animations")
D.S2=new C.w1(4,"videoMotion")
D.CU=new C.w1(5,"luxe")
D.a38=w([D.I7,D.CT,D.I8,D.a5m,D.S2,D.CU],B.ax("O<w1>"))
D.eEh=new B.z(A.e0,"Looks")
D.esK=new B.z(A.C3,"Light")
D.esH=new B.z(A.nh,"Colour")
D.eqL=new B.z(A.yh,"Effects")
D.als=new B.a1(63112,"MaterialIcons",!1)
D.enq=new B.z(D.als,"Crop")
D.d8d=w([D.eEh,D.esK,D.esH,D.eqL,D.enq],x.f2)
D.d8R=w([],x.D)
D.hd9=w([],x.L)
D.eqY=new B.z("Flashcard",D.I2)
D.euH=new B.z("Quiz",D.I3)
D.ewA=new B.z("Worksheet",D.I4)
D.etL=new B.z("Notes",D.mE)
D.evc=new B.z("Section",D.CR)
D.d9x=w([D.eqY,D.euH,D.ewA,D.etL,D.evc],B.ax("O<+(m,mv)>"))
D.dFz=new C.kT(6,"beadedPearl")
D.bg_=new B.v(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.hdd=w([H.Xu,D.bg_,A.i2],x.O)
D.aFo=new C.jm("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dFz,4294966774,4286209070,4291404327,D.jO)
D.dFA=new C.kT(7,"artDeco")
D.bjU=new B.v(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.bmH=new B.v(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.hdb=w([D.bjU,D.bmH,A.bZ],x.O)
D.aFp=new C.jm("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dFA,4294440434,4280228630,4290283019,D.jO)
D.dFB=new C.kT(8,"rosetteCorners")
D.blS=new B.v(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.bbz=new B.v(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.bfV=new B.v(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.hcP=w([D.blS,D.bbz,D.bfV],x.O)
D.aFn=new C.jm("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dFB,4294702831,4285218602,4291394365,D.jO)
D.dFC=new C.kT(9,"modernLedger")
D.hcO=w([A.c,D.jg,D.jg],x.O)
D.aFm=new C.jm("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dFC,4294967295,4279378237,4279378237,D.jO)
D.d9B=w([D.aFo,D.aFp,D.aFn,D.aFm],x.h)
D.d9K=w([A.i0,A.oH],x.O)
D.cl=new C.hE(0,"none")
D.df=new C.hE(1,"fade")
D.I5=new C.hE(3,"slideRight")
D.aGm=new C.hE(5,"slideDown")
D.e_b=new C.hE(7,"zoomOut")
D.a5l=new C.hE(11,"cube")
D.e_6=new C.hE(12,"blur")
D.aGj=new C.hE(13,"dissolve")
D.e_7=new C.hE(14,"wipeLeft")
D.e_8=new C.hE(15,"wipeRight")
D.S1=new C.hE(17,"push")
D.e_9=new C.hE(18,"flash")
D.aGl=new C.hE(20,"swing")
D.e_a=new C.hE(21,"curtain")
D.QC=w([D.cl,D.df,D.ut,D.I5,D.uu,D.aGm,D.mF,D.e_b,D.I6,D.aGn,D.S0,D.a5l,D.e_6,D.aGj,D.e_7,D.e_8,D.qk,D.S1,D.e_9,D.aGk,D.aGl,D.e_a],x.i)
D.QD=w([D.a50,D.a4Z,D.a4S,D.a4T,D.a4U,D.a4X,D.a4V,D.a4W,D.a5_,D.a4Y,D.aFo,D.aFp,D.aFn,D.aFm],x.h)
D.dac=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.dag=w([A.xp,A.hH,A.bZ],x.O)
D.es3=new B.z(A.tY,"Design")
D.eFJ=new B.z(D.alJ,"Word sizes")
D.eBq=new B.z(A.BZ,"Text")
D.bHn=new B.a1(983182,"MaterialIcons",!1)
D.eBu=new B.z(D.bHn,"Photo")
D.emZ=new B.z(A.lt,"Logo")
D.eGW=new B.z(A.GD,"News")
D.dal=w([D.es3,D.eFJ,D.eBq,D.eBu,D.emZ,D.eGW],x.f2)
D.dam=w(["golddust","sparkle","sheen"],x.s)
D.e0y=new C.et("upload_pdf",L.NU,"Upload PDF")
D.e_I=new C.et("sign_paper",A.GA,"Sign Paper")
D.bGF=new B.a1(63438,"MaterialIcons",!1)
D.e0u=new C.et("hd_photo",D.bGF,"HD Photo")
D.e_A=new C.et("sharpen",E.a02,"Sharpen")
D.e_K=new C.et("print",L.NU,"Download PDF")
D.e0b=new C.et("rotate",D.als,"Rotate")
D.e_T=new C.et("text_box",A.BZ,"Text Box")
D.e_V=new C.et("picture",A.u3,"Picture")
D.e_R=new C.et("title",A.yy,"Title")
D.e_N=new C.et("subtitle",T.ami,"Subtitle")
D.e0k=new C.et("bullets",I.a0i,"Bullet List")
D.e_O=new C.et("numbered",A.NL,"Numbered")
D.e0n=new C.et("quote",A2.BP,"Quote")
D.e0_=new C.et("citation",A.o_,"Citation")
D.e0q=new C.et("date_stamp",Ag.a07,"Date Stamp")
D.e0d=new C.et("page_number",A.yx,"Page #")
D.e0h=new C.et("header_bar",A.C1,"Header")
D.e_U=new C.et("footer_bar",Ap.a0Q,"Footer")
D.e_J=new C.et("divider",A.u2,"Divider")
D.e_F=new C.et("highlight",A.a0p,"Highlight")
D.e0j=new C.et("redact",A.ub,"Redact")
D.e06=new C.et("callout",A.BJ,"Callout")
D.e0s=new C.et("checkboxes",I.akH,"Checklist")
D.e03=new C.et("table",A.a0N,"Table")
D.e_Y=new C.et("memo",I.a0A,"Memo")
D.e07=new C.et("letter",A.Gn,"Letter")
D.bGg=new B.a1(63259,"MaterialIcons",!0)
D.e_z=new C.et("agenda",D.bGg,"Agenda")
D.e_L=new C.et("toc",Ay.alW,"Contents")
D.bGB=new B.a1(63406,"MaterialIcons",!1)
D.e04=new C.et("sig_line",D.bGB,"Sign Line")
D.e_s=new C.et("initial_line",A.jp,"Initials")
D.e_v=new C.et("approved",A.lt,"APPROVED")
D.e09=new C.et("draft",A.p_,"DRAFT")
D.e0f=new C.et("confidential",A.jq,"Confidential")
D.e0i=new C.et("sticky",A.O1,"Sticky Note")
D.e0r=new C.et("progress",A.alV,"Progress")
D.bHN=new B.a1(983507,"MaterialIcons",!1)
D.e_G=new C.et("stars",D.bHN,"Star Rating")
D.e_q=new C.et("equation",A.alL,"Equation")
D.e_B=new C.et("timeline",A.a0O,"Timeline")
D.e_Z=new C.et("two_col",A.a0R,"Two Columns")
D.e_D=new C.et("compare",A1.a0a,"Compare")
D.e_o=new C.et("duplicate_el",A.fM,"Duplicate")
D.e0w=new C.et("delete_el",A.ef,"Delete")
D.e0m=new C.et("bring_fwd",H.alF,"Bring Front")
D.e_t=new C.et("send_back",H.alE,"Send Back")
D.e08=new C.et("align_left",D.a0g,"Align L")
D.e0e=new C.et("align_center",D.a0f,"Align C")
D.e0v=new C.et("align_right",D.a0h,"Align R")
D.e_S=new C.et("word_count",A_.a_M,"Word Count")
D.e_P=new C.et("link_text",A.hl,"Link")
D.e0c=new C.et("phone",A.iM,"Phone")
D.e_E=new C.et("email",A.BM,"Email")
D.e0x=new C.et("qr_placeholder",A.js,"QR Placeholder")
D.e_y=new C.et("rectangle",A3.vN,"Rectangle")
D.e02=new C.et("circle",A.ra,"Circle")
D.e_u=new C.et("arrow",A.lo,"Arrow")
D.e0l=new C.et("line",A.u2,"Line")
D.e_H=new C.et("triangle",A.a08,"Triangle")
D.bGo=new B.a1(63318,"MaterialIcons",!1)
D.e_M=new C.et("grayscale",D.bGo,"Grayscale")
D.e_W=new C.et("brighten",I.al0,"Brighten")
D.e00=new C.et("flip_h",A.Gd,"Flip H")
D.bGw=new B.a1(63348,"MaterialIcons",!1)
D.e0t=new C.et("flip_v",D.bGw,"Flip V")
D.e0g=new C.et("cover_page",A.q0,"Cover Page")
D.e_r=new C.et("invoice",A.h9,"Invoice")
D.e_C=new C.et("resume",A.mu,"Resume")
D.e_Q=new C.et("minutes",A.oU,"Minutes")
D.e_w=new C.et("lab_report",A.NY,"Lab Report")
D.e_x=new C.et("rubric",A.tZ,"Rubric")
D.e01=new C.et("flashcard_tool",W.Gy,"Flashcard")
D.e0o=new C.et("quiz_tool",A.Gs,"Quiz Block")
D.e05=new C.et("worksheet_tool",M.G4,"Worksheet")
D.e0a=new C.et("outline_share",A.O_,"Share Outline")
D.e0p=new C.et("export_json",D.akN,"Export JSON")
D.e_p=new C.et("new_slide",D.a_L,"New Slide")
D.e_X=new C.et("present",A.q6,"Present")
D.daQ=w([D.e0y,D.e_I,D.e0u,D.e_A,D.e_K,D.e0b,D.e_T,D.e_V,D.e_R,D.e_N,D.e0k,D.e_O,D.e0n,D.e0_,D.e0q,D.e0d,D.e0h,D.e_U,D.e_J,D.e_F,D.e0j,D.e06,D.e0s,D.e03,D.e_Y,D.e07,D.e_z,D.e_L,D.e04,D.e_s,D.e_v,D.e09,D.e0f,D.e0i,D.e0r,D.e_G,D.e_q,D.e_B,D.e_Z,D.e_D,D.e_o,D.e0w,D.e0m,D.e_t,D.e08,D.e0e,D.e0v,D.e_S,D.e_P,D.e0c,D.e_E,D.e0x,D.e_y,D.e02,D.e_u,D.e0l,D.e_H,D.e_M,D.e_W,D.e00,D.e0t,D.e0g,D.e_r,D.e_C,D.e_Q,D.e_w,D.e_x,D.e01,D.e0o,D.e05,D.e0a,D.e0p,D.e_p,D.e_X],B.ax("O<et>"))
D.db_=w([A.cr,A.ak],x.O)
D.emw=new B.z(4286331629,4292552567)
D.emj=new B.z(4280640491,4278630100)
D.emE=new B.z(4294538006,4292943176)
D.elG=new B.z(4278556265,4280640491)
D.d5a=w([D.emw,D.emj,D.emE,D.elG],x.n)
D.cu2=w([4294626325,4280472558,4294210230],x.t)
D.e_j=new C.nK("colorful","Colorful",A.nh,D.d5a,4294967295,3875536895,D.cu2,D.mF)
D.em7=new B.z(4279522093,4279657780)
D.emn=new B.z(4281750292,4283268111)
D.elJ=new B.z(4278603323,4279203438)
D.emo=new B.z(4282343954,4279599165)
D.cF0=w([D.em7,D.emn,D.elJ,D.emo],x.n)
D.ctL=w([4288931381,4294829706,4287033260],x.t)
D.e_f=new C.nK("nature","Nature",A.GB,D.cF0,4294442727,3874290891,D.ctL,D.df)
D.em1=new B.z(4279369771,4283178389)
D.elZ=new B.z(4279179050,4286456526)
D.emf=new B.z(4280163147,4290648157)
D.ely=new B.z(4278322711,4285343961)
D.cWA=w([D.em1,D.elZ,D.emf,D.ely],x.n)
D.ctZ=w([4294210230,4280472558,4289170426],x.t)
D.e_d=new C.nK("vibe","Vibe",A.a0n,D.cWA,4294967295,3874869502,D.ctZ,D.ut)
D.emA=new B.z(4290007817,4292552567)
D.emu=new B.z(4286328082,4294286859)
D.emz=new B.z(4288485197,4294538006)
D.emt=new B.z(4285343961,4293675161)
D.c00=w([D.emA,D.emu,D.emz,D.emt],x.n)
D.cu3=w([4294829706,4294967295,4284999929],x.t)
D.e_e=new C.nK("celebration","Celebration",A.lp,D.c00,4294967295,4009752557,D.cu3,D.qk)
D.elX=new B.z(4279179050,4280171146)
D.em0=new B.z(4279310375,4280232247)
D.elP=new B.z(4278916151,4280172719)
D.elY=new B.z(4279179050,4281549141)
D.cPy=w([D.elX,D.em0,D.elP,D.elY],x.n)
D.ctG=w([4281908728,4294626325,4287931320],x.t)
D.e_i=new C.nK("professional","Professional",A.BH,D.cPy,4294967295,3872118241,D.ctG,D.S1)
D.elT=new B.z(4278995566,4278413729)
D.elL=new B.z(4278727492,4279137424)
D.emg=new B.z(4280171146,4278751666)
D.elU=new B.z(4278995566,4279590517)
D.cxQ=w([D.elT,D.elL,D.emg,D.elU],x.n)
D.ctJ=w([4286436348,4284410580,4294829706],x.t)
D.e_k=new C.nK("ocean","Ocean",I.a0T,D.cxQ,4294967295,3873501950,D.ctJ,D.uu)
D.emv=new B.z(4286328082,4294538006)
D.emx=new B.z(4286781507,4294677052)
D.emr=new B.z(4283178389,4294197086)
D.emy=new B.z(4288295954,4294688548)
D.cLN=w([D.emv,D.emx,D.emr,D.emy],x.n)
D.cu4=w([4294829706,4294967295,4294747557],x.t)
D.e_l=new C.nK("sunset","Sunset",A.O3,D.cLN,4294967295,4009749973,D.cu4,D.df)
D.emI=new B.z(4294967295,4294047225)
D.emD=new B.z(4294507260,4294967295)
D.emH=new B.z(4294967295,4293060848)
D.emC=new B.z(4294507260,4294047225)
D.cZG=w([D.emI,D.emD,D.emH,D.emC],x.n)
D.ctE=w([4280640491,4279179050,4287931320],x.t)
D.e_h=new C.nK("minimal","Minimal",A3.vN,D.cZG,4279179050,4282865001,D.ctE,D.df)
D.elS=new B.z(4278979081,4280886564)
D.emb=new B.z(4280031511,4278979081)
D.em_=new B.z(4279308561,4281148438)
D.elR=new B.z(4278979081,4280031511)
D.dd_=w([D.elS,D.emb,D.em_,D.elR],x.n)
D.ctS=w([4292128567,4294829706,4289241758],x.t)
D.e_m=new C.nK("elegant","Elegant",A.lX,D.dd_,4294898631,3873957348,D.ctS,D.aGj)
D.emd=new B.z(4280159034,4282058596)
D.elO=new B.z(4278916151,4280163147)
D.eml=new B.z(4281208933,4278916151)
D.em4=new B.z(4279502891,4283178389)
D.dk_=w([D.emd,D.elO,D.eml,D.em4],x.n)
D.cu0=w([4294296657,4292128567,4291081725],x.t)
D.e_g=new C.nK("royal","Royal Gold",A.j4,D.dk_,4294965222,3874084351,D.cu0,D.mF)
D.elD=new B.z(4278464302,4280163147)
D.elN=new B.z(4278916151,4279455306)
D.eme=new B.z(4280163147,4283040846)
D.elA=new B.z(4278332450,4281413249)
D.d4R=w([D.elD,D.elN,D.eme,D.elA],x.n)
D.ctF=w([4281193663,4289170426,4294210230],x.t)
D.e_n=new C.nK("aurora","Aurora Glow",A.e0,D.d4R,4293983738,3869766608,D.ctF,D.df)
D.wb=w([D.e_j,D.e_f,D.e_d,D.e_e,D.e_i,D.e_k,D.e_l,D.e_h,D.e_m,D.e_g,D.e_n],B.ax("O<nK>"))
D.bgt=new B.v(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.dbz=w([A.qQ,D.bgt,A.qQ],x.O)
D.dbQ=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.dbU=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eBi=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.erE=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.ewa=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.ejf=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.euQ=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.et5=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.exn=new B.z("Surprise me","")
D.dcr=w([D.eBi,D.erE,D.ewa,D.ejf,D.euQ,D.et5,D.exn],x.L)
D.b9F=new B.v(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.bkn=new B.v(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.ddd=w([A.c,D.b9F,D.bkn],x.O)
D.dfi=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aFT=new C.kT(0,"heritageGold")
D.bf8=new B.v(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.hde=w([D.bf8,V.aeu,A.ax],x.O)
D.dDQ=new C.jm("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aFT,4294570461,4284234270,4292128567,D.jO)
D.aFU=new C.kT(1,"heritageCrimson")
D.b89=new B.v(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.bdt=new B.v(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.bkd=new B.v(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.hcS=w([D.b89,D.bdt,D.bkd],x.O)
D.dDJ=new C.jm("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aFU,4294635750,4285213214,4292912216,D.jO)
D.dfm=w([D.a50,D.a4Z,D.dDQ,D.dDJ,D.a4U,D.a4X],x.h)
D.dJD=new C.rv(1,"circuit")
D.dK5=new C.m5("neural","Neural Link","Robotic",D.dJD,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dJC=new C.rv(0,"grid")
D.dK2=new C.m5("signal","Signal Grid","Robotic",D.dJC,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dJI=new C.rv(2,"hexes")
D.dJO=new C.m5("core","Core Protocol","Robotic",D.dJI,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aGg=new C.rv(11,"diagonal")
D.dJZ=new C.m5("steel","Steel Tech","Robotic",D.aGg,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aGh=new C.rv(3,"rings")
D.dJN=new C.m5("vault","Vault Gold","Robotic",D.aGh,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dJG=new C.rv(13,"leaves")
D.dJQ=new C.m5("forest","Forest Morning","Nature",D.dJG,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aGi=new C.rv(5,"waves")
D.dJX=new C.m5("ocean","Ocean Calm","Nature",D.aGi,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dJJ=new C.rv(6,"sunset")
D.dK1=new C.m5("sunset","Sunset Glow","Nature",D.dJJ,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dJK=new C.rv(7,"mountains")
D.dJP=new C.m5("mountain","Mountain Air","Nature",D.dJK,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dJL=new C.rv(8,"stars")
D.dJW=new C.m5("night","Night Sky","Nature",D.dJL,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a5j=new C.rv(4,"orbs")
D.dJU=new C.m5("aurora","Aurora","Nature",D.a5j,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dK3=new C.m5("sand","Sand Dune","Nature",D.aGi,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dJM=new C.rv(9,"rays")
D.dJT=new C.m5("golden","Golden Hour","Warm",D.dJM,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dJR=new C.m5("royal","Royal Purple","Warm",D.aGg,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dJS=new C.m5("rose","Rose Petal","Warm",D.a5j,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dJF=new C.rv(12,"blocks")
D.dJV=new C.m5("electric","Electric Blue","Bold",D.dJF,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dK4=new C.m5("mint","Fresh Mint","Bold",D.a5j,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dJH=new C.rv(14,"minimal")
D.dK0=new C.m5("white","Clean White","Clean",D.dJH,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dJE=new C.rv(10,"frame")
D.dJY=new C.m5("midnight","Midnight Gold","Clean",D.dJE,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dK_=new C.m5("community","Community Green","Clean",D.aGh,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a3z=w([D.dK5,D.dK2,D.dJO,D.dJZ,D.dJN,D.dJQ,D.dJX,D.dK1,D.dJP,D.dJW,D.dJU,D.dK3,D.dJT,D.dJR,D.dJS,D.dJV,D.dK4,D.dK0,D.dJY,D.dK_],B.ax("O<m5>"))
D.dfJ=w([D.AQ,A.vf,A.hH,A.bZ],x.O)
D.dg0=w([D.afj,D.jg],x.O)
D.dga=w(["pdf","docx","txt","md"],x.s)
D.dgy=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in.","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.eKk=new B.bk(-3,150,34)
D.eKl=new B.bk(-3,214,62)
D.eKm=new B.bk(-3,288,62)
D.dh_=w([D.eKk,D.eKl,D.eKm],B.ax("O<+(K,K,K)>"))
D.dht=w(["rays","bokeh","aurora","spotlight"],x.s)
D.di4=w(["Write","Design","Print & fold"],x.s)
D.jP=new C.uK(2,"triangle")
D.CS=new C.uK(3,"arrow")
D.fr=new C.uK(4,"line")
D.jQ=new C.uK(5,"parallelogram")
D.di7=w([D.bg,D.eN,D.jP,D.CS,D.fr,D.jQ,D.l7],x.m)
D.ekD=new B.z(240,96)
D.eni=new B.z(560,46)
D.dic=w([D.ekD,D.eni],x.G)
D.hdp=new C.xD(0,"classic")
D.dFF=new C.nG("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aFT,4294570461,4282000405,4284234270)
D.dFR=new C.nG("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aFU,4294635750,4281999378,4285213214)
D.dFG=new C.nG("elegant_navy","Umoja Mzuri",y.s,D.a5d,4294967035,4279378237,4290283019)
D.dFT=new C.nG("elegant_gold","Umoja wa Dhahabu",y.Q,D.aG1,4294966515,4281016592,4289102906)
D.dFV=new C.nG("kente_sunset","Kente ya Jua",y.H,D.aFV,4294964964,4282000405,4279983648)
D.dFD=new C.nG("indigo_mudcloth","Nguo ya Indigo",y.n,D.aFW,4294439140,4279903102,4279903102)
D.dFI=new C.nG("adinkra_royal","Muhuri wa Adinkra",y.z,D.aFX,4294965484,4285218591,4287322667)
D.dFN=new C.nG("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aFY,4294244340,4279196764,4279196764)
D.dFP=new C.nG("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aFZ,4294505710,4279970378,4291058750)
D.hdq=new C.xD(1,"ringsNdoa")
D.dFH=new C.nG("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.rw,4294966259,4279378237,4291404327)
D.hds=new C.xD(2,"coupleCards")
D.dFS=new C.nG("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.rw,4294966259,4279378237,4291404327)
D.hdt=new C.xD(3,"kuhoweshaForm")
D.dFO=new C.nG("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.CM,4294966519,4279378237,4291404327)
D.hdu=new C.xD(4,"mahariPande")
D.dFE=new C.nG("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.rw,4294966259,4279904068,4291404327)
D.hdv=new C.xD(5,"familiaMti")
D.dFU=new C.nG("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aG_,4294966776,4280241466,4291404327)
D.hdw=new C.xD(6,"ndoaSafi")
D.dFL=new C.nG("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.CM,4294966519,4279378237,4291404327)
D.hdx=new C.xD(7,"peteWide")
D.dFK=new C.nG("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.rw,4294966259,4282001936,4291404327)
D.hdy=new C.xD(8,"muhuriCrest")
D.dFJ=new C.nG("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.rw,4294966259,4279378237,4291404327)
D.hdz=new C.xD(9,"fomuWazi")
D.dFM=new C.nG("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.CM,4294966519,4279904068,4291404327)
D.hdr=new C.xD(10,"upendoOrnate")
D.dFQ=new C.nG("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aG0,4294965493,4286200650,4291404327)
D.QS=w([D.dFF,D.dFR,D.dFG,D.dFT,D.dFV,D.dFD,D.dFI,D.dFN,D.dFP,D.dFH,D.dFS,D.dFO,D.dFE,D.dFU,D.dFL,D.dFK,D.dFJ,D.dFM,D.dFQ],B.ax("O<nG>"))
D.CQ=new C.aqW(0,"landscape169")
D.ob=new C.aqW(1,"portrait916")
D.dj_=w([D.CQ,D.ob],B.ax("O<aqW>"))
D.ayE=w([A.hH,A.bL,A.cY,A.i0,A.c],x.O)
D.uk=w([A.bZ,A.ih],x.O)
D.ejJ=new B.z(1000,"M")
D.eoI=new B.z(900,"CM")
D.enc=new B.z(500,"D")
D.elt=new B.z(400,"CD")
D.ejK=new B.z(100,"C")
D.eoJ=new B.z(90,"XC")
D.end=new B.z(50,"L")
D.elu=new B.z(40,"XL")
D.ejQ=new B.z(10,"X")
D.eoV=new B.z(9,"IX")
D.enu=new B.z(5,"V")
D.emY=new B.z(4,"IV")
D.ekk=new B.z(1,"I")
D.djG=w([D.ejJ,D.eoI,D.enc,D.elt,D.ejK,D.eoJ,D.end,D.elu,D.ejQ,D.eoV,D.enu,D.emY,D.ekk],x.ek)
D.eLn=new B.cu(["open",A.jp,"Open & write","Keep writing this book"])
D.eLO=new B.cu(["print",A.u6,"Print as a book","Fold and staple it"])
D.djQ=w([D.eLn,D.eLO],B.ax("O<+(m,a1,m,m)>"))
D.dkx=w([D.a5l,D.mF,D.I6,D.S1,D.df,D.S0],x.i)
D.eC0=new B.z(-1,"Small")
D.eju=new B.z(0,"Normal")
D.ekj=new B.z(1,"Big")
D.ekT=new B.z(2,"Huge")
D.dl4=w([D.eC0,D.eju,D.ekj,D.ekT],x.ek)
D.dlu=w([49,65,89,38,83,89],x.t)
D.dlB=w([A.vf,A.hH,A.bZ],x.O)
D.dm2=w([D.df,D.mF,D.ut,D.a5l,D.I6,D.S1],x.i)
D.aDV=new B.dt([0,D.LT,8,D.agB,12,D.agC],B.ax("dt<H,a3A>"))
D.e5b={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bk4=new B.v(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cPJ=w([A.bL,D.bk4],x.O)
D.d9j=w([A.b_,A.bi],x.O)
D.d3Y=w([A.c5,A.aP,A.bH],x.O)
D.djR=w([A.cr,A.bq],x.O)
D.cXu=w([A.ba,A.f0],x.O)
D.d6F=w([A.b4,A.fa],x.O)
D.bdb=new B.v(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.d5X=w([D.bdb,A.oH],x.O)
D.d0r=w([A.h3,A.xq],x.O)
D.cXi=w([A.bu,A.c8],x.O)
D.doI=new B.bt(D.e5b,[D.cPJ,K.apb,D.d9j,D.d3Y,D.djR,D.cXu,D.d6F,D.d5X,D.d0r,D.cXi],B.ax("bt<m,ai<v>>"))
D.e4s={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a4c=new B.bt(D.e4s,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.ax("bt<m,m>"))
D.a4j=new B.bt(A.hT,[],B.ax("bt<H,+icon3d,picture(m?,m?)>"))
D.dsY=new F.MV(30,null)
D.dy1=new F.mr("Chapter 1","","","")
D.diL=w([D.dy1],x.B)
D.dy5=new F.rl("My Book","","",D.diL,E.aFc)
D.dy3=new F.uA("starry",null,null,null,null,"","","")
D.dy6=new F.rl("Dream Big","","",E.a3g,D.dy3)
D.dy4=new F.uA("story",null,null,null,null,"","","")
D.dy7=new F.rl("Little Lion","","",E.a3g,D.dy4)
D.dy2=new F.uA("vintage",null,null,null,null,"","","")
D.dy8=new F.rl("Our Story","","",E.a3g,D.dy2)
D.dB6=new C.Eu("","NGMY","","")
D.dIi=new C.zB("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
D.e_c=new C.b0E(null,null,null,null)
D.e0V=new C.ar0(null)
D.e16=new C.aru(0,"smaller")
D.e17=new C.aru(1,"bigger")
D.aGw=new C.aru(2,"fit")
D.e80=new B.x(3,6)
D.e8a=new B.x(4,8)
D.ebC=new B.D(E.ahq,T.aco,null)
D.ebG=new B.D(A.YG,A.mg,null)
D.bJ2=new B.ae(A.l0,16,A.c_,null,null,null)
D.ebK=new B.D(A.il,D.bJ2,null)
D.b7y=new B.fi(2.2,null,null,null,null,A.c,null,null,null,null)
D.ebW=new B.D(A.FI,D.b7y,null)
D.bTn=new B.ae(A.cy,16,A.aA,null,null,null)
D.ec_=new B.D(A.ev,D.bTn,null)
D.fqP=new B.y("Play",null,A.oo,null,null,null,null,null,null,null,null,null)
D.d9y=w([U.anG,A.rK,D.fqP],x.p)
D.ePY=new B.ck(A.aN,A.e,A.Q,A.m,null,A.p,null,0,D.d9y,null)
D.ec2=new B.D(A.nb,D.ePY,null)
D.b7H=new B.fi(2.4,null,null,null,null,null,null,null,null,null)
D.eVN=new B.a7(20,20,D.b7H,null)
D.ec7=new B.D(A.il,D.eVN,null)
D.fzW=new B.y("Seconds per slide",null,A.hq,null,null,null,null,null,null,null,null,null)
D.ecf=new B.D(A.bl,D.fzW,null)
D.edA=new C.a8r(2,"print")
D.edD=new B.iQ(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.eff=new B.hf("/Annot")
D.efh=new B.hf("/URI")
D.fl6=new B.y("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.ehj=new B.jo("share",48,D.fl6,null,B.ax("jo<m>"))
D.bTh=new B.ae(A.e0,14,A.eC,null,null,null)
D.ehs=new B.cL(null,-2,-2,null,null,null,D.bTh,null)
D.cRN=w([H.aeY,A.K],x.O)
D.bZN=new B.a8(A.a3,A.a8,A.x,D.cRN,null,null)
D.b0l=new B.o(null,null,null,null,null,D.bZN,A.n)
D.bp5=new B.kQ(D.b0l,A.be,null,null)
D.ehE=new B.cL(0,0,null,0,8,null,D.bp5,null)
D.dei=w([A.hI,A.ml,A.c9],x.O)
D.eih=new B.c_(A.A,0.5,A.x,null,0,D.dei,null,null)
D.ekM=new B.z(0.22,A.bi)
D.epe=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.erj=new B.z(0.5,A.he)
D.eAr=new B.z(0.78,A.aV)
D.eLd=new B.cu([A.by,0.22,0.7,2.6])
D.eLj=new B.cu([A.ba,0.36,1.2,1.3])
D.eLp=new B.cu([A.dN,0.28,0.2,0.4])
D.eLv=new B.cu([A.cB,0.05,0.3,0.35])
D.eLB=new B.cu([A.bu,0.28,0.9,0])
D.eLJ=new B.cu([A.aE,-0.25,-0.15,0.45])
D.eMz=new B.cu([A.c5,0.42,1,4.1])
D.ePG=new B.a9p(9)
D.bK9=new B.ae(A.GD,28,A.bH,null,null,null)
D.fAu=new B.y("NGMY News",null,A.de,null,null,null,null,null,null,null,null,null)
D.byX=new B.bB(1,A.bf,D.fAu,null)
D.dhw=w([D.bK9,A.at,D.byX],x.p)
D.ePS=new B.ck(A.aN,A.e,A.j,A.m,null,A.p,null,0,D.dhw,null)
D.bKk=new B.ae(A.o_,16,A.c,null,null,null)
D.fC_=new B.y("Book",null,A.ok,null,null,null,null,null,null,null,null,null)
D.dlA=w([D.bKk,A.eg,D.fC_],x.p)
D.eQ_=new B.ck(A.aN,A.e,A.Q,A.m,null,A.p,null,0,D.dlA,null)
D.bQS=new B.ae(A.jq,10,A.c,null,null,null)
D.foU=new B.y("Pro",null,A.nt,null,null,null,null,null,null,null,null,null)
D.d9D=w([D.bQS,A.qr,D.foU],x.p)
D.eQ3=new B.ck(A.aN,A.e,A.Q,A.m,null,A.p,null,0,D.d9D,null)
D.fzU=new B.y("Make a newspaper",null,A.TZ,null,null,null,null,null,null,null,null,null)
D.c_Z=w([E.a1e,A.ab,D.fzU],x.p)
D.eQ4=new B.ck(A.aN,A.e,A.Q,A.m,null,A.p,null,0,D.c_Z,null)
D.bPo=new B.ae(A.lp,18,A.bL,null,null,null)
D.fr2=new B.y("Ending celebration",null,A.hX,null,null,null,null,null,null,null,null,null)
D.dgB=w([D.bPo,A.bp,D.fr2],x.p)
D.eQ7=new B.ck(A.aN,A.e,A.j,A.m,null,A.p,null,0,D.dgB,null)
D.bQE=new B.ae(A.jp,18,A.k1,null,null,null)
D.f5w=new B.G(!0,A.k1,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCh=new B.y("Write",null,D.f5w,null,null,null,null,null,null,null,null,null)
D.cZu=w([D.bQE,A.ab,D.fCh],x.p)
D.eQe=new B.ck(A.aN,A.e,A.Q,A.m,null,A.p,null,0,D.cZu,null)
D.foS=new B.y("Download picture",null,A.oj,null,null,null,null,null,null,null,null,null)
D.bB4=new B.qn(A.dZ,A.A,A.f,D.foS,null)
D.bBf=new B.dq(1,A.cm,D.bB4,null)
D.da1=w([L.anw,A.ab,D.bBf],x.p)
D.eQf=new B.ck(A.aN,A.b7,A.j,A.m,null,A.p,null,0,D.da1,null)
D.bM7=new B.ae(A.GD,22,A.bH,null,null,null)
D.fyu=new B.y("NGMY NEWS",null,K.a7Y,null,null,null,null,null,null,null,null,null)
D.cRd=w([D.bM7,A.ab,D.fyu],x.p)
D.eQo=new B.ck(A.aN,A.e,A.Q,A.m,null,A.p,null,0,D.cRd,null)
D.eQA=new B.p9(!1,!1,null,T.VT,null,A.bY,null,null,null)
D.a72=new B.jj([D.cl,D.df,D.ut,D.I5,D.uu,D.aGm],B.ax("jj<hE>"))
D.e6P={title:0,quote:1,closing:2,bio:3}
D.eRL=new B.dC(D.e6P,4,x.M)
D.e4K={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eRO=new B.dC(D.e4K,5,x.M)
D.e68={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a73=new B.dC(D.e68,8,x.M)
D.e5l={Design:0,Transitions:1,Insert:2}
D.eRT=new B.dC(D.e5l,3,x.M)
D.hdH=new B.jj([D.a5m],B.ax("jj<w1>"))
D.e5u={float3d:0,drift:1,pulse:2}
D.eRX=new B.dC(D.e5u,3,x.M)
D.aNG=new B.jj([D.I2,D.I3,D.I4],B.ax("jj<mv>"))
D.e4I={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aNJ=new B.dC(D.e4I,14,x.M)
D.hdI=new B.dC(A.hT,0,B.ax("dC<w1>"))
D.e5r={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.T6=new B.dC(D.e5r,4,x.M)
D.e4B={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aNM=new B.dC(D.e4B,30,x.M)
D.e5A={circle:0,triangle:1,hexagon:2,diamond:3}
D.eSj=new B.dC(D.e5A,4,x.M)
D.eUI=new B.as(390,844)
D.eVx=new B.a7(20,20,A.KI,null)
D.aOz=new B.a7(null,2.5,null,null)
D.eVH=new B.a7(18,18,A.KI,null)
D.bQI=new B.ae(A.j4,19,A.c,null,null,null)
D.eVS=new B.a7(38,38,D.bQI,null)
D.bOX=new B.ae(A.yC,22,A.c,null,null,null)
D.eVU=new B.a7(40,40,D.bOX,null)
D.eWs=new B.hO(2,10,10,1.15,null)
D.aOH=new B.hO(2,16,14,0.62,null)
D.bx0=new B.Q(32,30,32,40)
D.b92=new B.v(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bK6=new B.ae(A.q0,56,D.b92,null,null,null)
D.afN=new B.v(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.f7u=new B.G(!0,D.afN,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvv=new B.y("Your books will live here.",null,D.f7u,null,A.L,null,null,null,null,null,null,null)
D.d1n=w([D.bK6,A.R,D.fvv],x.p)
D.bo3=new B.fl(A.ah,A.e,A.j,A.m,null,A.p,null,0,D.d1n,null)
D.ecd=new B.D(D.bx0,D.bo3,null)
D.eWO=new B.m8(D.ecd,null)
D.fvs=new B.y("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.eX5=new B.b1(D.fvs,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.ftz=new B.y("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.eX6=new B.b1(D.ftz,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fyy=new B.y("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.eXf=new B.b1(D.fyy,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fz6=new B.y("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.eXu=new B.b1(D.fz6,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fsf=new B.y("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.eXH=new B.b1(D.fsf,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fGe=new B.y("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.eY_=new B.b1(D.fGe,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fDk=new B.y("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.eYa=new B.b1(D.fDk,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fze=new B.y("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eYS=new B.b1(D.fze,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fn7=new B.y("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.eZ8=new B.b1(D.fn7,null,null,null,null,null,null,null,A.iy,null,null,null,null,A.pQ,!1,null,null,null,A.r,null)
D.fp0=new B.y("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.eZq=new B.b1(D.fp0,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fv8=new B.y("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.eZs=new B.b1(D.fv8,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fuP=new B.y("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.eZt=new B.b1(D.fuP,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fBh=new B.y("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.eZu=new B.b1(D.fBh,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fjj=new B.y("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.eZD=new B.b1(D.fjj,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fqa=new B.y("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.f__=new B.b1(D.fqa,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fEW=new B.y("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.f_1=new B.b1(D.fEW,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fEt=new B.y("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.f_5=new B.b1(D.fEt,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fij=new B.y("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f_7=new B.b1(D.fij,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fAp=new B.y("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.f_g=new B.b1(D.fAp,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fE3=new B.y("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.f_v=new B.b1(D.fE3,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fDV=new B.y("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.f_x=new B.b1(D.fDV,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fib=new B.y("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.f_D=new B.b1(D.fib,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fm6=new B.y("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.f04=new B.b1(D.fm6,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fD7=new B.y("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.f0g=new B.b1(D.fD7,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.flV=new B.y("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.f0v=new B.b1(D.flV,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.bgb=new B.v(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cPX=w([A.i0,A.oH,D.bgb,D.acP,A.i0],x.O)
D.f0T=new B.fW(A.A,0,6.283185307179586,A.x,D.cPX,null,null)
D.cYI=w([A.bL,A.bZ,A.hH,D.AQ,A.bL],x.O)
D.aPf=new B.fW(A.A,0,6.283185307179586,A.x,D.cYI,null,null)
D.dbO=w([A.c5,A.by,A.ba,A.bk,A.bH,A.c5],x.O)
D.f0Y=new B.fW(A.A,0,6.283185307179586,A.x,D.dbO,null,null)
D.cS0=w([A.pM,A.oI,A.xo,A.i0,A.pM],x.O)
D.f0Z=new B.fW(A.A,0,6.283185307179586,A.x,D.cS0,null,null)
D.dbI=w([A.aO,A.bK,A.aL,A.ak,A.aO],x.O)
D.f1_=new B.fW(A.A,0,6.283185307179586,A.x,D.dbI,null,null)
D.djw=w([A.bu,A.ba,A.by,A.c5,A.bu],x.O)
D.f11=new B.fW(A.A,0,6.283185307179586,A.x,D.djw,null,null)
D.bcd=new B.v(1,0,1,0,A.t)
D.bgs=new B.v(1,0,1,1,A.t)
D.bdP=new B.v(1,0,0,1,A.t)
D.bad=new B.v(1,1,0,1,A.t)
D.dfB=w([A.KZ,A.aeG,D.bcd,D.bgs,D.bdP,D.bad,A.KZ],x.O)
D.f12=new B.fW(A.A,0,6.283185307179586,A.x,D.dfB,null,null)
D.f1h=new C.avw(2,"immersiveSticky")
D.f1i=new C.avw(3,"edgeToEdge")
D.f1j=new C.avw(4,"manual")
D.f3I=new B.G(!0,A.oC,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPN=new B.G(!0,A.f1,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4g=new B.G(!0,E.mZ,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5N=new B.G(!0,A.ad,null,null,null,null,13,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6M=new B.G(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6W=new B.G(!0,A.c_,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7f=new B.G(!0,A.eC,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8E=new B.G(!0,A.bK,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8O=new B.G(!0,A.k0,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f91=new B.rH(!0,A.Ip,null,null,null,null,A.ds,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9v=new B.G(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa7=new B.G(!0,A.ji,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fav=new B.G(!0,A.aA,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.edG=new B.iQ(1,1,0.7568627450980392,0.027450980392156862)
D.faz=new B.rH(!0,D.edG,null,null,null,null,A.ds,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.aeN=new B.v(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aQw=new B.G(!0,D.aeN,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faH=new B.G(!0,D.afN,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faI=new B.G(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQy=new B.G(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbk=new B.rH(!0,A.pb,null,null,null,null,A.ds,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbC=new B.G(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc8=new B.G(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fca=new B.G(!0,D.aeN,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Jq=new B.G(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcD=new B.G(!0,A.bZ,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcM=new B.G(!0,A.bK,null,null,null,null,14,A.a6,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcP=new B.G(!0,A.bL,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd6=new B.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.awl,null,null,null)
D.fd8=new B.G(!0,A.cs,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fda=new B.G(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdn=new B.G(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdz=new B.G(!0,A.dr,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe6=new B.G(!0,A.aR,null,null,null,null,null,A.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fef=new B.G(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fet=new B.G(!0,A.ad,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aR9=new B.G(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRb=new B.G(!0,A.c_,null,null,null,null,11.5,A.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.blG=new B.v(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.fgb=new B.G(!0,D.blG,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRh=new B.G(!0,E.mZ,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgG=new B.G(!0,A.bK,null,null,null,null,11,A.a6,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgJ=new B.G(!0,O.li,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9J=new B.G(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhY=new B.y("NEW",null,D.f9J,null,null,null,null,null,null,null,null,null)
D.fie=new B.y("Hati ya Kuhowesha",null,A.fs,null,null,null,null,null,null,null,null,null)
D.fiG=new B.y("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fj_=new B.y("Scrollable PDF on this slide",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fjJ=new B.y("Big quote mark",null,A.iS,null,null,null,null,null,null,null,null,null)
D.fjM=new B.y("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fjX=new B.y("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fko=new B.y("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fkq=new B.y("How many slides?",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fkY=new B.y("Transfer",null,A.cj,null,null,null,null,null,null,null,null,null)
D.f5z=new B.G(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flj=new B.y("Luxury FX",null,D.f5z,null,null,null,null,null,null,null,null,null)
D.flE=new B.y("Font",null,A.rP,null,null,null,null,null,null,null,null,null)
D.flP=new B.y("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.flW=new B.y("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.ffK=new B.G(!0,A.bK,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm3=new B.y("Example  GA847",null,D.ffK,null,null,null,null,null,null,null,null,null)
D.fmt=new B.y("Design shapes",null,A.iS,null,null,null,null,null,null,null,null,null)
D.fmE=new B.y("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fmI=new B.y("Non-stop (loop)",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fmW=new B.y("Hati ya Kuhoweya",null,A.fs,null,null,null,null,null,null,null,null,null)
D.fne=new B.y("Photo studio",null,A.fP,null,null,null,null,null,null,null,null,null)
D.fnH=new B.y("Add your picture",null,A.ki,null,null,null,null,null,null,null,null,null)
D.f92=new B.G(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnI=new B.y("Enter document code",null,D.f92,null,A.L,null,null,null,null,null,null,null)
D.fnJ=new B.y("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fnO=new B.y("English",null,null,null,null,null,null,null,null,null,null,null)
D.f6C=new B.G(!0,E.mZ,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo8=new B.y("Delete this book?",null,D.f6C,null,A.L,null,null,null,null,null,null,null)
D.fba=new B.G(!0,E.mZ,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp2=new B.y("Your library",null,D.fba,null,null,null,null,null,null,null,null,null)
D.fp8=new B.y("Delete",null,A.aQq,null,null,null,null,null,null,null,null,null)
D.fpb=new B.y("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,As.Dy,null,null,null,null,null,null,null,null,null)
D.fpm=new B.y("Element flies in",null,A.aQC,null,null,null,null,null,null,null,null,null)
D.U7=new B.y("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fpK=new B.y("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fq3=new B.y("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.fq7=new B.y("Cancel",null,E.aQM,null,null,null,null,null,null,null,null,null)
D.fq9=new B.y("The lines and circles that come with the design",null,A.hc,null,null,null,null,null,null,null,null,null)
D.feB=new B.G(!0,A.hh,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqA=new B.y("DOCUMENT CODE",null,D.feB,null,null,null,null,null,null,null,null,null)
D.fro=new B.y("Quotes",null,G.a8z,null,null,null,null,null,null,null,null,null)
D.f8r=new B.G(!0,O.li,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frw=new B.y("Add a picture",null,D.f8r,null,null,null,null,null,null,null,null,null)
D.frE=new B.y("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a8f,null,A.L,null,null,null,null,null,null,null)
D.frI=new B.y("Look & feel",null,A.hq,null,null,null,null,null,null,null,null,null)
D.frN=new B.y("Rings",null,A.hX,null,null,null,null,null,null,null,null,null)
D.frT=new B.y("W",null,A.rP,null,null,null,null,null,null,null,null,null)
D.fs2=new B.y("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fsl=new B.y("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.TW,null,A.L,null,null,null,null,null,null,null)
D.fsn=new B.y("Write your book",null,A.cA,null,null,null,null,null,null,null,null,null)
D.ft6=new B.y("Add page",null,A.cj,null,null,null,null,null,null,null,null,null)
D.ftl=new B.y("Malipo ya Awamu ya Mahari",null,A.fs,null,null,null,null,null,null,null,null,null)
D.f8S=new B.G(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftA=new B.y("Create with AI",null,D.f8S,null,A.L,null,null,null,null,null,null,null)
D.fu3=new B.y("Apply look",null,A.hX,null,null,null,null,null,null,null,null,null)
D.f9A=new B.G(!0,A.ek,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuR=new B.y("Type your presentation below",null,D.f9A,null,A.L,null,null,null,null,null,null,null)
D.fuU=new B.y("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,K.aRm,null,A.L,null,null,null,null,null,null,null)
D.fuW=new B.y("Keep it",null,A.cj,null,null,null,null,null,null,null,null,null)
D.f4x=new B.G(!0,A.cn,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv2=new B.y("Done",null,D.f4x,null,null,null,null,null,null,null,null,null)
D.fvn=new B.y("Delete",null,A.nv,null,null,null,null,null,null,null,null,null)
D.fvx=new B.y("Hati ya Kiapo cha Uongozi",null,A.fs,null,null,null,null,null,null,null,null,null)
D.f7M=new B.G(!0,A.aR,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwr=new B.y("Write your idea in any language \u2014 the AI makes the slides.",null,D.f7M,null,A.L,null,null,null,null,null,null,null)
D.fwN=new B.y("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fwT=new B.y("Layout",null,A.U0,null,null,null,null,null,null,null,null,null)
D.fxw=new B.y("Print",null,A.cA,null,null,null,null,null,null,null,null,null)
D.fxC=new B.y("X",null,A.rP,null,null,null,null,null,null,null,null,null)
D.fyb=new B.y("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,A9.Jl,null,null,null,null,null,null,null,null,null)
D.fyL=new B.y("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fyZ=new B.y("Hati ya Kuhowa",null,A.fs,null,null,null,null,null,null,null,null,null)
D.fz0=new B.y("Choose a class template",null,A.fs,null,null,null,null,null,null,null,null,null)
D.fz2=new B.y("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hc,null,null,null,null,null,null,null,null,null)
D.fz8=new B.y("Download the newspaper picture",null,A.cA,null,null,null,null,null,null,null,null,null)
D.fzl=new B.y("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fzs=new B.y("Done",null,A.aR8,null,null,null,null,null,null,null,null,null)
D.fzC=new B.y("Ending celebration",null,A.de,null,null,null,null,null,null,null,null,null)
D.fzD=new B.y("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fzS=new B.y("Plays after your last slide. Tap one to watch it and change its words or logo.",null,A9.uQ,null,null,null,null,null,null,null,null,null)
D.fAP=new B.y("Export presentation",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fAQ=new B.y("What would you like to do?",null,D.aQw,null,null,null,null,null,null,null,null,null)
D.fAU=new B.y("Delete",null,A.cA,null,null,null,null,null,null,null,null,null)
D.fBp=new B.y("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fBt=new B.y("Hati (Documents)",null,A.fs,null,null,null,null,null,null,null,null,null)
D.fBG=new B.y("Done",null,A.lc,null,null,null,null,null,null,null,null,null)
D.ffA=new B.G(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBL=new B.y("Delete presentation?",null,D.ffA,null,A.L,null,null,null,null,null,null,null)
D.fC3=new B.y("After the last slide it starts again from the first",null,A.hc,null,null,null,null,null,null,null,null,null)
D.fCf=new B.y("\ud83c\udf33",null,A.Jj,null,A.L,null,null,null,null,null,null,null)
D.fCx=new B.y("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hc,null,null,null,null,null,null,null,null,null)
D.fCE=new B.y("Transfer document",null,A.on,null,null,null,null,null,null,null,null,null)
D.fCP=new B.y("Add to the slides",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fDb=new B.y("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fDq=new B.y("Make a book",null,I.aQ5,null,null,null,null,null,null,null,null,null)
D.fDu=new B.y("Books",null,A.cA,null,null,null,null,null,null,null,null,null)
D.f8k=new B.G(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDv=new B.y("Keep this page open until it finishes.",null,D.f8k,null,null,null,null,null,null,null,null,null)
D.fDx=new B.y("Making your video",null,A.de,null,null,null,null,null,null,null,null,null)
D.fDC=new B.y("LANGUAGE",null,H.zP,null,null,null,null,null,null,null,null,null)
D.fDJ=new B.y("Use this ending",null,A.cA,null,null,null,null,null,null,null,null,null)
D.fDR=new B.y("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fDT=new B.y("Upload a different logo",null,A.cj,null,null,null,null,null,null,null,null,null)
D.fE9=new B.y("Delete from the database?",null,A.ki,null,null,null,null,null,null,null,null,null)
D.fEa=new B.y("H",null,A.rP,null,null,null,null,null,null,null,null,null)
D.fEz=new B.y("NGMY Quotes",null,A.de,null,null,null,null,null,null,null,null,null)
D.fF0=new B.y("Cover",null,D.aRh,null,null,null,null,null,null,null,null,null)
D.fF4=new B.y("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fF5=new B.y("Each page becomes its own slide you can present",null,A.hc,null,null,null,null,null,null,null,null,null)
D.fFr=new B.y("Y",null,A.rP,null,null,null,null,null,null,null,null,null)
D.fFC=new B.y("Crop the picture",null,A.lc,null,null,null,null,null,null,null,null,null)
D.fFJ=new B.y("Edit text",null,A.Jk,null,null,null,null,null,null,null,null,null)
D.fI0=B.dS("a8d")
D.DL=new C.awP(0,"none")
D.aUM=new C.awP(1,"zipCrypto")
D.aUN=new C.awP(2,"aes")
D.h28=new F.Pn("","",null)
D.h3e=new C.bbP(null)
D.h4l=new C.Zq(null)
D.h6o=new C.ad5(null)
D.h6q=new C.aDV(null)
D.h9b=new C.a_E(null)
D.h9s=new C.a0a(null)
D.h9L=new C.btd(null)})();(function staticFields(){$.hdc=null
$.hdd=null
$.hde=null
$.hdf=null
$.fW1=B.v7("_lastQuoRemDigits")
$.fW2=B.v7("_lastQuoRemUsed")
$.axa=B.v7("_lastRemUsed")
$.fW3=B.v7("_lastRem_nsh")
$.q9=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a70=B.U(x.N,x.I)
$.fTw=!1
$.hi1=B.U(B.ax("kT"),x.N)
$.hie=B.U(B.ax("kT"),x.E)
$.hgf=!1
$.byJ="q"
$.Qk=0
$.CF=B.U(x.N,B.ax("ai<zC>"))
$.hgB=!1
$.fXD=!1
$.hmT=null
$.hRa=B.U(x.N,B.ax("aA<m?>"))
$.Kp=""
$.j1=0
$.h9Z=function(){var w=x.N
return B.U(w,w)}()
$.h9Y=B.U(x.N,x.R)
$.fXY=!1
$.afN=B.U(x.N,x.E)
$.fYN=0
$.bjJ=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ifx","D_",()=>C.b9l(0))
w($,"ifv","a2o",()=>C.b9l(1))
w($,"ifw","hqz",()=>C.b9l(2))
w($,"ifu","h1H",()=>$.a2o().v1(0))
w($,"ifs","hqx",()=>C.b9l(1e4))
w($,"ift","hqy",()=>B.Ea(8))
w($,"ibi","hoz",()=>B.Ea(0))
w($,"ibq","hoD",()=>B.Ea(0))
w($,"ibp","hoC",()=>B.bXY(0))
w($,"ijg","hsA",()=>{var v,u,t=x.N
t=B.U(t,t)
for(v=D.a4c.gdQ(D.a4c),v=v.gae(v);v.C();){u=v.gT(v)
t.n(0,u.b,u.a)}return t})
w($,"ijH","bDd",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mR(new C.fEd(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mR(new C.fEe(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mR(new C.fEf(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mR(new C.fEq(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mR(new C.fEv(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mR(new C.fEw(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mR(new C.fEx(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mR(new C.fEy(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mR(new C.fEz(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mR(new C.fEA(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mR(new C.fEB(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mR(new C.fEg(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mR(new C.fEh(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mR(new C.fEi(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mR(new C.fEj(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mR(new C.fEk(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mR(new C.fEl(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mR(new C.fEm(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mR(new C.fEn(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mR(new C.fEo(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mR(new C.fEp(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mR(new C.fEr(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mR(new C.fEs(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mR(new C.fEt(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mR(new C.fEu(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.ax("O<ED>"))})
w($,"ijj","hsC",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["7XA2xoIqmyuCod+oWfW9ZHA2m2A="]=a.current})($__dart_deferred_initializers__);