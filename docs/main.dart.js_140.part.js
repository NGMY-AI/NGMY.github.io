((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ag,A5,Ah,Ai,U,A6,Aj,Ak,C={
tS(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fVW(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
JG(d){var w
if(d===0)return $.D_()
if(d===1)return $.a2l()
if(d===2)return $.hqq()
if(Math.abs(d)<4294967296)return C.b9j(A.o.N(d))
w=C.hLa(d)
return w},
b9j(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.tS(4,w)
return new C.nX(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.tS(1,w)
return new C.nX(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aC(d,16)
v=C.tS(2,w)
return new C.nX(v===0?!1:s,w,v)}v=A.o.am(A.o.gajX(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.am(d,65536)}v=C.tS(v,w)
return new C.nX(v===0?!1:s,w,v)},
hLa(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.V(B.dH("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.D_()
w=$.hqp()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.l9(A.aH.gaP(w))
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
q=new C.nX(!1,r,4)
if(s<0)p=q.mq(0,-s)
else p=s>0?q.dY(0,s):q
return p},
fVX(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hd6(d,e,f,g){var w,v,u,t,s,r=A.o.am(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dY(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fG(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dY(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hd1(d,e,f,g){var w,v,u,t,s=A.o.am(f,16)
if(A.o.F(f,16)===0)return C.fVX(d,e,s,g)
w=e+s+1
C.hd6(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hLd(d,e,f,g){var w,v,u,t,s=A.o.am(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dY(1,r)-1,o=A.o.fG(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dY(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fG(u,r)}w&2&&B.aj(g)
g[n]=o},
cFc(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hLb(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
b9k(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aC(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aC(v,16)&1)}},
hd7(d,e,f,g,h,i){var w,v,u,t,s,r
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
hLc(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.e6((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nX:function nX(d,e,f){this.a=d
this.b=e
this.c=f},
cFd:function cFd(){},
cFe:function cFe(){},
cFf:function cFf(d,e){this.a=d
this.b=e},
cFg:function cFg(d){this.a=d},
aQL:function aQL(d,e){this.a=d
this.b=e},
h2W(d,e,f){var w=new C.RH(d,A.o.am(Date.now(),1000),e)
w.Q=f
return w},
RH:function RH(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a3x:function a3x(d,e){this.a=d
this.b=e},
bGK:function bGK(d){this.a=d
this.c=this.b=0},
htE(){return new C.bF4()},
bF4:function bF4(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cxm:function cxm(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hKT(d,e,f){var w,v,u,t,s
if(d.gal(d))return new Uint8Array(0)
w=new Uint8Array(B.ce(d.gcWx(d)))
v=f*2+2
u=C.haJ(C.haL(),64)
t=new C.ch9(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cha(e,1000,v)
s=new Uint8Array(v)
return A.aH.ds(s,0,t.cJY(w,0,s,0))},
cxk:function cxk(d,e){this.c=d
this.d=e},
awN:function awN(d,e){this.a=d
this.b=e},
cxn:function cxn(d,e,f,g){var _=this
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
b82:function b82(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cxl:function cxl(){this.a=$},
hcw(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
htn(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bDF:function bDF(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
h0C(d,e){e&=31
return(d&$.qb[e])<<e>>>0},
ns(d,e){e&=31
return(d>>>e|C.h0C(d,32-e))>>>0},
haK(d){var w,v=new C.asu()
if(B.iJ(d))v.aJW(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
haL(){var w=C.haK(0),v=new Uint8Array(4),u=x.S
u=new C.chb(w,v,A.Eb,5,B.c3(5,0,!1,u),B.c3(80,0,!1,u))
u.kA(0)
return u},
haJ(d,e){var w=new C.ch7(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
ch6:function ch6(){},
cha:function cha(d,e,f){this.a=d
this.b=e
this.c=f},
ch4:function ch4(){},
ast:function ast(d){this.a=d},
ch9:function ch9(d){this.a=$
this.b=d
this.c=$},
ch5:function ch5(){},
ch3:function ch3(){},
asu:function asu(){this.b=this.a=$},
ch8:function ch8(){},
chb:function chb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
ch7:function ch7(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
ch2:function ch2(){},
ch1:function ch1(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bNl:function bNl(){},
bNm:function bNm(d){this.a=d},
hO7(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b9z:function b9z(){},
cra:function cra(){},
bOe:function bOe(d,e){this.a=d
this.b=!1
this.c=e},
bOf:function bOf(){},
hX1(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
avr(d){var w=0,v=B.j(x.H),u
var $async$avr=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.f1R?2:4
break
case 2:w=5
return B.b(A.kg.h_("SystemChrome.setEnabledSystemUIMode",d.a3(),u),$async$avr)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kg.h_("SystemChrome.setEnabledSystemUIOverlays",C.hX1(null),u),$async$avr)
case 6:case 3:return B.h(null,v)}})
return B.i($async$avr,v)},
avu:function avu(d,e){this.a=d
this.b=e},
a8a:function a8a(d){this.a=d},
fRQ(d,e){return new C.aVf(e,d,null)},
aVf:function aVf(d,e,f){this.e=d
this.c=e
this.a=f},
aAl:function aAl(d,e,f,g,h){var _=this
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
hZK(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.frr(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
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
frr:function frr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ane(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$ane=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.agE("ngmy_menu_lib_v1_zzslides_index",A.bJ),$async$ane)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.d9(s,x.f)
t=B.cC(t,new C.bZ1(),t.$ti.k("J.E"),x.P)
r=B.C(t,B.a6(t).k("J.E"))}else r=B.a([],x.d)
A.d.aZ(r,new C.bZ2())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ane,v)},
ang(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$ang=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ane(),$async$ang)
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
return B.b(B.nr("ngmy_menu_lib_v1_zzslide_"+B.aL(p,k,""),B.F(["deck",m.ag(),"savedAt",l],t,q),null),$async$ang)
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
return B.b(B.nr("ngmy_menu_lib_v1_zzslides_index",B.F(["items",s,"savedAt",new B.S(Date.now(),0,!1).a5().ac()],t,q),null),$async$ang)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ang,v)},
bZ3(d){return C.hz9(d)},
hz9(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bZ3=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.agE("ngmy_menu_lib_v1_zzslide_"+B.aL(d,o,""),A.hL),$async$bZ3)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.VK(B.a2(q,x.N,x.z))
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
return B.i($async$bZ3,v)},
anf(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$anf=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.ane(),$async$anf)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nt(r,new C.bZ4(d))
w=4
return B.b(B.nr("ngmy_menu_lib_v1_zzslides_index",B.F(["items",r,"savedAt",new B.S(Date.now(),0,!1).a5().ac()],x.N,x.z),null),$async$anf)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aOO("ngmy_menu_lib_v1_zzslide_"+B.aL(d,s,"")),$async$anf)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anf,v)},
bZ1:function bZ1(){},
bZ2:function bZ2(){},
bZ4:function bZ4(d){this.a=d},
i8G(d,e,f){return B.bQ(A.K,null,new C.fHD(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fHD:function fHD(d,e,f){this.a=d
this.b=e
this.c=f},
a0B:function a0B(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aIE:function aIE(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
f4a:function f4a(d,e){this.a=d
this.b=e},
f4e:function f4e(d){this.a=d},
f4f:function f4f(d){this.a=d},
f4g:function f4g(d,e,f){this.a=d
this.b=e
this.c=f},
f4b:function f4b(d){this.a=d},
f4c:function f4c(d){this.a=d},
f4d:function f4d(d,e){this.a=d
this.b=e},
f45:function f45(d){this.a=d},
f43:function f43(d){this.a=d},
f44:function f44(d){this.a=d},
f46:function f46(d){this.a=d},
f47:function f47(d){this.a=d},
f4k:function f4k(d,e){this.a=d
this.b=e},
f4j:function f4j(d,e){this.a=d
this.b=e},
f49:function f49(d,e,f){this.a=d
this.b=e
this.c=f},
f48:function f48(d,e,f){this.a=d
this.b=e
this.c=f},
f4h:function f4h(d,e){this.a=d
this.b=e},
f4i:function f4i(d,e){this.a=d
this.b=e},
f4n:function f4n(d){this.a=d},
f4o:function f4o(d,e){this.a=d
this.b=e},
f4m:function f4m(d,e){this.a=d
this.b=e},
f4l:function f4l(){},
hfx(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.S.aL(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d9(w,x.f)
v=B.cC(v,new C.fbz(),v.$ti.k("J.E"),x.ea)
u=B.a6(v).k("a_<J.E>")
v=B.C(new B.a_(v,new C.fbA(),u),u.k("J.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a1z(d){return C.i0_(d)},
i0_(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a1z=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.U(x.N,x.ea)
m=new C.fug(n)
t=4
j=m
i=C
w=7
return B.b(B.a28("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a1z)
case 7:j.$1(i.hfx(f))
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
return B.b(B.ay(),$async$a1z)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hfx(B.aU(J.q(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.fbI(d),$async$a1z)
case 13:p=j.C(new i.a_(h,new g.fue(f),o),o.k("J.E"))
A.d.aZ(p,new C.fuf())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a1z,v)},
ahe(d,e){return C.i8l(d,e)},
i8l(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ahe=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fH7(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.S.ao(n,null)
q=!1
t=4
w=7
return B.b(B.ah6("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ahe)
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
return B.b(B.ay(),$async$ahe)
case 12:p=g
w=13
return B.b(p.aq("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ahe)
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
return B.i($async$ahe,v)},
fbI(d){return C.hPt(d)},
hPt(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fbI=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ay(),$async$fbI)
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
return B.i($async$fbI,v)},
ag3(d,e){return C.hZC(d,e)},
hZC(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$ag3=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$ag3)
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
return B.b(s.aq("StringList","ngmy_books_deleted_v1_"+r,q),$async$ag3)
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
return B.b(C.a1z(d),$async$ag3)
case 8:n=g
J.nt(n,new C.fr5(e))
w=9
return B.b(C.ahe(d,n),$async$ag3)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ag3,v)},
i8L(d,e){return B.a4(d,!1).cm(B.e9(new C.fHZ(e),!0,null,x.H))},
hLf(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d7(w.d,new C.cGz())},
on:function on(d,e,f){this.a=d
this.b=e
this.c=f},
fbz:function fbz(){},
fbA:function fbA(){},
fug:function fug(d){this.a=d},
fue:function fue(d){this.a=d},
fuf:function fuf(){},
fH7:function fH7(){},
fr5:function fr5(d){this.a=d},
fHZ:function fHZ(d){this.a=d},
Ym:function Ym(d,e){this.c=d
this.a=e},
axk:function axk(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cGz:function cGz(){},
cGB:function cGB(d,e){this.a=d
this.b=e},
cGE:function cGE(d){this.a=d},
cGF:function cGF(d){this.a=d},
cGD:function cGD(){},
cGG:function cGG(d,e){this.a=d
this.b=e},
cGC:function cGC(d){this.a=d},
cGH:function cGH(){},
cGA:function cGA(d,e){this.a=d
this.b=e},
cGI:function cGI(){},
cGv:function cGv(d){this.a=d},
cGt:function cGt(d){this.a=d},
cGu:function cGu(d){this.a=d},
cGw:function cGw(d,e){this.a=d
this.b=e},
cGs:function cGs(d){this.a=d},
cGr:function cGr(d){this.a=d},
cGp:function cGp(d,e){this.a=d
this.b=e},
cGq:function cGq(d){this.a=d},
cGy:function cGy(){},
cGx:function cGx(d){this.a=d},
cGo:function cGo(d,e){this.a=d
this.b=e},
cGn:function cGn(d,e){this.a=d
this.b=e},
cGm:function cGm(d,e){this.a=d
this.b=e},
cGJ:function cGJ(d){this.a=d},
Yk:function Yk(d,e,f){this.c=d
this.d=e
this.a=f},
aEw:function aEw(d,e,f){this.a=d
this.b=e
this.c=f},
axg:function axg(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cFQ:function cFQ(d){this.a=d},
cFP:function cFP(d){this.a=d},
cFS:function cFS(d,e,f){this.a=d
this.b=e
this.c=f},
cG_:function cG_(){},
cG0:function cG0(d){this.a=d},
cFT:function cFT(d,e,f){this.a=d
this.b=e
this.c=f},
cFR:function cFR(d,e){this.a=d
this.b=e},
cFV:function cFV(d,e){this.a=d
this.b=e},
cFW:function cFW(d,e){this.a=d
this.b=e},
cFX:function cFX(d,e){this.a=d
this.b=e},
cFU:function cFU(d){this.a=d},
cFZ:function cFZ(d){this.a=d},
cFY:function cFY(d,e){this.a=d
this.b=e},
cG5:function cG5(d){this.a=d},
cG1:function cG1(d,e){this.a=d
this.b=e},
cG2:function cG2(d,e){this.a=d
this.b=e},
cG3:function cG3(d,e){this.a=d
this.b=e},
cG4:function cG4(d,e){this.a=d
this.b=e},
axi:function axi(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
i2j(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ei(v,x.cK).bJ(new C.fyK(),x.H).eS(new C.fyL())}}else if(s)C.hh0()}catch(t){}},
hh0(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ei(v,x.cK).eS(new C.ffO())}catch(u){}},
i2m(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fyK:function fyK(){},
fyL:function fyL(){},
ffO:function ffO(){},
hlC(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gH(A.a.ef(v,w,"").split(":"))},
hlz(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.l6)return null
return A.a.b3(w,14)},
h_k(d){var w
if(d.b!==D.l6)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b3(w,21)},
i2M(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hlD(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
i2H(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aL(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aL(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.U(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.l1(0,f)
t=x.N
u=B.cC(u,new C.fzJ(),B.a6(u).k("J.E"),t)
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
i2F(d,e){var w,v,u,t,s,r=B.a6(e).k("cv<1>"),q=B.C(new B.cv(e,r),r.k("J.E"))
A.d.aZ(q,new C.fzI())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.L)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.cc(s,"]"))continue
w=B.aPK(w,u,s,0)}return w},
i2J(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a4c:$.hsr(),s=x.N,r=B.U(s,s)
for(s=t.gdQ(t),s=s.gae(s);s.C();){w=s.gT(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.cc(u,"]"))continue
r.n(0,w.b,u)}return r},
hlA(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fcB(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
if(C.hlC(q)===e)return q}return null},
i2K(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b3(v,u)
return A.d.gH(D.GR).a},
i2L(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.adU(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.adU(0,0,0)
v=C.fcB(b6,b0)
u=C.fcB(b5,b0)
t=0
if(v!=null&&u!=null){s=C.i2J(b2,C.i2H(C.hlA(b2),v.r))
if(s.a!==0){u.r=C.i2F(C.hlA(b4),s)
t=s.a}}r=B.aY(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){l=C.hlC(o[m])
if(l==null||l==="utangulizi")continue
r.M(0,l)}for(q=B.em(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fcB(b6,n)
i=C.fcB(b5,n)
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
a0=C.h_k(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.L)(a1),++a7){a8=a1[a7]
if(C.hlz(a8)===a0||C.h_k(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.QZ(a1,new C.fzP(a0),!0)
a1=f.z
a6=Date.now()
a9=$.j1
$.j1=a9+1
A.d.M(a1,new C.eG(""+1000*a6+"_"+a9,D.l6,a2,a3,a4,a5,"",24,A.a6,A.bo,A.aD,4279310375,A.bh,d.at,D.bf,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cl,0,"","","","","",!1,0));++e}b5.f=new B.S(Date.now(),0,!1)
return new B.adU(k,t,e)},
i2G(d){var w=C.i2K(d)
if(d.w==="hati_kuhowa")return C.hkX("",w)
return C.hkW("",w)},
fzJ:function fzJ(){},
fzI:function fzI(){},
fzP:function fzP(d){this.a=d},
hgK(){var w=new B.S(Date.now(),0,!1),v=new C.feR()
return B.u(v.$1(B.bR(w)))+"/"+B.u(v.$1(B.bH(w)))+"/"+B.bA(w)},
h_t(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fAH(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.l6&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hlR(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fAH(d)
w=B.bi(u)
if(w==null)return!C.fAH(d)
return new B.S(Date.now(),0,!1).a5().d_(w.a5().bS(18e9))},
i3r(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.S(Date.now(),0,!1).a5().ac()},
hDc(d){return A.a.i(d).toLowerCase()},
apw(d){return C.hDe(d)},
hDe(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$apw=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ay(),$async$apw)
case 7:r=f
p=r.tf("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.U:p
o=q
o=new B.M(o,C.i6Y(),B.T(o).k("M<1,m>")).c0(0,new C.c9j())
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
return B.i($async$apw,v)},
apv(d,e){return C.hDd(d,e)},
hDd(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apv=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.apw(d),$async$apv)
case 3:r=g
if(!J.cd(r,o)){w=1
break}t=5
w=8
return B.b(B.ay(),$async$apv)
case 8:q=g
w=9
return B.b(q.aq("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qk(r)),$async$apv)
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
return B.i($async$apv,v)},
apx(d,e){return C.hDf(d,e)},
hDf(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apx=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.apw(d),$async$apx)
case 3:r=g
if(!J.hy(r,o)){w=1
break}t=5
w=8
return B.b(B.ay(),$async$apx)
case 8:q=g
w=9
return B.b(q.aq("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qk(r)),$async$apx)
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
V7(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$V7=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fTl&&!a5){w=1
break}t=4
w=7
return B.b(B.ay(),$async$V7)
case 7:r=a7
q=B.aU(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.S.aL(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.U(e,x.I)
for(d=J.jN(p),d=d.gae(d),a0=x.z;d.C();){n=d.gT(d)
if(f.b(n.b))J.aG(o,J.k(n.a),C.VK(B.a2(f.a(n.b),e,a0)))}$.a6Y=o}}t=2
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
return B.b(B.c2(),$async$V7)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.u5("civic_hati_kiapo_uongozi",null,A.ei),$async$V7)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.U(o,x.I)
for(f=x.f,e=J.jN(f.a(J.q(l,"byState"))),e=e.gae(e),d=x.z;e.C();){j=e.gT(e)
if(!f.b(j.b))continue
J.aG(k,J.k(j.a),C.VK(B.a2(f.a(j.b),o,d)))}for(o=k,o=new B.cI(o,B.a6(o).k("cI<1,2>")).gae(0);o.C();){f=o.d
f.toString
i=f
h=$.a6Y.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbq())f=d===e.gbq()&&f.b<e.gcA()
else f=!0
f=!f}else f=!0
if(f)$.a6Y.n(0,i.a,i.b)}w=20
return B.b(C.apy(),$async$V7)
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
case 16:case 9:$.fTl=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$V7,v)},
apy(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$apy=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$apy)
case 6:s=e
r=B.U(x.N,x.P)
for(o=$.a6Y,o=new B.cI(o,B.a6(o).k("cI<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aG(r,q.a,q.b.ag())}w=7
return B.b(s.aq("String","ngmy_civic_hati_kiapo_uongozi_v1",A.S.ao(r,null)),$async$apy)
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
return B.i($async$apy,v)},
aZJ(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aZJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.V7(!1),$async$aZJ)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a6Y.h(0,t)
r=s==null?null:s.hG()
if(r==null){u=null
w=1
break}u=C.bBb(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aZJ,v)},
a6Z(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a6Z=B.e(function(a2,a3){if(a2===1){s.push(a3)
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
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a6Y.n(0,d,o)
$.fTl=!0
w=3
return B.b(C.apy(),$async$a6Z)
case 3:w=4
return B.b(B.c2(),$async$a6Z)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.U(e,x.P)
for(n=$.a6Y,n=new B.cI(n,B.a6(n).k("cI<1,2>")).gae(0);n.C();){l=n.d
l.toString
q=l
J.aG(r,q.a,q.b.ag())}w=9
return B.b(B.nr("civic_hati_kiapo_uongozi",B.F(["byState",r,"updatedAt",new B.S(Date.now(),0,!1).a5().ac()],e,x.z),null),$async$a6Z)
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
return B.i($async$a6Z,v)},
apz(d){var w=0,v=B.j(x.T),u,t,s
var $async$apz=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hS().a5A(A.eG),$async$apz)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fe(),$async$apz)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aZI(t,d),$async$apz)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apz,v)},
aZI(d,e){return C.hDg(d,e)},
hDg(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aZI=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c2(),$async$aZI)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.af("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aL(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.u(r)+"/"+1000*Date.now()+".mp4"
n=$.eX().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.ij("media")
w=8
return B.b(p.wZ(q,new Uint8Array(B.ce(d)),D.bBa),$async$aZI)
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
return B.i($async$aZI,v)},
Kw(d,e,f,g,h,i,j,k,l,m,n){var w=C.cB()
return C.eq(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bf,4280172719,2,d,0,0,"",D.cl,D.cP,l,m,n)},
fei(d,e,f,g,h,i,j,k,l){var w=C.cB()
return C.eq(A.bh,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bo,A.a6,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cl,D.f5,j,k,l)},
fXr(d,e,f,g,h,i,j,k){var w=C.cB(),v=A.k.D(i*0.0017,0.02,0.06)
return C.eq(h,!1,j,A.aD,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.cE,A.O,"",v,w,null,"","",0,!1,"",0,D.bf,4280172719,2,k,0,0,"",D.cl,D.cP,g,e,f)},
fdR(d,e,f,g){return C.fei(0,0.002,D.fr,g,0.8,"ul_"+B.u(d)+"_"+B.u(e),f,d,e+0.002)},
fXs(d,e,f,g,h,i,j,k){var w=C.cB()
return C.eq(A.qt,!1,j,A.aD,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.bo,A.a6,"",h,w,null,"","",0,!1,"",0,D.bf,4280172719,2,k,0,0,"",D.cl,D.cP,g,e,f)},
hgJ(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gH(A.a.ef(v,w,"").split(":"))},
bBb(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
l=C.hgJ(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.l6&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hG()}h=C.fZZ(u)
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
a1=A.d.gH(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.L)(w),++n){m=w[n]
l=C.hgJ(m)
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
A.d.bs(a1.z,new C.fyI(a2))}else A.d.bs(a1.z,new C.fyJ())
A.d.M(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fAH(a0))a0.ax=a6.f.a5().ac()
return a0},
fZZ(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fBu(D.a5d),l=C.cB(),k=x.u,j=B.a([C.eq(A.bh,!1,s,A.aD,"marriage_locked_bg",r,24,A.bo,A.a6,"",1,C.cB(),m,"","",0,!1,"",0,D.bf,q,2,"",0,0,"",D.cl,D.lz,1,0,0)],k),i=B.a([],k)
i.push(C.Kw("NGMY",A.L,236069181,52,A.bo,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Kw("TAREHE:",A.bh,o,16,A.bo,A.H,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fXr("tarehe",0.8059999999999999,0.026,0.18,A.bh,16,p,C.hgK()))
i.push(C.fdR(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Kw("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bo,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Kw("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cE,A.a6,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fei(0,0.002,D.fr,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fXs("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fXs("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fXs("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fei(268435456,0.175,D.bf,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Kw("VIDEO YA KIAPO",A.bh,o,10,A.bo,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.eq(A.bh,!1,s,A.aD,"__kiapo_video__",r,24,A.bo,A.a6,"",0.131,C.cB(),t,"","",0,!1,"",0,D.bf,q,2,"",0,0,"",D.cl,D.lz,0.77,0.115,0.492))
i.push(C.Kw("Rais Anayeapa:",A.bh,p,15,A.bo,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Kw("Jina:",A.bh,p,13,A.bo,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fXr("rais_jina",0.195,0.6930000000000001,0.62,A.bh,13,p,""))
i.push(C.fdR(0.195,0.7130000000000001,0.62,n))
i.push(C.Kw("Sahihi:",A.bh,p,13,A.bo,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.eq(A.bh,!1,s,A.aD,"marriage_sign_rais",0,24,A.bo,A.a6,"",0.07,C.cB(),t,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cl,D.f5,0.38,0.21500000000000002,0.73))
i.push(C.fdR(0.21500000000000002,0.795,0.38,n))
i.push(C.Kw("Tarehe:",A.bh,p,13,A.bo,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fXr("rais_tarehe",0.745,0.74,0.2,A.bh,12,p,C.hgK()))
i.push(C.fdR(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fei(0,0.032,D.bf,o,1,"state_box",0.72,0.14,0.875),C.Kw("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bo,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.ry(4294967035,t,0,0,j,l,D.qi,"","",u,D.df)
return C.BI(t,t,t,t,D.od,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cB(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
agf(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agf=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.I(x.q).f.R(D.eXD)
w=1
break}w=3
return B.b(C.V7(!0),$async$agf)
case 3:w=4
return B.b(C.aZJ(p),$async$agf)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hlR(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bQ(D.beL,null,new C.ftC(p),f,!0,!0,!1,A.lA,!1,!1,x.N),$async$agf)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.ca(null,null,!0,null,new C.ftD(),f,null,!0,!0,x.y),$async$agf)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fZZ(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.I(x.q).f
q.R(B.b2(null,null,null,null,null,A.r,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fZZ(p))
case 1:return B.h(u,v)}})
return B.i($async$agf,v)},
feR:function feR(){},
c9j:function c9j(){},
fyI:function fyI(d){this.a=d},
fyJ:function fyJ(){},
ftC:function ftC(d){this.a=d},
ftA:function ftA(d){this.a=d},
ftB:function ftB(d){this.a=d},
ftD:function ftD(){},
fty:function fty(d){this.a=d},
ftz:function ftz(d){this.a=d},
aq4:function aq4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDm:function aDm(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
e9H:function e9H(d){this.a=d},
e9F:function e9F(d){this.a=d},
e9G:function e9G(d){this.a=d},
e9I:function e9I(d){this.a=d},
e9J:function e9J(d){this.a=d},
wA(d,e,f,g,h,i,j,k,l,m,n){var w=C.cB()
return C.eq(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bo,h,"",i,w,null,"","",0,!1,"",j,D.bf,4280172719,2,d,0,0,"",D.cl,D.cP,l,m,n)},
hgm(d,e,f){var w=4291404327
return B.a([C.qa(0,f,D.eN,w,2,"ring_l",f,d-f*0.42,e),C.qa(0,f,D.eN,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fdh(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qa(4294967288,f,D.eN,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qa(h,s,D.eN,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qa(h,f*0.46,D.eN,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qa(d,e,f,g,h,i,j,k,l){var w=C.cB()
return C.eq(A.bh,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bo,A.a6,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cl,D.f5,j,k,l)},
fdg(d,e,f,g,h,i,j,k,l){var w=C.cB(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.eq(h,!1,k,A.aD,i?u+A.k.ab(g,3)+":"+A.o.ab(j,1):u+A.k.ab(g,3),4280640491,j,A.cE,A.O,"",v,w,null,"","",0,!1,"",0,D.bf,4280172719,2,l,0,0,"",D.cl,D.cP,g,e,f)},
byD(d,e,f,g){return C.qa(0,0.002,D.fr,g,0.8,"ul_"+B.u(d)+"_"+B.u(e),f,d,e+0.002)},
hgl(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qa(0,0.036,D.bf,h,1.4,"banner_box_"+d,w,v,e),C.wA(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hlB(){var w=new B.S(Date.now(),0,!1),v=new C.fzO()
return B.u(v.$1(B.bR(w)))+"/"+B.u(v.$1(B.bH(w)))+"/"+B.bA(w)},
hgn(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wA(r+".",A.bh,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fdg("witness_"+d+"_"+r+"_name",q,g,p,A.bh,!0,16,j,"[Jina la Shahidi]"),C.byD(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.wA("Sahihi:",A.bh,j,15,A.a6,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.eq(A.bh,!1,4279310375,A.aD,"marriage_sign_"+d+"_witness_"+r,0,24,A.bo,A.a6,"",0.05,C.cB(),null,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cl,D.f5,s,t,g-0.004),C.byD(t,g+0.044,s,w)],x.u)},
agG(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.dfG,D.ckh,D.d83,D.d9V],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.L)(s),++w)for(v=A.d.gae(s[w]);v.C();){u=v.gT(0)
if(u.a===d)return u}return null},
fWJ(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fBu(d.d),v=B.a([C.eq(A.bh,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bo,A.a6,"",1,C.cB(),w,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cl,D.lz,1,0,0)],x.u)
A.d.v(v,C.hRT(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hRT(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wA("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hgm(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hgm(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fdh(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fdh(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wA("\ud83c\udf33",A.L,4279898632,22,A.a6,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.qa(0,0.062,D.eN,b1,1.6,"crest_o",0.11,0.445,0.012),C.qa(0,0.046,D.eN,b1,1,"crest_i",0.084,0.458,0.02),C.wA("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.qa(0,0.002,D.fr,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qa(b9,0.016,D.l7,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qa(0,0.002,D.fr,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wA("TAREHE:",A.bh,c0,20,A.H,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fdg("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bh,!1,21,b9,C.hlB()),C.byD(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wA(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qa(c0,0.0026,D.bf,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qa(c3.e,0.138,D.bf,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cB()
c2.push(C.eq(A.bh,!1,b9,A.aD,"marriage_field_utangulizi:"+A.k.ab(0.82,3),b2,19,A.bo,A.cv,"",0.128,s,a9,"","",0,!1,"",0,D.bf,b3,2,c5,0,0,"",D.cl,D.cP,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qa(0,0.036,D.bf,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cB()
A.d.v(c2,B.a([s,C.eq(A.L,!1,c0,A.aD,"marriage_field_nimetowe_label:"+A.k.ab(r,3),b2,30,A.bo,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bf,b3,2,c7,0,0,"",D.cl,D.cP,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hgl(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wA(c9,A.bh,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fdg("mahari_"+p,0.132,k,m,A.bh,!1,16,b9,s)
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
d=B.a([new C.eG(""+1000*i+"_"+h,D.cP,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bo,A.aD,c0,A.bh,a9,D.bf,b2,b3,2,0,!1,s,0,D.cl,0,"","","","","",!1,0),j,new C.eG(""+1000*f+"_"+e,D.f5,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a6,A.bo,A.aD,b6,A.bh,a9,D.fr,0,b5,0.8,0,!1,g,0,D.cl,0,"","","","","",!1,0)],c1)
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
A.d.v(d,B.a([new C.eG(""+1000*s+"_"+p,D.cP,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bo,A.aD,b7,A.dP,a9,D.bf,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cl,0,"","","","","",!1,0),new C.eG(""+1000*i+"_"+h,D.f5,a1,a2,0.046,0.025875,"",24,A.a6,A.bo,A.aD,b6,A.bh,a9,D.bf,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cl,0,"","","","","",!1,0),new C.eG(""+1000*g+"_"+f,D.cP,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bo,A.aD,b7,A.L,a9,D.bf,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cl,0,"","","","","",!1,0),new C.eG(""+1000*e+"_"+a3,D.f5,a0,k,a1+0.046-a0,l,"",24,A.a6,A.bo,A.aD,b6,A.bh,a9,D.bf,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cl,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hgl("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a52||w===D.a54||w===D.a51||w===D.a53){w=t-0.008
A.d.v(c2,C.fdh(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fdh(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.qa(0,a4,D.bf,c0,1.3,"wit_table_border",0.82,0.09,t),C.qa(c0,a4,D.bf,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qa(0,0.0022,D.fr,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wA("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wA("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hgn("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hgn("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.qa(0,0.11,D.bf,c0,1.2,"mw_box",0.82,0.09,t),C.wA("MWANDISHI",A.bh,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wA("Jina:",A.bh,b9,15,A.a6,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fdg("mwandishi_jina",0.215,w,0.3116,A.bh,!0,15,b9,""),C.byD(0.215,p,0.3116,b5),C.wA("Sahihi:",A.bh,b9,15,A.a6,0.028,0,"mw_sl",0.09,0.5,w),C.eq(A.bh,!1,b6,A.aD,"marriage_sign_mwandishi",0,24,A.bo,A.a6,"",0.044,C.cB(),a9,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cl,D.f5,0.3161999999999999,0.5738,s-0.044),C.byD(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.qa(0,0.032,D.bf,c0,1,"state_box",0.7,0.15,a8),C.wA("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
i2I(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.h_D(d.d),p=new C.fzK(s),o=new C.fzL(s),n=d.z,m=n===D.a52||n===D.a54||n===D.a51||n===D.a53,l=n===D.aFo||n===D.a55||n===D.aFp,k=B.bT(0,B.fO(q,A.A,t,t,A.ce,A.bU,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a55?26:16
i.push(new C.fzN().$1$size(w))}if(n===D.aFq)i.push(D.fCF)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.ir,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.am)
n=B.I(r,A.q,1.1)
w=B.n(4)
i.push(B.p(t,B.w(B.a([p.$0(),D.aOy,p.$1$w(0.9),D.aOy,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.b9W,t,n,w,t,t,A.n),t,t,t,t,A.aj2,t,t,t))
i.push(A.am)
i.push(new C.fzM(r).$1("NIMETOWE"))
i.push(A.fF)
v=J.e6(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.Mg,new B.ck(A.aN,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a5),t,7,t,t,t,t,t,7),A.db,new B.bB(1,A.bg,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b4)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.V,t,A.b0,A.r,B.a([k,new B.D(A.ahF,B.w(i,A.ai,t,A.e,A.j,0,A.p),t)],j),t)},
hkW(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.agG(e,t)
if(r==null)r=A.d.gH(D.GR)
w=C.cB()
v=C.ry(r.e,t,0,0,C.fWJ(r,0.165,y.O,D.daw,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.qi,"","",s,D.df)
w=C.cB()
u=A.a.i(d)
if(u.length===0)u=t
return C.BI(t,t,t,t,D.od,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hkX(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.agG(e,t)
if(r==null)r=A.d.gH(D.GR)
w=C.cB()
v=C.ry(r.e,t,0,0,C.fWJ(r,0.165,y.f,D.d6a,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.qi,"","",s,D.df)
w=C.cB()
u=A.a.i(d)
if(u.length===0)u=t
return C.BI(t,t,t,t,D.od,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bCx(d,e,f){var w=0,v=B.j(x.T),u
var $async$bCx=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bQ(A.K,null,new C.fLq(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCx,v)},
agg(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agg=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("a_<1>")
p=B.C(new B.a_(i,new C.ftG(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bQ(D.Lu,null,new C.ftH(p),d,!0,!0,!1,A.lA,!1,!1,x.N),$async$agg)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hG())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCx(d,"Hati ya Kuhowa",D.GR),$async$agg)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Lb(d,"Tafuta jimbo\u2026","",A.ka,"Chagua jimbo"),$async$agg)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hkW(r,s))
case 1:return B.h(u,v)}})
return B.i($async$agg,v)},
agh(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$agh=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("a_<1>")
p=B.C(new B.a_(i,new C.ftK(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bQ(D.Lu,null,new C.ftL(p),d,!0,!0,!1,A.lA,!1,!1,x.N),$async$agh)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hG())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCx(d,"Hati ya Kuhoweya",D.GR),$async$agh)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Lb(d,"Tafuta jimbo\u2026","",A.ka,"Chagua jimbo"),$async$agh)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hkX(r,s))
case 1:return B.h(u,v)}})
return B.i($async$agh,v)},
agi(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$agi=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.T(i).k("a_<1>")
m=B.C(new B.a_(i,new C.ftO(),n),n.k("J.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bQ(D.Lu,null,new C.ftP(m),d,!0,!0,!1,A.lA,!1,!1,x.N),$async$agi)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(m).hG())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCx(d,"Malipo ya Awamu ya Mahari",D.QA),$async$agi)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Lb(d,"Tafuta jimbo\u2026","",A.ka,"Chagua jimbo"),$async$agi)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.agG(s,D.QA)
if(q==null)q=A.d.gH(D.QA)
n=C.cB()
p=C.ry(q.e,null,0,0,C.fWJ(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.d13,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.qi,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.df)
n=C.cB()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.BI(null,null,null,null,D.od,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agi,v)},
xA:function xA(d,e){this.a=d
this.b=e},
jn:function jn(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fzO:function fzO(){},
fzK:function fzK(d){this.a=d},
fzM:function fzM(d){this.a=d},
fzN:function fzN(){},
fzL:function fzL(d){this.a=d},
fLq:function fLq(d,e){this.a=d
this.b=e},
ad_:function ad_(d,e,f){this.c=d
this.d=e
this.a=f},
dXi:function dXi(d,e,f){this.a=d
this.b=e
this.c=f},
dXh:function dXh(d,e){this.a=d
this.b=e},
dXg:function dXg(d,e){this.a=d
this.b=e},
acp:function acp(d,e,f){this.c=d
this.d=e
this.a=f},
ftG:function ftG(){},
ftH:function ftH(d){this.a=d},
ftE:function ftE(d){this.a=d},
ftF:function ftF(d){this.a=d},
ftK:function ftK(){},
ftL:function ftL(d){this.a=d},
ftI:function ftI(d){this.a=d},
ftJ:function ftJ(d){this.a=d},
ftO:function ftO(){},
ftP:function ftP(d){this.a=d},
ftM:function ftM(d){this.a=d},
ftN:function ftN(d){this.a=d},
Kz(d,e,f,g,h,i,j,k,l,m){var w=C.cB()
return C.eq(e,!1,f,A.aD,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bo,h,"",i,w,null,"","",0,!1,"",0,D.bf,4280172719,2,d,0,0,"",D.cl,D.cP,k,l,m)},
CI(d,e,f,g,h,i,j,k,l){var w=C.cB()
return C.eq(A.bh,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bo,A.a6,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cl,D.f5,j,k,l)},
hh3(d,e,f){return C.CI(0,0.002,D.fr,4293056712,0.8,"ul_"+B.u(d)+"_"+B.u(e),f,d,e+0.022)},
byN(d,e,f,g,h){return B.a([C.CI(4294967288,0.032,D.bf,4291404327,1.15,"pill_"+d,g,f,e),C.Kz(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fXw(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.u(e)
return B.a([C.CI(0,0.002,D.fr,g,1,"orn_l_"+t,u,d,v),C.CI(h,0.016,D.l7,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.CI(0,0.002,D.fr,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a0Y(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.Kz(d,A.bh,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cB()
return B.a([v,C.eq(A.L,!1,j,A.aD,"marriage_field_"+e+":"+A.k.ab(t,3),4280640491,i,A.cE,A.O,"",0.02,s,null,"","",0,!1,"",0,D.bf,4280172719,2,k,0,0,"",D.cl,D.cP,t,u,g-0.002),C.hh3(u,g+0.018,t)],x.u)},
hh4(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.CI(h,0.028,D.bf,h,0,"chv_"+d,g,e,f),C.CI(w,0.024,D.l7,w,0,"chv_l_"+d,0.024,e-0.008,v),C.CI(w,0.024,D.l7,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.Kz(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
byM(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.Kz("Sahihi:",A.bh,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.eq(A.bh,!1,4279310375,A.aD,"marriage_sign_"+d,0,24,A.bo,A.a6,"",0.032,C.cB(),null,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cl,D.f5,v,w,f-0.006),C.hh3(w,f+0.016,v)],x.u)},
h_E(d){var w,v
for(w=0;w<19;++w){v=D.QP[w]
if(v.a===d)return v}return null},
i4Z(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.agG(A.a.b3(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.agG(A.a.b3(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b3(k,18)
w=C.agG(u,D.QA)
v=w==null?l:w.d
if(v==null){w=C.agG(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.h_E(A.a.b3(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hhT.a8(0)
$.hi5.a8(0)
t=C.fBu(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.L)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
h0K(d){var w=0,v=B.j(x.T),u
var $async$h0K=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bQ(A.K,null,new C.fMT(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h0K,v)},
xD:function xD(d,e){this.a=d
this.b=e},
nJ:function nJ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
biv:function biv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fMT:function fMT(){},
ad2:function ad2(d){this.a=d},
ee3:function ee3(d,e){this.a=d
this.b=e},
ee2:function ee2(d){this.a=d},
ee1:function ee1(d,e){this.a=d
this.b=e},
aeI:function aeI(d,e,f){this.c=d
this.d=e
this.a=f},
h_D(d){return $.hi5.c7(0,d,new C.fBw(d))},
fBu(d){return $.hhT.c7(0,d,new C.fBv(d))},
fA(d){return B.fQT(d>>>16&255,d>>>8&255,d&255,255)},
hUZ(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hjb(4294570461,4293910718,4284234270,u)
case 1:return C.hjb(4294635750,4293975240,t,4292912216)
case 2:w=C.fbQ(s,4294505966,r)
C.byx(w,14,16,p)
C.ku(w,8,9,464,836,u,1.2)
C.CE(w,2,2,1,1,u,10)
C.CE(w,478,2,-1,1,u,10)
C.CE(w,2,852,1,-1,u,10)
C.CE(w,478,852,-1,-1,u,10)
return w
case 3:return C.fbQ(4294966515,4294373082,4289102906)
case 4:return C.hPI(C.fbQ(4294376440,4293653998,4290287194))
case 5:w=C.fbQ(4294965238,4294437098,4288444980)
C.byx(w,14,16,4283043359)
C.ku(w,6,7,468,840,u,1)
C.ku(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hu(q,q,A.ca,0,A.e5,854,q,0,3,q,A.ca,480,!1)
C.yw(v,n,4294175448)
C.rV(v,n)
C.ku(v,24,24,432,806,4286209070,1)
C.a0L(v,12,12,468,12,o,3,20)
C.a0L(v,12,842,468,842,o,3,20)
C.a0L(v,12,12,12,842,o,3,20)
C.a0L(v,468,12,468,842,o,3,20)
return v
case 7:return C.hNO(4294440434,4293518297,4280228630,r)
case 8:v=B.hu(q,q,A.ca,0,A.e5,854,q,0,3,q,A.ca,480,!1)
C.yw(v,m,4293911504)
C.rV(v,m)
C.ku(v,28,28,424,798,l,1)
C.fl_(v,28,28,l,k)
C.fl_(v,452,28,l,k)
C.fl_(v,28,826,l,k)
C.fl_(v,452,826,l,k)
return v
case 9:v=B.hu(q,q,A.ca,0,A.e5,854,q,0,3,q,A.ca,480,!1)
C.yw(v,j,4294111986)
C.rV(v,j)
C.ku(v,18,18,444,818,4292401368,0.7)
B.iL(v,!0,C.fA(p),0,13,0,853)
return v
case 10:return C.hRF(i,4294173372)
case 11:return C.hSM(4294439140,4293449662)
case 12:return C.hNG(h,4294239432)
case 13:return C.hSd(4294244340,4293193448)
case 14:return C.hWz(4294505710,4293780694)
case 15:return C.faM(4294966259,4294439138,o,p,q)
case 16:return C.faM(4294966776,4294178544,o,g,g)
case 17:return C.faM(4294965493,4294504170,o,4286200650,q)
case 18:return C.faM(4294966519,4294373862,o,p,p)
case 19:return C.hQN()
case 20:return C.hQO()
case 21:v=B.hu(q,q,A.ca,0,A.e5,854,q,0,3,q,A.ca,480,!1)
C.yw(v,h,4293976768)
C.rV(v,h)
C.byx(v,14,16,p)
B.iL(v,!0,C.fA(u),4,475,4,9)
B.iL(v,!0,C.fA(u),4,475,844,849)
B.iL(v,!0,C.fA(u),4,9,4,849)
B.iL(v,!0,C.fA(u),470,475,4,849)
C.a0L(v,10,12,470,12,u,2,16)
C.a0L(v,10,842,470,842,u,2,16)
C.a0L(v,10,12,10,842,u,2,18)
C.a0L(v,470,12,470,842,u,2,18)
C.CE(v,2,2,1,1,t,10)
C.CE(v,478,2,-1,1,t,10)
C.CE(v,2,852,1,-1,t,10)
C.CE(v,478,852,-1,-1,t,10)
C.ku(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hu(q,q,A.ca,0,A.e5,854,q,0,3,q,A.ca,480,!1)
C.yw(v,s,4294438872)
C.rV(v,s)
C.ku(v,14,16,452,822,o,2.2)
C.ku(v,22,24,436,806,o,1)
C.fYR(v,!1,!1,o,p,p,36,14,16)
C.kK(v,240,20,7,o,!0)
C.kK(v,240,834,7,o,!0)
C.kK(v,18,427,7,o,!0)
C.kK(v,462,427,7,o,!0)
return v
case 23:v=B.hu(q,q,A.ca,0,A.e5,854,q,0,3,q,A.ca,480,!1)
C.yw(v,i,4293910712)
C.rV(v,i)
B.iL(v,!0,C.fA(u),0,479,0,20)
B.iL(v,!0,C.fA(u),0,479,834,853)
B.iL(v,!0,C.fA(u),0,20,0,853)
B.iL(v,!0,C.fA(u),460,479,0,853)
B.iL(v,!0,C.fA(f),5,474,5,9)
B.iL(v,!0,C.fA(f),5,474,844,848)
B.iL(v,!0,C.fA(f),5,9,5,848)
B.iL(v,!0,C.fA(f),470,474,5,848)
C.ku(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hu(q,q,A.ca,0,A.e5,854,q,0,3,q,A.ca,480,!1)
C.yw(v,e,4294174404)
C.rV(v,e)
C.byx(v,14,16,p)
B.iL(v,!0,C.fA(u),3,476,3,8)
B.iL(v,!0,C.fA(u),3,476,845,850)
B.iL(v,!0,C.fA(u),3,8,3,850)
B.iL(v,!0,C.fA(u),471,476,3,850)
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
rV(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.f5()
n.dU(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.az(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.az(v==null?0:v)
v=d.a
s=v==null?o:v.dT(u,t,o)
if(s==null)s=new B.iG()
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
hjb(d,e,f,g){var w=null,v=B.hu(w,w,A.ca,0,A.e5,854,w,0,3,w,A.ca,480,!1)
C.yw(v,d,e)
C.rV(v,d)
B.iL(v,!0,C.fA(f),0,479,0,28)
B.iL(v,!0,C.fA(f),0,479,826,853)
B.iL(v,!0,C.fA(f),0,28,0,853)
B.iL(v,!0,C.fA(f),452,479,0,853)
C.ku(v,5,5,470,844,g,1.1)
C.ku(v,28,28,424,798,g,1.6)
C.CE(v,2,2,1,1,g,11)
C.CE(v,478,2,-1,1,g,11)
C.CE(v,2,852,1,-1,g,11)
C.CE(v,478,852,-1,-1,g,11)
return v},
fbQ(d,e,f){var w=null,v=B.hu(w,w,A.ca,0,A.e5,854,w,0,3,w,A.ca,480,!1)
C.yw(v,d,e)
C.rV(v,d)
C.ku(v,14,16,452,822,f,1.6)
C.ku(v,20,22,440,810,f,0.8)
return v},
byx(d,e,f,g){var w,v=C.fA(g)
B.iL(d,!0,v,0,479,0,f-1)
w=854-f
B.iL(d,!0,v,0,479,w,853);--w
B.iL(d,!0,v,0,e-1,f,w)
B.iL(d,!0,v,480-e,479,f,w)},
hPI(d){var w,v,u=4291404327
C.byx(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kK(d,w,8,3,u,!0)
C.kK(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kK(d,7,v,3,u,!0)
C.kK(d,473,v,3,u,!0)}return d},
fo9(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jg(e,f),new B.jg(e+g*n,f),new B.jg(e,f+h*n)],t)
B.a1w(d,C.fA(m),s)
w=A.o.D(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jg(s,u),new B.jg(e+g*v,u),new B.jg(s,f+h*v)],t)
B.a1w(d,C.fA(k),t)
t=A.k.V(n*0.39)
C.kK(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kK(d,e+g*t,f+h*3,4,k,!0)
C.kK(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kK(d,e+g*t,f,5,k,!0)
C.kK(d,e,f+h*t,5,k,!0)}},
fYR(d,e,f,g,h,i,j,k,l){var w,v
C.fo9(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fo9(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fo9(d,k,v,1,-1,e,f,g,h,i,j)
C.fo9(d,w,v,-1,-1,e,f,g,h,i,j)},
a0L(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.l3(d,!0,A.dd,new B.r3(p),null,A.cX,j,r,q)}},
fn7(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kM(d,!0,A.dd,new B.r3(o),null,A.cX,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kM(d,!0,A.dd,new B.r3(o),null,A.cX,1.4,q,q,p,p+h*r)}},
hNO(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hu(o,o,A.ca,0,A.e5,854,o,0,3,o,A.ca,480,!1)
C.yw(n,d,e)
C.rV(n,d)
C.ku(n,20,20,440,814,f,1.2)
C.fn7(n,0,0,1,1,g)
C.fn7(n,480,0,-1,1,g)
C.fn7(n,0,854,1,-1,g)
C.fn7(n,480,854,-1,-1,g)
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
B.kM(n,!0,A.dd,new B.r3(p),o,A.cX,1.2,240,r,60,q)}return n},
fl_(d,e,f,g,h){var w
C.frs(d,!0,C.fA(g),13,e,f)
C.frs(d,!0,C.fA(g),9,e,f)
w=B.a([new B.jg(e,f-4),new B.jg(e+4,f),new B.jg(e,f+4),new B.jg(e-4,f)],x.J)
B.a1w(d,C.fA(h),w)},
kK(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jg(e,v),new B.jg(u,f),new B.jg(e,t),new B.jg(s,f)],x.J)
if(i){B.a1w(d,C.fA(h),r)
return}B.kM(d,!0,A.dd,C.fA(h),w,A.cX,1,e,u,v,f)
B.kM(d,!0,A.dd,C.fA(h),w,A.cX,1,u,e,f,t)
B.kM(d,!0,A.dd,C.fA(h),w,A.cX,1,e,s,t,f)
B.kM(d,!0,A.dd,C.fA(h),w,A.cX,1,s,e,f,v)},
faL(d,e,f,g,h,i,j){var w,v=B.a([new B.jg(e,f),new B.jg(e+g*28,f),new B.jg(e,f+h*28)],x.J)
B.a1w(d,C.fA(i),v)
v=e+g*14
w=f+h*14
C.kK(d,v,w,6,j,!0)
C.kK(d,v,w,3,i,!0)},
faM(d,e,f,g,h){var w=null,v=B.hu(w,w,A.ca,0,A.e5,854,w,0,3,w,A.ca,480,!1)
C.yw(v,d,e)
C.rV(v,d)
C.ku(v,18,18,444,818,f,2)
C.ku(v,26,26,428,802,f,0.9)
if(h!=null)B.iL(v,!0,C.fA(h),28,451,28,34)
C.faL(v,18,18,1,1,g,f)
C.faL(v,462,18,-1,1,g,f)
C.faL(v,18,836,1,-1,g,f)
C.faL(v,462,836,-1,-1,g,f)
return v},
hQN(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hu(v,v,A.ca,0,A.e5,854,v,0,3,v,A.ca,480,!1)
C.yw(r,u,4294240980)
C.rV(r,u)
C.ku(r,10,12,460,830,t,3.2)
C.ku(r,18,20,444,814,s,1.2)
C.ku(r,24,26,432,802,t,1.8)
C.fYR(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kK(r,w,16,3,t,!0)
C.kK(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kK(r,16,w,3,t,!0)
C.kK(r,464,w,3,t,!0)}return r},
hQO(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hu(t,t,A.ca,0,A.e5,854,t,0,3,t,A.ca,480,!1)
C.yw(p,s,4294373080)
C.rV(p,s)
C.ku(p,16,18,448,818,r,2.4)
C.ku(p,24,26,432,802,4286209044,1)
w=new C.fd8(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fYR(p,!1,!0,r,q,q,34,16,18)
return p},
bzd(d,e,f,g,h,i){B.iL(d,!0,C.fA(i),e,e+g,f,f+h)},
bA2(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
hRE(d,e,f,g,h,i){var w,v,u,t,s,r,q
if(i){w=e+g-1
v=0
for(;;){if(!(v<g&&f+v<854))break
u=h[A.o.F(A.o.am(v,5),6)]
t=f+v
s=Math.min(w,479)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kM(d,!1,A.dd,new B.r3(r),null,A.cX,1,e,s,t,t);++v}return}w=f+g-1
q=0
for(;;){if(!(q<g&&e+q<480))break
u=h[A.o.F(A.o.am(q,5),6)]
t=e+q
s=Math.min(w,853)
r=new Uint8Array(4)
r[0]=u>>>16&255
r[1]=u>>>8&255
r[2]=u&255
r[3]=255
B.kM(d,!1,A.dd,new B.r3(r),null,A.cX,1,t,t,f,s);++q}},
hRF(d,e){var w,v,u=null,t=B.hu(u,u,A.ca,0,A.e5,854,u,0,3,u,A.ca,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hRE(t,v,w,30,D.cUJ,(A.o.am(v,30)+A.o.am(w,30)&1)===0)
C.bzd(t,44,44,392,766,d)
C.bA2(t,44,44,392,766,d,e)
C.rV(t,d)
C.ku(t,44,44,392,766,4292128567,2.2)
C.ku(t,50,50,380,754,4279898632,0.8)
return t},
hSL(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.kK(d,e,f,7,h,!0)
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
B.kM(d,!0,A.dd,new B.r3(p),o,A.cX,1.2,w,v,q,q)}break
default:B.kM(d,!0,A.dd,C.fA(h),o,A.cX,1.5,e-8,e+8,f,f)
B.kM(d,!0,A.dd,C.fA(h),o,A.cX,1.5,e,e,f-8,f+8)
B.l3(d,!0,A.dd,C.fA(h),o,A.cX,2,e,f)}},
hSM(d,e){var w,v,u,t,s=null,r=B.hu(s,s,A.ca,0,A.e5,854,s,0,3,s,A.ca,480,!1)
B.iL(r,!0,C.fA(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hSL(r,u,v,w,4292391514)}C.bzd(r,46,46,388,762,d)
C.bA2(r,46,46,388,762,d,e)
C.rV(r,d)
C.ku(r,46,46,388,762,4291404327,1.8)
return r},
hez(d,e,f,g){C.frs(d,!0,C.fA(g),16,e,f)
C.frs(d,!0,C.fA(g),11,e,f)
C.kK(d,e,f,6,g,!0)
B.kM(d,!0,A.dd,C.fA(g),null,A.cX,1.3,e-14,e+14,f,f)
B.kM(d,!0,A.dd,C.fA(g),null,A.cX,1.3,e,e,f-14,f+14)},
hNG(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hu(v,v,A.ca,0,A.e5,854,v,0,3,v,A.ca,480,!1)
B.iL(s,!0,C.fA(4280948752),0,479,0,853)
B.iL(s,!0,C.fA(u),0,479,0,78)
B.iL(s,!0,C.fA(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hez(s,w,39,t)
C.hez(s,w,815,t)}C.bzd(s,38,92,404,670,d)
C.bA2(s,38,92,404,670,d,e)
C.rV(s,d)
C.ku(s,38,92,404,670,t,1.8)
C.ku(s,45,99,390,656,4287322667,0.8)
return s},
hSc(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jg(e,f),new B.jg(q-5,w),new B.jg(q,f-(18-Math.abs(r)*3)),new B.jg(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a1w(d,new B.r3(o),p)}B.l3(d,!0,A.dd,C.fA(4292128567),null,A.cX,3,e,f)},
hSd(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hu(s,s,A.ca,0,A.e5,854,s,0,3,s,A.ca,480,!1)
C.yw(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kM(q,!0,A.dd,new B.r3(v),s,A.cX,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kM(q,!0,A.dd,new B.r3(u),s,A.cX,1.1,v,v,0,853)}B.iL(q,!0,C.fA(r),0,479,0,70)
B.iL(q,!0,C.fA(r),0,479,798,853)
for(t=0;t<5;++t)C.hSc(q,70+t*85,48,4292128567)
C.bzd(q,48,78,384,712,d)
C.bA2(q,48,78,384,712,d,e)
C.rV(q,d)
C.ku(q,48,78,384,712,4291404327,1.6)
return q},
hWz(d,e){var w,v,u,t=null,s=4279970378,r=B.hu(t,t,A.ca,0,A.e5,854,t,0,3,t,A.ca,480,!1)
B.iL(r,!0,C.fA(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kK(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.l3(r,!0,A.dd,new B.r3(u),t,A.cX,1,v,w)}C.bzd(r,40,40,400,774,d)
C.bA2(r,40,40,400,774,d,e)
C.rV(r,d)
C.ku(r,40,40,400,774,4291058750,2)
C.ku(r,48,48,384,758,s,0.8)
return r},
kT:function kT(d,e){this.a=d
this.b=e},
fBw:function fBw(d){this.a=d},
fBv:function fBv(d){this.a=d},
fd8:function fd8(d){this.a=d},
fC9(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hSF(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fXp(d){var w,v,u,t=null,s=A.a.cK(d,"{"),r=A.a.oF(d,"}")
if(s<0||r<=s)return t
try{w=A.S.aL(0,Ah.agC(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
af6(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$af6=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vl(null,""),$async$af6)
case 3:n=g
if(A.a.i(n).length===0)throw B.V("AI is not available right now. Please try again later.")
t=B.n4(n)
if(e==null)s=A.hC
else{r=C.hSF(e)
s=B.a([new B.a_L(A.cJ.gct().aK(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qU(t,d,s,"news",E.Fl),$async$af6)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.V(q!=null&&B.L0(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$af6,v)},
bBF(d){return C.i4F(d)},
i4F(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bBF=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.S.ao(d.ag(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.af6(r,null),$async$bBF)
case 7:q=f
p=C.fXp(q)
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
return B.i($async$bBF,v)},
hit(d){var w,v=F.fZV(d)
v=B.aL(v,"book","newspaper")
if(F.a1P(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fG4(d,e,f,g){return C.i6w(d,e,f,g)},
i6w(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fG4=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fC9(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hm_()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.af6('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hit(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fG4)
case 3:r=m.fXp(i)
if(r==null)throw B.V(y.S)
q=new C.zB(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","").aCi(r)
t=q.r
if(t.length===0)throw B.V("The AI did not write a story. Try again.")
s=n+" "+A.d.aH(t," ")
if(F.a1P(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a1P(A.d.aH(t," "))==="sw"?C.bBF(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fG4,v)},
bB9(d,e,f,g,h){return C.i2h(d,e,f,g,h)},
i2h(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bB9=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fO(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.L)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aH(l,"\n")
l=C.hm_()
k=A.S.ao(d.ag(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.af6('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hit(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bB9)
case 3:p=j.fXp(a0)
if(p==null)throw B.V(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cJ(o)){n=d.aCi(B.a2(o,x.N,x.z))
m=A.S.ao(n.ag(),null)!==A.S.ao(d.ag(),null)}else{n=d
m=!1}w=m&&F.a1P(A.d.aH(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bBF(n),$async$bB9)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a7C(A.a.i(B.u(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bB9,v)},
a7C:function a7C(d,e,f){this.a=d
this.b=e
this.c=f},
i9j(d,e){return B.a4(d,!1).cm(B.e9(new C.fN3(e),!0,null,x.H))},
fN3:function fN3(d){this.a=d},
VA:function VA(d,e){this.c=d
this.a=e},
aDD:function aDD(d,e,f,g,h,i,j,k){var _=this
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
eh0:function eh0(d){this.a=d},
eh_:function eh_(){},
eh1:function eh1(d){this.a=d},
egZ:function egZ(d,e){this.a=d
this.b=e},
eh2:function eh2(){},
egD:function egD(d,e){this.a=d
this.b=e},
egz:function egz(d,e){this.a=d
this.b=e},
egK:function egK(d){this.a=d},
egL:function egL(d,e){this.a=d
this.b=e},
egM:function egM(d){this.a=d},
egF:function egF(d,e){this.a=d
this.b=e},
egG:function egG(d,e){this.a=d
this.b=e},
egH:function egH(d,e){this.a=d
this.b=e},
egI:function egI(d){this.a=d},
egJ:function egJ(d){this.a=d},
egE:function egE(d,e){this.a=d
this.b=e},
egB:function egB(d){this.a=d},
egC:function egC(d){this.a=d},
egS:function egS(d){this.a=d},
egT:function egT(d){this.a=d},
egR:function egR(d){this.a=d},
egU:function egU(d,e){this.a=d
this.b=e},
egQ:function egQ(d,e){this.a=d
this.b=e},
egV:function egV(d){this.a=d},
egP:function egP(d){this.a=d},
egW:function egW(d){this.a=d},
egO:function egO(d){this.a=d},
egX:function egX(d,e){this.a=d
this.b=e},
egN:function egN(d,e){this.a=d
this.b=e},
egY:function egY(d){this.a=d},
egA:function egA(d,e){this.a=d
this.b=e},
fB5(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fB5=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hg5){w=1
break}r=new C.fB6()
t=4
q=x.s
w=7
return B.b(B.iO(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fB5)
case 7:$.hg5=!0
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
return B.i($async$fB5,v)},
bBw(d){return A.Hb[B.mA(d)-1]+", "+A.p4[B.bH(d)-1]+" "+B.bR(d)+", "+B.bA(d)},
hVD(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dk_[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
h_j(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fF(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a_(v,new C.fzo(),B.T(v).k("a_<1>")))
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
continue}o=new C.fzq(j,h)
n=new C.fzp(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.am(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iY(o.$1(l)))
j.a+=l}return u},
fX8(d,e){var w=new C.fcJ()
return A.d.cM(e,0,new C.fcH(w))>=A.d.cM(d,0,new C.fcI(w))},
hdd(d){var w,v,u=new B.aO($.W().r,A.ao,null,null,B.a([],x.v))
u.E(new B.b5(46,0))
w=d.a
u.E(new B.ap(w,0))
v=d.b
u.E(new B.ap(w,v-46))
u.E(new B.ap(w-46,v))
u.E(new B.ap(0,v))
u.E(new B.ap(0,46))
u.E(new B.bE())
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
cd_:function cd_(d){this.a=d},
ccY:function ccY(){},
ccZ:function ccZ(){},
tm:function tm(d,e){this.a=d
this.b=e},
Bu:function Bu(d,e){this.a=d
this.b=e},
lh:function lh(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fB6:function fB6(){},
fzo:function fzo(){},
fzq:function fzq(d,e){this.a=d
this.b=e},
fzp:function fzp(d,e,f){this.a=d
this.b=e
this.c=f},
fcJ:function fcJ(){},
fcK:function fcK(){},
fcH:function fcH(d){this.a=d},
fcI:function fcI(d){this.a=d},
b0d:function b0d(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cd0:function cd0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cd1:function cd1(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cd2:function cd2(d){this.a=d},
bbN:function bbN(d){this.a=d},
bbM:function bbM(d,e){this.b=d
this.a=e},
bta:function bta(d){this.a=d},
b8k:function b8k(d,e){this.b=d
this.a=e},
bqF:function bqF(d,e){this.b=d
this.a=e},
ho_(d,e){return B.a4(d,!1).cm(B.e9(new C.fN6(e,null),!0,null,x.E))},
fN6:function fN6(d,e){this.a=d
this.b=e},
VB:function VB(d,e,f){this.c=d
this.d=e
this.a=f},
aDF:function aDF(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
ehy:function ehy(){},
ehz:function ehz(d){this.a=d},
ehx:function ehx(d,e){this.a=d
this.b=e},
ehl:function ehl(d){this.a=d},
ehm:function ehm(d){this.a=d},
ehs:function ehs(d){this.a=d},
eht:function eht(d,e){this.a=d
this.b=e},
ehq:function ehq(d){this.a=d},
ehr:function ehr(d,e,f){this.a=d
this.b=e
this.c=f},
ehn:function ehn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ehu:function ehu(d,e){this.a=d
this.b=e},
ehp:function ehp(d,e){this.a=d
this.b=e},
ehv:function ehv(d){this.a=d},
eho:function eho(d,e){this.a=d
this.b=e},
ehw:function ehw(d,e){this.a=d
this.b=e},
bbj:function bbj(d,e,f){this.b=d
this.c=e
this.a=f},
i9p(d){return B.a4(d,!1).cm(B.e9(new C.fNm(),!0,null,x.I))},
byZ(d,e){var w,v,u,t,s,r,q=B.c3(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fYy(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fNm:function fNm(){},
a_C:function a_C(d){this.a=d},
oB:function oB(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aF1:function aF1(d,e,f,g,h,i,j,k,l){var _=this
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
_.aB=_.aJ=_.aE=_.aw=_.Z=_.b8=_.bi=_.y2=0
_.b0=null
_.b_=0.25
_.bb=null
_.bI=0.5
_.aG=1
_.c6=_.bB=_.bh=0
_.cJ=_.c4=!1
_.c=_.a=null},
eQJ:function eQJ(d){this.a=d},
ePB:function ePB(d,e){this.a=d
this.b=e},
ePZ:function ePZ(d,e){this.a=d
this.b=e},
eQ8:function eQ8(d){this.a=d},
ePk:function ePk(d){this.a=d},
ePl:function ePl(d){this.a=d},
ePi:function ePi(d){this.a=d},
ePj:function ePj(d){this.a=d},
ePS:function ePS(d,e){this.a=d
this.b=e},
ePT:function ePT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQ4:function eQ4(d,e,f){this.a=d
this.b=e
this.c=f},
eQ3:function eQ3(d,e){this.a=d
this.b=e},
eQ5:function eQ5(d,e){this.a=d
this.b=e},
eQ2:function eQ2(d,e){this.a=d
this.b=e},
eQ7:function eQ7(d,e,f){this.a=d
this.b=e
this.c=f},
eQ6:function eQ6(d,e){this.a=d
this.b=e},
ePa:function ePa(d){this.a=d},
ePb:function ePb(d){this.a=d},
ePc:function ePc(d){this.a=d},
eP9:function eP9(){},
ePd:function ePd(d,e){this.a=d
this.b=e},
eP8:function eP8(d,e){this.a=d
this.b=e},
ePf:function ePf(){},
ePe:function ePe(d,e){this.a=d
this.b=e},
eP7:function eP7(d,e){this.a=d
this.b=e},
eP4:function eP4(d,e){this.a=d
this.b=e},
ePg:function ePg(d){this.a=d},
eP6:function eP6(d,e){this.a=d
this.b=e},
ePh:function ePh(d){this.a=d},
eP5:function eP5(d,e){this.a=d
this.b=e},
eQy:function eQy(d,e){this.a=d
this.b=e},
eQF:function eQF(d){this.a=d},
eQG:function eQG(d,e){this.a=d
this.b=e},
eQH:function eQH(){},
eQz:function eQz(d,e){this.a=d
this.b=e},
eQx:function eQx(d,e){this.a=d
this.b=e},
eQA:function eQA(d,e){this.a=d
this.b=e},
eQw:function eQw(d,e){this.a=d
this.b=e},
eQB:function eQB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQv:function eQv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQC:function eQC(d){this.a=d},
eQD:function eQD(d,e){this.a=d
this.b=e},
eQE:function eQE(d){this.a=d},
eQu:function eQu(d){this.a=d},
eQh:function eQh(d){this.a=d},
eQi:function eQi(d){this.a=d},
eQg:function eQg(d,e){this.a=d
this.b=e},
eQb:function eQb(d,e){this.a=d
this.b=e},
eQj:function eQj(d){this.a=d},
eQm:function eQm(d){this.a=d},
eQf:function eQf(d){this.a=d},
eQn:function eQn(d){this.a=d},
eQo:function eQo(d){this.a=d},
eQp:function eQp(d){this.a=d},
eQq:function eQq(d){this.a=d},
eQe:function eQe(d){this.a=d},
eQr:function eQr(d){this.a=d},
eQd:function eQd(d){this.a=d},
eQs:function eQs(d,e){this.a=d
this.b=e},
eQc:function eQc(d,e){this.a=d
this.b=e},
eQt:function eQt(d){this.a=d},
eQk:function eQk(d){this.a=d},
eQl:function eQl(d){this.a=d},
ePW:function ePW(d){this.a=d},
ePV:function ePV(d){this.a=d},
ePX:function ePX(d,e){this.a=d
this.b=e},
ePU:function ePU(d,e){this.a=d
this.b=e},
ePY:function ePY(d){this.a=d},
ePO:function ePO(d){this.a=d},
ePN:function ePN(d){this.a=d},
ePP:function ePP(d){this.a=d},
ePM:function ePM(d){this.a=d},
ePQ:function ePQ(d,e){this.a=d
this.b=e},
ePL:function ePL(d,e){this.a=d
this.b=e},
ePK:function ePK(d,e){this.a=d
this.b=e},
ePs:function ePs(d){this.a=d},
ePt:function ePt(d){this.a=d},
ePu:function ePu(d){this.a=d},
ePv:function ePv(d){this.a=d},
ePw:function ePw(d){this.a=d},
ePx:function ePx(d){this.a=d},
ePy:function ePy(d){this.a=d},
ePz:function ePz(d){this.a=d},
ePA:function ePA(d){this.a=d},
eOO:function eOO(d){this.a=d},
eOP:function eOP(d){this.a=d},
eOQ:function eOQ(d){this.a=d},
eOR:function eOR(d){this.a=d},
eOS:function eOS(d){this.a=d},
eON:function eON(d){this.a=d},
eOT:function eOT(d){this.a=d},
eOU:function eOU(d){this.a=d},
ePm:function ePm(d){this.a=d},
ePn:function ePn(d){this.a=d},
ePo:function ePo(d){this.a=d},
ePp:function ePp(d){this.a=d},
ePq:function ePq(d){this.a=d},
eOY:function eOY(d){this.a=d},
eOZ:function eOZ(d){this.a=d},
eP_:function eP_(d){this.a=d},
eP0:function eP0(d){this.a=d},
eP1:function eP1(d){this.a=d},
eOX:function eOX(d){this.a=d},
eP2:function eP2(d){this.a=d},
eOW:function eOW(d){this.a=d},
eP3:function eP3(d){this.a=d},
eOV:function eOV(d){this.a=d},
ePR:function ePR(d){this.a=d},
ePJ:function ePJ(d){this.a=d},
ePF:function ePF(d){this.a=d},
ePE:function ePE(d){this.a=d},
ePG:function ePG(d,e){this.a=d
this.b=e},
ePD:function ePD(d,e){this.a=d
this.b=e},
ePH:function ePH(d,e){this.a=d
this.b=e},
ePC:function ePC(d,e){this.a=d
this.b=e},
ePI:function ePI(d){this.a=d},
eQ1:function eQ1(d){this.a=d},
eQ0:function eQ0(d,e,f){this.a=d
this.b=e
this.c=f},
eQ_:function eQ_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQa:function eQa(d,e){this.a=d
this.b=e},
eQ9:function eQ9(d,e){this.a=d
this.b=e},
ePr:function ePr(d){this.a=d},
eQI:function eQI(d){this.a=d},
beQ:function beQ(d,e){this.b=d
this.a=e},
i4Q(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
i4R(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).l1(0,d),m=B.C(n,B.a6(n).k("J.E"))
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
v=t.index+t[0].length}n=w.a=n+A.a.b3(d,v)
return n.charCodeAt(0)==0?n:n},
bzz(){var w=$.byH,v=$.Qk
$.Qk=v+1
return w+"_"+v},
ig(d,e,f,g,h,i,j){return C.eq(A.bh,!1,4279310375,A.aD,"",i,24,A.bo,A.a6,"",h,C.bzz(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cl,D.f5,g,e,f)},
o_(d,e,f,g){var w=f*9
return C.ig(D.eN,d-f/2,e-w/32,f,w/16,g,0)},
hPi(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.byH
p=$.Qk
$.Qk=p+1
w.push(new C.eG(q+"_"+p,D.f5,0,r,1,0.0016,"",24,A.a6,A.bo,A.aD,k,A.bh,null,D.bf,t,t,0,0,!1,"",0,D.cl,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.byH
p=$.Qk
$.Qk=p+1
w.push(new C.eG(q+"_"+p,D.f5,o,0,0.004,1,"",24,A.a6,A.bo,A.aD,k,A.bh,null,D.bf,t,t,0,0,!1,"",0,D.cl,0,"","","","","",!1,0))}w.push(C.o_(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.o_(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ig(D.bf,0.08,0.08,0.5,0.003,v,0),C.ig(D.bf,0.58,0.08,0.004,0.06,v,0),C.ig(D.bf,0.58,0.14,0.34,0.003,v,0),C.ig(D.bf,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ig(D.bf,0.08,0.8,0.004,0.14,t,0),C.ig(D.bf,0.08,0.94,0.6,0.003,t,0),C.o_(0.58,0.08,0.05,e),C.o_(0.92,0.22,0.05,e),C.o_(0.08,0.8,0.05,f),C.o_(0.68,0.94,0.05,f),C.o_(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ig(D.l7,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ig(D.l7,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ig(D.l7,0.7,0.8,0.22,0.12,w|1140850688,0),C.ig(D.l7,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.o_(0.5,0.5,1.5,w|335544320),C.o_(0.5,0.5,1.15,w|402653184),C.o_(0.5,0.5,0.8,v|436207616),C.o_(0.95,0.05,0.4,v|855638016),C.o_(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.o_(0.85,0.08,0.7,w|1140850688),C.o_(0.1,0.35,0.5,v|855638016),C.o_(0.9,0.62,0.55,v|771751936),C.o_(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.ig(D.bf,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.ig(D.bf,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.ig(D.bf,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.ig(D.bf,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.o_(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.o_(0.5,0.2,0.65,(w|3422552064)>>>0),C.o_(0.5,0.2,0.95,w|855638016),C.ig(D.bf,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.ig(D.bf,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.ig(D.jQ,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ig(D.jQ,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ig(D.jQ,0.15,0.86,0.6,0.14,1712265002,0),C.o_(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cWc[n]
u=A.o.F(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.byH
l=$.Qk
$.Qk=l+1
w.push(new C.eG(m+"_"+l,D.f5,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a6,A.bo,A.aD,k,A.bh,null,D.eN,q,q,0,0,!1,"",0,D.cl,0,"","","","","",!1,0))}w.push(C.o_(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ig(D.jQ,0.35,-0.1,0.3,0.62,w|855638016,0),C.ig(D.jQ,0.05,-0.1,0.3,0.55,v,-0.5),C.ig(D.jQ,0.65,-0.1,0.3,0.55,v,0.5),C.o_(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ig(D.bf,0.06,0.04,0.88,0.002,e,0),C.ig(D.bf,0.06,0.96,0.88,0.002,e,0),C.ig(D.bf,0.06,0.04,0.004,0.92,e,0),C.ig(D.bf,0.936,0.04,0.004,0.92,e,0),C.ig(D.bf,0.09,0.07,0.82,0.001,w,0),C.ig(D.bf,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ig(D.jR,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ig(D.jR,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ig(D.jR,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ig(D.bf,0,0,0.3,0.09,w|1140850688,0),C.ig(D.bf,0.7,0.9,0.3,0.1,v|1426063360,0),C.ig(D.bf,0.82,0.04,0.12,0.07,w|771751936,0),C.ig(D.bf,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ig(D.eN,0.62,0.02,0.5,0.16,v,0.6),C.ig(D.eN,0.78,0.12,0.4,0.12,u,0.9),C.ig(D.eN,-0.12,0.8,0.5,0.16,u,-0.6),C.ig(D.eN,-0.05,0.9,0.4,0.12,v,-0.9),C.o_(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ig(D.bf,0.09,0.12,0.16,0.006,e,0),C.ig(D.bf,0.05,0.03,0.9,0.001,w,0),C.ig(D.bf,0.05,0.97,0.9,0.001,w,0)],x.u)}},
i1l(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.byH=j
$.Qk=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fwN()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.eq(A.bh,!1,n,A.aD,"ngmy_quote_background",m,24,A.bo,A.a6,"",1,C.bzz(),g,"","",0,!1,"",0,D.bf,l,2,"",0,0,"",D.cl,D.lz,1,0,0))
if(a9)A.d.v(q,C.hPi(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.i4Q(B.aL(w,p,""))
o=A.a.q(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fwM(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cE,A.a6))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a6))
if(a0!=null&&a0.length!==0)q.push(C.eq(A.bh,!1,n,A.aD,"ngmy_quote_logo",m,24,A.bo,A.a6,a1,a3*9/16,C.bzz(),a0,"","",0,!1,a2,0,D.bf,l,2,"",0,0,"",D.cl,D.lz,a3,a4,a5))
return C.ry(s,r,0,0,q,j+"_slide",D.qi,"","","",D.df)},
rx:function rx(d,e){this.a=d
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
fwN:function fwN(){},
fwM:function fwM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hFo(d){var w,v,u,t,s
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
fEs(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fEs=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hgr){w=1
break}$.hgr=!0
t=4
w=7
return B.b(B.ay(),$async$fEs)
case 7:r=e
q=B.aU(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.S.aL(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jN(p),k=k.gae(k),j=x.j,i=x.o;k.C();){o=k.gT(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aW(j.a(o.b));h.C();){m=h.gT(h)
l=C.hFo(m)
if(l!=null)J.cd(n,l)}$.CF.c7(0,B.u(o.a),new C.fEt(n))}C.fYd()
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
return B.i($async$fEs,v)},
fYd(){var w,v=new B.S(Date.now(),0,!1).bS(-12e8)
for(w=new B.dv($.CF,$.CF.r,$.CF.e);w.C();)J.nt(w.d,new C.fkc(v))
$.CF.bs($.CF,new C.fkd())},
aNv(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aNv=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$aNv)
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
return B.b(s.aq("String","ngmy_slides_ai_history_v1",A.S.ao(n,null)),$async$aNv)
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
return B.i($async$aNv,v)},
i5r(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fYd()
w=$.CF.c7(0,d,new C.fEv())
v=Date.now()
u=B.C(e,B.a6(e).k("cq.E"))
J.pA(w,0,new C.zC(new B.S(v,0,!1),f,u,g))
C.aNv()},
i5o(d){var w,v=$.CF.h(0,d)
if(v==null||J.cm(v))return
w=J.cE(v)
w.cF(v,0)
if(w.gal(v))$.CF.W(0,d)
C.aNv()},
zC:function zC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ceo:function ceo(){},
fEt:function fEt(d){this.a=d},
fkc:function fkc(d){this.a=d},
fkd:function fkd(){},
fEv:function fEv(){},
i5t(d){return A.d.dK(D.wa,new C.fEy(d),new C.fEz())},
hFm(d){var w
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
hFl(d){var w
switch(d.a){case 0:w=D.alw
break
case 1:w=A.ys
break
case 2:w=A.amz
break
case 3:w=I.al7
break
case 4:w=A.am0
break
case 5:w=A.lZ
break
default:w=null}return w},
hSi(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.PZ[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.PZ[w]
if(!B.cU(v.toLowerCase(),t,0))u=B.cU(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hFn(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
i5p(d,e,f,g,h){var w=new B.M(D.wa,new C.fEr(),x.eC).aH(0,", "),v=""+d,u=C.hlS(h),t=F.fyb(h),s=C.hi3(g),r=e.q(0,D.I6)?'- New slides get an "emoji".\n':"",q=e.q(0,D.I7)?'- New slides get an "icon3d" from: '+A.d.aH(D.PZ,", ")+".\n":"",p=e.q(0,D.CT)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
i5q(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.M(D.wa,new C.fEu(),x.eC).aH(0,", "),p=new B.fe("")
if(e.q(0,D.I6)){p.a=s
w=s}else w=""
if(e.q(0,D.I7))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aH(D.PZ,", ")+".\n")
if(e.q(0,D.CT))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hlS(d)
v=F.fyb(d)
u=C.hi3(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
agS(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.D1(a3,"{"),a5=J.fQr(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Lk(a3,a4,a5+1)
try{w=A.S.aL(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.cm(v))return a1
u=B.a([],x.aC)
for(o=J.aW(v),n=x.s,m=x.N;o.C();){t=o.gT(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.fCr(),m).c0(0,new C.fCs())
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
f=C.hSi(B.u(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.u(e==null?"":e))
d=J.q(t,"picture")
d=B.c8(B.u(d==null?0:d),a1)
if(d==null)d=0
J.cd(u,new C.a7K(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.u(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.u(q==null?J.fq(u).b:q))
p=A.d.b4(D.wa,new C.fCt(r))?r:a7
o=C.fjr(J.q(w,"logo_frame"),D.Ci)
n=C.fjr(J.q(w,"logo_ring"),D.Cd)
m=C.fjr(J.q(w,"photo_frame"),D.Ci)
l=C.fjr(J.q(w,"photo_ring"),D.Cd)
return new C.aqU(q,p,u,o,n,m,l)}catch(a0){return a1}},
a1m(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hkZ(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.q(0,D.CU),f7=f6?C.hM1():e4,f8=f7==null
if(f8)w=e4
else{v=new B.f5()
v.dU(f7.w+1)
u=f7.a
t=B.bn(u.b,!0,x.dL)
A.d.fN(t,v)
s=u.c
s=new C.nN("luxe",u.a,A.lZ,t,u.e,u.f,B.a([s,u.d,s],x.t),D.df)
w=s}if(w==null)w=C.i5t(f9.b)
r=g2.q(0,D.a5m)||f6
q=g2.q(0,D.I6)
p=g2.q(0,D.S_)
o=new C.fwR()
n=B.a([],x.g)
m=new C.fwU(o,w,r)
l=new C.fwT(o,r)
k=new C.fwS(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a3(g0),a7=!A.d.b4(u,new C.fwQ(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.cXK[b8]
c0=D.cWF[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eSi.q(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
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
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mG,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.qj,500,f2,f0))
c1.push(l.$8$fx$key(D.bf,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.RX
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eN,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.l7,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bf,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.CR
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eN,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eN,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mG,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cE,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.qj,500,f2,f0))
d3=D.mF
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eN,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bf,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.us:D.cl
c1.push(new C.eG(b4,D.a5k,0.64,0.05,0.27,0.9,g1,24,A.a6,A.bo,A.aD,4279310375,A.bh,e4,D.bf,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mF
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eN,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eN,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mG,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.qj,450,f2,f0))
c1.push(l.$8$fx$key(D.bf,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.RX
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eN,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eN,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bf,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bf,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aH(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.I4,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mF}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.df,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hNF(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dmn[A.o.F(b1,6)]:s
n.push(new C.lI(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.BI(e4,e4,e4,e4,D.CQ,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fze(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fze=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.q(0,D.CT)
n=e.q(0,D.I7)
if(!o&&!n){u=D.a4j
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fzh(o,s[r],n,$.hR1,r).$0())
s=B.U(x.S,x.aH)
m=J
w=3
return B.b(B.iO(t,x.e),$async$fze)
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
return B.i($async$fze,v)},
fye(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fye=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.i5q(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aMP(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fye)
case 3:u=s.aNa(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fye,v)},
bBa(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bBa=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aY(x.N)
for(s=B.em(f,f.r,B.a6(f).c),r=s.$ti.c;s.C();){q=s.d
t.M(0,(q==null?r.a(q):q).b)}C.i5r(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.agS(i,"colorful")
t=C.i5p(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aMP(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hC),$async$bBa)
case 3:u=o.aNa(m,f,h,g,D.e_y,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBa,v)},
aMP(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aMP=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vl(null,""),$async$aMP)
case 3:n=i
if(A.a.i(n).length===0)throw B.V("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.n4(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qU(t,d,g,"slides",null),$async$aMP)
case 7:q=i
p=q.b
if(p!=null){o=C.agS(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.V(s!=null&&B.L0(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aMP,v)},
aNa(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aNa=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.q(0,D.CT)||e.q(0,D.I7)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.df(e,x.Q)
t.W(0,D.CT)}w=6
return B.b(C.fze(d,t),$async$aNa)
case 6:s=k
w=4
break
case 5:s=D.a4j
case 4:t=d.c
w=A.d.b4(t,new C.fcD())?7:9
break
case 7:r=$.hmK
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dR(r,x.aP),$async$aNa)
case 10:q=k
p=q!=null?A.S.ao(q.ag(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hkZ(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hFn(new C.aqU(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.T(m).k("M<1,m>")
t=B.C(new B.M(m,new C.fcE(),n),n.k("ak.E"))
l.cx=t
t=B.a6(e).k("jR<cq.E,m>")
t=B.C(new B.jR(e,new C.fcF(),t),t.k("J.E"))
l.cy=t
l.ay=e.q(0,D.S_)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aNa,v)},
h02(d){var w,v,u,t=d.cy
if(t==null)t=A.U
w=B.aY(x.Q)
for(v=0;v<6;++v){u=D.a39[v]
if(A.d.q(t,u.b))w.M(0,u)}return w},
i9u(d){return B.bQ(A.K,null,new C.fNy(),d,!0,!0,!0,null,!1,!1,x.I)},
hME(d,e){var w,v=e.toLowerCase()
if(A.a.cc(v,".png"))w="image/png"
else w=A.a.cc(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cJ.gct().aK(d)},
i9t(d,e,f){return B.bQ(A.K,null,new C.fNx(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
h03(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
h04(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.q(o,p))o.push(p)}return o},
fjr(d,e){var w=A.a.i(B.u(d==null?"":d)).toLowerCase()
return A.d.b4(e,new C.fjs(w))?w:""},
hi3(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hmI(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.agS(a1==null?"":a1,a0),a3=C.agS(a5,a0)
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
for(v=t.length,r=a4.r,q=B.T(r).k("a_<1>"),p=0;p<t.length;t.length===v||(0,B.L)(t),++p){o=B.ri(new B.a_(r,new C.fEA(t[p]),q))
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
g=B.C(new B.a_(k,new C.fEB(),v),r)
A.d.aZ(g,new C.fEC())
if(g.length===0)continue
f=new C.fED(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.L)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
i5K(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aGu
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.e1s
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.e1t
return null},
hhF(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bm(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dj(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
i5u(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.od
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
if(C.hhF(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hhF(n,i,v,u))if(n.w>10){f=h+1
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
i5s(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.agS(o,"colorful")
if(n==null)throw B.V("That earlier version could not be read.")
w=B.aY(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a39[r]
if(q.b===s)w.M(0,q)}}v=C.h03(e)
u=C.h04(e)
p=C.hkZ(n,D.a4j,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.T(o).k("M<1,m>")
o=B.C(new B.M(o,new C.fEw(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("jR<cq.E,m>")
o=B.C(new B.jR(w,new C.fEx(),o),o.k("J.E"))
p.cy=o
p.ay=w.q(0,D.S_)
return p},
i9g(d,e,f){return B.bQ(A.K,null,new C.fML(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hM1(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.f5()
s.dU(t)
w=D.cBE[s.az(10)]
v=new C.edR(s)
u=x.N
return new C.edQ(w,s.az(4),J.fq(v.$1$2(D.d1h,1,x.ff)),w.r[s.az(3)],v.$1$2(D.dhN,2+s.az(2),u),v.$1$2(D.daG,2,u),v.$1$2(D.dkR,4,x.fP),t)},
hNF(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.f5()
a1.dU(a5.w+a3*13)
w=new C.f95(a4)
v=new C.f97(a4,d)
u=new C.f96(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.L)(a2),++q){p=a2[q]
if(p.b===D.cP){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aX(A.o.fV(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aX(A.o.fV(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.ca(a2,0,w.$8(D.eN,0.1+a1.an()*0.45,0.05+a1.an()*0.3,0.45,0.75,C.a1m(a0,52),"lux_spot",a5.wy(0,"spotlight")))
else A.d.ca(a2,0,w.$8(D.bf,0,0,1,1,0,"lux_back",a5.wy(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.ca(a2,1,w.$8(D.bf,0,0,1,1,0,"lux_back2",a5.aEI(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bf,0.022,0.038,0.956,0.924,0,g,a5.wy(0,f),D.df,150,C.a1m(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bf,0.018,0.032,0.964,0.936,0,g,a5.wy(0,f),D.df,120,C.a1m(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bf,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.df,260,C.a1m(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bf,0,0,1,1,0,"lux_filigree",a5.wy(0,"filigree"),D.df,200))
break
default:a2.push(w.$10$anim$delay(D.bf,0.08,0.06,0.84,0.004,C.a1m(a0,208),"lux_rule",a5.aEI(0,"shimmer",r),D.ur,150))
a2.push(w.$10$anim$delay(D.bf,0.08,0.936,0.84,0.004,C.a1m(a0,144),"lux_rule2","",D.I4,220))}l=!A.d.b4(a2,new C.f94())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.wy(0,"crest"),350))
else{o=a1.ht()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.wy(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a1m(r,242)
j=a5.wy(0,"orbit")
i=s===D.bf?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.qj,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eN,t-0.007,0.9495,0.014,0.025,C.a1m(r,242),"lux_g2",a5.wy(0,"orbit"),D.qj,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){h=t[q]
a2.push(w.$8(D.bf,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aX(A.o.fV(a0,16),8,"0").toUpperCase()))}if((A.d.gH(d.b).a&16777215)<8421504)a2.push(w.$8(D.bf,0,0,1,1,0,"lux_velvet",a5.wy(0,"velvet")))},
nN:function nN(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fEy:function fEy(d){this.a=d},
fEz:function fEz(){},
w1:function w1(d,e){this.a=d
this.b=e},
a7K:function a7K(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aqU:function aqU(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fEr:function fEr(){},
fEu:function fEu(){},
fCr:function fCr(){},
fCs:function fCs(){},
fCt:function fCt(d){this.a=d},
fwR:function fwR(){},
fwU:function fwU(d,e,f){this.a=d
this.b=e
this.c=f},
fwT:function fwT(d,e){this.a=d
this.b=e},
fwS:function fwS(d,e){this.a=d
this.b=e},
fwQ:function fwQ(d){this.a=d},
fzh:function fzh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fzf:function fzf(d){this.a=d},
fzg:function fzg(d){this.a=d},
fcD:function fcD(){},
fcE:function fcE(){},
fcF:function fcF(){},
fNy:function fNy(){},
a08:function a08(d){this.a=d},
aGX:function aGX(d,e,f,g,h){var _=this
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
eWW:function eWW(d,e,f){this.a=d
this.b=e
this.c=f},
eWX:function eWX(d,e){this.a=d
this.b=e},
eWU:function eWU(d,e){this.a=d
this.b=e},
eWV:function eWV(d,e){this.a=d
this.b=e},
eWT:function eWT(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eWO:function eWO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eWS:function eWS(d,e){this.a=d
this.b=e},
eWN:function eWN(d,e){this.a=d
this.b=e},
eWR:function eWR(d,e){this.a=d
this.b=e},
eWM:function eWM(d,e){this.a=d
this.b=e},
eWP:function eWP(d){this.a=d},
eWQ:function eWQ(d,e){this.a=d
this.b=e},
eWC:function eWC(d,e){this.a=d
this.b=e},
eWD:function eWD(d,e){this.a=d
this.b=e},
eWF:function eWF(d){this.a=d},
eWG:function eWG(d){this.a=d},
eWH:function eWH(d){this.a=d},
eWI:function eWI(d){this.a=d},
eWE:function eWE(d,e){this.a=d
this.b=e},
eWJ:function eWJ(d,e){this.a=d
this.b=e},
eX9:function eX9(d){this.a=d},
eXa:function eXa(d){this.a=d},
eX8:function eX8(d){this.a=d},
eXb:function eXb(d){this.a=d},
eX7:function eX7(d){this.a=d},
eXd:function eXd(d){this.a=d},
eX6:function eX6(d,e){this.a=d
this.b=e},
eXe:function eXe(d){this.a=d},
eX5:function eX5(d,e){this.a=d
this.b=e},
eXf:function eXf(d){this.a=d},
eX4:function eX4(d){this.a=d},
eXg:function eXg(d){this.a=d},
eX3:function eX3(d,e){this.a=d
this.b=e},
eXh:function eXh(d){this.a=d},
eX2:function eX2(d,e){this.a=d
this.b=e},
eXi:function eXi(d){this.a=d},
eX1:function eX1(d){this.a=d},
eXj:function eXj(d,e){this.a=d
this.b=e},
eX0:function eX0(d,e){this.a=d
this.b=e},
eXk:function eXk(d){this.a=d},
eXc:function eXc(d){this.a=d},
eX_:function eX_(d,e){this.a=d
this.b=e},
eWK:function eWK(d,e,f){this.a=d
this.b=e
this.c=f},
eWL:function eWL(d,e,f){this.a=d
this.b=e
this.c=f},
eWZ:function eWZ(d,e){this.a=d
this.b=e},
eWY:function eWY(d,e){this.a=d
this.b=e},
fNx:function fNx(d,e){this.a=d
this.b=e},
a07:function a07(d,e,f){this.c=d
this.d=e
this.a=f},
aGW:function aGW(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eWv:function eWv(d){this.a=d},
eWw:function eWw(d){this.a=d},
eWx:function eWx(d,e){this.a=d
this.b=e},
eWy:function eWy(d){this.a=d},
eWz:function eWz(d){this.a=d},
eWu:function eWu(d,e){this.a=d
this.b=e},
eWA:function eWA(d,e){this.a=d
this.b=e},
eWB:function eWB(d,e){this.a=d
this.b=e},
fjs:function fjs(d){this.a=d},
b0C:function b0C(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDx:function aDx(d,e,f){this.c=d
this.d=e
this.a=f},
bjm:function bjm(d,e){var _=this
_.d=$
_.bw$=d
_.aa$=e
_.c=_.a=null},
edT:function edT(d){this.a=d},
edS:function edS(){},
bh0:function bh0(d,e){this.b=d
this.a=e},
fEA:function fEA(d){this.a=d},
fEB:function fEB(){},
fEC:function fEC(){},
fED:function fED(d){this.a=d},
arr:function arr(d,e){this.a=d
this.b=e},
fEw:function fEw(){},
fEx:function fEx(){},
fML:function fML(d,e){this.a=d
this.b=e},
Zv:function Zv(d,e,f){this.c=d
this.d=e
this.a=f},
aB2:function aB2(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dj2:function dj2(d){this.a=d},
dj3:function dj3(d){this.a=d},
dj4:function dj4(d,e){this.a=d
this.b=e},
dj7:function dj7(d){this.a=d},
dj8:function dj8(d,e){this.a=d
this.b=e},
dj6:function dj6(d,e){this.a=d
this.b=e},
dj9:function dj9(d){this.a=d},
dj5:function dj5(d,e){this.a=d
this.b=e},
brM:function brM(d,e,f,g){var _=this
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
f95:function f95(d){this.a=d},
f97:function f97(d,e){this.a=d
this.b=e},
f96:function f96(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f94:function f94(){},
aLp:function aLp(){},
fZS(d){var w,v,u
try{w=A.S.aL(0,d,null)
if(x.f.b(w)){v=B.vV(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b0y:function b0y(d,e,f){this.c=d
this.d=e
this.a=f},
bkW:function bkW(d,e){this.c=d
this.a=e},
i1O(d){return A.d.dK(D.H8,new C.fxY(d),new C.fxZ())},
i1P(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b3(t,6)
if(w.length===0)return null
v=new B.a_(D.H8,new C.fy_(w),x.b4)
if(!v.gae(0).C())return null
u=v.gH(0)
return new C.jF("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
le:function le(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fxY:function fxY(d){this.a=d},
fxZ:function fxZ(){},
fy_:function fy_(d){this.a=d},
mT(d,e,f,g,h){return new C.ED(f,g,d)},
hOO(d){var w=d.z,v=B.T(w).k("a_<1>")
w=B.C(new B.a_(w,new C.fb4(),v),v.k("J.E"))
d.z=w
d.x=""},
dy(d,e){var w=$.Ko
e.db="__design__:"+(w.length===0?"layer":w)
A.d.ca(d.z,0,e)},
dz(d,e,f,g,h,i,j,k,l){return C.eq(A.bh,!1,4279310375,A.aD,"",d,24,A.bo,A.a6,"",e,"design_"+C.cB(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cl,D.f5,j,k,l)},
hkM(d,e){var w
C.hOO(d)
w=A.d.dK($.bDb(),new C.fvO(e),new C.fvP())
$.Ko=w.a
d.x=w.a;++d.y
try{w.bA(d)}finally{$.Ko=""}d.z=B.bn(d.z,!0,x.F)},
ED:function ED(d,e,f){this.a=d
this.b=e
this.e=f},
fb4:function fb4(){},
fE2:function fE2(){},
fE3:function fE3(){},
fE4:function fE4(){},
fEf:function fEf(){},
fEk:function fEk(){},
fEl:function fEl(){},
fEm:function fEm(){},
fEn:function fEn(){},
fEo:function fEo(){},
fEp:function fEp(){},
fEq:function fEq(){},
fE5:function fE5(){},
fE6:function fE6(){},
fE7:function fE7(){},
fE8:function fE8(){},
fE9:function fE9(){},
fEa:function fEa(){},
fEb:function fEb(){},
fEc:function fEc(){},
fEd:function fEd(){},
fEe:function fEe(){},
fEg:function fEg(){},
fEh:function fEh(){},
fEi:function fEi(){},
fEj:function fEj(){},
fvO:function fvO(d){this.a=d},
fvP:function fvP(){},
iX(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.eq(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bf,4280172719,2,m,n,0,"",o,D.cP,p,q,r)},
CV(d,e,f,g,h,i,j,k,l){return C.eq(A.bh,!1,4279310375,A.aD,"",d,24,A.bo,A.a6,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cl,D.f5,j,k,l)},
bBU(){var w=new B.S(Date.now(),0,!1)
return A.ip[B.bH(w)-1]+" "+B.bR(w)+", "+B.bA(w)},
et:function et(d,e,f){this.a=d
this.b=e
this.c=f},
bzj(d){return new B.iR((A.o.aC(d,24)&255)/255,(A.o.aC(d,16)&255)/255,(A.o.aC(d,8)&255)/255,(d&255)/255)},
hTW(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.amy(A.cF.aK(A.d.gak(d.split(","))))
return w}catch(v){return null}},
hU_(d){var w=d.r
if(!d.cy)return w
return new B.M(B.a(w.split("\n"),x.s),new C.fj0(),x.dv).aH(0,"\n")},
hTZ(d){switch(d.a){case 2:return A.nr
case 1:case 5:return A.f2l
default:return A.Tr}},
hTT(d){switch(d.a){case 2:return A.v1
case 1:case 5:return A.Ve
default:return A.aaj}},
hTX(d,e){var w,v=null,u=d.ay,t=A.o.aC(u,24),s=A.o.aC(d.ch,24),r=(t&255)===0?v:C.bzj(u),q=(s&255)===0?v:C.bzj(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nv(q,p,A.kO)
w=new B.pB(t,t,t,t)}switch(d.ax.a){case 1:return B.lw(v,v,v,new B.kB(r,w,v,A.abA,v),v,v,v,v)
case 4:return u?new B.fR(v,v,v):B.x4(B.lw(v,v,q,v,p+0.4,v,v,v))
default:return B.lw(v,v,v,new B.kB(r,w,B.vu(4),A.hF,v),v,v,v,v)}},
hTV(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f5?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hTT(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hU_(d)
t=C.bzj(d.Q)
s=d.x.a>=700?A.el:A.vF
r=d.y===A.cE?A.y7:A.ajW
q=d.z
p=new B.D4(w,l,l,B.fb(u,l,l,l,B.h8(l,t,1===q.a?A.aPw:A.aPv,l,l,l,l,l,l,A.dt,l,l,v,r,s,l,!0,l,l,l,l),C.hTZ(d.as)))
break
case 1:case 4:o=C.hTW(d.at)
n=i===D.lz&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.x4(B.fb(w,l,l,l,B.h8(l,A.rA,l,l,l,l,l,l,l,A.dt,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.HP(o,n?A.abw:A.VC,l,l)
break
case 3:w=new B.nv(A.Io,1,A.kO)
u=B.vu(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lw(A.v1,B.fb(t,l,l,l,B.h8(l,D.ee0,l,l,l,l,l,l,l,A.dt,l,l,11,l,A.el,l,!0,l,l,l,l),A.nr),l,new B.kB(E.aHL,new B.pB(w,w,w,w),u,A.hF,l),l,l,l,l)
break
case 2:p=C.hTX(d,e)
break
case 5:p=C.hTU(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hcp(-w,p)
w=i===D.cP
if(w){m=A.o.aC(d.Q,24)&255
if(m<255)p=new B.asc(m/255,p)}if(w)return new F.w6(k,l,j,l,new B.S8(new B.kA(g,g,f,1/0),p))
if(i===D.l6){i=new B.nv(A.Io,1,A.kO)
i=B.lw(A.v1,p,l,new B.kB(A.pb,new B.pB(i,i,i,i),B.vu(4),A.hF,l),l,l,D.bxD,l)}else i=p
return new F.w6(k,l,j,l,new B.fR(g,f,i))},
hTY(d,e,f,g){var w,v=null,u=C.bzj(d.e),t=d.f
t=B.a([F.hb1(t!=null?B.lw(v,v,v,new B.kB(v,v,v,A.hF,new B.aW3(E.Vg,A.aad,B.a([u,C.bzj(t)],x.cR),v)),v,v,v,v):B.lw(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.M(w,new C.fj_(f,g),B.T(w).k("M<1,ff>")))
return F.crD(t)},
h06(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$h06=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a4_(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){p=t[q]
o=new B.Wi(A.wl,A.Il,D.byK,null,null,null,!1,null)
o=new B.BN(o,new C.fEJ(607,787,p,d))
o.MG(n,null)
r.push(o)}u=n.kc(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h06,v)},
hTU(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fZS(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gajy()
if(h==null)h=A.axm
j=B.tz(4279308564)
w=B.vu(18)
v=new B.nv(B.tz(4287531653),3,A.kO)
u=i.length===0?"My links":i
u=B.a([B.x4(B.fb(u,m,m,m,B.h8(m,A.pb,m,m,m,m,m,m,m,A.dt,m,m,12,m,A.el,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.x4(B.fb(A.a.i(l.c),m,m,m,D.f9y,m)))
u.push(new B.fR(m,8,m))
for(t=B.dc(h,0,B.dG(8,"count",x.S),B.T(h).c),s=t.$ti,t=new B.bS(t,t.gL(0),s.k("bS<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tz(4280690220)
o=new B.a95(8,8)
n=A.a.i(r.b)
u.push(new B.nO(D.brU,new C.awp(new C.ahX(q),B.lw(m,B.fb(n.length===0?A.a.i(r.c):n,m,m,m,D.fbO,A.nr),m,new B.kB(p,m,new B.ain(o,o,o,o),A.hF,m),m,m,D.by2,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.x4(B.fb(k,m,m,m,D.fb3,m))
u.push(new C.awp(C.htt(k),t))}return B.lw(m,B.yV(u,A.LY,A.lx),m,new B.kB(j,new B.pB(v,v,v,v),w,A.hF,m),m,m,D.bsJ,m)},
fj0:function fj0(){},
fj_:function fj_(d,e){this.a=d
this.b=e},
fEJ:function fEJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agF(d){var w,v
for(w=0;w<32;++w){v=D.H_[w]
if(v.a===d)return v}return null},
hf4(d){var w,v,u=A.a.cK(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cF.aK(A.a.b3(d,u+1))
return w}catch(v){return null}},
cY(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hnW(d,e){return B.a4(d,!1).cm(B.e9(new C.fLa(e),!0,null,x.fB))},
hnV(d,e){return B.bQ(A.K,null,new C.fL9(e),d,!0,!0,!0,null,!1,!1,x.fB)},
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
Nq:function Nq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biL:function biL(d,e,f){var _=this
_.d=d
_.e=$
_.bw$=e
_.aa$=f
_.c=_.a=null},
dTe:function dTe(d){this.a=d},
dTd:function dTd(d,e,f){this.a=d
this.b=e
this.c=f},
dTc:function dTc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqk:function bqk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eVJ:function eVJ(d,e){this.a=d
this.b=e},
bdX:function bdX(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aZs:function aZs(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c8V:function c8V(){},
c8W:function c8W(d){this.a=d},
c8X:function c8X(d,e,f){this.a=d
this.b=e
this.c=f},
c8Y:function c8Y(d,e,f){this.a=d
this.b=e
this.c=f},
fLa:function fLa(d){this.a=d},
Z3:function Z3(d,e){this.c=d
this.a=e},
azq:function azq(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d8k:function d8k(d,e,f){this.a=d
this.b=e
this.c=f},
d8p:function d8p(d){this.a=d},
d8q:function d8q(d){this.a=d},
d8o:function d8o(d){this.a=d},
d8r:function d8r(d){this.a=d},
d8n:function d8n(d,e){this.a=d
this.b=e},
d8s:function d8s(d){this.a=d},
d8m:function d8m(d){this.a=d},
d8t:function d8t(d){this.a=d},
d8l:function d8l(d,e){this.a=d
this.b=e},
d8u:function d8u(d,e){this.a=d
this.b=e},
fL9:function fL9(d){this.a=d},
fL8:function fL8(d){this.a=d},
fL7:function fL7(d,e,f){this.a=d
this.b=e
this.c=f},
fL6:function fL6(d,e){this.a=d
this.b=e},
aKW:function aKW(){},
i9s(d){return B.bQ(A.K,null,new C.fNw(),d,!0,!0,!0,null,!1,!1,x.N)},
fNw:function fNw(){},
Zo:function Zo(d){this.a=d},
bfp:function bfp(d){this.d=d
this.c=this.a=null},
df5:function df5(d){this.a=d},
df6:function df6(d,e){this.a=d
this.b=e},
df7:function df7(d){this.a=d},
hQk(d){var w,v=d.split("@")
if(v.length>1){w=B.c8(v[1],16)
if(w!=null)return B.b0(w)}return D.xz},
i3J(d){var w,v=A.d.gH(d.split("@"))
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
i3I(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gH(d.split("@")),p=C.hQk(d)
switch(q){case"shimmer":return B.nS(A.aaG,g,new C.fBp(p,A.k.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.V,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.beN(e,f,p,r),A.az),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dU(B.ed(A.A,B.db(C.fRQ(g,B.a4Q(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.x(w*60,v*26))
case"goldframe":return new B.an(A.V,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bev(e,p,r),A.az),!0,r)],x.p),r)
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
case"rays":return new B.an(A.V,r,A.b0,A.r,B.a([B.e1(B.b3(r,r,r,new C.bnb(e,f,p,r),A.az),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.V,r,A.b0,A.r,B.a([B.e1(B.b3(r,r,r,new C.b9r(e,f,p,r),A.az),!0,r),g],x.p),r)
case"aurora":return new B.an(A.V,r,A.b0,A.r,B.a([B.e1(B.b3(r,r,r,new C.b95(e,f,p,r),A.az),!0,r),g],x.p),r)
case"velvet":return new B.an(A.V,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bu6(e,p,r),A.az),!0,r)],x.p),r)
case"sparkle":return new B.an(A.V,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.br7(e,f,p,r),A.az),!0,r)],x.p),r)
case"sheen":return new B.an(A.V,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bqg(e,p,r),A.az),!0,r)],x.p),r)
case"filigree":return new B.an(A.V,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bdQ(e,p,r),A.az),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.a9,A.f,B.a([B.bT(0,B.e1(B.ed(A.A,B.c0(r,new B.o(r,r,r,r,r,new B.c_(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a5),A.be),1.6+s*0.15,r,r),!0,r),0,0,0),B.eE(A.A,s*0.06,B.ed(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fBp:function fBp(d,e){this.a=d
this.b=e},
beN:function beN(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bev:function bev(d,e,f){this.b=d
this.c=e
this.a=f},
bnb:function bnb(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9r:function b9r(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b95:function b95(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bu6:function bu6(d,e,f){this.b=d
this.c=e
this.a=f},
br7:function br7(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bqg:function bqg(d,e,f){this.b=d
this.c=e
this.a=f},
bdQ:function bdQ(d,e,f){this.b=d
this.d=e
this.a=f},
d81:function d81(d,e,f,g,h){var _=this
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
fBs(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.l6},
i3O(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aZ(j,new C.fBt())
s=A.d.gH(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.L)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gH(B.aPK(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
i3N(d,e){var w,v,u,t,s,r=d.db
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
agj(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$agj=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.T(a4).k("a_<1>")
e=B.C(new B.a_(a4,new C.ftS(),f),f.k("J.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bQ(A.dG,null,new C.ftT(e),d,!0,!0,!1,A.lA,!1,!1,x.N),$async$agj)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gH(e).hG())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.h0K(d),$async$agj)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.Lb(d,"Search states\u2026","",A.ka,"Choose state"),$async$agj)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.h_E(s)
if(p==null)p=A.d.gH(D.QP)
f=C.cB()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cB()
m=p.e
l=C.fBu(p.d)
k=x.u
j=B.a([C.eq(A.bh,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bo,A.a6,"",1,C.cB(),l,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cl,D.lz,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.CI(i,0.016,D.l7,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.CI(0,0.058,D.eN,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.CI(0,0.058,D.eN,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.Kz("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.Kz("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a6,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fXw(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.byN("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a0Y("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a0Y("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a0Y("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a0Y("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.byN("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.CI(m,0.082,D.bf,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cB()
k.push(C.eq(A.bh,!1,i,A.aD,"marriage_field_utangulizi:"+A.k.ab(0.78,3),4280640491,9.5,A.bo,A.cv,"",0.074,g,null,"","",0,!1,"",0,D.bf,4280172719,2,y.O,0,0,"",D.cl,D.cP,0.78,0.11,0.388))
A.d.v(k,C.fXw(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.byN("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hh4("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hh4("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a0Y("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a0Y("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.byM("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.byM("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.byN("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.Kz("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.Kz("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.byM("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.byM("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.byN("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a0Y("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.byM("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a0Y("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.fXw(0.22,0.83,0.56,4291404327,i),h)
h.push(C.Kz("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.Kz("Nakala ya Hati",A.L,4291404327,9,A.a6,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.BI(null,null,null,null,D.od,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.ry(m,null,0,0,j,n,D.qi,"","","Hati ya Ndoa",D.df)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agj,v)},
fBt:function fBt(){},
ftS:function ftS(){},
ftT:function ftT(d){this.a=d},
ftQ:function ftQ(d){this.a=d},
ftR:function ftR(d){this.a=d},
hTn(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hTm(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mK
case"lineThrough":return A.zH
default:return A.aD}},
eq(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eG(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hj9(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.Qz[w]
if(v.b===u)return v}return D.df},
hPJ(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cTv[w]
if(v.b===u)return v}return D.cP},
hWc(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dir[w]
if(v.b===u)return v}return D.bf},
ry(d,e,f,g,h,i,j,k,l,m,n){return new C.lI(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
h9N(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hRJ(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.hj9(d.h(0,"transition"))
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
n=B.cC(n,new C.cel(),n.$ti.k("J.E"),x.F)
n=B.C(n,B.a6(n).k("J.E"))}return C.ry(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hRJ(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.apc[w]
if(v.b===u)return v}return D.mF},
BI(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.S(Date.now(),0,!1):a4
return new C.i4(p,t,a1,h,i,w,a0==null?B.a([C.ry(4294967295,null,0,0,null,C.cB(),D.qi,"","","",D.df)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
VK(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hNV(a6.h(0,"aspectRatio"))
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
else{g=J.d9(g,x.f)
g=B.cC(g,new C.cea(),g.$ti.k("J.E"),x.bt)
g=B.C(g,B.a6(g).k("J.E"))}return C.BI(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.ry(4294967295,a3,0,0,a3,C.cB(),D.qi,"","","",D.df)],x.g):g,v,p,o,s)},
kw(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hNV(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.djj[w]
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
v=C.eq(A.L,!1,f.d.l(),A.aD,"",n,40,A.bo,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bf,m,2,o,0,0,"",D.cl,D.cP,0.84,0.08,0.3)
u=C.cB()
A.d.v(w,B.a([v,C.eq(A.L,!1,f.e.l(),A.aD,"",n,20,A.bo,A.cv,"",0.12,u,p,"","",0,!1,"",0,D.bf,m,2,"Click to add subtitle",0,0,"",D.cl,D.cP,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cB()
v=C.eq(A.bh,!1,f.d.l(),A.aD,"",n,32,A.bo,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bf,m,2,o,0,0,"",D.cl,D.cP,0.88,0.06,0.06)
u=C.cB()
A.d.v(w,B.a([v,C.eq(A.bh,!0,f.e.l(),A.aD,"",n,20,A.bo,A.cv,"",0.68,u,p,"","",0,!1,"",0,D.bf,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cl,D.cP,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cB()
v=C.eq(A.bh,!1,f.d.l(),A.aD,"",n,30,A.bo,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bf,m,2,"Two Column Slide",0,0,"",D.cl,D.cP,0.88,0.06,0.06)
u=C.cB()
t=f.e
u=C.eq(A.bh,!0,t.l(),A.aD,"",n,18,A.bo,A.a6,"",0.7,u,p,"","",0,!1,"",0,D.bf,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cl,D.cP,0.42,0.06,0.22)
s=C.cB()
A.d.v(w,B.a([v,u,C.eq(A.bh,!0,t.l(),A.aD,"",n,18,A.bo,A.a6,"",0.7,s,p,"","",0,!1,"",0,D.bf,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cl,D.cP,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.M(d.z,C.eq(A.L,!1,4294967295,A.aD,"",n,42,A.bo,A.u,"",0.2,C.cB(),p,"","",0,!1,"",0,D.bf,m,2,"Section Header",0,0,"",D.cl,D.cP,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cB()
v=C.eq(A.bh,!1,f.d.l(),A.aD,"",n,30,A.bo,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bf,m,2,"Compare",0,0,"",D.cl,D.cP,0.88,0.06,0.06)
u=C.cB()
t=f.c
u=C.eq(A.bh,!1,l,A.aD,"",t.j(0.12).l(),24,A.bo,A.a6,"",0.68,u,p,"","",0,!1,"",0,D.bf,t.l(),2,"",0,0,"",D.cl,D.f5,0.42,0.06,0.22)
s=C.cB()
r=f.e
s=C.eq(A.bh,!1,r.l(),A.aD,"",n,20,A.bo,A.O,"",0.6,s,p,"","",0,!1,"",0,D.bf,m,2,"Option A",0,0,"",D.cl,D.cP,0.38,0.08,0.26)
q=C.cB()
t=C.eq(A.bh,!1,l,A.aD,"",t.j(0.06).l(),24,A.bo,A.a6,"",0.68,q,p,"","",0,!1,"",0,D.bf,t.j(0.5).l(),2,"",0,0,"",D.cl,D.f5,0.42,0.52,0.22)
q=C.cB()
A.d.v(w,B.a([v,u,s,t,C.eq(A.bh,!1,r.l(),A.aD,"",n,20,A.bo,A.O,"",0.6,q,p,"","",0,!1,"",0,D.bf,m,2,"Option B",0,0,"",D.cl,D.cP,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cB()
v=C.eq(A.L,!1,f.d.l(),A.aD,"",n,36,A.bo,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bf,m,2,"TERM / QUESTION",0,0,"",D.cl,D.cP,0.8,0.1,0.12)
u=C.cB()
A.d.v(w,B.a([v,C.eq(A.L,!1,f.e.l(),A.aD,"",n,22,A.bo,A.cv,"",0.35,u,p,"","",0,!1,"",0,D.bf,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cl,D.cP,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cB()
v=C.eq(A.bh,!1,f.d.l(),A.aD,"",n,28,A.bo,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bf,m,2,"Quiz Question",0,0,"",D.cl,D.cP,0.88,0.06,0.06)
u=C.cB()
A.d.v(w,B.a([v,C.eq(A.bh,!1,f.e.l(),A.aD,"",n,20,A.bo,A.a6,"",0.62,u,p,"","",0,!1,"",0,D.bf,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cl,D.cP,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cB()
v=C.eq(A.bh,!1,f.d.l(),A.aD,"",n,26,A.bo,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bf,m,2,"Worksheet / Assignment",0,0,"",D.cl,D.cP,0.88,0.06,0.04)
u=C.cB()
A.d.v(w,B.a([v,C.eq(A.bh,!1,f.e.l(),A.aD,"",n,18,A.bo,A.a6,"",0.78,u,p,"","",0,!1,"",0,D.bf,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cl,D.cP,0.88,0.06,0.16)],x.u))
break}},
hFx(d){return A.d.dK(D.a2O,new C.ceD(d),new C.ceE())},
hFu(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.S.aL(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aW(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gT(t)
if(!q.b(u))continue
try{J.cd(v,C.VK(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fTX(d,e){var w,v,u,t=B.U(x.N,x.I),s=new C.cey(t)
for(w=J.aW(d);w.C();)s.$1(w.gT(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.L)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.C(new B.bc(t,w),w.k("J.E"))
A.d.aZ(u,new C.cex())
return u},
h9Q(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cet()
if(u!==w)return u>=w?d:e
return v.$1(d).cd(v.$1(e))?d:e},
aqV(d){return C.hFs(d)},
hFs(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aqV=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.cew()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a28(m),$async$aqV)
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
return B.b(B.ay(),$async$aqV)
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
case 11:o=l.$1($.h9P.h(0,m))
n=C.fTX(C.fTX(j,r),o)
if(n.length===0){u=C.h9Q(C.h9Q(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aqV,v)},
ces(d){return C.hFr(d)},
hFr(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
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
b0E(d,e){return C.hFt(d,e)},
hFt(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b0E=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.ay(),$async$b0E)
case 6:s=g
q=s.tf("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.M(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.Lj(r,J.ad(r)-500):r
w=7
return B.b(s.aq("StringList","ngmy_slides_deleted_"+p,o),$async$b0E)
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
return B.i($async$b0E,v)},
VL(d,e){return C.hFv(d,e)},
hFv(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$VL=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.h9O.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aqV(a3),$async$VL)
case 5:p=a6
case 4:w=6
return B.b(C.ces(a3),$async$VL)
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
$.h9O.n(0,a0,e)
n=B.T(e).k("M<1,a5<m,@>>")
n=B.C(new B.M(e,new C.ceB(),n),n.k("ak.E"))
r=A.S.ao(n,null)
$.h9P.n(0,a0,r)
t=8
w=11
return B.b(B.ah6(a0,r),$async$VL)
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
return B.b(B.ay(),$async$VL)
case 16:q=a6
w=17
return B.b(q.aq("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$VL)
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
return B.i($async$VL,v)},
IJ:function IJ(d,e){this.a=d
this.b=e},
aqT:function aqT(d,e){this.a=d
this.b=e},
uK:function uK(d,e){this.a=d
this.b=e},
mx:function mx(d,e){this.a=d
this.b=e},
hF:function hF(d,e){this.a=d
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
lI:function lI(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ceb:function ceb(){},
cec:function cec(){},
ce8:function ce8(){},
ce9:function ce9(){},
cea:function cea(){},
jF:function jF(d,e,f,g,h,i,j){var _=this
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
i3Z(d,e){var w=x.N,v=B.U(w,x.F)
w=new C.fC1(e,v,d,B.aY(w))
w.$1(new C.fBY())
w.$1(new C.fBZ())
w.$1(new C.fC_())
w.$1(new C.fC0())
return v},
fC1:function fC1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBY:function fBY(){},
fBZ:function fBZ(){},
fC_:function fC_(){},
fC0:function fC0(){},
b0B:function b0B(d,e,f,g){var _=this
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
ao3:function ao3(d,e){this.c=d
this.a=e},
bix:function bix(d,e){var _=this
_.d=$
_.bw$=d
_.aa$=e
_.c=_.a=null},
dGd:function dGd(){},
aKI:function aKI(){},
cep(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cep=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.I(x.q).f.R(D.f_x)
u=!1
w=1
break}u=B.kV(!1,d,t,!1,null,A.a5o,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cep,v)},
hFp(d){var w=A.d.bg(D.H8,new C.ceq(d))
if(w<0)return!0
return w>=4},
hFq(d){var w=A.d.bg($.bDb(),new C.cer(d))
if(w<0)return!0
return w>=5},
ceq:function ceq(d){this.a=d},
cer:function cer(d){this.a=d},
i5E(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.yK()
$.qh().pY(t,new C.fEQ(s),!0)
u=B.a([B.DO(v,A.qm,t)],x.p)
if(e.length!==0){w=B.n(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.fa0,v,v,v),A.f,v,v,new B.o(A.aW,v,v,w,v,v,A.n),v,v,v,v,A.ne,v,v,v),v,v,4,v,4,v))}return new B.an(A.V,v,A.b0,A.r,u,v)},
fEQ:function fEQ(d){this.a=d},
i5f(){return C.h0_()},
i2c(){return C.bB7()},
i4f(){return C.h_R()},
aOR(d,e,f){var w=0,v=B.j(x.H),u
var $async$aOR=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fDW(d,f),$async$aOR)
case 5:w=1
break
case 4:if(d.e!=null)d.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aOR,v)},
fDW(d,e){var w=0,v=B.j(x.H),u
var $async$fDW=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bzk
if(u==null)u=e+".pdf"
w=2
return B.b(B.bQ(A.K,null,new C.fDX(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fDW)
case 2:return B.h(null,v)}})
return B.i($async$fDW,v)},
fDX:function fDX(d,e){this.a=d
this.b=e},
ad5:function ad5(d,e,f){this.c=d
this.d=e
this.a=f},
eoW:function eoW(d,e){this.a=d
this.b=e},
eoX:function eoX(d,e){this.a=d
this.b=e},
eoY:function eoY(d,e){this.a=d
this.b=e},
eoZ:function eoZ(d){this.a=d},
adm:function adm(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b0A(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b0z(g,m,f,d,e,h,l,k,j,o,i,null)},
hm6(d){return B.cA(new C.fBX(d))},
h01(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
i5n(d){if(d===D.cl)return"None"
return C.h01(d)},
bzQ(d,e,f,g){return C.hWj(d,e,f,g)},
hWj(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bzQ=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a4(d,!0)
if($.fXP&&t.pB())t.eE()
$.fXP=!0
s.a=null
w=3
return B.b(B.hY(A.bj,!0,"Animation preview",d,new C.fly(s,e,g,f),null,A.eJ,!0,x.H),$async$bzQ)
case 3:s=s.a
if(s!=null)s.a7(0)
$.fXP=!1
case 1:return B.h(u,v)}})
return B.i($async$bzQ,v)},
fOk(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fOk=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aH(d,A.bW,x.w).w.a.a*0.88,280,440)
s=f===D.cl
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.h01(f)+" Slide transition preview"
s=s?Ae.Fp:A.vq
w=3
return B.b(C.bzQ(d,s,new B.a7(t,t*0.56,B.bw(B.n(14),new C.aIl(f,null),A.aq),null),r),$async$fOk)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fOk,v)},
hlo(d,e,f){var w,v,u=null,t=A.ct.au(0,A.k.D(e,0,1))
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
bCG(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bCG=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aH(d,A.bW,x.w).w.a.a*0.88,300,440)
s=f===D.cl
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.h01(f)+" Element animation preview"
s=s?Ae.Fp:A.vq
w=3
return B.b(C.bzQ(d,s,new B.a7(t,t*0.62,B.bw(B.n(14),new C.aza(f,null),A.aq),null),r),$async$bCG)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bCG,v)},
i5m(d){var w,v,u,t,s=$.afL.W(0,d)
if(s!=null){$.afL.n(0,d,s)
return s}w=A.cF.aK(A.a.b3(d,A.a.cK(d,",")+1))
$.afL.n(0,d,w)
v=$.fYD=$.fYD+w.length
u=B.a6($.afL).k("cv<1>")
for(;;){if(!(v>41943040&&$.afL.a>1))break
t=new B.cv($.afL,u).gae(0)
if(!t.C())B.b8(B.fs())
v-=$.afL.W(0,t.gT(0)).length
$.fYD=v}return w},
i53(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).l1(0,d),j=B.C(k,B.a6(k).k("J.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.L)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ap(d,r,o)
m=f.$1(e)
v.push(new B.eR(n,l,l,A.d_,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.SH(s,A.u))
v.push(new B.eR(n,l,l,A.d_,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.SH(t,A.u))
v.push(new B.eR(n,l,l,A.d_,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.SH(u,A.cv))
v.push(new B.eR(n,l,l,A.d_,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b3(d,r)
v.push(B.d0(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a27(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.E(new B.jO(e))
return m
case"rounded":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
w=e.gdH()*0.18
m.E(new B.iM(B.by(e,new B.aR(w,w))))
return m
case"triangle":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.E(new B.b5(e.gbN().a,e.b))
w=e.d
m.E(new B.ap(e.c,w))
m.E(new B.ap(e.a,w))
m.E(new B.bE())
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
v.e=null}}v.E(new B.bE())
return v
case"diamond":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.E(new B.b5(e.gbN().a,e.b))
m.E(new B.ap(e.c,e.gbN().b))
m.E(new B.ap(e.gbN().a,e.d))
m.E(new B.ap(e.a,e.gbN().b))
m.E(new B.bE())
return m
case"arch":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
w=e.a
u=e.d
m.E(new B.b5(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.E(new B.ap(w,p))
m.b9N(new B.x(t,p),new B.aR(s,s))
m.E(new B.ap(t,u))
m.E(new B.bE())
return m
default:m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.E(new B.o8(e))
return m}},
fzw(d,e,f){return B.cA(new C.fzx(D.eSR.q(0,d),d,f,e))},
b0z:function b0z(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
b0w:function b0w(d,e){this.b=d
this.a=e},
fBX:function fBX(d){this.a=d},
fBW:function fBW(d,e){this.a=d
this.b=e},
fly:function fly(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
flw:function flw(d){this.a=d},
flx:function flx(d,e){this.a=d
this.b=e},
aIl:function aIl(d,e){this.c=d
this.a=e},
btD:function btD(d,e){var _=this
_.d=$
_.bw$=d
_.aa$=e
_.c=_.a=null},
f3g:function f3g(d,e,f){this.a=d
this.b=e
this.c=f},
aIY:function aIY(d,e){this.b=d
this.a=e},
UT:function UT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
biI:function biI(d,e){var _=this
_.d=$
_.bw$=d
_.aa$=e
_.c=_.a=null},
dRr:function dRr(d){this.a=d},
dRq:function dRq(d){this.a=d},
dRp:function dRp(d){this.a=d},
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
aza:function aza(d,e){this.c=d
this.a=e},
bdj:function bdj(){this.d=0
this.c=this.a=null},
d5g:function d5g(d){this.a=d},
d5f:function d5f(d){this.a=d},
a7s:function a7s(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjk:function bjk(d,e){var _=this
_.d=null
_.bw$=d
_.aa$=e
_.c=_.a=null},
edz:function edz(d,e,f){this.a=d
this.b=e
this.c=f},
aZv:function aZv(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bet:function bet(d,e,f){this.b=d
this.c=e
this.a=f},
bpd:function bpd(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eTm:function eTm(){},
fzx:function fzx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqd:function bqd(d,e,f){this.b=d
this.c=e
this.a=f},
aKV:function aKV(){},
aLn:function aLn(){},
aMG:function aMG(){},
fCX(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fCX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xe.c8().M3(D.dgu,A.tO,!0),$async$fCX)
case 3:r=e
if(r==null||J.cm(r.a)){u=null
w=1
break}t=J.fq(r.a)
s=t.c
if(s==null)throw B.V("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.V("That file is too big. Use a file under 8 MB.")
u=C.i4Y(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fCX,v)},
i4Y(d,e){var w,v=d.toLowerCase()
if(A.a.cc(v,".pdf"))return new C.a7L(d,new B.a_L(A.cJ.gct().aK(e),"application/pdf"),"")
if(A.a.cc(v,".docx")){w=C.hY_(e)
if(A.a.i(w).length===0)throw B.V("No readable words were found in that Word file.")
return new C.a7L(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.cf.KQ(0,e,!0)
if(A.a.i(w).length===0)throw B.V("That file is empty.")
return new C.a7L(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
hY_(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cxl().cJJ(B.rh(d,A.i_,o,o),o,o,!1).cLs(0,"word/document.xml")
if(n==null)return""
w=n.cTt()
v=A.cf.KQ(0,w==null?$.hoq():w,!0).split("</w:p>")
u=new B.fe("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).l1(0,r)
p=A.a.i(B.cC(q,new C.foz(),B.a6(q).k("J.E"),t).hs(0))
if(p.length!==0){q=B.aL(p,"&lt;","<")
q=B.aL(q,"&gt;",">")
q=B.aL(q,"&quot;",'"')
q=B.aL(q,"&apos;","'")
q=B.aL(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a7L:function a7L(d,e,f){this.a=d
this.b=e
this.c=f},
foz:function foz(){},
hFw(d,e,f,g,h,i,j,k,l){return new C.NS(l,e,d,g,f,i,h,j,k,null)},
NS:function NS(d,e,f,g,h,i,j,k,l,m){var _=this
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
aDV:function aDV(d,e,f,g,h,i,j,k,l){var _=this
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
ev9:function ev9(d){this.a=d},
ev7:function ev7(){},
ev8:function ev8(d){this.a=d},
erx:function erx(){},
ery:function ery(){},
erz:function erz(d,e){this.a=d
this.b=e},
et7:function et7(d){this.a=d},
esW:function esW(){},
esX:function esX(){},
eqV:function eqV(){},
euf:function euf(d){this.a=d},
ev5:function ev5(d,e){this.a=d
this.b=e},
et5:function et5(d,e){this.a=d
this.b=e},
euT:function euT(d){this.a=d},
euU:function euU(){},
euV:function euV(){},
euW:function euW(d){this.a=d},
euX:function euX(){},
eqj:function eqj(d){this.a=d},
ev6:function ev6(){},
ese:function ese(d,e){this.a=d
this.b=e},
eqh:function eqh(d){this.a=d},
eqi:function eqi(d){this.a=d},
esB:function esB(d){this.a=d},
esC:function esC(d,e,f){this.a=d
this.b=e
this.c=f},
esD:function esD(d){this.a=d},
esd:function esd(){},
esc:function esc(d){this.a=d},
esa:function esa(){},
es9:function es9(d){this.a=d},
esb:function esb(){},
ert:function ert(d){this.a=d},
eru:function eru(d){this.a=d},
esk:function esk(d){this.a=d},
esf:function esf(d){this.a=d},
esg:function esg(d){this.a=d},
esh:function esh(d){this.a=d},
esi:function esi(d){this.a=d},
esj:function esj(d){this.a=d},
esl:function esl(d,e){this.a=d
this.b=e},
eql:function eql(){},
eqm:function eqm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esw:function esw(){},
esx:function esx(d,e){this.a=d
this.b=e},
esu:function esu(d,e,f){this.a=d
this.b=e
this.c=f},
esv:function esv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eso:function eso(d,e,f){this.a=d
this.b=e
this.c=f},
esp:function esp(d,e,f){this.a=d
this.b=e
this.c=f},
esq:function esq(d){this.a=d},
esr:function esr(d,e){this.a=d
this.b=e},
ess:function ess(d,e){this.a=d
this.b=e},
est:function est(d,e){this.a=d
this.b=e},
esn:function esn(d,e){this.a=d
this.b=e},
esz:function esz(d){this.a=d},
esA:function esA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
esy:function esy(d){this.a=d},
esR:function esR(){},
esS:function esS(){},
esT:function esT(){},
esU:function esU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esO:function esO(d){this.a=d},
esQ:function esQ(){},
esP:function esP(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
esM:function esM(d,e,f){this.a=d
this.b=e
this.c=f},
esN:function esN(d,e){this.a=d
this.b=e},
esV:function esV(){},
esm:function esm(d,e){this.a=d
this.b=e},
eqC:function eqC(){},
eqD:function eqD(d,e,f){this.a=d
this.b=e
this.c=f},
eqE:function eqE(d){this.a=d},
eqF:function eqF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eqB:function eqB(d){this.a=d},
et0:function et0(d){this.a=d},
et_:function et_(d,e){this.a=d
this.b=e},
esZ:function esZ(d,e){this.a=d
this.b=e},
esY:function esY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
et1:function et1(d,e){this.a=d
this.b=e},
epg:function epg(d,e){this.a=d
this.b=e},
eqA:function eqA(d,e){this.a=d
this.b=e},
eqy:function eqy(d){this.a=d},
et9:function et9(d,e,f){this.a=d
this.b=e
this.c=f},
equ:function equ(d,e){this.a=d
this.b=e},
eqt:function eqt(d){this.a=d},
et8:function et8(d,e,f){this.a=d
this.b=e
this.c=f},
eqk:function eqk(d){this.a=d},
eqW:function eqW(){},
euR:function euR(d,e){this.a=d
this.b=e},
euS:function euS(d,e,f){this.a=d
this.b=e
this.c=f},
eug:function eug(d,e,f){this.a=d
this.b=e
this.c=f},
eph:function eph(d){this.a=d},
epe:function epe(d,e){this.a=d
this.b=e},
ep4:function ep4(d,e){this.a=d
this.b=e},
ep1:function ep1(d){this.a=d},
ep0:function ep0(d,e){this.a=d
this.b=e},
ep2:function ep2(d,e){this.a=d
this.b=e},
eqw:function eqw(d){this.a=d},
eqx:function eqx(d,e){this.a=d
this.b=e},
eqv:function eqv(d){this.a=d},
epJ:function epJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
epK:function epK(d,e){this.a=d
this.b=e},
epO:function epO(d,e){this.a=d
this.b=e},
epP:function epP(d){this.a=d},
epM:function epM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
epN:function epN(d){this.a=d},
epL:function epL(){},
epI:function epI(d,e,f){this.a=d
this.b=e
this.c=f},
esL:function esL(d,e){this.a=d
this.b=e},
ev_:function ev_(d){this.a=d},
ev0:function ev0(d,e){this.a=d
this.b=e},
ev1:function ev1(d){this.a=d},
ev2:function ev2(d,e,f){this.a=d
this.b=e
this.c=f},
euZ:function euZ(d){this.a=d},
euw:function euw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euv:function euv(d,e,f){this.a=d
this.b=e
this.c=f},
euu:function euu(){},
eut:function eut(d,e,f){this.a=d
this.b=e
this.c=f},
eus:function eus(d,e){this.a=d
this.b=e},
eup:function eup(d,e,f){this.a=d
this.b=e
this.c=f},
eun:function eun(d){this.a=d},
euo:function euo(d){this.a=d},
eur:function eur(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
euq:function euq(d){this.a=d},
erp:function erp(d,e){this.a=d
this.b=e},
ero:function ero(d,e){this.a=d
this.b=e},
euh:function euh(){},
euQ:function euQ(d,e){this.a=d
this.b=e},
euO:function euO(d){this.a=d},
euP:function euP(d){this.a=d},
ep9:function ep9(d,e){this.a=d
this.b=e},
ep7:function ep7(d){this.a=d},
ep8:function ep8(d){this.a=d},
epa:function epa(d,e){this.a=d
this.b=e},
epb:function epb(d,e,f){this.a=d
this.b=e
this.c=f},
epf:function epf(d,e){this.a=d
this.b=e},
ep6:function ep6(d,e,f){this.a=d
this.b=e
this.c=f},
ep5:function ep5(d){this.a=d},
et6:function et6(d,e,f){this.a=d
this.b=e
this.c=f},
euY:function euY(d,e,f){this.a=d
this.b=e
this.c=f},
ers:function ers(d,e,f){this.a=d
this.b=e
this.c=f},
err:function err(){},
epS:function epS(d,e,f){this.a=d
this.b=e
this.c=f},
epT:function epT(d){this.a=d},
ep3:function ep3(d,e){this.a=d
this.b=e},
eqU:function eqU(d,e){this.a=d
this.b=e},
epc:function epc(d,e){this.a=d
this.b=e},
epl:function epl(d){this.a=d},
epm:function epm(d,e){this.a=d
this.b=e},
epn:function epn(d,e){this.a=d
this.b=e},
epk:function epk(d){this.a=d},
epy:function epy(d,e){this.a=d
this.b=e},
epj:function epj(d){this.a=d},
epB:function epB(d){this.a=d},
epC:function epC(d){this.a=d},
epD:function epD(d){this.a=d},
epE:function epE(d){this.a=d},
epF:function epF(d){this.a=d},
epG:function epG(){},
epH:function epH(){},
epo:function epo(d){this.a=d},
epp:function epp(d){this.a=d},
epq:function epq(d){this.a=d},
epr:function epr(d){this.a=d},
eps:function eps(d){this.a=d},
ept:function ept(d){this.a=d},
epu:function epu(d){this.a=d},
epv:function epv(d){this.a=d},
epw:function epw(d){this.a=d},
epx:function epx(d){this.a=d},
epz:function epz(d){this.a=d},
epA:function epA(d,e){this.a=d
this.b=e},
eqT:function eqT(d,e,f){this.a=d
this.b=e
this.c=f},
eqS:function eqS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqR:function eqR(d,e,f){this.a=d
this.b=e
this.c=f},
eqQ:function eqQ(d,e){this.a=d
this.b=e},
epd:function epd(d,e){this.a=d
this.b=e},
epW:function epW(d){this.a=d},
epV:function epV(d){this.a=d},
epU:function epU(d,e){this.a=d
this.b=e},
epX:function epX(d){this.a=d},
epY:function epY(d){this.a=d},
epZ:function epZ(d,e){this.a=d
this.b=e},
eqz:function eqz(d){this.a=d},
esK:function esK(d,e){this.a=d
this.b=e},
esJ:function esJ(d,e){this.a=d
this.b=e},
esI:function esI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esG:function esG(d){this.a=d},
esH:function esH(d,e){this.a=d
this.b=e},
esE:function esE(){},
esF:function esF(){},
eui:function eui(){},
euj:function euj(d,e){this.a=d
this.b=e},
euk:function euk(){},
eul:function eul(d){this.a=d},
eum:function eum(d,e){this.a=d
this.b=e},
epi:function epi(d,e){this.a=d
this.b=e},
eqn:function eqn(){},
eqo:function eqo(){},
eqp:function eqp(){},
eqs:function eqs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eqr:function eqr(d,e){this.a=d
this.b=e},
eqq:function eqq(d,e,f){this.a=d
this.b=e
this.c=f},
erT:function erT(d){this.a=d},
erS:function erS(){},
erU:function erU(d,e){this.a=d
this.b=e},
erV:function erV(d,e){this.a=d
this.b=e},
erR:function erR(d){this.a=d},
erW:function erW(d,e){this.a=d
this.b=e},
erQ:function erQ(d){this.a=d},
erX:function erX(d,e){this.a=d
this.b=e},
erP:function erP(d){this.a=d},
erY:function erY(d,e){this.a=d
this.b=e},
erO:function erO(d){this.a=d},
erZ:function erZ(d,e){this.a=d
this.b=e},
erN:function erN(d,e){this.a=d
this.b=e},
es_:function es_(d,e){this.a=d
this.b=e},
erM:function erM(d){this.a=d},
es0:function es0(d,e){this.a=d
this.b=e},
erL:function erL(d){this.a=d},
erE:function erE(d,e){this.a=d
this.b=e},
erF:function erF(d){this.a=d},
erG:function erG(d){this.a=d},
erD:function erD(d){this.a=d},
erH:function erH(d,e){this.a=d
this.b=e},
erC:function erC(d){this.a=d},
erI:function erI(d,e){this.a=d
this.b=e},
erB:function erB(d){this.a=d},
erJ:function erJ(d,e){this.a=d
this.b=e},
erA:function erA(d){this.a=d},
erK:function erK(d){this.a=d},
eqM:function eqM(d){this.a=d},
eqN:function eqN(d){this.a=d},
eqP:function eqP(d){this.a=d},
eqH:function eqH(d){this.a=d},
eqG:function eqG(d,e){this.a=d
this.b=e},
eqI:function eqI(d,e){this.a=d
this.b=e},
eqJ:function eqJ(d){this.a=d},
eqK:function eqK(d){this.a=d},
eqL:function eqL(d,e){this.a=d
this.b=e},
eqO:function eqO(d){this.a=d},
ev3:function ev3(d){this.a=d},
ev4:function ev4(d){this.a=d},
es3:function es3(d,e){this.a=d
this.b=e},
es2:function es2(d,e){this.a=d
this.b=e},
es1:function es1(d,e){this.a=d
this.b=e},
es4:function es4(d){this.a=d},
es5:function es5(d){this.a=d},
ets:function ets(d,e){this.a=d
this.b=e},
ett:function ett(d){this.a=d},
etu:function etu(d){this.a=d},
etF:function etF(d){this.a=d},
etQ:function etQ(d){this.a=d},
eu0:function eu0(d){this.a=d},
eu7:function eu7(d){this.a=d},
eu8:function eu8(d){this.a=d},
eu9:function eu9(d){this.a=d},
eua:function eua(d){this.a=d},
eub:function eub(d,e){this.a=d
this.b=e},
etv:function etv(d){this.a=d},
etw:function etw(d){this.a=d},
etx:function etx(d){this.a=d},
ety:function ety(d){this.a=d},
etz:function etz(d){this.a=d},
etA:function etA(d){this.a=d},
etB:function etB(d){this.a=d},
etC:function etC(d){this.a=d},
etD:function etD(d){this.a=d},
etE:function etE(d){this.a=d},
etG:function etG(d){this.a=d},
etH:function etH(d){this.a=d},
etI:function etI(d){this.a=d},
etJ:function etJ(d){this.a=d},
etK:function etK(d){this.a=d},
etL:function etL(d){this.a=d},
etM:function etM(d){this.a=d},
etN:function etN(d){this.a=d},
etO:function etO(d){this.a=d},
eti:function eti(d){this.a=d},
etP:function etP(d){this.a=d},
etq:function etq(d){this.a=d},
etR:function etR(d){this.a=d},
etp:function etp(d,e){this.a=d
this.b=e},
etS:function etS(d,e){this.a=d
this.b=e},
etT:function etT(d,e){this.a=d
this.b=e},
eto:function eto(d,e,f){this.a=d
this.b=e
this.c=f},
ete:function ete(d,e){this.a=d
this.b=e},
etr:function etr(d){this.a=d},
euc:function euc(d,e){this.a=d
this.b=e},
eue:function eue(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eud:function eud(d,e){this.a=d
this.b=e},
etU:function etU(d,e,f){this.a=d
this.b=e
this.c=f},
etn:function etn(d,e,f){this.a=d
this.b=e
this.c=f},
etd:function etd(d,e,f){this.a=d
this.b=e
this.c=f},
etb:function etb(d,e){this.a=d
this.b=e},
etV:function etV(d,e){this.a=d
this.b=e},
etm:function etm(d,e){this.a=d
this.b=e},
etc:function etc(d,e){this.a=d
this.b=e},
eta:function eta(d,e){this.a=d
this.b=e},
etW:function etW(d){this.a=d},
etl:function etl(d){this.a=d},
etX:function etX(d){this.a=d},
etY:function etY(d){this.a=d},
etZ:function etZ(d){this.a=d},
eu_:function eu_(d){this.a=d},
etk:function etk(d){this.a=d},
eu1:function eu1(d){this.a=d},
eu2:function eu2(d){this.a=d},
eu3:function eu3(d,e){this.a=d
this.b=e},
etj:function etj(d){this.a=d},
eu4:function eu4(d,e){this.a=d
this.b=e},
eth:function eth(d){this.a=d},
eu5:function eu5(d,e){this.a=d
this.b=e},
etg:function etg(d){this.a=d},
eu6:function eu6(d,e){this.a=d
this.b=e},
etf:function etf(d){this.a=d},
epR:function epR(d,e,f){this.a=d
this.b=e
this.c=f},
epQ:function epQ(d,e){this.a=d
this.b=e},
euz:function euz(d,e){this.a=d
this.b=e},
euy:function euy(d,e){this.a=d
this.b=e},
euA:function euA(d,e){this.a=d
this.b=e},
eux:function eux(d,e){this.a=d
this.b=e},
eqZ:function eqZ(d,e){this.a=d
this.b=e},
eqY:function eqY(d){this.a=d},
er_:function er_(d,e){this.a=d
this.b=e},
eqX:function eqX(d){this.a=d},
erw:function erw(){},
erv:function erv(){},
euM:function euM(d){this.a=d},
euL:function euL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euK:function euK(d,e){this.a=d
this.b=e},
euF:function euF(d,e){this.a=d
this.b=e},
euJ:function euJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euG:function euG(d,e){this.a=d
this.b=e},
euB:function euB(d){this.a=d},
euC:function euC(d){this.a=d},
euD:function euD(d){this.a=d},
euE:function euE(d){this.a=d},
euH:function euH(d,e){this.a=d
this.b=e},
euI:function euI(d,e){this.a=d
this.b=e},
euN:function euN(d){this.a=d},
eqg:function eqg(d){this.a=d},
eqf:function eqf(d,e,f){this.a=d
this.b=e
this.c=f},
eqe:function eqe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eq3:function eq3(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eq4:function eq4(d,e){this.a=d
this.b=e},
eq5:function eq5(d,e){this.a=d
this.b=e},
eq6:function eq6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eq2:function eq2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eq7:function eq7(d,e){this.a=d
this.b=e},
eq9:function eq9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eq8:function eq8(d,e){this.a=d
this.b=e},
eqa:function eqa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eq1:function eq1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqb:function eqb(d,e){this.a=d
this.b=e},
eq0:function eq0(d,e){this.a=d
this.b=e},
eqc:function eqc(d,e){this.a=d
this.b=e},
eq_:function eq_(d){this.a=d},
eqd:function eqd(d,e){this.a=d
this.b=e},
es7:function es7(d){this.a=d},
es6:function es6(d){this.a=d},
es8:function es8(d,e){this.a=d
this.b=e},
erc:function erc(d,e){this.a=d
this.b=e},
erd:function erd(d,e){this.a=d
this.b=e},
erb:function erb(d,e){this.a=d
this.b=e},
ere:function ere(d,e){this.a=d
this.b=e},
era:function era(d,e){this.a=d
this.b=e},
erf:function erf(d,e){this.a=d
this.b=e},
er9:function er9(d,e){this.a=d
this.b=e},
erg:function erg(d,e){this.a=d
this.b=e},
er8:function er8(d,e){this.a=d
this.b=e},
erh:function erh(d,e){this.a=d
this.b=e},
er7:function er7(d,e){this.a=d
this.b=e},
eri:function eri(d,e,f){this.a=d
this.b=e
this.c=f},
er6:function er6(d,e){this.a=d
this.b=e},
erj:function erj(d,e,f){this.a=d
this.b=e
this.c=f},
er5:function er5(d,e){this.a=d
this.b=e},
erk:function erk(d,e){this.a=d
this.b=e},
er4:function er4(d,e,f){this.a=d
this.b=e
this.c=f},
er1:function er1(d,e){this.a=d
this.b=e},
erl:function erl(d,e){this.a=d
this.b=e},
er3:function er3(d,e){this.a=d
this.b=e},
erm:function erm(d,e){this.a=d
this.b=e},
er2:function er2(d,e,f){this.a=d
this.b=e
this.c=f},
er0:function er0(d,e){this.a=d
this.b=e},
ern:function ern(d,e){this.a=d
this.b=e},
erq:function erq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ep_:function ep_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
et4:function et4(d,e){this.a=d
this.b=e},
et2:function et2(d){this.a=d},
et3:function et3(d,e){this.a=d
this.b=e},
aeS:function aeS(d,e,f){this.a=d
this.b=e
this.c=f},
ayx:function ayx(d,e){this.c=d
this.a=e},
bc6:function bc6(d,e){var _=this
_.e=_.d=$
_.cR$=d
_.b2$=e
_.c=_.a=null},
d0V:function d0V(d){this.a=d},
d0U:function d0U(d){this.a=d},
bck:function bck(d,e){this.c=d
this.a=e},
d1g:function d1g(d){this.a=d},
d1h:function d1h(d){this.a=d},
JK:function JK(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bc5:function bc5(){this.d=!1
this.c=this.a=null},
d0S:function d0S(d){this.a=d},
d0O:function d0O(d){this.a=d},
d0T:function d0T(d){this.a=d},
d0N:function d0N(d){this.a=d},
d0R:function d0R(d){this.a=d},
d0P:function d0P(d){this.a=d},
d0Q:function d0Q(d,e){this.a=d
this.b=e},
Pw:function Pw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a_f:function a_f(d,e,f){this.c=d
this.d=e
this.a=f},
aDY:function aDY(d,e,f){var _=this
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
evK:function evK(){},
evA:function evA(d){this.a=d},
evJ:function evJ(d){this.a=d},
evB:function evB(d){this.a=d},
evC:function evC(d){this.a=d},
evw:function evw(d){this.a=d},
evx:function evx(d,e){this.a=d
this.b=e},
evy:function evy(d){this.a=d},
evz:function evz(d,e,f){this.a=d
this.b=e
this.c=f},
evH:function evH(){},
evI:function evI(d){this.a=d},
evD:function evD(d){this.a=d},
evE:function evE(d){this.a=d},
evF:function evF(d){this.a=d},
evG:function evG(d){this.a=d},
evL:function evL(d,e,f){this.a=d
this.b=e
this.c=f},
evN:function evN(d,e){this.a=d
this.b=e},
evM:function evM(d){this.a=d},
JR:function JR(d,e){this.c=d
this.a=e},
bqI:function bqI(d,e){this.b=d
this.a=e},
bgV:function bgV(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bgU:function bgU(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aJF:function aJF(){},
aLy:function aLy(){},
bwn:function bwn(){},
aLz:function aLz(){},
fER(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fER=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xe.c8().M3(B.a(["pdf"],x.s),A.tO,!0),$async$fER)
case 3:q=e
if(q==null||J.cm(q.a)){u=null
w=1
break}t=J.fq(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bnX(s,"data:application/pdf;base64,"+A.cJ.gct().aK(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fER,v)},
i5y(d){var w,v,u,t,s,r
try{w=B.jr(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cE(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c8(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).l1(0,w).gL(0)
if(t>0){s=J.aQc(t,1,200)
return s}}catch(r){}return 1},
fEI(d){return C.i5x(d)},
i5x(d){var w=0,v=B.j(x.T),u
var $async$fEI=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fEI,v)},
bBT(d,e,f,g){return C.i5H(d,e,f,g)},
i5H(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bBT=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.ea(b6,x.co).gae(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.hmH(b9,new B.as(r,q))
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
g=new B.qm()
f=B.B6(g,null)
a7=B.N()
a7.r=A.qO.gp(0)
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
return B.b(a3.zj(800,h),$async$bBT)
case 7:a4=c1
a3.t()
w=8
return B.b(a4.hu(A.h0),$async$bBT)
case 8:a5=c1
a4.t()
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
return B.i($async$bBT,v)},
aPp(d,e,f){return C.i5v(d,e,f)},
i5v(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aPp=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.au:e
r.c=f==null?5.2:f
w=3
return B.b(B.ahk(d,e,f,new C.fEG(r,q),q,"Sign document"),$async$aPp)
case 3:if(!new B.ea(q,x.co).gae(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bBT(q,t,r.b,r.c),$async$aPp)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b0D(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPp,v)},
i5F(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hfS(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hfS(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b3(A.a.aX(A.o.fV(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.ab(q.c*100,2)+"%;top:"+A.k.ab(q.d*100,2)+"%;width:"+A.k.ab(q.e*100,2)+"%;height:"+A.k.ab(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b3(A.a.aX(A.o.fV(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d+='<div class="txt" style="font-size:'+B.u(p)+"px;color:#"+o+'">'+B.aL(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lz&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aL(p,"&",h)
p=B.aL(p,"<",g)
p=B.aL(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aL(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hft(q.ay)+";border:2px solid "+C.hft(q.ch)+'"></div>'
break
case 5:l=C.fZS(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aL(n,'"',e)+"</div>")
p=p?null:l.gajy()
if(p==null)p=A.axm
n=B.T(p)
k=n.k("nn<1>")
j=new B.nn(p,0,8,k)
j.zJ(p,0,8,n.c)
j=new B.bS(j,j.gL(0),k.k("bS<ak.E>"))
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
hft(d){var w=A.o.aC(d,24)
return"rgba("+(A.o.aC(d,16)&255)+","+(A.o.aC(d,8)&255)+","+(d&255)+","+A.k.ab((w&255)/255,3)+")"},
hfS(d){var w=B.aL(d,"&","&amp;")
w=B.aL(w,"<","&lt;")
w=B.aL(w,">","&gt;")
return B.aL(w,'"',"&quot;")},
bBR(d,e){var w=0,v=B.j(x.H)
var $async$bBR=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.ca(null,null,!0,null,new C.fEP(e,C.i5F(e),d),d,null,!0,!0,x.H),$async$bBR)
case 2:return B.h(null,v)}})
return B.i($async$bBR,v)},
bBS(){var w=0,v=B.j(x.T),u,t,s
var $async$bBS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.GB(92,2400),$async$bBS)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fEI(s),$async$bBS)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBS,v)},
aPq(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aPq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.h06(d),$async$aPq)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aL(s,r,"_"))
u=Y.fHf(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPq,v)},
h9M(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b0D:function b0D(d,e,f){this.a=d
this.b=e
this.c=f},
fEG:function fEG(d,e){this.a=d
this.b=e},
fEP:function fEP(d,e,f){this.a=d
this.b=e
this.c=f},
fEM:function fEM(d){this.a=d},
fEN:function fEN(d,e,f){this.a=d
this.b=e
this.c=f},
fEO:function fEO(d,e,f){this.a=d
this.b=e
this.c=f},
i5w(d){return C.kw(d.w)},
i5D(d){var w,v,u,t
if(d.length===0||!A.d.d7(d,C.i7m()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yG(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=$.hst()
if(w.b.test(u))return u
return null},
hmJ(d,e,f){var w,v,u=C.hBa(d),t=$.pw()
for(w=0;w<80;++w){v=u+A.a.aX(A.o.u(t.az(1000)),3,"0")
if(!f.q(0,v))return v}return u+A.a.aX(A.o.u(Date.now()%1000),3,"0")},
i5J(d){var w,v,u,t,s=B.aY(x.N)
for(w=J.aW(d.a),v=new B.f4(w,d.b);v.C();){u=w.gT(w).y
t=C.yG(u==null?"":u)
if(t!=null)s.M(0,t)}return s},
fEE(d,e){var w,v=d.y,u=C.yG(v==null?"":v)
if(u!=null)return d.y=u
w=C.i5J(new B.a_(e,new C.fEF(d),B.T(e).k("a_<1>")))
v=d.x
return d.y=C.hmJ(v==null?"":v,null,w)},
i5I(d){var w,v
if(d.length!==1)return null
w=A.d.gH(d)
if(!C.kw(w.w))return null
v=w.y
return C.yG(v==null?"":v)},
hFy(){var w,v=$.pw(),u=J.e6(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.az(32)]
return"SL"+A.d.hs(u)},
VO(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$VO=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c2(),$async$VO)
case 3:if(!e){u=B.U(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f6("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bJ),$async$VO)
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
return B.i($async$VO,v)},
VP(d){return C.hFz(d)},
hFz(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$VP=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c2(),$async$VP)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hI("ngmy_slides_transfer_qr_stashes_v1",B.F(["stashes",d,"savedAt",new B.S(Date.now(),0,!1).a5().ac()],x.N,x.z),!1,!1,A.cG,null),$async$VP)
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
return B.i($async$VP,v)},
a7N(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7N=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c2(),$async$a7N)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.VO(),$async$a7N)
case 4:s=a6
r=C.yG(a2==null?"":a2)
if(r==null)r=a3!=null?C.hmJ(a3,null,A.IO):null
q=x.N
p=B.aY(q)
for(o=J.dl(s),n=J.aW(o.gi8(s)),m=x.f;n.C();){l=n.gT(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.yG(J.k(k==null?"":k))
if(j!=null)p.M(0,j)}n=o.gdQ(s),n=n.gae(n),k=x.z
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
if(D.T3.q(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yG(J.k(q==null?"":q))
if(f==null)f=C.h9R(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.VP(s),$async$a7N)
case 7:u=new B.aFo(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hFy()
n=r==null
d=n?C.h9R(p):r
q=B.U(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dK.aK(t)
q.n(0,"payload",A.cJ.gct().aK(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.S(Date.now(),0,!1).a5().ac())
if(D.T3.q(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.VP(s),$async$a7N)
case 8:u=new B.aFo(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7N,v)},
h9R(d){var w,v,u=$.pw()
for(w=0;w<200;++w){v="SL"+A.a.aX(A.o.u(u.az(1000)),3,"0")
if(d.M(0,v))return v}return"SL"+A.a.aX(A.o.u(Date.now()%1000),3,"0")},
aqX(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aqX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c2(),$async$aqX)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.VO(),$async$aqX)
case 6:t=f
s=J.a3(t)
r=s.gL(t)
s.bs(t,new C.ceF(q))
w=s.gL(t)!==r?7:8
break
case 7:w=9
return B.b(C.VP(t),$async$aqX)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$aqX,v)},
aqW(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$aqW=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yG(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c2(),$async$aqW)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.VO(),$async$aqW)
case 6:t=o.jN(f),t=t.gae(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gT(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.yG(J.k(q==null?"":q))===p){u=C.a7M(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aqW,v)},
a7M(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a7M=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c2(),$async$a7M)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.VO(),$async$a7M)
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
if(D.T3.q(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.A(l.h(n,"sharedByAdmin"),!0))try{r=A.S.aL(0,s,null)
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
return B.b(C.VP(p),$async$a7M)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7M,v)},
i5C(d,e,f){var w,v=B.U(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.S(Date.now(),0,!1).a5().ac())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.T(d).k("M<1,a5<m,@>>")
w=B.C(new B.M(d,new C.fEL(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fET(d,e,f,g){var w
if(e!=null){w=B.U(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.S(Date.now(),0,!1).a5().ac())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ag())
return A.S.ao(w,null)}return A.S.ao(C.i5C(d==null?B.a([],x.D):d,f,g),null)},
fES(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fES=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a7N(h,d,e,f,g),$async$fES)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yG(e==null?"":e)
u=new B.aFb(s,t)
w=1
break}t=A.dK.aK(h)
t=A.kn.gct().aK(t)
u=new B.aFb(C.yG(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fES,v)},
h08(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d1(q,"NGMYSLIDESYNC2|"))return!0
if(J.d1(q,"NGMYSLIDECODE|"))return!0
if(J.d1(q,"NGMY_SL:"))return!0
if(J.f0(q,s)||J.f0(q,r))return!0
if(J.d1(q,"{"))try{w=A.S.aL(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.A(v,s)||J.A(v,r)
return u}}catch(t){}return!1},
i5G(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.h08(v))return v
u=A.a.cK(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b3(v,u))
if(C.h08(t))return t}s=A.a.cK(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b3(v,s))
if(C.h08(t))return t}}return null},
fEH(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d1(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d1(t,"NGMY_SL:"))w=v.a(A.S.aL(0,A.cf.cz(0,A.cF.aK(J.n8(t,8))),null))
else w=v.a(A.S.aL(0,t,null))
v=C.hPe(w)
return v}catch(u){v=B.a([],x.D)
return v}},
ah5(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$ah5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.aqW(t[1]),$async$ah5)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fEH(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yG(q)
w=r!=null&&!A.a.q(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.aqW(r),$async$ah5)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fEH(s)
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
return B.b(C.a7M(t[1]),$async$ah5)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fEH(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fEH(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ah5,v)},
hPe(d){var w,v,u,t=J.a3(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.A(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.T3.q(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.h05(C.VK(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d9(u,x.f)
t=B.cC(t,new C.fby(w),t.$ti.k("J.E"),x.I)
t=B.C(t,B.a6(t).k("J.E"))
return t}return B.a([],x.D)},
h05(d,e){var w,v,u,t,s,r,q,p,o=d.ag()
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
J.aG(s,"id",""+1000*r+"_"+q)}}p=C.VK(B.a2(o,x.N,x.z))
if(e&&C.kw(p.w))p.Q=new B.S(Date.now(),0,!1).a5().bS(144e8).ac()
return p},
bBC(){var w=0,v=B.j(x.aT),u,t,s
var $async$bBC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.GA(),$async$bBC)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.ah5(s),$async$bBC)
case 4:t=e
u=J.cm(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBC,v)},
fNz(d){var w=0,v=B.j(x.T),u,t
var $async$fNz=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hY(D.WM,!0,"Dismiss",d,new C.fNA(),new C.fNB(),A.Fn,!0,x.N),$async$fNz)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.I(x.q).f.R(D.eYI)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fNz,v)},
i9v(d,e,f,g,h){return B.a4(d,!1).cm(B.e9(new C.fNC(h,e,g,f),!0,null,x.H))},
fEF:function fEF(d){this.a=d},
ceF:function ceF(d){this.a=d},
fEL:function fEL(){},
fby:function fby(d){this.a=d},
fNA:function fNA(){},
fNB:function fNB(){},
fNC:function fNC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VM:function VM(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDW:function aDW(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
evg:function evg(){},
evc:function evc(d,e){this.a=d
this.b=e},
evf:function evf(d,e){this.a=d
this.b=e},
evd:function evd(d){this.a=d},
eve:function eve(d){this.a=d},
evh:function evh(d){this.a=d},
evi:function evi(d){this.a=d},
evl:function evl(d){this.a=d},
evm:function evm(d){this.a=d},
evk:function evk(d){this.a=d},
evn:function evn(d){this.a=d},
evj:function evj(d){this.a=d},
evo:function evo(d,e){this.a=d
this.b=e},
evb:function evb(d,e){this.a=d
this.b=e},
eva:function eva(d,e){this.a=d
this.b=e},
VN:function VN(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjF:function bjF(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
evp:function evp(d,e){this.a=d
this.b=e},
evq:function evq(d){this.a=d},
evr:function evr(){},
evs:function evs(d){this.a=d},
evt:function evt(d,e){this.a=d
this.b=e},
aDT:function aDT(d){this.a=d},
aDU:function aDU(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eoU:function eoU(d){this.a=d},
eoT:function eoT(){},
eoV:function eoV(d){this.a=d},
eoQ:function eoQ(d){this.a=d},
eoP:function eoP(){},
eoR:function eoR(d){this.a=d},
eoS:function eoS(d){this.a=d},
btY:function btY(){},
aqY:function aqY(d){this.a=d},
aDX:function aDX(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
evv:function evv(d){this.a=d},
evu:function evu(d){this.a=d},
hUs(){var w,v,u,t
for(v=0;v<4;++v){w=D.d55[v]
try{if(Ab.bWy(w)){u=w
return u}}catch(t){}}return null},
R3(d,e){return C.i2n(d,e)},
i2n(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$R3=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hUs()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.od?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qz(c6,!0)
b6.toString
p=B.a4(c6,!0)
b7=new B.cu(null,x.A)
b8=A.d.gH(c3)
b9=$.aw()
o=new B.eI(b8,b9)
n=new B.eI("Getting ready\u2026",b9)
m=new B.eI(0,b9)
l=B.op(new C.fz_(c2,b7,o),!1,!1)
b6.lQ(0,l)
b9=x.H
B.ca(null,A.dc,!1,null,new C.fz0(n,m),c6,null,!0,!0,b9)
k=new C.fz4(b7)
j=new C.fz5()
i=null
t=4
b3=c2.a
h=Ai.aRH(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fQi(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ab.aWC(f,B.F(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.HL.yp(i,"dataavailable",new C.fz1(e))
d=new B.bV(new B.bg($.bz,x.dT),x.b2)
A.HL.yp(i,"stop",new C.fz2(d))
J.ahF(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$R3)
case 8:w=7
return B.b(c5.$1(d0),$async$R3)
case 7:a0=d0
J.fQk(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ahF(n,"Drawing slide "+B.u(a1+1)+" of "+b8+"\u2026")
J.ahF(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$R3)
case 15:w=14
return B.b(c5.$1(d0),$async$R3)
case 14:a0=d0
case 13:J.fQk(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ahF(n,"Recording slide "+B.u(a1+1)+" of "+c3.length+" \xb7 "+B.u(a3)+" s")
a4=new B.S(Date.now(),0,!1).bS(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbq())b3=b3===b8.gbq()&&0<b8.gcA()
else b3=!0
if(!b3){w=17
break}J.fQk(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bM(A.fp,null,b9),$async$R3)
case 18:w=16
break
case 17:J.ahF(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ahF(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.d8(0,A.nW),$async$R3)
case 19:a5=A.d.gH(q.split(";"))
a6=B.hR(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.A(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aL(c3,b3,"_"))
c0=B.n9(a7)
c0.download=B.u(J.ad(a9)===0?"presentation":a9)+"."+B.u(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.Lg(b0)
J.lY(b0)
B.bM(A.pQ,new C.fz3(a7),b9)
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
if(p.pB())p.eE()
c3=o
b3=$.aw()
c3.si0(b3)
J.aQg(c3,0)
c3=n
c3.si0(b3)
J.aQg(c3,0)
c3=m
c3.si0(b3)
J.aQg(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$R3,v)},
fz_:function fz_(d,e,f){this.a=d
this.b=e
this.c=f},
fyZ:function fyZ(){},
fz0:function fz0(d,e){this.a=d
this.b=e},
fz4:function fz4(d){this.a=d},
fz5:function fz5(){},
fz1:function fz1(d){this.a=d},
fz2:function fz2(d){this.a=d},
fz3:function fz3(d){this.a=d},
bu9:function bu9(d,e,f){this.c=d
this.d=e
this.a=f},
f5I:function f5I(){},
f5J:function f5J(){},
cf0(d){var w=0,v=B.j(x.at),u,t,s
var $async$cf0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ar5(d,A.zo),$async$cf0)
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
a7t:function a7t(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjo:function bjo(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
ee0:function ee0(d){this.a=d},
edZ:function edZ(d){this.a=d},
ee_:function ee_(d,e){this.a=d
this.b=e},
a8n:function a8n(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
a8o:function a8o(d,e){this.a=d
this.b=e},
b2h:function b2h(){},
chc:function chc(){},
chd:function chd(){},
che:function che(d,e,f,g,h,i,j,k,l){var _=this
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
htt(d){return new C.ahX(d)},
a2z:function a2z(){},
ahX:function ahX(d){this.a=d},
aQB:function aQB(){},
awp:function awp(d,e){this.d=d
this.b=e
this.a=null},
aS7:function aS7(d){this.b=d
this.a=null},
fub(d,e){var w=0,v=B.j(x.H)
var $async$fub=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.W().gxA().LM(d,e),$async$fub)
case 2:B.fHl()
return B.h(null,v)}})
return B.i($async$fub,v)},
hk_(d,e){return(A.rm[(d^e)&255]^A.o.aC(d,8))>>>0},
frs(d,e,f,g,h,i){var w=C.hZK(d,A.dd,f,null,A.cX,g,h,i)
return w},
hlS(d){var w=F.hmA(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hBa(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.p7.h(0,w)
if(v!=null)return v
for(u=A.p7.gdQ(A.p7),u=u.gae(u);u.C();){t=u.gT(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aL(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
hm_(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<45;++w)v+="- "+D.d3f[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bzN(d,e){return C.hWe(d,e)},
hWe(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bzN=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hR([d],"application/pdf")
n=x.z
q=B.aTM(B.a([r],x.e3),e,B.F(["type","application/pdf"],n,n))
p=B.cz(B.F(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ei(B.k0(o,"share",[p]),x.H),$async$bzN)
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
return B.i($async$bzN,v)},
h0_(){var w=0,v=B.j(x.y),u,t,s
var $async$h0_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fj1
s=$.bzk
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bzN(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h0_,v)},
bB7(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bB7=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fj1
l=$.bzk
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Y.hgx()?3:4
break
case 3:w=5
return B.b(C.bzN(m,k),$async$bB7)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bzl
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
J.Lg(q)
w=10
return B.b(B.bM(A.a1,null,x.H),$async$bB7)
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
return B.i($async$bB7,v)},
h_R(){var w=0,v=B.j(x.y),u,t,s,r
var $async$h_R=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bzl
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lF.qN(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$h_R,v)},
h07(d,e){var w=0,v=B.j(x.H),u,t
var $async$h07=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hR([d],"text/html"))
t.toString
u=window
u.toString
A.lF.qN(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$h07,v)},
b1e(d,e){var w=0,v=B.j(x.y),u
var $async$b1e=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b1g(d,e),$async$b1e)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b1f(d),$async$b1e)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b1e,v)}},D,H,K,Al,A7,X,V,W,Am,G,F,E,Q,Y,Z,An,Ao,A8,L,Ap,A_,O,A0,A9,M,Aa,Aq,Ar,P,A1,As,Ab,Ac,At,Ad,Ae,Af,Au,Av,R,Aw,I,Ax,S,T,Ay,N,A2,A3,A4
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
Am=c[123]
G=c[177]
F=c[31]
E=c[210]
Q=c[138]
Y=c[29]
Z=c[165]
An=c[221]
Ao=c[173]
A8=c[110]
L=c[212]
Ap=c[122]
A_=c[60]
O=c[187]
A0=c[75]
A9=c[100]
M=c[147]
Aa=c[111]
Aq=c[89]
Ar=c[214]
P=c[115]
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
C.nX.prototype={
v2(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.tS(t,v)
return new C.nX(t===0?!1:w,v,t)},
bLb(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.D_()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.tS(w,u)
return new C.nX(r===0?!1:s,u,r)},
bLH(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.D_()
w=o-d
if(w<=0)return p.a?$.h1x():$.D_()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.tS(w,u)
q=new C.nX(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aF(0,$.a2l())
return q},
dY(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.V(B.dH("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.am(e,16)
if(A.o.F(e,16)===0)return r.bLb(v)
u=w+v+1
t=new Uint16Array(u)
C.hd6(r.b,w,e,t)
w=r.a
s=C.tS(u,t)
return new C.nX(s===0?!1:w,t,s)},
mq(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.V(B.dH("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.am(e,16)
u=A.o.F(e,16)
if(u===0)return n.bLH(v)
t=w-v
if(t<=0)return n.a?$.h1x():$.D_()
s=n.b
r=new Uint16Array(t)
C.hLd(s,w,e,r)
w=n.a
q=C.tS(t,r)
p=new C.nX(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dY(1,u)-1)!==0)return p.aF(0,$.a2l())
for(o=0;o<v;++o)if(s[o]!==0)return p.aF(0,$.a2l())}return p},
aM(d,e){var w,v=this.a
if(v===e.a){w=C.cFc(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a82(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a82(t,e)
if(s===0)return $.D_()
if(r===0)return t.a===e?t:t.v2(0)
w=s+1
v=new Uint16Array(w)
C.hLb(t.b,s,d.b,r,v)
u=C.tS(w,v)
return new C.nX(u===0?!1:e,v,u)},
Hg(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.D_()
w=d.c
if(w===0)return t.a===e?t:t.v2(0)
v=new Uint16Array(s)
C.b9k(t.b,s,d.b,w,v)
u=C.tS(s,v)
return new C.nX(u===0?!1:e,v,u)},
bya(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.tS(r,u)
return new C.nX(!1,u,s)},
by9(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.tS(u,r)
return new C.nX(!1,r,v)},
byb(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.tS(p,m)
return new C.nX(s!==0,m,s)},
UI(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.D_()
w=t.a
if(w===e.a){if(w){w=$.a2l()
return t.Hg(w,!0).byb(e.Hg(w,!0),!0).a82(w,!0)}return t.bya(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.by9(v.Hg($.a2l(),!1),!1)},
ad(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a82(e,v)
if(C.cFc(u.b,t,e.b,w)>=0)return u.Hg(e,v)
return e.Hg(u,!v)},
aF(d,e){var w,v,u=this,t=u.c
if(t===0)return e.v2(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a82(e,v)
if(C.cFc(u.b,t,e.b,w)>=0)return u.Hg(e,v)
return e.Hg(u,!v)},
aI(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.D_()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hd7(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.tS(w,t)
return new C.nX(q===0?!1:r,t,q)},
bLa(d){var w,v,u,t
if(this.c<d.c)return $.D_()
this.aR1(d)
w=$.fVU.c8()-$.ax8.c8()
v=C.fVW($.fVT.c8(),$.ax8.c8(),$.fVU.c8(),w)
u=C.tS(w,v)
t=new C.nX(!1,v,u)
return this.a!==d.a&&u>0?t.v2(0):t},
cne(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aR1(d)
w=C.fVW($.fVT.c8(),0,$.ax8.c8(),$.ax8.c8())
v=C.tS($.ax8.c8(),w)
u=new C.nX(!1,w,v)
if($.fVV.c8()>0)u=u.mq(0,$.fVV.c8())
return t.a&&u.c>0?u.v2(0):u},
aR1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hd3&&d.c===$.hd5&&g.b===$.hd2&&d.b===$.hd4)return
w=d.b
v=d.c
u=16-A.o.gajX(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hd1(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hd1(g.b,f,u,r)}else{r=C.fVW(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fVX(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cFc(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.b9k(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b9k(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hLc(p,r,i);--o
C.hd7(h,j,0,r,o,s)
if(r[i]<h){m=C.fVX(j,s,o,n)
C.b9k(r,l,n,m,r)
while(--h,r[i]<h)C.b9k(r,l,n,m,r)}--i}$.hd2=g.b
$.hd3=f
$.hd4=w
$.hd5=v
$.fVT.b=r
$.fVU.b=l
$.ax8.b=s
$.fVV.b=u},
gX(d){var w,v,u,t=new C.cFd(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cFe().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nX&&this.aM(0,e)===0},
tg(d,e){return this.aM(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
uY(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
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
s=new C.cFf(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cFg(w)
if(J.A(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.l9(A.aH.gaP(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.v2(0):r
while(v.c>1){u=$.hqo()
if(u.c===0)B.b8(D.b4l)
t=v.cne(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bLa(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dx(w,x.bJ).hs(0)},
$iaRk:1,
$ihL:1}
C.aQL.prototype={
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
cLs(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gH(d){return A.d.gH(this.a)},
gak(d){return A.d.gak(this.a)},
gal(d){return this.a.length===0},
gcl(d){return this.a.length!==0},
gae(d){var w=this.a
return new J.k3(w,w.length,B.T(w).k("k3<1>"))}}
C.RH.prototype={
cTt(){var w,v
if(this.as==null)this.bcc()
w=this.as
v=w==null?null:w.aoE()
return v==null?null:v.eK()},
bcc(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.aoE().eK()
this.as=new C.bNm(v)}},
gY(d){return this.at}}
C.a3x.prototype={
a3(){return"CompressionType."+this.b}}
C.bGK.prototype={
ey(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cp()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dY(v,u)+(s.b&A.yY[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cp()}w=A.o.dY(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fG(u,t)&A.yY[d])
s.c=t}return v}}
C.bF4.prototype={
cJI(d,e){var w,v,u,t,s,r=this,q=new C.bGK(d)
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
t=r.clv(q)
if(t<0)return!1
if(t===0){q.ey(8)
q.ey(8)
q.ey(8)
q.ey(8)
s=r.cly(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.ey(8)
q.ey(8)
q.ey(8)
q.ey(8)
return!0}}return!0},
clv(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.ey(8)
if(t!==D.dlP[u])v=!1
if(t!==D.cZs[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cly(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.ey(1),d2=((d3.ey(8)<<8|d3.ey(8))<<8|d3.ey(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.ey(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.ey(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c0U()
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
u[w]=l}c9.fr=B.c3(6,$.hou(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.ey(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.ey(1)===0)break
i=d3.ey(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hot()
u=x.an
c9.y=B.c3(6,v,!1,u)
c9.z=B.c3(6,v,!1,u)
c9.Q=B.c3(6,v,!1,u)
c9.as=new Int32Array(6)
for(j=0;j<q;++j){v=c9.y
v[j]=new Int32Array(258)
u=c9.z
u[j]=new Int32Array(258)
o=c9.Q
o[j]=new Int32Array(258)
for(n=c9.fr,h=32,g=0,w=0;w<r;++w){f=n[j][w]
if(f>g)g=f
if(f<h)h=f}c9.bXl(v[j],u[j],o[j],n[j],h,g,r)
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
d4.bH(c3)
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
d4.bH(c3)
c1=c1<<8^D.Hf[c1>>>24&255^v];--c2}d4.bH(c3)
c1=(c1<<8^D.Hf[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bH(c7)
c1=(c1<<8^D.Hf[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bH(c7)
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
bXl(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c0U(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cxm.prototype={
aHs(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bOB(e)
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
r.clT(e)
q=r.r
v=r.f
u=e.aKu(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aO()!==33639248)break
s=new C.b82()
s.cTs(0,u,e,f)
q.push(s)}},
clT(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a7G(20,r)
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
bOB(d){var w,v,u,t,s,r,q,p,o,n
if(d.gL(0)<=4)return-1
w=d.c
v=d.gL(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a7G(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.alw(A.i_)
o.aLL(r.eK(),A.i_,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aO()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cxk.prototype={}
C.awN.prototype={
a3(){return"ZipEncryptionMode."+this.b}}
C.cxn.prototype={
aHs(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aO()!==67324752)return
e.aY()
o.b=e.aY()
w=D.aDT.h(0,e.aY())
o.c=w==null?D.LS:w
o.d=e.aY()
o.e=e.aY()
o.f=e.aO()
o.r=e.aO()
o.w=e.aO()
v=e.aY()
u=e.aY()
o.x=e.anq(v)
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
s=B.rh(w,A.i_,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aY()===39169){s.aY()
s.aY()
s.anq(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aY()
o.at=D.aUN
o.ax=new C.cxk(r,q)
w=D.aDT.h(0,q)
o.c=w==null?D.LS:w}}}if((o.b&8)!==0){p=e.aO()
if(p===134695760)o.f=e.aO()
else o.f=p
o.r=e.aO()
o.w=e.aO()}},
gL(d){return this.blO().length},
aoE(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rh(new Uint8Array(0),A.i_,q,q)
w=r.at
if(w!==D.DL)if(p.gL(0)<=0)r.at=D.DL
else{if(w===D.aUM){p=r.bJu(p)
r.Q=p}else if(w===D.aUN){p=r.bJ7(p)
r.Q=p}r.at=D.DL}w=r.c
if(w===D.agz){v=p.c
u=B.dj()
p=r.Q
if(p.gL(0)<=524288e3)u.b=A.pv.Bt(p.eK(),!0,!1)
else{t=B.a8c(A.i_,r.w)
p=r.Q
p.toString
A.pv.a3P(p,t,!0,!1)
u.b=t.GP()}r.Q.c=v
return B.rh(u.bj(),A.i_,q,q)}else if(w===D.agA){s=B.a8c(A.i_,32768)
p=r.Q
v=p.c
C.htE().cJI(p,s)
u=s.GP()
r.Q.c=v
return B.rh(u,A.i_,q,q)}else return B.rh(p.eK(),A.i_,q,q)},
blO(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eK()},
u(d){return this.x},
b84(d){var w=this.ch,v=C.JG(C.hk_(w[0].N(0),d))
w[0]=v
v=w[1].ad(0,v.UI(0,C.JG(255)))
w[1]=v
w[1]=v.aI(0,C.JG(134775813)).ad(0,C.JG(1)).UI(0,C.JG(4294967295))
w[2]=C.JG(C.hk_(w[2].N(0),w[1].mq(0,24).N(0)))},
aQq(){var w=(this.ch[2].UI(0,C.JG(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bJu(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rh(new Uint8Array(0),A.i_,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b84(u[v.c++]^r.aQq())}t=r.Q.eK()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aQq()
r.b84(s)
u&2&&B.aj(t)
t[w]=s}return B.rh(t,A.i_,q,q)},
bJ7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.he(8).eK()
v=16}else if(k===2){w=d.he(12).eK()
v=24}else{w=d.he(16).eK()
v=32}u=d.he(2).eK()
t=d.he(d.gL(0)-10)
s=d.he(10)
r=t.eK()
k=this.ay
k.toString
q=C.hKT(k,w,v)
p=new Uint8Array(B.ce(A.aH.ds(q,0,v)))
k=v*2
o=new Uint8Array(B.ce(A.aH.ds(q,v,k)))
if(!C.hcw(A.aH.ds(q,k,k+2),u))throw B.V(B.fm("password error"))
k=new Uint8Array(16)
n=new C.bDF(k,new Uint8Array(16),p)
k=x.S
m=J.a4Y(0,k)
m=n.r=new C.ch1(m)
m.c=!0
m.b=m.bl6(!0,new C.ast(p))
if(m.c)m.d=B.bn(D.oa,!0,k)
else m.d=B.bn(D.yN,!0,k)
l=C.haJ(C.haL(),64)
l.bez(new C.ast(o))
n.w=l
n.cT2(r,0,r.length)
k=s.eK()
m=n.x
m===$&&B.c()
if(!C.hcw(k,m))throw B.V(B.fm("macs don't match"))
return B.rh(r,A.i_,null,null)}}
C.b82.prototype={
cTs(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.anq(w)
if(v>0){t=e.he(v).eK()
n.ax=t
if(v>=4){s=B.rh(t,A.i_,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aY()
p=s.aY()
o=s.a7G(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.t4()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.t4()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.t4()
p-=8}if(p>=4&&n.y===65535)n.y=o.aO()}}}}if(u>0)e.anq(u)
f.c=n.as
t=new C.cxn(D.LS,n,D.DL,B.a([C.JG(0),C.JG(0),C.JG(0)],x.f3))
n.ch=t
t.aHs(0,f,g)},
u(d){return this.at}}
C.cxl.prototype={
cJJ(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cxm(B.a([],x.fT))
this.a=g
g.aHs(0,d,f)
g=B.a([],x.bm)
w=B.U(x.N,x.S)
v=new C.aQL(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.L)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.cc(o,"/")||A.a.cc(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.RH(o,A.o.am(Date.now(),1000),0):C.h2W(o,q.w,q)
v.M(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.h2W(o,q.w,q)
if(k.as==null)k.bcc()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.alw(A.i_)
j.aLL(o,A.i_,h,h)}i=j==null?h:j.eK()
if(i!=null)new B.G_(!1).Ds(i,0,h,!0)}}return v}}
C.bDF.prototype={
cT2(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Co(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.htn(u,m.a)
q=m.r
if(16>u.byteLength)B.b8(B.dH("Input buffer too short",null))
if(16>w.byteLength)B.b8(B.dH("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bMT(u,0,w,0,o)}else{o===$&&B.c()
q.bJy(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.L6(w,0)
m.x=A.aH.ds(m.x,0,10)
w=m.w
l=w.a
l.kA(0)
w=w.d
w===$&&B.c()
l.Co(0,w,0,w.length)
return f}}
C.ch6.prototype={}
C.cha.prototype={}
C.ch4.prototype={}
C.ast.prototype={}
C.ch9.prototype={
cJY(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.e6(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bez(new C.ast(A.aH.fO(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bNX(n.a,n.b,t,s,r)
r+=v}A.aH.hg(f,g,g+w,s)
return o.a.c},
bNX(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.V(B.dH("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Co(0,d,0,d.length)
v.Co(0,f,0,4)
u=m.c
u===$&&B.c()
w.L6(u,0)
u=m.c
A.aH.hg(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Co(0,s,0,s.length)
w.L6(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.ch5.prototype={}
C.ch3.prototype={}
C.asu.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.asu){v=this.a
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
w=A.o.tg(w,e.gbXC())
if(!w)e.gbXC()
return w},
aJW(d,e){this.a=0
this.b=d},
tj(d){return this.aJW(d,null)},
aKx(d){var w,v=this,u=v.b
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
w.b_P(v,u)
u=w.b
u===$&&B.c()
w.b_P(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b_P(d,e){var w,v=A.o.fV(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.br(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.ch8.prototype={
kA(d){var w,v=this
v.a.tj(0)
v.c=0
A.aH.hq(v.b,0,4,0)
v.w=0
w=v.r
A.d.hq(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
ao7(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b1i(u,0)
v.c=0}v.a.aKx(1)},
Co(d,e,f,g){var w=this.ckg(e,f,g)
f+=w
g-=w
w=this.ckh(e,f,g)
this.ck7(e,f+w,g-w)},
L6(d,e){var w,v=this,u=C.haK(v.a),t=u.a
t===$&&B.c()
t=C.h0C(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.h0C(w,3)
v.ckb()
v.ck8(u)
v.asm()
v.cek(d,e)
v.kA(0)
return 20},
b1i(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.o7(A.aH.gaP(d),d.byteOffset,d.length).getUint32(e,A.ib===w.d)
if(w.w===16)w.asm()},
asm(){this.cT1()
this.w=0
A.d.hq(this.r,0,16,0)},
ck7(d,e,f){while(f>0){this.ao7(d[e]);++e;--f}},
ckh(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b1i(d,e)
e+=4
f-=4
w.aKx(4)
v+=4}return v},
ckg(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.ao7(d[e]);++e;--f;++v}return v},
ckb(){this.ao7(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.ao7(0)}},
ck8(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.asm()
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
cek(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.ib===this.d,s=0;s<w;++s){r=v[s]
q=J.o7(A.aH.gaP(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdc(d){return this.f}}
C.chb.prototype={
cT1(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.qb[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.qb[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.qb[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qb[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.qb[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qb[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.qb[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qb[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.qb[30]
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
C.ch7.prototype={
bez(d){var w,v,u,t,s=this,r=s.a
r.kA(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Co(0,w,0,v)
w=s.d
w===$&&B.c()
r.L6(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aH.hg(t,0,v,w)}w=s.d
w===$&&B.c()
A.aH.hq(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aH.hg(w,0,u,s.d)
s.b9f(s.d,u,54)
s.b9f(s.e,u,92)
u=s.d
r.Co(0,u,0,u.length)},
L6(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.L6(s,w)
s=u.e
t.Co(0,s,0,s.length)
v=t.L6(d,e)
s=u.e
A.aH.hq(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Co(0,s,0,s.length)
return v},
b9f(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.ch2.prototype={}
C.ch1.prototype={
a27(d){return(D.oa[d&255]&255|(D.oa[d>>>8&255]&255)<<8|(D.oa[d>>>16&255]&255)<<16|D.oa[d>>>24&255]<<24)>>>0},
bl6(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.V(B.dH("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e6(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c3(4,0,!1,u)
switch(v){case 4:q=J.o7(A.aH.gaP(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a27((m>>>8|(m&$.qb[24])<<24)>>>0)^D.cBw[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.o7(A.aH.gaP(e),e.byteOffset,w)
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
p=(p^f.a27((k>>>8|(k&$.qb[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a27((k>>>8|(k&$.qb[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.o7(A.aH.gaP(e),e.byteOffset,w)
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
p=(p^f.a27((g>>>8|(g&$.qb[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a27(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.V(B.bd("Should never get here"))}return s},
bMT(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.o7(A.aH.gaP(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.eb[a8&255]
u=D.eb[a9>>>8&255]
t=$.qb[8]
s=D.eb[b0>>>16&255]
r=$.qb[16]
q=D.eb[b1>>>24&255]
p=$.qb[24]
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
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.eb[a8&255]^C.ns(D.eb[a9>>>8&255],24)^C.ns(D.eb[b0>>>16&255],16)^C.ns(D.eb[b1>>>24&255],8)^b6[w][0]
m=D.eb[a9&255]^C.ns(D.eb[b0>>>8&255],24)^C.ns(D.eb[b1>>>16&255],16)^C.ns(D.eb[a8>>>24&255],8)^b6[w][1]
l=D.eb[b0&255]^C.ns(D.eb[b1>>>8&255],24)^C.ns(D.eb[a8>>>16&255],16)^C.ns(D.eb[a9>>>24&255],8)^b6[w][2]
b1=D.eb[b1&255]^C.ns(D.eb[a8>>>8&255],24)^C.ns(D.eb[a9>>>16&255],16)^C.ns(D.eb[b0>>>24&255],8)^b6[w][3]
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
a1=J.o7(A.aH.gaP(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.o7(A.aH.gaP(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.o7(A.aH.gaP(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.o7(A.aH.gaP(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bJy(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.o7(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.o7(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.o7(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.o7(A.aH.gaP(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.ea[a6&255]
v=D.ea[b0>>>8&255]
u=$.qb[8]
t=D.ea[a5>>>16&255]
s=$.qb[16]
r=D.ea[a4>>>24&255]
q=$.qb[24]
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
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.ea[a6&255]^C.ns(D.ea[b0>>>8&255],24)^C.ns(D.ea[a5>>>16&255],16)^C.ns(D.ea[a4>>>24&255],8)^b5[a9][0]
o=D.ea[a4&255]^C.ns(D.ea[a6>>>8&255],24)^C.ns(D.ea[b0>>>16&255],16)^C.ns(D.ea[a5>>>24&255],8)^b5[a9][1]
n=D.ea[a5&255]^C.ns(D.ea[a4>>>8&255],24)^C.ns(D.ea[a6>>>16&255],16)^C.ns(D.ea[b0>>>24&255],8)^b5[a9][2]
b0=D.ea[b0&255]^C.ns(D.ea[a5>>>8&255],24)^C.ns(D.ea[a4>>>16&255],16)^C.ns(D.ea[a6>>>24&255],8)^b5[a9][3]
a4=D.yN[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.yN[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.yN[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.yN[o>>>8&255]
i=D.yN[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.yN[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.o7(A.aH.gaP(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bNl.prototype={}
C.bNm.prototype={
gL(d){var w=this.a.length
return w},
aoE(){return B.rh(this.a,A.i_,null,null)}}
C.b9z.prototype={
uZ(d){return C.hO7(d)}}
C.cra.prototype={
MK(d){var w=d.w,v=Math.max(1,A.k.dj(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a9Q(v,t+20,u+16,t,u,B.u0(d.x))},
no(d){return!1}}
C.bOe.prototype={
cE_(d){if(this.b)throw B.V(B.bd("FontLoader is already loaded"))
this.c.push(d.bJ(new C.bOf(),x.E))},
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
return B.b(p.fub(f,r),$async$mG)
case 5:case 3:t.length===s||(0,B.L)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mG,v)}}
C.avu.prototype={
a3(){return"SystemUiMode."+this.b}}
C.a8a.prototype={
A(d,e){if(e==null)return!1
if(J.bN(e)!==B.b_(this))return!1
return e instanceof C.a8a&&e.a===this.a},
gX(d){return B.br(B.b_(this),B.wQ(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.fIp)return"["+(w+B.e4(this.a))+"]"
return"[ObjectKey "+(w+B.e4(this.a))+"]"}}
C.aVf.prototype={
c1(d){var w=new C.aAl(!0,this.e,null,new B.di(),B.ch())
w.c_()
w.scD(null)
return w},
cb(d,e){var w
x.cQ.a(e)
e.syF(0,!0)
w=this.e
if(!w.A(0,e.aj)){e.aj=w
e.aG4()}}}
C.aAl.prototype={
syF(d,e){return},
gpy(){var w=this.a9$
return w!=null},
gl8(){var w=this.a9$
return w!=null},
Mz(d){var w=d==null?B.h5o(null):d
w.sa4J(this.aj)
return w}}
C.a0B.prototype={
U(){return new C.aIE(B.aY(x.N))},
cRa(d){return this.d.$1(d)},
cOY(){return this.e.$0()}}
C.aIE.prototype={
a_(){this.a1()
this.P6()},
P6(){var w=0,v=B.j(x.H),u,t=this,s
var $async$P6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cOY(),$async$P6)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f4a(t,s))
case 1:return B.h(u,v)}})
return B.i($async$P6,v)},
YU(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$YU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.T(r).k("a_<1>")
p=B.C(new B.a_(r,new C.f4e(t),q),q.k("J.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f4f(t))
w=3
return B.b(C.ang(p),$async$YU)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f4g(t,s,p))
w=4
return B.b(t.P6(),$async$YU)
case 4:case 1:return B.h(u,v)}})
return B.i($async$YU,v)},
a13(d){return this.coq(d)},
coq(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a13=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f4b(t))
s=J.q(d,"id")
w=3
return B.b(C.bZ3(J.k(s==null?"":s)),$async$a13)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f4c(t))
w=1
break}q=C.h05(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cRa(B.a([q],x.D)),$async$a13)
case 4:if(t.c==null){w=1
break}t.m(new C.f4d(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a13,v)},
P5(d,e){return this.bJZ(0,e)},
bJZ(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$P5=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a3(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.f45(q),r,null,!0,!0,x.y),$async$P5)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f46(t))
s=s.h(e,"id")
w=4
return B.b(C.anf(J.k(s==null?"":s)),$async$P5)
case 4:if(t.c==null){w=1
break}t.m(new C.f47(t))
w=5
return B.b(t.P6(),$async$P5)
case 5:case 1:return B.h(u,v)}})
return B.i($async$P5,v)},
cD0(d){var w=B.bi(d),v=w==null?null:w.bU()
if(v==null)return""
return A.ip[B.bH(v)-1]+" "+B.bR(v)},
aQh(d,e){var w=null,v=B.n(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.Oj,A.n),w,e,w,w,w,w,w,e)},
aQg(d){return this.aQh(d,44)},
b6q(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Oj:u,r=B.n(14),q=B.X(e,t?A.c:A.aA,u,u,u,17),p=x.p
q=B.a([q,M.J2,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aA,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.n(10)
A.d.v(q,B.a([M.J2,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aQ,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.byM,u,u,u)],p))}return B.E(B.aB(A.ch,B.de(u,B.B(q,A.m,u,A.b7,A.j,0,u,u),u,u,A.bb,new B.o(u,u,u,r,u,s,A.n),A.hw,u,u,u,A.tH,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f4k(this,d),u,u,u,u,u,u,!1,A.a7),1)},
cif(d){var w,v,u,t,s,r,q=null,p=this.d.q(0,d.a),o=p?A.d0.j(0.14):D.XH,n=B.n(18),m=p?A.d0:A.dB
m=B.I(m,A.q,p?1.8:1)
w=this.aQg(A.q6)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aRa,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.w(B.a([v,A.cQ,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aRc,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.Oj:q
u=p?q:B.I(A.b1,A.q,1.6)
r=p?D.bPd:q
return B.aB(q,B.de(q,B.B(B.a([w,A.bd,t,B.de(q,r,q,q,A.bb,new B.o(q,q,u,q,q,v,A.a5),A.fA,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.bb,new B.o(o,q,m,n,q,q,A.n),A.fA,q,q,A.d9,A.bk,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f49(this,p,d),q,q,q,q,q,q,!1,A.a7)},
cq1(d){var w,v,u,t,s,r=this,q=null,p=J.a3(d),o=p.h(d,"savedAt"),n=r.cD0(J.k(o==null?"":o))
o=B.n(18)
w=B.I(A.dB,A.q,1)
v=r.aQg(A.Ny)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aRa,q,q,q)
p=p.h(d,"slides")
p=B.u(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.w(B.a([u,A.cQ,B.d(p+" slides"+t,q,q,q,q,q,q,D.aRc,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.b30(A.hB,A.bu,"Bring it back",r.r?q:new C.f4h(r,d))
return B.p(q,B.B(B.a([v,A.bd,t,p,A.bp,r.b30(A.ef,A.cs,"Delete",r.r?q:new C.f4i(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.XH,q,w,o,q,q,A.n),q,q,q,A.d9,D.bth,q,q,q)},
b30(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.ho(B.aB(w,B.p(w,B.X(d,v?A.b1:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a5),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a7),w,f,w,w)},
asC(d,e,f){var w=null
return new B.D(D.bsk,B.w(B.a([B.X(d,A.b1,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.feV,w,w,w),A.av,B.d(f,w,w,w,w,w,w,D.f7s,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c6
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aH(d,A.bW,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.b1,i,i,B.n(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aQh(A.yA,46),A.bd,D.bzE],t)
if(j.r)s.push(D.ecv)
s.push(B.aI(i,i,i,i,A.rh,i,i,i,new C.f4n(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.n(18)
p=B.I(A.dB,A.q,1)
o=J.a3(h)
q=B.a([A.R,u,new B.D(D.bvQ,s,i),B.p(i,B.B(B.a([j.b6q(0,A.yh,"Save",j.a.c.length),j.b6q(1,A.NM,"Saved",o.gL(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.buU,A.ev,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cs:A.bu).j(0.12)
s=B.n(14)
r=B.I((j.y?A.cs:A.bu).j(0.4),A.q,1)
p=j.y
n=p?A.NA:A.e9
n=B.X(n,p?A.cs:A.bu,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.ab,B.E(B.d(m,i,i,i,i,i,i,A.TF,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.buQ,A.iK,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.fb_,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aB(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fe0,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f4o(j,v),i,i,i,i,i,i,!1,A.a7))
s=B.a([B.B(s,A.m,i,A.e,A.j,0,i,i),A.R],t)
if(j.a.c.length===0)s.push(j.asC(A.q6,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.L)(r),++l)s.push(j.cif(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.ec3)
else if(j.e==null)s.push(j.asC(A.ali,"Could not reach the database","Check the connection, then open this again."))
else if(o.gal(h))s.push(j.asC(A.oR,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gae(h);r.C();)s.push(j.cq1(r.gT(r)))
A.d.v(u,s)}q.push(new B.dq(1,A.cm,B.cy(u,i,X.ail,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc3r()
p=s?i:D.Oj
s=s?A.c.j(0.07):i
o=B.n(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b5.j(0.4),A.cz,18)],x.V)
u=u.a
m=u===0
k=B.X(A.yh,m?A.k1:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bvs,B.aB(i,B.de(i,B.B(B.a([k,A.a7t,new B.dq(1,A.cm,B.eM(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.k1:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.dZ),i)],t),A.m,i,A.b7,A.j,0,i,i),i,i,A.bb,new B.o(s,i,i,o,n,p,A.n),A.hw,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a7),i))}else q.push(A.R)
return B.p(i,B.bl(!0,B.w(q,A.m,i,A.e,A.Q,0,A.p),!0,!1,A.ae,!0,!1),A.f,i,new B.aX(0,1/0,0,w.a.b*0.9),D.b1h,i,i,i,i,i,i,i,i)}}
C.on.prototype={
ag(){return B.F(["id",this.a,"doc",this.b.ag(),"updatedAt",this.c.a5().ac()],x.N,x.z)}}
C.Ym.prototype={
U(){return new C.axk(B.a([],x.k),B.f8(null,x.H))},
ge1(){return this.c}}
C.axk.prototype={
a_(){this.a1()
this.Pf()},
Pf(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Pf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a1z(t.a.c),$async$Pf)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cGB(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Pf,v)},
cwf(d){var w,v,u,t=this
d.c=new B.S(Date.now(),0,!1)
w=J.qj(t.d,new C.cGE(d))
v=w<0
if(v&&C.hLf(d))return t.f
u=t.d
if(v)J.pA(u,0,d)
else J.aG(u,w,d)
v=x.a
B.fRD(new C.cGF(t),v)
return t.f=t.f.bJ(new C.cGG(t,d),v).eS(new C.cGH())},
IE(d,e,f){return this.cbR(0,e,f)},
aXZ(d,e){return this.IE(0,e,!1)},
cbR(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$IE=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a4(s,!1).cm(B.e9(new C.cGA(t,e),!1,null,x.H)),$async$IE)
case 3:w=4
return B.b(t.f,$async$IE)
case 4:w=5
return B.b(t.Pf(),$async$IE)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IE,v)},
aXf(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dys:d
this.IE(0,new C.on(w,v,new B.S(Date.now(),0,!1)),!0)},
c2W(){return this.aXf(null)},
adf(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$adf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bQ(A.K,null,new C.cGI(),r,!1,!1,!0,null,!1,!1,x.g2),$async$adf)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aXf(s)
case 1:return B.h(u,v)}})
return B.i($async$adf,v)},
ID(d,e){return this.bJR(0,e)},
bJR(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$ID=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.cGv(e),s,null,!0,!0,x.y),$async$ID)
case 3:if(g!==!0){w=1
break}t.m(new C.cGw(t,e))
w=4
return B.b(t.f,$async$ID)
case 4:w=5
return B.b(C.ag3(t.a.c,e.a),$async$ID)
case 5:w=6
return B.b(t.Pf(),$async$ID)
case 6:case 1:return B.h(u,v)}})
return B.i($async$ID,v)},
Da(d){return this.bC_(d)},
bC_(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Da=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bQ(A.K,null,new C.cGr(d),r,!0,!0,!1,null,!1,!1,x.N),$async$Da)
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
return B.b(t.aXZ(0,d),$async$Da)
case 9:w=5
break
case 7:w=10
return B.b(F.h0E(r,d.b,null),$async$Da)
case 10:w=5
break
case 8:w=11
return B.b(t.ID(0,d),$async$Da)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$Da,v)},
bXz(){var w,v,u=null,t=[D.dyv,D.dyt,D.dyu],s=new C.cGy(),r=B.n(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d8.j(0.4),A.eV,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aR(999,999)
n.push(B.p(u,new B.y(D.dio[w],u,A.or,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bo(v,v,v,v),u,u,A.n),u,u,u,u,A.nZ,u,u,u))}return B.p(u,B.B(B.a([B.E(B.w(B.a([D.fDP,A.N,B.bZ(A.bC,n,A.br,6,6),A.aP,B.aB(u,B.p(u,D.eQM,A.f,u,u,new B.o(A.c,u,u,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cH,10)],q),u,A.n),u,u,u,u,U.aiJ,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cGx(this),u,u,u,u,u,u,!1,A.a7)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a7(130,110,new B.an(A.A,u,A.a9,A.r,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bXw,A.n),u,u,u,u,D.bw_,u,u,u)},
bBY(d){var w,v=null,u=d.b.d.length,t=B.n(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cz,14)],x.V),r=x.p
s=B.p(v,B.bw(B.n(6),new B.an(A.V,v,A.b0,A.r,B.a([B.eM(A.A,F.anQ(d.b),A.f,A.bU),D.ei1,B.ao(v,B.aB(v,B.p(v,D.bQ1,A.f,v,v,D.b2d,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cGm(this,d),v,v,v,v,v,v,!1,A.a7),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.f4O,v,v,v)
w=u===1?"":"s"
return B.aB(v,B.w(B.a([new B.fK(0.6470588235294118,s,v),A.N,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fbb,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cGn(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cGo(this,d),v,v,v,v,v,v,!1,A.a7)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.ez(B.a([new B.D(K.ahg,B.ho(B.aB(s,B.p(s,A.anX,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b5.j(0.5),A.J,12)],x.V),E.w4,A.a5),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc4f(),s,s,s,s,s,s,!1,A.a7),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.mZ,s,s,s,!0,s,s,s,s,s,D.fDT,s,s,s,1,s,!0)
if(t.e)r=D.b5C
else{w=t.bXz()
v=B.a([D.fpt,A.ab],r)
if(J.cJ(t.d)){u=B.n(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.f4f,s,s,s),A.f,s,s,new B.o(D.bak,s,s,u,s,s,A.n),s,s,s,s,A.y_,s,s,s))}r=B.a([new B.nT(A5.Z1,new B.ma(w,s),s),new B.nT(D.bvm,new B.ma(B.B(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cm(t.d))r.push(D.eXl)
else r.push(new B.nT(D.buS,B.OR(new B.ot(new C.cGJ(t),J.ad(t.d),!0,!0,!0,0,B.t1(),s),D.b4U),s))
r=B.vz(0,s,A.r,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c6(q,D.b9a,r,s,!1,!1,s,s)}}
C.Yk.prototype={
U(){return new C.axg(B.a([],x.bx))},
TW(d){return this.d.$1(d)}}
C.aEw.prototype={}
C.axg.prototype={
b_R(d,e,f){var w=$.aw(),v=new B.ar(new B.bb(d,A.b3,A.aM),w),u=this.gaXY()
v.aQ(0,u)
w=new B.ar(new B.bb(e,A.b3,A.aM),w)
w.aQ(0,u)
return new C.aEw(v,w,f)},
E1(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a7(0)
v.x=B.cM(A.pW,new C.cFQ(v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a1()
w=m.a.c.b
v=$.aw()
u=new B.ar(new B.bb(w.a,A.b3,A.aM),v)
t=m.gaXY()
u.aQ(0,t)
m.d!==$&&B.aP()
m.d=u
u=new B.ar(new B.bb(w.b,A.b3,A.aM),v)
u.aQ(0,t)
m.e!==$&&B.aP()
m.e=u
u=new B.ar(new B.bb(w.c,A.b3,A.aM),v)
u.aQ(0,t)
m.f!==$&&B.aP()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.L)(u),++q){p=u[q]
o=new B.ar(new B.bb(p.a,A.b3,A.aM),v)
o.aQ(0,t)
n=new B.ar(new B.bb(p.b,A.b3,A.aM),v)
n.aQ(0,t)
r.push(new C.aEw(o,n,p.c))}if(r.length===0)r.push(m.b_R("Page 1","",""))},
t(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a7(0)
if(r.y){r.a.c.b=r.gpd()
q=r.a
q.TW(q.c)}q=r.d
q===$&&B.c()
w=q.S$=$.aw()
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
t.push(new F.mt(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rn(n,w,v,t,u)},
AJ(){var w=0,v=B.j(x.H),u=this,t
var $async$AJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a7(0)
u.y=!1
u.a.c.b=u.gpd()
t=u.a
w=2
return B.b(t.TW(t.c),$async$AJ)
case 2:return B.h(null,v)}})
return B.i($async$AJ,v)},
c4d(){this.m(new C.cFP(this))
this.E1()},
aWX(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cFS(w,d,v))
w.E1()},
c4e(d,e){var w=A.d.cF(this.w,e)
this.m(new C.cG_())
this.E1()
$.aV.x1$.push(new C.cG0(w))},
Qq(d){return this.ci5(d)},
ci5(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qq=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hS().kT(80,1400,A.eG),$async$Qq)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fe(),$async$Qq)
case 8:p=f
o=q.b.toLowerCase()
n=J.ahB(o,".png")?"image/png":"image/jpeg"
r.m(new C.cFT(d,n,p))
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
return B.i($async$Qq,v)},
xI(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hnK(r,t.gpd()),$async$xI)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cFR(t,s))
t.E1()
case 1:return B.h(u,v)}})
return B.i($async$xI,v)},
cin(d){var w,v=this,u=null,t=F.fyg(d.c)
if(t==null)return new B.bI(A.a3,u,u,B.hn(D.bJh,D.frW,new C.cFV(v,d),u),u)
w=x.p
return new B.D(A.cu,new B.an(A.V,u,A.a9,A.r,B.a([B.bw(B.n(12),B.fO(t,A.A,u,u,A.ce,A.bU,!0,140,!1,u,1/0),A.aq),B.ao(u,B.B(B.a([v.b31(A.k9,new C.cFW(v,d)),A.bp,v.b31(A.cy,new C.cFX(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b31(d,e){var w=null
return B.aF(!1,A.a1,!0,w,B.aK(!1,w,!0,new B.D(A.hy,B.X(d,A.c,w,w,w,18),w),A.cK,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aW,0,w,w,A.cK,w,w,A.ag)},
IF(){var w=0,v=B.j(x.H),u,t=this,s
var $async$IF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.AJ(),$async$IF)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.h0E(s,t.gpd(),new C.cFZ(t)),$async$IF)
case 4:case 1:return B.h(u,v)}})
return B.i($async$IF,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.ez(B.a([new B.D(A.pX,B.hn(D.bNZ,D.fxV,n.gawl(),B.fx(m,m,m,m,m,m,m,m,m,m,m,A.bL,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aI(m,m,m,m,A.anW,m,m,m,new C.cG1(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.WS,m,1,m,m,m,!1,m,!1,E.mZ,m,m,m,!0,m,m,m,m,m,D.fsN,m,m,m,1,m,!0),j=At.aTX(O.li,A.c,Ad.VK,A.o6,D.ftw,n.gc4c()),i=B.n(18),h=n.gawk(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.jt,12)],x.V)
g=B.aB(m,B.p(m,new B.a7(92,142.1818181818182,B.eM(A.A,F.anQ(n.gpd()),A.f,A.dv),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a7)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.eo,B.E(B.w(B.a([D.fFp,A.av,B.d(F.h_8(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.fgD,m,m,m),A.R,B.dn(E.ane,E.aRX,h,B.bm(A.d8,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.WS,m,m,i,m,m,A.n),m,m,m,m,A.bk,m,m,m)
h=n.d
h===$&&B.c()
h=B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),h,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.n(12),A.dj),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.aa,m,m,m,m,m,m,m,m,m,m,m,A.on,!0,A.a4,m,A.an,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),w,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.n(12),A.dj),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.aa,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aB,h,A.N,w,A.N,B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),g,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.n(12),A.dj),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.aa,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m),A.aP],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aR(16,16)
u=new B.az(O.li.j(0.18),1,A.q,-1)
t=v+1
s=B.aI(m,m,m,m,D.bMG,m,m,m,v===0?m:new C.cG2(n,v),m,m,m,m,"Move up",A.cc)
r=i.length
q=B.aI(m,m,m,m,D.bT0,m,m,m,v===r-1?m:new C.cG3(n,v),m,m,m,m,"Move down",A.cc)
r=r===1?m:new C.cG4(n,v)
p=new B.aR(12,12)
o=new B.aR(12,12)
g.push(B.p(m,B.w(B.a([new B.ck(A.aN,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.y("Page "+t,m,D.fha,m,m,m,m,m,m,m,m,m),A.b4,s,q,B.aI(m,m,m,m,B.X(A.ef,A.oL,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.cc)],l),m),B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),i[v].a,m,m,m,m,m,2,new B.e2(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bo(p,p,p,p),A.dj),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.aa,m,m,m,m,m,m,m,m,m,m,m,A.cj,!0,A.a4,m,A.an,m,m,m,m),A.am,n.cin(i[v]),B.aM(m,A.U,!1,m,!0,A.r,m,B.aN(),i[v].b,m,m,m,m,m,2,new B.e2(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bo(o,o,o,o),A.dj),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.aa,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.mZ,m,new B.bO(u,u,u,u),new B.bo(w,w,w,w),m,m,A.n),m,m,new C.a8a(h),A.e8,D.btw,m,m,m))}return B.oq(!0,B.c6(k,E.aft,B.cy(g,m,D.btY,m,m,A.ah,!1),m,!1,!1,j,m),new C.cG5(n),x.C)}}
C.axi.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cs:E.mZ,q=B.n(16),p=B.n(16),o=s?A.aw.j(0.08):A.c.j(0.04)
s=s?A.aw.j(0.16):A.d8.j(0.22)
w=B.n(12)
v=x.p
return new B.D(A.eK,B.aF(!1,A.a1,!0,t,B.aK(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bd,B.E(B.w(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bz,B.d(u.e,t,t,t,t,t,t,D.aQx,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.X(A.eA,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bk,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ag),t)}}
C.aq4.prototype={
U(){return new C.aDm()}}
C.aDm.prototype={
a_(){this.a1()
this.Zx()},
bu(d){this.bC(d)
if(d.c!=this.a.c)this.a0T()},
a0T(){var w=0,v=B.j(x.H),u=this,t
var $async$a0T=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.t()
w=2
return B.b(x.bq.b(t)?t:B.dR(t,x.H),$async$a0T)
case 2:u.d=null
if(u.c!=null)u.m(new C.e9H(u))
w=3
return B.b(u.Zx(),$async$a0T)
case 3:return B.h(null,v)}})
return B.i($async$a0T,v)},
Zx(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Zx=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d1(n,"http://")||J.d1(n,"https://")||J.d1(n,"data:")){o=B.XZ(B.cD(n,0,null),new B.Pd(!0))
r.d=o}else{o=B.fm("unsupported video ref")
throw B.V(o)}w=7
return B.b(o.ik(0).d8(0,A.pS),$async$Zx)
case 7:if(r.c==null){w=1
break}r.d.tl(!1)
r.m(new C.e9F(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ab(m)
$.am.$1("[kiapo video] "+B.u(q))
if(r.c!=null)r.m(new C.e9G(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Zx,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a2()},
c6J(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.h5(0)
w.m(new C.e9I(w))}else{v.pX(0)
w.m(new C.e9J(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bI
n=B.n(8*n.d)
m=B.a([D.jg.j(0.92),D.KV.j(0.95)],x.O)
w=B.I(A.bZ.j(0.55),A.q,1)
v=p.a
u=v.d
t=B.X(A.q9,A.bZ,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c0(B.au(B.w(B.a([t,new B.a7(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.Q,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a8(A.ay,A.aC,A.x,m,o,o),A.n),A.be)}if(p.f)return B.au(B.X(A.amx,A.aA,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b6r
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.n(6*n.d)
m=B.a([B.eM(A.A,new B.a7(r,q,new B.Ab(s,o),o),A.r,A.bU)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.au(B.p(o,B.X(A.j2,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a5),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aB(o,B.bw(n,new B.an(A.V,o,A.b0,A.r,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc6I(),o,o,o,o,o,o,!1,A.a7)}}
C.xA.prototype={
a3(){return"NgmyHatiLayoutKind."+this.b}}
C.jn.prototype={}
C.ad_.prototype={
B(d){return B.oT(new C.dXi(this,B.P(d).ax.a===A.I,d),!0,0.72,0.9,0.5,!1,null)}}
C.acp.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.I,s=B.n(18),r=B.n(18),q=B.I(D.jg.j(t?0.35:0.4),A.q,1),p=t?D.Lu:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cz,14)],o),m=B.n(10),l=B.I(A.bZ.j(0.5),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dD,6)],o)
w=this.c
o=B.E(B.p(u,new B.fK(0.5625,C.i2I(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.ajc,u,u,u,u),1)
m=D.jg.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.jg,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aF(!1,A.a1,!0,u,B.aK(!1,s,!0,B.p(u,B.w(B.a([o,B.p(u,B.w(B.a([l,A.cQ,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aA:D.bgF,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bO(new B.az(m,1,A.q,-1),A.W,A.W,A.W),u,u,u,A.n),u,u,u,u,D.ahw,u,u,u)],v),A.ai,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ag)}}
C.xD.prototype={
a3(){return"NgmyMarriageLayoutKind."+this.b}}
C.nJ.prototype={}
C.biv.prototype={
ZG(d){var w=null
return new B.bI(A.a3,w,w,B.Bg(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.n(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
c7a(){return this.ZG(1)},
awX(d){var w=null,v=B.n(8),u=B.I(A.i2,A.q,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.adu,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.w(B.a([B.B(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.i2,A.q,1.6),v,v,v,A.a5),v,22,v,v,v,v,v,22),B.dU(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.i2,A.q,1.6),v,v,v,A.a5),v,22,v,v,v,v,v,22),new B.x(-8.36,0))],u),A.m,v,A.b7,A.j,0,v,v),A.av,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a6,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.am,w.awX("TAARIFA ZA WANANDOA"),A.am,w.c7a(),A.cQ,w.ZG(0.9),A.cQ,w.ZG(0.7),A.N,w.awX("TAMKO LA MAKUBALIANO"),A.fF,w.ZG(1),A.cQ,w.ZG(0.95),A.N,w.awX("MASHAHIDI"),A.b4,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.ad2.prototype={
B(d){return B.oT(new C.ee3(B.P(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.aeI.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.I,p=B.n(18),o=B.n(18),n=B.I(A.ax.j(q?0.35:0.4),A.q,1),m=q?D.bgg:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cz,14)],l),j=B.n(10),i=B.I(A.ax.j(0.5),A.q,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dD,6)],l)
w=this.c
v=C.h_E(w.a)
if(v==null)v=A.d.gH(D.QP)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.p(r,new B.fK(0.5625,new B.an(A.V,r,A.b0,A.r,B.a([B.bT(0,B.fO(C.h_D(v.d),A.A,r,r,A.ce,A.bU,!0,r,!1,r,r),0,0,0),new B.D(A.aic,new C.biv(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.ajc,r,r,r,r),1)
j=A.ax.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:Z.Lv,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aF(!1,A.a1,!0,r,B.aK(!1,p,!0,B.p(r,B.w(B.a([l,B.p(r,B.w(B.a([i,A.cQ,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aA:D.b9F,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bO(new B.az(j,1,A.q,-1),A.W,A.W,A.W),r,r,r,A.n),r,r,r,r,D.ahw,r,r,r)],s),A.ai,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ag)}}
C.kT.prototype={
a3(){return"NgmyMarriagePaperStyle."+this.b}}
C.a7C.prototype={}
C.VA.prototype={
U(){var w=$.aw()
return new C.aDD(new B.cu(null,x.A),new B.ar(A.as,w),new B.ar(A.as,w),B.mC(0,null,null),A.d.gH(D.a32),D.dIE,B.a([],x.L),B.a([],x.gE))}}
C.aDD.prototype={
a_(){var w,v=this
v.a1()
v.w=v.a.c
v.z=new C.zB(C.fC9(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
w=x.a
C.fB5().bJ(new C.eh0(v),w)
$.qW().jG(0,"assets/images/ngmy_logo.png").bJ(new C.eh1(v),w).eS(new C.eh2())},
t(){var w=this,v=w.e,u=$.aw()
v.S$=u
v.P$=0
v=w.f
v.S$=u
v.P$=0
w.r.t()
w.a2()},
ah5(d){var w=null,v=this.c
if(v!=null)v.I(x.q).f.R(B.b2(w,w,w,w,w,A.r,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.T,w,w,w,w,w,w,w,w,w,w))},
IY(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$IY=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hS().kT(88,1600,A.eG),$async$IY)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fe(),$async$IY)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.ho_(m,p),$async$IY)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bCg(new B.pP(o,1),m),$async$IY)
case 10:if(r.c!=null)r.m(new C.egD(r,o))
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
return B.i($async$IY,v)},
WK(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$WK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ho_(s,q),$async$WK)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bCg(new B.pP(r,1),s),$async$WK)
case 4:if(t.c!=null)t.m(new C.egz(t,r))
case 1:return B.h(u,v)}})
return B.i($async$WK,v)},
ae0(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$ae0=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.egK(q))
t=4
q.a.toString
p=C.i78()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$ae0)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.egL(q,n))
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
if(q.c!=null)q.m(new C.egM(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ae0,v)},
ZL(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$ZL=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.egF(q,i))
t=4
q.a.toString
p=C.i77()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$ZL)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.egG(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ab(g)
if(q.c!=null)q.m(new C.egH(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.egI(q))
$.aV.x1$.push(new C.egJ(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ZL,v)},
c7q(d){this.m(new C.egE(this,d))},
Ei(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Ei=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.egB(q))
t=4
w=7
return B.b($.aV.gmB(),$async$Ei)
case 7:w=8
return B.b(B.bM(A.n6,null,x.H),$async$Ei)
case 8:k=$.aV.aj$.x.h(0,q.d)
p=k==null?null:k.gba()
if(!(p instanceof B.q_))throw B.V("The page is not ready yet.")
w=9
return B.b(p.m_(1800/p.gY(0).a),$async$Ei)
case 9:o=e
w=10
return B.b(o.hu(A.h0),$async$Ei)
case 10:n=e
if(n==null)throw B.V("Could not make the picture.")
w=11
return B.b(A6.ag7(J.eU(A.dC.gaP(n)),"ngmy_news.png","image/png"),$async$Ei)
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
if(q.c!=null)q.m(new C.egC(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ei,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aI(a2,a2,a2,a2,A.l3,a2,a2,a2,new C.egS(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aI(a2,a2,a2,a2,D.bOu,a2,a2,a2,new C.egT(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aI(a2,a2,a2,a2,A.p0,a2,a2,a2,a4?a1.gaZ3():a2,a2,a2,a2,a2,"Download",a2))
a3=B.ez(v,a2,a2,!0,!0,A.AV,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eQW,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eV,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fK(0.7142857142857143,B.eM(A.A,new B.eH(new C.b0d(t,s,r,a1.x,a2),a1.d),A.f,A.dv),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,H.zN,a2,a2,a2)
t=a1.as?a2:a1.gc7p()
t=B.a([B.E(B.dn(D.bPe,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cj,a2,a2,a2),t,B.bm(D.tn,a2,a2,a2,A.c,A.fO,a2,a2,new B.b7(B.n(14),P.v3),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bw(B.n(10),B.fO(r,A.A,a2,a2,A.ce,A.bU,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.at,r,B.aI(a2,a2,a2,a2,D.bLZ,a2,a2,a2,a1.as?a2:a1.gbIs(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,H.zN,a2,a2,a2)
q=B.aM(a2,A.U,!1,a2,!0,A.r,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aS6("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.aj,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.aa,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dg,!0,A.a4,a2,A.an,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.dcL[o]
p.push(B.mJ(a2,D.tn,new B.y(n.a,a2,A.pi,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hW,new C.egU(a1,n),a2,a2,P.v3,a2))}p=B.bZ(A.bC,p,A.br,6,8)
m=a1.Q
m=B.bZ(A.bC,B.a([D.fE0,A.bd,B.j9(a2,a2,a2,D.foe,a2,new C.egV(a1),m==="en",a2,a2,a2,a2),A.ab,B.j9(a2,a2,a2,D.fo9,a2,new C.egW(a1),m==="sw",a2,a2,a2,a2)],w),A.rX,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,H.zN,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.dc(D.a32,0,B.dG(10,"count",x.S),j),h=i.$ti,i=new B.bS(i,i.gL(0),h.k("bS<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aQB(g==null?h.a(g):g))}k=B.cy(k,a2,a2,a2,a2,A.aN,!1)
i=B.a([],w)
for(j=B.dc(D.a32,10,a2,j),h=j.$ti,j=new B.bS(j,j.gL(0),h.k("bS<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aQB(g==null?h.a(g):g))}j=B.cy(i,a2,a2,a2,a2,A.aN,!1)
i=a1.as?a2:a1.gc7s()
h=B.n(18)
v=B.a([new B.ac(0,A.G,A.bA.j(0.4),A.J,18)],v)
v=B.a([u,A.aB,new B.D(A.cu,s,a2),t,A.aB,new B.D(A.cu,r,a2),q,A.N,p,A.R,m,A.aB,new B.D(A.cu,l,a2),new B.a7(a2,78,k,a2),A.N,new B.a7(a2,78,j,a2),A.aP,B.aB(a2,B.p(A.A,B.B(B.a([D.bP8,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fP,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.uc,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a7)],w)
if(a4){u=B.a([A.dY,B.B(B.a([D.dtk,A.at,D.bzY],w),A.m,a2,A.e,A.j,0,a2,a2),A.N],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.L)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a8:A.a3
q=e?A.b5.j(0.35):D.tn
p=new B.aR(16,16)
d=new B.az(A.bD,1,A.q,-1)
u.push(new B.bI(r,a2,a2,B.p(a2,new B.y(f.b,a2,D.feH,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A7.Vy,new B.o(q,a2,new B.bO(d,d,d,d),new B.bo(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cu,A.iK,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cZU[o]
t.push(B.mJ(a2,D.tn,new B.y(a0,a2,A.Jg,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hW,new C.egX(a1,a0),a2,a2,P.v3,a2))}u.push(B.bZ(A.bC,t,A.br,6,8))
u.push(A.R)
t=B.E(B.aM(a2,A.U,!1,a2,!0,A.r,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aS6("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.aj,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.egY(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.aa,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dg,!0,A.a4,a2,A.an,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc7r()
u.push(B.B(B.a([t,A.ab,B.HJ(A.yE,s,B.nC(a2,A.b5,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.aB)
t=a1.as?a2:a1.gaZ3()
u.push(B.dn(A.p0,D.fzy,t,B.bm(A.cS,a2,a2,a2,a2,A.J0,a2,a2,new B.b7(B.n(16),A.W),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cy(v,a1.r,A.ahZ,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.n(20)
s=B.I(E.jZ.j(0.5),A.q,1)
v.push(B.bT(0,B.el(B.au(B.p(a2,B.B(B.a([E.a7u,A.eo,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.j9,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(E.AN,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bwh,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c6(a3,A.AV,new B.an(A.V,a2,A.a9,A.r,v,a2),a2,!1,!1,a2,a2)},
aS6(d){var w=null
return B.bs(w,new B.b4(4,B.n(14),A.W),w,A.eR,w,w,w,w,!0,w,w,w,w,w,w,D.tn,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A0.Jb,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aQB(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.n(12),q=B.b0(d.f),p=s?A.bA:A.bD
p=B.I(p,A.q,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.kW,t,t,t,t),A.fF],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bsy,t,t,t,t))
w.push(A.cQ)
w.push(new B.D(A.jo,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aB(t,B.p(t,B.w(w,A.m,t,A.b7,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.il,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.egA(this,d),t,t,t,t,t,t,!1,A.a7)}}
C.zB.prototype={
bbn(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.zB(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cHu(d){var w=null
return this.bbn(w,w,w,w,w,d,w,w,w,w)},
ag(){var w=this
return B.F(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aCi(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cd_(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aW(g);v.C();){u=v.gT(v)
if(A.a.i(B.u(u)).length!==0)w.push(A.a.i(B.u(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fF(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.M(w,new C.ccY(),B.T(w).k("M<1,m>")).c0(0,new C.ccZ())
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
return this.bbn(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gFv(d){return this.f}}
C.tm.prototype={
a3(){return"NewsLayout."+this.b}}
C.Bu.prototype={
a3(){return"NewsFrame."+this.b}}
C.lh.prototype={}
C.b0d.prototype={
ro(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aZ5(d,e,f,g){return this.ro(d,e,null,1.25,f,A.bo,g)},
PM(d,e,f,g,h){return this.ro(d,e,f,1.25,g,A.bo,h)},
ax2(d,e,f,g,h){return this.ro(d,e,null,f,g,A.bo,h)},
ax1(d,e,f,g,h){return this.ro(d,e,f,g,0,A.bo,h)},
aZ7(d,e,f,g,h){return this.ro(d,e,null,f,0,g,h)},
c7w(d,e,f,g,h,i){return this.ro(d,e,f,g,0,h,i)},
ax0(d,e,f,g){return this.ro(d,e,null,f,0,A.bo,g)},
ae3(d,e,f){return this.ro(d,e,null,f,0,A.bo,A.cM)},
aZ6(d,e,f,g,h){return this.ro(d,e,f,g,0,h,A.cM)},
c7v(d,e,f,g){return this.ro(d,e,null,f,0,g,A.cM)},
c7u(d,e,f,g){return this.ro(d,e,f,g,0,A.bo,A.cM)},
ae4(d,e,f,g,h,i){return this.ro(d,e,f,g,h,A.bo,i)},
aZ4(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.l0(new B.eR(d,u,u,A.d_,u,u,u,u,u,u,new B.G(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a4,A.cb,new B.kI(1),u,u,h,u,A.c7,u)
v.uB(g)
if(!v.b.a.c.gaDY())return w
w-=2}return j},
ae1(d,e,f,g,h,i,j,k){return this.aZ4(d,e,f,g,h,i,j,k,A.bo)},
az7(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a7(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.w(t,A.m,w,A.e,A.j,0,A.p)},
az6(d){return this.az7(null,!1,d)},
agU(d,e){return this.az7(null,d,e)},
cpa(d,e){return this.az7(d,!1,e)},
gb0e(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaUJ(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
OC(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.ae1(w.gaUJ(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaUJ(),v,g,A.a2,v,v,v,w.ax1(u,t,f,1.02,A.O),e,v,v)},
aUO(d){return this.OC(d,A.L,null,2,78,30)},
abv(d,e,f,g,h){return this.OC(d,e,null,f,g,h)},
bXr(d,e,f,g,h){return this.OC(d,A.L,e,f,g,h)},
bXq(d,e,f){return this.OC(d,A.L,null,e,f,30)},
RI(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bI
w=v.d.as
return new B.D(A.jF,B.d(s,u,g,A.a2,u,u,u,v.aZ6(w,v.aZ4(t,w,A.cM,d,g,h,15,1.2,A.cE),f,1.2,A.cE),e,u,u),u)},
b65(d){return this.RI(d,A.L,null,3,24)},
aAB(d,e,f,g){return this.RI(d,e,null,f,g)},
cwJ(d,e,f){return this.RI(d,A.L,e,3,f)},
b66(d,e){return this.RI(d,e,null,3,24)},
cwH(d,e){return this.RI(d,A.L,null,3,e)},
cwI(d,e,f){return this.RI(d,e,null,3,f)},
aqD(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.fY,B.d(u.toUpperCase(),v,v,v,v,v,v,w.PM("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
Nz(){return this.aqD(null,!0)},
aqC(d){return this.aqD(null,d)},
bEo(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bI
return new B.D(A.i4,new B.a7(d,w,B.d(v,w,2,A.a2,w,w,w,this.c7v(this.d.as,13.5,1.2,A.cE),e,w,w),w),w)},
vv(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.S(Date.now(),0,!1),i=m.gb0e(),h=A.o.am(j.bz(B.c1(B.bA(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hVD(Math.max(1,B.bA(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aZ5(k,12,1.2,A.O),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.ae1(i,v,A.O,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.ae1(i.toUpperCase(),v,A.O,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.w(B.a([B.p(l,B.B(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eH,l,l,l,m.ae4(v,u*0.84,h,1,1,A.O),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.N,B.B(B.a([B.d(C.bBw(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.ir,A.j,0,l,l),A.am,m.agU(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.w(B.a([B.B(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.eo,B.E(B.d(i,l,1,A.eH,l,l,l,m.ax0(v,u*0.9,1,A.O),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.R,B.B(B.a([B.d(C.bBw(j),l,l,l,l,l,l,m.PM(k,13,B.b0(h),0.6,A.O),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.ir,A.j,0,l,l),A.N,m.cpa(B.b0(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb0e()
v=B.d("NGMY",l,l,l,l,l,l,m.ax2(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.n(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.w(B.a([B.B(B.a([v,A.ab,B.eE(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.ro(k,r*0.72,o,1.05,-0.5,A.cE,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b4,new B.dq(1,A.cm,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.ae4(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.O),A.dP,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.N,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.ir,A.j,0,l,l)
t=m.agU(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.ax0(v,u,1,A.O),A.L,l,l)
q=a0?4:8
return B.w(B.a([w,A.av,t,new B.a7(l,s,l,l),v,new B.a7(l,q,l,l),m.agU(!0,1.4),A.av,B.d(C.bBw(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.av,m.az6(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.w(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.ax2(v,u,1,3,A.O),A.L,l,l),A.N,m.agU(!0,1.2),A.av,B.B(B.a([B.d(C.bBw(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.ir,A.j,0,l,l),A.av,m.az6(3)],h),A.m,l,A.e,A.j,0,A.p)}},
acD(d){return this.vv(d,!1)},
ae2(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.n(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.ae4("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
c7t(d,e){return this.ae2(d,null,e,null)},
aWP(d){var w=null,v=new B.S(Date.now(),0,!1),u=A.o.F(B.dk(v),12)===0?12:A.o.F(B.dk(v),12),t=B.b0(this.d.w).j(0.75),s=this.ax1("Roboto",15,t,1,A.cv),r=B.X(E.akE,t,w,w,w,18),q=A.a.ap(A.p4[B.bH(v)-1],0,3),p=A.a.aX(A.o.u(B.h1(v)),2,"0"),o=B.dk(v)>=12?"PM":"AM"
return B.B(B.a([r,A.ab,B.d(q+" "+B.bR(v)+", "+B.bA(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fL,w,w,w,1),B.X(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
avM(){return this.aWP(A.o2)},
b3f(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.ae4("Roboto",this.ae1(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
aza(d,e,f){return this.b3f(d,e,f,30)},
aAE(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bI
return new B.D(A.vr,B.d(v,w,e,A.a2,w,w,w,this.c7u("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b6a(d){return this.aAE(d,3,22)},
cwU(d,e){return this.aAE(d,e,22)},
tD(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fO(r,A.A,s,s,A.ce,A.bU,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.Dl(D.bz2,w,s)
if(v==="sepia")w=new B.Dl(D.bz1,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.au(B.X(A.yc,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c0(s,new B.o(s,s,s,s,s,new B.c_(A.A,0.95,A.x,s,0,B.a([A.K,A.WO.j(0.38)],x.O),s,s),A.n),A.be))
return new B.a7(d,e,new B.an(A.V,s,A.b0,A.r,v,s),s)},
qt(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b0(j),A.q,3)
j=B.I(B.b0(j),A.q,1)
return B.p(k,B.p(k,l.tD(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.ev,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lW,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.e8y,14)],x.V)
v=l.tD(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eE(A.A,-0.035,B.p(k,B.w(B.a([v,B.E(B.au(B.d(u,k,2,A.a2,k,k,k,l.aZ6(j.as,13.5,D.bbb,1.1,A.cE),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.beC,k,k,k,w,k,A.n),k,e,k,k,D.btT,k,k,d),k)
case 3:w=B.n(30)
j=B.I(B.b0(j.x),A.q,5)
return B.p(k,B.bw(B.n(25),l.tD(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b0(j.x),A.q,6)
j=B.b0(j.f)
v=t-10
return new B.a7(d,e,B.au(B.p(k,B.hZ(l.tD(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a5),k,t,k,k,A.lW,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.e8o,10)],x.V)
return B.eE(A.A,0.025,new B.a7(d,e,new B.an(A.V,k,A.a9,A.f,B.a([B.bT(0,B.p(k,l.tD(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.r6,k,k,k),0,0,0),B.ao(k,B.eE(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eE(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a7(d,e,B.b3(B.nw(l.tD(d,e),A.aq,D.h3H),new C.bbM(j,k),k,k,A.az),k)
case 7:j=x.p
w=B.a([l.tD(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bm(u));++n){m=new B.aR(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bO,k,k,new B.bo(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cL(0,q,0,p,k,k,new B.ck(A.aN,A.rq,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.V,k,A.b0,A.r,w,k),A.f,A.ed,k,k,k,e,k,k,D.byi,k,k,d)
case 8:w=d/2
v=B.wZ(A.hE,new B.aR(w,w))
j=B.I(B.b0(j.x),A.q,5)
w-=5
return B.p(k,B.bw(B.wZ(A.hD,new B.aR(w,w)),l.tD(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fN,22)],x.V)
return B.p(k,l.tD(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bT,k,k,d)
case 10:return new B.a7(d,e,B.nw(l.tD(d,e),A.aq,D.haH),k)
case 0:j=B.I(B.b0(j.w),A.q,2.4)
return B.p(k,l.tD(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.ev,k,k,d)}},
aOb(d,e){return this.d.e===D.Rt?A.bI:this.bEo(d,e)},
Wi(d){return this.aOb(d,A.L)},
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
if(m.length!==0&&w.length===0)q.push(B.E(B.au(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aZ7(v.Q,19,1.15,A.cE,A.O),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.PM("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.av)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.ae3(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jx(B.w(q,A.F,n,A.e,A.j,0,A.p),A.r,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bk,n,n,d)},
gcfB(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a9c(d,e,f,g){return B.cA(new C.cd0(this,e,d,f,g))},
a9b(d){return this.a9c(d,22,!0,18)},
Wt(d,e){return this.a9c(d,22,!0,e)},
aPc(d,e,f){return this.a9c(d,22,e,f)},
bGp(d,e,f){return this.a9c(d,e,!0,f)},
b95(d,e,f,g){return B.cA(new C.cd1(this,e,d,g,!0,f))},
cep(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.w(B.a([k.acD(824),A.aB,k.aUO(824),k.b65(824),A.N,k.Nz(),A.ac,B.au(k.qt(824,360),j,j,j),k.Wi(824),A.ac,B.E(k.a9b(3),1)],x.p),A.ai,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.w(B.a([k.acD(824),A.aP,new B.a7(j,350,B.B(B.a([new B.a7(440,j,B.w(B.a([k.abv(440,A.bh,3,62,26),k.aAB(440,A.bh,2,20),A.b4,k.aqD(B.b0(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.J1,B.w(B.a([k.qt(362,310),k.Wi(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.R,k.az6(2),A.ac,B.E(k.a9b(3),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 2:w=k.vv(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.bXr(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cwJ(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.w(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.Bh,j,j,j)
u=B.a([B.au(k.qt(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Rt){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.ax1(i,14,A.c,1.15,A.O),j,j,j),A.f,h,j,j,j,j,j,j,A.lm,j,j,j),j,j,0,0,j,j))}return B.w(B.a([w,A.ac,v,A.ac,new B.an(A.V,j,A.a9,A.r,u,j),A.N,k.Nz(),A.R,B.E(k.Wt(2,21),1)],t),A.ai,j,A.e,A.j,0,A.p)
case 3:h=k.vv(824,!0)
w=k.qt(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.w(B.a([h,A.ac,new B.an(A.b6,j,A.a9,A.r,B.a([w,B.ao(0,B.p(j,k.OC(780,A.bh,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a8(A.b2,A.b6,A.x,v,j,j),A.n),j,j,j,j,D.bwA,j,j,j),j,j,0,0,j,j)],u),j),k.b66(824,A.bh),A.N,k.Nz(),A.R,B.E(k.a9b(3),1)],u),A.ai,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.w(B.a([k.acD(824),A.aB,k.aUO(824),k.b65(824),A.N,k.Nz(),A.ac,B.E(k.b95(3,300,B.w(B.a([k.qt(300,300),k.Wi(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.ai,j,A.e,A.j,0,A.p)
case 5:w=k.vv(824,!0)
v=x.p
u=B.w(B.a([k.abv(440,A.bh,3,62,26),k.aAB(440,A.bh,2,20),A.b4,k.aqC(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.w(B.a([w,A.bw,new B.a7(j,400,B.B(B.a([new B.a7(440,j,u,j),A.aOw,new B.D(A.i4,k.qt(364,h.e===D.Rt?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.aB,B.E(k.Wt(2,21),1)],v),A.ai,j,A.e,A.j,0,A.p)
case 6:return B.w(B.a([k.acD(824),A.ac,k.bXq(824,2,70),k.cwH(824,21),A.N,k.Nz(),A.ac,B.E(k.b95(3,340,B.au(k.qt(340,340),j,j,j),350),1)],x.p),A.ai,j,A.e,A.j,0,A.p)
case 7:w=k.vv(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bBw(new B.S(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.PM(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bk,j,j,j),A.aB],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aZ7(h.Q,24,1.15,A.cE,A.O),j,j,j))
v.push(A.b4)
if(k.gazV())v.push(k.azU(230,250))
return B.w(B.a([w,A.aB,B.E(B.B(B.a([new B.a7(230,j,B.w(v,A.ai,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.ahu,j,j,j,1.2),new B.a7(570,j,B.w(B.a([k.abv(570,A.bh,3,62,28),k.cwI(570,A.bh,20),A.N,k.aqC(!1),A.N,B.au(k.qt(570,330),j,j,j),k.Wi(570),A.R,B.E(k.aPc(2,!1,17),1)],t),A.ai,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.ai,j,A.e,A.j,0,A.p)
case 8:w=k.vv(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.PM(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.w(B.a([w,A.ac,B.p(j,B.w(B.a([t,A.am,k.OC(788,A.bh,v?A.w:B.b0(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.buV,j,j,j),k.b66(824,A.bh),A.R,B.au(k.qt(824,310),j,j,j),k.Wi(824),A.N,k.Nz(),A.R,B.E(k.a9b(3),1)],s),A.ai,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.w(B.a([k.vv(824,!0),A.aP,new B.an(A.V,j,A.a9,A.r,B.a([k.qt(824,430),B.ao(18,k.c7t(k.c.b,17),j,j,18,j,j,j)],w),j),A.bw,k.aza(824,3,66),k.b6a(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.avM(),A.aB,B.E(k.Wt(2,18),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.w(B.a([k.vv(824,!0),A.bw,new B.a7(j,500,B.B(B.a([new B.a7(410,j,B.w(B.a([k.ae2(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aP,k.b3f(410,4,58,28),k.aAE(410,6,20),A.b4],w),A.F,j,A.e,A.j,0,A.p),j),U.aOx,k.qt(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.aB,k.avM(),A.aP,B.E(k.Wt(2,18),1)],w),A.ai,j,A.e,A.j,0,A.p)
case 12:w=k.vv(824,!0)
v=k.qt(824,420)
u=B.hyj(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.w(B.a([w,A.aP,new B.an(A.V,j,A.a9,A.r,B.a([v,B.ao(22,B.fu(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c7w(i,30,A.c,1,A.cE,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bwQ,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bw,k.aza(824,3,62),k.b6a(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aWP(A.ls),A.aB,B.E(k.Wt(2,18),1)],r),A.ai,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vv(824,!0)
u=h.w
t=x.p
w=B.a([k.qt(824,380),B.ao(j,k.ae2(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.aza(824,2,60)
r=k.cwU(824,2)
p=k.avM()
o=B.E(k.aPc(2,!1,18),1)
n=B.I(B.b0(u).j(0.18),A.q,1)
m=B.n(18)
h=h.x
l=B.b0(h).j(0.05)
return B.w(B.a([v,A.aP,new B.an(A.V,j,A.a9,A.r,w,j),A.aP,s,r,A.R,p,A.aB,o,A.ac,B.p(j,B.B(B.a([B.bw(B.n(14),k.tD(150,104),A.aq),A.oj,B.E(B.w(B.a([k.ae2("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.N,B.d(q,j,2,A.a2,j,j,j,k.ax0(i,19,1.15,A.H),j,j,j)],t),A.F,j,A.e,A.Q,0,A.p),1),B.X(A.eA,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bk,j,j,j)],t),A.ai,j,A.e,A.j,0,A.p)
case 9:return B.w(B.a([k.vv(824,!0),A.bw,k.abv(824,A.bh,3,62,30),k.aAB(824,A.bh,2,22),A.R,k.aqC(!1),A.R,B.au(k.qt(824,330),j,j,j),k.aOb(824,A.bh),A.aP,B.E(k.bGp(2,40,21),1)],x.p),A.ai,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bT(0,B.c0(s,new B.o(s,s,s,s,s,new B.a8(A.ay,A.aC,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.be),0,0,0)],o)
if(q.ax)n.push(B.bT(0,B.b3(s,s,s,new C.b8k(B.b0(q.w),s),A.az),0,0,0))
w=q.w
n.push(new B.D(D.bxm,B.w(B.a([B.E(t.cep(),1),A.N,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fF,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aZ5(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.PM(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.ir,A.j,0,s,s)],o),A.ai,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bT(0,B.e1(B.b3(s,s,s,new C.bqF(v.j(q.ch?0.07:0.06),s),A.az),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.I(B.b0(w).j(0.5),A.q,1.2)
u=B.n(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hZ(B.fO(q,A.A,s,s,A.ce,A.bU,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.o2,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.ax2(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e1(B.db(B.p(s,B.B(o,A.m,s,A.e,A.Q,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.byq,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a7(900,1260,B.jx(new B.an(A.V,s,A.a9,A.r,n,s),A.r,s),s)}}
C.bbN.prototype={
jd(d){return C.hdd(d)},
jT(d){return!1}}
C.bbM.prototype={
a6(d,e){var w,v=C.hdd(e)
$.W()
w=B.N()
w.r=this.b.gp(0)
w.b=A.af
w.c=6
return d.aS(v,w)},
av(d){return!d.b.A(0,this.b)}}
C.bta.prototype={
jd(d){var w,v,u,t,s,r,q,p,o=new B.f5()
o.dU(3)
w=$.W()
v=B.a([],x.v)
u=new B.aO(w.r,A.ao,null,null,v)
u.E(new B.b5(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.ap(s,o.an()*14)
v.push(w)
r=u.f
if(r!=null)w.bA(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.E(new B.ap(t,8))
w=d.b
r=w-8
u.E(new B.ap(t,r))
for(;t>0;t-=14){q=new B.ap(t,w-o.an()*14)
v.push(q)
p=u.f
if(p!=null)q.bA(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.E(new B.ap(0,r))
u.E(new B.bE())
return u},
jT(d){return!1}}
C.b8k.prototype={
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
w.sar(new B.c_(A.A,0.5,A.x,l,0,B.a([A.Wh.j(0.13),A.K],v),l,l).aA(0,B.bU(new B.x(q,p),m)))
n=w.K()
s.drawCircle(q,p,m,n)
n.delete()}w.sar(l)},
av(d){return!1}}
C.bqF.prototype={
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
C.VB.prototype={
U(){return new C.aDF()}}
C.aDF.prototype={
a_(){var w=this
w.a1()
B.fsI(w.a.c,null).bJ(new C.ehy(),x.g7).bJ(new C.ehz(w),x.a)
w.a.toString},
gaN_(){var w=D.avc[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gax3(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaN_()
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
ZN(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ZN=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.ehl(r))
t=4
q=r.gax3()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.W()
n=new B.qm()
m=B.B6(n,null)
i=B.N()
i.Q=A.fZ
m.op(g,q,new B.a9(0,0,0+p,0+o),i)
w=7
return B.b(n.oq().zj(J.h2G(p),J.h2G(o)),$async$ZN)
case 7:l=e
w=8
return B.b(l.hu(A.h0),$async$ZN)
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
if(r.c!=null){r.m(new C.ehm(r))
r.c.I(x.q).f.R(D.eZY)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ZN,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aI(s,s,s,s,A.l3,s,s,s,new C.ehs(d),s,s,s,s,s,s),p=x.p
q=B.ez(B.a([B.bK(!1,D.fC5,s,s,!0,s,s,t.y||r==null?s:t.gc7x(),s,s)],p),s,s,!0,!0,A.AV,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fG0,s,s,s,1,s,!0)
if(r==null)p=A.mh
else{w=B.E(new B.D(A.bQ,B.au(new B.fK(t.gaN_(),B.cA(new C.eht(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.il,B.j9(s,s,s,new B.y(D.avc[u].a,s,E.aQk,s,s,s,s,s,s,s,s,s),s,new C.ehu(t,u),t.e===u,s,s,s,s),s))
p=B.w(B.a([w,B.p(s,B.bl(!0,B.w(B.a([new B.a7(s,40,B.cy(v,s,s,s,s,A.aN,!1),s),B.B(B.a([D.bPT,B.E(B.l_(s,s,s,6,1,new C.ehv(t),t.f),1),D.bPv],p),A.m,s,A.e,A.j,0,s,s),D.fzr,A.am,B.bK(!1,D.fz9,s,s,!0,s,s,new C.ehw(t,d),s,s)],p),A.m,s,A.e,A.Q,0,A.p),!0,!1,A.ae,!0,!1),A.f,D.X0,s,s,s,s,s,s,D.bug,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.c6(q,A.AV,p,s,!1,!1,s,s)}}
C.bbj.prototype={
a6(d,e){var w
$.W()
w=B.N()
w.Q=A.ce
return d.op(this.b,this.c,new B.a9(0,0,0+e.a,0+e.b),w)},
av(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a_C.prototype={
U(){var w=$.aw(),v=x.A
return new C.aF1(new B.ar(A.as,w),new B.ar(new B.bb("NGMY",A.b3,A.aM),w),new B.cu(null,v),new B.cu(null,v),A.d.gH(D.a3A),"quote"+1000*Date.now(),B.a([],x.t),B.aY(x.S),A.L)}}
C.oB.prototype={}
C.aF1.prototype={
gaUW(){var w,v,u=this
if(u.p1)w=new B.vI(1,u.p2,0.9,u.p3).lZ().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
a_(){var w=this
w.a1()
w.a.toString
w.p4=null
$.aV.x1$.push(new C.eQJ(w))},
t(){var w=this.d,v=$.aw()
w.S$=v
w.P$=0
w=this.e
w.S$=v
w.P$=0
this.a2()},
Yr(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Yr=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.qW().jG(0,"assets/images/ngmy_logo.png"),$async$Yr)
case 7:q=e
p=J.eU(J.vq(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bCg(new B.pP(p,1),o),$async$Yr)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.ePB(r,p))
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
return B.i($async$Yr,v)},
PP(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$PP=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hS().kT(92,1800,A.eG),$async$PP)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fe(),$async$PP)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bCg(new B.pP(p,1),n),$async$PP)
case 9:if(r.c==null){w=1
break}r.m(new C.ePZ(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.ab(l)
n=r.c
if(n!=null)n.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d("Could not open that picture. "+B.u(o),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$PP,v)},
b2D(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aB=w.aJ=w.aE=w.aw=w.Z=w.b8=w.bi=w.y2=0
w.b0=null
w.b_=0.25
w.bb=null
w.bI=0.5
w.aG=1
w.c6=w.bB=w.bh=0
w.cJ=w.c4=!1},
aWz(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.byZ(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.dfC)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.byZ(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.byZ(C.fYy(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.byZ(C.fYy(1-a0*0.5,n,n,n),w)}return a1?C.byZ(C.fYy(-1,255,255,255),w):w},
aAK(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).l1(0,this.d.a.a),t=B.C(u,B.a6(u).k("J.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.zc(u,v,w)
this.dx.pe(new C.eQ8(t),!0)
return t},
b58(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aAK()
w=C.i4R(e.d.a.a,e.db)
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
return C.i1l(d,k,v,a0,j,e.gaUW(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cuD(){return this.b58(null)},
D9(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$D9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aV.gmB(),$async$D9)
case 3:w=4
return B.b(B.bM(A.eM,null,x.H),$async$D9)
case 4:w=5
return B.b($.aV.gmB(),$async$D9)
case 5:s=$.aV.aj$.x.h(0,t.r)
r=s==null?null:s.gba()
if(!(r instanceof B.q_)){u=null
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
aa3(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$aa3=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.ePk(q))
t=4
w=7
return B.b(q.D9(),$async$aa3)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cJ.gct().aK(p)
n=C.BI(null,null,null,null,D.od,6,!1,null,null,null,null,null,C.cB(),null,!1,null,"NGMY Quote",null,null,B.a([q.b58(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a4(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.ab(j)
l=q.c
if(l!=null)l.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(B.u(m),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ePl(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aa3,v)},
Ar(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Ar=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.ePi(q))
t=4
w=7
return B.b($.aV.gmB(),$async$Ar)
case 7:w=8
return B.b(B.bM(A.n7,null,x.H),$async$Ar)
case 8:w=9
return B.b($.aV.gmB(),$async$Ar)
case 9:k=$.aV.aj$.x.h(0,q.f)
p=k==null?null:k.gba()
if(!(p instanceof B.q_))throw B.V("The picture is not ready yet.")
w=10
return B.b(p.m_(1080/p.gY(0).a),$async$Ar)
case 10:o=e
w=11
return B.b(o.hu(A.h0),$async$Ar)
case 11:n=e
if(n==null)throw B.V("Could not make the picture.")
w=12
return B.b(A6.ag7(J.eU(A.dC.gaP(n)),"ngmy_quote.png","image/png"),$async$Ar)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.I(x.q).f
k.R(B.b2(null,null,null,null,null,A.r,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
k=q.c
if(k!=null)k.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(B.u(l),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ePj(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ar,v)},
chw(){var w=this.p4
w.toString
return B.cA(new C.ePS(this,w))},
aZe(d,e){var w=null
return B.bs(w,w,w,w,w,D.f9k,w,w,!0,new B.b4(4,B.n(16),P.v3),w,w,w,w,w,D.tn,!0,w,w,w,w,new B.b4(4,B.n(16),D.aZW),w,w,w,w,w,w,w,w,A1.DB,e,w,w,w,w,w,w,w,D.fey,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xR(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b5,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aR7,w,w,w))
return new B.D(H.ahl,B.B(u,A.m,w,A.e,A.j,0,w,w),w)},
aZd(d,e){var w=null,v=B.n(18),u=B.I(A.bD,A.q,1)
return B.p(w,B.aF(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.jM),A.f,w,w,new B.o(D.tn,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vC(d){return this.aZd(d,A.bE)},
oa(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.uc:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.n(30)
u=B.I(f?A.K:A.bD,A.q,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.k1,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.k1,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aB(r,B.de(r,B.B(s,A.m,r,A.e,A.Q,0,r,r),r,r,A.bb,new B.o(w,r,u,v,r,p,A.n),A.hw,r,r,r,A.Fs,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a7)},
afT(d,e,f){return this.oa(d,null,e,f)},
ax7(d,e,f,g,h,i,j){var w=null,v=B.n(12),u=g?A.b5.j(0.28):A.c.j(0.05),t=g?A.eC:A.bD,s=x.p
v=B.a([B.de(w,d,w,w,A.bb,new B.o(u,w,B.I(t,A.q,g?2:1),v,w,w,A.n),A.hw,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aA
A.d.v(v,B.a([A.av,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aB(w,new B.a7(j,w,B.w(v,A.m,w,A.e,A.Q,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a7)},
aZh(d,e,f,g,h,i){return this.ax7(d,e,f,g,h,5,i)},
km(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,D.f6j,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aB(u,D.ec7,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eQ4(this,h,i),u,u,u,u,u,u,!1,A.a7))
w=A.c.j(0.08)
v=B.n(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aQd,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.Zu,u,u,u))
s=B.B(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.auV(w).cIR(A.b5,A.bD,A.b5.j(0.2),A.c,D.eQd,4)
return new B.D(A.xK,B.w(B.a([s,B.a9M(B.l_(u,u,u,g,f,new C.eQ5(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
ahU(d,e,f,g,h,i){return this.km(d,e,f,g,h,null,i)},
aik(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.L)(f),++v){u=f[v]
t=u==null
s=t?A.dB:B.b0(u)
r=d==u
q=r?A.c:A.b1
p=new B.az(q,r?3:1,A.q,-1)
t=t?D.bIU:o
n.push(B.aB(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bO(p,p,p,p),o,o,o,A.a5),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eQ7(this,e,u),o,o,o,o,o,o,!1,A.a7))}return B.bZ(A.bC,n,A.br,10,10)},
bKv(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a3A
else{v=x.a8
w=B.C(new B.a_(D.a3A,new C.ePa(o),v),v.k("J.E"))}v=B.aM(n,A.U,!1,n,!0,A.r,n,B.aN(),o.d,n,n,n,n,n,2,o.aZe("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.ePb(o),n,n,n,!1,n,n,!1,n,!0,n,A.aa,n,n,n,n,n,n,n,n,n,n,n,A.a8o,!0,A.a4,n,A.an,n,n,n,n)
u=B.aM(n,A.U,!1,n,!0,A.r,n,B.aN(),o.e,n,n,n,n,n,2,o.aZe("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.ePc(o),n,n,n,!1,n,n,!1,n,!0,n,A.aa,n,n,n,n,n,n,n,n,n,n,n,A.dg,!0,A.a4,n,A.an,n,n,n,n)
t=o.xR("DESIGNS",A.tW)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cRs[q]
r.push(new B.D(A.il,o.afT(p,o.x===p,new C.ePd(o,p)),n))}return B.w(B.a([v,A.R,u,t,B.cc(B.B(r,A.m,n,A.e,A.j,0,n,n),A.r,n,A.y,n,n,n,n,A.aN),A.ac,new B.a7(n,118,B.hM(n,new C.ePe(o,w),w.length,n,n,A.aN,new C.ePf(),!1),n),A.N,o.aZd(B.w(B.a([B.iH(A.b5,n,n,A.ae,!0,new C.ePg(o),n,D.fqA,n,D.fmU,o.k3),B.iH(A.b5,n,n,A.ae,!0,new C.ePh(o),n,n,n,D.fka,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.ahY)],s),A.F,n,A.e,A.j,0,A.p)},
cDh(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aAK()
if(a7.length===0)return a5.vC(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.Jp,a6,a6,a6))
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
l=m.length!==0&&A.d.d7(m,new C.eQy(a5,m))?a5.db[A.d.gH(m)]:a6
k=new C.eQF(a5)
j=new C.eQH()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.Jp,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aR(11,11)
f=u.q(0,h)?A.b5.j(0.38):A.c.j(0.06)
e=u.q(0,h)?A.eC:A.bD
d=new B.az(e,u.q(0,h)?2:1,A.q,-1)
e=a7[h].b
a0=e.index
e=A.a.ap(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aL(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a6
o.push(B.aB(a6,B.p(a6,new B.y(e,a6,new B.G(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bO(d,d,d,d),new B.bo(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.ML,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eQz(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a7))}o=a5.vC(B.bZ(A.bC,o,A.rX,6,6))
i=B.a([a5.oa("All words",L.ame,!1,new C.eQA(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.afT("Sentence "+a3,!1,new C.eQB(a5,a7,v,a2)))
a2=a3}}i.push(a5.afT("Clear picks",!1,new C.eQC(a5)))
i=B.bZ(A.bC,i,A.br,8,8)
g=a5.xR("SIZE OF THE PICKED WORDS",D.alH)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dlp[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eQD(e,k)
f.push(a5.afT(a0.b,l===a4,e))}return B.w(B.a([q,A.R,o,A.R,i,g,B.bZ(A.bC,f,A.br,8,8),A.R,a5.oa("Make every word normal",A.l0,!1,new C.eQE(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cyo(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.bzB,B.d(A.d.fZ(D.awR,new C.eQh(q)).b,p,p,p,p,p,p,D.f7M,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cA(new C.eQi(q)),l=q.xR("HIGHLIGHT BEHIND THE WORDS",A.a0o),k=q.p1?-1:q.k4
k=q.aik(k,new C.eQj(q),D.d1_)
w=q.p1
v=w?A.c:A.b1
n=B.a([n,A.R,m,l,B.bZ(A.bC,B.a([k,B.aB(p,B.p(p,D.bLT,A.f,p,p,new B.o(p,p,B.I(v,A.q,w?3:1),p,p,D.f1A,A.a5),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eQm(q),p,p,p,p,p,p,!1,A.a7)],o),A.rX,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.Jp,p,p,p)],o)
if(q.gaUW()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ahU("Colour",l,0,360,new C.eQn(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ahU("Shade",k,0.15,0.9,new C.eQo(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.km("Strength",l,0.15,1,new C.eQp(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.R,q.vC(B.w(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xR("LOOK",A.yx))
m=B.a([q.oa("Bold",I.alF,q.fy,new C.eQq(q)),q.oa("Italic",I.alG,q.go,new C.eQr(q))],o)
for(u=0;u<3;++u){l={}
k=D.cSD[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.uc:p
w=w?p:A.c.j(0.07)
s=new B.aR(14,14)
r=new B.az(q.id===l.a?A.K:A.bD,1,A.q,-1)
m.push(B.aB(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bO(r,r,r,r),new B.bo(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eQs(l,q),p,p,p,p,p,p,!1,A.a7))}n.push(B.bZ(A.bC,m,A.rX,8,8))
n.push(q.xR("COLOUR",A.nh))
n.push(q.aik(q.fx,new C.eQt(q),D.dcd))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.Jp,p,p,p))
n.push(q.xR("SIZE AND PLACE",A.Gq))
m=q.fr
m=q.km("Text size",m,0.5,1.6,new C.eQk(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vC(B.w(B.a([m,q.km("Up / down",l,0.12,0.5,new C.eQl(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.w(n,A.F,p,A.e,A.j,0,A.p)},
chx(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.n(22)
v=B.I(A.b5.j(0.6),A.q,1.6)
u=B.a([A.b5.j(0.18),A.bA.j(0.12)],x.O)
return B.aB(p,B.p(p,B.w(B.a([B.p(p,D.bRk,A.f,p,p,D.b1U,p,62,p,p,p,p,p,62),A.aB,D.fo7,A.am,D.fsL],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.tn,p,v,w,p,new B.a8(A.a3,A.a8,A.x,u,p,p),A.n),p,p,p,p,D.bvr,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaZg(),p,p,p,p,p,p,!1,A.a7)}w=x.p
v=B.B(B.a([B.bw(B.n(12),new B.a7(46,62,B.fO(o,A.A,120,p,A.ce,A.bU,!1,p,!1,p,p),p),A.aq),A.bd,B.E(B.w(B.a([D.fnF,A.N,B.bZ(A.bC,B.a([q.oa("Change",A.k9,!1,q.gaZg()),q.oa("Remove",A.ef,!1,new C.ePW(q))],w),A.br,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.d8x[t]
u.push(q.oa(s.b,s.a,q.at===t,new C.ePX(q,t)))}u=B.bZ(A.bC,u,A.br,8,8)
r=q.at
A:{if(0===r){s=q.c0n(o)
break A}if(1===r){s=q.c_m()
break A}if(2===r){s=q.bGo()
break A}if(3===r){s=q.bMJ()
break A}s=q.bIt()
break A}return B.w(B.a([v,A.ac,u,A.aB,s,A.R,new B.bI(A.a3,p,p,q.oa("Reset the whole picture",A.l0,!1,new C.ePY(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
c0n(d){var w=this,v=x.p
return B.w(B.a([B.bZ(A.bC,B.a([w.oa("Auto enhance",E.a01,!1,new C.ePO(w)),w.oa("Make words easy to read",A.oY,!1,new C.ePP(w))],v),A.br,8,8),A.aB,B.cA(new C.ePQ(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
c_m(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.km("Exposure",n,-1.5,1.5,new C.ePs(o),0,A.k.ab(n,1))
w=o.RG
w=o.km("Brightness",w,-0.5,0.5,new C.ePt(o),0,""+A.k.V(w*100))
v=o.rx
v=o.km("Contrast",v,0.4,2,new C.ePu(o),1,""+A.k.V(v*100))
u=o.xr
u=o.km("Fade",u,0,1,new C.ePv(o),0,""+A.k.V(u*100))
t=o.aE
t=o.km("Spotlight",t,0,1,new C.ePw(o),0,""+A.k.V(t*100))
s=o.Z
s=o.km("Darken",s,0,0.85,new C.ePx(o),0,""+A.k.V(s*100))
r=o.b8
r=o.km("Vignette",r,0,0.9,new C.ePy(o),0,""+A.k.V(r*100))
q=o.aB
q=o.km("Shade behind words",q,0,0.85,new C.ePz(o),0,""+A.k.V(q*100))
p=o.aJ
return o.vC(B.w(B.a([n,w,v,u,t,s,r,q,o.km("Shade top & bottom",p,0,0.85,new C.ePA(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bGo(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.km("Colour strength",q,0,2.2,new C.eOO(s),1,""+A.k.V(q*100))
w=s.to
w=s.km("Warmth",w,-1,1,new C.eOP(s),0,""+A.k.V(w*100))
v=s.x1
v=s.km("Tint",v,-1,1,new C.eOQ(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vC(B.w(B.a([q,w,v,s.km("Shift colours",u,-180,180,new C.eOR(s),0,""+A.k.V(u)+"\xb0"),new B.bI(A.a3,r,r,s.oa("Negative",D.bGZ,s.y1,new C.eOS(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xR("COLOUR WASH",A.NI)
w=s.b0
q=B.a([null],x.Z)
A.d.v(q,D.avB)
t=B.a([u,v,s.aik(w,new C.eOT(s),q),A.N],t)
if(s.b0!=null){q=s.b_
t.push(s.vC(s.ahU("Wash strength",q,0,0.9,new C.eOU(s),""+A.k.V(q*100))))}return B.w(t,A.F,r,A.e,A.j,0,A.p)},
bMJ(){var w,v,u,t,s,r=this,q=r.y2
q=r.km("Blur",q,0,24,new C.ePm(r),0,A.o.u(A.k.V(q)))
w=r.bi
w=r.km("Soft focus",w,0,1,new C.ePn(r),0,""+A.k.V(w*100))
v=r.aw
u=x.p
v=r.vC(B.w(B.a([q,w,r.km("Film grain",v,0,1,new C.ePo(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xR("LIGHT LEAK",D.bGH)
q=r.bb
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.dc(D.avB,0,B.dG(8,"count",s),s))
u=B.a([v,w,r.aik(q,new C.ePp(r),t),A.N],u)
if(r.bb!=null){q=r.bI
u.push(r.vC(r.ahU("Leak strength",q,0,1,new C.ePq(r),""+A.k.V(q*100))))}return B.w(u,A.F,null,A.e,A.j,0,A.p)},
bIt(){var w,v,u,t,s=this,r=s.aG
r=s.km("Zoom",r,1,3,new C.eOY(s),1,""+A.k.V(r*100)+"%")
w=s.bh
w=s.km("Left / right",w,-1,1,new C.eOZ(s),0,""+A.k.V(w*100))
v=s.bB
v=s.km("Up / down",v,-1,1,new C.eP_(s),0,""+A.k.V(v*100))
u=s.c6
t=x.p
return B.w(B.a([s.vC(B.w(B.a([r,w,v,s.km("Turn",u,-180,180,new C.eP0(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.R,B.bZ(A.bC,B.a([s.oa("Turn 90\xb0",H.amL,!1,new C.eP1(s)),s.oa("Flip sideways",A.Gd,s.c4,new C.eP2(s)),s.oa("Flip upside down",A.Gd,s.cJ,new C.eP3(s))],t),A.br,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
c34(){var w=null,v=B.n(22),u=B.I(A.bD,A.q,1)
return B.p(w,B.w(B.a([D.eQp,A.R,D.fpC,A.aB,B.aB(w,B.p(A.A,D.eQC,A.f,w,w,new B.o(w,w,w,B.n(16),w,G.uc,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ePR(this),w,w,w,w,w,w,!1,A.a7)],x.p),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.tn,w,u,v,w,w,A.n),w,w,w,w,A.bQ,w,w,w)},
c0b(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.ePJ(p),m=x.p,l=B.B(B.a([D.bzH,p.oa("Reset",A.l0,!1,new C.ePF(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.Jp,o,o,o),j=p.xR("SHAPE",A.amH),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.Ci[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aZh(n.$2(t,p.cy),62,u.b,s===t,new C.ePG(v,p),62))}}i=B.bZ(A.bC,i,A.br,8,8)
v=p.xR("RING",A.r8)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.Cd[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aZh(n.$2(p.cx,t),62,r.b,q===t,new C.ePH(s,p),62))}u=B.bZ(A.bC,u,A.br,8,8)
s=p.CW
return B.w(B.a([l,A.av,k,j,i,v,u,A.ac,p.vC(p.km("Size",s,0.12,0.4,new C.ePI(p),0.22,""+A.k.V(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
b1b(d){return new B.a7(null,d,new B.fK(0.5625,B.cA(new C.eQ1(this)),null),null)},
cxF(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.n(18),n=B.I(A.bD,A.q,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.uc:q
t=new B.aR(14,14)
s=D.daF[w]
r=v?A.c:A.aA
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aA
l.push(new B.bB(1,A.bg,B.aB(A.ch,B.de(q,B.w(B.a([r,A.cQ,new B.qp(A.dZ,A.A,A.f,new B.y(s.b,q,new B.G(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.Q,0,A.p),q,q,A.bb,new B.o(q,q,q,new B.bo(t,t,t,t),q,u,A.n),D.br8,q,q,q,A.hx,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eQa(this,w),q,q,q,q,q,q,!1,A.a7),q))}return B.p(q,B.B(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bte,A.lW,q,q,q)},
aPJ(){var w,v,u=this,t=null,s=u.cxF(),r=u.as
A:{if(0===r){w=u.bKv()
break A}if(1===r){w=u.cDh()
break A}if(2===r){w=u.cyo()
break A}if(3===r){w=u.chx()
break A}if(4===r){w=u.c0b()
break A}w=u.c34()
break A}v=x.p
return B.bw(A.t2,B.el(B.w(B.a([s,B.E(B.cy(B.a([w],v),t,D.buh,t,t,A.ah,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.X0,!0),A.aq)},
aLY(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc7Y(),p=B.n(16)
q=B.E(B.aB(r,B.p(r,D.eQN,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.b1,A.q,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a7),1)
p=s.Q?r:s.gbMh()
w=B.n(16)
v=B.a([new B.ac(0,A.G,A.bA.j(0.35),A.cz,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eWe)
else t.push(D.bKY)
t.push(A.ab)
t.push(D.bBu)
return B.p(r,B.B(B.a([q,A.at,B.E(B.aB(r,B.p(r,B.B(t,A.m,r,A.b7,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.uc,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a7),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.b10,r,r,r,r,G.ahM,r,r,r)},
aZf(){var w=null
return new B.D(T.Zp,B.B(B.a([B.aI(w,w,w,w,A.mA,w,w,w,new C.ePr(this),w,w,w,w,w,w),D.fEY,A.b4,D.bTC],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c6(w,A.AV,B.bl(!0,B.cA(new C.eQI(this)),!0,!1,A.ae,!0,!0),w,!1,!1,w,w)}}
C.beQ.prototype={
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
s.drawRect(B.bX(new B.a9(p,o,p+1.1,o+1.1)),n)
n.delete()}},
av(d){return d.b!==this.b}}
C.rx.prototype={
a3(){return"NgmyQuoteDeco."+this.b}}
C.m7.prototype={}
C.zC.prototype={
ag(){var w=this
return B.F(["at",w.a.a5().ac(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nN.prototype={}
C.w1.prototype={
a3(){return"NgmySlidesAiExtra."+this.b}}
C.a7K.prototype={}
C.aqU.prototype={}
C.a08.prototype={
U(){return new C.aGX(new B.ar(A.as,$.aw()),B.jS(!0,null,!0,!0,null,null,!1),D.dBs,B.a([],x.s),B.eC([D.I6],x.Q))}}
C.aGX.prototype={
t(){var w=this.d
w.S$=$.aw()
w.P$=0
this.f.t()
this.a2()},
a06(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a06=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hS().C3(90,700,700,A.eG),$async$a06)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fe(),$async$a06)
case 8:p=e
if(r.c!=null)r.m(new C.eWW(r,p,q))
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
return B.i($async$a06,v)},
a09(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a09=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hS().aHa(78,n,1100,1100),$async$a09)
case 7:q=e
if(J.cm(q)){w=1
break}p=B.bn(r.y,!0,x.N)
n=J.aW(q)
case 8:if(!n.C()){w=9
break}o=n.gT(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fe(),$async$a09)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.cc(l,".png"))k="image/png"
else k=A.a.cc(l,".webp")?"image/webp":"image/jpeg"
J.cd(p,"data:"+k+";base64,"+A.cJ.gct().aK(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.eWX(r,p))
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
return B.i($async$a09,v)},
b3e(d){var w,v,u=null
if(d!=null&&A.a.q(d,","))try{w=B.fO(A.cF.aK(A.d.gak(d.split(","))),A.A,u,u,A.ce,A.bU,!0,u,!1,u,u)
return w}catch(v){}return D.bpi},
c0h(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cqZ(C.fzw(w,this.b3e(d),f),g)},
aco(d,e,f,g,h){var w=null,v=new C.eWU(f,e),u=new C.eWV(f,e),t=A.c.j(0.05),s=B.n(12),r=B.n(12),q=B.n(12),p=h==null,o=B.I(p?A.bD:A.b5.j(0.6),A.q,1)
if(p)p=new B.a7(34,30,new B.an(A.V,w,A.a9,A.f,B.a([B.au(B.X(f?A.BT:A.Nx,A.c_,w,w,w,26),w,w,w),D.ehQ],x.p),w),w)
else p=this.c0h(g,v.$1(h),u.$1(h),34)
return B.aF(!1,A.a1,!0,s,B.aK(!1,r,!0,B.p(w,B.B(B.a([B.E(B.au(p,w,w,w),1),D.bKF],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mu,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eWT(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ag)},
aWF(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.q(h,","))try{o=B.bw(B.n(8),B.fO(A.cF.aK(A.d.gak(h.split(","))),A.A,p,p,A.ce,A.bU,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.n(14)
t=B.n(14)
s=B.n(14)
r=B.I(n?A.bD:A.bc.j(0.6),A.q,1)
q=o
n=q==null?B.X(d,A.ek,p,p,p,20):q
n=B.a([n,A.ab,B.E(B.d(e,p,1,A.a2,p,p,p,A.Ju,p,p,p),1)],x.p)
if(f!=null)n.push(B.aB(p,D.a1j,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a7))
return B.aF(!1,A.a1,!0,u,B.aK(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.kW,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ag)},
a8x(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a8x=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fCX(),$async$a8x)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.eWC(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ab(n)
if(r.c!=null)r.m(new C.eWD(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8x,v)},
aec(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aec=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.eWF(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.eWG(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.eWH(r))
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
return B.b(C.fye(q,r.cx,j,new C.b0C(r.z,r.Q,r.as,r.at),new C.eWI(r),i,m,p,k),$async$aec)
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
if(r.c!=null)r.m(new C.eWJ(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aec,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aH(d,A.eI,g).w
g=B.aH(d,A.bW,g).w
w=B.au(B.p(h,h,A.f,h,h,new B.o(A.b1,h,h,B.n(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.au(B.aB(h,B.p(h,D.bNU,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.q,2),h,B.a([new B.ac(2,A.G,A.bc.j(0.5),A.J,24)],v),D.bXG,A.a5),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eX9(i),h,h,h,h,h,h,!1,A.a7),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aI(h,h,h,h,D.a1j,h,h,h,i.ax?h:new C.eXa(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbBk()
v=B.a([new B.ac(0,A.G,A.b5.j(0.45),A.J,10)],v)
s.push(B.ho(B.aF(!1,A.a1,!0,h,B.aK(!1,h,!0,B.p(h,B.X(i.e==null?A.vO:A.hA,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.w4,A.a5),h,40,h,h,h,h,h,40),A.cK,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cK,h,h,A.ag),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.U,!1,h,!0,A.r,h,B.aN(),i.d,h,h,h,h,h,2,B.bs(h,h,h,h,h,h,h,h,!0,new B.b4(4,B.n(16),new B.az(A.c.j(0.1),1,A.q,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b4(4,B.n(16),D.aZt),h,h,h,h,h,h,h,h,A0.Jb,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.il,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.aj,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.aa,h,h,h,h,h,h,h,h,h,h,h,D.aQz,!0,A.a4,h,A.an,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eXb(i)
s=i.aWF(A.lt,q,r,i.gchZ(),s)
r=i.z
r=B.E(i.aco(new C.eXd(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.w(B.a([s,A.am,B.B(B.a([r,A.bp,B.E(i.aco(new C.eXe(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gH(s)
p=i.y.length===0?h:new C.eXf(i)
s=i.aWF(A.tR,r,p,i.gci6(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gH(o)
p=B.E(i.aco(new C.eXg(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gH(n)
o=B.a([w,A.aB,D.fu_,A.av,D.fwQ,A.bw,u,A.N,D.fvg,A.aB,v,A.bw,B.B(B.a([q,A.at,B.E(B.w(B.a([s,A.am,B.B(B.a([p,A.bp,B.E(i.aco(new C.eXh(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.am,D.fyA],t)
w=i.w.a
if(w.length!==0){v=B.n(999)
u=B.I(D.bhs,A.q,1)
w=C.agF(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.R,new B.bI(A.a3,h,h,B.p(h,B.B(B.a([D.bOZ,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fdg,h,h,h),B.aK(!1,h,!0,D.ecn,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eXi(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.Q,0,h,h),A.f,h,h,new B.o(D.baq,h,u,v,h,h,A.n),h,h,h,h,D.bsV,h,h,h),h)],t))}o.push(A.bw)
o.push(D.fkS)
o.push(A.N)
w=B.a([],t)
for(m=0;m<6;++m){l=D.d36[m]
v=i.ch===l?A.b5:A.c.j(0.06)
u=i.ch===l
k=new B.az(u?A.aA:A.bD,1,A.q,-1)
u=u?A.u:A.O
w.push(new B.bB(1,A.bg,new B.D(A.jo,B.aB(h,B.de(A.A,new B.y(""+l,h,new B.G(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.bb,new B.o(v,h,new B.bO(k,k,k,k),h,h,h,A.a5),A.eJ,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eXj(i,l),h,h,h,h,h,h,!1,A.a7),h),h))}o.push(B.B(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.bw)
o.push(D.fDd)
o.push(A.N)
o.push(B.cA(new C.eXk(i)))
o.push(A.bw)
o.push(D.fs7)
o.push(A.N)
w=B.a([i.b63("auto","Let AI choose",A.e0,A.Qd)],t)
for(v=x.O,m=0;m<11;++m){j=D.wa[m]
u=j.d
w.push(i.b63(j.a,j.b,j.c,B.a([B.b0(A.d.gH(u).a),B.b0(A.d.gH(u).b)],v)))}o.push(B.bZ(A.bC,w,A.br,8,8))
o.push(A.aP)
w=A.c.j(0.04)
v=B.n(16)
u=B.I(i.r?A.bc.j(0.5):A.bD,A.q,1)
o.push(B.p(h,B.iH(h,A.bc,h,h,h,new C.eXc(i),D.bK6,D.fCt,h,D.fn8,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aPN,h,h,h)],t))
o.push(A.bw)
w=i.ax?h:i.gc81()
v=B.fo(h,h,A.b5,A.b5.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.n(18),A.W),h,h,h,h,h)
u=i.ax
t=u?D.eW4:A.GF
o.push(new B.a7(h,54,B.lx(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.oo,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.p(h,B.bl(!0,B.cc(B.w(o,A.ai,h,A.e,A.j,0,A.p),A.r,h,A.y,h,A.vC,h,h,A.ah),!0,!1,A.ae,!0,!1),A.f,h,new B.aX(0,680,0,g.a.b*0.92),D.abp,h,h,h,h,h,h,h,h),h)},
bNU(d){var w,v,u,t,s,r,q=null,p=this.cx.q(0,d),o=new C.eWK(this,p,d)
if(d===D.CU)return new C.aDx(p,o,q)
w=B.n(16)
v=p?E.w4:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.aA:A.bD,A.q,1)
s=B.X(p?A.e9:C.hFl(d),A.c,q,q,q,20)
r=C.hFm(d)
return B.aB(q,B.de(q,B.w(B.a([s,A.av,B.eM(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.dZ)],x.p),A.m,q,A.b7,A.j,0,A.p),q,q,A.bb,new B.o(u,q,t,w,q,v,A.n),A.hw,q,64,q,A.hy,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a7)},
b63(d,e,f,g){var w,v=null,u=this.CW===d,t=B.n(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bD
r=B.I(r,A.q,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a8(A.a3,A.a8,A.x,g,v,v),A.a5),v,26,v,v,v,v,v,26)
return B.aB(v,B.de(v,B.B(B.a([w,M.J2,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a6,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v,v,A.bb,new B.o(s,v,r,t,v,v,A.n),A.eJ,v,v,v,M.aj3,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eWZ(this,d),v,v,v,v,v,v,!1,A.a7)}}
C.a07.prototype={
U(){return new C.aGW(new B.ar(A.as,$.aw()))}}
C.aGW.prototype={
t(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
aed(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$aed=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.eWv(r))
w=1
break}B.eZ()
r.m(new C.eWw(r))
t=4
q=C.i5K(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.i5u(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.eWx(r,q))
w=1
break}k=r.c
if(k!=null)B.a4(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fYd()
f=$.CF.h(0,k.a)
o=f==null||J.cm(f)?null:J.fq(f)
if(o==null){r.m(new C.eWy(r))
w=1
break}n=C.i5s(o,r.a.c)
C.i5o(r.a.c.a)
$.fXu=!0
k=r.c
if(k!=null)B.a4(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.h02(j)
h=C.h03(r.a.c)
e=C.h04(r.a.c)
w=7
return B.b(C.bBa(k,r.a.c.a,j,h,new C.eWz(r),i,e,a0),$async$aed)
case 7:m=a3
k=r.c
if(k!=null)B.a4(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ab(a1)
if(r.c!=null)r.m(new C.eWA(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aed,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aH(d,A.eI,i).w
i=B.aH(d,A.bW,i).w
w=B.au(B.p(j,j,A.f,j,j,new B.o(A.b1,j,j,B.n(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.an_,A.f,j,j,D.b0G,j,34,j,j,j,j,j,34),A.at,D.bAi],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Aq.a84,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.U,!0,j,!0,A.r,j,B.aN(),k.d,j,j,j,j,j,2,B.bs(j,j,j,j,j,j,j,j,!0,new B.b4(4,B.n(16),new B.az(A.c.j(0.1),1,A.q,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b4(4,B.n(16),Ar.aaT),j,j,j,j,j,j,j,j,A0.Jb,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.aj,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.aa,j,j,j,j,j,j,j,j,j,j,j,D.aQz,!0,A.a4,j,A.an,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.d_m[q]
o=A.c.j(0.06)
n=k.e?j:new C.eWB(k,p)
r.push(B.mJ(j,o,new B.y(p,j,Aw.TD,j,j,j,j,j,j,j,j,j),j,n,j,j,P.v3,j))}w=B.a([w,A.aB,u,A.am,t,A.aB,s,A.R,B.bZ(A.bC,r,A.br,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aPN,j,j,j)],v))
w.push(A.aP)
u=k.e
t=u?j:k.gc82()
s=B.n(18)
r=B.n(18)
u=u?B.a([A.bc.j(0.5),A.er.j(0.5)],x.O):D.cyd
o=B.a([new B.ac(0,A.G,A.bc.j(0.35),A.cz,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.ecj:D.bOy
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a5),j,30,j,j,j,j,j,30)
w.push(B.aF(!1,A.a1,!0,j,B.aK(!1,s,!0,B.eB(B.B(B.a([n,A.at,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hX,j,j,j)],v),A.m,j,A.b7,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a8(A.a3,A.a8,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ag))
return new B.D(new B.Q(0,0,0,h.f.d),B.p(j,B.bl(!0,B.cc(B.w(w,A.ai,j,A.e,A.j,0,A.p),A.r,j,A.y,j,A.vC,j,j,A.ah),!0,!1,A.ae,!0,!1),A.f,j,new B.aX(0,680,0,i.a.b*0.85),D.abp,j,j,j,j,j,j,j,j),j)}}
C.b0C.prototype={}
C.aDx.prototype={
U(){return new C.bjm(null,null)}}
C.bjm.prototype={
gax8(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.pU,null,1,null,v)
w.cL(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
t(){this.gax8().t()
this.bvf()},
B(d){var w=null,v=this.a.d
return B.aB(w,B.c7(this.gax8(),new C.edT(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a7)}}
C.bh0.prototype={
a6(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.d5l[s]
p=q.a*v
q=q.b*u
$.W()
o=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
o.r=D.xz.j(0.25+r*0.6).gp(0)
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
C.arr.prototype={
a3(){return"NgmyTextCommand."+this.b}}
C.Zv.prototype={
U(){return new C.aB2()}}
C.aB2.prototype={
gaih(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.agS(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAc(){var w=this.e
return w===$?this.e=C.h02(this.a.c).q(0,D.CU):w},
a8k(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a8k=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dj2(s))
u=3
r=A.d.fZ(D.wa,new C.dj3(s))
q=B.df(C.h02(s.a.c),x.Q)
l=q
J.hy(l,D.CU)
p=l
if(s.gAc())J.cd(p,D.CU)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAc()?" with Luxury FX":""
i=s.a
h=i.d
i=C.h03(i.c)
g=C.h04(s.a.c)
w=6
return B.b(C.bBa(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a8k)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.agS(q,s.gaih())
f=q==null?null:q.b
n=f==null?s.gaih():f
if(!J.A(n,r.a)&&!s.gAc())throw B.V("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a4(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ab(d)
if(s.c!=null)s.m(new C.dj4(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a8k,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.c:A.M,k=m?A.aQ:A.ak,j=m?A.M:A.c,i=B.n(28),h=B.I(m?A.bD:A.aL,A.q,1),g=x.p,f=B.E(B.w(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bz,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dj7(d)
e=B.B(B.a([f,B.aI(n,n,n,n,B.X(A.cy,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.wa[w]
u=o.gaih()
t=o.f?n:new C.dj8(o,v)
f.push(new C.brM(v,u===v.a,t,n))}f=B.lA(1.25,f,3,10,10,n,A.dT,!0)
u=B.n(18)
t=o.gAc()?D.c_r:n
if(o.gAc())s=n
else s=m?A.bl:A.bM
r=B.X(A.e0,o.gAc()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gAc()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.w(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gAc()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gAc()
f=B.a([f,A.aB,B.p(n,B.B(B.a([r,A.at,q,B.aag(n,A.c,n,A.bL,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dj9(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,K.ahP,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.R,B.d(u,n,n,n,n,n,n,D.fdA,n,n,n)],g))
f=B.cc(B.w(f,A.F,n,A.e,A.j,0,A.p),A.r,n,A.y,n,A.FA,n,n,A.ah)
u=o.f?n:o.gbAj()
t=B.bm(A.K,n,n,n,n,n,A.ae,n,new B.b7(B.n(16),A.W),n,n,n)
s=B.n(16)
return B.bl(!0,B.p(n,B.w(B.a([new B.D(D.bvV,e,n),new B.dq(1,A.cm,f,n),new B.D(A.Fz,new B.a7(1/0,50,B.bG(B.eB(B.au(o.f?A.rL:D.fut,n,n,n),n,new B.o(n,n,n,s,n,D.bZ1,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.Q,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.tI,n,n,n,n),!0,!1,A.ae,!0,!0)}}
C.brM.prototype={
B(d){var w=null,v=this.c,u=A.d.gH(v.d),t=B.n(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.q,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bI(A.le,w,w,B.X(v.c,A.ad,w,w,w,18),w),new B.bI(A.lH,w,w,B.d(v.b,w,w,w,w,w,w,D.fdy,w,w,w),w)],x.p)
if(q)v.push(D.aWX)
return B.aB(w,B.de(w,new B.an(A.V,w,A.a9,A.r,v,w),w,w,A.bb,new B.o(w,w,p,t,s,new B.a8(A.ay,A.aC,A.x,r,w,w),A.n),A.eJ,w,w,w,A.cp,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a7)}}
C.edQ.prototype={
aEI(d,e,f){return e+"@"+A.a.aX(A.o.fV(f==null?this.a.c:f,16),8,"0").toUpperCase()},
wy(d,e){return this.aEI(0,e,null)}}
C.aLp.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.b0y.prototype={
B(d){var w,v,u=null,t=C.fZS(this.c)
if(t==null)w=D.bnP
else{w=B.aH(d,u,x.w).w.cIj(D.bsr,D.eVf)
v=this.d
w=B.rk(B.e1(B.anJ(!1,t,!1,v,!1,390),!v,u),w)}return B.eM(A.A,new B.a7(416,870,new C.bkW(w,u),u),A.f,A.dv)}}
C.bkW.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dhj[w]
u=new B.aR(3,3)
s.push(new B.cL(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bo(u,u,u,u),t,D.aoS,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.diw[w]
u=new B.aR(3,3)
s.push(new B.cL(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bo(u,u,u,u),t,D.aoS,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bT(0,B.c0(t,new B.o(t,t,t,B.n(64),D.cQ9,D.bXo,A.n),A.be),0,0,0))
s.push(B.bT(3,B.c0(t,new B.o(A.w,t,t,B.n(61),t,t,A.n),A.be),3,3,3))
s.push(B.bT(13,B.bw(B.n(51),B.el(this.c,A.w,!0),A.aq),13,13,13))
u=B.n(20)
s.push(B.ao(t,B.au(B.p(D.aX7,B.p(t,t,A.f,t,t,D.b0Z,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bT(13,B.e1(B.bw(B.n(51),D.bpo,A.aq),!0,t),13,13,13))
s.push(B.ao(22,B.e1(B.au(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.n(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.V,t,A.a9,A.f,s,t)}}
C.le.prototype={
pA(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cB(),f=C.cB(),e=m.r
f=C.eq(A.L,!1,e.l(),A.aD,"",k,42,A.bo,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bf,j,2,"Your Presentation Title",0,0,"",D.mG,D.cP,0.84,0.08,0.26)
w=C.cB()
v=m.w
w=C.eq(A.L,!1,v.l(),A.aD,"",k,20,A.bo,A.a6,"",0.12,w,l,"","",0,!1,"",0,D.bf,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.df,D.cP,0.76,0.12,0.56)
u=C.cB()
t=m.d
s=x.u
t=C.ry(i,l,0,0,B.a([f,w,C.eq(A.bh,!1,4279310375,A.aD,"",t.j(0.8).l(),24,A.bo,A.a6,"",0.006,u,l,"","",0,!1,"",0,D.fr,t.l(),3,"",0,0,"",D.cl,D.f5,0.3,0.35,0.72)],s),C.cB(),D.mF,"","","Welcome",D.df)
u=C.cB()
u=C.eq(A.bh,!1,e.l(),A.aD,"",k,34,A.bo,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bf,j,2,"Agenda",0,0,"",D.cl,D.cP,0.84,0.08,0.08)
w=C.cB()
w=C.ry(i,l,0,0,B.a([u,C.eq(A.bh,!0,v.l(),A.aD,"",k,22,A.bo,A.a6,"",0.6,w,l,"","",0,!1,"",0,D.bf,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.us,D.cP,0.8,0.1,0.26)],s),C.cB(),D.mF,"","","Agenda",D.df)
u=C.cB()
u=C.eq(A.bh,!1,e.l(),A.aD,"",k,32,A.bo,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bf,j,2,"Main Idea",0,0,"",D.cl,D.cP,0.84,0.08,0.08)
f=C.cB()
f=C.ry(i,l,0,0,B.a([u,C.eq(A.bh,!0,v.l(),A.aD,"",k,21,A.bo,A.a6,"",0.62,f,l,"","",0,!1,"",0,D.bf,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cl,D.cP,0.8,0.1,0.26)],s),C.cB(),D.mF,"","","Key Point 1",D.df)
u=C.cB()
u=C.eq(A.bh,!1,e.l(),A.aD,"",k,30,A.bo,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bf,j,2,"Compare & Contrast",0,0,"",D.cl,D.cP,0.84,0.08,0.08)
r=C.cB()
r=C.eq(A.bh,!0,v.l(),A.aD,"",k,18,A.bo,A.a6,"",0.62,r,l,"","",0,!1,"",0,D.bf,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cl,D.cP,0.4,0.08,0.24)
q=C.cB()
q=C.ry(i,l,0,0,B.a([u,r,C.eq(A.bh,!0,v.l(),A.aD,"",k,18,A.bo,A.a6,"",0.62,q,l,"","",0,!1,"",0,D.bf,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cl,D.cP,0.4,0.52,0.24)],s),C.cB(),D.mF,"","","Key Point 2",D.df)
r=C.cB()
r=C.eq(A.L,!1,e.l(),A.aD,"",k,48,A.bo,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bf,j,2,h,0,0,"",D.df,D.cP,0.8,0.1,0.32)
e=C.cB()
p=C.BI(l,l,l,l,D.CQ,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.ry(i,l,0,0,B.a([r,C.eq(A.L,!1,v.l(),A.aD,"",k,22,A.bo,A.a6,"",0.1,e,l,"","",0,!1,"",0,D.bf,j,2,"Questions?",0,0,"",D.cl,D.cP,0.7,0.15,0.58)],s),C.cB(),D.mF,"","",h,D.df)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.L)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.ED.prototype={
bA(d){return this.e.$1(d)}}
C.et.prototype={}
C.j0.prototype={}
C.Eu.prototype={
gaKw(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.agF(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a3u(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Eu(v,u,t,d==null?w.d:d)},
FC(d){return this.a3u(null,d,null,null)},
aDs(d){return this.a3u(null,null,null,d)},
cIh(d,e){return this.a3u(d,e,null,null)},
bbe(d){return this.a3u(d,null,null,null)},
bbl(d){return this.a3u(null,null,d,null)}}
C.Nq.prototype={
U(){return new C.biL(new B.eI(0,$.aw()),null,null)}}
C.biL.prototype={
a_(){var w,v=this
v.a1()
w=v.wm(new C.dTe(v))
v.e!==$&&B.aP()
v.e=w
if(v.a.e)w.ia(0)
else v.d.sp(0,3.2)},
t(){var w=this.e
w===$&&B.c()
w.t()
w=this.d
w.S$=$.aw()
w.P$=0
this.buL()},
B(d){var w=C.agF(this.a.c.a)
if(w==null)w=A.d.gH(D.H_)
return B.cA(new C.dTd(this,w,C.hf4(this.a.c.d)))}}
C.bqk.prototype={
B(d){return B.nS(A.Vo,this.e,new C.eVJ(this,A.k.F(this.d*0.35,1.6)-0.3))}}
C.bdX.prototype={
a6(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aSl(d,e,v)
break
case"confetti":w.bGS(d,e,v)
break
case"crown":w.bIu(d,e,v)
break
case"aurora":w.bBo(d,e,v)
break
case"champagne":w.bEK(d,e,v)
break
case"diamonds":w.bKE(d,e,v)
break
case"starburst":w.cvi(d,e,v)
break
case"balloons":w.bBC(d,e,v)
break
case"galaxy":w.bPH(d,e,v)
break
case"redcarpet":w.cmg(d,e,v)
break
case"coins":w.bGg(d,e,v)
break
case"lanterns":w.bZS(d,e,v)
break
case"hearts":w.bXv(d,e,v)
break
case"petals":w.cho(d,e,v)
break
case"butterflies":w.bDI(d,e,v)
break
case"neon":w.c2P(d,e,v)
break
case"disco":w.bKP(d,e,v)
break
case"sunrise":w.cwW(d,e,v)
break
case"pearls":w.cgs(d,e,v)
break
case"snow":w.cv_(d,e,v)
break
case"laurel":w.bZY(d,e,v)
break
case"ribbons":w.coN(d,e,v)
break
case"kente":w.bZG(d,e,v)
break
case"trophy":w.cAC(d,e,v)
break
case"shooting":w.csO(d,e,v)
break
case"bokeh":w.bBX(d,e,v)
break
case"orbits":w.ce5(d,e,v)
break
case"flowers":w.bOX(d,e,v)
break
case"music":w.c2x(d,e,v)
break
case"mandala":w.c0Y(d,e,v)
break
case"sparklers":w.cv6(d,e,v)
break
case"city":w.bFx(d,e,v)
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
u.E(new B.b5(w,s))
u.E(new B.cR(w,t,w+f,t))
u.E(new B.cR(w,t,w,t+f))
u.E(new B.cR(w,t,w-f,t))
u.E(new B.cR(w,t,w,s))
u.E(new B.bE())
d.aS(u,v)
d.af(e,f*0.18,v)},
lK(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cY(q,v)*2.5)+C.cY(q,u)*6.28)+1)/2
this.rE(d,new B.x(C.cY(q,t)*o,C.cY(q,s)*n),m*(0.006+0.014*C.cY(q,r))*(0.5+p),h,p*p)}},
aSl(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lK(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bL,A.aE],w),B.a([A.i0,A.bA],w),B.a([A.ez,A.aR],w),B.a([A.c,A.ax],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bm(k/2.8)
i=A.k.F(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cY(h,1))
f=g+c0*(C.cY(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cY(h,3))
d=v[Math.abs(A.o.F(h,4))]
if(i<0.22){a0=B.kr(new B.x(g,c1),new B.x(f,e),A.ct.au(0,i/0.22))
a0.toString
$.W()
a1=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a1.sar(new B.a8(A.a3,A.a8,A.x,B.a([d[0].j(0),d[0]],w),null,null).aA(0,B.rB(new B.x(g,c1),a0)))
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
a8.z=new B.hC(A.G,o)
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
bGS(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.F(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.W(),a0=B.N()
a0.sar(new B.a8(A.ay,A.aC,A.x,D.dbT,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).aA(0,new B.a9(0,0,f,e)))
a1.b1(new B.a9(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.F(a3*(h*(0.08+0.12*C.cY(u,1)))+C.cY(u,2)*w,w)
s=C.cY(u,3)
r=Math.sin(a3*(0.8+C.cY(u,4))+u)
q=h*(0.012+0.012*C.cY(u,5))
p=Math.cos(a3*(2+3*C.cY(u,6))+u)
o=D.PG[A.o.D(A.k.bm(C.cY(u,7)*5),0,4)]
J.bx(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cY(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
t=Math.abs(p)
n.r=B.aq(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.F(u,5)===0){t=B.a([],v)
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
f.drawRect(B.bX(t),k)
k.delete()}f.restore()}this.lK(a1,a2,a3,25,A.bL,30)},
bIu(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
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
o.sar(new B.c_(A.A,0.5,A.x,a4,0,B.a([A.bL.j(0.22),D.bci],v),a4,a4).aA(0,B.bU(w,u)))
l=o.K()
o=m.gbK().a.snapshot()
t.drawPath((m.e=new B.cF(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.aO($.W().r,A.ao,a4,a4,B.a([],r))
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
i.E(new B.bE())
h=A.k.D(b0/1.8,0,1)
s=h>=1
if(s){n=B.N()
n.sar(new B.a8(A.b2,A.b6,A.x,D.daA,a4,a4).aA(0,new B.a9(a5,a6,o,v)))
a8.aS(i,n)
for(v=[D.erN,D.elb,D.eAX],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
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
d=new B.aO(n,v.b,a4,new B.ct([new B.Ho(o,f),0,d*h,!0]),B.a([],r))
f=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
f.b=A.af
f.c=g
f.e=A.hn
f.r=A.bL.gp(0)
l=f.K()
f=d.gbK().a.snapshot()
t.drawPath((d.e=new B.cF(f)).a,l)
l.delete()}if(s){a3=A.k.F(b0*0.5,1)
this.rE(a8,new B.x(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lK(a8,a9,b0,45,A.bL,40)},
bBo(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lK(a8,a9,b0,60,A.c,50)
w=[D.eM8,D.eLR,D.eLL,D.eN6]
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
n.z=new B.hC(A.G,s)
a2=n.K()
n=h.e
u.drawPath((n==null?h.e=new B.cF(h.gbK().a.snapshot()):n).a,a2)
a2.delete()
n=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
n.b=A.af
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.ox
n.z=new B.hC(A.G,v)
a2=n.K()
n=h.e
u.drawPath((n==null?h.e=new B.cF(h.gbK().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.F(t*(0.05+0.06*C.cY(a4,1))+C.cY(a4,2)*a3,a3)
r=C.cY(a4,3)
q=Math.sin(b0+a4)
p=C.cY(a4,4)
$.W()
n=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
n.r=A.vn.j(0.4+0.5*C.cY(a4,5)).gp(0)
n.a=A.ox
a2=n.K()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bEK(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.W(),a0=B.N()
a0.sar(new B.c_(A.A,0.5,A.x,l,0,B.a([A.hH.j(0.25+0.1*h),D.Xa],x.O),l,l).aA(0,B.bU(new B.x(g,f),e)))
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
a0.r=D.PG[A.o.F(w,4)].j(0.7).gp(0)
p=a0.K()
a0=u.e
g.drawPath((a0==null?u.e=new B.cF(u.gbK().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.F(a3*(i*(0.07+0.12*C.cY(w,1)))+C.cY(w,2)*o,o)
r=k*(0.1+0.8*C.cY(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cY(w,4))
if(n<f){this.rE(a1,new B.x(r,n),m*2.4,A.bL,A.k.D(n/f,0,1))
continue}$.W()
d=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
d.b=A.af
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.xo.j(0.75).gp(0)
p=d.K()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
t.r=A.c.j(0.8).gp(0)
p=t.K()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bKE(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lK(a9,b0,b1,30,A.kS,60)
for(w=Math.max(4,A.k.V(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cY(p,1))
n=a7+o*4
m=A.k.F(t*(0.04+0.06*C.cY(p,2))+C.cY(p,3)*n,n)-o*2
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
g.sar(new B.a8(A.ay,A.aC,A.x,D.d6m,a5,a5).aA(0,B.ci(A.J,k*1.2,o)))
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
cvi(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
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
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.F(a0+l*0.6,1.8)/1.8
$.W()
u=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
u.b=A.af
r=1-k
u.c=v*r
u.r=A.bL.j(r*0.6).gp(0)
m=u.K()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bm(a0/2.4)
k=A.k.F(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cY(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.boM.au(0,k)*(0.5+0.5*C.cY(t,v)))
this.rE(d,new B.x(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cY(t,3)),D.PG[A.o.D(A.k.bm(C.cY(t,4)*5),0,4)],u)}},
bBC(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cY(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.F(q*(0.05+0.05*C.cY(o,2))+C.cY(o,3)*m,m)
j=C.cY(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.aw_[A.o.F(o,6)]
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
l.sar(new B.c_(D.aXa,0.9,A.x,a3,0,B.a([A.c,i,d],t),W.avR,a3).aA(0,a2))
a1=l.K()
u.drawOval(B.bX(a2),a1)
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
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.F(q*(0.1+0.1*C.cY(o,11))+C.cY(o,12)*m,m)
r=C.cY(o,13)
J.bx(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.ci(A.J,t,v)
$.W()
r=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
r.r=D.aw_[A.o.F(o,6)].j(0.85).gp(0)
a1=r.K()
u.drawRect(B.bX(s),a1)
a1.delete()
u.restore()}},
bPH(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.x(a8,a9)
this.lK(b1,b2,b3,50,A.c,70)
for(w=[D.eMg,D.eLX,D.eM2],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.W()
k=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
k.sar(new B.c_(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).aA(0,B.bU(new B.x(r,m),l)))
j=k.K()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.V(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.F(i,3)
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
a9.sar(new B.c_(A.A,0.5,A.x,a4,0,B.a([A.xo.j(0.55),D.afv],u),a4,a4).aA(0,B.bU(b0,a8)))
b1.af(b0,a8,a9)
a1=A.k.F(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bm(b3/3.5)
a3=new B.x(a5*(0.1+0.5*C.cY(a2,9)),a6*0.1*C.cY(a2,8))
a5=B.kr(a3,a3.ad(0,new B.x(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.kr(a3,a5,0.6)
a6.toString
a8=B.N()
a8.sar(new B.a8(A.a3,A.a8,A.x,B.a([A.c.j(0),A.c],u),a4,a4).aA(0,B.rB(a3,a5)))
a8.c=a7*0.005
a8.d=A.bV
b1.bL(a6,a5,a8)}},
cmg(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
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
o.sar(new B.c_(A.A,0.5,A.x,b5,0,B.a([A.xo.j(0.28),D.afv],w),b5,b5).aA(0,B.bU(new B.x(q,u),t)))
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
b2.E(new B.b5(b6*0.42,w))
b2.E(new B.ap(b6*0.58,w))
b2.E(new B.ap(b6*0.8,b7))
b2.E(new B.ap(b6*0.2,b7))
b2.E(new B.bE())
v=B.N()
v.sar(D.bYV.aA(0,new B.a9(0,w,0+b6,w+b7*0.22)))
b9.aS(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.F(b7*(0.05+0.07*C.cY(r,1))+C.cY(r,2)*b3,b3)
u=C.cY(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rE(b9,new B.x(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cY(r,4)),A.bL,0.3+0.7*((q+1)/2))}},
bGg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cY(t,1))
r=h+s*4
q=s*2
p=A.k.F(u*(0.12+0.12*C.cY(t,2))+C.cY(t,3)*r,r)-q
o=C.cY(t,4)*i
n=Math.cos(f*(2+3*C.cY(t,5))+t)
m=Math.abs(n)
l=B.ci(new B.x(o,p),q,q*A.k.D(m,0.12,1))
$.W()
q=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
q.sar(new B.a8(A.ay,A.aC,A.x,n>0?D.dlW:D.cE_,null,null).aA(0,l))
k=q.K()
v.drawOval(B.bX(l),k)
k.delete()
q=-(s*0.22)
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.b=A.af
j.c=Math.max(0.6,s*0.08)
j.r=D.blA.gp(0)
k=j.K()
v.drawOval(B.bX(new B.a9(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rE(d,new B.x(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lK(d,e,f,30,A.bL,110)},
bZS(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lK(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cY(p,1))
n=a1+o*4
m=a1+o*2-A.k.F(t*(0.03+0.04*C.cY(p,2))+C.cY(p,3)*n,n)
l=C.cY(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.W()
h=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
h.sar(new B.c_(A.A,0.5,A.x,d,0,B.a([V.Xn.j(0.45*k),D.aem],u),d,d).aA(0,B.bU(new B.x(l,m),j)))
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
i=B.aq(D.bcu,A.c,0.2*k)
i.toString
j.sar(new B.a8(A.b2,A.b6,A.x,B.a([D.bh4,i],u),d,d).aA(0,B.ci(new B.x(l,m),o*1.4,o)))
g=j.K()
j=f.gbK().a.snapshot()
v.drawPath((f.e=new B.cF(j)).a,g)
g.delete()
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.r=A.c.j(k).gp(0)
g=j.K()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bXv(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cY(p,1))
n=a1+o*4
m=A.k.F(s*(0.05+0.06*C.cY(p,2))+C.cY(p,3)*n,n)
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
l.push(new B.pF(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.pF(m,g,o*1.8,h,0,m))
l.push(new B.bE())
f=D.cYe[A.o.F(p,5)]
m=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l=B.aq(f,A.w,0.25)
l.toString
m.sar(new B.c_(A.t_,0.5,A.x,d,0,B.a([A.c,f,l],u),K.a2v,d).aA(0,B.bU(A.J,o*1.4)))
e=m.K()
m=i.gbK().a.snapshot()
v.drawPath((i.e=new B.cF(m)).a,e)
e.delete()
v.restore()}this.lK(a3,a4,a5,30,A.i0,130)},
cho(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cY(q,1))
o=g+p*4
n=A.k.F(t*(0.05+0.06*C.cY(q,2))+C.cY(q,3)*o,o)
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
m=(q&1)===0?D.cyc:D.d7E
n.sar(new B.a8(A.a3,A.a8,A.x,m,i,i).aA(0,B.bU(A.J,p)))
j=n.K()
n=k.gbK().a.snapshot()
v.drawPath((k.e=new B.cF(n)).a,j)
j.delete()
v.restore()}this.lK(d,e,a0,25,A.bL,140)},
bDI(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
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
a3.push(new B.pF(f,e,l,d,h,0))
a3.push(new B.pF(q,h,g,q,0,h))
a3.push(new B.bE())
a2=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a2.sar(new B.a8(A.a3,A.a8,A.x,i?D.d7n:D.da3,a6,a6).aA(0,new B.a9(0,m,k,j)))
a5=a2.K()
a2=a4.gbK().a.snapshot()
v.drawPath((a4.e=new B.cF(a2)).a,a5)
a5.delete()
a2=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a2.b=A.af
a2.c=Math.max(0.6,o)
a2.r=D.AP.gp(0)
a5=a2.K()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cF(a4.gbK().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.W()
p=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
p.r=D.bkT.gp(0)
p.c=q*0.1
p.d=A.bV
a5=p.K()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c2P(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.x(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.F(w+t/4,1)
r=f*(0.2+0.7*s)
$.W()
q=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
q.b=A.af
q.c=v
q.r=D.ax2[t].j((1-s)*0.9).gp(0)
q.z=new B.hC(A.G,v)
p=r*0.3
p=B.by(B.ci(e,r,r*1.6),new B.aR(p,p))
o=q.K()
u.drawRRect(B.eT(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cY(m,1)*4)+m)))
k=D.ax2[A.o.F(m,4)]
j=m*n+h
i=g-l
i=B.by(new B.a9(j,i,j+w,i+l),new B.aR(v,v))
$.W()
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.r=k.j(0.85).gp(0)
j.z=new B.hC(A.aaH,p)
o=j.K()
u.drawRRect(B.eT(i),o)
o.delete()}},
bKP(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.x(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cY(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cY(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bL,A.nF,A.dr][A.o.F(p,4)]
j=C.cY(p,3)
$.W()
i=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
i.r=k.j(0.75).gp(0)
i.a=A.ox
i.z=new B.hC(A.G,r)
h=i.K()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.W()
t=B.N()
t.r=A.aA.gp(0)
t.c=1.2
a3.bL(new B.x(a0,0),new B.x(a0,w-u),t)
t=B.N()
t.r=A.ds.gp(0)
a3.af(v,u,t)
J.bx(q.save())
a1=new B.aO(a1.r,A.ao,null,null,B.a([],x.v))
a1.E(new B.jO(B.bU(v,u)))
a3.pD(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.F(a1,g)
i=Math.sin(e*1.7+l+s)
$.W()
d=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
d.r=B.aq(A.bm,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.K()
q.drawRect(B.bX(new B.a9(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.rE(a3,v.ad(0,new B.x(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cwW(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.ct.au(0,A.k.D(a4/3,0,1))),a1=new B.x(d,a0)
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
a0.sar(new B.c_(A.A,0.5,A.x,h,0,B.a([D.b8t.j(0.6),D.aem],x.O),h,h).aA(0,B.bU(a1,d)))
a2.af(a1,d,a0)
a0=e*0.2
d=B.N()
d.sar(D.eiF.aA(0,B.bU(a1,a0)))
a2.af(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.F(d*(1+t*0.3)+C.cY(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.r=A.c.j(0.18).gp(0)
i=B.ci(new B.x(l,k),r,u)
o=j.K()
w.drawOval(B.bX(i),o)
o.delete()
i=B.ci(new B.x(l+q,k-n),r,m)
o=j.K()
w.drawOval(B.bX(i),o)
o.delete()}this.lK(a2,a3,a4,20,A.hI,180)},
cgs(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
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
g=d-A.k.F(u*(0.04+0.05*C.cY(i,2))+C.cY(i,3)*j,j)
n=C.cY(i,4)*e+Math.sin(a3+i)*a0*0.02
$.W()
t=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
t.sar(new B.c_(Am.wX,0.5,A.x,f,0,D.ddx,f,f).aA(0,B.bU(new B.x(n,g),h)))
k=t.K()
w.drawCircle(n,g,h,k)
k.delete()}this.lK(a1,a2,a3,25,A.c,190)},
cv_(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cY(r,1))
p=f+q*4
o=A.k.F(u*(0.03+0.05*C.cY(r,2))+C.cY(r,3)*p,p)
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
bZY(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
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
f.sar(D.bYI.aA(0,new B.a9(0,o,n,m)))
e=f.K()
s.drawOval(B.bX(g),e)
e.delete()
s.restore()}}$.W()
a0=B.N()
a0.b=A.af
a0.c=a2*0.003
a0.r=D.bcM.gp(0)
a3.af(w,v*1.08,a0)
d=a5*0.8
this.rE(a3,w.ad(0,new B.x(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lK(a3,a4,a5,40,A.bL,210)},
coN(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hH,A.hI],a6),B.a([A.oH,A.i0],a6),B.a([A.aF,A.eC],a6)]
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
if(a1!=null)f.bA(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.ap(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bA(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.x(e,d+a0))}for(l=new B.dx(i,s),l=new B.bS(l,l.gL(0),r);l.C();){h=l.d
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
l.sar(new B.a8(A.a3,A.a8,A.x,B.a([h,k[1],h],a6),D.d_d,new B.mp(w)).aA(0,new B.a9(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.K()
l=j.e
t.drawPath((l==null?j.e=new B.cF(j.gbK().a.snapshot()):l).a,a2)
a2.delete()}this.lK(a8,a9,b0,40,A.c,220)},
bZG(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.F(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.F(A.k.bm(g/t),5)
a1=g+t
$.W()
a2=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a3=Math.abs(a0)
a2.r=D.a2y[a3].gp(0)
a4=a2.K()
s.drawRect(B.bX(new B.a9(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a5.r=D.a2y[A.o.F(a3+2,5)].gp(0)
a4=a5.K()
s.drawRect(B.bX(new B.a9(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.F(n*(0.04+0.05*C.cY(a0,1))+C.cY(a0,2)*a6,a6)
v=C.cY(a0,3)
t=C.cY(a0,4)
this.rE(b1,new B.x(v*a7,l-a8),a9*(0.01+0.012*t),D.a2y[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cAC(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
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
l.E(new B.b5(v,a2))
w=a1+w
l.E(new B.ap(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.E(new B.cR(w,r,p,k))
w=a2+m*0.95
l.E(new B.ap(p,w))
p=n*0.3
j=a2+m
l.E(new B.ap(a1+p,j))
l.E(new B.ap(a1-p,j))
q=a1-q
l.E(new B.ap(q,w))
l.E(new B.ap(q,k))
l.E(new B.cR(v,r,v,a2))
l.E(new B.bE())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.ci(new B.x(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
d.b=A.af
d.c=q
d.r=A.ax.gp(0)
o=d.K()
u.drawArc.apply(u,[B.bX(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.N()
a1.sar(new B.a8(A.a3,A.a8,A.x,D.dg2,A.aw6,null).aA(0,new B.a9(v,a2,r,j)))
a4.aS(l,a1)
a0=A.k.F(a6*0.6,1.4)
if(a0<1)this.rE(a4,new B.x(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bGT(a4,a5,a6,60)},
bGT(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.F(k*(0.1+0.1*C.cY(p,31))+C.cY(p,32)*v,v)
n=C.cY(p,33)
J.bx(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.ci(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.W()
n=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
n.r=D.PG[A.o.F(p,5)].gp(0)
m=n.K()
u.drawRect(B.bX(o),m)
m.delete()
u.restore()}},
csO(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lK(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cY(o,1)*1.6
m=A.k.F(a2+C.cY(o,2)*n,n)/n
l=e*(C.cY(o*7+A.k.bm((a2+C.cY(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.x(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.W()
g=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
g.sar(new B.a8(A.a3,A.a8,A.x,B.a([A.c.j(0),A.bL],s),null,null).aA(0,B.rB(new B.x(l,h),i)))
g.c=r
g.d=A.bV
f=g.K()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rE(a0,i,p,A.c,1-m)}},
bBX(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cY(r,1))
p=A.k.F(C.cY(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.F(C.cY(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.W()
m=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l=A.o.F(r,5)
m.r=D.ayC[l].j(n).gp(0)
m.a=A.ox
m.z=new B.hC(A.G,q*0.12)
k=m.K()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
m.b=A.af
m.c=Math.max(0.6,q*0.05)
m.r=D.ayC[l].j(n*1.4).gp(0)
k=m.K()
s.drawCircle(p,o,q,k)
k.delete()}},
ce5(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
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
w.drawOval(B.bX(p),n)
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
k.z=new B.hC(A.G,r)
n=k.K()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lK(d,e,f,45,A.bL,270)},
bOX(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.cY(o,1)
A:{if(0===n){l=new B.x(m*a2,p)
break A}if(1===n){l=new B.x(m*a2,q)
break A}if(2===n){l=new B.x(r,m*a3)
break A}l=new B.x(s,m*a3)
break A}k=A.k.F(a7+C.cY(o,2)*4,4)/4
j=A.et.au(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cY(o,3))*(j*i)
if(h<=0.5)continue
g=D.d4w[A.o.F(o,5)]
J.bx(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.ci(new B.x(0,l),i,j)
$.W()
a0=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a0.sar(new B.a8(A.b2,A.b6,A.x,B.a([A.c,g],u),null,null).aA(0,B.ci(new B.x(0,l),f,h)))
a1=a0.K()
v.drawOval(B.bX(d),a1)
a1.delete()}$.W()
l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.r=A.hH.gp(0)
a1=l.K()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lK(a5,a6,a7,30,A.hI,280)},
c2x(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.F(t+n/4,1)
l=B.bU(new B.x(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.W()
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.b=A.af
j.c=v
j.r=D.avd[n].j((1-m)*0.8).gp(0)
i=j.K()
u.drawArc.apply(u,[B.bX(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.F(v*(0.06+0.06*C.cY(g,1))+C.cY(g,2)*h,h)
e=C.cY(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cY(g,4))
a0=D.avd[A.o.F(g,4)]
$.W()
a1=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a1.r=a0.gp(0)
J.bx(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.ci(A.J,d,d*1.5)
i=a1.K()
u.drawOval(B.bX(s),i)
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
c0Y(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
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
d.r=B.aq(A.bL,A.nF,k).j(0.7).gp(0)
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
a5.sar(new B.c_(A.A,0.5,A.x,a3,0,B.a([A.hH.j(0.25),D.Xa],x.O),a3,a3).aA(0,B.bU(w,a4)))
a7.af(w,a4,a5)
this.lK(a7,a8,a9,30,A.bL,300)},
cv6(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.W()
h=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
h.r=A.bm.gp(0)
h.c=q
h.d=A.bV
g=h.K()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
l.sar(new B.c_(A.A,0.5,A.x,null,0,B.a([A.hI,A.hH.j(0.6),D.Xa],o),null,null).aA(0,B.bU(new B.x(j,i),p)))
g=l.K()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.cY(f,1)
d=A.k.F(b2+C.cY(f,2)*e,e)/e
a0=A.k.bm((b2+C.cY(f,2)*e)/e)
a1=C.cY(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cY(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a6.r=B.aq(A.hI,A.aE,d).j(1-d).gp(0)
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
bFx(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aSl(a9,new B.as(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cY(n,1))
l=a8*(0.14+0.24*C.cY(n,2))
k=a8-l
j=new B.a9(o,k,o+m,k+l)
$.W()
i=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
i.sar(D.bZD.aA(0,j))
h=i.K()
r.drawRect(B.bX(j),h)
h.delete()
g=A.k.bm(m/q)
f=A.k.bm(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cY(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.W()
a6=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
a6.r=A.bL.j(0.85).gp(0)
h=a6.K()
r.drawRect(B.bX(new B.a9(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
av(d){return d.b!==this.b||d.d!==this.d}}
C.aZs.prototype={
B(d){var w,v=null,u=new C.c8V(),t=new C.c8X(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.ao0,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c8W(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.H_[w]))
return B.bZ(A.bC,s,A.br,12,10)}}
C.Z3.prototype={
U(){return new C.azq()}}
C.azq.prototype={
gvD(){var w=this.d
return w===$?this.d=this.a.c:w},
gaZk(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.ar(new B.bb(w.b,A.b3,A.aM),$.aw())}return v},
gax9(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaKw()
v=$.aw()
u.f!==$&&B.bL()
t=u.f=new B.ar(new B.bb(w,A.b3,A.aM),v)}return t},
t(){var w=this.gaZk(0),v=$.aw()
w.S$=v
w.P$=0
w=this.gax9()
w.S$=v
w.P$=0
this.a2()},
ZY(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$ZY=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hS().C3(90,700,700,A.eG),$async$ZY)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fe(),$async$ZY)
case 8:p=e
o=q.b.toLowerCase()
n=J.ahB(o,".png")?"image/png":"image/jpeg"
r.m(new C.d8k(r,n,p))
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
return B.i($async$ZY,v)},
aZj(d){var w=null,v=A.c.j(0.07)
return B.bs(w,new B.b4(4,B.n(12),A.W),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.a8g,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.agF(p.gvD().a)
if(n==null)n=A.d.gH(D.H_)
w=p.gvD()
v=p.r
u=x.p
v=B.E(new B.an(A.V,o,A.a9,A.r,B.a([B.bT(0,new C.Nq(p.gvD(),!1,!0,new B.cw(w.a+v,x.W)),0,0,0),B.ao(o,B.HJ(A.mA,new C.d8p(d),B.nC(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.HJ(D.bJ0,new C.d8q(p),B.nC(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aQy,o,o,o)
t=B.E(B.aM(o,A.U,!1,o,!0,A.r,o,B.aN(),p.gaZk(0),o,o,o,o,o,2,p.aZj("Big words"),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d8r(p),o,o,o,!1,o,o,!1,o,!0,o,A.aa,o,o,o,o,o,o,o,o,o,o,o,A.hq,!0,A.a4,o,A.an,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hH.j(0.6),A.q,1)
if(p.gvD().d.length===0)q=D.bMm
else{q=C.hf4(p.gvD().d)
if(q==null)q=new Uint8Array(0)
q=B.hZ(B.fO(q,A.A,o,o,A.ce,A.bU,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ab,B.aB(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a5),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc83(),o,o,o,o,o,o,!1,A.a7)],u)
if(p.gvD().d.length!==0)r.push(B.aI(o,o,o,o,D.a1j,o,o,o,new C.d8s(p),o,o,o,o,"Remove logo",o))
return B.c6(o,A.w,B.bl(!0,B.w(B.a([v,B.p(o,B.w(B.a([w,A.R,B.B(r,A.m,o,A.e,A.j,0,o,o),A.N,B.aM(o,A.U,!1,o,!0,A.r,o,B.aN(),p.gax9(),o,o,o,o,o,2,p.aZj("Line under it"),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d8t(p),o,o,o,!1,o,o,!1,o,!0,o,A.aa,o,o,o,o,o,o,o,o,o,o,o,A.dg,!0,A.a4,o,A.an,o,o,o,o),A.ac,B.dn(D.bLf,D.fE7,new C.d8u(p,d),B.bm(A.ax,o,o,o,A.w,o,A.ck,o,new B.b7(B.n(14),A.W),o,o,o))],u),A.ai,o,A.e,A.Q,0,A.p),A.f,o,o,D.b1a,o,o,o,o,A.Fw,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.ae,!0,!0),o,!1,!1,o,o)}}
C.aKW.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.Zo.prototype={
U(){return new C.bfp(new B.ar(A.as,$.aw()))}}
C.bfp.prototype={
t(){var w=this.d
w.S$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.I,m=n?A.c:A.M,l=n?A.aQ:A.ak,k=B.aH(d,A.bW,x.w).w,j=n?A.M:A.c,i=B.n(28),h=B.I(n?A.bD:A.aL,A.q,1),g=x.p,f=B.B(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aI(o,o,o,o,B.X(A.cy,l,o,o,o,o),o,o,o,new C.df5(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cPA[w]
u=B.a([],g)
for(t=J.aW(v.b);t.C();){s=t.gT(t)
r=new B.aR(12,12)
q=new B.aR(12,12)
p=n?A.c.j(0.06):A.bM
u.push(B.aK(!1,new B.bo(r,r,r,r),!0,B.p(A.A,new B.y(s,o,A.pk,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bo(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.df6(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hx,new B.y(v.a.toUpperCase(),o,new B.G(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.Ch(A.bC,6,6,A.br,u,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.N)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bl:A.aO
e.push(B.B(B.a([B.E(B.aM(o,A.U,!1,o,!0,A.r,o,B.aN(),this.d,o,o,o,o,o,2,B.bs(o,new B.b4(4,B.n(14),A.W),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.aa,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a4,o,A.an,o,o,o,o),1),A.ab,B.bG(A.aRv,new C.df7(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.N)
return B.bl(!0,B.p(o,B.w(B.a([f,new B.dq(1,A.cm,B.cy(e,o,o,o,o,A.ah,!0),o)],g),A.F,o,A.e,A.Q,0,A.p),A.f,o,new B.aX(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.tI,A.Z4,o,o,o),!0,!1,A.ae,!0,!0)}}
C.beN.prototype={
a6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.f5()
a2.dU(this.c)
w=this.b
v=w/6.283185307179586
$.W()
u=B.N()
u.z=A.Rj
t=B.N()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.an()
l=a2.an()
k=a2.an()
j=0.8+a2.an()*2.2
i=Math.sin(w*(3+a2.az(4))+n)
h=A.k.F(l-v*(0.4+k*0.9),1)
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
C.bev.prototype={
a6(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.by(new B.a9(0,0,0+a7.a,0+a7.b),A.kF),a2=this.b,a3=Math.sin(a2*2),a4=$.W(),a5=B.N()
a5.b=A.af
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.mE
a6.aD(a1,a5)
a5=x.v
a4=new B.aO(a4.r,A.ao,a0,a0,B.a([],a5))
a4.E(new B.iM(a1))
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
for(a2=a4.a,r=a2.a,q=a6.a,p=t*0.14,o=0;o<2;++o){n=A.k.F(s+o*t/2,t)
for(m=0;m<10;m=l){l=m+1
k=l/10
$.W()
j=new B.av(A.Y,A.X,A.a_,A.a0,A.Z)
j.b=A.af
j.d=A.bV
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.F(n-p*(1-m/10),t)
h=A.k.F(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aO(r,k,a0,new B.ct([v,i,h,!0]),B.a([],a5))
g=j.K()
f=k.gbK().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()}else{k=new B.aO(r,k,a0,new B.ct([v,i,t,!0]),B.a([],a5))
g=j.K()
f=k.gbK().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()
k=new B.aO(r,a2.b,a0,new B.ct([v,0,h,!0]),B.a([],a5))
g=j.K()
f=k.gbK().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()}}a4.jz()
e=u[a3].MP(n).a
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
C.bnb.prototype={
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
j.sar(B.aUv(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.ly
g=j.K()
j=h.gbK().a.snapshot()
q.drawPath((h.e=new B.cF(j)).a,g)
g.delete()}},
av(d){return d.b!==this.b}}
C.b9r.prototype={
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
e.z=new B.hC(A.G,k*0.35)
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
C.b95.prototype={
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
i.z=new B.hC(A.G,u)
d=i.K()
i=g.e
t.drawPath((i==null?g.e=new B.cF(g.gbK().a.snapshot()):i).a,d)
d.delete()}},
av(d){return d.b!==this.b}}
C.bu6.prototype={
a6(d,e){var w,v,u=new B.a9(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.W()
w=B.N()
t=(0.5+0.5*t)*0.12
w.sar(new B.c_(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cX_,null).aA(0,u))
d.b1(u,w)
w=u.cs(-3)
v=B.N()
v.b=A.af
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.ly
d.b1(w,v)},
av(d){return d.b!==this.b}}
C.br7.prototype={
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bm(d)*7,p=0;p<7;++p){o=new B.f5()
o.dU(q+p)
n=o.an()*w
m=o.an()*u
l=Math.sin(A.k.F(A.k.F(d,1)+p/7,1)*3.141592653589793)
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
g.z=new B.hC(A.G,k*0.3)
h=g.K()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
av(d){return d.b!==this.b}}
C.bqg.prototype={
a6(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a9(0,0,0+e.a,0+e.b)
$.W()
v=B.N()
v.a=A.ox
v.sar(new B.a8(A.ay,A.aC,A.x,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).aA(0,w))
d.b1(w,v)},
av(d){return d.b!==this.b}}
C.bdQ.prototype={
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
u.z=A.ul
r=new C.d81(this,r*0.16,d,u,w)
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
C.aqT.prototype={
a3(){return"NgmySlideAspectRatio."+this.b}}
C.uK.prototype={
a3(){return"NgmySlideShapeKind."+this.b}}
C.mx.prototype={
a3(){return"NgmySlideLayout."+this.b}}
C.hF.prototype={
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
u.n(0,"decoration",C.hTn(v.z))
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
C.lI.prototype={
hG(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("M<1,eG>")
n=B.C(new B.M(n,new C.cem(),m),m.k("ak.E"))
return C.ry(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ag(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("M<1,a5<m,@>>")
n=B.C(new B.M(n,new C.cen(),m),m.k("ak.E"))
return B.F(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i4.prototype={
gb9z(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gSg(){if(!C.kw(this.w))return!1
var w=this.gb9z()
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
q=B.T(r).k("M<1,lI>")
r=B.C(new B.M(r,new C.ceb(),q),q.k("ak.E"))
return C.BI(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
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
C.jF.prototype={}
C.b0B.prototype={
B(d){return B.cA(new C.ceh(this))}}
C.ao3.prototype={
U(){return new C.bix(null,null)}}
C.bix.prototype={
gaZl(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.fW,null,1,null,v)
w.cL(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
t(){this.gaZl().t()
this.buw()},
B(d){return B.c7(this.gaZl(),new C.dGd(),this.a.c)}}
C.aKI.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.ad5.prototype={
PS(d,e,f,g){return this.bOD(d,e,f,g)},
bOD(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$PS=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$PS)
case 3:s=i
if(d.e==null){w=1
break}B.a4(d,!1).O(null)
t=d.I(x.q).f
t.R(B.b2(null,null,null,null,null,A.r,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ei,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$PS,v)},
B(d){var w=this,v=null,u=B.n(22),t=B.I(A.c.j(0.08),A.q,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dn,24)],x.V),r=B.au(B.p(v,v,A.f,v,v,new B.o(A.b1,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.de,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aP,p,A.am,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a6,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.av,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a6,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d7)
n.push(B.B(B.a([B.E(new C.adm(A.hB,"Download",A.bZ,new C.eoW(w,d),!0,v),1),A.at,B.E(new C.adm(A.vQ,"Share",A.bi,new C.eoX(w,d),!1,v),1),A.at,B.E(new C.adm(A.hk,"Safari",A.aZ,new C.eoY(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aB)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.eoZ(d),v,v))
return B.bl(!0,new B.D(A.pY,B.w(B.a([B.p(v,B.w(n,A.ai,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.iY,v,t,u,s,v,A.n),v,v,v,v,A.FD,v,v,1/0)],m),A.m,v,A.e,A.Q,0,A.p),v),!0,!1,A.ae,!0,!0)}}
C.adm.prototype={
B(d){var w=this,v=null,u=B.n(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.n(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.q,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aF(!1,A.a1,!0,v,B.aK(!1,u,!0,B.eB(B.w(B.a([p,A.N,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.byh,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ag)}}
C.b0z.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.aq4(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.c84().akt(1.35)
s=B.avl(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bzU(v)
if(i.e&&i.w!=null)q=B.aM(h,A.U,!1,h,!0,A.r,h,B.aN(),i.w,A.bi,h,h,h,h,2,D.bUq,A.y,!0,h,!0,h,!1,i.x,A.aj,h,h,h,new B.cw("slide_tf_"+g.a,x.W),h,A.wv,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.aa,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.zG,A.an,h,A.Tu,h,h)
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
w=n?t.cI4(B.b0(g.Q).j(0.45),A.cE):t
p=g.as
l=m?1:h
k=m?A.eH:A.Dq
p=B.d(f,new B.cw("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Tl:s
$.W()
j=B.N()
j.b=A.af
j.c=3*w
j.e=A.hn
j.r=A.au.gp(0)
j=i.coQ(p,t,k,j)
k=g.r
w=new B.an(A.V,h,A.a9,A.r,B.a([j,i.coO(k,t,l?A.Tl:s)],x.p),h)}else w=i.coP(p,t,g.k2?A.Tl:s,m)
v=new B.nh(w,new B.cw("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aB(A.ch,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a7)}return new B.D(u,new B.bI(r,h,h,q,h),h)
case 1:case 4:return i.bY9()
case 3:return i.cgr()
case 2:return B.b3(h,h,h,new C.b0w(g,h),A.fE)
case 5:g=g.r
return new C.b0y(g,!i.e&&i.z==null,h)}},
c84(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.k6
j=A.cE
break
case"shadow":v=o.d
e=B.a([new B.cS(D.aek,new B.x(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cS(l,A.J,6*v),new B.cS(l,A.J,16*v),new B.cS(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bH
w=A.au
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mK
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
e=B.a([new B.cS(A.aR,A.J,10*v),new B.cS(A.cB,A.J,22*v)],x.r)
k=A.O
w=A.ez
break
case"chalk":h=o.d
e=B.a([new B.cS(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.k6
break
case"comic":v=B.aq(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cZ0[q]
u.push(new B.cS(v,new B.x(p.a*t,p.b*t),0))}u.push(new B.cS(v,new B.x(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.W()
f=B.N()
v=o.d
f.sar(D.bX5.aA(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cS(A.KK,new B.x(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.W()
f=B.N()
v=o.d
f.sar(D.bXq.aA(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
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
k=A.k6
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
az3(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eSl.q(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cef(h)
v=r.k2?C.i53(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eH:A.Dq
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.XA(B.d0(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
coQ(d,e,f,g){return this.az3(d,e,f,!1,g)},
coO(d,e,f){return this.az3(d,e,f,!1,null)},
coP(d,e,f,g){return this.az3(d,e,f,g,null)},
bzU(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a8
default:return A.a3}},
bY9(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bI
return B.au(B.X(s.b===D.l6?A.GA:A.BB,A.aA,t,t,t,32),t,t,t)}w=u.bCW(r)
if(s.b===D.l6){s=B.n(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cr,A.q,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dD,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aNE(r,!0)
return C.fzw(s.go,v,s.id)}return w},
aNE(d,e){var w,v,u,t
try{w=C.i5m(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.cc(u,"_bg")
u=B.cA(new C.cee(this,w,v,e))
return u}catch(t){return D.ac4}},
bCW(d){return this.aNE(d,!1)},
cgr(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b6s
return C.i5E(v,w.db,w.dx)}}
C.b0w.prototype={
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
r.E(new B.b5(u/2,0))
r.E(new B.ap(u,t))
r.E(new B.ap(0,t))
r.E(new B.bE())
d.aS(r,g)
d.aS(r,w)
break
case 3:r=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
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
r.E(new B.bE())
d.aS(r,g)
d.aS(r,w)
break
case 4:h=t/2
w.c=v+2
d.bL(new B.x(0,h),new B.x(u,h),w)
break
case 5:q=u*0.22
r=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
r.E(new B.b5(q,0))
r.E(new B.ap(u,0))
r.E(new B.ap(u-q,t))
r.E(new B.ap(0,t))
r.E(new B.bE())
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
r.e=null}}r.E(new B.bE())
d.aS(r,g)
d.aS(r,w)
break}},
av(d){return d.b!==this.b}}
C.aIl.prototype={
U(){return new C.btD(null,null)}}
C.btD.prototype={
a_(){var w,v=this
v.a1()
w=B.bj(null,A.ik,null,1,null,v)
w.cL(0)
v.d!==$&&B.aP()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bwH()},
aNP(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.n(8)
return B.c0(B.au(B.d(d,w,w,w,w,w,w,A.de,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a8(A.a3,A.a8,A.x,v,w,w),A.n),A.be)},
bA7(){var w,v=this,u=null,t=v.aNP("Slide A",A.bi),s=v.aNP("Slide B",A.aZ)
if(v.a.c===D.cl)return new B.an(A.V,u,A.b0,A.r,B.a([t,B.au(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c7(w,new C.f3g(v,s,t),u)},
B(d){return this.bA7()}}
C.aIY.prototype={
jd(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jT(d){return d.b!==this.b}}
C.UT.prototype={
U(){return new C.biI(null,null)}}
C.biI.prototype={
a_(){var w,v,u=this
u.a1()
w=B.bj(null,A.B3,null,1,null,u)
u.d!==$&&B.aP()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cl){w.sp(0,1)
return}B.bM(B.dD(0,0,0,v.c.fr+v.f*120,0,0),new C.dRr(u),x.a)},
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
else B.bM(B.dD(0,0,0,v.c.fr+v.f*120,0,0),new C.dRq(t),x.a)}},
t(){var w=this.d
w===$&&B.c()
w.t()
this.buK()},
B(d){var w,v=this.a
if(v.c.dy===D.cl||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c7(w,new C.dRp(this),v.d)}}
C.II.prototype={
B(d){return B.cA(new C.ce7(this))}}
C.aza.prototype={
U(){return new C.bdj()}}
C.bdj.prototype={
a_(){this.a1()
if(this.a.c!==D.cl)B.bM(A.M8,new C.d5g(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cl)n=B.au(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.UT(C.eq(A.bh,!1,4279310375,A.aD,"",4294538006,24,A.bo,A.a6,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bf,o,2,"",0,0,"",u,D.f5,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.c9,p,p,B.n(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cw("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.eq(A.bh,!1,4294967295,A.aD,"",4280640491,22,A.bo,A.a6,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bf,o,2,"Element flies in",0,0,"",q.a.c,D.cP,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.n(14)
v=new B.an(A.V,p,A.a9,A.r,B.a([w,B.ao(32,new C.UT(t,B.p(p,D.fpN,A.f,p,p,new B.o(s,p,B.I(A.b1,A.q,1),r,p,p,A.n),p,p,p,p,A.jn,p,p,1/0),!0,1,new B.cw("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c0(n,D.b1K,A.be)}}
C.a7s.prototype={
U(){return new C.bjk(null,null)}}
C.bjk.prototype={
gaZT(){var w=this.a
if(w.e)w=D.eSu.q(0,w.c)||D.aNI.q(0,A.d.gH(this.a.c.split("@")))
else w=!1
return w},
a_(){var w,v=this
v.a1()
if(v.gaZT()){w=C.i3J(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bj(null,B.dD(0,0,0,w,0,0),null,1,null,v)
w.cL(0)
v.d=w}},
t(){var w=this.d
if(w!=null)w.t()
this.bvd()},
B(d){var w,v=this,u=v.d
if(!v.gaZT()||u==null)return v.a.d
w=v.a
return B.c7(u,new C.edz(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aZv.prototype={
B(d){var w=null
return B.au(C.b0A(!0,w,!1,C.eq(A.L,!1,this.e.l(),A.aD,"",4280640491,this.f,A.bo,A.a6,"",0.2,"fx",w,"","",0,!1,"",0,D.bf,4280172719,2,"Aa",0,0,this.c,D.cl,D.cP,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gY(d){return this.f}}
C.bet.prototype={
jd(d){return C.a27(this.b,new B.a9(0,0,0+d.a,0+d.b).cs(-this.c))},
jT(d){return d.b!==this.b||d.c!==this.c}}
C.bpd.prototype={
a6(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a9(0,0,0+a1.a,0+a1.b).cs(-this.d),g=this.b,f=C.a27(g,h),e=a1.gdH(),d=new C.eTm()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sar(D.aPe.aA(0,h))
a0.aS(f,w)
g=C.a27(g,h.cs(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.blm.gp(0)
a0.aS(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sar(D.f1x.aA(0,h))
a0.aS(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.hC(A.G,e*0.04)
a0.aS(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aS(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.sar(D.f1v.aA(0,h))
a0.aS(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aS(f,w)
g=C.a27(g,h.cs(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aS(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.ba.j(0.7).gp(0)
g.z=new B.hC(A.G,e*0.035)
a0.aS(f,g)
g=d.$1(e*0.016)
g.r=A.oI.gp(0)
a0.aS(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sar(D.f1q.aA(0,h))
a0.aS(f,w)
w=C.a27(g,h.cs(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b9V.gp(0)
a0.aS(w,v)
g=C.a27(g,h.cs(e*0.03))
v=d.$1(e*0.004)
v.r=D.bcy.gp(0)
a0.aS(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sar(D.aPe.aA(0,h))
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
m=w[q].MP(p*n/o).a
l=D.cWj[A.o.F(n,4)]
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
g.sar(D.f1z.aA(0,h))
g.z=new B.hC(A.G,e*0.03)
a0.aS(f,g)
g=d.$1(e*0.018)
g.sar(D.f1w.aA(0,h))
a0.aS(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aS(f,w)
g=C.a27(g,h.cs(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nJ.gp(0)
a0.aS(g,w)
break}},
av(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bqd.prototype={
a6(d,e){d.FS(C.a27(this.b,new B.a9(0,0,0+e.a,0+e.b).cs(-this.c)),A.w,e.gdH()*0.05,!1)},
av(d){return d.b!==this.b||d.c!==this.c}}
C.aKV.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.aLn.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.aMG.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.a7L.prototype={}
C.NS.prototype={
U(){var w=x.gz,v=x.N,u=x.bO
return new C.aDV(B.a([],x.D),B.a([],w),B.a([],w),B.U(v,u),B.U(v,x.bo),B.U(v,u),B.aY(v),null,null)},
ge1(){return this.c},
gTB(){return this.r},
gTC(){return this.w},
gLC(){return this.x}}
C.aDV.prototype={
a_(){var w,v=this
v.a1()
$.aV.bY$.push(v)
C.fEs()
$.hmK=new C.ev9(v)
w=B.bj(null,A.B0,null,1,null,v)
w.fh(0,!0)
v.fy!==$&&B.aP()
v.fy=w
v.Ip()},
bu(d){var w,v,u=this
u.bC(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.Ot(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.Ip()}},
j6(d){if(d===A.A7||d===A.t1||d===A.t0||d===A.ps)this.tA()},
t(){var w,v,u,t=this
$.aV.hM(t)
w=t.at
if(w!=null)w.a7(0)
t.tA()
w=t.fy
w===$&&B.c()
w.t()
for(w=t.ch,w=new B.dv(w,w.r,w.e);w.C();){v=w.d
v.S$=$.aw()
v.P$=0}for(w=t.CW,w=new B.dv(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bO(0)
v.h6()}for(w=t.cx,w=new B.dv(w,w.r,w.e);w.C();){v=w.d
v.S$=$.aw()
v.P$=0}t.bvo()},
gabp(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gON(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
abU(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gSg())return!1
return!0},
kj(){return this.abU(null)},
aiB(){var w=this.c
if(w==null)return
w.I(x.q).f.R(D.f_O)},
qk(){if(!this.kj())return!1
this.aiB()
return!0},
aqI(d){var w,v,u,t,s,r=this
if(r.abU(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hlR(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zR(){return this.aqI(null)},
Ip(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Ip=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.aqV(k),$async$Ip)
case 3:j=e
w=4
return B.b(C.apw(k),$async$Ip)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fTX(j,t.c02())
w=t.gabp()?5:7
break
case 5:r=t.gON()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aZJ(r),$async$Ip)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bs(s,new C.erx())
if(!t.dy.q(0,A.a.i(r).toLowerCase()))A.d.ca(s,0,q)}case 9:w=6
break
case 7:A.d.bs(s,new C.ery())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.L)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yG(m==null?"":m)!=null)continue
C.fEE(n,s)
p=!0}t.m(new C.erz(t,s))
if(p||s.length>J.ad(j))t.tA()
case 1:return B.h(u,v)}})
return B.i($async$Ip,v)},
c02(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kw(w)&&w!==q}if(w)p.push(r)
return p},
cng(d){var w,v=this,u=d.w
if(!C.kw(u)||u==="hati_kiapo_uongozi")return
v.aad(d)
w=A.d.bg(v.d,new C.et7(d))
u=v.d
if(w>=0){u[w]=d.hG()
v.d[w].f=new B.S(Date.now(),0,!1)}else A.d.ca(u,0,d.hG())
v.db=!1},
chn(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kw(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cng(t)
s=u.d
w=B.T(s)
v=w.k("cP<1,i4>")
s=B.C(new B.cP(new B.a_(s,new C.esW(),w.k("a_<1>")),new C.esX(),v),v.k("J.E"))
return s},
Ot(d){return this.bP0(d)},
tA(){return this.Ot(null)},
bP0(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Ot=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.chn()
w=3
return B.b(C.VL(d==null?t.a.c:d,s),$async$Ot)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.aqI(r)?4:5
break
case 4:w=6
return B.b(C.a6Z(r),$async$Ot)
case 6:q=r.x
p=A.a.i(q==null?t.gON():q)
if(t.dy.q(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bg(t.d,new C.eqV())
q=t.d
if(o>=0)q[o]=r.hG()
else A.d.ca(q,0,r.hG())
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ot,v)},
pn(){var w,v=this,u=v.at
if(u!=null)u.a7(0)
u=v.e
w=(u==null?null:C.kw(u.w))===!0?A.hw:A.lT
v.at=B.cM(w,new C.euf(v))},
aZm(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.aeS(u.hG(),v.f,v.r))
if(w.length>40)A.d.cF(w,0)
A.d.a8(v.ay)},
cAT(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.aeS(w.e.hG(),w.f,w.r))
w.m(new C.ev5(w,v.pop()))
w.pn()},
cml(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.aeS(w.e.hG(),w.f,w.r))
w.m(new C.et5(w,v.pop()))
w.pn()},
of(){var w,v,u=this
if(u.e==null)return
w=A.d.bg(u.d,new C.euT(u))
if(w>=0){u.d[w]=u.e.hG()
u.d[w].f=new B.S(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.S(Date.now(),0,!1)},
Xx(d){var w,v,u,t,s=this.gdt()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
xu(){var w,v,u,t
for(w=this.ch,v=new B.dv(w,w.r,w.e);v.C();){u=v.d
u.S$=$.aw()
u.P$=0}w.a8(0)
for(w=this.CW,v=new B.dv(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bO(0)
u.h6()}w.a8(0)},
K8(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdt()
if(l==null)return
w=l.z
v=B.T(w)
u=v.k("cP<1,m>")
t=B.df(new B.cP(new B.a_(w,new C.euU(),v.k("a_<1>")),new C.euV(),u),u.k("J.E"))
w=this.ch
v=B.a6(w).k("cv<1>")
v=B.C(new B.cv(w,v),v.k("J.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.L)(v),++r){q=v[r]
if(!t.q(0,q)){p=w.W(0,q)
if(p!=null){p.S$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bO(0)
p.h6()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.L)(v),++r){n=v[r]
if(n.b!==D.cP)continue
p=n.a
m=w.c7(0,p,new C.euW(n))
s.c7(0,p,new C.euX())
p=m.a.a
o=n.r
if(p!==o)m.saU(0,o)}},
HJ(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b4(u.d,new C.eqj(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gON()
w=u.dy.q(0,A.a.i(v).toLowerCase())}if(!w)A.d.ca(u.d,0,u.e.hG())}u.of()
u.pn()},
aiX(d,e){var w,v,u,t,s=this
if(s.kj())return
w=s.Xx(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kw(v.w))===!0
if(u){C.i3N(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdt()
if(t!=null)C.i3O(t,w.d+w.f*0.5)}}s.HJ()
s.of()
s.pn()
if(u&&s.c!=null)s.m(new C.ev6())},
cBX(d,e){var w=this,v=w.gdt()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.HJ()
w.of()
w.pn()},
gdt(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gqq(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.i1P(o)
if(w!=null)return w
v=q.gdt()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gH(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bYo(v)
t=q.bYn(v)
s=B.b0(v.e)
r=v.f
return new C.jF(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hFx(o)},
bYo(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(t.b===D.cP)s=t.w>=28||A.o.D(A.o.am(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bYn(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cP&&t.w<28)return B.b0(t.Q)}return A.aJ},
aeS(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gabp()){w.c.I(x.q).f.R(D.eZp)
return}w.aad(d)
w.b_z(C.bBb(d))
return}if(C.cf_(v)){w.aad(d)
w.b_z(d)
return}w.m(new C.ese(w,d))},
arh(){var w,v,u,t,s,r,q=this
q.a22(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kw(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eqh(q))
if(r&&q.c!=null){u.toString
q.JI(u,s)}return}q.tA()
q.m(new C.eqi(q))},
b_y(d){this.aad(d)
this.a_x(d,!0)},
aad(d){if(!C.kw(d.w))return
C.fEE(d,this.d)},
a_x(d,e){return this.cdh(d,e)},
b_z(d){return this.a_x(d,!1)},
cdh(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a_x=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bBb(d)
if(e){r=s.x
q=A.a.i(r==null?t.gON():r)
t.dy.W(0,q.toLowerCase())
C.apx(t.a.c,q)}r=s}else r=d
w=C.cf_(r.w)?3:4
break
case 3:w=5
return B.b(t.aae(r),$async$a_x)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b4(t.d,new C.esB(l))
o=l.a.hG()
n=C.kw(o.w)&&C.i4Z(o)
t.m(new C.esC(t,o,p))
if(n){m=A.d.bg(t.d,new C.esD(o))
if(m>=0){t.d[m]=o.hG()
t.tA()}}if(!t.abU(l.a))t.YH()
r=!1
if(t.c!=null)if(!t.abU(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.aqI(r)&&C.fAH(l.a)}else l=r
else l=r
if(l)t.c.I(x.q).f.R(D.f__)
case 1:return B.h(u,v)}})
return B.i($async$a_x,v)},
aae(d){return this.bN8(d)},
bN8(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$aae=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.li(r.c,A.zo),$async$aae)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kV(!1,r,s.c,s.d,null,A.zo,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aae,v)},
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
aez(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aez=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.esd(),s,null,!0,!0,x.H),$async$aez)
case 3:if(t.c==null){w=1
break}t.arh()
case 1:return B.h(u,v)}})
return B.i($async$aez,v)},
aey(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aey=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.esa(),s,null,!0,!0,x.H),$async$aey)
case 3:if(t.c==null){w=1
break}t.m(new C.esb())
t.arh()
case 1:return B.h(u,v)}})
return B.i($async$aey,v)},
YH(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$YH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ay(),$async$YH)
case 3:r=e
if(B.jJ(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.aq("Bool","ngmy_marriage_hint_seen",!0),$async$YH)
case 4:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.eY1)
case 1:return B.h(u,v)}})
return B.i($async$YH,v)},
JI(d,e){return this.cnF(d,e)},
cnF(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$JI=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.agg(s,t.gEp(),t.gEo(),!0,e,t.d),$async$JI)
case 9:w=4
break
case 6:w=10
return B.b(C.agh(s,t.gEp(),t.gEo(),!0,e,t.d),$async$JI)
case 10:w=4
break
case 7:w=11
return B.b(C.agi(s,t.gEp(),t.gEo(),!0,e,t.d),$async$JI)
case 11:w=4
break
case 8:w=12
return B.b(C.agj(s,t.gEp(),t.gEo(),!0,e,t.d),$async$JI)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$JI,v)},
bZW(){var w,v,u,t,s=this
if(!s.gabp()){s.c.I(x.q).f.R(D.eYe)
return}w=s.gON()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.agf(u,t,v,new C.ert(s),new C.eru(s),w)},
aeT(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aeT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bQ(A.dG,null,new C.esk(u),s,!0,!0,!1,A.lA,!1,!1,x.N),$async$aeT)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.agj(s,u.gEp(),u.gEo(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.agg(s,u.gEp(),u.gEo(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.agh(s,u.gEp(),u.gEo(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.agi(s,u.gEp(),u.gEo(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bZW()
return B.h(null,v)}})
return B.i($async$aeT,v)},
cco(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aZm()
w=C.cB()
v=C.BI(t,t,t,t,D.CQ,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.esl(u,v))},
a9E(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a9E=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qk()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i9u(s),$async$a9E)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d7(q.r,new C.eql())
t.d4(new C.eqm(t,p,q,r))
s=t.c.I(x.q).f
o=r.r.length
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9E,v)},
agR(d,e,f,g){var w=null,v=g?A.dB:A.bM,u=B.I(g?A.b1:A.cr,A.q,1)
return B.ho(B.aB(w,B.p(w,B.X(d,g?A.c:A.aJ,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a5),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a7),w,e,w,w)},
a_w(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_w=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qk()){w=1
break}s=t.jW()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.T(r).k("a_<1>")
p=B.C(new B.a_(r,new C.esw(),q),q.k("J.E"))}o=s!=null&&s.b===D.lz?B.a([s],x.u):p
if(o.length===0){t.c.I(x.q).f.R(D.f_a)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bQ(A.K,null,new C.esx(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a_w)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_w,v)},
af9(){return this.cdg()},
cdg(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$af9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qk()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i9g(s,t.f+1,o),$async$af9)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.U
q=B.kE(s,B.T(s).c)
p.a=A.d.bg(o.r,new C.esz(q))
t.d4(new C.esA(p,t,o,q,r))
t.c.I(x.q).f.R(D.f_z)
case 1:return B.h(u,v)}})
return B.i($async$af9,v)},
afg(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$afg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qk()||!t.zR()){w=1
break}s=t.gdt()
if(s==null){w=1
break}r=s.z
q=B.T(r).k("a_<1>")
p=B.C(new B.a_(r,new C.esR(),q),q.k("J.E"))
if(p.length===0){t.c.I(x.q).f.R(D.eXN)
w=1
break}o=new B.M(p,new C.esS(),B.T(p).k("M<1,K>")).ff(0,new C.esT())
r=B.U(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.L)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.ar(new B.bb(l,A.b3,A.aM),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bQ(A.K,null,new C.esU(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$afg)
case 3:for(r=new B.dv(r,r.r,r.e);r.C();){q=r.d
q.S$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.esV())
case 1:return B.h(u,v)}})
return B.i($async$afg,v)},
aeW(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$aeW=B.e(function(d,e){if(d===1)return B.f(e,v)
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
return B.b(C.hnV(s,new C.Eu(r,q,p,o==null?"":o)),$async$aeW)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d4(new C.esm(m,n))
s=t.c.I(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.agF(r)
r=B.u(r==null?null:r.b)+" will play after your last slide."}s.R(B.b2(null,null,null,null,null,A.r,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aeW,v)},
aa7(){return this.bMu()},
bMu(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aa7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qk()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i9t(s,t.f+1,l),$async$aa7)
case 3:r=e
q=$.fXu
$.fXu=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d4(new C.eqC())
t.c.I(x.q).f.R(D.eXE)
w=1
break}if(!q){s=r.CW
s=C.hmI(l,s==null?"":s,!1)}else s=!1
if(s){t.d4(new C.eqD(t,l,r))
t.c.I(x.q).f.R(D.f02)
w=1
break}s=l.cx
if(s==null)s=A.U
p=B.kE(s,B.T(s).c)
s=l.r
m.a=A.d.bg(s,new C.eqE(p))
o=s.length
t.d4(new C.eqF(m,t,l,p,r))
n=s.length-o
s=t.c.I(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aa7,v)},
aPW(d,e){if(e){this.afJ()
return}this.cco(d,!1)},
bI4(){return this.aPW(null,!1)},
afJ(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bQ(A.bY,null,new C.et0(t),r,!0,!0,!0,A.pe,!1,!1,x.N),$async$afJ)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.et1(t,C.i1O(s).pA()))
case 1:return B.h(u,v)}})
return B.i($async$afJ,v)},
d4(d){var w=this
if(w.qk())return
w.HJ()
w.aZm()
w.m(d)
w.K8()
w.of()
w.pn()},
a89(){this.d4(new C.epg(this,D.mF))},
aRo(){var w=this.gdt()
if(w==null)return
this.d4(new C.eqA(this,w))},
aQx(){var w=this.e
if(w==null||w.r.length<=1)return
this.d4(new C.eqy(this))},
b2x(d,e){if(this.e==null||d===e)return
this.d4(new C.et9(this,d,e))},
O0(d){return this.bK4(d)},
bK4(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$O0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gON():s)
w=5
return B.b(C.apv(t.a.c,r),$async$O0)
case 5:t.dy.M(0,r.toLowerCase())
case 4:s=d.a
C.aqX(s)
w=6
return B.b(C.b0E(t.a.c,s),$async$O0)
case 6:if(t.c==null){w=1
break}t.m(new C.equ(t,d))
w=7
return B.b(t.tA(),$async$O0)
case 7:case 1:return B.h(u,v)}})
return B.i($async$O0,v)},
cnC(d,e){var w=this
if(d.z){w.aiB()
return}w.m(new C.et8(w,d,e))
w.pn()},
jW(){var w,v,u,t,s,r=this.gdt()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Wy(d){return this.ch.c7(0,d.a,new C.eqk(d))},
at9(d){return this.CW.c7(0,d.a,new C.eqW())},
a22(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Xx(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aV.aj$.d.c
if(u!=null)u.jN()},
b5Y(){return this.a22(!0)},
a1Z(d){var w,v,u=this
if(u.qk())return
if(!u.zR())return
w=u.Xx(d)
if(w==null||w.b!==D.cP)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Wy(w).saU(0,"")}u.m(new C.euR(u,d))
$.aV.x1$.push(new C.euS(u,d,w))},
b6v(d){var w=this
if(d.b===D.cP&&!w.kj()&&w.zR()){w.a1Z(d.a)
return}w.azt(d.a)},
azt(d){var w,v,u,t,s,r=this
if(r.kj())return
w=r.r
if(w!=null&&w!==d){v=r.Xx(w)
if(v!=null&&v.b===D.cP){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eug(r,s,d))
if(s||d==null){t=$.aV.aj$.d.c
if(t!=null)t.jN()}},
aMd(){this.d4(new C.eph(this))},
p6(d){return this.bza(d)},
bza(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$p6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$p6)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d4(new C.epe(t,d))
case 1:return B.h(u,v)}})
return B.i($async$p6,v)},
VH(){var w=0,v=B.j(x.H),u,t=this,s
var $async$VH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.GB(78,1920),$async$VH)
case 3:s=e
if(s==null||t.gdt()==null){w=1
break}t.d4(new C.ep4(t,s))
case 1:return B.h(u,v)}})
return B.i($async$VH,v)},
VB(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$VB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdt()==null){w=1
break}w=3
return B.b(S.CQ(t.a.c),$async$VB)
case 3:s=e
if(t.c==null){w=1
break}r=J.a3(s)
if(r.gal(s)){t.c.I(x.q).f.R(D.f0C)
w=1
break}w=r.gL(s)===1?4:6
break
case 4:q=r.gH(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bQ(null,null,new C.ep1(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$VB)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdt()==null){w=1
break}t.d4(new C.ep2(t,q))
case 1:return B.h(u,v)}})
return B.i($async$VB,v)},
as7(){var w=this,v=w.r
if(v==null||w.gdt()==null)return
if(A.d.b4(w.gdt().z,new C.eqw(v))){w.c.I(x.q).f.R(D.f_D)
return}if(w.w===v)w.a22(!0)
w.d4(new C.eqx(w,v))},
bGm(){var w=this.jW(),v=w==null
if((v?null:w.b)===D.f5)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cP)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aMU(d,e){var w=this,v=w.jW(),u=w.gdt(),t=w.e
if(t==null)return
w.d4(new C.epJ(w,v,d,e,t,u))},
bAL(d){return this.aMU(d,null)},
a8r(d){return this.bAT(d)},
bAT(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a8r=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a73.q(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.o6(),$async$a8r)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jW()
if(s!=null){r=s.b
if(r===D.cP)t.bAL(s.w>=28||s.x.gdL(0)>=A.H.gdL(0)?d.d:d.e)
else if(r===D.f5){r=d.c
t.aMU(r.j(0.88),r)}w=1
break}t.d4(new C.epO(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a8r,v)},
a8q(d){return this.bAR(d)},
bAR(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a8q=B.e(function(e,f){if(e===1)return B.f(f,v)
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
return B.b(t.o6(),$async$a8q)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d4(new C.epM(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a8q,v)},
bAB(d){var w=this.gdt()
if(w==null)return
this.d4(new C.epI(this,w,d))},
a_C(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_C=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.i9p(r),$async$a_C)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.of()
t.m(new C.esL(t,s))
w=4
return B.b(t.tA(),$async$a_C)
case 4:if(t.c!=null)t.aeS(s)
case 1:return B.h(u,v)}})
return B.i($async$a_C,v)},
aa_(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aa_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a22(!0)
t.of()
s=t.c
s.toString
w=3
return B.b(C.R3(s,q),$async$aa_)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aa_,v)},
Dy(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Dy=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.of()
t=4
w=7
return B.b(C.aPq(m),$async$Dy)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aOR(o,q,m.b),$async$Dy)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.ab(l)
o=r.c
if(o==null){w=1
break}o.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.u(p),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Dy,v)},
Fc(d,e){return this.cAi(d,e)},
cAi(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Fc=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qk()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a22(!0)
t.of()
s=h.a=t.e.hG()}else{r=A.d.bg(t.d,new C.ev_(d))
s=h.a=r>=0?t.d[r].hG():d.hG()}s=s.w
q=s==null
p=C.i2M(q?"":s)
o=C.hlD(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.T(s).k("a_<1>")
n=B.C(new B.a_(s,new C.ev0(h,p),q),q.k("J.E"))
s=h.a.b
w=3
return B.b(t.ctw(n.length,o,s),$async$Fc)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.i2G(h.a)
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
return B.b(t.ctv(n,o),$async$Fc)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.fZ(t.d,new C.ev1(s))
s=h.a.b
w=11
return B.b(t.ctt(k.b,s),$async$Fc)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hG()
case 5:j=C.i2L(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.I(x.q).f.R(D.f0O)
w=1
break}w=12
return B.b(t.ctu(j.a,s,o,j.c),$async$Fc)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.ev2(h,t,i))
t.pn()
case 1:return B.h(u,v)}})
return B.i($async$Fc,v)},
ctw(d,e,f){var w=this.c
w.toString
return B.bQ(A.K,null,new C.euw(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
ctv(d,e){var w=this.c
w.toString
return B.bQ(A.K,null,new C.euv(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
ctt(d,e){var w=this.c
w.toString
return B.bQ(A.K,null,new C.eup(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
ctu(d,e,f,g){var w=this.c
w.toString
return B.bQ(A.K,null,new C.eur(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
abt(){var w=null
return B.au(B.p(w,w,A.f,w,w,new B.o(A.b1,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
abu(d,e,f,g){var w,v,u=null,t=B.n(16),s=B.aq(d,A.bY,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dn,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a8(A.ay,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.eo,B.E(B.w(B.a([B.d(g,u,u,u,u,u,u,D.fbc,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a6,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aUF(d,e){var w=null,v=e.j(0.14),u=B.n(12),t=B.I(e.j(0.22),A.q,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.U_,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bT,w,w,w)},
aUI(d,e,f,g,h,i,j){var w=null,v=B.n(16),u=B.n(16),t=g?new B.a8(A.ay,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.q,1),q=d.j(g?0.22:0.14),p=B.n(13),o=x.p
return B.aF(!1,A.a1,!0,w,B.aK(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bd,B.E(B.w(B.a([B.d(i,w,w,w,w,w,w,A.nw,w,w,w),A.cQ,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a6,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.X(A.BE,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bE,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.erp(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
bXk(d,e,f,g,h,i){return this.aUI(d,e,f,!1,g,h,i)},
aut(d,e){var w=null,v=A.c.j(0.05),u=B.n(14),t=B.I(A.c.j(0.08),A.q,1)
return B.p(w,B.w(B.a([B.d(e,w,w,w,w,w,w,A.de,w,w,w),A.bz,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.Zs,w,w,w)},
aUH(d,e,f){var w=null,v=B.bm(A.c.j(0.08),w,w,w,A.c,w,A.ck,w,new B.b7(B.n(14),A.W),w,w,w)
return B.bG(B.d(e,w,w,w,w,w,w,A.nu,w,w,w),new C.ero(d,f),v)},
aUG(d,e){return this.aUH(d,e,null)},
K_(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$K_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.p8(l,s.c,s.d),$async$K_)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aI("=",l.length)+"\n\n"
q=new B.fe(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gae(o.z),n=new B.f4(l,new C.euh());n.C();){m=l.gT(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aL(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a9F(l.charCodeAt(0)==0?l:l,r.b),$async$K_)
case 4:l=t.a
w=5
return B.b(B.p7(l.c,l.d),$async$K_)
case 5:case 1:return B.h(u,v)}})
return B.i($async$K_,v)},
I4(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$I4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.p8(q,s.c,s.d),$async$I4)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a9F(A.S.ao(r.ag(),null),r.b+".json"),$async$I4)
case 4:q=t.a
w=5
return B.b(B.p7(q.c,q.d),$async$I4)
case 5:case 1:return B.h(u,v)}})
return B.i($async$I4,v)},
b5H(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.of()
u.tA()
w=u.c
w.toString
v=B.e9(new C.euQ(u,t),!1,null,x.z)
B.a4(w,!1).cm(v)},
Hi(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Hi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$Hi)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fER(),$async$Hi)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.i5y(s.a)
q=t.c
q.toString
w=5
return B.b(B.bQ(A.au,null,new C.ep9(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$Hi)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d4(new C.epa(t,s))
w=1
break}if(p==="split")t.d4(new C.epb(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$Hi,v)},
Nm(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Nm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qk()){w=1
break}w=3
return B.b(t.o6(),$async$Nm)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aPp(s,null,null),$async$Nm)
case 4:r=e
if(r==null||t.gdt()==null){w=1
break}t.d4(new C.epf(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Nm,v)},
b2k(d){var w=this.e
if(w==null||!C.kw(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aOc(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aPp(s,t==null?null:B.b0(t),u)},
a87(d){return this.bz1(d)},
bz1(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a87=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qk()){w=1
break}if(!t.zR()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.f12)
w=1
break}w=3
return B.b(t.aOc(),$async$a87)
case 3:r=f
if(r==null||t.gdt()==null){w=1
break}t.d4(new C.ep6(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a87,v)},
agu(d){return this.cmo(d)},
cmo(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agu=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qk()){w=1
break}if(!t.zR()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.f0a)
w=1
break}w=3
return B.b(t.aOc(),$async$agu)
case 3:r=f
if(r==null||t.gdt()==null){w=1
break}t.d4(new C.et6(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$agu,v)},
c95(){var w,v,u=this
if(u.kj())return
w=new B.S(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bz(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.czi()}},
czi(){var w,v,u,t,s,r=this.gdt()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d4(new C.euY(this,r,(A.o.aC(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bXF(){var w,v,u,t,s,r=this.gdt()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d4(new C.ers(this,r,u.d))},
c1j(d){var w
if(this.kj())return!1
w=this.e
if((w==null?null:C.kw(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fBs(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.l6&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c1k(d){var w
if(this.kj())return!1
w=this.e
if((w==null?null:C.kw(w.w))!==!0)return!0
if(!this.zR())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fBs(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.l6&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
Nv(d){return this.bBi(d)},
bBi(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Nv=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qk()){w=1
break}if(!t.zR()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(D.f_0)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.apz(p),$async$Nv)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.I(x.q).f.R(D.f_F)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gH(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a6Z(r)
w=1
break}t.m(new C.epS(t,d,o))
t.of()
$.aV.x1$.push(new C.epT(t))
case 1:return B.h(u,v)}})
return B.i($async$Nv,v)},
VF(){var w=0,v=B.j(x.H),u,t=this,s
var $async$VF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$VF)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bBS(),$async$VF)
case 4:s=e
if(s==null||t.gdt()==null){w=1
break}t.d4(new C.ep3(t,s))
case 1:return B.h(u,v)}})
return B.i($async$VF,v)},
Oe(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Oe=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$Oe)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jW()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fEI(r),$async$Oe)
case 4:q=e
if(q==null){w=1
break}t.d4(new C.eqU(s,q))
case 1:return B.h(u,v)}})
return B.i($async$Oe,v)},
j3(d){this.d4(new C.epc(this,d))},
qa(d){return this.bAu(d)},
bAu(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qa=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qk()){w=1
break}m=!D.aNL.q(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.o6(),$async$qa)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.Hi()
w=1
break A
case"sign_paper":t.Nm()
w=1
break A
case"hd_photo":t.VF()
w=1
break A
case"sharpen":t.Oe()
w=1
break A
case"print":t.Dy()
w=1
break A
case"rotate":s=t.jW()
if(s!=null)t.d4(new C.epl(s))
w=1
break A
case"text_box":t.aMd()
w=1
break A
case"picture":t.VH()
w=1
break A
case"present":t.b5H()
w=1
break A
case"new_slide":t.a89()
w=1
break A
case"export_json":t.I4()
w=1
break A
case"outline_share":t.K_()
w=1
break A
case"flashcard_tool":t.vc(D.I1)
w=1
break A
case"quiz_tool":t.vc(D.I2)
w=1
break A
case"worksheet_tool":t.vc(D.I3)
w=1
break A
case"duplicate_el":s=t.jW()
if(s==null){w=1
break A}t.d4(new C.epm(t,s))
w=1
break A
case"delete_el":t.as7()
w=1
break A
case"bring_fwd":s=t.jW()
if(s==null||t.gdt()==null){w=1
break A}t.d4(new C.epn(t,s))
w=1
break A
case"send_back":s=t.jW()
if(s==null||t.gdt()==null){w=1
break A}t.d4(new C.epy(t,s))
w=1
break A
case"align_left":s=t.jW()
if(s!=null)t.d4(new C.epB(s))
w=1
break A
case"align_center":s=t.jW()
if(s!=null)t.d4(new C.epC(s))
w=1
break A
case"align_right":s=t.jW()
if(s!=null)t.d4(new C.epD(s))
w=1
break A
case"grayscale":case"brighten":t.Oe()
w=1
break A
case"flip_h":s=t.jW()
if(s!=null)t.d4(new C.epE(s))
w=1
break A
case"flip_v":s=t.jW()
if(s!=null)t.d4(new C.epF(s))
w=1
break A
case"rectangle":t.p6(D.bf)
w=1
break A
case"circle":t.p6(D.eN)
w=1
break A
case"triangle":t.p6(D.jQ)
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
break A}for(q=A.d.gae(r.z),p=new B.f4(q,new C.epG()),o=0;p.C();){n=A.a.fF(A.a.i(q.gT(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.a_(n,new C.epH(),B.T(n).k("a_<1>")).gL(0)}t.c.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cB()
t.j3(C.iX(A.L,!1,t.gqq().d.l(),A.aD,40,A.bo,A.u,0.18,q,"Presentation Title",0,D.mG,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cB()
t.j3(C.iX(A.L,!1,t.gqq().e.l(),A.aD,22,A.bo,A.a6,0.12,q,"Subtitle goes here",0,D.df,0.8,0.1,0.48))
w=1
break A
case"bullets":t.j3(C.iX(A.bh,!0,4279310375,A.aD,20,A.bo,A.a6,0.5,C.cB(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.us,0.8,0.1,0.22))
w=1
break A
case"numbered":t.j3(C.iX(A.bh,!1,4279310375,A.aD,20,A.bo,A.a6,0.5,C.cB(),"1. First item\n2. Second item\n3. Third item",0,D.ur,0.8,0.1,0.22))
w=1
break A
case"quote":t.j3(C.iX(A.L,!1,4279310375,A.aD,24,A.cE,A.a6,0.25,C.cB(),'"Insert meaningful quote here."',0,D.df,0.8,0.1,0.3))
w=1
break A
case"citation":t.j3(C.iX(A.bh,!1,4284773515,A.aD,14,A.bo,A.a6,0.1,C.cB(),"Author, Title (Year). Publisher.",0,D.us,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.j3(C.iX(A.dP,!1,4279310375,A.aD,14,A.bo,A.a6,0.08,C.cB(),C.bBU(),0,D.df,0.24,0.72,0.04))
w=1
break A
case"page_number":t.j3(C.iX(A.dP,!1,4279310375,A.aD,13,A.bo,A.a6,0.06,C.cB(),"Page "+(t.f+1),0,D.df,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d4(new C.epo(t))
w=1
break A
case"footer_bar":t.d4(new C.epp(t))
w=1
break A
case"highlight":t.d4(new C.epq(t))
w=1
break A
case"redact":t.d4(new C.epr(t))
w=1
break A
case"callout":t.d4(new C.eps(t))
w=1
break A
case"checkboxes":t.j3(C.iX(A.bh,!1,4279310375,A.aD,20,A.bo,A.a6,0.45,C.cB(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.df,0.8,0.1,0.2))
w=1
break A
case"table":t.j3(C.iX(A.bh,!1,4279310375,A.aD,16,A.bo,A.a6,0.55,C.cB(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.df,0.8,0.1,0.18))
w=1
break A
case"memo":t.d4(new C.ept(t))
w=1
break A
case"letter":t.j3(C.iX(A.bh,!1,4279179050,A.aD,17,A.bo,A.a6,0.82,C.cB(),C.bBU()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.df,0.8,0.1,0.08))
w=1
break A
case"agenda":t.j3(C.iX(A.bh,!1,4279310375,A.aD,22,A.bo,A.O,0.76,C.cB(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.us,0.8,0.1,0.12))
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
case"approved":t.j3(C.iX(A.L,!1,4278556265,A.aD,28,A.bo,A.u,0.12,C.cB(),"APPROVED",0,D.mG,0.32,0.62,0.08))
w=1
break A
case"draft":t.j3(C.iX(A.L,!1,4292617766,A.aD,28,A.bo,A.u,0.12,C.cB(),"DRAFT",0,D.df,0.32,0.62,0.08))
w=1
break A
case"confidential":t.j3(C.iX(A.L,!1,871318596,A.aD,36,A.bo,A.u,0.12,C.cB(),"CONFIDENTIAL",0,D.df,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d4(new C.epu(t))
w=1
break A
case"progress":t.d4(new C.epv(t))
w=1
break A
case"stars":t.j3(C.iX(A.L,!1,4279310375,A.aD,36,A.bo,A.a6,0.12,C.cB(),"\u2605\u2605\u2605\u2605\u2606",0,D.qj,0.8,0.1,0.4))
w=1
break A
case"equation":t.j3(C.iX(A.L,!1,4279310375,A.aD,32,A.bo,A.O,0.14,C.cB(),"y = mx + b",0,D.df,0.8,0.1,0.38))
w=1
break A
case"timeline":t.j3(C.iX(A.L,!1,4279310375,A.aD,18,A.bo,A.a6,0.2,C.cB(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.ur,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d4(new C.epw(t))
w=1
break A
case"compare":t.d4(new C.epx(t))
w=1
break A
case"link_text":t.j3(C.iX(A.bh,!1,4280640491,A.mK,16,A.bo,A.a6,0.1,C.cB(),"https://example.com",0,D.df,0.8,0.1,0.5))
w=1
break A
case"phone":t.j3(C.iX(A.bh,!1,4279310375,A.aD,18,A.bo,A.a6,0.1,C.cB(),"(555) 123-4567",0,D.df,0.8,0.1,0.5))
w=1
break A
case"email":t.j3(C.iX(A.bh,!1,4280640491,A.aD,18,A.bo,A.a6,0.1,C.cB(),"name@email.com",0,D.df,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d4(new C.epz(t))
w=1
break A
case"cover_page":r=t.gdt()
if(r==null){w=1
break A}t.d4(new C.epA(t,r))
w=1
break A
case"invoice":t.j3(C.iX(A.bh,!1,4279179050,A.aD,16,A.bo,A.a6,0.84,C.cB(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.df,0.8,0.1,0.08))
w=1
break A
case"resume":t.j3(C.iX(A.bh,!1,4279179050,A.aD,17,A.bo,A.a6,0.84,C.cB(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.df,0.8,0.1,0.08))
w=1
break A
case"minutes":t.j3(C.iX(A.bh,!1,4279310375,A.aD,16,A.bo,A.a6,0.88,C.cB(),"MEETING MINUTES\nDate: "+C.bBU()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.df,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.j3(C.iX(A.bh,!1,4279310375,A.aD,17,A.bo,A.a6,0.88,C.cB(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.df,0.8,0.1,0.06))
w=1
break A
case"rubric":t.j3(C.iX(A.bh,!1,4279310375,A.aD,15,A.bo,A.a6,0.8,C.cB(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.df,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qa,v)},
csX(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eSq.q(0,this.z)},
csW(d){if(this.jW()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b7l(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cl,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.n(12)
u=e?f:A.bD
u=B.I(u,A.q,o&&e?2:1)
t=C.i5n(d)
s=o?12:18
r=o?A.H:A.cM
if(o)if(e)q=f
else q=g?A.ad:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.O4,A.f,p,p,D.E9,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fB,B.aB(p,new B.an(A.V,p,A.a9,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a7),p)},
bMK(d){var w,v=null,u=this.jW()
if(u==null)return A.bI
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aA:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.M(D.Qz,new C.eqT(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.j,0,v,v)},
vc(d){return this.bz9(d)},
bz9(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vc=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aNF.q(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.o6(),$async$vc)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d4(new C.epd(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vc,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eR7
w=h.e
if(w==null)return h.bD1()
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
m=t?A.bY:D.bbZ
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gSg()}else j=!1
if(j)k.push(new C.a7t(h.a.c,!1,h.e.gb9z(),h.gc92(),g))
else if(s&&h.e!=null&&!h.kj()&&C.cf_(h.e.w)){j=h.a
k.push(new C.a7t(j.c,j.d,g,h.gcab(),g))}if(s)k.push(h.bMG(w,t,r))
if(s&&h.kj()){w=t?A.fy:A.kv
j=B.n(14)
i=B.I(A.bi.j(0.35),A.q,1)
k.push(B.p(g,B.B(B.a([D.bO9,A.ab,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fy,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.B8,A.iK,g,g,g))}w=!n
if(w&&!h.kj())k.push(h.c2g(t,r))
if(w&&h.kj())k.push(h.cAj(t))
if(r&&h.jW()!=null&&w&&!h.kj())k.push(h.c2b(t))
j=B.a([],l)
if(q&&w)j.push(new B.a7(132,g,h.b5a(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a7(g,72,h.b5a(t,!1),g))
i.push(B.E(new B.bI(A.b2,g,g,h.bEl(v,t,!s||p),g),1))
if(h.csX(r)&&u&&s&&!h.kj())i.push(h.c8Q(v,t,r))
j.push(B.E(B.w(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.kj()&&h.csW(!1))j.push(new B.a7(240,g,h.bPo(t),g))
k.push(B.E(B.B(j,A.ai,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a7(g,r?72:h.a.e,g,g))
w=B.a([B.w(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c2c(t))
return B.c6(g,m,B.bl(!1,new B.an(A.V,g,A.a9,A.r,w,g),!0,!1,A.ae,!0,!0),g,!1,!1,g,!1)},
bD1(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.I
p=w?A.bY:A.bM
v=r.a.e
u=r.c85(A.bi,A.q1,new C.epW(r),r.gccl(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.E(r.aLW(A.bi,A.hz,"Blank Presentation",new C.epX(r)),1),A.at,B.E(r.aLW(A.aZ,A.vY,"Class Template",new C.epY(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.bw,s,A.mJ,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.bzX(w))
else{t=new B.i2(t,B.T(t).k("i2<1>"))
A.d.v(u,t.gdQ(t).dB(0,new C.epZ(r,w),x.l))}return B.c6(q,p,B.bl(!1,B.cy(u,q,new B.Q(18,12,18,v),q,q,A.ah,!1),!0,!1,A.ae,!0,!0),q,!1,!1,q,q)},
bKS(){this.m(new C.eqz(this))
var w=this.c
w.toString
if(B.aH(w,A.bW,x.w).w.a.a<900){w=$.aV.aj$.d.c
if(w!=null)w.jN()}},
afa(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afa=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jW()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bQ(A.K,null,new C.esK(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$afa)
case 3:case 1:return B.h(u,v)}})
return B.i($async$afa,v)},
AO(d,e){return this.cti(d,e)},
cti(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$AO=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hY(D.WM,!0,"Dismiss",j,new C.eui(),new C.euj(d,e),A.iI,!0,x.N),$async$AO)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.aiB()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gSg()){r.aiB()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aPq(d),$async$AO)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aOR(j,q,d.b),$async$AO)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.ab(i)
j=r.c
if(j==null){w=1
break}j.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.u(p),null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
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
return B.b(B.hY(D.WM,!0,"Dismiss",j,new C.euk(),new C.eul(d),A.a1,!0,x.y),$async$AO)
case 20:if(g===!0)r.O0(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.agd("Rename presentation",d.b),$async$AO)
case 24:l=g
if(l!=null)r.cnC(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ag()
k.n(0,"id",C.cB())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eum(r,k))
r.pn()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AO,v)},
b0d(d,e){var w=null
return B.bK(!1,D.fzS,w,w,!0,w,w,e,w,B.fx(w,w,w,w,w,w,w,w,w,w,w,A.bi,w,w,w,A.az,w,A.lm,w,w,w,w,w,A.kd,w,w))},
bzX(d){var w=this.fy
w===$&&B.c()
return B.c7(w,new C.epi(this,d),null)},
bIZ(d,e,f){var w=new B.M(B.a(d.split(" \u2022 "),x.s),new C.eqn(),x.dv).c0(0,new C.eqo()),v=B.C(w,w.$ti.k("J.E"))
return new B.D(G.ahp,this.aMv(v,e,new C.eqp(),f),null)},
aMv(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.eg)
t=e.j(g?0.14:0.1)
s=new B.aR(6,6)
r=new B.az(e.j(g?0.55:0.45),1,A.q,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ad:A.bq,n,n,n,10),A.qq],m))}p=d[v]
o=g?A.c.j(0.85):A.aJ
q.push(new B.y(p,n,new B.G(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.ck(A.aN,A.e,A.Q,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bO(r,r,r,r),new B.bo(s,s,s,s),n,n,A.n),n,n,n,n,A.ne,n,n,n))
A.d.v(l,u)}return B.eM(A.a3,B.B(l,A.m,n,A.e,A.Q,0,n,n),A.f,A.dZ)},
bzV(d,e,f){return this.aMv(d,e,null,f)},
bJ0(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dgk
else if(v==="hati_kuhoweya")w=D.d1P
else{if(v==="hati_kiapo_uongozi")v=D.cPu
else v=C.kw(v)?D.cWE:A.Q9
w=v}v=this.fy
v===$&&B.c()
return B.c7(v,new C.eqs(this,f,d,e,w),null)},
c2c(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jW()
if(i==null||i.b!==D.cP)return A.bI
w=k.Wy(i)
v=k.at9(i)
u=A.w.j(0.55)
t=x.p
s=B.bl(!1,new B.D(A.Bb,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b4,B.bK(!1,D.fvs,j,j,!0,j,j,new C.erT(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.ae,!0,!0)
r=d?A.au:A.c
q=B.n(18)
p=B.I(A.bi.j(0.45),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.h8,B.c0(new B.D(A.eR,B.aM(j,A.U,!0,j,!0,A.r,j,B.aN(),w,A.bi,j,j,j,j,2,D.bU8,A.y,!0,j,!0,j,!0,v,A.aj,j,j,j,j,j,A.wv,j,j,j,j,j,j,!1,"\u2022",j,new C.erU(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.aa,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a4,A.zG,A.an,j,A.Tu,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.be),j),1)
q=B.n(16)
p=d?A.bl:A.c
o=B.I(d?A.aJ:A.aL,A.q,1)
n=B.E(B.cc(B.B(B.a([k.tY(G.N8,j,new C.erV(k,i),d),k.tY(G.a_C,j,new C.erW(k,i),d),k.tY(I.alI,j,new C.erX(k,i),d),k.tY(I.a0h,j,new C.erY(k,i),d),k.tY(k.bzT(i.as),j,new C.erZ(k,i),d),k.tY(D.amQ,j,new C.es_(k,i),d),k.tY(D.amP,j,new C.es0(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.r,j,A.y,j,j,j,j,A.aN),1)
m=A.k.N(i.w)
return B.bT(0,B.aF(!1,A.a1,!0,j,B.w(B.a([s,r,new B.D(H.ahy,B.p(j,B.B(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aA:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.db],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.ln,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ag),0,0,0)},
c2b(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jW()
if(m==null)return A.bI
w=m.b
v=w===D.cP
u=B.n(18)
t=x.O
t=d?B.a([A.bl,A.M],t):B.a([A.c,A.aO],t)
s=B.I(d?A.aJ:A.aL,A.q,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cz,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b3P(A.jp,"Edit",new C.erE(o,m),d,!0))
if(w===D.lz)p.push(o.b3P(A.Gt,"Shape & ring",new C.erF(o),d,!0))
p.push(o.tY(A.BZ,"Format",new C.erG(o),d))
if(v)A.d.v(p,B.a([o.tY(G.N8,n,new C.erH(o,m),d),o.tY(D.amQ,n,new C.erI(o,m),d),o.tY(D.amP,n,new C.erJ(o,m),d)],q))
p.push(A.b4)
p.push(o.cr7(A.ef,n,o.gaQv(),d,!0))
p.push(o.tY(A.hA,"Done",new C.erK(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a8(A.a3,A.a8,A.x,t,n,n),A.n),n,n,n,A.B9,A.ln,n,n,n)},
bzT(d){switch(d.a){case 2:return D.a0e
case 1:case 5:return D.a0g
default:return D.a0f}},
c35(d){switch(d.a){case 0:case 4:return A.L
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
return new B.D(A.pX,B.aF(!1,A.a1,!0,n,B.aK(!1,v,!1,B.eB(new B.D(new B.Q(q,8,q,8),B.B(o,A.m,n,A.e,A.Q,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ag),n)},
tY(d,e,f,g){return this.azs(d,e,f,g,!1,!1)},
b3P(d,e,f,g,h){return this.azs(d,e,f,g,h,!1)},
cr7(d,e,f,g,h){return this.azs(d,e,f,g,!1,h)},
bMG(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.n(20),m=x.O
m=e?B.a([A.bl,A.M],m):B.a([A.c,A.mR],m)
w=B.I(e?A.aJ:A.nI,A.q,1.2)
v=B.a([new B.ac(0,A.G,A.bi.j(e?0.18:0.1),A.cz,18)],x.V)
u=p.a2s(A.eF,"Back",p.gbG6(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.db,B.E(B.B(B.a([new B.dq(1,A.cm,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.c_:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.tx,o,A.e,A.j,0,A.cV,o),1)],q)
if(!p.kj()){u=p.a2s(A.rf,"Undo",p.ax.length===0?o:p.gcAS(),e)
A.d.v(r,B.a([u,p.a2s(D.bHK,"Redo",p.ay.length===0?o:p.gcmk(),e)],q))}r.push(p.a2s(A.ye,"PDF",new C.eqM(p),e))
r.push(p.a2s(A.hB,"Download as video",new C.eqN(p),e))
if(!p.kj())r.push(B.BV(o,o,B.X(A.o1,e?A.ad:A.bq,o,o,o,o),new C.eqO(p),A.J,new C.eqP(p),A.ae,"More",x.N))
r.push(A.db)
r.push(B.aF(!1,A.a1,!0,o,B.aK(!1,B.n(14),!0,B.eB(D.ecq,o,new B.o(o,o,o,B.n(14),o,L.GP,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaAg(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ag))
return B.p(o,B.B(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a8(A.ay,A.aC,A.x,m,o,o),A.n),o,o,o,D.bsY,D.by6,o,o,o)},
cAj(d){var w=this,v=null,u=B.n(18),t=d?A.au.j(0.92):A.c.j(0.96),s=B.I(d?A.co:A.aL,A.q,1)
return B.p(v,B.cc(B.B(B.a([w.iP(A.u4,"Print",new C.ev3(w),d),w.iP(A.ye,"Download PDF",new C.ev4(w),d),w.iP(A.q6,"Present",w.gaAg(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.r,v,A.y,v,v,v,v,A.aN),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.B8,G.aja,v,v,v)},
a2s(d,e,f,g){var w,v=null
if(f==null)w=g?A.b1:A.dq
else w=g?A.ad:A.aJ
return B.aI(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cc)},
c2g(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.n(18)
v=d?A.au.j(0.92):A.c.j(0.96)
u=B.I(d?A.co:A.aL,A.q,1)
t=x.f0
t=B.C(new B.M(p,new C.es3(r,d),t),t.k("ak.E"))
t.push(new B.D(X.aiQ,new B.fg(new C.es4(r),q),q))
A.d.v(t,w?B.a([new B.D(R.vE,r.agR(A.lp,"Ending celebration",r.gccy(),d),q),new B.D(R.vE,r.agR(A.Gt,"Logo ring & frame",r.gcde(),d),q)],x.p):A.jL)
A.d.v(t,w?B.a([new B.D(R.vE,r.agR(A.nh,"Look and feel",r.gcdf(),d),q),new B.D(R.vE,r.agR(A.p_,"Edit this slide's text",r.gcdM(),d),q)],x.p):A.jL)
t.push(new B.D(R.vE,B.ho(B.aB(q,B.p(q,D.eQx,A.f,q,q,new B.o(q,q,q,B.n(999),B.a([new B.ac(0,A.G,O.li.j(0.4),A.J,10)],x.V),D.aoM,A.n),q,34,q,q,A.fY,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.es5(r),q,q,q,q,q,q,!1,A.a7),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cc(B.B(t,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,D.byz,q,q,A.aN)
s=e?8:10
return B.p(q,B.w(B.a([t,B.cc(r.coM(d),A.r,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aN)],x.p),A.ai,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.B8,q,q,q,q)},
coM(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.d9R[v]
u.a=null
s=u.a=t.b
w.push(e.lH(e.cqx(s),t.a,new C.ets(u,e),a3,D.aNF.q(0,s)))}w.push(e.iP(A.l_,"Notes Slide",new C.ett(e),a3))
w.push(e.lH(A.Gs,"Quiz",new C.etu(e),a3,!0))
w.push(e.lH(M.G4,"Worksheet",new C.etF(e),a3,!0))
w.push(e.lH(W.Gy,"Flashcard",new C.etQ(e),a3,!0))
w.push(e.lH(A.NW,"Lab Report",new C.eu0(e),a3,!0))
w.push(e.lH(A.tX,"Rubric",new C.eu7(e),a3,!0))
w.push(e.lH(A.oU,"Minutes",new C.eu8(e),a3,!0))
w.push(e.lH(A.o0,"Syllabus",new C.eu9(e),a3,!0))
w.push(e.lH(A.a0N,"Timeline",new C.eua(e),a3,!0))
return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.db9[v]
w.push(e.lH(r.b,r.c,new C.eub(e,r),a3,!D.aNL.q(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.B(B.a([e.iP(A.yx,a0,e.gaMc(),a3),e.iP(A.u1,"Picture",new C.etv(e),a3),e.iP(A.yr,"Bio link",new C.etw(e),a3),e.iP(A.a0M,"Table",new C.etx(e),a3),e.iP(A.O_,"Sticky",new C.ety(e),a3),e.iP(A.u0,"Divider",new C.etz(e),a3),e.iP(A.C_,"Header",new C.etA(e),a3),e.lH(A3.vN,"Rectangle",new C.etB(e),a3,!0),e.lH(A.r8,"Circle",new C.etC(e),a3,!0),e.lH(A.a07,"Triangle",new C.etD(e),a3,!0),e.lH(A.lo,"Arrow",new C.etE(e),a3,!0),e.lH(D.bGd,"Parallelogram",new C.etG(e),a3,!0),e.lH(D.bIC,"Hexagon",new C.etH(e),a3,!0),e.lH(A.u0,"Line",new C.etI(e),a3,!0),e.lH(A.ye,"PDF",new C.etJ(e),a3,!0),e.lH(O.a0W,"Signature",new C.etK(e),a3,!0),e.iP(A2.BN,"Quote",new C.etL(e),a3),e.iP(D.a_K,a1,new C.etM(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aH(w,A.bW,x.w).w
u=x.p
t=B.B(B.a([e.aN0("Wide 16:9",D.CQ,a3),e.aN0("Short 9:16",D.od,a3),new B.D(A.fB,B.mJ(D.bKL,d,D.frO,d,new C.etN(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.B(B.a([e.bGl("This slide",!e.Q,a3,new C.etO(e)),A.bp,e.aPb("All slides",e.Q,a3,new C.etP(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bGm()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c_:A.bK,d,d,d,d,d,d,d,d,10,d,d,A.a6,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.M(D.a2O,new C.etR(e),n),n.k("ak.E"))
n=B.cc(B.B(n,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aN)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.dc9[v]
j=B.b0(k)
i=new B.az(k===4294967295?A.dq:A.b1,1.5,A.q,-1)
l.push(new B.D(A.fB,B.aB(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bO(i,i,i,i),d,d,d,A.a5),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.etS(e,k),d,d,d,d,d,d,!1,A.a7),d))}l=B.cc(B.B(l,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aN)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bDb()
g=B.T(h).k("M<1,D>")
h=B.C(new B.M(h,new C.etT(e,a3),g),g.k("ak.E"))
return new B.a7(w.a.a-20,d,B.w(B.a([t,A.N,q,A.am,p,A.N,o,A.av,n,A.N,m,A.av,l,A.N,j,A.av,B.cc(B.B(h,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aN),A.am,e.c_2(a3)],u),A.F,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.jW()
w=e.c
w.toString
w=B.aH(w,A.bW,x.w).w
u=new C.etr(e)
t=new C.euc(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.Qz,f.dy,new C.etU(e,u,f),A.aZ)
A.d.v(p,B.a([o,A.av,n,A.N,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.av],q))}q=e.gdt()
q=q==null?d:q.r
p.push(t.$4(D.Qz,q,new C.etV(e,u),A.bi))
return new B.a7(w.a.a-20,d,B.w(p,A.F,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.iP(A.l_,w,new C.etW(e),a3),e.iP(A.u4,"Print deck",new C.etX(e),a3),e.lH(D.akL,"Export JSON",new C.etY(e),a3,!0),e.iP(A.fM,"Duplicate Slide",e.gaRn(),a3),e.iP(A.ef,a2,e.gaQw(),a3),e.cuE(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jW()
w=x.p
u=B.a([e.iP(D.a_K,a1,new C.etZ(e),a3),e.iP(A.fM,"Duplicate",e.gaRn(),a3),e.iP(A.ef,a2,e.gaQw(),a3),e.iP(A.q6,"Present",e.gaAg(),a3),e.iP(A.BX,a0,e.gaMc(),a3),e.iP(A.BR,"Fit Text",new C.eu_(e),a3),e.iP(A.ye,"Download PDF",new C.eu1(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iP(A.k9,"Transfer",new C.eu2(e),a3))
if(f!=null){w=B.a([A.ab,e.iP(G.N8,"Bold",new C.eu3(e,f),a3),e.iP(G.a_C,"Italic",new C.eu4(e,f),a3),e.iP(G.akm,"Underline",new C.eu5(e,f),a3),e.iP(Ad.N9,"Bullets",new C.eu6(e,f),a3),e.bP7(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bMK(a3))
w.push(e.iP(D.bET,"Delete",e.gaQv(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.j,0,d,d)}},
aN0(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.od
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a8x,t,t,t)],v)
if(w)A.d.v(u,B.a([A.db,D.bJX],v))
return new B.D(A.fB,B.j9(t,t,t,B.B(u,A.m,t,A.e,A.Q,0,t,t),t,new C.epR(this,w,e),s===e,A.bi.j(0.25),t,t,t),t)},
cuE(d){var w,v,u,t,s,r=this,q=null,p=r.gdt()
if(p==null)return A.bI
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.b1:A.cr,A.q,1)
u=B.n(8)
t=B.X(A.G2,d?A.aA:A.ak,q,q,q,14)
s=B.aI(q,q,q,q,D.anM,q,q,q,new C.euz(r,p),q,q,q,q,q,A.cc)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bj,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aI(q,q,q,q,D.anD,q,q,q,new C.euA(r,p),q,q,q,q,q,A.cc)],x.p),A.m,q,A.e,A.Q,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.FJ,A.mu,q,q,q)},
cqx(d){switch(d.a){case 6:return W.Gy
case 7:return A.Gs
case 8:return M.G4
case 4:return A.C_
default:return A.l_}},
bP7(d,e){var w=null,v=B.I(e?A.b1:A.cr,A.q,1),u=B.n(8),t=B.aI(w,w,w,w,D.anM,w,w,w,new C.eqZ(this,d),w,w,w,w,w,A.cc),s=A.k.N(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bj,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aI(w,w,w,w,D.anD,w,w,w,new C.er_(this,d),w,w,w,w,w,A.cc)],x.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.vD,A.mu,w,w,w)},
c_2(d){var w=null
return B.BV(B.Dj(B.X(A5.a_N,d?A.ad:A.bq,w,w,w,16),w,w,D.fxh,w,w,w),w,w,new C.erw(),A.J,this.gbAA(),A.cp,"Slide layout",x.fO)},
lH(d,e,f,g,h){var w=null,v=B.n(14),u=B.n(14),t=g?A.c.j(0.06):A.bM,s=B.I(g?A.dB:A.aL,A.q,1),r=x.p,q=B.a([B.X(d,g?A.dr:A.bi,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.O4,A.f,w,w,D.E9,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fB,B.aF(!1,A.a1,!0,w,B.aK(!1,v,!0,B.eB(new B.D(A.h8,B.w(B.a([new B.an(A.V,w,A.a9,A.f,q,w),A.cQ,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aQ:A.bq,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.Q,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w)},
iP(d,e,f,g){return this.lH(d,e,f,g,!1)},
b5a(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aN
v=B.hM(t,new C.euL(u,s,e,d),s.r.length,A.cp,t,w,new C.euM(e),!1)
s=d?A.au:A.bM
w=B.a([],x.p)
if(e&&!u.kj())w.push(new B.D(A.cp,B.HJ(E.anZ,new C.euN(u),B.nC(t,A.bi,t,t,t,t,t,t,t,t,t,t,E.aOp,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.w(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bEl(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.od?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.Q(u,u,u,u),new B.bI(A.b2,v,v,new B.fK(w,B.aB(v,B.cA(new C.eqf(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eqg(this),v,v,v,v,v,v,!1,A.a7),v),v),v)},
bEn(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kw(a9.w))===!0,b1=b0&&C.fBs(b3),b2=b0&&b3.b===D.l6&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.kj())v=!b0||a7.c1k(b3)
else v=!1
if(!a7.kj())u=!b0||a7.c1j(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.c9:A.bi
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.h_t(b3))o=a8
else if(p&&!a7.kj())o=a7.gc94()
else o=a7.kj()?a8:new C.eq3(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.ch:A.jG
i=w&&C.h_t(b3)&&a7.zR()?new C.eq4(a7,b3):a8
h=v&&b3.b===D.cP?new C.eq5(a7,b3):a8
g=u?new C.eq6(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bc
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
a4=a3?a7.Wy(b3):a8
a5=a3?a7.at9(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aH(a6,A.bW,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eq7(a7,b3):a8
a3=v&&a3?new C.eq8(a7,b3):a8
a6=C.b0A(q,a4,a1,b3,a5,a2,a3,new C.eq9(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.n(6)
d.push(B.ao(-4,B.aB(a8,B.p(a8,D.bMM,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.q,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eqa(a7,b3,b4,b5),a8,a8,new C.eqb(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kj()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aB(a8,B.p(a8,D.bNs,A.f,a8,a8,new B.o(A.ds,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a5),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbXE(),a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kj()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aB(a8,B.p(a8,D.bP0,A.f,a8,a8,new B.o(A.bZ,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a5),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eqc(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cP)if(a7.w!==a9){e=a7.c
e.toString
e=B.aH(e,A.bW,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.au(B.aB(a8,B.p(a8,D.fG7,A.f,a8,a8,new B.o(A.bi,a8,a8,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kX,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eqd(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aB(j,B.eE(A.A,f,new B.an(A.V,a8,A.a9,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a7),k*b5,new B.cw("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aPb(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bi.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.n(10)
u=B.I(e?A.bi:A.bD,A.q,1)
if(e)t=A.bi
else t=f?A.aA:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.db,B.p(r,D.O4,A.f,r,r,D.E9,r,12,r,r,r,r,r,12)],s))
return B.aB(r,B.p(r,B.B(t,A.m,r,A.e,A.Q,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h7,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a7)},
bGl(d,e,f,g){return this.aPb(d,e,f,g,!1)},
c8Q(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.S$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.ar(new B.bb(v,A.b3,A.aM),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.au:A.aO
t=f?A.x_:l
if(f)s=new B.bO(new B.az(e?A.bD:A.aL,1,A.q,-1),A.W,A.W,A.W)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rz,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.bq,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b4,m.b0d(e,new C.es7(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aJ,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c_:A.bK,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.w(B.a([p,A.am,B.E(B.aM(l,A.U,!1,l,!0,A.r,l,B.aN(),k,l,l,l,l,l,2,B.bs(l,new B.b4(4,B.n(10),A.dj),l,A.bT,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.es8(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.aa,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a4,l,A.an,l,l,l,l),1)],q),A.ai,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aSE(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jW()
if(a2==null)return A.bI
w=new C.erc(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dT:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b4,a0.b0d(a3,a0.gbKR())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.R)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.fsi,B.E(B.l_(a1,a1,a1,u,0.05,new C.erd(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.B(B.a([D.fEz,B.E(B.l_(a1,a1,a1,t,0.05,new C.ere(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cP
if(m)o.push(B.B(B.a([D.fm4,B.E(B.l_(a1,a1,a1,96,10,new C.erf(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lz
if(l||n===D.l6||n===D.RW)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.fy0,B.E(B.l_(a1,a1,a1,s,0,new C.erg(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.B(B.a([D.fFQ,B.E(B.l_(a1,a1,a1,r,0,new C.erh(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.Ci[j]
i.a=null
g=h.a
i.a=g
k.push(B.j9(a1,a1,a1,new B.y(h.b,a1,A.pj,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.eri(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bZ(A.bC,k,A.br,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.Cd[j]
f.a=null
g=e.a
f.a=g
h.push(B.j9(a1,a1,a1,new B.y(e.b,a1,A.pj,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.erj(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.N,l,A.am,k,A.N,i,A.am,B.bZ(A.bC,h,A.br,6,6)],p))}o.push(A.N)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.M(v,new C.erk(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.am,B.bZ(A.bC,l,A.br,6,6),A.ac,B.hbB(new C.erl(w,a2),D.cqx,B.eC([a2.as],k),!0,a1,k)],p))}if(n===D.f5){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.M(v,new C.erm(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bZ(A.bC,m,A.br,0,6)],p))}o.push(A.ac)
o.push(B.dn(D.bON,D.fA2,new C.ern(a0,a5),B.bm(A.bx,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cy(o,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.co:A.c
p=a4?A.x_:a1
if(a4)o=new B.bO(new B.az(a3?A.bD:A.aL,1,A.q,-1),A.W,A.W,A.W)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rz,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.Fr,a1,a1,a1)},
bPo(d){return this.aSE(d,!1,!1,null)},
c85(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c7(p,new C.erq(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.fc4,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bd,B.E(B.w(B.a([w,A.bz,A.cQ,r.bzV(D.cU6,d,B.P(v).ax.a===A.I)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dU(B.ho(B.aF(!1,A.a1,!0,q,B.aK(!1,q,!0,B.eB(D.eWp,q,new B.o(q,q,B.I(A.c.j(0.55),A.q,1.3),q,B.a([new B.ac(0,A.G,A.bZ.j(0.4),A.em,8)],p),D.aoR,A.a5),q,q,q),A.cK,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,"Documents (Hati)",q,q),A.J)],u))
t=B.B(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.P(w).ax.a===A.I
w=B.n(20)
v=x.O
v=s?B.a([D.b8F,D.b93],v):B.a([A.c,A.kv],v)
u=B.I(d.j(s?0.45:0.25),A.q,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cz,14)],p),new B.a8(A.ay,A.aC,A.x,v,q,q),A.n),q,q,q,q,A.bT,q,q,q)},
aLW(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c7(w,new C.ep_(this,g,d,e,f),null)},
agd(d,e){return this.ckA(d,e)},
ckA(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$agd=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.ar(new B.bb(e,A.b3,A.aM),r)
p=t.c
p.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.et4(d,q),p,null,!0,!0,x.N),$async$agd)
case 3:s=g
q.S$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$agd,v)},
PT(d){var w=d.bU()
return""+B.bH(w)+"/"+B.bR(w)+"/"+B.bA(w)}}
C.aeS.prototype={}
C.ayx.prototype={
U(){return new C.bc6(null,null)}}
C.bc6.prototype={
gcwT(){var w,v=this.a.c,u=v.f.bU(),t=""+B.bH(u)+"/"+B.bR(u)+"/"+B.bA(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
a_(){var w,v=this,u=null
v.a1()
w=B.bj(u,A.pU,u,1,u,v)
w.fh(0,!0)
v.d!==$&&B.aP()
v.d=w
w=B.bj(u,D.brt,u,1,u,v)
w.cr(0)
v.e!==$&&B.aP()
v.e=w},
t(){var w=this.d
w===$&&B.c()
w.t()
w=this.e
w===$&&B.c()
w.t()
this.btq()},
J0(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.ct.au(0,new B.hT(w,v,A.ct).au(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.au(new B.D(D.bwY,B.c7(new B.h9(B.a([u,w],x.dS)),new C.d0V(this),v),v),v,v,v)}}
C.bck.prototype={
B(d){var w=null,v=B.n(22),u=B.I(A.aJ,A.q,1),t=x.p
return B.au(new B.D(D.bxe,B.aF(!1,A.a1,!0,w,B.p(w,B.bw(B.n(22),B.w(B.a([new B.D(D.bwp,B.w(B.a([B.p(w,D.bNy,A.f,w,w,new B.o(A.aw.j(0.12),w,w,B.n(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aP,D.fCa,A.R,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fdd,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dY,D.bqw,B.B(B.a([B.E(B.bK(!1,D.fqy,w,w,!0,w,w,new C.d1g(d),w,B.fx(w,w,w,w,w,w,w,w,w,w,w,A.bK,w,w,w,w,w,A.na,w,A.oh,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bl,w,w,w,48,w,w,w,w,w,1),B.E(B.bK(!1,D.fvN,w,w,!0,w,w,new C.d1h(d),w,B.fx(w,w,w,w,w,w,w,w,w,w,w,A.aw,w,w,w,w,w,A.na,w,A.oh,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.Q,0,A.p),A.aq),A.f,w,A7.Vy,new B.o(A.au,w,u,v,D.cUr,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w),w,w,w)}}
C.JK.prototype={
U(){return new C.bc5()}}
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
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dD,8)],t)
s=m.j(l?0.16:0.14)
r=B.n(9)
q=p.a
r=B.p(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dU(B.db(B.aB(o,B.vs(B.de(o,B.B(B.a([r,A.at,new B.dq(1,A.cm,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f1:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b7,A.Q,0,o,o),o,o,A.bb,new B.o(n,o,u,v,t,o,A.n),A.eJ,o,o,o,A.nb,o,o,1/0),A.ct,A.jl,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d0Q(p,d),new C.d0R(p),new C.d0S(p),new C.d0T(p),o,o,o,!1,A.a7),k),new B.x(0,(1-k)*16))}}
C.Pw.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.n(16),s=B.n(16),r=B.n(14),q=B.I(A.c.j(0.5),A.q,1.2),p=x.p
return B.aF(!1,A.a1,!0,t,B.aK(!1,s,!0,new B.D(A.eR,B.B(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a8(A.ay,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.eo,B.E(B.w(B.a([B.d(w.e,v,v,v,v,v,v,A.nw,v,v,v),A.bz,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.X(A.eA,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ag)}}
C.a_f.prototype={
U(){return new C.aDY(D.df,null,null)}}
C.aDY.prototype={
gYN(){var w,v=this,u=v.w
if(u===$){w=B.bj(null,D.br2,null,1,null,v)
v.w!==$&&B.bL()
v.w=w
u=w}return u},
b5B(d){if(!this.a.c.ay)return
this.x=d
this.gYN().iJ(0,0)},
a_(){var w,v=this
v.a1()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.avr(D.f1P)
C.i2j()
v.Rh()},
t(){var w=this,v=w.f
if(v!=null)v.a7(0)
w.gYN().t()
v=w.z
if(v!=null)v.a7(0)
C.avr(D.f1Q)
C.i2m()
w.bvp()},
czF(){B.jB()
this.m(new C.evK())
var w=this.c.I(x.q).f
w.a4D()
if($.bjG)w.R(D.eZG)},
Rh(){var w,v=this,u=v.f
if(u!=null)u.a7(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cM(B.dD(0,0,0,0,0,A.o.D(C.h9M(u,w),1,120)),new C.evA(v))},
czk(){var w,v=this
v.m(new C.evJ(v))
if(v.r)v.Rh()
else{w=v.f
if(w!=null)w.a7(0)}},
gaUy(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cto(){var w=this,v=w.f
if(v!=null)v.a7(0)
w.m(new C.evB(w))
v=w.z
if(v!=null)v.a7(0)
if(w.a.c.ch&&w.r)w.z=B.cM(A.ll,new C.evC(w))},
aw_(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a7(0)
if(u.a.c.ch){u.m(new C.evw(u))
u.Rh()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaUy()){u.cto()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.evx(u,A.o.F(w+1,s)))
u.b5B(w)
u.Rh()}},
cje(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a7(0)
v.m(new C.evy(v))
v.Rh()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.evz(v,w,t))
v.b5B(w)
v.Rh()}},
cuQ(d){var w,v=this,u=v.e
if(u===D.cl){u=v.d
u===$&&B.c()
return new B.nh(d,new B.cw(u,x.ac))}w=v.cuR(u)
u=v.d
u===$&&B.c()
return B.ql(new B.nh(d,new B.cw(u,x.ac)),w,new C.evH(),A.bb,A.bb,new C.evI(v))},
cuR(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.brp
case 16:return A.ky
case 18:return A.n6
default:return A.n8}},
cuP(d,e,f){var w,v,u,t=null,s=B.cH(A.ct,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d_(s,!1,e,t)
case 2:case 17:w=x.K
return B.jq(e,new B.bf(s,new B.bp(A.uA,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 3:w=x.K
return B.jq(e,new B.bf(s,new B.bp(A.Sb,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 4:case 21:w=x.K
return B.jq(e,new B.bf(s,new B.bp(A.it,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 5:w=x.K
return B.jq(e,new B.bf(s,new B.bp(A.uz,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 6:case 16:w=x.b
return B.iq(A.A,new B.d_(s,!1,e,t),t,new B.bf(s,new B.bp(0.82,1,w),w.k("bf<bJ.T>")))
case 7:w=x.b
return B.iq(A.A,new B.d_(s,!1,e,t),t,new B.bf(s,new B.bp(1.18,1,w),w.k("bf<bJ.T>")))
case 8:return B.c7(s,new C.evD(s),e)
case 9:return B.c7(s,new C.evE(s),e)
case 10:return B.c7(s,new C.evF(s),e)
case 11:return B.c7(s,new C.evG(s),e)
case 12:w=x.b
return new B.d_(s,!1,B.iq(A.A,e,t,new B.bf(s,new B.bp(1.03,1,w),w.k("bf<bJ.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jx(B.jq(e,new B.bf(s,new B.bp(A.uA,A.J,v),v.k("bf<bJ.T>")),t,!0),A.r,new C.bqI(w,t))
case 15:w=x.K
return B.jq(e,new B.bf(s,new B.bp(A.Sb,A.J,w),w.k("bf<bJ.T>")),t,!0)
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
u=B.jx(new C.ao3(B.c7(n.gYN(),new C.evL(n,v,w),m),m),A.r,m)}else{t=B.rF(new C.II(w,!0,!1,m))
l=B.b0(w.e)
u=n.cuQ(B.el(B.jx(t,A.r,m),l,!0))}l=B.n(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.h9M(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.or,m,m,m),A.bp,D.bPR],k),A.m,m,A.e,A.Q,0,m,m),A.f,m,m,new B.o(A.aW,m,m,l,m,m,A.n),m,m,m,m,A.fX,m,m,m)
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
l.push(B.bT(0,new C.Nq(new C.Eu(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.od?0.5625:1.7777777777777777
l.push(B.au(new B.fK(r,B.jx(B.uv(A.ae,u,!0,4,1,!0,!0,m),A.r,m),m),m,m,m))}if(!$.bjG){r=B.HJ(A.l3,new C.evM(d),B.nC(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bl(!0,B.B(B.a([r,A.ab,B.HJ(B.X(n.r?Aj.yq:A.j2,m,m,m,m,m),n.gczj(),B.nC(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.ae,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.n(20)
k.push(B.ao(16,B.bl(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.hq,m,m,m),A.f,m,m,new B.o(A.aW,m,m,r,m,m,A.n),m,m,m,m,A.fX,m,m,m),!0,!1,A.ae,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bl(!0,B.aB(A.ch,B.p(A.le,$.bjG?A.bI:s,A.f,m,m,m,m,64,m,m,D.bs9,m,m,150),A.y,!1,m,n.gczE(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a7),!0,!1,A.ae,!0,!0),m,m,m,0,0,m))
return B.c6(m,A.w,B.aB(m,new B.an(A.V,m,A.b0,A.r,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.evN(n,d),m,m,m,!1,A.a7),m,!1,!1,m,m)}}
C.JR.prototype={
B(d){var w=null
return B.p(w,B.bl(!0,new B.D(E.aiC,this.c,w),!0,!1,A.ae,!0,!1),A.f,w,w,D.b1s,w,w,w,w,w,w,w,w)}}
C.bqI.prototype={
jd(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jT(d){return d.b!==this.b}}
C.bgV.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.n(999)
break A}if("rounded"===q){w=B.n(18)
break A}if("arch"===q){w=D.aZe
break A}w=B.n(6)
break A}v=s.e
u=B.I(v?A.aF:A.K,A.q,2.5)
if(q==="circle")t=B.n(999)
else t=B.n(q==="rounded"?9:3)
w=B.de(r,B.au(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.w4,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.bb,new B.o(s.f,r,u,w,r,r,A.n),A.hw,r,64,r,r,r,r,64)
return B.aB(r,new B.a7(78,r,B.w(B.a([w,A.am,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aF:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a7)}}
C.bgU.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dp2.h(0,p)
if(o==null)o=D.dbj
p=p==="none"
w=p?q:new B.a8(A.a3,A.a8,A.x,o,q,q)
p=p?A.cU.j(0.25):q
v=r.e
u=v?B.I(A.aF,A.q,2.5):q
t=r.r.j(0.15)
s=v?I.an0:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a5),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a5),q,52,q,q,A.ev,q,q,52)
return B.aB(q,new B.a7(66,q,B.w(B.a([w,A.am,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aF:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a7)}}
C.aJF.prototype={
aW(){this.b6()
this.b5()
this.dI()},
t(){var w=this,v=w.b2$
if(v!=null)v.a4(0,w.gdD())
w.b2$=null
w.a2()}}
C.aLy.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.bwn.prototype={}
C.aLz.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a4(0,w.gbE())
w.aa$=null
w.a2()},
aW(){this.b6()
this.b5()
this.bF()}}
C.b0D.prototype={}
C.VM.prototype={
U(){return new C.aDW()},
bgd(d){return this.e.$1(d)}}
C.aDW.prototype={
gb3V(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gaan(){var w,v
if(this.d==="all")return B.bn(this.a.d,!0,x.I)
w=this.gb3V()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaNR(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb3V()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb59(){return A.d.cM(this.gaan(),0,new C.evg())},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w.length!==0)v.e=A.d.gH(w).a
v.QT()},
QT(){var w=0,v=B.j(x.H),u,t=this,s
var $async$QT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b1e(s.c,s.f),$async$QT)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.evc(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$QT,v)},
J2(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$J2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gaan()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.L)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fEE(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.p8(o,q.c,q.f),$async$J2)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.e9(new C.evf(t,p),!1,null,x.H)
w=4
return B.b(B.a4(o,!1).cm(q),$async$J2)
case 4:q=t.a
w=5
return B.b(B.p7(q.c,q.f),$async$J2)
case 5:w=6
return B.b(t.QT(),$async$J2)
case 6:case 1:return B.h(u,v)}})
return B.i($async$J2,v)},
Rf(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Rf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hE(o,D.e1g,!0,"NgmySlidesTransferScan",x.N),$async$Rf)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.evd(t))
w=4
return B.b(C.ah5(s),$async$Rf)
case 4:r=e
t.m(new C.eve(t))
o=J.a3(r)
if(o.gal(r)){o=t.c
if(o==null){w=1
break}o.I(x.q).f.R(D.eYx)
w=1
break}w=5
return B.b(t.a.bgd(r),$async$Rf)
case 5:q=t.c
if(q==null){w=1
break}B.a4(q,!1).O(null)
q=t.c.I(x.q).f
p=o.gL(r)
o=o.gL(r)===1?"":"s"
q.R(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Rf,v)},
J1(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$J1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gaan()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.p8(s,r.c,r.f),$async$J1)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fET(null,A.d.gH(n),s,t.a.f)}else q=C.fET(n,null,r.c,r.f)
if(n.length===1){s=A.d.gH(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aL(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Gp(q,"ngmy_slides_"+p,!1),$async$J1)
case 4:o=e
s=t.a
w=5
return B.b(B.p7(s.c,s.f),$async$J1)
case 5:w=6
return B.b(t.QT(),$async$J1)
case 6:s=t.c
if(s==null){w=1
break}s.I(x.q).f.R(B.b2(null,null,null,null,null,A.r,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$J1,v)},
a2D(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2D=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.evh(t))
w=3
return B.b(C.bBC(),$async$a2D)
case 3:s=e
t.m(new C.evi(t))
if(s==null||J.cm(s)){w=1
break}w=4
return B.b(t.a.bgd(s),$async$a2D)
case 4:r=t.c
if(r==null){w=1
break}B.a4(r,!1).O(null)
r=t.c.I(x.q).f
q=J.a3(s)
p=q.gL(s)
q=q.gL(s)===1?"":"s"
r.R(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a2D,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.dc:A.bM,k=o.gaan().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.c_(A.A,0.5,A.x,n,0,B.a([A.bi.j(0.22),A.K],x.O),n,n),A.a5),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aI(n,n,n,n,B.X(A.cy,m?A.ad:A.ak,n,n,n,n),n,n,n,new C.evl(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.zE],h),A.m,n,A.e,A.j,0,n,n)
w=B.n(24)
v=B.a([new B.ac(0,A.G,A.bi.j(0.35),A.eV,24)],x.V)
u=B.ao(n,B.X(A.q1,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.n(16)
s=B.a([u,B.B(B.a([B.p(n,D.bQn,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.q,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.eo,B.E(B.w(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.av,D.bBe],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.ho(B.aB(A.ch,D.eWr,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcdY(),n,n,n,n,n,n,!1,A.a7),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.V,n,A.a9,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a1r,A.n),n,n,n,n,E.Zf,n,n,1/0),A.dY,o.axa(m,"What to transfer"),A.ac,B.B(B.a([B.E(o.aWQ(A.q6,m,new C.evm(o),o.d==="one","Pick a single deck","One presentation"),1),A.at,B.E(o.aWQ(D.bG6,m,new C.evn(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d7,o.axa(m,"Choose presentation"),A.R],h)
u=o.a.d
if(u.length===0){u=m?A.au:A.c
t=B.n(16)
s=B.I(m?A.bD:A.aL,A.q,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aA:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bQ,n,n,n))}else A.d.v(v,new B.M(u,new C.evo(o,m),B.T(u).k("M<1,t>")))
A.d.v(w,v)}w.push(A.mJ)
w.push(o.axa(m,"Transfer options"))
w.push(A.ac)
w.push(B.B(B.a([B.E(o.apR(A.aR,k,!0,A.jr,m,o.r,o.gc89(),"Scan on another device","Show QR"),1),A.at,B.E(o.aLX(A.k_,!0,A.j3,m,o.gcq6(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.R)
w.push(B.B(B.a([B.E(o.byp(A.aV,k,A.hB,m,o.r,o.gc86(),"Download .json","Backup file"),1),A.at,B.E(o.aLX(A.aE,!0,Av.yy,m,o.gcC7(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bi.j(m?0.12:0.08)
u=B.n(16)
t=B.I(A.bi.j(0.28),A.q,1)
s=B.X(A.lr,A.bi.j(0.9),n,n,n,18)
r=o.gaNR()
q=o.gb59()
p=o.gb59()===1?"":"s"
A.d.v(w,B.a([A.bw,B.p(n,B.B(B.a([s,A.at,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.bq,n,n,n,n,n,n,n,n,12,n,n,A.a6,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bE,n,n,n)],h))}j=B.a([j,B.bl(!0,B.w(B.a([new B.D(Af.MK,i,n),B.E(B.cy(w,n,D.bvy,n,n,A.ah,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.ae,!0,!0)],h)
if(o.f)j.push(B.p(n,T.VR,A.f,A.dI,n,n,n,n,n,n,n,n,n,n))
return B.c6(n,l,new B.an(A.V,n,A.a9,A.r,j,n),n,!1,!1,n,n)},
afn(){var w=0,v=B.j(x.H),u=this,t,s
var $async$afn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.i8G(s,t.d,t.e),$async$afn)
case 2:return B.h(null,v)}})
return B.i($async$afn,v)},
axa(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bi,w,w,B.n(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aA:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aWQ(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.n(18),q=B.n(18),p=e?A.au:A.c
if(g)w=A.bi
else w=e?A.bD:A.aL
w=B.I(w,A.q,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bi.j(0.2),A.cz,14)],x.V):s
u=A.bi.j(g?0.2:0.1)
t=B.n(12)
t=B.p(s,B.X(d,A.bi,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cp,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aF(!1,A.a1,!0,s,B.aK(!1,r,!0,B.eB(new B.D(A.bE,B.w(B.a([t,A.R,u,A.bz,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag)},
bJ_(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.n(16),n=e?A.au:A.c,m=B.n(16)
if(p)w=A.bi
else w=e?A.bD:A.aL
w=B.I(w,A.q,p?2:1)
v=B.p(q,D.bQz,A.f,q,q,new B.o(q,q,q,B.n(12),q,new B.a8(A.a3,A.a8,A.x,B.a([A.bi,A.bi.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.w(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.e9:A.r8
if(p)r=A.bi
else r=e?A.b1:A.dq
return new B.D(A.cu,B.aF(!1,A.a1,!0,q,B.aK(!1,o,!0,B.p(q,B.B(B.a([v,A.bd,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bE,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.evb(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q)},
apR(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.n(18),o=B.n(18),n=h?A.au:A.c
if(f)w=d.j(0.45)
else w=h?A.bD:A.aL
w=B.I(w,A.q,f?1.5:1)
v=d.j(0.14)
u=B.n(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.r6,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.anx,A.f,s,s,D.b1e,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.db(B.aF(!1,A.a1,!0,s,B.aK(!1,p,!0,B.eB(new B.D(E.YT,B.w(B.a([new B.an(A.V,s,A.a9,A.f,u,s),A.ac,v,A.bz,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag),r)},
aLX(d,e,f,g,h,i,j){return this.apR(d,e,!1,f,g,!1,h,i,j)},
byp(d,e,f,g,h,i,j,k){return this.apR(d,e,!1,f,g,h,i,j,k)}}
C.VN.prototype={
U(){return new C.bjF()}}
C.bjF.prototype={
a_(){this.a1()
this.aee()},
aee(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$aee=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fET(null,A.d.gH(m),k,r.a.f):C.fET(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gH(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kw(A.d.gH(n).w))C.fEE(A.d.gH(r.a.d),D.d9a)
n=r.a
m=n.c
n=C.i5D(n.d)
w=7
return B.b(C.fES(p,C.i5I(r.a.d),n,m,q),$async$aee)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.evp(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.evq(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aee,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.I,h=i?A.dc:A.bM,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cM(k.a.d,0,new C.evr())
v=B.aI(j,j,j,j,B.X(A.eF,i?A.ad:A.ak,j,j,j,18),j,j,j,new C.evs(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.zE],u),A.m,j,A.e,A.j,0,j,j)
t=B.n(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.de,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.w(B.a([r,A.N,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a1r,A.n),j,j,j,j,E.Zf,j,j,1/0)
q=B.n(24)
s=B.I(A.aR.j(0.35),A.q,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a7U,A.L,j,j))
else if(k.d==null)r.push(D.ec_)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.n(16)
n=B.a([new B.ac(0,A.G,A.aF.j(0.35),A.cz,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fr_,A.am,B.aB(j,B.p(j,B.B(B.a([D.bS6,A.at,B.d(m,j,j,j,j,j,j,D.fdC,j,j,j)],u),A.m,j,A.e,A.Q,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bWV,A.n),j,j,j,j,A_.aio,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.evt(k,d),j,j,j,j,j,j,!1,A.a7),A.N,D.fvj,A.aB],u))}o=A.c.j(0.04)
n=B.n(22)
m=B.I(A.bD,A.q,1)
l=k.d
l.toString
p.push(B.p(j,B.pR(j,j,!1,l,j,!0,!0,j,!1,D.bmK),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cp,j,j,j))
A.d.v(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hc,A.L,j,j))
return B.c6(j,h,B.bl(!0,B.w(B.a([new B.D(Af.MK,v,j),B.E(B.cc(B.w(B.a([t,A.aP,B.p(j,B.w(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.bYR,A.n),j,j,j,j,A.tM,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.r,j,A.y,j,E.aiH,j,j,A.ah),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.ae,!0,!0),j,!1,!1,j,j)}}
C.aDT.prototype={
U(){return new C.aDU(new B.ar(A.as,$.aw()),B.jS(!0,null,!0,!0,null,null,!1))}}
C.aDU.prototype={
a_(){var w=this
w.a1()
w.e.aQ(0,new C.eoU(w))
$.aV.x1$.push(new C.eoV(w))},
t(){var w=this.d
w.S$=$.aw()
w.P$=0
this.e.t()
this.a2()},
aZo(){var w,v=this.c
v.toString
w=C.yG(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a4(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aH(a2,A.eI,x.w).w,i=B.n(28),h=B.I(A.bi.j(0.4),A.q,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bi.j(0.28),A.uy,36),D.abz],g),e=B.n(28),d=A.c.j(0.16),a0=B.n(16),a1=x.p
a0=B.p(k,B.w(B.a([B.p(k,D.bNB,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.q,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.fo8,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a6,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.b1F,k,k,k,k,A.xX,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.at)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge7()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.au:A.M
o=new B.aR(14,14)
if(q)n=A.bi
else n=r?A.bi.j(0.55):A.aJ
m=new B.az(n,q?2:1.2,A.q,-1)
n=q?B.a([new B.ac(0,A.G,A.bi.j(0.28),A.J,12)],g):k
t.push(new B.bB(1,A.bg,B.de(A.A,new B.y(p,k,D.f7i,k,k,k,k,k,k,k,k,k),k,k,A.bb,new B.o(s,k,new B.bO(m,m,m,m),new B.bo(o,o,o,o),n,k,A.n),A.hw,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(M.J2)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.j,0,k,k),B.bT(0,B.db(B.aM(k,A.U,!0,k,!0,A.r,k,B.aN(),w,k,k,k,k,k,2,D.bUR,A.y,!0,k,!0,k,!1,v,A.aj,k,k,B.a([new B.um(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.Br(5,k),new C.btY()],x.aS),k,k,A.aPD,k,5,k,1,k,k,!1,"\u2022",k,new C.eoQ(l),k,new C.eoR(l),k,!1,k,k,!1,k,!0,k,A.aa,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a4,k,A.m8,k,k,k,k),0),0,0,0)],a1)
d=C.yG(w.a.a.toUpperCase())==null?k:l.gc8a()
return B.au(new B.D(new B.Q(24,24,24,24+j.f.d),B.aF(!1,A.a1,!0,k,new B.cT(Ac.Ku,B.p(k,B.bw(e,B.w(B.a([a0,new B.D(D.bw2,B.w(B.a([new B.an(A.V,k,A.a9,A.r,g,k),A.R,D.fmu,A.bw,new B.a7(1/0,50,B.bG(D.fD2,d,B.bm(A.bi,A.bl,A.ak,k,A.c,k,k,k,new B.b7(B.n(16),A.W),k,k,k)),k),A.am,B.bK(!1,A.nx,k,k,!0,k,k,new C.eoS(a2),k,B.fx(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.Q,0,A.p),A.aq),A.f,k,k,new B.o(A.dc,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ag),k),k,k,k)}}
C.btY.prototype={
oB(d,e){var w=e.a.toUpperCase()
return e.cIm(B.hg(A.bv,w.length),w)}}
C.aqY.prototype={
U(){return new C.aDX(B.zk(A.M2,A.nD,A.uf))}}
C.aDX.prototype={
t(){this.d.t()
this.a2()},
aZn(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iQ(w,d)},
aai(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aai=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fNz(s),$async$aai)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aZn("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$aai,v)},
c88(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=C.i5G(w[u])
if(t!=null){this.aZn(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aI(s,s,s,s,A.w1,s,s,s,t.gbNf(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.ez(B.a([r,B.aI(s,s,s,s,B.X(q?A.tY:Ak.NF,s,s,s,s,s),s,s,s,new C.evv(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.dc,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fEf,s,s,s,1,s,!0)
r=B.zj(t.d,A.bU,t.gc87())
w=B.n(28)
w=B.au(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bi,A.q,3),w,B.a([new B.ac(2,A.G,A.bi.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.n(16)
return B.c6(p,A.w,new B.an(A.V,s,A.b0,A.r,B.a([r,w,B.ao(32,B.p(s,D.fs3,A.f,s,s,new B.o(v,s,B.I(A.bi.j(0.45),A.q,1),u,s,s,A.n),s,s,s,s,A.jn,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bu9.prototype={
B(d){var w=null,v=B.n(24),u=B.I(A.aJ,A.q,1)
return B.aF(!1,A.a1,!0,w,B.p(w,B.w(B.a([B.p(w,H.anc,A.f,w,w,D.b1o,w,56,w,w,w,w,w,56),A.aP,D.fDW,A.am,new B.jI(this.c,new C.f5I(),w,w,x.cI),A.aP,new B.jI(this.d,new C.f5J(),w,w,x.cl),A.ac,D.fDU],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,Ac.Ku,new B.o(A.au,w,u,v,w,w,A.n),w,w,w,L.Zm,D.bwG,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)}}
C.a7t.prototype={
U(){return new C.bjo(A.bB)},
gde(){return this.c}}
C.bjo.prototype={
a_(){var w=this
w.a1()
if(w.a.d)return
w.ZZ()
w.d=B.dt(A.fW,new C.ee0(w))},
t(){var w=this.d
if(w!=null)w.a7(0)
this.a2()},
ZZ(){return this.cms()},
cms(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.edZ(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bz(new B.S(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cf0(p.c),$async$ZZ)
case 6:r=e
q.a=r==null?A.bB:r
case 4:if(t.c==null){w=1
break}t.m(new C.ee_(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$ZZ,v)},
bPf(d){var w,v,u=d.a,t=A.o.am(u,36e8)
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
return B.p(r,B.B(B.a([B.X(A.G2,v,r,r,r,20),A.at,B.E(B.d("Marriage document session \xb7 "+s.bPf(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,V.aht,A.iK,r,r,1/0)}}
C.a8n.prototype={
nf(){var w,v,u,t=this
t.xe()
w=t.cx
v=t.c
w.bq4(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.pY(B.F(["/S",D.efF,"/URI",new B.rz(B.Wj(w.as),A.uB,!0)],x.N,u),u))}}
C.a8o.prototype={
a3(){return"PdfAnnotFlags."+this.b}}
C.b2h.prototype={
bxr(d,e,f,g,h,i,j,k,l,m){var w=B.eC([D.edY],x.di)
this.w!==$&&B.aP()
this.w=w},
gcLE(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jR(w,new C.chc(),B.a6(w).k("jR<cq.E,H>")).ff(0,new C.chd())},
aCB(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.he(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.ty(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jf(d.a,d.b))
s.n(0,"/Border",B.ty(H.ape))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h0(t.gcLE()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.pY(w,x.Y))}}
C.che.prototype={}
C.a2z.prototype={}
C.ahX.prototype={}
C.aQB.prototype={
h0(d){var w,v,u,t,s,r,q=this,p=null
q.li(d)
q.M_(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bfB(w)
u=x.N
t=x.Y
s=new C.che(q.d.a,"/Link",w,p,p,p,p,p,B.U(u,t))
s.bxr(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pY(B.F(["/Type",D.efD],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a8n(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.M(0,r)
v.dx.push(r)}}
C.awp.prototype={}
C.aS7.prototype={
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
u.L7(t)
u.Sv(0)
u.oW(0,v)
w.h0(d)
u.ni(0)}}}
var z=a.updateTypes(["aA<~>()","~(lI)","R(i4)","~()","R(eG)","R(on)","R(lI)","~(i4)","R(eG,eG)","JR(Y)","R(nN)","R(le)","aA<R>()","H(H,i4)","a5<m,@>(i4)","ai<zC>()","m(nN)","R(a7K)","m(lI)","m(w1)","R(ED)","H(i4,i4)","m(eG)","t(eG)","cL(eG)","t(hF)","~(hF)","eG(uK,K,K,K,K,H{fx:m,key:m,rotation:K})","eG(m,K,H)","H(on,on)","R(zC)","R(m,ai<zC>)","a5<m,@>(on)","nN()","Ym(Y)","eG(m,K,K,K,K,K{align:q3,anim:hF,bullets:R,color:H?,delay:H,fx:m,key:m,style:HE,weight:nA})","a0B(Y)","eG(m,K,K,K,K{anim:hF,delay:H,fx:m,key:m})","aA<~>(on)","R(mt)","Yk(Y)","a08(Y)","a07(Y)","Pm(Y)","Zv(Y)","eG(uK,K,K,K,K,H,m,m{anim:hF,delay:H,rotation:K,stroke:H,strokeWidth:K})","eG(m,K,K,K,K,K,m,m,H)","eG(K,K,m,H{size:K})","t(rn,K,K)","le()","on(a5<@,@>)","~(uA)","ED()","ff(eG)","t(j0)","Z3(Y)","~(Eu)","Zo(Y)","H(eG,eG)","eG(eG)","a5<m,@>(eG)","eG(a5<@,@>)","lI(lI)","a5<m,@>(lI)","lI(a5<@,@>)","R(jF)","jF()","m(i4)","~(ai<on>)","S(ai<i4>)","S(i4)","ai<i4>(m?)","acp(Y,H)","~(R(eG,eG))","ad2(Y)","aeI(Y,H)","v(lI,R)","VA(Y)","ad5(Y)","VB(Y)","~(mx)","i4(i4)","K(eG)","a_C(Y)","a_f(Y)","i4()","ai<F0>()","aA<~>(ai<i4>)","t(bv<H,i4>)","D(jF)","D(ED)","aA<~>(hF,~())","t(ai<hF>,hF?,~(hF),v)","R(m7)","ai<jp<mx>>(Y)","jp<mx>(mx)","i4(a5<@,@>)","VM(Y)","eG(m,K,K,K,K,K,H{align:q3,style:HE,weight:nA})","VN(Y)","t(i4)","~(m0)","II(Y,lI,t?)","H(a8o)","aA<ai<a5<m,@>>?>()","m(m)","aA<zB>({paper:m?,photo:dI?,request:m,template!lh})","aA<a7C>({doc!zB,history:ai<+(m,m)>,instruction!m,photo:dI?,template!lh})","ad_(Y)"])
C.cFd.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:76}
C.cFe.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:74}
C.cFf.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gajX(s):16;--w.c}w.b=A.o.dY(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mq(v,t)
w.b=v-A.o.dY(q,t)
w.a=t
return q},
$S:74}
C.cFg.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bOf.prototype={
$1(d){return J.eY(A.dC.gaP(d),d.byteOffset,d.byteLength)},
$S:1669}
C.frr.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iK(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iK(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iK(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iK(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1670}
C.bZ1.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:28}
C.bZ2.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aM(v,J.k(w==null?"":w))},
$S:42}
C.bZ4.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fHD.prototype={
$1(d){return new C.a0B(this.a,this.b,C.i6y(),null)},
$S:z+36}
C.f4a.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f4e.prototype={
$1(d){return this.a.d.q(0,d.a)},
$S:z+2}
C.f4f.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f4g.prototype={
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
C.f4b.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f4c.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f4d.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.f45.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hW,w,w,w)
return B.ek(B.a([B.bK(!1,D.fqu,w,w,!0,w,w,new C.f43(d),w,w),B.bK(!1,D.fpz,w,w,!0,w,w,new C.f44(d),w,w)],x.p),w,w,D.XH,v,w,w,w,w,D.fEy,w)},
$S:18}
C.f43.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.f44.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.f46.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f47.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f4k.prototype={
$0(){var w=this.a
return w.m(new C.f4j(w,this.b))},
$S:0}
C.f4j.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f49.prototype={
$0(){var w=this.a
return w.m(new C.f48(w,this.b,this.c))},
$S:0}
C.f48.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.M(0,v)},
$S:0}
C.f4h.prototype={
$0(){return this.a.a13(this.b)},
$S:0}
C.f4i.prototype={
$0(){return this.a.P5(0,this.b)},
$S:0}
C.f4n.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.f4o.prototype={
$0(){var w=this.a
return w.m(new C.f4m(w,this.b))},
$S:0}
C.f4m.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.v(0,new B.M(w,new C.f4l(),B.T(w).k("M<1,m>")))}},
$S:0}
C.f4l.prototype={
$1(d){return d.a},
$S:z+67}
C.fbz.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.h6Z(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cw)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.on(s,v,u==null?new B.S(Date.now(),0,!1):u)},
$S:z+50}
C.fbA.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fug.prototype={
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
C.fue.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+5}
C.fuf.prototype={
$2(d,e){return e.c.aM(0,d.c)},
$S:z+29}
C.fH7.prototype={
$1(d){return d.ag()},
$S:z+32}
C.fr5.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fHZ.prototype={
$1(d){return new C.Ym(this.a,null)},
$S:z+34}
C.cGz.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cGB.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cGE.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cGF.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cGD())},
$S:11}
C.cGD.prototype={
$0(){},
$S:0}
C.cGG.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a1z(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cE(s)
p=q.bg(s,new C.cGC(r))
if(p<0)q.ca(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.ahe(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:296}
C.cGC.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cGH.prototype={
$1(d){},
$S:29}
C.cGA.prototype={
$1(d){return new C.Yk(this.b,this.a.gcwe(),null)},
$S:z+40}
C.cGI.prototype={
$1(d){return D.h2B},
$S:z+43}
C.cGv.prototype={
$1(d){var w=null,v=B.n(24),u=B.I(D.Xl,A.q,1),t=x.p
return B.au(B.aF(!1,A.a1,!0,w,B.p(w,B.w(B.a([new B.D(D.bws,B.w(B.a([B.p(w,D.bKM,A.f,w,w,new B.o(A.aw.j(0.14),w,w,w,w,w,A.a5),w,56,w,w,w,w,w,56),A.aP,D.foA,A.R,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fcD,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dY,new B.D(A.pY,B.B(B.a([B.E(B.dT(D.fvl,new C.cGt(d),B.dg(w,w,w,w,w,w,w,w,w,E.mZ,w,w,A.ck,w,new B.b7(B.n(14),A.W),D.aZF,w,w,w,w)),1),A.at,B.E(B.bG(D.fBj,new C.cGu(d),B.bm(A.bx,w,w,w,w,w,A.ck,w,new B.b7(B.n(14),A.W),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.Q,0,A.p),A.f,w,A.x2,new B.o(D.adf,w,u,v,D.cYY,w,A.n),w,w,w,L.Zm,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w,w,w)},
$S:1671}
C.cGt.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.cGu.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.cGw.prototype={
$0(){return J.nt(this.a.d,new C.cGs(this.b))},
$S:0}
C.cGs.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cGr.prototype={
$1(d){var w,v,u,t=null,s=B.n(28),r=B.I(D.Xl,A.q,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bPK,A.f,t,t,new B.o(t,t,t,B.n(14),t,D.aoM,A.n),t,44,t,t,t,t,t,44),A.bd,B.E(B.w(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aRi,t,t,t),A.bz,D.fBf],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.dk9[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.axi(u[1],u[2],u[3],new C.cGp(v,d),!1,t))}q.push(A.am)
q.push(D.bqz)
q.push(A.am)
q.push(new C.axi(A.ef,"Delete book","Remove it from this device",new C.cGq(d),!0,t))
return B.bl(!0,B.p(t,B.w(q,A.F,t,A.e,A.Q,0,A.p),A.f,t,t,new B.o(D.adf,t,r,s,t,t,A.n),t,t,t,A.tI,E.YZ,t,t,t),!0,!1,A.ae,!0,!0)},
$S:25}
C.cGp.prototype={
$0(){var w=this.a.a
B.a4(this.b,!1).O(w)
return null},
$S:0}
C.cGq.prototype={
$0(){B.a4(this.a,!1).O("delete")
return null},
$S:0}
C.cGy.prototype={
$3(d,e,f){var w=null,v=B.n(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aH2,12)],x.V)
return B.dU(B.eE(A.A,e,B.p(w,B.bw(B.n(4),new B.a7(62,95.81818181818181,B.eM(A.A,F.anQ(d),A.f,A.dv),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.x(f,0))},
$S:z+48}
C.cGx.prototype={
$0(){return this.a.c2W()},
$S:0}
C.cGo.prototype={
$0(){return this.a.aXZ(0,this.b)},
$S:0}
C.cGn.prototype={
$0(){return this.a.Da(this.b)},
$S:0}
C.cGm.prototype={
$0(){return this.a.Da(this.b)},
$S:0}
C.cGJ.prototype={
$2(d,e){var w=this.a
return w.bBY(J.q(w.d,e))},
$S:40}
C.cFQ.prototype={
$0(){var w=this.a
if(w.c!=null)w.AJ()},
$S:0}
C.cFP.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b_R("Page "+(v.length+1),"",""))},
$S:0}
C.cFS.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cG_.prototype={
$0(){},
$S:0}
C.cG0.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.S$=u
v.P$=0
w=w.b
w.S$=u
w.P$=0
return null},
$S:9}
C.cFT.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cJ.gct().aK(this.c)},
$S:0}
C.cFR.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cFV.prototype={
$0(){return this.a.Qq(this.b)},
$S:0}
C.cFW.prototype={
$0(){return this.a.Qq(this.b)},
$S:0}
C.cFX.prototype={
$0(){var w=this.a
w.m(new C.cFU(this.b))
w.E1()},
$S:0}
C.cFU.prototype={
$0(){return this.a.c=""},
$S:0}
C.cFZ.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cFY(w,d))
w.E1()},
$S:z+51}
C.cFY.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cG5.prototype={
$2(d,e){if(d)this.a.AJ()},
$S:118}
C.cG1.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.AJ(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.I(x.q).f.R(D.f04)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cG2.prototype={
$0(){return this.a.aWX(this.b,-1)},
$S:0}
C.cG3.prototype={
$0(){return this.a.aWX(this.b,1)},
$S:0}
C.cG4.prototype={
$0(){return this.a.c4e(0,this.b)},
$S:0}
C.fyK.prototype={
$1(d){return C.hh0()},
$S:44}
C.fyL.prototype={
$1(d){return null},
$S:29}
C.ffO.prototype={
$1(d){return null},
$S:29}
C.fzJ.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:342}
C.fzI.prototype={
$2(d,e){return A.o.aM(e.length,d.length)},
$S:245}
C.fzP.prototype={
$1(d){var w=this.a
return C.h_k(d)===w||C.hlz(d)===w},
$S:z+4}
C.feR.prototype={
$1(d){return A.a.aX(A.o.u(d),2,"0")},
$S:82}
C.c9j.prototype={
$1(d){return d.length!==0},
$S:3}
C.fyI.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fyJ.prototype={
$1(d){return C.fBs(d)&&A.a.q(d.db,"rais")},
$S:z+4}
C.ftC.prototype={
$1(d){var w=null
return B.bl(!0,new B.D(E.xW,B.w(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.b1,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bw,D.fvX,A.N,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dn(D.GG,D.fqa,new C.ftA(d),B.bm(A.bZ,w,w,w,A.w,w,A.ck,w,w,w,w,w)),A.R,B.er(A.w0,D.fxb,new C.ftB(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.x0,w,w,w,w))],x.p),A.ai,w,A.e,A.Q,0,A.p),w),!0,!1,A.ae,!0,!0)},
$S:25}
C.ftA.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.ftB.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.ftD.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,D.fmm,w,w,!0,w,w,new C.fty(d),w,w),B.bG(D.fDA,new C.ftz(d),w)],x.p),w,w,w,D.fFt,w,w,w,w,D.fmf,w)},
$S:18}
C.fty.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.ftz.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.e9H.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.e9F.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e9G.prototype={
$0(){return this.a.f=!0},
$S:0}
C.e9I.prototype={
$0(){return this.a.r=!1},
$S:0}
C.e9J.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fzO.prototype={
$1(d){return A.a.aX(A.o.u(d),2,"0")},
$S:82}
C.fzK.prototype={
$2$h$w(d,e){var w=null
return new B.bI(A.a3,w,w,B.Bg(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.n(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1672}
C.fzM.prototype={
$1(d){var w=null,v=B.n(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.fdP,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:155}
C.fzN.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.i2,A.q,1.5),w,w,w,A.a5),w,d,w,w,w,w,w,d),B.dU(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.i2,A.q,1.5),w,w,w,A.a5),w,d,w,w,w,w,w,d),new B.x(-d*0.38,0))],x.p),A.m,w,A.b7,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1673}
C.fzL.prototype={
$2$female$size(d,e){var w=null,v=d?D.af7:this.a,u=B.I(A.i2,A.q,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a5),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.a9,A.r,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.n(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.adu,w,u,w,w,w,A.a5),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1674}
C.fLq.prototype={
$1(d){return new C.ad_(this.a,this.b,null)},
$S:z+108}
C.dXi.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bnf:A.Lz,q=B.I(D.jg.j(0.25),A.q,1),p=B.au(B.p(t,t,A.f,t,t,new B.o(A.bZ.j(0.45),t,t,B.n(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.n(15)
o=B.p(t,D.anw,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.q,1.2),o,B.a([new B.ac(0,A.G,D.jg.j(0.35),A.em,10)],x.V),D.bZs,A.n),t,t,t,t,A.xN,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.w(B.a([new B.D(K.Zb,B.w(B.a([p,A.aB,B.B(B.a([o,A.bd,B.E(B.w(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.jg,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bz,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fd4,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.E(B.iw(!0,t,e,A.y,D.aOG,new C.dXh(w,this.c),v,D.aij,t,A.ah,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.me,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:113}
C.dXh.prototype={
$2(d,e){var w=this.a.d[e]
return new C.acp(w,new C.dXg(this.b,w),null)},
$S:z+72}
C.dXg.prototype={
$0(){B.a4(this.a,!1).O(this.b.a)
return null},
$S:0}
C.ftG.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.ftH.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xW,B.w(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.b1,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bw,D.fzn,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dn(D.GG,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.ftE(d),B.bm(D.jg,w,w,w,A.c,w,A.ck,w,w,w,w,w)),A.R,B.er(A.o6,D.U5,new C.ftF(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.x0,w,w,w,w))],x.p),A.ai,w,A.e,A.Q,0,A.p),w),!0,!1,A.ae,!0,!0)},
$S:25}
C.ftE.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.ftF.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.ftK.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.ftL.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xW,B.w(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.b1,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bw,D.fnm,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dn(D.GG,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.ftI(d),B.bm(D.jg,w,w,w,A.c,w,A.ck,w,w,w,w,w)),A.R,B.er(A.o6,D.U5,new C.ftJ(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.x0,w,w,w,w))],x.p),A.ai,w,A.e,A.Q,0,A.p),w),!0,!1,A.ae,!0,!0)},
$S:25}
C.ftI.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.ftJ.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.ftO.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.ftP.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xW,B.w(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.b1,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bw,D.ftL,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dn(D.GG,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.ftM(d),B.bm(D.jg,w,w,w,A.c,w,A.ck,w,w,w,w,w)),A.R,B.er(A.o6,D.U5,new C.ftN(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.x0,w,w,w,w))],x.p),A.ai,w,A.e,A.Q,0,A.p),w),!0,!1,A.ae,!0,!0)},
$S:25}
C.ftM.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.ftN.prototype={
$0(){B.a4(this.a,!1).O("new")
return null},
$S:0}
C.fMT.prototype={
$1(d){return D.h7k},
$S:z+74}
C.ee3.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.beS:A.Lz,s=B.I(A.ax.j(0.25),A.q,1),r=B.au(B.p(v,v,A.f,v,v,new B.o(A.ax.j(0.45),v,v,B.n(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.n(15)
q=B.p(v,D.bS2,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.q,1.2),q,B.a([new B.ac(0,A.G,A.bZ.j(0.35),A.em,10)],x.V),D.aoR,A.n),v,v,v,v,A.xN,v,v,v)
w=x.p
return B.p(v,B.w(B.a([new B.D(K.Zb,B.w(B.a([r,A.aB,B.B(B.a([q,A.bd,B.E(B.w(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:Z.Lv,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bz,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.faD,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.E(B.iw(!0,v,e,A.y,D.aOG,new C.ee2(this.b),19,D.aij,v,A.ah,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.me,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:113}
C.ee2.prototype={
$2(d,e){var w=D.QP[e]
return new C.aeI(w,new C.ee1(this.a,w),null)},
$S:z+75}
C.ee1.prototype={
$0(){B.a4(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fBw.prototype={
$0(){return B.fZh(C.hUZ(this.a))},
$S:290}
C.fBv.prototype={
$0(){var w=C.h_D(this.a)
return"data:image/png;base64,"+A.cJ.gct().aK(w)},
$S:22}
C.fd8.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jg(d,e),new B.jg(w,e+v),new B.jg(d+f*14,e),new B.jg(w,e-v)],x.J)
B.a1w(this.a,C.fA(4291404327),v)},
$S:665}
C.fN3.prototype={
$1(d){return new C.VA(this.a,null)},
$S:z+77}
C.eh0.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eh_())},
$S:31}
C.eh_.prototype={
$0(){},
$S:0}
C.eh1.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.egZ(w,d))},
$S:1676}
C.egZ.prototype={
$0(){return this.a.x=J.eU(A.dC.gaP(this.b))},
$S:0}
C.eh2.prototype={
$1(d){},
$S:29}
C.egD.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.egz.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.egK.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.egL.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.epI)},
$S:0}
C.egM.prototype={
$0(){return this.a.as=!1},
$S:0}
C.egF.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bP(0,A.c4)},
$S:0}
C.egG.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.egH.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.u(this.b)))},
$S:0}
C.egI.prototype={
$0(){return this.a.as=!1},
$S:0}
C.egJ.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd0(v).Q
v.toString
w.ma(v,A.dX,A.ij)}},
$S:9}
C.egE.prototype={
$0(){var w=this.a,v=w.z,u=C.fC9(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cHu(C.fC9(t))},
$S:0}
C.egB.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.egC.prototype={
$0(){return this.a.as=!1},
$S:0}
C.egS.prototype={
$0(){return B.a4(this.a,!1).la()},
$S:0}
C.egT.prototype={
$0(){var w=this.a
return w.m(new C.egR(w))},
$S:0}
C.egR.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.egU.prototype={
$0(){var w=this.a
return w.m(new C.egQ(w,this.b))},
$S:0}
C.egQ.prototype={
$0(){var w=this.b.b
this.a.e.saU(0,w)
return w},
$S:0}
C.egV.prototype={
$1(d){var w=this.a
return w.m(new C.egP(w))},
$S:8}
C.egP.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.egW.prototype={
$1(d){var w=this.a
return w.m(new C.egO(w))},
$S:8}
C.egO.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.egX.prototype={
$0(){var w=this.a
return w.m(new C.egN(w,this.b))},
$S:0}
C.egN.prototype={
$0(){var w=this.b
this.a.f.saU(0,w)
return w},
$S:0}
C.egY.prototype={
$1(d){return this.a.ZL()},
$S:2}
C.egA.prototype={
$0(){return this.a.c7q(this.b)},
$S:0}
C.cd_.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cO(w.h(0,d))):null},
$S:324}
C.ccY.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.ccZ.prototype={
$1(d){return d.length!==0},
$S:3}
C.fB6.prototype={
bkK(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bOe(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.L)(e),++t){s=e[t]
r.cE_($.qW().jG(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mG(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bkK(d,e)},
$S:1677}
C.fzo.prototype={
$1(d){return d.length!==0},
$S:3}
C.fzq.prototype={
$1(d){var w=this.a.a
w=A.d.aH(A.d.ds(this.b,w,w+d)," ")
w=B.aL(w," \n\n ","\n\n")
w=B.aL(w," \n\n","\n\n")
return B.aL(w,"\n\n ","\n\n")},
$S:82}
C.fzp.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.h2(t,t,t,t,B.d0(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qt,A.cb,t,A.dR,A.c7)
v=this.a
w.uB(v.b)
u=w.b.a.c
return u.gbf(u)<=v.a},
$S:34}
C.fcJ.prototype={
$1(d){var w=A.a.fF(d,B.af("\\s+",!0,!1,!1,!1))
return new B.a_(w,new C.fcK(),B.T(w).k("a_<1>")).gL(0)},
$S:251}
C.fcK.prototype={
$1(d){return d.length!==0},
$S:3}
C.fcH.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:232}
C.fcI.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:232}
C.cd0.prototype={
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
o=C.h_j(i,new B.G(!0,h,a6,k,a6,a6,q,A.cM,A.bo,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fX8(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aH(n.gcfB(),"\n\n")
d=B.h2(a6,a6,a6,a6,B.d0(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.ae3(k,q,1.28),j),A.qt,A.cb,a6,A.dR,A.c7)
d.uB(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbf(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.h_j(i,new B.G(!0,h,a6,k,a6,a6,q,A.cM,A.bo,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fX8(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.ae3(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bB(1,A.bg,new B.y(o.length>a4?o[a4]:"",a6,a3,a6,A.qt,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.azU(s,j))
i.push(new B.a7(s,a6,B.w(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:446}
C.cd1.prototype={
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
l=C.h_j(f,new B.G(!0,e,a5,i,a5,a5,h,A.cM,A.bo,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fX8(g.length===0?B.a([a6],n):g,l))break}a1=o.ae3(i,h,1.28)
a2=new C.cd2(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.J1,new B.a7(v,a5,a4.f,a5),A.J1,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.byL,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bB(1,A.bg,new B.y(l[2+a3],a5,a1,a5,A.qt,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.azU(r,g))
f.push(new B.a7(r,a5,B.w(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.w(B.a([new B.a7(a5,q,v,a5),A.ac,B.E(B.B(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:143}
C.cd2.prototype={
$2(d,e){var w=null
return new B.a7(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qt,w,w),w)},
$S:1678}
C.fN6.prototype={
$1(d){return new C.VB(this.a,this.b,null)},
$S:z+79}
C.ehy.prototype={
$1(d){return d.lC()},
$S:1679}
C.ehz.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ehx(w,d))},
$S:1680}
C.ehx.prototype={
$0(){var w=this.b
return this.a.d=w.gfu(w)},
$S:0}
C.ehl.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ehm.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ehs.prototype={
$0(){return B.a4(this.a,!1).eE()},
$S:0}
C.eht.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bA,A.q,2.5)
return B.aB(w,B.p(w,B.b3(w,w,w,new C.bbj(u,v.gax3(),w),A.fE),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ehq(v),new C.ehr(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a7)},
$S:37}
C.ehq.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:270}
C.ehr.prototype={
$1(d){var w=this.a
w.m(new C.ehn(w,d,this.b,this.c))},
$S:219}
C.ehn.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gax3()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.ehu.prototype={
$1(d){var w=this.a
return w.m(new C.ehp(w,this.b))},
$S:8}
C.ehp.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ehv.prototype={
$1(d){var w=this.a
return w.m(new C.eho(w,d))},
$S:7}
C.eho.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ehw.prototype={
$0(){return B.a4(this.b,!1).O(this.a.a.c)},
$S:0}
C.fNm.prototype={
$1(d){return D.ha7},
$S:z+83}
C.eQJ.prototype={
$1(d){return this.a.Yr()},
$S:9}
C.ePB.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cJ.gct().aK(v)},
$S:0}
C.ePZ.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eQ8.prototype={
$1(d){return d>=this.a.length},
$S:34}
C.ePk.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.ePl.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.ePi.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.ePj.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.ePS.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.ePT(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jx(B.rF(p>0.2?C.fRQ(q,B.a4Q(p,p,A.x)):q),A.r,u)],x.p)
w=s.bi
if(w>0.02){v=B.a4Q(12,12,A.x)
p.push(B.jx(B.db(B.rF(C.fRQ(r.$1(!0),v)),w*0.75),A.r,u))}r=s.b0
if(r!=null&&s.b_>0)p.push(B.el(u,B.b0(r).j(s.b_),!0))
r=s.bb
if(r!=null&&s.bI>0){r=B.b0(r).j(s.bI)
w=s.bb
w.toString
p.push(B.c0(u,new B.o(u,u,u,u,u,new B.c_(D.aXk,1.15,A.x,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.be))}r=s.aE
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.c_(D.aX5,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.be))
r=s.aJ
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.a8(A.b2,A.b6,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aJ)],x.O),D.cXB,u),A.n),A.be))
if(s.aB>0){r=s.k1
p.push(B.ao(u,B.c0(u,new B.o(u,u,u,u,u,new B.a8(A.b2,A.b6,A.x,B.a([A.w.j(0),A.w.j(s.aB),A.w.j(s.aB),A.w.j(0)],x.O),D.d7C,u),A.n),A.be),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Z
if(r>0)p.push(B.el(u,A.w.j(r),!0))
r=s.b8
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.c_(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.d4I,u),A.n),A.be))
s=s.aw
if(s>0)p.push(B.b3(u,u,u,new C.beQ(s,u),A.az))
return new B.an(A.V,u,A.b0,A.r,p,u)},
$S:71}
C.ePT.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fO(r.b,A.A,q,q,A.ce,A.bU,!0,q,!1,q,q),o=r.a,n=o.aWz(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c6,l=m*3.141592653589793/180
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
return B.dU(B.ed(A.A,B.eE(A.A,l,B.fu(A.A,new B.Dl(new B.z_(q,q,n,A.At),p,q),q,B.vP(s,o.cJ?-1:1,1),!0),q),v*w,q,q),new B.x(-m*r.d*u/2,-t*r.c*u/2))},
$S:484}
C.eQ4.prototype={
$0(){return this.a.m(new C.eQ3(this.b,this.c))},
$S:0}
C.eQ3.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eQ5.prototype={
$1(d){return this.a.m(new C.eQ2(this.b,d))},
$S:7}
C.eQ2.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eQ7.prototype={
$0(){return this.a.m(new C.eQ6(this.b,this.c))},
$S:0}
C.eQ6.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.ePa.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.ePb.prototype={
$1(d){var w=this.a
return w.m(w.gcxD())},
$S:2}
C.ePc.prototype={
$1(d){return this.a.m(new C.eP9())},
$S:2}
C.eP9.prototype={
$0(){},
$S:0}
C.ePd.prototype={
$0(){var w=this.a
return w.m(new C.eP8(w,this.b))},
$S:0}
C.eP8.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.ePf.prototype={
$2(d,e){return A.at},
$S:36}
C.ePe.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.n(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bD
q=B.I(q,A.q,t?2.5:1)
r=B.de(w,B.au(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.bb,new B.o(w,w,q,s,w,new B.a8(A.b2,A.b6,A.x,r,w,w),A.n),A.hw,w,94,w,w,w,w,70)
return B.aB(w,new B.a7(70,w,B.w(B.a([r,A.fF,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aA,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eP7(u,v),w,w,w,w,w,w,!1,A.a7)},
$S:80}
C.eP7.prototype={
$0(){var w=this.a
return w.m(new C.eP4(w,this.b))},
$S:0}
C.eP4.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ePg.prototype={
$1(d){var w=this.a
return w.m(new C.eP6(w,d))},
$S:8}
C.eP6.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.ePh.prototype={
$1(d){var w=this.a
return w.m(new C.eP5(w,d))},
$S:8}
C.eP5.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eQy.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gH(this.b)]},
$S:34}
C.eQF.prototype={
$1(d){var w=this.a
return w.m(new C.eQG(w,d))},
$S:30}
C.eQG.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.em(v,v.r,B.a6(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eQH.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:252}
C.eQz.prototype={
$0(){var w=this.a
return w.m(new C.eQx(w,this.b))},
$S:0}
C.eQx.prototype={
$0(){var w=this.a.dx,v=this.b
return w.q(0,v)?w.W(0,v):w.M(0,v)},
$S:0}
C.eQA.prototype={
$0(){var w=this.a
return w.m(new C.eQw(w,this.b))},
$S:0}
C.eQw.prototype={
$0(){var w,v=this.b.length,u=J.e6(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eQB.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eQv(v,w.b,w.c,w.d))},
$S:0}
C.eQv.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eQC.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gBm(v))},
$S:0}
C.eQD.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eQE.prototype={
$0(){var w=this.a
return w.m(new C.eQu(w))},
$S:0}
C.eQu.prototype={
$0(){var w=this.a.db
return A.d.hq(w,0,w.length,0)},
$S:0}
C.eQh.prototype={
$1(d){return d.a===this.a.dy},
$S:207}
C.eQi.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.awR[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aR(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.ax7(new B.nb(new B.bo(n,n,n,n),A.aq,new B.kQ(new B.o(j,j,j,j,j,new B.a8(A.a3,A.a8,A.x,m,j,j),A.n),A.be,new C.aZv(l,B.b0(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eQg(r,v),2,i))}return B.bZ(A.bC,h,A.br,7,7)},
$S:160}
C.eQg.prototype={
$0(){var w=this.b
return w.m(new C.eQb(this.a,w))},
$S:0}
C.eQb.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eQj.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:200}
C.eQm.prototype={
$0(){var w=this.a
return w.m(new C.eQf(w))},
$S:0}
C.eQf.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eQn.prototype={
$1(d){return this.a.p2=d},
$S:7}
C.eQo.prototype={
$1(d){return this.a.p3=d},
$S:7}
C.eQp.prototype={
$1(d){return this.a.ok=d},
$S:7}
C.eQq.prototype={
$0(){var w=this.a
return w.m(new C.eQe(w))},
$S:0}
C.eQe.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eQr.prototype={
$0(){var w=this.a
return w.m(new C.eQd(w))},
$S:0}
C.eQd.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eQs.prototype={
$0(){var w=this.b
return w.m(new C.eQc(this.a,w))},
$S:0}
C.eQc.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eQt.prototype={
$1(d){return this.a.fx=d},
$S:200}
C.eQk.prototype={
$1(d){return this.a.fr=d},
$S:7}
C.eQl.prototype={
$1(d){return this.a.k1=d},
$S:7}
C.ePW.prototype={
$0(){var w=this.a
return w.m(new C.ePV(w))},
$S:0}
C.ePV.prototype={
$0(){var w=this.a
w.p4=null
w.b2D()},
$S:0}
C.ePX.prototype={
$0(){var w=this.a
return w.m(new C.ePU(w,this.b))},
$S:0}
C.ePU.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.ePY.prototype={
$0(){var w=this.a
return w.m(w.gco3())},
$S:0}
C.ePO.prototype={
$0(){var w=this.a
return w.m(new C.ePN(w))},
$S:0}
C.ePN.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.ePP.prototype={
$0(){var w=this.a
return w.m(new C.ePM(w))},
$S:0}
C.ePM.prototype={
$0(){var w=this.a
w.aB=0.55
w.Z=Math.max(w.Z,0.12)},
$S:0}
C.ePQ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.d56[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aR(9,9)
m.push(v.ax7(new B.nb(new B.bo(p,p,p,p),A.aq,new B.a7(1/0,1/0,new B.Dl(new B.z_(o,o,v.aWz(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.At),B.fO(u,A.A,140,o,A.ce,A.bU,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.ePL(v,s),3,n))}return B.bZ(A.bC,m,A.br,10,8)},
$S:160}
C.ePL.prototype={
$0(){var w=this.a
return w.m(new C.ePK(w,this.b))},
$S:0}
C.ePK.prototype={
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
C.ePs.prototype={
$1(d){return this.a.R8=d},
$S:7}
C.ePt.prototype={
$1(d){return this.a.RG=d},
$S:7}
C.ePu.prototype={
$1(d){return this.a.rx=d},
$S:7}
C.ePv.prototype={
$1(d){return this.a.xr=d},
$S:7}
C.ePw.prototype={
$1(d){return this.a.aE=d},
$S:7}
C.ePx.prototype={
$1(d){return this.a.Z=d},
$S:7}
C.ePy.prototype={
$1(d){return this.a.b8=d},
$S:7}
C.ePz.prototype={
$1(d){return this.a.aB=d},
$S:7}
C.ePA.prototype={
$1(d){return this.a.aJ=d},
$S:7}
C.eOO.prototype={
$1(d){return this.a.ry=d},
$S:7}
C.eOP.prototype={
$1(d){return this.a.to=d},
$S:7}
C.eOQ.prototype={
$1(d){return this.a.x1=d},
$S:7}
C.eOR.prototype={
$1(d){return this.a.x2=d},
$S:7}
C.eOS.prototype={
$0(){var w=this.a
return w.m(new C.eON(w))},
$S:0}
C.eON.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eOT.prototype={
$1(d){return this.a.b0=d},
$S:200}
C.eOU.prototype={
$1(d){return this.a.b_=d},
$S:7}
C.ePm.prototype={
$1(d){return this.a.y2=d},
$S:7}
C.ePn.prototype={
$1(d){return this.a.bi=d},
$S:7}
C.ePo.prototype={
$1(d){return this.a.aw=d},
$S:7}
C.ePp.prototype={
$1(d){return this.a.bb=d},
$S:200}
C.ePq.prototype={
$1(d){return this.a.bI=d},
$S:7}
C.eOY.prototype={
$1(d){return this.a.aG=d},
$S:7}
C.eOZ.prototype={
$1(d){return this.a.bh=d},
$S:7}
C.eP_.prototype={
$1(d){return this.a.bB=d},
$S:7}
C.eP0.prototype={
$1(d){return this.a.c6=d},
$S:7}
C.eP1.prototype={
$0(){var w=this.a
return w.m(new C.eOX(w))},
$S:0}
C.eOX.prototype={
$0(){var w=this.a
return w.c6=A.k.F(w.c6+90+180,360)-180},
$S:0}
C.eP2.prototype={
$0(){var w=this.a
return w.m(new C.eOW(w))},
$S:0}
C.eOW.prototype={
$0(){var w=this.a
return w.c4=!w.c4},
$S:0}
C.eP3.prototype={
$0(){var w=this.a
return w.m(new C.eOV(w))},
$S:0}
C.eOV.prototype={
$0(){var w=this.a
return w.cJ=!w.cJ},
$S:0}
C.ePR.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i9j(v,w.p4)},
$S:0}
C.ePJ.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bnz:B.fO(v,A.A,w,w,A.ce,A.bU,!1,w,!1,w,w)
return C.fzw(d.length===0?"rounded":d,u,e)},
$S:140}
C.ePF.prototype={
$0(){var w=this.a
return w.m(new C.ePE(w))},
$S:0}
C.ePE.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.ePG.prototype={
$0(){var w=this.b
return w.m(new C.ePD(this.a,w))},
$S:0}
C.ePD.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.ePH.prototype={
$0(){var w=this.b
return w.m(new C.ePC(this.a,w))},
$S:0}
C.ePC.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.ePI.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:7}
C.eQ1.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.n(20),p=B.a([new B.ac(-4,A.G,A.b5.j(0.35),A.J,30)],x.V),o=B.n(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.eH(n.chw(),n.r))
l.push(new C.II(n.cuD(),!1,!1,t))
o=B.bT(0,B.bw(o,new B.eH(new B.an(A.V,t,A.b0,A.r,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.n(8)
return B.p(t,new B.an(A.V,t,A.a9,A.r,B.a([o,B.ao(t,B.aB(A.ch,B.c0(t,new B.o(t,t,B.I(A.c.j(0.3),A.q,1),u,t,t,A.n),A.be),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eQ0(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a7),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:205}
C.eQ0.prototype={
$1(d){var w=this.a
return w.m(new C.eQ_(w,d,this.b,this.c))},
$S:21}
C.eQ_.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eQa.prototype={
$0(){var w=this.a
return w.m(new C.eQ9(w,this.b))},
$S:0}
C.eQ9.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.ePr.prototype={
$0(){var w=this.a.c
w.toString
return B.a4(w,!1).la()},
$S:0}
C.eQI.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a7(Math.min(s*0.4,460),t,B.w(B.a([w.aZf(),B.E(B.au(w.b1b(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.E(B.w(B.a([B.E(w.aPJ(),1),w.aLY()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.w(B.a([s.aZf(),new B.D(A.hx,B.au(s.b1b(u),t,t,t),t),B.E(s.aPJ(),1),s.aLY()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:635}
C.fwN.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.eq(k,!1,j,A.aD,"",4280640491,i,l,m,"",h,C.bzz(),null,"","",0,!1,"",0,D.bf,4280172719,2,d,0,0,"",D.cl,D.cP,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bo,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bo,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bo,A.O)},
$S:z+98}
C.fwM.prototype={
$3(d,e,f){var w=this,v=C.bzz(),u=w.b?A.H:A.cv,t=w.c?A.cE:A.bo
return C.eq(w.d,!1,f,A.aD,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bf,4280172719,2,d,0,w.f,w.e,D.cl,D.cP,0.82,0.09,w.a)},
$S:z+28}
C.ceo.prototype={
$1(d){return B.u(d)},
$S:17}
C.fEt.prototype={
$0(){return this.a},
$S:z+15}
C.fkc.prototype={
$1(d){return d.a.d_(this.a)},
$S:z+30}
C.fkd.prototype={
$2(d,e){return J.cm(e)},
$S:z+31}
C.fEv.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fEy.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fEz.prototype={
$0(){return A.d.gH(D.wa)},
$S:z+33}
C.fEr.prototype={
$1(d){return d.a},
$S:z+16}
C.fEu.prototype={
$1(d){return d.a},
$S:z+16}
C.fCr.prototype={
$1(d){return A.a.i(B.u(d))},
$S:17}
C.fCs.prototype={
$1(d){return d.length!==0},
$S:3}
C.fCt.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fwR.prototype={
$0(){return C.cB()},
$S:22}
C.fwU.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cl,s=u?n:0
return C.eq(j,l,v,A.aD,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bf,4280172719,2,d,s,0,"",t,D.cP,g,e,f)},
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
C.fwT.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.eq(A.bh,!1,4279310375,A.aD,"",i,24,A.bo,A.a6,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cl,D.f5,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fwS.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cl,t=v?j:0
return C.eq(A.bh,!1,4279310375,A.aD,"",4280640491,24,A.bo,A.a6,"",h,w,d,v?k:"",l,0,!1,"",0,D.bf,4280172719,2,"",t,0,"",u,D.lz,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.qj,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fwQ.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fzh.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hi2.c7(0,A.a.i(s.w).toLowerCase(),new C.fzf(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c7(0,s.r,new C.fzg(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bv(t.e,new B.bnC(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1684}
C.fzf.prototype={
$0(){return F.aN7(this.a.w)},
$S:182}
C.fzg.prototype={
$0(){var w=this.a.r,v=B.aL(w.toLowerCase()," ","_")
return F.byt("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.id(2,w,A.cf,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:182}
C.fcD.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fcE.prototype={
$1(d){return d.a},
$S:z+18}
C.fcF.prototype={
$1(d){return d.b},
$S:z+19}
C.fNy.prototype={
$1(d){return D.hao},
$S:z+41}
C.eWW.prototype={
$0(){return this.a.x=C.hME(this.b,this.c.b)},
$S:0}
C.eWX.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eWU.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:360}
C.eWV.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:360}
C.eWT.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bQ(A.au,null,new C.eWO(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.jS,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b3(s,7)
if(r.length===0){n.m(new C.eWP(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hnW(o,m.cIh(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.eWQ(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eWO.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eWS(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b65,A.f,p,p,D.b17,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.Cd:D.Ci,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a7(64,64,C.fzw(v,i.b3e(h),u),p)))}t=B.lA(1,m,4,10,10,p,A.dT,!0)
if(!l)return B.bl(!0,new B.D(A8.xT,t,p),!0,!1,A.ae,!0,!0)
s=new C.eWR(i,d)
m=B.aH(d,A.bW,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.H_[e]
l.push(s.$2(r.a,r.b))}return B.bl(!0,new B.cT(new B.aX(0,1/0,0,m.a.b*0.85),B.cc(B.w(B.a([D.fsc,A.R,t,A.dY,D.eQF,A.av,D.fCW,A.R,B.lA(1.15,l,3,10,10,p,A.dT,!0)],n),A.F,p,A.e,A.j,0,A.p),A.r,p,A.y,p,A8.xT,p,p,A.ah),p),!0,!1,A.ae,!0,!0)},
$S:25}
C.eWS.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.n(16),t=v?A.b5.j(0.22):A.c.j(0.04),s=v?A.by:A.dB
return B.aB(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.q,v?2:1),u,w,w,A.n),w,w,w,w,A.hy,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eWN(this.b,d),w,w,w,w,w,w,!1,A.a7)},
$S:1685}
C.eWN.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.eWR.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.n(12),r=t?A.bL:A.bD
r=B.I(r,A.q,t?2.5:1)
w=B.n(10)
u=B.E(B.p(v,B.bw(w,d.length===0?B.p(v,D.ao0,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e1(new C.Nq(u.FC(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aB(v,B.w(B.a([u,A.av,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bL:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eWM(this.b,d),v,v,v,v,v,v,!1,A.a7)},
$S:140}
C.eWM.prototype={
$0(){B.a4(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.eWP.prototype={
$0(){var w=this.a
return w.w=w.w.FC("")},
$S:0}
C.eWQ.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eWC.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eWD.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eWF.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eWG.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eWH.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eWI.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eWE(w,d))},
$S:2}
C.eWE.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eWJ.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.u(this.b)},
$S:0}
C.eX9.prototype={
$0(){return this.a.f.fL()},
$S:0}
C.eXa.prototype={
$0(){var w=this.a
return w.m(new C.eX8(w))},
$S:0}
C.eX8.prototype={
$0(){return this.a.e=null},
$S:0}
C.eXb.prototype={
$0(){var w=this.a
return w.m(new C.eX7(w))},
$S:0}
C.eX7.prototype={
$0(){return this.a.x=null},
$S:0}
C.eXd.prototype={
$1(d){var w=this.a
return w.m(new C.eX6(w,d))},
$S:33}
C.eX6.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eXe.prototype={
$1(d){var w=this.a
return w.m(new C.eX5(w,d))},
$S:33}
C.eX5.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eXf.prototype={
$0(){var w=this.a
return w.m(new C.eX4(w))},
$S:0}
C.eX4.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eXg.prototype={
$1(d){var w=this.a
return w.m(new C.eX3(w,d))},
$S:33}
C.eX3.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eXh.prototype={
$1(d){var w=this.a
return w.m(new C.eX2(w,d))},
$S:33}
C.eX2.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eXi.prototype={
$0(){var w=this.a
return w.m(new C.eX1(w))},
$S:0}
C.eX1.prototype={
$0(){var w=this.a
return w.w=w.w.FC("")},
$S:0}
C.eXj.prototype={
$0(){var w=this.a
return w.m(new C.eX0(w,this.b))},
$S:0}
C.eX0.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eXk.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a7(u,null,w.bNU(D.a39[v]),null))
return B.bZ(A.bC,t,A.br,8,8)},
$S:160}
C.eXc.prototype={
$1(d){var w=this.a
return w.m(new C.eX_(w,d))},
$S:8}
C.eX_.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eWK.prototype={
$0(){var w=this.a
return w.m(new C.eWL(w,this.b,this.c))},
$S:0}
C.eWL.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.M(0,w)},
$S:0}
C.eWZ.prototype={
$0(){var w=this.a
return w.m(new C.eWY(w,this.b))},
$S:0}
C.eWY.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fNx.prototype={
$1(d){return new C.a07(this.a,this.b,null)},
$S:z+42}
C.eWv.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eWw.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eWx.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aGu?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eWy.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eWz.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eWu(w,d))},
$S:2}
C.eWu.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eWA.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.u(this.b)},
$S:0}
C.eWB.prototype={
$0(){var w=this.b
if(A.a.cc(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bP(0,new B.bb(w,B.hg(A.bv,w.length),A.aM))},
$S:0}
C.fjs.prototype={
$1(d){return d.a===this.a},
$S:207}
C.edT.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gax8(),n=o.x
n===$&&B.c()
w=B.n(16)
v=p.a.c
u=v?D.cRD:D.d7m
t=D.xz.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.q,v?1.8:1.2)
s=D.xz.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.n(15)
n=B.bT(0,B.b3(q,q,q,new C.bh0(n*6.283,q),A.az),0,0,0)
o=o.x
o=B.bT(0,B.bOv(B.eE(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a8(A.a3,A.a8,A.x,B.a([A.K,D.bd6.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.x(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bw(s,new B.an(A.V,q,A.a9,A.r,B.a([n,o,B.au(B.w(B.a([B.X(p.a.c?A.e9:A.lZ,D.xz,q,q,q,20),A.av,B.eM(A.A,B.nS(A.jw,D.flK,new C.edS()),A.f,A.dZ)],r),A.m,q,A.e,A.Q,0,A.p),q,q,q),B.ao(q,B.p(q,D.fiq,A.f,q,q,new B.o(D.xz,q,q,B.n(6),q,q,A.n),q,q,q,q,M.aiZ,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a8(A.ay,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:94}
C.edS.prototype={
$1(d){return D.bXF.aA(0,d)},
$S:67}
C.fEA.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fEB.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:207}
C.fEC.prototype={
$2(d,e){return A.o.aM(e.a.length,d.a.length)},
$S:1686}
C.fED.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aL(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aL(u,p,q.toUpperCase())}return u},
$S:14}
C.fEw.prototype={
$1(d){return d.a},
$S:z+18}
C.fEx.prototype={
$1(d){return d.b},
$S:z+19}
C.fML.prototype={
$1(d){return new C.Zv(this.a,this.b,null)},
$S:z+44}
C.dj2.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dj3.prototype={
$1(d){return d.a===this.a.gaih()},
$S:z+10}
C.dj4.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dj7.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.dj8.prototype={
$0(){var w=this.a
return w.m(new C.dj6(w,this.b))},
$S:0}
C.dj6.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dj9.prototype={
$1(d){var w=this.a
return w.m(new C.dj5(w,d))},
$S:8}
C.dj5.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.edR.prototype={
$1$2(d,e,f){var w=B.bn(d,!0,f)
A.d.fN(w,this.a)
return B.dc(w,0,B.dG(e,"count",x.S),B.T(w).c).dM(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1687}
C.f95.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.eq(A.bh,!1,4279310375,A.aD,"",i,24,A.bo,A.a6,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f5,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cl,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.f97.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.eq(A.L,!1,this.b.d,A.aD,"",4280640491,i,A.bo,A.cM,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bf,4280172719,2,d,l,0,"",D.mG,D.cP,g,e,f)},
$S:z+46}
C.f96.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.wy(0,"twinkle")
w=t===D.bf?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mG,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.f94.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fxY.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fxZ.prototype={
$0(){return A.d.gH(D.H8)},
$S:z+49}
C.fy_.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fb4.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fE2.prototype={
$1(d){var w=2450411,v=4281908728
C.dy(d,C.dz(4280171146,1,0,D.bf,w,0,0.52,0,0))
C.dy(d,C.dz(v,1,0,D.bf,w,0,0.04,0.48,0))
C.dy(d,C.dz(4294047225,0.38,0,D.bf,w,0,0.48,0.52,0.62))
C.dy(d,C.dz(v,0.006,0,D.fr,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fE3.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dy(d,C.dz(4280172719,0.8,0,D.bf,w,0,0.36,0.58,0.1))
C.dy(d,C.dz(v,0.64,0,D.bf,w,0,0.28,0.64,0.18))
C.dy(d,C.dz(4282090230,0.44,0,D.bf,w,0,0.2,0.7,0.28))
C.dy(d,C.dz(v,0.006,0,D.fr,v,3,0.22,0.08,0.12))
C.dy(d,C.dz(u,0.004,0,D.fr,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fE4.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(4279080072,0.11,0,D.bf,w,0,1,0,0))
C.dy(d,C.dz(4279310375,0.11,0,D.bf,w,0,1,0,0.89))
C.dy(d,C.dz(856528008,0.72,0,D.jR,w,0,0.28,0.72,0.14))
C.dy(d,C.dz(1426953352,0.2,0,D.jR,w,0,0.2,0.78,0.22))
C.dy(d,C.dz(v,0.004,0,D.fr,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fEf.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4279203438,0.55,0,D.jR,w,0,0.5,0.55,-0.05))
C.dy(d,C.dz(4280171146,0.5,0,D.jR,w,0,0.45,0.62,0.35))
C.dy(d,C.dz(4280640491,0.4,0.3,D.jQ,w,0,0.35,0.68,0.55))
C.dy(d,C.dz(571438702,0.12,0,D.bf,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fEk.prototype={
$1(d){var w=4280472558
C.dy(d,C.dz(4279310375,0.75,-0.4,D.jQ,2450411,0,0.75,-0.15,0.35))
C.dy(d,C.dz(w,0.55,0,D.bf,2450411,0,0.06,0.42,0.38))
C.dy(d,C.dz(w,0.006,0,D.fr,w,3,0.35,0.08,0.08))
C.dy(d,C.dz(2282478,0.12,0,D.bf,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fEl.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3423541034,0.48,0,D.bf,w,0,1,0,0))
C.dy(d,C.dz(v,0.12,-0.08,D.jR,w,0,1.1,-0.05,0.38))
C.dy(d,C.dz(858088427,0.35,0,D.bf,w,0,0.42,0.55,0.05))
C.dy(d,C.dz(v,0.006,0,D.fr,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fEm.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cQD[w]
u=Date.now()
t=$.j1
$.j1=t+1
v=new C.eG("design_"+(""+1000*u+"_"+t),D.f5,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a6,A.bo,A.aD,4279310375,A.bh,null,D.bf,v,4294967295,2,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.Ko
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ca(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fr,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fEn.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.mn,A.dr,w/3).l()
u=Date.now()
t=$.j1
$.j1=t+1
v=new C.eG("design_"+(""+1000*u+"_"+t),D.f5,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a6,A.bo,A.aD,4279310375,A.bh,null,D.CS,v,2450411,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.Ko
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ca(d.z,0,v)}C.dy(d,C.dz(s,0.006,0,D.fr,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fEo.prototype={
$1(d){var w=4294967295
C.dy(d,C.dz(4280640491,1,0,D.bf,2450411,0,0.42,0,0))
C.dy(d,C.dz(4280110808,1.1,1.57,D.jQ,2450411,0,0.18,0.35,-0.05))
C.dy(d,C.dz(w,0.006,0,D.fr,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fEp.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dy(d,C.dz(w,0.1,0,D.bf,v,0,1,0,0))
C.dy(d,C.dz(u,0.012,0,D.bf,v,0,1,0,0.1))
C.dy(d,C.dz(u,0.006,0,D.fr,u,3,0.42,0.06,0.14))
C.dy(d,C.dz(403446057,0.68,0,D.jR,v,0,0.22,0.72,0.18))
C.dy(d,C.dz(w,0.1,0,D.bf,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fEq.prototype={
$1(d){var w=4278630100
C.dy(d,C.dz(4279310375,1.2,0.15,D.jR,2450411,0,0.55,-0.2,-0.1))
C.dy(d,C.dz(w,1.1,0.15,D.bf,2450411,0,0.08,0.15,-0.05))
C.dy(d,C.dz(1120295,0.18,0,D.bf,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fE5.prototype={
$1(d){var w=4292617766
C.dy(d,C.dz(4282714634,0.65,-0.2,D.jQ,2450411,0,0.65,-0.1,0.45))
C.dy(d,C.dz(w,0.5,-0.15,D.jQ,2450411,0,0.5,0.05,0.55))
C.dy(d,C.dz(w,0.006,0,D.fr,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fE6.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(4278413729,0.35,3.14,D.jQ,w,0,0.45,-0.05,0.7))
C.dy(d,C.dz(4278355143,0.3,3.14,D.jQ,w,0,0.4,0.25,0.75))
C.dy(d,C.dz(4279150057,0.32,3.14,D.jQ,w,0,0.5,0.55,0.72))
C.dy(d,C.dz(863884284,0.22,0,D.eN,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fE7.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dy(d,C.dz(w,0.14,0,D.bf,v,0,0.14,0.02,0.02))
C.dy(d,C.dz(2282478,0.14,0,D.bf,u,3,0.14,0.84,0.02))
C.dy(d,C.dz(w,0.28,0,D.jR,v,0,0.35,-0.08,0.78))
C.dy(d,C.dz(u,0.22,0.5,D.jQ,v,0,0.3,0.72,0.78))
C.dy(d,C.dz(w,0.006,0,D.fr,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fE8.prototype={
$1(d){var w=4293571336,v=1156231944
C.dy(d,C.dz(1841431,0.92,0,D.bf,w,3,0.92,0.04,0.04))
C.dy(d,C.dz(v,0.15,0,D.jQ,2450411,0,0.15,0.02,0.02))
C.dy(d,C.dz(v,0.15,3.14,D.jQ,2450411,0,0.15,0.83,0.83))
C.dy(d,C.dz(w,0.004,0,D.fr,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fE9.prototype={
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
C.fEa.prototype={
$1(d){var w=2450411,v=4280640491
C.dy(d,C.dz(3708753706,0.42,0,D.bf,w,0,1,0,0))
C.dy(d,C.dz(v,0.06,-0.05,D.jR,w,0,1,0,0.38))
C.dy(d,C.dz(859356664,0.25,0,D.eN,w,0,0.25,0.7,0.08))
C.dy(d,C.dz(v,0.006,0,D.fr,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fEb.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.mn,A.dr,w/3).l()
u=Date.now()
t=$.j1
$.j1=t+1
v=new C.eG("design_"+(""+1000*u+"_"+t),D.f5,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a6,A.bo,A.aD,4279310375,A.bh,null,D.CS,v,2450411,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.Ko
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ca(d.z,0,v)}C.dy(d,C.dz(4280172719,0.08,0,D.bf,2450411,0,1,0,0))
C.dy(d,C.dz(s,0.006,0,D.fr,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fEc.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.j1
$.j1=u+1
u=new C.eG("design_"+(""+1000*v+"_"+u),D.f5,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a6,A.bo,A.aD,s,A.bh,null,D.fr,t,t,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
v=$.Ko
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ca(d.z,0,u)}C.dy(d,C.dz(s,0.75,0,D.bf,2450411,0,0.22,0.72,0.1))
C.dy(d,C.dz(872415231,0.16,0,D.bf,2450411,0,0.16,0.75,0.15))
C.dy(d,C.dz(s,0.006,0,D.fr,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fEd.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dy(d,C.dz(4674921,0.9,0,D.bf,4287931320,2,0.9,0.05,0.05))
C.dy(d,C.dz(w,0.08,0,D.bf,v,0,0.08,0.03,0.03))
C.dy(d,C.dz(u,0.08,0,D.bf,v,0,0.08,0.89,0.03))
C.dy(d,C.dz(u,0.08,0,D.bf,v,0,0.08,0.03,0.89))
C.dy(d,C.dz(w,0.08,0,D.bf,v,0,0.08,0.89,0.89))
C.dy(d,C.dz(w,0.004,0,D.fr,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fEe.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.j1
$.j1=t+1
t=new C.eG("design_"+(""+1000*u+"_"+t),D.f5,0.55,0.14+v,0.38,0.18,"",24,A.a6,A.bo,A.aD,r,A.bh,null,D.bf,4294967295,4280640491,2,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.Ko
t.db="__design__:"+(u.length===0?"layer":u)
A.d.ca(d.z,0,t)
u=B.aq(A.d5,A.cn,w/2).l()
t=Date.now()
s=$.j1
$.j1=s+1
u=new C.eG("design_"+(""+1000*t+"_"+s),D.f5,0.57,0.16+v,0.06,0.14,"",24,A.a6,A.bo,A.aD,r,A.bh,null,D.bf,u,q,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
v=$.Ko
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ca(d.z,0,u)}C.dy(d,C.dz(4280171146,1,0,D.bf,q,0,0.48,0,0))
C.dy(d,C.dz(4280172719,1.1,1.57,D.jQ,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fEg.prototype={
$1(d){var w=2450411
C.dy(d,C.dz(870995980,0.55,0.45,D.jR,w,0,0.55,-0.12,-0.08))
C.dy(d,C.dz(856996006,0.45,0.45,D.jR,w,0,0.45,0.62,-0.05))
C.dy(d,C.dz(16777215,0.38,0.45,D.jR,4293548044,5,0.38,0.52,0.12))
C.dy(d,C.dz(585783308,0.3,0.45,D.jR,w,0,0.3,0.56,0.16))
C.dy(d,C.dz(4279548070,0.06,0,D.bf,w,0,0.16,0.38,0.04))
C.dy(d,C.dz(1156208652,0.28,0,D.eN,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fEh.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dy(d,C.dz(w,1,0,D.bf,v,0,0.07,0,0))
C.dy(d,C.dz(u,0.1,0,D.bf,t,1,0.46,0.48,0.14))
C.dy(d,C.dz(u,0.1,0,D.bf,t,1,0.46,0.48,0.28))
C.dy(d,C.dz(u,0.1,0,D.bf,t,1,0.46,0.48,0.42))
C.dy(d,C.dz(s,0.08,0,D.eN,v,0,0.08,0.5,0.16))
C.dy(d,C.dz(w,0.08,0,D.eN,v,0,0.08,0.5,0.3))
C.dy(d,C.dz(4279548070,0.08,0,D.eN,v,0,0.08,0.5,0.44))
C.dy(d,C.dz(16777215,0.32,0.45,D.jR,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fEi.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dy(d,C.dz(4294047225,0.08,0,D.bf,t,2,0.1,0.02,0.06))
C.dy(d,C.dz(s,0.42,0,D.bf,2450411,0,0.36,0.58,0.18))
C.dy(d,C.dz(872415231,0.12,0,D.bf,2450411,0,0.28,0.62,0.24))
C.dy(d,C.dz(16777215,0.28,0,D.eN,s,4,0.32,0,0.72))
C.dy(d,C.dz(r,0.006,0,D.fr,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.j1
$.j1=u+1
u=new C.eG("design_"+(""+1000*v+"_"+u),D.f5,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a6,A.bo,A.aD,4279310375,A.bh,null,D.eN,16777215,t,2,0,!1,"",0,D.cl,0,"","","","","",!1,0)
v=$.Ko
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ca(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fEj.prototype={
$1(d){var w=2450411,v=4279548070
C.dy(d,C.dz(3423541034,0.55,0,D.bf,w,0,1,0,0))
C.dy(d,C.dz(4009754623,0.56,0.45,D.jR,w,0,0.56,0.22,0.18))
C.dy(d,C.dz(3439329279,0.44,0.45,D.jR,w,0,0.44,0.28,0.24))
C.dy(d,C.dz(v,0.07,0,D.bf,w,0,0.22,0.34,0.62))
C.dy(d,C.dz(v,1,0,D.bf,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fvO.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fvP.prototype={
$0(){return A.d.gH($.bDb())},
$S:z+52}
C.fj0.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fj_.prototype={
$1(d){return C.hTV(d,this.a,this.b)},
$S:z+53}
C.fEJ.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vP(1.0375,1.01875,1)
return new B.fR(v,u,new C.aS7(B.hJF(A.v1,C.hTY(w.c,w.d,v,u),t)))},
$S:356}
C.dTe.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:9}
C.dTd.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c0(w,new B.o(w,w,w,w,w,new B.c_(A.K9,1.2,A.x,w,0,u.d,w,w),A.n),A.be),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jx(new B.an(A.V,w,A.b0,A.r,B.a([t,new B.eH(B.b3(w,w,w,new C.bdX(u.a,r,q,r),A.az),w),B.au(new B.jI(r,new C.dTc(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.r,w)},
$S:376}
C.dTc.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.et.au(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gH(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hZ(B.fO(i,A.A,r,r,A.ce,A.bU,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fW(A.A,0,6.283185307179586,A.x,t,r,new B.mp(e*0.8)),A.a5),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a7(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bqk(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cS(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a7(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.db(B.dU(B.w(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a8(A.a3,A.a8,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a7(r,m*0.022,r,r),B.d(w.a.c.gaKw(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a6,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.Q,0,A.p),new B.x(0,(1-o)*m*0.03)),o))
return B.db(B.ed(A.A,new B.D(new B.Q(l,0,l,0),B.w(j,A.m,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:105}
C.eVJ.prototype={
$1(d){var w=this.b
return new B.a8(A.ay,A.aC,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).aA(0,d)},
$S:67}
C.c8V.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.n(14),t=g?A.bL:A.bD
t=B.I(t,A.q,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hH.j(0.4),A.J,14)],x.V):v
w=B.de(v,B.bw(B.n(12),d,A.aq),v,v,A.bb,new B.o(v,v,t,u,w,v,A.n),A.eJ,v,72,v,v,v,v,v)
return B.aB(v,new B.a7(112,v,B.w(B.a([w,A.fF,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bL:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a7)},
$S:1688}
C.c8W.prototype={
$0(){var w=this.a
return w.d.$1(w.c.FC(""))},
$S:0}
C.c8X.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e1(new C.Nq(v.FC(u),!0,!1,null),!0,null),d.b,new C.c8Y(w,this.c,d),v.a===u)},
$S:z+54}
C.c8Y.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hnW(u.b,t.c.FC(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fLa.prototype={
$1(d){return new C.Z3(this.a,null)},
$S:z+55}
C.d8k.prototype={
$0(){var w=this.a
w.d=w.gvD().bbe("data:"+this.b+";base64,"+A.cJ.gct().aK(this.c));++w.r},
$S:0}
C.d8p.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.d8q.prototype={
$0(){var w=this.a
return w.m(new C.d8o(w))},
$S:0}
C.d8o.prototype={
$0(){return this.a.r++},
$S:0}
C.d8r.prototype={
$1(d){var w=this.a
return w.m(new C.d8n(w,d))},
$S:2}
C.d8n.prototype={
$0(){var w=this.a
return w.d=w.gvD().aDs(this.b)},
$S:0}
C.d8s.prototype={
$0(){var w=this.a
return w.m(new C.d8m(w))},
$S:0}
C.d8m.prototype={
$0(){var w=this.a
return w.d=w.gvD().bbe("")},
$S:0}
C.d8t.prototype={
$1(d){var w=this.a
return w.m(new C.d8l(w,d))},
$S:2}
C.d8l.prototype={
$0(){var w=this.a
return w.d=w.gvD().bbl(this.b)},
$S:0}
C.d8u.prototype={
$0(){var w=this.a
w=w.gvD().bbl(w.gax9().a.a)
B.a4(this.b,!1).O(w)
return null},
$S:0}
C.fL9.prototype={
$1(d){var w={}
w.a=this.a
return new B.dY(new C.fL8(w),null)},
$S:19}
C.fL8.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bl(!0,new B.cT(new B.aX(0,1/0,0,B.aH(d,A.bW,x.w).w.a.b*0.85),B.cc(B.w(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.b1,w,w,B.n(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.fA1,A.av,D.fAh,A.aB,new C.aZs(v.a,new C.fL7(v,e,d),!0,w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.ae,!0,!1),A.f,w,w,D.b1G,w,w,w,w,A.Mw,w,w,w)},
$S:167}
C.fL7.prototype={
$1(d){this.b.$1(new C.fL6(this.a,d))
B.a4(this.c,!1).O(d)},
$S:z+56}
C.fL6.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fNw.prototype={
$1(d){return D.h4O},
$S:z+57}
C.df5.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.df6.prototype={
$0(){var w=this.a.c
w.toString
B.a4(w,!1).O(this.b)
return null},
$S:0}
C.df7.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a4(w,!1).O(v)}},
$S:0}
C.fBp.prototype={
$1(d){var w=this.b
return new B.a8(A.ay,A.aC,A.x,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).aA(0,d)},
$S:67}
C.d81.prototype={
$3(d,e,f){var w,v=this,u=new B.aO($.W().r,A.ao,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.E(new B.b5(t+r*1.2,o))
u.E(new B.cR(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.E(new B.cR(w,q+p,w,q+p*1.2))
u.E(new B.D3(B.bU(new B.x(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aS(u,v.d)
s.aS(u,v.e)
p=B.N()
p.r=B.aq(v.a.d,A.c,0.6).gp(0)
s.af(new B.x(w,o),2.2,p)},
$S:432}
C.fBt.prototype={
$2(d,e){return A.k.aM(d.c,e.c)},
$S:z+58}
C.ftS.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.ftT.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xW,B.w(B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.b1,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bw,D.fiH,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dn(D.GG,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.ftQ(d),B.bm(A.bZ,w,w,w,A.c,w,A.ck,w,w,w,w,w)),A.R,B.er(A.o6,D.U5,new C.ftR(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.x0,w,w,w,w))],x.p),A.ai,w,A.e,A.Q,0,A.p),w),!0,!1,A.ae,!0,!0)},
$S:25}
C.ftQ.prototype={
$0(){B.a4(this.a,!1).O("continue")
return null},
$S:0}
C.ftR.prototype={
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
u=C.hPJ(b2.h(0,"type"))
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
n=A.ayI[A.o.D(b4,0,8)]
m=D.cTw[A.o.D(w,0,1)]
l=C.hTm(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.avq[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hWc(b2.h(0,"shape"))
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
a3=C.hj9(b2.h(0,"textTransition"))
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
$1(d){return C.h9N(B.a2(d,x.N,x.z))},
$S:z+64}
C.ceD.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.ceE.prototype={
$0(){return A.d.gH(D.a2O)},
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
$1(d){return new B.M(d,new C.ceu(),B.T(d).k("M<1,S>")).ff(0,new C.cev())},
$S:z+69}
C.ceu.prototype={
$1(d){return d.f},
$S:z+70}
C.cev.prototype={
$2(d,e){return d.cd(e)?d:e},
$S:670}
C.cew.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hFu(d)},
$S:z+71}
C.cez.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+2}
C.ceA.prototype={
$2(d,e){return e.f.aM(0,d.f)},
$S:z+21}
C.ceB.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fC1.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.L)(w),++r){q=w[r]
p=q.a
if(s.ai(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.L)(o),++l){k=o[l]
j=k.a
if(t.q(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.M(0,j)
break}}}},
$S:z+73}
C.fBY.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fBZ.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fC_.prototype={
$2(d,e){var w
if(d.b===D.cP){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fC0.prototype={
$2(d,e){return d.b===D.f5&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.ceh.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.i3Z(b2,b3),b5=B.a6(b4).k("bc<2>")
b5=B.cC(new B.bc(b4,b5),new C.ceg(),b5.k("J.E"),x.N)
w=B.df(b5,B.a6(b5).k("J.E"))
b1=b1.e
v=A.pP.au(0,A.k.D(b1,0,1))
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
if(w.q(0,l.a))continue
k=A.jC.au(0,A.k.D(n,0,1))
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
a5=r.$1(a4)}else a5=a2===D.lz&&l.at==i.at?r.$1(i):new B.an(A.V,a8,A.b0,A.r,B.a([new B.kF(A.k.D(o,0,1),r.$1(l),a8),new B.kF(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iI(B.wi(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cl)a7=D.mG
p.push(s.$5(i.c,i.d,i.e,i.f,C.hlo(a7,a6,r.$1(i))))}}return B.c0(new B.an(A.V,a8,A.a9,A.r,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a8(A.a3,A.a8,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.be)},
$S:419}
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
return new C.a7s(v,C.b0A(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dGd.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ed(new B.dd(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:45}
C.ceq.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.cer.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fEQ.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:343}
C.fDX.prototype={
$1(d){return new C.ad5(this.a,this.b,null)},
$S:z+78}
C.eoW.prototype={
$0(){return this.a.PS(this.b,C.i7j(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eoX.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.PS(this.b,C.i7l(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eoY.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.PS(this.b,C.i7k(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eoZ.prototype={
$0(){Y.hl8()
B.a4(this.a,!1).O(null)},
$S:0}
C.cef.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1693}
C.cee.prototype={
$2(d,e){var w,v=this,u=null,t=B.dM(d,A.nz),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.D(p*Math.max(B.jK(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bU:A.dv
return B.fO(t,A.A,o,new C.ced(),A.ce,w,!0,u,!1,new B.cw("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1694}
C.ced.prototype={
$3(d,e,f){return D.ac4},
$S:220}
C.fBX.prototype={
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
r=B.C(new B.M(r,new C.fBW(e.b,e.d),u),u.k("ak.E"))
return B.bw(s,B.c0(new B.an(A.V,t,A.a9,A.r,r,t),new B.o(v,t,t,t,t,w,A.n),A.be),A.aq)},
$S:1695}
C.fBW.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b0A(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fly.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cM(r.b,new C.flw(d))
w=B.aH(d,A.bW,x.w).w
v=B.n(22)
u=B.I(A.bD,A.q,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fN,28)],x.V)
s=x.p
return new B.d_(e,!1,B.au(B.aF(!1,A.a1,!0,q,B.p(q,B.w(B.a([B.B(B.a([B.E(B.w(B.a([B.d(r.c,q,q,q,q,q,q,A.kj,q,q,q),A.av,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a6,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bK(!1,A.zQ,q,q,!0,q,q,new C.flx(p,d),q,B.fx(q,q,A.bi,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Ft,q,new B.b7(B.n(12),A.W),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aB,r.d],s),A.m,q,A.e,A.Q,0,A.p),A.f,q,new B.aX(0,w.a.a*0.94,0,1/0),new B.o(A.au,q,u,v,t,q,A.n),q,q,q,A.fL,A.FC,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,q,q),q)},
$C:"$3",
$R:3,
$S:258}
C.flw.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a4(w,!0).pB())B.a4(w,!0).eE()},
$S:0}
C.flx.prototype={
$0(){var w=this.a.a
if(w!=null)w.a7(0)
B.a4(this.b,!0).eE()},
$S:0}
C.f3g.prototype={
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
case 14:return new B.an(A.V,t,A.b0,A.r,B.a([u.c,B.jx(u.b,A.r,new C.aIY(r,t))],x.p),t)
case 15:return new B.an(A.V,t,A.b0,A.r,B.a([u.c,B.jx(u.b,A.r,new C.aIY(1-r,t))],x.p),t)
case 16:v=D.b55.au(0,r)
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
C.dRr.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:11}
C.dRq.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:11}
C.dRp.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hlo(v,w,e)},
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
return B.c0(new B.an(A.V,r,A.a9,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.be)},
$S:419}
C.ce6.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cl?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a7s(m,new C.UT(d,C.b0A(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d5g.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d5f(w))},
$S:11}
C.d5f.prototype={
$0(){return this.a.d++},
$S:0}
C.edz.prototype={
$2(d,e){var w,v=null,u=A.o.am(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aNI.q(0,A.d.gH(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.i3I(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dp()
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
C.eTm.prototype={
$1(d){var w
$.W()
w=B.N()
w.b=A.af
w.c=d
w.e=A.hn
return w},
$S:1696}
C.fzx.prototype={
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
if(q==="framed"||q==="gold")w.push(B.b3(r,r,r,new C.bqd(u,t,r),A.az))
w.push(B.nw(s.d,A.aq,new C.bet(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.bpd(u,q,t,r),A.az))
return B.au(new B.a7(v.a,v.b,new B.an(A.V,r,A.b0,A.r,w,r),r),r,r,r)},
$S:242}
C.foz.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:342}
C.ev9.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.CQ(t.a.a.c),$async$$0)
case 3:s=e
r=J.a3(s)
if(r.gal(s)){u=null
w=1
break}u=r.dK(s,new C.ev7(),new C.ev8(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1697}
C.ev7.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:193}
C.ev8.prototype={
$0(){return J.fq(this.a)},
$S:1699}
C.erx.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.ery.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.erz.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.et7.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.esW.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.esX.prototype={
$1(d){return d.hG()},
$S:z+81}
C.eqV.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.euf.prototype={
$0(){this.a.tA()},
$S:0}
C.ev5.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.of()
w.K8()},
$S:0}
C.et5.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.of()
w.K8()},
$S:0}
C.euT.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.euU.prototype={
$1(d){return d.b===D.cP},
$S:z+4}
C.euV.prototype={
$1(d){return d.a},
$S:z+22}
C.euW.prototype={
$0(){var w=this.a.r
return new B.ar(new B.bb(w,A.b3,A.aM),$.aw())},
$S:255}
C.euX.prototype={
$0(){return B.jS(!0,null,!0,!0,null,null,!1)},
$S:674}
C.eqj.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.ev6.prototype={
$0(){},
$S:0}
C.ese.prototype={
$0(){var w=this.a
w.e=this.b.hG()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xu()
w.K8()},
$S:0}
C.eqh.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.xu()},
$S:0}
C.eqi.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.xu()},
$S:0}
C.esB.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.esC.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xu()
w.K8()
w.z="Home"},
$S:0}
C.esD.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.esd.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,A.U4,w,w,!0,w,w,new C.esc(d),w,w)],x.p),w,w,w,D.fBP,w,w,w,w,D.fj7,w)},
$S:18}
C.esc.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.esa.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,A.U4,w,w,!0,w,w,new C.es9(d),w,w)],x.p),w,w,w,D.fn4,w,w,w,w,D.fkQ,w)},
$S:18}
C.es9.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.esb.prototype={
$0(){},
$S:0}
C.ert.prototype={
$1(d){return this.a.b_y(C.bBb(d))},
$S:z+7}
C.eru.prototype={
$1(d){return this.a.aeS(C.bBb(d))},
$S:z+7}
C.esk.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.au(B.p(w,w,A.f,w,w,new B.o(A.b1,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bw,D.fBT,A.av,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bw,new C.Pw(A.vO,D.awJ,"HATI YA KUHOWA","Hati ya mahari",new C.esf(d),w),A.R,new C.Pw(A.h9,D.d58,"HATI YA KUHOWESHA","Hati ya kupokea",new C.esg(d),w),A.R,new C.Pw(A.i5,D.cRJ,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.esh(d),w),A.R,new C.Pw(A.hO,D.cPX,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.esi(d),w)],v)
if(this.a.gabp())A.d.v(u,B.a([A.R,new C.Pw(A.j4,D.cAZ,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.esj(d),w)],v))
return B.bl(!0,B.cc(B.w(u,A.ai,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,E.xW,w,w,A.ah),!0,!1,A.ae,!0,!0)},
$S:25}
C.esf.prototype={
$0(){B.a4(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.esg.prototype={
$0(){B.a4(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.esh.prototype={
$0(){B.a4(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.esi.prototype={
$0(){B.a4(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.esj.prototype={
$0(){B.a4(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.esl.prototype={
$0(){var w=this.a
w.e=this.b.hG()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xu()},
$S:0}
C.eql.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eqm.prototype={
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
C.esw.prototype={
$1(d){return d.b===D.lz},
$S:z+4}
C.esx.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gH(v).go
w.b=A.d.gH(v).id
return new B.dY(new C.esu(w,this.a,v),null)},
$S:19}
C.esu.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.esv(p,o,a3,n),l=B.P(a2).ax.a===A.I,k=l?A.c:A.M,j=l?A.aQ:A.ak,i=l?A.bl:A.bM,h=l?A.M:A.c,g=B.n(28),f=B.I(l?A.bD:A.aL,A.q,1),e=x.p,d=B.B(B.a([B.E(B.w(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bz,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aI(q,q,q,q,B.X(A.cy,j,q,q,q,q),q,q,q,new C.esq(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.Ci[w]
v.a=null
t=v.a=u.a
a1.push(new C.bgV(t,u.b,p.a===t,i,k,new C.esr(v,m),q))}a1=B.bZ(A.bC,a1,A.br,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.Cd[w]
s.a=null
t=s.a=r.a
u.push(new C.bgU(t,r.b,p.b===t,k,j,new C.ess(s,m),q))}return B.bl(!0,B.p(q,B.cc(B.w(B.a([d,A.aP,a0,A.R,a1,A.bw,v,A.R,B.bZ(A.bC,u,A.br,12,12),A.bw,new B.a7(1/0,48,B.er(D.bTI,D.fEh,new C.est(o,n),B.dg(q,q,q,q,q,q,q,q,q,A.aF,q,q,q,q,new B.b7(B.n(16),A.W),D.b_b,q,q,q,q)),q)],e),A.F,q,A.e,A.Q,0,A.p),A.r,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.tI,D.bvb,q,q,q),!0,!1,A.ae,!0,!0)},
$S:89}
C.esv.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eso(w.a,d,e))
w.b.d4(new C.esp(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1702}
C.eso.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.esp.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.esq.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.esr.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.ess.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.est.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.GB(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d4(new C.esn(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.esn.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.esz.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.esA.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bs(v,new C.esy(t.d))
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
C.esy.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.esR.prototype={
$1(d){return d.b===D.cP},
$S:z+4}
C.esS.prototype={
$1(d){return d.w},
$S:z+82}
C.esT.prototype={
$2(d,e){return d>e?d:e},
$S:79}
C.esU.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.c:A.M,s=u?A.aQ:A.ak,r=u?A.bl:A.aO,q=u?A.M:A.c,p=B.n(28),o=B.I(u?A.bD:A.aL,A.q,1),n=B.aH(d,A.bW,x.w).w,m=w.a,l=x.p,k=w.b
return B.bl(!0,B.p(v,B.w(B.a([B.B(B.a([B.p(v,D.bNo,A.f,v,v,D.b0y,v,38,v,v,v,v,v,38),A.bd,B.E(B.w(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aI(v,v,v,v,B.X(A.cy,s,v,v,v,v),v,v,v,new C.esO(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aB,new B.dq(1,A.cm,B.hM(v,new C.esP(m,k,w.c,s,w.d,t,r),k.length,A.fB,v,A.ah,new C.esQ(),!0),v)],l),A.F,v,A.e,A.Q,0,A.p),A.f,v,new B.aX(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.tI,A.Z4,v,v,v),!0,!1,A.ae,!0,!0)},
$S:25}
C.esO.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.esQ.prototype={
$2(d,e){return A.ac},
$S:36}
C.esP.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aF:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cv
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aI(q,q,q,q,D.bQy,q,q,q,new C.esM(s,w,p),q,q,q,q,"Add an icon",q)
return B.w(B.a([new B.D(D.bxr,n,q),B.aM(q,A.U,!1,q,!0,A.r,q,B.aN(),v,q,q,q,q,q,2,B.bs(q,new B.b4(4,B.n(16),A.W),q,A.eR,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b4(4,B.n(16),D.aZR),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.aj,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.esN(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.aa,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a4,q,A.an,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:675}
C.esM.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.i9s(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geD()?p.a:q.a.length
n=p.geD()?p.b:q.a.length
m=A.a.oM(q.a,o,n,s)
r.bP(0,new B.bb(m,B.hg(A.bv,o+s.length),A.aM))
l.aiX(k,m)
l.pn()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.esN.prototype={
$1(d){var w=this.a
w.aiX(this.b.a,d)
w.pn()},
$S:2}
C.esV.prototype={
$0(){},
$S:0}
C.esm.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eqC.prototype={
$0(){},
$S:0}
C.eqD.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hmI(this.b,w,!0)
w=this.a
w.r=null
w.xu()},
$S:0}
C.eqE.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eqF.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bs(v,new C.eqB(t.d))
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
C.eqB.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.et0.prototype={
$1(d){return B.oT(new C.et_(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:131}
C.et_.prototype={
$2(d,e){var w=null,v=x.p
return B.w(B.a([new B.D(E.aiF,B.w(B.a([D.fzp,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.E(B.iw(!0,w,e,A.y,D.eX_,new C.esZ(this.a,this.b),20,A.tK,w,A.ah,!1),1)],v),A.ai,w,A.e,A.j,0,A.p)},
$S:411}
C.esZ.prototype={
$2(d,e){var w=null,v=D.H8[e],u=C.hFp(v),t=B.n(16),s=B.n(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.q,1),o=q.j(0.2),n=B.n(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fD,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.eQB,A.f,w,w,new B.o(A.dL.j(0.85),w,w,B.n(8),w,w,A.n),w,w,w,w,A.ne,w,w,w)],m))
return B.aF(!1,A.a1,!0,w,B.aK(!1,t,!0,B.p(w,B.w(B.a([B.B(n,A.m,w,A.e,A.j,0,w,w),A.b4,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a8(A.a3,A.a8,A.x,r,w,w),A.n),w,w,w,w,A.bk,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.esY(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:78}
C.esY.prototype={
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
C.et1.prototype={
$0(){var w=this.a
w.e=this.b.hG()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.xu()},
$S:0}
C.epg.prototype={
$0(){var w,v=this.a,u=v.gqq(),t=C.ry(4294967295,null,0,0,null,C.cB(),D.mF,"","","",D.df),s=this.b
C.ceC(t,s,u)
w=v.gdt()
if(w!=null&&s!==D.CR){t.e=w.e
t.f=w.f}A.d.ca(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eqA.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ag()
q.n(0,"id",C.cB())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aW(w),u=x.f;v.C();){t=v.gT(v)
if(u.b(t)){s=Date.now()
r=$.j1
$.j1=r+1
J.aG(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.ca(v.e.r,v.f+1,C.h9N(q));++v.f},
$S:0}
C.eqy.prototype={
$0(){var w=this.a
A.d.cF(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.et9.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cF(v.e.r,u),s=this.c
A.d.ca(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.equ.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bs(v.d,new C.eqt(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eqt.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.et8.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.S(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eqk.prototype={
$0(){var w=this.a.r
return new B.ar(new B.bb(w,A.b3,A.aM),$.aw())},
$S:255}
C.eqW.prototype={
$0(){return B.jS(!0,null,!0,!0,null,null,!1)},
$S:674}
C.euR.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.euS.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.at9(w).fL()
v=u.Wy(w)
v.sti(B.hg(A.bv,v.a.a.length))},
$S:9}
C.eug.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Xx(v)
if(u!=null&&u.b===D.cP)w.Wy(u).saU(0,u.r)}else w.w=null},
$S:0}
C.eph.prototype={
$0(){var w=C.cB(),v=this.a,u=C.eq(A.bh,!1,v.gqq().e.l(),A.aD,"",4280640491,24,A.bo,A.a6,"",0.22,w,null,"","",0,!1,"",0,D.bf,4280172719,2,"Tap to edit text",0,0,"",D.cl,D.cP,0.7,0.15,0.2)
A.d.M(v.gdt().z,u)
v.r=u.a},
$S:0}
C.epe.prototype={
$0(){var w=C.cB(),v=this.a,u=C.eq(A.bh,!1,4279310375,A.aD,"",v.gqq().c.j(0.25).l(),24,A.bo,A.a6,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqq().c.l(),2,"",0,0,"",D.cl,D.f5,0.25,0.3,0.3)
A.d.M(v.gdt().z,u)
v.r=u.a},
$S:0}
C.ep4.prototype={
$0(){var w=C.eq(A.bh,!1,4279310375,A.aD,"",4280640491,24,A.bo,A.a6,"",0.55,C.cB(),this.b,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cl,D.lz,0.6,0.2,0.18),v=this.a
A.d.M(v.gdt().z,w)
v.r=w.a},
$S:0}
C.ep1.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.c_C],x.p)
for(w=J.aW(this.a);w.C();){v=w.gT(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gajy().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,D.bL4,r,r,r,r,new C.ep0(d,v),!1,r,r,r,r,r,new B.y(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.y(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bl(!0,B.cy(q,r,r,r,r,A.ah,!0),!0,!1,A.ae,!0,!0)},
$S:25}
C.ep0.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.ep2.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cB(),u=this.b,t=A.S.ao(u.ag(),null),s=C.eq(A.bh,!1,4279310375,A.aD,u.b,4280640491,24,A.bo,A.a6,"",0.86,v,null,"","",0,!1,"",0,D.bf,4280172719,2,t,0,0,"",D.cl,D.a5k,w,0.5-w/2,0.07)
t=this.a
A.d.M(t.gdt().z,s)
t.r=s.a},
$S:0}
C.eqw.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eqx.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bs(v.gdt().z,new C.eqv(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.S$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.t()},
$S:0}
C.eqv.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.epJ.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cP)s.Q=t.c.l()
else if(w===D.f5){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.epK(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.L)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.epK.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.epO.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.epP(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.L)(s),++u)v.$1(s[u])}else{t=s.gdt()
if(t!=null)v.$1(t)}},
$S:0}
C.epP.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.epM.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cP){s.Q=t.c
return}w=new C.epN(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.L)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.epN.prototype={
$1(d){var w,v,u
for(w=A.d.gae(d.z),v=new B.f4(w,new C.epL()),u=this.a;v.C();)w.gT(0).Q=u},
$S:z+1}
C.epL.prototype={
$1(d){return d.b===D.cP},
$S:z+4}
C.epI.prototype={
$0(){return C.ceC(this.b,this.c,this.a.gqq())},
$S:0}
C.esL.prototype={
$0(){return A.d.ca(this.a.d,0,this.b)},
$S:0}
C.ev_.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ev0.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.ev1.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ev2.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.ca(s,0,v.b)
else{w=A.d.bg(s,new C.euZ(v))
if(w>=0)t.d[w]=v.b}if(v.a.gSg()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hG()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.xu()
t.K8()}},
$S:0}
C.euZ.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.euw.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.abt(),s=w.b,r=u.abu(A.fb,A.k9,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.n(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.q,1),n=x.p
p=B.a([t,A.N,r,A.bw,B.p(v,B.B(B.a([B.E(u.aUF(w.c,A.ak),1),new B.D(A.fq,B.p(v,D.bLa,A.f,v,v,new B.o(A.fb.j(0.18),v,v,v,v,v,A.a5),v,34,v,v,v,v,v,34),v),B.E(u.aUF(s,A.fb),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a8(A.ay,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.bE,v,v,v),A.bw,u.aUI(A.fb,d,D.bHm,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.R,u.bXk(A.aR,d,A.tZ,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aUG(d,"Not now"))
return new C.JR(B.w(p,A.ai,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.euv.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.JR(B.w(B.a([v.abt(),A.N,v.abu(A.aR,D.bH1,"Pick which saved document should receive the details.","Choose "+this.b),A.aP,new B.cT(new B.aX(0,1/0,0,B.aH(d,A.bW,x.w).w.a.b*0.42),B.hM(w,new C.eut(v,u,d),u.length,w,w,A.ah,new C.euu(),!0),w),A.aB,v.aUG(d,"Cancel")],x.p),A.ai,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.euu.prototype={
$2(d,e){return A.R},
$S:36}
C.eut.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.n(16),t=A.c.j(0.05),s=B.n(16),r=B.I(A.c.j(0.08),A.q,1),q=x.p
return B.aF(!1,A.a1,!0,w,B.aK(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.anw,A.f,w,w,new B.o(w,w,w,B.n(12),w,D.bXA,A.n),w,42,w,w,w,w,w,42),A.bd,B.E(B.w(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.nw,w,w,w),A.cQ,B.d("Updated "+this.a.PT(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a6,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.X(A.eA,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bE,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eus(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:78}
C.eus.prototype={
$0(){B.a4(this.a,!1).O(this.b.a)
return null},
$S:0}
C.eup.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.abt()
t=t.abu(A.aE,A.u7,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.JR(B.w(B.a([s,A.N,t,A.bw,B.B(B.a([B.E(B.dT(A.a8E,new C.eun(d),B.dg(u,u,u,u,u,u,u,u,u,A.c,u,u,A.ck,u,new B.b7(B.n(14),A.W),new B.az(w,1,A.q,-1),u,u,u,u)),1),A.at,B.E(B.bG(D.flp,new C.euo(d),B.bm(A.fb,u,u,u,A.c,u,A.ck,u,new B.b7(B.n(14),A.W),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.ai,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.eun.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.euo.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.eur.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.abt(),s=w.b,r=u.abu(A.aV,A.e9,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.E(u.aut("Names",""+w.c),1),A.ab,B.E(u.aut("Fields",""+w.d),1),A.ab,B.E(u.aut("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bm(A.bi,v,v,v,A.c,v,A.xL,v,new B.b7(B.n(14),A.W),v,v,v)
return new C.JR(B.w(B.a([t,A.N,r,A.aP,p,A.bw,B.bG(B.d("Open "+s,v,v,v,v,v,v,A.nu,v,v,v),new C.euq(d),o),A.R,u.aUH(d,"Stay here",!1)],q),A.ai,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.euq.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.erp.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.ero.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.euh.prototype={
$1(d){return d.b===D.cP},
$S:z+4}
C.euQ.prototype={
$1(d){var w=this.a,v=this.b
return new C.a_f(A.d.dK(w.d,new C.euO(v),new C.euP(v)).hG(),w.f,null)},
$S:z+84}
C.euO.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.euP.prototype={
$0(){return this.a},
$S:z+85}
C.ep9.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bE,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.hq,w,w,w),w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bMX,w,w,w,w,new C.ep7(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fjr,w,w,w)],x.p)
if(v>1)t.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bO8,w,w,w,w,new C.ep8(d),!1,w,w,w,w,w,D.fFu,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dg,w,w,w),w,w,w))
return B.bl(!0,B.w(t,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ae,!0,!0)},
$S:25}
C.ep7.prototype={
$0(){B.a4(this.a,!1).O("scroll")
return null},
$S:0}
C.ep8.prototype={
$0(){B.a4(this.a,!1).O("split")
return null},
$S:0}
C.epa.prototype={
$0(){var w=this.b,v=w.c,u=C.eq(A.bh,!1,4279310375,A.aD,v,4280640491,24,A.bo,A.a6,"",0.84,C.cB(),w.b,"","",0,!1,"",0,D.bf,4280172719,2,v,0,0,"",D.cl,D.RW,0.88,0.06,0.08)
v=this.a
A.d.M(v.gdt().z,u)
v.r=u.a},
$S:0}
C.epb.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.j1
$.j1=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.j1
$.j1=k+1
m.push(new C.eG(""+1000*l+"_"+k,D.RW,0.04,0.06,0.92,0.88,v,24,A.a6,A.bo,A.aD,4279310375,A.bh,u,D.bf,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cl,0,"","","","","",!1,0))
A.d.ca(j.e.r,i+q-1,new C.lI(""+1000*p+"_"+o,r+n,"",D.qi,4294967295,null,D.df,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.epf.prototype={
$0(){var w,v=C.cB(),u=this.a,t=u.e
t=(t==null?null:C.kw(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.eq(A.bh,!1,4279310375,A.aD,t,4280640491,24,A.bo,A.a6,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cl,D.l6,0.35,0.55,0.62)
A.d.M(u.gdt().z,w)
u.r=w.a},
$S:0}
C.ep6.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b2k(o)
w=C.cB()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.eq(A.bh,!1,4279310375,A.aD,"marriage_sign_placed_"+A.a.ef(v.db,"marriage_sign_",""),4280640491,24,A.bo,A.a6,"",r,w,o.a,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cl,D.l6,s,u,t)
A.d.M(p.gdt().z,q)
A.d.bs(p.gdt().z,new C.ep5(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.q(v.db,"rais")){p.toString
C.i3r(p)}},
$S:0}
C.ep5.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.et6.prototype={
$0(){var w=this.a,v=this.b
w.b2k(v)
this.c.at=v.a
w.r=null},
$S:0}
C.euY.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.ers.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bs(r.z,new C.err())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.err.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.epS.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.epT.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.tA()},
$S:9}
C.ep3.prototype={
$0(){var w=C.eq(A.bh,!1,4279310375,A.aD,"HD Photo",4280640491,24,A.bo,A.a6,"",0.8,C.cB(),this.b,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cl,D.lz,0.8,0.1,0.1),v=this.a
A.d.M(v.gdt().z,w)
v.r=w.a},
$S:0}
C.eqU.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.epc.prototype={
$0(){var w=this.a,v=this.b
A.d.M(w.gdt().z,v)
w.r=v.a},
$S:0}
C.epl.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.epm.prototype={
$0(){var w=this.b.hG(),v=C.cB(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.eq(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.M(t.gdt().z,f)
t.r=f.a},
$S:0}
C.epn.prototype={
$0(){var w=this.a.gdt().z,v=this.b,u=A.d.bg(w,new C.epk(v))
if(u>=0&&u<w.length-1){A.d.cF(w,u)
A.d.ca(w,u+1,v)}},
$S:0}
C.epk.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.epy.prototype={
$0(){var w=this.a.gdt().z,v=this.b,u=A.d.bg(w,new C.epj(v))
if(u>0){A.d.cF(w,u)
A.d.ca(w,u-1,v)}},
$S:0}
C.epj.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.epB.prototype={
$0(){return this.a.as=A.bh},
$S:0}
C.epC.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.epD.prototype={
$0(){return this.a.as=A.dP},
$S:0}
C.epE.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.epF.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.epG.prototype={
$1(d){return d.b===D.cP},
$S:z+4}
C.epH.prototype={
$1(d){return d.length!==0},
$S:3}
C.epo.prototype={
$0(){var w=this.a,v=w.gdt().z,u=C.cB()
A.d.M(v,C.CV(w.gqq().c.j(0.18).l(),0.1,u,D.bf,0,2,1,0,0))
u=w.gdt().z
v=C.cB()
A.d.M(u,C.iX(A.bh,!1,w.gqq().d.l(),A.aD,18,A.bo,A.H,0.07,v,"Document Header",0,D.df,0.9,0.05,0.02))},
$S:0}
C.epp.prototype={
$0(){var w,v=this.a,u=v.gdt().z,t=C.cB()
A.d.M(u,C.CV(v.gqq().c.j(0.12).l(),0.1,t,D.bf,0,2,1,0,0.9))
t=v.gdt().z
u=C.cB()
w=C.bBU()
A.d.M(t,C.iX(A.L,!1,v.gqq().e.l(),A.aD,12,A.bo,A.a6,0.06,u,"Footer \xb7 "+w,0,D.df,0.9,0.05,0.92))},
$S:0}
C.epq.prototype={
$0(){A.d.M(this.a.gdt().z,C.CV(1727914055,0.12,C.cB(),D.bf,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.epr.prototype={
$0(){var w=4279310375
A.d.M(this.a.gdt().z,C.CV(w,0.08,C.cB(),D.bf,w,2,0.5,0.2,0.4))},
$S:0}
C.eps.prototype={
$0(){var w=this.a,v=w.gdt().z,u=C.cB()
A.d.M(v,C.CV(w.gqq().c.j(0.35).l(),0.12,u,D.CS,4280640491,2,0.2,0.15,0.55))
A.d.M(w.gdt().z,C.iX(A.bh,!1,4279310375,A.aD,18,A.bo,A.a6,0.15,C.cB(),"Important note",0,D.qj,0.5,0.38,0.52))},
$S:0}
C.ept.prototype={
$0(){var w=this.a
A.d.M(w.gdt().z,C.CV(4294507260,0.78,C.cB(),D.bf,4291548641,1.5,0.84,0.08,0.1))
A.d.M(w.gdt().z,C.iX(A.bh,!1,4279179050,A.aD,16,A.bo,A.a6,0.7,C.cB(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bBU()+"\n\nSubject:\n\nBody text\u2026",0,D.df,0.76,0.12,0.14))},
$S:0}
C.epu.prototype={
$0(){var w=this.a
A.d.M(w.gdt().z,C.CV(4294897802,0.28,C.cB(),D.bf,4294626325,2,0.3,0.62,0.12))
A.d.M(w.gdt().z,C.iX(A.bh,!1,4285611794,A.aD,15,A.bo,A.a6,0.24,C.cB(),"Sticky note",0,D.aGj,0.26,0.64,0.14))},
$S:0}
C.epv.prototype={
$0(){var w=4280640491,v=this.a
A.d.M(v.gdt().z,C.CV(4293060848,0.04,C.cB(),D.bf,4291548641,2,0.8,0.1,0.48))
A.d.M(v.gdt().z,C.CV(w,0.04,C.cB(),D.bf,w,2,0.55,0.1,0.48))},
$S:0}
C.epw.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdt().z,C.iX(A.bh,!1,w,A.aD,18,A.bo,A.a6,0.62,C.cB(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.I4,0.42,0.06,0.18))
A.d.M(v.gdt().z,C.iX(A.bh,!1,w,A.aD,18,A.bo,A.a6,0.62,C.cB(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.ur,0.42,0.52,0.18))},
$S:0}
C.epx.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdt().z,C.CV(858088427,0.62,C.cB(),D.bf,4280640491,2,0.42,0.05,0.18))
A.d.M(v.gdt().z,C.CV(856004201,0.62,C.cB(),D.bf,4278556265,2,0.42,0.53,0.18))
A.d.M(v.gdt().z,C.iX(A.bh,!1,w,A.aD,20,A.bo,A.H,0.1,C.cB(),"Option A",0,D.df,0.36,0.08,0.2))
A.d.M(v.gdt().z,C.iX(A.bh,!1,w,A.aD,20,A.bo,A.H,0.1,C.cB(),"Option B",0,D.df,0.36,0.56,0.2))},
$S:0}
C.epz.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdt().z,C.CV(4294967295,0.36,C.cB(),D.bf,w,2,0.24,0.38,0.28))
A.d.M(v.gdt().z,C.iX(A.L,!1,w,A.aD,14,A.bo,A.a6,0.12,C.cB(),"[ QR CODE ]",0,D.df,0.24,0.38,0.4))},
$S:0}
C.epA.prototype={
$0(){return C.ceC(this.b,D.RX,this.a.gqq())},
$S:0}
C.eqT.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a72.q(0,d),t=this.a
return t.b7l(d,v===d,A.aZ,this.c,new C.eqS(t,u,d,w),u)},
$S:z+25}
C.eqS.prototype={
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
C.bCG(r,new C.eqR(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eqR.prototype={
$0(){return this.a.d4(new C.eqQ(this.b,this.c))},
$S:0}
C.eqQ.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.epd.prototype={
$0(){var w,v=this.a,u=v.gqq(),t=C.ry(4294967295,null,0,0,null,C.cB(),D.mF,"","","",D.df),s=this.b
C.ceC(t,s,u)
w=v.gdt()
if(w!=null&&s!==D.CR){t.e=w.e
t.f=w.f}A.d.ca(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.epW.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.i9v(p,q.d,s,new C.epV(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.tA(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.epV.prototype={
$1(d){return this.bka(d)},
bka(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.epU(t,d))
w=2
return B.b(t.tA(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.epU.prototype={
$0(){var w,v,u
for(w=J.aW(this.b),v=this.a;w.C();){u=w.gT(w)
A.d.ca(v.d,0,u)}},
$S:0}
C.epX.prototype={
$0(){return this.a.bI4()},
$S:0}
C.epY.prototype={
$0(){return this.a.aPW("Class Presentation",!0)},
$S:0}
C.epZ.prototype={
$1(d){return this.a.bJ0(d.b,this.b,d.a)},
$S:z+88}
C.eqz.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aH(w,A.bW,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.esK.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aH(d,A.eI,x.w).w.f.d),new B.dY(new C.esJ(this.a,this.b),null),null)},
$S:60}
C.esJ.prototype={
$2(d,e){return B.oT(new C.esI(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:592}
C.esI.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.au:A.c,s=B.I(u?A.bD:A.aL,A.q,1),r=B.p(v,v,A.f,v,v,new B.o(A.b1,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.w(B.a([A.R,r,new B.D(A.ai6,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b4,B.bK(!1,A.zQ,v,v,!0,v,v,new C.esG(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.E(B.cy(B.a([p.aSE(u,!0,!0,new C.esH(p,w.d))],q),e,D.bt2,v,v,A.ah,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kN,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:113}
C.esG.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.esH.prototype={
$0(){this.b.$1(new C.esE())
var w=this.a
if(w.c!=null)w.m(new C.esF())},
$S:0}
C.esE.prototype={
$0(){},
$S:0}
C.esF.prototype={
$0(){},
$S:0}
C.eui.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:97}
C.euj.prototype={
$4(d,e,f,g){var w=A.ct.au(0,e.gp(0))
return B.db(B.ed(A.A,new C.ayx(this.a,null),0.94+w*0.06,null,null),w)},
$S:410}
C.euk.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:97}
C.eul.prototype={
$4(d,e,f,g){var w=A.ct.au(0,e.gp(0))
return B.db(B.ed(A.A,new C.bck(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:410}
C.eum.prototype={
$0(){return A.d.ca(this.a.d,0,C.VK(this.b))},
$S:0}
C.epi.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dy.au(0,o)
o=B.n(22)
v=B.n(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.au.j(0.72)],t):B.a([A.c.j(0.88),A.pC.j(0.75)],t)
r=B.I(A.b_.j(0.28+w*0.22),A.q,1.3)
q=w*0.2
t=B.a([A.b_.j(0.35+q),A.c8.j(0.18),A.K],t)
q=B.I(A.b_.j(0.45+q),A.q,1)
t=B.p(p,B.X(A_.a_W,u?A.ad:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.c_(A.A,0.5,A.x,p,0,t,p,p),A.a5),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bw(o,B.u4(A.fw,B.p(p,B.w(B.a([t,A.aB,q,A.am,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aA:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a8(A.ay,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.eD,p,p,1/0),14,!1),A.aq)},
$S:323}
C.eqn.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.eqo.prototype={
$1(d){return d.length!==0},
$S:3}
C.eqp.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.jJ
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a0s:A.Bz}return w},
$S:678}
C.eqs.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dy.au(0,A.k.F(j+m.b*0.12,1))
j=B.n(20)
v=m.c
u=B.n(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.au.j(0.78)],s):B.a([A.c.j(0.92),A.mR.j(0.82)],s)
r=m.e
q=A.d.gH(r)
p=t?0.34:0.26
p=B.I(q.j(p+w*0.22),A.q,1.25)
q=B.n(10)
q=B.p(l,B.X(C.kw(v.w)?A.vO:A.q6,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a8(A.a3,A.a8,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.PT(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.PT(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.PT(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.u(n)+" \u2022 Updated "+k.PT(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.PT(v.f)
r=k.bIZ(n,A.d.gH(r),t)
return B.p(l,B.bw(j,new B.a7D(B.aF(!1,A.a1,!0,l,B.aK(!1,l,!0,B.p(l,B.dL(!1,A.Mt,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aI(l,l,l,l,B.X(A.o1,t?A.aA:A.bK,l,l,l,l),l,l,l,new C.eqq(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a8(A.ay,A.aC,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eqr(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ag),l),A.aq),A.f,l,l,l,l,l,l,A.d9,l,l,l,l)},
$S:94}
C.eqr.prototype={
$0(){return this.a.aeS(this.b)},
$S:0}
C.eqq.prototype={
$0(){return this.a.AO(this.b,this.c)},
$S:0}
C.erT.prototype={
$0(){var w=this.a
w.b5Y()
w.m(new C.erS())},
$S:0}
C.erS.prototype={
$0(){},
$S:0}
C.erU.prototype={
$1(d){return this.a.aiX(this.b.a,d)},
$S:2}
C.erV.prototype={
$0(){this.a.d4(new C.erR(this.b))},
$S:0}
C.erR.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cv:A.O},
$S:0}
C.erW.prototype={
$0(){this.a.d4(new C.erQ(this.b))},
$S:0}
C.erQ.prototype={
$0(){var w=this.a
return w.y=w.y===A.cE?A.bo:A.cE},
$S:0}
C.erX.prototype={
$0(){this.a.d4(new C.erP(this.b))},
$S:0}
C.erP.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mK},
$S:0}
C.erY.prototype={
$0(){this.a.d4(new C.erO(this.b))},
$S:0}
C.erO.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.erZ.prototype={
$0(){var w=this.a
w.d4(new C.erN(w,this.b))},
$S:0}
C.erN.prototype={
$0(){var w=this.b
return w.as=this.a.c35(w.as)},
$S:0}
C.es_.prototype={
$0(){return this.a.d4(new C.erM(this.b))},
$S:0}
C.erM.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.es0.prototype={
$0(){return this.a.d4(new C.erL(this.b))},
$S:0}
C.erL.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.erE.prototype={
$0(){return this.a.a1Z(this.b.a)},
$S:0}
C.erF.prototype={
$0(){this.a.a_w()
return null},
$S:0}
C.erG.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aH(v,A.bW,x.w).w.a.a<900)w.afa()
else w.m(new C.erD(w))},
$S:0}
C.erD.prototype={
$0(){return this.a.as=!0},
$S:0}
C.erH.prototype={
$0(){this.a.d4(new C.erC(this.b))},
$S:0}
C.erC.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cv:A.O},
$S:0}
C.erI.prototype={
$0(){return this.a.d4(new C.erB(this.b))},
$S:0}
C.erB.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.erJ.prototype={
$0(){return this.a.d4(new C.erA(this.b))},
$S:0}
C.erA.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.erK.prototype={
$0(){return this.a.azt(null)},
$S:0}
C.eqM.prototype={
$0(){this.a.Dy()
return null},
$S:0}
C.eqN.prototype={
$0(){this.a.aa_()
return null},
$S:0}
C.eqP.prototype={
$1(d){return this.bkb(d)},
bkb(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.K_(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bQ(A.au,null,new C.eqH(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d4(new C.eqI(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d4(new C.eqJ(r))
s=s.c.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d4(new C.eqK(r))
s=s.c.I(x.q).f
s.R(B.b2(null,null,null,null,null,A.r,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.hnV(q,new C.Eu(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d4(new C.eqL(r,p))
s=s.c.I(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.agF(q)
q=B.u(q==null?null:q.b)+" will play after your last slide."}s.R(B.b2(null,null,null,null,null,A.r,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.T,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:95}
C.eqH.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.ecD],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bN5:r
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.eqG(d,t),!1,r,r,r,r,r,r,r,new B.y(""+t+" seconds",r,A.dg,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bl(!0,B.w(q,A.m,r,A.e,A.Q,0,A.p),!0,!1,A.ae,!0,!0)},
$S:25}
C.eqG.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.eqI.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eqJ.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eqK.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eqL.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eqO.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zN(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zN(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zN(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.agF(r?t:s.db)
s=s==null?t:s.b
return B.a([D.ehH,q,v,u,B.zN(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:142}
C.ev3.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bBR(w,v)}},
$S:0}
C.ev4.prototype={
$0(){this.a.Dy()
return null},
$S:0}
C.es3.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.n(999),q=s?D.bXu:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bM
if(s)v=A.c
else v=this.b?A.aQ:A.bq
return new B.D(A.fB,B.aB(u,B.de(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.bb,new B.o(w,u,u,r,u,q,A.n),A.eJ,u,u,u,A.lm,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.es2(t,d),u,u,u,u,u,u,!1,A.a7),u)},
$S:132}
C.es2.prototype={
$0(){var w=this.a
return w.m(new C.es1(w,this.b))},
$S:0}
C.es1.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.es4.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a3j:E.awP
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbMt():t.gbIp()
return B.ho(B.aB(u,B.p(u,D.an_,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gH(v).j(0.45),A.J,10)],x.V),new B.a8(A.a3,A.a8,A.x,v,u,u),A.a5),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a7),u,s,u,u)},
$S:1707}
C.es5.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i8L(v,w.a.c)},
$S:0}
C.ets.prototype={
$0(){return this.b.vc(this.a.a)},
$S:0}
C.ett.prototype={
$0(){return this.a.vc(D.mF)},
$S:0}
C.etu.prototype={
$0(){return this.a.vc(D.I2)},
$S:0}
C.etF.prototype={
$0(){return this.a.vc(D.I3)},
$S:0}
C.etQ.prototype={
$0(){return this.a.vc(D.I1)},
$S:0}
C.eu0.prototype={
$0(){return this.a.qa("lab_report")},
$S:0}
C.eu7.prototype={
$0(){return this.a.qa("rubric")},
$S:0}
C.eu8.prototype={
$0(){return this.a.qa("minutes")},
$S:0}
C.eu9.prototype={
$0(){return this.a.qa("agenda")},
$S:0}
C.eua.prototype={
$0(){return this.a.qa("timeline")},
$S:0}
C.eub.prototype={
$0(){return this.a.qa(this.b.a)},
$S:0}
C.etv.prototype={
$0(){this.a.VH()
return null},
$S:0}
C.etw.prototype={
$0(){this.a.VB()
return null},
$S:0}
C.etx.prototype={
$0(){return this.a.qa("table")},
$S:0}
C.ety.prototype={
$0(){return this.a.qa("sticky")},
$S:0}
C.etz.prototype={
$0(){return this.a.qa("divider")},
$S:0}
C.etA.prototype={
$0(){return this.a.qa("header_bar")},
$S:0}
C.etB.prototype={
$0(){return this.a.p6(D.bf)},
$S:0}
C.etC.prototype={
$0(){return this.a.p6(D.eN)},
$S:0}
C.etD.prototype={
$0(){return this.a.p6(D.jQ)},
$S:0}
C.etE.prototype={
$0(){return this.a.p6(D.CS)},
$S:0}
C.etG.prototype={
$0(){return this.a.p6(D.jR)},
$S:0}
C.etH.prototype={
$0(){return this.a.p6(D.l7)},
$S:0}
C.etI.prototype={
$0(){return this.a.p6(D.fr)},
$S:0}
C.etJ.prototype={
$0(){this.a.Hi()
return null},
$S:0}
C.etK.prototype={
$0(){this.a.Nm()
return null},
$S:0}
C.etL.prototype={
$0(){return this.a.qa("quote")},
$S:0}
C.etM.prototype={
$0(){return this.a.a89()},
$S:0}
C.etN.prototype={
$0(){this.a.a_C()
return null},
$S:0}
C.etO.prototype={
$0(){var w=this.a
return w.m(new C.eti(w))},
$S:0}
C.eti.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.etP.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.o6(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.etq(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.etq.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.etR.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jW()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a73.q(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.b1
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.q,v?2.5:1),s,s,new B.a8(A.a3,A.a8,A.x,u,s,s),A.a5),s,26,s,s,s,s,s,26)],x.p)
if(D.a73.q(0,q))u.push(B.ao(s,B.p(s,D.O4,A.f,s,s,D.E9,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fB,B.aB(s,B.ho(new B.an(A.V,s,A.a9,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.etp(r,d),s,s,s,s,s,s,!1,A.a7),s)},
$S:z+89}
C.etp.prototype={
$0(){this.a.a8r(this.b)
return null},
$S:0}
C.etS.prototype={
$0(){this.a.a8q(this.b)
return null},
$S:0}
C.etT.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hFq(d),p=this.a,o=B.n(8),n=p.gdt()
n=n==null?r:n.x
w=d.a
n=n===w?A.bi:A.b1
v=p.gdt()
n=B.I(n,A.q,(v==null?r:v.x)===w?2.5:1)
u=B.n(8)
t=B.n(7)
s=C.ry(4294967295,r,0,0,r,"preview_"+w,D.qi,"","","",D.df)
C.hkM(s,w)
w=x.p
u=B.a([B.bw(o,B.p(r,B.bw(t,C.hm6(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.anx,A.f,r,r,D.E9,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.il,B.aB(r,B.w(B.a([new B.an(A.V,r,A.a9,A.r,u,r),A.cQ,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aA:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eto(p,q,d),r,r,r,r,r,r,!1,A.a7),r)},
$S:z+90}
C.eto.prototype={
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
break}s.d4(new C.ete(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ete.prototype={
$0(){return C.hkM(this.a,this.b.a)},
$S:0}
C.etr.prototype={
bkc(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a72.q(0,d)
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
$2(d,e){return this.bkc(d,e)},
$S:z+91}
C.euc.prototype={
$4(d,e,f,g){var w=null,v=B.T(d).k("M<1,t>")
v=B.C(new B.M(d,new C.eue(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.cc(B.B(v,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aN)},
$S:z+92}
C.eue.prototype={
$1(d){var w=this
return w.a.b7l(d,w.b===d,w.c,w.d,new C.eud(w.e,d),!D.a72.q(0,d))},
$S:z+25}
C.eud.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.etU.prototype={
$1(d){this.b.$2(d,new C.etn(this.a,d,this.c))
return null},
$S:z+26}
C.etn.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bCG(u,new C.etd(v,this.c,w),w)},
$S:0}
C.etd.prototype={
$0(){return this.a.d4(new C.etb(this.b,this.c))},
$S:0}
C.etb.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.etV.prototype={
$1(d){this.b.$2(d,new C.etm(this.a,d))
return null},
$S:z+26}
C.etm.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fOk(u,new C.etc(v,w),w)},
$S:0}
C.etc.prototype={
$0(){var w=this.a
return w.d4(new C.eta(w,this.b))},
$S:0}
C.eta.prototype={
$0(){return this.a.gdt().r=this.b},
$S:0}
C.etW.prototype={
$0(){var w=this.a
return w.m(new C.etl(w))},
$S:0}
C.etl.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.etX.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bBR(w,v)}},
$S:0}
C.etY.prototype={
$0(){this.a.I4()
return null},
$S:0}
C.etZ.prototype={
$0(){return this.a.a89()},
$S:0}
C.eu_.prototype={
$0(){var w=this.a,v=w.jW()
if(v!=null&&v.b===D.cP)w.d4(new C.etk(v))},
$S:0}
C.etk.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.eu1.prototype={
$0(){this.a.Dy()
return null},
$S:0}
C.eu2.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.Fc(v,!0)
return null},
$S:0}
C.eu3.prototype={
$0(){this.a.d4(new C.etj(this.b))},
$S:0}
C.etj.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cv:A.O},
$S:0}
C.eu4.prototype={
$0(){this.a.d4(new C.eth(this.b))},
$S:0}
C.eth.prototype={
$0(){var w=this.a
return w.y=w.y===A.cE?A.bo:A.cE},
$S:0}
C.eu5.prototype={
$0(){this.a.d4(new C.etg(this.b))},
$S:0}
C.etg.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mK},
$S:0}
C.eu6.prototype={
$0(){this.a.d4(new C.etf(this.b))},
$S:0}
C.etf.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.epR.prototype={
$1(d){return this.bk9(d)},
bk9(d){var w=0,v=B.j(x.H),u,t=this,s,r
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
break}s.d4(new C.epQ(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:189}
C.epQ.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.euz.prototype={
$0(){var w=this.a
return w.d4(new C.euy(w,this.b))},
$S:0}
C.euy.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.euA.prototype={
$0(){var w=this.a
return w.d4(new C.eux(w,this.b))},
$S:0}
C.eux.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.eqZ.prototype={
$0(){return this.a.d4(new C.eqY(this.b))},
$S:0}
C.eqY.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.er_.prototype={
$0(){return this.a.d4(new C.eqX(this.b))},
$S:0}
C.eqX.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.erw.prototype={
$1(d){var w=x.gh
w=B.C(new B.M(D.apc,new C.erv(),w),w.k("ak.E"))
return w},
$S:z+94}
C.erv.prototype={
$1(d){var w=null
return B.zN(B.d(d.b,w,w,w,w,w,w,A.ma,w,w,w),48,d,x.fO)},
$S:z+95}
C.euM.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a7(v,w?8:0,null,null)},
$S:36}
C.euL.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kj()?q:new C.euJ(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.n(8)
if(o)v=A.bi
else v=r.d?A.b1:A.cr
v=B.I(v,A.q,o?2:1)
u=r.d?A.co:A.c
t=B.bT(0,C.hm6(r.b.r[e]),0,0,0)
s=B.n(4)
return B.aB(q,B.p(q,new B.an(A.V,q,A.a9,A.r,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.ns,q,q,q),A.f,q,q,new B.o(A.aW,q,q,s,q,q,A.n),q,q,q,q,A.aj_,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.euK(p,e),q,q,q,q,q,q,!1,A.a7)},
$S:80}
C.euK.prototype={
$0(){var w=this.a
return w.m(new C.euF(w,this.b))},
$S:0}
C.euF.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.K8()},
$S:0}
C.euJ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bQ(null,null,new C.euG(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.euH(q,s))
q.aRo()}else if(r==="del"){q=t.a
q.m(new C.euI(q,s))
q.aQx()}else if(r==="up")t.a.b2x(s,s-1)
else if(r==="down")t.a.b2x(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.euG.prototype={
$1(d){var w=null,v=B.a([B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bOK,w,w,w,w,new C.euB(d),!1,w,w,w,w,w,w,w,D.fko,w,w,w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bOD,w,w,w,w,new C.euC(d),!1,w,w,w,w,w,w,w,A.wD,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bNV,w,w,w,w,new C.euD(d),!1,w,w,w,w,w,w,w,D.fss,w,w,w))
if(u<this.b.r.length-1)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bPY,w,w,w,w,new C.euE(d),!1,w,w,w,w,w,w,w,D.fkd,w,w,w))
return B.bl(!0,B.w(v,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ae,!0,!0)},
$S:25}
C.euB.prototype={
$0(){B.a4(this.a,!1).O("dup")
return null},
$S:0}
C.euC.prototype={
$0(){B.a4(this.a,!1).O("del")
return null},
$S:0}
C.euD.prototype={
$0(){B.a4(this.a,!1).O("up")
return null},
$S:0}
C.euE.prototype={
$0(){B.a4(this.a,!1).O("down")
return null},
$S:0}
C.euH.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.euI.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.euN.prototype={
$0(){return this.a.a89()},
$S:0}
C.eqg.prototype={
$0(){var w=this.a
w.b5Y()
w.azt(null)},
$S:0}
C.eqf.prototype={
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
s=B.a([B.bw(s,B.c0(A.kH,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.be),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.M(r,new C.eqe(this.a,e.b,e.d,q),B.T(r).k("M<1,t>")))
if(m.z.length===0)s.push(B.au(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aA:A.bK,p,p,p,p,p,p,p,p,p,p,p,A.a6,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c0(new B.an(A.V,p,A.a9,A.f,s,new B.cw("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.be)},
$S:419}
C.eqe.prototype={
$1(d){var w=this
return w.a.bEn(d,w.b,w.c,w.d)},
$S:z+23}
C.eq3.prototype={
$0(){var w=this
if(w.b){w.a.Nv(w.c)
return}if(w.d){w.a.a87(w.c)
return}if(w.e){w.a.agu(w.c)
return}if(w.f)w.a.b6v(w.c)},
$S:0}
C.eq4.prototype={
$0(){this.a.Nv(this.b)
return null},
$S:0}
C.eq5.prototype={
$0(){return this.a.a1Z(this.b.a)},
$S:0}
C.eq6.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.eq2(u,d,w.c,w.d))
v.HJ()
v.of()
v.pn()},
$S:21}
C.eq2.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eq7.prototype={
$1(d){return this.a.aiX(this.b.a,d)},
$S:2}
C.eq9.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.h_t(w))u.a.Nv(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b6v(v)},
$S:0}
C.eq8.prototype={
$0(){return this.a.a1Z(this.b.a)},
$S:0}
C.eqa.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eq1(w.b,d,w.c,w.d))
v.HJ()
v.of()
v.pn()},
$S:21}
C.eq1.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cP)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.eqb.prototype={
$1(d){var w=this.a
w.m(new C.eq0(this.b,d))
w.HJ()
w.of()
w.pn()},
$S:219}
C.eq0.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cP)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.eqc.prototype={
$0(){var w=this.a
w.m(new C.eq_(this.b))
w.HJ()
w.of()
w.pn()},
$S:0}
C.eq_.prototype={
$0(){this.a.r=C.hlB()},
$S:0}
C.eqd.prototype={
$0(){return this.a.a1Z(this.b.a)},
$S:0}
C.es7.prototype={
$0(){var w=this.a
return w.m(new C.es6(w))},
$S:0}
C.es6.prototype={
$0(){return this.a.y=!1},
$S:0}
C.es8.prototype={
$1(d){return this.a.cBX(this.b.a,d)},
$S:2}
C.erc.prototype={
$1(d){var w
this.a.d4(d)
w=this.b
if(w!=null)w.$0()},
$S:174}
C.erd.prototype={
$1(d){return this.a.$1(new C.erb(this.b,d))},
$S:7}
C.erb.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ere.prototype={
$1(d){return this.a.$1(new C.era(this.b,d))},
$S:7}
C.era.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.erf.prototype={
$1(d){return this.a.$1(new C.er9(this.b,d))},
$S:7}
C.er9.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.erg.prototype={
$1(d){return this.a.$1(new C.er8(this.b,d))},
$S:7}
C.er8.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.erh.prototype={
$1(d){return this.a.$1(new C.er7(this.b,d))},
$S:7}
C.er7.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eri.prototype={
$1(d){return this.b.$1(new C.er6(this.a,this.c))},
$S:8}
C.er6.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.erj.prototype={
$1(d){return this.b.$1(new C.er5(this.a,this.c))},
$S:8}
C.er5.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.erk.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bi:A.cU
return B.aB(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.q,t?2:1),w,w,w,A.a5),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.er4(this.a,v,d),w,w,w,w,w,w,!1,A.a7)},
$S:460}
C.er4.prototype={
$0(){return this.a.$1(new C.er1(this.b,this.c))},
$S:0}
C.er1.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.erl.prototype={
$1(d){return this.a.$1(new C.er3(this.b,d))},
$S:1708}
C.er3.prototype={
$0(){var w=this.b
return this.a.as=w.gH(w)},
$S:0}
C.erm.prototype={
$1(d){var w=null
return B.aB(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a5),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.er2(this.a,this.b,d),w,w,w,w,w,w,!1,A.a7)},
$S:460}
C.er2.prototype={
$0(){return this.a.$1(new C.er0(this.b,this.c))},
$S:0}
C.er0.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.ern.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a4(w,!1).pB()}else w=!1
if(w){w=v.a.c
w.toString
B.a4(w,!1).eE()}v.a.as7()},
$S:0}
C.erq.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dy.au(0,m)
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
r.push(B.ao(2,B.p(n,B.X(A.u7,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.nd,n,n,n),n,n,n,2,n,n))
return B.aF(!1,A.a1,!0,n,B.aK(!1,m,!0,B.eB(new B.a7(48,48,new B.an(A.A,n,A.a9,A.r,r,n),n),n,new B.o(n,n,s,v,n,new B.a8(A.ay,A.aC,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ag)},
$S:135}
C.ep_.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dy.au(0,o)
o=B.n(22)
v=B.n(22)
u=q.c
t=B.aq(u,A.b_,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.I(A.c.j(0.28+w*0.22),A.q,1.35)
s=A.c.j(0.14+w*0.08)
r=B.I(A.c.j(0.4+w*0.15),A.q,1)
return B.aF(!1,A.a1,!0,p,B.aK(!1,o,!0,B.eB(B.w(B.a([B.ed(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a5),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ac,B.d(q.e,p,p,p,p,p,p,A.iS,A.L,p,p)],x.p),A.m,p,A.b7,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a8(A.ay,A.aC,A.x,u,p,p),A.n),p,A.Fx,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ag)},
$S:135}
C.et4.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.U,!0,w,!0,A.r,w,B.aN(),u,w,w,w,w,w,2,A.aon,A.y,!0,w,!0,w,!1,w,A.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.aa,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a4,w,A.an,w,w,w,w)
return B.ek(B.a([B.bK(!1,A.dh,w,w,!0,w,w,new C.et2(d),w,w),B.bG(A.pn,new C.et3(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:18}
C.et2.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.et3.prototype={
$0(){var w=this.b.a.a
B.a4(this.a,!1).O(w)
return null},
$S:0}
C.d0V.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dy.au(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.et.au(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dX.au(0,i)
v=B.n(22)
t=B.aq(A.aJ,A.d.gH(C.kw(j.a.c.w)?D.ui:N.nk),w*0.35)
t.toString
t=B.I(t,A.q,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gH(C.kw(j.a.c.w)?D.ui:N.nk).j(0.18+w*0.12),A.J,32+w*10),D.abz],s)
q=B.n(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c_(A.b2,0.9,A.x,k,0,B.a([A.d.gH(C.kw(j.a.c.w)?D.ui:N.nk).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gH(C.kw(j.a.c.w)?D.ui:N.nk).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c_(A.A,0.5,A.x,k,0,B.a([m,A.d.gak(C.kw(j.a.c.w)?D.ui:N.nk).j(0.08),A.K],p),k,k),A.a5),k,n,k,k,k,k,k,n)
n=B.n(14)
m=j.a.c.w
l=C.kw(m)?D.ui:N.nk
s=B.a([new B.ac(0,A.G,A.d.gH(C.kw(m)?D.ui:N.nk).j(0.45+w*0.2),A.cz,18)],s)
m=x.p
l=B.a([p,B.ed(A.A,B.p(k,B.X(C.kw(j.a.c.w)?A.vO:A.q6,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a8(A.ay,A.aC,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.a9,A.r,l,k),A.R,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gH(C.kw(j.a.c.w)?D.ui:N.nk).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.fF,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.fcB,A.L,k,k),A.av,B.d(j.gcwT(),k,k,k,k,k,k,D.fh7,A.L,k,k),A.aB],m)
p=j.a.c
if(p.z){p=p.gSg()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gH(C.kw(j.a.c.w)?D.ui:N.nk).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.JK(A.ye,"Download PDF","pdf",A.d0,j.J0(0),!1,k))
p=j.a.c
if(!p.z||p.gSg()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.am,new C.JK(A.k9,"Transfer to "+C.hlD(p==null?"":p),"transfer_hati",A.aV,j.J0(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.J0(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.am,new C.JK(D.bGp,"Rename presentation","rename",A.c8,n,!1,k),A.am,new C.JK(A.akH,"Duplicate","duplicate",A.b5,j.J0(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.N)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.JK(A.ef,"Delete presentation","delete",A.aw,j.J0(p),!0,k))
s.push(A.av)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.J0(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.J0(n)
s.push(B.dU(B.db(B.bK(!1,E.aRs,k,k,!0,k,k,new C.d0U(d),k,B.fx(k,k,k,k,k,k,k,k,k,k,k,A.bK,k,k,k,A.az,k,D.bw7,k,k,k,k,k,A.kd,k,k)),n),new B.x(0,(1-p)*8)))
return B.ed(A.A,B.db(B.aF(!1,A.a1,!0,k,B.p(k,B.bw(q,new B.an(A.V,k,A.a9,A.r,B.a([o,new B.D(D.bvg,B.w(s,A.m,k,A.e,A.Q,0,A.p),k)],m),k),A.aq),A.f,k,A.Vx,new B.o(A.au,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ag),i),0.88+u*0.12,k,k)},
$S:45}
C.d0U.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.d1g.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.d1h.prototype={
$0(){B.a4(this.a,!1).O(!0)
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
$S:65}
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
B.a4(this.b,!1).O(w)
return null},
$S:0}
C.evK.prototype={
$0(){return $.bjG=!$.bjG},
$S:0}
C.evA.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaUy())u.aw_()},
$S:0}
C.evJ.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.evB.prototype={
$0(){return this.a.y=!0},
$S:0}
C.evC.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.aw_()},
$S:0}
C.evw.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gH(w.a.c.r).r
w.d=0},
$S:0}
C.evx.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.evy.prototype={
$0(){return this.a.y=!1},
$S:0}
C.evz.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.evH.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b0,A.r,w,null)},
$S:1709}
C.evI.prototype={
$2(d,e){var w
if(e.gc3(e)===A.hZ)return new B.d_(e,!1,d,null)
w=this.a
return w.cuP(w.e,d,e)},
$S:447}
C.evD.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fC((1-v.gp(0))*1.5708)
return B.fu(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.evE.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.k9((1-v.gp(0))*1.5708)
return B.fu(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.evF.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fC(v.gp(0)*0.8)
w.k9(v.gp(0)*0.35)
return B.fu(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.evG.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fC(-v.gp(0)*1.2)
return B.fu(A.a8,B.db(e,v.gp(0)),null,w,!0)},
$S:45}
C.evL.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gYN().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gYN().x
t===$&&B.c()
return new C.b0B(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.II(v.c,t,!0,new B.cw("cine"+u,x.W))},
$S:658}
C.evN.prototype={
$1(d){var w=this.a
if(d.b.a>B.aH(this.b,A.bW,x.w).w.a.a*0.55)w.aw_()
else w.cje()},
$S:65}
C.evM.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.fEG.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:393}
C.fEP.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ek(B.a([B.bK(!1,A.dh,w,w,!0,w,w,new C.fEM(d),w,w),B.bK(!1,D.fzL,w,w,!0,w,w,new C.fEN(d,this.b,v),w,w),B.bG(A.aRJ,new C.fEO(d,v,this.c),w)],x.p),w,w,M.tp,new B.a7(320,w,t,w),w,w,w,w,D.fBe,w)},
$S:18}
C.fEM.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.fEN.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a4(u.a,!1).O(null)
C.h07(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fEO.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a4(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aPq(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aOR(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fEF.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.ceF.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:536}
C.fEL.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fby.prototype={
$1(d){return C.h05(C.VK(B.a2(d,x.N,x.z)),this.a)},
$S:z+96}
C.fNA.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:97}
C.fNB.prototype={
$4(d,e,f,g){var w=A.ct.au(0,e.gp(0))
return B.db(B.ed(A.A,D.h7m,0.94+w*0.06,null,null),w)},
$S:410}
C.fNC.prototype={
$1(d){var w=this
return new C.VM(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.evg.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.evc.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.evf.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.VN(u,this.b,w.gaNR(),v,null)},
$S:z+99}
C.evd.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eve.prototype={
$0(){return this.a.f=!1},
$S:0}
C.evh.prototype={
$0(){return this.a.f=!0},
$S:0}
C.evi.prototype={
$0(){return this.a.f=!1},
$S:0}
C.evl.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.evm.prototype={
$0(){var w=this.a
return w.m(new C.evk(w))},
$S:0}
C.evk.prototype={
$0(){return this.a.d="one"},
$S:0}
C.evn.prototype={
$0(){var w=this.a
return w.m(new C.evj(w))},
$S:0}
C.evj.prototype={
$0(){return this.a.d="all"},
$S:0}
C.evo.prototype={
$1(d){return this.a.bJ_(d,this.b)},
$S:z+100}
C.evb.prototype={
$0(){var w=this.a
return w.m(new C.eva(w,this.b))},
$S:0}
C.eva.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.evp.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.evq.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.evr.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.evs.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.evt.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fM(new B.fD(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.I(x.q).f.R(D.f_1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eoU.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eoT())},
$S:0}
C.eoT.prototype={
$0(){},
$S:0}
C.eoV.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fL()},
$S:9}
C.eoQ.prototype={
$1(d){return this.a.m(new C.eoP())},
$S:2}
C.eoP.prototype={
$0(){},
$S:0}
C.eoR.prototype={
$1(d){return this.a.aZo()},
$S:2}
C.eoS.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.evv.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.q0(),$async$$0)
case 2:if(t.c!=null)t.m(new C.evu(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.evu.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fz_.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.eH(new B.jI(this.c,new C.fyZ(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:215}
C.fyZ.prototype={
$3(d,e,f){return new C.II(e,!1,!1,new B.cw(e.a,x.W))},
$S:z+102}
C.fz0.prototype={
$1(d){var w=null
return B.oq(!1,B.au(new C.bu9(this.a,this.b,w),w,w,w),w,x.z)},
$S:334}
C.fz4.prototype={
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
if(!(r instanceof B.q_))throw B.V("Could not draw the slide.")
u=r.m_(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1712}
C.fz5.prototype={
bkH(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hu(A.h0),$async$$1)
case 3:r=f
if(r==null)throw B.V("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hR([J.eU(A.dC.gaP(r))],"image/png"))
t.toString
s=Al.fRO(t)
w=4
return B.b(new B.q5(s,"load",!1,x.ev).gH(0).d8(0,A.jk),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bkH(d)},
$S:1713}
C.fz1.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:152}
C.fz2.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fT(0)},
$S:152}
C.fz3.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.f5I.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.f9a,A.L,w,w)},
$S:1714}
C.f5J.prototype={
$3(d,e,f){var w=null,v=B.n(99)
return B.bw(v,B.m5(A.bl,w,A.dN,8,w,e===0?w:e,w),A.aq)},
$S:565}
C.ee0.prototype={
$1(d){this.a.ZZ()
return null},
$S:12}
C.edZ.prototype={
$0(){return this.a.e=D.bri},
$S:0}
C.ee_.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bB
return this.b.e=w},
$S:0}
C.chc.prototype={
$1(d){return A.o.dz(1,d.a)},
$S:z+103}
C.chd.prototype={
$2(d,e){return(d|e)>>>0},
$S:76};(function aliases(){var w=C.aLp.prototype
w.bvf=w.t
w=C.aKW.prototype
w.buL=w.t
w=C.aKI.prototype
w.buw=w.t
w=C.aKV.prototype
w.buK=w.t
w=C.aLn.prototype
w.bvd=w.t
w=C.aMG.prototype
w.bwH=w.t
w=C.aJF.prototype
w.btq=w.t
w=C.aLy.prototype
w.bvo=w.t
w=C.aLz.prototype
w.bvp=w.t
w=C.b2h.prototype
w.bq4=w.aCB})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"i6y","ane",104)
v(C.aIE.prototype,"gc3r","YU",0)
var r
u(r=C.axk.prototype,"gcwe","cwf",38)
v(r,"gc4f","adf",0)
v(r=C.axg.prototype,"gaXY","E1",3)
v(r,"gc4c","c4d",3)
v(r,"gawk","xI",0)
v(r,"gawl","IF",0)
t(C,"i6Y","hDc",105)
v(C.aDm.prototype,"gc6I","c6J",3)
s(C,"i78",0,null,["$4$paper$photo$request$template"],["fG4"],106,0)
s(C,"i77",0,null,["$5$doc$history$instruction$photo$template"],["bB9"],107,0)
v(r=C.aDD.prototype,"gc7p","IY",0)
v(r,"gbIs","WK",0)
v(r,"gc7s","ae0",0)
v(r,"gc7r","ZL",0)
v(r,"gaZ3","Ei",0)
v(C.aDF.prototype,"gc7x","ZN",0)
v(r=C.aF1.prototype,"gaZg","PP",0)
v(r,"gco3","b2D",3)
v(r,"gcxD","aAK",86)
v(r,"gbMh","aa3",0)
v(r,"gc7Y","Ar",0)
v(r=C.aGX.prototype,"gchZ","a06",0)
v(r,"gci6","a09",0)
v(r,"gbBk","a8x",0)
v(r,"gc81","aec",0)
v(C.aGW.prototype,"gc82","aed",0)
v(C.aB2.prototype,"gbAj","a8k",0)
v(C.azq.prototype,"gc83","ZY",0)
w(C,"i7l","i5f",12)
w(C,"i7j","i2c",12)
w(C,"i7k","i4f",12)
v(r=C.aDV.prototype,"gcAS","cAT",3)
v(r,"gcmk","cml",3)
u(r,"gEo","aeS",7)
v(r,"gbG6","arh",3)
u(r,"gEp","b_y",7)
v(r,"gcab","aez",0)
v(r,"gc92","aey",0)
v(r,"gccl","aeT",0)
v(r,"gbIp","a9E",0)
v(r,"gcde","a_w",0)
v(r,"gcdf","af9",0)
v(r,"gcdM","afg",0)
v(r,"gccy","aeW",0)
v(r,"gbMt","aa7",0)
v(r,"gaRn","aRo",3)
v(r,"gaQw","aQx",3)
v(r,"gaMc","aMd",3)
v(r,"gaQv","as7",3)
u(r,"gbAA","bAB",80)
v(r,"gaAg","b5H",3)
v(r,"gc94","c95",3)
v(r,"gbXE","bXF",3)
v(r,"gbKR","bKS",3)
v(r=C.aDY.prototype,"gczE","czF",3)
v(r,"gczj","czk",3)
t(C,"i7m","i5w",2)
v(r=C.aDW.prototype,"gc89","J2",0)
v(r,"gcq6","Rf",0)
v(r,"gc86","J1",0)
v(r,"gcC7","a2D",0)
v(r,"gcdY","afn",0)
v(C.aDU.prototype,"gc8a","aZo",3)
v(r=C.aDX.prototype,"gbNf","aai",0)
u(r,"gc87","c88",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aD,[C.nX,C.RH,C.bGK,C.bF4,C.cxm,C.cxk,C.bNl,C.b82,C.cxl,C.bDF,C.ch6,C.ch4,C.ch5,C.ch3,C.asu,C.ch2,C.bOe,C.on,C.aEw,C.jn,C.nJ,C.a7C,C.zB,C.lh,C.oB,C.m7,C.zC,C.nN,C.a7K,C.aqU,C.b0C,C.edQ,C.le,C.ED,C.et,C.j0,C.Eu,C.xC,C.eG,C.lI,C.i4,C.jF,C.a7L,C.aeS,C.b0D,C.b2h,C.a2z])
u(B.kj,[C.cFd,C.bZ2,C.fuf,C.cGJ,C.cG5,C.fzI,C.dXi,C.dXh,C.ee3,C.ee2,C.fB6,C.fcH,C.fcI,C.cd0,C.cd1,C.cd2,C.eht,C.ePS,C.ePf,C.ePe,C.eQi,C.ePQ,C.ePJ,C.eQ1,C.eQI,C.fkd,C.eWS,C.eWR,C.eXk,C.edT,C.fEC,C.dTd,C.fL8,C.fBt,C.cex,C.cev,C.ceA,C.fBY,C.fBZ,C.fC_,C.fC0,C.ceh,C.cei,C.dGd,C.cee,C.fBX,C.f3g,C.dRp,C.ce7,C.edz,C.fzx,C.esu,C.esT,C.esQ,C.esP,C.et_,C.esZ,C.euu,C.eut,C.esJ,C.esI,C.epi,C.eqs,C.etr,C.euM,C.euL,C.eqf,C.erq,C.ep_,C.d0V,C.evH,C.evI,C.evD,C.evE,C.evF,C.evG,C.evL,C.ceF,C.evg,C.evr,C.chd])
u(B.i_,[C.cFe,C.cFf,C.bOf,C.frr,C.bZ1,C.bZ4,C.fHD,C.f4e,C.f45,C.f4l,C.fbz,C.fbA,C.fug,C.fue,C.fH7,C.fr5,C.fHZ,C.cGz,C.cGE,C.cGG,C.cGC,C.cGH,C.cGA,C.cGI,C.cGv,C.cGs,C.cGr,C.cGy,C.cG0,C.cFZ,C.fyK,C.fyL,C.ffO,C.fzJ,C.fzP,C.feR,C.c9j,C.fyI,C.fyJ,C.ftC,C.ftD,C.fzO,C.fzK,C.fzM,C.fzN,C.fzL,C.fLq,C.ftG,C.ftH,C.ftK,C.ftL,C.ftO,C.ftP,C.fMT,C.fd8,C.fN3,C.eh0,C.eh1,C.eh2,C.egJ,C.egV,C.egW,C.egY,C.cd_,C.ccY,C.ccZ,C.fzo,C.fzq,C.fzp,C.fcJ,C.fcK,C.fN6,C.ehy,C.ehz,C.ehq,C.ehr,C.ehu,C.ehv,C.fNm,C.eQJ,C.eQ8,C.ePT,C.eQ5,C.ePa,C.ePb,C.ePc,C.ePg,C.ePh,C.eQy,C.eQF,C.eQH,C.eQh,C.eQj,C.eQn,C.eQo,C.eQp,C.eQt,C.eQk,C.eQl,C.ePs,C.ePt,C.ePu,C.ePv,C.ePw,C.ePx,C.ePy,C.ePz,C.ePA,C.eOO,C.eOP,C.eOQ,C.eOR,C.eOT,C.eOU,C.ePm,C.ePn,C.ePo,C.ePp,C.ePq,C.eOY,C.eOZ,C.eP_,C.eP0,C.ePI,C.eQ0,C.fwN,C.fwM,C.ceo,C.fkc,C.fEy,C.fEr,C.fEu,C.fCr,C.fCs,C.fCt,C.fwU,C.fwT,C.fwS,C.fwQ,C.fcD,C.fcE,C.fcF,C.fNy,C.eWU,C.eWV,C.eWO,C.eWI,C.eXd,C.eXe,C.eXg,C.eXh,C.eXc,C.fNx,C.eWz,C.fjs,C.edS,C.fEA,C.fEB,C.fED,C.fEw,C.fEx,C.fML,C.dj3,C.dj9,C.edR,C.f95,C.f97,C.f96,C.f94,C.fxY,C.fy_,C.fb4,C.fE2,C.fE3,C.fE4,C.fEf,C.fEk,C.fEl,C.fEm,C.fEn,C.fEo,C.fEp,C.fEq,C.fE5,C.fE6,C.fE7,C.fE8,C.fE9,C.fEa,C.fEb,C.fEc,C.fEd,C.fEe,C.fEg,C.fEh,C.fEi,C.fEj,C.fvO,C.fj0,C.fj_,C.fEJ,C.dTe,C.dTc,C.eVJ,C.c8V,C.c8X,C.fLa,C.d8r,C.d8t,C.fL9,C.fL7,C.fNw,C.fBp,C.d81,C.ftS,C.ftT,C.cem,C.cen,C.cel,C.ceb,C.cec,C.ce8,C.ce9,C.cea,C.ceD,C.cey,C.cet,C.ceu,C.cew,C.cez,C.ceB,C.fC1,C.ceg,C.cej,C.cek,C.ceq,C.cer,C.fEQ,C.fDX,C.cef,C.ced,C.fBW,C.fly,C.ce6,C.eTm,C.foz,C.ev7,C.erx,C.ery,C.et7,C.esW,C.esX,C.eqV,C.euT,C.euU,C.euV,C.eqj,C.esB,C.esD,C.esd,C.esa,C.ert,C.eru,C.esk,C.eql,C.esw,C.esx,C.esv,C.esz,C.esy,C.esR,C.esS,C.esU,C.esN,C.eqE,C.eqB,C.et0,C.eqt,C.euS,C.ep1,C.eqw,C.eqv,C.epK,C.epP,C.epN,C.epL,C.ev_,C.ev0,C.ev1,C.euZ,C.euw,C.euv,C.eup,C.eur,C.euh,C.euQ,C.euO,C.ep9,C.ep5,C.err,C.epT,C.epk,C.epj,C.epG,C.epH,C.eqT,C.epV,C.epZ,C.esK,C.eui,C.euj,C.euk,C.eul,C.eqn,C.eqo,C.eqp,C.erU,C.eqP,C.eqH,C.eqO,C.es3,C.es4,C.etR,C.etT,C.euc,C.eue,C.etU,C.etV,C.epR,C.erw,C.erv,C.euG,C.eqe,C.eq6,C.eq7,C.eqa,C.eqb,C.es8,C.erc,C.erd,C.ere,C.erf,C.erg,C.erh,C.eri,C.erj,C.erk,C.erl,C.erm,C.et4,C.d0S,C.d0T,C.evN,C.fEG,C.fEP,C.fEF,C.fEL,C.fby,C.fNA,C.fNB,C.fNC,C.evf,C.evo,C.eoV,C.eoQ,C.eoR,C.fz_,C.fyZ,C.fz0,C.fz5,C.fz1,C.fz2,C.f5I,C.f5J,C.ee0,C.chc])
u(B.ja,[C.cFg,C.f4a,C.f4f,C.f4g,C.f4b,C.f4c,C.f4d,C.f43,C.f44,C.f46,C.f47,C.f4k,C.f4j,C.f49,C.f48,C.f4h,C.f4i,C.f4n,C.f4o,C.f4m,C.cGB,C.cGF,C.cGD,C.cGt,C.cGu,C.cGw,C.cGp,C.cGq,C.cGx,C.cGo,C.cGn,C.cGm,C.cFQ,C.cFP,C.cFS,C.cG_,C.cFT,C.cFR,C.cFV,C.cFW,C.cFX,C.cFU,C.cFY,C.cG1,C.cG2,C.cG3,C.cG4,C.ftA,C.ftB,C.fty,C.ftz,C.e9H,C.e9F,C.e9G,C.e9I,C.e9J,C.dXg,C.ftE,C.ftF,C.ftI,C.ftJ,C.ftM,C.ftN,C.ee1,C.fBw,C.fBv,C.eh_,C.egZ,C.egD,C.egz,C.egK,C.egL,C.egM,C.egF,C.egG,C.egH,C.egI,C.egE,C.egB,C.egC,C.egS,C.egT,C.egR,C.egU,C.egQ,C.egP,C.egO,C.egX,C.egN,C.egA,C.ehx,C.ehl,C.ehm,C.ehs,C.ehn,C.ehp,C.eho,C.ehw,C.ePB,C.ePZ,C.ePk,C.ePl,C.ePi,C.ePj,C.eQ4,C.eQ3,C.eQ2,C.eQ7,C.eQ6,C.eP9,C.ePd,C.eP8,C.eP7,C.eP4,C.eP6,C.eP5,C.eQG,C.eQz,C.eQx,C.eQA,C.eQw,C.eQB,C.eQv,C.eQC,C.eQD,C.eQE,C.eQu,C.eQg,C.eQb,C.eQm,C.eQf,C.eQq,C.eQe,C.eQr,C.eQd,C.eQs,C.eQc,C.ePW,C.ePV,C.ePX,C.ePU,C.ePY,C.ePO,C.ePN,C.ePP,C.ePM,C.ePL,C.ePK,C.eOS,C.eON,C.eP1,C.eOX,C.eP2,C.eOW,C.eP3,C.eOV,C.ePR,C.ePF,C.ePE,C.ePG,C.ePD,C.ePH,C.ePC,C.eQ_,C.eQa,C.eQ9,C.ePr,C.fEt,C.fEv,C.fEz,C.fwR,C.fzh,C.fzf,C.fzg,C.eWW,C.eWX,C.eWT,C.eWN,C.eWM,C.eWP,C.eWQ,C.eWC,C.eWD,C.eWF,C.eWG,C.eWH,C.eWE,C.eWJ,C.eX9,C.eXa,C.eX8,C.eXb,C.eX7,C.eX6,C.eX5,C.eXf,C.eX4,C.eX3,C.eX2,C.eXi,C.eX1,C.eXj,C.eX0,C.eX_,C.eWK,C.eWL,C.eWZ,C.eWY,C.eWv,C.eWw,C.eWx,C.eWy,C.eWu,C.eWA,C.eWB,C.dj2,C.dj4,C.dj7,C.dj8,C.dj6,C.dj5,C.fxZ,C.fvP,C.c8W,C.c8Y,C.d8k,C.d8p,C.d8q,C.d8o,C.d8n,C.d8s,C.d8m,C.d8l,C.d8u,C.fL6,C.df5,C.df6,C.df7,C.ftQ,C.ftR,C.ceE,C.eoW,C.eoX,C.eoY,C.eoZ,C.flw,C.flx,C.dRr,C.dRq,C.d5g,C.d5f,C.ev9,C.ev8,C.erz,C.euf,C.ev5,C.et5,C.euW,C.euX,C.ev6,C.ese,C.eqh,C.eqi,C.esC,C.esc,C.es9,C.esb,C.esf,C.esg,C.esh,C.esi,C.esj,C.esl,C.eqm,C.eso,C.esp,C.esq,C.esr,C.ess,C.est,C.esn,C.esA,C.esO,C.esM,C.esV,C.esm,C.eqC,C.eqD,C.eqF,C.esY,C.et1,C.epg,C.eqA,C.eqy,C.et9,C.equ,C.et8,C.eqk,C.eqW,C.euR,C.eug,C.eph,C.epe,C.ep4,C.ep0,C.ep2,C.eqx,C.epJ,C.epO,C.epM,C.epI,C.esL,C.ev2,C.eus,C.eun,C.euo,C.euq,C.erp,C.ero,C.euP,C.ep7,C.ep8,C.epa,C.epb,C.epf,C.ep6,C.et6,C.euY,C.ers,C.epS,C.ep3,C.eqU,C.epc,C.epl,C.epm,C.epn,C.epy,C.epB,C.epC,C.epD,C.epE,C.epF,C.epo,C.epp,C.epq,C.epr,C.eps,C.ept,C.epu,C.epv,C.epw,C.epx,C.epz,C.epA,C.eqS,C.eqR,C.eqQ,C.epd,C.epW,C.epU,C.epX,C.epY,C.eqz,C.esG,C.esH,C.esE,C.esF,C.eum,C.eqr,C.eqq,C.erT,C.erS,C.erV,C.erR,C.erW,C.erQ,C.erX,C.erP,C.erY,C.erO,C.erZ,C.erN,C.es_,C.erM,C.es0,C.erL,C.erE,C.erF,C.erG,C.erD,C.erH,C.erC,C.erI,C.erB,C.erJ,C.erA,C.erK,C.eqM,C.eqN,C.eqG,C.eqI,C.eqJ,C.eqK,C.eqL,C.ev3,C.ev4,C.es2,C.es1,C.es5,C.ets,C.ett,C.etu,C.etF,C.etQ,C.eu0,C.eu7,C.eu8,C.eu9,C.eua,C.eub,C.etv,C.etw,C.etx,C.ety,C.etz,C.etA,C.etB,C.etC,C.etD,C.etE,C.etG,C.etH,C.etI,C.etJ,C.etK,C.etL,C.etM,C.etN,C.etO,C.eti,C.etP,C.etq,C.etp,C.etS,C.eto,C.ete,C.eud,C.etn,C.etd,C.etb,C.etm,C.etc,C.eta,C.etW,C.etl,C.etX,C.etY,C.etZ,C.eu_,C.etk,C.eu1,C.eu2,C.eu3,C.etj,C.eu4,C.eth,C.eu5,C.etg,C.eu6,C.etf,C.epQ,C.euz,C.euy,C.euA,C.eux,C.eqZ,C.eqY,C.er_,C.eqX,C.euK,C.euF,C.euJ,C.euB,C.euC,C.euD,C.euE,C.euH,C.euI,C.euN,C.eqg,C.eq3,C.eq4,C.eq5,C.eq2,C.eq9,C.eq8,C.eq1,C.eq0,C.eqc,C.eq_,C.eqd,C.es7,C.es6,C.erb,C.era,C.er9,C.er8,C.er7,C.er6,C.er5,C.er4,C.er1,C.er3,C.er2,C.er0,C.ern,C.et2,C.et3,C.d0U,C.d1g,C.d1h,C.d0O,C.d0N,C.d0R,C.d0P,C.d0Q,C.evK,C.evA,C.evJ,C.evB,C.evC,C.evw,C.evx,C.evy,C.evz,C.evM,C.fEM,C.fEN,C.fEO,C.evc,C.evd,C.eve,C.evh,C.evi,C.evl,C.evm,C.evk,C.evn,C.evj,C.evb,C.eva,C.evp,C.evq,C.evs,C.evt,C.eoU,C.eoT,C.eoP,C.eoS,C.evv,C.evu,C.fz4,C.fz3,C.edZ,C.ee_])
t(C.aQL,B.J)
u(B.mc,[C.a3x,C.awN,C.avu,C.xA,C.xD,C.kT,C.tm,C.Bu,C.rx,C.w1,C.arr,C.IJ,C.aqT,C.uK,C.mx,C.hF,C.a8o])
u(C.bNl,[C.cxn,C.bNm])
u(C.ch6,[C.cha,C.ast])
t(C.ch9,C.ch4)
t(C.ch8,C.ch3)
t(C.chb,C.ch8)
t(C.ch7,C.ch5)
t(C.ch1,C.ch2)
t(C.b9z,B.oR)
t(C.cra,B.auX)
t(C.a8a,B.xo)
t(C.aVf,B.dF)
t(C.aAl,B.atO)
u(B.ag,[C.a0B,C.Ym,C.Yk,C.aq4,C.VA,C.VB,C.a_C,C.a08,C.a07,C.aDx,C.Zv,C.Nq,C.Z3,C.Zo,C.ao3,C.aIl,C.UT,C.aza,C.a7s,C.NS,C.ayx,C.JK,C.a_f,C.VM,C.VN,C.aDT,C.aqY,C.a7t])
u(B.ah,[C.aIE,C.axk,C.axg,C.aDm,C.aDD,C.aDF,C.aF1,C.aGX,C.aGW,C.aLp,C.aB2,C.aKW,C.azq,C.bfp,C.aKI,C.aMG,C.aKV,C.bdj,C.aLn,C.aLy,C.aJF,C.bc5,C.aLz,C.aDW,C.bjF,C.aDU,C.aDX,C.bjo])
u(B.at,[C.axi,C.ad_,C.acp,C.biv,C.ad2,C.aeI,C.b0d,C.brM,C.b0y,C.bkW,C.bqk,C.aZs,C.b0B,C.ad5,C.adm,C.b0z,C.II,C.aZv,C.bck,C.Pw,C.JR,C.bgV,C.bgU,C.bu9])
u(B.Hc,[C.bbN,C.bta,C.aIY,C.bet,C.bqI])
u(B.mN,[C.bbM,C.b8k,C.bqF,C.bbj,C.beQ,C.bh0,C.bdX,C.beN,C.bev,C.bnb,C.b9r,C.b95,C.bu6,C.br7,C.bqg,C.bdQ,C.b0w,C.bpd,C.bqd])
t(C.bjm,C.aLp)
t(C.biL,C.aKW)
t(C.bix,C.aKI)
t(C.btD,C.aMG)
t(C.biI,C.aKV)
t(C.bjk,C.aLn)
t(C.bwn,C.aLy)
t(C.aDV,C.bwn)
t(C.bc6,C.aJF)
t(C.aDY,C.aLz)
t(C.btY,B.iT)
t(C.a8n,B.ks)
t(C.che,C.b2h)
t(C.ahX,C.a2z)
u(B.Xn,[C.aQB,C.aS7])
t(C.awp,C.aQB)
w(C.aLp,B.cn)
w(C.aKW,B.cn)
w(C.aKI,B.cn)
w(C.aKV,B.cn)
w(C.aLn,B.cn)
w(C.aMG,B.cn)
w(C.aJF,B.eS)
w(C.aLy,B.cn)
v(C.bwn,B.ew)
w(C.aLz,B.cn)})()
B.k_(b.typeUniverse,JSON.parse('{"aRk":{"hL":["aRk"]},"nX":{"aRk":[],"hL":["aRk"]},"aQL":{"J":["RH"],"J.E":"RH"},"b9z":{"oR":[]},"a8a":{"xo":[],"oh":[]},"aVf":{"dF":[],"cx":[],"t":[]},"aAl":{"aT":[],"d6":["aT"],"aS":[],"cs":[]},"a0B":{"ag":[],"t":[]},"aIE":{"ah":["a0B"]},"Ym":{"ag":[],"t":[]},"Yk":{"ag":[],"t":[]},"axk":{"ah":["Ym"]},"axg":{"ah":["Yk"]},"axi":{"at":[],"t":[]},"aq4":{"ag":[],"t":[]},"aDm":{"ah":["aq4"]},"ad_":{"at":[],"t":[]},"acp":{"at":[],"t":[]},"ad2":{"at":[],"t":[]},"aeI":{"at":[],"t":[]},"biv":{"at":[],"t":[]},"VA":{"ag":[],"t":[]},"aDD":{"ah":["VA"]},"b0d":{"at":[],"t":[]},"bbN":{"aC":[]},"bbM":{"aC":[]},"bta":{"aC":[]},"b8k":{"aC":[]},"bqF":{"aC":[]},"VB":{"ag":[],"t":[]},"aDF":{"ah":["VB"]},"bbj":{"aC":[]},"a_C":{"ag":[],"t":[]},"aF1":{"ah":["a_C"]},"beQ":{"aC":[]},"a08":{"ag":[],"t":[]},"a07":{"ag":[],"t":[]},"aDx":{"ag":[],"t":[]},"Zv":{"ag":[],"t":[]},"aGX":{"ah":["a08"]},"aGW":{"ah":["a07"]},"bjm":{"ah":["aDx"]},"bh0":{"aC":[]},"aB2":{"ah":["Zv"]},"brM":{"at":[],"t":[]},"b0y":{"at":[],"t":[]},"bkW":{"at":[],"t":[]},"Nq":{"ag":[],"t":[]},"Z3":{"ag":[],"t":[]},"biL":{"ah":["Nq"]},"bqk":{"at":[],"t":[]},"bdX":{"aC":[]},"aZs":{"at":[],"t":[]},"azq":{"ah":["Z3"]},"Zo":{"ag":[],"t":[]},"bfp":{"ah":["Zo"]},"beN":{"aC":[]},"bev":{"aC":[]},"bnb":{"aC":[]},"b9r":{"aC":[]},"b95":{"aC":[]},"bu6":{"aC":[]},"br7":{"aC":[]},"bqg":{"aC":[]},"bdQ":{"aC":[]},"ao3":{"ag":[],"t":[]},"b0B":{"at":[],"t":[]},"bix":{"ah":["ao3"]},"ad5":{"at":[],"t":[]},"adm":{"at":[],"t":[]},"aIl":{"ag":[],"t":[]},"UT":{"ag":[],"t":[]},"II":{"at":[],"t":[]},"aza":{"ag":[],"t":[]},"a7s":{"ag":[],"t":[]},"b0z":{"at":[],"t":[]},"b0w":{"aC":[]},"btD":{"ah":["aIl"]},"aIY":{"aC":[]},"biI":{"ah":["UT"]},"bdj":{"ah":["aza"]},"bjk":{"ah":["a7s"]},"aZv":{"at":[],"t":[]},"bet":{"aC":[]},"bpd":{"aC":[]},"bqd":{"aC":[]},"ayx":{"ag":[],"t":[]},"JK":{"ag":[],"t":[]},"a_f":{"ag":[],"t":[]},"JR":{"at":[],"t":[]},"NS":{"ag":[],"t":[]},"aDV":{"ah":["NS"],"ew":[]},"bc6":{"ah":["ayx"]},"bck":{"at":[],"t":[]},"bc5":{"ah":["JK"]},"Pw":{"at":[],"t":[]},"aDY":{"ah":["a_f"]},"bqI":{"aC":[]},"bgV":{"at":[],"t":[]},"bgU":{"at":[],"t":[]},"VM":{"ag":[],"t":[]},"VN":{"ag":[],"t":[]},"aDT":{"ag":[],"t":[]},"aqY":{"ag":[],"t":[]},"aDW":{"ah":["VM"]},"bjF":{"ah":["VN"]},"aDU":{"ah":["aDT"]},"btY":{"iT":[]},"aDX":{"ah":["aqY"]},"bu9":{"at":[],"t":[]},"a7t":{"ag":[],"t":[]},"bjo":{"ah":["a7t"]},"a8n":{"ks":["ft<eP>"],"kf":["ft<eP>"]},"ahX":{"a2z":[]},"aQB":{"j3":[],"ff":[]},"awp":{"j3":[],"ff":[]},"aS7":{"j3":[],"ff":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.ax
return{bu:w("LE"),U:w("vv<q3>"),bz:w("v"),M:w("dC<m>"),bo:w("jz"),g7:w("M9"),gc:w("aA<iz?>"),bq:w("aA<~>"),cc:w("Mm"),fS:w("DT"),an:w("HU"),bm:w("O<RH>"),X:w("O<a2H>"),f3:w("O<aRk>"),aK:w("O<na>"),V:w("O<ac>"),O:w("O<v>"),fA:w("O<lz>"),d5:w("O<aA<bv<H,+icon3d,picture(m?,m?)>>>"),bH:w("O<aA<dI>>"),fG:w("O<aA<~>>"),aF:w("O<ng>"),cd:w("O<ai<jn>>"),ez:w("O<a5<m,aD>>"),d:w("O<a5<m,@>>"),B:w("O<mt>"),h:w("O<jn>"),gE:w("O<zB>"),k:w("O<on>"),g:w("O<lI>"),D:w("O<i4>"),u:w("O<eG>"),m:w("O<uK>"),i:w("O<hF>"),aC:w("O<a7K>"),o:w("O<zC>"),e3:w("O<aD>"),dN:w("O<x>"),v:w("O<hw>"),cR:w("O<iR>"),J:w("O<jg>"),gx:w("O<pa<m>>"),f2:w("O<+(a1,m)>"),L:w("O<+(m,m)>"),aD:w("O<+data,mimeType(m,m)>"),G:w("O<+(K,K)>"),ek:w("O<+(H,m)>"),n:w("O<+(H,H)>"),r:w("O<cS>"),s:w("O<m>"),aS:w("O<iT>"),p:w("O<t>"),eR:w("O<ff>"),fT:w("O<b82>"),bx:w("O<aEw>"),gz:w("O<aeS>"),x:w("O<K>"),t:w("O<H>"),dS:w("O<aC?>"),bA:w("O<x?>"),Z:w("O<H?>"),cA:w("O<cf>"),A:w("cu<ah<ag>>"),gL:w("ai<on>"),R:w("ai<i4>"),j:w("ai<@>"),bW:w("ai<H>"),e:w("bv<H,+icon3d,picture(m?,m?)>"),P:w("a5<m,@>"),f:w("a5<@,@>"),gI:w("a5<H,+icon3d,picture(m?,m?)>"),bR:w("M<hF,t>"),eC:w("M<nN,m>"),cT:w("M<jF,D>"),dv:w("M<m,m>"),f0:w("M<m,t>"),gN:w("M<H,pH>"),gh:w("M<mx,jp<mx>>"),w:w("iD"),ei:w("iz"),g2:w("rn"),fB:w("Eu"),b6:w("zB"),gX:w("a7C"),dt:w("lh"),ea:w("on"),bt:w("lI"),I:w("i4"),F:w("eG"),fO:w("mx"),ff:w("uK"),fP:w("hF"),Q:w("w1"),dO:w("aqU"),a:w("cp"),C:w("aD"),dw:w("asu"),di:w("a8o"),Y:w("eP"),fz:w("+(m,m)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(m?,m)"),aH:w("+icon3d,picture(m?,m?)"),cz:w("F0"),dB:w("dx<x>"),bJ:w("dx<m>"),_:w("e0<m>"),N:w("m"),fw:w("q3"),bO:w("ar"),K:w("bp<x>"),b:w("bp<K>"),E:w("dI"),W:w("cw<m>"),ac:w("cw<H>"),ex:w("jI<lI>"),cI:w("jI<m>"),cl:w("jI<K>"),b4:w("a_<le>"),a8:w("a_<m7>"),fR:w("a_<+(m,m)>"),co:w("ea<x>"),l:w("t"),b2:w("bV<~>"),ev:w("q5<dW>"),dT:w("bg<~>"),cQ:w("aAl"),q:w("n_"),y:w("R"),gR:w("K"),z:w("@"),S:w("H"),at:w("ba?"),gw:w("ai<a5<m,@>>?"),aT:w("ai<i4>?"),c:w("ai<@>?"),aP:w("iz?"),af:w("i4?"),go:w("b0D?"),a6:w("a7L?"),cK:w("aD?"),bZ:w("+bytes,dataUrl,fileName(dI,m,m)?"),gl:w("+claimCode,qrPayload,token(m?,m,m)?"),T:w("m?"),dd:w("dI?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aWX=new B.bI(A.ay,null,null,H.ao7,null)
D.aX5=new B.dd(0,-0.15)
D.aX7=new B.dd(0.62,0)
D.aXa=new B.dd(-0.35,-0.45)
D.aXk=new B.dd(0.9,-0.85)
D.aZe=new B.bo(H.SC,H.SC,A.hE,A.hE)
D.aZt=new B.az(A.b5,1,A.q,-1)
D.bim=new B.v(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aZF=new B.az(D.bim,1,A.q,-1)
D.aZR=new B.az(A.aF,1.5,A.q,-1)
D.aZW=new B.az(A.b5,1.6,A.q,-1)
D.b_b=new B.az(A.aF,1.4,A.q,-1)
D.b0y=new B.o(null,null,null,null,null,L.GP,A.a5)
D.bYG=new B.a8(A.a3,A.a8,A.x,G.a3j,null,null)
D.b0G=new B.o(null,null,null,null,null,D.bYG,A.a5)
D.abp=new B.o(A.au,null,null,A.t2,null,null,A.n)
D.bc9=new B.v(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.bij=new B.v(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cWg=w([D.bc9,D.bij],x.O)
D.ej3=new B.c_(A.A,0.5,A.x,null,0,D.cWg,null,null)
D.b0Z=new B.o(null,null,null,null,null,D.ej3,A.a5)
D.X0=new B.v(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.b_r=new B.bO(P.v3,A.W,A.W,A.W)
D.b10=new B.o(D.X0,null,D.b_r,null,null,null,A.n)
D.c_p=new B.a8(A.a3,A.a8,A.x,A.Qd,null,null)
D.b17=new B.o(null,null,null,null,null,D.c_p,A.a5)
D.acY=new B.v(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.b1a=new B.o(D.acY,null,null,A.qF,null,null,A.n)
D.b1e=new B.o(A.jj,null,null,null,null,null,A.a5)
D.b1h=new B.o(Z.ae2,null,H.ab3,A.me,null,null,A.n)
D.E9=new B.o(A.dL,null,null,null,null,null,A.a5)
D.b1o=new B.o(null,null,null,null,null,E.w4,A.a5)
D.d0e=w([E.aeV,A.bY],x.O)
D.c_0=new B.a8(A.b2,A.b6,A.x,D.d0e,null,null)
D.b1s=new B.o(null,null,null,A.me,null,D.c_0,A.n)
D.db0=w([A.bi,A.dL,A.k_],x.O)
D.a1r=new B.a8(A.ay,A.aC,A.x,D.db0,null,null)
D.b1F=new B.o(null,null,null,null,null,D.a1r,A.n)
D.b1G=new B.o(D.acY,null,null,A.kN,null,null,A.n)
D.cqL=w([A.d5,A.bi],x.O)
D.bZS=new B.a8(A.ay,A.aC,A.x,D.cqL,null,null)
D.b1K=new B.o(null,null,null,null,null,D.bZS,A.n)
D.b1U=new B.o(null,null,null,null,null,G.uc,A.a5)
D.b2d=new B.o(A.aeX,null,null,null,null,null,A.a5)
D.bd1=new B.v(0.5647058823529412,0,0,0,A.t)
D.abz=new B.ac(0,A.G,D.bd1,A.S7,28)
D.b4l=new B.aVs()
D.b4U=new C.cra()
D.b55=new C.b9z()
D.ac4=new B.co(A.A,null,null,A.a1g,null)
D.b7D=new B.fi(null,null,null,null,null,E.mZ,null,null,null,null)
D.b5C=new B.co(A.A,null,null,D.b7D,null)
D.bJg=new B.ae(A.e0,28,A.c,null,null,null)
D.b65=new B.co(A.A,null,null,D.bJg,null)
D.b7A=new B.fi(2,null,null,null,null,A.bZ,null,null,null,null)
D.b6r=new B.co(A.A,null,null,D.b7A,null)
D.bJB=new B.ae(L.NS,40,A.bx,null,null,null)
D.b6s=new B.co(A.A,null,null,D.bJB,null)
D.b8t=new B.v(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b8F=new B.v(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b93=new B.v(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b9a=new B.v(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b9F=new B.v(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b9V=new B.v(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b9W=new B.v(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.KV=new B.v(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.bak=new B.v(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.baq=new B.v(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.adf=new B.v(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.bbb=new B.v(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.bbZ=new B.v(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.adu=new B.v(1,1,1,0.9725490196078431,A.t)
D.bci=new B.v(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.bcu=new B.v(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.bcy=new B.v(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.bcM=new B.v(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.bd6=new B.v(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.beC=new B.v(1,1,0.996078431372549,0.9725490196078431,A.t)
D.WM=new B.v(0.8509803921568627,0,0,0,A.t)
D.beL=new B.v(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.beS=new B.v(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.aek=new B.v(0.6,0,0,0,A.t)
D.aem=new B.v(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.bgg=new B.v(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.tn=new B.v(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.bgF=new B.v(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.bh4=new B.v(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.bhs=new B.v(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.af7=new B.v(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.Xa=new B.v(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.AP=new B.v(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.Lu=new B.v(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.jg=new B.v(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.afv=new B.v(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.Xl=new B.v(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.bkT=new B.v(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.blm=new B.v(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.blA=new B.v(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.XH=new B.v(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.bmK=new B.v(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.xz=new B.v(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.bnf=new B.v(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.bnz=new B.hK(A.b1,!0,null,null)
D.ffo=new B.G(!0,A.aA,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFm=new B.y("Bio link",null,D.ffo,null,null,null,null,null,null,null,null,null)
D.b6l=new B.co(A.A,null,null,D.fFm,null)
D.bnP=new B.hK(A.W6,!0,D.b6l,null)
D.LS=new C.a3x(0,"none")
D.agz=new C.a3x(1,"deflate")
D.agA=new C.a3x(2,"bzip2")
D.boM=new B.kl(0.165,0.84,0.44,1)
D.d0y=w([A.c9,A.dN,A.aF],x.O)
D.bZ9=new B.a8(A.ay,A.aC,A.x,D.d0y,null,null)
D.b0D=new B.o(null,null,null,null,null,D.bZ9,A.n)
D.bSw=new B.ae(A.eT,null,A.ad,null,null,null)
D.b6X=new B.co(A.A,null,null,D.bSw,null)
D.bpi=new B.kQ(D.b0D,A.be,D.b6X,null)
D.bl8=new B.v(0.058823529411764705,1,1,1,A.t)
D.d3O=w([A.bD,A.qO,A.qO,D.bl8],x.O)
D.cI3=w([0,0.32,0.7,1],x.x)
D.bZI=new B.a8(A.ay,A.aC,A.x,D.d3O,D.cI3,null)
D.b0s=new B.o(null,null,null,null,null,D.bZI,A.n)
D.bpo=new B.kQ(D.b0s,A.be,null,null)
D.bqw=new B.mm(1,1,null,null,null,A.bl,null)
D.bqz=new B.mm(1,null,null,null,null,D.Xl,null)
D.br2=new B.ba(125e4)
D.br8=new B.ba(17e4)
D.bri=new B.ba(35964e8)
D.brp=new B.ba(55e4)
D.brt=new B.ba(68e4)
D.brU=new B.ii(0,0,0,5)
D.bs9=new B.Q(0,16,16,0)
D.bsk=new B.Q(0,36,0,36)
D.bsr=new B.Q(0,54,0,0)
D.bsy=new B.Q(10,0,10,3)
D.bsJ=new B.ii(10,16,10,10)
D.bsV=new B.Q(10,6,4,6)
D.bsY=new B.Q(10,8,10,6)
D.ahw=new B.Q(11,8,11,11)
D.bt2=new B.Q(12,0,12,24)
D.bte=new B.Q(12,12,12,4)
D.bth=new B.Q(12,12,8,12)
D.btw=new B.Q(12,8,8,12)
D.btT=new B.Q(14,14,14,0)
D.btY=new B.Q(14,14,14,90)
D.bug=new B.Q(16,10,16,16)
D.buh=new B.Q(16,10,16,20)
D.aij=new B.Q(16,6,16,28)
D.buQ=new B.Q(18,0,18,10)
D.buS=new B.Q(18,0,18,30)
D.buU=new B.Q(18,10,18,12)
D.buV=new B.Q(18,10,18,14)
D.bvb=new B.Q(18,16,14,18)
D.bvg=new B.Q(18,18,18,12)
D.bvm=new B.Q(18,26,18,12)
D.bvr=new B.Q(18,34,18,34)
D.bvs=new B.Q(18,4,18,14)
D.bvy=new B.Q(18,8,18,24)
D.bvQ=new B.Q(20,16,14,4)
D.bvV=new B.Q(20,18,12,4)
D.bw_=new B.Q(20,20,12,20)
D.bw2=new B.Q(20,22,20,20)
D.bw7=new B.Q(20,6,20,6)
D.bwh=new B.Q(22,18,22,18)
D.bwp=new B.Q(22,24,22,0)
D.bws=new B.Q(22,24,22,4)
D.bwA=new B.Q(22,60,22,22)
D.bwG=new B.Q(24,24,24,22)
D.bwQ=new B.Q(26,10,60,10)
D.bwY=new B.Q(28,44,28,44)
D.bxe=new B.Q(32,44,32,44)
D.bxm=new B.Q(38,30,38,20)
D.bxr=new B.Q(4,0,0,6)
D.bxD=new B.ii(4,4,4,4)
D.by2=new B.ii(6,5,6,5)
D.by6=new B.Q(6,6,8,6)
D.byh=new B.Q(8,14,8,14)
D.byi=new B.Q(8,22,8,22)
D.byq=new B.Q(8,6,12,6)
D.byz=new B.Q(8,8,8,4)
D.ajc=new B.Q(9,9,9,6)
D.byK=new B.ii(2.5,2.5,2.5,2.5)
D.byL=new B.Q(10.5,0,10.5,0)
D.byM=new B.Q(7,1.5,7,1.5)
D.cTl=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bz1=new B.z_(null,null,D.cTl,A.At)
D.cQn=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bz2=new B.z_(null,null,D.cQn,A.At)
D.aR7=new B.G(!0,A.aA,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEG=new B.y("WORD DESIGN",null,D.aR7,null,null,null,null,null,null,null,null,null)
D.bzB=new B.bB(1,A.bg,D.fEG,null)
D.fEl=new B.y("Slides database",null,Aa.rN,null,null,null,null,null,null,null,null,null)
D.fBB=new B.y("Admin only \xb7 keep as many as you like",null,U.aQC,null,null,null,null,null,null,null,null,null)
D.dji=w([D.fEl,A.bz,D.fBB],x.p)
D.boe=new B.fl(A.ah,A.e,A.j,A.F,null,A.p,null,0,D.dji,null)
D.bzE=new B.bB(1,A.bg,D.boe,null)
D.fw1=new B.y("NGMY logo",null,A.fP,null,null,null,null,null,null,null,null,null)
D.bzH=new B.bB(1,A.bg,D.fw1,null)
D.fdf=new B.G(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGG=new B.y("TALK TO THE EDITOR",null,D.fdf,null,null,null,null,null,null,null,null,null)
D.bzY=new B.bB(1,A.bg,D.fGG,null)
D.fpT=new B.y("Tell the AI what to change",null,Aa.rN,null,null,null,null,null,null,null,null,null)
D.bAi=new B.bB(1,A.bg,D.fpT,null)
D.bBa=new B.DI(!0,"video/mp4")
D.fbz=new B.G(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnV=new B.y("Move presentations between devices",null,D.fbz,null,null,null,!1,null,null,1,null,null)
D.bBe=new B.qp(A.dZ,A.a3,A.f,D.fnV,null)
D.fp5=new B.y("Edit in Slides",null,A.iS,null,null,null,null,null,null,null,null,null)
D.bBf=new B.qp(A.dZ,A.A,A.f,D.fp5,null)
D.bBu=new B.dq(1,A.cm,D.bBf,null)
D.a_K=new B.a1(60988,"MaterialIcons",!1)
D.bET=new B.a1(61352,"MaterialIcons",!1)
D.akL=new B.a1(61531,"MaterialIcons",!1)
D.bG6=new B.a1(63062,"MaterialIcons",!1)
D.bGd=new B.a1(63109,"MaterialIcons",!1)
D.bGp=new B.a1(63206,"MaterialIcons",!1)
D.alw=new B.a1(63238,"MaterialIcons",!1)
D.bGH=new B.a1(63338,"MaterialIcons",!1)
D.a0e=new B.a1(63365,"MaterialIcons",!1)
D.a0f=new B.a1(63367,"MaterialIcons",!1)
D.a0g=new B.a1(63368,"MaterialIcons",!1)
D.alH=new B.a1(63384,"MaterialIcons",!1)
D.bGZ=new B.a1(63525,"MaterialIcons",!1)
D.bH1=new B.a1(63568,"MaterialIcons",!1)
D.bHm=new B.a1(983072,"MaterialIcons",!1)
D.bHK=new B.a1(983271,"MaterialIcons",!0)
D.amP=new B.a1(983965,"MaterialIcons",!1)
D.amQ=new B.a1(983966,"MaterialIcons",!1)
D.bIC=new B.a1(984592,"MaterialIcons",!1)
D.bIU=new B.ae(A.tU,16,A.aA,null,null,null)
D.bJ0=new B.ae(A.o4,null,A.c,null,null,null)
D.an_=new B.ae(A.q5,18,A.c,null,null,null)
D.bJh=new B.ae(A.By,18,O.li,null,null,null)
D.bJX=new B.ae(A.jI,11,null,null,null,null)
D.bK6=new B.ae(A.a0_,null,A.ek,null,null,null)
D.bKF=new B.ae(A.ra,18,A.aA,null,null,null)
D.bKL=new B.ae(A2.BN,14,null,null,null,null)
D.bKM=new B.ae(A.ef,28,A.cs,null,null,null)
D.bKY=new B.ae(A.q6,20,A.c,null,null,null)
D.bL4=new B.ae(A.yr,null,null,null,null,null)
D.bLa=new B.ae(A.lo,18,A.iE,null,null,null)
D.bLf=new B.ae(A.lp,null,null,null,null,null)
D.bG8=new B.a1(63065,"MaterialIcons",!1)
D.bLT=new B.ae(D.bG8,15,A.c,null,null,null)
D.bGe=new B.a1(63113,"MaterialIcons",!1)
D.bLZ=new B.ae(D.bGe,null,A.ad,null,null,null)
D.bMm=new B.ae(A.tR,22,A.bL,null,null,null)
D.bMG=new B.ae(A.vM,18,null,null,null,null)
D.bMM=new B.ae(A.BR,12,A.c,null,null,null)
D.bIf=new B.a1(983687,"MaterialIcons",!1)
D.bMX=new B.ae(D.bIf,null,A.bi,null,null,null)
D.bN5=new B.ae(A.hA,null,A.bi,null,null,null)
D.bNo=new B.ae(A.p_,22,A.c,null,null,null)
D.bNs=new B.ae(A.cy,13,A.c,null,null,null)
D.bNy=new B.ae(A.ef,26,A.aw,null,null,null)
D.bNB=new B.ae(A.re,26,A.c,null,null,null)
D.O4=new B.ae(A.jI,8,A.c,null,null,null)
D.bNU=new B.ae(A.q5,40,A.c,null,null,null)
D.bNV=new B.ae(A.bDQ,null,null,null,null,null)
D.bNZ=new B.ae(A.u4,20,null,null,null,null)
D.bIe=new B.a1(983683,"MaterialIcons",!1)
D.bO8=new B.ae(D.bIe,null,A.aZ,null,null,null)
D.bO9=new B.ae(A.jI,16,A.bi,null,null,null)
D.bOu=new B.ae(A.rf,null,null,null,null,null)
D.anw=new B.ae(A.vO,22,A.c,null,null,null)
D.bOy=new B.ae(A.e0,17,A.c,null,null,null)
D.anx=new B.ae(A.jI,9,A.c,null,null,null)
D.bOD=new B.ae(A.vJ,null,null,null,null,null)
D.bE6=new B.a1(57744,"MaterialIcons",!1)
D.bOK=new B.ae(D.bE6,null,null,null,null,null)
D.bON=new B.ae(A.vJ,16,null,null,null,null)
D.bIL=new B.a1(985181,"MaterialIcons",!1)
D.GG=new B.ae(D.bIL,null,null,null,null,null)
D.bOZ=new B.ae(A.lp,16,A.bL,null,null,null)
D.bI7=new B.a1(983615,"MaterialIcons",!1)
D.bP0=new B.ae(D.bI7,12,A.c,null,null,null)
D.anD=new B.ae(A.yb,16,null,null,null,null)
D.bP8=new B.ae(A.e0,21,A.c,null,null,null)
D.bPd=new B.ae(A.hA,17,A.c,null,null,null)
D.bPe=new B.ae(A.tR,null,null,null,null,null)
D.bPv=new B.ae(A.a0U,20,A.aA,null,null,null)
D.bPK=new B.ae(A.o0,22,E.mZ,null,null,null)
D.bPR=new B.ae(A.rc,13,A.ad,null,null,null)
D.bPT=new B.ae(A.amB,20,A.aA,null,null,null)
D.bDO=new B.a1(57495,"MaterialIcons",!1)
D.bPY=new B.ae(D.bDO,null,null,null,null,null)
D.bQ1=new B.ae(A.o1,18,A.c,null,null,null)
D.bQn=new B.ae(A.u7,28,A.c,null,null,null)
D.bQy=new B.ae(D.alw,null,A.aF,null,null,null)
D.bQz=new B.ae(A.q6,22,A.c,null,null,null)
D.anM=new B.ae(A.a_G,16,null,null,null,null)
D.bRk=new B.ae(A.tR,32,A.c,null,null,null)
D.bS2=new B.ae(A.j4,22,A.c,null,null,null)
D.bS6=new B.ae(A.re,22,A.ad,null,null,null)
D.ao0=new B.ae(A.tU,null,A.c_,null,null,null)
D.bT0=new B.ae(A.tT,18,null,null,null,null)
D.bTC=new B.ae(A.e0,18,A.bH,null,null,null)
D.a1j=new B.ae(A.cy,18,A.aA,null,null,null)
D.bTI=new B.ae(A.amv,null,null,null,null,null)
D.bU8=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aQW,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eB,!0,null,null,null,null)
D.f3M=new B.G(!0,A.bK,null,null,null,null,null,A.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bUq=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.f3M,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ae,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eB,!0,null,null,null,null)
D.bUR=new B.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eB,!0,null,null,null,null)
D.cXd=w([A.dL,A.aF],x.O)
D.bWV=new B.a8(A.a3,A.a8,A.x,D.cXd,null,null)
D.bX5=new B.a8(A.b2,A.b6,A.Uc,A.av3,null,null)
D.b8U=new B.v(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.bd9=new B.v(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.bgh=new B.v(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.bb3=new B.v(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cI5=w([D.b8U,D.bd9,D.bgh,D.bb3],x.O)
D.bXo=new B.a8(A.ay,A.aC,A.x,D.cI5,A.Hd,null)
D.djr=w([A.cY,A.bA,A.b5],x.O)
D.bXq=new B.a8(A.b2,A.b6,A.Uc,D.djr,null,null)
D.dkS=w([A.bi,A.c8],x.O)
D.bXu=new B.a8(A.a3,A.a8,A.x,D.dkS,null,null)
D.dfP=w([A.hv,A.d8,A.aE],x.O)
D.bXw=new B.a8(A.ay,A.aC,A.x,D.dfP,null,null)
D.d2d=w([A.cN,A.fb],x.O)
D.bXA=new B.a8(A.a3,A.a8,A.x,D.d2d,null,null)
D.djk=w([O.li,A.d8],x.O)
D.aoM=new B.a8(A.a3,A.a8,A.x,D.djk,null,null)
D.bdN=new B.v(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.djh=w([D.bdN,D.xz,A.bZ],x.O)
D.bXF=new B.a8(A.a3,A.a8,A.x,D.djh,null,null)
D.cYT=w([A.bn,A.cS,A.er],x.O)
D.bXG=new B.a8(A.ay,A.aC,A.x,D.cYT,null,null)
D.Oj=new B.a8(A.a3,A.a8,A.x,A.Hq,null,null)
D.blZ=new B.v(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cB3=w([D.blZ,A.bZ,A.ji],x.O)
D.aoR=new B.a8(A.ay,A.aC,A.x,D.cB3,null,null)
D.d7w=w([A.vd,A.ax,D.AP],x.O)
D.bYI=new B.a8(A.a3,A.a8,A.x,D.d7w,null,null)
D.bng=new B.v(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.bbY=new B.v(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.bhh=new B.v(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cY0=w([D.bng,D.bbY,D.bhh],x.O)
D.aoS=new B.a8(A.a3,A.a8,A.x,D.cY0,null,null)
D.bdP=new B.v(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.c_F=w([Au.agf,D.bdP],x.O)
D.bYR=new B.a8(A.b2,A.b6,A.x,D.c_F,null,null)
D.cW4=w([A.mX,A.bx],x.O)
D.bYV=new B.a8(A.b2,A.b6,A.x,D.cW4,null,null)
D.dcE=w([A.aF,A.dN],x.O)
D.bZ1=new B.a8(A.a3,A.a8,A.x,D.dcE,null,null)
D.afh=new B.v(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.awJ=w([D.afh,D.jg,D.KV],x.O)
D.bZs=new B.a8(A.ay,A.aC,A.x,D.awJ,null,null)
D.cAW=w([A.dx,A.dH],x.O)
D.bZD=new B.a8(A.b2,A.b6,A.x,D.cAW,null,null)
D.d9F=w([A.xg,Ax.EO],x.O)
D.c_r=new B.a8(A.a3,A.a8,A.x,D.d9F,null,null)
D.fxx=new B.y("Which Bio link?",null,A.cA,null,null,null,null,null,null,null,null,null)
D.c_C=new B.pO(null,D.fxx,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.yN=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a5d=new C.kT(2,"elegantNavy")
D.heb=w([A.X8,D.jg,A.bZ],x.O)
D.jP=new C.xA(0,"classic")
D.a50=new C.jn("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a5d,4294967035,4279378237,4290283019,D.jP)
D.aG_=new C.kT(3,"elegantGold")
D.b8s=new B.v(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b9o=new B.v(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.adT=new B.v(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.hdE=w([D.b8s,D.b9o,D.adT],x.O)
D.a4Z=new C.jn("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aG_,4294966515,4281016592,4289102906,D.jP)
D.dFQ=new C.kT(22,"goldRibbon")
D.hdA=w([A.X8,D.jg,A.i2],x.O)
D.a4S=new C.jn("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dFQ,4294967035,4279378237,4291404327,D.jP)
D.dFR=new C.kT(23,"goldBaroque")
D.aev=new B.v(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.hdG=w([D.aev,A.ax,A.ji],x.O)
D.a4T=new C.jn("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dFR,4294964964,4283053072,4292128567,D.jP)
D.dFT=new C.kT(4,"elegantEmerald")
D.baw=new B.v(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.bbq=new B.v(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.hdM=w([D.baw,D.bbq,A.i2],x.O)
D.a4U=new C.jn("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dFT,4294376440,4279122734,4291404327,D.jP)
D.dFU=new C.kT(5,"elegantBurgundy")
D.bff=new B.v(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.hdT=w([D.bff,A.ad7,A.i2],x.O)
D.a4X=new C.jn("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dFU,4294965238,4283043359,4291404327,D.jP)
D.dFN=new C.kT(19,"goldFiligree")
D.LC=new B.v(1,1,0.984313725490196,0.9529411764705882,A.t)
D.hdH=w([D.LC,A.ax,A.ji],x.O)
D.a4V=new C.jn("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dFN,4294966259,4279378237,4292128567,D.jP)
D.dFO=new C.kT(20,"goldLaurel")
D.blO=new B.v(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.hdU=w([A.KO,A.i2,D.blO],x.O)
D.a4W=new C.jn("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dFO,4294966776,4282000405,4291404327,D.jP)
D.dFP=new C.kT(21,"goldCrest")
D.ad0=new B.v(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.blW=new B.v(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.hdJ=w([D.ad0,A.ax,D.blW],x.O)
D.a5_=new C.jn("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dFP,4294965484,4283053072,4292128567,D.jP)
D.dFS=new C.kT(24,"goldStar")
D.bn8=new B.v(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.hdN=w([D.bn8,A.ax,D.jg],x.O)
D.a4Y=new C.jn("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dFS,4294966518,4279378237,4292128567,D.jP)
D.GR=w([D.a50,D.a4Z,D.a4S,D.a4T,D.a4U,D.a4X,D.a4V,D.a4W,D.a5_,D.a4Y],x.h)
D.qi=new C.mx(0,"blank")
D.RX=new C.mx(1,"title")
D.mF=new C.mx(2,"titleContent")
D.e_q=new C.mx(3,"twoColumn")
D.CR=new C.mx(4,"section")
D.e_r=new C.mx(5,"comparison")
D.I1=new C.mx(6,"flashcard")
D.I2=new C.mx(7,"quiz")
D.I3=new C.mx(8,"worksheet")
D.apc=w([D.qi,D.RX,D.mF,D.e_q,D.CR,D.e_r,D.I1,D.I2,D.I3],B.ax("O<mx>"))
D.axN=w([An.Ww,A.dH],x.O)
D.kB=w([A.bZ,A.bL,A.hI,A.hH,D.AP],x.O)
D.dBN=new C.j0("fireworks","Royal Fireworks","Thank you for celebrating with us",D.axN,D.kB)
D.bm6=new B.v(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.bfd=new B.v(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cWh=w([D.bm6,D.bfd],x.O)
D.dBE=new C.j0("confetti","Golden Confetti","Together we rise",D.cWh,D.kB)
D.cTq=w([A.nE,A.W9],x.O)
D.dBF=new C.j0("crown","Crown of Glory","Built for our community",D.cTq,D.kB)
D.bbO=new B.v(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.beU=new B.v(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.d_c=w([D.bbO,D.beU],x.O)
D.ue=w([A.bK,A.aO,A.c,A.aL,A.ak],x.O)
D.dBz=new C.j0("aurora","Aurora Gala","A brighter future, together",D.d_c,D.ue)
D.bgj=new B.v(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.d9L=w([G.acE,D.bgj],x.O)
D.dBQ=new C.j0("champagne","Champagne Toast","Cheers to every member",D.d9L,D.kB)
D.dBR=new C.j0("diamonds","Diamond Rain","Every member is a jewel",X.ayr,D.ue)
D.b9g=new B.v(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.beo=new B.v(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.df6=w([D.b9g,D.beo],x.O)
D.dBu=new C.j0("starburst","Golden Starburst","Thank you!",D.df6,D.kB)
D.c_M=w([A.fa,A.xs],x.O)
D.acN=new B.v(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.PR=w([A.oH,A.i0,A.vo,A.nF,D.acN],x.O)
D.dBY=new C.j0("balloons","Luxury Balloons","Let's celebrate",D.c_M,D.PR)
D.cSJ=w([A.Wk,A.w],x.O)
D.dBM=new C.j0("galaxy","Galaxy Spiral","The sky is not the limit",D.cSJ,D.ue)
D.bk9=new B.v(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.d6j=w([A.ku,D.bk9],x.O)
D.dBH=new C.j0("redcarpet","Red Carpet","Tonight we shine",D.d6j,D.kB)
D.bhX=new B.v(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.bg6=new B.v(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.daH=w([D.bhX,D.bg6],x.O)
D.dBw=new C.j0("coins","Gold Coin Rain","Every contribution counts",D.daH,D.kB)
D.dhL=w([A.dx,A.hG],x.O)
D.dBC=new C.j0("lanterns","Sky Lanterns","Lighting the way together",D.dhL,D.kB)
D.bcQ=new B.v(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cQI=w([A.xu,D.bcQ],x.O)
D.dBy=new C.j0("hearts","Floating Hearts","Made with love",D.cQI,D.PR)
D.b9O=new B.v(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.baC=new B.v(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.djf=w([D.b9O,D.baC],x.O)
D.dBX=new C.j0("petals","Rose Petals","Thank you, from our hearts",D.djf,D.PR)
D.bl6=new B.v(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.dfq=w([A.lh,D.bl6],x.O)
D.dBt=new C.j0("butterflies","Golden Butterflies","New beginnings",D.dfq,D.kB)
D.bhe=new B.v(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cRG=w([D.bhe,A.w],x.O)
D.dBP=new C.j0("neon","Neon Night","Let's go!",D.cRG,D.ue)
D.be3=new B.v(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.dcP=w([A.Lc,D.be3],x.O)
D.dBS=new C.j0("disco","Disco Ball","Party time",D.dcP,D.ue)
D.bhM=new B.v(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.dcm=w([A.hv,D.bhM],x.O)
D.dBx=new C.j0("sunrise","Golden Sunrise","A new day for our community",D.dcm,D.kB)
D.dbY=w([A.qR,A.dH],x.O)
D.dBT=new C.j0("pearls","Ocean Pearls","Deep roots, bright future",D.dbY,D.ue)
D.bbT=new B.v(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.dcb=w([D.bbT,A.dH],x.O)
D.dBW=new C.j0("snow","Winter Gala","Warm wishes to all",D.dcb,D.ue)
D.b8B=new B.v(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b9z=new B.v(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.di9=w([D.b8B,D.b9z],x.O)
D.dBL=new C.j0("laurel","Laurel Victory","We did it together",D.di9,D.kB)
D.b8r=new B.v(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.beQ=new B.v(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cPL=w([D.b8r,D.beQ],x.O)
D.dBV=new C.j0("ribbons","Silk Ribbons","Elegance in every step",D.cPL,D.kB)
D.bfQ=new B.v(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.cAT=w([G.AO,D.bfQ],x.O)
D.dBI=new C.j0("kente","Kente Pride","Proud of our roots",D.cAT,D.kB)
D.biv=new B.v(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.blq=new B.v(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.d0V=w([D.biv,D.blq],x.O)
D.dBD=new C.j0("trophy","Trophy Shine","Winners together",D.d0V,D.kB)
D.dci=w([Ao.L0,A.w],x.O)
D.dBv=new C.j0("shooting","Shooting Stars","Make a wish",D.dci,D.ue)
D.b8I=new B.v(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.ag3=new B.v(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.diq=w([D.b8I,D.ag3],x.O)
D.dBJ=new C.j0("bokeh","Golden Bokeh","Shine bright",D.diq,D.kB)
D.b95=new B.v(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.d78=w([D.b95,A.w],x.O)
D.dBB=new C.j0("orbits","Golden Orbits","Always moving forward",D.d78,D.kB)
D.bl7=new B.v(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.d3H=w([A.adP,D.bl7],x.O)
D.dBG=new C.j0("flowers","Blooming Garden","Growing together",D.d3H,D.PR)
D.b8S=new B.v(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b9t=new B.v(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.dhe=w([D.b8S,D.b9t],x.O)
D.dBA=new C.j0("music","Music Party","Celebrate with us",D.dhe,D.ue)
D.bal=new B.v(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.blR=new B.v(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cQV=w([D.bal,D.blR],x.O)
D.dBU=new C.j0("mandala","Royal Mandala","Harmony and unity",D.cQV,D.kB)
D.d3M=w([G.AO,D.ag3],x.O)
D.dBO=new C.j0("sparklers","Golden Sparklers","Light up the night",D.d3M,D.kB)
D.dBK=new C.j0("city","City Lights","The whole city celebrates",D.axN,D.kB)
D.H_=w([D.dBN,D.dBE,D.dBF,D.dBz,D.dBQ,D.dBR,D.dBu,D.dBY,D.dBM,D.dBH,D.dBw,D.dBC,D.dBy,D.dBX,D.dBt,D.dBP,D.dBS,D.dBx,D.dBT,D.dBW,D.dBL,D.dBV,D.dBI,D.dBD,D.dBv,D.dBJ,D.dBB,D.dBG,D.dBA,D.dBU,D.dBO,D.dBK],B.ax("O<j0>"))
D.eoT=new B.z("","No ring")
D.eEu=new B.z("platinum","Platinum")
D.eAJ=new B.z("glow","Glow")
D.esr=new B.z("double","Double line")
D.erm=new B.z("framed","Gallery frame")
D.eoq=new B.z("rosegold","Rose gold")
D.eBv=new B.z("jewels","Jeweled")
D.eyi=new B.z("aurora","Aurora")
D.Cd=w([D.eoT,A.a6s,D.eEu,D.eAJ,K.aMx,D.esr,A.a6v,D.erm,D.eoq,D.eBv,D.eyi],x.L)
D.ckh=w([D.a4V,D.a4W,D.a5_,D.a4S,D.a4T,D.a4Y],x.h)
D.bPm=new B.ae(G.akl,16,null,null,null,null)
D.b3H=new B.vv(A.bh,D.bPm,null,x.U)
D.bEf=new B.a1(58027,"MaterialIcons",!1)
D.bJ_=new B.ae(D.bEf,16,null,null,null,null)
D.b3F=new B.vv(A.L,D.bJ_,null,x.U)
D.bEg=new B.a1(58030,"MaterialIcons",!1)
D.bN3=new B.ae(D.bEg,16,null,null,null,null)
D.b3I=new B.vv(A.dP,D.bN3,null,x.U)
D.cqx=w([D.b3H,D.b3F,D.b3I],B.ax("O<vv<q3>>"))
D.cyc=w([A.AS,A.he],x.O)
D.cyd=w([A.bn,A.bc,A.er],x.O)
D.PG=w([A.bL,A.hH,A.hI,A.ax,A.nF],x.O)
D.cAZ=w([A.bZ,D.jg,D.KV],x.O)
D.cBw=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.eme=new B.z(4278913286,4280030216)
D.emw=new B.z(4279373061,4278518787)
D.emD=new B.z(4279898630,4278847235)
D.d0i=w([D.eme,D.emw,D.emD],x.n)
D.cWX=w(["\u265b","\u269c","\u2726"],x.s)
D.dFM=new C.xC("Royal Onyx & Gold",D.d0i,4292128567,4294370209,4294965479,3874020544,D.cWX)
D.em1=new B.z(4278326799,4278598442)
D.em3=new B.z(4278395929,4278258953)
D.ema=new B.z(4278599728,4278327826)
D.dhC=w([D.em1,D.em3,D.ema],x.n)
D.cRy=w(["\u269c","\u2756","\u2727"],x.s)
D.dFJ=new C.xC("Imperial Emerald",D.dhC,4293050997,4294699968,4294180856,3872254170,D.cRy)
D.em4=new B.z(4278455076,4278918747)
D.em9=new B.z(4278587439,4278322714)
D.emn=new B.z(4279051376,4278455076)
D.dfL=w([D.em4,D.em9,D.emn],x.n)
D.d7O=w(["\u2654","\u2726","\u2748"],x.s)
D.dFD=new C.xC("Sapphire Crown",D.dfL,4291417834,4294967295,4294310143,3871986666,D.d7O)
D.emB=new B.z(4279894534,4283041554)
D.emN=new B.z(4281008906,4279042307)
D.emV=new B.z(4284221976,4279894534)
D.dlw=w([D.emB,D.emN,D.emV],x.n)
D.cSS=w(["\u265b","\u2766","\u2726"],x.s)
D.dFF=new C.xC("Ruby Throne",D.dlw,4293378685,4294963145,4294964466,3874213833,D.cSS)
D.emv=new B.z(4279371039,4281995100)
D.emF=new B.z(4280092723,4278714896)
D.emS=new B.z(4283045242,4279371039)
D.dhY=w([D.emv,D.emF,D.emS],x.n)
D.dg7=w(["\u2655","\u2756","\u2727"],x.s)
D.dFK=new C.xC("Amethyst Palace",D.dhY,4293314984,4294963421,4294702591,3873229802,D.dg7)
D.em6=new B.z(4278519045,4280032287)
D.emo=new B.z(4279111184,4278321666)
D.emK=new B.z(4280492839,4278716426)
D.deA=w([D.em6,D.emo,D.emK],x.n)
D.d66=w(["\u2726","\u25c6","\u2742"],x.s)
D.dFH=new C.xC("Obsidian & Platinum",D.deA,4293256418,4294967295,4294638330,3872378836,D.d66)
D.emC=new B.z(4279896588,4282194463)
D.emL=new B.z(4280553487,4279043334)
D.emT=new B.z(4283048488,4279896588)
D.d5A=w([D.emC,D.emL,D.emT],x.n)
D.djI=w(["\u2766","\u273f","\u2727"],x.s)
D.dFE=new C.xC("Rose Gold Velvet",D.d5A,4293440672,4294960345,4294964979,3874214602,D.djI)
D.em7=new B.z(4278520340,4279180595)
D.emc=new B.z(4278718495,4278322443)
D.emz=new B.z(4279510591,4278520340)
D.cHN=w([D.em7,D.emc,D.emz],x.n)
D.d6N=w(["\u269c","\u2736","\u2756"],x.s)
D.dFI=new C.xC("Midnight Brass",D.cHN,4291405148,4293975208,4294439914,3872837564,D.d6N)
D.en7=new B.z(4294703086,4293780428)
D.en3=new B.z(4294307549,4293187253)
D.en8=new B.z(4294966517,4293977807)
D.cUY=w([D.en7,D.en3,D.en8],x.n)
D.d7c=w(["\u269c","\u265b","\u2726"],x.s)
D.dFL=new C.xC("Ivory Marble & Gold",D.cUY,4289760572,4286209048,4280951062,3863625518,D.d7c)
D.emi=new B.z(4278978566,4280555024)
D.emy=new B.z(4279504137,4278518530)
D.emP=new B.z(4281211923,4278978566)
D.cSI=w([D.emi,D.emy,D.emP],x.n)
D.dgS=w(["\u2742","\u2726","\u265c"],x.s)
D.dFG=new C.xC("Onyx & Copper",D.cSI,4291856987,4294365880,4294964718,3873885630,D.dgS)
D.cBE=w([D.dFM,D.dFJ,D.dFD,D.dFF,D.dFK,D.dFH,D.dFE,D.dFI,D.dFL,D.dFG],B.ax("O<xC>"))
D.cE_=w([A.ax,D.AP,A.hH],x.O)
D.euC=new B.z("Original",null)
D.euK=new B.z("Wide 16:9",1.7777777777777777)
D.ex_=new B.z("Landscape 3:2",1.5)
D.eu3=new B.z("Photo 4:3",1.3333333333333333)
D.evO=new B.z("Square",1)
D.eI6=new B.z("Portrait 3:4",0.75)
D.avc=w([D.euC,D.euK,D.ex_,D.eu3,D.evO,D.eI6],B.ax("O<+(m,K?)>"))
D.avd=w([A.hH,A.c5,A.ba,A.by],x.O)
D.exa=new B.z("","Original")
D.ez_=new B.z("circle","Circle")
D.eFe=new B.z("rounded","Rounded")
D.eG6=new B.z("triangle","Triangle")
D.eAZ=new B.z("hexagon","Hexagon")
D.ezp=new B.z("diamond","Diamond")
D.eyh=new B.z("arch","Arch")
D.Ci=w([D.exa,D.ez_,D.eFe,D.eG6,D.eAZ,D.ezp,D.eyh],x.L)
D.dAV=new C.le("classic_blue","Classic Blue","Normal",A.bi,A.c,A.kv,A.d5,A.aJ)
D.dBa=new C.le("campus_green","Campus Green","Normal",A.aZ,A.mV,A.tk,A.fV,A.e2)
D.dB1=new C.le("warm_sand","Warm Sand","Normal",A.dS,A.hI,A.bL,A.ih,A.nL)
D.dB8=new C.le("slate_minimal","Slate Minimal","Normal",A.bq,A.aO,A.aL,A.M,A.aJ)
D.dAU=new C.le("coral_fresh","Coral Fresh","Normal",A.c9,A.ie,A.px,A.k2,A.td)
D.dB9=new C.le("lavender_calm","Lavender Calm","Normal",A.b5,A.pA,A.xn,A.oF,A.je)
D.dAW=new C.le("ocean_breeze","Ocean Breeze","Normal",A.fb,A.qW,A.t9,A.tf,A.nM)
D.afn=new B.v(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dB6=new C.le("berry_pop","Berry Pop","Normal",A.f0,D.afn,A.kp,G.XF,A.F7)
D.dAX=new C.le("midnight_pro","Midnight Pro","Professional",A.aF,A.M,A.dx,A.kp,A.cr)
D.dB5=new C.le("executive_navy","Executive Navy","Professional",A.d0,A.aeJ,A.d5,A.kS,A.bK)
D.dB3=new C.le("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bl,A.M,A.aO,A.cr)
D.dAY=new C.le("corporate_steel","Corporate Steel","Professional",A.nP,A.M,A.mn,A.fe,A.bK)
D.dB0=new C.le("gold_luxe","Gold Luxe","Luxury",A.mT,A.dG,A.oG,A.lO,A.bL)
D.bhS=new B.v(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dB4=new C.le("rose_gold_elite","Rose Gold Elite","Luxury",A.he,D.bhS,A.Xt,A.i0,A.nF)
D.dB7=new C.le("platinum_night","Platinum Night","Luxury",A.cr,A.dH,A.bl,A.aO,A.aL)
D.dBb=new C.le("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.pG,A.f2,A.pN,A.jz)
D.dAT=new C.le("royal_purple","Royal Purple","Luxury",A.mU,A.WC,A.je,A.kp,A.KN)
D.dB2=new C.le("neon_pitch","Neon Pitch","Bold",A.ba,A.dH,A.M,A.b_,A.aL)
D.dB_=new C.le("crimson_impact","Crimson Impact","Bold",A.bx,A.ku,A.es,A.tw,A.f1)
D.dAZ=new C.le("sunset_gallery","Sunset Gallery","Bold",A.fz,A.td,A.k2,A.px,A.mm)
D.H8=w([D.dAV,D.dBa,D.dB1,D.dB8,D.dAU,D.dB9,D.dAW,D.dB6,D.dAX,D.dB5,D.dB3,D.dAY,D.dB0,D.dB4,D.dB7,D.dBb,D.dAT,D.dB2,D.dB_,D.dAZ],B.ax("O<le>"))
D.cPu=w([A.bZ,D.jg],x.O)
D.d5R=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.ey3=new B.z("Faces & people",D.d5R)
D.cE3=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.ekV=new B.z("Ideas & work",D.cE3)
D.cXs=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eB3=new B.z("Nature",D.cXs)
D.d6_=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.euA=new B.z("Places & things",D.d6_)
D.d_R=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eym=new B.z("Symbols",D.d_R)
D.cPA=w([D.ey3,D.ekV,D.eB3,D.euA,D.eym],B.ax("O<+(m,ai<m>)>"))
D.b8X=new B.v(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cPX=w([A.bZ,D.adT,D.b8X],x.O)
D.b32=new B.ac(0,A.G,A.KK,A.aGN,40)
D.b2J=new B.ac(0,A.G,A.nJ,A.em,8)
D.cQ9=w([D.b32,D.b2J],x.V)
D.cQD=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.avB=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a2y=w([A.hH,A.er,A.bx,A.au,A.c9],x.O)
D.cRs=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.ae7=new B.v(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cRD=w([A.Xh,D.ae7,A.Xh],x.O)
D.cRJ=w([A.i2,D.jg,D.KV],x.O)
D.eun=new B.z(A.bh,D.a0f)
D.evJ=new B.z(A.L,D.a0e)
D.epD=new B.z(A.dP,D.a0g)
D.cSD=w([D.eun,D.evJ,D.epD],B.ax("O<+(q3,a1)>"))
D.cP=new C.IJ(0,"text")
D.lz=new C.IJ(1,"image")
D.f5=new C.IJ(2,"shape")
D.RW=new C.IJ(3,"pdf")
D.l6=new C.IJ(4,"signature")
D.a5k=new C.IJ(5,"bio")
D.cTv=w([D.cP,D.lz,D.f5,D.RW,D.l6,D.a5k],B.ax("O<IJ>"))
D.cTw=w([A.bo,A.cE],B.ax("O<HE>"))
D.cU6=w(["School","Documents","Sign & present"],x.s)
D.b37=new B.ac(0,A.G,A.afU,A.uy,28)
D.cUr=w([D.b37],x.V)
D.cUJ=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.PZ=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aw_=w([A.hH,A.F6,A.aL,A.c,A.oH,A.ax],x.O)
D.eHv=new B.z(0.1,0.08)
D.eB1=new B.z(0.3,0.05)
D.ep6=new B.z(0.55,0.1)
D.etk=new B.z(0.8,0.06)
D.ews=new B.z(0.92,0.16)
D.evY=new B.z(0.2,0.2)
D.etP=new B.z(0.7,0.22)
D.ezL=new B.z(0.05,0.4)
D.ewS=new B.z(0.95,0.45)
D.epS=new B.z(0.12,0.7)
D.es5=new B.z(0.88,0.75)
D.esd=new B.z(0.4,0.9)
D.eno=new B.z(0.65,0.93)
D.esY=new B.z(0.25,0.97)
D.euk=new B.z(0.85,0.9)
D.eqH=new B.z(0.5,0.04)
D.cWc=w([D.eHv,D.eB1,D.ep6,D.etk,D.ews,D.evY,D.etP,D.ezL,D.ewS,D.epS,D.es5,D.esd,D.eno,D.esY,D.euk,D.eqH],x.G)
D.cWj=w([A.c,A.he,A.aR,A.aV],x.O)
D.e12=new C.jF("office_blue","Office Blue",A.bi,A.d5,A.aJ,A.c,A.kv)
D.e1d=new C.jF("campus_green","Campus Green",A.aZ,A.fV,A.e2,A.mV,A.tk)
D.e13=new C.jF("sunset","Sunset",A.fz,A.k2,A.nL,A.ie,A.px)
D.e14=new C.jF("midnight","Midnight",A.aF,A.kp,A.cr,A.M,A.dx)
D.e1f=new C.jF("classic","Classic",A.d8,A.dG,A.lP,A.hI,A.fT)
D.e1c=new C.jF("rose_gold","Rose Gold",A.he,A.xv,A.xu,A.vo,A.AS)
D.e0Y=new C.jF("ocean_teal","Ocean Teal",A.fb,A.tf,A.nM,A.qW,A.t9)
D.e0X=new C.jF("slate_pro","Slate Pro",A.bq,A.M,A.aJ,A.aO,A.aL)
D.e0W=new C.jF("neon_night","Neon Night",A.ba,A.b_,A.aL,A.dH,A.M)
D.e17=new C.jF("lavender","Lavender",A.b5,A.oF,A.je,A.pA,A.xn)
D.e19=new C.jF("coral","Coral",A.c9,A.k2,A.td,A.ie,A.mm)
D.e0Z=new C.jF("forest","Forest",A.hg,A.dV,A.co,A.lQ,A.ek)
D.e1_=new C.jF("berry","Berry",A.f0,G.XF,A.F7,D.afn,A.kp)
D.e16=new C.jF("sand","Sand",A.dS,A.ih,A.nL,A.hI,A.bL)
D.e1b=new C.jF("ice","Ice",A.nP,A.Ld,A.aJ,A.mR,A.fe)
D.e11=new C.jF("charcoal","Charcoal",A.ak,A.aO,A.cr,A.bl,A.M)
D.e0V=new C.jF("mint","Mint",A.aV,A.fx,A.fV,A.lQ,A.pN)
D.e1a=new C.jF("crimson","Crimson",A.bx,A.mX,A.ku,A.F4,A.tw)
D.bbp=new B.v(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.e15=new C.jF("gold","Gold",A.mT,A.xg,A.oG,D.bbp,A.lO)
D.e18=new C.jF("aqua","Aqua",A.bP,A.EW,A.oD,A.pC,A.oI)
D.e10=new C.jF("plum","Plum",A.mU,A.xs,A.F7,A.EK,A.qU)
D.e1e=new C.jF("steel","Steel",A.d0,A.d5,A.bl,A.kv,A.kS)
D.a2O=w([D.e12,D.e1d,D.e13,D.e14,D.e1f,D.e1c,D.e0Y,D.e0X,D.e0W,D.e17,D.e19,D.e0Z,D.e1_,D.e16,D.e1b,D.e11,D.e0V,D.e1a,D.e15,D.e18,D.e10,D.e1e],B.ax("O<jF>"))
D.cWE=w([A.bZ,A.ji],x.O)
D.RY=new C.hF(10,"rotate3d")
D.I5=new C.hF(8,"flip")
D.aGi=new C.hF(19,"spiral")
D.qj=new C.hF(16,"bounce")
D.aGl=new C.hF(9,"flipVertical")
D.cWF=w([D.RY,D.I5,D.aGi,D.qj,D.aGl],x.i)
D.ea=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cX_=w([0.62,1],x.x)
D.cXB=w([0,0.32,0.68,1],x.x)
D.mG=new C.hF(6,"zoom")
D.us=new C.hF(4,"slideUp")
D.ur=new C.hF(2,"slideLeft")
D.cXK=w([D.mG,D.I5,D.us,D.RY,D.ur],x.i)
D.cYe=w([A.c5,A.he,A.i0,A.hH,A.c],x.O)
D.b2Y=new B.ac(0,A.G,D.aek,A.uy,30)
D.cYY=w([D.b2Y],x.V)
D.eaU=new B.x(0,-2.5)
D.eaK=new B.x(-2.5,0)
D.e9s=new B.x(2.5,0)
D.cZ0=w([A.Sd,A.a5G,A.aHi,A.a5F,D.eaU,K.aHe,D.eaK,D.e9s],x.dN)
D.Hf=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cZs=w([23,114,69,56,80,144],x.t)
D.cZU=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.d_d=w([0,0.5,1],x.x)
D.d_m=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.d1_=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.d13=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bf=new C.uK(0,"rectangle")
D.eN=new C.uK(1,"circle")
D.l7=new C.uK(6,"hexagon")
D.d1h=w([D.bf,D.eN,D.l7],x.m)
D.oa=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.afu=new B.v(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.d1P=w([D.afu,A.dV],x.O)
D.epm=new B.z("","Classic")
D.enD=new B.z("caps","Bold caps")
D.ezO=new B.z("elegant","Elegant")
D.eFy=new B.z("shadow","Shadow")
D.etI=new B.z("neon","Neon glow")
D.eEb=new B.z("outline","Outline")
D.eDn=new B.z("marker","Highlighter")
D.eFJ=new B.z("stamp","Stamp")
D.eF9=new B.z("retro","Retro")
D.esD=new B.z("threed","3D")
D.eAk=new B.z("fire","Fire")
D.eBd=new B.z("ice","Ice")
D.eyZ=new B.z("chalk","Chalk")
D.ez3=new B.z("comic","Comic")
D.eFL=new B.z("sunset","Sunset")
D.eGT=new B.z("softglow","Soft glow")
D.eCc=new B.z("lowercase","Lowercase")
D.ezw=new B.z("double","Echo")
D.eH1=new B.z("whisper","Whisper")
D.awR=w([D.epm,D.enD,D.ezO,D.eFy,D.etI,D.eEb,D.eDn,D.eFJ,D.eF9,D.esD,K.aMs,D.eAk,D.eBd,D.eyZ,D.ez3,A.a6s,D.eFL,D.eGT,D.eCc,D.ezw,D.eH1],x.L)
D.d36=w([3,5,7,10,12,15],x.t)
D.d3f=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer and Cipher Lab were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in. Latest billboard update: no boards are joined any more. Billboard layouts are Two far apart, Three in a row, Three scattered far, Skyline, Two lines of three and Billboard park, with boards of different heights and sizes, the taller ones standing behind and some far from the others. The chooser shows two billboards in every row. Every kind of billboard has its own camera move, and each layout has its own tour where the drone flies from board to board. The rooftop board stands on a tall house with one big TV on each side of the door, and its board, TVs, logo and frame no longer vanish when the angle changes. Cipher Lab was removed from Core Protocol. In the city wiring job the person chooses what goes into an empty box from the tray (nothing is picked for them), and any outlet counts for an outlet and any switch for a switch as long as it is wired right, so the red frames in the house turn green when the job is really done. The zoom buttons answer at once with a big step and keep zooming while held, and pinching measures from the last step so the zoom is never thrown back.","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.d4w=w([A.c5,A.bL,A.c,A.eC,A.cY],x.O)
D.dsB=new C.tm(10,"cardWorld")
D.CJ=new C.Bu(3,"rounded")
D.dIL=new C.lh("world","NGMY World",D.dsB,D.CJ,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dsC=new C.tm(11,"cardSplit")
D.dIH=new C.lh("business","Business Wire",D.dsC,D.CJ,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dsD=new C.tm(12,"cardBreaking")
D.dIU=new C.lh("breaking","Breaking Red",D.dsD,D.CJ,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dsE=new C.tm(13,"cardFeature")
D.dIN=new C.lh("feature","Tech Feature",D.dsE,D.CJ,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aEP=new C.tm(6,"circle")
D.aEJ=new C.Bu(4,"circle")
D.dIR=new C.lh("parchment","Royal Circle",D.aEP,D.aEJ,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dIG=new C.lh("ocean","Blue Ocean",D.aEP,D.aEJ,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dsH=new C.tm(7,"rail")
D.aEI=new C.Bu(1,"double")
D.dII=new C.lh("forest","Green Leaf",D.dsH,D.aEI,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aEM=new C.tm(1,"sideBySide")
D.dIW=new C.lh("herald","NGMY Herald",D.aEM,D.CJ,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aEL=new C.tm(0,"classic")
D.a4x=new C.Bu(9,"shadow")
D.dIV=new C.lh("daily","The Daily",D.aEL,D.a4x,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dsF=new C.tm(2,"splash")
D.aEK=new C.Bu(6,"cutCorner")
D.dIF=new C.lh("tabloid","Big Tabloid",D.dsF,D.aEK,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aEQ=new C.tm(9,"minimal")
D.dIQ=new C.lh("modern","Modern Digest",D.aEQ,D.CJ,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aEN=new C.tm(3,"magazine")
D.aEH=new C.Bu(0,"plain")
D.dIM=new C.lh("midnight","Midnight Edition",D.aEN,D.aEH,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dsI=new C.tm(8,"banner")
D.dIO=new C.lh("metro","Metro Wire",D.dsI,D.aEK,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dsA=new C.Bu(8,"arch")
D.dIP=new C.lh("sunrise","Sunrise Post",D.aEN,D.dsA,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aEO=new C.tm(5,"scrapbook")
D.dsz=new C.Bu(5,"tape")
D.dIK=new C.lh("neon","Neon Beat",D.aEO,D.dsz,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dsG=new C.tm(4,"wrap")
D.dIX=new C.lh("gold","Golden Press",D.dsG,D.a4x,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dIY=new C.lh("minimal","Paper White",D.aEQ,D.a4x,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dIJ=new C.lh("gazette","Fresh Gazette",D.aEL,D.aEI,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dIT=new C.lh("times","Classic Times",D.aEM,D.aEH,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Rt=new C.Bu(2,"polaroid")
D.dIS=new C.lh("scrapbook","Memory Scrapbook",D.aEO,D.Rt,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a32=w([D.dIL,D.dIH,D.dIU,D.dIN,D.dIR,D.dIG,D.dII,D.dIW,D.dIV,D.dIF,D.dIQ,D.dIM,D.dIO,D.dIP,D.dIK,D.dIX,D.dIY,D.dIJ,D.dIT,D.dIS],B.ax("O<lh>"))
D.d4I=w([0.45,1],x.x)
D.Hh=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.d55=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.h94=new C.oB("Original",0,1,1,0,0,0)
D.h98=new C.oB("Black & white",0,1.1,0,0,0,0)
D.h8W=new C.oB("Noir",-0.05,1.55,0,0,0,0)
D.h9_=new C.oB("Sepia",0,1,0.25,0.9,0,0)
D.h8Z=new C.oB("Vivid",0,1.15,1.6,0,0,0)
D.h8S=new C.oB("Pop",0,1.3,1.9,0,0,0)
D.h8U=new C.oB("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.h95=new C.oB("Matte",0,0.9,0.85,0,0,0.55)
D.h90=new C.oB("Cool",0,1.05,1,-0.8,0,0)
D.h97=new C.oB("Warm",0.03,1.05,1.1,0.8,0,0)
D.h8T=new C.oB("Golden hour",0.04,1,1.25,1,0,0)
D.h8Y=new C.oB("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.h96=new C.oB("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.h8X=new C.oB("Dramatic",-0.05,1.5,1.2,0,0,0)
D.h92=new C.oB("Retro",0,0.9,0.7,0.4,0,0.35)
D.h91=new C.oB("Forest",0,1,1.2,-0.1,-0.45,0)
D.h93=new C.oB("Rose",0,1,1.1,0.3,0.4,0)
D.h8V=new C.oB("Ocean",0,1,1.2,-0.5,-0.2,0)
D.d56=w([D.h94,D.h98,D.h8W,D.h9_,D.h8Z,D.h8S,D.h8U,D.h95,D.h90,D.h97,D.h8T,D.h8Y,D.h96,D.h8X,D.h92,D.h91,D.h93,D.h8V],B.ax("O<oB>"))
D.b8n=new B.v(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.d58=w([D.afu,A.dV,D.b8n],x.O)
D.ekP=new B.z(0.12,0.3)
D.eBo=new B.z(0.26,0.75)
D.ezK=new B.z(0.8,0.22)
D.eFR=new B.z(0.9,0.7)
D.eCb=new B.z(0.5,0.15)
D.eEd=new B.z(0.65,0.85)
D.erd=new B.z(0.08,0.85)
D.d5l=w([D.ekP,D.eBo,D.ezK,D.eFR,D.eCb,D.eEd,D.erd],x.G)
D.ax2=w([A.ba,A.c5,A.by,A.bn],x.O)
D.d6a=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.d6m=w([A.c,A.fe,A.dr,A.vb],x.O)
D.bbE=new B.v(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.d7m=w([D.bbE,D.ae7],x.O)
D.d7n=w([A.vd,A.ax],x.O)
D.d7C=w([0,0.25,0.75,1],x.x)
D.d7E=w([A.xj,A.oH],x.O)
D.aFT=new C.kT(10,"kenteSunset")
D.hdC=w([D.aev,A.jY,A.ax],x.O)
D.dE5=new C.jn("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aFT,4294964964,4282000405,4279983648,D.jP)
D.aFU=new C.kT(11,"indigoMudcloth")
D.b9k=new B.v(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.hdQ=w([D.b9k,A.ae3,A.i2],x.O)
D.dEd=new C.jn("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aFU,4294439140,4279903102,4279903102,D.jP)
D.aFV=new C.kT(12,"adinkraRoyal")
D.bmy=new B.v(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.hdR=w([D.ad0,D.bmy,A.ax],x.O)
D.dEf=new C.jn("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aFV,4294965484,4285218591,4287322667,D.jP)
D.aFW=new C.kT(13,"nileLotus")
D.biN=new B.v(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.bfu=new B.v(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.hdW=w([D.biN,D.bfu,A.i2],x.O)
D.dEe=new C.jn("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aFW,4294244340,4279196764,4279196764,D.jP)
D.aFX=new C.kT(14,"shweshweIvory")
D.bdC=new B.v(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.bco=new B.v(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b9N=new B.v(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.hdD=w([D.bdC,D.bco,D.b9N],x.O)
D.dEa=new C.jn("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aFX,4294505710,4279970378,4291058750,D.jP)
D.rv=new C.kT(15,"certIvoryNavy")
D.hdB=w([D.LC,D.jg,A.i2],x.O)
D.aFo=new C.xA(1,"ringsNdoa")
D.dE7=new C.jn("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.rv,4294966259,4279378237,4291404327,D.aFo)
D.a52=new C.xA(2,"coupleCards")
D.dE2=new C.jn("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.rv,4294966259,4279378237,4291404327,D.a52)
D.CM=new C.kT(18,"certIvoryNavyBar")
D.ad_=new B.v(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.hdP=w([D.ad_,D.jg,A.i2],x.O)
D.aFp=new C.xA(3,"kuhoweshaForm")
D.dE0=new C.jn("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.CM,4294966519,4279378237,4291404327,D.aFp)
D.aei=new B.v(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.he8=w([D.LC,D.aei,A.i2],x.O)
D.a53=new C.xA(4,"mahariPande")
D.dE3=new C.jn("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.rv,4294966259,4279904068,4291404327,D.a53)
D.aFY=new C.kT(16,"certIvoryGreen")
D.bd_=new B.v(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.hdF=w([A.KO,D.bd_,A.i2],x.O)
D.aFq=new C.xA(5,"familiaMti")
D.dE9=new C.jn("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aFY,4294966776,4280241466,4291404327,D.aFq)
D.a54=new C.xA(6,"ndoaSafi")
D.dE1=new C.jn("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.CM,4294966519,4279378237,4291404327,D.a54)
D.bhd=new B.v(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.hdI=w([D.LC,A.i2,D.bhd],x.O)
D.a55=new C.xA(7,"peteWide")
D.dE6=new C.jn("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.rv,4294966259,4282001936,4291404327,D.a55)
D.dEg=new C.xA(8,"muhuriCrest")
D.dE_=new C.jn("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.rv,4294966259,4279378237,4291404327,D.dEg)
D.hdS=w([D.ad_,D.aei,A.i2],x.O)
D.dEh=new C.xA(9,"fomuWazi")
D.dEc=new C.jn("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.CM,4294966519,4279904068,4291404327,D.dEh)
D.aFZ=new C.kT(17,"certIvoryRose")
D.bdG=new B.v(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.hdV=w([D.bdG,D.af7,A.i2],x.O)
D.a51=new C.xA(10,"upendoOrnate")
D.dE8=new C.jn("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aFZ,4294965493,4286200650,4291404327,D.a51)
D.d83=w([D.dE5,D.dEd,D.dEf,D.dEe,D.dEa,D.dE7,D.dE2,D.dE0,D.dE3,D.dE9,D.dE1,D.dE6,D.dE_,D.dEc,D.dE8],x.h)
D.eb=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.I6=new C.w1(0,"emojis")
D.CT=new C.w1(1,"pictures")
D.I7=new C.w1(2,"icons3d")
D.a5m=new C.w1(3,"animations")
D.S_=new C.w1(4,"videoMotion")
D.CU=new C.w1(5,"luxe")
D.a39=w([D.I6,D.CT,D.I7,D.a5m,D.S_,D.CU],B.ax("O<w1>"))
D.eEN=new B.z(A.e0,"Looks")
D.etd=new B.z(A.C2,"Light")
D.eta=new B.z(A.nh,"Colour")
D.ere=new B.z(A.yg,"Effects")
D.alq=new B.a1(63112,"MaterialIcons",!1)
D.enT=new B.z(D.alq,"Crop")
D.d8x=w([D.eEN,D.etd,D.eta,D.ere,D.enT],x.f2)
D.d9a=w([],x.D)
D.he5=w([],x.L)
D.err=new B.z("Flashcard",D.I1)
D.evb=new B.z("Quiz",D.I2)
D.ex5=new B.z("Worksheet",D.I3)
D.euf=new B.z("Notes",D.mF)
D.evH=new B.z("Section",D.CR)
D.d9R=w([D.err,D.evb,D.ex5,D.euf,D.evH],B.ax("O<+(m,mx)>"))
D.dFV=new C.kT(6,"beadedPearl")
D.bg9=new B.v(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.he9=w([H.Xs,D.bg9,A.i2],x.O)
D.aFm=new C.jn("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dFV,4294966774,4286209070,4291404327,D.jP)
D.dFW=new C.kT(7,"artDeco")
D.bk3=new B.v(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.bmR=new B.v(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.he7=w([D.bk3,D.bmR,A.bZ],x.O)
D.aFn=new C.jn("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dFW,4294440434,4280228630,4290283019,D.jP)
D.dFX=new C.kT(8,"rosetteCorners")
D.bm1=new B.v(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.bbJ=new B.v(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.bg4=new B.v(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.hdL=w([D.bm1,D.bbJ,D.bg4],x.O)
D.aFl=new C.jn("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dFX,4294702831,4285218602,4291394365,D.jP)
D.dFY=new C.kT(9,"modernLedger")
D.hdK=w([A.c,D.jg,D.jg],x.O)
D.aFk=new C.jn("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dFY,4294967295,4279378237,4279378237,D.jP)
D.d9V=w([D.aFm,D.aFn,D.aFl,D.aFk],x.h)
D.da3=w([A.i0,A.oH],x.O)
D.cl=new C.hF(0,"none")
D.df=new C.hF(1,"fade")
D.I4=new C.hF(3,"slideRight")
D.aGk=new C.hF(5,"slideDown")
D.e_x=new C.hF(7,"zoomOut")
D.a5l=new C.hF(11,"cube")
D.e_s=new C.hF(12,"blur")
D.aGh=new C.hF(13,"dissolve")
D.e_t=new C.hF(14,"wipeLeft")
D.e_u=new C.hF(15,"wipeRight")
D.RZ=new C.hF(17,"push")
D.e_v=new C.hF(18,"flash")
D.aGj=new C.hF(20,"swing")
D.e_w=new C.hF(21,"curtain")
D.Qz=w([D.cl,D.df,D.ur,D.I4,D.us,D.aGk,D.mG,D.e_x,D.I5,D.aGl,D.RY,D.a5l,D.e_s,D.aGh,D.e_t,D.e_u,D.qj,D.RZ,D.e_v,D.aGi,D.aGj,D.e_w],x.i)
D.QA=w([D.a50,D.a4Z,D.a4S,D.a4T,D.a4U,D.a4X,D.a4V,D.a4W,D.a5_,D.a4Y,D.aFm,D.aFn,D.aFl,D.aFk],x.h)
D.daw=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.daA=w([A.xo,A.hH,A.bZ],x.O)
D.esx=new B.z(A.tW,"Design")
D.eGf=new B.z(D.alH,"Word sizes")
D.eBW=new B.z(A.BX,"Text")
D.bHA=new B.a1(983182,"MaterialIcons",!1)
D.eC_=new B.z(D.bHA,"Photo")
D.enr=new B.z(A.lt,"Logo")
D.eHt=new B.z(A.GD,"News")
D.daF=w([D.esx,D.eGf,D.eBW,D.eC_,D.enr,D.eHt],x.f2)
D.daG=w(["golddust","sparkle","sheen"],x.s)
D.e0U=new C.et("upload_pdf",L.NS,"Upload PDF")
D.e03=new C.et("sign_paper",A.GA,"Sign Paper")
D.bGS=new B.a1(63438,"MaterialIcons",!1)
D.e0Q=new C.et("hd_photo",D.bGS,"HD Photo")
D.e_W=new C.et("sharpen",E.a01,"Sharpen")
D.e05=new C.et("print",L.NS,"Download PDF")
D.e0x=new C.et("rotate",D.alq,"Rotate")
D.e0e=new C.et("text_box",A.BX,"Text Box")
D.e0g=new C.et("picture",A.u1,"Picture")
D.e0c=new C.et("title",A.yx,"Title")
D.e08=new C.et("subtitle",T.amg,"Subtitle")
D.e0G=new C.et("bullets",I.a0h,"Bullet List")
D.e09=new C.et("numbered",A.NJ,"Numbered")
D.e0J=new C.et("quote",A2.BN,"Quote")
D.e0l=new C.et("citation",A.o0,"Citation")
D.e0M=new C.et("date_stamp",Ag.a06,"Date Stamp")
D.e0z=new C.et("page_number",A.yw,"Page #")
D.e0D=new C.et("header_bar",A.C_,"Header")
D.e0f=new C.et("footer_bar",Ap.a0P,"Footer")
D.e04=new C.et("divider",A.u0,"Divider")
D.e00=new C.et("highlight",A.a0o,"Highlight")
D.e0F=new C.et("redact",A.u9,"Redact")
D.e0s=new C.et("callout",A.BH,"Callout")
D.e0O=new C.et("checkboxes",I.akF,"Checklist")
D.e0p=new C.et("table",A.a0M,"Table")
D.e0j=new C.et("memo",I.a0z,"Memo")
D.e0t=new C.et("letter",A.Gn,"Letter")
D.bGt=new B.a1(63259,"MaterialIcons",!0)
D.e_V=new C.et("agenda",D.bGt,"Agenda")
D.e06=new C.et("toc",Ay.alU,"Contents")
D.bGO=new B.a1(63406,"MaterialIcons",!1)
D.e0q=new C.et("sig_line",D.bGO,"Sign Line")
D.e_O=new C.et("initial_line",A.jp,"Initials")
D.e_R=new C.et("approved",A.lt,"APPROVED")
D.e0v=new C.et("draft",A.p_,"DRAFT")
D.e0B=new C.et("confidential",A.jI,"Confidential")
D.e0E=new C.et("sticky",A.O_,"Sticky Note")
D.e0N=new C.et("progress",A.alT,"Progress")
D.bI_=new B.a1(983507,"MaterialIcons",!1)
D.e01=new C.et("stars",D.bI_,"Star Rating")
D.e_M=new C.et("equation",A.alJ,"Equation")
D.e_X=new C.et("timeline",A.a0N,"Timeline")
D.e0k=new C.et("two_col",A.a0Q,"Two Columns")
D.e_Z=new C.et("compare",A1.a09,"Compare")
D.e_K=new C.et("duplicate_el",A.fM,"Duplicate")
D.e0S=new C.et("delete_el",A.ef,"Delete")
D.e0I=new C.et("bring_fwd",H.alD,"Bring Front")
D.e_P=new C.et("send_back",H.alC,"Send Back")
D.e0u=new C.et("align_left",D.a0f,"Align L")
D.e0A=new C.et("align_center",D.a0e,"Align C")
D.e0R=new C.et("align_right",D.a0g,"Align R")
D.e0d=new C.et("word_count",A_.a_L,"Word Count")
D.e0a=new C.et("link_text",A.hl,"Link")
D.e0y=new C.et("phone",A.iM,"Phone")
D.e0_=new C.et("email",A.BK,"Email")
D.e0T=new C.et("qr_placeholder",A.jr,"QR Placeholder")
D.e_U=new C.et("rectangle",A3.vN,"Rectangle")
D.e0o=new C.et("circle",A.r8,"Circle")
D.e_Q=new C.et("arrow",A.lo,"Arrow")
D.e0H=new C.et("line",A.u0,"Line")
D.e02=new C.et("triangle",A.a07,"Triangle")
D.bGB=new B.a1(63318,"MaterialIcons",!1)
D.e07=new C.et("grayscale",D.bGB,"Grayscale")
D.e0h=new C.et("brighten",I.akZ,"Brighten")
D.e0m=new C.et("flip_h",A.Gd,"Flip H")
D.bGJ=new B.a1(63348,"MaterialIcons",!1)
D.e0P=new C.et("flip_v",D.bGJ,"Flip V")
D.e0C=new C.et("cover_page",A.q1,"Cover Page")
D.e_N=new C.et("invoice",A.h9,"Invoice")
D.e_Y=new C.et("resume",A.mv,"Resume")
D.e0b=new C.et("minutes",A.oU,"Minutes")
D.e_S=new C.et("lab_report",A.NW,"Lab Report")
D.e_T=new C.et("rubric",A.tX,"Rubric")
D.e0n=new C.et("flashcard_tool",W.Gy,"Flashcard")
D.e0K=new C.et("quiz_tool",A.Gs,"Quiz Block")
D.e0r=new C.et("worksheet_tool",M.G4,"Worksheet")
D.e0w=new C.et("outline_share",A.NY,"Share Outline")
D.e0L=new C.et("export_json",D.akL,"Export JSON")
D.e_L=new C.et("new_slide",D.a_K,"New Slide")
D.e0i=new C.et("present",A.q6,"Present")
D.db9=w([D.e0U,D.e03,D.e0Q,D.e_W,D.e05,D.e0x,D.e0e,D.e0g,D.e0c,D.e08,D.e0G,D.e09,D.e0J,D.e0l,D.e0M,D.e0z,D.e0D,D.e0f,D.e04,D.e00,D.e0F,D.e0s,D.e0O,D.e0p,D.e0j,D.e0t,D.e_V,D.e06,D.e0q,D.e_O,D.e_R,D.e0v,D.e0B,D.e0E,D.e0N,D.e01,D.e_M,D.e_X,D.e0k,D.e_Z,D.e_K,D.e0S,D.e0I,D.e_P,D.e0u,D.e0A,D.e0R,D.e0d,D.e0a,D.e0y,D.e0_,D.e0T,D.e_U,D.e0o,D.e_Q,D.e0H,D.e02,D.e07,D.e0h,D.e0m,D.e0P,D.e0C,D.e_N,D.e_Y,D.e0b,D.e_S,D.e_T,D.e0n,D.e0K,D.e0r,D.e0w,D.e0L,D.e_L,D.e0i],B.ax("O<et>"))
D.dbj=w([A.cr,A.ak],x.O)
D.emZ=new B.z(4286331629,4292552567)
D.emM=new B.z(4280640491,4278630100)
D.en6=new B.z(4294538006,4292943176)
D.em8=new B.z(4278556265,4280640491)
D.d5v=w([D.emZ,D.emM,D.en6,D.em8],x.n)
D.cui=w([4294626325,4280472558,4294210230],x.t)
D.e_F=new C.nN("colorful","Colorful",A.nh,D.d5v,4294967295,3875536895,D.cui,D.mG)
D.emA=new B.z(4279522093,4279657780)
D.emQ=new B.z(4281750292,4283268111)
D.emb=new B.z(4278603323,4279203438)
D.emR=new B.z(4282343954,4279599165)
D.cFh=w([D.emA,D.emQ,D.emb,D.emR],x.n)
D.cu0=w([4288931381,4294829706,4287033260],x.t)
D.e_B=new C.nN("nature","Nature",A.GB,D.cFh,4294442727,3874290891,D.cu0,D.df)
D.emu=new B.z(4279369771,4283178389)
D.emr=new B.z(4279179050,4286456526)
D.emI=new B.z(4280163147,4290648157)
D.em0=new B.z(4278322711,4285343961)
D.cWS=w([D.emu,D.emr,D.emI,D.em0],x.n)
D.cue=w([4294210230,4280472558,4289170426],x.t)
D.e_z=new C.nN("vibe","Vibe",A.a0m,D.cWS,4294967295,3874869502,D.cue,D.ur)
D.en2=new B.z(4290007817,4292552567)
D.emX=new B.z(4286328082,4294286859)
D.en1=new B.z(4288485197,4294538006)
D.emW=new B.z(4285343961,4293675161)
D.c0d=w([D.en2,D.emX,D.en1,D.emW],x.n)
D.cuj=w([4294829706,4294967295,4284999929],x.t)
D.e_A=new C.nN("celebration","Celebration",A.lp,D.c0d,4294967295,4009752557,D.cuj,D.qj)
D.emp=new B.z(4279179050,4280171146)
D.emt=new B.z(4279310375,4280232247)
D.emh=new B.z(4278916151,4280172719)
D.emq=new B.z(4279179050,4281549141)
D.cPQ=w([D.emp,D.emt,D.emh,D.emq],x.n)
D.ctW=w([4281908728,4294626325,4287931320],x.t)
D.e_E=new C.nN("professional","Professional",A.BF,D.cPQ,4294967295,3872118241,D.ctW,D.RZ)
D.eml=new B.z(4278995566,4278413729)
D.emd=new B.z(4278727492,4279137424)
D.emJ=new B.z(4280171146,4278751666)
D.emm=new B.z(4278995566,4279590517)
D.cy5=w([D.eml,D.emd,D.emJ,D.emm],x.n)
D.ctZ=w([4286436348,4284410580,4294829706],x.t)
D.e_G=new C.nN("ocean","Ocean",I.a0S,D.cy5,4294967295,3873501950,D.ctZ,D.us)
D.emY=new B.z(4286328082,4294538006)
D.en_=new B.z(4286781507,4294677052)
D.emU=new B.z(4283178389,4294197086)
D.en0=new B.z(4288295954,4294688548)
D.cM4=w([D.emY,D.en_,D.emU,D.en0],x.n)
D.cuk=w([4294829706,4294967295,4294747557],x.t)
D.e_H=new C.nN("sunset","Sunset",A.O1,D.cM4,4294967295,4009749973,D.cuk,D.df)
D.ena=new B.z(4294967295,4294047225)
D.en5=new B.z(4294507260,4294967295)
D.en9=new B.z(4294967295,4293060848)
D.en4=new B.z(4294507260,4294047225)
D.d__=w([D.ena,D.en5,D.en9,D.en4],x.n)
D.ctU=w([4280640491,4279179050,4287931320],x.t)
D.e_D=new C.nN("minimal","Minimal",A3.vN,D.d__,4279179050,4282865001,D.ctU,D.df)
D.emk=new B.z(4278979081,4280886564)
D.emE=new B.z(4280031511,4278979081)
D.ems=new B.z(4279308561,4281148438)
D.emj=new B.z(4278979081,4280031511)
D.ddj=w([D.emk,D.emE,D.ems,D.emj],x.n)
D.cu7=w([4292128567,4294829706,4289241758],x.t)
D.e_I=new C.nN("elegant","Elegant",A.lZ,D.ddj,4294898631,3873957348,D.cu7,D.aGh)
D.emG=new B.z(4280159034,4282058596)
D.emg=new B.z(4278916151,4280163147)
D.emO=new B.z(4281208933,4278916151)
D.emx=new B.z(4279502891,4283178389)
D.dkj=w([D.emG,D.emg,D.emO,D.emx],x.n)
D.cug=w([4294296657,4292128567,4291081725],x.t)
D.e_C=new C.nN("royal","Royal Gold",A.j4,D.dkj,4294965222,3874084351,D.cug,D.mG)
D.em5=new B.z(4278464302,4280163147)
D.emf=new B.z(4278916151,4279455306)
D.emH=new B.z(4280163147,4283040846)
D.em2=new B.z(4278332450,4281413249)
D.d5b=w([D.em5,D.emf,D.emH,D.em2],x.n)
D.ctV=w([4281193663,4289170426,4294210230],x.t)
D.e_J=new C.nN("aurora","Aurora Glow",A.e0,D.d5b,4293983738,3869766608,D.ctV,D.df)
D.wa=w([D.e_F,D.e_B,D.e_z,D.e_A,D.e_E,D.e_G,D.e_H,D.e_D,D.e_I,D.e_C,D.e_J],B.ax("O<nN>"))
D.bgD=new B.v(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.dbT=w([A.qO,D.bgD,A.qO],x.O)
D.dc9=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.dcd=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eBO=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.es7=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.ewG=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.ejD=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.evk=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.etA=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.exT=new B.z("Surprise me","")
D.dcL=w([D.eBO,D.es7,D.ewG,D.ejD,D.evk,D.etA,D.exT],x.L)
D.b9P=new B.v(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.bkx=new B.v(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.ddx=w([A.c,D.b9P,D.bkx],x.O)
D.dfC=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aFR=new C.kT(0,"heritageGold")
D.bfi=new B.v(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.hea=w([D.bfi,V.aes,A.ax],x.O)
D.dEb=new C.jn("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aFR,4294570461,4284234270,4292128567,D.jP)
D.aFS=new C.kT(1,"heritageCrimson")
D.b8j=new B.v(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.bdD=new B.v(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.bkn=new B.v(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.hdO=w([D.b8j,D.bdD,D.bkn],x.O)
D.dE4=new C.jn("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aFS,4294635750,4285213214,4292912216,D.jP)
D.dfG=w([D.a50,D.a4Z,D.dEb,D.dE4,D.a4U,D.a4X],x.h)
D.dJZ=new C.rx(1,"circuit")
D.dKr=new C.m7("neural","Neural Link","Robotic",D.dJZ,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dJY=new C.rx(0,"grid")
D.dKo=new C.m7("signal","Signal Grid","Robotic",D.dJY,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dK3=new C.rx(2,"hexes")
D.dK9=new C.m7("core","Core Protocol","Robotic",D.dK3,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aGe=new C.rx(11,"diagonal")
D.dKk=new C.m7("steel","Steel Tech","Robotic",D.aGe,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aGf=new C.rx(3,"rings")
D.dK8=new C.m7("vault","Vault Gold","Robotic",D.aGf,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dK1=new C.rx(13,"leaves")
D.dKb=new C.m7("forest","Forest Morning","Nature",D.dK1,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aGg=new C.rx(5,"waves")
D.dKi=new C.m7("ocean","Ocean Calm","Nature",D.aGg,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dK4=new C.rx(6,"sunset")
D.dKn=new C.m7("sunset","Sunset Glow","Nature",D.dK4,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dK5=new C.rx(7,"mountains")
D.dKa=new C.m7("mountain","Mountain Air","Nature",D.dK5,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dK6=new C.rx(8,"stars")
D.dKh=new C.m7("night","Night Sky","Nature",D.dK6,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a5j=new C.rx(4,"orbs")
D.dKf=new C.m7("aurora","Aurora","Nature",D.a5j,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dKp=new C.m7("sand","Sand Dune","Nature",D.aGg,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dK7=new C.rx(9,"rays")
D.dKe=new C.m7("golden","Golden Hour","Warm",D.dK7,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dKc=new C.m7("royal","Royal Purple","Warm",D.aGe,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dKd=new C.m7("rose","Rose Petal","Warm",D.a5j,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dK0=new C.rx(12,"blocks")
D.dKg=new C.m7("electric","Electric Blue","Bold",D.dK0,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dKq=new C.m7("mint","Fresh Mint","Bold",D.a5j,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dK2=new C.rx(14,"minimal")
D.dKm=new C.m7("white","Clean White","Clean",D.dK2,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dK_=new C.rx(10,"frame")
D.dKj=new C.m7("midnight","Midnight Gold","Clean",D.dK_,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dKl=new C.m7("community","Community Green","Clean",D.aGf,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a3A=w([D.dKr,D.dKo,D.dK9,D.dKk,D.dK8,D.dKb,D.dKi,D.dKn,D.dKa,D.dKh,D.dKf,D.dKp,D.dKe,D.dKc,D.dKd,D.dKg,D.dKq,D.dKm,D.dKj,D.dKl],B.ax("O<m7>"))
D.dg2=w([D.AP,A.vd,A.hH,A.bZ],x.O)
D.dgk=w([D.afh,D.jg],x.O)
D.dgu=w(["pdf","docx","txt","md"],x.s)
D.eKS=new B.bk(-3,150,34)
D.eKT=new B.bk(-3,214,62)
D.eKU=new B.bk(-3,288,62)
D.dhj=w([D.eKS,D.eKT,D.eKU],B.ax("O<+(K,K,K)>"))
D.dhN=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dio=w(["Write","Design","Print & fold"],x.s)
D.jQ=new C.uK(2,"triangle")
D.CS=new C.uK(3,"arrow")
D.fr=new C.uK(4,"line")
D.jR=new C.uK(5,"parallelogram")
D.dir=w([D.bf,D.eN,D.jQ,D.CS,D.fr,D.jR,D.l7],x.m)
D.el2=new B.z(240,96)
D.enL=new B.z(560,46)
D.diw=w([D.el2,D.enL],x.G)
D.hel=new C.xD(0,"classic")
D.dG0=new C.nJ("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aFR,4294570461,4282000405,4284234270)
D.dGc=new C.nJ("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aFS,4294635750,4281999378,4285213214)
D.dG1=new C.nJ("elegant_navy","Umoja Mzuri",y.s,D.a5d,4294967035,4279378237,4290283019)
D.dGe=new C.nJ("elegant_gold","Umoja wa Dhahabu",y.Q,D.aG_,4294966515,4281016592,4289102906)
D.dGg=new C.nJ("kente_sunset","Kente ya Jua",y.H,D.aFT,4294964964,4282000405,4279983648)
D.dFZ=new C.nJ("indigo_mudcloth","Nguo ya Indigo",y.n,D.aFU,4294439140,4279903102,4279903102)
D.dG3=new C.nJ("adinkra_royal","Muhuri wa Adinkra",y.z,D.aFV,4294965484,4285218591,4287322667)
D.dG8=new C.nJ("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aFW,4294244340,4279196764,4279196764)
D.dGa=new C.nJ("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aFX,4294505710,4279970378,4291058750)
D.hem=new C.xD(1,"ringsNdoa")
D.dG2=new C.nJ("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.rv,4294966259,4279378237,4291404327)
D.heo=new C.xD(2,"coupleCards")
D.dGd=new C.nJ("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.rv,4294966259,4279378237,4291404327)
D.hep=new C.xD(3,"kuhoweshaForm")
D.dG9=new C.nJ("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.CM,4294966519,4279378237,4291404327)
D.heq=new C.xD(4,"mahariPande")
D.dG_=new C.nJ("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.rv,4294966259,4279904068,4291404327)
D.her=new C.xD(5,"familiaMti")
D.dGf=new C.nJ("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aFY,4294966776,4280241466,4291404327)
D.hes=new C.xD(6,"ndoaSafi")
D.dG6=new C.nJ("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.CM,4294966519,4279378237,4291404327)
D.het=new C.xD(7,"peteWide")
D.dG5=new C.nJ("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.rv,4294966259,4282001936,4291404327)
D.heu=new C.xD(8,"muhuriCrest")
D.dG4=new C.nJ("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.rv,4294966259,4279378237,4291404327)
D.hev=new C.xD(9,"fomuWazi")
D.dG7=new C.nJ("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.CM,4294966519,4279904068,4291404327)
D.hen=new C.xD(10,"upendoOrnate")
D.dGb=new C.nJ("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aFZ,4294965493,4286200650,4291404327)
D.QP=w([D.dG0,D.dGc,D.dG1,D.dGe,D.dGg,D.dFZ,D.dG3,D.dG8,D.dGa,D.dG2,D.dGd,D.dG9,D.dG_,D.dGf,D.dG6,D.dG5,D.dG4,D.dG7,D.dGb],B.ax("O<nJ>"))
D.CQ=new C.aqT(0,"landscape169")
D.od=new C.aqT(1,"portrait916")
D.djj=w([D.CQ,D.od],B.ax("O<aqT>"))
D.ayC=w([A.hH,A.bL,A.cY,A.i0,A.c],x.O)
D.ui=w([A.bZ,A.ih],x.O)
D.ek6=new B.z(1000,"M")
D.epb=new B.z(900,"CM")
D.enF=new B.z(500,"D")
D.elW=new B.z(400,"CD")
D.ek7=new B.z(100,"C")
D.epc=new B.z(90,"XC")
D.enG=new B.z(50,"L")
D.elX=new B.z(40,"XL")
D.ekd=new B.z(10,"X")
D.epo=new B.z(9,"IX")
D.enX=new B.z(5,"V")
D.enq=new B.z(4,"IV")
D.ekI=new B.z(1,"I")
D.dk_=w([D.ek6,D.epb,D.enF,D.elW,D.ek7,D.epc,D.enG,D.elX,D.ekd,D.epo,D.enX,D.enq,D.ekI],x.ek)
D.eLV=new B.ct(["open",A.jp,"Open & write","Keep writing this book"])
D.eMl=new B.ct(["print",A.u4,"Print as a book","Fold and staple it"])
D.dk9=w([D.eLV,D.eMl],B.ax("O<+(m,a1,m,m)>"))
D.dkR=w([D.a5l,D.mG,D.I5,D.RZ,D.df,D.RY],x.i)
D.eCw=new B.z(-1,"Small")
D.ejS=new B.z(0,"Normal")
D.ekH=new B.z(1,"Big")
D.eli=new B.z(2,"Huge")
D.dlp=w([D.eCw,D.ejS,D.ekH,D.eli],x.ek)
D.dlP=w([49,65,89,38,83,89],x.t)
D.dlW=w([A.vd,A.hH,A.bZ],x.O)
D.dmn=w([D.df,D.mG,D.ur,D.a5l,D.I5,D.RZ],x.i)
D.aDT=new B.du([0,D.LS,8,D.agz,12,D.agA],B.ax("du<H,a3x>"))
D.e5x={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bke=new B.v(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cQ0=w([A.bL,D.bke],x.O)
D.d9D=w([A.b_,A.bi],x.O)
D.d4i=w([A.c5,A.aR,A.bH],x.O)
D.dka=w([A.cr,A.bq],x.O)
D.cXO=w([A.ba,A.f0],x.O)
D.d7_=w([A.b5,A.fa],x.O)
D.bdl=new B.v(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.d6h=w([D.bdl,A.oH],x.O)
D.d0K=w([A.h3,A.xp],x.O)
D.cXC=w([A.bu,A.c8],x.O)
D.dp2=new B.bt(D.e5x,[D.cQ0,K.ap9,D.d9D,D.d4i,D.dka,D.cXO,D.d7_,D.d6h,D.d0K,D.cXC],B.ax("bt<m,ai<v>>"))
D.e4O={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a4c=new B.bt(D.e4O,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.ax("bt<m,m>"))
D.a4j=new B.bt(A.hT,[],B.ax("bt<H,+icon3d,picture(m?,m?)>"))
D.dtk=new F.MU(30,null)
D.dyo=new F.mt("Chapter 1","","","")
D.dj4=w([D.dyo],x.B)
D.dys=new F.rn("My Book","","",D.dj4,E.aFa)
D.dyq=new F.uA("starry",null,null,null,null,"","","")
D.dyt=new F.rn("Dream Big","","",E.a3h,D.dyq)
D.dyr=new F.uA("story",null,null,null,null,"","","")
D.dyu=new F.rn("Little Lion","","",E.a3h,D.dyr)
D.dyp=new F.uA("vintage",null,null,null,null,"","","")
D.dyv=new F.rn("Our Story","","",E.a3h,D.dyp)
D.dBs=new C.Eu("","NGMY","","")
D.dIE=new C.zB("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.U,"","","")
D.e_y=new C.b0C(null,null,null,null)
D.e1g=new C.aqY(null)
D.e1s=new C.arr(0,"smaller")
D.e1t=new C.arr(1,"bigger")
D.aGu=new C.arr(2,"fit")
D.e8o=new B.x(3,6)
D.e8y=new B.x(4,8)
D.ec_=new B.D(E.aho,T.acm,null)
D.ec3=new B.D(A.YE,A.mh,null)
D.bJf=new B.ae(A.l0,16,A.c_,null,null,null)
D.ec7=new B.D(A.il,D.bJf,null)
D.b7I=new B.fi(2.2,null,null,null,null,A.c,null,null,null,null)
D.ecj=new B.D(A.FI,D.b7I,null)
D.bTA=new B.ae(A.cy,16,A.aA,null,null,null)
D.ecn=new B.D(A.ev,D.bTA,null)
D.fre=new B.y("Play",null,A.op,null,null,null,null,null,null,null,null,null)
D.d9S=w([U.anE,A.rJ,D.fre],x.p)
D.eQv=new B.ck(A.aN,A.e,A.Q,A.m,null,A.p,null,0,D.d9S,null)
D.ecq=new B.D(A.nb,D.eQv,null)
D.b7R=new B.fi(2.4,null,null,null,null,null,null,null,null,null)
D.eWk=new B.a7(20,20,D.b7R,null)
D.ecv=new B.D(A.il,D.eWk,null)
D.fAl=new B.y("Seconds per slide",null,A.hq,null,null,null,null,null,null,null,null,null)
D.ecD=new B.D(A.bk,D.fAl,null)
D.edY=new C.a8o(2,"print")
D.ee0=new B.iR(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.efD=new B.he("/Annot")
D.efF=new B.he("/URI")
D.flx=new B.y("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.ehH=new B.jp("share",48,D.flx,null,B.ax("jp<m>"))
D.bTu=new B.ae(A.e0,14,A.eC,null,null,null)
D.ehQ=new B.cL(null,-2,-2,null,null,null,D.bTu,null)
D.cS4=w([H.aeW,A.K],x.O)
D.c__=new B.a8(A.a3,A.a8,A.x,D.cS4,null,null)
D.b0v=new B.o(null,null,null,null,null,D.c__,A.n)
D.bpf=new B.kQ(D.b0v,A.be,null,null)
D.ei1=new B.cL(0,0,null,0,8,null,D.bpf,null)
D.deB=w([A.hI,A.mm,A.c9],x.O)
D.eiF=new B.c_(A.A,0.5,A.x,null,0,D.deB,null,null)
D.elb=new B.z(0.22,A.bi)
D.epI=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.erN=new B.z(0.5,A.he)
D.eAX=new B.z(0.78,A.aV)
D.eLL=new B.ct([A.by,0.22,0.7,2.6])
D.eLR=new B.ct([A.ba,0.36,1.2,1.3])
D.eLX=new B.ct([A.dN,0.28,0.2,0.4])
D.eM2=new B.ct([A.cB,0.05,0.3,0.35])
D.eM8=new B.ct([A.bu,0.28,0.9,0])
D.eMg=new B.ct([A.aF,-0.25,-0.15,0.45])
D.eN6=new B.ct([A.c5,0.42,1,4.1])
D.eQd=new B.a9m(9)
D.bKm=new B.ae(A.GD,28,A.bH,null,null,null)
D.fAU=new B.y("NGMY News",null,A.de,null,null,null,null,null,null,null,null,null)
D.bz9=new B.bB(1,A.bg,D.fAU,null)
D.dhQ=w([D.bKm,A.at,D.bz9],x.p)
D.eQp=new B.ck(A.aN,A.e,A.j,A.m,null,A.p,null,0,D.dhQ,null)
D.bKx=new B.ae(A.o0,16,A.c,null,null,null)
D.fCp=new B.y("Book",null,A.om,null,null,null,null,null,null,null,null,null)
D.dlV=w([D.bKx,A.eg,D.fCp],x.p)
D.eQx=new B.ck(A.aN,A.e,A.Q,A.m,null,A.p,null,0,D.dlV,null)
D.bR5=new B.ae(A.jI,10,A.c,null,null,null)
D.fpk=new B.y("Pro",null,A.ns,null,null,null,null,null,null,null,null,null)
D.d9X=w([D.bR5,A.qq,D.fpk],x.p)
D.eQB=new B.ck(A.aN,A.e,A.Q,A.m,null,A.p,null,0,D.d9X,null)
D.fAj=new B.y("Make a newspaper",null,A.TX,null,null,null,null,null,null,null,null,null)
D.c0b=w([E.a1d,A.ab,D.fAj],x.p)
D.eQC=new B.ck(A.aN,A.e,A.Q,A.m,null,A.p,null,0,D.c0b,null)
D.bPC=new B.ae(A.lp,18,A.bL,null,null,null)
D.frs=new B.y("Ending celebration",null,A.hX,null,null,null,null,null,null,null,null,null)
D.dgV=w([D.bPC,A.bp,D.frs],x.p)
D.eQF=new B.ck(A.aN,A.e,A.j,A.m,null,A.p,null,0,D.dgV,null)
D.bQS=new B.ae(A.jp,18,A.k2,null,null,null)
D.f62=new B.G(!0,A.k2,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCH=new B.y("Write",null,D.f62,null,null,null,null,null,null,null,null,null)
D.cZO=w([D.bQS,A.ab,D.fCH],x.p)
D.eQM=new B.ck(A.aN,A.e,A.Q,A.m,null,A.p,null,0,D.cZO,null)
D.fpi=new B.y("Download picture",null,A.ol,null,null,null,null,null,null,null,null,null)
D.bBh=new B.qp(A.dZ,A.A,A.f,D.fpi,null)
D.bBs=new B.dq(1,A.cm,D.bBh,null)
D.dal=w([L.anu,A.ab,D.bBs],x.p)
D.eQN=new B.ck(A.aN,A.b7,A.j,A.m,null,A.p,null,0,D.dal,null)
D.bMk=new B.ae(A.GD,22,A.bH,null,null,null)
D.fyT=new B.y("NGMY NEWS",null,K.a7W,null,null,null,null,null,null,null,null,null)
D.cRv=w([D.bMk,A.ab,D.fyT],x.p)
D.eQW=new B.ck(A.aN,A.e,A.Q,A.m,null,A.p,null,0,D.cRv,null)
D.eR7=new B.pb(!1,!1,null,T.VR,null,A.bY,null,null,null)
D.a72=new B.jk([D.cl,D.df,D.ur,D.I4,D.us,D.aGk],B.ax("jk<hF>"))
D.e7c={title:0,quote:1,closing:2,bio:3}
D.eSi=new B.dC(D.e7c,4,x.M)
D.e56={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eSl=new B.dC(D.e56,5,x.M)
D.e6v={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a73=new B.dC(D.e6v,8,x.M)
D.e5I={Design:0,Transitions:1,Insert:2}
D.eSq=new B.dC(D.e5I,3,x.M)
D.heD=new B.jk([D.a5m],B.ax("jk<w1>"))
D.e5R={float3d:0,drift:1,pulse:2}
D.eSu=new B.dC(D.e5R,3,x.M)
D.aNF=new B.jk([D.I1,D.I2,D.I3],B.ax("jk<mx>"))
D.e54={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aNI=new B.dC(D.e54,14,x.M)
D.heE=new B.dC(A.hT,0,B.ax("dC<w1>"))
D.e5O={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.T3=new B.dC(D.e5O,4,x.M)
D.e4Y={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aNL=new B.dC(D.e4Y,30,x.M)
D.e5X={circle:0,triangle:1,hexagon:2,diamond:3}
D.eSR=new B.dC(D.e5X,4,x.M)
D.eVf=new B.as(390,844)
D.eW4=new B.a7(20,20,A.KH,null)
D.aOy=new B.a7(null,2.5,null,null)
D.eWe=new B.a7(18,18,A.KH,null)
D.bQW=new B.ae(A.j4,19,A.c,null,null,null)
D.eWp=new B.a7(38,38,D.bQW,null)
D.bPa=new B.ae(A.yA,22,A.c,null,null,null)
D.eWr=new B.a7(40,40,D.bPa,null)
D.eX_=new B.hP(2,10,10,1.15,null)
D.aOG=new B.hP(2,16,14,0.62,null)
D.bxd=new B.Q(32,30,32,40)
D.b9c=new B.v(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bKj=new B.ae(A.q1,56,D.b9c,null,null,null)
D.afL=new B.v(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.f80=new B.G(!0,D.afL,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvV=new B.y("Your books will live here.",null,D.f80,null,A.L,null,null,null,null,null,null,null)
D.d1G=w([D.bKj,A.R,D.fvV],x.p)
D.bod=new B.fl(A.ah,A.e,A.j,A.m,null,A.p,null,0,D.d1G,null)
D.ecB=new B.D(D.bxd,D.bod,null)
D.eXl=new B.ma(D.ecB,null)
D.fvS=new B.y("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.eXD=new B.b1(D.fvS,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.ftZ=new B.y("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.eXE=new B.b1(D.ftZ,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fyX=new B.y("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.eXN=new B.b1(D.fyX,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fzv=new B.y("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.eY1=new B.b1(D.fzv,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fsF=new B.y("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.eYe=new B.b1(D.fsF,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fGD=new B.y("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.eYx=new B.b1(D.fGD,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fDJ=new B.y("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.eYI=new B.b1(D.fDJ,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fzE=new B.y("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eZp=new B.b1(D.fzE,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fny=new B.y("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.eZG=new B.b1(D.fny,null,null,null,null,null,null,null,A.ix,null,null,null,null,A.pR,!1,null,null,null,A.r,null)
D.fpr=new B.y("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.eZY=new B.b1(D.fpr,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fvy=new B.y("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.f__=new B.b1(D.fvy,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fve=new B.y("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.f_0=new B.b1(D.fve,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fBH=new B.y("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.f_1=new B.b1(D.fBH,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fjL=new B.y("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.f_a=new B.b1(D.fjL,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fqB=new B.y("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.f_x=new B.b1(D.fqB,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fFk=new B.y("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.f_z=new B.b1(D.fFk,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fES=new B.y("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.f_D=new B.b1(D.fES,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fiM=new B.y("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.f_F=new B.b1(D.fiM,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fAP=new B.y("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.f_O=new B.b1(D.fAP,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fEs=new B.y("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.f02=new B.b1(D.fEs,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fEj=new B.y("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.f04=new B.b1(D.fEj,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fiE=new B.y("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.f0a=new B.b1(D.fiE,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fmx=new B.y("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.f0C=new B.b1(D.fmx,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fDw=new B.y("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.f0O=new B.b1(D.fDw,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.fml=new B.y("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.f12=new B.b1(D.fml,null,null,null,null,null,null,null,null,null,null,null,null,A.T,!1,null,null,null,A.r,null)
D.bgl=new B.v(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cQe=w([A.i0,A.oH,D.bgl,D.acN,A.i0],x.O)
D.f1q=new B.fW(A.A,0,6.283185307179586,A.x,D.cQe,null,null)
D.cZ1=w([A.bL,A.bZ,A.hH,D.AP,A.bL],x.O)
D.aPe=new B.fW(A.A,0,6.283185307179586,A.x,D.cZ1,null,null)
D.dc7=w([A.c5,A.by,A.ba,A.bn,A.bH,A.c5],x.O)
D.f1v=new B.fW(A.A,0,6.283185307179586,A.x,D.dc7,null,null)
D.cSi=w([A.pN,A.oI,A.xn,A.i0,A.pN],x.O)
D.f1w=new B.fW(A.A,0,6.283185307179586,A.x,D.cSi,null,null)
D.dc1=w([A.aO,A.bK,A.aL,A.ak,A.aO],x.O)
D.f1x=new B.fW(A.A,0,6.283185307179586,A.x,D.dc1,null,null)
D.djQ=w([A.bu,A.ba,A.by,A.c5,A.bu],x.O)
D.f1z=new B.fW(A.A,0,6.283185307179586,A.x,D.djQ,null,null)
D.bcn=new B.v(1,0,1,0,A.t)
D.bgC=new B.v(1,0,1,1,A.t)
D.bdZ=new B.v(1,0,0,1,A.t)
D.ban=new B.v(1,1,0,1,A.t)
D.dfV=w([A.KY,A.aeE,D.bcn,D.bgC,D.bdZ,D.ban,A.KY],x.O)
D.f1A=new B.fW(A.A,0,6.283185307179586,A.x,D.dfV,null,null)
D.f1P=new C.avu(2,"immersiveSticky")
D.f1Q=new C.avu(3,"edgeToEdge")
D.f1R=new C.avu(4,"manual")
D.f4f=new B.G(!0,A.oC,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPN=new B.G(!0,A.f1,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4O=new B.G(!0,E.mZ,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6j=new B.G(!0,A.ad,null,null,null,null,13,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7i=new B.G(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7s=new B.G(!0,A.c_,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7M=new B.G(!0,A.eC,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9a=new B.G(!0,A.bK,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9k=new B.G(!0,A.k1,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9y=new B.rJ(!0,A.Io,null,null,null,null,A.dt,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.fa0=new B.G(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faD=new B.G(!0,A.ji,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb_=new B.G(!0,A.aA,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ee3=new B.iR(1,1,0.7568627450980392,0.027450980392156862)
D.fb3=new B.rJ(!0,D.ee3,null,null,null,null,A.dt,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.aeL=new B.v(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aQx=new B.G(!0,D.aeL,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbb=new B.G(!0,D.afL,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbc=new B.G(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQz=new B.G(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbO=new B.rJ(!0,A.pb,null,null,null,null,A.dt,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc4=new B.G(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcB=new B.G(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcD=new B.G(!0,D.aeL,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Jp=new B.G(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fd4=new B.G(!0,A.bZ,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdd=new B.G(!0,A.bK,null,null,null,null,14,A.a6,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdg=new B.G(!0,A.bL,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdy=new B.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.awj,null,null,null)
D.fdA=new B.G(!0,A.cs,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdC=new B.G(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdP=new B.G(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe0=new B.G(!0,A.dr,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fey=new B.G(!0,A.aQ,null,null,null,null,null,A.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feH=new B.G(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feV=new B.G(!0,A.ad,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRa=new B.G(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRc=new B.G(!0,A.c_,null,null,null,null,11.5,A.a6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.blQ=new B.v(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.fgD=new B.G(!0,D.blQ,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aRi=new B.G(!0,E.mZ,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fh7=new B.G(!0,A.bK,null,null,null,null,11,A.a6,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fha=new B.G(!0,O.li,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fae=new B.G(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiq=new B.y("NEW",null,D.fae,null,null,null,null,null,null,null,null,null)
D.fiH=new B.y("Hati ya Kuhowesha",null,A.fs,null,null,null,null,null,null,null,null,null)
D.fj7=new B.y("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fjr=new B.y("Scrollable PDF on this slide",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fka=new B.y("Big quote mark",null,A.j9,null,null,null,null,null,null,null,null,null)
D.fkd=new B.y("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fko=new B.y("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fkQ=new B.y("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fkS=new B.y("How many slides?",null,A.hq,null,null,null,null,null,null,null,null,null)
D.flp=new B.y("Transfer",null,A.cj,null,null,null,null,null,null,null,null,null)
D.f65=new B.G(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flK=new B.y("Luxury FX",null,D.f65,null,null,null,null,null,null,null,null,null)
D.fm4=new B.y("Font",null,A.rO,null,null,null,null,null,null,null,null,null)
D.fmf=new B.y("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fmm=new B.y("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fgb=new B.G(!0,A.bK,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmu=new B.y("Example  GA847",null,D.fgb,null,null,null,null,null,null,null,null,null)
D.fmU=new B.y("Design shapes",null,A.j9,null,null,null,null,null,null,null,null,null)
D.fn4=new B.y("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fn8=new B.y("Non-stop (loop)",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fnm=new B.y("Hati ya Kuhoweya",null,A.fs,null,null,null,null,null,null,null,null,null)
D.fnF=new B.y("Photo studio",null,A.fP,null,null,null,null,null,null,null,null,null)
D.fo7=new B.y("Add your picture",null,A.kj,null,null,null,null,null,null,null,null,null)
D.f9z=new B.G(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo8=new B.y("Enter document code",null,D.f9z,null,A.L,null,null,null,null,null,null,null)
D.fo9=new B.y("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.foe=new B.y("English",null,null,null,null,null,null,null,null,null,null,null)
D.f78=new B.G(!0,E.mZ,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foA=new B.y("Delete this book?",null,D.f78,null,A.L,null,null,null,null,null,null,null)
D.fbE=new B.G(!0,E.mZ,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpt=new B.y("Your library",null,D.fbE,null,null,null,null,null,null,null,null,null)
D.fpz=new B.y("Delete",null,A.aQr,null,null,null,null,null,null,null,null,null)
D.fpC=new B.y("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,As.Dy,null,null,null,null,null,null,null,null,null)
D.fpN=new B.y("Element flies in",null,A.aQD,null,null,null,null,null,null,null,null,null)
D.U5=new B.y("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fqa=new B.y("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fqu=new B.y("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.fqy=new B.y("Cancel",null,E.aQN,null,null,null,null,null,null,null,null,null)
D.fqA=new B.y("The lines and circles that come with the design",null,A.hc,null,null,null,null,null,null,null,null,null)
D.ff2=new B.G(!0,A.hh,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr_=new B.y("DOCUMENT CODE",null,D.ff2,null,null,null,null,null,null,null,null,null)
D.frO=new B.y("Quotes",null,G.a8x,null,null,null,null,null,null,null,null,null)
D.f8Y=new B.G(!0,O.li,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frW=new B.y("Add a picture",null,D.f8Y,null,null,null,null,null,null,null,null,null)
D.fs3=new B.y("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a8d,null,A.L,null,null,null,null,null,null,null)
D.fs7=new B.y("Look & feel",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fsc=new B.y("Rings",null,A.hX,null,null,null,null,null,null,null,null,null)
D.fsi=new B.y("W",null,A.rO,null,null,null,null,null,null,null,null,null)
D.fss=new B.y("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fsL=new B.y("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.TU,null,A.L,null,null,null,null,null,null,null)
D.fsN=new B.y("Write your book",null,A.cA,null,null,null,null,null,null,null,null,null)
D.ftw=new B.y("Add page",null,A.cj,null,null,null,null,null,null,null,null,null)
D.ftL=new B.y("Malipo ya Awamu ya Mahari",null,A.fs,null,null,null,null,null,null,null,null,null)
D.f9o=new B.G(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu_=new B.y("Create with AI",null,D.f9o,null,A.L,null,null,null,null,null,null,null)
D.fut=new B.y("Apply look",null,A.hX,null,null,null,null,null,null,null,null,null)
D.fa5=new B.G(!0,A.ek,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvg=new B.y("Type your presentation below",null,D.fa5,null,A.L,null,null,null,null,null,null,null)
D.fvj=new B.y("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,K.aRm,null,A.L,null,null,null,null,null,null,null)
D.fvl=new B.y("Keep it",null,A.cj,null,null,null,null,null,null,null,null,null)
D.f54=new B.G(!0,A.cn,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvs=new B.y("Done",null,D.f54,null,null,null,null,null,null,null,null,null)
D.fvN=new B.y("Delete",null,A.nu,null,null,null,null,null,null,null,null,null)
D.fvX=new B.y("Hati ya Kiapo cha Uongozi",null,A.fs,null,null,null,null,null,null,null,null,null)
D.f8i=new B.G(!0,A.aQ,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwQ=new B.y("Write your idea in any language \u2014 the AI makes the slides.",null,D.f8i,null,A.L,null,null,null,null,null,null,null)
D.fxb=new B.y("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fxh=new B.y("Layout",null,A.TZ,null,null,null,null,null,null,null,null,null)
D.fxV=new B.y("Print",null,A.cA,null,null,null,null,null,null,null,null,null)
D.fy0=new B.y("X",null,A.rO,null,null,null,null,null,null,null,null,null)
D.fyA=new B.y("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,A9.Jk,null,null,null,null,null,null,null,null,null)
D.fz9=new B.y("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fzn=new B.y("Hati ya Kuhowa",null,A.fs,null,null,null,null,null,null,null,null,null)
D.fzp=new B.y("Choose a class template",null,A.fs,null,null,null,null,null,null,null,null,null)
D.fzr=new B.y("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hc,null,null,null,null,null,null,null,null,null)
D.fzy=new B.y("Download the newspaper picture",null,A.cA,null,null,null,null,null,null,null,null,null)
D.fzL=new B.y("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fzS=new B.y("Done",null,A.aR9,null,null,null,null,null,null,null,null,null)
D.fA1=new B.y("Ending celebration",null,A.de,null,null,null,null,null,null,null,null,null)
D.fA2=new B.y("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fAh=new B.y("Plays after your last slide. Tap one to watch it and change its words or logo.",null,A9.uO,null,null,null,null,null,null,null,null,null)
D.fBe=new B.y("Export presentation",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fBf=new B.y("What would you like to do?",null,D.aQx,null,null,null,null,null,null,null,null,null)
D.fBj=new B.y("Delete",null,A.cA,null,null,null,null,null,null,null,null,null)
D.fBP=new B.y("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fBT=new B.y("Hati (Documents)",null,A.fs,null,null,null,null,null,null,null,null,null)
D.fC5=new B.y("Done",null,A.lc,null,null,null,null,null,null,null,null,null)
D.fg1=new B.G(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCa=new B.y("Delete presentation?",null,D.fg1,null,A.L,null,null,null,null,null,null,null)
D.fCt=new B.y("After the last slide it starts again from the first",null,A.hc,null,null,null,null,null,null,null,null,null)
D.fCF=new B.y("\ud83c\udf33",null,A.Ji,null,A.L,null,null,null,null,null,null,null)
D.fCW=new B.y("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hc,null,null,null,null,null,null,null,null,null)
D.fD2=new B.y("Transfer document",null,A.oo,null,null,null,null,null,null,null,null,null)
D.fDd=new B.y("Add to the slides",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fDA=new B.y("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fDP=new B.y("Make a book",null,I.aQ5,null,null,null,null,null,null,null,null,null)
D.fDT=new B.y("Books",null,A.cA,null,null,null,null,null,null,null,null,null)
D.f8R=new B.G(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDU=new B.y("Keep this page open until it finishes.",null,D.f8R,null,null,null,null,null,null,null,null,null)
D.fDW=new B.y("Making your video",null,A.de,null,null,null,null,null,null,null,null,null)
D.fE0=new B.y("LANGUAGE",null,H.zN,null,null,null,null,null,null,null,null,null)
D.fE7=new B.y("Use this ending",null,A.cA,null,null,null,null,null,null,null,null,null)
D.fEf=new B.y("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fEh=new B.y("Upload a different logo",null,A.cj,null,null,null,null,null,null,null,null,null)
D.fEy=new B.y("Delete from the database?",null,A.kj,null,null,null,null,null,null,null,null,null)
D.fEz=new B.y("H",null,A.rO,null,null,null,null,null,null,null,null,null)
D.fEY=new B.y("NGMY Quotes",null,A.de,null,null,null,null,null,null,null,null,null)
D.fFp=new B.y("Cover",null,D.aRi,null,null,null,null,null,null,null,null,null)
D.fFt=new B.y("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fFu=new B.y("Each page becomes its own slide you can present",null,A.hc,null,null,null,null,null,null,null,null,null)
D.fFQ=new B.y("Y",null,A.rO,null,null,null,null,null,null,null,null,null)
D.fG0=new B.y("Crop the picture",null,A.lc,null,null,null,null,null,null,null,null,null)
D.fG7=new B.y("Edit text",null,A.Jj,null,null,null,null,null,null,null,null,null)
D.fIp=B.dS("a8a")
D.DL=new C.awN(0,"none")
D.aUM=new C.awN(1,"zipCrypto")
D.aUN=new C.awN(2,"aes")
D.h2B=new F.Pm("","",null)
D.h3H=new C.bbN(null)
D.h4O=new C.Zo(null)
D.h7k=new C.ad2(null)
D.h7m=new C.aDT(null)
D.ha7=new C.a_C(null)
D.hao=new C.a08(null)
D.haH=new C.bta(null)})();(function staticFields(){$.hd2=null
$.hd3=null
$.hd4=null
$.hd5=null
$.fVT=B.v7("_lastQuoRemDigits")
$.fVU=B.v7("_lastQuoRemUsed")
$.ax8=B.v7("_lastRemUsed")
$.fVV=B.v7("_lastRem_nsh")
$.qb=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a6Y=B.U(x.N,x.I)
$.fTl=!1
$.hhT=B.U(B.ax("kT"),x.N)
$.hi5=B.U(B.ax("kT"),x.E)
$.hg5=!1
$.byH="q"
$.Qk=0
$.CF=B.U(x.N,B.ax("ai<zC>"))
$.hgr=!1
$.fXu=!1
$.hmK=null
$.hR1=B.U(x.N,B.ax("aA<m?>"))
$.Ko=""
$.j1=0
$.h9P=function(){var w=x.N
return B.U(w,w)}()
$.h9O=B.U(x.N,x.R)
$.fXP=!1
$.afL=B.U(x.N,x.E)
$.fYD=0
$.bjG=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ifq","D_",()=>C.b9j(0))
w($,"ifo","a2l",()=>C.b9j(1))
w($,"ifp","hqq",()=>C.b9j(2))
w($,"ifn","h1x",()=>$.a2l().v2(0))
w($,"ifl","hqo",()=>C.b9j(1e4))
w($,"ifm","hqp",()=>B.Ea(8))
w($,"ibb","hoq",()=>B.Ea(0))
w($,"ibj","hou",()=>B.Ea(0))
w($,"ibi","hot",()=>B.bXX(0))
w($,"ij9","hsr",()=>{var v,u,t=x.N
t=B.U(t,t)
for(v=D.a4c.gdQ(D.a4c),v=v.gae(v);v.C();){u=v.gT(v)
t.n(0,u.b,u.a)}return t})
w($,"ijA","bDb",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mT(new C.fE2(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mT(new C.fE3(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mT(new C.fE4(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mT(new C.fEf(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mT(new C.fEk(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mT(new C.fEl(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mT(new C.fEm(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mT(new C.fEn(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mT(new C.fEo(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mT(new C.fEp(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mT(new C.fEq(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mT(new C.fE5(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mT(new C.fE6(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mT(new C.fE7(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mT(new C.fE8(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mT(new C.fE9(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mT(new C.fEa(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mT(new C.fEb(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mT(new C.fEc(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mT(new C.fEd(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mT(new C.fEe(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mT(new C.fEg(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mT(new C.fEh(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mT(new C.fEi(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mT(new C.fEj(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.ax("O<ED>"))})
w($,"ijc","hst",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["Qfq1PQe59bhroNprjVmoIneLYwE="]=a.current})($__dart_deferred_initializers__);